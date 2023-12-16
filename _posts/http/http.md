---
title: http
category: http
tags: [http]
date: 2017-05-03 22:00:00
---

## 简介
1. HTTP协议全称是Hyper Text Transfer Protocol(超文本传输协议)的缩写,是用于服务器传输超文本到本地浏览器的传送协议。    
2. HTTP协议工作于客户端-服务端架构上。浏览器作为HTTP客户端通过URL向HTTP服 务端即WEB服务器发送所有请求。Web服务器根据接收到的请求后,向客户端发送响应信息。
3. HTTP核心是无状态协议，意味着服务器不会在两个请求之间保留任何数据（状态）    
4. HTTP 是可扩展的：在HTTP/1中就出现了, HTTP headers让协议扩展变得非常容易。只要服务端和客户端在新的headers上语义达成一致，新的功能就可以轻松地被加进来。目前在WWW中默认使用的是HTTP/1.1。

## HTTP URL

HTTP使用统一资源标识符(Uniform Resource Identifiers, URI)来传输数据和建立连接。(URI:统一资源标示符,只是标 识资源在哪里)。    
URL是一种特殊类型的URI,包含了用于查找某个资源的足够的信息URL,全称是UniformResourceLocator(  URL: 统一资源定位符,是URI的子集;它除了标识资源的位置,还提供一种定位该资源的主要访问机制(如其网络“位置”)。【即提供具体方式找到该资源 (位置+方式)】

   格式:
   http://host[:port][abs_path]
   其中http表示要通过HTTP协议来定位 络资源。   
   host表示合法的Internet主机域名或IP地址(以点分 进制格式表示);   
   port 于指定 个端 号,拥有被请求资源的服务 主机监听该端 的TCP连接如果port是空,则使 缺省的端 80。当服务 的端  是80的时候,需要显式指定端 号。   
   abs_path指定请求资源的URI
   
## HTTP请求
  http请求由三部分组成,分别是:请求行、消息报头、请求正文
  
  请求行:包含 请求方法 请求资源uri 和协议    
  GET /562f25980001b1b106000338.jpg HTTP/1.1
  
  消息报头(即请求头)    
  1. accept:*/*
  1. accept-encoding:gzip, deflate, br
  1. accept-language:zh-CN,zh;q=0.9
  1. content-length:985
  1. content-type:application/json
  1. cookie:JSESSIONID=892D09CCFAB8702ACA8AFB0F3571E28E; route=6ea8187ef03a0e44d7a847cb79cd124a
  1. origin:https://www.yqb.com
  1. referer:https://www.yqb.com/account/
  1. user-agent:Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/5
  
  是权重系数,范围 0 =< q <= 1,q 值越 ,请求越倾向于获得其“;”之前的类型表示的内容,若没有指定 q 值,则默认为1,若
   被赋值为0,则 于提醒服务 哪些是浏览  接受的内容类型。
   
   
## HTTP 响应
响应基本格式包括状态行、响应头、响应实体。三部分位于第一行,包括协议及其版本号、状态码、状态描述, 如: 

#### 1.状态 :
HTTP/1.1 200 OK
1xx:指示信息--表示请求已接收,继续处理
2xx:成功--表示请求已被成功接收、理解、接受
3xx:重定向--要完成请求必须进行更进一步的操作
4xx:客户端错误--请求有语法错误或请求无法实现
5xx:服务器端错误--服务器未能实现合法的请求
learn more http://en.wikipedia.org/wiki/List_of_HTTP_status_codes
 
#### 2.响应头
Access-Control-Allow-Origin: 
Expires
