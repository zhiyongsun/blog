# 数组字母的排列组合

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
