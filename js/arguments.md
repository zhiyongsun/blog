---
title: 将arguments变成数组
categories: js
tags: arguments
abbrlink: 56762
date: 2017-05-03 22:00:00
---
# 将arguments变成数组
```javascript
function a(a, b, c) {
  let arr = Array.prototype.slice.call(arguments)
  console.log(arr)
}

a(1,2,3)

```
```javascript
  function f(num) {
        if(num == 1 || num == 2){
            return 1
        }else {
            return arguments.callee(num-1) + arguments.callee(num-2)
        }
    }
    console.log(f(4))
```
