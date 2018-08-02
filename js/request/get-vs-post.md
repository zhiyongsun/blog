---
title: get vs post 
abbrlink: 13
---
# get vs post 
原理上的区别 根据HTTP规范 GET用于信息获取,而且应该是安全的和幂等的。
POST表示可能修改变服务器上的资源的请求。

## 不同点
- GET请求的数据会附在URL
- POST把提交的数据则放置在是HTTP包的包体中 POST的安全性要比GET的安全性高

## 
GET和POST本质上就是TCP链接，并无差别。  
但是由于HTTP的规定和浏览器/服务器的限制，导致他们在应用过程中体现出一些不同。   
GET和POST还有一个重大区别，简单的说：  
GET产生一个TCP数据包；  
POST产生两个TCP数据包。
对于GET方式的请求，浏览器会把http header和data一并发送出去，服务器响应200（返回数据）；   
而对于POST，浏览器先发送header，服务器响应100 continue，浏览器再发送data，服务器响应200 ok（返回数据）


## 參考链接
https://www.zhihu.com/question/28586791/answer/145424285

