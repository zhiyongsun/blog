---
title: mbp setting
tags: mbp
categories: mbp
abbrlink: 23645
date: 2017-02-06 10:08:29
---
# mbp setting

# 一 softwares
# study
* kindle
* 有道
* evernote

# code
* brew
* node
* charles(抓包)
* webstorm
* beyondCompare
    * 无限试用:rm "/Users/$(whoami)/Library/Application Support/Beyond Compare/registry.dat"
* xcode(git,svn)
* node
* studio
* Dash:离线文档
* mongodb
* iterm

# browers
* chrome
* firefox

# design
* sketch


# communication
* QQ
* WeChat

# else
* 搜狗输入法
* Rar
* 百度网盘



# 二 setting
* 显示隐藏文件夹 

1. 早期的OS X（10.6~10.8）系统可以使用如下两条命令来开始或者关闭系统隐藏文件的显示：
```

defaults write com.apple.Finder AppleShowAllFiles Yes && killall Finder //显示隐藏文件

defaults write com.apple.Finder AppleShowAllFiles No && killall Finder //不显示隐藏文件
```


 

2. 当升级到OS X 10.9 Mavericks版本之后，这两条命令需要做一些修改，变成了如下命令：
```bash
defaults write com.apple.finder AppleShowAllFiles Yes && killall Finder //显示隐藏文件

defaults write com.apple.finder AppleShowAllFiles No && killall Finder //不显示隐藏文件
```


# 显示文件路径
```javascript
defaults write com.apple.finder _FXShowPosixPathInTitle -bool YES

```

