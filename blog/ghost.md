---
title: '在阿里云 ECS Centos6.5上搭建Ghost博客系统,以及nodejs版本控制工具安装'
categories: blog
tags: blog
abbrlink: 30941
date: 2017-08-20 22:00:00
---

1 任何信息都有时效性,本文写于2016.3.20凌晨
2 不建议参考本文,请直接参考官方英文文档. http://ghost.org

笔者在搭建服务器之前,刚刚接触前端开发半年,对于服务器搭建,nodejs,linux命令等完全是小白,完全靠google 百度,以及自己摸索.

##### 一 服务器购买及域名购买及解析
1 服务器,直接阿里云服务器,笔者买了入门1M 1G 1核的Centos6.5 ECS服务器.服务器放在深圳(不要担心备案的是,只不过是有点麻烦),便宜.
2 域名购买及解析
域名购买,直接在万网上购买就可以,我的域名就是http://sunzhiyong.cn
29元第一年.域名购买了之后,就实名认证域名.
解析:打开阿里云管理控制台,进入云解析,然后将你购买的域名解析到你的服务器(因为,计算机里面都是通过ip地址来访问你的服务器的,要让你的服务器能通过域名来访问你的服务器,需要将域名跟ip对应起来).解析的时候,同时添加'www'及'@'记录.都很傻瓜式的操作,按照提示就可以完成.
#####二 服务器node环境的搭建
Ghost是基于Node.js构建的开源博客平台，所以我们首先搭建Node环境。
我们首先下载xsheel,然后根据提示连接到你的服务器.IP在阿里云管理控制台查看.
然后逐行执行以下命令:
<code>
wget http://nodejs.org/dist/v0.10.40/node-v0.10.40.tar.gz  
tar zxvf node-v0.10.40.tar.gz  
cd node-v0.10.40  
./configure 
make && make install 
</code>
命令执行完毕之后，检测一下环境是否搭建成功,以及查看以下版本信息.
执行:
<code>
node -v 
</code>
显示v0.10.40,就说明环境搭建成功.

#####配置Nginx 

安装好了nginx后，我们需要设置一个代理服务器让我们的博客可以使用域名访问。 在/etc/nginx/conf.d目录下创建一个配置文件ghost.conf：
执行:
<code>
vi /etc/nginx/conf.d/ghost.conf 
</code>
写入以下内容：
```
server {  
    listen 80;
    server_name example.com; #将 example.com 改为你的域名或ip。

    location / {
        proxy_set_header   X-Real-IP $remote_addr;
        proxy_set_header   Host      $http_host;
        proxy_pass         http://127.0.0.1:2368;
    }
}
```

保存退出，重启nginx：

执行
<code>
service nginx restart  
</code>
没有错误就ok了.

有的人会安装MySQL,对于小白来说,感觉没有必要,我们尽快搭建好博客系统.

#####四 安装Ghost
这时候我们就需要安装ghost,我们用的是中文版本的.首先要下载,逐行执行:
<code>
mkdir var
cd var
mkdir www
cd www
wget http://dl.ghostchina.com/Ghost-0.7.4-zh-full.zip  
unzip Ghost-0.7.4-zh-full.zip -d ghost  
cd ghost  
</code>
接着修改默认配置,逐行执行:
<code>
cp config.example.js config.js  
vi config.js 
</code>
Ghost有产品模式、开发模式和测试模式等多种运行模式，这里我们需要在配置文件中找到production模式：
```
# 生产模式
production: {  
    url: 'http://snowz.me', # 修改为你的域名或者IP，注意加上http://
    mail: {},
    database: {
        client: 'mysql'
        connection: {
            host     : '127.0.0.1',
            user     : 'ghost', # 数据库连接的用户
            password : '123456', # 先前创建的密码
            database : 'ghost', # 先前创建的数据库
            charset  : 'utf8'
        },
    server: {
            host: '127.0.0.1',
            port: '2368' # 若修改该端口记得在nginx中做相应改变
        }
    }  
```
保存退出，接下来就到了见证奇迹的时刻啦，输入指令执行：
<code>
npm start --production  
</code>
启动浏览器，输入之前配置的域名或者IP，我们就可以看到建立好的Ghost博客啦。 （Ctrl+C 中断掉开发者模式）
#####五 让Ghost保持运行之nvm(node版本控制工具)安装
前面提到的启动 Ghost 使用 npm start --production 命令。这是一个在开发模式下启动和测试的不错的选择，但是通过这种命令行启动的方式有个缺点，即当你关闭终端窗口或者从 SSH 断开连接时，Ghost 就停止了。为了防止 Ghost 停止工作，我们得解决这个问题。

