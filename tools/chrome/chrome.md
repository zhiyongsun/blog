---
title: chrome 本地跨域打开浏览器
tags: ['chrome']
category: tools
date: 2017-09-02 23:05:30
---

## 本地非跨域打开浏览器(zhiyong为用户名)
```javascript
$ open -n /Applications/Google\ Chrome.app/ --args --disable-web-security --user-data-dir=/Users/zhiyong/MyChromeDevUserData/
```

## 如何禁止域名自动跳转https

请在chrome的地址栏输入：
chrome://net-internals/#hsts
在打开的页面中， Delete domain 栏（一般最后一个）的输入框中输入：xx.xx.com（注意这里是二级域名），然后点击“delete”按钮，即可完成配置。

然后你可以在 Query domain 栏中搜索刚才输入的域名，点击“query”按钮后如果提示“Not found”，那么你现在就可以使用http来访问了！



## 参考链接

[如何禁止chrome自动跳转https](https://www.cnblogs.com/xiaogangfan/p/6422986.html)
