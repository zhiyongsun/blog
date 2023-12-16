---
title: css居中
category: css
tags: ['css']
date: 2017-02-07 22:00:00
---
##  CSS 居中

#### 1. 水平居中
* inline或者inline-*元素
```css
.center-children {
  text-align: center;
}
```

* 块级元素
```css
.center-me {
  margin: 0 auto;
}
```

#### 2. 垂直居中

* inline或者inline-*元素
    * 仅仅是一行
    ```css
    .link {
      padding-top: 30px;
      padding-bottom: 30px;
    }
    ```
    
    * 多行
    ```css
    .flex-center-vertically {
      display: flex;
      justify-content: center;
      flex-direction: column;
      height: 400px;
    }
    ```
* 块级元素
    * 已知元素的高度
    ```css
     .parent {
       position: relative;
     }
     .child {
       position: absolute;
       top: 50%;
       height: 100px;
       margin-top: -50px; /* account for padding and border if not using box-sizing: border-box; */
     }
    ```
    * 未知元素的高度
    ```css
    .parent {
      position: relative;
    }
    .child {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }
    ```
    
    * 使用flex
    ```css
     .parent {
       display: flex;
       flex-direction: column;
       justify-content: center;
     }
    ```
 #### 3 水平垂直居中

* 元素宽高固定
```css
.parent {
  position: relative;
}

.child {
  width: 300px;
  height: 100px;
  padding: 20px;

  position: absolute;
  top: 50%;
  left: 50%;

  margin: -70px 0 0 -170px;
}
```

* 元素的宽高未知
```css
.parent {
  position: relative;
}
.child {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```
* 使用flex

```css
.parent {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

# 参考链接
1. https://css-tricks.com/centering-css-complete-guide/
