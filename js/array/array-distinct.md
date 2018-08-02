# 数组去重

## 使用 Set 数据结构
```js

var arr= [1, 2, 3, 1];

console.log(Array.from(new Set(arr)));

```

## 使用对象属性不能相同来
```js
  function distant(arr) {
    var i,
      obj = {},
      result = [];
    for (i = 0; i < arr.length; i++) {
      //如果能查找到，证明数组元素重复了
      if (!obj[arr[i]]) {
        obj[arr[i]] = 1;
        result.push(arr[i]);
      }
    }
    return result;
  }
```

## 使用indexOf forEach

```js
  function distant(arr) {
    var result = [];
    //从传入参数的下一个索引值开始寻找是否存在重复
    arr.forEach(function (v, i, arr) {
      //这里利用map，filter方法也可以实现
      var bool = arr.indexOf(v, i + 1);
      if (bool === -1) {
        result.push(v);
      }
    });
    return result;
  }
```

## 使用qu

## 参考链接
[JS实现数组去重方法总结(六种方法)
](http://www.jb51.net/article/118657.htm)
