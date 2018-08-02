---
title: JavaScript权威指南读书笔记
categories: books
tags: books
abbrlink: 33297
date: 2017-01-20 22:00:00
---
## JavaScript权威指南


## 4. 表达式和运算符
#### 4.2对象和数组的初始化表达式
* 数组直接量的元素列表结尾处可以留下单个都好,这时候并不会创建一个新的值为undefined的元素

#### 4.10 逻辑表达式
##### 4.10.1 逻辑与(&&)
```javascript
    var o = { x : 1};
    var p = null;
    // =>1 : o值真值,因此返回值为o.x
    console.log(o && o.x)
    // =>null: p是价值,因此将其返回,而并不去计算p.x
    console.log(p && p.x)  
```
#### 4.11 赋值表达式
带操作的赋值运算
```javascript
a op = b
a = a op b
```
在a包含具有副作用的表达式(比如函数调用和赋值操作)的时候,两者不等价,比如:
```javascript
data[i++] *= 2;
data[i++] = data[i++] * 2;

 var data = [1,2,3],
        data2 = [1,2,3],
        i = 0,
        j = 0;

    data[++i] *= 2;
    console.log(data)

    data2[++j] = data2[++j] * 2;
    console.log(data2)
```
