---
title: typescript
tags: ['typescript']
category: typescript
date: 2017-02-06 10:08:29
---

## 基础入门

### 默认情况下null和undefined是所有类型的子类型。

### 类型注解
- 是一种轻量级的为函数或变量添加约束的方式

```tsx
function greeter(person: string) {
    return "Hello, " + person;
}
```

### 接口

```tsx
interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user = { firstName: "Jane", lastName: "User" };
```

## 基础类型
### 类
- 构造函数的参数上使用public等同于创建了同名的成员变量。   
-  
```tsx
class Student {
    fullName: string;
    constructor(public firstName, public middleInitial, public lastName) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person : Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
let user = new Student("Jane", "M.", "User");
```

### 元组
- 元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。 比如，你可以定义一对值分别为 string和number类型的元组。

```tsx
// Declare a tuple type
let x: [string, number];
// Initialize it
x = ['hello', 10]; // OK
// Initialize it incorrectly
x = [10, 'hello']; // Error
```
### 类型断言

```tsx
let someValue: any = "this is a string";

let strLength: number = (<string>someValue).length;
```

```tsx
let someValue: any = "this is a string";

let strLength: number = (someValue as string).length;
```







