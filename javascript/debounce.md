---
title: debounce
category: JavaScript
tags: ['debounce']
date: 2019-01-11 14:00:00
---

## example

```js
export function debounce(func, wait) {
  var result,
    lastTime,
    context;
  if(wait == null) wait = 100;
  var debonced = function() {
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
  return debonced;
}
```
