---
title: difference between props and state
tags: react
categories: react
abbrlink: 37841
date: 2016-11-29 10:08:29
---

# 区别
props和state之间是紧密相关的。**父组件的state**常常转变**子组件的props**成下面我们通过一个父子组件从上至下来分析它们。
  
假如我们有个父组件，可以在父组件的state里定义子组件的数据比如：  
``` 
this.setState({ childData: 'Child Data' });  
```  
紧接着，在父组件的`render()`方法里面，可以将父组件的`state`，作为子组件的`props`传递下去，如下
```
<Child data = {this.state.childData}/>
```
这样就可以父组件的`state`传递给子组件的`props`。从子组件的角度来看，`props`是不可变的。如何改变子组件的props？我们仅仅需要改变父组件内部的`state`即可，父组件的`state`改变之后，引起父组件重新渲染，在渲染的过程中，子组件的`data`变成父组件`this.state.childDtat`的值。这样父组件内部`state`改变，就会引起子组件的改变。

这样就形成里从上而下的数据流，也就是React常说的单向数据流，这个“向”是向下。  
我们常常利用这个原理更新子组件，从而衍生出一种模式，父组件：处理复杂的业务逻辑、交互以及数据等。子组件：称它为`Stateless`组件即无状态组件，只用作展示。在我们开发过程中，尽可能多个使用无状态组件，可以缕清业务之间的逻辑关系,提高渲染效率。

如果子组件想要改变自身的`data`，这时候需要，父组件传递给子组件一个方法，改变父组件自身的`state`。  
父组件：
```
<Child data={this.state.childData} handleChange={this.handelChildChange}></Child>
```
子组件接收父组件方法
```
let Chilid = ({data,handleChange}) =>
    <div onClick={handleChange}>{data.name}</div>
```
# 小结
==props：==一般用于父组件向子组件通信，在组件之间通信使用。  
==state：==一般用于组件内部的状态维护，更新组建内部的数据，状态，更新子组件的props等。
# 完整代码
父组件
```
import React, {Component} from 'react';

import Child from './components/child'
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            childData: {name: 'child'}
        };
        this.handelChildChange = this.handelChildChange.bind(this);
    }

    handelChildChange(){
        this.setState({
            childData: {name: 'newChild'}
        })
    }
    render() {
        return (
            <div style={{textAlign:'center'}}>
                <Child data={this.state.childData} handleChange={this.handelChildChange}></Child>
            </div>
        );
    }
}

export default App;
```

子组件:这里使用无状态组件，解构赋值以及无状态组件使用父组件方法
```
import React from 'react';

let Chilid = ({data,handleChange}) =>
    <div onClick={handleChange}>{data.name}</div>

export default Chilid
```



# 参考链接 
1. http://stackoverflow.com/questions/27991366/what-is-the-difference-between-state-and-props-in-react
2. https://facebook.github.io/react/docs/state-and-lifecycle.html#the-data-flows-down
