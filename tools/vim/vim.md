---
title: vim基本使用
tags: vim
categories: vim
abbrlink: 17519
date: 2017-09-02 23:05:30
---

# 目标

非常喜欢vim这个文本编辑器，学习下，能够使用编辑文本。

# 安装

根据自己的系统安装对应的vim：    
https://vim.sourceforge.io/download.php

# 模式：Normal vs Insert
1. 启动vim，vim默认在Normal模式下
1. 按下键盘i，进入Insert模式，在vim界面的左下脚会有"--INSERT--"提示
![Insert提示](/images/vim-insert.png)这时候，你就可以输入文本内容了。

1. 点击 ESC 退出Insert模式。

# Normal模式常用命令
1. i → Insert 模式，按 ESC 回到 Normal 模式.
1. x → 删当前光标所在的一个字符。
1. :wq → 存盘 + 退出 (:w 存盘, :q 退出)   （:w 后可以跟文件名）
1. dd → 删除当前行，并把删除的行存到剪贴板里
1. p → 粘贴剪贴板

推荐:

1. hjkl (强例推荐使用其移动光标，但不必需) →你也可以使用光标键 (←↓↑→). 注: j 就像下箭头。
1. :help <command> → 显示相关命令的帮助。你也可以就输入 :help 而不跟命令。（退出帮助需要输入:q）

注意： 在VIM的Normal模式下，所有的键都是功能键了。


常用的命令就是这些


# 参考链接

1. http://yannesposito.com/Scratch/en/blog/Learn-Vim-Progressively/
1. https://coolshell.cn/articles/5426.html
