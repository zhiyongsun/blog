---
title: 触发 render 的途径
tags: ['react']
category: react
date: 2022-02-16 12:08:29
---
## 四个途径
- 首次渲染  
- 调用this.setState 
- 父组件发生更新（就算props没有发生改变，也会出发render） 
- this.forceUpdate,不会经过shouldComponentUpdate判断。
