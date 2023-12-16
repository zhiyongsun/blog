---
title: 节流函数（throttle）与 防抖函数（debounce）
category: JavaScript
tags: ['debounce']
date: 2019-01-11 14:00:00
---

## 防抖函数

## 节流函数（throttle）

```js
export function throttle(func, wait) {
  var result,
    lastTime,
    context;
  if(wait == null) wait = 100;
  var throttled = function() {
    context = this;
    var canCall = lastTime == null || lastTime && (new Date() - lastTime >= wait);
    console.log(canCall);
    if (canCall) {
      lastTime = new Date();
      result = func.apply(context, arguments);
      context = null;
      return result;
    }
  };
  return throttled;
}
```
## debounce 
函数防抖（debounce）：当持续触发事件时，一定时间段内没有再触发事件，事件处理函数才会执行一次，如果设定的时间到来之前，又一次触发了事件，就重新开始延时。如下图，持续触发scroll事件时，并不执行handle函数，当1000毫秒内没有触发scroll事件时，才会延时触发scroll事件。
以最后一次触发为准
```ts
function debounce (f, wait) {
  let timer
  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      f(...args)
    }, wait)
  }
}

```

### debounce 库

```js
function debounce(func, wait, immediate){
  var timeout, args, context, timestamp, result;
  if (null == wait) wait = 100;

  function later() {
    var last = Date.now() - timestamp;

    if (last < wait && last >= 0) {
      timeout = setTimeout(later, wait - last);
    } else {
      timeout = null;
      if (!immediate) {
        result = func.apply(context, args);
        context = args = null;
      }
    }
  };

  var debounced = function(){
    context = this;
    args = arguments;
    timestamp = Date.now();
    var callNow = immediate && !timeout;
    if (!timeout) timeout = setTimeout(later, wait);
    if (callNow) {
      result = func.apply(context, args);
      context = args = null;
    }

    return result;
  };

  debounced.clear = function() {
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }
  };
  
  debounced.flush = function() {
    if (timeout) {
      result = func.apply(context, args);
      context = args = null;
      
      clearTimeout(timeout);
      timeout = null;
    }
  };

  return debounced;
};
```

## 参考链接

[debounce库](https://github.com/component/debounce)
