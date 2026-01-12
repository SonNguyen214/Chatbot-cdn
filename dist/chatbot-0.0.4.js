function vA(Q) {
  return Q && Q.__esModule && Object.prototype.hasOwnProperty.call(Q, "default") ? Q.default : Q;
}
var wg = { exports: {} }, z0 = {};
var UE;
function gA() {
  if (UE) return z0;
  UE = 1;
  var Q = /* @__PURE__ */ Symbol.for("react.transitional.element"), te = /* @__PURE__ */ Symbol.for("react.fragment");
  function Ne(B, Me, Re) {
    var je = null;
    if (Re !== void 0 && (je = "" + Re), Me.key !== void 0 && (je = "" + Me.key), "key" in Me) {
      Re = {};
      for (var gt in Me)
        gt !== "key" && (Re[gt] = Me[gt]);
    } else Re = Me;
    return Me = Re.ref, {
      $$typeof: Q,
      type: B,
      key: je,
      ref: Me !== void 0 ? Me : null,
      props: Re
    };
  }
  return z0.Fragment = te, z0.jsx = Ne, z0.jsxs = Ne, z0;
}
var _0 = {}, Xg = { exports: {} }, Ve = {};
var HE;
function SA() {
  if (HE) return Ve;
  HE = 1;
  var Q = /* @__PURE__ */ Symbol.for("react.transitional.element"), te = /* @__PURE__ */ Symbol.for("react.portal"), Ne = /* @__PURE__ */ Symbol.for("react.fragment"), B = /* @__PURE__ */ Symbol.for("react.strict_mode"), Me = /* @__PURE__ */ Symbol.for("react.profiler"), Re = /* @__PURE__ */ Symbol.for("react.consumer"), je = /* @__PURE__ */ Symbol.for("react.context"), gt = /* @__PURE__ */ Symbol.for("react.forward_ref"), L = /* @__PURE__ */ Symbol.for("react.suspense"), V = /* @__PURE__ */ Symbol.for("react.memo"), we = /* @__PURE__ */ Symbol.for("react.lazy"), de = /* @__PURE__ */ Symbol.for("react.activity"), k = Symbol.iterator;
  function U(O) {
    return O === null || typeof O != "object" ? null : (O = k && O[k] || O["@@iterator"], typeof O == "function" ? O : null);
  }
  var ue = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, qe = Object.assign, Qt = {};
  function Te(O, A, $) {
    this.props = O, this.context = A, this.refs = Qt, this.updater = $ || ue;
  }
  Te.prototype.isReactComponent = {}, Te.prototype.setState = function(O, A) {
    if (typeof O != "object" && typeof O != "function" && O != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, O, A, "setState");
  }, Te.prototype.forceUpdate = function(O) {
    this.updater.enqueueForceUpdate(this, O, "forceUpdate");
  };
  function Ze() {
  }
  Ze.prototype = Te.prototype;
  function St(O, A, $) {
    this.props = O, this.context = A, this.refs = Qt, this.updater = $ || ue;
  }
  var Lt = St.prototype = new Ze();
  Lt.constructor = St, qe(Lt, Te.prototype), Lt.isPureReactComponent = !0;
  var $t = Array.isArray;
  function xt() {
  }
  var Xe = { H: null, A: null, T: null, S: null }, _t = Object.prototype.hasOwnProperty;
  function tt(O, A, $) {
    var ee = $.ref;
    return {
      $$typeof: Q,
      type: O,
      key: A,
      ref: ee !== void 0 ? ee : null,
      props: $
    };
  }
  function Vt(O, A) {
    return tt(O.type, A, O.props);
  }
  function re(O) {
    return typeof O == "object" && O !== null && O.$$typeof === Q;
  }
  function bt(O) {
    var A = { "=": "=0", ":": "=2" };
    return "$" + O.replace(/[=:]/g, function($) {
      return A[$];
    });
  }
  var Ae = /\/+/g;
  function Ue(O, A) {
    return typeof O == "object" && O !== null && O.key != null ? bt("" + O.key) : A.toString(36);
  }
  function jt(O) {
    switch (O.status) {
      case "fulfilled":
        return O.value;
      case "rejected":
        throw O.reason;
      default:
        switch (typeof O.status == "string" ? O.then(xt, xt) : (O.status = "pending", O.then(
          function(A) {
            O.status === "pending" && (O.status = "fulfilled", O.value = A);
          },
          function(A) {
            O.status === "pending" && (O.status = "rejected", O.reason = A);
          }
        )), O.status) {
          case "fulfilled":
            return O.value;
          case "rejected":
            throw O.reason;
        }
    }
    throw O;
  }
  function X(O, A, $, ee, ae) {
    var ze = typeof O;
    (ze === "undefined" || ze === "boolean") && (O = null);
    var lt = !1;
    if (O === null) lt = !0;
    else
      switch (ze) {
        case "bigint":
        case "string":
        case "number":
          lt = !0;
          break;
        case "object":
          switch (O.$$typeof) {
            case Q:
            case te:
              lt = !0;
              break;
            case we:
              return lt = O._init, X(
                lt(O._payload),
                A,
                $,
                ee,
                ae
              );
          }
      }
    if (lt)
      return ae = ae(O), lt = ee === "" ? "." + Ue(O, 0) : ee, $t(ae) ? ($ = "", lt != null && ($ = lt.replace(Ae, "$&/") + "/"), X(ae, A, $, "", function(ea) {
        return ea;
      })) : ae != null && (re(ae) && (ae = Vt(
        ae,
        $ + (ae.key == null || O && O.key === ae.key ? "" : ("" + ae.key).replace(
          Ae,
          "$&/"
        ) + "/") + lt
      )), A.push(ae)), 1;
    lt = 0;
    var Fe = ee === "" ? "." : ee + ":";
    if ($t(O))
      for (var Et = 0; Et < O.length; Et++)
        ee = O[Et], ze = Fe + Ue(ee, Et), lt += X(
          ee,
          A,
          $,
          ze,
          ae
        );
    else if (Et = U(O), typeof Et == "function")
      for (O = Et.call(O), Et = 0; !(ee = O.next()).done; )
        ee = ee.value, ze = Fe + Ue(ee, Et++), lt += X(
          ee,
          A,
          $,
          ze,
          ae
        );
    else if (ze === "object") {
      if (typeof O.then == "function")
        return X(
          jt(O),
          A,
          $,
          ee,
          ae
        );
      throw A = String(O), Error(
        "Objects are not valid as a React child (found: " + (A === "[object Object]" ? "object with keys {" + Object.keys(O).join(", ") + "}" : A) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return lt;
  }
  function j(O, A, $) {
    if (O == null) return O;
    var ee = [], ae = 0;
    return X(O, ee, "", "", function(ze) {
      return A.call($, ze, ae++);
    }), ee;
  }
  function P(O) {
    if (O._status === -1) {
      var A = O._result;
      A = A(), A.then(
        function($) {
          (O._status === 0 || O._status === -1) && (O._status = 1, O._result = $);
        },
        function($) {
          (O._status === 0 || O._status === -1) && (O._status = 2, O._result = $);
        }
      ), O._status === -1 && (O._status = 0, O._result = A);
    }
    if (O._status === 1) return O._result.default;
    throw O._result;
  }
  var ce = typeof reportError == "function" ? reportError : function(O) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var A = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof O == "object" && O !== null && typeof O.message == "string" ? String(O.message) : String(O),
        error: O
      });
      if (!window.dispatchEvent(A)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", O);
      return;
    }
    console.error(O);
  }, ge = {
    map: j,
    forEach: function(O, A, $) {
      j(
        O,
        function() {
          A.apply(this, arguments);
        },
        $
      );
    },
    count: function(O) {
      var A = 0;
      return j(O, function() {
        A++;
      }), A;
    },
    toArray: function(O) {
      return j(O, function(A) {
        return A;
      }) || [];
    },
    only: function(O) {
      if (!re(O))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return O;
    }
  };
  return Ve.Activity = de, Ve.Children = ge, Ve.Component = Te, Ve.Fragment = Ne, Ve.Profiler = Me, Ve.PureComponent = St, Ve.StrictMode = B, Ve.Suspense = L, Ve.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Xe, Ve.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(O) {
      return Xe.H.useMemoCache(O);
    }
  }, Ve.cache = function(O) {
    return function() {
      return O.apply(null, arguments);
    };
  }, Ve.cacheSignal = function() {
    return null;
  }, Ve.cloneElement = function(O, A, $) {
    if (O == null)
      throw Error(
        "The argument must be a React element, but you passed " + O + "."
      );
    var ee = qe({}, O.props), ae = O.key;
    if (A != null)
      for (ze in A.key !== void 0 && (ae = "" + A.key), A)
        !_t.call(A, ze) || ze === "key" || ze === "__self" || ze === "__source" || ze === "ref" && A.ref === void 0 || (ee[ze] = A[ze]);
    var ze = arguments.length - 2;
    if (ze === 1) ee.children = $;
    else if (1 < ze) {
      for (var lt = Array(ze), Fe = 0; Fe < ze; Fe++)
        lt[Fe] = arguments[Fe + 2];
      ee.children = lt;
    }
    return tt(O.type, ae, ee);
  }, Ve.createContext = function(O) {
    return O = {
      $$typeof: je,
      _currentValue: O,
      _currentValue2: O,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, O.Provider = O, O.Consumer = {
      $$typeof: Re,
      _context: O
    }, O;
  }, Ve.createElement = function(O, A, $) {
    var ee, ae = {}, ze = null;
    if (A != null)
      for (ee in A.key !== void 0 && (ze = "" + A.key), A)
        _t.call(A, ee) && ee !== "key" && ee !== "__self" && ee !== "__source" && (ae[ee] = A[ee]);
    var lt = arguments.length - 2;
    if (lt === 1) ae.children = $;
    else if (1 < lt) {
      for (var Fe = Array(lt), Et = 0; Et < lt; Et++)
        Fe[Et] = arguments[Et + 2];
      ae.children = Fe;
    }
    if (O && O.defaultProps)
      for (ee in lt = O.defaultProps, lt)
        ae[ee] === void 0 && (ae[ee] = lt[ee]);
    return tt(O, ze, ae);
  }, Ve.createRef = function() {
    return { current: null };
  }, Ve.forwardRef = function(O) {
    return { $$typeof: gt, render: O };
  }, Ve.isValidElement = re, Ve.lazy = function(O) {
    return {
      $$typeof: we,
      _payload: { _status: -1, _result: O },
      _init: P
    };
  }, Ve.memo = function(O, A) {
    return {
      $$typeof: V,
      type: O,
      compare: A === void 0 ? null : A
    };
  }, Ve.startTransition = function(O) {
    var A = Xe.T, $ = {};
    Xe.T = $;
    try {
      var ee = O(), ae = Xe.S;
      ae !== null && ae($, ee), typeof ee == "object" && ee !== null && typeof ee.then == "function" && ee.then(xt, ce);
    } catch (ze) {
      ce(ze);
    } finally {
      A !== null && $.types !== null && (A.types = $.types), Xe.T = A;
    }
  }, Ve.unstable_useCacheRefresh = function() {
    return Xe.H.useCacheRefresh();
  }, Ve.use = function(O) {
    return Xe.H.use(O);
  }, Ve.useActionState = function(O, A, $) {
    return Xe.H.useActionState(O, A, $);
  }, Ve.useCallback = function(O, A) {
    return Xe.H.useCallback(O, A);
  }, Ve.useContext = function(O) {
    return Xe.H.useContext(O);
  }, Ve.useDebugValue = function() {
  }, Ve.useDeferredValue = function(O, A) {
    return Xe.H.useDeferredValue(O, A);
  }, Ve.useEffect = function(O, A) {
    return Xe.H.useEffect(O, A);
  }, Ve.useEffectEvent = function(O) {
    return Xe.H.useEffectEvent(O);
  }, Ve.useId = function() {
    return Xe.H.useId();
  }, Ve.useImperativeHandle = function(O, A, $) {
    return Xe.H.useImperativeHandle(O, A, $);
  }, Ve.useInsertionEffect = function(O, A) {
    return Xe.H.useInsertionEffect(O, A);
  }, Ve.useLayoutEffect = function(O, A) {
    return Xe.H.useLayoutEffect(O, A);
  }, Ve.useMemo = function(O, A) {
    return Xe.H.useMemo(O, A);
  }, Ve.useOptimistic = function(O, A) {
    return Xe.H.useOptimistic(O, A);
  }, Ve.useReducer = function(O, A, $) {
    return Xe.H.useReducer(O, A, $);
  }, Ve.useRef = function(O) {
    return Xe.H.useRef(O);
  }, Ve.useState = function(O) {
    return Xe.H.useState(O);
  }, Ve.useSyncExternalStore = function(O, A, $) {
    return Xe.H.useSyncExternalStore(
      O,
      A,
      $
    );
  }, Ve.useTransition = function() {
    return Xe.H.useTransition();
  }, Ve.version = "19.2.3", Ve;
}
var M0 = { exports: {} };
M0.exports;
var NE;
function bA() {
  return NE || (NE = 1, (function(Q, te) {
    var Ne = {};
    Ne.NODE_ENV !== "production" && (function() {
      function B(v, M) {
        Object.defineProperty(je.prototype, v, {
          get: function() {
            console.warn(
              "%s(...) is deprecated in plain JavaScript React classes. %s",
              M[0],
              M[1]
            );
          }
        });
      }
      function Me(v) {
        return v === null || typeof v != "object" ? null : (v = Tc && v[Tc] || v["@@iterator"], typeof v == "function" ? v : null);
      }
      function Re(v, M) {
        v = (v = v.constructor) && (v.displayName || v.name) || "ReactClass";
        var I = v + "." + M;
        Wa[I] || (console.error(
          "Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",
          M,
          v
        ), Wa[I] = !0);
      }
      function je(v, M, I) {
        this.props = v, this.context = M, this.refs = zt, this.updater = I || ui;
      }
      function gt() {
      }
      function L(v, M, I) {
        this.props = v, this.context = M, this.refs = zt, this.updater = I || ui;
      }
      function V() {
      }
      function we(v) {
        return "" + v;
      }
      function de(v) {
        try {
          we(v);
          var M = !1;
        } catch {
          M = !0;
        }
        if (M) {
          M = console;
          var I = M.error, le = typeof Symbol == "function" && Symbol.toStringTag && v[Symbol.toStringTag] || v.constructor.name || "Object";
          return I.call(
            M,
            "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
            le
          ), we(v);
        }
      }
      function k(v) {
        if (v == null) return null;
        if (typeof v == "function")
          return v.$$typeof === er ? null : v.displayName || v.name || null;
        if (typeof v == "string") return v;
        switch (v) {
          case A:
            return "Fragment";
          case ee:
            return "Profiler";
          case $:
            return "StrictMode";
          case Fe:
            return "Suspense";
          case Et:
            return "SuspenseList";
          case fe:
            return "Activity";
        }
        if (typeof v == "object")
          switch (typeof v.tag == "number" && console.error(
            "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
          ), v.$$typeof) {
            case O:
              return "Portal";
            case ze:
              return v.displayName || "Context";
            case ae:
              return (v._context.displayName || "Context") + ".Consumer";
            case lt:
              var M = v.render;
              return v = v.displayName, v || (v = M.displayName || M.name || "", v = v !== "" ? "ForwardRef(" + v + ")" : "ForwardRef"), v;
            case ea:
              return M = v.displayName || null, M !== null ? M : k(v.type) || "Memo";
            case vn:
              M = v._payload, v = v._init;
              try {
                return k(v(M));
              } catch {
              }
          }
        return null;
      }
      function U(v) {
        if (v === A) return "<>";
        if (typeof v == "object" && v !== null && v.$$typeof === vn)
          return "<...>";
        try {
          var M = k(v);
          return M ? "<" + M + ">" : "<...>";
        } catch {
          return "<...>";
        }
      }
      function ue() {
        var v = me.A;
        return v === null ? null : v.getOwner();
      }
      function qe() {
        return Error("react-stack-top-frame");
      }
      function Qt(v) {
        if (Bo.call(v, "key")) {
          var M = Object.getOwnPropertyDescriptor(v, "key").get;
          if (M && M.isReactWarning) return !1;
        }
        return v.key !== void 0;
      }
      function Te(v, M) {
        function I() {
          El || (El = !0, console.error(
            "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
            M
          ));
        }
        I.isReactWarning = !0, Object.defineProperty(v, "key", {
          get: I,
          configurable: !0
        });
      }
      function Ze() {
        var v = k(this.type);
        return tr[v] || (tr[v] = !0, console.error(
          "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
        )), v = this.props.ref, v !== void 0 ? v : null;
      }
      function St(v, M, I, le, se, He) {
        var ye = I.ref;
        return v = {
          $$typeof: ge,
          type: v,
          key: M,
          props: I,
          _owner: le
        }, (ye !== void 0 ? ye : null) !== null ? Object.defineProperty(v, "ref", {
          enumerable: !1,
          get: Ze
        }) : Object.defineProperty(v, "ref", { enumerable: !1, value: null }), v._store = {}, Object.defineProperty(v._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: 0
        }), Object.defineProperty(v, "_debugInfo", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: null
        }), Object.defineProperty(v, "_debugStack", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: se
        }), Object.defineProperty(v, "_debugTask", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: He
        }), Object.freeze && (Object.freeze(v.props), Object.freeze(v)), v;
      }
      function Lt(v, M) {
        return M = St(
          v.type,
          M,
          v.props,
          v._owner,
          v._debugStack,
          v._debugTask
        ), v._store && (M._store.validated = v._store.validated), M;
      }
      function $t(v) {
        xt(v) ? v._store && (v._store.validated = 1) : typeof v == "object" && v !== null && v.$$typeof === vn && (v._payload.status === "fulfilled" ? xt(v._payload.value) && v._payload.value._store && (v._payload.value._store.validated = 1) : v._store && (v._store.validated = 1));
      }
      function xt(v) {
        return typeof v == "object" && v !== null && v.$$typeof === ge;
      }
      function Xe(v) {
        var M = { "=": "=0", ":": "=2" };
        return "$" + v.replace(/[=:]/g, function(I) {
          return M[I];
        });
      }
      function _t(v, M) {
        return typeof v == "object" && v !== null && v.key != null ? (de(v.key), Xe("" + v.key)) : M.toString(36);
      }
      function tt(v) {
        switch (v.status) {
          case "fulfilled":
            return v.value;
          case "rejected":
            throw v.reason;
          default:
            switch (typeof v.status == "string" ? v.then(V, V) : (v.status = "pending", v.then(
              function(M) {
                v.status === "pending" && (v.status = "fulfilled", v.value = M);
              },
              function(M) {
                v.status === "pending" && (v.status = "rejected", v.reason = M);
              }
            )), v.status) {
              case "fulfilled":
                return v.value;
              case "rejected":
                throw v.reason;
            }
        }
        throw v;
      }
      function Vt(v, M, I, le, se) {
        var He = typeof v;
        (He === "undefined" || He === "boolean") && (v = null);
        var ye = !1;
        if (v === null) ye = !0;
        else
          switch (He) {
            case "bigint":
            case "string":
            case "number":
              ye = !0;
              break;
            case "object":
              switch (v.$$typeof) {
                case ge:
                case O:
                  ye = !0;
                  break;
                case vn:
                  return ye = v._init, Vt(
                    ye(v._payload),
                    M,
                    I,
                    le,
                    se
                  );
              }
          }
        if (ye) {
          ye = v, se = se(ye);
          var ot = le === "" ? "." + _t(ye, 0) : le;
          return Yi(se) ? (I = "", ot != null && (I = ot.replace(lr, "$&/") + "/"), Vt(se, M, I, "", function(Gl) {
            return Gl;
          })) : se != null && (xt(se) && (se.key != null && (ye && ye.key === se.key || de(se.key)), I = Lt(
            se,
            I + (se.key == null || ye && ye.key === se.key ? "" : ("" + se.key).replace(
              lr,
              "$&/"
            ) + "/") + ot
          ), le !== "" && ye != null && xt(ye) && ye.key == null && ye._store && !ye._store.validated && (I._store.validated = 2), se = I), M.push(se)), 1;
        }
        if (ye = 0, ot = le === "" ? "." : le + ":", Yi(v))
          for (var Ye = 0; Ye < v.length; Ye++)
            le = v[Ye], He = ot + _t(le, Ye), ye += Vt(
              le,
              M,
              I,
              He,
              se
            );
        else if (Ye = Me(v), typeof Ye == "function")
          for (Ye === v.entries && (wi || console.warn(
            "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
          ), wi = !0), v = Ye.call(v), Ye = 0; !(le = v.next()).done; )
            le = le.value, He = ot + _t(le, Ye++), ye += Vt(
              le,
              M,
              I,
              He,
              se
            );
        else if (He === "object") {
          if (typeof v.then == "function")
            return Vt(
              tt(v),
              M,
              I,
              le,
              se
            );
          throw M = String(v), Error(
            "Objects are not valid as a React child (found: " + (M === "[object Object]" ? "object with keys {" + Object.keys(v).join(", ") + "}" : M) + "). If you meant to render a collection of children, use an array instead."
          );
        }
        return ye;
      }
      function re(v, M, I) {
        if (v == null) return v;
        var le = [], se = 0;
        return Vt(v, le, "", "", function(He) {
          return M.call(I, He, se++);
        }), le;
      }
      function bt(v) {
        if (v._status === -1) {
          var M = v._ioInfo;
          M != null && (M.start = M.end = performance.now()), M = v._result;
          var I = M();
          if (I.then(
            function(se) {
              if (v._status === 0 || v._status === -1) {
                v._status = 1, v._result = se;
                var He = v._ioInfo;
                He != null && (He.end = performance.now()), I.status === void 0 && (I.status = "fulfilled", I.value = se);
              }
            },
            function(se) {
              if (v._status === 0 || v._status === -1) {
                v._status = 2, v._result = se;
                var He = v._ioInfo;
                He != null && (He.end = performance.now()), I.status === void 0 && (I.status = "rejected", I.reason = se);
              }
            }
          ), M = v._ioInfo, M != null) {
            M.value = I;
            var le = I.displayName;
            typeof le == "string" && (M.name = le);
          }
          v._status === -1 && (v._status = 0, v._result = I);
        }
        if (v._status === 1)
          return M = v._result, M === void 0 && console.error(
            `lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`,
            M
          ), "default" in M || console.error(
            `lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`,
            M
          ), M.default;
        throw v._result;
      }
      function Ae() {
        var v = me.H;
        return v === null && console.error(
          `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
        ), v;
      }
      function Ue() {
        me.asyncTransitions--;
      }
      function jt(v) {
        if (Gn === null)
          try {
            var M = ("require" + Math.random()).slice(0, 7);
            Gn = (Q && Q[M]).call(
              Q,
              "timers"
            ).setImmediate;
          } catch {
            Gn = function(le) {
              nr === !1 && (nr = !0, typeof MessageChannel > "u" && console.error(
                "This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."
              ));
              var se = new MessageChannel();
              se.port1.onmessage = le, se.port2.postMessage(void 0);
            };
          }
        return Gn(v);
      }
      function X(v) {
        return 1 < v.length && typeof AggregateError == "function" ? new AggregateError(v) : v[0];
      }
      function j(v, M) {
        M !== pl - 1 && console.error(
          "You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "
        ), pl = M;
      }
      function P(v, M, I) {
        var le = me.actQueue;
        if (le !== null)
          if (le.length !== 0)
            try {
              ce(le), jt(function() {
                return P(v, M, I);
              });
              return;
            } catch (se) {
              me.thrownErrors.push(se);
            }
          else me.actQueue = null;
        0 < me.thrownErrors.length ? (le = X(me.thrownErrors), me.thrownErrors.length = 0, I(le)) : M(v);
      }
      function ce(v) {
        if (!Rl) {
          Rl = !0;
          var M = 0;
          try {
            for (; M < v.length; M++) {
              var I = v[M];
              do {
                me.didUsePromise = !1;
                var le = I(!1);
                if (le !== null) {
                  if (me.didUsePromise) {
                    v[M] = I, v.splice(0, M);
                    return;
                  }
                  I = le;
                } else break;
              } while (!0);
            }
            v.length = 0;
          } catch (se) {
            v.splice(0, M + 1), me.thrownErrors.push(se);
          } finally {
            Rl = !1;
          }
        }
      }
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
      var ge = /* @__PURE__ */ Symbol.for("react.transitional.element"), O = /* @__PURE__ */ Symbol.for("react.portal"), A = /* @__PURE__ */ Symbol.for("react.fragment"), $ = /* @__PURE__ */ Symbol.for("react.strict_mode"), ee = /* @__PURE__ */ Symbol.for("react.profiler"), ae = /* @__PURE__ */ Symbol.for("react.consumer"), ze = /* @__PURE__ */ Symbol.for("react.context"), lt = /* @__PURE__ */ Symbol.for("react.forward_ref"), Fe = /* @__PURE__ */ Symbol.for("react.suspense"), Et = /* @__PURE__ */ Symbol.for("react.suspense_list"), ea = /* @__PURE__ */ Symbol.for("react.memo"), vn = /* @__PURE__ */ Symbol.for("react.lazy"), fe = /* @__PURE__ */ Symbol.for("react.activity"), Tc = Symbol.iterator, Wa = {}, ui = {
        isMounted: function() {
          return !1;
        },
        enqueueForceUpdate: function(v) {
          Re(v, "forceUpdate");
        },
        enqueueReplaceState: function(v) {
          Re(v, "replaceState");
        },
        enqueueSetState: function(v) {
          Re(v, "setState");
        }
      }, uu = Object.assign, zt = {};
      Object.freeze(zt), je.prototype.isReactComponent = {}, je.prototype.setState = function(v, M) {
        if (typeof v != "object" && typeof v != "function" && v != null)
          throw Error(
            "takes an object of state variables to update or a function which returns an object of state variables."
          );
        this.updater.enqueueSetState(this, v, M, "setState");
      }, je.prototype.forceUpdate = function(v) {
        this.updater.enqueueForceUpdate(this, v, "forceUpdate");
      };
      var ql = {
        isMounted: [
          "isMounted",
          "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."
        ],
        replaceState: [
          "replaceState",
          "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."
        ]
      };
      for (Xi in ql)
        ql.hasOwnProperty(Xi) && B(Xi, ql[Xi]);
      gt.prototype = je.prototype, ql = L.prototype = new gt(), ql.constructor = L, uu(ql, je.prototype), ql.isPureReactComponent = !0;
      var Yi = Array.isArray, er = /* @__PURE__ */ Symbol.for("react.client.reference"), me = {
        H: null,
        A: null,
        T: null,
        S: null,
        actQueue: null,
        asyncTransitions: 0,
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1,
        didUsePromise: !1,
        thrownErrors: [],
        getCurrentStack: null,
        recentlyCreatedOwnerStacks: 0
      }, Bo = Object.prototype.hasOwnProperty, iu = console.createTask ? console.createTask : function() {
        return null;
      };
      ql = {
        react_stack_bottom_frame: function(v) {
          return v();
        }
      };
      var El, qi, tr = {}, xo = ql.react_stack_bottom_frame.bind(
        ql,
        qe
      )(), Gi = iu(U(qe)), wi = !1, lr = /\/+/g, ar = typeof reportError == "function" ? reportError : function(v) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
          var M = new window.ErrorEvent("error", {
            bubbles: !0,
            cancelable: !0,
            message: typeof v == "object" && v !== null && typeof v.message == "string" ? String(v.message) : String(v),
            error: v
          });
          if (!window.dispatchEvent(M)) return;
        } else if (typeof process == "object" && typeof process.emit == "function") {
          process.emit("uncaughtException", v);
          return;
        }
        console.error(v);
      }, nr = !1, Gn = null, pl = 0, za = !1, Rl = !1, jo = typeof queueMicrotask == "function" ? function(v) {
        queueMicrotask(function() {
          return queueMicrotask(v);
        });
      } : jt;
      ql = Object.freeze({
        __proto__: null,
        c: function(v) {
          return Ae().useMemoCache(v);
        }
      });
      var Xi = {
        map: re,
        forEach: function(v, M, I) {
          re(
            v,
            function() {
              M.apply(this, arguments);
            },
            I
          );
        },
        count: function(v) {
          var M = 0;
          return re(v, function() {
            M++;
          }), M;
        },
        toArray: function(v) {
          return re(v, function(M) {
            return M;
          }) || [];
        },
        only: function(v) {
          if (!xt(v))
            throw Error(
              "React.Children.only expected to receive a single React element child."
            );
          return v;
        }
      };
      te.Activity = fe, te.Children = Xi, te.Component = je, te.Fragment = A, te.Profiler = ee, te.PureComponent = L, te.StrictMode = $, te.Suspense = Fe, te.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = me, te.__COMPILER_RUNTIME = ql, te.act = function(v) {
        var M = me.actQueue, I = pl;
        pl++;
        var le = me.actQueue = M !== null ? M : [], se = !1;
        try {
          var He = v();
        } catch (Ye) {
          me.thrownErrors.push(Ye);
        }
        if (0 < me.thrownErrors.length)
          throw j(M, I), v = X(me.thrownErrors), me.thrownErrors.length = 0, v;
        if (He !== null && typeof He == "object" && typeof He.then == "function") {
          var ye = He;
          return jo(function() {
            se || za || (za = !0, console.error(
              "You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"
            ));
          }), {
            then: function(Ye, Gl) {
              se = !0, ye.then(
                function(_a) {
                  if (j(M, I), I === 0) {
                    try {
                      ce(le), jt(function() {
                        return P(
                          _a,
                          Ye,
                          Gl
                        );
                      });
                    } catch (Ac) {
                      me.thrownErrors.push(Ac);
                    }
                    if (0 < me.thrownErrors.length) {
                      var fd = X(
                        me.thrownErrors
                      );
                      me.thrownErrors.length = 0, Gl(fd);
                    }
                  } else Ye(_a);
                },
                function(_a) {
                  j(M, I), 0 < me.thrownErrors.length && (_a = X(
                    me.thrownErrors
                  ), me.thrownErrors.length = 0), Gl(_a);
                }
              );
            }
          };
        }
        var ot = He;
        if (j(M, I), I === 0 && (ce(le), le.length !== 0 && jo(function() {
          se || za || (za = !0, console.error(
            "A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"
          ));
        }), me.actQueue = null), 0 < me.thrownErrors.length)
          throw v = X(me.thrownErrors), me.thrownErrors.length = 0, v;
        return {
          then: function(Ye, Gl) {
            se = !0, I === 0 ? (me.actQueue = le, jt(function() {
              return P(
                ot,
                Ye,
                Gl
              );
            })) : Ye(ot);
          }
        };
      }, te.cache = function(v) {
        return function() {
          return v.apply(null, arguments);
        };
      }, te.cacheSignal = function() {
        return null;
      }, te.captureOwnerStack = function() {
        var v = me.getCurrentStack;
        return v === null ? null : v();
      }, te.cloneElement = function(v, M, I) {
        if (v == null)
          throw Error(
            "The argument must be a React element, but you passed " + v + "."
          );
        var le = uu({}, v.props), se = v.key, He = v._owner;
        if (M != null) {
          var ye;
          e: {
            if (Bo.call(M, "ref") && (ye = Object.getOwnPropertyDescriptor(
              M,
              "ref"
            ).get) && ye.isReactWarning) {
              ye = !1;
              break e;
            }
            ye = M.ref !== void 0;
          }
          ye && (He = ue()), Qt(M) && (de(M.key), se = "" + M.key);
          for (ot in M)
            !Bo.call(M, ot) || ot === "key" || ot === "__self" || ot === "__source" || ot === "ref" && M.ref === void 0 || (le[ot] = M[ot]);
        }
        var ot = arguments.length - 2;
        if (ot === 1) le.children = I;
        else if (1 < ot) {
          ye = Array(ot);
          for (var Ye = 0; Ye < ot; Ye++)
            ye[Ye] = arguments[Ye + 2];
          le.children = ye;
        }
        for (le = St(
          v.type,
          se,
          le,
          He,
          v._debugStack,
          v._debugTask
        ), se = 2; se < arguments.length; se++)
          $t(arguments[se]);
        return le;
      }, te.createContext = function(v) {
        return v = {
          $$typeof: ze,
          _currentValue: v,
          _currentValue2: v,
          _threadCount: 0,
          Provider: null,
          Consumer: null
        }, v.Provider = v, v.Consumer = {
          $$typeof: ae,
          _context: v
        }, v._currentRenderer = null, v._currentRenderer2 = null, v;
      }, te.createElement = function(v, M, I) {
        for (var le = 2; le < arguments.length; le++)
          $t(arguments[le]);
        le = {};
        var se = null;
        if (M != null)
          for (Ye in qi || !("__self" in M) || "key" in M || (qi = !0, console.warn(
            "Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform"
          )), Qt(M) && (de(M.key), se = "" + M.key), M)
            Bo.call(M, Ye) && Ye !== "key" && Ye !== "__self" && Ye !== "__source" && (le[Ye] = M[Ye]);
        var He = arguments.length - 2;
        if (He === 1) le.children = I;
        else if (1 < He) {
          for (var ye = Array(He), ot = 0; ot < He; ot++)
            ye[ot] = arguments[ot + 2];
          Object.freeze && Object.freeze(ye), le.children = ye;
        }
        if (v && v.defaultProps)
          for (Ye in He = v.defaultProps, He)
            le[Ye] === void 0 && (le[Ye] = He[Ye]);
        se && Te(
          le,
          typeof v == "function" ? v.displayName || v.name || "Unknown" : v
        );
        var Ye = 1e4 > me.recentlyCreatedOwnerStacks++;
        return St(
          v,
          se,
          le,
          ue(),
          Ye ? Error("react-stack-top-frame") : xo,
          Ye ? iu(U(v)) : Gi
        );
      }, te.createRef = function() {
        var v = { current: null };
        return Object.seal(v), v;
      }, te.forwardRef = function(v) {
        v != null && v.$$typeof === ea ? console.error(
          "forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."
        ) : typeof v != "function" ? console.error(
          "forwardRef requires a render function but was given %s.",
          v === null ? "null" : typeof v
        ) : v.length !== 0 && v.length !== 2 && console.error(
          "forwardRef render functions accept exactly two parameters: props and ref. %s",
          v.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."
        ), v != null && v.defaultProps != null && console.error(
          "forwardRef render functions do not support defaultProps. Did you accidentally pass a React component?"
        );
        var M = { $$typeof: lt, render: v }, I;
        return Object.defineProperty(M, "displayName", {
          enumerable: !1,
          configurable: !0,
          get: function() {
            return I;
          },
          set: function(le) {
            I = le, v.name || v.displayName || (Object.defineProperty(v, "name", { value: le }), v.displayName = le);
          }
        }), M;
      }, te.isValidElement = xt, te.lazy = function(v) {
        v = { _status: -1, _result: v };
        var M = {
          $$typeof: vn,
          _payload: v,
          _init: bt
        }, I = {
          name: "lazy",
          start: -1,
          end: -1,
          value: null,
          owner: null,
          debugStack: Error("react-stack-top-frame"),
          debugTask: console.createTask ? console.createTask("lazy()") : null
        };
        return v._ioInfo = I, M._debugInfo = [{ awaited: I }], M;
      }, te.memo = function(v, M) {
        v == null && console.error(
          "memo: The first argument must be a component. Instead received: %s",
          v === null ? "null" : typeof v
        ), M = {
          $$typeof: ea,
          type: v,
          compare: M === void 0 ? null : M
        };
        var I;
        return Object.defineProperty(M, "displayName", {
          enumerable: !1,
          configurable: !0,
          get: function() {
            return I;
          },
          set: function(le) {
            I = le, v.name || v.displayName || (Object.defineProperty(v, "name", { value: le }), v.displayName = le);
          }
        }), M;
      }, te.startTransition = function(v) {
        var M = me.T, I = {};
        I._updatedFibers = /* @__PURE__ */ new Set(), me.T = I;
        try {
          var le = v(), se = me.S;
          se !== null && se(I, le), typeof le == "object" && le !== null && typeof le.then == "function" && (me.asyncTransitions++, le.then(Ue, Ue), le.then(V, ar));
        } catch (He) {
          ar(He);
        } finally {
          M === null && I._updatedFibers && (v = I._updatedFibers.size, I._updatedFibers.clear(), 10 < v && console.warn(
            "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
          )), M !== null && I.types !== null && (M.types !== null && M.types !== I.types && console.error(
            "We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."
          ), M.types = I.types), me.T = M;
        }
      }, te.unstable_useCacheRefresh = function() {
        return Ae().useCacheRefresh();
      }, te.use = function(v) {
        return Ae().use(v);
      }, te.useActionState = function(v, M, I) {
        return Ae().useActionState(
          v,
          M,
          I
        );
      }, te.useCallback = function(v, M) {
        return Ae().useCallback(v, M);
      }, te.useContext = function(v) {
        var M = Ae();
        return v.$$typeof === ae && console.error(
          "Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?"
        ), M.useContext(v);
      }, te.useDebugValue = function(v, M) {
        return Ae().useDebugValue(v, M);
      }, te.useDeferredValue = function(v, M) {
        return Ae().useDeferredValue(v, M);
      }, te.useEffect = function(v, M) {
        return v == null && console.warn(
          "React Hook useEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        ), Ae().useEffect(v, M);
      }, te.useEffectEvent = function(v) {
        return Ae().useEffectEvent(v);
      }, te.useId = function() {
        return Ae().useId();
      }, te.useImperativeHandle = function(v, M, I) {
        return Ae().useImperativeHandle(v, M, I);
      }, te.useInsertionEffect = function(v, M) {
        return v == null && console.warn(
          "React Hook useInsertionEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        ), Ae().useInsertionEffect(v, M);
      }, te.useLayoutEffect = function(v, M) {
        return v == null && console.warn(
          "React Hook useLayoutEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        ), Ae().useLayoutEffect(v, M);
      }, te.useMemo = function(v, M) {
        return Ae().useMemo(v, M);
      }, te.useOptimistic = function(v, M) {
        return Ae().useOptimistic(v, M);
      }, te.useReducer = function(v, M, I) {
        return Ae().useReducer(v, M, I);
      }, te.useRef = function(v) {
        return Ae().useRef(v);
      }, te.useState = function(v) {
        return Ae().useState(v);
      }, te.useSyncExternalStore = function(v, M, I) {
        return Ae().useSyncExternalStore(
          v,
          M,
          I
        );
      }, te.useTransition = function() {
        return Ae().useTransition();
      }, te.version = "19.2.3", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    })();
  })(M0, M0.exports)), M0.exports;
}
var BE;
function Um() {
  if (BE) return Xg.exports;
  BE = 1;
  var Q = {};
  return Q.NODE_ENV === "production" ? Xg.exports = SA() : Xg.exports = bA(), Xg.exports;
}
var xE;
function EA() {
  if (xE) return _0;
  xE = 1;
  var Q = {};
  return Q.NODE_ENV !== "production" && (function() {
    function te(A) {
      if (A == null) return null;
      if (typeof A == "function")
        return A.$$typeof === bt ? null : A.displayName || A.name || null;
      if (typeof A == "string") return A;
      switch (A) {
        case Te:
          return "Fragment";
        case St:
          return "Profiler";
        case Ze:
          return "StrictMode";
        case Xe:
          return "Suspense";
        case _t:
          return "SuspenseList";
        case re:
          return "Activity";
      }
      if (typeof A == "object")
        switch (typeof A.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), A.$$typeof) {
          case Qt:
            return "Portal";
          case $t:
            return A.displayName || "Context";
          case Lt:
            return (A._context.displayName || "Context") + ".Consumer";
          case xt:
            var $ = A.render;
            return A = A.displayName, A || (A = $.displayName || $.name || "", A = A !== "" ? "ForwardRef(" + A + ")" : "ForwardRef"), A;
          case tt:
            return $ = A.displayName || null, $ !== null ? $ : te(A.type) || "Memo";
          case Vt:
            $ = A._payload, A = A._init;
            try {
              return te(A($));
            } catch {
            }
        }
      return null;
    }
    function Ne(A) {
      return "" + A;
    }
    function B(A) {
      try {
        Ne(A);
        var $ = !1;
      } catch {
        $ = !0;
      }
      if ($) {
        $ = console;
        var ee = $.error, ae = typeof Symbol == "function" && Symbol.toStringTag && A[Symbol.toStringTag] || A.constructor.name || "Object";
        return ee.call(
          $,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          ae
        ), Ne(A);
      }
    }
    function Me(A) {
      if (A === Te) return "<>";
      if (typeof A == "object" && A !== null && A.$$typeof === Vt)
        return "<...>";
      try {
        var $ = te(A);
        return $ ? "<" + $ + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function Re() {
      var A = Ae.A;
      return A === null ? null : A.getOwner();
    }
    function je() {
      return Error("react-stack-top-frame");
    }
    function gt(A) {
      if (Ue.call(A, "key")) {
        var $ = Object.getOwnPropertyDescriptor(A, "key").get;
        if ($ && $.isReactWarning) return !1;
      }
      return A.key !== void 0;
    }
    function L(A, $) {
      function ee() {
        j || (j = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          $
        ));
      }
      ee.isReactWarning = !0, Object.defineProperty(A, "key", {
        get: ee,
        configurable: !0
      });
    }
    function V() {
      var A = te(this.type);
      return P[A] || (P[A] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), A = this.props.ref, A !== void 0 ? A : null;
    }
    function we(A, $, ee, ae, ze, lt) {
      var Fe = ee.ref;
      return A = {
        $$typeof: qe,
        type: A,
        key: $,
        props: ee,
        _owner: ae
      }, (Fe !== void 0 ? Fe : null) !== null ? Object.defineProperty(A, "ref", {
        enumerable: !1,
        get: V
      }) : Object.defineProperty(A, "ref", { enumerable: !1, value: null }), A._store = {}, Object.defineProperty(A._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(A, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(A, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: ze
      }), Object.defineProperty(A, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: lt
      }), Object.freeze && (Object.freeze(A.props), Object.freeze(A)), A;
    }
    function de(A, $, ee, ae, ze, lt) {
      var Fe = $.children;
      if (Fe !== void 0)
        if (ae)
          if (jt(Fe)) {
            for (ae = 0; ae < Fe.length; ae++)
              k(Fe[ae]);
            Object.freeze && Object.freeze(Fe);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else k(Fe);
      if (Ue.call($, "key")) {
        Fe = te(A);
        var Et = Object.keys($).filter(function(vn) {
          return vn !== "key";
        });
        ae = 0 < Et.length ? "{key: someKey, " + Et.join(": ..., ") + ": ...}" : "{key: someKey}", O[Fe + ae] || (Et = 0 < Et.length ? "{" + Et.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          ae,
          Fe,
          Et,
          Fe
        ), O[Fe + ae] = !0);
      }
      if (Fe = null, ee !== void 0 && (B(ee), Fe = "" + ee), gt($) && (B($.key), Fe = "" + $.key), "key" in $) {
        ee = {};
        for (var ea in $)
          ea !== "key" && (ee[ea] = $[ea]);
      } else ee = $;
      return Fe && L(
        ee,
        typeof A == "function" ? A.displayName || A.name || "Unknown" : A
      ), we(
        A,
        Fe,
        ee,
        Re(),
        ze,
        lt
      );
    }
    function k(A) {
      U(A) ? A._store && (A._store.validated = 1) : typeof A == "object" && A !== null && A.$$typeof === Vt && (A._payload.status === "fulfilled" ? U(A._payload.value) && A._payload.value._store && (A._payload.value._store.validated = 1) : A._store && (A._store.validated = 1));
    }
    function U(A) {
      return typeof A == "object" && A !== null && A.$$typeof === qe;
    }
    var ue = Um(), qe = /* @__PURE__ */ Symbol.for("react.transitional.element"), Qt = /* @__PURE__ */ Symbol.for("react.portal"), Te = /* @__PURE__ */ Symbol.for("react.fragment"), Ze = /* @__PURE__ */ Symbol.for("react.strict_mode"), St = /* @__PURE__ */ Symbol.for("react.profiler"), Lt = /* @__PURE__ */ Symbol.for("react.consumer"), $t = /* @__PURE__ */ Symbol.for("react.context"), xt = /* @__PURE__ */ Symbol.for("react.forward_ref"), Xe = /* @__PURE__ */ Symbol.for("react.suspense"), _t = /* @__PURE__ */ Symbol.for("react.suspense_list"), tt = /* @__PURE__ */ Symbol.for("react.memo"), Vt = /* @__PURE__ */ Symbol.for("react.lazy"), re = /* @__PURE__ */ Symbol.for("react.activity"), bt = /* @__PURE__ */ Symbol.for("react.client.reference"), Ae = ue.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Ue = Object.prototype.hasOwnProperty, jt = Array.isArray, X = console.createTask ? console.createTask : function() {
      return null;
    };
    ue = {
      react_stack_bottom_frame: function(A) {
        return A();
      }
    };
    var j, P = {}, ce = ue.react_stack_bottom_frame.bind(
      ue,
      je
    )(), ge = X(Me(je)), O = {};
    _0.Fragment = Te, _0.jsx = function(A, $, ee) {
      var ae = 1e4 > Ae.recentlyCreatedOwnerStacks++;
      return de(
        A,
        $,
        ee,
        !1,
        ae ? Error("react-stack-top-frame") : ce,
        ae ? X(Me(A)) : ge
      );
    }, _0.jsxs = function(A, $, ee) {
      var ae = 1e4 > Ae.recentlyCreatedOwnerStacks++;
      return de(
        A,
        $,
        ee,
        !0,
        ae ? Error("react-stack-top-frame") : ce,
        ae ? X(Me(A)) : ge
      );
    };
  })(), _0;
}
var jE;
function TA() {
  if (jE) return wg.exports;
  jE = 1;
  var Q = {};
  return Q.NODE_ENV === "production" ? wg.exports = gA() : wg.exports = EA(), wg.exports;
}
var ka = TA(), Qg = { exports: {} }, D0 = {}, Lg = { exports: {} }, g1 = {};
var YE;
function AA() {
  return YE || (YE = 1, (function(Q) {
    function te(X, j) {
      var P = X.length;
      X.push(j);
      e: for (; 0 < P; ) {
        var ce = P - 1 >>> 1, ge = X[ce];
        if (0 < Me(ge, j))
          X[ce] = j, X[P] = ge, P = ce;
        else break e;
      }
    }
    function Ne(X) {
      return X.length === 0 ? null : X[0];
    }
    function B(X) {
      if (X.length === 0) return null;
      var j = X[0], P = X.pop();
      if (P !== j) {
        X[0] = P;
        e: for (var ce = 0, ge = X.length, O = ge >>> 1; ce < O; ) {
          var A = 2 * (ce + 1) - 1, $ = X[A], ee = A + 1, ae = X[ee];
          if (0 > Me($, P))
            ee < ge && 0 > Me(ae, $) ? (X[ce] = ae, X[ee] = P, ce = ee) : (X[ce] = $, X[A] = P, ce = A);
          else if (ee < ge && 0 > Me(ae, P))
            X[ce] = ae, X[ee] = P, ce = ee;
          else break e;
        }
      }
      return j;
    }
    function Me(X, j) {
      var P = X.sortIndex - j.sortIndex;
      return P !== 0 ? P : X.id - j.id;
    }
    if (Q.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var Re = performance;
      Q.unstable_now = function() {
        return Re.now();
      };
    } else {
      var je = Date, gt = je.now();
      Q.unstable_now = function() {
        return je.now() - gt;
      };
    }
    var L = [], V = [], we = 1, de = null, k = 3, U = !1, ue = !1, qe = !1, Qt = !1, Te = typeof setTimeout == "function" ? setTimeout : null, Ze = typeof clearTimeout == "function" ? clearTimeout : null, St = typeof setImmediate < "u" ? setImmediate : null;
    function Lt(X) {
      for (var j = Ne(V); j !== null; ) {
        if (j.callback === null) B(V);
        else if (j.startTime <= X)
          B(V), j.sortIndex = j.expirationTime, te(L, j);
        else break;
        j = Ne(V);
      }
    }
    function $t(X) {
      if (qe = !1, Lt(X), !ue)
        if (Ne(L) !== null)
          ue = !0, xt || (xt = !0, bt());
        else {
          var j = Ne(V);
          j !== null && jt($t, j.startTime - X);
        }
    }
    var xt = !1, Xe = -1, _t = 5, tt = -1;
    function Vt() {
      return Qt ? !0 : !(Q.unstable_now() - tt < _t);
    }
    function re() {
      if (Qt = !1, xt) {
        var X = Q.unstable_now();
        tt = X;
        var j = !0;
        try {
          e: {
            ue = !1, qe && (qe = !1, Ze(Xe), Xe = -1), U = !0;
            var P = k;
            try {
              t: {
                for (Lt(X), de = Ne(L); de !== null && !(de.expirationTime > X && Vt()); ) {
                  var ce = de.callback;
                  if (typeof ce == "function") {
                    de.callback = null, k = de.priorityLevel;
                    var ge = ce(
                      de.expirationTime <= X
                    );
                    if (X = Q.unstable_now(), typeof ge == "function") {
                      de.callback = ge, Lt(X), j = !0;
                      break t;
                    }
                    de === Ne(L) && B(L), Lt(X);
                  } else B(L);
                  de = Ne(L);
                }
                if (de !== null) j = !0;
                else {
                  var O = Ne(V);
                  O !== null && jt(
                    $t,
                    O.startTime - X
                  ), j = !1;
                }
              }
              break e;
            } finally {
              de = null, k = P, U = !1;
            }
            j = void 0;
          }
        } finally {
          j ? bt() : xt = !1;
        }
      }
    }
    var bt;
    if (typeof St == "function")
      bt = function() {
        St(re);
      };
    else if (typeof MessageChannel < "u") {
      var Ae = new MessageChannel(), Ue = Ae.port2;
      Ae.port1.onmessage = re, bt = function() {
        Ue.postMessage(null);
      };
    } else
      bt = function() {
        Te(re, 0);
      };
    function jt(X, j) {
      Xe = Te(function() {
        X(Q.unstable_now());
      }, j);
    }
    Q.unstable_IdlePriority = 5, Q.unstable_ImmediatePriority = 1, Q.unstable_LowPriority = 4, Q.unstable_NormalPriority = 3, Q.unstable_Profiling = null, Q.unstable_UserBlockingPriority = 2, Q.unstable_cancelCallback = function(X) {
      X.callback = null;
    }, Q.unstable_forceFrameRate = function(X) {
      0 > X || 125 < X ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : _t = 0 < X ? Math.floor(1e3 / X) : 5;
    }, Q.unstable_getCurrentPriorityLevel = function() {
      return k;
    }, Q.unstable_next = function(X) {
      switch (k) {
        case 1:
        case 2:
        case 3:
          var j = 3;
          break;
        default:
          j = k;
      }
      var P = k;
      k = j;
      try {
        return X();
      } finally {
        k = P;
      }
    }, Q.unstable_requestPaint = function() {
      Qt = !0;
    }, Q.unstable_runWithPriority = function(X, j) {
      switch (X) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          X = 3;
      }
      var P = k;
      k = X;
      try {
        return j();
      } finally {
        k = P;
      }
    }, Q.unstable_scheduleCallback = function(X, j, P) {
      var ce = Q.unstable_now();
      switch (typeof P == "object" && P !== null ? (P = P.delay, P = typeof P == "number" && 0 < P ? ce + P : ce) : P = ce, X) {
        case 1:
          var ge = -1;
          break;
        case 2:
          ge = 250;
          break;
        case 5:
          ge = 1073741823;
          break;
        case 4:
          ge = 1e4;
          break;
        default:
          ge = 5e3;
      }
      return ge = P + ge, X = {
        id: we++,
        callback: j,
        priorityLevel: X,
        startTime: P,
        expirationTime: ge,
        sortIndex: -1
      }, P > ce ? (X.sortIndex = P, te(V, X), Ne(L) === null && X === Ne(V) && (qe ? (Ze(Xe), Xe = -1) : qe = !0, jt($t, P - ce))) : (X.sortIndex = ge, te(L, X), ue || U || (ue = !0, xt || (xt = !0, bt()))), X;
    }, Q.unstable_shouldYield = Vt, Q.unstable_wrapCallback = function(X) {
      var j = k;
      return function() {
        var P = k;
        k = j;
        try {
          return X.apply(this, arguments);
        } finally {
          k = P;
        }
      };
    };
  })(g1)), g1;
}
var S1 = {}, qE;
function OA() {
  return qE || (qE = 1, (function(Q) {
    var te = {};
    te.NODE_ENV !== "production" && (function() {
      function Ne() {
        if (xt = !1, Vt) {
          var j = Q.unstable_now();
          Ae = j;
          var P = !0;
          try {
            e: {
              Lt = !1, $t && ($t = !1, _t(re), re = -1), St = !0;
              var ce = Ze;
              try {
                t: {
                  for (gt(j), Te = Me(ue); Te !== null && !(Te.expirationTime > j && V()); ) {
                    var ge = Te.callback;
                    if (typeof ge == "function") {
                      Te.callback = null, Ze = Te.priorityLevel;
                      var O = ge(
                        Te.expirationTime <= j
                      );
                      if (j = Q.unstable_now(), typeof O == "function") {
                        Te.callback = O, gt(j), P = !0;
                        break t;
                      }
                      Te === Me(ue) && Re(ue), gt(j);
                    } else Re(ue);
                    Te = Me(ue);
                  }
                  if (Te !== null) P = !0;
                  else {
                    var A = Me(qe);
                    A !== null && we(
                      L,
                      A.startTime - j
                    ), P = !1;
                  }
                }
                break e;
              } finally {
                Te = null, Ze = ce, St = !1;
              }
              P = void 0;
            }
          } finally {
            P ? Ue() : Vt = !1;
          }
        }
      }
      function B(j, P) {
        var ce = j.length;
        j.push(P);
        e: for (; 0 < ce; ) {
          var ge = ce - 1 >>> 1, O = j[ge];
          if (0 < je(O, P))
            j[ge] = P, j[ce] = O, ce = ge;
          else break e;
        }
      }
      function Me(j) {
        return j.length === 0 ? null : j[0];
      }
      function Re(j) {
        if (j.length === 0) return null;
        var P = j[0], ce = j.pop();
        if (ce !== P) {
          j[0] = ce;
          e: for (var ge = 0, O = j.length, A = O >>> 1; ge < A; ) {
            var $ = 2 * (ge + 1) - 1, ee = j[$], ae = $ + 1, ze = j[ae];
            if (0 > je(ee, ce))
              ae < O && 0 > je(ze, ee) ? (j[ge] = ze, j[ae] = ce, ge = ae) : (j[ge] = ee, j[$] = ce, ge = $);
            else if (ae < O && 0 > je(ze, ce))
              j[ge] = ze, j[ae] = ce, ge = ae;
            else break e;
          }
        }
        return P;
      }
      function je(j, P) {
        var ce = j.sortIndex - P.sortIndex;
        return ce !== 0 ? ce : j.id - P.id;
      }
      function gt(j) {
        for (var P = Me(qe); P !== null; ) {
          if (P.callback === null) Re(qe);
          else if (P.startTime <= j)
            Re(qe), P.sortIndex = P.expirationTime, B(ue, P);
          else break;
          P = Me(qe);
        }
      }
      function L(j) {
        if ($t = !1, gt(j), !Lt)
          if (Me(ue) !== null)
            Lt = !0, Vt || (Vt = !0, Ue());
          else {
            var P = Me(qe);
            P !== null && we(
              L,
              P.startTime - j
            );
          }
      }
      function V() {
        return xt ? !0 : !(Q.unstable_now() - Ae < bt);
      }
      function we(j, P) {
        re = Xe(function() {
          j(Q.unstable_now());
        }, P);
      }
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error()), Q.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
        var de = performance;
        Q.unstable_now = function() {
          return de.now();
        };
      } else {
        var k = Date, U = k.now();
        Q.unstable_now = function() {
          return k.now() - U;
        };
      }
      var ue = [], qe = [], Qt = 1, Te = null, Ze = 3, St = !1, Lt = !1, $t = !1, xt = !1, Xe = typeof setTimeout == "function" ? setTimeout : null, _t = typeof clearTimeout == "function" ? clearTimeout : null, tt = typeof setImmediate < "u" ? setImmediate : null, Vt = !1, re = -1, bt = 5, Ae = -1;
      if (typeof tt == "function")
        var Ue = function() {
          tt(Ne);
        };
      else if (typeof MessageChannel < "u") {
        var jt = new MessageChannel(), X = jt.port2;
        jt.port1.onmessage = Ne, Ue = function() {
          X.postMessage(null);
        };
      } else
        Ue = function() {
          Xe(Ne, 0);
        };
      Q.unstable_IdlePriority = 5, Q.unstable_ImmediatePriority = 1, Q.unstable_LowPriority = 4, Q.unstable_NormalPriority = 3, Q.unstable_Profiling = null, Q.unstable_UserBlockingPriority = 2, Q.unstable_cancelCallback = function(j) {
        j.callback = null;
      }, Q.unstable_forceFrameRate = function(j) {
        0 > j || 125 < j ? console.error(
          "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
        ) : bt = 0 < j ? Math.floor(1e3 / j) : 5;
      }, Q.unstable_getCurrentPriorityLevel = function() {
        return Ze;
      }, Q.unstable_next = function(j) {
        switch (Ze) {
          case 1:
          case 2:
          case 3:
            var P = 3;
            break;
          default:
            P = Ze;
        }
        var ce = Ze;
        Ze = P;
        try {
          return j();
        } finally {
          Ze = ce;
        }
      }, Q.unstable_requestPaint = function() {
        xt = !0;
      }, Q.unstable_runWithPriority = function(j, P) {
        switch (j) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            j = 3;
        }
        var ce = Ze;
        Ze = j;
        try {
          return P();
        } finally {
          Ze = ce;
        }
      }, Q.unstable_scheduleCallback = function(j, P, ce) {
        var ge = Q.unstable_now();
        switch (typeof ce == "object" && ce !== null ? (ce = ce.delay, ce = typeof ce == "number" && 0 < ce ? ge + ce : ge) : ce = ge, j) {
          case 1:
            var O = -1;
            break;
          case 2:
            O = 250;
            break;
          case 5:
            O = 1073741823;
            break;
          case 4:
            O = 1e4;
            break;
          default:
            O = 5e3;
        }
        return O = ce + O, j = {
          id: Qt++,
          callback: P,
          priorityLevel: j,
          startTime: ce,
          expirationTime: O,
          sortIndex: -1
        }, ce > ge ? (j.sortIndex = ce, B(qe, j), Me(ue) === null && j === Me(qe) && ($t ? (_t(re), re = -1) : $t = !0, we(L, ce - ge))) : (j.sortIndex = O, B(ue, j), Lt || St || (Lt = !0, Vt || (Vt = !0, Ue()))), j;
      }, Q.unstable_shouldYield = V, Q.unstable_wrapCallback = function(j) {
        var P = Ze;
        return function() {
          var ce = Ze;
          Ze = P;
          try {
            return j.apply(this, arguments);
          } finally {
            Ze = ce;
          }
        };
      }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    })();
  })(S1)), S1;
}
var GE;
function KE() {
  if (GE) return Lg.exports;
  GE = 1;
  var Q = {};
  return Q.NODE_ENV === "production" ? Lg.exports = AA() : Lg.exports = OA(), Lg.exports;
}
var Vg = { exports: {} }, Ka = {};
var wE;
function zA() {
  if (wE) return Ka;
  wE = 1;
  var Q = Um();
  function te(L) {
    var V = "https://react.dev/errors/" + L;
    if (1 < arguments.length) {
      V += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var we = 2; we < arguments.length; we++)
        V += "&args[]=" + encodeURIComponent(arguments[we]);
    }
    return "Minified React error #" + L + "; visit " + V + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function Ne() {
  }
  var B = {
    d: {
      f: Ne,
      r: function() {
        throw Error(te(522));
      },
      D: Ne,
      C: Ne,
      L: Ne,
      m: Ne,
      X: Ne,
      S: Ne,
      M: Ne
    },
    p: 0,
    findDOMNode: null
  }, Me = /* @__PURE__ */ Symbol.for("react.portal");
  function Re(L, V, we) {
    var de = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: Me,
      key: de == null ? null : "" + de,
      children: L,
      containerInfo: V,
      implementation: we
    };
  }
  var je = Q.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function gt(L, V) {
    if (L === "font") return "";
    if (typeof V == "string")
      return V === "use-credentials" ? V : "";
  }
  return Ka.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = B, Ka.createPortal = function(L, V) {
    var we = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!V || V.nodeType !== 1 && V.nodeType !== 9 && V.nodeType !== 11)
      throw Error(te(299));
    return Re(L, V, null, we);
  }, Ka.flushSync = function(L) {
    var V = je.T, we = B.p;
    try {
      if (je.T = null, B.p = 2, L) return L();
    } finally {
      je.T = V, B.p = we, B.d.f();
    }
  }, Ka.preconnect = function(L, V) {
    typeof L == "string" && (V ? (V = V.crossOrigin, V = typeof V == "string" ? V === "use-credentials" ? V : "" : void 0) : V = null, B.d.C(L, V));
  }, Ka.prefetchDNS = function(L) {
    typeof L == "string" && B.d.D(L);
  }, Ka.preinit = function(L, V) {
    if (typeof L == "string" && V && typeof V.as == "string") {
      var we = V.as, de = gt(we, V.crossOrigin), k = typeof V.integrity == "string" ? V.integrity : void 0, U = typeof V.fetchPriority == "string" ? V.fetchPriority : void 0;
      we === "style" ? B.d.S(
        L,
        typeof V.precedence == "string" ? V.precedence : void 0,
        {
          crossOrigin: de,
          integrity: k,
          fetchPriority: U
        }
      ) : we === "script" && B.d.X(L, {
        crossOrigin: de,
        integrity: k,
        fetchPriority: U,
        nonce: typeof V.nonce == "string" ? V.nonce : void 0
      });
    }
  }, Ka.preinitModule = function(L, V) {
    if (typeof L == "string")
      if (typeof V == "object" && V !== null) {
        if (V.as == null || V.as === "script") {
          var we = gt(
            V.as,
            V.crossOrigin
          );
          B.d.M(L, {
            crossOrigin: we,
            integrity: typeof V.integrity == "string" ? V.integrity : void 0,
            nonce: typeof V.nonce == "string" ? V.nonce : void 0
          });
        }
      } else V == null && B.d.M(L);
  }, Ka.preload = function(L, V) {
    if (typeof L == "string" && typeof V == "object" && V !== null && typeof V.as == "string") {
      var we = V.as, de = gt(we, V.crossOrigin);
      B.d.L(L, we, {
        crossOrigin: de,
        integrity: typeof V.integrity == "string" ? V.integrity : void 0,
        nonce: typeof V.nonce == "string" ? V.nonce : void 0,
        type: typeof V.type == "string" ? V.type : void 0,
        fetchPriority: typeof V.fetchPriority == "string" ? V.fetchPriority : void 0,
        referrerPolicy: typeof V.referrerPolicy == "string" ? V.referrerPolicy : void 0,
        imageSrcSet: typeof V.imageSrcSet == "string" ? V.imageSrcSet : void 0,
        imageSizes: typeof V.imageSizes == "string" ? V.imageSizes : void 0,
        media: typeof V.media == "string" ? V.media : void 0
      });
    }
  }, Ka.preloadModule = function(L, V) {
    if (typeof L == "string")
      if (V) {
        var we = gt(V.as, V.crossOrigin);
        B.d.m(L, {
          as: typeof V.as == "string" && V.as !== "script" ? V.as : void 0,
          crossOrigin: we,
          integrity: typeof V.integrity == "string" ? V.integrity : void 0
        });
      } else B.d.m(L);
  }, Ka.requestFormReset = function(L) {
    B.d.r(L);
  }, Ka.unstable_batchedUpdates = function(L, V) {
    return L(V);
  }, Ka.useFormState = function(L, V, we) {
    return je.H.useFormState(L, V, we);
  }, Ka.useFormStatus = function() {
    return je.H.useHostTransitionStatus();
  }, Ka.version = "19.2.3", Ka;
}
var $a = {}, XE;
function _A() {
  if (XE) return $a;
  XE = 1;
  var Q = {};
  return Q.NODE_ENV !== "production" && (function() {
    function te() {
    }
    function Ne(k) {
      return "" + k;
    }
    function B(k, U, ue) {
      var qe = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      try {
        Ne(qe);
        var Qt = !1;
      } catch {
        Qt = !0;
      }
      return Qt && (console.error(
        "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
        typeof Symbol == "function" && Symbol.toStringTag && qe[Symbol.toStringTag] || qe.constructor.name || "Object"
      ), Ne(qe)), {
        $$typeof: we,
        key: qe == null ? null : "" + qe,
        children: k,
        containerInfo: U,
        implementation: ue
      };
    }
    function Me(k, U) {
      if (k === "font") return "";
      if (typeof U == "string")
        return U === "use-credentials" ? U : "";
    }
    function Re(k) {
      return k === null ? "`null`" : k === void 0 ? "`undefined`" : k === "" ? "an empty string" : 'something with type "' + typeof k + '"';
    }
    function je(k) {
      return k === null ? "`null`" : k === void 0 ? "`undefined`" : k === "" ? "an empty string" : typeof k == "string" ? JSON.stringify(k) : typeof k == "number" ? "`" + k + "`" : 'something with type "' + typeof k + '"';
    }
    function gt() {
      var k = de.H;
      return k === null && console.error(
        `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
      ), k;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var L = Um(), V = {
      d: {
        f: te,
        r: function() {
          throw Error(
            "Invalid form element. requestFormReset must be passed a form that was rendered by React."
          );
        },
        D: te,
        C: te,
        L: te,
        m: te,
        X: te,
        S: te,
        M: te
      },
      p: 0,
      findDOMNode: null
    }, we = /* @__PURE__ */ Symbol.for("react.portal"), de = L.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    typeof Map == "function" && Map.prototype != null && typeof Map.prototype.forEach == "function" && typeof Set == "function" && Set.prototype != null && typeof Set.prototype.clear == "function" && typeof Set.prototype.forEach == "function" || console.error(
      "React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
    ), $a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = V, $a.createPortal = function(k, U) {
      var ue = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!U || U.nodeType !== 1 && U.nodeType !== 9 && U.nodeType !== 11)
        throw Error("Target container is not a DOM element.");
      return B(k, U, null, ue);
    }, $a.flushSync = function(k) {
      var U = de.T, ue = V.p;
      try {
        if (de.T = null, V.p = 2, k)
          return k();
      } finally {
        de.T = U, V.p = ue, V.d.f() && console.error(
          "flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."
        );
      }
    }, $a.preconnect = function(k, U) {
      typeof k == "string" && k ? U != null && typeof U != "object" ? console.error(
        "ReactDOM.preconnect(): Expected the `options` argument (second) to be an object but encountered %s instead. The only supported option at this time is `crossOrigin` which accepts a string.",
        je(U)
      ) : U != null && typeof U.crossOrigin != "string" && console.error(
        "ReactDOM.preconnect(): Expected the `crossOrigin` option (second argument) to be a string but encountered %s instead. Try removing this option or passing a string value instead.",
        Re(U.crossOrigin)
      ) : console.error(
        "ReactDOM.preconnect(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
        Re(k)
      ), typeof k == "string" && (U ? (U = U.crossOrigin, U = typeof U == "string" ? U === "use-credentials" ? U : "" : void 0) : U = null, V.d.C(k, U));
    }, $a.prefetchDNS = function(k) {
      if (typeof k != "string" || !k)
        console.error(
          "ReactDOM.prefetchDNS(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
          Re(k)
        );
      else if (1 < arguments.length) {
        var U = arguments[1];
        typeof U == "object" && U.hasOwnProperty("crossOrigin") ? console.error(
          "ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. It looks like the you are attempting to set a crossOrigin property for this DNS lookup hint. Browsers do not perform DNS queries using CORS and setting this attribute on the resource hint has no effect. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",
          je(U)
        ) : console.error(
          "ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",
          je(U)
        );
      }
      typeof k == "string" && V.d.D(k);
    }, $a.preinit = function(k, U) {
      if (typeof k == "string" && k ? U == null || typeof U != "object" ? console.error(
        "ReactDOM.preinit(): Expected the `options` argument (second) to be an object with an `as` property describing the type of resource to be preinitialized but encountered %s instead.",
        je(U)
      ) : U.as !== "style" && U.as !== "script" && console.error(
        'ReactDOM.preinit(): Expected the `as` property in the `options` argument (second) to contain a valid value describing the type of resource to be preinitialized but encountered %s instead. Valid values for `as` are "style" and "script".',
        je(U.as)
      ) : console.error(
        "ReactDOM.preinit(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
        Re(k)
      ), typeof k == "string" && U && typeof U.as == "string") {
        var ue = U.as, qe = Me(ue, U.crossOrigin), Qt = typeof U.integrity == "string" ? U.integrity : void 0, Te = typeof U.fetchPriority == "string" ? U.fetchPriority : void 0;
        ue === "style" ? V.d.S(
          k,
          typeof U.precedence == "string" ? U.precedence : void 0,
          {
            crossOrigin: qe,
            integrity: Qt,
            fetchPriority: Te
          }
        ) : ue === "script" && V.d.X(k, {
          crossOrigin: qe,
          integrity: Qt,
          fetchPriority: Te,
          nonce: typeof U.nonce == "string" ? U.nonce : void 0
        });
      }
    }, $a.preinitModule = function(k, U) {
      var ue = "";
      typeof k == "string" && k || (ue += " The `href` argument encountered was " + Re(k) + "."), U !== void 0 && typeof U != "object" ? ue += " The `options` argument encountered was " + Re(U) + "." : U && "as" in U && U.as !== "script" && (ue += " The `as` option encountered was " + je(U.as) + "."), ue ? console.error(
        "ReactDOM.preinitModule(): Expected up to two arguments, a non-empty `href` string and, optionally, an `options` object with a valid `as` property.%s",
        ue
      ) : (ue = U && typeof U.as == "string" ? U.as : "script", ue) === "script" || (ue = je(ue), console.error(
        'ReactDOM.preinitModule(): Currently the only supported "as" type for this function is "script" but received "%s" instead. This warning was generated for `href` "%s". In the future other module types will be supported, aligning with the import-attributes proposal. Learn more here: (https://github.com/tc39/proposal-import-attributes)',
        ue,
        k
      )), typeof k == "string" && (typeof U == "object" && U !== null ? (U.as == null || U.as === "script") && (ue = Me(
        U.as,
        U.crossOrigin
      ), V.d.M(k, {
        crossOrigin: ue,
        integrity: typeof U.integrity == "string" ? U.integrity : void 0,
        nonce: typeof U.nonce == "string" ? U.nonce : void 0
      })) : U == null && V.d.M(k));
    }, $a.preload = function(k, U) {
      var ue = "";
      if (typeof k == "string" && k || (ue += " The `href` argument encountered was " + Re(k) + "."), U == null || typeof U != "object" ? ue += " The `options` argument encountered was " + Re(U) + "." : typeof U.as == "string" && U.as || (ue += " The `as` option encountered was " + Re(U.as) + "."), ue && console.error(
        'ReactDOM.preload(): Expected two arguments, a non-empty `href` string and an `options` object with an `as` property valid for a `<link rel="preload" as="..." />` tag.%s',
        ue
      ), typeof k == "string" && typeof U == "object" && U !== null && typeof U.as == "string") {
        ue = U.as;
        var qe = Me(
          ue,
          U.crossOrigin
        );
        V.d.L(k, ue, {
          crossOrigin: qe,
          integrity: typeof U.integrity == "string" ? U.integrity : void 0,
          nonce: typeof U.nonce == "string" ? U.nonce : void 0,
          type: typeof U.type == "string" ? U.type : void 0,
          fetchPriority: typeof U.fetchPriority == "string" ? U.fetchPriority : void 0,
          referrerPolicy: typeof U.referrerPolicy == "string" ? U.referrerPolicy : void 0,
          imageSrcSet: typeof U.imageSrcSet == "string" ? U.imageSrcSet : void 0,
          imageSizes: typeof U.imageSizes == "string" ? U.imageSizes : void 0,
          media: typeof U.media == "string" ? U.media : void 0
        });
      }
    }, $a.preloadModule = function(k, U) {
      var ue = "";
      typeof k == "string" && k || (ue += " The `href` argument encountered was " + Re(k) + "."), U !== void 0 && typeof U != "object" ? ue += " The `options` argument encountered was " + Re(U) + "." : U && "as" in U && typeof U.as != "string" && (ue += " The `as` option encountered was " + Re(U.as) + "."), ue && console.error(
        'ReactDOM.preloadModule(): Expected two arguments, a non-empty `href` string and, optionally, an `options` object with an `as` property valid for a `<link rel="modulepreload" as="..." />` tag.%s',
        ue
      ), typeof k == "string" && (U ? (ue = Me(
        U.as,
        U.crossOrigin
      ), V.d.m(k, {
        as: typeof U.as == "string" && U.as !== "script" ? U.as : void 0,
        crossOrigin: ue,
        integrity: typeof U.integrity == "string" ? U.integrity : void 0
      })) : V.d.m(k));
    }, $a.requestFormReset = function(k) {
      V.d.r(k);
    }, $a.unstable_batchedUpdates = function(k, U) {
      return k(U);
    }, $a.useFormState = function(k, U, ue) {
      return gt().useFormState(k, U, ue);
    }, $a.useFormStatus = function() {
      return gt().useHostTransitionStatus();
    }, $a.version = "19.2.3", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  })(), $a;
}
var QE;
function $E() {
  if (QE) return Vg.exports;
  QE = 1;
  var Q = {};
  function te() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
      if (Q.NODE_ENV !== "production")
        throw new Error("^_^");
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(te);
      } catch (Ne) {
        console.error(Ne);
      }
    }
  }
  return Q.NODE_ENV === "production" ? (te(), Vg.exports = zA()) : Vg.exports = _A(), Vg.exports;
}
var LE;
function DA() {
  if (LE) return D0;
  LE = 1;
  var Q = KE(), te = Um(), Ne = $E();
  function B(l) {
    var n = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      n += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var u = 2; u < arguments.length; u++)
        n += "&args[]=" + encodeURIComponent(arguments[u]);
    }
    return "Minified React error #" + l + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function Me(l) {
    return !(!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11);
  }
  function Re(l) {
    var n = l, u = l;
    if (l.alternate) for (; n.return; ) n = n.return;
    else {
      l = n;
      do
        n = l, (n.flags & 4098) !== 0 && (u = n.return), l = n.return;
      while (l);
    }
    return n.tag === 3 ? u : null;
  }
  function je(l) {
    if (l.tag === 13) {
      var n = l.memoizedState;
      if (n === null && (l = l.alternate, l !== null && (n = l.memoizedState)), n !== null) return n.dehydrated;
    }
    return null;
  }
  function gt(l) {
    if (l.tag === 31) {
      var n = l.memoizedState;
      if (n === null && (l = l.alternate, l !== null && (n = l.memoizedState)), n !== null) return n.dehydrated;
    }
    return null;
  }
  function L(l) {
    if (Re(l) !== l)
      throw Error(B(188));
  }
  function V(l) {
    var n = l.alternate;
    if (!n) {
      if (n = Re(l), n === null) throw Error(B(188));
      return n !== l ? null : l;
    }
    for (var u = l, c = n; ; ) {
      var r = u.return;
      if (r === null) break;
      var s = r.alternate;
      if (s === null) {
        if (c = r.return, c !== null) {
          u = c;
          continue;
        }
        break;
      }
      if (r.child === s.child) {
        for (s = r.child; s; ) {
          if (s === u) return L(r), l;
          if (s === c) return L(r), n;
          s = s.sibling;
        }
        throw Error(B(188));
      }
      if (u.return !== c.return) u = r, c = s;
      else {
        for (var m = !1, g = r.child; g; ) {
          if (g === u) {
            m = !0, u = r, c = s;
            break;
          }
          if (g === c) {
            m = !0, c = r, u = s;
            break;
          }
          g = g.sibling;
        }
        if (!m) {
          for (g = s.child; g; ) {
            if (g === u) {
              m = !0, u = s, c = r;
              break;
            }
            if (g === c) {
              m = !0, c = s, u = r;
              break;
            }
            g = g.sibling;
          }
          if (!m) throw Error(B(189));
        }
      }
      if (u.alternate !== c) throw Error(B(190));
    }
    if (u.tag !== 3) throw Error(B(188));
    return u.stateNode.current === u ? l : n;
  }
  function we(l) {
    var n = l.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return l;
    for (l = l.child; l !== null; ) {
      if (n = we(l), n !== null) return n;
      l = l.sibling;
    }
    return null;
  }
  var de = Object.assign, k = /* @__PURE__ */ Symbol.for("react.element"), U = /* @__PURE__ */ Symbol.for("react.transitional.element"), ue = /* @__PURE__ */ Symbol.for("react.portal"), qe = /* @__PURE__ */ Symbol.for("react.fragment"), Qt = /* @__PURE__ */ Symbol.for("react.strict_mode"), Te = /* @__PURE__ */ Symbol.for("react.profiler"), Ze = /* @__PURE__ */ Symbol.for("react.consumer"), St = /* @__PURE__ */ Symbol.for("react.context"), Lt = /* @__PURE__ */ Symbol.for("react.forward_ref"), $t = /* @__PURE__ */ Symbol.for("react.suspense"), xt = /* @__PURE__ */ Symbol.for("react.suspense_list"), Xe = /* @__PURE__ */ Symbol.for("react.memo"), _t = /* @__PURE__ */ Symbol.for("react.lazy"), tt = /* @__PURE__ */ Symbol.for("react.activity"), Vt = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), re = Symbol.iterator;
  function bt(l) {
    return l === null || typeof l != "object" ? null : (l = re && l[re] || l["@@iterator"], typeof l == "function" ? l : null);
  }
  var Ae = /* @__PURE__ */ Symbol.for("react.client.reference");
  function Ue(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === Ae ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case qe:
        return "Fragment";
      case Te:
        return "Profiler";
      case Qt:
        return "StrictMode";
      case $t:
        return "Suspense";
      case xt:
        return "SuspenseList";
      case tt:
        return "Activity";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case ue:
          return "Portal";
        case St:
          return l.displayName || "Context";
        case Ze:
          return (l._context.displayName || "Context") + ".Consumer";
        case Lt:
          var n = l.render;
          return l = l.displayName, l || (l = n.displayName || n.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
        case Xe:
          return n = l.displayName || null, n !== null ? n : Ue(l.type) || "Memo";
        case _t:
          n = l._payload, l = l._init;
          try {
            return Ue(l(n));
          } catch {
          }
      }
    return null;
  }
  var jt = Array.isArray, X = te.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, j = Ne.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, P = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, ce = [], ge = -1;
  function O(l) {
    return { current: l };
  }
  function A(l) {
    0 > ge || (l.current = ce[ge], ce[ge] = null, ge--);
  }
  function $(l, n) {
    ge++, ce[ge] = l.current, l.current = n;
  }
  var ee = O(null), ae = O(null), ze = O(null), lt = O(null);
  function Fe(l, n) {
    switch ($(ze, n), $(ae, l), $(ee, null), n.nodeType) {
      case 9:
      case 11:
        l = (l = n.documentElement) && (l = l.namespaceURI) ? Tf(l) : 0;
        break;
      default:
        if (l = n.tagName, n = n.namespaceURI)
          n = Tf(n), l = Hv(n, l);
        else
          switch (l) {
            case "svg":
              l = 1;
              break;
            case "math":
              l = 2;
              break;
            default:
              l = 0;
          }
    }
    A(ee), $(ee, l);
  }
  function Et() {
    A(ee), A(ae), A(ze);
  }
  function ea(l) {
    l.memoizedState !== null && $(lt, l);
    var n = ee.current, u = Hv(n, l.type);
    n !== u && ($(ae, l), $(ee, u));
  }
  function vn(l) {
    ae.current === l && (A(ee), A(ae)), lt.current === l && (A(lt), rl._currentValue = P);
  }
  var fe, Tc;
  function Wa(l) {
    if (fe === void 0)
      try {
        throw Error();
      } catch (u) {
        var n = u.stack.trim().match(/\n( *(at )?)/);
        fe = n && n[1] || "", Tc = -1 < u.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < u.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + fe + l + Tc;
  }
  var ui = !1;
  function uu(l, n) {
    if (!l || ui) return "";
    ui = !0;
    var u = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var c = {
        DetermineComponentFrameRoot: function() {
          try {
            if (n) {
              var W = function() {
                throw Error();
              };
              if (Object.defineProperty(W.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(W, []);
                } catch (G) {
                  var x = G;
                }
                Reflect.construct(l, [], W);
              } else {
                try {
                  W.call();
                } catch (G) {
                  x = G;
                }
                l.call(W.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (G) {
                x = G;
              }
              (W = l()) && typeof W.catch == "function" && W.catch(function() {
              });
            }
          } catch (G) {
            if (G && x && typeof G.stack == "string")
              return [G.stack, x.stack];
          }
          return [null, null];
        }
      };
      c.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var r = Object.getOwnPropertyDescriptor(
        c.DetermineComponentFrameRoot,
        "name"
      );
      r && r.configurable && Object.defineProperty(
        c.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var s = c.DetermineComponentFrameRoot(), m = s[0], g = s[1];
      if (m && g) {
        var T = m.split(`
`), N = g.split(`
`);
        for (r = c = 0; c < T.length && !T[c].includes("DetermineComponentFrameRoot"); )
          c++;
        for (; r < N.length && !N[r].includes(
          "DetermineComponentFrameRoot"
        ); )
          r++;
        if (c === T.length || r === N.length)
          for (c = T.length - 1, r = N.length - 1; 1 <= c && 0 <= r && T[c] !== N[r]; )
            r--;
        for (; 1 <= c && 0 <= r; c--, r--)
          if (T[c] !== N[r]) {
            if (c !== 1 || r !== 1)
              do
                if (c--, r--, 0 > r || T[c] !== N[r]) {
                  var Z = `
` + T[c].replace(" at new ", " at ");
                  return l.displayName && Z.includes("<anonymous>") && (Z = Z.replace("<anonymous>", l.displayName)), Z;
                }
              while (1 <= c && 0 <= r);
            break;
          }
      }
    } finally {
      ui = !1, Error.prepareStackTrace = u;
    }
    return (u = l ? l.displayName || l.name : "") ? Wa(u) : "";
  }
  function zt(l, n) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return Wa(l.type);
      case 16:
        return Wa("Lazy");
      case 13:
        return l.child !== n && n !== null ? Wa("Suspense Fallback") : Wa("Suspense");
      case 19:
        return Wa("SuspenseList");
      case 0:
      case 15:
        return uu(l.type, !1);
      case 11:
        return uu(l.type.render, !1);
      case 1:
        return uu(l.type, !0);
      case 31:
        return Wa("Activity");
      default:
        return "";
    }
  }
  function ql(l) {
    try {
      var n = "", u = null;
      do
        n += zt(l, u), u = l, l = l.return;
      while (l);
      return n;
    } catch (c) {
      return `
Error generating stack: ` + c.message + `
` + c.stack;
    }
  }
  var Yi = Object.prototype.hasOwnProperty, er = Q.unstable_scheduleCallback, me = Q.unstable_cancelCallback, Bo = Q.unstable_shouldYield, iu = Q.unstable_requestPaint, El = Q.unstable_now, qi = Q.unstable_getCurrentPriorityLevel, tr = Q.unstable_ImmediatePriority, xo = Q.unstable_UserBlockingPriority, Gi = Q.unstable_NormalPriority, wi = Q.unstable_LowPriority, lr = Q.unstable_IdlePriority, ar = Q.log, nr = Q.unstable_setDisableYieldValue, Gn = null, pl = null;
  function za(l) {
    if (typeof ar == "function" && nr(l), pl && typeof pl.setStrictMode == "function")
      try {
        pl.setStrictMode(Gn, l);
      } catch {
      }
  }
  var Rl = Math.clz32 ? Math.clz32 : v, jo = Math.log, Xi = Math.LN2;
  function v(l) {
    return l >>>= 0, l === 0 ? 32 : 31 - (jo(l) / Xi | 0) | 0;
  }
  var M = 256, I = 262144, le = 4194304;
  function se(l) {
    var n = l & 42;
    if (n !== 0) return n;
    switch (l & -l) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return l & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return l & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return l & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return l;
    }
  }
  function He(l, n, u) {
    var c = l.pendingLanes;
    if (c === 0) return 0;
    var r = 0, s = l.suspendedLanes, m = l.pingedLanes;
    l = l.warmLanes;
    var g = c & 134217727;
    return g !== 0 ? (c = g & ~s, c !== 0 ? r = se(c) : (m &= g, m !== 0 ? r = se(m) : u || (u = g & ~l, u !== 0 && (r = se(u))))) : (g = c & ~s, g !== 0 ? r = se(g) : m !== 0 ? r = se(m) : u || (u = c & ~l, u !== 0 && (r = se(u)))), r === 0 ? 0 : n !== 0 && n !== r && (n & s) === 0 && (s = r & -r, u = n & -n, s >= u || s === 32 && (u & 4194048) !== 0) ? n : r;
  }
  function ye(l, n) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & n) === 0;
  }
  function ot(l, n) {
    switch (l) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return n + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Ye() {
    var l = le;
    return le <<= 1, (le & 62914560) === 0 && (le = 4194304), l;
  }
  function Gl(l) {
    for (var n = [], u = 0; 31 > u; u++) n.push(l);
    return n;
  }
  function _a(l, n) {
    l.pendingLanes |= n, n !== 268435456 && (l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0);
  }
  function fd(l, n, u, c, r, s) {
    var m = l.pendingLanes;
    l.pendingLanes = u, l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0, l.expiredLanes &= u, l.entangledLanes &= u, l.errorRecoveryDisabledLanes &= u, l.shellSuspendCounter = 0;
    var g = l.entanglements, T = l.expirationTimes, N = l.hiddenUpdates;
    for (u = m & ~u; 0 < u; ) {
      var Z = 31 - Rl(u), W = 1 << Z;
      g[Z] = 0, T[Z] = -1;
      var x = N[Z];
      if (x !== null)
        for (N[Z] = null, Z = 0; Z < x.length; Z++) {
          var G = x[Z];
          G !== null && (G.lane &= -536870913);
        }
      u &= ~W;
    }
    c !== 0 && Ac(l, c, 0), s !== 0 && r === 0 && l.tag !== 0 && (l.suspendedLanes |= s & ~(m & ~n));
  }
  function Ac(l, n, u) {
    l.pendingLanes |= n, l.suspendedLanes &= ~n;
    var c = 31 - Rl(n);
    l.entangledLanes |= n, l.entanglements[c] = l.entanglements[c] | 1073741824 | u & 261930;
  }
  function ur(l, n) {
    var u = l.entangledLanes |= n;
    for (l = l.entanglements; u; ) {
      var c = 31 - Rl(u), r = 1 << c;
      r & n | l[c] & n && (l[c] |= n), u &= ~r;
    }
  }
  function cu(l, n) {
    var u = n & -n;
    return u = (u & 42) !== 0 ? 1 : Da(u), (u & (l.suspendedLanes | n)) !== 0 ? 0 : u;
  }
  function Da(l) {
    switch (l) {
      case 2:
        l = 1;
        break;
      case 8:
        l = 4;
        break;
      case 32:
        l = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        l = 128;
        break;
      case 268435456:
        l = 134217728;
        break;
      default:
        l = 0;
    }
    return l;
  }
  function rd(l) {
    return l &= -l, 2 < l ? 8 < l ? (l & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function C0() {
    var l = j.p;
    return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : xs(l.type));
  }
  function sd(l, n) {
    var u = j.p;
    try {
      return j.p = l, n();
    } finally {
      j.p = u;
    }
  }
  var ii = Math.random().toString(36).slice(2), vl = "__reactFiber$" + ii, Zt = "__reactProps$" + ii, Oc = "__reactContainer$" + ii, ir = "__reactEvents$" + ii, U0 = "__reactListeners$" + ii, Hm = "__reactHandles$" + ii, Nm = "__reactResources$" + ii, Yo = "__reactMarker$" + ii;
  function Qi(l) {
    delete l[vl], delete l[Zt], delete l[ir], delete l[U0], delete l[Hm];
  }
  function zc(l) {
    var n = l[vl];
    if (n) return n;
    for (var u = l.parentNode; u; ) {
      if (n = u[Oc] || u[vl]) {
        if (u = n.alternate, n.child !== null || u !== null && u.child !== null)
          for (l = qh(l); l !== null; ) {
            if (u = l[vl]) return u;
            l = qh(l);
          }
        return n;
      }
      l = u, u = l.parentNode;
    }
    return null;
  }
  function _c(l) {
    if (l = l[vl] || l[Oc]) {
      var n = l.tag;
      if (n === 5 || n === 6 || n === 13 || n === 31 || n === 26 || n === 27 || n === 3)
        return l;
    }
    return null;
  }
  function qo(l) {
    var n = l.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return l.stateNode;
    throw Error(B(33));
  }
  function Dc(l) {
    var n = l[Nm];
    return n || (n = l[Nm] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), n;
  }
  function Tl(l) {
    l[Yo] = !0;
  }
  var Ra = /* @__PURE__ */ new Set(), Rc = {};
  function Fa(l, n) {
    Mc(l, n), Mc(l + "Capture", n);
  }
  function Mc(l, n) {
    for (Rc[l] = n, l = 0; l < n.length; l++)
      Ra.add(n[l]);
  }
  var cr = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), or = {}, dd = {};
  function fr(l) {
    return Yi.call(dd, l) ? !0 : Yi.call(or, l) ? !1 : cr.test(l) ? dd[l] = !0 : (or[l] = !0, !1);
  }
  function ci(l, n, u) {
    if (fr(n))
      if (u === null) l.removeAttribute(n);
      else {
        switch (typeof u) {
          case "undefined":
          case "function":
          case "symbol":
            l.removeAttribute(n);
            return;
          case "boolean":
            var c = n.toLowerCase().slice(0, 5);
            if (c !== "data-" && c !== "aria-") {
              l.removeAttribute(n);
              return;
            }
        }
        l.setAttribute(n, "" + u);
      }
  }
  function Go(l, n, u) {
    if (u === null) l.removeAttribute(n);
    else {
      switch (typeof u) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(n);
          return;
      }
      l.setAttribute(n, "" + u);
    }
  }
  function oi(l, n, u, c) {
    if (c === null) l.removeAttribute(u);
    else {
      switch (typeof c) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(u);
          return;
      }
      l.setAttributeNS(n, u, "" + c);
    }
  }
  function gn(l) {
    switch (typeof l) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return l;
      case "object":
        return l;
      default:
        return "";
    }
  }
  function Bm(l) {
    var n = l.type;
    return (l = l.nodeName) && l.toLowerCase() === "input" && (n === "checkbox" || n === "radio");
  }
  function xm(l, n, u) {
    var c = Object.getOwnPropertyDescriptor(
      l.constructor.prototype,
      n
    );
    if (!l.hasOwnProperty(n) && typeof c < "u" && typeof c.get == "function" && typeof c.set == "function") {
      var r = c.get, s = c.set;
      return Object.defineProperty(l, n, {
        configurable: !0,
        get: function() {
          return r.call(this);
        },
        set: function(m) {
          u = "" + m, s.call(this, m);
        }
      }), Object.defineProperty(l, n, {
        enumerable: c.enumerable
      }), {
        getValue: function() {
          return u;
        },
        setValue: function(m) {
          u = "" + m;
        },
        stopTracking: function() {
          l._valueTracker = null, delete l[n];
        }
      };
    }
  }
  function rr(l) {
    if (!l._valueTracker) {
      var n = Bm(l) ? "checked" : "value";
      l._valueTracker = xm(
        l,
        n,
        "" + l[n]
      );
    }
  }
  function jm(l) {
    if (!l) return !1;
    var n = l._valueTracker;
    if (!n) return !0;
    var u = n.getValue(), c = "";
    return l && (c = Bm(l) ? l.checked ? "true" : "false" : l.value), l = c, l !== u ? (n.setValue(l), !0) : !1;
  }
  function sr(l) {
    if (l = l || (typeof document < "u" ? document : void 0), typeof l > "u") return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var H0 = /[\n"\\]/g;
  function Sn(l) {
    return l.replace(
      H0,
      function(n) {
        return "\\" + n.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function hd(l, n, u, c, r, s, m, g) {
    l.name = "", m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" ? l.type = m : l.removeAttribute("type"), n != null ? m === "number" ? (n === 0 && l.value === "" || l.value != n) && (l.value = "" + gn(n)) : l.value !== "" + gn(n) && (l.value = "" + gn(n)) : m !== "submit" && m !== "reset" || l.removeAttribute("value"), n != null ? wo(l, m, gn(n)) : u != null ? wo(l, m, gn(u)) : c != null && l.removeAttribute("value"), r == null && s != null && (l.defaultChecked = !!s), r != null && (l.checked = r && typeof r != "function" && typeof r != "symbol"), g != null && typeof g != "function" && typeof g != "symbol" && typeof g != "boolean" ? l.name = "" + gn(g) : l.removeAttribute("name");
  }
  function md(l, n, u, c, r, s, m, g) {
    if (s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" && (l.type = s), n != null || u != null) {
      if (!(s !== "submit" && s !== "reset" || n != null)) {
        rr(l);
        return;
      }
      u = u != null ? "" + gn(u) : "", n = n != null ? "" + gn(n) : u, g || n === l.value || (l.value = n), l.defaultValue = n;
    }
    c = c ?? r, c = typeof c != "function" && typeof c != "symbol" && !!c, l.checked = g ? l.checked : !!c, l.defaultChecked = !!c, m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" && (l.name = m), rr(l);
  }
  function wo(l, n, u) {
    n === "number" && sr(l.ownerDocument) === l || l.defaultValue === "" + u || (l.defaultValue = "" + u);
  }
  function ou(l, n, u, c) {
    if (l = l.options, n) {
      n = {};
      for (var r = 0; r < u.length; r++)
        n["$" + u[r]] = !0;
      for (u = 0; u < l.length; u++)
        r = n.hasOwnProperty("$" + l[u].value), l[u].selected !== r && (l[u].selected = r), r && c && (l[u].defaultSelected = !0);
    } else {
      for (u = "" + gn(u), n = null, r = 0; r < l.length; r++) {
        if (l[r].value === u) {
          l[r].selected = !0, c && (l[r].defaultSelected = !0);
          return;
        }
        n !== null || l[r].disabled || (n = l[r]);
      }
      n !== null && (n.selected = !0);
    }
  }
  function N0(l, n, u) {
    if (n != null && (n = "" + gn(n), n !== l.value && (l.value = n), u == null)) {
      l.defaultValue !== n && (l.defaultValue = n);
      return;
    }
    l.defaultValue = u != null ? "" + gn(u) : "";
  }
  function Ym(l, n, u, c) {
    if (n == null) {
      if (c != null) {
        if (u != null) throw Error(B(92));
        if (jt(c)) {
          if (1 < c.length) throw Error(B(93));
          c = c[0];
        }
        u = c;
      }
      u == null && (u = ""), n = u;
    }
    u = gn(n), l.defaultValue = u, c = l.textContent, c === u && c !== "" && c !== null && (l.value = c), rr(l);
  }
  function Cc(l, n) {
    if (n) {
      var u = l.firstChild;
      if (u && u === l.lastChild && u.nodeType === 3) {
        u.nodeValue = n;
        return;
      }
    }
    l.textContent = n;
  }
  var dr = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function qm(l, n, u) {
    var c = n.indexOf("--") === 0;
    u == null || typeof u == "boolean" || u === "" ? c ? l.setProperty(n, "") : n === "float" ? l.cssFloat = "" : l[n] = "" : c ? l.setProperty(n, u) : typeof u != "number" || u === 0 || dr.has(n) ? n === "float" ? l.cssFloat = u : l[n] = ("" + u).trim() : l[n] = u + "px";
  }
  function B0(l, n, u) {
    if (n != null && typeof n != "object")
      throw Error(B(62));
    if (l = l.style, u != null) {
      for (var c in u)
        !u.hasOwnProperty(c) || n != null && n.hasOwnProperty(c) || (c.indexOf("--") === 0 ? l.setProperty(c, "") : c === "float" ? l.cssFloat = "" : l[c] = "");
      for (var r in n)
        c = n[r], n.hasOwnProperty(r) && u[r] !== c && qm(l, r, c);
    } else
      for (var s in n)
        n.hasOwnProperty(s) && qm(l, s, n[s]);
  }
  function Gm(l) {
    if (l.indexOf("-") === -1) return !1;
    switch (l) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Zg = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), Jg = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Li(l) {
    return Jg.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l;
  }
  function wl() {
  }
  var hr = null;
  function yd(l) {
    return l = l.target || l.srcElement || window, l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l;
  }
  var Uc = null, fu = null;
  function wm(l) {
    var n = _c(l);
    if (n && (l = n.stateNode)) {
      var u = l[Zt] || null;
      e: switch (l = n.stateNode, n.type) {
        case "input":
          if (hd(
            l,
            u.value,
            u.defaultValue,
            u.defaultValue,
            u.checked,
            u.defaultChecked,
            u.type,
            u.name
          ), n = u.name, u.type === "radio" && n != null) {
            for (u = l; u.parentNode; ) u = u.parentNode;
            for (u = u.querySelectorAll(
              'input[name="' + Sn(
                "" + n
              ) + '"][type="radio"]'
            ), n = 0; n < u.length; n++) {
              var c = u[n];
              if (c !== l && c.form === l.form) {
                var r = c[Zt] || null;
                if (!r) throw Error(B(90));
                hd(
                  c,
                  r.value,
                  r.defaultValue,
                  r.defaultValue,
                  r.checked,
                  r.defaultChecked,
                  r.type,
                  r.name
                );
              }
            }
            for (n = 0; n < u.length; n++)
              c = u[n], c.form === l.form && jm(c);
          }
          break e;
        case "textarea":
          N0(l, u.value, u.defaultValue);
          break e;
        case "select":
          n = u.value, n != null && ou(l, !!u.multiple, n, !1);
      }
    }
  }
  var Xo = !1;
  function mr(l, n, u) {
    if (Xo) return l(n, u);
    Xo = !0;
    try {
      var c = l(n);
      return c;
    } finally {
      if (Xo = !1, (Uc !== null || fu !== null) && (vs(), Uc && (n = Uc, l = fu, fu = Uc = null, wm(n), l)))
        for (n = 0; n < l.length; n++) wm(l[n]);
    }
  }
  function Qo(l, n) {
    var u = l.stateNode;
    if (u === null) return null;
    var c = u[Zt] || null;
    if (c === null) return null;
    u = c[n];
    e: switch (n) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (c = !c.disabled) || (l = l.type, c = !(l === "button" || l === "input" || l === "select" || l === "textarea")), l = !c;
        break e;
      default:
        l = !1;
    }
    if (l) return null;
    if (u && typeof u != "function")
      throw Error(
        B(231, n, typeof u)
      );
    return u;
  }
  var nl = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Xm = !1;
  if (nl)
    try {
      var Hc = {};
      Object.defineProperty(Hc, "passive", {
        get: function() {
          Xm = !0;
        }
      }), window.addEventListener("test", Hc, Hc), window.removeEventListener("test", Hc, Hc);
    } catch {
      Xm = !1;
    }
  var fi = null, pd = null, vd = null;
  function x0() {
    if (vd) return vd;
    var l, n = pd, u = n.length, c, r = "value" in fi ? fi.value : fi.textContent, s = r.length;
    for (l = 0; l < u && n[l] === r[l]; l++) ;
    var m = u - l;
    for (c = 1; c <= m && n[u - c] === r[s - c]; c++) ;
    return vd = r.slice(l, 1 < c ? 1 - c : void 0);
  }
  function yr(l) {
    var n = l.keyCode;
    return "charCode" in l ? (l = l.charCode, l === 0 && n === 13 && (l = 13)) : l = n, l === 10 && (l = 13), 32 <= l || l === 13 ? l : 0;
  }
  function gd() {
    return !0;
  }
  function Qm() {
    return !1;
  }
  function Ma(l) {
    function n(u, c, r, s, m) {
      this._reactName = u, this._targetInst = r, this.type = c, this.nativeEvent = s, this.target = m, this.currentTarget = null;
      for (var g in l)
        l.hasOwnProperty(g) && (u = l[g], this[g] = u ? u(s) : s[g]);
      return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? gd : Qm, this.isPropagationStopped = Qm, this;
    }
    return de(n.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var u = this.nativeEvent;
        u && (u.preventDefault ? u.preventDefault() : typeof u.returnValue != "unknown" && (u.returnValue = !1), this.isDefaultPrevented = gd);
      },
      stopPropagation: function() {
        var u = this.nativeEvent;
        u && (u.stopPropagation ? u.stopPropagation() : typeof u.cancelBubble != "unknown" && (u.cancelBubble = !0), this.isPropagationStopped = gd);
      },
      persist: function() {
      },
      isPersistent: gd
    }), n;
  }
  var ru = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(l) {
      return l.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, pr = Ma(ru), Lo = de({}, ru, { view: 0, detail: 0 }), j0 = Ma(Lo), Lm, Vm, vr, Sd = de({}, Lo, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Ia,
    button: 0,
    buttons: 0,
    relatedTarget: function(l) {
      return l.relatedTarget === void 0 ? l.fromElement === l.srcElement ? l.toElement : l.fromElement : l.relatedTarget;
    },
    movementX: function(l) {
      return "movementX" in l ? l.movementX : (l !== vr && (vr && l.type === "mousemove" ? (Lm = l.screenX - vr.screenX, Vm = l.screenY - vr.screenY) : Vm = Lm = 0, vr = l), Lm);
    },
    movementY: function(l) {
      return "movementY" in l ? l.movementY : Vm;
    }
  }), Y0 = Ma(Sd), gr = de({}, Sd, { dataTransfer: 0 }), q0 = Ma(gr), G0 = de({}, Lo, { relatedTarget: 0 }), bd = Ma(G0), w0 = de({}, ru, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Zm = Ma(w0), X0 = de({}, ru, {
    clipboardData: function(l) {
      return "clipboardData" in l ? l.clipboardData : window.clipboardData;
    }
  }), Nc = Ma(X0), Bc = de({}, ru, { data: 0 }), bn = Ma(Bc), Kg = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, Jm = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, su = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function Q0(l) {
    var n = this.nativeEvent;
    return n.getModifierState ? n.getModifierState(l) : (l = su[l]) ? !!n[l] : !1;
  }
  function Ia() {
    return Q0;
  }
  var du = de({}, Lo, {
    key: function(l) {
      if (l.key) {
        var n = Kg[l.key] || l.key;
        if (n !== "Unidentified") return n;
      }
      return l.type === "keypress" ? (l = yr(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? Jm[l.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Ia,
    charCode: function(l) {
      return l.type === "keypress" ? yr(l) : 0;
    },
    keyCode: function(l) {
      return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    },
    which: function(l) {
      return l.type === "keypress" ? yr(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    }
  }), Ed = Ma(du), Td = de({}, Sd, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), Ad = Ma(Td), hu = de({}, Lo, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ia
  }), $g = Ma(hu), L0 = de({}, ru, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), V0 = Ma(L0), kg = de({}, Sd, {
    deltaX: function(l) {
      return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0;
    },
    deltaY: function(l) {
      return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Km = Ma(kg), Wg = de({}, ru, {
    newState: 0,
    oldState: 0
  }), Z0 = Ma(Wg), $m = [9, 13, 27, 32], Vo = nl && "CompositionEvent" in window, Vi = null;
  nl && "documentMode" in document && (Vi = document.documentMode);
  var km = nl && "TextEvent" in window && !Vi, Xl = nl && (!Vo || Vi && 8 < Vi && 11 >= Vi), Wm = " ", Sr = !1;
  function Zi(l, n) {
    switch (l) {
      case "keyup":
        return $m.indexOf(n.keyCode) !== -1;
      case "keydown":
        return n.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Od(l) {
    return l = l.detail, typeof l == "object" && "data" in l ? l.data : null;
  }
  var xc = !1;
  function J0(l, n) {
    switch (l) {
      case "compositionend":
        return Od(n);
      case "keypress":
        return n.which !== 32 ? null : (Sr = !0, Wm);
      case "textInput":
        return l = n.data, l === Wm && Sr ? null : l;
      default:
        return null;
    }
  }
  function K0(l, n) {
    if (xc)
      return l === "compositionend" || !Vo && Zi(l, n) ? (l = x0(), vd = pd = fi = null, xc = !1, l) : null;
    switch (l) {
      case "paste":
        return null;
      case "keypress":
        if (!(n.ctrlKey || n.altKey || n.metaKey) || n.ctrlKey && n.altKey) {
          if (n.char && 1 < n.char.length)
            return n.char;
          if (n.which) return String.fromCharCode(n.which);
        }
        return null;
      case "compositionend":
        return Xl && n.locale !== "ko" ? null : n.data;
      default:
        return null;
    }
  }
  var Fg = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function zd(l) {
    var n = l && l.nodeName && l.nodeName.toLowerCase();
    return n === "input" ? !!Fg[l.type] : n === "textarea";
  }
  function mu(l, n, u, c) {
    Uc ? fu ? fu.push(c) : fu = [c] : Uc = c, n = Uh(n, "onChange"), 0 < n.length && (u = new pr(
      "onChange",
      "change",
      null,
      u,
      c
    ), l.push({ event: u, listeners: n }));
  }
  var Zo = null, jc = null;
  function _d(l) {
    mp(l, 0);
  }
  function yu(l) {
    var n = qo(l);
    if (jm(n)) return l;
  }
  function Dd(l, n) {
    if (l === "change") return n;
  }
  var Fm = !1;
  if (nl) {
    var br;
    if (nl) {
      var ha = "oninput" in document;
      if (!ha) {
        var pu = document.createElement("div");
        pu.setAttribute("oninput", "return;"), ha = typeof pu.oninput == "function";
      }
      br = ha;
    } else br = !1;
    Fm = br && (!document.documentMode || 9 < document.documentMode);
  }
  function Im() {
    Zo && (Zo.detachEvent("onpropertychange", Rd), jc = Zo = null);
  }
  function Rd(l) {
    if (l.propertyName === "value" && yu(jc)) {
      var n = [];
      mu(
        n,
        jc,
        l,
        yd(l)
      ), mr(_d, n);
    }
  }
  function Pm(l, n, u) {
    l === "focusin" ? (Im(), Zo = n, jc = u, Zo.attachEvent("onpropertychange", Rd)) : l === "focusout" && Im();
  }
  function $0(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return yu(jc);
  }
  function k0(l, n) {
    if (l === "click") return yu(n);
  }
  function Ji(l, n) {
    if (l === "input" || l === "change")
      return yu(n);
  }
  function Yc(l, n) {
    return l === n && (l !== 0 || 1 / l === 1 / n) || l !== l && n !== n;
  }
  var Ca = typeof Object.is == "function" ? Object.is : Yc;
  function Ki(l, n) {
    if (Ca(l, n)) return !0;
    if (typeof l != "object" || l === null || typeof n != "object" || n === null)
      return !1;
    var u = Object.keys(l), c = Object.keys(n);
    if (u.length !== c.length) return !1;
    for (c = 0; c < u.length; c++) {
      var r = u[c];
      if (!Yi.call(n, r) || !Ca(l[r], n[r]))
        return !1;
    }
    return !0;
  }
  function ri(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function ey(l, n) {
    var u = ri(l);
    l = 0;
    for (var c; u; ) {
      if (u.nodeType === 3) {
        if (c = l + u.textContent.length, l <= n && c >= n)
          return { node: u, offset: n - l };
        l = c;
      }
      e: {
        for (; u; ) {
          if (u.nextSibling) {
            u = u.nextSibling;
            break e;
          }
          u = u.parentNode;
        }
        u = void 0;
      }
      u = ri(u);
    }
  }
  function ty(l, n) {
    return l && n ? l === n ? !0 : l && l.nodeType === 3 ? !1 : n && n.nodeType === 3 ? ty(l, n.parentNode) : "contains" in l ? l.contains(n) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(n) & 16) : !1 : !1;
  }
  function qc(l) {
    l = l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null ? l.ownerDocument.defaultView : window;
    for (var n = sr(l.document); n instanceof l.HTMLIFrameElement; ) {
      try {
        var u = typeof n.contentWindow.location.href == "string";
      } catch {
        u = !1;
      }
      if (u) l = n.contentWindow;
      else break;
      n = sr(l.document);
    }
    return n;
  }
  function si(l) {
    var n = l && l.nodeName && l.nodeName.toLowerCase();
    return n && (n === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || n === "textarea" || l.contentEditable === "true");
  }
  var ly = nl && "documentMode" in document && 11 >= document.documentMode, vu = null, Er = null, $i = null, gu = !1;
  function Su(l, n, u) {
    var c = u.window === u ? u.document : u.nodeType === 9 ? u : u.ownerDocument;
    gu || vu == null || vu !== sr(c) || (c = vu, "selectionStart" in c && si(c) ? c = { start: c.selectionStart, end: c.selectionEnd } : (c = (c.ownerDocument && c.ownerDocument.defaultView || window).getSelection(), c = {
      anchorNode: c.anchorNode,
      anchorOffset: c.anchorOffset,
      focusNode: c.focusNode,
      focusOffset: c.focusOffset
    }), $i && Ki($i, c) || ($i = c, c = Uh(Er, "onSelect"), 0 < c.length && (n = new pr(
      "onSelect",
      "select",
      null,
      n,
      u
    ), l.push({ event: n, listeners: c }), n.target = vu)));
  }
  function di(l, n) {
    var u = {};
    return u[l.toLowerCase()] = n.toLowerCase(), u["Webkit" + l] = "webkit" + n, u["Moz" + l] = "moz" + n, u;
  }
  var ki = {
    animationend: di("Animation", "AnimationEnd"),
    animationiteration: di("Animation", "AnimationIteration"),
    animationstart: di("Animation", "AnimationStart"),
    transitionrun: di("Transition", "TransitionRun"),
    transitionstart: di("Transition", "TransitionStart"),
    transitioncancel: di("Transition", "TransitionCancel"),
    transitionend: di("Transition", "TransitionEnd")
  }, Wi = {}, Tr = {};
  nl && (Tr = document.createElement("div").style, "AnimationEvent" in window || (delete ki.animationend.animation, delete ki.animationiteration.animation, delete ki.animationstart.animation), "TransitionEvent" in window || delete ki.transitionend.transition);
  function Pa(l) {
    if (Wi[l]) return Wi[l];
    if (!ki[l]) return l;
    var n = ki[l], u;
    for (u in n)
      if (n.hasOwnProperty(u) && u in Tr)
        return Wi[l] = n[u];
    return l;
  }
  var Yt = Pa("animationend"), Ar = Pa("animationiteration"), ay = Pa("animationstart"), ny = Pa("transitionrun"), Gc = Pa("transitionstart"), Or = Pa("transitioncancel"), wn = Pa("transitionend"), W0 = /* @__PURE__ */ new Map(), Xn = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  Xn.push("scrollEnd");
  function Ua(l, n) {
    W0.set(l, n), Fa(n, [l]);
  }
  var Fi = typeof reportError == "function" ? reportError : function(l) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var n = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof l == "object" && l !== null && typeof l.message == "string" ? String(l.message) : String(l),
        error: l
      });
      if (!window.dispatchEvent(n)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", l);
      return;
    }
    console.error(l);
  }, ma = [], Ml = 0, ya = 0;
  function en() {
    for (var l = Ml, n = ya = Ml = 0; n < l; ) {
      var u = ma[n];
      ma[n++] = null;
      var c = ma[n];
      ma[n++] = null;
      var r = ma[n];
      ma[n++] = null;
      var s = ma[n];
      if (ma[n++] = null, c !== null && r !== null) {
        var m = c.pending;
        m === null ? r.next = r : (r.next = m.next, m.next = r), c.pending = r;
      }
      s !== 0 && Md(u, r, s);
    }
  }
  function tn(l, n, u, c) {
    ma[Ml++] = l, ma[Ml++] = n, ma[Ml++] = u, ma[Ml++] = c, ya |= c, l.lanes |= c, l = l.alternate, l !== null && (l.lanes |= c);
  }
  function En(l, n, u, c) {
    return tn(l, n, u, c), Jo(l);
  }
  function ta(l, n) {
    return tn(l, null, null, n), Jo(l);
  }
  function Md(l, n, u) {
    l.lanes |= u;
    var c = l.alternate;
    c !== null && (c.lanes |= u);
    for (var r = !1, s = l.return; s !== null; )
      s.childLanes |= u, c = s.alternate, c !== null && (c.childLanes |= u), s.tag === 22 && (l = s.stateNode, l === null || l._visibility & 1 || (r = !0)), l = s, s = s.return;
    return l.tag === 3 ? (s = l.stateNode, r && n !== null && (r = 31 - Rl(u), l = s.hiddenUpdates, c = l[r], c === null ? l[r] = [n] : c.push(n), n.lane = u | 536870912), s) : null;
  }
  function Jo(l) {
    if (50 < fo)
      throw fo = 0, gh = null, Error(B(185));
    for (var n = l.return; n !== null; )
      l = n, n = l.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var wc = {};
  function bu(l, n, u, c) {
    this.tag = l, this.key = u, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = c, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ha(l, n, u, c) {
    return new bu(l, n, u, c);
  }
  function Tn(l) {
    return l = l.prototype, !(!l || !l.isReactComponent);
  }
  function ln(l, n) {
    var u = l.alternate;
    return u === null ? (u = Ha(
      l.tag,
      n,
      l.key,
      l.mode
    ), u.elementType = l.elementType, u.type = l.type, u.stateNode = l.stateNode, u.alternate = l, l.alternate = u) : (u.pendingProps = n, u.type = l.type, u.flags = 0, u.subtreeFlags = 0, u.deletions = null), u.flags = l.flags & 65011712, u.childLanes = l.childLanes, u.lanes = l.lanes, u.child = l.child, u.memoizedProps = l.memoizedProps, u.memoizedState = l.memoizedState, u.updateQueue = l.updateQueue, n = l.dependencies, u.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }, u.sibling = l.sibling, u.index = l.index, u.ref = l.ref, u.refCleanup = l.refCleanup, u;
  }
  function F0(l, n) {
    l.flags &= 65011714;
    var u = l.alternate;
    return u === null ? (l.childLanes = 0, l.lanes = n, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = u.childLanes, l.lanes = u.lanes, l.child = u.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = u.memoizedProps, l.memoizedState = u.memoizedState, l.updateQueue = u.updateQueue, l.type = u.type, n = u.dependencies, l.dependencies = n === null ? null : {
      lanes: n.lanes,
      firstContext: n.firstContext
    }), l;
  }
  function zr(l, n, u, c, r, s) {
    var m = 0;
    if (c = l, typeof l == "function") Tn(l) && (m = 1);
    else if (typeof l == "string")
      m = Cp(
        l,
        u,
        ee.current
      ) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
    else
      e: switch (l) {
        case tt:
          return l = Ha(31, u, n, r), l.elementType = tt, l.lanes = s, l;
        case qe:
          return Xc(u.children, r, s, n);
        case Qt:
          m = 8, r |= 24;
          break;
        case Te:
          return l = Ha(12, u, n, r | 2), l.elementType = Te, l.lanes = s, l;
        case $t:
          return l = Ha(13, u, n, r), l.elementType = $t, l.lanes = s, l;
        case xt:
          return l = Ha(19, u, n, r), l.elementType = xt, l.lanes = s, l;
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case St:
                m = 10;
                break e;
              case Ze:
                m = 9;
                break e;
              case Lt:
                m = 11;
                break e;
              case Xe:
                m = 14;
                break e;
              case _t:
                m = 16, c = null;
                break e;
            }
          m = 29, u = Error(
            B(130, l === null ? "null" : typeof l, "")
          ), c = null;
      }
    return n = Ha(m, u, n, r), n.elementType = l, n.type = c, n.lanes = s, n;
  }
  function Xc(l, n, u, c) {
    return l = Ha(7, l, c, n), l.lanes = u, l;
  }
  function _r(l, n, u) {
    return l = Ha(6, l, null, n), l.lanes = u, l;
  }
  function Dr(l) {
    var n = Ha(18, null, null, 0);
    return n.stateNode = l, n;
  }
  function Cd(l, n, u) {
    return n = Ha(
      4,
      l.children !== null ? l.children : [],
      l.key,
      n
    ), n.lanes = u, n.stateNode = {
      containerInfo: l.containerInfo,
      pendingChildren: null,
      implementation: l.implementation
    }, n;
  }
  var uy = /* @__PURE__ */ new WeakMap();
  function an(l, n) {
    if (typeof l == "object" && l !== null) {
      var u = uy.get(l);
      return u !== void 0 ? u : (n = {
        value: l,
        source: n,
        stack: ql(n)
      }, uy.set(l, n), n);
    }
    return {
      value: l,
      source: n,
      stack: ql(n)
    };
  }
  var Qc = [], nn = 0, Rr = null, Ko = 0, Ut = [], Na = 0, Qn = null, un = 1, Ba = "";
  function Eu(l, n) {
    Qc[nn++] = Ko, Qc[nn++] = Rr, Rr = l, Ko = n;
  }
  function Mr(l, n, u) {
    Ut[Na++] = un, Ut[Na++] = Ba, Ut[Na++] = Qn, Qn = l;
    var c = un;
    l = Ba;
    var r = 32 - Rl(c) - 1;
    c &= ~(1 << r), u += 1;
    var s = 32 - Rl(n) + r;
    if (30 < s) {
      var m = r - r % 5;
      s = (c & (1 << m) - 1).toString(32), c >>= m, r -= m, un = 1 << 32 - Rl(n) + r | u << r | c, Ba = s + l;
    } else
      un = 1 << s | u << r | c, Ba = l;
  }
  function Ud(l) {
    l.return !== null && (Eu(l, 1), Mr(l, 1, 0));
  }
  function $o(l) {
    for (; l === Rr; )
      Rr = Qc[--nn], Qc[nn] = null, Ko = Qc[--nn], Qc[nn] = null;
    for (; l === Qn; )
      Qn = Ut[--Na], Ut[Na] = null, Ba = Ut[--Na], Ut[Na] = null, un = Ut[--Na], Ut[Na] = null;
  }
  function iy(l, n) {
    Ut[Na++] = un, Ut[Na++] = Ba, Ut[Na++] = Qn, un = n.id, Ba = n.overflow, Qn = l;
  }
  var gl = null, qt = null, ut = !1, Tu = null, xa = !1, Au = Error(B(519));
  function pa(l) {
    var n = Error(
      B(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Ur(an(n, l)), Au;
  }
  function ko(l) {
    var n = l.stateNode, u = l.type, c = l.memoizedProps;
    switch (n[vl] = l, n[Zt] = c, u) {
      case "dialog":
        at("cancel", n), at("close", n);
        break;
      case "iframe":
      case "object":
      case "embed":
        at("load", n);
        break;
      case "video":
      case "audio":
        for (u = 0; u < ho.length; u++)
          at(ho[u], n);
        break;
      case "source":
        at("error", n);
        break;
      case "img":
      case "image":
      case "link":
        at("error", n), at("load", n);
        break;
      case "details":
        at("toggle", n);
        break;
      case "input":
        at("invalid", n), md(
          n,
          c.value,
          c.defaultValue,
          c.checked,
          c.defaultChecked,
          c.type,
          c.name,
          !0
        );
        break;
      case "select":
        at("invalid", n);
        break;
      case "textarea":
        at("invalid", n), Ym(n, c.value, c.defaultValue, c.children);
    }
    u = c.children, typeof u != "string" && typeof u != "number" && typeof u != "bigint" || n.textContent === "" + u || c.suppressHydrationWarning === !0 || gp(n.textContent, u) ? (c.popover != null && (at("beforetoggle", n), at("toggle", n)), c.onScroll != null && at("scroll", n), c.onScrollEnd != null && at("scrollend", n), c.onClick != null && (n.onclick = wl), n = !0) : n = !1, n || pa(l, !0);
  }
  function Cr(l) {
    for (gl = l.return; gl; )
      switch (gl.tag) {
        case 5:
        case 31:
        case 13:
          xa = !1;
          return;
        case 27:
        case 3:
          xa = !0;
          return;
        default:
          gl = gl.return;
      }
  }
  function Ou(l) {
    if (l !== gl) return !1;
    if (!ut) return Cr(l), ut = !0, !1;
    var n = l.tag, u;
    if ((u = n !== 3 && n !== 27) && ((u = n === 5) && (u = l.type, u = !(u !== "form" && u !== "button") || xh(l.type, l.memoizedProps)), u = !u), u && qt && pa(l), Cr(l), n === 13) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(B(317));
      qt = Yh(l);
    } else if (n === 31) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(B(317));
      qt = Yh(l);
    } else
      n === 27 ? (n = qt, Lu(l.type) ? (l = _f, _f = null, qt = l) : qt = n) : qt = gl ? $l(l.stateNode.nextSibling) : null;
    return !0;
  }
  function Ln() {
    qt = gl = null, ut = !1;
  }
  function Hd() {
    var l = Tu;
    return l !== null && (Qa === null ? Qa = l : Qa.push.apply(
      Qa,
      l
    ), Tu = null), l;
  }
  function Ur(l) {
    Tu === null ? Tu = [l] : Tu.push(l);
  }
  var Nd = O(null), Ii = null, Vn = null;
  function zu(l, n, u) {
    $(Nd, n._currentValue), n._currentValue = u;
  }
  function la(l) {
    l._currentValue = Nd.current, A(Nd);
  }
  function Hr(l, n, u) {
    for (; l !== null; ) {
      var c = l.alternate;
      if ((l.childLanes & n) !== n ? (l.childLanes |= n, c !== null && (c.childLanes |= n)) : c !== null && (c.childLanes & n) !== n && (c.childLanes |= n), l === u) break;
      l = l.return;
    }
  }
  function Bd(l, n, u, c) {
    var r = l.child;
    for (r !== null && (r.return = l); r !== null; ) {
      var s = r.dependencies;
      if (s !== null) {
        var m = r.child;
        s = s.firstContext;
        e: for (; s !== null; ) {
          var g = s;
          s = r;
          for (var T = 0; T < n.length; T++)
            if (g.context === n[T]) {
              s.lanes |= u, g = s.alternate, g !== null && (g.lanes |= u), Hr(
                s.return,
                u,
                l
              ), c || (m = null);
              break e;
            }
          s = g.next;
        }
      } else if (r.tag === 18) {
        if (m = r.return, m === null) throw Error(B(341));
        m.lanes |= u, s = m.alternate, s !== null && (s.lanes |= u), Hr(m, u, l), m = null;
      } else m = r.child;
      if (m !== null) m.return = r;
      else
        for (m = r; m !== null; ) {
          if (m === l) {
            m = null;
            break;
          }
          if (r = m.sibling, r !== null) {
            r.return = m.return, m = r;
            break;
          }
          m = m.return;
        }
      r = m;
    }
  }
  function cn(l, n, u, c) {
    l = null;
    for (var r = n, s = !1; r !== null; ) {
      if (!s) {
        if ((r.flags & 524288) !== 0) s = !0;
        else if ((r.flags & 262144) !== 0) break;
      }
      if (r.tag === 10) {
        var m = r.alternate;
        if (m === null) throw Error(B(387));
        if (m = m.memoizedProps, m !== null) {
          var g = r.type;
          Ca(r.pendingProps.value, m.value) || (l !== null ? l.push(g) : l = [g]);
        }
      } else if (r === lt.current) {
        if (m = r.alternate, m === null) throw Error(B(387));
        m.memoizedState.memoizedState !== r.memoizedState.memoizedState && (l !== null ? l.push(rl) : l = [rl]);
      }
      r = r.return;
    }
    l !== null && Bd(
      n,
      l,
      u,
      c
    ), n.flags |= 262144;
  }
  function aa(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!Ca(
        l.context._currentValue,
        l.memoizedValue
      ))
        return !0;
      l = l.next;
    }
    return !1;
  }
  function _u(l) {
    Ii = l, Vn = null, l = l.dependencies, l !== null && (l.firstContext = null);
  }
  function be(l) {
    return Lc(Ii, l);
  }
  function F(l, n) {
    return Ii === null && _u(l), Lc(l, n);
  }
  function Lc(l, n) {
    var u = n._currentValue;
    if (n = { context: n, memoizedValue: u, next: null }, Vn === null) {
      if (l === null) throw Error(B(308));
      Vn = n, l.dependencies = { lanes: 0, firstContext: n }, l.flags |= 524288;
    } else Vn = Vn.next = n;
    return u;
  }
  var xd = typeof AbortController < "u" ? AbortController : function() {
    var l = [], n = this.signal = {
      aborted: !1,
      addEventListener: function(u, c) {
        l.push(c);
      }
    };
    this.abort = function() {
      n.aborted = !0, l.forEach(function(u) {
        return u();
      });
    };
  }, ul = Q.unstable_scheduleCallback, cy = Q.unstable_NormalPriority, il = {
    $$typeof: St,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function jd() {
    return {
      controller: new xd(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Vc(l) {
    l.refCount--, l.refCount === 0 && ul(cy, function() {
      l.controller.abort();
    });
  }
  var Nr = null, Br = 0, Pi = 0, ec = null;
  function va(l, n) {
    if (Nr === null) {
      var u = Nr = [];
      Br = 0, Pi = ro(), ec = {
        status: "pending",
        value: void 0,
        then: function(c) {
          u.push(c);
        }
      };
    }
    return Br++, n.then(Tt, Tt), n;
  }
  function Tt() {
    if (--Br === 0 && Nr !== null) {
      ec !== null && (ec.status = "fulfilled");
      var l = Nr;
      Nr = null, Pi = 0, ec = null;
      for (var n = 0; n < l.length; n++) (0, l[n])();
    }
  }
  function Yd(l, n) {
    var u = [], c = {
      status: "pending",
      value: null,
      reason: null,
      then: function(r) {
        u.push(r);
      }
    };
    return l.then(
      function() {
        c.status = "fulfilled", c.value = n;
        for (var r = 0; r < u.length; r++) (0, u[r])(n);
      },
      function(r) {
        for (c.status = "rejected", c.reason = r, r = 0; r < u.length; r++)
          (0, u[r])(void 0);
      }
    ), c;
  }
  var Wo = X.S;
  X.S = function(l, n) {
    Oi = El(), typeof n == "object" && n !== null && typeof n.then == "function" && va(l, n), Wo !== null && Wo(l, n);
  };
  var ja = O(null);
  function hi() {
    var l = ja.current;
    return l !== null ? l : Ht.pooledCache;
  }
  function Ya(l, n) {
    n === null ? $(ja, ja.current) : $(ja, n.pool);
  }
  function qd() {
    var l = hi();
    return l === null ? null : { parent: il._currentValue, pool: l };
  }
  var Zn = Error(B(460)), xr = Error(B(474)), tc = Error(B(542)), Fo = { then: function() {
  } };
  function jr(l) {
    return l = l.status, l === "fulfilled" || l === "rejected";
  }
  function oy(l, n, u) {
    switch (u = l[u], u === void 0 ? l.push(n) : u !== n && (n.then(wl, wl), n = u), n.status) {
      case "fulfilled":
        return n.value;
      case "rejected":
        throw l = n.reason, ry(l), l;
      default:
        if (typeof n.status == "string") n.then(wl, wl);
        else {
          if (l = Ht, l !== null && 100 < l.shellSuspendCounter)
            throw Error(B(482));
          l = n, l.status = "pending", l.then(
            function(c) {
              if (n.status === "pending") {
                var r = n;
                r.status = "fulfilled", r.value = c;
              }
            },
            function(c) {
              if (n.status === "pending") {
                var r = n;
                r.status = "rejected", r.reason = c;
              }
            }
          );
        }
        switch (n.status) {
          case "fulfilled":
            return n.value;
          case "rejected":
            throw l = n.reason, ry(l), l;
        }
        throw ac = n, Zn;
    }
  }
  function lc(l) {
    try {
      var n = l._init;
      return n(l._payload);
    } catch (u) {
      throw u !== null && typeof u == "object" && typeof u.then == "function" ? (ac = u, Zn) : u;
    }
  }
  var ac = null;
  function fy() {
    if (ac === null) throw Error(B(459));
    var l = ac;
    return ac = null, l;
  }
  function ry(l) {
    if (l === Zn || l === tc)
      throw Error(B(483));
  }
  var nc = null, Zc = 0;
  function Io(l) {
    var n = Zc;
    return Zc += 1, nc === null && (nc = []), oy(nc, l, n);
  }
  function Po(l, n) {
    n = n.props.ref, l.ref = n !== void 0 ? n : null;
  }
  function Yr(l, n) {
    throw n.$$typeof === k ? Error(B(525)) : (l = Object.prototype.toString.call(n), Error(
      B(
        31,
        l === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : l
      )
    ));
  }
  function sy(l) {
    function n(C, D) {
      if (l) {
        var H = C.deletions;
        H === null ? (C.deletions = [D], C.flags |= 16) : H.push(D);
      }
    }
    function u(C, D) {
      if (!l) return null;
      for (; D !== null; )
        n(C, D), D = D.sibling;
      return null;
    }
    function c(C) {
      for (var D = /* @__PURE__ */ new Map(); C !== null; )
        C.key !== null ? D.set(C.key, C) : D.set(C.index, C), C = C.sibling;
      return D;
    }
    function r(C, D) {
      return C = ln(C, D), C.index = 0, C.sibling = null, C;
    }
    function s(C, D, H) {
      return C.index = H, l ? (H = C.alternate, H !== null ? (H = H.index, H < D ? (C.flags |= 67108866, D) : H) : (C.flags |= 67108866, D)) : (C.flags |= 1048576, D);
    }
    function m(C) {
      return l && C.alternate === null && (C.flags |= 67108866), C;
    }
    function g(C, D, H, K) {
      return D === null || D.tag !== 6 ? (D = _r(H, C.mode, K), D.return = C, D) : (D = r(D, H), D.return = C, D);
    }
    function T(C, D, H, K) {
      var Se = H.type;
      return Se === qe ? Z(
        C,
        D,
        H.props.children,
        K,
        H.key
      ) : D !== null && (D.elementType === Se || typeof Se == "object" && Se !== null && Se.$$typeof === _t && lc(Se) === D.type) ? (D = r(D, H.props), Po(D, H), D.return = C, D) : (D = zr(
        H.type,
        H.key,
        H.props,
        null,
        C.mode,
        K
      ), Po(D, H), D.return = C, D);
    }
    function N(C, D, H, K) {
      return D === null || D.tag !== 4 || D.stateNode.containerInfo !== H.containerInfo || D.stateNode.implementation !== H.implementation ? (D = Cd(H, C.mode, K), D.return = C, D) : (D = r(D, H.children || []), D.return = C, D);
    }
    function Z(C, D, H, K, Se) {
      return D === null || D.tag !== 7 ? (D = Xc(
        H,
        C.mode,
        K,
        Se
      ), D.return = C, D) : (D = r(D, H), D.return = C, D);
    }
    function W(C, D, H) {
      if (typeof D == "string" && D !== "" || typeof D == "number" || typeof D == "bigint")
        return D = _r(
          "" + D,
          C.mode,
          H
        ), D.return = C, D;
      if (typeof D == "object" && D !== null) {
        switch (D.$$typeof) {
          case U:
            return H = zr(
              D.type,
              D.key,
              D.props,
              null,
              C.mode,
              H
            ), Po(H, D), H.return = C, H;
          case ue:
            return D = Cd(
              D,
              C.mode,
              H
            ), D.return = C, D;
          case _t:
            return D = lc(D), W(C, D, H);
        }
        if (jt(D) || bt(D))
          return D = Xc(
            D,
            C.mode,
            H,
            null
          ), D.return = C, D;
        if (typeof D.then == "function")
          return W(C, Io(D), H);
        if (D.$$typeof === St)
          return W(
            C,
            F(C, D),
            H
          );
        Yr(C, D);
      }
      return null;
    }
    function x(C, D, H, K) {
      var Se = D !== null ? D.key : null;
      if (typeof H == "string" && H !== "" || typeof H == "number" || typeof H == "bigint")
        return Se !== null ? null : g(C, D, "" + H, K);
      if (typeof H == "object" && H !== null) {
        switch (H.$$typeof) {
          case U:
            return H.key === Se ? T(C, D, H, K) : null;
          case ue:
            return H.key === Se ? N(C, D, H, K) : null;
          case _t:
            return H = lc(H), x(C, D, H, K);
        }
        if (jt(H) || bt(H))
          return Se !== null ? null : Z(C, D, H, K, null);
        if (typeof H.then == "function")
          return x(
            C,
            D,
            Io(H),
            K
          );
        if (H.$$typeof === St)
          return x(
            C,
            D,
            F(C, H),
            K
          );
        Yr(C, H);
      }
      return null;
    }
    function G(C, D, H, K, Se) {
      if (typeof K == "string" && K !== "" || typeof K == "number" || typeof K == "bigint")
        return C = C.get(H) || null, g(D, C, "" + K, Se);
      if (typeof K == "object" && K !== null) {
        switch (K.$$typeof) {
          case U:
            return C = C.get(
              K.key === null ? H : K.key
            ) || null, T(D, C, K, Se);
          case ue:
            return C = C.get(
              K.key === null ? H : K.key
            ) || null, N(D, C, K, Se);
          case _t:
            return K = lc(K), G(
              C,
              D,
              H,
              K,
              Se
            );
        }
        if (jt(K) || bt(K))
          return C = C.get(H) || null, Z(D, C, K, Se, null);
        if (typeof K.then == "function")
          return G(
            C,
            D,
            H,
            Io(K),
            Se
          );
        if (K.$$typeof === St)
          return G(
            C,
            D,
            H,
            F(D, K),
            Se
          );
        Yr(D, K);
      }
      return null;
    }
    function he(C, D, H, K) {
      for (var Se = null, mt = null, pe = D, Le = D = 0, Ie = null; pe !== null && Le < H.length; Le++) {
        pe.index > Le ? (Ie = pe, pe = null) : Ie = pe.sibling;
        var nt = x(
          C,
          pe,
          H[Le],
          K
        );
        if (nt === null) {
          pe === null && (pe = Ie);
          break;
        }
        l && pe && nt.alternate === null && n(C, pe), D = s(nt, D, Le), mt === null ? Se = nt : mt.sibling = nt, mt = nt, pe = Ie;
      }
      if (Le === H.length)
        return u(C, pe), ut && Eu(C, Le), Se;
      if (pe === null) {
        for (; Le < H.length; Le++)
          pe = W(C, H[Le], K), pe !== null && (D = s(
            pe,
            D,
            Le
          ), mt === null ? Se = pe : mt.sibling = pe, mt = pe);
        return ut && Eu(C, Le), Se;
      }
      for (pe = c(pe); Le < H.length; Le++)
        Ie = G(
          pe,
          C,
          Le,
          H[Le],
          K
        ), Ie !== null && (l && Ie.alternate !== null && pe.delete(
          Ie.key === null ? Le : Ie.key
        ), D = s(
          Ie,
          D,
          Le
        ), mt === null ? Se = Ie : mt.sibling = Ie, mt = Ie);
      return l && pe.forEach(function(pc) {
        return n(C, pc);
      }), ut && Eu(C, Le), Se;
    }
    function _e(C, D, H, K) {
      if (H == null) throw Error(B(151));
      for (var Se = null, mt = null, pe = D, Le = D = 0, Ie = null, nt = H.next(); pe !== null && !nt.done; Le++, nt = H.next()) {
        pe.index > Le ? (Ie = pe, pe = null) : Ie = pe.sibling;
        var pc = x(C, pe, nt.value, K);
        if (pc === null) {
          pe === null && (pe = Ie);
          break;
        }
        l && pe && pc.alternate === null && n(C, pe), D = s(pc, D, Le), mt === null ? Se = pc : mt.sibling = pc, mt = pc, pe = Ie;
      }
      if (nt.done)
        return u(C, pe), ut && Eu(C, Le), Se;
      if (pe === null) {
        for (; !nt.done; Le++, nt = H.next())
          nt = W(C, nt.value, K), nt !== null && (D = s(nt, D, Le), mt === null ? Se = nt : mt.sibling = nt, mt = nt);
        return ut && Eu(C, Le), Se;
      }
      for (pe = c(pe); !nt.done; Le++, nt = H.next())
        nt = G(pe, C, Le, nt.value, K), nt !== null && (l && nt.alternate !== null && pe.delete(nt.key === null ? Le : nt.key), D = s(nt, D, Le), mt === null ? Se = nt : mt.sibling = nt, mt = nt);
      return l && pe.forEach(function(Ih) {
        return n(C, Ih);
      }), ut && Eu(C, Le), Se;
    }
    function Nt(C, D, H, K) {
      if (typeof H == "object" && H !== null && H.type === qe && H.key === null && (H = H.props.children), typeof H == "object" && H !== null) {
        switch (H.$$typeof) {
          case U:
            e: {
              for (var Se = H.key; D !== null; ) {
                if (D.key === Se) {
                  if (Se = H.type, Se === qe) {
                    if (D.tag === 7) {
                      u(
                        C,
                        D.sibling
                      ), K = r(
                        D,
                        H.props.children
                      ), K.return = C, C = K;
                      break e;
                    }
                  } else if (D.elementType === Se || typeof Se == "object" && Se !== null && Se.$$typeof === _t && lc(Se) === D.type) {
                    u(
                      C,
                      D.sibling
                    ), K = r(D, H.props), Po(K, H), K.return = C, C = K;
                    break e;
                  }
                  u(C, D);
                  break;
                } else n(C, D);
                D = D.sibling;
              }
              H.type === qe ? (K = Xc(
                H.props.children,
                C.mode,
                K,
                H.key
              ), K.return = C, C = K) : (K = zr(
                H.type,
                H.key,
                H.props,
                null,
                C.mode,
                K
              ), Po(K, H), K.return = C, C = K);
            }
            return m(C);
          case ue:
            e: {
              for (Se = H.key; D !== null; ) {
                if (D.key === Se)
                  if (D.tag === 4 && D.stateNode.containerInfo === H.containerInfo && D.stateNode.implementation === H.implementation) {
                    u(
                      C,
                      D.sibling
                    ), K = r(D, H.children || []), K.return = C, C = K;
                    break e;
                  } else {
                    u(C, D);
                    break;
                  }
                else n(C, D);
                D = D.sibling;
              }
              K = Cd(H, C.mode, K), K.return = C, C = K;
            }
            return m(C);
          case _t:
            return H = lc(H), Nt(
              C,
              D,
              H,
              K
            );
        }
        if (jt(H))
          return he(
            C,
            D,
            H,
            K
          );
        if (bt(H)) {
          if (Se = bt(H), typeof Se != "function") throw Error(B(150));
          return H = Se.call(H), _e(
            C,
            D,
            H,
            K
          );
        }
        if (typeof H.then == "function")
          return Nt(
            C,
            D,
            Io(H),
            K
          );
        if (H.$$typeof === St)
          return Nt(
            C,
            D,
            F(C, H),
            K
          );
        Yr(C, H);
      }
      return typeof H == "string" && H !== "" || typeof H == "number" || typeof H == "bigint" ? (H = "" + H, D !== null && D.tag === 6 ? (u(C, D.sibling), K = r(D, H), K.return = C, C = K) : (u(C, D), K = _r(H, C.mode, K), K.return = C, C = K), m(C)) : u(C, D);
    }
    return function(C, D, H, K) {
      try {
        Zc = 0;
        var Se = Nt(
          C,
          D,
          H,
          K
        );
        return nc = null, Se;
      } catch (pe) {
        if (pe === Zn || pe === tc) throw pe;
        var mt = Ha(29, pe, null, C.mode);
        return mt.lanes = K, mt.return = C, mt;
      }
    };
  }
  var Jc = sy(!0), dy = sy(!1), mi = !1;
  function Gd(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function qr(l, n) {
    l = l.updateQueue, n.updateQueue === l && (n.updateQueue = {
      baseState: l.baseState,
      firstBaseUpdate: l.firstBaseUpdate,
      lastBaseUpdate: l.lastBaseUpdate,
      shared: l.shared,
      callbacks: null
    });
  }
  function yi(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function pi(l, n, u) {
    var c = l.updateQueue;
    if (c === null) return null;
    if (c = c.shared, (ht & 2) !== 0) {
      var r = c.pending;
      return r === null ? n.next = n : (n.next = r.next, r.next = n), c.pending = n, n = Jo(l), Md(l, null, u), n;
    }
    return tn(l, c, n, u), Jo(l);
  }
  function Du(l, n, u) {
    if (n = n.updateQueue, n !== null && (n = n.shared, (u & 4194048) !== 0)) {
      var c = n.lanes;
      c &= l.pendingLanes, u |= c, n.lanes = u, ur(l, u);
    }
  }
  function ef(l, n) {
    var u = l.updateQueue, c = l.alternate;
    if (c !== null && (c = c.updateQueue, u === c)) {
      var r = null, s = null;
      if (u = u.firstBaseUpdate, u !== null) {
        do {
          var m = {
            lane: u.lane,
            tag: u.tag,
            payload: u.payload,
            callback: null,
            next: null
          };
          s === null ? r = s = m : s = s.next = m, u = u.next;
        } while (u !== null);
        s === null ? r = s = n : s = s.next = n;
      } else r = s = n;
      u = {
        baseState: c.baseState,
        firstBaseUpdate: r,
        lastBaseUpdate: s,
        shared: c.shared,
        callbacks: c.callbacks
      }, l.updateQueue = u;
      return;
    }
    l = u.lastBaseUpdate, l === null ? u.firstBaseUpdate = n : l.next = n, u.lastBaseUpdate = n;
  }
  var wd = !1;
  function Gr() {
    if (wd) {
      var l = ec;
      if (l !== null) throw l;
    }
  }
  function uc(l, n, u, c) {
    wd = !1;
    var r = l.updateQueue;
    mi = !1;
    var s = r.firstBaseUpdate, m = r.lastBaseUpdate, g = r.shared.pending;
    if (g !== null) {
      r.shared.pending = null;
      var T = g, N = T.next;
      T.next = null, m === null ? s = N : m.next = N, m = T;
      var Z = l.alternate;
      Z !== null && (Z = Z.updateQueue, g = Z.lastBaseUpdate, g !== m && (g === null ? Z.firstBaseUpdate = N : g.next = N, Z.lastBaseUpdate = T));
    }
    if (s !== null) {
      var W = r.baseState;
      m = 0, Z = N = T = null, g = s;
      do {
        var x = g.lane & -536870913, G = x !== g.lane;
        if (G ? (it & x) === x : (c & x) === x) {
          x !== 0 && x === Pi && (wd = !0), Z !== null && (Z = Z.next = {
            lane: 0,
            tag: g.tag,
            payload: g.payload,
            callback: null,
            next: null
          });
          e: {
            var he = l, _e = g;
            x = n;
            var Nt = u;
            switch (_e.tag) {
              case 1:
                if (he = _e.payload, typeof he == "function") {
                  W = he.call(Nt, W, x);
                  break e;
                }
                W = he;
                break e;
              case 3:
                he.flags = he.flags & -65537 | 128;
              case 0:
                if (he = _e.payload, x = typeof he == "function" ? he.call(Nt, W, x) : he, x == null) break e;
                W = de({}, W, x);
                break e;
              case 2:
                mi = !0;
            }
          }
          x = g.callback, x !== null && (l.flags |= 64, G && (l.flags |= 8192), G = r.callbacks, G === null ? r.callbacks = [x] : G.push(x));
        } else
          G = {
            lane: x,
            tag: g.tag,
            payload: g.payload,
            callback: g.callback,
            next: null
          }, Z === null ? (N = Z = G, T = W) : Z = Z.next = G, m |= x;
        if (g = g.next, g === null) {
          if (g = r.shared.pending, g === null)
            break;
          G = g, g = G.next, G.next = null, r.lastBaseUpdate = G, r.shared.pending = null;
        }
      } while (!0);
      Z === null && (T = W), r.baseState = T, r.firstBaseUpdate = N, r.lastBaseUpdate = Z, s === null && (r.shared.lanes = 0), Mn |= m, l.lanes = m, l.memoizedState = W;
    }
  }
  function Kc(l, n) {
    if (typeof l != "function")
      throw Error(B(191, l));
    l.call(n);
  }
  function Xd(l, n) {
    var u = l.callbacks;
    if (u !== null)
      for (l.callbacks = null, l = 0; l < u.length; l++)
        Kc(u[l], n);
  }
  var An = O(null), Ql = O(0);
  function wr(l, n) {
    l = wu, $(Ql, l), $(An, n), wu = l | n.baseLanes;
  }
  function hy() {
    $(Ql, wu), $(An, An.current);
  }
  function Xr() {
    wu = Ql.current, A(An), A(Ql);
  }
  var na = O(null), qa = null;
  function vi(l) {
    var n = l.alternate;
    $(el, el.current & 1), $(na, l), qa === null && (n === null || An.current !== null || n.memoizedState !== null) && (qa = l);
  }
  function Qr(l) {
    $(el, el.current), $(na, l), qa === null && (qa = l);
  }
  function Lr(l) {
    l.tag === 22 ? ($(el, el.current), $(na, l), qa === null && (qa = l)) : Ru();
  }
  function Ru() {
    $(el, el.current), $(na, na.current);
  }
  function ua(l) {
    A(na), qa === l && (qa = null), A(el);
  }
  var el = O(0);
  function $c(l) {
    for (var n = l; n !== null; ) {
      if (n.tag === 13) {
        var u = n.memoizedState;
        if (u !== null && (u = u.dehydrated, u === null || Op(u) || Un(u)))
          return n;
      } else if (n.tag === 19 && (n.memoizedProps.revealOrder === "forwards" || n.memoizedProps.revealOrder === "backwards" || n.memoizedProps.revealOrder === "unstable_legacy-backwards" || n.memoizedProps.revealOrder === "together")) {
        if ((n.flags & 128) !== 0) return n;
      } else if (n.child !== null) {
        n.child.return = n, n = n.child;
        continue;
      }
      if (n === l) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === l) return null;
        n = n.return;
      }
      n.sibling.return = n.return, n = n.sibling;
    }
    return null;
  }
  var Jn = 0, Qe = null, Dt = null, cl = null, Vr = !1, gi = !1, ic = !1, tf = 0, lf = 0, kc = null, my = 0;
  function tl() {
    throw Error(B(321));
  }
  function Qd(l, n) {
    if (n === null) return !1;
    for (var u = 0; u < n.length && u < l.length; u++)
      if (!Ca(l[u], n[u])) return !1;
    return !0;
  }
  function Si(l, n, u, c, r, s) {
    return Jn = s, Qe = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, X.H = l === null || l.memoizedState === null ? nv : Cy, ic = !1, s = u(c, r), ic = !1, gi && (s = Vd(
      n,
      u,
      c,
      r
    )), Ld(l), s;
  }
  function Ld(l) {
    X.H = ff;
    var n = Dt !== null && Dt.next !== null;
    if (Jn = 0, cl = Dt = Qe = null, Vr = !1, lf = 0, kc = null, n) throw Error(B(300));
    l === null || hl || (l = l.dependencies, l !== null && aa(l) && (hl = !0));
  }
  function Vd(l, n, u, c) {
    Qe = l;
    var r = 0;
    do {
      if (gi && (kc = null), lf = 0, gi = !1, 25 <= r) throw Error(B(301));
      if (r += 1, cl = Dt = null, l.updateQueue != null) {
        var s = l.updateQueue;
        s.lastEffect = null, s.events = null, s.stores = null, s.memoCache != null && (s.memoCache.index = 0);
      }
      X.H = Uy, s = n(u, c);
    } while (gi);
    return s;
  }
  function Ig() {
    var l = X.H, n = l.useState()[0];
    return n = typeof n.then == "function" ? af(n) : n, l = l.useState()[0], (Dt !== null ? Dt.memoizedState : null) !== l && (Qe.flags |= 1024), n;
  }
  function yy() {
    var l = tf !== 0;
    return tf = 0, l;
  }
  function Zd(l, n, u) {
    n.updateQueue = l.updateQueue, n.flags &= -2053, l.lanes &= ~u;
  }
  function Wc(l) {
    if (Vr) {
      for (l = l.memoizedState; l !== null; ) {
        var n = l.queue;
        n !== null && (n.pending = null), l = l.next;
      }
      Vr = !1;
    }
    Jn = 0, cl = Dt = Qe = null, gi = !1, lf = tf = 0, kc = null;
  }
  function Ll() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return cl === null ? Qe.memoizedState = cl = l : cl = cl.next = l, cl;
  }
  function kt() {
    if (Dt === null) {
      var l = Qe.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = Dt.next;
    var n = cl === null ? Qe.memoizedState : cl.next;
    if (n !== null)
      cl = n, Dt = l;
    else {
      if (l === null)
        throw Qe.alternate === null ? Error(B(467)) : Error(B(310));
      Dt = l, l = {
        memoizedState: Dt.memoizedState,
        baseState: Dt.baseState,
        baseQueue: Dt.baseQueue,
        queue: Dt.queue,
        next: null
      }, cl === null ? Qe.memoizedState = cl = l : cl = cl.next = l;
    }
    return cl;
  }
  function Zr() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function af(l) {
    var n = lf;
    return lf += 1, kc === null && (kc = []), l = oy(kc, l, n), n = Qe, (cl === null ? n.memoizedState : cl.next) === null && (n = n.alternate, X.H = n === null || n.memoizedState === null ? nv : Cy), l;
  }
  function nf(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return af(l);
      if (l.$$typeof === St) return be(l);
    }
    throw Error(B(438, String(l)));
  }
  function Jr(l) {
    var n = null, u = Qe.updateQueue;
    if (u !== null && (n = u.memoCache), n == null) {
      var c = Qe.alternate;
      c !== null && (c = c.updateQueue, c !== null && (c = c.memoCache, c != null && (n = {
        data: c.data.map(function(r) {
          return r.slice();
        }),
        index: 0
      })));
    }
    if (n == null && (n = { data: [], index: 0 }), u === null && (u = Zr(), Qe.updateQueue = u), u.memoCache = n, u = n.data[n.index], u === void 0)
      for (u = n.data[n.index] = Array(l), c = 0; c < l; c++)
        u[c] = Vt;
    return n.index++, u;
  }
  function Mu(l, n) {
    return typeof n == "function" ? n(l) : n;
  }
  function Kr(l) {
    var n = kt();
    return bi(n, Dt, l);
  }
  function bi(l, n, u) {
    var c = l.queue;
    if (c === null) throw Error(B(311));
    c.lastRenderedReducer = u;
    var r = l.baseQueue, s = c.pending;
    if (s !== null) {
      if (r !== null) {
        var m = r.next;
        r.next = s.next, s.next = m;
      }
      n.baseQueue = r = s, c.pending = null;
    }
    if (s = l.baseState, r === null) l.memoizedState = s;
    else {
      n = r.next;
      var g = m = null, T = null, N = n, Z = !1;
      do {
        var W = N.lane & -536870913;
        if (W !== N.lane ? (it & W) === W : (Jn & W) === W) {
          var x = N.revertLane;
          if (x === 0)
            T !== null && (T = T.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: N.action,
              hasEagerState: N.hasEagerState,
              eagerState: N.eagerState,
              next: null
            }), W === Pi && (Z = !0);
          else if ((Jn & x) === x) {
            N = N.next, x === Pi && (Z = !0);
            continue;
          } else
            W = {
              lane: 0,
              revertLane: N.revertLane,
              gesture: null,
              action: N.action,
              hasEagerState: N.hasEagerState,
              eagerState: N.eagerState,
              next: null
            }, T === null ? (g = T = W, m = s) : T = T.next = W, Qe.lanes |= x, Mn |= x;
          W = N.action, ic && u(s, W), s = N.hasEagerState ? N.eagerState : u(s, W);
        } else
          x = {
            lane: W,
            revertLane: N.revertLane,
            gesture: N.gesture,
            action: N.action,
            hasEagerState: N.hasEagerState,
            eagerState: N.eagerState,
            next: null
          }, T === null ? (g = T = x, m = s) : T = T.next = x, Qe.lanes |= W, Mn |= W;
        N = N.next;
      } while (N !== null && N !== n);
      if (T === null ? m = s : T.next = g, !Ca(s, l.memoizedState) && (hl = !0, Z && (u = ec, u !== null)))
        throw u;
      l.memoizedState = s, l.baseState = m, l.baseQueue = T, c.lastRenderedState = s;
    }
    return r === null && (c.lanes = 0), [l.memoizedState, c.dispatch];
  }
  function Jd(l) {
    var n = kt(), u = n.queue;
    if (u === null) throw Error(B(311));
    u.lastRenderedReducer = l;
    var c = u.dispatch, r = u.pending, s = n.memoizedState;
    if (r !== null) {
      u.pending = null;
      var m = r = r.next;
      do
        s = l(s, m.action), m = m.next;
      while (m !== r);
      Ca(s, n.memoizedState) || (hl = !0), n.memoizedState = s, n.baseQueue === null && (n.baseState = s), u.lastRenderedState = s;
    }
    return [s, c];
  }
  function py(l, n, u) {
    var c = Qe, r = kt(), s = ut;
    if (s) {
      if (u === void 0) throw Error(B(407));
      u = u();
    } else u = n();
    var m = !Ca(
      (Dt || r).memoizedState,
      u
    );
    if (m && (r.memoizedState = u, hl = !0), r = r.queue, Ir(gy.bind(null, c, r, l), [
      l
    ]), r.getSnapshot !== n || m || cl !== null && cl.memoizedState.tag & 1) {
      if (c.flags |= 2048, Fc(
        9,
        { destroy: void 0 },
        $r.bind(
          null,
          c,
          r,
          u,
          n
        ),
        null
      ), Ht === null) throw Error(B(349));
      s || (Jn & 127) !== 0 || vy(c, n, u);
    }
    return u;
  }
  function vy(l, n, u) {
    l.flags |= 16384, l = { getSnapshot: n, value: u }, n = Qe.updateQueue, n === null ? (n = Zr(), Qe.updateQueue = n, n.stores = [l]) : (u = n.stores, u === null ? n.stores = [l] : u.push(l));
  }
  function $r(l, n, u, c) {
    n.value = u, n.getSnapshot = c, Kd(n) && $d(l);
  }
  function gy(l, n, u) {
    return u(function() {
      Kd(n) && $d(l);
    });
  }
  function Kd(l) {
    var n = l.getSnapshot;
    l = l.value;
    try {
      var u = n();
      return !Ca(l, u);
    } catch {
      return !0;
    }
  }
  function $d(l) {
    var n = ta(l, 2);
    n !== null && Va(n, l, 2);
  }
  function kr(l) {
    var n = Ll();
    if (typeof l == "function") {
      var u = l;
      if (l = u(), ic) {
        za(!0);
        try {
          u();
        } finally {
          za(!1);
        }
      }
    }
    return n.memoizedState = n.baseState = l, n.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Mu,
      lastRenderedState: l
    }, n;
  }
  function I0(l, n, u, c) {
    return l.baseState = u, bi(
      l,
      Dt,
      typeof c == "function" ? c : Mu
    );
  }
  function Vl(l, n, u, c, r) {
    if (Ei(l)) throw Error(B(485));
    if (l = n.action, l !== null) {
      var s = {
        payload: r,
        action: l,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(m) {
          s.listeners.push(m);
        }
      };
      X.T !== null ? u(!0) : s.isTransition = !1, c(s), u = n.pending, u === null ? (s.next = n.pending = s, Sy(n, s)) : (s.next = u.next, n.pending = u.next = s);
    }
  }
  function Sy(l, n) {
    var u = n.action, c = n.payload, r = l.state;
    if (n.isTransition) {
      var s = X.T, m = {};
      X.T = m;
      try {
        var g = u(r, c), T = X.S;
        T !== null && T(m, g), by(l, n, g);
      } catch (N) {
        kd(l, n, N);
      } finally {
        s !== null && m.types !== null && (s.types = m.types), X.T = s;
      }
    } else
      try {
        s = u(r, c), by(l, n, s);
      } catch (N) {
        kd(l, n, N);
      }
  }
  function by(l, n, u) {
    u !== null && typeof u == "object" && typeof u.then == "function" ? u.then(
      function(c) {
        Ey(l, n, c);
      },
      function(c) {
        return kd(l, n, c);
      }
    ) : Ey(l, n, u);
  }
  function Ey(l, n, u) {
    n.status = "fulfilled", n.value = u, uf(n), l.state = u, n = l.pending, n !== null && (u = n.next, u === n ? l.pending = null : (u = u.next, n.next = u, Sy(l, u)));
  }
  function kd(l, n, u) {
    var c = l.pending;
    if (l.pending = null, c !== null) {
      c = c.next;
      do
        n.status = "rejected", n.reason = u, uf(n), n = n.next;
      while (n !== c);
    }
    l.action = null;
  }
  function uf(l) {
    l = l.listeners;
    for (var n = 0; n < l.length; n++) (0, l[n])();
  }
  function Ty(l, n) {
    return n;
  }
  function Wr(l, n) {
    if (ut) {
      var u = Ht.formState;
      if (u !== null) {
        e: {
          var c = Qe;
          if (ut) {
            if (qt) {
              t: {
                for (var r = qt, s = xa; r.nodeType !== 8; ) {
                  if (!s) {
                    r = null;
                    break t;
                  }
                  if (r = $l(
                    r.nextSibling
                  ), r === null) {
                    r = null;
                    break t;
                  }
                }
                s = r.data, r = s === "F!" || s === "F" ? r : null;
              }
              if (r) {
                qt = $l(
                  r.nextSibling
                ), c = r.data === "F!";
                break e;
              }
            }
            pa(c);
          }
          c = !1;
        }
        c && (n = u[0]);
      }
    }
    return u = Ll(), u.memoizedState = u.baseState = n, c = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ty,
      lastRenderedState: n
    }, u.queue = c, u = Ry.bind(
      null,
      Qe,
      c
    ), c.dispatch = u, c = kr(!1), s = Pc.bind(
      null,
      Qe,
      !1,
      c.queue
    ), c = Ll(), r = {
      state: n,
      dispatch: null,
      action: l,
      pending: null
    }, c.queue = r, u = Vl.bind(
      null,
      Qe,
      r,
      s,
      u
    ), r.dispatch = u, c.memoizedState = l, [n, u, !1];
  }
  function Ay(l) {
    var n = kt();
    return P0(n, Dt, l);
  }
  function P0(l, n, u) {
    if (n = bi(
      l,
      n,
      Ty
    )[0], l = Kr(Mu)[0], typeof n == "object" && n !== null && typeof n.then == "function")
      try {
        var c = af(n);
      } catch (m) {
        throw m === Zn ? tc : m;
      }
    else c = n;
    n = kt();
    var r = n.queue, s = r.dispatch;
    return u !== n.memoizedState && (Qe.flags |= 2048, Fc(
      9,
      { destroy: void 0 },
      Wd.bind(null, r, u),
      null
    )), [c, s, l];
  }
  function Wd(l, n) {
    l.action = n;
  }
  function Fd(l) {
    var n = kt(), u = Dt;
    if (u !== null)
      return P0(n, u, l);
    kt(), n = n.memoizedState, u = kt();
    var c = u.queue.dispatch;
    return u.memoizedState = l, [n, c, !1];
  }
  function Fc(l, n, u, c) {
    return l = { tag: l, create: u, deps: c, inst: n, next: null }, n = Qe.updateQueue, n === null && (n = Zr(), Qe.updateQueue = n), u = n.lastEffect, u === null ? n.lastEffect = l.next = l : (c = u.next, u.next = l, l.next = c, n.lastEffect = l), l;
  }
  function Oy() {
    return kt().memoizedState;
  }
  function Fr(l, n, u, c) {
    var r = Ll();
    Qe.flags |= l, r.memoizedState = Fc(
      1 | n,
      { destroy: void 0 },
      u,
      c === void 0 ? null : c
    );
  }
  function cf(l, n, u, c) {
    var r = kt();
    c = c === void 0 ? null : c;
    var s = r.memoizedState.inst;
    Dt !== null && c !== null && Qd(c, Dt.memoizedState.deps) ? r.memoizedState = Fc(n, s, u, c) : (Qe.flags |= l, r.memoizedState = Fc(
      1 | n,
      s,
      u,
      c
    ));
  }
  function Id(l, n) {
    Fr(8390656, 8, l, n);
  }
  function Ir(l, n) {
    cf(2048, 8, l, n);
  }
  function ev(l) {
    Qe.flags |= 4;
    var n = Qe.updateQueue;
    if (n === null)
      n = Zr(), Qe.updateQueue = n, n.events = [l];
    else {
      var u = n.events;
      u === null ? n.events = [l] : u.push(l);
    }
  }
  function Pd(l) {
    var n = kt().memoizedState;
    return ev({ ref: n, nextImpl: l }), function() {
      if ((ht & 2) !== 0) throw Error(B(440));
      return n.impl.apply(void 0, arguments);
    };
  }
  function Pr(l, n) {
    return cf(4, 2, l, n);
  }
  function eh(l, n) {
    return cf(4, 4, l, n);
  }
  function zy(l, n) {
    if (typeof n == "function") {
      l = l();
      var u = n(l);
      return function() {
        typeof u == "function" ? u() : n(null);
      };
    }
    if (n != null)
      return l = l(), n.current = l, function() {
        n.current = null;
      };
  }
  function th(l, n, u) {
    u = u != null ? u.concat([l]) : null, cf(4, 4, zy.bind(null, n, l), u);
  }
  function lh() {
  }
  function Cu(l, n) {
    var u = kt();
    n = n === void 0 ? null : n;
    var c = u.memoizedState;
    return n !== null && Qd(n, c[1]) ? c[0] : (u.memoizedState = [l, n], l);
  }
  function ah(l, n) {
    var u = kt();
    n = n === void 0 ? null : n;
    var c = u.memoizedState;
    if (n !== null && Qd(n, c[1]))
      return c[0];
    if (c = l(), ic) {
      za(!0);
      try {
        l();
      } finally {
        za(!1);
      }
    }
    return u.memoizedState = [c, n], c;
  }
  function _y(l, n, u) {
    return u === void 0 || (Jn & 1073741824) !== 0 && (it & 261930) === 0 ? l.memoizedState = n : (l.memoizedState = u, l = np(), Qe.lanes |= l, Mn |= l, u);
  }
  function nh(l, n, u, c) {
    return Ca(u, n) ? u : An.current !== null ? (l = _y(l, u, c), Ca(l, n) || (hl = !0), l) : (Jn & 42) === 0 || (Jn & 1073741824) !== 0 && (it & 261930) === 0 ? (hl = !0, l.memoizedState = u) : (l = np(), Qe.lanes |= l, Mn |= l, n);
  }
  function Uu(l, n, u, c, r) {
    var s = j.p;
    j.p = s !== 0 && 8 > s ? s : 8;
    var m = X.T, g = {};
    X.T = g, Pc(l, !1, n, u);
    try {
      var T = r(), N = X.S;
      if (N !== null && N(g, T), T !== null && typeof T == "object" && typeof T.then == "function") {
        var Z = Yd(
          T,
          c
        );
        Ic(
          l,
          n,
          Z,
          Ta(l)
        );
      } else
        Ic(
          l,
          n,
          c,
          Ta(l)
        );
    } catch (W) {
      Ic(
        l,
        n,
        { then: function() {
        }, status: "rejected", reason: W },
        Ta()
      );
    } finally {
      j.p = s, m !== null && g.types !== null && (m.types = g.types), X.T = m;
    }
  }
  function Dy() {
  }
  function uh(l, n, u, c) {
    if (l.tag !== 5) throw Error(B(476));
    var r = es(l).queue;
    Uu(
      l,
      r,
      n,
      P,
      u === null ? Dy : function() {
        return of(l), u(c);
      }
    );
  }
  function es(l) {
    var n = l.memoizedState;
    if (n !== null) return n;
    n = {
      memoizedState: P,
      baseState: P,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Mu,
        lastRenderedState: P
      },
      next: null
    };
    var u = {};
    return n.next = {
      memoizedState: u,
      baseState: u,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Mu,
        lastRenderedState: u
      },
      next: null
    }, l.memoizedState = n, l = l.alternate, l !== null && (l.memoizedState = n), n;
  }
  function of(l) {
    var n = es(l);
    n.next === null && (n = l.alternate.memoizedState), Ic(
      l,
      n.next.queue,
      {},
      Ta()
    );
  }
  function Rt() {
    return be(rl);
  }
  function tv() {
    return kt().memoizedState;
  }
  function lv() {
    return kt().memoizedState;
  }
  function av(l) {
    for (var n = l.return; n !== null; ) {
      switch (n.tag) {
        case 24:
        case 3:
          var u = Ta();
          l = yi(u);
          var c = pi(n, l, u);
          c !== null && (Va(c, n, u), Du(c, n, u)), n = { cache: jd() }, l.payload = n;
          return;
      }
      n = n.return;
    }
  }
  function Hu(l, n, u) {
    var c = Ta();
    u = {
      lane: c,
      revertLane: 0,
      gesture: null,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Ei(l) ? My(n, u) : (u = En(l, n, u, c), u !== null && (Va(u, l, c), ih(u, n, c)));
  }
  function Ry(l, n, u) {
    var c = Ta();
    Ic(l, n, u, c);
  }
  function Ic(l, n, u, c) {
    var r = {
      lane: c,
      revertLane: 0,
      gesture: null,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Ei(l)) My(n, r);
    else {
      var s = l.alternate;
      if (l.lanes === 0 && (s === null || s.lanes === 0) && (s = n.lastRenderedReducer, s !== null))
        try {
          var m = n.lastRenderedState, g = s(m, u);
          if (r.hasEagerState = !0, r.eagerState = g, Ca(g, m))
            return tn(l, n, r, 0), Ht === null && en(), !1;
        } catch {
        }
      if (u = En(l, n, r, c), u !== null)
        return Va(u, l, c), ih(u, n, c), !0;
    }
    return !1;
  }
  function Pc(l, n, u, c) {
    if (c = {
      lane: 2,
      revertLane: ro(),
      gesture: null,
      action: c,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Ei(l)) {
      if (n) throw Error(B(479));
    } else
      n = En(
        l,
        u,
        c,
        2
      ), n !== null && Va(n, l, 2);
  }
  function Ei(l) {
    var n = l.alternate;
    return l === Qe || n !== null && n === Qe;
  }
  function My(l, n) {
    gi = Vr = !0;
    var u = l.pending;
    u === null ? n.next = n : (n.next = u.next, u.next = n), l.pending = n;
  }
  function ih(l, n, u) {
    if ((u & 4194048) !== 0) {
      var c = n.lanes;
      c &= l.pendingLanes, u |= c, n.lanes = u, ur(l, u);
    }
  }
  var ff = {
    readContext: be,
    use: nf,
    useCallback: tl,
    useContext: tl,
    useEffect: tl,
    useImperativeHandle: tl,
    useLayoutEffect: tl,
    useInsertionEffect: tl,
    useMemo: tl,
    useReducer: tl,
    useRef: tl,
    useState: tl,
    useDebugValue: tl,
    useDeferredValue: tl,
    useTransition: tl,
    useSyncExternalStore: tl,
    useId: tl,
    useHostTransitionStatus: tl,
    useFormState: tl,
    useActionState: tl,
    useOptimistic: tl,
    useMemoCache: tl,
    useCacheRefresh: tl
  };
  ff.useEffectEvent = tl;
  var nv = {
    readContext: be,
    use: nf,
    useCallback: function(l, n) {
      return Ll().memoizedState = [
        l,
        n === void 0 ? null : n
      ], l;
    },
    useContext: be,
    useEffect: Id,
    useImperativeHandle: function(l, n, u) {
      u = u != null ? u.concat([l]) : null, Fr(
        4194308,
        4,
        zy.bind(null, n, l),
        u
      );
    },
    useLayoutEffect: function(l, n) {
      return Fr(4194308, 4, l, n);
    },
    useInsertionEffect: function(l, n) {
      Fr(4, 2, l, n);
    },
    useMemo: function(l, n) {
      var u = Ll();
      n = n === void 0 ? null : n;
      var c = l();
      if (ic) {
        za(!0);
        try {
          l();
        } finally {
          za(!1);
        }
      }
      return u.memoizedState = [c, n], c;
    },
    useReducer: function(l, n, u) {
      var c = Ll();
      if (u !== void 0) {
        var r = u(n);
        if (ic) {
          za(!0);
          try {
            u(n);
          } finally {
            za(!1);
          }
        }
      } else r = n;
      return c.memoizedState = c.baseState = r, l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: l,
        lastRenderedState: r
      }, c.queue = l, l = l.dispatch = Hu.bind(
        null,
        Qe,
        l
      ), [c.memoizedState, l];
    },
    useRef: function(l) {
      var n = Ll();
      return l = { current: l }, n.memoizedState = l;
    },
    useState: function(l) {
      l = kr(l);
      var n = l.queue, u = Ry.bind(null, Qe, n);
      return n.dispatch = u, [l.memoizedState, u];
    },
    useDebugValue: lh,
    useDeferredValue: function(l, n) {
      var u = Ll();
      return _y(u, l, n);
    },
    useTransition: function() {
      var l = kr(!1);
      return l = Uu.bind(
        null,
        Qe,
        l.queue,
        !0,
        !1
      ), Ll().memoizedState = l, [!1, l];
    },
    useSyncExternalStore: function(l, n, u) {
      var c = Qe, r = Ll();
      if (ut) {
        if (u === void 0)
          throw Error(B(407));
        u = u();
      } else {
        if (u = n(), Ht === null)
          throw Error(B(349));
        (it & 127) !== 0 || vy(c, n, u);
      }
      r.memoizedState = u;
      var s = { value: u, getSnapshot: n };
      return r.queue = s, Id(gy.bind(null, c, s, l), [
        l
      ]), c.flags |= 2048, Fc(
        9,
        { destroy: void 0 },
        $r.bind(
          null,
          c,
          s,
          u,
          n
        ),
        null
      ), u;
    },
    useId: function() {
      var l = Ll(), n = Ht.identifierPrefix;
      if (ut) {
        var u = Ba, c = un;
        u = (c & ~(1 << 32 - Rl(c) - 1)).toString(32) + u, n = "_" + n + "R_" + u, u = tf++, 0 < u && (n += "H" + u.toString(32)), n += "_";
      } else
        u = my++, n = "_" + n + "r_" + u.toString(32) + "_";
      return l.memoizedState = n;
    },
    useHostTransitionStatus: Rt,
    useFormState: Wr,
    useActionState: Wr,
    useOptimistic: function(l) {
      var n = Ll();
      n.memoizedState = n.baseState = l;
      var u = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return n.queue = u, n = Pc.bind(
        null,
        Qe,
        !0,
        u
      ), u.dispatch = n, [l, n];
    },
    useMemoCache: Jr,
    useCacheRefresh: function() {
      return Ll().memoizedState = av.bind(
        null,
        Qe
      );
    },
    useEffectEvent: function(l) {
      var n = Ll(), u = { impl: l };
      return n.memoizedState = u, function() {
        if ((ht & 2) !== 0)
          throw Error(B(440));
        return u.impl.apply(void 0, arguments);
      };
    }
  }, Cy = {
    readContext: be,
    use: nf,
    useCallback: Cu,
    useContext: be,
    useEffect: Ir,
    useImperativeHandle: th,
    useInsertionEffect: Pr,
    useLayoutEffect: eh,
    useMemo: ah,
    useReducer: Kr,
    useRef: Oy,
    useState: function() {
      return Kr(Mu);
    },
    useDebugValue: lh,
    useDeferredValue: function(l, n) {
      var u = kt();
      return nh(
        u,
        Dt.memoizedState,
        l,
        n
      );
    },
    useTransition: function() {
      var l = Kr(Mu)[0], n = kt().memoizedState;
      return [
        typeof l == "boolean" ? l : af(l),
        n
      ];
    },
    useSyncExternalStore: py,
    useId: tv,
    useHostTransitionStatus: Rt,
    useFormState: Ay,
    useActionState: Ay,
    useOptimistic: function(l, n) {
      var u = kt();
      return I0(u, Dt, l, n);
    },
    useMemoCache: Jr,
    useCacheRefresh: lv
  };
  Cy.useEffectEvent = Pd;
  var Uy = {
    readContext: be,
    use: nf,
    useCallback: Cu,
    useContext: be,
    useEffect: Ir,
    useImperativeHandle: th,
    useInsertionEffect: Pr,
    useLayoutEffect: eh,
    useMemo: ah,
    useReducer: Jd,
    useRef: Oy,
    useState: function() {
      return Jd(Mu);
    },
    useDebugValue: lh,
    useDeferredValue: function(l, n) {
      var u = kt();
      return Dt === null ? _y(u, l, n) : nh(
        u,
        Dt.memoizedState,
        l,
        n
      );
    },
    useTransition: function() {
      var l = Jd(Mu)[0], n = kt().memoizedState;
      return [
        typeof l == "boolean" ? l : af(l),
        n
      ];
    },
    useSyncExternalStore: py,
    useId: tv,
    useHostTransitionStatus: Rt,
    useFormState: Fd,
    useActionState: Fd,
    useOptimistic: function(l, n) {
      var u = kt();
      return Dt !== null ? I0(u, Dt, l, n) : (u.baseState = l, [l, u.queue.dispatch]);
    },
    useMemoCache: Jr,
    useCacheRefresh: lv
  };
  Uy.useEffectEvent = Pd;
  function Hy(l, n, u, c) {
    n = l.memoizedState, u = u(c, n), u = u == null ? n : de({}, n, u), l.memoizedState = u, l.lanes === 0 && (l.updateQueue.baseState = u);
  }
  var eo = {
    enqueueSetState: function(l, n, u) {
      l = l._reactInternals;
      var c = Ta(), r = yi(c);
      r.payload = n, u != null && (r.callback = u), n = pi(l, r, c), n !== null && (Va(n, l, c), Du(n, l, c));
    },
    enqueueReplaceState: function(l, n, u) {
      l = l._reactInternals;
      var c = Ta(), r = yi(c);
      r.tag = 1, r.payload = n, u != null && (r.callback = u), n = pi(l, r, c), n !== null && (Va(n, l, c), Du(n, l, c));
    },
    enqueueForceUpdate: function(l, n) {
      l = l._reactInternals;
      var u = Ta(), c = yi(u);
      c.tag = 2, n != null && (c.callback = n), n = pi(l, c, u), n !== null && (Va(n, l, u), Du(n, l, u));
    }
  };
  function Kn(l, n, u, c, r, s, m) {
    return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(c, s, m) : n.prototype && n.prototype.isPureReactComponent ? !Ki(u, c) || !Ki(r, s) : !0;
  }
  function Ny(l, n, u, c) {
    l = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(u, c), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(u, c), n.state !== l && eo.enqueueReplaceState(n, n.state, null);
  }
  function to(l, n) {
    var u = n;
    if ("ref" in n) {
      u = {};
      for (var c in n)
        c !== "ref" && (u[c] = n[c]);
    }
    if (l = l.defaultProps) {
      u === n && (u = de({}, u));
      for (var r in l)
        u[r] === void 0 && (u[r] = l[r]);
    }
    return u;
  }
  function By(l) {
    Fi(l);
  }
  function ch(l) {
    console.error(l);
  }
  function xy(l) {
    Fi(l);
  }
  function rf(l, n) {
    try {
      var u = l.onUncaughtError;
      u(n.value, { componentStack: n.stack });
    } catch (c) {
      setTimeout(function() {
        throw c;
      });
    }
  }
  function oh(l, n, u) {
    try {
      var c = l.onCaughtError;
      c(u.value, {
        componentStack: u.stack,
        errorBoundary: n.tag === 1 ? n.stateNode : null
      });
    } catch (r) {
      setTimeout(function() {
        throw r;
      });
    }
  }
  function sf(l, n, u) {
    return u = yi(u), u.tag = 3, u.payload = { element: null }, u.callback = function() {
      rf(l, n);
    }, u;
  }
  function uv(l) {
    return l = yi(l), l.tag = 3, l;
  }
  function jy(l, n, u, c) {
    var r = u.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var s = c.value;
      l.payload = function() {
        return r(s);
      }, l.callback = function() {
        oh(n, u, c);
      };
    }
    var m = u.stateNode;
    m !== null && typeof m.componentDidCatch == "function" && (l.callback = function() {
      oh(n, u, c), typeof r != "function" && (Qu === null ? Qu = /* @__PURE__ */ new Set([this]) : Qu.add(this));
      var g = c.stack;
      this.componentDidCatch(c.value, {
        componentStack: g !== null ? g : ""
      });
    });
  }
  function iv(l, n, u, c, r) {
    if (u.flags |= 32768, c !== null && typeof c == "object" && typeof c.then == "function") {
      if (n = u.alternate, n !== null && cn(
        n,
        u,
        r,
        !0
      ), u = na.current, u !== null) {
        switch (u.tag) {
          case 31:
          case 13:
            return qa === null ? bh() : u.alternate === null && Wt === 0 && (Wt = 3), u.flags &= -257, u.flags |= 65536, u.lanes = r, c === Fo ? u.flags |= 16384 : (n = u.updateQueue, n === null ? u.updateQueue = /* @__PURE__ */ new Set([c]) : n.add(c), Ah(l, c, r)), !1;
          case 22:
            return u.flags |= 65536, c === Fo ? u.flags |= 16384 : (n = u.updateQueue, n === null ? (n = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([c])
            }, u.updateQueue = n) : (u = n.retryQueue, u === null ? n.retryQueue = /* @__PURE__ */ new Set([c]) : u.add(c)), Ah(l, c, r)), !1;
        }
        throw Error(B(435, u.tag));
      }
      return Ah(l, c, r), bh(), !1;
    }
    if (ut)
      return n = na.current, n !== null ? ((n.flags & 65536) === 0 && (n.flags |= 256), n.flags |= 65536, n.lanes = r, c !== Au && (l = Error(B(422), { cause: c }), Ur(an(l, u)))) : (c !== Au && (n = Error(B(423), {
        cause: c
      }), Ur(
        an(n, u)
      )), l = l.current.alternate, l.flags |= 65536, r &= -r, l.lanes |= r, c = an(c, u), r = sf(
        l.stateNode,
        c,
        r
      ), ef(l, r), Wt !== 4 && (Wt = 2)), !1;
    var s = Error(B(520), { cause: c });
    if (s = an(s, u), ol === null ? ol = [s] : ol.push(s), Wt !== 4 && (Wt = 2), n === null) return !0;
    c = an(c, u), u = n;
    do {
      switch (u.tag) {
        case 3:
          return u.flags |= 65536, l = r & -r, u.lanes |= l, l = sf(u.stateNode, c, l), ef(u, l), !1;
        case 1:
          if (n = u.type, s = u.stateNode, (u.flags & 128) === 0 && (typeof n.getDerivedStateFromError == "function" || s !== null && typeof s.componentDidCatch == "function" && (Qu === null || !Qu.has(s))))
            return u.flags |= 65536, r &= -r, u.lanes |= r, r = uv(r), jy(
              r,
              l,
              u,
              c
            ), ef(u, r), !1;
      }
      u = u.return;
    } while (u !== null);
    return !1;
  }
  var Yy = Error(B(461)), hl = !1;
  function Cl(l, n, u, c) {
    n.child = l === null ? dy(n, null, u, c) : Jc(
      n,
      l.child,
      u,
      c
    );
  }
  function Nu(l, n, u, c, r) {
    u = u.render;
    var s = n.ref;
    if ("ref" in c) {
      var m = {};
      for (var g in c)
        g !== "ref" && (m[g] = c[g]);
    } else m = c;
    return _u(n), c = Si(
      l,
      n,
      u,
      m,
      s,
      r
    ), g = yy(), l !== null && !hl ? (Zd(l, n, r), Bu(l, n, r)) : (ut && g && Ud(n), n.flags |= 1, Cl(l, n, c, r), n.child);
  }
  function qy(l, n, u, c, r) {
    if (l === null) {
      var s = u.type;
      return typeof s == "function" && !Tn(s) && s.defaultProps === void 0 && u.compare === null ? (n.tag = 15, n.type = s, Gy(
        l,
        n,
        s,
        c,
        r
      )) : (l = zr(
        u.type,
        null,
        c,
        n,
        n.mode,
        r
      ), l.ref = n.ref, l.return = n, n.child = l);
    }
    if (s = l.child, !lo(l, r)) {
      var m = s.memoizedProps;
      if (u = u.compare, u = u !== null ? u : Ki, u(m, c) && l.ref === n.ref)
        return Bu(l, n, r);
    }
    return n.flags |= 1, l = ln(s, c), l.ref = n.ref, l.return = n, n.child = l;
  }
  function Gy(l, n, u, c, r) {
    if (l !== null) {
      var s = l.memoizedProps;
      if (Ki(s, c) && l.ref === n.ref)
        if (hl = !1, n.pendingProps = c = s, lo(l, r))
          (l.flags & 131072) !== 0 && (hl = !0);
        else
          return n.lanes = l.lanes, Bu(l, n, r);
    }
    return On(
      l,
      n,
      u,
      c,
      r
    );
  }
  function wy(l, n, u, c) {
    var r = c.children, s = l !== null ? l.memoizedState : null;
    if (l === null && n.stateNode === null && (n.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), c.mode === "hidden") {
      if ((n.flags & 128) !== 0) {
        if (s = s !== null ? s.baseLanes | u : u, l !== null) {
          for (c = n.child = l.child, r = 0; c !== null; )
            r = r | c.lanes | c.childLanes, c = c.sibling;
          c = r & ~s;
        } else c = 0, n.child = null;
        return ls(
          l,
          n,
          s,
          u,
          c
        );
      }
      if ((u & 536870912) !== 0)
        n.memoizedState = { baseLanes: 0, cachePool: null }, l !== null && Ya(
          n,
          s !== null ? s.cachePool : null
        ), s !== null ? wr(n, s) : hy(), Lr(n);
      else
        return c = n.lanes = 536870912, ls(
          l,
          n,
          s !== null ? s.baseLanes | u : u,
          u,
          c
        );
    } else
      s !== null ? (Ya(n, s.cachePool), wr(n, s), Ru(), n.memoizedState = null) : (l !== null && Ya(n, null), hy(), Ru());
    return Cl(l, n, r, u), n.child;
  }
  function ts(l, n) {
    return l !== null && l.tag === 22 || n.stateNode !== null || (n.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), n.sibling;
  }
  function ls(l, n, u, c, r) {
    var s = hi();
    return s = s === null ? null : { parent: il._currentValue, pool: s }, n.memoizedState = {
      baseLanes: u,
      cachePool: s
    }, l !== null && Ya(n, null), hy(), Lr(n), l !== null && cn(l, n, c, !0), n.childLanes = r, null;
  }
  function Zl(l, n) {
    return n = Ti(
      { mode: n.mode, children: n.children },
      l.mode
    ), n.ref = l.ref, l.child = n, n.return = l, n;
  }
  function Xy(l, n, u) {
    return Jc(n, l.child, null, u), l = Zl(n, n.pendingProps), l.flags |= 2, ua(n), n.memoizedState = null, l;
  }
  function Ga(l, n, u) {
    var c = n.pendingProps, r = (n.flags & 128) !== 0;
    if (n.flags &= -129, l === null) {
      if (ut) {
        if (c.mode === "hidden")
          return l = Zl(n, c), n.lanes = 536870912, ts(null, l);
        if (Qr(n), (l = qt) ? (l = Je(
          l,
          xa
        ), l = l !== null && l.data === "&" ? l : null, l !== null && (n.memoizedState = {
          dehydrated: l,
          treeContext: Qn !== null ? { id: un, overflow: Ba } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, u = Dr(l), u.return = n, n.child = u, gl = n, qt = null)) : l = null, l === null) throw pa(n);
        return n.lanes = 536870912, null;
      }
      return Zl(n, c);
    }
    var s = l.memoizedState;
    if (s !== null) {
      var m = s.dehydrated;
      if (Qr(n), r)
        if (n.flags & 256)
          n.flags &= -257, n = Xy(
            l,
            n,
            u
          );
        else if (n.memoizedState !== null)
          n.child = l.child, n.flags |= 128, n = null;
        else throw Error(B(558));
      else if (hl || cn(l, n, u, !1), r = (u & l.childLanes) !== 0, hl || r) {
        if (c = Ht, c !== null && (m = cu(c, u), m !== 0 && m !== s.retryLane))
          throw s.retryLane = m, ta(l, m), Va(c, l, m), Yy;
        bh(), n = Xy(
          l,
          n,
          u
        );
      } else
        l = s.treeContext, qt = $l(m.nextSibling), gl = n, ut = !0, Tu = null, xa = !1, l !== null && iy(n, l), n = Zl(n, c), n.flags |= 4096;
      return n;
    }
    return l = ln(l.child, {
      mode: c.mode,
      children: c.children
    }), l.ref = n.ref, n.child = l, l.return = n, l;
  }
  function as(l, n) {
    var u = n.ref;
    if (u === null)
      l !== null && l.ref !== null && (n.flags |= 4194816);
    else {
      if (typeof u != "function" && typeof u != "object")
        throw Error(B(284));
      (l === null || l.ref !== u) && (n.flags |= 4194816);
    }
  }
  function On(l, n, u, c, r) {
    return _u(n), u = Si(
      l,
      n,
      u,
      c,
      void 0,
      r
    ), c = yy(), l !== null && !hl ? (Zd(l, n, r), Bu(l, n, r)) : (ut && c && Ud(n), n.flags |= 1, Cl(l, n, u, r), n.child);
  }
  function Qy(l, n, u, c, r, s) {
    return _u(n), n.updateQueue = null, u = Vd(
      n,
      c,
      u,
      r
    ), Ld(l), c = yy(), l !== null && !hl ? (Zd(l, n, s), Bu(l, n, s)) : (ut && c && Ud(n), n.flags |= 1, Cl(l, n, u, s), n.child);
  }
  function cc(l, n, u, c, r) {
    if (_u(n), n.stateNode === null) {
      var s = wc, m = u.contextType;
      typeof m == "object" && m !== null && (s = be(m)), s = new u(c, s), n.memoizedState = s.state !== null && s.state !== void 0 ? s.state : null, s.updater = eo, n.stateNode = s, s._reactInternals = n, s = n.stateNode, s.props = c, s.state = n.memoizedState, s.refs = {}, Gd(n), m = u.contextType, s.context = typeof m == "object" && m !== null ? be(m) : wc, s.state = n.memoizedState, m = u.getDerivedStateFromProps, typeof m == "function" && (Hy(
        n,
        u,
        m,
        c
      ), s.state = n.memoizedState), typeof u.getDerivedStateFromProps == "function" || typeof s.getSnapshotBeforeUpdate == "function" || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (m = s.state, typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount(), m !== s.state && eo.enqueueReplaceState(s, s.state, null), uc(n, c, s, r), Gr(), s.state = n.memoizedState), typeof s.componentDidMount == "function" && (n.flags |= 4194308), c = !0;
    } else if (l === null) {
      s = n.stateNode;
      var g = n.memoizedProps, T = to(u, g);
      s.props = T;
      var N = s.context, Z = u.contextType;
      m = wc, typeof Z == "object" && Z !== null && (m = be(Z));
      var W = u.getDerivedStateFromProps;
      Z = typeof W == "function" || typeof s.getSnapshotBeforeUpdate == "function", g = n.pendingProps !== g, Z || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (g || N !== m) && Ny(
        n,
        s,
        c,
        m
      ), mi = !1;
      var x = n.memoizedState;
      s.state = x, uc(n, c, s, r), Gr(), N = n.memoizedState, g || x !== N || mi ? (typeof W == "function" && (Hy(
        n,
        u,
        W,
        c
      ), N = n.memoizedState), (T = mi || Kn(
        n,
        u,
        T,
        c,
        x,
        N,
        m
      )) ? (Z || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = c, n.memoizedState = N), s.props = c, s.state = N, s.context = m, c = T) : (typeof s.componentDidMount == "function" && (n.flags |= 4194308), c = !1);
    } else {
      s = n.stateNode, qr(l, n), m = n.memoizedProps, Z = to(u, m), s.props = Z, W = n.pendingProps, x = s.context, N = u.contextType, T = wc, typeof N == "object" && N !== null && (T = be(N)), g = u.getDerivedStateFromProps, (N = typeof g == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (m !== W || x !== T) && Ny(
        n,
        s,
        c,
        T
      ), mi = !1, x = n.memoizedState, s.state = x, uc(n, c, s, r), Gr();
      var G = n.memoizedState;
      m !== W || x !== G || mi || l !== null && l.dependencies !== null && aa(l.dependencies) ? (typeof g == "function" && (Hy(
        n,
        u,
        g,
        c
      ), G = n.memoizedState), (Z = mi || Kn(
        n,
        u,
        Z,
        c,
        x,
        G,
        T
      ) || l !== null && l.dependencies !== null && aa(l.dependencies)) ? (N || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(c, G, T), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(
        c,
        G,
        T
      )), typeof s.componentDidUpdate == "function" && (n.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || m === l.memoizedProps && x === l.memoizedState || (n.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || m === l.memoizedProps && x === l.memoizedState || (n.flags |= 1024), n.memoizedProps = c, n.memoizedState = G), s.props = c, s.state = G, s.context = T, c = Z) : (typeof s.componentDidUpdate != "function" || m === l.memoizedProps && x === l.memoizedState || (n.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || m === l.memoizedProps && x === l.memoizedState || (n.flags |= 1024), c = !1);
    }
    return s = c, as(l, n), c = (n.flags & 128) !== 0, s || c ? (s = n.stateNode, u = c && typeof u.getDerivedStateFromError != "function" ? null : s.render(), n.flags |= 1, l !== null && c ? (n.child = Jc(
      n,
      l.child,
      null,
      r
    ), n.child = Jc(
      n,
      null,
      u,
      r
    )) : Cl(l, n, u, r), n.memoizedState = s.state, l = n.child) : l = Bu(
      l,
      n,
      r
    ), l;
  }
  function Ly(l, n, u, c) {
    return Ln(), n.flags |= 256, Cl(l, n, u, c), n.child;
  }
  var zn = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function ns(l) {
    return { baseLanes: l, cachePool: qd() };
  }
  function us(l, n, u) {
    return l = l !== null ? l.childLanes & ~u : 0, n && (l |= Xa), l;
  }
  function _n(l, n, u) {
    var c = n.pendingProps, r = !1, s = (n.flags & 128) !== 0, m;
    if ((m = s) || (m = l !== null && l.memoizedState === null ? !1 : (el.current & 2) !== 0), m && (r = !0, n.flags &= -129), m = (n.flags & 32) !== 0, n.flags &= -33, l === null) {
      if (ut) {
        if (r ? vi(n) : Ru(), (l = qt) ? (l = Je(
          l,
          xa
        ), l = l !== null && l.data !== "&" ? l : null, l !== null && (n.memoizedState = {
          dehydrated: l,
          treeContext: Qn !== null ? { id: un, overflow: Ba } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, u = Dr(l), u.return = n, n.child = u, gl = n, qt = null)) : l = null, l === null) throw pa(n);
        return Un(l) ? n.lanes = 32 : n.lanes = 536870912, null;
      }
      var g = c.children;
      return c = c.fallback, r ? (Ru(), r = n.mode, g = Ti(
        { mode: "hidden", children: g },
        r
      ), c = Xc(
        c,
        r,
        u,
        null
      ), g.return = n, c.return = n, g.sibling = c, n.child = g, c = n.child, c.memoizedState = ns(u), c.childLanes = us(
        l,
        m,
        u
      ), n.memoizedState = zn, ts(null, c)) : (vi(n), fh(n, g));
    }
    var T = l.memoizedState;
    if (T !== null && (g = T.dehydrated, g !== null)) {
      if (s)
        n.flags & 256 ? (vi(n), n.flags &= -257, n = rh(
          l,
          n,
          u
        )) : n.memoizedState !== null ? (Ru(), n.child = l.child, n.flags |= 128, n = null) : (Ru(), g = c.fallback, r = n.mode, c = Ti(
          { mode: "visible", children: c.children },
          r
        ), g = Xc(
          g,
          r,
          u,
          null
        ), g.flags |= 2, c.return = n, g.return = n, c.sibling = g, n.child = c, Jc(
          n,
          l.child,
          null,
          u
        ), c = n.child, c.memoizedState = ns(u), c.childLanes = us(
          l,
          m,
          u
        ), n.memoizedState = zn, n = ts(null, c));
      else if (vi(n), Un(g)) {
        if (m = g.nextSibling && g.nextSibling.dataset, m) var N = m.dgst;
        m = N, c = Error(B(419)), c.stack = "", c.digest = m, Ur({ value: c, source: null, stack: null }), n = rh(
          l,
          n,
          u
        );
      } else if (hl || cn(l, n, u, !1), m = (u & l.childLanes) !== 0, hl || m) {
        if (m = Ht, m !== null && (c = cu(m, u), c !== 0 && c !== T.retryLane))
          throw T.retryLane = c, ta(l, c), Va(m, l, c), Yy;
        Op(g) || bh(), n = rh(
          l,
          n,
          u
        );
      } else
        Op(g) ? (n.flags |= 192, n.child = l.child, n = null) : (l = T.treeContext, qt = $l(
          g.nextSibling
        ), gl = n, ut = !0, Tu = null, xa = !1, l !== null && iy(n, l), n = fh(
          n,
          c.children
        ), n.flags |= 4096);
      return n;
    }
    return r ? (Ru(), g = c.fallback, r = n.mode, T = l.child, N = T.sibling, c = ln(T, {
      mode: "hidden",
      children: c.children
    }), c.subtreeFlags = T.subtreeFlags & 65011712, N !== null ? g = ln(
      N,
      g
    ) : (g = Xc(
      g,
      r,
      u,
      null
    ), g.flags |= 2), g.return = n, c.return = n, c.sibling = g, n.child = c, ts(null, c), c = n.child, g = l.child.memoizedState, g === null ? g = ns(u) : (r = g.cachePool, r !== null ? (T = il._currentValue, r = r.parent !== T ? { parent: T, pool: T } : r) : r = qd(), g = {
      baseLanes: g.baseLanes | u,
      cachePool: r
    }), c.memoizedState = g, c.childLanes = us(
      l,
      m,
      u
    ), n.memoizedState = zn, ts(l.child, c)) : (vi(n), u = l.child, l = u.sibling, u = ln(u, {
      mode: "visible",
      children: c.children
    }), u.return = n, u.sibling = null, l !== null && (m = n.deletions, m === null ? (n.deletions = [l], n.flags |= 16) : m.push(l)), n.child = u, n.memoizedState = null, u);
  }
  function fh(l, n) {
    return n = Ti(
      { mode: "visible", children: n },
      l.mode
    ), n.return = l, l.child = n;
  }
  function Ti(l, n) {
    return l = Ha(22, l, null, n), l.lanes = 0, l;
  }
  function rh(l, n, u) {
    return Jc(n, l.child, null, u), l = fh(
      n,
      n.pendingProps.children
    ), l.flags |= 2, n.memoizedState = null, l;
  }
  function df(l, n, u) {
    l.lanes |= n;
    var c = l.alternate;
    c !== null && (c.lanes |= n), Hr(l.return, n, u);
  }
  function oc(l, n, u, c, r, s) {
    var m = l.memoizedState;
    m === null ? l.memoizedState = {
      isBackwards: n,
      rendering: null,
      renderingStartTime: 0,
      last: c,
      tail: u,
      tailMode: r,
      treeForkCount: s
    } : (m.isBackwards = n, m.rendering = null, m.renderingStartTime = 0, m.last = c, m.tail = u, m.tailMode = r, m.treeForkCount = s);
  }
  function Vy(l, n, u) {
    var c = n.pendingProps, r = c.revealOrder, s = c.tail;
    c = c.children;
    var m = el.current, g = (m & 2) !== 0;
    if (g ? (m = m & 1 | 2, n.flags |= 128) : m &= 1, $(el, m), Cl(l, n, c, u), c = ut ? Ko : 0, !g && l !== null && (l.flags & 128) !== 0)
      e: for (l = n.child; l !== null; ) {
        if (l.tag === 13)
          l.memoizedState !== null && df(l, u, n);
        else if (l.tag === 19)
          df(l, u, n);
        else if (l.child !== null) {
          l.child.return = l, l = l.child;
          continue;
        }
        if (l === n) break e;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === n)
            break e;
          l = l.return;
        }
        l.sibling.return = l.return, l = l.sibling;
      }
    switch (r) {
      case "forwards":
        for (u = n.child, r = null; u !== null; )
          l = u.alternate, l !== null && $c(l) === null && (r = u), u = u.sibling;
        u = r, u === null ? (r = n.child, n.child = null) : (r = u.sibling, u.sibling = null), oc(
          n,
          !1,
          r,
          u,
          s,
          c
        );
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (u = null, r = n.child, n.child = null; r !== null; ) {
          if (l = r.alternate, l !== null && $c(l) === null) {
            n.child = r;
            break;
          }
          l = r.sibling, r.sibling = u, u = r, r = l;
        }
        oc(
          n,
          !0,
          u,
          null,
          s,
          c
        );
        break;
      case "together":
        oc(
          n,
          !1,
          null,
          null,
          void 0,
          c
        );
        break;
      default:
        n.memoizedState = null;
    }
    return n.child;
  }
  function Bu(l, n, u) {
    if (l !== null && (n.dependencies = l.dependencies), Mn |= n.lanes, (u & n.childLanes) === 0)
      if (l !== null) {
        if (cn(
          l,
          n,
          u,
          !1
        ), (u & n.childLanes) === 0)
          return null;
      } else return null;
    if (l !== null && n.child !== l.child)
      throw Error(B(153));
    if (n.child !== null) {
      for (l = n.child, u = ln(l, l.pendingProps), n.child = u, u.return = n; l.sibling !== null; )
        l = l.sibling, u = u.sibling = ln(l, l.pendingProps), u.return = n;
      u.sibling = null;
    }
    return n.child;
  }
  function lo(l, n) {
    return (l.lanes & n) !== 0 ? !0 : (l = l.dependencies, !!(l !== null && aa(l)));
  }
  function cv(l, n, u) {
    switch (n.tag) {
      case 3:
        Fe(n, n.stateNode.containerInfo), zu(n, il, l.memoizedState.cache), Ln();
        break;
      case 27:
      case 5:
        ea(n);
        break;
      case 4:
        Fe(n, n.stateNode.containerInfo);
        break;
      case 10:
        zu(
          n,
          n.type,
          n.memoizedProps.value
        );
        break;
      case 31:
        if (n.memoizedState !== null)
          return n.flags |= 128, Qr(n), null;
        break;
      case 13:
        var c = n.memoizedState;
        if (c !== null)
          return c.dehydrated !== null ? (vi(n), n.flags |= 128, null) : (u & n.child.childLanes) !== 0 ? _n(l, n, u) : (vi(n), l = Bu(
            l,
            n,
            u
          ), l !== null ? l.sibling : null);
        vi(n);
        break;
      case 19:
        var r = (l.flags & 128) !== 0;
        if (c = (u & n.childLanes) !== 0, c || (cn(
          l,
          n,
          u,
          !1
        ), c = (u & n.childLanes) !== 0), r) {
          if (c)
            return Vy(
              l,
              n,
              u
            );
          n.flags |= 128;
        }
        if (r = n.memoizedState, r !== null && (r.rendering = null, r.tail = null, r.lastEffect = null), $(el, el.current), c) break;
        return null;
      case 22:
        return n.lanes = 0, wy(
          l,
          n,
          u,
          n.pendingProps
        );
      case 24:
        zu(n, il, l.memoizedState.cache);
    }
    return Bu(l, n, u);
  }
  function is(l, n, u) {
    if (l !== null)
      if (l.memoizedProps !== n.pendingProps)
        hl = !0;
      else {
        if (!lo(l, u) && (n.flags & 128) === 0)
          return hl = !1, cv(
            l,
            n,
            u
          );
        hl = (l.flags & 131072) !== 0;
      }
    else
      hl = !1, ut && (n.flags & 1048576) !== 0 && Mr(n, Ko, n.index);
    switch (n.lanes = 0, n.tag) {
      case 16:
        e: {
          var c = n.pendingProps;
          if (l = lc(n.elementType), n.type = l, typeof l == "function")
            Tn(l) ? (c = to(l, c), n.tag = 1, n = cc(
              null,
              n,
              l,
              c,
              u
            )) : (n.tag = 0, n = On(
              null,
              n,
              l,
              c,
              u
            ));
          else {
            if (l != null) {
              var r = l.$$typeof;
              if (r === Lt) {
                n.tag = 11, n = Nu(
                  null,
                  n,
                  l,
                  c,
                  u
                );
                break e;
              } else if (r === Xe) {
                n.tag = 14, n = qy(
                  null,
                  n,
                  l,
                  c,
                  u
                );
                break e;
              }
            }
            throw n = Ue(l) || l, Error(B(306, n, ""));
          }
        }
        return n;
      case 0:
        return On(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 1:
        return c = n.type, r = to(
          c,
          n.pendingProps
        ), cc(
          l,
          n,
          c,
          r,
          u
        );
      case 3:
        e: {
          if (Fe(
            n,
            n.stateNode.containerInfo
          ), l === null) throw Error(B(387));
          c = n.pendingProps;
          var s = n.memoizedState;
          r = s.element, qr(l, n), uc(n, c, null, u);
          var m = n.memoizedState;
          if (c = m.cache, zu(n, il, c), c !== s.cache && Bd(
            n,
            [il],
            u,
            !0
          ), Gr(), c = m.element, s.isDehydrated)
            if (s = {
              element: c,
              isDehydrated: !1,
              cache: m.cache
            }, n.updateQueue.baseState = s, n.memoizedState = s, n.flags & 256) {
              n = Ly(
                l,
                n,
                c,
                u
              );
              break e;
            } else if (c !== r) {
              r = an(
                Error(B(424)),
                n
              ), Ur(r), n = Ly(
                l,
                n,
                c,
                u
              );
              break e;
            } else
              for (l = n.stateNode.containerInfo, l.nodeType === 9 ? l = l.body : l = l.nodeName === "HTML" ? l.ownerDocument.body : l, qt = $l(l.firstChild), gl = n, ut = !0, Tu = null, xa = !0, u = dy(
                n,
                null,
                c,
                u
              ), n.child = u; u; )
                u.flags = u.flags & -3 | 4096, u = u.sibling;
          else {
            if (Ln(), c === r) {
              n = Bu(
                l,
                n,
                u
              );
              break e;
            }
            Cl(l, n, c, u);
          }
          n = n.child;
        }
        return n;
      case 26:
        return as(l, n), l === null ? (u = Mi(
          n.type,
          null,
          n.pendingProps,
          null
        )) ? n.memoizedState = u : ut || (u = n.type, l = n.pendingProps, c = Rs(
          ze.current
        ).createElement(u), c[vl] = n, c[Zt] = l, Kl(c, u, l), Tl(c), n.stateNode = c) : n.memoizedState = Mi(
          n.type,
          l.memoizedProps,
          n.pendingProps,
          l.memoizedState
        ), null;
      case 27:
        return ea(n), l === null && ut && (c = n.stateNode = Fn(
          n.type,
          n.pendingProps,
          ze.current
        ), gl = n, xa = !0, r = qt, Lu(n.type) ? (_f = r, qt = $l(c.firstChild)) : qt = r), Cl(
          l,
          n,
          n.pendingProps.children,
          u
        ), as(l, n), l === null && (n.flags |= 4194304), n.child;
      case 5:
        return l === null && ut && ((r = c = qt) && (c = Ap(
          c,
          n.type,
          n.pendingProps,
          xa
        ), c !== null ? (n.stateNode = c, gl = n, qt = $l(c.firstChild), xa = !1, r = !0) : r = !1), r || pa(n)), ea(n), r = n.type, s = n.pendingProps, m = l !== null ? l.memoizedProps : null, c = s.children, xh(r, s) ? c = null : m !== null && xh(r, m) && (n.flags |= 32), n.memoizedState !== null && (r = Si(
          l,
          n,
          Ig,
          null,
          null,
          u
        ), rl._currentValue = r), as(l, n), Cl(l, n, c, u), n.child;
      case 6:
        return l === null && ut && ((l = u = qt) && (u = aS(
          u,
          n.pendingProps,
          xa
        ), u !== null ? (n.stateNode = u, gl = n, qt = null, l = !0) : l = !1), l || pa(n)), null;
      case 13:
        return _n(l, n, u);
      case 4:
        return Fe(
          n,
          n.stateNode.containerInfo
        ), c = n.pendingProps, l === null ? n.child = Jc(
          n,
          null,
          c,
          u
        ) : Cl(l, n, c, u), n.child;
      case 11:
        return Nu(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 7:
        return Cl(
          l,
          n,
          n.pendingProps,
          u
        ), n.child;
      case 8:
        return Cl(
          l,
          n,
          n.pendingProps.children,
          u
        ), n.child;
      case 12:
        return Cl(
          l,
          n,
          n.pendingProps.children,
          u
        ), n.child;
      case 10:
        return c = n.pendingProps, zu(n, n.type, c.value), Cl(l, n, c.children, u), n.child;
      case 9:
        return r = n.type._context, c = n.pendingProps.children, _u(n), r = be(r), c = c(r), n.flags |= 1, Cl(l, n, c, u), n.child;
      case 14:
        return qy(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 15:
        return Gy(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 19:
        return Vy(l, n, u);
      case 31:
        return Ga(l, n, u);
      case 22:
        return wy(
          l,
          n,
          u,
          n.pendingProps
        );
      case 24:
        return _u(n), c = be(il), l === null ? (r = hi(), r === null && (r = Ht, s = jd(), r.pooledCache = s, s.refCount++, s !== null && (r.pooledCacheLanes |= u), r = s), n.memoizedState = { parent: c, cache: r }, Gd(n), zu(n, il, r)) : ((l.lanes & u) !== 0 && (qr(l, n), uc(n, null, null, u), Gr()), r = l.memoizedState, s = n.memoizedState, r.parent !== c ? (r = { parent: c, cache: c }, n.memoizedState = r, n.lanes === 0 && (n.memoizedState = n.updateQueue.baseState = r), zu(n, il, c)) : (c = s.cache, zu(n, il, c), c !== r.cache && Bd(
          n,
          [il],
          u,
          !0
        ))), Cl(
          l,
          n,
          n.pendingProps.children,
          u
        ), n.child;
      case 29:
        throw n.pendingProps;
    }
    throw Error(B(156, n.tag));
  }
  function xu(l) {
    l.flags |= 4;
  }
  function sh(l, n, u, c, r) {
    if ((n = (l.mode & 32) !== 0) && (n = !1), n) {
      if (l.flags |= 16777216, (r & 335544128) === r)
        if (l.stateNode.complete) l.flags |= 8192;
        else if (vf()) l.flags |= 8192;
        else
          throw ac = Fo, xr;
    } else l.flags &= -16777217;
  }
  function ov(l, n) {
    if (n.type !== "stylesheet" || (n.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (l.flags |= 16777216, !Lh(n))
      if (vf()) l.flags |= 8192;
      else
        throw ac = Fo, xr;
  }
  function cs(l, n) {
    n !== null && (l.flags |= 4), l.flags & 16384 && (n = l.tag !== 22 ? Ye() : 536870912, l.lanes |= n, sc |= n);
  }
  function Jl(l, n) {
    if (!ut)
      switch (l.tailMode) {
        case "hidden":
          n = l.tail;
          for (var u = null; n !== null; )
            n.alternate !== null && (u = n), n = n.sibling;
          u === null ? l.tail = null : u.sibling = null;
          break;
        case "collapsed":
          u = l.tail;
          for (var c = null; u !== null; )
            u.alternate !== null && (c = u), u = u.sibling;
          c === null ? n || l.tail === null ? l.tail = null : l.tail.sibling = null : c.sibling = null;
      }
  }
  function Gt(l) {
    var n = l.alternate !== null && l.alternate.child === l.child, u = 0, c = 0;
    if (n)
      for (var r = l.child; r !== null; )
        u |= r.lanes | r.childLanes, c |= r.subtreeFlags & 65011712, c |= r.flags & 65011712, r.return = l, r = r.sibling;
    else
      for (r = l.child; r !== null; )
        u |= r.lanes | r.childLanes, c |= r.subtreeFlags, c |= r.flags, r.return = l, r = r.sibling;
    return l.subtreeFlags |= c, l.childLanes = u, n;
  }
  function ll(l, n, u) {
    var c = n.pendingProps;
    switch ($o(n), n.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Gt(n), null;
      case 1:
        return Gt(n), null;
      case 3:
        return u = n.stateNode, c = null, l !== null && (c = l.memoizedState.cache), n.memoizedState.cache !== c && (n.flags |= 2048), la(il), Et(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (l === null || l.child === null) && (Ou(n) ? xu(n) : l === null || l.memoizedState.isDehydrated && (n.flags & 256) === 0 || (n.flags |= 1024, Hd())), Gt(n), null;
      case 26:
        var r = n.type, s = n.memoizedState;
        return l === null ? (xu(n), s !== null ? (Gt(n), ov(n, s)) : (Gt(n), sh(
          n,
          r,
          null,
          c,
          u
        ))) : s ? s !== l.memoizedState ? (xu(n), Gt(n), ov(n, s)) : (Gt(n), n.flags &= -16777217) : (l = l.memoizedProps, l !== c && xu(n), Gt(n), sh(
          n,
          r,
          l,
          c,
          u
        )), null;
      case 27:
        if (vn(n), u = ze.current, r = n.type, l !== null && n.stateNode != null)
          l.memoizedProps !== c && xu(n);
        else {
          if (!c) {
            if (n.stateNode === null)
              throw Error(B(166));
            return Gt(n), null;
          }
          l = ee.current, Ou(n) ? ko(n) : (l = Fn(r, c, u), n.stateNode = l, xu(n));
        }
        return Gt(n), null;
      case 5:
        if (vn(n), r = n.type, l !== null && n.stateNode != null)
          l.memoizedProps !== c && xu(n);
        else {
          if (!c) {
            if (n.stateNode === null)
              throw Error(B(166));
            return Gt(n), null;
          }
          if (s = ee.current, Ou(n))
            ko(n);
          else {
            var m = Rs(
              ze.current
            );
            switch (s) {
              case 1:
                s = m.createElementNS(
                  "http://www.w3.org/2000/svg",
                  r
                );
                break;
              case 2:
                s = m.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  r
                );
                break;
              default:
                switch (r) {
                  case "svg":
                    s = m.createElementNS(
                      "http://www.w3.org/2000/svg",
                      r
                    );
                    break;
                  case "math":
                    s = m.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      r
                    );
                    break;
                  case "script":
                    s = m.createElement("div"), s.innerHTML = "<script><\/script>", s = s.removeChild(
                      s.firstChild
                    );
                    break;
                  case "select":
                    s = typeof c.is == "string" ? m.createElement("select", {
                      is: c.is
                    }) : m.createElement("select"), c.multiple ? s.multiple = !0 : c.size && (s.size = c.size);
                    break;
                  default:
                    s = typeof c.is == "string" ? m.createElement(r, { is: c.is }) : m.createElement(r);
                }
            }
            s[vl] = n, s[Zt] = c;
            e: for (m = n.child; m !== null; ) {
              if (m.tag === 5 || m.tag === 6)
                s.appendChild(m.stateNode);
              else if (m.tag !== 4 && m.tag !== 27 && m.child !== null) {
                m.child.return = m, m = m.child;
                continue;
              }
              if (m === n) break e;
              for (; m.sibling === null; ) {
                if (m.return === null || m.return === n)
                  break e;
                m = m.return;
              }
              m.sibling.return = m.return, m = m.sibling;
            }
            n.stateNode = s;
            e: switch (Kl(s, r, c), r) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                c = !!c.autoFocus;
                break e;
              case "img":
                c = !0;
                break e;
              default:
                c = !1;
            }
            c && xu(n);
          }
        }
        return Gt(n), sh(
          n,
          n.type,
          l === null ? null : l.memoizedProps,
          n.pendingProps,
          u
        ), null;
      case 6:
        if (l && n.stateNode != null)
          l.memoizedProps !== c && xu(n);
        else {
          if (typeof c != "string" && n.stateNode === null)
            throw Error(B(166));
          if (l = ze.current, Ou(n)) {
            if (l = n.stateNode, u = n.memoizedProps, c = null, r = gl, r !== null)
              switch (r.tag) {
                case 27:
                case 5:
                  c = r.memoizedProps;
              }
            l[vl] = n, l = !!(l.nodeValue === u || c !== null && c.suppressHydrationWarning === !0 || gp(l.nodeValue, u)), l || pa(n, !0);
          } else
            l = Rs(l).createTextNode(
              c
            ), l[vl] = n, n.stateNode = l;
        }
        return Gt(n), null;
      case 31:
        if (u = n.memoizedState, l === null || l.memoizedState !== null) {
          if (c = Ou(n), u !== null) {
            if (l === null) {
              if (!c) throw Error(B(318));
              if (l = n.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(B(557));
              l[vl] = n;
            } else
              Ln(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;
            Gt(n), l = !1;
          } else
            u = Hd(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = u), l = !0;
          if (!l)
            return n.flags & 256 ? (ua(n), n) : (ua(n), null);
          if ((n.flags & 128) !== 0)
            throw Error(B(558));
        }
        return Gt(n), null;
      case 13:
        if (c = n.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
          if (r = Ou(n), c !== null && c.dehydrated !== null) {
            if (l === null) {
              if (!r) throw Error(B(318));
              if (r = n.memoizedState, r = r !== null ? r.dehydrated : null, !r) throw Error(B(317));
              r[vl] = n;
            } else
              Ln(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;
            Gt(n), r = !1;
          } else
            r = Hd(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = r), r = !0;
          if (!r)
            return n.flags & 256 ? (ua(n), n) : (ua(n), null);
        }
        return ua(n), (n.flags & 128) !== 0 ? (n.lanes = u, n) : (u = c !== null, l = l !== null && l.memoizedState !== null, u && (c = n.child, r = null, c.alternate !== null && c.alternate.memoizedState !== null && c.alternate.memoizedState.cachePool !== null && (r = c.alternate.memoizedState.cachePool.pool), s = null, c.memoizedState !== null && c.memoizedState.cachePool !== null && (s = c.memoizedState.cachePool.pool), s !== r && (c.flags |= 2048)), u !== l && u && (n.child.flags |= 8192), cs(n, n.updateQueue), Gt(n), null);
      case 4:
        return Et(), l === null && yp(n.stateNode.containerInfo), Gt(n), null;
      case 10:
        return la(n.type), Gt(n), null;
      case 19:
        if (A(el), c = n.memoizedState, c === null) return Gt(n), null;
        if (r = (n.flags & 128) !== 0, s = c.rendering, s === null)
          if (r) Jl(c, !1);
          else {
            if (Wt !== 0 || l !== null && (l.flags & 128) !== 0)
              for (l = n.child; l !== null; ) {
                if (s = $c(l), s !== null) {
                  for (n.flags |= 128, Jl(c, !1), l = s.updateQueue, n.updateQueue = l, cs(n, l), n.subtreeFlags = 0, l = u, u = n.child; u !== null; )
                    F0(u, l), u = u.sibling;
                  return $(
                    el,
                    el.current & 1 | 2
                  ), ut && Eu(n, c.treeForkCount), n.child;
                }
                l = l.sibling;
              }
            c.tail !== null && El() > ps && (n.flags |= 128, r = !0, Jl(c, !1), n.lanes = 4194304);
          }
        else {
          if (!r)
            if (l = $c(s), l !== null) {
              if (n.flags |= 128, r = !0, l = l.updateQueue, n.updateQueue = l, cs(n, l), Jl(c, !0), c.tail === null && c.tailMode === "hidden" && !s.alternate && !ut)
                return Gt(n), null;
            } else
              2 * El() - c.renderingStartTime > ps && u !== 536870912 && (n.flags |= 128, r = !0, Jl(c, !1), n.lanes = 4194304);
          c.isBackwards ? (s.sibling = n.child, n.child = s) : (l = c.last, l !== null ? l.sibling = s : n.child = s, c.last = s);
        }
        return c.tail !== null ? (l = c.tail, c.rendering = l, c.tail = l.sibling, c.renderingStartTime = El(), l.sibling = null, u = el.current, $(
          el,
          r ? u & 1 | 2 : u & 1
        ), ut && Eu(n, c.treeForkCount), l) : (Gt(n), null);
      case 22:
      case 23:
        return ua(n), Xr(), c = n.memoizedState !== null, l !== null ? l.memoizedState !== null !== c && (n.flags |= 8192) : c && (n.flags |= 8192), c ? (u & 536870912) !== 0 && (n.flags & 128) === 0 && (Gt(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : Gt(n), u = n.updateQueue, u !== null && cs(n, u.retryQueue), u = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), c = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (c = n.memoizedState.cachePool.pool), c !== u && (n.flags |= 2048), l !== null && A(ja), null;
      case 24:
        return u = null, l !== null && (u = l.memoizedState.cache), n.memoizedState.cache !== u && (n.flags |= 2048), la(il), Gt(n), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(B(156, n.tag));
  }
  function fv(l, n) {
    switch ($o(n), n.tag) {
      case 1:
        return l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 3:
        return la(il), Et(), l = n.flags, (l & 65536) !== 0 && (l & 128) === 0 ? (n.flags = l & -65537 | 128, n) : null;
      case 26:
      case 27:
      case 5:
        return vn(n), null;
      case 31:
        if (n.memoizedState !== null) {
          if (ua(n), n.alternate === null)
            throw Error(B(340));
          Ln();
        }
        return l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 13:
        if (ua(n), l = n.memoizedState, l !== null && l.dehydrated !== null) {
          if (n.alternate === null)
            throw Error(B(340));
          Ln();
        }
        return l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 19:
        return A(el), null;
      case 4:
        return Et(), null;
      case 10:
        return la(n.type), null;
      case 22:
      case 23:
        return ua(n), Xr(), l !== null && A(ja), l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 24:
        return la(il), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Zy(l, n) {
    switch ($o(n), n.tag) {
      case 3:
        la(il), Et();
        break;
      case 26:
      case 27:
      case 5:
        vn(n);
        break;
      case 4:
        Et();
        break;
      case 31:
        n.memoizedState !== null && ua(n);
        break;
      case 13:
        ua(n);
        break;
      case 19:
        A(el);
        break;
      case 10:
        la(n.type);
        break;
      case 22:
      case 23:
        ua(n), Xr(), l !== null && A(ja);
        break;
      case 24:
        la(il);
    }
  }
  function os(l, n) {
    try {
      var u = n.updateQueue, c = u !== null ? u.lastEffect : null;
      if (c !== null) {
        var r = c.next;
        u = r;
        do {
          if ((u.tag & l) === l) {
            c = void 0;
            var s = u.create, m = u.inst;
            c = s(), m.destroy = c;
          }
          u = u.next;
        } while (u !== r);
      }
    } catch (g) {
      Mt(n, n.return, g);
    }
  }
  function ga(l, n, u) {
    try {
      var c = n.updateQueue, r = c !== null ? c.lastEffect : null;
      if (r !== null) {
        var s = r.next;
        c = s;
        do {
          if ((c.tag & l) === l) {
            var m = c.inst, g = m.destroy;
            if (g !== void 0) {
              m.destroy = void 0, r = n;
              var T = u, N = g;
              try {
                N();
              } catch (Z) {
                Mt(
                  r,
                  T,
                  Z
                );
              }
            }
          }
          c = c.next;
        } while (c !== s);
      }
    } catch (Z) {
      Mt(n, n.return, Z);
    }
  }
  function ao(l) {
    var n = l.updateQueue;
    if (n !== null) {
      var u = l.stateNode;
      try {
        Xd(n, u);
      } catch (c) {
        Mt(l, l.return, c);
      }
    }
  }
  function dh(l, n, u) {
    u.props = to(
      l.type,
      l.memoizedProps
    ), u.state = l.memoizedState;
    try {
      u.componentWillUnmount();
    } catch (c) {
      Mt(l, n, c);
    }
  }
  function $n(l, n) {
    try {
      var u = l.ref;
      if (u !== null) {
        switch (l.tag) {
          case 26:
          case 27:
          case 5:
            var c = l.stateNode;
            break;
          case 30:
            c = l.stateNode;
            break;
          default:
            c = l.stateNode;
        }
        typeof u == "function" ? l.refCleanup = u(c) : u.current = c;
      }
    } catch (r) {
      Mt(l, n, r);
    }
  }
  function Sa(l, n) {
    var u = l.ref, c = l.refCleanup;
    if (u !== null)
      if (typeof c == "function")
        try {
          c();
        } catch (r) {
          Mt(l, n, r);
        } finally {
          l.refCleanup = null, l = l.alternate, l != null && (l.refCleanup = null);
        }
      else if (typeof u == "function")
        try {
          u(null);
        } catch (r) {
          Mt(l, n, r);
        }
      else u.current = null;
  }
  function Jy(l) {
    var n = l.type, u = l.memoizedProps, c = l.stateNode;
    try {
      e: switch (n) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          u.autoFocus && c.focus();
          break e;
        case "img":
          u.src ? c.src = u.src : u.srcSet && (c.srcset = u.srcSet);
      }
    } catch (r) {
      Mt(l, l.return, r);
    }
  }
  function hh(l, n, u) {
    try {
      var c = l.stateNode;
      lS(c, l.type, u, n), c[Zt] = n;
    } catch (r) {
      Mt(l, l.return, r);
    }
  }
  function Ky(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && Lu(l.type) || l.tag === 4;
  }
  function mh(l) {
    e: for (; ; ) {
      for (; l.sibling === null; ) {
        if (l.return === null || Ky(l.return)) return null;
        l = l.return;
      }
      for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18; ) {
        if (l.tag === 27 && Lu(l.type) || l.flags & 2 || l.child === null || l.tag === 4) continue e;
        l.child.return = l, l = l.child;
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function hf(l, n, u) {
    var c = l.tag;
    if (c === 5 || c === 6)
      l = l.stateNode, n ? (u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u).insertBefore(l, n) : (n = u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u, n.appendChild(l), u = u._reactRootContainer, u != null || n.onclick !== null || (n.onclick = wl));
    else if (c !== 4 && (c === 27 && Lu(l.type) && (u = l.stateNode, n = null), l = l.child, l !== null))
      for (hf(l, n, u), l = l.sibling; l !== null; )
        hf(l, n, u), l = l.sibling;
  }
  function no(l, n, u) {
    var c = l.tag;
    if (c === 5 || c === 6)
      l = l.stateNode, n ? u.insertBefore(l, n) : u.appendChild(l);
    else if (c !== 4 && (c === 27 && Lu(l.type) && (u = l.stateNode), l = l.child, l !== null))
      for (no(l, n, u), l = l.sibling; l !== null; )
        no(l, n, u), l = l.sibling;
  }
  function yh(l) {
    var n = l.stateNode, u = l.memoizedProps;
    try {
      for (var c = l.type, r = n.attributes; r.length; )
        n.removeAttributeNode(r[0]);
      Kl(n, c, u), n[vl] = l, n[Zt] = u;
    } catch (s) {
      Mt(l, l.return, s);
    }
  }
  var ju = !1, Sl = !1, $y = !1, ky = typeof WeakSet == "function" ? WeakSet : Set, Al = null;
  function Pg(l, n) {
    if (l = l.containerInfo, Ds = Ci, l = qc(l), si(l)) {
      if ("selectionStart" in l)
        var u = {
          start: l.selectionStart,
          end: l.selectionEnd
        };
      else
        e: {
          u = (u = l.ownerDocument) && u.defaultView || window;
          var c = u.getSelection && u.getSelection();
          if (c && c.rangeCount !== 0) {
            u = c.anchorNode;
            var r = c.anchorOffset, s = c.focusNode;
            c = c.focusOffset;
            try {
              u.nodeType, s.nodeType;
            } catch {
              u = null;
              break e;
            }
            var m = 0, g = -1, T = -1, N = 0, Z = 0, W = l, x = null;
            t: for (; ; ) {
              for (var G; W !== u || r !== 0 && W.nodeType !== 3 || (g = m + r), W !== s || c !== 0 && W.nodeType !== 3 || (T = m + c), W.nodeType === 3 && (m += W.nodeValue.length), (G = W.firstChild) !== null; )
                x = W, W = G;
              for (; ; ) {
                if (W === l) break t;
                if (x === u && ++N === r && (g = m), x === s && ++Z === c && (T = m), (G = W.nextSibling) !== null) break;
                W = x, x = W.parentNode;
              }
              W = G;
            }
            u = g === -1 || T === -1 ? null : { start: g, end: T };
          } else u = null;
        }
      u = u || { start: 0, end: 0 };
    } else u = null;
    for (Bh = { focusedElem: l, selectionRange: u }, Ci = !1, Al = n; Al !== null; )
      if (n = Al, l = n.child, (n.subtreeFlags & 1028) !== 0 && l !== null)
        l.return = n, Al = l;
      else
        for (; Al !== null; ) {
          switch (n = Al, s = n.alternate, l = n.flags, n.tag) {
            case 0:
              if ((l & 4) !== 0 && (l = n.updateQueue, l = l !== null ? l.events : null, l !== null))
                for (u = 0; u < l.length; u++)
                  r = l[u], r.ref.impl = r.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((l & 1024) !== 0 && s !== null) {
                l = void 0, u = n, r = s.memoizedProps, s = s.memoizedState, c = u.stateNode;
                try {
                  var he = to(
                    u.type,
                    r
                  );
                  l = c.getSnapshotBeforeUpdate(
                    he,
                    s
                  ), c.__reactInternalSnapshotBeforeUpdate = l;
                } catch (_e) {
                  Mt(
                    u,
                    u.return,
                    _e
                  );
                }
              }
              break;
            case 3:
              if ((l & 1024) !== 0) {
                if (l = n.stateNode.containerInfo, u = l.nodeType, u === 9)
                  fl(l);
                else if (u === 1)
                  switch (l.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      fl(l);
                      break;
                    default:
                      l.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((l & 1024) !== 0) throw Error(B(163));
          }
          if (l = n.sibling, l !== null) {
            l.return = n.return, Al = l;
            break;
          }
          Al = n.return;
        }
  }
  function uo(l, n, u) {
    var c = u.flags;
    switch (u.tag) {
      case 0:
      case 11:
      case 15:
        qu(l, u), c & 4 && os(5, u);
        break;
      case 1:
        if (qu(l, u), c & 4)
          if (l = u.stateNode, n === null)
            try {
              l.componentDidMount();
            } catch (m) {
              Mt(u, u.return, m);
            }
          else {
            var r = to(
              u.type,
              n.memoizedProps
            );
            n = n.memoizedState;
            try {
              l.componentDidUpdate(
                r,
                n,
                l.__reactInternalSnapshotBeforeUpdate
              );
            } catch (m) {
              Mt(
                u,
                u.return,
                m
              );
            }
          }
        c & 64 && ao(u), c & 512 && $n(u, u.return);
        break;
      case 3:
        if (qu(l, u), c & 64 && (l = u.updateQueue, l !== null)) {
          if (n = null, u.child !== null)
            switch (u.child.tag) {
              case 27:
              case 5:
                n = u.child.stateNode;
                break;
              case 1:
                n = u.child.stateNode;
            }
          try {
            Xd(l, n);
          } catch (m) {
            Mt(u, u.return, m);
          }
        }
        break;
      case 27:
        n === null && c & 4 && yh(u);
      case 26:
      case 5:
        qu(l, u), n === null && c & 4 && Jy(u), c & 512 && $n(u, u.return);
        break;
      case 12:
        qu(l, u);
        break;
      case 31:
        qu(l, u), c & 4 && Fy(l, u);
        break;
      case 13:
        qu(l, u), c & 4 && rv(l, u), c & 64 && (l = u.memoizedState, l !== null && (l = l.dehydrated, l !== null && (u = tS.bind(
          null,
          u
        ), zf(l, u))));
        break;
      case 22:
        if (c = u.memoizedState !== null || ju, !c) {
          n = n !== null && n.memoizedState !== null || Sl, r = ju;
          var s = Sl;
          ju = c, (Sl = n) && !s ? Ai(
            l,
            u,
            (u.subtreeFlags & 8772) !== 0
          ) : qu(l, u), ju = r, Sl = s;
        }
        break;
      case 30:
        break;
      default:
        qu(l, u);
    }
  }
  function fs(l) {
    var n = l.alternate;
    n !== null && (l.alternate = null, fs(n)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (n = l.stateNode, n !== null && Qi(n)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null;
  }
  var Jt = null, ia = !1;
  function Yu(l, n, u) {
    for (u = u.child; u !== null; )
      Wy(l, n, u), u = u.sibling;
  }
  function Wy(l, n, u) {
    if (pl && typeof pl.onCommitFiberUnmount == "function")
      try {
        pl.onCommitFiberUnmount(Gn, u);
      } catch {
      }
    switch (u.tag) {
      case 26:
        Sl || Sa(u, n), Yu(
          l,
          n,
          u
        ), u.memoizedState ? u.memoizedState.count-- : u.stateNode && (u = u.stateNode, u.parentNode.removeChild(u));
        break;
      case 27:
        Sl || Sa(u, n);
        var c = Jt, r = ia;
        Lu(u.type) && (Jt = u.stateNode, ia = !1), Yu(
          l,
          n,
          u
        ), Di(u.stateNode), Jt = c, ia = r;
        break;
      case 5:
        Sl || Sa(u, n);
      case 6:
        if (c = Jt, r = ia, Jt = null, Yu(
          l,
          n,
          u
        ), Jt = c, ia = r, Jt !== null)
          if (ia)
            try {
              (Jt.nodeType === 9 ? Jt.body : Jt.nodeName === "HTML" ? Jt.ownerDocument.body : Jt).removeChild(u.stateNode);
            } catch (s) {
              Mt(
                u,
                n,
                s
              );
            }
          else
            try {
              Jt.removeChild(u.stateNode);
            } catch (s) {
              Mt(
                u,
                n,
                s
              );
            }
        break;
      case 18:
        Jt !== null && (ia ? (l = Jt, Ms(
          l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l,
          u.stateNode
        ), Cf(l)) : Ms(Jt, u.stateNode));
        break;
      case 4:
        c = Jt, r = ia, Jt = u.stateNode.containerInfo, ia = !0, Yu(
          l,
          n,
          u
        ), Jt = c, ia = r;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        ga(2, u, n), Sl || ga(4, u, n), Yu(
          l,
          n,
          u
        );
        break;
      case 1:
        Sl || (Sa(u, n), c = u.stateNode, typeof c.componentWillUnmount == "function" && dh(
          u,
          n,
          c
        )), Yu(
          l,
          n,
          u
        );
        break;
      case 21:
        Yu(
          l,
          n,
          u
        );
        break;
      case 22:
        Sl = (c = Sl) || u.memoizedState !== null, Yu(
          l,
          n,
          u
        ), Sl = c;
        break;
      default:
        Yu(
          l,
          n,
          u
        );
    }
  }
  function Fy(l, n) {
    if (n.memoizedState === null && (l = n.alternate, l !== null && (l = l.memoizedState, l !== null))) {
      l = l.dehydrated;
      try {
        Cf(l);
      } catch (u) {
        Mt(n, n.return, u);
      }
    }
  }
  function rv(l, n) {
    if (n.memoizedState === null && (l = n.alternate, l !== null && (l = l.memoizedState, l !== null && (l = l.dehydrated, l !== null))))
      try {
        Cf(l);
      } catch (u) {
        Mt(n, n.return, u);
      }
  }
  function sv(l) {
    switch (l.tag) {
      case 31:
      case 13:
      case 19:
        var n = l.stateNode;
        return n === null && (n = l.stateNode = new ky()), n;
      case 22:
        return l = l.stateNode, n = l._retryCache, n === null && (n = l._retryCache = new ky()), n;
      default:
        throw Error(B(435, l.tag));
    }
  }
  function fc(l, n) {
    var u = sv(l);
    n.forEach(function(c) {
      if (!u.has(c)) {
        u.add(c);
        var r = on.bind(null, l, c);
        c.then(r, r);
      }
    });
  }
  function ba(l, n) {
    var u = n.deletions;
    if (u !== null)
      for (var c = 0; c < u.length; c++) {
        var r = u[c], s = l, m = n, g = m;
        e: for (; g !== null; ) {
          switch (g.tag) {
            case 27:
              if (Lu(g.type)) {
                Jt = g.stateNode, ia = !1;
                break e;
              }
              break;
            case 5:
              Jt = g.stateNode, ia = !1;
              break e;
            case 3:
            case 4:
              Jt = g.stateNode.containerInfo, ia = !0;
              break e;
          }
          g = g.return;
        }
        if (Jt === null) throw Error(B(160));
        Wy(s, m, r), Jt = null, ia = !1, s = r.alternate, s !== null && (s.return = null), r.return = null;
      }
    if (n.subtreeFlags & 13886)
      for (n = n.child; n !== null; )
        pt(n, l), n = n.sibling;
  }
  var Dn = null;
  function pt(l, n) {
    var u = l.alternate, c = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        ba(n, l), ca(l), c & 4 && (ga(3, l, l.return), os(3, l), ga(5, l, l.return));
        break;
      case 1:
        ba(n, l), ca(l), c & 512 && (Sl || u === null || Sa(u, u.return)), c & 64 && ju && (l = l.updateQueue, l !== null && (c = l.callbacks, c !== null && (u = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = u === null ? c : u.concat(c))));
        break;
      case 26:
        var r = Dn;
        if (ba(n, l), ca(l), c & 512 && (Sl || u === null || Sa(u, u.return)), c & 4) {
          var s = u !== null ? u.memoizedState : null;
          if (c = l.memoizedState, u === null)
            if (c === null)
              if (l.stateNode === null) {
                e: {
                  c = l.type, u = l.memoizedProps, r = r.ownerDocument || r;
                  t: switch (c) {
                    case "title":
                      s = r.getElementsByTagName("title")[0], (!s || s[Yo] || s[vl] || s.namespaceURI === "http://www.w3.org/2000/svg" || s.hasAttribute("itemprop")) && (s = r.createElement(c), r.head.insertBefore(
                        s,
                        r.querySelector("head > title")
                      )), Kl(s, c, u), s[vl] = l, Tl(s), c = s;
                      break e;
                    case "link":
                      var m = Qh(
                        "link",
                        "href",
                        r
                      ).get(c + (u.href || ""));
                      if (m) {
                        for (var g = 0; g < m.length; g++)
                          if (s = m[g], s.getAttribute("href") === (u.href == null || u.href === "" ? null : u.href) && s.getAttribute("rel") === (u.rel == null ? null : u.rel) && s.getAttribute("title") === (u.title == null ? null : u.title) && s.getAttribute("crossorigin") === (u.crossOrigin == null ? null : u.crossOrigin)) {
                            m.splice(g, 1);
                            break t;
                          }
                      }
                      s = r.createElement(c), Kl(s, c, u), r.head.appendChild(s);
                      break;
                    case "meta":
                      if (m = Qh(
                        "meta",
                        "content",
                        r
                      ).get(c + (u.content || ""))) {
                        for (g = 0; g < m.length; g++)
                          if (s = m[g], s.getAttribute("content") === (u.content == null ? null : "" + u.content) && s.getAttribute("name") === (u.name == null ? null : u.name) && s.getAttribute("property") === (u.property == null ? null : u.property) && s.getAttribute("http-equiv") === (u.httpEquiv == null ? null : u.httpEquiv) && s.getAttribute("charset") === (u.charSet == null ? null : u.charSet)) {
                            m.splice(g, 1);
                            break t;
                          }
                      }
                      s = r.createElement(c), Kl(s, c, u), r.head.appendChild(s);
                      break;
                    default:
                      throw Error(B(468, c));
                  }
                  s[vl] = l, Tl(s), c = s;
                }
                l.stateNode = c;
              } else
                Mp(
                  r,
                  l.type,
                  l.stateNode
                );
            else
              l.stateNode = Rp(
                r,
                c,
                l.memoizedProps
              );
          else
            s !== c ? (s === null ? u.stateNode !== null && (u = u.stateNode, u.parentNode.removeChild(u)) : s.count--, c === null ? Mp(
              r,
              l.type,
              l.stateNode
            ) : Rp(
              r,
              c,
              l.memoizedProps
            )) : c === null && l.stateNode !== null && hh(
              l,
              l.memoizedProps,
              u.memoizedProps
            );
        }
        break;
      case 27:
        ba(n, l), ca(l), c & 512 && (Sl || u === null || Sa(u, u.return)), u !== null && c & 4 && hh(
          l,
          l.memoizedProps,
          u.memoizedProps
        );
        break;
      case 5:
        if (ba(n, l), ca(l), c & 512 && (Sl || u === null || Sa(u, u.return)), l.flags & 32) {
          r = l.stateNode;
          try {
            Cc(r, "");
          } catch (he) {
            Mt(l, l.return, he);
          }
        }
        c & 4 && l.stateNode != null && (r = l.memoizedProps, hh(
          l,
          r,
          u !== null ? u.memoizedProps : r
        )), c & 1024 && ($y = !0);
        break;
      case 6:
        if (ba(n, l), ca(l), c & 4) {
          if (l.stateNode === null)
            throw Error(B(162));
          c = l.memoizedProps, u = l.stateNode;
          try {
            u.nodeValue = c;
          } catch (he) {
            Mt(l, l.return, he);
          }
        }
        break;
      case 3:
        if (Ns = null, r = Dn, Dn = mo(n.containerInfo), ba(n, l), Dn = r, ca(l), c & 4 && u !== null && u.memoizedState.isDehydrated)
          try {
            Cf(n.containerInfo);
          } catch (he) {
            Mt(l, l.return, he);
          }
        $y && ($y = !1, dv(l));
        break;
      case 4:
        c = Dn, Dn = mo(
          l.stateNode.containerInfo
        ), ba(n, l), ca(l), Dn = c;
        break;
      case 12:
        ba(n, l), ca(l);
        break;
      case 31:
        ba(n, l), ca(l), c & 4 && (c = l.updateQueue, c !== null && (l.updateQueue = null, fc(l, c)));
        break;
      case 13:
        ba(n, l), ca(l), l.child.flags & 8192 && l.memoizedState !== null != (u !== null && u.memoizedState !== null) && (ys = El()), c & 4 && (c = l.updateQueue, c !== null && (l.updateQueue = null, fc(l, c)));
        break;
      case 22:
        r = l.memoizedState !== null;
        var T = u !== null && u.memoizedState !== null, N = ju, Z = Sl;
        if (ju = N || r, Sl = Z || T, ba(n, l), Sl = Z, ju = N, ca(l), c & 8192)
          e: for (n = l.stateNode, n._visibility = r ? n._visibility & -2 : n._visibility | 1, r && (u === null || T || ju || Sl || io(l)), u = null, n = l; ; ) {
            if (n.tag === 5 || n.tag === 26) {
              if (u === null) {
                T = u = n;
                try {
                  if (s = T.stateNode, r)
                    m = s.style, typeof m.setProperty == "function" ? m.setProperty("display", "none", "important") : m.display = "none";
                  else {
                    g = T.stateNode;
                    var W = T.memoizedProps.style, x = W != null && W.hasOwnProperty("display") ? W.display : null;
                    g.style.display = x == null || typeof x == "boolean" ? "" : ("" + x).trim();
                  }
                } catch (he) {
                  Mt(T, T.return, he);
                }
              }
            } else if (n.tag === 6) {
              if (u === null) {
                T = n;
                try {
                  T.stateNode.nodeValue = r ? "" : T.memoizedProps;
                } catch (he) {
                  Mt(T, T.return, he);
                }
              }
            } else if (n.tag === 18) {
              if (u === null) {
                T = n;
                try {
                  var G = T.stateNode;
                  r ? Tp(G, !0) : Tp(T.stateNode, !1);
                } catch (he) {
                  Mt(T, T.return, he);
                }
              }
            } else if ((n.tag !== 22 && n.tag !== 23 || n.memoizedState === null || n === l) && n.child !== null) {
              n.child.return = n, n = n.child;
              continue;
            }
            if (n === l) break e;
            for (; n.sibling === null; ) {
              if (n.return === null || n.return === l) break e;
              u === n && (u = null), n = n.return;
            }
            u === n && (u = null), n.sibling.return = n.return, n = n.sibling;
          }
        c & 4 && (c = l.updateQueue, c !== null && (u = c.retryQueue, u !== null && (c.retryQueue = null, fc(l, u))));
        break;
      case 19:
        ba(n, l), ca(l), c & 4 && (c = l.updateQueue, c !== null && (l.updateQueue = null, fc(l, c)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        ba(n, l), ca(l);
    }
  }
  function ca(l) {
    var n = l.flags;
    if (n & 2) {
      try {
        for (var u, c = l.return; c !== null; ) {
          if (Ky(c)) {
            u = c;
            break;
          }
          c = c.return;
        }
        if (u == null) throw Error(B(160));
        switch (u.tag) {
          case 27:
            var r = u.stateNode, s = mh(l);
            no(l, s, r);
            break;
          case 5:
            var m = u.stateNode;
            u.flags & 32 && (Cc(m, ""), u.flags &= -33);
            var g = mh(l);
            no(l, g, m);
            break;
          case 3:
          case 4:
            var T = u.stateNode.containerInfo, N = mh(l);
            hf(
              l,
              N,
              T
            );
            break;
          default:
            throw Error(B(161));
        }
      } catch (Z) {
        Mt(l, l.return, Z);
      }
      l.flags &= -3;
    }
    n & 4096 && (l.flags &= -4097);
  }
  function dv(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var n = l;
        dv(n), n.tag === 5 && n.flags & 1024 && n.stateNode.reset(), l = l.sibling;
      }
  }
  function qu(l, n) {
    if (n.subtreeFlags & 8772)
      for (n = n.child; n !== null; )
        uo(l, n.alternate, n), n = n.sibling;
  }
  function io(l) {
    for (l = l.child; l !== null; ) {
      var n = l;
      switch (n.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          ga(4, n, n.return), io(n);
          break;
        case 1:
          Sa(n, n.return);
          var u = n.stateNode;
          typeof u.componentWillUnmount == "function" && dh(
            n,
            n.return,
            u
          ), io(n);
          break;
        case 27:
          Di(n.stateNode);
        case 26:
        case 5:
          Sa(n, n.return), io(n);
          break;
        case 22:
          n.memoizedState === null && io(n);
          break;
        case 30:
          io(n);
          break;
        default:
          io(n);
      }
      l = l.sibling;
    }
  }
  function Ai(l, n, u) {
    for (u = u && (n.subtreeFlags & 8772) !== 0, n = n.child; n !== null; ) {
      var c = n.alternate, r = l, s = n, m = s.flags;
      switch (s.tag) {
        case 0:
        case 11:
        case 15:
          Ai(
            r,
            s,
            u
          ), os(4, s);
          break;
        case 1:
          if (Ai(
            r,
            s,
            u
          ), c = s, r = c.stateNode, typeof r.componentDidMount == "function")
            try {
              r.componentDidMount();
            } catch (N) {
              Mt(c, c.return, N);
            }
          if (c = s, r = c.updateQueue, r !== null) {
            var g = c.stateNode;
            try {
              var T = r.shared.hiddenCallbacks;
              if (T !== null)
                for (r.shared.hiddenCallbacks = null, r = 0; r < T.length; r++)
                  Kc(T[r], g);
            } catch (N) {
              Mt(c, c.return, N);
            }
          }
          u && m & 64 && ao(s), $n(s, s.return);
          break;
        case 27:
          yh(s);
        case 26:
        case 5:
          Ai(
            r,
            s,
            u
          ), u && c === null && m & 4 && Jy(s), $n(s, s.return);
          break;
        case 12:
          Ai(
            r,
            s,
            u
          );
          break;
        case 31:
          Ai(
            r,
            s,
            u
          ), u && m & 4 && Fy(r, s);
          break;
        case 13:
          Ai(
            r,
            s,
            u
          ), u && m & 4 && rv(r, s);
          break;
        case 22:
          s.memoizedState === null && Ai(
            r,
            s,
            u
          ), $n(s, s.return);
          break;
        case 30:
          break;
        default:
          Ai(
            r,
            s,
            u
          );
      }
      n = n.sibling;
    }
  }
  function rs(l, n) {
    var u = null;
    l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), l = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (l = n.memoizedState.cachePool.pool), l !== u && (l != null && l.refCount++, u != null && Vc(u));
  }
  function ph(l, n) {
    l = null, n.alternate !== null && (l = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== l && (n.refCount++, l != null && Vc(l));
  }
  function Rn(l, n, u, c) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; )
        Iy(
          l,
          n,
          u,
          c
        ), n = n.sibling;
  }
  function Iy(l, n, u, c) {
    var r = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        Rn(
          l,
          n,
          u,
          c
        ), r & 2048 && os(9, n);
        break;
      case 1:
        Rn(
          l,
          n,
          u,
          c
        );
        break;
      case 3:
        Rn(
          l,
          n,
          u,
          c
        ), r & 2048 && (l = null, n.alternate !== null && (l = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== l && (n.refCount++, l != null && Vc(l)));
        break;
      case 12:
        if (r & 2048) {
          Rn(
            l,
            n,
            u,
            c
          ), l = n.stateNode;
          try {
            var s = n.memoizedProps, m = s.id, g = s.onPostCommit;
            typeof g == "function" && g(
              m,
              n.alternate === null ? "mount" : "update",
              l.passiveEffectDuration,
              -0
            );
          } catch (T) {
            Mt(n, n.return, T);
          }
        } else
          Rn(
            l,
            n,
            u,
            c
          );
        break;
      case 31:
        Rn(
          l,
          n,
          u,
          c
        );
        break;
      case 13:
        Rn(
          l,
          n,
          u,
          c
        );
        break;
      case 23:
        break;
      case 22:
        s = n.stateNode, m = n.alternate, n.memoizedState !== null ? s._visibility & 2 ? Rn(
          l,
          n,
          u,
          c
        ) : ss(l, n) : s._visibility & 2 ? Rn(
          l,
          n,
          u,
          c
        ) : (s._visibility |= 2, Gu(
          l,
          n,
          u,
          c,
          (n.subtreeFlags & 10256) !== 0 || !1
        )), r & 2048 && rs(m, n);
        break;
      case 24:
        Rn(
          l,
          n,
          u,
          c
        ), r & 2048 && ph(n.alternate, n);
        break;
      default:
        Rn(
          l,
          n,
          u,
          c
        );
    }
  }
  function Gu(l, n, u, c, r) {
    for (r = r && ((n.subtreeFlags & 10256) !== 0 || !1), n = n.child; n !== null; ) {
      var s = l, m = n, g = u, T = c, N = m.flags;
      switch (m.tag) {
        case 0:
        case 11:
        case 15:
          Gu(
            s,
            m,
            g,
            T,
            r
          ), os(8, m);
          break;
        case 23:
          break;
        case 22:
          var Z = m.stateNode;
          m.memoizedState !== null ? Z._visibility & 2 ? Gu(
            s,
            m,
            g,
            T,
            r
          ) : ss(
            s,
            m
          ) : (Z._visibility |= 2, Gu(
            s,
            m,
            g,
            T,
            r
          )), r && N & 2048 && rs(
            m.alternate,
            m
          );
          break;
        case 24:
          Gu(
            s,
            m,
            g,
            T,
            r
          ), r && N & 2048 && ph(m.alternate, m);
          break;
        default:
          Gu(
            s,
            m,
            g,
            T,
            r
          );
      }
      n = n.sibling;
    }
  }
  function ss(l, n) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; ) {
        var u = l, c = n, r = c.flags;
        switch (c.tag) {
          case 22:
            ss(u, c), r & 2048 && rs(
              c.alternate,
              c
            );
            break;
          case 24:
            ss(u, c), r & 2048 && ph(c.alternate, c);
            break;
          default:
            ss(u, c);
        }
        n = n.sibling;
      }
  }
  var ds = 8192;
  function Ea(l, n, u) {
    if (l.subtreeFlags & ds)
      for (l = l.child; l !== null; )
        mf(
          l,
          n,
          u
        ), l = l.sibling;
  }
  function mf(l, n, u) {
    switch (l.tag) {
      case 26:
        Ea(
          l,
          n,
          u
        ), l.flags & ds && l.memoizedState !== null && fn(
          u,
          Dn,
          l.memoizedState,
          l.memoizedProps
        );
        break;
      case 5:
        Ea(
          l,
          n,
          u
        );
        break;
      case 3:
      case 4:
        var c = Dn;
        Dn = mo(l.stateNode.containerInfo), Ea(
          l,
          n,
          u
        ), Dn = c;
        break;
      case 22:
        l.memoizedState === null && (c = l.alternate, c !== null && c.memoizedState !== null ? (c = ds, ds = 16777216, Ea(
          l,
          n,
          u
        ), ds = c) : Ea(
          l,
          n,
          u
        ));
        break;
      default:
        Ea(
          l,
          n,
          u
        );
    }
  }
  function hv(l) {
    var n = l.alternate;
    if (n !== null && (l = n.child, l !== null)) {
      n.child = null;
      do
        n = l.sibling, l.sibling = null, l = n;
      while (l !== null);
    }
  }
  function co(l) {
    var n = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (n !== null)
        for (var u = 0; u < n.length; u++) {
          var c = n[u];
          Al = c, ep(
            c,
            l
          );
        }
      hv(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; )
        Py(l), l = l.sibling;
  }
  function Py(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        co(l), l.flags & 2048 && ga(9, l, l.return);
        break;
      case 3:
        co(l);
        break;
      case 12:
        co(l);
        break;
      case 22:
        var n = l.stateNode;
        l.memoizedState !== null && n._visibility & 2 && (l.return === null || l.return.tag !== 13) ? (n._visibility &= -3, hs(l)) : co(l);
        break;
      default:
        co(l);
    }
  }
  function hs(l) {
    var n = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (n !== null)
        for (var u = 0; u < n.length; u++) {
          var c = n[u];
          Al = c, ep(
            c,
            l
          );
        }
      hv(l);
    }
    for (l = l.child; l !== null; ) {
      switch (n = l, n.tag) {
        case 0:
        case 11:
        case 15:
          ga(8, n, n.return), hs(n);
          break;
        case 22:
          u = n.stateNode, u._visibility & 2 && (u._visibility &= -3, hs(n));
          break;
        default:
          hs(n);
      }
      l = l.sibling;
    }
  }
  function ep(l, n) {
    for (; Al !== null; ) {
      var u = Al;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          ga(8, u, n);
          break;
        case 23:
        case 22:
          if (u.memoizedState !== null && u.memoizedState.cachePool !== null) {
            var c = u.memoizedState.cachePool.pool;
            c != null && c.refCount++;
          }
          break;
        case 24:
          Vc(u.memoizedState.cache);
      }
      if (c = u.child, c !== null) c.return = u, Al = c;
      else
        e: for (u = l; Al !== null; ) {
          c = Al;
          var r = c.sibling, s = c.return;
          if (fs(c), c === u) {
            Al = null;
            break e;
          }
          if (r !== null) {
            r.return = s, Al = r;
            break e;
          }
          Al = s;
        }
    }
  }
  var tp = {
    getCacheForType: function(l) {
      var n = be(il), u = n.data.get(l);
      return u === void 0 && (u = l(), n.data.set(l, u)), u;
    },
    cacheSignal: function() {
      return be(il).controller.signal;
    }
  }, mv = typeof WeakMap == "function" ? WeakMap : Map, ht = 0, Ht = null, et = null, it = 0, vt = 0, wa = null, Ge = !1, rc = !1, ms = !1, wu = 0, Wt = 0, Mn = 0, Xu = 0, lp = 0, Xa = 0, sc = 0, ol = null, Qa = null, Cn = !1, ys = 0, Oi = 0, ps = 1 / 0, At = null, Qu = null, ft = 0, dc = null, oo = null, kn = 0, vh = 0, La = null, ap = null, fo = 0, gh = null;
  function Ta() {
    return (ht & 2) !== 0 && it !== 0 ? it & -it : X.T !== null ? ro() : C0();
  }
  function np() {
    if (Xa === 0)
      if ((it & 536870912) === 0 || ut) {
        var l = I;
        I <<= 1, (I & 3932160) === 0 && (I = 262144), Xa = l;
      } else Xa = 536870912;
    return l = na.current, l !== null && (l.flags |= 32), Xa;
  }
  function Va(l, n, u) {
    (l === Ht && (vt === 2 || vt === 9) || l.cancelPendingCommit !== null) && (yf(l, 0), zi(
      l,
      it,
      Xa,
      !1
    )), _a(l, u), ((ht & 2) === 0 || l !== Ht) && (l === Ht && ((ht & 2) === 0 && (Xu |= u), Wt === 4 && zi(
      l,
      it,
      Xa,
      !1
    )), Wn(l));
  }
  function up(l, n, u) {
    if ((ht & 6) !== 0) throw Error(B(327));
    var c = !u && (n & 127) === 0 && (n & l.expiredLanes) === 0 || ye(l, n), r = c ? eS(l, n) : ip(l, n, !0), s = c;
    do {
      if (r === 0) {
        rc && !c && zi(l, n, 0, !1);
        break;
      } else {
        if (u = l.current.alternate, s && !Sh(u)) {
          r = ip(l, n, !1), s = !1;
          continue;
        }
        if (r === 2) {
          if (s = n, l.errorRecoveryDisabledLanes & s)
            var m = 0;
          else
            m = l.pendingLanes & -536870913, m = m !== 0 ? m : m & 536870912 ? 536870912 : 0;
          if (m !== 0) {
            n = m;
            e: {
              var g = l;
              r = ol;
              var T = g.current.memoizedState.isDehydrated;
              if (T && (yf(g, m).flags |= 256), m = ip(
                g,
                m,
                !1
              ), m !== 2) {
                if (ms && !T) {
                  g.errorRecoveryDisabledLanes |= s, Xu |= s, r = 4;
                  break e;
                }
                s = Qa, Qa = r, s !== null && (Qa === null ? Qa = s : Qa.push.apply(
                  Qa,
                  s
                ));
              }
              r = m;
            }
            if (s = !1, r !== 2) continue;
          }
        }
        if (r === 1) {
          yf(l, 0), zi(l, n, 0, !0);
          break;
        }
        e: {
          switch (c = l, s = r, s) {
            case 0:
            case 1:
              throw Error(B(345));
            case 4:
              if ((n & 4194048) !== n) break;
            case 6:
              zi(
                c,
                n,
                Xa,
                !Ge
              );
              break e;
            case 2:
              Qa = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(B(329));
          }
          if ((n & 62914560) === n && (r = ys + 300 - El(), 10 < r)) {
            if (zi(
              c,
              n,
              Xa,
              !Ge
            ), He(c, 0, !0) !== 0) break e;
            kn = n, c.timeoutHandle = Bv(
              yv.bind(
                null,
                c,
                u,
                Qa,
                At,
                Cn,
                n,
                Xa,
                Xu,
                sc,
                Ge,
                s,
                "Throttled",
                -0,
                0
              ),
              r
            );
            break e;
          }
          yv(
            c,
            u,
            Qa,
            At,
            Cn,
            n,
            Xa,
            Xu,
            sc,
            Ge,
            s,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    Wn(l);
  }
  function yv(l, n, u, c, r, s, m, g, T, N, Z, W, x, G) {
    if (l.timeoutHandle = -1, W = n.subtreeFlags, W & 8192 || (W & 16785408) === 16785408) {
      W = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: wl
      }, mf(
        n,
        s,
        W
      );
      var he = (s & 62914560) === s ? ys - El() : (s & 4194048) === s ? Oi - El() : 0;
      if (he = In(
        W,
        he
      ), he !== null) {
        kn = s, l.cancelPendingCommit = he(
          Ev.bind(
            null,
            l,
            n,
            s,
            u,
            c,
            r,
            m,
            g,
            T,
            Z,
            W,
            null,
            x,
            G
          )
        ), zi(l, s, m, !N);
        return;
      }
    }
    Ev(
      l,
      n,
      s,
      u,
      c,
      r,
      m,
      g,
      T
    );
  }
  function Sh(l) {
    for (var n = l; ; ) {
      var u = n.tag;
      if ((u === 0 || u === 11 || u === 15) && n.flags & 16384 && (u = n.updateQueue, u !== null && (u = u.stores, u !== null)))
        for (var c = 0; c < u.length; c++) {
          var r = u[c], s = r.getSnapshot;
          r = r.value;
          try {
            if (!Ca(s(), r)) return !1;
          } catch {
            return !1;
          }
        }
      if (u = n.child, n.subtreeFlags & 16384 && u !== null)
        u.return = n, n = u;
      else {
        if (n === l) break;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === l) return !0;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
    }
    return !0;
  }
  function zi(l, n, u, c) {
    n &= ~lp, n &= ~Xu, l.suspendedLanes |= n, l.pingedLanes &= ~n, c && (l.warmLanes |= n), c = l.expirationTimes;
    for (var r = n; 0 < r; ) {
      var s = 31 - Rl(r), m = 1 << s;
      c[s] = -1, r &= ~m;
    }
    u !== 0 && Ac(l, u, n);
  }
  function vs() {
    return (ht & 6) === 0 ? (Es(0), !1) : !0;
  }
  function gs() {
    if (et !== null) {
      if (vt === 0)
        var l = et.return;
      else
        l = et, Vn = Ii = null, Wc(l), nc = null, Zc = 0, l = et;
      for (; l !== null; )
        Zy(l.alternate, l), l = l.return;
      et = null;
    }
  }
  function yf(l, n) {
    var u = l.timeoutHandle;
    u !== -1 && (l.timeoutHandle = -1, jh(u)), u = l.cancelPendingCommit, u !== null && (l.cancelPendingCommit = null, u()), kn = 0, gs(), Ht = l, et = u = ln(l.current, null), it = n, vt = 0, wa = null, Ge = !1, rc = ye(l, n), ms = !1, sc = Xa = lp = Xu = Mn = Wt = 0, Qa = ol = null, Cn = !1, (n & 8) !== 0 && (n |= n & 32);
    var c = l.entangledLanes;
    if (c !== 0)
      for (l = l.entanglements, c &= n; 0 < c; ) {
        var r = 31 - Rl(c), s = 1 << r;
        n |= l[r], c &= ~s;
      }
    return wu = n, en(), u;
  }
  function pf(l, n) {
    Qe = null, X.H = ff, n === Zn || n === tc ? (n = fy(), vt = 3) : n === xr ? (n = fy(), vt = 4) : vt = n === Yy ? 8 : n !== null && typeof n == "object" && typeof n.then == "function" ? 6 : 1, wa = n, et === null && (Wt = 1, rf(
      l,
      an(n, l.current)
    ));
  }
  function vf() {
    var l = na.current;
    return l === null ? !0 : (it & 4194048) === it ? qa === null : (it & 62914560) === it || (it & 536870912) !== 0 ? l === qa : !1;
  }
  function pv() {
    var l = X.H;
    return X.H = ff, l === null ? ff : l;
  }
  function vv() {
    var l = X.A;
    return X.A = tp, l;
  }
  function bh() {
    Wt = 4, Ge || (it & 4194048) !== it && na.current !== null || (rc = !0), (Mn & 134217727) === 0 && (Xu & 134217727) === 0 || Ht === null || zi(
      Ht,
      it,
      Xa,
      !1
    );
  }
  function ip(l, n, u) {
    var c = ht;
    ht |= 2;
    var r = pv(), s = vv();
    (Ht !== l || it !== n) && (At = null, yf(l, n)), n = !1;
    var m = Wt;
    e: do
      try {
        if (vt !== 0 && et !== null) {
          var g = et, T = wa;
          switch (vt) {
            case 8:
              gs(), m = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              na.current === null && (n = !0);
              var N = vt;
              if (vt = 0, wa = null, gf(l, g, T, N), u && rc) {
                m = 0;
                break e;
              }
              break;
            default:
              N = vt, vt = 0, wa = null, gf(l, g, T, N);
          }
        }
        gv(), m = Wt;
        break;
      } catch (Z) {
        pf(l, Z);
      }
    while (!0);
    return n && l.shellSuspendCounter++, Vn = Ii = null, ht = c, X.H = r, X.A = s, et === null && (Ht = null, it = 0, en()), m;
  }
  function gv() {
    for (; et !== null; ) _i(et);
  }
  function eS(l, n) {
    var u = ht;
    ht |= 2;
    var c = pv(), r = vv();
    Ht !== l || it !== n ? (At = null, ps = El() + 500, yf(l, n)) : rc = ye(
      l,
      n
    );
    e: do
      try {
        if (vt !== 0 && et !== null) {
          n = et;
          var s = wa;
          t: switch (vt) {
            case 1:
              vt = 0, wa = null, gf(l, n, s, 1);
              break;
            case 2:
            case 9:
              if (jr(s)) {
                vt = 0, wa = null, bv(n);
                break;
              }
              n = function() {
                vt !== 2 && vt !== 9 || Ht !== l || (vt = 7), Wn(l);
              }, s.then(n, n);
              break e;
            case 3:
              vt = 7;
              break e;
            case 4:
              vt = 5;
              break e;
            case 7:
              jr(s) ? (vt = 0, wa = null, bv(n)) : (vt = 0, wa = null, gf(l, n, s, 7));
              break;
            case 5:
              var m = null;
              switch (et.tag) {
                case 26:
                  m = et.memoizedState;
                case 5:
                case 27:
                  var g = et;
                  if (m ? Lh(m) : g.stateNode.complete) {
                    vt = 0, wa = null;
                    var T = g.sibling;
                    if (T !== null) et = T;
                    else {
                      var N = g.return;
                      N !== null ? (et = N, Ss(N)) : et = null;
                    }
                    break t;
                  }
              }
              vt = 0, wa = null, gf(l, n, s, 5);
              break;
            case 6:
              vt = 0, wa = null, gf(l, n, s, 6);
              break;
            case 8:
              gs(), Wt = 6;
              break e;
            default:
              throw Error(B(462));
          }
        }
        Sv();
        break;
      } catch (Z) {
        pf(l, Z);
      }
    while (!0);
    return Vn = Ii = null, X.H = c, X.A = r, ht = u, et !== null ? 0 : (Ht = null, it = 0, en(), Wt);
  }
  function Sv() {
    for (; et !== null && !Bo(); )
      _i(et);
  }
  function _i(l) {
    var n = is(l.alternate, l, wu);
    l.memoizedProps = l.pendingProps, n === null ? Ss(l) : et = n;
  }
  function bv(l) {
    var n = l, u = n.alternate;
    switch (n.tag) {
      case 15:
      case 0:
        n = Qy(
          u,
          n,
          n.pendingProps,
          n.type,
          void 0,
          it
        );
        break;
      case 11:
        n = Qy(
          u,
          n,
          n.pendingProps,
          n.type.render,
          n.ref,
          it
        );
        break;
      case 5:
        Wc(n);
      default:
        Zy(u, n), n = et = F0(n, wu), n = is(u, n, wu);
    }
    l.memoizedProps = l.pendingProps, n === null ? Ss(l) : et = n;
  }
  function gf(l, n, u, c) {
    Vn = Ii = null, Wc(n), nc = null, Zc = 0;
    var r = n.return;
    try {
      if (iv(
        l,
        r,
        n,
        u,
        it
      )) {
        Wt = 1, rf(
          l,
          an(u, l.current)
        ), et = null;
        return;
      }
    } catch (s) {
      if (r !== null) throw et = r, s;
      Wt = 1, rf(
        l,
        an(u, l.current)
      ), et = null;
      return;
    }
    n.flags & 32768 ? (ut || c === 1 ? l = !0 : rc || (it & 536870912) !== 0 ? l = !1 : (Ge = l = !0, (c === 2 || c === 9 || c === 3 || c === 6) && (c = na.current, c !== null && c.tag === 13 && (c.flags |= 16384))), cp(n, l)) : Ss(n);
  }
  function Ss(l) {
    var n = l;
    do {
      if ((n.flags & 32768) !== 0) {
        cp(
          n,
          Ge
        );
        return;
      }
      l = n.return;
      var u = ll(
        n.alternate,
        n,
        wu
      );
      if (u !== null) {
        et = u;
        return;
      }
      if (n = n.sibling, n !== null) {
        et = n;
        return;
      }
      et = n = l;
    } while (n !== null);
    Wt === 0 && (Wt = 5);
  }
  function cp(l, n) {
    do {
      var u = fv(l.alternate, l);
      if (u !== null) {
        u.flags &= 32767, et = u;
        return;
      }
      if (u = l.return, u !== null && (u.flags |= 32768, u.subtreeFlags = 0, u.deletions = null), !n && (l = l.sibling, l !== null)) {
        et = l;
        return;
      }
      et = l = u;
    } while (l !== null);
    Wt = 6, et = null;
  }
  function Ev(l, n, u, c, r, s, m, g, T) {
    l.cancelPendingCommit = null;
    do
      Eh();
    while (ft !== 0);
    if ((ht & 6) !== 0) throw Error(B(327));
    if (n !== null) {
      if (n === l.current) throw Error(B(177));
      if (s = n.lanes | n.childLanes, s |= ya, fd(
        l,
        u,
        s,
        m,
        g,
        T
      ), l === Ht && (et = Ht = null, it = 0), oo = n, dc = l, kn = u, vh = s, La = r, ap = c, (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? (l.callbackNode = null, l.callbackPriority = 0, Dv(Gi, function() {
        return Th(), null;
      })) : (l.callbackNode = null, l.callbackPriority = 0), c = (n.flags & 13878) !== 0, (n.subtreeFlags & 13878) !== 0 || c) {
        c = X.T, X.T = null, r = j.p, j.p = 2, m = ht, ht |= 4;
        try {
          Pg(l, n, u);
        } finally {
          ht = m, j.p = r, X.T = c;
        }
      }
      ft = 1, Tv(), Av(), Ov();
    }
  }
  function Tv() {
    if (ft === 1) {
      ft = 0;
      var l = dc, n = oo, u = (n.flags & 13878) !== 0;
      if ((n.subtreeFlags & 13878) !== 0 || u) {
        u = X.T, X.T = null;
        var c = j.p;
        j.p = 2;
        var r = ht;
        ht |= 4;
        try {
          pt(n, l);
          var s = Bh, m = qc(l.containerInfo), g = s.focusedElem, T = s.selectionRange;
          if (m !== g && g && g.ownerDocument && ty(
            g.ownerDocument.documentElement,
            g
          )) {
            if (T !== null && si(g)) {
              var N = T.start, Z = T.end;
              if (Z === void 0 && (Z = N), "selectionStart" in g)
                g.selectionStart = N, g.selectionEnd = Math.min(
                  Z,
                  g.value.length
                );
              else {
                var W = g.ownerDocument || document, x = W && W.defaultView || window;
                if (x.getSelection) {
                  var G = x.getSelection(), he = g.textContent.length, _e = Math.min(T.start, he), Nt = T.end === void 0 ? _e : Math.min(T.end, he);
                  !G.extend && _e > Nt && (m = Nt, Nt = _e, _e = m);
                  var C = ey(
                    g,
                    _e
                  ), D = ey(
                    g,
                    Nt
                  );
                  if (C && D && (G.rangeCount !== 1 || G.anchorNode !== C.node || G.anchorOffset !== C.offset || G.focusNode !== D.node || G.focusOffset !== D.offset)) {
                    var H = W.createRange();
                    H.setStart(C.node, C.offset), G.removeAllRanges(), _e > Nt ? (G.addRange(H), G.extend(D.node, D.offset)) : (H.setEnd(D.node, D.offset), G.addRange(H));
                  }
                }
              }
            }
            for (W = [], G = g; G = G.parentNode; )
              G.nodeType === 1 && W.push({
                element: G,
                left: G.scrollLeft,
                top: G.scrollTop
              });
            for (typeof g.focus == "function" && g.focus(), g = 0; g < W.length; g++) {
              var K = W[g];
              K.element.scrollLeft = K.left, K.element.scrollTop = K.top;
            }
          }
          Ci = !!Ds, Bh = Ds = null;
        } finally {
          ht = r, j.p = c, X.T = u;
        }
      }
      l.current = n, ft = 2;
    }
  }
  function Av() {
    if (ft === 2) {
      ft = 0;
      var l = dc, n = oo, u = (n.flags & 8772) !== 0;
      if ((n.subtreeFlags & 8772) !== 0 || u) {
        u = X.T, X.T = null;
        var c = j.p;
        j.p = 2;
        var r = ht;
        ht |= 4;
        try {
          uo(l, n.alternate, n);
        } finally {
          ht = r, j.p = c, X.T = u;
        }
      }
      ft = 3;
    }
  }
  function Ov() {
    if (ft === 4 || ft === 3) {
      ft = 0, iu();
      var l = dc, n = oo, u = kn, c = ap;
      (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? ft = 5 : (ft = 0, oo = dc = null, zv(l, l.pendingLanes));
      var r = l.pendingLanes;
      if (r === 0 && (Qu = null), rd(u), n = n.stateNode, pl && typeof pl.onCommitFiberRoot == "function")
        try {
          pl.onCommitFiberRoot(
            Gn,
            n,
            void 0,
            (n.current.flags & 128) === 128
          );
        } catch {
        }
      if (c !== null) {
        n = X.T, r = j.p, j.p = 2, X.T = null;
        try {
          for (var s = l.onRecoverableError, m = 0; m < c.length; m++) {
            var g = c[m];
            s(g.value, {
              componentStack: g.stack
            });
          }
        } finally {
          X.T = n, j.p = r;
        }
      }
      (kn & 3) !== 0 && Eh(), Wn(l), r = l.pendingLanes, (u & 261930) !== 0 && (r & 42) !== 0 ? l === gh ? fo++ : (fo = 0, gh = l) : fo = 0, Es(0);
    }
  }
  function zv(l, n) {
    (l.pooledCacheLanes &= n) === 0 && (n = l.pooledCache, n != null && (l.pooledCache = null, Vc(n)));
  }
  function Eh() {
    return Tv(), Av(), Ov(), Th();
  }
  function Th() {
    if (ft !== 5) return !1;
    var l = dc, n = vh;
    vh = 0;
    var u = rd(kn), c = X.T, r = j.p;
    try {
      j.p = 32 > u ? 32 : u, X.T = null, u = La, La = null;
      var s = dc, m = kn;
      if (ft = 0, oo = dc = null, kn = 0, (ht & 6) !== 0) throw Error(B(331));
      var g = ht;
      if (ht |= 4, Py(s.current), Iy(
        s,
        s.current,
        m,
        u
      ), ht = g, Es(0, !1), pl && typeof pl.onPostCommitFiberRoot == "function")
        try {
          pl.onPostCommitFiberRoot(Gn, s);
        } catch {
        }
      return !0;
    } finally {
      j.p = r, X.T = c, zv(l, n);
    }
  }
  function _v(l, n, u) {
    n = an(u, n), n = sf(l.stateNode, n, 2), l = pi(l, n, 2), l !== null && (_a(l, 2), Wn(l));
  }
  function Mt(l, n, u) {
    if (l.tag === 3)
      _v(l, l, u);
    else
      for (; n !== null; ) {
        if (n.tag === 3) {
          _v(
            n,
            l,
            u
          );
          break;
        } else if (n.tag === 1) {
          var c = n.stateNode;
          if (typeof n.type.getDerivedStateFromError == "function" || typeof c.componentDidCatch == "function" && (Qu === null || !Qu.has(c))) {
            l = an(u, l), u = uv(2), c = pi(n, u, 2), c !== null && (jy(
              u,
              c,
              n,
              l
            ), _a(c, 2), Wn(c));
            break;
          }
        }
        n = n.return;
      }
  }
  function Ah(l, n, u) {
    var c = l.pingCache;
    if (c === null) {
      c = l.pingCache = new mv();
      var r = /* @__PURE__ */ new Set();
      c.set(n, r);
    } else
      r = c.get(n), r === void 0 && (r = /* @__PURE__ */ new Set(), c.set(n, r));
    r.has(u) || (ms = !0, r.add(u), l = op.bind(null, l, n, u), n.then(l, l));
  }
  function op(l, n, u) {
    var c = l.pingCache;
    c !== null && c.delete(n), l.pingedLanes |= l.suspendedLanes & u, l.warmLanes &= ~u, Ht === l && (it & u) === u && (Wt === 4 || Wt === 3 && (it & 62914560) === it && 300 > El() - ys ? (ht & 2) === 0 && yf(l, 0) : lp |= u, sc === it && (sc = 0)), Wn(l);
  }
  function Oh(l, n) {
    n === 0 && (n = Ye()), l = ta(l, n), l !== null && (_a(l, n), Wn(l));
  }
  function tS(l) {
    var n = l.memoizedState, u = 0;
    n !== null && (u = n.retryLane), Oh(l, u);
  }
  function on(l, n) {
    var u = 0;
    switch (l.tag) {
      case 31:
      case 13:
        var c = l.stateNode, r = l.memoizedState;
        r !== null && (u = r.retryLane);
        break;
      case 19:
        c = l.stateNode;
        break;
      case 22:
        c = l.stateNode._retryCache;
        break;
      default:
        throw Error(B(314));
    }
    c !== null && c.delete(n), Oh(l, u);
  }
  function Dv(l, n) {
    return er(l, n);
  }
  var bs = null, hc = null, zh = !1, _h = !1, fp = !1, mc = 0;
  function Wn(l) {
    l !== hc && l.next === null && (hc === null ? bs = hc = l : hc = hc.next = l), _h = !0, zh || (zh = !0, Sf());
  }
  function Es(l, n) {
    if (!fp && _h) {
      fp = !0;
      do
        for (var u = !1, c = bs; c !== null; ) {
          if (l !== 0) {
            var r = c.pendingLanes;
            if (r === 0) var s = 0;
            else {
              var m = c.suspendedLanes, g = c.pingedLanes;
              s = (1 << 31 - Rl(42 | l) + 1) - 1, s &= r & ~(m & ~g), s = s & 201326741 ? s & 201326741 | 1 : s ? s | 2 : 0;
            }
            s !== 0 && (u = !0, Os(c, s));
          } else
            s = it, s = He(
              c,
              c === Ht ? s : 0,
              c.cancelPendingCommit !== null || c.timeoutHandle !== -1
            ), (s & 3) === 0 || ye(c, s) || (u = !0, Os(c, s));
          c = c.next;
        }
      while (u);
      fp = !1;
    }
  }
  function Ts() {
    As();
  }
  function As() {
    _h = zh = !1;
    var l = 0;
    mc !== 0 && Nv() && (l = mc);
    for (var n = El(), u = null, c = bs; c !== null; ) {
      var r = c.next, s = rp(c, n);
      s === 0 ? (c.next = null, u === null ? bs = r : u.next = r, r === null && (hc = u)) : (u = c, (l !== 0 || (s & 3) !== 0) && (_h = !0)), c = r;
    }
    ft !== 0 && ft !== 5 || Es(l), mc !== 0 && (mc = 0);
  }
  function rp(l, n) {
    for (var u = l.suspendedLanes, c = l.pingedLanes, r = l.expirationTimes, s = l.pendingLanes & -62914561; 0 < s; ) {
      var m = 31 - Rl(s), g = 1 << m, T = r[m];
      T === -1 ? ((g & u) === 0 || (g & c) !== 0) && (r[m] = ot(g, n)) : T <= n && (l.expiredLanes |= g), s &= ~g;
    }
    if (n = Ht, u = it, u = He(
      l,
      l === n ? u : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), c = l.callbackNode, u === 0 || l === n && (vt === 2 || vt === 9) || l.cancelPendingCommit !== null)
      return c !== null && c !== null && me(c), l.callbackNode = null, l.callbackPriority = 0;
    if ((u & 3) === 0 || ye(l, u)) {
      if (n = u & -u, n === l.callbackPriority) return n;
      switch (c !== null && me(c), rd(u)) {
        case 2:
        case 8:
          u = xo;
          break;
        case 32:
          u = Gi;
          break;
        case 268435456:
          u = lr;
          break;
        default:
          u = Gi;
      }
      return c = sp.bind(null, l), u = er(u, c), l.callbackPriority = n, l.callbackNode = u, n;
    }
    return c !== null && c !== null && me(c), l.callbackPriority = 2, l.callbackNode = null, 2;
  }
  function sp(l, n) {
    if (ft !== 0 && ft !== 5)
      return l.callbackNode = null, l.callbackPriority = 0, null;
    var u = l.callbackNode;
    if (Eh() && l.callbackNode !== u)
      return null;
    var c = it;
    return c = He(
      l,
      l === Ht ? c : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), c === 0 ? null : (up(l, c, n), rp(l, El()), l.callbackNode != null && l.callbackNode === u ? sp.bind(null, l) : null);
  }
  function Os(l, n) {
    if (Eh()) return null;
    up(l, n, !0);
  }
  function Sf() {
    Of(function() {
      (ht & 6) !== 0 ? er(
        tr,
        Ts
      ) : As();
    });
  }
  function ro() {
    if (mc === 0) {
      var l = Pi;
      l === 0 && (l = M, M <<= 1, (M & 261888) === 0 && (M = 256)), mc = l;
    }
    return mc;
  }
  function dp(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : Li("" + l);
  }
  function Rv(l, n) {
    var u = n.ownerDocument.createElement("input");
    return u.name = n.name, u.value = n.value, l.id && u.setAttribute("form", l.id), n.parentNode.insertBefore(u, n), l = new FormData(l), u.parentNode.removeChild(u), l;
  }
  function bf(l, n, u, c, r) {
    if (n === "submit" && u && u.stateNode === r) {
      var s = dp(
        (r[Zt] || null).action
      ), m = c.submitter;
      m && (n = (n = m[Zt] || null) ? dp(n.formAction) : m.getAttribute("formAction"), n !== null && (s = n, m = null));
      var g = new pr(
        "action",
        "action",
        null,
        c,
        r
      );
      l.push({
        event: g,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (c.defaultPrevented) {
                if (mc !== 0) {
                  var T = m ? Rv(r, m) : new FormData(r);
                  uh(
                    u,
                    {
                      pending: !0,
                      data: T,
                      method: r.method,
                      action: s
                    },
                    null,
                    T
                  );
                }
              } else
                typeof s == "function" && (g.preventDefault(), T = m ? Rv(r, m) : new FormData(r), uh(
                  u,
                  {
                    pending: !0,
                    data: T,
                    method: r.method,
                    action: s
                  },
                  s,
                  T
                ));
            },
            currentTarget: r
          }
        ]
      });
    }
  }
  for (var so = 0; so < Xn.length; so++) {
    var Dh = Xn[so], Rh = Dh.toLowerCase(), hp = Dh[0].toUpperCase() + Dh.slice(1);
    Ua(
      Rh,
      "on" + hp
    );
  }
  Ua(Yt, "onAnimationEnd"), Ua(Ar, "onAnimationIteration"), Ua(ay, "onAnimationStart"), Ua("dblclick", "onDoubleClick"), Ua("focusin", "onFocus"), Ua("focusout", "onBlur"), Ua(ny, "onTransitionRun"), Ua(Gc, "onTransitionStart"), Ua(Or, "onTransitionCancel"), Ua(wn, "onTransitionEnd"), Mc("onMouseEnter", ["mouseout", "mouseover"]), Mc("onMouseLeave", ["mouseout", "mouseover"]), Mc("onPointerEnter", ["pointerout", "pointerover"]), Mc("onPointerLeave", ["pointerout", "pointerover"]), Fa(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), Fa(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), Fa("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Fa(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), Fa(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), Fa(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var ho = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), Mv = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ho)
  );
  function mp(l, n) {
    n = (n & 4) !== 0;
    for (var u = 0; u < l.length; u++) {
      var c = l[u], r = c.event;
      c = c.listeners;
      e: {
        var s = void 0;
        if (n)
          for (var m = c.length - 1; 0 <= m; m--) {
            var g = c[m], T = g.instance, N = g.currentTarget;
            if (g = g.listener, T !== s && r.isPropagationStopped())
              break e;
            s = g, r.currentTarget = N;
            try {
              s(r);
            } catch (Z) {
              Fi(Z);
            }
            r.currentTarget = null, s = T;
          }
        else
          for (m = 0; m < c.length; m++) {
            if (g = c[m], T = g.instance, N = g.currentTarget, g = g.listener, T !== s && r.isPropagationStopped())
              break e;
            s = g, r.currentTarget = N;
            try {
              s(r);
            } catch (Z) {
              Fi(Z);
            }
            r.currentTarget = null, s = T;
          }
      }
    }
  }
  function at(l, n) {
    var u = n[ir];
    u === void 0 && (u = n[ir] = /* @__PURE__ */ new Set());
    var c = l + "__bubble";
    u.has(c) || (zs(n, l, 2, !1), u.add(c));
  }
  function Mh(l, n, u) {
    var c = 0;
    n && (c |= 4), zs(
      u,
      l,
      c,
      n
    );
  }
  var Ch = "_reactListening" + Math.random().toString(36).slice(2);
  function yp(l) {
    if (!l[Ch]) {
      l[Ch] = !0, Ra.forEach(function(u) {
        u !== "selectionchange" && (Mv.has(u) || Mh(u, !1, l), Mh(u, !0, l));
      });
      var n = l.nodeType === 9 ? l : l.ownerDocument;
      n === null || n[Ch] || (n[Ch] = !0, Mh("selectionchange", !1, n));
    }
  }
  function zs(l, n, u, c) {
    switch (xs(n)) {
      case 2:
        var r = oa;
        break;
      case 8:
        r = Zu;
        break;
      default:
        r = Bn;
    }
    u = r.bind(
      null,
      n,
      u,
      l
    ), r = void 0, !Xm || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (r = !0), c ? r !== void 0 ? l.addEventListener(n, u, {
      capture: !0,
      passive: r
    }) : l.addEventListener(n, u, !0) : r !== void 0 ? l.addEventListener(n, u, {
      passive: r
    }) : l.addEventListener(n, u, !1);
  }
  function Ef(l, n, u, c, r) {
    var s = c;
    if ((n & 1) === 0 && (n & 2) === 0 && c !== null)
      e: for (; ; ) {
        if (c === null) return;
        var m = c.tag;
        if (m === 3 || m === 4) {
          var g = c.stateNode.containerInfo;
          if (g === r) break;
          if (m === 4)
            for (m = c.return; m !== null; ) {
              var T = m.tag;
              if ((T === 3 || T === 4) && m.stateNode.containerInfo === r)
                return;
              m = m.return;
            }
          for (; g !== null; ) {
            if (m = zc(g), m === null) return;
            if (T = m.tag, T === 5 || T === 6 || T === 26 || T === 27) {
              c = s = m;
              continue e;
            }
            g = g.parentNode;
          }
        }
        c = c.return;
      }
    mr(function() {
      var N = s, Z = yd(u), W = [];
      e: {
        var x = W0.get(l);
        if (x !== void 0) {
          var G = pr, he = l;
          switch (l) {
            case "keypress":
              if (yr(u) === 0) break e;
            case "keydown":
            case "keyup":
              G = Ed;
              break;
            case "focusin":
              he = "focus", G = bd;
              break;
            case "focusout":
              he = "blur", G = bd;
              break;
            case "beforeblur":
            case "afterblur":
              G = bd;
              break;
            case "click":
              if (u.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              G = Y0;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              G = q0;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              G = $g;
              break;
            case Yt:
            case Ar:
            case ay:
              G = Zm;
              break;
            case wn:
              G = V0;
              break;
            case "scroll":
            case "scrollend":
              G = j0;
              break;
            case "wheel":
              G = Km;
              break;
            case "copy":
            case "cut":
            case "paste":
              G = Nc;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              G = Ad;
              break;
            case "toggle":
            case "beforetoggle":
              G = Z0;
          }
          var _e = (n & 4) !== 0, Nt = !_e && (l === "scroll" || l === "scrollend"), C = _e ? x !== null ? x + "Capture" : null : x;
          _e = [];
          for (var D = N, H; D !== null; ) {
            var K = D;
            if (H = K.stateNode, K = K.tag, K !== 5 && K !== 26 && K !== 27 || H === null || C === null || (K = Qo(D, C), K != null && _e.push(
              _s(D, K, H)
            )), Nt) break;
            D = D.return;
          }
          0 < _e.length && (x = new G(
            x,
            he,
            null,
            u,
            Z
          ), W.push({ event: x, listeners: _e }));
        }
      }
      if ((n & 7) === 0) {
        e: {
          if (x = l === "mouseover" || l === "pointerover", G = l === "mouseout" || l === "pointerout", x && u !== hr && (he = u.relatedTarget || u.fromElement) && (zc(he) || he[Oc]))
            break e;
          if ((G || x) && (x = Z.window === Z ? Z : (x = Z.ownerDocument) ? x.defaultView || x.parentWindow : window, G ? (he = u.relatedTarget || u.toElement, G = N, he = he ? zc(he) : null, he !== null && (Nt = Re(he), _e = he.tag, he !== Nt || _e !== 5 && _e !== 27 && _e !== 6) && (he = null)) : (G = null, he = N), G !== he)) {
            if (_e = Y0, K = "onMouseLeave", C = "onMouseEnter", D = "mouse", (l === "pointerout" || l === "pointerover") && (_e = Ad, K = "onPointerLeave", C = "onPointerEnter", D = "pointer"), Nt = G == null ? x : qo(G), H = he == null ? x : qo(he), x = new _e(
              K,
              D + "leave",
              G,
              u,
              Z
            ), x.target = Nt, x.relatedTarget = H, K = null, zc(Z) === N && (_e = new _e(
              C,
              D + "enter",
              he,
              u,
              Z
            ), _e.target = H, _e.relatedTarget = Nt, K = _e), Nt = K, G && he)
              t: {
                for (_e = Cv, C = G, D = he, H = 0, K = C; K; K = _e(K))
                  H++;
                K = 0;
                for (var Se = D; Se; Se = _e(Se))
                  K++;
                for (; 0 < H - K; )
                  C = _e(C), H--;
                for (; 0 < K - H; )
                  D = _e(D), K--;
                for (; H--; ) {
                  if (C === D || D !== null && C === D.alternate) {
                    _e = C;
                    break t;
                  }
                  C = _e(C), D = _e(D);
                }
                _e = null;
              }
            else _e = null;
            G !== null && pp(
              W,
              x,
              G,
              _e,
              !1
            ), he !== null && Nt !== null && pp(
              W,
              Nt,
              he,
              _e,
              !0
            );
          }
        }
        e: {
          if (x = N ? qo(N) : window, G = x.nodeName && x.nodeName.toLowerCase(), G === "select" || G === "input" && x.type === "file")
            var mt = Dd;
          else if (zd(x))
            if (Fm)
              mt = Ji;
            else {
              mt = $0;
              var pe = Pm;
            }
          else
            G = x.nodeName, !G || G.toLowerCase() !== "input" || x.type !== "checkbox" && x.type !== "radio" ? N && Gm(N.elementType) && (mt = Dd) : mt = k0;
          if (mt && (mt = mt(l, N))) {
            mu(
              W,
              mt,
              u,
              Z
            );
            break e;
          }
          pe && pe(l, x, N), l === "focusout" && N && x.type === "number" && N.memoizedProps.value != null && wo(x, "number", x.value);
        }
        switch (pe = N ? qo(N) : window, l) {
          case "focusin":
            (zd(pe) || pe.contentEditable === "true") && (vu = pe, Er = N, $i = null);
            break;
          case "focusout":
            $i = Er = vu = null;
            break;
          case "mousedown":
            gu = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            gu = !1, Su(W, u, Z);
            break;
          case "selectionchange":
            if (ly) break;
          case "keydown":
          case "keyup":
            Su(W, u, Z);
        }
        var Le;
        if (Vo)
          e: {
            switch (l) {
              case "compositionstart":
                var Ie = "onCompositionStart";
                break e;
              case "compositionend":
                Ie = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Ie = "onCompositionUpdate";
                break e;
            }
            Ie = void 0;
          }
        else
          xc ? Zi(l, u) && (Ie = "onCompositionEnd") : l === "keydown" && u.keyCode === 229 && (Ie = "onCompositionStart");
        Ie && (Xl && u.locale !== "ko" && (xc || Ie !== "onCompositionStart" ? Ie === "onCompositionEnd" && xc && (Le = x0()) : (fi = Z, pd = "value" in fi ? fi.value : fi.textContent, xc = !0)), pe = Uh(N, Ie), 0 < pe.length && (Ie = new bn(
          Ie,
          l,
          null,
          u,
          Z
        ), W.push({ event: Ie, listeners: pe }), Le ? Ie.data = Le : (Le = Od(u), Le !== null && (Ie.data = Le)))), (Le = km ? J0(l, u) : K0(l, u)) && (Ie = Uh(N, "onBeforeInput"), 0 < Ie.length && (pe = new bn(
          "onBeforeInput",
          "beforeinput",
          null,
          u,
          Z
        ), W.push({
          event: pe,
          listeners: Ie
        }), pe.data = Le)), bf(
          W,
          l,
          N,
          u,
          Z
        );
      }
      mp(W, n);
    });
  }
  function _s(l, n, u) {
    return {
      instance: l,
      listener: n,
      currentTarget: u
    };
  }
  function Uh(l, n) {
    for (var u = n + "Capture", c = []; l !== null; ) {
      var r = l, s = r.stateNode;
      if (r = r.tag, r !== 5 && r !== 26 && r !== 27 || s === null || (r = Qo(l, u), r != null && c.unshift(
        _s(l, r, s)
      ), r = Qo(l, n), r != null && c.push(
        _s(l, r, s)
      )), l.tag === 3) return c;
      l = l.return;
    }
    return [];
  }
  function Cv(l) {
    if (l === null) return null;
    do
      l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function pp(l, n, u, c, r) {
    for (var s = n._reactName, m = []; u !== null && u !== c; ) {
      var g = u, T = g.alternate, N = g.stateNode;
      if (g = g.tag, T !== null && T === c) break;
      g !== 5 && g !== 26 && g !== 27 || N === null || (T = N, r ? (N = Qo(u, s), N != null && m.unshift(
        _s(u, N, T)
      )) : r || (N = Qo(u, s), N != null && m.push(
        _s(u, N, T)
      ))), u = u.return;
    }
    m.length !== 0 && l.push({ event: n, listeners: m });
  }
  var vp = /\r\n?/g, Uv = /\u0000|\uFFFD/g;
  function Hh(l) {
    return (typeof l == "string" ? l : "" + l).replace(vp, `
`).replace(Uv, "");
  }
  function gp(l, n) {
    return n = Hh(n), Hh(l) === n;
  }
  function Ct(l, n, u, c, r, s) {
    switch (u) {
      case "children":
        typeof c == "string" ? n === "body" || n === "textarea" && c === "" || Cc(l, c) : (typeof c == "number" || typeof c == "bigint") && n !== "body" && Cc(l, "" + c);
        break;
      case "className":
        Go(l, "class", c);
        break;
      case "tabIndex":
        Go(l, "tabindex", c);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Go(l, u, c);
        break;
      case "style":
        B0(l, c, s);
        break;
      case "data":
        if (n !== "object") {
          Go(l, "data", c);
          break;
        }
      case "src":
      case "href":
        if (c === "" && (n !== "a" || u !== "href")) {
          l.removeAttribute(u);
          break;
        }
        if (c == null || typeof c == "function" || typeof c == "symbol" || typeof c == "boolean") {
          l.removeAttribute(u);
          break;
        }
        c = Li("" + c), l.setAttribute(u, c);
        break;
      case "action":
      case "formAction":
        if (typeof c == "function") {
          l.setAttribute(
            u,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof s == "function" && (u === "formAction" ? (n !== "input" && Ct(l, n, "name", r.name, r, null), Ct(
            l,
            n,
            "formEncType",
            r.formEncType,
            r,
            null
          ), Ct(
            l,
            n,
            "formMethod",
            r.formMethod,
            r,
            null
          ), Ct(
            l,
            n,
            "formTarget",
            r.formTarget,
            r,
            null
          )) : (Ct(l, n, "encType", r.encType, r, null), Ct(l, n, "method", r.method, r, null), Ct(l, n, "target", r.target, r, null)));
        if (c == null || typeof c == "symbol" || typeof c == "boolean") {
          l.removeAttribute(u);
          break;
        }
        c = Li("" + c), l.setAttribute(u, c);
        break;
      case "onClick":
        c != null && (l.onclick = wl);
        break;
      case "onScroll":
        c != null && at("scroll", l);
        break;
      case "onScrollEnd":
        c != null && at("scrollend", l);
        break;
      case "dangerouslySetInnerHTML":
        if (c != null) {
          if (typeof c != "object" || !("__html" in c))
            throw Error(B(61));
          if (u = c.__html, u != null) {
            if (r.children != null) throw Error(B(60));
            l.innerHTML = u;
          }
        }
        break;
      case "multiple":
        l.multiple = c && typeof c != "function" && typeof c != "symbol";
        break;
      case "muted":
        l.muted = c && typeof c != "function" && typeof c != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (c == null || typeof c == "function" || typeof c == "boolean" || typeof c == "symbol") {
          l.removeAttribute("xlink:href");
          break;
        }
        u = Li("" + c), l.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          u
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        c != null && typeof c != "function" && typeof c != "symbol" ? l.setAttribute(u, "" + c) : l.removeAttribute(u);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        c && typeof c != "function" && typeof c != "symbol" ? l.setAttribute(u, "") : l.removeAttribute(u);
        break;
      case "capture":
      case "download":
        c === !0 ? l.setAttribute(u, "") : c !== !1 && c != null && typeof c != "function" && typeof c != "symbol" ? l.setAttribute(u, c) : l.removeAttribute(u);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        c != null && typeof c != "function" && typeof c != "symbol" && !isNaN(c) && 1 <= c ? l.setAttribute(u, c) : l.removeAttribute(u);
        break;
      case "rowSpan":
      case "start":
        c == null || typeof c == "function" || typeof c == "symbol" || isNaN(c) ? l.removeAttribute(u) : l.setAttribute(u, c);
        break;
      case "popover":
        at("beforetoggle", l), at("toggle", l), ci(l, "popover", c);
        break;
      case "xlinkActuate":
        oi(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          c
        );
        break;
      case "xlinkArcrole":
        oi(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          c
        );
        break;
      case "xlinkRole":
        oi(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          c
        );
        break;
      case "xlinkShow":
        oi(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          c
        );
        break;
      case "xlinkTitle":
        oi(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          c
        );
        break;
      case "xlinkType":
        oi(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          c
        );
        break;
      case "xmlBase":
        oi(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          c
        );
        break;
      case "xmlLang":
        oi(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          c
        );
        break;
      case "xmlSpace":
        oi(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          c
        );
        break;
      case "is":
        ci(l, "is", c);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < u.length) || u[0] !== "o" && u[0] !== "O" || u[1] !== "n" && u[1] !== "N") && (u = Zg.get(u) || u, ci(l, u, c));
    }
  }
  function Sp(l, n, u, c, r, s) {
    switch (u) {
      case "style":
        B0(l, c, s);
        break;
      case "dangerouslySetInnerHTML":
        if (c != null) {
          if (typeof c != "object" || !("__html" in c))
            throw Error(B(61));
          if (u = c.__html, u != null) {
            if (r.children != null) throw Error(B(60));
            l.innerHTML = u;
          }
        }
        break;
      case "children":
        typeof c == "string" ? Cc(l, c) : (typeof c == "number" || typeof c == "bigint") && Cc(l, "" + c);
        break;
      case "onScroll":
        c != null && at("scroll", l);
        break;
      case "onScrollEnd":
        c != null && at("scrollend", l);
        break;
      case "onClick":
        c != null && (l.onclick = wl);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Rc.hasOwnProperty(u))
          e: {
            if (u[0] === "o" && u[1] === "n" && (r = u.endsWith("Capture"), n = u.slice(2, r ? u.length - 7 : void 0), s = l[Zt] || null, s = s != null ? s[u] : null, typeof s == "function" && l.removeEventListener(n, s, r), typeof c == "function")) {
              typeof s != "function" && s !== null && (u in l ? l[u] = null : l.hasAttribute(u) && l.removeAttribute(u)), l.addEventListener(n, c, r);
              break e;
            }
            u in l ? l[u] = c : c === !0 ? l.setAttribute(u, "") : ci(l, u, c);
          }
    }
  }
  function Kl(l, n, u) {
    switch (n) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        at("error", l), at("load", l);
        var c = !1, r = !1, s;
        for (s in u)
          if (u.hasOwnProperty(s)) {
            var m = u[s];
            if (m != null)
              switch (s) {
                case "src":
                  c = !0;
                  break;
                case "srcSet":
                  r = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(B(137, n));
                default:
                  Ct(l, n, s, m, u, null);
              }
          }
        r && Ct(l, n, "srcSet", u.srcSet, u, null), c && Ct(l, n, "src", u.src, u, null);
        return;
      case "input":
        at("invalid", l);
        var g = s = m = r = null, T = null, N = null;
        for (c in u)
          if (u.hasOwnProperty(c)) {
            var Z = u[c];
            if (Z != null)
              switch (c) {
                case "name":
                  r = Z;
                  break;
                case "type":
                  m = Z;
                  break;
                case "checked":
                  T = Z;
                  break;
                case "defaultChecked":
                  N = Z;
                  break;
                case "value":
                  s = Z;
                  break;
                case "defaultValue":
                  g = Z;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (Z != null)
                    throw Error(B(137, n));
                  break;
                default:
                  Ct(l, n, c, Z, u, null);
              }
          }
        md(
          l,
          s,
          g,
          T,
          N,
          m,
          r,
          !1
        );
        return;
      case "select":
        at("invalid", l), c = m = s = null;
        for (r in u)
          if (u.hasOwnProperty(r) && (g = u[r], g != null))
            switch (r) {
              case "value":
                s = g;
                break;
              case "defaultValue":
                m = g;
                break;
              case "multiple":
                c = g;
              default:
                Ct(l, n, r, g, u, null);
            }
        n = s, u = m, l.multiple = !!c, n != null ? ou(l, !!c, n, !1) : u != null && ou(l, !!c, u, !0);
        return;
      case "textarea":
        at("invalid", l), s = r = c = null;
        for (m in u)
          if (u.hasOwnProperty(m) && (g = u[m], g != null))
            switch (m) {
              case "value":
                c = g;
                break;
              case "defaultValue":
                r = g;
                break;
              case "children":
                s = g;
                break;
              case "dangerouslySetInnerHTML":
                if (g != null) throw Error(B(91));
                break;
              default:
                Ct(l, n, m, g, u, null);
            }
        Ym(l, c, r, s);
        return;
      case "option":
        for (T in u)
          u.hasOwnProperty(T) && (c = u[T], c != null) && (T === "selected" ? l.selected = c && typeof c != "function" && typeof c != "symbol" : Ct(l, n, T, c, u, null));
        return;
      case "dialog":
        at("beforetoggle", l), at("toggle", l), at("cancel", l), at("close", l);
        break;
      case "iframe":
      case "object":
        at("load", l);
        break;
      case "video":
      case "audio":
        for (c = 0; c < ho.length; c++)
          at(ho[c], l);
        break;
      case "image":
        at("error", l), at("load", l);
        break;
      case "details":
        at("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        at("error", l), at("load", l);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (N in u)
          if (u.hasOwnProperty(N) && (c = u[N], c != null))
            switch (N) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(B(137, n));
              default:
                Ct(l, n, N, c, u, null);
            }
        return;
      default:
        if (Gm(n)) {
          for (Z in u)
            u.hasOwnProperty(Z) && (c = u[Z], c !== void 0 && Sp(
              l,
              n,
              Z,
              c,
              u,
              void 0
            ));
          return;
        }
    }
    for (g in u)
      u.hasOwnProperty(g) && (c = u[g], c != null && Ct(l, n, g, c, u, null));
  }
  function lS(l, n, u, c) {
    switch (n) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var r = null, s = null, m = null, g = null, T = null, N = null, Z = null;
        for (G in u) {
          var W = u[G];
          if (u.hasOwnProperty(G) && W != null)
            switch (G) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                T = W;
              default:
                c.hasOwnProperty(G) || Ct(l, n, G, null, c, W);
            }
        }
        for (var x in c) {
          var G = c[x];
          if (W = u[x], c.hasOwnProperty(x) && (G != null || W != null))
            switch (x) {
              case "type":
                s = G;
                break;
              case "name":
                r = G;
                break;
              case "checked":
                N = G;
                break;
              case "defaultChecked":
                Z = G;
                break;
              case "value":
                m = G;
                break;
              case "defaultValue":
                g = G;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (G != null)
                  throw Error(B(137, n));
                break;
              default:
                G !== W && Ct(
                  l,
                  n,
                  x,
                  G,
                  c,
                  W
                );
            }
        }
        hd(
          l,
          m,
          g,
          T,
          N,
          Z,
          s,
          r
        );
        return;
      case "select":
        G = m = g = x = null;
        for (s in u)
          if (T = u[s], u.hasOwnProperty(s) && T != null)
            switch (s) {
              case "value":
                break;
              case "multiple":
                G = T;
              default:
                c.hasOwnProperty(s) || Ct(
                  l,
                  n,
                  s,
                  null,
                  c,
                  T
                );
            }
        for (r in c)
          if (s = c[r], T = u[r], c.hasOwnProperty(r) && (s != null || T != null))
            switch (r) {
              case "value":
                x = s;
                break;
              case "defaultValue":
                g = s;
                break;
              case "multiple":
                m = s;
              default:
                s !== T && Ct(
                  l,
                  n,
                  r,
                  s,
                  c,
                  T
                );
            }
        n = g, u = m, c = G, x != null ? ou(l, !!u, x, !1) : !!c != !!u && (n != null ? ou(l, !!u, n, !0) : ou(l, !!u, u ? [] : "", !1));
        return;
      case "textarea":
        G = x = null;
        for (g in u)
          if (r = u[g], u.hasOwnProperty(g) && r != null && !c.hasOwnProperty(g))
            switch (g) {
              case "value":
                break;
              case "children":
                break;
              default:
                Ct(l, n, g, null, c, r);
            }
        for (m in c)
          if (r = c[m], s = u[m], c.hasOwnProperty(m) && (r != null || s != null))
            switch (m) {
              case "value":
                x = r;
                break;
              case "defaultValue":
                G = r;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (r != null) throw Error(B(91));
                break;
              default:
                r !== s && Ct(l, n, m, r, c, s);
            }
        N0(l, x, G);
        return;
      case "option":
        for (var he in u)
          x = u[he], u.hasOwnProperty(he) && x != null && !c.hasOwnProperty(he) && (he === "selected" ? l.selected = !1 : Ct(
            l,
            n,
            he,
            null,
            c,
            x
          ));
        for (T in c)
          x = c[T], G = u[T], c.hasOwnProperty(T) && x !== G && (x != null || G != null) && (T === "selected" ? l.selected = x && typeof x != "function" && typeof x != "symbol" : Ct(
            l,
            n,
            T,
            x,
            c,
            G
          ));
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var _e in u)
          x = u[_e], u.hasOwnProperty(_e) && x != null && !c.hasOwnProperty(_e) && Ct(l, n, _e, null, c, x);
        for (N in c)
          if (x = c[N], G = u[N], c.hasOwnProperty(N) && x !== G && (x != null || G != null))
            switch (N) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (x != null)
                  throw Error(B(137, n));
                break;
              default:
                Ct(
                  l,
                  n,
                  N,
                  x,
                  c,
                  G
                );
            }
        return;
      default:
        if (Gm(n)) {
          for (var Nt in u)
            x = u[Nt], u.hasOwnProperty(Nt) && x !== void 0 && !c.hasOwnProperty(Nt) && Sp(
              l,
              n,
              Nt,
              void 0,
              c,
              x
            );
          for (Z in c)
            x = c[Z], G = u[Z], !c.hasOwnProperty(Z) || x === G || x === void 0 && G === void 0 || Sp(
              l,
              n,
              Z,
              x,
              c,
              G
            );
          return;
        }
    }
    for (var C in u)
      x = u[C], u.hasOwnProperty(C) && x != null && !c.hasOwnProperty(C) && Ct(l, n, C, null, c, x);
    for (W in c)
      x = c[W], G = u[W], !c.hasOwnProperty(W) || x === G || x == null && G == null || Ct(l, n, W, x, c, G);
  }
  function Nh(l) {
    switch (l) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function bp() {
    if (typeof performance.getEntriesByType == "function") {
      for (var l = 0, n = 0, u = performance.getEntriesByType("resource"), c = 0; c < u.length; c++) {
        var r = u[c], s = r.transferSize, m = r.initiatorType, g = r.duration;
        if (s && g && Nh(m)) {
          for (m = 0, g = r.responseEnd, c += 1; c < u.length; c++) {
            var T = u[c], N = T.startTime;
            if (N > g) break;
            var Z = T.transferSize, W = T.initiatorType;
            Z && Nh(W) && (T = T.responseEnd, m += Z * (T < g ? 1 : (g - N) / (T - N)));
          }
          if (--c, n += 8 * (s + m) / (r.duration / 1e3), l++, 10 < l) break;
        }
      }
      if (0 < l) return n / l / 1e6;
    }
    return navigator.connection && (l = navigator.connection.downlink, typeof l == "number") ? l : 5;
  }
  var Ds = null, Bh = null;
  function Rs(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function Tf(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Hv(l, n) {
    if (l === 0)
      switch (n) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return l === 1 && n === "foreignObject" ? 0 : l;
  }
  function xh(l, n) {
    return l === "textarea" || l === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.children == "bigint" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null;
  }
  var Af = null;
  function Nv() {
    var l = window.event;
    return l && l.type === "popstate" ? l === Af ? !1 : (Af = l, !0) : (Af = null, !1);
  }
  var Bv = typeof setTimeout == "function" ? setTimeout : void 0, jh = typeof clearTimeout == "function" ? clearTimeout : void 0, Ep = typeof Promise == "function" ? Promise : void 0, Of = typeof queueMicrotask == "function" ? queueMicrotask : typeof Ep < "u" ? function(l) {
    return Ep.resolve(null).then(l).catch(xv);
  } : Bv;
  function xv(l) {
    setTimeout(function() {
      throw l;
    });
  }
  function Lu(l) {
    return l === "head";
  }
  function Ms(l, n) {
    var u = n, c = 0;
    do {
      var r = u.nextSibling;
      if (l.removeChild(u), r && r.nodeType === 8)
        if (u = r.data, u === "/$" || u === "/&") {
          if (c === 0) {
            l.removeChild(r), Cf(n);
            return;
          }
          c--;
        } else if (u === "$" || u === "$?" || u === "$~" || u === "$!" || u === "&")
          c++;
        else if (u === "html")
          Di(l.ownerDocument.documentElement);
        else if (u === "head") {
          u = l.ownerDocument.head, Di(u);
          for (var s = u.firstChild; s; ) {
            var m = s.nextSibling, g = s.nodeName;
            s[Yo] || g === "SCRIPT" || g === "STYLE" || g === "LINK" && s.rel.toLowerCase() === "stylesheet" || u.removeChild(s), s = m;
          }
        } else
          u === "body" && Di(l.ownerDocument.body);
      u = r;
    } while (u);
    Cf(n);
  }
  function Tp(l, n) {
    var u = l;
    l = 0;
    do {
      var c = u.nextSibling;
      if (u.nodeType === 1 ? n ? (u._stashedDisplay = u.style.display, u.style.display = "none") : (u.style.display = u._stashedDisplay || "", u.getAttribute("style") === "" && u.removeAttribute("style")) : u.nodeType === 3 && (n ? (u._stashedText = u.nodeValue, u.nodeValue = "") : u.nodeValue = u._stashedText || ""), c && c.nodeType === 8)
        if (u = c.data, u === "/$") {
          if (l === 0) break;
          l--;
        } else
          u !== "$" && u !== "$?" && u !== "$~" && u !== "$!" || l++;
      u = c;
    } while (u);
  }
  function fl(l) {
    var n = l.firstChild;
    for (n && n.nodeType === 10 && (n = n.nextSibling); n; ) {
      var u = n;
      switch (n = n.nextSibling, u.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          fl(u), Qi(u);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (u.rel.toLowerCase() === "stylesheet") continue;
      }
      l.removeChild(u);
    }
  }
  function Ap(l, n, u, c) {
    for (; l.nodeType === 1; ) {
      var r = u;
      if (l.nodeName.toLowerCase() !== n.toLowerCase()) {
        if (!c && (l.nodeName !== "INPUT" || l.type !== "hidden"))
          break;
      } else if (c) {
        if (!l[Yo])
          switch (n) {
            case "meta":
              if (!l.hasAttribute("itemprop")) break;
              return l;
            case "link":
              if (s = l.getAttribute("rel"), s === "stylesheet" && l.hasAttribute("data-precedence"))
                break;
              if (s !== r.rel || l.getAttribute("href") !== (r.href == null || r.href === "" ? null : r.href) || l.getAttribute("crossorigin") !== (r.crossOrigin == null ? null : r.crossOrigin) || l.getAttribute("title") !== (r.title == null ? null : r.title))
                break;
              return l;
            case "style":
              if (l.hasAttribute("data-precedence")) break;
              return l;
            case "script":
              if (s = l.getAttribute("src"), (s !== (r.src == null ? null : r.src) || l.getAttribute("type") !== (r.type == null ? null : r.type) || l.getAttribute("crossorigin") !== (r.crossOrigin == null ? null : r.crossOrigin)) && s && l.hasAttribute("async") && !l.hasAttribute("itemprop"))
                break;
              return l;
            default:
              return l;
          }
      } else if (n === "input" && l.type === "hidden") {
        var s = r.name == null ? null : "" + r.name;
        if (r.type === "hidden" && l.getAttribute("name") === s)
          return l;
      } else return l;
      if (l = $l(l.nextSibling), l === null) break;
    }
    return null;
  }
  function aS(l, n, u) {
    if (n === "") return null;
    for (; l.nodeType !== 3; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !u || (l = $l(l.nextSibling), l === null)) return null;
    return l;
  }
  function Je(l, n) {
    for (; l.nodeType !== 8; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !n || (l = $l(l.nextSibling), l === null)) return null;
    return l;
  }
  function Op(l) {
    return l.data === "$?" || l.data === "$~";
  }
  function Un(l) {
    return l.data === "$!" || l.data === "$?" && l.ownerDocument.readyState !== "loading";
  }
  function zf(l, n) {
    var u = l.ownerDocument;
    if (l.data === "$~") l._reactRetry = n;
    else if (l.data !== "$?" || u.readyState !== "loading")
      n();
    else {
      var c = function() {
        n(), u.removeEventListener("DOMContentLoaded", c);
      };
      u.addEventListener("DOMContentLoaded", c), l._reactRetry = c;
    }
  }
  function $l(l) {
    for (; l != null; l = l.nextSibling) {
      var n = l.nodeType;
      if (n === 1 || n === 3) break;
      if (n === 8) {
        if (n = l.data, n === "$" || n === "$!" || n === "$?" || n === "$~" || n === "&" || n === "F!" || n === "F")
          break;
        if (n === "/$" || n === "/&") return null;
      }
    }
    return l;
  }
  var _f = null;
  function Yh(l) {
    l = l.nextSibling;
    for (var n = 0; l; ) {
      if (l.nodeType === 8) {
        var u = l.data;
        if (u === "/$" || u === "/&") {
          if (n === 0)
            return $l(l.nextSibling);
          n--;
        } else
          u !== "$" && u !== "$!" && u !== "$?" && u !== "$~" && u !== "&" || n++;
      }
      l = l.nextSibling;
    }
    return null;
  }
  function qh(l) {
    l = l.previousSibling;
    for (var n = 0; l; ) {
      if (l.nodeType === 8) {
        var u = l.data;
        if (u === "$" || u === "$!" || u === "$?" || u === "$~" || u === "&") {
          if (n === 0) return l;
          n--;
        } else u !== "/$" && u !== "/&" || n++;
      }
      l = l.previousSibling;
    }
    return null;
  }
  function Fn(l, n, u) {
    switch (n = Rs(u), l) {
      case "html":
        if (l = n.documentElement, !l) throw Error(B(452));
        return l;
      case "head":
        if (l = n.head, !l) throw Error(B(453));
        return l;
      case "body":
        if (l = n.body, !l) throw Error(B(454));
        return l;
      default:
        throw Error(B(451));
    }
  }
  function Di(l) {
    for (var n = l.attributes; n.length; )
      l.removeAttributeNode(n[0]);
    Qi(l);
  }
  var Za = /* @__PURE__ */ new Map(), Gh = /* @__PURE__ */ new Set();
  function mo(l) {
    return typeof l.getRootNode == "function" ? l.getRootNode() : l.nodeType === 9 ? l : l.ownerDocument;
  }
  var ml = j.d;
  j.d = {
    f: zp,
    r: nS,
    D: Ol,
    C: w,
    L: Ot,
    m: uS,
    X: Dp,
    S: _p,
    M: Ri
  };
  function zp() {
    var l = ml.f(), n = vs();
    return l || n;
  }
  function nS(l) {
    var n = _c(l);
    n !== null && n.tag === 5 && n.type === "form" ? of(n) : ml.r(l);
  }
  var yo = typeof document > "u" ? null : document;
  function jv(l, n, u) {
    var c = yo;
    if (c && typeof n == "string" && n) {
      var r = Sn(n);
      r = 'link[rel="' + l + '"][href="' + r + '"]', typeof u == "string" && (r += '[crossorigin="' + u + '"]'), Gh.has(r) || (Gh.add(r), l = { rel: l, crossOrigin: u, href: n }, c.querySelector(r) === null && (n = c.createElement("link"), Kl(n, "link", l), Tl(n), c.head.appendChild(n)));
    }
  }
  function Ol(l) {
    ml.D(l), jv("dns-prefetch", l, null);
  }
  function w(l, n) {
    ml.C(l, n), jv("preconnect", l, n);
  }
  function Ot(l, n, u) {
    ml.L(l, n, u);
    var c = yo;
    if (c && l && n) {
      var r = 'link[rel="preload"][as="' + Sn(n) + '"]';
      n === "image" && u && u.imageSrcSet ? (r += '[imagesrcset="' + Sn(
        u.imageSrcSet
      ) + '"]', typeof u.imageSizes == "string" && (r += '[imagesizes="' + Sn(
        u.imageSizes
      ) + '"]')) : r += '[href="' + Sn(l) + '"]';
      var s = r;
      switch (n) {
        case "style":
          s = Vu(l);
          break;
        case "script":
          s = po(l);
      }
      Za.has(s) || (l = de(
        {
          rel: "preload",
          href: n === "image" && u && u.imageSrcSet ? void 0 : l,
          as: n
        },
        u
      ), Za.set(s, l), c.querySelector(r) !== null || n === "style" && c.querySelector(Hn(s)) || n === "script" && c.querySelector(Df(s)) || (n = c.createElement("link"), Kl(n, "link", l), Tl(n), c.head.appendChild(n)));
    }
  }
  function uS(l, n) {
    ml.m(l, n);
    var u = yo;
    if (u && l) {
      var c = n && typeof n.as == "string" ? n.as : "script", r = 'link[rel="modulepreload"][as="' + Sn(c) + '"][href="' + Sn(l) + '"]', s = r;
      switch (c) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          s = po(l);
      }
      if (!Za.has(s) && (l = de({ rel: "modulepreload", href: l }, n), Za.set(s, l), u.querySelector(r) === null)) {
        switch (c) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (u.querySelector(Df(s)))
              return;
        }
        c = u.createElement("link"), Kl(c, "link", l), Tl(c), u.head.appendChild(c);
      }
    }
  }
  function _p(l, n, u) {
    ml.S(l, n, u);
    var c = yo;
    if (c && l) {
      var r = Dc(c).hoistableStyles, s = Vu(l);
      n = n || "default";
      var m = r.get(s);
      if (!m) {
        var g = { loading: 0, preload: null };
        if (m = c.querySelector(
          Hn(s)
        ))
          g.loading = 5;
        else {
          l = de(
            { rel: "stylesheet", href: l, "data-precedence": n },
            u
          ), (u = Za.get(s)) && wh(l, u);
          var T = m = c.createElement("link");
          Tl(T), Kl(T, "link", l), T._p = new Promise(function(N, Z) {
            T.onload = N, T.onerror = Z;
          }), T.addEventListener("load", function() {
            g.loading |= 1;
          }), T.addEventListener("error", function() {
            g.loading |= 2;
          }), g.loading |= 4, Hs(m, n, c);
        }
        m = {
          type: "stylesheet",
          instance: m,
          count: 1,
          state: g
        }, r.set(s, m);
      }
    }
  }
  function Dp(l, n) {
    ml.X(l, n);
    var u = yo;
    if (u && l) {
      var c = Dc(u).hoistableScripts, r = po(l), s = c.get(r);
      s || (s = u.querySelector(Df(r)), s || (l = de({ src: l, async: !0 }, n), (n = Za.get(r)) && Xh(l, n), s = u.createElement("script"), Tl(s), Kl(s, "link", l), u.head.appendChild(s)), s = {
        type: "script",
        instance: s,
        count: 1,
        state: null
      }, c.set(r, s));
    }
  }
  function Ri(l, n) {
    ml.M(l, n);
    var u = yo;
    if (u && l) {
      var c = Dc(u).hoistableScripts, r = po(l), s = c.get(r);
      s || (s = u.querySelector(Df(r)), s || (l = de({ src: l, async: !0, type: "module" }, n), (n = Za.get(r)) && Xh(l, n), s = u.createElement("script"), Tl(s), Kl(s, "link", l), u.head.appendChild(s)), s = {
        type: "script",
        instance: s,
        count: 1,
        state: null
      }, c.set(r, s));
    }
  }
  function Mi(l, n, u, c) {
    var r = (r = ze.current) ? mo(r) : null;
    if (!r) throw Error(B(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof u.precedence == "string" && typeof u.href == "string" ? (n = Vu(u.href), u = Dc(
          r
        ).hoistableStyles, c = u.get(n), c || (c = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, u.set(n, c)), c) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (u.rel === "stylesheet" && typeof u.href == "string" && typeof u.precedence == "string") {
          l = Vu(u.href);
          var s = Dc(
            r
          ).hoistableStyles, m = s.get(l);
          if (m || (r = r.ownerDocument || r, m = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, s.set(l, m), (s = r.querySelector(
            Hn(l)
          )) && !s._p && (m.instance = s, m.state.loading = 5), Za.has(l) || (u = {
            rel: "preload",
            as: "style",
            href: u.href,
            crossOrigin: u.crossOrigin,
            integrity: u.integrity,
            media: u.media,
            hrefLang: u.hrefLang,
            referrerPolicy: u.referrerPolicy
          }, Za.set(l, u), s || Us(
            r,
            l,
            u,
            m.state
          ))), n && c === null)
            throw Error(B(528, ""));
          return m;
        }
        if (n && c !== null)
          throw Error(B(529, ""));
        return null;
      case "script":
        return n = u.async, u = u.src, typeof u == "string" && n && typeof n != "function" && typeof n != "symbol" ? (n = po(u), u = Dc(
          r
        ).hoistableScripts, c = u.get(n), c || (c = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, u.set(n, c)), c) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(B(444, l));
    }
  }
  function Vu(l) {
    return 'href="' + Sn(l) + '"';
  }
  function Hn(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function Cs(l) {
    return de({}, l, {
      "data-precedence": l.precedence,
      precedence: null
    });
  }
  function Us(l, n, u, c) {
    l.querySelector('link[rel="preload"][as="style"][' + n + "]") ? c.loading = 1 : (n = l.createElement("link"), c.preload = n, n.addEventListener("load", function() {
      return c.loading |= 1;
    }), n.addEventListener("error", function() {
      return c.loading |= 2;
    }), Kl(n, "link", u), Tl(n), l.head.appendChild(n));
  }
  function po(l) {
    return '[src="' + Sn(l) + '"]';
  }
  function Df(l) {
    return "script[async]" + l;
  }
  function Rp(l, n, u) {
    if (n.count++, n.instance === null)
      switch (n.type) {
        case "style":
          var c = l.querySelector(
            'style[data-href~="' + Sn(u.href) + '"]'
          );
          if (c)
            return n.instance = c, Tl(c), c;
          var r = de({}, u, {
            "data-href": u.href,
            "data-precedence": u.precedence,
            href: null,
            precedence: null
          });
          return c = (l.ownerDocument || l).createElement(
            "style"
          ), Tl(c), Kl(c, "style", r), Hs(c, u.precedence, l), n.instance = c;
        case "stylesheet":
          r = Vu(u.href);
          var s = l.querySelector(
            Hn(r)
          );
          if (s)
            return n.state.loading |= 4, n.instance = s, Tl(s), s;
          c = Cs(u), (r = Za.get(r)) && wh(c, r), s = (l.ownerDocument || l).createElement("link"), Tl(s);
          var m = s;
          return m._p = new Promise(function(g, T) {
            m.onload = g, m.onerror = T;
          }), Kl(s, "link", c), n.state.loading |= 4, Hs(s, u.precedence, l), n.instance = s;
        case "script":
          return s = po(u.src), (r = l.querySelector(
            Df(s)
          )) ? (n.instance = r, Tl(r), r) : (c = u, (r = Za.get(s)) && (c = de({}, u), Xh(c, r)), l = l.ownerDocument || l, r = l.createElement("script"), Tl(r), Kl(r, "link", c), l.head.appendChild(r), n.instance = r);
        case "void":
          return null;
        default:
          throw Error(B(443, n.type));
      }
    else
      n.type === "stylesheet" && (n.state.loading & 4) === 0 && (c = n.instance, n.state.loading |= 4, Hs(c, u.precedence, l));
    return n.instance;
  }
  function Hs(l, n, u) {
    for (var c = u.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), r = c.length ? c[c.length - 1] : null, s = r, m = 0; m < c.length; m++) {
      var g = c[m];
      if (g.dataset.precedence === n) s = g;
      else if (s !== r) break;
    }
    s ? s.parentNode.insertBefore(l, s.nextSibling) : (n = u.nodeType === 9 ? u.head : u, n.insertBefore(l, n.firstChild));
  }
  function wh(l, n) {
    l.crossOrigin == null && (l.crossOrigin = n.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = n.referrerPolicy), l.title == null && (l.title = n.title);
  }
  function Xh(l, n) {
    l.crossOrigin == null && (l.crossOrigin = n.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = n.referrerPolicy), l.integrity == null && (l.integrity = n.integrity);
  }
  var Ns = null;
  function Qh(l, n, u) {
    if (Ns === null) {
      var c = /* @__PURE__ */ new Map(), r = Ns = /* @__PURE__ */ new Map();
      r.set(u, c);
    } else
      r = Ns, c = r.get(u), c || (c = /* @__PURE__ */ new Map(), r.set(u, c));
    if (c.has(l)) return c;
    for (c.set(l, null), u = u.getElementsByTagName(l), r = 0; r < u.length; r++) {
      var s = u[r];
      if (!(s[Yo] || s[vl] || l === "link" && s.getAttribute("rel") === "stylesheet") && s.namespaceURI !== "http://www.w3.org/2000/svg") {
        var m = s.getAttribute(n) || "";
        m = l + m;
        var g = c.get(m);
        g ? g.push(s) : c.set(m, [s]);
      }
    }
    return c;
  }
  function Mp(l, n, u) {
    l = l.ownerDocument || l, l.head.insertBefore(
      u,
      n === "title" ? l.querySelector("head > title") : null
    );
  }
  function Cp(l, n, u) {
    if (u === 1 || n.itemProp != null) return !1;
    switch (l) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof n.precedence != "string" || typeof n.href != "string" || n.href === "")
          break;
        return !0;
      case "link":
        if (typeof n.rel != "string" || typeof n.href != "string" || n.href === "" || n.onLoad || n.onError)
          break;
        return n.rel === "stylesheet" ? (l = n.disabled, typeof n.precedence == "string" && l == null) : !0;
      case "script":
        if (n.async && typeof n.async != "function" && typeof n.async != "symbol" && !n.onLoad && !n.onError && n.src && typeof n.src == "string")
          return !0;
    }
    return !1;
  }
  function Lh(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  function fn(l, n, u, c) {
    if (u.type === "stylesheet" && (typeof c.media != "string" || matchMedia(c.media).matches !== !1) && (u.state.loading & 4) === 0) {
      if (u.instance === null) {
        var r = Vu(c.href), s = n.querySelector(
          Hn(r)
        );
        if (s) {
          n = s._p, n !== null && typeof n == "object" && typeof n.then == "function" && (l.count++, l = Rf.bind(l), n.then(l, l)), u.state.loading |= 4, u.instance = s, Tl(s);
          return;
        }
        s = n.ownerDocument || n, c = Cs(c), (r = Za.get(r)) && wh(c, r), s = s.createElement("link"), Tl(s);
        var m = s;
        m._p = new Promise(function(g, T) {
          m.onload = g, m.onerror = T;
        }), Kl(s, "link", c), u.instance = s;
      }
      l.stylesheets === null && (l.stylesheets = /* @__PURE__ */ new Map()), l.stylesheets.set(u, n), (n = u.state.preload) && (u.state.loading & 3) === 0 && (l.count++, u = Rf.bind(l), n.addEventListener("load", u), n.addEventListener("error", u));
    }
  }
  var Nn = 0;
  function In(l, n) {
    return l.stylesheets && l.count === 0 && Zh(l, l.stylesheets), 0 < l.count || 0 < l.imgCount ? function(u) {
      var c = setTimeout(function() {
        if (l.stylesheets && Zh(l, l.stylesheets), l.unsuspend) {
          var s = l.unsuspend;
          l.unsuspend = null, s();
        }
      }, 6e4 + n);
      0 < l.imgBytes && Nn === 0 && (Nn = 62500 * bp());
      var r = setTimeout(
        function() {
          if (l.waitingForImages = !1, l.count === 0 && (l.stylesheets && Zh(l, l.stylesheets), l.unsuspend)) {
            var s = l.unsuspend;
            l.unsuspend = null, s();
          }
        },
        (l.imgBytes > Nn ? 50 : 800) + n
      );
      return l.unsuspend = u, function() {
        l.unsuspend = null, clearTimeout(c), clearTimeout(r);
      };
    } : null;
  }
  function Rf() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) Zh(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        this.unsuspend = null, l();
      }
    }
  }
  var Vh = null;
  function Zh(l, n) {
    l.stylesheets = null, l.unsuspend !== null && (l.count++, Vh = /* @__PURE__ */ new Map(), n.forEach(iS, l), Vh = null, Rf.call(l));
  }
  function iS(l, n) {
    if (!(n.state.loading & 4)) {
      var u = Vh.get(l);
      if (u) var c = u.get(null);
      else {
        u = /* @__PURE__ */ new Map(), Vh.set(l, u);
        for (var r = l.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), s = 0; s < r.length; s++) {
          var m = r[s];
          (m.nodeName === "LINK" || m.getAttribute("media") !== "not all") && (u.set(m.dataset.precedence, m), c = m);
        }
        c && u.set(null, c);
      }
      r = n.instance, m = r.getAttribute("data-precedence"), s = u.get(m) || c, s === c && u.set(null, r), u.set(m, r), this.count++, c = Rf.bind(this), r.addEventListener("load", c), r.addEventListener("error", c), s ? s.parentNode.insertBefore(r, s.nextSibling) : (l = l.nodeType === 9 ? l.head : l, l.insertBefore(r, l.firstChild)), n.state.loading |= 4;
    }
  }
  var rl = {
    $$typeof: St,
    Provider: null,
    Consumer: null,
    _currentValue: P,
    _currentValue2: P,
    _threadCount: 0
  };
  function cS(l, n, u, c, r, s, m, g, T) {
    this.tag = 1, this.containerInfo = l, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Gl(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Gl(0), this.hiddenUpdates = Gl(null), this.identifierPrefix = c, this.onUncaughtError = r, this.onCaughtError = s, this.onRecoverableError = m, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = T, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Jh(l, n, u, c, r, s, m, g, T, N, Z, W) {
    return l = new cS(
      l,
      n,
      u,
      m,
      T,
      N,
      Z,
      W,
      g
    ), n = 1, s === !0 && (n |= 24), s = Ha(3, null, null, n), l.current = s, s.stateNode = l, n = jd(), n.refCount++, l.pooledCache = n, n.refCount++, s.memoizedState = {
      element: c,
      isDehydrated: u,
      cache: n
    }, Gd(s), l;
  }
  function Kh(l) {
    return l ? (l = wc, l) : wc;
  }
  function vo(l, n, u, c, r, s) {
    r = Kh(r), c.context === null ? c.context = r : c.pendingContext = r, c = yi(n), c.payload = { element: u }, s = s === void 0 ? null : s, s !== null && (c.callback = s), u = pi(l, c, n), u !== null && (Va(u, l, n), Du(u, l, n));
  }
  function Yv(l, n) {
    if (l = l.memoizedState, l !== null && l.dehydrated !== null) {
      var u = l.retryLane;
      l.retryLane = u !== 0 && u < n ? u : n;
    }
  }
  function Bs(l, n) {
    Yv(l, n), (l = l.alternate) && Yv(l, n);
  }
  function qv(l) {
    if (l.tag === 13 || l.tag === 31) {
      var n = ta(l, 67108864);
      n !== null && Va(n, l, 67108864), Bs(l, 67108864);
    }
  }
  function Gv(l) {
    if (l.tag === 13 || l.tag === 31) {
      var n = Ta();
      n = Da(n);
      var u = ta(l, n);
      u !== null && Va(u, l, n), Bs(l, n);
    }
  }
  var Ci = !0;
  function oa(l, n, u, c) {
    var r = X.T;
    X.T = null;
    var s = j.p;
    try {
      j.p = 2, Bn(l, n, u, c);
    } finally {
      j.p = s, X.T = r;
    }
  }
  function Zu(l, n, u, c) {
    var r = X.T;
    X.T = null;
    var s = j.p;
    try {
      j.p = 8, Bn(l, n, u, c);
    } finally {
      j.p = s, X.T = r;
    }
  }
  function Bn(l, n, u, c) {
    if (Ci) {
      var r = kl(c);
      if (r === null)
        Ef(
          l,
          n,
          c,
          $h,
          u
        ), fa(l, c);
      else if (Hp(
        r,
        l,
        n,
        u,
        c
      ))
        c.stopPropagation();
      else if (fa(l, c), n & 4 && -1 < Fl.indexOf(l)) {
        for (; r !== null; ) {
          var s = _c(r);
          if (s !== null)
            switch (s.tag) {
              case 3:
                if (s = s.stateNode, s.current.memoizedState.isDehydrated) {
                  var m = se(s.pendingLanes);
                  if (m !== 0) {
                    var g = s;
                    for (g.pendingLanes |= 2, g.entangledLanes |= 2; m; ) {
                      var T = 1 << 31 - Rl(m);
                      g.entanglements[1] |= T, m &= ~T;
                    }
                    Wn(s), (ht & 6) === 0 && (ps = El() + 500, Es(0));
                  }
                }
                break;
              case 31:
              case 13:
                g = ta(s, 2), g !== null && Va(g, s, 2), vs(), Bs(s, 2);
            }
          if (s = kl(c), s === null && Ef(
            l,
            n,
            c,
            $h,
            u
          ), s === r) break;
          r = s;
        }
        r !== null && c.stopPropagation();
      } else
        Ef(
          l,
          n,
          c,
          null,
          u
        );
    }
  }
  function kl(l) {
    return l = yd(l), Up(l);
  }
  var $h = null;
  function Up(l) {
    if ($h = null, l = zc(l), l !== null) {
      var n = Re(l);
      if (n === null) l = null;
      else {
        var u = n.tag;
        if (u === 13) {
          if (l = je(n), l !== null) return l;
          l = null;
        } else if (u === 31) {
          if (l = gt(n), l !== null) return l;
          l = null;
        } else if (u === 3) {
          if (n.stateNode.current.memoizedState.isDehydrated)
            return n.tag === 3 ? n.stateNode.containerInfo : null;
          l = null;
        } else n !== l && (l = null);
      }
    }
    return $h = l, null;
  }
  function xs(l) {
    switch (l) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (qi()) {
          case tr:
            return 2;
          case xo:
            return 8;
          case Gi:
          case wi:
            return 32;
          case lr:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Mf = !1, Pn = null, zl = null, Wl = null, rn = /* @__PURE__ */ new Map(), yc = /* @__PURE__ */ new Map(), Aa = [], Fl = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function fa(l, n) {
    switch (l) {
      case "focusin":
      case "focusout":
        Pn = null;
        break;
      case "dragenter":
      case "dragleave":
        zl = null;
        break;
      case "mouseover":
      case "mouseout":
        Wl = null;
        break;
      case "pointerover":
      case "pointerout":
        rn.delete(n.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        yc.delete(n.pointerId);
    }
  }
  function xn(l, n, u, c, r, s) {
    return l === null || l.nativeEvent !== s ? (l = {
      blockedOn: n,
      domEventName: u,
      eventSystemFlags: c,
      nativeEvent: s,
      targetContainers: [r]
    }, n !== null && (n = _c(n), n !== null && qv(n)), l) : (l.eventSystemFlags |= c, n = l.targetContainers, r !== null && n.indexOf(r) === -1 && n.push(r), l);
  }
  function Hp(l, n, u, c, r) {
    switch (n) {
      case "focusin":
        return Pn = xn(
          Pn,
          l,
          n,
          u,
          c,
          r
        ), !0;
      case "dragenter":
        return zl = xn(
          zl,
          l,
          n,
          u,
          c,
          r
        ), !0;
      case "mouseover":
        return Wl = xn(
          Wl,
          l,
          n,
          u,
          c,
          r
        ), !0;
      case "pointerover":
        var s = r.pointerId;
        return rn.set(
          s,
          xn(
            rn.get(s) || null,
            l,
            n,
            u,
            c,
            r
          )
        ), !0;
      case "gotpointercapture":
        return s = r.pointerId, yc.set(
          s,
          xn(
            yc.get(s) || null,
            l,
            n,
            u,
            c,
            r
          )
        ), !0;
    }
    return !1;
  }
  function wv(l) {
    var n = zc(l.target);
    if (n !== null) {
      var u = Re(n);
      if (u !== null) {
        if (n = u.tag, n === 13) {
          if (n = je(u), n !== null) {
            l.blockedOn = n, sd(l.priority, function() {
              Gv(u);
            });
            return;
          }
        } else if (n === 31) {
          if (n = gt(u), n !== null) {
            l.blockedOn = n, sd(l.priority, function() {
              Gv(u);
            });
            return;
          }
        } else if (n === 3 && u.stateNode.current.memoizedState.isDehydrated) {
          l.blockedOn = u.tag === 3 ? u.stateNode.containerInfo : null;
          return;
        }
      }
    }
    l.blockedOn = null;
  }
  function kh(l) {
    if (l.blockedOn !== null) return !1;
    for (var n = l.targetContainers; 0 < n.length; ) {
      var u = kl(l.nativeEvent);
      if (u === null) {
        u = l.nativeEvent;
        var c = new u.constructor(
          u.type,
          u
        );
        hr = c, u.target.dispatchEvent(c), hr = null;
      } else
        return n = _c(u), n !== null && qv(n), l.blockedOn = u, !1;
      n.shift();
    }
    return !0;
  }
  function Np(l, n, u) {
    kh(l) && u.delete(n);
  }
  function js() {
    Mf = !1, Pn !== null && kh(Pn) && (Pn = null), zl !== null && kh(zl) && (zl = null), Wl !== null && kh(Wl) && (Wl = null), rn.forEach(Np), yc.forEach(Np);
  }
  function Ys(l, n) {
    l.blockedOn === n && (l.blockedOn = null, Mf || (Mf = !0, Q.unstable_scheduleCallback(
      Q.unstable_NormalPriority,
      js
    )));
  }
  var Ju = null;
  function Wh(l) {
    Ju !== l && (Ju = l, Q.unstable_scheduleCallback(
      Q.unstable_NormalPriority,
      function() {
        Ju === l && (Ju = null);
        for (var n = 0; n < l.length; n += 3) {
          var u = l[n], c = l[n + 1], r = l[n + 2];
          if (typeof c != "function") {
            if (Up(c || u) === null)
              continue;
            break;
          }
          var s = _c(u);
          s !== null && (l.splice(n, 3), n -= 3, uh(
            s,
            {
              pending: !0,
              data: r,
              method: u.method,
              action: c
            },
            c,
            r
          ));
        }
      }
    ));
  }
  function Cf(l) {
    function n(T) {
      return Ys(T, l);
    }
    Pn !== null && Ys(Pn, l), zl !== null && Ys(zl, l), Wl !== null && Ys(Wl, l), rn.forEach(n), yc.forEach(n);
    for (var u = 0; u < Aa.length; u++) {
      var c = Aa[u];
      c.blockedOn === l && (c.blockedOn = null);
    }
    for (; 0 < Aa.length && (u = Aa[0], u.blockedOn === null); )
      wv(u), u.blockedOn === null && Aa.shift();
    if (u = (l.ownerDocument || l).$$reactFormReplay, u != null)
      for (c = 0; c < u.length; c += 3) {
        var r = u[c], s = u[c + 1], m = r[Zt] || null;
        if (typeof s == "function")
          m || Wh(u);
        else if (m) {
          var g = null;
          if (s && s.hasAttribute("formAction")) {
            if (r = s, m = s[Zt] || null)
              g = m.formAction;
            else if (Up(r) !== null) continue;
          } else g = m.action;
          typeof g == "function" ? u[c + 1] = g : (u.splice(c, 3), c -= 3), Wh(u);
        }
      }
  }
  function Xv() {
    function l(s) {
      s.canIntercept && s.info === "react-transition" && s.intercept({
        handler: function() {
          return new Promise(function(m) {
            return r = m;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function n() {
      r !== null && (r(), r = null), c || setTimeout(u, 20);
    }
    function u() {
      if (!c && !navigation.transition) {
        var s = navigation.currentEntry;
        s && s.url != null && navigation.navigate(s.url, {
          state: s.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var c = !1, r = null;
      return navigation.addEventListener("navigate", l), navigation.addEventListener("navigatesuccess", n), navigation.addEventListener("navigateerror", n), setTimeout(u, 100), function() {
        c = !0, navigation.removeEventListener("navigate", l), navigation.removeEventListener("navigatesuccess", n), navigation.removeEventListener("navigateerror", n), r !== null && (r(), r = null);
      };
    }
  }
  function Fh(l) {
    this._internalRoot = l;
  }
  qs.prototype.render = Fh.prototype.render = function(l) {
    var n = this._internalRoot;
    if (n === null) throw Error(B(409));
    var u = n.current, c = Ta();
    vo(u, c, l, n, null, null);
  }, qs.prototype.unmount = Fh.prototype.unmount = function() {
    var l = this._internalRoot;
    if (l !== null) {
      this._internalRoot = null;
      var n = l.containerInfo;
      vo(l.current, 2, null, l, null, null), vs(), n[Oc] = null;
    }
  };
  function qs(l) {
    this._internalRoot = l;
  }
  qs.prototype.unstable_scheduleHydration = function(l) {
    if (l) {
      var n = C0();
      l = { blockedOn: null, target: l, priority: n };
      for (var u = 0; u < Aa.length && n !== 0 && n < Aa[u].priority; u++) ;
      Aa.splice(u, 0, l), u === 0 && wv(l);
    }
  };
  var Qv = te.version;
  if (Qv !== "19.2.3")
    throw Error(
      B(
        527,
        Qv,
        "19.2.3"
      )
    );
  j.findDOMNode = function(l) {
    var n = l._reactInternals;
    if (n === void 0)
      throw typeof l.render == "function" ? Error(B(188)) : (l = Object.keys(l).join(","), Error(B(268, l)));
    return l = V(n), l = l !== null ? we(l) : null, l = l === null ? null : l.stateNode, l;
  };
  var Lv = {
    bundleType: 0,
    version: "19.2.3",
    rendererPackageName: "react-dom",
    currentDispatcherRef: X,
    reconcilerVersion: "19.2.3"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Gs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Gs.isDisabled && Gs.supportsFiber)
      try {
        Gn = Gs.inject(
          Lv
        ), pl = Gs;
      } catch {
      }
  }
  return D0.createRoot = function(l, n) {
    if (!Me(l)) throw Error(B(299));
    var u = !1, c = "", r = By, s = ch, m = xy;
    return n != null && (n.unstable_strictMode === !0 && (u = !0), n.identifierPrefix !== void 0 && (c = n.identifierPrefix), n.onUncaughtError !== void 0 && (r = n.onUncaughtError), n.onCaughtError !== void 0 && (s = n.onCaughtError), n.onRecoverableError !== void 0 && (m = n.onRecoverableError)), n = Jh(
      l,
      1,
      !1,
      null,
      null,
      u,
      c,
      null,
      r,
      s,
      m,
      Xv
    ), l[Oc] = n.current, yp(l), new Fh(n);
  }, D0.hydrateRoot = function(l, n, u) {
    if (!Me(l)) throw Error(B(299));
    var c = !1, r = "", s = By, m = ch, g = xy, T = null;
    return u != null && (u.unstable_strictMode === !0 && (c = !0), u.identifierPrefix !== void 0 && (r = u.identifierPrefix), u.onUncaughtError !== void 0 && (s = u.onUncaughtError), u.onCaughtError !== void 0 && (m = u.onCaughtError), u.onRecoverableError !== void 0 && (g = u.onRecoverableError), u.formState !== void 0 && (T = u.formState)), n = Jh(
      l,
      1,
      !0,
      n,
      u ?? null,
      c,
      r,
      T,
      s,
      m,
      g,
      Xv
    ), n.context = Kh(null), u = n.current, c = Ta(), c = Da(c), r = yi(c), r.callback = null, pi(u, r, c), u = c, n.current.lanes = u, _a(n, u), Wn(n), l[Oc] = n.current, yp(l), new qs(n);
  }, D0.version = "19.2.3", D0;
}
var R0 = {}, VE;
function RA() {
  if (VE) return R0;
  VE = 1;
  var Q = {};
  return Q.NODE_ENV !== "production" && (function() {
    function te(e, t) {
      for (e = e.memoizedState; e !== null && 0 < t; )
        e = e.next, t--;
      return e;
    }
    function Ne(e, t, a, i) {
      if (a >= t.length) return i;
      var o = t[a], f = Ol(e) ? e.slice() : Je({}, e);
      return f[o] = Ne(e[o], t, a + 1, i), f;
    }
    function B(e, t, a) {
      if (t.length !== a.length)
        console.warn("copyWithRename() expects paths of the same length");
      else {
        for (var i = 0; i < a.length - 1; i++)
          if (t[i] !== a[i]) {
            console.warn(
              "copyWithRename() expects paths to be the same except for the deepest key"
            );
            return;
          }
        return Me(e, t, a, 0);
      }
    }
    function Me(e, t, a, i) {
      var o = t[i], f = Ol(e) ? e.slice() : Je({}, e);
      return i + 1 === t.length ? (f[a[i]] = f[o], Ol(f) ? f.splice(o, 1) : delete f[o]) : f[o] = Me(
        e[o],
        t,
        a,
        i + 1
      ), f;
    }
    function Re(e, t, a) {
      var i = t[a], o = Ol(e) ? e.slice() : Je({}, e);
      return a + 1 === t.length ? (Ol(o) ? o.splice(i, 1) : delete o[i], o) : (o[i] = Re(e[i], t, a + 1), o);
    }
    function je() {
      return !1;
    }
    function gt() {
      return null;
    }
    function L() {
      console.error(
        "Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://react.dev/link/rules-of-hooks"
      );
    }
    function V() {
      console.error(
        "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
      );
    }
    function we() {
    }
    function de() {
    }
    function k(e) {
      var t = [];
      return e.forEach(function(a) {
        t.push(a);
      }), t.sort().join(", ");
    }
    function U(e, t, a, i) {
      return new Fg(e, t, a, i);
    }
    function ue(e, t) {
      e.context === Bf && (vp(e.current, 2, t, e, null, null), ao());
    }
    function qe(e, t) {
      if (ku !== null) {
        var a = t.staleFamilies;
        t = t.updatedFamilies, fc(), K0(
          e.current,
          t,
          a
        ), ao();
      }
    }
    function Qt(e) {
      ku = e;
    }
    function Te(e) {
      return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
    }
    function Ze(e) {
      var t = e, a = e;
      if (e.alternate) for (; t.return; ) t = t.return;
      else {
        e = t;
        do
          t = e, (t.flags & 4098) !== 0 && (a = t.return), e = t.return;
        while (e);
      }
      return t.tag === 3 ? a : null;
    }
    function St(e) {
      if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
      }
      return null;
    }
    function Lt(e) {
      if (e.tag === 31) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
      }
      return null;
    }
    function $t(e) {
      if (Ze(e) !== e)
        throw Error("Unable to find node on an unmounted component.");
    }
    function xt(e) {
      var t = e.alternate;
      if (!t) {
        if (t = Ze(e), t === null)
          throw Error("Unable to find node on an unmounted component.");
        return t !== e ? null : e;
      }
      for (var a = e, i = t; ; ) {
        var o = a.return;
        if (o === null) break;
        var f = o.alternate;
        if (f === null) {
          if (i = o.return, i !== null) {
            a = i;
            continue;
          }
          break;
        }
        if (o.child === f.child) {
          for (f = o.child; f; ) {
            if (f === a) return $t(o), e;
            if (f === i) return $t(o), t;
            f = f.sibling;
          }
          throw Error("Unable to find node on an unmounted component.");
        }
        if (a.return !== i.return) a = o, i = f;
        else {
          for (var d = !1, h = o.child; h; ) {
            if (h === a) {
              d = !0, a = o, i = f;
              break;
            }
            if (h === i) {
              d = !0, i = o, a = f;
              break;
            }
            h = h.sibling;
          }
          if (!d) {
            for (h = f.child; h; ) {
              if (h === a) {
                d = !0, a = f, i = o;
                break;
              }
              if (h === i) {
                d = !0, i = f, a = o;
                break;
              }
              h = h.sibling;
            }
            if (!d)
              throw Error(
                "Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue."
              );
          }
        }
        if (a.alternate !== i)
          throw Error(
            "Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue."
          );
      }
      if (a.tag !== 3)
        throw Error("Unable to find node on an unmounted component.");
      return a.stateNode.current === a ? e : t;
    }
    function Xe(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6) return e;
      for (e = e.child; e !== null; ) {
        if (t = Xe(e), t !== null) return t;
        e = e.sibling;
      }
      return null;
    }
    function _t(e) {
      return e === null || typeof e != "object" ? null : (e = yo && e[yo] || e["@@iterator"], typeof e == "function" ? e : null);
    }
    function tt(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === jv ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case $l:
          return "Fragment";
        case Yh:
          return "Profiler";
        case _f:
          return "StrictMode";
        case Za:
          return "Suspense";
        case Gh:
          return "SuspenseList";
        case zp:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case zf:
            return "Portal";
          case Fn:
            return e.displayName || "Context";
          case qh:
            return (e._context.displayName || "Context") + ".Consumer";
          case Di:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case mo:
            return t = e.displayName || null, t !== null ? t : tt(e.type) || "Memo";
          case ml:
            t = e._payload, e = e._init;
            try {
              return tt(e(t));
            } catch {
            }
        }
      return null;
    }
    function Vt(e) {
      return typeof e.tag == "number" ? re(e) : typeof e.name == "string" ? e.name : null;
    }
    function re(e) {
      var t = e.type;
      switch (e.tag) {
        case 31:
          return "Activity";
        case 24:
          return "Cache";
        case 9:
          return (t._context.displayName || "Context") + ".Consumer";
        case 10:
          return t.displayName || "Context";
        case 18:
          return "DehydratedFragment";
        case 11:
          return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
        case 7:
          return "Fragment";
        case 26:
        case 27:
        case 5:
          return t;
        case 4:
          return "Portal";
        case 3:
          return "Root";
        case 6:
          return "Text";
        case 16:
          return tt(t);
        case 8:
          return t === _f ? "StrictMode" : "Mode";
        case 22:
          return "Offscreen";
        case 12:
          return "Profiler";
        case 21:
          return "Scope";
        case 13:
          return "Suspense";
        case 19:
          return "SuspenseList";
        case 25:
          return "TracingMarker";
        case 1:
        case 0:
        case 14:
        case 15:
          if (typeof t == "function")
            return t.displayName || t.name || null;
          if (typeof t == "string") return t;
          break;
        case 29:
          if (t = e._debugInfo, t != null) {
            for (var a = t.length - 1; 0 <= a; a--)
              if (typeof t[a].name == "string") return t[a].name;
          }
          if (e.return !== null)
            return re(e.return);
      }
      return null;
    }
    function bt(e) {
      return { current: e };
    }
    function Ae(e, t) {
      0 > Ri ? console.error("Unexpected pop.") : (t !== Dp[Ri] && console.error("Unexpected Fiber popped."), e.current = _p[Ri], _p[Ri] = null, Dp[Ri] = null, Ri--);
    }
    function Ue(e, t, a) {
      Ri++, _p[Ri] = e.current, Dp[Ri] = a, e.current = t;
    }
    function jt(e) {
      return e === null && console.error(
        "Expected host context to exist. This error is likely caused by a bug in React. Please file an issue."
      ), e;
    }
    function X(e, t) {
      Ue(Hn, t, e), Ue(Vu, e, e), Ue(Mi, null, e);
      var a = t.nodeType;
      switch (a) {
        case 9:
        case 11:
          a = a === 9 ? "#document" : "#fragment", t = (t = t.documentElement) && (t = t.namespaceURI) ? zi(t) : Uo;
          break;
        default:
          if (a = t.tagName, t = t.namespaceURI)
            t = zi(t), t = vs(
              t,
              a
            );
          else
            switch (a) {
              case "svg":
                t = Rm;
                break;
              case "math":
                t = Ng;
                break;
              default:
                t = Uo;
            }
      }
      a = a.toLowerCase(), a = sr(null, a), a = {
        context: t,
        ancestorInfo: a
      }, Ae(Mi, e), Ue(Mi, a, e);
    }
    function j(e) {
      Ae(Mi, e), Ae(Vu, e), Ae(Hn, e);
    }
    function P() {
      return jt(Mi.current);
    }
    function ce(e) {
      e.memoizedState !== null && Ue(Cs, e, e);
      var t = jt(Mi.current), a = e.type, i = vs(t.context, a);
      a = sr(t.ancestorInfo, a), i = { context: i, ancestorInfo: a }, t !== i && (Ue(Vu, e, e), Ue(Mi, i, e));
    }
    function ge(e) {
      Vu.current === e && (Ae(Mi, e), Ae(Vu, e)), Cs.current === e && (Ae(Cs, e), T0._currentValue = od);
    }
    function O() {
    }
    function A() {
      if (Us === 0) {
        po = console.log, Df = console.info, Rp = console.warn, Hs = console.error, wh = console.group, Xh = console.groupCollapsed, Ns = console.groupEnd;
        var e = {
          configurable: !0,
          enumerable: !0,
          value: O,
          writable: !0
        };
        Object.defineProperties(console, {
          info: e,
          log: e,
          warn: e,
          error: e,
          group: e,
          groupCollapsed: e,
          groupEnd: e
        });
      }
      Us++;
    }
    function $() {
      if (Us--, Us === 0) {
        var e = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: Je({}, e, { value: po }),
          info: Je({}, e, { value: Df }),
          warn: Je({}, e, { value: Rp }),
          error: Je({}, e, { value: Hs }),
          group: Je({}, e, { value: wh }),
          groupCollapsed: Je({}, e, { value: Xh }),
          groupEnd: Je({}, e, { value: Ns })
        });
      }
      0 > Us && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function ee(e) {
      var t = Error.prepareStackTrace;
      if (Error.prepareStackTrace = void 0, e = e.stack, Error.prepareStackTrace = t, e.startsWith(`Error: react-stack-top-frame
`) && (e = e.slice(29)), t = e.indexOf(`
`), t !== -1 && (e = e.slice(t + 1)), t = e.indexOf("react_stack_bottom_frame"), t !== -1 && (t = e.lastIndexOf(
        `
`,
        t
      )), t !== -1)
        e = e.slice(0, t);
      else return "";
      return e;
    }
    function ae(e) {
      if (Qh === void 0)
        try {
          throw Error();
        } catch (a) {
          var t = a.stack.trim().match(/\n( *(at )?)/);
          Qh = t && t[1] || "", Mp = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + Qh + e + Mp;
    }
    function ze(e, t) {
      if (!e || Cp) return "";
      var a = Lh.get(e);
      if (a !== void 0) return a;
      Cp = !0, a = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var i = null;
      i = w.H, w.H = null, A();
      try {
        var o = {
          DetermineComponentFrameRoot: function() {
            try {
              if (t) {
                var b = function() {
                  throw Error();
                };
                if (Object.defineProperty(b.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(b, []);
                  } catch (ne) {
                    var Y = ne;
                  }
                  Reflect.construct(e, [], b);
                } else {
                  try {
                    b.call();
                  } catch (ne) {
                    Y = ne;
                  }
                  e.call(b.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (ne) {
                  Y = ne;
                }
                (b = e()) && typeof b.catch == "function" && b.catch(function() {
                });
              }
            } catch (ne) {
              if (ne && Y && typeof ne.stack == "string")
                return [ne.stack, Y.stack];
            }
            return [null, null];
          }
        };
        o.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var f = Object.getOwnPropertyDescriptor(
          o.DetermineComponentFrameRoot,
          "name"
        );
        f && f.configurable && Object.defineProperty(
          o.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var d = o.DetermineComponentFrameRoot(), h = d[0], y = d[1];
        if (h && y) {
          var p = h.split(`
`), _ = y.split(`
`);
          for (d = f = 0; f < p.length && !p[f].includes(
            "DetermineComponentFrameRoot"
          ); )
            f++;
          for (; d < _.length && !_[d].includes(
            "DetermineComponentFrameRoot"
          ); )
            d++;
          if (f === p.length || d === _.length)
            for (f = p.length - 1, d = _.length - 1; 1 <= f && 0 <= d && p[f] !== _[d]; )
              d--;
          for (; 1 <= f && 0 <= d; f--, d--)
            if (p[f] !== _[d]) {
              if (f !== 1 || d !== 1)
                do
                  if (f--, d--, 0 > d || p[f] !== _[d]) {
                    var R = `
` + p[f].replace(
                      " at new ",
                      " at "
                    );
                    return e.displayName && R.includes("<anonymous>") && (R = R.replace("<anonymous>", e.displayName)), typeof e == "function" && Lh.set(e, R), R;
                  }
                while (1 <= f && 0 <= d);
              break;
            }
        }
      } finally {
        Cp = !1, w.H = i, $(), Error.prepareStackTrace = a;
      }
      return p = (p = e ? e.displayName || e.name : "") ? ae(p) : "", typeof e == "function" && Lh.set(e, p), p;
    }
    function lt(e, t) {
      switch (e.tag) {
        case 26:
        case 27:
        case 5:
          return ae(e.type);
        case 16:
          return ae("Lazy");
        case 13:
          return e.child !== t && t !== null ? ae("Suspense Fallback") : ae("Suspense");
        case 19:
          return ae("SuspenseList");
        case 0:
        case 15:
          return ze(e.type, !1);
        case 11:
          return ze(e.type.render, !1);
        case 1:
          return ze(e.type, !0);
        case 31:
          return ae("Activity");
        default:
          return "";
      }
    }
    function Fe(e) {
      try {
        var t = "", a = null;
        do {
          t += lt(e, a);
          var i = e._debugInfo;
          if (i)
            for (var o = i.length - 1; 0 <= o; o--) {
              var f = i[o];
              if (typeof f.name == "string") {
                var d = t;
                e: {
                  var h = f.name, y = f.env, p = f.debugLocation;
                  if (p != null) {
                    var _ = ee(p), R = _.lastIndexOf(`
`), b = R === -1 ? _ : _.slice(R + 1);
                    if (b.indexOf(h) !== -1) {
                      var Y = `
` + b;
                      break e;
                    }
                  }
                  Y = ae(
                    h + (y ? " [" + y + "]" : "")
                  );
                }
                t = d + Y;
              }
            }
          a = e, e = e.return;
        } while (e);
        return t;
      } catch (ne) {
        return `
Error generating stack: ` + ne.message + `
` + ne.stack;
      }
    }
    function Et(e) {
      return (e = e ? e.displayName || e.name : "") ? ae(e) : "";
    }
    function ea() {
      if (fn === null) return null;
      var e = fn._debugOwner;
      return e != null ? Vt(e) : null;
    }
    function vn() {
      if (fn === null) return "";
      var e = fn;
      try {
        var t = "";
        switch (e.tag === 6 && (e = e.return), e.tag) {
          case 26:
          case 27:
          case 5:
            t += ae(e.type);
            break;
          case 13:
            t += ae("Suspense");
            break;
          case 19:
            t += ae("SuspenseList");
            break;
          case 31:
            t += ae("Activity");
            break;
          case 30:
          case 0:
          case 15:
          case 1:
            e._debugOwner || t !== "" || (t += Et(
              e.type
            ));
            break;
          case 11:
            e._debugOwner || t !== "" || (t += Et(
              e.type.render
            ));
        }
        for (; e; )
          if (typeof e.tag == "number") {
            var a = e;
            e = a._debugOwner;
            var i = a._debugStack;
            if (e && i) {
              var o = ee(i);
              o !== "" && (t += `
` + o);
            }
          } else if (e.debugStack != null) {
            var f = e.debugStack;
            (e = e.owner) && f && (t += `
` + ee(f));
          } else break;
        var d = t;
      } catch (h) {
        d = `
Error generating stack: ` + h.message + `
` + h.stack;
      }
      return d;
    }
    function fe(e, t, a, i, o, f, d) {
      var h = fn;
      Tc(e);
      try {
        return e !== null && e._debugTask ? e._debugTask.run(
          t.bind(null, a, i, o, f, d)
        ) : t(a, i, o, f, d);
      } finally {
        Tc(h);
      }
      throw Error(
        "runWithFiberInDEV should never be called in production. This is a bug in React."
      );
    }
    function Tc(e) {
      w.getCurrentStack = e === null ? null : vn, Nn = !1, fn = e;
    }
    function Wa(e) {
      return typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
    }
    function ui(e) {
      try {
        return uu(e), !1;
      } catch {
        return !0;
      }
    }
    function uu(e) {
      return "" + e;
    }
    function zt(e, t) {
      if (ui(e))
        return console.error(
          "The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before using it here.",
          t,
          Wa(e)
        ), uu(e);
    }
    function ql(e, t) {
      if (ui(e))
        return console.error(
          "The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before using it here.",
          t,
          Wa(e)
        ), uu(e);
    }
    function Yi(e) {
      if (ui(e))
        return console.error(
          "Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before using it here.",
          Wa(e)
        ), uu(e);
    }
    function er(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u") return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled) return !0;
      if (!t.supportsFiber)
        return console.error(
          "The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://react.dev/link/react-devtools"
        ), !0;
      try {
        Ci = t.inject(e), oa = t;
      } catch (a) {
        console.error("React instrumentation encountered an error: %o.", a);
      }
      return !!t.checkDCE;
    }
    function me(e) {
      if (typeof qv == "function" && Gv(e), oa && typeof oa.setStrictMode == "function")
        try {
          oa.setStrictMode(Ci, e);
        } catch (t) {
          Zu || (Zu = !0, console.error(
            "React instrumentation encountered an error: %o",
            t
          ));
        }
    }
    function Bo(e) {
      return e >>>= 0, e === 0 ? 32 : 31 - ($h(e) / Up | 0) | 0;
    }
    function iu(e) {
      var t = e & 42;
      if (t !== 0) return t;
      switch (e & -e) {
        case 1:
          return 1;
        case 2:
          return 2;
        case 4:
          return 4;
        case 8:
          return 8;
        case 16:
          return 16;
        case 32:
          return 32;
        case 64:
          return 64;
        case 128:
          return 128;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
          return e & 261888;
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return e & 3932160;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return e & 62914560;
        case 67108864:
          return 67108864;
        case 134217728:
          return 134217728;
        case 268435456:
          return 268435456;
        case 536870912:
          return 536870912;
        case 1073741824:
          return 0;
        default:
          return console.error(
            "Should have found matching lanes. This is a bug in React."
          ), e;
      }
    }
    function El(e, t, a) {
      var i = e.pendingLanes;
      if (i === 0) return 0;
      var o = 0, f = e.suspendedLanes, d = e.pingedLanes;
      e = e.warmLanes;
      var h = i & 134217727;
      return h !== 0 ? (i = h & ~f, i !== 0 ? o = iu(i) : (d &= h, d !== 0 ? o = iu(d) : a || (a = h & ~e, a !== 0 && (o = iu(a))))) : (h = i & ~f, h !== 0 ? o = iu(h) : d !== 0 ? o = iu(d) : a || (a = i & ~e, a !== 0 && (o = iu(a)))), o === 0 ? 0 : t !== 0 && t !== o && (t & f) === 0 && (f = o & -o, a = t & -t, f >= a || f === 32 && (a & 4194048) !== 0) ? t : o;
    }
    function qi(e, t) {
      return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
    }
    function tr(e, t) {
      switch (e) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
          return t + 250;
        case 16:
        case 32:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return -1;
        case 67108864:
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
          return -1;
        default:
          return console.error(
            "Should have found matching lanes. This is a bug in React."
          ), -1;
      }
    }
    function xo() {
      var e = Pn;
      return Pn <<= 1, (Pn & 62914560) === 0 && (Pn = 4194304), e;
    }
    function Gi(e) {
      for (var t = [], a = 0; 31 > a; a++) t.push(e);
      return t;
    }
    function wi(e, t) {
      e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
    }
    function lr(e, t, a, i, o, f) {
      var d = e.pendingLanes;
      e.pendingLanes = a, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= a, e.entangledLanes &= a, e.errorRecoveryDisabledLanes &= a, e.shellSuspendCounter = 0;
      var h = e.entanglements, y = e.expirationTimes, p = e.hiddenUpdates;
      for (a = d & ~a; 0 < a; ) {
        var _ = 31 - kl(a), R = 1 << _;
        h[_] = 0, y[_] = -1;
        var b = p[_];
        if (b !== null)
          for (p[_] = null, _ = 0; _ < b.length; _++) {
            var Y = b[_];
            Y !== null && (Y.lane &= -536870913);
          }
        a &= ~R;
      }
      i !== 0 && ar(e, i, 0), f !== 0 && o === 0 && e.tag !== 0 && (e.suspendedLanes |= f & ~(d & ~t));
    }
    function ar(e, t, a) {
      e.pendingLanes |= t, e.suspendedLanes &= ~t;
      var i = 31 - kl(t);
      e.entangledLanes |= t, e.entanglements[i] = e.entanglements[i] | 1073741824 | a & 261930;
    }
    function nr(e, t) {
      var a = e.entangledLanes |= t;
      for (e = e.entanglements; a; ) {
        var i = 31 - kl(a), o = 1 << i;
        o & t | e[i] & t && (e[i] |= t), a &= ~o;
      }
    }
    function Gn(e, t) {
      var a = t & -t;
      return a = (a & 42) !== 0 ? 1 : pl(a), (a & (e.suspendedLanes | t)) !== 0 ? 0 : a;
    }
    function pl(e) {
      switch (e) {
        case 2:
          e = 1;
          break;
        case 8:
          e = 4;
          break;
        case 32:
          e = 16;
          break;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          e = 128;
          break;
        case 268435456:
          e = 134217728;
          break;
        default:
          e = 0;
      }
      return e;
    }
    function za(e, t, a) {
      if (Bn)
        for (e = e.pendingUpdatersLaneMap; 0 < a; ) {
          var i = 31 - kl(a), o = 1 << i;
          e[i].add(t), a &= ~o;
        }
    }
    function Rl(e, t) {
      if (Bn)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; 0 < t; ) {
          var o = 31 - kl(t);
          e = 1 << o, o = a[o], 0 < o.size && (o.forEach(function(f) {
            var d = f.alternate;
            d !== null && i.has(d) || i.add(f);
          }), o.clear()), t &= ~e;
        }
    }
    function jo(e) {
      return e &= -e, zl < e ? Wl < e ? (e & 134217727) !== 0 ? rn : yc : Wl : zl;
    }
    function Xi() {
      var e = Ot.p;
      return e !== 0 ? e : (e = window.event, e === void 0 ? rn : Bh(e.type));
    }
    function v(e, t) {
      var a = Ot.p;
      try {
        return Ot.p = e, t();
      } finally {
        Ot.p = a;
      }
    }
    function M(e) {
      delete e[Fl], delete e[fa], delete e[Hp], delete e[wv], delete e[kh];
    }
    function I(e) {
      var t = e[Fl];
      if (t) return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[xn] || a[Fl]) {
          if (a = t.alternate, t.child !== null || a !== null && a.child !== null)
            for (e = zh(e); e !== null; ) {
              if (a = e[Fl])
                return a;
              e = zh(e);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function le(e) {
      if (e = e[Fl] || e[xn]) {
        var t = e.tag;
        if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
          return e;
      }
      return null;
    }
    function se(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6)
        return e.stateNode;
      throw Error("getNodeFromInstance: Invalid argument.");
    }
    function He(e) {
      var t = e[Np];
      return t || (t = e[Np] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
    }
    function ye(e) {
      e[js] = !0;
    }
    function ot(e, t) {
      Ye(e, t), Ye(e + "Capture", t);
    }
    function Ye(e, t) {
      Ju[e] && console.error(
        "EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.",
        e
      ), Ju[e] = t;
      var a = e.toLowerCase();
      for (Wh[a] = e, e === "onDoubleClick" && (Wh.ondblclick = e), e = 0; e < t.length; e++)
        Ys.add(t[e]);
    }
    function Gl(e, t) {
      Cf[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || console.error(
        e === "select" ? "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set `onChange`." : "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."
      ), t.onChange || t.readOnly || t.disabled || t.checked == null || console.error(
        "You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`."
      );
    }
    function _a(e) {
      return In.call(qs, e) ? !0 : In.call(Fh, e) ? !1 : Xv.test(e) ? qs[e] = !0 : (Fh[e] = !0, console.error("Invalid attribute name: `%s`", e), !1);
    }
    function fd(e, t, a) {
      if (_a(t)) {
        if (!e.hasAttribute(t)) {
          switch (typeof a) {
            case "symbol":
            case "object":
              return a;
            case "function":
              return a;
            case "boolean":
              if (a === !1) return a;
          }
          return a === void 0 ? void 0 : null;
        }
        return e = e.getAttribute(t), e === "" && a === !0 ? !0 : (zt(a, t), e === "" + a ? a : e);
      }
    }
    function Ac(e, t, a) {
      if (_a(t))
        if (a === null) e.removeAttribute(t);
        else {
          switch (typeof a) {
            case "undefined":
            case "function":
            case "symbol":
              e.removeAttribute(t);
              return;
            case "boolean":
              var i = t.toLowerCase().slice(0, 5);
              if (i !== "data-" && i !== "aria-") {
                e.removeAttribute(t);
                return;
              }
          }
          zt(a, t), e.setAttribute(t, "" + a);
        }
    }
    function ur(e, t, a) {
      if (a === null) e.removeAttribute(t);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            e.removeAttribute(t);
            return;
        }
        zt(a, t), e.setAttribute(t, "" + a);
      }
    }
    function cu(e, t, a, i) {
      if (i === null) e.removeAttribute(a);
      else {
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            e.removeAttribute(a);
            return;
        }
        zt(i, a), e.setAttributeNS(t, a, "" + i);
      }
    }
    function Da(e) {
      switch (typeof e) {
        case "bigint":
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return Yi(e), e;
        default:
          return "";
      }
    }
    function rd(e) {
      var t = e.type;
      return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function C0(e, t, a) {
      var i = Object.getOwnPropertyDescriptor(
        e.constructor.prototype,
        t
      );
      if (!e.hasOwnProperty(t) && typeof i < "u" && typeof i.get == "function" && typeof i.set == "function") {
        var o = i.get, f = i.set;
        return Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return o.call(this);
          },
          set: function(d) {
            Yi(d), a = "" + d, f.call(this, d);
          }
        }), Object.defineProperty(e, t, {
          enumerable: i.enumerable
        }), {
          getValue: function() {
            return a;
          },
          setValue: function(d) {
            Yi(d), a = "" + d;
          },
          stopTracking: function() {
            e._valueTracker = null, delete e[t];
          }
        };
      }
    }
    function sd(e) {
      if (!e._valueTracker) {
        var t = rd(e) ? "checked" : "value";
        e._valueTracker = C0(
          e,
          t,
          "" + e[t]
        );
      }
    }
    function ii(e) {
      if (!e) return !1;
      var t = e._valueTracker;
      if (!t) return !0;
      var a = t.getValue(), i = "";
      return e && (i = rd(e) ? e.checked ? "true" : "false" : e.value), e = i, e !== a ? (t.setValue(e), !0) : !1;
    }
    function vl(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    function Zt(e) {
      return e.replace(
        Qv,
        function(t) {
          return "\\" + t.charCodeAt(0).toString(16) + " ";
        }
      );
    }
    function Oc(e, t) {
      t.checked === void 0 || t.defaultChecked === void 0 || Gs || (console.error(
        "%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",
        ea() || "A component",
        t.type
      ), Gs = !0), t.value === void 0 || t.defaultValue === void 0 || Lv || (console.error(
        "%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",
        ea() || "A component",
        t.type
      ), Lv = !0);
    }
    function ir(e, t, a, i, o, f, d, h) {
      e.name = "", d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" ? (zt(d, "type"), e.type = d) : e.removeAttribute("type"), t != null ? d === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Da(t)) : e.value !== "" + Da(t) && (e.value = "" + Da(t)) : d !== "submit" && d !== "reset" || e.removeAttribute("value"), t != null ? Hm(e, d, Da(t)) : a != null ? Hm(e, d, Da(a)) : i != null && e.removeAttribute("value"), o == null && f != null && (e.defaultChecked = !!f), o != null && (e.checked = o && typeof o != "function" && typeof o != "symbol"), h != null && typeof h != "function" && typeof h != "symbol" && typeof h != "boolean" ? (zt(h, "name"), e.name = "" + Da(h)) : e.removeAttribute("name");
    }
    function U0(e, t, a, i, o, f, d, h) {
      if (f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (zt(f, "type"), e.type = f), t != null || a != null) {
        if (!(f !== "submit" && f !== "reset" || t != null)) {
          sd(e);
          return;
        }
        a = a != null ? "" + Da(a) : "", t = t != null ? "" + Da(t) : a, h || t === e.value || (e.value = t), e.defaultValue = t;
      }
      i = i ?? o, i = typeof i != "function" && typeof i != "symbol" && !!i, e.checked = h ? e.checked : !!i, e.defaultChecked = !!i, d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" && (zt(d, "name"), e.name = d), sd(e);
    }
    function Hm(e, t, a) {
      t === "number" && vl(e.ownerDocument) === e || e.defaultValue === "" + a || (e.defaultValue = "" + a);
    }
    function Nm(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? Ap.Children.forEach(t.children, function(a) {
        a == null || typeof a == "string" || typeof a == "number" || typeof a == "bigint" || n || (n = !0, console.error(
          "Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>."
        ));
      }) : t.dangerouslySetInnerHTML == null || u || (u = !0, console.error(
        "Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."
      ))), t.selected == null || l || (console.error(
        "Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."
      ), l = !0);
    }
    function Yo() {
      var e = ea();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    function Qi(e, t, a, i) {
      if (e = e.options, t) {
        t = {};
        for (var o = 0; o < a.length; o++)
          t["$" + a[o]] = !0;
        for (a = 0; a < e.length; a++)
          o = t.hasOwnProperty("$" + e[a].value), e[a].selected !== o && (e[a].selected = o), o && i && (e[a].defaultSelected = !0);
      } else {
        for (a = "" + Da(a), t = null, o = 0; o < e.length; o++) {
          if (e[o].value === a) {
            e[o].selected = !0, i && (e[o].defaultSelected = !0);
            return;
          }
          t !== null || e[o].disabled || (t = e[o]);
        }
        t !== null && (t.selected = !0);
      }
    }
    function zc(e, t) {
      for (e = 0; e < r.length; e++) {
        var a = r[e];
        if (t[a] != null) {
          var i = Ol(t[a]);
          t.multiple && !i ? console.error(
            "The `%s` prop supplied to <select> must be an array if `multiple` is true.%s",
            a,
            Yo()
          ) : !t.multiple && i && console.error(
            "The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s",
            a,
            Yo()
          );
        }
      }
      t.value === void 0 || t.defaultValue === void 0 || c || (console.error(
        "Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://react.dev/link/controlled-components"
      ), c = !0);
    }
    function _c(e, t) {
      t.value === void 0 || t.defaultValue === void 0 || s || (console.error(
        "%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://react.dev/link/controlled-components",
        ea() || "A component"
      ), s = !0), t.children != null && t.value == null && console.error(
        "Use the `defaultValue` or `value` props instead of setting children on <textarea>."
      );
    }
    function qo(e, t, a) {
      if (t != null && (t = "" + Da(t), t !== e.value && (e.value = t), a == null)) {
        e.defaultValue !== t && (e.defaultValue = t);
        return;
      }
      e.defaultValue = a != null ? "" + Da(a) : "";
    }
    function Dc(e, t, a, i) {
      if (t == null) {
        if (i != null) {
          if (a != null)
            throw Error(
              "If you supply `defaultValue` on a <textarea>, do not pass children."
            );
          if (Ol(i)) {
            if (1 < i.length)
              throw Error("<textarea> can only have at most one child.");
            i = i[0];
          }
          a = i;
        }
        a == null && (a = ""), t = a;
      }
      a = Da(t), e.defaultValue = a, i = e.textContent, i === a && i !== "" && i !== null && (e.value = i), sd(e);
    }
    function Tl(e, t) {
      return e.serverProps === void 0 && e.serverTail.length === 0 && e.children.length === 1 && 3 < e.distanceFromLeaf && e.distanceFromLeaf > 15 - t ? Tl(e.children[0], t) : e;
    }
    function Ra(e) {
      return "  " + "  ".repeat(e);
    }
    function Rc(e) {
      return "+ " + "  ".repeat(e);
    }
    function Fa(e) {
      return "- " + "  ".repeat(e);
    }
    function Mc(e) {
      switch (e.tag) {
        case 26:
        case 27:
        case 5:
          return e.type;
        case 16:
          return "Lazy";
        case 31:
          return "Activity";
        case 13:
          return "Suspense";
        case 19:
          return "SuspenseList";
        case 0:
        case 15:
          return e = e.type, e.displayName || e.name || null;
        case 11:
          return e = e.type.render, e.displayName || e.name || null;
        case 1:
          return e = e.type, e.displayName || e.name || null;
        default:
          return null;
      }
    }
    function cr(e, t) {
      return m.test(e) ? (e = JSON.stringify(e), e.length > t - 2 ? 8 > t ? '{"..."}' : "{" + e.slice(0, t - 7) + '..."}' : "{" + e + "}") : e.length > t ? 5 > t ? '{"..."}' : e.slice(0, t - 3) + "..." : e;
    }
    function or(e, t, a) {
      var i = 120 - 2 * a;
      if (t === null)
        return Rc(a) + cr(e, i) + `
`;
      if (typeof t == "string") {
        for (var o = 0; o < t.length && o < e.length && t.charCodeAt(o) === e.charCodeAt(o); o++) ;
        return o > i - 8 && 10 < o && (e = "..." + e.slice(o - 8), t = "..." + t.slice(o - 8)), Rc(a) + cr(e, i) + `
` + Fa(a) + cr(t, i) + `
`;
      }
      return Ra(a) + cr(e, i) + `
`;
    }
    function dd(e) {
      return Object.prototype.toString.call(e).replace(/^\[object (.*)\]$/, function(t, a) {
        return a;
      });
    }
    function fr(e, t) {
      switch (typeof e) {
        case "string":
          return e = JSON.stringify(e), e.length > t ? 5 > t ? '"..."' : e.slice(0, t - 4) + '..."' : e;
        case "object":
          if (e === null) return "null";
          if (Ol(e)) return "[...]";
          if (e.$$typeof === Un)
            return (t = tt(e.type)) ? "<" + t + ">" : "<...>";
          var a = dd(e);
          if (a === "Object") {
            a = "", t -= 2;
            for (var i in e)
              if (e.hasOwnProperty(i)) {
                var o = JSON.stringify(i);
                if (o !== '"' + i + '"' && (i = o), t -= i.length - 2, o = fr(
                  e[i],
                  15 > t ? t : 15
                ), t -= o.length, 0 > t) {
                  a += a === "" ? "..." : ", ...";
                  break;
                }
                a += (a === "" ? "" : ",") + i + ":" + o;
              }
            return "{" + a + "}";
          }
          return a;
        case "function":
          return (t = e.displayName || e.name) ? "function " + t : "function";
        default:
          return String(e);
      }
    }
    function ci(e, t) {
      return typeof e != "string" || m.test(e) ? "{" + fr(e, t - 2) + "}" : e.length > t - 2 ? 5 > t ? '"..."' : '"' + e.slice(0, t - 5) + '..."' : '"' + e + '"';
    }
    function Go(e, t, a) {
      var i = 120 - a.length - e.length, o = [], f;
      for (f in t)
        if (t.hasOwnProperty(f) && f !== "children") {
          var d = ci(
            t[f],
            120 - a.length - f.length - 1
          );
          i -= f.length + d.length + 2, o.push(f + "=" + d);
        }
      return o.length === 0 ? a + "<" + e + `>
` : 0 < i ? a + "<" + e + " " + o.join(" ") + `>
` : a + "<" + e + `
` + a + "  " + o.join(`
` + a + "  ") + `
` + a + `>
`;
    }
    function oi(e, t, a) {
      var i = "", o = Je({}, t), f;
      for (f in e)
        if (e.hasOwnProperty(f)) {
          delete o[f];
          var d = 120 - 2 * a - f.length - 2, h = fr(e[f], d);
          t.hasOwnProperty(f) ? (d = fr(t[f], d), i += Rc(a) + f + ": " + h + `
`, i += Fa(a) + f + ": " + d + `
`) : i += Rc(a) + f + ": " + h + `
`;
        }
      for (var y in o)
        o.hasOwnProperty(y) && (e = fr(
          o[y],
          120 - 2 * a - y.length - 2
        ), i += Fa(a) + y + ": " + e + `
`);
      return i;
    }
    function gn(e, t, a, i) {
      var o = "", f = /* @__PURE__ */ new Map();
      for (p in a)
        a.hasOwnProperty(p) && f.set(
          p.toLowerCase(),
          p
        );
      if (f.size === 1 && f.has("children"))
        o += Go(
          e,
          t,
          Ra(i)
        );
      else {
        for (var d in t)
          if (t.hasOwnProperty(d) && d !== "children") {
            var h = 120 - 2 * (i + 1) - d.length - 1, y = f.get(d.toLowerCase());
            if (y !== void 0) {
              f.delete(d.toLowerCase());
              var p = t[d];
              y = a[y];
              var _ = ci(
                p,
                h
              );
              h = ci(
                y,
                h
              ), typeof p == "object" && p !== null && typeof y == "object" && y !== null && dd(p) === "Object" && dd(y) === "Object" && (2 < Object.keys(p).length || 2 < Object.keys(y).length || -1 < _.indexOf("...") || -1 < h.indexOf("...")) ? o += Ra(i + 1) + d + `={{
` + oi(
                p,
                y,
                i + 2
              ) + Ra(i + 1) + `}}
` : (o += Rc(i + 1) + d + "=" + _ + `
`, o += Fa(i + 1) + d + "=" + h + `
`);
            } else
              o += Ra(i + 1) + d + "=" + ci(t[d], h) + `
`;
          }
        f.forEach(function(R) {
          if (R !== "children") {
            var b = 120 - 2 * (i + 1) - R.length - 1;
            o += Fa(i + 1) + R + "=" + ci(a[R], b) + `
`;
          }
        }), o = o === "" ? Ra(i) + "<" + e + `>
` : Ra(i) + "<" + e + `
` + o + Ra(i) + `>
`;
      }
      return e = a.children, t = t.children, typeof e == "string" || typeof e == "number" || typeof e == "bigint" ? (f = "", (typeof t == "string" || typeof t == "number" || typeof t == "bigint") && (f = "" + t), o += or(f, "" + e, i + 1)) : (typeof t == "string" || typeof t == "number" || typeof t == "bigint") && (o = e == null ? o + or("" + t, null, i + 1) : o + or("" + t, void 0, i + 1)), o;
    }
    function Bm(e, t) {
      var a = Mc(e);
      if (a === null) {
        for (a = "", e = e.child; e; )
          a += Bm(e, t), e = e.sibling;
        return a;
      }
      return Ra(t) + "<" + a + `>
`;
    }
    function xm(e, t) {
      var a = Tl(e, t);
      if (a !== e && (e.children.length !== 1 || e.children[0] !== a))
        return Ra(t) + `...
` + xm(a, t + 1);
      a = "";
      var i = e.fiber._debugInfo;
      if (i)
        for (var o = 0; o < i.length; o++) {
          var f = i[o].name;
          typeof f == "string" && (a += Ra(t) + "<" + f + `>
`, t++);
        }
      if (i = "", o = e.fiber.pendingProps, e.fiber.tag === 6)
        i = or(o, e.serverProps, t), t++;
      else if (f = Mc(e.fiber), f !== null)
        if (e.serverProps === void 0) {
          i = t;
          var d = 120 - 2 * i - f.length - 2, h = "";
          for (p in o)
            if (o.hasOwnProperty(p) && p !== "children") {
              var y = ci(o[p], 15);
              if (d -= p.length + y.length + 2, 0 > d) {
                h += " ...";
                break;
              }
              h += " " + p + "=" + y;
            }
          i = Ra(i) + "<" + f + h + `>
`, t++;
        } else
          e.serverProps === null ? (i = Go(
            f,
            o,
            Rc(t)
          ), t++) : typeof e.serverProps == "string" ? console.error(
            "Should not have matched a non HostText fiber to a Text node. This is a bug in React."
          ) : (i = gn(
            f,
            o,
            e.serverProps,
            t
          ), t++);
      var p = "";
      for (o = e.fiber.child, f = 0; o && f < e.children.length; )
        d = e.children[f], d.fiber === o ? (p += xm(d, t), f++) : p += Bm(o, t), o = o.sibling;
      for (o && 0 < e.children.length && (p += Ra(t) + `...
`), o = e.serverTail, e.serverProps === null && t--, e = 0; e < o.length; e++)
        f = o[e], p = typeof f == "string" ? p + (Fa(t) + cr(f, 120 - 2 * t) + `
`) : p + Go(
          f.type,
          f.props,
          Fa(t)
        );
      return a + i + p;
    }
    function rr(e) {
      try {
        return `

` + xm(e, 0);
      } catch {
        return "";
      }
    }
    function jm(e, t, a) {
      for (var i = t, o = null, f = 0; i; )
        i === e && (f = 0), o = {
          fiber: i,
          children: o !== null ? [o] : [],
          serverProps: i === t ? a : i === e ? null : void 0,
          serverTail: [],
          distanceFromLeaf: f
        }, f++, i = i.return;
      return o !== null ? rr(o).replaceAll(/^[+-]/gm, ">") : "";
    }
    function sr(e, t) {
      var a = Je({}, e || W), i = { tag: t };
      return T.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), N.indexOf(t) !== -1 && (a.pTagInButtonScope = null), g.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), t === "#document" || t === "html" ? a.containerTagInScope = null : a.containerTagInScope || (a.containerTagInScope = i), e !== null || t !== "#document" && t !== "html" && t !== "body" ? a.implicitRootScope === !0 && (a.implicitRootScope = !1) : a.implicitRootScope = !0, a;
    }
    function H0(e, t, a) {
      switch (t) {
        case "select":
          return e === "hr" || e === "option" || e === "optgroup" || e === "script" || e === "template" || e === "#text";
        case "optgroup":
          return e === "option" || e === "#text";
        case "option":
          return e === "#text";
        case "tr":
          return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
        case "tbody":
        case "thead":
        case "tfoot":
          return e === "tr" || e === "style" || e === "script" || e === "template";
        case "colgroup":
          return e === "col" || e === "template";
        case "table":
          return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
        case "head":
          return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
        case "html":
          if (a) break;
          return e === "head" || e === "body" || e === "frameset";
        case "frameset":
          return e === "frame";
        case "#document":
          if (!a) return e === "html";
      }
      switch (e) {
        case "h1":
        case "h2":
        case "h3":
        case "h4":
        case "h5":
        case "h6":
          return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
        case "rp":
        case "rt":
          return Z.indexOf(t) === -1;
        case "caption":
        case "col":
        case "colgroup":
        case "frameset":
        case "frame":
        case "tbody":
        case "td":
        case "tfoot":
        case "th":
        case "thead":
        case "tr":
          return t == null;
        case "head":
          return a || t === null;
        case "html":
          return a && t === "#document" || t === null;
        case "body":
          return a && (t === "#document" || t === "html") || t === null;
      }
      return !0;
    }
    function Sn(e, t) {
      switch (e) {
        case "address":
        case "article":
        case "aside":
        case "blockquote":
        case "center":
        case "details":
        case "dialog":
        case "dir":
        case "div":
        case "dl":
        case "fieldset":
        case "figcaption":
        case "figure":
        case "footer":
        case "header":
        case "hgroup":
        case "main":
        case "menu":
        case "nav":
        case "ol":
        case "p":
        case "section":
        case "summary":
        case "ul":
        case "pre":
        case "listing":
        case "table":
        case "hr":
        case "xmp":
        case "h1":
        case "h2":
        case "h3":
        case "h4":
        case "h5":
        case "h6":
          return t.pTagInButtonScope;
        case "form":
          return t.formTag || t.pTagInButtonScope;
        case "li":
          return t.listItemTagAutoclosing;
        case "dd":
        case "dt":
          return t.dlItemTagAutoclosing;
        case "button":
          return t.buttonTagInScope;
        case "a":
          return t.aTagInScope;
        case "nobr":
          return t.nobrTagInScope;
      }
      return null;
    }
    function hd(e, t) {
      for (; e; ) {
        switch (e.tag) {
          case 5:
          case 26:
          case 27:
            if (e.type === t) return e;
        }
        e = e.return;
      }
      return null;
    }
    function md(e, t) {
      t = t || W;
      var a = t.current;
      if (t = (a = H0(
        e,
        a && a.tag,
        t.implicitRootScope
      ) ? null : a) ? null : Sn(e, t), t = a || t, !t) return !0;
      var i = t.tag;
      if (t = String(!!a) + "|" + e + "|" + i, x[t]) return !1;
      x[t] = !0;
      var o = (t = fn) ? hd(t.return, i) : null, f = t !== null && o !== null ? jm(o, t, null) : "", d = "<" + e + ">";
      return a ? (a = "", i === "table" && e === "tr" && (a += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), console.error(
        `In HTML, %s cannot be a child of <%s>.%s
This will cause a hydration error.%s`,
        d,
        i,
        a,
        f
      )) : console.error(
        `In HTML, %s cannot be a descendant of <%s>.
This will cause a hydration error.%s`,
        d,
        i,
        f
      ), t && (e = t.return, o === null || e === null || o === e && e._debugOwner === t._debugOwner || fe(o, function() {
        console.error(
          `<%s> cannot contain a nested %s.
See this log for the ancestor stack trace.`,
          i,
          d
        );
      })), !1;
    }
    function wo(e, t, a) {
      if (a || H0("#text", t, !1))
        return !0;
      if (a = "#text|" + t, x[a]) return !1;
      x[a] = !0;
      var i = (a = fn) ? hd(a, t) : null;
      return a = a !== null && i !== null ? jm(
        i,
        a,
        a.tag !== 6 ? { children: null } : null
      ) : "", /\S/.test(e) ? console.error(
        `In HTML, text nodes cannot be a child of <%s>.
This will cause a hydration error.%s`,
        t,
        a
      ) : console.error(
        `In HTML, whitespace text nodes cannot be a child of <%s>. Make sure you don't have any extra whitespace between tags on each line of your source code.
This will cause a hydration error.%s`,
        t,
        a
      ), !1;
    }
    function ou(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === 3) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }
    function N0(e) {
      return e.replace(D, function(t, a) {
        return a.toUpperCase();
      });
    }
    function Ym(e, t, a) {
      var i = t.indexOf("--") === 0;
      i || (-1 < t.indexOf("-") ? K.hasOwnProperty(t) && K[t] || (K[t] = !0, console.error(
        "Unsupported style property %s. Did you mean %s?",
        t,
        N0(t.replace(C, "ms-"))
      )) : Nt.test(t) ? K.hasOwnProperty(t) && K[t] || (K[t] = !0, console.error(
        "Unsupported vendor-prefixed style property %s. Did you mean %s?",
        t,
        t.charAt(0).toUpperCase() + t.slice(1)
      )) : !H.test(a) || Se.hasOwnProperty(a) && Se[a] || (Se[a] = !0, console.error(
        `Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`,
        t,
        a.replace(H, "")
      )), typeof a == "number" && (isNaN(a) ? mt || (mt = !0, console.error(
        "`NaN` is an invalid value for the `%s` css style property.",
        t
      )) : isFinite(a) || pe || (pe = !0, console.error(
        "`Infinity` is an invalid value for the `%s` css style property.",
        t
      )))), a == null || typeof a == "boolean" || a === "" ? i ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : i ? e.setProperty(t, a) : typeof a != "number" || a === 0 || Le.has(t) ? t === "float" ? e.cssFloat = a : (ql(a, t), e[t] = ("" + a).trim()) : e[t] = a + "px";
    }
    function Cc(e, t, a) {
      if (t != null && typeof t != "object")
        throw Error(
          "The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX."
        );
      if (t && Object.freeze(t), e = e.style, a != null) {
        if (t) {
          var i = {};
          if (a) {
            for (var o in a)
              if (a.hasOwnProperty(o) && !t.hasOwnProperty(o))
                for (var f = G[o] || [o], d = 0; d < f.length; d++)
                  i[f[d]] = o;
          }
          for (var h in t)
            if (t.hasOwnProperty(h) && (!a || a[h] !== t[h]))
              for (o = G[h] || [h], f = 0; f < o.length; f++)
                i[o[f]] = h;
          h = {};
          for (var y in t)
            for (o = G[y] || [y], f = 0; f < o.length; f++)
              h[o[f]] = y;
          y = {};
          for (var p in i)
            if (o = i[p], (f = h[p]) && o !== f && (d = o + "," + f, !y[d])) {
              y[d] = !0, d = console;
              var _ = t[o];
              d.error.call(
                d,
                "%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.",
                _ == null || typeof _ == "boolean" || _ === "" ? "Removing" : "Updating",
                o,
                f
              );
            }
        }
        for (var R in a)
          !a.hasOwnProperty(R) || t != null && t.hasOwnProperty(R) || (R.indexOf("--") === 0 ? e.setProperty(R, "") : R === "float" ? e.cssFloat = "" : e[R] = "");
        for (var b in t)
          p = t[b], t.hasOwnProperty(b) && a[b] !== p && Ym(e, b, p);
      } else
        for (i in t)
          t.hasOwnProperty(i) && Ym(e, i, t[i]);
    }
    function dr(e) {
      if (e.indexOf("-") === -1) return !1;
      switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    function qm(e) {
      return pc.get(e) || e;
    }
    function B0(e, t) {
      if (In.call(Ph, t) && Ph[t])
        return !0;
      if (WE.test(t)) {
        if (e = "aria-" + t.slice(4).toLowerCase(), e = b1.hasOwnProperty(e) ? e : null, e == null)
          return console.error(
            "Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.",
            t
          ), Ph[t] = !0;
        if (t !== e)
          return console.error(
            "Invalid ARIA attribute `%s`. Did you mean `%s`?",
            t,
            e
          ), Ph[t] = !0;
      }
      if (kE.test(t)) {
        if (e = t.toLowerCase(), e = b1.hasOwnProperty(e) ? e : null, e == null) return Ph[t] = !0, !1;
        t !== e && (console.error(
          "Unknown ARIA attribute `%s`. Did you mean `%s`?",
          t,
          e
        ), Ph[t] = !0);
      }
      return !0;
    }
    function Gm(e, t) {
      var a = [], i;
      for (i in t)
        B0(e, i) || a.push(i);
      t = a.map(function(o) {
        return "`" + o + "`";
      }).join(", "), a.length === 1 ? console.error(
        "Invalid aria prop %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props",
        t,
        e
      ) : 1 < a.length && console.error(
        "Invalid aria props %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props",
        t,
        e
      );
    }
    function Zg(e, t, a, i) {
      if (In.call(sn, t) && sn[t])
        return !0;
      var o = t.toLowerCase();
      if (o === "onfocusin" || o === "onfocusout")
        return console.error(
          "React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."
        ), sn[t] = !0;
      if (typeof a == "function" && (e === "form" && t === "action" || e === "input" && t === "formAction" || e === "button" && t === "formAction"))
        return !0;
      if (i != null) {
        if (e = i.possibleRegistrationNames, i.registrationNameDependencies.hasOwnProperty(t))
          return !0;
        if (i = e.hasOwnProperty(o) ? e[o] : null, i != null)
          return console.error(
            "Invalid event handler property `%s`. Did you mean `%s`?",
            t,
            i
          ), sn[t] = !0;
        if (T1.test(t))
          return console.error(
            "Unknown event handler property `%s`. It will be ignored.",
            t
          ), sn[t] = !0;
      } else if (T1.test(t))
        return FE.test(t) && console.error(
          "Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.",
          t
        ), sn[t] = !0;
      if (IE.test(t) || PE.test(t)) return !0;
      if (o === "innerhtml")
        return console.error(
          "Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."
        ), sn[t] = !0;
      if (o === "aria")
        return console.error(
          "The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."
        ), sn[t] = !0;
      if (o === "is" && a !== null && a !== void 0 && typeof a != "string")
        return console.error(
          "Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.",
          typeof a
        ), sn[t] = !0;
      if (typeof a == "number" && isNaN(a))
        return console.error(
          "Received NaN for the `%s` attribute. If this is expected, cast the value to a string.",
          t
        ), sn[t] = !0;
      if (Ih.hasOwnProperty(o)) {
        if (o = Ih[o], o !== t)
          return console.error(
            "Invalid DOM property `%s`. Did you mean `%s`?",
            t,
            o
          ), sn[t] = !0;
      } else if (t !== o)
        return console.error(
          "React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.",
          t,
          o
        ), sn[t] = !0;
      switch (t) {
        case "dangerouslySetInnerHTML":
        case "children":
        case "style":
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
          return !0;
        case "innerText":
        case "textContent":
          return !0;
      }
      switch (typeof a) {
        case "boolean":
          switch (t) {
            case "autoFocus":
            case "checked":
            case "multiple":
            case "muted":
            case "selected":
            case "contentEditable":
            case "spellCheck":
            case "draggable":
            case "value":
            case "autoReverse":
            case "externalResourcesRequired":
            case "focusable":
            case "preserveAlpha":
            case "allowFullScreen":
            case "async":
            case "autoPlay":
            case "controls":
            case "default":
            case "defer":
            case "disabled":
            case "disablePictureInPicture":
            case "disableRemotePlayback":
            case "formNoValidate":
            case "hidden":
            case "loop":
            case "noModule":
            case "noValidate":
            case "open":
            case "playsInline":
            case "readOnly":
            case "required":
            case "reversed":
            case "scoped":
            case "seamless":
            case "itemScope":
            case "capture":
            case "download":
            case "inert":
              return !0;
            default:
              return o = t.toLowerCase().slice(0, 5), o === "data-" || o === "aria-" ? !0 : (a ? console.error(
                'Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.',
                a,
                t,
                t,
                a,
                t
              ) : console.error(
                'Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.',
                a,
                t,
                t,
                a,
                t,
                t,
                t
              ), sn[t] = !0);
          }
        case "function":
        case "symbol":
          return sn[t] = !0, !1;
        case "string":
          if (a === "false" || a === "true") {
            switch (t) {
              case "checked":
              case "selected":
              case "multiple":
              case "muted":
              case "allowFullScreen":
              case "async":
              case "autoPlay":
              case "controls":
              case "default":
              case "defer":
              case "disabled":
              case "disablePictureInPicture":
              case "disableRemotePlayback":
              case "formNoValidate":
              case "hidden":
              case "loop":
              case "noModule":
              case "noValidate":
              case "open":
              case "playsInline":
              case "readOnly":
              case "required":
              case "reversed":
              case "scoped":
              case "seamless":
              case "itemScope":
              case "inert":
                break;
              default:
                return !0;
            }
            console.error(
              "Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?",
              a,
              t,
              a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".',
              t,
              a
            ), sn[t] = !0;
          }
      }
      return !0;
    }
    function Jg(e, t, a) {
      var i = [], o;
      for (o in t)
        Zg(e, o, t[o], a) || i.push(o);
      t = i.map(function(f) {
        return "`" + f + "`";
      }).join(", "), i.length === 1 ? console.error(
        "Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://react.dev/link/attribute-behavior ",
        t,
        e
      ) : 1 < i.length && console.error(
        "Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://react.dev/link/attribute-behavior ",
        t,
        e
      );
    }
    function Li(e) {
      return eT.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
    }
    function wl() {
    }
    function hr(e) {
      return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
    }
    function yd(e) {
      var t = le(e);
      if (t && (e = t.stateNode)) {
        var a = e[fa] || null;
        e: switch (e = t.stateNode, t.type) {
          case "input":
            if (ir(
              e,
              a.value,
              a.defaultValue,
              a.defaultValue,
              a.checked,
              a.defaultChecked,
              a.type,
              a.name
            ), t = a.name, a.type === "radio" && t != null) {
              for (a = e; a.parentNode; ) a = a.parentNode;
              for (zt(t, "name"), a = a.querySelectorAll(
                'input[name="' + Zt(
                  "" + t
                ) + '"][type="radio"]'
              ), t = 0; t < a.length; t++) {
                var i = a[t];
                if (i !== e && i.form === e.form) {
                  var o = i[fa] || null;
                  if (!o)
                    throw Error(
                      "ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported."
                    );
                  ir(
                    i,
                    o.value,
                    o.defaultValue,
                    o.defaultValue,
                    o.checked,
                    o.defaultChecked,
                    o.type,
                    o.name
                  );
                }
              }
              for (t = 0; t < a.length; t++)
                i = a[t], i.form === e.form && ii(i);
            }
            break e;
          case "textarea":
            qo(e, a.value, a.defaultValue);
            break e;
          case "select":
            t = a.value, t != null && Qi(e, !!a.multiple, t, !1);
        }
      }
    }
    function Uc(e, t, a) {
      if (oS) return e(t, a);
      oS = !0;
      try {
        var i = e(t);
        return i;
      } finally {
        if (oS = !1, (em !== null || tm !== null) && (ao(), em && (t = em, e = tm, tm = em = null, yd(t), e)))
          for (t = 0; t < e.length; t++) yd(e[t]);
      }
    }
    function fu(e, t) {
      var a = e.stateNode;
      if (a === null) return null;
      var i = a[fa] || null;
      if (i === null) return null;
      a = i[t];
      e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          (i = !i.disabled) || (e = e.type, i = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !i;
          break e;
        default:
          e = !1;
      }
      if (e) return null;
      if (a && typeof a != "function")
        throw Error(
          "Expected `" + t + "` listener to be a function, instead got a value of `" + typeof a + "` type."
        );
      return a;
    }
    function wm() {
      if (Vv) return Vv;
      var e, t = rS, a = t.length, i, o = "value" in Uf ? Uf.value : Uf.textContent, f = o.length;
      for (e = 0; e < a && t[e] === o[e]; e++) ;
      var d = a - e;
      for (i = 1; i <= d && t[a - i] === o[f - i]; i++) ;
      return Vv = o.slice(e, 1 < i ? 1 - i : void 0);
    }
    function Xo(e) {
      var t = e.keyCode;
      return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
    }
    function mr() {
      return !0;
    }
    function Qo() {
      return !1;
    }
    function nl(e) {
      function t(a, i, o, f, d) {
        this._reactName = a, this._targetInst = o, this.type = i, this.nativeEvent = f, this.target = d, this.currentTarget = null;
        for (var h in e)
          e.hasOwnProperty(h) && (a = e[h], this[h] = a ? a(f) : f[h]);
        return this.isDefaultPrevented = (f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === !1) ? mr : Qo, this.isPropagationStopped = Qo, this;
      }
      return Je(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = mr);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = mr);
        },
        persist: function() {
        },
        isPersistent: mr
      }), t;
    }
    function Xm(e) {
      var t = this.nativeEvent;
      return t.getModifierState ? t.getModifierState(e) : (e = hT[e]) ? !!t[e] : !1;
    }
    function Hc() {
      return Xm;
    }
    function fi(e, t) {
      switch (e) {
        case "keyup":
          return zT.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== _1;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function pd(e) {
      return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
    }
    function vd(e, t) {
      switch (e) {
        case "compositionend":
          return pd(t);
        case "keypress":
          return t.which !== R1 ? null : (C1 = !0, M1);
        case "textInput":
          return e = t.data, e === M1 && C1 ? null : e;
        default:
          return null;
      }
    }
    function x0(e, t) {
      if (lm)
        return e === "compositionend" || !mS && fi(e, t) ? (e = wm(), Vv = rS = Uf = null, lm = !1, e) : null;
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return D1 && t.locale !== "ko" ? null : t.data;
        default:
          return null;
      }
    }
    function yr(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!DT[e.type] : t === "textarea";
    }
    function gd(e) {
      if (!vc) return !1;
      e = "on" + e;
      var t = e in document;
      return t || (t = document.createElement("div"), t.setAttribute(e, "return;"), t = typeof t[e] == "function"), t;
    }
    function Qm(e, t, a, i) {
      em ? tm ? tm.push(i) : tm = [i] : em = i, t = Xu(t, "onChange"), 0 < t.length && (a = new Zv(
        "onChange",
        "change",
        null,
        a,
        i
      ), e.push({ event: a, listeners: t }));
    }
    function Ma(e) {
      wa(e, 0);
    }
    function ru(e) {
      var t = se(e);
      if (ii(t)) return e;
    }
    function pr(e, t) {
      if (e === "change") return t;
    }
    function Lo() {
      Gp && (Gp.detachEvent("onpropertychange", j0), wp = Gp = null);
    }
    function j0(e) {
      if (e.propertyName === "value" && ru(wp)) {
        var t = [];
        Qm(
          t,
          wp,
          e,
          hr(e)
        ), Uc(Ma, t);
      }
    }
    function Lm(e, t, a) {
      e === "focusin" ? (Lo(), Gp = t, wp = a, Gp.attachEvent("onpropertychange", j0)) : e === "focusout" && Lo();
    }
    function Vm(e) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return ru(wp);
    }
    function vr(e, t) {
      if (e === "click") return ru(t);
    }
    function Sd(e, t) {
      if (e === "input" || e === "change")
        return ru(t);
    }
    function Y0(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    function gr(e, t) {
      if (dn(e, t)) return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length) return !1;
      for (i = 0; i < a.length; i++) {
        var o = a[i];
        if (!In.call(t, o) || !dn(e[o], t[o]))
          return !1;
      }
      return !0;
    }
    function q0(e) {
      for (; e && e.firstChild; ) e = e.firstChild;
      return e;
    }
    function G0(e, t) {
      var a = q0(e);
      e = 0;
      for (var i; a; ) {
        if (a.nodeType === 3) {
          if (i = e + a.textContent.length, e <= t && i >= t)
            return { node: a, offset: t - e };
          e = i;
        }
        e: {
          for (; a; ) {
            if (a.nextSibling) {
              a = a.nextSibling;
              break e;
            }
            a = a.parentNode;
          }
          a = void 0;
        }
        a = q0(a);
      }
    }
    function bd(e, t) {
      return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? bd(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
    }
    function w0(e) {
      e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
      for (var t = vl(e.document); t instanceof e.HTMLIFrameElement; ) {
        try {
          var a = typeof t.contentWindow.location.href == "string";
        } catch {
          a = !1;
        }
        if (a) e = t.contentWindow;
        else break;
        t = vl(e.document);
      }
      return t;
    }
    function Zm(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function X0(e, t, a) {
      var i = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
      pS || am == null || am !== vl(i) || (i = am, "selectionStart" in i && Zm(i) ? i = { start: i.selectionStart, end: i.selectionEnd } : (i = (i.ownerDocument && i.ownerDocument.defaultView || window).getSelection(), i = {
        anchorNode: i.anchorNode,
        anchorOffset: i.anchorOffset,
        focusNode: i.focusNode,
        focusOffset: i.focusOffset
      }), Xp && gr(Xp, i) || (Xp = i, i = Xu(yS, "onSelect"), 0 < i.length && (t = new Zv(
        "onSelect",
        "select",
        null,
        t,
        a
      ), e.push({ event: t, listeners: i }), t.target = am)));
    }
    function Nc(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    function Bc(e) {
      if (vS[e]) return vS[e];
      if (!nm[e]) return e;
      var t = nm[e], a;
      for (a in t)
        if (t.hasOwnProperty(a) && a in H1)
          return vS[e] = t[a];
      return e;
    }
    function bn(e, t) {
      Y1.set(e, t), ot(t, [e]);
    }
    function Kg(e) {
      for (var t = Kv, a = 0; a < e.length; a++) {
        var i = e[a];
        if (typeof i == "object" && i !== null)
          if (Ol(i) && i.length === 2 && typeof i[0] == "string") {
            if (t !== Kv && t !== TS)
              return bS;
            t = TS;
          } else return bS;
        else {
          if (typeof i == "function" || typeof i == "string" && 50 < i.length || t !== Kv && t !== ES)
            return bS;
          t = ES;
        }
      }
      return t;
    }
    function Jm(e, t, a, i) {
      for (var o in e)
        In.call(e, o) && o[0] !== "_" && su(o, e[o], t, a, i);
    }
    function su(e, t, a, i, o) {
      switch (typeof t) {
        case "object":
          if (t === null) {
            t = "null";
            break;
          } else {
            if (t.$$typeof === Un) {
              var f = tt(t.type) || "…", d = t.key;
              t = t.props;
              var h = Object.keys(t), y = h.length;
              if (d == null && y === 0) {
                t = "<" + f + " />";
                break;
              }
              if (3 > i || y === 1 && h[0] === "children" && d == null) {
                t = "<" + f + " … />";
                break;
              }
              a.push([
                o + "  ".repeat(i) + e,
                "<" + f
              ]), d !== null && su(
                "key",
                d,
                a,
                i + 1,
                o
              ), e = !1;
              for (var p in t)
                p === "children" ? t.children != null && (!Ol(t.children) || 0 < t.children.length) && (e = !0) : In.call(t, p) && p[0] !== "_" && su(
                  p,
                  t[p],
                  a,
                  i + 1,
                  o
                );
              a.push([
                "",
                e ? ">…</" + f + ">" : "/>"
              ]);
              return;
            }
            if (f = Object.prototype.toString.call(t), f = f.slice(8, f.length - 1), f === "Array") {
              if (p = Kg(t), p === ES || p === Kv) {
                t = JSON.stringify(t);
                break;
              } else if (p === TS) {
                for (a.push([
                  o + "  ".repeat(i) + e,
                  ""
                ]), e = 0; e < t.length; e++)
                  f = t[e], su(
                    f[0],
                    f[1],
                    a,
                    i + 1,
                    o
                  );
                return;
              }
            }
            if (f === "Promise") {
              if (t.status === "fulfilled") {
                if (f = a.length, su(
                  e,
                  t.value,
                  a,
                  i,
                  o
                ), a.length > f) {
                  a = a[f], a[1] = "Promise<" + (a[1] || "Object") + ">";
                  return;
                }
              } else if (t.status === "rejected" && (f = a.length, su(
                e,
                t.reason,
                a,
                i,
                o
              ), a.length > f)) {
                a = a[f], a[1] = "Rejected Promise<" + a[1] + ">";
                return;
              }
              a.push([
                "  ".repeat(i) + e,
                "Promise"
              ]);
              return;
            }
            f === "Object" && (p = Object.getPrototypeOf(t)) && typeof p.constructor == "function" && (f = p.constructor.name), a.push([
              o + "  ".repeat(i) + e,
              f === "Object" ? 3 > i ? "" : "…" : f
            ]), 3 > i && Jm(t, a, i + 1, o);
            return;
          }
        case "function":
          t = t.name === "" ? "() => {}" : t.name + "() {}";
          break;
        case "string":
          t = t === BT ? "…" : JSON.stringify(t);
          break;
        case "undefined":
          t = "undefined";
          break;
        case "boolean":
          t = t ? "true" : "false";
          break;
        default:
          t = String(t);
      }
      a.push([
        o + "  ".repeat(i) + e,
        t
      ]);
    }
    function Q0(e, t, a, i) {
      var o = !0;
      for (d in e)
        d in t || (a.push([
          $v + "  ".repeat(i) + d,
          "…"
        ]), o = !1);
      for (var f in t)
        if (f in e) {
          var d = e[f], h = t[f];
          if (d !== h) {
            if (i === 0 && f === "children")
              o = "  ".repeat(i) + f, a.push(
                [$v + o, "…"],
                [kv + o, "…"]
              );
            else {
              if (!(3 <= i)) {
                if (typeof d == "object" && typeof h == "object" && d !== null && h !== null && d.$$typeof === h.$$typeof)
                  if (h.$$typeof === Un) {
                    if (d.type === h.type && d.key === h.key) {
                      d = tt(h.type) || "…", o = "  ".repeat(i) + f, d = "<" + d + " … />", a.push(
                        [$v + o, d],
                        [kv + o, d]
                      ), o = !1;
                      continue;
                    }
                  } else {
                    var y = Object.prototype.toString.call(d), p = Object.prototype.toString.call(h);
                    if (y === p && (p === "[object Object]" || p === "[object Array]")) {
                      y = [
                        w1 + "  ".repeat(i) + f,
                        p === "[object Array]" ? "Array" : ""
                      ], a.push(y), p = a.length, Q0(
                        d,
                        h,
                        a,
                        i + 1
                      ) ? p === a.length && (y[1] = "Referentially unequal but deeply equal objects. Consider memoization.") : o = !1;
                      continue;
                    }
                  }
                else if (typeof d == "function" && typeof h == "function" && d.name === h.name && d.length === h.length && (y = Function.prototype.toString.call(d), p = Function.prototype.toString.call(h), y === p)) {
                  d = h.name === "" ? "() => {}" : h.name + "() {}", a.push([
                    w1 + "  ".repeat(i) + f,
                    d + " Referentially unequal function closure. Consider memoization."
                  ]);
                  continue;
                }
              }
              su(f, d, a, i, $v), su(f, h, a, i, kv);
            }
            o = !1;
          }
        } else
          a.push([
            kv + "  ".repeat(i) + f,
            "…"
          ]), o = !1;
      return o;
    }
    function Ia(e) {
      dt = e & 63 ? "Blocking" : e & 64 ? "Gesture" : e & 4194176 ? "Transition" : e & 62914560 ? "Suspense" : e & 2080374784 ? "Idle" : "Other";
    }
    function du(e, t, a, i) {
      Ft && (Nf.start = t, Nf.end = a, go.color = "warning", go.tooltipText = i, go.properties = null, (e = e._debugTask) ? e.run(
        performance.measure.bind(
          performance,
          i,
          Nf
        )
      ) : performance.measure(i, Nf));
    }
    function Ed(e, t, a) {
      du(e, t, a, "Reconnect");
    }
    function Td(e, t, a, i, o) {
      var f = re(e);
      if (f !== null && Ft) {
        var d = e.alternate, h = e.actualDuration;
        if (d === null || d.child !== e.child)
          for (var y = e.child; y !== null; y = y.sibling)
            h -= y.actualDuration;
        i = 0.5 > h ? i ? "tertiary-light" : "primary-light" : 10 > h ? i ? "tertiary" : "primary" : 100 > h ? i ? "tertiary-dark" : "primary-dark" : "error";
        var p = e.memoizedProps;
        h = e._debugTask, p !== null && d !== null && d.memoizedProps !== p ? (y = [xT], p = Q0(
          d.memoizedProps,
          p,
          y,
          0
        ), 1 < y.length && (p && !Hf && (d.lanes & o) === 0 && 100 < e.actualDuration ? (Hf = !0, y[0] = jT, go.color = "warning", go.tooltipText = X1) : (go.color = i, go.tooltipText = f), go.properties = y, Nf.start = t, Nf.end = a, h != null ? h.run(
          performance.measure.bind(
            performance,
            "​" + f,
            Nf
          )
        ) : performance.measure(
          "​" + f,
          Nf
        ))) : h != null ? h.run(
          console.timeStamp.bind(
            console,
            f,
            t,
            a,
            Ku,
            void 0,
            i
          )
        ) : console.timeStamp(
          f,
          t,
          a,
          Ku,
          void 0,
          i
        );
      }
    }
    function Ad(e, t, a, i) {
      if (Ft) {
        var o = re(e);
        if (o !== null) {
          for (var f = null, d = [], h = 0; h < i.length; h++) {
            var y = i[h];
            f == null && y.source !== null && (f = y.source._debugTask), y = y.value, d.push([
              "Error",
              typeof y == "object" && y !== null && typeof y.message == "string" ? String(y.message) : String(y)
            ]);
          }
          e.key !== null && su("key", e.key, d, 0, ""), e.memoizedProps !== null && Jm(e.memoizedProps, d, 0, ""), f == null && (f = e._debugTask), e = {
            start: t,
            end: a,
            detail: {
              devtools: {
                color: "error",
                track: Ku,
                tooltipText: e.tag === 13 ? "Hydration failed" : "Error boundary caught an error",
                properties: d
              }
            }
          }, f ? f.run(
            performance.measure.bind(performance, "​" + o, e)
          ) : performance.measure("​" + o, e);
        }
      }
    }
    function hu(e, t, a, i, o) {
      if (o !== null) {
        if (Ft) {
          var f = re(e);
          if (f !== null) {
            i = [];
            for (var d = 0; d < o.length; d++) {
              var h = o[d].value;
              i.push([
                "Error",
                typeof h == "object" && h !== null && typeof h.message == "string" ? String(h.message) : String(h)
              ]);
            }
            e.key !== null && su("key", e.key, i, 0, ""), e.memoizedProps !== null && Jm(e.memoizedProps, i, 0, ""), t = {
              start: t,
              end: a,
              detail: {
                devtools: {
                  color: "error",
                  track: Ku,
                  tooltipText: "A lifecycle or effect errored",
                  properties: i
                }
              }
            }, (e = e._debugTask) ? e.run(
              performance.measure.bind(
                performance,
                "​" + f,
                t
              )
            ) : performance.measure("​" + f, t);
          }
        }
      } else
        f = re(e), f !== null && Ft && (o = 1 > i ? "secondary-light" : 100 > i ? "secondary" : 500 > i ? "secondary-dark" : "error", (e = e._debugTask) ? e.run(
          console.timeStamp.bind(
            console,
            f,
            t,
            a,
            Ku,
            void 0,
            o
          )
        ) : console.timeStamp(
          f,
          t,
          a,
          Ku,
          void 0,
          o
        ));
    }
    function $g(e, t, a, i) {
      if (Ft && !(t <= e)) {
        var o = (a & 738197653) === a ? "tertiary-dark" : "primary-dark";
        a = (a & 536870912) === a ? "Prepared" : (a & 201326741) === a ? "Hydrated" : "Render", i ? i.run(
          console.timeStamp.bind(
            console,
            a,
            e,
            t,
            dt,
            rt,
            o
          )
        ) : console.timeStamp(
          a,
          e,
          t,
          dt,
          rt,
          o
        );
      }
    }
    function L0(e, t, a, i) {
      !Ft || t <= e || (a = (a & 738197653) === a ? "tertiary-dark" : "primary-dark", i ? i.run(
        console.timeStamp.bind(
          console,
          "Prewarm",
          e,
          t,
          dt,
          rt,
          a
        )
      ) : console.timeStamp(
        "Prewarm",
        e,
        t,
        dt,
        rt,
        a
      ));
    }
    function V0(e, t, a, i) {
      !Ft || t <= e || (a = (a & 738197653) === a ? "tertiary-dark" : "primary-dark", i ? i.run(
        console.timeStamp.bind(
          console,
          "Suspended",
          e,
          t,
          dt,
          rt,
          a
        )
      ) : console.timeStamp(
        "Suspended",
        e,
        t,
        dt,
        rt,
        a
      ));
    }
    function kg(e, t, a, i, o, f) {
      if (Ft && !(t <= e)) {
        a = [];
        for (var d = 0; d < i.length; d++) {
          var h = i[d].value;
          a.push([
            "Recoverable Error",
            typeof h == "object" && h !== null && typeof h.message == "string" ? String(h.message) : String(h)
          ]);
        }
        e = {
          start: e,
          end: t,
          detail: {
            devtools: {
              color: "primary-dark",
              track: dt,
              trackGroup: rt,
              tooltipText: o ? "Hydration Failed" : "Recovered after Error",
              properties: a
            }
          }
        }, f ? f.run(
          performance.measure.bind(performance, "Recovered", e)
        ) : performance.measure("Recovered", e);
      }
    }
    function Km(e, t, a, i) {
      !Ft || t <= e || (i ? i.run(
        console.timeStamp.bind(
          console,
          "Errored",
          e,
          t,
          dt,
          rt,
          "error"
        )
      ) : console.timeStamp(
        "Errored",
        e,
        t,
        dt,
        rt,
        "error"
      ));
    }
    function Wg(e, t, a, i) {
      !Ft || t <= e || (i ? i.run(
        console.timeStamp.bind(
          console,
          a,
          e,
          t,
          dt,
          rt,
          "secondary-light"
        )
      ) : console.timeStamp(
        a,
        e,
        t,
        dt,
        rt,
        "secondary-light"
      ));
    }
    function Z0(e, t, a, i, o) {
      if (Ft && !(t <= e)) {
        for (var f = [], d = 0; d < a.length; d++) {
          var h = a[d].value;
          f.push([
            "Error",
            typeof h == "object" && h !== null && typeof h.message == "string" ? String(h.message) : String(h)
          ]);
        }
        e = {
          start: e,
          end: t,
          detail: {
            devtools: {
              color: "error",
              track: dt,
              trackGroup: rt,
              tooltipText: i ? "Remaining Effects Errored" : "Commit Errored",
              properties: f
            }
          }
        }, o ? o.run(
          performance.measure.bind(performance, "Errored", e)
        ) : performance.measure("Errored", e);
      }
    }
    function $m(e, t, a) {
      !Ft || t <= e || console.timeStamp(
        "Animating",
        e,
        t,
        dt,
        rt,
        "secondary-dark"
      );
    }
    function Vo() {
      for (var e = um, t = AS = um = 0; t < e; ) {
        var a = $u[t];
        $u[t++] = null;
        var i = $u[t];
        $u[t++] = null;
        var o = $u[t];
        $u[t++] = null;
        var f = $u[t];
        if ($u[t++] = null, i !== null && o !== null) {
          var d = i.pending;
          d === null ? o.next = o : (o.next = d.next, d.next = o), i.pending = o;
        }
        f !== 0 && Wm(a, o, f);
      }
    }
    function Vi(e, t, a, i) {
      $u[um++] = e, $u[um++] = t, $u[um++] = a, $u[um++] = i, AS |= i, e.lanes |= i, e = e.alternate, e !== null && (e.lanes |= i);
    }
    function km(e, t, a, i) {
      return Vi(e, t, a, i), Sr(e);
    }
    function Xl(e, t) {
      return Vi(e, null, null, t), Sr(e);
    }
    function Wm(e, t, a) {
      e.lanes |= a;
      var i = e.alternate;
      i !== null && (i.lanes |= a);
      for (var o = !1, f = e.return; f !== null; )
        f.childLanes |= a, i = f.alternate, i !== null && (i.childLanes |= a), f.tag === 22 && (e = f.stateNode, e === null || e._visibility & Qp || (o = !0)), e = f, f = f.return;
      return e.tag === 3 ? (f = e.stateNode, o && t !== null && (o = 31 - kl(a), e = f.hiddenUpdates, i = e[o], i === null ? e[o] = [t] : i.push(t), t.lane = a | 536870912), f) : null;
    }
    function Sr(e) {
      if (y0 > IT)
        throw ld = y0 = 0, p0 = l1 = null, Error(
          "Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops."
        );
      ld > PT && (ld = 0, p0 = null, console.error(
        "Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."
      )), e.alternate === null && (e.flags & 4098) !== 0 && Iy(e);
      for (var t = e, a = t.return; a !== null; )
        t.alternate === null && (t.flags & 4098) !== 0 && Iy(e), t = a, a = t.return;
      return t.tag === 3 ? t.stateNode : null;
    }
    function Zi(e) {
      if (ku === null) return e;
      var t = ku(e);
      return t === void 0 ? e : t.current;
    }
    function Od(e) {
      if (ku === null) return e;
      var t = ku(e);
      return t === void 0 ? e != null && typeof e.render == "function" && (t = Zi(e.render), e.render !== t) ? (t = { $$typeof: Di, render: t }, e.displayName !== void 0 && (t.displayName = e.displayName), t) : e : t.current;
    }
    function xc(e, t) {
      if (ku === null) return !1;
      var a = e.elementType;
      t = t.type;
      var i = !1, o = typeof t == "object" && t !== null ? t.$$typeof : null;
      switch (e.tag) {
        case 1:
          typeof t == "function" && (i = !0);
          break;
        case 0:
          (typeof t == "function" || o === ml) && (i = !0);
          break;
        case 11:
          (o === Di || o === ml) && (i = !0);
          break;
        case 14:
        case 15:
          (o === mo || o === ml) && (i = !0);
          break;
        default:
          return !1;
      }
      return !!(i && (e = ku(a), e !== void 0 && e === ku(t)));
    }
    function J0(e) {
      ku !== null && typeof WeakSet == "function" && (im === null && (im = /* @__PURE__ */ new WeakSet()), im.add(e));
    }
    function K0(e, t, a) {
      do {
        var i = e, o = i.alternate, f = i.child, d = i.sibling, h = i.tag;
        i = i.type;
        var y = null;
        switch (h) {
          case 0:
          case 15:
          case 1:
            y = i;
            break;
          case 11:
            y = i.render;
        }
        if (ku === null)
          throw Error("Expected resolveFamily to be set during hot reload.");
        var p = !1;
        if (i = !1, y !== null && (y = ku(y), y !== void 0 && (a.has(y) ? i = !0 : t.has(y) && (h === 1 ? i = !0 : p = !0))), im !== null && (im.has(e) || o !== null && im.has(o)) && (i = !0), i && (e._debugNeedsRemount = !0), (i || p) && (o = Xl(e, 2), o !== null && ll(o, e, 2)), f === null || i || K0(
          f,
          t,
          a
        ), d === null) break;
        e = d;
      } while (!0);
    }
    function Fg(e, t, a, i) {
      this.tag = e, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = i, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null, this.actualDuration = -0, this.actualStartTime = -1.1, this.treeBaseDuration = this.selfBaseDuration = -0, this._debugTask = this._debugStack = this._debugOwner = this._debugInfo = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, Q1 || typeof Object.preventExtensions != "function" || Object.preventExtensions(this);
    }
    function zd(e) {
      return e = e.prototype, !(!e || !e.isReactComponent);
    }
    function mu(e, t) {
      var a = e.alternate;
      switch (a === null ? (a = U(
        e.tag,
        t,
        e.key,
        e.mode
      ), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugOwner = e._debugOwner, a._debugStack = e._debugStack, a._debugTask = e._debugTask, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null, a.actualDuration = -0, a.actualStartTime = -1.1), a.flags = e.flags & 65011712, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue, t = e.dependencies, a.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext,
        _debugThenableState: t._debugThenableState
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.refCleanup = e.refCleanup, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugInfo = e._debugInfo, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case 0:
        case 15:
          a.type = Zi(e.type);
          break;
        case 1:
          a.type = Zi(e.type);
          break;
        case 11:
          a.type = Od(e.type);
      }
      return a;
    }
    function Zo(e, t) {
      e.flags &= 65011714;
      var a = e.alternate;
      return a === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0) : (e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type, t = a.dependencies, e.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext,
        _debugThenableState: t._debugThenableState
      }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration), e;
    }
    function jc(e, t, a, i, o, f) {
      var d = 0, h = e;
      if (typeof e == "function")
        zd(e) && (d = 1), h = Zi(h);
      else if (typeof e == "string")
        d = P(), d = at(e, a, d) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
      else
        e: switch (e) {
          case zp:
            return t = U(31, a, t, o), t.elementType = zp, t.lanes = f, t;
          case $l:
            return yu(
              a.children,
              o,
              f,
              t
            );
          case _f:
            d = 8, o |= Ja, o |= Ui;
            break;
          case Yh:
            return e = a, i = o, typeof e.id != "string" && console.error(
              'Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.',
              typeof e.id
            ), t = U(12, e, t, i | $e), t.elementType = Yh, t.lanes = f, t.stateNode = { effectDuration: 0, passiveEffectDuration: 0 }, t;
          case Za:
            return t = U(13, a, t, o), t.elementType = Za, t.lanes = f, t;
          case Gh:
            return t = U(19, a, t, o), t.elementType = Gh, t.lanes = f, t;
          default:
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case Fn:
                  d = 10;
                  break e;
                case qh:
                  d = 9;
                  break e;
                case Di:
                  d = 11, h = Od(h);
                  break e;
                case mo:
                  d = 14;
                  break e;
                case ml:
                  d = 16, h = null;
                  break e;
              }
            h = "", (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (h += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), e === null ? a = "null" : Ol(e) ? a = "array" : e !== void 0 && e.$$typeof === Un ? (a = "<" + (tt(e.type) || "Unknown") + " />", h = " Did you accidentally export a JSX literal instead of a component?") : a = typeof e, (d = i ? Vt(i) : null) && (h += `

Check the render method of \`` + d + "`."), d = 29, a = Error(
              "Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + (a + "." + h)
            ), h = null;
        }
      return t = U(d, a, t, o), t.elementType = e, t.type = h, t.lanes = f, t._debugOwner = i, t;
    }
    function _d(e, t, a) {
      return t = jc(
        e.type,
        e.key,
        e.props,
        e._owner,
        t,
        a
      ), t._debugOwner = e._owner, t._debugStack = e._debugStack, t._debugTask = e._debugTask, t;
    }
    function yu(e, t, a, i) {
      return e = U(7, e, i, t), e.lanes = a, e;
    }
    function Dd(e, t, a) {
      return e = U(6, e, null, t), e.lanes = a, e;
    }
    function Fm(e) {
      var t = U(18, null, null, Ce);
      return t.stateNode = e, t;
    }
    function br(e, t, a) {
      return t = U(
        4,
        e.children !== null ? e.children : [],
        e.key,
        t
      ), t.lanes = a, t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
      }, t;
    }
    function ha(e, t) {
      if (typeof e == "object" && e !== null) {
        var a = OS.get(e);
        return a !== void 0 ? a : (t = {
          value: e,
          source: t,
          stack: Fe(t)
        }, OS.set(e, t), t);
      }
      return {
        value: e,
        source: t,
        stack: Fe(t)
      };
    }
    function pu(e, t) {
      Ji(), cm[om++] = Lp, cm[om++] = Wv, Wv = e, Lp = t;
    }
    function Im(e, t, a) {
      Ji(), Wu[Fu++] = bo, Wu[Fu++] = Eo, Wu[Fu++] = Xs, Xs = e;
      var i = bo;
      e = Eo;
      var o = 32 - kl(i) - 1;
      i &= ~(1 << o), a += 1;
      var f = 32 - kl(t) + o;
      if (30 < f) {
        var d = o - o % 5;
        f = (i & (1 << d) - 1).toString(32), i >>= d, o -= d, bo = 1 << 32 - kl(t) + o | a << o | i, Eo = f + e;
      } else
        bo = 1 << f | a << o | i, Eo = e;
    }
    function Rd(e) {
      Ji(), e.return !== null && (pu(e, 1), Im(e, 1, 0));
    }
    function Pm(e) {
      for (; e === Wv; )
        Wv = cm[--om], cm[om] = null, Lp = cm[--om], cm[om] = null;
      for (; e === Xs; )
        Xs = Wu[--Fu], Wu[Fu] = null, Eo = Wu[--Fu], Wu[Fu] = null, bo = Wu[--Fu], Wu[Fu] = null;
    }
    function $0() {
      return Ji(), Xs !== null ? { id: bo, overflow: Eo } : null;
    }
    function k0(e, t) {
      Ji(), Wu[Fu++] = bo, Wu[Fu++] = Eo, Wu[Fu++] = Xs, bo = t.id, Eo = t.overflow, Xs = e;
    }
    function Ji() {
      ct || console.error(
        "Expected to be hydrating. This is a bug in React. Please file an issue."
      );
    }
    function Yc(e, t) {
      if (e.return === null) {
        if (eu === null)
          eu = {
            fiber: e,
            children: [],
            serverProps: void 0,
            serverTail: [],
            distanceFromLeaf: t
          };
        else {
          if (eu.fiber !== e)
            throw Error(
              "Saw multiple hydration diff roots in a pass. This is a bug in React."
            );
          eu.distanceFromLeaf > t && (eu.distanceFromLeaf = t);
        }
        return eu;
      }
      var a = Yc(
        e.return,
        t + 1
      ).children;
      return 0 < a.length && a[a.length - 1].fiber === e ? (a = a[a.length - 1], a.distanceFromLeaf > t && (a.distanceFromLeaf = t), a) : (t = {
        fiber: e,
        children: [],
        serverProps: void 0,
        serverTail: [],
        distanceFromLeaf: t
      }, a.push(t), t);
    }
    function Ca() {
      ct && console.error(
        "We should not be hydrating here. This is a bug in React. Please file a bug."
      );
    }
    function Ki(e, t) {
      gc || (e = Yc(e, 0), e.serverProps = null, t !== null && (t = Dv(t), e.serverTail.push(t)));
    }
    function ri(e) {
      var t = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : !1, a = "", i = eu;
      throw i !== null && (eu = null, a = rr(i)), vu(
        ha(
          Error(
            "Hydration failed because the server rendered " + (t ? "text" : "HTML") + ` didn't match the client. As a result this tree will be regenerated on the client. This can happen if a SSR-ed Client Component used:

- A server/client branch \`if (typeof window !== 'undefined')\`.
- Variable input such as \`Date.now()\` or \`Math.random()\` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

https://react.dev/link/hydration-mismatch` + a
          ),
          e
        )
      ), zS;
    }
    function ey(e) {
      var t = e.stateNode, a = e.type, i = e.memoizedProps;
      switch (t[Fl] = e, t[fa] = i, sc(a, i), a) {
        case "dialog":
          Ge("cancel", t), Ge("close", t);
          break;
        case "iframe":
        case "object":
        case "embed":
          Ge("load", t);
          break;
        case "video":
        case "audio":
          for (a = 0; a < v0.length; a++)
            Ge(v0[a], t);
          break;
        case "source":
          Ge("error", t);
          break;
        case "img":
        case "image":
        case "link":
          Ge("error", t), Ge("load", t);
          break;
        case "details":
          Ge("toggle", t);
          break;
        case "input":
          Gl("input", i), Ge("invalid", t), Oc(t, i), U0(
            t,
            i.value,
            i.defaultValue,
            i.checked,
            i.defaultChecked,
            i.type,
            i.name,
            !0
          );
          break;
        case "option":
          Nm(t, i);
          break;
        case "select":
          Gl("select", i), Ge("invalid", t), zc(t, i);
          break;
        case "textarea":
          Gl("textarea", i), Ge("invalid", t), _c(t, i), Dc(
            t,
            i.value,
            i.defaultValue,
            i.children
          );
      }
      a = i.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || t.textContent === "" + a || i.suppressHydrationWarning === !0 || ps(t.textContent, a) ? (i.popover != null && (Ge("beforetoggle", t), Ge("toggle", t)), i.onScroll != null && Ge("scroll", t), i.onScrollEnd != null && Ge("scrollend", t), i.onClick != null && (t.onclick = wl), t = !0) : t = !1, t || ri(e, !0);
    }
    function ty(e) {
      for (Oa = e.return; Oa; )
        switch (Oa.tag) {
          case 5:
          case 31:
          case 13:
            Iu = !1;
            return;
          case 27:
          case 3:
            Iu = !0;
            return;
          default:
            Oa = Oa.return;
        }
    }
    function qc(e) {
      if (e !== Oa) return !1;
      if (!ct)
        return ty(e), ct = !0, !1;
      var t = e.tag, a;
      if ((a = t !== 3 && t !== 27) && ((a = t === 5) && (a = e.type, a = !(a !== "form" && a !== "button") || gs(e.type, e.memoizedProps)), a = !a), a && It) {
        for (a = It; a; ) {
          var i = Yc(e, 0), o = Dv(a);
          i.serverTail.push(o), a = o.type === "Suspense" ? hc(a) : on(a.nextSibling);
        }
        ri(e);
      }
      if (ty(e), t === 13) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
          throw Error(
            "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue."
          );
        It = hc(e);
      } else if (t === 31) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
          throw Error(
            "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue."
          );
        It = hc(e);
      } else
        t === 27 ? (t = It, _i(e.type) ? (e = m1, m1 = null, It = e) : It = t) : It = Oa ? on(e.stateNode.nextSibling) : null;
      return !0;
    }
    function si() {
      It = Oa = null, gc = ct = !1;
    }
    function ly() {
      var e = xf;
      return e !== null && (pn === null ? pn = e : pn.push.apply(
        pn,
        e
      ), xf = null), e;
    }
    function vu(e) {
      xf === null ? xf = [e] : xf.push(e);
    }
    function Er() {
      var e = eu;
      if (e !== null) {
        eu = null;
        for (var t = rr(e); 0 < e.children.length; )
          e = e.children[0];
        fe(e.fiber, function() {
          console.error(
            `A tree hydrated but some attributes of the server rendered HTML didn't match the client properties. This won't be patched up. This can happen if a SSR-ed Client Component used:

- A server/client branch \`if (typeof window !== 'undefined')\`.
- Variable input such as \`Date.now()\` or \`Math.random()\` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

%s%s`,
            "https://react.dev/link/hydration-mismatch",
            t
          );
        });
      }
    }
    function $i() {
      fm = Fv = null, rm = !1;
    }
    function gu(e, t, a) {
      Ue(_S, t._currentValue, e), t._currentValue = a, Ue(DS, t._currentRenderer, e), t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== V1 && console.error(
        "Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."
      ), t._currentRenderer = V1;
    }
    function Su(e, t) {
      e._currentValue = _S.current;
      var a = DS.current;
      Ae(DS, t), e._currentRenderer = a, Ae(_S, t);
    }
    function di(e, t, a) {
      for (; e !== null; ) {
        var i = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t, i !== null && (i.childLanes |= t)) : i !== null && (i.childLanes & t) !== t && (i.childLanes |= t), e === a) break;
        e = e.return;
      }
      e !== a && console.error(
        "Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue."
      );
    }
    function ki(e, t, a, i) {
      var o = e.child;
      for (o !== null && (o.return = e); o !== null; ) {
        var f = o.dependencies;
        if (f !== null) {
          var d = o.child;
          f = f.firstContext;
          e: for (; f !== null; ) {
            var h = f;
            f = o;
            for (var y = 0; y < t.length; y++)
              if (h.context === t[y]) {
                f.lanes |= a, h = f.alternate, h !== null && (h.lanes |= a), di(
                  f.return,
                  a,
                  e
                ), i || (d = null);
                break e;
              }
            f = h.next;
          }
        } else if (o.tag === 18) {
          if (d = o.return, d === null)
            throw Error(
              "We just came from a parent so we must have had a parent. This is a bug in React."
            );
          d.lanes |= a, f = d.alternate, f !== null && (f.lanes |= a), di(
            d,
            a,
            e
          ), d = null;
        } else d = o.child;
        if (d !== null) d.return = o;
        else
          for (d = o; d !== null; ) {
            if (d === e) {
              d = null;
              break;
            }
            if (o = d.sibling, o !== null) {
              o.return = d.return, d = o;
              break;
            }
            d = d.return;
          }
        o = d;
      }
    }
    function Wi(e, t, a, i) {
      e = null;
      for (var o = t, f = !1; o !== null; ) {
        if (!f) {
          if ((o.flags & 524288) !== 0) f = !0;
          else if ((o.flags & 262144) !== 0) break;
        }
        if (o.tag === 10) {
          var d = o.alternate;
          if (d === null)
            throw Error("Should have a current fiber. This is a bug in React.");
          if (d = d.memoizedProps, d !== null) {
            var h = o.type;
            dn(o.pendingProps.value, d.value) || (e !== null ? e.push(h) : e = [h]);
          }
        } else if (o === Cs.current) {
          if (d = o.alternate, d === null)
            throw Error("Should have a current fiber. This is a bug in React.");
          d.memoizedState.memoizedState !== o.memoizedState.memoizedState && (e !== null ? e.push(T0) : e = [T0]);
        }
        o = o.return;
      }
      e !== null && ki(
        t,
        e,
        a,
        i
      ), t.flags |= 262144;
    }
    function Tr(e) {
      for (e = e.firstContext; e !== null; ) {
        if (!dn(
          e.context._currentValue,
          e.memoizedValue
        ))
          return !0;
        e = e.next;
      }
      return !1;
    }
    function Pa(e) {
      Fv = e, fm = null, e = e.dependencies, e !== null && (e.firstContext = null);
    }
    function Yt(e) {
      return rm && console.error(
        "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
      ), ay(Fv, e);
    }
    function Ar(e, t) {
      return Fv === null && Pa(e), ay(e, t);
    }
    function ay(e, t) {
      var a = t._currentValue;
      if (t = { context: t, memoizedValue: a, next: null }, fm === null) {
        if (e === null)
          throw Error(
            "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
          );
        fm = t, e.dependencies = {
          lanes: 0,
          firstContext: t,
          _debugThenableState: null
        }, e.flags |= 524288;
      } else fm = fm.next = t;
      return a;
    }
    function ny() {
      return {
        controller: new GT(),
        data: /* @__PURE__ */ new Map(),
        refCount: 0
      };
    }
    function Gc(e) {
      e.controller.signal.aborted && console.warn(
        "A cache instance was retained after it was already freed. This likely indicates a bug in React."
      ), e.refCount++;
    }
    function Or(e) {
      e.refCount--, 0 > e.refCount && console.warn(
        "A cache instance was released after it was already freed. This likely indicates a bug in React."
      ), e.refCount === 0 && wT(XT, function() {
        e.controller.abort();
      });
    }
    function wn(e, t, a) {
      (e & 127) !== 0 ? 0 > Sc && (Sc = Hl(), Zp = Iv(t), RS = t, a != null && (MS = re(a)), (yt & (Pl | au)) !== da && (yl = !0, Yf = Vp), e = vf(), t = pf(), e !== sm || t !== Jp ? sm = -1.1 : t !== null && (Yf = Vp), Vs = e, Jp = t) : (e & 4194048) !== 0 && 0 > Pu && (Pu = Hl(), Kp = Iv(t), Z1 = t, a != null && (J1 = re(a)), 0 > zo) && (e = vf(), t = pf(), (e !== Gf || t !== Zs) && (Gf = -1.1), qf = e, Zs = t);
    }
    function W0(e) {
      if (0 > Sc) {
        Sc = Hl(), Zp = e._debugTask != null ? e._debugTask : null, (yt & (Pl | au)) !== da && (Yf = Vp);
        var t = vf(), a = pf();
        t !== sm || a !== Jp ? sm = -1.1 : a !== null && (Yf = Vp), Vs = t, Jp = a;
      }
      0 > Pu && (Pu = Hl(), Kp = e._debugTask != null ? e._debugTask : null, 0 > zo) && (e = vf(), t = pf(), (e !== Gf || t !== Zs) && (Gf = -1.1), qf = e, Zs = t);
    }
    function Xn() {
      var e = Qs;
      return Qs = 0, e;
    }
    function Ua(e) {
      var t = Qs;
      return Qs = e, t;
    }
    function Fi(e) {
      var t = Qs;
      return Qs += e, t;
    }
    function ma() {
      De = Oe = -1.1;
    }
    function Ml() {
      var e = Oe;
      return Oe = -1.1, e;
    }
    function ya(e) {
      0 <= e && (Oe = e);
    }
    function en() {
      var e = sl;
      return sl = -0, e;
    }
    function tn(e) {
      0 <= e && (sl = e);
    }
    function En() {
      var e = al;
      return al = null, e;
    }
    function ta() {
      var e = yl;
      return yl = !1, e;
    }
    function Md(e) {
      hn = Hl(), 0 > e.actualStartTime && (e.actualStartTime = hn);
    }
    function Jo(e) {
      if (0 <= hn) {
        var t = Hl() - hn;
        e.actualDuration += t, e.selfBaseDuration = t, hn = -1;
      }
    }
    function wc(e) {
      if (0 <= hn) {
        var t = Hl() - hn;
        e.actualDuration += t, hn = -1;
      }
    }
    function bu() {
      if (0 <= hn) {
        var e = Hl(), t = e - hn;
        hn = -1, Qs += t, sl += t, De = e;
      }
    }
    function Ha(e) {
      al === null && (al = []), al.push(e), Ao === null && (Ao = []), Ao.push(e);
    }
    function Tn() {
      hn = Hl(), 0 > Oe && (Oe = hn);
    }
    function ln(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function F0(e, t) {
      if (kp === null) {
        var a = kp = [];
        US = 0, Js = ht(), dm = {
          status: "pending",
          value: void 0,
          then: function(i) {
            a.push(i);
          }
        };
      }
      return US++, t.then(zr, zr), t;
    }
    function zr() {
      if (--US === 0 && (-1 < Pu || (zo = -1.1), kp !== null)) {
        dm !== null && (dm.status = "fulfilled");
        var e = kp;
        kp = null, Js = 0, dm = null;
        for (var t = 0; t < e.length; t++) (0, e[t])();
      }
    }
    function Xc(e, t) {
      var a = [], i = {
        status: "pending",
        value: null,
        reason: null,
        then: function(o) {
          a.push(o);
        }
      };
      return e.then(
        function() {
          i.status = "fulfilled", i.value = t;
          for (var o = 0; o < a.length; o++) (0, a[o])(t);
        },
        function(o) {
          for (i.status = "rejected", i.reason = o, o = 0; o < a.length; o++)
            (0, a[o])(void 0);
        }
      ), i;
    }
    function _r() {
      var e = Ks.current;
      return e !== null ? e : Xt.pooledCache;
    }
    function Dr(e, t) {
      t === null ? Ue(Ks, Ks.current, e) : Ue(Ks, t.pool, e);
    }
    function Cd() {
      var e = _r();
      return e === null ? null : { parent: Ul._currentValue, pool: e };
    }
    function uy() {
      return { didWarnAboutUncachedPromise: !1, thenables: [] };
    }
    function an(e) {
      return e = e.status, e === "fulfilled" || e === "rejected";
    }
    function Qc(e, t, a) {
      w.actQueue !== null && (w.didUsePromise = !0);
      var i = e.thenables;
      if (a = i[a], a === void 0 ? i.push(t) : a !== t && (e.didWarnAboutUncachedPromise || (e.didWarnAboutUncachedPromise = !0, console.error(
        "A component was suspended by an uncached promise. Creating promises inside a Client Component or hook is not yet supported, except via a Suspense-compatible library or framework."
      )), t.then(wl, wl), t = a), t._debugInfo === void 0) {
        e = performance.now(), i = t.displayName;
        var o = {
          name: typeof i == "string" ? i : "Promise",
          start: e,
          end: e,
          value: t
        };
        t._debugInfo = [{ awaited: o }], t.status !== "fulfilled" && t.status !== "rejected" && (e = function() {
          o.end = performance.now();
        }, t.then(e, e));
      }
      switch (t.status) {
        case "fulfilled":
          return t.value;
        case "rejected":
          throw e = t.reason, Ko(e), e;
        default:
          if (typeof t.status == "string")
            t.then(wl, wl);
          else {
            if (e = Xt, e !== null && 100 < e.shellSuspendCounter)
              throw Error(
                "An unknown Component is an async Client Component. Only Server Components can be async at the moment. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server."
              );
            e = t, e.status = "pending", e.then(
              function(f) {
                if (t.status === "pending") {
                  var d = t;
                  d.status = "fulfilled", d.value = f;
                }
              },
              function(f) {
                if (t.status === "pending") {
                  var d = t;
                  d.status = "rejected", d.reason = f;
                }
              }
            );
          }
          switch (t.status) {
            case "fulfilled":
              return t.value;
            case "rejected":
              throw e = t.reason, Ko(e), e;
          }
          throw ks = t, l0 = !0, hm;
      }
    }
    function nn(e) {
      try {
        return JT(e);
      } catch (t) {
        throw t !== null && typeof t == "object" && typeof t.then == "function" ? (ks = t, l0 = !0, hm) : t;
      }
    }
    function Rr() {
      if (ks === null)
        throw Error(
          "Expected a suspended thenable. This is a bug in React. Please file an issue."
        );
      var e = ks;
      return ks = null, l0 = !1, e;
    }
    function Ko(e) {
      if (e === hm || e === ig)
        throw Error(
          "Hooks are not supported inside an async component. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server."
        );
    }
    function Ut(e) {
      var t = ke;
      return e != null && (ke = t === null ? e : t.concat(e)), t;
    }
    function Na() {
      var e = ke;
      if (e != null) {
        for (var t = e.length - 1; 0 <= t; t--)
          if (e[t].name != null) {
            var a = e[t].debugTask;
            if (a != null) return a;
          }
      }
      return null;
    }
    function Qn(e, t, a) {
      for (var i = Object.keys(e.props), o = 0; o < i.length; o++) {
        var f = i[o];
        if (f !== "children" && f !== "key") {
          t === null && (t = _d(e, a.mode, 0), t._debugInfo = ke, t.return = a), fe(
            t,
            function(d) {
              console.error(
                "Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",
                d
              );
            },
            f
          );
          break;
        }
      }
    }
    function un(e) {
      var t = a0;
      return a0 += 1, mm === null && (mm = uy()), Qc(mm, e, t);
    }
    function Ba(e, t) {
      t = t.props.ref, e.ref = t !== void 0 ? t : null;
    }
    function Eu(e, t) {
      throw t.$$typeof === Op ? Error(
        `A React Element from an older version of React was rendered. This is not supported. It can happen if:
- Multiple copies of the "react" package is used.
- A library pre-bundled an old copy of "react" or "react/jsx-runtime".
- A compiler tries to "inline" JSX instead of using the runtime.`
      ) : (e = Object.prototype.toString.call(t), Error(
        "Objects are not valid as a React child (found: " + (e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e) + "). If you meant to render a collection of children, use an array instead."
      ));
    }
    function Mr(e, t) {
      var a = Na();
      a !== null ? a.run(
        Eu.bind(null, e, t)
      ) : Eu(e, t);
    }
    function Ud(e, t) {
      var a = re(e) || "Component";
      db[a] || (db[a] = !0, t = t.displayName || t.name || "Component", e.tag === 3 ? console.error(
        `Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.
  root.render(%s)`,
        t,
        t,
        t
      ) : console.error(
        `Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.
  <%s>{%s}</%s>`,
        t,
        t,
        a,
        t,
        a
      ));
    }
    function $o(e, t) {
      var a = Na();
      a !== null ? a.run(
        Ud.bind(null, e, t)
      ) : Ud(e, t);
    }
    function iy(e, t) {
      var a = re(e) || "Component";
      hb[a] || (hb[a] = !0, t = String(t), e.tag === 3 ? console.error(
        `Symbols are not valid as a React child.
  root.render(%s)`,
        t
      ) : console.error(
        `Symbols are not valid as a React child.
  <%s>%s</%s>`,
        a,
        t,
        a
      ));
    }
    function gl(e, t) {
      var a = Na();
      a !== null ? a.run(
        iy.bind(null, e, t)
      ) : iy(e, t);
    }
    function qt(e) {
      function t(S, E) {
        if (e) {
          var z = S.deletions;
          z === null ? (S.deletions = [E], S.flags |= 16) : z.push(E);
        }
      }
      function a(S, E) {
        if (!e) return null;
        for (; E !== null; )
          t(S, E), E = E.sibling;
        return null;
      }
      function i(S) {
        for (var E = /* @__PURE__ */ new Map(); S !== null; )
          S.key !== null ? E.set(S.key, S) : E.set(S.index, S), S = S.sibling;
        return E;
      }
      function o(S, E) {
        return S = mu(S, E), S.index = 0, S.sibling = null, S;
      }
      function f(S, E, z) {
        return S.index = z, e ? (z = S.alternate, z !== null ? (z = z.index, z < E ? (S.flags |= 67108866, E) : z) : (S.flags |= 67108866, E)) : (S.flags |= 1048576, E);
      }
      function d(S) {
        return e && S.alternate === null && (S.flags |= 67108866), S;
      }
      function h(S, E, z, J) {
        return E === null || E.tag !== 6 ? (E = Dd(
          z,
          S.mode,
          J
        ), E.return = S, E._debugOwner = S, E._debugTask = S._debugTask, E._debugInfo = ke, E) : (E = o(E, z), E.return = S, E._debugInfo = ke, E);
      }
      function y(S, E, z, J) {
        var ie = z.type;
        return ie === $l ? (E = _(
          S,
          E,
          z.props.children,
          J,
          z.key
        ), Qn(z, E, S), E) : E !== null && (E.elementType === ie || xc(E, z) || typeof ie == "object" && ie !== null && ie.$$typeof === ml && nn(ie) === E.type) ? (E = o(E, z.props), Ba(E, z), E.return = S, E._debugOwner = z._owner, E._debugInfo = ke, E) : (E = _d(z, S.mode, J), Ba(E, z), E.return = S, E._debugInfo = ke, E);
      }
      function p(S, E, z, J) {
        return E === null || E.tag !== 4 || E.stateNode.containerInfo !== z.containerInfo || E.stateNode.implementation !== z.implementation ? (E = br(z, S.mode, J), E.return = S, E._debugInfo = ke, E) : (E = o(E, z.children || []), E.return = S, E._debugInfo = ke, E);
      }
      function _(S, E, z, J, ie) {
        return E === null || E.tag !== 7 ? (E = yu(
          z,
          S.mode,
          J,
          ie
        ), E.return = S, E._debugOwner = S, E._debugTask = S._debugTask, E._debugInfo = ke, E) : (E = o(E, z), E.return = S, E._debugInfo = ke, E);
      }
      function R(S, E, z) {
        if (typeof E == "string" && E !== "" || typeof E == "number" || typeof E == "bigint")
          return E = Dd(
            "" + E,
            S.mode,
            z
          ), E.return = S, E._debugOwner = S, E._debugTask = S._debugTask, E._debugInfo = ke, E;
        if (typeof E == "object" && E !== null) {
          switch (E.$$typeof) {
            case Un:
              return z = _d(
                E,
                S.mode,
                z
              ), Ba(z, E), z.return = S, S = Ut(E._debugInfo), z._debugInfo = ke, ke = S, z;
            case zf:
              return E = br(
                E,
                S.mode,
                z
              ), E.return = S, E._debugInfo = ke, E;
            case ml:
              var J = Ut(E._debugInfo);
              return E = nn(E), S = R(S, E, z), ke = J, S;
          }
          if (Ol(E) || _t(E))
            return z = yu(
              E,
              S.mode,
              z,
              null
            ), z.return = S, z._debugOwner = S, z._debugTask = S._debugTask, S = Ut(E._debugInfo), z._debugInfo = ke, ke = S, z;
          if (typeof E.then == "function")
            return J = Ut(E._debugInfo), S = R(
              S,
              un(E),
              z
            ), ke = J, S;
          if (E.$$typeof === Fn)
            return R(
              S,
              Ar(S, E),
              z
            );
          Mr(S, E);
        }
        return typeof E == "function" && $o(S, E), typeof E == "symbol" && gl(S, E), null;
      }
      function b(S, E, z, J) {
        var ie = E !== null ? E.key : null;
        if (typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint")
          return ie !== null ? null : h(S, E, "" + z, J);
        if (typeof z == "object" && z !== null) {
          switch (z.$$typeof) {
            case Un:
              return z.key === ie ? (ie = Ut(z._debugInfo), S = y(
                S,
                E,
                z,
                J
              ), ke = ie, S) : null;
            case zf:
              return z.key === ie ? p(S, E, z, J) : null;
            case ml:
              return ie = Ut(z._debugInfo), z = nn(z), S = b(
                S,
                E,
                z,
                J
              ), ke = ie, S;
          }
          if (Ol(z) || _t(z))
            return ie !== null ? null : (ie = Ut(z._debugInfo), S = _(
              S,
              E,
              z,
              J,
              null
            ), ke = ie, S);
          if (typeof z.then == "function")
            return ie = Ut(z._debugInfo), S = b(
              S,
              E,
              un(z),
              J
            ), ke = ie, S;
          if (z.$$typeof === Fn)
            return b(
              S,
              E,
              Ar(S, z),
              J
            );
          Mr(S, z);
        }
        return typeof z == "function" && $o(S, z), typeof z == "symbol" && gl(S, z), null;
      }
      function Y(S, E, z, J, ie) {
        if (typeof J == "string" && J !== "" || typeof J == "number" || typeof J == "bigint")
          return S = S.get(z) || null, h(E, S, "" + J, ie);
        if (typeof J == "object" && J !== null) {
          switch (J.$$typeof) {
            case Un:
              return z = S.get(
                J.key === null ? z : J.key
              ) || null, S = Ut(J._debugInfo), E = y(
                E,
                z,
                J,
                ie
              ), ke = S, E;
            case zf:
              return S = S.get(
                J.key === null ? z : J.key
              ) || null, p(E, S, J, ie);
            case ml:
              var xe = Ut(J._debugInfo);
              return J = nn(J), E = Y(
                S,
                E,
                z,
                J,
                ie
              ), ke = xe, E;
          }
          if (Ol(J) || _t(J))
            return z = S.get(z) || null, S = Ut(J._debugInfo), E = _(
              E,
              z,
              J,
              ie,
              null
            ), ke = S, E;
          if (typeof J.then == "function")
            return xe = Ut(J._debugInfo), E = Y(
              S,
              E,
              z,
              un(J),
              ie
            ), ke = xe, E;
          if (J.$$typeof === Fn)
            return Y(
              S,
              E,
              z,
              Ar(E, J),
              ie
            );
          Mr(E, J);
        }
        return typeof J == "function" && $o(E, J), typeof J == "symbol" && gl(E, J), null;
      }
      function ne(S, E, z, J) {
        if (typeof z != "object" || z === null) return J;
        switch (z.$$typeof) {
          case Un:
          case zf:
            de(S, E, z);
            var ie = z.key;
            if (typeof ie != "string") break;
            if (J === null) {
              J = /* @__PURE__ */ new Set(), J.add(ie);
              break;
            }
            if (!J.has(ie)) {
              J.add(ie);
              break;
            }
            fe(E, function() {
              console.error(
                "Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.",
                ie
              );
            });
            break;
          case ml:
            z = nn(z), ne(S, E, z, J);
        }
        return J;
      }
      function oe(S, E, z, J) {
        for (var ie = null, xe = null, Ee = null, ve = E, Ke = E = 0, Pt = null; ve !== null && Ke < z.length; Ke++) {
          ve.index > Ke ? (Pt = ve, ve = null) : Pt = ve.sibling;
          var Dl = b(
            S,
            ve,
            z[Ke],
            J
          );
          if (Dl === null) {
            ve === null && (ve = Pt);
            break;
          }
          ie = ne(
            S,
            Dl,
            z[Ke],
            ie
          ), e && ve && Dl.alternate === null && t(S, ve), E = f(Dl, E, Ke), Ee === null ? xe = Dl : Ee.sibling = Dl, Ee = Dl, ve = Pt;
        }
        if (Ke === z.length)
          return a(S, ve), ct && pu(S, Ke), xe;
        if (ve === null) {
          for (; Ke < z.length; Ke++)
            ve = R(S, z[Ke], J), ve !== null && (ie = ne(
              S,
              ve,
              z[Ke],
              ie
            ), E = f(
              ve,
              E,
              Ke
            ), Ee === null ? xe = ve : Ee.sibling = ve, Ee = ve);
          return ct && pu(S, Ke), xe;
        }
        for (ve = i(ve); Ke < z.length; Ke++)
          Pt = Y(
            ve,
            S,
            Ke,
            z[Ke],
            J
          ), Pt !== null && (ie = ne(
            S,
            Pt,
            z[Ke],
            ie
          ), e && Pt.alternate !== null && ve.delete(
            Pt.key === null ? Ke : Pt.key
          ), E = f(
            Pt,
            E,
            Ke
          ), Ee === null ? xe = Pt : Ee.sibling = Pt, Ee = Pt);
        return e && ve.forEach(function(No) {
          return t(S, No);
        }), ct && pu(S, Ke), xe;
      }
      function Kt(S, E, z, J) {
        if (z == null)
          throw Error("An iterable object provided no iterator.");
        for (var ie = null, xe = null, Ee = E, ve = E = 0, Ke = null, Pt = null, Dl = z.next(); Ee !== null && !Dl.done; ve++, Dl = z.next()) {
          Ee.index > ve ? (Ke = Ee, Ee = null) : Ke = Ee.sibling;
          var No = b(S, Ee, Dl.value, J);
          if (No === null) {
            Ee === null && (Ee = Ke);
            break;
          }
          Pt = ne(
            S,
            No,
            Dl.value,
            Pt
          ), e && Ee && No.alternate === null && t(S, Ee), E = f(No, E, ve), xe === null ? ie = No : xe.sibling = No, xe = No, Ee = Ke;
        }
        if (Dl.done)
          return a(S, Ee), ct && pu(S, ve), ie;
        if (Ee === null) {
          for (; !Dl.done; ve++, Dl = z.next())
            Ee = R(S, Dl.value, J), Ee !== null && (Pt = ne(
              S,
              Ee,
              Dl.value,
              Pt
            ), E = f(
              Ee,
              E,
              ve
            ), xe === null ? ie = Ee : xe.sibling = Ee, xe = Ee);
          return ct && pu(S, ve), ie;
        }
        for (Ee = i(Ee); !Dl.done; ve++, Dl = z.next())
          Ke = Y(
            Ee,
            S,
            ve,
            Dl.value,
            J
          ), Ke !== null && (Pt = ne(
            S,
            Ke,
            Dl.value,
            Pt
          ), e && Ke.alternate !== null && Ee.delete(
            Ke.key === null ? ve : Ke.key
          ), E = f(
            Ke,
            E,
            ve
          ), xe === null ? ie = Ke : xe.sibling = Ke, xe = Ke);
        return e && Ee.forEach(function(pA) {
          return t(S, pA);
        }), ct && pu(S, ve), ie;
      }
      function st(S, E, z, J) {
        if (typeof z == "object" && z !== null && z.type === $l && z.key === null && (Qn(z, null, S), z = z.props.children), typeof z == "object" && z !== null) {
          switch (z.$$typeof) {
            case Un:
              var ie = Ut(z._debugInfo);
              e: {
                for (var xe = z.key; E !== null; ) {
                  if (E.key === xe) {
                    if (xe = z.type, xe === $l) {
                      if (E.tag === 7) {
                        a(
                          S,
                          E.sibling
                        ), J = o(
                          E,
                          z.props.children
                        ), J.return = S, J._debugOwner = z._owner, J._debugInfo = ke, Qn(z, J, S), S = J;
                        break e;
                      }
                    } else if (E.elementType === xe || xc(
                      E,
                      z
                    ) || typeof xe == "object" && xe !== null && xe.$$typeof === ml && nn(xe) === E.type) {
                      a(
                        S,
                        E.sibling
                      ), J = o(E, z.props), Ba(J, z), J.return = S, J._debugOwner = z._owner, J._debugInfo = ke, S = J;
                      break e;
                    }
                    a(S, E);
                    break;
                  } else t(S, E);
                  E = E.sibling;
                }
                z.type === $l ? (J = yu(
                  z.props.children,
                  S.mode,
                  J,
                  z.key
                ), J.return = S, J._debugOwner = S, J._debugTask = S._debugTask, J._debugInfo = ke, Qn(z, J, S), S = J) : (J = _d(
                  z,
                  S.mode,
                  J
                ), Ba(J, z), J.return = S, J._debugInfo = ke, S = J);
              }
              return S = d(S), ke = ie, S;
            case zf:
              e: {
                for (ie = z, z = ie.key; E !== null; ) {
                  if (E.key === z)
                    if (E.tag === 4 && E.stateNode.containerInfo === ie.containerInfo && E.stateNode.implementation === ie.implementation) {
                      a(
                        S,
                        E.sibling
                      ), J = o(
                        E,
                        ie.children || []
                      ), J.return = S, S = J;
                      break e;
                    } else {
                      a(S, E);
                      break;
                    }
                  else t(S, E);
                  E = E.sibling;
                }
                J = br(
                  ie,
                  S.mode,
                  J
                ), J.return = S, S = J;
              }
              return d(S);
            case ml:
              return ie = Ut(z._debugInfo), z = nn(z), S = st(
                S,
                E,
                z,
                J
              ), ke = ie, S;
          }
          if (Ol(z))
            return ie = Ut(z._debugInfo), S = oe(
              S,
              E,
              z,
              J
            ), ke = ie, S;
          if (_t(z)) {
            if (ie = Ut(z._debugInfo), xe = _t(z), typeof xe != "function")
              throw Error(
                "An object is not an iterable. This error is likely caused by a bug in React. Please file an issue."
              );
            var Ee = xe.call(z);
            return Ee === z ? (S.tag !== 0 || Object.prototype.toString.call(S.type) !== "[object GeneratorFunction]" || Object.prototype.toString.call(Ee) !== "[object Generator]") && (rb || console.error(
              "Using Iterators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. You can also use an Iterable that can iterate multiple times over the same items."
            ), rb = !0) : z.entries !== xe || xS || (console.error(
              "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
            ), xS = !0), S = Kt(
              S,
              E,
              Ee,
              J
            ), ke = ie, S;
          }
          if (typeof z.then == "function")
            return ie = Ut(z._debugInfo), S = st(
              S,
              E,
              un(z),
              J
            ), ke = ie, S;
          if (z.$$typeof === Fn)
            return st(
              S,
              E,
              Ar(S, z),
              J
            );
          Mr(S, z);
        }
        return typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint" ? (ie = "" + z, E !== null && E.tag === 6 ? (a(
          S,
          E.sibling
        ), J = o(E, ie), J.return = S, S = J) : (a(S, E), J = Dd(
          ie,
          S.mode,
          J
        ), J.return = S, J._debugOwner = S, J._debugTask = S._debugTask, J._debugInfo = ke, S = J), d(S)) : (typeof z == "function" && $o(S, z), typeof z == "symbol" && gl(S, z), a(S, E));
      }
      return function(S, E, z, J) {
        var ie = ke;
        ke = null;
        try {
          a0 = 0;
          var xe = st(
            S,
            E,
            z,
            J
          );
          return mm = null, xe;
        } catch (Pt) {
          if (Pt === hm || Pt === ig) throw Pt;
          var Ee = U(29, Pt, null, S.mode);
          Ee.lanes = J, Ee.return = S;
          var ve = Ee._debugInfo = ke;
          if (Ee._debugOwner = S._debugOwner, Ee._debugTask = S._debugTask, ve != null) {
            for (var Ke = ve.length - 1; 0 <= Ke; Ke--)
              if (typeof ve[Ke].stack == "string") {
                Ee._debugOwner = ve[Ke], Ee._debugTask = ve[Ke].debugTask;
                break;
              }
          }
          return Ee;
        } finally {
          ke = ie;
        }
      };
    }
    function ut(e, t) {
      var a = Ol(e);
      return e = !a && typeof _t(e) == "function", a || e ? (a = a ? "array" : "iterable", console.error(
        "A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>",
        a,
        t,
        a
      ), !1) : !0;
    }
    function Tu(e) {
      e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, lanes: 0, hiddenCallbacks: null },
        callbacks: null
      };
    }
    function xa(e, t) {
      e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        callbacks: null
      });
    }
    function Au(e) {
      return {
        lane: e,
        tag: yb,
        payload: null,
        callback: null,
        next: null
      };
    }
    function pa(e, t, a) {
      var i = e.updateQueue;
      if (i === null) return null;
      if (i = i.shared, YS === i && !gb) {
        var o = re(e);
        console.error(
          `An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback.

Please update the following component: %s`,
          o
        ), gb = !0;
      }
      return (yt & Pl) !== da ? (o = i.pending, o === null ? t.next = t : (t.next = o.next, o.next = t), i.pending = t, t = Sr(e), Wm(e, null, a), t) : (Vi(e, i, t, a), Sr(e));
    }
    function ko(e, t, a) {
      if (t = t.updateQueue, t !== null && (t = t.shared, (a & 4194048) !== 0)) {
        var i = t.lanes;
        i &= e.pendingLanes, a |= i, t.lanes = a, nr(e, a);
      }
    }
    function Cr(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null && (i = i.updateQueue, a === i)) {
        var o = null, f = null;
        if (a = a.firstBaseUpdate, a !== null) {
          do {
            var d = {
              lane: a.lane,
              tag: a.tag,
              payload: a.payload,
              callback: null,
              next: null
            };
            f === null ? o = f = d : f = f.next = d, a = a.next;
          } while (a !== null);
          f === null ? o = f = t : f = f.next = t;
        } else o = f = t;
        a = {
          baseState: i.baseState,
          firstBaseUpdate: o,
          lastBaseUpdate: f,
          shared: i.shared,
          callbacks: i.callbacks
        }, e.updateQueue = a;
        return;
      }
      e = a.lastBaseUpdate, e === null ? a.firstBaseUpdate = t : e.next = t, a.lastBaseUpdate = t;
    }
    function Ou() {
      if (qS) {
        var e = dm;
        if (e !== null) throw e;
      }
    }
    function Ln(e, t, a, i) {
      qS = !1;
      var o = e.updateQueue;
      wf = !1, YS = o.shared;
      var f = o.firstBaseUpdate, d = o.lastBaseUpdate, h = o.shared.pending;
      if (h !== null) {
        o.shared.pending = null;
        var y = h, p = y.next;
        y.next = null, d === null ? f = p : d.next = p, d = y;
        var _ = e.alternate;
        _ !== null && (_ = _.updateQueue, h = _.lastBaseUpdate, h !== d && (h === null ? _.firstBaseUpdate = p : h.next = p, _.lastBaseUpdate = y));
      }
      if (f !== null) {
        var R = o.baseState;
        d = 0, _ = p = y = null, h = f;
        do {
          var b = h.lane & -536870913, Y = b !== h.lane;
          if (Y ? (We & b) === b : (i & b) === b) {
            b !== 0 && b === Js && (qS = !0), _ !== null && (_ = _.next = {
              lane: 0,
              tag: h.tag,
              payload: h.payload,
              callback: null,
              next: null
            });
            e: {
              b = e;
              var ne = h, oe = t, Kt = a;
              switch (ne.tag) {
                case pb:
                  if (ne = ne.payload, typeof ne == "function") {
                    rm = !0;
                    var st = ne.call(
                      Kt,
                      R,
                      oe
                    );
                    if (b.mode & Ja) {
                      me(!0);
                      try {
                        ne.call(Kt, R, oe);
                      } finally {
                        me(!1);
                      }
                    }
                    rm = !1, R = st;
                    break e;
                  }
                  R = ne;
                  break e;
                case jS:
                  b.flags = b.flags & -65537 | 128;
                case yb:
                  if (st = ne.payload, typeof st == "function") {
                    if (rm = !0, ne = st.call(
                      Kt,
                      R,
                      oe
                    ), b.mode & Ja) {
                      me(!0);
                      try {
                        st.call(Kt, R, oe);
                      } finally {
                        me(!1);
                      }
                    }
                    rm = !1;
                  } else ne = st;
                  if (ne == null) break e;
                  R = Je({}, R, ne);
                  break e;
                case vb:
                  wf = !0;
              }
            }
            b = h.callback, b !== null && (e.flags |= 64, Y && (e.flags |= 8192), Y = o.callbacks, Y === null ? o.callbacks = [b] : Y.push(b));
          } else
            Y = {
              lane: b,
              tag: h.tag,
              payload: h.payload,
              callback: h.callback,
              next: null
            }, _ === null ? (p = _ = Y, y = R) : _ = _.next = Y, d |= b;
          if (h = h.next, h === null) {
            if (h = o.shared.pending, h === null)
              break;
            Y = h, h = Y.next, Y.next = null, o.lastBaseUpdate = Y, o.shared.pending = null;
          }
        } while (!0);
        _ === null && (y = R), o.baseState = y, o.firstBaseUpdate = p, o.lastBaseUpdate = _, f === null && (o.shared.lanes = 0), Lf |= d, e.lanes = d, e.memoizedState = R;
      }
      YS = null;
    }
    function Hd(e, t) {
      if (typeof e != "function")
        throw Error(
          "Invalid argument passed as callback. Expected a function. Instead received: " + e
        );
      e.call(t);
    }
    function Ur(e, t) {
      var a = e.shared.hiddenCallbacks;
      if (a !== null)
        for (e.shared.hiddenCallbacks = null, e = 0; e < a.length; e++)
          Hd(a[e], t);
    }
    function Nd(e, t) {
      var a = e.callbacks;
      if (a !== null)
        for (e.callbacks = null, e = 0; e < a.length; e++)
          Hd(a[e], t);
    }
    function Ii(e, t) {
      var a = Ec;
      Ue(og, a, e), Ue(ym, t, e), Ec = a | t.baseLanes;
    }
    function Vn(e) {
      Ue(og, Ec, e), Ue(
        ym,
        ym.current,
        e
      );
    }
    function zu(e) {
      Ec = og.current, Ae(ym, e), Ae(og, e);
    }
    function la(e) {
      var t = e.alternate;
      Ue(
        _l,
        _l.current & pm,
        e
      ), Ue(tu, e, e), ei === null && (t === null || ym.current !== null || t.memoizedState !== null) && (ei = e);
    }
    function Hr(e) {
      Ue(_l, _l.current, e), Ue(tu, e, e), ei === null && (ei = e);
    }
    function Bd(e) {
      e.tag === 22 ? (Ue(_l, _l.current, e), Ue(tu, e, e), ei === null && (ei = e)) : cn(e);
    }
    function cn(e) {
      Ue(_l, _l.current, e), Ue(
        tu,
        tu.current,
        e
      );
    }
    function aa(e) {
      Ae(tu, e), ei === e && (ei = null), Ae(_l, e);
    }
    function _u(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === 13) {
          var a = t.memoizedState;
          if (a !== null && (a = a.dehydrated, a === null || op(a) || Oh(a)))
            return t;
        } else if (t.tag === 19 && (t.memoizedProps.revealOrder === "forwards" || t.memoizedProps.revealOrder === "backwards" || t.memoizedProps.revealOrder === "unstable_legacy-backwards" || t.memoizedProps.revealOrder === "together")) {
          if ((t.flags & 128) !== 0) return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    function be() {
      var e = q;
      li === null ? li = [e] : li.push(e);
    }
    function F() {
      var e = q;
      if (li !== null && (Ro++, li[Ro] !== e)) {
        var t = re(Be);
        if (!Sb.has(t) && (Sb.add(t), li !== null)) {
          for (var a = "", i = 0; i <= Ro; i++) {
            var o = li[i], f = i === Ro ? e : o;
            for (o = i + 1 + ". " + o; 30 > o.length; )
              o += " ";
            o += f + `
`, a += o;
          }
          console.error(
            `React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://react.dev/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`,
            t,
            a
          );
        }
      }
    }
    function Lc(e) {
      e == null || Ol(e) || console.error(
        "%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.",
        q,
        typeof e
      );
    }
    function xd() {
      var e = re(Be);
      Eb.has(e) || (Eb.add(e), console.error(
        "ReactDOM.useFormState has been renamed to React.useActionState. Please update %s to use React.useActionState.",
        e
      ));
    }
    function ul() {
      throw Error(
        `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
      );
    }
    function cy(e, t) {
      if (i0) return !1;
      if (t === null)
        return console.error(
          "%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.",
          q
        ), !1;
      e.length !== t.length && console.error(
        `The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`,
        q,
        "[" + t.join(", ") + "]",
        "[" + e.join(", ") + "]"
      );
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!dn(e[a], t[a])) return !1;
      return !0;
    }
    function il(e, t, a, i, o, f) {
      _o = f, Be = t, li = e !== null ? e._debugHookTypes : null, Ro = -1, i0 = e !== null && e.type !== t.type, (Object.prototype.toString.call(a) === "[object AsyncFunction]" || Object.prototype.toString.call(a) === "[object AsyncGeneratorFunction]") && (f = re(Be), GS.has(f) || (GS.add(f), console.error(
        "%s is an async Client Component. Only Server Components can be async at the moment. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.",
        f === null ? "An unknown Component" : "<" + f + ">"
      ))), t.memoizedState = null, t.updateQueue = null, t.lanes = 0, w.H = e !== null && e.memoizedState !== null ? XS : li !== null ? Tb : wS, Fs = f = (t.mode & Ja) !== Ce;
      var d = HS(a, i, o);
      if (Fs = !1, gm && (d = Vc(
        t,
        a,
        i,
        o
      )), f) {
        me(!0);
        try {
          d = Vc(
            t,
            a,
            i,
            o
          );
        } finally {
          me(!1);
        }
      }
      return jd(e, t), d;
    }
    function jd(e, t) {
      t._debugHookTypes = li, t.dependencies === null ? Do !== null && (t.dependencies = {
        lanes: 0,
        firstContext: null,
        _debugThenableState: Do
      }) : t.dependencies._debugThenableState = Do, w.H = c0;
      var a = wt !== null && wt.next !== null;
      if (_o = 0, li = q = Nl = wt = Be = null, Ro = -1, e !== null && (e.flags & 65011712) !== (t.flags & 65011712) && console.error(
        "Internal React error: Expected static flag was missing. Please notify the React team."
      ), rg = !1, u0 = 0, Do = null, a)
        throw Error(
          "Rendered fewer hooks than expected. This may be caused by an accidental early return statement."
        );
      e === null || Bl || (e = e.dependencies, e !== null && Tr(e) && (Bl = !0)), l0 ? (l0 = !1, e = !0) : e = !1, e && (t = re(t) || "Unknown", bb.has(t) || GS.has(t) || (bb.add(t), console.error(
        "`use` was called from inside a try/catch block. This is not allowed and can lead to unexpected behavior. To handle errors triggered by `use`, wrap your component in a error boundary."
      )));
    }
    function Vc(e, t, a, i) {
      Be = e;
      var o = 0;
      do {
        if (gm && (Do = null), u0 = 0, gm = !1, o >= $T)
          throw Error(
            "Too many re-renders. React limits the number of renders to prevent an infinite loop."
          );
        if (o += 1, i0 = !1, Nl = wt = null, e.updateQueue != null) {
          var f = e.updateQueue;
          f.lastEffect = null, f.events = null, f.stores = null, f.memoCache != null && (f.memoCache.index = 0);
        }
        Ro = -1, w.H = Ab, f = HS(t, a, i);
      } while (gm);
      return f;
    }
    function Nr() {
      var e = w.H, t = e.useState()[0];
      return t = typeof t.then == "function" ? Wo(t) : t, e = e.useState()[0], (wt !== null ? wt.memoizedState : null) !== e && (Be.flags |= 1024), t;
    }
    function Br() {
      var e = sg !== 0;
      return sg = 0, e;
    }
    function Pi(e, t, a) {
      t.updateQueue = e.updateQueue, t.flags = (t.mode & Ui) !== Ce ? t.flags & -402655237 : t.flags & -2053, e.lanes &= ~a;
    }
    function ec(e) {
      if (rg) {
        for (e = e.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        rg = !1;
      }
      _o = 0, li = Nl = wt = Be = null, Ro = -1, q = null, gm = !1, u0 = sg = 0, Do = null;
    }
    function va() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return Nl === null ? Be.memoizedState = Nl = e : Nl = Nl.next = e, Nl;
    }
    function Tt() {
      if (wt === null) {
        var e = Be.alternate;
        e = e !== null ? e.memoizedState : null;
      } else e = wt.next;
      var t = Nl === null ? Be.memoizedState : Nl.next;
      if (t !== null)
        Nl = t, wt = e;
      else {
        if (e === null)
          throw Be.alternate === null ? Error(
            "Update hook called on initial render. This is likely a bug in React. Please file an issue."
          ) : Error("Rendered more hooks than during the previous render.");
        wt = e, e = {
          memoizedState: wt.memoizedState,
          baseState: wt.baseState,
          baseQueue: wt.baseQueue,
          queue: wt.queue,
          next: null
        }, Nl === null ? Be.memoizedState = Nl = e : Nl = Nl.next = e;
      }
      return Nl;
    }
    function Yd() {
      return { lastEffect: null, events: null, stores: null, memoCache: null };
    }
    function Wo(e) {
      var t = u0;
      return u0 += 1, Do === null && (Do = uy()), e = Qc(Do, e, t), t = Be, (Nl === null ? t.memoizedState : Nl.next) === null && (t = t.alternate, w.H = t !== null && t.memoizedState !== null ? XS : wS), e;
    }
    function ja(e) {
      if (e !== null && typeof e == "object") {
        if (typeof e.then == "function") return Wo(e);
        if (e.$$typeof === Fn) return Yt(e);
      }
      throw Error("An unsupported type was passed to use(): " + String(e));
    }
    function hi(e) {
      var t = null, a = Be.updateQueue;
      if (a !== null && (t = a.memoCache), t == null) {
        var i = Be.alternate;
        i !== null && (i = i.updateQueue, i !== null && (i = i.memoCache, i != null && (t = {
          data: i.data.map(function(o) {
            return o.slice();
          }),
          index: 0
        })));
      }
      if (t == null && (t = { data: [], index: 0 }), a === null && (a = Yd(), Be.updateQueue = a), a.memoCache = t, a = t.data[t.index], a === void 0 || i0)
        for (a = t.data[t.index] = Array(e), i = 0; i < e; i++)
          a[i] = nS;
      else
        a.length !== e && console.error(
          "Expected a constant size argument for each invocation of useMemoCache. The previous cache was allocated with size %s but size %s was requested.",
          a.length,
          e
        );
      return t.index++, a;
    }
    function Ya(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function qd(e, t, a) {
      var i = va();
      if (a !== void 0) {
        var o = a(t);
        if (Fs) {
          me(!0);
          try {
            a(t);
          } finally {
            me(!1);
          }
        }
      } else o = t;
      return i.memoizedState = i.baseState = o, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: o
      }, i.queue = e, e = e.dispatch = yy.bind(
        null,
        Be,
        e
      ), [i.memoizedState, e];
    }
    function Zn(e) {
      var t = Tt();
      return xr(t, wt, e);
    }
    function xr(e, t, a) {
      var i = e.queue;
      if (i === null)
        throw Error(
          "Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)"
        );
      i.lastRenderedReducer = a;
      var o = e.baseQueue, f = i.pending;
      if (f !== null) {
        if (o !== null) {
          var d = o.next;
          o.next = f.next, f.next = d;
        }
        t.baseQueue !== o && console.error(
          "Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."
        ), t.baseQueue = o = f, i.pending = null;
      }
      if (f = e.baseState, o === null) e.memoizedState = f;
      else {
        t = o.next;
        var h = d = null, y = null, p = t, _ = !1;
        do {
          var R = p.lane & -536870913;
          if (R !== p.lane ? (We & R) === R : (_o & R) === R) {
            var b = p.revertLane;
            if (b === 0)
              y !== null && (y = y.next = {
                lane: 0,
                revertLane: 0,
                gesture: null,
                action: p.action,
                hasEagerState: p.hasEagerState,
                eagerState: p.eagerState,
                next: null
              }), R === Js && (_ = !0);
            else if ((_o & b) === b) {
              p = p.next, b === Js && (_ = !0);
              continue;
            } else
              R = {
                lane: 0,
                revertLane: p.revertLane,
                gesture: null,
                action: p.action,
                hasEagerState: p.hasEagerState,
                eagerState: p.eagerState,
                next: null
              }, y === null ? (h = y = R, d = f) : y = y.next = R, Be.lanes |= b, Lf |= b;
            R = p.action, Fs && a(f, R), f = p.hasEagerState ? p.eagerState : a(f, R);
          } else
            b = {
              lane: R,
              revertLane: p.revertLane,
              gesture: p.gesture,
              action: p.action,
              hasEagerState: p.hasEagerState,
              eagerState: p.eagerState,
              next: null
            }, y === null ? (h = y = b, d = f) : y = y.next = b, Be.lanes |= R, Lf |= R;
          p = p.next;
        } while (p !== null && p !== t);
        if (y === null ? d = f : y.next = h, !dn(f, e.memoizedState) && (Bl = !0, _ && (a = dm, a !== null)))
          throw a;
        e.memoizedState = f, e.baseState = d, e.baseQueue = y, i.lastRenderedState = f;
      }
      return o === null && (i.lanes = 0), [e.memoizedState, i.dispatch];
    }
    function tc(e) {
      var t = Tt(), a = t.queue;
      if (a === null)
        throw Error(
          "Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)"
        );
      a.lastRenderedReducer = e;
      var i = a.dispatch, o = a.pending, f = t.memoizedState;
      if (o !== null) {
        a.pending = null;
        var d = o = o.next;
        do
          f = e(f, d.action), d = d.next;
        while (d !== o);
        dn(f, t.memoizedState) || (Bl = !0), t.memoizedState = f, t.baseQueue === null && (t.baseState = f), a.lastRenderedState = f;
      }
      return [f, i];
    }
    function Fo(e, t, a) {
      var i = Be, o = va();
      if (ct) {
        if (a === void 0)
          throw Error(
            "Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering."
          );
        var f = a();
        vm || f === a() || (console.error(
          "The result of getServerSnapshot should be cached to avoid an infinite loop"
        ), vm = !0);
      } else {
        if (f = t(), vm || (a = t(), dn(f, a) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), vm = !0)), Xt === null)
          throw Error(
            "Expected a work-in-progress root. This is a bug in React. Please file an issue."
          );
        (We & 127) !== 0 || oy(i, t, f);
      }
      return o.memoizedState = f, a = { value: f, getSnapshot: t }, o.queue = a, wr(
        ac.bind(null, i, a, e),
        [e]
      ), i.flags |= 2048, Kc(
        ti | yn,
        { destroy: void 0 },
        lc.bind(
          null,
          i,
          a,
          f,
          t
        ),
        null
      ), f;
    }
    function jr(e, t, a) {
      var i = Be, o = Tt(), f = ct;
      if (f) {
        if (a === void 0)
          throw Error(
            "Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering."
          );
        a = a();
      } else if (a = t(), !vm) {
        var d = t();
        dn(a, d) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), vm = !0);
      }
      (d = !dn(
        (wt || o).memoizedState,
        a
      )) && (o.memoizedState = a, Bl = !0), o = o.queue;
      var h = ac.bind(null, i, o, e);
      if (Ql(2048, yn, h, [e]), o.getSnapshot !== t || d || Nl !== null && Nl.memoizedState.tag & ti) {
        if (i.flags |= 2048, Kc(
          ti | yn,
          { destroy: void 0 },
          lc.bind(
            null,
            i,
            o,
            a,
            t
          ),
          null
        ), Xt === null)
          throw Error(
            "Expected a work-in-progress root. This is a bug in React. Please file an issue."
          );
        f || (_o & 127) !== 0 || oy(i, t, a);
      }
      return a;
    }
    function oy(e, t, a) {
      e.flags |= 16384, e = { getSnapshot: t, value: a }, t = Be.updateQueue, t === null ? (t = Yd(), Be.updateQueue = t, t.stores = [e]) : (a = t.stores, a === null ? t.stores = [e] : a.push(e));
    }
    function lc(e, t, a, i) {
      t.value = a, t.getSnapshot = i, fy(t) && ry(e);
    }
    function ac(e, t, a) {
      return a(function() {
        fy(t) && (wn(2, "updateSyncExternalStore()", e), ry(e));
      });
    }
    function fy(e) {
      var t = e.getSnapshot;
      e = e.value;
      try {
        var a = t();
        return !dn(e, a);
      } catch {
        return !0;
      }
    }
    function ry(e) {
      var t = Xl(e, 2);
      t !== null && ll(t, e, 2);
    }
    function nc(e) {
      var t = va();
      if (typeof e == "function") {
        var a = e;
        if (e = a(), Fs) {
          me(!0);
          try {
            a();
          } finally {
            me(!1);
          }
        }
      }
      return t.memoizedState = t.baseState = e, t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ya,
        lastRenderedState: e
      }, t;
    }
    function Zc(e) {
      e = nc(e);
      var t = e.queue, a = Zd.bind(null, Be, t);
      return t.dispatch = a, [e.memoizedState, a];
    }
    function Io(e) {
      var t = va();
      t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = a, t = Ll.bind(
        null,
        Be,
        !0,
        a
      ), a.dispatch = t, [e, t];
    }
    function Po(e, t) {
      var a = Tt();
      return Yr(a, wt, e, t);
    }
    function Yr(e, t, a, i) {
      return e.baseState = a, xr(
        e,
        wt,
        typeof i == "function" ? i : Ya
      );
    }
    function sy(e, t) {
      var a = Tt();
      return wt !== null ? Yr(a, wt, e, t) : (a.baseState = e, [e, a.queue.dispatch]);
    }
    function Jc(e, t, a, i, o) {
      if (kt(e))
        throw Error("Cannot update form state while rendering.");
      if (e = t.action, e !== null) {
        var f = {
          payload: o,
          action: e,
          next: null,
          isTransition: !0,
          status: "pending",
          value: null,
          reason: null,
          listeners: [],
          then: function(d) {
            f.listeners.push(d);
          }
        };
        w.T !== null ? a(!0) : f.isTransition = !1, i(f), a = t.pending, a === null ? (f.next = t.pending = f, dy(t, f)) : (f.next = a.next, t.pending = a.next = f);
      }
    }
    function dy(e, t) {
      var a = t.action, i = t.payload, o = e.state;
      if (t.isTransition) {
        var f = w.T, d = {};
        d._updatedFibers = /* @__PURE__ */ new Set(), w.T = d;
        try {
          var h = a(o, i), y = w.S;
          y !== null && y(d, h), mi(e, t, h);
        } catch (p) {
          qr(e, t, p);
        } finally {
          f !== null && d.types !== null && (f.types !== null && f.types !== d.types && console.error(
            "We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."
          ), f.types = d.types), w.T = f, f === null && d._updatedFibers && (e = d._updatedFibers.size, d._updatedFibers.clear(), 10 < e && console.warn(
            "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
          ));
        }
      } else
        try {
          d = a(o, i), mi(e, t, d);
        } catch (p) {
          qr(e, t, p);
        }
    }
    function mi(e, t, a) {
      a !== null && typeof a == "object" && typeof a.then == "function" ? (w.asyncTransitions++, a.then(gi, gi), a.then(
        function(i) {
          Gd(e, t, i);
        },
        function(i) {
          return qr(e, t, i);
        }
      ), t.isTransition || console.error(
        "An async function with useActionState was called outside of a transition. This is likely not what you intended (for example, isPending will not update correctly). Either call the returned function inside startTransition, or pass it to an `action` or `formAction` prop."
      )) : Gd(e, t, a);
    }
    function Gd(e, t, a) {
      t.status = "fulfilled", t.value = a, yi(t), e.state = a, t = e.pending, t !== null && (a = t.next, a === t ? e.pending = null : (a = a.next, t.next = a, dy(e, a)));
    }
    function qr(e, t, a) {
      var i = e.pending;
      if (e.pending = null, i !== null) {
        i = i.next;
        do
          t.status = "rejected", t.reason = a, yi(t), t = t.next;
        while (t !== i);
      }
      e.action = null;
    }
    function yi(e) {
      e = e.listeners;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
    function pi(e, t) {
      return t;
    }
    function Du(e, t) {
      if (ct) {
        var a = Xt.formState;
        if (a !== null) {
          e: {
            var i = Be;
            if (ct) {
              if (It) {
                t: {
                  for (var o = It, f = Iu; o.nodeType !== 8; ) {
                    if (!f) {
                      o = null;
                      break t;
                    }
                    if (o = on(
                      o.nextSibling
                    ), o === null) {
                      o = null;
                      break t;
                    }
                  }
                  f = o.data, o = f === r1 || f === oE ? o : null;
                }
                if (o) {
                  It = on(
                    o.nextSibling
                  ), i = o.data === r1;
                  break e;
                }
              }
              ri(i);
            }
            i = !1;
          }
          i && (t = a[0]);
        }
      }
      return a = va(), a.memoizedState = a.baseState = t, i = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: pi,
        lastRenderedState: t
      }, a.queue = i, a = Zd.bind(
        null,
        Be,
        i
      ), i.dispatch = a, i = nc(!1), f = Ll.bind(
        null,
        Be,
        !1,
        i.queue
      ), i = va(), o = {
        state: t,
        dispatch: null,
        action: e,
        pending: null
      }, i.queue = o, a = Jc.bind(
        null,
        Be,
        o,
        f,
        a
      ), o.dispatch = a, i.memoizedState = e, [t, a, !1];
    }
    function ef(e) {
      var t = Tt();
      return wd(t, wt, e);
    }
    function wd(e, t, a) {
      if (t = xr(
        e,
        t,
        pi
      )[0], e = Zn(Ya)[0], typeof t == "object" && t !== null && typeof t.then == "function")
        try {
          var i = Wo(t);
        } catch (d) {
          throw d === hm ? ig : d;
        }
      else i = t;
      t = Tt();
      var o = t.queue, f = o.dispatch;
      return a !== t.memoizedState && (Be.flags |= 2048, Kc(
        ti | yn,
        { destroy: void 0 },
        Gr.bind(null, o, a),
        null
      )), [i, f, e];
    }
    function Gr(e, t) {
      e.action = t;
    }
    function uc(e) {
      var t = Tt(), a = wt;
      if (a !== null)
        return wd(t, a, e);
      Tt(), t = t.memoizedState, a = Tt();
      var i = a.queue.dispatch;
      return a.memoizedState = e, [t, i, !1];
    }
    function Kc(e, t, a, i) {
      return e = { tag: e, create: a, deps: i, inst: t, next: null }, t = Be.updateQueue, t === null && (t = Yd(), Be.updateQueue = t), a = t.lastEffect, a === null ? t.lastEffect = e.next = e : (i = a.next, a.next = e, e.next = i, t.lastEffect = e), e;
    }
    function Xd(e) {
      var t = va();
      return e = { current: e }, t.memoizedState = e;
    }
    function An(e, t, a, i) {
      var o = va();
      Be.flags |= e, o.memoizedState = Kc(
        ti | t,
        { destroy: void 0 },
        a,
        i === void 0 ? null : i
      );
    }
    function Ql(e, t, a, i) {
      var o = Tt();
      i = i === void 0 ? null : i;
      var f = o.memoizedState.inst;
      wt !== null && i !== null && cy(i, wt.memoizedState.deps) ? o.memoizedState = Kc(t, f, a, i) : (Be.flags |= e, o.memoizedState = Kc(
        ti | t,
        f,
        a,
        i
      ));
    }
    function wr(e, t) {
      (Be.mode & Ui) !== Ce ? An(276826112, yn, e, t) : An(8390656, yn, e, t);
    }
    function hy(e) {
      Be.flags |= 4;
      var t = Be.updateQueue;
      if (t === null)
        t = Yd(), Be.updateQueue = t, t.events = [e];
      else {
        var a = t.events;
        a === null ? t.events = [e] : a.push(e);
      }
    }
    function Xr(e) {
      var t = va(), a = { impl: e };
      return t.memoizedState = a, function() {
        if ((yt & Pl) !== da)
          throw Error(
            "A function wrapped in useEffectEvent can't be called during rendering."
          );
        return a.impl.apply(void 0, arguments);
      };
    }
    function na(e) {
      var t = Tt().memoizedState;
      return hy({ ref: t, nextImpl: e }), function() {
        if ((yt & Pl) !== da)
          throw Error(
            "A function wrapped in useEffectEvent can't be called during rendering."
          );
        return t.impl.apply(void 0, arguments);
      };
    }
    function qa(e, t) {
      var a = 4194308;
      return (Be.mode & Ui) !== Ce && (a |= 134217728), An(a, lu, e, t);
    }
    function vi(e, t) {
      if (typeof t == "function") {
        e = e();
        var a = t(e);
        return function() {
          typeof a == "function" ? a() : t(null);
        };
      }
      if (t != null)
        return t.hasOwnProperty("current") || console.error(
          "Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.",
          "an object with keys {" + Object.keys(t).join(", ") + "}"
        ), e = e(), t.current = e, function() {
          t.current = null;
        };
    }
    function Qr(e, t, a) {
      typeof t != "function" && console.error(
        "Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",
        t !== null ? typeof t : "null"
      ), a = a != null ? a.concat([e]) : null;
      var i = 4194308;
      (Be.mode & Ui) !== Ce && (i |= 134217728), An(
        i,
        lu,
        vi.bind(null, t, e),
        a
      );
    }
    function Lr(e, t, a) {
      typeof t != "function" && console.error(
        "Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",
        t !== null ? typeof t : "null"
      ), a = a != null ? a.concat([e]) : null, Ql(
        4,
        lu,
        vi.bind(null, t, e),
        a
      );
    }
    function Ru(e, t) {
      return va().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    }
    function ua(e, t) {
      var a = Tt();
      t = t === void 0 ? null : t;
      var i = a.memoizedState;
      return t !== null && cy(t, i[1]) ? i[0] : (a.memoizedState = [e, t], e);
    }
    function el(e, t) {
      var a = va();
      t = t === void 0 ? null : t;
      var i = e();
      if (Fs) {
        me(!0);
        try {
          e();
        } finally {
          me(!1);
        }
      }
      return a.memoizedState = [i, t], i;
    }
    function $c(e, t) {
      var a = Tt();
      t = t === void 0 ? null : t;
      var i = a.memoizedState;
      if (t !== null && cy(t, i[1]))
        return i[0];
      if (i = e(), Fs) {
        me(!0);
        try {
          e();
        } finally {
          me(!1);
        }
      }
      return a.memoizedState = [i, t], i;
    }
    function Jn(e, t) {
      var a = va();
      return cl(a, e, t);
    }
    function Qe(e, t) {
      var a = Tt();
      return Vr(
        a,
        wt.memoizedState,
        e,
        t
      );
    }
    function Dt(e, t) {
      var a = Tt();
      return wt === null ? cl(a, e, t) : Vr(
        a,
        wt.memoizedState,
        e,
        t
      );
    }
    function cl(e, t, a) {
      return a === void 0 || (_o & 1073741824) !== 0 && (We & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = a, e = Gt(), Be.lanes |= e, Lf |= e, a);
    }
    function Vr(e, t, a, i) {
      return dn(a, t) ? a : ym.current !== null ? (e = cl(e, a, i), dn(e, t) || (Bl = !0), e) : (_o & 42) === 0 || (_o & 1073741824) !== 0 && (We & 261930) === 0 ? (Bl = !0, e.memoizedState = a) : (e = Gt(), Be.lanes |= e, Lf |= e, t);
    }
    function gi() {
      w.asyncTransitions--;
    }
    function ic(e, t, a, i, o) {
      var f = Ot.p;
      Ot.p = f !== 0 && f < Wl ? f : Wl;
      var d = w.T, h = {};
      h._updatedFibers = /* @__PURE__ */ new Set(), w.T = h, Ll(e, !1, t, a);
      try {
        var y = o(), p = w.S;
        if (p !== null && p(h, y), y !== null && typeof y == "object" && typeof y.then == "function") {
          w.asyncTransitions++, y.then(gi, gi);
          var _ = Xc(
            y,
            i
          );
          Wc(
            e,
            t,
            _,
            Jl(e)
          );
        } else
          Wc(
            e,
            t,
            i,
            Jl(e)
          );
      } catch (R) {
        Wc(
          e,
          t,
          { then: function() {
          }, status: "rejected", reason: R },
          Jl(e)
        );
      } finally {
        Ot.p = f, d !== null && h.types !== null && (d.types !== null && d.types !== h.types && console.error(
          "We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."
        ), d.types = h.types), w.T = d, d === null && h._updatedFibers && (e = h._updatedFibers.size, h._updatedFibers.clear(), 10 < e && console.warn(
          "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
        ));
      }
    }
    function tf(e, t, a, i) {
      if (e.tag !== 5)
        throw Error(
          "Expected the form instance to be a HostComponent. This is a bug in React."
        );
      var o = lf(e).queue;
      W0(e), ic(
        e,
        o,
        t,
        od,
        a === null ? we : function() {
          return kc(e), a(i);
        }
      );
    }
    function lf(e) {
      var t = e.memoizedState;
      if (t !== null) return t;
      t = {
        memoizedState: od,
        baseState: od,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Ya,
          lastRenderedState: od
        },
        next: null
      };
      var a = {};
      return t.next = {
        memoizedState: a,
        baseState: a,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Ya,
          lastRenderedState: a
        },
        next: null
      }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
    }
    function kc(e) {
      w.T === null && console.error(
        "requestFormReset was called outside a transition or action. To fix, move to an action, or wrap with startTransition."
      );
      var t = lf(e);
      t.next === null && (t = e.alternate.memoizedState), Wc(
        e,
        t.next.queue,
        {},
        Jl(e)
      );
    }
    function my() {
      var e = nc(!1);
      return e = ic.bind(
        null,
        Be,
        e.queue,
        !0,
        !1
      ), va().memoizedState = e, [!1, e];
    }
    function tl() {
      var e = Zn(Ya)[0], t = Tt().memoizedState;
      return [
        typeof e == "boolean" ? e : Wo(e),
        t
      ];
    }
    function Qd() {
      var e = tc(Ya)[0], t = Tt().memoizedState;
      return [
        typeof e == "boolean" ? e : Wo(e),
        t
      ];
    }
    function Si() {
      return Yt(T0);
    }
    function Ld() {
      var e = va(), t = Xt.identifierPrefix;
      if (ct) {
        var a = Eo, i = bo;
        a = (i & ~(1 << 32 - kl(i) - 1)).toString(32) + a, t = "_" + t + "R_" + a, a = sg++, 0 < a && (t += "H" + a.toString(32)), t += "_";
      } else
        a = KT++, t = "_" + t + "r_" + a.toString(32) + "_";
      return e.memoizedState = t;
    }
    function Vd() {
      return va().memoizedState = Ig.bind(
        null,
        Be
      );
    }
    function Ig(e, t) {
      for (var a = e.return; a !== null; ) {
        switch (a.tag) {
          case 24:
          case 3:
            var i = Jl(a), o = Au(i), f = pa(a, o, i);
            f !== null && (wn(i, "refresh()", e), ll(f, a, i), ko(f, a, i)), e = ny(), t != null && f !== null && console.error(
              "The seed argument is not enabled outside experimental channels."
            ), o.payload = { cache: e };
            return;
        }
        a = a.return;
      }
    }
    function yy(e, t, a) {
      var i = arguments;
      typeof i[3] == "function" && console.error(
        "State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."
      ), i = Jl(e);
      var o = {
        lane: i,
        revertLane: 0,
        gesture: null,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      kt(e) ? Zr(t, o) : (o = km(e, t, o, i), o !== null && (wn(i, "dispatch()", e), ll(o, e, i), af(o, t, i)));
    }
    function Zd(e, t, a) {
      var i = arguments;
      typeof i[3] == "function" && console.error(
        "State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."
      ), i = Jl(e), Wc(e, t, a, i) && wn(i, "setState()", e);
    }
    function Wc(e, t, a, i) {
      var o = {
        lane: i,
        revertLane: 0,
        gesture: null,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (kt(e)) Zr(t, o);
      else {
        var f = e.alternate;
        if (e.lanes === 0 && (f === null || f.lanes === 0) && (f = t.lastRenderedReducer, f !== null)) {
          var d = w.H;
          w.H = Ni;
          try {
            var h = t.lastRenderedState, y = f(h, a);
            if (o.hasEagerState = !0, o.eagerState = y, dn(y, h))
              return Vi(e, t, o, 0), Xt === null && Vo(), !1;
          } catch {
          } finally {
            w.H = d;
          }
        }
        if (a = km(e, t, o, i), a !== null)
          return ll(a, e, i), af(a, t, i), !0;
      }
      return !1;
    }
    function Ll(e, t, a, i) {
      if (w.T === null && Js === 0 && console.error(
        "An optimistic state update occurred outside a transition or action. To fix, move the update to an action, or wrap with startTransition."
      ), i = {
        lane: 2,
        revertLane: ht(),
        gesture: null,
        action: i,
        hasEagerState: !1,
        eagerState: null,
        next: null
      }, kt(e)) {
        if (t)
          throw Error("Cannot update optimistic state while rendering.");
        console.error("Cannot call startTransition while rendering.");
      } else
        t = km(
          e,
          a,
          i,
          2
        ), t !== null && (wn(2, "setOptimistic()", e), ll(t, e, 2));
    }
    function kt(e) {
      var t = e.alternate;
      return e === Be || t !== null && t === Be;
    }
    function Zr(e, t) {
      gm = rg = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function af(e, t, a) {
      if ((a & 4194048) !== 0) {
        var i = t.lanes;
        i &= e.pendingLanes, a |= i, t.lanes = a, nr(e, a);
      }
    }
    function nf(e) {
      if (e !== null && typeof e != "function") {
        var t = String(e);
        Bb.has(t) || (Bb.add(t), console.error(
          "Expected the last optional `callback` argument to be a function. Instead received: %s.",
          e
        ));
      }
    }
    function Jr(e, t, a, i) {
      var o = e.memoizedState, f = a(i, o);
      if (e.mode & Ja) {
        me(!0);
        try {
          f = a(i, o);
        } finally {
          me(!1);
        }
      }
      f === void 0 && (t = tt(t) || "Component", Cb.has(t) || (Cb.add(t), console.error(
        "%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.",
        t
      ))), o = f == null ? o : Je({}, o, f), e.memoizedState = o, e.lanes === 0 && (e.updateQueue.baseState = o);
    }
    function Mu(e, t, a, i, o, f, d) {
      var h = e.stateNode;
      if (typeof h.shouldComponentUpdate == "function") {
        if (a = h.shouldComponentUpdate(
          i,
          f,
          d
        ), e.mode & Ja) {
          me(!0);
          try {
            a = h.shouldComponentUpdate(
              i,
              f,
              d
            );
          } finally {
            me(!1);
          }
        }
        return a === void 0 && console.error(
          "%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.",
          tt(t) || "Component"
        ), a;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !gr(a, i) || !gr(o, f) : !0;
    }
    function Kr(e, t, a, i) {
      var o = t.state;
      typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== o && (e = re(e) || "Component", zb.has(e) || (zb.add(e), console.error(
        "%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
        e
      )), QS.enqueueReplaceState(
        t,
        t.state,
        null
      ));
    }
    function bi(e, t) {
      var a = t;
      if ("ref" in t) {
        a = {};
        for (var i in t)
          i !== "ref" && (a[i] = t[i]);
      }
      if (e = e.defaultProps) {
        a === t && (a = Je({}, a));
        for (var o in e)
          a[o] === void 0 && (a[o] = e[o]);
      }
      return a;
    }
    function Jd(e) {
      SS(e), console.warn(
        `%s

%s
`,
        Sm ? "An error occurred in the <" + Sm + "> component." : "An error occurred in one of your React components.",
        `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://react.dev/link/error-boundaries to learn more about error boundaries.`
      );
    }
    function py(e) {
      var t = Sm ? "The above error occurred in the <" + Sm + "> component." : "The above error occurred in one of your React components.", a = "React will try to recreate this component tree from scratch using the error boundary you provided, " + ((LS || "Anonymous") + ".");
      if (typeof e == "object" && e !== null && typeof e.environmentName == "string") {
        var i = e.environmentName;
        e = [
          `%o

%s

%s
`,
          e,
          t,
          a
        ].slice(0), typeof e[0] == "string" ? e.splice(
          0,
          1,
          pE + " " + e[0],
          vE,
          jg + i + jg,
          gE
        ) : e.splice(
          0,
          0,
          pE,
          vE,
          jg + i + jg,
          gE
        ), e.unshift(console), i = mA.apply(console.error, e), i();
      } else
        console.error(
          `%o

%s

%s
`,
          e,
          t,
          a
        );
    }
    function vy(e) {
      SS(e);
    }
    function $r(e, t) {
      try {
        Sm = t.source ? re(t.source) : null, LS = null;
        var a = t.value;
        if (w.actQueue !== null)
          w.thrownErrors.push(a);
        else {
          var i = e.onUncaughtError;
          i(a, { componentStack: t.stack });
        }
      } catch (o) {
        setTimeout(function() {
          throw o;
        });
      }
    }
    function gy(e, t, a) {
      try {
        Sm = a.source ? re(a.source) : null, LS = re(t);
        var i = e.onCaughtError;
        i(a.value, {
          componentStack: a.stack,
          errorBoundary: t.tag === 1 ? t.stateNode : null
        });
      } catch (o) {
        setTimeout(function() {
          throw o;
        });
      }
    }
    function Kd(e, t, a) {
      return a = Au(a), a.tag = jS, a.payload = { element: null }, a.callback = function() {
        fe(t.source, $r, e, t);
      }, a;
    }
    function $d(e) {
      return e = Au(e), e.tag = jS, e;
    }
    function kr(e, t, a, i) {
      var o = a.type.getDerivedStateFromError;
      if (typeof o == "function") {
        var f = i.value;
        e.payload = function() {
          return o(f);
        }, e.callback = function() {
          J0(a), fe(
            i.source,
            gy,
            t,
            a,
            i
          );
        };
      }
      var d = a.stateNode;
      d !== null && typeof d.componentDidCatch == "function" && (e.callback = function() {
        J0(a), fe(
          i.source,
          gy,
          t,
          a,
          i
        ), typeof o != "function" && (Zf === null ? Zf = /* @__PURE__ */ new Set([this]) : Zf.add(this)), LT(this, i), typeof o == "function" || (a.lanes & 2) === 0 && console.error(
          "%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.",
          re(a) || "Unknown"
        );
      });
    }
    function I0(e, t, a, i, o) {
      if (a.flags |= 32768, Bn && Gu(e, o), i !== null && typeof i == "object" && typeof i.then == "function") {
        if (t = a.alternate, t !== null && Wi(
          t,
          a,
          o,
          !0
        ), ct && (gc = !0), a = tu.current, a !== null) {
          switch (a.tag) {
            case 31:
            case 13:
              return ei === null ? no() : a.alternate === null && dl === Co && (dl = mg), a.flags &= -257, a.flags |= 65536, a.lanes = o, i === cg ? a.flags |= 16384 : (t = a.updateQueue, t === null ? a.updateQueue = /* @__PURE__ */ new Set([i]) : t.add(i), ca(e, i, o)), !1;
            case 22:
              return a.flags |= 65536, i === cg ? a.flags |= 16384 : (t = a.updateQueue, t === null ? (t = {
                transitions: null,
                markerInstances: null,
                retryQueue: /* @__PURE__ */ new Set([i])
              }, a.updateQueue = t) : (a = t.retryQueue, a === null ? t.retryQueue = /* @__PURE__ */ new Set([i]) : a.add(i)), ca(e, i, o)), !1;
          }
          throw Error(
            "Unexpected Suspense handler tag (" + a.tag + "). This is a bug in React."
          );
        }
        return ca(e, i, o), no(), !1;
      }
      if (ct)
        return gc = !0, t = tu.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = o, i !== zS && vu(
          ha(
            Error(
              "There was an error while hydrating but React was able to recover by instead client rendering from the nearest Suspense boundary.",
              { cause: i }
            ),
            a
          )
        )) : (i !== zS && vu(
          ha(
            Error(
              "There was an error while hydrating but React was able to recover by instead client rendering the entire root.",
              { cause: i }
            ),
            a
          )
        ), e = e.current.alternate, e.flags |= 65536, o &= -o, e.lanes |= o, i = ha(i, a), o = Kd(
          e.stateNode,
          i,
          o
        ), Cr(e, o), dl !== Xf && (dl = Is)), !1;
      var f = ha(
        Error(
          "There was an error during concurrent rendering but React was able to recover by instead synchronously rendering the entire root.",
          { cause: i }
        ),
        a
      );
      if (h0 === null ? h0 = [f] : h0.push(f), dl !== Xf && (dl = Is), t === null) return !0;
      i = ha(i, a), a = t;
      do {
        switch (a.tag) {
          case 3:
            return a.flags |= 65536, e = o & -o, a.lanes |= e, e = Kd(
              a.stateNode,
              i,
              e
            ), Cr(a, e), !1;
          case 1:
            if (t = a.type, f = a.stateNode, (a.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || f !== null && typeof f.componentDidCatch == "function" && (Zf === null || !Zf.has(f))))
              return a.flags |= 65536, o &= -o, a.lanes |= o, o = $d(o), kr(
                o,
                e,
                a,
                i
              ), Cr(a, o), !1;
        }
        a = a.return;
      } while (a !== null);
      return !1;
    }
    function Vl(e, t, a, i) {
      t.child = e === null ? mb(t, null, a, i) : Ws(
        t,
        e.child,
        a,
        i
      );
    }
    function Sy(e, t, a, i, o) {
      a = a.render;
      var f = t.ref;
      if ("ref" in i) {
        var d = {};
        for (var h in i)
          h !== "ref" && (d[h] = i[h]);
      } else d = i;
      return Pa(t), i = il(
        e,
        t,
        a,
        d,
        f,
        o
      ), h = Br(), e !== null && !Bl ? (Pi(e, t, o), Cu(e, t, o)) : (ct && h && Rd(t), t.flags |= 1, Vl(e, t, i, o), t.child);
    }
    function by(e, t, a, i, o) {
      if (e === null) {
        var f = a.type;
        return typeof f == "function" && !zd(f) && f.defaultProps === void 0 && a.compare === null ? (a = Zi(f), t.tag = 15, t.type = a, cf(t, f), Ey(
          e,
          t,
          a,
          i,
          o
        )) : (e = jc(
          a.type,
          null,
          i,
          t,
          t.mode,
          o
        ), e.ref = t.ref, e.return = t, t.child = e);
      }
      if (f = e.child, !ah(e, o)) {
        var d = f.memoizedProps;
        if (a = a.compare, a = a !== null ? a : gr, a(d, i) && e.ref === t.ref)
          return Cu(
            e,
            t,
            o
          );
      }
      return t.flags |= 1, e = mu(f, i), e.ref = t.ref, e.return = t, t.child = e;
    }
    function Ey(e, t, a, i, o) {
      if (e !== null) {
        var f = e.memoizedProps;
        if (gr(f, i) && e.ref === t.ref && t.type === e.type)
          if (Bl = !1, t.pendingProps = i = f, ah(e, o))
            (e.flags & 131072) !== 0 && (Bl = !0);
          else
            return t.lanes = e.lanes, Cu(e, t, o);
      }
      return Fd(
        e,
        t,
        a,
        i,
        o
      );
    }
    function kd(e, t, a, i) {
      var o = i.children, f = e !== null ? e.memoizedState : null;
      if (e === null && t.stateNode === null && (t.stateNode = {
        _visibility: Qp,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null
      }), i.mode === "hidden") {
        if ((t.flags & 128) !== 0) {
          if (f = f !== null ? f.baseLanes | a : a, e !== null) {
            for (i = t.child = e.child, o = 0; i !== null; )
              o = o | i.lanes | i.childLanes, i = i.sibling;
            i = o & ~f;
          } else i = 0, t.child = null;
          return Ty(
            e,
            t,
            f,
            a,
            i
          );
        }
        if ((a & 536870912) !== 0)
          t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && Dr(
            t,
            f !== null ? f.cachePool : null
          ), f !== null ? Ii(t, f) : Vn(t), Bd(t);
        else
          return i = t.lanes = 536870912, Ty(
            e,
            t,
            f !== null ? f.baseLanes | a : a,
            a,
            i
          );
      } else
        f !== null ? (Dr(t, f.cachePool), Ii(t, f), cn(t), t.memoizedState = null) : (e !== null && Dr(t, null), Vn(t), cn(t));
      return Vl(e, t, o, a), t.child;
    }
    function uf(e, t) {
      return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
        _visibility: Qp,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null
      }), t.sibling;
    }
    function Ty(e, t, a, i, o) {
      var f = _r();
      return f = f === null ? null : {
        parent: Ul._currentValue,
        pool: f
      }, t.memoizedState = {
        baseLanes: a,
        cachePool: f
      }, e !== null && Dr(t, null), Vn(t), Bd(t), e !== null && Wi(e, t, i, !0), t.childLanes = o, null;
    }
    function Wr(e, t) {
      var a = t.hidden;
      return a !== void 0 && console.error(
        `<Activity> doesn't accept a hidden prop. Use mode="hidden" instead.
- <Activity %s>
+ <Activity %s>`,
        a === !0 ? "hidden" : a === !1 ? "hidden={false}" : "hidden={...}",
        a ? 'mode="hidden"' : 'mode="visible"'
      ), t = Pr(
        { mode: t.mode, children: t.children },
        e.mode
      ), t.ref = e.ref, e.child = t, t.return = e, t;
    }
    function Ay(e, t, a) {
      return Ws(t, e.child, null, a), e = Wr(
        t,
        t.pendingProps
      ), e.flags |= 2, aa(t), t.memoizedState = null, e;
    }
    function P0(e, t, a) {
      var i = t.pendingProps, o = (t.flags & 128) !== 0;
      if (t.flags &= -129, e === null) {
        if (ct) {
          if (i.mode === "hidden")
            return e = Wr(t, i), t.lanes = 536870912, uf(null, e);
          if (Hr(t), (e = It) ? (a = Ah(
            e,
            Iu
          ), a = a !== null && a.data === nd ? a : null, a !== null && (i = {
            dehydrated: a,
            treeContext: $0(),
            retryLane: 536870912,
            hydrationErrors: null
          }, t.memoizedState = i, i = Fm(a), i.return = t, t.child = i, Oa = t, It = null)) : a = null, a === null)
            throw Ki(t, e), ri(t);
          return t.lanes = 536870912, null;
        }
        return Wr(t, i);
      }
      var f = e.memoizedState;
      if (f !== null) {
        var d = f.dehydrated;
        if (Hr(t), o)
          if (t.flags & 256)
            t.flags &= -257, t = Ay(
              e,
              t,
              a
            );
          else if (t.memoizedState !== null)
            t.child = e.child, t.flags |= 128, t = null;
          else
            throw Error(
              "Client rendering an Activity suspended it again. This is a bug in React."
            );
        else if (Ca(), (a & 536870912) !== 0 && hf(t), Bl || Wi(
          e,
          t,
          a,
          !1
        ), o = (a & e.childLanes) !== 0, Bl || o) {
          if (i = Xt, i !== null && (d = Gn(
            i,
            a
          ), d !== 0 && d !== f.retryLane))
            throw f.retryLane = d, Xl(e, d), ll(i, e, d), VS;
          no(), t = Ay(
            e,
            t,
            a
          );
        } else
          e = f.treeContext, It = on(
            d.nextSibling
          ), Oa = t, ct = !0, xf = null, gc = !1, eu = null, Iu = !1, e !== null && k0(t, e), t = Wr(t, i), t.flags |= 4096;
        return t;
      }
      return f = e.child, i = { mode: i.mode, children: i.children }, (a & 536870912) !== 0 && (a & e.lanes) !== 0 && hf(t), e = mu(f, i), e.ref = t.ref, t.child = e, e.return = t, e;
    }
    function Wd(e, t) {
      var a = t.ref;
      if (a === null)
        e !== null && e.ref !== null && (t.flags |= 4194816);
      else {
        if (typeof a != "function" && typeof a != "object")
          throw Error(
            "Expected ref to be a function, an object returned by React.createRef(), or undefined/null."
          );
        (e === null || e.ref !== a) && (t.flags |= 4194816);
      }
    }
    function Fd(e, t, a, i, o) {
      if (a.prototype && typeof a.prototype.render == "function") {
        var f = tt(a) || "Unknown";
        xb[f] || (console.error(
          "The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.",
          f,
          f
        ), xb[f] = !0);
      }
      return t.mode & Ja && Hi.recordLegacyContextWarning(
        t,
        null
      ), e === null && (cf(t, t.type), a.contextTypes && (f = tt(a) || "Unknown", Yb[f] || (Yb[f] = !0, console.error(
        "%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with React.useContext() instead. (https://react.dev/link/legacy-context)",
        f
      )))), Pa(t), a = il(
        e,
        t,
        a,
        i,
        void 0,
        o
      ), i = Br(), e !== null && !Bl ? (Pi(e, t, o), Cu(e, t, o)) : (ct && i && Rd(t), t.flags |= 1, Vl(e, t, a, o), t.child);
    }
    function Fc(e, t, a, i, o, f) {
      return Pa(t), Ro = -1, i0 = e !== null && e.type !== t.type, t.updateQueue = null, a = Vc(
        t,
        i,
        a,
        o
      ), jd(e, t), i = Br(), e !== null && !Bl ? (Pi(e, t, f), Cu(e, t, f)) : (ct && i && Rd(t), t.flags |= 1, Vl(e, t, a, f), t.child);
    }
    function Oy(e, t, a, i, o) {
      switch (gt(t)) {
        case !1:
          var f = t.stateNode, d = new t.type(
            t.memoizedProps,
            f.context
          ).state;
          f.updater.enqueueSetState(f, d, null);
          break;
        case !0:
          t.flags |= 128, t.flags |= 65536, f = Error("Simulated error coming from DevTools");
          var h = o & -o;
          if (t.lanes |= h, d = Xt, d === null)
            throw Error(
              "Expected a work-in-progress root. This is a bug in React. Please file an issue."
            );
          h = $d(h), kr(
            h,
            d,
            t,
            ha(f, t)
          ), Cr(t, h);
      }
      if (Pa(t), t.stateNode === null) {
        if (d = Bf, f = a.contextType, "contextType" in a && f !== null && (f === void 0 || f.$$typeof !== Fn) && !Nb.has(a) && (Nb.add(a), h = f === void 0 ? " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? " However, it is set to a " + typeof f + "." : f.$$typeof === qh ? " Did you accidentally pass the Context.Consumer instead?" : " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", console.error(
          "%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s",
          tt(a) || "Component",
          h
        )), typeof f == "object" && f !== null && (d = Yt(f)), f = new a(i, d), t.mode & Ja) {
          me(!0);
          try {
            f = new a(i, d);
          } finally {
            me(!1);
          }
        }
        if (d = t.memoizedState = f.state !== null && f.state !== void 0 ? f.state : null, f.updater = QS, t.stateNode = f, f._reactInternals = t, f._reactInternalInstance = Ob, typeof a.getDerivedStateFromProps == "function" && d === null && (d = tt(a) || "Component", _b.has(d) || (_b.add(d), console.error(
          "`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.",
          d,
          f.state === null ? "null" : "undefined",
          d
        ))), typeof a.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function") {
          var y = h = d = null;
          if (typeof f.componentWillMount == "function" && f.componentWillMount.__suppressDeprecationWarning !== !0 ? d = "componentWillMount" : typeof f.UNSAFE_componentWillMount == "function" && (d = "UNSAFE_componentWillMount"), typeof f.componentWillReceiveProps == "function" && f.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? h = "componentWillReceiveProps" : typeof f.UNSAFE_componentWillReceiveProps == "function" && (h = "UNSAFE_componentWillReceiveProps"), typeof f.componentWillUpdate == "function" && f.componentWillUpdate.__suppressDeprecationWarning !== !0 ? y = "componentWillUpdate" : typeof f.UNSAFE_componentWillUpdate == "function" && (y = "UNSAFE_componentWillUpdate"), d !== null || h !== null || y !== null) {
            f = tt(a) || "Component";
            var p = typeof a.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            Rb.has(f) || (Rb.add(f), console.error(
              `Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://react.dev/link/unsafe-component-lifecycles`,
              f,
              p,
              d !== null ? `
  ` + d : "",
              h !== null ? `
  ` + h : "",
              y !== null ? `
  ` + y : ""
            ));
          }
        }
        f = t.stateNode, d = tt(a) || "Component", f.render || (a.prototype && typeof a.prototype.render == "function" ? console.error(
          "No `render` method found on the %s instance: did you accidentally return an object from the constructor?",
          d
        ) : console.error(
          "No `render` method found on the %s instance: you may have forgotten to define `render`.",
          d
        )), !f.getInitialState || f.getInitialState.isReactClassApproved || f.state || console.error(
          "getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?",
          d
        ), f.getDefaultProps && !f.getDefaultProps.isReactClassApproved && console.error(
          "getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.",
          d
        ), f.contextType && console.error(
          "contextType was defined as an instance property on %s. Use a static property to define contextType instead.",
          d
        ), a.childContextTypes && !Hb.has(a) && (Hb.add(a), console.error(
          "%s uses the legacy childContextTypes API which was removed in React 19. Use React.createContext() instead. (https://react.dev/link/legacy-context)",
          d
        )), a.contextTypes && !Ub.has(a) && (Ub.add(a), console.error(
          "%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with static contextType instead. (https://react.dev/link/legacy-context)",
          d
        )), typeof f.componentShouldUpdate == "function" && console.error(
          "%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.",
          d
        ), a.prototype && a.prototype.isPureReactComponent && typeof f.shouldComponentUpdate < "u" && console.error(
          "%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.",
          tt(a) || "A pure component"
        ), typeof f.componentDidUnmount == "function" && console.error(
          "%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?",
          d
        ), typeof f.componentDidReceiveProps == "function" && console.error(
          "%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().",
          d
        ), typeof f.componentWillRecieveProps == "function" && console.error(
          "%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?",
          d
        ), typeof f.UNSAFE_componentWillRecieveProps == "function" && console.error(
          "%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?",
          d
        ), h = f.props !== i, f.props !== void 0 && h && console.error(
          "When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.",
          d
        ), f.defaultProps && console.error(
          "Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.",
          d,
          d
        ), typeof f.getSnapshotBeforeUpdate != "function" || typeof f.componentDidUpdate == "function" || Db.has(a) || (Db.add(a), console.error(
          "%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.",
          tt(a)
        )), typeof f.getDerivedStateFromProps == "function" && console.error(
          "%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.",
          d
        ), typeof f.getDerivedStateFromError == "function" && console.error(
          "%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.",
          d
        ), typeof a.getSnapshotBeforeUpdate == "function" && console.error(
          "%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.",
          d
        ), (h = f.state) && (typeof h != "object" || Ol(h)) && console.error("%s.state: must be set to an object or null", d), typeof f.getChildContext == "function" && typeof a.childContextTypes != "object" && console.error(
          "%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().",
          d
        ), f = t.stateNode, f.props = i, f.state = t.memoizedState, f.refs = {}, Tu(t), d = a.contextType, f.context = typeof d == "object" && d !== null ? Yt(d) : Bf, f.state === i && (d = tt(a) || "Component", Mb.has(d) || (Mb.add(d), console.error(
          "%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.",
          d
        ))), t.mode & Ja && Hi.recordLegacyContextWarning(
          t,
          f
        ), Hi.recordUnsafeLifecycleWarnings(
          t,
          f
        ), f.state = t.memoizedState, d = a.getDerivedStateFromProps, typeof d == "function" && (Jr(
          t,
          a,
          d,
          i
        ), f.state = t.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function" || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (d = f.state, typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount(), d !== f.state && (console.error(
          "%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
          re(t) || "Component"
        ), QS.enqueueReplaceState(
          f,
          f.state,
          null
        )), Ln(t, i, f, o), Ou(), f.state = t.memoizedState), typeof f.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & Ui) !== Ce && (t.flags |= 134217728), f = !0;
      } else if (e === null) {
        f = t.stateNode;
        var _ = t.memoizedProps;
        h = bi(a, _), f.props = h;
        var R = f.context;
        y = a.contextType, d = Bf, typeof y == "object" && y !== null && (d = Yt(y)), p = a.getDerivedStateFromProps, y = typeof p == "function" || typeof f.getSnapshotBeforeUpdate == "function", _ = t.pendingProps !== _, y || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (_ || R !== d) && Kr(
          t,
          f,
          i,
          d
        ), wf = !1;
        var b = t.memoizedState;
        f.state = b, Ln(t, i, f, o), Ou(), R = t.memoizedState, _ || b !== R || wf ? (typeof p == "function" && (Jr(
          t,
          a,
          p,
          i
        ), R = t.memoizedState), (h = wf || Mu(
          t,
          a,
          h,
          i,
          b,
          R,
          d
        )) ? (y || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount()), typeof f.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & Ui) !== Ce && (t.flags |= 134217728)) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & Ui) !== Ce && (t.flags |= 134217728), t.memoizedProps = i, t.memoizedState = R), f.props = i, f.state = R, f.context = d, f = h) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & Ui) !== Ce && (t.flags |= 134217728), f = !1);
      } else {
        f = t.stateNode, xa(e, t), d = t.memoizedProps, y = bi(a, d), f.props = y, p = t.pendingProps, b = f.context, R = a.contextType, h = Bf, typeof R == "object" && R !== null && (h = Yt(R)), _ = a.getDerivedStateFromProps, (R = typeof _ == "function" || typeof f.getSnapshotBeforeUpdate == "function") || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (d !== p || b !== h) && Kr(
          t,
          f,
          i,
          h
        ), wf = !1, b = t.memoizedState, f.state = b, Ln(t, i, f, o), Ou();
        var Y = t.memoizedState;
        d !== p || b !== Y || wf || e !== null && e.dependencies !== null && Tr(e.dependencies) ? (typeof _ == "function" && (Jr(
          t,
          a,
          _,
          i
        ), Y = t.memoizedState), (y = wf || Mu(
          t,
          a,
          y,
          i,
          b,
          Y,
          h
        ) || e !== null && e.dependencies !== null && Tr(e.dependencies)) ? (R || typeof f.UNSAFE_componentWillUpdate != "function" && typeof f.componentWillUpdate != "function" || (typeof f.componentWillUpdate == "function" && f.componentWillUpdate(i, Y, h), typeof f.UNSAFE_componentWillUpdate == "function" && f.UNSAFE_componentWillUpdate(
          i,
          Y,
          h
        )), typeof f.componentDidUpdate == "function" && (t.flags |= 4), typeof f.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof f.componentDidUpdate != "function" || d === e.memoizedProps && b === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || d === e.memoizedProps && b === e.memoizedState || (t.flags |= 1024), t.memoizedProps = i, t.memoizedState = Y), f.props = i, f.state = Y, f.context = h, f = y) : (typeof f.componentDidUpdate != "function" || d === e.memoizedProps && b === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || d === e.memoizedProps && b === e.memoizedState || (t.flags |= 1024), f = !1);
      }
      if (h = f, Wd(e, t), d = (t.flags & 128) !== 0, h || d) {
        if (h = t.stateNode, Tc(t), d && typeof a.getDerivedStateFromError != "function")
          a = null, hn = -1;
        else if (a = eb(h), t.mode & Ja) {
          me(!0);
          try {
            eb(h);
          } finally {
            me(!1);
          }
        }
        t.flags |= 1, e !== null && d ? (t.child = Ws(
          t,
          e.child,
          null,
          o
        ), t.child = Ws(
          t,
          null,
          a,
          o
        )) : Vl(e, t, a, o), t.memoizedState = h.state, e = t.child;
      } else
        e = Cu(
          e,
          t,
          o
        );
      return o = t.stateNode, f && o.props !== i && (bm || console.error(
        "It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.",
        re(t) || "a component"
      ), bm = !0), e;
    }
    function Fr(e, t, a, i) {
      return si(), t.flags |= 256, Vl(e, t, a, i), t.child;
    }
    function cf(e, t) {
      t && t.childContextTypes && console.error(
        `childContextTypes cannot be defined on a function component.
  %s.childContextTypes = ...`,
        t.displayName || t.name || "Component"
      ), typeof t.getDerivedStateFromProps == "function" && (e = tt(t) || "Unknown", qb[e] || (console.error(
        "%s: Function components do not support getDerivedStateFromProps.",
        e
      ), qb[e] = !0)), typeof t.contextType == "object" && t.contextType !== null && (t = tt(t) || "Unknown", jb[t] || (console.error(
        "%s: Function components do not support contextType.",
        t
      ), jb[t] = !0));
    }
    function Id(e) {
      return { baseLanes: e, cachePool: Cd() };
    }
    function Ir(e, t, a) {
      return e = e !== null ? e.childLanes & ~a : 0, t && (e |= qn), e;
    }
    function ev(e, t, a) {
      var i, o = t.pendingProps;
      je(t) && (t.flags |= 128);
      var f = !1, d = (t.flags & 128) !== 0;
      if ((i = d) || (i = e !== null && e.memoizedState === null ? !1 : (_l.current & n0) !== 0), i && (f = !0, t.flags &= -129), i = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
        if (ct) {
          if (f ? la(t) : cn(t), (e = It) ? (a = Ah(
            e,
            Iu
          ), a = a !== null && a.data !== nd ? a : null, a !== null && (i = {
            dehydrated: a,
            treeContext: $0(),
            retryLane: 536870912,
            hydrationErrors: null
          }, t.memoizedState = i, i = Fm(a), i.return = t, t.child = i, Oa = t, It = null)) : a = null, a === null)
            throw Ki(t, e), ri(t);
          return Oh(a) ? t.lanes = 32 : t.lanes = 536870912, null;
        }
        var h = o.children;
        if (o = o.fallback, f) {
          cn(t);
          var y = t.mode;
          return h = Pr(
            { mode: "hidden", children: h },
            y
          ), o = yu(
            o,
            y,
            a,
            null
          ), h.return = t, o.return = t, h.sibling = o, t.child = h, o = t.child, o.memoizedState = Id(a), o.childLanes = Ir(
            e,
            i,
            a
          ), t.memoizedState = ZS, uf(
            null,
            o
          );
        }
        return la(t), Pd(
          t,
          h
        );
      }
      var p = e.memoizedState;
      if (p !== null) {
        var _ = p.dehydrated;
        if (_ !== null) {
          if (d)
            t.flags & 256 ? (la(t), t.flags &= -257, t = eh(
              e,
              t,
              a
            )) : t.memoizedState !== null ? (cn(t), t.child = e.child, t.flags |= 128, t = null) : (cn(t), h = o.fallback, y = t.mode, o = Pr(
              {
                mode: "visible",
                children: o.children
              },
              y
            ), h = yu(
              h,
              y,
              a,
              null
            ), h.flags |= 2, o.return = t, h.return = t, o.sibling = h, t.child = o, Ws(
              t,
              e.child,
              null,
              a
            ), o = t.child, o.memoizedState = Id(a), o.childLanes = Ir(
              e,
              i,
              a
            ), t.memoizedState = ZS, t = uf(
              null,
              o
            ));
          else if (la(t), Ca(), (a & 536870912) !== 0 && hf(t), Oh(
            _
          )) {
            if (i = _.nextSibling && _.nextSibling.dataset, i) {
              h = i.dgst;
              var R = i.msg;
              y = i.stck;
              var b = i.cstck;
            }
            f = R, i = h, o = y, _ = b, h = f, y = _, h = Error(h || "The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering."), h.stack = o || "", h.digest = i, i = y === void 0 ? null : y, o = {
              value: h,
              source: null,
              stack: i
            }, typeof i == "string" && OS.set(
              h,
              o
            ), vu(o), t = eh(
              e,
              t,
              a
            );
          } else if (Bl || Wi(
            e,
            t,
            a,
            !1
          ), i = (a & e.childLanes) !== 0, Bl || i) {
            if (i = Xt, i !== null && (o = Gn(
              i,
              a
            ), o !== 0 && o !== p.retryLane))
              throw p.retryLane = o, Xl(
                e,
                o
              ), ll(
                i,
                e,
                o
              ), VS;
            op(
              _
            ) || no(), t = eh(
              e,
              t,
              a
            );
          } else
            op(
              _
            ) ? (t.flags |= 192, t.child = e.child, t = null) : (e = p.treeContext, It = on(
              _.nextSibling
            ), Oa = t, ct = !0, xf = null, gc = !1, eu = null, Iu = !1, e !== null && k0(t, e), t = Pd(
              t,
              o.children
            ), t.flags |= 4096);
          return t;
        }
      }
      return f ? (cn(t), h = o.fallback, y = t.mode, b = e.child, _ = b.sibling, o = mu(
        b,
        {
          mode: "hidden",
          children: o.children
        }
      ), o.subtreeFlags = b.subtreeFlags & 65011712, _ !== null ? h = mu(
        _,
        h
      ) : (h = yu(
        h,
        y,
        a,
        null
      ), h.flags |= 2), h.return = t, o.return = t, o.sibling = h, t.child = o, uf(null, o), o = t.child, h = e.child.memoizedState, h === null ? h = Id(a) : (y = h.cachePool, y !== null ? (b = Ul._currentValue, y = y.parent !== b ? { parent: b, pool: b } : y) : y = Cd(), h = {
        baseLanes: h.baseLanes | a,
        cachePool: y
      }), o.memoizedState = h, o.childLanes = Ir(
        e,
        i,
        a
      ), t.memoizedState = ZS, uf(
        e.child,
        o
      )) : (p !== null && (a & 62914560) === a && (a & e.lanes) !== 0 && hf(t), la(t), a = e.child, e = a.sibling, a = mu(a, {
        mode: "visible",
        children: o.children
      }), a.return = t, a.sibling = null, e !== null && (i = t.deletions, i === null ? (t.deletions = [e], t.flags |= 16) : i.push(e)), t.child = a, t.memoizedState = null, a);
    }
    function Pd(e, t) {
      return t = Pr(
        { mode: "visible", children: t },
        e.mode
      ), t.return = e, e.child = t;
    }
    function Pr(e, t) {
      return e = U(22, e, null, t), e.lanes = 0, e;
    }
    function eh(e, t, a) {
      return Ws(t, e.child, null, a), e = Pd(
        t,
        t.pendingProps.children
      ), e.flags |= 2, t.memoizedState = null, e;
    }
    function zy(e, t, a) {
      e.lanes |= t;
      var i = e.alternate;
      i !== null && (i.lanes |= t), di(
        e.return,
        t,
        a
      );
    }
    function th(e, t, a, i, o, f) {
      var d = e.memoizedState;
      d === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: a,
        tailMode: o,
        treeForkCount: f
      } : (d.isBackwards = t, d.rendering = null, d.renderingStartTime = 0, d.last = i, d.tail = a, d.tailMode = o, d.treeForkCount = f);
    }
    function lh(e, t, a) {
      var i = t.pendingProps, o = i.revealOrder, f = i.tail, d = i.children, h = _l.current;
      if ((i = (h & n0) !== 0) ? (h = h & pm | n0, t.flags |= 128) : h &= pm, Ue(_l, h, t), h = o ?? "null", o !== "forwards" && o !== "unstable_legacy-backwards" && o !== "together" && o !== "independent" && !Gb[h])
        if (Gb[h] = !0, o == null)
          console.error(
            'The default for the <SuspenseList revealOrder="..."> prop is changing. To be future compatible you must explictly specify either "independent" (the current default), "together", "forwards" or "legacy_unstable-backwards".'
          );
        else if (o === "backwards")
          console.error(
            'The rendering order of <SuspenseList revealOrder="backwards"> is changing. To be future compatible you must specify revealOrder="legacy_unstable-backwards" instead.'
          );
        else if (typeof o == "string")
          switch (o.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards":
            case "independent":
              console.error(
                '"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.',
                o,
                o.toLowerCase()
              );
              break;
            case "forward":
            case "backward":
              console.error(
                '"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.',
                o,
                o.toLowerCase()
              );
              break;
            default:
              console.error(
                '"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "independent", "together", "forwards" or "backwards"?',
                o
              );
          }
        else
          console.error(
            '%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "independent", "together", "forwards" or "backwards"?',
            o
          );
      h = f ?? "null", hg[h] || (f == null ? (o === "forwards" || o === "backwards" || o === "unstable_legacy-backwards") && (hg[h] = !0, console.error(
        'The default for the <SuspenseList tail="..."> prop is changing. To be future compatible you must explictly specify either "visible" (the current default), "collapsed" or "hidden".'
      )) : f !== "visible" && f !== "collapsed" && f !== "hidden" ? (hg[h] = !0, console.error(
        '"%s" is not a supported value for tail on <SuspenseList />. Did you mean "visible", "collapsed" or "hidden"?',
        f
      )) : o !== "forwards" && o !== "backwards" && o !== "unstable_legacy-backwards" && (hg[h] = !0, console.error(
        '<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?',
        f
      )));
      e: if ((o === "forwards" || o === "backwards" || o === "unstable_legacy-backwards") && d !== void 0 && d !== null && d !== !1)
        if (Ol(d)) {
          for (h = 0; h < d.length; h++)
            if (!ut(
              d[h],
              h
            ))
              break e;
        } else if (h = _t(d), typeof h == "function") {
          if (h = h.call(d))
            for (var y = h.next(), p = 0; !y.done; y = h.next()) {
              if (!ut(y.value, p)) break e;
              p++;
            }
        } else
          console.error(
            'A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?',
            o
          );
      if (Vl(e, t, d, a), ct ? (Ji(), d = Lp) : d = 0, !i && e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && zy(e, a, t);
          else if (e.tag === 19)
            zy(e, a, t);
          else if (e.child !== null) {
            e.child.return = e, e = e.child;
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t)
              break e;
            e = e.return;
          }
          e.sibling.return = e.return, e = e.sibling;
        }
      switch (o) {
        case "forwards":
          for (a = t.child, o = null; a !== null; )
            e = a.alternate, e !== null && _u(e) === null && (o = a), a = a.sibling;
          a = o, a === null ? (o = t.child, t.child = null) : (o = a.sibling, a.sibling = null), th(
            t,
            !1,
            o,
            a,
            f,
            d
          );
          break;
        case "backwards":
        case "unstable_legacy-backwards":
          for (a = null, o = t.child, t.child = null; o !== null; ) {
            if (e = o.alternate, e !== null && _u(e) === null) {
              t.child = o;
              break;
            }
            e = o.sibling, o.sibling = a, a = o, o = e;
          }
          th(
            t,
            !0,
            a,
            null,
            f,
            d
          );
          break;
        case "together":
          th(
            t,
            !1,
            null,
            null,
            void 0,
            d
          );
          break;
        default:
          t.memoizedState = null;
      }
      return t.child;
    }
    function Cu(e, t, a) {
      if (e !== null && (t.dependencies = e.dependencies), hn = -1, Lf |= t.lanes, (a & t.childLanes) === 0)
        if (e !== null) {
          if (Wi(
            e,
            t,
            a,
            !1
          ), (a & t.childLanes) === 0)
            return null;
        } else return null;
      if (e !== null && t.child !== e.child)
        throw Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        for (e = t.child, a = mu(e, e.pendingProps), t.child = a, a.return = t; e.sibling !== null; )
          e = e.sibling, a = a.sibling = mu(e, e.pendingProps), a.return = t;
        a.sibling = null;
      }
      return t.child;
    }
    function ah(e, t) {
      return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && Tr(e)));
    }
    function _y(e, t, a) {
      switch (t.tag) {
        case 3:
          X(
            t,
            t.stateNode.containerInfo
          ), gu(
            t,
            Ul,
            e.memoizedState.cache
          ), si();
          break;
        case 27:
        case 5:
          ce(t);
          break;
        case 4:
          X(
            t,
            t.stateNode.containerInfo
          );
          break;
        case 10:
          gu(
            t,
            t.type,
            t.memoizedProps.value
          );
          break;
        case 12:
          (a & t.childLanes) !== 0 && (t.flags |= 4), t.flags |= 2048;
          var i = t.stateNode;
          i.effectDuration = -0, i.passiveEffectDuration = -0;
          break;
        case 31:
          if (t.memoizedState !== null)
            return t.flags |= 128, Hr(t), null;
          break;
        case 13:
          if (i = t.memoizedState, i !== null)
            return i.dehydrated !== null ? (la(t), t.flags |= 128, null) : (a & t.child.childLanes) !== 0 ? ev(
              e,
              t,
              a
            ) : (la(t), e = Cu(
              e,
              t,
              a
            ), e !== null ? e.sibling : null);
          la(t);
          break;
        case 19:
          var o = (e.flags & 128) !== 0;
          if (i = (a & t.childLanes) !== 0, i || (Wi(
            e,
            t,
            a,
            !1
          ), i = (a & t.childLanes) !== 0), o) {
            if (i)
              return lh(
                e,
                t,
                a
              );
            t.flags |= 128;
          }
          if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), Ue(
            _l,
            _l.current,
            t
          ), i) break;
          return null;
        case 22:
          return t.lanes = 0, kd(
            e,
            t,
            a,
            t.pendingProps
          );
        case 24:
          gu(
            t,
            Ul,
            e.memoizedState.cache
          );
      }
      return Cu(e, t, a);
    }
    function nh(e, t, a) {
      if (t._debugNeedsRemount && e !== null) {
        a = jc(
          t.type,
          t.key,
          t.pendingProps,
          t._debugOwner || null,
          t.mode,
          t.lanes
        ), a._debugStack = t._debugStack, a._debugTask = t._debugTask;
        var i = t.return;
        if (i === null) throw Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, a._debugInfo = t._debugInfo, t === i.child)
          i.child = a;
        else {
          var o = i.child;
          if (o === null)
            throw Error("Expected parent to have a child.");
          for (; o.sibling !== t; )
            if (o = o.sibling, o === null)
              throw Error("Expected to find the previous sibling.");
          o.sibling = a;
        }
        return t = i.deletions, t === null ? (i.deletions = [e], i.flags |= 16) : t.push(e), a.flags |= 2, a;
      }
      if (e !== null)
        if (e.memoizedProps !== t.pendingProps || t.type !== e.type)
          Bl = !0;
        else {
          if (!ah(e, a) && (t.flags & 128) === 0)
            return Bl = !1, _y(
              e,
              t,
              a
            );
          Bl = (e.flags & 131072) !== 0;
        }
      else
        Bl = !1, (i = ct) && (Ji(), i = (t.flags & 1048576) !== 0), i && (i = t.index, Ji(), Im(t, Lp, i));
      switch (t.lanes = 0, t.tag) {
        case 16:
          e: if (i = t.pendingProps, e = nn(t.elementType), t.type = e, typeof e == "function")
            zd(e) ? (i = bi(
              e,
              i
            ), t.tag = 1, t.type = e = Zi(e), t = Oy(
              null,
              t,
              e,
              i,
              a
            )) : (t.tag = 0, cf(t, e), t.type = e = Zi(e), t = Fd(
              null,
              t,
              e,
              i,
              a
            ));
          else {
            if (e != null) {
              if (o = e.$$typeof, o === Di) {
                t.tag = 11, t.type = e = Od(e), t = Sy(
                  null,
                  t,
                  e,
                  i,
                  a
                );
                break e;
              } else if (o === mo) {
                t.tag = 14, t = by(
                  null,
                  t,
                  e,
                  i,
                  a
                );
                break e;
              }
            }
            throw t = "", e !== null && typeof e == "object" && e.$$typeof === ml && (t = " Did you wrap a component in React.lazy() more than once?"), a = tt(e) || e, Error(
              "Element type is invalid. Received a promise that resolves to: " + a + ". Lazy element type must resolve to a class or function." + t
            );
          }
          return t;
        case 0:
          return Fd(
            e,
            t,
            t.type,
            t.pendingProps,
            a
          );
        case 1:
          return i = t.type, o = bi(
            i,
            t.pendingProps
          ), Oy(
            e,
            t,
            i,
            o,
            a
          );
        case 3:
          e: {
            if (X(
              t,
              t.stateNode.containerInfo
            ), e === null)
              throw Error(
                "Should have a current fiber. This is a bug in React."
              );
            i = t.pendingProps;
            var f = t.memoizedState;
            o = f.element, xa(e, t), Ln(t, i, null, a);
            var d = t.memoizedState;
            if (i = d.cache, gu(t, Ul, i), i !== f.cache && ki(
              t,
              [Ul],
              a,
              !0
            ), Ou(), i = d.element, f.isDehydrated)
              if (f = {
                element: i,
                isDehydrated: !1,
                cache: d.cache
              }, t.updateQueue.baseState = f, t.memoizedState = f, t.flags & 256) {
                t = Fr(
                  e,
                  t,
                  i,
                  a
                );
                break e;
              } else if (i !== o) {
                o = ha(
                  Error(
                    "This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."
                  ),
                  t
                ), vu(o), t = Fr(
                  e,
                  t,
                  i,
                  a
                );
                break e;
              } else
                for (e = t.stateNode.containerInfo, e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e, It = on(e.firstChild), Oa = t, ct = !0, xf = null, gc = !1, eu = null, Iu = !0, a = mb(
                  t,
                  null,
                  i,
                  a
                ), t.child = a; a; )
                  a.flags = a.flags & -3 | 4096, a = a.sibling;
            else {
              if (si(), i === o) {
                t = Cu(
                  e,
                  t,
                  a
                );
                break e;
              }
              Vl(
                e,
                t,
                i,
                a
              );
            }
            t = t.child;
          }
          return t;
        case 26:
          return Wd(e, t), e === null ? (a = sp(
            t.type,
            null,
            t.pendingProps,
            null
          )) ? t.memoizedState = a : ct || (a = t.type, e = t.pendingProps, i = jt(
            Hn.current
          ), i = Sh(
            i
          ).createElement(a), i[Fl] = t, i[fa] = e, ft(i, a, e), ye(i), t.stateNode = i) : t.memoizedState = sp(
            t.type,
            e.memoizedProps,
            t.pendingProps,
            e.memoizedState
          ), null;
        case 27:
          return ce(t), e === null && ct && (i = jt(Hn.current), o = P(), i = t.stateNode = Wn(
            t.type,
            t.pendingProps,
            i,
            o,
            !1
          ), gc || (o = np(
            i,
            t.type,
            t.pendingProps,
            o
          ), o !== null && (Yc(t, 0).serverProps = o)), Oa = t, Iu = !0, o = It, _i(t.type) ? (m1 = o, It = on(
            i.firstChild
          )) : It = o), Vl(
            e,
            t,
            t.pendingProps.children,
            a
          ), Wd(e, t), e === null && (t.flags |= 4194304), t.child;
        case 5:
          return e === null && ct && (f = P(), i = md(
            t.type,
            f.ancestorInfo
          ), o = It, (d = !o) || (d = _v(
            o,
            t.type,
            t.pendingProps,
            Iu
          ), d !== null ? (t.stateNode = d, gc || (f = np(
            d,
            t.type,
            t.pendingProps,
            f
          ), f !== null && (Yc(t, 0).serverProps = f)), Oa = t, It = on(
            d.firstChild
          ), Iu = !1, f = !0) : f = !1, d = !f), d && (i && Ki(t, o), ri(t))), ce(t), o = t.type, f = t.pendingProps, d = e !== null ? e.memoizedProps : null, i = f.children, gs(o, f) ? i = null : d !== null && gs(o, d) && (t.flags |= 32), t.memoizedState !== null && (o = il(
            e,
            t,
            Nr,
            null,
            null,
            a
          ), T0._currentValue = o), Wd(e, t), Vl(
            e,
            t,
            i,
            a
          ), t.child;
        case 6:
          return e === null && ct && (a = t.pendingProps, e = P(), i = e.ancestorInfo.current, a = i != null ? wo(
            a,
            i.tag,
            e.ancestorInfo.implicitRootScope
          ) : !0, e = It, (i = !e) || (i = Mt(
            e,
            t.pendingProps,
            Iu
          ), i !== null ? (t.stateNode = i, Oa = t, It = null, i = !0) : i = !1, i = !i), i && (a && Ki(t, e), ri(t))), null;
        case 13:
          return ev(e, t, a);
        case 4:
          return X(
            t,
            t.stateNode.containerInfo
          ), i = t.pendingProps, e === null ? t.child = Ws(
            t,
            null,
            i,
            a
          ) : Vl(
            e,
            t,
            i,
            a
          ), t.child;
        case 11:
          return Sy(
            e,
            t,
            t.type,
            t.pendingProps,
            a
          );
        case 7:
          return Vl(
            e,
            t,
            t.pendingProps,
            a
          ), t.child;
        case 8:
          return Vl(
            e,
            t,
            t.pendingProps.children,
            a
          ), t.child;
        case 12:
          return t.flags |= 4, t.flags |= 2048, i = t.stateNode, i.effectDuration = -0, i.passiveEffectDuration = -0, Vl(
            e,
            t,
            t.pendingProps.children,
            a
          ), t.child;
        case 10:
          return i = t.type, o = t.pendingProps, f = o.value, "value" in o || wb || (wb = !0, console.error(
            "The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"
          )), gu(t, i, f), Vl(
            e,
            t,
            o.children,
            a
          ), t.child;
        case 9:
          return o = t.type._context, i = t.pendingProps.children, typeof i != "function" && console.error(
            "A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."
          ), Pa(t), o = Yt(o), i = HS(
            i,
            o,
            void 0
          ), t.flags |= 1, Vl(
            e,
            t,
            i,
            a
          ), t.child;
        case 14:
          return by(
            e,
            t,
            t.type,
            t.pendingProps,
            a
          );
        case 15:
          return Ey(
            e,
            t,
            t.type,
            t.pendingProps,
            a
          );
        case 19:
          return lh(
            e,
            t,
            a
          );
        case 31:
          return P0(e, t, a);
        case 22:
          return kd(
            e,
            t,
            a,
            t.pendingProps
          );
        case 24:
          return Pa(t), i = Yt(Ul), e === null ? (o = _r(), o === null && (o = Xt, f = ny(), o.pooledCache = f, Gc(f), f !== null && (o.pooledCacheLanes |= a), o = f), t.memoizedState = {
            parent: i,
            cache: o
          }, Tu(t), gu(t, Ul, o)) : ((e.lanes & a) !== 0 && (xa(e, t), Ln(t, null, null, a), Ou()), o = e.memoizedState, f = t.memoizedState, o.parent !== i ? (o = {
            parent: i,
            cache: i
          }, t.memoizedState = o, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = o), gu(t, Ul, i)) : (i = f.cache, gu(t, Ul, i), i !== o.cache && ki(
            t,
            [Ul],
            a,
            !0
          ))), Vl(
            e,
            t,
            t.pendingProps.children,
            a
          ), t.child;
        case 29:
          throw t.pendingProps;
      }
      throw Error(
        "Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue."
      );
    }
    function Uu(e) {
      e.flags |= 4;
    }
    function Dy(e, t, a, i, o) {
      if ((t = (e.mode & qT) !== Ce) && (t = !1), t) {
        if (e.flags |= 16777216, (o & 335544128) === o)
          if (e.stateNode.complete) e.flags |= 8192;
          else if (hh()) e.flags |= 8192;
          else
            throw ks = cg, BS;
      } else e.flags &= -16777217;
    }
    function uh(e, t) {
      if (t.type !== "stylesheet" || (t.state.loading & ai) !== cd)
        e.flags &= -16777217;
      else if (e.flags |= 16777216, !Mh(t))
        if (hh()) e.flags |= 8192;
        else
          throw ks = cg, BS;
    }
    function es(e, t) {
      t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? xo() : 536870912, e.lanes |= t, td |= t);
    }
    function of(e, t) {
      if (!ct)
        switch (e.tailMode) {
          case "hidden":
            t = e.tail;
            for (var a = null; t !== null; )
              t.alternate !== null && (a = t), t = t.sibling;
            a === null ? e.tail = null : a.sibling = null;
            break;
          case "collapsed":
            a = e.tail;
            for (var i = null; a !== null; )
              a.alternate !== null && (i = a), a = a.sibling;
            i === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : i.sibling = null;
        }
    }
    function Rt(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = 0, i = 0;
      if (t)
        if ((e.mode & $e) !== Ce) {
          for (var o = e.selfBaseDuration, f = e.child; f !== null; )
            a |= f.lanes | f.childLanes, i |= f.subtreeFlags & 65011712, i |= f.flags & 65011712, o += f.treeBaseDuration, f = f.sibling;
          e.treeBaseDuration = o;
        } else
          for (o = e.child; o !== null; )
            a |= o.lanes | o.childLanes, i |= o.subtreeFlags & 65011712, i |= o.flags & 65011712, o.return = e, o = o.sibling;
      else if ((e.mode & $e) !== Ce) {
        o = e.actualDuration, f = e.selfBaseDuration;
        for (var d = e.child; d !== null; )
          a |= d.lanes | d.childLanes, i |= d.subtreeFlags, i |= d.flags, o += d.actualDuration, f += d.treeBaseDuration, d = d.sibling;
        e.actualDuration = o, e.treeBaseDuration = f;
      } else
        for (o = e.child; o !== null; )
          a |= o.lanes | o.childLanes, i |= o.subtreeFlags, i |= o.flags, o.return = e, o = o.sibling;
      return e.subtreeFlags |= i, e.childLanes = a, t;
    }
    function tv(e, t, a) {
      var i = t.pendingProps;
      switch (Pm(t), t.tag) {
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return Rt(t), null;
        case 1:
          return Rt(t), null;
        case 3:
          return a = t.stateNode, i = null, e !== null && (i = e.memoizedState.cache), t.memoizedState.cache !== i && (t.flags |= 2048), Su(Ul, t), j(t), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (e === null || e.child === null) && (qc(t) ? (Er(), Uu(t)) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, ly())), Rt(t), null;
        case 26:
          var o = t.type, f = t.memoizedState;
          return e === null ? (Uu(t), f !== null ? (Rt(t), uh(
            t,
            f
          )) : (Rt(t), Dy(
            t,
            o,
            null,
            i,
            a
          ))) : f ? f !== e.memoizedState ? (Uu(t), Rt(t), uh(
            t,
            f
          )) : (Rt(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== i && Uu(t), Rt(t), Dy(
            t,
            o,
            e,
            i,
            a
          )), null;
        case 27:
          if (ge(t), a = jt(Hn.current), o = t.type, e !== null && t.stateNode != null)
            e.memoizedProps !== i && Uu(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw Error(
                  "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
                );
              return Rt(t), null;
            }
            e = P(), qc(t) ? ey(t) : (e = Wn(
              o,
              i,
              a,
              e,
              !0
            ), t.stateNode = e, Uu(t));
          }
          return Rt(t), null;
        case 5:
          if (ge(t), o = t.type, e !== null && t.stateNode != null)
            e.memoizedProps !== i && Uu(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw Error(
                  "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
                );
              return Rt(t), null;
            }
            var d = P();
            if (qc(t))
              ey(t);
            else {
              switch (f = jt(Hn.current), md(o, d.ancestorInfo), d = d.context, f = Sh(f), d) {
                case Rm:
                  f = f.createElementNS(
                    nt,
                    o
                  );
                  break;
                case Ng:
                  f = f.createElementNS(
                    Ie,
                    o
                  );
                  break;
                default:
                  switch (o) {
                    case "svg":
                      f = f.createElementNS(
                        nt,
                        o
                      );
                      break;
                    case "math":
                      f = f.createElementNS(
                        Ie,
                        o
                      );
                      break;
                    case "script":
                      f = f.createElement("div"), f.innerHTML = "<script><\/script>", f = f.removeChild(
                        f.firstChild
                      );
                      break;
                    case "select":
                      f = typeof i.is == "string" ? f.createElement("select", {
                        is: i.is
                      }) : f.createElement("select"), i.multiple ? f.multiple = !0 : i.size && (f.size = i.size);
                      break;
                    default:
                      f = typeof i.is == "string" ? f.createElement(o, {
                        is: i.is
                      }) : f.createElement(o), o.indexOf("-") === -1 && (o !== o.toLowerCase() && console.error(
                        "<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.",
                        o
                      ), Object.prototype.toString.call(f) !== "[object HTMLUnknownElement]" || In.call(rE, o) || (rE[o] = !0, console.error(
                        "The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.",
                        o
                      )));
                  }
              }
              f[Fl] = t, f[fa] = i;
              e: for (d = t.child; d !== null; ) {
                if (d.tag === 5 || d.tag === 6)
                  f.appendChild(d.stateNode);
                else if (d.tag !== 4 && d.tag !== 27 && d.child !== null) {
                  d.child.return = d, d = d.child;
                  continue;
                }
                if (d === t) break e;
                for (; d.sibling === null; ) {
                  if (d.return === null || d.return === t)
                    break e;
                  d = d.return;
                }
                d.sibling.return = d.return, d = d.sibling;
              }
              t.stateNode = f;
              e: switch (ft(f, o, i), o) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  i = !!i.autoFocus;
                  break e;
                case "img":
                  i = !0;
                  break e;
                default:
                  i = !1;
              }
              i && Uu(t);
            }
          }
          return Rt(t), Dy(
            t,
            t.type,
            e === null ? null : e.memoizedProps,
            t.pendingProps,
            a
          ), null;
        case 6:
          if (e && t.stateNode != null)
            e.memoizedProps !== i && Uu(t);
          else {
            if (typeof i != "string" && t.stateNode === null)
              throw Error(
                "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
              );
            if (e = jt(Hn.current), a = P(), qc(t)) {
              if (e = t.stateNode, a = t.memoizedProps, o = !gc, i = null, f = Oa, f !== null)
                switch (f.tag) {
                  case 3:
                    o && (o = bs(
                      e,
                      a,
                      i
                    ), o !== null && (Yc(t, 0).serverProps = o));
                    break;
                  case 27:
                  case 5:
                    i = f.memoizedProps, o && (o = bs(
                      e,
                      a,
                      i
                    ), o !== null && (Yc(
                      t,
                      0
                    ).serverProps = o));
                }
              e[Fl] = t, e = !!(e.nodeValue === a || i !== null && i.suppressHydrationWarning === !0 || ps(e.nodeValue, a)), e || ri(t, !0);
            } else
              o = a.ancestorInfo.current, o != null && wo(
                i,
                o.tag,
                a.ancestorInfo.implicitRootScope
              ), e = Sh(e).createTextNode(
                i
              ), e[Fl] = t, t.stateNode = e;
          }
          return Rt(t), null;
        case 31:
          if (a = t.memoizedState, e === null || e.memoizedState !== null) {
            if (i = qc(t), a !== null) {
              if (e === null) {
                if (!i)
                  throw Error(
                    "A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React."
                  );
                if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e)
                  throw Error(
                    "Expected to have a hydrated activity instance. This error is likely caused by a bug in React. Please file an issue."
                  );
                e[Fl] = t, Rt(t), (t.mode & $e) !== Ce && a !== null && (e = t.child, e !== null && (t.treeBaseDuration -= e.treeBaseDuration));
              } else
                Er(), si(), (t.flags & 128) === 0 && (a = t.memoizedState = null), t.flags |= 4, Rt(t), (t.mode & $e) !== Ce && a !== null && (e = t.child, e !== null && (t.treeBaseDuration -= e.treeBaseDuration));
              e = !1;
            } else
              a = ly(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a), e = !0;
            if (!e)
              return t.flags & 256 ? (aa(t), t) : (aa(t), null);
            if ((t.flags & 128) !== 0)
              throw Error(
                "Client rendering an Activity suspended it again. This is a bug in React."
              );
          }
          return Rt(t), null;
        case 13:
          if (i = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (o = i, f = qc(t), o !== null && o.dehydrated !== null) {
              if (e === null) {
                if (!f)
                  throw Error(
                    "A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React."
                  );
                if (f = t.memoizedState, f = f !== null ? f.dehydrated : null, !f)
                  throw Error(
                    "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue."
                  );
                f[Fl] = t, Rt(t), (t.mode & $e) !== Ce && o !== null && (o = t.child, o !== null && (t.treeBaseDuration -= o.treeBaseDuration));
              } else
                Er(), si(), (t.flags & 128) === 0 && (o = t.memoizedState = null), t.flags |= 4, Rt(t), (t.mode & $e) !== Ce && o !== null && (o = t.child, o !== null && (t.treeBaseDuration -= o.treeBaseDuration));
              o = !1;
            } else
              o = ly(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = o), o = !0;
            if (!o)
              return t.flags & 256 ? (aa(t), t) : (aa(t), null);
          }
          return aa(t), (t.flags & 128) !== 0 ? (t.lanes = a, (t.mode & $e) !== Ce && ln(t), t) : (a = i !== null, e = e !== null && e.memoizedState !== null, a && (i = t.child, o = null, i.alternate !== null && i.alternate.memoizedState !== null && i.alternate.memoizedState.cachePool !== null && (o = i.alternate.memoizedState.cachePool.pool), f = null, i.memoizedState !== null && i.memoizedState.cachePool !== null && (f = i.memoizedState.cachePool.pool), f !== o && (i.flags |= 2048)), a !== e && a && (t.child.flags |= 8192), es(t, t.updateQueue), Rt(t), (t.mode & $e) !== Ce && a && (e = t.child, e !== null && (t.treeBaseDuration -= e.treeBaseDuration)), null);
        case 4:
          return j(t), e === null && ms(
            t.stateNode.containerInfo
          ), Rt(t), null;
        case 10:
          return Su(t.type, t), Rt(t), null;
        case 19:
          if (Ae(_l, t), i = t.memoizedState, i === null) return Rt(t), null;
          if (o = (t.flags & 128) !== 0, f = i.rendering, f === null)
            if (o) of(i, !1);
            else {
              if (dl !== Co || e !== null && (e.flags & 128) !== 0)
                for (e = t.child; e !== null; ) {
                  if (f = _u(e), f !== null) {
                    for (t.flags |= 128, of(i, !1), e = f.updateQueue, t.updateQueue = e, es(t, e), t.subtreeFlags = 0, e = a, a = t.child; a !== null; )
                      Zo(a, e), a = a.sibling;
                    return Ue(
                      _l,
                      _l.current & pm | n0,
                      t
                    ), ct && pu(t, i.treeForkCount), t.child;
                  }
                  e = e.sibling;
                }
              i.tail !== null && rl() > bg && (t.flags |= 128, o = !0, of(i, !1), t.lanes = 4194304);
            }
          else {
            if (!o)
              if (e = _u(f), e !== null) {
                if (t.flags |= 128, o = !0, e = e.updateQueue, t.updateQueue = e, es(t, e), of(i, !0), i.tail === null && i.tailMode === "hidden" && !f.alternate && !ct)
                  return Rt(t), null;
              } else
                2 * rl() - i.renderingStartTime > bg && a !== 536870912 && (t.flags |= 128, o = !0, of(i, !1), t.lanes = 4194304);
            i.isBackwards ? (f.sibling = t.child, t.child = f) : (e = i.last, e !== null ? e.sibling = f : t.child = f, i.last = f);
          }
          return i.tail !== null ? (e = i.tail, i.rendering = e, i.tail = e.sibling, i.renderingStartTime = rl(), e.sibling = null, a = _l.current, a = o ? a & pm | n0 : a & pm, Ue(_l, a, t), ct && pu(t, i.treeForkCount), e) : (Rt(t), null);
        case 22:
        case 23:
          return aa(t), zu(t), i = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== i && (t.flags |= 8192) : i && (t.flags |= 8192), i ? (a & 536870912) !== 0 && (t.flags & 128) === 0 && (Rt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Rt(t), a = t.updateQueue, a !== null && es(t, a.retryQueue), a = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), i = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (i = t.memoizedState.cachePool.pool), i !== a && (t.flags |= 2048), e !== null && Ae(Ks, t), null;
        case 24:
          return a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), Su(Ul, t), Rt(t), null;
        case 25:
          return null;
        case 30:
          return null;
      }
      throw Error(
        "Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue."
      );
    }
    function lv(e, t) {
      switch (Pm(t), t.tag) {
        case 1:
          return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & $e) !== Ce && ln(t), t) : null;
        case 3:
          return Su(Ul, t), j(t), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
        case 26:
        case 27:
        case 5:
          return ge(t), null;
        case 31:
          if (t.memoizedState !== null) {
            if (aa(t), t.alternate === null)
              throw Error(
                "Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue."
              );
            si();
          }
          return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & $e) !== Ce && ln(t), t) : null;
        case 13:
          if (aa(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
              throw Error(
                "Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue."
              );
            si();
          }
          return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & $e) !== Ce && ln(t), t) : null;
        case 19:
          return Ae(_l, t), null;
        case 4:
          return j(t), null;
        case 10:
          return Su(t.type, t), null;
        case 22:
        case 23:
          return aa(t), zu(t), e !== null && Ae(Ks, t), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & $e) !== Ce && ln(t), t) : null;
        case 24:
          return Su(Ul, t), null;
        case 25:
          return null;
        default:
          return null;
      }
    }
    function av(e, t) {
      switch (Pm(t), t.tag) {
        case 3:
          Su(Ul, t), j(t);
          break;
        case 26:
        case 27:
        case 5:
          ge(t);
          break;
        case 4:
          j(t);
          break;
        case 31:
          t.memoizedState !== null && aa(t);
          break;
        case 13:
          aa(t);
          break;
        case 19:
          Ae(_l, t);
          break;
        case 10:
          Su(t.type, t);
          break;
        case 22:
        case 23:
          aa(t), zu(t), e !== null && Ae(Ks, t);
          break;
        case 24:
          Su(Ul, t);
      }
    }
    function Hu(e) {
      return (e.mode & $e) !== Ce;
    }
    function Ry(e, t) {
      Hu(e) ? (Tn(), Pc(t, e), bu()) : Pc(t, e);
    }
    function Ic(e, t, a) {
      Hu(e) ? (Tn(), Ei(
        a,
        e,
        t
      ), bu()) : Ei(
        a,
        e,
        t
      );
    }
    function Pc(e, t) {
      try {
        var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
        if (i !== null) {
          var o = i.next;
          a = o;
          do {
            if ((a.tag & e) === e && (i = void 0, (e & mn) !== fg && (zm = !0), i = fe(
              t,
              VT,
              a
            ), (e & mn) !== fg && (zm = !1), i !== void 0 && typeof i != "function")) {
              var f = void 0;
              f = (a.tag & lu) !== 0 ? "useLayoutEffect" : (a.tag & mn) !== 0 ? "useInsertionEffect" : "useEffect";
              var d = void 0;
              d = i === null ? " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof i.then == "function" ? `

It looks like you wrote ` + f + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + f + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://react.dev/link/hooks-data-fetching` : " You returned: " + i, fe(
                t,
                function(h, y) {
                  console.error(
                    "%s must not return anything besides a function, which is used for clean-up.%s",
                    h,
                    y
                  );
                },
                f,
                d
              );
            }
            a = a.next;
          } while (a !== o);
        }
      } catch (h) {
        pt(t, t.return, h);
      }
    }
    function Ei(e, t, a) {
      try {
        var i = t.updateQueue, o = i !== null ? i.lastEffect : null;
        if (o !== null) {
          var f = o.next;
          i = f;
          do {
            if ((i.tag & e) === e) {
              var d = i.inst, h = d.destroy;
              h !== void 0 && (d.destroy = void 0, (e & mn) !== fg && (zm = !0), o = t, fe(
                o,
                ZT,
                o,
                a,
                h
              ), (e & mn) !== fg && (zm = !1));
            }
            i = i.next;
          } while (i !== f);
        }
      } catch (y) {
        pt(t, t.return, y);
      }
    }
    function My(e, t) {
      Hu(e) ? (Tn(), Pc(t, e), bu()) : Pc(t, e);
    }
    function ih(e, t, a) {
      Hu(e) ? (Tn(), Ei(
        a,
        e,
        t
      ), bu()) : Ei(
        a,
        e,
        t
      );
    }
    function ff(e) {
      var t = e.updateQueue;
      if (t !== null) {
        var a = e.stateNode;
        e.type.defaultProps || "ref" in e.memoizedProps || bm || (a.props !== e.memoizedProps && console.error(
          "Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
          re(e) || "instance"
        ), a.state !== e.memoizedState && console.error(
          "Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
          re(e) || "instance"
        ));
        try {
          fe(
            e,
            Nd,
            t,
            a
          );
        } catch (i) {
          pt(e, e.return, i);
        }
      }
    }
    function nv(e, t, a) {
      return e.getSnapshotBeforeUpdate(t, a);
    }
    function Cy(e, t) {
      var a = t.memoizedProps, i = t.memoizedState;
      t = e.stateNode, e.type.defaultProps || "ref" in e.memoizedProps || bm || (t.props !== e.memoizedProps && console.error(
        "Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
        re(e) || "instance"
      ), t.state !== e.memoizedState && console.error(
        "Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
        re(e) || "instance"
      ));
      try {
        var o = bi(
          e.type,
          a
        ), f = fe(
          e,
          nv,
          t,
          o,
          i
        );
        a = Xb, f !== void 0 || a.has(e.type) || (a.add(e.type), fe(e, function() {
          console.error(
            "%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.",
            re(e)
          );
        })), t.__reactInternalSnapshotBeforeUpdate = f;
      } catch (d) {
        pt(e, e.return, d);
      }
    }
    function Uy(e, t, a) {
      a.props = bi(
        e.type,
        e.memoizedProps
      ), a.state = e.memoizedState, Hu(e) ? (Tn(), fe(
        e,
        ib,
        e,
        t,
        a
      ), bu()) : fe(
        e,
        ib,
        e,
        t,
        a
      );
    }
    function Hy(e) {
      var t = e.ref;
      if (t !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var a = e.stateNode;
            break;
          case 30:
            a = e.stateNode;
            break;
          default:
            a = e.stateNode;
        }
        if (typeof t == "function")
          if (Hu(e))
            try {
              Tn(), e.refCleanup = t(a);
            } finally {
              bu();
            }
          else e.refCleanup = t(a);
        else
          typeof t == "string" ? console.error("String refs are no longer supported.") : t.hasOwnProperty("current") || console.error(
            "Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().",
            re(e)
          ), t.current = a;
      }
    }
    function eo(e, t) {
      try {
        fe(e, Hy, e);
      } catch (a) {
        pt(e, t, a);
      }
    }
    function Kn(e, t) {
      var a = e.ref, i = e.refCleanup;
      if (a !== null)
        if (typeof i == "function")
          try {
            if (Hu(e))
              try {
                Tn(), fe(e, i);
              } finally {
                bu(e);
              }
            else fe(e, i);
          } catch (o) {
            pt(e, t, o);
          } finally {
            e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
          }
        else if (typeof a == "function")
          try {
            if (Hu(e))
              try {
                Tn(), fe(e, a, null);
              } finally {
                bu(e);
              }
            else fe(e, a, null);
          } catch (o) {
            pt(e, t, o);
          }
        else a.current = null;
    }
    function Ny(e, t, a, i) {
      var o = e.memoizedProps, f = o.id, d = o.onCommit;
      o = o.onRender, t = t === null ? "mount" : "update", ag && (t = "nested-update"), typeof o == "function" && o(
        f,
        t,
        e.actualDuration,
        e.treeBaseDuration,
        e.actualStartTime,
        a
      ), typeof d == "function" && d(f, t, i, a);
    }
    function to(e, t, a, i) {
      var o = e.memoizedProps;
      e = o.id, o = o.onPostCommit, t = t === null ? "mount" : "update", ag && (t = "nested-update"), typeof o == "function" && o(
        e,
        t,
        i,
        a
      );
    }
    function By(e) {
      var t = e.type, a = e.memoizedProps, i = e.stateNode;
      try {
        fe(
          e,
          vv,
          i,
          t,
          a,
          e
        );
      } catch (o) {
        pt(e, e.return, o);
      }
    }
    function ch(e, t, a) {
      try {
        fe(
          e,
          ip,
          e.stateNode,
          e.type,
          a,
          t,
          e
        );
      } catch (i) {
        pt(e, e.return, i);
      }
    }
    function xy(e) {
      return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && _i(e.type) || e.tag === 4;
    }
    function rf(e) {
      e: for (; ; ) {
        for (; e.sibling === null; ) {
          if (e.return === null || xy(e.return)) return null;
          e = e.return;
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
          if (e.tag === 27 && _i(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
          e.child.return = e, e = e.child;
        }
        if (!(e.flags & 2)) return e.stateNode;
      }
    }
    function oh(e, t, a) {
      var i = e.tag;
      if (i === 5 || i === 6)
        e = e.stateNode, t ? (Sv(a), (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(e, t)) : (Sv(a), t = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, t.appendChild(e), a = a._reactRootContainer, a != null || t.onclick !== null || (t.onclick = wl));
      else if (i !== 4 && (i === 27 && _i(e.type) && (a = e.stateNode, t = null), e = e.child, e !== null))
        for (oh(e, t, a), e = e.sibling; e !== null; )
          oh(e, t, a), e = e.sibling;
    }
    function sf(e, t, a) {
      var i = e.tag;
      if (i === 5 || i === 6)
        e = e.stateNode, t ? a.insertBefore(e, t) : a.appendChild(e);
      else if (i !== 4 && (i === 27 && _i(e.type) && (a = e.stateNode), e = e.child, e !== null))
        for (sf(e, t, a), e = e.sibling; e !== null; )
          sf(e, t, a), e = e.sibling;
    }
    function uv(e) {
      for (var t, a = e.return; a !== null; ) {
        if (xy(a)) {
          t = a;
          break;
        }
        a = a.return;
      }
      if (t == null)
        throw Error(
          "Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue."
        );
      switch (t.tag) {
        case 27:
          t = t.stateNode, a = rf(e), sf(
            e,
            a,
            t
          );
          break;
        case 5:
          a = t.stateNode, t.flags & 32 && (gv(a), t.flags &= -33), t = rf(e), sf(
            e,
            t,
            a
          );
          break;
        case 3:
        case 4:
          t = t.stateNode.containerInfo, a = rf(e), oh(
            e,
            a,
            t
          );
          break;
        default:
          throw Error(
            "Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue."
          );
      }
    }
    function jy(e) {
      var t = e.stateNode, a = e.memoizedProps;
      try {
        fe(
          e,
          Es,
          e.type,
          a,
          t,
          e
        );
      } catch (i) {
        pt(e, e.return, i);
      }
    }
    function iv(e, t) {
      return t.tag === 31 ? (t = t.memoizedState, e.memoizedState !== null && t === null) : t.tag === 13 ? (e = e.memoizedState, t = t.memoizedState, e !== null && e.dehydrated !== null && (t === null || t.dehydrated === null)) : t.tag === 3 ? e.memoizedState.isDehydrated && (t.flags & 256) === 0 : !1;
    }
    function Yy(e, t) {
      if (e = e.containerInfo, s1 = Yg, e = w0(e), Zm(e)) {
        if ("selectionStart" in e)
          var a = {
            start: e.selectionStart,
            end: e.selectionEnd
          };
        else
          e: {
            a = (a = e.ownerDocument) && a.defaultView || window;
            var i = a.getSelection && a.getSelection();
            if (i && i.rangeCount !== 0) {
              a = i.anchorNode;
              var o = i.anchorOffset, f = i.focusNode;
              i = i.focusOffset;
              try {
                a.nodeType, f.nodeType;
              } catch {
                a = null;
                break e;
              }
              var d = 0, h = -1, y = -1, p = 0, _ = 0, R = e, b = null;
              t: for (; ; ) {
                for (var Y; R !== a || o !== 0 && R.nodeType !== 3 || (h = d + o), R !== f || i !== 0 && R.nodeType !== 3 || (y = d + i), R.nodeType === 3 && (d += R.nodeValue.length), (Y = R.firstChild) !== null; )
                  b = R, R = Y;
                for (; ; ) {
                  if (R === e) break t;
                  if (b === a && ++p === o && (h = d), b === f && ++_ === i && (y = d), (Y = R.nextSibling) !== null) break;
                  R = b, b = R.parentNode;
                }
                R = Y;
              }
              a = h === -1 || y === -1 ? null : { start: h, end: y };
            } else a = null;
          }
        a = a || { start: 0, end: 0 };
      } else a = null;
      for (d1 = {
        focusedElem: e,
        selectionRange: a
      }, Yg = !1, sa = t; sa !== null; )
        if (t = sa, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
          e.return = t, sa = e;
        else
          for (; sa !== null; ) {
            switch (e = t = sa, a = e.alternate, o = e.flags, e.tag) {
              case 0:
                if ((o & 4) !== 0 && (e = e.updateQueue, e = e !== null ? e.events : null, e !== null))
                  for (a = 0; a < e.length; a++)
                    o = e[a], o.ref.impl = o.nextImpl;
                break;
              case 11:
              case 15:
                break;
              case 1:
                (o & 1024) !== 0 && a !== null && Cy(e, a);
                break;
              case 3:
                if ((o & 1024) !== 0) {
                  if (e = e.stateNode.containerInfo, a = e.nodeType, a === 9)
                    Th(e);
                  else if (a === 1)
                    switch (e.nodeName) {
                      case "HEAD":
                      case "HTML":
                      case "BODY":
                        Th(e);
                        break;
                      default:
                        e.textContent = "";
                    }
                }
                break;
              case 5:
              case 26:
              case 27:
              case 6:
              case 4:
              case 17:
                break;
              default:
                if ((o & 1024) !== 0)
                  throw Error(
                    "This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue."
                  );
            }
            if (e = t.sibling, e !== null) {
              e.return = t.return, sa = e;
              break;
            }
            sa = t.return;
          }
    }
    function hl(e, t, a) {
      var i = Ml(), o = en(), f = En(), d = ta(), h = a.flags;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          On(e, a), h & 4 && Ry(a, lu | ti);
          break;
        case 1:
          if (On(e, a), h & 4)
            if (e = a.stateNode, t === null)
              a.type.defaultProps || "ref" in a.memoizedProps || bm || (e.props !== a.memoizedProps && console.error(
                "Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
                re(a) || "instance"
              ), e.state !== a.memoizedState && console.error(
                "Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
                re(a) || "instance"
              )), Hu(a) ? (Tn(), fe(
                a,
                NS,
                a,
                e
              ), bu()) : fe(
                a,
                NS,
                a,
                e
              );
            else {
              var y = bi(
                a.type,
                t.memoizedProps
              );
              t = t.memoizedState, a.type.defaultProps || "ref" in a.memoizedProps || bm || (e.props !== a.memoizedProps && console.error(
                "Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
                re(a) || "instance"
              ), e.state !== a.memoizedState && console.error(
                "Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
                re(a) || "instance"
              )), Hu(a) ? (Tn(), fe(
                a,
                ab,
                a,
                e,
                y,
                t,
                e.__reactInternalSnapshotBeforeUpdate
              ), bu()) : fe(
                a,
                ab,
                a,
                e,
                y,
                t,
                e.__reactInternalSnapshotBeforeUpdate
              );
            }
          h & 64 && ff(a), h & 512 && eo(a, a.return);
          break;
        case 3:
          if (t = Xn(), On(e, a), h & 64 && (h = a.updateQueue, h !== null)) {
            if (y = null, a.child !== null)
              switch (a.child.tag) {
                case 27:
                case 5:
                  y = a.child.stateNode;
                  break;
                case 1:
                  y = a.child.stateNode;
              }
            try {
              fe(
                a,
                Nd,
                h,
                y
              );
            } catch (_) {
              pt(a, a.return, _);
            }
          }
          e.effectDuration += Ua(t);
          break;
        case 27:
          t === null && h & 4 && jy(a);
        case 26:
        case 5:
          if (On(e, a), t === null) {
            if (h & 4) By(a);
            else if (h & 64) {
              e = a.type, t = a.memoizedProps, y = a.stateNode;
              try {
                fe(
                  a,
                  bh,
                  y,
                  e,
                  t,
                  a
                );
              } catch (_) {
                pt(
                  a,
                  a.return,
                  _
                );
              }
            }
          }
          h & 512 && eo(a, a.return);
          break;
        case 12:
          if (h & 4) {
            h = Xn(), On(e, a), e = a.stateNode, e.effectDuration += Fi(h);
            try {
              fe(
                a,
                Ny,
                a,
                t,
                jf,
                e.effectDuration
              );
            } catch (_) {
              pt(a, a.return, _);
            }
          } else On(e, a);
          break;
        case 31:
          On(e, a), h & 4 && Gy(e, a);
          break;
        case 13:
          On(e, a), h & 4 && wy(e, a), h & 64 && (e = a.memoizedState, e !== null && (e = e.dehydrated, e !== null && (h = io.bind(
            null,
            a
          ), tS(e, h))));
          break;
        case 22:
          if (h = a.memoizedState !== null || Mo, !h) {
            t = t !== null && t.memoizedState !== null || xl, y = Mo;
            var p = xl;
            Mo = h, (xl = t) && !p ? (zn(
              e,
              a,
              (a.subtreeFlags & 8772) !== 0
            ), (a.mode & $e) !== Ce && 0 <= Oe && 0 <= De && 0.05 < De - Oe && Ed(
              a,
              Oe,
              De
            )) : On(e, a), Mo = y, xl = p;
          }
          break;
        case 30:
          break;
        default:
          On(e, a);
      }
      (a.mode & $e) !== Ce && 0 <= Oe && 0 <= De && ((yl || 0.05 < sl) && hu(
        a,
        Oe,
        De,
        sl,
        al
      ), a.alternate === null && a.return !== null && a.return.alternate !== null && 0.05 < De - Oe && (iv(
        a.return.alternate,
        a.return
      ) || du(
        a,
        Oe,
        De,
        "Mount"
      ))), ya(i), tn(o), al = f, yl = d;
    }
    function Cl(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, Cl(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && M(t)), e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
    }
    function Nu(e, t, a) {
      for (a = a.child; a !== null; )
        qy(
          e,
          t,
          a
        ), a = a.sibling;
    }
    function qy(e, t, a) {
      if (oa && typeof oa.onCommitFiberUnmount == "function")
        try {
          oa.onCommitFiberUnmount(Ci, a);
        } catch (p) {
          Zu || (Zu = !0, console.error(
            "React instrumentation encountered an error: %o",
            p
          ));
        }
      var i = Ml(), o = en(), f = En(), d = ta();
      switch (a.tag) {
        case 26:
          xl || Kn(a, t), Nu(
            e,
            t,
            a
          ), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (e = a.stateNode, e.parentNode.removeChild(e));
          break;
        case 27:
          xl || Kn(a, t);
          var h = jl, y = jn;
          _i(a.type) && (jl = a.stateNode, jn = !1), Nu(
            e,
            t,
            a
          ), fe(
            a,
            Ts,
            a.stateNode
          ), jl = h, jn = y;
          break;
        case 5:
          xl || Kn(a, t);
        case 6:
          if (h = jl, y = jn, jl = null, Nu(
            e,
            t,
            a
          ), jl = h, jn = y, jl !== null)
            if (jn)
              try {
                fe(
                  a,
                  gf,
                  jl,
                  a.stateNode
                );
              } catch (p) {
                pt(
                  a,
                  t,
                  p
                );
              }
            else
              try {
                fe(
                  a,
                  bv,
                  jl,
                  a.stateNode
                );
              } catch (p) {
                pt(
                  a,
                  t,
                  p
                );
              }
          break;
        case 18:
          jl !== null && (jn ? (e = jl, Ss(
            e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
            a.stateNode
          ), Of(e)) : Ss(jl, a.stateNode));
          break;
        case 4:
          h = jl, y = jn, jl = a.stateNode.containerInfo, jn = !0, Nu(
            e,
            t,
            a
          ), jl = h, jn = y;
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          Ei(
            mn,
            a,
            t
          ), xl || Ic(
            a,
            t,
            lu
          ), Nu(
            e,
            t,
            a
          );
          break;
        case 1:
          xl || (Kn(a, t), h = a.stateNode, typeof h.componentWillUnmount == "function" && Uy(
            a,
            t,
            h
          )), Nu(
            e,
            t,
            a
          );
          break;
        case 21:
          Nu(
            e,
            t,
            a
          );
          break;
        case 22:
          xl = (h = xl) || a.memoizedState !== null, Nu(
            e,
            t,
            a
          ), xl = h;
          break;
        default:
          Nu(
            e,
            t,
            a
          );
      }
      (a.mode & $e) !== Ce && 0 <= Oe && 0 <= De && (yl || 0.05 < sl) && hu(
        a,
        Oe,
        De,
        sl,
        al
      ), ya(i), tn(o), al = f, yl = d;
    }
    function Gy(e, t) {
      if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
        e = e.dehydrated;
        try {
          fe(
            t,
            fp,
            e
          );
        } catch (a) {
          pt(t, t.return, a);
        }
      }
    }
    function wy(e, t) {
      if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
        try {
          fe(
            t,
            mc,
            e
          );
        } catch (a) {
          pt(t, t.return, a);
        }
    }
    function ts(e) {
      switch (e.tag) {
        case 31:
        case 13:
        case 19:
          var t = e.stateNode;
          return t === null && (t = e.stateNode = new Qb()), t;
        case 22:
          return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new Qb()), t;
        default:
          throw Error(
            "Unexpected Suspense handler tag (" + e.tag + "). This is a bug in React."
          );
      }
    }
    function ls(e, t) {
      var a = ts(e);
      t.forEach(function(i) {
        if (!a.has(i)) {
          if (a.add(i), Bn)
            if (Em !== null && Tm !== null)
              Gu(Tm, Em);
            else
              throw Error(
                "Expected finished root and lanes to be set. This is a bug in React."
              );
          var o = Ai.bind(null, e, i);
          i.then(o, o);
        }
      });
    }
    function Zl(e, t) {
      var a = t.deletions;
      if (a !== null)
        for (var i = 0; i < a.length; i++) {
          var o = e, f = t, d = a[i], h = Ml(), y = f;
          e: for (; y !== null; ) {
            switch (y.tag) {
              case 27:
                if (_i(y.type)) {
                  jl = y.stateNode, jn = !1;
                  break e;
                }
                break;
              case 5:
                jl = y.stateNode, jn = !1;
                break e;
              case 3:
              case 4:
                jl = y.stateNode.containerInfo, jn = !0;
                break e;
            }
            y = y.return;
          }
          if (jl === null)
            throw Error(
              "Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue."
            );
          qy(o, f, d), jl = null, jn = !1, (d.mode & $e) !== Ce && 0 <= Oe && 0 <= De && 0.05 < De - Oe && du(
            d,
            Oe,
            De,
            "Unmount"
          ), ya(h), o = d, f = o.alternate, f !== null && (f.return = null), o.return = null;
        }
      if (t.subtreeFlags & 13886)
        for (t = t.child; t !== null; )
          Xy(t, e), t = t.sibling;
    }
    function Xy(e, t) {
      var a = Ml(), i = en(), o = En(), f = ta(), d = e.alternate, h = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Zl(t, e), Ga(e), h & 4 && (Ei(
            mn | ti,
            e,
            e.return
          ), Pc(mn | ti, e), Ic(
            e,
            e.return,
            lu | ti
          ));
          break;
        case 1:
          if (Zl(t, e), Ga(e), h & 512 && (xl || d === null || Kn(d, d.return)), h & 64 && Mo && (h = e.updateQueue, h !== null && (d = h.callbacks, d !== null))) {
            var y = h.shared.hiddenCallbacks;
            h.shared.hiddenCallbacks = y === null ? d : y.concat(d);
          }
          break;
        case 26:
          if (y = Bi, Zl(t, e), Ga(e), h & 512 && (xl || d === null || Kn(d, d.return)), h & 4) {
            var p = d !== null ? d.memoizedState : null;
            if (h = e.memoizedState, d === null)
              if (h === null)
                if (e.stateNode === null) {
                  e: {
                    h = e.type, d = e.memoizedProps, y = y.ownerDocument || y;
                    t: switch (h) {
                      case "title":
                        p = y.getElementsByTagName(
                          "title"
                        )[0], (!p || p[js] || p[Fl] || p.namespaceURI === nt || p.hasAttribute("itemprop")) && (p = y.createElement(h), y.head.insertBefore(
                          p,
                          y.querySelector(
                            "head > title"
                          )
                        )), ft(p, h, d), p[Fl] = e, ye(p), h = p;
                        break e;
                      case "link":
                        var _ = Mv(
                          "link",
                          "href",
                          y
                        ).get(h + (d.href || ""));
                        if (_) {
                          for (var R = 0; R < _.length; R++)
                            if (p = _[R], p.getAttribute("href") === (d.href == null || d.href === "" ? null : d.href) && p.getAttribute("rel") === (d.rel == null ? null : d.rel) && p.getAttribute("title") === (d.title == null ? null : d.title) && p.getAttribute("crossorigin") === (d.crossOrigin == null ? null : d.crossOrigin)) {
                              _.splice(R, 1);
                              break t;
                            }
                        }
                        p = y.createElement(h), ft(p, h, d), y.head.appendChild(
                          p
                        );
                        break;
                      case "meta":
                        if (_ = Mv(
                          "meta",
                          "content",
                          y
                        ).get(h + (d.content || ""))) {
                          for (R = 0; R < _.length; R++)
                            if (p = _[R], zt(
                              d.content,
                              "content"
                            ), p.getAttribute("content") === (d.content == null ? null : "" + d.content) && p.getAttribute("name") === (d.name == null ? null : d.name) && p.getAttribute("property") === (d.property == null ? null : d.property) && p.getAttribute("http-equiv") === (d.httpEquiv == null ? null : d.httpEquiv) && p.getAttribute("charset") === (d.charSet == null ? null : d.charSet)) {
                              _.splice(R, 1);
                              break t;
                            }
                        }
                        p = y.createElement(h), ft(p, h, d), y.head.appendChild(
                          p
                        );
                        break;
                      default:
                        throw Error(
                          'getNodesForType encountered a type it did not expect: "' + h + '". This is a bug in React.'
                        );
                    }
                    p[Fl] = e, ye(p), h = p;
                  }
                  e.stateNode = h;
                } else
                  mp(
                    y,
                    e.type,
                    e.stateNode
                  );
              else
                e.stateNode = Dh(
                  y,
                  h,
                  e.memoizedProps
                );
            else
              p !== h ? (p === null ? d.stateNode !== null && (d = d.stateNode, d.parentNode.removeChild(d)) : p.count--, h === null ? mp(
                y,
                e.type,
                e.stateNode
              ) : Dh(
                y,
                h,
                e.memoizedProps
              )) : h === null && e.stateNode !== null && ch(
                e,
                e.memoizedProps,
                d.memoizedProps
              );
          }
          break;
        case 27:
          Zl(t, e), Ga(e), h & 512 && (xl || d === null || Kn(d, d.return)), d !== null && h & 4 && ch(
            e,
            e.memoizedProps,
            d.memoizedProps
          );
          break;
        case 5:
          if (Zl(t, e), Ga(e), h & 512 && (xl || d === null || Kn(d, d.return)), e.flags & 32) {
            y = e.stateNode;
            try {
              fe(
                e,
                gv,
                y
              );
            } catch (oe) {
              pt(e, e.return, oe);
            }
          }
          h & 4 && e.stateNode != null && (y = e.memoizedProps, ch(
            e,
            y,
            d !== null ? d.memoizedProps : y
          )), h & 1024 && (JS = !0, e.type !== "form" && console.error(
            "Unexpected host component type. Expected a form. This is a bug in React."
          ));
          break;
        case 6:
          if (Zl(t, e), Ga(e), h & 4) {
            if (e.stateNode === null)
              throw Error(
                "This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue."
              );
            h = e.memoizedProps, d = d !== null ? d.memoizedProps : h, y = e.stateNode;
            try {
              fe(
                e,
                eS,
                y,
                d,
                h
              );
            } catch (oe) {
              pt(e, e.return, oe);
            }
          }
          break;
        case 3:
          if (y = Xn(), Bg = null, p = Bi, Bi = As(t.containerInfo), Zl(t, e), Bi = p, Ga(e), h & 4 && d !== null && d.memoizedState.isDehydrated)
            try {
              fe(
                e,
                _h,
                t.containerInfo
              );
            } catch (oe) {
              pt(e, e.return, oe);
            }
          JS && (JS = !1, as(e)), t.effectDuration += Ua(
            y
          );
          break;
        case 4:
          h = Bi, Bi = As(
            e.stateNode.containerInfo
          ), Zl(t, e), Ga(e), Bi = h;
          break;
        case 12:
          h = Xn(), Zl(t, e), Ga(e), e.stateNode.effectDuration += Fi(h);
          break;
        case 31:
          Zl(t, e), Ga(e), h & 4 && (h = e.updateQueue, h !== null && (e.updateQueue = null, ls(e, h)));
          break;
        case 13:
          Zl(t, e), Ga(e), e.child.flags & 8192 && e.memoizedState !== null != (d !== null && d.memoizedState !== null) && (Sg = rl()), h & 4 && (h = e.updateQueue, h !== null && (e.updateQueue = null, ls(e, h)));
          break;
        case 22:
          y = e.memoizedState !== null;
          var b = d !== null && d.memoizedState !== null, Y = Mo, ne = xl;
          if (Mo = Y || y, xl = ne || b, Zl(t, e), xl = ne, Mo = Y, b && !y && !Y && !ne && (e.mode & $e) !== Ce && 0 <= Oe && 0 <= De && 0.05 < De - Oe && Ed(
            e,
            Oe,
            De
          ), Ga(e), h & 8192)
            e: for (t = e.stateNode, t._visibility = y ? t._visibility & ~Qp : t._visibility | Qp, !y || d === null || b || Mo || xl || (cc(e), (e.mode & $e) !== Ce && 0 <= Oe && 0 <= De && 0.05 < De - Oe && du(
              e,
              Oe,
              De,
              "Disconnect"
            )), d = null, t = e; ; ) {
              if (t.tag === 5 || t.tag === 26) {
                if (d === null) {
                  b = d = t;
                  try {
                    p = b.stateNode, y ? fe(
                      b,
                      Tv,
                      p
                    ) : fe(
                      b,
                      zv,
                      b.stateNode,
                      b.memoizedProps
                    );
                  } catch (oe) {
                    pt(b, b.return, oe);
                  }
                }
              } else if (t.tag === 6) {
                if (d === null) {
                  b = t;
                  try {
                    _ = b.stateNode, y ? fe(
                      b,
                      Av,
                      _
                    ) : fe(
                      b,
                      Eh,
                      _,
                      b.memoizedProps
                    );
                  } catch (oe) {
                    pt(b, b.return, oe);
                  }
                }
              } else if (t.tag === 18) {
                if (d === null) {
                  b = t;
                  try {
                    R = b.stateNode, y ? fe(
                      b,
                      Ev,
                      R
                    ) : fe(
                      b,
                      Ov,
                      b.stateNode
                    );
                  } catch (oe) {
                    pt(b, b.return, oe);
                  }
                }
              } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
                t.child.return = t, t = t.child;
                continue;
              }
              if (t === e) break e;
              for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                  break e;
                d === t && (d = null), t = t.return;
              }
              d === t && (d = null), t.sibling.return = t.return, t = t.sibling;
            }
          h & 4 && (h = e.updateQueue, h !== null && (d = h.retryQueue, d !== null && (h.retryQueue = null, ls(e, d))));
          break;
        case 19:
          Zl(t, e), Ga(e), h & 4 && (h = e.updateQueue, h !== null && (e.updateQueue = null, ls(e, h)));
          break;
        case 30:
          break;
        case 21:
          break;
        default:
          Zl(t, e), Ga(e);
      }
      (e.mode & $e) !== Ce && 0 <= Oe && 0 <= De && ((yl || 0.05 < sl) && hu(
        e,
        Oe,
        De,
        sl,
        al
      ), e.alternate === null && e.return !== null && e.return.alternate !== null && 0.05 < De - Oe && (iv(
        e.return.alternate,
        e.return
      ) || du(
        e,
        Oe,
        De,
        "Mount"
      ))), ya(a), tn(i), al = o, yl = f;
    }
    function Ga(e) {
      var t = e.flags;
      if (t & 2) {
        try {
          fe(e, uv, e);
        } catch (a) {
          pt(e, e.return, a);
        }
        e.flags &= -3;
      }
      t & 4096 && (e.flags &= -4097);
    }
    function as(e) {
      if (e.subtreeFlags & 1024)
        for (e = e.child; e !== null; ) {
          var t = e;
          as(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
        }
    }
    function On(e, t) {
      if (t.subtreeFlags & 8772)
        for (t = t.child; t !== null; )
          hl(e, t.alternate, t), t = t.sibling;
    }
    function Qy(e) {
      var t = Ml(), a = en(), i = En(), o = ta();
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Ic(
            e,
            e.return,
            lu
          ), cc(e);
          break;
        case 1:
          Kn(e, e.return);
          var f = e.stateNode;
          typeof f.componentWillUnmount == "function" && Uy(
            e,
            e.return,
            f
          ), cc(e);
          break;
        case 27:
          fe(
            e,
            Ts,
            e.stateNode
          );
        case 26:
        case 5:
          Kn(e, e.return), cc(e);
          break;
        case 22:
          e.memoizedState === null && cc(e);
          break;
        case 30:
          cc(e);
          break;
        default:
          cc(e);
      }
      (e.mode & $e) !== Ce && 0 <= Oe && 0 <= De && (yl || 0.05 < sl) && hu(
        e,
        Oe,
        De,
        sl,
        al
      ), ya(t), tn(a), al = i, yl = o;
    }
    function cc(e) {
      for (e = e.child; e !== null; )
        Qy(e), e = e.sibling;
    }
    function Ly(e, t, a, i) {
      var o = Ml(), f = en(), d = En(), h = ta(), y = a.flags;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          zn(
            e,
            a,
            i
          ), Ry(a, lu);
          break;
        case 1:
          if (zn(
            e,
            a,
            i
          ), t = a.stateNode, typeof t.componentDidMount == "function" && fe(
            a,
            NS,
            a,
            t
          ), t = a.updateQueue, t !== null) {
            e = a.stateNode;
            try {
              fe(
                a,
                Ur,
                t,
                e
              );
            } catch (p) {
              pt(a, a.return, p);
            }
          }
          i && y & 64 && ff(a), eo(a, a.return);
          break;
        case 27:
          jy(a);
        case 26:
        case 5:
          zn(
            e,
            a,
            i
          ), i && t === null && y & 4 && By(a), eo(a, a.return);
          break;
        case 12:
          if (i && y & 4) {
            y = Xn(), zn(
              e,
              a,
              i
            ), i = a.stateNode, i.effectDuration += Fi(y);
            try {
              fe(
                a,
                Ny,
                a,
                t,
                jf,
                i.effectDuration
              );
            } catch (p) {
              pt(a, a.return, p);
            }
          } else
            zn(
              e,
              a,
              i
            );
          break;
        case 31:
          zn(
            e,
            a,
            i
          ), i && y & 4 && Gy(e, a);
          break;
        case 13:
          zn(
            e,
            a,
            i
          ), i && y & 4 && wy(e, a);
          break;
        case 22:
          a.memoizedState === null && zn(
            e,
            a,
            i
          ), eo(a, a.return);
          break;
        case 30:
          break;
        default:
          zn(
            e,
            a,
            i
          );
      }
      (a.mode & $e) !== Ce && 0 <= Oe && 0 <= De && (yl || 0.05 < sl) && hu(
        a,
        Oe,
        De,
        sl,
        al
      ), ya(o), tn(f), al = d, yl = h;
    }
    function zn(e, t, a) {
      for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; )
        Ly(
          e,
          t.alternate,
          t,
          a
        ), t = t.sibling;
    }
    function ns(e, t) {
      var a = null;
      e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== a && (e != null && Gc(e), a != null && Or(a));
    }
    function us(e, t) {
      e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (Gc(t), e != null && Or(e));
    }
    function _n(e, t, a, i, o) {
      if (t.subtreeFlags & 10256 || t.actualDuration !== 0 && (t.alternate === null || t.alternate.child !== t.child))
        for (t = t.child; t !== null; ) {
          var f = t.sibling;
          fh(
            e,
            t,
            a,
            i,
            f !== null ? f.actualStartTime : o
          ), t = f;
        }
    }
    function fh(e, t, a, i, o) {
      var f = Ml(), d = en(), h = En(), y = ta(), p = Hf, _ = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          (t.mode & $e) !== Ce && 0 < t.actualStartTime && (t.flags & 1) !== 0 && Td(
            t,
            t.actualStartTime,
            o,
            Il,
            a
          ), _n(
            e,
            t,
            a,
            i,
            o
          ), _ & 2048 && My(t, yn | ti);
          break;
        case 1:
          (t.mode & $e) !== Ce && 0 < t.actualStartTime && ((t.flags & 128) !== 0 ? Ad(
            t,
            t.actualStartTime,
            o,
            []
          ) : (t.flags & 1) !== 0 && Td(
            t,
            t.actualStartTime,
            o,
            Il,
            a
          )), _n(
            e,
            t,
            a,
            i,
            o
          );
          break;
        case 3:
          var R = Xn(), b = Il;
          Il = t.alternate !== null && t.alternate.memoizedState.isDehydrated && (t.flags & 256) === 0, _n(
            e,
            t,
            a,
            i,
            o
          ), Il = b, _ & 2048 && (a = null, t.alternate !== null && (a = t.alternate.memoizedState.cache), i = t.memoizedState.cache, i !== a && (Gc(i), a != null && Or(a))), e.passiveEffectDuration += Ua(
            R
          );
          break;
        case 12:
          if (_ & 2048) {
            _ = Xn(), _n(
              e,
              t,
              a,
              i,
              o
            ), e = t.stateNode, e.passiveEffectDuration += Fi(_);
            try {
              fe(
                t,
                to,
                t,
                t.alternate,
                jf,
                e.passiveEffectDuration
              );
            } catch (Y) {
              pt(t, t.return, Y);
            }
          } else
            _n(
              e,
              t,
              a,
              i,
              o
            );
          break;
        case 31:
          _ = Il, R = t.alternate !== null ? t.alternate.memoizedState : null, b = t.memoizedState, R !== null && b === null ? (b = t.deletions, b !== null && 0 < b.length && b[0].tag === 18 ? (Il = !1, R = R.hydrationErrors, R !== null && Ad(
            t,
            t.actualStartTime,
            o,
            R
          )) : Il = !0) : Il = !1, _n(
            e,
            t,
            a,
            i,
            o
          ), Il = _;
          break;
        case 13:
          _ = Il, R = t.alternate !== null ? t.alternate.memoizedState : null, b = t.memoizedState, R === null || R.dehydrated === null || b !== null && b.dehydrated !== null ? Il = !1 : (b = t.deletions, b !== null && 0 < b.length && b[0].tag === 18 ? (Il = !1, R = R.hydrationErrors, R !== null && Ad(
            t,
            t.actualStartTime,
            o,
            R
          )) : Il = !0), _n(
            e,
            t,
            a,
            i,
            o
          ), Il = _;
          break;
        case 23:
          break;
        case 22:
          b = t.stateNode, R = t.alternate, t.memoizedState !== null ? b._visibility & So ? _n(
            e,
            t,
            a,
            i,
            o
          ) : df(
            e,
            t,
            a,
            i,
            o
          ) : b._visibility & So ? _n(
            e,
            t,
            a,
            i,
            o
          ) : (b._visibility |= So, Ti(
            e,
            t,
            a,
            i,
            (t.subtreeFlags & 10256) !== 0 || t.actualDuration !== 0 && (t.alternate === null || t.alternate.child !== t.child),
            o
          ), (t.mode & $e) === Ce || Il || (e = t.actualStartTime, 0 <= e && 0.05 < o - e && Ed(t, e, o), 0 <= Oe && 0 <= De && 0.05 < De - Oe && Ed(
            t,
            Oe,
            De
          ))), _ & 2048 && ns(
            R,
            t
          );
          break;
        case 24:
          _n(
            e,
            t,
            a,
            i,
            o
          ), _ & 2048 && us(t.alternate, t);
          break;
        default:
          _n(
            e,
            t,
            a,
            i,
            o
          );
      }
      (t.mode & $e) !== Ce && ((e = !Il && t.alternate === null && t.return !== null && t.return.alternate !== null) && (a = t.actualStartTime, 0 <= a && 0.05 < o - a && du(
        t,
        a,
        o,
        "Mount"
      )), 0 <= Oe && 0 <= De && ((yl || 0.05 < sl) && hu(
        t,
        Oe,
        De,
        sl,
        al
      ), e && 0.05 < De - Oe && du(
        t,
        Oe,
        De,
        "Mount"
      ))), ya(f), tn(d), al = h, yl = y, Hf = p;
    }
    function Ti(e, t, a, i, o, f) {
      for (o = o && ((t.subtreeFlags & 10256) !== 0 || t.actualDuration !== 0 && (t.alternate === null || t.alternate.child !== t.child)), t = t.child; t !== null; ) {
        var d = t.sibling;
        rh(
          e,
          t,
          a,
          i,
          o,
          d !== null ? d.actualStartTime : f
        ), t = d;
      }
    }
    function rh(e, t, a, i, o, f) {
      var d = Ml(), h = en(), y = En(), p = ta(), _ = Hf;
      o && (t.mode & $e) !== Ce && 0 < t.actualStartTime && (t.flags & 1) !== 0 && Td(
        t,
        t.actualStartTime,
        f,
        Il,
        a
      );
      var R = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          Ti(
            e,
            t,
            a,
            i,
            o,
            f
          ), My(t, yn);
          break;
        case 23:
          break;
        case 22:
          var b = t.stateNode;
          t.memoizedState !== null ? b._visibility & So ? Ti(
            e,
            t,
            a,
            i,
            o,
            f
          ) : df(
            e,
            t,
            a,
            i,
            f
          ) : (b._visibility |= So, Ti(
            e,
            t,
            a,
            i,
            o,
            f
          )), o && R & 2048 && ns(
            t.alternate,
            t
          );
          break;
        case 24:
          Ti(
            e,
            t,
            a,
            i,
            o,
            f
          ), o && R & 2048 && us(t.alternate, t);
          break;
        default:
          Ti(
            e,
            t,
            a,
            i,
            o,
            f
          );
      }
      (t.mode & $e) !== Ce && 0 <= Oe && 0 <= De && (yl || 0.05 < sl) && hu(
        t,
        Oe,
        De,
        sl,
        al
      ), ya(d), tn(h), al = y, yl = p, Hf = _;
    }
    function df(e, t, a, i, o) {
      if (t.subtreeFlags & 10256 || t.actualDuration !== 0 && (t.alternate === null || t.alternate.child !== t.child))
        for (var f = t.child; f !== null; ) {
          t = f.sibling;
          var d = e, h = a, y = i, p = t !== null ? t.actualStartTime : o, _ = Hf;
          (f.mode & $e) !== Ce && 0 < f.actualStartTime && (f.flags & 1) !== 0 && Td(
            f,
            f.actualStartTime,
            p,
            Il,
            h
          );
          var R = f.flags;
          switch (f.tag) {
            case 22:
              df(
                d,
                f,
                h,
                y,
                p
              ), R & 2048 && ns(f.alternate, f);
              break;
            case 24:
              df(
                d,
                f,
                h,
                y,
                p
              ), R & 2048 && us(f.alternate, f);
              break;
            default:
              df(
                d,
                f,
                h,
                y,
                p
              );
          }
          Hf = _, f = t;
        }
    }
    function oc(e, t, a) {
      if (e.subtreeFlags & o0)
        for (e = e.child; e !== null; )
          Vy(
            e,
            t,
            a
          ), e = e.sibling;
    }
    function Vy(e, t, a) {
      switch (e.tag) {
        case 26:
          oc(
            e,
            t,
            a
          ), e.flags & o0 && e.memoizedState !== null && Ch(
            a,
            Bi,
            e.memoizedState,
            e.memoizedProps
          );
          break;
        case 5:
          oc(
            e,
            t,
            a
          );
          break;
        case 3:
        case 4:
          var i = Bi;
          Bi = As(
            e.stateNode.containerInfo
          ), oc(
            e,
            t,
            a
          ), Bi = i;
          break;
        case 22:
          e.memoizedState === null && (i = e.alternate, i !== null && i.memoizedState !== null ? (i = o0, o0 = 16777216, oc(
            e,
            t,
            a
          ), o0 = i) : oc(
            e,
            t,
            a
          ));
          break;
        default:
          oc(
            e,
            t,
            a
          );
      }
    }
    function Bu(e) {
      var t = e.alternate;
      if (t !== null && (e = t.child, e !== null)) {
        t.child = null;
        do
          t = e.sibling, e.sibling = null, e = t;
        while (e !== null);
      }
    }
    function lo(e) {
      var t = e.deletions;
      if ((e.flags & 16) !== 0) {
        if (t !== null)
          for (var a = 0; a < t.length; a++) {
            var i = t[a], o = Ml();
            sa = i, sh(
              i,
              e
            ), (i.mode & $e) !== Ce && 0 <= Oe && 0 <= De && 0.05 < De - Oe && du(
              i,
              Oe,
              De,
              "Unmount"
            ), ya(o);
          }
        Bu(e);
      }
      if (e.subtreeFlags & 10256)
        for (e = e.child; e !== null; )
          cv(e), e = e.sibling;
    }
    function cv(e) {
      var t = Ml(), a = en(), i = En(), o = ta();
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          lo(e), e.flags & 2048 && ih(
            e,
            e.return,
            yn | ti
          );
          break;
        case 3:
          var f = Xn();
          lo(e), e.stateNode.passiveEffectDuration += Ua(f);
          break;
        case 12:
          f = Xn(), lo(e), e.stateNode.passiveEffectDuration += Fi(f);
          break;
        case 22:
          f = e.stateNode, e.memoizedState !== null && f._visibility & So && (e.return === null || e.return.tag !== 13) ? (f._visibility &= ~So, is(e), (e.mode & $e) !== Ce && 0 <= Oe && 0 <= De && 0.05 < De - Oe && du(
            e,
            Oe,
            De,
            "Disconnect"
          )) : lo(e);
          break;
        default:
          lo(e);
      }
      (e.mode & $e) !== Ce && 0 <= Oe && 0 <= De && (yl || 0.05 < sl) && hu(
        e,
        Oe,
        De,
        sl,
        al
      ), ya(t), tn(a), yl = o, al = i;
    }
    function is(e) {
      var t = e.deletions;
      if ((e.flags & 16) !== 0) {
        if (t !== null)
          for (var a = 0; a < t.length; a++) {
            var i = t[a], o = Ml();
            sa = i, sh(
              i,
              e
            ), (i.mode & $e) !== Ce && 0 <= Oe && 0 <= De && 0.05 < De - Oe && du(
              i,
              Oe,
              De,
              "Unmount"
            ), ya(o);
          }
        Bu(e);
      }
      for (e = e.child; e !== null; )
        xu(e), e = e.sibling;
    }
    function xu(e) {
      var t = Ml(), a = en(), i = En(), o = ta();
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          ih(
            e,
            e.return,
            yn
          ), is(e);
          break;
        case 22:
          var f = e.stateNode;
          f._visibility & So && (f._visibility &= ~So, is(e));
          break;
        default:
          is(e);
      }
      (e.mode & $e) !== Ce && 0 <= Oe && 0 <= De && (yl || 0.05 < sl) && hu(
        e,
        Oe,
        De,
        sl,
        al
      ), ya(t), tn(a), yl = o, al = i;
    }
    function sh(e, t) {
      for (; sa !== null; ) {
        var a = sa, i = a, o = t, f = Ml(), d = en(), h = En(), y = ta();
        switch (i.tag) {
          case 0:
          case 11:
          case 15:
            ih(
              i,
              o,
              yn
            );
            break;
          case 23:
          case 22:
            i.memoizedState !== null && i.memoizedState.cachePool !== null && (o = i.memoizedState.cachePool.pool, o != null && Gc(o));
            break;
          case 24:
            Or(i.memoizedState.cache);
        }
        if ((i.mode & $e) !== Ce && 0 <= Oe && 0 <= De && (yl || 0.05 < sl) && hu(
          i,
          Oe,
          De,
          sl,
          al
        ), ya(f), tn(d), yl = y, al = h, i = a.child, i !== null) i.return = a, sa = i;
        else
          e: for (a = e; sa !== null; ) {
            if (i = sa, f = i.sibling, d = i.return, Cl(i), i === a) {
              sa = null;
              break e;
            }
            if (f !== null) {
              f.return = d, sa = f;
              break e;
            }
            sa = d;
          }
      }
    }
    function ov() {
      WT.forEach(function(e) {
        return e();
      });
    }
    function cs() {
      var e = typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0;
      return e || w.actQueue === null || console.error(
        "The current testing environment is not configured to support act(...)"
      ), e;
    }
    function Jl(e) {
      if ((yt & Pl) !== da && We !== 0)
        return We & -We;
      var t = w.T;
      return t !== null ? (t._updatedFibers || (t._updatedFibers = /* @__PURE__ */ new Set()), t._updatedFibers.add(e), ht()) : Xi();
    }
    function Gt() {
      if (qn === 0)
        if ((We & 536870912) === 0 || ct) {
          var e = Mf;
          Mf <<= 1, (Mf & 3932160) === 0 && (Mf = 262144), qn = e;
        } else qn = 536870912;
      return e = tu.current, e !== null && (e.flags |= 32), qn;
    }
    function ll(e, t, a) {
      if (zm && console.error("useInsertionEffect must not schedule updates."), a1 && (Ag = !0), (e === Xt && (Bt === Ps || Bt === ed) || e.cancelPendingCommit !== null) && (Sa(e, 0), ga(
        e,
        We,
        qn,
        !1
      )), wi(e, a), (yt & Pl) !== da && e === Xt) {
        if (Nn)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              e = Pe && re(Pe) || "Unknown", aE.has(e) || (aE.add(e), t = re(t) || "Unknown", console.error(
                "Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://react.dev/link/setstate-in-render",
                t,
                e,
                e
              ));
              break;
            case 1:
              lE || (console.error(
                "Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."
              ), lE = !0);
          }
      } else
        Bn && za(e, t, a), ds(t), e === Xt && ((yt & Pl) === da && (Vf |= a), dl === Xf && ga(
          e,
          We,
          qn,
          !1
        )), Ea(e);
    }
    function fv(e, t, a) {
      if ((yt & (Pl | au)) !== da)
        throw Error("Should not already be working.");
      if (We !== 0 && Pe !== null) {
        var i = Pe, o = rl();
        switch (k1) {
          case s0:
          case Ps:
            var f = $p;
            Ft && ((i = i._debugTask) ? i.run(
              console.timeStamp.bind(
                console,
                "Suspended",
                f,
                o,
                Ku,
                void 0,
                "primary-light"
              )
            ) : console.timeStamp(
              "Suspended",
              f,
              o,
              Ku,
              void 0,
              "primary-light"
            ));
            break;
          case ed:
            f = $p, Ft && ((i = i._debugTask) ? i.run(
              console.timeStamp.bind(
                console,
                "Action",
                f,
                o,
                Ku,
                void 0,
                "primary-light"
              )
            ) : console.timeStamp(
              "Action",
              f,
              o,
              Ku,
              void 0,
              "primary-light"
            ));
            break;
          default:
            Ft && (i = o - $p, 3 > i || console.timeStamp(
              "Blocked",
              $p,
              o,
              Ku,
              void 0,
              5 > i ? "primary-light" : 10 > i ? "primary" : 100 > i ? "primary-dark" : "error"
            ));
        }
      }
      f = (a = !a && (t & 127) === 0 && (t & e.expiredLanes) === 0 || qi(e, t)) ? Sl(e, t) : yh(e, t, !0);
      var d = a;
      do {
        if (f === Co) {
          Am && !a && ga(e, t, 0, !1), t = Bt, $p = Hl(), k1 = t;
          break;
        } else {
          if (i = rl(), o = e.current.alternate, d && !os(o)) {
            Ia(t), o = ra, f = i, !Ft || f <= o || (bl ? bl.run(
              console.timeStamp.bind(
                console,
                "Teared Render",
                o,
                f,
                dt,
                rt,
                "error"
              )
            ) : console.timeStamp(
              "Teared Render",
              o,
              f,
              dt,
              rt,
              "error"
            )), $n(t, i), f = yh(e, t, !1), d = !1;
            continue;
          }
          if (f === Is) {
            if (d = t, e.errorRecoveryDisabledLanes & d)
              var h = 0;
            else
              h = e.pendingLanes & -536870913, h = h !== 0 ? h : h & 536870912 ? 536870912 : 0;
            if (h !== 0) {
              Ia(t), Km(
                ra,
                i,
                t,
                bl
              ), $n(t, i), t = h;
              e: {
                i = e, f = d, d = h0;
                var y = i.current.memoizedState.isDehydrated;
                if (y && (Sa(i, h).flags |= 256), h = yh(
                  i,
                  h,
                  !1
                ), h !== Is) {
                  if (kS && !y) {
                    i.errorRecoveryDisabledLanes |= f, Vf |= f, f = Xf;
                    break e;
                  }
                  i = pn, pn = d, i !== null && (pn === null ? pn = i : pn.push.apply(
                    pn,
                    i
                  ));
                }
                f = h;
              }
              if (d = !1, f !== Is) continue;
              i = rl();
            }
          }
          if (f === r0) {
            Ia(t), Km(
              ra,
              i,
              t,
              bl
            ), $n(t, i), Sa(e, 0), ga(e, t, 0, !0);
            break;
          }
          e: {
            switch (a = e, f) {
              case Co:
              case r0:
                throw Error("Root did not complete. This is a bug in React.");
              case Xf:
                if ((t & 4194048) !== t) break;
              case yg:
                Ia(t), L0(
                  ra,
                  i,
                  t,
                  bl
                ), $n(t, i), o = t, (o & 127) !== 0 ? eg = i : (o & 4194048) !== 0 && (tg = i), ga(
                  a,
                  t,
                  qn,
                  !Qf
                );
                break e;
              case Is:
                pn = null;
                break;
              case mg:
              case Lb:
                break;
              default:
                throw Error("Unknown root exit status.");
            }
            if (w.actQueue !== null)
              ia(
                a,
                o,
                t,
                pn,
                m0,
                gg,
                qn,
                Vf,
                td,
                f,
                null,
                null,
                ra,
                i
              );
            else {
              if ((t & 62914560) === t && (d = Sg + Jb - rl(), 10 < d)) {
                if (ga(
                  a,
                  t,
                  qn,
                  !Qf
                ), El(a, 0, !0) !== 0) break e;
                xi = t, a.timeoutHandle = sE(
                  Zy.bind(
                    null,
                    a,
                    o,
                    pn,
                    m0,
                    gg,
                    t,
                    qn,
                    Vf,
                    td,
                    Qf,
                    f,
                    "Throttled",
                    ra,
                    i
                  ),
                  d
                );
                break e;
              }
              Zy(
                a,
                o,
                pn,
                m0,
                gg,
                t,
                qn,
                Vf,
                td,
                Qf,
                f,
                null,
                ra,
                i
              );
            }
          }
        }
        break;
      } while (!0);
      Ea(e);
    }
    function Zy(e, t, a, i, o, f, d, h, y, p, _, R, b, Y) {
      e.timeoutHandle = id;
      var ne = t.subtreeFlags, oe = null;
      if ((ne & 8192 || (ne & 16785408) === 16785408) && (oe = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: wl
      }, Vy(t, f, oe), ne = (f & 62914560) === f ? Sg - rl() : (f & 4194048) === f ? Zb - rl() : 0, ne = yp(oe, ne), ne !== null)) {
        xi = f, e.cancelPendingCommit = ne(
          ia.bind(
            null,
            e,
            t,
            f,
            a,
            i,
            o,
            d,
            h,
            y,
            _,
            oe,
            oe.waitingForViewTransition ? "Waiting for the previous Animation" : 0 < oe.count ? 0 < oe.imgCount ? "Suspended on CSS and Images" : "Suspended on CSS" : oe.imgCount === 1 ? "Suspended on an Image" : 0 < oe.imgCount ? "Suspended on Images" : null,
            b,
            Y
          )
        ), ga(
          e,
          f,
          d,
          !p
        );
        return;
      }
      ia(
        e,
        t,
        f,
        a,
        i,
        o,
        d,
        h,
        y,
        _,
        oe,
        R,
        b,
        Y
      );
    }
    function os(e) {
      for (var t = e; ; ) {
        var a = t.tag;
        if ((a === 0 || a === 11 || a === 15) && t.flags & 16384 && (a = t.updateQueue, a !== null && (a = a.stores, a !== null)))
          for (var i = 0; i < a.length; i++) {
            var o = a[i], f = o.getSnapshot;
            o = o.value;
            try {
              if (!dn(f(), o)) return !1;
            } catch {
              return !1;
            }
          }
        if (a = t.child, t.subtreeFlags & 16384 && a !== null)
          a.return = t, t = a;
        else {
          if (t === e) break;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) return !0;
            t = t.return;
          }
          t.sibling.return = t.return, t = t.sibling;
        }
      }
      return !0;
    }
    function ga(e, t, a, i) {
      t &= ~WS, t &= ~Vf, e.suspendedLanes |= t, e.pingedLanes &= ~t, i && (e.warmLanes |= t), i = e.expirationTimes;
      for (var o = t; 0 < o; ) {
        var f = 31 - kl(o), d = 1 << f;
        i[f] = -1, o &= ~d;
      }
      a !== 0 && ar(e, a, t);
    }
    function ao() {
      return (yt & (Pl | au)) === da ? (mf(0), !1) : !0;
    }
    function dh() {
      if (Pe !== null) {
        if (Bt === Yn)
          var e = Pe.return;
        else
          e = Pe, $i(), ec(e), mm = null, a0 = 0, e = Pe;
        for (; e !== null; )
          av(e.alternate, e), e = e.return;
        Pe = null;
      }
    }
    function $n(e, t) {
      (e & 127) !== 0 && (Ls = t), (e & 4194048) !== 0 && (Oo = t), (e & 62914560) !== 0 && (K1 = t), (e & 2080374784) !== 0 && ($1 = t);
    }
    function Sa(e, t) {
      Ft && (console.timeStamp(
        "Blocking Track",
        3e-3,
        3e-3,
        "Blocking",
        rt,
        "primary-light"
      ), console.timeStamp(
        "Transition Track",
        3e-3,
        3e-3,
        "Transition",
        rt,
        "primary-light"
      ), console.timeStamp(
        "Suspense Track",
        3e-3,
        3e-3,
        "Suspense",
        rt,
        "primary-light"
      ), console.timeStamp(
        "Idle Track",
        3e-3,
        3e-3,
        "Idle",
        rt,
        "primary-light"
      ));
      var a = ra;
      if (ra = Hl(), We !== 0 && 0 < a) {
        if (Ia(We), dl === mg || dl === Xf)
          L0(
            a,
            ra,
            t,
            bl
          );
        else {
          var i = ra, o = bl;
          if (Ft && !(i <= a)) {
            var f = (t & 738197653) === t ? "tertiary-dark" : "primary-dark", d = (t & 536870912) === t ? "Prewarm" : (t & 201326741) === t ? "Interrupted Hydration" : "Interrupted Render";
            o ? o.run(
              console.timeStamp.bind(
                console,
                d,
                a,
                i,
                dt,
                rt,
                f
              )
            ) : console.timeStamp(
              d,
              a,
              i,
              dt,
              rt,
              f
            );
          }
        }
        $n(We, ra);
      }
      if (a = bl, bl = null, (t & 127) !== 0) {
        bl = Zp, o = 0 <= Sc && Sc < Ls ? Ls : Sc, i = 0 <= Vs && Vs < Ls ? Ls : Vs, f = 0 <= i ? i : 0 <= o ? o : ra, 0 <= eg ? (Ia(2), V0(
          eg,
          f,
          t,
          a
        )) : lg & 127, a = o;
        var h = i, y = Jp, p = 0 < sm, _ = Yf === Vp, R = Yf === Pv;
        if (o = ra, i = Zp, f = RS, d = MS, Ft) {
          if (dt = "Blocking", 0 < a ? a > o && (a = o) : a = o, 0 < h ? h > a && (h = a) : h = a, y !== null && a > h) {
            var b = p ? "secondary-light" : "warning";
            i ? i.run(
              console.timeStamp.bind(
                console,
                p ? "Consecutive" : "Event: " + y,
                h,
                a,
                dt,
                rt,
                b
              )
            ) : console.timeStamp(
              p ? "Consecutive" : "Event: " + y,
              h,
              a,
              dt,
              rt,
              b
            );
          }
          o > a && (h = _ ? "error" : (t & 738197653) === t ? "tertiary-light" : "primary-light", _ = R ? "Promise Resolved" : _ ? "Cascading Update" : 5 < o - a ? "Update Blocked" : "Update", R = [], d != null && R.push(["Component name", d]), f != null && R.push(["Method name", f]), a = {
            start: a,
            end: o,
            detail: {
              devtools: {
                properties: R,
                track: dt,
                trackGroup: rt,
                color: h
              }
            }
          }, i ? i.run(
            performance.measure.bind(
              performance,
              _,
              a
            )
          ) : performance.measure(_, a));
        }
        Sc = -1.1, Yf = 0, MS = RS = null, eg = -1.1, sm = Vs, Vs = -1.1, Ls = Hl();
      }
      if ((t & 4194048) !== 0 && (bl = Kp, o = 0 <= zo && zo < Oo ? Oo : zo, a = 0 <= Pu && Pu < Oo ? Oo : Pu, i = 0 <= qf && qf < Oo ? Oo : qf, f = 0 <= i ? i : 0 <= a ? a : ra, 0 <= tg ? (Ia(256), V0(
        tg,
        f,
        t,
        bl
      )) : lg & 4194048, R = i, h = Zs, y = 0 < Gf, p = CS === Pv, f = ra, i = Kp, d = Z1, _ = J1, Ft && (dt = "Transition", 0 < a ? a > f && (a = f) : a = f, 0 < o ? o > a && (o = a) : o = a, 0 < R ? R > o && (R = o) : R = o, o > R && h !== null && (b = y ? "secondary-light" : "warning", i ? i.run(
        console.timeStamp.bind(
          console,
          y ? "Consecutive" : "Event: " + h,
          R,
          o,
          dt,
          rt,
          b
        )
      ) : console.timeStamp(
        y ? "Consecutive" : "Event: " + h,
        R,
        o,
        dt,
        rt,
        b
      )), a > o && (i ? i.run(
        console.timeStamp.bind(
          console,
          "Action",
          o,
          a,
          dt,
          rt,
          "primary-dark"
        )
      ) : console.timeStamp(
        "Action",
        o,
        a,
        dt,
        rt,
        "primary-dark"
      )), f > a && (o = p ? "Promise Resolved" : 5 < f - a ? "Update Blocked" : "Update", R = [], _ != null && R.push(["Component name", _]), d != null && R.push(["Method name", d]), a = {
        start: a,
        end: f,
        detail: {
          devtools: {
            properties: R,
            track: dt,
            trackGroup: rt,
            color: "primary-light"
          }
        }
      }, i ? i.run(
        performance.measure.bind(
          performance,
          o,
          a
        )
      ) : performance.measure(o, a))), Pu = zo = -1.1, CS = 0, tg = -1.1, Gf = qf, qf = -1.1, Oo = Hl()), (t & 62914560) !== 0 && (lg & 62914560) !== 0 && (Ia(4194304), $m(K1, ra)), (t & 2080374784) !== 0 && (lg & 2080374784) !== 0 && (Ia(268435456), $m($1, ra)), a = e.timeoutHandle, a !== id && (e.timeoutHandle = id, fA(a)), a = e.cancelPendingCommit, a !== null && (e.cancelPendingCommit = null, a()), xi = 0, dh(), Xt = e, Pe = a = mu(
        e.current,
        null
      ), We = t, Bt = Yn, nu = null, Qf = !1, Am = qi(e, t), kS = !1, dl = Co, td = qn = WS = Vf = Lf = 0, pn = h0 = null, gg = !1, (t & 8) !== 0 && (t |= t & 32), i = e.entangledLanes, i !== 0)
        for (e = e.entanglements, i &= t; 0 < i; )
          o = 31 - kl(i), f = 1 << o, t |= e[o], i &= ~f;
      return Ec = t, Vo(), e = G1(), 1e3 < e - q1 && (w.recentlyCreatedOwnerStacks = 0, q1 = e), Hi.discardPendingWarnings(), a;
    }
    function Jy(e, t) {
      Be = null, w.H = c0, w.getCurrentStack = null, Nn = !1, fn = null, t === hm || t === ig ? (t = Rr(), Bt = s0) : t === BS ? (t = Rr(), Bt = Vb) : Bt = t === VS ? $S : t !== null && typeof t == "object" && typeof t.then == "function" ? d0 : pg, nu = t;
      var a = Pe;
      a === null ? (dl = r0, $r(
        e,
        ha(t, e.current)
      )) : a.mode & $e && Jo(a);
    }
    function hh() {
      var e = tu.current;
      return e === null ? !0 : (We & 4194048) === We ? ei === null : (We & 62914560) === We || (We & 536870912) !== 0 ? e === ei : !1;
    }
    function Ky() {
      var e = w.H;
      return w.H = c0, e === null ? c0 : e;
    }
    function mh() {
      var e = w.A;
      return w.A = kT, e;
    }
    function hf(e) {
      bl === null && (bl = e._debugTask == null ? null : e._debugTask);
    }
    function no() {
      dl = Xf, Qf || (We & 4194048) !== We && tu.current !== null || (Am = !0), (Lf & 134217727) === 0 && (Vf & 134217727) === 0 || Xt === null || ga(
        Xt,
        We,
        qn,
        !1
      );
    }
    function yh(e, t, a) {
      var i = yt;
      yt |= Pl;
      var o = Ky(), f = mh();
      if (Xt !== e || We !== t) {
        if (Bn) {
          var d = e.memoizedUpdaters;
          0 < d.size && (Gu(e, We), d.clear()), Rl(e, t);
        }
        m0 = null, Sa(e, t);
      }
      t = !1, d = dl;
      e: do
        try {
          if (Bt !== Yn && Pe !== null) {
            var h = Pe, y = nu;
            switch (Bt) {
              case $S:
                dh(), d = yg;
                break e;
              case s0:
              case Ps:
              case ed:
              case d0:
                tu.current === null && (t = !0);
                var p = Bt;
                if (Bt = Yn, nu = null, uo(e, h, y, p), a && Am) {
                  d = Co;
                  break e;
                }
                break;
              default:
                p = Bt, Bt = Yn, nu = null, uo(e, h, y, p);
            }
          }
          ju(), d = dl;
          break;
        } catch (_) {
          Jy(e, _);
        }
      while (!0);
      return t && e.shellSuspendCounter++, $i(), yt = i, w.H = o, w.A = f, Pe === null && (Xt = null, We = 0, Vo()), d;
    }
    function ju() {
      for (; Pe !== null; ) ky(Pe);
    }
    function Sl(e, t) {
      var a = yt;
      yt |= Pl;
      var i = Ky(), o = mh();
      if (Xt !== e || We !== t) {
        if (Bn) {
          var f = e.memoizedUpdaters;
          0 < f.size && (Gu(e, We), f.clear()), Rl(e, t);
        }
        m0 = null, bg = rl() + Kb, Sa(e, t);
      } else
        Am = qi(
          e,
          t
        );
      e: do
        try {
          if (Bt !== Yn && Pe !== null)
            t: switch (t = Pe, f = nu, Bt) {
              case pg:
                Bt = Yn, nu = null, uo(
                  e,
                  t,
                  f,
                  pg
                );
                break;
              case Ps:
              case ed:
                if (an(f)) {
                  Bt = Yn, nu = null, Al(t);
                  break;
                }
                t = function() {
                  Bt !== Ps && Bt !== ed || Xt !== e || (Bt = vg), Ea(e);
                }, f.then(t, t);
                break e;
              case s0:
                Bt = vg;
                break e;
              case Vb:
                Bt = KS;
                break e;
              case vg:
                an(f) ? (Bt = Yn, nu = null, Al(t)) : (Bt = Yn, nu = null, uo(
                  e,
                  t,
                  f,
                  vg
                ));
                break;
              case KS:
                var d = null;
                switch (Pe.tag) {
                  case 26:
                    d = Pe.memoizedState;
                  case 5:
                  case 27:
                    var h = Pe;
                    if (d ? Mh(d) : h.stateNode.complete) {
                      Bt = Yn, nu = null;
                      var y = h.sibling;
                      if (y !== null) Pe = y;
                      else {
                        var p = h.return;
                        p !== null ? (Pe = p, fs(p)) : Pe = null;
                      }
                      break t;
                    }
                    break;
                  default:
                    console.error(
                      "Unexpected type of fiber triggered a suspensey commit. This is a bug in React."
                    );
                }
                Bt = Yn, nu = null, uo(
                  e,
                  t,
                  f,
                  KS
                );
                break;
              case d0:
                Bt = Yn, nu = null, uo(
                  e,
                  t,
                  f,
                  d0
                );
                break;
              case $S:
                dh(), dl = yg;
                break e;
              default:
                throw Error(
                  "Unexpected SuspendedReason. This is a bug in React."
                );
            }
          w.actQueue !== null ? ju() : $y();
          break;
        } catch (_) {
          Jy(e, _);
        }
      while (!0);
      return $i(), w.H = i, w.A = o, yt = a, Pe !== null ? Co : (Xt = null, We = 0, Vo(), dl);
    }
    function $y() {
      for (; Pe !== null && !Zh(); )
        ky(Pe);
    }
    function ky(e) {
      var t = e.alternate;
      (e.mode & $e) !== Ce ? (Md(e), t = fe(
        e,
        nh,
        t,
        e,
        Ec
      ), Jo(e)) : t = fe(
        e,
        nh,
        t,
        e,
        Ec
      ), e.memoizedProps = e.pendingProps, t === null ? fs(e) : Pe = t;
    }
    function Al(e) {
      var t = fe(e, Pg, e);
      e.memoizedProps = e.pendingProps, t === null ? fs(e) : Pe = t;
    }
    function Pg(e) {
      var t = e.alternate, a = (e.mode & $e) !== Ce;
      switch (a && Md(e), e.tag) {
        case 15:
        case 0:
          t = Fc(
            t,
            e,
            e.pendingProps,
            e.type,
            void 0,
            We
          );
          break;
        case 11:
          t = Fc(
            t,
            e,
            e.pendingProps,
            e.type.render,
            e.ref,
            We
          );
          break;
        case 5:
          ec(e);
        default:
          av(t, e), e = Pe = Zo(e, Ec), t = nh(t, e, Ec);
      }
      return a && Jo(e), t;
    }
    function uo(e, t, a, i) {
      $i(), ec(t), mm = null, a0 = 0;
      var o = t.return;
      try {
        if (I0(
          e,
          o,
          t,
          a,
          We
        )) {
          dl = r0, $r(
            e,
            ha(a, e.current)
          ), Pe = null;
          return;
        }
      } catch (f) {
        if (o !== null) throw Pe = o, f;
        dl = r0, $r(
          e,
          ha(a, e.current)
        ), Pe = null;
        return;
      }
      t.flags & 32768 ? (ct || i === pg ? e = !0 : Am || (We & 536870912) !== 0 ? e = !1 : (Qf = e = !0, (i === Ps || i === ed || i === s0 || i === d0) && (i = tu.current, i !== null && i.tag === 13 && (i.flags |= 16384))), Jt(t, e)) : fs(t);
    }
    function fs(e) {
      var t = e;
      do {
        if ((t.flags & 32768) !== 0) {
          Jt(
            t,
            Qf
          );
          return;
        }
        var a = t.alternate;
        if (e = t.return, Md(t), a = fe(
          t,
          tv,
          a,
          t,
          Ec
        ), (t.mode & $e) !== Ce && wc(t), a !== null) {
          Pe = a;
          return;
        }
        if (t = t.sibling, t !== null) {
          Pe = t;
          return;
        }
        Pe = t = e;
      } while (t !== null);
      dl === Co && (dl = Lb);
    }
    function Jt(e, t) {
      do {
        var a = lv(e.alternate, e);
        if (a !== null) {
          a.flags &= 32767, Pe = a;
          return;
        }
        if ((e.mode & $e) !== Ce) {
          wc(e), a = e.actualDuration;
          for (var i = e.child; i !== null; )
            a += i.actualDuration, i = i.sibling;
          e.actualDuration = a;
        }
        if (a = e.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !t && (e = e.sibling, e !== null)) {
          Pe = e;
          return;
        }
        Pe = e = a;
      } while (e !== null);
      dl = yg, Pe = null;
    }
    function ia(e, t, a, i, o, f, d, h, y, p, _, R, b, Y) {
      e.cancelPendingCommit = null;
      do
        fc();
      while (Yl !== Jf);
      if (Hi.flushLegacyContextWarning(), Hi.flushPendingUnsafeLifecycleWarnings(), (yt & (Pl | au)) !== da)
        throw Error("Should not already be working.");
      if (Ia(a), p === Is ? Km(
        b,
        Y,
        a,
        bl
      ) : i !== null ? kg(
        b,
        Y,
        a,
        i,
        t !== null && t.alternate !== null && t.alternate.memoizedState.isDehydrated && (t.flags & 256) !== 0,
        bl
      ) : $g(
        b,
        Y,
        a,
        bl
      ), t !== null) {
        if (a === 0 && console.error(
          "finishedLanes should not be empty during a commit. This is a bug in React."
        ), t === e.current)
          throw Error(
            "Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue."
          );
        if (f = t.lanes | t.childLanes, f |= AS, lr(
          e,
          a,
          f,
          d,
          h,
          y
        ), e === Xt && (Pe = Xt = null, We = 0), Om = t, Kf = e, xi = a, PS = f, t1 = o, Pb = i, e1 = Y, eE = R, ji = Eg, tE = null, t.actualDuration !== 0 || (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, ss(vo, function() {
          return b0 = window.event, ji === Eg && (ji = IS), ba(), null;
        })) : (e.callbackNode = null, e.callbackPriority = 0), Ao = null, jf = Hl(), R !== null && Wg(
          Y,
          jf,
          R,
          bl
        ), i = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || i) {
          i = w.T, w.T = null, o = Ot.p, Ot.p = zl, d = yt, yt |= au;
          try {
            Yy(e, t, a);
          } finally {
            yt = d, Ot.p = o, w.T = i;
          }
        }
        Yl = kb, Yu(), Wy(), Fy();
      }
    }
    function Yu() {
      if (Yl === kb) {
        Yl = Jf;
        var e = Kf, t = Om, a = xi, i = (t.flags & 13878) !== 0;
        if ((t.subtreeFlags & 13878) !== 0 || i) {
          i = w.T, w.T = null;
          var o = Ot.p;
          Ot.p = zl;
          var f = yt;
          yt |= au;
          try {
            Em = a, Tm = e, ma(), Xy(t, e), Tm = Em = null, a = d1;
            var d = w0(e.containerInfo), h = a.focusedElem, y = a.selectionRange;
            if (d !== h && h && h.ownerDocument && bd(
              h.ownerDocument.documentElement,
              h
            )) {
              if (y !== null && Zm(h)) {
                var p = y.start, _ = y.end;
                if (_ === void 0 && (_ = p), "selectionStart" in h)
                  h.selectionStart = p, h.selectionEnd = Math.min(
                    _,
                    h.value.length
                  );
                else {
                  var R = h.ownerDocument || document, b = R && R.defaultView || window;
                  if (b.getSelection) {
                    var Y = b.getSelection(), ne = h.textContent.length, oe = Math.min(
                      y.start,
                      ne
                    ), Kt = y.end === void 0 ? oe : Math.min(y.end, ne);
                    !Y.extend && oe > Kt && (d = Kt, Kt = oe, oe = d);
                    var st = G0(
                      h,
                      oe
                    ), S = G0(
                      h,
                      Kt
                    );
                    if (st && S && (Y.rangeCount !== 1 || Y.anchorNode !== st.node || Y.anchorOffset !== st.offset || Y.focusNode !== S.node || Y.focusOffset !== S.offset)) {
                      var E = R.createRange();
                      E.setStart(st.node, st.offset), Y.removeAllRanges(), oe > Kt ? (Y.addRange(E), Y.extend(S.node, S.offset)) : (E.setEnd(S.node, S.offset), Y.addRange(E));
                    }
                  }
                }
              }
              for (R = [], Y = h; Y = Y.parentNode; )
                Y.nodeType === 1 && R.push({
                  element: Y,
                  left: Y.scrollLeft,
                  top: Y.scrollTop
                });
              for (typeof h.focus == "function" && h.focus(), h = 0; h < R.length; h++) {
                var z = R[h];
                z.element.scrollLeft = z.left, z.element.scrollTop = z.top;
              }
            }
            Yg = !!s1, d1 = s1 = null;
          } finally {
            yt = f, Ot.p = o, w.T = i;
          }
        }
        e.current = t, Yl = Wb;
      }
    }
    function Wy() {
      if (Yl === Wb) {
        Yl = Jf;
        var e = tE;
        if (e !== null) {
          jf = Hl();
          var t = To, a = jf;
          !Ft || a <= t || console.timeStamp(
            e,
            t,
            a,
            dt,
            rt,
            "secondary-light"
          );
        }
        e = Kf, t = Om, a = xi;
        var i = (t.flags & 8772) !== 0;
        if ((t.subtreeFlags & 8772) !== 0 || i) {
          i = w.T, w.T = null;
          var o = Ot.p;
          Ot.p = zl;
          var f = yt;
          yt |= au;
          try {
            Em = a, Tm = e, ma(), hl(
              e,
              t.alternate,
              t
            ), Tm = Em = null;
          } finally {
            yt = f, Ot.p = o, w.T = i;
          }
        }
        e = e1, t = eE, To = Hl(), e = t === null ? e : jf, t = To, a = ji === FS, i = bl, Ao !== null ? Z0(
          e,
          t,
          Ao,
          !1,
          i
        ) : !Ft || t <= e || (i ? i.run(
          console.timeStamp.bind(
            console,
            a ? "Commit Interrupted View Transition" : "Commit",
            e,
            t,
            dt,
            rt,
            a ? "error" : "secondary-dark"
          )
        ) : console.timeStamp(
          a ? "Commit Interrupted View Transition" : "Commit",
          e,
          t,
          dt,
          rt,
          a ? "error" : "secondary-dark"
        )), Yl = Fb;
      }
    }
    function Fy() {
      if (Yl === Ib || Yl === Fb) {
        if (Yl === Ib) {
          var e = To;
          To = Hl();
          var t = To, a = ji === FS;
          !Ft || t <= e || console.timeStamp(
            a ? "Interrupted View Transition" : "Starting Animation",
            e,
            t,
            dt,
            rt,
            a ? " error" : "secondary-light"
          ), ji !== FS && (ji = $b);
        }
        Yl = Jf, iS(), e = Kf;
        var i = Om;
        t = xi, a = Pb;
        var o = i.actualDuration !== 0 || (i.subtreeFlags & 10256) !== 0 || (i.flags & 10256) !== 0;
        o ? Yl = Tg : (Yl = Jf, Om = Kf = null, sv(
          e,
          e.pendingLanes
        ), ld = 0, p0 = null);
        var f = e.pendingLanes;
        if (f === 0 && (Zf = null), o || Rn(e), f = jo(t), i = i.stateNode, oa && typeof oa.onCommitFiberRoot == "function")
          try {
            var d = (i.current.flags & 128) === 128;
            switch (f) {
              case zl:
                var h = Jh;
                break;
              case Wl:
                h = Kh;
                break;
              case rn:
                h = vo;
                break;
              case yc:
                h = Bs;
                break;
              default:
                h = vo;
            }
            oa.onCommitFiberRoot(
              Ci,
              i,
              h,
              d
            );
          } catch (R) {
            Zu || (Zu = !0, console.error(
              "React instrumentation encountered an error: %o",
              R
            ));
          }
        if (Bn && e.memoizedUpdaters.clear(), ov(), a !== null) {
          d = w.T, h = Ot.p, Ot.p = zl, w.T = null;
          try {
            var y = e.onRecoverableError;
            for (i = 0; i < a.length; i++) {
              var p = a[i], _ = rv(p.stack);
              fe(
                p.source,
                y,
                p.value,
                _
              );
            }
          } finally {
            w.T = d, Ot.p = h;
          }
        }
        (xi & 3) !== 0 && fc(), Ea(e), f = e.pendingLanes, (t & 261930) !== 0 && (f & 42) !== 0 ? (ng = !0, e === l1 ? y0++ : (y0 = 0, l1 = e)) : y0 = 0, o || $n(t, To), mf(0);
      }
    }
    function rv(e) {
      return e = { componentStack: e }, Object.defineProperty(e, "digest", {
        get: function() {
          console.error(
            'You are accessing "digest" from the errorInfo object passed to onRecoverableError. This property is no longer provided as part of errorInfo but can be accessed as a property of the Error instance itself.'
          );
        }
      }), e;
    }
    function sv(e, t) {
      (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, Or(t)));
    }
    function fc() {
      return Yu(), Wy(), Fy(), ba();
    }
    function ba() {
      if (Yl !== Tg) return !1;
      var e = Kf, t = PS;
      PS = 0;
      var a = jo(xi), i = rn > a ? rn : a;
      a = w.T;
      var o = Ot.p;
      try {
        Ot.p = i, w.T = null;
        var f = t1;
        t1 = null, i = Kf;
        var d = xi;
        if (Yl = Jf, Om = Kf = null, xi = 0, (yt & (Pl | au)) !== da)
          throw Error("Cannot flush passive effects while already rendering.");
        Ia(d), a1 = !0, Ag = !1;
        var h = 0;
        if (Ao = null, h = rl(), ji === $b)
          $m(
            To,
            h,
            QT
          );
        else {
          var y = To, p = h, _ = ji === IS;
          !Ft || p <= y || (bl ? bl.run(
            console.timeStamp.bind(
              console,
              _ ? "Waiting for Paint" : "Waiting",
              y,
              p,
              dt,
              rt,
              "secondary-light"
            )
          ) : console.timeStamp(
            _ ? "Waiting for Paint" : "Waiting",
            y,
            p,
            dt,
            rt,
            "secondary-light"
          ));
        }
        y = yt, yt |= au;
        var R = i.current;
        ma(), cv(R);
        var b = i.current;
        R = e1, ma(), fh(
          i,
          b,
          d,
          f,
          R
        ), Rn(i), yt = y;
        var Y = rl();
        if (b = h, R = bl, Ao !== null ? Z0(
          b,
          Y,
          Ao,
          !0,
          R
        ) : !Ft || Y <= b || (R ? R.run(
          console.timeStamp.bind(
            console,
            "Remaining Effects",
            b,
            Y,
            dt,
            rt,
            "secondary-dark"
          )
        ) : console.timeStamp(
          "Remaining Effects",
          b,
          Y,
          dt,
          rt,
          "secondary-dark"
        )), $n(d, Y), mf(0, !1), Ag ? i === p0 ? ld++ : (ld = 0, p0 = i) : ld = 0, Ag = a1 = !1, oa && typeof oa.onPostCommitFiberRoot == "function")
          try {
            oa.onPostCommitFiberRoot(Ci, i);
          } catch (oe) {
            Zu || (Zu = !0, console.error(
              "React instrumentation encountered an error: %o",
              oe
            ));
          }
        var ne = i.current.stateNode;
        return ne.effectDuration = 0, ne.passiveEffectDuration = 0, !0;
      } finally {
        Ot.p = o, w.T = a, sv(e, t);
      }
    }
    function Dn(e, t, a) {
      t = ha(a, t), Ha(t), t = Kd(e.stateNode, t, 2), e = pa(e, t, 2), e !== null && (wi(e, 2), Ea(e));
    }
    function pt(e, t, a) {
      if (zm = !1, e.tag === 3)
        Dn(e, e, a);
      else {
        for (; t !== null; ) {
          if (t.tag === 3) {
            Dn(
              t,
              e,
              a
            );
            return;
          }
          if (t.tag === 1) {
            var i = t.stateNode;
            if (typeof t.type.getDerivedStateFromError == "function" || typeof i.componentDidCatch == "function" && (Zf === null || !Zf.has(i))) {
              e = ha(a, e), Ha(e), a = $d(2), i = pa(t, a, 2), i !== null && (kr(
                a,
                i,
                t,
                e
              ), wi(i, 2), Ea(i));
              return;
            }
          }
          t = t.return;
        }
        console.error(
          `Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Potential causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`,
          a
        );
      }
    }
    function ca(e, t, a) {
      var i = e.pingCache;
      if (i === null) {
        i = e.pingCache = new FT();
        var o = /* @__PURE__ */ new Set();
        i.set(t, o);
      } else
        o = i.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), i.set(t, o));
      o.has(a) || (kS = !0, o.add(a), i = dv.bind(null, e, t, a), Bn && Gu(e, a), t.then(i, i));
    }
    function dv(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t), e.pingedLanes |= e.suspendedLanes & a, e.warmLanes &= ~a, (a & 127) !== 0 ? 0 > Sc && (Ls = Sc = Hl(), Zp = Iv("Promise Resolved"), Yf = Pv) : (a & 4194048) !== 0 && 0 > Pu && (Oo = Pu = Hl(), Kp = Iv("Promise Resolved"), CS = Pv), cs() && w.actQueue === null && console.error(
        `A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`
      ), Xt === e && (We & a) === a && (dl === Xf || dl === mg && (We & 62914560) === We && rl() - Sg < Jb ? (yt & Pl) === da && Sa(e, 0) : WS |= a, td === We && (td = 0)), Ea(e);
    }
    function qu(e, t) {
      t === 0 && (t = xo()), e = Xl(e, t), e !== null && (wi(e, t), Ea(e));
    }
    function io(e) {
      var t = e.memoizedState, a = 0;
      t !== null && (a = t.retryLane), qu(e, a);
    }
    function Ai(e, t) {
      var a = 0;
      switch (e.tag) {
        case 31:
        case 13:
          var i = e.stateNode, o = e.memoizedState;
          o !== null && (a = o.retryLane);
          break;
        case 19:
          i = e.stateNode;
          break;
        case 22:
          i = e.stateNode._retryCache;
          break;
        default:
          throw Error(
            "Pinged unknown suspense boundary type. This is probably a bug in React."
          );
      }
      i !== null && i.delete(t), qu(e, a);
    }
    function rs(e, t, a) {
      if ((t.subtreeFlags & 67117056) !== 0)
        for (t = t.child; t !== null; ) {
          var i = e, o = t, f = o.type === _f;
          f = a || f, o.tag !== 22 ? o.flags & 67108864 ? f && fe(
            o,
            ph,
            i,
            o
          ) : rs(
            i,
            o,
            f
          ) : o.memoizedState === null && (f && o.flags & 8192 ? fe(
            o,
            ph,
            i,
            o
          ) : o.subtreeFlags & 67108864 && fe(
            o,
            rs,
            i,
            o,
            f
          )), t = t.sibling;
        }
    }
    function ph(e, t) {
      me(!0);
      try {
        Qy(t), xu(t), Ly(e, t.alternate, t, !1), rh(e, t, 0, null, !1, 0);
      } finally {
        me(!1);
      }
    }
    function Rn(e) {
      var t = !0;
      e.current.mode & (Ja | Ui) || (t = !1), rs(
        e,
        e.current,
        t
      );
    }
    function Iy(e) {
      if ((yt & Pl) === da) {
        var t = e.tag;
        if (t === 3 || t === 1 || t === 0 || t === 11 || t === 14 || t === 15) {
          if (t = re(e) || "ReactComponent", Og !== null) {
            if (Og.has(t)) return;
            Og.add(t);
          } else Og = /* @__PURE__ */ new Set([t]);
          fe(e, function() {
            console.error(
              "Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously tries to update the component. Move this work to useEffect instead."
            );
          });
        }
      }
    }
    function Gu(e, t) {
      Bn && e.memoizedUpdaters.forEach(function(a) {
        za(e, a, t);
      });
    }
    function ss(e, t) {
      var a = w.actQueue;
      return a !== null ? (a.push(t), eA) : Rf(e, t);
    }
    function ds(e) {
      cs() && w.actQueue === null && fe(e, function() {
        console.error(
          `An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`,
          re(e)
        );
      });
    }
    function Ea(e) {
      e !== _m && e.next === null && (_m === null ? zg = _m = e : _m = _m.next = e), _g = !0, w.actQueue !== null ? u1 || (u1 = !0, mv()) : n1 || (n1 = !0, mv());
    }
    function mf(e, t) {
      if (!i1 && _g) {
        i1 = !0;
        do
          for (var a = !1, i = zg; i !== null; ) {
            if (e !== 0) {
              var o = i.pendingLanes;
              if (o === 0) var f = 0;
              else {
                var d = i.suspendedLanes, h = i.pingedLanes;
                f = (1 << 31 - kl(42 | e) + 1) - 1, f &= o & ~(d & ~h), f = f & 201326741 ? f & 201326741 | 1 : f ? f | 2 : 0;
              }
              f !== 0 && (a = !0, ep(i, f));
            } else
              f = We, f = El(
                i,
                i === Xt ? f : 0,
                i.cancelPendingCommit !== null || i.timeoutHandle !== id
              ), (f & 3) === 0 || qi(i, f) || (a = !0, ep(i, f));
            i = i.next;
          }
        while (a);
        i1 = !1;
      }
    }
    function hv() {
      b0 = window.event, co();
    }
    function co() {
      _g = u1 = n1 = !1;
      var e = 0;
      $f !== 0 && yf() && (e = $f);
      for (var t = rl(), a = null, i = zg; i !== null; ) {
        var o = i.next, f = Py(i, t);
        f === 0 ? (i.next = null, a === null ? zg = o : a.next = o, o === null && (_m = a)) : (a = i, (e !== 0 || (f & 3) !== 0) && (_g = !0)), i = o;
      }
      Yl !== Jf && Yl !== Tg || mf(e), $f !== 0 && ($f = 0);
    }
    function Py(e, t) {
      for (var a = e.suspendedLanes, i = e.pingedLanes, o = e.expirationTimes, f = e.pendingLanes & -62914561; 0 < f; ) {
        var d = 31 - kl(f), h = 1 << d, y = o[d];
        y === -1 ? ((h & a) === 0 || (h & i) !== 0) && (o[d] = tr(h, t)) : y <= t && (e.expiredLanes |= h), f &= ~h;
      }
      if (t = Xt, a = We, a = El(
        e,
        e === t ? a : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== id
      ), i = e.callbackNode, a === 0 || e === t && (Bt === Ps || Bt === ed) || e.cancelPendingCommit !== null)
        return i !== null && tp(i), e.callbackNode = null, e.callbackPriority = 0;
      if ((a & 3) === 0 || qi(e, a)) {
        if (t = a & -a, t !== e.callbackPriority || w.actQueue !== null && i !== c1)
          tp(i);
        else return t;
        switch (jo(a)) {
          case zl:
          case Wl:
            a = Kh;
            break;
          case rn:
            a = vo;
            break;
          case yc:
            a = Bs;
            break;
          default:
            a = vo;
        }
        return i = hs.bind(null, e), w.actQueue !== null ? (w.actQueue.push(i), a = c1) : a = Rf(a, i), e.callbackPriority = t, e.callbackNode = a, t;
      }
      return i !== null && tp(i), e.callbackPriority = 2, e.callbackNode = null, 2;
    }
    function hs(e, t) {
      if (ng = ag = !1, b0 = window.event, Yl !== Jf && Yl !== Tg)
        return e.callbackNode = null, e.callbackPriority = 0, null;
      var a = e.callbackNode;
      if (ji === Eg && (ji = IS), fc() && e.callbackNode !== a)
        return null;
      var i = We;
      return i = El(
        e,
        e === Xt ? i : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== id
      ), i === 0 ? null : (fv(
        e,
        i,
        t
      ), Py(e, rl()), e.callbackNode != null && e.callbackNode === a ? hs.bind(null, e) : null);
    }
    function ep(e, t) {
      if (fc()) return null;
      ag = ng, ng = !1, fv(e, t, !0);
    }
    function tp(e) {
      e !== c1 && e !== null && Vh(e);
    }
    function mv() {
      w.actQueue !== null && w.actQueue.push(function() {
        return co(), null;
      }), rA(function() {
        (yt & (Pl | au)) !== da ? Rf(
          Jh,
          hv
        ) : co();
      });
    }
    function ht() {
      if ($f === 0) {
        var e = Js;
        e === 0 && (e = xs, xs <<= 1, (xs & 261888) === 0 && (xs = 256)), $f = e;
      }
      return $f;
    }
    function Ht(e) {
      return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : (zt(e, "action"), Li("" + e));
    }
    function et(e, t) {
      var a = t.ownerDocument.createElement("input");
      return a.name = t.name, a.value = t.value, e.id && a.setAttribute("form", e.id), t.parentNode.insertBefore(a, t), e = new FormData(e), a.parentNode.removeChild(a), e;
    }
    function it(e, t, a, i, o) {
      if (t === "submit" && a && a.stateNode === o) {
        var f = Ht(
          (o[fa] || null).action
        ), d = i.submitter;
        d && (t = (t = d[fa] || null) ? Ht(t.formAction) : d.getAttribute("formAction"), t !== null && (f = t, d = null));
        var h = new Zv(
          "action",
          "action",
          null,
          i,
          o
        );
        e.push({
          event: h,
          listeners: [
            {
              instance: null,
              listener: function() {
                if (i.defaultPrevented) {
                  if ($f !== 0) {
                    var y = d ? et(
                      o,
                      d
                    ) : new FormData(o), p = {
                      pending: !0,
                      data: y,
                      method: o.method,
                      action: f
                    };
                    Object.freeze(p), tf(
                      a,
                      p,
                      null,
                      y
                    );
                  }
                } else
                  typeof f == "function" && (h.preventDefault(), y = d ? et(
                    o,
                    d
                  ) : new FormData(o), p = {
                    pending: !0,
                    data: y,
                    method: o.method,
                    action: f
                  }, Object.freeze(p), tf(
                    a,
                    p,
                    f,
                    y
                  ));
              },
              currentTarget: o
            }
          ]
        });
      }
    }
    function vt(e, t, a) {
      e.currentTarget = a;
      try {
        t(e);
      } catch (i) {
        SS(i);
      }
      e.currentTarget = null;
    }
    function wa(e, t) {
      t = (t & 4) !== 0;
      for (var a = 0; a < e.length; a++) {
        var i = e[a];
        e: {
          var o = void 0, f = i.event;
          if (i = i.listeners, t)
            for (var d = i.length - 1; 0 <= d; d--) {
              var h = i[d], y = h.instance, p = h.currentTarget;
              if (h = h.listener, y !== o && f.isPropagationStopped())
                break e;
              y !== null ? fe(
                y,
                vt,
                f,
                h,
                p
              ) : vt(f, h, p), o = y;
            }
          else
            for (d = 0; d < i.length; d++) {
              if (h = i[d], y = h.instance, p = h.currentTarget, h = h.listener, y !== o && f.isPropagationStopped())
                break e;
              y !== null ? fe(
                y,
                vt,
                f,
                h,
                p
              ) : vt(f, h, p), o = y;
            }
        }
      }
    }
    function Ge(e, t) {
      o1.has(e) || console.error(
        'Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.',
        e
      );
      var a = t[Hp];
      a === void 0 && (a = t[Hp] = /* @__PURE__ */ new Set());
      var i = e + "__bubble";
      a.has(i) || (wu(t, e, 2, !1), a.add(i));
    }
    function rc(e, t, a) {
      o1.has(e) && !t && console.error(
        'Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.',
        e
      );
      var i = 0;
      t && (i |= 4), wu(
        a,
        e,
        i,
        t
      );
    }
    function ms(e) {
      if (!e[Dg]) {
        e[Dg] = !0, Ys.forEach(function(a) {
          a !== "selectionchange" && (o1.has(a) || rc(a, !1, e), rc(a, !0, e));
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Dg] || (t[Dg] = !0, rc("selectionchange", !1, t));
      }
    }
    function wu(e, t, a, i) {
      switch (Bh(t)) {
        case zl:
          var o = Kl;
          break;
        case Wl:
          o = lS;
          break;
        default:
          o = Nh;
      }
      a = o.bind(
        null,
        t,
        a,
        e
      ), o = void 0, !fS || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), i ? o !== void 0 ? e.addEventListener(t, a, {
        capture: !0,
        passive: o
      }) : e.addEventListener(t, a, !0) : o !== void 0 ? e.addEventListener(t, a, {
        passive: o
      }) : e.addEventListener(
        t,
        a,
        !1
      );
    }
    function Wt(e, t, a, i, o) {
      var f = i;
      if ((t & 1) === 0 && (t & 2) === 0 && i !== null)
        e: for (; ; ) {
          if (i === null) return;
          var d = i.tag;
          if (d === 3 || d === 4) {
            var h = i.stateNode.containerInfo;
            if (h === o) break;
            if (d === 4)
              for (d = i.return; d !== null; ) {
                var y = d.tag;
                if ((y === 3 || y === 4) && d.stateNode.containerInfo === o)
                  return;
                d = d.return;
              }
            for (; h !== null; ) {
              if (d = I(h), d === null) return;
              if (y = d.tag, y === 5 || y === 6 || y === 26 || y === 27) {
                i = f = d;
                continue e;
              }
              h = h.parentNode;
            }
          }
          i = i.return;
        }
      Uc(function() {
        var p = f, _ = hr(a), R = [];
        e: {
          var b = Y1.get(e);
          if (b !== void 0) {
            var Y = Zv, ne = e;
            switch (e) {
              case "keypress":
                if (Xo(a) === 0) break e;
              case "keydown":
              case "keyup":
                Y = yT;
                break;
              case "focusin":
                ne = "focus", Y = hS;
                break;
              case "focusout":
                ne = "blur", Y = hS;
                break;
              case "beforeblur":
              case "afterblur":
                Y = hS;
                break;
              case "click":
                if (a.button === 2) break e;
              case "auxclick":
              case "dblclick":
              case "mousedown":
              case "mousemove":
              case "mouseup":
              case "mouseout":
              case "mouseover":
              case "contextmenu":
                Y = A1;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                Y = aT;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                Y = gT;
                break;
              case N1:
              case B1:
              case x1:
                Y = iT;
                break;
              case j1:
                Y = bT;
                break;
              case "scroll":
              case "scrollend":
                Y = tT;
                break;
              case "wheel":
                Y = TT;
                break;
              case "copy":
              case "cut":
              case "paste":
                Y = oT;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                Y = z1;
                break;
              case "toggle":
              case "beforetoggle":
                Y = OT;
            }
            var oe = (t & 4) !== 0, Kt = !oe && (e === "scroll" || e === "scrollend"), st = oe ? b !== null ? b + "Capture" : null : b;
            oe = [];
            for (var S = p, E; S !== null; ) {
              var z = S;
              if (E = z.stateNode, z = z.tag, z !== 5 && z !== 26 && z !== 27 || E === null || st === null || (z = fu(S, st), z != null && oe.push(
                Mn(
                  S,
                  z,
                  E
                )
              )), Kt) break;
              S = S.return;
            }
            0 < oe.length && (b = new Y(
              b,
              ne,
              null,
              a,
              _
            ), R.push({
              event: b,
              listeners: oe
            }));
          }
        }
        if ((t & 7) === 0) {
          e: {
            if (b = e === "mouseover" || e === "pointerover", Y = e === "mouseout" || e === "pointerout", b && a !== Bp && (ne = a.relatedTarget || a.fromElement) && (I(ne) || ne[xn]))
              break e;
            if ((Y || b) && (b = _.window === _ ? _ : (b = _.ownerDocument) ? b.defaultView || b.parentWindow : window, Y ? (ne = a.relatedTarget || a.toElement, Y = p, ne = ne ? I(ne) : null, ne !== null && (Kt = Ze(ne), oe = ne.tag, ne !== Kt || oe !== 5 && oe !== 27 && oe !== 6) && (ne = null)) : (Y = null, ne = p), Y !== ne)) {
              if (oe = A1, z = "onMouseLeave", st = "onMouseEnter", S = "mouse", (e === "pointerout" || e === "pointerover") && (oe = z1, z = "onPointerLeave", st = "onPointerEnter", S = "pointer"), Kt = Y == null ? b : se(Y), E = ne == null ? b : se(ne), b = new oe(
                z,
                S + "leave",
                Y,
                a,
                _
              ), b.target = Kt, b.relatedTarget = E, z = null, I(_) === p && (oe = new oe(
                st,
                S + "enter",
                ne,
                a,
                _
              ), oe.target = E, oe.relatedTarget = Kt, z = oe), Kt = z, Y && ne)
                t: {
                  for (oe = lp, st = Y, S = ne, E = 0, z = st; z; z = oe(z))
                    E++;
                  z = 0;
                  for (var J = S; J; J = oe(J))
                    z++;
                  for (; 0 < E - z; )
                    st = oe(st), E--;
                  for (; 0 < z - E; )
                    S = oe(S), z--;
                  for (; E--; ) {
                    if (st === S || S !== null && st === S.alternate) {
                      oe = st;
                      break t;
                    }
                    st = oe(st), S = oe(S);
                  }
                  oe = null;
                }
              else oe = null;
              Y !== null && Xa(
                R,
                b,
                Y,
                oe,
                !1
              ), ne !== null && Kt !== null && Xa(
                R,
                Kt,
                ne,
                oe,
                !0
              );
            }
          }
          e: {
            if (b = p ? se(p) : window, Y = b.nodeName && b.nodeName.toLowerCase(), Y === "select" || Y === "input" && b.type === "file")
              var ie = pr;
            else if (yr(b))
              if (U1)
                ie = Sd;
              else {
                ie = Vm;
                var xe = Lm;
              }
            else
              Y = b.nodeName, !Y || Y.toLowerCase() !== "input" || b.type !== "checkbox" && b.type !== "radio" ? p && dr(p.elementType) && (ie = pr) : ie = vr;
            if (ie && (ie = ie(e, p))) {
              Qm(
                R,
                ie,
                a,
                _
              );
              break e;
            }
            xe && xe(e, b, p), e === "focusout" && p && b.type === "number" && p.memoizedProps.value != null && Hm(b, "number", b.value);
          }
          switch (xe = p ? se(p) : window, e) {
            case "focusin":
              (yr(xe) || xe.contentEditable === "true") && (am = xe, yS = p, Xp = null);
              break;
            case "focusout":
              Xp = yS = am = null;
              break;
            case "mousedown":
              pS = !0;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              pS = !1, X0(
                R,
                a,
                _
              );
              break;
            case "selectionchange":
              if (RT) break;
            case "keydown":
            case "keyup":
              X0(
                R,
                a,
                _
              );
          }
          var Ee;
          if (mS)
            e: {
              switch (e) {
                case "compositionstart":
                  var ve = "onCompositionStart";
                  break e;
                case "compositionend":
                  ve = "onCompositionEnd";
                  break e;
                case "compositionupdate":
                  ve = "onCompositionUpdate";
                  break e;
              }
              ve = void 0;
            }
          else
            lm ? fi(e, a) && (ve = "onCompositionEnd") : e === "keydown" && a.keyCode === _1 && (ve = "onCompositionStart");
          ve && (D1 && a.locale !== "ko" && (lm || ve !== "onCompositionStart" ? ve === "onCompositionEnd" && lm && (Ee = wm()) : (Uf = _, rS = "value" in Uf ? Uf.value : Uf.textContent, lm = !0)), xe = Xu(
            p,
            ve
          ), 0 < xe.length && (ve = new O1(
            ve,
            e,
            null,
            a,
            _
          ), R.push({
            event: ve,
            listeners: xe
          }), Ee ? ve.data = Ee : (Ee = pd(a), Ee !== null && (ve.data = Ee)))), (Ee = _T ? vd(e, a) : x0(e, a)) && (ve = Xu(
            p,
            "onBeforeInput"
          ), 0 < ve.length && (xe = new rT(
            "onBeforeInput",
            "beforeinput",
            null,
            a,
            _
          ), R.push({
            event: xe,
            listeners: ve
          }), xe.data = Ee)), it(
            R,
            e,
            p,
            a,
            _
          );
        }
        wa(R, t);
      });
    }
    function Mn(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function Xu(e, t) {
      for (var a = t + "Capture", i = []; e !== null; ) {
        var o = e, f = o.stateNode;
        if (o = o.tag, o !== 5 && o !== 26 && o !== 27 || f === null || (o = fu(e, a), o != null && i.unshift(
          Mn(e, o, f)
        ), o = fu(e, t), o != null && i.push(
          Mn(e, o, f)
        )), e.tag === 3) return i;
        e = e.return;
      }
      return [];
    }
    function lp(e) {
      if (e === null) return null;
      do
        e = e.return;
      while (e && e.tag !== 5 && e.tag !== 27);
      return e || null;
    }
    function Xa(e, t, a, i, o) {
      for (var f = t._reactName, d = []; a !== null && a !== i; ) {
        var h = a, y = h.alternate, p = h.stateNode;
        if (h = h.tag, y !== null && y === i) break;
        h !== 5 && h !== 26 && h !== 27 || p === null || (y = p, o ? (p = fu(a, f), p != null && d.unshift(
          Mn(a, p, y)
        )) : o || (p = fu(a, f), p != null && d.push(
          Mn(a, p, y)
        ))), a = a.return;
      }
      d.length !== 0 && e.push({ event: t, listeners: d });
    }
    function sc(e, t) {
      Gm(e, t), e !== "input" && e !== "textarea" && e !== "select" || t == null || t.value !== null || E1 || (E1 = !0, e === "select" && t.multiple ? console.error(
        "`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.",
        e
      ) : console.error(
        "`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.",
        e
      ));
      var a = {
        registrationNameDependencies: Ju,
        possibleRegistrationNames: Wh
      };
      dr(e) || typeof t.is == "string" || Jg(e, t, a), t.contentEditable && !t.suppressContentEditableWarning && t.children != null && console.error(
        "A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."
      );
    }
    function ol(e, t, a, i) {
      t !== a && (a = Oi(a), Oi(t) !== a && (i[e] = t));
    }
    function Qa(e, t, a) {
      t.forEach(function(i) {
        a[oo(i)] = i === "style" ? kn(e) : e.getAttribute(i);
      });
    }
    function Cn(e, t) {
      t === !1 ? console.error(
        "Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.",
        e,
        e,
        e
      ) : console.error(
        "Expected `%s` listener to be a function, instead got a value of `%s` type.",
        e,
        typeof t
      );
    }
    function ys(e, t) {
      return e = e.namespaceURI === Ie || e.namespaceURI === nt ? e.ownerDocument.createElementNS(
        e.namespaceURI,
        e.tagName
      ) : e.ownerDocument.createElement(e.tagName), e.innerHTML = t, e.innerHTML;
    }
    function Oi(e) {
      return ui(e) && (console.error(
        "The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before using it here.",
        Wa(e)
      ), uu(e)), (typeof e == "string" ? e : "" + e).replace(tA, `
`).replace(lA, "");
    }
    function ps(e, t) {
      return t = Oi(t), Oi(e) === t;
    }
    function At(e, t, a, i, o, f) {
      switch (a) {
        case "children":
          typeof i == "string" ? (wo(i, t, !1), t === "body" || t === "textarea" && i === "" || ou(e, i)) : (typeof i == "number" || typeof i == "bigint") && (wo("" + i, t, !1), t !== "body" && ou(e, "" + i));
          break;
        case "className":
          ur(e, "class", i);
          break;
        case "tabIndex":
          ur(e, "tabindex", i);
          break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
          ur(e, a, i);
          break;
        case "style":
          Cc(e, i, f);
          break;
        case "data":
          if (t !== "object") {
            ur(e, "data", i);
            break;
          }
        case "src":
        case "href":
          if (i === "" && (t !== "a" || a !== "href")) {
            console.error(
              a === "src" ? 'An empty string ("") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.' : 'An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',
              a,
              a
            ), e.removeAttribute(a);
            break;
          }
          if (i == null || typeof i == "function" || typeof i == "symbol" || typeof i == "boolean") {
            e.removeAttribute(a);
            break;
          }
          zt(i, a), i = Li("" + i), e.setAttribute(a, i);
          break;
        case "action":
        case "formAction":
          if (i != null && (t === "form" ? a === "formAction" ? console.error(
            "You can only pass the formAction prop to <input> or <button>. Use the action prop on <form>."
          ) : typeof i == "function" && (o.encType == null && o.method == null || Cg || (Cg = !0, console.error(
            "Cannot specify a encType or method for a form that specifies a function as the action. React provides those automatically. They will get overridden."
          )), o.target == null || Mg || (Mg = !0, console.error(
            "Cannot specify a target for a form that specifies a function as the action. The function will always be executed in the same window."
          ))) : t === "input" || t === "button" ? a === "action" ? console.error(
            "You can only pass the action prop to <form>. Use the formAction prop on <input> or <button>."
          ) : t !== "input" || o.type === "submit" || o.type === "image" || Rg ? t !== "button" || o.type == null || o.type === "submit" || Rg ? typeof i == "function" && (o.name == null || iE || (iE = !0, console.error(
            'Cannot specify a "name" prop for a button that specifies a function as a formAction. React needs it to encode which action should be invoked. It will get overridden.'
          )), o.formEncType == null && o.formMethod == null || Cg || (Cg = !0, console.error(
            "Cannot specify a formEncType or formMethod for a button that specifies a function as a formAction. React provides those automatically. They will get overridden."
          )), o.formTarget == null || Mg || (Mg = !0, console.error(
            "Cannot specify a formTarget for a button that specifies a function as a formAction. The function will always be executed in the same window."
          ))) : (Rg = !0, console.error(
            'A button can only specify a formAction along with type="submit" or no type.'
          )) : (Rg = !0, console.error(
            'An input can only specify a formAction along with type="submit" or type="image".'
          )) : console.error(
            a === "action" ? "You can only pass the action prop to <form>." : "You can only pass the formAction prop to <input> or <button>."
          )), typeof i == "function") {
            e.setAttribute(
              a,
              "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
            );
            break;
          } else
            typeof f == "function" && (a === "formAction" ? (t !== "input" && At(e, t, "name", o.name, o, null), At(
              e,
              t,
              "formEncType",
              o.formEncType,
              o,
              null
            ), At(
              e,
              t,
              "formMethod",
              o.formMethod,
              o,
              null
            ), At(
              e,
              t,
              "formTarget",
              o.formTarget,
              o,
              null
            )) : (At(
              e,
              t,
              "encType",
              o.encType,
              o,
              null
            ), At(e, t, "method", o.method, o, null), At(
              e,
              t,
              "target",
              o.target,
              o,
              null
            )));
          if (i == null || typeof i == "symbol" || typeof i == "boolean") {
            e.removeAttribute(a);
            break;
          }
          zt(i, a), i = Li("" + i), e.setAttribute(a, i);
          break;
        case "onClick":
          i != null && (typeof i != "function" && Cn(a, i), e.onclick = wl);
          break;
        case "onScroll":
          i != null && (typeof i != "function" && Cn(a, i), Ge("scroll", e));
          break;
        case "onScrollEnd":
          i != null && (typeof i != "function" && Cn(a, i), Ge("scrollend", e));
          break;
        case "dangerouslySetInnerHTML":
          if (i != null) {
            if (typeof i != "object" || !("__html" in i))
              throw Error(
                "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information."
              );
            if (a = i.__html, a != null) {
              if (o.children != null)
                throw Error(
                  "Can only set one of `children` or `props.dangerouslySetInnerHTML`."
                );
              e.innerHTML = a;
            }
          }
          break;
        case "multiple":
          e.multiple = i && typeof i != "function" && typeof i != "symbol";
          break;
        case "muted":
          e.muted = i && typeof i != "function" && typeof i != "symbol";
          break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
          break;
        case "autoFocus":
          break;
        case "xlinkHref":
          if (i == null || typeof i == "function" || typeof i == "boolean" || typeof i == "symbol") {
            e.removeAttribute("xlink:href");
            break;
          }
          zt(i, a), a = Li("" + i), e.setAttributeNS(ad, "xlink:href", a);
          break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
          i != null && typeof i != "function" && typeof i != "symbol" ? (zt(i, a), e.setAttribute(a, "" + i)) : e.removeAttribute(a);
          break;
        case "inert":
          i !== "" || Ug[a] || (Ug[a] = !0, console.error(
            "Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.",
            a
          ));
        case "allowFullScreen":
        case "async":
        case "autoPlay":
        case "controls":
        case "default":
        case "defer":
        case "disabled":
        case "disablePictureInPicture":
        case "disableRemotePlayback":
        case "formNoValidate":
        case "hidden":
        case "loop":
        case "noModule":
        case "noValidate":
        case "open":
        case "playsInline":
        case "readOnly":
        case "required":
        case "reversed":
        case "scoped":
        case "seamless":
        case "itemScope":
          i && typeof i != "function" && typeof i != "symbol" ? e.setAttribute(a, "") : e.removeAttribute(a);
          break;
        case "capture":
        case "download":
          i === !0 ? e.setAttribute(a, "") : i !== !1 && i != null && typeof i != "function" && typeof i != "symbol" ? (zt(i, a), e.setAttribute(a, i)) : e.removeAttribute(a);
          break;
        case "cols":
        case "rows":
        case "size":
        case "span":
          i != null && typeof i != "function" && typeof i != "symbol" && !isNaN(i) && 1 <= i ? (zt(i, a), e.setAttribute(a, i)) : e.removeAttribute(a);
          break;
        case "rowSpan":
        case "start":
          i == null || typeof i == "function" || typeof i == "symbol" || isNaN(i) ? e.removeAttribute(a) : (zt(i, a), e.setAttribute(a, i));
          break;
        case "popover":
          Ge("beforetoggle", e), Ge("toggle", e), Ac(e, "popover", i);
          break;
        case "xlinkActuate":
          cu(
            e,
            ad,
            "xlink:actuate",
            i
          );
          break;
        case "xlinkArcrole":
          cu(
            e,
            ad,
            "xlink:arcrole",
            i
          );
          break;
        case "xlinkRole":
          cu(
            e,
            ad,
            "xlink:role",
            i
          );
          break;
        case "xlinkShow":
          cu(
            e,
            ad,
            "xlink:show",
            i
          );
          break;
        case "xlinkTitle":
          cu(
            e,
            ad,
            "xlink:title",
            i
          );
          break;
        case "xlinkType":
          cu(
            e,
            ad,
            "xlink:type",
            i
          );
          break;
        case "xmlBase":
          cu(
            e,
            f1,
            "xml:base",
            i
          );
          break;
        case "xmlLang":
          cu(
            e,
            f1,
            "xml:lang",
            i
          );
          break;
        case "xmlSpace":
          cu(
            e,
            f1,
            "xml:space",
            i
          );
          break;
        case "is":
          f != null && console.error(
            'Cannot update the "is" prop after it has been initialized.'
          ), Ac(e, "is", i);
          break;
        case "innerText":
        case "textContent":
          break;
        case "popoverTarget":
          cE || i == null || typeof i != "object" || (cE = !0, console.error(
            "The `popoverTarget` prop expects the ID of an Element as a string. Received %s instead.",
            i
          ));
        default:
          !(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N" ? (a = qm(a), Ac(e, a, i)) : Ju.hasOwnProperty(a) && i != null && typeof i != "function" && Cn(a, i);
      }
    }
    function Qu(e, t, a, i, o, f) {
      switch (a) {
        case "style":
          Cc(e, i, f);
          break;
        case "dangerouslySetInnerHTML":
          if (i != null) {
            if (typeof i != "object" || !("__html" in i))
              throw Error(
                "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information."
              );
            if (a = i.__html, a != null) {
              if (o.children != null)
                throw Error(
                  "Can only set one of `children` or `props.dangerouslySetInnerHTML`."
                );
              e.innerHTML = a;
            }
          }
          break;
        case "children":
          typeof i == "string" ? ou(e, i) : (typeof i == "number" || typeof i == "bigint") && ou(e, "" + i);
          break;
        case "onScroll":
          i != null && (typeof i != "function" && Cn(a, i), Ge("scroll", e));
          break;
        case "onScrollEnd":
          i != null && (typeof i != "function" && Cn(a, i), Ge("scrollend", e));
          break;
        case "onClick":
          i != null && (typeof i != "function" && Cn(a, i), e.onclick = wl);
          break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "innerHTML":
        case "ref":
          break;
        case "innerText":
        case "textContent":
          break;
        default:
          if (Ju.hasOwnProperty(a))
            i != null && typeof i != "function" && Cn(a, i);
          else
            e: {
              if (a[0] === "o" && a[1] === "n" && (o = a.endsWith("Capture"), t = a.slice(2, o ? a.length - 7 : void 0), f = e[fa] || null, f = f != null ? f[a] : null, typeof f == "function" && e.removeEventListener(t, f, o), typeof i == "function")) {
                typeof f != "function" && f !== null && (a in e ? e[a] = null : e.hasAttribute(a) && e.removeAttribute(a)), e.addEventListener(t, i, o);
                break e;
              }
              a in e ? e[a] = i : i === !0 ? e.setAttribute(a, "") : Ac(e, a, i);
            }
      }
    }
    function ft(e, t, a) {
      switch (sc(t, a), t) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
          break;
        case "img":
          Ge("error", e), Ge("load", e);
          var i = !1, o = !1, f;
          for (f in a)
            if (a.hasOwnProperty(f)) {
              var d = a[f];
              if (d != null)
                switch (f) {
                  case "src":
                    i = !0;
                    break;
                  case "srcSet":
                    o = !0;
                    break;
                  case "children":
                  case "dangerouslySetInnerHTML":
                    throw Error(
                      t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  default:
                    At(e, t, f, d, a, null);
                }
            }
          o && At(e, t, "srcSet", a.srcSet, a, null), i && At(e, t, "src", a.src, a, null);
          return;
        case "input":
          Gl("input", a), Ge("invalid", e);
          var h = f = d = o = null, y = null, p = null;
          for (i in a)
            if (a.hasOwnProperty(i)) {
              var _ = a[i];
              if (_ != null)
                switch (i) {
                  case "name":
                    o = _;
                    break;
                  case "type":
                    d = _;
                    break;
                  case "checked":
                    y = _;
                    break;
                  case "defaultChecked":
                    p = _;
                    break;
                  case "value":
                    f = _;
                    break;
                  case "defaultValue":
                    h = _;
                    break;
                  case "children":
                  case "dangerouslySetInnerHTML":
                    if (_ != null)
                      throw Error(
                        t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                      );
                    break;
                  default:
                    At(e, t, i, _, a, null);
                }
            }
          Oc(e, a), U0(
            e,
            f,
            h,
            y,
            p,
            d,
            o,
            !1
          );
          return;
        case "select":
          Gl("select", a), Ge("invalid", e), i = d = f = null;
          for (o in a)
            if (a.hasOwnProperty(o) && (h = a[o], h != null))
              switch (o) {
                case "value":
                  f = h;
                  break;
                case "defaultValue":
                  d = h;
                  break;
                case "multiple":
                  i = h;
                default:
                  At(
                    e,
                    t,
                    o,
                    h,
                    a,
                    null
                  );
              }
          zc(e, a), t = f, a = d, e.multiple = !!i, t != null ? Qi(e, !!i, t, !1) : a != null && Qi(e, !!i, a, !0);
          return;
        case "textarea":
          Gl("textarea", a), Ge("invalid", e), f = o = i = null;
          for (d in a)
            if (a.hasOwnProperty(d) && (h = a[d], h != null))
              switch (d) {
                case "value":
                  i = h;
                  break;
                case "defaultValue":
                  o = h;
                  break;
                case "children":
                  f = h;
                  break;
                case "dangerouslySetInnerHTML":
                  if (h != null)
                    throw Error(
                      "`dangerouslySetInnerHTML` does not make sense on <textarea>."
                    );
                  break;
                default:
                  At(
                    e,
                    t,
                    d,
                    h,
                    a,
                    null
                  );
              }
          _c(e, a), Dc(e, i, o, f);
          return;
        case "option":
          Nm(e, a);
          for (y in a)
            a.hasOwnProperty(y) && (i = a[y], i != null) && (y === "selected" ? e.selected = i && typeof i != "function" && typeof i != "symbol" : At(e, t, y, i, a, null));
          return;
        case "dialog":
          Ge("beforetoggle", e), Ge("toggle", e), Ge("cancel", e), Ge("close", e);
          break;
        case "iframe":
        case "object":
          Ge("load", e);
          break;
        case "video":
        case "audio":
          for (i = 0; i < v0.length; i++)
            Ge(v0[i], e);
          break;
        case "image":
          Ge("error", e), Ge("load", e);
          break;
        case "details":
          Ge("toggle", e);
          break;
        case "embed":
        case "source":
        case "link":
          Ge("error", e), Ge("load", e);
        case "area":
        case "base":
        case "br":
        case "col":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "track":
        case "wbr":
        case "menuitem":
          for (p in a)
            if (a.hasOwnProperty(p) && (i = a[p], i != null))
              switch (p) {
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(
                    t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                  );
                default:
                  At(e, t, p, i, a, null);
              }
          return;
        default:
          if (dr(t)) {
            for (_ in a)
              a.hasOwnProperty(_) && (i = a[_], i !== void 0 && Qu(
                e,
                t,
                _,
                i,
                a,
                void 0
              ));
            return;
          }
      }
      for (h in a)
        a.hasOwnProperty(h) && (i = a[h], i != null && At(e, t, h, i, a, null));
    }
    function dc(e, t, a, i) {
      switch (sc(t, i), t) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
          break;
        case "input":
          var o = null, f = null, d = null, h = null, y = null, p = null, _ = null;
          for (Y in a) {
            var R = a[Y];
            if (a.hasOwnProperty(Y) && R != null)
              switch (Y) {
                case "checked":
                  break;
                case "value":
                  break;
                case "defaultValue":
                  y = R;
                default:
                  i.hasOwnProperty(Y) || At(
                    e,
                    t,
                    Y,
                    null,
                    i,
                    R
                  );
              }
          }
          for (var b in i) {
            var Y = i[b];
            if (R = a[b], i.hasOwnProperty(b) && (Y != null || R != null))
              switch (b) {
                case "type":
                  f = Y;
                  break;
                case "name":
                  o = Y;
                  break;
                case "checked":
                  p = Y;
                  break;
                case "defaultChecked":
                  _ = Y;
                  break;
                case "value":
                  d = Y;
                  break;
                case "defaultValue":
                  h = Y;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (Y != null)
                    throw Error(
                      t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  break;
                default:
                  Y !== R && At(
                    e,
                    t,
                    b,
                    Y,
                    i,
                    R
                  );
              }
          }
          t = a.type === "checkbox" || a.type === "radio" ? a.checked != null : a.value != null, i = i.type === "checkbox" || i.type === "radio" ? i.checked != null : i.value != null, t || !i || uE || (console.error(
            "A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components"
          ), uE = !0), !t || i || nE || (console.error(
            "A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components"
          ), nE = !0), ir(
            e,
            d,
            h,
            y,
            p,
            _,
            f,
            o
          );
          return;
        case "select":
          Y = d = h = b = null;
          for (f in a)
            if (y = a[f], a.hasOwnProperty(f) && y != null)
              switch (f) {
                case "value":
                  break;
                case "multiple":
                  Y = y;
                default:
                  i.hasOwnProperty(f) || At(
                    e,
                    t,
                    f,
                    null,
                    i,
                    y
                  );
              }
          for (o in i)
            if (f = i[o], y = a[o], i.hasOwnProperty(o) && (f != null || y != null))
              switch (o) {
                case "value":
                  b = f;
                  break;
                case "defaultValue":
                  h = f;
                  break;
                case "multiple":
                  d = f;
                default:
                  f !== y && At(
                    e,
                    t,
                    o,
                    f,
                    i,
                    y
                  );
              }
          i = h, t = d, a = Y, b != null ? Qi(e, !!t, b, !1) : !!a != !!t && (i != null ? Qi(e, !!t, i, !0) : Qi(e, !!t, t ? [] : "", !1));
          return;
        case "textarea":
          Y = b = null;
          for (h in a)
            if (o = a[h], a.hasOwnProperty(h) && o != null && !i.hasOwnProperty(h))
              switch (h) {
                case "value":
                  break;
                case "children":
                  break;
                default:
                  At(e, t, h, null, i, o);
              }
          for (d in i)
            if (o = i[d], f = a[d], i.hasOwnProperty(d) && (o != null || f != null))
              switch (d) {
                case "value":
                  b = o;
                  break;
                case "defaultValue":
                  Y = o;
                  break;
                case "children":
                  break;
                case "dangerouslySetInnerHTML":
                  if (o != null)
                    throw Error(
                      "`dangerouslySetInnerHTML` does not make sense on <textarea>."
                    );
                  break;
                default:
                  o !== f && At(e, t, d, o, i, f);
              }
          qo(e, b, Y);
          return;
        case "option":
          for (var ne in a)
            b = a[ne], a.hasOwnProperty(ne) && b != null && !i.hasOwnProperty(ne) && (ne === "selected" ? e.selected = !1 : At(
              e,
              t,
              ne,
              null,
              i,
              b
            ));
          for (y in i)
            b = i[y], Y = a[y], i.hasOwnProperty(y) && b !== Y && (b != null || Y != null) && (y === "selected" ? e.selected = b && typeof b != "function" && typeof b != "symbol" : At(
              e,
              t,
              y,
              b,
              i,
              Y
            ));
          return;
        case "img":
        case "link":
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
        case "menuitem":
          for (var oe in a)
            b = a[oe], a.hasOwnProperty(oe) && b != null && !i.hasOwnProperty(oe) && At(
              e,
              t,
              oe,
              null,
              i,
              b
            );
          for (p in i)
            if (b = i[p], Y = a[p], i.hasOwnProperty(p) && b !== Y && (b != null || Y != null))
              switch (p) {
                case "children":
                case "dangerouslySetInnerHTML":
                  if (b != null)
                    throw Error(
                      t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  break;
                default:
                  At(
                    e,
                    t,
                    p,
                    b,
                    i,
                    Y
                  );
              }
          return;
        default:
          if (dr(t)) {
            for (var Kt in a)
              b = a[Kt], a.hasOwnProperty(Kt) && b !== void 0 && !i.hasOwnProperty(Kt) && Qu(
                e,
                t,
                Kt,
                void 0,
                i,
                b
              );
            for (_ in i)
              b = i[_], Y = a[_], !i.hasOwnProperty(_) || b === Y || b === void 0 && Y === void 0 || Qu(
                e,
                t,
                _,
                b,
                i,
                Y
              );
            return;
          }
      }
      for (var st in a)
        b = a[st], a.hasOwnProperty(st) && b != null && !i.hasOwnProperty(st) && At(e, t, st, null, i, b);
      for (R in i)
        b = i[R], Y = a[R], !i.hasOwnProperty(R) || b === Y || b == null && Y == null || At(e, t, R, b, i, Y);
    }
    function oo(e) {
      switch (e) {
        case "class":
          return "className";
        case "for":
          return "htmlFor";
        default:
          return e;
      }
    }
    function kn(e) {
      var t = {};
      e = e.style;
      for (var a = 0; a < e.length; a++) {
        var i = e[a];
        t[i] = e.getPropertyValue(i);
      }
      return t;
    }
    function vh(e, t, a) {
      if (t != null && typeof t != "object")
        console.error(
          "The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX."
        );
      else {
        var i, o = i = "", f;
        for (f in t)
          if (t.hasOwnProperty(f)) {
            var d = t[f];
            d != null && typeof d != "boolean" && d !== "" && (f.indexOf("--") === 0 ? (ql(d, f), i += o + f + ":" + ("" + d).trim()) : typeof d != "number" || d === 0 || Le.has(f) ? (ql(d, f), i += o + f.replace(he, "-$1").toLowerCase().replace(_e, "-ms-") + ":" + ("" + d).trim()) : i += o + f.replace(he, "-$1").toLowerCase().replace(_e, "-ms-") + ":" + d + "px", o = ";");
          }
        i = i || null, t = e.getAttribute("style"), t !== i && (i = Oi(i), Oi(t) !== i && (a.style = kn(e)));
      }
    }
    function La(e, t, a, i, o, f) {
      if (o.delete(a), e = e.getAttribute(a), e === null)
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            return;
        }
      else if (i != null)
        switch (typeof i) {
          case "function":
          case "symbol":
          case "boolean":
            break;
          default:
            if (zt(i, t), e === "" + i)
              return;
        }
      ol(t, e, i, f);
    }
    function ap(e, t, a, i, o, f) {
      if (o.delete(a), e = e.getAttribute(a), e === null) {
        switch (typeof i) {
          case "function":
          case "symbol":
            return;
        }
        if (!i) return;
      } else
        switch (typeof i) {
          case "function":
          case "symbol":
            break;
          default:
            if (i) return;
        }
      ol(t, e, i, f);
    }
    function fo(e, t, a, i, o, f) {
      if (o.delete(a), e = e.getAttribute(a), e === null)
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
            return;
        }
      else if (i != null)
        switch (typeof i) {
          case "function":
          case "symbol":
            break;
          default:
            if (zt(i, a), e === "" + i)
              return;
        }
      ol(t, e, i, f);
    }
    function gh(e, t, a, i, o, f) {
      if (o.delete(a), e = e.getAttribute(a), e === null)
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            return;
          default:
            if (isNaN(i)) return;
        }
      else if (i != null)
        switch (typeof i) {
          case "function":
          case "symbol":
          case "boolean":
            break;
          default:
            if (!isNaN(i) && (zt(i, t), e === "" + i))
              return;
        }
      ol(t, e, i, f);
    }
    function Ta(e, t, a, i, o, f) {
      if (o.delete(a), e = e.getAttribute(a), e === null)
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            return;
        }
      else if (i != null)
        switch (typeof i) {
          case "function":
          case "symbol":
          case "boolean":
            break;
          default:
            if (zt(i, t), a = Li("" + i), e === a)
              return;
        }
      ol(t, e, i, f);
    }
    function np(e, t, a, i) {
      for (var o = {}, f = /* @__PURE__ */ new Set(), d = e.attributes, h = 0; h < d.length; h++)
        switch (d[h].name.toLowerCase()) {
          case "value":
            break;
          case "checked":
            break;
          case "selected":
            break;
          default:
            f.add(d[h].name);
        }
      if (dr(t)) {
        for (var y in a)
          if (a.hasOwnProperty(y)) {
            var p = a[y];
            if (p != null) {
              if (Ju.hasOwnProperty(y))
                typeof p != "function" && Cn(y, p);
              else if (a.suppressHydrationWarning !== !0)
                switch (y) {
                  case "children":
                    typeof p != "string" && typeof p != "number" || ol(
                      "children",
                      e.textContent,
                      p,
                      o
                    );
                    continue;
                  case "suppressContentEditableWarning":
                  case "suppressHydrationWarning":
                  case "defaultValue":
                  case "defaultChecked":
                  case "innerHTML":
                  case "ref":
                    continue;
                  case "dangerouslySetInnerHTML":
                    d = e.innerHTML, p = p ? p.__html : void 0, p != null && (p = ys(e, p), ol(
                      y,
                      d,
                      p,
                      o
                    ));
                    continue;
                  case "style":
                    f.delete(y), vh(e, p, o);
                    continue;
                  case "offsetParent":
                  case "offsetTop":
                  case "offsetLeft":
                  case "offsetWidth":
                  case "offsetHeight":
                  case "isContentEditable":
                  case "outerText":
                  case "outerHTML":
                    f.delete(y.toLowerCase()), console.error(
                      "Assignment to read-only property will result in a no-op: `%s`",
                      y
                    );
                    continue;
                  case "className":
                    f.delete("class"), d = fd(
                      e,
                      "class",
                      p
                    ), ol(
                      "className",
                      d,
                      p,
                      o
                    );
                    continue;
                  default:
                    i.context === Uo && t !== "svg" && t !== "math" ? f.delete(y.toLowerCase()) : f.delete(y), d = fd(
                      e,
                      y,
                      p
                    ), ol(
                      y,
                      d,
                      p,
                      o
                    );
                }
            }
          }
      } else
        for (p in a)
          if (a.hasOwnProperty(p) && (y = a[p], y != null)) {
            if (Ju.hasOwnProperty(p))
              typeof y != "function" && Cn(p, y);
            else if (a.suppressHydrationWarning !== !0)
              switch (p) {
                case "children":
                  typeof y != "string" && typeof y != "number" || ol(
                    "children",
                    e.textContent,
                    y,
                    o
                  );
                  continue;
                case "suppressContentEditableWarning":
                case "suppressHydrationWarning":
                case "value":
                case "checked":
                case "selected":
                case "defaultValue":
                case "defaultChecked":
                case "innerHTML":
                case "ref":
                  continue;
                case "dangerouslySetInnerHTML":
                  d = e.innerHTML, y = y ? y.__html : void 0, y != null && (y = ys(e, y), d !== y && (o[p] = { __html: d }));
                  continue;
                case "className":
                  La(
                    e,
                    p,
                    "class",
                    y,
                    f,
                    o
                  );
                  continue;
                case "tabIndex":
                  La(
                    e,
                    p,
                    "tabindex",
                    y,
                    f,
                    o
                  );
                  continue;
                case "style":
                  f.delete(p), vh(e, y, o);
                  continue;
                case "multiple":
                  f.delete(p), ol(
                    p,
                    e.multiple,
                    y,
                    o
                  );
                  continue;
                case "muted":
                  f.delete(p), ol(
                    p,
                    e.muted,
                    y,
                    o
                  );
                  continue;
                case "autoFocus":
                  f.delete("autofocus"), ol(
                    p,
                    e.autofocus,
                    y,
                    o
                  );
                  continue;
                case "data":
                  if (t !== "object") {
                    f.delete(p), d = e.getAttribute("data"), ol(
                      p,
                      d,
                      y,
                      o
                    );
                    continue;
                  }
                case "src":
                case "href":
                  if (!(y !== "" || t === "a" && p === "href" || t === "object" && p === "data")) {
                    console.error(
                      p === "src" ? 'An empty string ("") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.' : 'An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',
                      p,
                      p
                    );
                    continue;
                  }
                  Ta(
                    e,
                    p,
                    p,
                    y,
                    f,
                    o
                  );
                  continue;
                case "action":
                case "formAction":
                  if (d = e.getAttribute(p), typeof y == "function") {
                    f.delete(p.toLowerCase()), p === "formAction" ? (f.delete("name"), f.delete("formenctype"), f.delete("formmethod"), f.delete("formtarget")) : (f.delete("enctype"), f.delete("method"), f.delete("target"));
                    continue;
                  } else if (d === aA) {
                    f.delete(p.toLowerCase()), ol(
                      p,
                      "function",
                      y,
                      o
                    );
                    continue;
                  }
                  Ta(
                    e,
                    p,
                    p.toLowerCase(),
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkHref":
                  Ta(
                    e,
                    p,
                    "xlink:href",
                    y,
                    f,
                    o
                  );
                  continue;
                case "contentEditable":
                  fo(
                    e,
                    p,
                    "contenteditable",
                    y,
                    f,
                    o
                  );
                  continue;
                case "spellCheck":
                  fo(
                    e,
                    p,
                    "spellcheck",
                    y,
                    f,
                    o
                  );
                  continue;
                case "draggable":
                case "autoReverse":
                case "externalResourcesRequired":
                case "focusable":
                case "preserveAlpha":
                  fo(
                    e,
                    p,
                    p,
                    y,
                    f,
                    o
                  );
                  continue;
                case "allowFullScreen":
                case "async":
                case "autoPlay":
                case "controls":
                case "default":
                case "defer":
                case "disabled":
                case "disablePictureInPicture":
                case "disableRemotePlayback":
                case "formNoValidate":
                case "hidden":
                case "loop":
                case "noModule":
                case "noValidate":
                case "open":
                case "playsInline":
                case "readOnly":
                case "required":
                case "reversed":
                case "scoped":
                case "seamless":
                case "itemScope":
                  ap(
                    e,
                    p,
                    p.toLowerCase(),
                    y,
                    f,
                    o
                  );
                  continue;
                case "capture":
                case "download":
                  e: {
                    h = e;
                    var _ = d = p, R = o;
                    if (f.delete(_), h = h.getAttribute(_), h === null)
                      switch (typeof y) {
                        case "undefined":
                        case "function":
                        case "symbol":
                          break e;
                        default:
                          if (y === !1) break e;
                      }
                    else if (y != null)
                      switch (typeof y) {
                        case "function":
                        case "symbol":
                          break;
                        case "boolean":
                          if (y === !0 && h === "") break e;
                          break;
                        default:
                          if (zt(y, d), h === "" + y)
                            break e;
                      }
                    ol(
                      d,
                      h,
                      y,
                      R
                    );
                  }
                  continue;
                case "cols":
                case "rows":
                case "size":
                case "span":
                  e: {
                    if (h = e, _ = d = p, R = o, f.delete(_), h = h.getAttribute(_), h === null)
                      switch (typeof y) {
                        case "undefined":
                        case "function":
                        case "symbol":
                        case "boolean":
                          break e;
                        default:
                          if (isNaN(y) || 1 > y) break e;
                      }
                    else if (y != null)
                      switch (typeof y) {
                        case "function":
                        case "symbol":
                        case "boolean":
                          break;
                        default:
                          if (!(isNaN(y) || 1 > y) && (zt(y, d), h === "" + y))
                            break e;
                      }
                    ol(
                      d,
                      h,
                      y,
                      R
                    );
                  }
                  continue;
                case "rowSpan":
                  gh(
                    e,
                    p,
                    "rowspan",
                    y,
                    f,
                    o
                  );
                  continue;
                case "start":
                  gh(
                    e,
                    p,
                    p,
                    y,
                    f,
                    o
                  );
                  continue;
                case "xHeight":
                  La(
                    e,
                    p,
                    "x-height",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkActuate":
                  La(
                    e,
                    p,
                    "xlink:actuate",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkArcrole":
                  La(
                    e,
                    p,
                    "xlink:arcrole",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkRole":
                  La(
                    e,
                    p,
                    "xlink:role",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkShow":
                  La(
                    e,
                    p,
                    "xlink:show",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkTitle":
                  La(
                    e,
                    p,
                    "xlink:title",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkType":
                  La(
                    e,
                    p,
                    "xlink:type",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xmlBase":
                  La(
                    e,
                    p,
                    "xml:base",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xmlLang":
                  La(
                    e,
                    p,
                    "xml:lang",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xmlSpace":
                  La(
                    e,
                    p,
                    "xml:space",
                    y,
                    f,
                    o
                  );
                  continue;
                case "inert":
                  y !== "" || Ug[p] || (Ug[p] = !0, console.error(
                    "Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.",
                    p
                  )), ap(
                    e,
                    p,
                    p,
                    y,
                    f,
                    o
                  );
                  continue;
                default:
                  if (!(2 < p.length) || p[0] !== "o" && p[0] !== "O" || p[1] !== "n" && p[1] !== "N") {
                    h = qm(p), d = !1, i.context === Uo && t !== "svg" && t !== "math" ? f.delete(h.toLowerCase()) : (_ = p.toLowerCase(), _ = Ih.hasOwnProperty(
                      _
                    ) && Ih[_] || null, _ !== null && _ !== p && (d = !0, f.delete(_)), f.delete(h));
                    e: if (_ = e, R = h, h = y, _a(R))
                      if (_.hasAttribute(R))
                        _ = _.getAttribute(
                          R
                        ), zt(
                          h,
                          R
                        ), h = _ === "" + h ? h : _;
                      else {
                        switch (typeof h) {
                          case "function":
                          case "symbol":
                            break e;
                          case "boolean":
                            if (_ = R.toLowerCase().slice(0, 5), _ !== "data-" && _ !== "aria-")
                              break e;
                        }
                        h = h === void 0 ? void 0 : null;
                      }
                    else h = void 0;
                    d || ol(
                      p,
                      h,
                      y,
                      o
                    );
                  }
              }
          }
      return 0 < f.size && a.suppressHydrationWarning !== !0 && Qa(e, f, o), Object.keys(o).length === 0 ? null : o;
    }
    function Va(e, t) {
      switch (e.length) {
        case 0:
          return "";
        case 1:
          return e[0];
        case 2:
          return e[0] + " " + t + " " + e[1];
        default:
          return e.slice(0, -1).join(", ") + ", " + t + " " + e[e.length - 1];
      }
    }
    function up(e) {
      switch (e) {
        case "css":
        case "script":
        case "font":
        case "img":
        case "image":
        case "input":
        case "link":
          return !0;
        default:
          return !1;
      }
    }
    function yv() {
      if (typeof performance.getEntriesByType == "function") {
        for (var e = 0, t = 0, a = performance.getEntriesByType("resource"), i = 0; i < a.length; i++) {
          var o = a[i], f = o.transferSize, d = o.initiatorType, h = o.duration;
          if (f && h && up(d)) {
            for (d = 0, h = o.responseEnd, i += 1; i < a.length; i++) {
              var y = a[i], p = y.startTime;
              if (p > h) break;
              var _ = y.transferSize, R = y.initiatorType;
              _ && up(R) && (y = y.responseEnd, d += _ * (y < h ? 1 : (h - p) / (y - p)));
            }
            if (--i, t += 8 * (f + d) / (o.duration / 1e3), e++, 10 < e) break;
          }
        }
        if (0 < e) return t / e / 1e6;
      }
      return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
    }
    function Sh(e) {
      return e.nodeType === 9 ? e : e.ownerDocument;
    }
    function zi(e) {
      switch (e) {
        case nt:
          return Rm;
        case Ie:
          return Ng;
        default:
          return Uo;
      }
    }
    function vs(e, t) {
      if (e === Uo)
        switch (t) {
          case "svg":
            return Rm;
          case "math":
            return Ng;
          default:
            return Uo;
        }
      return e === Rm && t === "foreignObject" ? Uo : e;
    }
    function gs(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function yf() {
      var e = window.event;
      return e && e.type === "popstate" ? e === h1 ? !1 : (h1 = e, !0) : (h1 = null, !1);
    }
    function pf() {
      var e = window.event;
      return e && e !== b0 ? e.type : null;
    }
    function vf() {
      var e = window.event;
      return e && e !== b0 ? e.timeStamp : -1.1;
    }
    function pv(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function vv(e, t, a) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          break;
        case "img":
          a.src ? e.src = a.src : a.srcSet && (e.srcset = a.srcSet);
      }
    }
    function bh() {
    }
    function ip(e, t, a, i) {
      dc(e, t, a, i), e[fa] = i;
    }
    function gv(e) {
      ou(e, "");
    }
    function eS(e, t, a) {
      e.nodeValue = a;
    }
    function Sv(e) {
      if (!e.__reactWarnedAboutChildrenConflict) {
        var t = e[fa] || null;
        if (t !== null) {
          var a = le(e);
          a !== null && (typeof t.children == "string" || typeof t.children == "number" ? (e.__reactWarnedAboutChildrenConflict = !0, fe(a, function() {
            console.error(
              'Cannot use a ref on a React element as a container to `createRoot` or `createPortal` if that element also sets "children" text content using React. It should be a leaf with no children. Otherwise it\'s ambiguous which children should be used.'
            );
          })) : t.dangerouslySetInnerHTML != null && (e.__reactWarnedAboutChildrenConflict = !0, fe(a, function() {
            console.error(
              'Cannot use a ref on a React element as a container to `createRoot` or `createPortal` if that element also sets "dangerouslySetInnerHTML" using React. It should be a leaf with no children. Otherwise it\'s ambiguous which children should be used.'
            );
          })));
        }
      }
    }
    function _i(e) {
      return e === "head";
    }
    function bv(e, t) {
      e.removeChild(t);
    }
    function gf(e, t) {
      (e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e).removeChild(t);
    }
    function Ss(e, t) {
      var a = t, i = 0;
      do {
        var o = a.nextSibling;
        if (e.removeChild(a), o && o.nodeType === 8)
          if (a = o.data, a === S0 || a === Hg) {
            if (i === 0) {
              e.removeChild(o), Of(t);
              return;
            }
            i--;
          } else if (a === g0 || a === kf || a === ud || a === Dm || a === nd)
            i++;
          else if (a === uA)
            Ts(
              e.ownerDocument.documentElement
            );
          else if (a === cA) {
            a = e.ownerDocument.head, Ts(a);
            for (var f = a.firstChild; f; ) {
              var d = f.nextSibling, h = f.nodeName;
              f[js] || h === "SCRIPT" || h === "STYLE" || h === "LINK" && f.rel.toLowerCase() === "stylesheet" || a.removeChild(f), f = d;
            }
          } else
            a === iA && Ts(e.ownerDocument.body);
        a = o;
      } while (a);
      Of(t);
    }
    function cp(e, t) {
      var a = e;
      e = 0;
      do {
        var i = a.nextSibling;
        if (a.nodeType === 1 ? t ? (a._stashedDisplay = a.style.display, a.style.display = "none") : (a.style.display = a._stashedDisplay || "", a.getAttribute("style") === "" && a.removeAttribute("style")) : a.nodeType === 3 && (t ? (a._stashedText = a.nodeValue, a.nodeValue = "") : a.nodeValue = a._stashedText || ""), i && i.nodeType === 8)
          if (a = i.data, a === S0) {
            if (e === 0) break;
            e--;
          } else
            a !== g0 && a !== kf && a !== ud && a !== Dm || e++;
        a = i;
      } while (a);
    }
    function Ev(e) {
      cp(e, !0);
    }
    function Tv(e) {
      e = e.style, typeof e.setProperty == "function" ? e.setProperty("display", "none", "important") : e.display = "none";
    }
    function Av(e) {
      e.nodeValue = "";
    }
    function Ov(e) {
      cp(e, !1);
    }
    function zv(e, t) {
      t = t[oA], t = t != null && t.hasOwnProperty("display") ? t.display : null, e.style.display = t == null || typeof t == "boolean" ? "" : ("" + t).trim();
    }
    function Eh(e, t) {
      e.nodeValue = t;
    }
    function Th(e) {
      var t = e.firstChild;
      for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
        var a = t;
        switch (t = t.nextSibling, a.nodeName) {
          case "HTML":
          case "HEAD":
          case "BODY":
            Th(a), M(a);
            continue;
          case "SCRIPT":
          case "STYLE":
            continue;
          case "LINK":
            if (a.rel.toLowerCase() === "stylesheet") continue;
        }
        e.removeChild(a);
      }
    }
    function _v(e, t, a, i) {
      for (; e.nodeType === 1; ) {
        var o = a;
        if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
          if (!i && (e.nodeName !== "INPUT" || e.type !== "hidden"))
            break;
        } else if (i) {
          if (!e[js])
            switch (t) {
              case "meta":
                if (!e.hasAttribute("itemprop")) break;
                return e;
              case "link":
                if (f = e.getAttribute("rel"), f === "stylesheet" && e.hasAttribute("data-precedence"))
                  break;
                if (f !== o.rel || e.getAttribute("href") !== (o.href == null || o.href === "" ? null : o.href) || e.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin) || e.getAttribute("title") !== (o.title == null ? null : o.title))
                  break;
                return e;
              case "style":
                if (e.hasAttribute("data-precedence")) break;
                return e;
              case "script":
                if (f = e.getAttribute("src"), (f !== (o.src == null ? null : o.src) || e.getAttribute("type") !== (o.type == null ? null : o.type) || e.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin)) && f && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                  break;
                return e;
              default:
                return e;
            }
        } else if (t === "input" && e.type === "hidden") {
          zt(o.name, "name");
          var f = o.name == null ? null : "" + o.name;
          if (o.type === "hidden" && e.getAttribute("name") === f)
            return e;
        } else return e;
        if (e = on(e.nextSibling), e === null) break;
      }
      return null;
    }
    function Mt(e, t, a) {
      if (t === "") return null;
      for (; e.nodeType !== 3; )
        if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !a || (e = on(e.nextSibling), e === null)) return null;
      return e;
    }
    function Ah(e, t) {
      for (; e.nodeType !== 8; )
        if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = on(e.nextSibling), e === null)) return null;
      return e;
    }
    function op(e) {
      return e.data === kf || e.data === ud;
    }
    function Oh(e) {
      return e.data === Dm || e.data === kf && e.ownerDocument.readyState !== fE;
    }
    function tS(e, t) {
      var a = e.ownerDocument;
      if (e.data === ud)
        e._reactRetry = t;
      else if (e.data !== kf || a.readyState !== fE)
        t();
      else {
        var i = function() {
          t(), a.removeEventListener("DOMContentLoaded", i);
        };
        a.addEventListener("DOMContentLoaded", i), e._reactRetry = i;
      }
    }
    function on(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
          if (t = e.data, t === g0 || t === Dm || t === kf || t === ud || t === nd || t === r1 || t === oE)
            break;
          if (t === S0 || t === Hg)
            return null;
        }
      }
      return e;
    }
    function Dv(e) {
      if (e.nodeType === 1) {
        for (var t = e.nodeName.toLowerCase(), a = {}, i = e.attributes, o = 0; o < i.length; o++) {
          var f = i[o];
          a[oo(f.name)] = f.name.toLowerCase() === "style" ? kn(e) : f.value;
        }
        return { type: t, props: a };
      }
      return e.nodeType === 8 ? e.data === nd ? { type: "Activity", props: {} } : { type: "Suspense", props: {} } : e.nodeValue;
    }
    function bs(e, t, a) {
      return a === null || a[nA] !== !0 ? (e.nodeValue === t ? e = null : (t = Oi(t), e = Oi(e.nodeValue) === t ? null : e.nodeValue), e) : null;
    }
    function hc(e) {
      e = e.nextSibling;
      for (var t = 0; e; ) {
        if (e.nodeType === 8) {
          var a = e.data;
          if (a === S0 || a === Hg) {
            if (t === 0)
              return on(e.nextSibling);
            t--;
          } else
            a !== g0 && a !== Dm && a !== kf && a !== ud && a !== nd || t++;
        }
        e = e.nextSibling;
      }
      return null;
    }
    function zh(e) {
      e = e.previousSibling;
      for (var t = 0; e; ) {
        if (e.nodeType === 8) {
          var a = e.data;
          if (a === g0 || a === Dm || a === kf || a === ud || a === nd) {
            if (t === 0) return e;
            t--;
          } else
            a !== S0 && a !== Hg || t++;
        }
        e = e.previousSibling;
      }
      return null;
    }
    function _h(e) {
      Of(e);
    }
    function fp(e) {
      Of(e);
    }
    function mc(e) {
      Of(e);
    }
    function Wn(e, t, a, i, o) {
      switch (o && md(e, i.ancestorInfo), t = Sh(a), e) {
        case "html":
          if (e = t.documentElement, !e)
            throw Error(
              "React expected an <html> element (document.documentElement) to exist in the Document but one was not found. React never removes the documentElement for any Document it renders into so the cause is likely in some other script running on this page."
            );
          return e;
        case "head":
          if (e = t.head, !e)
            throw Error(
              "React expected a <head> element (document.head) to exist in the Document but one was not found. React never removes the head for any Document it renders into so the cause is likely in some other script running on this page."
            );
          return e;
        case "body":
          if (e = t.body, !e)
            throw Error(
              "React expected a <body> element (document.body) to exist in the Document but one was not found. React never removes the body for any Document it renders into so the cause is likely in some other script running on this page."
            );
          return e;
        default:
          throw Error(
            "resolveSingletonInstance was called with an element type that is not supported. This is a bug in React."
          );
      }
    }
    function Es(e, t, a, i) {
      if (!a[xn] && le(a)) {
        var o = a.tagName.toLowerCase();
        console.error(
          "You are mounting a new %s component when a previous one has not first unmounted. It is an error to render more than one %s component at a time and attributes and children of these components will likely fail in unpredictable ways. Please only render a single instance of <%s> and if you need to mount a new one, ensure any previous ones have unmounted first.",
          o,
          o,
          o
        );
      }
      switch (e) {
        case "html":
        case "head":
        case "body":
          break;
        default:
          console.error(
            "acquireSingletonInstance was called with an element type that is not supported. This is a bug in React."
          );
      }
      for (o = a.attributes; o.length; )
        a.removeAttributeNode(o[0]);
      ft(a, e, t), a[Fl] = i, a[fa] = t;
    }
    function Ts(e) {
      for (var t = e.attributes; t.length; )
        e.removeAttributeNode(t[0]);
      M(e);
    }
    function As(e) {
      return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
    }
    function rp(e, t, a) {
      var i = Mm;
      if (i && typeof t == "string" && t) {
        var o = Zt(t);
        o = 'link[rel="' + e + '"][href="' + o + '"]', typeof a == "string" && (o += '[crossorigin="' + a + '"]'), yE.has(o) || (yE.add(o), e = { rel: e, crossOrigin: a, href: t }, i.querySelector(o) === null && (t = i.createElement("link"), ft(t, "link", e), ye(t), i.head.appendChild(t)));
      }
    }
    function sp(e, t, a, i) {
      var o = (o = Hn.current) ? As(o) : null;
      if (!o)
        throw Error(
          '"resourceRoot" was expected to exist. This is a bug in React.'
        );
      switch (e) {
        case "meta":
        case "title":
          return null;
        case "style":
          return typeof a.precedence == "string" && typeof a.href == "string" ? (a = Sf(a.href), t = He(o).hoistableStyles, i = t.get(a), i || (i = {
            type: "style",
            instance: null,
            count: 0,
            state: null
          }, t.set(a, i)), i) : { type: "void", instance: null, count: 0, state: null };
        case "link":
          if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
            e = Sf(a.href);
            var f = He(o).hoistableStyles, d = f.get(e);
            if (!d && (o = o.ownerDocument || o, d = {
              type: "stylesheet",
              instance: null,
              count: 0,
              state: { loading: cd, preload: null }
            }, f.set(e, d), (f = o.querySelector(
              ro(e)
            )) && !f._p && (d.instance = f, d.state.loading = E0 | ai), !ni.has(e))) {
              var h = {
                rel: "preload",
                as: "style",
                href: a.href,
                crossOrigin: a.crossOrigin,
                integrity: a.integrity,
                media: a.media,
                hrefLang: a.hrefLang,
                referrerPolicy: a.referrerPolicy
              };
              ni.set(e, h), f || Rv(
                o,
                e,
                h,
                d.state
              );
            }
            if (t && i === null)
              throw a = `

  - ` + Os(t) + `
  + ` + Os(a), Error(
                "Expected <link> not to update to be updated to a stylesheet with precedence. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key." + a
              );
            return d;
          }
          if (t && i !== null)
            throw a = `

  - ` + Os(t) + `
  + ` + Os(a), Error(
              "Expected stylesheet with precedence to not be updated to a different kind of <link>. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key." + a
            );
          return null;
        case "script":
          return t = a.async, a = a.src, typeof a == "string" && t && typeof t != "function" && typeof t != "symbol" ? (a = bf(a), t = He(o).hoistableScripts, i = t.get(a), i || (i = {
            type: "script",
            instance: null,
            count: 0,
            state: null
          }, t.set(a, i)), i) : { type: "void", instance: null, count: 0, state: null };
        default:
          throw Error(
            'getResource encountered a type it did not expect: "' + e + '". this is a bug in React.'
          );
      }
    }
    function Os(e) {
      var t = 0, a = "<link";
      return typeof e.rel == "string" ? (t++, a += ' rel="' + e.rel + '"') : In.call(e, "rel") && (t++, a += ' rel="' + (e.rel === null ? "null" : "invalid type " + typeof e.rel) + '"'), typeof e.href == "string" ? (t++, a += ' href="' + e.href + '"') : In.call(e, "href") && (t++, a += ' href="' + (e.href === null ? "null" : "invalid type " + typeof e.href) + '"'), typeof e.precedence == "string" ? (t++, a += ' precedence="' + e.precedence + '"') : In.call(e, "precedence") && (t++, a += " precedence={" + (e.precedence === null ? "null" : "invalid type " + typeof e.precedence) + "}"), Object.getOwnPropertyNames(e).length > t && (a += " ..."), a + " />";
    }
    function Sf(e) {
      return 'href="' + Zt(e) + '"';
    }
    function ro(e) {
      return 'link[rel="stylesheet"][' + e + "]";
    }
    function dp(e) {
      return Je({}, e, {
        "data-precedence": e.precedence,
        precedence: null
      });
    }
    function Rv(e, t, a, i) {
      e.querySelector(
        'link[rel="preload"][as="style"][' + t + "]"
      ) ? i.loading = E0 : (t = e.createElement("link"), i.preload = t, t.addEventListener("load", function() {
        return i.loading |= E0;
      }), t.addEventListener("error", function() {
        return i.loading |= hE;
      }), ft(t, "link", a), ye(t), e.head.appendChild(t));
    }
    function bf(e) {
      return '[src="' + Zt(e) + '"]';
    }
    function so(e) {
      return "script[async]" + e;
    }
    function Dh(e, t, a) {
      if (t.count++, t.instance === null)
        switch (t.type) {
          case "style":
            var i = e.querySelector(
              'style[data-href~="' + Zt(a.href) + '"]'
            );
            if (i)
              return t.instance = i, ye(i), i;
            var o = Je({}, a, {
              "data-href": a.href,
              "data-precedence": a.precedence,
              href: null,
              precedence: null
            });
            return i = (e.ownerDocument || e).createElement("style"), ye(i), ft(i, "style", o), Rh(i, a.precedence, e), t.instance = i;
          case "stylesheet":
            o = Sf(a.href);
            var f = e.querySelector(
              ro(o)
            );
            if (f)
              return t.state.loading |= ai, t.instance = f, ye(f), f;
            i = dp(a), (o = ni.get(o)) && hp(i, o), f = (e.ownerDocument || e).createElement("link"), ye(f);
            var d = f;
            return d._p = new Promise(function(h, y) {
              d.onload = h, d.onerror = y;
            }), ft(f, "link", i), t.state.loading |= ai, Rh(f, a.precedence, e), t.instance = f;
          case "script":
            return f = bf(a.src), (o = e.querySelector(
              so(f)
            )) ? (t.instance = o, ye(o), o) : (i = a, (o = ni.get(f)) && (i = Je({}, a), ho(i, o)), e = e.ownerDocument || e, o = e.createElement("script"), ye(o), ft(o, "link", i), e.head.appendChild(o), t.instance = o);
          case "void":
            return null;
          default:
            throw Error(
              'acquireResource encountered a resource type it did not expect: "' + t.type + '". this is a bug in React.'
            );
        }
      else
        t.type === "stylesheet" && (t.state.loading & ai) === cd && (i = t.instance, t.state.loading |= ai, Rh(i, a.precedence, e));
      return t.instance;
    }
    function Rh(e, t, a) {
      for (var i = a.querySelectorAll(
        'link[rel="stylesheet"][data-precedence],style[data-precedence]'
      ), o = i.length ? i[i.length - 1] : null, f = o, d = 0; d < i.length; d++) {
        var h = i[d];
        if (h.dataset.precedence === t) f = h;
        else if (f !== o) break;
      }
      f ? f.parentNode.insertBefore(e, f.nextSibling) : (t = a.nodeType === 9 ? a.head : a, t.insertBefore(e, t.firstChild));
    }
    function hp(e, t) {
      e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
    }
    function ho(e, t) {
      e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
    }
    function Mv(e, t, a) {
      if (Bg === null) {
        var i = /* @__PURE__ */ new Map(), o = Bg = /* @__PURE__ */ new Map();
        o.set(a, i);
      } else
        o = Bg, i = o.get(a), i || (i = /* @__PURE__ */ new Map(), o.set(a, i));
      if (i.has(e)) return i;
      for (i.set(e, null), a = a.getElementsByTagName(e), o = 0; o < a.length; o++) {
        var f = a[o];
        if (!(f[js] || f[Fl] || e === "link" && f.getAttribute("rel") === "stylesheet") && f.namespaceURI !== nt) {
          var d = f.getAttribute(t) || "";
          d = e + d;
          var h = i.get(d);
          h ? h.push(f) : i.set(d, [f]);
        }
      }
      return i;
    }
    function mp(e, t, a) {
      e = e.ownerDocument || e, e.head.insertBefore(
        a,
        t === "title" ? e.querySelector("head > title") : null
      );
    }
    function at(e, t, a) {
      var i = !a.ancestorInfo.containerTagInScope;
      if (a.context === Rm || t.itemProp != null)
        return !i || t.itemProp == null || e !== "meta" && e !== "title" && e !== "style" && e !== "link" && e !== "script" || console.error(
          "Cannot render a <%s> outside the main document if it has an `itemProp` prop. `itemProp` suggests the tag belongs to an `itemScope` which can appear anywhere in the DOM. If you were intending for React to hoist this <%s> remove the `itemProp` prop. Otherwise, try moving this tag into the <head> or <body> of the Document.",
          e,
          e
        ), !1;
      switch (e) {
        case "meta":
        case "title":
          return !0;
        case "style":
          if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "") {
            i && console.error(
              'Cannot render a <style> outside the main document without knowing its precedence and a unique href key. React can hoist and deduplicate <style> tags if you provide a `precedence` prop along with an `href` prop that does not conflict with the `href` values used in any other hoisted <style> or <link rel="stylesheet" ...> tags.  Note that hoisting <style> tags is considered an advanced feature that most will not use directly. Consider moving the <style> tag to the <head> or consider adding a `precedence="default"` and `href="some unique resource identifier"`.'
            );
            break;
          }
          return !0;
        case "link":
          if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError) {
            if (t.rel === "stylesheet" && typeof t.precedence == "string") {
              e = t.href;
              var o = t.onError, f = t.disabled;
              a = [], t.onLoad && a.push("`onLoad`"), o && a.push("`onError`"), f != null && a.push("`disabled`"), o = Va(a, "and"), o += a.length === 1 ? " prop" : " props", f = a.length === 1 ? "an " + o : "the " + o, a.length && console.error(
                'React encountered a <link rel="stylesheet" href="%s" ... /> with a `precedence` prop that also included %s. The presence of loading and error handlers indicates an intent to manage the stylesheet loading state from your from your Component code and React will not hoist or deduplicate this stylesheet. If your intent was to have React hoist and deduplciate this stylesheet using the `precedence` prop remove the %s, otherwise remove the `precedence` prop.',
                e,
                f,
                o
              );
            }
            i && (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" ? console.error(
              "Cannot render a <link> outside the main document without a `rel` and `href` prop. Try adding a `rel` and/or `href` prop to this <link> or moving the link into the <head> tag"
            ) : (t.onError || t.onLoad) && console.error(
              "Cannot render a <link> with onLoad or onError listeners outside the main document. Try removing onLoad={...} and onError={...} or moving it into the root <head> tag or somewhere in the <body>."
            ));
            break;
          }
          return t.rel === "stylesheet" ? (e = t.precedence, t = t.disabled, typeof e != "string" && i && console.error(
            'Cannot render a <link rel="stylesheet" /> outside the main document without knowing its precedence. Consider adding precedence="default" or moving it into the root <head> tag.'
          ), typeof e == "string" && t == null) : !0;
        case "script":
          if (e = t.async && typeof t.async != "function" && typeof t.async != "symbol", !e || t.onLoad || t.onError || !t.src || typeof t.src != "string") {
            i && (e ? t.onLoad || t.onError ? console.error(
              "Cannot render a <script> with onLoad or onError listeners outside the main document. Try removing onLoad={...} and onError={...} or moving it into the root <head> tag or somewhere in the <body>."
            ) : console.error(
              "Cannot render a <script> outside the main document without `async={true}` and a non-empty `src` prop. Ensure there is a valid `src` and either make the script async or move it into the root <head> tag or somewhere in the <body>."
            ) : console.error(
              'Cannot render a sync or defer <script> outside the main document without knowing its order. Try adding async="" or moving it into the root <head> tag.'
            ));
            break;
          }
          return !0;
        case "noscript":
        case "template":
          i && console.error(
            "Cannot render <%s> outside the main document. Try moving it into the root <head> tag.",
            e
          );
      }
      return !1;
    }
    function Mh(e) {
      return !(e.type === "stylesheet" && (e.state.loading & mE) === cd);
    }
    function Ch(e, t, a, i) {
      if (a.type === "stylesheet" && (typeof i.media != "string" || matchMedia(i.media).matches !== !1) && (a.state.loading & ai) === cd) {
        if (a.instance === null) {
          var o = Sf(i.href), f = t.querySelector(
            ro(o)
          );
          if (f) {
            t = f._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = zs.bind(e), t.then(e, e)), a.state.loading |= ai, a.instance = f, ye(f);
            return;
          }
          f = t.ownerDocument || t, i = dp(i), (o = ni.get(o)) && hp(i, o), f = f.createElement("link"), ye(f);
          var d = f;
          d._p = new Promise(function(h, y) {
            d.onload = h, d.onerror = y;
          }), ft(f, "link", i), a.instance = f;
        }
        e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(a, t), (t = a.state.preload) && (a.state.loading & mE) === cd && (e.count++, a = zs.bind(e), t.addEventListener("load", a), t.addEventListener("error", a));
      }
    }
    function yp(e, t) {
      return e.stylesheets && e.count === 0 && Ef(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(a) {
        var i = setTimeout(function() {
          if (e.stylesheets && Ef(e, e.stylesheets), e.unsuspend) {
            var f = e.unsuspend;
            e.unsuspend = null, f();
          }
        }, sA + t);
        0 < e.imgBytes && y1 === 0 && (y1 = 125 * yv() * hA);
        var o = setTimeout(
          function() {
            if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && Ef(e, e.stylesheets), e.unsuspend)) {
              var f = e.unsuspend;
              e.unsuspend = null, f();
            }
          },
          (e.imgBytes > y1 ? 50 : dA) + t
        );
        return e.unsuspend = a, function() {
          e.unsuspend = null, clearTimeout(i), clearTimeout(o);
        };
      } : null;
    }
    function zs() {
      if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
        if (this.stylesheets)
          Ef(this, this.stylesheets);
        else if (this.unsuspend) {
          var e = this.unsuspend;
          this.unsuspend = null, e();
        }
      }
    }
    function Ef(e, t) {
      e.stylesheets = null, e.unsuspend !== null && (e.count++, xg = /* @__PURE__ */ new Map(), t.forEach(_s, e), xg = null, zs.call(e));
    }
    function _s(e, t) {
      if (!(t.state.loading & ai)) {
        var a = xg.get(e);
        if (a) var i = a.get(p1);
        else {
          a = /* @__PURE__ */ new Map(), xg.set(e, a);
          for (var o = e.querySelectorAll(
            "link[data-precedence],style[data-precedence]"
          ), f = 0; f < o.length; f++) {
            var d = o[f];
            (d.nodeName === "LINK" || d.getAttribute("media") !== "not all") && (a.set(d.dataset.precedence, d), i = d);
          }
          i && a.set(p1, i);
        }
        o = t.instance, d = o.getAttribute("data-precedence"), f = a.get(d) || i, f === i && a.set(p1, o), a.set(d, o), this.count++, i = zs.bind(this), o.addEventListener("load", i), o.addEventListener("error", i), f ? f.parentNode.insertBefore(o, f.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(o, e.firstChild)), t.state.loading |= ai;
      }
    }
    function Uh(e, t, a, i, o, f, d, h, y) {
      for (this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = id, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Gi(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Gi(0), this.hiddenUpdates = Gi(null), this.identifierPrefix = i, this.onUncaughtError = o, this.onCaughtError = f, this.onRecoverableError = d, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = y, this.incompleteTransitions = /* @__PURE__ */ new Map(), this.passiveEffectDuration = this.effectDuration = -0, this.memoizedUpdaters = /* @__PURE__ */ new Set(), e = this.pendingUpdatersLaneMap = [], t = 0; 31 > t; t++) e.push(/* @__PURE__ */ new Set());
      this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
    }
    function Cv(e, t, a, i, o, f, d, h, y, p, _, R) {
      return e = new Uh(
        e,
        t,
        a,
        d,
        y,
        p,
        _,
        R,
        h
      ), t = YT, f === !0 && (t |= Ja | Ui), t |= $e, f = U(3, null, null, t), e.current = f, f.stateNode = e, t = ny(), Gc(t), e.pooledCache = t, Gc(t), f.memoizedState = {
        element: i,
        isDehydrated: a,
        cache: t
      }, Tu(f), e;
    }
    function pp(e) {
      return e ? (e = Bf, e) : Bf;
    }
    function vp(e, t, a, i, o, f) {
      if (oa && typeof oa.onScheduleFiberRoot == "function")
        try {
          oa.onScheduleFiberRoot(Ci, i, a);
        } catch (d) {
          Zu || (Zu = !0, console.error(
            "React instrumentation encountered an error: %o",
            d
          ));
        }
      o = pp(o), i.context === null ? i.context = o : i.pendingContext = o, Nn && fn !== null && !SE && (SE = !0, console.error(
        `Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`,
        re(fn) || "Unknown"
      )), i = Au(t), i.payload = { element: a }, f = f === void 0 ? null : f, f !== null && (typeof f != "function" && console.error(
        "Expected the last optional `callback` argument to be a function. Instead received: %s.",
        f
      ), i.callback = f), a = pa(e, i, t), a !== null && (wn(t, "root.render()", null), ll(a, e, t), ko(a, e, t));
    }
    function Uv(e, t) {
      if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var a = e.retryLane;
        e.retryLane = a !== 0 && a < t ? a : t;
      }
    }
    function Hh(e, t) {
      Uv(e, t), (e = e.alternate) && Uv(e, t);
    }
    function gp(e) {
      if (e.tag === 13 || e.tag === 31) {
        var t = Xl(e, 67108864);
        t !== null && ll(t, e, 67108864), Hh(e, 67108864);
      }
    }
    function Ct(e) {
      if (e.tag === 13 || e.tag === 31) {
        var t = Jl(e);
        t = pl(t);
        var a = Xl(e, t);
        a !== null && ll(a, e, t), Hh(e, t);
      }
    }
    function Sp() {
      return fn;
    }
    function Kl(e, t, a, i) {
      var o = w.T;
      w.T = null;
      var f = Ot.p;
      try {
        Ot.p = zl, Nh(e, t, a, i);
      } finally {
        Ot.p = f, w.T = o;
      }
    }
    function lS(e, t, a, i) {
      var o = w.T;
      w.T = null;
      var f = Ot.p;
      try {
        Ot.p = Wl, Nh(e, t, a, i);
      } finally {
        Ot.p = f, w.T = o;
      }
    }
    function Nh(e, t, a, i) {
      if (Yg) {
        var o = bp(i);
        if (o === null)
          Wt(
            e,
            t,
            i,
            qg,
            a
          ), Rs(e, i);
        else if (Hv(
          o,
          e,
          t,
          a,
          i
        ))
          i.stopPropagation();
        else if (Rs(e, i), t & 4 && -1 < yA.indexOf(e)) {
          for (; o !== null; ) {
            var f = le(o);
            if (f !== null)
              switch (f.tag) {
                case 3:
                  if (f = f.stateNode, f.current.memoizedState.isDehydrated) {
                    var d = iu(f.pendingLanes);
                    if (d !== 0) {
                      var h = f;
                      for (h.pendingLanes |= 2, h.entangledLanes |= 2; d; ) {
                        var y = 1 << 31 - kl(d);
                        h.entanglements[1] |= y, d &= ~y;
                      }
                      Ea(f), (yt & (Pl | au)) === da && (bg = rl() + Kb, mf(0));
                    }
                  }
                  break;
                case 31:
                case 13:
                  h = Xl(f, 2), h !== null && ll(h, f, 2), ao(), Hh(f, 2);
              }
            if (f = bp(i), f === null && Wt(
              e,
              t,
              i,
              qg,
              a
            ), f === o) break;
            o = f;
          }
          o !== null && i.stopPropagation();
        } else
          Wt(
            e,
            t,
            i,
            null,
            a
          );
      }
    }
    function bp(e) {
      return e = hr(e), Ds(e);
    }
    function Ds(e) {
      if (qg = null, e = I(e), e !== null) {
        var t = Ze(e);
        if (t === null) e = null;
        else {
          var a = t.tag;
          if (a === 13) {
            if (e = St(t), e !== null) return e;
            e = null;
          } else if (a === 31) {
            if (e = Lt(t), e !== null) return e;
            e = null;
          } else if (a === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
              return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null;
          } else t !== e && (e = null);
        }
      }
      return qg = e, null;
    }
    function Bh(e) {
      switch (e) {
        case "beforetoggle":
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "toggle":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return zl;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return Wl;
        case "message":
          switch (cS()) {
            case Jh:
              return zl;
            case Kh:
              return Wl;
            case vo:
            case Yv:
              return rn;
            case Bs:
              return yc;
            default:
              return rn;
          }
        default:
          return rn;
      }
    }
    function Rs(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          Wf = null;
          break;
        case "dragenter":
        case "dragleave":
          Ff = null;
          break;
        case "mouseover":
        case "mouseout":
          If = null;
          break;
        case "pointerover":
        case "pointerout":
          A0.delete(t.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          O0.delete(t.pointerId);
      }
    }
    function Tf(e, t, a, i, o, f) {
      return e === null || e.nativeEvent !== f ? (e = {
        blockedOn: t,
        domEventName: a,
        eventSystemFlags: i,
        nativeEvent: f,
        targetContainers: [o]
      }, t !== null && (t = le(t), t !== null && gp(t)), e) : (e.eventSystemFlags |= i, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
    }
    function Hv(e, t, a, i, o) {
      switch (t) {
        case "focusin":
          return Wf = Tf(
            Wf,
            e,
            t,
            a,
            i,
            o
          ), !0;
        case "dragenter":
          return Ff = Tf(
            Ff,
            e,
            t,
            a,
            i,
            o
          ), !0;
        case "mouseover":
          return If = Tf(
            If,
            e,
            t,
            a,
            i,
            o
          ), !0;
        case "pointerover":
          var f = o.pointerId;
          return A0.set(
            f,
            Tf(
              A0.get(f) || null,
              e,
              t,
              a,
              i,
              o
            )
          ), !0;
        case "gotpointercapture":
          return f = o.pointerId, O0.set(
            f,
            Tf(
              O0.get(f) || null,
              e,
              t,
              a,
              i,
              o
            )
          ), !0;
      }
      return !1;
    }
    function xh(e) {
      var t = I(e.target);
      if (t !== null) {
        var a = Ze(t);
        if (a !== null) {
          if (t = a.tag, t === 13) {
            if (t = St(a), t !== null) {
              e.blockedOn = t, v(e.priority, function() {
                Ct(a);
              });
              return;
            }
          } else if (t === 31) {
            if (t = Lt(a), t !== null) {
              e.blockedOn = t, v(e.priority, function() {
                Ct(a);
              });
              return;
            }
          } else if (t === 3 && a.stateNode.current.memoizedState.isDehydrated) {
            e.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
            return;
          }
        }
      }
      e.blockedOn = null;
    }
    function Af(e) {
      if (e.blockedOn !== null) return !1;
      for (var t = e.targetContainers; 0 < t.length; ) {
        var a = bp(e.nativeEvent);
        if (a === null) {
          a = e.nativeEvent;
          var i = new a.constructor(
            a.type,
            a
          ), o = i;
          Bp !== null && console.error(
            "Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."
          ), Bp = o, a.target.dispatchEvent(i), Bp === null && console.error(
            "Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."
          ), Bp = null;
        } else
          return t = le(a), t !== null && gp(t), e.blockedOn = a, !1;
        t.shift();
      }
      return !0;
    }
    function Nv(e, t, a) {
      Af(e) && a.delete(t);
    }
    function Bv() {
      v1 = !1, Wf !== null && Af(Wf) && (Wf = null), Ff !== null && Af(Ff) && (Ff = null), If !== null && Af(If) && (If = null), A0.forEach(Nv), O0.forEach(Nv);
    }
    function jh(e, t) {
      e.blockedOn === t && (e.blockedOn = null, v1 || (v1 = !0, fl.unstable_scheduleCallback(
        fl.unstable_NormalPriority,
        Bv
      )));
    }
    function Ep(e) {
      Gg !== e && (Gg = e, fl.unstable_scheduleCallback(
        fl.unstable_NormalPriority,
        function() {
          Gg === e && (Gg = null);
          for (var t = 0; t < e.length; t += 3) {
            var a = e[t], i = e[t + 1], o = e[t + 2];
            if (typeof i != "function") {
              if (Ds(i || a) === null)
                continue;
              break;
            }
            var f = le(a);
            f !== null && (e.splice(t, 3), t -= 3, a = {
              pending: !0,
              data: o,
              method: a.method,
              action: i
            }, Object.freeze(a), tf(
              f,
              a,
              i,
              o
            ));
          }
        }
      ));
    }
    function Of(e) {
      function t(y) {
        return jh(y, e);
      }
      Wf !== null && jh(Wf, e), Ff !== null && jh(Ff, e), If !== null && jh(If, e), A0.forEach(t), O0.forEach(t);
      for (var a = 0; a < Pf.length; a++) {
        var i = Pf[a];
        i.blockedOn === e && (i.blockedOn = null);
      }
      for (; 0 < Pf.length && (a = Pf[0], a.blockedOn === null); )
        xh(a), a.blockedOn === null && Pf.shift();
      if (a = (e.ownerDocument || e).$$reactFormReplay, a != null)
        for (i = 0; i < a.length; i += 3) {
          var o = a[i], f = a[i + 1], d = o[fa] || null;
          if (typeof f == "function")
            d || Ep(a);
          else if (d) {
            var h = null;
            if (f && f.hasAttribute("formAction")) {
              if (o = f, d = f[fa] || null)
                h = d.formAction;
              else if (Ds(o) !== null) continue;
            } else h = d.action;
            typeof h == "function" ? a[i + 1] = h : (a.splice(i, 3), i -= 3), Ep(a);
          }
        }
    }
    function xv() {
      function e(f) {
        f.canIntercept && f.info === "react-transition" && f.intercept({
          handler: function() {
            return new Promise(function(d) {
              return o = d;
            });
          },
          focusReset: "manual",
          scroll: "manual"
        });
      }
      function t() {
        o !== null && (o(), o = null), i || setTimeout(a, 20);
      }
      function a() {
        if (!i && !navigation.transition) {
          var f = navigation.currentEntry;
          f && f.url != null && navigation.navigate(f.url, {
            state: f.getState(),
            info: "react-transition",
            history: "replace"
          });
        }
      }
      if (typeof navigation == "object") {
        var i = !1, o = null;
        return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(a, 100), function() {
          i = !0, navigation.removeEventListener("navigate", e), navigation.removeEventListener(
            "navigatesuccess",
            t
          ), navigation.removeEventListener(
            "navigateerror",
            t
          ), o !== null && (o(), o = null);
        };
      }
    }
    function Lu(e) {
      this._internalRoot = e;
    }
    function Ms(e) {
      this._internalRoot = e;
    }
    function Tp(e) {
      e[xn] && (e._reactRootContainer ? console.error(
        "You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported."
      ) : console.error(
        "You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."
      ));
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var fl = KE(), Ap = Um(), aS = $E(), Je = Object.assign, Op = /* @__PURE__ */ Symbol.for("react.element"), Un = /* @__PURE__ */ Symbol.for("react.transitional.element"), zf = /* @__PURE__ */ Symbol.for("react.portal"), $l = /* @__PURE__ */ Symbol.for("react.fragment"), _f = /* @__PURE__ */ Symbol.for("react.strict_mode"), Yh = /* @__PURE__ */ Symbol.for("react.profiler"), qh = /* @__PURE__ */ Symbol.for("react.consumer"), Fn = /* @__PURE__ */ Symbol.for("react.context"), Di = /* @__PURE__ */ Symbol.for("react.forward_ref"), Za = /* @__PURE__ */ Symbol.for("react.suspense"), Gh = /* @__PURE__ */ Symbol.for("react.suspense_list"), mo = /* @__PURE__ */ Symbol.for("react.memo"), ml = /* @__PURE__ */ Symbol.for("react.lazy"), zp = /* @__PURE__ */ Symbol.for("react.activity"), nS = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), yo = Symbol.iterator, jv = /* @__PURE__ */ Symbol.for("react.client.reference"), Ol = Array.isArray, w = Ap.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Ot = aS.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, uS = Object.freeze({
      pending: !1,
      data: null,
      method: null,
      action: null
    }), _p = [], Dp = [], Ri = -1, Mi = bt(null), Vu = bt(null), Hn = bt(null), Cs = bt(null), Us = 0, po, Df, Rp, Hs, wh, Xh, Ns;
    O.__reactDisabledLog = !0;
    var Qh, Mp, Cp = !1, Lh = new (typeof WeakMap == "function" ? WeakMap : Map)(), fn = null, Nn = !1, In = Object.prototype.hasOwnProperty, Rf = fl.unstable_scheduleCallback, Vh = fl.unstable_cancelCallback, Zh = fl.unstable_shouldYield, iS = fl.unstable_requestPaint, rl = fl.unstable_now, cS = fl.unstable_getCurrentPriorityLevel, Jh = fl.unstable_ImmediatePriority, Kh = fl.unstable_UserBlockingPriority, vo = fl.unstable_NormalPriority, Yv = fl.unstable_LowPriority, Bs = fl.unstable_IdlePriority, qv = fl.log, Gv = fl.unstable_setDisableYieldValue, Ci = null, oa = null, Zu = !1, Bn = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u", kl = Math.clz32 ? Math.clz32 : Bo, $h = Math.log, Up = Math.LN2, xs = 256, Mf = 262144, Pn = 4194304, zl = 2, Wl = 8, rn = 32, yc = 268435456, Aa = Math.random().toString(36).slice(2), Fl = "__reactFiber$" + Aa, fa = "__reactProps$" + Aa, xn = "__reactContainer$" + Aa, Hp = "__reactEvents$" + Aa, wv = "__reactListeners$" + Aa, kh = "__reactHandles$" + Aa, Np = "__reactResources$" + Aa, js = "__reactMarker$" + Aa, Ys = /* @__PURE__ */ new Set(), Ju = {}, Wh = {}, Cf = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    }, Xv = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), Fh = {}, qs = {}, Qv = /[\n"\\]/g, Lv = !1, Gs = !1, l = !1, n = !1, u = !1, c = !1, r = ["value", "defaultValue"], s = !1, m = /["'&<>\n\t]|^\s|\s$/, g = "address applet area article aside base basefont bgsound blockquote body br button caption center col colgroup dd details dir div dl dt embed fieldset figcaption figure footer form frame frameset h1 h2 h3 h4 h5 h6 head header hgroup hr html iframe img input isindex li link listing main marquee menu menuitem meta nav noembed noframes noscript object ol p param plaintext pre script section select source style summary table tbody td template textarea tfoot th thead title tr track ul wbr xmp".split(
      " "
    ), T = "applet caption html table td th marquee object template foreignObject desc title".split(
      " "
    ), N = T.concat(["button"]), Z = "dd dt li option optgroup p rp rt".split(" "), W = {
      current: null,
      formTag: null,
      aTagInScope: null,
      buttonTagInScope: null,
      nobrTagInScope: null,
      pTagInButtonScope: null,
      listItemTagAutoclosing: null,
      dlItemTagAutoclosing: null,
      containerTagInScope: null,
      implicitRootScope: !1
    }, x = {}, G = {
      animation: "animationDelay animationDirection animationDuration animationFillMode animationIterationCount animationName animationPlayState animationTimingFunction".split(
        " "
      ),
      background: "backgroundAttachment backgroundClip backgroundColor backgroundImage backgroundOrigin backgroundPositionX backgroundPositionY backgroundRepeat backgroundSize".split(
        " "
      ),
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: "borderBottomColor borderBottomStyle borderBottomWidth borderImageOutset borderImageRepeat borderImageSlice borderImageSource borderImageWidth borderLeftColor borderLeftStyle borderLeftWidth borderRightColor borderRightStyle borderRightWidth borderTopColor borderTopStyle borderTopWidth".split(
        " "
      ),
      borderBlockEnd: [
        "borderBlockEndColor",
        "borderBlockEndStyle",
        "borderBlockEndWidth"
      ],
      borderBlockStart: [
        "borderBlockStartColor",
        "borderBlockStartStyle",
        "borderBlockStartWidth"
      ],
      borderBottom: [
        "borderBottomColor",
        "borderBottomStyle",
        "borderBottomWidth"
      ],
      borderColor: [
        "borderBottomColor",
        "borderLeftColor",
        "borderRightColor",
        "borderTopColor"
      ],
      borderImage: [
        "borderImageOutset",
        "borderImageRepeat",
        "borderImageSlice",
        "borderImageSource",
        "borderImageWidth"
      ],
      borderInlineEnd: [
        "borderInlineEndColor",
        "borderInlineEndStyle",
        "borderInlineEndWidth"
      ],
      borderInlineStart: [
        "borderInlineStartColor",
        "borderInlineStartStyle",
        "borderInlineStartWidth"
      ],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: [
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
        "borderTopLeftRadius",
        "borderTopRightRadius"
      ],
      borderRight: [
        "borderRightColor",
        "borderRightStyle",
        "borderRightWidth"
      ],
      borderStyle: [
        "borderBottomStyle",
        "borderLeftStyle",
        "borderRightStyle",
        "borderTopStyle"
      ],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: [
        "borderBottomWidth",
        "borderLeftWidth",
        "borderRightWidth",
        "borderTopWidth"
      ],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: "fontFamily fontFeatureSettings fontKerning fontLanguageOverride fontSize fontSizeAdjust fontStretch fontStyle fontVariant fontVariantAlternates fontVariantCaps fontVariantEastAsian fontVariantLigatures fontVariantNumeric fontVariantPosition fontWeight lineHeight".split(
        " "
      ),
      fontVariant: "fontVariantAlternates fontVariantCaps fontVariantEastAsian fontVariantLigatures fontVariantNumeric fontVariantPosition".split(
        " "
      ),
      gap: ["columnGap", "rowGap"],
      grid: "gridAutoColumns gridAutoFlow gridAutoRows gridTemplateAreas gridTemplateColumns gridTemplateRows".split(
        " "
      ),
      gridArea: [
        "gridColumnEnd",
        "gridColumnStart",
        "gridRowEnd",
        "gridRowStart"
      ],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: [
        "gridTemplateAreas",
        "gridTemplateColumns",
        "gridTemplateRows"
      ],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: "maskClip maskComposite maskImage maskMode maskOrigin maskPositionX maskPositionY maskRepeat maskSize".split(
        " "
      ),
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: [
        "textDecorationColor",
        "textDecorationLine",
        "textDecorationStyle"
      ],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: [
        "transitionDelay",
        "transitionDuration",
        "transitionProperty",
        "transitionTimingFunction"
      ],
      wordWrap: ["overflowWrap"]
    }, he = /([A-Z])/g, _e = /^ms-/, Nt = /^(?:webkit|moz|o)[A-Z]/, C = /^-ms-/, D = /-(.)/g, H = /;\s*$/, K = {}, Se = {}, mt = !1, pe = !1, Le = new Set(
      "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
        " "
      )
    ), Ie = "http://www.w3.org/1998/Math/MathML", nt = "http://www.w3.org/2000/svg", pc = /* @__PURE__ */ new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"]
    ]), Ih = {
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      fetchpriority: "fetchPriority",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      inert: "inert",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      popover: "popover",
      popovertarget: "popoverTarget",
      popovertargetaction: "popoverTargetAction",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      transformorigin: "transformOrigin",
      "transform-origin": "transformOrigin",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, b1 = {
      "aria-current": 0,
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      "aria-hidden": 0,
      "aria-invalid": 0,
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0,
      "aria-braillelabel": 0,
      "aria-brailleroledescription": 0,
      "aria-colindextext": 0,
      "aria-rowindextext": 0
    }, Ph = {}, kE = RegExp(
      "^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), WE = RegExp(
      "^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), E1 = !1, sn = {}, T1 = /^on./, FE = /^on[^A-Z]/, IE = RegExp(
      "^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), PE = RegExp(
      "^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), eT = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i, Bp = null, em = null, tm = null, oS = !1, vc = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), fS = !1;
    if (vc)
      try {
        var xp = {};
        Object.defineProperty(xp, "passive", {
          get: function() {
            fS = !0;
          }
        }), window.addEventListener("test", xp, xp), window.removeEventListener("test", xp, xp);
      } catch {
        fS = !1;
      }
    var Uf = null, rS = null, Vv = null, ws = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, Zv = nl(ws), jp = Je({}, ws, { view: 0, detail: 0 }), tT = nl(jp), sS, dS, Yp, Jv = Je({}, jp, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Hc,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (e !== Yp && (Yp && e.type === "mousemove" ? (sS = e.screenX - Yp.screenX, dS = e.screenY - Yp.screenY) : dS = sS = 0, Yp = e), sS);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : dS;
      }
    }), A1 = nl(Jv), lT = Je({}, Jv, { dataTransfer: 0 }), aT = nl(lT), nT = Je({}, jp, { relatedTarget: 0 }), hS = nl(nT), uT = Je({}, ws, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), iT = nl(uT), cT = Je({}, ws, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), oT = nl(cT), fT = Je({}, ws, { data: 0 }), O1 = nl(
      fT
    ), rT = O1, sT = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    }, dT = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    }, hT = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    }, mT = Je({}, jp, {
      key: function(e) {
        if (e.key) {
          var t = sT[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress" ? (e = Xo(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? dT[e.keyCode] || "Unidentified" : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Hc,
      charCode: function(e) {
        return e.type === "keypress" ? Xo(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? Xo(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), yT = nl(mT), pT = Je({}, Jv, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), z1 = nl(pT), vT = Je({}, jp, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Hc
    }), gT = nl(vT), ST = Je({}, ws, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), bT = nl(ST), ET = Je({}, Jv, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
      },
      deltaZ: 0,
      deltaMode: 0
    }), TT = nl(ET), AT = Je({}, ws, {
      newState: 0,
      oldState: 0
    }), OT = nl(AT), zT = [9, 13, 27, 32], _1 = 229, mS = vc && "CompositionEvent" in window, qp = null;
    vc && "documentMode" in document && (qp = document.documentMode);
    var _T = vc && "TextEvent" in window && !qp, D1 = vc && (!mS || qp && 8 < qp && 11 >= qp), R1 = 32, M1 = String.fromCharCode(R1), C1 = !1, lm = !1, DT = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0
    }, Gp = null, wp = null, U1 = !1;
    vc && (U1 = gd("input") && (!document.documentMode || 9 < document.documentMode));
    var dn = typeof Object.is == "function" ? Object.is : Y0, RT = vc && "documentMode" in document && 11 >= document.documentMode, am = null, yS = null, Xp = null, pS = !1, nm = {
      animationend: Nc("Animation", "AnimationEnd"),
      animationiteration: Nc("Animation", "AnimationIteration"),
      animationstart: Nc("Animation", "AnimationStart"),
      transitionrun: Nc("Transition", "TransitionRun"),
      transitionstart: Nc("Transition", "TransitionStart"),
      transitioncancel: Nc("Transition", "TransitionCancel"),
      transitionend: Nc("Transition", "TransitionEnd")
    }, vS = {}, H1 = {};
    vc && (H1 = document.createElement("div").style, "AnimationEvent" in window || (delete nm.animationend.animation, delete nm.animationiteration.animation, delete nm.animationstart.animation), "TransitionEvent" in window || delete nm.transitionend.transition);
    var N1 = Bc("animationend"), B1 = Bc("animationiteration"), x1 = Bc("animationstart"), MT = Bc("transitionrun"), CT = Bc("transitionstart"), UT = Bc("transitioncancel"), j1 = Bc("transitionend"), Y1 = /* @__PURE__ */ new Map(), gS = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
    gS.push("scrollEnd");
    var q1 = 0;
    if (typeof performance == "object" && typeof performance.now == "function")
      var HT = performance, G1 = function() {
        return HT.now();
      };
    else {
      var NT = Date;
      G1 = function() {
        return NT.now();
      };
    }
    var SS = typeof reportError == "function" ? reportError : function(e) {
      if (typeof window == "object" && typeof window.ErrorEvent == "function") {
        var t = new window.ErrorEvent("error", {
          bubbles: !0,
          cancelable: !0,
          message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
          error: e
        });
        if (!window.dispatchEvent(t)) return;
      } else if (typeof process == "object" && typeof process.emit == "function") {
        process.emit("uncaughtException", e);
        return;
      }
      console.error(e);
    }, BT = "This object has been omitted by React in the console log to avoid sending too much data from the server. Try logging smaller or more specific objects.", Kv = 0, bS = 1, ES = 2, TS = 3, $v = "– ", kv = "+ ", w1 = "  ", Ft = typeof console < "u" && typeof console.timeStamp == "function" && typeof performance < "u" && typeof performance.measure == "function", Ku = "Components ⚛", rt = "Scheduler ⚛", dt = "Blocking", Hf = !1, go = {
      color: "primary",
      properties: null,
      tooltipText: "",
      track: Ku
    }, Nf = {
      start: -0,
      end: -0,
      detail: { devtools: go }
    }, xT = ["Changed Props", ""], X1 = "This component received deeply equal props. It might benefit from useMemo or the React Compiler in its owner.", jT = ["Changed Props", X1], Qp = 1, So = 2, $u = [], um = 0, AS = 0, Bf = {};
    Object.freeze(Bf);
    var ku = null, im = null, Ce = 0, YT = 1, $e = 2, Ja = 8, Ui = 16, qT = 32, Q1 = !1;
    try {
      var L1 = Object.preventExtensions({});
    } catch {
      Q1 = !0;
    }
    var OS = /* @__PURE__ */ new WeakMap(), cm = [], om = 0, Wv = null, Lp = 0, Wu = [], Fu = 0, Xs = null, bo = 1, Eo = "", Oa = null, It = null, ct = !1, gc = !1, eu = null, xf = null, Iu = !1, zS = Error(
      "Hydration Mismatch Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."
    ), _S = bt(null), DS = bt(null), V1 = {}, Fv = null, fm = null, rm = !1, GT = typeof AbortController < "u" ? AbortController : function() {
      var e = [], t = this.signal = {
        aborted: !1,
        addEventListener: function(a, i) {
          e.push(i);
        }
      };
      this.abort = function() {
        t.aborted = !0, e.forEach(function(a) {
          return a();
        });
      };
    }, wT = fl.unstable_scheduleCallback, XT = fl.unstable_NormalPriority, Ul = {
      $$typeof: Fn,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
      _currentRenderer: null,
      _currentRenderer2: null
    }, Hl = fl.unstable_now, Iv = console.createTask ? console.createTask : function() {
      return null;
    }, Vp = 1, Pv = 2, ra = -0, jf = -0, To = -0, Ao = null, hn = -1.1, Qs = -0, sl = -0, Oe = -1.1, De = -1.1, al = null, yl = !1, Ls = -0, Sc = -1.1, Zp = null, Yf = 0, RS = null, MS = null, Vs = -1.1, Jp = null, sm = -1.1, eg = -1.1, Oo = -0, zo = -1.1, Pu = -1.1, CS = 0, Kp = null, Z1 = null, J1 = null, qf = -1.1, Zs = null, Gf = -1.1, tg = -1.1, K1 = -0, $1 = -0, lg = 0, QT = null, k1 = 0, $p = -1.1, ag = !1, ng = !1, kp = null, US = 0, Js = 0, dm = null, W1 = w.S;
    w.S = function(e, t) {
      if (Zb = rl(), typeof t == "object" && t !== null && typeof t.then == "function") {
        if (0 > zo && 0 > Pu) {
          zo = Hl();
          var a = vf(), i = pf();
          (a !== Gf || i !== Zs) && (Gf = -1.1), qf = a, Zs = i;
        }
        F0(e, t);
      }
      W1 !== null && W1(e, t);
    };
    var Ks = bt(null), Hi = {
      recordUnsafeLifecycleWarnings: function() {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function() {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    }, Wp = [], Fp = [], Ip = [], Pp = [], e0 = [], t0 = [], $s = /* @__PURE__ */ new Set();
    Hi.recordUnsafeLifecycleWarnings = function(e, t) {
      $s.has(e.type) || (typeof t.componentWillMount == "function" && t.componentWillMount.__suppressDeprecationWarning !== !0 && Wp.push(e), e.mode & Ja && typeof t.UNSAFE_componentWillMount == "function" && Fp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && Ip.push(e), e.mode & Ja && typeof t.UNSAFE_componentWillReceiveProps == "function" && Pp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && e0.push(e), e.mode & Ja && typeof t.UNSAFE_componentWillUpdate == "function" && t0.push(e));
    }, Hi.flushPendingUnsafeLifecycleWarnings = function() {
      var e = /* @__PURE__ */ new Set();
      0 < Wp.length && (Wp.forEach(function(h) {
        e.add(
          re(h) || "Component"
        ), $s.add(h.type);
      }), Wp = []);
      var t = /* @__PURE__ */ new Set();
      0 < Fp.length && (Fp.forEach(function(h) {
        t.add(
          re(h) || "Component"
        ), $s.add(h.type);
      }), Fp = []);
      var a = /* @__PURE__ */ new Set();
      0 < Ip.length && (Ip.forEach(function(h) {
        a.add(
          re(h) || "Component"
        ), $s.add(h.type);
      }), Ip = []);
      var i = /* @__PURE__ */ new Set();
      0 < Pp.length && (Pp.forEach(
        function(h) {
          i.add(
            re(h) || "Component"
          ), $s.add(h.type);
        }
      ), Pp = []);
      var o = /* @__PURE__ */ new Set();
      0 < e0.length && (e0.forEach(function(h) {
        o.add(
          re(h) || "Component"
        ), $s.add(h.type);
      }), e0 = []);
      var f = /* @__PURE__ */ new Set();
      if (0 < t0.length && (t0.forEach(function(h) {
        f.add(
          re(h) || "Component"
        ), $s.add(h.type);
      }), t0 = []), 0 < t.size) {
        var d = k(
          t
        );
        console.error(
          `Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`,
          d
        );
      }
      0 < i.size && (d = k(
        i
      ), console.error(
        `Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state

Please update the following components: %s`,
        d
      )), 0 < f.size && (d = k(
        f
      ), console.error(
        `Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`,
        d
      )), 0 < e.size && (d = k(e), console.warn(
        `componentWillMount has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
        d
      )), 0 < a.size && (d = k(
        a
      ), console.warn(
        `componentWillReceiveProps has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
        d
      )), 0 < o.size && (d = k(o), console.warn(
        `componentWillUpdate has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
        d
      ));
    };
    var ug = /* @__PURE__ */ new Map(), F1 = /* @__PURE__ */ new Set();
    Hi.recordLegacyContextWarning = function(e, t) {
      for (var a = null, i = e; i !== null; )
        i.mode & Ja && (a = i), i = i.return;
      a === null ? console.error(
        "Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue."
      ) : !F1.has(e.type) && (i = ug.get(a), e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], ug.set(a, i)), i.push(e));
    }, Hi.flushLegacyContextWarning = function() {
      ug.forEach(function(e) {
        if (e.length !== 0) {
          var t = e[0], a = /* @__PURE__ */ new Set();
          e.forEach(function(o) {
            a.add(re(o) || "Component"), F1.add(o.type);
          });
          var i = k(a);
          fe(t, function() {
            console.error(
              `Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://react.dev/link/legacy-context`,
              i
            );
          });
        }
      });
    }, Hi.discardPendingWarnings = function() {
      Wp = [], Fp = [], Ip = [], Pp = [], e0 = [], t0 = [], ug = /* @__PURE__ */ new Map();
    };
    var I1 = {
      react_stack_bottom_frame: function(e, t, a) {
        var i = Nn;
        Nn = !0;
        try {
          return e(t, a);
        } finally {
          Nn = i;
        }
      }
    }, HS = I1.react_stack_bottom_frame.bind(I1), P1 = {
      react_stack_bottom_frame: function(e) {
        var t = Nn;
        Nn = !0;
        try {
          return e.render();
        } finally {
          Nn = t;
        }
      }
    }, eb = P1.react_stack_bottom_frame.bind(P1), tb = {
      react_stack_bottom_frame: function(e, t) {
        try {
          t.componentDidMount();
        } catch (a) {
          pt(e, e.return, a);
        }
      }
    }, NS = tb.react_stack_bottom_frame.bind(
      tb
    ), lb = {
      react_stack_bottom_frame: function(e, t, a, i, o) {
        try {
          t.componentDidUpdate(a, i, o);
        } catch (f) {
          pt(e, e.return, f);
        }
      }
    }, ab = lb.react_stack_bottom_frame.bind(
      lb
    ), nb = {
      react_stack_bottom_frame: function(e, t) {
        var a = t.stack;
        e.componentDidCatch(t.value, {
          componentStack: a !== null ? a : ""
        });
      }
    }, LT = nb.react_stack_bottom_frame.bind(
      nb
    ), ub = {
      react_stack_bottom_frame: function(e, t, a) {
        try {
          a.componentWillUnmount();
        } catch (i) {
          pt(e, t, i);
        }
      }
    }, ib = ub.react_stack_bottom_frame.bind(
      ub
    ), cb = {
      react_stack_bottom_frame: function(e) {
        var t = e.create;
        return e = e.inst, t = t(), e.destroy = t;
      }
    }, VT = cb.react_stack_bottom_frame.bind(cb), ob = {
      react_stack_bottom_frame: function(e, t, a) {
        try {
          a();
        } catch (i) {
          pt(e, t, i);
        }
      }
    }, ZT = ob.react_stack_bottom_frame.bind(ob), fb = {
      react_stack_bottom_frame: function(e) {
        var t = e._init;
        return t(e._payload);
      }
    }, JT = fb.react_stack_bottom_frame.bind(fb), hm = Error(
      "Suspense Exception: This is not a real error! It's an implementation detail of `use` to interrupt the current render. You must either rethrow it immediately, or move the `use` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary, or call the promise's `.catch` method and pass the result to `use`."
    ), BS = Error(
      "Suspense Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."
    ), ig = Error(
      "Suspense Exception: This is not a real error! It's an implementation detail of `useActionState` to interrupt the current render. You must either rethrow it immediately, or move the `useActionState` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary."
    ), cg = {
      then: function() {
        console.error(
          'Internal React error: A listener was unexpectedly attached to a "noop" thenable. This is a bug in React. Please file an issue.'
        );
      }
    }, ks = null, l0 = !1, mm = null, a0 = 0, ke = null, xS, rb = xS = !1, sb = {}, db = {}, hb = {};
    de = function(e, t, a) {
      if (a !== null && typeof a == "object" && a._store && (!a._store.validated && a.key == null || a._store.validated === 2)) {
        if (typeof a._store != "object")
          throw Error(
            "React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue."
          );
        a._store.validated = 1;
        var i = re(e), o = i || "null";
        if (!sb[o]) {
          sb[o] = !0, a = a._owner, e = e._debugOwner;
          var f = "";
          e && typeof e.tag == "number" && (o = re(e)) && (f = `

Check the render method of \`` + o + "`."), f || i && (f = `

Check the top-level render call using <` + i + ">.");
          var d = "";
          a != null && e !== a && (i = null, typeof a.tag == "number" ? i = re(a) : typeof a.name == "string" && (i = a.name), i && (d = " It was passed a child from " + i + ".")), fe(t, function() {
            console.error(
              'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
              f,
              d
            );
          });
        }
      }
    };
    var Ws = qt(!0), mb = qt(!1), yb = 0, pb = 1, vb = 2, jS = 3, wf = !1, gb = !1, YS = null, qS = !1, ym = bt(null), og = bt(0), tu = bt(null), ei = null, pm = 1, n0 = 2, _l = bt(0), fg = 0, ti = 1, mn = 2, lu = 4, yn = 8, vm, Sb = /* @__PURE__ */ new Set(), bb = /* @__PURE__ */ new Set(), GS = /* @__PURE__ */ new Set(), Eb = /* @__PURE__ */ new Set(), _o = 0, Be = null, wt = null, Nl = null, rg = !1, gm = !1, Fs = !1, sg = 0, u0 = 0, Do = null, KT = 0, $T = 25, q = null, li = null, Ro = -1, i0 = !1, c0 = {
      readContext: Yt,
      use: ja,
      useCallback: ul,
      useContext: ul,
      useEffect: ul,
      useImperativeHandle: ul,
      useLayoutEffect: ul,
      useInsertionEffect: ul,
      useMemo: ul,
      useReducer: ul,
      useRef: ul,
      useState: ul,
      useDebugValue: ul,
      useDeferredValue: ul,
      useTransition: ul,
      useSyncExternalStore: ul,
      useId: ul,
      useHostTransitionStatus: ul,
      useFormState: ul,
      useActionState: ul,
      useOptimistic: ul,
      useMemoCache: ul,
      useCacheRefresh: ul
    };
    c0.useEffectEvent = ul;
    var wS = null, Tb = null, XS = null, Ab = null, bc = null, Ni = null, dg = null;
    wS = {
      readContext: function(e) {
        return Yt(e);
      },
      use: ja,
      useCallback: function(e, t) {
        return q = "useCallback", be(), Lc(t), Ru(e, t);
      },
      useContext: function(e) {
        return q = "useContext", be(), Yt(e);
      },
      useEffect: function(e, t) {
        return q = "useEffect", be(), Lc(t), wr(e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return q = "useImperativeHandle", be(), Lc(a), Qr(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        q = "useInsertionEffect", be(), Lc(t), An(4, mn, e, t);
      },
      useLayoutEffect: function(e, t) {
        return q = "useLayoutEffect", be(), Lc(t), qa(e, t);
      },
      useMemo: function(e, t) {
        q = "useMemo", be(), Lc(t);
        var a = w.H;
        w.H = bc;
        try {
          return el(e, t);
        } finally {
          w.H = a;
        }
      },
      useReducer: function(e, t, a) {
        q = "useReducer", be();
        var i = w.H;
        w.H = bc;
        try {
          return qd(e, t, a);
        } finally {
          w.H = i;
        }
      },
      useRef: function(e) {
        return q = "useRef", be(), Xd(e);
      },
      useState: function(e) {
        q = "useState", be();
        var t = w.H;
        w.H = bc;
        try {
          return Zc(e);
        } finally {
          w.H = t;
        }
      },
      useDebugValue: function() {
        q = "useDebugValue", be();
      },
      useDeferredValue: function(e, t) {
        return q = "useDeferredValue", be(), Jn(e, t);
      },
      useTransition: function() {
        return q = "useTransition", be(), my();
      },
      useSyncExternalStore: function(e, t, a) {
        return q = "useSyncExternalStore", be(), Fo(
          e,
          t,
          a
        );
      },
      useId: function() {
        return q = "useId", be(), Ld();
      },
      useFormState: function(e, t) {
        return q = "useFormState", be(), xd(), Du(e, t);
      },
      useActionState: function(e, t) {
        return q = "useActionState", be(), Du(e, t);
      },
      useOptimistic: function(e) {
        return q = "useOptimistic", be(), Io(e);
      },
      useHostTransitionStatus: Si,
      useMemoCache: hi,
      useCacheRefresh: function() {
        return q = "useCacheRefresh", be(), Vd();
      },
      useEffectEvent: function(e) {
        return q = "useEffectEvent", be(), Xr(e);
      }
    }, Tb = {
      readContext: function(e) {
        return Yt(e);
      },
      use: ja,
      useCallback: function(e, t) {
        return q = "useCallback", F(), Ru(e, t);
      },
      useContext: function(e) {
        return q = "useContext", F(), Yt(e);
      },
      useEffect: function(e, t) {
        return q = "useEffect", F(), wr(e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return q = "useImperativeHandle", F(), Qr(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        q = "useInsertionEffect", F(), An(4, mn, e, t);
      },
      useLayoutEffect: function(e, t) {
        return q = "useLayoutEffect", F(), qa(e, t);
      },
      useMemo: function(e, t) {
        q = "useMemo", F();
        var a = w.H;
        w.H = bc;
        try {
          return el(e, t);
        } finally {
          w.H = a;
        }
      },
      useReducer: function(e, t, a) {
        q = "useReducer", F();
        var i = w.H;
        w.H = bc;
        try {
          return qd(e, t, a);
        } finally {
          w.H = i;
        }
      },
      useRef: function(e) {
        return q = "useRef", F(), Xd(e);
      },
      useState: function(e) {
        q = "useState", F();
        var t = w.H;
        w.H = bc;
        try {
          return Zc(e);
        } finally {
          w.H = t;
        }
      },
      useDebugValue: function() {
        q = "useDebugValue", F();
      },
      useDeferredValue: function(e, t) {
        return q = "useDeferredValue", F(), Jn(e, t);
      },
      useTransition: function() {
        return q = "useTransition", F(), my();
      },
      useSyncExternalStore: function(e, t, a) {
        return q = "useSyncExternalStore", F(), Fo(
          e,
          t,
          a
        );
      },
      useId: function() {
        return q = "useId", F(), Ld();
      },
      useActionState: function(e, t) {
        return q = "useActionState", F(), Du(e, t);
      },
      useFormState: function(e, t) {
        return q = "useFormState", F(), xd(), Du(e, t);
      },
      useOptimistic: function(e) {
        return q = "useOptimistic", F(), Io(e);
      },
      useHostTransitionStatus: Si,
      useMemoCache: hi,
      useCacheRefresh: function() {
        return q = "useCacheRefresh", F(), Vd();
      },
      useEffectEvent: function(e) {
        return q = "useEffectEvent", F(), Xr(e);
      }
    }, XS = {
      readContext: function(e) {
        return Yt(e);
      },
      use: ja,
      useCallback: function(e, t) {
        return q = "useCallback", F(), ua(e, t);
      },
      useContext: function(e) {
        return q = "useContext", F(), Yt(e);
      },
      useEffect: function(e, t) {
        q = "useEffect", F(), Ql(2048, yn, e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return q = "useImperativeHandle", F(), Lr(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        return q = "useInsertionEffect", F(), Ql(4, mn, e, t);
      },
      useLayoutEffect: function(e, t) {
        return q = "useLayoutEffect", F(), Ql(4, lu, e, t);
      },
      useMemo: function(e, t) {
        q = "useMemo", F();
        var a = w.H;
        w.H = Ni;
        try {
          return $c(e, t);
        } finally {
          w.H = a;
        }
      },
      useReducer: function(e, t, a) {
        q = "useReducer", F();
        var i = w.H;
        w.H = Ni;
        try {
          return Zn(e, t, a);
        } finally {
          w.H = i;
        }
      },
      useRef: function() {
        return q = "useRef", F(), Tt().memoizedState;
      },
      useState: function() {
        q = "useState", F();
        var e = w.H;
        w.H = Ni;
        try {
          return Zn(Ya);
        } finally {
          w.H = e;
        }
      },
      useDebugValue: function() {
        q = "useDebugValue", F();
      },
      useDeferredValue: function(e, t) {
        return q = "useDeferredValue", F(), Qe(e, t);
      },
      useTransition: function() {
        return q = "useTransition", F(), tl();
      },
      useSyncExternalStore: function(e, t, a) {
        return q = "useSyncExternalStore", F(), jr(
          e,
          t,
          a
        );
      },
      useId: function() {
        return q = "useId", F(), Tt().memoizedState;
      },
      useFormState: function(e) {
        return q = "useFormState", F(), xd(), ef(e);
      },
      useActionState: function(e) {
        return q = "useActionState", F(), ef(e);
      },
      useOptimistic: function(e, t) {
        return q = "useOptimistic", F(), Po(e, t);
      },
      useHostTransitionStatus: Si,
      useMemoCache: hi,
      useCacheRefresh: function() {
        return q = "useCacheRefresh", F(), Tt().memoizedState;
      },
      useEffectEvent: function(e) {
        return q = "useEffectEvent", F(), na(e);
      }
    }, Ab = {
      readContext: function(e) {
        return Yt(e);
      },
      use: ja,
      useCallback: function(e, t) {
        return q = "useCallback", F(), ua(e, t);
      },
      useContext: function(e) {
        return q = "useContext", F(), Yt(e);
      },
      useEffect: function(e, t) {
        q = "useEffect", F(), Ql(2048, yn, e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return q = "useImperativeHandle", F(), Lr(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        return q = "useInsertionEffect", F(), Ql(4, mn, e, t);
      },
      useLayoutEffect: function(e, t) {
        return q = "useLayoutEffect", F(), Ql(4, lu, e, t);
      },
      useMemo: function(e, t) {
        q = "useMemo", F();
        var a = w.H;
        w.H = dg;
        try {
          return $c(e, t);
        } finally {
          w.H = a;
        }
      },
      useReducer: function(e, t, a) {
        q = "useReducer", F();
        var i = w.H;
        w.H = dg;
        try {
          return tc(e, t, a);
        } finally {
          w.H = i;
        }
      },
      useRef: function() {
        return q = "useRef", F(), Tt().memoizedState;
      },
      useState: function() {
        q = "useState", F();
        var e = w.H;
        w.H = dg;
        try {
          return tc(Ya);
        } finally {
          w.H = e;
        }
      },
      useDebugValue: function() {
        q = "useDebugValue", F();
      },
      useDeferredValue: function(e, t) {
        return q = "useDeferredValue", F(), Dt(e, t);
      },
      useTransition: function() {
        return q = "useTransition", F(), Qd();
      },
      useSyncExternalStore: function(e, t, a) {
        return q = "useSyncExternalStore", F(), jr(
          e,
          t,
          a
        );
      },
      useId: function() {
        return q = "useId", F(), Tt().memoizedState;
      },
      useFormState: function(e) {
        return q = "useFormState", F(), xd(), uc(e);
      },
      useActionState: function(e) {
        return q = "useActionState", F(), uc(e);
      },
      useOptimistic: function(e, t) {
        return q = "useOptimistic", F(), sy(e, t);
      },
      useHostTransitionStatus: Si,
      useMemoCache: hi,
      useCacheRefresh: function() {
        return q = "useCacheRefresh", F(), Tt().memoizedState;
      },
      useEffectEvent: function(e) {
        return q = "useEffectEvent", F(), na(e);
      }
    }, bc = {
      readContext: function(e) {
        return V(), Yt(e);
      },
      use: function(e) {
        return L(), ja(e);
      },
      useCallback: function(e, t) {
        return q = "useCallback", L(), be(), Ru(e, t);
      },
      useContext: function(e) {
        return q = "useContext", L(), be(), Yt(e);
      },
      useEffect: function(e, t) {
        return q = "useEffect", L(), be(), wr(e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return q = "useImperativeHandle", L(), be(), Qr(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        q = "useInsertionEffect", L(), be(), An(4, mn, e, t);
      },
      useLayoutEffect: function(e, t) {
        return q = "useLayoutEffect", L(), be(), qa(e, t);
      },
      useMemo: function(e, t) {
        q = "useMemo", L(), be();
        var a = w.H;
        w.H = bc;
        try {
          return el(e, t);
        } finally {
          w.H = a;
        }
      },
      useReducer: function(e, t, a) {
        q = "useReducer", L(), be();
        var i = w.H;
        w.H = bc;
        try {
          return qd(e, t, a);
        } finally {
          w.H = i;
        }
      },
      useRef: function(e) {
        return q = "useRef", L(), be(), Xd(e);
      },
      useState: function(e) {
        q = "useState", L(), be();
        var t = w.H;
        w.H = bc;
        try {
          return Zc(e);
        } finally {
          w.H = t;
        }
      },
      useDebugValue: function() {
        q = "useDebugValue", L(), be();
      },
      useDeferredValue: function(e, t) {
        return q = "useDeferredValue", L(), be(), Jn(e, t);
      },
      useTransition: function() {
        return q = "useTransition", L(), be(), my();
      },
      useSyncExternalStore: function(e, t, a) {
        return q = "useSyncExternalStore", L(), be(), Fo(
          e,
          t,
          a
        );
      },
      useId: function() {
        return q = "useId", L(), be(), Ld();
      },
      useFormState: function(e, t) {
        return q = "useFormState", L(), be(), Du(e, t);
      },
      useActionState: function(e, t) {
        return q = "useActionState", L(), be(), Du(e, t);
      },
      useOptimistic: function(e) {
        return q = "useOptimistic", L(), be(), Io(e);
      },
      useMemoCache: function(e) {
        return L(), hi(e);
      },
      useHostTransitionStatus: Si,
      useCacheRefresh: function() {
        return q = "useCacheRefresh", be(), Vd();
      },
      useEffectEvent: function(e) {
        return q = "useEffectEvent", L(), be(), Xr(e);
      }
    }, Ni = {
      readContext: function(e) {
        return V(), Yt(e);
      },
      use: function(e) {
        return L(), ja(e);
      },
      useCallback: function(e, t) {
        return q = "useCallback", L(), F(), ua(e, t);
      },
      useContext: function(e) {
        return q = "useContext", L(), F(), Yt(e);
      },
      useEffect: function(e, t) {
        q = "useEffect", L(), F(), Ql(2048, yn, e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return q = "useImperativeHandle", L(), F(), Lr(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        return q = "useInsertionEffect", L(), F(), Ql(4, mn, e, t);
      },
      useLayoutEffect: function(e, t) {
        return q = "useLayoutEffect", L(), F(), Ql(4, lu, e, t);
      },
      useMemo: function(e, t) {
        q = "useMemo", L(), F();
        var a = w.H;
        w.H = Ni;
        try {
          return $c(e, t);
        } finally {
          w.H = a;
        }
      },
      useReducer: function(e, t, a) {
        q = "useReducer", L(), F();
        var i = w.H;
        w.H = Ni;
        try {
          return Zn(e, t, a);
        } finally {
          w.H = i;
        }
      },
      useRef: function() {
        return q = "useRef", L(), F(), Tt().memoizedState;
      },
      useState: function() {
        q = "useState", L(), F();
        var e = w.H;
        w.H = Ni;
        try {
          return Zn(Ya);
        } finally {
          w.H = e;
        }
      },
      useDebugValue: function() {
        q = "useDebugValue", L(), F();
      },
      useDeferredValue: function(e, t) {
        return q = "useDeferredValue", L(), F(), Qe(e, t);
      },
      useTransition: function() {
        return q = "useTransition", L(), F(), tl();
      },
      useSyncExternalStore: function(e, t, a) {
        return q = "useSyncExternalStore", L(), F(), jr(
          e,
          t,
          a
        );
      },
      useId: function() {
        return q = "useId", L(), F(), Tt().memoizedState;
      },
      useFormState: function(e) {
        return q = "useFormState", L(), F(), ef(e);
      },
      useActionState: function(e) {
        return q = "useActionState", L(), F(), ef(e);
      },
      useOptimistic: function(e, t) {
        return q = "useOptimistic", L(), F(), Po(e, t);
      },
      useMemoCache: function(e) {
        return L(), hi(e);
      },
      useHostTransitionStatus: Si,
      useCacheRefresh: function() {
        return q = "useCacheRefresh", F(), Tt().memoizedState;
      },
      useEffectEvent: function(e) {
        return q = "useEffectEvent", L(), F(), na(e);
      }
    }, dg = {
      readContext: function(e) {
        return V(), Yt(e);
      },
      use: function(e) {
        return L(), ja(e);
      },
      useCallback: function(e, t) {
        return q = "useCallback", L(), F(), ua(e, t);
      },
      useContext: function(e) {
        return q = "useContext", L(), F(), Yt(e);
      },
      useEffect: function(e, t) {
        q = "useEffect", L(), F(), Ql(2048, yn, e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return q = "useImperativeHandle", L(), F(), Lr(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        return q = "useInsertionEffect", L(), F(), Ql(4, mn, e, t);
      },
      useLayoutEffect: function(e, t) {
        return q = "useLayoutEffect", L(), F(), Ql(4, lu, e, t);
      },
      useMemo: function(e, t) {
        q = "useMemo", L(), F();
        var a = w.H;
        w.H = Ni;
        try {
          return $c(e, t);
        } finally {
          w.H = a;
        }
      },
      useReducer: function(e, t, a) {
        q = "useReducer", L(), F();
        var i = w.H;
        w.H = Ni;
        try {
          return tc(e, t, a);
        } finally {
          w.H = i;
        }
      },
      useRef: function() {
        return q = "useRef", L(), F(), Tt().memoizedState;
      },
      useState: function() {
        q = "useState", L(), F();
        var e = w.H;
        w.H = Ni;
        try {
          return tc(Ya);
        } finally {
          w.H = e;
        }
      },
      useDebugValue: function() {
        q = "useDebugValue", L(), F();
      },
      useDeferredValue: function(e, t) {
        return q = "useDeferredValue", L(), F(), Dt(e, t);
      },
      useTransition: function() {
        return q = "useTransition", L(), F(), Qd();
      },
      useSyncExternalStore: function(e, t, a) {
        return q = "useSyncExternalStore", L(), F(), jr(
          e,
          t,
          a
        );
      },
      useId: function() {
        return q = "useId", L(), F(), Tt().memoizedState;
      },
      useFormState: function(e) {
        return q = "useFormState", L(), F(), uc(e);
      },
      useActionState: function(e) {
        return q = "useActionState", L(), F(), uc(e);
      },
      useOptimistic: function(e, t) {
        return q = "useOptimistic", L(), F(), sy(e, t);
      },
      useMemoCache: function(e) {
        return L(), hi(e);
      },
      useHostTransitionStatus: Si,
      useCacheRefresh: function() {
        return q = "useCacheRefresh", F(), Tt().memoizedState;
      },
      useEffectEvent: function(e) {
        return q = "useEffectEvent", L(), F(), na(e);
      }
    };
    var Ob = {}, zb = /* @__PURE__ */ new Set(), _b = /* @__PURE__ */ new Set(), Db = /* @__PURE__ */ new Set(), Rb = /* @__PURE__ */ new Set(), Mb = /* @__PURE__ */ new Set(), Cb = /* @__PURE__ */ new Set(), Ub = /* @__PURE__ */ new Set(), Hb = /* @__PURE__ */ new Set(), Nb = /* @__PURE__ */ new Set(), Bb = /* @__PURE__ */ new Set();
    Object.freeze(Ob);
    var QS = {
      enqueueSetState: function(e, t, a) {
        e = e._reactInternals;
        var i = Jl(e), o = Au(i);
        o.payload = t, a != null && (nf(a), o.callback = a), t = pa(e, o, i), t !== null && (wn(i, "this.setState()", e), ll(t, e, i), ko(t, e, i));
      },
      enqueueReplaceState: function(e, t, a) {
        e = e._reactInternals;
        var i = Jl(e), o = Au(i);
        o.tag = pb, o.payload = t, a != null && (nf(a), o.callback = a), t = pa(e, o, i), t !== null && (wn(i, "this.replaceState()", e), ll(t, e, i), ko(t, e, i));
      },
      enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var a = Jl(e), i = Au(a);
        i.tag = vb, t != null && (nf(t), i.callback = t), t = pa(e, i, a), t !== null && (wn(a, "this.forceUpdate()", e), ll(t, e, a), ko(t, e, a));
      }
    }, Sm = null, LS = null, VS = Error(
      "This is not a real error. It's an implementation detail of React's selective hydration feature. If this leaks into userspace, it's a bug in React. Please file an issue."
    ), Bl = !1, xb = {}, jb = {}, Yb = {}, qb = {}, bm = !1, Gb = {}, hg = {}, ZS = {
      dehydrated: null,
      treeContext: null,
      retryLane: 0,
      hydrationErrors: null
    }, wb = !1, Xb = null;
    Xb = /* @__PURE__ */ new Set();
    var Mo = !1, xl = !1, JS = !1, Qb = typeof WeakSet == "function" ? WeakSet : Set, sa = null, Em = null, Tm = null, jl = null, jn = !1, Bi = null, Il = !1, o0 = 8192, kT = {
      getCacheForType: function(e) {
        var t = Yt(Ul), a = t.data.get(e);
        return a === void 0 && (a = e(), t.data.set(e, a)), a;
      },
      cacheSignal: function() {
        return Yt(Ul).controller.signal;
      },
      getOwner: function() {
        return fn;
      }
    };
    if (typeof Symbol == "function" && Symbol.for) {
      var f0 = Symbol.for;
      f0("selector.component"), f0("selector.has_pseudo_class"), f0("selector.role"), f0("selector.test_id"), f0("selector.text");
    }
    var WT = [], FT = typeof WeakMap == "function" ? WeakMap : Map, da = 0, Pl = 2, au = 4, Co = 0, r0 = 1, Is = 2, mg = 3, Xf = 4, yg = 6, Lb = 5, yt = da, Xt = null, Pe = null, We = 0, Yn = 0, pg = 1, Ps = 2, s0 = 3, Vb = 4, KS = 5, d0 = 6, vg = 7, $S = 8, ed = 9, Bt = Yn, nu = null, Qf = !1, Am = !1, kS = !1, Ec = 0, dl = Co, Lf = 0, Vf = 0, WS = 0, qn = 0, td = 0, h0 = null, pn = null, gg = !1, Sg = 0, Zb = 0, Jb = 300, bg = 1 / 0, Kb = 500, m0 = null, bl = null, Zf = null, Eg = 0, FS = 1, IS = 2, $b = 3, Jf = 0, kb = 1, Wb = 2, Fb = 3, Ib = 4, Tg = 5, Yl = 0, Kf = null, Om = null, xi = 0, PS = 0, e1 = -0, t1 = null, Pb = null, eE = null, ji = Eg, tE = null, IT = 50, y0 = 0, l1 = null, a1 = !1, Ag = !1, PT = 50, ld = 0, p0 = null, zm = !1, Og = null, lE = !1, aE = /* @__PURE__ */ new Set(), eA = {}, zg = null, _m = null, n1 = !1, u1 = !1, _g = !1, i1 = !1, $f = 0, c1 = {};
    (function() {
      for (var e = 0; e < gS.length; e++) {
        var t = gS[e], a = t.toLowerCase();
        t = t[0].toUpperCase() + t.slice(1), bn(a, "on" + t);
      }
      bn(N1, "onAnimationEnd"), bn(B1, "onAnimationIteration"), bn(x1, "onAnimationStart"), bn("dblclick", "onDoubleClick"), bn("focusin", "onFocus"), bn("focusout", "onBlur"), bn(MT, "onTransitionRun"), bn(CT, "onTransitionStart"), bn(UT, "onTransitionCancel"), bn(j1, "onTransitionEnd");
    })(), Ye("onMouseEnter", ["mouseout", "mouseover"]), Ye("onMouseLeave", ["mouseout", "mouseover"]), Ye("onPointerEnter", ["pointerout", "pointerover"]), Ye("onPointerLeave", ["pointerout", "pointerover"]), ot(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ), ot(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ), ot("onBeforeInput", [
      "compositionend",
      "keypress",
      "textInput",
      "paste"
    ]), ot(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ), ot(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ), ot(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
    var v0 = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ), o1 = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(v0)
    ), Dg = "_reactListening" + Math.random().toString(36).slice(2), nE = !1, uE = !1, Rg = !1, iE = !1, Mg = !1, Cg = !1, cE = !1, Ug = {}, tA = /\r\n?/g, lA = /\u0000|\uFFFD/g, ad = "http://www.w3.org/1999/xlink", f1 = "http://www.w3.org/XML/1998/namespace", aA = "javascript:throw new Error('React form unexpectedly submitted.')", nA = "suppressHydrationWarning", nd = "&", Hg = "/&", g0 = "$", S0 = "/$", kf = "$?", ud = "$~", Dm = "$!", uA = "html", iA = "body", cA = "head", r1 = "F!", oE = "F", fE = "loading", oA = "style", Uo = 0, Rm = 1, Ng = 2, s1 = null, d1 = null, rE = { dialog: !0, webview: !0 }, h1 = null, b0 = void 0, sE = typeof setTimeout == "function" ? setTimeout : void 0, fA = typeof clearTimeout == "function" ? clearTimeout : void 0, id = -1, dE = typeof Promise == "function" ? Promise : void 0, rA = typeof queueMicrotask == "function" ? queueMicrotask : typeof dE < "u" ? function(e) {
      return dE.resolve(null).then(e).catch(pv);
    } : sE, m1 = null, cd = 0, E0 = 1, hE = 2, mE = 3, ai = 4, ni = /* @__PURE__ */ new Map(), yE = /* @__PURE__ */ new Set(), Ho = Ot.d;
    Ot.d = {
      f: function() {
        var e = Ho.f(), t = ao();
        return e || t;
      },
      r: function(e) {
        var t = le(e);
        t !== null && t.tag === 5 && t.type === "form" ? kc(t) : Ho.r(e);
      },
      D: function(e) {
        Ho.D(e), rp("dns-prefetch", e, null);
      },
      C: function(e, t) {
        Ho.C(e, t), rp("preconnect", e, t);
      },
      L: function(e, t, a) {
        Ho.L(e, t, a);
        var i = Mm;
        if (i && e && t) {
          var o = 'link[rel="preload"][as="' + Zt(t) + '"]';
          t === "image" && a && a.imageSrcSet ? (o += '[imagesrcset="' + Zt(
            a.imageSrcSet
          ) + '"]', typeof a.imageSizes == "string" && (o += '[imagesizes="' + Zt(
            a.imageSizes
          ) + '"]')) : o += '[href="' + Zt(e) + '"]';
          var f = o;
          switch (t) {
            case "style":
              f = Sf(e);
              break;
            case "script":
              f = bf(e);
          }
          ni.has(f) || (e = Je(
            {
              rel: "preload",
              href: t === "image" && a && a.imageSrcSet ? void 0 : e,
              as: t
            },
            a
          ), ni.set(f, e), i.querySelector(o) !== null || t === "style" && i.querySelector(
            ro(f)
          ) || t === "script" && i.querySelector(so(f)) || (t = i.createElement("link"), ft(t, "link", e), ye(t), i.head.appendChild(t)));
        }
      },
      m: function(e, t) {
        Ho.m(e, t);
        var a = Mm;
        if (a && e) {
          var i = t && typeof t.as == "string" ? t.as : "script", o = 'link[rel="modulepreload"][as="' + Zt(i) + '"][href="' + Zt(e) + '"]', f = o;
          switch (i) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
              f = bf(e);
          }
          if (!ni.has(f) && (e = Je({ rel: "modulepreload", href: e }, t), ni.set(f, e), a.querySelector(o) === null)) {
            switch (i) {
              case "audioworklet":
              case "paintworklet":
              case "serviceworker":
              case "sharedworker":
              case "worker":
              case "script":
                if (a.querySelector(so(f)))
                  return;
            }
            i = a.createElement("link"), ft(i, "link", e), ye(i), a.head.appendChild(i);
          }
        }
      },
      X: function(e, t) {
        Ho.X(e, t);
        var a = Mm;
        if (a && e) {
          var i = He(a).hoistableScripts, o = bf(e), f = i.get(o);
          f || (f = a.querySelector(
            so(o)
          ), f || (e = Je({ src: e, async: !0 }, t), (t = ni.get(o)) && ho(e, t), f = a.createElement("script"), ye(f), ft(f, "link", e), a.head.appendChild(f)), f = {
            type: "script",
            instance: f,
            count: 1,
            state: null
          }, i.set(o, f));
        }
      },
      S: function(e, t, a) {
        Ho.S(e, t, a);
        var i = Mm;
        if (i && e) {
          var o = He(i).hoistableStyles, f = Sf(e);
          t = t || "default";
          var d = o.get(f);
          if (!d) {
            var h = { loading: cd, preload: null };
            if (d = i.querySelector(
              ro(f)
            ))
              h.loading = E0 | ai;
            else {
              e = Je(
                {
                  rel: "stylesheet",
                  href: e,
                  "data-precedence": t
                },
                a
              ), (a = ni.get(f)) && hp(e, a);
              var y = d = i.createElement("link");
              ye(y), ft(y, "link", e), y._p = new Promise(function(p, _) {
                y.onload = p, y.onerror = _;
              }), y.addEventListener("load", function() {
                h.loading |= E0;
              }), y.addEventListener("error", function() {
                h.loading |= hE;
              }), h.loading |= ai, Rh(d, t, i);
            }
            d = {
              type: "stylesheet",
              instance: d,
              count: 1,
              state: h
            }, o.set(f, d);
          }
        }
      },
      M: function(e, t) {
        Ho.M(e, t);
        var a = Mm;
        if (a && e) {
          var i = He(a).hoistableScripts, o = bf(e), f = i.get(o);
          f || (f = a.querySelector(
            so(o)
          ), f || (e = Je({ src: e, async: !0, type: "module" }, t), (t = ni.get(o)) && ho(e, t), f = a.createElement("script"), ye(f), ft(f, "link", e), a.head.appendChild(f)), f = {
            type: "script",
            instance: f,
            count: 1,
            state: null
          }, i.set(o, f));
        }
      }
    };
    var Mm = typeof document > "u" ? null : document, Bg = null, sA = 6e4, dA = 800, hA = 500, y1 = 0, p1 = null, xg = null, od = uS, T0 = {
      $$typeof: Fn,
      Provider: null,
      Consumer: null,
      _currentValue: od,
      _currentValue2: od,
      _threadCount: 0
    }, pE = "%c%s%c", vE = "background: #e6e6e6;background: light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.25));color: #000000;color: light-dark(#000000, #ffffff);border-radius: 2px", gE = "", jg = " ", mA = Function.prototype.bind, SE = !1, bE = null, EE = null, TE = null, AE = null, OE = null, zE = null, _E = null, DE = null, RE = null, ME = null;
    bE = function(e, t, a, i) {
      t = te(e, t), t !== null && (a = Ne(t.memoizedState, a, 0, i), t.memoizedState = a, t.baseState = a, e.memoizedProps = Je({}, e.memoizedProps), a = Xl(e, 2), a !== null && ll(a, e, 2));
    }, EE = function(e, t, a) {
      t = te(e, t), t !== null && (a = Re(t.memoizedState, a, 0), t.memoizedState = a, t.baseState = a, e.memoizedProps = Je({}, e.memoizedProps), a = Xl(e, 2), a !== null && ll(a, e, 2));
    }, TE = function(e, t, a, i) {
      t = te(e, t), t !== null && (a = B(t.memoizedState, a, i), t.memoizedState = a, t.baseState = a, e.memoizedProps = Je({}, e.memoizedProps), a = Xl(e, 2), a !== null && ll(a, e, 2));
    }, AE = function(e, t, a) {
      e.pendingProps = Ne(e.memoizedProps, t, 0, a), e.alternate && (e.alternate.pendingProps = e.pendingProps), t = Xl(e, 2), t !== null && ll(t, e, 2);
    }, OE = function(e, t) {
      e.pendingProps = Re(e.memoizedProps, t, 0), e.alternate && (e.alternate.pendingProps = e.pendingProps), t = Xl(e, 2), t !== null && ll(t, e, 2);
    }, zE = function(e, t, a) {
      e.pendingProps = B(
        e.memoizedProps,
        t,
        a
      ), e.alternate && (e.alternate.pendingProps = e.pendingProps), t = Xl(e, 2), t !== null && ll(t, e, 2);
    }, _E = function(e) {
      var t = Xl(e, 2);
      t !== null && ll(t, e, 2);
    }, DE = function(e) {
      var t = xo(), a = Xl(e, t);
      a !== null && ll(a, e, t);
    }, RE = function(e) {
      gt = e;
    }, ME = function(e) {
      je = e;
    };
    var Yg = !0, qg = null, v1 = !1, Wf = null, Ff = null, If = null, A0 = /* @__PURE__ */ new Map(), O0 = /* @__PURE__ */ new Map(), Pf = [], yA = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
      " "
    ), Gg = null;
    if (Ms.prototype.render = Lu.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null) throw Error("Cannot update an unmounted root.");
      var a = arguments;
      typeof a[1] == "function" ? console.error(
        "does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."
      ) : Te(a[1]) ? console.error(
        "You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root."
      ) : typeof a[1] < "u" && console.error(
        "You passed a second argument to root.render(...) but it only accepts one argument."
      ), a = e;
      var i = t.current, o = Jl(i);
      vp(i, o, a, t, null, null);
    }, Ms.prototype.unmount = Lu.prototype.unmount = function() {
      var e = arguments;
      if (typeof e[0] == "function" && console.error(
        "does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."
      ), e = this._internalRoot, e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        (yt & (Pl | au)) !== da && console.error(
          "Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."
        ), vp(e.current, 2, null, e, null, null), ao(), t[xn] = null;
      }
    }, Ms.prototype.unstable_scheduleHydration = function(e) {
      if (e) {
        var t = Xi();
        e = { blockedOn: null, target: e, priority: t };
        for (var a = 0; a < Pf.length && t !== 0 && t < Pf[a].priority; a++) ;
        Pf.splice(a, 0, e), a === 0 && xh(e);
      }
    }, (function() {
      var e = Ap.version;
      if (e !== "19.2.3")
        throw Error(
          `Incompatible React versions: The "react" and "react-dom" packages must have the exact same version. Instead got:
  - react:      ` + (e + `
  - react-dom:  19.2.3
Learn more: https://react.dev/warnings/version-mismatch`)
        );
    })(), typeof Map == "function" && Map.prototype != null && typeof Map.prototype.forEach == "function" && typeof Set == "function" && Set.prototype != null && typeof Set.prototype.clear == "function" && typeof Set.prototype.forEach == "function" || console.error(
      "React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://react.dev/link/react-polyfills"
    ), Ot.findDOMNode = function(e) {
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function" ? Error("Unable to find node on an unmounted component.") : (e = Object.keys(e).join(","), Error(
          "Argument appears to not be a ReactComponent. Keys: " + e
        ));
      return e = xt(t), e = e !== null ? Xe(e) : null, e = e === null ? null : e.stateNode, e;
    }, !(function() {
      var e = {
        bundleType: 1,
        version: "19.2.3",
        rendererPackageName: "react-dom",
        currentDispatcherRef: w,
        reconcilerVersion: "19.2.3"
      };
      return e.overrideHookState = bE, e.overrideHookStateDeletePath = EE, e.overrideHookStateRenamePath = TE, e.overrideProps = AE, e.overridePropsDeletePath = OE, e.overridePropsRenamePath = zE, e.scheduleUpdate = _E, e.scheduleRetry = DE, e.setErrorHandler = RE, e.setSuspenseHandler = ME, e.scheduleRefresh = qe, e.scheduleRoot = ue, e.setRefreshHandler = Qt, e.getCurrentFiber = Sp, er(e);
    })() && vc && window.top === window.self && (-1 < navigator.userAgent.indexOf("Chrome") && navigator.userAgent.indexOf("Edge") === -1 || -1 < navigator.userAgent.indexOf("Firefox"))) {
      var CE = window.location.protocol;
      /^(https?|file):$/.test(CE) && console.info(
        "%cDownload the React DevTools for a better development experience: https://react.dev/link/react-devtools" + (CE === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://react.dev/link/react-devtools-faq` : ""),
        "font-weight:bold"
      );
    }
    R0.createRoot = function(e, t) {
      if (!Te(e))
        throw Error("Target container is not a DOM element.");
      Tp(e);
      var a = !1, i = "", o = Jd, f = py, d = vy;
      return t != null && (t.hydrate ? console.warn(
        "hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead."
      ) : typeof t == "object" && t !== null && t.$$typeof === Un && console.error(
        `You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`
      ), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (i = t.identifierPrefix), t.onUncaughtError !== void 0 && (o = t.onUncaughtError), t.onCaughtError !== void 0 && (f = t.onCaughtError), t.onRecoverableError !== void 0 && (d = t.onRecoverableError)), t = Cv(
        e,
        1,
        !1,
        null,
        null,
        a,
        i,
        null,
        o,
        f,
        d,
        xv
      ), e[xn] = t.current, ms(e), new Lu(t);
    }, R0.hydrateRoot = function(e, t, a) {
      if (!Te(e))
        throw Error("Target container is not a DOM element.");
      Tp(e), t === void 0 && console.error(
        "Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)"
      );
      var i = !1, o = "", f = Jd, d = py, h = vy, y = null;
      return a != null && (a.unstable_strictMode === !0 && (i = !0), a.identifierPrefix !== void 0 && (o = a.identifierPrefix), a.onUncaughtError !== void 0 && (f = a.onUncaughtError), a.onCaughtError !== void 0 && (d = a.onCaughtError), a.onRecoverableError !== void 0 && (h = a.onRecoverableError), a.formState !== void 0 && (y = a.formState)), t = Cv(
        e,
        1,
        !0,
        t,
        a ?? null,
        i,
        o,
        y,
        f,
        d,
        h,
        xv
      ), t.context = pp(null), a = t.current, i = Jl(a), i = pl(i), o = Au(i), o.callback = null, pa(a, o, i), wn(i, "hydrateRoot()", null), a = i, t.current.lanes = a, wi(t, a), Ea(t), e[xn] = t.current, ms(e), new Ms(t);
    }, R0.version = "19.2.3", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  })(), R0;
}
var ZE;
function MA() {
  if (ZE) return Qg.exports;
  ZE = 1;
  var Q = {};
  function te() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
      if (Q.NODE_ENV !== "production")
        throw new Error("^_^");
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(te);
      } catch (Ne) {
        console.error(Ne);
      }
    }
  }
  return Q.NODE_ENV === "production" ? (te(), Qg.exports = DA()) : Qg.exports = RA(), Qg.exports;
}
var CA = MA();
const UA = /* @__PURE__ */ vA(CA);
var Cm = Um();
const JE = [
  "Xin chào! 👋 Tôi có thể giúp gì cho bạn?",
  "Bạn có muốn tìm hiểu về sản phẩm của chúng tôi không?",
  "Chúng tôi luôn sẵn sàng hỗ trợ bạn!",
  "Cảm ơn bạn đã nhắn tin!"
], HA = ({ config: Q }) => {
  const [te, Ne] = Cm.useState(!1), [B, Me] = Cm.useState([]), [Re, je] = Cm.useState(""), gt = Cm.useRef(null), L = Cm.useRef(null), V = Q.theme || "light", we = V === "dark" ? "#1f1f1f" : "#fff", de = V === "dark" ? "#eee" : "#000", k = Q.bubbleStyle?.background || "#4f46e5", U = Q.bubbleStyle?.width || 60;
  Cm.useEffect(() => {
    L.current?.scrollIntoView({ behavior: "smooth" });
  }, [B]);
  const ue = (Te) => {
    Te.trim() && (Me((Ze) => [...Ze, { from: "user", text: Te }]), je(""), Me((Ze) => [...Ze, { from: "botLoading", text: "" }]), setTimeout(() => {
      Me((Ze) => {
        const St = Ze.filter(($t) => $t.from !== "botLoading"), Lt = {
          from: "bot",
          text: JE[Math.floor(Math.random() * JE.length)]
        };
        return [...St, Lt];
      });
    }, 1200));
  }, qe = (Te) => {
    Te.key === "Enter" && ue(Re);
  }, Qt = Q.position === "bottom-left" ? { left: 20, right: "auto" } : { right: 20, left: "auto" };
  return /* @__PURE__ */ ka.jsxs(ka.Fragment, { children: [
    /* @__PURE__ */ ka.jsx(
      "div",
      {
        onClick: () => Ne(!te),
        style: {
          position: "fixed",
          bottom: 20,
          width: U,
          height: U,
          borderRadius: Q.bubbleStyle?.borderRadius || "50%",
          background: k,
          cursor: "pointer",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: Q.bubbleStyle?.fontSize || 30,
          boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
          transition: "transform 0.2s",
          transform: te ? "scale(0.95)" : "scale(1)",
          ...Qt,
          ...Q.bubbleStyle
        },
        children: Q.fabIcon || "💬"
      }
    ),
    te && /* @__PURE__ */ ka.jsxs(
      "div",
      {
        style: {
          position: "fixed",
          bottom: U + 10,
          width: Q.chatWindowStyle?.width || 350,
          height: Q.chatWindowStyle?.height || 400,
          background: Q.chatWindowStyle?.background || we,
          color: de,
          borderRadius: Q.chatWindowStyle?.borderRadius || 12,
          boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          animation: "slideUp 0.3s ease-out",
          ...Qt,
          ...Q.chatWindowStyle
        },
        children: [
          /* @__PURE__ */ ka.jsxs(
            "div",
            {
              style: {
                background: Q.headerStyle?.background || "#4f46e5",
                color: Q.headerStyle?.color || "#fff",
                padding: Q.headerStyle?.padding || "10px 16px",
                fontSize: Q.headerStyle?.fontSize || 16,
                fontWeight: "bold",
                display: "flex",
                alignItems: "center",
                gap: 8,
                ...Q.headerStyle
              },
              children: [
                Q.botAvatar && /* @__PURE__ */ ka.jsx(
                  "img",
                  {
                    src: Q.botAvatar,
                    alt: "Bot",
                    style: { width: 30, height: 30, borderRadius: "50%" }
                  }
                ),
                "ChatBot"
              ]
            }
          ),
          /* @__PURE__ */ ka.jsxs(
            "div",
            {
              style: {
                flex: 1,
                padding: Q.chatWindowStyle?.padding || 16,
                overflowY: "auto",
                display: "flex",
                flexDirection: "column",
                gap: 8,
                fontSize: Q.chatWindowStyle?.fontSize || 14,
                ...Q.chatWindowStyle
              },
              children: [
                B.map((Te, Ze) => {
                  const St = Te.from === "bot" || Te.from === "botLoading";
                  return /* @__PURE__ */ ka.jsxs("div", { style: { display: "flex", gap: 8, alignSelf: Te.from === "user" ? "flex-end" : "flex-start", justifyContent: Te.from === "user" ? "flex-end" : "flex-start" }, children: [
                    St && Q.botAvatar && /* @__PURE__ */ ka.jsx("img", { src: Q.botAvatar, style: { width: 24, height: 24, borderRadius: "50%" } }),
                    /* @__PURE__ */ ka.jsx("div", { style: {
                      background: Te.from === "user" ? k : "#eee",
                      color: Te.from === "user" ? "#fff" : "#000",
                      padding: "8px 12px",
                      borderRadius: 12,
                      maxWidth: "75%",
                      wordWrap: "break-word",
                      ...Q.chatWindowStyle
                    }, children: Te.from === "botLoading" ? "..." : Te.text })
                  ] }, Ze);
                }),
                /* @__PURE__ */ ka.jsx("div", { ref: L })
              ]
            }
          ),
          /* @__PURE__ */ ka.jsxs("div", { style: { display: "flex", gap: 6, padding: 10, borderTop: "1px solid #eee", ...Q.footerStyle }, children: [
            /* @__PURE__ */ ka.jsx(
              "input",
              {
                ref: gt,
                value: Re,
                onChange: (Te) => je(Te.target.value),
                onKeyDown: qe,
                placeholder: "Nhập tin nhắn...",
                style: {
                  flex: 1,
                  padding: 8,
                  borderRadius: 8,
                  border: "1px solid #ccc",
                  fontSize: 14,
                  ...Q.footerStyle
                }
              }
            ),
            /* @__PURE__ */ ka.jsx(
              "button",
              {
                onClick: () => ue(Re),
                style: {
                  padding: "8px 12px",
                  background: k,
                  color: "#fff",
                  border: "none",
                  borderRadius: 8,
                  cursor: "pointer",
                  ...Q.footerStyle
                },
                children: "➤"
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ ka.jsx("style", { children: `
        @keyframes slideUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      ` })
  ] });
};
function NA(Q) {
  const te = document.createElement("div");
  te.id = "chatbot-widget-root", document.body.appendChild(te), UA.createRoot(te).render(/* @__PURE__ */ ka.jsx(HA, { config: Q }));
}
window.Chatbot = { init: NA };
export {
  NA as init
};
