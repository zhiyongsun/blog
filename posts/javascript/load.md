---
title: '通过 load 动态加载 JavaScript 文件'
category: JavaScript
tags: ['load']
date: 2018-11-09 17:00:00
---


## example

```js
<script>
  var script = document.createElement("script");
  script.addEventListener("load", function(event) {
    console.log("Script finished loading and executing");
  });
  script.src = "http://example.com/example.js";
  script.async = true;
  document.getElementsByTagName("script")[0].parentNode.appendChild(script);
</script>
```
或者

```js
<script>
  var script = document.createElement("script");
  script.onload = function(event) {
    console.log("Script finished loading and executing");
  };
  script.src = "http://example.com/example.js";
  script.async = true;
  document.getElementsByTagName("script")[0].parentNode.appendChild(script);
</script>
```
