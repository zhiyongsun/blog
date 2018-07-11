---
title: svn常用命令
tags: svn
categories: svn
abbrlink: 18837
date: 2017-09-02 23:05:30
---

# svn 常用命令

1. revert 
    * 回滚整个目录
```svn
svn revert --depth=infinity .
```
1. 基于当前的地址新建一个开发分支
```svn
    svn copy 现有地址 新建地址 -m '注释'
```


