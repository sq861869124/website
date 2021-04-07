#!/bin/bash

echo "启动docker"
open --background -a Docker

VER="1.0-$(date '+%Y%m%d-%s')"

echo "清除本地缓存..."
rm -rf ./.cache

# 有任何参数
if [ x$1 != x ]; then
  echo "⚠️  跳过更新依赖‼️"
# 无任何参数
else
  echo "更新依赖..."
  npm i
fi

echo "开始打包版本：$VER"
npm run build

echo "构建并推送镜像..."
image="registry.cn-hangzhou.aliyuncs.com/terminus/erda-site:$VER"
docker build -f local_Dockerfile -t $image . || exit 1
docker push $image || exit 1

echo "打包完成, 本次打包版本号：$VER"
