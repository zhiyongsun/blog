---
title: webpack 打包配置
categories: webpack
tags: webpack
abbrlink: 19592
date: 2017-08-30 10:00:00
---

#解析webpack打包的结构 
1. webpack-dev-server - 在 localhost:8080 建立一个 Web 服务器    

1.  --devtool eval - 为你的代码创建源地址。当有任何报错的时候可以让你更加精确地定位到文件和行号  
1. --progress - 显示合并代码进度  
1. --colors - Yay，命令行中显示颜色！  
1. --content-base build - 指向设置的输出目录
1.  如果相同的命令，script->里面有相同的命令，比如 webpack，npm run build，webpack会查找全局命令，npm run build 仅仅会运行本地的依赖 
1. __dirname 当前文件的绝对路径

1. loader 从右到左的顺序
1. require.ensure 打包成为一个单独js
1. ^1.2.3 := >=1.2.3-0 <2.0.0-0 “Compatible with 1.2.3”. When using caret operators, anything from the specified version (including prerelease) will be supported up to, but not including, the next major version (or its prereleases). 1.5.1 will satisfy ^1.2.3, while 1.2.2 and 2.0.0-beta will not.
   

# 配置局域网内访问
启动命令加入

```js
  --host 0.0.0.0 --public 192.168.1.101:3000
```
##plugins
dllPlugin   
对于固定的打包资源，进行打包，不需要二次打包。
