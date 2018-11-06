---
title: module.exports vs exports
tags: ['module.exports vs exports']
category: node
date: 2017-09-02 10:08:29
---
## 他们之间的连接

1. module.exports 初始值为一个空对象 {}
2. exports 是指向的 module.exports 的引用
3. require() 返回的是 module.exports 而不是 exports

所有，最终到处的是module.exports，主需要注意最终到处即可。    
不要，exports={},这样的话，导致了 moudle.exports 与 export 连接断开，导出的是空对象


