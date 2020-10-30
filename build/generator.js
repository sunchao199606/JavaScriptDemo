define("generator", [], function () {
  "use strict";

  var _marked = /*#__PURE__*/regeneratorRuntime.mark(sum);

  function sum(num) {
    var sum, i;
    return regeneratorRuntime.wrap(function sum$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            sum = 0;

            for (i = 0; i < num; i++) {
              sum += i;
            }

            _context.next = 4;
            return sum;

          case 4:
            return _context.abrupt("return", sum);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _marked);
  } // 主程序


  var ref = sum(10);
  console.log(ref.next());
  console.log(ref.next());
});