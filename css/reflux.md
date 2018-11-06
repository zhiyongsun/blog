---
title: 回流
tags: ['回流']
category: 回流
date: 2017-02-04 10:08:29
---

## 导致回流的因素

- 调整窗口大小（Resizing the window）
- 改变字体（Changing the font）
- 增加或者移除样式表（Adding or removing a stylesheet）

- 操作 class 属性（Manipulating the class attribute）
- 脚本操作 DOM（A script manipulating the DOM）
- 计算 offsetWidth 和 offsetHeight 属性（Calculating offsetWidth and offsetHeight）
- 设置 style 属性的值 （Setting a property of the style attribute）
- 内容变化，比如用户在input框中输入文字（Content changes, such as a user typing text in
an input box）?
- 激活 CSS 伪类，比如 :hover (IE 中为兄弟结点伪类的激活)（Activation of CSS pseudo classes such as :hover (in IE the activation of the pseudo class of a sibling)）?
## 避免回流的方法

- 尽可能在DOM树的最末端改变class
 
- 动画效果应用到position属性为absolute或fixed的元素上
- 避免使用CSS的JavaScript表达式
- 牺牲平滑度换取速度 ？
- 避免使用table布局 ？
- 避免设置多层内联样式?
