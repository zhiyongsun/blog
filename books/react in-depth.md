---
title: react-indepth 读书笔记
category: books
tags: ['books']
abbrlink: 20559
date: 2017-01-20 22:00:00
---

##1 React Life Cycle Methods Overview

#### Birth / Mounting

1. Initialize / Construction
2. getDefaultProps() (React.createClass) or MyComponent.defaultProps (ES6 class)
3. getInitialState() (React.createClass) or this.state = ... (ES6 constructor)
4. componentWillMount()
5. render()
6. Children initialization & life cycle kickoff
7. componentDidMount()
#### Growth / Update

1. componentWillReceiveProps()
2. shouldComponentUpdate()
3. componentWillUpdate()
4. render()
5. Children Life cycle methods
6. componentDidUpdate()

#### Death / Unmount

1. componentWillUnmount()
2. Children Life cycle methods
3. Instance destroyed for Garbage Collection

setState
![setState](./react-lifecycle-flow-chart-states.png)

##2 Growth/Update In-depth

1. The Growth phase is triggered in three different ways: changeing of props, changing of state or calling forceUpdate();
2. Props are immutable by the Component itself.

##3 why react need key ?

By having an identifier based on the data content instead of order, we can help optimize the Component rendering.

##4 小结

本书主要介绍了react声明周期内相关知识点，但是介绍的是比较深层次的，比较细化的一些东西。  
英文的原因，有写地方没有太明白，有时间再看一次。
