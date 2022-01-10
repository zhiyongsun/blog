---
title: node实现页面缓存的策略
tags: ['node']
category: node
date: 2017-09-02 10:08:29
---
## 强缓存
强缓存不会向服务器发送请求，而是直接从缓存中读取资源，强缓存可以通过设置两种 HTTP Header 实现：Expires 和 Cache-Control，这两个头部分别是HTTP1.0和HTTP1.1的实现。

## 协商缓存
当浏览器对某个资源的请求没有命中强缓存，就会发一个请求到服务器，验证协商缓存是否命中，如果协商缓存命中，请求响应返回的http状态为304并且会显示一个Not Modified的字符串。
协商缓存用的是【Last-Modified，If-Modified-Since】和【ETag、If-None-Match】这两对Header来管理的。


## cache-control 
HTTP 1.1以上支持，给定时长（单位s），有效时使用浏览器本地缓存，可覆盖expires
请求时的缓存指令：no-cache、no-store、max-age、max-stale、min-fresh、only-if-cached
响应消息中的指令：public、private、no-cache、no-store、no-transform、must-revalidate、proxy- revalidate、max-age

- no-cache 不直接使用缓存，也就是跳过强缓存。
- no-store 禁止浏览器缓存数据，每次请求资源都会向服务器要完整的资源。
- public 可以被所有用户缓存，包括终端用户和 CDN 等中间件代理服务器。
- private 只允许终端用户的浏览器缓存，不允许其他中间代理服务器缓存。

```
Cache-Control: max-age=3600, must-revalidate
```
## expires 
Expires是HTTP1.0提出的一个表示资源过期时间的header，它描述的是一个绝对时间，由服务器返回。 Expires 受限于本地时间，如果修改了本地时间，就会造成缓存失效。



```
Expires: new Date(Date.now() + 60000)
```
## Last-Modified、If-Modified-Since HTTP1.0版本
设置最后修改时间。获取到If-Modified-Since值后，与服务器文件修改时间比较。适用静态资源文件，不适用动态化数据

demo:

```
fs.stat(filename, function (err, stat) {
        //获取当前文件时间
        var lastModified = stat.mtime.toUTCString();
        if (lastModified === req.headers['if-modified-since']) {
            res.writeHead(304, "Not Modified");
            res.end();
        } else {
            fs.readFile(filename, function(err, file) {
                var lastModified = stat.mtime.toUTCString();
                res.setHeader("Last-Modified", lastModified);
                res.writeHead(200, "Ok");
                res.end(file);
            });
        }
    });
```
## etag
### 使用hash值做标识。获取到if-none-match值后，与接口内容的hash值比较。

```
var hash = crypto.createHash('md5').update(html).digest('base64');
if(ctx.request.headers['if-none-match'] == hash){
      ctx.status = 304;
      return;
    }
    ctx.set({
      'Etag': hash
    });
```



