define(["exports"], function (exports) {
    "use strict";

    function each(collection, callback, thisArg) {
        var length = collection.length;
        if (length !== undefined && collection.nodeType === undefined) {
            for (var i = 0; i < length; i++) {
                callback.call(thisArg, collection[i], i, collection);
            }
        } else {
            callback.call(thisArg, collection, 0, collection);
        }
        return collection;
    }

    exports.each = each;
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
});