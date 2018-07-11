---
title: less框架的建立与优化
categories: css
abbrlink: 24676
date: 2017-02-03 22:00:00
---

# less应有的作用
我们在使用一个新的事物的时候,它总该是适合我们当前的抉择。  
1. 为什么要引入less？    
css被认为不想编程语言的语言,引入less是为了解决css当前无法解决的一些问题。暂时不看css存在什么问题。 
2. 我们希望less解决的问题？    
  * 对变量的支持
  * 对增加了方法的支持，能够像写方法一样写css   
3. less解决了什么？
> Less 是一门 CSS 预处理语言，它扩展了 CSS 语言，增加了变量、Mixin、函数等特性，使 CSS 更易维护和扩展。[less中文官网](http://lesscss.cn/)        


# 公司less框架存在的问题
1. common 文件乱引用问题
  * 在account项目里，H5—>style->less下的common.less被引用的32次，相当于，common.less里面的class在页面当中重复生成了32次
  * 在 mall项目里面，m-common下面的common.less重复引用对了5次，相遇当把reset.less以及公共类重复生成5次。
 
2. Variables，Mixins不分
  * 在mall项目当中H5—>style->less下的mixin.common.less里面引用了var.common.less，而mixin当中，应该仅仅存在方法，方法不会生出额外的css样式。在这里mixin.common.less，别引用了114次，相当于var.common.less里面的内容被重复生成了114次

 
# 建议及解决方案
1. 所有的组件样式仅仅引用 **common/styles/less/common.var.less** 在这个文件里包含了所有的变量、方法等。引用它不会生成额外的css代码。

2. 在所有项目公用样式方面，h5端仅仅需要在各个项目common.less里面引用 **common/styles/less/common.less** 在这个文件里包含了所有的h5端的公用样式。    
 注意：**其他的组件样式，不允许引用common.less**
3. 在所有项目公用样式方面，pc端仅仅需要在各个项目common-pc.less里面引用**common/styles/less/common-pc.less** 在这个文件里包含了所有的h5端的公用样式。    
  注意：**其他的组件样式，不允许引用common-pc.less**
4. 各个项目中的公共样式
 * 各个项目中h5中的公用样式，需要引用2，即可得到h5的公用变量、方法、样式等，然后将此文件在h5下的index.js中引入。
 * 各个项目中pc中的公用样式，需要引用3，即可得到pc的公用变量、方法、样式等，然后将此文件在pc下的index.js中引入。
5. less引入，减少了重复开发，尽量多写mixin，对mixin进行分类整理。形成类似于[bootstrap](https://github.com/twbs/bootstrap/tree/v4-dev/scss)的less框架结构
6. 关于@徐佳 所提供的解决方案，@import (reference) 'less文件url'，确实可以解决重复生成css的问题，在这里我们更想规范下团队less写法，而且，这种用法是让所有的引入的less文件都不生成css样式。详细用法见：[Import Options （导入选项）](http://www.css88.com/doc/less/features/#import-directives-feature)
# 参考链接 
1. http://lesscss.cn/



