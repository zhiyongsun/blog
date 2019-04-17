---
title: redux saga
tags: ['react']
category: react
date: 2018-04-16 12:08:29
---

## 概念

- takeEvery 许多个 fetchData 实例同时启动。在某个特定时刻，尽管之前还有一个或多个 fetchData 尚未结束，我们还是可以启动一个新的 fetchData 任务，
- fork ，现在就把它当作一个允许我们在后台启动多个 saga 的 Effect ）
- takeLatest 在任何时刻 takeLatest 只允许一个 fetchData 任务在执行。并且这个任务是最后被启动的那个。 如果已经有一个任务在执行的时候启动另一个 fetchData ，那之前的这个任务会被自动取消。
- put，这个函数用于创建 dispatch Effect。
```js
     const data = yield call(Api.fetchUser, action.payload.url);
     yield put({type: "FETCH_SUCCEEDED", data});
```
- call 调用一个方法

- takeLeading : 保证第一个运行，防重



