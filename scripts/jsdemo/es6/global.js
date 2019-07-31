// 方法一
var obj = typeof window !== 'undefined'
    ? window
    : (typeof process === 'object' &&
        typeof require === 'function' &&
        typeof global === 'object')
        ? global
        : this;

console.log(obj);

// 方法二
var getGlobal = function () {
    if (typeof self !== 'undefined') { return self; }
    if (typeof window !== 'undefined') { return window; }
    if (typeof global !== 'undefined') { return global; }
    throw new Error('unable to locate global object');
};

console.log(getGlobal());