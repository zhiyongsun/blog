---
title: 'memoize'
category: JavaScript
tags: ['memoize']
date: 2018-11-09 17:00:00
---

```ts
  function memoize(fn) {
    return function () {
      var args = Array.prototype.slice.call(arguments)
      fn.cache = fn.cache || {};
      return fn.cache[args] ? fn.cache[args] : (fn.cache[args] = fn.apply(this,args))
    }
  }

  function sqrt(arg) {
    return Math.sqrt(arg);
  }
  const memoizedSqrt = memoize(sqrt)
  console.time("non-memoized call")
  console.log(sqrt(4))
  console.timeEnd("non-memoized call")
  console.time("memoized call")
  console.log(sqrt(4))
  console.timeEnd("memoized call")
```
