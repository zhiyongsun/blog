---
title: ssh管理服务器
tags: ['ssh']
category: ssh
date: 2017-09-02 10:08:29
---

# ssh管理服务器

1. 登陆服务器
    * ssh 用户名@服务器外网地址
    ```ssh
    $ ssh root@120.25.197.246
    ```

1. 添加新的用户
    * 添加新的用户
    ```ssh
    adduser ysbpysbp
    ```
    * 设置密码
    ```ssh
    passwd ysbpysbp
    ```
1. 用户组 wheel 拥有 root权限
    * 把用户放入这个用户组
    ```ssh
    gpasswd -a ysbpysbp wheel 
    ```
    
    * 切换用户
    ```ssh
    su ysbpysbp
    ```
1. 同步服务器文件

    ```scp
    sudo scp -p22 -r root@120.25.197.246:/ /Users/zhiyong/server/
    ```
http://www.zhimengzhe.com/mac/104755.html
