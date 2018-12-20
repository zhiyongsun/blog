---
title: 构造函数原型里面为什么需要有个 constructor 来指向构造函数自己？
category: JavaScript
tags: ['constructor']
date: 2018-12-17 13:00:00
---
## 简单说
简单说，这样做是为了让所有的实例都能通过 constructor 属性访问构造函数

```js
function F() {}
    F.prototype = {
    _name: 'Eric',
    getName: function() {
    return this._name;
    }
};

```

初看这种方式并无问题，但是你会发现下面的代码失效了：

```js

var f = new F();
alert(f.constructor === F); // output false

```

F 是实例对象 f 的构造函数,但是f.constructor 并不能指向它的构造函数。

可以手动恢复 构造函数的指向
```js
function F() {}
F.prototype = {
    constructor: F, /* reset constructor */
    _name: 'Eric',
    getName: function() {
    return this._name;
    }
};
```

这也就是为什么出现以下类似代码的原因
```js
F.prototype.constructor = F
```

## 参考链接

[揭开js之constructor属性的神秘面纱](https://blog.csdn.net/zengyonglan/article/details/53465505)

