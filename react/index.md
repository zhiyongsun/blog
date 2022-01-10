---
title: index api
tags: ['react']
category: react
date: 2022-01-10 10:08:29
---

## StrictMode
严格模式检查仅在开发模式下运行；它们不会影响生产构建。
```js
StrictMode 目前有助于：

识别不安全的生命周期
关于使用过时字符串 ref API 的警告
关于使用废弃的 findDOMNode 方法的警告
检测意外的副作用
检测过时的 context API
```

## Profiler
Profiler 测量一个 React 应用多久渲染一次以及渲染一次的“代价”。 它的目的是识别出应用中渲染较慢的部分，或是可以使用类似 memoization 优化的部分，并从相关优化中获益。

## Portal
创建基于任意父元素的子组件

## lazy

React.lazy
React.lazy() 允许你定义一个动态加载的组件。这有助于缩减 bundle 的体积，并延迟加载在初次渲染时未用到的组件。

你可以在代码分割文档中学习如何使用它。查阅此文章可以了解更多用法细节。

请注意，渲染 lazy 组件依赖该组件渲染树上层的 <React.Suspense> 组件。这是指定加载指示器（loading indicator）的方式。

## Suspense
React.Suspense 可以指定加载指示器（loading indicator），以防其组件树中的某些子组件尚未具备渲染条件。目前，懒加载组件是 <React.Suspense> 支持的唯一用例：
```tsx
// 该组件是动态加载的
const OtherComponent = React.lazy(() => import('./OtherComponent'));

function MyComponent() {
  return (
    // 显示 <Spinner> 组件直至 OtherComponent 加载完成
    <React.Suspense fallback={<Spinner />}>
      <div>
        <OtherComponent />
      </div>
    </React.Suspense>
  );
}
```

