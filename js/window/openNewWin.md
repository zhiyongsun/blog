---
title: 在新的窗口打开页面
categories: window
tags: 在新的窗口打开页面
abbrlink: 37127
date: 2017-05-03 22:00:05
---
```javascript
 function open(openType){
                let newWin = window.open('about:blank', openType || '_blank');
                return function(url){
                    newWin.location = url;
                }
            }

```

```javascript
openWinByForm(url, method = 'post'){
        var form = document.createElement("form");
        form.setAttribute("method",method);
        form.setAttribute("action", url);
        document.body.appendChild(form);
        form.submit()
    }
```

```javascript
openWinByA(url){
        var a = document.createElement('a');
        a.setAttribute('href',url);
        a.setAttribute('target', '_blank');
        a.setAttribute('id','sd0fwe0we0');
        if(!document.getElementById('sd0fwe0we0')) document.body.appendChild(a);
        a.click();
    }
```
