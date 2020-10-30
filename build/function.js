define("function", [], function () {
  // 参数默认值
  "use strict";

  var a = 1;
  (void 0).prop = 111;

  function fun1() {
    var arg1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
    var agr2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'eeee';
    console.log(this);
    console.log(arg1 + "--" + agr2);
  }

  console.log(void 0);
  fun1(undefined, undefined);
});