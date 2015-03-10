define(["exports", "../util/each"], function (exports, _utilEach) {
    "use strict";

    var each = _utilEach.each;


    function attr(key, value) {
        if (typeof key === "string" && typeof value === "undefined") {
            var element = this.nodeType ? this : this[0];
            return element ? element.getAttribute(key) : undefined;
        }

        each(this, function (element) {
            if (typeof key === "object") {
                for (var attr in key) {
                    element.setAttribute(attr, key[attr]);
                }
            } else {
                element.setAttribute(key, value);
            }
        });

        return this;
    }

    function removeAttr(key) {
        each(this, function (element) {
            element.removeAttribute(key);
        });
        return this;
    }

    exports.attr = attr;
    exports.removeAttr = removeAttr;
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
});