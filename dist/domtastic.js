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
var $__util__;
var toArray = require("./util").toArray;
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


},{"./util":19}],8:[function(require,module,exports){
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
  if (value == null) {
    return this[0].textContent;
  }
  each(this, function(element) {
    element.textContent = '' + value;
  });
  return this;
}
function val(value) {
  if (value == null) {
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
      noop = (function() {}),
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
            return originalMethod.apply(this, arguments);
          };
          event[testMethodName] = returnFalse;
        }(methodName, eventMethods[methodName], event[methodName] || noop));
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
      _matches = context.matches || context.matchesSelector || context.mozMatchesSelector || context.webkitMatchesSelector || context.msMatchesSelector || context.oMatchesSelector;
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
var closest = require("./selector").closest;
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
  return !supportsOtherEventConstructors ? CustomEvent : reMouseEvent.test(type) ? MouseEvent : reKeyEvent.test(type) ? KeyboardEvent : CustomEvent;
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
      result = Array(length);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvaG9tZS90cmF2aXMvYnVpbGQvd2VicHJvL0RPTXRhc3RpYy9zcmMvYXJyYXkuanMiLCIvaG9tZS90cmF2aXMvYnVpbGQvd2VicHJvL0RPTXRhc3RpYy9zcmMvYXR0ci5qcyIsIi9ob21lL3RyYXZpcy9idWlsZC93ZWJwcm8vRE9NdGFzdGljL3NyYy9jbGFzcy5qcyIsIi9ob21lL3RyYXZpcy9idWlsZC93ZWJwcm8vRE9NdGFzdGljL3NyYy9jb250YWlucy5qcyIsIi9ob21lL3RyYXZpcy9idWlsZC93ZWJwcm8vRE9NdGFzdGljL3NyYy9jc3MuanMiLCIvaG9tZS90cmF2aXMvYnVpbGQvd2VicHJvL0RPTXRhc3RpYy9zcmMvZGF0YS5qcyIsIi9ob21lL3RyYXZpcy9idWlsZC93ZWJwcm8vRE9NdGFzdGljL3NyYy9kb20uanMiLCIvaG9tZS90cmF2aXMvYnVpbGQvd2VicHJvL0RPTXRhc3RpYy9zcmMvZG9tX2V4dHJhLmpzIiwiL2hvbWUvdHJhdmlzL2J1aWxkL3dlYnByby9ET010YXN0aWMvc3JjL2V2ZW50LmpzIiwiL2hvbWUvdHJhdmlzL2J1aWxkL3dlYnByby9ET010YXN0aWMvc3JjL2h0bWwuanMiLCIvaG9tZS90cmF2aXMvYnVpbGQvd2VicHJvL0RPTXRhc3RpYy9zcmMvaW5kZXguZnVsbC5qcyIsIi9ob21lL3RyYXZpcy9idWlsZC93ZWJwcm8vRE9NdGFzdGljL3NyYy9tb2RlLmpzIiwiL2hvbWUvdHJhdmlzL2J1aWxkL3dlYnByby9ET010YXN0aWMvc3JjL25vY29uZmxpY3QuanMiLCIvaG9tZS90cmF2aXMvYnVpbGQvd2VicHJvL0RPTXRhc3RpYy9zcmMvcmVhZHkuanMiLCIvaG9tZS90cmF2aXMvYnVpbGQvd2VicHJvL0RPTXRhc3RpYy9zcmMvc2VsZWN0b3IuanMiLCIvaG9tZS90cmF2aXMvYnVpbGQvd2VicHJvL0RPTXRhc3RpYy9zcmMvc2VsZWN0b3JfZXh0cmEuanMiLCIvaG9tZS90cmF2aXMvYnVpbGQvd2VicHJvL0RPTXRhc3RpYy9zcmMvdHJpZ2dlci5qcyIsIi9ob21lL3RyYXZpcy9idWlsZC93ZWJwcm8vRE9NdGFzdGljL3NyYy90eXBlLmpzIiwiL2hvbWUvdHJhdmlzL2J1aWxkL3dlYnByby9ET010YXN0aWMvc3JjL3V0aWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNJQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFpQixRQUFJO0FBQUcsVUFBTTs7QUFDckIsSUFBQTtBQUFHLFVBQU07QUFFbEIsQUFBSSxFQUFBLENBQUEsVUFBUyxFQUFJLENBQUEsS0FBSSxVQUFVLENBQUM7QUFlaEMsQUFBSSxFQUFBLENBQUEsS0FBSSxFQUFJLENBQUEsVUFBUyxNQUFNLENBQUM7QUFpQjVCLE9BQVMsT0FBSyxDQUFFLFFBQU8sQ0FBRyxDQUFBLE9BQU0sQ0FBRztBQUMvQixBQUFJLElBQUEsQ0FBQSxRQUFPLEVBQUksQ0FBQSxNQUFPLFNBQU8sQ0FBQSxHQUFNLFdBQVMsQ0FBQSxDQUFJLFNBQU8sRUFBSSxVQUFTLE9BQU0sQ0FBRztBQUN6RSxTQUFPLENBQUEsT0FBTSxBQUFDLENBQUMsT0FBTSxDQUFHLFNBQU8sQ0FBQyxDQUFDO0VBQ3JDLENBQUM7QUFDRCxPQUFPLENBQUEsQ0FBQSxBQUFDLENBQUMsVUFBUyxPQUFPLEtBQUssQUFBQyxDQUFDLElBQUcsQ0FBRyxTQUFPLENBQUcsUUFBTSxDQUFDLENBQUMsQ0FBQztBQUM3RDtBQUFBLEFBZUEsT0FBUyxRQUFNLENBQUUsUUFBTyxDQUFHLENBQUEsT0FBTSxDQUFHO0FBQ2hDLE9BQU8sQ0FBQSxLQUFJLEFBQUMsQ0FBQyxJQUFHLENBQUcsU0FBTyxDQUFHLFFBQU0sQ0FBQyxDQUFDO0FBQ3pDO0FBQUEsQUFFSSxFQUFBLENBQUEsSUFBRyxFQUFJLFFBQU0sQ0FBQztBQVlsQixBQUFJLEVBQUEsQ0FBQSxPQUFNLEVB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dW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLyoqXG4gKiBAbW9kdWxlIEFycmF5XG4gKi9cblxuaW1wb3J0IHsgZWFjaCBhcyBfZWFjaCwgdG9BcnJheSB9IGZyb20gJy4vdXRpbCc7XG5pbXBvcnQgeyAkLCBtYXRjaGVzIH0gZnJvbSAnLi9zZWxlY3Rvcic7XG5cbnZhciBBcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlO1xuXG4vKipcbiAqIENoZWNrcyBpZiB0aGUgZ2l2ZW4gY2FsbGJhY2sgcmV0dXJucyBhIHRydWUoLWlzaCkgdmFsdWUgZm9yIGVhY2ggZWxlbWVudCBpbiB0aGUgY29sbGVjdGlvbi5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBGdW5jdGlvbiB0byBleGVjdXRlIGZvciBlYWNoIGVsZW1lbnQsIGludm9rZWQgd2l0aCBgZWxlbWVudGAgYXMgYXJndW1lbnQuXG4gKiBAcGFyYW0ge09iamVjdH0gW3RoaXNBcmddIFZhbHVlIHRvIHVzZSBhcyBgdGhpc2Agd2hlbiBleGVjdXRpbmcgYGNhbGxiYWNrYC5cbiAqIEByZXR1cm4ge0Jvb2xlYW59IFdoZXRoZXIgZWFjaCBlbGVtZW50IHBhc3NlZCB0aGUgY2FsbGJhY2sgY2hlY2suXG4gKiBAZXhhbXBsZVxuICogICAgICQoJy5pdGVtcycpLmV2ZXJ5KGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAqICAgICAgICAgcmV0dXJuIGVsZW1lbnQuaGFzQXR0cmlidXRlKCdhY3RpdmUnKVxuICogICAgIH0pO1xuICogICAgIOKepCB0cnVlL2ZhbHNlXG4gKi9cblxudmFyIGV2ZXJ5ID0gQXJyYXlQcm90by5ldmVyeTtcblxuLyoqXG4gKiBGaWx0ZXIgdGhlIGNvbGxlY3Rpb24gYnkgc2VsZWN0b3Igb3IgZnVuY3Rpb24sIGFuZCByZXR1cm4gYSBuZXcgY29sbGVjdGlvbiB3aXRoIHRoZSByZXN1bHQuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd8RnVuY3Rpb259IHNlbGVjdG9yIFNlbGVjdG9yIG9yIGZ1bmN0aW9uIHRvIGZpbHRlciB0aGUgY29sbGVjdGlvbi5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbdGhpc0FyZ10gVmFsdWUgdG8gdXNlIGFzIGB0aGlzYCB3aGVuIGV4ZWN1dGluZyBgY2FsbGJhY2tgLlxuICogQHJldHVybiB7T2JqZWN0fSBBIG5ldyB3cmFwcGVkIGNvbGxlY3Rpb25cbiAqIEBjaGFpbmFibGVcbiAqIEBleGFtcGxlXG4gKiAgICAgJCgnLml0ZW1zJykuZmlsdGVyKCcuYWN0aXZlJyk7XG4gKiBAZXhhbXBsZVxuICogICAgICQoJy5pdGVtcycpLmZpbHRlcihmdW5jdGlvbihlbGVtZW50KSB7XG4gKiAgICAgICAgIHJldHVybiBlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnYWN0aXZlJylcbiAqICAgICB9KTtcbiAqL1xuXG5mdW5jdGlvbiBmaWx0ZXIoc2VsZWN0b3IsIHRoaXNBcmcpIHtcbiAgICB2YXIgY2FsbGJhY2sgPSB0eXBlb2Ygc2VsZWN0b3IgPT09ICdmdW5jdGlvbicgPyBzZWxlY3RvciA6IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIG1hdGNoZXMoZWxlbWVudCwgc2VsZWN0b3IpO1xuICAgIH07XG4gICAgcmV0dXJuICQoQXJyYXlQcm90by5maWx0ZXIuY2FsbCh0aGlzLCBjYWxsYmFjaywgdGhpc0FyZykpO1xufVxuXG4vKipcbiAqIEV4ZWN1dGUgYSBmdW5jdGlvbiBmb3IgZWFjaCBlbGVtZW50IGluIHRoZSBjb2xsZWN0aW9uLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIEZ1bmN0aW9uIHRvIGV4ZWN1dGUgZm9yIGVhY2ggZWxlbWVudCwgaW52b2tlZCB3aXRoIGBlbGVtZW50YCBhcyBhcmd1bWVudC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbdGhpc0FyZ10gVmFsdWUgdG8gdXNlIGFzIGB0aGlzYCB3aGVuIGV4ZWN1dGluZyBgY2FsbGJhY2tgLlxuICogQHJldHVybiB7T2JqZWN0fSBUaGUgd3JhcHBlZCBjb2xsZWN0aW9uXG4gKiBAY2hhaW5hYmxlXG4gKiBAZXhhbXBsZVxuICogICAgICQoJy5pdGVtcycpLmZvckVhY2goZnVuY3Rpb24oZWxlbWVudCkge1xuICogICAgICAgICBlbGVtZW50LnN0eWxlLmNvbG9yID0gJ2V2ZXJncmVlbic7XG4gKiAgICAgKTtcbiAqL1xuXG5mdW5jdGlvbiBmb3JFYWNoKGNhbGxiYWNrLCB0aGlzQXJnKSB7XG4gICAgcmV0dXJuIF9lYWNoKHRoaXMsIGNhbGxiYWNrLCB0aGlzQXJnKTtcbn1cblxudmFyIGVhY2ggPSBmb3JFYWNoO1xuXG4vKipcbiAqIFJldHVybnMgdGhlIGluZGV4IG9mIGFuIGVsZW1lbnQgaW4gdGhlIGNvbGxlY3Rpb24uXG4gKlxuICogQHBhcmFtIHtOb2RlfSBlbGVtZW50XG4gKiBAcmV0dXJuIHtOdW1iZXJ9IFRoZSB6ZXJvLWJhc2VkIGluZGV4LCAtMSBpZiBub3QgZm91bmQuXG4gKiBAZXhhbXBsZVxuICogICAgICQoJy5pdGVtcycpLmluZGV4T2YoZWxlbWVudCk7XG4gKiAgICAg4p6kIDJcbiAqL1xuXG52YXIgaW5kZXhPZiA9IEFycmF5UHJvdG8uaW5kZXhPZjtcblxuLyoqXG4gKiBDcmVhdGUgYSBuZXcgY29sbGVjdGlvbiBieSBleGVjdXRpbmcgdGhlIGNhbGxiYWNrIGZvciBlYWNoIGVsZW1lbnQgaW4gdGhlIGNvbGxlY3Rpb24uXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgRnVuY3Rpb24gdG8gZXhlY3V0ZSBmb3IgZWFjaCBlbGVtZW50LCBpbnZva2VkIHdpdGggYGVsZW1lbnRgIGFzIGFyZ3VtZW50LlxuICogQHBhcmFtIHtPYmplY3R9IFt0aGlzQXJnXSBWYWx1ZSB0byB1c2UgYXMgYHRoaXNgIHdoZW4gZXhlY3V0aW5nIGBjYWxsYmFja2AuXG4gKiBAcmV0dXJuIHtBcnJheX0gQ29sbGVjdGlvbiB3aXRoIHRoZSByZXR1cm4gdmFsdWUgb2YgdGhlIGV4ZWN1dGVkIGNhbGxiYWNrIGZvciBlYWNoIGVsZW1lbnQuXG4gKiBAZXhhbXBsZVxuICogICAgICQoJy5pdGVtcycpLm1hcChmdW5jdGlvbihlbGVtZW50KSB7XG4gKiAgICAgICAgIHJldHVybiBlbGVtZW50LmdldEF0dHJpYnV0ZSgnbmFtZScpXG4gKiAgICAgfSk7XG4gKiAgICAg4p6kIFsnZXZlcicsICdncmVlbiddXG4gKi9cblxudmFyIG1hcCA9IEFycmF5UHJvdG8ubWFwO1xuXG4vKipcbiAqIFJlbW92ZXMgdGhlIGxhc3QgZWxlbWVudCBmcm9tIHRoZSBjb2xsZWN0aW9uLCBhbmQgcmV0dXJucyB0aGF0IGVsZW1lbnQuXG4gKlxuICogQHJldHVybiB7T2JqZWN0fSBUaGUgbGFzdCBlbGVtZW50IGZyb20gdGhlIGNvbGxlY3Rpb24uXG4gKiBAZXhhbXBsZVxuICogICAgIHZhciBsYXN0RWxlbWVudCA9ICQoJy5pdGVtcycpLnBvcCgpO1xuICovXG5cbnZhciBwb3AgPSBBcnJheVByb3RvLnBvcDtcblxuLyoqXG4gKiBBZGRzIG9uZSBvciBtb3JlIGVsZW1lbnRzIHRvIHRoZSBlbmQgb2YgdGhlIGNvbGxlY3Rpb24sIGFuZCByZXR1cm5zIHRoZSBuZXcgbGVuZ3RoIG9mIHRoZSBjb2xsZWN0aW9uLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBlbGVtZW50IEVsZW1lbnQocykgdG8gYWRkIHRvIHRoZSBjb2xsZWN0aW9uXG4gKiBAcmV0dXJuIHtOdW1iZXJ9IFRoZSBuZXcgbGVuZ3RoIG9mIHRoZSBjb2xsZWN0aW9uXG4gKiBAZXhhbXBsZVxuICogICAgICQoJy5pdGVtcycpLnB1c2goZWxlbWVudCk7XG4gKi9cblxudmFyIHB1c2ggPSBBcnJheVByb3RvLnB1c2g7XG5cbi8qKlxuICogUmV2ZXJzZXMgYW4gYXJyYXkgaW4gcGxhY2UuIFRoZSBmaXJzdCBhcnJheSBlbGVtZW50IGJlY29tZXMgdGhlIGxhc3QgYW5kIHRoZSBsYXN0IGJlY29tZXMgdGhlIGZpcnN0LlxuICpcbiAqIEByZXR1cm4ge09iamVjdH0gVGhlIHdyYXBwZWQgY29sbGVjdGlvbiwgcmV2ZXJzZWRcbiAqIEBjaGFpbmFibGVcbiAqIEBleGFtcGxlXG4gKiAgICAgJCgnLml0ZW1zJykucmV2ZXJzZSgpO1xuICovXG5cbmZ1bmN0aW9uIHJldmVyc2UoKSB7XG4gICAgcmV0dXJuICQodG9BcnJheSh0aGlzKS5yZXZlcnNlKCkpO1xufVxuXG4vKipcbiAqIFJlbW92ZXMgdGhlIGZpcnN0IGVsZW1lbnQgZnJvbSB0aGUgY29sbGVjdGlvbiwgYW5kIHJldHVybnMgdGhhdCBlbGVtZW50LlxuICpcbiAqIEByZXR1cm4ge09iamVjdH0gVGhlIGZpcnN0IGVsZW1lbnQgZnJvbSB0aGUgY29sbGVjdGlvbi5cbiAqIEBleGFtcGxlXG4gKiAgICAgdmFyIGZpcnN0RWxlbWVudCA9ICQoJy5pdGVtcycpLnNoaWZ0KCk7XG4gKi9cblxudmFyIHNoaWZ0ID0gQXJyYXlQcm90by5zaGlmdDtcblxuLyoqXG4gKiBDaGVja3MgaWYgdGhlIGdpdmVuIGNhbGxiYWNrIHJldHVybnMgYSB0cnVlKC1pc2gpIHZhbHVlIGZvciBhbnkgb2YgdGhlIGVsZW1lbnRzIGluIHRoZSBjb2xsZWN0aW9uLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIEZ1bmN0aW9uIHRvIGV4ZWN1dGUgZm9yIGVhY2ggZWxlbWVudCwgaW52b2tlZCB3aXRoIGBlbGVtZW50YCBhcyBhcmd1bWVudC5cbiAqIEByZXR1cm4ge0Jvb2xlYW59IFdoZXRoZXIgYW55IGVsZW1lbnQgcGFzc2VkIHRoZSBjYWxsYmFjayBjaGVjay5cbiAqIEBleGFtcGxlXG4gKiAgICAgJCgnLml0ZW1zJykuc29tZShmdW5jdGlvbihlbGVtZW50KSB7XG4gKiAgICAgICAgIHJldHVybiBlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnYWN0aXZlJylcbiAqICAgICB9KTtcbiAqICAgICDinqQgdHJ1ZS9mYWxzZVxuICovXG5cbnZhciBzb21lID0gQXJyYXlQcm90by5zb21lO1xuXG4vKipcbiAqIEFkZHMgb25lIG9yIG1vcmUgZWxlbWVudHMgdG8gdGhlIGJlZ2lubmluZyBvZiB0aGUgY29sbGVjdGlvbiwgYW5kIHJldHVybnMgdGhlIG5ldyBsZW5ndGggb2YgdGhlIGNvbGxlY3Rpb24uXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGVsZW1lbnQgRWxlbWVudChzKSB0byBhZGQgdG8gdGhlIGNvbGxlY3Rpb25cbiAqIEByZXR1cm4ge051bWJlcn0gVGhlIG5ldyBsZW5ndGggb2YgdGhlIGNvbGxlY3Rpb25cbiAqIEBleGFtcGxlXG4gKiAgICAgJCgnLml0ZW1zJykudW5zaGlmdChlbGVtZW50KTtcbiAqL1xuXG52YXIgdW5zaGlmdCA9IEFycmF5UHJvdG8udW5zaGlmdDtcblxuLypcbiAqIEV4cG9ydCBpbnRlcmZhY2VcbiAqL1xuXG5leHBvcnQgeyBlYWNoLCBldmVyeSwgZmlsdGVyLCBmb3JFYWNoLCBpbmRleE9mLCBtYXAsIHBvcCwgcHVzaCwgcmV2ZXJzZSwgc2hpZnQsIHNvbWUsIHVuc2hpZnQgfTtcbiIsIi8qKlxuICogQG1vZHVsZSBBdHRyXG4gKi9cblxuaW1wb3J0IHsgZWFjaCB9IGZyb20gJy4vdXRpbCc7XG5cbi8qKlxuICogR2V0IHRoZSB2YWx1ZSBvZiBhbiBhdHRyaWJ1dGUgZm9yIHRoZSBmaXJzdCBlbGVtZW50LCBvciBzZXQgb25lIG9yIG1vcmUgYXR0cmlidXRlcyBmb3IgZWFjaCBlbGVtZW50IGluIHRoZSBjb2xsZWN0aW9uLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfE9iamVjdH0ga2V5IFRoZSBuYW1lIG9mIHRoZSBhdHRyaWJ1dGUgdG8gZ2V0IG9yIHNldC4gT3IgYW4gb2JqZWN0IGNvbnRhaW5pbmcga2V5LXZhbHVlIHBhaXJzIHRvIHNldCBhcyBhdHRyaWJ1dGVzLlxuICogQHBhcmFtIHtTdHJpbmd9IFt2YWx1ZV0gVGhlIHZhbHVlIG9mIHRoZSBhdHRyaWJ1dGUgdG8gc2V0LlxuICogQHJldHVybiB7T2JqZWN0fSBUaGUgd3JhcHBlZCBjb2xsZWN0aW9uXG4gKiBAY2hhaW5hYmxlXG4gKiBAZXhhbXBsZVxuICogICAgICQoJy5pdGVtJykuYXR0cignYXR0ck5hbWUnKTsgLy8gZ2V0XG4gKiAgICAgJCgnLml0ZW0nKS5hdHRyKCdhdHRyTmFtZScsICdhdHRyVmFsdWUnKTsgLy8gc2V0XG4gKiAgICAgJCgnLml0ZW0nKS5hdHRyKHsnYXR0cjEnLCAndmFsdWUxJ30sIHsnYXR0cjInLCAndmFsdWUyfSk7IC8vIHNldCBtdWx0aXBsZVxuICovXG5cbmZ1bmN0aW9uIGF0dHIoa2V5LCB2YWx1ZSkge1xuXG4gICAgaWYgKHR5cGVvZiBrZXkgPT09ICdzdHJpbmcnICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdmFyIGVsZW1lbnQgPSB0aGlzLm5vZGVUeXBlID8gdGhpcyA6IHRoaXNbMF07XG4gICAgICAgIHJldHVybiBlbGVtZW50ID8gZWxlbWVudC5nZXRBdHRyaWJ1dGUoa2V5KSA6IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBlYWNoKHRoaXMsIGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBrZXkgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBhdHRyIGluIGtleSkge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHIsIGtleVthdHRyXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShrZXksIHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXM7XG59XG5cbi8qKlxuICogUmVtb3ZlIGF0dHJpYnV0ZSBmcm9tIGVhY2ggZWxlbWVudCBpbiB0aGUgY29sbGVjdGlvbi5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5IEF0dHJpYnV0ZSBuYW1lXG4gKiBAcmV0dXJuIHtPYmplY3R9IFRoZSB3cmFwcGVkIGNvbGxlY3Rpb25cbiAqIEBjaGFpbmFibGVcbiAqIEBleGFtcGxlXG4gKiAgICAgJCgnLml0ZW1zJykucmVtb3ZlQXR0cignYXR0ck5hbWUnKTtcbiAqL1xuXG5mdW5jdGlvbiByZW1vdmVBdHRyKGtleSkge1xuICAgIGVhY2godGhpcywgZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShrZXkpO1xuICAgIH0pO1xuICAgIHJldHVybiB0aGlzO1xufVxuXG4vKlxuICogRXhwb3J0IGludGVyZmFjZVxuICovXG5cbmV4cG9ydCB7IGF0dHIsIHJlbW92ZUF0dHIgfTtcbiIsIi8qKlxuICogQG1vZHVsZSBDbGFzc1xuICovXG5cbmltcG9ydCB7IG1ha2VJdGVyYWJsZSwgZWFjaCB9IGZyb20gJy4vdXRpbCc7XG5cbi8qKlxuICogQWRkIGEgY2xhc3MgdG8gdGhlIGVsZW1lbnQocylcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsdWUgU3BhY2Utc2VwYXJhdGVkIGNsYXNzIG5hbWUocykgdG8gYWRkIHRvIHRoZSBlbGVtZW50KHMpLlxuICogQHJldHVybiB7T2JqZWN0fSBUaGUgd3JhcHBlZCBjb2xsZWN0aW9uXG4gKiBAY2hhaW5hYmxlXG4gKiBAZXhhbXBsZVxuICogICAgICQoJy5pdGVtJykuYWRkQ2xhc3MoJ2JhcicpO1xuICogICAgICQoJy5pdGVtJykuYWRkQ2xhc3MoJ2JhciBmb28nKTtcbiAqL1xuXG5mdW5jdGlvbiBhZGRDbGFzcyh2YWx1ZSkge1xuICAgIGlmKHZhbHVlICYmIHZhbHVlLmxlbmd0aCkge1xuICAgICAgICBlYWNoKHZhbHVlLnNwbGl0KCcgJyksIGZ1bmN0aW9uKGNsYXNzTmFtZSkge1xuICAgICAgICAgICAgZWFjaCh0aGlzLCBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG59XG5cbi8qKlxuICogUmVtb3ZlIGEgY2xhc3MgZnJvbSB0aGUgZWxlbWVudChzKVxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZSBTcGFjZS1zZXBhcmF0ZWQgY2xhc3MgbmFtZShzKSB0byByZW1vdmUgZnJvbSB0aGUgZWxlbWVudChzKS5cbiAqIEByZXR1cm4ge09iamVjdH0gVGhlIHdyYXBwZWQgY29sbGVjdGlvblxuICogQGNoYWluYWJsZVxuICogQGV4YW1wbGVcbiAqICAgICAkKCcuaXRlbXMnKS5yZW1vdmVDbGFzcygnYmFyJyk7XG4gKiAgICAgJCgnLml0ZW1zJykucmVtb3ZlQ2xhc3MoJ2JhciBmb28nKTtcbiAqL1xuXG5mdW5jdGlvbiByZW1vdmVDbGFzcyh2YWx1ZSkge1xuICAgIGlmKHZhbHVlICYmIHZhbHVlLmxlbmd0aCkge1xuICAgICAgICBlYWNoKHZhbHVlLnNwbGl0KCcgJyksIGZ1bmN0aW9uKGNsYXNzTmFtZSkge1xuICAgICAgICAgICAgZWFjaCh0aGlzLCBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG59XG5cbi8qKlxuICogVG9nZ2xlIGEgY2xhc3MgYXQgdGhlIGVsZW1lbnQocylcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsdWUgU3BhY2Utc2VwYXJhdGVkIGNsYXNzIG5hbWUocykgdG8gdG9nZ2xlIGF0IHRoZSBlbGVtZW50KHMpLlxuICogQHJldHVybiB7T2JqZWN0fSBUaGUgd3JhcHBlZCBjb2xsZWN0aW9uXG4gKiBAY2hhaW5hYmxlXG4gKiBAZXhhbXBsZVxuICogICAgICQoJy5pdGVtJykudG9nZ2xlQ2xhc3MoJ2JhcicpO1xuICogICAgICQoJy5pdGVtJykudG9nZ2xlQ2xhc3MoJ2JhciBmb28nKTtcbiAqL1xuXG5mdW5jdGlvbiB0b2dnbGVDbGFzcyh2YWx1ZSkge1xuICAgIGlmKHZhbHVlICYmIHZhbHVlLmxlbmd0aCkge1xuICAgICAgICBlYWNoKHZhbHVlLnNwbGl0KCcgJyksIGZ1bmN0aW9uKGNsYXNzTmFtZSkge1xuICAgICAgICAgICAgZWFjaCh0aGlzLCBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKGNsYXNzTmFtZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgdGhlIGVsZW1lbnQocykgaGF2ZSBhIGNsYXNzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZSBDaGVjayBpZiB0aGUgRE9NIGVsZW1lbnQgY29udGFpbnMgdGhlIGNsYXNzIG5hbWUuIFdoZW4gYXBwbGllZCB0byBtdWx0aXBsZSBlbGVtZW50cyxcbiAqIHJldHVybnMgYHRydWVgIGlmIF9hbnlfIG9mIHRoZW0gY29udGFpbnMgdGhlIGNsYXNzIG5hbWUuXG4gKiBAcmV0dXJuIHtCb29sZWFufSBXaGV0aGVyIHRoZSBlbGVtZW50J3MgY2xhc3MgYXR0cmlidXRlIGNvbnRhaW5zIHRoZSBjbGFzcyBuYW1lLlxuICogQGV4YW1wbGVcbiAqICAgICAkKCcuaXRlbScpLmhhc0NsYXNzKCdiYXInKTtcbiAqL1xuXG5mdW5jdGlvbiBoYXNDbGFzcyh2YWx1ZSkge1xuICAgIHJldHVybiBtYWtlSXRlcmFibGUodGhpcykuc29tZShmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgIHJldHVybiBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyh2YWx1ZSk7XG4gICAgfSk7XG59XG5cbi8qXG4gKiBFeHBvcnQgaW50ZXJmYWNlXG4gKi9cblxuZXhwb3J0IHsgYWRkQ2xhc3MsIHJlbW92ZUNsYXNzLCB0b2dnbGVDbGFzcywgaGFzQ2xhc3MgfTtcbiIsIi8qKlxuICogQG1vZHVsZSBjb250YWluc1xuICovXG5cbi8qKlxuICogVGVzdCB3aGV0aGVyIGFuIGVsZW1lbnQgY29udGFpbnMgYW5vdGhlciBlbGVtZW50IGluIHRoZSBET00uXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBjb250YWluZXIgVGhlIGVsZW1lbnQgdGhhdCBtYXkgY29udGFpbiB0aGUgb3RoZXIgZWxlbWVudC5cbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudCBUaGUgZWxlbWVudCB0aGF0IG1heSBiZSBhIGRlc2NlbmRhbnQgb2YgdGhlIG90aGVyIGVsZW1lbnQuXG4gKiBAcmV0dXJuIHtCb29sZWFufSBXaGV0aGVyIHRoZSBgY29udGFpbmVyYCBlbGVtZW50IGNvbnRhaW5zIHRoZSBgZWxlbWVudGAuXG4gKiBAZXhhbXBsZVxuICogICAgICQuY29udGFpbnMocGFyZW50RWxlbWVudCwgY2hpbGRFbGVtZW50KTtcbiAqICAgICDinqQgdHJ1ZS9mYWxzZVxuICovXG5cbmZ1bmN0aW9uIGNvbnRhaW5zKGNvbnRhaW5lciwgZWxlbWVudCkge1xuICAgIGlmKCFjb250YWluZXIgfHwgIWVsZW1lbnQgfHwgY29udGFpbmVyID09PSBlbGVtZW50KSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKGNvbnRhaW5lci5jb250YWlucykge1xuICAgICAgICByZXR1cm4gY29udGFpbmVyLmNvbnRhaW5zKGVsZW1lbnQpO1xuICAgIH0gZWxzZSBpZiAoY29udGFpbmVyLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKSB7XG4gICAgICAgIHJldHVybiAhKGNvbnRhaW5lci5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihlbGVtZW50KSAmIE5vZGUuRE9DVU1FTlRfUE9TSVRJT05fRElTQ09OTkVDVEVEKTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG5cbi8qXG4gKiBFeHBvcnQgaW50ZXJmYWNlXG4gKi9cblxuZXhwb3J0IHsgY29udGFpbnMgfTtcbiIsIi8qKlxuICogQG1vZHVsZSBBdHRyXG4gKi9cblxuaW1wb3J0IHsgZWFjaCB9IGZyb20gJy4vdXRpbCc7XG5cbmZ1bmN0aW9uIGlzTnVtZXJpYyh2YWx1ZSkge1xuICAgIHJldHVybiAhaXNOYU4ocGFyc2VGbG9hdCh2YWx1ZSkpICYmIGlzRmluaXRlKHZhbHVlKTtcbn1cblxuZnVuY3Rpb24gY2FtZWxpemUodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUucmVwbGFjZSgvLShbXFxkYS16XSkvZ2ksIGZ1bmN0aW9uIChtYXRjaGVzLCBsZXR0ZXIpIHsgcmV0dXJuIGxldHRlci50b1VwcGVyQ2FzZSgpOyB9KTtcbn1cblxuZnVuY3Rpb24gZGFzaGVyaXplKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlLnJlcGxhY2UoLyhbYS16XFxkXSkoW0EtWl0pL2csICckMS0kMicpLnRvTG93ZXJDYXNlKCk7XG59XG5cbi8qKlxuICogR2V0IHRoZSB2YWx1ZSBvZiBhIHN0eWxlIHByb3BlcnR5IGZvciB0aGUgZmlyc3QgZWxlbWVudCwgb3Igc2V0IG9uZSBvciBtb3JlIHN0eWxlIHByb3BlcnRpZXMgZm9yIGVhY2ggZWxlbWVudCBpbiB0aGUgY29sbGVjdGlvbi5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ3xPYmplY3R9IGtleSBUaGUgbmFtZSBvZiB0aGUgc3R5bGUgcHJvcGVydHkgdG8gZ2V0IG9yIHNldC4gT3IgYW4gb2JqZWN0IGNvbnRhaW5pbmcga2V5LXZhbHVlIHBhaXJzIHRvIHNldCBhcyBzdHlsZSBwcm9wZXJ0aWVzLlxuICogQHBhcmFtIHtTdHJpbmd9IFt2YWx1ZV0gVGhlIHZhbHVlIG9mIHRoZSBzdHlsZSBwcm9wZXJ0eSB0byBzZXQuXG4gKiBAcmV0dXJuIHtPYmplY3R9IFRoZSB3cmFwcGVkIGNvbGxlY3Rpb25cbiAqIEBjaGFpbmFibGVcbiAqIEBleGFtcGxlXG4gKiAgICAgJCgnLml0ZW0nKS5jc3MoJ3BhZGRpbmctbGVmdCcpOyAvLyBnZXRcbiAqICAgICAkKCcuaXRlbScpLmNzcygnY29sb3InLCAnI2YwMCcpOyAvLyBzZXRcbiAqICAgICAkKCcuaXRlbScpLmNzcyh7J2JvcmRlci13aWR0aCcsICcxcHgnfSwgeydkaXNwbGF5JywgJ2lubGluZS1ibG9ja30pOyAvLyBzZXQgbXVsdGlwbGVcbiAqL1xuXG5mdW5jdGlvbiBjc3Moa2V5LCB2YWx1ZSkge1xuXG4gICAgdmFyIHN0eWxlUHJvcHMsIHByb3AsIHZhbDtcblxuICAgIGlmKHR5cGVvZiBrZXkgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGtleSA9IGNhbWVsaXplKGtleSk7XG5cbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHZhciBlbGVtZW50ID0gdGhpcy5ub2RlVHlwZSA/IHRoaXMgOiB0aGlzWzBdO1xuICAgICAgICAgICAgaWYoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgIHZhbCA9IGVsZW1lbnQuc3R5bGVba2V5XTtcbiAgICAgICAgICAgICAgICByZXR1cm4gaXNOdW1lcmljKHZhbCkgPyBwYXJzZUZsb2F0KHZhbCkgOiB2YWw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgc3R5bGVQcm9wcyA9IHt9O1xuICAgICAgICBzdHlsZVByb3BzW2tleV0gPSB2YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBzdHlsZVByb3BzID0ga2V5O1xuICAgICAgICBmb3IgKHByb3AgaW4gc3R5bGVQcm9wcykge1xuICAgICAgICAgICAgdmFsID0gc3R5bGVQcm9wc1twcm9wXTtcbiAgICAgICAgICAgIGRlbGV0ZSBzdHlsZVByb3BzW3Byb3BdO1xuICAgICAgICAgICAgc3R5bGVQcm9wc1tjYW1lbGl6ZShwcm9wKV0gPSB2YWw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBlYWNoKHRoaXMsIGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgZm9yIChwcm9wIGluIHN0eWxlUHJvcHMpIHtcbiAgICAgICAgICAgIGlmKHN0eWxlUHJvcHNbcHJvcF0gfHwgc3R5bGVQcm9wc1twcm9wXSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGVbcHJvcF0gPSBzdHlsZVByb3BzW3Byb3BdO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KGRhc2hlcml6ZShwcm9wKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzO1xufVxuXG4vKlxuICogRXhwb3J0IGludGVyZmFjZVxuICovXG5cbmV4cG9ydCB7IGNzcyB9O1xuIiwiLyoqXG4gKiBAbW9kdWxlIERhdGFcbiAqL1xuXG5pbXBvcnQgeyBlYWNoIH0gZnJvbSAnLi91dGlsJztcblxudmFyIGRhdGFLZXlQcm9wID0gJ19fZG9tdGFzdGljX2RhdGFfXyc7XG5cbi8qKlxuICogR2V0IGRhdGEgZnJvbSBmaXJzdCBlbGVtZW50LCBvciBzZXQgZGF0YSBmb3IgZWFjaCBlbGVtZW50IGluIHRoZSBjb2xsZWN0aW9uLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgVGhlIGtleSBmb3IgdGhlIGRhdGEgdG8gZ2V0IG9yIHNldC5cbiAqIEBwYXJhbSB7U3RyaW5nfSBbdmFsdWVdIFRoZSBkYXRhIHRvIHNldC5cbiAqIEByZXR1cm4ge09iamVjdH0gVGhlIHdyYXBwZWQgY29sbGVjdGlvblxuICogQGNoYWluYWJsZVxuICogQGV4YW1wbGVcbiAqICAgICAkKCcuaXRlbScpLmRhdGEoJ2F0dHJOYW1lJyk7IC8vIGdldFxuICogICAgICQoJy5pdGVtJykuZGF0YSgnYXR0ck5hbWUnLCB7YW55OiAnZGF0YSd9KTsgLy8gc2V0XG4gKi9cblxuZnVuY3Rpb24gZGF0YShrZXksIHZhbHVlKSB7XG5cbiAgICBpZiAodHlwZW9mIGtleSA9PT0gJ3N0cmluZycgJiYgdHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB2YXIgZWxlbWVudCA9IHRoaXMubm9kZVR5cGUgPyB0aGlzIDogdGhpc1swXTtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQgJiYgZWxlbWVudFtkYXRhS2V5UHJvcF0gPyBlbGVtZW50W2RhdGFLZXlQcm9wXVtrZXldIDogdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGVhY2godGhpcywgZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICBlbGVtZW50W2RhdGFLZXlQcm9wXSA9IGVsZW1lbnRbZGF0YUtleVByb3BdIHx8IHt9O1xuICAgICAgICBlbGVtZW50W2RhdGFLZXlQcm9wXVtrZXldID0gdmFsdWU7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcztcblxufVxuXG4vKipcbiAqIEdldCBwcm9wZXJ0eSBmcm9tIGZpcnN0IGVsZW1lbnQsIG9yIHNldCBwcm9wZXJ0eSBvbiBlYWNoIGVsZW1lbnQgaW4gdGhlIGNvbGxlY3Rpb24uXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGtleSBUaGUgbmFtZSBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0IG9yIHNldC5cbiAqIEBwYXJhbSB7U3RyaW5nfSBbdmFsdWVdIFRoZSB2YWx1ZSBvZiB0aGUgcHJvcGVydHkgdG8gc2V0LlxuICogQHJldHVybiB7T2JqZWN0fSBUaGUgd3JhcHBlZCBjb2xsZWN0aW9uXG4gKiBAY2hhaW5hYmxlXG4gKiBAZXhhbXBsZVxuICogICAgICQoJy5pdGVtJykucHJvcCgnYXR0ck5hbWUnKTsgLy8gZ2V0XG4gKiAgICAgJCgnLml0ZW0nKS5wcm9wKCdhdHRyTmFtZScsICdhdHRyVmFsdWUnKTsgLy8gc2V0XG4gKi9cblxuZnVuY3Rpb24gcHJvcChrZXksIHZhbHVlKSB7XG5cbiAgICBpZiAodHlwZW9mIGtleSA9PT0gJ3N0cmluZycgJiYgdHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB2YXIgZWxlbWVudCA9IHRoaXMubm9kZVR5cGUgPyB0aGlzIDogdGhpc1swXTtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQgJiYgZWxlbWVudCA/IGVsZW1lbnRba2V5XSA6IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBlYWNoKHRoaXMsIGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgZWxlbWVudFtrZXldID0gdmFsdWU7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcztcblxufVxuXG5cbi8qXG4gKiBFeHBvcnQgaW50ZXJmYWNlXG4gKi9cblxuZXhwb3J0IHsgZGF0YSwgcHJvcCB9IiwiLyoqXG4gKiBAbW9kdWxlIERPTVxuICovXG5cbmltcG9ydCB7IHRvQXJyYXkgfSBmcm9tICcuL3V0aWwnO1xuXG4vKipcbiAqIEFwcGVuZCBlbGVtZW50KHMpIHRvIGVhY2ggZWxlbWVudCBpbiB0aGUgY29sbGVjdGlvbi5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ3xOb2RlfE5vZGVMaXN0fE9iamVjdH0gZWxlbWVudCBXaGF0IHRvIGFwcGVuZCB0byB0aGUgZWxlbWVudChzKS5cbiAqIENsb25lcyBlbGVtZW50cyBhcyBuZWNlc3NhcnkuXG4gKiBAcmV0dXJuIHtPYmplY3R9IFRoZSB3cmFwcGVkIGNvbGxlY3Rpb25cbiAqIEBjaGFpbmFibGVcbiAqIEBleGFtcGxlXG4gKiAgICAgJCgnLml0ZW0nKS5hcHBlbmQoJzxwPm1vcmU8L3A+Jyk7XG4gKi9cblxuZnVuY3Rpb24gYXBwZW5kKGVsZW1lbnQpIHtcbiAgICBpZiAodGhpcyBpbnN0YW5jZW9mIE5vZGUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBlbGVtZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgdGhpcy5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGVsZW1lbnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBOb2RlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIGVsZW1lbnRzID0gZWxlbWVudCBpbnN0YW5jZW9mIE5vZGVMaXN0ID8gdG9BcnJheShlbGVtZW50KSA6IGVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgZWxlbWVudHMuZm9yRWFjaCh0aGlzLmFwcGVuZENoaWxkLmJpbmQodGhpcykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGwgPSB0aGlzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKGwtLSkge1xuICAgICAgICAgICAgdmFyIGVsbSA9IGwgPT09IDAgPyBlbGVtZW50IDogX2Nsb25lKGVsZW1lbnQpO1xuICAgICAgICAgICAgYXBwZW5kLmNhbGwodGhpc1tsXSwgZWxtKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbn1cblxuLyoqXG4gKiBQbGFjZSBlbGVtZW50KHMpIGF0IHRoZSBiZWdpbm5pbmcgb2YgZWFjaCBlbGVtZW50IGluIHRoZSBjb2xsZWN0aW9uLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfE5vZGV8Tm9kZUxpc3R8T2JqZWN0fSBlbGVtZW50IFdoYXQgdG8gcGxhY2UgYXQgdGhlIGJlZ2lubmluZyBvZiB0aGUgZWxlbWVudChzKS5cbiAqIENsb25lcyBlbGVtZW50cyBhcyBuZWNlc3NhcnkuXG4gKiBAcmV0dXJuIHtPYmplY3R9IFRoZSB3cmFwcGVkIGNvbGxlY3Rpb25cbiAqIEBjaGFpbmFibGVcbiAqIEBleGFtcGxlXG4gKiAgICAgJCgnLml0ZW0nKS5wcmVwZW5kKCc8c3Bhbj5zdGFydDwvc3Bhbj4nKTtcbiAqL1xuXG5mdW5jdGlvbiBwcmVwZW5kKGVsZW1lbnQpIHtcbiAgICBpZiAodGhpcyBpbnN0YW5jZW9mIE5vZGUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBlbGVtZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgdGhpcy5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCBlbGVtZW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgTm9kZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsIHRoaXMuZmlyc3RDaGlsZCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBlbGVtZW50cyA9IGVsZW1lbnQgaW5zdGFuY2VvZiBOb2RlTGlzdCA/IHRvQXJyYXkoZWxlbWVudCkgOiBlbGVtZW50O1xuICAgICAgICAgICAgICAgIGVsZW1lbnRzLnJldmVyc2UoKS5mb3JFYWNoKHByZXBlbmQuYmluZCh0aGlzKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgbCA9IHRoaXMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAobC0tKSB7XG4gICAgICAgICAgICB2YXIgZWxtID0gbCA9PT0gMCA/IGVsZW1lbnQgOiBfY2xvbmUoZWxlbWVudCk7XG4gICAgICAgICAgICBwcmVwZW5kLmNhbGwodGhpc1tsXSwgZWxtKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbn1cblxuLyoqXG4gKiBQbGFjZSBlbGVtZW50KHMpIGJlZm9yZSBlYWNoIGVsZW1lbnQgaW4gdGhlIGNvbGxlY3Rpb24uXG4gKlxuICogQHBhcmFtIHtTdHJpbmd8Tm9kZXxOb2RlTGlzdHxPYmplY3R9IGVsZW1lbnQgV2hhdCB0byBwbGFjZSBhcyBzaWJsaW5nKHMpIGJlZm9yZSB0byB0aGUgZWxlbWVudChzKS5cbiAqIENsb25lcyBlbGVtZW50cyBhcyBuZWNlc3NhcnkuXG4gKiBAcmV0dXJuIHtPYmplY3R9IFRoZSB3cmFwcGVkIGNvbGxlY3Rpb25cbiAqIEBjaGFpbmFibGVcbiAqIEBleGFtcGxlXG4gKiAgICAgJCgnLml0ZW1zJykuYmVmb3JlKCc8cD5wcmVmaXg8L3A+Jyk7XG4gKi9cblxuZnVuY3Rpb24gYmVmb3JlKGVsZW1lbnQpIHtcbiAgICBpZiAodGhpcyBpbnN0YW5jZW9mIE5vZGUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBlbGVtZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgdGhpcy5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWJlZ2luJywgZWxlbWVudCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIE5vZGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsIHRoaXMpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgZWxlbWVudHMgPSBlbGVtZW50IGluc3RhbmNlb2YgTm9kZUxpc3QgPyB0b0FycmF5KGVsZW1lbnQpIDogZWxlbWVudDtcbiAgICAgICAgICAgICAgICBlbGVtZW50cy5mb3JFYWNoKGJlZm9yZS5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBsID0gdGhpcy5sZW5ndGg7XG4gICAgICAgIHdoaWxlIChsLS0pIHtcbiAgICAgICAgICAgIHZhciBlbG0gPSBsID09PSAwID8gZWxlbWVudCA6IF9jbG9uZShlbGVtZW50KTtcbiAgICAgICAgICAgIGJlZm9yZS5jYWxsKHRoaXNbbF0sIGVsbSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG59XG5cbi8qKlxuICogUGxhY2UgZWxlbWVudChzKSBhZnRlciBlYWNoIGVsZW1lbnQgaW4gdGhlIGNvbGxlY3Rpb24uXG4gKlxuICogQHBhcmFtIHtTdHJpbmd8Tm9kZXxOb2RlTGlzdHxPYmplY3R9IGVsZW1lbnQgV2hhdCB0byBwbGFjZSBhcyBzaWJsaW5nKHMpIGFmdGVyIHRvIHRoZSBlbGVtZW50KHMpLiBDbG9uZXMgZWxlbWVudHMgYXMgbmVjZXNzYXJ5LlxuICogQHJldHVybiB7T2JqZWN0fSBUaGUgd3JhcHBlZCBjb2xsZWN0aW9uXG4gKiBAY2hhaW5hYmxlXG4gKiBAZXhhbXBsZVxuICogICAgICQoJy5pdGVtcycpLmFmdGVyKCc8c3Bhbj5zdWY8L3NwYW4+PHNwYW4+Zml4PC9zcGFuPicpO1xuICovXG5cbmZ1bmN0aW9uIGFmdGVyKGVsZW1lbnQpIHtcbiAgICBpZiAodGhpcyBpbnN0YW5jZW9mIE5vZGUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBlbGVtZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgdGhpcy5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyZW5kJywgZWxlbWVudCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIE5vZGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsIHRoaXMubmV4dFNpYmxpbmcpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgZWxlbWVudHMgPSBlbGVtZW50IGluc3RhbmNlb2YgTm9kZUxpc3QgPyB0b0FycmF5KGVsZW1lbnQpIDogZWxlbWVudDtcbiAgICAgICAgICAgICAgICBlbGVtZW50cy5yZXZlcnNlKCkuZm9yRWFjaChhZnRlci5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBsID0gdGhpcy5sZW5ndGg7XG4gICAgICAgIHdoaWxlIChsLS0pIHtcbiAgICAgICAgICAgIHZhciBlbG0gPSBsID09PSAwID8gZWxlbWVudCA6IF9jbG9uZShlbGVtZW50KTtcbiAgICAgICAgICAgIGFmdGVyLmNhbGwodGhpc1tsXSwgZWxtKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbn1cblxuLyoqXG4gKiBDbG9uZSBhIHdyYXBwZWQgb2JqZWN0LlxuICpcbiAqIEByZXR1cm4ge09iamVjdH0gV3JhcHBlZCBjb2xsZWN0aW9uIG9mIGNsb25lZCBub2Rlcy5cbiAqIEBleGFtcGxlXG4gKiAgICAgJChlbGVtZW50KS5jbG9uZSgpO1xuICovXG5cbmZ1bmN0aW9uIGNsb25lKCkge1xuICAgIHJldHVybiAkKF9jbG9uZSh0aGlzKSk7XG59XG5cbi8qKlxuICogQ2xvbmUgYW4gb2JqZWN0XG4gKlxuICogQHBhcmFtIHtTdHJpbmd8Tm9kZXxOb2RlTGlzdHxBcnJheX0gZWxlbWVudCBUaGUgZWxlbWVudChzKSB0byBjbG9uZS5cbiAqIEByZXR1cm4ge1N0cmluZ3xOb2RlfE5vZGVMaXN0fEFycmF5fSBUaGUgY2xvbmVkIGVsZW1lbnQocylcbiAqIEBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gX2Nsb25lKGVsZW1lbnQpIHtcbiAgICBpZiAodHlwZW9mIGVsZW1lbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH0gZWxzZSBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIE5vZGUpIHtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQuY2xvbmVOb2RlKHRydWUpO1xuICAgIH0gZWxzZSBpZiAoJ2xlbmd0aCcgaW4gZWxlbWVudCkge1xuICAgICAgICByZXR1cm4gW10ubWFwLmNhbGwoZWxlbWVudCwgZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICAgIHJldHVybiBlbC5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gZWxlbWVudDtcbn1cblxuLypcbiAqIEV4cG9ydCBpbnRlcmZhY2VcbiAqL1xuXG5leHBvcnQgeyBhcHBlbmQsIHByZXBlbmQsIGJlZm9yZSwgYWZ0ZXIsIGNsb25lIH07XG4iLCIvKipcbiAqIEBtb2R1bGUgRE9NIChleHRyYSlcbiAqL1xuXG5pbXBvcnQgeyBlYWNoIH0gZnJvbSAnLi91dGlsJztcbmltcG9ydCB7IGFwcGVuZCwgYmVmb3JlLCBhZnRlciB9IGZyb20gJy4vZG9tJztcbmltcG9ydCB7ICQgfSBmcm9tICcuL3NlbGVjdG9yJztcblxuLyoqXG4gKiBBcHBlbmQgZWFjaCBlbGVtZW50IGluIHRoZSBjb2xsZWN0aW9uIHRvIHRoZSBzcGVjaWZpZWQgZWxlbWVudChzKS5cbiAqXG4gKiBAcGFyYW0ge05vZGV8Tm9kZUxpc3R8T2JqZWN0fSBlbGVtZW50IFdoYXQgdG8gYXBwZW5kIHRoZSBlbGVtZW50KHMpIHRvLiBDbG9uZXMgZWxlbWVudHMgYXMgbmVjZXNzYXJ5LlxuICogQHJldHVybiB7T2JqZWN0fSBUaGUgd3JhcHBlZCBjb2xsZWN0aW9uXG4gKiBAY2hhaW5hYmxlXG4gKiBAZXhhbXBsZVxuICogICAgICQoJy5pdGVtJykuYXBwZW5kVG8oY29udGFpbmVyKTtcbiAqL1xuXG5mdW5jdGlvbiBhcHBlbmRUbyhlbGVtZW50KSB7XG4gICAgdmFyIGNvbnRleHQgPSB0eXBlb2YgZWxlbWVudCA9PT0gJ3N0cmluZycgPyAkKGVsZW1lbnQpIDogZWxlbWVudDtcbiAgICBhcHBlbmQuY2FsbChjb250ZXh0LCB0aGlzKTtcbiAgICByZXR1cm4gdGhpcztcbn1cblxuLypcbiAqIEVtcHR5IGVhY2ggZWxlbWVudCBpbiB0aGUgY29sbGVjdGlvbi5cbiAqXG4gKiBAcmV0dXJuIHtPYmplY3R9IFRoZSB3cmFwcGVkIGNvbGxlY3Rpb25cbiAqIEBjaGFpbmFibGVcbiAqIEBleGFtcGxlXG4gKiAgICAgJCgnLml0ZW0nKS5lbXB0eSgpO1xuICovXG5cbmZ1bmN0aW9uIGVtcHR5KCl7XG4gICAgcmV0dXJuIGVhY2godGhpcywgZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9ICcnO1xuICAgIH0pO1xufVxuXG4vKipcbiAqIFJlbW92ZSB0aGUgY29sbGVjdGlvbiBmcm9tIHRoZSBET00uXG4gKlxuICogQHJldHVybiB7QXJyYXl9IEFycmF5IGNvbnRhaW5pbmcgdGhlIHJlbW92ZWQgZWxlbWVudHNcbiAqIEBleGFtcGxlXG4gKiAgICAgJCgnLml0ZW0nKS5yZW1vdmUoKTtcbiAqL1xuXG5mdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgcmV0dXJuIGVhY2godGhpcywgZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICBpZiAoZWxlbWVudC5wYXJlbnROb2RlKSB7XG4gICAgICAgICAgICBlbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuLyoqXG4gKiBSZXBsYWNlIGVhY2ggZWxlbWVudCBpbiB0aGUgY29sbGVjdGlvbiB3aXRoIHRoZSBwcm92aWRlZCBuZXcgY29udGVudCwgYW5kIHJldHVybiB0aGUgYXJyYXkgb2YgZWxlbWVudHMgdGhhdCB3ZXJlIHJlcGxhY2VkLlxuICpcbiAqIEByZXR1cm4ge0FycmF5fSBBcnJheSBjb250YWluaW5nIHRoZSByZXBsYWNlZCBlbGVtZW50c1xuICovXG5cbmZ1bmN0aW9uIHJlcGxhY2VXaXRoKCkge1xuICAgIHJldHVybiBiZWZvcmUuYXBwbHkodGhpcywgYXJndW1lbnRzKS5yZW1vdmUoKTtcbn1cblxuLyoqXG4gKiBHZXQgdGhlIGB0ZXh0Q29udGVudGAgZnJvbSB0aGUgZmlyc3QsIG9yIHNldCB0aGUgYHRleHRDb250ZW50YCBvZiBlYWNoIGVsZW1lbnQgaW4gdGhlIGNvbGxlY3Rpb24uXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IFt2YWx1ZV1cbiAqIEByZXR1cm4ge09iamVjdH0gVGhlIHdyYXBwZWQgY29sbGVjdGlvblxuICogQGNoYWluYWJsZVxuICogQGV4YW1wbGVcbiAqICAgICAkKCcuaXRlbScpLnRleHQoJ05ldyBjb250ZW50Jyk7XG4gKi9cblxuZnVuY3Rpb24gdGV4dCh2YWx1ZSl7XG5cbiAgICBpZih2YWx1ZSA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiB0aGlzWzBdLnRleHRDb250ZW50O1xuICAgIH1cblxuICAgIGVhY2godGhpcywgZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gJycgKyB2YWx1ZTtcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzO1xufVxuXG4vKipcbiAqIEdldCB0aGUgYHZhbHVlYCBmcm9tIHRoZSBmaXJzdCwgb3Igc2V0IHRoZSBgdmFsdWVgIG9mIGVhY2ggZWxlbWVudCBpbiB0aGUgY29sbGVjdGlvbi5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gW3ZhbHVlXVxuICogQHJldHVybiB7T2JqZWN0fSBUaGUgd3JhcHBlZCBjb2xsZWN0aW9uXG4gKiBAY2hhaW5hYmxlXG4gKiBAZXhhbXBsZVxuICogICAgICQoJ2lucHV0LmZpcnN0TmFtZScpLnZhbHVlKCdOZXcgdmFsdWUnKTtcbiAqL1xuXG5mdW5jdGlvbiB2YWwodmFsdWUpe1xuXG4gICAgaWYodmFsdWUgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdGhpc1swXS52YWx1ZTtcbiAgICB9XG5cbiAgICBlYWNoKHRoaXMsIGZ1bmN0aW9uKGVsZW1lbnQpe1xuICAgICAgICBlbGVtZW50LnZhbHVlID0gdmFsdWU7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcztcbn1cblxuLypcbiAqIEV4cG9ydCBpbnRlcmZhY2VcbiAqL1xuXG5leHBvcnQgeyBhcHBlbmRUbywgZW1wdHksIHJlbW92ZSwgcmVwbGFjZVdpdGgsIHRleHQsIHZhbCB9O1xuIiwiLyoqXG4gKiBAbW9kdWxlIEV2ZW50c1xuICovXG5cbmltcG9ydCB7IGVhY2ggfSBmcm9tICcuL3V0aWwnO1xuaW1wb3J0IHsgY2xvc2VzdCB9IGZyb20gJy4vc2VsZWN0b3InO1xuXG4vKipcbiAqIFNob3J0aGFuZCBmb3IgYGFkZEV2ZW50TGlzdGVuZXJgLiBTdXBwb3J0cyBldmVudCBkZWxlZ2F0aW9uIGlmIGEgZmlsdGVyIChgc2VsZWN0b3JgKSBpcyBwcm92aWRlZC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnROYW1lcyBMaXN0IG9mIHNwYWNlLXNlcGFyYXRlZCBldmVudCB0eXBlcyB0byBiZSBhZGRlZCB0byB0aGUgZWxlbWVudChzKVxuICogQHBhcmFtIHtTdHJpbmd9IFtzZWxlY3Rvcl0gU2VsZWN0b3IgdG8gZmlsdGVyIGRlc2NlbmRhbnRzIHRoYXQgZGVsZWdhdGUgdGhlIGV2ZW50IHRvIHRoaXMgZWxlbWVudC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGhhbmRsZXIgRXZlbnQgaGFuZGxlclxuICogQHBhcmFtIHtCb29sZWFufSB1c2VDYXB0dXJlPWZhbHNlXG4gKiBAcmV0dXJuIHtPYmplY3R9IFRoZSB3cmFwcGVkIGNvbGxlY3Rpb25cbiAqIEBjaGFpbmFibGVcbiAqIEBleGFtcGxlXG4gKiAgICAgJCgnLml0ZW0nKS5vbignY2xpY2snLCBjYWxsYmFjayk7XG4gKiAgICAgJCgnLmNvbnRhaW5lcicpLm9uKCdjbGljayBmb2N1cycsICcuaXRlbScsIGhhbmRsZXIpO1xuICovXG5cbmZ1bmN0aW9uIG9uKGV2ZW50TmFtZXMsIHNlbGVjdG9yLCBoYW5kbGVyLCB1c2VDYXB0dXJlKSB7XG5cbiAgICBpZiAodHlwZW9mIHNlbGVjdG9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGhhbmRsZXIgPSBzZWxlY3RvcjtcbiAgICAgICAgc2VsZWN0b3IgPSBudWxsO1xuICAgIH1cblxuICAgIHZhciBwYXJ0cyxcbiAgICAgICAgbmFtZXNwYWNlLFxuICAgICAgICBldmVudExpc3RlbmVyO1xuXG4gICAgZXZlbnROYW1lcy5zcGxpdCgnICcpLmZvckVhY2goZnVuY3Rpb24oZXZlbnROYW1lKSB7XG5cbiAgICAgICAgcGFydHMgPSBldmVudE5hbWUuc3BsaXQoJy4nKTtcbiAgICAgICAgZXZlbnROYW1lID0gcGFydHNbMF0gfHwgbnVsbDtcbiAgICAgICAgbmFtZXNwYWNlID0gcGFydHNbMV0gfHwgbnVsbDtcblxuICAgICAgICBldmVudExpc3RlbmVyID0gcHJveHlIYW5kbGVyKGhhbmRsZXIpO1xuXG4gICAgICAgIGVhY2godGhpcywgZnVuY3Rpb24oZWxlbWVudCkge1xuXG4gICAgICAgICAgICBpZiAoc2VsZWN0b3IpIHtcbiAgICAgICAgICAgICAgICBldmVudExpc3RlbmVyID0gZGVsZWdhdGVIYW5kbGVyLmJpbmQoZWxlbWVudCwgc2VsZWN0b3IsIGV2ZW50TGlzdGVuZXIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBldmVudExpc3RlbmVyLCB1c2VDYXB0dXJlIHx8IGZhbHNlKTtcblxuICAgICAgICAgICAgZ2V0SGFuZGxlcnMoZWxlbWVudCkucHVzaCh7XG4gICAgICAgICAgICAgICAgZXZlbnROYW1lOiBldmVudE5hbWUsXG4gICAgICAgICAgICAgICAgaGFuZGxlcjogaGFuZGxlcixcbiAgICAgICAgICAgICAgICBldmVudExpc3RlbmVyOiBldmVudExpc3RlbmVyLFxuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBzZWxlY3RvcixcbiAgICAgICAgICAgICAgICBuYW1lc3BhY2U6IG5hbWVzcGFjZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgfSwgdGhpcyk7XG5cbiAgICByZXR1cm4gdGhpcztcbn1cblxuLyoqXG4gKiBTaG9ydGhhbmQgZm9yIGByZW1vdmVFdmVudExpc3RlbmVyYC4gRGVsZWdhdGVzIHRvIGB1bmRlbGVnYXRlYCBpZiB0aGF0IHNpZ25hdHVyZSBpcyB1c2VkLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudE5hbWVzIExpc3Qgb2Ygc3BhY2Utc2VwYXJhdGVkIGV2ZW50IHR5cGVzIHRvIGJlIHJlbW92ZWQgZnJvbSB0aGUgZWxlbWVudChzKVxuICogQHBhcmFtIHtTdHJpbmd9IFtzZWxlY3Rvcl0gU2VsZWN0b3IgdG8gZmlsdGVyIGRlc2NlbmRhbnRzIHRoYXQgdW5kZWxlZ2F0ZSB0aGUgZXZlbnQgdG8gdGhpcyBlbGVtZW50LlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaGFuZGxlciBFdmVudCBoYW5kbGVyXG4gKiBAcGFyYW0ge0Jvb2xlYW59IHVzZUNhcHR1cmU9ZmFsc2VcbiAqIEByZXR1cm4ge09iamVjdH0gVGhlIHdyYXBwZWQgY29sbGVjdGlvblxuICogQGNoYWluYWJsZVxuICogQGV4YW1wbGVcbiAqICAgICAkKCcuaXRlbScpLm9mZignY2xpY2snLCBjYWxsYmFjayk7XG4gKiAgICAgJCgnI215LWVsZW1lbnQnKS5vZmYoJ215RXZlbnQgbXlPdGhlckV2ZW50Jyk7XG4gKiAgICAgJCgnLml0ZW0nKS5vZmYoKTtcbiAqL1xuXG5mdW5jdGlvbiBvZmYoZXZlbnROYW1lcyA9ICcnLCBzZWxlY3RvciwgaGFuZGxlciwgdXNlQ2FwdHVyZSkge1xuXG4gICAgaWYgKHR5cGVvZiBzZWxlY3RvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBoYW5kbGVyID0gc2VsZWN0b3I7XG4gICAgICAgIHNlbGVjdG9yID0gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgcGFydHMsXG4gICAgICAgIG5hbWVzcGFjZSxcbiAgICAgICAgaGFuZGxlcnM7XG5cbiAgICBldmVudE5hbWVzLnNwbGl0KCcgJykuZm9yRWFjaChmdW5jdGlvbihldmVudE5hbWUpIHtcblxuICAgICAgICBwYXJ0cyA9IGV2ZW50TmFtZS5zcGxpdCgnLicpO1xuICAgICAgICBldmVudE5hbWUgPSBwYXJ0c1swXSB8fCBudWxsO1xuICAgICAgICBuYW1lc3BhY2UgPSBwYXJ0c1sxXSB8fCBudWxsO1xuXG4gICAgICAgIGVhY2godGhpcywgZnVuY3Rpb24oZWxlbWVudCkge1xuXG4gICAgICAgICAgICBoYW5kbGVycyA9IGdldEhhbmRsZXJzKGVsZW1lbnQpO1xuXG4gICAgICAgICAgICBlYWNoKGhhbmRsZXJzLmZpbHRlcihmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgKCFldmVudE5hbWUgfHwgaXRlbS5ldmVudE5hbWUgPT09IGV2ZW50TmFtZSkgJiZcbiAgICAgICAgICAgICAgICAgICAgKCFuYW1lc3BhY2UgfHwgaXRlbS5uYW1lc3BhY2UgPT09IG5hbWVzcGFjZSkgJiZcbiAgICAgICAgICAgICAgICAgICAgKCFoYW5kbGVyIHx8IGl0ZW0uaGFuZGxlciA9PT0gaGFuZGxlcikgJiZcbiAgICAgICAgICAgICAgICAgICAgKCFzZWxlY3RvciB8fCBpdGVtLnNlbGVjdG9yID09PSBzZWxlY3RvcikpO1xuICAgICAgICAgICAgfSksIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoaXRlbS5ldmVudE5hbWUsIGl0ZW0uZXZlbnRMaXN0ZW5lciwgdXNlQ2FwdHVyZSB8fCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgaGFuZGxlcnMuc3BsaWNlKGhhbmRsZXJzLmluZGV4T2YoaXRlbSksIDEpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmICghZXZlbnROYW1lICYmICFuYW1lc3BhY2UgJiYgIXNlbGVjdG9yICYmICFoYW5kbGVyKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJIYW5kbGVycyhlbGVtZW50KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaGFuZGxlcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJIYW5kbGVycyhlbGVtZW50KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KTtcblxuICAgIH0sIHRoaXMpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG59XG5cbmZ1bmN0aW9uIGRlbGVnYXRlKHNlbGVjdG9yLCBldmVudE5hbWUsIGhhbmRsZXIpIHtcbiAgICByZXR1cm4gb24uY2FsbCh0aGlzLCBldmVudE5hbWUsIHNlbGVjdG9yLCBoYW5kbGVyKTtcbn1cblxuZnVuY3Rpb24gdW5kZWxlZ2F0ZShzZWxlY3RvciwgZXZlbnROYW1lLCBoYW5kbGVyKSB7XG4gICAgcmV0dXJuIG9mZi5jYWxsKHRoaXMsIGV2ZW50TmFtZSwgc2VsZWN0b3IsIGhhbmRsZXIpO1xufVxuXG4vKipcbiAqIEdldCBldmVudCBoYW5kbGVycyBmcm9tIGFuIGVsZW1lbnRcbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtOb2RlfSBlbGVtZW50XG4gKiBAcmV0dXJuIHtBcnJheX1cbiAqL1xuXG52YXIgZXZlbnRLZXlQcm9wID0gJ19fZG9tdGFzdGljX2V2ZW50X18nO1xudmFyIGlkID0gMTtcbnZhciBoYW5kbGVycyA9IHt9O1xudmFyIHVudXNlZEtleXMgPSBbXTtcblxuZnVuY3Rpb24gZ2V0SGFuZGxlcnMoZWxlbWVudCkge1xuICAgIGlmICghZWxlbWVudFtldmVudEtleVByb3BdKSB7XG4gICAgICAgIGVsZW1lbnRbZXZlbnRLZXlQcm9wXSA9IHVudXNlZEtleXMubGVuZ3RoID09PSAwID8gKytpZCA6IHVudXNlZEtleXMucG9wKCk7XG4gICAgfVxuICAgIHZhciBrZXkgPSBlbGVtZW50W2V2ZW50S2V5UHJvcF07XG4gICAgcmV0dXJuIGhhbmRsZXJzW2tleV0gfHwgKGhhbmRsZXJzW2tleV0gPSBbXSk7XG59XG5cbi8qKlxuICogQ2xlYXIgZXZlbnQgaGFuZGxlcnMgZm9yIGFuIGVsZW1lbnRcbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtOb2RlfSBlbGVtZW50XG4gKi9cblxuZnVuY3Rpb24gY2xlYXJIYW5kbGVycyhlbGVtZW50KSB7XG4gICAgdmFyIGtleSA9IGVsZW1lbnRbZXZlbnRLZXlQcm9wXTtcbiAgICBpZiAoaGFuZGxlcnNba2V5XSkge1xuICAgICAgICBoYW5kbGVyc1trZXldID0gbnVsbDtcbiAgICAgICAgZWxlbWVudFtrZXldID0gbnVsbDtcbiAgICAgICAgdW51c2VkS2V5cy5wdXNoKGtleSk7XG4gICAgfVxufVxuXG4vKipcbiAqIEZ1bmN0aW9uIHRvIGNyZWF0ZSBhIGhhbmRsZXIgdGhhdCBhdWdtZW50cyB0aGUgZXZlbnQgb2JqZWN0IHdpdGggc29tZSBleHRyYSBtZXRob2RzLFxuICogYW5kIGV4ZWN1dGVzIHRoZSBjYWxsYmFjayB3aXRoIHRoZSBldmVudCBhbmQgdGhlIGV2ZW50IGRhdGEgKGkuZS4gYGV2ZW50LmRldGFpbGApLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0gaGFuZGxlciBDYWxsYmFjayB0byBleGVjdXRlIGFzIGBoYW5kbGVyKGV2ZW50LCBkYXRhKWBcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICovXG5cbmZ1bmN0aW9uIHByb3h5SGFuZGxlcihoYW5kbGVyKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIGhhbmRsZXIuY2FsbCh0aGlzLCBhdWdtZW50RXZlbnQoZXZlbnQpLCBldmVudC5kZXRhaWwpO1xuICAgIH07XG59XG5cbi8qKlxuICogQXR0ZW1wdCB0byBhdWdtZW50IGV2ZW50cyBhbmQgaW1wbGVtZW50IHNvbWV0aGluZyBjbG9zZXIgdG8gRE9NIExldmVsIDMgRXZlbnRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gZXZlbnRcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICovXG5cbnZhciBhdWdtZW50RXZlbnQgPSAoZnVuY3Rpb24oKSB7XG5cbiAgICB2YXIgbWV0aG9kTmFtZSxcbiAgICAgICAgZXZlbnRNZXRob2RzID0ge1xuICAgICAgICAgICAgcHJldmVudERlZmF1bHQ6ICdpc0RlZmF1bHRQcmV2ZW50ZWQnLFxuICAgICAgICAgICAgc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uOiAnaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQnLFxuICAgICAgICAgICAgc3RvcFByb3BhZ2F0aW9uOiAnaXNQcm9wYWdhdGlvblN0b3BwZWQnXG4gICAgICAgIH0sXG4gICAgICAgIG5vb3AgPSAoKSA9PiB7fSxcbiAgICAgICAgcmV0dXJuVHJ1ZSA9ICgpID0+IHRydWUsXG4gICAgICAgIHJldHVybkZhbHNlID0gKCkgPT4gZmFsc2U7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgaWYgKCFldmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQgfHwgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uIHx8IGV2ZW50LnN0b3BQcm9wYWdhdGlvbikge1xuICAgICAgICAgICAgZm9yIChtZXRob2ROYW1lIGluIGV2ZW50TWV0aG9kcykge1xuICAgICAgICAgICAgICAgIChmdW5jdGlvbihtZXRob2ROYW1lLCB0ZXN0TWV0aG9kTmFtZSwgb3JpZ2luYWxNZXRob2QpIHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRbbWV0aG9kTmFtZV0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNbdGVzdE1ldGhvZE5hbWVdID0gcmV0dXJuVHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvcmlnaW5hbE1ldGhvZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBldmVudFt0ZXN0TWV0aG9kTmFtZV0gPSByZXR1cm5GYWxzZTtcbiAgICAgICAgICAgICAgICB9KG1ldGhvZE5hbWUsIGV2ZW50TWV0aG9kc1ttZXRob2ROYW1lXSwgZXZlbnRbbWV0aG9kTmFtZV0gfHwgbm9vcCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGV2ZW50Ll9wcmV2ZW50RGVmYXVsdCkge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGV2ZW50O1xuICAgIH1cblxufSkoKTtcblxuLyoqXG4gKiBGdW5jdGlvbiB0byB0ZXN0IHdoZXRoZXIgZGVsZWdhdGVkIGV2ZW50cyBtYXRjaCB0aGUgcHJvdmlkZWQgYHNlbGVjdG9yYCAoZmlsdGVyKSxcbiAqIGlmIHRoZSBldmVudCBwcm9wYWdhdGlvbiB3YXMgc3RvcHBlZCwgYW5kIHRoZW4gYWN0dWFsbHkgY2FsbCB0aGUgcHJvdmlkZWQgZXZlbnQgaGFuZGxlci5cbiAqIFVzZSBgdGhpc2AgaW5zdGVhZCBvZiBgZXZlbnQuY3VycmVudFRhcmdldGAgb24gdGhlIGV2ZW50IG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtTdHJpbmd9IHNlbGVjdG9yIFNlbGVjdG9yIHRvIGZpbHRlciBkZXNjZW5kYW50cyB0aGF0IHVuZGVsZWdhdGUgdGhlIGV2ZW50IHRvIHRoaXMgZWxlbWVudC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGhhbmRsZXIgRXZlbnQgaGFuZGxlclxuICogQHBhcmFtIHtFdmVudH0gZXZlbnRcbiAqL1xuXG5mdW5jdGlvbiBkZWxlZ2F0ZUhhbmRsZXIoc2VsZWN0b3IsIGhhbmRsZXIsIGV2ZW50KSB7XG4gICAgdmFyIGV2ZW50VGFyZ2V0ID0gZXZlbnQuX3RhcmdldCB8fCBldmVudC50YXJnZXQsXG4gICAgICAgIGN1cnJlbnRUYXJnZXQgPSBjbG9zZXN0LmNhbGwoW2V2ZW50VGFyZ2V0XSwgc2VsZWN0b3IsIHRoaXMpWzBdO1xuICAgIGlmIChjdXJyZW50VGFyZ2V0ICYmIGN1cnJlbnRUYXJnZXQgIT09IHRoaXMpIHtcbiAgICAgICAgaWYgKGN1cnJlbnRUYXJnZXQgPT09IGV2ZW50VGFyZ2V0IHx8ICEoZXZlbnQuaXNQcm9wYWdhdGlvblN0b3BwZWQgJiYgZXZlbnQuaXNQcm9wYWdhdGlvblN0b3BwZWQoKSkpIHtcbiAgICAgICAgICAgIGhhbmRsZXIuY2FsbChjdXJyZW50VGFyZ2V0LCBldmVudCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbnZhciBiaW5kID0gb24sXG4gICAgdW5iaW5kID0gb2ZmO1xuXG4vKlxuICogRXhwb3J0IGludGVyZmFjZVxuICovXG5cbmV4cG9ydCB7IG9uLCBvZmYsIGRlbGVnYXRlLCB1bmRlbGVnYXRlLCBiaW5kLCB1bmJpbmQgfTtcbiIsIi8qKlxuICogQG1vZHVsZSBIVE1MXG4gKi9cblxuaW1wb3J0IHsgZWFjaCB9IGZyb20gJy4vdXRpbCc7XG5cbi8qXG4gKiBHZXQgdGhlIEhUTUwgY29udGVudHMgb2YgdGhlIGZpcnN0IGVsZW1lbnQsIG9yIHNldCB0aGUgSFRNTCBjb250ZW50cyBmb3IgZWFjaCBlbGVtZW50IGluIHRoZSBjb2xsZWN0aW9uLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBbZnJhZ21lbnRdIEhUTUwgZnJhZ21lbnQgdG8gc2V0IGZvciB0aGUgZWxlbWVudC4gSWYgdGhpcyBhcmd1bWVudCBpcyBvbWl0dGVkLCB0aGUgSFRNTCBjb250ZW50cyBhcmUgcmV0dXJuZWQuXG4gKiBAcmV0dXJuIHtPYmplY3R9IFRoZSB3cmFwcGVkIGNvbGxlY3Rpb25cbiAqIEBjaGFpbmFibGVcbiAqIEBleGFtcGxlXG4gKiAgICAgJCgnLml0ZW0nKS5odG1sKCk7XG4gKiAgICAgJCgnLml0ZW0nKS5odG1sKCc8c3Bhbj5tb3JlPC9zcGFuPicpO1xuICovXG5cbmZ1bmN0aW9uIGh0bWwoZnJhZ21lbnQpIHtcblxuICAgIGlmICh0eXBlb2YgZnJhZ21lbnQgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHZhciBlbGVtZW50ID0gdGhpcy5ub2RlVHlwZSA/IHRoaXMgOiB0aGlzWzBdO1xuICAgICAgICByZXR1cm4gZWxlbWVudCA/IGVsZW1lbnQuaW5uZXJIVE1MIDogdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGVhY2godGhpcywgZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9IGZyYWdtZW50O1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXM7XG5cbn1cblxuLypcbiAqIEV4cG9ydCBpbnRlcmZhY2VcbiAqL1xuXG5leHBvcnQgeyBodG1sIH07XG4iLCIvKipcbiAqIEBtb2R1bGUgQVBJXG4gKi9cblxuaW1wb3J0IHsgZXh0ZW5kLCBleHRlbmRBbGwgfSBmcm9tICcuL3V0aWwnO1xuXG52YXIgYXBpID0ge30sXG4gICAgYXBpTm9kZUxpc3QgPSB7fSxcbiAgICAkID0ge307XG5cbi8vIEltcG9ydCBtb2R1bGVzIHRvIGJ1aWxkIHVwIHRoZSBBUElcblxuaW1wb3J0ICogYXMgYXJyYXkgZnJvbSAnLi9hcnJheSc7XG5pbXBvcnQgKiBhcyBhdHRyIGZyb20gJy4vYXR0cic7XG5pbXBvcnQgKiBhcyBjbGFzc18gZnJvbSAnLi9jbGFzcyc7XG5pbXBvcnQgKiBhcyBjb250YWlucyBmcm9tICcuL2NvbnRhaW5zJztcbmltcG9ydCAqIGFzIGNzcyBmcm9tICcuL2Nzcyc7XG5pbXBvcnQgKiBhcyBkYXRhIGZyb20gJy4vZGF0YSc7XG5pbXBvcnQgKiBhcyBkb20gZnJvbSAnLi9kb20nO1xuaW1wb3J0ICogYXMgZG9tX2V4dHJhIGZyb20gJy4vZG9tX2V4dHJhJztcbmltcG9ydCAqIGFzIGV2ZW50IGZyb20gJy4vZXZlbnQnO1xuaW1wb3J0ICogYXMgaHRtbCBmcm9tICcuL2h0bWwnO1xuaW1wb3J0ICogYXMgbW9kZSBmcm9tICcuL21vZGUnO1xuaW1wb3J0ICogYXMgbm9jb25mbGljdCBmcm9tICcuL25vY29uZmxpY3QnO1xuaW1wb3J0ICogYXMgcmVhZHkgZnJvbSAnLi9yZWFkeSc7XG5pbXBvcnQgKiBhcyBzZWxlY3RvciBmcm9tICcuL3NlbGVjdG9yJztcbmltcG9ydCAqIGFzIHNlbGVjdG9yX2V4dHJhIGZyb20gJy4vc2VsZWN0b3JfZXh0cmEnO1xuaW1wb3J0ICogYXMgdHJpZ2dlciBmcm9tICcuL3RyaWdnZXInO1xuaW1wb3J0ICogYXMgdHlwZSBmcm9tICcuL3R5cGUnO1xuXG5pZiAodHlwZW9mIHNlbGVjdG9yICE9PSAndW5kZWZpbmVkJykge1xuICAgICQgPSBzZWxlY3Rvci4kO1xuICAgICQubWF0Y2hlcyA9IHNlbGVjdG9yLm1hdGNoZXM7XG4gICAgYXBpLmZpbmQgPSBzZWxlY3Rvci5maW5kO1xuICAgIGFwaS5jbG9zZXN0ID0gc2VsZWN0b3IuY2xvc2VzdDtcbn1cblxuZXh0ZW5kQWxsKCQsIGNvbnRhaW5zLCBtb2RlLCBub2NvbmZsaWN0LCB0eXBlKTtcbmV4dGVuZEFsbChhcGksIGFycmF5LCBhdHRyLCBjbGFzc18sIGNzcywgZGF0YSwgZG9tLCBkb21fZXh0cmEsIGV2ZW50LCBodG1sLCByZWFkeSwgc2VsZWN0b3JfZXh0cmEsIHRyaWdnZXIpO1xuZXh0ZW5kQWxsKGFwaU5vZGVMaXN0LCBhcnJheSk7XG5cbi8vIFZlcnNpb25cblxuJC52ZXJzaW9uID0gJ19fVkVSU0lPTl9fJztcblxuLy8gVXRpbFxuXG4kLmV4dGVuZCA9IGV4dGVuZDtcblxuLy8gSW50ZXJuYWwgcHJvcGVydGllcyB0byBzd2l0Y2ggYmV0d2VlbiBkZWZhdWx0IGFuZCBuYXRpdmUgbW9kZVxuXG4kLmZuID0gYXBpO1xuJC5mbkxpc3QgPSBhcGlOb2RlTGlzdDtcblxuLy8gRXhwb3J0IGludGVyZmFjZVxuXG5leHBvcnQgZGVmYXVsdCAkO1xuIiwiLypcbiAqICMgT3B0LWluIHRvIE5hdGl2ZSBNb2RlXG4gKlxuICogVGhlIGRlZmF1bHQsIG5vbi1pbnRydXNpdmUgbW9kZSBpcyBzaW1pbGFyIHRvIGhvdyBqUXVlcnkgb3BlcmF0ZXM6IHdvcmtpbmcgd2l0aCBzdGF0aWMsIGFycmF5LWxpa2UgYCRgIG9iamVjdHM6XG4gKlxuICogICAgICQoJy5pdGVtcycpLmFwcGVuZCgnPHNwYW4+Zm9vPC9zcGFuPik7XG4gKiAgICAgJChkb2N1bWVudC5ib2R5KS5vbignY2xpY2snLCAnLnRhYicsIGhhbmRsZXIpO1xuICpcbiAqIEhvd2V2ZXIsIHlvdSBjYW4gb3B0LWluIHRvIHdvcmsgd2l0aCBsaXZlIE5vZGVMaXN0IG9iamVjdHMuXG4gKiBJbiB0aGlzIFwibmF0aXZlXCIgbW9kZSwgdGhlIGBOb2RlYCBhbmQgYE5vZGVMaXN0YCBwcm90b3R5cGVzIGFyZSBhdWdtZW50ZWQgKGluIGEgc2FmZSBhbmQgcmV2ZXJzaWJsZSBtYW5uZXIpIHRvIGZpbGwgdXAgdGhlIGNoYWluYWJsZSBBUEksXG4gKiB0byBlbmFibGUgd29ya2luZyB3aXRoIGBOb2RlYCBhbmQgYE5vZGVMaXN0YCBvYmplY3RzIGRpcmVjdGx5OlxuICpcbiAqICAgICB2YXIgY29sbGVjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pdGVtcycpO1xuICogICAgIGNvbGxlY3Rpb24uYXBwZW5kKCc8c3Bhbj5mb288L3NwYW4+KTtcbiAqICAgICBjb2xsZWN0aW9uLmFkZENsYXNzKCdiYXInKTtcbiAqICAgICBjb2xsZWN0aW9uLmZvckVhY2goaXRlcmF0b3JGbik7XG4gKiAgICAgY29sbGVjdGlvbi5maW5kKCcubW9yZScpO1xuICpcbiAqICAgICBkb2N1bWVudC5ib2R5Lm9uKCdjbGljaycsICcudGFiJywgaGFuZGxlcilcbiAqXG4gKiBOb3RlIHRoYXQgaW4gbmF0aXZlIG1vZGUsIGAkKHNlbGVjdG9yKWAgY2FuIHN0aWwgYmUgdXNlZC4gSXQgcmV0dXJucyBhIE5vZGVMaXN0LlxuICpcbiAqIEJ1aWxkIHRoZSBsaWIgdXNpbmcgZ3VscCB3aXRoIGBtb2RlYCBub3QgZXhjbHVkZWQuXG4gKiBVc2UgYCQubmF0aXZlKClgIHRvIGFjdGl2YXRlIHRoaXMgYmVoYXZpb3IuIFRoZSBBUEkgaXMgdGhlIHNhbWUgaW4gYm90aCBtb2Rlcy5cbiAqL1xuXG5pbXBvcnQgeyBnbG9iYWwgfSBmcm9tICcuL3V0aWwnO1xuXG52YXIgaXNOYXRpdmUgPSBmYWxzZTtcblxuZnVuY3Rpb24gbmF0aXZlKGdvTmF0aXZlID0gdHJ1ZSkge1xuICAgIHZhciB3YXNOYXRpdmUgPSBpc05hdGl2ZTtcbiAgICBpc05hdGl2ZSA9IGdvTmF0aXZlO1xuICAgIGlmIChnbG9iYWwuJCkge1xuICAgICAgICBnbG9iYWwuJC5pc05hdGl2ZSA9IGlzTmF0aXZlO1xuICAgIH1cbiAgICBpZiAoIXdhc05hdGl2ZSAmJiBpc05hdGl2ZSkge1xuICAgICAgICBhdWdtZW50TmF0aXZlUHJvdG90eXBlcyh0aGlzLmZuLCB0aGlzLmZuTGlzdCk7XG4gICAgfVxuICAgIGlmICh3YXNOYXRpdmUgJiYgIWlzTmF0aXZlKSB7XG4gICAgICAgIHVuYXVnbWVudE5hdGl2ZVByb3RvdHlwZXModGhpcy5mbiwgdGhpcy5mbkxpc3QpO1xuICAgIH1cbiAgICByZXR1cm4gaXNOYXRpdmU7XG59XG5cbnZhciBOb2RlUHJvdG8gPSB0eXBlb2YgTm9kZSAhPT0gJ3VuZGVmaW5lZCcgJiYgTm9kZS5wcm90b3R5cGUsXG4gICAgTm9kZUxpc3RQcm90byA9IHR5cGVvZiBOb2RlTGlzdCAhPT0gJ3VuZGVmaW5lZCcgJiYgTm9kZUxpc3QucHJvdG90eXBlO1xuXG4vKlxuICogQWRkIGEgcHJvcGVydHkgKGkuZS4gbWV0aG9kKSB0byBhbiBvYmplY3QgaW4gYSBzYWZlIGFuZCByZXZlcnNpYmxlIG1hbm5lci5cbiAqIE9ubHkgYWRkIHRoZSBtZXRob2QgaWYgb2JqZWN0IG5vdCBhbHJlYWR5IGhhZCBpdCAobm9uLWluaGVyaXRlZCkuXG4gKlxuICogQHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBhdWdtZW50KG9iaiwga2V5LCB2YWx1ZSkge1xuICAgIGlmICghb2JqLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbi8qXG4gKiBSZW1vdmUgcHJvcGVydHkgZnJvbSBvYmplY3QgKG9ubHkgaW5oZXJpdGVkIHByb3BlcnRpZXMgd2lsbCBiZSByZW1vdmVkKS5cbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5cbnZhciB1bmF1Z21lbnQgPSAob2JqLCBrZXkpID0+IHsgZGVsZXRlIG9ialtrZXldIH07XG5cbi8qXG4gKiBBdWdtZW50IG5hdGl2ZSBgTm9kZWAgYW5kIGBOb2RlTGlzdGAgb2JqZWN0cyBpbiBuYXRpdmUgbW9kZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGF1Z21lbnROYXRpdmVQcm90b3R5cGVzKG1ldGhvZHNOb2RlLCBtZXRob2RzTm9kZUxpc3QpIHtcblxuICAgIHZhciBrZXk7XG5cbiAgICBmb3IgKGtleSBpbiBtZXRob2RzTm9kZSkge1xuICAgICAgICBhdWdtZW50KE5vZGVQcm90bywga2V5LCBtZXRob2RzTm9kZVtrZXldKTtcbiAgICAgICAgYXVnbWVudChOb2RlTGlzdFByb3RvLCBrZXksIG1ldGhvZHNOb2RlW2tleV0pO1xuICAgIH1cblxuICAgIGZvciAoa2V5IGluIG1ldGhvZHNOb2RlTGlzdCkge1xuICAgICAgICBhdWdtZW50KE5vZGVMaXN0UHJvdG8sIGtleSwgbWV0aG9kc05vZGVMaXN0W2tleV0pO1xuICAgIH1cbn1cblxuLypcbiAqIFVuYXVnbWVudCBuYXRpdmUgYE5vZGVgIGFuZCBgTm9kZUxpc3RgIG9iamVjdHMgdG8gc3dpdGNoIGJhY2sgdG8gZGVmYXVsdCBtb2RlLlxuICogTWFpbmx5IHVzZWQgZm9yIHRlc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gdW5hdWdtZW50TmF0aXZlUHJvdG90eXBlcyhtZXRob2RzTm9kZSwgbWV0aG9kc05vZGVMaXN0KSB7XG5cbiAgICB2YXIga2V5O1xuXG4gICAgZm9yIChrZXkgaW4gbWV0aG9kc05vZGUpIHtcbiAgICAgICAgdW5hdWdtZW50KE5vZGVQcm90bywga2V5KTtcbiAgICAgICAgdW5hdWdtZW50KE5vZGVMaXN0UHJvdG8sIGtleSk7XG4gICAgfVxuXG4gICAgZm9yIChrZXkgaW4gbWV0aG9kc05vZGVMaXN0KSB7XG4gICAgICAgIHVuYXVnbWVudChOb2RlTGlzdFByb3RvLCBrZXkpO1xuICAgIH1cbn1cblxuLy8gRXhwb3J0IGludGVyZmFjZVxuXG5leHBvcnQgeyBpc05hdGl2ZSwgbmF0aXZlIH07XG4iLCIvKipcbiAqIEBtb2R1bGUgbm9Db25mbGljdFxuICovXG5cbmltcG9ydCB7IGdsb2JhbCB9IGZyb20gJy4vdXRpbCc7XG5cbi8qXG4gKiBTYXZlIHRoZSBwcmV2aW91cyB2YWx1ZSBvZiB0aGUgZ2xvYmFsIGAkYCB2YXJpYWJsZSwgc28gdGhhdCBpdCBjYW4gYmUgcmVzdG9yZWQgbGF0ZXIgb24uXG4gKiBAcHJpdmF0ZVxuICovXG5cbnZhciBwcmV2aW91c0xpYiA9IGdsb2JhbC4kO1xuXG4vKipcbiAqIEluIGNhc2UgYW5vdGhlciBsaWJyYXJ5IHNldHMgdGhlIGdsb2JhbCBgJGAgdmFyaWFibGUgYmVmb3JlIERPTXRhc3RpYyBkb2VzLFxuICogdGhpcyBtZXRob2QgY2FuIGJlIHVzZWQgdG8gcmV0dXJuIHRoZSBnbG9iYWwgYCRgIHRvIHRoYXQgb3RoZXIgbGlicmFyeS5cbiAqXG4gKiBAcmV0dXJuIHtPYmplY3R9IFJlZmVyZW5jZSB0byBET010YXN0aWMuXG4gKiBAZXhhbXBsZVxuICogICAgIHZhciAkRSA9ICQubm9Db25mbGljdCgpO1xuICovXG5cbmZ1bmN0aW9uIG5vQ29uZmxpY3QoKSB7XG4gICAgZ2xvYmFsLiQgPSBwcmV2aW91c0xpYjtcbiAgICByZXR1cm4gdGhpcztcbn1cblxuLypcbiAqIEV4cG9ydCBpbnRlcmZhY2VcbiAqL1xuXG5leHBvcnQgeyBub0NvbmZsaWN0IH07XG4iLCIvKipcbiAqIEBtb2R1bGUgUmVhZHlcbiAqL1xuXG4vKipcbiAqIEV4ZWN1dGUgY2FsbGJhY2sgd2hlbiBgRE9NQ29udGVudExvYWRlZGAgZmlyZXMgZm9yIGBkb2N1bWVudGAsIG9yIGltbWVkaWF0ZWx5IGlmIGNhbGxlZCBhZnRlcndhcmRzLlxuICpcbiAqIEBwYXJhbSBoYW5kbGVyIENhbGxiYWNrIHRvIGV4ZWN1dGUgd2hlbiBpbml0aWFsIERPTSBjb250ZW50IGlzIGxvYWRlZC5cbiAqIEByZXR1cm4ge09iamVjdH0gVGhlIHdyYXBwZWQgY29sbGVjdGlvblxuICogQGNoYWluYWJsZVxuICogQGV4YW1wbGVcbiAqICAgICAkKGRvY3VtZW50KS5yZWFkeShjYWxsYmFjayk7XG4gKi9cblxuZnVuY3Rpb24gcmVhZHkoaGFuZGxlcikge1xuICAgIGlmICgvY29tcGxldGV8bG9hZGVkfGludGVyYWN0aXZlLy50ZXN0KGRvY3VtZW50LnJlYWR5U3RhdGUpICYmIGRvY3VtZW50LmJvZHkpIHtcbiAgICAgICAgaGFuZGxlcigpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBoYW5kbGVyLCBmYWxzZSlcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG59XG5cbi8qXG4gKiBFeHBvcnQgaW50ZXJmYWNlXG4gKi9cblxuZXhwb3J0IHsgcmVhZHkgfTtcbiIsIi8qKlxuICogQG1vZHVsZSBTZWxlY3RvclxuICovXG5cbmltcG9ydCB7IGdsb2JhbCwgbWFrZUl0ZXJhYmxlIH0gZnJvbSAnLi91dGlsJztcblxudmFyIGlzUHJvdG90eXBlU2V0ID0gZmFsc2UsXG4gICAgcmVGcmFnbWVudCA9IC9eXFxzKjwoXFx3K3whKVtePl0qPi8sXG4gICAgcmVTaW5nbGVUYWcgPSAvXjwoXFx3KylcXHMqXFwvPz4oPzo8XFwvXFwxPnwpJC8sXG4gICAgcmVTaW1wbGVTZWxlY3RvciA9IC9eW1xcLiNdP1tcXHctXSokLztcblxuLypcbiAqIFZlcnNhdGlsZSB3cmFwcGVyIGZvciBgcXVlcnlTZWxlY3RvckFsbGAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd8Tm9kZXxOb2RlTGlzdHxBcnJheX0gc2VsZWN0b3IgUXVlcnkgc2VsZWN0b3IsIGBOb2RlYCwgYE5vZGVMaXN0YCwgYXJyYXkgb2YgZWxlbWVudHMsIG9yIEhUTUwgZnJhZ21lbnQgc3RyaW5nLlxuICogQHBhcmFtIHtTdHJpbmd8Tm9kZXxOb2RlTGlzdH0gY29udGV4dD1kb2N1bWVudCBUaGUgY29udGV4dCBmb3IgdGhlIHNlbGVjdG9yIHRvIHF1ZXJ5IGVsZW1lbnRzLlxuICogQHJldHVybiB7T2JqZWN0fSBUaGUgd3JhcHBlZCBjb2xsZWN0aW9uXG4gKiBAY2hhaW5hYmxlXG4gKiBAZXhhbXBsZVxuICogICAgIHZhciAkaXRlbXMgPSAkKC5pdGVtcycpO1xuICogQGV4YW1wbGVcbiAqICAgICB2YXIgJGVsZW1lbnQgPSAkKGRvbUVsZW1lbnQpO1xuICogQGV4YW1wbGVcbiAqICAgICB2YXIgJGxpc3QgPSAkKG5vZGVMaXN0LCBkb2N1bWVudC5ib2R5KTtcbiAqIEBleGFtcGxlXG4gKiAgICAgdmFyICRlbGVtZW50ID0gJCgnPHA+ZXZlcmdyZWVuPC9wPicpO1xuICovXG5cbmZ1bmN0aW9uICQoc2VsZWN0b3IsIGNvbnRleHQgPSBkb2N1bWVudCkge1xuXG4gICAgdmFyIGNvbGxlY3Rpb247XG5cbiAgICBpZiAoIXNlbGVjdG9yKSB7XG5cbiAgICAgICAgY29sbGVjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwobnVsbCk7XG5cbiAgICB9IGVsc2UgaWYgKHNlbGVjdG9yIGluc3RhbmNlb2YgV3JhcHBlcikge1xuXG4gICAgICAgIHJldHVybiBzZWxlY3RvcjtcblxuICAgIH0gZWxzZSBpZiAodHlwZW9mIHNlbGVjdG9yICE9PSAnc3RyaW5nJykge1xuXG4gICAgICAgIGNvbGxlY3Rpb24gPSBtYWtlSXRlcmFibGUoc2VsZWN0b3IpO1xuXG4gICAgfSBlbHNlIGlmIChyZUZyYWdtZW50LnRlc3Qoc2VsZWN0b3IpKSB7XG5cbiAgICAgICAgY29sbGVjdGlvbiA9IGNyZWF0ZUZyYWdtZW50KHNlbGVjdG9yKTtcblxuICAgIH0gZWxzZSB7XG5cbiAgICAgICAgY29udGV4dCA9IHR5cGVvZiBjb250ZXh0ID09PSAnc3RyaW5nJyA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29udGV4dCkgOiBjb250ZXh0Lmxlbmd0aCA/IGNvbnRleHRbMF0gOiBjb250ZXh0O1xuXG4gICAgICAgIGNvbGxlY3Rpb24gPSBxdWVyeVNlbGVjdG9yKHNlbGVjdG9yLCBjb250ZXh0KTtcblxuICAgIH1cblxuICAgIHJldHVybiAkLmlzTmF0aXZlID8gY29sbGVjdGlvbiA6IHdyYXAoY29sbGVjdGlvbik7XG5cbn1cblxuLypcbiAqIENoYWluaW5nIGZvciB0aGUgYCRgIHdyYXBwZXIgKGFsaWFzaW5nIGBmaW5kYCBmb3IgYCRgKS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ3xOb2RlfE5vZGVMaXN0fEFycmF5fSBzZWxlY3RvciBRdWVyeSBzZWxlY3RvciwgYE5vZGVgLCBgTm9kZUxpc3RgLCBhcnJheSBvZiBlbGVtZW50cywgb3IgSFRNTCBmcmFnbWVudCBzdHJpbmcuXG4gKiBAcmV0dXJuIHtPYmplY3R9IFRoZSB3cmFwcGVkIGNvbGxlY3Rpb25cbiAqIEBleGFtcGxlXG4gKiAgICAgJCgnLnNlbGVjdG9yJykuZmluZCgnLmRlZXAnKS4kKCcuZGVlcGVzdCcpO1xuICovXG5cbmZ1bmN0aW9uIGZpbmQoc2VsZWN0b3IpIHtcbiAgICByZXR1cm4gJChzZWxlY3RvciwgdGhpcyk7XG59XG5cbi8qKlxuICogUmV0dXJuIHRoZSBjbG9zZXN0IGVsZW1lbnQgbWF0Y2hpbmcgdGhlIHNlbGVjdG9yIChzdGFydGluZyBieSBpdHNlbGYpLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzZWxlY3RvciBGaWx0ZXJcbiAqIEBwYXJhbSB7T2JqZWN0fSBbY29udGV4dF0gSWYgcHJvdmlkZWQsIG1hdGNoaW5nIGVsZW1lbnRzIG11c3QgYmUgYSBkZXNjZW5kYW50IG9mIHRoaXMgZWxlbWVudFxuICogQHJldHVybiB7T2JqZWN0fSBOZXcgd3JhcHBlZCBjb2xsZWN0aW9uIChjb250YWluaW5nIHplcm8gb3Igb25lIGVsZW1lbnQpXG4gKiBAY2hhaW5hYmxlXG4gKiBAZXhhbXBsZVxuICogICAgICQoJy5zZWxlY3RvcicpLmNsb3Nlc3QoJy5jb250YWluZXInKTtcbiAqL1xuXG5mdW5jdGlvbiBjbG9zZXN0KHNlbGVjdG9yLCBjb250ZXh0KSB7XG4gICAgdmFyIG5vZGUgPSB0aGlzWzBdO1xuICAgIGZvciAoOyBub2RlLm5vZGVUeXBlICE9PSBub2RlLkRPQ1VNRU5UX05PREUgJiYgbm9kZSAhPT0gY29udGV4dDsgbm9kZSA9IG5vZGUucGFyZW50Tm9kZSkge1xuICAgICAgICBpZiAobWF0Y2hlcyhub2RlLCBzZWxlY3RvcikpIHtcbiAgICAgICAgICAgIHJldHVybiAkKG5vZGUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiAkKCk7XG59XG5cbi8qXG4gKiBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZWxlbWVudCB3b3VsZCBiZSBzZWxlY3RlZCBieSB0aGUgc3BlY2lmaWVkIHNlbGVjdG9yIHN0cmluZzsgb3RoZXJ3aXNlLCByZXR1cm5zIGBmYWxzZWAuXG4gKlxuICogQHBhcmFtIHtOb2RlfSBlbGVtZW50IEVsZW1lbnQgdG8gdGVzdFxuICogQHBhcmFtIHtTdHJpbmd9IHNlbGVjdG9yIFNlbGVjdG9yIHRvIG1hdGNoIGFnYWluc3QgZWxlbWVudFxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqXG4gKiBAZXhhbXBsZVxuICogICAgICQubWF0Y2hlcyhlbGVtZW50LCAnLm1hdGNoJyk7XG4gKi9cblxudmFyIG1hdGNoZXMgPSAoZnVuY3Rpb24oKSB7XG4gICAgdmFyIGNvbnRleHQgPSB0eXBlb2YgRWxlbWVudCAhPT0gJ3VuZGVmaW5lZCcgPyBFbGVtZW50LnByb3RvdHlwZSA6IGdsb2JhbCxcbiAgICAgICAgX21hdGNoZXMgPSBjb250ZXh0Lm1hdGNoZXMgfHwgY29udGV4dC5tYXRjaGVzU2VsZWN0b3IgfHwgY29udGV4dC5tb3pNYXRjaGVzU2VsZWN0b3IgfHwgY29udGV4dC53ZWJraXRNYXRjaGVzU2VsZWN0b3IgfHwgY29udGV4dC5tc01hdGNoZXNTZWxlY3RvciB8fCBjb250ZXh0Lm9NYXRjaGVzU2VsZWN0b3I7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGVsZW1lbnQsIHNlbGVjdG9yKSB7XG4gICAgICAgIHJldHVybiBfbWF0Y2hlcy5jYWxsKGVsZW1lbnQsIHNlbGVjdG9yKTtcbiAgICB9O1xufSkoKTtcblxuLypcbiAqIFVzZSB0aGUgZmFzdGVyIGBnZXRFbGVtZW50QnlJZGAsIGBnZXRFbGVtZW50c0J5Q2xhc3NOYW1lYCBvciBgZ2V0RWxlbWVudHNCeVRhZ05hbWVgIG92ZXIgYHF1ZXJ5U2VsZWN0b3JBbGxgIGlmIHBvc3NpYmxlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge1N0cmluZ30gc2VsZWN0b3IgUXVlcnkgc2VsZWN0b3IuXG4gKiBAcGFyYW0ge05vZGV9IGNvbnRleHQgVGhlIGNvbnRleHQgZm9yIHRoZSBzZWxlY3RvciB0byBxdWVyeSBlbGVtZW50cy5cbiAqIEByZXR1cm4ge09iamVjdH0gTm9kZUxpc3QsIEhUTUxDb2xsZWN0aW9uLCBvciBBcnJheSBvZiBtYXRjaGluZyBlbGVtZW50cyAoZGVwZW5kaW5nIG9uIG1ldGhvZCB1c2VkKS5cbiAqL1xuXG5mdW5jdGlvbiBxdWVyeVNlbGVjdG9yKHNlbGVjdG9yLCBjb250ZXh0KSB7XG5cbiAgICB2YXIgaXNTaW1wbGVTZWxlY3RvciA9IHJlU2ltcGxlU2VsZWN0b3IudGVzdChzZWxlY3Rvcik7XG5cbiAgICBpZiAoaXNTaW1wbGVTZWxlY3RvciAmJiAhJC5pc05hdGl2ZSkge1xuICAgICAgICBpZiAoc2VsZWN0b3JbMF0gPT09ICcjJykge1xuICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSAoY29udGV4dC5nZXRFbGVtZW50QnlJZCA/IGNvbnRleHQgOiBkb2N1bWVudCkuZ2V0RWxlbWVudEJ5SWQoc2VsZWN0b3Iuc2xpY2UoMSkpO1xuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQgPyBbZWxlbWVudF0gOiBbXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2VsZWN0b3JbMF0gPT09ICcuJykge1xuICAgICAgICAgICAgcmV0dXJuIGNvbnRleHQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShzZWxlY3Rvci5zbGljZSgxKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbnRleHQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoc2VsZWN0b3IpO1xuICAgIH1cblxuICAgIHJldHVybiBjb250ZXh0LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuXG59XG5cbi8qXG4gKiBDcmVhdGUgRE9NIGZyYWdtZW50IGZyb20gYW4gSFRNTCBzdHJpbmdcbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtTdHJpbmd9IGh0bWwgU3RyaW5nIHJlcHJlc2VudGluZyBIVE1MLlxuICogQHJldHVybiB7Tm9kZUxpc3R9XG4gKi9cblxuZnVuY3Rpb24gY3JlYXRlRnJhZ21lbnQoaHRtbCkge1xuXG4gICAgaWYgKHJlU2luZ2xlVGFnLnRlc3QoaHRtbCkpIHtcbiAgICAgICAgcmV0dXJuIFtkb2N1bWVudC5jcmVhdGVFbGVtZW50KFJlZ0V4cC4kMSldO1xuICAgIH1cblxuICAgIHZhciBlbGVtZW50cyA9IFtdLFxuICAgICAgICBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcbiAgICAgICAgY2hpbGRyZW4gPSBjb250YWluZXIuY2hpbGROb2RlcztcblxuICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSBodG1sO1xuXG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgZWxlbWVudHMucHVzaChjaGlsZHJlbltpXSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZW1lbnRzO1xufVxuXG4vKlxuICogQ2FsbGluZyBgJChzZWxlY3RvcilgIHJldHVybnMgYSB3cmFwcGVkIGNvbGxlY3Rpb24gb2YgZWxlbWVudHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Tm9kZUxpc3R8QXJyYXl9IGNvbGxlY3Rpb24gRWxlbWVudChzKSB0byB3cmFwLlxuICogQHJldHVybiAoT2JqZWN0KSBUaGUgd3JhcHBlZCBjb2xsZWN0aW9uXG4gKi9cblxuZnVuY3Rpb24gd3JhcChjb2xsZWN0aW9uKSB7XG5cbiAgICBpZiAoIWlzUHJvdG90eXBlU2V0KSB7XG4gICAgICAgIFdyYXBwZXIucHJvdG90eXBlID0gJC5mbjtcbiAgICAgICAgV3JhcHBlci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBXcmFwcGVyO1xuICAgICAgICBpc1Byb3RvdHlwZVNldCA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBXcmFwcGVyKGNvbGxlY3Rpb24pO1xufVxuXG4vKlxuICogQ29uc3RydWN0b3IgZm9yIHRoZSBPYmplY3QucHJvdG90eXBlIHN0cmF0ZWd5XG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtOb2RlTGlzdHxBcnJheX0gY29sbGVjdGlvbiBFbGVtZW50KHMpIHRvIHdyYXAuXG4gKi9cblxuZnVuY3Rpb24gV3JhcHBlcihjb2xsZWN0aW9uKSB7XG4gICAgdmFyIGkgPSAwLCBsZW5ndGggPSBjb2xsZWN0aW9uLmxlbmd0aDtcbiAgICBmb3IgKDsgaSA8IGxlbmd0aDspIHtcbiAgICAgICAgdGhpc1tpXSA9IGNvbGxlY3Rpb25baSsrXTtcbiAgICB9XG4gICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XG59XG5cbi8qXG4gKiBFeHBvcnQgaW50ZXJmYWNlXG4gKi9cblxuZXhwb3J0IHsgJCwgZmluZCwgY2xvc2VzdCwgbWF0Y2hlcyB9O1xuIiwiLyoqXG4gKiBAbW9kdWxlIFNlbGVjdG9yIChleHRyYSlcbiAqL1xuXG5pbXBvcnQgeyBlYWNoLCB0b0FycmF5IH0gZnJvbSAnLi91dGlsJztcbmltcG9ydCB7ICQsIG1hdGNoZXMgfSBmcm9tICcuL3NlbGVjdG9yJztcblxuLyoqXG4gKiBSZXR1cm4gY2hpbGRyZW4gb2YgZWFjaCBlbGVtZW50IGluIHRoZSBjb2xsZWN0aW9uLCBvcHRpb25hbGx5IGZpbHRlcmVkIGJ5IGEgc2VsZWN0b3IuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IFtzZWxlY3Rvcl0gRmlsdGVyXG4gKiBAcmV0dXJuIHtPYmplY3R9IE5ldyB3cmFwcGVkIGNvbGxlY3Rpb25cbiAqIEBjaGFpbmFibGVcbiAqIEBleGFtcGxlXG4gKiAgICAgJCgnLnNlbGVjdG9yJykuY2hpbGRyZW4oKTtcbiAqICAgICAkKCcuc2VsZWN0b3InKS5jaGlsZHJlbignLmZpbHRlcicpO1xuICovXG5cbmZ1bmN0aW9uIGNoaWxkcmVuKHNlbGVjdG9yKSB7XG4gICAgdmFyIG5vZGVzID0gW107XG4gICAgZWFjaCh0aGlzLCBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgIGlmKGVsZW1lbnQuY2hpbGRyZW4pIHtcbiAgICAgICAgICAgIGVhY2goZWxlbWVudC5jaGlsZHJlbiwgZnVuY3Rpb24oY2hpbGQpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXNlbGVjdG9yIHx8IChzZWxlY3RvciAmJiBtYXRjaGVzKGNoaWxkLCBzZWxlY3RvcikpKSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGVzLnB1c2goY2hpbGQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuICQobm9kZXMpO1xufVxuXG4vKipcbiAqIFJldHVybiBjaGlsZCBub2RlcyBvZiBlYWNoIGVsZW1lbnQgaW4gdGhlIGNvbGxlY3Rpb24sIGluY2x1ZGluZyB0ZXh0IGFuZCBjb21tZW50IG5vZGVzLlxuICpcbiAqIEByZXR1cm4ge09iamVjdH0gTmV3IHdyYXBwZWQgY29sbGVjdGlvblxuICogQGV4YW1wbGVcbiAqICAgICAkKCcuc2VsZWN0b3InKS5jb250ZW50cygpO1xuICovXG5cbmZ1bmN0aW9uIGNvbnRlbnRzKCkge1xuICAgIHZhciBub2RlcyA9IFtdO1xuICAgIGVhY2godGhpcywgZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICBub2Rlcy5wdXNoLmFwcGx5KG5vZGVzLCB0b0FycmF5KGVsZW1lbnQuY2hpbGROb2RlcykpO1xuICAgIH0pO1xuICAgIHJldHVybiAkKG5vZGVzKTtcbn1cblxuLyoqXG4gKiBSZXR1cm4gYSBjb2xsZWN0aW9uIGNvbnRhaW5pbmcgb25seSB0aGUgb25lIGF0IHRoZSBzcGVjaWZpZWQgaW5kZXguXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IGluZGV4XG4gKiBAcmV0dXJuIHtPYmplY3R9IE5ldyB3cmFwcGVkIGNvbGxlY3Rpb25cbiAqIEBjaGFpbmFibGVcbiAqIEBleGFtcGxlXG4gKiAgICAgJCgnLml0ZW1zJykuZXEoMSlcbiAqICAgICDinqQgVGhlIHNlY29uZCBpdGVtOyByZXN1bHQgaXMgdGhlIHNhbWUgYXMgZG9pbmcgJCgkKCcuaXRlbXMnKVsxXSk7XG4gKi9cblxuZnVuY3Rpb24gZXEoaW5kZXgpIHtcbiAgICByZXR1cm4gc2xpY2UuY2FsbCh0aGlzLCBpbmRleCwgaW5kZXggKyAxKTtcbn1cblxuLyoqXG4gKiBSZXR1cm4gdGhlIERPTSBlbGVtZW50IGF0IHRoZSBzcGVjaWZpZWQgaW5kZXguXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IGluZGV4XG4gKiBAcmV0dXJuIHtOb2RlfSBFbGVtZW50IGF0IHRoZSBzcGVjaWZpZWQgaW5kZXhcbiAqIEBleGFtcGxlXG4gKiAgICAgJCgnLml0ZW1zJykuZ2V0KDEpXG4gKiAgICAg4p6kIFRoZSBzZWNvbmQgZWxlbWVudDsgcmVzdWx0IGlzIHRoZSBzYW1lIGFzIGRvaW5nICQoJy5pdGVtcycpWzFdO1xuICovXG5cbmZ1bmN0aW9uIGdldChpbmRleCkge1xuICAgIHJldHVybiB0aGlzW2luZGV4XTtcbn1cblxuLyoqXG4gKiBSZXR1cm4gdGhlIHBhcmVudCBlbGVtZW50cyBvZiBlYWNoIGVsZW1lbnQgaW4gdGhlIGNvbGxlY3Rpb24sIG9wdGlvbmFsbHkgZmlsdGVyZWQgYnkgYSBzZWxlY3Rvci5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gW3NlbGVjdG9yXSBGaWx0ZXJcbiAqIEByZXR1cm4ge09iamVjdH0gTmV3IHdyYXBwZWQgY29sbGVjdGlvblxuICogQGNoYWluYWJsZVxuICogQGV4YW1wbGVcbiAqICAgICAkKCcuc2VsZWN0b3InKS5wYXJlbnQoKTtcbiAqICAgICAkKCcuc2VsZWN0b3InKS5wYXJlbnQoJy5maWx0ZXInKTtcbiAqL1xuXG5mdW5jdGlvbiBwYXJlbnQoc2VsZWN0b3IpIHtcbiAgICB2YXIgbm9kZXMgPSBbXTtcbiAgICBlYWNoKHRoaXMsIGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgaWYgKCFzZWxlY3RvciB8fCAoc2VsZWN0b3IgJiYgbWF0Y2hlcyhlbGVtZW50LnBhcmVudE5vZGUsIHNlbGVjdG9yKSkpIHtcbiAgICAgICAgICAgIG5vZGVzLnB1c2goZWxlbWVudC5wYXJlbnROb2RlKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiAkKG5vZGVzKTtcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBuZXcsIHNsaWNlZCBjb2xsZWN0aW9uLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBzdGFydFxuICogQHBhcmFtIHtOdW1iZXJ9IGVuZFxuICogQHJldHVybiB7T2JqZWN0fSBOZXcgd3JhcHBlZCBjb2xsZWN0aW9uXG4gKiBAZXhhbXBsZVxuICogICAgICQoJy5pdGVtcycpLnNsaWNlKDEsIDMpXG4gKiAgICAg4p6kIE5ldyB3cmFwcGVkIGNvbGxlY3Rpb24gY29udGFpbmluZyB0aGUgc2Vjb25kLCB0aGlyZCwgYW5kIGZvdXJ0aCBlbGVtZW50LlxuICovXG5cbmZ1bmN0aW9uIHNsaWNlKHN0YXJ0LCBlbmQpIHtcbiAgICByZXR1cm4gJChbXS5zbGljZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbn1cblxuLypcbiAqIEV4cG9ydCBpbnRlcmZhY2VcbiAqL1xuXG5leHBvcnQgeyBjaGlsZHJlbiwgY29udGVudHMsIGVxLCBnZXQsIHBhcmVudCwgc2xpY2UgfTtcbiIsIi8qKlxuICogQG1vZHVsZSB0cmlnZ2VyXG4gKi9cblxuaW1wb3J0IHsgZ2xvYmFsLCBlYWNoIH0gZnJvbSAnLi91dGlsJztcbmltcG9ydCB7IGNsb3Nlc3QgfSBmcm9tICcuL3NlbGVjdG9yJztcblxudmFyIHJlTW91c2VFdmVudCA9IC9eKD86bW91c2V8cG9pbnRlcnxjb250ZXh0bWVudSl8Y2xpY2svLFxuICAgIHJlS2V5RXZlbnQgPSAvXmtleS87XG5cbi8qKlxuICogVHJpZ2dlciBldmVudCBhdCBlbGVtZW50KHMpXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgVHlwZSBvZiB0aGUgZXZlbnRcbiAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhIERhdGEgdG8gYmUgc2VudCB3aXRoIHRoZSBldmVudCAoYHBhcmFtcy5kZXRhaWxgIHdpbGwgYmUgc2V0IHRvIHRoaXMpLlxuICogQHBhcmFtIHtPYmplY3R9IFtwYXJhbXNdIEV2ZW50IHBhcmFtZXRlcnMgKG9wdGlvbmFsKVxuICogQHBhcmFtIHtCb29sZWFufSBwYXJhbXMuYnViYmxlcz10cnVlIERvZXMgdGhlIGV2ZW50IGJ1YmJsZSB1cCB0aHJvdWdoIHRoZSBET00gb3Igbm90LlxuICogQHBhcmFtIHtCb29sZWFufSBwYXJhbXMuY2FuY2VsYWJsZT10cnVlIElzIHRoZSBldmVudCBjYW5jZWxhYmxlIG9yIG5vdC5cbiAqIEBwYXJhbSB7TWl4ZWR9IHBhcmFtcy5kZXRhaWw9dW5kZWZpbmVkIEFkZGl0aW9uYWwgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGV2ZW50LlxuICogQHJldHVybiB7T2JqZWN0fSBUaGUgd3JhcHBlZCBjb2xsZWN0aW9uXG4gKiBAY2hhaW5hYmxlXG4gKiBAZXhhbXBsZVxuICogICAgICQoJy5pdGVtJykudHJpZ2dlcignYW55RXZlbnRUeXBlJyk7XG4gKi9cblxuZnVuY3Rpb24gdHJpZ2dlcih0eXBlLCBkYXRhLCBwYXJhbXMgPSB7fSkge1xuXG4gICAgcGFyYW1zLmJ1YmJsZXMgPSB0eXBlb2YgcGFyYW1zLmJ1YmJsZXMgPT09ICdib29sZWFuJyA/IHBhcmFtcy5idWJibGVzIDogdHJ1ZTtcbiAgICBwYXJhbXMuY2FuY2VsYWJsZSA9IHR5cGVvZiBwYXJhbXMuY2FuY2VsYWJsZSA9PT0gJ2Jvb2xlYW4nID8gcGFyYW1zLmNhbmNlbGFibGUgOiB0cnVlO1xuICAgIHBhcmFtcy5wcmV2ZW50RGVmYXVsdCA9IHR5cGVvZiBwYXJhbXMucHJldmVudERlZmF1bHQgPT09ICdib29sZWFuJyA/IHBhcmFtcy5wcmV2ZW50RGVmYXVsdCA6IGZhbHNlO1xuICAgIHBhcmFtcy5kZXRhaWwgPSBkYXRhO1xuXG4gICAgdmFyIEV2ZW50Q29uc3RydWN0b3IgPSBnZXRFdmVudENvbnN0cnVjdG9yKHR5cGUpLFxuICAgICAgICBldmVudCA9IG5ldyBFdmVudENvbnN0cnVjdG9yKHR5cGUsIHBhcmFtcyk7XG5cbiAgICBldmVudC5fcHJldmVudERlZmF1bHQgPSBwYXJhbXMucHJldmVudERlZmF1bHQ7XG5cbiAgICBlYWNoKHRoaXMsIGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgaWYgKCFwYXJhbXMuYnViYmxlcyB8fCBpc0V2ZW50QnViYmxpbmdJbkRldGFjaGVkVHJlZSB8fCBpc0F0dGFjaGVkVG9Eb2N1bWVudChlbGVtZW50KSkge1xuICAgICAgICAgICAgZGlzcGF0Y2hFdmVudChlbGVtZW50LCBldmVudCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0cmlnZ2VyRm9yUGF0aChlbGVtZW50LCB0eXBlLCBwYXJhbXMpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXM7XG59XG5cbmZ1bmN0aW9uIGdldEV2ZW50Q29uc3RydWN0b3IodHlwZSkge1xuICAgIHJldHVybiAhc3VwcG9ydHNPdGhlckV2ZW50Q29uc3RydWN0b3JzID8gQ3VzdG9tRXZlbnQgOiByZU1vdXNlRXZlbnQudGVzdCh0eXBlKSA/IE1vdXNlRXZlbnQgOiByZUtleUV2ZW50LnRlc3QodHlwZSkgPyBLZXlib2FyZEV2ZW50IDogQ3VzdG9tRXZlbnQ7XG59XG5cbi8qKlxuICogVHJpZ2dlciBldmVudCBhdCBmaXJzdCBlbGVtZW50IGluIHRoZSBjb2xsZWN0aW9uLiBTaW1pbGFyIHRvIGB0cmlnZ2VyKClgLCBleGNlcHQ6XG4gKlxuICogLSBFdmVudCBkb2VzIG5vdCBidWJibGVcbiAqIC0gRGVmYXVsdCBldmVudCBiZWhhdmlvciBpcyBwcmV2ZW50ZWRcbiAqIC0gT25seSB0cmlnZ2VycyBoYW5kbGVyIGZvciBmaXJzdCBtYXRjaGluZyBlbGVtZW50XG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgVHlwZSBvZiB0aGUgZXZlbnRcbiAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhIERhdGEgdG8gYmUgc2VudCB3aXRoIHRoZSBldmVudFxuICogQGV4YW1wbGVcbiAqICAgICAkKCdmb3JtJykudHJpZ2dlckhhbmRsZXIoJ3N1Ym1pdCcpO1xuICovXG5cbmZ1bmN0aW9uIHRyaWdnZXJIYW5kbGVyKHR5cGUsIGRhdGEpIHtcbiAgICBpZiAodGhpc1swXSkge1xuICAgICAgICB0cmlnZ2VyLmNhbGwodGhpc1swXSwgdHlwZSwgZGF0YSwge2J1YmJsZXM6IGZhbHNlLCBwcmV2ZW50RGVmYXVsdDogdHJ1ZX0pO1xuICAgIH1cbn1cblxuLyoqXG4gKiBDaGVjayB3aGV0aGVyIHRoZSBlbGVtZW50IGlzIGF0dGFjaGVkIHRvIChvciBkZXRhY2hlZCBmcm9tKSB0aGUgZG9jdW1lbnRcbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtOb2RlfSBlbGVtZW50IEVsZW1lbnQgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuXG5mdW5jdGlvbiBpc0F0dGFjaGVkVG9Eb2N1bWVudChlbGVtZW50KSB7XG4gICAgaWYgKGVsZW1lbnQgPT09IHdpbmRvdyB8fCBlbGVtZW50ID09PSBkb2N1bWVudCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuICQuY29udGFpbnMoZWxlbWVudC5vd25lckRvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgZWxlbWVudCk7XG59XG5cbi8qKlxuICogRGlzcGF0Y2ggdGhlIGV2ZW50IGF0IHRoZSBlbGVtZW50IGFuZCBpdHMgYW5jZXN0b3JzLlxuICogUmVxdWlyZWQgdG8gc3VwcG9ydCBkZWxlZ2F0ZWQgZXZlbnRzIGluIGJyb3dzZXJzIHRoYXQgZG9uJ3QgYnViYmxlIGV2ZW50cyBpbiBkZXRhY2hlZCBET00gdHJlZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Tm9kZX0gZWxlbWVudCBGaXJzdCBlbGVtZW50IHRvIGRpc3BhdGNoIHRoZSBldmVudCBhdFxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgVHlwZSBvZiB0aGUgZXZlbnRcbiAqIEBwYXJhbSB7T2JqZWN0fSBbcGFyYW1zXSBFdmVudCBwYXJhbWV0ZXJzIChvcHRpb25hbClcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gcGFyYW1zLmJ1YmJsZXM9dHJ1ZSBEb2VzIHRoZSBldmVudCBidWJibGUgdXAgdGhyb3VnaCB0aGUgRE9NIG9yIG5vdC5cbiAqIFdpbGwgYmUgc2V0IHRvIGZhbHNlIChidXQgc2hvdWxkbid0IG1hdHRlciBzaW5jZSBldmVudHMgZG9uJ3QgYnViYmxlIGFueXdheSkuXG4gKiBAcGFyYW0ge0Jvb2xlYW59IHBhcmFtcy5jYW5jZWxhYmxlPXRydWUgSXMgdGhlIGV2ZW50IGNhbmNlbGFibGUgb3Igbm90LlxuICogQHBhcmFtIHtNaXhlZH0gcGFyYW1zLmRldGFpbD11bmRlZmluZWQgQWRkaXRpb25hbCBpbmZvcm1hdGlvbiBhYm91dCB0aGUgZXZlbnQuXG4gKi9cblxuZnVuY3Rpb24gdHJpZ2dlckZvclBhdGgoZWxlbWVudCwgdHlwZSwgcGFyYW1zID0ge30pIHtcbiAgICBwYXJhbXMuYnViYmxlcyA9IGZhbHNlO1xuICAgIHZhciBldmVudCA9IG5ldyBDdXN0b21FdmVudCh0eXBlLCBwYXJhbXMpO1xuICAgIGV2ZW50Ll90YXJnZXQgPSBlbGVtZW50O1xuICAgIGRvIHtcbiAgICAgICAgZGlzcGF0Y2hFdmVudChlbGVtZW50LCBldmVudCk7XG4gICAgfSB3aGlsZSAoZWxlbWVudCA9IGVsZW1lbnQucGFyZW50Tm9kZSk7XG59XG5cbi8qKlxuICogRGlzcGF0Y2ggZXZlbnQgdG8gZWxlbWVudCwgYnV0IGNhbGwgZGlyZWN0IGV2ZW50IG1ldGhvZHMgaW5zdGVhZCBpZiBhdmFpbGFibGVcbiAqIChlLmcuIFwiYmx1cigpXCIsIFwic3VibWl0KClcIikgYW5kIGlmIHRoZSBldmVudCBpcyBub24tY2FuY2VsYWJsZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtOb2RlfSBlbGVtZW50IEVsZW1lbnQgdG8gZGlzcGF0Y2ggdGhlIGV2ZW50IGF0XG4gKiBAcGFyYW0ge09iamVjdH0gZXZlbnQgRXZlbnQgdG8gZGlzcGF0Y2hcbiAqL1xuXG52YXIgZGlyZWN0RXZlbnRNZXRob2RzID0gWydibHVyJywgJ2ZvY3VzJywgJ3NlbGVjdCcsICdzdWJtaXQnXTtcblxuZnVuY3Rpb24gZGlzcGF0Y2hFdmVudChlbGVtZW50LCBldmVudCkge1xuICAgIGlmKGRpcmVjdEV2ZW50TWV0aG9kcy5pbmRleE9mKGV2ZW50LnR5cGUpICE9PSAtMSAmJiB0eXBlb2YgZWxlbWVudFtldmVudC50eXBlXSA9PT0gJ2Z1bmN0aW9uJyAmJiAhZXZlbnQuX3ByZXZlbnREZWZhdWx0ICYmICFldmVudC5jYW5jZWxhYmxlKSB7XG4gICAgICAgIGVsZW1lbnRbZXZlbnQudHlwZV0oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBlbGVtZW50LmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBQb2x5ZmlsbCBmb3IgQ3VzdG9tRXZlbnQsIGJvcnJvd2VkIGZyb20gW01ETl0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0N1c3RvbUV2ZW50I1BvbHlmaWxsKS5cbiAqIE5lZWRlZCB0byBzdXBwb3J0IElFICg5LCAxMCwgMTEpICYgUGhhbnRvbUpTXG4gKi9cblxuKGZ1bmN0aW9uKCkge1xuICAgIGZ1bmN0aW9uIEN1c3RvbUV2ZW50KGV2ZW50LCBwYXJhbXMgPSB7IGJ1YmJsZXM6IGZhbHNlLCBjYW5jZWxhYmxlOiBmYWxzZSwgZGV0YWlsOiB1bmRlZmluZWQgfSkge1xuICAgICAgICB2YXIgY3VzdG9tRXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnQ3VzdG9tRXZlbnQnKTtcbiAgICAgICAgY3VzdG9tRXZlbnQuaW5pdEN1c3RvbUV2ZW50KGV2ZW50LCBwYXJhbXMuYnViYmxlcywgcGFyYW1zLmNhbmNlbGFibGUsIHBhcmFtcy5kZXRhaWwpO1xuICAgICAgICByZXR1cm4gY3VzdG9tRXZlbnQ7XG4gICAgfVxuXG4gICAgQ3VzdG9tRXZlbnQucHJvdG90eXBlID0gZ2xvYmFsLkN1c3RvbUV2ZW50ICYmIGdsb2JhbC5DdXN0b21FdmVudC5wcm90b3R5cGU7XG4gICAgZ2xvYmFsLkN1c3RvbUV2ZW50ID0gQ3VzdG9tRXZlbnQ7XG5cbn0pKCk7XG5cbi8qXG4gKiBBcmUgZXZlbnRzIGJ1YmJsaW5nIGluIGRldGFjaGVkIERPTSB0cmVlcz9cbiAqIEBwcml2YXRlXG4gKi9cblxudmFyIGlzRXZlbnRCdWJibGluZ0luRGV0YWNoZWRUcmVlID0gKGZ1bmN0aW9uKCkge1xuICAgIHZhciBpc0J1YmJsaW5nID0gZmFsc2UsXG4gICAgICAgIGRvYyA9IGdsb2JhbC5kb2N1bWVudDtcbiAgICBpZiAoZG9jKSB7XG4gICAgICAgIHZhciBwYXJlbnQgPSBkb2MuY3JlYXRlRWxlbWVudCgnZGl2JyksXG4gICAgICAgICAgICBjaGlsZCA9IHBhcmVudC5jbG9uZU5vZGUoKTtcbiAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGNoaWxkKTtcbiAgICAgICAgcGFyZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2UnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlzQnViYmxpbmcgPSB0cnVlO1xuICAgICAgICB9KTtcbiAgICAgICAgY2hpbGQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2UnLCB7IGJ1YmJsZXM6IHRydWUgfSkpO1xuICAgIH1cbiAgICByZXR1cm4gaXNCdWJibGluZztcbn0pKCk7XG5cbnZhciBzdXBwb3J0c090aGVyRXZlbnRDb25zdHJ1Y3RvcnMgPSAoZnVuY3Rpb24oKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgbmV3IHdpbmRvdy5Nb3VzZUV2ZW50KCdjbGljaycpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn0pKCk7XG5cbi8qXG4gKiBFeHBvcnQgaW50ZXJmYWNlXG4gKi9cblxuZXhwb3J0IHsgdHJpZ2dlciwgdHJpZ2dlckhhbmRsZXIgfTtcbiIsIi8qKlxuICogQG1vZHVsZSBUeXBlXG4gKi9cblxuLypcbiAqIERldGVybWluZSBpZiB0aGUgYXJndW1lbnQgcGFzc2VkIGlzIGEgSmF2YXNjcmlwdCBmdW5jdGlvbiBvYmplY3QuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IFtvYmpdIE9iamVjdCB0byB0ZXN0IHdoZXRoZXIgb3Igbm90IGl0IGlzIGEgZnVuY3Rpb24uXG4gKiBAcmV0dXJuIHtib29sZWFufSBcbiAqIEBleGFtcGxlXG4gKiAgICAgJC5pc0Z1bmN0aW9uKGZ1bmN0aW9uKCl7fSk7XG4gKiAgICAg4p6kIHRydWVcbiAqIEBleGFtcGxlXG4gKiAgICAgJC5pc0Z1bmN0aW9uKHt9KTtcbiAqICAgICDinqQgZmFsc2VcbiAqL1xuXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKG9iaikge1xuICAgIHJldHVybiAodHlwZW9mIG9iaiA9PT0gJ2Z1bmN0aW9uJyk7XG59XG5cbi8qXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgYXJndW1lbnQgaXMgYW4gYXJyYXkuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IFtvYmpdIE9iamVjdCB0byB0ZXN0IHdoZXRoZXIgb3Igbm90IGl0IGlzIGFuIGFycmF5LlxuICogQHJldHVybiB7Ym9vbGVhbn0gXG4gKiBAZXhhbXBsZVxuICogICAgICQuaXNBcnJheShbXSk7XG4gKiAgICAg4p6kIHRydWVcbiAqIEBleGFtcGxlXG4gKiAgICAgJC5pc0FycmF5KHt9KTtcbiAqICAgICDinqQgZmFsc2VcbiAqL1xuXG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG5cbi8qXG4gKiBFeHBvcnQgaW50ZXJmYWNlXG4gKi9cblxuZXhwb3J0IHsgaXNGdW5jdGlvbiwgaXNBcnJheSB9O1xuIiwiLypcbiAqIEBtb2R1bGUgVXRpbFxuICovXG5cbi8qXG4gKiBSZWZlcmVuY2UgdG8gdGhlIGdsb2JhbCBzY29wZVxuICogQHByaXZhdGVcbiAqL1xuXG52YXIgZ2xvYmFsID0gbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcblxuLyoqXG4gKiBDb252ZXJ0IGBOb2RlTGlzdGAgdG8gYEFycmF5YC5cbiAqXG4gKiBAcGFyYW0ge05vZGVMaXN0fEFycmF5fSBjb2xsZWN0aW9uXG4gKiBAcmV0dXJuIHtBcnJheX1cbiAqIEBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gdG9BcnJheShjb2xsZWN0aW9uKSB7XG4gICAgdmFyIGxlbmd0aCA9IGNvbGxlY3Rpb24ubGVuZ3RoLFxuICAgICAgICByZXN1bHQgPSBBcnJheShsZW5ndGgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcmVzdWx0W2ldID0gY29sbGVjdGlvbltpXTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBSZXR1cm4gc29tZXRoaW5nIHRoYXQgY2FuIGJlIGl0ZXJhdGVkIG92ZXIgKGUuZy4gdXNpbmcgYGZvckVhY2hgKS5cbiAqIEFycmF5cyBhbmQgTm9kZUxpc3RzIGFyZSByZXR1cm5lZCBhcy1pcywgYnV0IGEgTm9kZSB3aWxsIGJlIHdyYXBwZWQgaW4gYSBgW11gLlxuICpcbiAqIEBwYXJhbSB7Tm9kZXxOb2RlTGlzdHxBcnJheX0gZWxlbWVudFxuICogQHJldHVybiB7QXJyYXl8Tm9kZUxpc3R9XG4gKiBAcHJpdmF0ZVxuICovXG5cbnZhciBtYWtlSXRlcmFibGUgPSAoZWxlbWVudCkgPT4gZWxlbWVudC5ub2RlVHlwZSB8fCBlbGVtZW50ID09PSB3aW5kb3cgPyBbZWxlbWVudF0gOiBlbGVtZW50O1xuXG4vKipcbiAqIEZhc3RlciBhbHRlcm5hdGl2ZSB0byBbXS5mb3JFYWNoIG1ldGhvZFxuICpcbiAqIEBwYXJhbSB7Tm9kZXxOb2RlTGlzdHxBcnJheX0gY29sbGVjdGlvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEByZXR1cm4ge05vZGV8Tm9kZUxpc3R8QXJyYXl9XG4gKiBAcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGVhY2goY29sbGVjdGlvbiwgY2FsbGJhY2ssIHRoaXNBcmcpIHtcbiAgICB2YXIgbGVuZ3RoID0gY29sbGVjdGlvbi5sZW5ndGg7XG4gICAgaWYgKGxlbmd0aCAhPT0gdW5kZWZpbmVkICYmIGNvbGxlY3Rpb24ubm9kZVR5cGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwodGhpc0FyZywgY29sbGVjdGlvbltpXSwgaSwgY29sbGVjdGlvbik7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBjYWxsYmFjay5jYWxsKHRoaXNBcmcsIGNvbGxlY3Rpb24sIDAsIGNvbGxlY3Rpb24pO1xuICAgIH1cbiAgICByZXR1cm4gY29sbGVjdGlvbjtcbn1cblxuLyoqXG4gKiBBc3NpZ24gZW51bWVyYWJsZSBwcm9wZXJ0aWVzIGZyb20gc291cmNlIG9iamVjdChzKSB0byB0YXJnZXQgb2JqZWN0XG4gKlxuICogQG1ldGhvZCBleHRlbmRcbiAqIEBwYXJhbSB7T2JqZWN0fSB0YXJnZXQgT2JqZWN0IHRvIGV4dGVuZFxuICogQHBhcmFtIHtPYmplY3R9IFtzb3VyY2VdIE9iamVjdCB0byBleHRlbmQgZnJvbVxuICogQHJldHVybiB7T2JqZWN0fSBFeHRlbmRlZCBvYmplY3RcbiAqIEBleGFtcGxlXG4gKiAgICAgJC5leHRlbmQoe2E6IDF9LCB7YjogMn0pO1xuICogICAgIOKepCB7YTogMSwgYjogMn1cbiAqIEBleGFtcGxlXG4gKiAgICAgJC5leHRlbmQoe2E6IDF9LCB7YjogMn0sIHthOiAzfSk7XG4gKiAgICAg4p6kIHthOiAzLCBiOiAyfVxuICovXG5cbmZ1bmN0aW9uIGV4dGVuZCh0YXJnZXQsIC4uLnNvdXJjZXMpIHtcbiAgICBzb3VyY2VzLmZvckVhY2goZnVuY3Rpb24oc3JjKSB7XG4gICAgICAgIGlmIChzcmMpIHtcbiAgICAgICAgICAgIGZvciAodmFyIHByb3AgaW4gc3JjKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0W3Byb3BdID0gc3JjW3Byb3BdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHRhcmdldDtcbn1cblxuLyoqXG4gKiBBc3NpZ24gYWxsIHByb3BlcnRpZXMgKGluY2x1ZGluZyBub24tZW51bWVyYWJsZSkgZnJvbSBzb3VyY2Ugb2JqZWN0KHMpIHRvIHRhcmdldCBvYmplY3RcbiAqXG4gKiBAbWV0aG9kIGV4dGVuZE1vcmVcbiAqIEBwYXJhbSB7T2JqZWN0fSB0YXJnZXQgT2JqZWN0IHRvIGV4dGVuZFxuICogQHBhcmFtIHtPYmplY3R9IFtzb3VyY2VdIE9iamVjdCB0byBleHRlbmQgZnJvbVxuICogQHJldHVybiB7T2JqZWN0fSBFeHRlbmRlZCBvYmplY3RcbiAqL1xuXG5mdW5jdGlvbiBleHRlbmRBbGwodGFyZ2V0LCAuLi5zb3VyY2VzKSB7XG4gICAgc291cmNlcy5mb3JFYWNoKGZ1bmN0aW9uKHNyYykge1xuICAgICAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhzcmMpLmZvckVhY2goZnVuY3Rpb24ocHJvcCkge1xuICAgICAgICAgICAgdGFyZ2V0W3Byb3BdID0gc3JjW3Byb3BdO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gdGFyZ2V0O1xufVxuXG4vKlxuICogRXhwb3J0IGludGVyZmFjZVxuICovXG5cbmV4cG9ydCB7IGdsb2JhbCwgdG9BcnJheSwgbWFrZUl0ZXJhYmxlLCBlYWNoLCBleHRlbmQsIGV4dGVuZEFsbCB9O1xuIl19
