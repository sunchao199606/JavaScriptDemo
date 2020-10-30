define("global", [], function () {
  "use strict";

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  // 方法一
  var obj = typeof window !== 'undefined' ? window : (typeof process === "undefined" ? "undefined" : _typeof(process)) === 'object' && typeof require === 'function' && (typeof global === "undefined" ? "undefined" : _typeof(global)) === 'object' ? global : void 0;
  console.log(obj); // 方法二

  var getGlobal = function getGlobal() {
    if (typeof self !== 'undefined') {
      return self;
    }

    if (typeof window !== 'undefined') {
      return window;
    }

    if (typeof global !== 'undefined') {
      return global;
    }

    throw new Error('unable to locate global object');
  };

  console.log(getGlobal());
});