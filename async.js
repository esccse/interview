// 异步 回调函数 promise async/await
// promise在有些低版本浏览器中没有实现(ie11) babel-polyfill
// 回调函数 回调地狱 callback
// promise是异步编程的解决方案
// async/await 是基于promise和generrator函数实现的语法糖 与promise共同协作

// 最开始处理异步操作利用的是回调函数 但是如果业务复杂就会形成回调地狱 代码臃肿 可读性差 耦合度高 可维护性差 只能在回调函数中处理异常
// 以后出现了promise promsie是异步编程的解决方案 后被es6纳入规范
// es7出现了async/await 可以已同步的方式编写异步操作 但实际还是异步操作 实际上是generator和promise的语法糖
