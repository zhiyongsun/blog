---
title: CentOS防火墙开放和关闭端口（iptables）
tags: ['linux CentOS']
category: linux
date: 2017-09-02 10:08:29
---

## 打开端口

```javascript
$ /sbin/iptables -I INPUT -p tcp --dport yourport -j ACCEPT
$ /etc/init.d/iptables save      ## 保存
$ /etc/init.d/iptables status    ## 查看端口状态
```
或者执行
```javascript
$ vi /etc/sysconfig/iptables
```
加入以下语句
```javascript
-A INPUT -p tcp -m state --state NEW -m tcp --dport yourport -j ACCEPT
```
重启防火墙：
```javascript
$ /etc/init.d/iptables restart
```

修改完成。其中，参数：

* –A：参数就看成是添加一条规则
* –p：指定协议，我们常用的tcp 协议。当然也有udp，例如53端口的DNS
* –dport：就是目标端口，当数据从外部进入服务器为目标端口
* –sport：数据从服务器出去，则为数据源端口使用
* –j：就是指定是 ACCEPT接收，或者 DROP 拒绝
* –s：指定IP

## 关闭端口

关闭端口
```javascript
$ iptables -A  INPUT -p tcp --dport 7777 -j DROP
$ /etc/init.d/iptables save                         ## 保存
```

关闭IP访问
```javascript
$ iptables -A INPUT -p tcp -s 192.168.1.2 -j DROP
```

或者，执行`vi /etc/sysconfig/iptables`打开配置文件，加入如下语句：
```javascript
-A INPUT -p tcp -m state --state NEW -m tcp --dport 7777 -j DROP
```
再重启防火墙

## 删除规则

查看端口状态：
```javascript
$ /etc/init.d/iptables status    ## 查看端口状态
```

可以看到端口num编号，然后按编号删除：

```javascript
iptables -D INPUT 2
```

## 常用命令
  
```javascript
$ /etc/init.d/iptables start     ## 开启防火墙，或者service iptables start，以下同理
$ /etc/init.d/iptables stop      ## 停止防火墙
$ /etc/init.d/iptables restart   ## 重启防火墙
$ /etc/init.d/iptables status    ## 查看端口状态
$ /etc/init.d/iptables save      ## 保存配置
$ chkconfig iptables off         ## 永久关闭防火墙
$ chkconfig iptables on          ## 永久关闭后启用
```

##  原文出处
在原文基础上，修改添加了部分
http://www.awaimai.com/1650.html

