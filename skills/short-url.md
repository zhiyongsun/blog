---
title: 短链生成原理
tags: ['短链生成原理']
category: 短链生成原理
date: 2018-02-25 22:00:00
---

## 原理
通过发号策略，给每一个过来的长地址，发一个号即可，小型系统直接用mysql的自增索引就搞定了。如果是大型应用，可以考虑各种分布式key-value系统做发号器。不停的自增就行了。第一个使用这个服务的人得到的短地址是http://xx.xx/0 第二个是 http://xx.xx/1 第11个是 http://xx.xx/a 第依次往后，相当于实现了一个62进制的自增字段即可。

## 参考链接

[知乎](https://www.zhihu.com/question/29270034/answer/46446911)
[同事](https://trello-attachments.s3.amazonaws.com/59ed5cbdab9e4f8708c6e71a/5a1be0822a1c7f3e9bbbb7f6/3a624e5e2ffa9db052c968171c3db1ce/%E7%90%86%E8%A7%A3%E7%9F%AD%E9%93%BE%E7%94%9F%E6%88%90%E5%8E%9F%E7%90%86md.md.html)
