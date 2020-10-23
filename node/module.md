---
title: module
tags: ['node']
category: node
date: 2020-10-23 16:08:29
---

# commonjs
## exports变量
每个 module 包含下面变量 exports
```typescript
var exports = module.exports;
```

下面是无效的
```typescript
exports.hello = function() {
  return 'hello';
};

module.exports = 'Hello world';
```
