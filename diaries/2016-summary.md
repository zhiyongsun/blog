---
title: 2016年终总结
category: diaries
tags: ['diaries','年终总结']
date: 2016-12-03 22:00:00
---


## 一、背景
一直以来，自我感觉，有目标，但是对于具体实现的过程，并没有清晰的短期目标，以及短期目标实现的具体步骤。  
趁此机会，静下心来剖析一下自己。看看自身的问题、优势，总结下2106，计划下2017。
## 二、2016我干了啥

* sass，less
*  Konckout框架 
* 看完一遍Javascript权威指南
* 熟悉了Node
* React框架
* Redux框架
* 熟悉了ES6、7
* 适应了==分解问题==思维，适应了==组件化==
* 

* 与设计师确定公司的设计体系，基于less字体库，色系等。
* 封装可以==定制化==的，==不影响全局==的React组件
* 对React框架内的代码性能进行优化，==Stateless component== => ==PureComponent== => ==Component(shouldUpdateComponent)==
* stateless组件大量使用
* 兼容性写法，代码健壮性思考

## 三、2016不足之处
* GTD时间管理不足
* 执行力不足
* 对代码质量追求不求  
* 适应环境较慢
* 语义化CSS 
* 对公用方法使用的不足
* FQ不稳定
* 对自己的代码管理不足
* 没有深究背后原理
* 想的太多，==Just do it,so TM what？==

* ==2016，混乱，杂序无章，为技术而技术，为业务而业务==
## 四、2016程序小事例
小事例：CSS兼容写法。  

* copy
```
  -webkit-transform-origin:@val;
  -moz-transform-origin:@val;
  -ms-transform-origin:@val;
  -o-transform-origin:@val;
  transform-origin:@val;
```
* mixin初级版
``` less
.transform-pre(@val){
  -webkit-transform-origin:@val;
  -moz-transform-origin:@val;
  -ms-transform-origin:@val;
  -o-transform-origin:@val;
  transform-origin:@val;
}
```
* mixin中级版
```
.pre(@style,@value) {
  -webkit-@{style}: @value;
  -moz-@{style}: @value;
  -ms-@{style}: @value;
  -o-@{style}: @value;
    @{style}: @value;
}
```
* mixin高级版
```
...？？？
```
* CSS后处理器：
[autoprefixer](https://github.com/postcss/autoprefixer)
```
a {
    display: flex;
}
```
```
a {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex
}

```

* 《西部世界》：机器人写代码（代码写代码）


* ==**消除重复劳动**==
## 五、2017计划，基于 ==**消除重复劳动**==的两点想法

* ==**less is more** ==
* 公司设计体系的优化、维护及管理：less变量优化、维护及管理
* Less Mixin复用
* React核心点之一：==Component-Based==，组件复用
* 方法的通用性：==函数式方法==

*  ==**团队协作**==现在的沟通成本有点高
* 减少不必要沟通：==团队内部==，希望推广一种编程范式
* ==函数式方法== => ==编程范式：函数式编程==
* underscore
* redux源码
* 组件、方法没有副作用
* 相互独立而又紧密结合

* 减少不必要沟通：==团队外部==
* ==沟通：==依靠设计师的标注？试试[Zeplin](https://zeplin.io/)吧
* ==沟通：==交互设计，试试[Axure RP](http://)
* 怎么跟设计部门沟通？
* 怎么跟后台部门沟通？
* 怎么跟测试部门沟通？
* 考虑下==团队协作工具？==钉钉？teambition？

* ==**其它**==
* GTD时间管理执行
* ==问题===> ==分解问题== => ==算法== => ==思维导图==
* 精力是有限：专注于JS,React,Node技术栈
* 思考[Mern](http://mern.io/)的使用，基于[React](https://facebook.github.io/react/) + [Node](https://nodejs.org/en/) + [Redux](http://redux.js.org/) + [Express](http://expressjs.com/) + [mongoDB](https://www.mongodb.com/) + [Webpack](https://webpack.github.io/) 的全栈实现，从全栈的角度思考前端。
* 探究浏览器渲染原理
* React，性能优化（原材料：CSS,JS,HTML,Img,Font)
* [sketch](http://xclient.info/s/sketch.html)熟练使用，不依靠设计师标注，减少与设计师不必要沟通
* ==框架==
* 热加载：开发效率提升利器，利大于弊
* Css-module :爸爸再也不用担心CSS类重名✌️ 
* CSS后处理器：
[autoprefixer](https://github.com/postcss/autoprefixer)
```
a {
    display: flex;
}
```
```
a {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex
}

```

## 五、2017该坚持的
* 思维导图
* 代码管理
* 分解问题
* 一手资料
* 看源码
* 从全栈的角度思考问题
* 每日[博客](http://www.sunzhiyong.cn)
## 六、查漏补缺书籍
* The Art of Readable Code
![](https://pic2.zhimg.com/c6ddc1aab62766136d098696075056e1_b.png)
* Clean Code
![](/content/images/2016/12/6e9064134f8f86b3fc00998d01257add_b.png)
* The Clean Coder
![](/content/images/2016/12/b9558b0553d37f116be99242b53b3fe9_b.png)
* JavaScript: The Good Parts
![]()
* Effective JavaScript - 68 Specific Ways to Harness the Power of JavaScript
![](/content/images/2016/12/aef8e41a2b1a830b2b32935ea9d7d1ac_b.png)
* JavaScript Patterns
![](/content/images/2016/12/16a6b931ebf285a1a19ee9d840b4669c_b.png)
* High Performance JavaScript
![]()
* Functional JavaScript ==函数式编程，Underscore,React组件，Redux都渗透着这种思想==
![](/content/images/2016/12/464ada8f1acb3d7ab80799fa618ec604_b.png)
* Javascript权威指南
* 深入理解计算机系统
* 计算机程序的构造和解释
* 哥德尔、艾舍尔、巴赫
* 算法导论
* 代码大全
* 编程珠玑
* 重构

## 七、参考链接 
1. [Google](https://www.google.com)
2. [GitHub](https://github.com/)
2. [Stack Overflow](http://stackoverflow.com/)
3. [CodePen](codepen.io)
4. [CSS-Tricks](https://css-tricks.com/)
5. [MDN](https://developer.mozilla.org)

## 八、很高兴加入平安前端，谢谢各位的帮助


## 九、编程是一种艺术，成为一名编程艺术家
