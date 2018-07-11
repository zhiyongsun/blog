---
title: 防止长按被误触发
tags: react
abbrlink: 51682
date: 2017-08-27 11:06:14
---

# 需求背景
在移动端，有一个列表，在按压的时候，需要对给列表一个特殊的样式，手指松开的时候，去除样式。

# 解决方法
这是一个挺简单的一个需求。处理方法如下:
```javascript
class LongPress extends React.Component {
  constructor(props) {
    super(props);
    this.handleTouchStart = this.handleTouchStart.bind(this);
    this.handleTouchEnd = this.handleTouchEnd.bind(this);
  }

  handleTouchStart(e) {
    this.currentItem = e.currentTarget
    this.currentItem.className = 'press-item press';
  }

  handleTouchEnd(e) {
    this.currentItem.className = 'press-item';
  }

  render() {
    let data = new Array(20);
    data.fill({name: 'mock数据'});
    return (
      <div className="long-press">
        <ul

        >
          {
            data.map(item =>
              <li
                onTouchStart={this.handleTouchStart}
                onTouchEnd={this.handleTouchEnd}
                onTouchCancel={this.handleTouchEnd}
                className="press-item"
              >
                {item.name}
              </li>
            )
          }
        </ul>
      </div>
    );
  }
}
```
在li上，onTouchStart事件上处理，给当前的li一个 'press' 类。达到按压效果。

# 所遇到的问题
如果用户仅仅是想要上下滑动，不是想要按压，也是触发此按压效果。这是因为，它是在 'onTouchStart' 事件上处理的。

# 分析思路
想要避免上下滑动触发按压效果，首先需要在 'onTouchStart' 事件上不能立刻执行添加 'className'的方法。这时候，可以想到用异步的方法去控制它，我们设置setTimeout来进行处理。
```javascript
handleTouchStart(e) {
this.currentItem = e.currentTarget
 setTimeout(() => {
  this.currentItem.className = 'press-item press';
}, 300);
}
```
在这里设置300毫秒的缓冲时间，如果300毫秒时间内，没有触发 'onTouchMove' 我们就可以执行 'handleTouchStart' 里的方法，如果触发了，那么，就控制异步，取消此方法的执行。

# 怎么控制setTimeout异步 ？
归根到底，解决了控制 'setTimeout异步' 问题，也就解决了此问题。将定时器'setTimeout' 方法赋予一个变量，如果在 300毫秒内，触发了 'onTouchMove'事件，就取消次定时器。
```javascript

  handleTouchStart(e) {
    this.currentItem = e.currentTarget
    this.timer = setTimeout(() => {
      this.currentItem.className = 'press-item press';
    }, 300);
  }

```

# 全部代码
```javascript
class LongPress extends React.Component {
  constructor(props) {
    super(props);
    this.handleTouchStart = this.handleTouchStart.bind(this);
    this.handleTouchMove = this.handleTouchMove.bind(this);
    this.handleTouchEnd = this.handleTouchEnd.bind(this);
  }

  handleTouchStart(e) {
    this.currentItem = e.currentTarget
    this.timer = setTimeout(() => {
      this.currentItem.className = 'press-item press';
    }, 300);
  }

  handleTouchMove() {
    clearTimeout(this.timer);
  }

  handleTouchEnd(e) {
    this.currentItem.className = 'press-item';
  }

  render() {
    let data = new Array(20);
    data.fill({name: 'mock数据'});
    return (
      <div className="long-press">
        <ul

        >
          {
            data.map(item =>
              <li
                onTouchStart={this.handleTouchStart}
                onTouchMove={this.handleTouchMove}
                onTouchEnd={this.handleTouchEnd}
                onTouchCancel={this.handleTouchEnd}
                className="press-item"
              >
                {item.name}
              </li>
            )
          }
        </ul>
      </div>
    );
  }
}
```

# 预览地址
[press效果预览](../themes/next/source/react/index.html)

