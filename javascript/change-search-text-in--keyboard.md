---
title: 改变keyboard 显示样式
category: JavaScript
tags: ['keyboard']
date: 2017-05-03 22:00:00
---
这是利用了表单属性,一般系统会识别用以下结构  
`<form>
<input type="search" class="mui-input-clear" placeholder="搜索课题名称" id="search_keywords">
</form>`

必须要在form表单里面,但是这样又出现了一个问题,点击搜索按钮,会刷新页面  
这是因为,form的发展历史在ajax之前,以前数据交互都是通过表单,然后刷新真个页面,随着ajax的发展,局部刷新的使用,这种逐渐减少使用.  
我们不需要这种自动提交,在form 添加`onsubmit="return false;"`,这样就不会提交刷新页面了
