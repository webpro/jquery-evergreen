(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.$ = factory());
}(this, function () { 'use strict';

  /*
   * @module Util
   */

  /*
   * Reference to the window object
   * @private
   */
  var win = typeof window !== 'undefined' ? window : {};
  /**
   * Convert `NodeList` to `Array`.
   *
   * @param {NodeList|Array} collection
   * @return {Array}
   * @private
   */

  var toArray = function toArray(collection) {
    var length = collection.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++) {
      result[i] = collection[i];
    }

    return result;
  };
  /**
   * Faster alternative to [].forEach method
   *
   * @param {Node|NodeList|Array} collection
   * @param {Function} callback
   * @return {Node|NodeList|Array}
   * @private
   */

  var each = function each(collection, callback, thisArg) {
    var length = collection.length;

    if (length !== undefined && collection.nodeType === undefined) {
      for (var i = 0; i < length; i++) {
        callback.call(thisArg, collection[i], i, collection);
      }
    } else {
      callback.call(thisArg, collection, 0, collection);
    }

    return collection;
  };
  /**
   * Assign enumerable properties from source object(s) to target object
   *
   * @method extend
   * @param {Object} target Object to extend
   * @param {Object} [source] Object to extend from
   * @return {Object} Extended object
   * @example
   *     $.extend({a: 1}, {b: 2}); // {a: 1, b: 2}
   * @example
   *     $.extend({a: 1}, {b: 2}, {a: 3}); // {a: 3, b: 2}
   */

  var extend = function extend(target) {
    for (var _len = arguments.length, sources = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      sources[_key - 1] = arguments[_key];
    }

    sources.forEach(function (src) {
      for (var prop in src) {
        target[prop] = src[prop];
      }
    });
    return target;
  };
  /**
   * Return the collection without duplicates
   *
   * @param collection Collection to remove duplicates from
   * @return {Node|NodeList|Array}
   * @private
   */

  var uniq = function uniq(collection) {
    return collection.filter(function (item, index) {
      return collection.indexOf(item) === index;
    });
  };

  /**
   * @module Selector
   */
  var isPrototypeSet = false;
  var reFragment = /^\s*<(\w+|!)[^>]*>/;
  var reSingleTag = /^<(\w+)\s*\/?>(?:<\/\1>|)$/;
  var reSimpleSelector = /^[.#]?[\w-]*$/;
  /*
   * Versatile wrapper for `querySelectorAll`.
   *
   * @param {String|Node|NodeList|Array} selector Query selector, `Node`, `NodeList`, array of elements, or HTML fragment string.
   * @param {String|Node|NodeList} context=document The context for the selector to query elements.
   * @return {Object} The wrapped collection
   * @chainable
   * @example
   *     var $items = $(.items');
   * @example
   *     var $element = $(domElement);
   * @example
   *     var $list = $(nodeList, document.body);
   * @example
   *     var $element = $('<p>evergreen</p>');
   */

  var domtastic = function domtastic(selector, context) {
    if (context === void 0) {
      context = document;
    }

    var collection;

    if (!selector) {
      collection = document.querySelectorAll(null);
    } else if (selector instanceof DOMtastic) {
      return selector;
    } else if (typeof selector !== 'string') {
      collection = selector.nodeType || selector === window ? [selector] : selector;
    } else if (reFragment.test(selector)) {
      collection = createFragment(selector);
    } else {
      context = typeof context === 'string' ? document.querySelector(context) : context.length ? context[0] : context;
      collection = querySelector(selector, context);
    }

    return wrap(collection);
  };

  var $ = domtastic;
  /*
   * Find descendants matching the provided `selector` for each element in the collection.
   *
   * @param {String|Node|NodeList|Array} selector Query selector, `Node`, `NodeList`, array of elements, or HTML fragment string.
   * @return {Object} The wrapped collection
   * @example
   *     $('.selector').find('.deep').$('.deepest');
   */

  var find = function find(selector) {
    var nodes = [];
    each(this, function (node) {
      return each(querySelector(selector, node), function (child) {
        if (nodes.indexOf(child) === -1) {
          nodes.push(child);
        }
      });
    });
    return $(nodes);
  };
  /*
   * Returns `true` if the element would be selected by the specified selector string; otherwise, returns `false`.
   *
   * @param {Node} element Element to test
   * @param {String} selector Selector to match against element
   * @return {Boolean}
   *
   * @example
   *     $.matches(element, '.match');
   */

  var matches = function () {
    var context = typeof Element !== 'undefined' ? Element.prototype : win;

    var _matches = context.matches || context.matchesSelector || context.mozMatchesSelector || context.msMatchesSelector || context.oMatchesSelector || context.webkitMatchesSelector;

    return function (element, selector) {
      return _matches.call(element, selector);
    };
  }();
  /*
   * Use the faster `getElementById`, `getElementsByClassName` or `getElementsByTagName` over `querySelectorAll` if possible.
   *
   * @private
   * @param {String} selector Query selector.
   * @param {Node} context The context for the selector to query elements.
   * @return {Object} NodeList, HTMLCollection, or Array of matching elements (depending on method used).
   */

  var querySelector = function querySelector(selector, context) {
    var isSimpleSelector = reSimpleSelector.test(selector);

    if (isSimpleSelector) {
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
  };
  /*
   * Create DOM fragment from an HTML string
   *
   * @private
   * @param {String} html String representing HTML.
   * @return {NodeList}
   */


  var createFragment = function createFragment(html) {
    if (reSingleTag.test(html)) {
      return [document.createElement(RegExp.$1)];
    }

    var elements = [];
    var container = document.createElement('div');
    var children = container.childNodes;
    container.innerHTML = html;

    for (var i = 0, l = children.length; i < l; i++) {
      elements.push(children[i]);
    }

    return elements;
  };
  /*
   * Calling `$(selector)` returns a wrapped collection of elements.
   *
   * @private
   * @param {NodeList|Array} collection Element(s) to wrap.
   * @return Object) The wrapped collection
   */


  var wrap = function wrap(collection) {
    if (!isPrototypeSet) {
      DOMtastic.prototype = $.fn;
      DOMtastic.prototype.constructor = DOMtastic;
      isPrototypeSet = true;
    }

    return new DOMtastic(collection);
  };
  /*
   * Constructor for the Object.prototype strategy
   *
   * @constructor
   * @private
   * @param {NodeList|Array} collection Element(s) to wrap.
   */


  var DOMtastic = function DOMtastic(collection) {
    var i = 0;
    var length = collection.length;

    for (; i < length;) {
      this[i] = collection[i++];
    }

    this.length = length;
  };

  var selector = /*#__PURE__*/Object.freeze({
    $: $,
    find: find,
    matches: matches,
    DOMtastic: DOMtastic
  });

  /**
   * @module Array
   */
  var ArrayProto = Array.prototype;
  /**
   * Checks if the given callback returns a true(-ish) value for each element in the collection.
   *
   * @param {Function} callback Function to execute for each element, invoked with `element` as argument.
   * @param {Object} [thisArg] Value to use as `this` when executing `callback`.
   * @return {Boolean} Whether each element passed the callback check.
   * @example
   *     // Test whether every element in the collection has the "active" attribute
   *     $('.items').every(function(element) {
   *         return element.hasAttribute('active')
   *     });
   */

  var every = ArrayProto.every;
  /**
   * Filter the collection by selector or function, and return a new collection with the result.
   *
   * @param {String|Function} selector Selector or function to filter the collection.
   * @param {Object} [thisArg] Value to use as `this` when executing `callback`.
   * @return {Object} A new wrapped collection
   * @chainable
   * @example
   *     $('.items').filter('.active');
   * @example
   *     $('.items').filter(function(element) {
   *         return element.hasAttribute('active')
   *     });
   */

  var filter = function filter(selector, thisArg) {
    var callback = typeof selector === 'function' ? selector : function (element) {
      return matches(element, selector);
    };
    return $(ArrayProto.filter.call(this, callback, thisArg));
  };
  /**
   * Execute a function for each element in the collection.
   *
   * @param {Function} callback Function to execute for each element, invoked with `element` as argument.
   * @param {Object} [thisArg] Value to use as `this` when executing `callback`.
   * @return {Object} The wrapped collection
   * @chainable
   * @example
   *     $('.items').forEach(function(element) {
   *         element.style.color = 'evergreen';
   *     );
   */

  var forEach = function forEach(callback, thisArg) {
    return each(this, callback, thisArg);
  };
  var each$1 = forEach;
  /**
   * Returns the index of an element in the collection.
   *
   * @param {Node} element
   * @return {Number} The zero-based index, -1 if not found.
   * @example
   *     $('.items').indexOf(element); // 2
   */

  var indexOf = ArrayProto.indexOf;
  /**
   * Create a new collection by executing the callback for each element in the collection.
   *
   * @param {Function} callback Function to execute for each element, invoked with `element` as argument.
   * @param {Object} [thisArg] Value to use as `this` when executing `callback`.
   * @return {Array} Collection with the return value of the executed callback for each element.
   * @example
   *     // Create a new array with the attribute value of each element:
   *     $('.items').map(function(element) {
   *         return element.getAttribute('name')
   */

  var map = ArrayProto.map;
  /**
   * Removes the last element from the collection, and returns that element.
   *
   * @return {Object} The last element from the collection.
   * @example
   *     var lastElement = $('.items').pop();
   */

  var pop = ArrayProto.pop;
  /**
   * Adds one or more elements to the end of the collection, and returns the new length of the collection.
   *
   * @param {Object} element Element(s) to add to the collection
   * @return {Number} The new length of the collection
   * @example
   *     $('.items').push(element);
   */

  var push = ArrayProto.push;
  /**
   * Apply a function against each element in the collection, and this accumulator function has to reduce it
   * to a single value.
   *
   * @param {Function} callback Function to execute on each value in the array, taking four arguments (see example).
   * @param {Mixed} initialValue Object to use as the first argument to the first call of the callback.
   * @example
   *     // Calculate the combined height of elements:
   *     $('.items').reduce(function(previousValue, element, index, collection) {
   *         return previousValue + element.clientHeight;
   *     }, 0);
   */

  var reduce = ArrayProto.reduce;
  /**
   * Apply a function against each element in the collection (from right-to-left), and this accumulator function has
   * to reduce it to a single value.
   *
   * @param {Function} callback Function to execute on each value in the array, taking four arguments (see example).
   * @param {Mixed} initialValue Object to use as the first argument to the first call of the callback.
   * @example
   *     // Concatenate the text of elements in reversed order:
   *     $('.items').reduceRight(function(previousValue, element, index, collection) {
   *         return previousValue + element.textContent;
   *     }, '');
   */

  var reduceRight = ArrayProto.reduceRight;
  /**
   * Reverses an array in place. The first array element becomes the last and the last becomes the first.
   *
   * @return {Object} The wrapped collection, reversed
   * @chainable
   * @example
   *     $('.items').reverse();
   */

  var reverse = function reverse() {
    return $(toArray(this).reverse());
  };
  /**
   * Removes the first element from the collection, and returns that element.
   *
   * @return {Object} The first element from the collection.
   * @example
   *     var firstElement = $('.items').shift();
   */

  var shift = ArrayProto.shift;
  /**
   * Checks if the given callback returns a true(-ish) value for any of the elements in the collection.
   *
   * @param {Function} callback Function to execute for each element, invoked with `element` as argument.
   * @return {Boolean} Whether any element passed the callback check.
   * @example
   *     $('.items').some(function(element) {
   *         return element.hasAttribute('active')
   *     }); // true/false
   */

  var some = ArrayProto.some;
  /**
   * Adds one or more elements to the beginning of the collection, and returns the new length of the collection.
   *
   * @param {Object} element Element(s) to add to the collection
   * @return {Number} The new length of the collection
   * @example
   *     $('.items').unshift(element);
   */

  var unshift = ArrayProto.unshift;

  var array = /*#__PURE__*/Object.freeze({
    every: every,
    filter: filter,
    forEach: forEach,
    each: each$1,
    indexOf: indexOf,
    map: map,
    pop: pop,
    push: push,
    reduce: reduce,
    reduceRight: reduceRight,
    reverse: reverse,
    shift: shift,
    some: some,
    unshift: unshift
  });

  /**
   * @module BaseClass
   */
  function BaseClass (api) {
    /**
     * Provide subclass for classes or components to extend from.
     * The opposite and successor of plugins (no need to extend `$.fn` anymore, complete control).
     *
     * @return {Class} The class to extend from, including all `$.fn` methods.
     * @example
     *     import { BaseClass } from  'domtastic';
     *
     *     class MyComponent extends BaseClass {
     *         doSomething() {
     *             return this.addClass('.foo');
     *         }
     *     }
     *
     *     let component = new MyComponent('body');
     *     component.doSomething();
     *
     * @example
     *     import $ from  'domtastic';
     *
     *     class MyComponent extends $.BaseClass {
     *         progress(value) {
     *             return this.attr('data-progress', value);
     *         }
     *     }
     *
     *     let component = new MyComponent(document.body);
     *     component.progress('ive').append('<p>enhancement</p>');
     */
    var BaseClass = function BaseClass() {
      DOMtastic.call(this, $.apply(void 0, arguments));
    };

    extend(BaseClass.prototype, api);
    return BaseClass;
  }

  /**
   * @module CSS
   */

  var isNumeric = function isNumeric(value) {
    return !isNaN(parseFloat(value)) && isFinite(value);
  };

  var camelize = function camelize(value) {
    return value.replace(/-([\da-z])/gi, function (matches, letter) {
      return letter.toUpperCase();
    });
  };

  var dasherize = function dasherize(value) {
    return value.replace(/([a-z\d])([A-Z])/g, '$1-$2').toLowerCase();
  };
  /**
   * Get the value of a style property for the first element, or set one or more style properties for each element in the collection.
   *
   * @param {String|Object} key The name of the style property to get or set. Or an object containing key-value pairs to set as style properties.
   * @param {String} [value] The value of the style property to set.
   * @return {Object} The wrapped collection
   * @chainable
   * @example
   *     $('.item').css('padding-left'); // get
   *     $('.item').css('color', '#f00'); // set
   *     $('.item').css({'border-width': '1px', display: 'inline-block'}); // set multiple
   */


  var css = function css(key, value) {
    var styleProps, prop, val;

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

    each(this, function (element) {
      for (prop in styleProps) {
        if (styleProps[prop] || styleProps[prop] === 0) {
          element.style[prop] = styleProps[prop];
        } else {
          element.style.removeProperty(dasherize(prop));
        }
      }
    });
    return this;
  };

  var css$1 = /*#__PURE__*/Object.freeze({
    css: css
  });

  /**
   * @module DOM
   */
  var forEach$1 = Array.prototype.forEach;
  /**
   * Append element(s) to each element in the collection.
   *
   * @param {String|Node|NodeList|Object} element What to append to the element(s).
   * Clones elements as necessary.
   * @return {Object} The wrapped collection
   * @chainable
   * @example
   *     $('.item').append('<p>more</p>');
   */

  var append = function append(element) {
    if (this instanceof Node) {
      if (typeof element === 'string') {
        this.insertAdjacentHTML('beforeend', element);
      } else {
        if (element instanceof Node) {
          this.appendChild(element);
        } else {
          var elements = element instanceof NodeList ? toArray(element) : element;
          forEach$1.call(elements, this.appendChild.bind(this));
        }
      }
    } else {
      _each(this, append, element);
    }

    return this;
  };
  /**
   * Place element(s) at the beginning of each element in the collection.
   *
   * @param {String|Node|NodeList|Object} element What to place at the beginning of the element(s).
   * Clones elements as necessary.
   * @return {Object} The wrapped collection
   * @chainable
   * @example
   *     $('.item').prepend('<span>start</span>');
   */

  var prepend = function prepend(element) {
    if (this instanceof Node) {
      if (typeof element === 'string') {
        this.insertAdjacentHTML('afterbegin', element);
      } else {
        if (element instanceof Node) {
          this.insertBefore(element, this.firstChild);
        } else {
          var elements = element instanceof NodeList ? toArray(element) : element;
          forEach$1.call(elements.reverse(), prepend.bind(this));
        }
      }
    } else {
      _each(this, prepend, element);
    }

    return this;
  };
  /**
   * Place element(s) before each element in the collection.
   *
   * @param {String|Node|NodeList|Object} element What to place as sibling(s) before to the element(s).
   * Clones elements as necessary.
   * @return {Object} The wrapped collection
   * @chainable
   * @example
   *     $('.items').before('<p>prefix</p>');
   */

  var before = function before(element) {
    if (this instanceof Node) {
      if (typeof element === 'string') {
        this.insertAdjacentHTML('beforebegin', element);
      } else {
        if (element instanceof Node) {
          this.parentNode.insertBefore(element, this);
        } else {
          var elements = element instanceof NodeList ? toArray(element) : element;
          forEach$1.call(elements, before.bind(this));
        }
      }
    } else {
      _each(this, before, element);
    }

    return this;
  };
  /**
   * Place element(s) after each element in the collection.
   *
   * @param {String|Node|NodeList|Object} element What to place as sibling(s) after to the element(s). Clones elements as necessary.
   * @return {Object} The wrapped collection
   * @chainable
   * @example
   *     $('.items').after('<span>suf</span><span>fix</span>');
   */

  var after = function after(element) {
    if (this instanceof Node) {
      if (typeof element === 'string') {
        this.insertAdjacentHTML('afterend', element);
      } else {
        if (element instanceof Node) {
          this.parentNode.insertBefore(element, this.nextSibling);
        } else {
          var elements = element instanceof NodeList ? toArray(element) : element;
          forEach$1.call(elements.reverse(), after.bind(this));
        }
      }
    } else {
      _each(this, after, element);
    }

    return this;
  };
  /**
   * Clone a wrapped object.
   *
   * @return {Object} Wrapped collection of cloned nodes.
   * @example
   *     $(element).clone();
   */

  var clone = function clone() {
    return $(_clone(this));
  };
  /**
   * Clone an object
   *
   * @param {String|Node|NodeList|Array} element The element(s) to clone.
   * @return {String|Node|NodeList|Array} The cloned element(s)
   * @private
   */

  var _clone = function _clone(element) {
    if (typeof element === 'string') {
      return element;
    } else if (element instanceof Node) {
      return element.cloneNode(true);
    } else if ('length' in element) {
      return [].map.call(element, function (el) {
        return el.cloneNode(true);
      });
    }

    return element;
  };
  /**
   * Specialized iteration, applying `fn` in reversed manner to a clone of each element, but the provided one.
   *
   * @param {NodeList|Array} collection
   * @param {Function} fn
   * @param {Node} element
   * @private
   */

  var _each = function _each(collection, fn, element) {
    var l = collection.length;

    while (l--) {
      var elm = l === 0 ? element : _clone(element);
      fn.call(collection[l], elm);
    }
  };

  var dom = /*#__PURE__*/Object.freeze({
    append: append,
    prepend: prepend,
    before: before,
    after: after,
    clone: clone,
    _clone: _clone,
    _each: _each
  });

  /**
   * @module Attr
   */
  /**
   * Get the value of an attribute for the first element, or set one or more attributes for each element in the collection.
   *
   * @param {String|Object} key The name of the attribute to get or set. Or an object containing key-value pairs to set as attributes.
   * @param {String} [value] The value of the attribute to set.
   * @return {Object} The wrapped collection
   * @chainable
   * @example
   *     $('.item').attr('attrName'); // get
   *     $('.item').attr('attrName', 'attrValue'); // set
   *     $('.item').attr({attr1: 'value1', 'attr-2': 'value2'}); // set multiple
   */

  var attr = function attr(key, value) {
    if (typeof key === 'string' && typeof value === 'undefined') {
      var element = this.nodeType ? this : this[0];
      return element ? element.getAttribute(key) : undefined;
    }

    return each(this, function (element) {
      if (typeof key === 'object') {
        for (var _attr in key) {
          element.setAttribute(_attr, key[_attr]);
        }
      } else {
        element.setAttribute(key, value);
      }
    });
  };
  /**
   * Remove attribute from each element in the collection.
   *
   * @param {String} key Attribute name
   * @return {Object} The wrapped collection
   * @chainable
   * @example
   *     $('.items').removeAttr('attrName');
   */

  var removeAttr = function removeAttr(key) {
    return each(this, function (element) {
      return element.removeAttribute(key);
    });
  };

  var dom_attr = /*#__PURE__*/Object.freeze({
    attr: attr,
    removeAttr: removeAttr
  });

  /**
   * @module Class
   */
  /**
   * Add a class to the element(s)
   *
   * @param {String} value Space-separated class name(s) to add to the element(s).
   * @return {Object} The wrapped collection
   * @chainable
   * @example
   *     $('.item').addClass('bar');
   *     $('.item').addClass('bar foo');
   */

  var addClass = function addClass(value) {
    if (value && value.length) {
      each(value.split(' '), _each$1.bind(this, 'add'));
    }

    return this;
  };
  /**
   * Remove a class from the element(s)
   *
   * @param {String} value Space-separated class name(s) to remove from the element(s).
   * @return {Object} The wrapped collection
   * @chainable
   * @example
   *     $('.items').removeClass('bar');
   *     $('.items').removeClass('bar foo');
   */

  var removeClass = function removeClass(value) {
    if (value && value.length) {
      each(value.split(' '), _each$1.bind(this, 'remove'));
    }

    return this;
  };
  /**
   * Toggle a class at the element(s)
   *
   * @param {String} value Space-separated class name(s) to toggle at the element(s).
   * @param {Boolean} [state] A Boolean value to determine whether the class should be added or removed.
   * @return {Object} The wrapped collection
   * @chainable
   * @example
   *     $('.item').toggleClass('bar');
   *     $('.item').toggleClass('bar foo');
   *     $('.item').toggleClass('bar', true);
   */

  var toggleClass = function toggleClass(value, state) {
    if (value && value.length) {
      var action = typeof state === 'boolean' ? state ? 'add' : 'remove' : 'toggle';
      each(value.split(' '), _each$1.bind(this, action));
    }

    return this;
  };
  /**
   * Check if the element(s) have a class.
   *
   * @param {String} value Check if the DOM element contains the class name. When applied to multiple elements,
   * returns `true` if _any_ of them contains the class name.
   * @return {Boolean} Whether the element's class attribute contains the class name.
   * @example
   *     $('.item').hasClass('bar');
   */

  var hasClass = function hasClass(value) {
    return (this.nodeType ? [this] : this).some(function (element) {
      return element.classList.contains(value);
    });
  };
  /**
   * Specialized iteration, applying `fn` of the classList API to each element.
   *
   * @param {String} fnName
   * @param {String} className
   * @private
   */

  var _each$1 = function _each(fnName, className) {
    return each(this, function (element) {
      return element.classList[fnName](className);
    });
  };

  var dom_class = /*#__PURE__*/Object.freeze({
    addClass: addClass,
    removeClass: removeClass,
    toggleClass: toggleClass,
    hasClass: hasClass
  });

  /**
   * @module contains
   */

  /**
   * Test whether an element contains another element in the DOM.
   *
   * @param {Element} container The element that may contain the other element.
   * @param {Element} element The element that may be a descendant of the other element.
   * @return {Boolean} Whether the `container` element contains the `element`.
   * @example
   *     $.contains(parentElement, childElement); // true/false
   */
  var contains = function contains(container, element) {
    if (!container || !element || container === element) {
      return false;
    } else if (container.contains) {
      return container.contains(element);
    } else if (container.compareDocumentPosition) {
      return !(container.compareDocumentPosition(element) & Node.DOCUMENT_POSITION_DISCONNECTED);
    }

    return false;
  };

  var dom_contains = /*#__PURE__*/Object.freeze({
    contains: contains
  });

  /**
   * @module Data
   */
  var isSupportsDataSet = typeof document !== 'undefined' && 'dataset' in document.documentElement;
  var DATAKEYPROP = isSupportsDataSet ? 'dataset' : '__DOMTASTIC_DATA__';

  var camelize$1 = function camelize(str) {
    return str.replace(/-+(.)?/g, function (match, char) {
      return char ? char.toUpperCase() : '';
    });
  };
  /**
   * Get data from first element, or set data for each element in the collection.
   *
   * @param {String} key The key for the data to get or set.
   * @param {String} [value] The data to set.
   * @return {Object} The wrapped collection
   * @chainable
   * @example
   *     $('.item').data('attrName'); // get
   *     $('.item').data('attrName', {any: 'data'}); // set
   */


  var data = function data(key, value) {
    if (typeof key === 'string' && typeof value === 'undefined') {
      var element = this.nodeType ? this : this[0];
      return element && DATAKEYPROP in element ? element[DATAKEYPROP][camelize$1(key)] : undefined;
    }

    return each(this, function (element) {
      if (!isSupportsDataSet) {
        element[DATAKEYPROP] = element[DATAKEYPROP] || {};
      }

      element[DATAKEYPROP][camelize$1(key)] = value;
    });
  };
  /**
   * Get property from first element, or set property on each element in the collection.
   *
   * @param {String} key The name of the property to get or set.
   * @param {String} [value] The value of the property to set.
   * @return {Object} The wrapped collection
   * @chainable
   * @example
   *     $('.item').prop('attrName'); // get
   *     $('.item').prop('attrName', 'attrValue'); // set
   */

  var prop = function prop(key, value) {
    if (typeof key === 'string' && typeof value === 'undefined') {
      var element = this.nodeType ? this : this[0];
      return element && element ? element[key] : undefined;
    }

    return each(this, function (element) {
      return element[key] = value;
    });
  };

  var dom_data = /*#__PURE__*/Object.freeze({
    data: data,
    prop: prop
  });

  /**
   * @module DOM (extra)
   */
  /**
   * Append each element in the collection to the specified element(s).
   *
   * @param {Node|NodeList|Object} element What to append the element(s) to. Clones elements as necessary.
   * @return {Object} The wrapped collection
   * @chainable
   * @example
   *     $('.item').appendTo(container);
   */

  var appendTo = function appendTo(element) {
    var context = typeof element === 'string' ? $(element) : element;
    append.call(context, this);
    return this;
  };
  /*
   * Empty each element in the collection.
   *
   * @return {Object} The wrapped collection
   * @chainable
   * @example
   *     $('.item').empty();
   */

  var empty = function empty() {
    return each(this, function (element) {
      return element.innerHTML = '';
    });
  };
  /**
   * Remove the collection from the DOM.
   *
   * @return {Array} Array containing the removed elements
   * @example
   *     $('.item').remove();
   */

  var remove = function remove() {
    return each(this, function (element) {
      if (element.parentNode) {
        element.parentNode.removeChild(element);
      }
    });
  };
  /**
   * Replace each element in the collection with the provided new content, and return the array of elements that were replaced.
   *
   * @return {Array} Array containing the replaced elements
   */

  var replaceWith = function replaceWith() {
    return before.apply(this, arguments).remove();
  };
  /**
   * Get the `textContent` from the first, or set the `textContent` of each element in the collection.
   *
   * @param {String} [value]
   * @return {Object} The wrapped collection
   * @chainable
   * @example
   *     $('.item').text('New content');
   */

  var text = function text(value) {
    if (value === undefined) {
      return this[0].textContent;
    }

    return each(this, function (element) {
      return element.textContent = '' + value;
    });
  };
  /**
   * Get the `value` from the first, or set the `value` of each element in the collection.
   *
   * @param {String} [value]
   * @return {Object} The wrapped collection
   * @chainable
   * @example
   *     $('input.firstName').val('New value');
   */

  var val = function val(value) {
    if (value === undefined) {
      return this.length > 0 ? this[0].value : undefined;
    }

    return each(this, function (element) {
      return element.value = value;
    });
  };

  var dom_extra = /*#__PURE__*/Object.freeze({
    appendTo: appendTo,
    empty: empty,
    remove: remove,
    replaceWith: replaceWith,
    text: text,
    val: val
  });

  /**
   * @module HTML
   */
  /*
   * Get the HTML contents of the first element, or set the HTML contents for each element in the collection.
   *
   * @param {String} [fragment] HTML fragment to set for the element. If this argument is omitted, the HTML contents are returned.
   * @return {Object} The wrapped collection
   * @chainable
   * @example
   *     $('.item').html();
   *     $('.item').html('<span>more</span>');
   */

  var html = function html(fragment) {
    if (fragment === undefined) {
      var element = this.nodeType ? this : this[0];
      return element ? element.innerHTML : undefined;
    }

    return each(this, function (element) {
      return element.innerHTML = fragment;
    });
  };

  var dom_html = /*#__PURE__*/Object.freeze({
    html: html
  });

  /**
   * @module closest
   */
  /**
   * Return the closest element matching the selector (starting by itself) for each element in the collection.
   *
   * @param {String} selector Filter
   * @param {Object} [context] If provided, matching elements must be a descendant of this element
   * @return {Object} New wrapped collection (containing zero or one element)
   * @chainable
   * @example
   *     $('.selector').closest('.container');
   */

  var closest = function () {
    var closest = function closest(selector, context) {
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
    };

    return typeof Element === 'undefined' || !Element.prototype.closest ? closest : function (selector, context) {
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
  }();

  var selector_closest = /*#__PURE__*/Object.freeze({
    closest: closest
  });

  /**
   * @module Events
   */
  /**
   * Shorthand for `addEventListener`. Supports event delegation if a filter (`selector`) is provided.
   *
   * @param {String} eventNames List of space-separated event types to be added to the element(s)
   * @param {String} [selector] Selector to filter descendants that delegate the event to this element.
   * @param {Function} handler Event handler
   * @param {Boolean} useCapture=false
   * @param {Boolean} once=false
   * @return {Object} The wrapped collection
   * @chainable
   * @example
   *     $('.item').on('click', callback);
   *     $('.container').on('click focus', '.item', handler);
   */

  var on = function on(eventNames, selector, handler, useCapture, once) {
    var _this = this;

    if (typeof selector === 'function') {
      handler = selector;
      selector = null;
    }

    var parts, namespace, eventListener;
    eventNames.split(' ').forEach(function (eventName) {
      parts = eventName.split('.');
      eventName = parts[0] || null;
      namespace = parts[1] || null;
      eventListener = proxyHandler(handler);
      each(_this, function (element) {
        if (selector) {
          eventListener = delegateHandler.bind(element, selector, eventListener);
        }

        if (once) {
          var listener = eventListener;

          eventListener = function eventListener(event) {
            off.call(element, eventNames, selector, handler, useCapture);
            listener.call(element, event);
          };
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
  };
  /**
   * Shorthand for `removeEventListener`.
   *
   * @param {String} eventNames List of space-separated event types to be removed from the element(s)
   * @param {String} [selector] Selector to filter descendants that undelegate the event to this element.
   * @param {Function} handler Event handler
   * @param {Boolean} useCapture=false
   * @return {Object} The wrapped collection
   * @chainable
   * @example
   *     $('.item').off('click', callback);
   *     $('#my-element').off('myEvent myOtherEvent');
   *     $('.item').off();
   */

  var off = function off(eventNames, selector, handler, useCapture) {
    var _this2 = this;

    if (eventNames === void 0) {
      eventNames = '';
    }

    if (typeof selector === 'function') {
      handler = selector;
      selector = null;
    }

    var parts, namespace, handlers;
    eventNames.split(' ').forEach(function (eventName) {
      parts = eventName.split('.');
      eventName = parts[0] || null;
      namespace = parts[1] || null;
      return each(_this2, function (element) {
        handlers = getHandlers(element);
        each(handlers.filter(function (item) {
          return (!eventName || item.eventName === eventName) && (!namespace || item.namespace === namespace) && (!handler || item.handler === handler) && (!selector || item.selector === selector);
        }), function (item) {
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
  };
  /**
   * Add event listener and execute the handler at most once per element.
   *
   * @param eventNames
   * @param selector
   * @param handler
   * @param useCapture
   * @return {Object} The wrapped collection
   * @chainable
   * @example
   *     $('.item').one('click', callback);
   */

  var one = function one(eventNames, selector, handler, useCapture) {
    return on.call(this, eventNames, selector, handler, useCapture, 1);
  };
  /**
   * Get event handlers from an element
   *
   * @private
   * @param {Node} element
   * @return {Array}
   */

  var eventKeyProp = '__domtastic_event__';
  var id = 1;
  var handlers = {};
  var unusedKeys = [];
  var getHandlers = function getHandlers(element) {
    if (!element[eventKeyProp]) {
      element[eventKeyProp] = unusedKeys.length === 0 ? ++id : unusedKeys.pop();
    }

    var key = element[eventKeyProp];
    return handlers[key] || (handlers[key] = []);
  };
  /**
   * Clear event handlers for an element
   *
   * @private
   * @param {Node} element
   */

  var clearHandlers = function clearHandlers(element) {
    var key = element[eventKeyProp];

    if (handlers[key]) {
      handlers[key] = null;
      element[eventKeyProp] = null;
      unusedKeys.push(key);
    }
  };
  /**
   * Function to create a handler that augments the event object with some extra methods,
   * and executes the callback with the event and the event data (i.e. `event.detail`).
   *
   * @private
   * @param handler Callback to execute as `handler(event, data)`
   * @return {Function}
   */

  var proxyHandler = function proxyHandler(handler) {
    return function (event) {
      return handler.call(this, augmentEvent(event));
    };
  };
  var eventMethods = {
    preventDefault: 'isDefaultPrevented',
    stopImmediatePropagation: 'isImmediatePropagationStopped',
    stopPropagation: 'isPropagationStopped'
  };

  var returnTrue = function returnTrue() {
    return true;
  };

  var returnFalse = function returnFalse() {
    return false;
  };
  /**
   * Attempt to augment events and implement something closer to DOM Level 3 Events.
   *
   * @private
   * @param {Object} event
   * @return {Function}
   */


  var augmentEvent = function augmentEvent(event) {
    if (!event.isDefaultPrevented || event.stopImmediatePropagation || event.stopPropagation) {
      for (var methodName in eventMethods) {
        (function (methodName, testMethodName, originalMethod) {
          event[methodName] = function () {
            this[testMethodName] = returnTrue;
            return originalMethod && originalMethod.apply(this, arguments);
          };

          event[testMethodName] = returnFalse;
        })(methodName, eventMethods[methodName], event[methodName]);
      }

      if (event._preventDefault) {
        event.preventDefault();
      }
    }

    return event;
  };
  /**
   * Function to test whether delegated events match the provided `selector` (filter),
   * if the event propagation was stopped, and then actually call the provided event handler.
   * Use `this` instead of `event.currentTarget` on the event object.
   *
   * @private
   * @param {String} selector Selector to filter descendants that undelegate the event to this element.
   * @param {Function} handler Event handler
   * @param {Event} event
   */


  var delegateHandler = function delegateHandler(selector, handler, event) {
    var eventTarget = event._target || event.target;
    var currentTarget = closest.call([eventTarget], selector, this)[0];

    if (currentTarget && currentTarget !== this) {
      if (currentTarget === eventTarget || !(event.isPropagationStopped && event.isPropagationStopped())) {
        handler.call(currentTarget, event);
      }
    }
  };
  var bind = on;
  var unbind = off;

  var event = /*#__PURE__*/Object.freeze({
    on: on,
    off: off,
    one: one,
    getHandlers: getHandlers,
    clearHandlers: clearHandlers,
    proxyHandler: proxyHandler,
    delegateHandler: delegateHandler,
    bind: bind,
    unbind: unbind
  });

  /**
   * @module trigger
   */
  var reMouseEvent = /^(mouse(down|up|over|out|enter|leave|move)|contextmenu|(dbl)?click)$/;
  var reKeyEvent = /^key(down|press|up)$/;
  /**
   * Trigger event at element(s)
   *
   * @param {String} type Type of the event
   * @param {Object} data Data to be sent with the event (`params.detail` will be set to this).
   * @param {Object} [params] Event parameters (optional)
   * @param {Boolean} params.bubbles=true Does the event bubble up through the DOM or not.
   * @param {Boolean} params.cancelable=true Is the event cancelable or not.
   * @param {Mixed} params.detail=undefined Additional information about the event.
   * @return {Object} The wrapped collection
   * @chainable
   * @example
   *     $('.item').trigger('anyEventType');
   */

  var trigger = function trigger(type, data, _temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        _ref$bubbles = _ref.bubbles,
        bubbles = _ref$bubbles === void 0 ? true : _ref$bubbles,
        _ref$cancelable = _ref.cancelable,
        cancelable = _ref$cancelable === void 0 ? true : _ref$cancelable,
        _ref$preventDefault = _ref.preventDefault,
        preventDefault = _ref$preventDefault === void 0 ? false : _ref$preventDefault;

    var EventConstructor = getEventConstructor(type);
    var event = new EventConstructor(type, {
      bubbles: bubbles,
      cancelable: cancelable,
      preventDefault: preventDefault,
      detail: data
    });
    event._preventDefault = preventDefault;
    return each(this, function (element) {
      if (!bubbles || isEventBubblingInDetachedTree || isAttachedToDocument(element)) {
        dispatchEvent(element, event);
      } else {
        triggerForPath(element, type, {
          bubbles: bubbles,
          cancelable: cancelable,
          preventDefault: preventDefault,
          detail: data
        });
      }
    });
  };

  var getEventConstructor = function getEventConstructor(type) {
    return isSupportsOtherEventConstructors ? reMouseEvent.test(type) ? MouseEvent : reKeyEvent.test(type) ? KeyboardEvent : CustomEvent : CustomEvent;
  };
  /**
   * Trigger event at first element in the collection. Similar to `trigger()`, except:
   *
   * - Event does not bubble
   * - Default event behavior is prevented
   * - Only triggers handler for first matching element
   *
   * @param {String} type Type of the event
   * @param {Object} data Data to be sent with the event
   * @example
   *     $('form').triggerHandler('submit');
   */


  var triggerHandler = function triggerHandler(type, data) {
    if (this[0]) {
      trigger.call(this[0], type, data, {
        bubbles: false,
        preventDefault: true
      });
    }
  };
  /**
   * Check whether the element is attached to or detached from) the document
   *
   * @private
   * @param {Node} element Element to test
   * @return {Boolean}
   */

  var isAttachedToDocument = function isAttachedToDocument(element) {
    if (element === window || element === document) {
      return true;
    }

    return contains(element.ownerDocument.documentElement, element);
  };
  /**
   * Dispatch the event at the element and its ancestors.
   * Required to support delegated events in browsers that don't bubble events in detached DOM trees.
   *
   * @private
   * @param {Node} element First element to dispatch the event at
   * @param {String} type Type of the event
   * @param {Object} [params] Event parameters (optional)
   * @param {Boolean} params.bubbles=true Does the event bubble up through the DOM or not.
   * Will be set to false (but shouldn't matter since events don't bubble anyway).
   * @param {Boolean} params.cancelable=true Is the event cancelable or not.
   * @param {Mixed} params.detail=undefined Additional information about the event.
   */


  var triggerForPath = function triggerForPath(element, type, params) {
    if (params === void 0) {
      params = {};
    }

    params.bubbles = false;
    var event = new CustomEvent(type, params);
    event._target = element;

    do {
      dispatchEvent(element, event);
    } while (element = element.parentNode); // eslint-disable-line no-cond-assign

  };
  /**
   * Dispatch event to element, but call direct event methods instead if available
   * (e.g. "blur()", "submit()") and if the event is non-cancelable.
   *
   * @private
   * @param {Node} element Element to dispatch the event at
   * @param {Object} event Event to dispatch
   */


  var directEventMethods = ['blur', 'focus', 'select', 'submit'];

  var dispatchEvent = function dispatchEvent(element, event) {
    if (directEventMethods.indexOf(event.type) !== -1 && typeof element[event.type] === 'function' && !event._preventDefault && !event.cancelable) {
      element[event.type]();
    } else {
      element.dispatchEvent(event);
    }
  };
  /**
   * Polyfill for CustomEvent, borrowed from [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent#Polyfill).
   * Needed to support IE (9, 10, 11) & PhantomJS
   */


  (function () {
    var CustomEvent = function CustomEvent(event, params) {
      if (params === void 0) {
        params = {
          bubbles: false,
          cancelable: false,
          detail: undefined
        };
      }

      var customEvent = document.createEvent('CustomEvent');
      customEvent.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
      return customEvent;
    };

    CustomEvent.prototype = win.CustomEvent && win.CustomEvent.prototype;
    win.CustomEvent = CustomEvent;
  })();
  /*
   * Are events bubbling in detached DOM trees?
   * @private
   */


  var isEventBubblingInDetachedTree = function () {
    var isBubbling = false;
    var doc = win.document;

    if (doc) {
      var parent = doc.createElement('div');
      var child = parent.cloneNode();
      parent.appendChild(child);
      parent.addEventListener('e', function () {
        isBubbling = true;
      });
      child.dispatchEvent(new CustomEvent('e', {
        bubbles: true
      }));
    }

    return isBubbling;
  }();

  var isSupportsOtherEventConstructors = function () {
    try {
      new MouseEvent('click');
    } catch (e) {
      return false;
    }

    return true;
  }();

  var event_trigger = /*#__PURE__*/Object.freeze({
    trigger: trigger,
    triggerHandler: triggerHandler
  });

  /**
   * @module Ready
   */

  /**
   * Execute callback when `DOMContentLoaded` fires for `document`, or immediately if called afterwards.
   *
   * @param handler Callback to execute when initial DOM content is loaded.
   * @return {Object} The wrapped collection
   * @chainable
   * @example
   *     $(document).ready(callback);
   */
  var ready = function ready(handler) {
    if (/complete|loaded|interactive/.test(document.readyState) && document.body) {
      handler();
    } else {
      document.addEventListener('DOMContentLoaded', handler, false);
    }

    return this;
  };

  var event_ready = /*#__PURE__*/Object.freeze({
    ready: ready
  });

  /**
   * @module noConflict
   */
  /*
   * Save the previous value of the global `$` variable, so that it can be restored later on.
   * @private
   */

  var previousLib = win.$;
  /**
   * In case another library sets the global `$` variable before DOMtastic does,
   * this method can be used to return the global `$` to that other library.
   *
   * @return {Object} Reference to DOMtastic.
   * @example
   *     var domtastic = $.noConflict();
   */

  var noConflict = function noConflict() {
    win.$ = previousLib;
    return this;
  };

  var noconflict = /*#__PURE__*/Object.freeze({
    noConflict: noConflict
  });

  /**
   * @module Selector (extra)
   */
  /**
   * Return children of each element in the collection, optionally filtered by a selector.
   *
   * @param {String} [selector] Filter
   * @return {Object} New wrapped collection
   * @chainable
   * @example
   *     $('.selector').children();
   *     $('.selector').children('.filter');
   */

  var children = function children(selector) {
    var nodes = [];
    each(this, function (element) {
      if (element.children) {
        each(element.children, function (child) {
          if (!selector || selector && matches(child, selector)) {
            nodes.push(child);
          }
        });
      }
    });
    return $(nodes);
  };
  /**
   * Add the elements of a wrapped collection to another.
   *
   * @param {String|Node|NodeList|Array} selector Query selector, `Node`, `NodeList`, array of elements, or HTML fragment string.
   * @return {Object} The extended wrapped collection
   * @example
   *     $('.items').concat($('.more-items));
   *     $('.items').concat('.more-items);
   *     $('.items').concat('<div>more</div>');
   */

  var concat = function concat(selector) {
    var _this = this;

    each($(selector), function (element) {
      if ([].indexOf.call(_this, element) === -1) {
        [].push.call(_this, element);
      }
    });
    return this;
  };
  /**
   * Return child nodes of each element in the collection, including text and comment nodes.
   *
   * @return {Object} New wrapped collection
   * @example
   *     $('.selector').contents();
   */

  var contents = function contents() {
    var nodes = [];
    each(this, function (element) {
      return nodes.push.apply(nodes, toArray(element.childNodes));
    });
    return $(nodes);
  };
  /**
   * Return a collection containing only the one at the specified index.
   *
   * @param {Number} index
   * @return {Object} New wrapped collection
   * @chainable
   * @example
   *     $('.items').eq(1)
   *     // The second item; result is the same as doing $($('.items')[1]);
   */

  var eq = function eq(index) {
    return slice.call(this, index, index + 1);
  };
  /**
   * Return a collection containing only the first item.
   *
   * @return {Object} New wrapped collection
   * @chainable
   * @example
   *     $('.items').first()
   *     // The first item; result is the same as doing $($('.items')[0]);
   */

  var first = function first() {
    return slice.call(this, 0, 1);
  };
  /**
   * Return the DOM element at the specified index.
   *
   * @param {Number} index
   * @return {Node} Element at the specified index
   * @example
   *     $('.items').get(1)
   *     // The second element; result is the same as doing $('.items')[1];
   */

  var get = function get(index) {
    return this[index];
  };
  /**
   * Return the parent elements of each element in the collection, optionally filtered by a selector.
   *
   * @param {String} [selector] Filter
   * @return {Object} New wrapped collection
   * @chainable
   * @example
   *     $('.selector').parent();
   *     $('.selector').parent('.filter');
   */

  var parent = function parent(selector) {
    var nodes = [];
    each(this, function (element) {
      if (!selector || selector && matches(element.parentNode, selector)) {
        nodes.push(element.parentNode);
      }
    });
    return $(nodes);
  };
  /**
   * Return the sibling elements of each element in the collection, optionally filtered by a selector.
   *
   * @param {String} [selector] Filter
   * @return {Object} New wrapped collection
   * @chainable
   * @example
   *     $('.selector').siblings();
   *     $('.selector').siblings('.filter');
   */

  var siblings = function siblings(selector) {
    var nodes = [];
    each(this, function (element) {
      return each(element.parentNode.children, function (sibling) {
        if (sibling !== element && (!selector || selector && matches(sibling, selector))) {
          nodes.push(sibling);
        }
      });
    });
    return $(nodes);
  };
  /**
   * Create a new, sliced collection.
   *
   * @param {Number} start
   * @param {Number} end
   * @return {Object} New wrapped collection
   * @example
   *     $('.items').slice(1, 3)
   *     // New wrapped collection containing the second, third, and fourth element.
   */

  var slice = function slice(start, end) {
    // eslint-disable-line no-unused-vars
    return $([].slice.apply(this, arguments));
  };

  var selector_extra = /*#__PURE__*/Object.freeze({
    children: children,
    concat: concat,
    contents: contents,
    eq: eq,
    first: first,
    get: get,
    parent: parent,
    siblings: siblings,
    slice: slice
  });

  /**
   * @module Type
   */

  /*
   * Determine if the argument passed is a Javascript function object.
   *
   * @param {Object} [obj] Object to test whether or not it is a function.
   * @return {boolean}
   * @example
   *     $.isFunction(function(){}); // true
   * @example
   *     $.isFunction({}); // false
   */
  var isFunction = function isFunction(obj) {
    return typeof obj === 'function';
  };
  /*
   * Determine whether the argument is an array.
   *
   * @param {Object} [obj] Object to test whether or not it is an array.
   * @return {boolean}
   * @example
   *     $.isArray([]); // true
   * @example
   *     $.isArray({}); // false
   */

  var isArray = Array.isArray;

  var type = /*#__PURE__*/Object.freeze({
    isFunction: isFunction,
    isArray: isArray
  });

  /**
   * @module API
   */
  var api = {};
  var $$1 = {}; // Import modules to build up the API

  if (typeof selector !== 'undefined') {
    $$1 = $;
    $$1.matches = matches;
    api.find = find;
  }

  extend($$1, dom_contains, noconflict, type);
  extend(api, array, css$1, dom_attr, dom, dom_class, dom_data, dom_extra, dom_html, event, event_trigger, event_ready, selector_closest, selector_extra);
  $$1.fn = api; // Version

  $$1.version = '0.15.12'; // Util

  $$1.extend = extend; // Provide base class to extend from

  if (typeof BaseClass !== 'undefined') {
    $$1.BaseClass = BaseClass($$1.fn);
  } // Export interface


  var $$2 = $$1;

  return $$2;

}));
//# sourceMappingURL=domtastic.js.map
