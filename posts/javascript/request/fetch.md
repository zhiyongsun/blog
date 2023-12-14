---
title: fetch 
category: JavaScript
tags: ['fetch']
date: 2017-05-03 22:00:00
---
# fetch 


```javascript
Fetch中配置
 var request = new Request('/users.json', {
 method: 'POST',
 mode: 'cors',
 redirect: 'follow',
 headers: new Headers({
 'Content-Type': 'text/plain'
 })
 });
// 使 !
  fetch(request).then(function() { /* handle response */ });
var headers = new Headers();
// 添加(append)请求头信息
  headers.append('Content-Type', 'text/plain');
、
 // 判断(has), 获取(get), 以及修改(set)请求头的值
  headers.has('Content-Type'); // true
 headers.get('Content-Type'); // "text/plain"
、
 // 删除某条请求头信息(a header)
  headers.delete('X-My-Custom-Header');

```
