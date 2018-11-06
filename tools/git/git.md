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
git merge --abort
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
ssh-agent -s
ssh-add ~/.ssh/id_rsa
```

## 放弃本地修改，FETCH_HEAD表示上一次成功git pull之后形成的commit点
   ```bash
   git reset --hard FETCH_HEAD
   ```

## 空项目与远程项目连接
```bash
git remote add origin git@github.com:yspbysbp/projectname.git
```

## git清除本地缓存命令
```
git rm -r --cached .
git add .
git commit -m 'update .gitignore'

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

```js
$ git reset --hard 83ff2785
$ git push --force
```

如果有人获取了更新的版本，可能拉去不下来，执行以下操作：
```js
$ git fetch --all
$ git reset --hard origin/branchname
```

## 初始化 submodule

```git
git submodule update --init --recursive
```
