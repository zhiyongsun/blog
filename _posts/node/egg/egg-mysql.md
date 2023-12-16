使用
如何在项目中增删改查呢？你可以直接在controller里边直接这样用，不过建议自己写一个service来过度下业务



## 1.get 查询单条信息
```js
let user = await this.app.mysql.get('users', { id: 1 });
```
## 2. select 查询多条数据
```js
let users= await this.app.mysql.select('users');
```
## 3. select 有条件的查询，蛋疼的是，他的条件只支持=和in，真鸡儿，想自定义还需要用query

```js
let users = await this.app.mysql.select('users', {
    where: {
        name: ['test', 'test1'], // 相当于 in
    },
    order: [['created_at', 'desc'], ['state', 'desc']]
});
```
## 4. query 直接执行sql语句，为了防止sql注入，采用这种每个?匹配一个元素的方式
```js
let users = await this.app.mysql.query('select * from users where id > ? and state <> ? and phone is not null', [100, 0]);
```
## 5. insert 插入数据
```js
let res = await this.app.mysql.insert('users', {
    name: 'egg',
    phone: 'xxxxxx'
});
let id = res.insertId; // 得到新插入的数据主键
```
## 6. update 更新数据
```js
// 更新id=1的用户信息
let res = await this.app.mysql.update('users', {
    name: 'egg',
    phone: 'xxxxxx'
}, {
    id: 1,
});
```
## 7. delete 删除数据
```js
let res = await this.app.mysql.delete('users', {
    id: 1,
});
```
