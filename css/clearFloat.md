# 清除浮动的方法


```css
.clearfix:after {
  display: block;
  clear: both;
  visibility: hidden;
  height: 0;
  content: " ";
  font-size: 0;
}
```
