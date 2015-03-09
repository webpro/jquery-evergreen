"use strict";

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { "default": obj }; };

var extend = require("./util").extend;


var api = {},
    $ = {};

var array = _interopRequireWildcard(require("./array"));

var attr = _interopRequireWildcard(require("./dom/attr"));

var class_ = _interopRequireWildcard(require("./dom/class"));

var contains = _interopRequireWildcard(require("./dom/contains"));

var css = _interopRequireWildcard(require("./css"));

var data = _interopRequireWildcard(require("./dom/data"));

var dom = _interopRequireWildcard(require("./dom"));

var dom_extra = _interopRequireWildcard(require("./dom/extra"));

var event = _interopRequireWildcard(require("./event"));

var html = _interopRequireWildcard(require("./dom/html"));

var noconflict = _interopRequireWildcard(require("./noconflict"));

var ready = _interopRequireWildcard(require("./event/ready"));

var selector = _interopRequireWildcard(require("./selector"));

var selector_extra = _interopRequireWildcard(require("./selector/extra"));

var trigger = _interopRequireWildcard(require("./event/trigger"));

var type = _interopRequireWildcard(require("./type"));

if (typeof selector !== "undefined") {
    $ = selector.$;
    $.matches = selector.matches;
    api.find = selector.find;
    api.closest = selector.closest;
}

extend($, contains, noconflict, type);
extend(api, array, attr, class_, css, data, dom, dom_extra, event, html, ready, selector_extra, trigger);

$.fn = api;

$.version = "0.9.3";

$.extend = extend;

module.exports = $;