---
title: css硬件加速
tags: css硬件加速
categories: css优化
abbrlink: 41321
date: 2017-02-04 10:08:29
---

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
