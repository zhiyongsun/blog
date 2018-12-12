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
```

缺点：值是 undefined 和 function 的时候，会被忽略


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

