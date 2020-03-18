# react hooks 初探

## 什么是 react hooks
- Hook 是 React 16.8 的新增特性。它可以让你在不编写 class 的情况下使用 state 以及其他的 React 特性。
- 之前使用state必须使用类组件，现在可以在函数组件内部使用 state 或者其他一些功能。

## 使用 react hooks 有什么益处

### 类组件现存问题
#### 在组件之间复用状态逻辑很难
状态逻辑难复用： 在组件之间复用状态逻辑很难，可能要用到 render props （渲染属性）或者 HOC（高阶组件），但无论是渲染属性，还是高阶组件，都会在原先的组件外包裹一层父容器（一般都是 div 元素），导致层级冗余
#### 复杂组件变得难以理解
- 逻辑分散：在生命周期函数中混杂不相干的逻辑，componentDidMount获取数据，componentDidUpdate更新数据，同一个 componentDidMount 中可能也包含很多其它的逻辑，如设置事件监听，而之后需在 componentWillUnmount 中清除。
- 类组件中都是对状态的访问和处理，导致组件难以拆分成更小的组件

###
- 能优化类组件的以上问题
- 能在无需修改组件结构的情况下复用状态逻辑（自定义 Hooks ）
- 能将组件中相互关联的部分拆分成更小的函数（比如设置订阅或请求数据）

## 基础hooks
### State Hook
hook 是一个特殊的函数，它可以让你“钩入” React 的特性。而 useState 是允许你在 React 函数组件中添加 state 的 Hook。
#### 先看小例子
实现计数器
```js
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  render() {
    return (
      <div>
        <p>你已经点击了 {this.state.count} 次</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    );
  }
}
```

等价 hook 实现

```js
import React, { useState } from 'react';

function Counter() {
  // useState 唯一的参数就是初始 state（不用额外的声明state，如类组件在constructor声明 state 初始值）
  // count 声明一个新的叫做 “count” 的 state 变量
  // setCount 等价 类组件 this.setState（setCount仅改变 count的值）
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        +
      </button>
    </div>
  );
}
```

state hook 提供了在函数组件内部（原来的无状态组件）钩入state的能力，能够

#### 声明多个变量
```js
function ExampleWithManyStates() {
  // 声明多个 state 变量
  const [age, setAge] = useState(42);
  const [fruit, setFruit] = useState('banana');
  const [todos, setTodos] = useState([{ text: '学习 Hook' }]);
```

### Effect Hook
- effect（副作用）：指那些没有发生在数据向视图转换过程中的逻辑，如 ajax 请求、访问原生dom 元素、本地持久化缓存、绑定/解绑事件、添加订阅、设置定时器、记录日志等。
  副作用操作可以分两类：需要清除的和不需要清除的。
- useEffect 就是一个 Effect Hook 可以让你在函数组件中执行副作用操作。它跟 class 组件中的 componentDidMount、componentDidUpdate 和 componentWillUnmount 具有相同的用途，但是，被合并成了一个 API
- useEffect 接收一个函数，该函数会在组件渲染到屏幕之后才执行，该函数可以返回一个能清除副作用的函数
  
#### 使用小示例
为计数器增加了一个小功能：将 document 的 title 设置为包含了点击次数的消息。
```js
class Counter extends React.Component{
    state = {number:0};
    add = ()=>{
        this.setState({number:this.state.number+1});
    };
    componentDidMount(){
        this.changeTitle();
    }
    componentDidUpdate(){
        this.changeTitle();
    }
    changeTitle = ()=>{
        document.title = `你已经点击了${this.state.number}次`;
    };
    render(){
        return (
            <>
              <p>{this.state.number}</p>
              <button onClick={this.add}>+</button>
            </>
        )
    }
}

```
```js
import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  // 与 componentDidMount 和 componentDidUpdate: 类似
  useEffect(() => {
    document.title = `你已经点击了${this.state.number}次`;
  });

  return (
    <div>
      <p> {count} 次</p>
      <button onClick={() => setCount(count + 1)}>
        +
      </button>
    </div>
  );
}
```

默认情况下，React 会在每次渲染后调用副作用函数 —— 包括第一次渲染的时候。某种意义上讲，effect 更像是渲染结果的一部分 —— 每个 effect 属于一次特定的渲染。

#### 清除副作用

```js
function AddEventListener(props) {
  // ...
  useEffect(() => {
    // ...
    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  });
}
```


#### 通过跳过 Effect 进行性能优化

```js
useEffect(() => {
  function handleStatusChange(status) {
    setIsOnline(status.isOnline);
  }

  ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
  return () => {
    ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
  };
}, [props.friend.id]); // 仅在 props.friend.id 发生变化时，重新订阅
```

useEffect第二个函数，仅仅在props.friend.id 发生变化时，重新订阅达到性能优化

### useContext


```js
const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};

const ThemeContext = React.createContext(themes.light);

function App() {
  return (
    <ThemeContext.Provider value={themes.dark}>
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar(props) {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

function ThemedButton() {
  const theme = useContext(ThemeContext);

  return (
    <button style={{ background: theme.background, color: theme.foreground }}>
      I am styled by theme context!
    </button>
  );
}
```

## 自定义huooks
以use开头
```js
import { useState, useEffect } from 'react';

function useFriendStatus(friendID) {
  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }

    ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange);
    };
  });

  return isOnline;
}
```


## 参考链接
- [官网 react hooks](https://reactjs.org/docs/hooks-intro.html)
- [React Hooks 详解](https://juejin.im/post/5dbbdbd5f265da4d4b5fe57d#heading-17) 

## 小结
react推荐使用函数组件，避免过多耦合过多的生命周期，使逻辑复杂、分散，难以处理。此次react hook 增强了函数组件的能力，开发更加方便。
本次初探，仅仅聚焦在基础 hooks，后续我们再探讨 自定义hooks
