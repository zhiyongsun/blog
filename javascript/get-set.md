---
title: getter and setter
category: JavaScript
tags: ['JS知识点']
date: 2018-11-27 10:00:00
---


## example
实例1

```js
(function () {
    var o = {
        a : 7,
        get b(){return this.a +1;},//通过 get,set的 b,c方法间接性修改 a 属性
        set c(x){this.a = x/2}
    };
    console.log(o.a);
    console.log(o.b);
    o.c = 50;
    console.log(o.a);
})();
```
实例2


```js
(function () {
    var o = null;
    o = Object.create(Object.prototype,//指定原型为 Object.prototype
            {
                bar:{
                    get :function(){
                        return 10;
                    },
                    set : function (val) {
                        console.log("Setting `o.bar` to ",val);
                    }
                }
            }//第二个参数
        );
    console.log(o.bar);
    o.bar = 12;
})();
```

## 参考链接

[浅谈 JS 对象添加 getter与 setter 的5种方法以及如何让对象属性不可配置或枚举](https://segmentfault.com/a/1190000003882976)
