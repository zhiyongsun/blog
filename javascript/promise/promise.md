---
title: promise
category: JavaScript
tags: ['JavaScript', 'promise']
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

## 两个 promise 嵌套使用

```js

const getJSON = function(url) {
  const promise = new Promise(function(resolve, reject){
    const handler = function() {
      if (this.readyState !== 4) {
        return;
      }
      if (this.status === 200) {
        resolve(this.response);
      } else {
        reject(new Error(this.statusText));
      }
    };
    const client = new XMLHttpRequest();
    client.open("GET", url);
    client.onreadystatechange = handler;
    client.responseType = "json";
    client.setRequestHeader("Accept", "application/json");
    client.send();

  });

  return promise;
};

getJSON("/post/1.json").then(function(post) {
  return getJSON(post.commentURL);
}).then(function funcA(comments) {
  console.log("resolved: ", comments);
}, function funcB(err){
  console.log("rejected: ", err);
});


getJSON("/post/1.json").then(
  post => getJSON(post.commentURL)
).then(
  comments => console.log("resolved: ", comments),
  err => console.log("rejected: ", err)
);

``` 

上面代码中，第一个then方法指定的回调函数，返回的是另一个Promise对象。这时，第二个then方法指定的回调函数，就会等待这个新的Promise对象状态发生变化。如果变为resolved，就调用funcA，如果状态变为rejected，就调用funcB。

## 错误处理

Promise 对象的错误具有“冒泡”性质，会一直向后传递，直到被捕获为止。也就是说，错误总是会被下一个catch语句捕获。

```js
getJSON('/post/1.json').then(function(post) {
  return getJSON(post.commentURL);
}).then(function(comments) {
  // some code
}).catch(function(error) {
  // 处理前面三个Promise产生的错误
});

```
上面代码中，一共有三个 Promise 对象：一个由getJSON产生，两个由then产生。它们之中任何一个抛出的错误，都会被最后一个catch捕获。


## 写法

一般来说，不要在then方法里面定义 Reject 状态的回调函数（即then的第二个参数），总是使用catch方法。

```js
// bad
promise
  .then(function(data) {
    // success
  }, function(err) {
    // error
  });

// good
promise
  .then(function(data) { //cb
    // success
  })
  .catch(function(err) {
    // error
  });
```
## Promise.prototype.finally()

finally方法用于指定不管 Promise 对象最后状态如何，都会执行的操作。该方法是 ES2018 引入标准的

## Promise.all

```js
const p = Promise.all([p1, p2, p3]);
```

p的状态由p1、p2、p3决定，分成两种情况。

（1）只有p1、p2、p3的状态都变成fulfilled，p的状态才会变成fulfilled，此时p1、p2、p3的返回值组成一个数组，传递给p的回调函数。

（2）只要p1、p2、p3之中有一个被rejected，p的状态就变成rejected，此时第一个被reject的实例的返回值，会传递给p的回调函数。




## Promise.race
```js
const p = Promise.race([p1, p2, p3]);
```

上面代码中，只要p1、p2、p3之中有一个实例率先改变状态，p的状态就跟着改变。那个率先改变的 Promise 实例的返回值，就传递给p的回调函数。

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
