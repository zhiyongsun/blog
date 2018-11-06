---
title: 数组字母的排列组合
tags: ['算法','数组字母的排列组合']
category: 数组字母的排列组合
date: 2018-04-30 10:00:00
---

## 代码

```js
function logCombSort(str) {
    var result = [];
    var originlength = str.length;
    logStr(str);
    function logStr(str) {
      str = [...str];
      if (str.length === 1) {
        result[originlength - str.length] = str[0];
        console.log(result.join(""));
        return
      }

      for (var i = 0; i < str.length; i++) {
        const currentString = str[i];
        result[originlength - str.length] = currentString;
        const cbStr = [...str];
        cbStr.splice(i, 1);
        logStr(cbStr);
      }
    }
  }
  logCombSort("abcd");
```
