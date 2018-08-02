---
title: 行内元素的特点
categories: css
abbrlink: 38867
date: 2017-02-07 22:00:00
---
left 和 top 只有在<strong>定位元素</strong>上才会起作用。
定位：
position：static | relative | absolute | fixed
默认值：static
适用于：除display属性定义为table-column-group | table-column之外的所有元素。    
static：
对象遵循常规流。此时4个定位偏移属性不会被应用。
relative：
对象遵循常规流，并且参照自身在常规流中的位置通过top，right，bottom，left这4个定位偏移属性进行偏移时不会影响常规流中的任何元素。
absolute：
对象脱离常规流，此时偏移属性参照的是离自身最近的定位祖先元素，如果没有定位的祖先元素，则一直回溯到body元素。盒子的偏移位置不影响常规流中的任何元素，其margin不与其他任何margin折叠。
fixed：
与absolute一致，但偏移定位是以窗口为参考。当出现滚动条时，对象不会随着滚动。
当元素定位后，left就是修改到定位父级左边的距离，top就是修改到定位父级顶部的距离。
