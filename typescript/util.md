---
title: typescript 继承
tags: ['typescript']
category: typescript
date: 2022-07-28 14:08:29
---

# type 继承

``` typescript
    type TypeA = {
    name: string;
    };

    type TypeB = {
    age: number;
    country: string;
    };

    type TypeC = TypeA & TypeB;

    const example: TypeC = {
    name: 'Tom',
    age: 30,
    country: 'Chile',
    };
```

# interface 继承

``` typescript
    type TypeA = {
    name: string;
    age: number;
    };

    interface InterfaceA {
    country: string;
    }

    type TypeB = TypeA & InterfaceA;

    const example: TypeB = {
    name: 'Tom',
    age: 30,
    country: 'Chile',
    };
```

# interface extends 继承

``` typescript
    type TypeA = {
    name: string;
    country: string;
    };

    interface InterfaceA extends TypeA {
    age: number;
    }

    const example: InterfaceA = {
    name: 'Tom',
    age: 30,
    country: 'Chile',
    };
```
## interface extends 继承多个

``` typescript
    type TypeA = {
    name: string;
    };

    type TypeB = {
    country: string;
    };

    interface InterfaceA extends TypeA, TypeB {
    age: number;
    }

    const example: InterfaceA = {
    name: 'Tom',
    age: 30,
    country: 'Chile',
    };
```

# 参考
- [How to extend a Type in TypeScript
](https://bobbyhadz.com/blog/typescript-extend-type)