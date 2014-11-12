!function(_e){var e=function(){return _e()["default"]};if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.$=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
Object.defineProperties(exports, {
  each: {get: function() {
      return each;
    }},
  every: {get: function() {
      return every;
    }},
  filter: {get: function() {
      return filter;
    }},
  forEach: {get: function() {
      return forEach;
    }},
  indexOf: {get: function() {
      return indexOf;
    }},
  map: {get: function() {
      return map;
    }},
  pop: {get: function() {
      return pop;
    }},
  push: {get: function() {
      return push;
    }},
  reverse: {get: function() {
      return reverse;
    }},
  shift: {get: function() {
      return shift;
    }},
  some: {get: function() {
      return some;
    }},
  unshift: {get: function() {
      return unshift;
    }},
  __esModule: {value: true}
});
var $__util__,
    $__selector__;
var $__0 = require("./util"),
    _each = $__0.each,
    toArray = $__0.toArray;
var $__1 = require("./selector"),
    $ = $__1.$,
    matches = $__1.matches;
var ArrayProto = Array.prototype;
var every = ArrayProto.every;
function filter(selector, thisArg) {
  var callback = typeof selector === 'function' ? selector : function(element) {
    return matches(element, selector);
  };
  return $(ArrayProto.filter.call(this, callback, thisArg));
}
function forEach(callback, thisArg) {
  return _each(this, callback, thisArg);
}
var each = forEach;
var indexOf = ArrayProto.indexOf;
var map = ArrayProto.map;
var pop = ArrayProto.pop;
var push = ArrayProto.push;
function reverse() {
  return $(toArray(this).reverse());
}
var shift = ArrayProto.shift;
var some = ArrayProto.some;
var unshift = ArrayProto.unshift;
;

//# sourceMappingURL=<compileOutput>


},{"./selector":15,"./util":19}],2:[function(require,module,exports){
"use strict";
Object.defineProperties(exports, {
  attr: {get: function() {
      return attr;
    }},
  removeAttr: {get: function() {
      return removeAttr;
    }},
  __esModule: {value: true}
});
var $__util__;
var each = require("./util").each;
function attr(key, value) {
  if (typeof key === 'string' && typeof value === 'undefined') {
    var element = this.nodeType ? this : this[0];
    return element ? element.getAttribute(key) : undefined;
  }
  each(this, function(element) {
    if (typeof key === 'object') {
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
  each(this, function(element) {
    element.removeAttribute(key);
  });
  return this;
}
;

//# sourceMappingURL=<compileOutput>


},{"./util":19}],3:[function(require,module,exports){
"use strict";
Object.defineProperties(exports, {
  addClass: {get: function() {
      return addClass;
    }},
  removeClass: {get: function() {
      return removeClass;
    }},
  toggleClass: {get: function() {
      return toggleClass;
    }},
  hasClass: {get: function() {
      return hasClass;
    }},
  __esModule: {value: true}
});
var $__util__;
var $__0 = require("./util"),
    makeIterable = $__0.makeIterable,
    each = $__0.each;
function addClass(value) {
  if (value && value.length) {
    each(value.split(' '), function(className) {
      each(this, function(element) {
        element.classList.add(className);
      });
    }.bind(this));
  }
  return this;
}
function removeClass(value) {
  if (value && value.length) {
    each(value.split(' '), function(className) {
      each(this, function(element) {
        element.classList.remove(className);
      });
    }.bind(this));
  }
  return this;
}
function toggleClass(value) {
  if (value && value.length) {
    each(value.split(' '), function(className) {
      each(this, function(element) {
        element.classList.toggle(className);
      });
    }.bind(this));
  }
  return this;
}
function hasClass(value) {
  return makeIterable(this).some(function(element) {
    return element.classList.contains(value);
  });
}
;

//# sourceMappingURL=<compileOutput>


},{"./util":19}],4:[function(require,module,exports){
"use strict";
Object.defineProperties(exports, {
  contains: {get: function() {
      return contains;
    }},
  __esModule: {value: true}
});
function contains(container, element) {
  if (!container || !element || container === element) {
    return false;
  } else if (container.contains) {
    return container.contains(element);
  } else if (container.compareDocumentPosition) {
    return !(container.compareDocumentPosition(element) & Node.DOCUMENT_POSITION_DISCONNECTED);
  }
  return false;
}
;

//# sourceMappingURL=<compileOutput>


},{}],5:[function(require,module,exports){
"use strict";
Object.defineProperties(exports, {
  css: {get: function() {
      return css;
    }},
  __esModule: {value: true}
});
var $__util__;
var each = require("./util").each;
function isNumeric(value) {
  return !isNaN(parseFloat(value)) && isFinite(value);
}
function camelize(value) {
  return value.replace(/-([\da-z])/gi, function(matches, letter) {
    return letter.toUpperCase();
  });
}
function dasherize(value) {
  return value.replace(/([a-z\d])([A-Z])/g, '$1-$2').toLowerCase();
}
function css(key, value) {
  var styleProps,
      prop,
      val;
  if (typeof key === 'string') {
    key = camelize(key);
    if (typeof value === 'undefined') {
      var element = this.nodeType ? this : this[0];
      if (element) {
        val = element.style[key];
        return isNumeric(val) ? parseFloat(val) : val;
      }
      return undefined;
    }
    styleProps = {};
    styleProps[key] = value;
  } else {
    styleProps = key;
    for (prop in styleProps) {
      val = styleProps[prop];
      delete styleProps[prop];
      styleProps[camelize(prop)] = val;
    }
  }
  each(this, function(element) {
    for (prop in styleProps) {
      if (styleProps[prop] || styleProps[prop] === 0) {
        element.style[prop] = styleProps[prop];
      } else {
        element.style.removeProperty(dasherize(prop));
      }
    }
  });
  return this;
}
;

//# sourceMappingURL=<compileOutput>


},{"./util":19}],6:[function(require,module,exports){
"use strict";
Object.defineProperties(exports, {
  data: {get: function() {
      return data;
    }},
  prop: {get: function() {
      return prop;
    }},
  __esModule: {value: true}
});
var $__util__;
var each = require("./util").each;
var dataKeyProp = '__domtastic_data__';
function data(key, value) {
  if (typeof key === 'string' && typeof value === 'undefined') {
    var element = this.nodeType ? this : this[0];
    return element && element[dataKeyProp] ? element[dataKeyProp][key] : undefined;
  }
  each(this, function(element) {
    element[dataKeyProp] = element[dataKeyProp] || {};
    element[dataKeyProp][key] = value;
  });
  return this;
}
function prop(key, value) {
  if (typeof key === 'string' && typeof value === 'undefined') {
    var element = this.nodeType ? this : this[0];
    return element && element ? element[key] : undefined;
  }
  each(this, function(element) {
    element[key] = value;
  });
  return this;
}
;

//# sourceMappingURL=<compileOutput>


},{"./util":19}],7:[function(require,module,exports){
"use strict";
Object.defineProperties(exports, {
  append: {get: function() {
      return append;
    }},
  prepend: {get: function() {
      return prepend;
    }},
  before: {get: function() {
      return before;
    }},
  after: {get: function() {
      return after;
    }},
  clone: {get: function() {
      return clone;
    }},
  __esModule: {value: true}
});
var $__util__,
    $__selector__;
var toArray = require("./util").toArray;
var $ = require("./selector").$;
function append(element) {
  if (this instanceof Node) {
    if (typeof element === 'string') {
      this.insertAdjacentHTML('beforeend', element);
    } else {
      if (element instanceof Node) {
        this.appendChild(element);
      } else {
        var elements = element instanceof NodeList ? toArray(element) : element;
        elements.forEach(this.appendChild.bind(this));
      }
    }
  } else {
    var l = this.length;
    while (l--) {
      var elm = l === 0 ? element : _clone(element);
      append.call(this[l], elm);
    }
  }
  return this;
}
function prepend(element) {
  if (this instanceof Node) {
    if (typeof element === 'string') {
      this.insertAdjacentHTML('afterbegin', element);
    } else {
      if (element instanceof Node) {
        this.insertBefore(element, this.firstChild);
      } else {
        var elements = element instanceof NodeList ? toArray(element) : element;
        elements.reverse().forEach(prepend.bind(this));
      }
    }
  } else {
    var l = this.length;
    while (l--) {
      var elm = l === 0 ? element : _clone(element);
      prepend.call(this[l], elm);
    }
  }
  return this;
}
function before(element) {
  if (this instanceof Node) {
    if (typeof element === 'string') {
      this.insertAdjacentHTML('beforebegin', element);
    } else {
      if (element instanceof Node) {
        this.parentNode.insertBefore(element, this);
      } else {
        var elements = element instanceof NodeList ? toArray(element) : element;
        elements.forEach(before.bind(this));
      }
    }
  } else {
    var l = this.length;
    while (l--) {
      var elm = l === 0 ? element : _clone(element);
      before.call(this[l], elm);
    }
  }
  return this;
}
function after(element) {
  if (this instanceof Node) {
    if (typeof element === 'string') {
      this.insertAdjacentHTML('afterend', element);
    } else {
      if (element instanceof Node) {
        this.parentNode.insertBefore(element, this.nextSibling);
      } else {
        var elements = element instanceof NodeList ? toArray(element) : element;
        elements.reverse().forEach(after.bind(this));
      }
    }
  } else {
    var l = this.length;
    while (l--) {
      var elm = l === 0 ? element : _clone(element);
      after.call(this[l], elm);
    }
  }
  return this;
}
function clone() {
  return $(_clone(this));
}
function _clone(element) {
  if (typeof element === 'string') {
    return element;
  } else if (element instanceof Node) {
    return element.cloneNode(true);
  } else if ('length' in element) {
    return [].map.call(element, function(el) {
      return el.cloneNode(true);
    });
  }
  return element;
}
;

//# sourceMappingURL=<compileOutput>


},{"./selector":15,"./util":19}],8:[function(require,module,exports){
"use strict";
Object.defineProperties(exports, {
  appendTo: {get: function() {
      return appendTo;
    }},
  empty: {get: function() {
      return empty;
    }},
  remove: {get: function() {
      return remove;
    }},
  replaceWith: {get: function() {
      return replaceWith;
    }},
  text: {get: function() {
      return text;
    }},
  val: {get: function() {
      return val;
    }},
  __esModule: {value: true}
});
var $__util__,
    $__dom__,
    $__selector__;
var each = require("./util").each;
var $__1 = require("./dom"),
    append = $__1.append,
    before = $__1.before,
    after = $__1.after;
var $ = require("./selector").$;
function appendTo(element) {
  var context = typeof element === 'string' ? $(element) : element;
  append.call(context, this);
  return this;
}
function empty() {
  return each(this, function(element) {
    element.innerHTML = '';
  });
}
function remove() {
  return each(this, function(element) {
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
  each(this, function(element) {
    element.textContent = '' + value;
  });
  return this;
}
function val(value) {
  if (value === undefined) {
    return this[0].value;
  }
  each(this, function(element) {
    element.value = value;
  });
  return this;
}
;

//# sourceMappingURL=<compileOutput>


},{"./dom":7,"./selector":15,"./util":19}],9:[function(require,module,exports){
"use strict";
Object.defineProperties(exports, {
  on: {get: function() {
      return on;
    }},
  off: {get: function() {
      return off;
    }},
  delegate: {get: function() {
      return delegate;
    }},
  undelegate: {get: function() {
      return undelegate;
    }},
  bind: {get: function() {
      return bind;
    }},
  unbind: {get: function() {
      return unbind;
    }},
  __esModule: {value: true}
});
var $__util__,
    $__selector__;
var each = require("./util").each;
var closest = require("./selector").closest;
function on(eventNames, selector, handler, useCapture) {
  if (typeof selector === 'function') {
    handler = selector;
    selector = null;
  }
  var parts,
      namespace,
      eventListener;
  eventNames.split(' ').forEach(function(eventName) {
    parts = eventName.split('.');
    eventName = parts[0] || null;
    namespace = parts[1] || null;
    eventListener = proxyHandler(handler);
    each(this, function(element) {
      if (selector) {
        eventListener = delegateHandler.bind(element, selector, eventListener);
      }
      element.addEventListener(eventName, eventListener, useCapture || false);
      getHandlers(element).push({
        eventName: eventName,
        handler: handler,
        eventListener: eventListener,
        selector: selector,
        namespace: namespace
      });
    });
  }, this);
  return this;
}
function off() {
  var eventNames = arguments[0] !== (void 0) ? arguments[0] : '';
  var selector = arguments[1];
  var handler = arguments[2];
  var useCapture = arguments[3];
  if (typeof selector === 'function') {
    handler = selector;
    selector = null;
  }
  var parts,
      namespace,
      handlers;
  eventNames.split(' ').forEach(function(eventName) {
    parts = eventName.split('.');
    eventName = parts[0] || null;
    namespace = parts[1] || null;
    each(this, function(element) {
      handlers = getHandlers(element);
      each(handlers.filter(function(item) {
        return ((!eventName || item.eventName === eventName) && (!namespace || item.namespace === namespace) && (!handler || item.handler === handler) && (!selector || item.selector === selector));
      }), function(item) {
        element.removeEventListener(item.eventName, item.eventListener, useCapture || false);
        handlers.splice(handlers.indexOf(item), 1);
      });
      if (!eventName && !namespace && !selector && !handler) {
        clearHandlers(element);
      } else if (handlers.length === 0) {
        clearHandlers(element);
      }
    });
  }, this);
  return this;
}
function delegate(selector, eventName, handler) {
  return on.call(this, eventName, selector, handler);
}
function undelegate(selector, eventName, handler) {
  return off.call(this, eventName, selector, handler);
}
var eventKeyProp = '__domtastic_event__';
var id = 1;
var handlers = {};
var unusedKeys = [];
function getHandlers(element) {
  if (!element[eventKeyProp]) {
    element[eventKeyProp] = unusedKeys.length === 0 ? ++id : unusedKeys.pop();
  }
  var key = element[eventKeyProp];
  return handlers[key] || (handlers[key] = []);
}
function clearHandlers(element) {
  var key = element[eventKeyProp];
  if (handlers[key]) {
    handlers[key] = null;
    element[key] = null;
    unusedKeys.push(key);
  }
}
function proxyHandler(handler) {
  return function(event) {
    handler.call(this, augmentEvent(event), event.detail);
  };
}
var augmentEvent = (function() {
  var methodName,
      eventMethods = {
        preventDefault: 'isDefaultPrevented',
        stopImmediatePropagation: 'isImmediatePropagationStopped',
        stopPropagation: 'isPropagationStopped'
      },
      returnTrue = (function() {
        return true;
      }),
      returnFalse = (function() {
        return false;
      });
  return function(event) {
    if (!event.isDefaultPrevented || event.stopImmediatePropagation || event.stopPropagation) {
      for (methodName in eventMethods) {
        (function(methodName, testMethodName, originalMethod) {
          event[methodName] = function() {
            this[testMethodName] = returnTrue;
            return originalMethod && originalMethod.apply(this, arguments);
          };
          event[testMethodName] = returnFalse;
        }(methodName, eventMethods[methodName], event[methodName]));
      }
      if (event._preventDefault) {
        event.preventDefault();
      }
    }
    return event;
  };
})();
function delegateHandler(selector, handler, event) {
  var eventTarget = event._target || event.target,
      currentTarget = closest.call([eventTarget], selector, this)[0];
  if (currentTarget && currentTarget !== this) {
    if (currentTarget === eventTarget || !(event.isPropagationStopped && event.isPropagationStopped())) {
      handler.call(currentTarget, event);
    }
  }
}
var bind = on,
    unbind = off;
;

//# sourceMappingURL=<compileOutput>


},{"./selector":15,"./util":19}],10:[function(require,module,exports){
"use strict";
Object.defineProperties(exports, {
  html: {get: function() {
      return html;
    }},
  __esModule: {value: true}
});
var $__util__;
var each = require("./util").each;
function html(fragment) {
  if (typeof fragment !== 'string') {
    var element = this.nodeType ? this : this[0];
    return element ? element.innerHTML : undefined;
  }
  each(this, function(element) {
    element.innerHTML = fragment;
  });
  return this;
}
;

//# sourceMappingURL=<compileOutput>


},{"./util":19}],11:[function(require,module,exports){
"use strict";
Object.defineProperties(exports, {
  default: {get: function() {
      return $__default;
    }},
  __esModule: {value: true}
});
var $__util__,
    $__array__,
    $__attr__,
    $__class__,
    $__contains__,
    $__css__,
    $__data__,
    $__dom__,
    $__dom_95_extra__,
    $__event__,
    $__html__,
    $__mode__,
    $__noconflict__,
    $__ready__,
    $__selector__,
    $__selector_95_extra__,
    $__trigger__,
    $__type__;
var $__0 = require("./util"),
    extend = $__0.extend,
    extendAll = $__0.extendAll;
var api = {},
    apiNodeList = {},
    $ = {};
var array = require("./array");
var attr = require("./attr");
var class_ = require("./class");
var contains = require("./contains");
var css = require("./css");
var data = require("./data");
var dom = require("./dom");
var dom_extra = require("./dom_extra");
var event = require("./event");
var html = require("./html");
var mode = require("./mode");
var noconflict = require("./noconflict");
var ready = require("./ready");
var selector = require("./selector");
var selector_extra = require("./selector_extra");
var trigger = require("./trigger");
var type = require("./type");
if (typeof selector !== 'undefined') {
  $ = selector.$;
  $.matches = selector.matches;
  api.find = selector.find;
  api.closest = selector.closest;
}
extendAll($, contains, mode, noconflict, type);
extendAll(api, array, attr, class_, css, data, dom, dom_extra, event, html, ready, selector_extra, trigger);
extendAll(apiNodeList, array);
$.version = '0.8.0';
$.extend = extend;
$.fn = api;
$.fnList = apiNodeList;
var $__default = $;

//# sourceMappingURL=<compileOutput>


},{"./array":1,"./attr":2,"./class":3,"./contains":4,"./css":5,"./data":6,"./dom":7,"./dom_extra":8,"./event":9,"./html":10,"./mode":12,"./noconflict":13,"./ready":14,"./selector":15,"./selector_extra":16,"./trigger":17,"./type":18,"./util":19}],12:[function(require,module,exports){
"use strict";
Object.defineProperties(exports, {
  isNative: {get: function() {
      return isNative;
    }},
  native: {get: function() {
      return native;
    }},
  __esModule: {value: true}
});
var $__util__;
var global = require("./util").global;
var isNative = false;
function native() {
  var goNative = arguments[0] !== (void 0) ? arguments[0] : true;
  var wasNative = isNative;
  isNative = goNative;
  if (global.$) {
    global.$.isNative = isNative;
  }
  if (!wasNative && isNative) {
    augmentNativePrototypes(this.fn, this.fnList);
  }
  if (wasNative && !isNative) {
    unaugmentNativePrototypes(this.fn, this.fnList);
  }
  return isNative;
}
var NodeProto = typeof Node !== 'undefined' && Node.prototype,
    NodeListProto = typeof NodeList !== 'undefined' && NodeList.prototype;
function augment(obj, key, value) {
  if (!obj.hasOwnProperty(key)) {
    Object.defineProperty(obj, key, {
      value: value,
      configurable: true,
      enumerable: false
    });
  }
}
var unaugment = (function(obj, key) {
  delete obj[key];
});
function augmentNativePrototypes(methodsNode, methodsNodeList) {
  var key;
  for (key in methodsNode) {
    augment(NodeProto, key, methodsNode[key]);
    augment(NodeListProto, key, methodsNode[key]);
  }
  for (key in methodsNodeList) {
    augment(NodeListProto, key, methodsNodeList[key]);
  }
}
function unaugmentNativePrototypes(methodsNode, methodsNodeList) {
  var key;
  for (key in methodsNode) {
    unaugment(NodeProto, key);
    unaugment(NodeListProto, key);
  }
  for (key in methodsNodeList) {
    unaugment(NodeListProto, key);
  }
}
;

//# sourceMappingURL=<compileOutput>


},{"./util":19}],13:[function(require,module,exports){
"use strict";
Object.defineProperties(exports, {
  noConflict: {get: function() {
      return noConflict;
    }},
  __esModule: {value: true}
});
var $__util__;
var global = require("./util").global;
var previousLib = global.$;
function noConflict() {
  global.$ = previousLib;
  return this;
}
;

//# sourceMappingURL=<compileOutput>


},{"./util":19}],14:[function(require,module,exports){
"use strict";
Object.defineProperties(exports, {
  ready: {get: function() {
      return ready;
    }},
  __esModule: {value: true}
});
function ready(handler) {
  if (/complete|loaded|interactive/.test(document.readyState) && document.body) {
    handler();
  } else {
    document.addEventListener('DOMContentLoaded', handler, false);
  }
  return this;
}
;

//# sourceMappingURL=<compileOutput>


},{}],15:[function(require,module,exports){
"use strict";
Object.defineProperties(exports, {
  $: {get: function() {
      return $;
    }},
  find: {get: function() {
      return find;
    }},
  closest: {get: function() {
      return closest;
    }},
  matches: {get: function() {
      return matches;
    }},
  __esModule: {value: true}
});
var $__util__;
var $__0 = require("./util"),
    global = $__0.global,
    makeIterable = $__0.makeIterable;
var isPrototypeSet = false,
    reFragment = /^\s*<(\w+|!)[^>]*>/,
    reSingleTag = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    reSimpleSelector = /^[\.#]?[\w-]*$/;
function $(selector) {
  var context = arguments[1] !== (void 0) ? arguments[1] : document;
  var collection;
  if (!selector) {
    collection = document.querySelectorAll(null);
  } else if (selector instanceof Wrapper) {
    return selector;
  } else if (typeof selector !== 'string') {
    collection = makeIterable(selector);
  } else if (reFragment.test(selector)) {
    collection = createFragment(selector);
  } else {
    context = typeof context === 'string' ? document.querySelector(context) : context.length ? context[0] : context;
    collection = querySelector(selector, context);
  }
  return $.isNative ? collection : wrap(collection);
}
function find(selector) {
  return $(selector, this);
}
function closest(selector, context) {
  var node = this[0];
  for (; node.nodeType !== node.DOCUMENT_NODE && node !== context; node = node.parentNode) {
    if (matches(node, selector)) {
      return $(node);
    }
  }
  return $();
}
var matches = (function() {
  var context = typeof Element !== 'undefined' ? Element.prototype : global,
      _matches = context.matches || context.matchesSelector || context.mozMatchesSelector || context.msMatchesSelector || context.oMatchesSelector || context.webkitMatchesSelector;
  return function(element, selector) {
    return _matches.call(element, selector);
  };
})();
function querySelector(selector, context) {
  var isSimpleSelector = reSimpleSelector.test(selector);
  if (isSimpleSelector && !$.isNative) {
    if (selector[0] === '#') {
      var element = (context.getElementById ? context : document).getElementById(selector.slice(1));
      return element ? [element] : [];
    }
    if (selector[0] === '.') {
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
      container = document.createElement('div'),
      children = container.childNodes;
  container.innerHTML = html;
  for (var i = 0,
      l = children.length; i < l; i++) {
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
  for (; i < length; ) {
    this[i] = collection[i++];
  }
  this.length = length;
}
;

//# sourceMappingURL=<compileOutput>


},{"./util":19}],16:[function(require,module,exports){
"use strict";
Object.defineProperties(exports, {
  children: {get: function() {
      return children;
    }},
  contents: {get: function() {
      return contents;
    }},
  eq: {get: function() {
      return eq;
    }},
  get: {get: function() {
      return get;
    }},
  parent: {get: function() {
      return parent;
    }},
  slice: {get: function() {
      return slice;
    }},
  __esModule: {value: true}
});
var $__util__,
    $__selector__;
var $__0 = require("./util"),
    each = $__0.each,
    toArray = $__0.toArray;
var $__1 = require("./selector"),
    $ = $__1.$,
    matches = $__1.matches;
function children(selector) {
  var nodes = [];
  each(this, function(element) {
    if (element.children) {
      each(element.children, function(child) {
        if (!selector || (selector && matches(child, selector))) {
          nodes.push(child);
        }
      });
    }
  });
  return $(nodes);
}
function contents() {
  var nodes = [];
  each(this, function(element) {
    nodes.push.apply(nodes, toArray(element.childNodes));
  });
  return $(nodes);
}
function eq(index) {
  return slice.call(this, index, index + 1);
}
function get(index) {
  return this[index];
}
function parent(selector) {
  var nodes = [];
  each(this, function(element) {
    if (!selector || (selector && matches(element.parentNode, selector))) {
      nodes.push(element.parentNode);
    }
  });
  return $(nodes);
}
function slice(start, end) {
  return $([].slice.apply(this, arguments));
}
;

//# sourceMappingURL=<compileOutput>


},{"./selector":15,"./util":19}],17:[function(require,module,exports){
"use strict";
Object.defineProperties(exports, {
  trigger: {get: function() {
      return trigger;
    }},
  triggerHandler: {get: function() {
      return triggerHandler;
    }},
  __esModule: {value: true}
});
var $__util__,
    $__selector__;
var $__0 = require("./util"),
    global = $__0.global,
    each = $__0.each;
var $__1 = require("./selector"),
    $ = $__1.$,
    closest = $__1.closest;
var reMouseEvent = /^(?:mouse|pointer|contextmenu)|click/,
    reKeyEvent = /^key/;
function trigger(type, data) {
  var params = arguments[2] !== (void 0) ? arguments[2] : {};
  params.bubbles = typeof params.bubbles === 'boolean' ? params.bubbles : true;
  params.cancelable = typeof params.cancelable === 'boolean' ? params.cancelable : true;
  params.preventDefault = typeof params.preventDefault === 'boolean' ? params.preventDefault : false;
  params.detail = data;
  var EventConstructor = getEventConstructor(type),
      event = new EventConstructor(type, params);
  event._preventDefault = params.preventDefault;
  each(this, function(element) {
    if (!params.bubbles || isEventBubblingInDetachedTree || isAttachedToDocument(element)) {
      dispatchEvent(element, event);
    } else {
      triggerForPath(element, type, params);
    }
  });
  return this;
}
function getEventConstructor(type) {
  return supportsOtherEventConstructors ? (reMouseEvent.test(type) ? MouseEvent : (reKeyEvent.test(type) ? KeyboardEvent : CustomEvent)) : CustomEvent;
}
function triggerHandler(type, data) {
  if (this[0]) {
    trigger.call(this[0], type, data, {
      bubbles: false,
      preventDefault: true
    });
  }
}
function isAttachedToDocument(element) {
  if (element === window || element === document) {
    return true;
  }
  return $.contains(element.ownerDocument.documentElement, element);
}
function triggerForPath(element, type) {
  var params = arguments[2] !== (void 0) ? arguments[2] : {};
  params.bubbles = false;
  var event = new CustomEvent(type, params);
  event._target = element;
  do {
    dispatchEvent(element, event);
  } while (element = element.parentNode);
}
var directEventMethods = ['blur', 'focus', 'select', 'submit'];
function dispatchEvent(element, event) {
  if (directEventMethods.indexOf(event.type) !== -1 && typeof element[event.type] === 'function' && !event._preventDefault && !event.cancelable) {
    element[event.type]();
  } else {
    element.dispatchEvent(event);
  }
}
(function() {
  function CustomEvent(event) {
    var params = arguments[1] !== (void 0) ? arguments[1] : {
      bubbles: false,
      cancelable: false,
      detail: undefined
    };
    var customEvent = document.createEvent('CustomEvent');
    customEvent.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
    return customEvent;
  }
  CustomEvent.prototype = global.CustomEvent && global.CustomEvent.prototype;
  global.CustomEvent = CustomEvent;
})();
var isEventBubblingInDetachedTree = (function() {
  var isBubbling = false,
      doc = global.document;
  if (doc) {
    var parent = doc.createElement('div'),
        child = parent.cloneNode();
    parent.appendChild(child);
    parent.addEventListener('e', function() {
      isBubbling = true;
    });
    child.dispatchEvent(new CustomEvent('e', {bubbles: true}));
  }
  return isBubbling;
})();
var supportsOtherEventConstructors = (function() {
  try {
    new window.MouseEvent('click');
  } catch (e) {
    return false;
  }
  return true;
})();
;

//# sourceMappingURL=<compileOutput>


},{"./selector":15,"./util":19}],18:[function(require,module,exports){
"use strict";
Object.defineProperties(exports, {
  isFunction: {get: function() {
      return isFunction;
    }},
  isArray: {get: function() {
      return isArray;
    }},
  __esModule: {value: true}
});
function isFunction(obj) {
  return (typeof obj === 'function');
}
var isArray = Array.isArray;
;

//# sourceMappingURL=<compileOutput>


},{}],19:[function(require,module,exports){
"use strict";
Object.defineProperties(exports, {
  global: {get: function() {
      return global;
    }},
  toArray: {get: function() {
      return toArray;
    }},
  makeIterable: {get: function() {
      return makeIterable;
    }},
  each: {get: function() {
      return each;
    }},
  extend: {get: function() {
      return extend;
    }},
  extendAll: {get: function() {
      return extendAll;
    }},
  __esModule: {value: true}
});
var global = new Function("return this")();
function toArray(collection) {
  var length = collection.length,
      result = new Array(length);
  for (var i = 0; i < length; i++) {
    result[i] = collection[i];
  }
  return result;
}
var makeIterable = (function(element) {
  return element.nodeType || element === window ? [element] : element;
});
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
function extend(target) {
  for (var sources = [],
      $__0 = 1; $__0 < arguments.length; $__0++)
    sources[$__0 - 1] = arguments[$__0];
  sources.forEach(function(src) {
    if (src) {
      for (var prop in src) {
        target[prop] = src[prop];
      }
    }
  });
  return target;
}
function extendAll(target) {
  for (var sources = [],
      $__1 = 1; $__1 < arguments.length; $__1++)
    sources[$__1 - 1] = arguments[$__1];
  sources.forEach(function(src) {
    Object.getOwnPropertyNames(src).forEach(function(prop) {
      target[prop] = src[prop];
    });
  });
  return target;
}
;

//# sourceMappingURL=<compileOutput>


},{}]},{},[11])(11)
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvaG9tZS90cmF2aXMvYnVpbGQvd2VicHJvL0RPTXRhc3RpYy9zcmMvYXJyYXkuanMiLCIvaG9tZS90cmF2aXMvYnVpbGQvd2VicHJvL0RPTXRhc3RpYy9zcmMvYXR0ci5qcyIsIi9ob21lL3RyYXZpcy9idWlsZC93ZWJwcm8vRE9NdGFzdGljL3NyYy9jbGFzcy5qcyIsIi9ob21lL3RyYXZpcy9idWlsZC93ZWJwcm8vRE9NdGFzdGljL3NyYy9jb250YWlucy5qcyIsIi9ob21lL3RyYXZpcy9idWlsZC93ZWJwcm8vRE9NdGFzdGljL3NyYy9jc3MuanMiLCIvaG9tZS90cmF2aXMvYnVpbGQvd2VicHJvL0RPTXRhc3RpYy9zcmMvZGF0YS5qcyIsIi9ob21lL3RyYXZpcy9idWlsZC93ZWJwcm8vRE9NdGFzdGljL3NyYy9kb20uanMiLCIvaG9tZS90cmF2aXMvYnVpbGQvd2VicHJvL0RPTXRhc3RpYy9zcmMvZG9tX2V4dHJhLmpzIiwiL2hvbWUvdHJhdmlzL2J1aWxkL3dlYnByby9ET010YXN0aWMvc3JjL2V2ZW50LmpzIiwiL2hvbWUvdHJhdmlzL2J1aWxkL3dlYnByby9ET010YXN0aWMvc3JjL2h0bWwuanMiLCIvaG9tZS90cmF2aXMvYnVpbGQvd2VicHJvL0RPTXRhc3RpYy9zcmMvaW5kZXguZnVsbC5qcyIsIi9ob21lL3RyYXZpcy9idWlsZC93ZWJwcm8vRE9NdGFzdGljL3NyYy9tb2RlLmpzIiwiL2hvbWUvdHJhdmlzL2J1aWxkL3dlYnByby9ET010YXN0aWMvc3JjL25vY29uZmxpY3QuanMiLCIvaG9tZS90cmF2aXMvYnVpbGQvd2VicHJvL0RPTXRhc3RpYy9zcmMvcmVhZHkuanMiLCIvaG9tZS90cmF2aXMvYnVpbGQvd2VicHJvL0RPTXRhc3RpYy9zcmMvc2VsZWN0b3IuanMiLCIvaG9tZS90cmF2aXMvYnVpbGQvd2VicHJvL0RPTXRhc3RpYy9zcmMvc2VsZWN0b3JfZXh0cmEuanMiLCIvaG9tZS90cmF2aXMvYnVpbGQvd2VicHJvL0RPTXRhc3RpYy9zcmMvdHJpZ2dlci5qcyIsIi9ob21lL3RyYXZpcy9idWlsZC93ZWJwcm8vRE9NdGFzdGljL3NyYy90eXBlLmpzIiwiL2hvbWUvdHJhdmlzL2J1aWxkL3dlYnByby9ET010YXN0aWMvc3JjL3V0aWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNJQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFpQixRQUFJO0FBQUcsVUFBTTs7QUFDckIsSUFBQTtBQUFHLFVBQU07QUFFbEIsQUFBSSxFQUFBLENBQUEsVUFBUyxFQUFJLENBQUEsS0FBSSxVQUFVLENBQUM7QUFlaEMsQUFBSSxFQUFBLENBQUEsS0FBSSxFQUFJLENBQUEsVUFBUyxNQUFNLENBQUM7QUFpQjVCLE9BQVMsT0FBSyxDQUFFLFFBQU8sQ0FBRyxDQUFBLE9BQU0sQ0FBRztBQUMvQixBQUFJLElBQUEsQ0FBQSxRQUFPLEVBQUksQ0FBQSxNQUFPLFNBQU8sQ0FBQSxHQUFNLFdBQVMsQ0FBQSxDQUFJLFNBQU8sRUFBSSxVQUFTLE9BQU0sQ0FBRztBQUN6RSxTQUFPLENBQUEsT0FBTSxBQUFDLENBQUMsT0FBTSxDQUFHLFNBQU8sQ0FBQyxDQUFDO0VBQ3JDLENBQUM7QUFDRCxPQUFPLENBQUEsQ0FBQSxBQUFDLENBQUMsVUFBUyxPQUFPLEtBQUssQUFBQyxDQUFDLElBQUcsQ0FBRyxTQUFPLENBQUcsUUFBTSxDQUFDLENBQUMsQ0FBQztBQUM3RDtBQUFBLEFBZUEsT0FBUyxRQUFNLENBQUUsUUFBTyxDQUFHLENBQUEsT0FBTSxDQUFHO0FBQ2hDLE9BQU8sQ0FBQSxLQUFJLEFBQUMsQ0FBQyxJQUFHLENBQUcsU0FBTyxDQUFHLFFBQU0sQ0FBQyxDQUFDO0FBQ3pDO0FBQUEsQUFFSSxFQUFBLENBQUEsSUFBRyxFQUFJLFFBQU0sQ0FBQztBQVlsQixBQUFJLEVBQUEsQ0FBQSxPQUFNLEVB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dCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKipcbiAqIEBtb2R1bGUgQXJyYXlcbiAqL1xuXG5pbXBvcnQgeyBlYWNoIGFzIF9lYWNoLCB0b0FycmF5IH0gZnJvbSAnLi91dGlsJztcbmltcG9ydCB7ICQsIG1hdGNoZXMgfSBmcm9tICcuL3NlbGVjdG9yJztcblxudmFyIEFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG5cbi8qKlxuICogQ2hlY2tzIGlmIHRoZSBnaXZlbiBjYWxsYmFjayByZXR1cm5zIGEgdHJ1ZSgtaXNoKSB2YWx1ZSBmb3IgZWFjaCBlbGVtZW50IGluIHRoZSBjb2xsZWN0aW9uLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIEZ1bmN0aW9uIHRvIGV4ZWN1dGUgZm9yIGVhY2ggZWxlbWVudCwgaW52b2tlZCB3aXRoIGBlbGVtZW50YCBhcyBhcmd1bWVudC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbdGhpc0FyZ10gVmFsdWUgdG8gdXNlIGFzIGB0aGlzYCB3aGVuIGV4ZWN1dGluZyBgY2FsbGJhY2tgLlxuICogQHJldHVybiB7Qm9vbGVhbn0gV2hldGhlciBlYWNoIGVsZW1lbnQgcGFzc2VkIHRoZSBjYWxsYmFjayBjaGVjay5cbiAqIEBleGFtcGxlXG4gKiAgICAgJCgnLml0ZW1zJykuZXZlcnkoZnVuY3Rpb24oZWxlbWVudCkge1xuICogICAgICAgICByZXR1cm4gZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2FjdGl2ZScpXG4gKiAgICAgfSk7XG4gKiAgICAg4p6kIHRydWUvZmFsc2VcbiAqL1xuXG52YXIgZXZlcnkgPSBBcnJheVByb3RvLmV2ZXJ5O1xuXG4vKipcbiAqIEZpbHRlciB0aGUgY29sbGVjdGlvbiBieSBzZWxlY3RvciBvciBmdW5jdGlvbiwgYW5kIHJldHVybiBhIG5ldyBjb2xsZWN0aW9uIHdpdGggdGhlIHJlc3VsdC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ3xGdW5jdGlvbn0gc2VsZWN0b3IgU2VsZWN0b3Igb3IgZnVuY3Rpb24gdG8gZmlsdGVyIHRoZSBjb2xsZWN0aW9uLlxuICogQHBhcmFtIHtPYmplY3R9IFt0aGlzQXJnXSBWYWx1ZSB0byB1c2UgYXMgYHRoaXNgIHdoZW4gZXhlY3V0aW5nIGBjYWxsYmFja2AuXG4gKiBAcmV0dXJuIHtPYmplY3R9IEEgbmV3IHdyYXBwZWQgY29sbGVjdGlvblxuICogQGNoYWluYWJsZVxuICogQGV4YW1wbGVcbiAqICAgICAkKCcuaXRlbXMnKS5maWx0ZXIoJy5hY3RpdmUnKTtcbiAqIEBleGFtcGxlXG4gKiAgICAgJCgnLml0ZW1zJykuZmlsdGVyKGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAqICAgICAgICAgcmV0dXJuIGVsZW1lbnQuaGFzQXR0cmlidXRlKCdhY3RpdmUnKVxuICogICAgIH0pO1xuICovXG5cbmZ1bmN0aW9uIGZpbHRlcihzZWxlY3RvciwgdGhpc0FyZykge1xuICAgIHZhciBjYWxsYmFjayA9IHR5cGVvZiBzZWxlY3RvciA9PT0gJ2Z1bmN0aW9uJyA/IHNlbGVjdG9yIDogZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICByZXR1cm4gbWF0Y2hlcyhlbGVtZW50LCBzZWxlY3Rvcik7XG4gICAgfTtcbiAgICByZXR1cm4gJChBcnJheVByb3RvLmZpbHRlci5jYWxsKHRoaXMsIGNhbGxiYWNrLCB0aGlzQXJnKSk7XG59XG5cbi8qKlxuICogRXhlY3V0ZSBhIGZ1bmN0aW9uIGZvciBlYWNoIGVsZW1lbnQgaW4gdGhlIGNvbGxlY3Rpb24uXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgRnVuY3Rpb24gdG8gZXhlY3V0ZSBmb3IgZWFjaCBlbGVtZW50LCBpbnZva2VkIHdpdGggYGVsZW1lbnRgIGFzIGFyZ3VtZW50LlxuICogQHBhcmFtIHtPYmplY3R9IFt0aGlzQXJnXSBWYWx1ZSB0byB1c2UgYXMgYHRoaXNgIHdoZW4gZXhlY3V0aW5nIGBjYWxsYmFja2AuXG4gKiBAcmV0dXJuIHtPYmplY3R9IFRoZSB3cmFwcGVkIGNvbGxlY3Rpb25cbiAqIEBjaGFpbmFibGVcbiAqIEBleGFtcGxlXG4gKiAgICAgJCgnLml0ZW1zJykuZm9yRWFjaChmdW5jdGlvbihlbGVtZW50KSB7XG4gKiAgICAgICAgIGVsZW1lbnQuc3R5bGUuY29sb3IgPSAnZXZlcmdyZWVuJztcbiAqICAgICApO1xuICovXG5cbmZ1bmN0aW9uIGZvckVhY2goY2FsbGJhY2ssIHRoaXNBcmcpIHtcbiAgICByZXR1cm4gX2VhY2godGhpcywgY2FsbGJhY2ssIHRoaXNBcmcpO1xufVxuXG52YXIgZWFjaCA9IGZvckVhY2g7XG5cbi8qKlxuICogUmV0dXJucyB0aGUgaW5kZXggb2YgYW4gZWxlbWVudCBpbiB0aGUgY29sbGVjdGlvbi5cbiAqXG4gKiBAcGFyYW0ge05vZGV9IGVsZW1lbnRcbiAqIEByZXR1cm4ge051bWJlcn0gVGhlIHplcm8tYmFzZWQgaW5kZXgsIC0xIGlmIG5vdCBmb3VuZC5cbiAqIEBleGFtcGxlXG4gKiAgICAgJCgnLml0ZW1zJykuaW5kZXhPZihlbGVtZW50KTtcbiAqICAgICDinqQgMlxuICovXG5cbnZhciBpbmRleE9mID0gQXJyYXlQcm90by5pbmRleE9mO1xuXG4vKipcbiAqIENyZWF0ZSBhIG5ldyBjb2xsZWN0aW9uIGJ5IGV4ZWN1dGluZyB0aGUgY2FsbGJhY2sgZm9yIGVhY2ggZWxlbWVudCBpbiB0aGUgY29sbGVjdGlvbi5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBGdW5jdGlvbiB0byBleGVjdXRlIGZvciBlYWNoIGVsZW1lbnQsIGludm9rZWQgd2l0aCBgZWxlbWVudGAgYXMgYXJndW1lbnQuXG4gKiBAcGFyYW0ge09iamVjdH0gW3RoaXNBcmddIFZhbHVlIHRvIHVzZSBhcyBgdGhpc2Agd2hlbiBleGVjdXRpbmcgYGNhbGxiYWNrYC5cbiAqIEByZXR1cm4ge0FycmF5fSBDb2xsZWN0aW9uIHdpdGggdGhlIHJldHVybiB2YWx1ZSBvZiB0aGUgZXhlY3V0ZWQgY2FsbGJhY2sgZm9yIGVhY2ggZWxlbWVudC5cbiAqIEBleGFtcGxlXG4gKiAgICAgJCgnLml0ZW1zJykubWFwKGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAqICAgICAgICAgcmV0dXJuIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCduYW1lJylcbiAqICAgICB9KTtcbiAqICAgICDinqQgWydldmVyJywgJ2dyZWVuJ11cbiAqL1xuXG52YXIgbWFwID0gQXJyYXlQcm90by5tYXA7XG5cbi8qKlxuICogUmVtb3ZlcyB0aGUgbGFzdCBlbGVtZW50IGZyb20gdGhlIGNvbGxlY3Rpb24sIGFuZCByZXR1cm5zIHRoYXQgZWxlbWVudC5cbiAqXG4gKiBAcmV0dXJuIHtPYmplY3R9IFRoZSBsYXN0IGVsZW1lbnQgZnJvbSB0aGUgY29sbGVjdGlvbi5cbiAqIEBleGFtcGxlXG4gKiAgICAgdmFyIGxhc3RFbGVtZW50ID0gJCgnLml0ZW1zJykucG9wKCk7XG4gKi9cblxudmFyIHBvcCA9IEFycmF5UHJvdG8ucG9wO1xuXG4vKipcbiAqIEFkZHMgb25lIG9yIG1vcmUgZWxlbWVudHMgdG8gdGhlIGVuZCBvZiB0aGUgY29sbGVjdGlvbiwgYW5kIHJldHVybnMgdGhlIG5ldyBsZW5ndGggb2YgdGhlIGNvbGxlY3Rpb24uXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGVsZW1lbnQgRWxlbWVudChzKSB0byBhZGQgdG8gdGhlIGNvbGxlY3Rpb25cbiAqIEByZXR1cm4ge051bWJlcn0gVGhlIG5ldyBsZW5ndGggb2YgdGhlIGNvbGxlY3Rpb25cbiAqIEBleGFtcGxlXG4gKiAgICAgJCgnLml0ZW1zJykucHVzaChlbGVtZW50KTtcbiAqL1xuXG52YXIgcHVzaCA9IEFycmF5UHJvdG8ucHVzaDtcblxuLyoqXG4gKiBSZXZlcnNlcyBhbiBhcnJheSBpbiBwbGFjZS4gVGhlIGZpcnN0IGFycmF5IGVsZW1lbnQgYmVjb21lcyB0aGUgbGFzdCBhbmQgdGhlIGxhc3QgYmVjb21lcyB0aGUgZmlyc3QuXG4gKlxuICogQHJldHVybiB7T2JqZWN0fSBUaGUgd3JhcHBlZCBjb2xsZWN0aW9uLCByZXZlcnNlZFxuICogQGNoYWluYWJsZVxuICogQGV4YW1wbGVcbiAqICAgICAkKCcuaXRlbXMnKS5yZXZlcnNlKCk7XG4gKi9cblxuZnVuY3Rpb24gcmV2ZXJzZSgpIHtcbiAgICByZXR1cm4gJCh0b0FycmF5KHRoaXMpLnJldmVyc2UoKSk7XG59XG5cbi8qKlxuICogUmVtb3ZlcyB0aGUgZmlyc3QgZWxlbWVudCBmcm9tIHRoZSBjb2xsZWN0aW9uLCBhbmQgcmV0dXJucyB0aGF0IGVsZW1lbnQuXG4gKlxuICogQHJldHVybiB7T2JqZWN0fSBUaGUgZmlyc3QgZWxlbWVudCBmcm9tIHRoZSBjb2xsZWN0aW9uLlxuICogQGV4YW1wbGVcbiAqICAgICB2YXIgZmlyc3RFbGVtZW50ID0gJCgnLml0ZW1zJykuc2hpZnQoKTtcbiAqL1xuXG52YXIgc2hpZnQgPSBBcnJheVByb3RvLnNoaWZ0O1xuXG4vKipcbiAqIENoZWNrcyBpZiB0aGUgZ2l2ZW4gY2FsbGJhY2sgcmV0dXJucyBhIHRydWUoLWlzaCkgdmFsdWUgZm9yIGFueSBvZiB0aGUgZWxlbWVudHMgaW4gdGhlIGNvbGxlY3Rpb24uXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgRnVuY3Rpb24gdG8gZXhlY3V0ZSBmb3IgZWFjaCBlbGVtZW50LCBpbnZva2VkIHdpdGggYGVsZW1lbnRgIGFzIGFyZ3VtZW50LlxuICogQHJldHVybiB7Qm9vbGVhbn0gV2hldGhlciBhbnkgZWxlbWVudCBwYXNzZWQgdGhlIGNhbGxiYWNrIGNoZWNrLlxuICogQGV4YW1wbGVcbiAqICAgICAkKCcuaXRlbXMnKS5zb21lKGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAqICAgICAgICAgcmV0dXJuIGVsZW1lbnQuaGFzQXR0cmlidXRlKCdhY3RpdmUnKVxuICogICAgIH0pO1xuICogICAgIOKepCB0cnVlL2ZhbHNlXG4gKi9cblxudmFyIHNvbWUgPSBBcnJheVByb3RvLnNvbWU7XG5cbi8qKlxuICogQWRkcyBvbmUgb3IgbW9yZSBlbGVtZW50cyB0byB0aGUgYmVnaW5uaW5nIG9mIHRoZSBjb2xsZWN0aW9uLCBhbmQgcmV0dXJucyB0aGUgbmV3IGxlbmd0aCBvZiB0aGUgY29sbGVjdGlvbi5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gZWxlbWVudCBFbGVtZW50KHMpIHRvIGFkZCB0byB0aGUgY29sbGVjdGlvblxuICogQHJldHVybiB7TnVtYmVyfSBUaGUgbmV3IGxlbmd0aCBvZiB0aGUgY29sbGVjdGlvblxuICogQGV4YW1wbGVcbiAqICAgICAkKCcuaXRlbXMnKS51bnNoaWZ0KGVsZW1lbnQpO1xuICovXG5cbnZhciB1bnNoaWZ0ID0gQXJyYXlQcm90by51bnNoaWZ0O1xuXG4vKlxuICogRXhwb3J0IGludGVyZmFjZVxuICovXG5cbmV4cG9ydCB7IGVhY2gsIGV2ZXJ5LCBmaWx0ZXIsIGZvckVhY2gsIGluZGV4T2YsIG1hcCwgcG9wLCBwdXNoLCByZXZlcnNlLCBzaGlmdCwgc29tZSwgdW5zaGlmdCB9O1xuIiwiLyoqXG4gKiBAbW9kdWxlIEF0dHJcbiAqL1xuXG5pbXBvcnQgeyBlYWNoIH0gZnJvbSAnLi91dGlsJztcblxuLyoqXG4gKiBHZXQgdGhlIHZhbHVlIG9mIGFuIGF0dHJpYnV0ZSBmb3IgdGhlIGZpcnN0IGVsZW1lbnQsIG9yIHNldCBvbmUgb3IgbW9yZSBhdHRyaWJ1dGVzIGZvciBlYWNoIGVsZW1lbnQgaW4gdGhlIGNvbGxlY3Rpb24uXG4gKlxuICogQHBhcmFtIHtTdHJpbmd8T2JqZWN0fSBrZXkgVGhlIG5hbWUgb2YgdGhlIGF0dHJpYnV0ZSB0byBnZXQgb3Igc2V0LiBPciBhbiBvYmplY3QgY29udGFpbmluZyBrZXktdmFsdWUgcGFpcnMgdG8gc2V0IGFzIGF0dHJpYnV0ZXMuXG4gKiBAcGFyYW0ge1N0cmluZ30gW3ZhbHVlXSBUaGUgdmFsdWUgb2YgdGhlIGF0dHJpYnV0ZSB0byBzZXQuXG4gKiBAcmV0dXJuIHtPYmplY3R9IFRoZSB3cmFwcGVkIGNvbGxlY3Rpb25cbiAqIEBjaGFpbmFibGVcbiAqIEBleGFtcGxlXG4gKiAgICAgJCgnLml0ZW0nKS5hdHRyKCdhdHRyTmFtZScpOyAvLyBnZXRcbiAqICAgICAkKCcuaXRlbScpLmF0dHIoJ2F0dHJOYW1lJywgJ2F0dHJWYWx1ZScpOyAvLyBzZXRcbiAqICAgICAkKCcuaXRlbScpLmF0dHIoeydhdHRyMScsICd2YWx1ZTEnfSwgeydhdHRyMicsICd2YWx1ZTJ9KTsgLy8gc2V0IG11bHRpcGxlXG4gKi9cblxuZnVuY3Rpb24gYXR0cihrZXksIHZhbHVlKSB7XG5cbiAgICBpZiAodHlwZW9mIGtleSA9PT0gJ3N0cmluZycgJiYgdHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB2YXIgZWxlbWVudCA9IHRoaXMubm9kZVR5cGUgPyB0aGlzIDogdGhpc1swXTtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQgPyBlbGVtZW50LmdldEF0dHJpYnV0ZShrZXkpIDogdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGVhY2godGhpcywgZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICBpZiAodHlwZW9mIGtleSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGF0dHIgaW4ga2V5KSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0ciwga2V5W2F0dHJdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGtleSwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcztcbn1cblxuLyoqXG4gKiBSZW1vdmUgYXR0cmlidXRlIGZyb20gZWFjaCBlbGVtZW50IGluIHRoZSBjb2xsZWN0aW9uLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgQXR0cmlidXRlIG5hbWVcbiAqIEByZXR1cm4ge09iamVjdH0gVGhlIHdyYXBwZWQgY29sbGVjdGlvblxuICogQGNoYWluYWJsZVxuICogQGV4YW1wbGVcbiAqICAgICAkKCcuaXRlbXMnKS5yZW1vdmVBdHRyKCdhdHRyTmFtZScpO1xuICovXG5cbmZ1bmN0aW9uIHJlbW92ZUF0dHIoa2V5KSB7XG4gICAgZWFjaCh0aGlzLCBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKGtleSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXM7XG59XG5cbi8qXG4gKiBFeHBvcnQgaW50ZXJmYWNlXG4gKi9cblxuZXhwb3J0IHsgYXR0ciwgcmVtb3ZlQXR0ciB9O1xuIiwiLyoqXG4gKiBAbW9kdWxlIENsYXNzXG4gKi9cblxuaW1wb3J0IHsgbWFrZUl0ZXJhYmxlLCBlYWNoIH0gZnJvbSAnLi91dGlsJztcblxuLyoqXG4gKiBBZGQgYSBjbGFzcyB0byB0aGUgZWxlbWVudChzKVxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZSBTcGFjZS1zZXBhcmF0ZWQgY2xhc3MgbmFtZShzKSB0byBhZGQgdG8gdGhlIGVsZW1lbnQocykuXG4gKiBAcmV0dXJuIHtPYmplY3R9IFRoZSB3cmFwcGVkIGNvbGxlY3Rpb25cbiAqIEBjaGFpbmFibGVcbiAqIEBleGFtcGxlXG4gKiAgICAgJCgnLml0ZW0nKS5hZGRDbGFzcygnYmFyJyk7XG4gKiAgICAgJCgnLml0ZW0nKS5hZGRDbGFzcygnYmFyIGZvbycpO1xuICovXG5cbmZ1bmN0aW9uIGFkZENsYXNzKHZhbHVlKSB7XG4gICAgaWYodmFsdWUgJiYgdmFsdWUubGVuZ3RoKSB7XG4gICAgICAgIGVhY2godmFsdWUuc3BsaXQoJyAnKSwgZnVuY3Rpb24oY2xhc3NOYW1lKSB7XG4gICAgICAgICAgICBlYWNoKHRoaXMsIGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LmJpbmQodGhpcykpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbn1cblxuLyoqXG4gKiBSZW1vdmUgYSBjbGFzcyBmcm9tIHRoZSBlbGVtZW50KHMpXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlIFNwYWNlLXNlcGFyYXRlZCBjbGFzcyBuYW1lKHMpIHRvIHJlbW92ZSBmcm9tIHRoZSBlbGVtZW50KHMpLlxuICogQHJldHVybiB7T2JqZWN0fSBUaGUgd3JhcHBlZCBjb2xsZWN0aW9uXG4gKiBAY2hhaW5hYmxlXG4gKiBAZXhhbXBsZVxuICogICAgICQoJy5pdGVtcycpLnJlbW92ZUNsYXNzKCdiYXInKTtcbiAqICAgICAkKCcuaXRlbXMnKS5yZW1vdmVDbGFzcygnYmFyIGZvbycpO1xuICovXG5cbmZ1bmN0aW9uIHJlbW92ZUNsYXNzKHZhbHVlKSB7XG4gICAgaWYodmFsdWUgJiYgdmFsdWUubGVuZ3RoKSB7XG4gICAgICAgIGVhY2godmFsdWUuc3BsaXQoJyAnKSwgZnVuY3Rpb24oY2xhc3NOYW1lKSB7XG4gICAgICAgICAgICBlYWNoKHRoaXMsIGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LmJpbmQodGhpcykpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbn1cblxuLyoqXG4gKiBUb2dnbGUgYSBjbGFzcyBhdCB0aGUgZWxlbWVudChzKVxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZSBTcGFjZS1zZXBhcmF0ZWQgY2xhc3MgbmFtZShzKSB0byB0b2dnbGUgYXQgdGhlIGVsZW1lbnQocykuXG4gKiBAcmV0dXJuIHtPYmplY3R9IFRoZSB3cmFwcGVkIGNvbGxlY3Rpb25cbiAqIEBjaGFpbmFibGVcbiAqIEBleGFtcGxlXG4gKiAgICAgJCgnLml0ZW0nKS50b2dnbGVDbGFzcygnYmFyJyk7XG4gKiAgICAgJCgnLml0ZW0nKS50b2dnbGVDbGFzcygnYmFyIGZvbycpO1xuICovXG5cbmZ1bmN0aW9uIHRvZ2dsZUNsYXNzKHZhbHVlKSB7XG4gICAgaWYodmFsdWUgJiYgdmFsdWUubGVuZ3RoKSB7XG4gICAgICAgIGVhY2godmFsdWUuc3BsaXQoJyAnKSwgZnVuY3Rpb24oY2xhc3NOYW1lKSB7XG4gICAgICAgICAgICBlYWNoKHRoaXMsIGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoY2xhc3NOYW1lKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LmJpbmQodGhpcykpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbn1cblxuLyoqXG4gKiBDaGVjayBpZiB0aGUgZWxlbWVudChzKSBoYXZlIGEgY2xhc3MuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlIENoZWNrIGlmIHRoZSBET00gZWxlbWVudCBjb250YWlucyB0aGUgY2xhc3MgbmFtZS4gV2hlbiBhcHBsaWVkIHRvIG11bHRpcGxlIGVsZW1lbnRzLFxuICogcmV0dXJucyBgdHJ1ZWAgaWYgX2FueV8gb2YgdGhlbSBjb250YWlucyB0aGUgY2xhc3MgbmFtZS5cbiAqIEByZXR1cm4ge0Jvb2xlYW59IFdoZXRoZXIgdGhlIGVsZW1lbnQncyBjbGFzcyBhdHRyaWJ1dGUgY29udGFpbnMgdGhlIGNsYXNzIG5hbWUuXG4gKiBAZXhhbXBsZVxuICogICAgICQoJy5pdGVtJykuaGFzQ2xhc3MoJ2JhcicpO1xuICovXG5cbmZ1bmN0aW9uIGhhc0NsYXNzKHZhbHVlKSB7XG4gICAgcmV0dXJuIG1ha2VJdGVyYWJsZSh0aGlzKS5zb21lKGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKHZhbHVlKTtcbiAgICB9KTtcbn1cblxuLypcbiAqIEV4cG9ydCBpbnRlcmZhY2VcbiAqL1xuXG5leHBvcnQgeyBhZGRDbGFzcywgcmVtb3ZlQ2xhc3MsIHRvZ2dsZUNsYXNzLCBoYXNDbGFzcyB9O1xuIiwiLyoqXG4gKiBAbW9kdWxlIGNvbnRhaW5zXG4gKi9cblxuLyoqXG4gKiBUZXN0IHdoZXRoZXIgYW4gZWxlbWVudCBjb250YWlucyBhbm90aGVyIGVsZW1lbnQgaW4gdGhlIERPTS5cbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGNvbnRhaW5lciBUaGUgZWxlbWVudCB0aGF0IG1heSBjb250YWluIHRoZSBvdGhlciBlbGVtZW50LlxuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50IFRoZSBlbGVtZW50IHRoYXQgbWF5IGJlIGEgZGVzY2VuZGFudCBvZiB0aGUgb3RoZXIgZWxlbWVudC5cbiAqIEByZXR1cm4ge0Jvb2xlYW59IFdoZXRoZXIgdGhlIGBjb250YWluZXJgIGVsZW1lbnQgY29udGFpbnMgdGhlIGBlbGVtZW50YC5cbiAqIEBleGFtcGxlXG4gKiAgICAgJC5jb250YWlucyhwYXJlbnRFbGVtZW50LCBjaGlsZEVsZW1lbnQpO1xuICogICAgIOKepCB0cnVlL2ZhbHNlXG4gKi9cblxuZnVuY3Rpb24gY29udGFpbnMoY29udGFpbmVyLCBlbGVtZW50KSB7XG4gICAgaWYoIWNvbnRhaW5lciB8fCAhZWxlbWVudCB8fCBjb250YWluZXIgPT09IGVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSBpZiAoY29udGFpbmVyLmNvbnRhaW5zKSB7XG4gICAgICAgIHJldHVybiBjb250YWluZXIuY29udGFpbnMoZWxlbWVudCk7XG4gICAgfSBlbHNlIGlmIChjb250YWluZXIuY29tcGFyZURvY3VtZW50UG9zaXRpb24pIHtcbiAgICAgICAgcmV0dXJuICEoY29udGFpbmVyLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGVsZW1lbnQpICYgTm9kZS5ET0NVTUVOVF9QT1NJVElPTl9ESVNDT05ORUNURUQpO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cblxuLypcbiAqIEV4cG9ydCBpbnRlcmZhY2VcbiAqL1xuXG5leHBvcnQgeyBjb250YWlucyB9O1xuIiwiLyoqXG4gKiBAbW9kdWxlIEF0dHJcbiAqL1xuXG5pbXBvcnQgeyBlYWNoIH0gZnJvbSAnLi91dGlsJztcblxuZnVuY3Rpb24gaXNOdW1lcmljKHZhbHVlKSB7XG4gICAgcmV0dXJuICFpc05hTihwYXJzZUZsb2F0KHZhbHVlKSkgJiYgaXNGaW5pdGUodmFsdWUpO1xufVxuXG5mdW5jdGlvbiBjYW1lbGl6ZSh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZS5yZXBsYWNlKC8tKFtcXGRhLXpdKS9naSwgZnVuY3Rpb24gKG1hdGNoZXMsIGxldHRlcikgeyByZXR1cm4gbGV0dGVyLnRvVXBwZXJDYXNlKCk7IH0pO1xufVxuXG5mdW5jdGlvbiBkYXNoZXJpemUodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUucmVwbGFjZSgvKFthLXpcXGRdKShbQS1aXSkvZywgJyQxLSQyJykudG9Mb3dlckNhc2UoKTtcbn1cblxuLyoqXG4gKiBHZXQgdGhlIHZhbHVlIG9mIGEgc3R5bGUgcHJvcGVydHkgZm9yIHRoZSBmaXJzdCBlbGVtZW50LCBvciBzZXQgb25lIG9yIG1vcmUgc3R5bGUgcHJvcGVydGllcyBmb3IgZWFjaCBlbGVtZW50IGluIHRoZSBjb2xsZWN0aW9uLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfE9iamVjdH0ga2V5IFRoZSBuYW1lIG9mIHRoZSBzdHlsZSBwcm9wZXJ0eSB0byBnZXQgb3Igc2V0LiBPciBhbiBvYmplY3QgY29udGFpbmluZyBrZXktdmFsdWUgcGFpcnMgdG8gc2V0IGFzIHN0eWxlIHByb3BlcnRpZXMuXG4gKiBAcGFyYW0ge1N0cmluZ30gW3ZhbHVlXSBUaGUgdmFsdWUgb2YgdGhlIHN0eWxlIHByb3BlcnR5IHRvIHNldC5cbiAqIEByZXR1cm4ge09iamVjdH0gVGhlIHdyYXBwZWQgY29sbGVjdGlvblxuICogQGNoYWluYWJsZVxuICogQGV4YW1wbGVcbiAqICAgICAkKCcuaXRlbScpLmNzcygncGFkZGluZy1sZWZ0Jyk7IC8vIGdldFxuICogICAgICQoJy5pdGVtJykuY3NzKCdjb2xvcicsICcjZjAwJyk7IC8vIHNldFxuICogICAgICQoJy5pdGVtJykuY3NzKHsnYm9yZGVyLXdpZHRoJywgJzFweCd9LCB7J2Rpc3BsYXknLCAnaW5saW5lLWJsb2NrfSk7IC8vIHNldCBtdWx0aXBsZVxuICovXG5cbmZ1bmN0aW9uIGNzcyhrZXksIHZhbHVlKSB7XG5cbiAgICB2YXIgc3R5bGVQcm9wcywgcHJvcCwgdmFsO1xuXG4gICAgaWYodHlwZW9mIGtleSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAga2V5ID0gY2FtZWxpemUoa2V5KTtcblxuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSB0aGlzLm5vZGVUeXBlID8gdGhpcyA6IHRoaXNbMF07XG4gICAgICAgICAgICBpZihlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgdmFsID0gZWxlbWVudC5zdHlsZVtrZXldO1xuICAgICAgICAgICAgICAgIHJldHVybiBpc051bWVyaWModmFsKSA/IHBhcnNlRmxvYXQodmFsKSA6IHZhbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICBzdHlsZVByb3BzID0ge307XG4gICAgICAgIHN0eWxlUHJvcHNba2V5XSA9IHZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHN0eWxlUHJvcHMgPSBrZXk7XG4gICAgICAgIGZvciAocHJvcCBpbiBzdHlsZVByb3BzKSB7XG4gICAgICAgICAgICB2YWwgPSBzdHlsZVByb3BzW3Byb3BdO1xuICAgICAgICAgICAgZGVsZXRlIHN0eWxlUHJvcHNbcHJvcF07XG4gICAgICAgICAgICBzdHlsZVByb3BzW2NhbWVsaXplKHByb3ApXSA9IHZhbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGVhY2godGhpcywgZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICBmb3IgKHByb3AgaW4gc3R5bGVQcm9wcykge1xuICAgICAgICAgICAgaWYoc3R5bGVQcm9wc1twcm9wXSB8fCBzdHlsZVByb3BzW3Byb3BdID09PSAwKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZVtwcm9wXSA9IHN0eWxlUHJvcHNbcHJvcF07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoZGFzaGVyaXplKHByb3ApKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXM7XG59XG5cbi8qXG4gKiBFeHBvcnQgaW50ZXJmYWNlXG4gKi9cblxuZXhwb3J0IHsgY3NzIH07XG4iLCIvKipcbiAqIEBtb2R1bGUgRGF0YVxuICovXG5cbmltcG9ydCB7IGVhY2ggfSBmcm9tICcuL3V0aWwnO1xuXG52YXIgZGF0YUtleVByb3AgPSAnX19kb210YXN0aWNfZGF0YV9fJztcblxuLyoqXG4gKiBHZXQgZGF0YSBmcm9tIGZpcnN0IGVsZW1lbnQsIG9yIHNldCBkYXRhIGZvciBlYWNoIGVsZW1lbnQgaW4gdGhlIGNvbGxlY3Rpb24uXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGtleSBUaGUga2V5IGZvciB0aGUgZGF0YSB0byBnZXQgb3Igc2V0LlxuICogQHBhcmFtIHtTdHJpbmd9IFt2YWx1ZV0gVGhlIGRhdGEgdG8gc2V0LlxuICogQHJldHVybiB7T2JqZWN0fSBUaGUgd3JhcHBlZCBjb2xsZWN0aW9uXG4gKiBAY2hhaW5hYmxlXG4gKiBAZXhhbXBsZVxuICogICAgICQoJy5pdGVtJykuZGF0YSgnYXR0ck5hbWUnKTsgLy8gZ2V0XG4gKiAgICAgJCgnLml0ZW0nKS5kYXRhKCdhdHRyTmFtZScsIHthbnk6ICdkYXRhJ30pOyAvLyBzZXRcbiAqL1xuXG5mdW5jdGlvbiBkYXRhKGtleSwgdmFsdWUpIHtcblxuICAgIGlmICh0eXBlb2Yga2V5ID09PSAnc3RyaW5nJyAmJiB0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHZhciBlbGVtZW50ID0gdGhpcy5ub2RlVHlwZSA/IHRoaXMgOiB0aGlzWzBdO1xuICAgICAgICByZXR1cm4gZWxlbWVudCAmJiBlbGVtZW50W2RhdGFLZXlQcm9wXSA/IGVsZW1lbnRbZGF0YUtleVByb3BdW2tleV0gOiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgZWFjaCh0aGlzLCBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnRbZGF0YUtleVByb3BdID0gZWxlbWVudFtkYXRhS2V5UHJvcF0gfHwge307XG4gICAgICAgIGVsZW1lbnRbZGF0YUtleVByb3BdW2tleV0gPSB2YWx1ZTtcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzO1xuXG59XG5cbi8qKlxuICogR2V0IHByb3BlcnR5IGZyb20gZmlyc3QgZWxlbWVudCwgb3Igc2V0IHByb3BlcnR5IG9uIGVhY2ggZWxlbWVudCBpbiB0aGUgY29sbGVjdGlvbi5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5IFRoZSBuYW1lIG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQgb3Igc2V0LlxuICogQHBhcmFtIHtTdHJpbmd9IFt2YWx1ZV0gVGhlIHZhbHVlIG9mIHRoZSBwcm9wZXJ0eSB0byBzZXQuXG4gKiBAcmV0dXJuIHtPYmplY3R9IFRoZSB3cmFwcGVkIGNvbGxlY3Rpb25cbiAqIEBjaGFpbmFibGVcbiAqIEBleGFtcGxlXG4gKiAgICAgJCgnLml0ZW0nKS5wcm9wKCdhdHRyTmFtZScpOyAvLyBnZXRcbiAqICAgICAkKCcuaXRlbScpLnByb3AoJ2F0dHJOYW1lJywgJ2F0dHJWYWx1ZScpOyAvLyBzZXRcbiAqL1xuXG5mdW5jdGlvbiBwcm9wKGtleSwgdmFsdWUpIHtcblxuICAgIGlmICh0eXBlb2Yga2V5ID09PSAnc3RyaW5nJyAmJiB0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHZhciBlbGVtZW50ID0gdGhpcy5ub2RlVHlwZSA/IHRoaXMgOiB0aGlzWzBdO1xuICAgICAgICByZXR1cm4gZWxlbWVudCAmJiBlbGVtZW50ID8gZWxlbWVudFtrZXldIDogdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGVhY2godGhpcywgZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICBlbGVtZW50W2tleV0gPSB2YWx1ZTtcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzO1xuXG59XG5cblxuLypcbiAqIEV4cG9ydCBpbnRlcmZhY2VcbiAqL1xuXG5leHBvcnQgeyBkYXRhLCBwcm9wIH0iLCIvKipcbiAqIEBtb2R1bGUgRE9NXG4gKi9cblxuaW1wb3J0IHsgdG9BcnJheSB9IGZyb20gJy4vdXRpbCc7XG5pbXBvcnQgeyAkIH0gZnJvbSAnLi9zZWxlY3Rvcic7XG5cbi8qKlxuICogQXBwZW5kIGVsZW1lbnQocykgdG8gZWFjaCBlbGVtZW50IGluIHRoZSBjb2xsZWN0aW9uLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfE5vZGV8Tm9kZUxpc3R8T2JqZWN0fSBlbGVtZW50IFdoYXQgdG8gYXBwZW5kIHRvIHRoZSBlbGVtZW50KHMpLlxuICogQ2xvbmVzIGVsZW1lbnRzIGFzIG5lY2Vzc2FyeS5cbiAqIEByZXR1cm4ge09iamVjdH0gVGhlIHdyYXBwZWQgY29sbGVjdGlvblxuICogQGNoYWluYWJsZVxuICogQGV4YW1wbGVcbiAqICAgICAkKCcuaXRlbScpLmFwcGVuZCgnPHA+bW9yZTwvcD4nKTtcbiAqL1xuXG5mdW5jdGlvbiBhcHBlbmQoZWxlbWVudCkge1xuICAgIGlmICh0aGlzIGluc3RhbmNlb2YgTm9kZSkge1xuICAgICAgICBpZiAodHlwZW9mIGVsZW1lbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICB0aGlzLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgZWxlbWVudCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIE5vZGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgZWxlbWVudHMgPSBlbGVtZW50IGluc3RhbmNlb2YgTm9kZUxpc3QgPyB0b0FycmF5KGVsZW1lbnQpIDogZWxlbWVudDtcbiAgICAgICAgICAgICAgICBlbGVtZW50cy5mb3JFYWNoKHRoaXMuYXBwZW5kQ2hpbGQuYmluZCh0aGlzKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgbCA9IHRoaXMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAobC0tKSB7XG4gICAgICAgICAgICB2YXIgZWxtID0gbCA9PT0gMCA/IGVsZW1lbnQgOiBfY2xvbmUoZWxlbWVudCk7XG4gICAgICAgICAgICBhcHBlbmQuY2FsbCh0aGlzW2xdLCBlbG0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xufVxuXG4vKipcbiAqIFBsYWNlIGVsZW1lbnQocykgYXQgdGhlIGJlZ2lubmluZyBvZiBlYWNoIGVsZW1lbnQgaW4gdGhlIGNvbGxlY3Rpb24uXG4gKlxuICogQHBhcmFtIHtTdHJpbmd8Tm9kZXxOb2RlTGlzdHxPYmplY3R9IGVsZW1lbnQgV2hhdCB0byBwbGFjZSBhdCB0aGUgYmVnaW5uaW5nIG9mIHRoZSBlbGVtZW50KHMpLlxuICogQ2xvbmVzIGVsZW1lbnRzIGFzIG5lY2Vzc2FyeS5cbiAqIEByZXR1cm4ge09iamVjdH0gVGhlIHdyYXBwZWQgY29sbGVjdGlvblxuICogQGNoYWluYWJsZVxuICogQGV4YW1wbGVcbiAqICAgICAkKCcuaXRlbScpLnByZXBlbmQoJzxzcGFuPnN0YXJ0PC9zcGFuPicpO1xuICovXG5cbmZ1bmN0aW9uIHByZXBlbmQoZWxlbWVudCkge1xuICAgIGlmICh0aGlzIGluc3RhbmNlb2YgTm9kZSkge1xuICAgICAgICBpZiAodHlwZW9mIGVsZW1lbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICB0aGlzLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsIGVsZW1lbnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBOb2RlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbnNlcnRCZWZvcmUoZWxlbWVudCwgdGhpcy5maXJzdENoaWxkKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIGVsZW1lbnRzID0gZWxlbWVudCBpbnN0YW5jZW9mIE5vZGVMaXN0ID8gdG9BcnJheShlbGVtZW50KSA6IGVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgZWxlbWVudHMucmV2ZXJzZSgpLmZvckVhY2gocHJlcGVuZC5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBsID0gdGhpcy5sZW5ndGg7XG4gICAgICAgIHdoaWxlIChsLS0pIHtcbiAgICAgICAgICAgIHZhciBlbG0gPSBsID09PSAwID8gZWxlbWVudCA6IF9jbG9uZShlbGVtZW50KTtcbiAgICAgICAgICAgIHByZXBlbmQuY2FsbCh0aGlzW2xdLCBlbG0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xufVxuXG4vKipcbiAqIFBsYWNlIGVsZW1lbnQocykgYmVmb3JlIGVhY2ggZWxlbWVudCBpbiB0aGUgY29sbGVjdGlvbi5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ3xOb2RlfE5vZGVMaXN0fE9iamVjdH0gZWxlbWVudCBXaGF0IHRvIHBsYWNlIGFzIHNpYmxpbmcocykgYmVmb3JlIHRvIHRoZSBlbGVtZW50KHMpLlxuICogQ2xvbmVzIGVsZW1lbnRzIGFzIG5lY2Vzc2FyeS5cbiAqIEByZXR1cm4ge09iamVjdH0gVGhlIHdyYXBwZWQgY29sbGVjdGlvblxuICogQGNoYWluYWJsZVxuICogQGV4YW1wbGVcbiAqICAgICAkKCcuaXRlbXMnKS5iZWZvcmUoJzxwPnByZWZpeDwvcD4nKTtcbiAqL1xuXG5mdW5jdGlvbiBiZWZvcmUoZWxlbWVudCkge1xuICAgIGlmICh0aGlzIGluc3RhbmNlb2YgTm9kZSkge1xuICAgICAgICBpZiAodHlwZW9mIGVsZW1lbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICB0aGlzLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlYmVnaW4nLCBlbGVtZW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgTm9kZSkge1xuICAgICAgICAgICAgICAgIHRoaXMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCwgdGhpcyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBlbGVtZW50cyA9IGVsZW1lbnQgaW5zdGFuY2VvZiBOb2RlTGlzdCA/IHRvQXJyYXkoZWxlbWVudCkgOiBlbGVtZW50O1xuICAgICAgICAgICAgICAgIGVsZW1lbnRzLmZvckVhY2goYmVmb3JlLmJpbmQodGhpcykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGwgPSB0aGlzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKGwtLSkge1xuICAgICAgICAgICAgdmFyIGVsbSA9IGwgPT09IDAgPyBlbGVtZW50IDogX2Nsb25lKGVsZW1lbnQpO1xuICAgICAgICAgICAgYmVmb3JlLmNhbGwodGhpc1tsXSwgZWxtKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbn1cblxuLyoqXG4gKiBQbGFjZSBlbGVtZW50KHMpIGFmdGVyIGVhY2ggZWxlbWVudCBpbiB0aGUgY29sbGVjdGlvbi5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ3xOb2RlfE5vZGVMaXN0fE9iamVjdH0gZWxlbWVudCBXaGF0IHRvIHBsYWNlIGFzIHNpYmxpbmcocykgYWZ0ZXIgdG8gdGhlIGVsZW1lbnQocykuIENsb25lcyBlbGVtZW50cyBhcyBuZWNlc3NhcnkuXG4gKiBAcmV0dXJuIHtPYmplY3R9IFRoZSB3cmFwcGVkIGNvbGxlY3Rpb25cbiAqIEBjaGFpbmFibGVcbiAqIEBleGFtcGxlXG4gKiAgICAgJCgnLml0ZW1zJykuYWZ0ZXIoJzxzcGFuPnN1Zjwvc3Bhbj48c3Bhbj5maXg8L3NwYW4+Jyk7XG4gKi9cblxuZnVuY3Rpb24gYWZ0ZXIoZWxlbWVudCkge1xuICAgIGlmICh0aGlzIGluc3RhbmNlb2YgTm9kZSkge1xuICAgICAgICBpZiAodHlwZW9mIGVsZW1lbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICB0aGlzLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJlbmQnLCBlbGVtZW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgTm9kZSkge1xuICAgICAgICAgICAgICAgIHRoaXMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCwgdGhpcy5uZXh0U2libGluZyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBlbGVtZW50cyA9IGVsZW1lbnQgaW5zdGFuY2VvZiBOb2RlTGlzdCA/IHRvQXJyYXkoZWxlbWVudCkgOiBlbGVtZW50O1xuICAgICAgICAgICAgICAgIGVsZW1lbnRzLnJldmVyc2UoKS5mb3JFYWNoKGFmdGVyLmJpbmQodGhpcykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGwgPSB0aGlzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKGwtLSkge1xuICAgICAgICAgICAgdmFyIGVsbSA9IGwgPT09IDAgPyBlbGVtZW50IDogX2Nsb25lKGVsZW1lbnQpO1xuICAgICAgICAgICAgYWZ0ZXIuY2FsbCh0aGlzW2xdLCBlbG0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xufVxuXG4vKipcbiAqIENsb25lIGEgd3JhcHBlZCBvYmplY3QuXG4gKlxuICogQHJldHVybiB7T2JqZWN0fSBXcmFwcGVkIGNvbGxlY3Rpb24gb2YgY2xvbmVkIG5vZGVzLlxuICogQGV4YW1wbGVcbiAqICAgICAkKGVsZW1lbnQpLmNsb25lKCk7XG4gKi9cblxuZnVuY3Rpb24gY2xvbmUoKSB7XG4gICAgcmV0dXJuICQoX2Nsb25lKHRoaXMpKTtcbn1cblxuLyoqXG4gKiBDbG9uZSBhbiBvYmplY3RcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ3xOb2RlfE5vZGVMaXN0fEFycmF5fSBlbGVtZW50IFRoZSBlbGVtZW50KHMpIHRvIGNsb25lLlxuICogQHJldHVybiB7U3RyaW5nfE5vZGV8Tm9kZUxpc3R8QXJyYXl9IFRoZSBjbG9uZWQgZWxlbWVudChzKVxuICogQHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBfY2xvbmUoZWxlbWVudCkge1xuICAgIGlmICh0eXBlb2YgZWxlbWVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfSBlbHNlIGlmIChlbGVtZW50IGluc3RhbmNlb2YgTm9kZSkge1xuICAgICAgICByZXR1cm4gZWxlbWVudC5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgfSBlbHNlIGlmICgnbGVuZ3RoJyBpbiBlbGVtZW50KSB7XG4gICAgICAgIHJldHVybiBbXS5tYXAuY2FsbChlbGVtZW50LCBmdW5jdGlvbihlbCkge1xuICAgICAgICAgICAgcmV0dXJuIGVsLmNsb25lTm9kZSh0cnVlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBlbGVtZW50O1xufVxuXG4vKlxuICogRXhwb3J0IGludGVyZmFjZVxuICovXG5cbmV4cG9ydCB7IGFwcGVuZCwgcHJlcGVuZCwgYmVmb3JlLCBhZnRlciwgY2xvbmUgfTtcbiIsIi8qKlxuICogQG1vZHVsZSBET00gKGV4dHJhKVxuICovXG5cbmltcG9ydCB7IGVhY2ggfSBmcm9tICcuL3V0aWwnO1xuaW1wb3J0IHsgYXBwZW5kLCBiZWZvcmUsIGFmdGVyIH0gZnJvbSAnLi9kb20nO1xuaW1wb3J0IHsgJCB9IGZyb20gJy4vc2VsZWN0b3InO1xuXG4vKipcbiAqIEFwcGVuZCBlYWNoIGVsZW1lbnQgaW4gdGhlIGNvbGxlY3Rpb24gdG8gdGhlIHNwZWNpZmllZCBlbGVtZW50KHMpLlxuICpcbiAqIEBwYXJhbSB7Tm9kZXxOb2RlTGlzdHxPYmplY3R9IGVsZW1lbnQgV2hhdCB0byBhcHBlbmQgdGhlIGVsZW1lbnQocykgdG8uIENsb25lcyBlbGVtZW50cyBhcyBuZWNlc3NhcnkuXG4gKiBAcmV0dXJuIHtPYmplY3R9IFRoZSB3cmFwcGVkIGNvbGxlY3Rpb25cbiAqIEBjaGFpbmFibGVcbiAqIEBleGFtcGxlXG4gKiAgICAgJCgnLml0ZW0nKS5hcHBlbmRUbyhjb250YWluZXIpO1xuICovXG5cbmZ1bmN0aW9uIGFwcGVuZFRvKGVsZW1lbnQpIHtcbiAgICB2YXIgY29udGV4dCA9IHR5cGVvZiBlbGVtZW50ID09PSAnc3RyaW5nJyA/ICQoZWxlbWVudCkgOiBlbGVtZW50O1xuICAgIGFwcGVuZC5jYWxsKGNvbnRleHQsIHRoaXMpO1xuICAgIHJldHVybiB0aGlzO1xufVxuXG4vKlxuICogRW1wdHkgZWFjaCBlbGVtZW50IGluIHRoZSBjb2xsZWN0aW9uLlxuICpcbiAqIEByZXR1cm4ge09iamVjdH0gVGhlIHdyYXBwZWQgY29sbGVjdGlvblxuICogQGNoYWluYWJsZVxuICogQGV4YW1wbGVcbiAqICAgICAkKCcuaXRlbScpLmVtcHR5KCk7XG4gKi9cblxuZnVuY3Rpb24gZW1wdHkoKXtcbiAgICByZXR1cm4gZWFjaCh0aGlzLCBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XG4gICAgfSk7XG59XG5cbi8qKlxuICogUmVtb3ZlIHRoZSBjb2xsZWN0aW9uIGZyb20gdGhlIERPTS5cbiAqXG4gKiBAcmV0dXJuIHtBcnJheX0gQXJyYXkgY29udGFpbmluZyB0aGUgcmVtb3ZlZCBlbGVtZW50c1xuICogQGV4YW1wbGVcbiAqICAgICAkKCcuaXRlbScpLnJlbW92ZSgpO1xuICovXG5cbmZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICByZXR1cm4gZWFjaCh0aGlzLCBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgIGlmIChlbGVtZW50LnBhcmVudE5vZGUpIHtcbiAgICAgICAgICAgIGVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbGVtZW50KTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG4vKipcbiAqIFJlcGxhY2UgZWFjaCBlbGVtZW50IGluIHRoZSBjb2xsZWN0aW9uIHdpdGggdGhlIHByb3ZpZGVkIG5ldyBjb250ZW50LCBhbmQgcmV0dXJuIHRoZSBhcnJheSBvZiBlbGVtZW50cyB0aGF0IHdlcmUgcmVwbGFjZWQuXG4gKlxuICogQHJldHVybiB7QXJyYXl9IEFycmF5IGNvbnRhaW5pbmcgdGhlIHJlcGxhY2VkIGVsZW1lbnRzXG4gKi9cblxuZnVuY3Rpb24gcmVwbGFjZVdpdGgoKSB7XG4gICAgcmV0dXJuIGJlZm9yZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpLnJlbW92ZSgpO1xufVxuXG4vKipcbiAqIEdldCB0aGUgYHRleHRDb250ZW50YCBmcm9tIHRoZSBmaXJzdCwgb3Igc2V0IHRoZSBgdGV4dENvbnRlbnRgIG9mIGVhY2ggZWxlbWVudCBpbiB0aGUgY29sbGVjdGlvbi5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gW3ZhbHVlXVxuICogQHJldHVybiB7T2JqZWN0fSBUaGUgd3JhcHBlZCBjb2xsZWN0aW9uXG4gKiBAY2hhaW5hYmxlXG4gKiBAZXhhbXBsZVxuICogICAgICQoJy5pdGVtJykudGV4dCgnTmV3IGNvbnRlbnQnKTtcbiAqL1xuXG5mdW5jdGlvbiB0ZXh0KHZhbHVlKXtcblxuICAgIGlmKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXNbMF0udGV4dENvbnRlbnQ7XG4gICAgfVxuXG4gICAgZWFjaCh0aGlzLCBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSAnJyArIHZhbHVlO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXM7XG59XG5cbi8qKlxuICogR2V0IHRoZSBgdmFsdWVgIGZyb20gdGhlIGZpcnN0LCBvciBzZXQgdGhlIGB2YWx1ZWAgb2YgZWFjaCBlbGVtZW50IGluIHRoZSBjb2xsZWN0aW9uLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBbdmFsdWVdXG4gKiBAcmV0dXJuIHtPYmplY3R9IFRoZSB3cmFwcGVkIGNvbGxlY3Rpb25cbiAqIEBjaGFpbmFibGVcbiAqIEBleGFtcGxlXG4gKiAgICAgJCgnaW5wdXQuZmlyc3ROYW1lJykudmFsdWUoJ05ldyB2YWx1ZScpO1xuICovXG5cbmZ1bmN0aW9uIHZhbCh2YWx1ZSl7XG5cbiAgICBpZih2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiB0aGlzWzBdLnZhbHVlO1xuICAgIH1cblxuICAgIGVhY2godGhpcywgZnVuY3Rpb24oZWxlbWVudCl7XG4gICAgICAgIGVsZW1lbnQudmFsdWUgPSB2YWx1ZTtcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzO1xufVxuXG4vKlxuICogRXhwb3J0IGludGVyZmFjZVxuICovXG5cbmV4cG9ydCB7IGFwcGVuZFRvLCBlbXB0eSwgcmVtb3ZlLCByZXBsYWNlV2l0aCwgdGV4dCwgdmFsIH07XG4iLCIvKipcbiAqIEBtb2R1bGUgRXZlbnRzXG4gKi9cblxuaW1wb3J0IHsgZWFjaCB9IGZyb20gJy4vdXRpbCc7XG5pbXBvcnQgeyBjbG9zZXN0IH0gZnJvbSAnLi9zZWxlY3Rvcic7XG5cbi8qKlxuICogU2hvcnRoYW5kIGZvciBgYWRkRXZlbnRMaXN0ZW5lcmAuIFN1cHBvcnRzIGV2ZW50IGRlbGVnYXRpb24gaWYgYSBmaWx0ZXIgKGBzZWxlY3RvcmApIGlzIHByb3ZpZGVkLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudE5hbWVzIExpc3Qgb2Ygc3BhY2Utc2VwYXJhdGVkIGV2ZW50IHR5cGVzIHRvIGJlIGFkZGVkIHRvIHRoZSBlbGVtZW50KHMpXG4gKiBAcGFyYW0ge1N0cmluZ30gW3NlbGVjdG9yXSBTZWxlY3RvciB0byBmaWx0ZXIgZGVzY2VuZGFudHMgdGhhdCBkZWxlZ2F0ZSB0aGUgZXZlbnQgdG8gdGhpcyBlbGVtZW50LlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaGFuZGxlciBFdmVudCBoYW5kbGVyXG4gKiBAcGFyYW0ge0Jvb2xlYW59IHVzZUNhcHR1cmU9ZmFsc2VcbiAqIEByZXR1cm4ge09iamVjdH0gVGhlIHdyYXBwZWQgY29sbGVjdGlvblxuICogQGNoYWluYWJsZVxuICogQGV4YW1wbGVcbiAqICAgICAkKCcuaXRlbScpLm9uKCdjbGljaycsIGNhbGxiYWNrKTtcbiAqICAgICAkKCcuY29udGFpbmVyJykub24oJ2NsaWNrIGZvY3VzJywgJy5pdGVtJywgaGFuZGxlcik7XG4gKi9cblxuZnVuY3Rpb24gb24oZXZlbnROYW1lcywgc2VsZWN0b3IsIGhhbmRsZXIsIHVzZUNhcHR1cmUpIHtcblxuICAgIGlmICh0eXBlb2Ygc2VsZWN0b3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgaGFuZGxlciA9IHNlbGVjdG9yO1xuICAgICAgICBzZWxlY3RvciA9IG51bGw7XG4gICAgfVxuXG4gICAgdmFyIHBhcnRzLFxuICAgICAgICBuYW1lc3BhY2UsXG4gICAgICAgIGV2ZW50TGlzdGVuZXI7XG5cbiAgICBldmVudE5hbWVzLnNwbGl0KCcgJykuZm9yRWFjaChmdW5jdGlvbihldmVudE5hbWUpIHtcblxuICAgICAgICBwYXJ0cyA9IGV2ZW50TmFtZS5zcGxpdCgnLicpO1xuICAgICAgICBldmVudE5hbWUgPSBwYXJ0c1swXSB8fCBudWxsO1xuICAgICAgICBuYW1lc3BhY2UgPSBwYXJ0c1sxXSB8fCBudWxsO1xuXG4gICAgICAgIGV2ZW50TGlzdGVuZXIgPSBwcm94eUhhbmRsZXIoaGFuZGxlcik7XG5cbiAgICAgICAgZWFjaCh0aGlzLCBmdW5jdGlvbihlbGVtZW50KSB7XG5cbiAgICAgICAgICAgIGlmIChzZWxlY3Rvcikge1xuICAgICAgICAgICAgICAgIGV2ZW50TGlzdGVuZXIgPSBkZWxlZ2F0ZUhhbmRsZXIuYmluZChlbGVtZW50LCBzZWxlY3RvciwgZXZlbnRMaXN0ZW5lcik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGV2ZW50TGlzdGVuZXIsIHVzZUNhcHR1cmUgfHwgZmFsc2UpO1xuXG4gICAgICAgICAgICBnZXRIYW5kbGVycyhlbGVtZW50KS5wdXNoKHtcbiAgICAgICAgICAgICAgICBldmVudE5hbWU6IGV2ZW50TmFtZSxcbiAgICAgICAgICAgICAgICBoYW5kbGVyOiBoYW5kbGVyLFxuICAgICAgICAgICAgICAgIGV2ZW50TGlzdGVuZXI6IGV2ZW50TGlzdGVuZXIsXG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IHNlbGVjdG9yLFxuICAgICAgICAgICAgICAgIG5hbWVzcGFjZTogbmFtZXNwYWNlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICB9LCB0aGlzKTtcblxuICAgIHJldHVybiB0aGlzO1xufVxuXG4vKipcbiAqIFNob3J0aGFuZCBmb3IgYHJlbW92ZUV2ZW50TGlzdGVuZXJgLiBEZWxlZ2F0ZXMgdG8gYHVuZGVsZWdhdGVgIGlmIHRoYXQgc2lnbmF0dXJlIGlzIHVzZWQuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50TmFtZXMgTGlzdCBvZiBzcGFjZS1zZXBhcmF0ZWQgZXZlbnQgdHlwZXMgdG8gYmUgcmVtb3ZlZCBmcm9tIHRoZSBlbGVtZW50KHMpXG4gKiBAcGFyYW0ge1N0cmluZ30gW3NlbGVjdG9yXSBTZWxlY3RvciB0byBmaWx0ZXIgZGVzY2VuZGFudHMgdGhhdCB1bmRlbGVnYXRlIHRoZSBldmVudCB0byB0aGlzIGVsZW1lbnQuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBoYW5kbGVyIEV2ZW50IGhhbmRsZXJcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gdXNlQ2FwdHVyZT1mYWxzZVxuICogQHJldHVybiB7T2JqZWN0fSBUaGUgd3JhcHBlZCBjb2xsZWN0aW9uXG4gKiBAY2hhaW5hYmxlXG4gKiBAZXhhbXBsZVxuICogICAgICQoJy5pdGVtJykub2ZmKCdjbGljaycsIGNhbGxiYWNrKTtcbiAqICAgICAkKCcjbXktZWxlbWVudCcpLm9mZignbXlFdmVudCBteU90aGVyRXZlbnQnKTtcbiAqICAgICAkKCcuaXRlbScpLm9mZigpO1xuICovXG5cbmZ1bmN0aW9uIG9mZihldmVudE5hbWVzID0gJycsIHNlbGVjdG9yLCBoYW5kbGVyLCB1c2VDYXB0dXJlKSB7XG5cbiAgICBpZiAodHlwZW9mIHNlbGVjdG9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGhhbmRsZXIgPSBzZWxlY3RvcjtcbiAgICAgICAgc2VsZWN0b3IgPSBudWxsO1xuICAgIH1cblxuICAgIHZhciBwYXJ0cyxcbiAgICAgICAgbmFtZXNwYWNlLFxuICAgICAgICBoYW5kbGVycztcblxuICAgIGV2ZW50TmFtZXMuc3BsaXQoJyAnKS5mb3JFYWNoKGZ1bmN0aW9uKGV2ZW50TmFtZSkge1xuXG4gICAgICAgIHBhcnRzID0gZXZlbnROYW1lLnNwbGl0KCcuJyk7XG4gICAgICAgIGV2ZW50TmFtZSA9IHBhcnRzWzBdIHx8IG51bGw7XG4gICAgICAgIG5hbWVzcGFjZSA9IHBhcnRzWzFdIHx8IG51bGw7XG5cbiAgICAgICAgZWFjaCh0aGlzLCBmdW5jdGlvbihlbGVtZW50KSB7XG5cbiAgICAgICAgICAgIGhhbmRsZXJzID0gZ2V0SGFuZGxlcnMoZWxlbWVudCk7XG5cbiAgICAgICAgICAgIGVhY2goaGFuZGxlcnMuZmlsdGVyKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAoIWV2ZW50TmFtZSB8fCBpdGVtLmV2ZW50TmFtZSA9PT0gZXZlbnROYW1lKSAmJlxuICAgICAgICAgICAgICAgICAgICAoIW5hbWVzcGFjZSB8fCBpdGVtLm5hbWVzcGFjZSA9PT0gbmFtZXNwYWNlKSAmJlxuICAgICAgICAgICAgICAgICAgICAoIWhhbmRsZXIgfHwgaXRlbS5oYW5kbGVyID09PSBoYW5kbGVyKSAmJlxuICAgICAgICAgICAgICAgICAgICAoIXNlbGVjdG9yIHx8IGl0ZW0uc2VsZWN0b3IgPT09IHNlbGVjdG9yKSk7XG4gICAgICAgICAgICB9KSwgZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihpdGVtLmV2ZW50TmFtZSwgaXRlbS5ldmVudExpc3RlbmVyLCB1c2VDYXB0dXJlIHx8IGZhbHNlKTtcbiAgICAgICAgICAgICAgICBoYW5kbGVycy5zcGxpY2UoaGFuZGxlcnMuaW5kZXhPZihpdGVtKSwgMSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKCFldmVudE5hbWUgJiYgIW5hbWVzcGFjZSAmJiAhc2VsZWN0b3IgJiYgIWhhbmRsZXIpIHtcbiAgICAgICAgICAgICAgICBjbGVhckhhbmRsZXJzKGVsZW1lbnQpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChoYW5kbGVycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICBjbGVhckhhbmRsZXJzKGVsZW1lbnQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuXG4gICAgfSwgdGhpcyk7XG5cbiAgICByZXR1cm4gdGhpcztcbn1cblxuZnVuY3Rpb24gZGVsZWdhdGUoc2VsZWN0b3IsIGV2ZW50TmFtZSwgaGFuZGxlcikge1xuICAgIHJldHVybiBvbi5jYWxsKHRoaXMsIGV2ZW50TmFtZSwgc2VsZWN0b3IsIGhhbmRsZXIpO1xufVxuXG5mdW5jdGlvbiB1bmRlbGVnYXRlKHNlbGVjdG9yLCBldmVudE5hbWUsIGhhbmRsZXIpIHtcbiAgICByZXR1cm4gb2ZmLmNhbGwodGhpcywgZXZlbnROYW1lLCBzZWxlY3RvciwgaGFuZGxlcik7XG59XG5cbi8qKlxuICogR2V0IGV2ZW50IGhhbmRsZXJzIGZyb20gYW4gZWxlbWVudFxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge05vZGV9IGVsZW1lbnRcbiAqIEByZXR1cm4ge0FycmF5fVxuICovXG5cbnZhciBldmVudEtleVByb3AgPSAnX19kb210YXN0aWNfZXZlbnRfXyc7XG52YXIgaWQgPSAxO1xudmFyIGhhbmRsZXJzID0ge307XG52YXIgdW51c2VkS2V5cyA9IFtdO1xuXG5mdW5jdGlvbiBnZXRIYW5kbGVycyhlbGVtZW50KSB7XG4gICAgaWYgKCFlbGVtZW50W2V2ZW50S2V5UHJvcF0pIHtcbiAgICAgICAgZWxlbWVudFtldmVudEtleVByb3BdID0gdW51c2VkS2V5cy5sZW5ndGggPT09IDAgPyArK2lkIDogdW51c2VkS2V5cy5wb3AoKTtcbiAgICB9XG4gICAgdmFyIGtleSA9IGVsZW1lbnRbZXZlbnRLZXlQcm9wXTtcbiAgICByZXR1cm4gaGFuZGxlcnNba2V5XSB8fCAoaGFuZGxlcnNba2V5XSA9IFtdKTtcbn1cblxuLyoqXG4gKiBDbGVhciBldmVudCBoYW5kbGVycyBmb3IgYW4gZWxlbWVudFxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge05vZGV9IGVsZW1lbnRcbiAqL1xuXG5mdW5jdGlvbiBjbGVhckhhbmRsZXJzKGVsZW1lbnQpIHtcbiAgICB2YXIga2V5ID0gZWxlbWVudFtldmVudEtleVByb3BdO1xuICAgIGlmIChoYW5kbGVyc1trZXldKSB7XG4gICAgICAgIGhhbmRsZXJzW2tleV0gPSBudWxsO1xuICAgICAgICBlbGVtZW50W2tleV0gPSBudWxsO1xuICAgICAgICB1bnVzZWRLZXlzLnB1c2goa2V5KTtcbiAgICB9XG59XG5cbi8qKlxuICogRnVuY3Rpb24gdG8gY3JlYXRlIGEgaGFuZGxlciB0aGF0IGF1Z21lbnRzIHRoZSBldmVudCBvYmplY3Qgd2l0aCBzb21lIGV4dHJhIG1ldGhvZHMsXG4gKiBhbmQgZXhlY3V0ZXMgdGhlIGNhbGxiYWNrIHdpdGggdGhlIGV2ZW50IGFuZCB0aGUgZXZlbnQgZGF0YSAoaS5lLiBgZXZlbnQuZGV0YWlsYCkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSBoYW5kbGVyIENhbGxiYWNrIHRvIGV4ZWN1dGUgYXMgYGhhbmRsZXIoZXZlbnQsIGRhdGEpYFxuICogQHJldHVybiB7RnVuY3Rpb259XG4gKi9cblxuZnVuY3Rpb24gcHJveHlIYW5kbGVyKGhhbmRsZXIpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgaGFuZGxlci5jYWxsKHRoaXMsIGF1Z21lbnRFdmVudChldmVudCksIGV2ZW50LmRldGFpbCk7XG4gICAgfTtcbn1cblxuLyoqXG4gKiBBdHRlbXB0IHRvIGF1Z21lbnQgZXZlbnRzIGFuZCBpbXBsZW1lbnQgc29tZXRoaW5nIGNsb3NlciB0byBET00gTGV2ZWwgMyBFdmVudHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBldmVudFxuICogQHJldHVybiB7RnVuY3Rpb259XG4gKi9cblxudmFyIGF1Z21lbnRFdmVudCA9IChmdW5jdGlvbigpIHtcblxuICAgIHZhciBtZXRob2ROYW1lLFxuICAgICAgICBldmVudE1ldGhvZHMgPSB7XG4gICAgICAgICAgICBwcmV2ZW50RGVmYXVsdDogJ2lzRGVmYXVsdFByZXZlbnRlZCcsXG4gICAgICAgICAgICBzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb246ICdpc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZCcsXG4gICAgICAgICAgICBzdG9wUHJvcGFnYXRpb246ICdpc1Byb3BhZ2F0aW9uU3RvcHBlZCdcbiAgICAgICAgfSxcbiAgICAgICAgcmV0dXJuVHJ1ZSA9ICgpID0+IHRydWUsXG4gICAgICAgIHJldHVybkZhbHNlID0gKCkgPT4gZmFsc2U7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgaWYgKCFldmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQgfHwgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uIHx8IGV2ZW50LnN0b3BQcm9wYWdhdGlvbikge1xuICAgICAgICAgICAgZm9yIChtZXRob2ROYW1lIGluIGV2ZW50TWV0aG9kcykge1xuICAgICAgICAgICAgICAgIChmdW5jdGlvbihtZXRob2ROYW1lLCB0ZXN0TWV0aG9kTmFtZSwgb3JpZ2luYWxNZXRob2QpIHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRbbWV0aG9kTmFtZV0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNbdGVzdE1ldGhvZE5hbWVdID0gcmV0dXJuVHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvcmlnaW5hbE1ldGhvZCAmJiBvcmlnaW5hbE1ldGhvZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBldmVudFt0ZXN0TWV0aG9kTmFtZV0gPSByZXR1cm5GYWxzZTtcbiAgICAgICAgICAgICAgICB9KG1ldGhvZE5hbWUsIGV2ZW50TWV0aG9kc1ttZXRob2ROYW1lXSwgZXZlbnRbbWV0aG9kTmFtZV0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChldmVudC5fcHJldmVudERlZmF1bHQpIHtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBldmVudDtcbiAgICB9XG5cbn0pKCk7XG5cbi8qKlxuICogRnVuY3Rpb24gdG8gdGVzdCB3aGV0aGVyIGRlbGVnYXRlZCBldmVudHMgbWF0Y2ggdGhlIHByb3ZpZGVkIGBzZWxlY3RvcmAgKGZpbHRlciksXG4gKiBpZiB0aGUgZXZlbnQgcHJvcGFnYXRpb24gd2FzIHN0b3BwZWQsIGFuZCB0aGVuIGFjdHVhbGx5IGNhbGwgdGhlIHByb3ZpZGVkIGV2ZW50IGhhbmRsZXIuXG4gKiBVc2UgYHRoaXNgIGluc3RlYWQgb2YgYGV2ZW50LmN1cnJlbnRUYXJnZXRgIG9uIHRoZSBldmVudCBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBzZWxlY3RvciBTZWxlY3RvciB0byBmaWx0ZXIgZGVzY2VuZGFudHMgdGhhdCB1bmRlbGVnYXRlIHRoZSBldmVudCB0byB0aGlzIGVsZW1lbnQuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBoYW5kbGVyIEV2ZW50IGhhbmRsZXJcbiAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50XG4gKi9cblxuZnVuY3Rpb24gZGVsZWdhdGVIYW5kbGVyKHNlbGVjdG9yLCBoYW5kbGVyLCBldmVudCkge1xuICAgIHZhciBldmVudFRhcmdldCA9IGV2ZW50Ll90YXJnZXQgfHwgZXZlbnQudGFyZ2V0LFxuICAgICAgICBjdXJyZW50VGFyZ2V0ID0gY2xvc2VzdC5jYWxsKFtldmVudFRhcmdldF0sIHNlbGVjdG9yLCB0aGlzKVswXTtcbiAgICBpZiAoY3VycmVudFRhcmdldCAmJiBjdXJyZW50VGFyZ2V0ICE9PSB0aGlzKSB7XG4gICAgICAgIGlmIChjdXJyZW50VGFyZ2V0ID09PSBldmVudFRhcmdldCB8fCAhKGV2ZW50LmlzUHJvcGFnYXRpb25TdG9wcGVkICYmIGV2ZW50LmlzUHJvcGFnYXRpb25TdG9wcGVkKCkpKSB7XG4gICAgICAgICAgICBoYW5kbGVyLmNhbGwoY3VycmVudFRhcmdldCwgZXZlbnQpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG52YXIgYmluZCA9IG9uLFxuICAgIHVuYmluZCA9IG9mZjtcblxuLypcbiAqIEV4cG9ydCBpbnRlcmZhY2VcbiAqL1xuXG5leHBvcnQgeyBvbiwgb2ZmLCBkZWxlZ2F0ZSwgdW5kZWxlZ2F0ZSwgYmluZCwgdW5iaW5kIH07XG4iLCIvKipcbiAqIEBtb2R1bGUgSFRNTFxuICovXG5cbmltcG9ydCB7IGVhY2ggfSBmcm9tICcuL3V0aWwnO1xuXG4vKlxuICogR2V0IHRoZSBIVE1MIGNvbnRlbnRzIG9mIHRoZSBmaXJzdCBlbGVtZW50LCBvciBzZXQgdGhlIEhUTUwgY29udGVudHMgZm9yIGVhY2ggZWxlbWVudCBpbiB0aGUgY29sbGVjdGlvbi5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gW2ZyYWdtZW50XSBIVE1MIGZyYWdtZW50IHRvIHNldCBmb3IgdGhlIGVsZW1lbnQuIElmIHRoaXMgYXJndW1lbnQgaXMgb21pdHRlZCwgdGhlIEhUTUwgY29udGVudHMgYXJlIHJldHVybmVkLlxuICogQHJldHVybiB7T2JqZWN0fSBUaGUgd3JhcHBlZCBjb2xsZWN0aW9uXG4gKiBAY2hhaW5hYmxlXG4gKiBAZXhhbXBsZVxuICogICAgICQoJy5pdGVtJykuaHRtbCgpO1xuICogICAgICQoJy5pdGVtJykuaHRtbCgnPHNwYW4+bW9yZTwvc3Bhbj4nKTtcbiAqL1xuXG5mdW5jdGlvbiBodG1sKGZyYWdtZW50KSB7XG5cbiAgICBpZiAodHlwZW9mIGZyYWdtZW50ICE9PSAnc3RyaW5nJykge1xuICAgICAgICB2YXIgZWxlbWVudCA9IHRoaXMubm9kZVR5cGUgPyB0aGlzIDogdGhpc1swXTtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQgPyBlbGVtZW50LmlubmVySFRNTCA6IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBlYWNoKHRoaXMsIGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSBmcmFnbWVudDtcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzO1xuXG59XG5cbi8qXG4gKiBFeHBvcnQgaW50ZXJmYWNlXG4gKi9cblxuZXhwb3J0IHsgaHRtbCB9O1xuIiwiLyoqXG4gKiBAbW9kdWxlIEFQSVxuICovXG5cbmltcG9ydCB7IGV4dGVuZCwgZXh0ZW5kQWxsIH0gZnJvbSAnLi91dGlsJztcblxudmFyIGFwaSA9IHt9LFxuICAgIGFwaU5vZGVMaXN0ID0ge30sXG4gICAgJCA9IHt9O1xuXG4vLyBJbXBvcnQgbW9kdWxlcyB0byBidWlsZCB1cCB0aGUgQVBJXG5cbmltcG9ydCAqIGFzIGFycmF5IGZyb20gJy4vYXJyYXknO1xuaW1wb3J0ICogYXMgYXR0ciBmcm9tICcuL2F0dHInO1xuaW1wb3J0ICogYXMgY2xhc3NfIGZyb20gJy4vY2xhc3MnO1xuaW1wb3J0ICogYXMgY29udGFpbnMgZnJvbSAnLi9jb250YWlucyc7XG5pbXBvcnQgKiBhcyBjc3MgZnJvbSAnLi9jc3MnO1xuaW1wb3J0ICogYXMgZGF0YSBmcm9tICcuL2RhdGEnO1xuaW1wb3J0ICogYXMgZG9tIGZyb20gJy4vZG9tJztcbmltcG9ydCAqIGFzIGRvbV9leHRyYSBmcm9tICcuL2RvbV9leHRyYSc7XG5pbXBvcnQgKiBhcyBldmVudCBmcm9tICcuL2V2ZW50JztcbmltcG9ydCAqIGFzIGh0bWwgZnJvbSAnLi9odG1sJztcbmltcG9ydCAqIGFzIG1vZGUgZnJvbSAnLi9tb2RlJztcbmltcG9ydCAqIGFzIG5vY29uZmxpY3QgZnJvbSAnLi9ub2NvbmZsaWN0JztcbmltcG9ydCAqIGFzIHJlYWR5IGZyb20gJy4vcmVhZHknO1xuaW1wb3J0ICogYXMgc2VsZWN0b3IgZnJvbSAnLi9zZWxlY3Rvcic7XG5pbXBvcnQgKiBhcyBzZWxlY3Rvcl9leHRyYSBmcm9tICcuL3NlbGVjdG9yX2V4dHJhJztcbmltcG9ydCAqIGFzIHRyaWdnZXIgZnJvbSAnLi90cmlnZ2VyJztcbmltcG9ydCAqIGFzIHR5cGUgZnJvbSAnLi90eXBlJztcblxuaWYgKHR5cGVvZiBzZWxlY3RvciAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAkID0gc2VsZWN0b3IuJDtcbiAgICAkLm1hdGNoZXMgPSBzZWxlY3Rvci5tYXRjaGVzO1xuICAgIGFwaS5maW5kID0gc2VsZWN0b3IuZmluZDtcbiAgICBhcGkuY2xvc2VzdCA9IHNlbGVjdG9yLmNsb3Nlc3Q7XG59XG5cbmV4dGVuZEFsbCgkLCBjb250YWlucywgbW9kZSwgbm9jb25mbGljdCwgdHlwZSk7XG5leHRlbmRBbGwoYXBpLCBhcnJheSwgYXR0ciwgY2xhc3NfLCBjc3MsIGRhdGEsIGRvbSwgZG9tX2V4dHJhLCBldmVudCwgaHRtbCwgcmVhZHksIHNlbGVjdG9yX2V4dHJhLCB0cmlnZ2VyKTtcbmV4dGVuZEFsbChhcGlOb2RlTGlzdCwgYXJyYXkpO1xuXG4vLyBWZXJzaW9uXG5cbiQudmVyc2lvbiA9ICdfX1ZFUlNJT05fXyc7XG5cbi8vIFV0aWxcblxuJC5leHRlbmQgPSBleHRlbmQ7XG5cbi8vIEludGVybmFsIHByb3BlcnRpZXMgdG8gc3dpdGNoIGJldHdlZW4gZGVmYXVsdCBhbmQgbmF0aXZlIG1vZGVcblxuJC5mbiA9IGFwaTtcbiQuZm5MaXN0ID0gYXBpTm9kZUxpc3Q7XG5cbi8vIEV4cG9ydCBpbnRlcmZhY2VcblxuZXhwb3J0IGRlZmF1bHQgJDtcbiIsIi8qXG4gKiAjIE9wdC1pbiB0byBOYXRpdmUgTW9kZVxuICpcbiAqIFRoZSBkZWZhdWx0LCBub24taW50cnVzaXZlIG1vZGUgaXMgc2ltaWxhciB0byBob3cgalF1ZXJ5IG9wZXJhdGVzOiB3b3JraW5nIHdpdGggc3RhdGljLCBhcnJheS1saWtlIGAkYCBvYmplY3RzOlxuICpcbiAqICAgICAkKCcuaXRlbXMnKS5hcHBlbmQoJzxzcGFuPmZvbzwvc3Bhbj4pO1xuICogICAgICQoZG9jdW1lbnQuYm9keSkub24oJ2NsaWNrJywgJy50YWInLCBoYW5kbGVyKTtcbiAqXG4gKiBIb3dldmVyLCB5b3UgY2FuIG9wdC1pbiB0byB3b3JrIHdpdGggbGl2ZSBOb2RlTGlzdCBvYmplY3RzLlxuICogSW4gdGhpcyBcIm5hdGl2ZVwiIG1vZGUsIHRoZSBgTm9kZWAgYW5kIGBOb2RlTGlzdGAgcHJvdG90eXBlcyBhcmUgYXVnbWVudGVkIChpbiBhIHNhZmUgYW5kIHJldmVyc2libGUgbWFubmVyKSB0byBmaWxsIHVwIHRoZSBjaGFpbmFibGUgQVBJLFxuICogdG8gZW5hYmxlIHdvcmtpbmcgd2l0aCBgTm9kZWAgYW5kIGBOb2RlTGlzdGAgb2JqZWN0cyBkaXJlY3RseTpcbiAqXG4gKiAgICAgdmFyIGNvbGxlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaXRlbXMnKTtcbiAqICAgICBjb2xsZWN0aW9uLmFwcGVuZCgnPHNwYW4+Zm9vPC9zcGFuPik7XG4gKiAgICAgY29sbGVjdGlvbi5hZGRDbGFzcygnYmFyJyk7XG4gKiAgICAgY29sbGVjdGlvbi5mb3JFYWNoKGl0ZXJhdG9yRm4pO1xuICogICAgIGNvbGxlY3Rpb24uZmluZCgnLm1vcmUnKTtcbiAqXG4gKiAgICAgZG9jdW1lbnQuYm9keS5vbignY2xpY2snLCAnLnRhYicsIGhhbmRsZXIpXG4gKlxuICogTm90ZSB0aGF0IGluIG5hdGl2ZSBtb2RlLCBgJChzZWxlY3RvcilgIGNhbiBzdGlsIGJlIHVzZWQuIEl0IHJldHVybnMgYSBOb2RlTGlzdC5cbiAqXG4gKiBCdWlsZCB0aGUgbGliIHVzaW5nIGd1bHAgd2l0aCBgbW9kZWAgbm90IGV4Y2x1ZGVkLlxuICogVXNlIGAkLm5hdGl2ZSgpYCB0byBhY3RpdmF0ZSB0aGlzIGJlaGF2aW9yLiBUaGUgQVBJIGlzIHRoZSBzYW1lIGluIGJvdGggbW9kZXMuXG4gKi9cblxuaW1wb3J0IHsgZ2xvYmFsIH0gZnJvbSAnLi91dGlsJztcblxudmFyIGlzTmF0aXZlID0gZmFsc2U7XG5cbmZ1bmN0aW9uIG5hdGl2ZShnb05hdGl2ZSA9IHRydWUpIHtcbiAgICB2YXIgd2FzTmF0aXZlID0gaXNOYXRpdmU7XG4gICAgaXNOYXRpdmUgPSBnb05hdGl2ZTtcbiAgICBpZiAoZ2xvYmFsLiQpIHtcbiAgICAgICAgZ2xvYmFsLiQuaXNOYXRpdmUgPSBpc05hdGl2ZTtcbiAgICB9XG4gICAgaWYgKCF3YXNOYXRpdmUgJiYgaXNOYXRpdmUpIHtcbiAgICAgICAgYXVnbWVudE5hdGl2ZVByb3RvdHlwZXModGhpcy5mbiwgdGhpcy5mbkxpc3QpO1xuICAgIH1cbiAgICBpZiAod2FzTmF0aXZlICYmICFpc05hdGl2ZSkge1xuICAgICAgICB1bmF1Z21lbnROYXRpdmVQcm90b3R5cGVzKHRoaXMuZm4sIHRoaXMuZm5MaXN0KTtcbiAgICB9XG4gICAgcmV0dXJuIGlzTmF0aXZlO1xufVxuXG52YXIgTm9kZVByb3RvID0gdHlwZW9mIE5vZGUgIT09ICd1bmRlZmluZWQnICYmIE5vZGUucHJvdG90eXBlLFxuICAgIE5vZGVMaXN0UHJvdG8gPSB0eXBlb2YgTm9kZUxpc3QgIT09ICd1bmRlZmluZWQnICYmIE5vZGVMaXN0LnByb3RvdHlwZTtcblxuLypcbiAqIEFkZCBhIHByb3BlcnR5IChpLmUuIG1ldGhvZCkgdG8gYW4gb2JqZWN0IGluIGEgc2FmZSBhbmQgcmV2ZXJzaWJsZSBtYW5uZXIuXG4gKiBPbmx5IGFkZCB0aGUgbWV0aG9kIGlmIG9iamVjdCBub3QgYWxyZWFkeSBoYWQgaXQgKG5vbi1pbmhlcml0ZWQpLlxuICpcbiAqIEBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gYXVnbWVudChvYmosIGtleSwgdmFsdWUpIHtcbiAgICBpZiAoIW9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgZW51bWVyYWJsZTogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG4vKlxuICogUmVtb3ZlIHByb3BlcnR5IGZyb20gb2JqZWN0IChvbmx5IGluaGVyaXRlZCBwcm9wZXJ0aWVzIHdpbGwgYmUgcmVtb3ZlZCkuXG4gKlxuICogQHByaXZhdGVcbiAqL1xuXG52YXIgdW5hdWdtZW50ID0gKG9iaiwga2V5KSA9PiB7IGRlbGV0ZSBvYmpba2V5XSB9O1xuXG4vKlxuICogQXVnbWVudCBuYXRpdmUgYE5vZGVgIGFuZCBgTm9kZUxpc3RgIG9iamVjdHMgaW4gbmF0aXZlIG1vZGUuXG4gKlxuICogQHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBhdWdtZW50TmF0aXZlUHJvdG90eXBlcyhtZXRob2RzTm9kZSwgbWV0aG9kc05vZGVMaXN0KSB7XG5cbiAgICB2YXIga2V5O1xuXG4gICAgZm9yIChrZXkgaW4gbWV0aG9kc05vZGUpIHtcbiAgICAgICAgYXVnbWVudChOb2RlUHJvdG8sIGtleSwgbWV0aG9kc05vZGVba2V5XSk7XG4gICAgICAgIGF1Z21lbnQoTm9kZUxpc3RQcm90bywga2V5LCBtZXRob2RzTm9kZVtrZXldKTtcbiAgICB9XG5cbiAgICBmb3IgKGtleSBpbiBtZXRob2RzTm9kZUxpc3QpIHtcbiAgICAgICAgYXVnbWVudChOb2RlTGlzdFByb3RvLCBrZXksIG1ldGhvZHNOb2RlTGlzdFtrZXldKTtcbiAgICB9XG59XG5cbi8qXG4gKiBVbmF1Z21lbnQgbmF0aXZlIGBOb2RlYCBhbmQgYE5vZGVMaXN0YCBvYmplY3RzIHRvIHN3aXRjaCBiYWNrIHRvIGRlZmF1bHQgbW9kZS5cbiAqIE1haW5seSB1c2VkIGZvciB0ZXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHVuYXVnbWVudE5hdGl2ZVByb3RvdHlwZXMobWV0aG9kc05vZGUsIG1ldGhvZHNOb2RlTGlzdCkge1xuXG4gICAgdmFyIGtleTtcblxuICAgIGZvciAoa2V5IGluIG1ldGhvZHNOb2RlKSB7XG4gICAgICAgIHVuYXVnbWVudChOb2RlUHJvdG8sIGtleSk7XG4gICAgICAgIHVuYXVnbWVudChOb2RlTGlzdFByb3RvLCBrZXkpO1xuICAgIH1cblxuICAgIGZvciAoa2V5IGluIG1ldGhvZHNOb2RlTGlzdCkge1xuICAgICAgICB1bmF1Z21lbnQoTm9kZUxpc3RQcm90bywga2V5KTtcbiAgICB9XG59XG5cbi8vIEV4cG9ydCBpbnRlcmZhY2VcblxuZXhwb3J0IHsgaXNOYXRpdmUsIG5hdGl2ZSB9O1xuIiwiLyoqXG4gKiBAbW9kdWxlIG5vQ29uZmxpY3RcbiAqL1xuXG5pbXBvcnQgeyBnbG9iYWwgfSBmcm9tICcuL3V0aWwnO1xuXG4vKlxuICogU2F2ZSB0aGUgcHJldmlvdXMgdmFsdWUgb2YgdGhlIGdsb2JhbCBgJGAgdmFyaWFibGUsIHNvIHRoYXQgaXQgY2FuIGJlIHJlc3RvcmVkIGxhdGVyIG9uLlxuICogQHByaXZhdGVcbiAqL1xuXG52YXIgcHJldmlvdXNMaWIgPSBnbG9iYWwuJDtcblxuLyoqXG4gKiBJbiBjYXNlIGFub3RoZXIgbGlicmFyeSBzZXRzIHRoZSBnbG9iYWwgYCRgIHZhcmlhYmxlIGJlZm9yZSBET010YXN0aWMgZG9lcyxcbiAqIHRoaXMgbWV0aG9kIGNhbiBiZSB1c2VkIHRvIHJldHVybiB0aGUgZ2xvYmFsIGAkYCB0byB0aGF0IG90aGVyIGxpYnJhcnkuXG4gKlxuICogQHJldHVybiB7T2JqZWN0fSBSZWZlcmVuY2UgdG8gRE9NdGFzdGljLlxuICogQGV4YW1wbGVcbiAqICAgICB2YXIgJEUgPSAkLm5vQ29uZmxpY3QoKTtcbiAqL1xuXG5mdW5jdGlvbiBub0NvbmZsaWN0KCkge1xuICAgIGdsb2JhbC4kID0gcHJldmlvdXNMaWI7XG4gICAgcmV0dXJuIHRoaXM7XG59XG5cbi8qXG4gKiBFeHBvcnQgaW50ZXJmYWNlXG4gKi9cblxuZXhwb3J0IHsgbm9Db25mbGljdCB9O1xuIiwiLyoqXG4gKiBAbW9kdWxlIFJlYWR5XG4gKi9cblxuLyoqXG4gKiBFeGVjdXRlIGNhbGxiYWNrIHdoZW4gYERPTUNvbnRlbnRMb2FkZWRgIGZpcmVzIGZvciBgZG9jdW1lbnRgLCBvciBpbW1lZGlhdGVseSBpZiBjYWxsZWQgYWZ0ZXJ3YXJkcy5cbiAqXG4gKiBAcGFyYW0gaGFuZGxlciBDYWxsYmFjayB0byBleGVjdXRlIHdoZW4gaW5pdGlhbCBET00gY29udGVudCBpcyBsb2FkZWQuXG4gKiBAcmV0dXJuIHtPYmplY3R9IFRoZSB3cmFwcGVkIGNvbGxlY3Rpb25cbiAqIEBjaGFpbmFibGVcbiAqIEBleGFtcGxlXG4gKiAgICAgJChkb2N1bWVudCkucmVhZHkoY2FsbGJhY2spO1xuICovXG5cbmZ1bmN0aW9uIHJlYWR5KGhhbmRsZXIpIHtcbiAgICBpZiAoL2NvbXBsZXRlfGxvYWRlZHxpbnRlcmFjdGl2ZS8udGVzdChkb2N1bWVudC5yZWFkeVN0YXRlKSAmJiBkb2N1bWVudC5ib2R5KSB7XG4gICAgICAgIGhhbmRsZXIoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgaGFuZGxlciwgZmFsc2UpXG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xufVxuXG4vKlxuICogRXhwb3J0IGludGVyZmFjZVxuICovXG5cbmV4cG9ydCB7IHJlYWR5IH07XG4iLCIvKipcbiAqIEBtb2R1bGUgU2VsZWN0b3JcbiAqL1xuXG5pbXBvcnQgeyBnbG9iYWwsIG1ha2VJdGVyYWJsZSB9IGZyb20gJy4vdXRpbCc7XG5cbnZhciBpc1Byb3RvdHlwZVNldCA9IGZhbHNlLFxuICAgIHJlRnJhZ21lbnQgPSAvXlxccyo8KFxcdyt8ISlbXj5dKj4vLFxuICAgIHJlU2luZ2xlVGFnID0gL148KFxcdyspXFxzKlxcLz8+KD86PFxcL1xcMT58KSQvLFxuICAgIHJlU2ltcGxlU2VsZWN0b3IgPSAvXltcXC4jXT9bXFx3LV0qJC87XG5cbi8qXG4gKiBWZXJzYXRpbGUgd3JhcHBlciBmb3IgYHF1ZXJ5U2VsZWN0b3JBbGxgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfE5vZGV8Tm9kZUxpc3R8QXJyYXl9IHNlbGVjdG9yIFF1ZXJ5IHNlbGVjdG9yLCBgTm9kZWAsIGBOb2RlTGlzdGAsIGFycmF5IG9mIGVsZW1lbnRzLCBvciBIVE1MIGZyYWdtZW50IHN0cmluZy5cbiAqIEBwYXJhbSB7U3RyaW5nfE5vZGV8Tm9kZUxpc3R9IGNvbnRleHQ9ZG9jdW1lbnQgVGhlIGNvbnRleHQgZm9yIHRoZSBzZWxlY3RvciB0byBxdWVyeSBlbGVtZW50cy5cbiAqIEByZXR1cm4ge09iamVjdH0gVGhlIHdyYXBwZWQgY29sbGVjdGlvblxuICogQGNoYWluYWJsZVxuICogQGV4YW1wbGVcbiAqICAgICB2YXIgJGl0ZW1zID0gJCguaXRlbXMnKTtcbiAqIEBleGFtcGxlXG4gKiAgICAgdmFyICRlbGVtZW50ID0gJChkb21FbGVtZW50KTtcbiAqIEBleGFtcGxlXG4gKiAgICAgdmFyICRsaXN0ID0gJChub2RlTGlzdCwgZG9jdW1lbnQuYm9keSk7XG4gKiBAZXhhbXBsZVxuICogICAgIHZhciAkZWxlbWVudCA9ICQoJzxwPmV2ZXJncmVlbjwvcD4nKTtcbiAqL1xuXG5mdW5jdGlvbiAkKHNlbGVjdG9yLCBjb250ZXh0ID0gZG9jdW1lbnQpIHtcblxuICAgIHZhciBjb2xsZWN0aW9uO1xuXG4gICAgaWYgKCFzZWxlY3Rvcikge1xuXG4gICAgICAgIGNvbGxlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKG51bGwpO1xuXG4gICAgfSBlbHNlIGlmIChzZWxlY3RvciBpbnN0YW5jZW9mIFdyYXBwZXIpIHtcblxuICAgICAgICByZXR1cm4gc2VsZWN0b3I7XG5cbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBzZWxlY3RvciAhPT0gJ3N0cmluZycpIHtcblxuICAgICAgICBjb2xsZWN0aW9uID0gbWFrZUl0ZXJhYmxlKHNlbGVjdG9yKTtcblxuICAgIH0gZWxzZSBpZiAocmVGcmFnbWVudC50ZXN0KHNlbGVjdG9yKSkge1xuXG4gICAgICAgIGNvbGxlY3Rpb24gPSBjcmVhdGVGcmFnbWVudChzZWxlY3Rvcik7XG5cbiAgICB9IGVsc2Uge1xuXG4gICAgICAgIGNvbnRleHQgPSB0eXBlb2YgY29udGV4dCA9PT0gJ3N0cmluZycgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbnRleHQpIDogY29udGV4dC5sZW5ndGggPyBjb250ZXh0WzBdIDogY29udGV4dDtcblxuICAgICAgICBjb2xsZWN0aW9uID0gcXVlcnlTZWxlY3RvcihzZWxlY3RvciwgY29udGV4dCk7XG5cbiAgICB9XG5cbiAgICByZXR1cm4gJC5pc05hdGl2ZSA/IGNvbGxlY3Rpb24gOiB3cmFwKGNvbGxlY3Rpb24pO1xuXG59XG5cbi8qXG4gKiBDaGFpbmluZyBmb3IgdGhlIGAkYCB3cmFwcGVyIChhbGlhc2luZyBgZmluZGAgZm9yIGAkYCkuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd8Tm9kZXxOb2RlTGlzdHxBcnJheX0gc2VsZWN0b3IgUXVlcnkgc2VsZWN0b3IsIGBOb2RlYCwgYE5vZGVMaXN0YCwgYXJyYXkgb2YgZWxlbWVudHMsIG9yIEhUTUwgZnJhZ21lbnQgc3RyaW5nLlxuICogQHJldHVybiB7T2JqZWN0fSBUaGUgd3JhcHBlZCBjb2xsZWN0aW9uXG4gKiBAZXhhbXBsZVxuICogICAgICQoJy5zZWxlY3RvcicpLmZpbmQoJy5kZWVwJykuJCgnLmRlZXBlc3QnKTtcbiAqL1xuXG5mdW5jdGlvbiBmaW5kKHNlbGVjdG9yKSB7XG4gICAgcmV0dXJuICQoc2VsZWN0b3IsIHRoaXMpO1xufVxuXG4vKipcbiAqIFJldHVybiB0aGUgY2xvc2VzdCBlbGVtZW50IG1hdGNoaW5nIHRoZSBzZWxlY3RvciAoc3RhcnRpbmcgYnkgaXRzZWxmKS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc2VsZWN0b3IgRmlsdGVyXG4gKiBAcGFyYW0ge09iamVjdH0gW2NvbnRleHRdIElmIHByb3ZpZGVkLCBtYXRjaGluZyBlbGVtZW50cyBtdXN0IGJlIGEgZGVzY2VuZGFudCBvZiB0aGlzIGVsZW1lbnRcbiAqIEByZXR1cm4ge09iamVjdH0gTmV3IHdyYXBwZWQgY29sbGVjdGlvbiAoY29udGFpbmluZyB6ZXJvIG9yIG9uZSBlbGVtZW50KVxuICogQGNoYWluYWJsZVxuICogQGV4YW1wbGVcbiAqICAgICAkKCcuc2VsZWN0b3InKS5jbG9zZXN0KCcuY29udGFpbmVyJyk7XG4gKi9cblxuZnVuY3Rpb24gY2xvc2VzdChzZWxlY3RvciwgY29udGV4dCkge1xuICAgIHZhciBub2RlID0gdGhpc1swXTtcbiAgICBmb3IgKDsgbm9kZS5ub2RlVHlwZSAhPT0gbm9kZS5ET0NVTUVOVF9OT0RFICYmIG5vZGUgIT09IGNvbnRleHQ7IG5vZGUgPSBub2RlLnBhcmVudE5vZGUpIHtcbiAgICAgICAgaWYgKG1hdGNoZXMobm9kZSwgc2VsZWN0b3IpKSB7XG4gICAgICAgICAgICByZXR1cm4gJChub2RlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gJCgpO1xufVxuXG4vKlxuICogUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVsZW1lbnQgd291bGQgYmUgc2VsZWN0ZWQgYnkgdGhlIHNwZWNpZmllZCBzZWxlY3RvciBzdHJpbmc7IG90aGVyd2lzZSwgcmV0dXJucyBgZmFsc2VgLlxuICpcbiAqIEBwYXJhbSB7Tm9kZX0gZWxlbWVudCBFbGVtZW50IHRvIHRlc3RcbiAqIEBwYXJhbSB7U3RyaW5nfSBzZWxlY3RvciBTZWxlY3RvciB0byBtYXRjaCBhZ2FpbnN0IGVsZW1lbnRcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKlxuICogQGV4YW1wbGVcbiAqICAgICAkLm1hdGNoZXMoZWxlbWVudCwgJy5tYXRjaCcpO1xuICovXG5cbnZhciBtYXRjaGVzID0gKGZ1bmN0aW9uKCkge1xuICAgIHZhciBjb250ZXh0ID0gdHlwZW9mIEVsZW1lbnQgIT09ICd1bmRlZmluZWQnID8gRWxlbWVudC5wcm90b3R5cGUgOiBnbG9iYWwsXG4gICAgICAgIF9tYXRjaGVzID0gY29udGV4dC5tYXRjaGVzIHx8IGNvbnRleHQubWF0Y2hlc1NlbGVjdG9yIHx8IGNvbnRleHQubW96TWF0Y2hlc1NlbGVjdG9yIHx8IGNvbnRleHQubXNNYXRjaGVzU2VsZWN0b3IgfHwgY29udGV4dC5vTWF0Y2hlc1NlbGVjdG9yIHx8IGNvbnRleHQud2Via2l0TWF0Y2hlc1NlbGVjdG9yO1xuICAgIHJldHVybiBmdW5jdGlvbihlbGVtZW50LCBzZWxlY3Rvcikge1xuICAgICAgICByZXR1cm4gX21hdGNoZXMuY2FsbChlbGVtZW50LCBzZWxlY3Rvcik7XG4gICAgfTtcbn0pKCk7XG5cbi8qXG4gKiBVc2UgdGhlIGZhc3RlciBgZ2V0RWxlbWVudEJ5SWRgLCBgZ2V0RWxlbWVudHNCeUNsYXNzTmFtZWAgb3IgYGdldEVsZW1lbnRzQnlUYWdOYW1lYCBvdmVyIGBxdWVyeVNlbGVjdG9yQWxsYCBpZiBwb3NzaWJsZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtTdHJpbmd9IHNlbGVjdG9yIFF1ZXJ5IHNlbGVjdG9yLlxuICogQHBhcmFtIHtOb2RlfSBjb250ZXh0IFRoZSBjb250ZXh0IGZvciB0aGUgc2VsZWN0b3IgdG8gcXVlcnkgZWxlbWVudHMuXG4gKiBAcmV0dXJuIHtPYmplY3R9IE5vZGVMaXN0LCBIVE1MQ29sbGVjdGlvbiwgb3IgQXJyYXkgb2YgbWF0Y2hpbmcgZWxlbWVudHMgKGRlcGVuZGluZyBvbiBtZXRob2QgdXNlZCkuXG4gKi9cblxuZnVuY3Rpb24gcXVlcnlTZWxlY3RvcihzZWxlY3RvciwgY29udGV4dCkge1xuXG4gICAgdmFyIGlzU2ltcGxlU2VsZWN0b3IgPSByZVNpbXBsZVNlbGVjdG9yLnRlc3Qoc2VsZWN0b3IpO1xuXG4gICAgaWYgKGlzU2ltcGxlU2VsZWN0b3IgJiYgISQuaXNOYXRpdmUpIHtcbiAgICAgICAgaWYgKHNlbGVjdG9yWzBdID09PSAnIycpIHtcbiAgICAgICAgICAgIHZhciBlbGVtZW50ID0gKGNvbnRleHQuZ2V0RWxlbWVudEJ5SWQgPyBjb250ZXh0IDogZG9jdW1lbnQpLmdldEVsZW1lbnRCeUlkKHNlbGVjdG9yLnNsaWNlKDEpKTtcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50ID8gW2VsZW1lbnRdIDogW107XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNlbGVjdG9yWzBdID09PSAnLicpIHtcbiAgICAgICAgICAgIHJldHVybiBjb250ZXh0LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoc2VsZWN0b3Iuc2xpY2UoMSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb250ZXh0LmdldEVsZW1lbnRzQnlUYWdOYW1lKHNlbGVjdG9yKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29udGV4dC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcblxufVxuXG4vKlxuICogQ3JlYXRlIERPTSBmcmFnbWVudCBmcm9tIGFuIEhUTUwgc3RyaW5nXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBodG1sIFN0cmluZyByZXByZXNlbnRpbmcgSFRNTC5cbiAqIEByZXR1cm4ge05vZGVMaXN0fVxuICovXG5cbmZ1bmN0aW9uIGNyZWF0ZUZyYWdtZW50KGh0bWwpIHtcblxuICAgIGlmIChyZVNpbmdsZVRhZy50ZXN0KGh0bWwpKSB7XG4gICAgICAgIHJldHVybiBbZG9jdW1lbnQuY3JlYXRlRWxlbWVudChSZWdFeHAuJDEpXTtcbiAgICB9XG5cbiAgICB2YXIgZWxlbWVudHMgPSBbXSxcbiAgICAgICAgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXG4gICAgICAgIGNoaWxkcmVuID0gY29udGFpbmVyLmNoaWxkTm9kZXM7XG5cbiAgICBjb250YWluZXIuaW5uZXJIVE1MID0gaHRtbDtcblxuICAgIGZvciAodmFyIGkgPSAwLCBsID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGVsZW1lbnRzLnB1c2goY2hpbGRyZW5baV0pO1xuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50cztcbn1cblxuLypcbiAqIENhbGxpbmcgYCQoc2VsZWN0b3IpYCByZXR1cm5zIGEgd3JhcHBlZCBjb2xsZWN0aW9uIG9mIGVsZW1lbnRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge05vZGVMaXN0fEFycmF5fSBjb2xsZWN0aW9uIEVsZW1lbnQocykgdG8gd3JhcC5cbiAqIEByZXR1cm4gKE9iamVjdCkgVGhlIHdyYXBwZWQgY29sbGVjdGlvblxuICovXG5cbmZ1bmN0aW9uIHdyYXAoY29sbGVjdGlvbikge1xuXG4gICAgaWYgKCFpc1Byb3RvdHlwZVNldCkge1xuICAgICAgICBXcmFwcGVyLnByb3RvdHlwZSA9ICQuZm47XG4gICAgICAgIFdyYXBwZXIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gV3JhcHBlcjtcbiAgICAgICAgaXNQcm90b3R5cGVTZXQgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgV3JhcHBlcihjb2xsZWN0aW9uKTtcbn1cblxuLypcbiAqIENvbnN0cnVjdG9yIGZvciB0aGUgT2JqZWN0LnByb3RvdHlwZSBzdHJhdGVneVxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Tm9kZUxpc3R8QXJyYXl9IGNvbGxlY3Rpb24gRWxlbWVudChzKSB0byB3cmFwLlxuICovXG5cbmZ1bmN0aW9uIFdyYXBwZXIoY29sbGVjdGlvbikge1xuICAgIHZhciBpID0gMCwgbGVuZ3RoID0gY29sbGVjdGlvbi5sZW5ndGg7XG4gICAgZm9yICg7IGkgPCBsZW5ndGg7KSB7XG4gICAgICAgIHRoaXNbaV0gPSBjb2xsZWN0aW9uW2krK107XG4gICAgfVxuICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xufVxuXG4vKlxuICogRXhwb3J0IGludGVyZmFjZVxuICovXG5cbmV4cG9ydCB7ICQsIGZpbmQsIGNsb3Nlc3QsIG1hdGNoZXMgfTtcbiIsIi8qKlxuICogQG1vZHVsZSBTZWxlY3RvciAoZXh0cmEpXG4gKi9cblxuaW1wb3J0IHsgZWFjaCwgdG9BcnJheSB9IGZyb20gJy4vdXRpbCc7XG5pbXBvcnQgeyAkLCBtYXRjaGVzIH0gZnJvbSAnLi9zZWxlY3Rvcic7XG5cbi8qKlxuICogUmV0dXJuIGNoaWxkcmVuIG9mIGVhY2ggZWxlbWVudCBpbiB0aGUgY29sbGVjdGlvbiwgb3B0aW9uYWxseSBmaWx0ZXJlZCBieSBhIHNlbGVjdG9yLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBbc2VsZWN0b3JdIEZpbHRlclxuICogQHJldHVybiB7T2JqZWN0fSBOZXcgd3JhcHBlZCBjb2xsZWN0aW9uXG4gKiBAY2hhaW5hYmxlXG4gKiBAZXhhbXBsZVxuICogICAgICQoJy5zZWxlY3RvcicpLmNoaWxkcmVuKCk7XG4gKiAgICAgJCgnLnNlbGVjdG9yJykuY2hpbGRyZW4oJy5maWx0ZXInKTtcbiAqL1xuXG5mdW5jdGlvbiBjaGlsZHJlbihzZWxlY3Rvcikge1xuICAgIHZhciBub2RlcyA9IFtdO1xuICAgIGVhY2godGhpcywgZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICBpZihlbGVtZW50LmNoaWxkcmVuKSB7XG4gICAgICAgICAgICBlYWNoKGVsZW1lbnQuY2hpbGRyZW4sIGZ1bmN0aW9uKGNoaWxkKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFzZWxlY3RvciB8fCAoc2VsZWN0b3IgJiYgbWF0Y2hlcyhjaGlsZCwgc2VsZWN0b3IpKSkge1xuICAgICAgICAgICAgICAgICAgICBub2Rlcy5wdXNoKGNoaWxkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiAkKG5vZGVzKTtcbn1cblxuLyoqXG4gKiBSZXR1cm4gY2hpbGQgbm9kZXMgb2YgZWFjaCBlbGVtZW50IGluIHRoZSBjb2xsZWN0aW9uLCBpbmNsdWRpbmcgdGV4dCBhbmQgY29tbWVudCBub2Rlcy5cbiAqXG4gKiBAcmV0dXJuIHtPYmplY3R9IE5ldyB3cmFwcGVkIGNvbGxlY3Rpb25cbiAqIEBleGFtcGxlXG4gKiAgICAgJCgnLnNlbGVjdG9yJykuY29udGVudHMoKTtcbiAqL1xuXG5mdW5jdGlvbiBjb250ZW50cygpIHtcbiAgICB2YXIgbm9kZXMgPSBbXTtcbiAgICBlYWNoKHRoaXMsIGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgbm9kZXMucHVzaC5hcHBseShub2RlcywgdG9BcnJheShlbGVtZW50LmNoaWxkTm9kZXMpKTtcbiAgICB9KTtcbiAgICByZXR1cm4gJChub2Rlcyk7XG59XG5cbi8qKlxuICogUmV0dXJuIGEgY29sbGVjdGlvbiBjb250YWluaW5nIG9ubHkgdGhlIG9uZSBhdCB0aGUgc3BlY2lmaWVkIGluZGV4LlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBpbmRleFxuICogQHJldHVybiB7T2JqZWN0fSBOZXcgd3JhcHBlZCBjb2xsZWN0aW9uXG4gKiBAY2hhaW5hYmxlXG4gKiBAZXhhbXBsZVxuICogICAgICQoJy5pdGVtcycpLmVxKDEpXG4gKiAgICAg4p6kIFRoZSBzZWNvbmQgaXRlbTsgcmVzdWx0IGlzIHRoZSBzYW1lIGFzIGRvaW5nICQoJCgnLml0ZW1zJylbMV0pO1xuICovXG5cbmZ1bmN0aW9uIGVxKGluZGV4KSB7XG4gICAgcmV0dXJuIHNsaWNlLmNhbGwodGhpcywgaW5kZXgsIGluZGV4ICsgMSk7XG59XG5cbi8qKlxuICogUmV0dXJuIHRoZSBET00gZWxlbWVudCBhdCB0aGUgc3BlY2lmaWVkIGluZGV4LlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBpbmRleFxuICogQHJldHVybiB7Tm9kZX0gRWxlbWVudCBhdCB0aGUgc3BlY2lmaWVkIGluZGV4XG4gKiBAZXhhbXBsZVxuICogICAgICQoJy5pdGVtcycpLmdldCgxKVxuICogICAgIOKepCBUaGUgc2Vjb25kIGVsZW1lbnQ7IHJlc3VsdCBpcyB0aGUgc2FtZSBhcyBkb2luZyAkKCcuaXRlbXMnKVsxXTtcbiAqL1xuXG5mdW5jdGlvbiBnZXQoaW5kZXgpIHtcbiAgICByZXR1cm4gdGhpc1tpbmRleF07XG59XG5cbi8qKlxuICogUmV0dXJuIHRoZSBwYXJlbnQgZWxlbWVudHMgb2YgZWFjaCBlbGVtZW50IGluIHRoZSBjb2xsZWN0aW9uLCBvcHRpb25hbGx5IGZpbHRlcmVkIGJ5IGEgc2VsZWN0b3IuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IFtzZWxlY3Rvcl0gRmlsdGVyXG4gKiBAcmV0dXJuIHtPYmplY3R9IE5ldyB3cmFwcGVkIGNvbGxlY3Rpb25cbiAqIEBjaGFpbmFibGVcbiAqIEBleGFtcGxlXG4gKiAgICAgJCgnLnNlbGVjdG9yJykucGFyZW50KCk7XG4gKiAgICAgJCgnLnNlbGVjdG9yJykucGFyZW50KCcuZmlsdGVyJyk7XG4gKi9cblxuZnVuY3Rpb24gcGFyZW50KHNlbGVjdG9yKSB7XG4gICAgdmFyIG5vZGVzID0gW107XG4gICAgZWFjaCh0aGlzLCBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgIGlmICghc2VsZWN0b3IgfHwgKHNlbGVjdG9yICYmIG1hdGNoZXMoZWxlbWVudC5wYXJlbnROb2RlLCBzZWxlY3RvcikpKSB7XG4gICAgICAgICAgICBub2Rlcy5wdXNoKGVsZW1lbnQucGFyZW50Tm9kZSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gJChub2Rlcyk7XG59XG5cbi8qKlxuICogQ3JlYXRlIGEgbmV3LCBzbGljZWQgY29sbGVjdGlvbi5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gc3RhcnRcbiAqIEBwYXJhbSB7TnVtYmVyfSBlbmRcbiAqIEByZXR1cm4ge09iamVjdH0gTmV3IHdyYXBwZWQgY29sbGVjdGlvblxuICogQGV4YW1wbGVcbiAqICAgICAkKCcuaXRlbXMnKS5zbGljZSgxLCAzKVxuICogICAgIOKepCBOZXcgd3JhcHBlZCBjb2xsZWN0aW9uIGNvbnRhaW5pbmcgdGhlIHNlY29uZCwgdGhpcmQsIGFuZCBmb3VydGggZWxlbWVudC5cbiAqL1xuXG5mdW5jdGlvbiBzbGljZShzdGFydCwgZW5kKSB7XG4gICAgcmV0dXJuICQoW10uc2xpY2UuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG59XG5cbi8qXG4gKiBFeHBvcnQgaW50ZXJmYWNlXG4gKi9cblxuZXhwb3J0IHsgY2hpbGRyZW4sIGNvbnRlbnRzLCBlcSwgZ2V0LCBwYXJlbnQsIHNsaWNlIH07XG4iLCIvKipcbiAqIEBtb2R1bGUgdHJpZ2dlclxuICovXG5cbmltcG9ydCB7IGdsb2JhbCwgZWFjaCB9IGZyb20gJy4vdXRpbCc7XG5pbXBvcnQgeyAkLCBjbG9zZXN0IH0gZnJvbSAnLi9zZWxlY3Rvcic7XG5cbnZhciByZU1vdXNlRXZlbnQgPSAvXig/Om1vdXNlfHBvaW50ZXJ8Y29udGV4dG1lbnUpfGNsaWNrLyxcbiAgICByZUtleUV2ZW50ID0gL15rZXkvO1xuXG4vKipcbiAqIFRyaWdnZXIgZXZlbnQgYXQgZWxlbWVudChzKVxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIFR5cGUgb2YgdGhlIGV2ZW50XG4gKiBAcGFyYW0ge09iamVjdH0gZGF0YSBEYXRhIHRvIGJlIHNlbnQgd2l0aCB0aGUgZXZlbnQgKGBwYXJhbXMuZGV0YWlsYCB3aWxsIGJlIHNldCB0byB0aGlzKS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcGFyYW1zXSBFdmVudCBwYXJhbWV0ZXJzIChvcHRpb25hbClcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gcGFyYW1zLmJ1YmJsZXM9dHJ1ZSBEb2VzIHRoZSBldmVudCBidWJibGUgdXAgdGhyb3VnaCB0aGUgRE9NIG9yIG5vdC5cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gcGFyYW1zLmNhbmNlbGFibGU9dHJ1ZSBJcyB0aGUgZXZlbnQgY2FuY2VsYWJsZSBvciBub3QuXG4gKiBAcGFyYW0ge01peGVkfSBwYXJhbXMuZGV0YWlsPXVuZGVmaW5lZCBBZGRpdGlvbmFsIGluZm9ybWF0aW9uIGFib3V0IHRoZSBldmVudC5cbiAqIEByZXR1cm4ge09iamVjdH0gVGhlIHdyYXBwZWQgY29sbGVjdGlvblxuICogQGNoYWluYWJsZVxuICogQGV4YW1wbGVcbiAqICAgICAkKCcuaXRlbScpLnRyaWdnZXIoJ2FueUV2ZW50VHlwZScpO1xuICovXG5cbmZ1bmN0aW9uIHRyaWdnZXIodHlwZSwgZGF0YSwgcGFyYW1zID0ge30pIHtcblxuICAgIHBhcmFtcy5idWJibGVzID0gdHlwZW9mIHBhcmFtcy5idWJibGVzID09PSAnYm9vbGVhbicgPyBwYXJhbXMuYnViYmxlcyA6IHRydWU7XG4gICAgcGFyYW1zLmNhbmNlbGFibGUgPSB0eXBlb2YgcGFyYW1zLmNhbmNlbGFibGUgPT09ICdib29sZWFuJyA/IHBhcmFtcy5jYW5jZWxhYmxlIDogdHJ1ZTtcbiAgICBwYXJhbXMucHJldmVudERlZmF1bHQgPSB0eXBlb2YgcGFyYW1zLnByZXZlbnREZWZhdWx0ID09PSAnYm9vbGVhbicgPyBwYXJhbXMucHJldmVudERlZmF1bHQgOiBmYWxzZTtcbiAgICBwYXJhbXMuZGV0YWlsID0gZGF0YTtcblxuICAgIHZhciBFdmVudENvbnN0cnVjdG9yID0gZ2V0RXZlbnRDb25zdHJ1Y3Rvcih0eXBlKSxcbiAgICAgICAgZXZlbnQgPSBuZXcgRXZlbnRDb25zdHJ1Y3Rvcih0eXBlLCBwYXJhbXMpO1xuXG4gICAgZXZlbnQuX3ByZXZlbnREZWZhdWx0ID0gcGFyYW1zLnByZXZlbnREZWZhdWx0O1xuXG4gICAgZWFjaCh0aGlzLCBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgIGlmICghcGFyYW1zLmJ1YmJsZXMgfHwgaXNFdmVudEJ1YmJsaW5nSW5EZXRhY2hlZFRyZWUgfHwgaXNBdHRhY2hlZFRvRG9jdW1lbnQoZWxlbWVudCkpIHtcbiAgICAgICAgICAgIGRpc3BhdGNoRXZlbnQoZWxlbWVudCwgZXZlbnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdHJpZ2dlckZvclBhdGgoZWxlbWVudCwgdHlwZSwgcGFyYW1zKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiB0aGlzO1xufVxuXG5mdW5jdGlvbiBnZXRFdmVudENvbnN0cnVjdG9yKHR5cGUpIHtcbiAgICByZXR1cm4gc3VwcG9ydHNPdGhlckV2ZW50Q29uc3RydWN0b3JzID8gKHJlTW91c2VFdmVudC50ZXN0KHR5cGUpID8gTW91c2VFdmVudCA6IChyZUtleUV2ZW50LnRlc3QodHlwZSkgPyBLZXlib2FyZEV2ZW50IDogQ3VzdG9tRXZlbnQpKSA6IEN1c3RvbUV2ZW50O1xufVxuXG4vKipcbiAqIFRyaWdnZXIgZXZlbnQgYXQgZmlyc3QgZWxlbWVudCBpbiB0aGUgY29sbGVjdGlvbi4gU2ltaWxhciB0byBgdHJpZ2dlcigpYCwgZXhjZXB0OlxuICpcbiAqIC0gRXZlbnQgZG9lcyBub3QgYnViYmxlXG4gKiAtIERlZmF1bHQgZXZlbnQgYmVoYXZpb3IgaXMgcHJldmVudGVkXG4gKiAtIE9ubHkgdHJpZ2dlcnMgaGFuZGxlciBmb3IgZmlyc3QgbWF0Y2hpbmcgZWxlbWVudFxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIFR5cGUgb2YgdGhlIGV2ZW50XG4gKiBAcGFyYW0ge09iamVjdH0gZGF0YSBEYXRhIHRvIGJlIHNlbnQgd2l0aCB0aGUgZXZlbnRcbiAqIEBleGFtcGxlXG4gKiAgICAgJCgnZm9ybScpLnRyaWdnZXJIYW5kbGVyKCdzdWJtaXQnKTtcbiAqL1xuXG5mdW5jdGlvbiB0cmlnZ2VySGFuZGxlcih0eXBlLCBkYXRhKSB7XG4gICAgaWYgKHRoaXNbMF0pIHtcbiAgICAgICAgdHJpZ2dlci5jYWxsKHRoaXNbMF0sIHR5cGUsIGRhdGEsIHtidWJibGVzOiBmYWxzZSwgcHJldmVudERlZmF1bHQ6IHRydWV9KTtcbiAgICB9XG59XG5cbi8qKlxuICogQ2hlY2sgd2hldGhlciB0aGUgZWxlbWVudCBpcyBhdHRhY2hlZCB0byAob3IgZGV0YWNoZWQgZnJvbSkgdGhlIGRvY3VtZW50XG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Tm9kZX0gZWxlbWVudCBFbGVtZW50IHRvIHRlc3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cblxuZnVuY3Rpb24gaXNBdHRhY2hlZFRvRG9jdW1lbnQoZWxlbWVudCkge1xuICAgIGlmIChlbGVtZW50ID09PSB3aW5kb3cgfHwgZWxlbWVudCA9PT0gZG9jdW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiAkLmNvbnRhaW5zKGVsZW1lbnQub3duZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIGVsZW1lbnQpO1xufVxuXG4vKipcbiAqIERpc3BhdGNoIHRoZSBldmVudCBhdCB0aGUgZWxlbWVudCBhbmQgaXRzIGFuY2VzdG9ycy5cbiAqIFJlcXVpcmVkIHRvIHN1cHBvcnQgZGVsZWdhdGVkIGV2ZW50cyBpbiBicm93c2VycyB0aGF0IGRvbid0IGJ1YmJsZSBldmVudHMgaW4gZGV0YWNoZWQgRE9NIHRyZWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge05vZGV9IGVsZW1lbnQgRmlyc3QgZWxlbWVudCB0byBkaXNwYXRjaCB0aGUgZXZlbnQgYXRcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIFR5cGUgb2YgdGhlIGV2ZW50XG4gKiBAcGFyYW0ge09iamVjdH0gW3BhcmFtc10gRXZlbnQgcGFyYW1ldGVycyAob3B0aW9uYWwpXG4gKiBAcGFyYW0ge0Jvb2xlYW59IHBhcmFtcy5idWJibGVzPXRydWUgRG9lcyB0aGUgZXZlbnQgYnViYmxlIHVwIHRocm91Z2ggdGhlIERPTSBvciBub3QuXG4gKiBXaWxsIGJlIHNldCB0byBmYWxzZSAoYnV0IHNob3VsZG4ndCBtYXR0ZXIgc2luY2UgZXZlbnRzIGRvbid0IGJ1YmJsZSBhbnl3YXkpLlxuICogQHBhcmFtIHtCb29sZWFufSBwYXJhbXMuY2FuY2VsYWJsZT10cnVlIElzIHRoZSBldmVudCBjYW5jZWxhYmxlIG9yIG5vdC5cbiAqIEBwYXJhbSB7TWl4ZWR9IHBhcmFtcy5kZXRhaWw9dW5kZWZpbmVkIEFkZGl0aW9uYWwgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGV2ZW50LlxuICovXG5cbmZ1bmN0aW9uIHRyaWdnZXJGb3JQYXRoKGVsZW1lbnQsIHR5cGUsIHBhcmFtcyA9IHt9KSB7XG4gICAgcGFyYW1zLmJ1YmJsZXMgPSBmYWxzZTtcbiAgICB2YXIgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQodHlwZSwgcGFyYW1zKTtcbiAgICBldmVudC5fdGFyZ2V0ID0gZWxlbWVudDtcbiAgICBkbyB7XG4gICAgICAgIGRpc3BhdGNoRXZlbnQoZWxlbWVudCwgZXZlbnQpO1xuICAgIH0gd2hpbGUgKGVsZW1lbnQgPSBlbGVtZW50LnBhcmVudE5vZGUpO1xufVxuXG4vKipcbiAqIERpc3BhdGNoIGV2ZW50IHRvIGVsZW1lbnQsIGJ1dCBjYWxsIGRpcmVjdCBldmVudCBtZXRob2RzIGluc3RlYWQgaWYgYXZhaWxhYmxlXG4gKiAoZS5nLiBcImJsdXIoKVwiLCBcInN1Ym1pdCgpXCIpIGFuZCBpZiB0aGUgZXZlbnQgaXMgbm9uLWNhbmNlbGFibGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Tm9kZX0gZWxlbWVudCBFbGVtZW50IHRvIGRpc3BhdGNoIHRoZSBldmVudCBhdFxuICogQHBhcmFtIHtPYmplY3R9IGV2ZW50IEV2ZW50IHRvIGRpc3BhdGNoXG4gKi9cblxudmFyIGRpcmVjdEV2ZW50TWV0aG9kcyA9IFsnYmx1cicsICdmb2N1cycsICdzZWxlY3QnLCAnc3VibWl0J107XG5cbmZ1bmN0aW9uIGRpc3BhdGNoRXZlbnQoZWxlbWVudCwgZXZlbnQpIHtcbiAgICBpZihkaXJlY3RFdmVudE1ldGhvZHMuaW5kZXhPZihldmVudC50eXBlKSAhPT0gLTEgJiYgdHlwZW9mIGVsZW1lbnRbZXZlbnQudHlwZV0gPT09ICdmdW5jdGlvbicgJiYgIWV2ZW50Ll9wcmV2ZW50RGVmYXVsdCAmJiAhZXZlbnQuY2FuY2VsYWJsZSkge1xuICAgICAgICBlbGVtZW50W2V2ZW50LnR5cGVdKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZWxlbWVudC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICB9XG59XG5cbi8qKlxuICogUG9seWZpbGwgZm9yIEN1c3RvbUV2ZW50LCBib3Jyb3dlZCBmcm9tIFtNRE5dKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9DdXN0b21FdmVudCNQb2x5ZmlsbCkuXG4gKiBOZWVkZWQgdG8gc3VwcG9ydCBJRSAoOSwgMTAsIDExKSAmIFBoYW50b21KU1xuICovXG5cbihmdW5jdGlvbigpIHtcbiAgICBmdW5jdGlvbiBDdXN0b21FdmVudChldmVudCwgcGFyYW1zID0geyBidWJibGVzOiBmYWxzZSwgY2FuY2VsYWJsZTogZmFsc2UsIGRldGFpbDogdW5kZWZpbmVkIH0pIHtcbiAgICAgICAgdmFyIGN1c3RvbUV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0N1c3RvbUV2ZW50Jyk7XG4gICAgICAgIGN1c3RvbUV2ZW50LmluaXRDdXN0b21FdmVudChldmVudCwgcGFyYW1zLmJ1YmJsZXMsIHBhcmFtcy5jYW5jZWxhYmxlLCBwYXJhbXMuZGV0YWlsKTtcbiAgICAgICAgcmV0dXJuIGN1c3RvbUV2ZW50O1xuICAgIH1cblxuICAgIEN1c3RvbUV2ZW50LnByb3RvdHlwZSA9IGdsb2JhbC5DdXN0b21FdmVudCAmJiBnbG9iYWwuQ3VzdG9tRXZlbnQucHJvdG90eXBlO1xuICAgIGdsb2JhbC5DdXN0b21FdmVudCA9IEN1c3RvbUV2ZW50O1xuXG59KSgpO1xuXG4vKlxuICogQXJlIGV2ZW50cyBidWJibGluZyBpbiBkZXRhY2hlZCBET00gdHJlZXM/XG4gKiBAcHJpdmF0ZVxuICovXG5cbnZhciBpc0V2ZW50QnViYmxpbmdJbkRldGFjaGVkVHJlZSA9IChmdW5jdGlvbigpIHtcbiAgICB2YXIgaXNCdWJibGluZyA9IGZhbHNlLFxuICAgICAgICBkb2MgPSBnbG9iYWwuZG9jdW1lbnQ7XG4gICAgaWYgKGRvYykge1xuICAgICAgICB2YXIgcGFyZW50ID0gZG9jLmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxuICAgICAgICAgICAgY2hpbGQgPSBwYXJlbnQuY2xvbmVOb2RlKCk7XG4gICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChjaGlsZCk7XG4gICAgICAgIHBhcmVudC5hZGRFdmVudExpc3RlbmVyKCdlJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpc0J1YmJsaW5nID0gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNoaWxkLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdlJywgeyBidWJibGVzOiB0cnVlIH0pKTtcbiAgICB9XG4gICAgcmV0dXJuIGlzQnViYmxpbmc7XG59KSgpO1xuXG52YXIgc3VwcG9ydHNPdGhlckV2ZW50Q29uc3RydWN0b3JzID0gKGZ1bmN0aW9uKCkge1xuICAgIHRyeSB7XG4gICAgICAgIG5ldyB3aW5kb3cuTW91c2VFdmVudCgnY2xpY2snKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59KSgpO1xuXG4vKlxuICogRXhwb3J0IGludGVyZmFjZVxuICovXG5cbmV4cG9ydCB7IHRyaWdnZXIsIHRyaWdnZXJIYW5kbGVyIH07XG4iLCIvKipcbiAqIEBtb2R1bGUgVHlwZVxuICovXG5cbi8qXG4gKiBEZXRlcm1pbmUgaWYgdGhlIGFyZ3VtZW50IHBhc3NlZCBpcyBhIEphdmFzY3JpcHQgZnVuY3Rpb24gb2JqZWN0LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqXSBPYmplY3QgdG8gdGVzdCB3aGV0aGVyIG9yIG5vdCBpdCBpcyBhIGZ1bmN0aW9uLlxuICogQHJldHVybiB7Ym9vbGVhbn0gXG4gKiBAZXhhbXBsZVxuICogICAgICQuaXNGdW5jdGlvbihmdW5jdGlvbigpe30pO1xuICogICAgIOKepCB0cnVlXG4gKiBAZXhhbXBsZVxuICogICAgICQuaXNGdW5jdGlvbih7fSk7XG4gKiAgICAg4p6kIGZhbHNlXG4gKi9cblxuZnVuY3Rpb24gaXNGdW5jdGlvbihvYmopIHtcbiAgICByZXR1cm4gKHR5cGVvZiBvYmogPT09ICdmdW5jdGlvbicpO1xufVxuXG4vKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGFyZ3VtZW50IGlzIGFuIGFycmF5LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqXSBPYmplY3QgdG8gdGVzdCB3aGV0aGVyIG9yIG5vdCBpdCBpcyBhbiBhcnJheS5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IFxuICogQGV4YW1wbGVcbiAqICAgICAkLmlzQXJyYXkoW10pO1xuICogICAgIOKepCB0cnVlXG4gKiBAZXhhbXBsZVxuICogICAgICQuaXNBcnJheSh7fSk7XG4gKiAgICAg4p6kIGZhbHNlXG4gKi9cblxudmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5O1xuXG4vKlxuICogRXhwb3J0IGludGVyZmFjZVxuICovXG5cbmV4cG9ydCB7IGlzRnVuY3Rpb24sIGlzQXJyYXkgfTtcbiIsIi8qXG4gKiBAbW9kdWxlIFV0aWxcbiAqL1xuXG4vKlxuICogUmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgc2NvcGVcbiAqIEBwcml2YXRlXG4gKi9cblxudmFyIGdsb2JhbCA9IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG5cbi8qKlxuICogQ29udmVydCBgTm9kZUxpc3RgIHRvIGBBcnJheWAuXG4gKlxuICogQHBhcmFtIHtOb2RlTGlzdHxBcnJheX0gY29sbGVjdGlvblxuICogQHJldHVybiB7QXJyYXl9XG4gKiBAcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHRvQXJyYXkoY29sbGVjdGlvbikge1xuICAgIHZhciBsZW5ndGggPSBjb2xsZWN0aW9uLmxlbmd0aCxcbiAgICAgICAgcmVzdWx0ID0gbmV3IEFycmF5KGxlbmd0aCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICByZXN1bHRbaV0gPSBjb2xsZWN0aW9uW2ldO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIFJldHVybiBzb21ldGhpbmcgdGhhdCBjYW4gYmUgaXRlcmF0ZWQgb3ZlciAoZS5nLiB1c2luZyBgZm9yRWFjaGApLlxuICogQXJyYXlzIGFuZCBOb2RlTGlzdHMgYXJlIHJldHVybmVkIGFzLWlzLCBidXQgYSBOb2RlIHdpbGwgYmUgd3JhcHBlZCBpbiBhIGBbXWAuXG4gKlxuICogQHBhcmFtIHtOb2RlfE5vZGVMaXN0fEFycmF5fSBlbGVtZW50XG4gKiBAcmV0dXJuIHtBcnJheXxOb2RlTGlzdH1cbiAqIEBwcml2YXRlXG4gKi9cblxudmFyIG1ha2VJdGVyYWJsZSA9IChlbGVtZW50KSA9PiBlbGVtZW50Lm5vZGVUeXBlIHx8IGVsZW1lbnQgPT09IHdpbmRvdyA/IFtlbGVtZW50XSA6IGVsZW1lbnQ7XG5cbi8qKlxuICogRmFzdGVyIGFsdGVybmF0aXZlIHRvIFtdLmZvckVhY2ggbWV0aG9kXG4gKlxuICogQHBhcmFtIHtOb2RlfE5vZGVMaXN0fEFycmF5fSBjb2xsZWN0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHJldHVybiB7Tm9kZXxOb2RlTGlzdHxBcnJheX1cbiAqIEBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gZWFjaChjb2xsZWN0aW9uLCBjYWxsYmFjaywgdGhpc0FyZykge1xuICAgIHZhciBsZW5ndGggPSBjb2xsZWN0aW9uLmxlbmd0aDtcbiAgICBpZiAobGVuZ3RoICE9PSB1bmRlZmluZWQgJiYgY29sbGVjdGlvbi5ub2RlVHlwZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgY2FsbGJhY2suY2FsbCh0aGlzQXJnLCBjb2xsZWN0aW9uW2ldLCBpLCBjb2xsZWN0aW9uKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGNhbGxiYWNrLmNhbGwodGhpc0FyZywgY29sbGVjdGlvbiwgMCwgY29sbGVjdGlvbik7XG4gICAgfVxuICAgIHJldHVybiBjb2xsZWN0aW9uO1xufVxuXG4vKipcbiAqIEFzc2lnbiBlbnVtZXJhYmxlIHByb3BlcnRpZXMgZnJvbSBzb3VyY2Ugb2JqZWN0KHMpIHRvIHRhcmdldCBvYmplY3RcbiAqXG4gKiBAbWV0aG9kIGV4dGVuZFxuICogQHBhcmFtIHtPYmplY3R9IHRhcmdldCBPYmplY3QgdG8gZXh0ZW5kXG4gKiBAcGFyYW0ge09iamVjdH0gW3NvdXJjZV0gT2JqZWN0IHRvIGV4dGVuZCBmcm9tXG4gKiBAcmV0dXJuIHtPYmplY3R9IEV4dGVuZGVkIG9iamVjdFxuICogQGV4YW1wbGVcbiAqICAgICAkLmV4dGVuZCh7YTogMX0sIHtiOiAyfSk7XG4gKiAgICAg4p6kIHthOiAxLCBiOiAyfVxuICogQGV4YW1wbGVcbiAqICAgICAkLmV4dGVuZCh7YTogMX0sIHtiOiAyfSwge2E6IDN9KTtcbiAqICAgICDinqQge2E6IDMsIGI6IDJ9XG4gKi9cblxuZnVuY3Rpb24gZXh0ZW5kKHRhcmdldCwgLi4uc291cmNlcykge1xuICAgIHNvdXJjZXMuZm9yRWFjaChmdW5jdGlvbihzcmMpIHtcbiAgICAgICAgaWYgKHNyYykge1xuICAgICAgICAgICAgZm9yICh2YXIgcHJvcCBpbiBzcmMpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRbcHJvcF0gPSBzcmNbcHJvcF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gdGFyZ2V0O1xufVxuXG4vKipcbiAqIEFzc2lnbiBhbGwgcHJvcGVydGllcyAoaW5jbHVkaW5nIG5vbi1lbnVtZXJhYmxlKSBmcm9tIHNvdXJjZSBvYmplY3QocykgdG8gdGFyZ2V0IG9iamVjdFxuICpcbiAqIEBtZXRob2QgZXh0ZW5kTW9yZVxuICogQHBhcmFtIHtPYmplY3R9IHRhcmdldCBPYmplY3QgdG8gZXh0ZW5kXG4gKiBAcGFyYW0ge09iamVjdH0gW3NvdXJjZV0gT2JqZWN0IHRvIGV4dGVuZCBmcm9tXG4gKiBAcmV0dXJuIHtPYmplY3R9IEV4dGVuZGVkIG9iamVjdFxuICovXG5cbmZ1bmN0aW9uIGV4dGVuZEFsbCh0YXJnZXQsIC4uLnNvdXJjZXMpIHtcbiAgICBzb3VyY2VzLmZvckVhY2goZnVuY3Rpb24oc3JjKSB7XG4gICAgICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHNyYykuZm9yRWFjaChmdW5jdGlvbihwcm9wKSB7XG4gICAgICAgICAgICB0YXJnZXRbcHJvcF0gPSBzcmNbcHJvcF07XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiB0YXJnZXQ7XG59XG5cbi8qXG4gKiBFeHBvcnQgaW50ZXJmYWNlXG4gKi9cblxuZXhwb3J0IHsgZ2xvYmFsLCB0b0FycmF5LCBtYWtlSXRlcmFibGUsIGVhY2gsIGV4dGVuZCwgZXh0ZW5kQWxsIH07XG4iXX0=
