---
title: mongodb
tags: ['mongodb']
category: mongodb
date: 2017-10-19 08:00:00
---


## linux下包安装
  - 下载  
  从[官网下载](https://www.mongodb.com/download-center#community) linux 包
  ![](download.png)
  
  - 解压,安装
  ```bash
  tar -xvzf mongodb-linux-x86_64-3.2.10.tgz
  mv mongodb-linux-x86_64-3.2.10 /usr/local/mongodb
  ```
  
  - MongoDB 的可执行文件, bin 目录下，将其添加到 PATH 路径中
  ```bash
  export PATH=/usr/local/mongodb/bin:$PATH
  ```
  为当前用户添加
  ```bash
  vim ~/.bash_profile
  ```
  然后, insert 即可
  
  - 新建数据库目录
  
  ```bash
  mkdir -p /data/db
  ```
# mongodb 启动
```bash
mongod
```
  - 启动异常(Attempt to create a lock file on a read-only directory: /data/db),
  ```bash
  sudo chown -R 当前用户名 /data/db/
  ```
