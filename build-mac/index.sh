#!/bin/bash
set -e

read -p "是否已经更新开发文档(y?): " UserInput
if [ "$UserInput" != "y" ]; then
    exit 1
fi

# 1. 固定在脚本所在目录 build-mac/
cd "$(dirname "$0")"

# 2. 升级版本号（当前目录就是 build-mac/）
node ./order/add-version.js

# 3. 跳回项目根目录（执行 vite）
cd ..

# 4. 构建（根目录有 index.html，不会报错）
vite build --mode package
vite build --mode doc

# 5. 执行 git.js（根目录调用 build-mac/order/git.js）
node ./build-mac/order/git.js

# 6. 进入 dist/ 目录
cd ./dist

# 7. 执行 dist 内的 git 逻辑（这里直接用根目录下的 build-mac/order/git.js，因为你结构里没有单独的 build/git.js）
# 如果你 dist 目录下还有单独的 git.js，请告诉我，我再帮你调整
node ../build-mac/order/git.js

# 8. 回到根目录发布
cd ..
npm publish || {
    # 发布失败，回滚版本（用 build-mac 里的脚本）
    node ./build-mac/order/delete-version.js
}