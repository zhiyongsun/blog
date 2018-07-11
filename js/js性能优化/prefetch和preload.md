---
title: preload 和 prefetch 
abbrlink: 11
---
# preload 和 prefetch 


## preload
 `<link>` 元素的 rel 属性的属性值preload能够让你在你的HTML页面中 `<head>`元素内部书写一些声明式的资源获取请求，可以指明哪些资源是在页面加载完成后即刻需要的。对于这种即刻需要的资源，你可能希望在页面加载的生命周期的早期阶段就开始获取，在浏览器的主渲染机制介入前就进行预加载。这一机制使得资源可以更早的得到加载并可用，且更不易阻塞页面的初步渲染，进而提升性能。

## prefetch
  prefetch documents that the user might visit in the near future.
  
```html
<meta http-equiv="Link" content="</images/big.jpeg>; rel=prefetch">
```

## prefech 和 preload 兼容性
1. [prefech](https://caniuse.com/#search=prefetch)
1. [preload](https://caniuse.com/#search=preload)
1. 到目前为止safari 和 ios-safari不支持

## 两者相同点
浏览器请求资源，不执行


## 两者的区别
  - preload强制浏览器获取当前需要的资源 
  - prefetch获取将来需要的资源， 把决定权留给浏览器， 所以一般浏览器会在闲置的时候下载。总结就是preload一定会下载资源， prefetch不一定


## 使用image标签预加载静态资源
```
<script type="text/javascript">
var my_image = new Image();
my_image.src = 'pre.js';
</script>
```
这是一个针对ios的兼容方案。

## 可以预加载的资源

预加载的资源除了js文件之外，还可以是css，image等， 尤其是iconfont等确定要加载的全局资源，在dom，css构建完之后才下载，可以通过预加载提前完成


## 其他类似的标签
preconnect, prerender









