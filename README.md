# React-Router source code marking


React-Router v6 已经舍弃 history 包, 而是自己实现了一个 packages/router/history.ts

# 基本原理

对 window.history 进行封装, 并注册 popstate 事件，每次点击 Link 组件都会执行 pushState，但这仅仅只是修改了 url，并不会更新组件。所以就需要在路由的根组件（BrowserRouter）注册一个更新函数。以后每次点击 Link 之后都要执行 pushState 和更新函数。更新函数只是更新路由组件，但怎么匹配到指定的路由组件呢？在 Routers 中会有一个对比函数，使 url 和 路由组件保持一致。

popstate 事件: 前进、后退、a 标签、代码里执行 history.back() 、history.forward()、history.go()


# 标签

安装插件后即可在左侧待办事项看到众多 TAG

https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.todo-tree

