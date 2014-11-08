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
    }}
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
    }}
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
    }}
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
    }}
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
    }}
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
    }}
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
    }}
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
    }}
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
    }}
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
    }}
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
    }}
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
    }}
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
    }}
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
    }}
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
    }}
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
    }}
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
    }}
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
    }}
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
    }}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvaG9tZS90cmF2aXMvYnVpbGQvd2VicHJvL0RPTXRhc3RpYy9zcmMvYXJyYXkuanMiLCIvaG9tZS90cmF2aXMvYnVpbGQvd2VicHJvL0RPTXRhc3RpYy9zcmMvYXR0ci5qcyIsIi9ob21lL3RyYXZpcy9idWlsZC93ZWJwcm8vRE9NdGFzdGljL3NyYy9jbGFzcy5qcyIsIi9ob21lL3RyYXZpcy9idWlsZC93ZWJwcm8vRE9NdGFzdGljL3NyYy9jb250YWlucy5qcyIsIi9ob21lL3RyYXZpcy9idWlsZC93ZWJwcm8vRE9NdGFzdGljL3NyYy9jc3MuanMiLCIvaG9tZS90cmF2aXMvYnVpbGQvd2VicHJvL0RPTXRhc3RpYy9zcmMvZGF0YS5qcyIsIi9ob21lL3RyYXZpcy9idWlsZC93ZWJwcm8vRE9NdGFzdGljL3NyYy9kb20uanMiLCIvaG9tZS90cmF2aXMvYnVpbGQvd2VicHJvL0RPTXRhc3RpYy9zcmMvZG9tX2V4dHJhLmpzIiwiL2hvbWUvdHJhdmlzL2J1aWxkL3dlYnByby9ET010YXN0aWMvc3JjL2V2ZW50LmpzIiwiL2hvbWUvdHJhdmlzL2J1aWxkL3dlYnByby9ET010YXN0aWMvc3JjL2h0bWwuanMiLCIvaG9tZS90cmF2aXMvYnVpbGQvd2VicHJvL0RPTXRhc3RpYy9zcmMvaW5kZXguZnVsbC5qcyIsIi9ob21lL3RyYXZpcy9idWlsZC93ZWJwcm8vRE9NdGFzdGljL3NyYy9tb2RlLmpzIiwiL2hvbWUvdHJhdmlzL2J1aWxkL3dlYnByby9ET010YXN0aWMvc3JjL25vY29uZmxpY3QuanMiLCIvaG9tZS90cmF2aXMvYnVpbGQvd2VicHJvL0RPTXRhc3RpYy9zcmMvcmVhZHkuanMiLCIvaG9tZS90cmF2aXMvYnVpbGQvd2VicHJvL0RPTXRhc3RpYy9zcmMvc2VsZWN0b3IuanMiLCIvaG9tZS90cmF2aXMvYnVpbGQvd2VicHJvL0RPTXRhc3RpYy9zcmMvc2VsZWN0b3JfZXh0cmEuanMiLCIvaG9tZS90cmF2aXMvYnVpbGQvd2VicHJvL0RPTXRhc3RpYy9zcmMvdHJpZ2dlci5qcyIsIi9ob21lL3RyYXZpcy9idWlsZC93ZWJwcm8vRE9NdGFzdGljL3NyYy90eXBlLmpzIiwiL2hvbWUvdHJhdmlzL2J1aWxkL3dlYnByby9ET010YXN0aWMvc3JjL3V0aWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNJQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFpQixRQUFJO0FBQUcsVUFBTTs7QUFDckIsSUFBQTtBQUFHLFVBQU07QUFFbEIsQUFBSSxFQUFBLENBQUEsVUFBUyxFQUFJLENBQUEsS0FBSSxVQUFVLENBQUM7QUFlaEMsQUFBSSxFQUFBLENBQUEsS0FBSSxFQUFJLENBQUEsVUFBUyxNQUFNLENBQUM7QUFpQjVCLE9BQVMsT0FBSyxDQUFFLFFBQU8sQ0FBRyxDQUFBLE9BQU0sQ0FBRztBQUMvQixBQUFJLElBQUEsQ0FBQSxRQUFPLEVBQUksQ0FBQSxNQUFPLFNBQU8sQ0FBQSxHQUFNLFdBQVMsQ0FBQSxDQUFJLFNBQU8sRUFBSSxVQUFTLE9BQU0sQ0FBRztBQUN6RSxTQUFPLENBQUEsT0FBTSxBQUFDLENBQUMsT0FBTSxDQUFHLFNBQU8sQ0FBQyxDQUFDO0VBQ3JDLENBQUM7QUFDRCxPQUFPLENBQUEsQ0FBQSxBQUFDLENBQUMsVUFBUyxPQUFPLEtBQUssQUFBQyxDQUFDLElBQUcsQ0FBRyxTQUFPLENBQUcsUUFBTSxDQUFDLENBQUMsQ0FBQztBQUM3RDtBQUFBLEFBZUEsT0FBUyxRQUFNLENBQUUsUUFBTyxDQUFHLENBQUEsT0FBTSxDQUFHO0FBQ2hDLE9BQU8sQ0FBQSxLQUFJLEFBQUMsQ0FBQyxJQUFHLENBQUcsU0FBTyxDQUFHLFFBQU0sQ0FBQyxDQUFDO0FBQ3pDO0FBQUEsQUFFSSxFQUFBLENBQUEsSUFBRyxFQUFJLFFBQU0sQ0FBQztBQVlsQixBQUFJLEVBQUEsQ0FBQSxPQUFNLEVB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SSxPQUFLLENBQUcsQ0FBQSxDQUFBLEVBQUUsQ0FBRTtBQUM1QixhQUFPLEtBQUssQUFBQyxDQUFDLE9BQU0sQ0FBRyxDQUFBLFVBQVMsQ0FBRSxDQUFBLENBQUMsQ0FBRyxFQUFBLENBQUcsV0FBUyxDQUFDLENBQUM7SUFDeEQ7QUFBQSxFQUNKLEtBQU87QUFDSCxXQUFPLEtBQUssQUFBQyxDQUFDLE9BQU0sQ0FBRyxXQUFTLENBQUcsRUFBQSxDQUFHLFdBQVMsQ0FBQyxDQUFDO0VBQ3JEO0FBQUEsQUFDQSxPQUFPLFdBQVMsQ0FBQztBQUNyQjtBQUFBLEFBaUJBLE9BQVMsT0FBSyxDQUFFLE1BQUssQUFBWSxDQUFHOzs7O0FBQ2hDLFFBQU0sUUFBUSxBQUFDLENBQUMsU0FBUyxHQUFFLENBQUc7QUFDMUIsT0FBSSxHQUFFLENBQUc7QUFDTCxVQUFTLEdBQUEsQ0FBQSxJQUFHLENBQUEsRUFBSyxJQUFFLENBQUc7QUFDbEIsYUFBSyxDQUFFLElBQUcsQ0FBQyxFQUFJLENBQUEsR0FBRSxDQUFFLElBQUcsQ0FBQyxDQUFDO01BQzVCO0FBQUEsSUFDSjtBQUFBLEVBQ0osQ0FBQyxDQUFDO0FBQ0YsT0FBTyxPQUFLLENBQUM7QUFDakI7QUFBQSxBQVdBLE9BQVMsVUFBUSxDQUFFLE1BQUssQUFBWSxDQUFHOzs7O0FBQ25DLFFBQU0sUUFBUSxBQUFDLENBQUMsU0FBUyxHQUFFLENBQUc7QUFDMUIsU0FBSyxvQkFBb0IsQUFBQyxDQUFDLEdBQUUsQ0FBQyxRQUFRLEFBQUMsQ0FBQyxTQUFTLElBQUcsQ0FBRztBQUNuRCxXQUFLLENBQUUsSUFBRyxDQUFDLEVBQUksQ0FBQSxHQUFFLENBQUUsSUFBRyxDQUFDLENBQUM7SUFDNUIsQ0FBQyxDQUFDO0VBQ04sQ0FBQyxDQUFDO0FBQ0YsT0FBTyxPQUFLLENBQUM7QUFDakI7QUFBQTtBQU9BIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8qKlxuICogQG1vZHVsZSBBcnJheVxuICovXG5cbmltcG9ydCB7IGVhY2ggYXMgX2VhY2gsIHRvQXJyYXkgfSBmcm9tICcuL3V0aWwnO1xuaW1wb3J0IHsgJCwgbWF0Y2hlcyB9IGZyb20gJy4vc2VsZWN0b3InO1xuXG52YXIgQXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZTtcblxuLyoqXG4gKiBDaGVja3MgaWYgdGhlIGdpdmVuIGNhbGxiYWNrIHJldHVybnMgYSB0cnVlKC1pc2gpIHZhbHVlIGZvciBlYWNoIGVsZW1lbnQgaW4gdGhlIGNvbGxlY3Rpb24uXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgRnVuY3Rpb24gdG8gZXhlY3V0ZSBmb3IgZWFjaCBlbGVtZW50LCBpbnZva2VkIHdpdGggYGVsZW1lbnRgIGFzIGFyZ3VtZW50LlxuICogQHBhcmFtIHtPYmplY3R9IFt0aGlzQXJnXSBWYWx1ZSB0byB1c2UgYXMgYHRoaXNgIHdoZW4gZXhlY3V0aW5nIGBjYWxsYmFja2AuXG4gKiBAcmV0dXJuIHtCb29sZWFufSBXaGV0aGVyIGVhY2ggZWxlbWVudCBwYXNzZWQgdGhlIGNhbGxiYWNrIGNoZWNrLlxuICogQGV4YW1wbGVcbiAqICAgICAkKCcuaXRlbXMnKS5ldmVyeShmdW5jdGlvbihlbGVtZW50KSB7XG4gKiAgICAgICAgIHJldHVybiBlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnYWN0aXZlJylcbiAqICAgICB9KTtcbiAqICAgICDinqQgdHJ1ZS9mYWxzZVxuICovXG5cbnZhciBldmVyeSA9IEFycmF5UHJvdG8uZXZlcnk7XG5cbi8qKlxuICogRmlsdGVyIHRoZSBjb2xsZWN0aW9uIGJ5IHNlbGVjdG9yIG9yIGZ1bmN0aW9uLCBhbmQgcmV0dXJuIGEgbmV3IGNvbGxlY3Rpb24gd2l0aCB0aGUgcmVzdWx0LlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfEZ1bmN0aW9ufSBzZWxlY3RvciBTZWxlY3RvciBvciBmdW5jdGlvbiB0byBmaWx0ZXIgdGhlIGNvbGxlY3Rpb24uXG4gKiBAcGFyYW0ge09iamVjdH0gW3RoaXNBcmddIFZhbHVlIHRvIHVzZSBhcyBgdGhpc2Agd2hlbiBleGVjdXRpbmcgYGNhbGxiYWNrYC5cbiAqIEByZXR1cm4ge09iamVjdH0gQSBuZXcgd3JhcHBlZCBjb2xsZWN0aW9uXG4gKiBAY2hhaW5hYmxlXG4gKiBAZXhhbXBsZVxuICogICAgICQoJy5pdGVtcycpLmZpbHRlcignLmFjdGl2ZScpO1xuICogQGV4YW1wbGVcbiAqICAgICAkKCcuaXRlbXMnKS5maWx0ZXIoZnVuY3Rpb24oZWxlbWVudCkge1xuICogICAgICAgICByZXR1cm4gZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2FjdGl2ZScpXG4gKiAgICAgfSk7XG4gKi9cblxuZnVuY3Rpb24gZmlsdGVyKHNlbGVjdG9yLCB0aGlzQXJnKSB7XG4gICAgdmFyIGNhbGxiYWNrID0gdHlwZW9mIHNlbGVjdG9yID09PSAnZnVuY3Rpb24nID8gc2VsZWN0b3IgOiBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgIHJldHVybiBtYXRjaGVzKGVsZW1lbnQsIHNlbGVjdG9yKTtcbiAgICB9O1xuICAgIHJldHVybiAkKEFycmF5UHJvdG8uZmlsdGVyLmNhbGwodGhpcywgY2FsbGJhY2ssIHRoaXNBcmcpKTtcbn1cblxuLyoqXG4gKiBFeGVjdXRlIGEgZnVuY3Rpb24gZm9yIGVhY2ggZWxlbWVudCBpbiB0aGUgY29sbGVjdGlvbi5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBGdW5jdGlvbiB0byBleGVjdXRlIGZvciBlYWNoIGVsZW1lbnQsIGludm9rZWQgd2l0aCBgZWxlbWVudGAgYXMgYXJndW1lbnQuXG4gKiBAcGFyYW0ge09iamVjdH0gW3RoaXNBcmddIFZhbHVlIHRvIHVzZSBhcyBgdGhpc2Agd2hlbiBleGVjdXRpbmcgYGNhbGxiYWNrYC5cbiAqIEByZXR1cm4ge09iamVjdH0gVGhlIHdyYXBwZWQgY29sbGVjdGlvblxuICogQGNoYWluYWJsZVxuICogQGV4YW1wbGVcbiAqICAgICAkKCcuaXRlbXMnKS5mb3JFYWNoKGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAqICAgICAgICAgZWxlbWVudC5zdHlsZS5jb2xvciA9ICdldmVyZ3JlZW4nO1xuICogICAgICk7XG4gKi9cblxuZnVuY3Rpb24gZm9yRWFjaChjYWxsYmFjaywgdGhpc0FyZykge1xuICAgIHJldHVybiBfZWFjaCh0aGlzLCBjYWxsYmFjaywgdGhpc0FyZyk7XG59XG5cbnZhciBlYWNoID0gZm9yRWFjaDtcblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBpbmRleCBvZiBhbiBlbGVtZW50IGluIHRoZSBjb2xsZWN0aW9uLlxuICpcbiAqIEBwYXJhbSB7Tm9kZX0gZWxlbWVudFxuICogQHJldHVybiB7TnVtYmVyfSBUaGUgemVyby1iYXNlZCBpbmRleCwgLTEgaWYgbm90IGZvdW5kLlxuICogQGV4YW1wbGVcbiAqICAgICAkKCcuaXRlbXMnKS5pbmRleE9mKGVsZW1lbnQpO1xuICogICAgIOKepCAyXG4gKi9cblxudmFyIGluZGV4T2YgPSBBcnJheVByb3RvLmluZGV4T2Y7XG5cbi8qKlxuICogQ3JlYXRlIGEgbmV3IGNvbGxlY3Rpb24gYnkgZXhlY3V0aW5nIHRoZSBjYWxsYmFjayBmb3IgZWFjaCBlbGVtZW50IGluIHRoZSBjb2xsZWN0aW9uLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIEZ1bmN0aW9uIHRvIGV4ZWN1dGUgZm9yIGVhY2ggZWxlbWVudCwgaW52b2tlZCB3aXRoIGBlbGVtZW50YCBhcyBhcmd1bWVudC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbdGhpc0FyZ10gVmFsdWUgdG8gdXNlIGFzIGB0aGlzYCB3aGVuIGV4ZWN1dGluZyBgY2FsbGJhY2tgLlxuICogQHJldHVybiB7QXJyYXl9IENvbGxlY3Rpb24gd2l0aCB0aGUgcmV0dXJuIHZhbHVlIG9mIHRoZSBleGVjdXRlZCBjYWxsYmFjayBmb3IgZWFjaCBlbGVtZW50LlxuICogQGV4YW1wbGVcbiAqICAgICAkKCcuaXRlbXMnKS5tYXAoZnVuY3Rpb24oZWxlbWVudCkge1xuICogICAgICAgICByZXR1cm4gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ25hbWUnKVxuICogICAgIH0pO1xuICogICAgIOKepCBbJ2V2ZXInLCAnZ3JlZW4nXVxuICovXG5cbnZhciBtYXAgPSBBcnJheVByb3RvLm1hcDtcblxuLyoqXG4gKiBSZW1vdmVzIHRoZSBsYXN0IGVsZW1lbnQgZnJvbSB0aGUgY29sbGVjdGlvbiwgYW5kIHJldHVybnMgdGhhdCBlbGVtZW50LlxuICpcbiAqIEByZXR1cm4ge09iamVjdH0gVGhlIGxhc3QgZWxlbWVudCBmcm9tIHRoZSBjb2xsZWN0aW9uLlxuICogQGV4YW1wbGVcbiAqICAgICB2YXIgbGFzdEVsZW1lbnQgPSAkKCcuaXRlbXMnKS5wb3AoKTtcbiAqL1xuXG52YXIgcG9wID0gQXJyYXlQcm90by5wb3A7XG5cbi8qKlxuICogQWRkcyBvbmUgb3IgbW9yZSBlbGVtZW50cyB0byB0aGUgZW5kIG9mIHRoZSBjb2xsZWN0aW9uLCBhbmQgcmV0dXJucyB0aGUgbmV3IGxlbmd0aCBvZiB0aGUgY29sbGVjdGlvbi5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gZWxlbWVudCBFbGVtZW50KHMpIHRvIGFkZCB0byB0aGUgY29sbGVjdGlvblxuICogQHJldHVybiB7TnVtYmVyfSBUaGUgbmV3IGxlbmd0aCBvZiB0aGUgY29sbGVjdGlvblxuICogQGV4YW1wbGVcbiAqICAgICAkKCcuaXRlbXMnKS5wdXNoKGVsZW1lbnQpO1xuICovXG5cbnZhciBwdXNoID0gQXJyYXlQcm90by5wdXNoO1xuXG4vKipcbiAqIFJldmVyc2VzIGFuIGFycmF5IGluIHBsYWNlLiBUaGUgZmlyc3QgYXJyYXkgZWxlbWVudCBiZWNvbWVzIHRoZSBsYXN0IGFuZCB0aGUgbGFzdCBiZWNvbWVzIHRoZSBmaXJzdC5cbiAqXG4gKiBAcmV0dXJuIHtPYmplY3R9IFRoZSB3cmFwcGVkIGNvbGxlY3Rpb24sIHJldmVyc2VkXG4gKiBAY2hhaW5hYmxlXG4gKiBAZXhhbXBsZVxuICogICAgICQoJy5pdGVtcycpLnJldmVyc2UoKTtcbiAqL1xuXG5mdW5jdGlvbiByZXZlcnNlKCkge1xuICAgIHJldHVybiAkKHRvQXJyYXkodGhpcykucmV2ZXJzZSgpKTtcbn1cblxuLyoqXG4gKiBSZW1vdmVzIHRoZSBmaXJzdCBlbGVtZW50IGZyb20gdGhlIGNvbGxlY3Rpb24sIGFuZCByZXR1cm5zIHRoYXQgZWxlbWVudC5cbiAqXG4gKiBAcmV0dXJuIHtPYmplY3R9IFRoZSBmaXJzdCBlbGVtZW50IGZyb20gdGhlIGNvbGxlY3Rpb24uXG4gKiBAZXhhbXBsZVxuICogICAgIHZhciBmaXJzdEVsZW1lbnQgPSAkKCcuaXRlbXMnKS5zaGlmdCgpO1xuICovXG5cbnZhciBzaGlmdCA9IEFycmF5UHJvdG8uc2hpZnQ7XG5cbi8qKlxuICogQ2hlY2tzIGlmIHRoZSBnaXZlbiBjYWxsYmFjayByZXR1cm5zIGEgdHJ1ZSgtaXNoKSB2YWx1ZSBmb3IgYW55IG9mIHRoZSBlbGVtZW50cyBpbiB0aGUgY29sbGVjdGlvbi5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBGdW5jdGlvbiB0byBleGVjdXRlIGZvciBlYWNoIGVsZW1lbnQsIGludm9rZWQgd2l0aCBgZWxlbWVudGAgYXMgYXJndW1lbnQuXG4gKiBAcmV0dXJuIHtCb29sZWFufSBXaGV0aGVyIGFueSBlbGVtZW50IHBhc3NlZCB0aGUgY2FsbGJhY2sgY2hlY2suXG4gKiBAZXhhbXBsZVxuICogICAgICQoJy5pdGVtcycpLnNvbWUoZnVuY3Rpb24oZWxlbWVudCkge1xuICogICAgICAgICByZXR1cm4gZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2FjdGl2ZScpXG4gKiAgICAgfSk7XG4gKiAgICAg4p6kIHRydWUvZmFsc2VcbiAqL1xuXG52YXIgc29tZSA9IEFycmF5UHJvdG8uc29tZTtcblxuLyoqXG4gKiBBZGRzIG9uZSBvciBtb3JlIGVsZW1lbnRzIHRvIHRoZSBiZWdpbm5pbmcgb2YgdGhlIGNvbGxlY3Rpb24sIGFuZCByZXR1cm5zIHRoZSBuZXcgbGVuZ3RoIG9mIHRoZSBjb2xsZWN0aW9uLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBlbGVtZW50IEVsZW1lbnQocykgdG8gYWRkIHRvIHRoZSBjb2xsZWN0aW9uXG4gKiBAcmV0dXJuIHtOdW1iZXJ9IFRoZSBuZXcgbGVuZ3RoIG9mIHRoZSBjb2xsZWN0aW9uXG4gKiBAZXhhbXBsZVxuICogICAgICQoJy5pdGVtcycpLnVuc2hpZnQoZWxlbWVudCk7XG4gKi9cblxudmFyIHVuc2hpZnQgPSBBcnJheVByb3RvLnVuc2hpZnQ7XG5cbi8qXG4gKiBFeHBvcnQgaW50ZXJmYWNlXG4gKi9cblxuZXhwb3J0IHsgZWFjaCwgZXZlcnksIGZpbHRlciwgZm9yRWFjaCwgaW5kZXhPZiwgbWFwLCBwb3AsIHB1c2gsIHJldmVyc2UsIHNoaWZ0LCBzb21lLCB1bnNoaWZ0IH07XG4iLCIvKipcbiAqIEBtb2R1bGUgQXR0clxuICovXG5cbmltcG9ydCB7IGVhY2ggfSBmcm9tICcuL3V0aWwnO1xuXG4vKipcbiAqIEdldCB0aGUgdmFsdWUgb2YgYW4gYXR0cmlidXRlIGZvciB0aGUgZmlyc3QgZWxlbWVudCwgb3Igc2V0IG9uZSBvciBtb3JlIGF0dHJpYnV0ZXMgZm9yIGVhY2ggZWxlbWVudCBpbiB0aGUgY29sbGVjdGlvbi5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ3xPYmplY3R9IGtleSBUaGUgbmFtZSBvZiB0aGUgYXR0cmlidXRlIHRvIGdldCBvciBzZXQuIE9yIGFuIG9iamVjdCBjb250YWluaW5nIGtleS12YWx1ZSBwYWlycyB0byBzZXQgYXMgYXR0cmlidXRlcy5cbiAqIEBwYXJhbSB7U3RyaW5nfSBbdmFsdWVdIFRoZSB2YWx1ZSBvZiB0aGUgYXR0cmlidXRlIHRvIHNldC5cbiAqIEByZXR1cm4ge09iamVjdH0gVGhlIHdyYXBwZWQgY29sbGVjdGlvblxuICogQGNoYWluYWJsZVxuICogQGV4YW1wbGVcbiAqICAgICAkKCcuaXRlbScpLmF0dHIoJ2F0dHJOYW1lJyk7IC8vIGdldFxuICogICAgICQoJy5pdGVtJykuYXR0cignYXR0ck5hbWUnLCAnYXR0clZhbHVlJyk7IC8vIHNldFxuICogICAgICQoJy5pdGVtJykuYXR0cih7J2F0dHIxJywgJ3ZhbHVlMSd9LCB7J2F0dHIyJywgJ3ZhbHVlMn0pOyAvLyBzZXQgbXVsdGlwbGVcbiAqL1xuXG5mdW5jdGlvbiBhdHRyKGtleSwgdmFsdWUpIHtcblxuICAgIGlmICh0eXBlb2Yga2V5ID09PSAnc3RyaW5nJyAmJiB0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHZhciBlbGVtZW50ID0gdGhpcy5ub2RlVHlwZSA/IHRoaXMgOiB0aGlzWzBdO1xuICAgICAgICByZXR1cm4gZWxlbWVudCA/IGVsZW1lbnQuZ2V0QXR0cmlidXRlKGtleSkgOiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgZWFjaCh0aGlzLCBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgIGlmICh0eXBlb2Yga2V5ID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgZm9yICh2YXIgYXR0ciBpbiBrZXkpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyLCBrZXlbYXR0cl0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzO1xufVxuXG4vKipcbiAqIFJlbW92ZSBhdHRyaWJ1dGUgZnJvbSBlYWNoIGVsZW1lbnQgaW4gdGhlIGNvbGxlY3Rpb24uXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGtleSBBdHRyaWJ1dGUgbmFtZVxuICogQHJldHVybiB7T2JqZWN0fSBUaGUgd3JhcHBlZCBjb2xsZWN0aW9uXG4gKiBAY2hhaW5hYmxlXG4gKiBAZXhhbXBsZVxuICogICAgICQoJy5pdGVtcycpLnJlbW92ZUF0dHIoJ2F0dHJOYW1lJyk7XG4gKi9cblxuZnVuY3Rpb24gcmVtb3ZlQXR0cihrZXkpIHtcbiAgICBlYWNoKHRoaXMsIGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoa2V5KTtcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcztcbn1cblxuLypcbiAqIEV4cG9ydCBpbnRlcmZhY2VcbiAqL1xuXG5leHBvcnQgeyBhdHRyLCByZW1vdmVBdHRyIH07XG4iLCIvKipcbiAqIEBtb2R1bGUgQ2xhc3NcbiAqL1xuXG5pbXBvcnQgeyBtYWtlSXRlcmFibGUsIGVhY2ggfSBmcm9tICcuL3V0aWwnO1xuXG4vKipcbiAqIEFkZCBhIGNsYXNzIHRvIHRoZSBlbGVtZW50KHMpXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlIFNwYWNlLXNlcGFyYXRlZCBjbGFzcyBuYW1lKHMpIHRvIGFkZCB0byB0aGUgZWxlbWVudChzKS5cbiAqIEByZXR1cm4ge09iamVjdH0gVGhlIHdyYXBwZWQgY29sbGVjdGlvblxuICogQGNoYWluYWJsZVxuICogQGV4YW1wbGVcbiAqICAgICAkKCcuaXRlbScpLmFkZENsYXNzKCdiYXInKTtcbiAqICAgICAkKCcuaXRlbScpLmFkZENsYXNzKCdiYXIgZm9vJyk7XG4gKi9cblxuZnVuY3Rpb24gYWRkQ2xhc3ModmFsdWUpIHtcbiAgICBpZih2YWx1ZSAmJiB2YWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgZWFjaCh2YWx1ZS5zcGxpdCgnICcpLCBmdW5jdGlvbihjbGFzc05hbWUpIHtcbiAgICAgICAgICAgIGVhY2godGhpcywgZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xufVxuXG4vKipcbiAqIFJlbW92ZSBhIGNsYXNzIGZyb20gdGhlIGVsZW1lbnQocylcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsdWUgU3BhY2Utc2VwYXJhdGVkIGNsYXNzIG5hbWUocykgdG8gcmVtb3ZlIGZyb20gdGhlIGVsZW1lbnQocykuXG4gKiBAcmV0dXJuIHtPYmplY3R9IFRoZSB3cmFwcGVkIGNvbGxlY3Rpb25cbiAqIEBjaGFpbmFibGVcbiAqIEBleGFtcGxlXG4gKiAgICAgJCgnLml0ZW1zJykucmVtb3ZlQ2xhc3MoJ2JhcicpO1xuICogICAgICQoJy5pdGVtcycpLnJlbW92ZUNsYXNzKCdiYXIgZm9vJyk7XG4gKi9cblxuZnVuY3Rpb24gcmVtb3ZlQ2xhc3ModmFsdWUpIHtcbiAgICBpZih2YWx1ZSAmJiB2YWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgZWFjaCh2YWx1ZS5zcGxpdCgnICcpLCBmdW5jdGlvbihjbGFzc05hbWUpIHtcbiAgICAgICAgICAgIGVhY2godGhpcywgZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xufVxuXG4vKipcbiAqIFRvZ2dsZSBhIGNsYXNzIGF0IHRoZSBlbGVtZW50KHMpXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlIFNwYWNlLXNlcGFyYXRlZCBjbGFzcyBuYW1lKHMpIHRvIHRvZ2dsZSBhdCB0aGUgZWxlbWVudChzKS5cbiAqIEByZXR1cm4ge09iamVjdH0gVGhlIHdyYXBwZWQgY29sbGVjdGlvblxuICogQGNoYWluYWJsZVxuICogQGV4YW1wbGVcbiAqICAgICAkKCcuaXRlbScpLnRvZ2dsZUNsYXNzKCdiYXInKTtcbiAqICAgICAkKCcuaXRlbScpLnRvZ2dsZUNsYXNzKCdiYXIgZm9vJyk7XG4gKi9cblxuZnVuY3Rpb24gdG9nZ2xlQ2xhc3ModmFsdWUpIHtcbiAgICBpZih2YWx1ZSAmJiB2YWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgZWFjaCh2YWx1ZS5zcGxpdCgnICcpLCBmdW5jdGlvbihjbGFzc05hbWUpIHtcbiAgICAgICAgICAgIGVhY2godGhpcywgZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShjbGFzc05hbWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xufVxuXG4vKipcbiAqIENoZWNrIGlmIHRoZSBlbGVtZW50KHMpIGhhdmUgYSBjbGFzcy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsdWUgQ2hlY2sgaWYgdGhlIERPTSBlbGVtZW50IGNvbnRhaW5zIHRoZSBjbGFzcyBuYW1lLiBXaGVuIGFwcGxpZWQgdG8gbXVsdGlwbGUgZWxlbWVudHMsXG4gKiByZXR1cm5zIGB0cnVlYCBpZiBfYW55XyBvZiB0aGVtIGNvbnRhaW5zIHRoZSBjbGFzcyBuYW1lLlxuICogQHJldHVybiB7Qm9vbGVhbn0gV2hldGhlciB0aGUgZWxlbWVudCdzIGNsYXNzIGF0dHJpYnV0ZSBjb250YWlucyB0aGUgY2xhc3MgbmFtZS5cbiAqIEBleGFtcGxlXG4gKiAgICAgJCgnLml0ZW0nKS5oYXNDbGFzcygnYmFyJyk7XG4gKi9cblxuZnVuY3Rpb24gaGFzQ2xhc3ModmFsdWUpIHtcbiAgICByZXR1cm4gbWFrZUl0ZXJhYmxlKHRoaXMpLnNvbWUoZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICByZXR1cm4gZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnModmFsdWUpO1xuICAgIH0pO1xufVxuXG4vKlxuICogRXhwb3J0IGludGVyZmFjZVxuICovXG5cbmV4cG9ydCB7IGFkZENsYXNzLCByZW1vdmVDbGFzcywgdG9nZ2xlQ2xhc3MsIGhhc0NsYXNzIH07XG4iLCIvKipcbiAqIEBtb2R1bGUgY29udGFpbnNcbiAqL1xuXG4vKipcbiAqIFRlc3Qgd2hldGhlciBhbiBlbGVtZW50IGNvbnRhaW5zIGFub3RoZXIgZWxlbWVudCBpbiB0aGUgRE9NLlxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gY29udGFpbmVyIFRoZSBlbGVtZW50IHRoYXQgbWF5IGNvbnRhaW4gdGhlIG90aGVyIGVsZW1lbnQuXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnQgVGhlIGVsZW1lbnQgdGhhdCBtYXkgYmUgYSBkZXNjZW5kYW50IG9mIHRoZSBvdGhlciBlbGVtZW50LlxuICogQHJldHVybiB7Qm9vbGVhbn0gV2hldGhlciB0aGUgYGNvbnRhaW5lcmAgZWxlbWVudCBjb250YWlucyB0aGUgYGVsZW1lbnRgLlxuICogQGV4YW1wbGVcbiAqICAgICAkLmNvbnRhaW5zKHBhcmVudEVsZW1lbnQsIGNoaWxkRWxlbWVudCk7XG4gKiAgICAg4p6kIHRydWUvZmFsc2VcbiAqL1xuXG5mdW5jdGlvbiBjb250YWlucyhjb250YWluZXIsIGVsZW1lbnQpIHtcbiAgICBpZighY29udGFpbmVyIHx8ICFlbGVtZW50IHx8IGNvbnRhaW5lciA9PT0gZWxlbWVudCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIGlmIChjb250YWluZXIuY29udGFpbnMpIHtcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lci5jb250YWlucyhlbGVtZW50KTtcbiAgICB9IGVsc2UgaWYgKGNvbnRhaW5lci5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbikge1xuICAgICAgICByZXR1cm4gIShjb250YWluZXIuY29tcGFyZURvY3VtZW50UG9zaXRpb24oZWxlbWVudCkgJiBOb2RlLkRPQ1VNRU5UX1BPU0lUSU9OX0RJU0NPTk5FQ1RFRCk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuXG4vKlxuICogRXhwb3J0IGludGVyZmFjZVxuICovXG5cbmV4cG9ydCB7IGNvbnRhaW5zIH07XG4iLCIvKipcbiAqIEBtb2R1bGUgQXR0clxuICovXG5cbmltcG9ydCB7IGVhY2ggfSBmcm9tICcuL3V0aWwnO1xuXG5mdW5jdGlvbiBpc051bWVyaWModmFsdWUpIHtcbiAgICByZXR1cm4gIWlzTmFOKHBhcnNlRmxvYXQodmFsdWUpKSAmJiBpc0Zpbml0ZSh2YWx1ZSk7XG59XG5cbmZ1bmN0aW9uIGNhbWVsaXplKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlLnJlcGxhY2UoLy0oW1xcZGEtel0pL2dpLCBmdW5jdGlvbiAobWF0Y2hlcywgbGV0dGVyKSB7IHJldHVybiBsZXR0ZXIudG9VcHBlckNhc2UoKTsgfSk7XG59XG5cbmZ1bmN0aW9uIGRhc2hlcml6ZSh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZS5yZXBsYWNlKC8oW2EtelxcZF0pKFtBLVpdKS9nLCAnJDEtJDInKS50b0xvd2VyQ2FzZSgpO1xufVxuXG4vKipcbiAqIEdldCB0aGUgdmFsdWUgb2YgYSBzdHlsZSBwcm9wZXJ0eSBmb3IgdGhlIGZpcnN0IGVsZW1lbnQsIG9yIHNldCBvbmUgb3IgbW9yZSBzdHlsZSBwcm9wZXJ0aWVzIGZvciBlYWNoIGVsZW1lbnQgaW4gdGhlIGNvbGxlY3Rpb24uXG4gKlxuICogQHBhcmFtIHtTdHJpbmd8T2JqZWN0fSBrZXkgVGhlIG5hbWUgb2YgdGhlIHN0eWxlIHByb3BlcnR5IHRvIGdldCBvciBzZXQuIE9yIGFuIG9iamVjdCBjb250YWluaW5nIGtleS12YWx1ZSBwYWlycyB0byBzZXQgYXMgc3R5bGUgcHJvcGVydGllcy5cbiAqIEBwYXJhbSB7U3RyaW5nfSBbdmFsdWVdIFRoZSB2YWx1ZSBvZiB0aGUgc3R5bGUgcHJvcGVydHkgdG8gc2V0LlxuICogQHJldHVybiB7T2JqZWN0fSBUaGUgd3JhcHBlZCBjb2xsZWN0aW9uXG4gKiBAY2hhaW5hYmxlXG4gKiBAZXhhbXBsZVxuICogICAgICQoJy5pdGVtJykuY3NzKCdwYWRkaW5nLWxlZnQnKTsgLy8gZ2V0XG4gKiAgICAgJCgnLml0ZW0nKS5jc3MoJ2NvbG9yJywgJyNmMDAnKTsgLy8gc2V0XG4gKiAgICAgJCgnLml0ZW0nKS5jc3Moeydib3JkZXItd2lkdGgnLCAnMXB4J30sIHsnZGlzcGxheScsICdpbmxpbmUtYmxvY2t9KTsgLy8gc2V0IG11bHRpcGxlXG4gKi9cblxuZnVuY3Rpb24gY3NzKGtleSwgdmFsdWUpIHtcblxuICAgIHZhciBzdHlsZVByb3BzLCBwcm9wLCB2YWw7XG5cbiAgICBpZih0eXBlb2Yga2V5ID09PSAnc3RyaW5nJykge1xuICAgICAgICBrZXkgPSBjYW1lbGl6ZShrZXkpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICB2YXIgZWxlbWVudCA9IHRoaXMubm9kZVR5cGUgPyB0aGlzIDogdGhpc1swXTtcbiAgICAgICAgICAgIGlmKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICB2YWwgPSBlbGVtZW50LnN0eWxlW2tleV07XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlzTnVtZXJpYyh2YWwpID8gcGFyc2VGbG9hdCh2YWwpIDogdmFsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0eWxlUHJvcHMgPSB7fTtcbiAgICAgICAgc3R5bGVQcm9wc1trZXldID0gdmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgc3R5bGVQcm9wcyA9IGtleTtcbiAgICAgICAgZm9yIChwcm9wIGluIHN0eWxlUHJvcHMpIHtcbiAgICAgICAgICAgIHZhbCA9IHN0eWxlUHJvcHNbcHJvcF07XG4gICAgICAgICAgICBkZWxldGUgc3R5bGVQcm9wc1twcm9wXTtcbiAgICAgICAgICAgIHN0eWxlUHJvcHNbY2FtZWxpemUocHJvcCldID0gdmFsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZWFjaCh0aGlzLCBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgIGZvciAocHJvcCBpbiBzdHlsZVByb3BzKSB7XG4gICAgICAgICAgICBpZihzdHlsZVByb3BzW3Byb3BdIHx8IHN0eWxlUHJvcHNbcHJvcF0gPT09IDApIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlW3Byb3BdID0gc3R5bGVQcm9wc1twcm9wXTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShkYXNoZXJpemUocHJvcCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcztcbn1cblxuLypcbiAqIEV4cG9ydCBpbnRlcmZhY2VcbiAqL1xuXG5leHBvcnQgeyBjc3MgfTtcbiIsIi8qKlxuICogQG1vZHVsZSBEYXRhXG4gKi9cblxuaW1wb3J0IHsgZWFjaCB9IGZyb20gJy4vdXRpbCc7XG5cbnZhciBkYXRhS2V5UHJvcCA9ICdfX2RvbXRhc3RpY19kYXRhX18nO1xuXG4vKipcbiAqIEdldCBkYXRhIGZyb20gZmlyc3QgZWxlbWVudCwgb3Igc2V0IGRhdGEgZm9yIGVhY2ggZWxlbWVudCBpbiB0aGUgY29sbGVjdGlvbi5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5IFRoZSBrZXkgZm9yIHRoZSBkYXRhIHRvIGdldCBvciBzZXQuXG4gKiBAcGFyYW0ge1N0cmluZ30gW3ZhbHVlXSBUaGUgZGF0YSB0byBzZXQuXG4gKiBAcmV0dXJuIHtPYmplY3R9IFRoZSB3cmFwcGVkIGNvbGxlY3Rpb25cbiAqIEBjaGFpbmFibGVcbiAqIEBleGFtcGxlXG4gKiAgICAgJCgnLml0ZW0nKS5kYXRhKCdhdHRyTmFtZScpOyAvLyBnZXRcbiAqICAgICAkKCcuaXRlbScpLmRhdGEoJ2F0dHJOYW1lJywge2FueTogJ2RhdGEnfSk7IC8vIHNldFxuICovXG5cbmZ1bmN0aW9uIGRhdGEoa2V5LCB2YWx1ZSkge1xuXG4gICAgaWYgKHR5cGVvZiBrZXkgPT09ICdzdHJpbmcnICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdmFyIGVsZW1lbnQgPSB0aGlzLm5vZGVUeXBlID8gdGhpcyA6IHRoaXNbMF07XG4gICAgICAgIHJldHVybiBlbGVtZW50ICYmIGVsZW1lbnRbZGF0YUtleVByb3BdID8gZWxlbWVudFtkYXRhS2V5UHJvcF1ba2V5XSA6IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBlYWNoKHRoaXMsIGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgZWxlbWVudFtkYXRhS2V5UHJvcF0gPSBlbGVtZW50W2RhdGFLZXlQcm9wXSB8fCB7fTtcbiAgICAgICAgZWxlbWVudFtkYXRhS2V5UHJvcF1ba2V5XSA9IHZhbHVlO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXM7XG5cbn1cblxuLyoqXG4gKiBHZXQgcHJvcGVydHkgZnJvbSBmaXJzdCBlbGVtZW50LCBvciBzZXQgcHJvcGVydHkgb24gZWFjaCBlbGVtZW50IGluIHRoZSBjb2xsZWN0aW9uLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgVGhlIG5hbWUgb2YgdGhlIHByb3BlcnR5IHRvIGdldCBvciBzZXQuXG4gKiBAcGFyYW0ge1N0cmluZ30gW3ZhbHVlXSBUaGUgdmFsdWUgb2YgdGhlIHByb3BlcnR5IHRvIHNldC5cbiAqIEByZXR1cm4ge09iamVjdH0gVGhlIHdyYXBwZWQgY29sbGVjdGlvblxuICogQGNoYWluYWJsZVxuICogQGV4YW1wbGVcbiAqICAgICAkKCcuaXRlbScpLnByb3AoJ2F0dHJOYW1lJyk7IC8vIGdldFxuICogICAgICQoJy5pdGVtJykucHJvcCgnYXR0ck5hbWUnLCAnYXR0clZhbHVlJyk7IC8vIHNldFxuICovXG5cbmZ1bmN0aW9uIHByb3Aoa2V5LCB2YWx1ZSkge1xuXG4gICAgaWYgKHR5cGVvZiBrZXkgPT09ICdzdHJpbmcnICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdmFyIGVsZW1lbnQgPSB0aGlzLm5vZGVUeXBlID8gdGhpcyA6IHRoaXNbMF07XG4gICAgICAgIHJldHVybiBlbGVtZW50ICYmIGVsZW1lbnQgPyBlbGVtZW50W2tleV0gOiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgZWFjaCh0aGlzLCBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnRba2V5XSA9IHZhbHVlO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXM7XG5cbn1cblxuXG4vKlxuICogRXhwb3J0IGludGVyZmFjZVxuICovXG5cbmV4cG9ydCB7IGRhdGEsIHByb3AgfSIsIi8qKlxuICogQG1vZHVsZSBET01cbiAqL1xuXG5pbXBvcnQgeyB0b0FycmF5IH0gZnJvbSAnLi91dGlsJztcblxuLyoqXG4gKiBBcHBlbmQgZWxlbWVudChzKSB0byBlYWNoIGVsZW1lbnQgaW4gdGhlIGNvbGxlY3Rpb24uXG4gKlxuICogQHBhcmFtIHtTdHJpbmd8Tm9kZXxOb2RlTGlzdHxPYmplY3R9IGVsZW1lbnQgV2hhdCB0byBhcHBlbmQgdG8gdGhlIGVsZW1lbnQocykuXG4gKiBDbG9uZXMgZWxlbWVudHMgYXMgbmVjZXNzYXJ5LlxuICogQHJldHVybiB7T2JqZWN0fSBUaGUgd3JhcHBlZCBjb2xsZWN0aW9uXG4gKiBAY2hhaW5hYmxlXG4gKiBAZXhhbXBsZVxuICogICAgICQoJy5pdGVtJykuYXBwZW5kKCc8cD5tb3JlPC9wPicpO1xuICovXG5cbmZ1bmN0aW9uIGFwcGVuZChlbGVtZW50KSB7XG4gICAgaWYgKHRoaXMgaW5zdGFuY2VvZiBOb2RlKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZWxlbWVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHRoaXMuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBlbGVtZW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgTm9kZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBlbGVtZW50cyA9IGVsZW1lbnQgaW5zdGFuY2VvZiBOb2RlTGlzdCA/IHRvQXJyYXkoZWxlbWVudCkgOiBlbGVtZW50O1xuICAgICAgICAgICAgICAgIGVsZW1lbnRzLmZvckVhY2godGhpcy5hcHBlbmRDaGlsZC5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBsID0gdGhpcy5sZW5ndGg7XG4gICAgICAgIHdoaWxlIChsLS0pIHtcbiAgICAgICAgICAgIHZhciBlbG0gPSBsID09PSAwID8gZWxlbWVudCA6IF9jbG9uZShlbGVtZW50KTtcbiAgICAgICAgICAgIGFwcGVuZC5jYWxsKHRoaXNbbF0sIGVsbSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG59XG5cbi8qKlxuICogUGxhY2UgZWxlbWVudChzKSBhdCB0aGUgYmVnaW5uaW5nIG9mIGVhY2ggZWxlbWVudCBpbiB0aGUgY29sbGVjdGlvbi5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ3xOb2RlfE5vZGVMaXN0fE9iamVjdH0gZWxlbWVudCBXaGF0IHRvIHBsYWNlIGF0IHRoZSBiZWdpbm5pbmcgb2YgdGhlIGVsZW1lbnQocykuXG4gKiBDbG9uZXMgZWxlbWVudHMgYXMgbmVjZXNzYXJ5LlxuICogQHJldHVybiB7T2JqZWN0fSBUaGUgd3JhcHBlZCBjb2xsZWN0aW9uXG4gKiBAY2hhaW5hYmxlXG4gKiBAZXhhbXBsZVxuICogICAgICQoJy5pdGVtJykucHJlcGVuZCgnPHNwYW4+c3RhcnQ8L3NwYW4+Jyk7XG4gKi9cblxuZnVuY3Rpb24gcHJlcGVuZChlbGVtZW50KSB7XG4gICAgaWYgKHRoaXMgaW5zdGFuY2VvZiBOb2RlKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZWxlbWVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHRoaXMuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgZWxlbWVudCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIE5vZGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmluc2VydEJlZm9yZShlbGVtZW50LCB0aGlzLmZpcnN0Q2hpbGQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgZWxlbWVudHMgPSBlbGVtZW50IGluc3RhbmNlb2YgTm9kZUxpc3QgPyB0b0FycmF5KGVsZW1lbnQpIDogZWxlbWVudDtcbiAgICAgICAgICAgICAgICBlbGVtZW50cy5yZXZlcnNlKCkuZm9yRWFjaChwcmVwZW5kLmJpbmQodGhpcykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGwgPSB0aGlzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKGwtLSkge1xuICAgICAgICAgICAgdmFyIGVsbSA9IGwgPT09IDAgPyBlbGVtZW50IDogX2Nsb25lKGVsZW1lbnQpO1xuICAgICAgICAgICAgcHJlcGVuZC5jYWxsKHRoaXNbbF0sIGVsbSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG59XG5cbi8qKlxuICogUGxhY2UgZWxlbWVudChzKSBiZWZvcmUgZWFjaCBlbGVtZW50IGluIHRoZSBjb2xsZWN0aW9uLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfE5vZGV8Tm9kZUxpc3R8T2JqZWN0fSBlbGVtZW50IFdoYXQgdG8gcGxhY2UgYXMgc2libGluZyhzKSBiZWZvcmUgdG8gdGhlIGVsZW1lbnQocykuXG4gKiBDbG9uZXMgZWxlbWVudHMgYXMgbmVjZXNzYXJ5LlxuICogQHJldHVybiB7T2JqZWN0fSBUaGUgd3JhcHBlZCBjb2xsZWN0aW9uXG4gKiBAY2hhaW5hYmxlXG4gKiBAZXhhbXBsZVxuICogICAgICQoJy5pdGVtcycpLmJlZm9yZSgnPHA+cHJlZml4PC9wPicpO1xuICovXG5cbmZ1bmN0aW9uIGJlZm9yZShlbGVtZW50KSB7XG4gICAgaWYgKHRoaXMgaW5zdGFuY2VvZiBOb2RlKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZWxlbWVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHRoaXMuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmViZWdpbicsIGVsZW1lbnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBOb2RlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtZW50LCB0aGlzKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIGVsZW1lbnRzID0gZWxlbWVudCBpbnN0YW5jZW9mIE5vZGVMaXN0ID8gdG9BcnJheShlbGVtZW50KSA6IGVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgZWxlbWVudHMuZm9yRWFjaChiZWZvcmUuYmluZCh0aGlzKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgbCA9IHRoaXMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAobC0tKSB7XG4gICAgICAgICAgICB2YXIgZWxtID0gbCA9PT0gMCA/IGVsZW1lbnQgOiBfY2xvbmUoZWxlbWVudCk7XG4gICAgICAgICAgICBiZWZvcmUuY2FsbCh0aGlzW2xdLCBlbG0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xufVxuXG4vKipcbiAqIFBsYWNlIGVsZW1lbnQocykgYWZ0ZXIgZWFjaCBlbGVtZW50IGluIHRoZSBjb2xsZWN0aW9uLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfE5vZGV8Tm9kZUxpc3R8T2JqZWN0fSBlbGVtZW50IFdoYXQgdG8gcGxhY2UgYXMgc2libGluZyhzKSBhZnRlciB0byB0aGUgZWxlbWVudChzKS4gQ2xvbmVzIGVsZW1lbnRzIGFzIG5lY2Vzc2FyeS5cbiAqIEByZXR1cm4ge09iamVjdH0gVGhlIHdyYXBwZWQgY29sbGVjdGlvblxuICogQGNoYWluYWJsZVxuICogQGV4YW1wbGVcbiAqICAgICAkKCcuaXRlbXMnKS5hZnRlcignPHNwYW4+c3VmPC9zcGFuPjxzcGFuPmZpeDwvc3Bhbj4nKTtcbiAqL1xuXG5mdW5jdGlvbiBhZnRlcihlbGVtZW50KSB7XG4gICAgaWYgKHRoaXMgaW5zdGFuY2VvZiBOb2RlKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZWxlbWVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHRoaXMuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmVuZCcsIGVsZW1lbnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBOb2RlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtZW50LCB0aGlzLm5leHRTaWJsaW5nKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIGVsZW1lbnRzID0gZWxlbWVudCBpbnN0YW5jZW9mIE5vZGVMaXN0ID8gdG9BcnJheShlbGVtZW50KSA6IGVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgZWxlbWVudHMucmV2ZXJzZSgpLmZvckVhY2goYWZ0ZXIuYmluZCh0aGlzKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgbCA9IHRoaXMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAobC0tKSB7XG4gICAgICAgICAgICB2YXIgZWxtID0gbCA9PT0gMCA/IGVsZW1lbnQgOiBfY2xvbmUoZWxlbWVudCk7XG4gICAgICAgICAgICBhZnRlci5jYWxsKHRoaXNbbF0sIGVsbSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG59XG5cbi8qKlxuICogQ2xvbmUgYSB3cmFwcGVkIG9iamVjdC5cbiAqXG4gKiBAcmV0dXJuIHtPYmplY3R9IFdyYXBwZWQgY29sbGVjdGlvbiBvZiBjbG9uZWQgbm9kZXMuXG4gKiBAZXhhbXBsZVxuICogICAgICQoZWxlbWVudCkuY2xvbmUoKTtcbiAqL1xuXG5mdW5jdGlvbiBjbG9uZSgpIHtcbiAgICByZXR1cm4gJChfY2xvbmUodGhpcykpO1xufVxuXG4vKipcbiAqIENsb25lIGFuIG9iamVjdFxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfE5vZGV8Tm9kZUxpc3R8QXJyYXl9IGVsZW1lbnQgVGhlIGVsZW1lbnQocykgdG8gY2xvbmUuXG4gKiBAcmV0dXJuIHtTdHJpbmd8Tm9kZXxOb2RlTGlzdHxBcnJheX0gVGhlIGNsb25lZCBlbGVtZW50KHMpXG4gKiBAcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIF9jbG9uZShlbGVtZW50KSB7XG4gICAgaWYgKHR5cGVvZiBlbGVtZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9IGVsc2UgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBOb2RlKSB7XG4gICAgICAgIHJldHVybiBlbGVtZW50LmNsb25lTm9kZSh0cnVlKTtcbiAgICB9IGVsc2UgaWYgKCdsZW5ndGgnIGluIGVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIFtdLm1hcC5jYWxsKGVsZW1lbnQsIGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgICAgICByZXR1cm4gZWwuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbi8qXG4gKiBFeHBvcnQgaW50ZXJmYWNlXG4gKi9cblxuZXhwb3J0IHsgYXBwZW5kLCBwcmVwZW5kLCBiZWZvcmUsIGFmdGVyLCBjbG9uZSB9O1xuIiwiLyoqXG4gKiBAbW9kdWxlIERPTSAoZXh0cmEpXG4gKi9cblxuaW1wb3J0IHsgZWFjaCB9IGZyb20gJy4vdXRpbCc7XG5pbXBvcnQgeyBhcHBlbmQsIGJlZm9yZSwgYWZ0ZXIgfSBmcm9tICcuL2RvbSc7XG5pbXBvcnQgeyAkIH0gZnJvbSAnLi9zZWxlY3Rvcic7XG5cbi8qKlxuICogQXBwZW5kIGVhY2ggZWxlbWVudCBpbiB0aGUgY29sbGVjdGlvbiB0byB0aGUgc3BlY2lmaWVkIGVsZW1lbnQocykuXG4gKlxuICogQHBhcmFtIHtOb2RlfE5vZGVMaXN0fE9iamVjdH0gZWxlbWVudCBXaGF0IHRvIGFwcGVuZCB0aGUgZWxlbWVudChzKSB0by4gQ2xvbmVzIGVsZW1lbnRzIGFzIG5lY2Vzc2FyeS5cbiAqIEByZXR1cm4ge09iamVjdH0gVGhlIHdyYXBwZWQgY29sbGVjdGlvblxuICogQGNoYWluYWJsZVxuICogQGV4YW1wbGVcbiAqICAgICAkKCcuaXRlbScpLmFwcGVuZFRvKGNvbnRhaW5lcik7XG4gKi9cblxuZnVuY3Rpb24gYXBwZW5kVG8oZWxlbWVudCkge1xuICAgIHZhciBjb250ZXh0ID0gdHlwZW9mIGVsZW1lbnQgPT09ICdzdHJpbmcnID8gJChlbGVtZW50KSA6IGVsZW1lbnQ7XG4gICAgYXBwZW5kLmNhbGwoY29udGV4dCwgdGhpcyk7XG4gICAgcmV0dXJuIHRoaXM7XG59XG5cbi8qXG4gKiBFbXB0eSBlYWNoIGVsZW1lbnQgaW4gdGhlIGNvbGxlY3Rpb24uXG4gKlxuICogQHJldHVybiB7T2JqZWN0fSBUaGUgd3JhcHBlZCBjb2xsZWN0aW9uXG4gKiBAY2hhaW5hYmxlXG4gKiBAZXhhbXBsZVxuICogICAgICQoJy5pdGVtJykuZW1wdHkoKTtcbiAqL1xuXG5mdW5jdGlvbiBlbXB0eSgpe1xuICAgIHJldHVybiBlYWNoKHRoaXMsIGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSAnJztcbiAgICB9KTtcbn1cblxuLyoqXG4gKiBSZW1vdmUgdGhlIGNvbGxlY3Rpb24gZnJvbSB0aGUgRE9NLlxuICpcbiAqIEByZXR1cm4ge0FycmF5fSBBcnJheSBjb250YWluaW5nIHRoZSByZW1vdmVkIGVsZW1lbnRzXG4gKiBAZXhhbXBsZVxuICogICAgICQoJy5pdGVtJykucmVtb3ZlKCk7XG4gKi9cblxuZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgIHJldHVybiBlYWNoKHRoaXMsIGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgaWYgKGVsZW1lbnQucGFyZW50Tm9kZSkge1xuICAgICAgICAgICAgZWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbi8qKlxuICogUmVwbGFjZSBlYWNoIGVsZW1lbnQgaW4gdGhlIGNvbGxlY3Rpb24gd2l0aCB0aGUgcHJvdmlkZWQgbmV3IGNvbnRlbnQsIGFuZCByZXR1cm4gdGhlIGFycmF5IG9mIGVsZW1lbnRzIHRoYXQgd2VyZSByZXBsYWNlZC5cbiAqXG4gKiBAcmV0dXJuIHtBcnJheX0gQXJyYXkgY29udGFpbmluZyB0aGUgcmVwbGFjZWQgZWxlbWVudHNcbiAqL1xuXG5mdW5jdGlvbiByZXBsYWNlV2l0aCgpIHtcbiAgICByZXR1cm4gYmVmb3JlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykucmVtb3ZlKCk7XG59XG5cbi8qKlxuICogR2V0IHRoZSBgdGV4dENvbnRlbnRgIGZyb20gdGhlIGZpcnN0LCBvciBzZXQgdGhlIGB0ZXh0Q29udGVudGAgb2YgZWFjaCBlbGVtZW50IGluIHRoZSBjb2xsZWN0aW9uLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBbdmFsdWVdXG4gKiBAcmV0dXJuIHtPYmplY3R9IFRoZSB3cmFwcGVkIGNvbGxlY3Rpb25cbiAqIEBjaGFpbmFibGVcbiAqIEBleGFtcGxlXG4gKiAgICAgJCgnLml0ZW0nKS50ZXh0KCdOZXcgY29udGVudCcpO1xuICovXG5cbmZ1bmN0aW9uIHRleHQodmFsdWUpe1xuXG4gICAgaWYodmFsdWUgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdGhpc1swXS50ZXh0Q29udGVudDtcbiAgICB9XG5cbiAgICBlYWNoKHRoaXMsIGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9ICcnICsgdmFsdWU7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcztcbn1cblxuLyoqXG4gKiBHZXQgdGhlIGB2YWx1ZWAgZnJvbSB0aGUgZmlyc3QsIG9yIHNldCB0aGUgYHZhbHVlYCBvZiBlYWNoIGVsZW1lbnQgaW4gdGhlIGNvbGxlY3Rpb24uXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IFt2YWx1ZV1cbiAqIEByZXR1cm4ge09iamVjdH0gVGhlIHdyYXBwZWQgY29sbGVjdGlvblxuICogQGNoYWluYWJsZVxuICogQGV4YW1wbGVcbiAqICAgICAkKCdpbnB1dC5maXJzdE5hbWUnKS52YWx1ZSgnTmV3IHZhbHVlJyk7XG4gKi9cblxuZnVuY3Rpb24gdmFsKHZhbHVlKXtcblxuICAgIGlmKHZhbHVlID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHRoaXNbMF0udmFsdWU7XG4gICAgfVxuXG4gICAgZWFjaCh0aGlzLCBmdW5jdGlvbihlbGVtZW50KXtcbiAgICAgICAgZWxlbWVudC52YWx1ZSA9IHZhbHVlO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXM7XG59XG5cbi8qXG4gKiBFeHBvcnQgaW50ZXJmYWNlXG4gKi9cblxuZXhwb3J0IHsgYXBwZW5kVG8sIGVtcHR5LCByZW1vdmUsIHJlcGxhY2VXaXRoLCB0ZXh0LCB2YWwgfTtcbiIsIi8qKlxuICogQG1vZHVsZSBFdmVudHNcbiAqL1xuXG5pbXBvcnQgeyBlYWNoIH0gZnJvbSAnLi91dGlsJztcbmltcG9ydCB7IGNsb3Nlc3QgfSBmcm9tICcuL3NlbGVjdG9yJztcblxuLyoqXG4gKiBTaG9ydGhhbmQgZm9yIGBhZGRFdmVudExpc3RlbmVyYC4gU3VwcG9ydHMgZXZlbnQgZGVsZWdhdGlvbiBpZiBhIGZpbHRlciAoYHNlbGVjdG9yYCkgaXMgcHJvdmlkZWQuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50TmFtZXMgTGlzdCBvZiBzcGFjZS1zZXBhcmF0ZWQgZXZlbnQgdHlwZXMgdG8gYmUgYWRkZWQgdG8gdGhlIGVsZW1lbnQocylcbiAqIEBwYXJhbSB7U3RyaW5nfSBbc2VsZWN0b3JdIFNlbGVjdG9yIHRvIGZpbHRlciBkZXNjZW5kYW50cyB0aGF0IGRlbGVnYXRlIHRoZSBldmVudCB0byB0aGlzIGVsZW1lbnQuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBoYW5kbGVyIEV2ZW50IGhhbmRsZXJcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gdXNlQ2FwdHVyZT1mYWxzZVxuICogQHJldHVybiB7T2JqZWN0fSBUaGUgd3JhcHBlZCBjb2xsZWN0aW9uXG4gKiBAY2hhaW5hYmxlXG4gKiBAZXhhbXBsZVxuICogICAgICQoJy5pdGVtJykub24oJ2NsaWNrJywgY2FsbGJhY2spO1xuICogICAgICQoJy5jb250YWluZXInKS5vbignY2xpY2sgZm9jdXMnLCAnLml0ZW0nLCBoYW5kbGVyKTtcbiAqL1xuXG5mdW5jdGlvbiBvbihldmVudE5hbWVzLCBzZWxlY3RvciwgaGFuZGxlciwgdXNlQ2FwdHVyZSkge1xuXG4gICAgaWYgKHR5cGVvZiBzZWxlY3RvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBoYW5kbGVyID0gc2VsZWN0b3I7XG4gICAgICAgIHNlbGVjdG9yID0gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgcGFydHMsXG4gICAgICAgIG5hbWVzcGFjZSxcbiAgICAgICAgZXZlbnRMaXN0ZW5lcjtcblxuICAgIGV2ZW50TmFtZXMuc3BsaXQoJyAnKS5mb3JFYWNoKGZ1bmN0aW9uKGV2ZW50TmFtZSkge1xuXG4gICAgICAgIHBhcnRzID0gZXZlbnROYW1lLnNwbGl0KCcuJyk7XG4gICAgICAgIGV2ZW50TmFtZSA9IHBhcnRzWzBdIHx8IG51bGw7XG4gICAgICAgIG5hbWVzcGFjZSA9IHBhcnRzWzFdIHx8IG51bGw7XG5cbiAgICAgICAgZXZlbnRMaXN0ZW5lciA9IHByb3h5SGFuZGxlcihoYW5kbGVyKTtcblxuICAgICAgICBlYWNoKHRoaXMsIGZ1bmN0aW9uKGVsZW1lbnQpIHtcblxuICAgICAgICAgICAgaWYgKHNlbGVjdG9yKSB7XG4gICAgICAgICAgICAgICAgZXZlbnRMaXN0ZW5lciA9IGRlbGVnYXRlSGFuZGxlci5iaW5kKGVsZW1lbnQsIHNlbGVjdG9yLCBldmVudExpc3RlbmVyKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgZXZlbnRMaXN0ZW5lciwgdXNlQ2FwdHVyZSB8fCBmYWxzZSk7XG5cbiAgICAgICAgICAgIGdldEhhbmRsZXJzKGVsZW1lbnQpLnB1c2goe1xuICAgICAgICAgICAgICAgIGV2ZW50TmFtZTogZXZlbnROYW1lLFxuICAgICAgICAgICAgICAgIGhhbmRsZXI6IGhhbmRsZXIsXG4gICAgICAgICAgICAgICAgZXZlbnRMaXN0ZW5lcjogZXZlbnRMaXN0ZW5lcixcbiAgICAgICAgICAgICAgICBzZWxlY3Rvcjogc2VsZWN0b3IsXG4gICAgICAgICAgICAgICAgbmFtZXNwYWNlOiBuYW1lc3BhY2VcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgIH0sIHRoaXMpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG59XG5cbi8qKlxuICogU2hvcnRoYW5kIGZvciBgcmVtb3ZlRXZlbnRMaXN0ZW5lcmAuIERlbGVnYXRlcyB0byBgdW5kZWxlZ2F0ZWAgaWYgdGhhdCBzaWduYXR1cmUgaXMgdXNlZC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnROYW1lcyBMaXN0IG9mIHNwYWNlLXNlcGFyYXRlZCBldmVudCB0eXBlcyB0byBiZSByZW1vdmVkIGZyb20gdGhlIGVsZW1lbnQocylcbiAqIEBwYXJhbSB7U3RyaW5nfSBbc2VsZWN0b3JdIFNlbGVjdG9yIHRvIGZpbHRlciBkZXNjZW5kYW50cyB0aGF0IHVuZGVsZWdhdGUgdGhlIGV2ZW50IHRvIHRoaXMgZWxlbWVudC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGhhbmRsZXIgRXZlbnQgaGFuZGxlclxuICogQHBhcmFtIHtCb29sZWFufSB1c2VDYXB0dXJlPWZhbHNlXG4gKiBAcmV0dXJuIHtPYmplY3R9IFRoZSB3cmFwcGVkIGNvbGxlY3Rpb25cbiAqIEBjaGFpbmFibGVcbiAqIEBleGFtcGxlXG4gKiAgICAgJCgnLml0ZW0nKS5vZmYoJ2NsaWNrJywgY2FsbGJhY2spO1xuICogICAgICQoJyNteS1lbGVtZW50Jykub2ZmKCdteUV2ZW50IG15T3RoZXJFdmVudCcpO1xuICogICAgICQoJy5pdGVtJykub2ZmKCk7XG4gKi9cblxuZnVuY3Rpb24gb2ZmKGV2ZW50TmFtZXMgPSAnJywgc2VsZWN0b3IsIGhhbmRsZXIsIHVzZUNhcHR1cmUpIHtcblxuICAgIGlmICh0eXBlb2Ygc2VsZWN0b3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgaGFuZGxlciA9IHNlbGVjdG9yO1xuICAgICAgICBzZWxlY3RvciA9IG51bGw7XG4gICAgfVxuXG4gICAgdmFyIHBhcnRzLFxuICAgICAgICBuYW1lc3BhY2UsXG4gICAgICAgIGhhbmRsZXJzO1xuXG4gICAgZXZlbnROYW1lcy5zcGxpdCgnICcpLmZvckVhY2goZnVuY3Rpb24oZXZlbnROYW1lKSB7XG5cbiAgICAgICAgcGFydHMgPSBldmVudE5hbWUuc3BsaXQoJy4nKTtcbiAgICAgICAgZXZlbnROYW1lID0gcGFydHNbMF0gfHwgbnVsbDtcbiAgICAgICAgbmFtZXNwYWNlID0gcGFydHNbMV0gfHwgbnVsbDtcblxuICAgICAgICBlYWNoKHRoaXMsIGZ1bmN0aW9uKGVsZW1lbnQpIHtcblxuICAgICAgICAgICAgaGFuZGxlcnMgPSBnZXRIYW5kbGVycyhlbGVtZW50KTtcblxuICAgICAgICAgICAgZWFjaChoYW5kbGVycy5maWx0ZXIoZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICghZXZlbnROYW1lIHx8IGl0ZW0uZXZlbnROYW1lID09PSBldmVudE5hbWUpICYmXG4gICAgICAgICAgICAgICAgICAgICghbmFtZXNwYWNlIHx8IGl0ZW0ubmFtZXNwYWNlID09PSBuYW1lc3BhY2UpICYmXG4gICAgICAgICAgICAgICAgICAgICghaGFuZGxlciB8fCBpdGVtLmhhbmRsZXIgPT09IGhhbmRsZXIpICYmXG4gICAgICAgICAgICAgICAgICAgICghc2VsZWN0b3IgfHwgaXRlbS5zZWxlY3RvciA9PT0gc2VsZWN0b3IpKTtcbiAgICAgICAgICAgIH0pLCBmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGl0ZW0uZXZlbnROYW1lLCBpdGVtLmV2ZW50TGlzdGVuZXIsIHVzZUNhcHR1cmUgfHwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGhhbmRsZXJzLnNwbGljZShoYW5kbGVycy5pbmRleE9mKGl0ZW0pLCAxKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoIWV2ZW50TmFtZSAmJiAhbmFtZXNwYWNlICYmICFzZWxlY3RvciAmJiAhaGFuZGxlcikge1xuICAgICAgICAgICAgICAgIGNsZWFySGFuZGxlcnMoZWxlbWVudCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGhhbmRsZXJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGNsZWFySGFuZGxlcnMoZWxlbWVudCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG5cbiAgICB9LCB0aGlzKTtcblxuICAgIHJldHVybiB0aGlzO1xufVxuXG5mdW5jdGlvbiBkZWxlZ2F0ZShzZWxlY3RvciwgZXZlbnROYW1lLCBoYW5kbGVyKSB7XG4gICAgcmV0dXJuIG9uLmNhbGwodGhpcywgZXZlbnROYW1lLCBzZWxlY3RvciwgaGFuZGxlcik7XG59XG5cbmZ1bmN0aW9uIHVuZGVsZWdhdGUoc2VsZWN0b3IsIGV2ZW50TmFtZSwgaGFuZGxlcikge1xuICAgIHJldHVybiBvZmYuY2FsbCh0aGlzLCBldmVudE5hbWUsIHNlbGVjdG9yLCBoYW5kbGVyKTtcbn1cblxuLyoqXG4gKiBHZXQgZXZlbnQgaGFuZGxlcnMgZnJvbSBhbiBlbGVtZW50XG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Tm9kZX0gZWxlbWVudFxuICogQHJldHVybiB7QXJyYXl9XG4gKi9cblxudmFyIGV2ZW50S2V5UHJvcCA9ICdfX2RvbXRhc3RpY19ldmVudF9fJztcbnZhciBpZCA9IDE7XG52YXIgaGFuZGxlcnMgPSB7fTtcbnZhciB1bnVzZWRLZXlzID0gW107XG5cbmZ1bmN0aW9uIGdldEhhbmRsZXJzKGVsZW1lbnQpIHtcbiAgICBpZiAoIWVsZW1lbnRbZXZlbnRLZXlQcm9wXSkge1xuICAgICAgICBlbGVtZW50W2V2ZW50S2V5UHJvcF0gPSB1bnVzZWRLZXlzLmxlbmd0aCA9PT0gMCA/ICsraWQgOiB1bnVzZWRLZXlzLnBvcCgpO1xuICAgIH1cbiAgICB2YXIga2V5ID0gZWxlbWVudFtldmVudEtleVByb3BdO1xuICAgIHJldHVybiBoYW5kbGVyc1trZXldIHx8IChoYW5kbGVyc1trZXldID0gW10pO1xufVxuXG4vKipcbiAqIENsZWFyIGV2ZW50IGhhbmRsZXJzIGZvciBhbiBlbGVtZW50XG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Tm9kZX0gZWxlbWVudFxuICovXG5cbmZ1bmN0aW9uIGNsZWFySGFuZGxlcnMoZWxlbWVudCkge1xuICAgIHZhciBrZXkgPSBlbGVtZW50W2V2ZW50S2V5UHJvcF07XG4gICAgaWYgKGhhbmRsZXJzW2tleV0pIHtcbiAgICAgICAgaGFuZGxlcnNba2V5XSA9IG51bGw7XG4gICAgICAgIGVsZW1lbnRba2V5XSA9IG51bGw7XG4gICAgICAgIHVudXNlZEtleXMucHVzaChrZXkpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBGdW5jdGlvbiB0byBjcmVhdGUgYSBoYW5kbGVyIHRoYXQgYXVnbWVudHMgdGhlIGV2ZW50IG9iamVjdCB3aXRoIHNvbWUgZXh0cmEgbWV0aG9kcyxcbiAqIGFuZCBleGVjdXRlcyB0aGUgY2FsbGJhY2sgd2l0aCB0aGUgZXZlbnQgYW5kIHRoZSBldmVudCBkYXRhIChpLmUuIGBldmVudC5kZXRhaWxgKS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIGhhbmRsZXIgQ2FsbGJhY2sgdG8gZXhlY3V0ZSBhcyBgaGFuZGxlcihldmVudCwgZGF0YSlgXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqL1xuXG5mdW5jdGlvbiBwcm94eUhhbmRsZXIoaGFuZGxlcikge1xuICAgIHJldHVybiBmdW5jdGlvbihldmVudCkge1xuICAgICAgICBoYW5kbGVyLmNhbGwodGhpcywgYXVnbWVudEV2ZW50KGV2ZW50KSwgZXZlbnQuZGV0YWlsKTtcbiAgICB9O1xufVxuXG4vKipcbiAqIEF0dGVtcHQgdG8gYXVnbWVudCBldmVudHMgYW5kIGltcGxlbWVudCBzb21ldGhpbmcgY2xvc2VyIHRvIERPTSBMZXZlbCAzIEV2ZW50cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IGV2ZW50XG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqL1xuXG52YXIgYXVnbWVudEV2ZW50ID0gKGZ1bmN0aW9uKCkge1xuXG4gICAgdmFyIG1ldGhvZE5hbWUsXG4gICAgICAgIGV2ZW50TWV0aG9kcyA9IHtcbiAgICAgICAgICAgIHByZXZlbnREZWZhdWx0OiAnaXNEZWZhdWx0UHJldmVudGVkJyxcbiAgICAgICAgICAgIHN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbjogJ2lzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkJyxcbiAgICAgICAgICAgIHN0b3BQcm9wYWdhdGlvbjogJ2lzUHJvcGFnYXRpb25TdG9wcGVkJ1xuICAgICAgICB9LFxuICAgICAgICByZXR1cm5UcnVlID0gKCkgPT4gdHJ1ZSxcbiAgICAgICAgcmV0dXJuRmFsc2UgPSAoKSA9PiBmYWxzZTtcblxuICAgIHJldHVybiBmdW5jdGlvbihldmVudCkge1xuICAgICAgICBpZiAoIWV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCB8fCBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24gfHwgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKSB7XG4gICAgICAgICAgICBmb3IgKG1ldGhvZE5hbWUgaW4gZXZlbnRNZXRob2RzKSB7XG4gICAgICAgICAgICAgICAgKGZ1bmN0aW9uKG1ldGhvZE5hbWUsIHRlc3RNZXRob2ROYW1lLCBvcmlnaW5hbE1ldGhvZCkge1xuICAgICAgICAgICAgICAgICAgICBldmVudFttZXRob2ROYW1lXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1t0ZXN0TWV0aG9kTmFtZV0gPSByZXR1cm5UcnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9yaWdpbmFsTWV0aG9kICYmIG9yaWdpbmFsTWV0aG9kLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50W3Rlc3RNZXRob2ROYW1lXSA9IHJldHVybkZhbHNlO1xuICAgICAgICAgICAgICAgIH0obWV0aG9kTmFtZSwgZXZlbnRNZXRob2RzW21ldGhvZE5hbWVdLCBldmVudFttZXRob2ROYW1lXSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGV2ZW50Ll9wcmV2ZW50RGVmYXVsdCkge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGV2ZW50O1xuICAgIH1cblxufSkoKTtcblxuLyoqXG4gKiBGdW5jdGlvbiB0byB0ZXN0IHdoZXRoZXIgZGVsZWdhdGVkIGV2ZW50cyBtYXRjaCB0aGUgcHJvdmlkZWQgYHNlbGVjdG9yYCAoZmlsdGVyKSxcbiAqIGlmIHRoZSBldmVudCBwcm9wYWdhdGlvbiB3YXMgc3RvcHBlZCwgYW5kIHRoZW4gYWN0dWFsbHkgY2FsbCB0aGUgcHJvdmlkZWQgZXZlbnQgaGFuZGxlci5cbiAqIFVzZSBgdGhpc2AgaW5zdGVhZCBvZiBgZXZlbnQuY3VycmVudFRhcmdldGAgb24gdGhlIGV2ZW50IG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtTdHJpbmd9IHNlbGVjdG9yIFNlbGVjdG9yIHRvIGZpbHRlciBkZXNjZW5kYW50cyB0aGF0IHVuZGVsZWdhdGUgdGhlIGV2ZW50IHRvIHRoaXMgZWxlbWVudC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGhhbmRsZXIgRXZlbnQgaGFuZGxlclxuICogQHBhcmFtIHtFdmVudH0gZXZlbnRcbiAqL1xuXG5mdW5jdGlvbiBkZWxlZ2F0ZUhhbmRsZXIoc2VsZWN0b3IsIGhhbmRsZXIsIGV2ZW50KSB7XG4gICAgdmFyIGV2ZW50VGFyZ2V0ID0gZXZlbnQuX3RhcmdldCB8fCBldmVudC50YXJnZXQsXG4gICAgICAgIGN1cnJlbnRUYXJnZXQgPSBjbG9zZXN0LmNhbGwoW2V2ZW50VGFyZ2V0XSwgc2VsZWN0b3IsIHRoaXMpWzBdO1xuICAgIGlmIChjdXJyZW50VGFyZ2V0ICYmIGN1cnJlbnRUYXJnZXQgIT09IHRoaXMpIHtcbiAgICAgICAgaWYgKGN1cnJlbnRUYXJnZXQgPT09IGV2ZW50VGFyZ2V0IHx8ICEoZXZlbnQuaXNQcm9wYWdhdGlvblN0b3BwZWQgJiYgZXZlbnQuaXNQcm9wYWdhdGlvblN0b3BwZWQoKSkpIHtcbiAgICAgICAgICAgIGhhbmRsZXIuY2FsbChjdXJyZW50VGFyZ2V0LCBldmVudCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbnZhciBiaW5kID0gb24sXG4gICAgdW5iaW5kID0gb2ZmO1xuXG4vKlxuICogRXhwb3J0IGludGVyZmFjZVxuICovXG5cbmV4cG9ydCB7IG9uLCBvZmYsIGRlbGVnYXRlLCB1bmRlbGVnYXRlLCBiaW5kLCB1bmJpbmQgfTtcbiIsIi8qKlxuICogQG1vZHVsZSBIVE1MXG4gKi9cblxuaW1wb3J0IHsgZWFjaCB9IGZyb20gJy4vdXRpbCc7XG5cbi8qXG4gKiBHZXQgdGhlIEhUTUwgY29udGVudHMgb2YgdGhlIGZpcnN0IGVsZW1lbnQsIG9yIHNldCB0aGUgSFRNTCBjb250ZW50cyBmb3IgZWFjaCBlbGVtZW50IGluIHRoZSBjb2xsZWN0aW9uLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBbZnJhZ21lbnRdIEhUTUwgZnJhZ21lbnQgdG8gc2V0IGZvciB0aGUgZWxlbWVudC4gSWYgdGhpcyBhcmd1bWVudCBpcyBvbWl0dGVkLCB0aGUgSFRNTCBjb250ZW50cyBhcmUgcmV0dXJuZWQuXG4gKiBAcmV0dXJuIHtPYmplY3R9IFRoZSB3cmFwcGVkIGNvbGxlY3Rpb25cbiAqIEBjaGFpbmFibGVcbiAqIEBleGFtcGxlXG4gKiAgICAgJCgnLml0ZW0nKS5odG1sKCk7XG4gKiAgICAgJCgnLml0ZW0nKS5odG1sKCc8c3Bhbj5tb3JlPC9zcGFuPicpO1xuICovXG5cbmZ1bmN0aW9uIGh0bWwoZnJhZ21lbnQpIHtcblxuICAgIGlmICh0eXBlb2YgZnJhZ21lbnQgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHZhciBlbGVtZW50ID0gdGhpcy5ub2RlVHlwZSA/IHRoaXMgOiB0aGlzWzBdO1xuICAgICAgICByZXR1cm4gZWxlbWVudCA/IGVsZW1lbnQuaW5uZXJIVE1MIDogdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGVhY2godGhpcywgZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9IGZyYWdtZW50O1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXM7XG5cbn1cblxuLypcbiAqIEV4cG9ydCBpbnRlcmZhY2VcbiAqL1xuXG5leHBvcnQgeyBodG1sIH07XG4iLCIvKipcbiAqIEBtb2R1bGUgQVBJXG4gKi9cblxuaW1wb3J0IHsgZXh0ZW5kLCBleHRlbmRBbGwgfSBmcm9tICcuL3V0aWwnO1xuXG52YXIgYXBpID0ge30sXG4gICAgYXBpTm9kZUxpc3QgPSB7fSxcbiAgICAkID0ge307XG5cbi8vIEltcG9ydCBtb2R1bGVzIHRvIGJ1aWxkIHVwIHRoZSBBUElcblxuaW1wb3J0ICogYXMgYXJyYXkgZnJvbSAnLi9hcnJheSc7XG5pbXBvcnQgKiBhcyBhdHRyIGZyb20gJy4vYXR0cic7XG5pbXBvcnQgKiBhcyBjbGFzc18gZnJvbSAnLi9jbGFzcyc7XG5pbXBvcnQgKiBhcyBjb250YWlucyBmcm9tICcuL2NvbnRhaW5zJztcbmltcG9ydCAqIGFzIGNzcyBmcm9tICcuL2Nzcyc7XG5pbXBvcnQgKiBhcyBkYXRhIGZyb20gJy4vZGF0YSc7XG5pbXBvcnQgKiBhcyBkb20gZnJvbSAnLi9kb20nO1xuaW1wb3J0ICogYXMgZG9tX2V4dHJhIGZyb20gJy4vZG9tX2V4dHJhJztcbmltcG9ydCAqIGFzIGV2ZW50IGZyb20gJy4vZXZlbnQnO1xuaW1wb3J0ICogYXMgaHRtbCBmcm9tICcuL2h0bWwnO1xuaW1wb3J0ICogYXMgbW9kZSBmcm9tICcuL21vZGUnO1xuaW1wb3J0ICogYXMgbm9jb25mbGljdCBmcm9tICcuL25vY29uZmxpY3QnO1xuaW1wb3J0ICogYXMgcmVhZHkgZnJvbSAnLi9yZWFkeSc7XG5pbXBvcnQgKiBhcyBzZWxlY3RvciBmcm9tICcuL3NlbGVjdG9yJztcbmltcG9ydCAqIGFzIHNlbGVjdG9yX2V4dHJhIGZyb20gJy4vc2VsZWN0b3JfZXh0cmEnO1xuaW1wb3J0ICogYXMgdHJpZ2dlciBmcm9tICcuL3RyaWdnZXInO1xuaW1wb3J0ICogYXMgdHlwZSBmcm9tICcuL3R5cGUnO1xuXG5pZiAodHlwZW9mIHNlbGVjdG9yICE9PSAndW5kZWZpbmVkJykge1xuICAgICQgPSBzZWxlY3Rvci4kO1xuICAgICQubWF0Y2hlcyA9IHNlbGVjdG9yLm1hdGNoZXM7XG4gICAgYXBpLmZpbmQgPSBzZWxlY3Rvci5maW5kO1xuICAgIGFwaS5jbG9zZXN0ID0gc2VsZWN0b3IuY2xvc2VzdDtcbn1cblxuZXh0ZW5kQWxsKCQsIGNvbnRhaW5zLCBtb2RlLCBub2NvbmZsaWN0LCB0eXBlKTtcbmV4dGVuZEFsbChhcGksIGFycmF5LCBhdHRyLCBjbGFzc18sIGNzcywgZGF0YSwgZG9tLCBkb21fZXh0cmEsIGV2ZW50LCBodG1sLCByZWFkeSwgc2VsZWN0b3JfZXh0cmEsIHRyaWdnZXIpO1xuZXh0ZW5kQWxsKGFwaU5vZGVMaXN0LCBhcnJheSk7XG5cbi8vIFZlcnNpb25cblxuJC52ZXJzaW9uID0gJ19fVkVSU0lPTl9fJztcblxuLy8gVXRpbFxuXG4kLmV4dGVuZCA9IGV4dGVuZDtcblxuLy8gSW50ZXJuYWwgcHJvcGVydGllcyB0byBzd2l0Y2ggYmV0d2VlbiBkZWZhdWx0IGFuZCBuYXRpdmUgbW9kZVxuXG4kLmZuID0gYXBpO1xuJC5mbkxpc3QgPSBhcGlOb2RlTGlzdDtcblxuLy8gRXhwb3J0IGludGVyZmFjZVxuXG5leHBvcnQgZGVmYXVsdCAkO1xuIiwiLypcbiAqICMgT3B0LWluIHRvIE5hdGl2ZSBNb2RlXG4gKlxuICogVGhlIGRlZmF1bHQsIG5vbi1pbnRydXNpdmUgbW9kZSBpcyBzaW1pbGFyIHRvIGhvdyBqUXVlcnkgb3BlcmF0ZXM6IHdvcmtpbmcgd2l0aCBzdGF0aWMsIGFycmF5LWxpa2UgYCRgIG9iamVjdHM6XG4gKlxuICogICAgICQoJy5pdGVtcycpLmFwcGVuZCgnPHNwYW4+Zm9vPC9zcGFuPik7XG4gKiAgICAgJChkb2N1bWVudC5ib2R5KS5vbignY2xpY2snLCAnLnRhYicsIGhhbmRsZXIpO1xuICpcbiAqIEhvd2V2ZXIsIHlvdSBjYW4gb3B0LWluIHRvIHdvcmsgd2l0aCBsaXZlIE5vZGVMaXN0IG9iamVjdHMuXG4gKiBJbiB0aGlzIFwibmF0aXZlXCIgbW9kZSwgdGhlIGBOb2RlYCBhbmQgYE5vZGVMaXN0YCBwcm90b3R5cGVzIGFyZSBhdWdtZW50ZWQgKGluIGEgc2FmZSBhbmQgcmV2ZXJzaWJsZSBtYW5uZXIpIHRvIGZpbGwgdXAgdGhlIGNoYWluYWJsZSBBUEksXG4gKiB0byBlbmFibGUgd29ya2luZyB3aXRoIGBOb2RlYCBhbmQgYE5vZGVMaXN0YCBvYmplY3RzIGRpcmVjdGx5OlxuICpcbiAqICAgICB2YXIgY29sbGVjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pdGVtcycpO1xuICogICAgIGNvbGxlY3Rpb24uYXBwZW5kKCc8c3Bhbj5mb288L3NwYW4+KTtcbiAqICAgICBjb2xsZWN0aW9uLmFkZENsYXNzKCdiYXInKTtcbiAqICAgICBjb2xsZWN0aW9uLmZvckVhY2goaXRlcmF0b3JGbik7XG4gKiAgICAgY29sbGVjdGlvbi5maW5kKCcubW9yZScpO1xuICpcbiAqICAgICBkb2N1bWVudC5ib2R5Lm9uKCdjbGljaycsICcudGFiJywgaGFuZGxlcilcbiAqXG4gKiBOb3RlIHRoYXQgaW4gbmF0aXZlIG1vZGUsIGAkKHNlbGVjdG9yKWAgY2FuIHN0aWwgYmUgdXNlZC4gSXQgcmV0dXJucyBhIE5vZGVMaXN0LlxuICpcbiAqIEJ1aWxkIHRoZSBsaWIgdXNpbmcgZ3VscCB3aXRoIGBtb2RlYCBub3QgZXhjbHVkZWQuXG4gKiBVc2UgYCQubmF0aXZlKClgIHRvIGFjdGl2YXRlIHRoaXMgYmVoYXZpb3IuIFRoZSBBUEkgaXMgdGhlIHNhbWUgaW4gYm90aCBtb2Rlcy5cbiAqL1xuXG5pbXBvcnQgeyBnbG9iYWwgfSBmcm9tICcuL3V0aWwnO1xuXG52YXIgaXNOYXRpdmUgPSBmYWxzZTtcblxuZnVuY3Rpb24gbmF0aXZlKGdvTmF0aXZlID0gdHJ1ZSkge1xuICAgIHZhciB3YXNOYXRpdmUgPSBpc05hdGl2ZTtcbiAgICBpc05hdGl2ZSA9IGdvTmF0aXZlO1xuICAgIGlmIChnbG9iYWwuJCkge1xuICAgICAgICBnbG9iYWwuJC5pc05hdGl2ZSA9IGlzTmF0aXZlO1xuICAgIH1cbiAgICBpZiAoIXdhc05hdGl2ZSAmJiBpc05hdGl2ZSkge1xuICAgICAgICBhdWdtZW50TmF0aXZlUHJvdG90eXBlcyh0aGlzLmZuLCB0aGlzLmZuTGlzdCk7XG4gICAgfVxuICAgIGlmICh3YXNOYXRpdmUgJiYgIWlzTmF0aXZlKSB7XG4gICAgICAgIHVuYXVnbWVudE5hdGl2ZVByb3RvdHlwZXModGhpcy5mbiwgdGhpcy5mbkxpc3QpO1xuICAgIH1cbiAgICByZXR1cm4gaXNOYXRpdmU7XG59XG5cbnZhciBOb2RlUHJvdG8gPSB0eXBlb2YgTm9kZSAhPT0gJ3VuZGVmaW5lZCcgJiYgTm9kZS5wcm90b3R5cGUsXG4gICAgTm9kZUxpc3RQcm90byA9IHR5cGVvZiBOb2RlTGlzdCAhPT0gJ3VuZGVmaW5lZCcgJiYgTm9kZUxpc3QucHJvdG90eXBlO1xuXG4vKlxuICogQWRkIGEgcHJvcGVydHkgKGkuZS4gbWV0aG9kKSB0byBhbiBvYmplY3QgaW4gYSBzYWZlIGFuZCByZXZlcnNpYmxlIG1hbm5lci5cbiAqIE9ubHkgYWRkIHRoZSBtZXRob2QgaWYgb2JqZWN0IG5vdCBhbHJlYWR5IGhhZCBpdCAobm9uLWluaGVyaXRlZCkuXG4gKlxuICogQHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBhdWdtZW50KG9iaiwga2V5LCB2YWx1ZSkge1xuICAgIGlmICghb2JqLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbi8qXG4gKiBSZW1vdmUgcHJvcGVydHkgZnJvbSBvYmplY3QgKG9ubHkgaW5oZXJpdGVkIHByb3BlcnRpZXMgd2lsbCBiZSByZW1vdmVkKS5cbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5cbnZhciB1bmF1Z21lbnQgPSAob2JqLCBrZXkpID0+IHsgZGVsZXRlIG9ialtrZXldIH07XG5cbi8qXG4gKiBBdWdtZW50IG5hdGl2ZSBgTm9kZWAgYW5kIGBOb2RlTGlzdGAgb2JqZWN0cyBpbiBuYXRpdmUgbW9kZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGF1Z21lbnROYXRpdmVQcm90b3R5cGVzKG1ldGhvZHNOb2RlLCBtZXRob2RzTm9kZUxpc3QpIHtcblxuICAgIHZhciBrZXk7XG5cbiAgICBmb3IgKGtleSBpbiBtZXRob2RzTm9kZSkge1xuICAgICAgICBhdWdtZW50KE5vZGVQcm90bywga2V5LCBtZXRob2RzTm9kZVtrZXldKTtcbiAgICAgICAgYXVnbWVudChOb2RlTGlzdFByb3RvLCBrZXksIG1ldGhvZHNOb2RlW2tleV0pO1xuICAgIH1cblxuICAgIGZvciAoa2V5IGluIG1ldGhvZHNOb2RlTGlzdCkge1xuICAgICAgICBhdWdtZW50KE5vZGVMaXN0UHJvdG8sIGtleSwgbWV0aG9kc05vZGVMaXN0W2tleV0pO1xuICAgIH1cbn1cblxuLypcbiAqIFVuYXVnbWVudCBuYXRpdmUgYE5vZGVgIGFuZCBgTm9kZUxpc3RgIG9iamVjdHMgdG8gc3dpdGNoIGJhY2sgdG8gZGVmYXVsdCBtb2RlLlxuICogTWFpbmx5IHVzZWQgZm9yIHRlc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gdW5hdWdtZW50TmF0aXZlUHJvdG90eXBlcyhtZXRob2RzTm9kZSwgbWV0aG9kc05vZGVMaXN0KSB7XG5cbiAgICB2YXIga2V5O1xuXG4gICAgZm9yIChrZXkgaW4gbWV0aG9kc05vZGUpIHtcbiAgICAgICAgdW5hdWdtZW50KE5vZGVQcm90bywga2V5KTtcbiAgICAgICAgdW5hdWdtZW50KE5vZGVMaXN0UHJvdG8sIGtleSk7XG4gICAgfVxuXG4gICAgZm9yIChrZXkgaW4gbWV0aG9kc05vZGVMaXN0KSB7XG4gICAgICAgIHVuYXVnbWVudChOb2RlTGlzdFByb3RvLCBrZXkpO1xuICAgIH1cbn1cblxuLy8gRXhwb3J0IGludGVyZmFjZVxuXG5leHBvcnQgeyBpc05hdGl2ZSwgbmF0aXZlIH07XG4iLCIvKipcbiAqIEBtb2R1bGUgbm9Db25mbGljdFxuICovXG5cbmltcG9ydCB7IGdsb2JhbCB9IGZyb20gJy4vdXRpbCc7XG5cbi8qXG4gKiBTYXZlIHRoZSBwcmV2aW91cyB2YWx1ZSBvZiB0aGUgZ2xvYmFsIGAkYCB2YXJpYWJsZSwgc28gdGhhdCBpdCBjYW4gYmUgcmVzdG9yZWQgbGF0ZXIgb24uXG4gKiBAcHJpdmF0ZVxuICovXG5cbnZhciBwcmV2aW91c0xpYiA9IGdsb2JhbC4kO1xuXG4vKipcbiAqIEluIGNhc2UgYW5vdGhlciBsaWJyYXJ5IHNldHMgdGhlIGdsb2JhbCBgJGAgdmFyaWFibGUgYmVmb3JlIERPTXRhc3RpYyBkb2VzLFxuICogdGhpcyBtZXRob2QgY2FuIGJlIHVzZWQgdG8gcmV0dXJuIHRoZSBnbG9iYWwgYCRgIHRvIHRoYXQgb3RoZXIgbGlicmFyeS5cbiAqXG4gKiBAcmV0dXJuIHtPYmplY3R9IFJlZmVyZW5jZSB0byBET010YXN0aWMuXG4gKiBAZXhhbXBsZVxuICogICAgIHZhciAkRSA9ICQubm9Db25mbGljdCgpO1xuICovXG5cbmZ1bmN0aW9uIG5vQ29uZmxpY3QoKSB7XG4gICAgZ2xvYmFsLiQgPSBwcmV2aW91c0xpYjtcbiAgICByZXR1cm4gdGhpcztcbn1cblxuLypcbiAqIEV4cG9ydCBpbnRlcmZhY2VcbiAqL1xuXG5leHBvcnQgeyBub0NvbmZsaWN0IH07XG4iLCIvKipcbiAqIEBtb2R1bGUgUmVhZHlcbiAqL1xuXG4vKipcbiAqIEV4ZWN1dGUgY2FsbGJhY2sgd2hlbiBgRE9NQ29udGVudExvYWRlZGAgZmlyZXMgZm9yIGBkb2N1bWVudGAsIG9yIGltbWVkaWF0ZWx5IGlmIGNhbGxlZCBhZnRlcndhcmRzLlxuICpcbiAqIEBwYXJhbSBoYW5kbGVyIENhbGxiYWNrIHRvIGV4ZWN1dGUgd2hlbiBpbml0aWFsIERPTSBjb250ZW50IGlzIGxvYWRlZC5cbiAqIEByZXR1cm4ge09iamVjdH0gVGhlIHdyYXBwZWQgY29sbGVjdGlvblxuICogQGNoYWluYWJsZVxuICogQGV4YW1wbGVcbiAqICAgICAkKGRvY3VtZW50KS5yZWFkeShjYWxsYmFjayk7XG4gKi9cblxuZnVuY3Rpb24gcmVhZHkoaGFuZGxlcikge1xuICAgIGlmICgvY29tcGxldGV8bG9hZGVkfGludGVyYWN0aXZlLy50ZXN0KGRvY3VtZW50LnJlYWR5U3RhdGUpICYmIGRvY3VtZW50LmJvZHkpIHtcbiAgICAgICAgaGFuZGxlcigpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBoYW5kbGVyLCBmYWxzZSlcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG59XG5cbi8qXG4gKiBFeHBvcnQgaW50ZXJmYWNlXG4gKi9cblxuZXhwb3J0IHsgcmVhZHkgfTtcbiIsIi8qKlxuICogQG1vZHVsZSBTZWxlY3RvclxuICovXG5cbmltcG9ydCB7IGdsb2JhbCwgbWFrZUl0ZXJhYmxlIH0gZnJvbSAnLi91dGlsJztcblxudmFyIGlzUHJvdG90eXBlU2V0ID0gZmFsc2UsXG4gICAgcmVGcmFnbWVudCA9IC9eXFxzKjwoXFx3K3whKVtePl0qPi8sXG4gICAgcmVTaW5nbGVUYWcgPSAvXjwoXFx3KylcXHMqXFwvPz4oPzo8XFwvXFwxPnwpJC8sXG4gICAgcmVTaW1wbGVTZWxlY3RvciA9IC9eW1xcLiNdP1tcXHctXSokLztcblxuLypcbiAqIFZlcnNhdGlsZSB3cmFwcGVyIGZvciBgcXVlcnlTZWxlY3RvckFsbGAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd8Tm9kZXxOb2RlTGlzdHxBcnJheX0gc2VsZWN0b3IgUXVlcnkgc2VsZWN0b3IsIGBOb2RlYCwgYE5vZGVMaXN0YCwgYXJyYXkgb2YgZWxlbWVudHMsIG9yIEhUTUwgZnJhZ21lbnQgc3RyaW5nLlxuICogQHBhcmFtIHtTdHJpbmd8Tm9kZXxOb2RlTGlzdH0gY29udGV4dD1kb2N1bWVudCBUaGUgY29udGV4dCBmb3IgdGhlIHNlbGVjdG9yIHRvIHF1ZXJ5IGVsZW1lbnRzLlxuICogQHJldHVybiB7T2JqZWN0fSBUaGUgd3JhcHBlZCBjb2xsZWN0aW9uXG4gKiBAY2hhaW5hYmxlXG4gKiBAZXhhbXBsZVxuICogICAgIHZhciAkaXRlbXMgPSAkKC5pdGVtcycpO1xuICogQGV4YW1wbGVcbiAqICAgICB2YXIgJGVsZW1lbnQgPSAkKGRvbUVsZW1lbnQpO1xuICogQGV4YW1wbGVcbiAqICAgICB2YXIgJGxpc3QgPSAkKG5vZGVMaXN0LCBkb2N1bWVudC5ib2R5KTtcbiAqIEBleGFtcGxlXG4gKiAgICAgdmFyICRlbGVtZW50ID0gJCgnPHA+ZXZlcmdyZWVuPC9wPicpO1xuICovXG5cbmZ1bmN0aW9uICQoc2VsZWN0b3IsIGNvbnRleHQgPSBkb2N1bWVudCkge1xuXG4gICAgdmFyIGNvbGxlY3Rpb247XG5cbiAgICBpZiAoIXNlbGVjdG9yKSB7XG5cbiAgICAgICAgY29sbGVjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwobnVsbCk7XG5cbiAgICB9IGVsc2UgaWYgKHNlbGVjdG9yIGluc3RhbmNlb2YgV3JhcHBlcikge1xuXG4gICAgICAgIHJldHVybiBzZWxlY3RvcjtcblxuICAgIH0gZWxzZSBpZiAodHlwZW9mIHNlbGVjdG9yICE9PSAnc3RyaW5nJykge1xuXG4gICAgICAgIGNvbGxlY3Rpb24gPSBtYWtlSXRlcmFibGUoc2VsZWN0b3IpO1xuXG4gICAgfSBlbHNlIGlmIChyZUZyYWdtZW50LnRlc3Qoc2VsZWN0b3IpKSB7XG5cbiAgICAgICAgY29sbGVjdGlvbiA9IGNyZWF0ZUZyYWdtZW50KHNlbGVjdG9yKTtcblxuICAgIH0gZWxzZSB7XG5cbiAgICAgICAgY29udGV4dCA9IHR5cGVvZiBjb250ZXh0ID09PSAnc3RyaW5nJyA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29udGV4dCkgOiBjb250ZXh0Lmxlbmd0aCA/IGNvbnRleHRbMF0gOiBjb250ZXh0O1xuXG4gICAgICAgIGNvbGxlY3Rpb24gPSBxdWVyeVNlbGVjdG9yKHNlbGVjdG9yLCBjb250ZXh0KTtcblxuICAgIH1cblxuICAgIHJldHVybiAkLmlzTmF0aXZlID8gY29sbGVjdGlvbiA6IHdyYXAoY29sbGVjdGlvbik7XG5cbn1cblxuLypcbiAqIENoYWluaW5nIGZvciB0aGUgYCRgIHdyYXBwZXIgKGFsaWFzaW5nIGBmaW5kYCBmb3IgYCRgKS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ3xOb2RlfE5vZGVMaXN0fEFycmF5fSBzZWxlY3RvciBRdWVyeSBzZWxlY3RvciwgYE5vZGVgLCBgTm9kZUxpc3RgLCBhcnJheSBvZiBlbGVtZW50cywgb3IgSFRNTCBmcmFnbWVudCBzdHJpbmcuXG4gKiBAcmV0dXJuIHtPYmplY3R9IFRoZSB3cmFwcGVkIGNvbGxlY3Rpb25cbiAqIEBleGFtcGxlXG4gKiAgICAgJCgnLnNlbGVjdG9yJykuZmluZCgnLmRlZXAnKS4kKCcuZGVlcGVzdCcpO1xuICovXG5cbmZ1bmN0aW9uIGZpbmQoc2VsZWN0b3IpIHtcbiAgICByZXR1cm4gJChzZWxlY3RvciwgdGhpcyk7XG59XG5cbi8qKlxuICogUmV0dXJuIHRoZSBjbG9zZXN0IGVsZW1lbnQgbWF0Y2hpbmcgdGhlIHNlbGVjdG9yIChzdGFydGluZyBieSBpdHNlbGYpLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzZWxlY3RvciBGaWx0ZXJcbiAqIEBwYXJhbSB7T2JqZWN0fSBbY29udGV4dF0gSWYgcHJvdmlkZWQsIG1hdGNoaW5nIGVsZW1lbnRzIG11c3QgYmUgYSBkZXNjZW5kYW50IG9mIHRoaXMgZWxlbWVudFxuICogQHJldHVybiB7T2JqZWN0fSBOZXcgd3JhcHBlZCBjb2xsZWN0aW9uIChjb250YWluaW5nIHplcm8gb3Igb25lIGVsZW1lbnQpXG4gKiBAY2hhaW5hYmxlXG4gKiBAZXhhbXBsZVxuICogICAgICQoJy5zZWxlY3RvcicpLmNsb3Nlc3QoJy5jb250YWluZXInKTtcbiAqL1xuXG5mdW5jdGlvbiBjbG9zZXN0KHNlbGVjdG9yLCBjb250ZXh0KSB7XG4gICAgdmFyIG5vZGUgPSB0aGlzWzBdO1xuICAgIGZvciAoOyBub2RlLm5vZGVUeXBlICE9PSBub2RlLkRPQ1VNRU5UX05PREUgJiYgbm9kZSAhPT0gY29udGV4dDsgbm9kZSA9IG5vZGUucGFyZW50Tm9kZSkge1xuICAgICAgICBpZiAobWF0Y2hlcyhub2RlLCBzZWxlY3RvcikpIHtcbiAgICAgICAgICAgIHJldHVybiAkKG5vZGUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiAkKCk7XG59XG5cbi8qXG4gKiBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZWxlbWVudCB3b3VsZCBiZSBzZWxlY3RlZCBieSB0aGUgc3BlY2lmaWVkIHNlbGVjdG9yIHN0cmluZzsgb3RoZXJ3aXNlLCByZXR1cm5zIGBmYWxzZWAuXG4gKlxuICogQHBhcmFtIHtOb2RlfSBlbGVtZW50IEVsZW1lbnQgdG8gdGVzdFxuICogQHBhcmFtIHtTdHJpbmd9IHNlbGVjdG9yIFNlbGVjdG9yIHRvIG1hdGNoIGFnYWluc3QgZWxlbWVudFxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqXG4gKiBAZXhhbXBsZVxuICogICAgICQubWF0Y2hlcyhlbGVtZW50LCAnLm1hdGNoJyk7XG4gKi9cblxudmFyIG1hdGNoZXMgPSAoZnVuY3Rpb24oKSB7XG4gICAgdmFyIGNvbnRleHQgPSB0eXBlb2YgRWxlbWVudCAhPT0gJ3VuZGVmaW5lZCcgPyBFbGVtZW50LnByb3RvdHlwZSA6IGdsb2JhbCxcbiAgICAgICAgX21hdGNoZXMgPSBjb250ZXh0Lm1hdGNoZXMgfHwgY29udGV4dC5tYXRjaGVzU2VsZWN0b3IgfHwgY29udGV4dC5tb3pNYXRjaGVzU2VsZWN0b3IgfHwgY29udGV4dC5tc01hdGNoZXNTZWxlY3RvciB8fCBjb250ZXh0Lm9NYXRjaGVzU2VsZWN0b3IgfHwgY29udGV4dC53ZWJraXRNYXRjaGVzU2VsZWN0b3I7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGVsZW1lbnQsIHNlbGVjdG9yKSB7XG4gICAgICAgIHJldHVybiBfbWF0Y2hlcy5jYWxsKGVsZW1lbnQsIHNlbGVjdG9yKTtcbiAgICB9O1xufSkoKTtcblxuLypcbiAqIFVzZSB0aGUgZmFzdGVyIGBnZXRFbGVtZW50QnlJZGAsIGBnZXRFbGVtZW50c0J5Q2xhc3NOYW1lYCBvciBgZ2V0RWxlbWVudHNCeVRhZ05hbWVgIG92ZXIgYHF1ZXJ5U2VsZWN0b3JBbGxgIGlmIHBvc3NpYmxlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge1N0cmluZ30gc2VsZWN0b3IgUXVlcnkgc2VsZWN0b3IuXG4gKiBAcGFyYW0ge05vZGV9IGNvbnRleHQgVGhlIGNvbnRleHQgZm9yIHRoZSBzZWxlY3RvciB0byBxdWVyeSBlbGVtZW50cy5cbiAqIEByZXR1cm4ge09iamVjdH0gTm9kZUxpc3QsIEhUTUxDb2xsZWN0aW9uLCBvciBBcnJheSBvZiBtYXRjaGluZyBlbGVtZW50cyAoZGVwZW5kaW5nIG9uIG1ldGhvZCB1c2VkKS5cbiAqL1xuXG5mdW5jdGlvbiBxdWVyeVNlbGVjdG9yKHNlbGVjdG9yLCBjb250ZXh0KSB7XG5cbiAgICB2YXIgaXNTaW1wbGVTZWxlY3RvciA9IHJlU2ltcGxlU2VsZWN0b3IudGVzdChzZWxlY3Rvcik7XG5cbiAgICBpZiAoaXNTaW1wbGVTZWxlY3RvciAmJiAhJC5pc05hdGl2ZSkge1xuICAgICAgICBpZiAoc2VsZWN0b3JbMF0gPT09ICcjJykge1xuICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSAoY29udGV4dC5nZXRFbGVtZW50QnlJZCA/IGNvbnRleHQgOiBkb2N1bWVudCkuZ2V0RWxlbWVudEJ5SWQoc2VsZWN0b3Iuc2xpY2UoMSkpO1xuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQgPyBbZWxlbWVudF0gOiBbXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2VsZWN0b3JbMF0gPT09ICcuJykge1xuICAgICAgICAgICAgcmV0dXJuIGNvbnRleHQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShzZWxlY3Rvci5zbGljZSgxKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbnRleHQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoc2VsZWN0b3IpO1xuICAgIH1cblxuICAgIHJldHVybiBjb250ZXh0LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuXG59XG5cbi8qXG4gKiBDcmVhdGUgRE9NIGZyYWdtZW50IGZyb20gYW4gSFRNTCBzdHJpbmdcbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtTdHJpbmd9IGh0bWwgU3RyaW5nIHJlcHJlc2VudGluZyBIVE1MLlxuICogQHJldHVybiB7Tm9kZUxpc3R9XG4gKi9cblxuZnVuY3Rpb24gY3JlYXRlRnJhZ21lbnQoaHRtbCkge1xuXG4gICAgaWYgKHJlU2luZ2xlVGFnLnRlc3QoaHRtbCkpIHtcbiAgICAgICAgcmV0dXJuIFtkb2N1bWVudC5jcmVhdGVFbGVtZW50KFJlZ0V4cC4kMSldO1xuICAgIH1cblxuICAgIHZhciBlbGVtZW50cyA9IFtdLFxuICAgICAgICBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcbiAgICAgICAgY2hpbGRyZW4gPSBjb250YWluZXIuY2hpbGROb2RlcztcblxuICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSBodG1sO1xuXG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgZWxlbWVudHMucHVzaChjaGlsZHJlbltpXSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZW1lbnRzO1xufVxuXG4vKlxuICogQ2FsbGluZyBgJChzZWxlY3RvcilgIHJldHVybnMgYSB3cmFwcGVkIGNvbGxlY3Rpb24gb2YgZWxlbWVudHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Tm9kZUxpc3R8QXJyYXl9IGNvbGxlY3Rpb24gRWxlbWVudChzKSB0byB3cmFwLlxuICogQHJldHVybiAoT2JqZWN0KSBUaGUgd3JhcHBlZCBjb2xsZWN0aW9uXG4gKi9cblxuZnVuY3Rpb24gd3JhcChjb2xsZWN0aW9uKSB7XG5cbiAgICBpZiAoIWlzUHJvdG90eXBlU2V0KSB7XG4gICAgICAgIFdyYXBwZXIucHJvdG90eXBlID0gJC5mbjtcbiAgICAgICAgV3JhcHBlci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBXcmFwcGVyO1xuICAgICAgICBpc1Byb3RvdHlwZVNldCA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBXcmFwcGVyKGNvbGxlY3Rpb24pO1xufVxuXG4vKlxuICogQ29uc3RydWN0b3IgZm9yIHRoZSBPYmplY3QucHJvdG90eXBlIHN0cmF0ZWd5XG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtOb2RlTGlzdHxBcnJheX0gY29sbGVjdGlvbiBFbGVtZW50KHMpIHRvIHdyYXAuXG4gKi9cblxuZnVuY3Rpb24gV3JhcHBlcihjb2xsZWN0aW9uKSB7XG4gICAgdmFyIGkgPSAwLCBsZW5ndGggPSBjb2xsZWN0aW9uLmxlbmd0aDtcbiAgICBmb3IgKDsgaSA8IGxlbmd0aDspIHtcbiAgICAgICAgdGhpc1tpXSA9IGNvbGxlY3Rpb25baSsrXTtcbiAgICB9XG4gICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XG59XG5cbi8qXG4gKiBFeHBvcnQgaW50ZXJmYWNlXG4gKi9cblxuZXhwb3J0IHsgJCwgZmluZCwgY2xvc2VzdCwgbWF0Y2hlcyB9O1xuIiwiLyoqXG4gKiBAbW9kdWxlIFNlbGVjdG9yIChleHRyYSlcbiAqL1xuXG5pbXBvcnQgeyBlYWNoLCB0b0FycmF5IH0gZnJvbSAnLi91dGlsJztcbmltcG9ydCB7ICQsIG1hdGNoZXMgfSBmcm9tICcuL3NlbGVjdG9yJztcblxuLyoqXG4gKiBSZXR1cm4gY2hpbGRyZW4gb2YgZWFjaCBlbGVtZW50IGluIHRoZSBjb2xsZWN0aW9uLCBvcHRpb25hbGx5IGZpbHRlcmVkIGJ5IGEgc2VsZWN0b3IuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IFtzZWxlY3Rvcl0gRmlsdGVyXG4gKiBAcmV0dXJuIHtPYmplY3R9IE5ldyB3cmFwcGVkIGNvbGxlY3Rpb25cbiAqIEBjaGFpbmFibGVcbiAqIEBleGFtcGxlXG4gKiAgICAgJCgnLnNlbGVjdG9yJykuY2hpbGRyZW4oKTtcbiAqICAgICAkKCcuc2VsZWN0b3InKS5jaGlsZHJlbignLmZpbHRlcicpO1xuICovXG5cbmZ1bmN0aW9uIGNoaWxkcmVuKHNlbGVjdG9yKSB7XG4gICAgdmFyIG5vZGVzID0gW107XG4gICAgZWFjaCh0aGlzLCBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgIGlmKGVsZW1lbnQuY2hpbGRyZW4pIHtcbiAgICAgICAgICAgIGVhY2goZWxlbWVudC5jaGlsZHJlbiwgZnVuY3Rpb24oY2hpbGQpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXNlbGVjdG9yIHx8IChzZWxlY3RvciAmJiBtYXRjaGVzKGNoaWxkLCBzZWxlY3RvcikpKSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGVzLnB1c2goY2hpbGQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuICQobm9kZXMpO1xufVxuXG4vKipcbiAqIFJldHVybiBjaGlsZCBub2RlcyBvZiBlYWNoIGVsZW1lbnQgaW4gdGhlIGNvbGxlY3Rpb24sIGluY2x1ZGluZyB0ZXh0IGFuZCBjb21tZW50IG5vZGVzLlxuICpcbiAqIEByZXR1cm4ge09iamVjdH0gTmV3IHdyYXBwZWQgY29sbGVjdGlvblxuICogQGV4YW1wbGVcbiAqICAgICAkKCcuc2VsZWN0b3InKS5jb250ZW50cygpO1xuICovXG5cbmZ1bmN0aW9uIGNvbnRlbnRzKCkge1xuICAgIHZhciBub2RlcyA9IFtdO1xuICAgIGVhY2godGhpcywgZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICBub2Rlcy5wdXNoLmFwcGx5KG5vZGVzLCB0b0FycmF5KGVsZW1lbnQuY2hpbGROb2RlcykpO1xuICAgIH0pO1xuICAgIHJldHVybiAkKG5vZGVzKTtcbn1cblxuLyoqXG4gKiBSZXR1cm4gYSBjb2xsZWN0aW9uIGNvbnRhaW5pbmcgb25seSB0aGUgb25lIGF0IHRoZSBzcGVjaWZpZWQgaW5kZXguXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IGluZGV4XG4gKiBAcmV0dXJuIHtPYmplY3R9IE5ldyB3cmFwcGVkIGNvbGxlY3Rpb25cbiAqIEBjaGFpbmFibGVcbiAqIEBleGFtcGxlXG4gKiAgICAgJCgnLml0ZW1zJykuZXEoMSlcbiAqICAgICDinqQgVGhlIHNlY29uZCBpdGVtOyByZXN1bHQgaXMgdGhlIHNhbWUgYXMgZG9pbmcgJCgkKCcuaXRlbXMnKVsxXSk7XG4gKi9cblxuZnVuY3Rpb24gZXEoaW5kZXgpIHtcbiAgICByZXR1cm4gc2xpY2UuY2FsbCh0aGlzLCBpbmRleCwgaW5kZXggKyAxKTtcbn1cblxuLyoqXG4gKiBSZXR1cm4gdGhlIERPTSBlbGVtZW50IGF0IHRoZSBzcGVjaWZpZWQgaW5kZXguXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IGluZGV4XG4gKiBAcmV0dXJuIHtOb2RlfSBFbGVtZW50IGF0IHRoZSBzcGVjaWZpZWQgaW5kZXhcbiAqIEBleGFtcGxlXG4gKiAgICAgJCgnLml0ZW1zJykuZ2V0KDEpXG4gKiAgICAg4p6kIFRoZSBzZWNvbmQgZWxlbWVudDsgcmVzdWx0IGlzIHRoZSBzYW1lIGFzIGRvaW5nICQoJy5pdGVtcycpWzFdO1xuICovXG5cbmZ1bmN0aW9uIGdldChpbmRleCkge1xuICAgIHJldHVybiB0aGlzW2luZGV4XTtcbn1cblxuLyoqXG4gKiBSZXR1cm4gdGhlIHBhcmVudCBlbGVtZW50cyBvZiBlYWNoIGVsZW1lbnQgaW4gdGhlIGNvbGxlY3Rpb24sIG9wdGlvbmFsbHkgZmlsdGVyZWQgYnkgYSBzZWxlY3Rvci5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gW3NlbGVjdG9yXSBGaWx0ZXJcbiAqIEByZXR1cm4ge09iamVjdH0gTmV3IHdyYXBwZWQgY29sbGVjdGlvblxuICogQGNoYWluYWJsZVxuICogQGV4YW1wbGVcbiAqICAgICAkKCcuc2VsZWN0b3InKS5wYXJlbnQoKTtcbiAqICAgICAkKCcuc2VsZWN0b3InKS5wYXJlbnQoJy5maWx0ZXInKTtcbiAqL1xuXG5mdW5jdGlvbiBwYXJlbnQoc2VsZWN0b3IpIHtcbiAgICB2YXIgbm9kZXMgPSBbXTtcbiAgICBlYWNoKHRoaXMsIGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgaWYgKCFzZWxlY3RvciB8fCAoc2VsZWN0b3IgJiYgbWF0Y2hlcyhlbGVtZW50LnBhcmVudE5vZGUsIHNlbGVjdG9yKSkpIHtcbiAgICAgICAgICAgIG5vZGVzLnB1c2goZWxlbWVudC5wYXJlbnROb2RlKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiAkKG5vZGVzKTtcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBuZXcsIHNsaWNlZCBjb2xsZWN0aW9uLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBzdGFydFxuICogQHBhcmFtIHtOdW1iZXJ9IGVuZFxuICogQHJldHVybiB7T2JqZWN0fSBOZXcgd3JhcHBlZCBjb2xsZWN0aW9uXG4gKiBAZXhhbXBsZVxuICogICAgICQoJy5pdGVtcycpLnNsaWNlKDEsIDMpXG4gKiAgICAg4p6kIE5ldyB3cmFwcGVkIGNvbGxlY3Rpb24gY29udGFpbmluZyB0aGUgc2Vjb25kLCB0aGlyZCwgYW5kIGZvdXJ0aCBlbGVtZW50LlxuICovXG5cbmZ1bmN0aW9uIHNsaWNlKHN0YXJ0LCBlbmQpIHtcbiAgICByZXR1cm4gJChbXS5zbGljZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbn1cblxuLypcbiAqIEV4cG9ydCBpbnRlcmZhY2VcbiAqL1xuXG5leHBvcnQgeyBjaGlsZHJlbiwgY29udGVudHMsIGVxLCBnZXQsIHBhcmVudCwgc2xpY2UgfTtcbiIsIi8qKlxuICogQG1vZHVsZSB0cmlnZ2VyXG4gKi9cblxuaW1wb3J0IHsgZ2xvYmFsLCBlYWNoIH0gZnJvbSAnLi91dGlsJztcbmltcG9ydCB7IGNsb3Nlc3QgfSBmcm9tICcuL3NlbGVjdG9yJztcblxudmFyIHJlTW91c2VFdmVudCA9IC9eKD86bW91c2V8cG9pbnRlcnxjb250ZXh0bWVudSl8Y2xpY2svLFxuICAgIHJlS2V5RXZlbnQgPSAvXmtleS87XG5cbi8qKlxuICogVHJpZ2dlciBldmVudCBhdCBlbGVtZW50KHMpXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgVHlwZSBvZiB0aGUgZXZlbnRcbiAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhIERhdGEgdG8gYmUgc2VudCB3aXRoIHRoZSBldmVudCAoYHBhcmFtcy5kZXRhaWxgIHdpbGwgYmUgc2V0IHRvIHRoaXMpLlxuICogQHBhcmFtIHtPYmplY3R9IFtwYXJhbXNdIEV2ZW50IHBhcmFtZXRlcnMgKG9wdGlvbmFsKVxuICogQHBhcmFtIHtCb29sZWFufSBwYXJhbXMuYnViYmxlcz10cnVlIERvZXMgdGhlIGV2ZW50IGJ1YmJsZSB1cCB0aHJvdWdoIHRoZSBET00gb3Igbm90LlxuICogQHBhcmFtIHtCb29sZWFufSBwYXJhbXMuY2FuY2VsYWJsZT10cnVlIElzIHRoZSBldmVudCBjYW5jZWxhYmxlIG9yIG5vdC5cbiAqIEBwYXJhbSB7TWl4ZWR9IHBhcmFtcy5kZXRhaWw9dW5kZWZpbmVkIEFkZGl0aW9uYWwgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGV2ZW50LlxuICogQHJldHVybiB7T2JqZWN0fSBUaGUgd3JhcHBlZCBjb2xsZWN0aW9uXG4gKiBAY2hhaW5hYmxlXG4gKiBAZXhhbXBsZVxuICogICAgICQoJy5pdGVtJykudHJpZ2dlcignYW55RXZlbnRUeXBlJyk7XG4gKi9cblxuZnVuY3Rpb24gdHJpZ2dlcih0eXBlLCBkYXRhLCBwYXJhbXMgPSB7fSkge1xuXG4gICAgcGFyYW1zLmJ1YmJsZXMgPSB0eXBlb2YgcGFyYW1zLmJ1YmJsZXMgPT09ICdib29sZWFuJyA/IHBhcmFtcy5idWJibGVzIDogdHJ1ZTtcbiAgICBwYXJhbXMuY2FuY2VsYWJsZSA9IHR5cGVvZiBwYXJhbXMuY2FuY2VsYWJsZSA9PT0gJ2Jvb2xlYW4nID8gcGFyYW1zLmNhbmNlbGFibGUgOiB0cnVlO1xuICAgIHBhcmFtcy5wcmV2ZW50RGVmYXVsdCA9IHR5cGVvZiBwYXJhbXMucHJldmVudERlZmF1bHQgPT09ICdib29sZWFuJyA/IHBhcmFtcy5wcmV2ZW50RGVmYXVsdCA6IGZhbHNlO1xuICAgIHBhcmFtcy5kZXRhaWwgPSBkYXRhO1xuXG4gICAgdmFyIEV2ZW50Q29uc3RydWN0b3IgPSBnZXRFdmVudENvbnN0cnVjdG9yKHR5cGUpLFxuICAgICAgICBldmVudCA9IG5ldyBFdmVudENvbnN0cnVjdG9yKHR5cGUsIHBhcmFtcyk7XG5cbiAgICBldmVudC5fcHJldmVudERlZmF1bHQgPSBwYXJhbXMucHJldmVudERlZmF1bHQ7XG5cbiAgICBlYWNoKHRoaXMsIGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgaWYgKCFwYXJhbXMuYnViYmxlcyB8fCBpc0V2ZW50QnViYmxpbmdJbkRldGFjaGVkVHJlZSB8fCBpc0F0dGFjaGVkVG9Eb2N1bWVudChlbGVtZW50KSkge1xuICAgICAgICAgICAgZGlzcGF0Y2hFdmVudChlbGVtZW50LCBldmVudCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0cmlnZ2VyRm9yUGF0aChlbGVtZW50LCB0eXBlLCBwYXJhbXMpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXM7XG59XG5cbmZ1bmN0aW9uIGdldEV2ZW50Q29uc3RydWN0b3IodHlwZSkge1xuICAgIHJldHVybiBzdXBwb3J0c090aGVyRXZlbnRDb25zdHJ1Y3RvcnMgPyAocmVNb3VzZUV2ZW50LnRlc3QodHlwZSkgPyBNb3VzZUV2ZW50IDogKHJlS2V5RXZlbnQudGVzdCh0eXBlKSA/IEtleWJvYXJkRXZlbnQgOiBDdXN0b21FdmVudCkpIDogQ3VzdG9tRXZlbnQ7XG59XG5cbi8qKlxuICogVHJpZ2dlciBldmVudCBhdCBmaXJzdCBlbGVtZW50IGluIHRoZSBjb2xsZWN0aW9uLiBTaW1pbGFyIHRvIGB0cmlnZ2VyKClgLCBleGNlcHQ6XG4gKlxuICogLSBFdmVudCBkb2VzIG5vdCBidWJibGVcbiAqIC0gRGVmYXVsdCBldmVudCBiZWhhdmlvciBpcyBwcmV2ZW50ZWRcbiAqIC0gT25seSB0cmlnZ2VycyBoYW5kbGVyIGZvciBmaXJzdCBtYXRjaGluZyBlbGVtZW50XG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgVHlwZSBvZiB0aGUgZXZlbnRcbiAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhIERhdGEgdG8gYmUgc2VudCB3aXRoIHRoZSBldmVudFxuICogQGV4YW1wbGVcbiAqICAgICAkKCdmb3JtJykudHJpZ2dlckhhbmRsZXIoJ3N1Ym1pdCcpO1xuICovXG5cbmZ1bmN0aW9uIHRyaWdnZXJIYW5kbGVyKHR5cGUsIGRhdGEpIHtcbiAgICBpZiAodGhpc1swXSkge1xuICAgICAgICB0cmlnZ2VyLmNhbGwodGhpc1swXSwgdHlwZSwgZGF0YSwge2J1YmJsZXM6IGZhbHNlLCBwcmV2ZW50RGVmYXVsdDogdHJ1ZX0pO1xuICAgIH1cbn1cblxuLyoqXG4gKiBDaGVjayB3aGV0aGVyIHRoZSBlbGVtZW50IGlzIGF0dGFjaGVkIHRvIChvciBkZXRhY2hlZCBmcm9tKSB0aGUgZG9jdW1lbnRcbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtOb2RlfSBlbGVtZW50IEVsZW1lbnQgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuXG5mdW5jdGlvbiBpc0F0dGFjaGVkVG9Eb2N1bWVudChlbGVtZW50KSB7XG4gICAgaWYgKGVsZW1lbnQgPT09IHdpbmRvdyB8fCBlbGVtZW50ID09PSBkb2N1bWVudCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuICQuY29udGFpbnMoZWxlbWVudC5vd25lckRvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgZWxlbWVudCk7XG59XG5cbi8qKlxuICogRGlzcGF0Y2ggdGhlIGV2ZW50IGF0IHRoZSBlbGVtZW50IGFuZCBpdHMgYW5jZXN0b3JzLlxuICogUmVxdWlyZWQgdG8gc3VwcG9ydCBkZWxlZ2F0ZWQgZXZlbnRzIGluIGJyb3dzZXJzIHRoYXQgZG9uJ3QgYnViYmxlIGV2ZW50cyBpbiBkZXRhY2hlZCBET00gdHJlZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Tm9kZX0gZWxlbWVudCBGaXJzdCBlbGVtZW50IHRvIGRpc3BhdGNoIHRoZSBldmVudCBhdFxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgVHlwZSBvZiB0aGUgZXZlbnRcbiAqIEBwYXJhbSB7T2JqZWN0fSBbcGFyYW1zXSBFdmVudCBwYXJhbWV0ZXJzIChvcHRpb25hbClcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gcGFyYW1zLmJ1YmJsZXM9dHJ1ZSBEb2VzIHRoZSBldmVudCBidWJibGUgdXAgdGhyb3VnaCB0aGUgRE9NIG9yIG5vdC5cbiAqIFdpbGwgYmUgc2V0IHRvIGZhbHNlIChidXQgc2hvdWxkbid0IG1hdHRlciBzaW5jZSBldmVudHMgZG9uJ3QgYnViYmxlIGFueXdheSkuXG4gKiBAcGFyYW0ge0Jvb2xlYW59IHBhcmFtcy5jYW5jZWxhYmxlPXRydWUgSXMgdGhlIGV2ZW50IGNhbmNlbGFibGUgb3Igbm90LlxuICogQHBhcmFtIHtNaXhlZH0gcGFyYW1zLmRldGFpbD11bmRlZmluZWQgQWRkaXRpb25hbCBpbmZvcm1hdGlvbiBhYm91dCB0aGUgZXZlbnQuXG4gKi9cblxuZnVuY3Rpb24gdHJpZ2dlckZvclBhdGgoZWxlbWVudCwgdHlwZSwgcGFyYW1zID0ge30pIHtcbiAgICBwYXJhbXMuYnViYmxlcyA9IGZhbHNlO1xuICAgIHZhciBldmVudCA9IG5ldyBDdXN0b21FdmVudCh0eXBlLCBwYXJhbXMpO1xuICAgIGV2ZW50Ll90YXJnZXQgPSBlbGVtZW50O1xuICAgIGRvIHtcbiAgICAgICAgZGlzcGF0Y2hFdmVudChlbGVtZW50LCBldmVudCk7XG4gICAgfSB3aGlsZSAoZWxlbWVudCA9IGVsZW1lbnQucGFyZW50Tm9kZSk7XG59XG5cbi8qKlxuICogRGlzcGF0Y2ggZXZlbnQgdG8gZWxlbWVudCwgYnV0IGNhbGwgZGlyZWN0IGV2ZW50IG1ldGhvZHMgaW5zdGVhZCBpZiBhdmFpbGFibGVcbiAqIChlLmcuIFwiYmx1cigpXCIsIFwic3VibWl0KClcIikgYW5kIGlmIHRoZSBldmVudCBpcyBub24tY2FuY2VsYWJsZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtOb2RlfSBlbGVtZW50IEVsZW1lbnQgdG8gZGlzcGF0Y2ggdGhlIGV2ZW50IGF0XG4gKiBAcGFyYW0ge09iamVjdH0gZXZlbnQgRXZlbnQgdG8gZGlzcGF0Y2hcbiAqL1xuXG52YXIgZGlyZWN0RXZlbnRNZXRob2RzID0gWydibHVyJywgJ2ZvY3VzJywgJ3NlbGVjdCcsICdzdWJtaXQnXTtcblxuZnVuY3Rpb24gZGlzcGF0Y2hFdmVudChlbGVtZW50LCBldmVudCkge1xuICAgIGlmKGRpcmVjdEV2ZW50TWV0aG9kcy5pbmRleE9mKGV2ZW50LnR5cGUpICE9PSAtMSAmJiB0eXBlb2YgZWxlbWVudFtldmVudC50eXBlXSA9PT0gJ2Z1bmN0aW9uJyAmJiAhZXZlbnQuX3ByZXZlbnREZWZhdWx0ICYmICFldmVudC5jYW5jZWxhYmxlKSB7XG4gICAgICAgIGVsZW1lbnRbZXZlbnQudHlwZV0oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBlbGVtZW50LmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBQb2x5ZmlsbCBmb3IgQ3VzdG9tRXZlbnQsIGJvcnJvd2VkIGZyb20gW01ETl0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0N1c3RvbUV2ZW50I1BvbHlmaWxsKS5cbiAqIE5lZWRlZCB0byBzdXBwb3J0IElFICg5LCAxMCwgMTEpICYgUGhhbnRvbUpTXG4gKi9cblxuKGZ1bmN0aW9uKCkge1xuICAgIGZ1bmN0aW9uIEN1c3RvbUV2ZW50KGV2ZW50LCBwYXJhbXMgPSB7IGJ1YmJsZXM6IGZhbHNlLCBjYW5jZWxhYmxlOiBmYWxzZSwgZGV0YWlsOiB1bmRlZmluZWQgfSkge1xuICAgICAgICB2YXIgY3VzdG9tRXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnQ3VzdG9tRXZlbnQnKTtcbiAgICAgICAgY3VzdG9tRXZlbnQuaW5pdEN1c3RvbUV2ZW50KGV2ZW50LCBwYXJhbXMuYnViYmxlcywgcGFyYW1zLmNhbmNlbGFibGUsIHBhcmFtcy5kZXRhaWwpO1xuICAgICAgICByZXR1cm4gY3VzdG9tRXZlbnQ7XG4gICAgfVxuXG4gICAgQ3VzdG9tRXZlbnQucHJvdG90eXBlID0gZ2xvYmFsLkN1c3RvbUV2ZW50ICYmIGdsb2JhbC5DdXN0b21FdmVudC5wcm90b3R5cGU7XG4gICAgZ2xvYmFsLkN1c3RvbUV2ZW50ID0gQ3VzdG9tRXZlbnQ7XG5cbn0pKCk7XG5cbi8qXG4gKiBBcmUgZXZlbnRzIGJ1YmJsaW5nIGluIGRldGFjaGVkIERPTSB0cmVlcz9cbiAqIEBwcml2YXRlXG4gKi9cblxudmFyIGlzRXZlbnRCdWJibGluZ0luRGV0YWNoZWRUcmVlID0gKGZ1bmN0aW9uKCkge1xuICAgIHZhciBpc0J1YmJsaW5nID0gZmFsc2UsXG4gICAgICAgIGRvYyA9IGdsb2JhbC5kb2N1bWVudDtcbiAgICBpZiAoZG9jKSB7XG4gICAgICAgIHZhciBwYXJlbnQgPSBkb2MuY3JlYXRlRWxlbWVudCgnZGl2JyksXG4gICAgICAgICAgICBjaGlsZCA9IHBhcmVudC5jbG9uZU5vZGUoKTtcbiAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGNoaWxkKTtcbiAgICAgICAgcGFyZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2UnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlzQnViYmxpbmcgPSB0cnVlO1xuICAgICAgICB9KTtcbiAgICAgICAgY2hpbGQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2UnLCB7IGJ1YmJsZXM6IHRydWUgfSkpO1xuICAgIH1cbiAgICByZXR1cm4gaXNCdWJibGluZztcbn0pKCk7XG5cbnZhciBzdXBwb3J0c090aGVyRXZlbnRDb25zdHJ1Y3RvcnMgPSAoZnVuY3Rpb24oKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgbmV3IHdpbmRvdy5Nb3VzZUV2ZW50KCdjbGljaycpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn0pKCk7XG5cbi8qXG4gKiBFeHBvcnQgaW50ZXJmYWNlXG4gKi9cblxuZXhwb3J0IHsgdHJpZ2dlciwgdHJpZ2dlckhhbmRsZXIgfTtcbiIsIi8qKlxuICogQG1vZHVsZSBUeXBlXG4gKi9cblxuLypcbiAqIERldGVybWluZSBpZiB0aGUgYXJndW1lbnQgcGFzc2VkIGlzIGEgSmF2YXNjcmlwdCBmdW5jdGlvbiBvYmplY3QuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IFtvYmpdIE9iamVjdCB0byB0ZXN0IHdoZXRoZXIgb3Igbm90IGl0IGlzIGEgZnVuY3Rpb24uXG4gKiBAcmV0dXJuIHtib29sZWFufSBcbiAqIEBleGFtcGxlXG4gKiAgICAgJC5pc0Z1bmN0aW9uKGZ1bmN0aW9uKCl7fSk7XG4gKiAgICAg4p6kIHRydWVcbiAqIEBleGFtcGxlXG4gKiAgICAgJC5pc0Z1bmN0aW9uKHt9KTtcbiAqICAgICDinqQgZmFsc2VcbiAqL1xuXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKG9iaikge1xuICAgIHJldHVybiAodHlwZW9mIG9iaiA9PT0gJ2Z1bmN0aW9uJyk7XG59XG5cbi8qXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgYXJndW1lbnQgaXMgYW4gYXJyYXkuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IFtvYmpdIE9iamVjdCB0byB0ZXN0IHdoZXRoZXIgb3Igbm90IGl0IGlzIGFuIGFycmF5LlxuICogQHJldHVybiB7Ym9vbGVhbn0gXG4gKiBAZXhhbXBsZVxuICogICAgICQuaXNBcnJheShbXSk7XG4gKiAgICAg4p6kIHRydWVcbiAqIEBleGFtcGxlXG4gKiAgICAgJC5pc0FycmF5KHt9KTtcbiAqICAgICDinqQgZmFsc2VcbiAqL1xuXG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG5cbi8qXG4gKiBFeHBvcnQgaW50ZXJmYWNlXG4gKi9cblxuZXhwb3J0IHsgaXNGdW5jdGlvbiwgaXNBcnJheSB9O1xuIiwiLypcbiAqIEBtb2R1bGUgVXRpbFxuICovXG5cbi8qXG4gKiBSZWZlcmVuY2UgdG8gdGhlIGdsb2JhbCBzY29wZVxuICogQHByaXZhdGVcbiAqL1xuXG52YXIgZ2xvYmFsID0gbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcblxuLyoqXG4gKiBDb252ZXJ0IGBOb2RlTGlzdGAgdG8gYEFycmF5YC5cbiAqXG4gKiBAcGFyYW0ge05vZGVMaXN0fEFycmF5fSBjb2xsZWN0aW9uXG4gKiBAcmV0dXJuIHtBcnJheX1cbiAqIEBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gdG9BcnJheShjb2xsZWN0aW9uKSB7XG4gICAgdmFyIGxlbmd0aCA9IGNvbGxlY3Rpb24ubGVuZ3RoLFxuICAgICAgICByZXN1bHQgPSBBcnJheShsZW5ndGgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcmVzdWx0W2ldID0gY29sbGVjdGlvbltpXTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBSZXR1cm4gc29tZXRoaW5nIHRoYXQgY2FuIGJlIGl0ZXJhdGVkIG92ZXIgKGUuZy4gdXNpbmcgYGZvckVhY2hgKS5cbiAqIEFycmF5cyBhbmQgTm9kZUxpc3RzIGFyZSByZXR1cm5lZCBhcy1pcywgYnV0IGEgTm9kZSB3aWxsIGJlIHdyYXBwZWQgaW4gYSBgW11gLlxuICpcbiAqIEBwYXJhbSB7Tm9kZXxOb2RlTGlzdHxBcnJheX0gZWxlbWVudFxuICogQHJldHVybiB7QXJyYXl8Tm9kZUxpc3R9XG4gKiBAcHJpdmF0ZVxuICovXG5cbnZhciBtYWtlSXRlcmFibGUgPSAoZWxlbWVudCkgPT4gZWxlbWVudC5ub2RlVHlwZSB8fCBlbGVtZW50ID09PSB3aW5kb3cgPyBbZWxlbWVudF0gOiBlbGVtZW50O1xuXG4vKipcbiAqIEZhc3RlciBhbHRlcm5hdGl2ZSB0byBbXS5mb3JFYWNoIG1ldGhvZFxuICpcbiAqIEBwYXJhbSB7Tm9kZXxOb2RlTGlzdHxBcnJheX0gY29sbGVjdGlvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEByZXR1cm4ge05vZGV8Tm9kZUxpc3R8QXJyYXl9XG4gKiBAcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGVhY2goY29sbGVjdGlvbiwgY2FsbGJhY2ssIHRoaXNBcmcpIHtcbiAgICB2YXIgbGVuZ3RoID0gY29sbGVjdGlvbi5sZW5ndGg7XG4gICAgaWYgKGxlbmd0aCAhPT0gdW5kZWZpbmVkICYmIGNvbGxlY3Rpb24ubm9kZVR5cGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwodGhpc0FyZywgY29sbGVjdGlvbltpXSwgaSwgY29sbGVjdGlvbik7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBjYWxsYmFjay5jYWxsKHRoaXNBcmcsIGNvbGxlY3Rpb24sIDAsIGNvbGxlY3Rpb24pO1xuICAgIH1cbiAgICByZXR1cm4gY29sbGVjdGlvbjtcbn1cblxuLyoqXG4gKiBBc3NpZ24gZW51bWVyYWJsZSBwcm9wZXJ0aWVzIGZyb20gc291cmNlIG9iamVjdChzKSB0byB0YXJnZXQgb2JqZWN0XG4gKlxuICogQG1ldGhvZCBleHRlbmRcbiAqIEBwYXJhbSB7T2JqZWN0fSB0YXJnZXQgT2JqZWN0IHRvIGV4dGVuZFxuICogQHBhcmFtIHtPYmplY3R9IFtzb3VyY2VdIE9iamVjdCB0byBleHRlbmQgZnJvbVxuICogQHJldHVybiB7T2JqZWN0fSBFeHRlbmRlZCBvYmplY3RcbiAqIEBleGFtcGxlXG4gKiAgICAgJC5leHRlbmQoe2E6IDF9LCB7YjogMn0pO1xuICogICAgIOKepCB7YTogMSwgYjogMn1cbiAqIEBleGFtcGxlXG4gKiAgICAgJC5leHRlbmQoe2E6IDF9LCB7YjogMn0sIHthOiAzfSk7XG4gKiAgICAg4p6kIHthOiAzLCBiOiAyfVxuICovXG5cbmZ1bmN0aW9uIGV4dGVuZCh0YXJnZXQsIC4uLnNvdXJjZXMpIHtcbiAgICBzb3VyY2VzLmZvckVhY2goZnVuY3Rpb24oc3JjKSB7XG4gICAgICAgIGlmIChzcmMpIHtcbiAgICAgICAgICAgIGZvciAodmFyIHByb3AgaW4gc3JjKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0W3Byb3BdID0gc3JjW3Byb3BdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHRhcmdldDtcbn1cblxuLyoqXG4gKiBBc3NpZ24gYWxsIHByb3BlcnRpZXMgKGluY2x1ZGluZyBub24tZW51bWVyYWJsZSkgZnJvbSBzb3VyY2Ugb2JqZWN0KHMpIHRvIHRhcmdldCBvYmplY3RcbiAqXG4gKiBAbWV0aG9kIGV4dGVuZE1vcmVcbiAqIEBwYXJhbSB7T2JqZWN0fSB0YXJnZXQgT2JqZWN0IHRvIGV4dGVuZFxuICogQHBhcmFtIHtPYmplY3R9IFtzb3VyY2VdIE9iamVjdCB0byBleHRlbmQgZnJvbVxuICogQHJldHVybiB7T2JqZWN0fSBFeHRlbmRlZCBvYmplY3RcbiAqL1xuXG5mdW5jdGlvbiBleHRlbmRBbGwodGFyZ2V0LCAuLi5zb3VyY2VzKSB7XG4gICAgc291cmNlcy5mb3JFYWNoKGZ1bmN0aW9uKHNyYykge1xuICAgICAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhzcmMpLmZvckVhY2goZnVuY3Rpb24ocHJvcCkge1xuICAgICAgICAgICAgdGFyZ2V0W3Byb3BdID0gc3JjW3Byb3BdO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gdGFyZ2V0O1xufVxuXG4vKlxuICogRXhwb3J0IGludGVyZmFjZVxuICovXG5cbmV4cG9ydCB7IGdsb2JhbCwgdG9BcnJheSwgbWFrZUl0ZXJhYmxlLCBlYWNoLCBleHRlbmQsIGV4dGVuZEFsbCB9O1xuIl19
