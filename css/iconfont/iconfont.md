---
title: icon font
tags: ['css', 'icon font']
category: css
date: 2017-02-03 22:00:00
---
## 兼容问题
- 字体声明，由于各个浏览器所支持的字体文件不同，因此我们要针对浏览器的这个特点制作多种字体文件以达到兼容的目的

```css
@font-face {font-family: "iconfont";
  src: url('iconfont.eot?t=1513305850285'); /* IE9*/
  src: url('iconfont.eot?t=1513305850285#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('iconfont.woff') format('woff'),/* chrome ,firefox */
  url('iconfont.ttf?t=1513305850285') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
  url('iconfont.svg?t=1513305850285#iconfont') format('svg'); /* iOS 4.1- */
}
```

## 网页中显示

- 一种是直接在html中输入相应的Icon所代表的字体，好处是兼容所有浏览器，就是在更改Icon的时候需要下游的后端程序员同事协助更改。
- 在CSS中通过after伪类添加，这样可以通过CSS直接控制Icon的类别，只是不是所有浏览器都兼容，但是我们必须考虑到IE6的用户。


