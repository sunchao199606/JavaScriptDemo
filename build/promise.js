define("promise", ["fs"], function (_fs) {
  "use strict";

  var callback = function callback(err, data) {
    if (err) {
      throw err;
    }

    console.log(data);
  };

  var promise = new Promise(function (resolved, reject) {
    // 异步操作
    (0, _fs.readFile)('‪E:\\1.txt', callback);

    if (reject) {}
  });
});