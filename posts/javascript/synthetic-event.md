---
title: 合成事件
category: JavaScript
tags: ['synthetic event']
date: 2018-12-27 20:00:00
---

## 创建自定义事件

```js
var event = new Event('build');
var elem = window

// Listen for the event.
elem.addEventListener('build', function (e) {
  console.log('build');
 }, false);

// Dispatch the event.
elem.dispatchEvent(event);
```

## 添加自定义数据 – CustomEvent()
要向事件对象添加更多数据，可以使用CustomEvent，detail属性可用于传递自定义数据
CustomEvent 接口可以为 event 对象添加更多的数据。例如，event 可以创建如下：

```js
var event = new CustomEvent('build', { 'detail': elem.dataset.time });

```


