import { exec } from 'child_process';
import util from 'util';
import { lastestContent } from '../util/read-log-version.js';

const execPromise = util.promisify(exec);

async function runCommand() {
  try {
    console.log(`当前 changelog 内容: ${lastestContent}`);

    const statusResult = await execPromise(`git status --porcelain`);
    const status = statusResult.stdout.trim();

    if (!status) {
      console.log('没有文件需要提交，working tree clean');
      return;
    }

    await execPromise(`git add .`);
    console.log(`整体 add 完成`);

    await execPromise(`git commit -m "${lastestContent}"`);
    console.log(`整体 commit 完成, 提交信息: "${lastestContent}"`);

    await execPromise(`git push -u origin main`);
    console.log(`整体 push 完成`);
  } catch (error) {
    console.error('执行出错:', error.message);

    if (error.stdout && error.stdout.includes('nothing to commit')) {
      console.log('没有文件需要提交');
    } else if (error.message.includes('no changes added')) {
      console.log('没有文件需要提交');
    } else {
      console.error('未知错误，请检查');
    }
  }
}

runCommand();
