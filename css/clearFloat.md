---
title: 清除浮动的方法
category: css
tags: ['css']
date: 2017-02-07 22:00:00
---

## 用伪元素:before或:after、

```html
<div class="content" >
    <div class='float'></div>
    </div>	
<p>some text</p>
```

```css
    .content:after{
                   content:'';
                   display:'block';
                   clear:both;
             }
    float{
        width:300px;height:300px;
        float:left;
        background: green;
        opacity: .5;
    }
    p{
        background:red;
    }
```

## overflow:hidden 利用了BFC的特性
只要元素满足下面任一条件即可触发 BFC 特性：

- html、body根元素
- float的值不为none
- overflow的值为hidden、auto或scroll
- 绝对定位元素：position (absolute、fixed)
- display的值为table-cell、table-caption、或inline-block、flex


```html
    <div class="content" >
		<div class="float"></div>
	</div>	
	<p>some text</p>
```

```css
    .content{
        overflow: hidden;
    }
    .float{
        float:left;
        width:100px;height:100px;
        background: green;
        opacity: .5;
    }
    p{
        background:red;
    }
```

