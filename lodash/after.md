---
title: lodash after
tags: ['lodash']
category: lodash
date: 2021-04-15 10:08:29
---
## code
```typescript
/**
 * The opposite of `before`. This method creates a function that invokes
 * `func` once it's called `n` or more times.
 *
 * @since 0.1.0
 * @category Function
 * @param {number} n The number of calls before `func` is invoked.
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new restricted function.
 * @example
 *
 * const saves = ['profile', 'settings']
 * const done = after(saves.length, () => console.log('done saving!'))
 *
 * forEach(saves, type => asyncSave({ 'type': type, 'complete': done }))
 * // => Logs 'done saving!' after the two async saves have completed.
 */
function after(n, func) {
  if (typeof func !== 'function') {
    throw new TypeError('Expected a function')
  }
  n = n || 0
  return function(...args) {
    if (--n < 1) {
      return func.apply(this, args)
    }
  }
}

export default after
```
## example
```typescript
var saves = ['profile', 'settings'];

var done = _.after(saves.length, function() {
  console.log('done saving!');
});
done();
done();
```

第二次执行 done（)之后，log "done saving"

利用闭包，缓存下来n的值，每次执行之后，n减1；
符合条件执行目标方法；
