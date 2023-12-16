---
title: proxy/Reflect
category: books
tags: ['books']
date: 2021-05-14 10:00:00
---

# proxy方法
调用劫持、代理

```typescript
handler.apply()
函数调用劫持。

handler.construct()
new 操作符劫持

handler.defineProperty()
Object.defineProperty调用劫持。

handler.deleteProperty()
delete 操作符劫持。

handler.get()
获取属性值劫持。

handler.getOwnPropertyDescriptor()
Object.getOwnPropertyDescriptor 调用劫持。

handler.getPrototypeOf()
Object.getPrototypeOf调用劫持。

handler.has()
in 操作符劫持。

handler.isExtensible()
 Object.isExtensible调用劫持。

handler.ownKeys()
Object.getOwnPropertyNames 和Object.getOwnPropertySymbols调用劫持。

handler.preventExtensions()
Object.preventExtensions调用劫持。

handler.set()
设置属性值劫持。

handler.setPrototypeOf()
Object.setPrototypeOf调用劫持。
```
