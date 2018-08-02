# 同源策略

## scheme,host, port 都相同视为同源。

## IE 特例 没有把port加入

## 非同源限制

- 不能共享cookie，localstorage，indexDb
- 不能操作彼此的Dom
- 不能发送XMLHTTPRequest

## document.domain
