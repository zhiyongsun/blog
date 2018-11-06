---
title: 内存泄露
category: JavaScript
tags: ['memory leak']
date: 2017-10-31 10:00:00
---

## 什么是内存泄漏？

程序的运行需要内存。只要程序提出要求，操作系统或者运行时（runtime）就必须供给内存。    

对于持续运行的服务进程（daemon），必须及时释放不再用到的内存。否则，内存占用越来越高，轻则影响系统性能，重则导致进程崩溃。

不再用到的内存，没有及时释放，就叫做内存泄漏（memory leak）。

有些语言（比如 C 语言）必须手动释放内存，程序员负责内存管理。

```c
char * buffer;
buffer = (char*) malloc(42);

// Do something with buffer

free(buffer);
```
上面是 C 语言代码，malloc方法用来申请内存，使用完毕之后，必须自己用free方法释放内存。

这很麻烦，所以大多数语言提供自动内存管理，减轻程序员的负担，这被称为"垃圾回收机制"（garbage collector）。

## 垃圾回收机制

垃圾回收机制怎么知道，哪些内存不再需要呢？

最常使用的方法叫做"引用计数"（reference counting）：语言引擎有一张"引用表"，保存了内存里面所有的资源（通常是各种值）的引用次数。如果一个值的引用次数是0，就表示这个值不再用到了，因此可以将这块内存释放。

![](/images/memoryLeak/bg1.png)

上图中，左下角的两个值，没有任何引用，所以可以释放。

如果一个值不再需要了，引用数却不为0，垃圾回收机制无法释放这块内存，从而导致内存泄漏。

```javascript
const arr = [1, 2, 3, 4];
console.log('hello world');
```
上面代码中，数组[1, 2, 3, 4]是一个值，会占用内存。变量arr是仅有的对这个值的引用，因此引用次数为1。尽管后面的代码没有用到arr，它还是会持续占用内存。

如果增加一行代码，解除arr对[1, 2, 3, 4]引用，这块内存就可以被垃圾回收机制释放了。

```javascript
let arr = [1, 2, 3, 4];
console.log('hello world');
arr = null;
```

上面代码中，arr重置为null，就解除了对[1, 2, 3, 4]的引用，引用次数变成了0，内存就可以释放出来了。

因此，并不是说有了垃圾回收机制，程序员就轻松了。你还是需要关注内存占用：那些很占空间的值，一旦不再用到，你必须检查是否还存在对它们的引用。如果是的话，就必须手动解除引用。

## 几种类型的常见 JavaScript 内存泄露，以及解决方法

- 意外的全局变量
JavaScript 处理未定义变量的方式比较宽松：未定义的变量会在全局对象创建一个新变量。在浏览器中，全局对象是 window 。

```javascript
function foo(arg) { 
    bar = "this is a hidden global variable"; 
} 
```

- 被遗忘的计时器或回调函数
在 JavaScript 中使用 setInterval 非常平常。一段常见的代码：

```javascript
var someResource = getData(); 
setInterval(function() { 
    var node = document.getElementById('Node'); 
    if(node) { 
        // 处理 node 和 someResource 
        node.innerHTML = JSON.stringify(someResource)); 
    } 
}, 1000); 
```
- 脱离 DOM 的引用
有时，保存 DOM 节点内部数据结构很有用。假如你想快速更新表格的几行内容，把每一行 DOM 存成字典（JSON 键值对）或者数组很有意义。此时，同样的 DOM 元素存在两个引用：一个在 DOM 树中，另一个在字典中。将来你决定删除这些行时，需要把两个引用都清除。

```javascript
var elements = { 
    button: document.getElementById('button'), 
    image: document.getElementById('image'), 
    text: document.getElementById('text') 
}; 
function doStuff() { 
    image.src = 'http://some.url/image'; 
    button.click(); 
    console.log(text.innerHTML); 
    // 更多逻辑 
} 
function removeButton() { 
    // 按钮是 body 的后代元素 
    document.body.removeChild(document.getElementById('button')); 
    // 此时，仍旧存在一个全局的 #button 的引用 
    // elements 字典。button 元素仍旧在内存中，不能被 GC 回收。 
}
```

此外还要考虑 DOM 树内部或子节点的引用问题。假如你的 JavaScript 代码中保存了表格某一个 <td> 的引用。将来决定删除整个表格的时候，直觉认为 GC 会回收除了已保存的 <td> 以外的其它节点。实际情况并非如此：此<td> 是表格的子节点，子元素与父元素是引用关系。由于代码保留了 <td> 的引用，导致整个表格仍待在内存中。保存 DOM 元素引用的时候，要小心谨慎。
 

