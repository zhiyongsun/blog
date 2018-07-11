---
title: hardware accelerated
categories: css
tags: css
abbrlink: 13113
date: 2016-12-06 22:00:00
---

# 背景
在一次项目当中，需要用到图片随着鼠标移动而变化，需要很多次重新绘制。从而导致了页面卡顿，想到了硬件加速，就使用CSS属性来开启硬件加速。
# 原因
硬件加速背后的原理，请参考：https://www.sitepoint.com/introduction-to-hardware-acceleration-css-animations/
# 使用方法
并不是所有的CSS元素属性都可以开启硬件加速，只有下面几个可以开启硬件加速： 
 
* transform  
* opacity  
* filter  

只要在元素添加这三个属性之一就可以开启。注意：CSS3的兼容性。你需要自行添加前缀。
# 参考链接 
1. https://www.sitepoint.com/introduction-to-hardware-acceleration-css-animations/






