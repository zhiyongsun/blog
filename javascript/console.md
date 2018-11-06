---
title: console
category: JavaScript
tags: ['console']
date: 2017-02-15 22:00:01
---
# console

## log
输出正常的 log

## assert()
判断第一个参数是否为真，false的话抛出异常并且在控制台输出相应信息。

```javascript

    var a= true;
    var b =false;
    var c='c';
    console.assert(a,c);
    console.assert(b,c);

```

## clear()
清空控制台

## count() *****
以参数为标识记录调用的次数，调用时在控制台打印标识以及调用次数。

```javascript

var user ={};
function greet() {
  console.count(user);
  return "hi " + user;
}

greet();
greet();
greet();

```

## dir() ***

打印出该对象的所有属性和属性值.

```javascript
    console.dir(document);
```

## dirxml() ***
显示网页的某个节点（node）所包含的html/xml代码
```javascript
    console.dirxml(document.body);
```

## error()
输出错误信息

## group() groupEnd()
用于分组显示
```javascript

    function doTask(){
        console.group("Task Group");
        doSubTaskA(1000);
        doSubTaskA(100000);
        console.log("Task Stage 1 is completed");
        doSubTaskB(10000);
        console.log("Task Stage 2 is completed");
        doSubTaskC(1000,10000);
        console.log("Task Stage 3 is completed");
        console.groupEnd();
    }
    function doSubTaskA(count){
        console.group("Sub Task A Group");
        console.log("Starting Sub Task A");
        for(var i=0;i<count;i++){}
        console.groupEnd();
    }

    function doSubTaskB(count){
        console.group("Sub Task B Group");
        console.log("Starting Sub Task B");
        for(var i=0;i<count;i++){}
        console.groupEnd();
    }

    function doSubTaskC(countX,countY){
        console.group("Sub Task C Group");
        console.log("Starting Sub Task C");
        for(var i=0;i<countX;i++){
            for(var j=0;j<countY;j++){}
        }
        console.groupEnd();
    }
    doTask();
```

## info()
输出 info类从信息

## profile() profileEnd()
console.profile和console.profileEnd配合一起使用来查看CPU使用相关信息
```javascript
    console.profile('array');
    var array = new Array(10000);
    for(var i =0 ; i< array.length; i++){
        array[i] = {};
    }
    console.profileEnd('array');
```

## table()
接收一个强制的参数，它必须是一个数组或者是一个对象，还可以接受一个额外的参数描述表格的列数。

```javascript
    console.table(window);
```

## time() timeEnd()
你可以启动一个计时器（timer）来跟踪某一个操作的占用时长。
```javascript
    console.time('array');
    var array = new Array(10000);
    for(var i =0 ; i< array.length; i++){
        array[i] = {};
    }
    console.timeEnd('array');
```
## timeStamp()
输出时间戳

## trace()
向Web控制台输出一个堆栈跟踪.

```javascript
 function a() {
     console.trace()
 }

 function b() {
     a()
 }
 b();
```

