## 1、get请求

```js
let query = this.ctx.query;
let name = query.name;
let id = query.id;
```
## 2、post请求
```js
let query = this.ctx.request.body;
let name = query.name;
let id = query.id;
```

## 3、接口返回值

```js
this.ctx.body = {
    code: 0,
    data: '返回的数据',
    msg: '错误数据'
}
```
