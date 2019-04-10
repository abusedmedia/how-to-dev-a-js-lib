(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.mylib = factory());
}(this, function () { 'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  var Mod =
  /*#__PURE__*/
  function () {
    function Mod() {
      _classCallCheck(this, Mod);
    }

    _createClass(Mod, [{
      key: "method",
      value: function method() {
        console.log('hey! a method from a module 2!');
      }
    }]);

    return Mod;
  }();

  var mod2 = new Mod();

  var Mod$1 =
  /*#__PURE__*/
  function () {
    function Mod() {
      _classCallCheck(this, Mod);
    }

    _createClass(Mod, [{
      key: "method",
      value: function method() {
        console.log('hey! a method from a module 1!');
        mod2.method();
      }
    }]);

    return Mod;
  }();

  var mod1 = new Mod$1();

  var Mod$2 =
  /*#__PURE__*/
  function () {
    function Mod() {
      _classCallCheck(this, Mod);
    }

    _createClass(Mod, [{
      key: "method",
      value: function method() {
        console.log('hey! a method from a module 3!');
      }
    }]);

    return Mod;
  }();

  var mod3 = new Mod$2();

  var main = {
    mod1: mod1,
    mod3: mod3
  };

  return main;

}));
//# sourceMappingURL=mylib.js.map
