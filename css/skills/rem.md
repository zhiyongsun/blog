---
title: rem实现原理
categories: css
tags: rem
abbrlink: 17664
date: 2017-02-07 22:00:00
---
rem的一句话,使用它可以让你使用长度的地方,基于html的fontsize的值  
比如说html的font-size:100px;你再次页面使用设置其他的为1rem,长度即为
1*100px   
所有说,我们改变在不同的设备,窗口使用不同的html的font-size就可以实现了自适应,而不需要使用media query来实现自适应  
我们配合一段js,来使用,此段js就是设置html的font-size根据屏幕的宽度来自适应     `document.documentElement.style.fontSize=window.innerWidth/3.75 + 'px';  `  
 
可能会有疑问,为什么设置为100px?为什么不设置为1px或者10px之类的?   
这是因为,在html中,font-size值最小为12px,12px不方便计算,所有设置了100px,只要设置成12px以上就可以(包含12px)
