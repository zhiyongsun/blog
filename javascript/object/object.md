---
title: object
category: JavaScript
tags: ['Object', 'JavaScript']
date: 2017-05-03 22:00:00
---
# object

# 使用for in进行循环时,会枚举对象的所有属性名(或键名).通常你需要检测object.hasOwnProperty(variable)来确定这个属性是该对象的成员还是来自原型链.
```javascript
for (myvar in obj) {
  if (obj.hasOwnProperty(myvar)) {
    ...
  }
}
```
