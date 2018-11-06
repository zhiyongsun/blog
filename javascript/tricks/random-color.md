---
title: get vs post 
category: JavaScript
tags: ['JavaScript', 'JavaScript tricks']
date: 2017-05-03 22:00:00
---

# 获取随机色

```js
function getRandomColor () {
  let rgb = []
  for (let i = 0 ; i < 3; ++i){
    let color = Math.floor(Math.random() * 256).toString(16)
    color = color.length == 1 ? '0' + color : color
    rgb.push(color)
  }
  return '#' + rgb.join('')
}
```
