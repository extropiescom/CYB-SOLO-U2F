/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _regenerator = __webpack_require__(1);
	
	var _regenerator2 = _interopRequireDefault(_regenerator);
	
	var _asyncToGenerator2 = __webpack_require__(4);
	
	var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _require = __webpack_require__(76),
	    fpapi = _require.fpapi;
	
	window.Enroll = function () {
		var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(fpID, callback) {
			return _regenerator2.default.wrap(function _callee$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							_context.t0 = callback;
							_context.next = 3;
							return fpapi.enroll(fpID);
	
						case 3:
							_context.t1 = _context.sent;
							(0, _context.t0)(_context.t1);
	
						case 5:
						case 'end':
							return _context.stop();
					}
				}
			}, _callee, undefined);
		}));
	
		return function (_x, _x2) {
			return _ref.apply(this, arguments);
		};
	}();
	
	window.Verify = function () {
		var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(fpID, amount, callback) {
			return _regenerator2.default.wrap(function _callee2$(_context2) {
				while (1) {
					switch (_context2.prev = _context2.next) {
						case 0:
							_context2.t0 = callback;
							_context2.next = 3;
							return fpapi.verify(fpID, amount);
	
						case 3:
							_context2.t1 = _context2.sent;
							(0, _context2.t0)(_context2.t1);
	
						case 5:
						case 'end':
							return _context2.stop();
					}
				}
			}, _callee2, undefined);
		}));
	
		return function (_x3, _x4, _x5) {
			return _ref2.apply(this, arguments);
		};
	}();
	
	window.GetState = function () {
		var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(op, callback) {
			return _regenerator2.default.wrap(function _callee3$(_context3) {
				while (1) {
					switch (_context3.prev = _context3.next) {
						case 0:
							_context3.t0 = callback;
							_context3.next = 3;
							return fpapi.getstate(op);
	
						case 3:
							_context3.t1 = _context3.sent;
							(0, _context3.t0)(_context3.t1);
	
						case 5:
						case 'end':
							return _context3.stop();
					}
				}
			}, _callee3, undefined);
		}));
	
		return function (_x6, _x7) {
			return _ref3.apply(this, arguments);
		};
	}();
	
	window.GetID = function () {
		var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(nID, callback) {
			return _regenerator2.default.wrap(function _callee4$(_context4) {
				while (1) {
					switch (_context4.prev = _context4.next) {
						case 0:
							_context4.t0 = callback;
							_context4.next = 3;
							return fpapi.getid(nID);
	
						case 3:
							_context4.t1 = _context4.sent;
							(0, _context4.t0)(_context4.t1);
	
						case 5:
						case 'end':
							return _context4.stop();
					}
				}
			}, _callee4, undefined);
		}));
	
		return function (_x8, _x9) {
			return _ref4.apply(this, arguments);
		};
	}();
	
	window.GetList = function () {
		var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(callback) {
			return _regenerator2.default.wrap(function _callee5$(_context5) {
				while (1) {
					switch (_context5.prev = _context5.next) {
						case 0:
							_context5.t0 = callback;
							_context5.next = 3;
							return fpapi.list();
	
						case 3:
							_context5.t1 = _context5.sent;
							(0, _context5.t0)(_context5.t1);
	
						case 5:
						case 'end':
							return _context5.stop();
					}
				}
			}, _callee5, undefined);
		}));
	
		return function (_x10) {
			return _ref5.apply(this, arguments);
		};
	}();
	
	window.Delete = function () {
		var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(fpID, isAll, callback) {
			return _regenerator2.default.wrap(function _callee6$(_context6) {
				while (1) {
					switch (_context6.prev = _context6.next) {
						case 0:
							_context6.t0 = callback;
							_context6.next = 3;
							return fpapi.del(fpID, isAll);
	
						case 3:
							_context6.t1 = _context6.sent;
							(0, _context6.t0)(_context6.t1);
	
						case 5:
						case 'end':
							return _context6.stop();
					}
				}
			}, _callee6, undefined);
		}));
	
		return function (_x11, _x12, _x13) {
			return _ref6.apply(this, arguments);
		};
	}();
	
	window.Abort = function () {
		var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7(callback) {
			return _regenerator2.default.wrap(function _callee7$(_context7) {
				while (1) {
					switch (_context7.prev = _context7.next) {
						case 0:
							_context7.t0 = callback;
							_context7.next = 3;
							return fpapi.abort();
	
						case 3:
							_context7.t1 = _context7.sent;
							(0, _context7.t0)(_context7.t1);
	
						case 5:
						case 'end':
							return _context7.stop();
					}
				}
			}, _callee7, undefined);
		}));
	
		return function (_x14) {
			return _ref7.apply(this, arguments);
		};
	}();
	
	window.GetSN = function () {
		var _ref8 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee8(callback) {
			return _regenerator2.default.wrap(function _callee8$(_context8) {
				while (1) {
					switch (_context8.prev = _context8.next) {
						case 0:
							_context8.t0 = callback;
							_context8.next = 3;
							return fpapi.getsn();
	
						case 3:
							_context8.t1 = _context8.sent;
							(0, _context8.t0)(_context8.t1);
	
						case 5:
						case 'end':
							return _context8.stop();
					}
				}
			}, _callee8, undefined);
		}));
	
		return function (_x15) {
			return _ref8.apply(this, arguments);
		};
	}();
	
	window.VerifyPIN = function () {
		var _ref9 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee9(pin, callback) {
			return _regenerator2.default.wrap(function _callee9$(_context9) {
				while (1) {
					switch (_context9.prev = _context9.next) {
						case 0:
							_context9.t0 = callback;
							_context9.next = 3;
							return fpapi.verifypin(pin);
	
						case 3:
							_context9.t1 = _context9.sent;
							(0, _context9.t0)(_context9.t1);
	
						case 5:
						case 'end':
							return _context9.stop();
					}
				}
			}, _callee9, undefined);
		}));
	
		return function (_x16, _x17) {
			return _ref9.apply(this, arguments);
		};
	}();
	
	window.ChangePIN = function () {
		var _ref10 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee10(oldpin, newpin, callback) {
			return _regenerator2.default.wrap(function _callee10$(_context10) {
				while (1) {
					switch (_context10.prev = _context10.next) {
						case 0:
							_context10.t0 = callback;
							_context10.next = 3;
							return fpapi.changepin(oldpin, newpin);
	
						case 3:
							_context10.t1 = _context10.sent;
							(0, _context10.t0)(_context10.t1);
	
						case 5:
						case 'end':
							return _context10.stop();
					}
				}
			}, _callee10, undefined);
		}));
	
		return function (_x18, _x19, _x20) {
			return _ref10.apply(this, arguments);
		};
	}();
	
	window.WriteData = function () {
		var _ref11 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee11(data, callback) {
			return _regenerator2.default.wrap(function _callee11$(_context11) {
				while (1) {
					switch (_context11.prev = _context11.next) {
						case 0:
							_context11.t0 = callback;
							_context11.next = 3;
							return fpapi.writedata(data);
	
						case 3:
							_context11.t1 = _context11.sent;
							(0, _context11.t0)(_context11.t1);
	
						case 5:
						case 'end':
							return _context11.stop();
					}
				}
			}, _callee11, undefined);
		}));
	
		return function (_x21, _x22) {
			return _ref11.apply(this, arguments);
		};
	}();
	
	window.ReadData = function () {
		var _ref12 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee12(len, callback) {
			return _regenerator2.default.wrap(function _callee12$(_context12) {
				while (1) {
					switch (_context12.prev = _context12.next) {
						case 0:
							_context12.t0 = callback;
							_context12.next = 3;
							return fpapi.readdata(len);
	
						case 3:
							_context12.t1 = _context12.sent;
							(0, _context12.t0)(_context12.t1);
	
						case 5:
						case 'end':
							return _context12.stop();
					}
				}
			}, _callee12, undefined);
		}));
	
		return function (_x23, _x24) {
			return _ref12.apply(this, arguments);
		};
	}();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(2);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2014-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	
	// This method of obtaining a reference to the global object needs to be
	// kept identical to the way it is obtained in runtime.js
	var g = (function() { return this })() || Function("return this")();
	
	// Use `getOwnPropertyNames` because not all browsers support calling
	// `hasOwnProperty` on the global `self` object in a worker. See #183.
	var hadRuntime = g.regeneratorRuntime &&
	  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;
	
	// Save the old regeneratorRuntime in case it needs to be restored later.
	var oldRuntime = hadRuntime && g.regeneratorRuntime;
	
	// Force reevalutation of runtime.js.
	g.regeneratorRuntime = undefined;
	
	module.exports = __webpack_require__(3);
	
	if (hadRuntime) {
	  // Restore the original runtime.
	  g.regeneratorRuntime = oldRuntime;
	} else {
	  // Remove the global property added by runtime.js.
	  try {
	    delete g.regeneratorRuntime;
	  } catch(e) {
	    g.regeneratorRuntime = undefined;
	  }
	}