接下来安装forever,执行：
<code>
npm install -g forever
</code>
你会发现提示说,你当前node版本是v0.10.40,而forever需要的版本则是,0.12以上的版本.这样的话,我们怎么办呢,一个方法就是格式化服务器,然后我们装一个高级的版本,但是这样的话,我们以上的努力就白费.另一个方法就是我升级一下nodejs版本. 

nodejs升级,这时候我们就需要node 版本管理工具,这里我们介绍nvm(Node Version Manager 我们参考git:https://github.com/creationix/nvm),各位读者,在安装的时候请务必参考此网址文档.

首先我们Install script,我们来安装,在centos下直接执行代码:
<code>
wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.31.0/install.sh | bash
</code>
完成之后,我们执行:

<code>nvp</code>

如果发现找不到nvm命令,我们需要执行

<code>touch ~/.bash_profile</code>

(参考:Note: On OSX, if you get nvm: command not found after running the install script, your system may not have a [.bash_profile file] where the command is set up. Simple create one with touch ~/.bash_profile and run the install script again.)

然后我们重启连接就可以.
#####六 让Ghost保持运行之安装新版本node V4.2.4
安装好nvm之后,我们就利用nvm来管理我们的node版本.
以下是nvm的参考
```
Node Version Manager

Note: <version> refers to any version-like string nvm understands. This includes:
  - full or partial version numbers, starting with an optional "v" (0.10, v0.1.2, v1)
  - default (built-in) aliases: node, stable, unstable, iojs, system
  - custom aliases you define with `nvm alias foo`

Usage:
  nvm help                                  Show this message
  nvm --version                             Print out the latest released version of nvm
  nvm install [-s] <version>                Download and install a <version>, [-s] from source. Uses .nvmrc if available
    --reinstall-packages-from=<version>     When installing, reinstall packages installed in <node|iojs|node version number>
  nvm uninstall <version>                   Uninstall a version
  nvm use [--silent] <version>              Modify PATH to use <version>. Uses .nvmrc if available
  nvm exec [--silent] <version> [<command>] Run <command> on <version>. Uses .nvmrc if available
  nvm run [--silent] <version> [<args>]     Run `node` on <version> with <args> as arguments. Uses .nvmrc if available
  nvm current                               Display currently activated version
  nvm ls                                    List installed versions
  nvm ls <version>                          List versions matching a given description
  nvm ls-remote                             List remote versions available for install
  nvm version <version>                     Resolve the given description to a single local version
  nvm version-remote <version>              Resolve the given description to a single remote version
  nvm deactivate                            Undo effects of `nvm` on current shell
  nvm alias [<pattern>]                     Show all aliases beginning with <pattern>
  nvm alias <name> <version>                Set an alias named <name> pointing to <version>
  nvm unalias <name>                        Deletes the alias named <name>
  nvm reinstall-packages <version>          Reinstall global `npm` packages contained in <version> to current version
  nvm unload                                Unload `nvm` from shell
  nvm which [<version>]                     Display path to installed node version. Uses .nvmrc if available

Example:
  nvm install v0.10.32                  Install a specific version number
  nvm use 0.10                          Use the latest available 0.10.x release
  nvm run 0.10.32 app.js                Run app.js using node v0.10.32
  nvm exec 0.10.32 node app.js          Run `node app.js` with the PATH pointing to node v0.10.32
  nvm alias default 0.10.32             Set default node version on a shell

Note:
  to remove, delete, or uninstall nvm - just remove the `$NVM_DIR` folder (usually `~/.nvm`)
```
我们安装所支持的版本,v4.2.4
<code>
nvm install v4.2.4
</code>
如果默认node版本自动跟换为 4.2.4则不需要再更改,若没有更改则执行
<code>
nvm use 4.2.4
</code>
这时候我们的node版本就升级好了,以后在开发的过程中,如果需要其他版本,可以通过nvm来管理.

#####六 让Ghost保持运行之安装forever
<code>
npm install -g forever
</code>
然后执行：
<code>
NODE_ENV=production forever start index.js
</code>
接下来看一下forever是否挂在了index.js：

forever list
```
info:    Forever processes running
data:        uid  command                                  script   forever pid   id logfile                 uptime        
data:    [0] 4EL0 /root/.nvm/versions/node/v4.2.4/bin/node index.js 13249   13565    /root/.forever/4EL0.log 0:1:41:13.947 
```

这个状态的话，你就可以开始你的Ghost之路了！

结束进程命令：
forever index.js

参考:

https://www.zhihu.com/question/22755373
https://snowz.me/how-to-install-ghost/


此文花费笔者不少心血编写,转载请注明出处,谢谢
