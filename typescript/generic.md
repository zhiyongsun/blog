---
title: cases
tags: ['cases']
category: ts
date: 2022-03-08 10:08:29
---
## 通过用case

## 泛型
### 泛型使用
bad
```ts
function identity(arg: any): any {
  return arg;
}
```

good
```ts
function identity<Type>(arg: Type): Type {
  return arg;
}
```

good： 数组

```ts
function loggingIdentity<Type>(arg: Type[]): Type[] {
  console.log(arg.length);
  return arg;
}
```

good： 泛型定义的提取
```ts
interface GenericIdentityFn<Type> {
  (arg: Type): Type;
}
 
function identity<Type>(arg: Type): Type {
  return arg;
}
 
let myIdentity: GenericIdentityFn<number> = identity;
```

### 泛型类
```ts
class GenericNumber<NumType> {
  zeroValue: NumType;
  add: (x: NumType, y: NumType) => NumType;
}
 
let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
  return x + y;
};
```
### 泛型约束
```ts
function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
  return obj[key];
}
 
let x = { a: 1, b: 2, c: 3, d: 4 };
 
getProperty(x, "a");
getProperty(x, "m");
// Argument of type '"m"' is not assignable to parameter of type '"a" | "b" | "c" | "d"'.
```
