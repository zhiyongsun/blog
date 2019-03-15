---
title: git常用命令
tags: ['git']
category: tools
date: 2017-09-02 23:05:30
---

1. 查看分支 git branch -a
1. 切换分支 git checkout barnch-name
1. 设置用户名 git config --global user.name
1. 设置email git config --global user.email
1. 有时候我们可能也参与了一些开源项目，那么就需要新的用户名和自己的私人邮箱，Git 可以为每个项目设定不同的配置信息。

   在命令行环境，进入Git项目所在目录，执行下面的命令：

   $ git config　user.name nickname#将用户名设为nickname
   $ git config　user.email nickname@gmail.com #将用户邮箱设为nickname@gmail.com


   http://www.cnblogs.com/joyang/p/4922441.html


## 放弃merge

```git
$ git merge --abort
```

# git撤销commit，但未git push的命令
   - 找到之前提交的git commit的id
   git log
   找到想要撤销的id
   - git reset –hard id
   完成撤销,同时将代码恢复到前一commit_id 对应的版本
   - git reset id
   完成Commit命令的撤销，但是不对代码修改进行撤销，可以直接通过git commit 重新提交对本地代码的修改


## 添加 shh 之后,确认没有错误,但是,报错如下

```bash
Permission denied (publickey).
fatal: Could not read from remote repository.

Please make sure you have the correct access rights
and the repository exists.
```

解决如下:

```bash
$ ssh-agent -s
$ ssh-add ~/.ssh/id_rsa
```

## 放弃本地修改，FETCH_HEAD表示上一次成功git pull之后形成的commit点

```bash
$ git reset --hard FETCH_HEAD
```

## 空项目与远程项目连接

```bash
$ git remote add origin git@github.com:yspbysbp/projectname.git
```

## git清除本地缓存命令

```bash
$ git rm -r --cached .
$ git add .
$ git commit -m 'update .gitignore'
```


## mac 下，配置多个 git 账号

- 进入目录下

```bash
$ cd ~.ssh
```

- 生成rsa

```bash
$ ssh-keygen -t rsa -C “yourEmailAddress”
```

- 输入名称，eg：github_rsa

- 编辑 config 按照以下格式写入

```bash
## 配置GitHub
Host github.com
        HostName github.com
        User yourEmailAddress
        IdentityFile ~/.ssh/github_rsa
```
-删除全局配置 ~.gitconfig

- 按照以上步骤，增加其他账号

## git clone 别名

```
$ git clone <版本库的网址> <本地目录名>
```

## 回退到某个 commit

回退命令,提交

```bash
$ git reset --hard 83ff2785
$ git push --force
```

如果有人获取了更新的版本，可能拉去不下来，执行以下操作：

```bash
$ git fetch --all
$ git reset --hard origin/branchname
```
## submodule

### 添加
```bash
$ git submodule add 'https://example.git'
```
### 初始化 submodule

```bash
$ git submodule update --init --recursive
```
### 重新添加 submodule

```bash
https://stackoverflow.com/questions/20929336/git-submodule-add-a-git-directory-is-found-locally-issue
```

## tag
```bash
// 列显已有的标签
$ git tag

//新建标签
$ git tag 

// 推送到远程
$ git push origin v1.5
// 推送所有 tags
$ git push origin --tags
```

## 关联远程 git

```js
#创建新文件夹
mkdir xxx
#进入
cd xxx 
#初始化Git仓库 
git init
#提交改变到缓存
git commit -m 'description'
#本地git仓库关联GitHub仓库 
git remote add origin git@github.com:han1202012/TabHost_Test.git
#提交到GitHub中 
git push -u origin master
```

## 更新测试




