---
title: block inline element
category: css
tags: ['css']
date: 2017-02-07 22:00:00
---
一、各种元素的width height margin padding 特性（具体css元素的分来参看二）
1.块级元素
width、 height、 margin的四个方向、 padding的四个方向都正常显示，遵循标准的css盒模型。例如：div

2.行内替换元素
width、 height、 margin的四个方向、 padding的四个方向都正常显示，遵循标准的css盒模型。 例如：img

2.行内非替换元素（重点）
width、 height不起作用，用line-height来控制高度。

padding左右起作用，上下不会影响行高，但是对于有背景色和内边距的行内非替换元素，背景可以向元素上下延伸，但是行高没有改变。因此视觉效果就是与前面的行重叠。(《css权威指南》 P249)

margin左右作用起作用，上下不起作用，原因在于：行内非替换元素的外边距不会改变一个元素的行高（《css权威指南》 P227）。

 

