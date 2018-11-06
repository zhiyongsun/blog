---
title: zsh setting
tags: ['zsh']
category: tools
date: 2017-09-24 23:49:29
---

# 以mac 为例,我们看下系统内置了几种shell

```zsh
$ cat /etc/shells

# List of acceptable shells for chpass(1).
# Ftpd will not allow users to connect who are not using
# one of these shells.

/bin/bash
/bin/csh
/bin/ksh
/bin/sh
/bin/tcsh
/bin/zsh

```

# 首先查看下zsh 版本,如果没有,请先安装
```zsh
$ zsh --version
```
# 设置默认为 shells,例如zsh

```zsh
$ chsh -s /bin/zsh
```

# 安装 oh-my-zsh，并且进行配置

[参考地址](https://github.com/robbyrussell/oh-my-zsh)

 - 安装 autojump
 ```bash
 $ brew install autojump
 ```
 下代码加入 ~/.zshrc 配置文件
 ```bash
 [[ -s ~/.autojump/etc/profile.d/autojump.sh ]] && . ~/.autojump/etc/profile.d/autojump.sh
 ```
[plugins](https://github.com/robbyrussell/oh-my-zsh/wiki/Plugins)
 
 
