---
title: 选择器
category: css 
tags: ['css选择器']
date: 2017-02-04 10:08:29
---

## not first child
- 方法1：ie6-8 不能使用
```css
.item:not(:first-child) {
    margin-left: 10px;
}
```

- 方法2：从1开始

```css
.item:nth-child(n+2) {
    margin-left: 10px;
}
```

- 方法3： div+p（选择紧接在 <div> 元素之后的所有 <p> 元素。）
```css
.item + .item {
 margin-left: 10px;
}
```

- 方法4： b~p，匹配所有在#b元素之后的同级p元素。

```css
.item ~ .item {
 margin-left: 10px;
}
```
- 方法5：.item:not(:first-of-type){} 

```css
.item:not(:first-of-type) {
 margin-left: 10px;
}
```

## 参考链接
[stackover: How can I use a not:first-child selector?](https://stackoverflow.com/questions/12289853/how-can-i-use-a-notfirst-child-selector)
