// 闭包 closure
// 官方: 有权访问另一个函数作用域中的变量的函数 当函数可以记住并访问所在词法作用域时，就产生了闭包,即使函数是在当前词法作用域之外执行
// 词法作用域  执行上下文推送到调用堆栈 执行上下文从调用堆栈中弹出
// 闭包在平时编写代码中随处可见
// em: dom.onclick 防抖节流 框架里创建的id以及其他后续需要用到的变量 函数中的setTimeout用到函数作用域中的变量时
for (var i = 0; i++; i< 10) {
  !function() {
    // 匿名函数中的变量i被 setTimeout中的回调函数所持有
    setTimeout(() => console.log(i))
  }(i)
}
// 应用: 闭包的应用比较典型的用法是将操作函数暴露在外部 而细节隐藏在内部
// 特例是ie9之前的版本中所用的引用计数回收机制在dom事件回调中持有自身dom变量时会导致dom的引用计数至少为1所以无法回收
fucntion addBackground() {
  var el = document.qs('el');
  el.onclick = function() {
    el.style.background = 'red'
  }
}
// ---------------------------

// 你对闭包的认识:
// 官话是这样解释的 当函数可以记住并访问所在词法作用域时 就产生了闭包 即使函数是在当前词法作用域之外执行
// 其实闭包在平时编写代码时随处可见 我个人的理解是持有当前词法作用域中的变量的函数如果直接或间接的保留在全局作用域中或者dom的回调事件等等不被回收的情况时就产生了持久的闭包
// 比如现在有两个函数 一个函数里定义了另一个函数 如果内层函数持有外层函数作用域中的变量时 不管在何处执行内层函数 内层函数都会现在自己的作用域中查找变量 如果没有此变量
// 就会顺着作用域链向上查找 因为js的作用域机制是词法作用域 所以会在定义此函数的作用域中查找变量 也就是这个外层函数 从而导致本该被回收的外层函数作用域中的变量被保存了下来
// 1. 闭包在平时的使用中非常广泛 有意无意的都在使用闭包 比如你想封装一个事件防抖节流(需要定义变量给回调函数使用时)
function debounce(func, wait) {
  let timeout;
  return function() {
    const context = this;
    if (timeout) clearTimeout(timeout)
     timeout = setTimeout(() => {
      func.call(context, ...arguments)
    }, wait || 3000)
  }
}
function throttle(func, wait) {
  let previous = 0;
  return function() {
    const context = this;
    const now = new  Date();
    if (now - previous > wait) {
      func.call(context, ...arguments)
       previous = now
    }
  }
}
// 2.在非全局作用域下创建id递增的对象
// 3.以及平时写项目其实最外层大部分都是一个匿名自调用函数 然后声明一堆变量 这些变量会在某些回调函数中使用 这就是一个大的闭包 比如
// 现在的webpack打包工具里模块化的开发 在模块的开头声明一个id变量 这个id类似全局变量 但其实模块是函数是函数作用域 导出这个对象 对象有操作id
// 自增的方法 这时候这个id变量既不是全局变量也不会被被回收 
// 在全局作用域中同样可以实现变量的保存而这些闭包的主要作用就是防住全局变量的污染 同时又起到了保存变量的作用 闭包还有比较典型的用法就是模拟java c#中的封装
// 将操作私有数据的函数暴露给外部使用 而数据隐藏在内部 达到收敛权限的作用
