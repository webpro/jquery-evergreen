"use strict";

var matches = require(".").matches;
var uniq = require("../util").uniq;
var each = require("../util/each").each;


var closest = (function () {
    function closest(selector, context) {
        var nodes = [];
        each(this, function (node) {
            while (node && node !== context) {
                if (matches(node, selector)) {
                    nodes.push(node);
                    break;
                }
                node = node.parentElement;
            }
        });
        return $(uniq(nodes));
    }

    return !Element.prototype.closest ? closest : function (selector, context) {
        if (!context) {
            var nodes = [];
            each(this, function (node) {
                var n = node.closest(selector);
                if (n) {
                    nodes.push(n);
                }
            });
            return $(uniq(nodes));
        } else {
            return closest.call(this, selector, context);
        }
    };
})();

exports.closest = closest;
Object.defineProperty(exports, "__esModule", {
    value: true
});