---
title: nginx 服务器下载、配置、常用命令
tags: ['linux nigix']
category: linux
date: 2017-08-30 00:45:06
---

## 服务器下载

```yum
yum -y install nginx
```


## 卸载
```javascript
yum -y remove nginx
```

## 启动、重启

```javascript
service nginx start
service nginx restart
```


## 配置地址
```javascript
cd /etc/nginx/conf.d
```

## 测试服务器
```javascript
wget http://127.0.0.1
```
能正常获取inde.html文件说明Nginx安装成功

## 检测配置项是否ok
```javascript
sudo nginx -t
```

## todo
1. 开启 gzip http://www.awaimai.com/1711.html
