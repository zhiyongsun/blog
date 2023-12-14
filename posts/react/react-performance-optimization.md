---
title: react
tags: ['react']
category: react
date: 2017-02-15 10:08:29
---

## componentWillUnmount() 里面销毁一些
we would want to unregister any global/system/library events, destroy 3rd party UI library elements, etc.

## 多使用 shouldComponentUpdate 
在其里面必须进行判断,不必要的render坚决不要,(特别是数据问空的情况)这要也能让你梳理清楚页面逻辑

## 在constructor bind this   
避免不必要的重新编订this

## 在reducer过滤数据，逻辑在这里尽量抽离，尽可能在组件层面使用无状态组件

