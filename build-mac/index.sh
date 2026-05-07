#!/bin/bash
set -e

# 询问确认
read -p "是否已经更新开发文档(y?): " UserInput
if [ "$UserInput" != "y" ]; then
    exit 1
fi

# 固定在 build-mac 目录
cd "$(dirname "$0")"

# 1. 升级版本号
node ./order/add-version.js

# 2. 回到项目根目录
cd ..

# 3. 构建
vite build --mode package
vite build --mode doc

# 4. 执行 GIT 脚本
node ./build-mac/order/git.js

# 5. 进入 dist
cd ./dist

# 6. 执行 dist 内的 git 脚本
node ../build-mac/git.js

# 7. 回到根目录发布
cd ..
npm publish || {
    # 发布失败，回滚版本
    node ./build-mac/order/delete-version.js
    node ./build-mac/delete-version.js
}