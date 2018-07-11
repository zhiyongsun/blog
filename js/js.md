---
title: JS知识点
categories: js
tags: JS知识点
abbrlink: 55343
date: 2017-02-15 22:00:00
---

# JS知识点
js知识收集  
1. 数据类型：
  * 六种原型数据类型：
     * String
     * Number
     * Boolean
     * null
     * undefined
     * Symbol
  * 以及Object对象
2. JavaScript是函数级作用域(function-level scope)
    * 和C系语言是不同的。块，就像if语句，并不会创建一个新的作用域。只有函数才会创建新的作用域。 
3. 变量提升  
变量提升，很简单，就是把变量提升提到函数的top的地方。我么需要说明的是，变量提升 只是提升变量的声明，并不会把赋值也提升上来。 
4.  函数提升   
   函数提升是把整个函数都提到前面去。 
5. 所有末定义直接赋值的变量自动声明为拥有全局作用域
```javascript
function doSomething(){
    var authorName="山边小溪";
    blogName="梦想天空";
    alert(authorName);
}
doSomething(); //山边小溪
alert(blogName); //梦想天空
alert(authorName); //脚本错误

```

6.js中都可以拥有自己的方法，只有null和undefined是无法拥有方法的值。

7. 数字、布尔值、null、和undefined属于不可变类型

8. typeof 返回的是字符串


