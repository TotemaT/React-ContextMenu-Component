(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './ComponentWithContextMenu'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./ComponentWithContextMenu'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.ComponentWithContextMenu);
    global.index = mod.exports;
  }
})(this, function (exports, _ComponentWithContextMenu) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _ComponentWithContextMenu2 = _interopRequireDefault(_ComponentWithContextMenu);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.default = _ComponentWithContextMenu2.default;
});