/***/ }),
/* 3 */
/***/ (function(module, exports) {

	/**
	 * Copyright (c) 2014-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	
	!(function(global) {
	  "use strict";
	
	  var Op = Object.prototype;
	  var hasOwn = Op.hasOwnProperty;
	  var undefined; // More compressible than void 0.
	  var $Symbol = typeof Symbol === "function" ? Symbol : {};
	  var iteratorSymbol = $Symbol.iterator || "@@iterator";
	  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
	  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
	
	  var inModule = typeof module === "object";
	  var runtime = global.regeneratorRuntime;
	  if (runtime) {
	    if (inModule) {
	      // If regeneratorRuntime is defined globally and we're in a module,
	      // make the exports object identical to regeneratorRuntime.
	      module.exports = runtime;
	    }
	    // Don't bother evaluating the rest of this file if the runtime was
	    // already defined globally.
	    return;
	  }
	
	  // Define the runtime globally (as expected by generated code) as either
	  // module.exports (if we're in a module) or a new, empty object.
	  runtime = global.regeneratorRuntime = inModule ? module.exports : {};
	
	  function wrap(innerFn, outerFn, self, tryLocsList) {
	    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
	    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
	    var generator = Object.create(protoGenerator.prototype);
	    var context = new Context(tryLocsList || []);
	
	    // The ._invoke method unifies the implementations of the .next,
	    // .throw, and .return methods.
	    generator._invoke = makeInvokeMethod(innerFn, self, context);
	
	    return generator;
	  }
	  runtime.wrap = wrap;
	
	  // Try/catch helper to minimize deoptimizations. Returns a completion
	  // record like context.tryEntries[i].completion. This interface could
	  // have been (and was previously) designed to take a closure to be
	  // invoked without arguments, but in all the cases we care about we
	  // already have an existing method we want to call, so there's no need
	  // to create a new function object. We can even get away with assuming
	  // the method takes exactly one argument, since that happens to be true
	  // in every case, so we don't have to touch the arguments object. The
	  // only additional allocation required is the completion record, which
	  // has a stable shape and so hopefully should be cheap to allocate.
	  function tryCatch(fn, obj, arg) {
	    try {
	      return { type: "normal", arg: fn.call(obj, arg) };
	    } catch (err) {
	      return { type: "throw", arg: err };
	    }
	  }
	
	  var GenStateSuspendedStart = "suspendedStart";
	  var GenStateSuspendedYield = "suspendedYield";
	  var GenStateExecuting = "executing";
	  var GenStateCompleted = "completed";
	
	  // Returning this object from the innerFn has the same effect as
	  // breaking out of the dispatch switch statement.
	  var ContinueSentinel = {};
	
	  // Dummy constructor functions that we use as the .constructor and
	  // .constructor.prototype properties for functions that return Generator
	  // objects. For full spec compliance, you may wish to configure your
	  // minifier not to mangle the names of these two functions.
	  function Generator() {}
	  function GeneratorFunction() {}
	  function GeneratorFunctionPrototype() {}
	
	  // This is a polyfill for %IteratorPrototype% for environments that
	  // don't natively support it.
	  var IteratorPrototype = {};
	  IteratorPrototype[iteratorSymbol] = function () {
	    return this;
	  };
	
	  var getProto = Object.getPrototypeOf;
	  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
	  if (NativeIteratorPrototype &&
	      NativeIteratorPrototype !== Op &&
	      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
	    // This environment has a native %IteratorPrototype%; use it instead
	    // of the polyfill.
	    IteratorPrototype = NativeIteratorPrototype;
	  }
	
	  var Gp = GeneratorFunctionPrototype.prototype =
	    Generator.prototype = Object.create(IteratorPrototype);
	  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
	  GeneratorFunctionPrototype.constructor = GeneratorFunction;
	  GeneratorFunctionPrototype[toStringTagSymbol] =
	    GeneratorFunction.displayName = "GeneratorFunction";
	
	  // Helper for defining the .next, .throw, and .return methods of the
	  // Iterator interface in terms of a single ._invoke method.
	  function defineIteratorMethods(prototype) {
	    ["next", "throw", "return"].forEach(function(method) {
	      prototype[method] = function(arg) {
	        return this._invoke(method, arg);
	      };
	    });
	  }
	
	  runtime.isGeneratorFunction = function(genFun) {
	    var ctor = typeof genFun === "function" && genFun.constructor;
	    return ctor
	      ? ctor === GeneratorFunction ||
	        // For the native GeneratorFunction constructor, the best we can
	        // do is to check its .name property.
	        (ctor.displayName || ctor.name) === "GeneratorFunction"
	      : false;
	  };
	
	  runtime.mark = function(genFun) {
	    if (Object.setPrototypeOf) {
	      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
	    } else {
	      genFun.__proto__ = GeneratorFunctionPrototype;
	      if (!(toStringTagSymbol in genFun)) {
	        genFun[toStringTagSymbol] = "GeneratorFunction";
	      }
	    }
	    genFun.prototype = Object.create(Gp);
	    return genFun;
	  };
	
	  // Within the body of any async function, `await x` is transformed to
	  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
	  // `hasOwn.call(value, "__await")` to determine if the yielded value is
	  // meant to be awaited.
	  runtime.awrap = function(arg) {
	    return { __await: arg };
	  };
	
	  function AsyncIterator(generator) {
	    function invoke(method, arg, resolve, reject) {
	      var record = tryCatch(generator[method], generator, arg);
	      if (record.type === "throw") {
	        reject(record.arg);
	      } else {
	        var result = record.arg;
	        var value = result.value;
	        if (value &&
	            typeof value === "object" &&
	            hasOwn.call(value, "__await")) {
	          return Promise.resolve(value.__await).then(function(value) {
	            invoke("next", value, resolve, reject);
	          }, function(err) {
	            invoke("throw", err, resolve, reject);
	          });
	        }
	
	        return Promise.resolve(value).then(function(unwrapped) {
	          // When a yielded Promise is resolved, its final value becomes
	          // the .value of the Promise<{value,done}> result for the
	          // current iteration. If the Promise is rejected, however, the
	          // result for this iteration will be rejected with the same
	          // reason. Note that rejections of yielded Promises are not
	          // thrown back into the generator function, as is the case
	          // when an awaited Promise is rejected. This difference in
	          // behavior between yield and await is important, because it
	          // allows the consumer to decide what to do with the yielded
	          // rejection (swallow it and continue, manually .throw it back
	          // into the generator, abandon iteration, whatever). With
	          // await, by contrast, there is no opportunity to examine the
	          // rejection reason outside the generator function, so the
	          // only option is to throw it from the await expression, and
	          // let the generator function handle the exception.
	          result.value = unwrapped;
	          resolve(result);
	        }, reject);
	      }
	    }
	
	    var previousPromise;
	
	    function enqueue(method, arg) {
	      function callInvokeWithMethodAndArg() {
	        return new Promise(function(resolve, reject) {
	          invoke(method, arg, resolve, reject);
	        });
	      }
	
	      return previousPromise =
	        // If enqueue has been called before, then we want to wait until
	        // all previous Promises have been resolved before calling invoke,
	        // so that results are always delivered in the correct order. If
	        // enqueue has not been called before, then it is important to
	        // call invoke immediately, without waiting on a callback to fire,
	        // so that the async generator function has the opportunity to do
	        // any necessary setup in a predictable way. This predictability
	        // is why the Promise constructor synchronously invokes its
	        // executor callback, and why async functions synchronously
	        // execute code before the first await. Since we implement simple
	        // async functions in terms of async generators, it is especially
	        // important to get this right, even though it requires care.
	        previousPromise ? previousPromise.then(
	          callInvokeWithMethodAndArg,
	          // Avoid propagating failures to Promises returned by later
	          // invocations of the iterator.
	          callInvokeWithMethodAndArg
	        ) : callInvokeWithMethodAndArg();
	    }
	
	    // Define the unified helper method that is used to implement .next,
	    // .throw, and .return (see defineIteratorMethods).
	    this._invoke = enqueue;
	  }
	
	  defineIteratorMethods(AsyncIterator.prototype);
	  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
	    return this;
	  };
	  runtime.AsyncIterator = AsyncIterator;
	
	  // Note that simple async functions are implemented on top of
	  // AsyncIterator objects; they just return a Promise for the value of
	  // the final result produced by the iterator.
	  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
	    var iter = new AsyncIterator(
	      wrap(innerFn, outerFn, self, tryLocsList)
	    );
	
	    return runtime.isGeneratorFunction(outerFn)
	      ? iter // If outerFn is a generator, return the full iterator.
	      : iter.next().then(function(result) {
	          return result.done ? result.value : iter.next();
	        });
	  };
	
	  function makeInvokeMethod(innerFn, self, context) {
	    var state = GenStateSuspendedStart;
	
	    return function invoke(method, arg) {
	      if (state === GenStateExecuting) {
	        throw new Error("Generator is already running");
	      }
	
	      if (state === GenStateCompleted) {
	        if (method === "throw") {
	          throw arg;
	        }
	
	        // Be forgiving, per 25.3.3.3.3 of the spec:
	        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
	        return doneResult();
	      }
	
	      context.method = method;
	      context.arg = arg;
	
	      while (true) {
	        var delegate = context.delegate;
	        if (delegate) {
	          var delegateResult = maybeInvokeDelegate(delegate, context);
	          if (delegateResult) {
	            if (delegateResult === ContinueSentinel) continue;
	            return delegateResult;
	          }
	        }
	
	        if (context.method === "next") {
	          // Setting context._sent for legacy support of Babel's
	          // function.sent implementation.
	          context.sent = context._sent = context.arg;
	
	        } else if (context.method === "throw") {
	          if (state === GenStateSuspendedStart) {
	            state = GenStateCompleted;
	            throw context.arg;
	          }
	
	          context.dispatchException(context.arg);
	
	        } else if (context.method === "return") {
	          context.abrupt("return", context.arg);
	        }
	
	        state = GenStateExecuting;
	
	        var record = tryCatch(innerFn, self, context);
	        if (record.type === "normal") {
	          // If an exception is thrown from innerFn, we leave state ===
	          // GenStateExecuting and loop back for another invocation.
	          state = context.done
	            ? GenStateCompleted
	            : GenStateSuspendedYield;
	
	          if (record.arg === ContinueSentinel) {
	            continue;
	          }
	
	          return {
	            value: record.arg,
	            done: context.done
	          };
	
	        } else if (record.type === "throw") {
	          state = GenStateCompleted;
	          // Dispatch the exception by looping back around to the
	          // context.dispatchException(context.arg) call above.
	          context.method = "throw";
	          context.arg = record.arg;
	        }
	      }
	    };
	  }
	
	  // Call delegate.iterator[context.method](context.arg) and handle the
	  // result, either by returning a { value, done } result from the
	  // delegate iterator, or by modifying context.method and context.arg,
	  // setting context.delegate to null, and returning the ContinueSentinel.
	  function maybeInvokeDelegate(delegate, context) {
	    var method = delegate.iterator[context.method];
	    if (method === undefined) {
	      // A .throw or .return when the delegate iterator has no .throw
	      // method always terminates the yield* loop.
	      context.delegate = null;
	
	      if (context.method === "throw") {
	        if (delegate.iterator.return) {
	          // If the delegate iterator has a return method, give it a
	          // chance to clean up.
	          context.method = "return";
	          context.arg = undefined;
	          maybeInvokeDelegate(delegate, context);
	
	          if (context.method === "throw") {
	            // If maybeInvokeDelegate(context) changed context.method from
	            // "return" to "throw", let that override the TypeError below.
	            return ContinueSentinel;
	          }
	        }
	
	        context.method = "throw";
	        context.arg = new TypeError(
	          "The iterator does not provide a 'throw' method");
	      }
	
	      return ContinueSentinel;
	    }
	
	    var record = tryCatch(method, delegate.iterator, context.arg);
	
	    if (record.type === "throw") {
	      context.method = "throw";
	      context.arg = record.arg;
	      context.delegate = null;
	      return ContinueSentinel;
	    }
	
	    var info = record.arg;
	
	    if (! info) {
	      context.method = "throw";
	      context.arg = new TypeError("iterator result is not an object");
	      context.delegate = null;
	      return ContinueSentinel;
	    }
	
	    if (info.done) {
	      // Assign the result of the finished delegate to the temporary
	      // variable specified by delegate.resultName (see delegateYield).
	      context[delegate.resultName] = info.value;
	
	      // Resume execution at the desired location (see delegateYield).
	      context.next = delegate.nextLoc;
	
	      // If context.method was "throw" but the delegate handled the
	      // exception, let the outer generator proceed normally. If
	      // context.method was "next", forget context.arg since it has been
	      // "consumed" by the delegate iterator. If context.method was
	      // "return", allow the original .return call to continue in the
	      // outer generator.
	      if (context.method !== "return") {
	        context.method = "next";
	        context.arg = undefined;
	      }
	
	    } else {
	      // Re-yield the result returned by the delegate method.
	      return info;
	    }
	
	    // The delegate iterator is finished, so forget it and continue with
	    // the outer generator.
	    context.delegate = null;
	    return ContinueSentinel;
	  }
	
	  // Define Generator.prototype.{next,throw,return} in terms of the
	  // unified ._invoke helper method.
	  defineIteratorMethods(Gp);
	
	  Gp[toStringTagSymbol] = "Generator";
	
	  // A Generator should always return itself as the iterator object when the
	  // @@iterator function is called on it. Some browsers' implementations of the
	  // iterator prototype chain incorrectly implement this, causing the Generator
	  // object to not be returned from this call. This ensures that doesn't happen.
	  // See https://github.com/facebook/regenerator/issues/274 for more details.
	  Gp[iteratorSymbol] = function() {
	    return this;
	  };
	
	  Gp.toString = function() {
	    return "[object Generator]";
	  };
	
	  function pushTryEntry(locs) {
	    var entry = { tryLoc: locs[0] };
	
	    if (1 in locs) {
	      entry.catchLoc = locs[1];
	    }
	
	    if (2 in locs) {
	      entry.finallyLoc = locs[2];
	      entry.afterLoc = locs[3];
	    }
	
	    this.tryEntries.push(entry);
	  }
	
	  function resetTryEntry(entry) {
	    var record = entry.completion || {};
	    record.type = "normal";
	    delete record.arg;
	    entry.completion = record;
	  }
	
	  function Context(tryLocsList) {
	    // The root entry object (effectively a try statement without a catch
	    // or a finally block) gives us a place to store values thrown from
	    // locations where there is no enclosing try statement.
	    this.tryEntries = [{ tryLoc: "root" }];
	    tryLocsList.forEach(pushTryEntry, this);
	    this.reset(true);
	  }
	
	  runtime.keys = function(object) {
	    var keys = [];
	    for (var key in object) {
	      keys.push(key);
	    }
	    keys.reverse();
	
	    // Rather than returning an object with a next method, we keep
	    // things simple and return the next function itself.
	    return function next() {
	      while (keys.length) {
	        var key = keys.pop();
	        if (key in object) {
	          next.value = key;
	          next.done = false;
	          return next;
	        }
	      }
	
	      // To avoid creating an additional object, we just hang the .value
	      // and .done properties off the next function object itself. This
	      // also ensures that the minifier will not anonymize the function.
	      next.done = true;
	      return next;
	    };
	  };
	
	  function values(iterable) {
	    if (iterable) {
	      var iteratorMethod = iterable[iteratorSymbol];
	      if (iteratorMethod) {
	        return iteratorMethod.call(iterable);
	      }
	
	      if (typeof iterable.next === "function") {
	        return iterable;
	      }
	
	      if (!isNaN(iterable.length)) {
	        var i = -1, next = function next() {
	          while (++i < iterable.length) {
	            if (hasOwn.call(iterable, i)) {
	              next.value = iterable[i];
	              next.done = false;
	              return next;
	            }
	          }
	
	          next.value = undefined;
	          next.done = true;
	
	          return next;
	        };
	
	        return next.next = next;
	      }
	    }
	
	    // Return an iterator with no values.
	    return { next: doneResult };
	  }
	  runtime.values = values;
	
	  function doneResult() {
	    return { value: undefined, done: true };
	  }
	
	  Context.prototype = {
	    constructor: Context,
	
	    reset: function(skipTempReset) {
	      this.prev = 0;
	      this.next = 0;
	      // Resetting context._sent for legacy support of Babel's
	      // function.sent implementation.
	      this.sent = this._sent = undefined;
	      this.done = false;
	      this.delegate = null;
	
	      this.method = "next";
	      this.arg = undefined;
	
	      this.tryEntries.forEach(resetTryEntry);
	
	      if (!skipTempReset) {
	        for (var name in this) {
	          // Not sure about the optimal order of these conditions:
	          if (name.charAt(0) === "t" &&
	              hasOwn.call(this, name) &&
	              !isNaN(+name.slice(1))) {
	            this[name] = undefined;
	          }
	        }
	      }
	    },
	
	    stop: function() {
	      this.done = true;
	
	      var rootEntry = this.tryEntries[0];
	      var rootRecord = rootEntry.completion;
	      if (rootRecord.type === "throw") {
	        throw rootRecord.arg;
	      }
	
	      return this.rval;
	    },
	
	    dispatchException: function(exception) {
	      if (this.done) {
	        throw exception;
	      }
	
	      var context = this;
	      function handle(loc, caught) {
	        record.type = "throw";
	        record.arg = exception;
	        context.next = loc;
	
	        if (caught) {
	          // If the dispatched exception was caught by a catch block,
	          // then let that catch block handle the exception normally.
	          context.method = "next";
	          context.arg = undefined;
	        }
	
	        return !! caught;
	      }
	
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        var record = entry.completion;
	
	        if (entry.tryLoc === "root") {
	          // Exception thrown outside of any try block that could handle
	          // it, so set the completion value of the entire function to
	          // throw the exception.
	          return handle("end");
	        }
	
	        if (entry.tryLoc <= this.prev) {
	          var hasCatch = hasOwn.call(entry, "catchLoc");
	          var hasFinally = hasOwn.call(entry, "finallyLoc");
	
	          if (hasCatch && hasFinally) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            } else if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }
	
	          } else if (hasCatch) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            }
	
	          } else if (hasFinally) {
	            if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }
	
	          } else {
	            throw new Error("try statement without catch or finally");
	          }
	        }
	      }
	    },
	
	    abrupt: function(type, arg) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc <= this.prev &&
	            hasOwn.call(entry, "finallyLoc") &&
	            this.prev < entry.finallyLoc) {
	          var finallyEntry = entry;
	          break;
	        }
	      }
	
	      if (finallyEntry &&
	          (type === "break" ||
	           type === "continue") &&
	          finallyEntry.tryLoc <= arg &&
	          arg <= finallyEntry.finallyLoc) {
	        // Ignore the finally entry if control is not jumping to a
	        // location outside the try/catch block.
	        finallyEntry = null;
	      }
	
	      var record = finallyEntry ? finallyEntry.completion : {};
	      record.type = type;
	      record.arg = arg;
	
	      if (finallyEntry) {
	        this.method = "next";
	        this.next = finallyEntry.finallyLoc;
	        return ContinueSentinel;
	      }
	
	      return this.complete(record);
	    },
	
	    complete: function(record, afterLoc) {
	      if (record.type === "throw") {
	        throw record.arg;
	      }
	
	      if (record.type === "break" ||
	          record.type === "continue") {
	        this.next = record.arg;
	      } else if (record.type === "return") {
	        this.rval = this.arg = record.arg;
	        this.method = "return";
	        this.next = "end";
	      } else if (record.type === "normal" && afterLoc) {
	        this.next = afterLoc;
	      }
	
	      return ContinueSentinel;
	    },
	
	    finish: function(finallyLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.finallyLoc === finallyLoc) {
	          this.complete(entry.completion, entry.afterLoc);
	          resetTryEntry(entry);
	          return ContinueSentinel;
	        }
	      }
	    },
	
	    "catch": function(tryLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc === tryLoc) {
	          var record = entry.completion;
	          if (record.type === "throw") {
	            var thrown = record.arg;
	            resetTryEntry(entry);
	          }
	          return thrown;
	        }
	      }
	
	      // The context.catch method must only be called with a location
	      // argument that corresponds to a known catch block.
	      throw new Error("illegal catch attempt");
	    },
	
	    delegateYield: function(iterable, resultName, nextLoc) {
	      this.delegate = {
	        iterator: values(iterable),
	        resultName: resultName,
	        nextLoc: nextLoc
	      };
	
	      if (this.method === "next") {
	        // Deliberately forget the last sent value so that we don't
	        // accidentally pass it on to the delegate.
	        this.arg = undefined;
	      }
	
	      return ContinueSentinel;
	    }
	  };
	})(
	  // In sloppy mode, unbound `this` refers to the global object, fallback to
	  // Function constructor if we're in global strict mode. That is sadly a form
	  // of indirect eval which violates Content Security Policy.
	  (function() { return this })() || Function("return this")()
	);


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _promise = __webpack_require__(5);
	
	var _promise2 = _interopRequireDefault(_promise);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (fn) {
	  return function () {
	    var gen = fn.apply(this, arguments);
	    return new _promise2.default(function (resolve, reject) {
	      function step(key, arg) {
	        try {
	          var info = gen[key](arg);
	          var value = info.value;
	        } catch (error) {
	          reject(error);
	          return;
	        }
	
	        if (info.done) {
	          resolve(value);
	        } else {
	          return _promise2.default.resolve(value).then(function (value) {
	            step("next", value);
	          }, function (err) {
	            step("throw", err);
	          });
	        }
	      }
	
	      return step("next");
	    });
	  };
	};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(6), __esModule: true };

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(7);
	__webpack_require__(8);
	__webpack_require__(52);
	__webpack_require__(56);
	__webpack_require__(74);
	__webpack_require__(75);
	module.exports = __webpack_require__(16).Promise;


/***/ }),
/* 7 */
/***/ (function(module, exports) {



/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $at = __webpack_require__(9)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(12)(String, 'String', function (iterated) {
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function () {
	  var O = this._t;
	  var index = this._i;
	  var point;
	  if (index >= O.length) return { value: undefined, done: true };
	  point = $at(O, index);
	  this._i += point.length;
	  return { value: point, done: false };
	});


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(10);
	var defined = __webpack_require__(11);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function (TO_STRING) {
	  return function (that, pos) {
	    var s = String(defined(that));
	    var i = toInteger(pos);
	    var l = s.length;
	    var a, b;
	    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};


/***/ }),
/* 10 */
/***/ (function(module, exports) {

	// 7.1.4 ToInteger
	var ceil = Math.ceil;
	var floor = Math.floor;
	module.exports = function (it) {
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};


/***/ }),
/* 11 */
/***/ (function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function (it) {
	  if (it == undefined) throw TypeError("Can't call method on  " + it);
	  return it;
	};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY = __webpack_require__(13);
	var $export = __webpack_require__(14);
	var redefine = __webpack_require__(30);
	var hide = __webpack_require__(19);
	var Iterators = __webpack_require__(31);
	var $iterCreate = __webpack_require__(32);
	var setToStringTag = __webpack_require__(48);
	var getPrototypeOf = __webpack_require__(50);
	var ITERATOR = __webpack_require__(49)('iterator');
	var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
	var FF_ITERATOR = '@@iterator';
	var KEYS = 'keys';
	var VALUES = 'values';
	
	var returnThis = function () { return this; };
	
	module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function (kind) {
	    if (!BUGGY && kind in proto) return proto[kind];
	    switch (kind) {
	      case KEYS: return function keys() { return new Constructor(this, kind); };
	      case VALUES: return function values() { return new Constructor(this, kind); };
	    } return function entries() { return new Constructor(this, kind); };
	  };
	  var TAG = NAME + ' Iterator';
	  var DEF_VALUES = DEFAULT == VALUES;
	  var VALUES_BUG = false;
	  var proto = Base.prototype;
	  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
	  var $default = $native || getMethod(DEFAULT);
	  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
	  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
	  var methods, key, IteratorPrototype;
	  // Fix native
	  if ($anyNative) {
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
	    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if (DEF_VALUES && $native && $native.name !== VALUES) {
	    VALUES_BUG = true;
	    $default = function values() { return $native.call(this); };
	  }
	  // Define iterator
	  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG] = returnThis;
	  if (DEFAULT) {
	    methods = {
	      values: DEF_VALUES ? $default : getMethod(VALUES),
	      keys: IS_SET ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if (FORCED) for (key in methods) {
	      if (!(key in proto)) redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};


/***/ }),
/* 13 */
/***/ (function(module, exports) {

	module.exports = true;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(15);
	var core = __webpack_require__(16);
	var ctx = __webpack_require__(17);
	var hide = __webpack_require__(19);
	var has = __webpack_require__(29);
	var PROTOTYPE = 'prototype';
	
	var $export = function (type, name, source) {
	  var IS_FORCED = type & $export.F;
	  var IS_GLOBAL = type & $export.G;
	  var IS_STATIC = type & $export.S;
	  var IS_PROTO = type & $export.P;
	  var IS_BIND = type & $export.B;
	  var IS_WRAP = type & $export.W;
	  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
	  var expProto = exports[PROTOTYPE];
	  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
	  var key, own, out;
	  if (IS_GLOBAL) source = name;
	  for (key in source) {
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if (own && has(exports, key)) continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function (C) {
	      var F = function (a, b, c) {
	        if (this instanceof C) {
	          switch (arguments.length) {
	            case 0: return new C();
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if (IS_PROTO) {
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library`
	module.exports = $export;


/***/ }),
/* 15 */
/***/ (function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self
	  // eslint-disable-next-line no-new-func
	  : Function('return this')();
	if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 16 */
/***/ (function(module, exports) {

	var core = module.exports = { version: '2.6.1' };
	if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(18);
	module.exports = function (fn, that, length) {
	  aFunction(fn);
	  if (that === undefined) return fn;
	  switch (length) {
	    case 1: return function (a) {
	      return fn.call(that, a);
	    };
	    case 2: return function (a, b) {
	      return fn.call(that, a, b);
	    };
	    case 3: return function (a, b, c) {
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function (/* ...args */) {
	    return fn.apply(that, arguments);
	  };
	};


/***/ }),
/* 18 */
/***/ (function(module, exports) {

	module.exports = function (it) {
	  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
	  return it;
	};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	var dP = __webpack_require__(20);
	var createDesc = __webpack_require__(28);
	module.exports = __webpack_require__(24) ? function (object, key, value) {
	  return dP.f(object, key, createDesc(1, value));
	} : function (object, key, value) {
	  object[key] = value;
	  return object;
	};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(21);
	var IE8_DOM_DEFINE = __webpack_require__(23);
	var toPrimitive = __webpack_require__(27);
	var dP = Object.defineProperty;
	
	exports.f = __webpack_require__(24) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if (IE8_DOM_DEFINE) try {
	    return dP(O, P, Attributes);
	  } catch (e) { /* empty */ }
	  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
	  if ('value' in Attributes) O[P] = Attributes.value;
	  return O;
	};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(22);
	module.exports = function (it) {
	  if (!isObject(it)) throw TypeError(it + ' is not an object!');
	  return it;
	};


/***/ }),
/* 22 */
/***/ (function(module, exports) {

	module.exports = function (it) {
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(24) && !__webpack_require__(25)(function () {
	  return Object.defineProperty(__webpack_require__(26)('div'), 'a', { get: function () { return 7; } }).a != 7;
	});


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(25)(function () {
	  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
	});


/***/ }),
/* 25 */
/***/ (function(module, exports) {

	module.exports = function (exec) {
	  try {
	    return !!exec();
	  } catch (e) {
	    return true;
	  }
	};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(22);
	var document = __webpack_require__(15).document;
	// typeof document.createElement is 'object' in old IE
	var is = isObject(document) && isObject(document.createElement);
	module.exports = function (it) {
	  return is ? document.createElement(it) : {};
	};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(22);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function (it, S) {
	  if (!isObject(it)) return it;
	  var fn, val;
	  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
	  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
	  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
	  throw TypeError("Can't convert object to primitive value");
	};


/***/ }),
/* 28 */
/***/ (function(module, exports) {

	module.exports = function (bitmap, value) {
	  return {
	    enumerable: !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable: !(bitmap & 4),
	    value: value
	  };
	};


/***/ }),
/* 29 */
/***/ (function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function (it, key) {
	  return hasOwnProperty.call(it, key);
	};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(19);


/***/ }),
/* 31 */
/***/ (function(module, exports) {

	module.exports = {};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var create = __webpack_require__(33);
	var descriptor = __webpack_require__(28);
	var setToStringTag = __webpack_require__(48);
	var IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(19)(IteratorPrototype, __webpack_require__(49)('iterator'), function () { return this; });
	
	module.exports = function (Constructor, NAME, next) {
	  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
	  setToStringTag(Constructor, NAME + ' Iterator');
	};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject = __webpack_require__(21);
	var dPs = __webpack_require__(34);
	var enumBugKeys = __webpack_require__(46);
	var IE_PROTO = __webpack_require__(43)('IE_PROTO');
	var Empty = function () { /* empty */ };
	var PROTOTYPE = 'prototype';
	
	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function () {
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(26)('iframe');
	  var i = enumBugKeys.length;
	  var lt = '<';
	  var gt = '>';
	  var iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(47).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};
	
	module.exports = Object.create || function create(O, Properties) {
	  var result;
	  if (O !== null) {
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty();
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

	var dP = __webpack_require__(20);
	var anObject = __webpack_require__(21);
	var getKeys = __webpack_require__(35);
	
	module.exports = __webpack_require__(24) ? Object.defineProperties : function defineProperties(O, Properties) {
	  anObject(O);
	  var keys = getKeys(Properties);
	  var length = keys.length;
	  var i = 0;
	  var P;
	  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys = __webpack_require__(36);
	var enumBugKeys = __webpack_require__(46);
	
	module.exports = Object.keys || function keys(O) {
	  return $keys(O, enumBugKeys);
	};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	var has = __webpack_require__(29);
	var toIObject = __webpack_require__(37);
	var arrayIndexOf = __webpack_require__(40)(false);
	var IE_PROTO = __webpack_require__(43)('IE_PROTO');
	
	module.exports = function (object, names) {
	  var O = toIObject(object);
	  var i = 0;
	  var result = [];
	  var key;
	  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while (names.length > i) if (has(O, key = names[i++])) {
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(38);
	var defined = __webpack_require__(11);
	module.exports = function (it) {
	  return IObject(defined(it));
	};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(39);
	// eslint-disable-next-line no-prototype-builtins
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};


/***/ }),
/* 39 */
/***/ (function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function (it) {
	  return toString.call(it).slice(8, -1);
	};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(37);
	var toLength = __webpack_require__(41);
	var toAbsoluteIndex = __webpack_require__(42);
	module.exports = function (IS_INCLUDES) {
	  return function ($this, el, fromIndex) {
	    var O = toIObject($this);
	    var length = toLength(O.length);
	    var index = toAbsoluteIndex(fromIndex, length);
	    var value;
	    // Array#includes uses SameValueZero equality algorithm
	    // eslint-disable-next-line no-self-compare
	    if (IS_INCLUDES && el != el) while (length > index) {
	      value = O[index++];
	      // eslint-disable-next-line no-self-compare
	      if (value != value) return true;
	    // Array#indexOf ignores holes, Array#includes - not
	    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
	      if (O[index] === el) return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(10);
	var min = Math.min;
	module.exports = function (it) {
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(10);
	var max = Math.max;
	var min = Math.min;
	module.exports = function (index, length) {
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(44)('keys');
	var uid = __webpack_require__(45);
	module.exports = function (key) {
	  return shared[key] || (shared[key] = uid(key));
	};


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

	var core = __webpack_require__(16);
	var global = __webpack_require__(15);
	var SHARED = '__core-js_shared__';
	var store = global[SHARED] || (global[SHARED] = {});
	
	(module.exports = function (key, value) {
	  return store[key] || (store[key] = value !== undefined ? value : {});
	})('versions', []).push({
	  version: core.version,
	  mode: __webpack_require__(13) ? 'pure' : 'global',
	  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
	});


/***/ }),
/* 45 */
/***/ (function(module, exports) {

	var id = 0;
	var px = Math.random();
	module.exports = function (key) {
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};


/***/ }),
/* 46 */
/***/ (function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

	var document = __webpack_require__(15).document;
	module.exports = document && document.documentElement;


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

	var def = __webpack_require__(20).f;
	var has = __webpack_require__(29);
	var TAG = __webpack_require__(49)('toStringTag');
	
	module.exports = function (it, tag, stat) {
	  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
	};


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

	var store = __webpack_require__(44)('wks');
	var uid = __webpack_require__(45);
	var Symbol = __webpack_require__(15).Symbol;
	var USE_SYMBOL = typeof Symbol == 'function';
	
	var $exports = module.exports = function (name) {
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};
	
	$exports.store = store;


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has = __webpack_require__(29);
	var toObject = __webpack_require__(51);
	var IE_PROTO = __webpack_require__(43)('IE_PROTO');
	var ObjectProto = Object.prototype;
	
	module.exports = Object.getPrototypeOf || function (O) {
	  O = toObject(O);
	  if (has(O, IE_PROTO)) return O[IE_PROTO];
	  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(11);
	module.exports = function (it) {
	  return Object(defined(it));
	};


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(53);
	var global = __webpack_require__(15);
	var hide = __webpack_require__(19);
	var Iterators = __webpack_require__(31);
	var TO_STRING_TAG = __webpack_require__(49)('toStringTag');
	
	var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
	  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
	  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
	  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
	  'TextTrackList,TouchList').split(',');
	
	for (var i = 0; i < DOMIterables.length; i++) {
	  var NAME = DOMIterables[i];
	  var Collection = global[NAME];
	  var proto = Collection && Collection.prototype;
	  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(54);
	var step = __webpack_require__(55);
	var Iterators = __webpack_require__(31);
	var toIObject = __webpack_require__(37);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(12)(Array, 'Array', function (iterated, kind) {
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function () {
	  var O = this._t;
	  var kind = this._k;
	  var index = this._i++;
	  if (!O || index >= O.length) {
	    this._t = undefined;
	    return step(1);
	  }
	  if (kind == 'keys') return step(0, index);
	  if (kind == 'values') return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');
	
	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;
	
	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');


/***/ }),
/* 54 */
/***/ (function(module, exports) {

	module.exports = function () { /* empty */ };


/***/ }),
/* 55 */
/***/ (function(module, exports) {

	module.exports = function (done, value) {
	  return { value: value, done: !!done };
	};


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY = __webpack_require__(13);
	var global = __webpack_require__(15);
	var ctx = __webpack_require__(17);
	var classof = __webpack_require__(57);
	var $export = __webpack_require__(14);
	var isObject = __webpack_require__(22);
	var aFunction = __webpack_require__(18);
	var anInstance = __webpack_require__(58);
	var forOf = __webpack_require__(59);
	var speciesConstructor = __webpack_require__(63);
	var task = __webpack_require__(64).set;
	var microtask = __webpack_require__(66)();
	var newPromiseCapabilityModule = __webpack_require__(67);
	var perform = __webpack_require__(68);
	var userAgent = __webpack_require__(69);
	var promiseResolve = __webpack_require__(70);
	var PROMISE = 'Promise';
	var TypeError = global.TypeError;
	var process = global.process;
	var versions = process && process.versions;
	var v8 = versions && versions.v8 || '';
	var $Promise = global[PROMISE];
	var isNode = classof(process) == 'process';
	var empty = function () { /* empty */ };
	var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
	var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;
	
	var USE_NATIVE = !!function () {
	  try {
	    // correct subclassing with @@species support
	    var promise = $Promise.resolve(1);
	    var FakePromise = (promise.constructor = {})[__webpack_require__(49)('species')] = function (exec) {
	      exec(empty, empty);
	    };
	    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
	    return (isNode || typeof PromiseRejectionEvent == 'function')
	      && promise.then(empty) instanceof FakePromise
	      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
	      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
	      // we can't detect it synchronously, so just check versions
	      && v8.indexOf('6.6') !== 0
	      && userAgent.indexOf('Chrome/66') === -1;
	  } catch (e) { /* empty */ }
	}();
	
	// helpers
	var isThenable = function (it) {
	  var then;
	  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
	};
	var notify = function (promise, isReject) {
	  if (promise._n) return;
	  promise._n = true;
	  var chain = promise._c;
	  microtask(function () {
	    var value = promise._v;
	    var ok = promise._s == 1;
	    var i = 0;
	    var run = function (reaction) {
	      var handler = ok ? reaction.ok : reaction.fail;
	      var resolve = reaction.resolve;
	      var reject = reaction.reject;
	      var domain = reaction.domain;
	      var result, then, exited;
	      try {
	        if (handler) {
	          if (!ok) {
	            if (promise._h == 2) onHandleUnhandled(promise);
	            promise._h = 1;
	          }
	          if (handler === true) result = value;
	          else {
	            if (domain) domain.enter();
	            result = handler(value); // may throw
	            if (domain) {
	              domain.exit();
	              exited = true;
	            }
	          }
	          if (result === reaction.promise) {
	            reject(TypeError('Promise-chain cycle'));
	          } else if (then = isThenable(result)) {
	            then.call(result, resolve, reject);
	          } else resolve(result);
	        } else reject(value);
	      } catch (e) {
	        if (domain && !exited) domain.exit();
	        reject(e);
	      }
	    };
	    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
	    promise._c = [];
	    promise._n = false;
	    if (isReject && !promise._h) onUnhandled(promise);
	  });
	};
	var onUnhandled = function (promise) {
	  task.call(global, function () {
	    var value = promise._v;
	    var unhandled = isUnhandled(promise);
	    var result, handler, console;
	    if (unhandled) {
	      result = perform(function () {
	        if (isNode) {
	          process.emit('unhandledRejection', value, promise);
	        } else if (handler = global.onunhandledrejection) {
	          handler({ promise: promise, reason: value });
	        } else if ((console = global.console) && console.error) {
	          console.error('Unhandled promise rejection', value);
	        }
	      });
	      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
	      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
	    } promise._a = undefined;
	    if (unhandled && result.e) throw result.v;
	  });
	};
	var isUnhandled = function (promise) {
	  return promise._h !== 1 && (promise._a || promise._c).length === 0;
	};
	var onHandleUnhandled = function (promise) {
	  task.call(global, function () {
	    var handler;
	    if (isNode) {
	      process.emit('rejectionHandled', promise);
	    } else if (handler = global.onrejectionhandled) {
	      handler({ promise: promise, reason: promise._v });
	    }
	  });
	};
	var $reject = function (value) {
	  var promise = this;
	  if (promise._d) return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  promise._v = value;
	  promise._s = 2;
	  if (!promise._a) promise._a = promise._c.slice();
	  notify(promise, true);
	};
	var $resolve = function (value) {
	  var promise = this;
	  var then;
	  if (promise._d) return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  try {
	    if (promise === value) throw TypeError("Promise can't be resolved itself");
	    if (then = isThenable(value)) {
	      microtask(function () {
	        var wrapper = { _w: promise, _d: false }; // wrap
	        try {
	          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
	        } catch (e) {
	          $reject.call(wrapper, e);
	        }
	      });
	    } else {
	      promise._v = value;
	      promise._s = 1;
	      notify(promise, false);
	    }
	  } catch (e) {
	    $reject.call({ _w: promise, _d: false }, e); // wrap
	  }
	};
	
	// constructor polyfill
	if (!USE_NATIVE) {
	  // 25.4.3.1 Promise(executor)
	  $Promise = function Promise(executor) {
	    anInstance(this, $Promise, PROMISE, '_h');
	    aFunction(executor);
	    Internal.call(this);
	    try {
	      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
	    } catch (err) {
	      $reject.call(this, err);
	    }
	  };
	  // eslint-disable-next-line no-unused-vars
	  Internal = function Promise(executor) {
	    this._c = [];             // <- awaiting reactions
	    this._a = undefined;      // <- checked in isUnhandled reactions
	    this._s = 0;              // <- state
	    this._d = false;          // <- done
	    this._v = undefined;      // <- value
	    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
	    this._n = false;          // <- notify
	  };
	  Internal.prototype = __webpack_require__(71)($Promise.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected) {
	      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
	      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
	      reaction.fail = typeof onRejected == 'function' && onRejected;
	      reaction.domain = isNode ? process.domain : undefined;
	      this._c.push(reaction);
	      if (this._a) this._a.push(reaction);
	      if (this._s) notify(this, false);
	      return reaction.promise;
	    },
	    // 25.4.5.1 Promise.prototype.catch(onRejected)
	    'catch': function (onRejected) {
	      return this.then(undefined, onRejected);
	    }
	  });
	  OwnPromiseCapability = function () {
	    var promise = new Internal();
	    this.promise = promise;
	    this.resolve = ctx($resolve, promise, 1);
	    this.reject = ctx($reject, promise, 1);
	  };
	  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
	    return C === $Promise || C === Wrapper
	      ? new OwnPromiseCapability(C)
	      : newGenericPromiseCapability(C);
	  };
	}
	
	$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
	__webpack_require__(48)($Promise, PROMISE);
	__webpack_require__(72)(PROMISE);
	Wrapper = __webpack_require__(16)[PROMISE];
	
	// statics
	$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r) {
	    var capability = newPromiseCapability(this);
	    var $$reject = capability.reject;
	    $$reject(r);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x) {
	    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
	  }
	});
	$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(73)(function (iter) {
	  $Promise.all(iter)['catch'](empty);
	})), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable) {
	    var C = this;
	    var capability = newPromiseCapability(C);
	    var resolve = capability.resolve;
	    var reject = capability.reject;
	    var result = perform(function () {
	      var values = [];
	      var index = 0;
	      var remaining = 1;
	      forOf(iterable, false, function (promise) {
	        var $index = index++;
	        var alreadyCalled = false;
	        values.push(undefined);
	        remaining++;
	        C.resolve(promise).then(function (value) {
	          if (alreadyCalled) return;
	          alreadyCalled = true;
	          values[$index] = value;
	          --remaining || resolve(values);
	        }, reject);
	      });
	      --remaining || resolve(values);
	    });
	    if (result.e) reject(result.v);
	    return capability.promise;
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable) {
	    var C = this;
	    var capability = newPromiseCapability(C);
	    var reject = capability.reject;
	    var result = perform(function () {
	      forOf(iterable, false, function (promise) {
	        C.resolve(promise).then(capability.resolve, reject);
	      });
	    });
	    if (result.e) reject(result.v);
	    return capability.promise;
	  }
	});


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(39);
	var TAG = __webpack_require__(49)('toStringTag');
	// ES3 wrong here
	var ARG = cof(function () { return arguments; }()) == 'Arguments';
	
	// fallback for IE11 Script Access Denied error
	var tryGet = function (it, key) {
	  try {
	    return it[key];
	  } catch (e) { /* empty */ }
	};
	
	module.exports = function (it) {
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};


/***/ }),
/* 58 */
/***/ (function(module, exports) {

	module.exports = function (it, Constructor, name, forbiddenField) {
	  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
	    throw TypeError(name + ': incorrect invocation!');
	  } return it;
	};


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

	var ctx = __webpack_require__(17);
	var call = __webpack_require__(60);
	var isArrayIter = __webpack_require__(61);
	var anObject = __webpack_require__(21);
	var toLength = __webpack_require__(41);
	var getIterFn = __webpack_require__(62);
	var BREAK = {};
	var RETURN = {};
	var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
	  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
	  var f = ctx(fn, that, entries ? 2 : 1);
	  var index = 0;
	  var length, step, iterator, result;
	  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
	    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	    if (result === BREAK || result === RETURN) return result;
	  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
	    result = call(iterator, f, step.value, entries);
	    if (result === BREAK || result === RETURN) return result;
	  }
	};
	exports.BREAK = BREAK;
	exports.RETURN = RETURN;


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(21);
	module.exports = function (iterator, fn, value, entries) {
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch (e) {
	    var ret = iterator['return'];
	    if (ret !== undefined) anObject(ret.call(iterator));
	    throw e;
	  }
	};


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators = __webpack_require__(31);
	var ITERATOR = __webpack_require__(49)('iterator');
	var ArrayProto = Array.prototype;
	
	module.exports = function (it) {
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

	var classof = __webpack_require__(57);
	var ITERATOR = __webpack_require__(49)('iterator');
	var Iterators = __webpack_require__(31);
	module.exports = __webpack_require__(16).getIteratorMethod = function (it) {
	  if (it != undefined) return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.3.20 SpeciesConstructor(O, defaultConstructor)
	var anObject = __webpack_require__(21);
	var aFunction = __webpack_require__(18);
	var SPECIES = __webpack_require__(49)('species');
	module.exports = function (O, D) {
	  var C = anObject(O).constructor;
	  var S;
	  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
	};


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

	var ctx = __webpack_require__(17);
	var invoke = __webpack_require__(65);
	var html = __webpack_require__(47);
	var cel = __webpack_require__(26);
	var global = __webpack_require__(15);
	var process = global.process;
	var setTask = global.setImmediate;
	var clearTask = global.clearImmediate;
	var MessageChannel = global.MessageChannel;
	var Dispatch = global.Dispatch;
	var counter = 0;
	var queue = {};
	var ONREADYSTATECHANGE = 'onreadystatechange';
	var defer, channel, port;
	var run = function () {
	  var id = +this;
	  // eslint-disable-next-line no-prototype-builtins
	  if (queue.hasOwnProperty(id)) {
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	};
	var listener = function (event) {
	  run.call(event.data);
	};
	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if (!setTask || !clearTask) {
	  setTask = function setImmediate(fn) {
	    var args = [];
	    var i = 1;
	    while (arguments.length > i) args.push(arguments[i++]);
	    queue[++counter] = function () {
	      // eslint-disable-next-line no-new-func
	      invoke(typeof fn == 'function' ? fn : Function(fn), args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clearTask = function clearImmediate(id) {
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if (__webpack_require__(39)(process) == 'process') {
	    defer = function (id) {
	      process.nextTick(ctx(run, id, 1));
	    };
	  // Sphere (JS game engine) Dispatch API
	  } else if (Dispatch && Dispatch.now) {
	    defer = function (id) {
	      Dispatch.now(ctx(run, id, 1));
	    };
	  // Browsers with MessageChannel, includes WebWorkers
	  } else if (MessageChannel) {
	    channel = new MessageChannel();
	    port = channel.port2;
	    channel.port1.onmessage = listener;
	    defer = ctx(port.postMessage, port, 1);
	  // Browsers with postMessage, skip WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
	    defer = function (id) {
	      global.postMessage(id + '', '*');
	    };
	    global.addEventListener('message', listener, false);
	  // IE8-
	  } else if (ONREADYSTATECHANGE in cel('script')) {
	    defer = function (id) {
	      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
	        html.removeChild(this);
	        run.call(id);
	      };
	    };
	  // Rest old browsers
	  } else {
	    defer = function (id) {
	      setTimeout(ctx(run, id, 1), 0);
	    };
	  }
	}
	module.exports = {
	  set: setTask,
	  clear: clearTask
	};


/***/ }),
/* 65 */
/***/ (function(module, exports) {

	// fast apply, http://jsperf.lnkit.com/fast-apply/5
	module.exports = function (fn, args, that) {
	  var un = that === undefined;
	  switch (args.length) {
	    case 0: return un ? fn()
	                      : fn.call(that);
	    case 1: return un ? fn(args[0])
	                      : fn.call(that, args[0]);
	    case 2: return un ? fn(args[0], args[1])
	                      : fn.call(that, args[0], args[1]);
	    case 3: return un ? fn(args[0], args[1], args[2])
	                      : fn.call(that, args[0], args[1], args[2]);
	    case 4: return un ? fn(args[0], args[1], args[2], args[3])
	                      : fn.call(that, args[0], args[1], args[2], args[3]);
	  } return fn.apply(that, args);
	};


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(15);
	var macrotask = __webpack_require__(64).set;
	var Observer = global.MutationObserver || global.WebKitMutationObserver;
	var process = global.process;
	var Promise = global.Promise;
	var isNode = __webpack_require__(39)(process) == 'process';
	
	module.exports = function () {
	  var head, last, notify;
	
	  var flush = function () {
	    var parent, fn;
	    if (isNode && (parent = process.domain)) parent.exit();
	    while (head) {
	      fn = head.fn;
	      head = head.next;
	      try {
	        fn();
	      } catch (e) {
	        if (head) notify();
	        else last = undefined;
	        throw e;
	      }
	    } last = undefined;
	    if (parent) parent.enter();
	  };
	
	  // Node.js
	  if (isNode) {
	    notify = function () {
	      process.nextTick(flush);
	    };
	  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
	  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
	    var toggle = true;
	    var node = document.createTextNode('');
	    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
	    notify = function () {
	      node.data = toggle = !toggle;
	    };
	  // environments with maybe non-completely correct, but existent Promise
	  } else if (Promise && Promise.resolve) {
	    // Promise.resolve without an argument throws an error in LG WebOS 2
	    var promise = Promise.resolve(undefined);
	    notify = function () {
	      promise.then(flush);
	    };
	  // for other environments - macrotask based on:
	  // - setImmediate
	  // - MessageChannel
	  // - window.postMessag
	  // - onreadystatechange
	  // - setTimeout
	  } else {
	    notify = function () {
	      // strange IE + webpack dev server bug - use .call(global)
	      macrotask.call(global, flush);
	    };
	  }
	
	  return function (fn) {
	    var task = { fn: fn, next: undefined };
	    if (last) last.next = task;
	    if (!head) {
	      head = task;
	      notify();
	    } last = task;
	  };
	};


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// 25.4.1.5 NewPromiseCapability(C)
	var aFunction = __webpack_require__(18);
	
	function PromiseCapability(C) {
	  var resolve, reject;
	  this.promise = new C(function ($$resolve, $$reject) {
	    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
	    resolve = $$resolve;
	    reject = $$reject;
	  });
	  this.resolve = aFunction(resolve);
	  this.reject = aFunction(reject);
	}
	
	module.exports.f = function (C) {
	  return new PromiseCapability(C);
	};


/***/ }),
/* 68 */
/***/ (function(module, exports) {

	module.exports = function (exec) {
	  try {
	    return { e: false, v: exec() };
	  } catch (e) {
	    return { e: true, v: e };
	  }
	};


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(15);
	var navigator = global.navigator;
	
	module.exports = navigator && navigator.userAgent || '';


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(21);
	var isObject = __webpack_require__(22);
	var newPromiseCapability = __webpack_require__(67);
	
	module.exports = function (C, x) {
	  anObject(C);
	  if (isObject(x) && x.constructor === C) return x;
	  var promiseCapability = newPromiseCapability.f(C);
	  var resolve = promiseCapability.resolve;
	  resolve(x);
	  return promiseCapability.promise;
	};


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

	var hide = __webpack_require__(19);
	module.exports = function (target, src, safe) {
	  for (var key in src) {
	    if (safe && target[key]) target[key] = src[key];
	    else hide(target, key, src[key]);
	  } return target;
	};


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var global = __webpack_require__(15);
	var core = __webpack_require__(16);
	var dP = __webpack_require__(20);
	var DESCRIPTORS = __webpack_require__(24);
	var SPECIES = __webpack_require__(49)('species');
	
	module.exports = function (KEY) {
	  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
	  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
	    configurable: true,
	    get: function () { return this; }
	  });
	};


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

	var ITERATOR = __webpack_require__(49)('iterator');
	var SAFE_CLOSING = false;
	
	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function () { SAFE_CLOSING = true; };
	  // eslint-disable-next-line no-throw-literal
	  Array.from(riter, function () { throw 2; });
	} catch (e) { /* empty */ }
	
	module.exports = function (exec, skipClosing) {
	  if (!skipClosing && !SAFE_CLOSING) return false;
	  var safe = false;
	  try {
	    var arr = [7];
	    var iter = arr[ITERATOR]();
	    iter.next = function () { return { done: safe = true }; };
	    arr[ITERATOR] = function () { return iter; };
	    exec(arr);
	  } catch (e) { /* empty */ }
	  return safe;
	};


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-promise-finally
	'use strict';
	var $export = __webpack_require__(14);
	var core = __webpack_require__(16);
	var global = __webpack_require__(15);
	var speciesConstructor = __webpack_require__(63);
	var promiseResolve = __webpack_require__(70);
	
	$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
	  var C = speciesConstructor(this, core.Promise || global.Promise);
	  var isFunction = typeof onFinally == 'function';
	  return this.then(
	    isFunction ? function (x) {
	      return promiseResolve(C, onFinally()).then(function () { return x; });
	    } : onFinally,
	    isFunction ? function (e) {
	      return promiseResolve(C, onFinally()).then(function () { throw e; });
	    } : onFinally
	  );
	} });


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/tc39/proposal-promise-try
	var $export = __webpack_require__(14);
	var newPromiseCapability = __webpack_require__(67);
	var perform = __webpack_require__(68);
	
	$export($export.S, 'Promise', { 'try': function (callbackfn) {
	  var promiseCapability = newPromiseCapability.f(this);
	  var result = perform(callbackfn);
	  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
	  return promiseCapability.promise;
	} });


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.solo = exports.fpapi = exports.signTransaction = exports.getaddress = exports.checkpinstate = exports.getinfo = exports.rand = exports.coins = exports.retCode = undefined;
	
	var _regenerator = __webpack_require__(1);
	
	var _regenerator2 = _interopRequireDefault(_regenerator);
	
	var _asyncToGenerator2 = __webpack_require__(4);
	
	var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
	
	var _constants = __webpack_require__(77);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _require = __webpack_require__(77),
	    rets = _require.rets,
	    cmdTable = _require.cmdTable;
	
	var _require2 = __webpack_require__(78),
	    getResult = _require2.getResult,
	    parseAddr = _require2.parseAddr,
	    getTxLen = _require2.getTxLen,
	    getHexID = _require2.getHexID,
	    strToAsc = _require2.strToAsc,
	    getHexLen = _require2.getHexLen;
	
	var _require3 = __webpack_require__(79),
	    sendcmd = _require3.sendcmd;
	
	var retCode = exports.retCode = {
		ok: 0,
		nok: 1,
		nodevice: 2,
		wait: 3,
		pinerr: 4,
		notsupprot: 10
	};
	
	var coins = exports.coins = {
		CYB: "CYB",
		BTC: "BTC"
	};
	var lastState = void 0;
	var enroll = function () {
		var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(fpID) {
			var code;
			return _regenerator2.default.wrap(function _callee$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							lastState = "";
							_context.t0 = getResult;
							_context.next = 4;
							return sendcmd(cmdTable.fp.fpenroll);
	
						case 4:
							_context.t1 = _context.sent;
							code = (0, _context.t0)(_context.t1).code;
							return _context.abrupt("return", { code: code });
	
						case 7:
						case "end":
							return _context.stop();
					}
				}
			}, _callee, undefined);
		}));
	
		return function enroll(_x) {
			return _ref.apply(this, arguments);
		};
	}();
	var verify = function () {
		var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(fpID, amount) {
			var code;
			return _regenerator2.default.wrap(function _callee2$(_context2) {
				while (1) {
					switch (_context2.prev = _context2.next) {
						case 0:
							lastState = "";
							_context2.t0 = getResult;
							_context2.next = 4;
							return sendcmd(cmdTable.fp.fpverify);
	
						case 4:
							_context2.t1 = _context2.sent;
							code = (0, _context2.t0)(_context2.t1).code;
							return _context2.abrupt("return", { code: code });
	
						case 7:
						case "end":
							return _context2.stop();
					}
				}
			}, _callee2, undefined);
		}));
	
		return function verify(_x2, _x3) {
			return _ref2.apply(this, arguments);
		};
	}();
	
	var getstate = function () {
		var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(op) {
			var info, state, id;
			return _regenerator2.default.wrap(function _callee3$(_context3) {
				while (1) {
					switch (_context3.prev = _context3.next) {
						case 0:
							_context3.t0 = getResult;
							_context3.next = 3;
							return sendcmd(cmdTable.fp.fpstate);
	
						case 3:
							_context3.t1 = _context3.sent;
							info = (0, _context3.t0)(_context3.t1);
	
							if (!(info.code != rets.ok)) {
								_context3.next = 7;
								break;
							}
	
							return _context3.abrupt("return", { code: info.code });
	
						case 7:
							state = void 0;
							id = void 0;
	
							if (!(op === _constants.fp_ops.enroll)) {
								_context3.next = 16;
								break;
							}
	
							state = info.result.resData.substring(0, 2);
	
							if (!(state == lastState)) {
								_context3.next = 14;
								break;
							}
	
							state = _constants.fp_state.idle;
							return _context3.abrupt("return", { code: info.code, result: { state: state } });
	
						case 14:
							lastState = state;
							return _context3.abrupt("return", { code: info.code, result: { state: state } });
	
						case 16:
							if (!(op === _constants.fp_ops.verify)) {
								_context3.next = 20;
								break;
							}
	
							id = { index: info.result.resData.substring(2, 4), uid: info.result.resData.substring(4, 68) };
							state = info.result.resData.substring(0, 2);
							return _context3.abrupt("return", { code: info.code, result: { state: state, id: id } });
	
						case 20:
							return _context3.abrupt("return", { code: info.code });
	
						case 21:
						case "end":
							return _context3.stop();
					}
				}
			}, _callee3, undefined);
		}));
	
		return function getstate(_x4) {
			return _ref3.apply(this, arguments);
		};
	}();
	
	var del = function () {
		var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(fpID, isAll) {
			var code;
			return _regenerator2.default.wrap(function _callee4$(_context4) {
				while (1) {
					switch (_context4.prev = _context4.next) {
						case 0:
							code = "";
	
							if (!isAll) {
								_context4.next = 10;
								break;
							}
	
							_context4.t0 = getResult;
							_context4.next = 5;
							return sendcmd(cmdTable.fp.fpdelete_all);
	
						case 5:
							_context4.t1 = _context4.sent;
							code = (0, _context4.t0)(_context4.t1).code;
							return _context4.abrupt("return", { code: code });
	
						case 10:
							_context4.t2 = getResult;
							_context4.next = 13;
							return sendcmd(cmdTable.fp.fpdeleteuid + fpID);
	
						case 13:
							_context4.t3 = _context4.sent;
							code = (0, _context4.t2)(_context4.t3).code;
							return _context4.abrupt("return", { code: code });
	
						case 16:
						case "end":
							return _context4.stop();
					}
				}
			}, _callee4, undefined);
		}));
	
		return function del(_x5, _x6) {
			return _ref4.apply(this, arguments);
		};
	}();
	
	var list = function () {
		var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5() {
			var info, maxAmount, fpTable;
			return _regenerator2.default.wrap(function _callee5$(_context5) {
				while (1) {
					switch (_context5.prev = _context5.next) {
						case 0:
							_context5.t0 = getResult;
							_context5.next = 3;
							return sendcmd(cmdTable.fp.fplist);
	
						case 3:
							_context5.t1 = _context5.sent;
							info = (0, _context5.t0)(_context5.t1);
	
							if (!(info.code != rets.ok)) {
								_context5.next = 7;
								break;
							}
	
							return _context5.abrupt("return", { code: info.code });
	
						case 7:
							maxAmount = info.result.resData.substring(0, 2);
							fpTable = { maxAmount: 10, table: info.result.resData.substring(2, 22) };
							return _context5.abrupt("return", { code: info.code, result: { fpTable: fpTable } });
	
						case 10:
						case "end":
							return _context5.stop();
					}
				}
			}, _callee5, undefined);
		}));
	
		return function list() {
			return _ref5.apply(this, arguments);
		};
	}();
	
	var getid = function () {
		var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(fpID, amount) {
			var hexid, info, uid;
			return _regenerator2.default.wrap(function _callee6$(_context6) {
				while (1) {
					switch (_context6.prev = _context6.next) {
						case 0:
							hexid = getHexID(fpID.toString());
							_context6.t0 = getResult;
							_context6.next = 4;
							return sendcmd(cmdTable.fp.fpgetid + hexid);
	
						case 4:
							_context6.t1 = _context6.sent;
							info = (0, _context6.t0)(_context6.t1);
	
							if (!(info.code != rets.ok)) {
								_context6.next = 8;
								break;
							}
	
							return _context6.abrupt("return", { code: info.code });
	
						case 8:
							uid = { uid: info.result.resData.substring(0, 64) };
							return _context6.abrupt("return", { code: info.code, result: { uid: uid } });
	
						case 10:
						case "end":
							return _context6.stop();
					}
				}
			}, _callee6, undefined);
		}));
	
		return function getid(_x7, _x8) {
			return _ref6.apply(this, arguments);
		};
	}();
	
	var abort = function () {
		var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7() {
			var code;
			return _regenerator2.default.wrap(function _callee7$(_context7) {
				while (1) {
					switch (_context7.prev = _context7.next) {
						case 0:
							lastState = "";
							_context7.t0 = getResult;
							_context7.next = 4;
							return sendcmd(cmdTable.fp.fpabort);
	
						case 4:
							_context7.t1 = _context7.sent;
							code = (0, _context7.t0)(_context7.t1).code;
							return _context7.abrupt("return", { code: code });
	
						case 7:
						case "end":
							return _context7.stop();
					}
				}
			}, _callee7, undefined);
		}));
	
		return function abort() {
			return _ref7.apply(this, arguments);
		};
	}();
	var getsn = function () {
		var _ref8 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee8() {
			var sn, code, res, info;
			return _regenerator2.default.wrap(function _callee8$(_context8) {
				while (1) {
					switch (_context8.prev = _context8.next) {
						case 0:
							sn = "";
							code = rets.nok;
							_context8.next = 4;
							return sendcmd(cmdTable.fp.fpsn);
	
						case 4:
							res = _context8.sent;
							info = getResult(res);
	
							code = info.code;
	
							if (!(code != rets.ok)) {
								_context8.next = 9;
								break;
							}
	
							return _context8.abrupt("return", { code: code });
	
						case 9:
	
							sn = info.result.resData.substring(18, 36);
							return _context8.abrupt("return", { code: code, result: { sn: sn } });
	
						case 11:
						case "end":
							return _context8.stop();
					}
				}
			}, _callee8, undefined);
		}));
	
		return function getsn() {
			return _ref8.apply(this, arguments);
		};
	}();
	
	var verifypin = function () {
		var _ref9 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee9(pin) {
			var cmd, pinasc, hexlen, code, res, info;
			return _regenerator2.default.wrap(function _callee9$(_context9) {
				while (1) {
					switch (_context9.prev = _context9.next) {
						case 0:
							cmd = cmdTable.fp.fpverifypin;
							pinasc = strToAsc(pin);
							hexlen = getHexLen(pin);
	
							cmd = cmd + hexlen + pinasc;
	
							code = rets.nok;
							_context9.next = 7;
							return sendcmd(cmd);
	
						case 7:
							res = _context9.sent;
							info = getResult(res);
	
							code = info.code;
							if (code != rets.ok) {
								code = retCode.pinerr;
							}
							return _context9.abrupt("return", { code: code });
	
						case 12:
						case "end":
							return _context9.stop();
					}
				}
			}, _callee9, undefined);
		}));
	
		return function verifypin(_x9) {
			return _ref9.apply(this, arguments);
		};
	}();
	
	var changepin = function () {
		var _ref10 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee10(oldpin, newpin) {
			var cmd, pinoldasc, pinnewasc, lenstr, hexlen, code, res, info;
			return _regenerator2.default.wrap(function _callee10$(_context10) {
				while (1) {
					switch (_context10.prev = _context10.next) {
						case 0:
							cmd = cmdTable.fp.fpchangepin;
							pinoldasc = strToAsc(oldpin);
							pinnewasc = strToAsc(newpin);
							lenstr = oldpin + "1" + newpin;
							hexlen = getHexLen(lenstr);
	
							cmd = cmd + hexlen + pinoldasc + "ff" + pinnewasc;
							code = rets.nok;
							_context10.next = 9;
							return sendcmd(cmd);
	
						case 9:
							res = _context10.sent;
							info = getResult(res);
	
							code = info.code;
							if (code != rets.ok) {
								code = retCode.pinerr;
							}
							return _context10.abrupt("return", { code: code });
	
						case 14:
						case "end":
							return _context10.stop();
					}
				}
			}, _callee10, undefined);
		}));
	
		return function changepin(_x10, _x11) {
			return _ref10.apply(this, arguments);
		};
	}();
	
	var writedata = function () {
		var _ref11 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee11(data) {
			var cmd, ascdata, hexlen, Apdulen, code, res, info;
			return _regenerator2.default.wrap(function _callee11$(_context11) {
				while (1) {
					switch (_context11.prev = _context11.next) {
						case 0:
							cmd = cmdTable.fp.fpwritedata;
							ascdata = strToAsc(data);
							hexlen = getHexLen(data);
							Apdulen = getHexLen(data + "1");
	
							cmd = cmd + Apdulen + hexlen + ascdata;
							code = rets.nok;
							_context11.next = 8;
							return sendcmd("00a4000000");
	
						case 8:
							res = _context11.sent;
							info = getResult(res);
	
							code = info.code;
	
							if (!(code != rets.ok)) {
								_context11.next = 13;
								break;
							}
	
							return _context11.abrupt("return", { code: code });
	
						case 13:
							_context11.next = 15;
							return sendcmd("00a40100021502");
	
						case 15:
							res = _context11.sent;
	
							info = getResult(res);
							code = info.code;
	
							if (!(code != rets.ok)) {
								_context11.next = 20;
								break;
							}
	
							return _context11.abrupt("return", { code: code });
	
						case 20:
							_context11.next = 22;
							return sendcmd("00a40200025200");
	
						case 22:
							res = _context11.sent;
	
							info = getResult(res);
							code = info.code;
	
							if (!(code != rets.ok)) {
								_context11.next = 27;
								break;
							}
	
							return _context11.abrupt("return", { code: code });
	
						case 27:
							_context11.next = 29;
							return sendcmd(cmd);
	
						case 29:
							res = _context11.sent;
	
							info = getResult(res);
							code = info.code;
							return _context11.abrupt("return", { code: code });
	
						case 33:
						case "end":
							return _context11.stop();
					}
				}
			}, _callee11, undefined);
		}));
	
		return function writedata(_x12) {
			return _ref11.apply(this, arguments);
		};
	}();
	
	var readdata = function () {
		var _ref12 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee12(len) {
			var code, hexlen, cmd, res, info, data, res_len, str, i, tmp, charcode;
			return _regenerator2.default.wrap(function _callee12$(_context12) {
				while (1) {
					switch (_context12.prev = _context12.next) {
						case 0:
							code = rets.nok;
							hexlen = getHexID(len);
							cmd = cmdTable.fp.fpreaddata + hexlen;
							_context12.next = 5;
							return sendcmd("00a4000000");
	
						case 5:
							res = _context12.sent;
							info = getResult(res);
	
							code = info.code;
	
							if (!(code != rets.ok)) {
								_context12.next = 10;
								break;
							}
	
							return _context12.abrupt("return", { code: code });
	
						case 10:
							_context12.next = 12;
							return sendcmd("00a40100021502");
	
						case 12:
							res = _context12.sent;
	
							info = getResult(res);
							code = info.code;
	
							if (!(code != rets.ok)) {
								_context12.next = 17;
								break;
							}
	
							return _context12.abrupt("return", { code: code });
	
						case 17:
							_context12.next = 19;
							return sendcmd("00a40200025200");
	
						case 19:
							res = _context12.sent;
	
							info = getResult(res);
							code = info.code;
	
							if (!(code != rets.ok)) {
								_context12.next = 24;
								break;
							}
	
							return _context12.abrupt("return", { code: code });
	
						case 24:
							_context12.next = 26;
							return sendcmd(cmd);
	
						case 26:
							res = _context12.sent;
	
							info = getResult(res);
							code = info.code;
	
							if (!(code != rets.ok)) {
								_context12.next = 31;
								break;
							}
	
							return _context12.abrupt("return", { code: code });
	
						case 31:
							data = info.result.resData.substring(0, info.result.resData.length);
							res_len = parseInt(data.substring(0, 2), 16);
	
							if (!(res_len > len)) {
								_context12.next = 36;
								break;
							}
	
							code = retCode.nok;
							return _context12.abrupt("return", { code: code });
	
						case 36:
							str = data.substring(2, data.length);
	
							data = "";
							for (i = 0; i < res_len; i++) {
								tmp = str.substring(2 * i, 2 * i + 2);
								charcode = parseInt(tmp, 16);
	
								data = data + String.fromCharCode(charcode);
							}
	
							return _context12.abrupt("return", { code: code, result: { data: data } });
	
						case 40:
						case "end":
							return _context12.stop();
					}
				}
			}, _callee12, undefined);
		}));
	
		return function readdata(_x13) {
			return _ref12.apply(this, arguments);
		};
	}();
	
	var rand = exports.rand = function () {
		var _ref13 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee13() {
			var random, code, res, info;
			return _regenerator2.default.wrap(function _callee13$(_context13) {
				while (1) {
					switch (_context13.prev = _context13.next) {
						case 0:
							random = "";
							code = rets.nok;
	
						case 2:
							_context13.next = 4;
							return sendcmd(cmdTable.rand);
	
						case 4:
							res = _context13.sent;
	
						case 5:
							if (1) {
								_context13.next = 2;
								break;
							}
	
						case 6:
							info = getResult(res);
	
							code = info.code;
	
							if (!(code != rets.ok)) {
								_context13.next = 10;
								break;
							}
	
							return _context13.abrupt("return", { code: code });
	
						case 10:
	
							random = info.result.resData.substring(0, 2);
							return _context13.abrupt("return", { code: code, result: { random: random } });
	
						case 12:
						case "end":
							return _context13.stop();
					}
				}
			}, _callee13, undefined);
		}));
	
		return function rand() {
			return _ref13.apply(this, arguments);
		};
	}();
	
	var getinfo = exports.getinfo = function () {
		var _ref14 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee14() {
			var sn, code, res, info;
			return _regenerator2.default.wrap(function _callee14$(_context14) {
				while (1) {
					switch (_context14.prev = _context14.next) {
						case 0:
							sn = "";
							code = rets.nok;
							_context14.next = 4;
							return sendcmd(cmdTable.solo.getsn);
	
						case 4:
							res = _context14.sent;
							info = getResult(res);
	
							code = info.code;
	
							if (!(code != rets.ok)) {
								_context14.next = 9;
								break;
							}
	
							return _context14.abrupt("return", { code: code });
	
						case 9:
	
							sn = info.result.resData.substring(8, 72);
							return _context14.abrupt("return", { code: code, result: { sn: sn } });
	
						case 11:
						case "end":
							return _context14.stop();
					}
				}
			}, _callee14, undefined);
		}));
	
		return function getinfo() {
			return _ref14.apply(this, arguments);
		};
	}();
	
	var checkpinstate = exports.checkpinstate = function () {
		var _ref15 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee15() {
			var code, state, res, info;
			return _regenerator2.default.wrap(function _callee15$(_context15) {
				while (1) {
					switch (_context15.prev = _context15.next) {
						case 0:
							code = rets.nok;
							state = void 0;
							_context15.next = 4;
							return sendcmd(cmdTable.solo.pinstate);
	
						case 4:
							res = _context15.sent;
							info = getResult(res);
	
							code = info.code;
							if (code === rets.ok) state = info.result.resData.substring(0, 2);
							return _context15.abrupt("return", { code: code, result: { state: state } });
	
						case 9:
						case "end":
							return _context15.stop();
					}
				}
			}, _callee15, undefined);
		}));
	
		return function checkpinstate() {
			return _ref15.apply(this, arguments);
		};
	}();
	
	//coin: coins.CYB
	var getaddress = exports.getaddress = function () {
		var _ref16 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee16(coin) {
			var cmd, code, res, info, address;
			return _regenerator2.default.wrap(function _callee16$(_context16) {
				while (1) {
					switch (_context16.prev = _context16.next) {
						case 0:
							cmd = cmdTable.solo.cmdRecover[coin];
							code = void 0;
	
							if (cmd) {
								_context16.next = 4;
								break;
							}
	
							return _context16.abrupt("return", { code: retCode.notsupprot });
	
						case 4:
							_context16.next = 6;
							return sendcmd(cmd);
	
						case 6:
							res = _context16.sent;
							info = getResult(res);
	
							code = info.code;
	
							if (!(info.code != rets.ok)) {
								_context16.next = 11;
								break;
							}
	
							return _context16.abrupt("return", { code: code });
	
						case 11:
							_context16.next = 13;
							return sendcmd(cmdTable.solo.getaddress);
	
						case 13:
							res = _context16.sent;
	
							info = getResult(res);
							code = info.code;
	
							if (!(info.code != rets.ok)) {
								_context16.next = 18;
								break;
							}
	
							return _context16.abrupt("return", { code: code });
	
						case 18:
							address = info.result.resData.substring(0, info.result.resData.length - 4);
	
							address = parseAddr(address);
							return _context16.abrupt("return", { code: code, result: { address: address } });
	
						case 21:
						case "end":
							return _context16.stop();
					}
				}
			}, _callee16, undefined);
		}));
	
		return function getaddress(_x14) {
			return _ref16.apply(this, arguments);
		};
	}();
	
	var signTransaction = exports.signTransaction = function () {
		var _ref17 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee17(coin, tx) {
			var code, res, info, sign;
			return _regenerator2.default.wrap(function _callee17$(_context17) {
				while (1) {
					switch (_context17.prev = _context17.next) {
						case 0:
	
							window.log.w("enter sign txLen = %d\n", tx.length);
							code = rets.nok;
	
							if (!(tx.length > 255)) {
								_context17.next = 4;
								break;
							}
	
							return _context17.abrupt("return", { code: code });
	
						case 4:
							_context17.next = 6;
							return sendcmd(cmdTable.solo.sign[coin] + getTxLen(tx) + tx);
	
						case 6:
							res = _context17.sent;
							info = getResult(res);
	
							code = info.code;
	
							if (!(info.code != rets.ok)) {
								_context17.next = 11;
								break;
							}
	
							return _context17.abrupt("return", { code: code });
	
						case 11:
							_context17.next = 13;
							return sendcmd(cmdTable.solo.getbtn);
	
						case 13:
							res = _context17.sent;
	
							info = getResult(res);
	
						case 15:
							if (info.code == retCode.wait) {
								_context17.next = 11;
								break;
							}
	
						case 16:
							if (!(info.code != rets.ok)) {
								_context17.next = 18;
								break;
							}
	
							return _context17.abrupt("return", { code: code });
	
						case 18:
							sign = info.result.resData.substring(0, info.result.resData.length - 4);
							return _context17.abrupt("return", { code: code, result: { sign: sign } });
	
						case 20:
						case "end":
							return _context17.stop();
					}
				}
			}, _callee17, undefined);
		}));
	
		return function signTransaction(_x15, _x16) {
			return _ref17.apply(this, arguments);
		};
	}();
	
	var fpapi = { enroll: enroll, verify: verify, getstate: getstate, del: del, list: list, getid: getid, abort: abort, getsn: getsn, verifypin: verifypin, changepin: changepin, writedata: writedata, readdata: readdata };
	var solo = { getinfo: getinfo, checkpinstate: checkpinstate, getaddress: getaddress, signTransaction: signTransaction };
	exports.fpapi = fpapi;
	exports.solo = solo;

/***/ }),
/* 77 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var vKHtag = exports.vKHtag = "3B7D8101";
	
	var errorCode = exports.errorCode = {
	    succuess: 0,
	    fail: 1,
	    timeout: 5
	};
	var rets = exports.rets = {
	    ok: 0,
	    nok: 1,
	    nodevice: 2
	};
	
	var fetchBase = exports.fetchBase = 1000;
	
	var codeSwTable = exports.codeSwTable = {
	    sw6805: 2,
	    sw6802: 2,
	    sw9000: 0,
	    sw6e00: 1,
	    sw6d00: 1,
	    sw6f00: 3,
	    sw6993: 9,
	    sw6a84: 8
	};
	
	var commDefine = exports.commDefine = {
	    maxPacketLength: 50,
	    headerLength: 8,
	    packetControlLength: 6,
	    fisrtPacket: "0001",
	    midPacket: "0002",
	    lastPacket: "0000",
	    pilotTimeout: 2,
	    normalTimeout: 5,
	    cmdOK: "9000",
	    cmdNG: "68",
	    noDevice: "6805",
	    appID: "6802",
	    waitBtn: "6F00",
	    errToLong: "6700",
	    apduMaxLen: "510",
	    strMaxLen: "ff"
	};
	var pinState = exports.pinState = {
	    notset: "03",
	    locked: "02",
	    login: "01",
	    logout: "00"
	};
	var lifeCycle = exports.lifeCycle = {
	    init: "01",
	    user: "02",
	    factory: "04"
	};
	
	var fp_state = exports.fp_state = {
	    wait: "E0",
	    good: "E4",
	    bad: "E6",
	    fast: "E7",
	    done: "E1",
	    match: "F1",
	    notmatch: "F2",
	    matchwait: "F0",
	    matchfast: "F4",
	    idle: "FF"
	};
	
	var fp_ops = exports.fp_ops = {
	    enroll: "enroll",
	    verify: "verify"
	};
	
	var cmdTable = exports.cmdTable = {
	    solo: {
	        getsn: "8064000000",
	        rand: "0084000008",
	        pinstate: "8064010000",
	        cmdRecover: {
	            CYB: "806002000c000000000100000080000000",
	            BTC: "806002000c000000000100000080000000"
	        },
	        getaddress: "8062020100",
	        commtest: "00850000",
	        sign: {
	            CYB: "80a00200",
	            BTC: "80a00200"
	        },
	        getbtn: "80ae000000"
	
	    },
	    fp: {
	        fpenroll: "00f1000000",
	        fpverify: "00f2000000",
	        fpstate: "00f3000000",
	        fplist: "00f4000000",
	        fpdeleteuid: "00f5010120",
	        fpdelete_all: "00f5000000",
	        fpgetid: "00f6000001",
	        fpabort: "00f7000000",
	        fpsn: "8030000011",
	        fpverifypin: "00200001",
	        fpchangepin: "00240001",
	        fpwritedata: "00d60000",
	        fpreaddata: "00b00000"
	    }
	
	};

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.getTxLen = getTxLen;
	exports.getHexLen = getHexLen;
	exports.getHexID = getHexID;
	exports.strToAsc = strToAsc;
	exports.getResult = getResult;
	exports.rand = rand;
	exports.padding = padding;
	exports.parseAddr = parseAddr;
	
	var _require = __webpack_require__(77),
	    rets = _require.rets,
	    commDefine = _require.commDefine,
	    codeSwTable = _require.codeSwTable;
	
	function convert_code(sw) {
		window.log.w("sw%s", sw);
		var code = rets.nok;
		if (sw.substring(0, 2) == "61") {
			code = fetchBase + parseInt(sw.substring(2, 2));
			return;
		}
	
		code = codeSwTable["sw" + sw.toLowerCase()];
		if (!code) code = 10;
		return code;
	}
	
	function getTxLen(tx) {
		var tmpLen = tx.length / 2;
		var strTxLen = tmpLen.toString(16);
		if (strTxLen.length % 2 != 0) strTxLen = "0" + strTxLen;
		return strTxLen;
	}
	
	function getHexLen(tx) {
		var tmpLen = tx.length;
		var strTxLen = tmpLen.toString(16);
		if (strTxLen.length % 2 != 0) strTxLen = "0" + strTxLen;
		return strTxLen;
	}
	
	function getHexID(id) {
		var hexid = id.toString(16);
		if (hexid.length % 2 != 0) hexid = "0" + hexid;
		return hexid;
	}
	
	function strToAsc(str) {
		var ascstr = "";
		var len = str.length;
		for (var i = 0; i < len; i++) {
			var tmp = str.charAt(i);
			tmp = tmp.charCodeAt();
			tmp = getHexID(tmp);
			ascstr = ascstr + tmp;
		}
		return ascstr;
	}
	
	function getResult(res) {
		var code = rets.nok;
		window.log.w("res lenth %d, res %s", res.length, res);
		if (res.length == 4) {
			//not 9000
			if (res != commDefine.cmdOK) {
				code = convert_code(res);
				return { code: code };
			} else {
				//"9000"
				code = rets.ok;
				window.log.w("code", code);
				return { code: code };
			}
		} else if (res.length > 4) {
			var resData = res;
			var sw = res.substring(res.length - 4, res.length);
			if (sw == commDefine.cmdOK) {
				code = rets.ok;
				resData = resData.substring(0, res.length - 4);
				return { code: code, result: { resData: resData } };
			} else {
				//something happen, not right status
				code = rets.nok;
				return { code: code };
			}
		}
		return { code: code };
	}
	
	function rand() {
		var stack = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
		return stack.splice(parseInt(Math.random() * stack.length), 1)[0];
	}
	
	function padding(send_data, send_len) {
		for (var i = 0; i < 64 - 8 - send_len; i++) {
			send_data = send_data + rand();
		}
		return send_data;
	}
	
	function parseAddr(strAddr) {
		var arr = new Array();
		var addr = "";
		for (var i = 0; i < strAddr.length; i = i + 2) {
			var el = strAddr.substring(i, i + 2);
			arr[i / 2] = parseInt(el, 16);
		}
		for (var j = 0; j < strAddr.length / 2; j++) {
			addr = addr + String.fromCharCode(arr[j]);
		}
	
		return addr;
	}

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.sendcmd = undefined;
	
	var _regenerator = __webpack_require__(1);
	
	var _regenerator2 = _interopRequireDefault(_regenerator);
	
	var _promise = __webpack_require__(5);
	
	var _promise2 = _interopRequireDefault(_promise);
	
	var _asyncToGenerator2 = __webpack_require__(4);
	
	var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _require = __webpack_require__(78),
	    padding = _require.padding;
	
	var _require2 = __webpack_require__(77),
	    vKHtag = _require2.vKHtag,
	    commDefine = _require2.commDefine;
	
	var _require3 = __webpack_require__(80),
	    B64_encode = _require3.B64_encode,
	    B64_decode = _require3.B64_decode;
	
	var _require4 = __webpack_require__(81),
	    sign = _require4.sign;
	
	__webpack_require__(84);
	var isFinal = 0;
	
	function cmdCallback(response) {
		var res;
		//window.log.d("cmdCallback response.errorCode = %d\n", response.errorCode);
		if (!response.errorCode) {
			if (!isFinal) {
				//window.log.d("not final\n");
				res = commDefine.cmdOK;
				return res;
			}
			var rv = response.signatureData;
			res = B64_decode(rv).join('');
			res = res.substring(5, res.length);
			window.log.d("final res %s\n", res);
		} else {
			var strcode = response.errorCode.toString(16);
			if (strcode.length % 2 != 0) strcode = "0" + strcode;
			res = commDefine.cmdNG + strcode;
			window.log.d("error code =%s \n", res);
		}
		return res;
	}
	
	var sendcmd = exports.sendcmd = function () {
		var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(send_buf) {
			var callbackflag, res, mutiFirst, strSendLen, send_len, pacBuf, tmpLen, tmpFirstBuf, tmpMidBuf, vKHb64, vKHb32, key, self;
			return _regenerator2.default.wrap(function _callee$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							callbackflag = 0;
							mutiFirst = 1;
							send_len = send_buf.length;
	
							//final callback
							//window.log.d("enter sendcmd\n");
							window.log.d("len =%d, send_buf = %s\n", send_buf.length, send_buf);
							//org send_buf	
							//header(8) +len(2) + 00 + packet_type(2) + data(50)
							//each packet 50 chars
	
						case 4:
							if (!(send_len > 0)) {
								_context.next = 22;
								break;
							}
	
							//if(send_len<=commDefine.maxPacketLength - commDefine.headerLength - commDefine.packetControlLength)
							if (send_len <= commDefine.maxPacketLength) {
								// if less then 50 send and get response back
								window.log.d("final case \n");
								send_len = send_len / 2;
								strSendLen = send_len.toString(16);
								if (strSendLen.length % 2 != 0) strSendLen = "0" + strSendLen;
	
								pacBuf = strSendLen + commDefine.lastPacket + send_buf;
								pacBuf = padding(pacBuf, send_len * 2 + commDefine.packetControlLength);
								send_len = 0;
								isFinal = 1;
							}
							//if(send_len>commDefine.maxPacketLength - commDefine.headerLength - commDefine.packetControlLength)
							if (send_len > commDefine.maxPacketLength) {
								//if more then 50 send first 50 and -50
								window.log.d("mid case \n");
								tmpLen = commDefine.maxPacketLength / 2;
	
								strSendLen = tmpLen.toString(16);
								if (strSendLen.length % 2 != 0) strSendLen = "0" + strSendLen;
	
								if (mutiFirst == 1) {
									// first in multi packet index = 1
									tmpFirstBuf = send_buf.substring(0, commDefine.maxPacketLength);
	
									pacBuf = strSendLen + commDefine.fisrtPacket + tmpFirstBuf;
									mutiFirst = 0;
								} else {
									tmpMidBuf = send_buf.substring(0, commDefine.maxPacketLength);
	
									pacBuf = strSendLen + commDefine.midPacket + tmpMidBuf;
								}
								pacBuf = padding(pacBuf, commDefine.maxPacketLength + commDefine.packetControlLength);
								send_buf = send_buf.substring(commDefine.maxPacketLength, send_len);
								send_len = send_len - commDefine.maxPacketLength;
								isFinal = 0;
							}
	
							pacBuf = vKHtag + pacBuf;
							window.log.d("pacBuf %s \n", pacBuf);
							window.log.d("send len = %d", send_len);
	
							vKHb64 = B64_encode(pacBuf, 64); //real buffer
	
							vKHb32 = B64_encode(pacBuf, 32);
							key = {};
	
							key["version"] = "U2F_V2";
							key["keyHandle"] = vKHb64;
							self = undefined;
							_context.next = 18;
							return new _promise2.default(function (resolve, reject) {
								sign(location.origin, vKHb32, [key], function (response) {
									res = cmdCallback(response);
									resolve(res);
								}, commDefine.normalTimeout);
							});
	
						case 18:
							if (!(res.length == 4 && res != commDefine.cmdOK)) {
								_context.next = 20;
								break;
							}
	
							return _context.abrupt('return', res);
	
						case 20:
							_context.next = 4;
							break;
	
						case 22:
							return _context.abrupt('return', res);
	
						case 23:
						case 'end':
							return _context.stop();
					}
				}
			}, _callee, undefined);
		}));
	
		return function sendcmd(_x) {
			return _ref.apply(this, arguments);
		};
	}();

/***/ }),
/* 80 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.B64_encode = B64_encode;
	exports.base64_encode = base64_encode;
	exports.B64_decode = B64_decode;
	// Copyright 2014 Google Inc. All rights reserved
	//
	// Use of this source code is governed by a BSD-style
	// license that can be found in the LICENSE file or at
	// https://developers.google.com/open-source/licenses/bsd
	
	// WebSafeBase64Escape and Unescape.
	function B64_encode(bytes, opt_length) {
	  if (!opt_length) opt_length = bytes.length;
	  var b64out = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_';
	  var result = '';
	  var shift = 0;
	  var accu = 0;
	  var inputIndex = 0;
	
	  while (opt_length--) {
	    accu <<= 8;
	    accu |= bytes[inputIndex++].charCodeAt();
	    shift += 8;
	    while (shift >= 6) {
	      var i = accu >> shift - 6 & 63;
	      result += b64out.charAt(i);
	      shift -= 6;
	    }
	  }
	  if (shift) {
	    accu <<= 8;
	    shift += 8;
	    var i = accu >> shift - 6 & 63;
	    result += b64out.charAt(i);
	  }
	  return result;
	}
	
	// Normal base64 encode; not websafe, including padding.
	function base64_encode(bytes, opt_length) {
	  if (!opt_length) opt_length = bytes.length;
	  var b64out = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
	  var result = '';
	  var shift = 0;
	  var accu = 0;
	  var inputIndex = 0;
	  while (opt_length--) {
	    accu <<= 8;
	    accu |= bytes[inputIndex++];
	    shift += 8;
	    while (shift >= 6) {
	      var i = accu >> shift - 6 & 63;
	      result += b64out.charAt(i);
	      shift -= 6;
	    }
	  }
	  if (shift) {
	    accu <<= 8;
	    shift += 8;
	    var i = accu >> shift - 6 & 63;
	    result += b64out.charAt(i);
	  }
	  while (result.length % 4) {
	    result += '=';
	  }return result;
	}
	
	var B64_inmap = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 0, 0, 0, 0, 64, 0, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 0, 0, 0, 0, 0];
	
	function B64_decode(string) {
	  var bytes = [];
	  var accu = 0;
	  var shift = 0;
	  for (var i = 0; i < string.length; ++i) {
	    var c = string.charCodeAt(i);
	    if (c < 32 || c > 127 || !B64_inmap[c - 32]) return [];
	    accu <<= 6;
	    accu |= B64_inmap[c - 32] - 1;
	    shift += 6;
	    if (shift >= 8) {
	      bytes.push(String.fromCharCode(accu >> shift - 8 & 255));
	      shift -= 8;
	    }
	  }
	  return bytes;
	}

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

	//Copyright 2014-2015 Google Inc. All rights reserved.
	
	//Use of this source code is governed by a BSD-style
	//license that can be found in the LICENSE file or at
	//https://developers.google.com/open-source/licenses/bsd
	
	/**
	 * @fileoverview The U2F api.
	 */
	'use strict';
	
	/**
	 * Namespace for the U2F api.
	 * @type {Object}
	 */
	
	var _stringify = __webpack_require__(82);
	
	var _stringify2 = _interopRequireDefault(_stringify);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var u2f = u2f || {};
	
	/**
	  * Require integration
	  */
	if (true) {
	  module.exports = u2f;
	}
	
	/**
	 * FIDO U2F Javascript API Version
	 * @number
	 */
	var js_api_version;
	
	/**
	 * The U2F extension id
	 * @const {string}
	 */
	// The Chrome packaged app extension ID.
	// Uncomment this if you want to deploy a server instance that uses
	// the package Chrome app and does not require installing the U2F Chrome extension.
	u2f.EXTENSION_ID = 'kmendfapggjehodndflmmgagdbamhnfd';
	// The U2F Chrome extension ID.
	// Uncomment this if you want to deploy a server instance that uses
	// the U2F Chrome extension to authenticate.
	// u2f.EXTENSION_ID = 'pfboblefjcgdjicmnffhdgionmgcdmne';
	
	
	/**
	 * Message types for messsages to/from the extension
	 * @const
	 * @enum {string}
	 */
	u2f.MessageTypes = {
	  'U2F_REGISTER_REQUEST': 'u2f_register_request',
	  'U2F_REGISTER_RESPONSE': 'u2f_register_response',
	  'U2F_SIGN_REQUEST': 'u2f_sign_request',
	  'U2F_SIGN_RESPONSE': 'u2f_sign_response',
	  'U2F_GET_API_VERSION_REQUEST': 'u2f_get_api_version_request',
	  'U2F_GET_API_VERSION_RESPONSE': 'u2f_get_api_version_response'
	};
	
	/**
	 * Response status codes
	 * @const
	 * @enum {number}
	 */
	u2f.ErrorCodes = {
	  'OK': 0,
	  'OTHER_ERROR': 1,
	  'BAD_REQUEST': 2,
	  'CONFIGURATION_UNSUPPORTED': 3,
	  'DEVICE_INELIGIBLE': 4,
	  'TIMEOUT': 5
	};
	
	/**
	 * A message for registration requests
	 * @typedef {{
	 *   type: u2f.MessageTypes,
	 *   appId: ?string,
	 *   timeoutSeconds: ?number,
	 *   requestId: ?number
	 * }}
	 */
	u2f.U2fRequest;
	
	/**
	 * A message for registration responses
	 * @typedef {{
	 *   type: u2f.MessageTypes,
	 *   responseData: (u2f.Error | u2f.RegisterResponse | u2f.SignResponse),
	 *   requestId: ?number
	 * }}
	 */
	u2f.U2fResponse;
	
	/**
	 * An error object for responses
	 * @typedef {{
	 *   errorCode: u2f.ErrorCodes,
	 *   errorMessage: ?string
	 * }}
	 */
	u2f.Error;
	
	/**
	 * Data object for a single sign request.
	 * @typedef {enum {BLUETOOTH_RADIO, BLUETOOTH_LOW_ENERGY, USB, NFC}}
	 */
	u2f.Transport;
	
	/**
	 * Data object for a single sign request.
	 * @typedef {Array<u2f.Transport>}
	 */
	u2f.Transports;
	
	/**
	 * Data object for a single sign request.
	 * @typedef {{
	 *   version: string,
	 *   challenge: string,
	 *   keyHandle: string,
	 *   appId: string
	 * }}
	 */
	u2f.SignRequest;
	
	/**
	 * Data object for a sign response.
	 * @typedef {{
	 *   keyHandle: string,
	 *   signatureData: string,
	 *   clientData: string
	 * }}
	 */
	u2f.SignResponse;
	
	/**
	 * Data object for a registration request.
	 * @typedef {{
	 *   version: string,
	 *   challenge: string
	 * }}
	 */
	u2f.RegisterRequest;
	
	/**
	 * Data object for a registration response.
	 * @typedef {{
	 *   version: string,
	 *   keyHandle: string,
	 *   transports: Transports,
	 *   appId: string
	 * }}
	 */
	u2f.RegisterResponse;
	
	/**
	 * Data object for a registered key.
	 * @typedef {{
	 *   version: string,
	 *   keyHandle: string,
	 *   transports: ?Transports,
	 *   appId: ?string
	 * }}
	 */
	u2f.RegisteredKey;
	
	/**
	 * Data object for a get API register response.
	 * @typedef {{
	 *   js_api_version: number
	 * }}
	 */
	u2f.GetJsApiVersionResponse;
	
	//Low level MessagePort API support
	
	/**
	 * Sets up a MessagePort to the U2F extension using the
	 * available mechanisms.
	 * @param {function((MessagePort|u2f.WrappedChromeRuntimePort_))} callback
	 */
	u2f.getMessagePort = function (callback) {
	  if (typeof chrome != 'undefined' && chrome.runtime) {
	    // The actual message here does not matter, but we need to get a reply
	    // for the callback to run. Thus, send an empty signature request
	    // in order to get a failure response.
	    var msg = {
	      type: u2f.MessageTypes.U2F_SIGN_REQUEST,
	      signRequests: []
	    };
	    chrome.runtime.sendMessage(u2f.EXTENSION_ID, msg, function () {
	      if (!chrome.runtime.lastError) {
	        // We are on a whitelisted origin and can talk directly
	        // with the extension.
	        u2f.getChromeRuntimePort_(callback);
	      } else {
	        // chrome.runtime was available, but we couldn't message
	        // the extension directly, use iframe
	        u2f.getIframePort_(callback);
	      }
	    });
	  } else if (u2f.isAndroidChrome_()) {
	    u2f.getAuthenticatorPort_(callback);
	  } else if (u2f.isIosChrome_()) {
	    u2f.getIosPort_(callback);
	  } else {
	    // chrome.runtime was not available at all, which is normal
	    // when this origin doesn't have access to any extensions.
	    u2f.getIframePort_(callback);
	  }
	};
	
	/**
	 * Detect chrome running on android based on the browser's useragent.
	 * @private
	 */
	u2f.isAndroidChrome_ = function () {
	  var userAgent = navigator.userAgent;
	  return userAgent.indexOf('Chrome') != -1 && userAgent.indexOf('Android') != -1;
	};
	
	/**
	 * Detect chrome running on iOS based on the browser's platform.
	 * @private
	 */
	u2f.isIosChrome_ = function () {
	  return ["iPhone", "iPad", "iPod"].indexOf(navigator.platform) > -1;
	};
	
	/**
	 * Connects directly to the extension via chrome.runtime.connect.
	 * @param {function(u2f.WrappedChromeRuntimePort_)} callback
	 * @private
	 */
	u2f.getChromeRuntimePort_ = function (callback) {
	  var port = chrome.runtime.connect(u2f.EXTENSION_ID, { 'includeTlsChannelId': true });
	  setTimeout(function () {
	    callback(new u2f.WrappedChromeRuntimePort_(port));
	  }, 0);
	};
	
	/**
	 * Return a 'port' abstraction to the Authenticator app.
	 * @param {function(u2f.WrappedAuthenticatorPort_)} callback
	 * @private
	 */
	u2f.getAuthenticatorPort_ = function (callback) {
	  setTimeout(function () {
	    callback(new u2f.WrappedAuthenticatorPort_());
	  }, 0);
	};
	
	/**
	 * Return a 'port' abstraction to the iOS client app.
	 * @param {function(u2f.WrappedIosPort_)} callback
	 * @private
	 */
	u2f.getIosPort_ = function (callback) {
	  setTimeout(function () {
	    callback(new u2f.WrappedIosPort_());
	  }, 0);
	};
	
	/**
	 * A wrapper for chrome.runtime.Port that is compatible with MessagePort.
	 * @param {Port} port
	 * @constructor
	 * @private
	 */
	u2f.WrappedChromeRuntimePort_ = function (port) {
	  this.port_ = port;
	};
	
	/**
	 * Format and return a sign request compliant with the JS API version supported by the extension.
	 * @param {Array<u2f.SignRequest>} signRequests
	 * @param {number} timeoutSeconds
	 * @param {number} reqId
	 * @return {Object}
	 */
	u2f.formatSignRequest_ = function (appId, challenge, registeredKeys, timeoutSeconds, reqId) {
	  if (js_api_version === undefined || js_api_version < 1.1) {
	    // Adapt request to the 1.0 JS API
	    var signRequests = [];
	    for (var i = 0; i < registeredKeys.length; i++) {
	      signRequests[i] = {
	        version: registeredKeys[i].version,
	        challenge: challenge,
	        keyHandle: registeredKeys[i].keyHandle,
	        appId: appId
	      };
	    }
	    return {
	      type: u2f.MessageTypes.U2F_SIGN_REQUEST,
	      signRequests: signRequests,
	      timeoutSeconds: timeoutSeconds,
	      requestId: reqId
	    };
	  }
	  // JS 1.1 API
	  return {
	    type: u2f.MessageTypes.U2F_SIGN_REQUEST,
	    appId: appId,
	    challenge: challenge,
	    registeredKeys: registeredKeys,
	    timeoutSeconds: timeoutSeconds,
	    requestId: reqId
	  };
	};
	
	/**
	 * Format and return a register request compliant with the JS API version supported by the extension..
	 * @param {Array<u2f.SignRequest>} signRequests
	 * @param {Array<u2f.RegisterRequest>} signRequests
	 * @param {number} timeoutSeconds
	 * @param {number} reqId
	 * @return {Object}
	 */
	u2f.formatRegisterRequest_ = function (appId, registeredKeys, registerRequests, timeoutSeconds, reqId) {
	  if (js_api_version === undefined || js_api_version < 1.1) {
	    // Adapt request to the 1.0 JS API
	    for (var i = 0; i < registerRequests.length; i++) {
	      registerRequests[i].appId = appId;
	    }
	    var signRequests = [];
	    for (var i = 0; i < registeredKeys.length; i++) {
	      signRequests[i] = {
	        version: registeredKeys[i].version,
	        challenge: registerRequests[0],
	        keyHandle: registeredKeys[i].keyHandle,
	        appId: appId
	      };
	    }
	    return {
	      type: u2f.MessageTypes.U2F_REGISTER_REQUEST,
	      signRequests: signRequests,
	      registerRequests: registerRequests,
	      timeoutSeconds: timeoutSeconds,
	      requestId: reqId
	    };
	  }
	  // JS 1.1 API
	  return {
	    type: u2f.MessageTypes.U2F_REGISTER_REQUEST,
	    appId: appId,
	    registerRequests: registerRequests,
	    registeredKeys: registeredKeys,
	    timeoutSeconds: timeoutSeconds,
	    requestId: reqId
	  };
	};
	
	/**
	 * Posts a message on the underlying channel.
	 * @param {Object} message
	 */
	u2f.WrappedChromeRuntimePort_.prototype.postMessage = function (message) {
	  this.port_.postMessage(message);
	};
	
	/**
	 * Emulates the HTML 5 addEventListener interface. Works only for the
	 * onmessage event, which is hooked up to the chrome.runtime.Port.onMessage.
	 * @param {string} eventName
	 * @param {function({data: Object})} handler
	 */
	u2f.WrappedChromeRuntimePort_.prototype.addEventListener = function (eventName, handler) {
	  var name = eventName.toLowerCase();
	  if (name == 'message' || name == 'onmessage') {
	    this.port_.onMessage.addListener(function (message) {
	      // Emulate a minimal MessageEvent object
	      handler({ 'data': message });
	    });
	  } else {
	    console.error('WrappedChromeRuntimePort only supports onMessage');
	  }
	};
	
	/**
	 * Wrap the Authenticator app with a MessagePort interface.
	 * @constructor
	 * @private
	 */
	u2f.WrappedAuthenticatorPort_ = function () {
	  this.requestId_ = -1;
	  this.requestObject_ = null;
	};
	
	/**
	 * Launch the Authenticator intent.
	 * @param {Object} message
	 */
	u2f.WrappedAuthenticatorPort_.prototype.postMessage = function (message) {
	  var intentUrl = u2f.WrappedAuthenticatorPort_.INTENT_URL_BASE_ + ';S.request=' + encodeURIComponent((0, _stringify2.default)(message)) + ';end';
	  document.location = intentUrl;
	};
	
	/**
	 * Tells what type of port this is.
	 * @return {String} port type
	 */
	u2f.WrappedAuthenticatorPort_.prototype.getPortType = function () {
	  return "WrappedAuthenticatorPort_";
	};
	
	/**
	 * Emulates the HTML 5 addEventListener interface.
	 * @param {string} eventName
	 * @param {function({data: Object})} handler
	 */
	u2f.WrappedAuthenticatorPort_.prototype.addEventListener = function (eventName, handler) {
	  var name = eventName.toLowerCase();
	  if (name == 'message') {
	    var self = this;
	    /* Register a callback to that executes when
	     * chrome injects the response. */
	    window.addEventListener('message', self.onRequestUpdate_.bind(self, handler), false);
	  } else {
	    console.error('WrappedAuthenticatorPort only supports message');
	  }
	};
	
	/**
	 * Callback invoked  when a response is received from the Authenticator.
	 * @param function({data: Object}) callback
	 * @param {Object} message message Object
	 */
	u2f.WrappedAuthenticatorPort_.prototype.onRequestUpdate_ = function (callback, message) {
	  var messageObject = JSON.parse(message.data);
	  var intentUrl = messageObject['intentURL'];
	
	  var errorCode = messageObject['errorCode'];
	  var responseObject = null;
	  if (messageObject.hasOwnProperty('data')) {
	    responseObject = /** @type {Object} */JSON.parse(messageObject['data']);
	  }
	
	  callback({ 'data': responseObject });
	};
	
	/**
	 * Base URL for intents to Authenticator.
	 * @const
	 * @private
	 */
	/*
	u2f.WrappedAuthenticatorPort_.INTENT_URL_BASE_ =
	  'intent:#Intent;action=com.google.android.apps.authenticator.AUTHENTICATE';
	*/
	u2f.WrappedAuthenticatorPort_.INTENT_URL_BASE_ = 'intent:#Intent;action=com.ledger.android.u2f.bridge.AUTHENTICATE';
	
	/**
	 * Wrap the iOS client app with a MessagePort interface.
	 * @constructor
	 * @private
	 */
	u2f.WrappedIosPort_ = function () {};
	
	/**
	 * Launch the iOS client app request
	 * @param {Object} message
	 */
	u2f.WrappedIosPort_.prototype.postMessage = function (message) {
	  var str = (0, _stringify2.default)(message);
	  var url = "u2f://auth?" + encodeURI(str);
	  location.replace(url);
	};
	
	/**
	 * Tells what type of port this is.
	 * @return {String} port type
	 */
	u2f.WrappedIosPort_.prototype.getPortType = function () {
	  return "WrappedIosPort_";
	};
	
	/**
	 * Emulates the HTML 5 addEventListener interface.
	 * @param {string} eventName
	 * @param {function({data: Object})} handler
	 */
	u2f.WrappedIosPort_.prototype.addEventListener = function (eventName, handler) {
	  var name = eventName.toLowerCase();
	  if (name !== 'message') {
	    console.error('WrappedIosPort only supports message');
	  }
	};
	
	/**
	 * Sets up an embedded trampoline iframe, sourced from the extension.
	 * @param {function(MessagePort)} callback
	 * @private
	 */
	u2f.getIframePort_ = function (callback) {
	  // Create the iframe
	  var iframeOrigin = 'chrome-extension://' + u2f.EXTENSION_ID;
	  var iframe = document.createElement('iframe');
	  iframe.src = iframeOrigin + '/u2f-comms.html';
	  iframe.setAttribute('style', 'display:none');
	  document.body.appendChild(iframe);
	
	  var channel = new MessageChannel();
	  var ready = function ready(message) {
	    if (message.data == 'ready') {
	      channel.port1.removeEventListener('message', ready);
	      callback(channel.port1);
	    } else {
	      console.error('First event on iframe port was not "ready"');
	    }
	  };
	  channel.port1.addEventListener('message', ready);
	  channel.port1.start();
	
	  iframe.addEventListener('load', function () {
	    // Deliver the port to the iframe and initialize
	    iframe.contentWindow.postMessage('init', iframeOrigin, [channel.port2]);
	  });
	};
	
	//High-level JS API
	
	/**
	 * Default extension response timeout in seconds.
	 * @const
	 */
	u2f.EXTENSION_TIMEOUT_SEC = 30;
	
	/**
	 * A singleton instance for a MessagePort to the extension.
	 * @type {MessagePort|u2f.WrappedChromeRuntimePort_}
	 * @private
	 */
	u2f.port_ = null;
	
	/**
	 * Callbacks waiting for a port
	 * @type {Array<function((MessagePort|u2f.WrappedChromeRuntimePort_))>}
	 * @private
	 */
	u2f.waitingForPort_ = [];
	
	/**
	 * A counter for requestIds.
	 * @type {number}
	 * @private
	 */
	u2f.reqCounter_ = 0;
	
	/**
	 * A map from requestIds to client callbacks
	 * @type {Object.<number,(function((u2f.Error|u2f.RegisterResponse))
	 *                       |function((u2f.Error|u2f.SignResponse)))>}
	 * @private
	 */
	u2f.callbackMap_ = {};
	
	/**
	 * Creates or retrieves the MessagePort singleton to use.
	 * @param {function((MessagePort|u2f.WrappedChromeRuntimePort_))} callback
	 * @private
	 */
	u2f.getPortSingleton_ = function (callback) {
	  if (u2f.port_) {
	    callback(u2f.port_);
	  } else {
	    if (u2f.waitingForPort_.length == 0) {
	      u2f.getMessagePort(function (port) {
	        u2f.port_ = port;
	        u2f.port_.addEventListener('message',
	        /** @type {function(Event)} */u2f.responseHandler_);
	
	        // Careful, here be async callbacks. Maybe.
	        while (u2f.waitingForPort_.length) {
	          u2f.waitingForPort_.shift()(u2f.port_);
	        }
	      });
	    }
	    u2f.waitingForPort_.push(callback);
	  }
	};
	
	/**
	 * Handles response messages from the extension.
	 * @param {MessageEvent.<u2f.Response>} message
	 * @private
	 */
	u2f.responseHandler_ = function (message) {
	  var response = message.data;
	  var reqId = response['requestId'];
	  if (!reqId || !u2f.callbackMap_[reqId]) {
	    console.error('Unknown or missing requestId in response.');
	    return;
	  }
	  var cb = u2f.callbackMap_[reqId];
	  delete u2f.callbackMap_[reqId];
	  cb(response['responseData']);
	};
	
	/**
	 * Dispatches an array of sign requests to available U2F tokens.
	 * If the JS API version supported by the extension is unknown, it first sends a
	 * message to the extension to find out the supported API version and then it sends
	 * the sign request.
	 * @param {string=} appId
	 * @param {string=} challenge
	 * @param {Array<u2f.RegisteredKey>} registeredKeys
	 * @param {unction((u2f.Erfror|u2f.SignResponse))} callback
	 * @param {number=} opt_timeoutSeconds
	 */
	u2f.sign = function (appId, challenge, registeredKeys, callback, opt_timeoutSeconds) {
	  // if (js_api_version === undefined) 
	  // {
	  // Send a message to get the extension to JS API version, then send the actual sign request.
	  //  u2f.getApiVersion(
	  //      function (response) {
	  //       js_api_version = response['js_api_version'] === undefined ? 0 : response['js_api_version'];
	  //console.log("Extension JS API Version: ", js_api_version);
	  //       u2f.sendSignRequest(appId, challenge, registeredKeys, callback, opt_timeoutSeconds);
	  //    });
	  // } else {
	  // We know the JS API version. Send the actual sign request in the supported API version.
	  u2f.sendSignRequest(appId, challenge, registeredKeys, callback, opt_timeoutSeconds);
	  // }
	};
	
	/**
	 * Dispatches an array of sign requests to available U2F tokens.
	 * @param {string=} appId
	 * @param {string=} challenge
	 * @param {Array<u2f.RegisteredKey>} registeredKeys
	 * @param {function((u2f.Error|u2f.SignResponse))} callback
	 * @param {number=} opt_timeoutSeconds
	 */
	u2f.sendSignRequest = function (appId, challenge, registeredKeys, callback, opt_timeoutSeconds) {
	  u2f.getPortSingleton_(function (port) {
	    var reqId = ++u2f.reqCounter_;
	    u2f.callbackMap_[reqId] = callback;
	    var timeoutSeconds = typeof opt_timeoutSeconds !== 'undefined' ? opt_timeoutSeconds : u2f.EXTENSION_TIMEOUT_SEC;
	    var req = u2f.formatSignRequest_(appId, challenge, registeredKeys, timeoutSeconds, reqId);
	    port.postMessage(req);
	  });
	};
	
	/**
	 * Dispatches register requests to available U2F tokens. An array of sign
	 * requests identifies already registered tokens.
	 * If the JS API version supported by the extension is unknown, it first sends a
	 * message to the extension to find out the supported API version and then it sends
	 * the register request.
	 * @param {string=} appId
	 * @param {Array<u2f.RegisterRequest>} registerRequests
	 * @param {Array<u2f.RegisteredKey>} registeredKeys
	 * @param {function((u2f.Error|u2f.RegisterResponse))} callback
	 * @param {number=} opt_timeoutSeconds
	 */
	u2f.register = function (appId, registerRequests, registeredKeys, callback, opt_timeoutSeconds) {
	  if (js_api_version === undefined) {
	    // Send a message to get the extension to JS API version, then send the actual register request.
	    u2f.getApiVersion(function (response) {
	      js_api_version = response['js_api_version'] === undefined ? 0 : response['js_api_version'];
	      //console.log("Extension JS API Version: ", js_api_version);
	      u2f.sendRegisterRequest(appId, registerRequests, registeredKeys, callback, opt_timeoutSeconds);
	    });
	  } else {
	    // We know the JS API version. Send the actual register request in the supported API version.
	    u2f.sendRegisterRequest(appId, registerRequests, registeredKeys, callback, opt_timeoutSeconds);
	  }
	};
	
	/**
	 * Dispatches register requests to available U2F tokens. An array of sign
	 * requests identifies already registered tokens.
	 * @param {string=} appId
	 * @param {Array<u2f.RegisterRequest>} registerRequests
	 * @param {Array<u2f.RegisteredKey>} registeredKeys
	 * @param {function((u2f.Error|u2f.RegisterResponse))} callback
	 * @param {number=} opt_timeoutSeconds
	 */
	u2f.sendRegisterRequest = function (appId, registerRequests, registeredKeys, callback, opt_timeoutSeconds) {
	  u2f.getPortSingleton_(function (port) {
	    var reqId = ++u2f.reqCounter_;
	    u2f.callbackMap_[reqId] = callback;
	    var timeoutSeconds = typeof opt_timeoutSeconds !== 'undefined' ? opt_timeoutSeconds : u2f.EXTENSION_TIMEOUT_SEC;
	    var req = u2f.formatRegisterRequest_(appId, registeredKeys, registerRequests, timeoutSeconds, reqId);
	    port.postMessage(req);
	  });
	};
	
	/**
	 * Dispatches a message to the extension to find out the supported
	 * JS API version.
	 * If the user is on a mobile phone and is thus using Google Authenticator instead
	 * of the Chrome extension, don't send the request and simply return 0.
	 * @param {function((u2f.Error|u2f.GetJsApiVersionResponse))} callback
	 * @param {number=} opt_timeoutSeconds
	 */
	u2f.getApiVersion = function (callback, opt_timeoutSeconds) {
	  u2f.getPortSingleton_(function (port) {
	    // If we are using Android Google Authenticator or iOS client app,
	    // do not fire an intent to ask which JS API version to use.
	    if (port.getPortType) {
	      var apiVersion;
	      switch (port.getPortType()) {
	        case 'WrappedIosPort_':
	        case 'WrappedAuthenticatorPort_':
	          apiVersion = 1.1;
	          break;
	
	        default:
	          apiVersion = 0;
	          break;
	      }
	      callback({ 'js_api_version': apiVersion });
	      return;
	    }
	    var reqId = ++u2f.reqCounter_;
	    u2f.callbackMap_[reqId] = callback;
	    var req = {
	      type: u2f.MessageTypes.U2F_GET_API_VERSION_REQUEST,
	      timeoutSeconds: typeof opt_timeoutSeconds !== 'undefined' ? opt_timeoutSeconds : u2f.EXTENSION_TIMEOUT_SEC,
	      requestId: reqId
	    };
	    port.postMessage(req);
	  });
	};
	
	module.exports = {
	  sign: u2f.sign
	};

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(83), __esModule: true };

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

	var core = __webpack_require__(16);
	var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
	module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
	  return $JSON.stringify.apply($JSON, arguments);
	};


/***/ }),
/* 84 */
/***/ (function(module, exports) {

	"use strict";
	
	var __isDebug__ = true;
	var __isTop__ = true;
	window.log = {
		/** 输出红色日志 */
		e: function e() {
			if (__isDebug__ && arguments.length > 0) {
				var arr = Array.prototype.slice.call(arguments);
				this.__log("E", 'red', arr);
			}
		},
	
		/** 输出黄色日志 */
		w: function w() {
			if (__isDebug__ && arguments.length > 0) {
				var arr = Array.prototype.slice.call(arguments);
				this.__log("W", '#FFA500', arr);
			}
		},
	
		/** 输出绿色日志 */
		i: function i() {
			if (__isTop__ && arguments.length > 0) {
				var arr = Array.prototype.slice.call(arguments);
				this.__log("I", '#00FF00', arr);
			}
		},
	
		/** 输出黑色正常日志 */
		d: function d() {
			if (__isDebug__ && arguments.length > 0) {
				var arr = Array.prototype.slice.call(arguments);
				this.__log("D", '#000000', arr);
			}
		},
	
		/**
	 * @param tagStr 没有标签时默认显示的
	 * @param color 日志颜色
	 * @param arr 日志参数
	 */
		__log: function __log(tagStr, color, arr) {
			var tag = arr[0];
			if (typeof tag == "string" || tag == null || tag == undefined) {
				arr[0] = "%c " + arr[0];
				arr.splice(1, 0, "color:" + color);
			} else {
				arr.splice(0, 0, "%c " + tagStr + " : ");
				arr.splice(1, 0, "color:" + color);
			}
			console.log.apply(console, arr);
		}
	};

/***/ })
/******/ ]);
//# sourceMappingURL=renderer.js.map