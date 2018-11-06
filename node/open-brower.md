---
title: node open browser
tags: ['node']
category: node
date: 2017-09-02 10:08:29
---

## node 在开发中如何自动打开浏览器？
node开发过程中，可能想要启动服务之后，直接打开浏览器，方便开发。使用 opn 即可。

## 使用方法
```js
$ npm install opn
```
使用示例

```node
const config = {
  port: 3000,
};
const opn = require('opn');
opn(`http://localhost:${config.port}/`);
```

## 参考链接
[opn npm](https://www.npmjs.com/package/opn)

