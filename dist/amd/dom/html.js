define(["exports", "../util/each"], function (exports, _utilEach) {
  "use strict";

  var each = _utilEach.each;


  function html(fragment) {
    if (typeof fragment !== "string") {
      var element = this.nodeType ? this : this[0];
      return element ? element.innerHTML : undefined;
    }

    each(this, function (element) {
      element.innerHTML = fragment;
    });

    return this;
  }

  exports.html = html;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
});