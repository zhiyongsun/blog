---
title: 前端开发
tags: framework
categories: framework
abbrlink: 51839
date: 2017-02-06 10:08:29
---
# 框架层面需要做的事情

## 原则
  - less is more
  - do not repeat yourself
  
## 质量
  - typescript
  - tslint (for js)
  - stylelint (for css)
  - htmllint (for html)
  - ide配置 (for ide)
  
  ```xml
  <code_scheme name="Default">
    <JSCodeStyleSettings>
      <option name="SPACE_BEFORE_FUNCTION_LEFT_PARENTH" value="false" />
    </JSCodeStyleSettings>
    <codeStyleSettings language="JavaScript">
      <option name="SPACE_WITHIN_FOR_PARENTHESES" value="true" />
      <indentOptions>
        <option name="INDENT_SIZE" value="2" />
        <option name="CONTINUATION_INDENT_SIZE" value="2" />
        <option name="TAB_SIZE" value="2" />
      </indentOptions>
    </codeStyleSettings>
  </code_scheme>
  ```
  
  
##  代码
1. 基础方法
    * url:获取url参数
    * window
    * fetch
    * array
    * number
    * device
    * string
    * date
    * 基础方法
1. 组件
    * 基础组件别自己公司写,基于一套流行的组件库,然后定制,构建自检公司的风格.
    * 基础组件如果不提供,会很乱,成员的效率会很低
    * 组件展示平台
    * anted design
1. 模块 
    * 前后端都需要模块化
1. html5兼容性

##  打包
1. 热加载 react-hot-loader
1. 自动打开浏览器
1. source map
1. autoprefix
1. 自动寻找路劲 import "../../common" 替换成 import "common""

## 数据
1. mockdata: easy mock

## 与其他团队合作
1. 需求平台:原型图必须有,含各种情况 (跟产品交互)
1. 设计团队:zeplin,react-sketchapp
1. 测试团队:jinkens,自动打包工具,测试平台
1. 自动化测试
     * 自动化测试
     * 单元测试
     *
1. 接口文档、内部文档自动生成平台


## 测试
* 自动化测试
* 单元测试

## 组件(common管理,在一个)
* 前期跟设计师,沟通设计一个UI框架
* 组件开发小组(必须)
* 任何项目,组件现行

## 网络
* 在http2模式下的前端优化(合并成一个大文件,是不是不适合当前的开发)

## 三端统一
* React Native 一套代码直接生成ios Android H5的代码
* pc端考虑:资源向这三个端倾斜,pc端使用React Native 部分逻辑,然后在写出(单独文件处理逻辑)

## bug管理
  - issue
  
## 该引入的npm包
* moment
* underscore
* anted design 
* anted design pro
* tap-plugin

## 微服务
  - 形成一站式服务闭环
  - 监控自动化
  - 

## 技术方向
  - node
  - pwa
  - 小程序
  - 爬虫
  - mongodb
  
## A/B Testing

## Gray Release
  





