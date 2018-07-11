---
title: promise
categories: js
tags: promise
abbrlink: 46982
date: 2017-10-17 16:00:00
---

# 三种状态 
 - pending（进行中）、fulfilled（已成功）和rejected（已失败）
 - 一旦状态改变，就不会再变，任何时候都可以得到这个结果。Promise对象的状态改变，只有两种可能：从pending变为fulfilled和从pending变为rejected。
 - 缺点：
   - 首先，无法取消Promise，一旦新建它就会立即执行，无法中途取消。
   - 其次，如果不设置回调函数，Promise内部抛出的错误，不会反应到外部。
   - 第三，当处于pending状态时，无法得知目前进展到哪一个阶段（刚刚开始还是即将完成）。

## promise简单实用

```javascript
   let myFirstPromise = new Promise(function (resolve, reject) {
        //当异步代码执行成功时，我们才会调用resolve(...), 当异步代码失败时就会调用reject(...)
        //在本例中，我们使用setTimeout(...)来模拟异步代码，实际编码时可能是XHR请求或是HTML5的一些API方法.
        setTimeout(function () {
            resolve("shibai!"); //代码正常执行！
        }, 250);
    });

    myFirstPromise.then(function (successMessage) {
        //successMessage的值是上面调用resolve(...)方法传入的值.
        //successMessage参数不一定非要是字符串类型，这里只是举个例子
        return successMessage;
    }).then(function (result) {
        console.log("ab,", result);
        // 一般只在catch里处理的过程中
    }).catch(function (error) {
        console.log(error);
    });
```
## Promise.all

```javascript
let p1 = Promise.resolve(3);
let p2 = 1337;
let p3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, "foo");
}); 

Promise.all([p1, p2, p3]).then(values => { 
    console.log(values); 
    // [3, 1337, "foo"] 
});
```

## Promise.race
```javascript
var p1 = new Promise(function(resolve, reject) { 
    // 500毫秒后，"one" 以及之后的参数作为方法resolve参数传入进去
    setTimeout(resolve, 500, "one"); 
});
var p2 = new Promise(function(resolve, reject) { 
    setTimeout(resolve, 100, "two"); 
});

Promise.race([p1, p2]).then(function(value) {
  console.log(value); // "two"
  // 两个都完成，但 p2 更快
});
```
