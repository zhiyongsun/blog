---
title: middleware
tags: ['middleware']
category: middleware
date: 2017-09-02 10:08:29
---

## 中间件是什么？
中间件其是一个函数，在响应发送之前对请求进行一些操作

```js
function middleware(req,res,next){
    // 做该干的事

    // 做完后调用下一个函数
    next();
}
```

这个函数有些不太一样，它还有一个next参数，而这个next也是一个函数，它表示函数数组中的下一个函数

### 那函数数组又是什么呢

express内部维护一个函数数组，这个函数数组表示在发出响应之前要执行的所有函数，也就是中间件数组

使用app.use(fn)后，传进来的fn就会被扔到这个数组里，执行完毕后调用next()方法执行函数数组里的下一个函数，如果没有调用next()的话，就不会调用下一个函数了，也就是说调用就会被终止

## next
在执行完下一个函数后又会回到之前的函数执行next()之后的部分
这可以理解为中间件的一个特性吧

## Express中间件的使用


```node

var express = require('express');

var app = express();
app.listen(3000, function () {
    console.log('listen 3000...');
});

function middlewareA(req, res, next) {
    console.log('middlewareA before next()');
    next();
    console.log('middlewareA after next()');
}

function middlewareB(req, res, next) {
    console.log('middlewareB before next()');
    next();
    console.log('middlewareB after next()');
}

function middlewareC(req, res, next) {
    console.log('middlewareC before next()');
    next();
    console.log('middlewareC after next()');
}

app.use(middlewareA);
app.use(middlewareB);
app.use(middlewareC);
```

## 实现简单的Express中间件
```js
var http = require('http');

/**
 * 仿express实现中间件机制
 *
 * @return {app}
 */
function express() {

    var funcs = []; // 待执行的函数数组

    var app = function (req, res) {
        var i = 0;

        function next() {
            var task = funcs[i++];  // 取出函数数组里的下一个函数
            if (!task) {    // 如果函数不存在,return
                return;
            }
            task(req, res, next);   // 否则,执行下一个函数
        }

        next();
    }

    /**
     * use方法就是把函数添加到函数数组中
     * @param task
     */
    app.use = function (task) {
        funcs.push(task);
    }

    return app;    // 返回实例
}

// 下面是测试case

var app = express();
http.createServer(app).listen('3000', function () {
    console.log('listening 3000....');
});

function middlewareA(req, res, next) {
    console.log('middlewareA before next()');
    next();
    console.log('middlewareA after next()');
}

function middlewareB(req, res, next) {
    console.log('middlewareB before next()');
    next();
    console.log('middlewareB after next()');
}

function middlewareC(req, res, next) {
    console.log('middlewareC before next()');
    next();
    console.log('middlewareC after next()');
}

app.use(middlewareA);
app.use(middlewareB);
app.use(middlewareC);
```

## 参考链接
1. [Express中间件的原理及实现](https://www.jianshu.com/p/797a4e38fe77)

