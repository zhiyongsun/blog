---
title: 清除浮动的方法
category: css
tags: ['css']
date: 2017-02-07 22:00:00
---

```css
.clearfix:after {
  display: block;
  clear: both;
  visibility: hidden;
  height: 0;
  content: " ";
  font-size: 0;
}
```
