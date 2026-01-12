function vA(k) {
  return k && k.__esModule && Object.prototype.hasOwnProperty.call(k, "default") ? k.default : k;
}
var wg = { exports: {} }, z0 = {};
var UE;
function gA() {
  if (UE) return z0;
  UE = 1;
  var k = /* @__PURE__ */ Symbol.for("react.transitional.element"), te = /* @__PURE__ */ Symbol.for("react.fragment");
  function Ne(B, Re, Me) {
    var je = null;
    if (Me !== void 0 && (je = "" + Me), Re.key !== void 0 && (je = "" + Re.key), "key" in Re) {
      Me = {};
      for (var St in Re)
        St !== "key" && (Me[St] = Re[St]);
    } else Me = Re;
    return Re = Me.ref, {
      $$typeof: k,
      type: B,
      key: je,
      ref: Re !== void 0 ? Re : null,
      props: Me
    };
  }
  return z0.Fragment = te, z0.jsx = Ne, z0.jsxs = Ne, z0;
}
var _0 = {}, Xg = { exports: {} }, Le = {};
var HE;
function SA() {
  if (HE) return Le;
  HE = 1;
  var k = /* @__PURE__ */ Symbol.for("react.transitional.element"), te = /* @__PURE__ */ Symbol.for("react.portal"), Ne = /* @__PURE__ */ Symbol.for("react.fragment"), B = /* @__PURE__ */ Symbol.for("react.strict_mode"), Re = /* @__PURE__ */ Symbol.for("react.profiler"), Me = /* @__PURE__ */ Symbol.for("react.consumer"), je = /* @__PURE__ */ Symbol.for("react.context"), St = /* @__PURE__ */ Symbol.for("react.forward_ref"), L = /* @__PURE__ */ Symbol.for("react.suspense"), Q = /* @__PURE__ */ Symbol.for("react.memo"), we = /* @__PURE__ */ Symbol.for("react.lazy"), de = /* @__PURE__ */ Symbol.for("react.activity"), $ = Symbol.iterator;
  function U(O) {
    return O === null || typeof O != "object" ? null : (O = $ && O[$] || O["@@iterator"], typeof O == "function" ? O : null);
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
  }, Ye = Object.assign, $t = {};
  function Je(O, A, K) {
    this.props = O, this.context = A, this.refs = $t, this.updater = K || ue;
  }
  Je.prototype.isReactComponent = {}, Je.prototype.setState = function(O, A) {
    if (typeof O != "object" && typeof O != "function" && O != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, O, A, "setState");
  }, Je.prototype.forceUpdate = function(O) {
    this.updater.enqueueForceUpdate(this, O, "forceUpdate");
  };
  function lt() {
  }
  lt.prototype = Je.prototype;
  function Dt(O, A, K) {
    this.props = O, this.context = A, this.refs = $t, this.updater = K || ue;
  }
  var Lt = Dt.prototype = new lt();
  Lt.constructor = Dt, Ye(Lt, Je.prototype), Lt.isPureReactComponent = !0;
  var Vt = Array.isArray;
  function Ke() {
  }
  var Oe = { H: null, A: null, T: null, S: null }, bt = Object.prototype.hasOwnProperty;
  function Fe(O, A, K) {
    var ee = K.ref;
    return {
      $$typeof: k,
      type: O,
      key: A,
      ref: ee !== void 0 ? ee : null,
      props: K
    };
  }
  function jt(O, A) {
    return Fe(O.type, A, O.props);
  }
  function se(O) {
    return typeof O == "object" && O !== null && O.$$typeof === k;
  }
  function Et(O) {
    var A = { "=": "=0", ":": "=2" };
    return "$" + O.replace(/[=:]/g, function(K) {
      return A[K];
    });
  }
  var Te = /\/+/g;
  function Ue(O, A) {
    return typeof O == "object" && O !== null && O.key != null ? Et("" + O.key) : A.toString(36);
  }
  function Yt(O) {
    switch (O.status) {
      case "fulfilled":
        return O.value;
      case "rejected":
        throw O.reason;
      default:
        switch (typeof O.status == "string" ? O.then(Ke, Ke) : (O.status = "pending", O.then(
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
  function X(O, A, K, ee, ae) {
    var ze = typeof O;
    (ze === "undefined" || ze === "boolean") && (O = null);
    var at = !1;
    if (O === null) at = !0;
    else
      switch (ze) {
        case "bigint":
        case "string":
        case "number":
          at = !0;
          break;
        case "object":
          switch (O.$$typeof) {
            case k:
            case te:
              at = !0;
              break;
            case we:
              return at = O._init, X(
                at(O._payload),
                A,
                K,
                ee,
                ae
              );
          }
      }
    if (at)
      return ae = ae(O), at = ee === "" ? "." + Ue(O, 0) : ee, Vt(ae) ? (K = "", at != null && (K = at.replace(Te, "$&/") + "/"), X(ae, A, K, "", function(ta) {
        return ta;
      })) : ae != null && (se(ae) && (ae = jt(
        ae,
        K + (ae.key == null || O && O.key === ae.key ? "" : ("" + ae.key).replace(
          Te,
          "$&/"
        ) + "/") + at
      )), A.push(ae)), 1;
    at = 0;
    var Ie = ee === "" ? "." : ee + ":";
    if (Vt(O))
      for (var Tt = 0; Tt < O.length; Tt++)
        ee = O[Tt], ze = Ie + Ue(ee, Tt), at += X(
          ee,
          A,
          K,
          ze,
          ae
        );
    else if (Tt = U(O), typeof Tt == "function")
      for (O = Tt.call(O), Tt = 0; !(ee = O.next()).done; )
        ee = ee.value, ze = Ie + Ue(ee, Tt++), at += X(
          ee,
          A,
          K,
          ze,
          ae
        );
    else if (ze === "object") {
      if (typeof O.then == "function")
        return X(
          Yt(O),
          A,
          K,
          ee,
          ae
        );
      throw A = String(O), Error(
        "Objects are not valid as a React child (found: " + (A === "[object Object]" ? "object with keys {" + Object.keys(O).join(", ") + "}" : A) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return at;
  }
  function j(O, A, K) {
    if (O == null) return O;
    var ee = [], ae = 0;
    return X(O, ee, "", "", function(ze) {
      return A.call(K, ze, ae++);
    }), ee;
  }
  function P(O) {
    if (O._status === -1) {
      var A = O._result;
      A = A(), A.then(
        function(K) {
          (O._status === 0 || O._status === -1) && (O._status = 1, O._result = K);
        },
        function(K) {
          (O._status === 0 || O._status === -1) && (O._status = 2, O._result = K);
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
    forEach: function(O, A, K) {
      j(
        O,
        function() {
          A.apply(this, arguments);
        },
        K
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
      if (!se(O))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return O;
    }
  };
  return Le.Activity = de, Le.Children = ge, Le.Component = Je, Le.Fragment = Ne, Le.Profiler = Re, Le.PureComponent = Dt, Le.StrictMode = B, Le.Suspense = L, Le.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Oe, Le.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(O) {
      return Oe.H.useMemoCache(O);
    }
  }, Le.cache = function(O) {
    return function() {
      return O.apply(null, arguments);
    };
  }, Le.cacheSignal = function() {
    return null;
  }, Le.cloneElement = function(O, A, K) {
    if (O == null)
      throw Error(
        "The argument must be a React element, but you passed " + O + "."
      );
    var ee = Ye({}, O.props), ae = O.key;
    if (A != null)
      for (ze in A.key !== void 0 && (ae = "" + A.key), A)
        !bt.call(A, ze) || ze === "key" || ze === "__self" || ze === "__source" || ze === "ref" && A.ref === void 0 || (ee[ze] = A[ze]);
    var ze = arguments.length - 2;
    if (ze === 1) ee.children = K;
    else if (1 < ze) {
      for (var at = Array(ze), Ie = 0; Ie < ze; Ie++)
        at[Ie] = arguments[Ie + 2];
      ee.children = at;
    }
    return Fe(O.type, ae, ee);
  }, Le.createContext = function(O) {
    return O = {
      $$typeof: je,
      _currentValue: O,
      _currentValue2: O,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, O.Provider = O, O.Consumer = {
      $$typeof: Me,
      _context: O
    }, O;
  }, Le.createElement = function(O, A, K) {
    var ee, ae = {}, ze = null;
    if (A != null)
      for (ee in A.key !== void 0 && (ze = "" + A.key), A)
        bt.call(A, ee) && ee !== "key" && ee !== "__self" && ee !== "__source" && (ae[ee] = A[ee]);
    var at = arguments.length - 2;
    if (at === 1) ae.children = K;
    else if (1 < at) {
      for (var Ie = Array(at), Tt = 0; Tt < at; Tt++)
        Ie[Tt] = arguments[Tt + 2];
      ae.children = Ie;
    }
    if (O && O.defaultProps)
      for (ee in at = O.defaultProps, at)
        ae[ee] === void 0 && (ae[ee] = at[ee]);
    return Fe(O, ze, ae);
  }, Le.createRef = function() {
    return { current: null };
  }, Le.forwardRef = function(O) {
    return { $$typeof: St, render: O };
  }, Le.isValidElement = se, Le.lazy = function(O) {
    return {
      $$typeof: we,
      _payload: { _status: -1, _result: O },
      _init: P
    };
  }, Le.memo = function(O, A) {
    return {
      $$typeof: Q,
      type: O,
      compare: A === void 0 ? null : A
    };
  }, Le.startTransition = function(O) {
    var A = Oe.T, K = {};
    Oe.T = K;
    try {
      var ee = O(), ae = Oe.S;
      ae !== null && ae(K, ee), typeof ee == "object" && ee !== null && typeof ee.then == "function" && ee.then(Ke, ce);
    } catch (ze) {
      ce(ze);
    } finally {
      A !== null && K.types !== null && (A.types = K.types), Oe.T = A;
    }
  }, Le.unstable_useCacheRefresh = function() {
    return Oe.H.useCacheRefresh();
  }, Le.use = function(O) {
    return Oe.H.use(O);
  }, Le.useActionState = function(O, A, K) {
    return Oe.H.useActionState(O, A, K);
  }, Le.useCallback = function(O, A) {
    return Oe.H.useCallback(O, A);
  }, Le.useContext = function(O) {
    return Oe.H.useContext(O);
  }, Le.useDebugValue = function() {
  }, Le.useDeferredValue = function(O, A) {
    return Oe.H.useDeferredValue(O, A);
  }, Le.useEffect = function(O, A) {
    return Oe.H.useEffect(O, A);
  }, Le.useEffectEvent = function(O) {
    return Oe.H.useEffectEvent(O);
  }, Le.useId = function() {
    return Oe.H.useId();
  }, Le.useImperativeHandle = function(O, A, K) {
    return Oe.H.useImperativeHandle(O, A, K);
  }, Le.useInsertionEffect = function(O, A) {
    return Oe.H.useInsertionEffect(O, A);
  }, Le.useLayoutEffect = function(O, A) {
    return Oe.H.useLayoutEffect(O, A);
  }, Le.useMemo = function(O, A) {
    return Oe.H.useMemo(O, A);
  }, Le.useOptimistic = function(O, A) {
    return Oe.H.useOptimistic(O, A);
  }, Le.useReducer = function(O, A, K) {
    return Oe.H.useReducer(O, A, K);
  }, Le.useRef = function(O) {
    return Oe.H.useRef(O);
  }, Le.useState = function(O) {
    return Oe.H.useState(O);
  }, Le.useSyncExternalStore = function(O, A, K) {
    return Oe.H.useSyncExternalStore(
      O,
      A,
      K
    );
  }, Le.useTransition = function() {
    return Oe.H.useTransition();
  }, Le.version = "19.2.3", Le;
}
var M0 = { exports: {} };
M0.exports;
var NE;
function bA() {
  return NE || (NE = 1, (function(k, te) {
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
      function Re(v) {
        return v === null || typeof v != "object" ? null : (v = Tc && v[Tc] || v["@@iterator"], typeof v == "function" ? v : null);
      }
      function Me(v, M) {
        v = (v = v.constructor) && (v.displayName || v.name) || "ReactClass";
        var I = v + "." + M;
        Wa[I] || (console.error(
          "Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",
          M,
          v
        ), Wa[I] = !0);
      }
      function je(v, M, I) {
        this.props = v, this.context = M, this.refs = _t, this.updater = I || ui;
      }
      function St() {
      }
      function L(v, M, I) {
        this.props = v, this.context = M, this.refs = _t, this.updater = I || ui;
      }
      function Q() {
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
      function $(v) {
        if (v == null) return null;
        if (typeof v == "function")
          return v.$$typeof === es ? null : v.displayName || v.name || null;
        if (typeof v == "string") return v;
        switch (v) {
          case A:
            return "Fragment";
          case ee:
            return "Profiler";
          case K:
            return "StrictMode";
          case Ie:
            return "Suspense";
          case Tt:
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
            case at:
              var M = v.render;
              return v = v.displayName, v || (v = M.displayName || M.name || "", v = v !== "" ? "ForwardRef(" + v + ")" : "ForwardRef"), v;
            case ta:
              return M = v.displayName || null, M !== null ? M : $(v.type) || "Memo";
            case vn:
              M = v._payload, v = v._init;
              try {
                return $(v(M));
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
          var M = $(v);
          return M ? "<" + M + ">" : "<...>";
        } catch {
          return "<...>";
        }
      }
      function ue() {
        var v = me.A;
        return v === null ? null : v.getOwner();
      }
      function Ye() {
        return Error("react-stack-top-frame");
      }
      function $t(v) {
        if (Bo.call(v, "key")) {
          var M = Object.getOwnPropertyDescriptor(v, "key").get;
          if (M && M.isReactWarning) return !1;
        }
        return v.key !== void 0;
      }
      function Je(v, M) {
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
      function lt() {
        var v = $(this.type);
        return ts[v] || (ts[v] = !0, console.error(
          "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
        )), v = this.props.ref, v !== void 0 ? v : null;
      }
      function Dt(v, M, I, le, re, He) {
        var ye = I.ref;
        return v = {
          $$typeof: ge,
          type: v,
          key: M,
          props: I,
          _owner: le
        }, (ye !== void 0 ? ye : null) !== null ? Object.defineProperty(v, "ref", {
          enumerable: !1,
          get: lt
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
          value: re
        }), Object.defineProperty(v, "_debugTask", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: He
        }), Object.freeze && (Object.freeze(v.props), Object.freeze(v)), v;
      }
      function Lt(v, M) {
        return M = Dt(
          v.type,
          M,
          v.props,
          v._owner,
          v._debugStack,
          v._debugTask
        ), v._store && (M._store.validated = v._store.validated), M;
      }
      function Vt(v) {
        Ke(v) ? v._store && (v._store.validated = 1) : typeof v == "object" && v !== null && v.$$typeof === vn && (v._payload.status === "fulfilled" ? Ke(v._payload.value) && v._payload.value._store && (v._payload.value._store.validated = 1) : v._store && (v._store.validated = 1));
      }
      function Ke(v) {
        return typeof v == "object" && v !== null && v.$$typeof === ge;
      }
      function Oe(v) {
        var M = { "=": "=0", ":": "=2" };
        return "$" + v.replace(/[=:]/g, function(I) {
          return M[I];
        });
      }
      function bt(v, M) {
        return typeof v == "object" && v !== null && v.key != null ? (de(v.key), Oe("" + v.key)) : M.toString(36);
      }
      function Fe(v) {
        switch (v.status) {
          case "fulfilled":
            return v.value;
          case "rejected":
            throw v.reason;
          default:
            switch (typeof v.status == "string" ? v.then(Q, Q) : (v.status = "pending", v.then(
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
      function jt(v, M, I, le, re) {
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
                  return ye = v._init, jt(
                    ye(v._payload),
                    M,
                    I,
                    le,
                    re
                  );
              }
          }
        if (ye) {
          ye = v, re = re(ye);
          var ft = le === "" ? "." + bt(ye, 0) : le;
          return Yi(re) ? (I = "", ft != null && (I = ft.replace(ls, "$&/") + "/"), jt(re, M, I, "", function(wl) {
            return wl;
          })) : re != null && (Ke(re) && (re.key != null && (ye && ye.key === re.key || de(re.key)), I = Lt(
            re,
            I + (re.key == null || ye && ye.key === re.key ? "" : ("" + re.key).replace(
              ls,
              "$&/"
            ) + "/") + ft
          ), le !== "" && ye != null && Ke(ye) && ye.key == null && ye._store && !ye._store.validated && (I._store.validated = 2), re = I), M.push(re)), 1;
        }
        if (ye = 0, ft = le === "" ? "." : le + ":", Yi(v))
          for (var qe = 0; qe < v.length; qe++)
            le = v[qe], He = ft + bt(le, qe), ye += jt(
              le,
              M,
              I,
              He,
              re
            );
        else if (qe = Re(v), typeof qe == "function")
          for (qe === v.entries && (wi || console.warn(
            "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
          ), wi = !0), v = qe.call(v), qe = 0; !(le = v.next()).done; )
            le = le.value, He = ft + bt(le, qe++), ye += jt(
              le,
              M,
              I,
              He,
              re
            );
        else if (He === "object") {
          if (typeof v.then == "function")
            return jt(
              Fe(v),
              M,
              I,
              le,
              re
            );
          throw M = String(v), Error(
            "Objects are not valid as a React child (found: " + (M === "[object Object]" ? "object with keys {" + Object.keys(v).join(", ") + "}" : M) + "). If you meant to render a collection of children, use an array instead."
          );
        }
        return ye;
      }
      function se(v, M, I) {
        if (v == null) return v;
        var le = [], re = 0;
        return jt(v, le, "", "", function(He) {
          return M.call(I, He, re++);
        }), le;
      }
      function Et(v) {
        if (v._status === -1) {
          var M = v._ioInfo;
          M != null && (M.start = M.end = performance.now()), M = v._result;
          var I = M();
          if (I.then(
            function(re) {
              if (v._status === 0 || v._status === -1) {
                v._status = 1, v._result = re;
                var He = v._ioInfo;
                He != null && (He.end = performance.now()), I.status === void 0 && (I.status = "fulfilled", I.value = re);
              }
            },
            function(re) {
              if (v._status === 0 || v._status === -1) {
                v._status = 2, v._result = re;
                var He = v._ioInfo;
                He != null && (He.end = performance.now()), I.status === void 0 && (I.status = "rejected", I.reason = re);
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
      function Te() {
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
      function Yt(v) {
        if (Gn === null)
          try {
            var M = ("require" + Math.random()).slice(0, 7);
            Gn = (k && k[M]).call(
              k,
              "timers"
            ).setImmediate;
          } catch {
            Gn = function(le) {
              ns === !1 && (ns = !0, typeof MessageChannel > "u" && console.error(
                "This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."
              ));
              var re = new MessageChannel();
              re.port1.onmessage = le, re.port2.postMessage(void 0);
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
              ce(le), Yt(function() {
                return P(v, M, I);
              });
              return;
            } catch (re) {
              me.thrownErrors.push(re);
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
          } catch (re) {
            v.splice(0, M + 1), me.thrownErrors.push(re);
          } finally {
            Rl = !1;
          }
        }
      }
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
      var ge = /* @__PURE__ */ Symbol.for("react.transitional.element"), O = /* @__PURE__ */ Symbol.for("react.portal"), A = /* @__PURE__ */ Symbol.for("react.fragment"), K = /* @__PURE__ */ Symbol.for("react.strict_mode"), ee = /* @__PURE__ */ Symbol.for("react.profiler"), ae = /* @__PURE__ */ Symbol.for("react.consumer"), ze = /* @__PURE__ */ Symbol.for("react.context"), at = /* @__PURE__ */ Symbol.for("react.forward_ref"), Ie = /* @__PURE__ */ Symbol.for("react.suspense"), Tt = /* @__PURE__ */ Symbol.for("react.suspense_list"), ta = /* @__PURE__ */ Symbol.for("react.memo"), vn = /* @__PURE__ */ Symbol.for("react.lazy"), fe = /* @__PURE__ */ Symbol.for("react.activity"), Tc = Symbol.iterator, Wa = {}, ui = {
        isMounted: function() {
          return !1;
        },
        enqueueForceUpdate: function(v) {
          Me(v, "forceUpdate");
        },
        enqueueReplaceState: function(v) {
          Me(v, "replaceState");
        },
        enqueueSetState: function(v) {
          Me(v, "setState");
        }
      }, uu = Object.assign, _t = {};
      Object.freeze(_t), je.prototype.isReactComponent = {}, je.prototype.setState = function(v, M) {
        if (typeof v != "object" && typeof v != "function" && v != null)
          throw Error(
            "takes an object of state variables to update or a function which returns an object of state variables."
          );
        this.updater.enqueueSetState(this, v, M, "setState");
      }, je.prototype.forceUpdate = function(v) {
        this.updater.enqueueForceUpdate(this, v, "forceUpdate");
      };
      var Gl = {
        isMounted: [
          "isMounted",
          "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."
        ],
        replaceState: [
          "replaceState",
          "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."
        ]
      };
      for (Xi in Gl)
        Gl.hasOwnProperty(Xi) && B(Xi, Gl[Xi]);
      St.prototype = je.prototype, Gl = L.prototype = new St(), Gl.constructor = L, uu(Gl, je.prototype), Gl.isPureReactComponent = !0;
      var Yi = Array.isArray, es = /* @__PURE__ */ Symbol.for("react.client.reference"), me = {
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
      Gl = {
        react_stack_bottom_frame: function(v) {
          return v();
        }
      };
      var El, qi, ts = {}, xo = Gl.react_stack_bottom_frame.bind(
        Gl,
        Ye
      )(), Gi = iu(U(Ye)), wi = !1, ls = /\/+/g, as = typeof reportError == "function" ? reportError : function(v) {
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
      }, ns = !1, Gn = null, pl = 0, _a = !1, Rl = !1, jo = typeof queueMicrotask == "function" ? function(v) {
        queueMicrotask(function() {
          return queueMicrotask(v);
        });
      } : Yt;
      Gl = Object.freeze({
        __proto__: null,
        c: function(v) {
          return Te().useMemoCache(v);
        }
      });
      var Xi = {
        map: se,
        forEach: function(v, M, I) {
          se(
            v,
            function() {
              M.apply(this, arguments);
            },
            I
          );
        },
        count: function(v) {
          var M = 0;
          return se(v, function() {
            M++;
          }), M;
        },
        toArray: function(v) {
          return se(v, function(M) {
            return M;
          }) || [];
        },
        only: function(v) {
          if (!Ke(v))
            throw Error(
              "React.Children.only expected to receive a single React element child."
            );
          return v;
        }
      };
      te.Activity = fe, te.Children = Xi, te.Component = je, te.Fragment = A, te.Profiler = ee, te.PureComponent = L, te.StrictMode = K, te.Suspense = Ie, te.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = me, te.__COMPILER_RUNTIME = Gl, te.act = function(v) {
        var M = me.actQueue, I = pl;
        pl++;
        var le = me.actQueue = M !== null ? M : [], re = !1;
        try {
          var He = v();
        } catch (qe) {
          me.thrownErrors.push(qe);
        }
        if (0 < me.thrownErrors.length)
          throw j(M, I), v = X(me.thrownErrors), me.thrownErrors.length = 0, v;
        if (He !== null && typeof He == "object" && typeof He.then == "function") {
          var ye = He;
          return jo(function() {
            re || _a || (_a = !0, console.error(
              "You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"
            ));
          }), {
            then: function(qe, wl) {
              re = !0, ye.then(
                function(Da) {
                  if (j(M, I), I === 0) {
                    try {
                      ce(le), Yt(function() {
                        return P(
                          Da,
                          qe,
                          wl
                        );
                      });
                    } catch (Ac) {
                      me.thrownErrors.push(Ac);
                    }
                    if (0 < me.thrownErrors.length) {
                      var fd = X(
                        me.thrownErrors
                      );
                      me.thrownErrors.length = 0, wl(fd);
                    }
                  } else qe(Da);
                },
                function(Da) {
                  j(M, I), 0 < me.thrownErrors.length && (Da = X(
                    me.thrownErrors
                  ), me.thrownErrors.length = 0), wl(Da);
                }
              );
            }
          };
        }
        var ft = He;
        if (j(M, I), I === 0 && (ce(le), le.length !== 0 && jo(function() {
          re || _a || (_a = !0, console.error(
            "A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"
          ));
        }), me.actQueue = null), 0 < me.thrownErrors.length)
          throw v = X(me.thrownErrors), me.thrownErrors.length = 0, v;
        return {
          then: function(qe, wl) {
            re = !0, I === 0 ? (me.actQueue = le, Yt(function() {
              return P(
                ft,
                qe,
                wl
              );
            })) : qe(ft);
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
        var le = uu({}, v.props), re = v.key, He = v._owner;
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
          ye && (He = ue()), $t(M) && (de(M.key), re = "" + M.key);
          for (ft in M)
            !Bo.call(M, ft) || ft === "key" || ft === "__self" || ft === "__source" || ft === "ref" && M.ref === void 0 || (le[ft] = M[ft]);
        }
        var ft = arguments.length - 2;
        if (ft === 1) le.children = I;
        else if (1 < ft) {
          ye = Array(ft);
          for (var qe = 0; qe < ft; qe++)
            ye[qe] = arguments[qe + 2];
          le.children = ye;
        }
        for (le = Dt(
          v.type,
          re,
          le,
          He,
          v._debugStack,
          v._debugTask
        ), re = 2; re < arguments.length; re++)
          Vt(arguments[re]);
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
          Vt(arguments[le]);
        le = {};
        var re = null;
        if (M != null)
          for (qe in qi || !("__self" in M) || "key" in M || (qi = !0, console.warn(
            "Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform"
          )), $t(M) && (de(M.key), re = "" + M.key), M)
            Bo.call(M, qe) && qe !== "key" && qe !== "__self" && qe !== "__source" && (le[qe] = M[qe]);
        var He = arguments.length - 2;
        if (He === 1) le.children = I;
        else if (1 < He) {
          for (var ye = Array(He), ft = 0; ft < He; ft++)
            ye[ft] = arguments[ft + 2];
          Object.freeze && Object.freeze(ye), le.children = ye;
        }
        if (v && v.defaultProps)
          for (qe in He = v.defaultProps, He)
            le[qe] === void 0 && (le[qe] = He[qe]);
        re && Je(
          le,
          typeof v == "function" ? v.displayName || v.name || "Unknown" : v
        );
        var qe = 1e4 > me.recentlyCreatedOwnerStacks++;
        return Dt(
          v,
          re,
          le,
          ue(),
          qe ? Error("react-stack-top-frame") : xo,
          qe ? iu(U(v)) : Gi
        );
      }, te.createRef = function() {
        var v = { current: null };
        return Object.seal(v), v;
      }, te.forwardRef = function(v) {
        v != null && v.$$typeof === ta ? console.error(
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
        var M = { $$typeof: at, render: v }, I;
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
      }, te.isValidElement = Ke, te.lazy = function(v) {
        v = { _status: -1, _result: v };
        var M = {
          $$typeof: vn,
          _payload: v,
          _init: Et
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
          $$typeof: ta,
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
          var le = v(), re = me.S;
          re !== null && re(I, le), typeof le == "object" && le !== null && typeof le.then == "function" && (me.asyncTransitions++, le.then(Ue, Ue), le.then(Q, as));
        } catch (He) {
          as(He);
        } finally {
          M === null && I._updatedFibers && (v = I._updatedFibers.size, I._updatedFibers.clear(), 10 < v && console.warn(
            "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
          )), M !== null && I.types !== null && (M.types !== null && M.types !== I.types && console.error(
            "We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."
          ), M.types = I.types), me.T = M;
        }
      }, te.unstable_useCacheRefresh = function() {
        return Te().useCacheRefresh();
      }, te.use = function(v) {
        return Te().use(v);
      }, te.useActionState = function(v, M, I) {
        return Te().useActionState(
          v,
          M,
          I
        );
      }, te.useCallback = function(v, M) {
        return Te().useCallback(v, M);
      }, te.useContext = function(v) {
        var M = Te();
        return v.$$typeof === ae && console.error(
          "Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?"
        ), M.useContext(v);
      }, te.useDebugValue = function(v, M) {
        return Te().useDebugValue(v, M);
      }, te.useDeferredValue = function(v, M) {
        return Te().useDeferredValue(v, M);
      }, te.useEffect = function(v, M) {
        return v == null && console.warn(
          "React Hook useEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        ), Te().useEffect(v, M);
      }, te.useEffectEvent = function(v) {
        return Te().useEffectEvent(v);
      }, te.useId = function() {
        return Te().useId();
      }, te.useImperativeHandle = function(v, M, I) {
        return Te().useImperativeHandle(v, M, I);
      }, te.useInsertionEffect = function(v, M) {
        return v == null && console.warn(
          "React Hook useInsertionEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        ), Te().useInsertionEffect(v, M);
      }, te.useLayoutEffect = function(v, M) {
        return v == null && console.warn(
          "React Hook useLayoutEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        ), Te().useLayoutEffect(v, M);
      }, te.useMemo = function(v, M) {
        return Te().useMemo(v, M);
      }, te.useOptimistic = function(v, M) {
        return Te().useOptimistic(v, M);
      }, te.useReducer = function(v, M, I) {
        return Te().useReducer(v, M, I);
      }, te.useRef = function(v) {
        return Te().useRef(v);
      }, te.useState = function(v) {
        return Te().useState(v);
      }, te.useSyncExternalStore = function(v, M, I) {
        return Te().useSyncExternalStore(
          v,
          M,
          I
        );
      }, te.useTransition = function() {
        return Te().useTransition();
      }, te.version = "19.2.3", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    })();
  })(M0, M0.exports)), M0.exports;
}
var BE;
function Um() {
  if (BE) return Xg.exports;
  BE = 1;
  var k = {};
  return k.NODE_ENV === "production" ? Xg.exports = SA() : Xg.exports = bA(), Xg.exports;
}
var xE;
function EA() {
  if (xE) return _0;
  xE = 1;
  var k = {};
  return k.NODE_ENV !== "production" && (function() {
    function te(A) {
      if (A == null) return null;
      if (typeof A == "function")
        return A.$$typeof === Et ? null : A.displayName || A.name || null;
      if (typeof A == "string") return A;
      switch (A) {
        case Je:
          return "Fragment";
        case Dt:
          return "Profiler";
        case lt:
          return "StrictMode";
        case Oe:
          return "Suspense";
        case bt:
          return "SuspenseList";
        case se:
          return "Activity";
      }
      if (typeof A == "object")
        switch (typeof A.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), A.$$typeof) {
          case $t:
            return "Portal";
          case Vt:
            return A.displayName || "Context";
          case Lt:
            return (A._context.displayName || "Context") + ".Consumer";
          case Ke:
            var K = A.render;
            return A = A.displayName, A || (A = K.displayName || K.name || "", A = A !== "" ? "ForwardRef(" + A + ")" : "ForwardRef"), A;
          case Fe:
            return K = A.displayName || null, K !== null ? K : te(A.type) || "Memo";
          case jt:
            K = A._payload, A = A._init;
            try {
              return te(A(K));
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
        var K = !1;
      } catch {
        K = !0;
      }
      if (K) {
        K = console;
        var ee = K.error, ae = typeof Symbol == "function" && Symbol.toStringTag && A[Symbol.toStringTag] || A.constructor.name || "Object";
        return ee.call(
          K,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          ae
        ), Ne(A);
      }
    }
    function Re(A) {
      if (A === Je) return "<>";
      if (typeof A == "object" && A !== null && A.$$typeof === jt)
        return "<...>";
      try {
        var K = te(A);
        return K ? "<" + K + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function Me() {
      var A = Te.A;
      return A === null ? null : A.getOwner();
    }
    function je() {
      return Error("react-stack-top-frame");
    }
    function St(A) {
      if (Ue.call(A, "key")) {
        var K = Object.getOwnPropertyDescriptor(A, "key").get;
        if (K && K.isReactWarning) return !1;
      }
      return A.key !== void 0;
    }
    function L(A, K) {
      function ee() {
        j || (j = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          K
        ));
      }
      ee.isReactWarning = !0, Object.defineProperty(A, "key", {
        get: ee,
        configurable: !0
      });
    }
    function Q() {
      var A = te(this.type);
      return P[A] || (P[A] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), A = this.props.ref, A !== void 0 ? A : null;
    }
    function we(A, K, ee, ae, ze, at) {
      var Ie = ee.ref;
      return A = {
        $$typeof: Ye,
        type: A,
        key: K,
        props: ee,
        _owner: ae
      }, (Ie !== void 0 ? Ie : null) !== null ? Object.defineProperty(A, "ref", {
        enumerable: !1,
        get: Q
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
        value: at
      }), Object.freeze && (Object.freeze(A.props), Object.freeze(A)), A;
    }
    function de(A, K, ee, ae, ze, at) {
      var Ie = K.children;
      if (Ie !== void 0)
        if (ae)
          if (Yt(Ie)) {
            for (ae = 0; ae < Ie.length; ae++)
              $(Ie[ae]);
            Object.freeze && Object.freeze(Ie);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else $(Ie);
      if (Ue.call(K, "key")) {
        Ie = te(A);
        var Tt = Object.keys(K).filter(function(vn) {
          return vn !== "key";
        });
        ae = 0 < Tt.length ? "{key: someKey, " + Tt.join(": ..., ") + ": ...}" : "{key: someKey}", O[Ie + ae] || (Tt = 0 < Tt.length ? "{" + Tt.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          ae,
          Ie,
          Tt,
          Ie
        ), O[Ie + ae] = !0);
      }
      if (Ie = null, ee !== void 0 && (B(ee), Ie = "" + ee), St(K) && (B(K.key), Ie = "" + K.key), "key" in K) {
        ee = {};
        for (var ta in K)
          ta !== "key" && (ee[ta] = K[ta]);
      } else ee = K;
      return Ie && L(
        ee,
        typeof A == "function" ? A.displayName || A.name || "Unknown" : A
      ), we(
        A,
        Ie,
        ee,
        Me(),
        ze,
        at
      );
    }
    function $(A) {
      U(A) ? A._store && (A._store.validated = 1) : typeof A == "object" && A !== null && A.$$typeof === jt && (A._payload.status === "fulfilled" ? U(A._payload.value) && A._payload.value._store && (A._payload.value._store.validated = 1) : A._store && (A._store.validated = 1));
    }
    function U(A) {
      return typeof A == "object" && A !== null && A.$$typeof === Ye;
    }
    var ue = Um(), Ye = /* @__PURE__ */ Symbol.for("react.transitional.element"), $t = /* @__PURE__ */ Symbol.for("react.portal"), Je = /* @__PURE__ */ Symbol.for("react.fragment"), lt = /* @__PURE__ */ Symbol.for("react.strict_mode"), Dt = /* @__PURE__ */ Symbol.for("react.profiler"), Lt = /* @__PURE__ */ Symbol.for("react.consumer"), Vt = /* @__PURE__ */ Symbol.for("react.context"), Ke = /* @__PURE__ */ Symbol.for("react.forward_ref"), Oe = /* @__PURE__ */ Symbol.for("react.suspense"), bt = /* @__PURE__ */ Symbol.for("react.suspense_list"), Fe = /* @__PURE__ */ Symbol.for("react.memo"), jt = /* @__PURE__ */ Symbol.for("react.lazy"), se = /* @__PURE__ */ Symbol.for("react.activity"), Et = /* @__PURE__ */ Symbol.for("react.client.reference"), Te = ue.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Ue = Object.prototype.hasOwnProperty, Yt = Array.isArray, X = console.createTask ? console.createTask : function() {
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
    )(), ge = X(Re(je)), O = {};
    _0.Fragment = Je, _0.jsx = function(A, K, ee) {
      var ae = 1e4 > Te.recentlyCreatedOwnerStacks++;
      return de(
        A,
        K,
        ee,
        !1,
        ae ? Error("react-stack-top-frame") : ce,
        ae ? X(Re(A)) : ge
      );
    }, _0.jsxs = function(A, K, ee) {
      var ae = 1e4 > Te.recentlyCreatedOwnerStacks++;
      return de(
        A,
        K,
        ee,
        !0,
        ae ? Error("react-stack-top-frame") : ce,
        ae ? X(Re(A)) : ge
      );
    };
  })(), _0;
}
var jE;
function TA() {
  if (jE) return wg.exports;
  jE = 1;
  var k = {};
  return k.NODE_ENV === "production" ? wg.exports = gA() : wg.exports = EA(), wg.exports;
}
var ql = TA(), Qg = { exports: {} }, D0 = {}, Lg = { exports: {} }, g1 = {};
var YE;
function AA() {
  return YE || (YE = 1, (function(k) {
    function te(X, j) {
      var P = X.length;
      X.push(j);
      e: for (; 0 < P; ) {
        var ce = P - 1 >>> 1, ge = X[ce];
        if (0 < Re(ge, j))
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
          var A = 2 * (ce + 1) - 1, K = X[A], ee = A + 1, ae = X[ee];
          if (0 > Re(K, P))
            ee < ge && 0 > Re(ae, K) ? (X[ce] = ae, X[ee] = P, ce = ee) : (X[ce] = K, X[A] = P, ce = A);
          else if (ee < ge && 0 > Re(ae, P))
            X[ce] = ae, X[ee] = P, ce = ee;
          else break e;
        }
      }
      return j;
    }
    function Re(X, j) {
      var P = X.sortIndex - j.sortIndex;
      return P !== 0 ? P : X.id - j.id;
    }
    if (k.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var Me = performance;
      k.unstable_now = function() {
        return Me.now();
      };
    } else {
      var je = Date, St = je.now();
      k.unstable_now = function() {
        return je.now() - St;
      };
    }
    var L = [], Q = [], we = 1, de = null, $ = 3, U = !1, ue = !1, Ye = !1, $t = !1, Je = typeof setTimeout == "function" ? setTimeout : null, lt = typeof clearTimeout == "function" ? clearTimeout : null, Dt = typeof setImmediate < "u" ? setImmediate : null;
    function Lt(X) {
      for (var j = Ne(Q); j !== null; ) {
        if (j.callback === null) B(Q);
        else if (j.startTime <= X)
          B(Q), j.sortIndex = j.expirationTime, te(L, j);
        else break;
        j = Ne(Q);
      }
    }
    function Vt(X) {
      if (Ye = !1, Lt(X), !ue)
        if (Ne(L) !== null)
          ue = !0, Ke || (Ke = !0, Et());
        else {
          var j = Ne(Q);
          j !== null && Yt(Vt, j.startTime - X);
        }
    }
    var Ke = !1, Oe = -1, bt = 5, Fe = -1;
    function jt() {
      return $t ? !0 : !(k.unstable_now() - Fe < bt);
    }
    function se() {
      if ($t = !1, Ke) {
        var X = k.unstable_now();
        Fe = X;
        var j = !0;
        try {
          e: {
            ue = !1, Ye && (Ye = !1, lt(Oe), Oe = -1), U = !0;
            var P = $;
            try {
              t: {
                for (Lt(X), de = Ne(L); de !== null && !(de.expirationTime > X && jt()); ) {
                  var ce = de.callback;
                  if (typeof ce == "function") {
                    de.callback = null, $ = de.priorityLevel;
                    var ge = ce(
                      de.expirationTime <= X
                    );
                    if (X = k.unstable_now(), typeof ge == "function") {
                      de.callback = ge, Lt(X), j = !0;
                      break t;
                    }
                    de === Ne(L) && B(L), Lt(X);
                  } else B(L);
                  de = Ne(L);
                }
                if (de !== null) j = !0;
                else {
                  var O = Ne(Q);
                  O !== null && Yt(
                    Vt,
                    O.startTime - X
                  ), j = !1;
                }
              }
              break e;
            } finally {
              de = null, $ = P, U = !1;
            }
            j = void 0;
          }
        } finally {
          j ? Et() : Ke = !1;
        }
      }
    }
    var Et;
    if (typeof Dt == "function")
      Et = function() {
        Dt(se);
      };
    else if (typeof MessageChannel < "u") {
      var Te = new MessageChannel(), Ue = Te.port2;
      Te.port1.onmessage = se, Et = function() {
        Ue.postMessage(null);
      };
    } else
      Et = function() {
        Je(se, 0);
      };
    function Yt(X, j) {
      Oe = Je(function() {
        X(k.unstable_now());
      }, j);
    }
    k.unstable_IdlePriority = 5, k.unstable_ImmediatePriority = 1, k.unstable_LowPriority = 4, k.unstable_NormalPriority = 3, k.unstable_Profiling = null, k.unstable_UserBlockingPriority = 2, k.unstable_cancelCallback = function(X) {
      X.callback = null;
    }, k.unstable_forceFrameRate = function(X) {
      0 > X || 125 < X ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : bt = 0 < X ? Math.floor(1e3 / X) : 5;
    }, k.unstable_getCurrentPriorityLevel = function() {
      return $;
    }, k.unstable_next = function(X) {
      switch ($) {
        case 1:
        case 2:
        case 3:
          var j = 3;
          break;
        default:
          j = $;
      }
      var P = $;
      $ = j;
      try {
        return X();
      } finally {
        $ = P;
      }
    }, k.unstable_requestPaint = function() {
      $t = !0;
    }, k.unstable_runWithPriority = function(X, j) {
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
      var P = $;
      $ = X;
      try {
        return j();
      } finally {
        $ = P;
      }
    }, k.unstable_scheduleCallback = function(X, j, P) {
      var ce = k.unstable_now();
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
      }, P > ce ? (X.sortIndex = P, te(Q, X), Ne(L) === null && X === Ne(Q) && (Ye ? (lt(Oe), Oe = -1) : Ye = !0, Yt(Vt, P - ce))) : (X.sortIndex = ge, te(L, X), ue || U || (ue = !0, Ke || (Ke = !0, Et()))), X;
    }, k.unstable_shouldYield = jt, k.unstable_wrapCallback = function(X) {
      var j = $;
      return function() {
        var P = $;
        $ = j;
        try {
          return X.apply(this, arguments);
        } finally {
          $ = P;
        }
      };
    };
  })(g1)), g1;
}
var S1 = {}, qE;
function OA() {
  return qE || (qE = 1, (function(k) {
    var te = {};
    te.NODE_ENV !== "production" && (function() {
      function Ne() {
        if (Ke = !1, jt) {
          var j = k.unstable_now();
          Te = j;
          var P = !0;
          try {
            e: {
              Lt = !1, Vt && (Vt = !1, bt(se), se = -1), Dt = !0;
              var ce = lt;
              try {
                t: {
                  for (St(j), Je = Re(ue); Je !== null && !(Je.expirationTime > j && Q()); ) {
                    var ge = Je.callback;
                    if (typeof ge == "function") {
                      Je.callback = null, lt = Je.priorityLevel;
                      var O = ge(
                        Je.expirationTime <= j
                      );
                      if (j = k.unstable_now(), typeof O == "function") {
                        Je.callback = O, St(j), P = !0;
                        break t;
                      }
                      Je === Re(ue) && Me(ue), St(j);
                    } else Me(ue);
                    Je = Re(ue);
                  }
                  if (Je !== null) P = !0;
                  else {
                    var A = Re(Ye);
                    A !== null && we(
                      L,
                      A.startTime - j
                    ), P = !1;
                  }
                }
                break e;
              } finally {
                Je = null, lt = ce, Dt = !1;
              }
              P = void 0;
            }
          } finally {
            P ? Ue() : jt = !1;
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
      function Re(j) {
        return j.length === 0 ? null : j[0];
      }
      function Me(j) {
        if (j.length === 0) return null;
        var P = j[0], ce = j.pop();
        if (ce !== P) {
          j[0] = ce;
          e: for (var ge = 0, O = j.length, A = O >>> 1; ge < A; ) {
            var K = 2 * (ge + 1) - 1, ee = j[K], ae = K + 1, ze = j[ae];
            if (0 > je(ee, ce))
              ae < O && 0 > je(ze, ee) ? (j[ge] = ze, j[ae] = ce, ge = ae) : (j[ge] = ee, j[K] = ce, ge = K);
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
      function St(j) {
        for (var P = Re(Ye); P !== null; ) {
          if (P.callback === null) Me(Ye);
          else if (P.startTime <= j)
            Me(Ye), P.sortIndex = P.expirationTime, B(ue, P);
          else break;
          P = Re(Ye);
        }
      }
      function L(j) {
        if (Vt = !1, St(j), !Lt)
          if (Re(ue) !== null)
            Lt = !0, jt || (jt = !0, Ue());
          else {
            var P = Re(Ye);
            P !== null && we(
              L,
              P.startTime - j
            );
          }
      }
      function Q() {
        return Ke ? !0 : !(k.unstable_now() - Te < Et);
      }
      function we(j, P) {
        se = Oe(function() {
          j(k.unstable_now());
        }, P);
      }
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error()), k.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
        var de = performance;
        k.unstable_now = function() {
          return de.now();
        };
      } else {
        var $ = Date, U = $.now();
        k.unstable_now = function() {
          return $.now() - U;
        };
      }
      var ue = [], Ye = [], $t = 1, Je = null, lt = 3, Dt = !1, Lt = !1, Vt = !1, Ke = !1, Oe = typeof setTimeout == "function" ? setTimeout : null, bt = typeof clearTimeout == "function" ? clearTimeout : null, Fe = typeof setImmediate < "u" ? setImmediate : null, jt = !1, se = -1, Et = 5, Te = -1;
      if (typeof Fe == "function")
        var Ue = function() {
          Fe(Ne);
        };
      else if (typeof MessageChannel < "u") {
        var Yt = new MessageChannel(), X = Yt.port2;
        Yt.port1.onmessage = Ne, Ue = function() {
          X.postMessage(null);
        };
      } else
        Ue = function() {
          Oe(Ne, 0);
        };
      k.unstable_IdlePriority = 5, k.unstable_ImmediatePriority = 1, k.unstable_LowPriority = 4, k.unstable_NormalPriority = 3, k.unstable_Profiling = null, k.unstable_UserBlockingPriority = 2, k.unstable_cancelCallback = function(j) {
        j.callback = null;
      }, k.unstable_forceFrameRate = function(j) {
        0 > j || 125 < j ? console.error(
          "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
        ) : Et = 0 < j ? Math.floor(1e3 / j) : 5;
      }, k.unstable_getCurrentPriorityLevel = function() {
        return lt;
      }, k.unstable_next = function(j) {
        switch (lt) {
          case 1:
          case 2:
          case 3:
            var P = 3;
            break;
          default:
            P = lt;
        }
        var ce = lt;
        lt = P;
        try {
          return j();
        } finally {
          lt = ce;
        }
      }, k.unstable_requestPaint = function() {
        Ke = !0;
      }, k.unstable_runWithPriority = function(j, P) {
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
        var ce = lt;
        lt = j;
        try {
          return P();
        } finally {
          lt = ce;
        }
      }, k.unstable_scheduleCallback = function(j, P, ce) {
        var ge = k.unstable_now();
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
          id: $t++,
          callback: P,
          priorityLevel: j,
          startTime: ce,
          expirationTime: O,
          sortIndex: -1
        }, ce > ge ? (j.sortIndex = ce, B(Ye, j), Re(ue) === null && j === Re(Ye) && (Vt ? (bt(se), se = -1) : Vt = !0, we(L, ce - ge))) : (j.sortIndex = O, B(ue, j), Lt || Dt || (Lt = !0, jt || (jt = !0, Ue()))), j;
      }, k.unstable_shouldYield = Q, k.unstable_wrapCallback = function(j) {
        var P = lt;
        return function() {
          var ce = lt;
          lt = P;
          try {
            return j.apply(this, arguments);
          } finally {
            lt = ce;
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
  var k = {};
  return k.NODE_ENV === "production" ? Lg.exports = AA() : Lg.exports = OA(), Lg.exports;
}
var Vg = { exports: {} }, $a = {};
var wE;
function zA() {
  if (wE) return $a;
  wE = 1;
  var k = Um();
  function te(L) {
    var Q = "https://react.dev/errors/" + L;
    if (1 < arguments.length) {
      Q += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var we = 2; we < arguments.length; we++)
        Q += "&args[]=" + encodeURIComponent(arguments[we]);
    }
    return "Minified React error #" + L + "; visit " + Q + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
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
  }, Re = /* @__PURE__ */ Symbol.for("react.portal");
  function Me(L, Q, we) {
    var de = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: Re,
      key: de == null ? null : "" + de,
      children: L,
      containerInfo: Q,
      implementation: we
    };
  }
  var je = k.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function St(L, Q) {
    if (L === "font") return "";
    if (typeof Q == "string")
      return Q === "use-credentials" ? Q : "";
  }
  return $a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = B, $a.createPortal = function(L, Q) {
    var we = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Q || Q.nodeType !== 1 && Q.nodeType !== 9 && Q.nodeType !== 11)
      throw Error(te(299));
    return Me(L, Q, null, we);
  }, $a.flushSync = function(L) {
    var Q = je.T, we = B.p;
    try {
      if (je.T = null, B.p = 2, L) return L();
    } finally {
      je.T = Q, B.p = we, B.d.f();
    }
  }, $a.preconnect = function(L, Q) {
    typeof L == "string" && (Q ? (Q = Q.crossOrigin, Q = typeof Q == "string" ? Q === "use-credentials" ? Q : "" : void 0) : Q = null, B.d.C(L, Q));
  }, $a.prefetchDNS = function(L) {
    typeof L == "string" && B.d.D(L);
  }, $a.preinit = function(L, Q) {
    if (typeof L == "string" && Q && typeof Q.as == "string") {
      var we = Q.as, de = St(we, Q.crossOrigin), $ = typeof Q.integrity == "string" ? Q.integrity : void 0, U = typeof Q.fetchPriority == "string" ? Q.fetchPriority : void 0;
      we === "style" ? B.d.S(
        L,
        typeof Q.precedence == "string" ? Q.precedence : void 0,
        {
          crossOrigin: de,
          integrity: $,
          fetchPriority: U
        }
      ) : we === "script" && B.d.X(L, {
        crossOrigin: de,
        integrity: $,
        fetchPriority: U,
        nonce: typeof Q.nonce == "string" ? Q.nonce : void 0
      });
    }
  }, $a.preinitModule = function(L, Q) {
    if (typeof L == "string")
      if (typeof Q == "object" && Q !== null) {
        if (Q.as == null || Q.as === "script") {
          var we = St(
            Q.as,
            Q.crossOrigin
          );
          B.d.M(L, {
            crossOrigin: we,
            integrity: typeof Q.integrity == "string" ? Q.integrity : void 0,
            nonce: typeof Q.nonce == "string" ? Q.nonce : void 0
          });
        }
      } else Q == null && B.d.M(L);
  }, $a.preload = function(L, Q) {
    if (typeof L == "string" && typeof Q == "object" && Q !== null && typeof Q.as == "string") {
      var we = Q.as, de = St(we, Q.crossOrigin);
      B.d.L(L, we, {
        crossOrigin: de,
        integrity: typeof Q.integrity == "string" ? Q.integrity : void 0,
        nonce: typeof Q.nonce == "string" ? Q.nonce : void 0,
        type: typeof Q.type == "string" ? Q.type : void 0,
        fetchPriority: typeof Q.fetchPriority == "string" ? Q.fetchPriority : void 0,
        referrerPolicy: typeof Q.referrerPolicy == "string" ? Q.referrerPolicy : void 0,
        imageSrcSet: typeof Q.imageSrcSet == "string" ? Q.imageSrcSet : void 0,
        imageSizes: typeof Q.imageSizes == "string" ? Q.imageSizes : void 0,
        media: typeof Q.media == "string" ? Q.media : void 0
      });
    }
  }, $a.preloadModule = function(L, Q) {
    if (typeof L == "string")
      if (Q) {
        var we = St(Q.as, Q.crossOrigin);
        B.d.m(L, {
          as: typeof Q.as == "string" && Q.as !== "script" ? Q.as : void 0,
          crossOrigin: we,
          integrity: typeof Q.integrity == "string" ? Q.integrity : void 0
        });
      } else B.d.m(L);
  }, $a.requestFormReset = function(L) {
    B.d.r(L);
  }, $a.unstable_batchedUpdates = function(L, Q) {
    return L(Q);
  }, $a.useFormState = function(L, Q, we) {
    return je.H.useFormState(L, Q, we);
  }, $a.useFormStatus = function() {
    return je.H.useHostTransitionStatus();
  }, $a.version = "19.2.3", $a;
}
var ka = {}, XE;
function _A() {
  if (XE) return ka;
  XE = 1;
  var k = {};
  return k.NODE_ENV !== "production" && (function() {
    function te() {
    }
    function Ne($) {
      return "" + $;
    }
    function B($, U, ue) {
      var Ye = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      try {
        Ne(Ye);
        var $t = !1;
      } catch {
        $t = !0;
      }
      return $t && (console.error(
        "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
        typeof Symbol == "function" && Symbol.toStringTag && Ye[Symbol.toStringTag] || Ye.constructor.name || "Object"
      ), Ne(Ye)), {
        $$typeof: we,
        key: Ye == null ? null : "" + Ye,
        children: $,
        containerInfo: U,
        implementation: ue
      };
    }
    function Re($, U) {
      if ($ === "font") return "";
      if (typeof U == "string")
        return U === "use-credentials" ? U : "";
    }
    function Me($) {
      return $ === null ? "`null`" : $ === void 0 ? "`undefined`" : $ === "" ? "an empty string" : 'something with type "' + typeof $ + '"';
    }
    function je($) {
      return $ === null ? "`null`" : $ === void 0 ? "`undefined`" : $ === "" ? "an empty string" : typeof $ == "string" ? JSON.stringify($) : typeof $ == "number" ? "`" + $ + "`" : 'something with type "' + typeof $ + '"';
    }
    function St() {
      var $ = de.H;
      return $ === null && console.error(
        `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
      ), $;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var L = Um(), Q = {
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
    ), ka.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Q, ka.createPortal = function($, U) {
      var ue = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!U || U.nodeType !== 1 && U.nodeType !== 9 && U.nodeType !== 11)
        throw Error("Target container is not a DOM element.");
      return B($, U, null, ue);
    }, ka.flushSync = function($) {
      var U = de.T, ue = Q.p;
      try {
        if (de.T = null, Q.p = 2, $)
          return $();
      } finally {
        de.T = U, Q.p = ue, Q.d.f() && console.error(
          "flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."
        );
      }
    }, ka.preconnect = function($, U) {
      typeof $ == "string" && $ ? U != null && typeof U != "object" ? console.error(
        "ReactDOM.preconnect(): Expected the `options` argument (second) to be an object but encountered %s instead. The only supported option at this time is `crossOrigin` which accepts a string.",
        je(U)
      ) : U != null && typeof U.crossOrigin != "string" && console.error(
        "ReactDOM.preconnect(): Expected the `crossOrigin` option (second argument) to be a string but encountered %s instead. Try removing this option or passing a string value instead.",
        Me(U.crossOrigin)
      ) : console.error(
        "ReactDOM.preconnect(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
        Me($)
      ), typeof $ == "string" && (U ? (U = U.crossOrigin, U = typeof U == "string" ? U === "use-credentials" ? U : "" : void 0) : U = null, Q.d.C($, U));
    }, ka.prefetchDNS = function($) {
      if (typeof $ != "string" || !$)
        console.error(
          "ReactDOM.prefetchDNS(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
          Me($)
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
      typeof $ == "string" && Q.d.D($);
    }, ka.preinit = function($, U) {
      if (typeof $ == "string" && $ ? U == null || typeof U != "object" ? console.error(
        "ReactDOM.preinit(): Expected the `options` argument (second) to be an object with an `as` property describing the type of resource to be preinitialized but encountered %s instead.",
        je(U)
      ) : U.as !== "style" && U.as !== "script" && console.error(
        'ReactDOM.preinit(): Expected the `as` property in the `options` argument (second) to contain a valid value describing the type of resource to be preinitialized but encountered %s instead. Valid values for `as` are "style" and "script".',
        je(U.as)
      ) : console.error(
        "ReactDOM.preinit(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
        Me($)
      ), typeof $ == "string" && U && typeof U.as == "string") {
        var ue = U.as, Ye = Re(ue, U.crossOrigin), $t = typeof U.integrity == "string" ? U.integrity : void 0, Je = typeof U.fetchPriority == "string" ? U.fetchPriority : void 0;
        ue === "style" ? Q.d.S(
          $,
          typeof U.precedence == "string" ? U.precedence : void 0,
          {
            crossOrigin: Ye,
            integrity: $t,
            fetchPriority: Je
          }
        ) : ue === "script" && Q.d.X($, {
          crossOrigin: Ye,
          integrity: $t,
          fetchPriority: Je,
          nonce: typeof U.nonce == "string" ? U.nonce : void 0
        });
      }
    }, ka.preinitModule = function($, U) {
      var ue = "";
      typeof $ == "string" && $ || (ue += " The `href` argument encountered was " + Me($) + "."), U !== void 0 && typeof U != "object" ? ue += " The `options` argument encountered was " + Me(U) + "." : U && "as" in U && U.as !== "script" && (ue += " The `as` option encountered was " + je(U.as) + "."), ue ? console.error(
        "ReactDOM.preinitModule(): Expected up to two arguments, a non-empty `href` string and, optionally, an `options` object with a valid `as` property.%s",
        ue
      ) : (ue = U && typeof U.as == "string" ? U.as : "script", ue) === "script" || (ue = je(ue), console.error(
        'ReactDOM.preinitModule(): Currently the only supported "as" type for this function is "script" but received "%s" instead. This warning was generated for `href` "%s". In the future other module types will be supported, aligning with the import-attributes proposal. Learn more here: (https://github.com/tc39/proposal-import-attributes)',
        ue,
        $
      )), typeof $ == "string" && (typeof U == "object" && U !== null ? (U.as == null || U.as === "script") && (ue = Re(
        U.as,
        U.crossOrigin
      ), Q.d.M($, {
        crossOrigin: ue,
        integrity: typeof U.integrity == "string" ? U.integrity : void 0,
        nonce: typeof U.nonce == "string" ? U.nonce : void 0
      })) : U == null && Q.d.M($));
    }, ka.preload = function($, U) {
      var ue = "";
      if (typeof $ == "string" && $ || (ue += " The `href` argument encountered was " + Me($) + "."), U == null || typeof U != "object" ? ue += " The `options` argument encountered was " + Me(U) + "." : typeof U.as == "string" && U.as || (ue += " The `as` option encountered was " + Me(U.as) + "."), ue && console.error(
        'ReactDOM.preload(): Expected two arguments, a non-empty `href` string and an `options` object with an `as` property valid for a `<link rel="preload" as="..." />` tag.%s',
        ue
      ), typeof $ == "string" && typeof U == "object" && U !== null && typeof U.as == "string") {
        ue = U.as;
        var Ye = Re(
          ue,
          U.crossOrigin
        );
        Q.d.L($, ue, {
          crossOrigin: Ye,
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
    }, ka.preloadModule = function($, U) {
      var ue = "";
      typeof $ == "string" && $ || (ue += " The `href` argument encountered was " + Me($) + "."), U !== void 0 && typeof U != "object" ? ue += " The `options` argument encountered was " + Me(U) + "." : U && "as" in U && typeof U.as != "string" && (ue += " The `as` option encountered was " + Me(U.as) + "."), ue && console.error(
        'ReactDOM.preloadModule(): Expected two arguments, a non-empty `href` string and, optionally, an `options` object with an `as` property valid for a `<link rel="modulepreload" as="..." />` tag.%s',
        ue
      ), typeof $ == "string" && (U ? (ue = Re(
        U.as,
        U.crossOrigin
      ), Q.d.m($, {
        as: typeof U.as == "string" && U.as !== "script" ? U.as : void 0,
        crossOrigin: ue,
        integrity: typeof U.integrity == "string" ? U.integrity : void 0
      })) : Q.d.m($));
    }, ka.requestFormReset = function($) {
      Q.d.r($);
    }, ka.unstable_batchedUpdates = function($, U) {
      return $(U);
    }, ka.useFormState = function($, U, ue) {
      return St().useFormState($, U, ue);
    }, ka.useFormStatus = function() {
      return St().useHostTransitionStatus();
    }, ka.version = "19.2.3", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  })(), ka;
}
var QE;
function $E() {
  if (QE) return Vg.exports;
  QE = 1;
  var k = {};
  function te() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
      if (k.NODE_ENV !== "production")
        throw new Error("^_^");
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(te);
      } catch (Ne) {
        console.error(Ne);
      }
    }
  }
  return k.NODE_ENV === "production" ? (te(), Vg.exports = zA()) : Vg.exports = _A(), Vg.exports;
}
var LE;
function DA() {
  if (LE) return D0;
  LE = 1;
  var k = KE(), te = Um(), Ne = $E();
  function B(l) {
    var n = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      n += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var u = 2; u < arguments.length; u++)
        n += "&args[]=" + encodeURIComponent(arguments[u]);
    }
    return "Minified React error #" + l + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function Re(l) {
    return !(!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11);
  }
  function Me(l) {
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
  function St(l) {
    if (l.tag === 31) {
      var n = l.memoizedState;
      if (n === null && (l = l.alternate, l !== null && (n = l.memoizedState)), n !== null) return n.dehydrated;
    }
    return null;
  }
  function L(l) {
    if (Me(l) !== l)
      throw Error(B(188));
  }
  function Q(l) {
    var n = l.alternate;
    if (!n) {
      if (n = Me(l), n === null) throw Error(B(188));
      return n !== l ? null : l;
    }
    for (var u = l, c = n; ; ) {
      var s = u.return;
      if (s === null) break;
      var r = s.alternate;
      if (r === null) {
        if (c = s.return, c !== null) {
          u = c;
          continue;
        }
        break;
      }
      if (s.child === r.child) {
        for (r = s.child; r; ) {
          if (r === u) return L(s), l;
          if (r === c) return L(s), n;
          r = r.sibling;
        }
        throw Error(B(188));
      }
      if (u.return !== c.return) u = s, c = r;
      else {
        for (var m = !1, g = s.child; g; ) {
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
        if (!m) {
          for (g = r.child; g; ) {
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
  var de = Object.assign, $ = /* @__PURE__ */ Symbol.for("react.element"), U = /* @__PURE__ */ Symbol.for("react.transitional.element"), ue = /* @__PURE__ */ Symbol.for("react.portal"), Ye = /* @__PURE__ */ Symbol.for("react.fragment"), $t = /* @__PURE__ */ Symbol.for("react.strict_mode"), Je = /* @__PURE__ */ Symbol.for("react.profiler"), lt = /* @__PURE__ */ Symbol.for("react.consumer"), Dt = /* @__PURE__ */ Symbol.for("react.context"), Lt = /* @__PURE__ */ Symbol.for("react.forward_ref"), Vt = /* @__PURE__ */ Symbol.for("react.suspense"), Ke = /* @__PURE__ */ Symbol.for("react.suspense_list"), Oe = /* @__PURE__ */ Symbol.for("react.memo"), bt = /* @__PURE__ */ Symbol.for("react.lazy"), Fe = /* @__PURE__ */ Symbol.for("react.activity"), jt = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), se = Symbol.iterator;
  function Et(l) {
    return l === null || typeof l != "object" ? null : (l = se && l[se] || l["@@iterator"], typeof l == "function" ? l : null);
  }
  var Te = /* @__PURE__ */ Symbol.for("react.client.reference");
  function Ue(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === Te ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case Ye:
        return "Fragment";
      case Je:
        return "Profiler";
      case $t:
        return "StrictMode";
      case Vt:
        return "Suspense";
      case Ke:
        return "SuspenseList";
      case Fe:
        return "Activity";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case ue:
          return "Portal";
        case Dt:
          return l.displayName || "Context";
        case lt:
          return (l._context.displayName || "Context") + ".Consumer";
        case Lt:
          var n = l.render;
          return l = l.displayName, l || (l = n.displayName || n.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
        case Oe:
          return n = l.displayName || null, n !== null ? n : Ue(l.type) || "Memo";
        case bt:
          n = l._payload, l = l._init;
          try {
            return Ue(l(n));
          } catch {
          }
      }
    return null;
  }
  var Yt = Array.isArray, X = te.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, j = Ne.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, P = {
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
  function K(l, n) {
    ge++, ce[ge] = l.current, l.current = n;
  }
  var ee = O(null), ae = O(null), ze = O(null), at = O(null);
  function Ie(l, n) {
    switch (K(ze, n), K(ae, l), K(ee, null), n.nodeType) {
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
    A(ee), K(ee, l);
  }
  function Tt() {
    A(ee), A(ae), A(ze);
  }
  function ta(l) {
    l.memoizedState !== null && K(at, l);
    var n = ee.current, u = Hv(n, l.type);
    n !== u && (K(ae, l), K(ee, u));
  }
  function vn(l) {
    ae.current === l && (A(ee), A(ae)), at.current === l && (A(at), sl._currentValue = P);
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
      var s = Object.getOwnPropertyDescriptor(
        c.DetermineComponentFrameRoot,
        "name"
      );
      s && s.configurable && Object.defineProperty(
        c.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var r = c.DetermineComponentFrameRoot(), m = r[0], g = r[1];
      if (m && g) {
        var T = m.split(`
`), N = g.split(`
`);
        for (s = c = 0; c < T.length && !T[c].includes("DetermineComponentFrameRoot"); )
          c++;
        for (; s < N.length && !N[s].includes(
          "DetermineComponentFrameRoot"
        ); )
          s++;
        if (c === T.length || s === N.length)
          for (c = T.length - 1, s = N.length - 1; 1 <= c && 0 <= s && T[c] !== N[s]; )
            s--;
        for (; 1 <= c && 0 <= s; c--, s--)
          if (T[c] !== N[s]) {
            if (c !== 1 || s !== 1)
              do
                if (c--, s--, 0 > s || T[c] !== N[s]) {
                  var V = `
` + T[c].replace(" at new ", " at ");
                  return l.displayName && V.includes("<anonymous>") && (V = V.replace("<anonymous>", l.displayName)), V;
                }
              while (1 <= c && 0 <= s);
            break;
          }
      }
    } finally {
      ui = !1, Error.prepareStackTrace = u;
    }
    return (u = l ? l.displayName || l.name : "") ? Wa(u) : "";
  }
  function _t(l, n) {
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
  function Gl(l) {
    try {
      var n = "", u = null;
      do
        n += _t(l, u), u = l, l = l.return;
      while (l);
      return n;
    } catch (c) {
      return `
Error generating stack: ` + c.message + `
` + c.stack;
    }
  }
  var Yi = Object.prototype.hasOwnProperty, es = k.unstable_scheduleCallback, me = k.unstable_cancelCallback, Bo = k.unstable_shouldYield, iu = k.unstable_requestPaint, El = k.unstable_now, qi = k.unstable_getCurrentPriorityLevel, ts = k.unstable_ImmediatePriority, xo = k.unstable_UserBlockingPriority, Gi = k.unstable_NormalPriority, wi = k.unstable_LowPriority, ls = k.unstable_IdlePriority, as = k.log, ns = k.unstable_setDisableYieldValue, Gn = null, pl = null;
  function _a(l) {
    if (typeof as == "function" && ns(l), pl && typeof pl.setStrictMode == "function")
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
  function re(l) {
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
    var s = 0, r = l.suspendedLanes, m = l.pingedLanes;
    l = l.warmLanes;
    var g = c & 134217727;
    return g !== 0 ? (c = g & ~r, c !== 0 ? s = re(c) : (m &= g, m !== 0 ? s = re(m) : u || (u = g & ~l, u !== 0 && (s = re(u))))) : (g = c & ~r, g !== 0 ? s = re(g) : m !== 0 ? s = re(m) : u || (u = c & ~l, u !== 0 && (s = re(u)))), s === 0 ? 0 : n !== 0 && n !== s && (n & r) === 0 && (r = s & -s, u = n & -n, r >= u || r === 32 && (u & 4194048) !== 0) ? n : s;
  }
  function ye(l, n) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & n) === 0;
  }
  function ft(l, n) {
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
  function qe() {
    var l = le;
    return le <<= 1, (le & 62914560) === 0 && (le = 4194304), l;
  }
  function wl(l) {
    for (var n = [], u = 0; 31 > u; u++) n.push(l);
    return n;
  }
  function Da(l, n) {
    l.pendingLanes |= n, n !== 268435456 && (l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0);
  }
  function fd(l, n, u, c, s, r) {
    var m = l.pendingLanes;
    l.pendingLanes = u, l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0, l.expiredLanes &= u, l.entangledLanes &= u, l.errorRecoveryDisabledLanes &= u, l.shellSuspendCounter = 0;
    var g = l.entanglements, T = l.expirationTimes, N = l.hiddenUpdates;
    for (u = m & ~u; 0 < u; ) {
      var V = 31 - Rl(u), W = 1 << V;
      g[V] = 0, T[V] = -1;
      var x = N[V];
      if (x !== null)
        for (N[V] = null, V = 0; V < x.length; V++) {
          var G = x[V];
          G !== null && (G.lane &= -536870913);
        }
      u &= ~W;
    }
    c !== 0 && Ac(l, c, 0), r !== 0 && s === 0 && l.tag !== 0 && (l.suspendedLanes |= r & ~(m & ~n));
  }
  function Ac(l, n, u) {
    l.pendingLanes |= n, l.suspendedLanes &= ~n;
    var c = 31 - Rl(n);
    l.entangledLanes |= n, l.entanglements[c] = l.entanglements[c] | 1073741824 | u & 261930;
  }
  function us(l, n) {
    var u = l.entangledLanes |= n;
    for (l = l.entanglements; u; ) {
      var c = 31 - Rl(u), s = 1 << c;
      s & n | l[c] & n && (l[c] |= n), u &= ~s;
    }
  }
  function cu(l, n) {
    var u = n & -n;
    return u = (u & 42) !== 0 ? 1 : Ra(u), (u & (l.suspendedLanes | n)) !== 0 ? 0 : u;
  }
  function Ra(l) {
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
  function sd(l) {
    return l &= -l, 2 < l ? 8 < l ? (l & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function C0() {
    var l = j.p;
    return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : xr(l.type));
  }
  function rd(l, n) {
    var u = j.p;
    try {
      return j.p = l, n();
    } finally {
      j.p = u;
    }
  }
  var ii = Math.random().toString(36).slice(2), vl = "__reactFiber$" + ii, Zt = "__reactProps$" + ii, Oc = "__reactContainer$" + ii, is = "__reactEvents$" + ii, U0 = "__reactListeners$" + ii, Hm = "__reactHandles$" + ii, Nm = "__reactResources$" + ii, Yo = "__reactMarker$" + ii;
  function Qi(l) {
    delete l[vl], delete l[Zt], delete l[is], delete l[U0], delete l[Hm];
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
  var Ma = /* @__PURE__ */ new Set(), Rc = {};
  function Fa(l, n) {
    Mc(l, n), Mc(l + "Capture", n);
  }
  function Mc(l, n) {
    for (Rc[l] = n, l = 0; l < n.length; l++)
      Ma.add(n[l]);
  }
  var cs = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), os = {}, dd = {};
  function fs(l) {
    return Yi.call(dd, l) ? !0 : Yi.call(os, l) ? !1 : cs.test(l) ? dd[l] = !0 : (os[l] = !0, !1);
  }
  function ci(l, n, u) {
    if (fs(n))
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
      var s = c.get, r = c.set;
      return Object.defineProperty(l, n, {
        configurable: !0,
        get: function() {
          return s.call(this);
        },
        set: function(m) {
          u = "" + m, r.call(this, m);
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
  function ss(l) {
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
  function rs(l) {
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
  function hd(l, n, u, c, s, r, m, g) {
    l.name = "", m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" ? l.type = m : l.removeAttribute("type"), n != null ? m === "number" ? (n === 0 && l.value === "" || l.value != n) && (l.value = "" + gn(n)) : l.value !== "" + gn(n) && (l.value = "" + gn(n)) : m !== "submit" && m !== "reset" || l.removeAttribute("value"), n != null ? wo(l, m, gn(n)) : u != null ? wo(l, m, gn(u)) : c != null && l.removeAttribute("value"), s == null && r != null && (l.defaultChecked = !!r), s != null && (l.checked = s && typeof s != "function" && typeof s != "symbol"), g != null && typeof g != "function" && typeof g != "symbol" && typeof g != "boolean" ? l.name = "" + gn(g) : l.removeAttribute("name");
  }
  function md(l, n, u, c, s, r, m, g) {
    if (r != null && typeof r != "function" && typeof r != "symbol" && typeof r != "boolean" && (l.type = r), n != null || u != null) {
      if (!(r !== "submit" && r !== "reset" || n != null)) {
        ss(l);
        return;
      }
      u = u != null ? "" + gn(u) : "", n = n != null ? "" + gn(n) : u, g || n === l.value || (l.value = n), l.defaultValue = n;
    }
    c = c ?? s, c = typeof c != "function" && typeof c != "symbol" && !!c, l.checked = g ? l.checked : !!c, l.defaultChecked = !!c, m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" && (l.name = m), ss(l);
  }
  function wo(l, n, u) {
    n === "number" && rs(l.ownerDocument) === l || l.defaultValue === "" + u || (l.defaultValue = "" + u);
  }
  function ou(l, n, u, c) {
    if (l = l.options, n) {
      n = {};
      for (var s = 0; s < u.length; s++)
        n["$" + u[s]] = !0;
      for (u = 0; u < l.length; u++)
        s = n.hasOwnProperty("$" + l[u].value), l[u].selected !== s && (l[u].selected = s), s && c && (l[u].defaultSelected = !0);
    } else {
      for (u = "" + gn(u), n = null, s = 0; s < l.length; s++) {
        if (l[s].value === u) {
          l[s].selected = !0, c && (l[s].defaultSelected = !0);
          return;
        }
        n !== null || l[s].disabled || (n = l[s]);
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
        if (Yt(c)) {
          if (1 < c.length) throw Error(B(93));
          c = c[0];
        }
        u = c;
      }
      u == null && (u = ""), n = u;
    }
    u = gn(n), l.defaultValue = u, c = l.textContent, c === u && c !== "" && c !== null && (l.value = c), ss(l);
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
  var ds = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function qm(l, n, u) {
    var c = n.indexOf("--") === 0;
    u == null || typeof u == "boolean" || u === "" ? c ? l.setProperty(n, "") : n === "float" ? l.cssFloat = "" : l[n] = "" : c ? l.setProperty(n, u) : typeof u != "number" || u === 0 || ds.has(n) ? n === "float" ? l.cssFloat = u : l[n] = ("" + u).trim() : l[n] = u + "px";
  }
  function B0(l, n, u) {
    if (n != null && typeof n != "object")
      throw Error(B(62));
    if (l = l.style, u != null) {
      for (var c in u)
        !u.hasOwnProperty(c) || n != null && n.hasOwnProperty(c) || (c.indexOf("--") === 0 ? l.setProperty(c, "") : c === "float" ? l.cssFloat = "" : l[c] = "");
      for (var s in n)
        c = n[s], n.hasOwnProperty(s) && u[s] !== c && qm(l, s, c);
    } else
      for (var r in n)
        n.hasOwnProperty(r) && qm(l, r, n[r]);
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
  function Xl() {
  }
  var hs = null;
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
                var s = c[Zt] || null;
                if (!s) throw Error(B(90));
                hd(
                  c,
                  s.value,
                  s.defaultValue,
                  s.defaultValue,
                  s.checked,
                  s.defaultChecked,
                  s.type,
                  s.name
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
  function ms(l, n, u) {
    if (Xo) return l(n, u);
    Xo = !0;
    try {
      var c = l(n);
      return c;
    } finally {
      if (Xo = !1, (Uc !== null || fu !== null) && (vr(), Uc && (n = Uc, l = fu, fu = Uc = null, wm(n), l)))
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
    var l, n = pd, u = n.length, c, s = "value" in fi ? fi.value : fi.textContent, r = s.length;
    for (l = 0; l < u && n[l] === s[l]; l++) ;
    var m = u - l;
    for (c = 1; c <= m && n[u - c] === s[r - c]; c++) ;
    return vd = s.slice(l, 1 < c ? 1 - c : void 0);
  }
  function ys(l) {
    var n = l.keyCode;
    return "charCode" in l ? (l = l.charCode, l === 0 && n === 13 && (l = 13)) : l = n, l === 10 && (l = 13), 32 <= l || l === 13 ? l : 0;
  }
  function gd() {
    return !0;
  }
  function Qm() {
    return !1;
  }
  function Ca(l) {
    function n(u, c, s, r, m) {
      this._reactName = u, this._targetInst = s, this.type = c, this.nativeEvent = r, this.target = m, this.currentTarget = null;
      for (var g in l)
        l.hasOwnProperty(g) && (u = l[g], this[g] = u ? u(r) : r[g]);
      return this.isDefaultPrevented = (r.defaultPrevented != null ? r.defaultPrevented : r.returnValue === !1) ? gd : Qm, this.isPropagationStopped = Qm, this;
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
  var su = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(l) {
      return l.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, ps = Ca(su), Lo = de({}, su, { view: 0, detail: 0 }), j0 = Ca(Lo), Lm, Vm, vs, Sd = de({}, Lo, {
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
      return "movementX" in l ? l.movementX : (l !== vs && (vs && l.type === "mousemove" ? (Lm = l.screenX - vs.screenX, Vm = l.screenY - vs.screenY) : Vm = Lm = 0, vs = l), Lm);
    },
    movementY: function(l) {
      return "movementY" in l ? l.movementY : Vm;
    }
  }), Y0 = Ca(Sd), gs = de({}, Sd, { dataTransfer: 0 }), q0 = Ca(gs), G0 = de({}, Lo, { relatedTarget: 0 }), bd = Ca(G0), w0 = de({}, su, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Zm = Ca(w0), X0 = de({}, su, {
    clipboardData: function(l) {
      return "clipboardData" in l ? l.clipboardData : window.clipboardData;
    }
  }), Nc = Ca(X0), Bc = de({}, su, { data: 0 }), bn = Ca(Bc), Kg = {
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
  }, ru = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function Q0(l) {
    var n = this.nativeEvent;
    return n.getModifierState ? n.getModifierState(l) : (l = ru[l]) ? !!n[l] : !1;
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
      return l.type === "keypress" ? (l = ys(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? Jm[l.keyCode] || "Unidentified" : "";
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
      return l.type === "keypress" ? ys(l) : 0;
    },
    keyCode: function(l) {
      return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    },
    which: function(l) {
      return l.type === "keypress" ? ys(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    }
  }), Ed = Ca(du), Td = de({}, Sd, {
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
  }), Ad = Ca(Td), hu = de({}, Lo, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ia
  }), $g = Ca(hu), L0 = de({}, su, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), V0 = Ca(L0), kg = de({}, Sd, {
    deltaX: function(l) {
      return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0;
    },
    deltaY: function(l) {
      return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Km = Ca(kg), Wg = de({}, su, {
    newState: 0,
    oldState: 0
  }), Z0 = Ca(Wg), $m = [9, 13, 27, 32], Vo = nl && "CompositionEvent" in window, Vi = null;
  nl && "documentMode" in document && (Vi = document.documentMode);
  var km = nl && "TextEvent" in window && !Vi, Ql = nl && (!Vo || Vi && 8 < Vi && 11 >= Vi), Wm = " ", Ss = !1;
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
        return n.which !== 32 ? null : (Ss = !0, Wm);
      case "textInput":
        return l = n.data, l === Wm && Ss ? null : l;
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
        return Ql && n.locale !== "ko" ? null : n.data;
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
    Uc ? fu ? fu.push(c) : fu = [c] : Uc = c, n = Uh(n, "onChange"), 0 < n.length && (u = new ps(
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
    var bs;
    if (nl) {
      var ma = "oninput" in document;
      if (!ma) {
        var pu = document.createElement("div");
        pu.setAttribute("oninput", "return;"), ma = typeof pu.oninput == "function";
      }
      bs = ma;
    } else bs = !1;
    Fm = bs && (!document.documentMode || 9 < document.documentMode);
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
      ), ms(_d, n);
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
  var Ua = typeof Object.is == "function" ? Object.is : Yc;
  function Ki(l, n) {
    if (Ua(l, n)) return !0;
    if (typeof l != "object" || l === null || typeof n != "object" || n === null)
      return !1;
    var u = Object.keys(l), c = Object.keys(n);
    if (u.length !== c.length) return !1;
    for (c = 0; c < u.length; c++) {
      var s = u[c];
      if (!Yi.call(n, s) || !Ua(l[s], n[s]))
        return !1;
    }
    return !0;
  }
  function si(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function ey(l, n) {
    var u = si(l);
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
      u = si(u);
    }
  }
  function ty(l, n) {
    return l && n ? l === n ? !0 : l && l.nodeType === 3 ? !1 : n && n.nodeType === 3 ? ty(l, n.parentNode) : "contains" in l ? l.contains(n) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(n) & 16) : !1 : !1;
  }
  function qc(l) {
    l = l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null ? l.ownerDocument.defaultView : window;
    for (var n = rs(l.document); n instanceof l.HTMLIFrameElement; ) {
      try {
        var u = typeof n.contentWindow.location.href == "string";
      } catch {
        u = !1;
      }
      if (u) l = n.contentWindow;
      else break;
      n = rs(l.document);
    }
    return n;
  }
  function ri(l) {
    var n = l && l.nodeName && l.nodeName.toLowerCase();
    return n && (n === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || n === "textarea" || l.contentEditable === "true");
  }
  var ly = nl && "documentMode" in document && 11 >= document.documentMode, vu = null, Es = null, $i = null, gu = !1;
  function Su(l, n, u) {
    var c = u.window === u ? u.document : u.nodeType === 9 ? u : u.ownerDocument;
    gu || vu == null || vu !== rs(c) || (c = vu, "selectionStart" in c && ri(c) ? c = { start: c.selectionStart, end: c.selectionEnd } : (c = (c.ownerDocument && c.ownerDocument.defaultView || window).getSelection(), c = {
      anchorNode: c.anchorNode,
      anchorOffset: c.anchorOffset,
      focusNode: c.focusNode,
      focusOffset: c.focusOffset
    }), $i && Ki($i, c) || ($i = c, c = Uh(Es, "onSelect"), 0 < c.length && (n = new ps(
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
  }, Wi = {}, Ts = {};
  nl && (Ts = document.createElement("div").style, "AnimationEvent" in window || (delete ki.animationend.animation, delete ki.animationiteration.animation, delete ki.animationstart.animation), "TransitionEvent" in window || delete ki.transitionend.transition);
  function Pa(l) {
    if (Wi[l]) return Wi[l];
    if (!ki[l]) return l;
    var n = ki[l], u;
    for (u in n)
      if (n.hasOwnProperty(u) && u in Ts)
        return Wi[l] = n[u];
    return l;
  }
  var qt = Pa("animationend"), As = Pa("animationiteration"), ay = Pa("animationstart"), ny = Pa("transitionrun"), Gc = Pa("transitionstart"), Os = Pa("transitioncancel"), wn = Pa("transitionend"), W0 = /* @__PURE__ */ new Map(), Xn = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  Xn.push("scrollEnd");
  function Ha(l, n) {
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
  }, ya = [], Ml = 0, pa = 0;
  function en() {
    for (var l = Ml, n = pa = Ml = 0; n < l; ) {
      var u = ya[n];
      ya[n++] = null;
      var c = ya[n];
      ya[n++] = null;
      var s = ya[n];
      ya[n++] = null;
      var r = ya[n];
      if (ya[n++] = null, c !== null && s !== null) {
        var m = c.pending;
        m === null ? s.next = s : (s.next = m.next, m.next = s), c.pending = s;
      }
      r !== 0 && Md(u, s, r);
    }
  }
  function tn(l, n, u, c) {
    ya[Ml++] = l, ya[Ml++] = n, ya[Ml++] = u, ya[Ml++] = c, pa |= c, l.lanes |= c, l = l.alternate, l !== null && (l.lanes |= c);
  }
  function En(l, n, u, c) {
    return tn(l, n, u, c), Jo(l);
  }
  function la(l, n) {
    return tn(l, null, null, n), Jo(l);
  }
  function Md(l, n, u) {
    l.lanes |= u;
    var c = l.alternate;
    c !== null && (c.lanes |= u);
    for (var s = !1, r = l.return; r !== null; )
      r.childLanes |= u, c = r.alternate, c !== null && (c.childLanes |= u), r.tag === 22 && (l = r.stateNode, l === null || l._visibility & 1 || (s = !0)), l = r, r = r.return;
    return l.tag === 3 ? (r = l.stateNode, s && n !== null && (s = 31 - Rl(u), l = r.hiddenUpdates, c = l[s], c === null ? l[s] = [n] : c.push(n), n.lane = u | 536870912), r) : null;
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
  function Na(l, n, u, c) {
    return new bu(l, n, u, c);
  }
  function Tn(l) {
    return l = l.prototype, !(!l || !l.isReactComponent);
  }
  function ln(l, n) {
    var u = l.alternate;
    return u === null ? (u = Na(
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
  function zs(l, n, u, c, s, r) {
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
        case Fe:
          return l = Na(31, u, n, s), l.elementType = Fe, l.lanes = r, l;
        case Ye:
          return Xc(u.children, s, r, n);
        case $t:
          m = 8, s |= 24;
          break;
        case Je:
          return l = Na(12, u, n, s | 2), l.elementType = Je, l.lanes = r, l;
        case Vt:
          return l = Na(13, u, n, s), l.elementType = Vt, l.lanes = r, l;
        case Ke:
          return l = Na(19, u, n, s), l.elementType = Ke, l.lanes = r, l;
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case Dt:
                m = 10;
                break e;
              case lt:
                m = 9;
                break e;
              case Lt:
                m = 11;
                break e;
              case Oe:
                m = 14;
                break e;
              case bt:
                m = 16, c = null;
                break e;
            }
          m = 29, u = Error(
            B(130, l === null ? "null" : typeof l, "")
          ), c = null;
      }
    return n = Na(m, u, n, s), n.elementType = l, n.type = c, n.lanes = r, n;
  }
  function Xc(l, n, u, c) {
    return l = Na(7, l, c, n), l.lanes = u, l;
  }
  function _s(l, n, u) {
    return l = Na(6, l, null, n), l.lanes = u, l;
  }
  function Ds(l) {
    var n = Na(18, null, null, 0);
    return n.stateNode = l, n;
  }
  function Cd(l, n, u) {
    return n = Na(
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
        stack: Gl(n)
      }, uy.set(l, n), n);
    }
    return {
      value: l,
      source: n,
      stack: Gl(n)
    };
  }
  var Qc = [], nn = 0, Rs = null, Ko = 0, Ht = [], Ba = 0, Qn = null, un = 1, xa = "";
  function Eu(l, n) {
    Qc[nn++] = Ko, Qc[nn++] = Rs, Rs = l, Ko = n;
  }
  function Ms(l, n, u) {
    Ht[Ba++] = un, Ht[Ba++] = xa, Ht[Ba++] = Qn, Qn = l;
    var c = un;
    l = xa;
    var s = 32 - Rl(c) - 1;
    c &= ~(1 << s), u += 1;
    var r = 32 - Rl(n) + s;
    if (30 < r) {
      var m = s - s % 5;
      r = (c & (1 << m) - 1).toString(32), c >>= m, s -= m, un = 1 << 32 - Rl(n) + s | u << s | c, xa = r + l;
    } else
      un = 1 << r | u << s | c, xa = l;
  }
  function Ud(l) {
    l.return !== null && (Eu(l, 1), Ms(l, 1, 0));
  }
  function $o(l) {
    for (; l === Rs; )
      Rs = Qc[--nn], Qc[nn] = null, Ko = Qc[--nn], Qc[nn] = null;
    for (; l === Qn; )
      Qn = Ht[--Ba], Ht[Ba] = null, xa = Ht[--Ba], Ht[Ba] = null, un = Ht[--Ba], Ht[Ba] = null;
  }
  function iy(l, n) {
    Ht[Ba++] = un, Ht[Ba++] = xa, Ht[Ba++] = Qn, un = n.id, xa = n.overflow, Qn = l;
  }
  var gl = null, Gt = null, it = !1, Tu = null, ja = !1, Au = Error(B(519));
  function va(l) {
    var n = Error(
      B(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Us(an(n, l)), Au;
  }
  function ko(l) {
    var n = l.stateNode, u = l.type, c = l.memoizedProps;
    switch (n[vl] = l, n[Zt] = c, u) {
      case "dialog":
        nt("cancel", n), nt("close", n);
        break;
      case "iframe":
      case "object":
      case "embed":
        nt("load", n);
        break;
      case "video":
      case "audio":
        for (u = 0; u < ho.length; u++)
          nt(ho[u], n);
        break;
      case "source":
        nt("error", n);
        break;
      case "img":
      case "image":
      case "link":
        nt("error", n), nt("load", n);
        break;
      case "details":
        nt("toggle", n);
        break;
      case "input":
        nt("invalid", n), md(
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
        nt("invalid", n);
        break;
      case "textarea":
        nt("invalid", n), Ym(n, c.value, c.defaultValue, c.children);
    }
    u = c.children, typeof u != "string" && typeof u != "number" && typeof u != "bigint" || n.textContent === "" + u || c.suppressHydrationWarning === !0 || gp(n.textContent, u) ? (c.popover != null && (nt("beforetoggle", n), nt("toggle", n)), c.onScroll != null && nt("scroll", n), c.onScrollEnd != null && nt("scrollend", n), c.onClick != null && (n.onclick = Xl), n = !0) : n = !1, n || va(l, !0);
  }
  function Cs(l) {
    for (gl = l.return; gl; )
      switch (gl.tag) {
        case 5:
        case 31:
        case 13:
          ja = !1;
          return;
        case 27:
        case 3:
          ja = !0;
          return;
        default:
          gl = gl.return;
      }
  }
  function Ou(l) {
    if (l !== gl) return !1;
    if (!it) return Cs(l), it = !0, !1;
    var n = l.tag, u;
    if ((u = n !== 3 && n !== 27) && ((u = n === 5) && (u = l.type, u = !(u !== "form" && u !== "button") || xh(l.type, l.memoizedProps)), u = !u), u && Gt && va(l), Cs(l), n === 13) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(B(317));
      Gt = Yh(l);
    } else if (n === 31) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(B(317));
      Gt = Yh(l);
    } else
      n === 27 ? (n = Gt, Lu(l.type) ? (l = _f, _f = null, Gt = l) : Gt = n) : Gt = gl ? kl(l.stateNode.nextSibling) : null;
    return !0;
  }
  function Ln() {
    Gt = gl = null, it = !1;
  }
  function Hd() {
    var l = Tu;
    return l !== null && (La === null ? La = l : La.push.apply(
      La,
      l
    ), Tu = null), l;
  }
  function Us(l) {
    Tu === null ? Tu = [l] : Tu.push(l);
  }
  var Nd = O(null), Ii = null, Vn = null;
  function zu(l, n, u) {
    K(Nd, n._currentValue), n._currentValue = u;
  }
  function aa(l) {
    l._currentValue = Nd.current, A(Nd);
  }
  function Hs(l, n, u) {
    for (; l !== null; ) {
      var c = l.alternate;
      if ((l.childLanes & n) !== n ? (l.childLanes |= n, c !== null && (c.childLanes |= n)) : c !== null && (c.childLanes & n) !== n && (c.childLanes |= n), l === u) break;
      l = l.return;
    }
  }
  function Bd(l, n, u, c) {
    var s = l.child;
    for (s !== null && (s.return = l); s !== null; ) {
      var r = s.dependencies;
      if (r !== null) {
        var m = s.child;
        r = r.firstContext;
        e: for (; r !== null; ) {
          var g = r;
          r = s;
          for (var T = 0; T < n.length; T++)
            if (g.context === n[T]) {
              r.lanes |= u, g = r.alternate, g !== null && (g.lanes |= u), Hs(
                r.return,
                u,
                l
              ), c || (m = null);
              break e;
            }
          r = g.next;
        }
      } else if (s.tag === 18) {
        if (m = s.return, m === null) throw Error(B(341));
        m.lanes |= u, r = m.alternate, r !== null && (r.lanes |= u), Hs(m, u, l), m = null;
      } else m = s.child;
      if (m !== null) m.return = s;
      else
        for (m = s; m !== null; ) {
          if (m === l) {
            m = null;
            break;
          }
          if (s = m.sibling, s !== null) {
            s.return = m.return, m = s;
            break;
          }
          m = m.return;
        }
      s = m;
    }
  }
  function cn(l, n, u, c) {
    l = null;
    for (var s = n, r = !1; s !== null; ) {
      if (!r) {
        if ((s.flags & 524288) !== 0) r = !0;
        else if ((s.flags & 262144) !== 0) break;
      }
      if (s.tag === 10) {
        var m = s.alternate;
        if (m === null) throw Error(B(387));
        if (m = m.memoizedProps, m !== null) {
          var g = s.type;
          Ua(s.pendingProps.value, m.value) || (l !== null ? l.push(g) : l = [g]);
        }
      } else if (s === at.current) {
        if (m = s.alternate, m === null) throw Error(B(387));
        m.memoizedState.memoizedState !== s.memoizedState.memoizedState && (l !== null ? l.push(sl) : l = [sl]);
      }
      s = s.return;
    }
    l !== null && Bd(
      n,
      l,
      u,
      c
    ), n.flags |= 262144;
  }
  function na(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!Ua(
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
  }, ul = k.unstable_scheduleCallback, cy = k.unstable_NormalPriority, il = {
    $$typeof: Dt,
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
  var Ns = null, Bs = 0, Pi = 0, ec = null;
  function ga(l, n) {
    if (Ns === null) {
      var u = Ns = [];
      Bs = 0, Pi = so(), ec = {
        status: "pending",
        value: void 0,
        then: function(c) {
          u.push(c);
        }
      };
    }
    return Bs++, n.then(At, At), n;
  }
  function At() {
    if (--Bs === 0 && Ns !== null) {
      ec !== null && (ec.status = "fulfilled");
      var l = Ns;
      Ns = null, Pi = 0, ec = null;
      for (var n = 0; n < l.length; n++) (0, l[n])();
    }
  }
  function Yd(l, n) {
    var u = [], c = {
      status: "pending",
      value: null,
      reason: null,
      then: function(s) {
        u.push(s);
      }
    };
    return l.then(
      function() {
        c.status = "fulfilled", c.value = n;
        for (var s = 0; s < u.length; s++) (0, u[s])(n);
      },
      function(s) {
        for (c.status = "rejected", c.reason = s, s = 0; s < u.length; s++)
          (0, u[s])(void 0);
      }
    ), c;
  }
  var Wo = X.S;
  X.S = function(l, n) {
    Oi = El(), typeof n == "object" && n !== null && typeof n.then == "function" && ga(l, n), Wo !== null && Wo(l, n);
  };
  var Ya = O(null);
  function hi() {
    var l = Ya.current;
    return l !== null ? l : Nt.pooledCache;
  }
  function qa(l, n) {
    n === null ? K(Ya, Ya.current) : K(Ya, n.pool);
  }
  function qd() {
    var l = hi();
    return l === null ? null : { parent: il._currentValue, pool: l };
  }
  var Zn = Error(B(460)), xs = Error(B(474)), tc = Error(B(542)), Fo = { then: function() {
  } };
  function js(l) {
    return l = l.status, l === "fulfilled" || l === "rejected";
  }
  function oy(l, n, u) {
    switch (u = l[u], u === void 0 ? l.push(n) : u !== n && (n.then(Xl, Xl), n = u), n.status) {
      case "fulfilled":
        return n.value;
      case "rejected":
        throw l = n.reason, sy(l), l;
      default:
        if (typeof n.status == "string") n.then(Xl, Xl);
        else {
          if (l = Nt, l !== null && 100 < l.shellSuspendCounter)
            throw Error(B(482));
          l = n, l.status = "pending", l.then(
            function(c) {
              if (n.status === "pending") {
                var s = n;
                s.status = "fulfilled", s.value = c;
              }
            },
            function(c) {
              if (n.status === "pending") {
                var s = n;
                s.status = "rejected", s.reason = c;
              }
            }
          );
        }
        switch (n.status) {
          case "fulfilled":
            return n.value;
          case "rejected":
            throw l = n.reason, sy(l), l;
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
  function sy(l) {
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
  function Ys(l, n) {
    throw n.$$typeof === $ ? Error(B(525)) : (l = Object.prototype.toString.call(n), Error(
      B(
        31,
        l === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : l
      )
    ));
  }
  function ry(l) {
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
    function s(C, D) {
      return C = ln(C, D), C.index = 0, C.sibling = null, C;
    }
    function r(C, D, H) {
      return C.index = H, l ? (H = C.alternate, H !== null ? (H = H.index, H < D ? (C.flags |= 67108866, D) : H) : (C.flags |= 67108866, D)) : (C.flags |= 1048576, D);
    }
    function m(C) {
      return l && C.alternate === null && (C.flags |= 67108866), C;
    }
    function g(C, D, H, J) {
      return D === null || D.tag !== 6 ? (D = _s(H, C.mode, J), D.return = C, D) : (D = s(D, H), D.return = C, D);
    }
    function T(C, D, H, J) {
      var Se = H.type;
      return Se === Ye ? V(
        C,
        D,
        H.props.children,
        J,
        H.key
      ) : D !== null && (D.elementType === Se || typeof Se == "object" && Se !== null && Se.$$typeof === bt && lc(Se) === D.type) ? (D = s(D, H.props), Po(D, H), D.return = C, D) : (D = zs(
        H.type,
        H.key,
        H.props,
        null,
        C.mode,
        J
      ), Po(D, H), D.return = C, D);
    }
    function N(C, D, H, J) {
      return D === null || D.tag !== 4 || D.stateNode.containerInfo !== H.containerInfo || D.stateNode.implementation !== H.implementation ? (D = Cd(H, C.mode, J), D.return = C, D) : (D = s(D, H.children || []), D.return = C, D);
    }
    function V(C, D, H, J, Se) {
      return D === null || D.tag !== 7 ? (D = Xc(
        H,
        C.mode,
        J,
        Se
      ), D.return = C, D) : (D = s(D, H), D.return = C, D);
    }
    function W(C, D, H) {
      if (typeof D == "string" && D !== "" || typeof D == "number" || typeof D == "bigint")
        return D = _s(
          "" + D,
          C.mode,
          H
        ), D.return = C, D;
      if (typeof D == "object" && D !== null) {
        switch (D.$$typeof) {
          case U:
            return H = zs(
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
          case bt:
            return D = lc(D), W(C, D, H);
        }
        if (Yt(D) || Et(D))
          return D = Xc(
            D,
            C.mode,
            H,
            null
          ), D.return = C, D;
        if (typeof D.then == "function")
          return W(C, Io(D), H);
        if (D.$$typeof === Dt)
          return W(
            C,
            F(C, D),
            H
          );
        Ys(C, D);
      }
      return null;
    }
    function x(C, D, H, J) {
      var Se = D !== null ? D.key : null;
      if (typeof H == "string" && H !== "" || typeof H == "number" || typeof H == "bigint")
        return Se !== null ? null : g(C, D, "" + H, J);
      if (typeof H == "object" && H !== null) {
        switch (H.$$typeof) {
          case U:
            return H.key === Se ? T(C, D, H, J) : null;
          case ue:
            return H.key === Se ? N(C, D, H, J) : null;
          case bt:
            return H = lc(H), x(C, D, H, J);
        }
        if (Yt(H) || Et(H))
          return Se !== null ? null : V(C, D, H, J, null);
        if (typeof H.then == "function")
          return x(
            C,
            D,
            Io(H),
            J
          );
        if (H.$$typeof === Dt)
          return x(
            C,
            D,
            F(C, H),
            J
          );
        Ys(C, H);
      }
      return null;
    }
    function G(C, D, H, J, Se) {
      if (typeof J == "string" && J !== "" || typeof J == "number" || typeof J == "bigint")
        return C = C.get(H) || null, g(D, C, "" + J, Se);
      if (typeof J == "object" && J !== null) {
        switch (J.$$typeof) {
          case U:
            return C = C.get(
              J.key === null ? H : J.key
            ) || null, T(D, C, J, Se);
          case ue:
            return C = C.get(
              J.key === null ? H : J.key
            ) || null, N(D, C, J, Se);
          case bt:
            return J = lc(J), G(
              C,
              D,
              H,
              J,
              Se
            );
        }
        if (Yt(J) || Et(J))
          return C = C.get(H) || null, V(D, C, J, Se, null);
        if (typeof J.then == "function")
          return G(
            C,
            D,
            H,
            Io(J),
            Se
          );
        if (J.$$typeof === Dt)
          return G(
            C,
            D,
            H,
            F(D, J),
            Se
          );
        Ys(D, J);
      }
      return null;
    }
    function he(C, D, H, J) {
      for (var Se = null, yt = null, pe = D, Qe = D = 0, Pe = null; pe !== null && Qe < H.length; Qe++) {
        pe.index > Qe ? (Pe = pe, pe = null) : Pe = pe.sibling;
        var ut = x(
          C,
          pe,
          H[Qe],
          J
        );
        if (ut === null) {
          pe === null && (pe = Pe);
          break;
        }
        l && pe && ut.alternate === null && n(C, pe), D = r(ut, D, Qe), yt === null ? Se = ut : yt.sibling = ut, yt = ut, pe = Pe;
      }
      if (Qe === H.length)
        return u(C, pe), it && Eu(C, Qe), Se;
      if (pe === null) {
        for (; Qe < H.length; Qe++)
          pe = W(C, H[Qe], J), pe !== null && (D = r(
            pe,
            D,
            Qe
          ), yt === null ? Se = pe : yt.sibling = pe, yt = pe);
        return it && Eu(C, Qe), Se;
      }
      for (pe = c(pe); Qe < H.length; Qe++)
        Pe = G(
          pe,
          C,
          Qe,
          H[Qe],
          J
        ), Pe !== null && (l && Pe.alternate !== null && pe.delete(
          Pe.key === null ? Qe : Pe.key
        ), D = r(
          Pe,
          D,
          Qe
        ), yt === null ? Se = Pe : yt.sibling = Pe, yt = Pe);
      return l && pe.forEach(function(pc) {
        return n(C, pc);
      }), it && Eu(C, Qe), Se;
    }
    function _e(C, D, H, J) {
      if (H == null) throw Error(B(151));
      for (var Se = null, yt = null, pe = D, Qe = D = 0, Pe = null, ut = H.next(); pe !== null && !ut.done; Qe++, ut = H.next()) {
        pe.index > Qe ? (Pe = pe, pe = null) : Pe = pe.sibling;
        var pc = x(C, pe, ut.value, J);
        if (pc === null) {
          pe === null && (pe = Pe);
          break;
        }
        l && pe && pc.alternate === null && n(C, pe), D = r(pc, D, Qe), yt === null ? Se = pc : yt.sibling = pc, yt = pc, pe = Pe;
      }
      if (ut.done)
        return u(C, pe), it && Eu(C, Qe), Se;
      if (pe === null) {
        for (; !ut.done; Qe++, ut = H.next())
          ut = W(C, ut.value, J), ut !== null && (D = r(ut, D, Qe), yt === null ? Se = ut : yt.sibling = ut, yt = ut);
        return it && Eu(C, Qe), Se;
      }
      for (pe = c(pe); !ut.done; Qe++, ut = H.next())
        ut = G(pe, C, Qe, ut.value, J), ut !== null && (l && ut.alternate !== null && pe.delete(ut.key === null ? Qe : ut.key), D = r(ut, D, Qe), yt === null ? Se = ut : yt.sibling = ut, yt = ut);
      return l && pe.forEach(function(Ih) {
        return n(C, Ih);
      }), it && Eu(C, Qe), Se;
    }
    function Bt(C, D, H, J) {
      if (typeof H == "object" && H !== null && H.type === Ye && H.key === null && (H = H.props.children), typeof H == "object" && H !== null) {
        switch (H.$$typeof) {
          case U:
            e: {
              for (var Se = H.key; D !== null; ) {
                if (D.key === Se) {
                  if (Se = H.type, Se === Ye) {
                    if (D.tag === 7) {
                      u(
                        C,
                        D.sibling
                      ), J = s(
                        D,
                        H.props.children
                      ), J.return = C, C = J;
                      break e;
                    }
                  } else if (D.elementType === Se || typeof Se == "object" && Se !== null && Se.$$typeof === bt && lc(Se) === D.type) {
                    u(
                      C,
                      D.sibling
                    ), J = s(D, H.props), Po(J, H), J.return = C, C = J;
                    break e;
                  }
                  u(C, D);
                  break;
                } else n(C, D);
                D = D.sibling;
              }
              H.type === Ye ? (J = Xc(
                H.props.children,
                C.mode,
                J,
                H.key
              ), J.return = C, C = J) : (J = zs(
                H.type,
                H.key,
                H.props,
                null,
                C.mode,
                J
              ), Po(J, H), J.return = C, C = J);
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
                    ), J = s(D, H.children || []), J.return = C, C = J;
                    break e;
                  } else {
                    u(C, D);
                    break;
                  }
                else n(C, D);
                D = D.sibling;
              }
              J = Cd(H, C.mode, J), J.return = C, C = J;
            }
            return m(C);
          case bt:
            return H = lc(H), Bt(
              C,
              D,
              H,
              J
            );
        }
        if (Yt(H))
          return he(
            C,
            D,
            H,
            J
          );
        if (Et(H)) {
          if (Se = Et(H), typeof Se != "function") throw Error(B(150));
          return H = Se.call(H), _e(
            C,
            D,
            H,
            J
          );
        }
        if (typeof H.then == "function")
          return Bt(
            C,
            D,
            Io(H),
            J
          );
        if (H.$$typeof === Dt)
          return Bt(
            C,
            D,
            F(C, H),
            J
          );
        Ys(C, H);
      }
      return typeof H == "string" && H !== "" || typeof H == "number" || typeof H == "bigint" ? (H = "" + H, D !== null && D.tag === 6 ? (u(C, D.sibling), J = s(D, H), J.return = C, C = J) : (u(C, D), J = _s(H, C.mode, J), J.return = C, C = J), m(C)) : u(C, D);
    }
    return function(C, D, H, J) {
      try {
        Zc = 0;
        var Se = Bt(
          C,
          D,
          H,
          J
        );
        return nc = null, Se;
      } catch (pe) {
        if (pe === Zn || pe === tc) throw pe;
        var yt = Na(29, pe, null, C.mode);
        return yt.lanes = J, yt.return = C, yt;
      }
    };
  }
  var Jc = ry(!0), dy = ry(!1), mi = !1;
  function Gd(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function qs(l, n) {
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
    if (c = c.shared, (mt & 2) !== 0) {
      var s = c.pending;
      return s === null ? n.next = n : (n.next = s.next, s.next = n), c.pending = n, n = Jo(l), Md(l, null, u), n;
    }
    return tn(l, c, n, u), Jo(l);
  }
  function Du(l, n, u) {
    if (n = n.updateQueue, n !== null && (n = n.shared, (u & 4194048) !== 0)) {
      var c = n.lanes;
      c &= l.pendingLanes, u |= c, n.lanes = u, us(l, u);
    }
  }
  function ef(l, n) {
    var u = l.updateQueue, c = l.alternate;
    if (c !== null && (c = c.updateQueue, u === c)) {
      var s = null, r = null;
      if (u = u.firstBaseUpdate, u !== null) {
        do {
          var m = {
            lane: u.lane,
            tag: u.tag,
            payload: u.payload,
            callback: null,
            next: null
          };
          r === null ? s = r = m : r = r.next = m, u = u.next;
        } while (u !== null);
        r === null ? s = r = n : r = r.next = n;
      } else s = r = n;
      u = {
        baseState: c.baseState,
        firstBaseUpdate: s,
        lastBaseUpdate: r,
        shared: c.shared,
        callbacks: c.callbacks
      }, l.updateQueue = u;
      return;
    }
    l = u.lastBaseUpdate, l === null ? u.firstBaseUpdate = n : l.next = n, u.lastBaseUpdate = n;
  }
  var wd = !1;
  function Gs() {
    if (wd) {
      var l = ec;
      if (l !== null) throw l;
    }
  }
  function uc(l, n, u, c) {
    wd = !1;
    var s = l.updateQueue;
    mi = !1;
    var r = s.firstBaseUpdate, m = s.lastBaseUpdate, g = s.shared.pending;
    if (g !== null) {
      s.shared.pending = null;
      var T = g, N = T.next;
      T.next = null, m === null ? r = N : m.next = N, m = T;
      var V = l.alternate;
      V !== null && (V = V.updateQueue, g = V.lastBaseUpdate, g !== m && (g === null ? V.firstBaseUpdate = N : g.next = N, V.lastBaseUpdate = T));
    }
    if (r !== null) {
      var W = s.baseState;
      m = 0, V = N = T = null, g = r;
      do {
        var x = g.lane & -536870913, G = x !== g.lane;
        if (G ? (ct & x) === x : (c & x) === x) {
          x !== 0 && x === Pi && (wd = !0), V !== null && (V = V.next = {
            lane: 0,
            tag: g.tag,
            payload: g.payload,
            callback: null,
            next: null
          });
          e: {
            var he = l, _e = g;
            x = n;
            var Bt = u;
            switch (_e.tag) {
              case 1:
                if (he = _e.payload, typeof he == "function") {
                  W = he.call(Bt, W, x);
                  break e;
                }
                W = he;
                break e;
              case 3:
                he.flags = he.flags & -65537 | 128;
              case 0:
                if (he = _e.payload, x = typeof he == "function" ? he.call(Bt, W, x) : he, x == null) break e;
                W = de({}, W, x);
                break e;
              case 2:
                mi = !0;
            }
          }
          x = g.callback, x !== null && (l.flags |= 64, G && (l.flags |= 8192), G = s.callbacks, G === null ? s.callbacks = [x] : G.push(x));
        } else
          G = {
            lane: x,
            tag: g.tag,
            payload: g.payload,
            callback: g.callback,
            next: null
          }, V === null ? (N = V = G, T = W) : V = V.next = G, m |= x;
        if (g = g.next, g === null) {
          if (g = s.shared.pending, g === null)
            break;
          G = g, g = G.next, G.next = null, s.lastBaseUpdate = G, s.shared.pending = null;
        }
      } while (!0);
      V === null && (T = W), s.baseState = T, s.firstBaseUpdate = N, s.lastBaseUpdate = V, r === null && (s.shared.lanes = 0), Mn |= m, l.lanes = m, l.memoizedState = W;
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
  var An = O(null), Ll = O(0);
  function ws(l, n) {
    l = wu, K(Ll, l), K(An, n), wu = l | n.baseLanes;
  }
  function hy() {
    K(Ll, wu), K(An, An.current);
  }
  function Xs() {
    wu = Ll.current, A(An), A(Ll);
  }
  var ua = O(null), Ga = null;
  function vi(l) {
    var n = l.alternate;
    K(el, el.current & 1), K(ua, l), Ga === null && (n === null || An.current !== null || n.memoizedState !== null) && (Ga = l);
  }
  function Qs(l) {
    K(el, el.current), K(ua, l), Ga === null && (Ga = l);
  }
  function Ls(l) {
    l.tag === 22 ? (K(el, el.current), K(ua, l), Ga === null && (Ga = l)) : Ru();
  }
  function Ru() {
    K(el, el.current), K(ua, ua.current);
  }
  function ia(l) {
    A(ua), Ga === l && (Ga = null), A(el);
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
  var Jn = 0, Xe = null, Rt = null, cl = null, Vs = !1, gi = !1, ic = !1, tf = 0, lf = 0, kc = null, my = 0;
  function tl() {
    throw Error(B(321));
  }
  function Qd(l, n) {
    if (n === null) return !1;
    for (var u = 0; u < n.length && u < l.length; u++)
      if (!Ua(l[u], n[u])) return !1;
    return !0;
  }
  function Si(l, n, u, c, s, r) {
    return Jn = r, Xe = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, X.H = l === null || l.memoizedState === null ? nv : Cy, ic = !1, r = u(c, s), ic = !1, gi && (r = Vd(
      n,
      u,
      c,
      s
    )), Ld(l), r;
  }
  function Ld(l) {
    X.H = ff;
    var n = Rt !== null && Rt.next !== null;
    if (Jn = 0, cl = Rt = Xe = null, Vs = !1, lf = 0, kc = null, n) throw Error(B(300));
    l === null || hl || (l = l.dependencies, l !== null && na(l) && (hl = !0));
  }
  function Vd(l, n, u, c) {
    Xe = l;
    var s = 0;
    do {
      if (gi && (kc = null), lf = 0, gi = !1, 25 <= s) throw Error(B(301));
      if (s += 1, cl = Rt = null, l.updateQueue != null) {
        var r = l.updateQueue;
        r.lastEffect = null, r.events = null, r.stores = null, r.memoCache != null && (r.memoCache.index = 0);
      }
      X.H = Uy, r = n(u, c);
    } while (gi);
    return r;
  }
  function Ig() {
    var l = X.H, n = l.useState()[0];
    return n = typeof n.then == "function" ? af(n) : n, l = l.useState()[0], (Rt !== null ? Rt.memoizedState : null) !== l && (Xe.flags |= 1024), n;
  }
  function yy() {
    var l = tf !== 0;
    return tf = 0, l;
  }
  function Zd(l, n, u) {
    n.updateQueue = l.updateQueue, n.flags &= -2053, l.lanes &= ~u;
  }
  function Wc(l) {
    if (Vs) {
      for (l = l.memoizedState; l !== null; ) {
        var n = l.queue;
        n !== null && (n.pending = null), l = l.next;
      }
      Vs = !1;
    }
    Jn = 0, cl = Rt = Xe = null, gi = !1, lf = tf = 0, kc = null;
  }
  function Vl() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return cl === null ? Xe.memoizedState = cl = l : cl = cl.next = l, cl;
  }
  function kt() {
    if (Rt === null) {
      var l = Xe.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = Rt.next;
    var n = cl === null ? Xe.memoizedState : cl.next;
    if (n !== null)
      cl = n, Rt = l;
    else {
      if (l === null)
        throw Xe.alternate === null ? Error(B(467)) : Error(B(310));
      Rt = l, l = {
        memoizedState: Rt.memoizedState,
        baseState: Rt.baseState,
        baseQueue: Rt.baseQueue,
        queue: Rt.queue,
        next: null
      }, cl === null ? Xe.memoizedState = cl = l : cl = cl.next = l;
    }
    return cl;
  }
  function Zs() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function af(l) {
    var n = lf;
    return lf += 1, kc === null && (kc = []), l = oy(kc, l, n), n = Xe, (cl === null ? n.memoizedState : cl.next) === null && (n = n.alternate, X.H = n === null || n.memoizedState === null ? nv : Cy), l;
  }
  function nf(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return af(l);
      if (l.$$typeof === Dt) return be(l);
    }
    throw Error(B(438, String(l)));
  }
  function Js(l) {
    var n = null, u = Xe.updateQueue;
    if (u !== null && (n = u.memoCache), n == null) {
      var c = Xe.alternate;
      c !== null && (c = c.updateQueue, c !== null && (c = c.memoCache, c != null && (n = {
        data: c.data.map(function(s) {
          return s.slice();
        }),
        index: 0
      })));
    }
    if (n == null && (n = { data: [], index: 0 }), u === null && (u = Zs(), Xe.updateQueue = u), u.memoCache = n, u = n.data[n.index], u === void 0)
      for (u = n.data[n.index] = Array(l), c = 0; c < l; c++)
        u[c] = jt;
    return n.index++, u;
  }
  function Mu(l, n) {
    return typeof n == "function" ? n(l) : n;
  }
  function Ks(l) {
    var n = kt();
    return bi(n, Rt, l);
  }
  function bi(l, n, u) {
    var c = l.queue;
    if (c === null) throw Error(B(311));
    c.lastRenderedReducer = u;
    var s = l.baseQueue, r = c.pending;
    if (r !== null) {
      if (s !== null) {
        var m = s.next;
        s.next = r.next, r.next = m;
      }
      n.baseQueue = s = r, c.pending = null;
    }
    if (r = l.baseState, s === null) l.memoizedState = r;
    else {
      n = s.next;
      var g = m = null, T = null, N = n, V = !1;
      do {
        var W = N.lane & -536870913;
        if (W !== N.lane ? (ct & W) === W : (Jn & W) === W) {
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
            }), W === Pi && (V = !0);
          else if ((Jn & x) === x) {
            N = N.next, x === Pi && (V = !0);
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
            }, T === null ? (g = T = W, m = r) : T = T.next = W, Xe.lanes |= x, Mn |= x;
          W = N.action, ic && u(r, W), r = N.hasEagerState ? N.eagerState : u(r, W);
        } else
          x = {
            lane: W,
            revertLane: N.revertLane,
            gesture: N.gesture,
            action: N.action,
            hasEagerState: N.hasEagerState,
            eagerState: N.eagerState,
            next: null
          }, T === null ? (g = T = x, m = r) : T = T.next = x, Xe.lanes |= W, Mn |= W;
        N = N.next;
      } while (N !== null && N !== n);
      if (T === null ? m = r : T.next = g, !Ua(r, l.memoizedState) && (hl = !0, V && (u = ec, u !== null)))
        throw u;
      l.memoizedState = r, l.baseState = m, l.baseQueue = T, c.lastRenderedState = r;
    }
    return s === null && (c.lanes = 0), [l.memoizedState, c.dispatch];
  }
  function Jd(l) {
    var n = kt(), u = n.queue;
    if (u === null) throw Error(B(311));
    u.lastRenderedReducer = l;
    var c = u.dispatch, s = u.pending, r = n.memoizedState;
    if (s !== null) {
      u.pending = null;
      var m = s = s.next;
      do
        r = l(r, m.action), m = m.next;
      while (m !== s);
      Ua(r, n.memoizedState) || (hl = !0), n.memoizedState = r, n.baseQueue === null && (n.baseState = r), u.lastRenderedState = r;
    }
    return [r, c];
  }
  function py(l, n, u) {
    var c = Xe, s = kt(), r = it;
    if (r) {
      if (u === void 0) throw Error(B(407));
      u = u();
    } else u = n();
    var m = !Ua(
      (Rt || s).memoizedState,
      u
    );
    if (m && (s.memoizedState = u, hl = !0), s = s.queue, Is(gy.bind(null, c, s, l), [
      l
    ]), s.getSnapshot !== n || m || cl !== null && cl.memoizedState.tag & 1) {
      if (c.flags |= 2048, Fc(
        9,
        { destroy: void 0 },
        $s.bind(
          null,
          c,
          s,
          u,
          n
        ),
        null
      ), Nt === null) throw Error(B(349));
      r || (Jn & 127) !== 0 || vy(c, n, u);
    }
    return u;
  }
  function vy(l, n, u) {
    l.flags |= 16384, l = { getSnapshot: n, value: u }, n = Xe.updateQueue, n === null ? (n = Zs(), Xe.updateQueue = n, n.stores = [l]) : (u = n.stores, u === null ? n.stores = [l] : u.push(l));
  }
  function $s(l, n, u, c) {
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
      return !Ua(l, u);
    } catch {
      return !0;
    }
  }
  function $d(l) {
    var n = la(l, 2);
    n !== null && Za(n, l, 2);
  }
  function ks(l) {
    var n = Vl();
    if (typeof l == "function") {
      var u = l;
      if (l = u(), ic) {
        _a(!0);
        try {
          u();
        } finally {
          _a(!1);
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
      Rt,
      typeof c == "function" ? c : Mu
    );
  }
  function Zl(l, n, u, c, s) {
    if (Ei(l)) throw Error(B(485));
    if (l = n.action, l !== null) {
      var r = {
        payload: s,
        action: l,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(m) {
          r.listeners.push(m);
        }
      };
      X.T !== null ? u(!0) : r.isTransition = !1, c(r), u = n.pending, u === null ? (r.next = n.pending = r, Sy(n, r)) : (r.next = u.next, n.pending = u.next = r);
    }
  }
  function Sy(l, n) {
    var u = n.action, c = n.payload, s = l.state;
    if (n.isTransition) {
      var r = X.T, m = {};
      X.T = m;
      try {
        var g = u(s, c), T = X.S;
        T !== null && T(m, g), by(l, n, g);
      } catch (N) {
        kd(l, n, N);
      } finally {
        r !== null && m.types !== null && (r.types = m.types), X.T = r;
      }
    } else
      try {
        r = u(s, c), by(l, n, r);
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
  function Ws(l, n) {
    if (it) {
      var u = Nt.formState;
      if (u !== null) {
        e: {
          var c = Xe;
          if (it) {
            if (Gt) {
              t: {
                for (var s = Gt, r = ja; s.nodeType !== 8; ) {
                  if (!r) {
                    s = null;
                    break t;
                  }
                  if (s = kl(
                    s.nextSibling
                  ), s === null) {
                    s = null;
                    break t;
                  }
                }
                r = s.data, s = r === "F!" || r === "F" ? s : null;
              }
              if (s) {
                Gt = kl(
                  s.nextSibling
                ), c = s.data === "F!";
                break e;
              }
            }
            va(c);
          }
          c = !1;
        }
        c && (n = u[0]);
      }
    }
    return u = Vl(), u.memoizedState = u.baseState = n, c = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ty,
      lastRenderedState: n
    }, u.queue = c, u = Ry.bind(
      null,
      Xe,
      c
    ), c.dispatch = u, c = ks(!1), r = Pc.bind(
      null,
      Xe,
      !1,
      c.queue
    ), c = Vl(), s = {
      state: n,
      dispatch: null,
      action: l,
      pending: null
    }, c.queue = s, u = Zl.bind(
      null,
      Xe,
      s,
      r,
      u
    ), s.dispatch = u, c.memoizedState = l, [n, u, !1];
  }
  function Ay(l) {
    var n = kt();
    return P0(n, Rt, l);
  }
  function P0(l, n, u) {
    if (n = bi(
      l,
      n,
      Ty
    )[0], l = Ks(Mu)[0], typeof n == "object" && n !== null && typeof n.then == "function")
      try {
        var c = af(n);
      } catch (m) {
        throw m === Zn ? tc : m;
      }
    else c = n;
    n = kt();
    var s = n.queue, r = s.dispatch;
    return u !== n.memoizedState && (Xe.flags |= 2048, Fc(
      9,
      { destroy: void 0 },
      Wd.bind(null, s, u),
      null
    )), [c, r, l];
  }
  function Wd(l, n) {
    l.action = n;
  }
  function Fd(l) {
    var n = kt(), u = Rt;
    if (u !== null)
      return P0(n, u, l);
    kt(), n = n.memoizedState, u = kt();
    var c = u.queue.dispatch;
    return u.memoizedState = l, [n, c, !1];
  }
  function Fc(l, n, u, c) {
    return l = { tag: l, create: u, deps: c, inst: n, next: null }, n = Xe.updateQueue, n === null && (n = Zs(), Xe.updateQueue = n), u = n.lastEffect, u === null ? n.lastEffect = l.next = l : (c = u.next, u.next = l, l.next = c, n.lastEffect = l), l;
  }
  function Oy() {
    return kt().memoizedState;
  }
  function Fs(l, n, u, c) {
    var s = Vl();
    Xe.flags |= l, s.memoizedState = Fc(
      1 | n,
      { destroy: void 0 },
      u,
      c === void 0 ? null : c
    );
  }
  function cf(l, n, u, c) {
    var s = kt();
    c = c === void 0 ? null : c;
    var r = s.memoizedState.inst;
    Rt !== null && c !== null && Qd(c, Rt.memoizedState.deps) ? s.memoizedState = Fc(n, r, u, c) : (Xe.flags |= l, s.memoizedState = Fc(
      1 | n,
      r,
      u,
      c
    ));
  }
  function Id(l, n) {
    Fs(8390656, 8, l, n);
  }
  function Is(l, n) {
    cf(2048, 8, l, n);
  }
  function ev(l) {
    Xe.flags |= 4;
    var n = Xe.updateQueue;
    if (n === null)
      n = Zs(), Xe.updateQueue = n, n.events = [l];
    else {
      var u = n.events;
      u === null ? n.events = [l] : u.push(l);
    }
  }
  function Pd(l) {
    var n = kt().memoizedState;
    return ev({ ref: n, nextImpl: l }), function() {
      if ((mt & 2) !== 0) throw Error(B(440));
      return n.impl.apply(void 0, arguments);
    };
  }
  function Ps(l, n) {
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
      _a(!0);
      try {
        l();
      } finally {
        _a(!1);
      }
    }
    return u.memoizedState = [c, n], c;
  }
  function _y(l, n, u) {
    return u === void 0 || (Jn & 1073741824) !== 0 && (ct & 261930) === 0 ? l.memoizedState = n : (l.memoizedState = u, l = np(), Xe.lanes |= l, Mn |= l, u);
  }
  function nh(l, n, u, c) {
    return Ua(u, n) ? u : An.current !== null ? (l = _y(l, u, c), Ua(l, n) || (hl = !0), l) : (Jn & 42) === 0 || (Jn & 1073741824) !== 0 && (ct & 261930) === 0 ? (hl = !0, l.memoizedState = u) : (l = np(), Xe.lanes |= l, Mn |= l, n);
  }
  function Uu(l, n, u, c, s) {
    var r = j.p;
    j.p = r !== 0 && 8 > r ? r : 8;
    var m = X.T, g = {};
    X.T = g, Pc(l, !1, n, u);
    try {
      var T = s(), N = X.S;
      if (N !== null && N(g, T), T !== null && typeof T == "object" && typeof T.then == "function") {
        var V = Yd(
          T,
          c
        );
        Ic(
          l,
          n,
          V,
          Aa(l)
        );
      } else
        Ic(
          l,
          n,
          c,
          Aa(l)
        );
    } catch (W) {
      Ic(
        l,
        n,
        { then: function() {
        }, status: "rejected", reason: W },
        Aa()
      );
    } finally {
      j.p = r, m !== null && g.types !== null && (m.types = g.types), X.T = m;
    }
  }
  function Dy() {
  }
  function uh(l, n, u, c) {
    if (l.tag !== 5) throw Error(B(476));
    var s = er(l).queue;
    Uu(
      l,
      s,
      n,
      P,
      u === null ? Dy : function() {
        return of(l), u(c);
      }
    );
  }
  function er(l) {
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
    var n = er(l);
    n.next === null && (n = l.alternate.memoizedState), Ic(
      l,
      n.next.queue,
      {},
      Aa()
    );
  }
  function Mt() {
    return be(sl);
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
          var u = Aa();
          l = yi(u);
          var c = pi(n, l, u);
          c !== null && (Za(c, n, u), Du(c, n, u)), n = { cache: jd() }, l.payload = n;
          return;
      }
      n = n.return;
    }
  }
  function Hu(l, n, u) {
    var c = Aa();
    u = {
      lane: c,
      revertLane: 0,
      gesture: null,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Ei(l) ? My(n, u) : (u = En(l, n, u, c), u !== null && (Za(u, l, c), ih(u, n, c)));
  }
  function Ry(l, n, u) {
    var c = Aa();
    Ic(l, n, u, c);
  }
  function Ic(l, n, u, c) {
    var s = {
      lane: c,
      revertLane: 0,
      gesture: null,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Ei(l)) My(n, s);
    else {
      var r = l.alternate;
      if (l.lanes === 0 && (r === null || r.lanes === 0) && (r = n.lastRenderedReducer, r !== null))
        try {
          var m = n.lastRenderedState, g = r(m, u);
          if (s.hasEagerState = !0, s.eagerState = g, Ua(g, m))
            return tn(l, n, s, 0), Nt === null && en(), !1;
        } catch {
        }
      if (u = En(l, n, s, c), u !== null)
        return Za(u, l, c), ih(u, n, c), !0;
    }
    return !1;
  }
  function Pc(l, n, u, c) {
    if (c = {
      lane: 2,
      revertLane: so(),
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
      ), n !== null && Za(n, l, 2);
  }
  function Ei(l) {
    var n = l.alternate;
    return l === Xe || n !== null && n === Xe;
  }
  function My(l, n) {
    gi = Vs = !0;
    var u = l.pending;
    u === null ? n.next = n : (n.next = u.next, u.next = n), l.pending = n;
  }
  function ih(l, n, u) {
    if ((u & 4194048) !== 0) {
      var c = n.lanes;
      c &= l.pendingLanes, u |= c, n.lanes = u, us(l, u);
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
      return Vl().memoizedState = [
        l,
        n === void 0 ? null : n
      ], l;
    },
    useContext: be,
    useEffect: Id,
    useImperativeHandle: function(l, n, u) {
      u = u != null ? u.concat([l]) : null, Fs(
        4194308,
        4,
        zy.bind(null, n, l),
        u
      );
    },
    useLayoutEffect: function(l, n) {
      return Fs(4194308, 4, l, n);
    },
    useInsertionEffect: function(l, n) {
      Fs(4, 2, l, n);
    },
    useMemo: function(l, n) {
      var u = Vl();
      n = n === void 0 ? null : n;
      var c = l();
      if (ic) {
        _a(!0);
        try {
          l();
        } finally {
          _a(!1);
        }
      }
      return u.memoizedState = [c, n], c;
    },
    useReducer: function(l, n, u) {
      var c = Vl();
      if (u !== void 0) {
        var s = u(n);
        if (ic) {
          _a(!0);
          try {
            u(n);
          } finally {
            _a(!1);
          }
        }
      } else s = n;
      return c.memoizedState = c.baseState = s, l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: l,
        lastRenderedState: s
      }, c.queue = l, l = l.dispatch = Hu.bind(
        null,
        Xe,
        l
      ), [c.memoizedState, l];
    },
    useRef: function(l) {
      var n = Vl();
      return l = { current: l }, n.memoizedState = l;
    },
    useState: function(l) {
      l = ks(l);
      var n = l.queue, u = Ry.bind(null, Xe, n);
      return n.dispatch = u, [l.memoizedState, u];
    },
    useDebugValue: lh,
    useDeferredValue: function(l, n) {
      var u = Vl();
      return _y(u, l, n);
    },
    useTransition: function() {
      var l = ks(!1);
      return l = Uu.bind(
        null,
        Xe,
        l.queue,
        !0,
        !1
      ), Vl().memoizedState = l, [!1, l];
    },
    useSyncExternalStore: function(l, n, u) {
      var c = Xe, s = Vl();
      if (it) {
        if (u === void 0)
          throw Error(B(407));
        u = u();
      } else {
        if (u = n(), Nt === null)
          throw Error(B(349));
        (ct & 127) !== 0 || vy(c, n, u);
      }
      s.memoizedState = u;
      var r = { value: u, getSnapshot: n };
      return s.queue = r, Id(gy.bind(null, c, r, l), [
        l
      ]), c.flags |= 2048, Fc(
        9,
        { destroy: void 0 },
        $s.bind(
          null,
          c,
          r,
          u,
          n
        ),
        null
      ), u;
    },
    useId: function() {
      var l = Vl(), n = Nt.identifierPrefix;
      if (it) {
        var u = xa, c = un;
        u = (c & ~(1 << 32 - Rl(c) - 1)).toString(32) + u, n = "_" + n + "R_" + u, u = tf++, 0 < u && (n += "H" + u.toString(32)), n += "_";
      } else
        u = my++, n = "_" + n + "r_" + u.toString(32) + "_";
      return l.memoizedState = n;
    },
    useHostTransitionStatus: Mt,
    useFormState: Ws,
    useActionState: Ws,
    useOptimistic: function(l) {
      var n = Vl();
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
        Xe,
        !0,
        u
      ), u.dispatch = n, [l, n];
    },
    useMemoCache: Js,
    useCacheRefresh: function() {
      return Vl().memoizedState = av.bind(
        null,
        Xe
      );
    },
    useEffectEvent: function(l) {
      var n = Vl(), u = { impl: l };
      return n.memoizedState = u, function() {
        if ((mt & 2) !== 0)
          throw Error(B(440));
        return u.impl.apply(void 0, arguments);
      };
    }
  }, Cy = {
    readContext: be,
    use: nf,
    useCallback: Cu,
    useContext: be,
    useEffect: Is,
    useImperativeHandle: th,
    useInsertionEffect: Ps,
    useLayoutEffect: eh,
    useMemo: ah,
    useReducer: Ks,
    useRef: Oy,
    useState: function() {
      return Ks(Mu);
    },
    useDebugValue: lh,
    useDeferredValue: function(l, n) {
      var u = kt();
      return nh(
        u,
        Rt.memoizedState,
        l,
        n
      );
    },
    useTransition: function() {
      var l = Ks(Mu)[0], n = kt().memoizedState;
      return [
        typeof l == "boolean" ? l : af(l),
        n
      ];
    },
    useSyncExternalStore: py,
    useId: tv,
    useHostTransitionStatus: Mt,
    useFormState: Ay,
    useActionState: Ay,
    useOptimistic: function(l, n) {
      var u = kt();
      return I0(u, Rt, l, n);
    },
    useMemoCache: Js,
    useCacheRefresh: lv
  };
  Cy.useEffectEvent = Pd;
  var Uy = {
    readContext: be,
    use: nf,
    useCallback: Cu,
    useContext: be,
    useEffect: Is,
    useImperativeHandle: th,
    useInsertionEffect: Ps,
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
      return Rt === null ? _y(u, l, n) : nh(
        u,
        Rt.memoizedState,
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
    useHostTransitionStatus: Mt,
    useFormState: Fd,
    useActionState: Fd,
    useOptimistic: function(l, n) {
      var u = kt();
      return Rt !== null ? I0(u, Rt, l, n) : (u.baseState = l, [l, u.queue.dispatch]);
    },
    useMemoCache: Js,
    useCacheRefresh: lv
  };
  Uy.useEffectEvent = Pd;
  function Hy(l, n, u, c) {
    n = l.memoizedState, u = u(c, n), u = u == null ? n : de({}, n, u), l.memoizedState = u, l.lanes === 0 && (l.updateQueue.baseState = u);
  }
  var eo = {
    enqueueSetState: function(l, n, u) {
      l = l._reactInternals;
      var c = Aa(), s = yi(c);
      s.payload = n, u != null && (s.callback = u), n = pi(l, s, c), n !== null && (Za(n, l, c), Du(n, l, c));
    },
    enqueueReplaceState: function(l, n, u) {
      l = l._reactInternals;
      var c = Aa(), s = yi(c);
      s.tag = 1, s.payload = n, u != null && (s.callback = u), n = pi(l, s, c), n !== null && (Za(n, l, c), Du(n, l, c));
    },
    enqueueForceUpdate: function(l, n) {
      l = l._reactInternals;
      var u = Aa(), c = yi(u);
      c.tag = 2, n != null && (c.callback = n), n = pi(l, c, u), n !== null && (Za(n, l, u), Du(n, l, u));
    }
  };
  function Kn(l, n, u, c, s, r, m) {
    return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(c, r, m) : n.prototype && n.prototype.isPureReactComponent ? !Ki(u, c) || !Ki(s, r) : !0;
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
      for (var s in l)
        u[s] === void 0 && (u[s] = l[s]);
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
  function sf(l, n) {
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
    } catch (s) {
      setTimeout(function() {
        throw s;
      });
    }
  }
  function rf(l, n, u) {
    return u = yi(u), u.tag = 3, u.payload = { element: null }, u.callback = function() {
      sf(l, n);
    }, u;
  }
  function uv(l) {
    return l = yi(l), l.tag = 3, l;
  }
  function jy(l, n, u, c) {
    var s = u.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var r = c.value;
      l.payload = function() {
        return s(r);
      }, l.callback = function() {
        oh(n, u, c);
      };
    }
    var m = u.stateNode;
    m !== null && typeof m.componentDidCatch == "function" && (l.callback = function() {
      oh(n, u, c), typeof s != "function" && (Qu === null ? Qu = /* @__PURE__ */ new Set([this]) : Qu.add(this));
      var g = c.stack;
      this.componentDidCatch(c.value, {
        componentStack: g !== null ? g : ""
      });
    });
  }
  function iv(l, n, u, c, s) {
    if (u.flags |= 32768, c !== null && typeof c == "object" && typeof c.then == "function") {
      if (n = u.alternate, n !== null && cn(
        n,
        u,
        s,
        !0
      ), u = ua.current, u !== null) {
        switch (u.tag) {
          case 31:
          case 13:
            return Ga === null ? bh() : u.alternate === null && Wt === 0 && (Wt = 3), u.flags &= -257, u.flags |= 65536, u.lanes = s, c === Fo ? u.flags |= 16384 : (n = u.updateQueue, n === null ? u.updateQueue = /* @__PURE__ */ new Set([c]) : n.add(c), Ah(l, c, s)), !1;
          case 22:
            return u.flags |= 65536, c === Fo ? u.flags |= 16384 : (n = u.updateQueue, n === null ? (n = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([c])
            }, u.updateQueue = n) : (u = n.retryQueue, u === null ? n.retryQueue = /* @__PURE__ */ new Set([c]) : u.add(c)), Ah(l, c, s)), !1;
        }
        throw Error(B(435, u.tag));
      }
      return Ah(l, c, s), bh(), !1;
    }
    if (it)
      return n = ua.current, n !== null ? ((n.flags & 65536) === 0 && (n.flags |= 256), n.flags |= 65536, n.lanes = s, c !== Au && (l = Error(B(422), { cause: c }), Us(an(l, u)))) : (c !== Au && (n = Error(B(423), {
        cause: c
      }), Us(
        an(n, u)
      )), l = l.current.alternate, l.flags |= 65536, s &= -s, l.lanes |= s, c = an(c, u), s = rf(
        l.stateNode,
        c,
        s
      ), ef(l, s), Wt !== 4 && (Wt = 2)), !1;
    var r = Error(B(520), { cause: c });
    if (r = an(r, u), ol === null ? ol = [r] : ol.push(r), Wt !== 4 && (Wt = 2), n === null) return !0;
    c = an(c, u), u = n;
    do {
      switch (u.tag) {
        case 3:
          return u.flags |= 65536, l = s & -s, u.lanes |= l, l = rf(u.stateNode, c, l), ef(u, l), !1;
        case 1:
          if (n = u.type, r = u.stateNode, (u.flags & 128) === 0 && (typeof n.getDerivedStateFromError == "function" || r !== null && typeof r.componentDidCatch == "function" && (Qu === null || !Qu.has(r))))
            return u.flags |= 65536, s &= -s, u.lanes |= s, s = uv(s), jy(
              s,
              l,
              u,
              c
            ), ef(u, s), !1;
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
  function Nu(l, n, u, c, s) {
    u = u.render;
    var r = n.ref;
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
      r,
      s
    ), g = yy(), l !== null && !hl ? (Zd(l, n, s), Bu(l, n, s)) : (it && g && Ud(n), n.flags |= 1, Cl(l, n, c, s), n.child);
  }
  function qy(l, n, u, c, s) {
    if (l === null) {
      var r = u.type;
      return typeof r == "function" && !Tn(r) && r.defaultProps === void 0 && u.compare === null ? (n.tag = 15, n.type = r, Gy(
        l,
        n,
        r,
        c,
        s
      )) : (l = zs(
        u.type,
        null,
        c,
        n,
        n.mode,
        s
      ), l.ref = n.ref, l.return = n, n.child = l);
    }
    if (r = l.child, !lo(l, s)) {
      var m = r.memoizedProps;
      if (u = u.compare, u = u !== null ? u : Ki, u(m, c) && l.ref === n.ref)
        return Bu(l, n, s);
    }
    return n.flags |= 1, l = ln(r, c), l.ref = n.ref, l.return = n, n.child = l;
  }
  function Gy(l, n, u, c, s) {
    if (l !== null) {
      var r = l.memoizedProps;
      if (Ki(r, c) && l.ref === n.ref)
        if (hl = !1, n.pendingProps = c = r, lo(l, s))
          (l.flags & 131072) !== 0 && (hl = !0);
        else
          return n.lanes = l.lanes, Bu(l, n, s);
    }
    return On(
      l,
      n,
      u,
      c,
      s
    );
  }
  function wy(l, n, u, c) {
    var s = c.children, r = l !== null ? l.memoizedState : null;
    if (l === null && n.stateNode === null && (n.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), c.mode === "hidden") {
      if ((n.flags & 128) !== 0) {
        if (r = r !== null ? r.baseLanes | u : u, l !== null) {
          for (c = n.child = l.child, s = 0; c !== null; )
            s = s | c.lanes | c.childLanes, c = c.sibling;
          c = s & ~r;
        } else c = 0, n.child = null;
        return lr(
          l,
          n,
          r,
          u,
          c
        );
      }
      if ((u & 536870912) !== 0)
        n.memoizedState = { baseLanes: 0, cachePool: null }, l !== null && qa(
          n,
          r !== null ? r.cachePool : null
        ), r !== null ? ws(n, r) : hy(), Ls(n);
      else
        return c = n.lanes = 536870912, lr(
          l,
          n,
          r !== null ? r.baseLanes | u : u,
          u,
          c
        );
    } else
      r !== null ? (qa(n, r.cachePool), ws(n, r), Ru(), n.memoizedState = null) : (l !== null && qa(n, null), hy(), Ru());
    return Cl(l, n, s, u), n.child;
  }
  function tr(l, n) {
    return l !== null && l.tag === 22 || n.stateNode !== null || (n.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), n.sibling;
  }
  function lr(l, n, u, c, s) {
    var r = hi();
    return r = r === null ? null : { parent: il._currentValue, pool: r }, n.memoizedState = {
      baseLanes: u,
      cachePool: r
    }, l !== null && qa(n, null), hy(), Ls(n), l !== null && cn(l, n, c, !0), n.childLanes = s, null;
  }
  function Jl(l, n) {
    return n = Ti(
      { mode: n.mode, children: n.children },
      l.mode
    ), n.ref = l.ref, l.child = n, n.return = l, n;
  }
  function Xy(l, n, u) {
    return Jc(n, l.child, null, u), l = Jl(n, n.pendingProps), l.flags |= 2, ia(n), n.memoizedState = null, l;
  }
  function wa(l, n, u) {
    var c = n.pendingProps, s = (n.flags & 128) !== 0;
    if (n.flags &= -129, l === null) {
      if (it) {
        if (c.mode === "hidden")
          return l = Jl(n, c), n.lanes = 536870912, tr(null, l);
        if (Qs(n), (l = Gt) ? (l = Ve(
          l,
          ja
        ), l = l !== null && l.data === "&" ? l : null, l !== null && (n.memoizedState = {
          dehydrated: l,
          treeContext: Qn !== null ? { id: un, overflow: xa } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, u = Ds(l), u.return = n, n.child = u, gl = n, Gt = null)) : l = null, l === null) throw va(n);
        return n.lanes = 536870912, null;
      }
      return Jl(n, c);
    }
    var r = l.memoizedState;
    if (r !== null) {
      var m = r.dehydrated;
      if (Qs(n), s)
        if (n.flags & 256)
          n.flags &= -257, n = Xy(
            l,
            n,
            u
          );
        else if (n.memoizedState !== null)
          n.child = l.child, n.flags |= 128, n = null;
        else throw Error(B(558));
      else if (hl || cn(l, n, u, !1), s = (u & l.childLanes) !== 0, hl || s) {
        if (c = Nt, c !== null && (m = cu(c, u), m !== 0 && m !== r.retryLane))
          throw r.retryLane = m, la(l, m), Za(c, l, m), Yy;
        bh(), n = Xy(
          l,
          n,
          u
        );
      } else
        l = r.treeContext, Gt = kl(m.nextSibling), gl = n, it = !0, Tu = null, ja = !1, l !== null && iy(n, l), n = Jl(n, c), n.flags |= 4096;
      return n;
    }
    return l = ln(l.child, {
      mode: c.mode,
      children: c.children
    }), l.ref = n.ref, n.child = l, l.return = n, l;
  }
  function ar(l, n) {
    var u = n.ref;
    if (u === null)
      l !== null && l.ref !== null && (n.flags |= 4194816);
    else {
      if (typeof u != "function" && typeof u != "object")
        throw Error(B(284));
      (l === null || l.ref !== u) && (n.flags |= 4194816);
    }
  }
  function On(l, n, u, c, s) {
    return _u(n), u = Si(
      l,
      n,
      u,
      c,
      void 0,
      s
    ), c = yy(), l !== null && !hl ? (Zd(l, n, s), Bu(l, n, s)) : (it && c && Ud(n), n.flags |= 1, Cl(l, n, u, s), n.child);
  }
  function Qy(l, n, u, c, s, r) {
    return _u(n), n.updateQueue = null, u = Vd(
      n,
      c,
      u,
      s
    ), Ld(l), c = yy(), l !== null && !hl ? (Zd(l, n, r), Bu(l, n, r)) : (it && c && Ud(n), n.flags |= 1, Cl(l, n, u, r), n.child);
  }
  function cc(l, n, u, c, s) {
    if (_u(n), n.stateNode === null) {
      var r = wc, m = u.contextType;
      typeof m == "object" && m !== null && (r = be(m)), r = new u(c, r), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = eo, n.stateNode = r, r._reactInternals = n, r = n.stateNode, r.props = c, r.state = n.memoizedState, r.refs = {}, Gd(n), m = u.contextType, r.context = typeof m == "object" && m !== null ? be(m) : wc, r.state = n.memoizedState, m = u.getDerivedStateFromProps, typeof m == "function" && (Hy(
        n,
        u,
        m,
        c
      ), r.state = n.memoizedState), typeof u.getDerivedStateFromProps == "function" || typeof r.getSnapshotBeforeUpdate == "function" || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (m = r.state, typeof r.componentWillMount == "function" && r.componentWillMount(), typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount(), m !== r.state && eo.enqueueReplaceState(r, r.state, null), uc(n, c, r, s), Gs(), r.state = n.memoizedState), typeof r.componentDidMount == "function" && (n.flags |= 4194308), c = !0;
    } else if (l === null) {
      r = n.stateNode;
      var g = n.memoizedProps, T = to(u, g);
      r.props = T;
      var N = r.context, V = u.contextType;
      m = wc, typeof V == "object" && V !== null && (m = be(V));
      var W = u.getDerivedStateFromProps;
      V = typeof W == "function" || typeof r.getSnapshotBeforeUpdate == "function", g = n.pendingProps !== g, V || typeof r.UNSAFE_componentWillReceiveProps != "function" && typeof r.componentWillReceiveProps != "function" || (g || N !== m) && Ny(
        n,
        r,
        c,
        m
      ), mi = !1;
      var x = n.memoizedState;
      r.state = x, uc(n, c, r, s), Gs(), N = n.memoizedState, g || x !== N || mi ? (typeof W == "function" && (Hy(
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
      )) ? (V || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (typeof r.componentWillMount == "function" && r.componentWillMount(), typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount()), typeof r.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof r.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = c, n.memoizedState = N), r.props = c, r.state = N, r.context = m, c = T) : (typeof r.componentDidMount == "function" && (n.flags |= 4194308), c = !1);
    } else {
      r = n.stateNode, qs(l, n), m = n.memoizedProps, V = to(u, m), r.props = V, W = n.pendingProps, x = r.context, N = u.contextType, T = wc, typeof N == "object" && N !== null && (T = be(N)), g = u.getDerivedStateFromProps, (N = typeof g == "function" || typeof r.getSnapshotBeforeUpdate == "function") || typeof r.UNSAFE_componentWillReceiveProps != "function" && typeof r.componentWillReceiveProps != "function" || (m !== W || x !== T) && Ny(
        n,
        r,
        c,
        T
      ), mi = !1, x = n.memoizedState, r.state = x, uc(n, c, r, s), Gs();
      var G = n.memoizedState;
      m !== W || x !== G || mi || l !== null && l.dependencies !== null && na(l.dependencies) ? (typeof g == "function" && (Hy(
        n,
        u,
        g,
        c
      ), G = n.memoizedState), (V = mi || Kn(
        n,
        u,
        V,
        c,
        x,
        G,
        T
      ) || l !== null && l.dependencies !== null && na(l.dependencies)) ? (N || typeof r.UNSAFE_componentWillUpdate != "function" && typeof r.componentWillUpdate != "function" || (typeof r.componentWillUpdate == "function" && r.componentWillUpdate(c, G, T), typeof r.UNSAFE_componentWillUpdate == "function" && r.UNSAFE_componentWillUpdate(
        c,
        G,
        T
      )), typeof r.componentDidUpdate == "function" && (n.flags |= 4), typeof r.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof r.componentDidUpdate != "function" || m === l.memoizedProps && x === l.memoizedState || (n.flags |= 4), typeof r.getSnapshotBeforeUpdate != "function" || m === l.memoizedProps && x === l.memoizedState || (n.flags |= 1024), n.memoizedProps = c, n.memoizedState = G), r.props = c, r.state = G, r.context = T, c = V) : (typeof r.componentDidUpdate != "function" || m === l.memoizedProps && x === l.memoizedState || (n.flags |= 4), typeof r.getSnapshotBeforeUpdate != "function" || m === l.memoizedProps && x === l.memoizedState || (n.flags |= 1024), c = !1);
    }
    return r = c, ar(l, n), c = (n.flags & 128) !== 0, r || c ? (r = n.stateNode, u = c && typeof u.getDerivedStateFromError != "function" ? null : r.render(), n.flags |= 1, l !== null && c ? (n.child = Jc(
      n,
      l.child,
      null,
      s
    ), n.child = Jc(
      n,
      null,
      u,
      s
    )) : Cl(l, n, u, s), n.memoizedState = r.state, l = n.child) : l = Bu(
      l,
      n,
      s
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
  function nr(l) {
    return { baseLanes: l, cachePool: qd() };
  }
  function ur(l, n, u) {
    return l = l !== null ? l.childLanes & ~u : 0, n && (l |= Qa), l;
  }
  function _n(l, n, u) {
    var c = n.pendingProps, s = !1, r = (n.flags & 128) !== 0, m;
    if ((m = r) || (m = l !== null && l.memoizedState === null ? !1 : (el.current & 2) !== 0), m && (s = !0, n.flags &= -129), m = (n.flags & 32) !== 0, n.flags &= -33, l === null) {
      if (it) {
        if (s ? vi(n) : Ru(), (l = Gt) ? (l = Ve(
          l,
          ja
        ), l = l !== null && l.data !== "&" ? l : null, l !== null && (n.memoizedState = {
          dehydrated: l,
          treeContext: Qn !== null ? { id: un, overflow: xa } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, u = Ds(l), u.return = n, n.child = u, gl = n, Gt = null)) : l = null, l === null) throw va(n);
        return Un(l) ? n.lanes = 32 : n.lanes = 536870912, null;
      }
      var g = c.children;
      return c = c.fallback, s ? (Ru(), s = n.mode, g = Ti(
        { mode: "hidden", children: g },
        s
      ), c = Xc(
        c,
        s,
        u,
        null
      ), g.return = n, c.return = n, g.sibling = c, n.child = g, c = n.child, c.memoizedState = nr(u), c.childLanes = ur(
        l,
        m,
        u
      ), n.memoizedState = zn, tr(null, c)) : (vi(n), fh(n, g));
    }
    var T = l.memoizedState;
    if (T !== null && (g = T.dehydrated, g !== null)) {
      if (r)
        n.flags & 256 ? (vi(n), n.flags &= -257, n = sh(
          l,
          n,
          u
        )) : n.memoizedState !== null ? (Ru(), n.child = l.child, n.flags |= 128, n = null) : (Ru(), g = c.fallback, s = n.mode, c = Ti(
          { mode: "visible", children: c.children },
          s
        ), g = Xc(
          g,
          s,
          u,
          null
        ), g.flags |= 2, c.return = n, g.return = n, c.sibling = g, n.child = c, Jc(
          n,
          l.child,
          null,
          u
        ), c = n.child, c.memoizedState = nr(u), c.childLanes = ur(
          l,
          m,
          u
        ), n.memoizedState = zn, n = tr(null, c));
      else if (vi(n), Un(g)) {
        if (m = g.nextSibling && g.nextSibling.dataset, m) var N = m.dgst;
        m = N, c = Error(B(419)), c.stack = "", c.digest = m, Us({ value: c, source: null, stack: null }), n = sh(
          l,
          n,
          u
        );
      } else if (hl || cn(l, n, u, !1), m = (u & l.childLanes) !== 0, hl || m) {
        if (m = Nt, m !== null && (c = cu(m, u), c !== 0 && c !== T.retryLane))
          throw T.retryLane = c, la(l, c), Za(m, l, c), Yy;
        Op(g) || bh(), n = sh(
          l,
          n,
          u
        );
      } else
        Op(g) ? (n.flags |= 192, n.child = l.child, n = null) : (l = T.treeContext, Gt = kl(
          g.nextSibling
        ), gl = n, it = !0, Tu = null, ja = !1, l !== null && iy(n, l), n = fh(
          n,
          c.children
        ), n.flags |= 4096);
      return n;
    }
    return s ? (Ru(), g = c.fallback, s = n.mode, T = l.child, N = T.sibling, c = ln(T, {
      mode: "hidden",
      children: c.children
    }), c.subtreeFlags = T.subtreeFlags & 65011712, N !== null ? g = ln(
      N,
      g
    ) : (g = Xc(
      g,
      s,
      u,
      null
    ), g.flags |= 2), g.return = n, c.return = n, c.sibling = g, n.child = c, tr(null, c), c = n.child, g = l.child.memoizedState, g === null ? g = nr(u) : (s = g.cachePool, s !== null ? (T = il._currentValue, s = s.parent !== T ? { parent: T, pool: T } : s) : s = qd(), g = {
      baseLanes: g.baseLanes | u,
      cachePool: s
    }), c.memoizedState = g, c.childLanes = ur(
      l,
      m,
      u
    ), n.memoizedState = zn, tr(l.child, c)) : (vi(n), u = l.child, l = u.sibling, u = ln(u, {
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
    return l = Na(22, l, null, n), l.lanes = 0, l;
  }
  function sh(l, n, u) {
    return Jc(n, l.child, null, u), l = fh(
      n,
      n.pendingProps.children
    ), l.flags |= 2, n.memoizedState = null, l;
  }
  function df(l, n, u) {
    l.lanes |= n;
    var c = l.alternate;
    c !== null && (c.lanes |= n), Hs(l.return, n, u);
  }
  function oc(l, n, u, c, s, r) {
    var m = l.memoizedState;
    m === null ? l.memoizedState = {
      isBackwards: n,
      rendering: null,
      renderingStartTime: 0,
      last: c,
      tail: u,
      tailMode: s,
      treeForkCount: r
    } : (m.isBackwards = n, m.rendering = null, m.renderingStartTime = 0, m.last = c, m.tail = u, m.tailMode = s, m.treeForkCount = r);
  }
  function Vy(l, n, u) {
    var c = n.pendingProps, s = c.revealOrder, r = c.tail;
    c = c.children;
    var m = el.current, g = (m & 2) !== 0;
    if (g ? (m = m & 1 | 2, n.flags |= 128) : m &= 1, K(el, m), Cl(l, n, c, u), c = it ? Ko : 0, !g && l !== null && (l.flags & 128) !== 0)
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
    switch (s) {
      case "forwards":
        for (u = n.child, s = null; u !== null; )
          l = u.alternate, l !== null && $c(l) === null && (s = u), u = u.sibling;
        u = s, u === null ? (s = n.child, n.child = null) : (s = u.sibling, u.sibling = null), oc(
          n,
          !1,
          s,
          u,
          r,
          c
        );
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (u = null, s = n.child, n.child = null; s !== null; ) {
          if (l = s.alternate, l !== null && $c(l) === null) {
            n.child = s;
            break;
          }
          l = s.sibling, s.sibling = u, u = s, s = l;
        }
        oc(
          n,
          !0,
          u,
          null,
          r,
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
    return (l.lanes & n) !== 0 ? !0 : (l = l.dependencies, !!(l !== null && na(l)));
  }
  function cv(l, n, u) {
    switch (n.tag) {
      case 3:
        Ie(n, n.stateNode.containerInfo), zu(n, il, l.memoizedState.cache), Ln();
        break;
      case 27:
      case 5:
        ta(n);
        break;
      case 4:
        Ie(n, n.stateNode.containerInfo);
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
          return n.flags |= 128, Qs(n), null;
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
        var s = (l.flags & 128) !== 0;
        if (c = (u & n.childLanes) !== 0, c || (cn(
          l,
          n,
          u,
          !1
        ), c = (u & n.childLanes) !== 0), s) {
          if (c)
            return Vy(
              l,
              n,
              u
            );
          n.flags |= 128;
        }
        if (s = n.memoizedState, s !== null && (s.rendering = null, s.tail = null, s.lastEffect = null), K(el, el.current), c) break;
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
  function ir(l, n, u) {
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
      hl = !1, it && (n.flags & 1048576) !== 0 && Ms(n, Ko, n.index);
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
              var s = l.$$typeof;
              if (s === Lt) {
                n.tag = 11, n = Nu(
                  null,
                  n,
                  l,
                  c,
                  u
                );
                break e;
              } else if (s === Oe) {
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
        return c = n.type, s = to(
          c,
          n.pendingProps
        ), cc(
          l,
          n,
          c,
          s,
          u
        );
      case 3:
        e: {
          if (Ie(
            n,
            n.stateNode.containerInfo
          ), l === null) throw Error(B(387));
          c = n.pendingProps;
          var r = n.memoizedState;
          s = r.element, qs(l, n), uc(n, c, null, u);
          var m = n.memoizedState;
          if (c = m.cache, zu(n, il, c), c !== r.cache && Bd(
            n,
            [il],
            u,
            !0
          ), Gs(), c = m.element, r.isDehydrated)
            if (r = {
              element: c,
              isDehydrated: !1,
              cache: m.cache
            }, n.updateQueue.baseState = r, n.memoizedState = r, n.flags & 256) {
              n = Ly(
                l,
                n,
                c,
                u
              );
              break e;
            } else if (c !== s) {
              s = an(
                Error(B(424)),
                n
              ), Us(s), n = Ly(
                l,
                n,
                c,
                u
              );
              break e;
            } else
              for (l = n.stateNode.containerInfo, l.nodeType === 9 ? l = l.body : l = l.nodeName === "HTML" ? l.ownerDocument.body : l, Gt = kl(l.firstChild), gl = n, it = !0, Tu = null, ja = !0, u = dy(
                n,
                null,
                c,
                u
              ), n.child = u; u; )
                u.flags = u.flags & -3 | 4096, u = u.sibling;
          else {
            if (Ln(), c === s) {
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
        return ar(l, n), l === null ? (u = Mi(
          n.type,
          null,
          n.pendingProps,
          null
        )) ? n.memoizedState = u : it || (u = n.type, l = n.pendingProps, c = Rr(
          ze.current
        ).createElement(u), c[vl] = n, c[Zt] = l, $l(c, u, l), Tl(c), n.stateNode = c) : n.memoizedState = Mi(
          n.type,
          l.memoizedProps,
          n.pendingProps,
          l.memoizedState
        ), null;
      case 27:
        return ta(n), l === null && it && (c = n.stateNode = Fn(
          n.type,
          n.pendingProps,
          ze.current
        ), gl = n, ja = !0, s = Gt, Lu(n.type) ? (_f = s, Gt = kl(c.firstChild)) : Gt = s), Cl(
          l,
          n,
          n.pendingProps.children,
          u
        ), ar(l, n), l === null && (n.flags |= 4194304), n.child;
      case 5:
        return l === null && it && ((s = c = Gt) && (c = Ap(
          c,
          n.type,
          n.pendingProps,
          ja
        ), c !== null ? (n.stateNode = c, gl = n, Gt = kl(c.firstChild), ja = !1, s = !0) : s = !1), s || va(n)), ta(n), s = n.type, r = n.pendingProps, m = l !== null ? l.memoizedProps : null, c = r.children, xh(s, r) ? c = null : m !== null && xh(s, m) && (n.flags |= 32), n.memoizedState !== null && (s = Si(
          l,
          n,
          Ig,
          null,
          null,
          u
        ), sl._currentValue = s), ar(l, n), Cl(l, n, c, u), n.child;
      case 6:
        return l === null && it && ((l = u = Gt) && (u = aS(
          u,
          n.pendingProps,
          ja
        ), u !== null ? (n.stateNode = u, gl = n, Gt = null, l = !0) : l = !1), l || va(n)), null;
      case 13:
        return _n(l, n, u);
      case 4:
        return Ie(
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
        return s = n.type._context, c = n.pendingProps.children, _u(n), s = be(s), c = c(s), n.flags |= 1, Cl(l, n, c, u), n.child;
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
        return wa(l, n, u);
      case 22:
        return wy(
          l,
          n,
          u,
          n.pendingProps
        );
      case 24:
        return _u(n), c = be(il), l === null ? (s = hi(), s === null && (s = Nt, r = jd(), s.pooledCache = r, r.refCount++, r !== null && (s.pooledCacheLanes |= u), s = r), n.memoizedState = { parent: c, cache: s }, Gd(n), zu(n, il, s)) : ((l.lanes & u) !== 0 && (qs(l, n), uc(n, null, null, u), Gs()), s = l.memoizedState, r = n.memoizedState, s.parent !== c ? (s = { parent: c, cache: c }, n.memoizedState = s, n.lanes === 0 && (n.memoizedState = n.updateQueue.baseState = s), zu(n, il, c)) : (c = r.cache, zu(n, il, c), c !== s.cache && Bd(
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
  function rh(l, n, u, c, s) {
    if ((n = (l.mode & 32) !== 0) && (n = !1), n) {
      if (l.flags |= 16777216, (s & 335544128) === s)
        if (l.stateNode.complete) l.flags |= 8192;
        else if (vf()) l.flags |= 8192;
        else
          throw ac = Fo, xs;
    } else l.flags &= -16777217;
  }
  function ov(l, n) {
    if (n.type !== "stylesheet" || (n.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (l.flags |= 16777216, !Lh(n))
      if (vf()) l.flags |= 8192;
      else
        throw ac = Fo, xs;
  }
  function cr(l, n) {
    n !== null && (l.flags |= 4), l.flags & 16384 && (n = l.tag !== 22 ? qe() : 536870912, l.lanes |= n, rc |= n);
  }
  function Kl(l, n) {
    if (!it)
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
  function wt(l) {
    var n = l.alternate !== null && l.alternate.child === l.child, u = 0, c = 0;
    if (n)
      for (var s = l.child; s !== null; )
        u |= s.lanes | s.childLanes, c |= s.subtreeFlags & 65011712, c |= s.flags & 65011712, s.return = l, s = s.sibling;
    else
      for (s = l.child; s !== null; )
        u |= s.lanes | s.childLanes, c |= s.subtreeFlags, c |= s.flags, s.return = l, s = s.sibling;
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
        return wt(n), null;
      case 1:
        return wt(n), null;
      case 3:
        return u = n.stateNode, c = null, l !== null && (c = l.memoizedState.cache), n.memoizedState.cache !== c && (n.flags |= 2048), aa(il), Tt(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (l === null || l.child === null) && (Ou(n) ? xu(n) : l === null || l.memoizedState.isDehydrated && (n.flags & 256) === 0 || (n.flags |= 1024, Hd())), wt(n), null;
      case 26:
        var s = n.type, r = n.memoizedState;
        return l === null ? (xu(n), r !== null ? (wt(n), ov(n, r)) : (wt(n), rh(
          n,
          s,
          null,
          c,
          u
        ))) : r ? r !== l.memoizedState ? (xu(n), wt(n), ov(n, r)) : (wt(n), n.flags &= -16777217) : (l = l.memoizedProps, l !== c && xu(n), wt(n), rh(
          n,
          s,
          l,
          c,
          u
        )), null;
      case 27:
        if (vn(n), u = ze.current, s = n.type, l !== null && n.stateNode != null)
          l.memoizedProps !== c && xu(n);
        else {
          if (!c) {
            if (n.stateNode === null)
              throw Error(B(166));
            return wt(n), null;
          }
          l = ee.current, Ou(n) ? ko(n) : (l = Fn(s, c, u), n.stateNode = l, xu(n));
        }
        return wt(n), null;
      case 5:
        if (vn(n), s = n.type, l !== null && n.stateNode != null)
          l.memoizedProps !== c && xu(n);
        else {
          if (!c) {
            if (n.stateNode === null)
              throw Error(B(166));
            return wt(n), null;
          }
          if (r = ee.current, Ou(n))
            ko(n);
          else {
            var m = Rr(
              ze.current
            );
            switch (r) {
              case 1:
                r = m.createElementNS(
                  "http://www.w3.org/2000/svg",
                  s
                );
                break;
              case 2:
                r = m.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  s
                );
                break;
              default:
                switch (s) {
                  case "svg":
                    r = m.createElementNS(
                      "http://www.w3.org/2000/svg",
                      s
                    );
                    break;
                  case "math":
                    r = m.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      s
                    );
                    break;
                  case "script":
                    r = m.createElement("div"), r.innerHTML = "<script><\/script>", r = r.removeChild(
                      r.firstChild
                    );
                    break;
                  case "select":
                    r = typeof c.is == "string" ? m.createElement("select", {
                      is: c.is
                    }) : m.createElement("select"), c.multiple ? r.multiple = !0 : c.size && (r.size = c.size);
                    break;
                  default:
                    r = typeof c.is == "string" ? m.createElement(s, { is: c.is }) : m.createElement(s);
                }
            }
            r[vl] = n, r[Zt] = c;
            e: for (m = n.child; m !== null; ) {
              if (m.tag === 5 || m.tag === 6)
                r.appendChild(m.stateNode);
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
            n.stateNode = r;
            e: switch ($l(r, s, c), s) {
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
        return wt(n), rh(
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
            if (l = n.stateNode, u = n.memoizedProps, c = null, s = gl, s !== null)
              switch (s.tag) {
                case 27:
                case 5:
                  c = s.memoizedProps;
              }
            l[vl] = n, l = !!(l.nodeValue === u || c !== null && c.suppressHydrationWarning === !0 || gp(l.nodeValue, u)), l || va(n, !0);
          } else
            l = Rr(l).createTextNode(
              c
            ), l[vl] = n, n.stateNode = l;
        }
        return wt(n), null;
      case 31:
        if (u = n.memoizedState, l === null || l.memoizedState !== null) {
          if (c = Ou(n), u !== null) {
            if (l === null) {
              if (!c) throw Error(B(318));
              if (l = n.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(B(557));
              l[vl] = n;
            } else
              Ln(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;
            wt(n), l = !1;
          } else
            u = Hd(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = u), l = !0;
          if (!l)
            return n.flags & 256 ? (ia(n), n) : (ia(n), null);
          if ((n.flags & 128) !== 0)
            throw Error(B(558));
        }
        return wt(n), null;
      case 13:
        if (c = n.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
          if (s = Ou(n), c !== null && c.dehydrated !== null) {
            if (l === null) {
              if (!s) throw Error(B(318));
              if (s = n.memoizedState, s = s !== null ? s.dehydrated : null, !s) throw Error(B(317));
              s[vl] = n;
            } else
              Ln(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;
            wt(n), s = !1;
          } else
            s = Hd(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = s), s = !0;
          if (!s)
            return n.flags & 256 ? (ia(n), n) : (ia(n), null);
        }
        return ia(n), (n.flags & 128) !== 0 ? (n.lanes = u, n) : (u = c !== null, l = l !== null && l.memoizedState !== null, u && (c = n.child, s = null, c.alternate !== null && c.alternate.memoizedState !== null && c.alternate.memoizedState.cachePool !== null && (s = c.alternate.memoizedState.cachePool.pool), r = null, c.memoizedState !== null && c.memoizedState.cachePool !== null && (r = c.memoizedState.cachePool.pool), r !== s && (c.flags |= 2048)), u !== l && u && (n.child.flags |= 8192), cr(n, n.updateQueue), wt(n), null);
      case 4:
        return Tt(), l === null && yp(n.stateNode.containerInfo), wt(n), null;
      case 10:
        return aa(n.type), wt(n), null;
      case 19:
        if (A(el), c = n.memoizedState, c === null) return wt(n), null;
        if (s = (n.flags & 128) !== 0, r = c.rendering, r === null)
          if (s) Kl(c, !1);
          else {
            if (Wt !== 0 || l !== null && (l.flags & 128) !== 0)
              for (l = n.child; l !== null; ) {
                if (r = $c(l), r !== null) {
                  for (n.flags |= 128, Kl(c, !1), l = r.updateQueue, n.updateQueue = l, cr(n, l), n.subtreeFlags = 0, l = u, u = n.child; u !== null; )
                    F0(u, l), u = u.sibling;
                  return K(
                    el,
                    el.current & 1 | 2
                  ), it && Eu(n, c.treeForkCount), n.child;
                }
                l = l.sibling;
              }
            c.tail !== null && El() > pr && (n.flags |= 128, s = !0, Kl(c, !1), n.lanes = 4194304);
          }
        else {
          if (!s)
            if (l = $c(r), l !== null) {
              if (n.flags |= 128, s = !0, l = l.updateQueue, n.updateQueue = l, cr(n, l), Kl(c, !0), c.tail === null && c.tailMode === "hidden" && !r.alternate && !it)
                return wt(n), null;
            } else
              2 * El() - c.renderingStartTime > pr && u !== 536870912 && (n.flags |= 128, s = !0, Kl(c, !1), n.lanes = 4194304);
          c.isBackwards ? (r.sibling = n.child, n.child = r) : (l = c.last, l !== null ? l.sibling = r : n.child = r, c.last = r);
        }
        return c.tail !== null ? (l = c.tail, c.rendering = l, c.tail = l.sibling, c.renderingStartTime = El(), l.sibling = null, u = el.current, K(
          el,
          s ? u & 1 | 2 : u & 1
        ), it && Eu(n, c.treeForkCount), l) : (wt(n), null);
      case 22:
      case 23:
        return ia(n), Xs(), c = n.memoizedState !== null, l !== null ? l.memoizedState !== null !== c && (n.flags |= 8192) : c && (n.flags |= 8192), c ? (u & 536870912) !== 0 && (n.flags & 128) === 0 && (wt(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : wt(n), u = n.updateQueue, u !== null && cr(n, u.retryQueue), u = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), c = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (c = n.memoizedState.cachePool.pool), c !== u && (n.flags |= 2048), l !== null && A(Ya), null;
      case 24:
        return u = null, l !== null && (u = l.memoizedState.cache), n.memoizedState.cache !== u && (n.flags |= 2048), aa(il), wt(n), null;
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
        return aa(il), Tt(), l = n.flags, (l & 65536) !== 0 && (l & 128) === 0 ? (n.flags = l & -65537 | 128, n) : null;
      case 26:
      case 27:
      case 5:
        return vn(n), null;
      case 31:
        if (n.memoizedState !== null) {
          if (ia(n), n.alternate === null)
            throw Error(B(340));
          Ln();
        }
        return l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 13:
        if (ia(n), l = n.memoizedState, l !== null && l.dehydrated !== null) {
          if (n.alternate === null)
            throw Error(B(340));
          Ln();
        }
        return l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 19:
        return A(el), null;
      case 4:
        return Tt(), null;
      case 10:
        return aa(n.type), null;
      case 22:
      case 23:
        return ia(n), Xs(), l !== null && A(Ya), l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 24:
        return aa(il), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Zy(l, n) {
    switch ($o(n), n.tag) {
      case 3:
        aa(il), Tt();
        break;
      case 26:
      case 27:
      case 5:
        vn(n);
        break;
      case 4:
        Tt();
        break;
      case 31:
        n.memoizedState !== null && ia(n);
        break;
      case 13:
        ia(n);
        break;
      case 19:
        A(el);
        break;
      case 10:
        aa(n.type);
        break;
      case 22:
      case 23:
        ia(n), Xs(), l !== null && A(Ya);
        break;
      case 24:
        aa(il);
    }
  }
  function or(l, n) {
    try {
      var u = n.updateQueue, c = u !== null ? u.lastEffect : null;
      if (c !== null) {
        var s = c.next;
        u = s;
        do {
          if ((u.tag & l) === l) {
            c = void 0;
            var r = u.create, m = u.inst;
            c = r(), m.destroy = c;
          }
          u = u.next;
        } while (u !== s);
      }
    } catch (g) {
      Ct(n, n.return, g);
    }
  }
  function Sa(l, n, u) {
    try {
      var c = n.updateQueue, s = c !== null ? c.lastEffect : null;
      if (s !== null) {
        var r = s.next;
        c = r;
        do {
          if ((c.tag & l) === l) {
            var m = c.inst, g = m.destroy;
            if (g !== void 0) {
              m.destroy = void 0, s = n;
              var T = u, N = g;
              try {
                N();
              } catch (V) {
                Ct(
                  s,
                  T,
                  V
                );
              }
            }
          }
          c = c.next;
        } while (c !== r);
      }
    } catch (V) {
      Ct(n, n.return, V);
    }
  }
  function ao(l) {
    var n = l.updateQueue;
    if (n !== null) {
      var u = l.stateNode;
      try {
        Xd(n, u);
      } catch (c) {
        Ct(l, l.return, c);
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
      Ct(l, n, c);
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
    } catch (s) {
      Ct(l, n, s);
    }
  }
  function ba(l, n) {
    var u = l.ref, c = l.refCleanup;
    if (u !== null)
      if (typeof c == "function")
        try {
          c();
        } catch (s) {
          Ct(l, n, s);
        } finally {
          l.refCleanup = null, l = l.alternate, l != null && (l.refCleanup = null);
        }
      else if (typeof u == "function")
        try {
          u(null);
        } catch (s) {
          Ct(l, n, s);
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
    } catch (s) {
      Ct(l, l.return, s);
    }
  }
  function hh(l, n, u) {
    try {
      var c = l.stateNode;
      lS(c, l.type, u, n), c[Zt] = n;
    } catch (s) {
      Ct(l, l.return, s);
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
      l = l.stateNode, n ? (u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u).insertBefore(l, n) : (n = u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u, n.appendChild(l), u = u._reactRootContainer, u != null || n.onclick !== null || (n.onclick = Xl));
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
      for (var c = l.type, s = n.attributes; s.length; )
        n.removeAttributeNode(s[0]);
      $l(n, c, u), n[vl] = l, n[Zt] = u;
    } catch (r) {
      Ct(l, l.return, r);
    }
  }
  var ju = !1, Sl = !1, $y = !1, ky = typeof WeakSet == "function" ? WeakSet : Set, Al = null;
  function Pg(l, n) {
    if (l = l.containerInfo, Dr = Ci, l = qc(l), ri(l)) {
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
            var s = c.anchorOffset, r = c.focusNode;
            c = c.focusOffset;
            try {
              u.nodeType, r.nodeType;
            } catch {
              u = null;
              break e;
            }
            var m = 0, g = -1, T = -1, N = 0, V = 0, W = l, x = null;
            t: for (; ; ) {
              for (var G; W !== u || s !== 0 && W.nodeType !== 3 || (g = m + s), W !== r || c !== 0 && W.nodeType !== 3 || (T = m + c), W.nodeType === 3 && (m += W.nodeValue.length), (G = W.firstChild) !== null; )
                x = W, W = G;
              for (; ; ) {
                if (W === l) break t;
                if (x === u && ++N === s && (g = m), x === r && ++V === c && (T = m), (G = W.nextSibling) !== null) break;
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
          switch (n = Al, r = n.alternate, l = n.flags, n.tag) {
            case 0:
              if ((l & 4) !== 0 && (l = n.updateQueue, l = l !== null ? l.events : null, l !== null))
                for (u = 0; u < l.length; u++)
                  s = l[u], s.ref.impl = s.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((l & 1024) !== 0 && r !== null) {
                l = void 0, u = n, s = r.memoizedProps, r = r.memoizedState, c = u.stateNode;
                try {
                  var he = to(
                    u.type,
                    s
                  );
                  l = c.getSnapshotBeforeUpdate(
                    he,
                    r
                  ), c.__reactInternalSnapshotBeforeUpdate = l;
                } catch (_e) {
                  Ct(
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
        qu(l, u), c & 4 && or(5, u);
        break;
      case 1:
        if (qu(l, u), c & 4)
          if (l = u.stateNode, n === null)
            try {
              l.componentDidMount();
            } catch (m) {
              Ct(u, u.return, m);
            }
          else {
            var s = to(
              u.type,
              n.memoizedProps
            );
            n = n.memoizedState;
            try {
              l.componentDidUpdate(
                s,
                n,
                l.__reactInternalSnapshotBeforeUpdate
              );
            } catch (m) {
              Ct(
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
            Ct(u, u.return, m);
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
        qu(l, u), c & 4 && sv(l, u), c & 64 && (l = u.memoizedState, l !== null && (l = l.dehydrated, l !== null && (u = tS.bind(
          null,
          u
        ), zf(l, u))));
        break;
      case 22:
        if (c = u.memoizedState !== null || ju, !c) {
          n = n !== null && n.memoizedState !== null || Sl, s = ju;
          var r = Sl;
          ju = c, (Sl = n) && !r ? Ai(
            l,
            u,
            (u.subtreeFlags & 8772) !== 0
          ) : qu(l, u), ju = s, Sl = r;
        }
        break;
      case 30:
        break;
      default:
        qu(l, u);
    }
  }
  function fr(l) {
    var n = l.alternate;
    n !== null && (l.alternate = null, fr(n)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (n = l.stateNode, n !== null && Qi(n)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null;
  }
  var Jt = null, ca = !1;
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
        Sl || ba(u, n), Yu(
          l,
          n,
          u
        ), u.memoizedState ? u.memoizedState.count-- : u.stateNode && (u = u.stateNode, u.parentNode.removeChild(u));
        break;
      case 27:
        Sl || ba(u, n);
        var c = Jt, s = ca;
        Lu(u.type) && (Jt = u.stateNode, ca = !1), Yu(
          l,
          n,
          u
        ), Di(u.stateNode), Jt = c, ca = s;
        break;
      case 5:
        Sl || ba(u, n);
      case 6:
        if (c = Jt, s = ca, Jt = null, Yu(
          l,
          n,
          u
        ), Jt = c, ca = s, Jt !== null)
          if (ca)
            try {
              (Jt.nodeType === 9 ? Jt.body : Jt.nodeName === "HTML" ? Jt.ownerDocument.body : Jt).removeChild(u.stateNode);
            } catch (r) {
              Ct(
                u,
                n,
                r
              );
            }
          else
            try {
              Jt.removeChild(u.stateNode);
            } catch (r) {
              Ct(
                u,
                n,
                r
              );
            }
        break;
      case 18:
        Jt !== null && (ca ? (l = Jt, Mr(
          l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l,
          u.stateNode
        ), Cf(l)) : Mr(Jt, u.stateNode));
        break;
      case 4:
        c = Jt, s = ca, Jt = u.stateNode.containerInfo, ca = !0, Yu(
          l,
          n,
          u
        ), Jt = c, ca = s;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Sa(2, u, n), Sl || Sa(4, u, n), Yu(
          l,
          n,
          u
        );
        break;
      case 1:
        Sl || (ba(u, n), c = u.stateNode, typeof c.componentWillUnmount == "function" && dh(
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
        Ct(n, n.return, u);
      }
    }
  }
  function sv(l, n) {
    if (n.memoizedState === null && (l = n.alternate, l !== null && (l = l.memoizedState, l !== null && (l = l.dehydrated, l !== null))))
      try {
        Cf(l);
      } catch (u) {
        Ct(n, n.return, u);
      }
  }
  function rv(l) {
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
    var u = rv(l);
    n.forEach(function(c) {
      if (!u.has(c)) {
        u.add(c);
        var s = on.bind(null, l, c);
        c.then(s, s);
      }
    });
  }
  function Ea(l, n) {
    var u = n.deletions;
    if (u !== null)
      for (var c = 0; c < u.length; c++) {
        var s = u[c], r = l, m = n, g = m;
        e: for (; g !== null; ) {
          switch (g.tag) {
            case 27:
              if (Lu(g.type)) {
                Jt = g.stateNode, ca = !1;
                break e;
              }
              break;
            case 5:
              Jt = g.stateNode, ca = !1;
              break e;
            case 3:
            case 4:
              Jt = g.stateNode.containerInfo, ca = !0;
              break e;
          }
          g = g.return;
        }
        if (Jt === null) throw Error(B(160));
        Wy(r, m, s), Jt = null, ca = !1, r = s.alternate, r !== null && (r.return = null), s.return = null;
      }
    if (n.subtreeFlags & 13886)
      for (n = n.child; n !== null; )
        vt(n, l), n = n.sibling;
  }
  var Dn = null;
  function vt(l, n) {
    var u = l.alternate, c = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Ea(n, l), oa(l), c & 4 && (Sa(3, l, l.return), or(3, l), Sa(5, l, l.return));
        break;
      case 1:
        Ea(n, l), oa(l), c & 512 && (Sl || u === null || ba(u, u.return)), c & 64 && ju && (l = l.updateQueue, l !== null && (c = l.callbacks, c !== null && (u = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = u === null ? c : u.concat(c))));
        break;
      case 26:
        var s = Dn;
        if (Ea(n, l), oa(l), c & 512 && (Sl || u === null || ba(u, u.return)), c & 4) {
          var r = u !== null ? u.memoizedState : null;
          if (c = l.memoizedState, u === null)
            if (c === null)
              if (l.stateNode === null) {
                e: {
                  c = l.type, u = l.memoizedProps, s = s.ownerDocument || s;
                  t: switch (c) {
                    case "title":
                      r = s.getElementsByTagName("title")[0], (!r || r[Yo] || r[vl] || r.namespaceURI === "http://www.w3.org/2000/svg" || r.hasAttribute("itemprop")) && (r = s.createElement(c), s.head.insertBefore(
                        r,
                        s.querySelector("head > title")
                      )), $l(r, c, u), r[vl] = l, Tl(r), c = r;
                      break e;
                    case "link":
                      var m = Qh(
                        "link",
                        "href",
                        s
                      ).get(c + (u.href || ""));
                      if (m) {
                        for (var g = 0; g < m.length; g++)
                          if (r = m[g], r.getAttribute("href") === (u.href == null || u.href === "" ? null : u.href) && r.getAttribute("rel") === (u.rel == null ? null : u.rel) && r.getAttribute("title") === (u.title == null ? null : u.title) && r.getAttribute("crossorigin") === (u.crossOrigin == null ? null : u.crossOrigin)) {
                            m.splice(g, 1);
                            break t;
                          }
                      }
                      r = s.createElement(c), $l(r, c, u), s.head.appendChild(r);
                      break;
                    case "meta":
                      if (m = Qh(
                        "meta",
                        "content",
                        s
                      ).get(c + (u.content || ""))) {
                        for (g = 0; g < m.length; g++)
                          if (r = m[g], r.getAttribute("content") === (u.content == null ? null : "" + u.content) && r.getAttribute("name") === (u.name == null ? null : u.name) && r.getAttribute("property") === (u.property == null ? null : u.property) && r.getAttribute("http-equiv") === (u.httpEquiv == null ? null : u.httpEquiv) && r.getAttribute("charset") === (u.charSet == null ? null : u.charSet)) {
                            m.splice(g, 1);
                            break t;
                          }
                      }
                      r = s.createElement(c), $l(r, c, u), s.head.appendChild(r);
                      break;
                    default:
                      throw Error(B(468, c));
                  }
                  r[vl] = l, Tl(r), c = r;
                }
                l.stateNode = c;
              } else
                Mp(
                  s,
                  l.type,
                  l.stateNode
                );
            else
              l.stateNode = Rp(
                s,
                c,
                l.memoizedProps
              );
          else
            r !== c ? (r === null ? u.stateNode !== null && (u = u.stateNode, u.parentNode.removeChild(u)) : r.count--, c === null ? Mp(
              s,
              l.type,
              l.stateNode
            ) : Rp(
              s,
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
        Ea(n, l), oa(l), c & 512 && (Sl || u === null || ba(u, u.return)), u !== null && c & 4 && hh(
          l,
          l.memoizedProps,
          u.memoizedProps
        );
        break;
      case 5:
        if (Ea(n, l), oa(l), c & 512 && (Sl || u === null || ba(u, u.return)), l.flags & 32) {
          s = l.stateNode;
          try {
            Cc(s, "");
          } catch (he) {
            Ct(l, l.return, he);
          }
        }
        c & 4 && l.stateNode != null && (s = l.memoizedProps, hh(
          l,
          s,
          u !== null ? u.memoizedProps : s
        )), c & 1024 && ($y = !0);
        break;
      case 6:
        if (Ea(n, l), oa(l), c & 4) {
          if (l.stateNode === null)
            throw Error(B(162));
          c = l.memoizedProps, u = l.stateNode;
          try {
            u.nodeValue = c;
          } catch (he) {
            Ct(l, l.return, he);
          }
        }
        break;
      case 3:
        if (Nr = null, s = Dn, Dn = mo(n.containerInfo), Ea(n, l), Dn = s, oa(l), c & 4 && u !== null && u.memoizedState.isDehydrated)
          try {
            Cf(n.containerInfo);
          } catch (he) {
            Ct(l, l.return, he);
          }
        $y && ($y = !1, dv(l));
        break;
      case 4:
        c = Dn, Dn = mo(
          l.stateNode.containerInfo
        ), Ea(n, l), oa(l), Dn = c;
        break;
      case 12:
        Ea(n, l), oa(l);
        break;
      case 31:
        Ea(n, l), oa(l), c & 4 && (c = l.updateQueue, c !== null && (l.updateQueue = null, fc(l, c)));
        break;
      case 13:
        Ea(n, l), oa(l), l.child.flags & 8192 && l.memoizedState !== null != (u !== null && u.memoizedState !== null) && (yr = El()), c & 4 && (c = l.updateQueue, c !== null && (l.updateQueue = null, fc(l, c)));
        break;
      case 22:
        s = l.memoizedState !== null;
        var T = u !== null && u.memoizedState !== null, N = ju, V = Sl;
        if (ju = N || s, Sl = V || T, Ea(n, l), Sl = V, ju = N, oa(l), c & 8192)
          e: for (n = l.stateNode, n._visibility = s ? n._visibility & -2 : n._visibility | 1, s && (u === null || T || ju || Sl || io(l)), u = null, n = l; ; ) {
            if (n.tag === 5 || n.tag === 26) {
              if (u === null) {
                T = u = n;
                try {
                  if (r = T.stateNode, s)
                    m = r.style, typeof m.setProperty == "function" ? m.setProperty("display", "none", "important") : m.display = "none";
                  else {
                    g = T.stateNode;
                    var W = T.memoizedProps.style, x = W != null && W.hasOwnProperty("display") ? W.display : null;
                    g.style.display = x == null || typeof x == "boolean" ? "" : ("" + x).trim();
                  }
                } catch (he) {
                  Ct(T, T.return, he);
                }
              }
            } else if (n.tag === 6) {
              if (u === null) {
                T = n;
                try {
                  T.stateNode.nodeValue = s ? "" : T.memoizedProps;
                } catch (he) {
                  Ct(T, T.return, he);
                }
              }
            } else if (n.tag === 18) {
              if (u === null) {
                T = n;
                try {
                  var G = T.stateNode;
                  s ? Tp(G, !0) : Tp(T.stateNode, !1);
                } catch (he) {
                  Ct(T, T.return, he);
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
        Ea(n, l), oa(l), c & 4 && (c = l.updateQueue, c !== null && (l.updateQueue = null, fc(l, c)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Ea(n, l), oa(l);
    }
  }
  function oa(l) {
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
            var s = u.stateNode, r = mh(l);
            no(l, r, s);
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
      } catch (V) {
        Ct(l, l.return, V);
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
          Sa(4, n, n.return), io(n);
          break;
        case 1:
          ba(n, n.return);
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
          ba(n, n.return), io(n);
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
      var c = n.alternate, s = l, r = n, m = r.flags;
      switch (r.tag) {
        case 0:
        case 11:
        case 15:
          Ai(
            s,
            r,
            u
          ), or(4, r);
          break;
        case 1:
          if (Ai(
            s,
            r,
            u
          ), c = r, s = c.stateNode, typeof s.componentDidMount == "function")
            try {
              s.componentDidMount();
            } catch (N) {
              Ct(c, c.return, N);
            }
          if (c = r, s = c.updateQueue, s !== null) {
            var g = c.stateNode;
            try {
              var T = s.shared.hiddenCallbacks;
              if (T !== null)
                for (s.shared.hiddenCallbacks = null, s = 0; s < T.length; s++)
                  Kc(T[s], g);
            } catch (N) {
              Ct(c, c.return, N);
            }
          }
          u && m & 64 && ao(r), $n(r, r.return);
          break;
        case 27:
          yh(r);
        case 26:
        case 5:
          Ai(
            s,
            r,
            u
          ), u && c === null && m & 4 && Jy(r), $n(r, r.return);
          break;
        case 12:
          Ai(
            s,
            r,
            u
          );
          break;
        case 31:
          Ai(
            s,
            r,
            u
          ), u && m & 4 && Fy(s, r);
          break;
        case 13:
          Ai(
            s,
            r,
            u
          ), u && m & 4 && sv(s, r);
          break;
        case 22:
          r.memoizedState === null && Ai(
            s,
            r,
            u
          ), $n(r, r.return);
          break;
        case 30:
          break;
        default:
          Ai(
            s,
            r,
            u
          );
      }
      n = n.sibling;
    }
  }
  function sr(l, n) {
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
    var s = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        Rn(
          l,
          n,
          u,
          c
        ), s & 2048 && or(9, n);
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
        ), s & 2048 && (l = null, n.alternate !== null && (l = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== l && (n.refCount++, l != null && Vc(l)));
        break;
      case 12:
        if (s & 2048) {
          Rn(
            l,
            n,
            u,
            c
          ), l = n.stateNode;
          try {
            var r = n.memoizedProps, m = r.id, g = r.onPostCommit;
            typeof g == "function" && g(
              m,
              n.alternate === null ? "mount" : "update",
              l.passiveEffectDuration,
              -0
            );
          } catch (T) {
            Ct(n, n.return, T);
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
        r = n.stateNode, m = n.alternate, n.memoizedState !== null ? r._visibility & 2 ? Rn(
          l,
          n,
          u,
          c
        ) : rr(l, n) : r._visibility & 2 ? Rn(
          l,
          n,
          u,
          c
        ) : (r._visibility |= 2, Gu(
          l,
          n,
          u,
          c,
          (n.subtreeFlags & 10256) !== 0 || !1
        )), s & 2048 && sr(m, n);
        break;
      case 24:
        Rn(
          l,
          n,
          u,
          c
        ), s & 2048 && ph(n.alternate, n);
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
  function Gu(l, n, u, c, s) {
    for (s = s && ((n.subtreeFlags & 10256) !== 0 || !1), n = n.child; n !== null; ) {
      var r = l, m = n, g = u, T = c, N = m.flags;
      switch (m.tag) {
        case 0:
        case 11:
        case 15:
          Gu(
            r,
            m,
            g,
            T,
            s
          ), or(8, m);
          break;
        case 23:
          break;
        case 22:
          var V = m.stateNode;
          m.memoizedState !== null ? V._visibility & 2 ? Gu(
            r,
            m,
            g,
            T,
            s
          ) : rr(
            r,
            m
          ) : (V._visibility |= 2, Gu(
            r,
            m,
            g,
            T,
            s
          )), s && N & 2048 && sr(
            m.alternate,
            m
          );
          break;
        case 24:
          Gu(
            r,
            m,
            g,
            T,
            s
          ), s && N & 2048 && ph(m.alternate, m);
          break;
        default:
          Gu(
            r,
            m,
            g,
            T,
            s
          );
      }
      n = n.sibling;
    }
  }
  function rr(l, n) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; ) {
        var u = l, c = n, s = c.flags;
        switch (c.tag) {
          case 22:
            rr(u, c), s & 2048 && sr(
              c.alternate,
              c
            );
            break;
          case 24:
            rr(u, c), s & 2048 && ph(c.alternate, c);
            break;
          default:
            rr(u, c);
        }
        n = n.sibling;
      }
  }
  var dr = 8192;
  function Ta(l, n, u) {
    if (l.subtreeFlags & dr)
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
        Ta(
          l,
          n,
          u
        ), l.flags & dr && l.memoizedState !== null && fn(
          u,
          Dn,
          l.memoizedState,
          l.memoizedProps
        );
        break;
      case 5:
        Ta(
          l,
          n,
          u
        );
        break;
      case 3:
      case 4:
        var c = Dn;
        Dn = mo(l.stateNode.containerInfo), Ta(
          l,
          n,
          u
        ), Dn = c;
        break;
      case 22:
        l.memoizedState === null && (c = l.alternate, c !== null && c.memoizedState !== null ? (c = dr, dr = 16777216, Ta(
          l,
          n,
          u
        ), dr = c) : Ta(
          l,
          n,
          u
        ));
        break;
      default:
        Ta(
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
        co(l), l.flags & 2048 && Sa(9, l, l.return);
        break;
      case 3:
        co(l);
        break;
      case 12:
        co(l);
        break;
      case 22:
        var n = l.stateNode;
        l.memoizedState !== null && n._visibility & 2 && (l.return === null || l.return.tag !== 13) ? (n._visibility &= -3, hr(l)) : co(l);
        break;
      default:
        co(l);
    }
  }
  function hr(l) {
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
          Sa(8, n, n.return), hr(n);
          break;
        case 22:
          u = n.stateNode, u._visibility & 2 && (u._visibility &= -3, hr(n));
          break;
        default:
          hr(n);
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
          Sa(8, u, n);
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
          var s = c.sibling, r = c.return;
          if (fr(c), c === u) {
            Al = null;
            break e;
          }
          if (s !== null) {
            s.return = r, Al = s;
            break e;
          }
          Al = r;
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
  }, mv = typeof WeakMap == "function" ? WeakMap : Map, mt = 0, Nt = null, tt = null, ct = 0, gt = 0, Xa = null, Ge = !1, sc = !1, mr = !1, wu = 0, Wt = 0, Mn = 0, Xu = 0, lp = 0, Qa = 0, rc = 0, ol = null, La = null, Cn = !1, yr = 0, Oi = 0, pr = 1 / 0, Ot = null, Qu = null, st = 0, dc = null, oo = null, kn = 0, vh = 0, Va = null, ap = null, fo = 0, gh = null;
  function Aa() {
    return (mt & 2) !== 0 && ct !== 0 ? ct & -ct : X.T !== null ? so() : C0();
  }
  function np() {
    if (Qa === 0)
      if ((ct & 536870912) === 0 || it) {
        var l = I;
        I <<= 1, (I & 3932160) === 0 && (I = 262144), Qa = l;
      } else Qa = 536870912;
    return l = ua.current, l !== null && (l.flags |= 32), Qa;
  }
  function Za(l, n, u) {
    (l === Nt && (gt === 2 || gt === 9) || l.cancelPendingCommit !== null) && (yf(l, 0), zi(
      l,
      ct,
      Qa,
      !1
    )), Da(l, u), ((mt & 2) === 0 || l !== Nt) && (l === Nt && ((mt & 2) === 0 && (Xu |= u), Wt === 4 && zi(
      l,
      ct,
      Qa,
      !1
    )), Wn(l));
  }
  function up(l, n, u) {
    if ((mt & 6) !== 0) throw Error(B(327));
    var c = !u && (n & 127) === 0 && (n & l.expiredLanes) === 0 || ye(l, n), s = c ? eS(l, n) : ip(l, n, !0), r = c;
    do {
      if (s === 0) {
        sc && !c && zi(l, n, 0, !1);
        break;
      } else {
        if (u = l.current.alternate, r && !Sh(u)) {
          s = ip(l, n, !1), r = !1;
          continue;
        }
        if (s === 2) {
          if (r = n, l.errorRecoveryDisabledLanes & r)
            var m = 0;
          else
            m = l.pendingLanes & -536870913, m = m !== 0 ? m : m & 536870912 ? 536870912 : 0;
          if (m !== 0) {
            n = m;
            e: {
              var g = l;
              s = ol;
              var T = g.current.memoizedState.isDehydrated;
              if (T && (yf(g, m).flags |= 256), m = ip(
                g,
                m,
                !1
              ), m !== 2) {
                if (mr && !T) {
                  g.errorRecoveryDisabledLanes |= r, Xu |= r, s = 4;
                  break e;
                }
                r = La, La = s, r !== null && (La === null ? La = r : La.push.apply(
                  La,
                  r
                ));
              }
              s = m;
            }
            if (r = !1, s !== 2) continue;
          }
        }
        if (s === 1) {
          yf(l, 0), zi(l, n, 0, !0);
          break;
        }
        e: {
          switch (c = l, r = s, r) {
            case 0:
            case 1:
              throw Error(B(345));
            case 4:
              if ((n & 4194048) !== n) break;
            case 6:
              zi(
                c,
                n,
                Qa,
                !Ge
              );
              break e;
            case 2:
              La = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(B(329));
          }
          if ((n & 62914560) === n && (s = yr + 300 - El(), 10 < s)) {
            if (zi(
              c,
              n,
              Qa,
              !Ge
            ), He(c, 0, !0) !== 0) break e;
            kn = n, c.timeoutHandle = Bv(
              yv.bind(
                null,
                c,
                u,
                La,
                Ot,
                Cn,
                n,
                Qa,
                Xu,
                rc,
                Ge,
                r,
                "Throttled",
                -0,
                0
              ),
              s
            );
            break e;
          }
          yv(
            c,
            u,
            La,
            Ot,
            Cn,
            n,
            Qa,
            Xu,
            rc,
            Ge,
            r,
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
  function yv(l, n, u, c, s, r, m, g, T, N, V, W, x, G) {
    if (l.timeoutHandle = -1, W = n.subtreeFlags, W & 8192 || (W & 16785408) === 16785408) {
      W = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Xl
      }, mf(
        n,
        r,
        W
      );
      var he = (r & 62914560) === r ? yr - El() : (r & 4194048) === r ? Oi - El() : 0;
      if (he = In(
        W,
        he
      ), he !== null) {
        kn = r, l.cancelPendingCommit = he(
          Ev.bind(
            null,
            l,
            n,
            r,
            u,
            c,
            s,
            m,
            g,
            T,
            V,
            W,
            null,
            x,
            G
          )
        ), zi(l, r, m, !N);
        return;
      }
    }
    Ev(
      l,
      n,
      r,
      u,
      c,
      s,
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
          var s = u[c], r = s.getSnapshot;
          s = s.value;
          try {
            if (!Ua(r(), s)) return !1;
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
    for (var s = n; 0 < s; ) {
      var r = 31 - Rl(s), m = 1 << r;
      c[r] = -1, s &= ~m;
    }
    u !== 0 && Ac(l, u, n);
  }
  function vr() {
    return (mt & 6) === 0 ? (Er(0), !1) : !0;
  }
  function gr() {
    if (tt !== null) {
      if (gt === 0)
        var l = tt.return;
      else
        l = tt, Vn = Ii = null, Wc(l), nc = null, Zc = 0, l = tt;
      for (; l !== null; )
        Zy(l.alternate, l), l = l.return;
      tt = null;
    }
  }
  function yf(l, n) {
    var u = l.timeoutHandle;
    u !== -1 && (l.timeoutHandle = -1, jh(u)), u = l.cancelPendingCommit, u !== null && (l.cancelPendingCommit = null, u()), kn = 0, gr(), Nt = l, tt = u = ln(l.current, null), ct = n, gt = 0, Xa = null, Ge = !1, sc = ye(l, n), mr = !1, rc = Qa = lp = Xu = Mn = Wt = 0, La = ol = null, Cn = !1, (n & 8) !== 0 && (n |= n & 32);
    var c = l.entangledLanes;
    if (c !== 0)
      for (l = l.entanglements, c &= n; 0 < c; ) {
        var s = 31 - Rl(c), r = 1 << s;
        n |= l[s], c &= ~r;
      }
    return wu = n, en(), u;
  }
  function pf(l, n) {
    Xe = null, X.H = ff, n === Zn || n === tc ? (n = fy(), gt = 3) : n === xs ? (n = fy(), gt = 4) : gt = n === Yy ? 8 : n !== null && typeof n == "object" && typeof n.then == "function" ? 6 : 1, Xa = n, tt === null && (Wt = 1, sf(
      l,
      an(n, l.current)
    ));
  }
  function vf() {
    var l = ua.current;
    return l === null ? !0 : (ct & 4194048) === ct ? Ga === null : (ct & 62914560) === ct || (ct & 536870912) !== 0 ? l === Ga : !1;
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
    Wt = 4, Ge || (ct & 4194048) !== ct && ua.current !== null || (sc = !0), (Mn & 134217727) === 0 && (Xu & 134217727) === 0 || Nt === null || zi(
      Nt,
      ct,
      Qa,
      !1
    );
  }
  function ip(l, n, u) {
    var c = mt;
    mt |= 2;
    var s = pv(), r = vv();
    (Nt !== l || ct !== n) && (Ot = null, yf(l, n)), n = !1;
    var m = Wt;
    e: do
      try {
        if (gt !== 0 && tt !== null) {
          var g = tt, T = Xa;
          switch (gt) {
            case 8:
              gr(), m = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              ua.current === null && (n = !0);
              var N = gt;
              if (gt = 0, Xa = null, gf(l, g, T, N), u && sc) {
                m = 0;
                break e;
              }
              break;
            default:
              N = gt, gt = 0, Xa = null, gf(l, g, T, N);
          }
        }
        gv(), m = Wt;
        break;
      } catch (V) {
        pf(l, V);
      }
    while (!0);
    return n && l.shellSuspendCounter++, Vn = Ii = null, mt = c, X.H = s, X.A = r, tt === null && (Nt = null, ct = 0, en()), m;
  }
  function gv() {
    for (; tt !== null; ) _i(tt);
  }
  function eS(l, n) {
    var u = mt;
    mt |= 2;
    var c = pv(), s = vv();
    Nt !== l || ct !== n ? (Ot = null, pr = El() + 500, yf(l, n)) : sc = ye(
      l,
      n
    );
    e: do
      try {
        if (gt !== 0 && tt !== null) {
          n = tt;
          var r = Xa;
          t: switch (gt) {
            case 1:
              gt = 0, Xa = null, gf(l, n, r, 1);
              break;
            case 2:
            case 9:
              if (js(r)) {
                gt = 0, Xa = null, bv(n);
                break;
              }
              n = function() {
                gt !== 2 && gt !== 9 || Nt !== l || (gt = 7), Wn(l);
              }, r.then(n, n);
              break e;
            case 3:
              gt = 7;
              break e;
            case 4:
              gt = 5;
              break e;
            case 7:
              js(r) ? (gt = 0, Xa = null, bv(n)) : (gt = 0, Xa = null, gf(l, n, r, 7));
              break;
            case 5:
              var m = null;
              switch (tt.tag) {
                case 26:
                  m = tt.memoizedState;
                case 5:
                case 27:
                  var g = tt;
                  if (m ? Lh(m) : g.stateNode.complete) {
                    gt = 0, Xa = null;
                    var T = g.sibling;
                    if (T !== null) tt = T;
                    else {
                      var N = g.return;
                      N !== null ? (tt = N, Sr(N)) : tt = null;
                    }
                    break t;
                  }
              }
              gt = 0, Xa = null, gf(l, n, r, 5);
              break;
            case 6:
              gt = 0, Xa = null, gf(l, n, r, 6);
              break;
            case 8:
              gr(), Wt = 6;
              break e;
            default:
              throw Error(B(462));
          }
        }
        Sv();
        break;
      } catch (V) {
        pf(l, V);
      }
    while (!0);
    return Vn = Ii = null, X.H = c, X.A = s, mt = u, tt !== null ? 0 : (Nt = null, ct = 0, en(), Wt);
  }
  function Sv() {
    for (; tt !== null && !Bo(); )
      _i(tt);
  }
  function _i(l) {
    var n = ir(l.alternate, l, wu);
    l.memoizedProps = l.pendingProps, n === null ? Sr(l) : tt = n;
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
          ct
        );
        break;
      case 11:
        n = Qy(
          u,
          n,
          n.pendingProps,
          n.type.render,
          n.ref,
          ct
        );
        break;
      case 5:
        Wc(n);
      default:
        Zy(u, n), n = tt = F0(n, wu), n = ir(u, n, wu);
    }
    l.memoizedProps = l.pendingProps, n === null ? Sr(l) : tt = n;
  }
  function gf(l, n, u, c) {
    Vn = Ii = null, Wc(n), nc = null, Zc = 0;
    var s = n.return;
    try {
      if (iv(
        l,
        s,
        n,
        u,
        ct
      )) {
        Wt = 1, sf(
          l,
          an(u, l.current)
        ), tt = null;
        return;
      }
    } catch (r) {
      if (s !== null) throw tt = s, r;
      Wt = 1, sf(
        l,
        an(u, l.current)
      ), tt = null;
      return;
    }
    n.flags & 32768 ? (it || c === 1 ? l = !0 : sc || (ct & 536870912) !== 0 ? l = !1 : (Ge = l = !0, (c === 2 || c === 9 || c === 3 || c === 6) && (c = ua.current, c !== null && c.tag === 13 && (c.flags |= 16384))), cp(n, l)) : Sr(n);
  }
  function Sr(l) {
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
        tt = u;
        return;
      }
      if (n = n.sibling, n !== null) {
        tt = n;
        return;
      }
      tt = n = l;
    } while (n !== null);
    Wt === 0 && (Wt = 5);
  }
  function cp(l, n) {
    do {
      var u = fv(l.alternate, l);
      if (u !== null) {
        u.flags &= 32767, tt = u;
        return;
      }
      if (u = l.return, u !== null && (u.flags |= 32768, u.subtreeFlags = 0, u.deletions = null), !n && (l = l.sibling, l !== null)) {
        tt = l;
        return;
      }
      tt = l = u;
    } while (l !== null);
    Wt = 6, tt = null;
  }
  function Ev(l, n, u, c, s, r, m, g, T) {
    l.cancelPendingCommit = null;
    do
      Eh();
    while (st !== 0);
    if ((mt & 6) !== 0) throw Error(B(327));
    if (n !== null) {
      if (n === l.current) throw Error(B(177));
      if (r = n.lanes | n.childLanes, r |= pa, fd(
        l,
        u,
        r,
        m,
        g,
        T
      ), l === Nt && (tt = Nt = null, ct = 0), oo = n, dc = l, kn = u, vh = r, Va = s, ap = c, (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? (l.callbackNode = null, l.callbackPriority = 0, Dv(Gi, function() {
        return Th(), null;
      })) : (l.callbackNode = null, l.callbackPriority = 0), c = (n.flags & 13878) !== 0, (n.subtreeFlags & 13878) !== 0 || c) {
        c = X.T, X.T = null, s = j.p, j.p = 2, m = mt, mt |= 4;
        try {
          Pg(l, n, u);
        } finally {
          mt = m, j.p = s, X.T = c;
        }
      }
      st = 1, Tv(), Av(), Ov();
    }
  }
  function Tv() {
    if (st === 1) {
      st = 0;
      var l = dc, n = oo, u = (n.flags & 13878) !== 0;
      if ((n.subtreeFlags & 13878) !== 0 || u) {
        u = X.T, X.T = null;
        var c = j.p;
        j.p = 2;
        var s = mt;
        mt |= 4;
        try {
          vt(n, l);
          var r = Bh, m = qc(l.containerInfo), g = r.focusedElem, T = r.selectionRange;
          if (m !== g && g && g.ownerDocument && ty(
            g.ownerDocument.documentElement,
            g
          )) {
            if (T !== null && ri(g)) {
              var N = T.start, V = T.end;
              if (V === void 0 && (V = N), "selectionStart" in g)
                g.selectionStart = N, g.selectionEnd = Math.min(
                  V,
                  g.value.length
                );
              else {
                var W = g.ownerDocument || document, x = W && W.defaultView || window;
                if (x.getSelection) {
                  var G = x.getSelection(), he = g.textContent.length, _e = Math.min(T.start, he), Bt = T.end === void 0 ? _e : Math.min(T.end, he);
                  !G.extend && _e > Bt && (m = Bt, Bt = _e, _e = m);
                  var C = ey(
                    g,
                    _e
                  ), D = ey(
                    g,
                    Bt
                  );
                  if (C && D && (G.rangeCount !== 1 || G.anchorNode !== C.node || G.anchorOffset !== C.offset || G.focusNode !== D.node || G.focusOffset !== D.offset)) {
                    var H = W.createRange();
                    H.setStart(C.node, C.offset), G.removeAllRanges(), _e > Bt ? (G.addRange(H), G.extend(D.node, D.offset)) : (H.setEnd(D.node, D.offset), G.addRange(H));
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
              var J = W[g];
              J.element.scrollLeft = J.left, J.element.scrollTop = J.top;
            }
          }
          Ci = !!Dr, Bh = Dr = null;
        } finally {
          mt = s, j.p = c, X.T = u;
        }
      }
      l.current = n, st = 2;
    }
  }
  function Av() {
    if (st === 2) {
      st = 0;
      var l = dc, n = oo, u = (n.flags & 8772) !== 0;
      if ((n.subtreeFlags & 8772) !== 0 || u) {
        u = X.T, X.T = null;
        var c = j.p;
        j.p = 2;
        var s = mt;
        mt |= 4;
        try {
          uo(l, n.alternate, n);
        } finally {
          mt = s, j.p = c, X.T = u;
        }
      }
      st = 3;
    }
  }
  function Ov() {
    if (st === 4 || st === 3) {
      st = 0, iu();
      var l = dc, n = oo, u = kn, c = ap;
      (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? st = 5 : (st = 0, oo = dc = null, zv(l, l.pendingLanes));
      var s = l.pendingLanes;
      if (s === 0 && (Qu = null), sd(u), n = n.stateNode, pl && typeof pl.onCommitFiberRoot == "function")
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
        n = X.T, s = j.p, j.p = 2, X.T = null;
        try {
          for (var r = l.onRecoverableError, m = 0; m < c.length; m++) {
            var g = c[m];
            r(g.value, {
              componentStack: g.stack
            });
          }
        } finally {
          X.T = n, j.p = s;
        }
      }
      (kn & 3) !== 0 && Eh(), Wn(l), s = l.pendingLanes, (u & 261930) !== 0 && (s & 42) !== 0 ? l === gh ? fo++ : (fo = 0, gh = l) : fo = 0, Er(0);
    }
  }
  function zv(l, n) {
    (l.pooledCacheLanes &= n) === 0 && (n = l.pooledCache, n != null && (l.pooledCache = null, Vc(n)));
  }
  function Eh() {
    return Tv(), Av(), Ov(), Th();
  }
  function Th() {
    if (st !== 5) return !1;
    var l = dc, n = vh;
    vh = 0;
    var u = sd(kn), c = X.T, s = j.p;
    try {
      j.p = 32 > u ? 32 : u, X.T = null, u = Va, Va = null;
      var r = dc, m = kn;
      if (st = 0, oo = dc = null, kn = 0, (mt & 6) !== 0) throw Error(B(331));
      var g = mt;
      if (mt |= 4, Py(r.current), Iy(
        r,
        r.current,
        m,
        u
      ), mt = g, Er(0, !1), pl && typeof pl.onPostCommitFiberRoot == "function")
        try {
          pl.onPostCommitFiberRoot(Gn, r);
        } catch {
        }
      return !0;
    } finally {
      j.p = s, X.T = c, zv(l, n);
    }
  }
  function _v(l, n, u) {
    n = an(u, n), n = rf(l.stateNode, n, 2), l = pi(l, n, 2), l !== null && (Da(l, 2), Wn(l));
  }
  function Ct(l, n, u) {
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
            ), Da(c, 2), Wn(c));
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
      var s = /* @__PURE__ */ new Set();
      c.set(n, s);
    } else
      s = c.get(n), s === void 0 && (s = /* @__PURE__ */ new Set(), c.set(n, s));
    s.has(u) || (mr = !0, s.add(u), l = op.bind(null, l, n, u), n.then(l, l));
  }
  function op(l, n, u) {
    var c = l.pingCache;
    c !== null && c.delete(n), l.pingedLanes |= l.suspendedLanes & u, l.warmLanes &= ~u, Nt === l && (ct & u) === u && (Wt === 4 || Wt === 3 && (ct & 62914560) === ct && 300 > El() - yr ? (mt & 2) === 0 && yf(l, 0) : lp |= u, rc === ct && (rc = 0)), Wn(l);
  }
  function Oh(l, n) {
    n === 0 && (n = qe()), l = la(l, n), l !== null && (Da(l, n), Wn(l));
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
        var c = l.stateNode, s = l.memoizedState;
        s !== null && (u = s.retryLane);
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
    return es(l, n);
  }
  var br = null, hc = null, zh = !1, _h = !1, fp = !1, mc = 0;
  function Wn(l) {
    l !== hc && l.next === null && (hc === null ? br = hc = l : hc = hc.next = l), _h = !0, zh || (zh = !0, Sf());
  }
  function Er(l, n) {
    if (!fp && _h) {
      fp = !0;
      do
        for (var u = !1, c = br; c !== null; ) {
          if (l !== 0) {
            var s = c.pendingLanes;
            if (s === 0) var r = 0;
            else {
              var m = c.suspendedLanes, g = c.pingedLanes;
              r = (1 << 31 - Rl(42 | l) + 1) - 1, r &= s & ~(m & ~g), r = r & 201326741 ? r & 201326741 | 1 : r ? r | 2 : 0;
            }
            r !== 0 && (u = !0, Or(c, r));
          } else
            r = ct, r = He(
              c,
              c === Nt ? r : 0,
              c.cancelPendingCommit !== null || c.timeoutHandle !== -1
            ), (r & 3) === 0 || ye(c, r) || (u = !0, Or(c, r));
          c = c.next;
        }
      while (u);
      fp = !1;
    }
  }
  function Tr() {
    Ar();
  }
  function Ar() {
    _h = zh = !1;
    var l = 0;
    mc !== 0 && Nv() && (l = mc);
    for (var n = El(), u = null, c = br; c !== null; ) {
      var s = c.next, r = sp(c, n);
      r === 0 ? (c.next = null, u === null ? br = s : u.next = s, s === null && (hc = u)) : (u = c, (l !== 0 || (r & 3) !== 0) && (_h = !0)), c = s;
    }
    st !== 0 && st !== 5 || Er(l), mc !== 0 && (mc = 0);
  }
  function sp(l, n) {
    for (var u = l.suspendedLanes, c = l.pingedLanes, s = l.expirationTimes, r = l.pendingLanes & -62914561; 0 < r; ) {
      var m = 31 - Rl(r), g = 1 << m, T = s[m];
      T === -1 ? ((g & u) === 0 || (g & c) !== 0) && (s[m] = ft(g, n)) : T <= n && (l.expiredLanes |= g), r &= ~g;
    }
    if (n = Nt, u = ct, u = He(
      l,
      l === n ? u : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), c = l.callbackNode, u === 0 || l === n && (gt === 2 || gt === 9) || l.cancelPendingCommit !== null)
      return c !== null && c !== null && me(c), l.callbackNode = null, l.callbackPriority = 0;
    if ((u & 3) === 0 || ye(l, u)) {
      if (n = u & -u, n === l.callbackPriority) return n;
      switch (c !== null && me(c), sd(u)) {
        case 2:
        case 8:
          u = xo;
          break;
        case 32:
          u = Gi;
          break;
        case 268435456:
          u = ls;
          break;
        default:
          u = Gi;
      }
      return c = rp.bind(null, l), u = es(u, c), l.callbackPriority = n, l.callbackNode = u, n;
    }
    return c !== null && c !== null && me(c), l.callbackPriority = 2, l.callbackNode = null, 2;
  }
  function rp(l, n) {
    if (st !== 0 && st !== 5)
      return l.callbackNode = null, l.callbackPriority = 0, null;
    var u = l.callbackNode;
    if (Eh() && l.callbackNode !== u)
      return null;
    var c = ct;
    return c = He(
      l,
      l === Nt ? c : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), c === 0 ? null : (up(l, c, n), sp(l, El()), l.callbackNode != null && l.callbackNode === u ? rp.bind(null, l) : null);
  }
  function Or(l, n) {
    if (Eh()) return null;
    up(l, n, !0);
  }
  function Sf() {
    Of(function() {
      (mt & 6) !== 0 ? es(
        ts,
        Tr
      ) : Ar();
    });
  }
  function so() {
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
  function bf(l, n, u, c, s) {
    if (n === "submit" && u && u.stateNode === s) {
      var r = dp(
        (s[Zt] || null).action
      ), m = c.submitter;
      m && (n = (n = m[Zt] || null) ? dp(n.formAction) : m.getAttribute("formAction"), n !== null && (r = n, m = null));
      var g = new ps(
        "action",
        "action",
        null,
        c,
        s
      );
      l.push({
        event: g,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (c.defaultPrevented) {
                if (mc !== 0) {
                  var T = m ? Rv(s, m) : new FormData(s);
                  uh(
                    u,
                    {
                      pending: !0,
                      data: T,
                      method: s.method,
                      action: r
                    },
                    null,
                    T
                  );
                }
              } else
                typeof r == "function" && (g.preventDefault(), T = m ? Rv(s, m) : new FormData(s), uh(
                  u,
                  {
                    pending: !0,
                    data: T,
                    method: s.method,
                    action: r
                  },
                  r,
                  T
                ));
            },
            currentTarget: s
          }
        ]
      });
    }
  }
  for (var ro = 0; ro < Xn.length; ro++) {
    var Dh = Xn[ro], Rh = Dh.toLowerCase(), hp = Dh[0].toUpperCase() + Dh.slice(1);
    Ha(
      Rh,
      "on" + hp
    );
  }
  Ha(qt, "onAnimationEnd"), Ha(As, "onAnimationIteration"), Ha(ay, "onAnimationStart"), Ha("dblclick", "onDoubleClick"), Ha("focusin", "onFocus"), Ha("focusout", "onBlur"), Ha(ny, "onTransitionRun"), Ha(Gc, "onTransitionStart"), Ha(Os, "onTransitionCancel"), Ha(wn, "onTransitionEnd"), Mc("onMouseEnter", ["mouseout", "mouseover"]), Mc("onMouseLeave", ["mouseout", "mouseover"]), Mc("onPointerEnter", ["pointerout", "pointerover"]), Mc("onPointerLeave", ["pointerout", "pointerover"]), Fa(
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
      var c = l[u], s = c.event;
      c = c.listeners;
      e: {
        var r = void 0;
        if (n)
          for (var m = c.length - 1; 0 <= m; m--) {
            var g = c[m], T = g.instance, N = g.currentTarget;
            if (g = g.listener, T !== r && s.isPropagationStopped())
              break e;
            r = g, s.currentTarget = N;
            try {
              r(s);
            } catch (V) {
              Fi(V);
            }
            s.currentTarget = null, r = T;
          }
        else
          for (m = 0; m < c.length; m++) {
            if (g = c[m], T = g.instance, N = g.currentTarget, g = g.listener, T !== r && s.isPropagationStopped())
              break e;
            r = g, s.currentTarget = N;
            try {
              r(s);
            } catch (V) {
              Fi(V);
            }
            s.currentTarget = null, r = T;
          }
      }
    }
  }
  function nt(l, n) {
    var u = n[is];
    u === void 0 && (u = n[is] = /* @__PURE__ */ new Set());
    var c = l + "__bubble";
    u.has(c) || (zr(n, l, 2, !1), u.add(c));
  }
  function Mh(l, n, u) {
    var c = 0;
    n && (c |= 4), zr(
      u,
      l,
      c,
      n
    );
  }
  var Ch = "_reactListening" + Math.random().toString(36).slice(2);
  function yp(l) {
    if (!l[Ch]) {
      l[Ch] = !0, Ma.forEach(function(u) {
        u !== "selectionchange" && (Mv.has(u) || Mh(u, !1, l), Mh(u, !0, l));
      });
      var n = l.nodeType === 9 ? l : l.ownerDocument;
      n === null || n[Ch] || (n[Ch] = !0, Mh("selectionchange", !1, n));
    }
  }
  function zr(l, n, u, c) {
    switch (xr(n)) {
      case 2:
        var s = fa;
        break;
      case 8:
        s = Zu;
        break;
      default:
        s = Bn;
    }
    u = s.bind(
      null,
      n,
      u,
      l
    ), s = void 0, !Xm || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (s = !0), c ? s !== void 0 ? l.addEventListener(n, u, {
      capture: !0,
      passive: s
    }) : l.addEventListener(n, u, !0) : s !== void 0 ? l.addEventListener(n, u, {
      passive: s
    }) : l.addEventListener(n, u, !1);
  }
  function Ef(l, n, u, c, s) {
    var r = c;
    if ((n & 1) === 0 && (n & 2) === 0 && c !== null)
      e: for (; ; ) {
        if (c === null) return;
        var m = c.tag;
        if (m === 3 || m === 4) {
          var g = c.stateNode.containerInfo;
          if (g === s) break;
          if (m === 4)
            for (m = c.return; m !== null; ) {
              var T = m.tag;
              if ((T === 3 || T === 4) && m.stateNode.containerInfo === s)
                return;
              m = m.return;
            }
          for (; g !== null; ) {
            if (m = zc(g), m === null) return;
            if (T = m.tag, T === 5 || T === 6 || T === 26 || T === 27) {
              c = r = m;
              continue e;
            }
            g = g.parentNode;
          }
        }
        c = c.return;
      }
    ms(function() {
      var N = r, V = yd(u), W = [];
      e: {
        var x = W0.get(l);
        if (x !== void 0) {
          var G = ps, he = l;
          switch (l) {
            case "keypress":
              if (ys(u) === 0) break e;
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
            case qt:
            case As:
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
          var _e = (n & 4) !== 0, Bt = !_e && (l === "scroll" || l === "scrollend"), C = _e ? x !== null ? x + "Capture" : null : x;
          _e = [];
          for (var D = N, H; D !== null; ) {
            var J = D;
            if (H = J.stateNode, J = J.tag, J !== 5 && J !== 26 && J !== 27 || H === null || C === null || (J = Qo(D, C), J != null && _e.push(
              _r(D, J, H)
            )), Bt) break;
            D = D.return;
          }
          0 < _e.length && (x = new G(
            x,
            he,
            null,
            u,
            V
          ), W.push({ event: x, listeners: _e }));
        }
      }
      if ((n & 7) === 0) {
        e: {
          if (x = l === "mouseover" || l === "pointerover", G = l === "mouseout" || l === "pointerout", x && u !== hs && (he = u.relatedTarget || u.fromElement) && (zc(he) || he[Oc]))
            break e;
          if ((G || x) && (x = V.window === V ? V : (x = V.ownerDocument) ? x.defaultView || x.parentWindow : window, G ? (he = u.relatedTarget || u.toElement, G = N, he = he ? zc(he) : null, he !== null && (Bt = Me(he), _e = he.tag, he !== Bt || _e !== 5 && _e !== 27 && _e !== 6) && (he = null)) : (G = null, he = N), G !== he)) {
            if (_e = Y0, J = "onMouseLeave", C = "onMouseEnter", D = "mouse", (l === "pointerout" || l === "pointerover") && (_e = Ad, J = "onPointerLeave", C = "onPointerEnter", D = "pointer"), Bt = G == null ? x : qo(G), H = he == null ? x : qo(he), x = new _e(
              J,
              D + "leave",
              G,
              u,
              V
            ), x.target = Bt, x.relatedTarget = H, J = null, zc(V) === N && (_e = new _e(
              C,
              D + "enter",
              he,
              u,
              V
            ), _e.target = H, _e.relatedTarget = Bt, J = _e), Bt = J, G && he)
              t: {
                for (_e = Cv, C = G, D = he, H = 0, J = C; J; J = _e(J))
                  H++;
                J = 0;
                for (var Se = D; Se; Se = _e(Se))
                  J++;
                for (; 0 < H - J; )
                  C = _e(C), H--;
                for (; 0 < J - H; )
                  D = _e(D), J--;
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
            ), he !== null && Bt !== null && pp(
              W,
              Bt,
              he,
              _e,
              !0
            );
          }
        }
        e: {
          if (x = N ? qo(N) : window, G = x.nodeName && x.nodeName.toLowerCase(), G === "select" || G === "input" && x.type === "file")
            var yt = Dd;
          else if (zd(x))
            if (Fm)
              yt = Ji;
            else {
              yt = $0;
              var pe = Pm;
            }
          else
            G = x.nodeName, !G || G.toLowerCase() !== "input" || x.type !== "checkbox" && x.type !== "radio" ? N && Gm(N.elementType) && (yt = Dd) : yt = k0;
          if (yt && (yt = yt(l, N))) {
            mu(
              W,
              yt,
              u,
              V
            );
            break e;
          }
          pe && pe(l, x, N), l === "focusout" && N && x.type === "number" && N.memoizedProps.value != null && wo(x, "number", x.value);
        }
        switch (pe = N ? qo(N) : window, l) {
          case "focusin":
            (zd(pe) || pe.contentEditable === "true") && (vu = pe, Es = N, $i = null);
            break;
          case "focusout":
            $i = Es = vu = null;
            break;
          case "mousedown":
            gu = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            gu = !1, Su(W, u, V);
            break;
          case "selectionchange":
            if (ly) break;
          case "keydown":
          case "keyup":
            Su(W, u, V);
        }
        var Qe;
        if (Vo)
          e: {
            switch (l) {
              case "compositionstart":
                var Pe = "onCompositionStart";
                break e;
              case "compositionend":
                Pe = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Pe = "onCompositionUpdate";
                break e;
            }
            Pe = void 0;
          }
        else
          xc ? Zi(l, u) && (Pe = "onCompositionEnd") : l === "keydown" && u.keyCode === 229 && (Pe = "onCompositionStart");
        Pe && (Ql && u.locale !== "ko" && (xc || Pe !== "onCompositionStart" ? Pe === "onCompositionEnd" && xc && (Qe = x0()) : (fi = V, pd = "value" in fi ? fi.value : fi.textContent, xc = !0)), pe = Uh(N, Pe), 0 < pe.length && (Pe = new bn(
          Pe,
          l,
          null,
          u,
          V
        ), W.push({ event: Pe, listeners: pe }), Qe ? Pe.data = Qe : (Qe = Od(u), Qe !== null && (Pe.data = Qe)))), (Qe = km ? J0(l, u) : K0(l, u)) && (Pe = Uh(N, "onBeforeInput"), 0 < Pe.length && (pe = new bn(
          "onBeforeInput",
          "beforeinput",
          null,
          u,
          V
        ), W.push({
          event: pe,
          listeners: Pe
        }), pe.data = Qe)), bf(
          W,
          l,
          N,
          u,
          V
        );
      }
      mp(W, n);
    });
  }
  function _r(l, n, u) {
    return {
      instance: l,
      listener: n,
      currentTarget: u
    };
  }
  function Uh(l, n) {
    for (var u = n + "Capture", c = []; l !== null; ) {
      var s = l, r = s.stateNode;
      if (s = s.tag, s !== 5 && s !== 26 && s !== 27 || r === null || (s = Qo(l, u), s != null && c.unshift(
        _r(l, s, r)
      ), s = Qo(l, n), s != null && c.push(
        _r(l, s, r)
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
  function pp(l, n, u, c, s) {
    for (var r = n._reactName, m = []; u !== null && u !== c; ) {
      var g = u, T = g.alternate, N = g.stateNode;
      if (g = g.tag, T !== null && T === c) break;
      g !== 5 && g !== 26 && g !== 27 || N === null || (T = N, s ? (N = Qo(u, r), N != null && m.unshift(
        _r(u, N, T)
      )) : s || (N = Qo(u, r), N != null && m.push(
        _r(u, N, T)
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
  function Ut(l, n, u, c, s, r) {
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
        B0(l, c, r);
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
          typeof r == "function" && (u === "formAction" ? (n !== "input" && Ut(l, n, "name", s.name, s, null), Ut(
            l,
            n,
            "formEncType",
            s.formEncType,
            s,
            null
          ), Ut(
            l,
            n,
            "formMethod",
            s.formMethod,
            s,
            null
          ), Ut(
            l,
            n,
            "formTarget",
            s.formTarget,
            s,
            null
          )) : (Ut(l, n, "encType", s.encType, s, null), Ut(l, n, "method", s.method, s, null), Ut(l, n, "target", s.target, s, null)));
        if (c == null || typeof c == "symbol" || typeof c == "boolean") {
          l.removeAttribute(u);
          break;
        }
        c = Li("" + c), l.setAttribute(u, c);
        break;
      case "onClick":
        c != null && (l.onclick = Xl);
        break;
      case "onScroll":
        c != null && nt("scroll", l);
        break;
      case "onScrollEnd":
        c != null && nt("scrollend", l);
        break;
      case "dangerouslySetInnerHTML":
        if (c != null) {
          if (typeof c != "object" || !("__html" in c))
            throw Error(B(61));
          if (u = c.__html, u != null) {
            if (s.children != null) throw Error(B(60));
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
        nt("beforetoggle", l), nt("toggle", l), ci(l, "popover", c);
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
  function Sp(l, n, u, c, s, r) {
    switch (u) {
      case "style":
        B0(l, c, r);
        break;
      case "dangerouslySetInnerHTML":
        if (c != null) {
          if (typeof c != "object" || !("__html" in c))
            throw Error(B(61));
          if (u = c.__html, u != null) {
            if (s.children != null) throw Error(B(60));
            l.innerHTML = u;
          }
        }
        break;
      case "children":
        typeof c == "string" ? Cc(l, c) : (typeof c == "number" || typeof c == "bigint") && Cc(l, "" + c);
        break;
      case "onScroll":
        c != null && nt("scroll", l);
        break;
      case "onScrollEnd":
        c != null && nt("scrollend", l);
        break;
      case "onClick":
        c != null && (l.onclick = Xl);
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
            if (u[0] === "o" && u[1] === "n" && (s = u.endsWith("Capture"), n = u.slice(2, s ? u.length - 7 : void 0), r = l[Zt] || null, r = r != null ? r[u] : null, typeof r == "function" && l.removeEventListener(n, r, s), typeof c == "function")) {
              typeof r != "function" && r !== null && (u in l ? l[u] = null : l.hasAttribute(u) && l.removeAttribute(u)), l.addEventListener(n, c, s);
              break e;
            }
            u in l ? l[u] = c : c === !0 ? l.setAttribute(u, "") : ci(l, u, c);
          }
    }
  }
  function $l(l, n, u) {
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
        nt("error", l), nt("load", l);
        var c = !1, s = !1, r;
        for (r in u)
          if (u.hasOwnProperty(r)) {
            var m = u[r];
            if (m != null)
              switch (r) {
                case "src":
                  c = !0;
                  break;
                case "srcSet":
                  s = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(B(137, n));
                default:
                  Ut(l, n, r, m, u, null);
              }
          }
        s && Ut(l, n, "srcSet", u.srcSet, u, null), c && Ut(l, n, "src", u.src, u, null);
        return;
      case "input":
        nt("invalid", l);
        var g = r = m = s = null, T = null, N = null;
        for (c in u)
          if (u.hasOwnProperty(c)) {
            var V = u[c];
            if (V != null)
              switch (c) {
                case "name":
                  s = V;
                  break;
                case "type":
                  m = V;
                  break;
                case "checked":
                  T = V;
                  break;
                case "defaultChecked":
                  N = V;
                  break;
                case "value":
                  r = V;
                  break;
                case "defaultValue":
                  g = V;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (V != null)
                    throw Error(B(137, n));
                  break;
                default:
                  Ut(l, n, c, V, u, null);
              }
          }
        md(
          l,
          r,
          g,
          T,
          N,
          m,
          s,
          !1
        );
        return;
      case "select":
        nt("invalid", l), c = m = r = null;
        for (s in u)
          if (u.hasOwnProperty(s) && (g = u[s], g != null))
            switch (s) {
              case "value":
                r = g;
                break;
              case "defaultValue":
                m = g;
                break;
              case "multiple":
                c = g;
              default:
                Ut(l, n, s, g, u, null);
            }
        n = r, u = m, l.multiple = !!c, n != null ? ou(l, !!c, n, !1) : u != null && ou(l, !!c, u, !0);
        return;
      case "textarea":
        nt("invalid", l), r = s = c = null;
        for (m in u)
          if (u.hasOwnProperty(m) && (g = u[m], g != null))
            switch (m) {
              case "value":
                c = g;
                break;
              case "defaultValue":
                s = g;
                break;
              case "children":
                r = g;
                break;
              case "dangerouslySetInnerHTML":
                if (g != null) throw Error(B(91));
                break;
              default:
                Ut(l, n, m, g, u, null);
            }
        Ym(l, c, s, r);
        return;
      case "option":
        for (T in u)
          u.hasOwnProperty(T) && (c = u[T], c != null) && (T === "selected" ? l.selected = c && typeof c != "function" && typeof c != "symbol" : Ut(l, n, T, c, u, null));
        return;
      case "dialog":
        nt("beforetoggle", l), nt("toggle", l), nt("cancel", l), nt("close", l);
        break;
      case "iframe":
      case "object":
        nt("load", l);
        break;
      case "video":
      case "audio":
        for (c = 0; c < ho.length; c++)
          nt(ho[c], l);
        break;
      case "image":
        nt("error", l), nt("load", l);
        break;
      case "details":
        nt("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        nt("error", l), nt("load", l);
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
                Ut(l, n, N, c, u, null);
            }
        return;
      default:
        if (Gm(n)) {
          for (V in u)
            u.hasOwnProperty(V) && (c = u[V], c !== void 0 && Sp(
              l,
              n,
              V,
              c,
              u,
              void 0
            ));
          return;
        }
    }
    for (g in u)
      u.hasOwnProperty(g) && (c = u[g], c != null && Ut(l, n, g, c, u, null));
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
        var s = null, r = null, m = null, g = null, T = null, N = null, V = null;
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
                c.hasOwnProperty(G) || Ut(l, n, G, null, c, W);
            }
        }
        for (var x in c) {
          var G = c[x];
          if (W = u[x], c.hasOwnProperty(x) && (G != null || W != null))
            switch (x) {
              case "type":
                r = G;
                break;
              case "name":
                s = G;
                break;
              case "checked":
                N = G;
                break;
              case "defaultChecked":
                V = G;
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
                G !== W && Ut(
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
          V,
          r,
          s
        );
        return;
      case "select":
        G = m = g = x = null;
        for (r in u)
          if (T = u[r], u.hasOwnProperty(r) && T != null)
            switch (r) {
              case "value":
                break;
              case "multiple":
                G = T;
              default:
                c.hasOwnProperty(r) || Ut(
                  l,
                  n,
                  r,
                  null,
                  c,
                  T
                );
            }
        for (s in c)
          if (r = c[s], T = u[s], c.hasOwnProperty(s) && (r != null || T != null))
            switch (s) {
              case "value":
                x = r;
                break;
              case "defaultValue":
                g = r;
                break;
              case "multiple":
                m = r;
              default:
                r !== T && Ut(
                  l,
                  n,
                  s,
                  r,
                  c,
                  T
                );
            }
        n = g, u = m, c = G, x != null ? ou(l, !!u, x, !1) : !!c != !!u && (n != null ? ou(l, !!u, n, !0) : ou(l, !!u, u ? [] : "", !1));
        return;
      case "textarea":
        G = x = null;
        for (g in u)
          if (s = u[g], u.hasOwnProperty(g) && s != null && !c.hasOwnProperty(g))
            switch (g) {
              case "value":
                break;
              case "children":
                break;
              default:
                Ut(l, n, g, null, c, s);
            }
        for (m in c)
          if (s = c[m], r = u[m], c.hasOwnProperty(m) && (s != null || r != null))
            switch (m) {
              case "value":
                x = s;
                break;
              case "defaultValue":
                G = s;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (s != null) throw Error(B(91));
                break;
              default:
                s !== r && Ut(l, n, m, s, c, r);
            }
        N0(l, x, G);
        return;
      case "option":
        for (var he in u)
          x = u[he], u.hasOwnProperty(he) && x != null && !c.hasOwnProperty(he) && (he === "selected" ? l.selected = !1 : Ut(
            l,
            n,
            he,
            null,
            c,
            x
          ));
        for (T in c)
          x = c[T], G = u[T], c.hasOwnProperty(T) && x !== G && (x != null || G != null) && (T === "selected" ? l.selected = x && typeof x != "function" && typeof x != "symbol" : Ut(
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
          x = u[_e], u.hasOwnProperty(_e) && x != null && !c.hasOwnProperty(_e) && Ut(l, n, _e, null, c, x);
        for (N in c)
          if (x = c[N], G = u[N], c.hasOwnProperty(N) && x !== G && (x != null || G != null))
            switch (N) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (x != null)
                  throw Error(B(137, n));
                break;
              default:
                Ut(
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
          for (var Bt in u)
            x = u[Bt], u.hasOwnProperty(Bt) && x !== void 0 && !c.hasOwnProperty(Bt) && Sp(
              l,
              n,
              Bt,
              void 0,
              c,
              x
            );
          for (V in c)
            x = c[V], G = u[V], !c.hasOwnProperty(V) || x === G || x === void 0 && G === void 0 || Sp(
              l,
              n,
              V,
              x,
              c,
              G
            );
          return;
        }
    }
    for (var C in u)
      x = u[C], u.hasOwnProperty(C) && x != null && !c.hasOwnProperty(C) && Ut(l, n, C, null, c, x);
    for (W in c)
      x = c[W], G = u[W], !c.hasOwnProperty(W) || x === G || x == null && G == null || Ut(l, n, W, x, c, G);
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
        var s = u[c], r = s.transferSize, m = s.initiatorType, g = s.duration;
        if (r && g && Nh(m)) {
          for (m = 0, g = s.responseEnd, c += 1; c < u.length; c++) {
            var T = u[c], N = T.startTime;
            if (N > g) break;
            var V = T.transferSize, W = T.initiatorType;
            V && Nh(W) && (T = T.responseEnd, m += V * (T < g ? 1 : (g - N) / (T - N)));
          }
          if (--c, n += 8 * (r + m) / (s.duration / 1e3), l++, 10 < l) break;
        }
      }
      if (0 < l) return n / l / 1e6;
    }
    return navigator.connection && (l = navigator.connection.downlink, typeof l == "number") ? l : 5;
  }
  var Dr = null, Bh = null;
  function Rr(l) {
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
  function Mr(l, n) {
    var u = n, c = 0;
    do {
      var s = u.nextSibling;
      if (l.removeChild(u), s && s.nodeType === 8)
        if (u = s.data, u === "/$" || u === "/&") {
          if (c === 0) {
            l.removeChild(s), Cf(n);
            return;
          }
          c--;
        } else if (u === "$" || u === "$?" || u === "$~" || u === "$!" || u === "&")
          c++;
        else if (u === "html")
          Di(l.ownerDocument.documentElement);
        else if (u === "head") {
          u = l.ownerDocument.head, Di(u);
          for (var r = u.firstChild; r; ) {
            var m = r.nextSibling, g = r.nodeName;
            r[Yo] || g === "SCRIPT" || g === "STYLE" || g === "LINK" && r.rel.toLowerCase() === "stylesheet" || u.removeChild(r), r = m;
          }
        } else
          u === "body" && Di(l.ownerDocument.body);
      u = s;
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
      var s = u;
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
              if (r = l.getAttribute("rel"), r === "stylesheet" && l.hasAttribute("data-precedence"))
                break;
              if (r !== s.rel || l.getAttribute("href") !== (s.href == null || s.href === "" ? null : s.href) || l.getAttribute("crossorigin") !== (s.crossOrigin == null ? null : s.crossOrigin) || l.getAttribute("title") !== (s.title == null ? null : s.title))
                break;
              return l;
            case "style":
              if (l.hasAttribute("data-precedence")) break;
              return l;
            case "script":
              if (r = l.getAttribute("src"), (r !== (s.src == null ? null : s.src) || l.getAttribute("type") !== (s.type == null ? null : s.type) || l.getAttribute("crossorigin") !== (s.crossOrigin == null ? null : s.crossOrigin)) && r && l.hasAttribute("async") && !l.hasAttribute("itemprop"))
                break;
              return l;
            default:
              return l;
          }
      } else if (n === "input" && l.type === "hidden") {
        var r = s.name == null ? null : "" + s.name;
        if (s.type === "hidden" && l.getAttribute("name") === r)
          return l;
      } else return l;
      if (l = kl(l.nextSibling), l === null) break;
    }
    return null;
  }
  function aS(l, n, u) {
    if (n === "") return null;
    for (; l.nodeType !== 3; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !u || (l = kl(l.nextSibling), l === null)) return null;
    return l;
  }
  function Ve(l, n) {
    for (; l.nodeType !== 8; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !n || (l = kl(l.nextSibling), l === null)) return null;
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
  function kl(l) {
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
            return kl(l.nextSibling);
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
    switch (n = Rr(u), l) {
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
  var Ja = /* @__PURE__ */ new Map(), Gh = /* @__PURE__ */ new Set();
  function mo(l) {
    return typeof l.getRootNode == "function" ? l.getRootNode() : l.nodeType === 9 ? l : l.ownerDocument;
  }
  var ml = j.d;
  j.d = {
    f: zp,
    r: nS,
    D: Ol,
    C: w,
    L: zt,
    m: uS,
    X: Dp,
    S: _p,
    M: Ri
  };
  function zp() {
    var l = ml.f(), n = vr();
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
      var s = Sn(n);
      s = 'link[rel="' + l + '"][href="' + s + '"]', typeof u == "string" && (s += '[crossorigin="' + u + '"]'), Gh.has(s) || (Gh.add(s), l = { rel: l, crossOrigin: u, href: n }, c.querySelector(s) === null && (n = c.createElement("link"), $l(n, "link", l), Tl(n), c.head.appendChild(n)));
    }
  }
  function Ol(l) {
    ml.D(l), jv("dns-prefetch", l, null);
  }
  function w(l, n) {
    ml.C(l, n), jv("preconnect", l, n);
  }
  function zt(l, n, u) {
    ml.L(l, n, u);
    var c = yo;
    if (c && l && n) {
      var s = 'link[rel="preload"][as="' + Sn(n) + '"]';
      n === "image" && u && u.imageSrcSet ? (s += '[imagesrcset="' + Sn(
        u.imageSrcSet
      ) + '"]', typeof u.imageSizes == "string" && (s += '[imagesizes="' + Sn(
        u.imageSizes
      ) + '"]')) : s += '[href="' + Sn(l) + '"]';
      var r = s;
      switch (n) {
        case "style":
          r = Vu(l);
          break;
        case "script":
          r = po(l);
      }
      Ja.has(r) || (l = de(
        {
          rel: "preload",
          href: n === "image" && u && u.imageSrcSet ? void 0 : l,
          as: n
        },
        u
      ), Ja.set(r, l), c.querySelector(s) !== null || n === "style" && c.querySelector(Hn(r)) || n === "script" && c.querySelector(Df(r)) || (n = c.createElement("link"), $l(n, "link", l), Tl(n), c.head.appendChild(n)));
    }
  }
  function uS(l, n) {
    ml.m(l, n);
    var u = yo;
    if (u && l) {
      var c = n && typeof n.as == "string" ? n.as : "script", s = 'link[rel="modulepreload"][as="' + Sn(c) + '"][href="' + Sn(l) + '"]', r = s;
      switch (c) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          r = po(l);
      }
      if (!Ja.has(r) && (l = de({ rel: "modulepreload", href: l }, n), Ja.set(r, l), u.querySelector(s) === null)) {
        switch (c) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (u.querySelector(Df(r)))
              return;
        }
        c = u.createElement("link"), $l(c, "link", l), Tl(c), u.head.appendChild(c);
      }
    }
  }
  function _p(l, n, u) {
    ml.S(l, n, u);
    var c = yo;
    if (c && l) {
      var s = Dc(c).hoistableStyles, r = Vu(l);
      n = n || "default";
      var m = s.get(r);
      if (!m) {
        var g = { loading: 0, preload: null };
        if (m = c.querySelector(
          Hn(r)
        ))
          g.loading = 5;
        else {
          l = de(
            { rel: "stylesheet", href: l, "data-precedence": n },
            u
          ), (u = Ja.get(r)) && wh(l, u);
          var T = m = c.createElement("link");
          Tl(T), $l(T, "link", l), T._p = new Promise(function(N, V) {
            T.onload = N, T.onerror = V;
          }), T.addEventListener("load", function() {
            g.loading |= 1;
          }), T.addEventListener("error", function() {
            g.loading |= 2;
          }), g.loading |= 4, Hr(m, n, c);
        }
        m = {
          type: "stylesheet",
          instance: m,
          count: 1,
          state: g
        }, s.set(r, m);
      }
    }
  }
  function Dp(l, n) {
    ml.X(l, n);
    var u = yo;
    if (u && l) {
      var c = Dc(u).hoistableScripts, s = po(l), r = c.get(s);
      r || (r = u.querySelector(Df(s)), r || (l = de({ src: l, async: !0 }, n), (n = Ja.get(s)) && Xh(l, n), r = u.createElement("script"), Tl(r), $l(r, "link", l), u.head.appendChild(r)), r = {
        type: "script",
        instance: r,
        count: 1,
        state: null
      }, c.set(s, r));
    }
  }
  function Ri(l, n) {
    ml.M(l, n);
    var u = yo;
    if (u && l) {
      var c = Dc(u).hoistableScripts, s = po(l), r = c.get(s);
      r || (r = u.querySelector(Df(s)), r || (l = de({ src: l, async: !0, type: "module" }, n), (n = Ja.get(s)) && Xh(l, n), r = u.createElement("script"), Tl(r), $l(r, "link", l), u.head.appendChild(r)), r = {
        type: "script",
        instance: r,
        count: 1,
        state: null
      }, c.set(s, r));
    }
  }
  function Mi(l, n, u, c) {
    var s = (s = ze.current) ? mo(s) : null;
    if (!s) throw Error(B(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof u.precedence == "string" && typeof u.href == "string" ? (n = Vu(u.href), u = Dc(
          s
        ).hoistableStyles, c = u.get(n), c || (c = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, u.set(n, c)), c) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (u.rel === "stylesheet" && typeof u.href == "string" && typeof u.precedence == "string") {
          l = Vu(u.href);
          var r = Dc(
            s
          ).hoistableStyles, m = r.get(l);
          if (m || (s = s.ownerDocument || s, m = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, r.set(l, m), (r = s.querySelector(
            Hn(l)
          )) && !r._p && (m.instance = r, m.state.loading = 5), Ja.has(l) || (u = {
            rel: "preload",
            as: "style",
            href: u.href,
            crossOrigin: u.crossOrigin,
            integrity: u.integrity,
            media: u.media,
            hrefLang: u.hrefLang,
            referrerPolicy: u.referrerPolicy
          }, Ja.set(l, u), r || Ur(
            s,
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
          s
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
  function Cr(l) {
    return de({}, l, {
      "data-precedence": l.precedence,
      precedence: null
    });
  }
  function Ur(l, n, u, c) {
    l.querySelector('link[rel="preload"][as="style"][' + n + "]") ? c.loading = 1 : (n = l.createElement("link"), c.preload = n, n.addEventListener("load", function() {
      return c.loading |= 1;
    }), n.addEventListener("error", function() {
      return c.loading |= 2;
    }), $l(n, "link", u), Tl(n), l.head.appendChild(n));
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
          var s = de({}, u, {
            "data-href": u.href,
            "data-precedence": u.precedence,
            href: null,
            precedence: null
          });
          return c = (l.ownerDocument || l).createElement(
            "style"
          ), Tl(c), $l(c, "style", s), Hr(c, u.precedence, l), n.instance = c;
        case "stylesheet":
          s = Vu(u.href);
          var r = l.querySelector(
            Hn(s)
          );
          if (r)
            return n.state.loading |= 4, n.instance = r, Tl(r), r;
          c = Cr(u), (s = Ja.get(s)) && wh(c, s), r = (l.ownerDocument || l).createElement("link"), Tl(r);
          var m = r;
          return m._p = new Promise(function(g, T) {
            m.onload = g, m.onerror = T;
          }), $l(r, "link", c), n.state.loading |= 4, Hr(r, u.precedence, l), n.instance = r;
        case "script":
          return r = po(u.src), (s = l.querySelector(
            Df(r)
          )) ? (n.instance = s, Tl(s), s) : (c = u, (s = Ja.get(r)) && (c = de({}, u), Xh(c, s)), l = l.ownerDocument || l, s = l.createElement("script"), Tl(s), $l(s, "link", c), l.head.appendChild(s), n.instance = s);
        case "void":
          return null;
        default:
          throw Error(B(443, n.type));
      }
    else
      n.type === "stylesheet" && (n.state.loading & 4) === 0 && (c = n.instance, n.state.loading |= 4, Hr(c, u.precedence, l));
    return n.instance;
  }
  function Hr(l, n, u) {
    for (var c = u.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), s = c.length ? c[c.length - 1] : null, r = s, m = 0; m < c.length; m++) {
      var g = c[m];
      if (g.dataset.precedence === n) r = g;
      else if (r !== s) break;
    }
    r ? r.parentNode.insertBefore(l, r.nextSibling) : (n = u.nodeType === 9 ? u.head : u, n.insertBefore(l, n.firstChild));
  }
  function wh(l, n) {
    l.crossOrigin == null && (l.crossOrigin = n.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = n.referrerPolicy), l.title == null && (l.title = n.title);
  }
  function Xh(l, n) {
    l.crossOrigin == null && (l.crossOrigin = n.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = n.referrerPolicy), l.integrity == null && (l.integrity = n.integrity);
  }
  var Nr = null;
  function Qh(l, n, u) {
    if (Nr === null) {
      var c = /* @__PURE__ */ new Map(), s = Nr = /* @__PURE__ */ new Map();
      s.set(u, c);
    } else
      s = Nr, c = s.get(u), c || (c = /* @__PURE__ */ new Map(), s.set(u, c));
    if (c.has(l)) return c;
    for (c.set(l, null), u = u.getElementsByTagName(l), s = 0; s < u.length; s++) {
      var r = u[s];
      if (!(r[Yo] || r[vl] || l === "link" && r.getAttribute("rel") === "stylesheet") && r.namespaceURI !== "http://www.w3.org/2000/svg") {
        var m = r.getAttribute(n) || "";
        m = l + m;
        var g = c.get(m);
        g ? g.push(r) : c.set(m, [r]);
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
        var s = Vu(c.href), r = n.querySelector(
          Hn(s)
        );
        if (r) {
          n = r._p, n !== null && typeof n == "object" && typeof n.then == "function" && (l.count++, l = Rf.bind(l), n.then(l, l)), u.state.loading |= 4, u.instance = r, Tl(r);
          return;
        }
        r = n.ownerDocument || n, c = Cr(c), (s = Ja.get(s)) && wh(c, s), r = r.createElement("link"), Tl(r);
        var m = r;
        m._p = new Promise(function(g, T) {
          m.onload = g, m.onerror = T;
        }), $l(r, "link", c), u.instance = r;
      }
      l.stylesheets === null && (l.stylesheets = /* @__PURE__ */ new Map()), l.stylesheets.set(u, n), (n = u.state.preload) && (u.state.loading & 3) === 0 && (l.count++, u = Rf.bind(l), n.addEventListener("load", u), n.addEventListener("error", u));
    }
  }
  var Nn = 0;
  function In(l, n) {
    return l.stylesheets && l.count === 0 && Zh(l, l.stylesheets), 0 < l.count || 0 < l.imgCount ? function(u) {
      var c = setTimeout(function() {
        if (l.stylesheets && Zh(l, l.stylesheets), l.unsuspend) {
          var r = l.unsuspend;
          l.unsuspend = null, r();
        }
      }, 6e4 + n);
      0 < l.imgBytes && Nn === 0 && (Nn = 62500 * bp());
      var s = setTimeout(
        function() {
          if (l.waitingForImages = !1, l.count === 0 && (l.stylesheets && Zh(l, l.stylesheets), l.unsuspend)) {
            var r = l.unsuspend;
            l.unsuspend = null, r();
          }
        },
        (l.imgBytes > Nn ? 50 : 800) + n
      );
      return l.unsuspend = u, function() {
        l.unsuspend = null, clearTimeout(c), clearTimeout(s);
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
        for (var s = l.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), r = 0; r < s.length; r++) {
          var m = s[r];
          (m.nodeName === "LINK" || m.getAttribute("media") !== "not all") && (u.set(m.dataset.precedence, m), c = m);
        }
        c && u.set(null, c);
      }
      s = n.instance, m = s.getAttribute("data-precedence"), r = u.get(m) || c, r === c && u.set(null, s), u.set(m, s), this.count++, c = Rf.bind(this), s.addEventListener("load", c), s.addEventListener("error", c), r ? r.parentNode.insertBefore(s, r.nextSibling) : (l = l.nodeType === 9 ? l.head : l, l.insertBefore(s, l.firstChild)), n.state.loading |= 4;
    }
  }
  var sl = {
    $$typeof: Dt,
    Provider: null,
    Consumer: null,
    _currentValue: P,
    _currentValue2: P,
    _threadCount: 0
  };
  function cS(l, n, u, c, s, r, m, g, T) {
    this.tag = 1, this.containerInfo = l, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = wl(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = wl(0), this.hiddenUpdates = wl(null), this.identifierPrefix = c, this.onUncaughtError = s, this.onCaughtError = r, this.onRecoverableError = m, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = T, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Jh(l, n, u, c, s, r, m, g, T, N, V, W) {
    return l = new cS(
      l,
      n,
      u,
      m,
      T,
      N,
      V,
      W,
      g
    ), n = 1, r === !0 && (n |= 24), r = Na(3, null, null, n), l.current = r, r.stateNode = l, n = jd(), n.refCount++, l.pooledCache = n, n.refCount++, r.memoizedState = {
      element: c,
      isDehydrated: u,
      cache: n
    }, Gd(r), l;
  }
  function Kh(l) {
    return l ? (l = wc, l) : wc;
  }
  function vo(l, n, u, c, s, r) {
    s = Kh(s), c.context === null ? c.context = s : c.pendingContext = s, c = yi(n), c.payload = { element: u }, r = r === void 0 ? null : r, r !== null && (c.callback = r), u = pi(l, c, n), u !== null && (Za(u, l, n), Du(u, l, n));
  }
  function Yv(l, n) {
    if (l = l.memoizedState, l !== null && l.dehydrated !== null) {
      var u = l.retryLane;
      l.retryLane = u !== 0 && u < n ? u : n;
    }
  }
  function Br(l, n) {
    Yv(l, n), (l = l.alternate) && Yv(l, n);
  }
  function qv(l) {
    if (l.tag === 13 || l.tag === 31) {
      var n = la(l, 67108864);
      n !== null && Za(n, l, 67108864), Br(l, 67108864);
    }
  }
  function Gv(l) {
    if (l.tag === 13 || l.tag === 31) {
      var n = Aa();
      n = Ra(n);
      var u = la(l, n);
      u !== null && Za(u, l, n), Br(l, n);
    }
  }
  var Ci = !0;
  function fa(l, n, u, c) {
    var s = X.T;
    X.T = null;
    var r = j.p;
    try {
      j.p = 2, Bn(l, n, u, c);
    } finally {
      j.p = r, X.T = s;
    }
  }
  function Zu(l, n, u, c) {
    var s = X.T;
    X.T = null;
    var r = j.p;
    try {
      j.p = 8, Bn(l, n, u, c);
    } finally {
      j.p = r, X.T = s;
    }
  }
  function Bn(l, n, u, c) {
    if (Ci) {
      var s = Wl(c);
      if (s === null)
        Ef(
          l,
          n,
          c,
          $h,
          u
        ), sa(l, c);
      else if (Hp(
        s,
        l,
        n,
        u,
        c
      ))
        c.stopPropagation();
      else if (sa(l, c), n & 4 && -1 < Il.indexOf(l)) {
        for (; s !== null; ) {
          var r = _c(s);
          if (r !== null)
            switch (r.tag) {
              case 3:
                if (r = r.stateNode, r.current.memoizedState.isDehydrated) {
                  var m = re(r.pendingLanes);
                  if (m !== 0) {
                    var g = r;
                    for (g.pendingLanes |= 2, g.entangledLanes |= 2; m; ) {
                      var T = 1 << 31 - Rl(m);
                      g.entanglements[1] |= T, m &= ~T;
                    }
                    Wn(r), (mt & 6) === 0 && (pr = El() + 500, Er(0));
                  }
                }
                break;
              case 31:
              case 13:
                g = la(r, 2), g !== null && Za(g, r, 2), vr(), Br(r, 2);
            }
          if (r = Wl(c), r === null && Ef(
            l,
            n,
            c,
            $h,
            u
          ), r === s) break;
          s = r;
        }
        s !== null && c.stopPropagation();
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
  function Wl(l) {
    return l = yd(l), Up(l);
  }
  var $h = null;
  function Up(l) {
    if ($h = null, l = zc(l), l !== null) {
      var n = Me(l);
      if (n === null) l = null;
      else {
        var u = n.tag;
        if (u === 13) {
          if (l = je(n), l !== null) return l;
          l = null;
        } else if (u === 31) {
          if (l = St(n), l !== null) return l;
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
  function xr(l) {
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
          case ts:
            return 2;
          case xo:
            return 8;
          case Gi:
          case wi:
            return 32;
          case ls:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Mf = !1, Pn = null, zl = null, Fl = null, sn = /* @__PURE__ */ new Map(), yc = /* @__PURE__ */ new Map(), Oa = [], Il = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function sa(l, n) {
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
        Fl = null;
        break;
      case "pointerover":
      case "pointerout":
        sn.delete(n.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        yc.delete(n.pointerId);
    }
  }
  function xn(l, n, u, c, s, r) {
    return l === null || l.nativeEvent !== r ? (l = {
      blockedOn: n,
      domEventName: u,
      eventSystemFlags: c,
      nativeEvent: r,
      targetContainers: [s]
    }, n !== null && (n = _c(n), n !== null && qv(n)), l) : (l.eventSystemFlags |= c, n = l.targetContainers, s !== null && n.indexOf(s) === -1 && n.push(s), l);
  }
  function Hp(l, n, u, c, s) {
    switch (n) {
      case "focusin":
        return Pn = xn(
          Pn,
          l,
          n,
          u,
          c,
          s
        ), !0;
      case "dragenter":
        return zl = xn(
          zl,
          l,
          n,
          u,
          c,
          s
        ), !0;
      case "mouseover":
        return Fl = xn(
          Fl,
          l,
          n,
          u,
          c,
          s
        ), !0;
      case "pointerover":
        var r = s.pointerId;
        return sn.set(
          r,
          xn(
            sn.get(r) || null,
            l,
            n,
            u,
            c,
            s
          )
        ), !0;
      case "gotpointercapture":
        return r = s.pointerId, yc.set(
          r,
          xn(
            yc.get(r) || null,
            l,
            n,
            u,
            c,
            s
          )
        ), !0;
    }
    return !1;
  }
  function wv(l) {
    var n = zc(l.target);
    if (n !== null) {
      var u = Me(n);
      if (u !== null) {
        if (n = u.tag, n === 13) {
          if (n = je(u), n !== null) {
            l.blockedOn = n, rd(l.priority, function() {
              Gv(u);
            });
            return;
          }
        } else if (n === 31) {
          if (n = St(u), n !== null) {
            l.blockedOn = n, rd(l.priority, function() {
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
      var u = Wl(l.nativeEvent);
      if (u === null) {
        u = l.nativeEvent;
        var c = new u.constructor(
          u.type,
          u
        );
        hs = c, u.target.dispatchEvent(c), hs = null;
      } else
        return n = _c(u), n !== null && qv(n), l.blockedOn = u, !1;
      n.shift();
    }
    return !0;
  }
  function Np(l, n, u) {
    kh(l) && u.delete(n);
  }
  function jr() {
    Mf = !1, Pn !== null && kh(Pn) && (Pn = null), zl !== null && kh(zl) && (zl = null), Fl !== null && kh(Fl) && (Fl = null), sn.forEach(Np), yc.forEach(Np);
  }
  function Yr(l, n) {
    l.blockedOn === n && (l.blockedOn = null, Mf || (Mf = !0, k.unstable_scheduleCallback(
      k.unstable_NormalPriority,
      jr
    )));
  }
  var Ju = null;
  function Wh(l) {
    Ju !== l && (Ju = l, k.unstable_scheduleCallback(
      k.unstable_NormalPriority,
      function() {
        Ju === l && (Ju = null);
        for (var n = 0; n < l.length; n += 3) {
          var u = l[n], c = l[n + 1], s = l[n + 2];
          if (typeof c != "function") {
            if (Up(c || u) === null)
              continue;
            break;
          }
          var r = _c(u);
          r !== null && (l.splice(n, 3), n -= 3, uh(
            r,
            {
              pending: !0,
              data: s,
              method: u.method,
              action: c
            },
            c,
            s
          ));
        }
      }
    ));
  }
  function Cf(l) {
    function n(T) {
      return Yr(T, l);
    }
    Pn !== null && Yr(Pn, l), zl !== null && Yr(zl, l), Fl !== null && Yr(Fl, l), sn.forEach(n), yc.forEach(n);
    for (var u = 0; u < Oa.length; u++) {
      var c = Oa[u];
      c.blockedOn === l && (c.blockedOn = null);
    }
    for (; 0 < Oa.length && (u = Oa[0], u.blockedOn === null); )
      wv(u), u.blockedOn === null && Oa.shift();
    if (u = (l.ownerDocument || l).$$reactFormReplay, u != null)
      for (c = 0; c < u.length; c += 3) {
        var s = u[c], r = u[c + 1], m = s[Zt] || null;
        if (typeof r == "function")
          m || Wh(u);
        else if (m) {
          var g = null;
          if (r && r.hasAttribute("formAction")) {
            if (s = r, m = r[Zt] || null)
              g = m.formAction;
            else if (Up(s) !== null) continue;
          } else g = m.action;
          typeof g == "function" ? u[c + 1] = g : (u.splice(c, 3), c -= 3), Wh(u);
        }
      }
  }
  function Xv() {
    function l(r) {
      r.canIntercept && r.info === "react-transition" && r.intercept({
        handler: function() {
          return new Promise(function(m) {
            return s = m;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function n() {
      s !== null && (s(), s = null), c || setTimeout(u, 20);
    }
    function u() {
      if (!c && !navigation.transition) {
        var r = navigation.currentEntry;
        r && r.url != null && navigation.navigate(r.url, {
          state: r.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var c = !1, s = null;
      return navigation.addEventListener("navigate", l), navigation.addEventListener("navigatesuccess", n), navigation.addEventListener("navigateerror", n), setTimeout(u, 100), function() {
        c = !0, navigation.removeEventListener("navigate", l), navigation.removeEventListener("navigatesuccess", n), navigation.removeEventListener("navigateerror", n), s !== null && (s(), s = null);
      };
    }
  }
  function Fh(l) {
    this._internalRoot = l;
  }
  qr.prototype.render = Fh.prototype.render = function(l) {
    var n = this._internalRoot;
    if (n === null) throw Error(B(409));
    var u = n.current, c = Aa();
    vo(u, c, l, n, null, null);
  }, qr.prototype.unmount = Fh.prototype.unmount = function() {
    var l = this._internalRoot;
    if (l !== null) {
      this._internalRoot = null;
      var n = l.containerInfo;
      vo(l.current, 2, null, l, null, null), vr(), n[Oc] = null;
    }
  };
  function qr(l) {
    this._internalRoot = l;
  }
  qr.prototype.unstable_scheduleHydration = function(l) {
    if (l) {
      var n = C0();
      l = { blockedOn: null, target: l, priority: n };
      for (var u = 0; u < Oa.length && n !== 0 && n < Oa[u].priority; u++) ;
      Oa.splice(u, 0, l), u === 0 && wv(l);
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
    return l = Q(n), l = l !== null ? we(l) : null, l = l === null ? null : l.stateNode, l;
  };
  var Lv = {
    bundleType: 0,
    version: "19.2.3",
    rendererPackageName: "react-dom",
    currentDispatcherRef: X,
    reconcilerVersion: "19.2.3"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Gr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Gr.isDisabled && Gr.supportsFiber)
      try {
        Gn = Gr.inject(
          Lv
        ), pl = Gr;
      } catch {
      }
  }
  return D0.createRoot = function(l, n) {
    if (!Re(l)) throw Error(B(299));
    var u = !1, c = "", s = By, r = ch, m = xy;
    return n != null && (n.unstable_strictMode === !0 && (u = !0), n.identifierPrefix !== void 0 && (c = n.identifierPrefix), n.onUncaughtError !== void 0 && (s = n.onUncaughtError), n.onCaughtError !== void 0 && (r = n.onCaughtError), n.onRecoverableError !== void 0 && (m = n.onRecoverableError)), n = Jh(
      l,
      1,
      !1,
      null,
      null,
      u,
      c,
      null,
      s,
      r,
      m,
      Xv
    ), l[Oc] = n.current, yp(l), new Fh(n);
  }, D0.hydrateRoot = function(l, n, u) {
    if (!Re(l)) throw Error(B(299));
    var c = !1, s = "", r = By, m = ch, g = xy, T = null;
    return u != null && (u.unstable_strictMode === !0 && (c = !0), u.identifierPrefix !== void 0 && (s = u.identifierPrefix), u.onUncaughtError !== void 0 && (r = u.onUncaughtError), u.onCaughtError !== void 0 && (m = u.onCaughtError), u.onRecoverableError !== void 0 && (g = u.onRecoverableError), u.formState !== void 0 && (T = u.formState)), n = Jh(
      l,
      1,
      !0,
      n,
      u ?? null,
      c,
      s,
      T,
      r,
      m,
      g,
      Xv
    ), n.context = Kh(null), u = n.current, c = Aa(), c = Ra(c), s = yi(c), s.callback = null, pi(u, s, c), u = c, n.current.lanes = u, Da(n, u), Wn(n), l[Oc] = n.current, yp(l), new qr(n);
  }, D0.version = "19.2.3", D0;
}
var R0 = {}, VE;
function RA() {
  if (VE) return R0;
  VE = 1;
  var k = {};
  return k.NODE_ENV !== "production" && (function() {
    function te(e, t) {
      for (e = e.memoizedState; e !== null && 0 < t; )
        e = e.next, t--;
      return e;
    }
    function Ne(e, t, a, i) {
      if (a >= t.length) return i;
      var o = t[a], f = Ol(e) ? e.slice() : Ve({}, e);
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
        return Re(e, t, a, 0);
      }
    }
    function Re(e, t, a, i) {
      var o = t[i], f = Ol(e) ? e.slice() : Ve({}, e);
      return i + 1 === t.length ? (f[a[i]] = f[o], Ol(f) ? f.splice(o, 1) : delete f[o]) : f[o] = Re(
        e[o],
        t,
        a,
        i + 1
      ), f;
    }
    function Me(e, t, a) {
      var i = t[a], o = Ol(e) ? e.slice() : Ve({}, e);
      return a + 1 === t.length ? (Ol(o) ? o.splice(i, 1) : delete o[i], o) : (o[i] = Me(e[i], t, a + 1), o);
    }
    function je() {
      return !1;
    }
    function St() {
      return null;
    }
    function L() {
      console.error(
        "Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://react.dev/link/rules-of-hooks"
      );
    }
    function Q() {
      console.error(
        "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
      );
    }
    function we() {
    }
    function de() {
    }
    function $(e) {
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
    function Ye(e, t) {
      if (ku !== null) {
        var a = t.staleFamilies;
        t = t.updatedFamilies, fc(), K0(
          e.current,
          t,
          a
        ), ao();
      }
    }
    function $t(e) {
      ku = e;
    }
    function Je(e) {
      return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
    }
    function lt(e) {
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
    function Dt(e) {
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
    function Vt(e) {
      if (lt(e) !== e)
        throw Error("Unable to find node on an unmounted component.");
    }
    function Ke(e) {
      var t = e.alternate;
      if (!t) {
        if (t = lt(e), t === null)
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
            if (f === a) return Vt(o), e;
            if (f === i) return Vt(o), t;
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
    function Oe(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6) return e;
      for (e = e.child; e !== null; ) {
        if (t = Oe(e), t !== null) return t;
        e = e.sibling;
      }
      return null;
    }
    function bt(e) {
      return e === null || typeof e != "object" ? null : (e = yo && e[yo] || e["@@iterator"], typeof e == "function" ? e : null);
    }
    function Fe(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === jv ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case kl:
          return "Fragment";
        case Yh:
          return "Profiler";
        case _f:
          return "StrictMode";
        case Ja:
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
            return t = e.displayName || null, t !== null ? t : Fe(e.type) || "Memo";
          case ml:
            t = e._payload, e = e._init;
            try {
              return Fe(e(t));
            } catch {
            }
        }
      return null;
    }
    function jt(e) {
      return typeof e.tag == "number" ? se(e) : typeof e.name == "string" ? e.name : null;
    }
    function se(e) {
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
          return Fe(t);
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
            return se(e.return);
      }
      return null;
    }
    function Et(e) {
      return { current: e };
    }
    function Te(e, t) {
      0 > Ri ? console.error("Unexpected pop.") : (t !== Dp[Ri] && console.error("Unexpected Fiber popped."), e.current = _p[Ri], _p[Ri] = null, Dp[Ri] = null, Ri--);
    }
    function Ue(e, t, a) {
      Ri++, _p[Ri] = e.current, Dp[Ri] = a, e.current = t;
    }
    function Yt(e) {
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
            t = zi(t), t = vr(
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
      a = a.toLowerCase(), a = rs(null, a), a = {
        context: t,
        ancestorInfo: a
      }, Te(Mi, e), Ue(Mi, a, e);
    }
    function j(e) {
      Te(Mi, e), Te(Vu, e), Te(Hn, e);
    }
    function P() {
      return Yt(Mi.current);
    }
    function ce(e) {
      e.memoizedState !== null && Ue(Cr, e, e);
      var t = Yt(Mi.current), a = e.type, i = vr(t.context, a);
      a = rs(t.ancestorInfo, a), i = { context: i, ancestorInfo: a }, t !== i && (Ue(Vu, e, e), Ue(Mi, i, e));
    }
    function ge(e) {
      Vu.current === e && (Te(Mi, e), Te(Vu, e)), Cr.current === e && (Te(Cr, e), T0._currentValue = od);
    }
    function O() {
    }
    function A() {
      if (Ur === 0) {
        po = console.log, Df = console.info, Rp = console.warn, Hr = console.error, wh = console.group, Xh = console.groupCollapsed, Nr = console.groupEnd;
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
      Ur++;
    }
    function K() {
      if (Ur--, Ur === 0) {
        var e = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: Ve({}, e, { value: po }),
          info: Ve({}, e, { value: Df }),
          warn: Ve({}, e, { value: Rp }),
          error: Ve({}, e, { value: Hr }),
          group: Ve({}, e, { value: wh }),
          groupCollapsed: Ve({}, e, { value: Xh }),
          groupEnd: Ve({}, e, { value: Nr })
        });
      }
      0 > Ur && console.error(
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
        Cp = !1, w.H = i, K(), Error.prepareStackTrace = a;
      }
      return p = (p = e ? e.displayName || e.name : "") ? ae(p) : "", typeof e == "function" && Lh.set(e, p), p;
    }
    function at(e, t) {
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
    function Ie(e) {
      try {
        var t = "", a = null;
        do {
          t += at(e, a);
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
    function Tt(e) {
      return (e = e ? e.displayName || e.name : "") ? ae(e) : "";
    }
    function ta() {
      if (fn === null) return null;
      var e = fn._debugOwner;
      return e != null ? jt(e) : null;
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
            e._debugOwner || t !== "" || (t += Tt(
              e.type
            ));
            break;
          case 11:
            e._debugOwner || t !== "" || (t += Tt(
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
    function _t(e, t) {
      if (ui(e))
        return console.error(
          "The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before using it here.",
          t,
          Wa(e)
        ), uu(e);
    }
    function Gl(e, t) {
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
    function es(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u") return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled) return !0;
      if (!t.supportsFiber)
        return console.error(
          "The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://react.dev/link/react-devtools"
        ), !0;
      try {
        Ci = t.inject(e), fa = t;
      } catch (a) {
        console.error("React instrumentation encountered an error: %o.", a);
      }
      return !!t.checkDCE;
    }
    function me(e) {
      if (typeof qv == "function" && Gv(e), fa && typeof fa.setStrictMode == "function")
        try {
          fa.setStrictMode(Ci, e);
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
    function ts(e, t) {
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
    function ls(e, t, a, i, o, f) {
      var d = e.pendingLanes;
      e.pendingLanes = a, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= a, e.entangledLanes &= a, e.errorRecoveryDisabledLanes &= a, e.shellSuspendCounter = 0;
      var h = e.entanglements, y = e.expirationTimes, p = e.hiddenUpdates;
      for (a = d & ~a; 0 < a; ) {
        var _ = 31 - Wl(a), R = 1 << _;
        h[_] = 0, y[_] = -1;
        var b = p[_];
        if (b !== null)
          for (p[_] = null, _ = 0; _ < b.length; _++) {
            var Y = b[_];
            Y !== null && (Y.lane &= -536870913);
          }
        a &= ~R;
      }
      i !== 0 && as(e, i, 0), f !== 0 && o === 0 && e.tag !== 0 && (e.suspendedLanes |= f & ~(d & ~t));
    }
    function as(e, t, a) {
      e.pendingLanes |= t, e.suspendedLanes &= ~t;
      var i = 31 - Wl(t);
      e.entangledLanes |= t, e.entanglements[i] = e.entanglements[i] | 1073741824 | a & 261930;
    }
    function ns(e, t) {
      var a = e.entangledLanes |= t;
      for (e = e.entanglements; a; ) {
        var i = 31 - Wl(a), o = 1 << i;
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
    function _a(e, t, a) {
      if (Bn)
        for (e = e.pendingUpdatersLaneMap; 0 < a; ) {
          var i = 31 - Wl(a), o = 1 << i;
          e[i].add(t), a &= ~o;
        }
    }
    function Rl(e, t) {
      if (Bn)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; 0 < t; ) {
          var o = 31 - Wl(t);
          e = 1 << o, o = a[o], 0 < o.size && (o.forEach(function(f) {
            var d = f.alternate;
            d !== null && i.has(d) || i.add(f);
          }), o.clear()), t &= ~e;
        }
    }
    function jo(e) {
      return e &= -e, zl < e ? Fl < e ? (e & 134217727) !== 0 ? sn : yc : Fl : zl;
    }
    function Xi() {
      var e = zt.p;
      return e !== 0 ? e : (e = window.event, e === void 0 ? sn : Bh(e.type));
    }
    function v(e, t) {
      var a = zt.p;
      try {
        return zt.p = e, t();
      } finally {
        zt.p = a;
      }
    }
    function M(e) {
      delete e[Il], delete e[sa], delete e[Hp], delete e[wv], delete e[kh];
    }
    function I(e) {
      var t = e[Il];
      if (t) return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[xn] || a[Il]) {
          if (a = t.alternate, t.child !== null || a !== null && a.child !== null)
            for (e = zh(e); e !== null; ) {
              if (a = e[Il])
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
      if (e = e[Il] || e[xn]) {
        var t = e.tag;
        if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
          return e;
      }
      return null;
    }
    function re(e) {
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
      e[jr] = !0;
    }
    function ft(e, t) {
      qe(e, t), qe(e + "Capture", t);
    }
    function qe(e, t) {
      Ju[e] && console.error(
        "EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.",
        e
      ), Ju[e] = t;
      var a = e.toLowerCase();
      for (Wh[a] = e, e === "onDoubleClick" && (Wh.ondblclick = e), e = 0; e < t.length; e++)
        Yr.add(t[e]);
    }
    function wl(e, t) {
      Cf[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || console.error(
        e === "select" ? "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set `onChange`." : "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."
      ), t.onChange || t.readOnly || t.disabled || t.checked == null || console.error(
        "You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`."
      );
    }
    function Da(e) {
      return In.call(qr, e) ? !0 : In.call(Fh, e) ? !1 : Xv.test(e) ? qr[e] = !0 : (Fh[e] = !0, console.error("Invalid attribute name: `%s`", e), !1);
    }
    function fd(e, t, a) {
      if (Da(t)) {
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
        return e = e.getAttribute(t), e === "" && a === !0 ? !0 : (_t(a, t), e === "" + a ? a : e);
      }
    }
    function Ac(e, t, a) {
      if (Da(t))
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
          _t(a, t), e.setAttribute(t, "" + a);
        }
    }
    function us(e, t, a) {
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
        _t(a, t), e.setAttribute(t, "" + a);
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
        _t(i, a), e.setAttributeNS(t, a, "" + i);
      }
    }
    function Ra(e) {
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
    function sd(e) {
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
    function rd(e) {
      if (!e._valueTracker) {
        var t = sd(e) ? "checked" : "value";
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
      return e && (i = sd(e) ? e.checked ? "true" : "false" : e.value), e = i, e !== a ? (t.setValue(e), !0) : !1;
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
      t.checked === void 0 || t.defaultChecked === void 0 || Gr || (console.error(
        "%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",
        ta() || "A component",
        t.type
      ), Gr = !0), t.value === void 0 || t.defaultValue === void 0 || Lv || (console.error(
        "%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",
        ta() || "A component",
        t.type
      ), Lv = !0);
    }
    function is(e, t, a, i, o, f, d, h) {
      e.name = "", d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" ? (_t(d, "type"), e.type = d) : e.removeAttribute("type"), t != null ? d === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Ra(t)) : e.value !== "" + Ra(t) && (e.value = "" + Ra(t)) : d !== "submit" && d !== "reset" || e.removeAttribute("value"), t != null ? Hm(e, d, Ra(t)) : a != null ? Hm(e, d, Ra(a)) : i != null && e.removeAttribute("value"), o == null && f != null && (e.defaultChecked = !!f), o != null && (e.checked = o && typeof o != "function" && typeof o != "symbol"), h != null && typeof h != "function" && typeof h != "symbol" && typeof h != "boolean" ? (_t(h, "name"), e.name = "" + Ra(h)) : e.removeAttribute("name");
    }
    function U0(e, t, a, i, o, f, d, h) {
      if (f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (_t(f, "type"), e.type = f), t != null || a != null) {
        if (!(f !== "submit" && f !== "reset" || t != null)) {
          rd(e);
          return;
        }
        a = a != null ? "" + Ra(a) : "", t = t != null ? "" + Ra(t) : a, h || t === e.value || (e.value = t), e.defaultValue = t;
      }
      i = i ?? o, i = typeof i != "function" && typeof i != "symbol" && !!i, e.checked = h ? e.checked : !!i, e.defaultChecked = !!i, d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" && (_t(d, "name"), e.name = d), rd(e);
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
      var e = ta();
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
        for (a = "" + Ra(a), t = null, o = 0; o < e.length; o++) {
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
      for (e = 0; e < s.length; e++) {
        var a = s[e];
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
      t.value === void 0 || t.defaultValue === void 0 || r || (console.error(
        "%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://react.dev/link/controlled-components",
        ta() || "A component"
      ), r = !0), t.children != null && t.value == null && console.error(
        "Use the `defaultValue` or `value` props instead of setting children on <textarea>."
      );
    }
    function qo(e, t, a) {
      if (t != null && (t = "" + Ra(t), t !== e.value && (e.value = t), a == null)) {
        e.defaultValue !== t && (e.defaultValue = t);
        return;
      }
      e.defaultValue = a != null ? "" + Ra(a) : "";
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
      a = Ra(t), e.defaultValue = a, i = e.textContent, i === a && i !== "" && i !== null && (e.value = i), rd(e);
    }
    function Tl(e, t) {
      return e.serverProps === void 0 && e.serverTail.length === 0 && e.children.length === 1 && 3 < e.distanceFromLeaf && e.distanceFromLeaf > 15 - t ? Tl(e.children[0], t) : e;
    }
    function Ma(e) {
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
    function cs(e, t) {
      return m.test(e) ? (e = JSON.stringify(e), e.length > t - 2 ? 8 > t ? '{"..."}' : "{" + e.slice(0, t - 7) + '..."}' : "{" + e + "}") : e.length > t ? 5 > t ? '{"..."}' : e.slice(0, t - 3) + "..." : e;
    }
    function os(e, t, a) {
      var i = 120 - 2 * a;
      if (t === null)
        return Rc(a) + cs(e, i) + `
`;
      if (typeof t == "string") {
        for (var o = 0; o < t.length && o < e.length && t.charCodeAt(o) === e.charCodeAt(o); o++) ;
        return o > i - 8 && 10 < o && (e = "..." + e.slice(o - 8), t = "..." + t.slice(o - 8)), Rc(a) + cs(e, i) + `
` + Fa(a) + cs(t, i) + `
`;
      }
      return Ma(a) + cs(e, i) + `
`;
    }
    function dd(e) {
      return Object.prototype.toString.call(e).replace(/^\[object (.*)\]$/, function(t, a) {
        return a;
      });
    }
    function fs(e, t) {
      switch (typeof e) {
        case "string":
          return e = JSON.stringify(e), e.length > t ? 5 > t ? '"..."' : e.slice(0, t - 4) + '..."' : e;
        case "object":
          if (e === null) return "null";
          if (Ol(e)) return "[...]";
          if (e.$$typeof === Un)
            return (t = Fe(e.type)) ? "<" + t + ">" : "<...>";
          var a = dd(e);
          if (a === "Object") {
            a = "", t -= 2;
            for (var i in e)
              if (e.hasOwnProperty(i)) {
                var o = JSON.stringify(i);
                if (o !== '"' + i + '"' && (i = o), t -= i.length - 2, o = fs(
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
      return typeof e != "string" || m.test(e) ? "{" + fs(e, t - 2) + "}" : e.length > t - 2 ? 5 > t ? '"..."' : '"' + e.slice(0, t - 5) + '..."' : '"' + e + '"';
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
      var i = "", o = Ve({}, t), f;
      for (f in e)
        if (e.hasOwnProperty(f)) {
          delete o[f];
          var d = 120 - 2 * a - f.length - 2, h = fs(e[f], d);
          t.hasOwnProperty(f) ? (d = fs(t[f], d), i += Rc(a) + f + ": " + h + `
`, i += Fa(a) + f + ": " + d + `
`) : i += Rc(a) + f + ": " + h + `
`;
        }
      for (var y in o)
        o.hasOwnProperty(y) && (e = fs(
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
          Ma(i)
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
              ), typeof p == "object" && p !== null && typeof y == "object" && y !== null && dd(p) === "Object" && dd(y) === "Object" && (2 < Object.keys(p).length || 2 < Object.keys(y).length || -1 < _.indexOf("...") || -1 < h.indexOf("...")) ? o += Ma(i + 1) + d + `={{
` + oi(
                p,
                y,
                i + 2
              ) + Ma(i + 1) + `}}
` : (o += Rc(i + 1) + d + "=" + _ + `
`, o += Fa(i + 1) + d + "=" + h + `
`);
            } else
              o += Ma(i + 1) + d + "=" + ci(t[d], h) + `
`;
          }
        f.forEach(function(R) {
          if (R !== "children") {
            var b = 120 - 2 * (i + 1) - R.length - 1;
            o += Fa(i + 1) + R + "=" + ci(a[R], b) + `
`;
          }
        }), o = o === "" ? Ma(i) + "<" + e + `>
` : Ma(i) + "<" + e + `
` + o + Ma(i) + `>
`;
      }
      return e = a.children, t = t.children, typeof e == "string" || typeof e == "number" || typeof e == "bigint" ? (f = "", (typeof t == "string" || typeof t == "number" || typeof t == "bigint") && (f = "" + t), o += os(f, "" + e, i + 1)) : (typeof t == "string" || typeof t == "number" || typeof t == "bigint") && (o = e == null ? o + os("" + t, null, i + 1) : o + os("" + t, void 0, i + 1)), o;
    }
    function Bm(e, t) {
      var a = Mc(e);
      if (a === null) {
        for (a = "", e = e.child; e; )
          a += Bm(e, t), e = e.sibling;
        return a;
      }
      return Ma(t) + "<" + a + `>
`;
    }
    function xm(e, t) {
      var a = Tl(e, t);
      if (a !== e && (e.children.length !== 1 || e.children[0] !== a))
        return Ma(t) + `...
` + xm(a, t + 1);
      a = "";
      var i = e.fiber._debugInfo;
      if (i)
        for (var o = 0; o < i.length; o++) {
          var f = i[o].name;
          typeof f == "string" && (a += Ma(t) + "<" + f + `>
`, t++);
        }
      if (i = "", o = e.fiber.pendingProps, e.fiber.tag === 6)
        i = os(o, e.serverProps, t), t++;
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
          i = Ma(i) + "<" + f + h + `>
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
      for (o && 0 < e.children.length && (p += Ma(t) + `...
`), o = e.serverTail, e.serverProps === null && t--, e = 0; e < o.length; e++)
        f = o[e], p = typeof f == "string" ? p + (Fa(t) + cs(f, 120 - 2 * t) + `
`) : p + Go(
          f.type,
          f.props,
          Fa(t)
        );
      return a + i + p;
    }
    function ss(e) {
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
      return o !== null ? ss(o).replaceAll(/^[+-]/gm, ">") : "";
    }
    function rs(e, t) {
      var a = Ve({}, e || W), i = { tag: t };
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
          return V.indexOf(t) === -1;
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
      i || (-1 < t.indexOf("-") ? J.hasOwnProperty(t) && J[t] || (J[t] = !0, console.error(
        "Unsupported style property %s. Did you mean %s?",
        t,
        N0(t.replace(C, "ms-"))
      )) : Bt.test(t) ? J.hasOwnProperty(t) && J[t] || (J[t] = !0, console.error(
        "Unsupported vendor-prefixed style property %s. Did you mean %s?",
        t,
        t.charAt(0).toUpperCase() + t.slice(1)
      )) : !H.test(a) || Se.hasOwnProperty(a) && Se[a] || (Se[a] = !0, console.error(
        `Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`,
        t,
        a.replace(H, "")
      )), typeof a == "number" && (isNaN(a) ? yt || (yt = !0, console.error(
        "`NaN` is an invalid value for the `%s` css style property.",
        t
      )) : isFinite(a) || pe || (pe = !0, console.error(
        "`Infinity` is an invalid value for the `%s` css style property.",
        t
      )))), a == null || typeof a == "boolean" || a === "" ? i ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : i ? e.setProperty(t, a) : typeof a != "number" || a === 0 || Qe.has(t) ? t === "float" ? e.cssFloat = a : (Gl(a, t), e[t] = ("" + a).trim()) : e[t] = a + "px";
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
    function ds(e) {
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
      if (In.call(rn, t) && rn[t])
        return !0;
      var o = t.toLowerCase();
      if (o === "onfocusin" || o === "onfocusout")
        return console.error(
          "React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."
        ), rn[t] = !0;
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
          ), rn[t] = !0;
        if (T1.test(t))
          return console.error(
            "Unknown event handler property `%s`. It will be ignored.",
            t
          ), rn[t] = !0;
      } else if (T1.test(t))
        return FE.test(t) && console.error(
          "Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.",
          t
        ), rn[t] = !0;
      if (IE.test(t) || PE.test(t)) return !0;
      if (o === "innerhtml")
        return console.error(
          "Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."
        ), rn[t] = !0;
      if (o === "aria")
        return console.error(
          "The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."
        ), rn[t] = !0;
      if (o === "is" && a !== null && a !== void 0 && typeof a != "string")
        return console.error(
          "Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.",
          typeof a
        ), rn[t] = !0;
      if (typeof a == "number" && isNaN(a))
        return console.error(
          "Received NaN for the `%s` attribute. If this is expected, cast the value to a string.",
          t
        ), rn[t] = !0;
      if (Ih.hasOwnProperty(o)) {
        if (o = Ih[o], o !== t)
          return console.error(
            "Invalid DOM property `%s`. Did you mean `%s`?",
            t,
            o
          ), rn[t] = !0;
      } else if (t !== o)
        return console.error(
          "React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.",
          t,
          o
        ), rn[t] = !0;
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
              ), rn[t] = !0);
          }
        case "function":
        case "symbol":
          return rn[t] = !0, !1;
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
            ), rn[t] = !0;
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
    function Xl() {
    }
    function hs(e) {
      return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
    }
    function yd(e) {
      var t = le(e);
      if (t && (e = t.stateNode)) {
        var a = e[sa] || null;
        e: switch (e = t.stateNode, t.type) {
          case "input":
            if (is(
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
              for (_t(t, "name"), a = a.querySelectorAll(
                'input[name="' + Zt(
                  "" + t
                ) + '"][type="radio"]'
              ), t = 0; t < a.length; t++) {
                var i = a[t];
                if (i !== e && i.form === e.form) {
                  var o = i[sa] || null;
                  if (!o)
                    throw Error(
                      "ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported."
                    );
                  is(
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
      var i = a[sa] || null;
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
      var e, t = sS, a = t.length, i, o = "value" in Uf ? Uf.value : Uf.textContent, f = o.length;
      for (e = 0; e < a && t[e] === o[e]; e++) ;
      var d = a - e;
      for (i = 1; i <= d && t[a - i] === o[f - i]; i++) ;
      return Vv = o.slice(e, 1 < i ? 1 - i : void 0);
    }
    function Xo(e) {
      var t = e.keyCode;
      return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
    }
    function ms() {
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
        return this.isDefaultPrevented = (f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === !1) ? ms : Qo, this.isPropagationStopped = Qo, this;
      }
      return Ve(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = ms);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = ms);
        },
        persist: function() {
        },
        isPersistent: ms
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
        return e === "compositionend" || !mS && fi(e, t) ? (e = wm(), Vv = sS = Uf = null, lm = !1, e) : null;
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
    function ys(e) {
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
    function Ca(e) {
      Xa(e, 0);
    }
    function su(e) {
      var t = re(e);
      if (ii(t)) return e;
    }
    function ps(e, t) {
      if (e === "change") return t;
    }
    function Lo() {
      Gp && (Gp.detachEvent("onpropertychange", j0), wp = Gp = null);
    }
    function j0(e) {
      if (e.propertyName === "value" && su(wp)) {
        var t = [];
        Qm(
          t,
          wp,
          e,
          hs(e)
        ), Uc(Ca, t);
      }
    }
    function Lm(e, t, a) {
      e === "focusin" ? (Lo(), Gp = t, wp = a, Gp.attachEvent("onpropertychange", j0)) : e === "focusout" && Lo();
    }
    function Vm(e) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return su(wp);
    }
    function vs(e, t) {
      if (e === "click") return su(t);
    }
    function Sd(e, t) {
      if (e === "input" || e === "change")
        return su(t);
    }
    function Y0(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    function gs(e, t) {
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
      }), Xp && gs(Xp, i) || (Xp = i, i = Xu(yS, "onSelect"), 0 < i.length && (t = new Zv(
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
      Y1.set(e, t), ft(t, [e]);
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
        In.call(e, o) && o[0] !== "_" && ru(o, e[o], t, a, i);
    }
    function ru(e, t, a, i, o) {
      switch (typeof t) {
        case "object":
          if (t === null) {
            t = "null";
            break;
          } else {
            if (t.$$typeof === Un) {
              var f = Fe(t.type) || "…", d = t.key;
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
              ]), d !== null && ru(
                "key",
                d,
                a,
                i + 1,
                o
              ), e = !1;
              for (var p in t)
                p === "children" ? t.children != null && (!Ol(t.children) || 0 < t.children.length) && (e = !0) : In.call(t, p) && p[0] !== "_" && ru(
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
                  f = t[e], ru(
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
                if (f = a.length, ru(
                  e,
                  t.value,
                  a,
                  i,
                  o
                ), a.length > f) {
                  a = a[f], a[1] = "Promise<" + (a[1] || "Object") + ">";
                  return;
                }
              } else if (t.status === "rejected" && (f = a.length, ru(
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
                      d = Fe(h.type) || "…", o = "  ".repeat(i) + f, d = "<" + d + " … />", a.push(
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
              ru(f, d, a, i, $v), ru(f, h, a, i, kv);
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
      ht = e & 63 ? "Blocking" : e & 64 ? "Gesture" : e & 4194176 ? "Transition" : e & 62914560 ? "Suspense" : e & 2080374784 ? "Idle" : "Other";
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
      var f = se(e);
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
        var o = se(e);
        if (o !== null) {
          for (var f = null, d = [], h = 0; h < i.length; h++) {
            var y = i[h];
            f == null && y.source !== null && (f = y.source._debugTask), y = y.value, d.push([
              "Error",
              typeof y == "object" && y !== null && typeof y.message == "string" ? String(y.message) : String(y)
            ]);
          }
          e.key !== null && ru("key", e.key, d, 0, ""), e.memoizedProps !== null && Jm(e.memoizedProps, d, 0, ""), f == null && (f = e._debugTask), e = {
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
          var f = se(e);
          if (f !== null) {
            i = [];
            for (var d = 0; d < o.length; d++) {
              var h = o[d].value;
              i.push([
                "Error",
                typeof h == "object" && h !== null && typeof h.message == "string" ? String(h.message) : String(h)
              ]);
            }
            e.key !== null && ru("key", e.key, i, 0, ""), e.memoizedProps !== null && Jm(e.memoizedProps, i, 0, ""), t = {
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
        f = se(e), f !== null && Ft && (o = 1 > i ? "secondary-light" : 100 > i ? "secondary" : 500 > i ? "secondary-dark" : "error", (e = e._debugTask) ? e.run(
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
            ht,
            rt,
            o
          )
        ) : console.timeStamp(
          a,
          e,
          t,
          ht,
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
          ht,
          rt,
          a
        )
      ) : console.timeStamp(
        "Prewarm",
        e,
        t,
        ht,
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
          ht,
          rt,
          a
        )
      ) : console.timeStamp(
        "Suspended",
        e,
        t,
        ht,
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
              track: ht,
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
          ht,
          rt,
          "error"
        )
      ) : console.timeStamp(
        "Errored",
        e,
        t,
        ht,
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
          ht,
          rt,
          "secondary-light"
        )
      ) : console.timeStamp(
        a,
        e,
        t,
        ht,
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
              track: ht,
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
        ht,
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
      return Vi(e, t, a, i), Ss(e);
    }
    function Ql(e, t) {
      return Vi(e, null, null, t), Ss(e);
    }
    function Wm(e, t, a) {
      e.lanes |= a;
      var i = e.alternate;
      i !== null && (i.lanes |= a);
      for (var o = !1, f = e.return; f !== null; )
        f.childLanes |= a, i = f.alternate, i !== null && (i.childLanes |= a), f.tag === 22 && (e = f.stateNode, e === null || e._visibility & Qp || (o = !0)), e = f, f = f.return;
      return e.tag === 3 ? (f = e.stateNode, o && t !== null && (o = 31 - Wl(a), e = f.hiddenUpdates, i = e[o], i === null ? e[o] = [t] : i.push(t), t.lane = a | 536870912), f) : null;
    }
    function Ss(e) {
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
        if (i = !1, y !== null && (y = ku(y), y !== void 0 && (a.has(y) ? i = !0 : t.has(y) && (h === 1 ? i = !0 : p = !0))), im !== null && (im.has(e) || o !== null && im.has(o)) && (i = !0), i && (e._debugNeedsRemount = !0), (i || p) && (o = Ql(e, 2), o !== null && ll(o, e, 2)), f === null || i || K0(
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
        d = P(), d = nt(e, a, d) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
      else
        e: switch (e) {
          case zp:
            return t = U(31, a, t, o), t.elementType = zp, t.lanes = f, t;
          case kl:
            return yu(
              a.children,
              o,
              f,
              t
            );
          case _f:
            d = 8, o |= Ka, o |= Ui;
            break;
          case Yh:
            return e = a, i = o, typeof e.id != "string" && console.error(
              'Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.',
              typeof e.id
            ), t = U(12, e, t, i | $e), t.elementType = Yh, t.lanes = f, t.stateNode = { effectDuration: 0, passiveEffectDuration: 0 }, t;
          case Ja:
            return t = U(13, a, t, o), t.elementType = Ja, t.lanes = f, t;
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
            h = "", (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (h += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), e === null ? a = "null" : Ol(e) ? a = "array" : e !== void 0 && e.$$typeof === Un ? (a = "<" + (Fe(e.type) || "Unknown") + " />", h = " Did you accidentally export a JSX literal instead of a component?") : a = typeof e, (d = i ? jt(i) : null) && (h += `

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
    function bs(e, t, a) {
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
    function ma(e, t) {
      if (typeof e == "object" && e !== null) {
        var a = OS.get(e);
        return a !== void 0 ? a : (t = {
          value: e,
          source: t,
          stack: Ie(t)
        }, OS.set(e, t), t);
      }
      return {
        value: e,
        source: t,
        stack: Ie(t)
      };
    }
    function pu(e, t) {
      Ji(), cm[om++] = Lp, cm[om++] = Wv, Wv = e, Lp = t;
    }
    function Im(e, t, a) {
      Ji(), Wu[Fu++] = bo, Wu[Fu++] = Eo, Wu[Fu++] = Xr, Xr = e;
      var i = bo;
      e = Eo;
      var o = 32 - Wl(i) - 1;
      i &= ~(1 << o), a += 1;
      var f = 32 - Wl(t) + o;
      if (30 < f) {
        var d = o - o % 5;
        f = (i & (1 << d) - 1).toString(32), i >>= d, o -= d, bo = 1 << 32 - Wl(t) + o | a << o | i, Eo = f + e;
      } else
        bo = 1 << f | a << o | i, Eo = e;
    }
    function Rd(e) {
      Ji(), e.return !== null && (pu(e, 1), Im(e, 1, 0));
    }
    function Pm(e) {
      for (; e === Wv; )
        Wv = cm[--om], cm[om] = null, Lp = cm[--om], cm[om] = null;
      for (; e === Xr; )
        Xr = Wu[--Fu], Wu[Fu] = null, Eo = Wu[--Fu], Wu[Fu] = null, bo = Wu[--Fu], Wu[Fu] = null;
    }
    function $0() {
      return Ji(), Xr !== null ? { id: bo, overflow: Eo } : null;
    }
    function k0(e, t) {
      Ji(), Wu[Fu++] = bo, Wu[Fu++] = Eo, Wu[Fu++] = Xr, bo = t.id, Eo = t.overflow, Xr = e;
    }
    function Ji() {
      ot || console.error(
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
    function Ua() {
      ot && console.error(
        "We should not be hydrating here. This is a bug in React. Please file a bug."
      );
    }
    function Ki(e, t) {
      gc || (e = Yc(e, 0), e.serverProps = null, t !== null && (t = Dv(t), e.serverTail.push(t)));
    }
    function si(e) {
      var t = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : !1, a = "", i = eu;
      throw i !== null && (eu = null, a = ss(i)), vu(
        ma(
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
      switch (t[Il] = e, t[sa] = i, rc(a, i), a) {
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
          wl("input", i), Ge("invalid", t), Oc(t, i), U0(
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
          wl("select", i), Ge("invalid", t), zc(t, i);
          break;
        case "textarea":
          wl("textarea", i), Ge("invalid", t), _c(t, i), Dc(
            t,
            i.value,
            i.defaultValue,
            i.children
          );
      }
      a = i.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || t.textContent === "" + a || i.suppressHydrationWarning === !0 || pr(t.textContent, a) ? (i.popover != null && (Ge("beforetoggle", t), Ge("toggle", t)), i.onScroll != null && Ge("scroll", t), i.onScrollEnd != null && Ge("scrollend", t), i.onClick != null && (t.onclick = Xl), t = !0) : t = !1, t || si(e, !0);
    }
    function ty(e) {
      for (za = e.return; za; )
        switch (za.tag) {
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
            za = za.return;
        }
    }
    function qc(e) {
      if (e !== za) return !1;
      if (!ot)
        return ty(e), ot = !0, !1;
      var t = e.tag, a;
      if ((a = t !== 3 && t !== 27) && ((a = t === 5) && (a = e.type, a = !(a !== "form" && a !== "button") || gr(e.type, e.memoizedProps)), a = !a), a && It) {
        for (a = It; a; ) {
          var i = Yc(e, 0), o = Dv(a);
          i.serverTail.push(o), a = o.type === "Suspense" ? hc(a) : on(a.nextSibling);
        }
        si(e);
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
        t === 27 ? (t = It, _i(e.type) ? (e = m1, m1 = null, It = e) : It = t) : It = za ? on(e.stateNode.nextSibling) : null;
      return !0;
    }
    function ri() {
      It = za = null, gc = ot = !1;
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
    function Es() {
      var e = eu;
      if (e !== null) {
        eu = null;
        for (var t = ss(e); 0 < e.children.length; )
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
      fm = Fv = null, sm = !1;
    }
    function gu(e, t, a) {
      Ue(_S, t._currentValue, e), t._currentValue = a, Ue(DS, t._currentRenderer, e), t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== V1 && console.error(
        "Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."
      ), t._currentRenderer = V1;
    }
    function Su(e, t) {
      e._currentValue = _S.current;
      var a = DS.current;
      Te(DS, t), e._currentRenderer = a, Te(_S, t);
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
        } else if (o === Cr.current) {
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
    function Ts(e) {
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
    function qt(e) {
      return sm && console.error(
        "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
      ), ay(Fv, e);
    }
    function As(e, t) {
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
    function Os(e) {
      e.refCount--, 0 > e.refCount && console.warn(
        "A cache instance was released after it was already freed. This likely indicates a bug in React."
      ), e.refCount === 0 && wT(XT, function() {
        e.controller.abort();
      });
    }
    function wn(e, t, a) {
      (e & 127) !== 0 ? 0 > Sc && (Sc = Hl(), Zp = Iv(t), RS = t, a != null && (MS = se(a)), (pt & (ea | au)) !== ha && (yl = !0, Yf = Vp), e = vf(), t = pf(), e !== rm || t !== Jp ? rm = -1.1 : t !== null && (Yf = Vp), Vr = e, Jp = t) : (e & 4194048) !== 0 && 0 > Pu && (Pu = Hl(), Kp = Iv(t), Z1 = t, a != null && (J1 = se(a)), 0 > zo) && (e = vf(), t = pf(), (e !== Gf || t !== Zr) && (Gf = -1.1), qf = e, Zr = t);
    }
    function W0(e) {
      if (0 > Sc) {
        Sc = Hl(), Zp = e._debugTask != null ? e._debugTask : null, (pt & (ea | au)) !== ha && (Yf = Vp);
        var t = vf(), a = pf();
        t !== rm || a !== Jp ? rm = -1.1 : a !== null && (Yf = Vp), Vr = t, Jp = a;
      }
      0 > Pu && (Pu = Hl(), Kp = e._debugTask != null ? e._debugTask : null, 0 > zo) && (e = vf(), t = pf(), (e !== Gf || t !== Zr) && (Gf = -1.1), qf = e, Zr = t);
    }
    function Xn() {
      var e = Qr;
      return Qr = 0, e;
    }
    function Ha(e) {
      var t = Qr;
      return Qr = e, t;
    }
    function Fi(e) {
      var t = Qr;
      return Qr += e, t;
    }
    function ya() {
      De = Ae = -1.1;
    }
    function Ml() {
      var e = Ae;
      return Ae = -1.1, e;
    }
    function pa(e) {
      0 <= e && (Ae = e);
    }
    function en() {
      var e = rl;
      return rl = -0, e;
    }
    function tn(e) {
      0 <= e && (rl = e);
    }
    function En() {
      var e = al;
      return al = null, e;
    }
    function la() {
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
        hn = -1, Qr += t, rl += t, De = e;
      }
    }
    function Na(e) {
      al === null && (al = []), al.push(e), Ao === null && (Ao = []), Ao.push(e);
    }
    function Tn() {
      hn = Hl(), 0 > Ae && (Ae = hn);
    }
    function ln(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function F0(e, t) {
      if (kp === null) {
        var a = kp = [];
        US = 0, Jr = mt(), dm = {
          status: "pending",
          value: void 0,
          then: function(i) {
            a.push(i);
          }
        };
      }
      return US++, t.then(zs, zs), t;
    }
    function zs() {
      if (--US === 0 && (-1 < Pu || (zo = -1.1), kp !== null)) {
        dm !== null && (dm.status = "fulfilled");
        var e = kp;
        kp = null, Jr = 0, dm = null;
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
    function _s() {
      var e = Kr.current;
      return e !== null ? e : Qt.pooledCache;
    }
    function Ds(e, t) {
      t === null ? Ue(Kr, Kr.current, e) : Ue(Kr, t.pool, e);
    }
    function Cd() {
      var e = _s();
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
      )), t.then(Xl, Xl), t = a), t._debugInfo === void 0) {
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
            t.then(Xl, Xl);
          else {
            if (e = Qt, e !== null && 100 < e.shellSuspendCounter)
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
          throw kr = t, l0 = !0, hm;
      }
    }
    function nn(e) {
      try {
        return JT(e);
      } catch (t) {
        throw t !== null && typeof t == "object" && typeof t.then == "function" ? (kr = t, l0 = !0, hm) : t;
      }
    }
    function Rs() {
      if (kr === null)
        throw Error(
          "Expected a suspended thenable. This is a bug in React. Please file an issue."
        );
      var e = kr;
      return kr = null, l0 = !1, e;
    }
    function Ko(e) {
      if (e === hm || e === ig)
        throw Error(
          "Hooks are not supported inside an async component. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server."
        );
    }
    function Ht(e) {
      var t = ke;
      return e != null && (ke = t === null ? e : t.concat(e)), t;
    }
    function Ba() {
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
    function xa(e, t) {
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
    function Ms(e, t) {
      var a = Ba();
      a !== null ? a.run(
        Eu.bind(null, e, t)
      ) : Eu(e, t);
    }
    function Ud(e, t) {
      var a = se(e) || "Component";
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
      var a = Ba();
      a !== null ? a.run(
        Ud.bind(null, e, t)
      ) : Ud(e, t);
    }
    function iy(e, t) {
      var a = se(e) || "Component";
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
      var a = Ba();
      a !== null ? a.run(
        iy.bind(null, e, t)
      ) : iy(e, t);
    }
    function Gt(e) {
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
      function h(S, E, z, Z) {
        return E === null || E.tag !== 6 ? (E = Dd(
          z,
          S.mode,
          Z
        ), E.return = S, E._debugOwner = S, E._debugTask = S._debugTask, E._debugInfo = ke, E) : (E = o(E, z), E.return = S, E._debugInfo = ke, E);
      }
      function y(S, E, z, Z) {
        var ie = z.type;
        return ie === kl ? (E = _(
          S,
          E,
          z.props.children,
          Z,
          z.key
        ), Qn(z, E, S), E) : E !== null && (E.elementType === ie || xc(E, z) || typeof ie == "object" && ie !== null && ie.$$typeof === ml && nn(ie) === E.type) ? (E = o(E, z.props), xa(E, z), E.return = S, E._debugOwner = z._owner, E._debugInfo = ke, E) : (E = _d(z, S.mode, Z), xa(E, z), E.return = S, E._debugInfo = ke, E);
      }
      function p(S, E, z, Z) {
        return E === null || E.tag !== 4 || E.stateNode.containerInfo !== z.containerInfo || E.stateNode.implementation !== z.implementation ? (E = bs(z, S.mode, Z), E.return = S, E._debugInfo = ke, E) : (E = o(E, z.children || []), E.return = S, E._debugInfo = ke, E);
      }
      function _(S, E, z, Z, ie) {
        return E === null || E.tag !== 7 ? (E = yu(
          z,
          S.mode,
          Z,
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
              ), xa(z, E), z.return = S, S = Ht(E._debugInfo), z._debugInfo = ke, ke = S, z;
            case zf:
              return E = bs(
                E,
                S.mode,
                z
              ), E.return = S, E._debugInfo = ke, E;
            case ml:
              var Z = Ht(E._debugInfo);
              return E = nn(E), S = R(S, E, z), ke = Z, S;
          }
          if (Ol(E) || bt(E))
            return z = yu(
              E,
              S.mode,
              z,
              null
            ), z.return = S, z._debugOwner = S, z._debugTask = S._debugTask, S = Ht(E._debugInfo), z._debugInfo = ke, ke = S, z;
          if (typeof E.then == "function")
            return Z = Ht(E._debugInfo), S = R(
              S,
              un(E),
              z
            ), ke = Z, S;
          if (E.$$typeof === Fn)
            return R(
              S,
              As(S, E),
              z
            );
          Ms(S, E);
        }
        return typeof E == "function" && $o(S, E), typeof E == "symbol" && gl(S, E), null;
      }
      function b(S, E, z, Z) {
        var ie = E !== null ? E.key : null;
        if (typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint")
          return ie !== null ? null : h(S, E, "" + z, Z);
        if (typeof z == "object" && z !== null) {
          switch (z.$$typeof) {
            case Un:
              return z.key === ie ? (ie = Ht(z._debugInfo), S = y(
                S,
                E,
                z,
                Z
              ), ke = ie, S) : null;
            case zf:
              return z.key === ie ? p(S, E, z, Z) : null;
            case ml:
              return ie = Ht(z._debugInfo), z = nn(z), S = b(
                S,
                E,
                z,
                Z
              ), ke = ie, S;
          }
          if (Ol(z) || bt(z))
            return ie !== null ? null : (ie = Ht(z._debugInfo), S = _(
              S,
              E,
              z,
              Z,
              null
            ), ke = ie, S);
          if (typeof z.then == "function")
            return ie = Ht(z._debugInfo), S = b(
              S,
              E,
              un(z),
              Z
            ), ke = ie, S;
          if (z.$$typeof === Fn)
            return b(
              S,
              E,
              As(S, z),
              Z
            );
          Ms(S, z);
        }
        return typeof z == "function" && $o(S, z), typeof z == "symbol" && gl(S, z), null;
      }
      function Y(S, E, z, Z, ie) {
        if (typeof Z == "string" && Z !== "" || typeof Z == "number" || typeof Z == "bigint")
          return S = S.get(z) || null, h(E, S, "" + Z, ie);
        if (typeof Z == "object" && Z !== null) {
          switch (Z.$$typeof) {
            case Un:
              return z = S.get(
                Z.key === null ? z : Z.key
              ) || null, S = Ht(Z._debugInfo), E = y(
                E,
                z,
                Z,
                ie
              ), ke = S, E;
            case zf:
              return S = S.get(
                Z.key === null ? z : Z.key
              ) || null, p(E, S, Z, ie);
            case ml:
              var xe = Ht(Z._debugInfo);
              return Z = nn(Z), E = Y(
                S,
                E,
                z,
                Z,
                ie
              ), ke = xe, E;
          }
          if (Ol(Z) || bt(Z))
            return z = S.get(z) || null, S = Ht(Z._debugInfo), E = _(
              E,
              z,
              Z,
              ie,
              null
            ), ke = S, E;
          if (typeof Z.then == "function")
            return xe = Ht(Z._debugInfo), E = Y(
              S,
              E,
              z,
              un(Z),
              ie
            ), ke = xe, E;
          if (Z.$$typeof === Fn)
            return Y(
              S,
              E,
              z,
              As(E, Z),
              ie
            );
          Ms(E, Z);
        }
        return typeof Z == "function" && $o(E, Z), typeof Z == "symbol" && gl(E, Z), null;
      }
      function ne(S, E, z, Z) {
        if (typeof z != "object" || z === null) return Z;
        switch (z.$$typeof) {
          case Un:
          case zf:
            de(S, E, z);
            var ie = z.key;
            if (typeof ie != "string") break;
            if (Z === null) {
              Z = /* @__PURE__ */ new Set(), Z.add(ie);
              break;
            }
            if (!Z.has(ie)) {
              Z.add(ie);
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
            z = nn(z), ne(S, E, z, Z);
        }
        return Z;
      }
      function oe(S, E, z, Z) {
        for (var ie = null, xe = null, Ee = null, ve = E, Ze = E = 0, Pt = null; ve !== null && Ze < z.length; Ze++) {
          ve.index > Ze ? (Pt = ve, ve = null) : Pt = ve.sibling;
          var Dl = b(
            S,
            ve,
            z[Ze],
            Z
          );
          if (Dl === null) {
            ve === null && (ve = Pt);
            break;
          }
          ie = ne(
            S,
            Dl,
            z[Ze],
            ie
          ), e && ve && Dl.alternate === null && t(S, ve), E = f(Dl, E, Ze), Ee === null ? xe = Dl : Ee.sibling = Dl, Ee = Dl, ve = Pt;
        }
        if (Ze === z.length)
          return a(S, ve), ot && pu(S, Ze), xe;
        if (ve === null) {
          for (; Ze < z.length; Ze++)
            ve = R(S, z[Ze], Z), ve !== null && (ie = ne(
              S,
              ve,
              z[Ze],
              ie
            ), E = f(
              ve,
              E,
              Ze
            ), Ee === null ? xe = ve : Ee.sibling = ve, Ee = ve);
          return ot && pu(S, Ze), xe;
        }
        for (ve = i(ve); Ze < z.length; Ze++)
          Pt = Y(
            ve,
            S,
            Ze,
            z[Ze],
            Z
          ), Pt !== null && (ie = ne(
            S,
            Pt,
            z[Ze],
            ie
          ), e && Pt.alternate !== null && ve.delete(
            Pt.key === null ? Ze : Pt.key
          ), E = f(
            Pt,
            E,
            Ze
          ), Ee === null ? xe = Pt : Ee.sibling = Pt, Ee = Pt);
        return e && ve.forEach(function(No) {
          return t(S, No);
        }), ot && pu(S, Ze), xe;
      }
      function Kt(S, E, z, Z) {
        if (z == null)
          throw Error("An iterable object provided no iterator.");
        for (var ie = null, xe = null, Ee = E, ve = E = 0, Ze = null, Pt = null, Dl = z.next(); Ee !== null && !Dl.done; ve++, Dl = z.next()) {
          Ee.index > ve ? (Ze = Ee, Ee = null) : Ze = Ee.sibling;
          var No = b(S, Ee, Dl.value, Z);
          if (No === null) {
            Ee === null && (Ee = Ze);
            break;
          }
          Pt = ne(
            S,
            No,
            Dl.value,
            Pt
          ), e && Ee && No.alternate === null && t(S, Ee), E = f(No, E, ve), xe === null ? ie = No : xe.sibling = No, xe = No, Ee = Ze;
        }
        if (Dl.done)
          return a(S, Ee), ot && pu(S, ve), ie;
        if (Ee === null) {
          for (; !Dl.done; ve++, Dl = z.next())
            Ee = R(S, Dl.value, Z), Ee !== null && (Pt = ne(
              S,
              Ee,
              Dl.value,
              Pt
            ), E = f(
              Ee,
              E,
              ve
            ), xe === null ? ie = Ee : xe.sibling = Ee, xe = Ee);
          return ot && pu(S, ve), ie;
        }
        for (Ee = i(Ee); !Dl.done; ve++, Dl = z.next())
          Ze = Y(
            Ee,
            S,
            ve,
            Dl.value,
            Z
          ), Ze !== null && (Pt = ne(
            S,
            Ze,
            Dl.value,
            Pt
          ), e && Ze.alternate !== null && Ee.delete(
            Ze.key === null ? ve : Ze.key
          ), E = f(
            Ze,
            E,
            ve
          ), xe === null ? ie = Ze : xe.sibling = Ze, xe = Ze);
        return e && Ee.forEach(function(pA) {
          return t(S, pA);
        }), ot && pu(S, ve), ie;
      }
      function dt(S, E, z, Z) {
        if (typeof z == "object" && z !== null && z.type === kl && z.key === null && (Qn(z, null, S), z = z.props.children), typeof z == "object" && z !== null) {
          switch (z.$$typeof) {
            case Un:
              var ie = Ht(z._debugInfo);
              e: {
                for (var xe = z.key; E !== null; ) {
                  if (E.key === xe) {
                    if (xe = z.type, xe === kl) {
                      if (E.tag === 7) {
                        a(
                          S,
                          E.sibling
                        ), Z = o(
                          E,
                          z.props.children
                        ), Z.return = S, Z._debugOwner = z._owner, Z._debugInfo = ke, Qn(z, Z, S), S = Z;
                        break e;
                      }
                    } else if (E.elementType === xe || xc(
                      E,
                      z
                    ) || typeof xe == "object" && xe !== null && xe.$$typeof === ml && nn(xe) === E.type) {
                      a(
                        S,
                        E.sibling
                      ), Z = o(E, z.props), xa(Z, z), Z.return = S, Z._debugOwner = z._owner, Z._debugInfo = ke, S = Z;
                      break e;
                    }
                    a(S, E);
                    break;
                  } else t(S, E);
                  E = E.sibling;
                }
                z.type === kl ? (Z = yu(
                  z.props.children,
                  S.mode,
                  Z,
                  z.key
                ), Z.return = S, Z._debugOwner = S, Z._debugTask = S._debugTask, Z._debugInfo = ke, Qn(z, Z, S), S = Z) : (Z = _d(
                  z,
                  S.mode,
                  Z
                ), xa(Z, z), Z.return = S, Z._debugInfo = ke, S = Z);
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
                      ), Z = o(
                        E,
                        ie.children || []
                      ), Z.return = S, S = Z;
                      break e;
                    } else {
                      a(S, E);
                      break;
                    }
                  else t(S, E);
                  E = E.sibling;
                }
                Z = bs(
                  ie,
                  S.mode,
                  Z
                ), Z.return = S, S = Z;
              }
              return d(S);
            case ml:
              return ie = Ht(z._debugInfo), z = nn(z), S = dt(
                S,
                E,
                z,
                Z
              ), ke = ie, S;
          }
          if (Ol(z))
            return ie = Ht(z._debugInfo), S = oe(
              S,
              E,
              z,
              Z
            ), ke = ie, S;
          if (bt(z)) {
            if (ie = Ht(z._debugInfo), xe = bt(z), typeof xe != "function")
              throw Error(
                "An object is not an iterable. This error is likely caused by a bug in React. Please file an issue."
              );
            var Ee = xe.call(z);
            return Ee === z ? (S.tag !== 0 || Object.prototype.toString.call(S.type) !== "[object GeneratorFunction]" || Object.prototype.toString.call(Ee) !== "[object Generator]") && (sb || console.error(
              "Using Iterators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. You can also use an Iterable that can iterate multiple times over the same items."
            ), sb = !0) : z.entries !== xe || xS || (console.error(
              "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
            ), xS = !0), S = Kt(
              S,
              E,
              Ee,
              Z
            ), ke = ie, S;
          }
          if (typeof z.then == "function")
            return ie = Ht(z._debugInfo), S = dt(
              S,
              E,
              un(z),
              Z
            ), ke = ie, S;
          if (z.$$typeof === Fn)
            return dt(
              S,
              E,
              As(S, z),
              Z
            );
          Ms(S, z);
        }
        return typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint" ? (ie = "" + z, E !== null && E.tag === 6 ? (a(
          S,
          E.sibling
        ), Z = o(E, ie), Z.return = S, S = Z) : (a(S, E), Z = Dd(
          ie,
          S.mode,
          Z
        ), Z.return = S, Z._debugOwner = S, Z._debugTask = S._debugTask, Z._debugInfo = ke, S = Z), d(S)) : (typeof z == "function" && $o(S, z), typeof z == "symbol" && gl(S, z), a(S, E));
      }
      return function(S, E, z, Z) {
        var ie = ke;
        ke = null;
        try {
          a0 = 0;
          var xe = dt(
            S,
            E,
            z,
            Z
          );
          return mm = null, xe;
        } catch (Pt) {
          if (Pt === hm || Pt === ig) throw Pt;
          var Ee = U(29, Pt, null, S.mode);
          Ee.lanes = Z, Ee.return = S;
          var ve = Ee._debugInfo = ke;
          if (Ee._debugOwner = S._debugOwner, Ee._debugTask = S._debugTask, ve != null) {
            for (var Ze = ve.length - 1; 0 <= Ze; Ze--)
              if (typeof ve[Ze].stack == "string") {
                Ee._debugOwner = ve[Ze], Ee._debugTask = ve[Ze].debugTask;
                break;
              }
          }
          return Ee;
        } finally {
          ke = ie;
        }
      };
    }
    function it(e, t) {
      var a = Ol(e);
      return e = !a && typeof bt(e) == "function", a || e ? (a = a ? "array" : "iterable", console.error(
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
    function ja(e, t) {
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
    function va(e, t, a) {
      var i = e.updateQueue;
      if (i === null) return null;
      if (i = i.shared, YS === i && !gb) {
        var o = se(e);
        console.error(
          `An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback.

Please update the following component: %s`,
          o
        ), gb = !0;
      }
      return (pt & ea) !== ha ? (o = i.pending, o === null ? t.next = t : (t.next = o.next, o.next = t), i.pending = t, t = Ss(e), Wm(e, null, a), t) : (Vi(e, i, t, a), Ss(e));
    }
    function ko(e, t, a) {
      if (t = t.updateQueue, t !== null && (t = t.shared, (a & 4194048) !== 0)) {
        var i = t.lanes;
        i &= e.pendingLanes, a |= i, t.lanes = a, ns(e, a);
      }
    }
    function Cs(e, t) {
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
            b !== 0 && b === Jr && (qS = !0), _ !== null && (_ = _.next = {
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
                    sm = !0;
                    var dt = ne.call(
                      Kt,
                      R,
                      oe
                    );
                    if (b.mode & Ka) {
                      me(!0);
                      try {
                        ne.call(Kt, R, oe);
                      } finally {
                        me(!1);
                      }
                    }
                    sm = !1, R = dt;
                    break e;
                  }
                  R = ne;
                  break e;
                case jS:
                  b.flags = b.flags & -65537 | 128;
                case yb:
                  if (dt = ne.payload, typeof dt == "function") {
                    if (sm = !0, ne = dt.call(
                      Kt,
                      R,
                      oe
                    ), b.mode & Ka) {
                      me(!0);
                      try {
                        dt.call(Kt, R, oe);
                      } finally {
                        me(!1);
                      }
                    }
                    sm = !1;
                  } else ne = dt;
                  if (ne == null) break e;
                  R = Ve({}, R, ne);
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
    function Us(e, t) {
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
      Ec = og.current, Te(ym, e), Te(og, e);
    }
    function aa(e) {
      var t = e.alternate;
      Ue(
        _l,
        _l.current & pm,
        e
      ), Ue(tu, e, e), ei === null && (t === null || ym.current !== null || t.memoizedState !== null) && (ei = e);
    }
    function Hs(e) {
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
    function na(e) {
      Te(tu, e), ei === e && (ei = null), Te(_l, e);
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
        var t = se(Be);
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
      var e = se(Be);
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
      _o = f, Be = t, li = e !== null ? e._debugHookTypes : null, Ro = -1, i0 = e !== null && e.type !== t.type, (Object.prototype.toString.call(a) === "[object AsyncFunction]" || Object.prototype.toString.call(a) === "[object AsyncGeneratorFunction]") && (f = se(Be), GS.has(f) || (GS.add(f), console.error(
        "%s is an async Client Component. Only Server Components can be async at the moment. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.",
        f === null ? "An unknown Component" : "<" + f + ">"
      ))), t.memoizedState = null, t.updateQueue = null, t.lanes = 0, w.H = e !== null && e.memoizedState !== null ? XS : li !== null ? Tb : wS, Fr = f = (t.mode & Ka) !== Ce;
      var d = HS(a, i, o);
      if (Fr = !1, gm && (d = Vc(
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
      var a = Xt !== null && Xt.next !== null;
      if (_o = 0, li = q = Nl = Xt = Be = null, Ro = -1, e !== null && (e.flags & 65011712) !== (t.flags & 65011712) && console.error(
        "Internal React error: Expected static flag was missing. Please notify the React team."
      ), sg = !1, u0 = 0, Do = null, a)
        throw Error(
          "Rendered fewer hooks than expected. This may be caused by an accidental early return statement."
        );
      e === null || Bl || (e = e.dependencies, e !== null && Ts(e) && (Bl = !0)), l0 ? (l0 = !1, e = !0) : e = !1, e && (t = se(t) || "Unknown", bb.has(t) || GS.has(t) || (bb.add(t), console.error(
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
        if (o += 1, i0 = !1, Nl = Xt = null, e.updateQueue != null) {
          var f = e.updateQueue;
          f.lastEffect = null, f.events = null, f.stores = null, f.memoCache != null && (f.memoCache.index = 0);
        }
        Ro = -1, w.H = Ab, f = HS(t, a, i);
      } while (gm);
      return f;
    }
    function Ns() {
      var e = w.H, t = e.useState()[0];
      return t = typeof t.then == "function" ? Wo(t) : t, e = e.useState()[0], (Xt !== null ? Xt.memoizedState : null) !== e && (Be.flags |= 1024), t;
    }
    function Bs() {
      var e = rg !== 0;
      return rg = 0, e;
    }
    function Pi(e, t, a) {
      t.updateQueue = e.updateQueue, t.flags = (t.mode & Ui) !== Ce ? t.flags & -402655237 : t.flags & -2053, e.lanes &= ~a;
    }
    function ec(e) {
      if (sg) {
        for (e = e.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        sg = !1;
      }
      _o = 0, li = Nl = Xt = Be = null, Ro = -1, q = null, gm = !1, u0 = rg = 0, Do = null;
    }
    function ga() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return Nl === null ? Be.memoizedState = Nl = e : Nl = Nl.next = e, Nl;
    }
    function At() {
      if (Xt === null) {
        var e = Be.alternate;
        e = e !== null ? e.memoizedState : null;
      } else e = Xt.next;
      var t = Nl === null ? Be.memoizedState : Nl.next;
      if (t !== null)
        Nl = t, Xt = e;
      else {
        if (e === null)
          throw Be.alternate === null ? Error(
            "Update hook called on initial render. This is likely a bug in React. Please file an issue."
          ) : Error("Rendered more hooks than during the previous render.");
        Xt = e, e = {
          memoizedState: Xt.memoizedState,
          baseState: Xt.baseState,
          baseQueue: Xt.baseQueue,
          queue: Xt.queue,
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
    function Ya(e) {
      if (e !== null && typeof e == "object") {
        if (typeof e.then == "function") return Wo(e);
        if (e.$$typeof === Fn) return qt(e);
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
    function qa(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function qd(e, t, a) {
      var i = ga();
      if (a !== void 0) {
        var o = a(t);
        if (Fr) {
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
      var t = At();
      return xs(t, Xt, e);
    }
    function xs(e, t, a) {
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
              }), R === Jr && (_ = !0);
            else if ((_o & b) === b) {
              p = p.next, b === Jr && (_ = !0);
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
            R = p.action, Fr && a(f, R), f = p.hasEagerState ? p.eagerState : a(f, R);
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
      var t = At(), a = t.queue;
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
      var i = Be, o = ga();
      if (ot) {
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
        ), vm = !0)), Qt === null)
          throw Error(
            "Expected a work-in-progress root. This is a bug in React. Please file an issue."
          );
        (We & 127) !== 0 || oy(i, t, f);
      }
      return o.memoizedState = f, a = { value: f, getSnapshot: t }, o.queue = a, ws(
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
    function js(e, t, a) {
      var i = Be, o = At(), f = ot;
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
        (Xt || o).memoizedState,
        a
      )) && (o.memoizedState = a, Bl = !0), o = o.queue;
      var h = ac.bind(null, i, o, e);
      if (Ll(2048, yn, h, [e]), o.getSnapshot !== t || d || Nl !== null && Nl.memoizedState.tag & ti) {
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
        ), Qt === null)
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
      t.value = a, t.getSnapshot = i, fy(t) && sy(e);
    }
    function ac(e, t, a) {
      return a(function() {
        fy(t) && (wn(2, "updateSyncExternalStore()", e), sy(e));
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
    function sy(e) {
      var t = Ql(e, 2);
      t !== null && ll(t, e, 2);
    }
    function nc(e) {
      var t = ga();
      if (typeof e == "function") {
        var a = e;
        if (e = a(), Fr) {
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
        lastRenderedReducer: qa,
        lastRenderedState: e
      }, t;
    }
    function Zc(e) {
      e = nc(e);
      var t = e.queue, a = Zd.bind(null, Be, t);
      return t.dispatch = a, [e.memoizedState, a];
    }
    function Io(e) {
      var t = ga();
      t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = a, t = Vl.bind(
        null,
        Be,
        !0,
        a
      ), a.dispatch = t, [e, t];
    }
    function Po(e, t) {
      var a = At();
      return Ys(a, Xt, e, t);
    }
    function Ys(e, t, a, i) {
      return e.baseState = a, xs(
        e,
        Xt,
        typeof i == "function" ? i : qa
      );
    }
    function ry(e, t) {
      var a = At();
      return Xt !== null ? Ys(a, Xt, e, t) : (a.baseState = e, [e, a.queue.dispatch]);
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
          qs(e, t, p);
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
          qs(e, t, p);
        }
    }
    function mi(e, t, a) {
      a !== null && typeof a == "object" && typeof a.then == "function" ? (w.asyncTransitions++, a.then(gi, gi), a.then(
        function(i) {
          Gd(e, t, i);
        },
        function(i) {
          return qs(e, t, i);
        }
      ), t.isTransition || console.error(
        "An async function with useActionState was called outside of a transition. This is likely not what you intended (for example, isPending will not update correctly). Either call the returned function inside startTransition, or pass it to an `action` or `formAction` prop."
      )) : Gd(e, t, a);
    }
    function Gd(e, t, a) {
      t.status = "fulfilled", t.value = a, yi(t), e.state = a, t = e.pending, t !== null && (a = t.next, a === t ? e.pending = null : (a = a.next, t.next = a, dy(e, a)));
    }
    function qs(e, t, a) {
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
      if (ot) {
        var a = Qt.formState;
        if (a !== null) {
          e: {
            var i = Be;
            if (ot) {
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
                  f = o.data, o = f === s1 || f === oE ? o : null;
                }
                if (o) {
                  It = on(
                    o.nextSibling
                  ), i = o.data === s1;
                  break e;
                }
              }
              si(i);
            }
            i = !1;
          }
          i && (t = a[0]);
        }
      }
      return a = ga(), a.memoizedState = a.baseState = t, i = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: pi,
        lastRenderedState: t
      }, a.queue = i, a = Zd.bind(
        null,
        Be,
        i
      ), i.dispatch = a, i = nc(!1), f = Vl.bind(
        null,
        Be,
        !1,
        i.queue
      ), i = ga(), o = {
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
      var t = At();
      return wd(t, Xt, e);
    }
    function wd(e, t, a) {
      if (t = xs(
        e,
        t,
        pi
      )[0], e = Zn(qa)[0], typeof t == "object" && t !== null && typeof t.then == "function")
        try {
          var i = Wo(t);
        } catch (d) {
          throw d === hm ? ig : d;
        }
      else i = t;
      t = At();
      var o = t.queue, f = o.dispatch;
      return a !== t.memoizedState && (Be.flags |= 2048, Kc(
        ti | yn,
        { destroy: void 0 },
        Gs.bind(null, o, a),
        null
      )), [i, f, e];
    }
    function Gs(e, t) {
      e.action = t;
    }
    function uc(e) {
      var t = At(), a = Xt;
      if (a !== null)
        return wd(t, a, e);
      At(), t = t.memoizedState, a = At();
      var i = a.queue.dispatch;
      return a.memoizedState = e, [t, i, !1];
    }
    function Kc(e, t, a, i) {
      return e = { tag: e, create: a, deps: i, inst: t, next: null }, t = Be.updateQueue, t === null && (t = Yd(), Be.updateQueue = t), a = t.lastEffect, a === null ? t.lastEffect = e.next = e : (i = a.next, a.next = e, e.next = i, t.lastEffect = e), e;
    }
    function Xd(e) {
      var t = ga();
      return e = { current: e }, t.memoizedState = e;
    }
    function An(e, t, a, i) {
      var o = ga();
      Be.flags |= e, o.memoizedState = Kc(
        ti | t,
        { destroy: void 0 },
        a,
        i === void 0 ? null : i
      );
    }
    function Ll(e, t, a, i) {
      var o = At();
      i = i === void 0 ? null : i;
      var f = o.memoizedState.inst;
      Xt !== null && i !== null && cy(i, Xt.memoizedState.deps) ? o.memoizedState = Kc(t, f, a, i) : (Be.flags |= e, o.memoizedState = Kc(
        ti | t,
        f,
        a,
        i
      ));
    }
    function ws(e, t) {
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
    function Xs(e) {
      var t = ga(), a = { impl: e };
      return t.memoizedState = a, function() {
        if ((pt & ea) !== ha)
          throw Error(
            "A function wrapped in useEffectEvent can't be called during rendering."
          );
        return a.impl.apply(void 0, arguments);
      };
    }
    function ua(e) {
      var t = At().memoizedState;
      return hy({ ref: t, nextImpl: e }), function() {
        if ((pt & ea) !== ha)
          throw Error(
            "A function wrapped in useEffectEvent can't be called during rendering."
          );
        return t.impl.apply(void 0, arguments);
      };
    }
    function Ga(e, t) {
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
    function Qs(e, t, a) {
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
    function Ls(e, t, a) {
      typeof t != "function" && console.error(
        "Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",
        t !== null ? typeof t : "null"
      ), a = a != null ? a.concat([e]) : null, Ll(
        4,
        lu,
        vi.bind(null, t, e),
        a
      );
    }
    function Ru(e, t) {
      return ga().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    }
    function ia(e, t) {
      var a = At();
      t = t === void 0 ? null : t;
      var i = a.memoizedState;
      return t !== null && cy(t, i[1]) ? i[0] : (a.memoizedState = [e, t], e);
    }
    function el(e, t) {
      var a = ga();
      t = t === void 0 ? null : t;
      var i = e();
      if (Fr) {
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
      var a = At();
      t = t === void 0 ? null : t;
      var i = a.memoizedState;
      if (t !== null && cy(t, i[1]))
        return i[0];
      if (i = e(), Fr) {
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
      var a = ga();
      return cl(a, e, t);
    }
    function Xe(e, t) {
      var a = At();
      return Vs(
        a,
        Xt.memoizedState,
        e,
        t
      );
    }
    function Rt(e, t) {
      var a = At();
      return Xt === null ? cl(a, e, t) : Vs(
        a,
        Xt.memoizedState,
        e,
        t
      );
    }
    function cl(e, t, a) {
      return a === void 0 || (_o & 1073741824) !== 0 && (We & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = a, e = wt(), Be.lanes |= e, Lf |= e, a);
    }
    function Vs(e, t, a, i) {
      return dn(a, t) ? a : ym.current !== null ? (e = cl(e, a, i), dn(e, t) || (Bl = !0), e) : (_o & 42) === 0 || (_o & 1073741824) !== 0 && (We & 261930) === 0 ? (Bl = !0, e.memoizedState = a) : (e = wt(), Be.lanes |= e, Lf |= e, t);
    }
    function gi() {
      w.asyncTransitions--;
    }
    function ic(e, t, a, i, o) {
      var f = zt.p;
      zt.p = f !== 0 && f < Fl ? f : Fl;
      var d = w.T, h = {};
      h._updatedFibers = /* @__PURE__ */ new Set(), w.T = h, Vl(e, !1, t, a);
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
            Kl(e)
          );
        } else
          Wc(
            e,
            t,
            i,
            Kl(e)
          );
      } catch (R) {
        Wc(
          e,
          t,
          { then: function() {
          }, status: "rejected", reason: R },
          Kl(e)
        );
      } finally {
        zt.p = f, d !== null && h.types !== null && (d.types !== null && d.types !== h.types && console.error(
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
          lastRenderedReducer: qa,
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
          lastRenderedReducer: qa,
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
        Kl(e)
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
      ), ga().memoizedState = e, [!1, e];
    }
    function tl() {
      var e = Zn(qa)[0], t = At().memoizedState;
      return [
        typeof e == "boolean" ? e : Wo(e),
        t
      ];
    }
    function Qd() {
      var e = tc(qa)[0], t = At().memoizedState;
      return [
        typeof e == "boolean" ? e : Wo(e),
        t
      ];
    }
    function Si() {
      return qt(T0);
    }
    function Ld() {
      var e = ga(), t = Qt.identifierPrefix;
      if (ot) {
        var a = Eo, i = bo;
        a = (i & ~(1 << 32 - Wl(i) - 1)).toString(32) + a, t = "_" + t + "R_" + a, a = rg++, 0 < a && (t += "H" + a.toString(32)), t += "_";
      } else
        a = KT++, t = "_" + t + "r_" + a.toString(32) + "_";
      return e.memoizedState = t;
    }
    function Vd() {
      return ga().memoizedState = Ig.bind(
        null,
        Be
      );
    }
    function Ig(e, t) {
      for (var a = e.return; a !== null; ) {
        switch (a.tag) {
          case 24:
          case 3:
            var i = Kl(a), o = Au(i), f = va(a, o, i);
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
      ), i = Kl(e);
      var o = {
        lane: i,
        revertLane: 0,
        gesture: null,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      kt(e) ? Zs(t, o) : (o = km(e, t, o, i), o !== null && (wn(i, "dispatch()", e), ll(o, e, i), af(o, t, i)));
    }
    function Zd(e, t, a) {
      var i = arguments;
      typeof i[3] == "function" && console.error(
        "State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."
      ), i = Kl(e), Wc(e, t, a, i) && wn(i, "setState()", e);
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
      if (kt(e)) Zs(t, o);
      else {
        var f = e.alternate;
        if (e.lanes === 0 && (f === null || f.lanes === 0) && (f = t.lastRenderedReducer, f !== null)) {
          var d = w.H;
          w.H = Ni;
          try {
            var h = t.lastRenderedState, y = f(h, a);
            if (o.hasEagerState = !0, o.eagerState = y, dn(y, h))
              return Vi(e, t, o, 0), Qt === null && Vo(), !1;
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
    function Vl(e, t, a, i) {
      if (w.T === null && Jr === 0 && console.error(
        "An optimistic state update occurred outside a transition or action. To fix, move the update to an action, or wrap with startTransition."
      ), i = {
        lane: 2,
        revertLane: mt(),
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
    function Zs(e, t) {
      gm = sg = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function af(e, t, a) {
      if ((a & 4194048) !== 0) {
        var i = t.lanes;
        i &= e.pendingLanes, a |= i, t.lanes = a, ns(e, a);
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
    function Js(e, t, a, i) {
      var o = e.memoizedState, f = a(i, o);
      if (e.mode & Ka) {
        me(!0);
        try {
          f = a(i, o);
        } finally {
          me(!1);
        }
      }
      f === void 0 && (t = Fe(t) || "Component", Cb.has(t) || (Cb.add(t), console.error(
        "%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.",
        t
      ))), o = f == null ? o : Ve({}, o, f), e.memoizedState = o, e.lanes === 0 && (e.updateQueue.baseState = o);
    }
    function Mu(e, t, a, i, o, f, d) {
      var h = e.stateNode;
      if (typeof h.shouldComponentUpdate == "function") {
        if (a = h.shouldComponentUpdate(
          i,
          f,
          d
        ), e.mode & Ka) {
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
          Fe(t) || "Component"
        ), a;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !gs(a, i) || !gs(o, f) : !0;
    }
    function Ks(e, t, a, i) {
      var o = t.state;
      typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== o && (e = se(e) || "Component", zb.has(e) || (zb.add(e), console.error(
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
        a === t && (a = Ve({}, a));
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
    function $s(e, t) {
      try {
        Sm = t.source ? se(t.source) : null, LS = null;
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
        Sm = a.source ? se(a.source) : null, LS = se(t);
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
        fe(t.source, $s, e, t);
      }, a;
    }
    function $d(e) {
      return e = Au(e), e.tag = jS, e;
    }
    function ks(e, t, a, i) {
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
          se(a) || "Unknown"
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
        ), ot && (gc = !0), a = tu.current, a !== null) {
          switch (a.tag) {
            case 31:
            case 13:
              return ei === null ? no() : a.alternate === null && dl === Co && (dl = mg), a.flags &= -257, a.flags |= 65536, a.lanes = o, i === cg ? a.flags |= 16384 : (t = a.updateQueue, t === null ? a.updateQueue = /* @__PURE__ */ new Set([i]) : t.add(i), oa(e, i, o)), !1;
            case 22:
              return a.flags |= 65536, i === cg ? a.flags |= 16384 : (t = a.updateQueue, t === null ? (t = {
                transitions: null,
                markerInstances: null,
                retryQueue: /* @__PURE__ */ new Set([i])
              }, a.updateQueue = t) : (a = t.retryQueue, a === null ? t.retryQueue = /* @__PURE__ */ new Set([i]) : a.add(i)), oa(e, i, o)), !1;
          }
          throw Error(
            "Unexpected Suspense handler tag (" + a.tag + "). This is a bug in React."
          );
        }
        return oa(e, i, o), no(), !1;
      }
      if (ot)
        return gc = !0, t = tu.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = o, i !== zS && vu(
          ma(
            Error(
              "There was an error while hydrating but React was able to recover by instead client rendering from the nearest Suspense boundary.",
              { cause: i }
            ),
            a
          )
        )) : (i !== zS && vu(
          ma(
            Error(
              "There was an error while hydrating but React was able to recover by instead client rendering the entire root.",
              { cause: i }
            ),
            a
          )
        ), e = e.current.alternate, e.flags |= 65536, o &= -o, e.lanes |= o, i = ma(i, a), o = Kd(
          e.stateNode,
          i,
          o
        ), Cs(e, o), dl !== Xf && (dl = Ir)), !1;
      var f = ma(
        Error(
          "There was an error during concurrent rendering but React was able to recover by instead synchronously rendering the entire root.",
          { cause: i }
        ),
        a
      );
      if (h0 === null ? h0 = [f] : h0.push(f), dl !== Xf && (dl = Ir), t === null) return !0;
      i = ma(i, a), a = t;
      do {
        switch (a.tag) {
          case 3:
            return a.flags |= 65536, e = o & -o, a.lanes |= e, e = Kd(
              a.stateNode,
              i,
              e
            ), Cs(a, e), !1;
          case 1:
            if (t = a.type, f = a.stateNode, (a.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || f !== null && typeof f.componentDidCatch == "function" && (Zf === null || !Zf.has(f))))
              return a.flags |= 65536, o &= -o, a.lanes |= o, o = $d(o), ks(
                o,
                e,
                a,
                i
              ), Cs(a, o), !1;
        }
        a = a.return;
      } while (a !== null);
      return !1;
    }
    function Zl(e, t, a, i) {
      t.child = e === null ? mb(t, null, a, i) : Wr(
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
      ), h = Bs(), e !== null && !Bl ? (Pi(e, t, o), Cu(e, t, o)) : (ot && h && Rd(t), t.flags |= 1, Zl(e, t, i, o), t.child);
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
        if (a = a.compare, a = a !== null ? a : gs, a(d, i) && e.ref === t.ref)
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
        if (gs(f, i) && e.ref === t.ref && t.type === e.type)
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
          t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && Ds(
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
        f !== null ? (Ds(t, f.cachePool), Ii(t, f), cn(t), t.memoizedState = null) : (e !== null && Ds(t, null), Vn(t), cn(t));
      return Zl(e, t, o, a), t.child;
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
      var f = _s();
      return f = f === null ? null : {
        parent: Ul._currentValue,
        pool: f
      }, t.memoizedState = {
        baseLanes: a,
        cachePool: f
      }, e !== null && Ds(t, null), Vn(t), Bd(t), e !== null && Wi(e, t, i, !0), t.childLanes = o, null;
    }
    function Ws(e, t) {
      var a = t.hidden;
      return a !== void 0 && console.error(
        `<Activity> doesn't accept a hidden prop. Use mode="hidden" instead.
- <Activity %s>
+ <Activity %s>`,
        a === !0 ? "hidden" : a === !1 ? "hidden={false}" : "hidden={...}",
        a ? 'mode="hidden"' : 'mode="visible"'
      ), t = Ps(
        { mode: t.mode, children: t.children },
        e.mode
      ), t.ref = e.ref, e.child = t, t.return = e, t;
    }
    function Ay(e, t, a) {
      return Wr(t, e.child, null, a), e = Ws(
        t,
        t.pendingProps
      ), e.flags |= 2, na(t), t.memoizedState = null, e;
    }
    function P0(e, t, a) {
      var i = t.pendingProps, o = (t.flags & 128) !== 0;
      if (t.flags &= -129, e === null) {
        if (ot) {
          if (i.mode === "hidden")
            return e = Ws(t, i), t.lanes = 536870912, uf(null, e);
          if (Hs(t), (e = It) ? (a = Ah(
            e,
            Iu
          ), a = a !== null && a.data === nd ? a : null, a !== null && (i = {
            dehydrated: a,
            treeContext: $0(),
            retryLane: 536870912,
            hydrationErrors: null
          }, t.memoizedState = i, i = Fm(a), i.return = t, t.child = i, za = t, It = null)) : a = null, a === null)
            throw Ki(t, e), si(t);
          return t.lanes = 536870912, null;
        }
        return Ws(t, i);
      }
      var f = e.memoizedState;
      if (f !== null) {
        var d = f.dehydrated;
        if (Hs(t), o)
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
        else if (Ua(), (a & 536870912) !== 0 && hf(t), Bl || Wi(
          e,
          t,
          a,
          !1
        ), o = (a & e.childLanes) !== 0, Bl || o) {
          if (i = Qt, i !== null && (d = Gn(
            i,
            a
          ), d !== 0 && d !== f.retryLane))
            throw f.retryLane = d, Ql(e, d), ll(i, e, d), VS;
          no(), t = Ay(
            e,
            t,
            a
          );
        } else
          e = f.treeContext, It = on(
            d.nextSibling
          ), za = t, ot = !0, xf = null, gc = !1, eu = null, Iu = !1, e !== null && k0(t, e), t = Ws(t, i), t.flags |= 4096;
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
        var f = Fe(a) || "Unknown";
        xb[f] || (console.error(
          "The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.",
          f,
          f
        ), xb[f] = !0);
      }
      return t.mode & Ka && Hi.recordLegacyContextWarning(
        t,
        null
      ), e === null && (cf(t, t.type), a.contextTypes && (f = Fe(a) || "Unknown", Yb[f] || (Yb[f] = !0, console.error(
        "%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with React.useContext() instead. (https://react.dev/link/legacy-context)",
        f
      )))), Pa(t), a = il(
        e,
        t,
        a,
        i,
        void 0,
        o
      ), i = Bs(), e !== null && !Bl ? (Pi(e, t, o), Cu(e, t, o)) : (ot && i && Rd(t), t.flags |= 1, Zl(e, t, a, o), t.child);
    }
    function Fc(e, t, a, i, o, f) {
      return Pa(t), Ro = -1, i0 = e !== null && e.type !== t.type, t.updateQueue = null, a = Vc(
        t,
        i,
        a,
        o
      ), jd(e, t), i = Bs(), e !== null && !Bl ? (Pi(e, t, f), Cu(e, t, f)) : (ot && i && Rd(t), t.flags |= 1, Zl(e, t, a, f), t.child);
    }
    function Oy(e, t, a, i, o) {
      switch (St(t)) {
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
          if (t.lanes |= h, d = Qt, d === null)
            throw Error(
              "Expected a work-in-progress root. This is a bug in React. Please file an issue."
            );
          h = $d(h), ks(
            h,
            d,
            t,
            ma(f, t)
          ), Cs(t, h);
      }
      if (Pa(t), t.stateNode === null) {
        if (d = Bf, f = a.contextType, "contextType" in a && f !== null && (f === void 0 || f.$$typeof !== Fn) && !Nb.has(a) && (Nb.add(a), h = f === void 0 ? " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? " However, it is set to a " + typeof f + "." : f.$$typeof === qh ? " Did you accidentally pass the Context.Consumer instead?" : " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", console.error(
          "%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s",
          Fe(a) || "Component",
          h
        )), typeof f == "object" && f !== null && (d = qt(f)), f = new a(i, d), t.mode & Ka) {
          me(!0);
          try {
            f = new a(i, d);
          } finally {
            me(!1);
          }
        }
        if (d = t.memoizedState = f.state !== null && f.state !== void 0 ? f.state : null, f.updater = QS, t.stateNode = f, f._reactInternals = t, f._reactInternalInstance = Ob, typeof a.getDerivedStateFromProps == "function" && d === null && (d = Fe(a) || "Component", _b.has(d) || (_b.add(d), console.error(
          "`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.",
          d,
          f.state === null ? "null" : "undefined",
          d
        ))), typeof a.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function") {
          var y = h = d = null;
          if (typeof f.componentWillMount == "function" && f.componentWillMount.__suppressDeprecationWarning !== !0 ? d = "componentWillMount" : typeof f.UNSAFE_componentWillMount == "function" && (d = "UNSAFE_componentWillMount"), typeof f.componentWillReceiveProps == "function" && f.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? h = "componentWillReceiveProps" : typeof f.UNSAFE_componentWillReceiveProps == "function" && (h = "UNSAFE_componentWillReceiveProps"), typeof f.componentWillUpdate == "function" && f.componentWillUpdate.__suppressDeprecationWarning !== !0 ? y = "componentWillUpdate" : typeof f.UNSAFE_componentWillUpdate == "function" && (y = "UNSAFE_componentWillUpdate"), d !== null || h !== null || y !== null) {
            f = Fe(a) || "Component";
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
        f = t.stateNode, d = Fe(a) || "Component", f.render || (a.prototype && typeof a.prototype.render == "function" ? console.error(
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
          Fe(a) || "A pure component"
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
          Fe(a)
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
        ), f = t.stateNode, f.props = i, f.state = t.memoizedState, f.refs = {}, Tu(t), d = a.contextType, f.context = typeof d == "object" && d !== null ? qt(d) : Bf, f.state === i && (d = Fe(a) || "Component", Mb.has(d) || (Mb.add(d), console.error(
          "%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.",
          d
        ))), t.mode & Ka && Hi.recordLegacyContextWarning(
          t,
          f
        ), Hi.recordUnsafeLifecycleWarnings(
          t,
          f
        ), f.state = t.memoizedState, d = a.getDerivedStateFromProps, typeof d == "function" && (Js(
          t,
          a,
          d,
          i
        ), f.state = t.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function" || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (d = f.state, typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount(), d !== f.state && (console.error(
          "%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
          se(t) || "Component"
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
        y = a.contextType, d = Bf, typeof y == "object" && y !== null && (d = qt(y)), p = a.getDerivedStateFromProps, y = typeof p == "function" || typeof f.getSnapshotBeforeUpdate == "function", _ = t.pendingProps !== _, y || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (_ || R !== d) && Ks(
          t,
          f,
          i,
          d
        ), wf = !1;
        var b = t.memoizedState;
        f.state = b, Ln(t, i, f, o), Ou(), R = t.memoizedState, _ || b !== R || wf ? (typeof p == "function" && (Js(
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
        f = t.stateNode, ja(e, t), d = t.memoizedProps, y = bi(a, d), f.props = y, p = t.pendingProps, b = f.context, R = a.contextType, h = Bf, typeof R == "object" && R !== null && (h = qt(R)), _ = a.getDerivedStateFromProps, (R = typeof _ == "function" || typeof f.getSnapshotBeforeUpdate == "function") || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (d !== p || b !== h) && Ks(
          t,
          f,
          i,
          h
        ), wf = !1, b = t.memoizedState, f.state = b, Ln(t, i, f, o), Ou();
        var Y = t.memoizedState;
        d !== p || b !== Y || wf || e !== null && e.dependencies !== null && Ts(e.dependencies) ? (typeof _ == "function" && (Js(
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
        ) || e !== null && e.dependencies !== null && Ts(e.dependencies)) ? (R || typeof f.UNSAFE_componentWillUpdate != "function" && typeof f.componentWillUpdate != "function" || (typeof f.componentWillUpdate == "function" && f.componentWillUpdate(i, Y, h), typeof f.UNSAFE_componentWillUpdate == "function" && f.UNSAFE_componentWillUpdate(
          i,
          Y,
          h
        )), typeof f.componentDidUpdate == "function" && (t.flags |= 4), typeof f.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof f.componentDidUpdate != "function" || d === e.memoizedProps && b === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || d === e.memoizedProps && b === e.memoizedState || (t.flags |= 1024), t.memoizedProps = i, t.memoizedState = Y), f.props = i, f.state = Y, f.context = h, f = y) : (typeof f.componentDidUpdate != "function" || d === e.memoizedProps && b === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || d === e.memoizedProps && b === e.memoizedState || (t.flags |= 1024), f = !1);
      }
      if (h = f, Wd(e, t), d = (t.flags & 128) !== 0, h || d) {
        if (h = t.stateNode, Tc(t), d && typeof a.getDerivedStateFromError != "function")
          a = null, hn = -1;
        else if (a = eb(h), t.mode & Ka) {
          me(!0);
          try {
            eb(h);
          } finally {
            me(!1);
          }
        }
        t.flags |= 1, e !== null && d ? (t.child = Wr(
          t,
          e.child,
          null,
          o
        ), t.child = Wr(
          t,
          null,
          a,
          o
        )) : Zl(e, t, a, o), t.memoizedState = h.state, e = t.child;
      } else
        e = Cu(
          e,
          t,
          o
        );
      return o = t.stateNode, f && o.props !== i && (bm || console.error(
        "It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.",
        se(t) || "a component"
      ), bm = !0), e;
    }
    function Fs(e, t, a, i) {
      return ri(), t.flags |= 256, Zl(e, t, a, i), t.child;
    }
    function cf(e, t) {
      t && t.childContextTypes && console.error(
        `childContextTypes cannot be defined on a function component.
  %s.childContextTypes = ...`,
        t.displayName || t.name || "Component"
      ), typeof t.getDerivedStateFromProps == "function" && (e = Fe(t) || "Unknown", qb[e] || (console.error(
        "%s: Function components do not support getDerivedStateFromProps.",
        e
      ), qb[e] = !0)), typeof t.contextType == "object" && t.contextType !== null && (t = Fe(t) || "Unknown", jb[t] || (console.error(
        "%s: Function components do not support contextType.",
        t
      ), jb[t] = !0));
    }
    function Id(e) {
      return { baseLanes: e, cachePool: Cd() };
    }
    function Is(e, t, a) {
      return e = e !== null ? e.childLanes & ~a : 0, t && (e |= qn), e;
    }
    function ev(e, t, a) {
      var i, o = t.pendingProps;
      je(t) && (t.flags |= 128);
      var f = !1, d = (t.flags & 128) !== 0;
      if ((i = d) || (i = e !== null && e.memoizedState === null ? !1 : (_l.current & n0) !== 0), i && (f = !0, t.flags &= -129), i = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
        if (ot) {
          if (f ? aa(t) : cn(t), (e = It) ? (a = Ah(
            e,
            Iu
          ), a = a !== null && a.data !== nd ? a : null, a !== null && (i = {
            dehydrated: a,
            treeContext: $0(),
            retryLane: 536870912,
            hydrationErrors: null
          }, t.memoizedState = i, i = Fm(a), i.return = t, t.child = i, za = t, It = null)) : a = null, a === null)
            throw Ki(t, e), si(t);
          return Oh(a) ? t.lanes = 32 : t.lanes = 536870912, null;
        }
        var h = o.children;
        if (o = o.fallback, f) {
          cn(t);
          var y = t.mode;
          return h = Ps(
            { mode: "hidden", children: h },
            y
          ), o = yu(
            o,
            y,
            a,
            null
          ), h.return = t, o.return = t, h.sibling = o, t.child = h, o = t.child, o.memoizedState = Id(a), o.childLanes = Is(
            e,
            i,
            a
          ), t.memoizedState = ZS, uf(
            null,
            o
          );
        }
        return aa(t), Pd(
          t,
          h
        );
      }
      var p = e.memoizedState;
      if (p !== null) {
        var _ = p.dehydrated;
        if (_ !== null) {
          if (d)
            t.flags & 256 ? (aa(t), t.flags &= -257, t = eh(
              e,
              t,
              a
            )) : t.memoizedState !== null ? (cn(t), t.child = e.child, t.flags |= 128, t = null) : (cn(t), h = o.fallback, y = t.mode, o = Ps(
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
            ), h.flags |= 2, o.return = t, h.return = t, o.sibling = h, t.child = o, Wr(
              t,
              e.child,
              null,
              a
            ), o = t.child, o.memoizedState = Id(a), o.childLanes = Is(
              e,
              i,
              a
            ), t.memoizedState = ZS, t = uf(
              null,
              o
            ));
          else if (aa(t), Ua(), (a & 536870912) !== 0 && hf(t), Oh(
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
            if (i = Qt, i !== null && (o = Gn(
              i,
              a
            ), o !== 0 && o !== p.retryLane))
              throw p.retryLane = o, Ql(
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
            ), za = t, ot = !0, xf = null, gc = !1, eu = null, Iu = !1, e !== null && k0(t, e), t = Pd(
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
      }), o.memoizedState = h, o.childLanes = Is(
        e,
        i,
        a
      ), t.memoizedState = ZS, uf(
        e.child,
        o
      )) : (p !== null && (a & 62914560) === a && (a & e.lanes) !== 0 && hf(t), aa(t), a = e.child, e = a.sibling, a = mu(a, {
        mode: "visible",
        children: o.children
      }), a.return = t, a.sibling = null, e !== null && (i = t.deletions, i === null ? (t.deletions = [e], t.flags |= 16) : i.push(e)), t.child = a, t.memoizedState = null, a);
    }
    function Pd(e, t) {
      return t = Ps(
        { mode: "visible", children: t },
        e.mode
      ), t.return = e, e.child = t;
    }
    function Ps(e, t) {
      return e = U(22, e, null, t), e.lanes = 0, e;
    }
    function eh(e, t, a) {
      return Wr(t, e.child, null, a), e = Pd(
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
            if (!it(
              d[h],
              h
            ))
              break e;
        } else if (h = bt(d), typeof h == "function") {
          if (h = h.call(d))
            for (var y = h.next(), p = 0; !y.done; y = h.next()) {
              if (!it(y.value, p)) break e;
              p++;
            }
        } else
          console.error(
            'A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?',
            o
          );
      if (Zl(e, t, d, a), ot ? (Ji(), d = Lp) : d = 0, !i && e !== null && (e.flags & 128) !== 0)
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
      return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && Ts(e)));
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
          ), ri();
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
            return t.flags |= 128, Hs(t), null;
          break;
        case 13:
          if (i = t.memoizedState, i !== null)
            return i.dehydrated !== null ? (aa(t), t.flags |= 128, null) : (a & t.child.childLanes) !== 0 ? ev(
              e,
              t,
              a
            ) : (aa(t), e = Cu(
              e,
              t,
              a
            ), e !== null ? e.sibling : null);
          aa(t);
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
        Bl = !1, (i = ot) && (Ji(), i = (t.flags & 1048576) !== 0), i && (i = t.index, Ji(), Im(t, Lp, i));
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
            throw t = "", e !== null && typeof e == "object" && e.$$typeof === ml && (t = " Did you wrap a component in React.lazy() more than once?"), a = Fe(e) || e, Error(
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
            o = f.element, ja(e, t), Ln(t, i, null, a);
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
                t = Fs(
                  e,
                  t,
                  i,
                  a
                );
                break e;
              } else if (i !== o) {
                o = ma(
                  Error(
                    "This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."
                  ),
                  t
                ), vu(o), t = Fs(
                  e,
                  t,
                  i,
                  a
                );
                break e;
              } else
                for (e = t.stateNode.containerInfo, e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e, It = on(e.firstChild), za = t, ot = !0, xf = null, gc = !1, eu = null, Iu = !0, a = mb(
                  t,
                  null,
                  i,
                  a
                ), t.child = a; a; )
                  a.flags = a.flags & -3 | 4096, a = a.sibling;
            else {
              if (ri(), i === o) {
                t = Cu(
                  e,
                  t,
                  a
                );
                break e;
              }
              Zl(
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
          return Wd(e, t), e === null ? (a = rp(
            t.type,
            null,
            t.pendingProps,
            null
          )) ? t.memoizedState = a : ot || (a = t.type, e = t.pendingProps, i = Yt(
            Hn.current
          ), i = Sh(
            i
          ).createElement(a), i[Il] = t, i[sa] = e, st(i, a, e), ye(i), t.stateNode = i) : t.memoizedState = rp(
            t.type,
            e.memoizedProps,
            t.pendingProps,
            e.memoizedState
          ), null;
        case 27:
          return ce(t), e === null && ot && (i = Yt(Hn.current), o = P(), i = t.stateNode = Wn(
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
          ), o !== null && (Yc(t, 0).serverProps = o)), za = t, Iu = !0, o = It, _i(t.type) ? (m1 = o, It = on(
            i.firstChild
          )) : It = o), Zl(
            e,
            t,
            t.pendingProps.children,
            a
          ), Wd(e, t), e === null && (t.flags |= 4194304), t.child;
        case 5:
          return e === null && ot && (f = P(), i = md(
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
          ), f !== null && (Yc(t, 0).serverProps = f)), za = t, It = on(
            d.firstChild
          ), Iu = !1, f = !0) : f = !1, d = !f), d && (i && Ki(t, o), si(t))), ce(t), o = t.type, f = t.pendingProps, d = e !== null ? e.memoizedProps : null, i = f.children, gr(o, f) ? i = null : d !== null && gr(o, d) && (t.flags |= 32), t.memoizedState !== null && (o = il(
            e,
            t,
            Ns,
            null,
            null,
            a
          ), T0._currentValue = o), Wd(e, t), Zl(
            e,
            t,
            i,
            a
          ), t.child;
        case 6:
          return e === null && ot && (a = t.pendingProps, e = P(), i = e.ancestorInfo.current, a = i != null ? wo(
            a,
            i.tag,
            e.ancestorInfo.implicitRootScope
          ) : !0, e = It, (i = !e) || (i = Ct(
            e,
            t.pendingProps,
            Iu
          ), i !== null ? (t.stateNode = i, za = t, It = null, i = !0) : i = !1, i = !i), i && (a && Ki(t, e), si(t))), null;
        case 13:
          return ev(e, t, a);
        case 4:
          return X(
            t,
            t.stateNode.containerInfo
          ), i = t.pendingProps, e === null ? t.child = Wr(
            t,
            null,
            i,
            a
          ) : Zl(
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
          return Zl(
            e,
            t,
            t.pendingProps,
            a
          ), t.child;
        case 8:
          return Zl(
            e,
            t,
            t.pendingProps.children,
            a
          ), t.child;
        case 12:
          return t.flags |= 4, t.flags |= 2048, i = t.stateNode, i.effectDuration = -0, i.passiveEffectDuration = -0, Zl(
            e,
            t,
            t.pendingProps.children,
            a
          ), t.child;
        case 10:
          return i = t.type, o = t.pendingProps, f = o.value, "value" in o || wb || (wb = !0, console.error(
            "The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"
          )), gu(t, i, f), Zl(
            e,
            t,
            o.children,
            a
          ), t.child;
        case 9:
          return o = t.type._context, i = t.pendingProps.children, typeof i != "function" && console.error(
            "A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."
          ), Pa(t), o = qt(o), i = HS(
            i,
            o,
            void 0
          ), t.flags |= 1, Zl(
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
          return Pa(t), i = qt(Ul), e === null ? (o = _s(), o === null && (o = Qt, f = ny(), o.pooledCache = f, Gc(f), f !== null && (o.pooledCacheLanes |= a), o = f), t.memoizedState = {
            parent: i,
            cache: o
          }, Tu(t), gu(t, Ul, o)) : ((e.lanes & a) !== 0 && (ja(e, t), Ln(t, null, null, a), Ou()), o = e.memoizedState, f = t.memoizedState, o.parent !== i ? (o = {
            parent: i,
            cache: i
          }, t.memoizedState = o, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = o), gu(t, Ul, i)) : (i = f.cache, gu(t, Ul, i), i !== o.cache && ki(
            t,
            [Ul],
            a,
            !0
          ))), Zl(
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
            throw kr = cg, BS;
      } else e.flags &= -16777217;
    }
    function uh(e, t) {
      if (t.type !== "stylesheet" || (t.state.loading & ai) !== cd)
        e.flags &= -16777217;
      else if (e.flags |= 16777216, !Mh(t))
        if (hh()) e.flags |= 8192;
        else
          throw kr = cg, BS;
    }
    function er(e, t) {
      t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? xo() : 536870912, e.lanes |= t, td |= t);
    }
    function of(e, t) {
      if (!ot)
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
    function Mt(e) {
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
          return Mt(t), null;
        case 1:
          return Mt(t), null;
        case 3:
          return a = t.stateNode, i = null, e !== null && (i = e.memoizedState.cache), t.memoizedState.cache !== i && (t.flags |= 2048), Su(Ul, t), j(t), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (e === null || e.child === null) && (qc(t) ? (Es(), Uu(t)) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, ly())), Mt(t), null;
        case 26:
          var o = t.type, f = t.memoizedState;
          return e === null ? (Uu(t), f !== null ? (Mt(t), uh(
            t,
            f
          )) : (Mt(t), Dy(
            t,
            o,
            null,
            i,
            a
          ))) : f ? f !== e.memoizedState ? (Uu(t), Mt(t), uh(
            t,
            f
          )) : (Mt(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== i && Uu(t), Mt(t), Dy(
            t,
            o,
            e,
            i,
            a
          )), null;
        case 27:
          if (ge(t), a = Yt(Hn.current), o = t.type, e !== null && t.stateNode != null)
            e.memoizedProps !== i && Uu(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw Error(
                  "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
                );
              return Mt(t), null;
            }
            e = P(), qc(t) ? ey(t) : (e = Wn(
              o,
              i,
              a,
              e,
              !0
            ), t.stateNode = e, Uu(t));
          }
          return Mt(t), null;
        case 5:
          if (ge(t), o = t.type, e !== null && t.stateNode != null)
            e.memoizedProps !== i && Uu(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw Error(
                  "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
                );
              return Mt(t), null;
            }
            var d = P();
            if (qc(t))
              ey(t);
            else {
              switch (f = Yt(Hn.current), md(o, d.ancestorInfo), d = d.context, f = Sh(f), d) {
                case Rm:
                  f = f.createElementNS(
                    ut,
                    o
                  );
                  break;
                case Ng:
                  f = f.createElementNS(
                    Pe,
                    o
                  );
                  break;
                default:
                  switch (o) {
                    case "svg":
                      f = f.createElementNS(
                        ut,
                        o
                      );
                      break;
                    case "math":
                      f = f.createElementNS(
                        Pe,
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
                      ), Object.prototype.toString.call(f) !== "[object HTMLUnknownElement]" || In.call(sE, o) || (sE[o] = !0, console.error(
                        "The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.",
                        o
                      )));
                  }
              }
              f[Il] = t, f[sa] = i;
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
              e: switch (st(f, o, i), o) {
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
          return Mt(t), Dy(
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
            if (e = Yt(Hn.current), a = P(), qc(t)) {
              if (e = t.stateNode, a = t.memoizedProps, o = !gc, i = null, f = za, f !== null)
                switch (f.tag) {
                  case 3:
                    o && (o = br(
                      e,
                      a,
                      i
                    ), o !== null && (Yc(t, 0).serverProps = o));
                    break;
                  case 27:
                  case 5:
                    i = f.memoizedProps, o && (o = br(
                      e,
                      a,
                      i
                    ), o !== null && (Yc(
                      t,
                      0
                    ).serverProps = o));
                }
              e[Il] = t, e = !!(e.nodeValue === a || i !== null && i.suppressHydrationWarning === !0 || pr(e.nodeValue, a)), e || si(t, !0);
            } else
              o = a.ancestorInfo.current, o != null && wo(
                i,
                o.tag,
                a.ancestorInfo.implicitRootScope
              ), e = Sh(e).createTextNode(
                i
              ), e[Il] = t, t.stateNode = e;
          }
          return Mt(t), null;
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
                e[Il] = t, Mt(t), (t.mode & $e) !== Ce && a !== null && (e = t.child, e !== null && (t.treeBaseDuration -= e.treeBaseDuration));
              } else
                Es(), ri(), (t.flags & 128) === 0 && (a = t.memoizedState = null), t.flags |= 4, Mt(t), (t.mode & $e) !== Ce && a !== null && (e = t.child, e !== null && (t.treeBaseDuration -= e.treeBaseDuration));
              e = !1;
            } else
              a = ly(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a), e = !0;
            if (!e)
              return t.flags & 256 ? (na(t), t) : (na(t), null);
            if ((t.flags & 128) !== 0)
              throw Error(
                "Client rendering an Activity suspended it again. This is a bug in React."
              );
          }
          return Mt(t), null;
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
                f[Il] = t, Mt(t), (t.mode & $e) !== Ce && o !== null && (o = t.child, o !== null && (t.treeBaseDuration -= o.treeBaseDuration));
              } else
                Es(), ri(), (t.flags & 128) === 0 && (o = t.memoizedState = null), t.flags |= 4, Mt(t), (t.mode & $e) !== Ce && o !== null && (o = t.child, o !== null && (t.treeBaseDuration -= o.treeBaseDuration));
              o = !1;
            } else
              o = ly(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = o), o = !0;
            if (!o)
              return t.flags & 256 ? (na(t), t) : (na(t), null);
          }
          return na(t), (t.flags & 128) !== 0 ? (t.lanes = a, (t.mode & $e) !== Ce && ln(t), t) : (a = i !== null, e = e !== null && e.memoizedState !== null, a && (i = t.child, o = null, i.alternate !== null && i.alternate.memoizedState !== null && i.alternate.memoizedState.cachePool !== null && (o = i.alternate.memoizedState.cachePool.pool), f = null, i.memoizedState !== null && i.memoizedState.cachePool !== null && (f = i.memoizedState.cachePool.pool), f !== o && (i.flags |= 2048)), a !== e && a && (t.child.flags |= 8192), er(t, t.updateQueue), Mt(t), (t.mode & $e) !== Ce && a && (e = t.child, e !== null && (t.treeBaseDuration -= e.treeBaseDuration)), null);
        case 4:
          return j(t), e === null && mr(
            t.stateNode.containerInfo
          ), Mt(t), null;
        case 10:
          return Su(t.type, t), Mt(t), null;
        case 19:
          if (Te(_l, t), i = t.memoizedState, i === null) return Mt(t), null;
          if (o = (t.flags & 128) !== 0, f = i.rendering, f === null)
            if (o) of(i, !1);
            else {
              if (dl !== Co || e !== null && (e.flags & 128) !== 0)
                for (e = t.child; e !== null; ) {
                  if (f = _u(e), f !== null) {
                    for (t.flags |= 128, of(i, !1), e = f.updateQueue, t.updateQueue = e, er(t, e), t.subtreeFlags = 0, e = a, a = t.child; a !== null; )
                      Zo(a, e), a = a.sibling;
                    return Ue(
                      _l,
                      _l.current & pm | n0,
                      t
                    ), ot && pu(t, i.treeForkCount), t.child;
                  }
                  e = e.sibling;
                }
              i.tail !== null && sl() > bg && (t.flags |= 128, o = !0, of(i, !1), t.lanes = 4194304);
            }
          else {
            if (!o)
              if (e = _u(f), e !== null) {
                if (t.flags |= 128, o = !0, e = e.updateQueue, t.updateQueue = e, er(t, e), of(i, !0), i.tail === null && i.tailMode === "hidden" && !f.alternate && !ot)
                  return Mt(t), null;
              } else
                2 * sl() - i.renderingStartTime > bg && a !== 536870912 && (t.flags |= 128, o = !0, of(i, !1), t.lanes = 4194304);
            i.isBackwards ? (f.sibling = t.child, t.child = f) : (e = i.last, e !== null ? e.sibling = f : t.child = f, i.last = f);
          }
          return i.tail !== null ? (e = i.tail, i.rendering = e, i.tail = e.sibling, i.renderingStartTime = sl(), e.sibling = null, a = _l.current, a = o ? a & pm | n0 : a & pm, Ue(_l, a, t), ot && pu(t, i.treeForkCount), e) : (Mt(t), null);
        case 22:
        case 23:
          return na(t), zu(t), i = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== i && (t.flags |= 8192) : i && (t.flags |= 8192), i ? (a & 536870912) !== 0 && (t.flags & 128) === 0 && (Mt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Mt(t), a = t.updateQueue, a !== null && er(t, a.retryQueue), a = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), i = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (i = t.memoizedState.cachePool.pool), i !== a && (t.flags |= 2048), e !== null && Te(Kr, t), null;
        case 24:
          return a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), Su(Ul, t), Mt(t), null;
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
            if (na(t), t.alternate === null)
              throw Error(
                "Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue."
              );
            ri();
          }
          return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & $e) !== Ce && ln(t), t) : null;
        case 13:
          if (na(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
              throw Error(
                "Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue."
              );
            ri();
          }
          return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & $e) !== Ce && ln(t), t) : null;
        case 19:
          return Te(_l, t), null;
        case 4:
          return j(t), null;
        case 10:
          return Su(t.type, t), null;
        case 22:
        case 23:
          return na(t), zu(t), e !== null && Te(Kr, t), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & $e) !== Ce && ln(t), t) : null;
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
          t.memoizedState !== null && na(t);
          break;
        case 13:
          na(t);
          break;
        case 19:
          Te(_l, t);
          break;
        case 10:
          Su(t.type, t);
          break;
        case 22:
        case 23:
          na(t), zu(t), e !== null && Te(Kr, t);
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
        vt(t, t.return, h);
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
        vt(t, t.return, y);
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
          se(e) || "instance"
        ), a.state !== e.memoizedState && console.error(
          "Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
          se(e) || "instance"
        ));
        try {
          fe(
            e,
            Nd,
            t,
            a
          );
        } catch (i) {
          vt(e, e.return, i);
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
        se(e) || "instance"
      ), t.state !== e.memoizedState && console.error(
        "Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
        se(e) || "instance"
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
            se(e)
          );
        })), t.__reactInternalSnapshotBeforeUpdate = f;
      } catch (d) {
        vt(e, e.return, d);
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
            se(e)
          ), t.current = a;
      }
    }
    function eo(e, t) {
      try {
        fe(e, Hy, e);
      } catch (a) {
        vt(e, t, a);
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
            vt(e, t, o);
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
            vt(e, t, o);
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
        vt(e, e.return, o);
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
        vt(e, e.return, i);
      }
    }
    function xy(e) {
      return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && _i(e.type) || e.tag === 4;
    }
    function sf(e) {
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
        e = e.stateNode, t ? (Sv(a), (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(e, t)) : (Sv(a), t = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, t.appendChild(e), a = a._reactRootContainer, a != null || t.onclick !== null || (t.onclick = Xl));
      else if (i !== 4 && (i === 27 && _i(e.type) && (a = e.stateNode, t = null), e = e.child, e !== null))
        for (oh(e, t, a), e = e.sibling; e !== null; )
          oh(e, t, a), e = e.sibling;
    }
    function rf(e, t, a) {
      var i = e.tag;
      if (i === 5 || i === 6)
        e = e.stateNode, t ? a.insertBefore(e, t) : a.appendChild(e);
      else if (i !== 4 && (i === 27 && _i(e.type) && (a = e.stateNode), e = e.child, e !== null))
        for (rf(e, t, a), e = e.sibling; e !== null; )
          rf(e, t, a), e = e.sibling;
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
          t = t.stateNode, a = sf(e), rf(
            e,
            a,
            t
          );
          break;
        case 5:
          a = t.stateNode, t.flags & 32 && (gv(a), t.flags &= -33), t = sf(e), rf(
            e,
            t,
            a
          );
          break;
        case 3:
        case 4:
          t = t.stateNode.containerInfo, a = sf(e), oh(
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
          Er,
          e.type,
          a,
          t,
          e
        );
      } catch (i) {
        vt(e, e.return, i);
      }
    }
    function iv(e, t) {
      return t.tag === 31 ? (t = t.memoizedState, e.memoizedState !== null && t === null) : t.tag === 13 ? (e = e.memoizedState, t = t.memoizedState, e !== null && e.dehydrated !== null && (t === null || t.dehydrated === null)) : t.tag === 3 ? e.memoizedState.isDehydrated && (t.flags & 256) === 0 : !1;
    }
    function Yy(e, t) {
      if (e = e.containerInfo, r1 = Yg, e = w0(e), Zm(e)) {
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
      }, Yg = !1, da = t; da !== null; )
        if (t = da, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
          e.return = t, da = e;
        else
          for (; da !== null; ) {
            switch (e = t = da, a = e.alternate, o = e.flags, e.tag) {
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
              e.return = t.return, da = e;
              break;
            }
            da = t.return;
          }
    }
    function hl(e, t, a) {
      var i = Ml(), o = en(), f = En(), d = la(), h = a.flags;
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
                se(a) || "instance"
              ), e.state !== a.memoizedState && console.error(
                "Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
                se(a) || "instance"
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
                se(a) || "instance"
              ), e.state !== a.memoizedState && console.error(
                "Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
                se(a) || "instance"
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
              vt(a, a.return, _);
            }
          }
          e.effectDuration += Ha(t);
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
                vt(
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
              vt(a, a.return, _);
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
            ), (a.mode & $e) !== Ce && 0 <= Ae && 0 <= De && 0.05 < De - Ae && Ed(
              a,
              Ae,
              De
            )) : On(e, a), Mo = y, xl = p;
          }
          break;
        case 30:
          break;
        default:
          On(e, a);
      }
      (a.mode & $e) !== Ce && 0 <= Ae && 0 <= De && ((yl || 0.05 < rl) && hu(
        a,
        Ae,
        De,
        rl,
        al
      ), a.alternate === null && a.return !== null && a.return.alternate !== null && 0.05 < De - Ae && (iv(
        a.return.alternate,
        a.return
      ) || du(
        a,
        Ae,
        De,
        "Mount"
      ))), pa(i), tn(o), al = f, yl = d;
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
      if (fa && typeof fa.onCommitFiberUnmount == "function")
        try {
          fa.onCommitFiberUnmount(Ci, a);
        } catch (p) {
          Zu || (Zu = !0, console.error(
            "React instrumentation encountered an error: %o",
            p
          ));
        }
      var i = Ml(), o = en(), f = En(), d = la();
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
            Tr,
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
                vt(
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
                vt(
                  a,
                  t,
                  p
                );
              }
          break;
        case 18:
          jl !== null && (jn ? (e = jl, Sr(
            e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
            a.stateNode
          ), Of(e)) : Sr(jl, a.stateNode));
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
      (a.mode & $e) !== Ce && 0 <= Ae && 0 <= De && (yl || 0.05 < rl) && hu(
        a,
        Ae,
        De,
        rl,
        al
      ), pa(i), tn(o), al = f, yl = d;
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
          vt(t, t.return, a);
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
          vt(t, t.return, a);
        }
    }
    function tr(e) {
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
    function lr(e, t) {
      var a = tr(e);
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
    function Jl(e, t) {
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
          qy(o, f, d), jl = null, jn = !1, (d.mode & $e) !== Ce && 0 <= Ae && 0 <= De && 0.05 < De - Ae && du(
            d,
            Ae,
            De,
            "Unmount"
          ), pa(h), o = d, f = o.alternate, f !== null && (f.return = null), o.return = null;
        }
      if (t.subtreeFlags & 13886)
        for (t = t.child; t !== null; )
          Xy(t, e), t = t.sibling;
    }
    function Xy(e, t) {
      var a = Ml(), i = en(), o = En(), f = la(), d = e.alternate, h = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Jl(t, e), wa(e), h & 4 && (Ei(
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
          if (Jl(t, e), wa(e), h & 512 && (xl || d === null || Kn(d, d.return)), h & 64 && Mo && (h = e.updateQueue, h !== null && (d = h.callbacks, d !== null))) {
            var y = h.shared.hiddenCallbacks;
            h.shared.hiddenCallbacks = y === null ? d : y.concat(d);
          }
          break;
        case 26:
          if (y = Bi, Jl(t, e), wa(e), h & 512 && (xl || d === null || Kn(d, d.return)), h & 4) {
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
                        )[0], (!p || p[jr] || p[Il] || p.namespaceURI === ut || p.hasAttribute("itemprop")) && (p = y.createElement(h), y.head.insertBefore(
                          p,
                          y.querySelector(
                            "head > title"
                          )
                        )), st(p, h, d), p[Il] = e, ye(p), h = p;
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
                        p = y.createElement(h), st(p, h, d), y.head.appendChild(
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
                            if (p = _[R], _t(
                              d.content,
                              "content"
                            ), p.getAttribute("content") === (d.content == null ? null : "" + d.content) && p.getAttribute("name") === (d.name == null ? null : d.name) && p.getAttribute("property") === (d.property == null ? null : d.property) && p.getAttribute("http-equiv") === (d.httpEquiv == null ? null : d.httpEquiv) && p.getAttribute("charset") === (d.charSet == null ? null : d.charSet)) {
                              _.splice(R, 1);
                              break t;
                            }
                        }
                        p = y.createElement(h), st(p, h, d), y.head.appendChild(
                          p
                        );
                        break;
                      default:
                        throw Error(
                          'getNodesForType encountered a type it did not expect: "' + h + '". This is a bug in React.'
                        );
                    }
                    p[Il] = e, ye(p), h = p;
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
          Jl(t, e), wa(e), h & 512 && (xl || d === null || Kn(d, d.return)), d !== null && h & 4 && ch(
            e,
            e.memoizedProps,
            d.memoizedProps
          );
          break;
        case 5:
          if (Jl(t, e), wa(e), h & 512 && (xl || d === null || Kn(d, d.return)), e.flags & 32) {
            y = e.stateNode;
            try {
              fe(
                e,
                gv,
                y
              );
            } catch (oe) {
              vt(e, e.return, oe);
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
          if (Jl(t, e), wa(e), h & 4) {
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
              vt(e, e.return, oe);
            }
          }
          break;
        case 3:
          if (y = Xn(), Bg = null, p = Bi, Bi = Ar(t.containerInfo), Jl(t, e), Bi = p, wa(e), h & 4 && d !== null && d.memoizedState.isDehydrated)
            try {
              fe(
                e,
                _h,
                t.containerInfo
              );
            } catch (oe) {
              vt(e, e.return, oe);
            }
          JS && (JS = !1, ar(e)), t.effectDuration += Ha(
            y
          );
          break;
        case 4:
          h = Bi, Bi = Ar(
            e.stateNode.containerInfo
          ), Jl(t, e), wa(e), Bi = h;
          break;
        case 12:
          h = Xn(), Jl(t, e), wa(e), e.stateNode.effectDuration += Fi(h);
          break;
        case 31:
          Jl(t, e), wa(e), h & 4 && (h = e.updateQueue, h !== null && (e.updateQueue = null, lr(e, h)));
          break;
        case 13:
          Jl(t, e), wa(e), e.child.flags & 8192 && e.memoizedState !== null != (d !== null && d.memoizedState !== null) && (Sg = sl()), h & 4 && (h = e.updateQueue, h !== null && (e.updateQueue = null, lr(e, h)));
          break;
        case 22:
          y = e.memoizedState !== null;
          var b = d !== null && d.memoizedState !== null, Y = Mo, ne = xl;
          if (Mo = Y || y, xl = ne || b, Jl(t, e), xl = ne, Mo = Y, b && !y && !Y && !ne && (e.mode & $e) !== Ce && 0 <= Ae && 0 <= De && 0.05 < De - Ae && Ed(
            e,
            Ae,
            De
          ), wa(e), h & 8192)
            e: for (t = e.stateNode, t._visibility = y ? t._visibility & ~Qp : t._visibility | Qp, !y || d === null || b || Mo || xl || (cc(e), (e.mode & $e) !== Ce && 0 <= Ae && 0 <= De && 0.05 < De - Ae && du(
              e,
              Ae,
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
                    vt(b, b.return, oe);
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
                    vt(b, b.return, oe);
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
                    vt(b, b.return, oe);
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
          h & 4 && (h = e.updateQueue, h !== null && (d = h.retryQueue, d !== null && (h.retryQueue = null, lr(e, d))));
          break;
        case 19:
          Jl(t, e), wa(e), h & 4 && (h = e.updateQueue, h !== null && (e.updateQueue = null, lr(e, h)));
          break;
        case 30:
          break;
        case 21:
          break;
        default:
          Jl(t, e), wa(e);
      }
      (e.mode & $e) !== Ce && 0 <= Ae && 0 <= De && ((yl || 0.05 < rl) && hu(
        e,
        Ae,
        De,
        rl,
        al
      ), e.alternate === null && e.return !== null && e.return.alternate !== null && 0.05 < De - Ae && (iv(
        e.return.alternate,
        e.return
      ) || du(
        e,
        Ae,
        De,
        "Mount"
      ))), pa(a), tn(i), al = o, yl = f;
    }
    function wa(e) {
      var t = e.flags;
      if (t & 2) {
        try {
          fe(e, uv, e);
        } catch (a) {
          vt(e, e.return, a);
        }
        e.flags &= -3;
      }
      t & 4096 && (e.flags &= -4097);
    }
    function ar(e) {
      if (e.subtreeFlags & 1024)
        for (e = e.child; e !== null; ) {
          var t = e;
          ar(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
        }
    }
    function On(e, t) {
      if (t.subtreeFlags & 8772)
        for (t = t.child; t !== null; )
          hl(e, t.alternate, t), t = t.sibling;
    }
    function Qy(e) {
      var t = Ml(), a = en(), i = En(), o = la();
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
            Tr,
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
      (e.mode & $e) !== Ce && 0 <= Ae && 0 <= De && (yl || 0.05 < rl) && hu(
        e,
        Ae,
        De,
        rl,
        al
      ), pa(t), tn(a), al = i, yl = o;
    }
    function cc(e) {
      for (e = e.child; e !== null; )
        Qy(e), e = e.sibling;
    }
    function Ly(e, t, a, i) {
      var o = Ml(), f = en(), d = En(), h = la(), y = a.flags;
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
                Us,
                t,
                e
              );
            } catch (p) {
              vt(a, a.return, p);
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
              vt(a, a.return, p);
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
      (a.mode & $e) !== Ce && 0 <= Ae && 0 <= De && (yl || 0.05 < rl) && hu(
        a,
        Ae,
        De,
        rl,
        al
      ), pa(o), tn(f), al = d, yl = h;
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
    function nr(e, t) {
      var a = null;
      e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== a && (e != null && Gc(e), a != null && Os(a));
    }
    function ur(e, t) {
      e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (Gc(t), e != null && Os(e));
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
      var f = Ml(), d = en(), h = En(), y = la(), p = Hf, _ = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          (t.mode & $e) !== Ce && 0 < t.actualStartTime && (t.flags & 1) !== 0 && Td(
            t,
            t.actualStartTime,
            o,
            Pl,
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
            Pl,
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
          var R = Xn(), b = Pl;
          Pl = t.alternate !== null && t.alternate.memoizedState.isDehydrated && (t.flags & 256) === 0, _n(
            e,
            t,
            a,
            i,
            o
          ), Pl = b, _ & 2048 && (a = null, t.alternate !== null && (a = t.alternate.memoizedState.cache), i = t.memoizedState.cache, i !== a && (Gc(i), a != null && Os(a))), e.passiveEffectDuration += Ha(
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
              vt(t, t.return, Y);
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
          _ = Pl, R = t.alternate !== null ? t.alternate.memoizedState : null, b = t.memoizedState, R !== null && b === null ? (b = t.deletions, b !== null && 0 < b.length && b[0].tag === 18 ? (Pl = !1, R = R.hydrationErrors, R !== null && Ad(
            t,
            t.actualStartTime,
            o,
            R
          )) : Pl = !0) : Pl = !1, _n(
            e,
            t,
            a,
            i,
            o
          ), Pl = _;
          break;
        case 13:
          _ = Pl, R = t.alternate !== null ? t.alternate.memoizedState : null, b = t.memoizedState, R === null || R.dehydrated === null || b !== null && b.dehydrated !== null ? Pl = !1 : (b = t.deletions, b !== null && 0 < b.length && b[0].tag === 18 ? (Pl = !1, R = R.hydrationErrors, R !== null && Ad(
            t,
            t.actualStartTime,
            o,
            R
          )) : Pl = !0), _n(
            e,
            t,
            a,
            i,
            o
          ), Pl = _;
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
          ), (t.mode & $e) === Ce || Pl || (e = t.actualStartTime, 0 <= e && 0.05 < o - e && Ed(t, e, o), 0 <= Ae && 0 <= De && 0.05 < De - Ae && Ed(
            t,
            Ae,
            De
          ))), _ & 2048 && nr(
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
          ), _ & 2048 && ur(t.alternate, t);
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
      (t.mode & $e) !== Ce && ((e = !Pl && t.alternate === null && t.return !== null && t.return.alternate !== null) && (a = t.actualStartTime, 0 <= a && 0.05 < o - a && du(
        t,
        a,
        o,
        "Mount"
      )), 0 <= Ae && 0 <= De && ((yl || 0.05 < rl) && hu(
        t,
        Ae,
        De,
        rl,
        al
      ), e && 0.05 < De - Ae && du(
        t,
        Ae,
        De,
        "Mount"
      ))), pa(f), tn(d), al = h, yl = y, Hf = p;
    }
    function Ti(e, t, a, i, o, f) {
      for (o = o && ((t.subtreeFlags & 10256) !== 0 || t.actualDuration !== 0 && (t.alternate === null || t.alternate.child !== t.child)), t = t.child; t !== null; ) {
        var d = t.sibling;
        sh(
          e,
          t,
          a,
          i,
          o,
          d !== null ? d.actualStartTime : f
        ), t = d;
      }
    }
    function sh(e, t, a, i, o, f) {
      var d = Ml(), h = en(), y = En(), p = la(), _ = Hf;
      o && (t.mode & $e) !== Ce && 0 < t.actualStartTime && (t.flags & 1) !== 0 && Td(
        t,
        t.actualStartTime,
        f,
        Pl,
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
          )), o && R & 2048 && nr(
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
          ), o && R & 2048 && ur(t.alternate, t);
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
      (t.mode & $e) !== Ce && 0 <= Ae && 0 <= De && (yl || 0.05 < rl) && hu(
        t,
        Ae,
        De,
        rl,
        al
      ), pa(d), tn(h), al = y, yl = p, Hf = _;
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
            Pl,
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
              ), R & 2048 && nr(f.alternate, f);
              break;
            case 24:
              df(
                d,
                f,
                h,
                y,
                p
              ), R & 2048 && ur(f.alternate, f);
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
          Bi = Ar(
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
            da = i, rh(
              i,
              e
            ), (i.mode & $e) !== Ce && 0 <= Ae && 0 <= De && 0.05 < De - Ae && du(
              i,
              Ae,
              De,
              "Unmount"
            ), pa(o);
          }
        Bu(e);
      }
      if (e.subtreeFlags & 10256)
        for (e = e.child; e !== null; )
          cv(e), e = e.sibling;
    }
    function cv(e) {
      var t = Ml(), a = en(), i = En(), o = la();
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
          lo(e), e.stateNode.passiveEffectDuration += Ha(f);
          break;
        case 12:
          f = Xn(), lo(e), e.stateNode.passiveEffectDuration += Fi(f);
          break;
        case 22:
          f = e.stateNode, e.memoizedState !== null && f._visibility & So && (e.return === null || e.return.tag !== 13) ? (f._visibility &= ~So, ir(e), (e.mode & $e) !== Ce && 0 <= Ae && 0 <= De && 0.05 < De - Ae && du(
            e,
            Ae,
            De,
            "Disconnect"
          )) : lo(e);
          break;
        default:
          lo(e);
      }
      (e.mode & $e) !== Ce && 0 <= Ae && 0 <= De && (yl || 0.05 < rl) && hu(
        e,
        Ae,
        De,
        rl,
        al
      ), pa(t), tn(a), yl = o, al = i;
    }
    function ir(e) {
      var t = e.deletions;
      if ((e.flags & 16) !== 0) {
        if (t !== null)
          for (var a = 0; a < t.length; a++) {
            var i = t[a], o = Ml();
            da = i, rh(
              i,
              e
            ), (i.mode & $e) !== Ce && 0 <= Ae && 0 <= De && 0.05 < De - Ae && du(
              i,
              Ae,
              De,
              "Unmount"
            ), pa(o);
          }
        Bu(e);
      }
      for (e = e.child; e !== null; )
        xu(e), e = e.sibling;
    }
    function xu(e) {
      var t = Ml(), a = en(), i = En(), o = la();
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          ih(
            e,
            e.return,
            yn
          ), ir(e);
          break;
        case 22:
          var f = e.stateNode;
          f._visibility & So && (f._visibility &= ~So, ir(e));
          break;
        default:
          ir(e);
      }
      (e.mode & $e) !== Ce && 0 <= Ae && 0 <= De && (yl || 0.05 < rl) && hu(
        e,
        Ae,
        De,
        rl,
        al
      ), pa(t), tn(a), yl = o, al = i;
    }
    function rh(e, t) {
      for (; da !== null; ) {
        var a = da, i = a, o = t, f = Ml(), d = en(), h = En(), y = la();
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
            Os(i.memoizedState.cache);
        }
        if ((i.mode & $e) !== Ce && 0 <= Ae && 0 <= De && (yl || 0.05 < rl) && hu(
          i,
          Ae,
          De,
          rl,
          al
        ), pa(f), tn(d), yl = y, al = h, i = a.child, i !== null) i.return = a, da = i;
        else
          e: for (a = e; da !== null; ) {
            if (i = da, f = i.sibling, d = i.return, Cl(i), i === a) {
              da = null;
              break e;
            }
            if (f !== null) {
              f.return = d, da = f;
              break e;
            }
            da = d;
          }
      }
    }
    function ov() {
      WT.forEach(function(e) {
        return e();
      });
    }
    function cr() {
      var e = typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0;
      return e || w.actQueue === null || console.error(
        "The current testing environment is not configured to support act(...)"
      ), e;
    }
    function Kl(e) {
      if ((pt & ea) !== ha && We !== 0)
        return We & -We;
      var t = w.T;
      return t !== null ? (t._updatedFibers || (t._updatedFibers = /* @__PURE__ */ new Set()), t._updatedFibers.add(e), mt()) : Xi();
    }
    function wt() {
      if (qn === 0)
        if ((We & 536870912) === 0 || ot) {
          var e = Mf;
          Mf <<= 1, (Mf & 3932160) === 0 && (Mf = 262144), qn = e;
        } else qn = 536870912;
      return e = tu.current, e !== null && (e.flags |= 32), qn;
    }
    function ll(e, t, a) {
      if (zm && console.error("useInsertionEffect must not schedule updates."), a1 && (Ag = !0), (e === Qt && (xt === Pr || xt === ed) || e.cancelPendingCommit !== null) && (ba(e, 0), Sa(
        e,
        We,
        qn,
        !1
      )), wi(e, a), (pt & ea) !== ha && e === Qt) {
        if (Nn)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              e = et && se(et) || "Unknown", aE.has(e) || (aE.add(e), t = se(t) || "Unknown", console.error(
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
        Bn && _a(e, t, a), dr(t), e === Qt && ((pt & ea) === ha && (Vf |= a), dl === Xf && Sa(
          e,
          We,
          qn,
          !1
        )), Ta(e);
    }
    function fv(e, t, a) {
      if ((pt & (ea | au)) !== ha)
        throw Error("Should not already be working.");
      if (We !== 0 && et !== null) {
        var i = et, o = sl();
        switch (k1) {
          case r0:
          case Pr:
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
          Am && !a && Sa(e, t, 0, !1), t = xt, $p = Hl(), k1 = t;
          break;
        } else {
          if (i = sl(), o = e.current.alternate, d && !or(o)) {
            Ia(t), o = ra, f = i, !Ft || f <= o || (bl ? bl.run(
              console.timeStamp.bind(
                console,
                "Teared Render",
                o,
                f,
                ht,
                rt,
                "error"
              )
            ) : console.timeStamp(
              "Teared Render",
              o,
              f,
              ht,
              rt,
              "error"
            )), $n(t, i), f = yh(e, t, !1), d = !1;
            continue;
          }
          if (f === Ir) {
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
                if (y && (ba(i, h).flags |= 256), h = yh(
                  i,
                  h,
                  !1
                ), h !== Ir) {
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
              if (d = !1, f !== Ir) continue;
              i = sl();
            }
          }
          if (f === s0) {
            Ia(t), Km(
              ra,
              i,
              t,
              bl
            ), $n(t, i), ba(e, 0), Sa(e, t, 0, !0);
            break;
          }
          e: {
            switch (a = e, f) {
              case Co:
              case s0:
                throw Error("Root did not complete. This is a bug in React.");
              case Xf:
                if ((t & 4194048) !== t) break;
              case yg:
                Ia(t), L0(
                  ra,
                  i,
                  t,
                  bl
                ), $n(t, i), o = t, (o & 127) !== 0 ? eg = i : (o & 4194048) !== 0 && (tg = i), Sa(
                  a,
                  t,
                  qn,
                  !Qf
                );
                break e;
              case Ir:
                pn = null;
                break;
              case mg:
              case Lb:
                break;
              default:
                throw Error("Unknown root exit status.");
            }
            if (w.actQueue !== null)
              ca(
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
              if ((t & 62914560) === t && (d = Sg + Jb - sl(), 10 < d)) {
                if (Sa(
                  a,
                  t,
                  qn,
                  !Qf
                ), El(a, 0, !0) !== 0) break e;
                xi = t, a.timeoutHandle = rE(
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
      Ta(e);
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
        unsuspend: Xl
      }, Vy(t, f, oe), ne = (f & 62914560) === f ? Sg - sl() : (f & 4194048) === f ? Zb - sl() : 0, ne = yp(oe, ne), ne !== null)) {
        xi = f, e.cancelPendingCommit = ne(
          ca.bind(
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
        ), Sa(
          e,
          f,
          d,
          !p
        );
        return;
      }
      ca(
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
    function or(e) {
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
    function Sa(e, t, a, i) {
      t &= ~WS, t &= ~Vf, e.suspendedLanes |= t, e.pingedLanes &= ~t, i && (e.warmLanes |= t), i = e.expirationTimes;
      for (var o = t; 0 < o; ) {
        var f = 31 - Wl(o), d = 1 << f;
        i[f] = -1, o &= ~d;
      }
      a !== 0 && as(e, a, t);
    }
    function ao() {
      return (pt & (ea | au)) === ha ? (mf(0), !1) : !0;
    }
    function dh() {
      if (et !== null) {
        if (xt === Yn)
          var e = et.return;
        else
          e = et, $i(), ec(e), mm = null, a0 = 0, e = et;
        for (; e !== null; )
          av(e.alternate, e), e = e.return;
        et = null;
      }
    }
    function $n(e, t) {
      (e & 127) !== 0 && (Lr = t), (e & 4194048) !== 0 && (Oo = t), (e & 62914560) !== 0 && (K1 = t), (e & 2080374784) !== 0 && ($1 = t);
    }
    function ba(e, t) {
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
                ht,
                rt,
                f
              )
            ) : console.timeStamp(
              d,
              a,
              i,
              ht,
              rt,
              f
            );
          }
        }
        $n(We, ra);
      }
      if (a = bl, bl = null, (t & 127) !== 0) {
        bl = Zp, o = 0 <= Sc && Sc < Lr ? Lr : Sc, i = 0 <= Vr && Vr < Lr ? Lr : Vr, f = 0 <= i ? i : 0 <= o ? o : ra, 0 <= eg ? (Ia(2), V0(
          eg,
          f,
          t,
          a
        )) : lg & 127, a = o;
        var h = i, y = Jp, p = 0 < rm, _ = Yf === Vp, R = Yf === Pv;
        if (o = ra, i = Zp, f = RS, d = MS, Ft) {
          if (ht = "Blocking", 0 < a ? a > o && (a = o) : a = o, 0 < h ? h > a && (h = a) : h = a, y !== null && a > h) {
            var b = p ? "secondary-light" : "warning";
            i ? i.run(
              console.timeStamp.bind(
                console,
                p ? "Consecutive" : "Event: " + y,
                h,
                a,
                ht,
                rt,
                b
              )
            ) : console.timeStamp(
              p ? "Consecutive" : "Event: " + y,
              h,
              a,
              ht,
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
                track: ht,
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
        Sc = -1.1, Yf = 0, MS = RS = null, eg = -1.1, rm = Vr, Vr = -1.1, Lr = Hl();
      }
      if ((t & 4194048) !== 0 && (bl = Kp, o = 0 <= zo && zo < Oo ? Oo : zo, a = 0 <= Pu && Pu < Oo ? Oo : Pu, i = 0 <= qf && qf < Oo ? Oo : qf, f = 0 <= i ? i : 0 <= a ? a : ra, 0 <= tg ? (Ia(256), V0(
        tg,
        f,
        t,
        bl
      )) : lg & 4194048, R = i, h = Zr, y = 0 < Gf, p = CS === Pv, f = ra, i = Kp, d = Z1, _ = J1, Ft && (ht = "Transition", 0 < a ? a > f && (a = f) : a = f, 0 < o ? o > a && (o = a) : o = a, 0 < R ? R > o && (R = o) : R = o, o > R && h !== null && (b = y ? "secondary-light" : "warning", i ? i.run(
        console.timeStamp.bind(
          console,
          y ? "Consecutive" : "Event: " + h,
          R,
          o,
          ht,
          rt,
          b
        )
      ) : console.timeStamp(
        y ? "Consecutive" : "Event: " + h,
        R,
        o,
        ht,
        rt,
        b
      )), a > o && (i ? i.run(
        console.timeStamp.bind(
          console,
          "Action",
          o,
          a,
          ht,
          rt,
          "primary-dark"
        )
      ) : console.timeStamp(
        "Action",
        o,
        a,
        ht,
        rt,
        "primary-dark"
      )), f > a && (o = p ? "Promise Resolved" : 5 < f - a ? "Update Blocked" : "Update", R = [], _ != null && R.push(["Component name", _]), d != null && R.push(["Method name", d]), a = {
        start: a,
        end: f,
        detail: {
          devtools: {
            properties: R,
            track: ht,
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
      ) : performance.measure(o, a))), Pu = zo = -1.1, CS = 0, tg = -1.1, Gf = qf, qf = -1.1, Oo = Hl()), (t & 62914560) !== 0 && (lg & 62914560) !== 0 && (Ia(4194304), $m(K1, ra)), (t & 2080374784) !== 0 && (lg & 2080374784) !== 0 && (Ia(268435456), $m($1, ra)), a = e.timeoutHandle, a !== id && (e.timeoutHandle = id, fA(a)), a = e.cancelPendingCommit, a !== null && (e.cancelPendingCommit = null, a()), xi = 0, dh(), Qt = e, et = a = mu(
        e.current,
        null
      ), We = t, xt = Yn, nu = null, Qf = !1, Am = qi(e, t), kS = !1, dl = Co, td = qn = WS = Vf = Lf = 0, pn = h0 = null, gg = !1, (t & 8) !== 0 && (t |= t & 32), i = e.entangledLanes, i !== 0)
        for (e = e.entanglements, i &= t; 0 < i; )
          o = 31 - Wl(i), f = 1 << o, t |= e[o], i &= ~f;
      return Ec = t, Vo(), e = G1(), 1e3 < e - q1 && (w.recentlyCreatedOwnerStacks = 0, q1 = e), Hi.discardPendingWarnings(), a;
    }
    function Jy(e, t) {
      Be = null, w.H = c0, w.getCurrentStack = null, Nn = !1, fn = null, t === hm || t === ig ? (t = Rs(), xt = r0) : t === BS ? (t = Rs(), xt = Vb) : xt = t === VS ? $S : t !== null && typeof t == "object" && typeof t.then == "function" ? d0 : pg, nu = t;
      var a = et;
      a === null ? (dl = s0, $s(
        e,
        ma(t, e.current)
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
      dl = Xf, Qf || (We & 4194048) !== We && tu.current !== null || (Am = !0), (Lf & 134217727) === 0 && (Vf & 134217727) === 0 || Qt === null || Sa(
        Qt,
        We,
        qn,
        !1
      );
    }
    function yh(e, t, a) {
      var i = pt;
      pt |= ea;
      var o = Ky(), f = mh();
      if (Qt !== e || We !== t) {
        if (Bn) {
          var d = e.memoizedUpdaters;
          0 < d.size && (Gu(e, We), d.clear()), Rl(e, t);
        }
        m0 = null, ba(e, t);
      }
      t = !1, d = dl;
      e: do
        try {
          if (xt !== Yn && et !== null) {
            var h = et, y = nu;
            switch (xt) {
              case $S:
                dh(), d = yg;
                break e;
              case r0:
              case Pr:
              case ed:
              case d0:
                tu.current === null && (t = !0);
                var p = xt;
                if (xt = Yn, nu = null, uo(e, h, y, p), a && Am) {
                  d = Co;
                  break e;
                }
                break;
              default:
                p = xt, xt = Yn, nu = null, uo(e, h, y, p);
            }
          }
          ju(), d = dl;
          break;
        } catch (_) {
          Jy(e, _);
        }
      while (!0);
      return t && e.shellSuspendCounter++, $i(), pt = i, w.H = o, w.A = f, et === null && (Qt = null, We = 0, Vo()), d;
    }
    function ju() {
      for (; et !== null; ) ky(et);
    }
    function Sl(e, t) {
      var a = pt;
      pt |= ea;
      var i = Ky(), o = mh();
      if (Qt !== e || We !== t) {
        if (Bn) {
          var f = e.memoizedUpdaters;
          0 < f.size && (Gu(e, We), f.clear()), Rl(e, t);
        }
        m0 = null, bg = sl() + Kb, ba(e, t);
      } else
        Am = qi(
          e,
          t
        );
      e: do
        try {
          if (xt !== Yn && et !== null)
            t: switch (t = et, f = nu, xt) {
              case pg:
                xt = Yn, nu = null, uo(
                  e,
                  t,
                  f,
                  pg
                );
                break;
              case Pr:
              case ed:
                if (an(f)) {
                  xt = Yn, nu = null, Al(t);
                  break;
                }
                t = function() {
                  xt !== Pr && xt !== ed || Qt !== e || (xt = vg), Ta(e);
                }, f.then(t, t);
                break e;
              case r0:
                xt = vg;
                break e;
              case Vb:
                xt = KS;
                break e;
              case vg:
                an(f) ? (xt = Yn, nu = null, Al(t)) : (xt = Yn, nu = null, uo(
                  e,
                  t,
                  f,
                  vg
                ));
                break;
              case KS:
                var d = null;
                switch (et.tag) {
                  case 26:
                    d = et.memoizedState;
                  case 5:
                  case 27:
                    var h = et;
                    if (d ? Mh(d) : h.stateNode.complete) {
                      xt = Yn, nu = null;
                      var y = h.sibling;
                      if (y !== null) et = y;
                      else {
                        var p = h.return;
                        p !== null ? (et = p, fr(p)) : et = null;
                      }
                      break t;
                    }
                    break;
                  default:
                    console.error(
                      "Unexpected type of fiber triggered a suspensey commit. This is a bug in React."
                    );
                }
                xt = Yn, nu = null, uo(
                  e,
                  t,
                  f,
                  KS
                );
                break;
              case d0:
                xt = Yn, nu = null, uo(
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
      return $i(), w.H = i, w.A = o, pt = a, et !== null ? Co : (Qt = null, We = 0, Vo(), dl);
    }
    function $y() {
      for (; et !== null && !Zh(); )
        ky(et);
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
      ), e.memoizedProps = e.pendingProps, t === null ? fr(e) : et = t;
    }
    function Al(e) {
      var t = fe(e, Pg, e);
      e.memoizedProps = e.pendingProps, t === null ? fr(e) : et = t;
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
          av(t, e), e = et = Zo(e, Ec), t = nh(t, e, Ec);
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
          dl = s0, $s(
            e,
            ma(a, e.current)
          ), et = null;
          return;
        }
      } catch (f) {
        if (o !== null) throw et = o, f;
        dl = s0, $s(
          e,
          ma(a, e.current)
        ), et = null;
        return;
      }
      t.flags & 32768 ? (ot || i === pg ? e = !0 : Am || (We & 536870912) !== 0 ? e = !1 : (Qf = e = !0, (i === Pr || i === ed || i === r0 || i === d0) && (i = tu.current, i !== null && i.tag === 13 && (i.flags |= 16384))), Jt(t, e)) : fr(t);
    }
    function fr(e) {
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
          et = a;
          return;
        }
        if (t = t.sibling, t !== null) {
          et = t;
          return;
        }
        et = t = e;
      } while (t !== null);
      dl === Co && (dl = Lb);
    }
    function Jt(e, t) {
      do {
        var a = lv(e.alternate, e);
        if (a !== null) {
          a.flags &= 32767, et = a;
          return;
        }
        if ((e.mode & $e) !== Ce) {
          wc(e), a = e.actualDuration;
          for (var i = e.child; i !== null; )
            a += i.actualDuration, i = i.sibling;
          e.actualDuration = a;
        }
        if (a = e.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !t && (e = e.sibling, e !== null)) {
          et = e;
          return;
        }
        et = e = a;
      } while (e !== null);
      dl = yg, et = null;
    }
    function ca(e, t, a, i, o, f, d, h, y, p, _, R, b, Y) {
      e.cancelPendingCommit = null;
      do
        fc();
      while (Yl !== Jf);
      if (Hi.flushLegacyContextWarning(), Hi.flushPendingUnsafeLifecycleWarnings(), (pt & (ea | au)) !== ha)
        throw Error("Should not already be working.");
      if (Ia(a), p === Ir ? Km(
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
        if (f = t.lanes | t.childLanes, f |= AS, ls(
          e,
          a,
          f,
          d,
          h,
          y
        ), e === Qt && (et = Qt = null, We = 0), Om = t, Kf = e, xi = a, PS = f, t1 = o, Pb = i, e1 = Y, eE = R, ji = Eg, tE = null, t.actualDuration !== 0 || (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, rr(vo, function() {
          return b0 = window.event, ji === Eg && (ji = IS), Ea(), null;
        })) : (e.callbackNode = null, e.callbackPriority = 0), Ao = null, jf = Hl(), R !== null && Wg(
          Y,
          jf,
          R,
          bl
        ), i = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || i) {
          i = w.T, w.T = null, o = zt.p, zt.p = zl, d = pt, pt |= au;
          try {
            Yy(e, t, a);
          } finally {
            pt = d, zt.p = o, w.T = i;
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
          var o = zt.p;
          zt.p = zl;
          var f = pt;
          pt |= au;
          try {
            Em = a, Tm = e, ya(), Xy(t, e), Tm = Em = null, a = d1;
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
                    var dt = G0(
                      h,
                      oe
                    ), S = G0(
                      h,
                      Kt
                    );
                    if (dt && S && (Y.rangeCount !== 1 || Y.anchorNode !== dt.node || Y.anchorOffset !== dt.offset || Y.focusNode !== S.node || Y.focusOffset !== S.offset)) {
                      var E = R.createRange();
                      E.setStart(dt.node, dt.offset), Y.removeAllRanges(), oe > Kt ? (Y.addRange(E), Y.extend(S.node, S.offset)) : (E.setEnd(S.node, S.offset), Y.addRange(E));
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
            Yg = !!r1, d1 = r1 = null;
          } finally {
            pt = f, zt.p = o, w.T = i;
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
            ht,
            rt,
            "secondary-light"
          );
        }
        e = Kf, t = Om, a = xi;
        var i = (t.flags & 8772) !== 0;
        if ((t.subtreeFlags & 8772) !== 0 || i) {
          i = w.T, w.T = null;
          var o = zt.p;
          zt.p = zl;
          var f = pt;
          pt |= au;
          try {
            Em = a, Tm = e, ya(), hl(
              e,
              t.alternate,
              t
            ), Tm = Em = null;
          } finally {
            pt = f, zt.p = o, w.T = i;
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
            ht,
            rt,
            a ? "error" : "secondary-dark"
          )
        ) : console.timeStamp(
          a ? "Commit Interrupted View Transition" : "Commit",
          e,
          t,
          ht,
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
            ht,
            rt,
            a ? " error" : "secondary-light"
          ), ji !== FS && (ji = $b);
        }
        Yl = Jf, iS(), e = Kf;
        var i = Om;
        t = xi, a = Pb;
        var o = i.actualDuration !== 0 || (i.subtreeFlags & 10256) !== 0 || (i.flags & 10256) !== 0;
        o ? Yl = Tg : (Yl = Jf, Om = Kf = null, rv(
          e,
          e.pendingLanes
        ), ld = 0, p0 = null);
        var f = e.pendingLanes;
        if (f === 0 && (Zf = null), o || Rn(e), f = jo(t), i = i.stateNode, fa && typeof fa.onCommitFiberRoot == "function")
          try {
            var d = (i.current.flags & 128) === 128;
            switch (f) {
              case zl:
                var h = Jh;
                break;
              case Fl:
                h = Kh;
                break;
              case sn:
                h = vo;
                break;
              case yc:
                h = Br;
                break;
              default:
                h = vo;
            }
            fa.onCommitFiberRoot(
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
          d = w.T, h = zt.p, zt.p = zl, w.T = null;
          try {
            var y = e.onRecoverableError;
            for (i = 0; i < a.length; i++) {
              var p = a[i], _ = sv(p.stack);
              fe(
                p.source,
                y,
                p.value,
                _
              );
            }
          } finally {
            w.T = d, zt.p = h;
          }
        }
        (xi & 3) !== 0 && fc(), Ta(e), f = e.pendingLanes, (t & 261930) !== 0 && (f & 42) !== 0 ? (ng = !0, e === l1 ? y0++ : (y0 = 0, l1 = e)) : y0 = 0, o || $n(t, To), mf(0);
      }
    }
    function sv(e) {
      return e = { componentStack: e }, Object.defineProperty(e, "digest", {
        get: function() {
          console.error(
            'You are accessing "digest" from the errorInfo object passed to onRecoverableError. This property is no longer provided as part of errorInfo but can be accessed as a property of the Error instance itself.'
          );
        }
      }), e;
    }
    function rv(e, t) {
      (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, Os(t)));
    }
    function fc() {
      return Yu(), Wy(), Fy(), Ea();
    }
    function Ea() {
      if (Yl !== Tg) return !1;
      var e = Kf, t = PS;
      PS = 0;
      var a = jo(xi), i = sn > a ? sn : a;
      a = w.T;
      var o = zt.p;
      try {
        zt.p = i, w.T = null;
        var f = t1;
        t1 = null, i = Kf;
        var d = xi;
        if (Yl = Jf, Om = Kf = null, xi = 0, (pt & (ea | au)) !== ha)
          throw Error("Cannot flush passive effects while already rendering.");
        Ia(d), a1 = !0, Ag = !1;
        var h = 0;
        if (Ao = null, h = sl(), ji === $b)
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
              ht,
              rt,
              "secondary-light"
            )
          ) : console.timeStamp(
            _ ? "Waiting for Paint" : "Waiting",
            y,
            p,
            ht,
            rt,
            "secondary-light"
          ));
        }
        y = pt, pt |= au;
        var R = i.current;
        ya(), cv(R);
        var b = i.current;
        R = e1, ya(), fh(
          i,
          b,
          d,
          f,
          R
        ), Rn(i), pt = y;
        var Y = sl();
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
            ht,
            rt,
            "secondary-dark"
          )
        ) : console.timeStamp(
          "Remaining Effects",
          b,
          Y,
          ht,
          rt,
          "secondary-dark"
        )), $n(d, Y), mf(0, !1), Ag ? i === p0 ? ld++ : (ld = 0, p0 = i) : ld = 0, Ag = a1 = !1, fa && typeof fa.onPostCommitFiberRoot == "function")
          try {
            fa.onPostCommitFiberRoot(Ci, i);
          } catch (oe) {
            Zu || (Zu = !0, console.error(
              "React instrumentation encountered an error: %o",
              oe
            ));
          }
        var ne = i.current.stateNode;
        return ne.effectDuration = 0, ne.passiveEffectDuration = 0, !0;
      } finally {
        zt.p = o, w.T = a, rv(e, t);
      }
    }
    function Dn(e, t, a) {
      t = ma(a, t), Na(t), t = Kd(e.stateNode, t, 2), e = va(e, t, 2), e !== null && (wi(e, 2), Ta(e));
    }
    function vt(e, t, a) {
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
              e = ma(a, e), Na(e), a = $d(2), i = va(t, a, 2), i !== null && (ks(
                a,
                i,
                t,
                e
              ), wi(i, 2), Ta(i));
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
    function oa(e, t, a) {
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
      i !== null && i.delete(t), e.pingedLanes |= e.suspendedLanes & a, e.warmLanes &= ~a, (a & 127) !== 0 ? 0 > Sc && (Lr = Sc = Hl(), Zp = Iv("Promise Resolved"), Yf = Pv) : (a & 4194048) !== 0 && 0 > Pu && (Oo = Pu = Hl(), Kp = Iv("Promise Resolved"), CS = Pv), cr() && w.actQueue === null && console.error(
        `A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`
      ), Qt === e && (We & a) === a && (dl === Xf || dl === mg && (We & 62914560) === We && sl() - Sg < Jb ? (pt & ea) === ha && ba(e, 0) : WS |= a, td === We && (td = 0)), Ta(e);
    }
    function qu(e, t) {
      t === 0 && (t = xo()), e = Ql(e, t), e !== null && (wi(e, t), Ta(e));
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
    function sr(e, t, a) {
      if ((t.subtreeFlags & 67117056) !== 0)
        for (t = t.child; t !== null; ) {
          var i = e, o = t, f = o.type === _f;
          f = a || f, o.tag !== 22 ? o.flags & 67108864 ? f && fe(
            o,
            ph,
            i,
            o
          ) : sr(
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
            sr,
            i,
            o,
            f
          )), t = t.sibling;
        }
    }
    function ph(e, t) {
      me(!0);
      try {
        Qy(t), xu(t), Ly(e, t.alternate, t, !1), sh(e, t, 0, null, !1, 0);
      } finally {
        me(!1);
      }
    }
    function Rn(e) {
      var t = !0;
      e.current.mode & (Ka | Ui) || (t = !1), sr(
        e,
        e.current,
        t
      );
    }
    function Iy(e) {
      if ((pt & ea) === ha) {
        var t = e.tag;
        if (t === 3 || t === 1 || t === 0 || t === 11 || t === 14 || t === 15) {
          if (t = se(e) || "ReactComponent", Og !== null) {
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
        _a(e, a, t);
      });
    }
    function rr(e, t) {
      var a = w.actQueue;
      return a !== null ? (a.push(t), eA) : Rf(e, t);
    }
    function dr(e) {
      cr() && w.actQueue === null && fe(e, function() {
        console.error(
          `An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`,
          se(e)
        );
      });
    }
    function Ta(e) {
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
                f = (1 << 31 - Wl(42 | e) + 1) - 1, f &= o & ~(d & ~h), f = f & 201326741 ? f & 201326741 | 1 : f ? f | 2 : 0;
              }
              f !== 0 && (a = !0, ep(i, f));
            } else
              f = We, f = El(
                i,
                i === Qt ? f : 0,
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
      for (var t = sl(), a = null, i = zg; i !== null; ) {
        var o = i.next, f = Py(i, t);
        f === 0 ? (i.next = null, a === null ? zg = o : a.next = o, o === null && (_m = a)) : (a = i, (e !== 0 || (f & 3) !== 0) && (_g = !0)), i = o;
      }
      Yl !== Jf && Yl !== Tg || mf(e), $f !== 0 && ($f = 0);
    }
    function Py(e, t) {
      for (var a = e.suspendedLanes, i = e.pingedLanes, o = e.expirationTimes, f = e.pendingLanes & -62914561; 0 < f; ) {
        var d = 31 - Wl(f), h = 1 << d, y = o[d];
        y === -1 ? ((h & a) === 0 || (h & i) !== 0) && (o[d] = ts(h, t)) : y <= t && (e.expiredLanes |= h), f &= ~h;
      }
      if (t = Qt, a = We, a = El(
        e,
        e === t ? a : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== id
      ), i = e.callbackNode, a === 0 || e === t && (xt === Pr || xt === ed) || e.cancelPendingCommit !== null)
        return i !== null && tp(i), e.callbackNode = null, e.callbackPriority = 0;
      if ((a & 3) === 0 || qi(e, a)) {
        if (t = a & -a, t !== e.callbackPriority || w.actQueue !== null && i !== c1)
          tp(i);
        else return t;
        switch (jo(a)) {
          case zl:
          case Fl:
            a = Kh;
            break;
          case sn:
            a = vo;
            break;
          case yc:
            a = Br;
            break;
          default:
            a = vo;
        }
        return i = hr.bind(null, e), w.actQueue !== null ? (w.actQueue.push(i), a = c1) : a = Rf(a, i), e.callbackPriority = t, e.callbackNode = a, t;
      }
      return i !== null && tp(i), e.callbackPriority = 2, e.callbackNode = null, 2;
    }
    function hr(e, t) {
      if (ng = ag = !1, b0 = window.event, Yl !== Jf && Yl !== Tg)
        return e.callbackNode = null, e.callbackPriority = 0, null;
      var a = e.callbackNode;
      if (ji === Eg && (ji = IS), fc() && e.callbackNode !== a)
        return null;
      var i = We;
      return i = El(
        e,
        e === Qt ? i : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== id
      ), i === 0 ? null : (fv(
        e,
        i,
        t
      ), Py(e, sl()), e.callbackNode != null && e.callbackNode === a ? hr.bind(null, e) : null);
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
      }), sA(function() {
        (pt & (ea | au)) !== ha ? Rf(
          Jh,
          hv
        ) : co();
      });
    }
    function mt() {
      if ($f === 0) {
        var e = Jr;
        e === 0 && (e = xr, xr <<= 1, (xr & 261888) === 0 && (xr = 256)), $f = e;
      }
      return $f;
    }
    function Nt(e) {
      return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : (_t(e, "action"), Li("" + e));
    }
    function tt(e, t) {
      var a = t.ownerDocument.createElement("input");
      return a.name = t.name, a.value = t.value, e.id && a.setAttribute("form", e.id), t.parentNode.insertBefore(a, t), e = new FormData(e), a.parentNode.removeChild(a), e;
    }
    function ct(e, t, a, i, o) {
      if (t === "submit" && a && a.stateNode === o) {
        var f = Nt(
          (o[sa] || null).action
        ), d = i.submitter;
        d && (t = (t = d[sa] || null) ? Nt(t.formAction) : d.getAttribute("formAction"), t !== null && (f = t, d = null));
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
                    var y = d ? tt(
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
                  typeof f == "function" && (h.preventDefault(), y = d ? tt(
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
    function gt(e, t, a) {
      e.currentTarget = a;
      try {
        t(e);
      } catch (i) {
        SS(i);
      }
      e.currentTarget = null;
    }
    function Xa(e, t) {
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
                gt,
                f,
                h,
                p
              ) : gt(f, h, p), o = y;
            }
          else
            for (d = 0; d < i.length; d++) {
              if (h = i[d], y = h.instance, p = h.currentTarget, h = h.listener, y !== o && f.isPropagationStopped())
                break e;
              y !== null ? fe(
                y,
                gt,
                f,
                h,
                p
              ) : gt(f, h, p), o = y;
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
    function sc(e, t, a) {
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
    function mr(e) {
      if (!e[Dg]) {
        e[Dg] = !0, Yr.forEach(function(a) {
          a !== "selectionchange" && (o1.has(a) || sc(a, !1, e), sc(a, !0, e));
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Dg] || (t[Dg] = !0, sc("selectionchange", !1, t));
      }
    }
    function wu(e, t, a, i) {
      switch (Bh(t)) {
        case zl:
          var o = $l;
          break;
        case Fl:
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
        var p = f, _ = hs(a), R = [];
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
            var oe = (t & 4) !== 0, Kt = !oe && (e === "scroll" || e === "scrollend"), dt = oe ? b !== null ? b + "Capture" : null : b;
            oe = [];
            for (var S = p, E; S !== null; ) {
              var z = S;
              if (E = z.stateNode, z = z.tag, z !== 5 && z !== 26 && z !== 27 || E === null || dt === null || (z = fu(S, dt), z != null && oe.push(
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
            if ((Y || b) && (b = _.window === _ ? _ : (b = _.ownerDocument) ? b.defaultView || b.parentWindow : window, Y ? (ne = a.relatedTarget || a.toElement, Y = p, ne = ne ? I(ne) : null, ne !== null && (Kt = lt(ne), oe = ne.tag, ne !== Kt || oe !== 5 && oe !== 27 && oe !== 6) && (ne = null)) : (Y = null, ne = p), Y !== ne)) {
              if (oe = A1, z = "onMouseLeave", dt = "onMouseEnter", S = "mouse", (e === "pointerout" || e === "pointerover") && (oe = z1, z = "onPointerLeave", dt = "onPointerEnter", S = "pointer"), Kt = Y == null ? b : re(Y), E = ne == null ? b : re(ne), b = new oe(
                z,
                S + "leave",
                Y,
                a,
                _
              ), b.target = Kt, b.relatedTarget = E, z = null, I(_) === p && (oe = new oe(
                dt,
                S + "enter",
                ne,
                a,
                _
              ), oe.target = E, oe.relatedTarget = Kt, z = oe), Kt = z, Y && ne)
                t: {
                  for (oe = lp, dt = Y, S = ne, E = 0, z = dt; z; z = oe(z))
                    E++;
                  z = 0;
                  for (var Z = S; Z; Z = oe(Z))
                    z++;
                  for (; 0 < E - z; )
                    dt = oe(dt), E--;
                  for (; 0 < z - E; )
                    S = oe(S), z--;
                  for (; E--; ) {
                    if (dt === S || S !== null && dt === S.alternate) {
                      oe = dt;
                      break t;
                    }
                    dt = oe(dt), S = oe(S);
                  }
                  oe = null;
                }
              else oe = null;
              Y !== null && Qa(
                R,
                b,
                Y,
                oe,
                !1
              ), ne !== null && Kt !== null && Qa(
                R,
                Kt,
                ne,
                oe,
                !0
              );
            }
          }
          e: {
            if (b = p ? re(p) : window, Y = b.nodeName && b.nodeName.toLowerCase(), Y === "select" || Y === "input" && b.type === "file")
              var ie = ps;
            else if (ys(b))
              if (U1)
                ie = Sd;
              else {
                ie = Vm;
                var xe = Lm;
              }
            else
              Y = b.nodeName, !Y || Y.toLowerCase() !== "input" || b.type !== "checkbox" && b.type !== "radio" ? p && ds(p.elementType) && (ie = ps) : ie = vs;
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
          switch (xe = p ? re(p) : window, e) {
            case "focusin":
              (ys(xe) || xe.contentEditable === "true") && (am = xe, yS = p, Xp = null);
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
          ve && (D1 && a.locale !== "ko" && (lm || ve !== "onCompositionStart" ? ve === "onCompositionEnd" && lm && (Ee = wm()) : (Uf = _, sS = "value" in Uf ? Uf.value : Uf.textContent, lm = !0)), xe = Xu(
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
          ), 0 < ve.length && (xe = new sT(
            "onBeforeInput",
            "beforeinput",
            null,
            a,
            _
          ), R.push({
            event: xe,
            listeners: ve
          }), xe.data = Ee)), ct(
            R,
            e,
            p,
            a,
            _
          );
        }
        Xa(R, t);
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
    function Qa(e, t, a, i, o) {
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
    function rc(e, t) {
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
      ds(e) || typeof t.is == "string" || Jg(e, t, a), t.contentEditable && !t.suppressContentEditableWarning && t.children != null && console.error(
        "A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."
      );
    }
    function ol(e, t, a, i) {
      t !== a && (a = Oi(a), Oi(t) !== a && (i[e] = t));
    }
    function La(e, t, a) {
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
    function yr(e, t) {
      return e = e.namespaceURI === Pe || e.namespaceURI === ut ? e.ownerDocument.createElementNS(
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
    function pr(e, t) {
      return t = Oi(t), Oi(e) === t;
    }
    function Ot(e, t, a, i, o, f) {
      switch (a) {
        case "children":
          typeof i == "string" ? (wo(i, t, !1), t === "body" || t === "textarea" && i === "" || ou(e, i)) : (typeof i == "number" || typeof i == "bigint") && (wo("" + i, t, !1), t !== "body" && ou(e, "" + i));
          break;
        case "className":
          us(e, "class", i);
          break;
        case "tabIndex":
          us(e, "tabindex", i);
          break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
          us(e, a, i);
          break;
        case "style":
          Cc(e, i, f);
          break;
        case "data":
          if (t !== "object") {
            us(e, "data", i);
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
          _t(i, a), i = Li("" + i), e.setAttribute(a, i);
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
            typeof f == "function" && (a === "formAction" ? (t !== "input" && Ot(e, t, "name", o.name, o, null), Ot(
              e,
              t,
              "formEncType",
              o.formEncType,
              o,
              null
            ), Ot(
              e,
              t,
              "formMethod",
              o.formMethod,
              o,
              null
            ), Ot(
              e,
              t,
              "formTarget",
              o.formTarget,
              o,
              null
            )) : (Ot(
              e,
              t,
              "encType",
              o.encType,
              o,
              null
            ), Ot(e, t, "method", o.method, o, null), Ot(
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
          _t(i, a), i = Li("" + i), e.setAttribute(a, i);
          break;
        case "onClick":
          i != null && (typeof i != "function" && Cn(a, i), e.onclick = Xl);
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
          _t(i, a), a = Li("" + i), e.setAttributeNS(ad, "xlink:href", a);
          break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
          i != null && typeof i != "function" && typeof i != "symbol" ? (_t(i, a), e.setAttribute(a, "" + i)) : e.removeAttribute(a);
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
          i === !0 ? e.setAttribute(a, "") : i !== !1 && i != null && typeof i != "function" && typeof i != "symbol" ? (_t(i, a), e.setAttribute(a, i)) : e.removeAttribute(a);
          break;
        case "cols":
        case "rows":
        case "size":
        case "span":
          i != null && typeof i != "function" && typeof i != "symbol" && !isNaN(i) && 1 <= i ? (_t(i, a), e.setAttribute(a, i)) : e.removeAttribute(a);
          break;
        case "rowSpan":
        case "start":
          i == null || typeof i == "function" || typeof i == "symbol" || isNaN(i) ? e.removeAttribute(a) : (_t(i, a), e.setAttribute(a, i));
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
          i != null && (typeof i != "function" && Cn(a, i), e.onclick = Xl);
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
              if (a[0] === "o" && a[1] === "n" && (o = a.endsWith("Capture"), t = a.slice(2, o ? a.length - 7 : void 0), f = e[sa] || null, f = f != null ? f[a] : null, typeof f == "function" && e.removeEventListener(t, f, o), typeof i == "function")) {
                typeof f != "function" && f !== null && (a in e ? e[a] = null : e.hasAttribute(a) && e.removeAttribute(a)), e.addEventListener(t, i, o);
                break e;
              }
              a in e ? e[a] = i : i === !0 ? e.setAttribute(a, "") : Ac(e, a, i);
            }
      }
    }
    function st(e, t, a) {
      switch (rc(t, a), t) {
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
                    Ot(e, t, f, d, a, null);
                }
            }
          o && Ot(e, t, "srcSet", a.srcSet, a, null), i && Ot(e, t, "src", a.src, a, null);
          return;
        case "input":
          wl("input", a), Ge("invalid", e);
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
                    Ot(e, t, i, _, a, null);
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
          wl("select", a), Ge("invalid", e), i = d = f = null;
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
                  Ot(
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
          wl("textarea", a), Ge("invalid", e), f = o = i = null;
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
                  Ot(
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
            a.hasOwnProperty(y) && (i = a[y], i != null) && (y === "selected" ? e.selected = i && typeof i != "function" && typeof i != "symbol" : Ot(e, t, y, i, a, null));
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
                  Ot(e, t, p, i, a, null);
              }
          return;
        default:
          if (ds(t)) {
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
        a.hasOwnProperty(h) && (i = a[h], i != null && Ot(e, t, h, i, a, null));
    }
    function dc(e, t, a, i) {
      switch (rc(t, i), t) {
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
                  i.hasOwnProperty(Y) || Ot(
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
                  Y !== R && Ot(
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
          ), nE = !0), is(
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
                  i.hasOwnProperty(f) || Ot(
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
                  f !== y && Ot(
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
                  Ot(e, t, h, null, i, o);
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
                  o !== f && Ot(e, t, d, o, i, f);
              }
          qo(e, b, Y);
          return;
        case "option":
          for (var ne in a)
            b = a[ne], a.hasOwnProperty(ne) && b != null && !i.hasOwnProperty(ne) && (ne === "selected" ? e.selected = !1 : Ot(
              e,
              t,
              ne,
              null,
              i,
              b
            ));
          for (y in i)
            b = i[y], Y = a[y], i.hasOwnProperty(y) && b !== Y && (b != null || Y != null) && (y === "selected" ? e.selected = b && typeof b != "function" && typeof b != "symbol" : Ot(
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
            b = a[oe], a.hasOwnProperty(oe) && b != null && !i.hasOwnProperty(oe) && Ot(
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
                  Ot(
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
          if (ds(t)) {
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
      for (var dt in a)
        b = a[dt], a.hasOwnProperty(dt) && b != null && !i.hasOwnProperty(dt) && Ot(e, t, dt, null, i, b);
      for (R in i)
        b = i[R], Y = a[R], !i.hasOwnProperty(R) || b === Y || b == null && Y == null || Ot(e, t, R, b, i, Y);
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
            d != null && typeof d != "boolean" && d !== "" && (f.indexOf("--") === 0 ? (Gl(d, f), i += o + f + ":" + ("" + d).trim()) : typeof d != "number" || d === 0 || Qe.has(f) ? (Gl(d, f), i += o + f.replace(he, "-$1").toLowerCase().replace(_e, "-ms-") + ":" + ("" + d).trim()) : i += o + f.replace(he, "-$1").toLowerCase().replace(_e, "-ms-") + ":" + d + "px", o = ";");
          }
        i = i || null, t = e.getAttribute("style"), t !== i && (i = Oi(i), Oi(t) !== i && (a.style = kn(e)));
      }
    }
    function Va(e, t, a, i, o, f) {
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
            if (_t(i, t), e === "" + i)
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
            if (_t(i, a), e === "" + i)
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
            if (!isNaN(i) && (_t(i, t), e === "" + i))
              return;
        }
      ol(t, e, i, f);
    }
    function Aa(e, t, a, i, o, f) {
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
            if (_t(i, t), a = Li("" + i), e === a)
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
      if (ds(t)) {
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
                    d = e.innerHTML, p = p ? p.__html : void 0, p != null && (p = yr(e, p), ol(
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
                  d = e.innerHTML, y = y ? y.__html : void 0, y != null && (y = yr(e, y), d !== y && (o[p] = { __html: d }));
                  continue;
                case "className":
                  Va(
                    e,
                    p,
                    "class",
                    y,
                    f,
                    o
                  );
                  continue;
                case "tabIndex":
                  Va(
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
                  Aa(
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
                  Aa(
                    e,
                    p,
                    p.toLowerCase(),
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkHref":
                  Aa(
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
                          if (_t(y, d), h === "" + y)
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
                          if (!(isNaN(y) || 1 > y) && (_t(y, d), h === "" + y))
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
                  Va(
                    e,
                    p,
                    "x-height",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkActuate":
                  Va(
                    e,
                    p,
                    "xlink:actuate",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkArcrole":
                  Va(
                    e,
                    p,
                    "xlink:arcrole",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkRole":
                  Va(
                    e,
                    p,
                    "xlink:role",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkShow":
                  Va(
                    e,
                    p,
                    "xlink:show",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkTitle":
                  Va(
                    e,
                    p,
                    "xlink:title",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkType":
                  Va(
                    e,
                    p,
                    "xlink:type",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xmlBase":
                  Va(
                    e,
                    p,
                    "xml:base",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xmlLang":
                  Va(
                    e,
                    p,
                    "xml:lang",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xmlSpace":
                  Va(
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
                    e: if (_ = e, R = h, h = y, Da(R))
                      if (_.hasAttribute(R))
                        _ = _.getAttribute(
                          R
                        ), _t(
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
      return 0 < f.size && a.suppressHydrationWarning !== !0 && La(e, f, o), Object.keys(o).length === 0 ? null : o;
    }
    function Za(e, t) {
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
        case ut:
          return Rm;
        case Pe:
          return Ng;
        default:
          return Uo;
      }
    }
    function vr(e, t) {
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
    function gr(e, t) {
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
      dc(e, t, a, i), e[sa] = i;
    }
    function gv(e) {
      ou(e, "");
    }
    function eS(e, t, a) {
      e.nodeValue = a;
    }
    function Sv(e) {
      if (!e.__reactWarnedAboutChildrenConflict) {
        var t = e[sa] || null;
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
    function Sr(e, t) {
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
            Tr(
              e.ownerDocument.documentElement
            );
          else if (a === cA) {
            a = e.ownerDocument.head, Tr(a);
            for (var f = a.firstChild; f; ) {
              var d = f.nextSibling, h = f.nodeName;
              f[jr] || h === "SCRIPT" || h === "STYLE" || h === "LINK" && f.rel.toLowerCase() === "stylesheet" || a.removeChild(f), f = d;
            }
          } else
            a === iA && Tr(e.ownerDocument.body);
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
          if (!e[jr])
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
          _t(o.name, "name");
          var f = o.name == null ? null : "" + o.name;
          if (o.type === "hidden" && e.getAttribute("name") === f)
            return e;
        } else return e;
        if (e = on(e.nextSibling), e === null) break;
      }
      return null;
    }
    function Ct(e, t, a) {
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
          if (t = e.data, t === g0 || t === Dm || t === kf || t === ud || t === nd || t === s1 || t === oE)
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
    function br(e, t, a) {
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
    function Er(e, t, a, i) {
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
      st(a, e, t), a[Il] = i, a[sa] = t;
    }
    function Tr(e) {
      for (var t = e.attributes; t.length; )
        e.removeAttributeNode(t[0]);
      M(e);
    }
    function Ar(e) {
      return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
    }
    function sp(e, t, a) {
      var i = Mm;
      if (i && typeof t == "string" && t) {
        var o = Zt(t);
        o = 'link[rel="' + e + '"][href="' + o + '"]', typeof a == "string" && (o += '[crossorigin="' + a + '"]'), yE.has(o) || (yE.add(o), e = { rel: e, crossOrigin: a, href: t }, i.querySelector(o) === null && (t = i.createElement("link"), st(t, "link", e), ye(t), i.head.appendChild(t)));
      }
    }
    function rp(e, t, a, i) {
      var o = (o = Hn.current) ? Ar(o) : null;
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
              so(e)
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

  - ` + Or(t) + `
  + ` + Or(a), Error(
                "Expected <link> not to update to be updated to a stylesheet with precedence. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key." + a
              );
            return d;
          }
          if (t && i !== null)
            throw a = `

  - ` + Or(t) + `
  + ` + Or(a), Error(
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
    function Or(e) {
      var t = 0, a = "<link";
      return typeof e.rel == "string" ? (t++, a += ' rel="' + e.rel + '"') : In.call(e, "rel") && (t++, a += ' rel="' + (e.rel === null ? "null" : "invalid type " + typeof e.rel) + '"'), typeof e.href == "string" ? (t++, a += ' href="' + e.href + '"') : In.call(e, "href") && (t++, a += ' href="' + (e.href === null ? "null" : "invalid type " + typeof e.href) + '"'), typeof e.precedence == "string" ? (t++, a += ' precedence="' + e.precedence + '"') : In.call(e, "precedence") && (t++, a += " precedence={" + (e.precedence === null ? "null" : "invalid type " + typeof e.precedence) + "}"), Object.getOwnPropertyNames(e).length > t && (a += " ..."), a + " />";
    }
    function Sf(e) {
      return 'href="' + Zt(e) + '"';
    }
    function so(e) {
      return 'link[rel="stylesheet"][' + e + "]";
    }
    function dp(e) {
      return Ve({}, e, {
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
      }), st(t, "link", a), ye(t), e.head.appendChild(t));
    }
    function bf(e) {
      return '[src="' + Zt(e) + '"]';
    }
    function ro(e) {
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
            var o = Ve({}, a, {
              "data-href": a.href,
              "data-precedence": a.precedence,
              href: null,
              precedence: null
            });
            return i = (e.ownerDocument || e).createElement("style"), ye(i), st(i, "style", o), Rh(i, a.precedence, e), t.instance = i;
          case "stylesheet":
            o = Sf(a.href);
            var f = e.querySelector(
              so(o)
            );
            if (f)
              return t.state.loading |= ai, t.instance = f, ye(f), f;
            i = dp(a), (o = ni.get(o)) && hp(i, o), f = (e.ownerDocument || e).createElement("link"), ye(f);
            var d = f;
            return d._p = new Promise(function(h, y) {
              d.onload = h, d.onerror = y;
            }), st(f, "link", i), t.state.loading |= ai, Rh(f, a.precedence, e), t.instance = f;
          case "script":
            return f = bf(a.src), (o = e.querySelector(
              ro(f)
            )) ? (t.instance = o, ye(o), o) : (i = a, (o = ni.get(f)) && (i = Ve({}, a), ho(i, o)), e = e.ownerDocument || e, o = e.createElement("script"), ye(o), st(o, "link", i), e.head.appendChild(o), t.instance = o);
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
        if (!(f[jr] || f[Il] || e === "link" && f.getAttribute("rel") === "stylesheet") && f.namespaceURI !== ut) {
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
    function nt(e, t, a) {
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
              a = [], t.onLoad && a.push("`onLoad`"), o && a.push("`onError`"), f != null && a.push("`disabled`"), o = Za(a, "and"), o += a.length === 1 ? " prop" : " props", f = a.length === 1 ? "an " + o : "the " + o, a.length && console.error(
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
            so(o)
          );
          if (f) {
            t = f._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = zr.bind(e), t.then(e, e)), a.state.loading |= ai, a.instance = f, ye(f);
            return;
          }
          f = t.ownerDocument || t, i = dp(i), (o = ni.get(o)) && hp(i, o), f = f.createElement("link"), ye(f);
          var d = f;
          d._p = new Promise(function(h, y) {
            d.onload = h, d.onerror = y;
          }), st(f, "link", i), a.instance = f;
        }
        e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(a, t), (t = a.state.preload) && (a.state.loading & mE) === cd && (e.count++, a = zr.bind(e), t.addEventListener("load", a), t.addEventListener("error", a));
      }
    }
    function yp(e, t) {
      return e.stylesheets && e.count === 0 && Ef(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(a) {
        var i = setTimeout(function() {
          if (e.stylesheets && Ef(e, e.stylesheets), e.unsuspend) {
            var f = e.unsuspend;
            e.unsuspend = null, f();
          }
        }, rA + t);
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
    function zr() {
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
      e.stylesheets = null, e.unsuspend !== null && (e.count++, xg = /* @__PURE__ */ new Map(), t.forEach(_r, e), xg = null, zr.call(e));
    }
    function _r(e, t) {
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
        o = t.instance, d = o.getAttribute("data-precedence"), f = a.get(d) || i, f === i && a.set(p1, o), a.set(d, o), this.count++, i = zr.bind(this), o.addEventListener("load", i), o.addEventListener("error", i), f ? f.parentNode.insertBefore(o, f.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(o, e.firstChild)), t.state.loading |= ai;
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
      ), t = YT, f === !0 && (t |= Ka | Ui), t |= $e, f = U(3, null, null, t), e.current = f, f.stateNode = e, t = ny(), Gc(t), e.pooledCache = t, Gc(t), f.memoizedState = {
        element: i,
        isDehydrated: a,
        cache: t
      }, Tu(f), e;
    }
    function pp(e) {
      return e ? (e = Bf, e) : Bf;
    }
    function vp(e, t, a, i, o, f) {
      if (fa && typeof fa.onScheduleFiberRoot == "function")
        try {
          fa.onScheduleFiberRoot(Ci, i, a);
        } catch (d) {
          Zu || (Zu = !0, console.error(
            "React instrumentation encountered an error: %o",
            d
          ));
        }
      o = pp(o), i.context === null ? i.context = o : i.pendingContext = o, Nn && fn !== null && !SE && (SE = !0, console.error(
        `Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`,
        se(fn) || "Unknown"
      )), i = Au(t), i.payload = { element: a }, f = f === void 0 ? null : f, f !== null && (typeof f != "function" && console.error(
        "Expected the last optional `callback` argument to be a function. Instead received: %s.",
        f
      ), i.callback = f), a = va(e, i, t), a !== null && (wn(t, "root.render()", null), ll(a, e, t), ko(a, e, t));
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
        var t = Ql(e, 67108864);
        t !== null && ll(t, e, 67108864), Hh(e, 67108864);
      }
    }
    function Ut(e) {
      if (e.tag === 13 || e.tag === 31) {
        var t = Kl(e);
        t = pl(t);
        var a = Ql(e, t);
        a !== null && ll(a, e, t), Hh(e, t);
      }
    }
    function Sp() {
      return fn;
    }
    function $l(e, t, a, i) {
      var o = w.T;
      w.T = null;
      var f = zt.p;
      try {
        zt.p = zl, Nh(e, t, a, i);
      } finally {
        zt.p = f, w.T = o;
      }
    }
    function lS(e, t, a, i) {
      var o = w.T;
      w.T = null;
      var f = zt.p;
      try {
        zt.p = Fl, Nh(e, t, a, i);
      } finally {
        zt.p = f, w.T = o;
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
          ), Rr(e, i);
        else if (Hv(
          o,
          e,
          t,
          a,
          i
        ))
          i.stopPropagation();
        else if (Rr(e, i), t & 4 && -1 < yA.indexOf(e)) {
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
                        var y = 1 << 31 - Wl(d);
                        h.entanglements[1] |= y, d &= ~y;
                      }
                      Ta(f), (pt & (ea | au)) === ha && (bg = sl() + Kb, mf(0));
                    }
                  }
                  break;
                case 31:
                case 13:
                  h = Ql(f, 2), h !== null && ll(h, f, 2), ao(), Hh(f, 2);
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
      return e = hs(e), Dr(e);
    }
    function Dr(e) {
      if (qg = null, e = I(e), e !== null) {
        var t = lt(e);
        if (t === null) e = null;
        else {
          var a = t.tag;
          if (a === 13) {
            if (e = Dt(t), e !== null) return e;
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
          return Fl;
        case "message":
          switch (cS()) {
            case Jh:
              return zl;
            case Kh:
              return Fl;
            case vo:
            case Yv:
              return sn;
            case Br:
              return yc;
            default:
              return sn;
          }
        default:
          return sn;
      }
    }
    function Rr(e, t) {
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
        var a = lt(t);
        if (a !== null) {
          if (t = a.tag, t === 13) {
            if (t = Dt(a), t !== null) {
              e.blockedOn = t, v(e.priority, function() {
                Ut(a);
              });
              return;
            }
          } else if (t === 31) {
            if (t = Lt(a), t !== null) {
              e.blockedOn = t, v(e.priority, function() {
                Ut(a);
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
              if (Dr(i || a) === null)
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
          var o = a[i], f = a[i + 1], d = o[sa] || null;
          if (typeof f == "function")
            d || Ep(a);
          else if (d) {
            var h = null;
            if (f && f.hasAttribute("formAction")) {
              if (o = f, d = f[sa] || null)
                h = d.formAction;
              else if (Dr(o) !== null) continue;
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
    function Mr(e) {
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
    var fl = KE(), Ap = Um(), aS = $E(), Ve = Object.assign, Op = /* @__PURE__ */ Symbol.for("react.element"), Un = /* @__PURE__ */ Symbol.for("react.transitional.element"), zf = /* @__PURE__ */ Symbol.for("react.portal"), kl = /* @__PURE__ */ Symbol.for("react.fragment"), _f = /* @__PURE__ */ Symbol.for("react.strict_mode"), Yh = /* @__PURE__ */ Symbol.for("react.profiler"), qh = /* @__PURE__ */ Symbol.for("react.consumer"), Fn = /* @__PURE__ */ Symbol.for("react.context"), Di = /* @__PURE__ */ Symbol.for("react.forward_ref"), Ja = /* @__PURE__ */ Symbol.for("react.suspense"), Gh = /* @__PURE__ */ Symbol.for("react.suspense_list"), mo = /* @__PURE__ */ Symbol.for("react.memo"), ml = /* @__PURE__ */ Symbol.for("react.lazy"), zp = /* @__PURE__ */ Symbol.for("react.activity"), nS = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), yo = Symbol.iterator, jv = /* @__PURE__ */ Symbol.for("react.client.reference"), Ol = Array.isArray, w = Ap.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, zt = aS.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, uS = Object.freeze({
      pending: !1,
      data: null,
      method: null,
      action: null
    }), _p = [], Dp = [], Ri = -1, Mi = Et(null), Vu = Et(null), Hn = Et(null), Cr = Et(null), Ur = 0, po, Df, Rp, Hr, wh, Xh, Nr;
    O.__reactDisabledLog = !0;
    var Qh, Mp, Cp = !1, Lh = new (typeof WeakMap == "function" ? WeakMap : Map)(), fn = null, Nn = !1, In = Object.prototype.hasOwnProperty, Rf = fl.unstable_scheduleCallback, Vh = fl.unstable_cancelCallback, Zh = fl.unstable_shouldYield, iS = fl.unstable_requestPaint, sl = fl.unstable_now, cS = fl.unstable_getCurrentPriorityLevel, Jh = fl.unstable_ImmediatePriority, Kh = fl.unstable_UserBlockingPriority, vo = fl.unstable_NormalPriority, Yv = fl.unstable_LowPriority, Br = fl.unstable_IdlePriority, qv = fl.log, Gv = fl.unstable_setDisableYieldValue, Ci = null, fa = null, Zu = !1, Bn = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u", Wl = Math.clz32 ? Math.clz32 : Bo, $h = Math.log, Up = Math.LN2, xr = 256, Mf = 262144, Pn = 4194304, zl = 2, Fl = 8, sn = 32, yc = 268435456, Oa = Math.random().toString(36).slice(2), Il = "__reactFiber$" + Oa, sa = "__reactProps$" + Oa, xn = "__reactContainer$" + Oa, Hp = "__reactEvents$" + Oa, wv = "__reactListeners$" + Oa, kh = "__reactHandles$" + Oa, Np = "__reactResources$" + Oa, jr = "__reactMarker$" + Oa, Yr = /* @__PURE__ */ new Set(), Ju = {}, Wh = {}, Cf = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    }, Xv = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), Fh = {}, qr = {}, Qv = /[\n"\\]/g, Lv = !1, Gr = !1, l = !1, n = !1, u = !1, c = !1, s = ["value", "defaultValue"], r = !1, m = /["'&<>\n\t]|^\s|\s$/, g = "address applet area article aside base basefont bgsound blockquote body br button caption center col colgroup dd details dir div dl dt embed fieldset figcaption figure footer form frame frameset h1 h2 h3 h4 h5 h6 head header hgroup hr html iframe img input isindex li link listing main marquee menu menuitem meta nav noembed noframes noscript object ol p param plaintext pre script section select source style summary table tbody td template textarea tfoot th thead title tr track ul wbr xmp".split(
      " "
    ), T = "applet caption html table td th marquee object template foreignObject desc title".split(
      " "
    ), N = T.concat(["button"]), V = "dd dt li option optgroup p rp rt".split(" "), W = {
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
    }, he = /([A-Z])/g, _e = /^ms-/, Bt = /^(?:webkit|moz|o)[A-Z]/, C = /^-ms-/, D = /-(.)/g, H = /;\s*$/, J = {}, Se = {}, yt = !1, pe = !1, Qe = new Set(
      "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
        " "
      )
    ), Pe = "http://www.w3.org/1998/Math/MathML", ut = "http://www.w3.org/2000/svg", pc = /* @__PURE__ */ new Map([
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
    ), E1 = !1, rn = {}, T1 = /^on./, FE = /^on[^A-Z]/, IE = RegExp(
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
    var Uf = null, sS = null, Vv = null, wr = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, Zv = nl(wr), jp = Ve({}, wr, { view: 0, detail: 0 }), tT = nl(jp), rS, dS, Yp, Jv = Ve({}, jp, {
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
        return "movementX" in e ? e.movementX : (e !== Yp && (Yp && e.type === "mousemove" ? (rS = e.screenX - Yp.screenX, dS = e.screenY - Yp.screenY) : dS = rS = 0, Yp = e), rS);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : dS;
      }
    }), A1 = nl(Jv), lT = Ve({}, Jv, { dataTransfer: 0 }), aT = nl(lT), nT = Ve({}, jp, { relatedTarget: 0 }), hS = nl(nT), uT = Ve({}, wr, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), iT = nl(uT), cT = Ve({}, wr, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), oT = nl(cT), fT = Ve({}, wr, { data: 0 }), O1 = nl(
      fT
    ), sT = O1, rT = {
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
    }, mT = Ve({}, jp, {
      key: function(e) {
        if (e.key) {
          var t = rT[e.key] || e.key;
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
    }), yT = nl(mT), pT = Ve({}, Jv, {
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
    }), z1 = nl(pT), vT = Ve({}, jp, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Hc
    }), gT = nl(vT), ST = Ve({}, wr, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), bT = nl(ST), ET = Ve({}, Jv, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
      },
      deltaZ: 0,
      deltaMode: 0
    }), TT = nl(ET), AT = Ve({}, wr, {
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
    }, BT = "This object has been omitted by React in the console log to avoid sending too much data from the server. Try logging smaller or more specific objects.", Kv = 0, bS = 1, ES = 2, TS = 3, $v = "– ", kv = "+ ", w1 = "  ", Ft = typeof console < "u" && typeof console.timeStamp == "function" && typeof performance < "u" && typeof performance.measure == "function", Ku = "Components ⚛", rt = "Scheduler ⚛", ht = "Blocking", Hf = !1, go = {
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
    var ku = null, im = null, Ce = 0, YT = 1, $e = 2, Ka = 8, Ui = 16, qT = 32, Q1 = !1;
    try {
      var L1 = Object.preventExtensions({});
    } catch {
      Q1 = !0;
    }
    var OS = /* @__PURE__ */ new WeakMap(), cm = [], om = 0, Wv = null, Lp = 0, Wu = [], Fu = 0, Xr = null, bo = 1, Eo = "", za = null, It = null, ot = !1, gc = !1, eu = null, xf = null, Iu = !1, zS = Error(
      "Hydration Mismatch Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."
    ), _S = Et(null), DS = Et(null), V1 = {}, Fv = null, fm = null, sm = !1, GT = typeof AbortController < "u" ? AbortController : function() {
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
    }, Vp = 1, Pv = 2, ra = -0, jf = -0, To = -0, Ao = null, hn = -1.1, Qr = -0, rl = -0, Ae = -1.1, De = -1.1, al = null, yl = !1, Lr = -0, Sc = -1.1, Zp = null, Yf = 0, RS = null, MS = null, Vr = -1.1, Jp = null, rm = -1.1, eg = -1.1, Oo = -0, zo = -1.1, Pu = -1.1, CS = 0, Kp = null, Z1 = null, J1 = null, qf = -1.1, Zr = null, Gf = -1.1, tg = -1.1, K1 = -0, $1 = -0, lg = 0, QT = null, k1 = 0, $p = -1.1, ag = !1, ng = !1, kp = null, US = 0, Jr = 0, dm = null, W1 = w.S;
    w.S = function(e, t) {
      if (Zb = sl(), typeof t == "object" && t !== null && typeof t.then == "function") {
        if (0 > zo && 0 > Pu) {
          zo = Hl();
          var a = vf(), i = pf();
          (a !== Gf || i !== Zr) && (Gf = -1.1), qf = a, Zr = i;
        }
        F0(e, t);
      }
      W1 !== null && W1(e, t);
    };
    var Kr = Et(null), Hi = {
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
    }, Wp = [], Fp = [], Ip = [], Pp = [], e0 = [], t0 = [], $r = /* @__PURE__ */ new Set();
    Hi.recordUnsafeLifecycleWarnings = function(e, t) {
      $r.has(e.type) || (typeof t.componentWillMount == "function" && t.componentWillMount.__suppressDeprecationWarning !== !0 && Wp.push(e), e.mode & Ka && typeof t.UNSAFE_componentWillMount == "function" && Fp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && Ip.push(e), e.mode & Ka && typeof t.UNSAFE_componentWillReceiveProps == "function" && Pp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && e0.push(e), e.mode & Ka && typeof t.UNSAFE_componentWillUpdate == "function" && t0.push(e));
    }, Hi.flushPendingUnsafeLifecycleWarnings = function() {
      var e = /* @__PURE__ */ new Set();
      0 < Wp.length && (Wp.forEach(function(h) {
        e.add(
          se(h) || "Component"
        ), $r.add(h.type);
      }), Wp = []);
      var t = /* @__PURE__ */ new Set();
      0 < Fp.length && (Fp.forEach(function(h) {
        t.add(
          se(h) || "Component"
        ), $r.add(h.type);
      }), Fp = []);
      var a = /* @__PURE__ */ new Set();
      0 < Ip.length && (Ip.forEach(function(h) {
        a.add(
          se(h) || "Component"
        ), $r.add(h.type);
      }), Ip = []);
      var i = /* @__PURE__ */ new Set();
      0 < Pp.length && (Pp.forEach(
        function(h) {
          i.add(
            se(h) || "Component"
          ), $r.add(h.type);
        }
      ), Pp = []);
      var o = /* @__PURE__ */ new Set();
      0 < e0.length && (e0.forEach(function(h) {
        o.add(
          se(h) || "Component"
        ), $r.add(h.type);
      }), e0 = []);
      var f = /* @__PURE__ */ new Set();
      if (0 < t0.length && (t0.forEach(function(h) {
        f.add(
          se(h) || "Component"
        ), $r.add(h.type);
      }), t0 = []), 0 < t.size) {
        var d = $(
          t
        );
        console.error(
          `Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`,
          d
        );
      }
      0 < i.size && (d = $(
        i
      ), console.error(
        `Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state

Please update the following components: %s`,
        d
      )), 0 < f.size && (d = $(
        f
      ), console.error(
        `Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`,
        d
      )), 0 < e.size && (d = $(e), console.warn(
        `componentWillMount has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
        d
      )), 0 < a.size && (d = $(
        a
      ), console.warn(
        `componentWillReceiveProps has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
        d
      )), 0 < o.size && (d = $(o), console.warn(
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
        i.mode & Ka && (a = i), i = i.return;
      a === null ? console.error(
        "Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue."
      ) : !F1.has(e.type) && (i = ug.get(a), e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], ug.set(a, i)), i.push(e));
    }, Hi.flushLegacyContextWarning = function() {
      ug.forEach(function(e) {
        if (e.length !== 0) {
          var t = e[0], a = /* @__PURE__ */ new Set();
          e.forEach(function(o) {
            a.add(se(o) || "Component"), F1.add(o.type);
          });
          var i = $(a);
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
          vt(e, e.return, a);
        }
      }
    }, NS = tb.react_stack_bottom_frame.bind(
      tb
    ), lb = {
      react_stack_bottom_frame: function(e, t, a, i, o) {
        try {
          t.componentDidUpdate(a, i, o);
        } catch (f) {
          vt(e, e.return, f);
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
          vt(e, t, i);
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
          vt(e, t, i);
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
    }, kr = null, l0 = !1, mm = null, a0 = 0, ke = null, xS, sb = xS = !1, rb = {}, db = {}, hb = {};
    de = function(e, t, a) {
      if (a !== null && typeof a == "object" && a._store && (!a._store.validated && a.key == null || a._store.validated === 2)) {
        if (typeof a._store != "object")
          throw Error(
            "React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue."
          );
        a._store.validated = 1;
        var i = se(e), o = i || "null";
        if (!rb[o]) {
          rb[o] = !0, a = a._owner, e = e._debugOwner;
          var f = "";
          e && typeof e.tag == "number" && (o = se(e)) && (f = `

Check the render method of \`` + o + "`."), f || i && (f = `

Check the top-level render call using <` + i + ">.");
          var d = "";
          a != null && e !== a && (i = null, typeof a.tag == "number" ? i = se(a) : typeof a.name == "string" && (i = a.name), i && (d = " It was passed a child from " + i + ".")), fe(t, function() {
            console.error(
              'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
              f,
              d
            );
          });
        }
      }
    };
    var Wr = Gt(!0), mb = Gt(!1), yb = 0, pb = 1, vb = 2, jS = 3, wf = !1, gb = !1, YS = null, qS = !1, ym = Et(null), og = Et(0), tu = Et(null), ei = null, pm = 1, n0 = 2, _l = Et(0), fg = 0, ti = 1, mn = 2, lu = 4, yn = 8, vm, Sb = /* @__PURE__ */ new Set(), bb = /* @__PURE__ */ new Set(), GS = /* @__PURE__ */ new Set(), Eb = /* @__PURE__ */ new Set(), _o = 0, Be = null, Xt = null, Nl = null, sg = !1, gm = !1, Fr = !1, rg = 0, u0 = 0, Do = null, KT = 0, $T = 25, q = null, li = null, Ro = -1, i0 = !1, c0 = {
      readContext: qt,
      use: Ya,
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
        return qt(e);
      },
      use: Ya,
      useCallback: function(e, t) {
        return q = "useCallback", be(), Lc(t), Ru(e, t);
      },
      useContext: function(e) {
        return q = "useContext", be(), qt(e);
      },
      useEffect: function(e, t) {
        return q = "useEffect", be(), Lc(t), ws(e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return q = "useImperativeHandle", be(), Lc(a), Qs(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        q = "useInsertionEffect", be(), Lc(t), An(4, mn, e, t);
      },
      useLayoutEffect: function(e, t) {
        return q = "useLayoutEffect", be(), Lc(t), Ga(e, t);
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
        return q = "useEffectEvent", be(), Xs(e);
      }
    }, Tb = {
      readContext: function(e) {
        return qt(e);
      },
      use: Ya,
      useCallback: function(e, t) {
        return q = "useCallback", F(), Ru(e, t);
      },
      useContext: function(e) {
        return q = "useContext", F(), qt(e);
      },
      useEffect: function(e, t) {
        return q = "useEffect", F(), ws(e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return q = "useImperativeHandle", F(), Qs(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        q = "useInsertionEffect", F(), An(4, mn, e, t);
      },
      useLayoutEffect: function(e, t) {
        return q = "useLayoutEffect", F(), Ga(e, t);
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
        return q = "useEffectEvent", F(), Xs(e);
      }
    }, XS = {
      readContext: function(e) {
        return qt(e);
      },
      use: Ya,
      useCallback: function(e, t) {
        return q = "useCallback", F(), ia(e, t);
      },
      useContext: function(e) {
        return q = "useContext", F(), qt(e);
      },
      useEffect: function(e, t) {
        q = "useEffect", F(), Ll(2048, yn, e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return q = "useImperativeHandle", F(), Ls(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        return q = "useInsertionEffect", F(), Ll(4, mn, e, t);
      },
      useLayoutEffect: function(e, t) {
        return q = "useLayoutEffect", F(), Ll(4, lu, e, t);
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
        return q = "useRef", F(), At().memoizedState;
      },
      useState: function() {
        q = "useState", F();
        var e = w.H;
        w.H = Ni;
        try {
          return Zn(qa);
        } finally {
          w.H = e;
        }
      },
      useDebugValue: function() {
        q = "useDebugValue", F();
      },
      useDeferredValue: function(e, t) {
        return q = "useDeferredValue", F(), Xe(e, t);
      },
      useTransition: function() {
        return q = "useTransition", F(), tl();
      },
      useSyncExternalStore: function(e, t, a) {
        return q = "useSyncExternalStore", F(), js(
          e,
          t,
          a
        );
      },
      useId: function() {
        return q = "useId", F(), At().memoizedState;
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
        return q = "useCacheRefresh", F(), At().memoizedState;
      },
      useEffectEvent: function(e) {
        return q = "useEffectEvent", F(), ua(e);
      }
    }, Ab = {
      readContext: function(e) {
        return qt(e);
      },
      use: Ya,
      useCallback: function(e, t) {
        return q = "useCallback", F(), ia(e, t);
      },
      useContext: function(e) {
        return q = "useContext", F(), qt(e);
      },
      useEffect: function(e, t) {
        q = "useEffect", F(), Ll(2048, yn, e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return q = "useImperativeHandle", F(), Ls(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        return q = "useInsertionEffect", F(), Ll(4, mn, e, t);
      },
      useLayoutEffect: function(e, t) {
        return q = "useLayoutEffect", F(), Ll(4, lu, e, t);
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
        return q = "useRef", F(), At().memoizedState;
      },
      useState: function() {
        q = "useState", F();
        var e = w.H;
        w.H = dg;
        try {
          return tc(qa);
        } finally {
          w.H = e;
        }
      },
      useDebugValue: function() {
        q = "useDebugValue", F();
      },
      useDeferredValue: function(e, t) {
        return q = "useDeferredValue", F(), Rt(e, t);
      },
      useTransition: function() {
        return q = "useTransition", F(), Qd();
      },
      useSyncExternalStore: function(e, t, a) {
        return q = "useSyncExternalStore", F(), js(
          e,
          t,
          a
        );
      },
      useId: function() {
        return q = "useId", F(), At().memoizedState;
      },
      useFormState: function(e) {
        return q = "useFormState", F(), xd(), uc(e);
      },
      useActionState: function(e) {
        return q = "useActionState", F(), uc(e);
      },
      useOptimistic: function(e, t) {
        return q = "useOptimistic", F(), ry(e, t);
      },
      useHostTransitionStatus: Si,
      useMemoCache: hi,
      useCacheRefresh: function() {
        return q = "useCacheRefresh", F(), At().memoizedState;
      },
      useEffectEvent: function(e) {
        return q = "useEffectEvent", F(), ua(e);
      }
    }, bc = {
      readContext: function(e) {
        return Q(), qt(e);
      },
      use: function(e) {
        return L(), Ya(e);
      },
      useCallback: function(e, t) {
        return q = "useCallback", L(), be(), Ru(e, t);
      },
      useContext: function(e) {
        return q = "useContext", L(), be(), qt(e);
      },
      useEffect: function(e, t) {
        return q = "useEffect", L(), be(), ws(e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return q = "useImperativeHandle", L(), be(), Qs(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        q = "useInsertionEffect", L(), be(), An(4, mn, e, t);
      },
      useLayoutEffect: function(e, t) {
        return q = "useLayoutEffect", L(), be(), Ga(e, t);
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
        return q = "useEffectEvent", L(), be(), Xs(e);
      }
    }, Ni = {
      readContext: function(e) {
        return Q(), qt(e);
      },
      use: function(e) {
        return L(), Ya(e);
      },
      useCallback: function(e, t) {
        return q = "useCallback", L(), F(), ia(e, t);
      },
      useContext: function(e) {
        return q = "useContext", L(), F(), qt(e);
      },
      useEffect: function(e, t) {
        q = "useEffect", L(), F(), Ll(2048, yn, e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return q = "useImperativeHandle", L(), F(), Ls(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        return q = "useInsertionEffect", L(), F(), Ll(4, mn, e, t);
      },
      useLayoutEffect: function(e, t) {
        return q = "useLayoutEffect", L(), F(), Ll(4, lu, e, t);
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
        return q = "useRef", L(), F(), At().memoizedState;
      },
      useState: function() {
        q = "useState", L(), F();
        var e = w.H;
        w.H = Ni;
        try {
          return Zn(qa);
        } finally {
          w.H = e;
        }
      },
      useDebugValue: function() {
        q = "useDebugValue", L(), F();
      },
      useDeferredValue: function(e, t) {
        return q = "useDeferredValue", L(), F(), Xe(e, t);
      },
      useTransition: function() {
        return q = "useTransition", L(), F(), tl();
      },
      useSyncExternalStore: function(e, t, a) {
        return q = "useSyncExternalStore", L(), F(), js(
          e,
          t,
          a
        );
      },
      useId: function() {
        return q = "useId", L(), F(), At().memoizedState;
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
        return q = "useCacheRefresh", F(), At().memoizedState;
      },
      useEffectEvent: function(e) {
        return q = "useEffectEvent", L(), F(), ua(e);
      }
    }, dg = {
      readContext: function(e) {
        return Q(), qt(e);
      },
      use: function(e) {
        return L(), Ya(e);
      },
      useCallback: function(e, t) {
        return q = "useCallback", L(), F(), ia(e, t);
      },
      useContext: function(e) {
        return q = "useContext", L(), F(), qt(e);
      },
      useEffect: function(e, t) {
        q = "useEffect", L(), F(), Ll(2048, yn, e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return q = "useImperativeHandle", L(), F(), Ls(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        return q = "useInsertionEffect", L(), F(), Ll(4, mn, e, t);
      },
      useLayoutEffect: function(e, t) {
        return q = "useLayoutEffect", L(), F(), Ll(4, lu, e, t);
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
        return q = "useRef", L(), F(), At().memoizedState;
      },
      useState: function() {
        q = "useState", L(), F();
        var e = w.H;
        w.H = Ni;
        try {
          return tc(qa);
        } finally {
          w.H = e;
        }
      },
      useDebugValue: function() {
        q = "useDebugValue", L(), F();
      },
      useDeferredValue: function(e, t) {
        return q = "useDeferredValue", L(), F(), Rt(e, t);
      },
      useTransition: function() {
        return q = "useTransition", L(), F(), Qd();
      },
      useSyncExternalStore: function(e, t, a) {
        return q = "useSyncExternalStore", L(), F(), js(
          e,
          t,
          a
        );
      },
      useId: function() {
        return q = "useId", L(), F(), At().memoizedState;
      },
      useFormState: function(e) {
        return q = "useFormState", L(), F(), uc(e);
      },
      useActionState: function(e) {
        return q = "useActionState", L(), F(), uc(e);
      },
      useOptimistic: function(e, t) {
        return q = "useOptimistic", L(), F(), ry(e, t);
      },
      useMemoCache: function(e) {
        return L(), hi(e);
      },
      useHostTransitionStatus: Si,
      useCacheRefresh: function() {
        return q = "useCacheRefresh", F(), At().memoizedState;
      },
      useEffectEvent: function(e) {
        return q = "useEffectEvent", L(), F(), ua(e);
      }
    };
    var Ob = {}, zb = /* @__PURE__ */ new Set(), _b = /* @__PURE__ */ new Set(), Db = /* @__PURE__ */ new Set(), Rb = /* @__PURE__ */ new Set(), Mb = /* @__PURE__ */ new Set(), Cb = /* @__PURE__ */ new Set(), Ub = /* @__PURE__ */ new Set(), Hb = /* @__PURE__ */ new Set(), Nb = /* @__PURE__ */ new Set(), Bb = /* @__PURE__ */ new Set();
    Object.freeze(Ob);
    var QS = {
      enqueueSetState: function(e, t, a) {
        e = e._reactInternals;
        var i = Kl(e), o = Au(i);
        o.payload = t, a != null && (nf(a), o.callback = a), t = va(e, o, i), t !== null && (wn(i, "this.setState()", e), ll(t, e, i), ko(t, e, i));
      },
      enqueueReplaceState: function(e, t, a) {
        e = e._reactInternals;
        var i = Kl(e), o = Au(i);
        o.tag = pb, o.payload = t, a != null && (nf(a), o.callback = a), t = va(e, o, i), t !== null && (wn(i, "this.replaceState()", e), ll(t, e, i), ko(t, e, i));
      },
      enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var a = Kl(e), i = Au(a);
        i.tag = vb, t != null && (nf(t), i.callback = t), t = va(e, i, a), t !== null && (wn(a, "this.forceUpdate()", e), ll(t, e, a), ko(t, e, a));
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
    var Mo = !1, xl = !1, JS = !1, Qb = typeof WeakSet == "function" ? WeakSet : Set, da = null, Em = null, Tm = null, jl = null, jn = !1, Bi = null, Pl = !1, o0 = 8192, kT = {
      getCacheForType: function(e) {
        var t = qt(Ul), a = t.data.get(e);
        return a === void 0 && (a = e(), t.data.set(e, a)), a;
      },
      cacheSignal: function() {
        return qt(Ul).controller.signal;
      },
      getOwner: function() {
        return fn;
      }
    };
    if (typeof Symbol == "function" && Symbol.for) {
      var f0 = Symbol.for;
      f0("selector.component"), f0("selector.has_pseudo_class"), f0("selector.role"), f0("selector.test_id"), f0("selector.text");
    }
    var WT = [], FT = typeof WeakMap == "function" ? WeakMap : Map, ha = 0, ea = 2, au = 4, Co = 0, s0 = 1, Ir = 2, mg = 3, Xf = 4, yg = 6, Lb = 5, pt = ha, Qt = null, et = null, We = 0, Yn = 0, pg = 1, Pr = 2, r0 = 3, Vb = 4, KS = 5, d0 = 6, vg = 7, $S = 8, ed = 9, xt = Yn, nu = null, Qf = !1, Am = !1, kS = !1, Ec = 0, dl = Co, Lf = 0, Vf = 0, WS = 0, qn = 0, td = 0, h0 = null, pn = null, gg = !1, Sg = 0, Zb = 0, Jb = 300, bg = 1 / 0, Kb = 500, m0 = null, bl = null, Zf = null, Eg = 0, FS = 1, IS = 2, $b = 3, Jf = 0, kb = 1, Wb = 2, Fb = 3, Ib = 4, Tg = 5, Yl = 0, Kf = null, Om = null, xi = 0, PS = 0, e1 = -0, t1 = null, Pb = null, eE = null, ji = Eg, tE = null, IT = 50, y0 = 0, l1 = null, a1 = !1, Ag = !1, PT = 50, ld = 0, p0 = null, zm = !1, Og = null, lE = !1, aE = /* @__PURE__ */ new Set(), eA = {}, zg = null, _m = null, n1 = !1, u1 = !1, _g = !1, i1 = !1, $f = 0, c1 = {};
    (function() {
      for (var e = 0; e < gS.length; e++) {
        var t = gS[e], a = t.toLowerCase();
        t = t[0].toUpperCase() + t.slice(1), bn(a, "on" + t);
      }
      bn(N1, "onAnimationEnd"), bn(B1, "onAnimationIteration"), bn(x1, "onAnimationStart"), bn("dblclick", "onDoubleClick"), bn("focusin", "onFocus"), bn("focusout", "onBlur"), bn(MT, "onTransitionRun"), bn(CT, "onTransitionStart"), bn(UT, "onTransitionCancel"), bn(j1, "onTransitionEnd");
    })(), qe("onMouseEnter", ["mouseout", "mouseover"]), qe("onMouseLeave", ["mouseout", "mouseover"]), qe("onPointerEnter", ["pointerout", "pointerover"]), qe("onPointerLeave", ["pointerout", "pointerover"]), ft(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ), ft(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ), ft("onBeforeInput", [
      "compositionend",
      "keypress",
      "textInput",
      "paste"
    ]), ft(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ), ft(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ), ft(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
    var v0 = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ), o1 = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(v0)
    ), Dg = "_reactListening" + Math.random().toString(36).slice(2), nE = !1, uE = !1, Rg = !1, iE = !1, Mg = !1, Cg = !1, cE = !1, Ug = {}, tA = /\r\n?/g, lA = /\u0000|\uFFFD/g, ad = "http://www.w3.org/1999/xlink", f1 = "http://www.w3.org/XML/1998/namespace", aA = "javascript:throw new Error('React form unexpectedly submitted.')", nA = "suppressHydrationWarning", nd = "&", Hg = "/&", g0 = "$", S0 = "/$", kf = "$?", ud = "$~", Dm = "$!", uA = "html", iA = "body", cA = "head", s1 = "F!", oE = "F", fE = "loading", oA = "style", Uo = 0, Rm = 1, Ng = 2, r1 = null, d1 = null, sE = { dialog: !0, webview: !0 }, h1 = null, b0 = void 0, rE = typeof setTimeout == "function" ? setTimeout : void 0, fA = typeof clearTimeout == "function" ? clearTimeout : void 0, id = -1, dE = typeof Promise == "function" ? Promise : void 0, sA = typeof queueMicrotask == "function" ? queueMicrotask : typeof dE < "u" ? function(e) {
      return dE.resolve(null).then(e).catch(pv);
    } : rE, m1 = null, cd = 0, E0 = 1, hE = 2, mE = 3, ai = 4, ni = /* @__PURE__ */ new Map(), yE = /* @__PURE__ */ new Set(), Ho = zt.d;
    zt.d = {
      f: function() {
        var e = Ho.f(), t = ao();
        return e || t;
      },
      r: function(e) {
        var t = le(e);
        t !== null && t.tag === 5 && t.type === "form" ? kc(t) : Ho.r(e);
      },
      D: function(e) {
        Ho.D(e), sp("dns-prefetch", e, null);
      },
      C: function(e, t) {
        Ho.C(e, t), sp("preconnect", e, t);
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
          ni.has(f) || (e = Ve(
            {
              rel: "preload",
              href: t === "image" && a && a.imageSrcSet ? void 0 : e,
              as: t
            },
            a
          ), ni.set(f, e), i.querySelector(o) !== null || t === "style" && i.querySelector(
            so(f)
          ) || t === "script" && i.querySelector(ro(f)) || (t = i.createElement("link"), st(t, "link", e), ye(t), i.head.appendChild(t)));
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
          if (!ni.has(f) && (e = Ve({ rel: "modulepreload", href: e }, t), ni.set(f, e), a.querySelector(o) === null)) {
            switch (i) {
              case "audioworklet":
              case "paintworklet":
              case "serviceworker":
              case "sharedworker":
              case "worker":
              case "script":
                if (a.querySelector(ro(f)))
                  return;
            }
            i = a.createElement("link"), st(i, "link", e), ye(i), a.head.appendChild(i);
          }
        }
      },
      X: function(e, t) {
        Ho.X(e, t);
        var a = Mm;
        if (a && e) {
          var i = He(a).hoistableScripts, o = bf(e), f = i.get(o);
          f || (f = a.querySelector(
            ro(o)
          ), f || (e = Ve({ src: e, async: !0 }, t), (t = ni.get(o)) && ho(e, t), f = a.createElement("script"), ye(f), st(f, "link", e), a.head.appendChild(f)), f = {
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
              so(f)
            ))
              h.loading = E0 | ai;
            else {
              e = Ve(
                {
                  rel: "stylesheet",
                  href: e,
                  "data-precedence": t
                },
                a
              ), (a = ni.get(f)) && hp(e, a);
              var y = d = i.createElement("link");
              ye(y), st(y, "link", e), y._p = new Promise(function(p, _) {
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
            ro(o)
          ), f || (e = Ve({ src: e, async: !0, type: "module" }, t), (t = ni.get(o)) && ho(e, t), f = a.createElement("script"), ye(f), st(f, "link", e), a.head.appendChild(f)), f = {
            type: "script",
            instance: f,
            count: 1,
            state: null
          }, i.set(o, f));
        }
      }
    };
    var Mm = typeof document > "u" ? null : document, Bg = null, rA = 6e4, dA = 800, hA = 500, y1 = 0, p1 = null, xg = null, od = uS, T0 = {
      $$typeof: Fn,
      Provider: null,
      Consumer: null,
      _currentValue: od,
      _currentValue2: od,
      _threadCount: 0
    }, pE = "%c%s%c", vE = "background: #e6e6e6;background: light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.25));color: #000000;color: light-dark(#000000, #ffffff);border-radius: 2px", gE = "", jg = " ", mA = Function.prototype.bind, SE = !1, bE = null, EE = null, TE = null, AE = null, OE = null, zE = null, _E = null, DE = null, RE = null, ME = null;
    bE = function(e, t, a, i) {
      t = te(e, t), t !== null && (a = Ne(t.memoizedState, a, 0, i), t.memoizedState = a, t.baseState = a, e.memoizedProps = Ve({}, e.memoizedProps), a = Ql(e, 2), a !== null && ll(a, e, 2));
    }, EE = function(e, t, a) {
      t = te(e, t), t !== null && (a = Me(t.memoizedState, a, 0), t.memoizedState = a, t.baseState = a, e.memoizedProps = Ve({}, e.memoizedProps), a = Ql(e, 2), a !== null && ll(a, e, 2));
    }, TE = function(e, t, a, i) {
      t = te(e, t), t !== null && (a = B(t.memoizedState, a, i), t.memoizedState = a, t.baseState = a, e.memoizedProps = Ve({}, e.memoizedProps), a = Ql(e, 2), a !== null && ll(a, e, 2));
    }, AE = function(e, t, a) {
      e.pendingProps = Ne(e.memoizedProps, t, 0, a), e.alternate && (e.alternate.pendingProps = e.pendingProps), t = Ql(e, 2), t !== null && ll(t, e, 2);
    }, OE = function(e, t) {
      e.pendingProps = Me(e.memoizedProps, t, 0), e.alternate && (e.alternate.pendingProps = e.pendingProps), t = Ql(e, 2), t !== null && ll(t, e, 2);
    }, zE = function(e, t, a) {
      e.pendingProps = B(
        e.memoizedProps,
        t,
        a
      ), e.alternate && (e.alternate.pendingProps = e.pendingProps), t = Ql(e, 2), t !== null && ll(t, e, 2);
    }, _E = function(e) {
      var t = Ql(e, 2);
      t !== null && ll(t, e, 2);
    }, DE = function(e) {
      var t = xo(), a = Ql(e, t);
      a !== null && ll(a, e, t);
    }, RE = function(e) {
      St = e;
    }, ME = function(e) {
      je = e;
    };
    var Yg = !0, qg = null, v1 = !1, Wf = null, Ff = null, If = null, A0 = /* @__PURE__ */ new Map(), O0 = /* @__PURE__ */ new Map(), Pf = [], yA = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
      " "
    ), Gg = null;
    if (Mr.prototype.render = Lu.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null) throw Error("Cannot update an unmounted root.");
      var a = arguments;
      typeof a[1] == "function" ? console.error(
        "does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."
      ) : Je(a[1]) ? console.error(
        "You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root."
      ) : typeof a[1] < "u" && console.error(
        "You passed a second argument to root.render(...) but it only accepts one argument."
      ), a = e;
      var i = t.current, o = Kl(i);
      vp(i, o, a, t, null, null);
    }, Mr.prototype.unmount = Lu.prototype.unmount = function() {
      var e = arguments;
      if (typeof e[0] == "function" && console.error(
        "does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."
      ), e = this._internalRoot, e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        (pt & (ea | au)) !== ha && console.error(
          "Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."
        ), vp(e.current, 2, null, e, null, null), ao(), t[xn] = null;
      }
    }, Mr.prototype.unstable_scheduleHydration = function(e) {
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
    ), zt.findDOMNode = function(e) {
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function" ? Error("Unable to find node on an unmounted component.") : (e = Object.keys(e).join(","), Error(
          "Argument appears to not be a ReactComponent. Keys: " + e
        ));
      return e = Ke(t), e = e !== null ? Oe(e) : null, e = e === null ? null : e.stateNode, e;
    }, !(function() {
      var e = {
        bundleType: 1,
        version: "19.2.3",
        rendererPackageName: "react-dom",
        currentDispatcherRef: w,
        reconcilerVersion: "19.2.3"
      };
      return e.overrideHookState = bE, e.overrideHookStateDeletePath = EE, e.overrideHookStateRenamePath = TE, e.overrideProps = AE, e.overridePropsDeletePath = OE, e.overridePropsRenamePath = zE, e.scheduleUpdate = _E, e.scheduleRetry = DE, e.setErrorHandler = RE, e.setSuspenseHandler = ME, e.scheduleRefresh = Ye, e.scheduleRoot = ue, e.setRefreshHandler = $t, e.getCurrentFiber = Sp, es(e);
    })() && vc && window.top === window.self && (-1 < navigator.userAgent.indexOf("Chrome") && navigator.userAgent.indexOf("Edge") === -1 || -1 < navigator.userAgent.indexOf("Firefox"))) {
      var CE = window.location.protocol;
      /^(https?|file):$/.test(CE) && console.info(
        "%cDownload the React DevTools for a better development experience: https://react.dev/link/react-devtools" + (CE === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://react.dev/link/react-devtools-faq` : ""),
        "font-weight:bold"
      );
    }
    R0.createRoot = function(e, t) {
      if (!Je(e))
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
      ), e[xn] = t.current, mr(e), new Lu(t);
    }, R0.hydrateRoot = function(e, t, a) {
      if (!Je(e))
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
      ), t.context = pp(null), a = t.current, i = Kl(a), i = pl(i), o = Au(i), o.callback = null, va(a, o, i), wn(i, "hydrateRoot()", null), a = i, t.current.lanes = a, wi(t, a), Ta(t), e[xn] = t.current, mr(e), new Mr(t);
    }, R0.version = "19.2.3", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  })(), R0;
}
var ZE;
function MA() {
  if (ZE) return Qg.exports;
  ZE = 1;
  var k = {};
  function te() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
      if (k.NODE_ENV !== "production")
        throw new Error("^_^");
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(te);
      } catch (Ne) {
        console.error(Ne);
      }
    }
  }
  return k.NODE_ENV === "production" ? (te(), Qg.exports = DA()) : Qg.exports = RA(), Qg.exports;
}
var CA = MA();
const UA = /* @__PURE__ */ vA(CA);
var Cm = Um();
const JE = [
  "Xin chào! 👋 Tôi có thể giúp gì cho bạn?",
  "Bạn có muốn tìm hiểu về sản phẩm của chúng tôi không?",
  "Chúng tôi luôn sẵn sàng hỗ trợ bạn!",
  "Cảm ơn bạn đã nhắn tin!"
], HA = ({ config: k }) => {
  const [te, Ne] = Cm.useState(!1), [B, Re] = Cm.useState([]), [Me, je] = Cm.useState(""), St = Cm.useRef(null), L = Cm.useRef(null), Q = k.bubbleSize || 60, we = k.chatWidth || 350, de = k.chatHeight || 400, $ = k.fontSize || 14, U = k.borderRadius || 12, ue = k.animationDuration || 0.3, Ye = k.theme || "light", $t = Ye === "dark" ? "#1f1f1f" : "#fff", Je = Ye === "dark" ? "#eee" : "#000", lt = k.primaryColor || "#4f46e5";
  Cm.useEffect(() => {
    L.current?.scrollIntoView({ behavior: "smooth" });
  }, [B]);
  const Dt = (Ke) => {
    Ke.trim() && (Re((Oe) => [...Oe, { from: "user", text: Ke }]), je(""), Re((Oe) => [...Oe, { from: "botLoading", text: "" }]), setTimeout(() => {
      Re((Oe) => {
        const bt = Oe.filter((jt) => jt.from !== "botLoading"), Fe = {
          from: "bot",
          text: JE[Math.floor(Math.random() * JE.length)]
        };
        return [...bt, Fe];
      });
    }, 1200));
  }, Lt = (Ke) => {
    Ke.key === "Enter" && Dt(Me);
  }, Vt = k.position === "bottom-left" ? { left: 20, right: "auto" } : { right: 20, left: "auto" };
  return /* @__PURE__ */ ql.jsxs(ql.Fragment, { children: [
    /* @__PURE__ */ ql.jsx(
      "div",
      {
        onClick: () => Ne(!te),
        style: {
          position: "fixed",
          bottom: 20,
          width: Q,
          height: Q,
          borderRadius: "50%",
          background: lt,
          cursor: "pointer",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          fontSize: Q / 2,
          boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
          transition: "transform 0.2s",
          transform: te ? "scale(0.95)" : "scale(1)",
          ...Vt
        },
        children: "💬"
      }
    ),
    te && /* @__PURE__ */ ql.jsxs(
      "div",
      {
        style: {
          position: "fixed",
          bottom: Q + 10,
          width: we,
          height: de,
          background: $t,
          color: Je,
          borderRadius: U,
          boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          animation: `slideUp ${ue}s ease-out`,
          ...Vt
        },
        children: [
          /* @__PURE__ */ ql.jsxs(
            "div",
            {
              style: {
                background: lt,
                color: "#fff",
                padding: "10px 16px",
                fontWeight: "bold",
                fontSize: $ + 2,
                display: "flex",
                alignItems: "center",
                gap: 8
              },
              children: [
                k.botAvatar && /* @__PURE__ */ ql.jsx(
                  "img",
                  {
                    src: k.botAvatar,
                    alt: "Bot",
                    style: { width: 30, height: 30, borderRadius: "50%" }
                  }
                ),
                "ChatBot"
              ]
            }
          ),
          /* @__PURE__ */ ql.jsxs(
            "div",
            {
              style: {
                flex: 1,
                padding: 16,
                overflowY: "auto",
                fontSize: $,
                lineHeight: "1.4",
                display: "flex",
                flexDirection: "column",
                gap: 8
              },
              children: [
                B.length === 0 && /* @__PURE__ */ ql.jsx("div", { children: k.greeting || "Xin chào 👋" }),
                B.map((Ke, Oe) => Ke.from === "botLoading" ? /* @__PURE__ */ ql.jsxs(
                  "div",
                  {
                    style: {
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      background: "#eee",
                      padding: "8px 12px",
                      borderRadius: U,
                      maxWidth: "50%",
                      animation: `fadeIn ${ue}s`
                    },
                    children: [
                      k.botAvatar && /* @__PURE__ */ ql.jsx(
                        "img",
                        {
                          src: k.botAvatar,
                          alt: "Bot",
                          style: { width: 24, height: 24, borderRadius: "50%" }
                        }
                      ),
                      /* @__PURE__ */ ql.jsxs("div", { style: { display: "flex", gap: 4 }, children: [
                        /* @__PURE__ */ ql.jsx("span", { className: "dot" }),
                        /* @__PURE__ */ ql.jsx("span", { className: "dot" }),
                        /* @__PURE__ */ ql.jsx("span", { className: "dot" })
                      ] })
                    ]
                  },
                  Oe
                ) : /* @__PURE__ */ ql.jsx(
                  "div",
                  {
                    style: {
                      alignSelf: Ke.from === "user" ? "flex-end" : "flex-start",
                      background: Ke.from === "user" ? lt : "#eee",
                      color: Ke.from === "user" ? "#fff" : "#000",
                      padding: "8px 12px",
                      borderRadius: U,
                      maxWidth: "75%",
                      wordWrap: "break-word",
                      animation: `fadeIn ${ue}s`
                    },
                    children: Ke.text
                  },
                  Oe
                )),
                /* @__PURE__ */ ql.jsx("div", { ref: L })
              ]
            }
          ),
          /* @__PURE__ */ ql.jsx("div", { style: { padding: 10, borderTop: "1px solid #eee" }, children: /* @__PURE__ */ ql.jsx(
            "input",
            {
              ref: St,
              type: "text",
              value: Me,
              onChange: (Ke) => je(Ke.target.value),
              onKeyDown: Lt,
              placeholder: "Nhập tin nhắn...",
              style: {
                width: "100%",
                padding: "8px 12px",
                borderRadius: U / 2,
                border: "1px solid #ccc",
                outline: "none",
                fontSize: $
              }
            }
          ) })
        ]
      }
    ),
    /* @__PURE__ */ ql.jsx("style", { children: `
        @keyframes slideUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(5px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .dot {
          width: 6px;
          height: 6px;
          background-color: #999;
          border-radius: 50%;
          display: inline-block;
          animation: blink 1s infinite;
        }
        .dot:nth-child(2) { animation-delay: 0.2s; }
        .dot:nth-child(3) { animation-delay: 0.4s; }

        @keyframes blink {
          0%, 80%, 100% { opacity: 0; }
          40% { opacity: 1; }
        }
      ` })
  ] });
};
function NA(k) {
  const te = document.createElement("div");
  te.id = "chatbot-widget-root", document.body.appendChild(te), UA.createRoot(te).render(/* @__PURE__ */ ql.jsx(HA, { config: k }));
}
window.Chatbot = { init: NA };
export {
  NA as init
};
