---
title: css设计模式
category: css
tags: ['css', 'css设计模式']
date: 2017-02-04 22:00:00
---

## 背景
思考css的设计模式

## SMACSS——Scalable and Modular Architecture for CSS
它的核心是：

1、Base（基础）
基础的样式，就是一些需要最先定义好，针对于某一类元素的通用固定样式。

2、Layout（布局）
布局样式，是跟页面整体结构相关，譬如，列表，主内容，侧边栏的位置、宽高、布局方式等。

3、Module（模块）
模块样式，就是我们在对页面进行拆的过程中，所抽取分类的模块，这类的样式分别写到一起。

4、State（状态）
页面中的某些元素会需要响应不同的状态，比如，可用、不可用、已用、过期、警告等等。将这类样式可以组织到一起。

5、Theme（主题）
主题是指版面整个的颜色、风格之类，一般网站不会有频繁的较大的改动，给我们印象比较深的是QQ空间，其他应用的不是很多，所以，这个一般不会用到，但有这样一个意识是好的，需要用到的时候，就知道该怎样规划。

有了以上5点分类策略，我们的代码组织起来，思路就会很清晰，会安排的很有序，另外的好处是，可以解决命名难和混乱，之所以有这个问题，主因便是我们不知道以怎样的标准去定义元素的所属和特点，有了分类之后，我们不会很随意和混乱的去命名，有了依据，就能更轻松，也不易冲突。


## 参考链接 
1. http://div.io/topic/1806



