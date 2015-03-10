define(["exports", "../util", "../util/each"], function (exports, _util, _utilEach) {
    "use strict";

    var global = _util.global;
    var each = _utilEach.each;


    var isPrototypeSet = false,
        reFragment = /^\s*<(\w+|!)[^>]*>/,
        reSingleTag = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        reSimpleSelector = /^[\.#]?[\w-]*$/;

    function $(selector) {
        var context = arguments[1] === undefined ? document : arguments[1];


        var collection;

        if (!selector) {
            collection = document.querySelectorAll(null);
        } else if (selector instanceof Wrapper) {
            return selector;
        } else if (typeof selector !== "string") {
            collection = selector.nodeType || selector === window ? [selector] : selector;
        } else if (reFragment.test(selector)) {
            collection = createFragment(selector);
        } else {
            context = typeof context === "string" ? document.querySelector(context) : context.length ? context[0] : context;

            collection = querySelector(selector, context);
        }

        return wrap(collection);
    }

    function find(selector) {
        var nodes = [];
        each(this, function (node) {
            each(querySelector(selector, node), function (child) {
                if (nodes.indexOf(child) === -1) {
                    nodes.push(child);
                }
            });
        });
        return $(nodes);
    }

    var matches = (function () {
        var context = typeof Element !== "undefined" ? Element.prototype : global,
            _matches = context.matches || context.matchesSelector || context.mozMatchesSelector || context.msMatchesSelector || context.oMatchesSelector || context.webkitMatchesSelector;
        return function (element, selector) {
            return _matches.call(element, selector);
        };
    })();

    function querySelector(selector, context) {
        var isSimpleSelector = reSimpleSelector.test(selector);

        if (isSimpleSelector) {
            if (selector[0] === "#") {
                var element = (context.getElementById ? context : document).getElementById(selector.slice(1));
                return element ? [element] : [];
            }
            if (selector[0] === ".") {
                return context.getElementsByClassName(selector.slice(1));
            }
            return context.getElementsByTagName(selector);
        }

        return context.querySelectorAll(selector);
    }

    function createFragment(html) {
        if (reSingleTag.test(html)) {
            return [document.createElement(RegExp.$1)];
        }

        var elements = [],
            container = document.createElement("div"),
            children = container.childNodes;

        container.innerHTML = html;

        for (var i = 0, l = children.length; i < l; i++) {
            elements.push(children[i]);
        }

        return elements;
    }

    function wrap(collection) {
        if (!isPrototypeSet) {
            Wrapper.prototype = $.fn;
            Wrapper.prototype.constructor = Wrapper;
            isPrototypeSet = true;
        }

        return new Wrapper(collection);
    }

    function Wrapper(collection) {
        var i = 0,
            length = collection.length;
        for (; i < length;) {
            this[i] = collection[i++];
        }
        this.length = length;
    }

    exports.$ = $;
    exports.find = find;
    exports.matches = matches;
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
});