## 配置操作
### 全局配置
git config --global user.name "xxx" # 配置用户名称
git config --global user.email "xxx@xxx.com" # 配置用户邮箱
git config --global --unset user.name # 取消全局配置的用户名称
git config --global --unset user.email #取消全局配置的邮箱地址
git config --global color.ui true # 配置命令行着色
git config --global core.editor $(which vim) # 配置文本编辑器
git config --global merge.tool vimdiff # 配置差异分析工具
git config --global core.autocrlf true # 提交时转换为 LF，检出时转换为 CRLF
git config --global core.safecrlf true # 拒绝提交包含混合换行符的文件
git config --global core.whitespace trailing-space,space-before-tab # 修正空白符
git config --global alias.<alias-name> <git-command> # 为 git 命令创建一个快捷方式
git config --global core.quotepath off # 配置在 Windows 下 ASCII 字符的文件名正确显示
git config --global --list # 查看全局配置信息
### 局部配置
git config --local core.filemode false # 忽略文件权限
git config --local --list # 查看局部配置信息
## 基本操作
git init # 初始化一个仓库
git init --bare <project-name>.git # 创建一个祼仓库
git clone url # 从指定地址克隆一个仓库
git status # 查看当前工作区状态
git add . # 将当前目录下的所有文件添加到暂存区
git commit -m 'xxx' # 提交
git commit --amend -m 'xxx' # 合并上一次提交（反复修改）
git commit -am 'xxx' # 将 add 和 commit 合并为一步
git rm path/to/filename # 删除暂存中指定的文件
git remote add origin <user>@<host>:/path/to/repository/<project-name>.git # 将本地与远程分支关联起来
git push -u github master # 初次提交
git branch --set-upstream-to=origin/<branch> <branch> # 设置让本地某个分支跟踪远程的某个分支
git rm --cached filename # 从暂存区将文件移除
git checkout -- filename # 将文件彻底从暂存区放弃
git checkout --track hotfix/fix-menu # 检出远程分支hotfix/fix-menu并创建本地跟踪分支
git stash list # 显示进度列表
## 分支操作
git branch # 显示本地分支
git branch -a # 显示所有分支
git branch -D # 删除未曾合并过的分支
git branch -d # 删除已经合并过的分支
git branch -m oldName newName # 本地分支重命名
git push --delete origin <branch-name> # 删除远程分支
git branch --set-upstream-to origin/newName # 把本地分支与远程分支关联起来
git branch -v # 查看当前的本地分支与远程分支的关联关系
git diff origin/develop # 查看本地当前分支与远程某一分支的差异
git diff master origin/master # 查看本地 master 分支与远程 master 分支的差异
## 合并操作
git merge origin/master # 将远程 master 分支合并到本地 master
git merge --no-ff develop # 将 develop 分支合并到当前分支（不使用 Fast-forward）
git cherry-pick <commit-id> # 将其它分支上的合适提交挑选到当前分支
git rebase -i HEAD~~~ # 汇合提交：将之前的三次提交合并到一处（squash）
git rebase -i HEAD~3 # 修改提交（edit）
## 标签操作
git tag # 查看所有标签
git tag -l 'v2.6.*' # 搜索某个标签
git tag -a v1.0.2 -m ": ) Project v1.0.2 Released" # 新建某个标签
git push origin v1.0.1 # 推送某个标签到远程
git push origin --tags # 推送所有标签到远程
git show v1.0.2 # 查看某个标签的版本信息
git tag -d v1.0.1 # 删除本地标签
git push origin --delete tag <tag-name> # 删除远程标签
## 回滚操作
git reset --hard <commit-id> # 将本地版本退回到某次提交上
## 本地文件回滚
git log filename.* git reset <commit-id> filename.*
git commit -m "Rollback filename.*"
git checkout filename.*
git reset HEAD <文件名> # 把暂存区的修改撤销掉，重新放回工作区
git revert HEAD # 撤销上一个提交
git reset --hard ORIG_HEAD # 回退到上一次 reset 之前
## 日志操作
git log # 显示简略的提交日志
git log -- filename # 查看某个文件变动的具体日志信息
git log -p -2 # 查看最近两次更新的内容差异
git log --stat # 显示简要的增改行数统计
git log -1 HEAD # 显示最后一次提交信息
git log --pretty=oneline # 单行显示日志信息
git log --pretty=oneline --graph --abbrev-commit # 查看图文格式日志
git log --graph --oneline --decorate --all # 通过 ASCII 艺术的树形结构来展示所有的分支，每个分支都标示了他的名字和标签
git log --name-status # 查看文件改变信息
git reflog # 显示所有提交，包括孤立节点
## 远程操作
git remote # 查看主要名
git remote -v # 查看主机名即网址
git remote show <主机名> # 查看主机的详细信息
git remote add <主机名> <地址> # 添加远程主机
git remote rename <原主机名> <新主机名> # 修改远程主机的别名
git remote rm <主机名> # 删除远程机器
git push gitee master # 将当前 gitee 分支推送到远程 master 分支
git checkout -b <branch-name> origin/<branch-name> # 检出远程分支到本地分支
git remote rename master xiaohe # 重命名远程分支的名称
git push origin --delete <branch-name> # 删除远程某个分支
git remote update origin --prune # 更新远程分支列表
git push -f # 强制将本地推送到远程仓库
