---
title: 经典算法以及实现
tags: ['算法']
category: 算法
date: 2016-08-30 10:00:00
---
  
## 排序
    - 冒泡排序
    
    - 插入排序
    
    - 归并排序    
  ```js
  function　merge(left, right){
      var　result=[];
      while(left.length>0 && right.length>0){
          if(left[0]<right[0]){
          /*shift()方法用于把数组的第一个元素从其中删除，并返回第一个元素的值。*/
              result.push(left.shift());
          }else{
              result.push(right.shift());
          }
      }
      return　result.concat(left).concat(right);
  }
  function　mergeSort(items){
      if(items.length === 1){
          return　items;
  }
  var　middle = Math.floor(items.length/2),
      left = items.slice(0, middle),
      right = items.slice(middle);
      return　merge(mergeSort(left), mergeSort(right));
  }
  ```
    - 选择排序
    
