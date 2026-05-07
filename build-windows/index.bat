
@echo off
chcp 65001
set /p UserInput=是否已经更新开发文档(y?):

if %UserInput% NEQ y (
    exit 1
)


node ./order/add-version.js && ^
cd ..  && ^
vite build-windows --mode package  && ^
vite build-windows --mode doc  && ^
node ./build-windows/order/git.js  && ^
cd ./dist/  && ^
node ./build-windows/git.js  && ^
cd ..  && ^
npm publish  || node ./order/delete-version.js || node ./build-windows/order/delete-version.js
