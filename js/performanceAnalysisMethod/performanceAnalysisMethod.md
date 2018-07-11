---
title: js性能分析方法
abbrlink: 11
---
# js性能分析方法

一般情况下，作为开发者，需要对代码性能进行分析，可以使用以下三种方法进行分析。

## 使用 `console.time` 和 `console.timeEnd`进行分析
比如分析 for 与 map 性能

```javascript

    const arr = new Array(100000);
    let sum1 = 0, sum2 = 0;
    arr.fill(1);

    console.time("sum1");
    for (let i = 0; i < arr.length; i++) {
        sum1 += arr[i];
    }
    console.timeEnd("sum1");

    console.time("sum2");
    arr.map(function(item) {
        sum2 += item;
    });
    console.timeEnd("sum2");
    console.log(sum1)
    console.log(sum2)

```

google chrome Version 62 结果显示如下：
```javascript
sum1: 1.4990234375ms
sum2: 17.742919921875ms
100000
100000
```

在此种情况下，for循环性能明显比map循环性高。

## 使用Benchmark.js

## 使用JsPerf分析

以上两种请参考[使用Benchmark.js和jsPerf分析代码性能](https://segmentfault.com/a/1190000003486676)






