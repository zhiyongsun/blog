---
title: call 与 apply性能分析
abbrlink: 7
---

# call 与 apply性能分析

## call 比 apply 快的多，下面代码运行结果

```javascript

function work(a, b, c) {}

var a = [1, 2, 3];

  console.time('call');
  for (var i = 0; i < 1000000; i++) {
    work.call(this, 1, 2, 3);
  }
  console.timeEnd('call');

for (var j = 0; j < 5; j++) {
  console.time('apply');
  for (var i = 0; i < 1000000; i++) {
    work.apply(this, a);
  }
  console.timeEnd('apply');

  console.time('call');
  for (var i = 0; i < 1000000; i++) {
    work.call(this, 1, 2, 3);
  }
  console.timeEnd('call');
}
    
```
google chrome Version 62 结果显示如下：
```javascript

VM125:16 call: 5.592041015625ms
VM125:16 apply: 17.97705078125ms
VM125:22 call: 3.798828125ms
VM125:16 apply: 18.8818359375ms
VM125:22 call: 2.841064453125ms
VM125:16 apply: 15.654052734375ms
VM125:22 call: 2.47900390625ms
VM125:16 apply: 15.90087890625ms
VM125:22 call: 2.311767578125ms
VM125:16 apply: 15.912109375ms
VM125:22 call: 2.385986328125ms

```

原因在与.apply在运行前要对作为参数的数组进行一系列检验和深拷贝，.call则没有这些步骤。具体可以参考ECMA .

深拷贝是指将.apply()的第二个参数（数组）深拷贝到JS引擎内部创建的argList里。    
.call和.apply运行的时候都会创建一个参数序列（Argument Lists）叫做argList。.call只需要将参数逐一放到argList里面。而.apply的参数是数组，需要获得其中每一个元素的值再放到argList里面。
大致步骤是：

- Let argList be an empty List.

- Let index be 0.

- Repeat while index < n

- Let indexName be ToString(index).
- Let nextArg be the result of calling the [[Get]] internal method of argArray with indexName as the argument.
Append nextArg as the last element of argList.
- Set index to index + 1.

## 参考文档
[ecma](http://www.ecma-international.org/ecma-262/5.1/#sec-15.3.4.3)

[underscore源码](https://segmentfault.com/q/1010000007894513)


