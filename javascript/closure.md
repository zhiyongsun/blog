---
title: '闭包 '
category: JavaScript
tags: ['闭包']
date: 2017-02-15 22:00:01
---

```javascript
var handle = [];
function bindEvent(){
    for(var i=1; i<=2;i++){
        handle[i] = function() {
          alert(i);
        }
    }
}

bindEvent();
handle[1](); //3
handle[2](); //3

```


```javascript
function f1(){
　　　　var n=999;
　　　　nAdd=function(){n+=1}
　　　　function f2(){
　　　　　　alert(n);
　　　　}
　　　　return f2;
　　}
　　var result=f1();
　　result(); // 999
　　nAdd();
　　result(); // 1000
```

"nAdd=function(){n+=1}"这一行，首先在nAdd前面没有使用var关键字，因此nAdd是一个全局变量,而不是局部变量.

```javascript

　　var name = "The Window";
　　var object = {
　　　　name : "My Object",
　　　　getNameFunc : function(){
　　　　　　return function(){
　　　　　　　　return this.name;
　　　　　　};
　　　　}
　　};
　　alert(object.getNameFunc()());
```

```javascript
　　var name = "The Window";
　　var object = {
　　　　name : "My Object",
　　　　getNameFunc : function(){
　　　　　　var that = this;
　　　　　　return function(){
　　　　　　　　return that.name;
　　　　　　};
　　　　}
　　};
　　alert(object.getNameFunc()());
```
