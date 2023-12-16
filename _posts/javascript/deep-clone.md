---
title: 深度克隆
category: JavaScript
tags: ['deepclone']
date: 2018-12-12 15:00:00
---

## JSON.parse(JSON.stringify(obj)) 

```js
function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj)) 
}

let arr = [
  1, 
  3, 
  {
    username: 'kobe'
  },
function(){}, /11/];
let arr4 = JSON.parse(JSON.stringify(arr));
console.log(arr, arr4)

[
    1,
    3,
    {
        "username": "kobe"
    },
    null,
    {}
]
```

缺点：正则就不再是正则（变为空对象) 和 得到的函数就不再是函数（变为null）了


```js
    function deepClone(obj) {
      return JSON.parse(JSON.stringify(obj)) 
    }
    
  var obj = {a: undefined,b : function() {
      console.log(2)
    }};

  console.log(deepClone(obj))
```


## 对象深拷贝

判断是否为复杂类型
```js
function deepClone(obj){
    let objClone = Array.isArray(obj)?[]:{};
    if(obj && typeof obj==="object"){
        for(key in obj){
            if(obj.hasOwnProperty(key)){
                if(obj[key]&&typeof obj[key] ==="object"){
                    objClone[key] = deepClone(obj[key]);
                }else{
                    objClone[key] = obj[key];
                }
            }
        }
    }
    return objClone;
}    
```

## 参考
[clone deep](https://segmentfault.com/a/1190000020255831)
