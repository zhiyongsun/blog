---
title: npm settings
tags: npm
categories: npm
abbrlink: 3863
date: 2017-09-02 23:05:31
---

# npm setting

# 三 npm

* $ npm install loppo -g (将md文件生成静态网页)
* 淘宝源
```
//配置淘宝源
npm config set registry https://registry.npm.taobao.org
//验证源
    npm config get registry
```

# Install npm packages globally without sudo on macOS and Linux
https://github.com/sindresorhus/guides/blob/master/npm-global-without-sudo.md

# update package.json
```bash
npm install -g npm-check-updates
```

检查package.json中dependencies的最新版本：
```bash
ncu
```
更新dependencies到新版本：
```bash
ncu -u
```




