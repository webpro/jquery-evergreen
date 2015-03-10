"use strict";

var global = new Function("return this")();

function toArray(collection) {
    var length = collection.length,
        result = new Array(length);
    for (var i = 0; i < length; i++) {
        result[i] = collection[i];
    }
    return result;
}

function extend(target) {
    for (var _len = arguments.length, sources = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        sources[_key - 1] = arguments[_key];
    }

    sources.forEach(function (src) {
        for (var prop in src) {
            target[prop] = src[prop];
        }
    });
    return target;
}

function uniq(collection) {
    return collection.filter(function (item, index) {
        return collection.indexOf(item) === index;
    });
}

exports.global = global;
exports.toArray = toArray;
exports.extend = extend;
exports.uniq = uniq;
Object.defineProperty(exports, "__esModule", {
    value: true
});