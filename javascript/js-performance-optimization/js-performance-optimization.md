---
title: js性能优化
tags: ['js性能优化']
category: js性能优化
date: 2017-02-04 10:08:29
---

# js性能优化

## switch vs if esle
switch在判断分支时，没有判断所有的可能性，而是用一个静态表来解决这个问题，所以速度要比if-else快。 

## call vs apply
建议使用 call。[详情参考](../call&apply/call&apply.md)

## 使用[],{}直接量创建对象

## 删除dom节点同时删除监听事件

## 使用事件代理

## 变量缓存
比如，数组长度，window下的对象

## 预加载[prefetch和preload](./prefetch和preload.md)

```javascript
<link rel="dns-prefetch" href="//d.1qianbao.com" />
```
## 


