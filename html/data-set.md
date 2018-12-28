---
title: data set
category: html
tags: ['data-set']
date: 2018-12-27 22:00:00
---

## dataset 属性不能直接写入

dataset 属性本身可以被读取，但不能直接写入。相反，所有的写入必须是它的“属性”，这反过来表示数据属性。

## 实例
````html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<div id="user" data-id="1234567890" data-user="johndoe" data-date-of-birth>John Doe
</div>

<script>
  var el = document.querySelector('#user')
  console.log(el.dataset)
  el.dataset.dateOfBirth = '1960-10-03';
  console.log(el.dataset)
</script>
</body>
</html>

````

## 使用 角标

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        .user-icon {
            width: 48px;
            height: 48px;
            border-radius: 50%;
            position: relative;
        }

        .user::after {
            content: attr(data-num);
            position: absolute;
            top: -5px;
            right: -2.5px;
            width: 20px;
            height: 20px;
            font-size: 11px;
            line-height: 1.5;
            color: #FFF;
            text-align: center;
            vertical-align: middle;
            background: #c21414;
            border-radius: 50%;
            border: 1px solid #FFF;
        }
    </style>
</head>
<body>
<div id="user" class="user user-icon" data-num="1" data-user="johndoe" data-date-of-birth>John Doe
</div>

<script>
  var el = document.querySelector('#user')
  console.log(el.dataset)
  el.dataset.dateOfBirth = '1960-10-03'
  el.dataset.num = '2'
  console.log(el.dataset)
</script>
</body>
</html>

```
