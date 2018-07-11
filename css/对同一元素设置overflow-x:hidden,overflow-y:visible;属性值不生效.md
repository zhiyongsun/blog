---
title: '对同一元素设置overflow-x:hidden,overflow-y:visible;属性值不生效'
categories: css
tags: css
abbrlink: 61673
date: 2017-01-20 22:00:00
---
# 背景
在一次开发过程中，对一个元素设置CSS `overflow-x: hidden;` and `overflow-y: visible;` ，理想状况下，在X轴超出部分隐藏，Y轴超出部分显示。然而，元素属性并没有生效。
# 原因
根据[W3C](https://www.w3.org/TR/css3-box/#overflow-x)的说法，如下
> The computed values of ‘overflow-x’ and ‘overflow-y’ are the same as their specified values, except that some combinations with ‘visible’ are not possible: if one is specified as ‘visible’ and the other is ‘scroll’ or ‘auto’, then ‘visible’ is set to ‘auto’. The computed value of ‘overflow’ is equal to the computed value of ‘overflow-x’ if ‘overflow-y’ is the same; otherwise it is the pair of computed values of ‘overflow-x’ and ‘overflow-y’. 
   
也就是说，如果同一个元素X,Y轴上，其中一个设置了`visible`，例外一个设置了`scoll`或者`auto`，这时候，`visible`属性自动转变为`auto`。

# 解决方法
在目标属性外，嵌套父层，一个设置`overflow-x: hidden;`另外一个设置， `overflow-y: visible;` 即可。


# 参考链接 
1. http://stackoverflow.com/questions/6421966/css-overflow-x-visible-and-overflow-y-hidden-causing-scrollbar-issue
2. http://www.brunildo.org/test/Overflowxy2.html
