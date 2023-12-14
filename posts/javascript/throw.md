---
title: throw
date: 2018-12-17 13:00:00
---

# throw
throw 出错误，可以被第一个cache捕获，如果未被捕获，则终止执行。
throw 可以抛出任意类型错误

``` typescript
function getRectArea(width, height) {
  if (isNaN(width) || isNaN(height)) {
    throw 'Parameter is not a number!';
  }
}

try {
  getRectArea(3, 'A');
} catch (e) {
  console.error(e);
  // expected output: "Parameter is not a number!"
}
```

``` typescript
throw 'Error2'; // generates an exception with a string value
throw 42;       // generates an exception with the value 42
throw true;     // generates an exception with the value true
throw new Error('Required');  // generates an error object with the message of Required
```