---
title: node实现页面缓存的策略
tags: ['node']
category: node
date: 2017-09-02 10:08:29
---

## cache-control 
### HTTP 1.1以上支持，给定时长（单位s），有效时使用浏览器本地缓存，可覆盖expires
请求时的缓存指令：no-cache、no-store、max-age、max-stale、min-fresh、only-if-cached
响应消息中的指令：public、private、no-cache、no-store、no-transform、must-revalidate、proxy- revalidate、max-age

```
Cache-Control: max-age=3600, must-revalidate
```
## expires 
### 给定过期的时间，有效时使用浏览器本地缓存

```
Expires: new Date(Date.now() + 60000)
```
## last-Modified
### 设置最后修改时间。获取到If-Modified-Since值后，与服务器文件修改时间比较。适用静态资源文件，不适用动态化数据

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



