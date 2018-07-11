---
title: 阿里云服务器搭建hexo博客
tags: blog
categories: blog
abbrlink: 19550
date: 2017-08-20 23:00:00
---

# 使用hexo的背景
过去一直使用的ghost系统来管理博客，使用MySQL来管理数据。使用起来非常麻烦，不能直接编辑静态markdown文件，不利于形成文档。于是就放弃了ghost，使用静态markdown文件来管理。参考了几家选择了hexo

# 购买服务器，域名解析，服务器node环境的搭建，下载Nginx
请参考我的博文[搭建Ghost博客系统](./ghost.md)
  
# 本地下载hexo-cli
```javascript
$ npm install -g hexo-cli
```

# 建站：执行以下命令，建立自己的博客站
```javascript
$ hexo init <folder>
$ cd <folder>
$ npm install
```
# 使用next主题（查找了大量主题，比较符合我的需求），并且配置站
主题配置，请参考这里都看一遍，根据自己的需求配置上去[hexo配置](http://theme-next.iissnan.com/theme-settings.html)


# 将新建的博客站，放到github上，并且push上去
将新建的博客站放到github上，使用github作为版本管理工具。

# 连接服务器，全局安装hexo-cli,clone github代码
使用shh连接服务器
```javascript
$ ssh root@yourIP
```
安装hexo-cli
```javascript
$ npm install -g hexo-cli
```
clone github 代码
```javascript
$ git clone yourAddress
```
# 配置Nginx
设置一个代理服务器让我们的博客可以使用域名访问。 在/etc/nginx/conf.d目录下创建一个配置文件ghost.conf：
<code>
vi /etc/nginx/conf.d/ghost.conf 
</code>
写入以下内容：
```
server {  
    listen 80;
    server_name example.com http://www.example.com; #将 example.com 改为你的域名或ip。

    location / {
        proxy_set_header   X-Real-IP $remote_addr;
        proxy_set_header   Host      $http_host;
        proxy_pass         http://127.0.0.1:4000;
    }
}
```
这里同时设置了example.com http://www.example.com，保证访问成功

# 使用 pm2 管理进程
安装 pm2
```javascript
$ npm install pm2 -g
```
进入博客根目录，新建app.js写入
```javascript
var exec = require('child_process').exec;
exec("hexo server",function(){})
```

执行，启动服务
```javascript
$ pm2 start app.js
```
访问网址即可。

# 官方参考   
[hexo](https://hexo.io/zh-cn/index.html)    
[Next主题](http://theme-next.iissnan.com/theme-settings.html)
[pm2](https://github.com/Unitech/pm2)
