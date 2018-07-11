---
title: 发布订阅模式
categories: js
abbrlink: 35136
date: 2018-02-26 22:00:00
---

# 发布订阅模式
  发布---订阅模式又叫观察者模式，它定义了对象间的一种一对多的关系，让多个观察者对象同时监听某一个主题对象，当一个对象发生改变时，所有依赖于它的对象都将得到通知。
  
## 日常工作案例
  我们日常工作中经常使用到，比如我们的ajax请求，请求有成功(success)和失败(error)的回调函数，我们可以订阅ajax的success和error事件。我们并不关心对象在异步运行的状态，我们只关心success的时候或者error的时候我们要做点我们自己的事情就可以了。

## 代码实例

```javascript
 // 发布 emit 订阅 on {}
  function Girl() {
    this._events = {}
  }
  Girl.prototype.on = function (eventName,callback) {

    //这里判断他是不是第一次添加(订阅)
    if(this._events[eventName]){
      this._events[eventName].push(callback);
    }else{
      this._events[eventName] = [callback]
    }
  };
  Girl.prototype.emit = function (eventName,...args) {
    if(this._events[eventName]){
      this._events[eventName].forEach(cb=>cb(...args));
    }
  };

  let cry = (who) =>{console.log(who+'哭');};
  let shopping = (who) =>{console.log(who+'购物');};
  let eat = (who) =>{console.log(who+'吃');};
  let smile=(who)=>{console.log(who+'笑')};

  let girl1 = new Girl();
  girl1.on('失恋',cry);
  girl1.on('失恋',eat);
  girl1.on('失恋',shopping);
  girl1.emit('失恋','小明');

  let girl2 = new Girl();
  girl2.on('恋爱',shopping);
  girl2.on('恋爱',smile);
  girl2.emit('恋爱','小华');
```

## 后续
  flux，redux
