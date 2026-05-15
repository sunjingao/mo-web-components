import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const packageJsonPath = path.join(__dirname, '../../package.json');
const changelogPath = path.join(__dirname, '../../doc/view/introduce/log/index.md');

const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

export const currentVersion = packageJson.version;

const versionParts = currentVersion.split('.');
versionParts[2] = parseInt(versionParts[2], 10) + 1;
const newVersion = versionParts.join('.');

packageJson.version = newVersion;

fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

console.log(`.....................版本更新为${newVersion}.....................`);

console.log('请输入更新说明 (单行):');
const readline = await import('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const changelogContent = await new Promise((resolve) => {
  rl.question('', (answer) => {
    rl.close();
    resolve(answer);
  });
});

if (!changelogContent || changelogContent.trim() === '') {
  console.log('未输入更新说明，将使用默认内容');
  changelogContent = '常规更新';
}

let changelogMd = fs.readFileSync(changelogPath, 'utf8');
const versionHeader = `### v${newVersion}`;
const versionEntry = `${versionHeader}\n+ ${changelogContent}`;

if (changelogMd.includes(versionHeader)) {
  changelogMd = changelogMd.replace(
    new RegExp(`${versionHeader}[\\s\\S]*?(?=\\n###|$)`, 'g'),
    versionEntry
  );
} else {
  changelogMd = changelogMd.replace(/(## 更新日志)/, `$1\n${versionEntry}`);
}

fs.writeFileSync(changelogPath, changelogMd);

console.log(`更新日志已更新: v${newVersion} - ${changelogContent}`);
