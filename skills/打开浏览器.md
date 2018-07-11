# node 在开发中如何自动打开浏览器？
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

# 参考链接
[opn npm](https://www.npmjs.com/package/opn)
# ad
- Aladdin工作室： 承接react native app开发、微信小程序开发、支付宝小程序开发、H5、PC 页面开发、系统开发。
- 附送搭建好的前端开发框架：react、vue、mpvue（一套代码生成微信小程序，H5页面）等。
- 联系邮箱：785037725@qq.com

