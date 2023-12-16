---
title: class
tags: ['class']
category: class
date: 2020-09-30 10:08:29
---

# 基础入门

## Public by default

## ECMAScript Private Fields
```typescript
class Animal {
  #name: string;
  constructor(theName: string) {
    this.#name = theName;
  }
}
```

## Understanding protected
只能被集成，不能被实例化、实例不能使用
```typescript
class Person {
  protected name: string;
  protected constructor(theName: string) {
    this.name = theName;
  }
}

// Employee can extend Person
class Employee extends Person {
  private department: string;

  constructor(name: string, department: string) {
    super(name);
    this.department = department;
  }

  public getElevatorPitch() {
    return `Hello, my name is ${this.name} and I work in ${this.department}.`;
  }
}

let howard = new Employee("Howard", "Sales");
let john = new Person("John");

Constructor of class 'Person' is protected and only accessible within the class declaration.
```

## Readonly modifier
```typescript
class Octopus {
  readonly name: string;
  readonly numberOfLegs: number = 8;

  constructor(theName: string) {
    this.name = theName;
  }
}

let dad = new Octopus("Man with the 8 strong legs");
dad.name = "Man with the 3-piece suit";
```

## Abstract Classes
Methods within an abstract class that are marked as abstract do not contain an implementation 


