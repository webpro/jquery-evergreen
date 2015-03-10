define(["exports", "../util/each", ".", "../selector"], function (exports, _utilEach, _, _selector) {
    "use strict";

    var each = _utilEach.each;
    var append = _.append;
    var before = _.before;
    var after = _.after;
    var $ = _selector.$;


    function appendTo(element) {
        var context = typeof element === "string" ? $(element) : element;
        append.call(context, this);
        return this;
    }

    function empty() {
        return each(this, function (element) {
            element.innerHTML = "";
        });
    }

    function remove() {
        return each(this, function (element) {
            if (element.parentNode) {
                element.parentNode.removeChild(element);
            }
        });
    }

    function replaceWith() {
        return before.apply(this, arguments).remove();
    }

    function text(value) {
        if (value === undefined) {
            return this[0].textContent;
        }

        each(this, function (element) {
            element.textContent = "" + value;
        });

        return this;
    }

    function val(value) {
        if (value === undefined) {
            return this[0].value;
        }

        each(this, function (element) {
            element.value = value;
        });

        return this;
    }

    exports.appendTo = appendTo;
    exports.empty = empty;
    exports.remove = remove;
    exports.replaceWith = replaceWith;
    exports.text = text;
    exports.val = val;
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
});