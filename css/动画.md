---
title: 动画
categories: css 
---


# 动画

css3 中实现动画一般使用 transition 以及 animation

## transition
transition可以实现动态效果，实际上是一定时间之内，一组css属性变换到另一组属性的动画展示过程。

为了使transition生效，需要:

- 两个样式：一个是最初的样式，一个是最终的样式，transition可以实现这两种演示见的转换过程。
- transition属性:
    - transition使用4个属性控制：

    - 要以动画展示哪些属性（transition-property）:可以使用all关键字

    - 动画过程有多久(transition--duration),

    - 控制动画速度变化（transition-timing-function:linear,ease,ease-in,ease-out,ease-in-out，贝塞尔曲线等），

    - 动画是否延迟执行（transition-delay）
    
 ```js
.navButton{
   color:black;
  background-color:#fff;
  transition:color,background-color;
  transition-delay:1s, .5s;
}

.navButton:hover{
   color:red;
   background-color:#ccc;  
}
```   

## animation
transition只能从一组css属性变成另一组css属性。animation则可以在多组属性之间变换。    
transition必须使用触发器触发，animation可以使用触发器，也可以在页面加载完成的时候自动触发。    


###  创建动画有两个步骤：

- 定义动画：主要指定义关键帧
```css
@keyframes fadeOut {
    from {
        opacity: 1;
        transform: translateY(0px);
    }
    to {
        opacity: 0;
        transform: translateY(-80px);
    }
}
```

- 将动画应用到元素上

```css
.class-name{
    animation-name:fadeOut;
    animation-duration:2s;
}
```



## 参考链接

1. [css3的新特性transform,transition,animation](https://www.cnblogs.com/bobodeboke/p/6252869.html)
2. [animation MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation)










