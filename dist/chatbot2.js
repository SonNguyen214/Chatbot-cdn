function ZE(W) {
  return W && W.__esModule && Object.prototype.hasOwnProperty.call(W, "default") ? W.default : W;
}
var Gg = { exports: {} }, A0 = {};
var CE;
function pA() {
  if (CE) return A0;
  CE = 1;
  var W = /* @__PURE__ */ Symbol.for("react.transitional.element"), te = /* @__PURE__ */ Symbol.for("react.fragment");
  function Ce(j, Ye, Ne) {
    var Ge = null;
    if (Ne !== void 0 && (Ge = "" + Ne), Ye.key !== void 0 && (Ge = "" + Ye.key), "key" in Ye) {
      Ne = {};
      for (var Ot in Ye)
        Ot !== "key" && (Ne[Ot] = Ye[Ot]);
    } else Ne = Ye;
    return Ye = Ne.ref, {
      $$typeof: W,
      type: j,
      key: Ge,
      ref: Ye !== void 0 ? Ye : null,
      props: Ne
    };
  }
  return A0.Fragment = te, A0.jsx = Ce, A0.jsxs = Ce, A0;
}
var O0 = {}, wg = { exports: {} }, Qe = {};
var UE;
function vA() {
  if (UE) return Qe;
  UE = 1;
  var W = /* @__PURE__ */ Symbol.for("react.transitional.element"), te = /* @__PURE__ */ Symbol.for("react.portal"), Ce = /* @__PURE__ */ Symbol.for("react.fragment"), j = /* @__PURE__ */ Symbol.for("react.strict_mode"), Ye = /* @__PURE__ */ Symbol.for("react.profiler"), Ne = /* @__PURE__ */ Symbol.for("react.consumer"), Ge = /* @__PURE__ */ Symbol.for("react.context"), Ot = /* @__PURE__ */ Symbol.for("react.forward_ref"), Q = /* @__PURE__ */ Symbol.for("react.suspense"), L = /* @__PURE__ */ Symbol.for("react.memo"), Le = /* @__PURE__ */ Symbol.for("react.lazy"), me = /* @__PURE__ */ Symbol.for("react.activity"), k = Symbol.iterator;
  function N(O) {
    return O === null || typeof O != "object" ? null : (O = k && O[k] || O["@@iterator"], typeof O == "function" ? O : null);
  }
  var ce = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, we = Object.assign, ll = {};
  function Ie(O, A, K) {
    this.props = O, this.context = A, this.refs = ll, this.updater = K || ce;
  }
  Ie.prototype.isReactComponent = {}, Ie.prototype.setState = function(O, A) {
    if (typeof O != "object" && typeof O != "function" && O != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, O, A, "setState");
  }, Ie.prototype.forceUpdate = function(O) {
    this.updater.enqueueForceUpdate(this, O, "forceUpdate");
  };
  function dt() {
  }
  dt.prototype = Ie.prototype;
  function Bt(O, A, K) {
    this.props = O, this.context = A, this.refs = ll, this.updater = K || ce;
  }
  var Ft = Bt.prototype = new dt();
  Ft.constructor = Bt, we(Ft, Ie.prototype), Ft.isPureReactComponent = !0;
  var al = Array.isArray;
  function Yt() {
  }
  var je = { H: null, A: null, T: null, S: null }, zt = Object.prototype.hasOwnProperty;
  function et(O, A, K) {
    var ee = K.ref;
    return {
      $$typeof: W,
      type: O,
      key: A,
      ref: ee !== void 0 ? ee : null,
      props: K
    };
  }
  function Qt(O, A) {
    return et(O.type, A, O.props);
  }
  function se(O) {
    return typeof O == "object" && O !== null && O.$$typeof === W;
  }
  function gt(O) {
    var A = { "=": "=0", ":": "=2" };
    return "$" + O.replace(/[=:]/g, function(K) {
      return A[K];
    });
  }
  var Te = /\/+/g;
  function Re(O, A) {
    return typeof O == "object" && O !== null && O.key != null ? gt("" + O.key) : A.toString(36);
  }
  function qt(O) {
    switch (O.status) {
      case "fulfilled":
        return O.value;
      case "rejected":
        throw O.reason;
      default:
        switch (typeof O.status == "string" ? O.then(Yt, Yt) : (O.status = "pending", O.then(
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
    var Oe = typeof O;
    (Oe === "undefined" || Oe === "boolean") && (O = null);
    var tt = !1;
    if (O === null) tt = !0;
    else
      switch (Oe) {
        case "bigint":
        case "string":
        case "number":
          tt = !0;
          break;
        case "object":
          switch (O.$$typeof) {
            case W:
            case te:
              tt = !0;
              break;
            case Le:
              return tt = O._init, X(
                tt(O._payload),
                A,
                K,
                ee,
                ae
              );
          }
      }
    if (tt)
      return ae = ae(O), tt = ee === "" ? "." + Re(O, 0) : ee, al(ae) ? (K = "", tt != null && (K = tt.replace(Te, "$&/") + "/"), X(ae, A, K, "", function(ea) {
        return ea;
      })) : ae != null && (se(ae) && (ae = Qt(
        ae,
        K + (ae.key == null || O && O.key === ae.key ? "" : ("" + ae.key).replace(
          Te,
          "$&/"
        ) + "/") + tt
      )), A.push(ae)), 1;
    tt = 0;
    var ke = ee === "" ? "." : ee + ":";
    if (al(O))
      for (var St = 0; St < O.length; St++)
        ee = O[St], Oe = ke + Re(ee, St), tt += X(
          ee,
          A,
          K,
          Oe,
          ae
        );
    else if (St = N(O), typeof St == "function")
      for (O = St.call(O), St = 0; !(ee = O.next()).done; )
        ee = ee.value, Oe = ke + Re(ee, St++), tt += X(
          ee,
          A,
          K,
          Oe,
          ae
        );
    else if (Oe === "object") {
      if (typeof O.then == "function")
        return X(
          qt(O),
          A,
          K,
          ee,
          ae
        );
      throw A = String(O), Error(
        "Objects are not valid as a React child (found: " + (A === "[object Object]" ? "object with keys {" + Object.keys(O).join(", ") + "}" : A) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return tt;
  }
  function Y(O, A, K) {
    if (O == null) return O;
    var ee = [], ae = 0;
    return X(O, ee, "", "", function(Oe) {
      return A.call(K, Oe, ae++);
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
  var ie = typeof reportError == "function" ? reportError : function(O) {
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
    map: Y,
    forEach: function(O, A, K) {
      Y(
        O,
        function() {
          A.apply(this, arguments);
        },
        K
      );
    },
    count: function(O) {
      var A = 0;
      return Y(O, function() {
        A++;
      }), A;
    },
    toArray: function(O) {
      return Y(O, function(A) {
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
  return Qe.Activity = me, Qe.Children = ge, Qe.Component = Ie, Qe.Fragment = Ce, Qe.Profiler = Ye, Qe.PureComponent = Bt, Qe.StrictMode = j, Qe.Suspense = Q, Qe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = je, Qe.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(O) {
      return je.H.useMemoCache(O);
    }
  }, Qe.cache = function(O) {
    return function() {
      return O.apply(null, arguments);
    };
  }, Qe.cacheSignal = function() {
    return null;
  }, Qe.cloneElement = function(O, A, K) {
    if (O == null)
      throw Error(
        "The argument must be a React element, but you passed " + O + "."
      );
    var ee = we({}, O.props), ae = O.key;
    if (A != null)
      for (Oe in A.key !== void 0 && (ae = "" + A.key), A)
        !zt.call(A, Oe) || Oe === "key" || Oe === "__self" || Oe === "__source" || Oe === "ref" && A.ref === void 0 || (ee[Oe] = A[Oe]);
    var Oe = arguments.length - 2;
    if (Oe === 1) ee.children = K;
    else if (1 < Oe) {
      for (var tt = Array(Oe), ke = 0; ke < Oe; ke++)
        tt[ke] = arguments[ke + 2];
      ee.children = tt;
    }
    return et(O.type, ae, ee);
  }, Qe.createContext = function(O) {
    return O = {
      $$typeof: Ge,
      _currentValue: O,
      _currentValue2: O,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, O.Provider = O, O.Consumer = {
      $$typeof: Ne,
      _context: O
    }, O;
  }, Qe.createElement = function(O, A, K) {
    var ee, ae = {}, Oe = null;
    if (A != null)
      for (ee in A.key !== void 0 && (Oe = "" + A.key), A)
        zt.call(A, ee) && ee !== "key" && ee !== "__self" && ee !== "__source" && (ae[ee] = A[ee]);
    var tt = arguments.length - 2;
    if (tt === 1) ae.children = K;
    else if (1 < tt) {
      for (var ke = Array(tt), St = 0; St < tt; St++)
        ke[St] = arguments[St + 2];
      ae.children = ke;
    }
    if (O && O.defaultProps)
      for (ee in tt = O.defaultProps, tt)
        ae[ee] === void 0 && (ae[ee] = tt[ee]);
    return et(O, Oe, ae);
  }, Qe.createRef = function() {
    return { current: null };
  }, Qe.forwardRef = function(O) {
    return { $$typeof: Ot, render: O };
  }, Qe.isValidElement = se, Qe.lazy = function(O) {
    return {
      $$typeof: Le,
      _payload: { _status: -1, _result: O },
      _init: P
    };
  }, Qe.memo = function(O, A) {
    return {
      $$typeof: L,
      type: O,
      compare: A === void 0 ? null : A
    };
  }, Qe.startTransition = function(O) {
    var A = je.T, K = {};
    je.T = K;
    try {
      var ee = O(), ae = je.S;
      ae !== null && ae(K, ee), typeof ee == "object" && ee !== null && typeof ee.then == "function" && ee.then(Yt, ie);
    } catch (Oe) {
      ie(Oe);
    } finally {
      A !== null && K.types !== null && (A.types = K.types), je.T = A;
    }
  }, Qe.unstable_useCacheRefresh = function() {
    return je.H.useCacheRefresh();
  }, Qe.use = function(O) {
    return je.H.use(O);
  }, Qe.useActionState = function(O, A, K) {
    return je.H.useActionState(O, A, K);
  }, Qe.useCallback = function(O, A) {
    return je.H.useCallback(O, A);
  }, Qe.useContext = function(O) {
    return je.H.useContext(O);
  }, Qe.useDebugValue = function() {
  }, Qe.useDeferredValue = function(O, A) {
    return je.H.useDeferredValue(O, A);
  }, Qe.useEffect = function(O, A) {
    return je.H.useEffect(O, A);
  }, Qe.useEffectEvent = function(O) {
    return je.H.useEffectEvent(O);
  }, Qe.useId = function() {
    return je.H.useId();
  }, Qe.useImperativeHandle = function(O, A, K) {
    return je.H.useImperativeHandle(O, A, K);
  }, Qe.useInsertionEffect = function(O, A) {
    return je.H.useInsertionEffect(O, A);
  }, Qe.useLayoutEffect = function(O, A) {
    return je.H.useLayoutEffect(O, A);
  }, Qe.useMemo = function(O, A) {
    return je.H.useMemo(O, A);
  }, Qe.useOptimistic = function(O, A) {
    return je.H.useOptimistic(O, A);
  }, Qe.useReducer = function(O, A, K) {
    return je.H.useReducer(O, A, K);
  }, Qe.useRef = function(O) {
    return je.H.useRef(O);
  }, Qe.useState = function(O) {
    return je.H.useState(O);
  }, Qe.useSyncExternalStore = function(O, A, K) {
    return je.H.useSyncExternalStore(
      O,
      A,
      K
    );
  }, Qe.useTransition = function() {
    return je.H.useTransition();
  }, Qe.version = "19.2.3", Qe;
}
var D0 = { exports: {} };
D0.exports;
var HE;
function gA() {
  return HE || (HE = 1, (function(W, te) {
    var Ce = {};
    Ce.NODE_ENV !== "production" && (function() {
      function j(v, M) {
        Object.defineProperty(Ge.prototype, v, {
          get: function() {
            console.warn(
              "%s(...) is deprecated in plain JavaScript React classes. %s",
              M[0],
              M[1]
            );
          }
        });
      }
      function Ye(v) {
        return v === null || typeof v != "object" ? null : (v = Ec && v[Ec] || v["@@iterator"], typeof v == "function" ? v : null);
      }
      function Ne(v, M) {
        v = (v = v.constructor) && (v.displayName || v.name) || "ReactClass";
        var I = v + "." + M;
        ka[I] || (console.error(
          "Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",
          M,
          v
        ), ka[I] = !0);
      }
      function Ge(v, M, I) {
        this.props = v, this.context = M, this.refs = At, this.updater = I || ni;
      }
      function Ot() {
      }
      function Q(v, M, I) {
        this.props = v, this.context = M, this.refs = At, this.updater = I || ni;
      }
      function L() {
      }
      function Le(v) {
        return "" + v;
      }
      function me(v) {
        try {
          Le(v);
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
          ), Le(v);
        }
      }
      function k(v) {
        if (v == null) return null;
        if (typeof v == "function")
          return v.$$typeof === Pf ? null : v.displayName || v.name || null;
        if (typeof v == "string") return v;
        switch (v) {
          case A:
            return "Fragment";
          case ee:
            return "Profiler";
          case K:
            return "StrictMode";
          case ke:
            return "Suspense";
          case St:
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
            case Oe:
              return v.displayName || "Context";
            case ae:
              return (v._context.displayName || "Context") + ".Consumer";
            case tt:
              var M = v.render;
              return v = v.displayName, v || (v = M.displayName || M.name || "", v = v !== "" ? "ForwardRef(" + v + ")" : "ForwardRef"), v;
            case ea:
              return M = v.displayName || null, M !== null ? M : k(v.type) || "Memo";
            case pn:
              M = v._payload, v = v._init;
              try {
                return k(v(M));
              } catch {
              }
          }
        return null;
      }
      function N(v) {
        if (v === A) return "<>";
        if (typeof v == "object" && v !== null && v.$$typeof === pn)
          return "<...>";
        try {
          var M = k(v);
          return M ? "<" + M + ">" : "<...>";
        } catch {
          return "<...>";
        }
      }
      function ce() {
        var v = he.A;
        return v === null ? null : v.getOwner();
      }
      function we() {
        return Error("react-stack-top-frame");
      }
      function ll(v) {
        if (No.call(v, "key")) {
          var M = Object.getOwnPropertyDescriptor(v, "key").get;
          if (M && M.isReactWarning) return !1;
        }
        return v.key !== void 0;
      }
      function Ie(v, M) {
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
      function dt() {
        var v = k(this.type);
        return es[v] || (es[v] = !0, console.error(
          "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
        )), v = this.props.ref, v !== void 0 ? v : null;
      }
      function Bt(v, M, I, le, re, Me) {
        var ye = I.ref;
        return v = {
          $$typeof: ge,
          type: v,
          key: M,
          props: I,
          _owner: le
        }, (ye !== void 0 ? ye : null) !== null ? Object.defineProperty(v, "ref", {
          enumerable: !1,
          get: dt
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
          value: Me
        }), Object.freeze && (Object.freeze(v.props), Object.freeze(v)), v;
      }
      function Ft(v, M) {
        return M = Bt(
          v.type,
          M,
          v.props,
          v._owner,
          v._debugStack,
          v._debugTask
        ), v._store && (M._store.validated = v._store.validated), M;
      }
      function al(v) {
        Yt(v) ? v._store && (v._store.validated = 1) : typeof v == "object" && v !== null && v.$$typeof === pn && (v._payload.status === "fulfilled" ? Yt(v._payload.value) && v._payload.value._store && (v._payload.value._store.validated = 1) : v._store && (v._store.validated = 1));
      }
      function Yt(v) {
        return typeof v == "object" && v !== null && v.$$typeof === ge;
      }
      function je(v) {
        var M = { "=": "=0", ":": "=2" };
        return "$" + v.replace(/[=:]/g, function(I) {
          return M[I];
        });
      }
      function zt(v, M) {
        return typeof v == "object" && v !== null && v.key != null ? (me(v.key), je("" + v.key)) : M.toString(36);
      }
      function et(v) {
        switch (v.status) {
          case "fulfilled":
            return v.value;
          case "rejected":
            throw v.reason;
          default:
            switch (typeof v.status == "string" ? v.then(L, L) : (v.status = "pending", v.then(
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
      function Qt(v, M, I, le, re) {
        var Me = typeof v;
        (Me === "undefined" || Me === "boolean") && (v = null);
        var ye = !1;
        if (v === null) ye = !0;
        else
          switch (Me) {
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
                case pn:
                  return ye = v._init, Qt(
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
          var ct = le === "" ? "." + zt(ye, 0) : le;
          return qi(re) ? (I = "", ct != null && (I = ct.replace(ts, "$&/") + "/"), Qt(re, M, I, "", function(Gl) {
            return Gl;
          })) : re != null && (Yt(re) && (re.key != null && (ye && ye.key === re.key || me(re.key)), I = Ft(
            re,
            I + (re.key == null || ye && ye.key === re.key ? "" : ("" + re.key).replace(
              ts,
              "$&/"
            ) + "/") + ct
          ), le !== "" && ye != null && Yt(ye) && ye.key == null && ye._store && !ye._store.validated && (I._store.validated = 2), re = I), M.push(re)), 1;
        }
        if (ye = 0, ct = le === "" ? "." : le + ":", qi(v))
          for (var Be = 0; Be < v.length; Be++)
            le = v[Be], Me = ct + zt(le, Be), ye += Qt(
              le,
              M,
              I,
              Me,
              re
            );
        else if (Be = Ye(v), typeof Be == "function")
          for (Be === v.entries && (Gi || console.warn(
            "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
          ), Gi = !0), v = Be.call(v), Be = 0; !(le = v.next()).done; )
            le = le.value, Me = ct + zt(le, Be++), ye += Qt(
              le,
              M,
              I,
              Me,
              re
            );
        else if (Me === "object") {
          if (typeof v.then == "function")
            return Qt(
              et(v),
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
        return Qt(v, le, "", "", function(Me) {
          return M.call(I, Me, re++);
        }), le;
      }
      function gt(v) {
        if (v._status === -1) {
          var M = v._ioInfo;
          M != null && (M.start = M.end = performance.now()), M = v._result;
          var I = M();
          if (I.then(
            function(re) {
              if (v._status === 0 || v._status === -1) {
                v._status = 1, v._result = re;
                var Me = v._ioInfo;
                Me != null && (Me.end = performance.now()), I.status === void 0 && (I.status = "fulfilled", I.value = re);
              }
            },
            function(re) {
              if (v._status === 0 || v._status === -1) {
                v._status = 2, v._result = re;
                var Me = v._ioInfo;
                Me != null && (Me.end = performance.now()), I.status === void 0 && (I.status = "rejected", I.reason = re);
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
        var v = he.H;
        return v === null && console.error(
          `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
        ), v;
      }
      function Re() {
        he.asyncTransitions--;
      }
      function qt(v) {
        if (xn === null)
          try {
            var M = ("require" + Math.random()).slice(0, 7);
            xn = (W && W[M]).call(
              W,
              "timers"
            ).setImmediate;
          } catch {
            xn = function(le) {
              as === !1 && (as = !0, typeof MessageChannel > "u" && console.error(
                "This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."
              ));
              var re = new MessageChannel();
              re.port1.onmessage = le, re.port2.postMessage(void 0);
            };
          }
        return xn(v);
      }
      function X(v) {
        return 1 < v.length && typeof AggregateError == "function" ? new AggregateError(v) : v[0];
      }
      function Y(v, M) {
        M !== pl - 1 && console.error(
          "You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "
        ), pl = M;
      }
      function P(v, M, I) {
        var le = he.actQueue;
        if (le !== null)
          if (le.length !== 0)
            try {
              ie(le), qt(function() {
                return P(v, M, I);
              });
              return;
            } catch (re) {
              he.thrownErrors.push(re);
            }
          else he.actQueue = null;
        0 < he.thrownErrors.length ? (le = X(he.thrownErrors), he.thrownErrors.length = 0, I(le)) : M(v);
      }
      function ie(v) {
        if (!Rl) {
          Rl = !0;
          var M = 0;
          try {
            for (; M < v.length; M++) {
              var I = v[M];
              do {
                he.didUsePromise = !1;
                var le = I(!1);
                if (le !== null) {
                  if (he.didUsePromise) {
                    v[M] = I, v.splice(0, M);
                    return;
                  }
                  I = le;
                } else break;
              } while (!0);
            }
            v.length = 0;
          } catch (re) {
            v.splice(0, M + 1), he.thrownErrors.push(re);
          } finally {
            Rl = !1;
          }
        }
      }
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
      var ge = /* @__PURE__ */ Symbol.for("react.transitional.element"), O = /* @__PURE__ */ Symbol.for("react.portal"), A = /* @__PURE__ */ Symbol.for("react.fragment"), K = /* @__PURE__ */ Symbol.for("react.strict_mode"), ee = /* @__PURE__ */ Symbol.for("react.profiler"), ae = /* @__PURE__ */ Symbol.for("react.consumer"), Oe = /* @__PURE__ */ Symbol.for("react.context"), tt = /* @__PURE__ */ Symbol.for("react.forward_ref"), ke = /* @__PURE__ */ Symbol.for("react.suspense"), St = /* @__PURE__ */ Symbol.for("react.suspense_list"), ea = /* @__PURE__ */ Symbol.for("react.memo"), pn = /* @__PURE__ */ Symbol.for("react.lazy"), fe = /* @__PURE__ */ Symbol.for("react.activity"), Ec = Symbol.iterator, ka = {}, ni = {
        isMounted: function() {
          return !1;
        },
        enqueueForceUpdate: function(v) {
          Ne(v, "forceUpdate");
        },
        enqueueReplaceState: function(v) {
          Ne(v, "replaceState");
        },
        enqueueSetState: function(v) {
          Ne(v, "setState");
        }
      }, nu = Object.assign, At = {};
      Object.freeze(At), Ge.prototype.isReactComponent = {}, Ge.prototype.setState = function(v, M) {
        if (typeof v != "object" && typeof v != "function" && v != null)
          throw Error(
            "takes an object of state variables to update or a function which returns an object of state variables."
          );
        this.updater.enqueueSetState(this, v, M, "setState");
      }, Ge.prototype.forceUpdate = function(v) {
        this.updater.enqueueForceUpdate(this, v, "forceUpdate");
      };
      var xl = {
        isMounted: [
          "isMounted",
          "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."
        ],
        replaceState: [
          "replaceState",
          "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."
        ]
      };
      for (wi in xl)
        xl.hasOwnProperty(wi) && j(wi, xl[wi]);
      Ot.prototype = Ge.prototype, xl = Q.prototype = new Ot(), xl.constructor = Q, nu(xl, Ge.prototype), xl.isPureReactComponent = !0;
      var qi = Array.isArray, Pf = /* @__PURE__ */ Symbol.for("react.client.reference"), he = {
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
      }, No = Object.prototype.hasOwnProperty, uu = console.createTask ? console.createTask : function() {
        return null;
      };
      xl = {
        react_stack_bottom_frame: function(v) {
          return v();
        }
      };
      var El, ji, es = {}, Bo = xl.react_stack_bottom_frame.bind(
        xl,
        we
      )(), xi = uu(N(we)), Gi = !1, ts = /\/+/g, ls = typeof reportError == "function" ? reportError : function(v) {
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
      }, as = !1, xn = null, pl = 0, za = !1, Rl = !1, Yo = typeof queueMicrotask == "function" ? function(v) {
        queueMicrotask(function() {
          return queueMicrotask(v);
        });
      } : qt;
      xl = Object.freeze({
        __proto__: null,
        c: function(v) {
          return Te().useMemoCache(v);
        }
      });
      var wi = {
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
          if (!Yt(v))
            throw Error(
              "React.Children.only expected to receive a single React element child."
            );
          return v;
        }
      };
      te.Activity = fe, te.Children = wi, te.Component = Ge, te.Fragment = A, te.Profiler = ee, te.PureComponent = Q, te.StrictMode = K, te.Suspense = ke, te.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = he, te.__COMPILER_RUNTIME = xl, te.act = function(v) {
        var M = he.actQueue, I = pl;
        pl++;
        var le = he.actQueue = M !== null ? M : [], re = !1;
        try {
          var Me = v();
        } catch (Be) {
          he.thrownErrors.push(Be);
        }
        if (0 < he.thrownErrors.length)
          throw Y(M, I), v = X(he.thrownErrors), he.thrownErrors.length = 0, v;
        if (Me !== null && typeof Me == "object" && typeof Me.then == "function") {
          var ye = Me;
          return Yo(function() {
            re || za || (za = !0, console.error(
              "You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"
            ));
          }), {
            then: function(Be, Gl) {
              re = !0, ye.then(
                function(_a) {
                  if (Y(M, I), I === 0) {
                    try {
                      ie(le), qt(function() {
                        return P(
                          _a,
                          Be,
                          Gl
                        );
                      });
                    } catch (Tc) {
                      he.thrownErrors.push(Tc);
                    }
                    if (0 < he.thrownErrors.length) {
                      var od = X(
                        he.thrownErrors
                      );
                      he.thrownErrors.length = 0, Gl(od);
                    }
                  } else Be(_a);
                },
                function(_a) {
                  Y(M, I), 0 < he.thrownErrors.length && (_a = X(
                    he.thrownErrors
                  ), he.thrownErrors.length = 0), Gl(_a);
                }
              );
            }
          };
        }
        var ct = Me;
        if (Y(M, I), I === 0 && (ie(le), le.length !== 0 && Yo(function() {
          re || za || (za = !0, console.error(
            "A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"
          ));
        }), he.actQueue = null), 0 < he.thrownErrors.length)
          throw v = X(he.thrownErrors), he.thrownErrors.length = 0, v;
        return {
          then: function(Be, Gl) {
            re = !0, I === 0 ? (he.actQueue = le, qt(function() {
              return P(
                ct,
                Be,
                Gl
              );
            })) : Be(ct);
          }
        };
      }, te.cache = function(v) {
        return function() {
          return v.apply(null, arguments);
        };
      }, te.cacheSignal = function() {
        return null;
      }, te.captureOwnerStack = function() {
        var v = he.getCurrentStack;
        return v === null ? null : v();
      }, te.cloneElement = function(v, M, I) {
        if (v == null)
          throw Error(
            "The argument must be a React element, but you passed " + v + "."
          );
        var le = nu({}, v.props), re = v.key, Me = v._owner;
        if (M != null) {
          var ye;
          e: {
            if (No.call(M, "ref") && (ye = Object.getOwnPropertyDescriptor(
              M,
              "ref"
            ).get) && ye.isReactWarning) {
              ye = !1;
              break e;
            }
            ye = M.ref !== void 0;
          }
          ye && (Me = ce()), ll(M) && (me(M.key), re = "" + M.key);
          for (ct in M)
            !No.call(M, ct) || ct === "key" || ct === "__self" || ct === "__source" || ct === "ref" && M.ref === void 0 || (le[ct] = M[ct]);
        }
        var ct = arguments.length - 2;
        if (ct === 1) le.children = I;
        else if (1 < ct) {
          ye = Array(ct);
          for (var Be = 0; Be < ct; Be++)
            ye[Be] = arguments[Be + 2];
          le.children = ye;
        }
        for (le = Bt(
          v.type,
          re,
          le,
          Me,
          v._debugStack,
          v._debugTask
        ), re = 2; re < arguments.length; re++)
          al(arguments[re]);
        return le;
      }, te.createContext = function(v) {
        return v = {
          $$typeof: Oe,
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
          al(arguments[le]);
        le = {};
        var re = null;
        if (M != null)
          for (Be in ji || !("__self" in M) || "key" in M || (ji = !0, console.warn(
            "Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform"
          )), ll(M) && (me(M.key), re = "" + M.key), M)
            No.call(M, Be) && Be !== "key" && Be !== "__self" && Be !== "__source" && (le[Be] = M[Be]);
        var Me = arguments.length - 2;
        if (Me === 1) le.children = I;
        else if (1 < Me) {
          for (var ye = Array(Me), ct = 0; ct < Me; ct++)
            ye[ct] = arguments[ct + 2];
          Object.freeze && Object.freeze(ye), le.children = ye;
        }
        if (v && v.defaultProps)
          for (Be in Me = v.defaultProps, Me)
            le[Be] === void 0 && (le[Be] = Me[Be]);
        re && Ie(
          le,
          typeof v == "function" ? v.displayName || v.name || "Unknown" : v
        );
        var Be = 1e4 > he.recentlyCreatedOwnerStacks++;
        return Bt(
          v,
          re,
          le,
          ce(),
          Be ? Error("react-stack-top-frame") : Bo,
          Be ? uu(N(v)) : xi
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
        var M = { $$typeof: tt, render: v }, I;
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
      }, te.isValidElement = Yt, te.lazy = function(v) {
        v = { _status: -1, _result: v };
        var M = {
          $$typeof: pn,
          _payload: v,
          _init: gt
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
        var M = he.T, I = {};
        I._updatedFibers = /* @__PURE__ */ new Set(), he.T = I;
        try {
          var le = v(), re = he.S;
          re !== null && re(I, le), typeof le == "object" && le !== null && typeof le.then == "function" && (he.asyncTransitions++, le.then(Re, Re), le.then(L, ls));
        } catch (Me) {
          ls(Me);
        } finally {
          M === null && I._updatedFibers && (v = I._updatedFibers.size, I._updatedFibers.clear(), 10 < v && console.warn(
            "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
          )), M !== null && I.types !== null && (M.types !== null && M.types !== I.types && console.error(
            "We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."
          ), M.types = I.types), he.T = M;
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
  })(D0, D0.exports)), D0.exports;
}
var NE;
function Mm() {
  if (NE) return wg.exports;
  NE = 1;
  var W = {};
  return W.NODE_ENV === "production" ? wg.exports = vA() : wg.exports = gA(), wg.exports;
}
var BE;
function SA() {
  if (BE) return O0;
  BE = 1;
  var W = {};
  return W.NODE_ENV !== "production" && (function() {
    function te(A) {
      if (A == null) return null;
      if (typeof A == "function")
        return A.$$typeof === gt ? null : A.displayName || A.name || null;
      if (typeof A == "string") return A;
      switch (A) {
        case Ie:
          return "Fragment";
        case Bt:
          return "Profiler";
        case dt:
          return "StrictMode";
        case je:
          return "Suspense";
        case zt:
          return "SuspenseList";
        case se:
          return "Activity";
      }
      if (typeof A == "object")
        switch (typeof A.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), A.$$typeof) {
          case ll:
            return "Portal";
          case al:
            return A.displayName || "Context";
          case Ft:
            return (A._context.displayName || "Context") + ".Consumer";
          case Yt:
            var K = A.render;
            return A = A.displayName, A || (A = K.displayName || K.name || "", A = A !== "" ? "ForwardRef(" + A + ")" : "ForwardRef"), A;
          case et:
            return K = A.displayName || null, K !== null ? K : te(A.type) || "Memo";
          case Qt:
            K = A._payload, A = A._init;
            try {
              return te(A(K));
            } catch {
            }
        }
      return null;
    }
    function Ce(A) {
      return "" + A;
    }
    function j(A) {
      try {
        Ce(A);
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
        ), Ce(A);
      }
    }
    function Ye(A) {
      if (A === Ie) return "<>";
      if (typeof A == "object" && A !== null && A.$$typeof === Qt)
        return "<...>";
      try {
        var K = te(A);
        return K ? "<" + K + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function Ne() {
      var A = Te.A;
      return A === null ? null : A.getOwner();
    }
    function Ge() {
      return Error("react-stack-top-frame");
    }
    function Ot(A) {
      if (Re.call(A, "key")) {
        var K = Object.getOwnPropertyDescriptor(A, "key").get;
        if (K && K.isReactWarning) return !1;
      }
      return A.key !== void 0;
    }
    function Q(A, K) {
      function ee() {
        Y || (Y = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          K
        ));
      }
      ee.isReactWarning = !0, Object.defineProperty(A, "key", {
        get: ee,
        configurable: !0
      });
    }
    function L() {
      var A = te(this.type);
      return P[A] || (P[A] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), A = this.props.ref, A !== void 0 ? A : null;
    }
    function Le(A, K, ee, ae, Oe, tt) {
      var ke = ee.ref;
      return A = {
        $$typeof: we,
        type: A,
        key: K,
        props: ee,
        _owner: ae
      }, (ke !== void 0 ? ke : null) !== null ? Object.defineProperty(A, "ref", {
        enumerable: !1,
        get: L
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
        value: Oe
      }), Object.defineProperty(A, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: tt
      }), Object.freeze && (Object.freeze(A.props), Object.freeze(A)), A;
    }
    function me(A, K, ee, ae, Oe, tt) {
      var ke = K.children;
      if (ke !== void 0)
        if (ae)
          if (qt(ke)) {
            for (ae = 0; ae < ke.length; ae++)
              k(ke[ae]);
            Object.freeze && Object.freeze(ke);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else k(ke);
      if (Re.call(K, "key")) {
        ke = te(A);
        var St = Object.keys(K).filter(function(pn) {
          return pn !== "key";
        });
        ae = 0 < St.length ? "{key: someKey, " + St.join(": ..., ") + ": ...}" : "{key: someKey}", O[ke + ae] || (St = 0 < St.length ? "{" + St.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          ae,
          ke,
          St,
          ke
        ), O[ke + ae] = !0);
      }
      if (ke = null, ee !== void 0 && (j(ee), ke = "" + ee), Ot(K) && (j(K.key), ke = "" + K.key), "key" in K) {
        ee = {};
        for (var ea in K)
          ea !== "key" && (ee[ea] = K[ea]);
      } else ee = K;
      return ke && Q(
        ee,
        typeof A == "function" ? A.displayName || A.name || "Unknown" : A
      ), Le(
        A,
        ke,
        ee,
        Ne(),
        Oe,
        tt
      );
    }
    function k(A) {
      N(A) ? A._store && (A._store.validated = 1) : typeof A == "object" && A !== null && A.$$typeof === Qt && (A._payload.status === "fulfilled" ? N(A._payload.value) && A._payload.value._store && (A._payload.value._store.validated = 1) : A._store && (A._store.validated = 1));
    }
    function N(A) {
      return typeof A == "object" && A !== null && A.$$typeof === we;
    }
    var ce = Mm(), we = /* @__PURE__ */ Symbol.for("react.transitional.element"), ll = /* @__PURE__ */ Symbol.for("react.portal"), Ie = /* @__PURE__ */ Symbol.for("react.fragment"), dt = /* @__PURE__ */ Symbol.for("react.strict_mode"), Bt = /* @__PURE__ */ Symbol.for("react.profiler"), Ft = /* @__PURE__ */ Symbol.for("react.consumer"), al = /* @__PURE__ */ Symbol.for("react.context"), Yt = /* @__PURE__ */ Symbol.for("react.forward_ref"), je = /* @__PURE__ */ Symbol.for("react.suspense"), zt = /* @__PURE__ */ Symbol.for("react.suspense_list"), et = /* @__PURE__ */ Symbol.for("react.memo"), Qt = /* @__PURE__ */ Symbol.for("react.lazy"), se = /* @__PURE__ */ Symbol.for("react.activity"), gt = /* @__PURE__ */ Symbol.for("react.client.reference"), Te = ce.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Re = Object.prototype.hasOwnProperty, qt = Array.isArray, X = console.createTask ? console.createTask : function() {
      return null;
    };
    ce = {
      react_stack_bottom_frame: function(A) {
        return A();
      }
    };
    var Y, P = {}, ie = ce.react_stack_bottom_frame.bind(
      ce,
      Ge
    )(), ge = X(Ye(Ge)), O = {};
    O0.Fragment = Ie, O0.jsx = function(A, K, ee) {
      var ae = 1e4 > Te.recentlyCreatedOwnerStacks++;
      return me(
        A,
        K,
        ee,
        !1,
        ae ? Error("react-stack-top-frame") : ie,
        ae ? X(Ye(A)) : ge
      );
    }, O0.jsxs = function(A, K, ee) {
      var ae = 1e4 > Te.recentlyCreatedOwnerStacks++;
      return me(
        A,
        K,
        ee,
        !0,
        ae ? Error("react-stack-top-frame") : ie,
        ae ? X(Ye(A)) : ge
      );
    };
  })(), O0;
}
var YE;
function bA() {
  if (YE) return Gg.exports;
  YE = 1;
  var W = {};
  return W.NODE_ENV === "production" ? Gg.exports = pA() : Gg.exports = SA(), Gg.exports;
}
var R0 = bA(), Xg = { exports: {} }, z0 = {}, Qg = { exports: {} }, v1 = {};
var qE;
function EA() {
  return qE || (qE = 1, (function(W) {
    function te(X, Y) {
      var P = X.length;
      X.push(Y);
      e: for (; 0 < P; ) {
        var ie = P - 1 >>> 1, ge = X[ie];
        if (0 < Ye(ge, Y))
          X[ie] = Y, X[P] = ge, P = ie;
        else break e;
      }
    }
    function Ce(X) {
      return X.length === 0 ? null : X[0];
    }
    function j(X) {
      if (X.length === 0) return null;
      var Y = X[0], P = X.pop();
      if (P !== Y) {
        X[0] = P;
        e: for (var ie = 0, ge = X.length, O = ge >>> 1; ie < O; ) {
          var A = 2 * (ie + 1) - 1, K = X[A], ee = A + 1, ae = X[ee];
          if (0 > Ye(K, P))
            ee < ge && 0 > Ye(ae, K) ? (X[ie] = ae, X[ee] = P, ie = ee) : (X[ie] = K, X[A] = P, ie = A);
          else if (ee < ge && 0 > Ye(ae, P))
            X[ie] = ae, X[ee] = P, ie = ee;
          else break e;
        }
      }
      return Y;
    }
    function Ye(X, Y) {
      var P = X.sortIndex - Y.sortIndex;
      return P !== 0 ? P : X.id - Y.id;
    }
    if (W.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var Ne = performance;
      W.unstable_now = function() {
        return Ne.now();
      };
    } else {
      var Ge = Date, Ot = Ge.now();
      W.unstable_now = function() {
        return Ge.now() - Ot;
      };
    }
    var Q = [], L = [], Le = 1, me = null, k = 3, N = !1, ce = !1, we = !1, ll = !1, Ie = typeof setTimeout == "function" ? setTimeout : null, dt = typeof clearTimeout == "function" ? clearTimeout : null, Bt = typeof setImmediate < "u" ? setImmediate : null;
    function Ft(X) {
      for (var Y = Ce(L); Y !== null; ) {
        if (Y.callback === null) j(L);
        else if (Y.startTime <= X)
          j(L), Y.sortIndex = Y.expirationTime, te(Q, Y);
        else break;
        Y = Ce(L);
      }
    }
    function al(X) {
      if (we = !1, Ft(X), !ce)
        if (Ce(Q) !== null)
          ce = !0, Yt || (Yt = !0, gt());
        else {
          var Y = Ce(L);
          Y !== null && qt(al, Y.startTime - X);
        }
    }
    var Yt = !1, je = -1, zt = 5, et = -1;
    function Qt() {
      return ll ? !0 : !(W.unstable_now() - et < zt);
    }
    function se() {
      if (ll = !1, Yt) {
        var X = W.unstable_now();
        et = X;
        var Y = !0;
        try {
          e: {
            ce = !1, we && (we = !1, dt(je), je = -1), N = !0;
            var P = k;
            try {
              t: {
                for (Ft(X), me = Ce(Q); me !== null && !(me.expirationTime > X && Qt()); ) {
                  var ie = me.callback;
                  if (typeof ie == "function") {
                    me.callback = null, k = me.priorityLevel;
                    var ge = ie(
                      me.expirationTime <= X
                    );
                    if (X = W.unstable_now(), typeof ge == "function") {
                      me.callback = ge, Ft(X), Y = !0;
                      break t;
                    }
                    me === Ce(Q) && j(Q), Ft(X);
                  } else j(Q);
                  me = Ce(Q);
                }
                if (me !== null) Y = !0;
                else {
                  var O = Ce(L);
                  O !== null && qt(
                    al,
                    O.startTime - X
                  ), Y = !1;
                }
              }
              break e;
            } finally {
              me = null, k = P, N = !1;
            }
            Y = void 0;
          }
        } finally {
          Y ? gt() : Yt = !1;
        }
      }
    }
    var gt;
    if (typeof Bt == "function")
      gt = function() {
        Bt(se);
      };
    else if (typeof MessageChannel < "u") {
      var Te = new MessageChannel(), Re = Te.port2;
      Te.port1.onmessage = se, gt = function() {
        Re.postMessage(null);
      };
    } else
      gt = function() {
        Ie(se, 0);
      };
    function qt(X, Y) {
      je = Ie(function() {
        X(W.unstable_now());
      }, Y);
    }
    W.unstable_IdlePriority = 5, W.unstable_ImmediatePriority = 1, W.unstable_LowPriority = 4, W.unstable_NormalPriority = 3, W.unstable_Profiling = null, W.unstable_UserBlockingPriority = 2, W.unstable_cancelCallback = function(X) {
      X.callback = null;
    }, W.unstable_forceFrameRate = function(X) {
      0 > X || 125 < X ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : zt = 0 < X ? Math.floor(1e3 / X) : 5;
    }, W.unstable_getCurrentPriorityLevel = function() {
      return k;
    }, W.unstable_next = function(X) {
      switch (k) {
        case 1:
        case 2:
        case 3:
          var Y = 3;
          break;
        default:
          Y = k;
      }
      var P = k;
      k = Y;
      try {
        return X();
      } finally {
        k = P;
      }
    }, W.unstable_requestPaint = function() {
      ll = !0;
    }, W.unstable_runWithPriority = function(X, Y) {
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
        return Y();
      } finally {
        k = P;
      }
    }, W.unstable_scheduleCallback = function(X, Y, P) {
      var ie = W.unstable_now();
      switch (typeof P == "object" && P !== null ? (P = P.delay, P = typeof P == "number" && 0 < P ? ie + P : ie) : P = ie, X) {
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
        id: Le++,
        callback: Y,
        priorityLevel: X,
        startTime: P,
        expirationTime: ge,
        sortIndex: -1
      }, P > ie ? (X.sortIndex = P, te(L, X), Ce(Q) === null && X === Ce(L) && (we ? (dt(je), je = -1) : we = !0, qt(al, P - ie))) : (X.sortIndex = ge, te(Q, X), ce || N || (ce = !0, Yt || (Yt = !0, gt()))), X;
    }, W.unstable_shouldYield = Qt, W.unstable_wrapCallback = function(X) {
      var Y = k;
      return function() {
        var P = k;
        k = Y;
        try {
          return X.apply(this, arguments);
        } finally {
          k = P;
        }
      };
    };
  })(v1)), v1;
}
var g1 = {}, jE;
function TA() {
  return jE || (jE = 1, (function(W) {
    var te = {};
    te.NODE_ENV !== "production" && (function() {
      function Ce() {
        if (Yt = !1, Qt) {
          var Y = W.unstable_now();
          Te = Y;
          var P = !0;
          try {
            e: {
              Ft = !1, al && (al = !1, zt(se), se = -1), Bt = !0;
              var ie = dt;
              try {
                t: {
                  for (Ot(Y), Ie = Ye(ce); Ie !== null && !(Ie.expirationTime > Y && L()); ) {
                    var ge = Ie.callback;
                    if (typeof ge == "function") {
                      Ie.callback = null, dt = Ie.priorityLevel;
                      var O = ge(
                        Ie.expirationTime <= Y
                      );
                      if (Y = W.unstable_now(), typeof O == "function") {
                        Ie.callback = O, Ot(Y), P = !0;
                        break t;
                      }
                      Ie === Ye(ce) && Ne(ce), Ot(Y);
                    } else Ne(ce);
                    Ie = Ye(ce);
                  }
                  if (Ie !== null) P = !0;
                  else {
                    var A = Ye(we);
                    A !== null && Le(
                      Q,
                      A.startTime - Y
                    ), P = !1;
                  }
                }
                break e;
              } finally {
                Ie = null, dt = ie, Bt = !1;
              }
              P = void 0;
            }
          } finally {
            P ? Re() : Qt = !1;
          }
        }
      }
      function j(Y, P) {
        var ie = Y.length;
        Y.push(P);
        e: for (; 0 < ie; ) {
          var ge = ie - 1 >>> 1, O = Y[ge];
          if (0 < Ge(O, P))
            Y[ge] = P, Y[ie] = O, ie = ge;
          else break e;
        }
      }
      function Ye(Y) {
        return Y.length === 0 ? null : Y[0];
      }
      function Ne(Y) {
        if (Y.length === 0) return null;
        var P = Y[0], ie = Y.pop();
        if (ie !== P) {
          Y[0] = ie;
          e: for (var ge = 0, O = Y.length, A = O >>> 1; ge < A; ) {
            var K = 2 * (ge + 1) - 1, ee = Y[K], ae = K + 1, Oe = Y[ae];
            if (0 > Ge(ee, ie))
              ae < O && 0 > Ge(Oe, ee) ? (Y[ge] = Oe, Y[ae] = ie, ge = ae) : (Y[ge] = ee, Y[K] = ie, ge = K);
            else if (ae < O && 0 > Ge(Oe, ie))
              Y[ge] = Oe, Y[ae] = ie, ge = ae;
            else break e;
          }
        }
        return P;
      }
      function Ge(Y, P) {
        var ie = Y.sortIndex - P.sortIndex;
        return ie !== 0 ? ie : Y.id - P.id;
      }
      function Ot(Y) {
        for (var P = Ye(we); P !== null; ) {
          if (P.callback === null) Ne(we);
          else if (P.startTime <= Y)
            Ne(we), P.sortIndex = P.expirationTime, j(ce, P);
          else break;
          P = Ye(we);
        }
      }
      function Q(Y) {
        if (al = !1, Ot(Y), !Ft)
          if (Ye(ce) !== null)
            Ft = !0, Qt || (Qt = !0, Re());
          else {
            var P = Ye(we);
            P !== null && Le(
              Q,
              P.startTime - Y
            );
          }
      }
      function L() {
        return Yt ? !0 : !(W.unstable_now() - Te < gt);
      }
      function Le(Y, P) {
        se = je(function() {
          Y(W.unstable_now());
        }, P);
      }
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error()), W.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
        var me = performance;
        W.unstable_now = function() {
          return me.now();
        };
      } else {
        var k = Date, N = k.now();
        W.unstable_now = function() {
          return k.now() - N;
        };
      }
      var ce = [], we = [], ll = 1, Ie = null, dt = 3, Bt = !1, Ft = !1, al = !1, Yt = !1, je = typeof setTimeout == "function" ? setTimeout : null, zt = typeof clearTimeout == "function" ? clearTimeout : null, et = typeof setImmediate < "u" ? setImmediate : null, Qt = !1, se = -1, gt = 5, Te = -1;
      if (typeof et == "function")
        var Re = function() {
          et(Ce);
        };
      else if (typeof MessageChannel < "u") {
        var qt = new MessageChannel(), X = qt.port2;
        qt.port1.onmessage = Ce, Re = function() {
          X.postMessage(null);
        };
      } else
        Re = function() {
          je(Ce, 0);
        };
      W.unstable_IdlePriority = 5, W.unstable_ImmediatePriority = 1, W.unstable_LowPriority = 4, W.unstable_NormalPriority = 3, W.unstable_Profiling = null, W.unstable_UserBlockingPriority = 2, W.unstable_cancelCallback = function(Y) {
        Y.callback = null;
      }, W.unstable_forceFrameRate = function(Y) {
        0 > Y || 125 < Y ? console.error(
          "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
        ) : gt = 0 < Y ? Math.floor(1e3 / Y) : 5;
      }, W.unstable_getCurrentPriorityLevel = function() {
        return dt;
      }, W.unstable_next = function(Y) {
        switch (dt) {
          case 1:
          case 2:
          case 3:
            var P = 3;
            break;
          default:
            P = dt;
        }
        var ie = dt;
        dt = P;
        try {
          return Y();
        } finally {
          dt = ie;
        }
      }, W.unstable_requestPaint = function() {
        Yt = !0;
      }, W.unstable_runWithPriority = function(Y, P) {
        switch (Y) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            Y = 3;
        }
        var ie = dt;
        dt = Y;
        try {
          return P();
        } finally {
          dt = ie;
        }
      }, W.unstable_scheduleCallback = function(Y, P, ie) {
        var ge = W.unstable_now();
        switch (typeof ie == "object" && ie !== null ? (ie = ie.delay, ie = typeof ie == "number" && 0 < ie ? ge + ie : ge) : ie = ge, Y) {
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
        return O = ie + O, Y = {
          id: ll++,
          callback: P,
          priorityLevel: Y,
          startTime: ie,
          expirationTime: O,
          sortIndex: -1
        }, ie > ge ? (Y.sortIndex = ie, j(we, Y), Ye(ce) === null && Y === Ye(we) && (al ? (zt(se), se = -1) : al = !0, Le(Q, ie - ge))) : (Y.sortIndex = O, j(ce, Y), Ft || Bt || (Ft = !0, Qt || (Qt = !0, Re()))), Y;
      }, W.unstable_shouldYield = L, W.unstable_wrapCallback = function(Y) {
        var P = dt;
        return function() {
          var ie = dt;
          dt = P;
          try {
            return Y.apply(this, arguments);
          } finally {
            dt = ie;
          }
        };
      }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    })();
  })(g1)), g1;
}
var xE;
function JE() {
  if (xE) return Qg.exports;
  xE = 1;
  var W = {};
  return W.NODE_ENV === "production" ? Qg.exports = EA() : Qg.exports = TA(), Qg.exports;
}
var Lg = { exports: {} }, Ka = {};
var GE;
function AA() {
  if (GE) return Ka;
  GE = 1;
  var W = Mm();
  function te(Q) {
    var L = "https://react.dev/errors/" + Q;
    if (1 < arguments.length) {
      L += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var Le = 2; Le < arguments.length; Le++)
        L += "&args[]=" + encodeURIComponent(arguments[Le]);
    }
    return "Minified React error #" + Q + "; visit " + L + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function Ce() {
  }
  var j = {
    d: {
      f: Ce,
      r: function() {
        throw Error(te(522));
      },
      D: Ce,
      C: Ce,
      L: Ce,
      m: Ce,
      X: Ce,
      S: Ce,
      M: Ce
    },
    p: 0,
    findDOMNode: null
  }, Ye = /* @__PURE__ */ Symbol.for("react.portal");
  function Ne(Q, L, Le) {
    var me = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: Ye,
      key: me == null ? null : "" + me,
      children: Q,
      containerInfo: L,
      implementation: Le
    };
  }
  var Ge = W.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function Ot(Q, L) {
    if (Q === "font") return "";
    if (typeof L == "string")
      return L === "use-credentials" ? L : "";
  }
  return Ka.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = j, Ka.createPortal = function(Q, L) {
    var Le = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!L || L.nodeType !== 1 && L.nodeType !== 9 && L.nodeType !== 11)
      throw Error(te(299));
    return Ne(Q, L, null, Le);
  }, Ka.flushSync = function(Q) {
    var L = Ge.T, Le = j.p;
    try {
      if (Ge.T = null, j.p = 2, Q) return Q();
    } finally {
      Ge.T = L, j.p = Le, j.d.f();
    }
  }, Ka.preconnect = function(Q, L) {
    typeof Q == "string" && (L ? (L = L.crossOrigin, L = typeof L == "string" ? L === "use-credentials" ? L : "" : void 0) : L = null, j.d.C(Q, L));
  }, Ka.prefetchDNS = function(Q) {
    typeof Q == "string" && j.d.D(Q);
  }, Ka.preinit = function(Q, L) {
    if (typeof Q == "string" && L && typeof L.as == "string") {
      var Le = L.as, me = Ot(Le, L.crossOrigin), k = typeof L.integrity == "string" ? L.integrity : void 0, N = typeof L.fetchPriority == "string" ? L.fetchPriority : void 0;
      Le === "style" ? j.d.S(
        Q,
        typeof L.precedence == "string" ? L.precedence : void 0,
        {
          crossOrigin: me,
          integrity: k,
          fetchPriority: N
        }
      ) : Le === "script" && j.d.X(Q, {
        crossOrigin: me,
        integrity: k,
        fetchPriority: N,
        nonce: typeof L.nonce == "string" ? L.nonce : void 0
      });
    }
  }, Ka.preinitModule = function(Q, L) {
    if (typeof Q == "string")
      if (typeof L == "object" && L !== null) {
        if (L.as == null || L.as === "script") {
          var Le = Ot(
            L.as,
            L.crossOrigin
          );
          j.d.M(Q, {
            crossOrigin: Le,
            integrity: typeof L.integrity == "string" ? L.integrity : void 0,
            nonce: typeof L.nonce == "string" ? L.nonce : void 0
          });
        }
      } else L == null && j.d.M(Q);
  }, Ka.preload = function(Q, L) {
    if (typeof Q == "string" && typeof L == "object" && L !== null && typeof L.as == "string") {
      var Le = L.as, me = Ot(Le, L.crossOrigin);
      j.d.L(Q, Le, {
        crossOrigin: me,
        integrity: typeof L.integrity == "string" ? L.integrity : void 0,
        nonce: typeof L.nonce == "string" ? L.nonce : void 0,
        type: typeof L.type == "string" ? L.type : void 0,
        fetchPriority: typeof L.fetchPriority == "string" ? L.fetchPriority : void 0,
        referrerPolicy: typeof L.referrerPolicy == "string" ? L.referrerPolicy : void 0,
        imageSrcSet: typeof L.imageSrcSet == "string" ? L.imageSrcSet : void 0,
        imageSizes: typeof L.imageSizes == "string" ? L.imageSizes : void 0,
        media: typeof L.media == "string" ? L.media : void 0
      });
    }
  }, Ka.preloadModule = function(Q, L) {
    if (typeof Q == "string")
      if (L) {
        var Le = Ot(L.as, L.crossOrigin);
        j.d.m(Q, {
          as: typeof L.as == "string" && L.as !== "script" ? L.as : void 0,
          crossOrigin: Le,
          integrity: typeof L.integrity == "string" ? L.integrity : void 0
        });
      } else j.d.m(Q);
  }, Ka.requestFormReset = function(Q) {
    j.d.r(Q);
  }, Ka.unstable_batchedUpdates = function(Q, L) {
    return Q(L);
  }, Ka.useFormState = function(Q, L, Le) {
    return Ge.H.useFormState(Q, L, Le);
  }, Ka.useFormStatus = function() {
    return Ge.H.useHostTransitionStatus();
  }, Ka.version = "19.2.3", Ka;
}
var $a = {}, wE;
function OA() {
  if (wE) return $a;
  wE = 1;
  var W = {};
  return W.NODE_ENV !== "production" && (function() {
    function te() {
    }
    function Ce(k) {
      return "" + k;
    }
    function j(k, N, ce) {
      var we = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      try {
        Ce(we);
        var ll = !1;
      } catch {
        ll = !0;
      }
      return ll && (console.error(
        "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
        typeof Symbol == "function" && Symbol.toStringTag && we[Symbol.toStringTag] || we.constructor.name || "Object"
      ), Ce(we)), {
        $$typeof: Le,
        key: we == null ? null : "" + we,
        children: k,
        containerInfo: N,
        implementation: ce
      };
    }
    function Ye(k, N) {
      if (k === "font") return "";
      if (typeof N == "string")
        return N === "use-credentials" ? N : "";
    }
    function Ne(k) {
      return k === null ? "`null`" : k === void 0 ? "`undefined`" : k === "" ? "an empty string" : 'something with type "' + typeof k + '"';
    }
    function Ge(k) {
      return k === null ? "`null`" : k === void 0 ? "`undefined`" : k === "" ? "an empty string" : typeof k == "string" ? JSON.stringify(k) : typeof k == "number" ? "`" + k + "`" : 'something with type "' + typeof k + '"';
    }
    function Ot() {
      var k = me.H;
      return k === null && console.error(
        `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
      ), k;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var Q = Mm(), L = {
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
    }, Le = /* @__PURE__ */ Symbol.for("react.portal"), me = Q.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    typeof Map == "function" && Map.prototype != null && typeof Map.prototype.forEach == "function" && typeof Set == "function" && Set.prototype != null && typeof Set.prototype.clear == "function" && typeof Set.prototype.forEach == "function" || console.error(
      "React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
    ), $a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = L, $a.createPortal = function(k, N) {
      var ce = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!N || N.nodeType !== 1 && N.nodeType !== 9 && N.nodeType !== 11)
        throw Error("Target container is not a DOM element.");
      return j(k, N, null, ce);
    }, $a.flushSync = function(k) {
      var N = me.T, ce = L.p;
      try {
        if (me.T = null, L.p = 2, k)
          return k();
      } finally {
        me.T = N, L.p = ce, L.d.f() && console.error(
          "flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."
        );
      }
    }, $a.preconnect = function(k, N) {
      typeof k == "string" && k ? N != null && typeof N != "object" ? console.error(
        "ReactDOM.preconnect(): Expected the `options` argument (second) to be an object but encountered %s instead. The only supported option at this time is `crossOrigin` which accepts a string.",
        Ge(N)
      ) : N != null && typeof N.crossOrigin != "string" && console.error(
        "ReactDOM.preconnect(): Expected the `crossOrigin` option (second argument) to be a string but encountered %s instead. Try removing this option or passing a string value instead.",
        Ne(N.crossOrigin)
      ) : console.error(
        "ReactDOM.preconnect(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
        Ne(k)
      ), typeof k == "string" && (N ? (N = N.crossOrigin, N = typeof N == "string" ? N === "use-credentials" ? N : "" : void 0) : N = null, L.d.C(k, N));
    }, $a.prefetchDNS = function(k) {
      if (typeof k != "string" || !k)
        console.error(
          "ReactDOM.prefetchDNS(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
          Ne(k)
        );
      else if (1 < arguments.length) {
        var N = arguments[1];
        typeof N == "object" && N.hasOwnProperty("crossOrigin") ? console.error(
          "ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. It looks like the you are attempting to set a crossOrigin property for this DNS lookup hint. Browsers do not perform DNS queries using CORS and setting this attribute on the resource hint has no effect. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",
          Ge(N)
        ) : console.error(
          "ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",
          Ge(N)
        );
      }
      typeof k == "string" && L.d.D(k);
    }, $a.preinit = function(k, N) {
      if (typeof k == "string" && k ? N == null || typeof N != "object" ? console.error(
        "ReactDOM.preinit(): Expected the `options` argument (second) to be an object with an `as` property describing the type of resource to be preinitialized but encountered %s instead.",
        Ge(N)
      ) : N.as !== "style" && N.as !== "script" && console.error(
        'ReactDOM.preinit(): Expected the `as` property in the `options` argument (second) to contain a valid value describing the type of resource to be preinitialized but encountered %s instead. Valid values for `as` are "style" and "script".',
        Ge(N.as)
      ) : console.error(
        "ReactDOM.preinit(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
        Ne(k)
      ), typeof k == "string" && N && typeof N.as == "string") {
        var ce = N.as, we = Ye(ce, N.crossOrigin), ll = typeof N.integrity == "string" ? N.integrity : void 0, Ie = typeof N.fetchPriority == "string" ? N.fetchPriority : void 0;
        ce === "style" ? L.d.S(
          k,
          typeof N.precedence == "string" ? N.precedence : void 0,
          {
            crossOrigin: we,
            integrity: ll,
            fetchPriority: Ie
          }
        ) : ce === "script" && L.d.X(k, {
          crossOrigin: we,
          integrity: ll,
          fetchPriority: Ie,
          nonce: typeof N.nonce == "string" ? N.nonce : void 0
        });
      }
    }, $a.preinitModule = function(k, N) {
      var ce = "";
      typeof k == "string" && k || (ce += " The `href` argument encountered was " + Ne(k) + "."), N !== void 0 && typeof N != "object" ? ce += " The `options` argument encountered was " + Ne(N) + "." : N && "as" in N && N.as !== "script" && (ce += " The `as` option encountered was " + Ge(N.as) + "."), ce ? console.error(
        "ReactDOM.preinitModule(): Expected up to two arguments, a non-empty `href` string and, optionally, an `options` object with a valid `as` property.%s",
        ce
      ) : (ce = N && typeof N.as == "string" ? N.as : "script", ce) === "script" || (ce = Ge(ce), console.error(
        'ReactDOM.preinitModule(): Currently the only supported "as" type for this function is "script" but received "%s" instead. This warning was generated for `href` "%s". In the future other module types will be supported, aligning with the import-attributes proposal. Learn more here: (https://github.com/tc39/proposal-import-attributes)',
        ce,
        k
      )), typeof k == "string" && (typeof N == "object" && N !== null ? (N.as == null || N.as === "script") && (ce = Ye(
        N.as,
        N.crossOrigin
      ), L.d.M(k, {
        crossOrigin: ce,
        integrity: typeof N.integrity == "string" ? N.integrity : void 0,
        nonce: typeof N.nonce == "string" ? N.nonce : void 0
      })) : N == null && L.d.M(k));
    }, $a.preload = function(k, N) {
      var ce = "";
      if (typeof k == "string" && k || (ce += " The `href` argument encountered was " + Ne(k) + "."), N == null || typeof N != "object" ? ce += " The `options` argument encountered was " + Ne(N) + "." : typeof N.as == "string" && N.as || (ce += " The `as` option encountered was " + Ne(N.as) + "."), ce && console.error(
        'ReactDOM.preload(): Expected two arguments, a non-empty `href` string and an `options` object with an `as` property valid for a `<link rel="preload" as="..." />` tag.%s',
        ce
      ), typeof k == "string" && typeof N == "object" && N !== null && typeof N.as == "string") {
        ce = N.as;
        var we = Ye(
          ce,
          N.crossOrigin
        );
        L.d.L(k, ce, {
          crossOrigin: we,
          integrity: typeof N.integrity == "string" ? N.integrity : void 0,
          nonce: typeof N.nonce == "string" ? N.nonce : void 0,
          type: typeof N.type == "string" ? N.type : void 0,
          fetchPriority: typeof N.fetchPriority == "string" ? N.fetchPriority : void 0,
          referrerPolicy: typeof N.referrerPolicy == "string" ? N.referrerPolicy : void 0,
          imageSrcSet: typeof N.imageSrcSet == "string" ? N.imageSrcSet : void 0,
          imageSizes: typeof N.imageSizes == "string" ? N.imageSizes : void 0,
          media: typeof N.media == "string" ? N.media : void 0
        });
      }
    }, $a.preloadModule = function(k, N) {
      var ce = "";
      typeof k == "string" && k || (ce += " The `href` argument encountered was " + Ne(k) + "."), N !== void 0 && typeof N != "object" ? ce += " The `options` argument encountered was " + Ne(N) + "." : N && "as" in N && typeof N.as != "string" && (ce += " The `as` option encountered was " + Ne(N.as) + "."), ce && console.error(
        'ReactDOM.preloadModule(): Expected two arguments, a non-empty `href` string and, optionally, an `options` object with an `as` property valid for a `<link rel="modulepreload" as="..." />` tag.%s',
        ce
      ), typeof k == "string" && (N ? (ce = Ye(
        N.as,
        N.crossOrigin
      ), L.d.m(k, {
        as: typeof N.as == "string" && N.as !== "script" ? N.as : void 0,
        crossOrigin: ce,
        integrity: typeof N.integrity == "string" ? N.integrity : void 0
      })) : L.d.m(k));
    }, $a.requestFormReset = function(k) {
      L.d.r(k);
    }, $a.unstable_batchedUpdates = function(k, N) {
      return k(N);
    }, $a.useFormState = function(k, N, ce) {
      return Ot().useFormState(k, N, ce);
    }, $a.useFormStatus = function() {
      return Ot().useHostTransitionStatus();
    }, $a.version = "19.2.3", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  })(), $a;
}
var XE;
function KE() {
  if (XE) return Lg.exports;
  XE = 1;
  var W = {};
  function te() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
      if (W.NODE_ENV !== "production")
        throw new Error("^_^");
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(te);
      } catch (Ce) {
        console.error(Ce);
      }
    }
  }
  return W.NODE_ENV === "production" ? (te(), Lg.exports = AA()) : Lg.exports = OA(), Lg.exports;
}
var QE;
function zA() {
  if (QE) return z0;
  QE = 1;
  var W = JE(), te = Mm(), Ce = KE();
  function j(l) {
    var n = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      n += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var u = 2; u < arguments.length; u++)
        n += "&args[]=" + encodeURIComponent(arguments[u]);
    }
    return "Minified React error #" + l + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function Ye(l) {
    return !(!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11);
  }
  function Ne(l) {
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
  function Ge(l) {
    if (l.tag === 13) {
      var n = l.memoizedState;
      if (n === null && (l = l.alternate, l !== null && (n = l.memoizedState)), n !== null) return n.dehydrated;
    }
    return null;
  }
  function Ot(l) {
    if (l.tag === 31) {
      var n = l.memoizedState;
      if (n === null && (l = l.alternate, l !== null && (n = l.memoizedState)), n !== null) return n.dehydrated;
    }
    return null;
  }
  function Q(l) {
    if (Ne(l) !== l)
      throw Error(j(188));
  }
  function L(l) {
    var n = l.alternate;
    if (!n) {
      if (n = Ne(l), n === null) throw Error(j(188));
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
          if (r === u) return Q(s), l;
          if (r === c) return Q(s), n;
          r = r.sibling;
        }
        throw Error(j(188));
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
          if (!m) throw Error(j(189));
        }
      }
      if (u.alternate !== c) throw Error(j(190));
    }
    if (u.tag !== 3) throw Error(j(188));
    return u.stateNode.current === u ? l : n;
  }
  function Le(l) {
    var n = l.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return l;
    for (l = l.child; l !== null; ) {
      if (n = Le(l), n !== null) return n;
      l = l.sibling;
    }
    return null;
  }
  var me = Object.assign, k = /* @__PURE__ */ Symbol.for("react.element"), N = /* @__PURE__ */ Symbol.for("react.transitional.element"), ce = /* @__PURE__ */ Symbol.for("react.portal"), we = /* @__PURE__ */ Symbol.for("react.fragment"), ll = /* @__PURE__ */ Symbol.for("react.strict_mode"), Ie = /* @__PURE__ */ Symbol.for("react.profiler"), dt = /* @__PURE__ */ Symbol.for("react.consumer"), Bt = /* @__PURE__ */ Symbol.for("react.context"), Ft = /* @__PURE__ */ Symbol.for("react.forward_ref"), al = /* @__PURE__ */ Symbol.for("react.suspense"), Yt = /* @__PURE__ */ Symbol.for("react.suspense_list"), je = /* @__PURE__ */ Symbol.for("react.memo"), zt = /* @__PURE__ */ Symbol.for("react.lazy"), et = /* @__PURE__ */ Symbol.for("react.activity"), Qt = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), se = Symbol.iterator;
  function gt(l) {
    return l === null || typeof l != "object" ? null : (l = se && l[se] || l["@@iterator"], typeof l == "function" ? l : null);
  }
  var Te = /* @__PURE__ */ Symbol.for("react.client.reference");
  function Re(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === Te ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case we:
        return "Fragment";
      case Ie:
        return "Profiler";
      case ll:
        return "StrictMode";
      case al:
        return "Suspense";
      case Yt:
        return "SuspenseList";
      case et:
        return "Activity";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case ce:
          return "Portal";
        case Bt:
          return l.displayName || "Context";
        case dt:
          return (l._context.displayName || "Context") + ".Consumer";
        case Ft:
          var n = l.render;
          return l = l.displayName, l || (l = n.displayName || n.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
        case je:
          return n = l.displayName || null, n !== null ? n : Re(l.type) || "Memo";
        case zt:
          n = l._payload, l = l._init;
          try {
            return Re(l(n));
          } catch {
          }
      }
    return null;
  }
  var qt = Array.isArray, X = te.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Y = Ce.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, P = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, ie = [], ge = -1;
  function O(l) {
    return { current: l };
  }
  function A(l) {
    0 > ge || (l.current = ie[ge], ie[ge] = null, ge--);
  }
  function K(l, n) {
    ge++, ie[ge] = l.current, l.current = n;
  }
  var ee = O(null), ae = O(null), Oe = O(null), tt = O(null);
  function ke(l, n) {
    switch (K(Oe, n), K(ae, l), K(ee, null), n.nodeType) {
      case 9:
      case 11:
        l = (l = n.documentElement) && (l = l.namespaceURI) ? Ef(l) : 0;
        break;
      default:
        if (l = n.tagName, n = n.namespaceURI)
          n = Ef(n), l = Uv(n, l);
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
  function St() {
    A(ee), A(ae), A(Oe);
  }
  function ea(l) {
    l.memoizedState !== null && K(tt, l);
    var n = ee.current, u = Uv(n, l.type);
    n !== u && (K(ae, l), K(ee, u));
  }
  function pn(l) {
    ae.current === l && (A(ee), A(ae)), tt.current === l && (A(tt), sl._currentValue = P);
  }
  var fe, Ec;
  function ka(l) {
    if (fe === void 0)
      try {
        throw Error();
      } catch (u) {
        var n = u.stack.trim().match(/\n( *(at )?)/);
        fe = n && n[1] || "", Ec = -1 < u.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < u.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + fe + l + Ec;
  }
  var ni = !1;
  function nu(l, n) {
    if (!l || ni) return "";
    ni = !0;
    var u = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var c = {
        DetermineComponentFrameRoot: function() {
          try {
            if (n) {
              var $ = function() {
                throw Error();
              };
              if (Object.defineProperty($.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct($, []);
                } catch (G) {
                  var B = G;
                }
                Reflect.construct(l, [], $);
              } else {
                try {
                  $.call();
                } catch (G) {
                  B = G;
                }
                l.call($.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (G) {
                B = G;
              }
              ($ = l()) && typeof $.catch == "function" && $.catch(function() {
              });
            }
          } catch (G) {
            if (G && B && typeof G.stack == "string")
              return [G.stack, B.stack];
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
`), H = g.split(`
`);
        for (s = c = 0; c < T.length && !T[c].includes("DetermineComponentFrameRoot"); )
          c++;
        for (; s < H.length && !H[s].includes(
          "DetermineComponentFrameRoot"
        ); )
          s++;
        if (c === T.length || s === H.length)
          for (c = T.length - 1, s = H.length - 1; 1 <= c && 0 <= s && T[c] !== H[s]; )
            s--;
        for (; 1 <= c && 0 <= s; c--, s--)
          if (T[c] !== H[s]) {
            if (c !== 1 || s !== 1)
              do
                if (c--, s--, 0 > s || T[c] !== H[s]) {
                  var V = `
` + T[c].replace(" at new ", " at ");
                  return l.displayName && V.includes("<anonymous>") && (V = V.replace("<anonymous>", l.displayName)), V;
                }
              while (1 <= c && 0 <= s);
            break;
          }
      }
    } finally {
      ni = !1, Error.prepareStackTrace = u;
    }
    return (u = l ? l.displayName || l.name : "") ? ka(u) : "";
  }
  function At(l, n) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return ka(l.type);
      case 16:
        return ka("Lazy");
      case 13:
        return l.child !== n && n !== null ? ka("Suspense Fallback") : ka("Suspense");
      case 19:
        return ka("SuspenseList");
      case 0:
      case 15:
        return nu(l.type, !1);
      case 11:
        return nu(l.type.render, !1);
      case 1:
        return nu(l.type, !0);
      case 31:
        return ka("Activity");
      default:
        return "";
    }
  }
  function xl(l) {
    try {
      var n = "", u = null;
      do
        n += At(l, u), u = l, l = l.return;
      while (l);
      return n;
    } catch (c) {
      return `
Error generating stack: ` + c.message + `
` + c.stack;
    }
  }
  var qi = Object.prototype.hasOwnProperty, Pf = W.unstable_scheduleCallback, he = W.unstable_cancelCallback, No = W.unstable_shouldYield, uu = W.unstable_requestPaint, El = W.unstable_now, ji = W.unstable_getCurrentPriorityLevel, es = W.unstable_ImmediatePriority, Bo = W.unstable_UserBlockingPriority, xi = W.unstable_NormalPriority, Gi = W.unstable_LowPriority, ts = W.unstable_IdlePriority, ls = W.log, as = W.unstable_setDisableYieldValue, xn = null, pl = null;
  function za(l) {
    if (typeof ls == "function" && as(l), pl && typeof pl.setStrictMode == "function")
      try {
        pl.setStrictMode(xn, l);
      } catch {
      }
  }
  var Rl = Math.clz32 ? Math.clz32 : v, Yo = Math.log, wi = Math.LN2;
  function v(l) {
    return l >>>= 0, l === 0 ? 32 : 31 - (Yo(l) / wi | 0) | 0;
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
  function Me(l, n, u) {
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
  function ct(l, n) {
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
  function Be() {
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
  function od(l, n, u, c, s, r) {
    var m = l.pendingLanes;
    l.pendingLanes = u, l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0, l.expiredLanes &= u, l.entangledLanes &= u, l.errorRecoveryDisabledLanes &= u, l.shellSuspendCounter = 0;
    var g = l.entanglements, T = l.expirationTimes, H = l.hiddenUpdates;
    for (u = m & ~u; 0 < u; ) {
      var V = 31 - Rl(u), $ = 1 << V;
      g[V] = 0, T[V] = -1;
      var B = H[V];
      if (B !== null)
        for (H[V] = null, V = 0; V < B.length; V++) {
          var G = B[V];
          G !== null && (G.lane &= -536870913);
        }
      u &= ~$;
    }
    c !== 0 && Tc(l, c, 0), r !== 0 && s === 0 && l.tag !== 0 && (l.suspendedLanes |= r & ~(m & ~n));
  }
  function Tc(l, n, u) {
    l.pendingLanes |= n, l.suspendedLanes &= ~n;
    var c = 31 - Rl(n);
    l.entangledLanes |= n, l.entanglements[c] = l.entanglements[c] | 1073741824 | u & 261930;
  }
  function ns(l, n) {
    var u = l.entangledLanes |= n;
    for (l = l.entanglements; u; ) {
      var c = 31 - Rl(u), s = 1 << c;
      s & n | l[c] & n && (l[c] |= n), u &= ~s;
    }
  }
  function iu(l, n) {
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
  function fd(l) {
    return l &= -l, 2 < l ? 8 < l ? (l & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function M0() {
    var l = Y.p;
    return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : Br(l.type));
  }
  function sd(l, n) {
    var u = Y.p;
    try {
      return Y.p = l, n();
    } finally {
      Y.p = u;
    }
  }
  var ui = Math.random().toString(36).slice(2), vl = "__reactFiber$" + ui, Lt = "__reactProps$" + ui, Ac = "__reactContainer$" + ui, us = "__reactEvents$" + ui, C0 = "__reactListeners$" + ui, Cm = "__reactHandles$" + ui, Um = "__reactResources$" + ui, qo = "__reactMarker$" + ui;
  function Xi(l) {
    delete l[vl], delete l[Lt], delete l[us], delete l[C0], delete l[Cm];
  }
  function Oc(l) {
    var n = l[vl];
    if (n) return n;
    for (var u = l.parentNode; u; ) {
      if (n = u[Ac] || u[vl]) {
        if (u = n.alternate, n.child !== null || u !== null && u.child !== null)
          for (l = jh(l); l !== null; ) {
            if (u = l[vl]) return u;
            l = jh(l);
          }
        return n;
      }
      l = u, u = l.parentNode;
    }
    return null;
  }
  function zc(l) {
    if (l = l[vl] || l[Ac]) {
      var n = l.tag;
      if (n === 5 || n === 6 || n === 13 || n === 31 || n === 26 || n === 27 || n === 3)
        return l;
    }
    return null;
  }
  function jo(l) {
    var n = l.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return l.stateNode;
    throw Error(j(33));
  }
  function _c(l) {
    var n = l[Um];
    return n || (n = l[Um] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), n;
  }
  function Tl(l) {
    l[qo] = !0;
  }
  var Ra = /* @__PURE__ */ new Set(), Dc = {};
  function Wa(l, n) {
    Rc(l, n), Rc(l + "Capture", n);
  }
  function Rc(l, n) {
    for (Dc[l] = n, l = 0; l < n.length; l++)
      Ra.add(n[l]);
  }
  var is = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), cs = {}, rd = {};
  function os(l) {
    return qi.call(rd, l) ? !0 : qi.call(cs, l) ? !1 : is.test(l) ? rd[l] = !0 : (cs[l] = !0, !1);
  }
  function ii(l, n, u) {
    if (os(n))
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
  function xo(l, n, u) {
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
  function ci(l, n, u, c) {
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
  function vn(l) {
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
  function Hm(l) {
    var n = l.type;
    return (l = l.nodeName) && l.toLowerCase() === "input" && (n === "checkbox" || n === "radio");
  }
  function Nm(l, n, u) {
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
  function fs(l) {
    if (!l._valueTracker) {
      var n = Hm(l) ? "checked" : "value";
      l._valueTracker = Nm(
        l,
        n,
        "" + l[n]
      );
    }
  }
  function Bm(l) {
    if (!l) return !1;
    var n = l._valueTracker;
    if (!n) return !0;
    var u = n.getValue(), c = "";
    return l && (c = Hm(l) ? l.checked ? "true" : "false" : l.value), l = c, l !== u ? (n.setValue(l), !0) : !1;
  }
  function ss(l) {
    if (l = l || (typeof document < "u" ? document : void 0), typeof l > "u") return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var U0 = /[\n"\\]/g;
  function gn(l) {
    return l.replace(
      U0,
      function(n) {
        return "\\" + n.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function dd(l, n, u, c, s, r, m, g) {
    l.name = "", m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" ? l.type = m : l.removeAttribute("type"), n != null ? m === "number" ? (n === 0 && l.value === "" || l.value != n) && (l.value = "" + vn(n)) : l.value !== "" + vn(n) && (l.value = "" + vn(n)) : m !== "submit" && m !== "reset" || l.removeAttribute("value"), n != null ? Go(l, m, vn(n)) : u != null ? Go(l, m, vn(u)) : c != null && l.removeAttribute("value"), s == null && r != null && (l.defaultChecked = !!r), s != null && (l.checked = s && typeof s != "function" && typeof s != "symbol"), g != null && typeof g != "function" && typeof g != "symbol" && typeof g != "boolean" ? l.name = "" + vn(g) : l.removeAttribute("name");
  }
  function hd(l, n, u, c, s, r, m, g) {
    if (r != null && typeof r != "function" && typeof r != "symbol" && typeof r != "boolean" && (l.type = r), n != null || u != null) {
      if (!(r !== "submit" && r !== "reset" || n != null)) {
        fs(l);
        return;
      }
      u = u != null ? "" + vn(u) : "", n = n != null ? "" + vn(n) : u, g || n === l.value || (l.value = n), l.defaultValue = n;
    }
    c = c ?? s, c = typeof c != "function" && typeof c != "symbol" && !!c, l.checked = g ? l.checked : !!c, l.defaultChecked = !!c, m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" && (l.name = m), fs(l);
  }
  function Go(l, n, u) {
    n === "number" && ss(l.ownerDocument) === l || l.defaultValue === "" + u || (l.defaultValue = "" + u);
  }
  function cu(l, n, u, c) {
    if (l = l.options, n) {
      n = {};
      for (var s = 0; s < u.length; s++)
        n["$" + u[s]] = !0;
      for (u = 0; u < l.length; u++)
        s = n.hasOwnProperty("$" + l[u].value), l[u].selected !== s && (l[u].selected = s), s && c && (l[u].defaultSelected = !0);
    } else {
      for (u = "" + vn(u), n = null, s = 0; s < l.length; s++) {
        if (l[s].value === u) {
          l[s].selected = !0, c && (l[s].defaultSelected = !0);
          return;
        }
        n !== null || l[s].disabled || (n = l[s]);
      }
      n !== null && (n.selected = !0);
    }
  }
  function H0(l, n, u) {
    if (n != null && (n = "" + vn(n), n !== l.value && (l.value = n), u == null)) {
      l.defaultValue !== n && (l.defaultValue = n);
      return;
    }
    l.defaultValue = u != null ? "" + vn(u) : "";
  }
  function Ym(l, n, u, c) {
    if (n == null) {
      if (c != null) {
        if (u != null) throw Error(j(92));
        if (qt(c)) {
          if (1 < c.length) throw Error(j(93));
          c = c[0];
        }
        u = c;
      }
      u == null && (u = ""), n = u;
    }
    u = vn(n), l.defaultValue = u, c = l.textContent, c === u && c !== "" && c !== null && (l.value = c), fs(l);
  }
  function Mc(l, n) {
    if (n) {
      var u = l.firstChild;
      if (u && u === l.lastChild && u.nodeType === 3) {
        u.nodeValue = n;
        return;
      }
    }
    l.textContent = n;
  }
  var rs = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function qm(l, n, u) {
    var c = n.indexOf("--") === 0;
    u == null || typeof u == "boolean" || u === "" ? c ? l.setProperty(n, "") : n === "float" ? l.cssFloat = "" : l[n] = "" : c ? l.setProperty(n, u) : typeof u != "number" || u === 0 || rs.has(n) ? n === "float" ? l.cssFloat = u : l[n] = ("" + u).trim() : l[n] = u + "px";
  }
  function N0(l, n, u) {
    if (n != null && typeof n != "object")
      throw Error(j(62));
    if (l = l.style, u != null) {
      for (var c in u)
        !u.hasOwnProperty(c) || n != null && n.hasOwnProperty(c) || (c.indexOf("--") === 0 ? l.setProperty(c, "") : c === "float" ? l.cssFloat = "" : l[c] = "");
      for (var s in n)
        c = n[s], n.hasOwnProperty(s) && u[s] !== c && qm(l, s, c);
    } else
      for (var r in n)
        n.hasOwnProperty(r) && qm(l, r, n[r]);
  }
  function jm(l) {
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
  var Vg = /* @__PURE__ */ new Map([
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
  ]), Zg = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Qi(l) {
    return Zg.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l;
  }
  function wl() {
  }
  var ds = null;
  function md(l) {
    return l = l.target || l.srcElement || window, l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l;
  }
  var Cc = null, ou = null;
  function xm(l) {
    var n = zc(l);
    if (n && (l = n.stateNode)) {
      var u = l[Lt] || null;
      e: switch (l = n.stateNode, n.type) {
        case "input":
          if (dd(
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
              'input[name="' + gn(
                "" + n
              ) + '"][type="radio"]'
            ), n = 0; n < u.length; n++) {
              var c = u[n];
              if (c !== l && c.form === l.form) {
                var s = c[Lt] || null;
                if (!s) throw Error(j(90));
                dd(
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
              c = u[n], c.form === l.form && Bm(c);
          }
          break e;
        case "textarea":
          H0(l, u.value, u.defaultValue);
          break e;
        case "select":
          n = u.value, n != null && cu(l, !!u.multiple, n, !1);
      }
    }
  }
  var wo = !1;
  function hs(l, n, u) {
    if (wo) return l(n, u);
    wo = !0;
    try {
      var c = l(n);
      return c;
    } finally {
      if (wo = !1, (Cc !== null || ou !== null) && (pr(), Cc && (n = Cc, l = ou, ou = Cc = null, xm(n), l)))
        for (n = 0; n < l.length; n++) xm(l[n]);
    }
  }
  function Xo(l, n) {
    var u = l.stateNode;
    if (u === null) return null;
    var c = u[Lt] || null;
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
        j(231, n, typeof u)
      );
    return u;
  }
  var nl = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Gm = !1;
  if (nl)
    try {
      var Uc = {};
      Object.defineProperty(Uc, "passive", {
        get: function() {
          Gm = !0;
        }
      }), window.addEventListener("test", Uc, Uc), window.removeEventListener("test", Uc, Uc);
    } catch {
      Gm = !1;
    }
  var oi = null, yd = null, pd = null;
  function B0() {
    if (pd) return pd;
    var l, n = yd, u = n.length, c, s = "value" in oi ? oi.value : oi.textContent, r = s.length;
    for (l = 0; l < u && n[l] === s[l]; l++) ;
    var m = u - l;
    for (c = 1; c <= m && n[u - c] === s[r - c]; c++) ;
    return pd = s.slice(l, 1 < c ? 1 - c : void 0);
  }
  function ms(l) {
    var n = l.keyCode;
    return "charCode" in l ? (l = l.charCode, l === 0 && n === 13 && (l = 13)) : l = n, l === 10 && (l = 13), 32 <= l || l === 13 ? l : 0;
  }
  function vd() {
    return !0;
  }
  function wm() {
    return !1;
  }
  function Ma(l) {
    function n(u, c, s, r, m) {
      this._reactName = u, this._targetInst = s, this.type = c, this.nativeEvent = r, this.target = m, this.currentTarget = null;
      for (var g in l)
        l.hasOwnProperty(g) && (u = l[g], this[g] = u ? u(r) : r[g]);
      return this.isDefaultPrevented = (r.defaultPrevented != null ? r.defaultPrevented : r.returnValue === !1) ? vd : wm, this.isPropagationStopped = wm, this;
    }
    return me(n.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var u = this.nativeEvent;
        u && (u.preventDefault ? u.preventDefault() : typeof u.returnValue != "unknown" && (u.returnValue = !1), this.isDefaultPrevented = vd);
      },
      stopPropagation: function() {
        var u = this.nativeEvent;
        u && (u.stopPropagation ? u.stopPropagation() : typeof u.cancelBubble != "unknown" && (u.cancelBubble = !0), this.isPropagationStopped = vd);
      },
      persist: function() {
      },
      isPersistent: vd
    }), n;
  }
  var fu = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(l) {
      return l.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, ys = Ma(fu), Qo = me({}, fu, { view: 0, detail: 0 }), Y0 = Ma(Qo), Xm, Qm, ps, gd = me({}, Qo, {
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
    getModifierState: Fa,
    button: 0,
    buttons: 0,
    relatedTarget: function(l) {
      return l.relatedTarget === void 0 ? l.fromElement === l.srcElement ? l.toElement : l.fromElement : l.relatedTarget;
    },
    movementX: function(l) {
      return "movementX" in l ? l.movementX : (l !== ps && (ps && l.type === "mousemove" ? (Xm = l.screenX - ps.screenX, Qm = l.screenY - ps.screenY) : Qm = Xm = 0, ps = l), Xm);
    },
    movementY: function(l) {
      return "movementY" in l ? l.movementY : Qm;
    }
  }), q0 = Ma(gd), vs = me({}, gd, { dataTransfer: 0 }), j0 = Ma(vs), x0 = me({}, Qo, { relatedTarget: 0 }), Sd = Ma(x0), G0 = me({}, fu, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Lm = Ma(G0), w0 = me({}, fu, {
    clipboardData: function(l) {
      return "clipboardData" in l ? l.clipboardData : window.clipboardData;
    }
  }), Hc = Ma(w0), Nc = me({}, fu, { data: 0 }), Sn = Ma(Nc), Jg = {
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
  }, Vm = {
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
  function X0(l) {
    var n = this.nativeEvent;
    return n.getModifierState ? n.getModifierState(l) : (l = su[l]) ? !!n[l] : !1;
  }
  function Fa() {
    return X0;
  }
  var ru = me({}, Qo, {
    key: function(l) {
      if (l.key) {
        var n = Jg[l.key] || l.key;
        if (n !== "Unidentified") return n;
      }
      return l.type === "keypress" ? (l = ms(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? Vm[l.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Fa,
    charCode: function(l) {
      return l.type === "keypress" ? ms(l) : 0;
    },
    keyCode: function(l) {
      return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    },
    which: function(l) {
      return l.type === "keypress" ? ms(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    }
  }), bd = Ma(ru), Ed = me({}, gd, {
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
  }), Td = Ma(Ed), du = me({}, Qo, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Fa
  }), Kg = Ma(du), Q0 = me({}, fu, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), L0 = Ma(Q0), $g = me({}, gd, {
    deltaX: function(l) {
      return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0;
    },
    deltaY: function(l) {
      return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Zm = Ma($g), kg = me({}, fu, {
    newState: 0,
    oldState: 0
  }), V0 = Ma(kg), Jm = [9, 13, 27, 32], Lo = nl && "CompositionEvent" in window, Li = null;
  nl && "documentMode" in document && (Li = document.documentMode);
  var Km = nl && "TextEvent" in window && !Li, Xl = nl && (!Lo || Li && 8 < Li && 11 >= Li), $m = " ", gs = !1;
  function Vi(l, n) {
    switch (l) {
      case "keyup":
        return Jm.indexOf(n.keyCode) !== -1;
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
  function Ad(l) {
    return l = l.detail, typeof l == "object" && "data" in l ? l.data : null;
  }
  var Bc = !1;
  function Z0(l, n) {
    switch (l) {
      case "compositionend":
        return Ad(n);
      case "keypress":
        return n.which !== 32 ? null : (gs = !0, $m);
      case "textInput":
        return l = n.data, l === $m && gs ? null : l;
      default:
        return null;
    }
  }
  function J0(l, n) {
    if (Bc)
      return l === "compositionend" || !Lo && Vi(l, n) ? (l = B0(), pd = yd = oi = null, Bc = !1, l) : null;
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
  var Wg = {
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
  function Od(l) {
    var n = l && l.nodeName && l.nodeName.toLowerCase();
    return n === "input" ? !!Wg[l.type] : n === "textarea";
  }
  function hu(l, n, u, c) {
    Cc ? ou ? ou.push(c) : ou = [c] : Cc = c, n = Ch(n, "onChange"), 0 < n.length && (u = new ys(
      "onChange",
      "change",
      null,
      u,
      c
    ), l.push({ event: u, listeners: n }));
  }
  var Vo = null, Yc = null;
  function zd(l) {
    dp(l, 0);
  }
  function mu(l) {
    var n = jo(l);
    if (Bm(n)) return l;
  }
  function _d(l, n) {
    if (l === "change") return n;
  }
  var km = !1;
  if (nl) {
    var Ss;
    if (nl) {
      var ha = "oninput" in document;
      if (!ha) {
        var yu = document.createElement("div");
        yu.setAttribute("oninput", "return;"), ha = typeof yu.oninput == "function";
      }
      Ss = ha;
    } else Ss = !1;
    km = Ss && (!document.documentMode || 9 < document.documentMode);
  }
  function Wm() {
    Vo && (Vo.detachEvent("onpropertychange", Dd), Yc = Vo = null);
  }
  function Dd(l) {
    if (l.propertyName === "value" && mu(Yc)) {
      var n = [];
      hu(
        n,
        Yc,
        l,
        md(l)
      ), hs(zd, n);
    }
  }
  function Fm(l, n, u) {
    l === "focusin" ? (Wm(), Vo = n, Yc = u, Vo.attachEvent("onpropertychange", Dd)) : l === "focusout" && Wm();
  }
  function K0(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return mu(Yc);
  }
  function $0(l, n) {
    if (l === "click") return mu(n);
  }
  function Zi(l, n) {
    if (l === "input" || l === "change")
      return mu(n);
  }
  function qc(l, n) {
    return l === n && (l !== 0 || 1 / l === 1 / n) || l !== l && n !== n;
  }
  var Ca = typeof Object.is == "function" ? Object.is : qc;
  function Ji(l, n) {
    if (Ca(l, n)) return !0;
    if (typeof l != "object" || l === null || typeof n != "object" || n === null)
      return !1;
    var u = Object.keys(l), c = Object.keys(n);
    if (u.length !== c.length) return !1;
    for (c = 0; c < u.length; c++) {
      var s = u[c];
      if (!qi.call(n, s) || !Ca(l[s], n[s]))
        return !1;
    }
    return !0;
  }
  function fi(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function Im(l, n) {
    var u = fi(l);
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
      u = fi(u);
    }
  }
  function Pm(l, n) {
    return l && n ? l === n ? !0 : l && l.nodeType === 3 ? !1 : n && n.nodeType === 3 ? Pm(l, n.parentNode) : "contains" in l ? l.contains(n) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(n) & 16) : !1 : !1;
  }
  function jc(l) {
    l = l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null ? l.ownerDocument.defaultView : window;
    for (var n = ss(l.document); n instanceof l.HTMLIFrameElement; ) {
      try {
        var u = typeof n.contentWindow.location.href == "string";
      } catch {
        u = !1;
      }
      if (u) l = n.contentWindow;
      else break;
      n = ss(l.document);
    }
    return n;
  }
  function si(l) {
    var n = l && l.nodeName && l.nodeName.toLowerCase();
    return n && (n === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || n === "textarea" || l.contentEditable === "true");
  }
  var ey = nl && "documentMode" in document && 11 >= document.documentMode, pu = null, bs = null, Ki = null, vu = !1;
  function gu(l, n, u) {
    var c = u.window === u ? u.document : u.nodeType === 9 ? u : u.ownerDocument;
    vu || pu == null || pu !== ss(c) || (c = pu, "selectionStart" in c && si(c) ? c = { start: c.selectionStart, end: c.selectionEnd } : (c = (c.ownerDocument && c.ownerDocument.defaultView || window).getSelection(), c = {
      anchorNode: c.anchorNode,
      anchorOffset: c.anchorOffset,
      focusNode: c.focusNode,
      focusOffset: c.focusOffset
    }), Ki && Ji(Ki, c) || (Ki = c, c = Ch(bs, "onSelect"), 0 < c.length && (n = new ys(
      "onSelect",
      "select",
      null,
      n,
      u
    ), l.push({ event: n, listeners: c }), n.target = pu)));
  }
  function ri(l, n) {
    var u = {};
    return u[l.toLowerCase()] = n.toLowerCase(), u["Webkit" + l] = "webkit" + n, u["Moz" + l] = "moz" + n, u;
  }
  var $i = {
    animationend: ri("Animation", "AnimationEnd"),
    animationiteration: ri("Animation", "AnimationIteration"),
    animationstart: ri("Animation", "AnimationStart"),
    transitionrun: ri("Transition", "TransitionRun"),
    transitionstart: ri("Transition", "TransitionStart"),
    transitioncancel: ri("Transition", "TransitionCancel"),
    transitionend: ri("Transition", "TransitionEnd")
  }, ki = {}, Es = {};
  nl && (Es = document.createElement("div").style, "AnimationEvent" in window || (delete $i.animationend.animation, delete $i.animationiteration.animation, delete $i.animationstart.animation), "TransitionEvent" in window || delete $i.transitionend.transition);
  function Ia(l) {
    if (ki[l]) return ki[l];
    if (!$i[l]) return l;
    var n = $i[l], u;
    for (u in n)
      if (n.hasOwnProperty(u) && u in Es)
        return ki[l] = n[u];
    return l;
  }
  var jt = Ia("animationend"), Ts = Ia("animationiteration"), ty = Ia("animationstart"), ly = Ia("transitionrun"), xc = Ia("transitionstart"), As = Ia("transitioncancel"), Gn = Ia("transitionend"), k0 = /* @__PURE__ */ new Map(), wn = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  wn.push("scrollEnd");
  function Ua(l, n) {
    k0.set(l, n), Wa(n, [l]);
  }
  var Wi = typeof reportError == "function" ? reportError : function(l) {
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
  function Pa() {
    for (var l = Ml, n = ya = Ml = 0; n < l; ) {
      var u = ma[n];
      ma[n++] = null;
      var c = ma[n];
      ma[n++] = null;
      var s = ma[n];
      ma[n++] = null;
      var r = ma[n];
      if (ma[n++] = null, c !== null && s !== null) {
        var m = c.pending;
        m === null ? s.next = s : (s.next = m.next, m.next = s), c.pending = s;
      }
      r !== 0 && Rd(u, s, r);
    }
  }
  function en(l, n, u, c) {
    ma[Ml++] = l, ma[Ml++] = n, ma[Ml++] = u, ma[Ml++] = c, ya |= c, l.lanes |= c, l = l.alternate, l !== null && (l.lanes |= c);
  }
  function bn(l, n, u, c) {
    return en(l, n, u, c), Zo(l);
  }
  function ta(l, n) {
    return en(l, null, null, n), Zo(l);
  }
  function Rd(l, n, u) {
    l.lanes |= u;
    var c = l.alternate;
    c !== null && (c.lanes |= u);
    for (var s = !1, r = l.return; r !== null; )
      r.childLanes |= u, c = r.alternate, c !== null && (c.childLanes |= u), r.tag === 22 && (l = r.stateNode, l === null || l._visibility & 1 || (s = !0)), l = r, r = r.return;
    return l.tag === 3 ? (r = l.stateNode, s && n !== null && (s = 31 - Rl(u), l = r.hiddenUpdates, c = l[s], c === null ? l[s] = [n] : c.push(n), n.lane = u | 536870912), r) : null;
  }
  function Zo(l) {
    if (50 < oo)
      throw oo = 0, vh = null, Error(j(185));
    for (var n = l.return; n !== null; )
      l = n, n = l.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var Gc = {};
  function Su(l, n, u, c) {
    this.tag = l, this.key = u, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = c, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ha(l, n, u, c) {
    return new Su(l, n, u, c);
  }
  function En(l) {
    return l = l.prototype, !(!l || !l.isReactComponent);
  }
  function tn(l, n) {
    var u = l.alternate;
    return u === null ? (u = Ha(
      l.tag,
      n,
      l.key,
      l.mode
    ), u.elementType = l.elementType, u.type = l.type, u.stateNode = l.stateNode, u.alternate = l, l.alternate = u) : (u.pendingProps = n, u.type = l.type, u.flags = 0, u.subtreeFlags = 0, u.deletions = null), u.flags = l.flags & 65011712, u.childLanes = l.childLanes, u.lanes = l.lanes, u.child = l.child, u.memoizedProps = l.memoizedProps, u.memoizedState = l.memoizedState, u.updateQueue = l.updateQueue, n = l.dependencies, u.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }, u.sibling = l.sibling, u.index = l.index, u.ref = l.ref, u.refCleanup = l.refCleanup, u;
  }
  function W0(l, n) {
    l.flags &= 65011714;
    var u = l.alternate;
    return u === null ? (l.childLanes = 0, l.lanes = n, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = u.childLanes, l.lanes = u.lanes, l.child = u.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = u.memoizedProps, l.memoizedState = u.memoizedState, l.updateQueue = u.updateQueue, l.type = u.type, n = u.dependencies, l.dependencies = n === null ? null : {
      lanes: n.lanes,
      firstContext: n.firstContext
    }), l;
  }
  function Os(l, n, u, c, s, r) {
    var m = 0;
    if (c = l, typeof l == "function") En(l) && (m = 1);
    else if (typeof l == "string")
      m = Rp(
        l,
        u,
        ee.current
      ) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
    else
      e: switch (l) {
        case et:
          return l = Ha(31, u, n, s), l.elementType = et, l.lanes = r, l;
        case we:
          return wc(u.children, s, r, n);
        case ll:
          m = 8, s |= 24;
          break;
        case Ie:
          return l = Ha(12, u, n, s | 2), l.elementType = Ie, l.lanes = r, l;
        case al:
          return l = Ha(13, u, n, s), l.elementType = al, l.lanes = r, l;
        case Yt:
          return l = Ha(19, u, n, s), l.elementType = Yt, l.lanes = r, l;
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case Bt:
                m = 10;
                break e;
              case dt:
                m = 9;
                break e;
              case Ft:
                m = 11;
                break e;
              case je:
                m = 14;
                break e;
              case zt:
                m = 16, c = null;
                break e;
            }
          m = 29, u = Error(
            j(130, l === null ? "null" : typeof l, "")
          ), c = null;
      }
    return n = Ha(m, u, n, s), n.elementType = l, n.type = c, n.lanes = r, n;
  }
  function wc(l, n, u, c) {
    return l = Ha(7, l, c, n), l.lanes = u, l;
  }
  function zs(l, n, u) {
    return l = Ha(6, l, null, n), l.lanes = u, l;
  }
  function _s(l) {
    var n = Ha(18, null, null, 0);
    return n.stateNode = l, n;
  }
  function Md(l, n, u) {
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
  var ay = /* @__PURE__ */ new WeakMap();
  function ln(l, n) {
    if (typeof l == "object" && l !== null) {
      var u = ay.get(l);
      return u !== void 0 ? u : (n = {
        value: l,
        source: n,
        stack: xl(n)
      }, ay.set(l, n), n);
    }
    return {
      value: l,
      source: n,
      stack: xl(n)
    };
  }
  var Xc = [], an = 0, Ds = null, Jo = 0, Ct = [], Na = 0, Xn = null, nn = 1, Ba = "";
  function bu(l, n) {
    Xc[an++] = Jo, Xc[an++] = Ds, Ds = l, Jo = n;
  }
  function Rs(l, n, u) {
    Ct[Na++] = nn, Ct[Na++] = Ba, Ct[Na++] = Xn, Xn = l;
    var c = nn;
    l = Ba;
    var s = 32 - Rl(c) - 1;
    c &= ~(1 << s), u += 1;
    var r = 32 - Rl(n) + s;
    if (30 < r) {
      var m = s - s % 5;
      r = (c & (1 << m) - 1).toString(32), c >>= m, s -= m, nn = 1 << 32 - Rl(n) + s | u << s | c, Ba = r + l;
    } else
      nn = 1 << r | u << s | c, Ba = l;
  }
  function Cd(l) {
    l.return !== null && (bu(l, 1), Rs(l, 1, 0));
  }
  function Ko(l) {
    for (; l === Ds; )
      Ds = Xc[--an], Xc[an] = null, Jo = Xc[--an], Xc[an] = null;
    for (; l === Xn; )
      Xn = Ct[--Na], Ct[Na] = null, Ba = Ct[--Na], Ct[Na] = null, nn = Ct[--Na], Ct[Na] = null;
  }
  function ny(l, n) {
    Ct[Na++] = nn, Ct[Na++] = Ba, Ct[Na++] = Xn, nn = n.id, Ba = n.overflow, Xn = l;
  }
  var gl = null, xt = null, nt = !1, Eu = null, Ya = !1, Tu = Error(j(519));
  function pa(l) {
    var n = Error(
      j(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Cs(ln(n, l)), Tu;
  }
  function $o(l) {
    var n = l.stateNode, u = l.type, c = l.memoizedProps;
    switch (n[vl] = l, n[Lt] = c, u) {
      case "dialog":
        lt("cancel", n), lt("close", n);
        break;
      case "iframe":
      case "object":
      case "embed":
        lt("load", n);
        break;
      case "video":
      case "audio":
        for (u = 0; u < ro.length; u++)
          lt(ro[u], n);
        break;
      case "source":
        lt("error", n);
        break;
      case "img":
      case "image":
      case "link":
        lt("error", n), lt("load", n);
        break;
      case "details":
        lt("toggle", n);
        break;
      case "input":
        lt("invalid", n), hd(
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
        lt("invalid", n);
        break;
      case "textarea":
        lt("invalid", n), Ym(n, c.value, c.defaultValue, c.children);
    }
    u = c.children, typeof u != "string" && typeof u != "number" && typeof u != "bigint" || n.textContent === "" + u || c.suppressHydrationWarning === !0 || pp(n.textContent, u) ? (c.popover != null && (lt("beforetoggle", n), lt("toggle", n)), c.onScroll != null && lt("scroll", n), c.onScrollEnd != null && lt("scrollend", n), c.onClick != null && (n.onclick = wl), n = !0) : n = !1, n || pa(l, !0);
  }
  function Ms(l) {
    for (gl = l.return; gl; )
      switch (gl.tag) {
        case 5:
        case 31:
        case 13:
          Ya = !1;
          return;
        case 27:
        case 3:
          Ya = !0;
          return;
        default:
          gl = gl.return;
      }
  }
  function Au(l) {
    if (l !== gl) return !1;
    if (!nt) return Ms(l), nt = !0, !1;
    var n = l.tag, u;
    if ((u = n !== 3 && n !== 27) && ((u = n === 5) && (u = l.type, u = !(u !== "form" && u !== "button") || Bh(l.type, l.memoizedProps)), u = !u), u && xt && pa(l), Ms(l), n === 13) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(j(317));
      xt = qh(l);
    } else if (n === 31) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(j(317));
      xt = qh(l);
    } else
      n === 27 ? (n = xt, Qu(l.type) ? (l = zf, zf = null, xt = l) : xt = n) : xt = gl ? $l(l.stateNode.nextSibling) : null;
    return !0;
  }
  function Qn() {
    xt = gl = null, nt = !1;
  }
  function Ud() {
    var l = Eu;
    return l !== null && (Qa === null ? Qa = l : Qa.push.apply(
      Qa,
      l
    ), Eu = null), l;
  }
  function Cs(l) {
    Eu === null ? Eu = [l] : Eu.push(l);
  }
  var Hd = O(null), Fi = null, Ln = null;
  function Ou(l, n, u) {
    K(Hd, n._currentValue), n._currentValue = u;
  }
  function la(l) {
    l._currentValue = Hd.current, A(Hd);
  }
  function Us(l, n, u) {
    for (; l !== null; ) {
      var c = l.alternate;
      if ((l.childLanes & n) !== n ? (l.childLanes |= n, c !== null && (c.childLanes |= n)) : c !== null && (c.childLanes & n) !== n && (c.childLanes |= n), l === u) break;
      l = l.return;
    }
  }
  function Nd(l, n, u, c) {
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
              r.lanes |= u, g = r.alternate, g !== null && (g.lanes |= u), Us(
                r.return,
                u,
                l
              ), c || (m = null);
              break e;
            }
          r = g.next;
        }
      } else if (s.tag === 18) {
        if (m = s.return, m === null) throw Error(j(341));
        m.lanes |= u, r = m.alternate, r !== null && (r.lanes |= u), Us(m, u, l), m = null;
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
  function un(l, n, u, c) {
    l = null;
    for (var s = n, r = !1; s !== null; ) {
      if (!r) {
        if ((s.flags & 524288) !== 0) r = !0;
        else if ((s.flags & 262144) !== 0) break;
      }
      if (s.tag === 10) {
        var m = s.alternate;
        if (m === null) throw Error(j(387));
        if (m = m.memoizedProps, m !== null) {
          var g = s.type;
          Ca(s.pendingProps.value, m.value) || (l !== null ? l.push(g) : l = [g]);
        }
      } else if (s === tt.current) {
        if (m = s.alternate, m === null) throw Error(j(387));
        m.memoizedState.memoizedState !== s.memoizedState.memoizedState && (l !== null ? l.push(sl) : l = [sl]);
      }
      s = s.return;
    }
    l !== null && Nd(
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
  function zu(l) {
    Fi = l, Ln = null, l = l.dependencies, l !== null && (l.firstContext = null);
  }
  function be(l) {
    return Qc(Fi, l);
  }
  function F(l, n) {
    return Fi === null && zu(l), Qc(l, n);
  }
  function Qc(l, n) {
    var u = n._currentValue;
    if (n = { context: n, memoizedValue: u, next: null }, Ln === null) {
      if (l === null) throw Error(j(308));
      Ln = n, l.dependencies = { lanes: 0, firstContext: n }, l.flags |= 524288;
    } else Ln = Ln.next = n;
    return u;
  }
  var Bd = typeof AbortController < "u" ? AbortController : function() {
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
  }, ul = W.unstable_scheduleCallback, uy = W.unstable_NormalPriority, il = {
    $$typeof: Bt,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Yd() {
    return {
      controller: new Bd(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Lc(l) {
    l.refCount--, l.refCount === 0 && ul(uy, function() {
      l.controller.abort();
    });
  }
  var Hs = null, Ns = 0, Ii = 0, Pi = null;
  function va(l, n) {
    if (Hs === null) {
      var u = Hs = [];
      Ns = 0, Ii = fo(), Pi = {
        status: "pending",
        value: void 0,
        then: function(c) {
          u.push(c);
        }
      };
    }
    return Ns++, n.then(bt, bt), n;
  }
  function bt() {
    if (--Ns === 0 && Hs !== null) {
      Pi !== null && (Pi.status = "fulfilled");
      var l = Hs;
      Hs = null, Ii = 0, Pi = null;
      for (var n = 0; n < l.length; n++) (0, l[n])();
    }
  }
  function qd(l, n) {
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
  var ko = X.S;
  X.S = function(l, n) {
    Ai = El(), typeof n == "object" && n !== null && typeof n.then == "function" && va(l, n), ko !== null && ko(l, n);
  };
  var qa = O(null);
  function di() {
    var l = qa.current;
    return l !== null ? l : Ut.pooledCache;
  }
  function ja(l, n) {
    n === null ? K(qa, qa.current) : K(qa, n.pool);
  }
  function jd() {
    var l = di();
    return l === null ? null : { parent: il._currentValue, pool: l };
  }
  var Vn = Error(j(460)), Bs = Error(j(474)), ec = Error(j(542)), Wo = { then: function() {
  } };
  function Ys(l) {
    return l = l.status, l === "fulfilled" || l === "rejected";
  }
  function iy(l, n, u) {
    switch (u = l[u], u === void 0 ? l.push(n) : u !== n && (n.then(wl, wl), n = u), n.status) {
      case "fulfilled":
        return n.value;
      case "rejected":
        throw l = n.reason, oy(l), l;
      default:
        if (typeof n.status == "string") n.then(wl, wl);
        else {
          if (l = Ut, l !== null && 100 < l.shellSuspendCounter)
            throw Error(j(482));
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
            throw l = n.reason, oy(l), l;
        }
        throw lc = n, Vn;
    }
  }
  function tc(l) {
    try {
      var n = l._init;
      return n(l._payload);
    } catch (u) {
      throw u !== null && typeof u == "object" && typeof u.then == "function" ? (lc = u, Vn) : u;
    }
  }
  var lc = null;
  function cy() {
    if (lc === null) throw Error(j(459));
    var l = lc;
    return lc = null, l;
  }
  function oy(l) {
    if (l === Vn || l === ec)
      throw Error(j(483));
  }
  var ac = null, Vc = 0;
  function Fo(l) {
    var n = Vc;
    return Vc += 1, ac === null && (ac = []), iy(ac, l, n);
  }
  function Io(l, n) {
    n = n.props.ref, l.ref = n !== void 0 ? n : null;
  }
  function qs(l, n) {
    throw n.$$typeof === k ? Error(j(525)) : (l = Object.prototype.toString.call(n), Error(
      j(
        31,
        l === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : l
      )
    ));
  }
  function fy(l) {
    function n(C, D) {
      if (l) {
        var U = C.deletions;
        U === null ? (C.deletions = [D], C.flags |= 16) : U.push(D);
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
      return C = tn(C, D), C.index = 0, C.sibling = null, C;
    }
    function r(C, D, U) {
      return C.index = U, l ? (U = C.alternate, U !== null ? (U = U.index, U < D ? (C.flags |= 67108866, D) : U) : (C.flags |= 67108866, D)) : (C.flags |= 1048576, D);
    }
    function m(C) {
      return l && C.alternate === null && (C.flags |= 67108866), C;
    }
    function g(C, D, U, J) {
      return D === null || D.tag !== 6 ? (D = zs(U, C.mode, J), D.return = C, D) : (D = s(D, U), D.return = C, D);
    }
    function T(C, D, U, J) {
      var Se = U.type;
      return Se === we ? V(
        C,
        D,
        U.props.children,
        J,
        U.key
      ) : D !== null && (D.elementType === Se || typeof Se == "object" && Se !== null && Se.$$typeof === zt && tc(Se) === D.type) ? (D = s(D, U.props), Io(D, U), D.return = C, D) : (D = Os(
        U.type,
        U.key,
        U.props,
        null,
        C.mode,
        J
      ), Io(D, U), D.return = C, D);
    }
    function H(C, D, U, J) {
      return D === null || D.tag !== 4 || D.stateNode.containerInfo !== U.containerInfo || D.stateNode.implementation !== U.implementation ? (D = Md(U, C.mode, J), D.return = C, D) : (D = s(D, U.children || []), D.return = C, D);
    }
    function V(C, D, U, J, Se) {
      return D === null || D.tag !== 7 ? (D = wc(
        U,
        C.mode,
        J,
        Se
      ), D.return = C, D) : (D = s(D, U), D.return = C, D);
    }
    function $(C, D, U) {
      if (typeof D == "string" && D !== "" || typeof D == "number" || typeof D == "bigint")
        return D = zs(
          "" + D,
          C.mode,
          U
        ), D.return = C, D;
      if (typeof D == "object" && D !== null) {
        switch (D.$$typeof) {
          case N:
            return U = Os(
              D.type,
              D.key,
              D.props,
              null,
              C.mode,
              U
            ), Io(U, D), U.return = C, U;
          case ce:
            return D = Md(
              D,
              C.mode,
              U
            ), D.return = C, D;
          case zt:
            return D = tc(D), $(C, D, U);
        }
        if (qt(D) || gt(D))
          return D = wc(
            D,
            C.mode,
            U,
            null
          ), D.return = C, D;
        if (typeof D.then == "function")
          return $(C, Fo(D), U);
        if (D.$$typeof === Bt)
          return $(
            C,
            F(C, D),
            U
          );
        qs(C, D);
      }
      return null;
    }
    function B(C, D, U, J) {
      var Se = D !== null ? D.key : null;
      if (typeof U == "string" && U !== "" || typeof U == "number" || typeof U == "bigint")
        return Se !== null ? null : g(C, D, "" + U, J);
      if (typeof U == "object" && U !== null) {
        switch (U.$$typeof) {
          case N:
            return U.key === Se ? T(C, D, U, J) : null;
          case ce:
            return U.key === Se ? H(C, D, U, J) : null;
          case zt:
            return U = tc(U), B(C, D, U, J);
        }
        if (qt(U) || gt(U))
          return Se !== null ? null : V(C, D, U, J, null);
        if (typeof U.then == "function")
          return B(
            C,
            D,
            Fo(U),
            J
          );
        if (U.$$typeof === Bt)
          return B(
            C,
            D,
            F(C, U),
            J
          );
        qs(C, U);
      }
      return null;
    }
    function G(C, D, U, J, Se) {
      if (typeof J == "string" && J !== "" || typeof J == "number" || typeof J == "bigint")
        return C = C.get(U) || null, g(D, C, "" + J, Se);
      if (typeof J == "object" && J !== null) {
        switch (J.$$typeof) {
          case N:
            return C = C.get(
              J.key === null ? U : J.key
            ) || null, T(D, C, J, Se);
          case ce:
            return C = C.get(
              J.key === null ? U : J.key
            ) || null, H(D, C, J, Se);
          case zt:
            return J = tc(J), G(
              C,
              D,
              U,
              J,
              Se
            );
        }
        if (qt(J) || gt(J))
          return C = C.get(U) || null, V(D, C, J, Se, null);
        if (typeof J.then == "function")
          return G(
            C,
            D,
            U,
            Fo(J),
            Se
          );
        if (J.$$typeof === Bt)
          return G(
            C,
            D,
            U,
            F(D, J),
            Se
          );
        qs(D, J);
      }
      return null;
    }
    function de(C, D, U, J) {
      for (var Se = null, mt = null, pe = D, Xe = D = 0, We = null; pe !== null && Xe < U.length; Xe++) {
        pe.index > Xe ? (We = pe, pe = null) : We = pe.sibling;
        var at = B(
          C,
          pe,
          U[Xe],
          J
        );
        if (at === null) {
          pe === null && (pe = We);
          break;
        }
        l && pe && at.alternate === null && n(C, pe), D = r(at, D, Xe), mt === null ? Se = at : mt.sibling = at, mt = at, pe = We;
      }
      if (Xe === U.length)
        return u(C, pe), nt && bu(C, Xe), Se;
      if (pe === null) {
        for (; Xe < U.length; Xe++)
          pe = $(C, U[Xe], J), pe !== null && (D = r(
            pe,
            D,
            Xe
          ), mt === null ? Se = pe : mt.sibling = pe, mt = pe);
        return nt && bu(C, Xe), Se;
      }
      for (pe = c(pe); Xe < U.length; Xe++)
        We = G(
          pe,
          C,
          Xe,
          U[Xe],
          J
        ), We !== null && (l && We.alternate !== null && pe.delete(
          We.key === null ? Xe : We.key
        ), D = r(
          We,
          D,
          Xe
        ), mt === null ? Se = We : mt.sibling = We, mt = We);
      return l && pe.forEach(function(yc) {
        return n(C, yc);
      }), nt && bu(C, Xe), Se;
    }
    function ze(C, D, U, J) {
      if (U == null) throw Error(j(151));
      for (var Se = null, mt = null, pe = D, Xe = D = 0, We = null, at = U.next(); pe !== null && !at.done; Xe++, at = U.next()) {
        pe.index > Xe ? (We = pe, pe = null) : We = pe.sibling;
        var yc = B(C, pe, at.value, J);
        if (yc === null) {
          pe === null && (pe = We);
          break;
        }
        l && pe && yc.alternate === null && n(C, pe), D = r(yc, D, Xe), mt === null ? Se = yc : mt.sibling = yc, mt = yc, pe = We;
      }
      if (at.done)
        return u(C, pe), nt && bu(C, Xe), Se;
      if (pe === null) {
        for (; !at.done; Xe++, at = U.next())
          at = $(C, at.value, J), at !== null && (D = r(at, D, Xe), mt === null ? Se = at : mt.sibling = at, mt = at);
        return nt && bu(C, Xe), Se;
      }
      for (pe = c(pe); !at.done; Xe++, at = U.next())
        at = G(pe, C, Xe, at.value, J), at !== null && (l && at.alternate !== null && pe.delete(at.key === null ? Xe : at.key), D = r(at, D, Xe), mt === null ? Se = at : mt.sibling = at, mt = at);
      return l && pe.forEach(function(Fh) {
        return n(C, Fh);
      }), nt && bu(C, Xe), Se;
    }
    function Ht(C, D, U, J) {
      if (typeof U == "object" && U !== null && U.type === we && U.key === null && (U = U.props.children), typeof U == "object" && U !== null) {
        switch (U.$$typeof) {
          case N:
            e: {
              for (var Se = U.key; D !== null; ) {
                if (D.key === Se) {
                  if (Se = U.type, Se === we) {
                    if (D.tag === 7) {
                      u(
                        C,
                        D.sibling
                      ), J = s(
                        D,
                        U.props.children
                      ), J.return = C, C = J;
                      break e;
                    }
                  } else if (D.elementType === Se || typeof Se == "object" && Se !== null && Se.$$typeof === zt && tc(Se) === D.type) {
                    u(
                      C,
                      D.sibling
                    ), J = s(D, U.props), Io(J, U), J.return = C, C = J;
                    break e;
                  }
                  u(C, D);
                  break;
                } else n(C, D);
                D = D.sibling;
              }
              U.type === we ? (J = wc(
                U.props.children,
                C.mode,
                J,
                U.key
              ), J.return = C, C = J) : (J = Os(
                U.type,
                U.key,
                U.props,
                null,
                C.mode,
                J
              ), Io(J, U), J.return = C, C = J);
            }
            return m(C);
          case ce:
            e: {
              for (Se = U.key; D !== null; ) {
                if (D.key === Se)
                  if (D.tag === 4 && D.stateNode.containerInfo === U.containerInfo && D.stateNode.implementation === U.implementation) {
                    u(
                      C,
                      D.sibling
                    ), J = s(D, U.children || []), J.return = C, C = J;
                    break e;
                  } else {
                    u(C, D);
                    break;
                  }
                else n(C, D);
                D = D.sibling;
              }
              J = Md(U, C.mode, J), J.return = C, C = J;
            }
            return m(C);
          case zt:
            return U = tc(U), Ht(
              C,
              D,
              U,
              J
            );
        }
        if (qt(U))
          return de(
            C,
            D,
            U,
            J
          );
        if (gt(U)) {
          if (Se = gt(U), typeof Se != "function") throw Error(j(150));
          return U = Se.call(U), ze(
            C,
            D,
            U,
            J
          );
        }
        if (typeof U.then == "function")
          return Ht(
            C,
            D,
            Fo(U),
            J
          );
        if (U.$$typeof === Bt)
          return Ht(
            C,
            D,
            F(C, U),
            J
          );
        qs(C, U);
      }
      return typeof U == "string" && U !== "" || typeof U == "number" || typeof U == "bigint" ? (U = "" + U, D !== null && D.tag === 6 ? (u(C, D.sibling), J = s(D, U), J.return = C, C = J) : (u(C, D), J = zs(U, C.mode, J), J.return = C, C = J), m(C)) : u(C, D);
    }
    return function(C, D, U, J) {
      try {
        Vc = 0;
        var Se = Ht(
          C,
          D,
          U,
          J
        );
        return ac = null, Se;
      } catch (pe) {
        if (pe === Vn || pe === ec) throw pe;
        var mt = Ha(29, pe, null, C.mode);
        return mt.lanes = J, mt.return = C, mt;
      }
    };
  }
  var Zc = fy(!0), sy = fy(!1), hi = !1;
  function xd(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function js(l, n) {
    l = l.updateQueue, n.updateQueue === l && (n.updateQueue = {
      baseState: l.baseState,
      firstBaseUpdate: l.firstBaseUpdate,
      lastBaseUpdate: l.lastBaseUpdate,
      shared: l.shared,
      callbacks: null
    });
  }
  function mi(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function yi(l, n, u) {
    var c = l.updateQueue;
    if (c === null) return null;
    if (c = c.shared, (ht & 2) !== 0) {
      var s = c.pending;
      return s === null ? n.next = n : (n.next = s.next, s.next = n), c.pending = n, n = Zo(l), Rd(l, null, u), n;
    }
    return en(l, c, n, u), Zo(l);
  }
  function _u(l, n, u) {
    if (n = n.updateQueue, n !== null && (n = n.shared, (u & 4194048) !== 0)) {
      var c = n.lanes;
      c &= l.pendingLanes, u |= c, n.lanes = u, ns(l, u);
    }
  }
  function Po(l, n) {
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
  var Gd = !1;
  function xs() {
    if (Gd) {
      var l = Pi;
      if (l !== null) throw l;
    }
  }
  function nc(l, n, u, c) {
    Gd = !1;
    var s = l.updateQueue;
    hi = !1;
    var r = s.firstBaseUpdate, m = s.lastBaseUpdate, g = s.shared.pending;
    if (g !== null) {
      s.shared.pending = null;
      var T = g, H = T.next;
      T.next = null, m === null ? r = H : m.next = H, m = T;
      var V = l.alternate;
      V !== null && (V = V.updateQueue, g = V.lastBaseUpdate, g !== m && (g === null ? V.firstBaseUpdate = H : g.next = H, V.lastBaseUpdate = T));
    }
    if (r !== null) {
      var $ = s.baseState;
      m = 0, V = H = T = null, g = r;
      do {
        var B = g.lane & -536870913, G = B !== g.lane;
        if (G ? (ut & B) === B : (c & B) === B) {
          B !== 0 && B === Ii && (Gd = !0), V !== null && (V = V.next = {
            lane: 0,
            tag: g.tag,
            payload: g.payload,
            callback: null,
            next: null
          });
          e: {
            var de = l, ze = g;
            B = n;
            var Ht = u;
            switch (ze.tag) {
              case 1:
                if (de = ze.payload, typeof de == "function") {
                  $ = de.call(Ht, $, B);
                  break e;
                }
                $ = de;
                break e;
              case 3:
                de.flags = de.flags & -65537 | 128;
              case 0:
                if (de = ze.payload, B = typeof de == "function" ? de.call(Ht, $, B) : de, B == null) break e;
                $ = me({}, $, B);
                break e;
              case 2:
                hi = !0;
            }
          }
          B = g.callback, B !== null && (l.flags |= 64, G && (l.flags |= 8192), G = s.callbacks, G === null ? s.callbacks = [B] : G.push(B));
        } else
          G = {
            lane: B,
            tag: g.tag,
            payload: g.payload,
            callback: g.callback,
            next: null
          }, V === null ? (H = V = G, T = $) : V = V.next = G, m |= B;
        if (g = g.next, g === null) {
          if (g = s.shared.pending, g === null)
            break;
          G = g, g = G.next, G.next = null, s.lastBaseUpdate = G, s.shared.pending = null;
        }
      } while (!0);
      V === null && (T = $), s.baseState = T, s.firstBaseUpdate = H, s.lastBaseUpdate = V, r === null && (s.shared.lanes = 0), Rn |= m, l.lanes = m, l.memoizedState = $;
    }
  }
  function Jc(l, n) {
    if (typeof l != "function")
      throw Error(j(191, l));
    l.call(n);
  }
  function wd(l, n) {
    var u = l.callbacks;
    if (u !== null)
      for (l.callbacks = null, l = 0; l < u.length; l++)
        Jc(u[l], n);
  }
  var Tn = O(null), Ql = O(0);
  function Gs(l, n) {
    l = Gu, K(Ql, l), K(Tn, n), Gu = l | n.baseLanes;
  }
  function ry() {
    K(Ql, Gu), K(Tn, Tn.current);
  }
  function ws() {
    Gu = Ql.current, A(Tn), A(Ql);
  }
  var na = O(null), xa = null;
  function pi(l) {
    var n = l.alternate;
    K(It, It.current & 1), K(na, l), xa === null && (n === null || Tn.current !== null || n.memoizedState !== null) && (xa = l);
  }
  function Xs(l) {
    K(It, It.current), K(na, l), xa === null && (xa = l);
  }
  function Qs(l) {
    l.tag === 22 ? (K(It, It.current), K(na, l), xa === null && (xa = l)) : Du();
  }
  function Du() {
    K(It, It.current), K(na, na.current);
  }
  function ua(l) {
    A(na), xa === l && (xa = null), A(It);
  }
  var It = O(0);
  function Kc(l) {
    for (var n = l; n !== null; ) {
      if (n.tag === 13) {
        var u = n.memoizedState;
        if (u !== null && (u = u.dehydrated, u === null || Tp(u) || Cn(u)))
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
  var Zn = 0, xe = null, _t = null, cl = null, Ls = !1, vi = !1, uc = !1, ef = 0, tf = 0, $c = null, dy = 0;
  function Pt() {
    throw Error(j(321));
  }
  function Xd(l, n) {
    if (n === null) return !1;
    for (var u = 0; u < n.length && u < l.length; u++)
      if (!Ca(l[u], n[u])) return !1;
    return !0;
  }
  function gi(l, n, u, c, s, r) {
    return Zn = r, xe = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, X.H = l === null || l.memoizedState === null ? av : Ry, uc = !1, r = u(c, s), uc = !1, vi && (r = Ld(
      n,
      u,
      c,
      s
    )), Qd(l), r;
  }
  function Qd(l) {
    X.H = of;
    var n = _t !== null && _t.next !== null;
    if (Zn = 0, cl = _t = xe = null, Ls = !1, tf = 0, $c = null, n) throw Error(j(300));
    l === null || hl || (l = l.dependencies, l !== null && aa(l) && (hl = !0));
  }
  function Ld(l, n, u, c) {
    xe = l;
    var s = 0;
    do {
      if (vi && ($c = null), tf = 0, vi = !1, 25 <= s) throw Error(j(301));
      if (s += 1, cl = _t = null, l.updateQueue != null) {
        var r = l.updateQueue;
        r.lastEffect = null, r.events = null, r.stores = null, r.memoCache != null && (r.memoCache.index = 0);
      }
      X.H = My, r = n(u, c);
    } while (vi);
    return r;
  }
  function Fg() {
    var l = X.H, n = l.useState()[0];
    return n = typeof n.then == "function" ? lf(n) : n, l = l.useState()[0], (_t !== null ? _t.memoizedState : null) !== l && (xe.flags |= 1024), n;
  }
  function hy() {
    var l = ef !== 0;
    return ef = 0, l;
  }
  function Vd(l, n, u) {
    n.updateQueue = l.updateQueue, n.flags &= -2053, l.lanes &= ~u;
  }
  function kc(l) {
    if (Ls) {
      for (l = l.memoizedState; l !== null; ) {
        var n = l.queue;
        n !== null && (n.pending = null), l = l.next;
      }
      Ls = !1;
    }
    Zn = 0, cl = _t = xe = null, vi = !1, tf = ef = 0, $c = null;
  }
  function Ll() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return cl === null ? xe.memoizedState = cl = l : cl = cl.next = l, cl;
  }
  function Jt() {
    if (_t === null) {
      var l = xe.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = _t.next;
    var n = cl === null ? xe.memoizedState : cl.next;
    if (n !== null)
      cl = n, _t = l;
    else {
      if (l === null)
        throw xe.alternate === null ? Error(j(467)) : Error(j(310));
      _t = l, l = {
        memoizedState: _t.memoizedState,
        baseState: _t.baseState,
        baseQueue: _t.baseQueue,
        queue: _t.queue,
        next: null
      }, cl === null ? xe.memoizedState = cl = l : cl = cl.next = l;
    }
    return cl;
  }
  function Vs() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function lf(l) {
    var n = tf;
    return tf += 1, $c === null && ($c = []), l = iy($c, l, n), n = xe, (cl === null ? n.memoizedState : cl.next) === null && (n = n.alternate, X.H = n === null || n.memoizedState === null ? av : Ry), l;
  }
  function af(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return lf(l);
      if (l.$$typeof === Bt) return be(l);
    }
    throw Error(j(438, String(l)));
  }
  function Zs(l) {
    var n = null, u = xe.updateQueue;
    if (u !== null && (n = u.memoCache), n == null) {
      var c = xe.alternate;
      c !== null && (c = c.updateQueue, c !== null && (c = c.memoCache, c != null && (n = {
        data: c.data.map(function(s) {
          return s.slice();
        }),
        index: 0
      })));
    }
    if (n == null && (n = { data: [], index: 0 }), u === null && (u = Vs(), xe.updateQueue = u), u.memoCache = n, u = n.data[n.index], u === void 0)
      for (u = n.data[n.index] = Array(l), c = 0; c < l; c++)
        u[c] = Qt;
    return n.index++, u;
  }
  function Ru(l, n) {
    return typeof n == "function" ? n(l) : n;
  }
  function Js(l) {
    var n = Jt();
    return Si(n, _t, l);
  }
  function Si(l, n, u) {
    var c = l.queue;
    if (c === null) throw Error(j(311));
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
      var g = m = null, T = null, H = n, V = !1;
      do {
        var $ = H.lane & -536870913;
        if ($ !== H.lane ? (ut & $) === $ : (Zn & $) === $) {
          var B = H.revertLane;
          if (B === 0)
            T !== null && (T = T.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: H.action,
              hasEagerState: H.hasEagerState,
              eagerState: H.eagerState,
              next: null
            }), $ === Ii && (V = !0);
          else if ((Zn & B) === B) {
            H = H.next, B === Ii && (V = !0);
            continue;
          } else
            $ = {
              lane: 0,
              revertLane: H.revertLane,
              gesture: null,
              action: H.action,
              hasEagerState: H.hasEagerState,
              eagerState: H.eagerState,
              next: null
            }, T === null ? (g = T = $, m = r) : T = T.next = $, xe.lanes |= B, Rn |= B;
          $ = H.action, uc && u(r, $), r = H.hasEagerState ? H.eagerState : u(r, $);
        } else
          B = {
            lane: $,
            revertLane: H.revertLane,
            gesture: H.gesture,
            action: H.action,
            hasEagerState: H.hasEagerState,
            eagerState: H.eagerState,
            next: null
          }, T === null ? (g = T = B, m = r) : T = T.next = B, xe.lanes |= $, Rn |= $;
        H = H.next;
      } while (H !== null && H !== n);
      if (T === null ? m = r : T.next = g, !Ca(r, l.memoizedState) && (hl = !0, V && (u = Pi, u !== null)))
        throw u;
      l.memoizedState = r, l.baseState = m, l.baseQueue = T, c.lastRenderedState = r;
    }
    return s === null && (c.lanes = 0), [l.memoizedState, c.dispatch];
  }
  function Zd(l) {
    var n = Jt(), u = n.queue;
    if (u === null) throw Error(j(311));
    u.lastRenderedReducer = l;
    var c = u.dispatch, s = u.pending, r = n.memoizedState;
    if (s !== null) {
      u.pending = null;
      var m = s = s.next;
      do
        r = l(r, m.action), m = m.next;
      while (m !== s);
      Ca(r, n.memoizedState) || (hl = !0), n.memoizedState = r, n.baseQueue === null && (n.baseState = r), u.lastRenderedState = r;
    }
    return [r, c];
  }
  function my(l, n, u) {
    var c = xe, s = Jt(), r = nt;
    if (r) {
      if (u === void 0) throw Error(j(407));
      u = u();
    } else u = n();
    var m = !Ca(
      (_t || s).memoizedState,
      u
    );
    if (m && (s.memoizedState = u, hl = !0), s = s.queue, Fs(py.bind(null, c, s, l), [
      l
    ]), s.getSnapshot !== n || m || cl !== null && cl.memoizedState.tag & 1) {
      if (c.flags |= 2048, Wc(
        9,
        { destroy: void 0 },
        Ks.bind(
          null,
          c,
          s,
          u,
          n
        ),
        null
      ), Ut === null) throw Error(j(349));
      r || (Zn & 127) !== 0 || yy(c, n, u);
    }
    return u;
  }
  function yy(l, n, u) {
    l.flags |= 16384, l = { getSnapshot: n, value: u }, n = xe.updateQueue, n === null ? (n = Vs(), xe.updateQueue = n, n.stores = [l]) : (u = n.stores, u === null ? n.stores = [l] : u.push(l));
  }
  function Ks(l, n, u, c) {
    n.value = u, n.getSnapshot = c, Jd(n) && Kd(l);
  }
  function py(l, n, u) {
    return u(function() {
      Jd(n) && Kd(l);
    });
  }
  function Jd(l) {
    var n = l.getSnapshot;
    l = l.value;
    try {
      var u = n();
      return !Ca(l, u);
    } catch {
      return !0;
    }
  }
  function Kd(l) {
    var n = ta(l, 2);
    n !== null && Va(n, l, 2);
  }
  function $s(l) {
    var n = Ll();
    if (typeof l == "function") {
      var u = l;
      if (l = u(), uc) {
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
      lastRenderedReducer: Ru,
      lastRenderedState: l
    }, n;
  }
  function F0(l, n, u, c) {
    return l.baseState = u, Si(
      l,
      _t,
      typeof c == "function" ? c : Ru
    );
  }
  function Vl(l, n, u, c, s) {
    if (bi(l)) throw Error(j(485));
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
      X.T !== null ? u(!0) : r.isTransition = !1, c(r), u = n.pending, u === null ? (r.next = n.pending = r, vy(n, r)) : (r.next = u.next, n.pending = u.next = r);
    }
  }
  function vy(l, n) {
    var u = n.action, c = n.payload, s = l.state;
    if (n.isTransition) {
      var r = X.T, m = {};
      X.T = m;
      try {
        var g = u(s, c), T = X.S;
        T !== null && T(m, g), gy(l, n, g);
      } catch (H) {
        $d(l, n, H);
      } finally {
        r !== null && m.types !== null && (r.types = m.types), X.T = r;
      }
    } else
      try {
        r = u(s, c), gy(l, n, r);
      } catch (H) {
        $d(l, n, H);
      }
  }
  function gy(l, n, u) {
    u !== null && typeof u == "object" && typeof u.then == "function" ? u.then(
      function(c) {
        Sy(l, n, c);
      },
      function(c) {
        return $d(l, n, c);
      }
    ) : Sy(l, n, u);
  }
  function Sy(l, n, u) {
    n.status = "fulfilled", n.value = u, nf(n), l.state = u, n = l.pending, n !== null && (u = n.next, u === n ? l.pending = null : (u = u.next, n.next = u, vy(l, u)));
  }
  function $d(l, n, u) {
    var c = l.pending;
    if (l.pending = null, c !== null) {
      c = c.next;
      do
        n.status = "rejected", n.reason = u, nf(n), n = n.next;
      while (n !== c);
    }
    l.action = null;
  }
  function nf(l) {
    l = l.listeners;
    for (var n = 0; n < l.length; n++) (0, l[n])();
  }
  function by(l, n) {
    return n;
  }
  function ks(l, n) {
    if (nt) {
      var u = Ut.formState;
      if (u !== null) {
        e: {
          var c = xe;
          if (nt) {
            if (xt) {
              t: {
                for (var s = xt, r = Ya; s.nodeType !== 8; ) {
                  if (!r) {
                    s = null;
                    break t;
                  }
                  if (s = $l(
                    s.nextSibling
                  ), s === null) {
                    s = null;
                    break t;
                  }
                }
                r = s.data, s = r === "F!" || r === "F" ? s : null;
              }
              if (s) {
                xt = $l(
                  s.nextSibling
                ), c = s.data === "F!";
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
      lastRenderedReducer: by,
      lastRenderedState: n
    }, u.queue = c, u = _y.bind(
      null,
      xe,
      c
    ), c.dispatch = u, c = $s(!1), r = Ic.bind(
      null,
      xe,
      !1,
      c.queue
    ), c = Ll(), s = {
      state: n,
      dispatch: null,
      action: l,
      pending: null
    }, c.queue = s, u = Vl.bind(
      null,
      xe,
      s,
      r,
      u
    ), s.dispatch = u, c.memoizedState = l, [n, u, !1];
  }
  function Ey(l) {
    var n = Jt();
    return I0(n, _t, l);
  }
  function I0(l, n, u) {
    if (n = Si(
      l,
      n,
      by
    )[0], l = Js(Ru)[0], typeof n == "object" && n !== null && typeof n.then == "function")
      try {
        var c = lf(n);
      } catch (m) {
        throw m === Vn ? ec : m;
      }
    else c = n;
    n = Jt();
    var s = n.queue, r = s.dispatch;
    return u !== n.memoizedState && (xe.flags |= 2048, Wc(
      9,
      { destroy: void 0 },
      kd.bind(null, s, u),
      null
    )), [c, r, l];
  }
  function kd(l, n) {
    l.action = n;
  }
  function Wd(l) {
    var n = Jt(), u = _t;
    if (u !== null)
      return I0(n, u, l);
    Jt(), n = n.memoizedState, u = Jt();
    var c = u.queue.dispatch;
    return u.memoizedState = l, [n, c, !1];
  }
  function Wc(l, n, u, c) {
    return l = { tag: l, create: u, deps: c, inst: n, next: null }, n = xe.updateQueue, n === null && (n = Vs(), xe.updateQueue = n), u = n.lastEffect, u === null ? n.lastEffect = l.next = l : (c = u.next, u.next = l, l.next = c, n.lastEffect = l), l;
  }
  function Ty() {
    return Jt().memoizedState;
  }
  function Ws(l, n, u, c) {
    var s = Ll();
    xe.flags |= l, s.memoizedState = Wc(
      1 | n,
      { destroy: void 0 },
      u,
      c === void 0 ? null : c
    );
  }
  function uf(l, n, u, c) {
    var s = Jt();
    c = c === void 0 ? null : c;
    var r = s.memoizedState.inst;
    _t !== null && c !== null && Xd(c, _t.memoizedState.deps) ? s.memoizedState = Wc(n, r, u, c) : (xe.flags |= l, s.memoizedState = Wc(
      1 | n,
      r,
      u,
      c
    ));
  }
  function Fd(l, n) {
    Ws(8390656, 8, l, n);
  }
  function Fs(l, n) {
    uf(2048, 8, l, n);
  }
  function P0(l) {
    xe.flags |= 4;
    var n = xe.updateQueue;
    if (n === null)
      n = Vs(), xe.updateQueue = n, n.events = [l];
    else {
      var u = n.events;
      u === null ? n.events = [l] : u.push(l);
    }
  }
  function Id(l) {
    var n = Jt().memoizedState;
    return P0({ ref: n, nextImpl: l }), function() {
      if ((ht & 2) !== 0) throw Error(j(440));
      return n.impl.apply(void 0, arguments);
    };
  }
  function Is(l, n) {
    return uf(4, 2, l, n);
  }
  function Pd(l, n) {
    return uf(4, 4, l, n);
  }
  function Ay(l, n) {
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
  function eh(l, n, u) {
    u = u != null ? u.concat([l]) : null, uf(4, 4, Ay.bind(null, n, l), u);
  }
  function th() {
  }
  function Mu(l, n) {
    var u = Jt();
    n = n === void 0 ? null : n;
    var c = u.memoizedState;
    return n !== null && Xd(n, c[1]) ? c[0] : (u.memoizedState = [l, n], l);
  }
  function lh(l, n) {
    var u = Jt();
    n = n === void 0 ? null : n;
    var c = u.memoizedState;
    if (n !== null && Xd(n, c[1]))
      return c[0];
    if (c = l(), uc) {
      za(!0);
      try {
        l();
      } finally {
        za(!1);
      }
    }
    return u.memoizedState = [c, n], c;
  }
  function Oy(l, n, u) {
    return u === void 0 || (Zn & 1073741824) !== 0 && (ut & 261930) === 0 ? l.memoizedState = n : (l.memoizedState = u, l = lp(), xe.lanes |= l, Rn |= l, u);
  }
  function ah(l, n, u, c) {
    return Ca(u, n) ? u : Tn.current !== null ? (l = Oy(l, u, c), Ca(l, n) || (hl = !0), l) : (Zn & 42) === 0 || (Zn & 1073741824) !== 0 && (ut & 261930) === 0 ? (hl = !0, l.memoizedState = u) : (l = lp(), xe.lanes |= l, Rn |= l, n);
  }
  function Cu(l, n, u, c, s) {
    var r = Y.p;
    Y.p = r !== 0 && 8 > r ? r : 8;
    var m = X.T, g = {};
    X.T = g, Ic(l, !1, n, u);
    try {
      var T = s(), H = X.S;
      if (H !== null && H(g, T), T !== null && typeof T == "object" && typeof T.then == "function") {
        var V = qd(
          T,
          c
        );
        Fc(
          l,
          n,
          V,
          Ta(l)
        );
      } else
        Fc(
          l,
          n,
          c,
          Ta(l)
        );
    } catch ($) {
      Fc(
        l,
        n,
        { then: function() {
        }, status: "rejected", reason: $ },
        Ta()
      );
    } finally {
      Y.p = r, m !== null && g.types !== null && (m.types = g.types), X.T = m;
    }
  }
  function zy() {
  }
  function nh(l, n, u, c) {
    if (l.tag !== 5) throw Error(j(476));
    var s = Ps(l).queue;
    Cu(
      l,
      s,
      n,
      P,
      u === null ? zy : function() {
        return cf(l), u(c);
      }
    );
  }
  function Ps(l) {
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
        lastRenderedReducer: Ru,
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
        lastRenderedReducer: Ru,
        lastRenderedState: u
      },
      next: null
    }, l.memoizedState = n, l = l.alternate, l !== null && (l.memoizedState = n), n;
  }
  function cf(l) {
    var n = Ps(l);
    n.next === null && (n = l.alternate.memoizedState), Fc(
      l,
      n.next.queue,
      {},
      Ta()
    );
  }
  function Dt() {
    return be(sl);
  }
  function ev() {
    return Jt().memoizedState;
  }
  function tv() {
    return Jt().memoizedState;
  }
  function lv(l) {
    for (var n = l.return; n !== null; ) {
      switch (n.tag) {
        case 24:
        case 3:
          var u = Ta();
          l = mi(u);
          var c = yi(n, l, u);
          c !== null && (Va(c, n, u), _u(c, n, u)), n = { cache: Yd() }, l.payload = n;
          return;
      }
      n = n.return;
    }
  }
  function Uu(l, n, u) {
    var c = Ta();
    u = {
      lane: c,
      revertLane: 0,
      gesture: null,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, bi(l) ? Dy(n, u) : (u = bn(l, n, u, c), u !== null && (Va(u, l, c), uh(u, n, c)));
  }
  function _y(l, n, u) {
    var c = Ta();
    Fc(l, n, u, c);
  }
  function Fc(l, n, u, c) {
    var s = {
      lane: c,
      revertLane: 0,
      gesture: null,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (bi(l)) Dy(n, s);
    else {
      var r = l.alternate;
      if (l.lanes === 0 && (r === null || r.lanes === 0) && (r = n.lastRenderedReducer, r !== null))
        try {
          var m = n.lastRenderedState, g = r(m, u);
          if (s.hasEagerState = !0, s.eagerState = g, Ca(g, m))
            return en(l, n, s, 0), Ut === null && Pa(), !1;
        } catch {
        }
      if (u = bn(l, n, s, c), u !== null)
        return Va(u, l, c), uh(u, n, c), !0;
    }
    return !1;
  }
  function Ic(l, n, u, c) {
    if (c = {
      lane: 2,
      revertLane: fo(),
      gesture: null,
      action: c,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, bi(l)) {
      if (n) throw Error(j(479));
    } else
      n = bn(
        l,
        u,
        c,
        2
      ), n !== null && Va(n, l, 2);
  }
  function bi(l) {
    var n = l.alternate;
    return l === xe || n !== null && n === xe;
  }
  function Dy(l, n) {
    vi = Ls = !0;
    var u = l.pending;
    u === null ? n.next = n : (n.next = u.next, u.next = n), l.pending = n;
  }
  function uh(l, n, u) {
    if ((u & 4194048) !== 0) {
      var c = n.lanes;
      c &= l.pendingLanes, u |= c, n.lanes = u, ns(l, u);
    }
  }
  var of = {
    readContext: be,
    use: af,
    useCallback: Pt,
    useContext: Pt,
    useEffect: Pt,
    useImperativeHandle: Pt,
    useLayoutEffect: Pt,
    useInsertionEffect: Pt,
    useMemo: Pt,
    useReducer: Pt,
    useRef: Pt,
    useState: Pt,
    useDebugValue: Pt,
    useDeferredValue: Pt,
    useTransition: Pt,
    useSyncExternalStore: Pt,
    useId: Pt,
    useHostTransitionStatus: Pt,
    useFormState: Pt,
    useActionState: Pt,
    useOptimistic: Pt,
    useMemoCache: Pt,
    useCacheRefresh: Pt
  };
  of.useEffectEvent = Pt;
  var av = {
    readContext: be,
    use: af,
    useCallback: function(l, n) {
      return Ll().memoizedState = [
        l,
        n === void 0 ? null : n
      ], l;
    },
    useContext: be,
    useEffect: Fd,
    useImperativeHandle: function(l, n, u) {
      u = u != null ? u.concat([l]) : null, Ws(
        4194308,
        4,
        Ay.bind(null, n, l),
        u
      );
    },
    useLayoutEffect: function(l, n) {
      return Ws(4194308, 4, l, n);
    },
    useInsertionEffect: function(l, n) {
      Ws(4, 2, l, n);
    },
    useMemo: function(l, n) {
      var u = Ll();
      n = n === void 0 ? null : n;
      var c = l();
      if (uc) {
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
        var s = u(n);
        if (uc) {
          za(!0);
          try {
            u(n);
          } finally {
            za(!1);
          }
        }
      } else s = n;
      return c.memoizedState = c.baseState = s, l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: l,
        lastRenderedState: s
      }, c.queue = l, l = l.dispatch = Uu.bind(
        null,
        xe,
        l
      ), [c.memoizedState, l];
    },
    useRef: function(l) {
      var n = Ll();
      return l = { current: l }, n.memoizedState = l;
    },
    useState: function(l) {
      l = $s(l);
      var n = l.queue, u = _y.bind(null, xe, n);
      return n.dispatch = u, [l.memoizedState, u];
    },
    useDebugValue: th,
    useDeferredValue: function(l, n) {
      var u = Ll();
      return Oy(u, l, n);
    },
    useTransition: function() {
      var l = $s(!1);
      return l = Cu.bind(
        null,
        xe,
        l.queue,
        !0,
        !1
      ), Ll().memoizedState = l, [!1, l];
    },
    useSyncExternalStore: function(l, n, u) {
      var c = xe, s = Ll();
      if (nt) {
        if (u === void 0)
          throw Error(j(407));
        u = u();
      } else {
        if (u = n(), Ut === null)
          throw Error(j(349));
        (ut & 127) !== 0 || yy(c, n, u);
      }
      s.memoizedState = u;
      var r = { value: u, getSnapshot: n };
      return s.queue = r, Fd(py.bind(null, c, r, l), [
        l
      ]), c.flags |= 2048, Wc(
        9,
        { destroy: void 0 },
        Ks.bind(
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
      var l = Ll(), n = Ut.identifierPrefix;
      if (nt) {
        var u = Ba, c = nn;
        u = (c & ~(1 << 32 - Rl(c) - 1)).toString(32) + u, n = "_" + n + "R_" + u, u = ef++, 0 < u && (n += "H" + u.toString(32)), n += "_";
      } else
        u = dy++, n = "_" + n + "r_" + u.toString(32) + "_";
      return l.memoizedState = n;
    },
    useHostTransitionStatus: Dt,
    useFormState: ks,
    useActionState: ks,
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
      return n.queue = u, n = Ic.bind(
        null,
        xe,
        !0,
        u
      ), u.dispatch = n, [l, n];
    },
    useMemoCache: Zs,
    useCacheRefresh: function() {
      return Ll().memoizedState = lv.bind(
        null,
        xe
      );
    },
    useEffectEvent: function(l) {
      var n = Ll(), u = { impl: l };
      return n.memoizedState = u, function() {
        if ((ht & 2) !== 0)
          throw Error(j(440));
        return u.impl.apply(void 0, arguments);
      };
    }
  }, Ry = {
    readContext: be,
    use: af,
    useCallback: Mu,
    useContext: be,
    useEffect: Fs,
    useImperativeHandle: eh,
    useInsertionEffect: Is,
    useLayoutEffect: Pd,
    useMemo: lh,
    useReducer: Js,
    useRef: Ty,
    useState: function() {
      return Js(Ru);
    },
    useDebugValue: th,
    useDeferredValue: function(l, n) {
      var u = Jt();
      return ah(
        u,
        _t.memoizedState,
        l,
        n
      );
    },
    useTransition: function() {
      var l = Js(Ru)[0], n = Jt().memoizedState;
      return [
        typeof l == "boolean" ? l : lf(l),
        n
      ];
    },
    useSyncExternalStore: my,
    useId: ev,
    useHostTransitionStatus: Dt,
    useFormState: Ey,
    useActionState: Ey,
    useOptimistic: function(l, n) {
      var u = Jt();
      return F0(u, _t, l, n);
    },
    useMemoCache: Zs,
    useCacheRefresh: tv
  };
  Ry.useEffectEvent = Id;
  var My = {
    readContext: be,
    use: af,
    useCallback: Mu,
    useContext: be,
    useEffect: Fs,
    useImperativeHandle: eh,
    useInsertionEffect: Is,
    useLayoutEffect: Pd,
    useMemo: lh,
    useReducer: Zd,
    useRef: Ty,
    useState: function() {
      return Zd(Ru);
    },
    useDebugValue: th,
    useDeferredValue: function(l, n) {
      var u = Jt();
      return _t === null ? Oy(u, l, n) : ah(
        u,
        _t.memoizedState,
        l,
        n
      );
    },
    useTransition: function() {
      var l = Zd(Ru)[0], n = Jt().memoizedState;
      return [
        typeof l == "boolean" ? l : lf(l),
        n
      ];
    },
    useSyncExternalStore: my,
    useId: ev,
    useHostTransitionStatus: Dt,
    useFormState: Wd,
    useActionState: Wd,
    useOptimistic: function(l, n) {
      var u = Jt();
      return _t !== null ? F0(u, _t, l, n) : (u.baseState = l, [l, u.queue.dispatch]);
    },
    useMemoCache: Zs,
    useCacheRefresh: tv
  };
  My.useEffectEvent = Id;
  function Cy(l, n, u, c) {
    n = l.memoizedState, u = u(c, n), u = u == null ? n : me({}, n, u), l.memoizedState = u, l.lanes === 0 && (l.updateQueue.baseState = u);
  }
  var Pc = {
    enqueueSetState: function(l, n, u) {
      l = l._reactInternals;
      var c = Ta(), s = mi(c);
      s.payload = n, u != null && (s.callback = u), n = yi(l, s, c), n !== null && (Va(n, l, c), _u(n, l, c));
    },
    enqueueReplaceState: function(l, n, u) {
      l = l._reactInternals;
      var c = Ta(), s = mi(c);
      s.tag = 1, s.payload = n, u != null && (s.callback = u), n = yi(l, s, c), n !== null && (Va(n, l, c), _u(n, l, c));
    },
    enqueueForceUpdate: function(l, n) {
      l = l._reactInternals;
      var u = Ta(), c = mi(u);
      c.tag = 2, n != null && (c.callback = n), n = yi(l, c, u), n !== null && (Va(n, l, u), _u(n, l, u));
    }
  };
  function Jn(l, n, u, c, s, r, m) {
    return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(c, r, m) : n.prototype && n.prototype.isPureReactComponent ? !Ji(u, c) || !Ji(s, r) : !0;
  }
  function Uy(l, n, u, c) {
    l = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(u, c), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(u, c), n.state !== l && Pc.enqueueReplaceState(n, n.state, null);
  }
  function eo(l, n) {
    var u = n;
    if ("ref" in n) {
      u = {};
      for (var c in n)
        c !== "ref" && (u[c] = n[c]);
    }
    if (l = l.defaultProps) {
      u === n && (u = me({}, u));
      for (var s in l)
        u[s] === void 0 && (u[s] = l[s]);
    }
    return u;
  }
  function Hy(l) {
    Wi(l);
  }
  function ih(l) {
    console.error(l);
  }
  function Ny(l) {
    Wi(l);
  }
  function ff(l, n) {
    try {
      var u = l.onUncaughtError;
      u(n.value, { componentStack: n.stack });
    } catch (c) {
      setTimeout(function() {
        throw c;
      });
    }
  }
  function ch(l, n, u) {
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
  function sf(l, n, u) {
    return u = mi(u), u.tag = 3, u.payload = { element: null }, u.callback = function() {
      ff(l, n);
    }, u;
  }
  function nv(l) {
    return l = mi(l), l.tag = 3, l;
  }
  function By(l, n, u, c) {
    var s = u.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var r = c.value;
      l.payload = function() {
        return s(r);
      }, l.callback = function() {
        ch(n, u, c);
      };
    }
    var m = u.stateNode;
    m !== null && typeof m.componentDidCatch == "function" && (l.callback = function() {
      ch(n, u, c), typeof s != "function" && (Xu === null ? Xu = /* @__PURE__ */ new Set([this]) : Xu.add(this));
      var g = c.stack;
      this.componentDidCatch(c.value, {
        componentStack: g !== null ? g : ""
      });
    });
  }
  function uv(l, n, u, c, s) {
    if (u.flags |= 32768, c !== null && typeof c == "object" && typeof c.then == "function") {
      if (n = u.alternate, n !== null && un(
        n,
        u,
        s,
        !0
      ), u = na.current, u !== null) {
        switch (u.tag) {
          case 31:
          case 13:
            return xa === null ? Sh() : u.alternate === null && Kt === 0 && (Kt = 3), u.flags &= -257, u.flags |= 65536, u.lanes = s, c === Wo ? u.flags |= 16384 : (n = u.updateQueue, n === null ? u.updateQueue = /* @__PURE__ */ new Set([c]) : n.add(c), Th(l, c, s)), !1;
          case 22:
            return u.flags |= 65536, c === Wo ? u.flags |= 16384 : (n = u.updateQueue, n === null ? (n = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([c])
            }, u.updateQueue = n) : (u = n.retryQueue, u === null ? n.retryQueue = /* @__PURE__ */ new Set([c]) : u.add(c)), Th(l, c, s)), !1;
        }
        throw Error(j(435, u.tag));
      }
      return Th(l, c, s), Sh(), !1;
    }
    if (nt)
      return n = na.current, n !== null ? ((n.flags & 65536) === 0 && (n.flags |= 256), n.flags |= 65536, n.lanes = s, c !== Tu && (l = Error(j(422), { cause: c }), Cs(ln(l, u)))) : (c !== Tu && (n = Error(j(423), {
        cause: c
      }), Cs(
        ln(n, u)
      )), l = l.current.alternate, l.flags |= 65536, s &= -s, l.lanes |= s, c = ln(c, u), s = sf(
        l.stateNode,
        c,
        s
      ), Po(l, s), Kt !== 4 && (Kt = 2)), !1;
    var r = Error(j(520), { cause: c });
    if (r = ln(r, u), ol === null ? ol = [r] : ol.push(r), Kt !== 4 && (Kt = 2), n === null) return !0;
    c = ln(c, u), u = n;
    do {
      switch (u.tag) {
        case 3:
          return u.flags |= 65536, l = s & -s, u.lanes |= l, l = sf(u.stateNode, c, l), Po(u, l), !1;
        case 1:
          if (n = u.type, r = u.stateNode, (u.flags & 128) === 0 && (typeof n.getDerivedStateFromError == "function" || r !== null && typeof r.componentDidCatch == "function" && (Xu === null || !Xu.has(r))))
            return u.flags |= 65536, s &= -s, u.lanes |= s, s = nv(s), By(
              s,
              l,
              u,
              c
            ), Po(u, s), !1;
      }
      u = u.return;
    } while (u !== null);
    return !1;
  }
  var Yy = Error(j(461)), hl = !1;
  function Cl(l, n, u, c) {
    n.child = l === null ? sy(n, null, u, c) : Zc(
      n,
      l.child,
      u,
      c
    );
  }
  function Hu(l, n, u, c, s) {
    u = u.render;
    var r = n.ref;
    if ("ref" in c) {
      var m = {};
      for (var g in c)
        g !== "ref" && (m[g] = c[g]);
    } else m = c;
    return zu(n), c = gi(
      l,
      n,
      u,
      m,
      r,
      s
    ), g = hy(), l !== null && !hl ? (Vd(l, n, s), Nu(l, n, s)) : (nt && g && Cd(n), n.flags |= 1, Cl(l, n, c, s), n.child);
  }
  function qy(l, n, u, c, s) {
    if (l === null) {
      var r = u.type;
      return typeof r == "function" && !En(r) && r.defaultProps === void 0 && u.compare === null ? (n.tag = 15, n.type = r, jy(
        l,
        n,
        r,
        c,
        s
      )) : (l = Os(
        u.type,
        null,
        c,
        n,
        n.mode,
        s
      ), l.ref = n.ref, l.return = n, n.child = l);
    }
    if (r = l.child, !to(l, s)) {
      var m = r.memoizedProps;
      if (u = u.compare, u = u !== null ? u : Ji, u(m, c) && l.ref === n.ref)
        return Nu(l, n, s);
    }
    return n.flags |= 1, l = tn(r, c), l.ref = n.ref, l.return = n, n.child = l;
  }
  function jy(l, n, u, c, s) {
    if (l !== null) {
      var r = l.memoizedProps;
      if (Ji(r, c) && l.ref === n.ref)
        if (hl = !1, n.pendingProps = c = r, to(l, s))
          (l.flags & 131072) !== 0 && (hl = !0);
        else
          return n.lanes = l.lanes, Nu(l, n, s);
    }
    return An(
      l,
      n,
      u,
      c,
      s
    );
  }
  function xy(l, n, u, c) {
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
        return tr(
          l,
          n,
          r,
          u,
          c
        );
      }
      if ((u & 536870912) !== 0)
        n.memoizedState = { baseLanes: 0, cachePool: null }, l !== null && ja(
          n,
          r !== null ? r.cachePool : null
        ), r !== null ? Gs(n, r) : ry(), Qs(n);
      else
        return c = n.lanes = 536870912, tr(
          l,
          n,
          r !== null ? r.baseLanes | u : u,
          u,
          c
        );
    } else
      r !== null ? (ja(n, r.cachePool), Gs(n, r), Du(), n.memoizedState = null) : (l !== null && ja(n, null), ry(), Du());
    return Cl(l, n, s, u), n.child;
  }
  function er(l, n) {
    return l !== null && l.tag === 22 || n.stateNode !== null || (n.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), n.sibling;
  }
  function tr(l, n, u, c, s) {
    var r = di();
    return r = r === null ? null : { parent: il._currentValue, pool: r }, n.memoizedState = {
      baseLanes: u,
      cachePool: r
    }, l !== null && ja(n, null), ry(), Qs(n), l !== null && un(l, n, c, !0), n.childLanes = s, null;
  }
  function Zl(l, n) {
    return n = Ei(
      { mode: n.mode, children: n.children },
      l.mode
    ), n.ref = l.ref, l.child = n, n.return = l, n;
  }
  function Gy(l, n, u) {
    return Zc(n, l.child, null, u), l = Zl(n, n.pendingProps), l.flags |= 2, ua(n), n.memoizedState = null, l;
  }
  function Ga(l, n, u) {
    var c = n.pendingProps, s = (n.flags & 128) !== 0;
    if (n.flags &= -129, l === null) {
      if (nt) {
        if (c.mode === "hidden")
          return l = Zl(n, c), n.lanes = 536870912, er(null, l);
        if (Xs(n), (l = xt) ? (l = Ve(
          l,
          Ya
        ), l = l !== null && l.data === "&" ? l : null, l !== null && (n.memoizedState = {
          dehydrated: l,
          treeContext: Xn !== null ? { id: nn, overflow: Ba } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, u = _s(l), u.return = n, n.child = u, gl = n, xt = null)) : l = null, l === null) throw pa(n);
        return n.lanes = 536870912, null;
      }
      return Zl(n, c);
    }
    var r = l.memoizedState;
    if (r !== null) {
      var m = r.dehydrated;
      if (Xs(n), s)
        if (n.flags & 256)
          n.flags &= -257, n = Gy(
            l,
            n,
            u
          );
        else if (n.memoizedState !== null)
          n.child = l.child, n.flags |= 128, n = null;
        else throw Error(j(558));
      else if (hl || un(l, n, u, !1), s = (u & l.childLanes) !== 0, hl || s) {
        if (c = Ut, c !== null && (m = iu(c, u), m !== 0 && m !== r.retryLane))
          throw r.retryLane = m, ta(l, m), Va(c, l, m), Yy;
        Sh(), n = Gy(
          l,
          n,
          u
        );
      } else
        l = r.treeContext, xt = $l(m.nextSibling), gl = n, nt = !0, Eu = null, Ya = !1, l !== null && ny(n, l), n = Zl(n, c), n.flags |= 4096;
      return n;
    }
    return l = tn(l.child, {
      mode: c.mode,
      children: c.children
    }), l.ref = n.ref, n.child = l, l.return = n, l;
  }
  function lr(l, n) {
    var u = n.ref;
    if (u === null)
      l !== null && l.ref !== null && (n.flags |= 4194816);
    else {
      if (typeof u != "function" && typeof u != "object")
        throw Error(j(284));
      (l === null || l.ref !== u) && (n.flags |= 4194816);
    }
  }
  function An(l, n, u, c, s) {
    return zu(n), u = gi(
      l,
      n,
      u,
      c,
      void 0,
      s
    ), c = hy(), l !== null && !hl ? (Vd(l, n, s), Nu(l, n, s)) : (nt && c && Cd(n), n.flags |= 1, Cl(l, n, u, s), n.child);
  }
  function wy(l, n, u, c, s, r) {
    return zu(n), n.updateQueue = null, u = Ld(
      n,
      c,
      u,
      s
    ), Qd(l), c = hy(), l !== null && !hl ? (Vd(l, n, r), Nu(l, n, r)) : (nt && c && Cd(n), n.flags |= 1, Cl(l, n, u, r), n.child);
  }
  function ic(l, n, u, c, s) {
    if (zu(n), n.stateNode === null) {
      var r = Gc, m = u.contextType;
      typeof m == "object" && m !== null && (r = be(m)), r = new u(c, r), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = Pc, n.stateNode = r, r._reactInternals = n, r = n.stateNode, r.props = c, r.state = n.memoizedState, r.refs = {}, xd(n), m = u.contextType, r.context = typeof m == "object" && m !== null ? be(m) : Gc, r.state = n.memoizedState, m = u.getDerivedStateFromProps, typeof m == "function" && (Cy(
        n,
        u,
        m,
        c
      ), r.state = n.memoizedState), typeof u.getDerivedStateFromProps == "function" || typeof r.getSnapshotBeforeUpdate == "function" || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (m = r.state, typeof r.componentWillMount == "function" && r.componentWillMount(), typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount(), m !== r.state && Pc.enqueueReplaceState(r, r.state, null), nc(n, c, r, s), xs(), r.state = n.memoizedState), typeof r.componentDidMount == "function" && (n.flags |= 4194308), c = !0;
    } else if (l === null) {
      r = n.stateNode;
      var g = n.memoizedProps, T = eo(u, g);
      r.props = T;
      var H = r.context, V = u.contextType;
      m = Gc, typeof V == "object" && V !== null && (m = be(V));
      var $ = u.getDerivedStateFromProps;
      V = typeof $ == "function" || typeof r.getSnapshotBeforeUpdate == "function", g = n.pendingProps !== g, V || typeof r.UNSAFE_componentWillReceiveProps != "function" && typeof r.componentWillReceiveProps != "function" || (g || H !== m) && Uy(
        n,
        r,
        c,
        m
      ), hi = !1;
      var B = n.memoizedState;
      r.state = B, nc(n, c, r, s), xs(), H = n.memoizedState, g || B !== H || hi ? (typeof $ == "function" && (Cy(
        n,
        u,
        $,
        c
      ), H = n.memoizedState), (T = hi || Jn(
        n,
        u,
        T,
        c,
        B,
        H,
        m
      )) ? (V || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (typeof r.componentWillMount == "function" && r.componentWillMount(), typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount()), typeof r.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof r.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = c, n.memoizedState = H), r.props = c, r.state = H, r.context = m, c = T) : (typeof r.componentDidMount == "function" && (n.flags |= 4194308), c = !1);
    } else {
      r = n.stateNode, js(l, n), m = n.memoizedProps, V = eo(u, m), r.props = V, $ = n.pendingProps, B = r.context, H = u.contextType, T = Gc, typeof H == "object" && H !== null && (T = be(H)), g = u.getDerivedStateFromProps, (H = typeof g == "function" || typeof r.getSnapshotBeforeUpdate == "function") || typeof r.UNSAFE_componentWillReceiveProps != "function" && typeof r.componentWillReceiveProps != "function" || (m !== $ || B !== T) && Uy(
        n,
        r,
        c,
        T
      ), hi = !1, B = n.memoizedState, r.state = B, nc(n, c, r, s), xs();
      var G = n.memoizedState;
      m !== $ || B !== G || hi || l !== null && l.dependencies !== null && aa(l.dependencies) ? (typeof g == "function" && (Cy(
        n,
        u,
        g,
        c
      ), G = n.memoizedState), (V = hi || Jn(
        n,
        u,
        V,
        c,
        B,
        G,
        T
      ) || l !== null && l.dependencies !== null && aa(l.dependencies)) ? (H || typeof r.UNSAFE_componentWillUpdate != "function" && typeof r.componentWillUpdate != "function" || (typeof r.componentWillUpdate == "function" && r.componentWillUpdate(c, G, T), typeof r.UNSAFE_componentWillUpdate == "function" && r.UNSAFE_componentWillUpdate(
        c,
        G,
        T
      )), typeof r.componentDidUpdate == "function" && (n.flags |= 4), typeof r.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof r.componentDidUpdate != "function" || m === l.memoizedProps && B === l.memoizedState || (n.flags |= 4), typeof r.getSnapshotBeforeUpdate != "function" || m === l.memoizedProps && B === l.memoizedState || (n.flags |= 1024), n.memoizedProps = c, n.memoizedState = G), r.props = c, r.state = G, r.context = T, c = V) : (typeof r.componentDidUpdate != "function" || m === l.memoizedProps && B === l.memoizedState || (n.flags |= 4), typeof r.getSnapshotBeforeUpdate != "function" || m === l.memoizedProps && B === l.memoizedState || (n.flags |= 1024), c = !1);
    }
    return r = c, lr(l, n), c = (n.flags & 128) !== 0, r || c ? (r = n.stateNode, u = c && typeof u.getDerivedStateFromError != "function" ? null : r.render(), n.flags |= 1, l !== null && c ? (n.child = Zc(
      n,
      l.child,
      null,
      s
    ), n.child = Zc(
      n,
      null,
      u,
      s
    )) : Cl(l, n, u, s), n.memoizedState = r.state, l = n.child) : l = Nu(
      l,
      n,
      s
    ), l;
  }
  function Xy(l, n, u, c) {
    return Qn(), n.flags |= 256, Cl(l, n, u, c), n.child;
  }
  var On = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function ar(l) {
    return { baseLanes: l, cachePool: jd() };
  }
  function nr(l, n, u) {
    return l = l !== null ? l.childLanes & ~u : 0, n && (l |= Xa), l;
  }
  function zn(l, n, u) {
    var c = n.pendingProps, s = !1, r = (n.flags & 128) !== 0, m;
    if ((m = r) || (m = l !== null && l.memoizedState === null ? !1 : (It.current & 2) !== 0), m && (s = !0, n.flags &= -129), m = (n.flags & 32) !== 0, n.flags &= -33, l === null) {
      if (nt) {
        if (s ? pi(n) : Du(), (l = xt) ? (l = Ve(
          l,
          Ya
        ), l = l !== null && l.data !== "&" ? l : null, l !== null && (n.memoizedState = {
          dehydrated: l,
          treeContext: Xn !== null ? { id: nn, overflow: Ba } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, u = _s(l), u.return = n, n.child = u, gl = n, xt = null)) : l = null, l === null) throw pa(n);
        return Cn(l) ? n.lanes = 32 : n.lanes = 536870912, null;
      }
      var g = c.children;
      return c = c.fallback, s ? (Du(), s = n.mode, g = Ei(
        { mode: "hidden", children: g },
        s
      ), c = wc(
        c,
        s,
        u,
        null
      ), g.return = n, c.return = n, g.sibling = c, n.child = g, c = n.child, c.memoizedState = ar(u), c.childLanes = nr(
        l,
        m,
        u
      ), n.memoizedState = On, er(null, c)) : (pi(n), oh(n, g));
    }
    var T = l.memoizedState;
    if (T !== null && (g = T.dehydrated, g !== null)) {
      if (r)
        n.flags & 256 ? (pi(n), n.flags &= -257, n = fh(
          l,
          n,
          u
        )) : n.memoizedState !== null ? (Du(), n.child = l.child, n.flags |= 128, n = null) : (Du(), g = c.fallback, s = n.mode, c = Ei(
          { mode: "visible", children: c.children },
          s
        ), g = wc(
          g,
          s,
          u,
          null
        ), g.flags |= 2, c.return = n, g.return = n, c.sibling = g, n.child = c, Zc(
          n,
          l.child,
          null,
          u
        ), c = n.child, c.memoizedState = ar(u), c.childLanes = nr(
          l,
          m,
          u
        ), n.memoizedState = On, n = er(null, c));
      else if (pi(n), Cn(g)) {
        if (m = g.nextSibling && g.nextSibling.dataset, m) var H = m.dgst;
        m = H, c = Error(j(419)), c.stack = "", c.digest = m, Cs({ value: c, source: null, stack: null }), n = fh(
          l,
          n,
          u
        );
      } else if (hl || un(l, n, u, !1), m = (u & l.childLanes) !== 0, hl || m) {
        if (m = Ut, m !== null && (c = iu(m, u), c !== 0 && c !== T.retryLane))
          throw T.retryLane = c, ta(l, c), Va(m, l, c), Yy;
        Tp(g) || Sh(), n = fh(
          l,
          n,
          u
        );
      } else
        Tp(g) ? (n.flags |= 192, n.child = l.child, n = null) : (l = T.treeContext, xt = $l(
          g.nextSibling
        ), gl = n, nt = !0, Eu = null, Ya = !1, l !== null && ny(n, l), n = oh(
          n,
          c.children
        ), n.flags |= 4096);
      return n;
    }
    return s ? (Du(), g = c.fallback, s = n.mode, T = l.child, H = T.sibling, c = tn(T, {
      mode: "hidden",
      children: c.children
    }), c.subtreeFlags = T.subtreeFlags & 65011712, H !== null ? g = tn(
      H,
      g
    ) : (g = wc(
      g,
      s,
      u,
      null
    ), g.flags |= 2), g.return = n, c.return = n, c.sibling = g, n.child = c, er(null, c), c = n.child, g = l.child.memoizedState, g === null ? g = ar(u) : (s = g.cachePool, s !== null ? (T = il._currentValue, s = s.parent !== T ? { parent: T, pool: T } : s) : s = jd(), g = {
      baseLanes: g.baseLanes | u,
      cachePool: s
    }), c.memoizedState = g, c.childLanes = nr(
      l,
      m,
      u
    ), n.memoizedState = On, er(l.child, c)) : (pi(n), u = l.child, l = u.sibling, u = tn(u, {
      mode: "visible",
      children: c.children
    }), u.return = n, u.sibling = null, l !== null && (m = n.deletions, m === null ? (n.deletions = [l], n.flags |= 16) : m.push(l)), n.child = u, n.memoizedState = null, u);
  }
  function oh(l, n) {
    return n = Ei(
      { mode: "visible", children: n },
      l.mode
    ), n.return = l, l.child = n;
  }
  function Ei(l, n) {
    return l = Ha(22, l, null, n), l.lanes = 0, l;
  }
  function fh(l, n, u) {
    return Zc(n, l.child, null, u), l = oh(
      n,
      n.pendingProps.children
    ), l.flags |= 2, n.memoizedState = null, l;
  }
  function rf(l, n, u) {
    l.lanes |= n;
    var c = l.alternate;
    c !== null && (c.lanes |= n), Us(l.return, n, u);
  }
  function cc(l, n, u, c, s, r) {
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
  function Qy(l, n, u) {
    var c = n.pendingProps, s = c.revealOrder, r = c.tail;
    c = c.children;
    var m = It.current, g = (m & 2) !== 0;
    if (g ? (m = m & 1 | 2, n.flags |= 128) : m &= 1, K(It, m), Cl(l, n, c, u), c = nt ? Jo : 0, !g && l !== null && (l.flags & 128) !== 0)
      e: for (l = n.child; l !== null; ) {
        if (l.tag === 13)
          l.memoizedState !== null && rf(l, u, n);
        else if (l.tag === 19)
          rf(l, u, n);
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
          l = u.alternate, l !== null && Kc(l) === null && (s = u), u = u.sibling;
        u = s, u === null ? (s = n.child, n.child = null) : (s = u.sibling, u.sibling = null), cc(
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
          if (l = s.alternate, l !== null && Kc(l) === null) {
            n.child = s;
            break;
          }
          l = s.sibling, s.sibling = u, u = s, s = l;
        }
        cc(
          n,
          !0,
          u,
          null,
          r,
          c
        );
        break;
      case "together":
        cc(
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
  function Nu(l, n, u) {
    if (l !== null && (n.dependencies = l.dependencies), Rn |= n.lanes, (u & n.childLanes) === 0)
      if (l !== null) {
        if (un(
          l,
          n,
          u,
          !1
        ), (u & n.childLanes) === 0)
          return null;
      } else return null;
    if (l !== null && n.child !== l.child)
      throw Error(j(153));
    if (n.child !== null) {
      for (l = n.child, u = tn(l, l.pendingProps), n.child = u, u.return = n; l.sibling !== null; )
        l = l.sibling, u = u.sibling = tn(l, l.pendingProps), u.return = n;
      u.sibling = null;
    }
    return n.child;
  }
  function to(l, n) {
    return (l.lanes & n) !== 0 ? !0 : (l = l.dependencies, !!(l !== null && aa(l)));
  }
  function iv(l, n, u) {
    switch (n.tag) {
      case 3:
        ke(n, n.stateNode.containerInfo), Ou(n, il, l.memoizedState.cache), Qn();
        break;
      case 27:
      case 5:
        ea(n);
        break;
      case 4:
        ke(n, n.stateNode.containerInfo);
        break;
      case 10:
        Ou(
          n,
          n.type,
          n.memoizedProps.value
        );
        break;
      case 31:
        if (n.memoizedState !== null)
          return n.flags |= 128, Xs(n), null;
        break;
      case 13:
        var c = n.memoizedState;
        if (c !== null)
          return c.dehydrated !== null ? (pi(n), n.flags |= 128, null) : (u & n.child.childLanes) !== 0 ? zn(l, n, u) : (pi(n), l = Nu(
            l,
            n,
            u
          ), l !== null ? l.sibling : null);
        pi(n);
        break;
      case 19:
        var s = (l.flags & 128) !== 0;
        if (c = (u & n.childLanes) !== 0, c || (un(
          l,
          n,
          u,
          !1
        ), c = (u & n.childLanes) !== 0), s) {
          if (c)
            return Qy(
              l,
              n,
              u
            );
          n.flags |= 128;
        }
        if (s = n.memoizedState, s !== null && (s.rendering = null, s.tail = null, s.lastEffect = null), K(It, It.current), c) break;
        return null;
      case 22:
        return n.lanes = 0, xy(
          l,
          n,
          u,
          n.pendingProps
        );
      case 24:
        Ou(n, il, l.memoizedState.cache);
    }
    return Nu(l, n, u);
  }
  function ur(l, n, u) {
    if (l !== null)
      if (l.memoizedProps !== n.pendingProps)
        hl = !0;
      else {
        if (!to(l, u) && (n.flags & 128) === 0)
          return hl = !1, iv(
            l,
            n,
            u
          );
        hl = (l.flags & 131072) !== 0;
      }
    else
      hl = !1, nt && (n.flags & 1048576) !== 0 && Rs(n, Jo, n.index);
    switch (n.lanes = 0, n.tag) {
      case 16:
        e: {
          var c = n.pendingProps;
          if (l = tc(n.elementType), n.type = l, typeof l == "function")
            En(l) ? (c = eo(l, c), n.tag = 1, n = ic(
              null,
              n,
              l,
              c,
              u
            )) : (n.tag = 0, n = An(
              null,
              n,
              l,
              c,
              u
            ));
          else {
            if (l != null) {
              var s = l.$$typeof;
              if (s === Ft) {
                n.tag = 11, n = Hu(
                  null,
                  n,
                  l,
                  c,
                  u
                );
                break e;
              } else if (s === je) {
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
            throw n = Re(l) || l, Error(j(306, n, ""));
          }
        }
        return n;
      case 0:
        return An(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 1:
        return c = n.type, s = eo(
          c,
          n.pendingProps
        ), ic(
          l,
          n,
          c,
          s,
          u
        );
      case 3:
        e: {
          if (ke(
            n,
            n.stateNode.containerInfo
          ), l === null) throw Error(j(387));
          c = n.pendingProps;
          var r = n.memoizedState;
          s = r.element, js(l, n), nc(n, c, null, u);
          var m = n.memoizedState;
          if (c = m.cache, Ou(n, il, c), c !== r.cache && Nd(
            n,
            [il],
            u,
            !0
          ), xs(), c = m.element, r.isDehydrated)
            if (r = {
              element: c,
              isDehydrated: !1,
              cache: m.cache
            }, n.updateQueue.baseState = r, n.memoizedState = r, n.flags & 256) {
              n = Xy(
                l,
                n,
                c,
                u
              );
              break e;
            } else if (c !== s) {
              s = ln(
                Error(j(424)),
                n
              ), Cs(s), n = Xy(
                l,
                n,
                c,
                u
              );
              break e;
            } else
              for (l = n.stateNode.containerInfo, l.nodeType === 9 ? l = l.body : l = l.nodeName === "HTML" ? l.ownerDocument.body : l, xt = $l(l.firstChild), gl = n, nt = !0, Eu = null, Ya = !0, u = sy(
                n,
                null,
                c,
                u
              ), n.child = u; u; )
                u.flags = u.flags & -3 | 4096, u = u.sibling;
          else {
            if (Qn(), c === s) {
              n = Nu(
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
        return lr(l, n), l === null ? (u = Ri(
          n.type,
          null,
          n.pendingProps,
          null
        )) ? n.memoizedState = u : nt || (u = n.type, l = n.pendingProps, c = Dr(
          Oe.current
        ).createElement(u), c[vl] = n, c[Lt] = l, Kl(c, u, l), Tl(c), n.stateNode = c) : n.memoizedState = Ri(
          n.type,
          l.memoizedProps,
          n.pendingProps,
          l.memoizedState
        ), null;
      case 27:
        return ea(n), l === null && nt && (c = n.stateNode = Wn(
          n.type,
          n.pendingProps,
          Oe.current
        ), gl = n, Ya = !0, s = xt, Qu(n.type) ? (zf = s, xt = $l(c.firstChild)) : xt = s), Cl(
          l,
          n,
          n.pendingProps.children,
          u
        ), lr(l, n), l === null && (n.flags |= 4194304), n.child;
      case 5:
        return l === null && nt && ((s = c = xt) && (c = Ep(
          c,
          n.type,
          n.pendingProps,
          Ya
        ), c !== null ? (n.stateNode = c, gl = n, xt = $l(c.firstChild), Ya = !1, s = !0) : s = !1), s || pa(n)), ea(n), s = n.type, r = n.pendingProps, m = l !== null ? l.memoizedProps : null, c = r.children, Bh(s, r) ? c = null : m !== null && Bh(s, m) && (n.flags |= 32), n.memoizedState !== null && (s = gi(
          l,
          n,
          Fg,
          null,
          null,
          u
        ), sl._currentValue = s), lr(l, n), Cl(l, n, c, u), n.child;
      case 6:
        return l === null && nt && ((l = u = xt) && (u = lS(
          u,
          n.pendingProps,
          Ya
        ), u !== null ? (n.stateNode = u, gl = n, xt = null, l = !0) : l = !1), l || pa(n)), null;
      case 13:
        return zn(l, n, u);
      case 4:
        return ke(
          n,
          n.stateNode.containerInfo
        ), c = n.pendingProps, l === null ? n.child = Zc(
          n,
          null,
          c,
          u
        ) : Cl(l, n, c, u), n.child;
      case 11:
        return Hu(
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
        return c = n.pendingProps, Ou(n, n.type, c.value), Cl(l, n, c.children, u), n.child;
      case 9:
        return s = n.type._context, c = n.pendingProps.children, zu(n), s = be(s), c = c(s), n.flags |= 1, Cl(l, n, c, u), n.child;
      case 14:
        return qy(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 15:
        return jy(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 19:
        return Qy(l, n, u);
      case 31:
        return Ga(l, n, u);
      case 22:
        return xy(
          l,
          n,
          u,
          n.pendingProps
        );
      case 24:
        return zu(n), c = be(il), l === null ? (s = di(), s === null && (s = Ut, r = Yd(), s.pooledCache = r, r.refCount++, r !== null && (s.pooledCacheLanes |= u), s = r), n.memoizedState = { parent: c, cache: s }, xd(n), Ou(n, il, s)) : ((l.lanes & u) !== 0 && (js(l, n), nc(n, null, null, u), xs()), s = l.memoizedState, r = n.memoizedState, s.parent !== c ? (s = { parent: c, cache: c }, n.memoizedState = s, n.lanes === 0 && (n.memoizedState = n.updateQueue.baseState = s), Ou(n, il, c)) : (c = r.cache, Ou(n, il, c), c !== s.cache && Nd(
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
    throw Error(j(156, n.tag));
  }
  function Bu(l) {
    l.flags |= 4;
  }
  function sh(l, n, u, c, s) {
    if ((n = (l.mode & 32) !== 0) && (n = !1), n) {
      if (l.flags |= 16777216, (s & 335544128) === s)
        if (l.stateNode.complete) l.flags |= 8192;
        else if (pf()) l.flags |= 8192;
        else
          throw lc = Wo, Bs;
    } else l.flags &= -16777217;
  }
  function cv(l, n) {
    if (n.type !== "stylesheet" || (n.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (l.flags |= 16777216, !Qh(n))
      if (pf()) l.flags |= 8192;
      else
        throw lc = Wo, Bs;
  }
  function ir(l, n) {
    n !== null && (l.flags |= 4), l.flags & 16384 && (n = l.tag !== 22 ? Be() : 536870912, l.lanes |= n, sc |= n);
  }
  function Jl(l, n) {
    if (!nt)
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
      for (var s = l.child; s !== null; )
        u |= s.lanes | s.childLanes, c |= s.subtreeFlags & 65011712, c |= s.flags & 65011712, s.return = l, s = s.sibling;
    else
      for (s = l.child; s !== null; )
        u |= s.lanes | s.childLanes, c |= s.subtreeFlags, c |= s.flags, s.return = l, s = s.sibling;
    return l.subtreeFlags |= c, l.childLanes = u, n;
  }
  function el(l, n, u) {
    var c = n.pendingProps;
    switch (Ko(n), n.tag) {
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
        return u = n.stateNode, c = null, l !== null && (c = l.memoizedState.cache), n.memoizedState.cache !== c && (n.flags |= 2048), la(il), St(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (l === null || l.child === null) && (Au(n) ? Bu(n) : l === null || l.memoizedState.isDehydrated && (n.flags & 256) === 0 || (n.flags |= 1024, Ud())), Gt(n), null;
      case 26:
        var s = n.type, r = n.memoizedState;
        return l === null ? (Bu(n), r !== null ? (Gt(n), cv(n, r)) : (Gt(n), sh(
          n,
          s,
          null,
          c,
          u
        ))) : r ? r !== l.memoizedState ? (Bu(n), Gt(n), cv(n, r)) : (Gt(n), n.flags &= -16777217) : (l = l.memoizedProps, l !== c && Bu(n), Gt(n), sh(
          n,
          s,
          l,
          c,
          u
        )), null;
      case 27:
        if (pn(n), u = Oe.current, s = n.type, l !== null && n.stateNode != null)
          l.memoizedProps !== c && Bu(n);
        else {
          if (!c) {
            if (n.stateNode === null)
              throw Error(j(166));
            return Gt(n), null;
          }
          l = ee.current, Au(n) ? $o(n) : (l = Wn(s, c, u), n.stateNode = l, Bu(n));
        }
        return Gt(n), null;
      case 5:
        if (pn(n), s = n.type, l !== null && n.stateNode != null)
          l.memoizedProps !== c && Bu(n);
        else {
          if (!c) {
            if (n.stateNode === null)
              throw Error(j(166));
            return Gt(n), null;
          }
          if (r = ee.current, Au(n))
            $o(n);
          else {
            var m = Dr(
              Oe.current
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
            r[vl] = n, r[Lt] = c;
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
            e: switch (Kl(r, s, c), s) {
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
            c && Bu(n);
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
          l.memoizedProps !== c && Bu(n);
        else {
          if (typeof c != "string" && n.stateNode === null)
            throw Error(j(166));
          if (l = Oe.current, Au(n)) {
            if (l = n.stateNode, u = n.memoizedProps, c = null, s = gl, s !== null)
              switch (s.tag) {
                case 27:
                case 5:
                  c = s.memoizedProps;
              }
            l[vl] = n, l = !!(l.nodeValue === u || c !== null && c.suppressHydrationWarning === !0 || pp(l.nodeValue, u)), l || pa(n, !0);
          } else
            l = Dr(l).createTextNode(
              c
            ), l[vl] = n, n.stateNode = l;
        }
        return Gt(n), null;
      case 31:
        if (u = n.memoizedState, l === null || l.memoizedState !== null) {
          if (c = Au(n), u !== null) {
            if (l === null) {
              if (!c) throw Error(j(318));
              if (l = n.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(j(557));
              l[vl] = n;
            } else
              Qn(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;
            Gt(n), l = !1;
          } else
            u = Ud(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = u), l = !0;
          if (!l)
            return n.flags & 256 ? (ua(n), n) : (ua(n), null);
          if ((n.flags & 128) !== 0)
            throw Error(j(558));
        }
        return Gt(n), null;
      case 13:
        if (c = n.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
          if (s = Au(n), c !== null && c.dehydrated !== null) {
            if (l === null) {
              if (!s) throw Error(j(318));
              if (s = n.memoizedState, s = s !== null ? s.dehydrated : null, !s) throw Error(j(317));
              s[vl] = n;
            } else
              Qn(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;
            Gt(n), s = !1;
          } else
            s = Ud(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = s), s = !0;
          if (!s)
            return n.flags & 256 ? (ua(n), n) : (ua(n), null);
        }
        return ua(n), (n.flags & 128) !== 0 ? (n.lanes = u, n) : (u = c !== null, l = l !== null && l.memoizedState !== null, u && (c = n.child, s = null, c.alternate !== null && c.alternate.memoizedState !== null && c.alternate.memoizedState.cachePool !== null && (s = c.alternate.memoizedState.cachePool.pool), r = null, c.memoizedState !== null && c.memoizedState.cachePool !== null && (r = c.memoizedState.cachePool.pool), r !== s && (c.flags |= 2048)), u !== l && u && (n.child.flags |= 8192), ir(n, n.updateQueue), Gt(n), null);
      case 4:
        return St(), l === null && hp(n.stateNode.containerInfo), Gt(n), null;
      case 10:
        return la(n.type), Gt(n), null;
      case 19:
        if (A(It), c = n.memoizedState, c === null) return Gt(n), null;
        if (s = (n.flags & 128) !== 0, r = c.rendering, r === null)
          if (s) Jl(c, !1);
          else {
            if (Kt !== 0 || l !== null && (l.flags & 128) !== 0)
              for (l = n.child; l !== null; ) {
                if (r = Kc(l), r !== null) {
                  for (n.flags |= 128, Jl(c, !1), l = r.updateQueue, n.updateQueue = l, ir(n, l), n.subtreeFlags = 0, l = u, u = n.child; u !== null; )
                    W0(u, l), u = u.sibling;
                  return K(
                    It,
                    It.current & 1 | 2
                  ), nt && bu(n, c.treeForkCount), n.child;
                }
                l = l.sibling;
              }
            c.tail !== null && El() > yr && (n.flags |= 128, s = !0, Jl(c, !1), n.lanes = 4194304);
          }
        else {
          if (!s)
            if (l = Kc(r), l !== null) {
              if (n.flags |= 128, s = !0, l = l.updateQueue, n.updateQueue = l, ir(n, l), Jl(c, !0), c.tail === null && c.tailMode === "hidden" && !r.alternate && !nt)
                return Gt(n), null;
            } else
              2 * El() - c.renderingStartTime > yr && u !== 536870912 && (n.flags |= 128, s = !0, Jl(c, !1), n.lanes = 4194304);
          c.isBackwards ? (r.sibling = n.child, n.child = r) : (l = c.last, l !== null ? l.sibling = r : n.child = r, c.last = r);
        }
        return c.tail !== null ? (l = c.tail, c.rendering = l, c.tail = l.sibling, c.renderingStartTime = El(), l.sibling = null, u = It.current, K(
          It,
          s ? u & 1 | 2 : u & 1
        ), nt && bu(n, c.treeForkCount), l) : (Gt(n), null);
      case 22:
      case 23:
        return ua(n), ws(), c = n.memoizedState !== null, l !== null ? l.memoizedState !== null !== c && (n.flags |= 8192) : c && (n.flags |= 8192), c ? (u & 536870912) !== 0 && (n.flags & 128) === 0 && (Gt(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : Gt(n), u = n.updateQueue, u !== null && ir(n, u.retryQueue), u = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), c = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (c = n.memoizedState.cachePool.pool), c !== u && (n.flags |= 2048), l !== null && A(qa), null;
      case 24:
        return u = null, l !== null && (u = l.memoizedState.cache), n.memoizedState.cache !== u && (n.flags |= 2048), la(il), Gt(n), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(j(156, n.tag));
  }
  function ov(l, n) {
    switch (Ko(n), n.tag) {
      case 1:
        return l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 3:
        return la(il), St(), l = n.flags, (l & 65536) !== 0 && (l & 128) === 0 ? (n.flags = l & -65537 | 128, n) : null;
      case 26:
      case 27:
      case 5:
        return pn(n), null;
      case 31:
        if (n.memoizedState !== null) {
          if (ua(n), n.alternate === null)
            throw Error(j(340));
          Qn();
        }
        return l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 13:
        if (ua(n), l = n.memoizedState, l !== null && l.dehydrated !== null) {
          if (n.alternate === null)
            throw Error(j(340));
          Qn();
        }
        return l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 19:
        return A(It), null;
      case 4:
        return St(), null;
      case 10:
        return la(n.type), null;
      case 22:
      case 23:
        return ua(n), ws(), l !== null && A(qa), l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 24:
        return la(il), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Ly(l, n) {
    switch (Ko(n), n.tag) {
      case 3:
        la(il), St();
        break;
      case 26:
      case 27:
      case 5:
        pn(n);
        break;
      case 4:
        St();
        break;
      case 31:
        n.memoizedState !== null && ua(n);
        break;
      case 13:
        ua(n);
        break;
      case 19:
        A(It);
        break;
      case 10:
        la(n.type);
        break;
      case 22:
      case 23:
        ua(n), ws(), l !== null && A(qa);
        break;
      case 24:
        la(il);
    }
  }
  function cr(l, n) {
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
      Rt(n, n.return, g);
    }
  }
  function ga(l, n, u) {
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
              var T = u, H = g;
              try {
                H();
              } catch (V) {
                Rt(
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
      Rt(n, n.return, V);
    }
  }
  function lo(l) {
    var n = l.updateQueue;
    if (n !== null) {
      var u = l.stateNode;
      try {
        wd(n, u);
      } catch (c) {
        Rt(l, l.return, c);
      }
    }
  }
  function rh(l, n, u) {
    u.props = eo(
      l.type,
      l.memoizedProps
    ), u.state = l.memoizedState;
    try {
      u.componentWillUnmount();
    } catch (c) {
      Rt(l, n, c);
    }
  }
  function Kn(l, n) {
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
      Rt(l, n, s);
    }
  }
  function Sa(l, n) {
    var u = l.ref, c = l.refCleanup;
    if (u !== null)
      if (typeof c == "function")
        try {
          c();
        } catch (s) {
          Rt(l, n, s);
        } finally {
          l.refCleanup = null, l = l.alternate, l != null && (l.refCleanup = null);
        }
      else if (typeof u == "function")
        try {
          u(null);
        } catch (s) {
          Rt(l, n, s);
        }
      else u.current = null;
  }
  function Vy(l) {
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
      Rt(l, l.return, s);
    }
  }
  function dh(l, n, u) {
    try {
      var c = l.stateNode;
      tS(c, l.type, u, n), c[Lt] = n;
    } catch (s) {
      Rt(l, l.return, s);
    }
  }
  function Zy(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && Qu(l.type) || l.tag === 4;
  }
  function hh(l) {
    e: for (; ; ) {
      for (; l.sibling === null; ) {
        if (l.return === null || Zy(l.return)) return null;
        l = l.return;
      }
      for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18; ) {
        if (l.tag === 27 && Qu(l.type) || l.flags & 2 || l.child === null || l.tag === 4) continue e;
        l.child.return = l, l = l.child;
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function df(l, n, u) {
    var c = l.tag;
    if (c === 5 || c === 6)
      l = l.stateNode, n ? (u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u).insertBefore(l, n) : (n = u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u, n.appendChild(l), u = u._reactRootContainer, u != null || n.onclick !== null || (n.onclick = wl));
    else if (c !== 4 && (c === 27 && Qu(l.type) && (u = l.stateNode, n = null), l = l.child, l !== null))
      for (df(l, n, u), l = l.sibling; l !== null; )
        df(l, n, u), l = l.sibling;
  }
  function ao(l, n, u) {
    var c = l.tag;
    if (c === 5 || c === 6)
      l = l.stateNode, n ? u.insertBefore(l, n) : u.appendChild(l);
    else if (c !== 4 && (c === 27 && Qu(l.type) && (u = l.stateNode), l = l.child, l !== null))
      for (ao(l, n, u), l = l.sibling; l !== null; )
        ao(l, n, u), l = l.sibling;
  }
  function mh(l) {
    var n = l.stateNode, u = l.memoizedProps;
    try {
      for (var c = l.type, s = n.attributes; s.length; )
        n.removeAttributeNode(s[0]);
      Kl(n, c, u), n[vl] = l, n[Lt] = u;
    } catch (r) {
      Rt(l, l.return, r);
    }
  }
  var Yu = !1, Sl = !1, Jy = !1, Ky = typeof WeakSet == "function" ? WeakSet : Set, Al = null;
  function Ig(l, n) {
    if (l = l.containerInfo, _r = Mi, l = jc(l), si(l)) {
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
            var m = 0, g = -1, T = -1, H = 0, V = 0, $ = l, B = null;
            t: for (; ; ) {
              for (var G; $ !== u || s !== 0 && $.nodeType !== 3 || (g = m + s), $ !== r || c !== 0 && $.nodeType !== 3 || (T = m + c), $.nodeType === 3 && (m += $.nodeValue.length), (G = $.firstChild) !== null; )
                B = $, $ = G;
              for (; ; ) {
                if ($ === l) break t;
                if (B === u && ++H === s && (g = m), B === r && ++V === c && (T = m), (G = $.nextSibling) !== null) break;
                $ = B, B = $.parentNode;
              }
              $ = G;
            }
            u = g === -1 || T === -1 ? null : { start: g, end: T };
          } else u = null;
        }
      u = u || { start: 0, end: 0 };
    } else u = null;
    for (Nh = { focusedElem: l, selectionRange: u }, Mi = !1, Al = n; Al !== null; )
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
                  var de = eo(
                    u.type,
                    s
                  );
                  l = c.getSnapshotBeforeUpdate(
                    de,
                    r
                  ), c.__reactInternalSnapshotBeforeUpdate = l;
                } catch (ze) {
                  Rt(
                    u,
                    u.return,
                    ze
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
              if ((l & 1024) !== 0) throw Error(j(163));
          }
          if (l = n.sibling, l !== null) {
            l.return = n.return, Al = l;
            break;
          }
          Al = n.return;
        }
  }
  function no(l, n, u) {
    var c = u.flags;
    switch (u.tag) {
      case 0:
      case 11:
      case 15:
        ju(l, u), c & 4 && cr(5, u);
        break;
      case 1:
        if (ju(l, u), c & 4)
          if (l = u.stateNode, n === null)
            try {
              l.componentDidMount();
            } catch (m) {
              Rt(u, u.return, m);
            }
          else {
            var s = eo(
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
              Rt(
                u,
                u.return,
                m
              );
            }
          }
        c & 64 && lo(u), c & 512 && Kn(u, u.return);
        break;
      case 3:
        if (ju(l, u), c & 64 && (l = u.updateQueue, l !== null)) {
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
            wd(l, n);
          } catch (m) {
            Rt(u, u.return, m);
          }
        }
        break;
      case 27:
        n === null && c & 4 && mh(u);
      case 26:
      case 5:
        ju(l, u), n === null && c & 4 && Vy(u), c & 512 && Kn(u, u.return);
        break;
      case 12:
        ju(l, u);
        break;
      case 31:
        ju(l, u), c & 4 && ky(l, u);
        break;
      case 13:
        ju(l, u), c & 4 && fv(l, u), c & 64 && (l = u.memoizedState, l !== null && (l = l.dehydrated, l !== null && (u = eS.bind(
          null,
          u
        ), Of(l, u))));
        break;
      case 22:
        if (c = u.memoizedState !== null || Yu, !c) {
          n = n !== null && n.memoizedState !== null || Sl, s = Yu;
          var r = Sl;
          Yu = c, (Sl = n) && !r ? Ti(
            l,
            u,
            (u.subtreeFlags & 8772) !== 0
          ) : ju(l, u), Yu = s, Sl = r;
        }
        break;
      case 30:
        break;
      default:
        ju(l, u);
    }
  }
  function or(l) {
    var n = l.alternate;
    n !== null && (l.alternate = null, or(n)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (n = l.stateNode, n !== null && Xi(n)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null;
  }
  var Vt = null, ia = !1;
  function qu(l, n, u) {
    for (u = u.child; u !== null; )
      $y(l, n, u), u = u.sibling;
  }
  function $y(l, n, u) {
    if (pl && typeof pl.onCommitFiberUnmount == "function")
      try {
        pl.onCommitFiberUnmount(xn, u);
      } catch {
      }
    switch (u.tag) {
      case 26:
        Sl || Sa(u, n), qu(
          l,
          n,
          u
        ), u.memoizedState ? u.memoizedState.count-- : u.stateNode && (u = u.stateNode, u.parentNode.removeChild(u));
        break;
      case 27:
        Sl || Sa(u, n);
        var c = Vt, s = ia;
        Qu(u.type) && (Vt = u.stateNode, ia = !1), qu(
          l,
          n,
          u
        ), _i(u.stateNode), Vt = c, ia = s;
        break;
      case 5:
        Sl || Sa(u, n);
      case 6:
        if (c = Vt, s = ia, Vt = null, qu(
          l,
          n,
          u
        ), Vt = c, ia = s, Vt !== null)
          if (ia)
            try {
              (Vt.nodeType === 9 ? Vt.body : Vt.nodeName === "HTML" ? Vt.ownerDocument.body : Vt).removeChild(u.stateNode);
            } catch (r) {
              Rt(
                u,
                n,
                r
              );
            }
          else
            try {
              Vt.removeChild(u.stateNode);
            } catch (r) {
              Rt(
                u,
                n,
                r
              );
            }
        break;
      case 18:
        Vt !== null && (ia ? (l = Vt, Rr(
          l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l,
          u.stateNode
        ), Mf(l)) : Rr(Vt, u.stateNode));
        break;
      case 4:
        c = Vt, s = ia, Vt = u.stateNode.containerInfo, ia = !0, qu(
          l,
          n,
          u
        ), Vt = c, ia = s;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        ga(2, u, n), Sl || ga(4, u, n), qu(
          l,
          n,
          u
        );
        break;
      case 1:
        Sl || (Sa(u, n), c = u.stateNode, typeof c.componentWillUnmount == "function" && rh(
          u,
          n,
          c
        )), qu(
          l,
          n,
          u
        );
        break;
      case 21:
        qu(
          l,
          n,
          u
        );
        break;
      case 22:
        Sl = (c = Sl) || u.memoizedState !== null, qu(
          l,
          n,
          u
        ), Sl = c;
        break;
      default:
        qu(
          l,
          n,
          u
        );
    }
  }
  function ky(l, n) {
    if (n.memoizedState === null && (l = n.alternate, l !== null && (l = l.memoizedState, l !== null))) {
      l = l.dehydrated;
      try {
        Mf(l);
      } catch (u) {
        Rt(n, n.return, u);
      }
    }
  }
  function fv(l, n) {
    if (n.memoizedState === null && (l = n.alternate, l !== null && (l = l.memoizedState, l !== null && (l = l.dehydrated, l !== null))))
      try {
        Mf(l);
      } catch (u) {
        Rt(n, n.return, u);
      }
  }
  function sv(l) {
    switch (l.tag) {
      case 31:
      case 13:
      case 19:
        var n = l.stateNode;
        return n === null && (n = l.stateNode = new Ky()), n;
      case 22:
        return l = l.stateNode, n = l._retryCache, n === null && (n = l._retryCache = new Ky()), n;
      default:
        throw Error(j(435, l.tag));
    }
  }
  function oc(l, n) {
    var u = sv(l);
    n.forEach(function(c) {
      if (!u.has(c)) {
        u.add(c);
        var s = cn.bind(null, l, c);
        c.then(s, s);
      }
    });
  }
  function ba(l, n) {
    var u = n.deletions;
    if (u !== null)
      for (var c = 0; c < u.length; c++) {
        var s = u[c], r = l, m = n, g = m;
        e: for (; g !== null; ) {
          switch (g.tag) {
            case 27:
              if (Qu(g.type)) {
                Vt = g.stateNode, ia = !1;
                break e;
              }
              break;
            case 5:
              Vt = g.stateNode, ia = !1;
              break e;
            case 3:
            case 4:
              Vt = g.stateNode.containerInfo, ia = !0;
              break e;
          }
          g = g.return;
        }
        if (Vt === null) throw Error(j(160));
        $y(r, m, s), Vt = null, ia = !1, r = s.alternate, r !== null && (r.return = null), s.return = null;
      }
    if (n.subtreeFlags & 13886)
      for (n = n.child; n !== null; )
        pt(n, l), n = n.sibling;
  }
  var _n = null;
  function pt(l, n) {
    var u = l.alternate, c = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        ba(n, l), ca(l), c & 4 && (ga(3, l, l.return), cr(3, l), ga(5, l, l.return));
        break;
      case 1:
        ba(n, l), ca(l), c & 512 && (Sl || u === null || Sa(u, u.return)), c & 64 && Yu && (l = l.updateQueue, l !== null && (c = l.callbacks, c !== null && (u = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = u === null ? c : u.concat(c))));
        break;
      case 26:
        var s = _n;
        if (ba(n, l), ca(l), c & 512 && (Sl || u === null || Sa(u, u.return)), c & 4) {
          var r = u !== null ? u.memoizedState : null;
          if (c = l.memoizedState, u === null)
            if (c === null)
              if (l.stateNode === null) {
                e: {
                  c = l.type, u = l.memoizedProps, s = s.ownerDocument || s;
                  t: switch (c) {
                    case "title":
                      r = s.getElementsByTagName("title")[0], (!r || r[qo] || r[vl] || r.namespaceURI === "http://www.w3.org/2000/svg" || r.hasAttribute("itemprop")) && (r = s.createElement(c), s.head.insertBefore(
                        r,
                        s.querySelector("head > title")
                      )), Kl(r, c, u), r[vl] = l, Tl(r), c = r;
                      break e;
                    case "link":
                      var m = Xh(
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
                      r = s.createElement(c), Kl(r, c, u), s.head.appendChild(r);
                      break;
                    case "meta":
                      if (m = Xh(
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
                      r = s.createElement(c), Kl(r, c, u), s.head.appendChild(r);
                      break;
                    default:
                      throw Error(j(468, c));
                  }
                  r[vl] = l, Tl(r), c = r;
                }
                l.stateNode = c;
              } else
                Dp(
                  s,
                  l.type,
                  l.stateNode
                );
            else
              l.stateNode = _p(
                s,
                c,
                l.memoizedProps
              );
          else
            r !== c ? (r === null ? u.stateNode !== null && (u = u.stateNode, u.parentNode.removeChild(u)) : r.count--, c === null ? Dp(
              s,
              l.type,
              l.stateNode
            ) : _p(
              s,
              c,
              l.memoizedProps
            )) : c === null && l.stateNode !== null && dh(
              l,
              l.memoizedProps,
              u.memoizedProps
            );
        }
        break;
      case 27:
        ba(n, l), ca(l), c & 512 && (Sl || u === null || Sa(u, u.return)), u !== null && c & 4 && dh(
          l,
          l.memoizedProps,
          u.memoizedProps
        );
        break;
      case 5:
        if (ba(n, l), ca(l), c & 512 && (Sl || u === null || Sa(u, u.return)), l.flags & 32) {
          s = l.stateNode;
          try {
            Mc(s, "");
          } catch (de) {
            Rt(l, l.return, de);
          }
        }
        c & 4 && l.stateNode != null && (s = l.memoizedProps, dh(
          l,
          s,
          u !== null ? u.memoizedProps : s
        )), c & 1024 && (Jy = !0);
        break;
      case 6:
        if (ba(n, l), ca(l), c & 4) {
          if (l.stateNode === null)
            throw Error(j(162));
          c = l.memoizedProps, u = l.stateNode;
          try {
            u.nodeValue = c;
          } catch (de) {
            Rt(l, l.return, de);
          }
        }
        break;
      case 3:
        if (Hr = null, s = _n, _n = ho(n.containerInfo), ba(n, l), _n = s, ca(l), c & 4 && u !== null && u.memoizedState.isDehydrated)
          try {
            Mf(n.containerInfo);
          } catch (de) {
            Rt(l, l.return, de);
          }
        Jy && (Jy = !1, rv(l));
        break;
      case 4:
        c = _n, _n = ho(
          l.stateNode.containerInfo
        ), ba(n, l), ca(l), _n = c;
        break;
      case 12:
        ba(n, l), ca(l);
        break;
      case 31:
        ba(n, l), ca(l), c & 4 && (c = l.updateQueue, c !== null && (l.updateQueue = null, oc(l, c)));
        break;
      case 13:
        ba(n, l), ca(l), l.child.flags & 8192 && l.memoizedState !== null != (u !== null && u.memoizedState !== null) && (mr = El()), c & 4 && (c = l.updateQueue, c !== null && (l.updateQueue = null, oc(l, c)));
        break;
      case 22:
        s = l.memoizedState !== null;
        var T = u !== null && u.memoizedState !== null, H = Yu, V = Sl;
        if (Yu = H || s, Sl = V || T, ba(n, l), Sl = V, Yu = H, ca(l), c & 8192)
          e: for (n = l.stateNode, n._visibility = s ? n._visibility & -2 : n._visibility | 1, s && (u === null || T || Yu || Sl || uo(l)), u = null, n = l; ; ) {
            if (n.tag === 5 || n.tag === 26) {
              if (u === null) {
                T = u = n;
                try {
                  if (r = T.stateNode, s)
                    m = r.style, typeof m.setProperty == "function" ? m.setProperty("display", "none", "important") : m.display = "none";
                  else {
                    g = T.stateNode;
                    var $ = T.memoizedProps.style, B = $ != null && $.hasOwnProperty("display") ? $.display : null;
                    g.style.display = B == null || typeof B == "boolean" ? "" : ("" + B).trim();
                  }
                } catch (de) {
                  Rt(T, T.return, de);
                }
              }
            } else if (n.tag === 6) {
              if (u === null) {
                T = n;
                try {
                  T.stateNode.nodeValue = s ? "" : T.memoizedProps;
                } catch (de) {
                  Rt(T, T.return, de);
                }
              }
            } else if (n.tag === 18) {
              if (u === null) {
                T = n;
                try {
                  var G = T.stateNode;
                  s ? bp(G, !0) : bp(T.stateNode, !1);
                } catch (de) {
                  Rt(T, T.return, de);
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
        c & 4 && (c = l.updateQueue, c !== null && (u = c.retryQueue, u !== null && (c.retryQueue = null, oc(l, u))));
        break;
      case 19:
        ba(n, l), ca(l), c & 4 && (c = l.updateQueue, c !== null && (l.updateQueue = null, oc(l, c)));
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
          if (Zy(c)) {
            u = c;
            break;
          }
          c = c.return;
        }
        if (u == null) throw Error(j(160));
        switch (u.tag) {
          case 27:
            var s = u.stateNode, r = hh(l);
            ao(l, r, s);
            break;
          case 5:
            var m = u.stateNode;
            u.flags & 32 && (Mc(m, ""), u.flags &= -33);
            var g = hh(l);
            ao(l, g, m);
            break;
          case 3:
          case 4:
            var T = u.stateNode.containerInfo, H = hh(l);
            df(
              l,
              H,
              T
            );
            break;
          default:
            throw Error(j(161));
        }
      } catch (V) {
        Rt(l, l.return, V);
      }
      l.flags &= -3;
    }
    n & 4096 && (l.flags &= -4097);
  }
  function rv(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var n = l;
        rv(n), n.tag === 5 && n.flags & 1024 && n.stateNode.reset(), l = l.sibling;
      }
  }
  function ju(l, n) {
    if (n.subtreeFlags & 8772)
      for (n = n.child; n !== null; )
        no(l, n.alternate, n), n = n.sibling;
  }
  function uo(l) {
    for (l = l.child; l !== null; ) {
      var n = l;
      switch (n.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          ga(4, n, n.return), uo(n);
          break;
        case 1:
          Sa(n, n.return);
          var u = n.stateNode;
          typeof u.componentWillUnmount == "function" && rh(
            n,
            n.return,
            u
          ), uo(n);
          break;
        case 27:
          _i(n.stateNode);
        case 26:
        case 5:
          Sa(n, n.return), uo(n);
          break;
        case 22:
          n.memoizedState === null && uo(n);
          break;
        case 30:
          uo(n);
          break;
        default:
          uo(n);
      }
      l = l.sibling;
    }
  }
  function Ti(l, n, u) {
    for (u = u && (n.subtreeFlags & 8772) !== 0, n = n.child; n !== null; ) {
      var c = n.alternate, s = l, r = n, m = r.flags;
      switch (r.tag) {
        case 0:
        case 11:
        case 15:
          Ti(
            s,
            r,
            u
          ), cr(4, r);
          break;
        case 1:
          if (Ti(
            s,
            r,
            u
          ), c = r, s = c.stateNode, typeof s.componentDidMount == "function")
            try {
              s.componentDidMount();
            } catch (H) {
              Rt(c, c.return, H);
            }
          if (c = r, s = c.updateQueue, s !== null) {
            var g = c.stateNode;
            try {
              var T = s.shared.hiddenCallbacks;
              if (T !== null)
                for (s.shared.hiddenCallbacks = null, s = 0; s < T.length; s++)
                  Jc(T[s], g);
            } catch (H) {
              Rt(c, c.return, H);
            }
          }
          u && m & 64 && lo(r), Kn(r, r.return);
          break;
        case 27:
          mh(r);
        case 26:
        case 5:
          Ti(
            s,
            r,
            u
          ), u && c === null && m & 4 && Vy(r), Kn(r, r.return);
          break;
        case 12:
          Ti(
            s,
            r,
            u
          );
          break;
        case 31:
          Ti(
            s,
            r,
            u
          ), u && m & 4 && ky(s, r);
          break;
        case 13:
          Ti(
            s,
            r,
            u
          ), u && m & 4 && fv(s, r);
          break;
        case 22:
          r.memoizedState === null && Ti(
            s,
            r,
            u
          ), Kn(r, r.return);
          break;
        case 30:
          break;
        default:
          Ti(
            s,
            r,
            u
          );
      }
      n = n.sibling;
    }
  }
  function fr(l, n) {
    var u = null;
    l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), l = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (l = n.memoizedState.cachePool.pool), l !== u && (l != null && l.refCount++, u != null && Lc(u));
  }
  function yh(l, n) {
    l = null, n.alternate !== null && (l = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== l && (n.refCount++, l != null && Lc(l));
  }
  function Dn(l, n, u, c) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; )
        Wy(
          l,
          n,
          u,
          c
        ), n = n.sibling;
  }
  function Wy(l, n, u, c) {
    var s = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        Dn(
          l,
          n,
          u,
          c
        ), s & 2048 && cr(9, n);
        break;
      case 1:
        Dn(
          l,
          n,
          u,
          c
        );
        break;
      case 3:
        Dn(
          l,
          n,
          u,
          c
        ), s & 2048 && (l = null, n.alternate !== null && (l = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== l && (n.refCount++, l != null && Lc(l)));
        break;
      case 12:
        if (s & 2048) {
          Dn(
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
            Rt(n, n.return, T);
          }
        } else
          Dn(
            l,
            n,
            u,
            c
          );
        break;
      case 31:
        Dn(
          l,
          n,
          u,
          c
        );
        break;
      case 13:
        Dn(
          l,
          n,
          u,
          c
        );
        break;
      case 23:
        break;
      case 22:
        r = n.stateNode, m = n.alternate, n.memoizedState !== null ? r._visibility & 2 ? Dn(
          l,
          n,
          u,
          c
        ) : sr(l, n) : r._visibility & 2 ? Dn(
          l,
          n,
          u,
          c
        ) : (r._visibility |= 2, xu(
          l,
          n,
          u,
          c,
          (n.subtreeFlags & 10256) !== 0 || !1
        )), s & 2048 && fr(m, n);
        break;
      case 24:
        Dn(
          l,
          n,
          u,
          c
        ), s & 2048 && yh(n.alternate, n);
        break;
      default:
        Dn(
          l,
          n,
          u,
          c
        );
    }
  }
  function xu(l, n, u, c, s) {
    for (s = s && ((n.subtreeFlags & 10256) !== 0 || !1), n = n.child; n !== null; ) {
      var r = l, m = n, g = u, T = c, H = m.flags;
      switch (m.tag) {
        case 0:
        case 11:
        case 15:
          xu(
            r,
            m,
            g,
            T,
            s
          ), cr(8, m);
          break;
        case 23:
          break;
        case 22:
          var V = m.stateNode;
          m.memoizedState !== null ? V._visibility & 2 ? xu(
            r,
            m,
            g,
            T,
            s
          ) : sr(
            r,
            m
          ) : (V._visibility |= 2, xu(
            r,
            m,
            g,
            T,
            s
          )), s && H & 2048 && fr(
            m.alternate,
            m
          );
          break;
        case 24:
          xu(
            r,
            m,
            g,
            T,
            s
          ), s && H & 2048 && yh(m.alternate, m);
          break;
        default:
          xu(
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
  function sr(l, n) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; ) {
        var u = l, c = n, s = c.flags;
        switch (c.tag) {
          case 22:
            sr(u, c), s & 2048 && fr(
              c.alternate,
              c
            );
            break;
          case 24:
            sr(u, c), s & 2048 && yh(c.alternate, c);
            break;
          default:
            sr(u, c);
        }
        n = n.sibling;
      }
  }
  var rr = 8192;
  function Ea(l, n, u) {
    if (l.subtreeFlags & rr)
      for (l = l.child; l !== null; )
        hf(
          l,
          n,
          u
        ), l = l.sibling;
  }
  function hf(l, n, u) {
    switch (l.tag) {
      case 26:
        Ea(
          l,
          n,
          u
        ), l.flags & rr && l.memoizedState !== null && on(
          u,
          _n,
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
        var c = _n;
        _n = ho(l.stateNode.containerInfo), Ea(
          l,
          n,
          u
        ), _n = c;
        break;
      case 22:
        l.memoizedState === null && (c = l.alternate, c !== null && c.memoizedState !== null ? (c = rr, rr = 16777216, Ea(
          l,
          n,
          u
        ), rr = c) : Ea(
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
  function dv(l) {
    var n = l.alternate;
    if (n !== null && (l = n.child, l !== null)) {
      n.child = null;
      do
        n = l.sibling, l.sibling = null, l = n;
      while (l !== null);
    }
  }
  function io(l) {
    var n = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (n !== null)
        for (var u = 0; u < n.length; u++) {
          var c = n[u];
          Al = c, Iy(
            c,
            l
          );
        }
      dv(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; )
        Fy(l), l = l.sibling;
  }
  function Fy(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        io(l), l.flags & 2048 && ga(9, l, l.return);
        break;
      case 3:
        io(l);
        break;
      case 12:
        io(l);
        break;
      case 22:
        var n = l.stateNode;
        l.memoizedState !== null && n._visibility & 2 && (l.return === null || l.return.tag !== 13) ? (n._visibility &= -3, dr(l)) : io(l);
        break;
      default:
        io(l);
    }
  }
  function dr(l) {
    var n = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (n !== null)
        for (var u = 0; u < n.length; u++) {
          var c = n[u];
          Al = c, Iy(
            c,
            l
          );
        }
      dv(l);
    }
    for (l = l.child; l !== null; ) {
      switch (n = l, n.tag) {
        case 0:
        case 11:
        case 15:
          ga(8, n, n.return), dr(n);
          break;
        case 22:
          u = n.stateNode, u._visibility & 2 && (u._visibility &= -3, dr(n));
          break;
        default:
          dr(n);
      }
      l = l.sibling;
    }
  }
  function Iy(l, n) {
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
          Lc(u.memoizedState.cache);
      }
      if (c = u.child, c !== null) c.return = u, Al = c;
      else
        e: for (u = l; Al !== null; ) {
          c = Al;
          var s = c.sibling, r = c.return;
          if (or(c), c === u) {
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
  var Py = {
    getCacheForType: function(l) {
      var n = be(il), u = n.data.get(l);
      return u === void 0 && (u = l(), n.data.set(l, u)), u;
    },
    cacheSignal: function() {
      return be(il).controller.signal;
    }
  }, hv = typeof WeakMap == "function" ? WeakMap : Map, ht = 0, Ut = null, Pe = null, ut = 0, vt = 0, wa = null, qe = !1, fc = !1, hr = !1, Gu = 0, Kt = 0, Rn = 0, wu = 0, ep = 0, Xa = 0, sc = 0, ol = null, Qa = null, Mn = !1, mr = 0, Ai = 0, yr = 1 / 0, Et = null, Xu = null, ot = 0, rc = null, co = null, $n = 0, ph = 0, La = null, tp = null, oo = 0, vh = null;
  function Ta() {
    return (ht & 2) !== 0 && ut !== 0 ? ut & -ut : X.T !== null ? fo() : M0();
  }
  function lp() {
    if (Xa === 0)
      if ((ut & 536870912) === 0 || nt) {
        var l = I;
        I <<= 1, (I & 3932160) === 0 && (I = 262144), Xa = l;
      } else Xa = 536870912;
    return l = na.current, l !== null && (l.flags |= 32), Xa;
  }
  function Va(l, n, u) {
    (l === Ut && (vt === 2 || vt === 9) || l.cancelPendingCommit !== null) && (mf(l, 0), Oi(
      l,
      ut,
      Xa,
      !1
    )), _a(l, u), ((ht & 2) === 0 || l !== Ut) && (l === Ut && ((ht & 2) === 0 && (wu |= u), Kt === 4 && Oi(
      l,
      ut,
      Xa,
      !1
    )), kn(l));
  }
  function ap(l, n, u) {
    if ((ht & 6) !== 0) throw Error(j(327));
    var c = !u && (n & 127) === 0 && (n & l.expiredLanes) === 0 || ye(l, n), s = c ? Pg(l, n) : np(l, n, !0), r = c;
    do {
      if (s === 0) {
        fc && !c && Oi(l, n, 0, !1);
        break;
      } else {
        if (u = l.current.alternate, r && !gh(u)) {
          s = np(l, n, !1), r = !1;
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
              if (T && (mf(g, m).flags |= 256), m = np(
                g,
                m,
                !1
              ), m !== 2) {
                if (hr && !T) {
                  g.errorRecoveryDisabledLanes |= r, wu |= r, s = 4;
                  break e;
                }
                r = Qa, Qa = s, r !== null && (Qa === null ? Qa = r : Qa.push.apply(
                  Qa,
                  r
                ));
              }
              s = m;
            }
            if (r = !1, s !== 2) continue;
          }
        }
        if (s === 1) {
          mf(l, 0), Oi(l, n, 0, !0);
          break;
        }
        e: {
          switch (c = l, r = s, r) {
            case 0:
            case 1:
              throw Error(j(345));
            case 4:
              if ((n & 4194048) !== n) break;
            case 6:
              Oi(
                c,
                n,
                Xa,
                !qe
              );
              break e;
            case 2:
              Qa = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(j(329));
          }
          if ((n & 62914560) === n && (s = mr + 300 - El(), 10 < s)) {
            if (Oi(
              c,
              n,
              Xa,
              !qe
            ), Me(c, 0, !0) !== 0) break e;
            $n = n, c.timeoutHandle = Nv(
              mv.bind(
                null,
                c,
                u,
                Qa,
                Et,
                Mn,
                n,
                Xa,
                wu,
                sc,
                qe,
                r,
                "Throttled",
                -0,
                0
              ),
              s
            );
            break e;
          }
          mv(
            c,
            u,
            Qa,
            Et,
            Mn,
            n,
            Xa,
            wu,
            sc,
            qe,
            r,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    kn(l);
  }
  function mv(l, n, u, c, s, r, m, g, T, H, V, $, B, G) {
    if (l.timeoutHandle = -1, $ = n.subtreeFlags, $ & 8192 || ($ & 16785408) === 16785408) {
      $ = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: wl
      }, hf(
        n,
        r,
        $
      );
      var de = (r & 62914560) === r ? mr - El() : (r & 4194048) === r ? Ai - El() : 0;
      if (de = Fn(
        $,
        de
      ), de !== null) {
        $n = r, l.cancelPendingCommit = de(
          bv.bind(
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
            $,
            null,
            B,
            G
          )
        ), Oi(l, r, m, !H);
        return;
      }
    }
    bv(
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
  function gh(l) {
    for (var n = l; ; ) {
      var u = n.tag;
      if ((u === 0 || u === 11 || u === 15) && n.flags & 16384 && (u = n.updateQueue, u !== null && (u = u.stores, u !== null)))
        for (var c = 0; c < u.length; c++) {
          var s = u[c], r = s.getSnapshot;
          s = s.value;
          try {
            if (!Ca(r(), s)) return !1;
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
  function Oi(l, n, u, c) {
    n &= ~ep, n &= ~wu, l.suspendedLanes |= n, l.pingedLanes &= ~n, c && (l.warmLanes |= n), c = l.expirationTimes;
    for (var s = n; 0 < s; ) {
      var r = 31 - Rl(s), m = 1 << r;
      c[r] = -1, s &= ~m;
    }
    u !== 0 && Tc(l, u, n);
  }
  function pr() {
    return (ht & 6) === 0 ? (br(0), !1) : !0;
  }
  function vr() {
    if (Pe !== null) {
      if (vt === 0)
        var l = Pe.return;
      else
        l = Pe, Ln = Fi = null, kc(l), ac = null, Vc = 0, l = Pe;
      for (; l !== null; )
        Ly(l.alternate, l), l = l.return;
      Pe = null;
    }
  }
  function mf(l, n) {
    var u = l.timeoutHandle;
    u !== -1 && (l.timeoutHandle = -1, Yh(u)), u = l.cancelPendingCommit, u !== null && (l.cancelPendingCommit = null, u()), $n = 0, vr(), Ut = l, Pe = u = tn(l.current, null), ut = n, vt = 0, wa = null, qe = !1, fc = ye(l, n), hr = !1, sc = Xa = ep = wu = Rn = Kt = 0, Qa = ol = null, Mn = !1, (n & 8) !== 0 && (n |= n & 32);
    var c = l.entangledLanes;
    if (c !== 0)
      for (l = l.entanglements, c &= n; 0 < c; ) {
        var s = 31 - Rl(c), r = 1 << s;
        n |= l[s], c &= ~r;
      }
    return Gu = n, Pa(), u;
  }
  function yf(l, n) {
    xe = null, X.H = of, n === Vn || n === ec ? (n = cy(), vt = 3) : n === Bs ? (n = cy(), vt = 4) : vt = n === Yy ? 8 : n !== null && typeof n == "object" && typeof n.then == "function" ? 6 : 1, wa = n, Pe === null && (Kt = 1, ff(
      l,
      ln(n, l.current)
    ));
  }
  function pf() {
    var l = na.current;
    return l === null ? !0 : (ut & 4194048) === ut ? xa === null : (ut & 62914560) === ut || (ut & 536870912) !== 0 ? l === xa : !1;
  }
  function yv() {
    var l = X.H;
    return X.H = of, l === null ? of : l;
  }
  function pv() {
    var l = X.A;
    return X.A = Py, l;
  }
  function Sh() {
    Kt = 4, qe || (ut & 4194048) !== ut && na.current !== null || (fc = !0), (Rn & 134217727) === 0 && (wu & 134217727) === 0 || Ut === null || Oi(
      Ut,
      ut,
      Xa,
      !1
    );
  }
  function np(l, n, u) {
    var c = ht;
    ht |= 2;
    var s = yv(), r = pv();
    (Ut !== l || ut !== n) && (Et = null, mf(l, n)), n = !1;
    var m = Kt;
    e: do
      try {
        if (vt !== 0 && Pe !== null) {
          var g = Pe, T = wa;
          switch (vt) {
            case 8:
              vr(), m = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              na.current === null && (n = !0);
              var H = vt;
              if (vt = 0, wa = null, vf(l, g, T, H), u && fc) {
                m = 0;
                break e;
              }
              break;
            default:
              H = vt, vt = 0, wa = null, vf(l, g, T, H);
          }
        }
        vv(), m = Kt;
        break;
      } catch (V) {
        yf(l, V);
      }
    while (!0);
    return n && l.shellSuspendCounter++, Ln = Fi = null, ht = c, X.H = s, X.A = r, Pe === null && (Ut = null, ut = 0, Pa()), m;
  }
  function vv() {
    for (; Pe !== null; ) zi(Pe);
  }
  function Pg(l, n) {
    var u = ht;
    ht |= 2;
    var c = yv(), s = pv();
    Ut !== l || ut !== n ? (Et = null, yr = El() + 500, mf(l, n)) : fc = ye(
      l,
      n
    );
    e: do
      try {
        if (vt !== 0 && Pe !== null) {
          n = Pe;
          var r = wa;
          t: switch (vt) {
            case 1:
              vt = 0, wa = null, vf(l, n, r, 1);
              break;
            case 2:
            case 9:
              if (Ys(r)) {
                vt = 0, wa = null, Sv(n);
                break;
              }
              n = function() {
                vt !== 2 && vt !== 9 || Ut !== l || (vt = 7), kn(l);
              }, r.then(n, n);
              break e;
            case 3:
              vt = 7;
              break e;
            case 4:
              vt = 5;
              break e;
            case 7:
              Ys(r) ? (vt = 0, wa = null, Sv(n)) : (vt = 0, wa = null, vf(l, n, r, 7));
              break;
            case 5:
              var m = null;
              switch (Pe.tag) {
                case 26:
                  m = Pe.memoizedState;
                case 5:
                case 27:
                  var g = Pe;
                  if (m ? Qh(m) : g.stateNode.complete) {
                    vt = 0, wa = null;
                    var T = g.sibling;
                    if (T !== null) Pe = T;
                    else {
                      var H = g.return;
                      H !== null ? (Pe = H, gr(H)) : Pe = null;
                    }
                    break t;
                  }
              }
              vt = 0, wa = null, vf(l, n, r, 5);
              break;
            case 6:
              vt = 0, wa = null, vf(l, n, r, 6);
              break;
            case 8:
              vr(), Kt = 6;
              break e;
            default:
              throw Error(j(462));
          }
        }
        gv();
        break;
      } catch (V) {
        yf(l, V);
      }
    while (!0);
    return Ln = Fi = null, X.H = c, X.A = s, ht = u, Pe !== null ? 0 : (Ut = null, ut = 0, Pa(), Kt);
  }
  function gv() {
    for (; Pe !== null && !No(); )
      zi(Pe);
  }
  function zi(l) {
    var n = ur(l.alternate, l, Gu);
    l.memoizedProps = l.pendingProps, n === null ? gr(l) : Pe = n;
  }
  function Sv(l) {
    var n = l, u = n.alternate;
    switch (n.tag) {
      case 15:
      case 0:
        n = wy(
          u,
          n,
          n.pendingProps,
          n.type,
          void 0,
          ut
        );
        break;
      case 11:
        n = wy(
          u,
          n,
          n.pendingProps,
          n.type.render,
          n.ref,
          ut
        );
        break;
      case 5:
        kc(n);
      default:
        Ly(u, n), n = Pe = W0(n, Gu), n = ur(u, n, Gu);
    }
    l.memoizedProps = l.pendingProps, n === null ? gr(l) : Pe = n;
  }
  function vf(l, n, u, c) {
    Ln = Fi = null, kc(n), ac = null, Vc = 0;
    var s = n.return;
    try {
      if (uv(
        l,
        s,
        n,
        u,
        ut
      )) {
        Kt = 1, ff(
          l,
          ln(u, l.current)
        ), Pe = null;
        return;
      }
    } catch (r) {
      if (s !== null) throw Pe = s, r;
      Kt = 1, ff(
        l,
        ln(u, l.current)
      ), Pe = null;
      return;
    }
    n.flags & 32768 ? (nt || c === 1 ? l = !0 : fc || (ut & 536870912) !== 0 ? l = !1 : (qe = l = !0, (c === 2 || c === 9 || c === 3 || c === 6) && (c = na.current, c !== null && c.tag === 13 && (c.flags |= 16384))), up(n, l)) : gr(n);
  }
  function gr(l) {
    var n = l;
    do {
      if ((n.flags & 32768) !== 0) {
        up(
          n,
          qe
        );
        return;
      }
      l = n.return;
      var u = el(
        n.alternate,
        n,
        Gu
      );
      if (u !== null) {
        Pe = u;
        return;
      }
      if (n = n.sibling, n !== null) {
        Pe = n;
        return;
      }
      Pe = n = l;
    } while (n !== null);
    Kt === 0 && (Kt = 5);
  }
  function up(l, n) {
    do {
      var u = ov(l.alternate, l);
      if (u !== null) {
        u.flags &= 32767, Pe = u;
        return;
      }
      if (u = l.return, u !== null && (u.flags |= 32768, u.subtreeFlags = 0, u.deletions = null), !n && (l = l.sibling, l !== null)) {
        Pe = l;
        return;
      }
      Pe = l = u;
    } while (l !== null);
    Kt = 6, Pe = null;
  }
  function bv(l, n, u, c, s, r, m, g, T) {
    l.cancelPendingCommit = null;
    do
      bh();
    while (ot !== 0);
    if ((ht & 6) !== 0) throw Error(j(327));
    if (n !== null) {
      if (n === l.current) throw Error(j(177));
      if (r = n.lanes | n.childLanes, r |= ya, od(
        l,
        u,
        r,
        m,
        g,
        T
      ), l === Ut && (Pe = Ut = null, ut = 0), co = n, rc = l, $n = u, ph = r, La = s, tp = c, (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? (l.callbackNode = null, l.callbackPriority = 0, _v(xi, function() {
        return Eh(), null;
      })) : (l.callbackNode = null, l.callbackPriority = 0), c = (n.flags & 13878) !== 0, (n.subtreeFlags & 13878) !== 0 || c) {
        c = X.T, X.T = null, s = Y.p, Y.p = 2, m = ht, ht |= 4;
        try {
          Ig(l, n, u);
        } finally {
          ht = m, Y.p = s, X.T = c;
        }
      }
      ot = 1, Ev(), Tv(), Av();
    }
  }
  function Ev() {
    if (ot === 1) {
      ot = 0;
      var l = rc, n = co, u = (n.flags & 13878) !== 0;
      if ((n.subtreeFlags & 13878) !== 0 || u) {
        u = X.T, X.T = null;
        var c = Y.p;
        Y.p = 2;
        var s = ht;
        ht |= 4;
        try {
          pt(n, l);
          var r = Nh, m = jc(l.containerInfo), g = r.focusedElem, T = r.selectionRange;
          if (m !== g && g && g.ownerDocument && Pm(
            g.ownerDocument.documentElement,
            g
          )) {
            if (T !== null && si(g)) {
              var H = T.start, V = T.end;
              if (V === void 0 && (V = H), "selectionStart" in g)
                g.selectionStart = H, g.selectionEnd = Math.min(
                  V,
                  g.value.length
                );
              else {
                var $ = g.ownerDocument || document, B = $ && $.defaultView || window;
                if (B.getSelection) {
                  var G = B.getSelection(), de = g.textContent.length, ze = Math.min(T.start, de), Ht = T.end === void 0 ? ze : Math.min(T.end, de);
                  !G.extend && ze > Ht && (m = Ht, Ht = ze, ze = m);
                  var C = Im(
                    g,
                    ze
                  ), D = Im(
                    g,
                    Ht
                  );
                  if (C && D && (G.rangeCount !== 1 || G.anchorNode !== C.node || G.anchorOffset !== C.offset || G.focusNode !== D.node || G.focusOffset !== D.offset)) {
                    var U = $.createRange();
                    U.setStart(C.node, C.offset), G.removeAllRanges(), ze > Ht ? (G.addRange(U), G.extend(D.node, D.offset)) : (U.setEnd(D.node, D.offset), G.addRange(U));
                  }
                }
              }
            }
            for ($ = [], G = g; G = G.parentNode; )
              G.nodeType === 1 && $.push({
                element: G,
                left: G.scrollLeft,
                top: G.scrollTop
              });
            for (typeof g.focus == "function" && g.focus(), g = 0; g < $.length; g++) {
              var J = $[g];
              J.element.scrollLeft = J.left, J.element.scrollTop = J.top;
            }
          }
          Mi = !!_r, Nh = _r = null;
        } finally {
          ht = s, Y.p = c, X.T = u;
        }
      }
      l.current = n, ot = 2;
    }
  }
  function Tv() {
    if (ot === 2) {
      ot = 0;
      var l = rc, n = co, u = (n.flags & 8772) !== 0;
      if ((n.subtreeFlags & 8772) !== 0 || u) {
        u = X.T, X.T = null;
        var c = Y.p;
        Y.p = 2;
        var s = ht;
        ht |= 4;
        try {
          no(l, n.alternate, n);
        } finally {
          ht = s, Y.p = c, X.T = u;
        }
      }
      ot = 3;
    }
  }
  function Av() {
    if (ot === 4 || ot === 3) {
      ot = 0, uu();
      var l = rc, n = co, u = $n, c = tp;
      (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? ot = 5 : (ot = 0, co = rc = null, Ov(l, l.pendingLanes));
      var s = l.pendingLanes;
      if (s === 0 && (Xu = null), fd(u), n = n.stateNode, pl && typeof pl.onCommitFiberRoot == "function")
        try {
          pl.onCommitFiberRoot(
            xn,
            n,
            void 0,
            (n.current.flags & 128) === 128
          );
        } catch {
        }
      if (c !== null) {
        n = X.T, s = Y.p, Y.p = 2, X.T = null;
        try {
          for (var r = l.onRecoverableError, m = 0; m < c.length; m++) {
            var g = c[m];
            r(g.value, {
              componentStack: g.stack
            });
          }
        } finally {
          X.T = n, Y.p = s;
        }
      }
      ($n & 3) !== 0 && bh(), kn(l), s = l.pendingLanes, (u & 261930) !== 0 && (s & 42) !== 0 ? l === vh ? oo++ : (oo = 0, vh = l) : oo = 0, br(0);
    }
  }
  function Ov(l, n) {
    (l.pooledCacheLanes &= n) === 0 && (n = l.pooledCache, n != null && (l.pooledCache = null, Lc(n)));
  }
  function bh() {
    return Ev(), Tv(), Av(), Eh();
  }
  function Eh() {
    if (ot !== 5) return !1;
    var l = rc, n = ph;
    ph = 0;
    var u = fd($n), c = X.T, s = Y.p;
    try {
      Y.p = 32 > u ? 32 : u, X.T = null, u = La, La = null;
      var r = rc, m = $n;
      if (ot = 0, co = rc = null, $n = 0, (ht & 6) !== 0) throw Error(j(331));
      var g = ht;
      if (ht |= 4, Fy(r.current), Wy(
        r,
        r.current,
        m,
        u
      ), ht = g, br(0, !1), pl && typeof pl.onPostCommitFiberRoot == "function")
        try {
          pl.onPostCommitFiberRoot(xn, r);
        } catch {
        }
      return !0;
    } finally {
      Y.p = s, X.T = c, Ov(l, n);
    }
  }
  function zv(l, n, u) {
    n = ln(u, n), n = sf(l.stateNode, n, 2), l = yi(l, n, 2), l !== null && (_a(l, 2), kn(l));
  }
  function Rt(l, n, u) {
    if (l.tag === 3)
      zv(l, l, u);
    else
      for (; n !== null; ) {
        if (n.tag === 3) {
          zv(
            n,
            l,
            u
          );
          break;
        } else if (n.tag === 1) {
          var c = n.stateNode;
          if (typeof n.type.getDerivedStateFromError == "function" || typeof c.componentDidCatch == "function" && (Xu === null || !Xu.has(c))) {
            l = ln(u, l), u = nv(2), c = yi(n, u, 2), c !== null && (By(
              u,
              c,
              n,
              l
            ), _a(c, 2), kn(c));
            break;
          }
        }
        n = n.return;
      }
  }
  function Th(l, n, u) {
    var c = l.pingCache;
    if (c === null) {
      c = l.pingCache = new hv();
      var s = /* @__PURE__ */ new Set();
      c.set(n, s);
    } else
      s = c.get(n), s === void 0 && (s = /* @__PURE__ */ new Set(), c.set(n, s));
    s.has(u) || (hr = !0, s.add(u), l = ip.bind(null, l, n, u), n.then(l, l));
  }
  function ip(l, n, u) {
    var c = l.pingCache;
    c !== null && c.delete(n), l.pingedLanes |= l.suspendedLanes & u, l.warmLanes &= ~u, Ut === l && (ut & u) === u && (Kt === 4 || Kt === 3 && (ut & 62914560) === ut && 300 > El() - mr ? (ht & 2) === 0 && mf(l, 0) : ep |= u, sc === ut && (sc = 0)), kn(l);
  }
  function Ah(l, n) {
    n === 0 && (n = Be()), l = ta(l, n), l !== null && (_a(l, n), kn(l));
  }
  function eS(l) {
    var n = l.memoizedState, u = 0;
    n !== null && (u = n.retryLane), Ah(l, u);
  }
  function cn(l, n) {
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
        throw Error(j(314));
    }
    c !== null && c.delete(n), Ah(l, u);
  }
  function _v(l, n) {
    return Pf(l, n);
  }
  var Sr = null, dc = null, Oh = !1, zh = !1, cp = !1, hc = 0;
  function kn(l) {
    l !== dc && l.next === null && (dc === null ? Sr = dc = l : dc = dc.next = l), zh = !0, Oh || (Oh = !0, gf());
  }
  function br(l, n) {
    if (!cp && zh) {
      cp = !0;
      do
        for (var u = !1, c = Sr; c !== null; ) {
          if (l !== 0) {
            var s = c.pendingLanes;
            if (s === 0) var r = 0;
            else {
              var m = c.suspendedLanes, g = c.pingedLanes;
              r = (1 << 31 - Rl(42 | l) + 1) - 1, r &= s & ~(m & ~g), r = r & 201326741 ? r & 201326741 | 1 : r ? r | 2 : 0;
            }
            r !== 0 && (u = !0, Ar(c, r));
          } else
            r = ut, r = Me(
              c,
              c === Ut ? r : 0,
              c.cancelPendingCommit !== null || c.timeoutHandle !== -1
            ), (r & 3) === 0 || ye(c, r) || (u = !0, Ar(c, r));
          c = c.next;
        }
      while (u);
      cp = !1;
    }
  }
  function Er() {
    Tr();
  }
  function Tr() {
    zh = Oh = !1;
    var l = 0;
    hc !== 0 && Hv() && (l = hc);
    for (var n = El(), u = null, c = Sr; c !== null; ) {
      var s = c.next, r = op(c, n);
      r === 0 ? (c.next = null, u === null ? Sr = s : u.next = s, s === null && (dc = u)) : (u = c, (l !== 0 || (r & 3) !== 0) && (zh = !0)), c = s;
    }
    ot !== 0 && ot !== 5 || br(l), hc !== 0 && (hc = 0);
  }
  function op(l, n) {
    for (var u = l.suspendedLanes, c = l.pingedLanes, s = l.expirationTimes, r = l.pendingLanes & -62914561; 0 < r; ) {
      var m = 31 - Rl(r), g = 1 << m, T = s[m];
      T === -1 ? ((g & u) === 0 || (g & c) !== 0) && (s[m] = ct(g, n)) : T <= n && (l.expiredLanes |= g), r &= ~g;
    }
    if (n = Ut, u = ut, u = Me(
      l,
      l === n ? u : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), c = l.callbackNode, u === 0 || l === n && (vt === 2 || vt === 9) || l.cancelPendingCommit !== null)
      return c !== null && c !== null && he(c), l.callbackNode = null, l.callbackPriority = 0;
    if ((u & 3) === 0 || ye(l, u)) {
      if (n = u & -u, n === l.callbackPriority) return n;
      switch (c !== null && he(c), fd(u)) {
        case 2:
        case 8:
          u = Bo;
          break;
        case 32:
          u = xi;
          break;
        case 268435456:
          u = ts;
          break;
        default:
          u = xi;
      }
      return c = fp.bind(null, l), u = Pf(u, c), l.callbackPriority = n, l.callbackNode = u, n;
    }
    return c !== null && c !== null && he(c), l.callbackPriority = 2, l.callbackNode = null, 2;
  }
  function fp(l, n) {
    if (ot !== 0 && ot !== 5)
      return l.callbackNode = null, l.callbackPriority = 0, null;
    var u = l.callbackNode;
    if (bh() && l.callbackNode !== u)
      return null;
    var c = ut;
    return c = Me(
      l,
      l === Ut ? c : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), c === 0 ? null : (ap(l, c, n), op(l, El()), l.callbackNode != null && l.callbackNode === u ? fp.bind(null, l) : null);
  }
  function Ar(l, n) {
    if (bh()) return null;
    ap(l, n, !0);
  }
  function gf() {
    Af(function() {
      (ht & 6) !== 0 ? Pf(
        es,
        Er
      ) : Tr();
    });
  }
  function fo() {
    if (hc === 0) {
      var l = Ii;
      l === 0 && (l = M, M <<= 1, (M & 261888) === 0 && (M = 256)), hc = l;
    }
    return hc;
  }
  function sp(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : Qi("" + l);
  }
  function Dv(l, n) {
    var u = n.ownerDocument.createElement("input");
    return u.name = n.name, u.value = n.value, l.id && u.setAttribute("form", l.id), n.parentNode.insertBefore(u, n), l = new FormData(l), u.parentNode.removeChild(u), l;
  }
  function Sf(l, n, u, c, s) {
    if (n === "submit" && u && u.stateNode === s) {
      var r = sp(
        (s[Lt] || null).action
      ), m = c.submitter;
      m && (n = (n = m[Lt] || null) ? sp(n.formAction) : m.getAttribute("formAction"), n !== null && (r = n, m = null));
      var g = new ys(
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
                if (hc !== 0) {
                  var T = m ? Dv(s, m) : new FormData(s);
                  nh(
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
                typeof r == "function" && (g.preventDefault(), T = m ? Dv(s, m) : new FormData(s), nh(
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
  for (var so = 0; so < wn.length; so++) {
    var _h = wn[so], Dh = _h.toLowerCase(), rp = _h[0].toUpperCase() + _h.slice(1);
    Ua(
      Dh,
      "on" + rp
    );
  }
  Ua(jt, "onAnimationEnd"), Ua(Ts, "onAnimationIteration"), Ua(ty, "onAnimationStart"), Ua("dblclick", "onDoubleClick"), Ua("focusin", "onFocus"), Ua("focusout", "onBlur"), Ua(ly, "onTransitionRun"), Ua(xc, "onTransitionStart"), Ua(As, "onTransitionCancel"), Ua(Gn, "onTransitionEnd"), Rc("onMouseEnter", ["mouseout", "mouseover"]), Rc("onMouseLeave", ["mouseout", "mouseover"]), Rc("onPointerEnter", ["pointerout", "pointerover"]), Rc("onPointerLeave", ["pointerout", "pointerover"]), Wa(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), Wa(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), Wa("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Wa(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), Wa(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), Wa(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var ro = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), Rv = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ro)
  );
  function dp(l, n) {
    n = (n & 4) !== 0;
    for (var u = 0; u < l.length; u++) {
      var c = l[u], s = c.event;
      c = c.listeners;
      e: {
        var r = void 0;
        if (n)
          for (var m = c.length - 1; 0 <= m; m--) {
            var g = c[m], T = g.instance, H = g.currentTarget;
            if (g = g.listener, T !== r && s.isPropagationStopped())
              break e;
            r = g, s.currentTarget = H;
            try {
              r(s);
            } catch (V) {
              Wi(V);
            }
            s.currentTarget = null, r = T;
          }
        else
          for (m = 0; m < c.length; m++) {
            if (g = c[m], T = g.instance, H = g.currentTarget, g = g.listener, T !== r && s.isPropagationStopped())
              break e;
            r = g, s.currentTarget = H;
            try {
              r(s);
            } catch (V) {
              Wi(V);
            }
            s.currentTarget = null, r = T;
          }
      }
    }
  }
  function lt(l, n) {
    var u = n[us];
    u === void 0 && (u = n[us] = /* @__PURE__ */ new Set());
    var c = l + "__bubble";
    u.has(c) || (Or(n, l, 2, !1), u.add(c));
  }
  function Rh(l, n, u) {
    var c = 0;
    n && (c |= 4), Or(
      u,
      l,
      c,
      n
    );
  }
  var Mh = "_reactListening" + Math.random().toString(36).slice(2);
  function hp(l) {
    if (!l[Mh]) {
      l[Mh] = !0, Ra.forEach(function(u) {
        u !== "selectionchange" && (Rv.has(u) || Rh(u, !1, l), Rh(u, !0, l));
      });
      var n = l.nodeType === 9 ? l : l.ownerDocument;
      n === null || n[Mh] || (n[Mh] = !0, Rh("selectionchange", !1, n));
    }
  }
  function Or(l, n, u, c) {
    switch (Br(n)) {
      case 2:
        var s = oa;
        break;
      case 8:
        s = Vu;
        break;
      default:
        s = Nn;
    }
    u = s.bind(
      null,
      n,
      u,
      l
    ), s = void 0, !Gm || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (s = !0), c ? s !== void 0 ? l.addEventListener(n, u, {
      capture: !0,
      passive: s
    }) : l.addEventListener(n, u, !0) : s !== void 0 ? l.addEventListener(n, u, {
      passive: s
    }) : l.addEventListener(n, u, !1);
  }
  function bf(l, n, u, c, s) {
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
            if (m = Oc(g), m === null) return;
            if (T = m.tag, T === 5 || T === 6 || T === 26 || T === 27) {
              c = r = m;
              continue e;
            }
            g = g.parentNode;
          }
        }
        c = c.return;
      }
    hs(function() {
      var H = r, V = md(u), $ = [];
      e: {
        var B = k0.get(l);
        if (B !== void 0) {
          var G = ys, de = l;
          switch (l) {
            case "keypress":
              if (ms(u) === 0) break e;
            case "keydown":
            case "keyup":
              G = bd;
              break;
            case "focusin":
              de = "focus", G = Sd;
              break;
            case "focusout":
              de = "blur", G = Sd;
              break;
            case "beforeblur":
            case "afterblur":
              G = Sd;
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
              G = q0;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              G = j0;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              G = Kg;
              break;
            case jt:
            case Ts:
            case ty:
              G = Lm;
              break;
            case Gn:
              G = L0;
              break;
            case "scroll":
            case "scrollend":
              G = Y0;
              break;
            case "wheel":
              G = Zm;
              break;
            case "copy":
            case "cut":
            case "paste":
              G = Hc;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              G = Td;
              break;
            case "toggle":
            case "beforetoggle":
              G = V0;
          }
          var ze = (n & 4) !== 0, Ht = !ze && (l === "scroll" || l === "scrollend"), C = ze ? B !== null ? B + "Capture" : null : B;
          ze = [];
          for (var D = H, U; D !== null; ) {
            var J = D;
            if (U = J.stateNode, J = J.tag, J !== 5 && J !== 26 && J !== 27 || U === null || C === null || (J = Xo(D, C), J != null && ze.push(
              zr(D, J, U)
            )), Ht) break;
            D = D.return;
          }
          0 < ze.length && (B = new G(
            B,
            de,
            null,
            u,
            V
          ), $.push({ event: B, listeners: ze }));
        }
      }
      if ((n & 7) === 0) {
        e: {
          if (B = l === "mouseover" || l === "pointerover", G = l === "mouseout" || l === "pointerout", B && u !== ds && (de = u.relatedTarget || u.fromElement) && (Oc(de) || de[Ac]))
            break e;
          if ((G || B) && (B = V.window === V ? V : (B = V.ownerDocument) ? B.defaultView || B.parentWindow : window, G ? (de = u.relatedTarget || u.toElement, G = H, de = de ? Oc(de) : null, de !== null && (Ht = Ne(de), ze = de.tag, de !== Ht || ze !== 5 && ze !== 27 && ze !== 6) && (de = null)) : (G = null, de = H), G !== de)) {
            if (ze = q0, J = "onMouseLeave", C = "onMouseEnter", D = "mouse", (l === "pointerout" || l === "pointerover") && (ze = Td, J = "onPointerLeave", C = "onPointerEnter", D = "pointer"), Ht = G == null ? B : jo(G), U = de == null ? B : jo(de), B = new ze(
              J,
              D + "leave",
              G,
              u,
              V
            ), B.target = Ht, B.relatedTarget = U, J = null, Oc(V) === H && (ze = new ze(
              C,
              D + "enter",
              de,
              u,
              V
            ), ze.target = U, ze.relatedTarget = Ht, J = ze), Ht = J, G && de)
              t: {
                for (ze = Mv, C = G, D = de, U = 0, J = C; J; J = ze(J))
                  U++;
                J = 0;
                for (var Se = D; Se; Se = ze(Se))
                  J++;
                for (; 0 < U - J; )
                  C = ze(C), U--;
                for (; 0 < J - U; )
                  D = ze(D), J--;
                for (; U--; ) {
                  if (C === D || D !== null && C === D.alternate) {
                    ze = C;
                    break t;
                  }
                  C = ze(C), D = ze(D);
                }
                ze = null;
              }
            else ze = null;
            G !== null && mp(
              $,
              B,
              G,
              ze,
              !1
            ), de !== null && Ht !== null && mp(
              $,
              Ht,
              de,
              ze,
              !0
            );
          }
        }
        e: {
          if (B = H ? jo(H) : window, G = B.nodeName && B.nodeName.toLowerCase(), G === "select" || G === "input" && B.type === "file")
            var mt = _d;
          else if (Od(B))
            if (km)
              mt = Zi;
            else {
              mt = K0;
              var pe = Fm;
            }
          else
            G = B.nodeName, !G || G.toLowerCase() !== "input" || B.type !== "checkbox" && B.type !== "radio" ? H && jm(H.elementType) && (mt = _d) : mt = $0;
          if (mt && (mt = mt(l, H))) {
            hu(
              $,
              mt,
              u,
              V
            );
            break e;
          }
          pe && pe(l, B, H), l === "focusout" && H && B.type === "number" && H.memoizedProps.value != null && Go(B, "number", B.value);
        }
        switch (pe = H ? jo(H) : window, l) {
          case "focusin":
            (Od(pe) || pe.contentEditable === "true") && (pu = pe, bs = H, Ki = null);
            break;
          case "focusout":
            Ki = bs = pu = null;
            break;
          case "mousedown":
            vu = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            vu = !1, gu($, u, V);
            break;
          case "selectionchange":
            if (ey) break;
          case "keydown":
          case "keyup":
            gu($, u, V);
        }
        var Xe;
        if (Lo)
          e: {
            switch (l) {
              case "compositionstart":
                var We = "onCompositionStart";
                break e;
              case "compositionend":
                We = "onCompositionEnd";
                break e;
              case "compositionupdate":
                We = "onCompositionUpdate";
                break e;
            }
            We = void 0;
          }
        else
          Bc ? Vi(l, u) && (We = "onCompositionEnd") : l === "keydown" && u.keyCode === 229 && (We = "onCompositionStart");
        We && (Xl && u.locale !== "ko" && (Bc || We !== "onCompositionStart" ? We === "onCompositionEnd" && Bc && (Xe = B0()) : (oi = V, yd = "value" in oi ? oi.value : oi.textContent, Bc = !0)), pe = Ch(H, We), 0 < pe.length && (We = new Sn(
          We,
          l,
          null,
          u,
          V
        ), $.push({ event: We, listeners: pe }), Xe ? We.data = Xe : (Xe = Ad(u), Xe !== null && (We.data = Xe)))), (Xe = Km ? Z0(l, u) : J0(l, u)) && (We = Ch(H, "onBeforeInput"), 0 < We.length && (pe = new Sn(
          "onBeforeInput",
          "beforeinput",
          null,
          u,
          V
        ), $.push({
          event: pe,
          listeners: We
        }), pe.data = Xe)), Sf(
          $,
          l,
          H,
          u,
          V
        );
      }
      dp($, n);
    });
  }
  function zr(l, n, u) {
    return {
      instance: l,
      listener: n,
      currentTarget: u
    };
  }
  function Ch(l, n) {
    for (var u = n + "Capture", c = []; l !== null; ) {
      var s = l, r = s.stateNode;
      if (s = s.tag, s !== 5 && s !== 26 && s !== 27 || r === null || (s = Xo(l, u), s != null && c.unshift(
        zr(l, s, r)
      ), s = Xo(l, n), s != null && c.push(
        zr(l, s, r)
      )), l.tag === 3) return c;
      l = l.return;
    }
    return [];
  }
  function Mv(l) {
    if (l === null) return null;
    do
      l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function mp(l, n, u, c, s) {
    for (var r = n._reactName, m = []; u !== null && u !== c; ) {
      var g = u, T = g.alternate, H = g.stateNode;
      if (g = g.tag, T !== null && T === c) break;
      g !== 5 && g !== 26 && g !== 27 || H === null || (T = H, s ? (H = Xo(u, r), H != null && m.unshift(
        zr(u, H, T)
      )) : s || (H = Xo(u, r), H != null && m.push(
        zr(u, H, T)
      ))), u = u.return;
    }
    m.length !== 0 && l.push({ event: n, listeners: m });
  }
  var yp = /\r\n?/g, Cv = /\u0000|\uFFFD/g;
  function Uh(l) {
    return (typeof l == "string" ? l : "" + l).replace(yp, `
`).replace(Cv, "");
  }
  function pp(l, n) {
    return n = Uh(n), Uh(l) === n;
  }
  function Mt(l, n, u, c, s, r) {
    switch (u) {
      case "children":
        typeof c == "string" ? n === "body" || n === "textarea" && c === "" || Mc(l, c) : (typeof c == "number" || typeof c == "bigint") && n !== "body" && Mc(l, "" + c);
        break;
      case "className":
        xo(l, "class", c);
        break;
      case "tabIndex":
        xo(l, "tabindex", c);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        xo(l, u, c);
        break;
      case "style":
        N0(l, c, r);
        break;
      case "data":
        if (n !== "object") {
          xo(l, "data", c);
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
        c = Qi("" + c), l.setAttribute(u, c);
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
          typeof r == "function" && (u === "formAction" ? (n !== "input" && Mt(l, n, "name", s.name, s, null), Mt(
            l,
            n,
            "formEncType",
            s.formEncType,
            s,
            null
          ), Mt(
            l,
            n,
            "formMethod",
            s.formMethod,
            s,
            null
          ), Mt(
            l,
            n,
            "formTarget",
            s.formTarget,
            s,
            null
          )) : (Mt(l, n, "encType", s.encType, s, null), Mt(l, n, "method", s.method, s, null), Mt(l, n, "target", s.target, s, null)));
        if (c == null || typeof c == "symbol" || typeof c == "boolean") {
          l.removeAttribute(u);
          break;
        }
        c = Qi("" + c), l.setAttribute(u, c);
        break;
      case "onClick":
        c != null && (l.onclick = wl);
        break;
      case "onScroll":
        c != null && lt("scroll", l);
        break;
      case "onScrollEnd":
        c != null && lt("scrollend", l);
        break;
      case "dangerouslySetInnerHTML":
        if (c != null) {
          if (typeof c != "object" || !("__html" in c))
            throw Error(j(61));
          if (u = c.__html, u != null) {
            if (s.children != null) throw Error(j(60));
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
        u = Qi("" + c), l.setAttributeNS(
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
        lt("beforetoggle", l), lt("toggle", l), ii(l, "popover", c);
        break;
      case "xlinkActuate":
        ci(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          c
        );
        break;
      case "xlinkArcrole":
        ci(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          c
        );
        break;
      case "xlinkRole":
        ci(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          c
        );
        break;
      case "xlinkShow":
        ci(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          c
        );
        break;
      case "xlinkTitle":
        ci(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          c
        );
        break;
      case "xlinkType":
        ci(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          c
        );
        break;
      case "xmlBase":
        ci(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          c
        );
        break;
      case "xmlLang":
        ci(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          c
        );
        break;
      case "xmlSpace":
        ci(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          c
        );
        break;
      case "is":
        ii(l, "is", c);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < u.length) || u[0] !== "o" && u[0] !== "O" || u[1] !== "n" && u[1] !== "N") && (u = Vg.get(u) || u, ii(l, u, c));
    }
  }
  function vp(l, n, u, c, s, r) {
    switch (u) {
      case "style":
        N0(l, c, r);
        break;
      case "dangerouslySetInnerHTML":
        if (c != null) {
          if (typeof c != "object" || !("__html" in c))
            throw Error(j(61));
          if (u = c.__html, u != null) {
            if (s.children != null) throw Error(j(60));
            l.innerHTML = u;
          }
        }
        break;
      case "children":
        typeof c == "string" ? Mc(l, c) : (typeof c == "number" || typeof c == "bigint") && Mc(l, "" + c);
        break;
      case "onScroll":
        c != null && lt("scroll", l);
        break;
      case "onScrollEnd":
        c != null && lt("scrollend", l);
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
        if (!Dc.hasOwnProperty(u))
          e: {
            if (u[0] === "o" && u[1] === "n" && (s = u.endsWith("Capture"), n = u.slice(2, s ? u.length - 7 : void 0), r = l[Lt] || null, r = r != null ? r[u] : null, typeof r == "function" && l.removeEventListener(n, r, s), typeof c == "function")) {
              typeof r != "function" && r !== null && (u in l ? l[u] = null : l.hasAttribute(u) && l.removeAttribute(u)), l.addEventListener(n, c, s);
              break e;
            }
            u in l ? l[u] = c : c === !0 ? l.setAttribute(u, "") : ii(l, u, c);
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
        lt("error", l), lt("load", l);
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
                  throw Error(j(137, n));
                default:
                  Mt(l, n, r, m, u, null);
              }
          }
        s && Mt(l, n, "srcSet", u.srcSet, u, null), c && Mt(l, n, "src", u.src, u, null);
        return;
      case "input":
        lt("invalid", l);
        var g = r = m = s = null, T = null, H = null;
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
                  H = V;
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
                    throw Error(j(137, n));
                  break;
                default:
                  Mt(l, n, c, V, u, null);
              }
          }
        hd(
          l,
          r,
          g,
          T,
          H,
          m,
          s,
          !1
        );
        return;
      case "select":
        lt("invalid", l), c = m = r = null;
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
                Mt(l, n, s, g, u, null);
            }
        n = r, u = m, l.multiple = !!c, n != null ? cu(l, !!c, n, !1) : u != null && cu(l, !!c, u, !0);
        return;
      case "textarea":
        lt("invalid", l), r = s = c = null;
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
                if (g != null) throw Error(j(91));
                break;
              default:
                Mt(l, n, m, g, u, null);
            }
        Ym(l, c, s, r);
        return;
      case "option":
        for (T in u)
          u.hasOwnProperty(T) && (c = u[T], c != null) && (T === "selected" ? l.selected = c && typeof c != "function" && typeof c != "symbol" : Mt(l, n, T, c, u, null));
        return;
      case "dialog":
        lt("beforetoggle", l), lt("toggle", l), lt("cancel", l), lt("close", l);
        break;
      case "iframe":
      case "object":
        lt("load", l);
        break;
      case "video":
      case "audio":
        for (c = 0; c < ro.length; c++)
          lt(ro[c], l);
        break;
      case "image":
        lt("error", l), lt("load", l);
        break;
      case "details":
        lt("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        lt("error", l), lt("load", l);
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
        for (H in u)
          if (u.hasOwnProperty(H) && (c = u[H], c != null))
            switch (H) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(j(137, n));
              default:
                Mt(l, n, H, c, u, null);
            }
        return;
      default:
        if (jm(n)) {
          for (V in u)
            u.hasOwnProperty(V) && (c = u[V], c !== void 0 && vp(
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
      u.hasOwnProperty(g) && (c = u[g], c != null && Mt(l, n, g, c, u, null));
  }
  function tS(l, n, u, c) {
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
        var s = null, r = null, m = null, g = null, T = null, H = null, V = null;
        for (G in u) {
          var $ = u[G];
          if (u.hasOwnProperty(G) && $ != null)
            switch (G) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                T = $;
              default:
                c.hasOwnProperty(G) || Mt(l, n, G, null, c, $);
            }
        }
        for (var B in c) {
          var G = c[B];
          if ($ = u[B], c.hasOwnProperty(B) && (G != null || $ != null))
            switch (B) {
              case "type":
                r = G;
                break;
              case "name":
                s = G;
                break;
              case "checked":
                H = G;
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
                  throw Error(j(137, n));
                break;
              default:
                G !== $ && Mt(
                  l,
                  n,
                  B,
                  G,
                  c,
                  $
                );
            }
        }
        dd(
          l,
          m,
          g,
          T,
          H,
          V,
          r,
          s
        );
        return;
      case "select":
        G = m = g = B = null;
        for (r in u)
          if (T = u[r], u.hasOwnProperty(r) && T != null)
            switch (r) {
              case "value":
                break;
              case "multiple":
                G = T;
              default:
                c.hasOwnProperty(r) || Mt(
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
                B = r;
                break;
              case "defaultValue":
                g = r;
                break;
              case "multiple":
                m = r;
              default:
                r !== T && Mt(
                  l,
                  n,
                  s,
                  r,
                  c,
                  T
                );
            }
        n = g, u = m, c = G, B != null ? cu(l, !!u, B, !1) : !!c != !!u && (n != null ? cu(l, !!u, n, !0) : cu(l, !!u, u ? [] : "", !1));
        return;
      case "textarea":
        G = B = null;
        for (g in u)
          if (s = u[g], u.hasOwnProperty(g) && s != null && !c.hasOwnProperty(g))
            switch (g) {
              case "value":
                break;
              case "children":
                break;
              default:
                Mt(l, n, g, null, c, s);
            }
        for (m in c)
          if (s = c[m], r = u[m], c.hasOwnProperty(m) && (s != null || r != null))
            switch (m) {
              case "value":
                B = s;
                break;
              case "defaultValue":
                G = s;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (s != null) throw Error(j(91));
                break;
              default:
                s !== r && Mt(l, n, m, s, c, r);
            }
        H0(l, B, G);
        return;
      case "option":
        for (var de in u)
          B = u[de], u.hasOwnProperty(de) && B != null && !c.hasOwnProperty(de) && (de === "selected" ? l.selected = !1 : Mt(
            l,
            n,
            de,
            null,
            c,
            B
          ));
        for (T in c)
          B = c[T], G = u[T], c.hasOwnProperty(T) && B !== G && (B != null || G != null) && (T === "selected" ? l.selected = B && typeof B != "function" && typeof B != "symbol" : Mt(
            l,
            n,
            T,
            B,
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
        for (var ze in u)
          B = u[ze], u.hasOwnProperty(ze) && B != null && !c.hasOwnProperty(ze) && Mt(l, n, ze, null, c, B);
        for (H in c)
          if (B = c[H], G = u[H], c.hasOwnProperty(H) && B !== G && (B != null || G != null))
            switch (H) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (B != null)
                  throw Error(j(137, n));
                break;
              default:
                Mt(
                  l,
                  n,
                  H,
                  B,
                  c,
                  G
                );
            }
        return;
      default:
        if (jm(n)) {
          for (var Ht in u)
            B = u[Ht], u.hasOwnProperty(Ht) && B !== void 0 && !c.hasOwnProperty(Ht) && vp(
              l,
              n,
              Ht,
              void 0,
              c,
              B
            );
          for (V in c)
            B = c[V], G = u[V], !c.hasOwnProperty(V) || B === G || B === void 0 && G === void 0 || vp(
              l,
              n,
              V,
              B,
              c,
              G
            );
          return;
        }
    }
    for (var C in u)
      B = u[C], u.hasOwnProperty(C) && B != null && !c.hasOwnProperty(C) && Mt(l, n, C, null, c, B);
    for ($ in c)
      B = c[$], G = u[$], !c.hasOwnProperty($) || B === G || B == null && G == null || Mt(l, n, $, B, c, G);
  }
  function Hh(l) {
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
  function gp() {
    if (typeof performance.getEntriesByType == "function") {
      for (var l = 0, n = 0, u = performance.getEntriesByType("resource"), c = 0; c < u.length; c++) {
        var s = u[c], r = s.transferSize, m = s.initiatorType, g = s.duration;
        if (r && g && Hh(m)) {
          for (m = 0, g = s.responseEnd, c += 1; c < u.length; c++) {
            var T = u[c], H = T.startTime;
            if (H > g) break;
            var V = T.transferSize, $ = T.initiatorType;
            V && Hh($) && (T = T.responseEnd, m += V * (T < g ? 1 : (g - H) / (T - H)));
          }
          if (--c, n += 8 * (r + m) / (s.duration / 1e3), l++, 10 < l) break;
        }
      }
      if (0 < l) return n / l / 1e6;
    }
    return navigator.connection && (l = navigator.connection.downlink, typeof l == "number") ? l : 5;
  }
  var _r = null, Nh = null;
  function Dr(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function Ef(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Uv(l, n) {
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
  function Bh(l, n) {
    return l === "textarea" || l === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.children == "bigint" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null;
  }
  var Tf = null;
  function Hv() {
    var l = window.event;
    return l && l.type === "popstate" ? l === Tf ? !1 : (Tf = l, !0) : (Tf = null, !1);
  }
  var Nv = typeof setTimeout == "function" ? setTimeout : void 0, Yh = typeof clearTimeout == "function" ? clearTimeout : void 0, Sp = typeof Promise == "function" ? Promise : void 0, Af = typeof queueMicrotask == "function" ? queueMicrotask : typeof Sp < "u" ? function(l) {
    return Sp.resolve(null).then(l).catch(Bv);
  } : Nv;
  function Bv(l) {
    setTimeout(function() {
      throw l;
    });
  }
  function Qu(l) {
    return l === "head";
  }
  function Rr(l, n) {
    var u = n, c = 0;
    do {
      var s = u.nextSibling;
      if (l.removeChild(u), s && s.nodeType === 8)
        if (u = s.data, u === "/$" || u === "/&") {
          if (c === 0) {
            l.removeChild(s), Mf(n);
            return;
          }
          c--;
        } else if (u === "$" || u === "$?" || u === "$~" || u === "$!" || u === "&")
          c++;
        else if (u === "html")
          _i(l.ownerDocument.documentElement);
        else if (u === "head") {
          u = l.ownerDocument.head, _i(u);
          for (var r = u.firstChild; r; ) {
            var m = r.nextSibling, g = r.nodeName;
            r[qo] || g === "SCRIPT" || g === "STYLE" || g === "LINK" && r.rel.toLowerCase() === "stylesheet" || u.removeChild(r), r = m;
          }
        } else
          u === "body" && _i(l.ownerDocument.body);
      u = s;
    } while (u);
    Mf(n);
  }
  function bp(l, n) {
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
          fl(u), Xi(u);
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
  function Ep(l, n, u, c) {
    for (; l.nodeType === 1; ) {
      var s = u;
      if (l.nodeName.toLowerCase() !== n.toLowerCase()) {
        if (!c && (l.nodeName !== "INPUT" || l.type !== "hidden"))
          break;
      } else if (c) {
        if (!l[qo])
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
      if (l = $l(l.nextSibling), l === null) break;
    }
    return null;
  }
  function lS(l, n, u) {
    if (n === "") return null;
    for (; l.nodeType !== 3; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !u || (l = $l(l.nextSibling), l === null)) return null;
    return l;
  }
  function Ve(l, n) {
    for (; l.nodeType !== 8; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !n || (l = $l(l.nextSibling), l === null)) return null;
    return l;
  }
  function Tp(l) {
    return l.data === "$?" || l.data === "$~";
  }
  function Cn(l) {
    return l.data === "$!" || l.data === "$?" && l.ownerDocument.readyState !== "loading";
  }
  function Of(l, n) {
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
  var zf = null;
  function qh(l) {
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
  function jh(l) {
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
  function Wn(l, n, u) {
    switch (n = Dr(u), l) {
      case "html":
        if (l = n.documentElement, !l) throw Error(j(452));
        return l;
      case "head":
        if (l = n.head, !l) throw Error(j(453));
        return l;
      case "body":
        if (l = n.body, !l) throw Error(j(454));
        return l;
      default:
        throw Error(j(451));
    }
  }
  function _i(l) {
    for (var n = l.attributes; n.length; )
      l.removeAttributeNode(n[0]);
    Xi(l);
  }
  var Za = /* @__PURE__ */ new Map(), xh = /* @__PURE__ */ new Set();
  function ho(l) {
    return typeof l.getRootNode == "function" ? l.getRootNode() : l.nodeType === 9 ? l : l.ownerDocument;
  }
  var ml = Y.d;
  Y.d = {
    f: Ap,
    r: aS,
    D: Ol,
    C: w,
    L: Tt,
    m: nS,
    X: zp,
    S: Op,
    M: Di
  };
  function Ap() {
    var l = ml.f(), n = pr();
    return l || n;
  }
  function aS(l) {
    var n = zc(l);
    n !== null && n.tag === 5 && n.type === "form" ? cf(n) : ml.r(l);
  }
  var mo = typeof document > "u" ? null : document;
  function Yv(l, n, u) {
    var c = mo;
    if (c && typeof n == "string" && n) {
      var s = gn(n);
      s = 'link[rel="' + l + '"][href="' + s + '"]', typeof u == "string" && (s += '[crossorigin="' + u + '"]'), xh.has(s) || (xh.add(s), l = { rel: l, crossOrigin: u, href: n }, c.querySelector(s) === null && (n = c.createElement("link"), Kl(n, "link", l), Tl(n), c.head.appendChild(n)));
    }
  }
  function Ol(l) {
    ml.D(l), Yv("dns-prefetch", l, null);
  }
  function w(l, n) {
    ml.C(l, n), Yv("preconnect", l, n);
  }
  function Tt(l, n, u) {
    ml.L(l, n, u);
    var c = mo;
    if (c && l && n) {
      var s = 'link[rel="preload"][as="' + gn(n) + '"]';
      n === "image" && u && u.imageSrcSet ? (s += '[imagesrcset="' + gn(
        u.imageSrcSet
      ) + '"]', typeof u.imageSizes == "string" && (s += '[imagesizes="' + gn(
        u.imageSizes
      ) + '"]')) : s += '[href="' + gn(l) + '"]';
      var r = s;
      switch (n) {
        case "style":
          r = Lu(l);
          break;
        case "script":
          r = yo(l);
      }
      Za.has(r) || (l = me(
        {
          rel: "preload",
          href: n === "image" && u && u.imageSrcSet ? void 0 : l,
          as: n
        },
        u
      ), Za.set(r, l), c.querySelector(s) !== null || n === "style" && c.querySelector(Un(r)) || n === "script" && c.querySelector(_f(r)) || (n = c.createElement("link"), Kl(n, "link", l), Tl(n), c.head.appendChild(n)));
    }
  }
  function nS(l, n) {
    ml.m(l, n);
    var u = mo;
    if (u && l) {
      var c = n && typeof n.as == "string" ? n.as : "script", s = 'link[rel="modulepreload"][as="' + gn(c) + '"][href="' + gn(l) + '"]', r = s;
      switch (c) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          r = yo(l);
      }
      if (!Za.has(r) && (l = me({ rel: "modulepreload", href: l }, n), Za.set(r, l), u.querySelector(s) === null)) {
        switch (c) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (u.querySelector(_f(r)))
              return;
        }
        c = u.createElement("link"), Kl(c, "link", l), Tl(c), u.head.appendChild(c);
      }
    }
  }
  function Op(l, n, u) {
    ml.S(l, n, u);
    var c = mo;
    if (c && l) {
      var s = _c(c).hoistableStyles, r = Lu(l);
      n = n || "default";
      var m = s.get(r);
      if (!m) {
        var g = { loading: 0, preload: null };
        if (m = c.querySelector(
          Un(r)
        ))
          g.loading = 5;
        else {
          l = me(
            { rel: "stylesheet", href: l, "data-precedence": n },
            u
          ), (u = Za.get(r)) && Gh(l, u);
          var T = m = c.createElement("link");
          Tl(T), Kl(T, "link", l), T._p = new Promise(function(H, V) {
            T.onload = H, T.onerror = V;
          }), T.addEventListener("load", function() {
            g.loading |= 1;
          }), T.addEventListener("error", function() {
            g.loading |= 2;
          }), g.loading |= 4, Ur(m, n, c);
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
  function zp(l, n) {
    ml.X(l, n);
    var u = mo;
    if (u && l) {
      var c = _c(u).hoistableScripts, s = yo(l), r = c.get(s);
      r || (r = u.querySelector(_f(s)), r || (l = me({ src: l, async: !0 }, n), (n = Za.get(s)) && wh(l, n), r = u.createElement("script"), Tl(r), Kl(r, "link", l), u.head.appendChild(r)), r = {
        type: "script",
        instance: r,
        count: 1,
        state: null
      }, c.set(s, r));
    }
  }
  function Di(l, n) {
    ml.M(l, n);
    var u = mo;
    if (u && l) {
      var c = _c(u).hoistableScripts, s = yo(l), r = c.get(s);
      r || (r = u.querySelector(_f(s)), r || (l = me({ src: l, async: !0, type: "module" }, n), (n = Za.get(s)) && wh(l, n), r = u.createElement("script"), Tl(r), Kl(r, "link", l), u.head.appendChild(r)), r = {
        type: "script",
        instance: r,
        count: 1,
        state: null
      }, c.set(s, r));
    }
  }
  function Ri(l, n, u, c) {
    var s = (s = Oe.current) ? ho(s) : null;
    if (!s) throw Error(j(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof u.precedence == "string" && typeof u.href == "string" ? (n = Lu(u.href), u = _c(
          s
        ).hoistableStyles, c = u.get(n), c || (c = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, u.set(n, c)), c) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (u.rel === "stylesheet" && typeof u.href == "string" && typeof u.precedence == "string") {
          l = Lu(u.href);
          var r = _c(
            s
          ).hoistableStyles, m = r.get(l);
          if (m || (s = s.ownerDocument || s, m = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, r.set(l, m), (r = s.querySelector(
            Un(l)
          )) && !r._p && (m.instance = r, m.state.loading = 5), Za.has(l) || (u = {
            rel: "preload",
            as: "style",
            href: u.href,
            crossOrigin: u.crossOrigin,
            integrity: u.integrity,
            media: u.media,
            hrefLang: u.hrefLang,
            referrerPolicy: u.referrerPolicy
          }, Za.set(l, u), r || Cr(
            s,
            l,
            u,
            m.state
          ))), n && c === null)
            throw Error(j(528, ""));
          return m;
        }
        if (n && c !== null)
          throw Error(j(529, ""));
        return null;
      case "script":
        return n = u.async, u = u.src, typeof u == "string" && n && typeof n != "function" && typeof n != "symbol" ? (n = yo(u), u = _c(
          s
        ).hoistableScripts, c = u.get(n), c || (c = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, u.set(n, c)), c) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(j(444, l));
    }
  }
  function Lu(l) {
    return 'href="' + gn(l) + '"';
  }
  function Un(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function Mr(l) {
    return me({}, l, {
      "data-precedence": l.precedence,
      precedence: null
    });
  }
  function Cr(l, n, u, c) {
    l.querySelector('link[rel="preload"][as="style"][' + n + "]") ? c.loading = 1 : (n = l.createElement("link"), c.preload = n, n.addEventListener("load", function() {
      return c.loading |= 1;
    }), n.addEventListener("error", function() {
      return c.loading |= 2;
    }), Kl(n, "link", u), Tl(n), l.head.appendChild(n));
  }
  function yo(l) {
    return '[src="' + gn(l) + '"]';
  }
  function _f(l) {
    return "script[async]" + l;
  }
  function _p(l, n, u) {
    if (n.count++, n.instance === null)
      switch (n.type) {
        case "style":
          var c = l.querySelector(
            'style[data-href~="' + gn(u.href) + '"]'
          );
          if (c)
            return n.instance = c, Tl(c), c;
          var s = me({}, u, {
            "data-href": u.href,
            "data-precedence": u.precedence,
            href: null,
            precedence: null
          });
          return c = (l.ownerDocument || l).createElement(
            "style"
          ), Tl(c), Kl(c, "style", s), Ur(c, u.precedence, l), n.instance = c;
        case "stylesheet":
          s = Lu(u.href);
          var r = l.querySelector(
            Un(s)
          );
          if (r)
            return n.state.loading |= 4, n.instance = r, Tl(r), r;
          c = Mr(u), (s = Za.get(s)) && Gh(c, s), r = (l.ownerDocument || l).createElement("link"), Tl(r);
          var m = r;
          return m._p = new Promise(function(g, T) {
            m.onload = g, m.onerror = T;
          }), Kl(r, "link", c), n.state.loading |= 4, Ur(r, u.precedence, l), n.instance = r;
        case "script":
          return r = yo(u.src), (s = l.querySelector(
            _f(r)
          )) ? (n.instance = s, Tl(s), s) : (c = u, (s = Za.get(r)) && (c = me({}, u), wh(c, s)), l = l.ownerDocument || l, s = l.createElement("script"), Tl(s), Kl(s, "link", c), l.head.appendChild(s), n.instance = s);
        case "void":
          return null;
        default:
          throw Error(j(443, n.type));
      }
    else
      n.type === "stylesheet" && (n.state.loading & 4) === 0 && (c = n.instance, n.state.loading |= 4, Ur(c, u.precedence, l));
    return n.instance;
  }
  function Ur(l, n, u) {
    for (var c = u.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), s = c.length ? c[c.length - 1] : null, r = s, m = 0; m < c.length; m++) {
      var g = c[m];
      if (g.dataset.precedence === n) r = g;
      else if (r !== s) break;
    }
    r ? r.parentNode.insertBefore(l, r.nextSibling) : (n = u.nodeType === 9 ? u.head : u, n.insertBefore(l, n.firstChild));
  }
  function Gh(l, n) {
    l.crossOrigin == null && (l.crossOrigin = n.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = n.referrerPolicy), l.title == null && (l.title = n.title);
  }
  function wh(l, n) {
    l.crossOrigin == null && (l.crossOrigin = n.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = n.referrerPolicy), l.integrity == null && (l.integrity = n.integrity);
  }
  var Hr = null;
  function Xh(l, n, u) {
    if (Hr === null) {
      var c = /* @__PURE__ */ new Map(), s = Hr = /* @__PURE__ */ new Map();
      s.set(u, c);
    } else
      s = Hr, c = s.get(u), c || (c = /* @__PURE__ */ new Map(), s.set(u, c));
    if (c.has(l)) return c;
    for (c.set(l, null), u = u.getElementsByTagName(l), s = 0; s < u.length; s++) {
      var r = u[s];
      if (!(r[qo] || r[vl] || l === "link" && r.getAttribute("rel") === "stylesheet") && r.namespaceURI !== "http://www.w3.org/2000/svg") {
        var m = r.getAttribute(n) || "";
        m = l + m;
        var g = c.get(m);
        g ? g.push(r) : c.set(m, [r]);
      }
    }
    return c;
  }
  function Dp(l, n, u) {
    l = l.ownerDocument || l, l.head.insertBefore(
      u,
      n === "title" ? l.querySelector("head > title") : null
    );
  }
  function Rp(l, n, u) {
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
  function Qh(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  function on(l, n, u, c) {
    if (u.type === "stylesheet" && (typeof c.media != "string" || matchMedia(c.media).matches !== !1) && (u.state.loading & 4) === 0) {
      if (u.instance === null) {
        var s = Lu(c.href), r = n.querySelector(
          Un(s)
        );
        if (r) {
          n = r._p, n !== null && typeof n == "object" && typeof n.then == "function" && (l.count++, l = Df.bind(l), n.then(l, l)), u.state.loading |= 4, u.instance = r, Tl(r);
          return;
        }
        r = n.ownerDocument || n, c = Mr(c), (s = Za.get(s)) && Gh(c, s), r = r.createElement("link"), Tl(r);
        var m = r;
        m._p = new Promise(function(g, T) {
          m.onload = g, m.onerror = T;
        }), Kl(r, "link", c), u.instance = r;
      }
      l.stylesheets === null && (l.stylesheets = /* @__PURE__ */ new Map()), l.stylesheets.set(u, n), (n = u.state.preload) && (u.state.loading & 3) === 0 && (l.count++, u = Df.bind(l), n.addEventListener("load", u), n.addEventListener("error", u));
    }
  }
  var Hn = 0;
  function Fn(l, n) {
    return l.stylesheets && l.count === 0 && Vh(l, l.stylesheets), 0 < l.count || 0 < l.imgCount ? function(u) {
      var c = setTimeout(function() {
        if (l.stylesheets && Vh(l, l.stylesheets), l.unsuspend) {
          var r = l.unsuspend;
          l.unsuspend = null, r();
        }
      }, 6e4 + n);
      0 < l.imgBytes && Hn === 0 && (Hn = 62500 * gp());
      var s = setTimeout(
        function() {
          if (l.waitingForImages = !1, l.count === 0 && (l.stylesheets && Vh(l, l.stylesheets), l.unsuspend)) {
            var r = l.unsuspend;
            l.unsuspend = null, r();
          }
        },
        (l.imgBytes > Hn ? 50 : 800) + n
      );
      return l.unsuspend = u, function() {
        l.unsuspend = null, clearTimeout(c), clearTimeout(s);
      };
    } : null;
  }
  function Df() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) Vh(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        this.unsuspend = null, l();
      }
    }
  }
  var Lh = null;
  function Vh(l, n) {
    l.stylesheets = null, l.unsuspend !== null && (l.count++, Lh = /* @__PURE__ */ new Map(), n.forEach(uS, l), Lh = null, Df.call(l));
  }
  function uS(l, n) {
    if (!(n.state.loading & 4)) {
      var u = Lh.get(l);
      if (u) var c = u.get(null);
      else {
        u = /* @__PURE__ */ new Map(), Lh.set(l, u);
        for (var s = l.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), r = 0; r < s.length; r++) {
          var m = s[r];
          (m.nodeName === "LINK" || m.getAttribute("media") !== "not all") && (u.set(m.dataset.precedence, m), c = m);
        }
        c && u.set(null, c);
      }
      s = n.instance, m = s.getAttribute("data-precedence"), r = u.get(m) || c, r === c && u.set(null, s), u.set(m, s), this.count++, c = Df.bind(this), s.addEventListener("load", c), s.addEventListener("error", c), r ? r.parentNode.insertBefore(s, r.nextSibling) : (l = l.nodeType === 9 ? l.head : l, l.insertBefore(s, l.firstChild)), n.state.loading |= 4;
    }
  }
  var sl = {
    $$typeof: Bt,
    Provider: null,
    Consumer: null,
    _currentValue: P,
    _currentValue2: P,
    _threadCount: 0
  };
  function iS(l, n, u, c, s, r, m, g, T) {
    this.tag = 1, this.containerInfo = l, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Gl(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Gl(0), this.hiddenUpdates = Gl(null), this.identifierPrefix = c, this.onUncaughtError = s, this.onCaughtError = r, this.onRecoverableError = m, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = T, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Zh(l, n, u, c, s, r, m, g, T, H, V, $) {
    return l = new iS(
      l,
      n,
      u,
      m,
      T,
      H,
      V,
      $,
      g
    ), n = 1, r === !0 && (n |= 24), r = Ha(3, null, null, n), l.current = r, r.stateNode = l, n = Yd(), n.refCount++, l.pooledCache = n, n.refCount++, r.memoizedState = {
      element: c,
      isDehydrated: u,
      cache: n
    }, xd(r), l;
  }
  function Jh(l) {
    return l ? (l = Gc, l) : Gc;
  }
  function po(l, n, u, c, s, r) {
    s = Jh(s), c.context === null ? c.context = s : c.pendingContext = s, c = mi(n), c.payload = { element: u }, r = r === void 0 ? null : r, r !== null && (c.callback = r), u = yi(l, c, n), u !== null && (Va(u, l, n), _u(u, l, n));
  }
  function qv(l, n) {
    if (l = l.memoizedState, l !== null && l.dehydrated !== null) {
      var u = l.retryLane;
      l.retryLane = u !== 0 && u < n ? u : n;
    }
  }
  function Nr(l, n) {
    qv(l, n), (l = l.alternate) && qv(l, n);
  }
  function jv(l) {
    if (l.tag === 13 || l.tag === 31) {
      var n = ta(l, 67108864);
      n !== null && Va(n, l, 67108864), Nr(l, 67108864);
    }
  }
  function xv(l) {
    if (l.tag === 13 || l.tag === 31) {
      var n = Ta();
      n = Da(n);
      var u = ta(l, n);
      u !== null && Va(u, l, n), Nr(l, n);
    }
  }
  var Mi = !0;
  function oa(l, n, u, c) {
    var s = X.T;
    X.T = null;
    var r = Y.p;
    try {
      Y.p = 2, Nn(l, n, u, c);
    } finally {
      Y.p = r, X.T = s;
    }
  }
  function Vu(l, n, u, c) {
    var s = X.T;
    X.T = null;
    var r = Y.p;
    try {
      Y.p = 8, Nn(l, n, u, c);
    } finally {
      Y.p = r, X.T = s;
    }
  }
  function Nn(l, n, u, c) {
    if (Mi) {
      var s = kl(c);
      if (s === null)
        bf(
          l,
          n,
          c,
          Kh,
          u
        ), fa(l, c);
      else if (Cp(
        s,
        l,
        n,
        u,
        c
      ))
        c.stopPropagation();
      else if (fa(l, c), n & 4 && -1 < Fl.indexOf(l)) {
        for (; s !== null; ) {
          var r = zc(s);
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
                    kn(r), (ht & 6) === 0 && (yr = El() + 500, br(0));
                  }
                }
                break;
              case 31:
              case 13:
                g = ta(r, 2), g !== null && Va(g, r, 2), pr(), Nr(r, 2);
            }
          if (r = kl(c), r === null && bf(
            l,
            n,
            c,
            Kh,
            u
          ), r === s) break;
          s = r;
        }
        s !== null && c.stopPropagation();
      } else
        bf(
          l,
          n,
          c,
          null,
          u
        );
    }
  }
  function kl(l) {
    return l = md(l), Mp(l);
  }
  var Kh = null;
  function Mp(l) {
    if (Kh = null, l = Oc(l), l !== null) {
      var n = Ne(l);
      if (n === null) l = null;
      else {
        var u = n.tag;
        if (u === 13) {
          if (l = Ge(n), l !== null) return l;
          l = null;
        } else if (u === 31) {
          if (l = Ot(n), l !== null) return l;
          l = null;
        } else if (u === 3) {
          if (n.stateNode.current.memoizedState.isDehydrated)
            return n.tag === 3 ? n.stateNode.containerInfo : null;
          l = null;
        } else n !== l && (l = null);
      }
    }
    return Kh = l, null;
  }
  function Br(l) {
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
        switch (ji()) {
          case es:
            return 2;
          case Bo:
            return 8;
          case xi:
          case Gi:
            return 32;
          case ts:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Rf = !1, In = null, zl = null, Wl = null, fn = /* @__PURE__ */ new Map(), mc = /* @__PURE__ */ new Map(), Aa = [], Fl = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function fa(l, n) {
    switch (l) {
      case "focusin":
      case "focusout":
        In = null;
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
        fn.delete(n.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        mc.delete(n.pointerId);
    }
  }
  function Bn(l, n, u, c, s, r) {
    return l === null || l.nativeEvent !== r ? (l = {
      blockedOn: n,
      domEventName: u,
      eventSystemFlags: c,
      nativeEvent: r,
      targetContainers: [s]
    }, n !== null && (n = zc(n), n !== null && jv(n)), l) : (l.eventSystemFlags |= c, n = l.targetContainers, s !== null && n.indexOf(s) === -1 && n.push(s), l);
  }
  function Cp(l, n, u, c, s) {
    switch (n) {
      case "focusin":
        return In = Bn(
          In,
          l,
          n,
          u,
          c,
          s
        ), !0;
      case "dragenter":
        return zl = Bn(
          zl,
          l,
          n,
          u,
          c,
          s
        ), !0;
      case "mouseover":
        return Wl = Bn(
          Wl,
          l,
          n,
          u,
          c,
          s
        ), !0;
      case "pointerover":
        var r = s.pointerId;
        return fn.set(
          r,
          Bn(
            fn.get(r) || null,
            l,
            n,
            u,
            c,
            s
          )
        ), !0;
      case "gotpointercapture":
        return r = s.pointerId, mc.set(
          r,
          Bn(
            mc.get(r) || null,
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
  function Gv(l) {
    var n = Oc(l.target);
    if (n !== null) {
      var u = Ne(n);
      if (u !== null) {
        if (n = u.tag, n === 13) {
          if (n = Ge(u), n !== null) {
            l.blockedOn = n, sd(l.priority, function() {
              xv(u);
            });
            return;
          }
        } else if (n === 31) {
          if (n = Ot(u), n !== null) {
            l.blockedOn = n, sd(l.priority, function() {
              xv(u);
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
  function $h(l) {
    if (l.blockedOn !== null) return !1;
    for (var n = l.targetContainers; 0 < n.length; ) {
      var u = kl(l.nativeEvent);
      if (u === null) {
        u = l.nativeEvent;
        var c = new u.constructor(
          u.type,
          u
        );
        ds = c, u.target.dispatchEvent(c), ds = null;
      } else
        return n = zc(u), n !== null && jv(n), l.blockedOn = u, !1;
      n.shift();
    }
    return !0;
  }
  function Up(l, n, u) {
    $h(l) && u.delete(n);
  }
  function Yr() {
    Rf = !1, In !== null && $h(In) && (In = null), zl !== null && $h(zl) && (zl = null), Wl !== null && $h(Wl) && (Wl = null), fn.forEach(Up), mc.forEach(Up);
  }
  function qr(l, n) {
    l.blockedOn === n && (l.blockedOn = null, Rf || (Rf = !0, W.unstable_scheduleCallback(
      W.unstable_NormalPriority,
      Yr
    )));
  }
  var Zu = null;
  function kh(l) {
    Zu !== l && (Zu = l, W.unstable_scheduleCallback(
      W.unstable_NormalPriority,
      function() {
        Zu === l && (Zu = null);
        for (var n = 0; n < l.length; n += 3) {
          var u = l[n], c = l[n + 1], s = l[n + 2];
          if (typeof c != "function") {
            if (Mp(c || u) === null)
              continue;
            break;
          }
          var r = zc(u);
          r !== null && (l.splice(n, 3), n -= 3, nh(
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
  function Mf(l) {
    function n(T) {
      return qr(T, l);
    }
    In !== null && qr(In, l), zl !== null && qr(zl, l), Wl !== null && qr(Wl, l), fn.forEach(n), mc.forEach(n);
    for (var u = 0; u < Aa.length; u++) {
      var c = Aa[u];
      c.blockedOn === l && (c.blockedOn = null);
    }
    for (; 0 < Aa.length && (u = Aa[0], u.blockedOn === null); )
      Gv(u), u.blockedOn === null && Aa.shift();
    if (u = (l.ownerDocument || l).$$reactFormReplay, u != null)
      for (c = 0; c < u.length; c += 3) {
        var s = u[c], r = u[c + 1], m = s[Lt] || null;
        if (typeof r == "function")
          m || kh(u);
        else if (m) {
          var g = null;
          if (r && r.hasAttribute("formAction")) {
            if (s = r, m = r[Lt] || null)
              g = m.formAction;
            else if (Mp(s) !== null) continue;
          } else g = m.action;
          typeof g == "function" ? u[c + 1] = g : (u.splice(c, 3), c -= 3), kh(u);
        }
      }
  }
  function wv() {
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
  function Wh(l) {
    this._internalRoot = l;
  }
  jr.prototype.render = Wh.prototype.render = function(l) {
    var n = this._internalRoot;
    if (n === null) throw Error(j(409));
    var u = n.current, c = Ta();
    po(u, c, l, n, null, null);
  }, jr.prototype.unmount = Wh.prototype.unmount = function() {
    var l = this._internalRoot;
    if (l !== null) {
      this._internalRoot = null;
      var n = l.containerInfo;
      po(l.current, 2, null, l, null, null), pr(), n[Ac] = null;
    }
  };
  function jr(l) {
    this._internalRoot = l;
  }
  jr.prototype.unstable_scheduleHydration = function(l) {
    if (l) {
      var n = M0();
      l = { blockedOn: null, target: l, priority: n };
      for (var u = 0; u < Aa.length && n !== 0 && n < Aa[u].priority; u++) ;
      Aa.splice(u, 0, l), u === 0 && Gv(l);
    }
  };
  var Xv = te.version;
  if (Xv !== "19.2.3")
    throw Error(
      j(
        527,
        Xv,
        "19.2.3"
      )
    );
  Y.findDOMNode = function(l) {
    var n = l._reactInternals;
    if (n === void 0)
      throw typeof l.render == "function" ? Error(j(188)) : (l = Object.keys(l).join(","), Error(j(268, l)));
    return l = L(n), l = l !== null ? Le(l) : null, l = l === null ? null : l.stateNode, l;
  };
  var Qv = {
    bundleType: 0,
    version: "19.2.3",
    rendererPackageName: "react-dom",
    currentDispatcherRef: X,
    reconcilerVersion: "19.2.3"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var xr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!xr.isDisabled && xr.supportsFiber)
      try {
        xn = xr.inject(
          Qv
        ), pl = xr;
      } catch {
      }
  }
  return z0.createRoot = function(l, n) {
    if (!Ye(l)) throw Error(j(299));
    var u = !1, c = "", s = Hy, r = ih, m = Ny;
    return n != null && (n.unstable_strictMode === !0 && (u = !0), n.identifierPrefix !== void 0 && (c = n.identifierPrefix), n.onUncaughtError !== void 0 && (s = n.onUncaughtError), n.onCaughtError !== void 0 && (r = n.onCaughtError), n.onRecoverableError !== void 0 && (m = n.onRecoverableError)), n = Zh(
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
      wv
    ), l[Ac] = n.current, hp(l), new Wh(n);
  }, z0.hydrateRoot = function(l, n, u) {
    if (!Ye(l)) throw Error(j(299));
    var c = !1, s = "", r = Hy, m = ih, g = Ny, T = null;
    return u != null && (u.unstable_strictMode === !0 && (c = !0), u.identifierPrefix !== void 0 && (s = u.identifierPrefix), u.onUncaughtError !== void 0 && (r = u.onUncaughtError), u.onCaughtError !== void 0 && (m = u.onCaughtError), u.onRecoverableError !== void 0 && (g = u.onRecoverableError), u.formState !== void 0 && (T = u.formState)), n = Zh(
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
      wv
    ), n.context = Jh(null), u = n.current, c = Ta(), c = Da(c), s = mi(c), s.callback = null, yi(u, s, c), u = c, n.current.lanes = u, _a(n, u), kn(n), l[Ac] = n.current, hp(l), new jr(n);
  }, z0.version = "19.2.3", z0;
}
var _0 = {}, LE;
function _A() {
  if (LE) return _0;
  LE = 1;
  var W = {};
  return W.NODE_ENV !== "production" && (function() {
    function te(e, t) {
      for (e = e.memoizedState; e !== null && 0 < t; )
        e = e.next, t--;
      return e;
    }
    function Ce(e, t, a, i) {
      if (a >= t.length) return i;
      var o = t[a], f = Ol(e) ? e.slice() : Ve({}, e);
      return f[o] = Ce(e[o], t, a + 1, i), f;
    }
    function j(e, t, a) {
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
        return Ye(e, t, a, 0);
      }
    }
    function Ye(e, t, a, i) {
      var o = t[i], f = Ol(e) ? e.slice() : Ve({}, e);
      return i + 1 === t.length ? (f[a[i]] = f[o], Ol(f) ? f.splice(o, 1) : delete f[o]) : f[o] = Ye(
        e[o],
        t,
        a,
        i + 1
      ), f;
    }
    function Ne(e, t, a) {
      var i = t[a], o = Ol(e) ? e.slice() : Ve({}, e);
      return a + 1 === t.length ? (Ol(o) ? o.splice(i, 1) : delete o[i], o) : (o[i] = Ne(e[i], t, a + 1), o);
    }
    function Ge() {
      return !1;
    }
    function Ot() {
      return null;
    }
    function Q() {
      console.error(
        "Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://react.dev/link/rules-of-hooks"
      );
    }
    function L() {
      console.error(
        "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
      );
    }
    function Le() {
    }
    function me() {
    }
    function k(e) {
      var t = [];
      return e.forEach(function(a) {
        t.push(a);
      }), t.sort().join(", ");
    }
    function N(e, t, a, i) {
      return new Wg(e, t, a, i);
    }
    function ce(e, t) {
      e.context === Nf && (yp(e.current, 2, t, e, null, null), lo());
    }
    function we(e, t) {
      if ($u !== null) {
        var a = t.staleFamilies;
        t = t.updatedFamilies, oc(), J0(
          e.current,
          t,
          a
        ), lo();
      }
    }
    function ll(e) {
      $u = e;
    }
    function Ie(e) {
      return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
    }
    function dt(e) {
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
    function Bt(e) {
      if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
      }
      return null;
    }
    function Ft(e) {
      if (e.tag === 31) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
      }
      return null;
    }
    function al(e) {
      if (dt(e) !== e)
        throw Error("Unable to find node on an unmounted component.");
    }
    function Yt(e) {
      var t = e.alternate;
      if (!t) {
        if (t = dt(e), t === null)
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
            if (f === a) return al(o), e;
            if (f === i) return al(o), t;
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
    function je(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6) return e;
      for (e = e.child; e !== null; ) {
        if (t = je(e), t !== null) return t;
        e = e.sibling;
      }
      return null;
    }
    function zt(e) {
      return e === null || typeof e != "object" ? null : (e = mo && e[mo] || e["@@iterator"], typeof e == "function" ? e : null);
    }
    function et(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === Yv ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case $l:
          return "Fragment";
        case qh:
          return "Profiler";
        case zf:
          return "StrictMode";
        case Za:
          return "Suspense";
        case xh:
          return "SuspenseList";
        case Ap:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case Of:
            return "Portal";
          case Wn:
            return e.displayName || "Context";
          case jh:
            return (e._context.displayName || "Context") + ".Consumer";
          case _i:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case ho:
            return t = e.displayName || null, t !== null ? t : et(e.type) || "Memo";
          case ml:
            t = e._payload, e = e._init;
            try {
              return et(e(t));
            } catch {
            }
        }
      return null;
    }
    function Qt(e) {
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
          return et(t);
        case 8:
          return t === zf ? "StrictMode" : "Mode";
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
    function gt(e) {
      return { current: e };
    }
    function Te(e, t) {
      0 > Di ? console.error("Unexpected pop.") : (t !== zp[Di] && console.error("Unexpected Fiber popped."), e.current = Op[Di], Op[Di] = null, zp[Di] = null, Di--);
    }
    function Re(e, t, a) {
      Di++, Op[Di] = e.current, zp[Di] = a, e.current = t;
    }
    function qt(e) {
      return e === null && console.error(
        "Expected host context to exist. This error is likely caused by a bug in React. Please file an issue."
      ), e;
    }
    function X(e, t) {
      Re(Un, t, e), Re(Lu, e, e), Re(Ri, null, e);
      var a = t.nodeType;
      switch (a) {
        case 9:
        case 11:
          a = a === 9 ? "#document" : "#fragment", t = (t = t.documentElement) && (t = t.namespaceURI) ? Oi(t) : Co;
          break;
        default:
          if (a = t.tagName, t = t.namespaceURI)
            t = Oi(t), t = pr(
              t,
              a
            );
          else
            switch (a) {
              case "svg":
                t = Dm;
                break;
              case "math":
                t = Hg;
                break;
              default:
                t = Co;
            }
      }
      a = a.toLowerCase(), a = ss(null, a), a = {
        context: t,
        ancestorInfo: a
      }, Te(Ri, e), Re(Ri, a, e);
    }
    function Y(e) {
      Te(Ri, e), Te(Lu, e), Te(Un, e);
    }
    function P() {
      return qt(Ri.current);
    }
    function ie(e) {
      e.memoizedState !== null && Re(Mr, e, e);
      var t = qt(Ri.current), a = e.type, i = pr(t.context, a);
      a = ss(t.ancestorInfo, a), i = { context: i, ancestorInfo: a }, t !== i && (Re(Lu, e, e), Re(Ri, i, e));
    }
    function ge(e) {
      Lu.current === e && (Te(Ri, e), Te(Lu, e)), Mr.current === e && (Te(Mr, e), b0._currentValue = cd);
    }
    function O() {
    }
    function A() {
      if (Cr === 0) {
        yo = console.log, _f = console.info, _p = console.warn, Ur = console.error, Gh = console.group, wh = console.groupCollapsed, Hr = console.groupEnd;
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
      Cr++;
    }
    function K() {
      if (Cr--, Cr === 0) {
        var e = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: Ve({}, e, { value: yo }),
          info: Ve({}, e, { value: _f }),
          warn: Ve({}, e, { value: _p }),
          error: Ve({}, e, { value: Ur }),
          group: Ve({}, e, { value: Gh }),
          groupCollapsed: Ve({}, e, { value: wh }),
          groupEnd: Ve({}, e, { value: Hr })
        });
      }
      0 > Cr && console.error(
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
      if (Xh === void 0)
        try {
          throw Error();
        } catch (a) {
          var t = a.stack.trim().match(/\n( *(at )?)/);
          Xh = t && t[1] || "", Dp = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + Xh + e + Dp;
    }
    function Oe(e, t) {
      if (!e || Rp) return "";
      var a = Qh.get(e);
      if (a !== void 0) return a;
      Rp = !0, a = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
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
                    var q = ne;
                  }
                  Reflect.construct(e, [], b);
                } else {
                  try {
                    b.call();
                  } catch (ne) {
                    q = ne;
                  }
                  e.call(b.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (ne) {
                  q = ne;
                }
                (b = e()) && typeof b.catch == "function" && b.catch(function() {
                });
              }
            } catch (ne) {
              if (ne && q && typeof ne.stack == "string")
                return [ne.stack, q.stack];
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
                    return e.displayName && R.includes("<anonymous>") && (R = R.replace("<anonymous>", e.displayName)), typeof e == "function" && Qh.set(e, R), R;
                  }
                while (1 <= f && 0 <= d);
              break;
            }
        }
      } finally {
        Rp = !1, w.H = i, K(), Error.prepareStackTrace = a;
      }
      return p = (p = e ? e.displayName || e.name : "") ? ae(p) : "", typeof e == "function" && Qh.set(e, p), p;
    }
    function tt(e, t) {
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
          return Oe(e.type, !1);
        case 11:
          return Oe(e.type.render, !1);
        case 1:
          return Oe(e.type, !0);
        case 31:
          return ae("Activity");
        default:
          return "";
      }
    }
    function ke(e) {
      try {
        var t = "", a = null;
        do {
          t += tt(e, a);
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
                      var q = `
` + b;
                      break e;
                    }
                  }
                  q = ae(
                    h + (y ? " [" + y + "]" : "")
                  );
                }
                t = d + q;
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
    function St(e) {
      return (e = e ? e.displayName || e.name : "") ? ae(e) : "";
    }
    function ea() {
      if (on === null) return null;
      var e = on._debugOwner;
      return e != null ? Qt(e) : null;
    }
    function pn() {
      if (on === null) return "";
      var e = on;
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
            e._debugOwner || t !== "" || (t += St(
              e.type
            ));
            break;
          case 11:
            e._debugOwner || t !== "" || (t += St(
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
      var h = on;
      Ec(e);
      try {
        return e !== null && e._debugTask ? e._debugTask.run(
          t.bind(null, a, i, o, f, d)
        ) : t(a, i, o, f, d);
      } finally {
        Ec(h);
      }
      throw Error(
        "runWithFiberInDEV should never be called in production. This is a bug in React."
      );
    }
    function Ec(e) {
      w.getCurrentStack = e === null ? null : pn, Hn = !1, on = e;
    }
    function ka(e) {
      return typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
    }
    function ni(e) {
      try {
        return nu(e), !1;
      } catch {
        return !0;
      }
    }
    function nu(e) {
      return "" + e;
    }
    function At(e, t) {
      if (ni(e))
        return console.error(
          "The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before using it here.",
          t,
          ka(e)
        ), nu(e);
    }
    function xl(e, t) {
      if (ni(e))
        return console.error(
          "The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before using it here.",
          t,
          ka(e)
        ), nu(e);
    }
    function qi(e) {
      if (ni(e))
        return console.error(
          "Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before using it here.",
          ka(e)
        ), nu(e);
    }
    function Pf(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u") return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled) return !0;
      if (!t.supportsFiber)
        return console.error(
          "The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://react.dev/link/react-devtools"
        ), !0;
      try {
        Mi = t.inject(e), oa = t;
      } catch (a) {
        console.error("React instrumentation encountered an error: %o.", a);
      }
      return !!t.checkDCE;
    }
    function he(e) {
      if (typeof jv == "function" && xv(e), oa && typeof oa.setStrictMode == "function")
        try {
          oa.setStrictMode(Mi, e);
        } catch (t) {
          Vu || (Vu = !0, console.error(
            "React instrumentation encountered an error: %o",
            t
          ));
        }
    }
    function No(e) {
      return e >>>= 0, e === 0 ? 32 : 31 - (Kh(e) / Mp | 0) | 0;
    }
    function uu(e) {
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
      return h !== 0 ? (i = h & ~f, i !== 0 ? o = uu(i) : (d &= h, d !== 0 ? o = uu(d) : a || (a = h & ~e, a !== 0 && (o = uu(a))))) : (h = i & ~f, h !== 0 ? o = uu(h) : d !== 0 ? o = uu(d) : a || (a = i & ~e, a !== 0 && (o = uu(a)))), o === 0 ? 0 : t !== 0 && t !== o && (t & f) === 0 && (f = o & -o, a = t & -t, f >= a || f === 32 && (a & 4194048) !== 0) ? t : o;
    }
    function ji(e, t) {
      return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
    }
    function es(e, t) {
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
    function Bo() {
      var e = In;
      return In <<= 1, (In & 62914560) === 0 && (In = 4194304), e;
    }
    function xi(e) {
      for (var t = [], a = 0; 31 > a; a++) t.push(e);
      return t;
    }
    function Gi(e, t) {
      e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
    }
    function ts(e, t, a, i, o, f) {
      var d = e.pendingLanes;
      e.pendingLanes = a, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= a, e.entangledLanes &= a, e.errorRecoveryDisabledLanes &= a, e.shellSuspendCounter = 0;
      var h = e.entanglements, y = e.expirationTimes, p = e.hiddenUpdates;
      for (a = d & ~a; 0 < a; ) {
        var _ = 31 - kl(a), R = 1 << _;
        h[_] = 0, y[_] = -1;
        var b = p[_];
        if (b !== null)
          for (p[_] = null, _ = 0; _ < b.length; _++) {
            var q = b[_];
            q !== null && (q.lane &= -536870913);
          }
        a &= ~R;
      }
      i !== 0 && ls(e, i, 0), f !== 0 && o === 0 && e.tag !== 0 && (e.suspendedLanes |= f & ~(d & ~t));
    }
    function ls(e, t, a) {
      e.pendingLanes |= t, e.suspendedLanes &= ~t;
      var i = 31 - kl(t);
      e.entangledLanes |= t, e.entanglements[i] = e.entanglements[i] | 1073741824 | a & 261930;
    }
    function as(e, t) {
      var a = e.entangledLanes |= t;
      for (e = e.entanglements; a; ) {
        var i = 31 - kl(a), o = 1 << i;
        o & t | e[i] & t && (e[i] |= t), a &= ~o;
      }
    }
    function xn(e, t) {
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
      if (Nn)
        for (e = e.pendingUpdatersLaneMap; 0 < a; ) {
          var i = 31 - kl(a), o = 1 << i;
          e[i].add(t), a &= ~o;
        }
    }
    function Rl(e, t) {
      if (Nn)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; 0 < t; ) {
          var o = 31 - kl(t);
          e = 1 << o, o = a[o], 0 < o.size && (o.forEach(function(f) {
            var d = f.alternate;
            d !== null && i.has(d) || i.add(f);
          }), o.clear()), t &= ~e;
        }
    }
    function Yo(e) {
      return e &= -e, zl < e ? Wl < e ? (e & 134217727) !== 0 ? fn : mc : Wl : zl;
    }
    function wi() {
      var e = Tt.p;
      return e !== 0 ? e : (e = window.event, e === void 0 ? fn : Nh(e.type));
    }
    function v(e, t) {
      var a = Tt.p;
      try {
        return Tt.p = e, t();
      } finally {
        Tt.p = a;
      }
    }
    function M(e) {
      delete e[Fl], delete e[fa], delete e[Cp], delete e[Gv], delete e[$h];
    }
    function I(e) {
      var t = e[Fl];
      if (t) return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[Bn] || a[Fl]) {
          if (a = t.alternate, t.child !== null || a !== null && a.child !== null)
            for (e = Oh(e); e !== null; ) {
              if (a = e[Fl])
                return a;
              e = Oh(e);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function le(e) {
      if (e = e[Fl] || e[Bn]) {
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
    function Me(e) {
      var t = e[Up];
      return t || (t = e[Up] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
    }
    function ye(e) {
      e[Yr] = !0;
    }
    function ct(e, t) {
      Be(e, t), Be(e + "Capture", t);
    }
    function Be(e, t) {
      Zu[e] && console.error(
        "EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.",
        e
      ), Zu[e] = t;
      var a = e.toLowerCase();
      for (kh[a] = e, e === "onDoubleClick" && (kh.ondblclick = e), e = 0; e < t.length; e++)
        qr.add(t[e]);
    }
    function Gl(e, t) {
      Mf[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || console.error(
        e === "select" ? "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set `onChange`." : "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."
      ), t.onChange || t.readOnly || t.disabled || t.checked == null || console.error(
        "You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`."
      );
    }
    function _a(e) {
      return Fn.call(jr, e) ? !0 : Fn.call(Wh, e) ? !1 : wv.test(e) ? jr[e] = !0 : (Wh[e] = !0, console.error("Invalid attribute name: `%s`", e), !1);
    }
    function od(e, t, a) {
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
        return e = e.getAttribute(t), e === "" && a === !0 ? !0 : (At(a, t), e === "" + a ? a : e);
      }
    }
    function Tc(e, t, a) {
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
          At(a, t), e.setAttribute(t, "" + a);
        }
    }
    function ns(e, t, a) {
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
        At(a, t), e.setAttribute(t, "" + a);
      }
    }
    function iu(e, t, a, i) {
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
        At(i, a), e.setAttributeNS(t, a, "" + i);
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
          return qi(e), e;
        default:
          return "";
      }
    }
    function fd(e) {
      var t = e.type;
      return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function M0(e, t, a) {
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
            qi(d), a = "" + d, f.call(this, d);
          }
        }), Object.defineProperty(e, t, {
          enumerable: i.enumerable
        }), {
          getValue: function() {
            return a;
          },
          setValue: function(d) {
            qi(d), a = "" + d;
          },
          stopTracking: function() {
            e._valueTracker = null, delete e[t];
          }
        };
      }
    }
    function sd(e) {
      if (!e._valueTracker) {
        var t = fd(e) ? "checked" : "value";
        e._valueTracker = M0(
          e,
          t,
          "" + e[t]
        );
      }
    }
    function ui(e) {
      if (!e) return !1;
      var t = e._valueTracker;
      if (!t) return !0;
      var a = t.getValue(), i = "";
      return e && (i = fd(e) ? e.checked ? "true" : "false" : e.value), e = i, e !== a ? (t.setValue(e), !0) : !1;
    }
    function vl(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    function Lt(e) {
      return e.replace(
        Xv,
        function(t) {
          return "\\" + t.charCodeAt(0).toString(16) + " ";
        }
      );
    }
    function Ac(e, t) {
      t.checked === void 0 || t.defaultChecked === void 0 || xr || (console.error(
        "%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",
        ea() || "A component",
        t.type
      ), xr = !0), t.value === void 0 || t.defaultValue === void 0 || Qv || (console.error(
        "%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",
        ea() || "A component",
        t.type
      ), Qv = !0);
    }
    function us(e, t, a, i, o, f, d, h) {
      e.name = "", d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" ? (At(d, "type"), e.type = d) : e.removeAttribute("type"), t != null ? d === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Da(t)) : e.value !== "" + Da(t) && (e.value = "" + Da(t)) : d !== "submit" && d !== "reset" || e.removeAttribute("value"), t != null ? Cm(e, d, Da(t)) : a != null ? Cm(e, d, Da(a)) : i != null && e.removeAttribute("value"), o == null && f != null && (e.defaultChecked = !!f), o != null && (e.checked = o && typeof o != "function" && typeof o != "symbol"), h != null && typeof h != "function" && typeof h != "symbol" && typeof h != "boolean" ? (At(h, "name"), e.name = "" + Da(h)) : e.removeAttribute("name");
    }
    function C0(e, t, a, i, o, f, d, h) {
      if (f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (At(f, "type"), e.type = f), t != null || a != null) {
        if (!(f !== "submit" && f !== "reset" || t != null)) {
          sd(e);
          return;
        }
        a = a != null ? "" + Da(a) : "", t = t != null ? "" + Da(t) : a, h || t === e.value || (e.value = t), e.defaultValue = t;
      }
      i = i ?? o, i = typeof i != "function" && typeof i != "symbol" && !!i, e.checked = h ? e.checked : !!i, e.defaultChecked = !!i, d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" && (At(d, "name"), e.name = d), sd(e);
    }
    function Cm(e, t, a) {
      t === "number" && vl(e.ownerDocument) === e || e.defaultValue === "" + a || (e.defaultValue = "" + a);
    }
    function Um(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? Ep.Children.forEach(t.children, function(a) {
        a == null || typeof a == "string" || typeof a == "number" || typeof a == "bigint" || n || (n = !0, console.error(
          "Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>."
        ));
      }) : t.dangerouslySetInnerHTML == null || u || (u = !0, console.error(
        "Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."
      ))), t.selected == null || l || (console.error(
        "Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."
      ), l = !0);
    }
    function qo() {
      var e = ea();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    function Xi(e, t, a, i) {
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
    function Oc(e, t) {
      for (e = 0; e < s.length; e++) {
        var a = s[e];
        if (t[a] != null) {
          var i = Ol(t[a]);
          t.multiple && !i ? console.error(
            "The `%s` prop supplied to <select> must be an array if `multiple` is true.%s",
            a,
            qo()
          ) : !t.multiple && i && console.error(
            "The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s",
            a,
            qo()
          );
        }
      }
      t.value === void 0 || t.defaultValue === void 0 || c || (console.error(
        "Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://react.dev/link/controlled-components"
      ), c = !0);
    }
    function zc(e, t) {
      t.value === void 0 || t.defaultValue === void 0 || r || (console.error(
        "%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://react.dev/link/controlled-components",
        ea() || "A component"
      ), r = !0), t.children != null && t.value == null && console.error(
        "Use the `defaultValue` or `value` props instead of setting children on <textarea>."
      );
    }
    function jo(e, t, a) {
      if (t != null && (t = "" + Da(t), t !== e.value && (e.value = t), a == null)) {
        e.defaultValue !== t && (e.defaultValue = t);
        return;
      }
      e.defaultValue = a != null ? "" + Da(a) : "";
    }
    function _c(e, t, a, i) {
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
    function Dc(e) {
      return "+ " + "  ".repeat(e);
    }
    function Wa(e) {
      return "- " + "  ".repeat(e);
    }
    function Rc(e) {
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
    function is(e, t) {
      return m.test(e) ? (e = JSON.stringify(e), e.length > t - 2 ? 8 > t ? '{"..."}' : "{" + e.slice(0, t - 7) + '..."}' : "{" + e + "}") : e.length > t ? 5 > t ? '{"..."}' : e.slice(0, t - 3) + "..." : e;
    }
    function cs(e, t, a) {
      var i = 120 - 2 * a;
      if (t === null)
        return Dc(a) + is(e, i) + `
`;
      if (typeof t == "string") {
        for (var o = 0; o < t.length && o < e.length && t.charCodeAt(o) === e.charCodeAt(o); o++) ;
        return o > i - 8 && 10 < o && (e = "..." + e.slice(o - 8), t = "..." + t.slice(o - 8)), Dc(a) + is(e, i) + `
` + Wa(a) + is(t, i) + `
`;
      }
      return Ra(a) + is(e, i) + `
`;
    }
    function rd(e) {
      return Object.prototype.toString.call(e).replace(/^\[object (.*)\]$/, function(t, a) {
        return a;
      });
    }
    function os(e, t) {
      switch (typeof e) {
        case "string":
          return e = JSON.stringify(e), e.length > t ? 5 > t ? '"..."' : e.slice(0, t - 4) + '..."' : e;
        case "object":
          if (e === null) return "null";
          if (Ol(e)) return "[...]";
          if (e.$$typeof === Cn)
            return (t = et(e.type)) ? "<" + t + ">" : "<...>";
          var a = rd(e);
          if (a === "Object") {
            a = "", t -= 2;
            for (var i in e)
              if (e.hasOwnProperty(i)) {
                var o = JSON.stringify(i);
                if (o !== '"' + i + '"' && (i = o), t -= i.length - 2, o = os(
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
    function ii(e, t) {
      return typeof e != "string" || m.test(e) ? "{" + os(e, t - 2) + "}" : e.length > t - 2 ? 5 > t ? '"..."' : '"' + e.slice(0, t - 5) + '..."' : '"' + e + '"';
    }
    function xo(e, t, a) {
      var i = 120 - a.length - e.length, o = [], f;
      for (f in t)
        if (t.hasOwnProperty(f) && f !== "children") {
          var d = ii(
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
    function ci(e, t, a) {
      var i = "", o = Ve({}, t), f;
      for (f in e)
        if (e.hasOwnProperty(f)) {
          delete o[f];
          var d = 120 - 2 * a - f.length - 2, h = os(e[f], d);
          t.hasOwnProperty(f) ? (d = os(t[f], d), i += Dc(a) + f + ": " + h + `
`, i += Wa(a) + f + ": " + d + `
`) : i += Dc(a) + f + ": " + h + `
`;
        }
      for (var y in o)
        o.hasOwnProperty(y) && (e = os(
          o[y],
          120 - 2 * a - y.length - 2
        ), i += Wa(a) + y + ": " + e + `
`);
      return i;
    }
    function vn(e, t, a, i) {
      var o = "", f = /* @__PURE__ */ new Map();
      for (p in a)
        a.hasOwnProperty(p) && f.set(
          p.toLowerCase(),
          p
        );
      if (f.size === 1 && f.has("children"))
        o += xo(
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
              var _ = ii(
                p,
                h
              );
              h = ii(
                y,
                h
              ), typeof p == "object" && p !== null && typeof y == "object" && y !== null && rd(p) === "Object" && rd(y) === "Object" && (2 < Object.keys(p).length || 2 < Object.keys(y).length || -1 < _.indexOf("...") || -1 < h.indexOf("...")) ? o += Ra(i + 1) + d + `={{
` + ci(
                p,
                y,
                i + 2
              ) + Ra(i + 1) + `}}
` : (o += Dc(i + 1) + d + "=" + _ + `
`, o += Wa(i + 1) + d + "=" + h + `
`);
            } else
              o += Ra(i + 1) + d + "=" + ii(t[d], h) + `
`;
          }
        f.forEach(function(R) {
          if (R !== "children") {
            var b = 120 - 2 * (i + 1) - R.length - 1;
            o += Wa(i + 1) + R + "=" + ii(a[R], b) + `
`;
          }
        }), o = o === "" ? Ra(i) + "<" + e + `>
` : Ra(i) + "<" + e + `
` + o + Ra(i) + `>
`;
      }
      return e = a.children, t = t.children, typeof e == "string" || typeof e == "number" || typeof e == "bigint" ? (f = "", (typeof t == "string" || typeof t == "number" || typeof t == "bigint") && (f = "" + t), o += cs(f, "" + e, i + 1)) : (typeof t == "string" || typeof t == "number" || typeof t == "bigint") && (o = e == null ? o + cs("" + t, null, i + 1) : o + cs("" + t, void 0, i + 1)), o;
    }
    function Hm(e, t) {
      var a = Rc(e);
      if (a === null) {
        for (a = "", e = e.child; e; )
          a += Hm(e, t), e = e.sibling;
        return a;
      }
      return Ra(t) + "<" + a + `>
`;
    }
    function Nm(e, t) {
      var a = Tl(e, t);
      if (a !== e && (e.children.length !== 1 || e.children[0] !== a))
        return Ra(t) + `...
` + Nm(a, t + 1);
      a = "";
      var i = e.fiber._debugInfo;
      if (i)
        for (var o = 0; o < i.length; o++) {
          var f = i[o].name;
          typeof f == "string" && (a += Ra(t) + "<" + f + `>
`, t++);
        }
      if (i = "", o = e.fiber.pendingProps, e.fiber.tag === 6)
        i = cs(o, e.serverProps, t), t++;
      else if (f = Rc(e.fiber), f !== null)
        if (e.serverProps === void 0) {
          i = t;
          var d = 120 - 2 * i - f.length - 2, h = "";
          for (p in o)
            if (o.hasOwnProperty(p) && p !== "children") {
              var y = ii(o[p], 15);
              if (d -= p.length + y.length + 2, 0 > d) {
                h += " ...";
                break;
              }
              h += " " + p + "=" + y;
            }
          i = Ra(i) + "<" + f + h + `>
`, t++;
        } else
          e.serverProps === null ? (i = xo(
            f,
            o,
            Dc(t)
          ), t++) : typeof e.serverProps == "string" ? console.error(
            "Should not have matched a non HostText fiber to a Text node. This is a bug in React."
          ) : (i = vn(
            f,
            o,
            e.serverProps,
            t
          ), t++);
      var p = "";
      for (o = e.fiber.child, f = 0; o && f < e.children.length; )
        d = e.children[f], d.fiber === o ? (p += Nm(d, t), f++) : p += Hm(o, t), o = o.sibling;
      for (o && 0 < e.children.length && (p += Ra(t) + `...
`), o = e.serverTail, e.serverProps === null && t--, e = 0; e < o.length; e++)
        f = o[e], p = typeof f == "string" ? p + (Wa(t) + is(f, 120 - 2 * t) + `
`) : p + xo(
          f.type,
          f.props,
          Wa(t)
        );
      return a + i + p;
    }
    function fs(e) {
      try {
        return `

` + Nm(e, 0);
      } catch {
        return "";
      }
    }
    function Bm(e, t, a) {
      for (var i = t, o = null, f = 0; i; )
        i === e && (f = 0), o = {
          fiber: i,
          children: o !== null ? [o] : [],
          serverProps: i === t ? a : i === e ? null : void 0,
          serverTail: [],
          distanceFromLeaf: f
        }, f++, i = i.return;
      return o !== null ? fs(o).replaceAll(/^[+-]/gm, ">") : "";
    }
    function ss(e, t) {
      var a = Ve({}, e || $), i = { tag: t };
      return T.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), H.indexOf(t) !== -1 && (a.pTagInButtonScope = null), g.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), t === "#document" || t === "html" ? a.containerTagInScope = null : a.containerTagInScope || (a.containerTagInScope = i), e !== null || t !== "#document" && t !== "html" && t !== "body" ? a.implicitRootScope === !0 && (a.implicitRootScope = !1) : a.implicitRootScope = !0, a;
    }
    function U0(e, t, a) {
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
    function gn(e, t) {
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
    function dd(e, t) {
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
    function hd(e, t) {
      t = t || $;
      var a = t.current;
      if (t = (a = U0(
        e,
        a && a.tag,
        t.implicitRootScope
      ) ? null : a) ? null : gn(e, t), t = a || t, !t) return !0;
      var i = t.tag;
      if (t = String(!!a) + "|" + e + "|" + i, B[t]) return !1;
      B[t] = !0;
      var o = (t = on) ? dd(t.return, i) : null, f = t !== null && o !== null ? Bm(o, t, null) : "", d = "<" + e + ">";
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
    function Go(e, t, a) {
      if (a || U0("#text", t, !1))
        return !0;
      if (a = "#text|" + t, B[a]) return !1;
      B[a] = !0;
      var i = (a = on) ? dd(a, t) : null;
      return a = a !== null && i !== null ? Bm(
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
    function cu(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === 3) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }
    function H0(e) {
      return e.replace(D, function(t, a) {
        return a.toUpperCase();
      });
    }
    function Ym(e, t, a) {
      var i = t.indexOf("--") === 0;
      i || (-1 < t.indexOf("-") ? J.hasOwnProperty(t) && J[t] || (J[t] = !0, console.error(
        "Unsupported style property %s. Did you mean %s?",
        t,
        H0(t.replace(C, "ms-"))
      )) : Ht.test(t) ? J.hasOwnProperty(t) && J[t] || (J[t] = !0, console.error(
        "Unsupported vendor-prefixed style property %s. Did you mean %s?",
        t,
        t.charAt(0).toUpperCase() + t.slice(1)
      )) : !U.test(a) || Se.hasOwnProperty(a) && Se[a] || (Se[a] = !0, console.error(
        `Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`,
        t,
        a.replace(U, "")
      )), typeof a == "number" && (isNaN(a) ? mt || (mt = !0, console.error(
        "`NaN` is an invalid value for the `%s` css style property.",
        t
      )) : isFinite(a) || pe || (pe = !0, console.error(
        "`Infinity` is an invalid value for the `%s` css style property.",
        t
      )))), a == null || typeof a == "boolean" || a === "" ? i ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : i ? e.setProperty(t, a) : typeof a != "number" || a === 0 || Xe.has(t) ? t === "float" ? e.cssFloat = a : (xl(a, t), e[t] = ("" + a).trim()) : e[t] = a + "px";
    }
    function Mc(e, t, a) {
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
    function rs(e) {
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
      return yc.get(e) || e;
    }
    function N0(e, t) {
      if (Fn.call(Ih, t) && Ih[t])
        return !0;
      if (kE.test(t)) {
        if (e = "aria-" + t.slice(4).toLowerCase(), e = S1.hasOwnProperty(e) ? e : null, e == null)
          return console.error(
            "Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.",
            t
          ), Ih[t] = !0;
        if (t !== e)
          return console.error(
            "Invalid ARIA attribute `%s`. Did you mean `%s`?",
            t,
            e
          ), Ih[t] = !0;
      }
      if ($E.test(t)) {
        if (e = t.toLowerCase(), e = S1.hasOwnProperty(e) ? e : null, e == null) return Ih[t] = !0, !1;
        t !== e && (console.error(
          "Unknown ARIA attribute `%s`. Did you mean `%s`?",
          t,
          e
        ), Ih[t] = !0);
      }
      return !0;
    }
    function jm(e, t) {
      var a = [], i;
      for (i in t)
        N0(e, i) || a.push(i);
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
    function Vg(e, t, a, i) {
      if (Fn.call(sn, t) && sn[t])
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
        if (E1.test(t))
          return console.error(
            "Unknown event handler property `%s`. It will be ignored.",
            t
          ), sn[t] = !0;
      } else if (E1.test(t))
        return WE.test(t) && console.error(
          "Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.",
          t
        ), sn[t] = !0;
      if (FE.test(t) || IE.test(t)) return !0;
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
      if (Fh.hasOwnProperty(o)) {
        if (o = Fh[o], o !== t)
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
    function Zg(e, t, a) {
      var i = [], o;
      for (o in t)
        Vg(e, o, t[o], a) || i.push(o);
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
    function Qi(e) {
      return PE.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
    }
    function wl() {
    }
    function ds(e) {
      return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
    }
    function md(e) {
      var t = le(e);
      if (t && (e = t.stateNode)) {
        var a = e[fa] || null;
        e: switch (e = t.stateNode, t.type) {
          case "input":
            if (us(
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
              for (At(t, "name"), a = a.querySelectorAll(
                'input[name="' + Lt(
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
                  us(
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
                i = a[t], i.form === e.form && ui(i);
            }
            break e;
          case "textarea":
            jo(e, a.value, a.defaultValue);
            break e;
          case "select":
            t = a.value, t != null && Xi(e, !!a.multiple, t, !1);
        }
      }
    }
    function Cc(e, t, a) {
      if (cS) return e(t, a);
      cS = !0;
      try {
        var i = e(t);
        return i;
      } finally {
        if (cS = !1, (Ph !== null || em !== null) && (lo(), Ph && (t = Ph, e = em, em = Ph = null, md(t), e)))
          for (t = 0; t < e.length; t++) md(e[t]);
      }
    }
    function ou(e, t) {
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
    function xm() {
      if (Lv) return Lv;
      var e, t = fS, a = t.length, i, o = "value" in Cf ? Cf.value : Cf.textContent, f = o.length;
      for (e = 0; e < a && t[e] === o[e]; e++) ;
      var d = a - e;
      for (i = 1; i <= d && t[a - i] === o[f - i]; i++) ;
      return Lv = o.slice(e, 1 < i ? 1 - i : void 0);
    }
    function wo(e) {
      var t = e.keyCode;
      return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
    }
    function hs() {
      return !0;
    }
    function Xo() {
      return !1;
    }
    function nl(e) {
      function t(a, i, o, f, d) {
        this._reactName = a, this._targetInst = o, this.type = i, this.nativeEvent = f, this.target = d, this.currentTarget = null;
        for (var h in e)
          e.hasOwnProperty(h) && (a = e[h], this[h] = a ? a(f) : f[h]);
        return this.isDefaultPrevented = (f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === !1) ? hs : Xo, this.isPropagationStopped = Xo, this;
      }
      return Ve(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = hs);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = hs);
        },
        persist: function() {
        },
        isPersistent: hs
      }), t;
    }
    function Gm(e) {
      var t = this.nativeEvent;
      return t.getModifierState ? t.getModifierState(e) : (e = dT[e]) ? !!t[e] : !1;
    }
    function Uc() {
      return Gm;
    }
    function oi(e, t) {
      switch (e) {
        case "keyup":
          return OT.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== z1;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function yd(e) {
      return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
    }
    function pd(e, t) {
      switch (e) {
        case "compositionend":
          return yd(t);
        case "keypress":
          return t.which !== D1 ? null : (M1 = !0, R1);
        case "textInput":
          return e = t.data, e === R1 && M1 ? null : e;
        default:
          return null;
      }
    }
    function B0(e, t) {
      if (tm)
        return e === "compositionend" || !hS && oi(e, t) ? (e = xm(), Lv = fS = Cf = null, tm = !1, e) : null;
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
          return _1 && t.locale !== "ko" ? null : t.data;
        default:
          return null;
      }
    }
    function ms(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!_T[e.type] : t === "textarea";
    }
    function vd(e) {
      if (!pc) return !1;
      e = "on" + e;
      var t = e in document;
      return t || (t = document.createElement("div"), t.setAttribute(e, "return;"), t = typeof t[e] == "function"), t;
    }
    function wm(e, t, a, i) {
      Ph ? em ? em.push(i) : em = [i] : Ph = i, t = wu(t, "onChange"), 0 < t.length && (a = new Vv(
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
    function fu(e) {
      var t = re(e);
      if (ui(t)) return e;
    }
    function ys(e, t) {
      if (e === "change") return t;
    }
    function Qo() {
      jp && (jp.detachEvent("onpropertychange", Y0), xp = jp = null);
    }
    function Y0(e) {
      if (e.propertyName === "value" && fu(xp)) {
        var t = [];
        wm(
          t,
          xp,
          e,
          ds(e)
        ), Cc(Ma, t);
      }
    }
    function Xm(e, t, a) {
      e === "focusin" ? (Qo(), jp = t, xp = a, jp.attachEvent("onpropertychange", Y0)) : e === "focusout" && Qo();
    }
    function Qm(e) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return fu(xp);
    }
    function ps(e, t) {
      if (e === "click") return fu(t);
    }
    function gd(e, t) {
      if (e === "input" || e === "change")
        return fu(t);
    }
    function q0(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    function vs(e, t) {
      if (rn(e, t)) return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length) return !1;
      for (i = 0; i < a.length; i++) {
        var o = a[i];
        if (!Fn.call(t, o) || !rn(e[o], t[o]))
          return !1;
      }
      return !0;
    }
    function j0(e) {
      for (; e && e.firstChild; ) e = e.firstChild;
      return e;
    }
    function x0(e, t) {
      var a = j0(e);
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
        a = j0(a);
      }
    }
    function Sd(e, t) {
      return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Sd(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
    }
    function G0(e) {
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
    function Lm(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function w0(e, t, a) {
      var i = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
      yS || lm == null || lm !== vl(i) || (i = lm, "selectionStart" in i && Lm(i) ? i = { start: i.selectionStart, end: i.selectionEnd } : (i = (i.ownerDocument && i.ownerDocument.defaultView || window).getSelection(), i = {
        anchorNode: i.anchorNode,
        anchorOffset: i.anchorOffset,
        focusNode: i.focusNode,
        focusOffset: i.focusOffset
      }), Gp && vs(Gp, i) || (Gp = i, i = wu(mS, "onSelect"), 0 < i.length && (t = new Vv(
        "onSelect",
        "select",
        null,
        t,
        a
      ), e.push({ event: t, listeners: i }), t.target = lm)));
    }
    function Hc(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    function Nc(e) {
      if (pS[e]) return pS[e];
      if (!am[e]) return e;
      var t = am[e], a;
      for (a in t)
        if (t.hasOwnProperty(a) && a in U1)
          return pS[e] = t[a];
      return e;
    }
    function Sn(e, t) {
      q1.set(e, t), ct(t, [e]);
    }
    function Jg(e) {
      for (var t = Jv, a = 0; a < e.length; a++) {
        var i = e[a];
        if (typeof i == "object" && i !== null)
          if (Ol(i) && i.length === 2 && typeof i[0] == "string") {
            if (t !== Jv && t !== ES)
              return SS;
            t = ES;
          } else return SS;
        else {
          if (typeof i == "function" || typeof i == "string" && 50 < i.length || t !== Jv && t !== bS)
            return SS;
          t = bS;
        }
      }
      return t;
    }
    function Vm(e, t, a, i) {
      for (var o in e)
        Fn.call(e, o) && o[0] !== "_" && su(o, e[o], t, a, i);
    }
    function su(e, t, a, i, o) {
      switch (typeof t) {
        case "object":
          if (t === null) {
            t = "null";
            break;
          } else {
            if (t.$$typeof === Cn) {
              var f = et(t.type) || "…", d = t.key;
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
                p === "children" ? t.children != null && (!Ol(t.children) || 0 < t.children.length) && (e = !0) : Fn.call(t, p) && p[0] !== "_" && su(
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
              if (p = Jg(t), p === bS || p === Jv) {
                t = JSON.stringify(t);
                break;
              } else if (p === ES) {
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
            ]), 3 > i && Vm(t, a, i + 1, o);
            return;
          }
        case "function":
          t = t.name === "" ? "() => {}" : t.name + "() {}";
          break;
        case "string":
          t = t === NT ? "…" : JSON.stringify(t);
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
    function X0(e, t, a, i) {
      var o = !0;
      for (d in e)
        d in t || (a.push([
          Kv + "  ".repeat(i) + d,
          "…"
        ]), o = !1);
      for (var f in t)
        if (f in e) {
          var d = e[f], h = t[f];
          if (d !== h) {
            if (i === 0 && f === "children")
              o = "  ".repeat(i) + f, a.push(
                [Kv + o, "…"],
                [$v + o, "…"]
              );
            else {
              if (!(3 <= i)) {
                if (typeof d == "object" && typeof h == "object" && d !== null && h !== null && d.$$typeof === h.$$typeof)
                  if (h.$$typeof === Cn) {
                    if (d.type === h.type && d.key === h.key) {
                      d = et(h.type) || "…", o = "  ".repeat(i) + f, d = "<" + d + " … />", a.push(
                        [Kv + o, d],
                        [$v + o, d]
                      ), o = !1;
                      continue;
                    }
                  } else {
                    var y = Object.prototype.toString.call(d), p = Object.prototype.toString.call(h);
                    if (y === p && (p === "[object Object]" || p === "[object Array]")) {
                      y = [
                        G1 + "  ".repeat(i) + f,
                        p === "[object Array]" ? "Array" : ""
                      ], a.push(y), p = a.length, X0(
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
                    G1 + "  ".repeat(i) + f,
                    d + " Referentially unequal function closure. Consider memoization."
                  ]);
                  continue;
                }
              }
              su(f, d, a, i, Kv), su(f, h, a, i, $v);
            }
            o = !1;
          }
        } else
          a.push([
            $v + "  ".repeat(i) + f,
            "…"
          ]), o = !1;
      return o;
    }
    function Fa(e) {
      rt = e & 63 ? "Blocking" : e & 64 ? "Gesture" : e & 4194176 ? "Transition" : e & 62914560 ? "Suspense" : e & 2080374784 ? "Idle" : "Other";
    }
    function ru(e, t, a, i) {
      $t && (Hf.start = t, Hf.end = a, vo.color = "warning", vo.tooltipText = i, vo.properties = null, (e = e._debugTask) ? e.run(
        performance.measure.bind(
          performance,
          i,
          Hf
        )
      ) : performance.measure(i, Hf));
    }
    function bd(e, t, a) {
      ru(e, t, a, "Reconnect");
    }
    function Ed(e, t, a, i, o) {
      var f = se(e);
      if (f !== null && $t) {
        var d = e.alternate, h = e.actualDuration;
        if (d === null || d.child !== e.child)
          for (var y = e.child; y !== null; y = y.sibling)
            h -= y.actualDuration;
        i = 0.5 > h ? i ? "tertiary-light" : "primary-light" : 10 > h ? i ? "tertiary" : "primary" : 100 > h ? i ? "tertiary-dark" : "primary-dark" : "error";
        var p = e.memoizedProps;
        h = e._debugTask, p !== null && d !== null && d.memoizedProps !== p ? (y = [BT], p = X0(
          d.memoizedProps,
          p,
          y,
          0
        ), 1 < y.length && (p && !Uf && (d.lanes & o) === 0 && 100 < e.actualDuration ? (Uf = !0, y[0] = YT, vo.color = "warning", vo.tooltipText = w1) : (vo.color = i, vo.tooltipText = f), vo.properties = y, Hf.start = t, Hf.end = a, h != null ? h.run(
          performance.measure.bind(
            performance,
            "​" + f,
            Hf
          )
        ) : performance.measure(
          "​" + f,
          Hf
        ))) : h != null ? h.run(
          console.timeStamp.bind(
            console,
            f,
            t,
            a,
            Ju,
            void 0,
            i
          )
        ) : console.timeStamp(
          f,
          t,
          a,
          Ju,
          void 0,
          i
        );
      }
    }
    function Td(e, t, a, i) {
      if ($t) {
        var o = se(e);
        if (o !== null) {
          for (var f = null, d = [], h = 0; h < i.length; h++) {
            var y = i[h];
            f == null && y.source !== null && (f = y.source._debugTask), y = y.value, d.push([
              "Error",
              typeof y == "object" && y !== null && typeof y.message == "string" ? String(y.message) : String(y)
            ]);
          }
          e.key !== null && su("key", e.key, d, 0, ""), e.memoizedProps !== null && Vm(e.memoizedProps, d, 0, ""), f == null && (f = e._debugTask), e = {
            start: t,
            end: a,
            detail: {
              devtools: {
                color: "error",
                track: Ju,
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
    function du(e, t, a, i, o) {
      if (o !== null) {
        if ($t) {
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
            e.key !== null && su("key", e.key, i, 0, ""), e.memoizedProps !== null && Vm(e.memoizedProps, i, 0, ""), t = {
              start: t,
              end: a,
              detail: {
                devtools: {
                  color: "error",
                  track: Ju,
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
        f = se(e), f !== null && $t && (o = 1 > i ? "secondary-light" : 100 > i ? "secondary" : 500 > i ? "secondary-dark" : "error", (e = e._debugTask) ? e.run(
          console.timeStamp.bind(
            console,
            f,
            t,
            a,
            Ju,
            void 0,
            o
          )
        ) : console.timeStamp(
          f,
          t,
          a,
          Ju,
          void 0,
          o
        ));
    }
    function Kg(e, t, a, i) {
      if ($t && !(t <= e)) {
        var o = (a & 738197653) === a ? "tertiary-dark" : "primary-dark";
        a = (a & 536870912) === a ? "Prepared" : (a & 201326741) === a ? "Hydrated" : "Render", i ? i.run(
          console.timeStamp.bind(
            console,
            a,
            e,
            t,
            rt,
            ft,
            o
          )
        ) : console.timeStamp(
          a,
          e,
          t,
          rt,
          ft,
          o
        );
      }
    }
    function Q0(e, t, a, i) {
      !$t || t <= e || (a = (a & 738197653) === a ? "tertiary-dark" : "primary-dark", i ? i.run(
        console.timeStamp.bind(
          console,
          "Prewarm",
          e,
          t,
          rt,
          ft,
          a
        )
      ) : console.timeStamp(
        "Prewarm",
        e,
        t,
        rt,
        ft,
        a
      ));
    }
    function L0(e, t, a, i) {
      !$t || t <= e || (a = (a & 738197653) === a ? "tertiary-dark" : "primary-dark", i ? i.run(
        console.timeStamp.bind(
          console,
          "Suspended",
          e,
          t,
          rt,
          ft,
          a
        )
      ) : console.timeStamp(
        "Suspended",
        e,
        t,
        rt,
        ft,
        a
      ));
    }
    function $g(e, t, a, i, o, f) {
      if ($t && !(t <= e)) {
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
              track: rt,
              trackGroup: ft,
              tooltipText: o ? "Hydration Failed" : "Recovered after Error",
              properties: a
            }
          }
        }, f ? f.run(
          performance.measure.bind(performance, "Recovered", e)
        ) : performance.measure("Recovered", e);
      }
    }
    function Zm(e, t, a, i) {
      !$t || t <= e || (i ? i.run(
        console.timeStamp.bind(
          console,
          "Errored",
          e,
          t,
          rt,
          ft,
          "error"
        )
      ) : console.timeStamp(
        "Errored",
        e,
        t,
        rt,
        ft,
        "error"
      ));
    }
    function kg(e, t, a, i) {
      !$t || t <= e || (i ? i.run(
        console.timeStamp.bind(
          console,
          a,
          e,
          t,
          rt,
          ft,
          "secondary-light"
        )
      ) : console.timeStamp(
        a,
        e,
        t,
        rt,
        ft,
        "secondary-light"
      ));
    }
    function V0(e, t, a, i, o) {
      if ($t && !(t <= e)) {
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
              track: rt,
              trackGroup: ft,
              tooltipText: i ? "Remaining Effects Errored" : "Commit Errored",
              properties: f
            }
          }
        }, o ? o.run(
          performance.measure.bind(performance, "Errored", e)
        ) : performance.measure("Errored", e);
      }
    }
    function Jm(e, t, a) {
      !$t || t <= e || console.timeStamp(
        "Animating",
        e,
        t,
        rt,
        ft,
        "secondary-dark"
      );
    }
    function Lo() {
      for (var e = nm, t = TS = nm = 0; t < e; ) {
        var a = Ku[t];
        Ku[t++] = null;
        var i = Ku[t];
        Ku[t++] = null;
        var o = Ku[t];
        Ku[t++] = null;
        var f = Ku[t];
        if (Ku[t++] = null, i !== null && o !== null) {
          var d = i.pending;
          d === null ? o.next = o : (o.next = d.next, d.next = o), i.pending = o;
        }
        f !== 0 && $m(a, o, f);
      }
    }
    function Li(e, t, a, i) {
      Ku[nm++] = e, Ku[nm++] = t, Ku[nm++] = a, Ku[nm++] = i, TS |= i, e.lanes |= i, e = e.alternate, e !== null && (e.lanes |= i);
    }
    function Km(e, t, a, i) {
      return Li(e, t, a, i), gs(e);
    }
    function Xl(e, t) {
      return Li(e, null, null, t), gs(e);
    }
    function $m(e, t, a) {
      e.lanes |= a;
      var i = e.alternate;
      i !== null && (i.lanes |= a);
      for (var o = !1, f = e.return; f !== null; )
        f.childLanes |= a, i = f.alternate, i !== null && (i.childLanes |= a), f.tag === 22 && (e = f.stateNode, e === null || e._visibility & wp || (o = !0)), e = f, f = f.return;
      return e.tag === 3 ? (f = e.stateNode, o && t !== null && (o = 31 - kl(a), e = f.hiddenUpdates, i = e[o], i === null ? e[o] = [t] : i.push(t), t.lane = a | 536870912), f) : null;
    }
    function gs(e) {
      if (h0 > FT)
        throw td = h0 = 0, m0 = t1 = null, Error(
          "Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops."
        );
      td > IT && (td = 0, m0 = null, console.error(
        "Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."
      )), e.alternate === null && (e.flags & 4098) !== 0 && Wy(e);
      for (var t = e, a = t.return; a !== null; )
        t.alternate === null && (t.flags & 4098) !== 0 && Wy(e), t = a, a = t.return;
      return t.tag === 3 ? t.stateNode : null;
    }
    function Vi(e) {
      if ($u === null) return e;
      var t = $u(e);
      return t === void 0 ? e : t.current;
    }
    function Ad(e) {
      if ($u === null) return e;
      var t = $u(e);
      return t === void 0 ? e != null && typeof e.render == "function" && (t = Vi(e.render), e.render !== t) ? (t = { $$typeof: _i, render: t }, e.displayName !== void 0 && (t.displayName = e.displayName), t) : e : t.current;
    }
    function Bc(e, t) {
      if ($u === null) return !1;
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
          (o === _i || o === ml) && (i = !0);
          break;
        case 14:
        case 15:
          (o === ho || o === ml) && (i = !0);
          break;
        default:
          return !1;
      }
      return !!(i && (e = $u(a), e !== void 0 && e === $u(t)));
    }
    function Z0(e) {
      $u !== null && typeof WeakSet == "function" && (um === null && (um = /* @__PURE__ */ new WeakSet()), um.add(e));
    }
    function J0(e, t, a) {
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
        if ($u === null)
          throw Error("Expected resolveFamily to be set during hot reload.");
        var p = !1;
        if (i = !1, y !== null && (y = $u(y), y !== void 0 && (a.has(y) ? i = !0 : t.has(y) && (h === 1 ? i = !0 : p = !0))), um !== null && (um.has(e) || o !== null && um.has(o)) && (i = !0), i && (e._debugNeedsRemount = !0), (i || p) && (o = Xl(e, 2), o !== null && el(o, e, 2)), f === null || i || J0(
          f,
          t,
          a
        ), d === null) break;
        e = d;
      } while (!0);
    }
    function Wg(e, t, a, i) {
      this.tag = e, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = i, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null, this.actualDuration = -0, this.actualStartTime = -1.1, this.treeBaseDuration = this.selfBaseDuration = -0, this._debugTask = this._debugStack = this._debugOwner = this._debugInfo = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, X1 || typeof Object.preventExtensions != "function" || Object.preventExtensions(this);
    }
    function Od(e) {
      return e = e.prototype, !(!e || !e.isReactComponent);
    }
    function hu(e, t) {
      var a = e.alternate;
      switch (a === null ? (a = N(
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
          a.type = Vi(e.type);
          break;
        case 1:
          a.type = Vi(e.type);
          break;
        case 11:
          a.type = Ad(e.type);
      }
      return a;
    }
    function Vo(e, t) {
      e.flags &= 65011714;
      var a = e.alternate;
      return a === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0) : (e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type, t = a.dependencies, e.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext,
        _debugThenableState: t._debugThenableState
      }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration), e;
    }
    function Yc(e, t, a, i, o, f) {
      var d = 0, h = e;
      if (typeof e == "function")
        Od(e) && (d = 1), h = Vi(h);
      else if (typeof e == "string")
        d = P(), d = lt(e, a, d) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
      else
        e: switch (e) {
          case Ap:
            return t = N(31, a, t, o), t.elementType = Ap, t.lanes = f, t;
          case $l:
            return mu(
              a.children,
              o,
              f,
              t
            );
          case zf:
            d = 8, o |= Ja, o |= Ci;
            break;
          case qh:
            return e = a, i = o, typeof e.id != "string" && console.error(
              'Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.',
              typeof e.id
            ), t = N(12, e, t, i | Je), t.elementType = qh, t.lanes = f, t.stateNode = { effectDuration: 0, passiveEffectDuration: 0 }, t;
          case Za:
            return t = N(13, a, t, o), t.elementType = Za, t.lanes = f, t;
          case xh:
            return t = N(19, a, t, o), t.elementType = xh, t.lanes = f, t;
          default:
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case Wn:
                  d = 10;
                  break e;
                case jh:
                  d = 9;
                  break e;
                case _i:
                  d = 11, h = Ad(h);
                  break e;
                case ho:
                  d = 14;
                  break e;
                case ml:
                  d = 16, h = null;
                  break e;
              }
            h = "", (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (h += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), e === null ? a = "null" : Ol(e) ? a = "array" : e !== void 0 && e.$$typeof === Cn ? (a = "<" + (et(e.type) || "Unknown") + " />", h = " Did you accidentally export a JSX literal instead of a component?") : a = typeof e, (d = i ? Qt(i) : null) && (h += `

Check the render method of \`` + d + "`."), d = 29, a = Error(
              "Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + (a + "." + h)
            ), h = null;
        }
      return t = N(d, a, t, o), t.elementType = e, t.type = h, t.lanes = f, t._debugOwner = i, t;
    }
    function zd(e, t, a) {
      return t = Yc(
        e.type,
        e.key,
        e.props,
        e._owner,
        t,
        a
      ), t._debugOwner = e._owner, t._debugStack = e._debugStack, t._debugTask = e._debugTask, t;
    }
    function mu(e, t, a, i) {
      return e = N(7, e, i, t), e.lanes = a, e;
    }
    function _d(e, t, a) {
      return e = N(6, e, null, t), e.lanes = a, e;
    }
    function km(e) {
      var t = N(18, null, null, De);
      return t.stateNode = e, t;
    }
    function Ss(e, t, a) {
      return t = N(
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
        var a = AS.get(e);
        return a !== void 0 ? a : (t = {
          value: e,
          source: t,
          stack: ke(t)
        }, AS.set(e, t), t);
      }
      return {
        value: e,
        source: t,
        stack: ke(t)
      };
    }
    function yu(e, t) {
      Zi(), im[cm++] = Xp, im[cm++] = kv, kv = e, Xp = t;
    }
    function Wm(e, t, a) {
      Zi(), ku[Wu++] = So, ku[Wu++] = bo, ku[Wu++] = wr, wr = e;
      var i = So;
      e = bo;
      var o = 32 - kl(i) - 1;
      i &= ~(1 << o), a += 1;
      var f = 32 - kl(t) + o;
      if (30 < f) {
        var d = o - o % 5;
        f = (i & (1 << d) - 1).toString(32), i >>= d, o -= d, So = 1 << 32 - kl(t) + o | a << o | i, bo = f + e;
      } else
        So = 1 << f | a << o | i, bo = e;
    }
    function Dd(e) {
      Zi(), e.return !== null && (yu(e, 1), Wm(e, 1, 0));
    }
    function Fm(e) {
      for (; e === kv; )
        kv = im[--cm], im[cm] = null, Xp = im[--cm], im[cm] = null;
      for (; e === wr; )
        wr = ku[--Wu], ku[Wu] = null, bo = ku[--Wu], ku[Wu] = null, So = ku[--Wu], ku[Wu] = null;
    }
    function K0() {
      return Zi(), wr !== null ? { id: So, overflow: bo } : null;
    }
    function $0(e, t) {
      Zi(), ku[Wu++] = So, ku[Wu++] = bo, ku[Wu++] = wr, So = t.id, bo = t.overflow, wr = e;
    }
    function Zi() {
      it || console.error(
        "Expected to be hydrating. This is a bug in React. Please file an issue."
      );
    }
    function qc(e, t) {
      if (e.return === null) {
        if (Pn === null)
          Pn = {
            fiber: e,
            children: [],
            serverProps: void 0,
            serverTail: [],
            distanceFromLeaf: t
          };
        else {
          if (Pn.fiber !== e)
            throw Error(
              "Saw multiple hydration diff roots in a pass. This is a bug in React."
            );
          Pn.distanceFromLeaf > t && (Pn.distanceFromLeaf = t);
        }
        return Pn;
      }
      var a = qc(
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
      it && console.error(
        "We should not be hydrating here. This is a bug in React. Please file a bug."
      );
    }
    function Ji(e, t) {
      vc || (e = qc(e, 0), e.serverProps = null, t !== null && (t = _v(t), e.serverTail.push(t)));
    }
    function fi(e) {
      var t = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : !1, a = "", i = Pn;
      throw i !== null && (Pn = null, a = fs(i)), pu(
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
      ), OS;
    }
    function Im(e) {
      var t = e.stateNode, a = e.type, i = e.memoizedProps;
      switch (t[Fl] = e, t[fa] = i, sc(a, i), a) {
        case "dialog":
          qe("cancel", t), qe("close", t);
          break;
        case "iframe":
        case "object":
        case "embed":
          qe("load", t);
          break;
        case "video":
        case "audio":
          for (a = 0; a < y0.length; a++)
            qe(y0[a], t);
          break;
        case "source":
          qe("error", t);
          break;
        case "img":
        case "image":
        case "link":
          qe("error", t), qe("load", t);
          break;
        case "details":
          qe("toggle", t);
          break;
        case "input":
          Gl("input", i), qe("invalid", t), Ac(t, i), C0(
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
          Um(t, i);
          break;
        case "select":
          Gl("select", i), qe("invalid", t), Oc(t, i);
          break;
        case "textarea":
          Gl("textarea", i), qe("invalid", t), zc(t, i), _c(
            t,
            i.value,
            i.defaultValue,
            i.children
          );
      }
      a = i.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || t.textContent === "" + a || i.suppressHydrationWarning === !0 || yr(t.textContent, a) ? (i.popover != null && (qe("beforetoggle", t), qe("toggle", t)), i.onScroll != null && qe("scroll", t), i.onScrollEnd != null && qe("scrollend", t), i.onClick != null && (t.onclick = wl), t = !0) : t = !1, t || fi(e, !0);
    }
    function Pm(e) {
      for (Oa = e.return; Oa; )
        switch (Oa.tag) {
          case 5:
          case 31:
          case 13:
            Fu = !1;
            return;
          case 27:
          case 3:
            Fu = !0;
            return;
          default:
            Oa = Oa.return;
        }
    }
    function jc(e) {
      if (e !== Oa) return !1;
      if (!it)
        return Pm(e), it = !0, !1;
      var t = e.tag, a;
      if ((a = t !== 3 && t !== 27) && ((a = t === 5) && (a = e.type, a = !(a !== "form" && a !== "button") || vr(e.type, e.memoizedProps)), a = !a), a && kt) {
        for (a = kt; a; ) {
          var i = qc(e, 0), o = _v(a);
          i.serverTail.push(o), a = o.type === "Suspense" ? dc(a) : cn(a.nextSibling);
        }
        fi(e);
      }
      if (Pm(e), t === 13) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
          throw Error(
            "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue."
          );
        kt = dc(e);
      } else if (t === 31) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
          throw Error(
            "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue."
          );
        kt = dc(e);
      } else
        t === 27 ? (t = kt, zi(e.type) ? (e = h1, h1 = null, kt = e) : kt = t) : kt = Oa ? cn(e.stateNode.nextSibling) : null;
      return !0;
    }
    function si() {
      kt = Oa = null, vc = it = !1;
    }
    function ey() {
      var e = Bf;
      return e !== null && (yn === null ? yn = e : yn.push.apply(
        yn,
        e
      ), Bf = null), e;
    }
    function pu(e) {
      Bf === null ? Bf = [e] : Bf.push(e);
    }
    function bs() {
      var e = Pn;
      if (e !== null) {
        Pn = null;
        for (var t = fs(e); 0 < e.children.length; )
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
    function Ki() {
      om = Wv = null, fm = !1;
    }
    function vu(e, t, a) {
      Re(zS, t._currentValue, e), t._currentValue = a, Re(_S, t._currentRenderer, e), t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== L1 && console.error(
        "Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."
      ), t._currentRenderer = L1;
    }
    function gu(e, t) {
      e._currentValue = zS.current;
      var a = _S.current;
      Te(_S, t), e._currentRenderer = a, Te(zS, t);
    }
    function ri(e, t, a) {
      for (; e !== null; ) {
        var i = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t, i !== null && (i.childLanes |= t)) : i !== null && (i.childLanes & t) !== t && (i.childLanes |= t), e === a) break;
        e = e.return;
      }
      e !== a && console.error(
        "Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue."
      );
    }
    function $i(e, t, a, i) {
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
                f.lanes |= a, h = f.alternate, h !== null && (h.lanes |= a), ri(
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
          d.lanes |= a, f = d.alternate, f !== null && (f.lanes |= a), ri(
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
    function ki(e, t, a, i) {
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
            rn(o.pendingProps.value, d.value) || (e !== null ? e.push(h) : e = [h]);
          }
        } else if (o === Mr.current) {
          if (d = o.alternate, d === null)
            throw Error("Should have a current fiber. This is a bug in React.");
          d.memoizedState.memoizedState !== o.memoizedState.memoizedState && (e !== null ? e.push(b0) : e = [b0]);
        }
        o = o.return;
      }
      e !== null && $i(
        t,
        e,
        a,
        i
      ), t.flags |= 262144;
    }
    function Es(e) {
      for (e = e.firstContext; e !== null; ) {
        if (!rn(
          e.context._currentValue,
          e.memoizedValue
        ))
          return !0;
        e = e.next;
      }
      return !1;
    }
    function Ia(e) {
      Wv = e, om = null, e = e.dependencies, e !== null && (e.firstContext = null);
    }
    function jt(e) {
      return fm && console.error(
        "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
      ), ty(Wv, e);
    }
    function Ts(e, t) {
      return Wv === null && Ia(e), ty(e, t);
    }
    function ty(e, t) {
      var a = t._currentValue;
      if (t = { context: t, memoizedValue: a, next: null }, om === null) {
        if (e === null)
          throw Error(
            "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
          );
        om = t, e.dependencies = {
          lanes: 0,
          firstContext: t,
          _debugThenableState: null
        }, e.flags |= 524288;
      } else om = om.next = t;
      return a;
    }
    function ly() {
      return {
        controller: new xT(),
        data: /* @__PURE__ */ new Map(),
        refCount: 0
      };
    }
    function xc(e) {
      e.controller.signal.aborted && console.warn(
        "A cache instance was retained after it was already freed. This likely indicates a bug in React."
      ), e.refCount++;
    }
    function As(e) {
      e.refCount--, 0 > e.refCount && console.warn(
        "A cache instance was released after it was already freed. This likely indicates a bug in React."
      ), e.refCount === 0 && GT(wT, function() {
        e.controller.abort();
      });
    }
    function Gn(e, t, a) {
      (e & 127) !== 0 ? 0 > gc && (gc = Hl(), Lp = Fv(t), DS = t, a != null && (RS = se(a)), (yt & (Pl | lu)) !== da && (yl = !0, qf = Qp), e = pf(), t = yf(), e !== sm || t !== Vp ? sm = -1.1 : t !== null && (qf = Qp), Lr = e, Vp = t) : (e & 4194048) !== 0 && 0 > Iu && (Iu = Hl(), Zp = Fv(t), V1 = t, a != null && (Z1 = se(a)), 0 > Oo) && (e = pf(), t = yf(), (e !== xf || t !== Vr) && (xf = -1.1), jf = e, Vr = t);
    }
    function k0(e) {
      if (0 > gc) {
        gc = Hl(), Lp = e._debugTask != null ? e._debugTask : null, (yt & (Pl | lu)) !== da && (qf = Qp);
        var t = pf(), a = yf();
        t !== sm || a !== Vp ? sm = -1.1 : a !== null && (qf = Qp), Lr = t, Vp = a;
      }
      0 > Iu && (Iu = Hl(), Zp = e._debugTask != null ? e._debugTask : null, 0 > Oo) && (e = pf(), t = yf(), (e !== xf || t !== Vr) && (xf = -1.1), jf = e, Vr = t);
    }
    function wn() {
      var e = Xr;
      return Xr = 0, e;
    }
    function Ua(e) {
      var t = Xr;
      return Xr = e, t;
    }
    function Wi(e) {
      var t = Xr;
      return Xr += e, t;
    }
    function ma() {
      _e = Ae = -1.1;
    }
    function Ml() {
      var e = Ae;
      return Ae = -1.1, e;
    }
    function ya(e) {
      0 <= e && (Ae = e);
    }
    function Pa() {
      var e = rl;
      return rl = -0, e;
    }
    function en(e) {
      0 <= e && (rl = e);
    }
    function bn() {
      var e = tl;
      return tl = null, e;
    }
    function ta() {
      var e = yl;
      return yl = !1, e;
    }
    function Rd(e) {
      dn = Hl(), 0 > e.actualStartTime && (e.actualStartTime = dn);
    }
    function Zo(e) {
      if (0 <= dn) {
        var t = Hl() - dn;
        e.actualDuration += t, e.selfBaseDuration = t, dn = -1;
      }
    }
    function Gc(e) {
      if (0 <= dn) {
        var t = Hl() - dn;
        e.actualDuration += t, dn = -1;
      }
    }
    function Su() {
      if (0 <= dn) {
        var e = Hl(), t = e - dn;
        dn = -1, Xr += t, rl += t, _e = e;
      }
    }
    function Ha(e) {
      tl === null && (tl = []), tl.push(e), To === null && (To = []), To.push(e);
    }
    function En() {
      dn = Hl(), 0 > Ae && (Ae = dn);
    }
    function tn(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function W0(e, t) {
      if (Kp === null) {
        var a = Kp = [];
        CS = 0, Zr = ht(), rm = {
          status: "pending",
          value: void 0,
          then: function(i) {
            a.push(i);
          }
        };
      }
      return CS++, t.then(Os, Os), t;
    }
    function Os() {
      if (--CS === 0 && (-1 < Iu || (Oo = -1.1), Kp !== null)) {
        rm !== null && (rm.status = "fulfilled");
        var e = Kp;
        Kp = null, Zr = 0, rm = null;
        for (var t = 0; t < e.length; t++) (0, e[t])();
      }
    }
    function wc(e, t) {
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
    function zs() {
      var e = Jr.current;
      return e !== null ? e : Xt.pooledCache;
    }
    function _s(e, t) {
      t === null ? Re(Jr, Jr.current, e) : Re(Jr, t.pool, e);
    }
    function Md() {
      var e = zs();
      return e === null ? null : { parent: Ul._currentValue, pool: e };
    }
    function ay() {
      return { didWarnAboutUncachedPromise: !1, thenables: [] };
    }
    function ln(e) {
      return e = e.status, e === "fulfilled" || e === "rejected";
    }
    function Xc(e, t, a) {
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
          throw e = t.reason, Jo(e), e;
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
              throw e = t.reason, Jo(e), e;
          }
          throw $r = t, e0 = !0, dm;
      }
    }
    function an(e) {
      try {
        return ZT(e);
      } catch (t) {
        throw t !== null && typeof t == "object" && typeof t.then == "function" ? ($r = t, e0 = !0, dm) : t;
      }
    }
    function Ds() {
      if ($r === null)
        throw Error(
          "Expected a suspended thenable. This is a bug in React. Please file an issue."
        );
      var e = $r;
      return $r = null, e0 = !1, e;
    }
    function Jo(e) {
      if (e === dm || e === ug)
        throw Error(
          "Hooks are not supported inside an async component. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server."
        );
    }
    function Ct(e) {
      var t = Ke;
      return e != null && (Ke = t === null ? e : t.concat(e)), t;
    }
    function Na() {
      var e = Ke;
      if (e != null) {
        for (var t = e.length - 1; 0 <= t; t--)
          if (e[t].name != null) {
            var a = e[t].debugTask;
            if (a != null) return a;
          }
      }
      return null;
    }
    function Xn(e, t, a) {
      for (var i = Object.keys(e.props), o = 0; o < i.length; o++) {
        var f = i[o];
        if (f !== "children" && f !== "key") {
          t === null && (t = zd(e, a.mode, 0), t._debugInfo = Ke, t.return = a), fe(
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
    function nn(e) {
      var t = t0;
      return t0 += 1, hm === null && (hm = ay()), Xc(hm, e, t);
    }
    function Ba(e, t) {
      t = t.props.ref, e.ref = t !== void 0 ? t : null;
    }
    function bu(e, t) {
      throw t.$$typeof === Tp ? Error(
        `A React Element from an older version of React was rendered. This is not supported. It can happen if:
- Multiple copies of the "react" package is used.
- A library pre-bundled an old copy of "react" or "react/jsx-runtime".
- A compiler tries to "inline" JSX instead of using the runtime.`
      ) : (e = Object.prototype.toString.call(t), Error(
        "Objects are not valid as a React child (found: " + (e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e) + "). If you meant to render a collection of children, use an array instead."
      ));
    }
    function Rs(e, t) {
      var a = Na();
      a !== null ? a.run(
        bu.bind(null, e, t)
      ) : bu(e, t);
    }
    function Cd(e, t) {
      var a = se(e) || "Component";
      rb[a] || (rb[a] = !0, t = t.displayName || t.name || "Component", e.tag === 3 ? console.error(
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
    function Ko(e, t) {
      var a = Na();
      a !== null ? a.run(
        Cd.bind(null, e, t)
      ) : Cd(e, t);
    }
    function ny(e, t) {
      var a = se(e) || "Component";
      db[a] || (db[a] = !0, t = String(t), e.tag === 3 ? console.error(
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
        ny.bind(null, e, t)
      ) : ny(e, t);
    }
    function xt(e) {
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
        return S = hu(S, E), S.index = 0, S.sibling = null, S;
      }
      function f(S, E, z) {
        return S.index = z, e ? (z = S.alternate, z !== null ? (z = z.index, z < E ? (S.flags |= 67108866, E) : z) : (S.flags |= 67108866, E)) : (S.flags |= 1048576, E);
      }
      function d(S) {
        return e && S.alternate === null && (S.flags |= 67108866), S;
      }
      function h(S, E, z, Z) {
        return E === null || E.tag !== 6 ? (E = _d(
          z,
          S.mode,
          Z
        ), E.return = S, E._debugOwner = S, E._debugTask = S._debugTask, E._debugInfo = Ke, E) : (E = o(E, z), E.return = S, E._debugInfo = Ke, E);
      }
      function y(S, E, z, Z) {
        var ue = z.type;
        return ue === $l ? (E = _(
          S,
          E,
          z.props.children,
          Z,
          z.key
        ), Xn(z, E, S), E) : E !== null && (E.elementType === ue || Bc(E, z) || typeof ue == "object" && ue !== null && ue.$$typeof === ml && an(ue) === E.type) ? (E = o(E, z.props), Ba(E, z), E.return = S, E._debugOwner = z._owner, E._debugInfo = Ke, E) : (E = zd(z, S.mode, Z), Ba(E, z), E.return = S, E._debugInfo = Ke, E);
      }
      function p(S, E, z, Z) {
        return E === null || E.tag !== 4 || E.stateNode.containerInfo !== z.containerInfo || E.stateNode.implementation !== z.implementation ? (E = Ss(z, S.mode, Z), E.return = S, E._debugInfo = Ke, E) : (E = o(E, z.children || []), E.return = S, E._debugInfo = Ke, E);
      }
      function _(S, E, z, Z, ue) {
        return E === null || E.tag !== 7 ? (E = mu(
          z,
          S.mode,
          Z,
          ue
        ), E.return = S, E._debugOwner = S, E._debugTask = S._debugTask, E._debugInfo = Ke, E) : (E = o(E, z), E.return = S, E._debugInfo = Ke, E);
      }
      function R(S, E, z) {
        if (typeof E == "string" && E !== "" || typeof E == "number" || typeof E == "bigint")
          return E = _d(
            "" + E,
            S.mode,
            z
          ), E.return = S, E._debugOwner = S, E._debugTask = S._debugTask, E._debugInfo = Ke, E;
        if (typeof E == "object" && E !== null) {
          switch (E.$$typeof) {
            case Cn:
              return z = zd(
                E,
                S.mode,
                z
              ), Ba(z, E), z.return = S, S = Ct(E._debugInfo), z._debugInfo = Ke, Ke = S, z;
            case Of:
              return E = Ss(
                E,
                S.mode,
                z
              ), E.return = S, E._debugInfo = Ke, E;
            case ml:
              var Z = Ct(E._debugInfo);
              return E = an(E), S = R(S, E, z), Ke = Z, S;
          }
          if (Ol(E) || zt(E))
            return z = mu(
              E,
              S.mode,
              z,
              null
            ), z.return = S, z._debugOwner = S, z._debugTask = S._debugTask, S = Ct(E._debugInfo), z._debugInfo = Ke, Ke = S, z;
          if (typeof E.then == "function")
            return Z = Ct(E._debugInfo), S = R(
              S,
              nn(E),
              z
            ), Ke = Z, S;
          if (E.$$typeof === Wn)
            return R(
              S,
              Ts(S, E),
              z
            );
          Rs(S, E);
        }
        return typeof E == "function" && Ko(S, E), typeof E == "symbol" && gl(S, E), null;
      }
      function b(S, E, z, Z) {
        var ue = E !== null ? E.key : null;
        if (typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint")
          return ue !== null ? null : h(S, E, "" + z, Z);
        if (typeof z == "object" && z !== null) {
          switch (z.$$typeof) {
            case Cn:
              return z.key === ue ? (ue = Ct(z._debugInfo), S = y(
                S,
                E,
                z,
                Z
              ), Ke = ue, S) : null;
            case Of:
              return z.key === ue ? p(S, E, z, Z) : null;
            case ml:
              return ue = Ct(z._debugInfo), z = an(z), S = b(
                S,
                E,
                z,
                Z
              ), Ke = ue, S;
          }
          if (Ol(z) || zt(z))
            return ue !== null ? null : (ue = Ct(z._debugInfo), S = _(
              S,
              E,
              z,
              Z,
              null
            ), Ke = ue, S);
          if (typeof z.then == "function")
            return ue = Ct(z._debugInfo), S = b(
              S,
              E,
              nn(z),
              Z
            ), Ke = ue, S;
          if (z.$$typeof === Wn)
            return b(
              S,
              E,
              Ts(S, z),
              Z
            );
          Rs(S, z);
        }
        return typeof z == "function" && Ko(S, z), typeof z == "symbol" && gl(S, z), null;
      }
      function q(S, E, z, Z, ue) {
        if (typeof Z == "string" && Z !== "" || typeof Z == "number" || typeof Z == "bigint")
          return S = S.get(z) || null, h(E, S, "" + Z, ue);
        if (typeof Z == "object" && Z !== null) {
          switch (Z.$$typeof) {
            case Cn:
              return z = S.get(
                Z.key === null ? z : Z.key
              ) || null, S = Ct(Z._debugInfo), E = y(
                E,
                z,
                Z,
                ue
              ), Ke = S, E;
            case Of:
              return S = S.get(
                Z.key === null ? z : Z.key
              ) || null, p(E, S, Z, ue);
            case ml:
              var He = Ct(Z._debugInfo);
              return Z = an(Z), E = q(
                S,
                E,
                z,
                Z,
                ue
              ), Ke = He, E;
          }
          if (Ol(Z) || zt(Z))
            return z = S.get(z) || null, S = Ct(Z._debugInfo), E = _(
              E,
              z,
              Z,
              ue,
              null
            ), Ke = S, E;
          if (typeof Z.then == "function")
            return He = Ct(Z._debugInfo), E = q(
              S,
              E,
              z,
              nn(Z),
              ue
            ), Ke = He, E;
          if (Z.$$typeof === Wn)
            return q(
              S,
              E,
              z,
              Ts(E, Z),
              ue
            );
          Rs(E, Z);
        }
        return typeof Z == "function" && Ko(E, Z), typeof Z == "symbol" && gl(E, Z), null;
      }
      function ne(S, E, z, Z) {
        if (typeof z != "object" || z === null) return Z;
        switch (z.$$typeof) {
          case Cn:
          case Of:
            me(S, E, z);
            var ue = z.key;
            if (typeof ue != "string") break;
            if (Z === null) {
              Z = /* @__PURE__ */ new Set(), Z.add(ue);
              break;
            }
            if (!Z.has(ue)) {
              Z.add(ue);
              break;
            }
            fe(E, function() {
              console.error(
                "Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.",
                ue
              );
            });
            break;
          case ml:
            z = an(z), ne(S, E, z, Z);
        }
        return Z;
      }
      function oe(S, E, z, Z) {
        for (var ue = null, He = null, Ee = null, ve = E, Ze = E = 0, Wt = null; ve !== null && Ze < z.length; Ze++) {
          ve.index > Ze ? (Wt = ve, ve = null) : Wt = ve.sibling;
          var Dl = b(
            S,
            ve,
            z[Ze],
            Z
          );
          if (Dl === null) {
            ve === null && (ve = Wt);
            break;
          }
          ue = ne(
            S,
            Dl,
            z[Ze],
            ue
          ), e && ve && Dl.alternate === null && t(S, ve), E = f(Dl, E, Ze), Ee === null ? He = Dl : Ee.sibling = Dl, Ee = Dl, ve = Wt;
        }
        if (Ze === z.length)
          return a(S, ve), it && yu(S, Ze), He;
        if (ve === null) {
          for (; Ze < z.length; Ze++)
            ve = R(S, z[Ze], Z), ve !== null && (ue = ne(
              S,
              ve,
              z[Ze],
              ue
            ), E = f(
              ve,
              E,
              Ze
            ), Ee === null ? He = ve : Ee.sibling = ve, Ee = ve);
          return it && yu(S, Ze), He;
        }
        for (ve = i(ve); Ze < z.length; Ze++)
          Wt = q(
            ve,
            S,
            Ze,
            z[Ze],
            Z
          ), Wt !== null && (ue = ne(
            S,
            Wt,
            z[Ze],
            ue
          ), e && Wt.alternate !== null && ve.delete(
            Wt.key === null ? Ze : Wt.key
          ), E = f(
            Wt,
            E,
            Ze
          ), Ee === null ? He = Wt : Ee.sibling = Wt, Ee = Wt);
        return e && ve.forEach(function(Ho) {
          return t(S, Ho);
        }), it && yu(S, Ze), He;
      }
      function Zt(S, E, z, Z) {
        if (z == null)
          throw Error("An iterable object provided no iterator.");
        for (var ue = null, He = null, Ee = E, ve = E = 0, Ze = null, Wt = null, Dl = z.next(); Ee !== null && !Dl.done; ve++, Dl = z.next()) {
          Ee.index > ve ? (Ze = Ee, Ee = null) : Ze = Ee.sibling;
          var Ho = b(S, Ee, Dl.value, Z);
          if (Ho === null) {
            Ee === null && (Ee = Ze);
            break;
          }
          Wt = ne(
            S,
            Ho,
            Dl.value,
            Wt
          ), e && Ee && Ho.alternate === null && t(S, Ee), E = f(Ho, E, ve), He === null ? ue = Ho : He.sibling = Ho, He = Ho, Ee = Ze;
        }
        if (Dl.done)
          return a(S, Ee), it && yu(S, ve), ue;
        if (Ee === null) {
          for (; !Dl.done; ve++, Dl = z.next())
            Ee = R(S, Dl.value, Z), Ee !== null && (Wt = ne(
              S,
              Ee,
              Dl.value,
              Wt
            ), E = f(
              Ee,
              E,
              ve
            ), He === null ? ue = Ee : He.sibling = Ee, He = Ee);
          return it && yu(S, ve), ue;
        }
        for (Ee = i(Ee); !Dl.done; ve++, Dl = z.next())
          Ze = q(
            Ee,
            S,
            ve,
            Dl.value,
            Z
          ), Ze !== null && (Wt = ne(
            S,
            Ze,
            Dl.value,
            Wt
          ), e && Ze.alternate !== null && Ee.delete(
            Ze.key === null ? ve : Ze.key
          ), E = f(
            Ze,
            E,
            ve
          ), He === null ? ue = Ze : He.sibling = Ze, He = Ze);
        return e && Ee.forEach(function(yA) {
          return t(S, yA);
        }), it && yu(S, ve), ue;
      }
      function st(S, E, z, Z) {
        if (typeof z == "object" && z !== null && z.type === $l && z.key === null && (Xn(z, null, S), z = z.props.children), typeof z == "object" && z !== null) {
          switch (z.$$typeof) {
            case Cn:
              var ue = Ct(z._debugInfo);
              e: {
                for (var He = z.key; E !== null; ) {
                  if (E.key === He) {
                    if (He = z.type, He === $l) {
                      if (E.tag === 7) {
                        a(
                          S,
                          E.sibling
                        ), Z = o(
                          E,
                          z.props.children
                        ), Z.return = S, Z._debugOwner = z._owner, Z._debugInfo = Ke, Xn(z, Z, S), S = Z;
                        break e;
                      }
                    } else if (E.elementType === He || Bc(
                      E,
                      z
                    ) || typeof He == "object" && He !== null && He.$$typeof === ml && an(He) === E.type) {
                      a(
                        S,
                        E.sibling
                      ), Z = o(E, z.props), Ba(Z, z), Z.return = S, Z._debugOwner = z._owner, Z._debugInfo = Ke, S = Z;
                      break e;
                    }
                    a(S, E);
                    break;
                  } else t(S, E);
                  E = E.sibling;
                }
                z.type === $l ? (Z = mu(
                  z.props.children,
                  S.mode,
                  Z,
                  z.key
                ), Z.return = S, Z._debugOwner = S, Z._debugTask = S._debugTask, Z._debugInfo = Ke, Xn(z, Z, S), S = Z) : (Z = zd(
                  z,
                  S.mode,
                  Z
                ), Ba(Z, z), Z.return = S, Z._debugInfo = Ke, S = Z);
              }
              return S = d(S), Ke = ue, S;
            case Of:
              e: {
                for (ue = z, z = ue.key; E !== null; ) {
                  if (E.key === z)
                    if (E.tag === 4 && E.stateNode.containerInfo === ue.containerInfo && E.stateNode.implementation === ue.implementation) {
                      a(
                        S,
                        E.sibling
                      ), Z = o(
                        E,
                        ue.children || []
                      ), Z.return = S, S = Z;
                      break e;
                    } else {
                      a(S, E);
                      break;
                    }
                  else t(S, E);
                  E = E.sibling;
                }
                Z = Ss(
                  ue,
                  S.mode,
                  Z
                ), Z.return = S, S = Z;
              }
              return d(S);
            case ml:
              return ue = Ct(z._debugInfo), z = an(z), S = st(
                S,
                E,
                z,
                Z
              ), Ke = ue, S;
          }
          if (Ol(z))
            return ue = Ct(z._debugInfo), S = oe(
              S,
              E,
              z,
              Z
            ), Ke = ue, S;
          if (zt(z)) {
            if (ue = Ct(z._debugInfo), He = zt(z), typeof He != "function")
              throw Error(
                "An object is not an iterable. This error is likely caused by a bug in React. Please file an issue."
              );
            var Ee = He.call(z);
            return Ee === z ? (S.tag !== 0 || Object.prototype.toString.call(S.type) !== "[object GeneratorFunction]" || Object.prototype.toString.call(Ee) !== "[object Generator]") && (fb || console.error(
              "Using Iterators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. You can also use an Iterable that can iterate multiple times over the same items."
            ), fb = !0) : z.entries !== He || BS || (console.error(
              "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
            ), BS = !0), S = Zt(
              S,
              E,
              Ee,
              Z
            ), Ke = ue, S;
          }
          if (typeof z.then == "function")
            return ue = Ct(z._debugInfo), S = st(
              S,
              E,
              nn(z),
              Z
            ), Ke = ue, S;
          if (z.$$typeof === Wn)
            return st(
              S,
              E,
              Ts(S, z),
              Z
            );
          Rs(S, z);
        }
        return typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint" ? (ue = "" + z, E !== null && E.tag === 6 ? (a(
          S,
          E.sibling
        ), Z = o(E, ue), Z.return = S, S = Z) : (a(S, E), Z = _d(
          ue,
          S.mode,
          Z
        ), Z.return = S, Z._debugOwner = S, Z._debugTask = S._debugTask, Z._debugInfo = Ke, S = Z), d(S)) : (typeof z == "function" && Ko(S, z), typeof z == "symbol" && gl(S, z), a(S, E));
      }
      return function(S, E, z, Z) {
        var ue = Ke;
        Ke = null;
        try {
          t0 = 0;
          var He = st(
            S,
            E,
            z,
            Z
          );
          return hm = null, He;
        } catch (Wt) {
          if (Wt === dm || Wt === ug) throw Wt;
          var Ee = N(29, Wt, null, S.mode);
          Ee.lanes = Z, Ee.return = S;
          var ve = Ee._debugInfo = Ke;
          if (Ee._debugOwner = S._debugOwner, Ee._debugTask = S._debugTask, ve != null) {
            for (var Ze = ve.length - 1; 0 <= Ze; Ze--)
              if (typeof ve[Ze].stack == "string") {
                Ee._debugOwner = ve[Ze], Ee._debugTask = ve[Ze].debugTask;
                break;
              }
          }
          return Ee;
        } finally {
          Ke = ue;
        }
      };
    }
    function nt(e, t) {
      var a = Ol(e);
      return e = !a && typeof zt(e) == "function", a || e ? (a = a ? "array" : "iterable", console.error(
        "A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>",
        a,
        t,
        a
      ), !1) : !0;
    }
    function Eu(e) {
      e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, lanes: 0, hiddenCallbacks: null },
        callbacks: null
      };
    }
    function Ya(e, t) {
      e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        callbacks: null
      });
    }
    function Tu(e) {
      return {
        lane: e,
        tag: mb,
        payload: null,
        callback: null,
        next: null
      };
    }
    function pa(e, t, a) {
      var i = e.updateQueue;
      if (i === null) return null;
      if (i = i.shared, qS === i && !vb) {
        var o = se(e);
        console.error(
          `An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback.

Please update the following component: %s`,
          o
        ), vb = !0;
      }
      return (yt & Pl) !== da ? (o = i.pending, o === null ? t.next = t : (t.next = o.next, o.next = t), i.pending = t, t = gs(e), $m(e, null, a), t) : (Li(e, i, t, a), gs(e));
    }
    function $o(e, t, a) {
      if (t = t.updateQueue, t !== null && (t = t.shared, (a & 4194048) !== 0)) {
        var i = t.lanes;
        i &= e.pendingLanes, a |= i, t.lanes = a, as(e, a);
      }
    }
    function Ms(e, t) {
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
    function Au() {
      if (jS) {
        var e = rm;
        if (e !== null) throw e;
      }
    }
    function Qn(e, t, a, i) {
      jS = !1;
      var o = e.updateQueue;
      Gf = !1, qS = o.shared;
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
          var b = h.lane & -536870913, q = b !== h.lane;
          if (q ? ($e & b) === b : (i & b) === b) {
            b !== 0 && b === Zr && (jS = !0), _ !== null && (_ = _.next = {
              lane: 0,
              tag: h.tag,
              payload: h.payload,
              callback: null,
              next: null
            });
            e: {
              b = e;
              var ne = h, oe = t, Zt = a;
              switch (ne.tag) {
                case yb:
                  if (ne = ne.payload, typeof ne == "function") {
                    fm = !0;
                    var st = ne.call(
                      Zt,
                      R,
                      oe
                    );
                    if (b.mode & Ja) {
                      he(!0);
                      try {
                        ne.call(Zt, R, oe);
                      } finally {
                        he(!1);
                      }
                    }
                    fm = !1, R = st;
                    break e;
                  }
                  R = ne;
                  break e;
                case YS:
                  b.flags = b.flags & -65537 | 128;
                case mb:
                  if (st = ne.payload, typeof st == "function") {
                    if (fm = !0, ne = st.call(
                      Zt,
                      R,
                      oe
                    ), b.mode & Ja) {
                      he(!0);
                      try {
                        st.call(Zt, R, oe);
                      } finally {
                        he(!1);
                      }
                    }
                    fm = !1;
                  } else ne = st;
                  if (ne == null) break e;
                  R = Ve({}, R, ne);
                  break e;
                case pb:
                  Gf = !0;
              }
            }
            b = h.callback, b !== null && (e.flags |= 64, q && (e.flags |= 8192), q = o.callbacks, q === null ? o.callbacks = [b] : q.push(b));
          } else
            q = {
              lane: b,
              tag: h.tag,
              payload: h.payload,
              callback: h.callback,
              next: null
            }, _ === null ? (p = _ = q, y = R) : _ = _.next = q, d |= b;
          if (h = h.next, h === null) {
            if (h = o.shared.pending, h === null)
              break;
            q = h, h = q.next, q.next = null, o.lastBaseUpdate = q, o.shared.pending = null;
          }
        } while (!0);
        _ === null && (y = R), o.baseState = y, o.firstBaseUpdate = p, o.lastBaseUpdate = _, f === null && (o.shared.lanes = 0), Qf |= d, e.lanes = d, e.memoizedState = R;
      }
      qS = null;
    }
    function Ud(e, t) {
      if (typeof e != "function")
        throw Error(
          "Invalid argument passed as callback. Expected a function. Instead received: " + e
        );
      e.call(t);
    }
    function Cs(e, t) {
      var a = e.shared.hiddenCallbacks;
      if (a !== null)
        for (e.shared.hiddenCallbacks = null, e = 0; e < a.length; e++)
          Ud(a[e], t);
    }
    function Hd(e, t) {
      var a = e.callbacks;
      if (a !== null)
        for (e.callbacks = null, e = 0; e < a.length; e++)
          Ud(a[e], t);
    }
    function Fi(e, t) {
      var a = bc;
      Re(cg, a, e), Re(mm, t, e), bc = a | t.baseLanes;
    }
    function Ln(e) {
      Re(cg, bc, e), Re(
        mm,
        mm.current,
        e
      );
    }
    function Ou(e) {
      bc = cg.current, Te(mm, e), Te(cg, e);
    }
    function la(e) {
      var t = e.alternate;
      Re(
        _l,
        _l.current & ym,
        e
      ), Re(eu, e, e), Pu === null && (t === null || mm.current !== null || t.memoizedState !== null) && (Pu = e);
    }
    function Us(e) {
      Re(_l, _l.current, e), Re(eu, e, e), Pu === null && (Pu = e);
    }
    function Nd(e) {
      e.tag === 22 ? (Re(_l, _l.current, e), Re(eu, e, e), Pu === null && (Pu = e)) : un(e);
    }
    function un(e) {
      Re(_l, _l.current, e), Re(
        eu,
        eu.current,
        e
      );
    }
    function aa(e) {
      Te(eu, e), Pu === e && (Pu = null), Te(_l, e);
    }
    function zu(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === 13) {
          var a = t.memoizedState;
          if (a !== null && (a = a.dehydrated, a === null || ip(a) || Ah(a)))
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
      var e = x;
      ti === null ? ti = [e] : ti.push(e);
    }
    function F() {
      var e = x;
      if (ti !== null && (Do++, ti[Do] !== e)) {
        var t = se(Ue);
        if (!gb.has(t) && (gb.add(t), ti !== null)) {
          for (var a = "", i = 0; i <= Do; i++) {
            var o = ti[i], f = i === Do ? e : o;
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
    function Qc(e) {
      e == null || Ol(e) || console.error(
        "%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.",
        x,
        typeof e
      );
    }
    function Bd() {
      var e = se(Ue);
      bb.has(e) || (bb.add(e), console.error(
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
    function uy(e, t) {
      if (n0) return !1;
      if (t === null)
        return console.error(
          "%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.",
          x
        ), !1;
      e.length !== t.length && console.error(
        `The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`,
        x,
        "[" + t.join(", ") + "]",
        "[" + e.join(", ") + "]"
      );
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!rn(e[a], t[a])) return !1;
      return !0;
    }
    function il(e, t, a, i, o, f) {
      zo = f, Ue = t, ti = e !== null ? e._debugHookTypes : null, Do = -1, n0 = e !== null && e.type !== t.type, (Object.prototype.toString.call(a) === "[object AsyncFunction]" || Object.prototype.toString.call(a) === "[object AsyncGeneratorFunction]") && (f = se(Ue), xS.has(f) || (xS.add(f), console.error(
        "%s is an async Client Component. Only Server Components can be async at the moment. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.",
        f === null ? "An unknown Component" : "<" + f + ">"
      ))), t.memoizedState = null, t.updateQueue = null, t.lanes = 0, w.H = e !== null && e.memoizedState !== null ? wS : ti !== null ? Eb : GS, Wr = f = (t.mode & Ja) !== De;
      var d = US(a, i, o);
      if (Wr = !1, vm && (d = Lc(
        t,
        a,
        i,
        o
      )), f) {
        he(!0);
        try {
          d = Lc(
            t,
            a,
            i,
            o
          );
        } finally {
          he(!1);
        }
      }
      return Yd(e, t), d;
    }
    function Yd(e, t) {
      t._debugHookTypes = ti, t.dependencies === null ? _o !== null && (t.dependencies = {
        lanes: 0,
        firstContext: null,
        _debugThenableState: _o
      }) : t.dependencies._debugThenableState = _o, w.H = u0;
      var a = wt !== null && wt.next !== null;
      if (zo = 0, ti = x = Nl = wt = Ue = null, Do = -1, e !== null && (e.flags & 65011712) !== (t.flags & 65011712) && console.error(
        "Internal React error: Expected static flag was missing. Please notify the React team."
      ), fg = !1, a0 = 0, _o = null, a)
        throw Error(
          "Rendered fewer hooks than expected. This may be caused by an accidental early return statement."
        );
      e === null || Bl || (e = e.dependencies, e !== null && Es(e) && (Bl = !0)), e0 ? (e0 = !1, e = !0) : e = !1, e && (t = se(t) || "Unknown", Sb.has(t) || xS.has(t) || (Sb.add(t), console.error(
        "`use` was called from inside a try/catch block. This is not allowed and can lead to unexpected behavior. To handle errors triggered by `use`, wrap your component in a error boundary."
      )));
    }
    function Lc(e, t, a, i) {
      Ue = e;
      var o = 0;
      do {
        if (vm && (_o = null), a0 = 0, vm = !1, o >= KT)
          throw Error(
            "Too many re-renders. React limits the number of renders to prevent an infinite loop."
          );
        if (o += 1, n0 = !1, Nl = wt = null, e.updateQueue != null) {
          var f = e.updateQueue;
          f.lastEffect = null, f.events = null, f.stores = null, f.memoCache != null && (f.memoCache.index = 0);
        }
        Do = -1, w.H = Tb, f = US(t, a, i);
      } while (vm);
      return f;
    }
    function Hs() {
      var e = w.H, t = e.useState()[0];
      return t = typeof t.then == "function" ? ko(t) : t, e = e.useState()[0], (wt !== null ? wt.memoizedState : null) !== e && (Ue.flags |= 1024), t;
    }
    function Ns() {
      var e = sg !== 0;
      return sg = 0, e;
    }
    function Ii(e, t, a) {
      t.updateQueue = e.updateQueue, t.flags = (t.mode & Ci) !== De ? t.flags & -402655237 : t.flags & -2053, e.lanes &= ~a;
    }
    function Pi(e) {
      if (fg) {
        for (e = e.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        fg = !1;
      }
      zo = 0, ti = Nl = wt = Ue = null, Do = -1, x = null, vm = !1, a0 = sg = 0, _o = null;
    }
    function va() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return Nl === null ? Ue.memoizedState = Nl = e : Nl = Nl.next = e, Nl;
    }
    function bt() {
      if (wt === null) {
        var e = Ue.alternate;
        e = e !== null ? e.memoizedState : null;
      } else e = wt.next;
      var t = Nl === null ? Ue.memoizedState : Nl.next;
      if (t !== null)
        Nl = t, wt = e;
      else {
        if (e === null)
          throw Ue.alternate === null ? Error(
            "Update hook called on initial render. This is likely a bug in React. Please file an issue."
          ) : Error("Rendered more hooks than during the previous render.");
        wt = e, e = {
          memoizedState: wt.memoizedState,
          baseState: wt.baseState,
          baseQueue: wt.baseQueue,
          queue: wt.queue,
          next: null
        }, Nl === null ? Ue.memoizedState = Nl = e : Nl = Nl.next = e;
      }
      return Nl;
    }
    function qd() {
      return { lastEffect: null, events: null, stores: null, memoCache: null };
    }
    function ko(e) {
      var t = a0;
      return a0 += 1, _o === null && (_o = ay()), e = Xc(_o, e, t), t = Ue, (Nl === null ? t.memoizedState : Nl.next) === null && (t = t.alternate, w.H = t !== null && t.memoizedState !== null ? wS : GS), e;
    }
    function qa(e) {
      if (e !== null && typeof e == "object") {
        if (typeof e.then == "function") return ko(e);
        if (e.$$typeof === Wn) return jt(e);
      }
      throw Error("An unsupported type was passed to use(): " + String(e));
    }
    function di(e) {
      var t = null, a = Ue.updateQueue;
      if (a !== null && (t = a.memoCache), t == null) {
        var i = Ue.alternate;
        i !== null && (i = i.updateQueue, i !== null && (i = i.memoCache, i != null && (t = {
          data: i.data.map(function(o) {
            return o.slice();
          }),
          index: 0
        })));
      }
      if (t == null && (t = { data: [], index: 0 }), a === null && (a = qd(), Ue.updateQueue = a), a.memoCache = t, a = t.data[t.index], a === void 0 || n0)
        for (a = t.data[t.index] = Array(e), i = 0; i < e; i++)
          a[i] = aS;
      else
        a.length !== e && console.error(
          "Expected a constant size argument for each invocation of useMemoCache. The previous cache was allocated with size %s but size %s was requested.",
          a.length,
          e
        );
      return t.index++, a;
    }
    function ja(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function jd(e, t, a) {
      var i = va();
      if (a !== void 0) {
        var o = a(t);
        if (Wr) {
          he(!0);
          try {
            a(t);
          } finally {
            he(!1);
          }
        }
      } else o = t;
      return i.memoizedState = i.baseState = o, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: o
      }, i.queue = e, e = e.dispatch = hy.bind(
        null,
        Ue,
        e
      ), [i.memoizedState, e];
    }
    function Vn(e) {
      var t = bt();
      return Bs(t, wt, e);
    }
    function Bs(e, t, a) {
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
          if (R !== p.lane ? ($e & R) === R : (zo & R) === R) {
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
              }), R === Zr && (_ = !0);
            else if ((zo & b) === b) {
              p = p.next, b === Zr && (_ = !0);
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
              }, y === null ? (h = y = R, d = f) : y = y.next = R, Ue.lanes |= b, Qf |= b;
            R = p.action, Wr && a(f, R), f = p.hasEagerState ? p.eagerState : a(f, R);
          } else
            b = {
              lane: R,
              revertLane: p.revertLane,
              gesture: p.gesture,
              action: p.action,
              hasEagerState: p.hasEagerState,
              eagerState: p.eagerState,
              next: null
            }, y === null ? (h = y = b, d = f) : y = y.next = b, Ue.lanes |= R, Qf |= R;
          p = p.next;
        } while (p !== null && p !== t);
        if (y === null ? d = f : y.next = h, !rn(f, e.memoizedState) && (Bl = !0, _ && (a = rm, a !== null)))
          throw a;
        e.memoizedState = f, e.baseState = d, e.baseQueue = y, i.lastRenderedState = f;
      }
      return o === null && (i.lanes = 0), [e.memoizedState, i.dispatch];
    }
    function ec(e) {
      var t = bt(), a = t.queue;
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
        rn(f, t.memoizedState) || (Bl = !0), t.memoizedState = f, t.baseQueue === null && (t.baseState = f), a.lastRenderedState = f;
      }
      return [f, i];
    }
    function Wo(e, t, a) {
      var i = Ue, o = va();
      if (it) {
        if (a === void 0)
          throw Error(
            "Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering."
          );
        var f = a();
        pm || f === a() || (console.error(
          "The result of getServerSnapshot should be cached to avoid an infinite loop"
        ), pm = !0);
      } else {
        if (f = t(), pm || (a = t(), rn(f, a) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), pm = !0)), Xt === null)
          throw Error(
            "Expected a work-in-progress root. This is a bug in React. Please file an issue."
          );
        ($e & 127) !== 0 || iy(i, t, f);
      }
      return o.memoizedState = f, a = { value: f, getSnapshot: t }, o.queue = a, Gs(
        lc.bind(null, i, a, e),
        [e]
      ), i.flags |= 2048, Jc(
        ei | mn,
        { destroy: void 0 },
        tc.bind(
          null,
          i,
          a,
          f,
          t
        ),
        null
      ), f;
    }
    function Ys(e, t, a) {
      var i = Ue, o = bt(), f = it;
      if (f) {
        if (a === void 0)
          throw Error(
            "Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering."
          );
        a = a();
      } else if (a = t(), !pm) {
        var d = t();
        rn(a, d) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), pm = !0);
      }
      (d = !rn(
        (wt || o).memoizedState,
        a
      )) && (o.memoizedState = a, Bl = !0), o = o.queue;
      var h = lc.bind(null, i, o, e);
      if (Ql(2048, mn, h, [e]), o.getSnapshot !== t || d || Nl !== null && Nl.memoizedState.tag & ei) {
        if (i.flags |= 2048, Jc(
          ei | mn,
          { destroy: void 0 },
          tc.bind(
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
        f || (zo & 127) !== 0 || iy(i, t, a);
      }
      return a;
    }
    function iy(e, t, a) {
      e.flags |= 16384, e = { getSnapshot: t, value: a }, t = Ue.updateQueue, t === null ? (t = qd(), Ue.updateQueue = t, t.stores = [e]) : (a = t.stores, a === null ? t.stores = [e] : a.push(e));
    }
    function tc(e, t, a, i) {
      t.value = a, t.getSnapshot = i, cy(t) && oy(e);
    }
    function lc(e, t, a) {
      return a(function() {
        cy(t) && (Gn(2, "updateSyncExternalStore()", e), oy(e));
      });
    }
    function cy(e) {
      var t = e.getSnapshot;
      e = e.value;
      try {
        var a = t();
        return !rn(e, a);
      } catch {
        return !0;
      }
    }
    function oy(e) {
      var t = Xl(e, 2);
      t !== null && el(t, e, 2);
    }
    function ac(e) {
      var t = va();
      if (typeof e == "function") {
        var a = e;
        if (e = a(), Wr) {
          he(!0);
          try {
            a();
          } finally {
            he(!1);
          }
        }
      }
      return t.memoizedState = t.baseState = e, t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ja,
        lastRenderedState: e
      }, t;
    }
    function Vc(e) {
      e = ac(e);
      var t = e.queue, a = Vd.bind(null, Ue, t);
      return t.dispatch = a, [e.memoizedState, a];
    }
    function Fo(e) {
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
        Ue,
        !0,
        a
      ), a.dispatch = t, [e, t];
    }
    function Io(e, t) {
      var a = bt();
      return qs(a, wt, e, t);
    }
    function qs(e, t, a, i) {
      return e.baseState = a, Bs(
        e,
        wt,
        typeof i == "function" ? i : ja
      );
    }
    function fy(e, t) {
      var a = bt();
      return wt !== null ? qs(a, wt, e, t) : (a.baseState = e, [e, a.queue.dispatch]);
    }
    function Zc(e, t, a, i, o) {
      if (Jt(e))
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
        w.T !== null ? a(!0) : f.isTransition = !1, i(f), a = t.pending, a === null ? (f.next = t.pending = f, sy(t, f)) : (f.next = a.next, t.pending = a.next = f);
      }
    }
    function sy(e, t) {
      var a = t.action, i = t.payload, o = e.state;
      if (t.isTransition) {
        var f = w.T, d = {};
        d._updatedFibers = /* @__PURE__ */ new Set(), w.T = d;
        try {
          var h = a(o, i), y = w.S;
          y !== null && y(d, h), hi(e, t, h);
        } catch (p) {
          js(e, t, p);
        } finally {
          f !== null && d.types !== null && (f.types !== null && f.types !== d.types && console.error(
            "We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."
          ), f.types = d.types), w.T = f, f === null && d._updatedFibers && (e = d._updatedFibers.size, d._updatedFibers.clear(), 10 < e && console.warn(
            "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
          ));
        }
      } else
        try {
          d = a(o, i), hi(e, t, d);
        } catch (p) {
          js(e, t, p);
        }
    }
    function hi(e, t, a) {
      a !== null && typeof a == "object" && typeof a.then == "function" ? (w.asyncTransitions++, a.then(vi, vi), a.then(
        function(i) {
          xd(e, t, i);
        },
        function(i) {
          return js(e, t, i);
        }
      ), t.isTransition || console.error(
        "An async function with useActionState was called outside of a transition. This is likely not what you intended (for example, isPending will not update correctly). Either call the returned function inside startTransition, or pass it to an `action` or `formAction` prop."
      )) : xd(e, t, a);
    }
    function xd(e, t, a) {
      t.status = "fulfilled", t.value = a, mi(t), e.state = a, t = e.pending, t !== null && (a = t.next, a === t ? e.pending = null : (a = a.next, t.next = a, sy(e, a)));
    }
    function js(e, t, a) {
      var i = e.pending;
      if (e.pending = null, i !== null) {
        i = i.next;
        do
          t.status = "rejected", t.reason = a, mi(t), t = t.next;
        while (t !== i);
      }
      e.action = null;
    }
    function mi(e) {
      e = e.listeners;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
    function yi(e, t) {
      return t;
    }
    function _u(e, t) {
      if (it) {
        var a = Xt.formState;
        if (a !== null) {
          e: {
            var i = Ue;
            if (it) {
              if (kt) {
                t: {
                  for (var o = kt, f = Fu; o.nodeType !== 8; ) {
                    if (!f) {
                      o = null;
                      break t;
                    }
                    if (o = cn(
                      o.nextSibling
                    ), o === null) {
                      o = null;
                      break t;
                    }
                  }
                  f = o.data, o = f === f1 || f === cE ? o : null;
                }
                if (o) {
                  kt = cn(
                    o.nextSibling
                  ), i = o.data === f1;
                  break e;
                }
              }
              fi(i);
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
        lastRenderedReducer: yi,
        lastRenderedState: t
      }, a.queue = i, a = Vd.bind(
        null,
        Ue,
        i
      ), i.dispatch = a, i = ac(!1), f = Ll.bind(
        null,
        Ue,
        !1,
        i.queue
      ), i = va(), o = {
        state: t,
        dispatch: null,
        action: e,
        pending: null
      }, i.queue = o, a = Zc.bind(
        null,
        Ue,
        o,
        f,
        a
      ), o.dispatch = a, i.memoizedState = e, [t, a, !1];
    }
    function Po(e) {
      var t = bt();
      return Gd(t, wt, e);
    }
    function Gd(e, t, a) {
      if (t = Bs(
        e,
        t,
        yi
      )[0], e = Vn(ja)[0], typeof t == "object" && t !== null && typeof t.then == "function")
        try {
          var i = ko(t);
        } catch (d) {
          throw d === dm ? ug : d;
        }
      else i = t;
      t = bt();
      var o = t.queue, f = o.dispatch;
      return a !== t.memoizedState && (Ue.flags |= 2048, Jc(
        ei | mn,
        { destroy: void 0 },
        xs.bind(null, o, a),
        null
      )), [i, f, e];
    }
    function xs(e, t) {
      e.action = t;
    }
    function nc(e) {
      var t = bt(), a = wt;
      if (a !== null)
        return Gd(t, a, e);
      bt(), t = t.memoizedState, a = bt();
      var i = a.queue.dispatch;
      return a.memoizedState = e, [t, i, !1];
    }
    function Jc(e, t, a, i) {
      return e = { tag: e, create: a, deps: i, inst: t, next: null }, t = Ue.updateQueue, t === null && (t = qd(), Ue.updateQueue = t), a = t.lastEffect, a === null ? t.lastEffect = e.next = e : (i = a.next, a.next = e, e.next = i, t.lastEffect = e), e;
    }
    function wd(e) {
      var t = va();
      return e = { current: e }, t.memoizedState = e;
    }
    function Tn(e, t, a, i) {
      var o = va();
      Ue.flags |= e, o.memoizedState = Jc(
        ei | t,
        { destroy: void 0 },
        a,
        i === void 0 ? null : i
      );
    }
    function Ql(e, t, a, i) {
      var o = bt();
      i = i === void 0 ? null : i;
      var f = o.memoizedState.inst;
      wt !== null && i !== null && uy(i, wt.memoizedState.deps) ? o.memoizedState = Jc(t, f, a, i) : (Ue.flags |= e, o.memoizedState = Jc(
        ei | t,
        f,
        a,
        i
      ));
    }
    function Gs(e, t) {
      (Ue.mode & Ci) !== De ? Tn(276826112, mn, e, t) : Tn(8390656, mn, e, t);
    }
    function ry(e) {
      Ue.flags |= 4;
      var t = Ue.updateQueue;
      if (t === null)
        t = qd(), Ue.updateQueue = t, t.events = [e];
      else {
        var a = t.events;
        a === null ? t.events = [e] : a.push(e);
      }
    }
    function ws(e) {
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
      var t = bt().memoizedState;
      return ry({ ref: t, nextImpl: e }), function() {
        if ((yt & Pl) !== da)
          throw Error(
            "A function wrapped in useEffectEvent can't be called during rendering."
          );
        return t.impl.apply(void 0, arguments);
      };
    }
    function xa(e, t) {
      var a = 4194308;
      return (Ue.mode & Ci) !== De && (a |= 134217728), Tn(a, tu, e, t);
    }
    function pi(e, t) {
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
    function Xs(e, t, a) {
      typeof t != "function" && console.error(
        "Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",
        t !== null ? typeof t : "null"
      ), a = a != null ? a.concat([e]) : null;
      var i = 4194308;
      (Ue.mode & Ci) !== De && (i |= 134217728), Tn(
        i,
        tu,
        pi.bind(null, t, e),
        a
      );
    }
    function Qs(e, t, a) {
      typeof t != "function" && console.error(
        "Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",
        t !== null ? typeof t : "null"
      ), a = a != null ? a.concat([e]) : null, Ql(
        4,
        tu,
        pi.bind(null, t, e),
        a
      );
    }
    function Du(e, t) {
      return va().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    }
    function ua(e, t) {
      var a = bt();
      t = t === void 0 ? null : t;
      var i = a.memoizedState;
      return t !== null && uy(t, i[1]) ? i[0] : (a.memoizedState = [e, t], e);
    }
    function It(e, t) {
      var a = va();
      t = t === void 0 ? null : t;
      var i = e();
      if (Wr) {
        he(!0);
        try {
          e();
        } finally {
          he(!1);
        }
      }
      return a.memoizedState = [i, t], i;
    }
    function Kc(e, t) {
      var a = bt();
      t = t === void 0 ? null : t;
      var i = a.memoizedState;
      if (t !== null && uy(t, i[1]))
        return i[0];
      if (i = e(), Wr) {
        he(!0);
        try {
          e();
        } finally {
          he(!1);
        }
      }
      return a.memoizedState = [i, t], i;
    }
    function Zn(e, t) {
      var a = va();
      return cl(a, e, t);
    }
    function xe(e, t) {
      var a = bt();
      return Ls(
        a,
        wt.memoizedState,
        e,
        t
      );
    }
    function _t(e, t) {
      var a = bt();
      return wt === null ? cl(a, e, t) : Ls(
        a,
        wt.memoizedState,
        e,
        t
      );
    }
    function cl(e, t, a) {
      return a === void 0 || (zo & 1073741824) !== 0 && ($e & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = a, e = Gt(), Ue.lanes |= e, Qf |= e, a);
    }
    function Ls(e, t, a, i) {
      return rn(a, t) ? a : mm.current !== null ? (e = cl(e, a, i), rn(e, t) || (Bl = !0), e) : (zo & 42) === 0 || (zo & 1073741824) !== 0 && ($e & 261930) === 0 ? (Bl = !0, e.memoizedState = a) : (e = Gt(), Ue.lanes |= e, Qf |= e, t);
    }
    function vi() {
      w.asyncTransitions--;
    }
    function uc(e, t, a, i, o) {
      var f = Tt.p;
      Tt.p = f !== 0 && f < Wl ? f : Wl;
      var d = w.T, h = {};
      h._updatedFibers = /* @__PURE__ */ new Set(), w.T = h, Ll(e, !1, t, a);
      try {
        var y = o(), p = w.S;
        if (p !== null && p(h, y), y !== null && typeof y == "object" && typeof y.then == "function") {
          w.asyncTransitions++, y.then(vi, vi);
          var _ = wc(
            y,
            i
          );
          kc(
            e,
            t,
            _,
            Jl(e)
          );
        } else
          kc(
            e,
            t,
            i,
            Jl(e)
          );
      } catch (R) {
        kc(
          e,
          t,
          { then: function() {
          }, status: "rejected", reason: R },
          Jl(e)
        );
      } finally {
        Tt.p = f, d !== null && h.types !== null && (d.types !== null && d.types !== h.types && console.error(
          "We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."
        ), d.types = h.types), w.T = d, d === null && h._updatedFibers && (e = h._updatedFibers.size, h._updatedFibers.clear(), 10 < e && console.warn(
          "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
        ));
      }
    }
    function ef(e, t, a, i) {
      if (e.tag !== 5)
        throw Error(
          "Expected the form instance to be a HostComponent. This is a bug in React."
        );
      var o = tf(e).queue;
      k0(e), uc(
        e,
        o,
        t,
        cd,
        a === null ? Le : function() {
          return $c(e), a(i);
        }
      );
    }
    function tf(e) {
      var t = e.memoizedState;
      if (t !== null) return t;
      t = {
        memoizedState: cd,
        baseState: cd,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: ja,
          lastRenderedState: cd
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
          lastRenderedReducer: ja,
          lastRenderedState: a
        },
        next: null
      }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
    }
    function $c(e) {
      w.T === null && console.error(
        "requestFormReset was called outside a transition or action. To fix, move to an action, or wrap with startTransition."
      );
      var t = tf(e);
      t.next === null && (t = e.alternate.memoizedState), kc(
        e,
        t.next.queue,
        {},
        Jl(e)
      );
    }
    function dy() {
      var e = ac(!1);
      return e = uc.bind(
        null,
        Ue,
        e.queue,
        !0,
        !1
      ), va().memoizedState = e, [!1, e];
    }
    function Pt() {
      var e = Vn(ja)[0], t = bt().memoizedState;
      return [
        typeof e == "boolean" ? e : ko(e),
        t
      ];
    }
    function Xd() {
      var e = ec(ja)[0], t = bt().memoizedState;
      return [
        typeof e == "boolean" ? e : ko(e),
        t
      ];
    }
    function gi() {
      return jt(b0);
    }
    function Qd() {
      var e = va(), t = Xt.identifierPrefix;
      if (it) {
        var a = bo, i = So;
        a = (i & ~(1 << 32 - kl(i) - 1)).toString(32) + a, t = "_" + t + "R_" + a, a = sg++, 0 < a && (t += "H" + a.toString(32)), t += "_";
      } else
        a = JT++, t = "_" + t + "r_" + a.toString(32) + "_";
      return e.memoizedState = t;
    }
    function Ld() {
      return va().memoizedState = Fg.bind(
        null,
        Ue
      );
    }
    function Fg(e, t) {
      for (var a = e.return; a !== null; ) {
        switch (a.tag) {
          case 24:
          case 3:
            var i = Jl(a), o = Tu(i), f = pa(a, o, i);
            f !== null && (Gn(i, "refresh()", e), el(f, a, i), $o(f, a, i)), e = ly(), t != null && f !== null && console.error(
              "The seed argument is not enabled outside experimental channels."
            ), o.payload = { cache: e };
            return;
        }
        a = a.return;
      }
    }
    function hy(e, t, a) {
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
      Jt(e) ? Vs(t, o) : (o = Km(e, t, o, i), o !== null && (Gn(i, "dispatch()", e), el(o, e, i), lf(o, t, i)));
    }
    function Vd(e, t, a) {
      var i = arguments;
      typeof i[3] == "function" && console.error(
        "State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."
      ), i = Jl(e), kc(e, t, a, i) && Gn(i, "setState()", e);
    }
    function kc(e, t, a, i) {
      var o = {
        lane: i,
        revertLane: 0,
        gesture: null,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (Jt(e)) Vs(t, o);
      else {
        var f = e.alternate;
        if (e.lanes === 0 && (f === null || f.lanes === 0) && (f = t.lastRenderedReducer, f !== null)) {
          var d = w.H;
          w.H = Hi;
          try {
            var h = t.lastRenderedState, y = f(h, a);
            if (o.hasEagerState = !0, o.eagerState = y, rn(y, h))
              return Li(e, t, o, 0), Xt === null && Lo(), !1;
          } catch {
          } finally {
            w.H = d;
          }
        }
        if (a = Km(e, t, o, i), a !== null)
          return el(a, e, i), lf(a, t, i), !0;
      }
      return !1;
    }
    function Ll(e, t, a, i) {
      if (w.T === null && Zr === 0 && console.error(
        "An optimistic state update occurred outside a transition or action. To fix, move the update to an action, or wrap with startTransition."
      ), i = {
        lane: 2,
        revertLane: ht(),
        gesture: null,
        action: i,
        hasEagerState: !1,
        eagerState: null,
        next: null
      }, Jt(e)) {
        if (t)
          throw Error("Cannot update optimistic state while rendering.");
        console.error("Cannot call startTransition while rendering.");
      } else
        t = Km(
          e,
          a,
          i,
          2
        ), t !== null && (Gn(2, "setOptimistic()", e), el(t, e, 2));
    }
    function Jt(e) {
      var t = e.alternate;
      return e === Ue || t !== null && t === Ue;
    }
    function Vs(e, t) {
      vm = fg = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function lf(e, t, a) {
      if ((a & 4194048) !== 0) {
        var i = t.lanes;
        i &= e.pendingLanes, a |= i, t.lanes = a, as(e, a);
      }
    }
    function af(e) {
      if (e !== null && typeof e != "function") {
        var t = String(e);
        Nb.has(t) || (Nb.add(t), console.error(
          "Expected the last optional `callback` argument to be a function. Instead received: %s.",
          e
        ));
      }
    }
    function Zs(e, t, a, i) {
      var o = e.memoizedState, f = a(i, o);
      if (e.mode & Ja) {
        he(!0);
        try {
          f = a(i, o);
        } finally {
          he(!1);
        }
      }
      f === void 0 && (t = et(t) || "Component", Mb.has(t) || (Mb.add(t), console.error(
        "%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.",
        t
      ))), o = f == null ? o : Ve({}, o, f), e.memoizedState = o, e.lanes === 0 && (e.updateQueue.baseState = o);
    }
    function Ru(e, t, a, i, o, f, d) {
      var h = e.stateNode;
      if (typeof h.shouldComponentUpdate == "function") {
        if (a = h.shouldComponentUpdate(
          i,
          f,
          d
        ), e.mode & Ja) {
          he(!0);
          try {
            a = h.shouldComponentUpdate(
              i,
              f,
              d
            );
          } finally {
            he(!1);
          }
        }
        return a === void 0 && console.error(
          "%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.",
          et(t) || "Component"
        ), a;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !vs(a, i) || !vs(o, f) : !0;
    }
    function Js(e, t, a, i) {
      var o = t.state;
      typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== o && (e = se(e) || "Component", Ob.has(e) || (Ob.add(e), console.error(
        "%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
        e
      )), XS.enqueueReplaceState(
        t,
        t.state,
        null
      ));
    }
    function Si(e, t) {
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
    function Zd(e) {
      gS(e), console.warn(
        `%s

%s
`,
        gm ? "An error occurred in the <" + gm + "> component." : "An error occurred in one of your React components.",
        `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://react.dev/link/error-boundaries to learn more about error boundaries.`
      );
    }
    function my(e) {
      var t = gm ? "The above error occurred in the <" + gm + "> component." : "The above error occurred in one of your React components.", a = "React will try to recreate this component tree from scratch using the error boundary you provided, " + ((QS || "Anonymous") + ".");
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
          yE + " " + e[0],
          pE,
          Yg + i + Yg,
          vE
        ) : e.splice(
          0,
          0,
          yE,
          pE,
          Yg + i + Yg,
          vE
        ), e.unshift(console), i = hA.apply(console.error, e), i();
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
    function yy(e) {
      gS(e);
    }
    function Ks(e, t) {
      try {
        gm = t.source ? se(t.source) : null, QS = null;
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
    function py(e, t, a) {
      try {
        gm = a.source ? se(a.source) : null, QS = se(t);
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
    function Jd(e, t, a) {
      return a = Tu(a), a.tag = YS, a.payload = { element: null }, a.callback = function() {
        fe(t.source, Ks, e, t);
      }, a;
    }
    function Kd(e) {
      return e = Tu(e), e.tag = YS, e;
    }
    function $s(e, t, a, i) {
      var o = a.type.getDerivedStateFromError;
      if (typeof o == "function") {
        var f = i.value;
        e.payload = function() {
          return o(f);
        }, e.callback = function() {
          Z0(a), fe(
            i.source,
            py,
            t,
            a,
            i
          );
        };
      }
      var d = a.stateNode;
      d !== null && typeof d.componentDidCatch == "function" && (e.callback = function() {
        Z0(a), fe(
          i.source,
          py,
          t,
          a,
          i
        ), typeof o != "function" && (Vf === null ? Vf = /* @__PURE__ */ new Set([this]) : Vf.add(this)), QT(this, i), typeof o == "function" || (a.lanes & 2) === 0 && console.error(
          "%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.",
          se(a) || "Unknown"
        );
      });
    }
    function F0(e, t, a, i, o) {
      if (a.flags |= 32768, Nn && xu(e, o), i !== null && typeof i == "object" && typeof i.then == "function") {
        if (t = a.alternate, t !== null && ki(
          t,
          a,
          o,
          !0
        ), it && (vc = !0), a = eu.current, a !== null) {
          switch (a.tag) {
            case 31:
            case 13:
              return Pu === null ? ao() : a.alternate === null && dl === Mo && (dl = hg), a.flags &= -257, a.flags |= 65536, a.lanes = o, i === ig ? a.flags |= 16384 : (t = a.updateQueue, t === null ? a.updateQueue = /* @__PURE__ */ new Set([i]) : t.add(i), ca(e, i, o)), !1;
            case 22:
              return a.flags |= 65536, i === ig ? a.flags |= 16384 : (t = a.updateQueue, t === null ? (t = {
                transitions: null,
                markerInstances: null,
                retryQueue: /* @__PURE__ */ new Set([i])
              }, a.updateQueue = t) : (a = t.retryQueue, a === null ? t.retryQueue = /* @__PURE__ */ new Set([i]) : a.add(i)), ca(e, i, o)), !1;
          }
          throw Error(
            "Unexpected Suspense handler tag (" + a.tag + "). This is a bug in React."
          );
        }
        return ca(e, i, o), ao(), !1;
      }
      if (it)
        return vc = !0, t = eu.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = o, i !== OS && pu(
          ha(
            Error(
              "There was an error while hydrating but React was able to recover by instead client rendering from the nearest Suspense boundary.",
              { cause: i }
            ),
            a
          )
        )) : (i !== OS && pu(
          ha(
            Error(
              "There was an error while hydrating but React was able to recover by instead client rendering the entire root.",
              { cause: i }
            ),
            a
          )
        ), e = e.current.alternate, e.flags |= 65536, o &= -o, e.lanes |= o, i = ha(i, a), o = Jd(
          e.stateNode,
          i,
          o
        ), Ms(e, o), dl !== wf && (dl = Fr)), !1;
      var f = ha(
        Error(
          "There was an error during concurrent rendering but React was able to recover by instead synchronously rendering the entire root.",
          { cause: i }
        ),
        a
      );
      if (r0 === null ? r0 = [f] : r0.push(f), dl !== wf && (dl = Fr), t === null) return !0;
      i = ha(i, a), a = t;
      do {
        switch (a.tag) {
          case 3:
            return a.flags |= 65536, e = o & -o, a.lanes |= e, e = Jd(
              a.stateNode,
              i,
              e
            ), Ms(a, e), !1;
          case 1:
            if (t = a.type, f = a.stateNode, (a.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || f !== null && typeof f.componentDidCatch == "function" && (Vf === null || !Vf.has(f))))
              return a.flags |= 65536, o &= -o, a.lanes |= o, o = Kd(o), $s(
                o,
                e,
                a,
                i
              ), Ms(a, o), !1;
        }
        a = a.return;
      } while (a !== null);
      return !1;
    }
    function Vl(e, t, a, i) {
      t.child = e === null ? hb(t, null, a, i) : kr(
        t,
        e.child,
        a,
        i
      );
    }
    function vy(e, t, a, i, o) {
      a = a.render;
      var f = t.ref;
      if ("ref" in i) {
        var d = {};
        for (var h in i)
          h !== "ref" && (d[h] = i[h]);
      } else d = i;
      return Ia(t), i = il(
        e,
        t,
        a,
        d,
        f,
        o
      ), h = Ns(), e !== null && !Bl ? (Ii(e, t, o), Mu(e, t, o)) : (it && h && Dd(t), t.flags |= 1, Vl(e, t, i, o), t.child);
    }
    function gy(e, t, a, i, o) {
      if (e === null) {
        var f = a.type;
        return typeof f == "function" && !Od(f) && f.defaultProps === void 0 && a.compare === null ? (a = Vi(f), t.tag = 15, t.type = a, uf(t, f), Sy(
          e,
          t,
          a,
          i,
          o
        )) : (e = Yc(
          a.type,
          null,
          i,
          t,
          t.mode,
          o
        ), e.ref = t.ref, e.return = t, t.child = e);
      }
      if (f = e.child, !lh(e, o)) {
        var d = f.memoizedProps;
        if (a = a.compare, a = a !== null ? a : vs, a(d, i) && e.ref === t.ref)
          return Mu(
            e,
            t,
            o
          );
      }
      return t.flags |= 1, e = hu(f, i), e.ref = t.ref, e.return = t, t.child = e;
    }
    function Sy(e, t, a, i, o) {
      if (e !== null) {
        var f = e.memoizedProps;
        if (vs(f, i) && e.ref === t.ref && t.type === e.type)
          if (Bl = !1, t.pendingProps = i = f, lh(e, o))
            (e.flags & 131072) !== 0 && (Bl = !0);
          else
            return t.lanes = e.lanes, Mu(e, t, o);
      }
      return Wd(
        e,
        t,
        a,
        i,
        o
      );
    }
    function $d(e, t, a, i) {
      var o = i.children, f = e !== null ? e.memoizedState : null;
      if (e === null && t.stateNode === null && (t.stateNode = {
        _visibility: wp,
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
          return by(
            e,
            t,
            f,
            a,
            i
          );
        }
        if ((a & 536870912) !== 0)
          t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && _s(
            t,
            f !== null ? f.cachePool : null
          ), f !== null ? Fi(t, f) : Ln(t), Nd(t);
        else
          return i = t.lanes = 536870912, by(
            e,
            t,
            f !== null ? f.baseLanes | a : a,
            a,
            i
          );
      } else
        f !== null ? (_s(t, f.cachePool), Fi(t, f), un(t), t.memoizedState = null) : (e !== null && _s(t, null), Ln(t), un(t));
      return Vl(e, t, o, a), t.child;
    }
    function nf(e, t) {
      return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
        _visibility: wp,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null
      }), t.sibling;
    }
    function by(e, t, a, i, o) {
      var f = zs();
      return f = f === null ? null : {
        parent: Ul._currentValue,
        pool: f
      }, t.memoizedState = {
        baseLanes: a,
        cachePool: f
      }, e !== null && _s(t, null), Ln(t), Nd(t), e !== null && ki(e, t, i, !0), t.childLanes = o, null;
    }
    function ks(e, t) {
      var a = t.hidden;
      return a !== void 0 && console.error(
        `<Activity> doesn't accept a hidden prop. Use mode="hidden" instead.
- <Activity %s>
+ <Activity %s>`,
        a === !0 ? "hidden" : a === !1 ? "hidden={false}" : "hidden={...}",
        a ? 'mode="hidden"' : 'mode="visible"'
      ), t = Is(
        { mode: t.mode, children: t.children },
        e.mode
      ), t.ref = e.ref, e.child = t, t.return = e, t;
    }
    function Ey(e, t, a) {
      return kr(t, e.child, null, a), e = ks(
        t,
        t.pendingProps
      ), e.flags |= 2, aa(t), t.memoizedState = null, e;
    }
    function I0(e, t, a) {
      var i = t.pendingProps, o = (t.flags & 128) !== 0;
      if (t.flags &= -129, e === null) {
        if (it) {
          if (i.mode === "hidden")
            return e = ks(t, i), t.lanes = 536870912, nf(null, e);
          if (Us(t), (e = kt) ? (a = Th(
            e,
            Fu
          ), a = a !== null && a.data === ad ? a : null, a !== null && (i = {
            dehydrated: a,
            treeContext: K0(),
            retryLane: 536870912,
            hydrationErrors: null
          }, t.memoizedState = i, i = km(a), i.return = t, t.child = i, Oa = t, kt = null)) : a = null, a === null)
            throw Ji(t, e), fi(t);
          return t.lanes = 536870912, null;
        }
        return ks(t, i);
      }
      var f = e.memoizedState;
      if (f !== null) {
        var d = f.dehydrated;
        if (Us(t), o)
          if (t.flags & 256)
            t.flags &= -257, t = Ey(
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
        else if (Ca(), (a & 536870912) !== 0 && df(t), Bl || ki(
          e,
          t,
          a,
          !1
        ), o = (a & e.childLanes) !== 0, Bl || o) {
          if (i = Xt, i !== null && (d = xn(
            i,
            a
          ), d !== 0 && d !== f.retryLane))
            throw f.retryLane = d, Xl(e, d), el(i, e, d), LS;
          ao(), t = Ey(
            e,
            t,
            a
          );
        } else
          e = f.treeContext, kt = cn(
            d.nextSibling
          ), Oa = t, it = !0, Bf = null, vc = !1, Pn = null, Fu = !1, e !== null && $0(t, e), t = ks(t, i), t.flags |= 4096;
        return t;
      }
      return f = e.child, i = { mode: i.mode, children: i.children }, (a & 536870912) !== 0 && (a & e.lanes) !== 0 && df(t), e = hu(f, i), e.ref = t.ref, t.child = e, e.return = t, e;
    }
    function kd(e, t) {
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
    function Wd(e, t, a, i, o) {
      if (a.prototype && typeof a.prototype.render == "function") {
        var f = et(a) || "Unknown";
        Bb[f] || (console.error(
          "The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.",
          f,
          f
        ), Bb[f] = !0);
      }
      return t.mode & Ja && Ui.recordLegacyContextWarning(
        t,
        null
      ), e === null && (uf(t, t.type), a.contextTypes && (f = et(a) || "Unknown", qb[f] || (qb[f] = !0, console.error(
        "%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with React.useContext() instead. (https://react.dev/link/legacy-context)",
        f
      )))), Ia(t), a = il(
        e,
        t,
        a,
        i,
        void 0,
        o
      ), i = Ns(), e !== null && !Bl ? (Ii(e, t, o), Mu(e, t, o)) : (it && i && Dd(t), t.flags |= 1, Vl(e, t, a, o), t.child);
    }
    function Wc(e, t, a, i, o, f) {
      return Ia(t), Do = -1, n0 = e !== null && e.type !== t.type, t.updateQueue = null, a = Lc(
        t,
        i,
        a,
        o
      ), Yd(e, t), i = Ns(), e !== null && !Bl ? (Ii(e, t, f), Mu(e, t, f)) : (it && i && Dd(t), t.flags |= 1, Vl(e, t, a, f), t.child);
    }
    function Ty(e, t, a, i, o) {
      switch (Ot(t)) {
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
          h = Kd(h), $s(
            h,
            d,
            t,
            ha(f, t)
          ), Ms(t, h);
      }
      if (Ia(t), t.stateNode === null) {
        if (d = Nf, f = a.contextType, "contextType" in a && f !== null && (f === void 0 || f.$$typeof !== Wn) && !Hb.has(a) && (Hb.add(a), h = f === void 0 ? " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? " However, it is set to a " + typeof f + "." : f.$$typeof === jh ? " Did you accidentally pass the Context.Consumer instead?" : " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", console.error(
          "%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s",
          et(a) || "Component",
          h
        )), typeof f == "object" && f !== null && (d = jt(f)), f = new a(i, d), t.mode & Ja) {
          he(!0);
          try {
            f = new a(i, d);
          } finally {
            he(!1);
          }
        }
        if (d = t.memoizedState = f.state !== null && f.state !== void 0 ? f.state : null, f.updater = XS, t.stateNode = f, f._reactInternals = t, f._reactInternalInstance = Ab, typeof a.getDerivedStateFromProps == "function" && d === null && (d = et(a) || "Component", zb.has(d) || (zb.add(d), console.error(
          "`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.",
          d,
          f.state === null ? "null" : "undefined",
          d
        ))), typeof a.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function") {
          var y = h = d = null;
          if (typeof f.componentWillMount == "function" && f.componentWillMount.__suppressDeprecationWarning !== !0 ? d = "componentWillMount" : typeof f.UNSAFE_componentWillMount == "function" && (d = "UNSAFE_componentWillMount"), typeof f.componentWillReceiveProps == "function" && f.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? h = "componentWillReceiveProps" : typeof f.UNSAFE_componentWillReceiveProps == "function" && (h = "UNSAFE_componentWillReceiveProps"), typeof f.componentWillUpdate == "function" && f.componentWillUpdate.__suppressDeprecationWarning !== !0 ? y = "componentWillUpdate" : typeof f.UNSAFE_componentWillUpdate == "function" && (y = "UNSAFE_componentWillUpdate"), d !== null || h !== null || y !== null) {
            f = et(a) || "Component";
            var p = typeof a.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            Db.has(f) || (Db.add(f), console.error(
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
        f = t.stateNode, d = et(a) || "Component", f.render || (a.prototype && typeof a.prototype.render == "function" ? console.error(
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
        ), a.childContextTypes && !Ub.has(a) && (Ub.add(a), console.error(
          "%s uses the legacy childContextTypes API which was removed in React 19. Use React.createContext() instead. (https://react.dev/link/legacy-context)",
          d
        )), a.contextTypes && !Cb.has(a) && (Cb.add(a), console.error(
          "%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with static contextType instead. (https://react.dev/link/legacy-context)",
          d
        )), typeof f.componentShouldUpdate == "function" && console.error(
          "%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.",
          d
        ), a.prototype && a.prototype.isPureReactComponent && typeof f.shouldComponentUpdate < "u" && console.error(
          "%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.",
          et(a) || "A pure component"
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
        ), typeof f.getSnapshotBeforeUpdate != "function" || typeof f.componentDidUpdate == "function" || _b.has(a) || (_b.add(a), console.error(
          "%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.",
          et(a)
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
        ), f = t.stateNode, f.props = i, f.state = t.memoizedState, f.refs = {}, Eu(t), d = a.contextType, f.context = typeof d == "object" && d !== null ? jt(d) : Nf, f.state === i && (d = et(a) || "Component", Rb.has(d) || (Rb.add(d), console.error(
          "%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.",
          d
        ))), t.mode & Ja && Ui.recordLegacyContextWarning(
          t,
          f
        ), Ui.recordUnsafeLifecycleWarnings(
          t,
          f
        ), f.state = t.memoizedState, d = a.getDerivedStateFromProps, typeof d == "function" && (Zs(
          t,
          a,
          d,
          i
        ), f.state = t.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function" || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (d = f.state, typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount(), d !== f.state && (console.error(
          "%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
          se(t) || "Component"
        ), XS.enqueueReplaceState(
          f,
          f.state,
          null
        )), Qn(t, i, f, o), Au(), f.state = t.memoizedState), typeof f.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & Ci) !== De && (t.flags |= 134217728), f = !0;
      } else if (e === null) {
        f = t.stateNode;
        var _ = t.memoizedProps;
        h = Si(a, _), f.props = h;
        var R = f.context;
        y = a.contextType, d = Nf, typeof y == "object" && y !== null && (d = jt(y)), p = a.getDerivedStateFromProps, y = typeof p == "function" || typeof f.getSnapshotBeforeUpdate == "function", _ = t.pendingProps !== _, y || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (_ || R !== d) && Js(
          t,
          f,
          i,
          d
        ), Gf = !1;
        var b = t.memoizedState;
        f.state = b, Qn(t, i, f, o), Au(), R = t.memoizedState, _ || b !== R || Gf ? (typeof p == "function" && (Zs(
          t,
          a,
          p,
          i
        ), R = t.memoizedState), (h = Gf || Ru(
          t,
          a,
          h,
          i,
          b,
          R,
          d
        )) ? (y || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount()), typeof f.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & Ci) !== De && (t.flags |= 134217728)) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & Ci) !== De && (t.flags |= 134217728), t.memoizedProps = i, t.memoizedState = R), f.props = i, f.state = R, f.context = d, f = h) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & Ci) !== De && (t.flags |= 134217728), f = !1);
      } else {
        f = t.stateNode, Ya(e, t), d = t.memoizedProps, y = Si(a, d), f.props = y, p = t.pendingProps, b = f.context, R = a.contextType, h = Nf, typeof R == "object" && R !== null && (h = jt(R)), _ = a.getDerivedStateFromProps, (R = typeof _ == "function" || typeof f.getSnapshotBeforeUpdate == "function") || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (d !== p || b !== h) && Js(
          t,
          f,
          i,
          h
        ), Gf = !1, b = t.memoizedState, f.state = b, Qn(t, i, f, o), Au();
        var q = t.memoizedState;
        d !== p || b !== q || Gf || e !== null && e.dependencies !== null && Es(e.dependencies) ? (typeof _ == "function" && (Zs(
          t,
          a,
          _,
          i
        ), q = t.memoizedState), (y = Gf || Ru(
          t,
          a,
          y,
          i,
          b,
          q,
          h
        ) || e !== null && e.dependencies !== null && Es(e.dependencies)) ? (R || typeof f.UNSAFE_componentWillUpdate != "function" && typeof f.componentWillUpdate != "function" || (typeof f.componentWillUpdate == "function" && f.componentWillUpdate(i, q, h), typeof f.UNSAFE_componentWillUpdate == "function" && f.UNSAFE_componentWillUpdate(
          i,
          q,
          h
        )), typeof f.componentDidUpdate == "function" && (t.flags |= 4), typeof f.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof f.componentDidUpdate != "function" || d === e.memoizedProps && b === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || d === e.memoizedProps && b === e.memoizedState || (t.flags |= 1024), t.memoizedProps = i, t.memoizedState = q), f.props = i, f.state = q, f.context = h, f = y) : (typeof f.componentDidUpdate != "function" || d === e.memoizedProps && b === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || d === e.memoizedProps && b === e.memoizedState || (t.flags |= 1024), f = !1);
      }
      if (h = f, kd(e, t), d = (t.flags & 128) !== 0, h || d) {
        if (h = t.stateNode, Ec(t), d && typeof a.getDerivedStateFromError != "function")
          a = null, dn = -1;
        else if (a = P1(h), t.mode & Ja) {
          he(!0);
          try {
            P1(h);
          } finally {
            he(!1);
          }
        }
        t.flags |= 1, e !== null && d ? (t.child = kr(
          t,
          e.child,
          null,
          o
        ), t.child = kr(
          t,
          null,
          a,
          o
        )) : Vl(e, t, a, o), t.memoizedState = h.state, e = t.child;
      } else
        e = Mu(
          e,
          t,
          o
        );
      return o = t.stateNode, f && o.props !== i && (Sm || console.error(
        "It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.",
        se(t) || "a component"
      ), Sm = !0), e;
    }
    function Ws(e, t, a, i) {
      return si(), t.flags |= 256, Vl(e, t, a, i), t.child;
    }
    function uf(e, t) {
      t && t.childContextTypes && console.error(
        `childContextTypes cannot be defined on a function component.
  %s.childContextTypes = ...`,
        t.displayName || t.name || "Component"
      ), typeof t.getDerivedStateFromProps == "function" && (e = et(t) || "Unknown", jb[e] || (console.error(
        "%s: Function components do not support getDerivedStateFromProps.",
        e
      ), jb[e] = !0)), typeof t.contextType == "object" && t.contextType !== null && (t = et(t) || "Unknown", Yb[t] || (console.error(
        "%s: Function components do not support contextType.",
        t
      ), Yb[t] = !0));
    }
    function Fd(e) {
      return { baseLanes: e, cachePool: Md() };
    }
    function Fs(e, t, a) {
      return e = e !== null ? e.childLanes & ~a : 0, t && (e |= jn), e;
    }
    function P0(e, t, a) {
      var i, o = t.pendingProps;
      Ge(t) && (t.flags |= 128);
      var f = !1, d = (t.flags & 128) !== 0;
      if ((i = d) || (i = e !== null && e.memoizedState === null ? !1 : (_l.current & l0) !== 0), i && (f = !0, t.flags &= -129), i = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
        if (it) {
          if (f ? la(t) : un(t), (e = kt) ? (a = Th(
            e,
            Fu
          ), a = a !== null && a.data !== ad ? a : null, a !== null && (i = {
            dehydrated: a,
            treeContext: K0(),
            retryLane: 536870912,
            hydrationErrors: null
          }, t.memoizedState = i, i = km(a), i.return = t, t.child = i, Oa = t, kt = null)) : a = null, a === null)
            throw Ji(t, e), fi(t);
          return Ah(a) ? t.lanes = 32 : t.lanes = 536870912, null;
        }
        var h = o.children;
        if (o = o.fallback, f) {
          un(t);
          var y = t.mode;
          return h = Is(
            { mode: "hidden", children: h },
            y
          ), o = mu(
            o,
            y,
            a,
            null
          ), h.return = t, o.return = t, h.sibling = o, t.child = h, o = t.child, o.memoizedState = Fd(a), o.childLanes = Fs(
            e,
            i,
            a
          ), t.memoizedState = VS, nf(
            null,
            o
          );
        }
        return la(t), Id(
          t,
          h
        );
      }
      var p = e.memoizedState;
      if (p !== null) {
        var _ = p.dehydrated;
        if (_ !== null) {
          if (d)
            t.flags & 256 ? (la(t), t.flags &= -257, t = Pd(
              e,
              t,
              a
            )) : t.memoizedState !== null ? (un(t), t.child = e.child, t.flags |= 128, t = null) : (un(t), h = o.fallback, y = t.mode, o = Is(
              {
                mode: "visible",
                children: o.children
              },
              y
            ), h = mu(
              h,
              y,
              a,
              null
            ), h.flags |= 2, o.return = t, h.return = t, o.sibling = h, t.child = o, kr(
              t,
              e.child,
              null,
              a
            ), o = t.child, o.memoizedState = Fd(a), o.childLanes = Fs(
              e,
              i,
              a
            ), t.memoizedState = VS, t = nf(
              null,
              o
            ));
          else if (la(t), Ca(), (a & 536870912) !== 0 && df(t), Ah(
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
            }, typeof i == "string" && AS.set(
              h,
              o
            ), pu(o), t = Pd(
              e,
              t,
              a
            );
          } else if (Bl || ki(
            e,
            t,
            a,
            !1
          ), i = (a & e.childLanes) !== 0, Bl || i) {
            if (i = Xt, i !== null && (o = xn(
              i,
              a
            ), o !== 0 && o !== p.retryLane))
              throw p.retryLane = o, Xl(
                e,
                o
              ), el(
                i,
                e,
                o
              ), LS;
            ip(
              _
            ) || ao(), t = Pd(
              e,
              t,
              a
            );
          } else
            ip(
              _
            ) ? (t.flags |= 192, t.child = e.child, t = null) : (e = p.treeContext, kt = cn(
              _.nextSibling
            ), Oa = t, it = !0, Bf = null, vc = !1, Pn = null, Fu = !1, e !== null && $0(t, e), t = Id(
              t,
              o.children
            ), t.flags |= 4096);
          return t;
        }
      }
      return f ? (un(t), h = o.fallback, y = t.mode, b = e.child, _ = b.sibling, o = hu(
        b,
        {
          mode: "hidden",
          children: o.children
        }
      ), o.subtreeFlags = b.subtreeFlags & 65011712, _ !== null ? h = hu(
        _,
        h
      ) : (h = mu(
        h,
        y,
        a,
        null
      ), h.flags |= 2), h.return = t, o.return = t, o.sibling = h, t.child = o, nf(null, o), o = t.child, h = e.child.memoizedState, h === null ? h = Fd(a) : (y = h.cachePool, y !== null ? (b = Ul._currentValue, y = y.parent !== b ? { parent: b, pool: b } : y) : y = Md(), h = {
        baseLanes: h.baseLanes | a,
        cachePool: y
      }), o.memoizedState = h, o.childLanes = Fs(
        e,
        i,
        a
      ), t.memoizedState = VS, nf(
        e.child,
        o
      )) : (p !== null && (a & 62914560) === a && (a & e.lanes) !== 0 && df(t), la(t), a = e.child, e = a.sibling, a = hu(a, {
        mode: "visible",
        children: o.children
      }), a.return = t, a.sibling = null, e !== null && (i = t.deletions, i === null ? (t.deletions = [e], t.flags |= 16) : i.push(e)), t.child = a, t.memoizedState = null, a);
    }
    function Id(e, t) {
      return t = Is(
        { mode: "visible", children: t },
        e.mode
      ), t.return = e, e.child = t;
    }
    function Is(e, t) {
      return e = N(22, e, null, t), e.lanes = 0, e;
    }
    function Pd(e, t, a) {
      return kr(t, e.child, null, a), e = Id(
        t,
        t.pendingProps.children
      ), e.flags |= 2, t.memoizedState = null, e;
    }
    function Ay(e, t, a) {
      e.lanes |= t;
      var i = e.alternate;
      i !== null && (i.lanes |= t), ri(
        e.return,
        t,
        a
      );
    }
    function eh(e, t, a, i, o, f) {
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
    function th(e, t, a) {
      var i = t.pendingProps, o = i.revealOrder, f = i.tail, d = i.children, h = _l.current;
      if ((i = (h & l0) !== 0) ? (h = h & ym | l0, t.flags |= 128) : h &= ym, Re(_l, h, t), h = o ?? "null", o !== "forwards" && o !== "unstable_legacy-backwards" && o !== "together" && o !== "independent" && !xb[h])
        if (xb[h] = !0, o == null)
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
      h = f ?? "null", dg[h] || (f == null ? (o === "forwards" || o === "backwards" || o === "unstable_legacy-backwards") && (dg[h] = !0, console.error(
        'The default for the <SuspenseList tail="..."> prop is changing. To be future compatible you must explictly specify either "visible" (the current default), "collapsed" or "hidden".'
      )) : f !== "visible" && f !== "collapsed" && f !== "hidden" ? (dg[h] = !0, console.error(
        '"%s" is not a supported value for tail on <SuspenseList />. Did you mean "visible", "collapsed" or "hidden"?',
        f
      )) : o !== "forwards" && o !== "backwards" && o !== "unstable_legacy-backwards" && (dg[h] = !0, console.error(
        '<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?',
        f
      )));
      e: if ((o === "forwards" || o === "backwards" || o === "unstable_legacy-backwards") && d !== void 0 && d !== null && d !== !1)
        if (Ol(d)) {
          for (h = 0; h < d.length; h++)
            if (!nt(
              d[h],
              h
            ))
              break e;
        } else if (h = zt(d), typeof h == "function") {
          if (h = h.call(d))
            for (var y = h.next(), p = 0; !y.done; y = h.next()) {
              if (!nt(y.value, p)) break e;
              p++;
            }
        } else
          console.error(
            'A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?',
            o
          );
      if (Vl(e, t, d, a), it ? (Zi(), d = Xp) : d = 0, !i && e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && Ay(e, a, t);
          else if (e.tag === 19)
            Ay(e, a, t);
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
            e = a.alternate, e !== null && zu(e) === null && (o = a), a = a.sibling;
          a = o, a === null ? (o = t.child, t.child = null) : (o = a.sibling, a.sibling = null), eh(
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
            if (e = o.alternate, e !== null && zu(e) === null) {
              t.child = o;
              break;
            }
            e = o.sibling, o.sibling = a, a = o, o = e;
          }
          eh(
            t,
            !0,
            a,
            null,
            f,
            d
          );
          break;
        case "together":
          eh(
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
    function Mu(e, t, a) {
      if (e !== null && (t.dependencies = e.dependencies), dn = -1, Qf |= t.lanes, (a & t.childLanes) === 0)
        if (e !== null) {
          if (ki(
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
        for (e = t.child, a = hu(e, e.pendingProps), t.child = a, a.return = t; e.sibling !== null; )
          e = e.sibling, a = a.sibling = hu(e, e.pendingProps), a.return = t;
        a.sibling = null;
      }
      return t.child;
    }
    function lh(e, t) {
      return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && Es(e)));
    }
    function Oy(e, t, a) {
      switch (t.tag) {
        case 3:
          X(
            t,
            t.stateNode.containerInfo
          ), vu(
            t,
            Ul,
            e.memoizedState.cache
          ), si();
          break;
        case 27:
        case 5:
          ie(t);
          break;
        case 4:
          X(
            t,
            t.stateNode.containerInfo
          );
          break;
        case 10:
          vu(
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
            return t.flags |= 128, Us(t), null;
          break;
        case 13:
          if (i = t.memoizedState, i !== null)
            return i.dehydrated !== null ? (la(t), t.flags |= 128, null) : (a & t.child.childLanes) !== 0 ? P0(
              e,
              t,
              a
            ) : (la(t), e = Mu(
              e,
              t,
              a
            ), e !== null ? e.sibling : null);
          la(t);
          break;
        case 19:
          var o = (e.flags & 128) !== 0;
          if (i = (a & t.childLanes) !== 0, i || (ki(
            e,
            t,
            a,
            !1
          ), i = (a & t.childLanes) !== 0), o) {
            if (i)
              return th(
                e,
                t,
                a
              );
            t.flags |= 128;
          }
          if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), Re(
            _l,
            _l.current,
            t
          ), i) break;
          return null;
        case 22:
          return t.lanes = 0, $d(
            e,
            t,
            a,
            t.pendingProps
          );
        case 24:
          vu(
            t,
            Ul,
            e.memoizedState.cache
          );
      }
      return Mu(e, t, a);
    }
    function ah(e, t, a) {
      if (t._debugNeedsRemount && e !== null) {
        a = Yc(
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
          if (!lh(e, a) && (t.flags & 128) === 0)
            return Bl = !1, Oy(
              e,
              t,
              a
            );
          Bl = (e.flags & 131072) !== 0;
        }
      else
        Bl = !1, (i = it) && (Zi(), i = (t.flags & 1048576) !== 0), i && (i = t.index, Zi(), Wm(t, Xp, i));
      switch (t.lanes = 0, t.tag) {
        case 16:
          e: if (i = t.pendingProps, e = an(t.elementType), t.type = e, typeof e == "function")
            Od(e) ? (i = Si(
              e,
              i
            ), t.tag = 1, t.type = e = Vi(e), t = Ty(
              null,
              t,
              e,
              i,
              a
            )) : (t.tag = 0, uf(t, e), t.type = e = Vi(e), t = Wd(
              null,
              t,
              e,
              i,
              a
            ));
          else {
            if (e != null) {
              if (o = e.$$typeof, o === _i) {
                t.tag = 11, t.type = e = Ad(e), t = vy(
                  null,
                  t,
                  e,
                  i,
                  a
                );
                break e;
              } else if (o === ho) {
                t.tag = 14, t = gy(
                  null,
                  t,
                  e,
                  i,
                  a
                );
                break e;
              }
            }
            throw t = "", e !== null && typeof e == "object" && e.$$typeof === ml && (t = " Did you wrap a component in React.lazy() more than once?"), a = et(e) || e, Error(
              "Element type is invalid. Received a promise that resolves to: " + a + ". Lazy element type must resolve to a class or function." + t
            );
          }
          return t;
        case 0:
          return Wd(
            e,
            t,
            t.type,
            t.pendingProps,
            a
          );
        case 1:
          return i = t.type, o = Si(
            i,
            t.pendingProps
          ), Ty(
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
            o = f.element, Ya(e, t), Qn(t, i, null, a);
            var d = t.memoizedState;
            if (i = d.cache, vu(t, Ul, i), i !== f.cache && $i(
              t,
              [Ul],
              a,
              !0
            ), Au(), i = d.element, f.isDehydrated)
              if (f = {
                element: i,
                isDehydrated: !1,
                cache: d.cache
              }, t.updateQueue.baseState = f, t.memoizedState = f, t.flags & 256) {
                t = Ws(
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
                ), pu(o), t = Ws(
                  e,
                  t,
                  i,
                  a
                );
                break e;
              } else
                for (e = t.stateNode.containerInfo, e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e, kt = cn(e.firstChild), Oa = t, it = !0, Bf = null, vc = !1, Pn = null, Fu = !0, a = hb(
                  t,
                  null,
                  i,
                  a
                ), t.child = a; a; )
                  a.flags = a.flags & -3 | 4096, a = a.sibling;
            else {
              if (si(), i === o) {
                t = Mu(
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
          return kd(e, t), e === null ? (a = fp(
            t.type,
            null,
            t.pendingProps,
            null
          )) ? t.memoizedState = a : it || (a = t.type, e = t.pendingProps, i = qt(
            Un.current
          ), i = gh(
            i
          ).createElement(a), i[Fl] = t, i[fa] = e, ot(i, a, e), ye(i), t.stateNode = i) : t.memoizedState = fp(
            t.type,
            e.memoizedProps,
            t.pendingProps,
            e.memoizedState
          ), null;
        case 27:
          return ie(t), e === null && it && (i = qt(Un.current), o = P(), i = t.stateNode = kn(
            t.type,
            t.pendingProps,
            i,
            o,
            !1
          ), vc || (o = lp(
            i,
            t.type,
            t.pendingProps,
            o
          ), o !== null && (qc(t, 0).serverProps = o)), Oa = t, Fu = !0, o = kt, zi(t.type) ? (h1 = o, kt = cn(
            i.firstChild
          )) : kt = o), Vl(
            e,
            t,
            t.pendingProps.children,
            a
          ), kd(e, t), e === null && (t.flags |= 4194304), t.child;
        case 5:
          return e === null && it && (f = P(), i = hd(
            t.type,
            f.ancestorInfo
          ), o = kt, (d = !o) || (d = zv(
            o,
            t.type,
            t.pendingProps,
            Fu
          ), d !== null ? (t.stateNode = d, vc || (f = lp(
            d,
            t.type,
            t.pendingProps,
            f
          ), f !== null && (qc(t, 0).serverProps = f)), Oa = t, kt = cn(
            d.firstChild
          ), Fu = !1, f = !0) : f = !1, d = !f), d && (i && Ji(t, o), fi(t))), ie(t), o = t.type, f = t.pendingProps, d = e !== null ? e.memoizedProps : null, i = f.children, vr(o, f) ? i = null : d !== null && vr(o, d) && (t.flags |= 32), t.memoizedState !== null && (o = il(
            e,
            t,
            Hs,
            null,
            null,
            a
          ), b0._currentValue = o), kd(e, t), Vl(
            e,
            t,
            i,
            a
          ), t.child;
        case 6:
          return e === null && it && (a = t.pendingProps, e = P(), i = e.ancestorInfo.current, a = i != null ? Go(
            a,
            i.tag,
            e.ancestorInfo.implicitRootScope
          ) : !0, e = kt, (i = !e) || (i = Rt(
            e,
            t.pendingProps,
            Fu
          ), i !== null ? (t.stateNode = i, Oa = t, kt = null, i = !0) : i = !1, i = !i), i && (a && Ji(t, e), fi(t))), null;
        case 13:
          return P0(e, t, a);
        case 4:
          return X(
            t,
            t.stateNode.containerInfo
          ), i = t.pendingProps, e === null ? t.child = kr(
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
          return vy(
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
          return i = t.type, o = t.pendingProps, f = o.value, "value" in o || Gb || (Gb = !0, console.error(
            "The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"
          )), vu(t, i, f), Vl(
            e,
            t,
            o.children,
            a
          ), t.child;
        case 9:
          return o = t.type._context, i = t.pendingProps.children, typeof i != "function" && console.error(
            "A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."
          ), Ia(t), o = jt(o), i = US(
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
          return gy(
            e,
            t,
            t.type,
            t.pendingProps,
            a
          );
        case 15:
          return Sy(
            e,
            t,
            t.type,
            t.pendingProps,
            a
          );
        case 19:
          return th(
            e,
            t,
            a
          );
        case 31:
          return I0(e, t, a);
        case 22:
          return $d(
            e,
            t,
            a,
            t.pendingProps
          );
        case 24:
          return Ia(t), i = jt(Ul), e === null ? (o = zs(), o === null && (o = Xt, f = ly(), o.pooledCache = f, xc(f), f !== null && (o.pooledCacheLanes |= a), o = f), t.memoizedState = {
            parent: i,
            cache: o
          }, Eu(t), vu(t, Ul, o)) : ((e.lanes & a) !== 0 && (Ya(e, t), Qn(t, null, null, a), Au()), o = e.memoizedState, f = t.memoizedState, o.parent !== i ? (o = {
            parent: i,
            cache: i
          }, t.memoizedState = o, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = o), vu(t, Ul, i)) : (i = f.cache, vu(t, Ul, i), i !== o.cache && $i(
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
    function Cu(e) {
      e.flags |= 4;
    }
    function zy(e, t, a, i, o) {
      if ((t = (e.mode & jT) !== De) && (t = !1), t) {
        if (e.flags |= 16777216, (o & 335544128) === o)
          if (e.stateNode.complete) e.flags |= 8192;
          else if (dh()) e.flags |= 8192;
          else
            throw $r = ig, NS;
      } else e.flags &= -16777217;
    }
    function nh(e, t) {
      if (t.type !== "stylesheet" || (t.state.loading & li) !== id)
        e.flags &= -16777217;
      else if (e.flags |= 16777216, !Rh(t))
        if (dh()) e.flags |= 8192;
        else
          throw $r = ig, NS;
    }
    function Ps(e, t) {
      t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? Bo() : 536870912, e.lanes |= t, ed |= t);
    }
    function cf(e, t) {
      if (!it)
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
    function Dt(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = 0, i = 0;
      if (t)
        if ((e.mode & Je) !== De) {
          for (var o = e.selfBaseDuration, f = e.child; f !== null; )
            a |= f.lanes | f.childLanes, i |= f.subtreeFlags & 65011712, i |= f.flags & 65011712, o += f.treeBaseDuration, f = f.sibling;
          e.treeBaseDuration = o;
        } else
          for (o = e.child; o !== null; )
            a |= o.lanes | o.childLanes, i |= o.subtreeFlags & 65011712, i |= o.flags & 65011712, o.return = e, o = o.sibling;
      else if ((e.mode & Je) !== De) {
        o = e.actualDuration, f = e.selfBaseDuration;
        for (var d = e.child; d !== null; )
          a |= d.lanes | d.childLanes, i |= d.subtreeFlags, i |= d.flags, o += d.actualDuration, f += d.treeBaseDuration, d = d.sibling;
        e.actualDuration = o, e.treeBaseDuration = f;
      } else
        for (o = e.child; o !== null; )
          a |= o.lanes | o.childLanes, i |= o.subtreeFlags, i |= o.flags, o.return = e, o = o.sibling;
      return e.subtreeFlags |= i, e.childLanes = a, t;
    }
    function ev(e, t, a) {
      var i = t.pendingProps;
      switch (Fm(t), t.tag) {
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return Dt(t), null;
        case 1:
          return Dt(t), null;
        case 3:
          return a = t.stateNode, i = null, e !== null && (i = e.memoizedState.cache), t.memoizedState.cache !== i && (t.flags |= 2048), gu(Ul, t), Y(t), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (e === null || e.child === null) && (jc(t) ? (bs(), Cu(t)) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, ey())), Dt(t), null;
        case 26:
          var o = t.type, f = t.memoizedState;
          return e === null ? (Cu(t), f !== null ? (Dt(t), nh(
            t,
            f
          )) : (Dt(t), zy(
            t,
            o,
            null,
            i,
            a
          ))) : f ? f !== e.memoizedState ? (Cu(t), Dt(t), nh(
            t,
            f
          )) : (Dt(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== i && Cu(t), Dt(t), zy(
            t,
            o,
            e,
            i,
            a
          )), null;
        case 27:
          if (ge(t), a = qt(Un.current), o = t.type, e !== null && t.stateNode != null)
            e.memoizedProps !== i && Cu(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw Error(
                  "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
                );
              return Dt(t), null;
            }
            e = P(), jc(t) ? Im(t) : (e = kn(
              o,
              i,
              a,
              e,
              !0
            ), t.stateNode = e, Cu(t));
          }
          return Dt(t), null;
        case 5:
          if (ge(t), o = t.type, e !== null && t.stateNode != null)
            e.memoizedProps !== i && Cu(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw Error(
                  "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
                );
              return Dt(t), null;
            }
            var d = P();
            if (jc(t))
              Im(t);
            else {
              switch (f = qt(Un.current), hd(o, d.ancestorInfo), d = d.context, f = gh(f), d) {
                case Dm:
                  f = f.createElementNS(
                    at,
                    o
                  );
                  break;
                case Hg:
                  f = f.createElementNS(
                    We,
                    o
                  );
                  break;
                default:
                  switch (o) {
                    case "svg":
                      f = f.createElementNS(
                        at,
                        o
                      );
                      break;
                    case "math":
                      f = f.createElementNS(
                        We,
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
                      ), Object.prototype.toString.call(f) !== "[object HTMLUnknownElement]" || Fn.call(fE, o) || (fE[o] = !0, console.error(
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
              e: switch (ot(f, o, i), o) {
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
              i && Cu(t);
            }
          }
          return Dt(t), zy(
            t,
            t.type,
            e === null ? null : e.memoizedProps,
            t.pendingProps,
            a
          ), null;
        case 6:
          if (e && t.stateNode != null)
            e.memoizedProps !== i && Cu(t);
          else {
            if (typeof i != "string" && t.stateNode === null)
              throw Error(
                "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
              );
            if (e = qt(Un.current), a = P(), jc(t)) {
              if (e = t.stateNode, a = t.memoizedProps, o = !vc, i = null, f = Oa, f !== null)
                switch (f.tag) {
                  case 3:
                    o && (o = Sr(
                      e,
                      a,
                      i
                    ), o !== null && (qc(t, 0).serverProps = o));
                    break;
                  case 27:
                  case 5:
                    i = f.memoizedProps, o && (o = Sr(
                      e,
                      a,
                      i
                    ), o !== null && (qc(
                      t,
                      0
                    ).serverProps = o));
                }
              e[Fl] = t, e = !!(e.nodeValue === a || i !== null && i.suppressHydrationWarning === !0 || yr(e.nodeValue, a)), e || fi(t, !0);
            } else
              o = a.ancestorInfo.current, o != null && Go(
                i,
                o.tag,
                a.ancestorInfo.implicitRootScope
              ), e = gh(e).createTextNode(
                i
              ), e[Fl] = t, t.stateNode = e;
          }
          return Dt(t), null;
        case 31:
          if (a = t.memoizedState, e === null || e.memoizedState !== null) {
            if (i = jc(t), a !== null) {
              if (e === null) {
                if (!i)
                  throw Error(
                    "A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React."
                  );
                if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e)
                  throw Error(
                    "Expected to have a hydrated activity instance. This error is likely caused by a bug in React. Please file an issue."
                  );
                e[Fl] = t, Dt(t), (t.mode & Je) !== De && a !== null && (e = t.child, e !== null && (t.treeBaseDuration -= e.treeBaseDuration));
              } else
                bs(), si(), (t.flags & 128) === 0 && (a = t.memoizedState = null), t.flags |= 4, Dt(t), (t.mode & Je) !== De && a !== null && (e = t.child, e !== null && (t.treeBaseDuration -= e.treeBaseDuration));
              e = !1;
            } else
              a = ey(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a), e = !0;
            if (!e)
              return t.flags & 256 ? (aa(t), t) : (aa(t), null);
            if ((t.flags & 128) !== 0)
              throw Error(
                "Client rendering an Activity suspended it again. This is a bug in React."
              );
          }
          return Dt(t), null;
        case 13:
          if (i = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (o = i, f = jc(t), o !== null && o.dehydrated !== null) {
              if (e === null) {
                if (!f)
                  throw Error(
                    "A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React."
                  );
                if (f = t.memoizedState, f = f !== null ? f.dehydrated : null, !f)
                  throw Error(
                    "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue."
                  );
                f[Fl] = t, Dt(t), (t.mode & Je) !== De && o !== null && (o = t.child, o !== null && (t.treeBaseDuration -= o.treeBaseDuration));
              } else
                bs(), si(), (t.flags & 128) === 0 && (o = t.memoizedState = null), t.flags |= 4, Dt(t), (t.mode & Je) !== De && o !== null && (o = t.child, o !== null && (t.treeBaseDuration -= o.treeBaseDuration));
              o = !1;
            } else
              o = ey(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = o), o = !0;
            if (!o)
              return t.flags & 256 ? (aa(t), t) : (aa(t), null);
          }
          return aa(t), (t.flags & 128) !== 0 ? (t.lanes = a, (t.mode & Je) !== De && tn(t), t) : (a = i !== null, e = e !== null && e.memoizedState !== null, a && (i = t.child, o = null, i.alternate !== null && i.alternate.memoizedState !== null && i.alternate.memoizedState.cachePool !== null && (o = i.alternate.memoizedState.cachePool.pool), f = null, i.memoizedState !== null && i.memoizedState.cachePool !== null && (f = i.memoizedState.cachePool.pool), f !== o && (i.flags |= 2048)), a !== e && a && (t.child.flags |= 8192), Ps(t, t.updateQueue), Dt(t), (t.mode & Je) !== De && a && (e = t.child, e !== null && (t.treeBaseDuration -= e.treeBaseDuration)), null);
        case 4:
          return Y(t), e === null && hr(
            t.stateNode.containerInfo
          ), Dt(t), null;
        case 10:
          return gu(t.type, t), Dt(t), null;
        case 19:
          if (Te(_l, t), i = t.memoizedState, i === null) return Dt(t), null;
          if (o = (t.flags & 128) !== 0, f = i.rendering, f === null)
            if (o) cf(i, !1);
            else {
              if (dl !== Mo || e !== null && (e.flags & 128) !== 0)
                for (e = t.child; e !== null; ) {
                  if (f = zu(e), f !== null) {
                    for (t.flags |= 128, cf(i, !1), e = f.updateQueue, t.updateQueue = e, Ps(t, e), t.subtreeFlags = 0, e = a, a = t.child; a !== null; )
                      Vo(a, e), a = a.sibling;
                    return Re(
                      _l,
                      _l.current & ym | l0,
                      t
                    ), it && yu(t, i.treeForkCount), t.child;
                  }
                  e = e.sibling;
                }
              i.tail !== null && sl() > Sg && (t.flags |= 128, o = !0, cf(i, !1), t.lanes = 4194304);
            }
          else {
            if (!o)
              if (e = zu(f), e !== null) {
                if (t.flags |= 128, o = !0, e = e.updateQueue, t.updateQueue = e, Ps(t, e), cf(i, !0), i.tail === null && i.tailMode === "hidden" && !f.alternate && !it)
                  return Dt(t), null;
              } else
                2 * sl() - i.renderingStartTime > Sg && a !== 536870912 && (t.flags |= 128, o = !0, cf(i, !1), t.lanes = 4194304);
            i.isBackwards ? (f.sibling = t.child, t.child = f) : (e = i.last, e !== null ? e.sibling = f : t.child = f, i.last = f);
          }
          return i.tail !== null ? (e = i.tail, i.rendering = e, i.tail = e.sibling, i.renderingStartTime = sl(), e.sibling = null, a = _l.current, a = o ? a & ym | l0 : a & ym, Re(_l, a, t), it && yu(t, i.treeForkCount), e) : (Dt(t), null);
        case 22:
        case 23:
          return aa(t), Ou(t), i = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== i && (t.flags |= 8192) : i && (t.flags |= 8192), i ? (a & 536870912) !== 0 && (t.flags & 128) === 0 && (Dt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Dt(t), a = t.updateQueue, a !== null && Ps(t, a.retryQueue), a = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), i = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (i = t.memoizedState.cachePool.pool), i !== a && (t.flags |= 2048), e !== null && Te(Jr, t), null;
        case 24:
          return a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), gu(Ul, t), Dt(t), null;
        case 25:
          return null;
        case 30:
          return null;
      }
      throw Error(
        "Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue."
      );
    }
    function tv(e, t) {
      switch (Fm(t), t.tag) {
        case 1:
          return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & Je) !== De && tn(t), t) : null;
        case 3:
          return gu(Ul, t), Y(t), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
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
          return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & Je) !== De && tn(t), t) : null;
        case 13:
          if (aa(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
              throw Error(
                "Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue."
              );
            si();
          }
          return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & Je) !== De && tn(t), t) : null;
        case 19:
          return Te(_l, t), null;
        case 4:
          return Y(t), null;
        case 10:
          return gu(t.type, t), null;
        case 22:
        case 23:
          return aa(t), Ou(t), e !== null && Te(Jr, t), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & Je) !== De && tn(t), t) : null;
        case 24:
          return gu(Ul, t), null;
        case 25:
          return null;
        default:
          return null;
      }
    }
    function lv(e, t) {
      switch (Fm(t), t.tag) {
        case 3:
          gu(Ul, t), Y(t);
          break;
        case 26:
        case 27:
        case 5:
          ge(t);
          break;
        case 4:
          Y(t);
          break;
        case 31:
          t.memoizedState !== null && aa(t);
          break;
        case 13:
          aa(t);
          break;
        case 19:
          Te(_l, t);
          break;
        case 10:
          gu(t.type, t);
          break;
        case 22:
        case 23:
          aa(t), Ou(t), e !== null && Te(Jr, t);
          break;
        case 24:
          gu(Ul, t);
      }
    }
    function Uu(e) {
      return (e.mode & Je) !== De;
    }
    function _y(e, t) {
      Uu(e) ? (En(), Ic(t, e), Su()) : Ic(t, e);
    }
    function Fc(e, t, a) {
      Uu(e) ? (En(), bi(
        a,
        e,
        t
      ), Su()) : bi(
        a,
        e,
        t
      );
    }
    function Ic(e, t) {
      try {
        var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
        if (i !== null) {
          var o = i.next;
          a = o;
          do {
            if ((a.tag & e) === e && (i = void 0, (e & hn) !== og && (Om = !0), i = fe(
              t,
              LT,
              a
            ), (e & hn) !== og && (Om = !1), i !== void 0 && typeof i != "function")) {
              var f = void 0;
              f = (a.tag & tu) !== 0 ? "useLayoutEffect" : (a.tag & hn) !== 0 ? "useInsertionEffect" : "useEffect";
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
    function bi(e, t, a) {
      try {
        var i = t.updateQueue, o = i !== null ? i.lastEffect : null;
        if (o !== null) {
          var f = o.next;
          i = f;
          do {
            if ((i.tag & e) === e) {
              var d = i.inst, h = d.destroy;
              h !== void 0 && (d.destroy = void 0, (e & hn) !== og && (Om = !0), o = t, fe(
                o,
                VT,
                o,
                a,
                h
              ), (e & hn) !== og && (Om = !1));
            }
            i = i.next;
          } while (i !== f);
        }
      } catch (y) {
        pt(t, t.return, y);
      }
    }
    function Dy(e, t) {
      Uu(e) ? (En(), Ic(t, e), Su()) : Ic(t, e);
    }
    function uh(e, t, a) {
      Uu(e) ? (En(), bi(
        a,
        e,
        t
      ), Su()) : bi(
        a,
        e,
        t
      );
    }
    function of(e) {
      var t = e.updateQueue;
      if (t !== null) {
        var a = e.stateNode;
        e.type.defaultProps || "ref" in e.memoizedProps || Sm || (a.props !== e.memoizedProps && console.error(
          "Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
          se(e) || "instance"
        ), a.state !== e.memoizedState && console.error(
          "Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
          se(e) || "instance"
        ));
        try {
          fe(
            e,
            Hd,
            t,
            a
          );
        } catch (i) {
          pt(e, e.return, i);
        }
      }
    }
    function av(e, t, a) {
      return e.getSnapshotBeforeUpdate(t, a);
    }
    function Ry(e, t) {
      var a = t.memoizedProps, i = t.memoizedState;
      t = e.stateNode, e.type.defaultProps || "ref" in e.memoizedProps || Sm || (t.props !== e.memoizedProps && console.error(
        "Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
        se(e) || "instance"
      ), t.state !== e.memoizedState && console.error(
        "Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
        se(e) || "instance"
      ));
      try {
        var o = Si(
          e.type,
          a
        ), f = fe(
          e,
          av,
          t,
          o,
          i
        );
        a = wb, f !== void 0 || a.has(e.type) || (a.add(e.type), fe(e, function() {
          console.error(
            "%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.",
            se(e)
          );
        })), t.__reactInternalSnapshotBeforeUpdate = f;
      } catch (d) {
        pt(e, e.return, d);
      }
    }
    function My(e, t, a) {
      a.props = Si(
        e.type,
        e.memoizedProps
      ), a.state = e.memoizedState, Uu(e) ? (En(), fe(
        e,
        ub,
        e,
        t,
        a
      ), Su()) : fe(
        e,
        ub,
        e,
        t,
        a
      );
    }
    function Cy(e) {
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
          if (Uu(e))
            try {
              En(), e.refCleanup = t(a);
            } finally {
              Su();
            }
          else e.refCleanup = t(a);
        else
          typeof t == "string" ? console.error("String refs are no longer supported.") : t.hasOwnProperty("current") || console.error(
            "Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().",
            se(e)
          ), t.current = a;
      }
    }
    function Pc(e, t) {
      try {
        fe(e, Cy, e);
      } catch (a) {
        pt(e, t, a);
      }
    }
    function Jn(e, t) {
      var a = e.ref, i = e.refCleanup;
      if (a !== null)
        if (typeof i == "function")
          try {
            if (Uu(e))
              try {
                En(), fe(e, i);
              } finally {
                Su(e);
              }
            else fe(e, i);
          } catch (o) {
            pt(e, t, o);
          } finally {
            e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
          }
        else if (typeof a == "function")
          try {
            if (Uu(e))
              try {
                En(), fe(e, a, null);
              } finally {
                Su(e);
              }
            else fe(e, a, null);
          } catch (o) {
            pt(e, t, o);
          }
        else a.current = null;
    }
    function Uy(e, t, a, i) {
      var o = e.memoizedProps, f = o.id, d = o.onCommit;
      o = o.onRender, t = t === null ? "mount" : "update", lg && (t = "nested-update"), typeof o == "function" && o(
        f,
        t,
        e.actualDuration,
        e.treeBaseDuration,
        e.actualStartTime,
        a
      ), typeof d == "function" && d(f, t, i, a);
    }
    function eo(e, t, a, i) {
      var o = e.memoizedProps;
      e = o.id, o = o.onPostCommit, t = t === null ? "mount" : "update", lg && (t = "nested-update"), typeof o == "function" && o(
        e,
        t,
        i,
        a
      );
    }
    function Hy(e) {
      var t = e.type, a = e.memoizedProps, i = e.stateNode;
      try {
        fe(
          e,
          pv,
          i,
          t,
          a,
          e
        );
      } catch (o) {
        pt(e, e.return, o);
      }
    }
    function ih(e, t, a) {
      try {
        fe(
          e,
          np,
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
    function Ny(e) {
      return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && zi(e.type) || e.tag === 4;
    }
    function ff(e) {
      e: for (; ; ) {
        for (; e.sibling === null; ) {
          if (e.return === null || Ny(e.return)) return null;
          e = e.return;
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
          if (e.tag === 27 && zi(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
          e.child.return = e, e = e.child;
        }
        if (!(e.flags & 2)) return e.stateNode;
      }
    }
    function ch(e, t, a) {
      var i = e.tag;
      if (i === 5 || i === 6)
        e = e.stateNode, t ? (gv(a), (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(e, t)) : (gv(a), t = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, t.appendChild(e), a = a._reactRootContainer, a != null || t.onclick !== null || (t.onclick = wl));
      else if (i !== 4 && (i === 27 && zi(e.type) && (a = e.stateNode, t = null), e = e.child, e !== null))
        for (ch(e, t, a), e = e.sibling; e !== null; )
          ch(e, t, a), e = e.sibling;
    }
    function sf(e, t, a) {
      var i = e.tag;
      if (i === 5 || i === 6)
        e = e.stateNode, t ? a.insertBefore(e, t) : a.appendChild(e);
      else if (i !== 4 && (i === 27 && zi(e.type) && (a = e.stateNode), e = e.child, e !== null))
        for (sf(e, t, a), e = e.sibling; e !== null; )
          sf(e, t, a), e = e.sibling;
    }
    function nv(e) {
      for (var t, a = e.return; a !== null; ) {
        if (Ny(a)) {
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
          t = t.stateNode, a = ff(e), sf(
            e,
            a,
            t
          );
          break;
        case 5:
          a = t.stateNode, t.flags & 32 && (vv(a), t.flags &= -33), t = ff(e), sf(
            e,
            t,
            a
          );
          break;
        case 3:
        case 4:
          t = t.stateNode.containerInfo, a = ff(e), ch(
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
    function By(e) {
      var t = e.stateNode, a = e.memoizedProps;
      try {
        fe(
          e,
          br,
          e.type,
          a,
          t,
          e
        );
      } catch (i) {
        pt(e, e.return, i);
      }
    }
    function uv(e, t) {
      return t.tag === 31 ? (t = t.memoizedState, e.memoizedState !== null && t === null) : t.tag === 13 ? (e = e.memoizedState, t = t.memoizedState, e !== null && e.dehydrated !== null && (t === null || t.dehydrated === null)) : t.tag === 3 ? e.memoizedState.isDehydrated && (t.flags & 256) === 0 : !1;
    }
    function Yy(e, t) {
      if (e = e.containerInfo, s1 = qg, e = G0(e), Lm(e)) {
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
                for (var q; R !== a || o !== 0 && R.nodeType !== 3 || (h = d + o), R !== f || i !== 0 && R.nodeType !== 3 || (y = d + i), R.nodeType === 3 && (d += R.nodeValue.length), (q = R.firstChild) !== null; )
                  b = R, R = q;
                for (; ; ) {
                  if (R === e) break t;
                  if (b === a && ++p === o && (h = d), b === f && ++_ === i && (y = d), (q = R.nextSibling) !== null) break;
                  R = b, b = R.parentNode;
                }
                R = q;
              }
              a = h === -1 || y === -1 ? null : { start: h, end: y };
            } else a = null;
          }
        a = a || { start: 0, end: 0 };
      } else a = null;
      for (r1 = {
        focusedElem: e,
        selectionRange: a
      }, qg = !1, ra = t; ra !== null; )
        if (t = ra, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
          e.return = t, ra = e;
        else
          for (; ra !== null; ) {
            switch (e = t = ra, a = e.alternate, o = e.flags, e.tag) {
              case 0:
                if ((o & 4) !== 0 && (e = e.updateQueue, e = e !== null ? e.events : null, e !== null))
                  for (a = 0; a < e.length; a++)
                    o = e[a], o.ref.impl = o.nextImpl;
                break;
              case 11:
              case 15:
                break;
              case 1:
                (o & 1024) !== 0 && a !== null && Ry(e, a);
                break;
              case 3:
                if ((o & 1024) !== 0) {
                  if (e = e.stateNode.containerInfo, a = e.nodeType, a === 9)
                    Eh(e);
                  else if (a === 1)
                    switch (e.nodeName) {
                      case "HEAD":
                      case "HTML":
                      case "BODY":
                        Eh(e);
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
              e.return = t.return, ra = e;
              break;
            }
            ra = t.return;
          }
    }
    function hl(e, t, a) {
      var i = Ml(), o = Pa(), f = bn(), d = ta(), h = a.flags;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          An(e, a), h & 4 && _y(a, tu | ei);
          break;
        case 1:
          if (An(e, a), h & 4)
            if (e = a.stateNode, t === null)
              a.type.defaultProps || "ref" in a.memoizedProps || Sm || (e.props !== a.memoizedProps && console.error(
                "Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
                se(a) || "instance"
              ), e.state !== a.memoizedState && console.error(
                "Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
                se(a) || "instance"
              )), Uu(a) ? (En(), fe(
                a,
                HS,
                a,
                e
              ), Su()) : fe(
                a,
                HS,
                a,
                e
              );
            else {
              var y = Si(
                a.type,
                t.memoizedProps
              );
              t = t.memoizedState, a.type.defaultProps || "ref" in a.memoizedProps || Sm || (e.props !== a.memoizedProps && console.error(
                "Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
                se(a) || "instance"
              ), e.state !== a.memoizedState && console.error(
                "Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
                se(a) || "instance"
              )), Uu(a) ? (En(), fe(
                a,
                lb,
                a,
                e,
                y,
                t,
                e.__reactInternalSnapshotBeforeUpdate
              ), Su()) : fe(
                a,
                lb,
                a,
                e,
                y,
                t,
                e.__reactInternalSnapshotBeforeUpdate
              );
            }
          h & 64 && of(a), h & 512 && Pc(a, a.return);
          break;
        case 3:
          if (t = wn(), An(e, a), h & 64 && (h = a.updateQueue, h !== null)) {
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
                Hd,
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
          t === null && h & 4 && By(a);
        case 26:
        case 5:
          if (An(e, a), t === null) {
            if (h & 4) Hy(a);
            else if (h & 64) {
              e = a.type, t = a.memoizedProps, y = a.stateNode;
              try {
                fe(
                  a,
                  Sh,
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
          h & 512 && Pc(a, a.return);
          break;
        case 12:
          if (h & 4) {
            h = wn(), An(e, a), e = a.stateNode, e.effectDuration += Wi(h);
            try {
              fe(
                a,
                Uy,
                a,
                t,
                Yf,
                e.effectDuration
              );
            } catch (_) {
              pt(a, a.return, _);
            }
          } else An(e, a);
          break;
        case 31:
          An(e, a), h & 4 && jy(e, a);
          break;
        case 13:
          An(e, a), h & 4 && xy(e, a), h & 64 && (e = a.memoizedState, e !== null && (e = e.dehydrated, e !== null && (h = uo.bind(
            null,
            a
          ), eS(e, h))));
          break;
        case 22:
          if (h = a.memoizedState !== null || Ro, !h) {
            t = t !== null && t.memoizedState !== null || Yl, y = Ro;
            var p = Yl;
            Ro = h, (Yl = t) && !p ? (On(
              e,
              a,
              (a.subtreeFlags & 8772) !== 0
            ), (a.mode & Je) !== De && 0 <= Ae && 0 <= _e && 0.05 < _e - Ae && bd(
              a,
              Ae,
              _e
            )) : An(e, a), Ro = y, Yl = p;
          }
          break;
        case 30:
          break;
        default:
          An(e, a);
      }
      (a.mode & Je) !== De && 0 <= Ae && 0 <= _e && ((yl || 0.05 < rl) && du(
        a,
        Ae,
        _e,
        rl,
        tl
      ), a.alternate === null && a.return !== null && a.return.alternate !== null && 0.05 < _e - Ae && (uv(
        a.return.alternate,
        a.return
      ) || ru(
        a,
        Ae,
        _e,
        "Mount"
      ))), ya(i), en(o), tl = f, yl = d;
    }
    function Cl(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, Cl(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && M(t)), e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
    }
    function Hu(e, t, a) {
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
          oa.onCommitFiberUnmount(Mi, a);
        } catch (p) {
          Vu || (Vu = !0, console.error(
            "React instrumentation encountered an error: %o",
            p
          ));
        }
      var i = Ml(), o = Pa(), f = bn(), d = ta();
      switch (a.tag) {
        case 26:
          Yl || Jn(a, t), Hu(
            e,
            t,
            a
          ), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (e = a.stateNode, e.parentNode.removeChild(e));
          break;
        case 27:
          Yl || Jn(a, t);
          var h = ql, y = Yn;
          zi(a.type) && (ql = a.stateNode, Yn = !1), Hu(
            e,
            t,
            a
          ), fe(
            a,
            Er,
            a.stateNode
          ), ql = h, Yn = y;
          break;
        case 5:
          Yl || Jn(a, t);
        case 6:
          if (h = ql, y = Yn, ql = null, Hu(
            e,
            t,
            a
          ), ql = h, Yn = y, ql !== null)
            if (Yn)
              try {
                fe(
                  a,
                  vf,
                  ql,
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
                  Sv,
                  ql,
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
          ql !== null && (Yn ? (e = ql, gr(
            e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
            a.stateNode
          ), Af(e)) : gr(ql, a.stateNode));
          break;
        case 4:
          h = ql, y = Yn, ql = a.stateNode.containerInfo, Yn = !0, Hu(
            e,
            t,
            a
          ), ql = h, Yn = y;
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          bi(
            hn,
            a,
            t
          ), Yl || Fc(
            a,
            t,
            tu
          ), Hu(
            e,
            t,
            a
          );
          break;
        case 1:
          Yl || (Jn(a, t), h = a.stateNode, typeof h.componentWillUnmount == "function" && My(
            a,
            t,
            h
          )), Hu(
            e,
            t,
            a
          );
          break;
        case 21:
          Hu(
            e,
            t,
            a
          );
          break;
        case 22:
          Yl = (h = Yl) || a.memoizedState !== null, Hu(
            e,
            t,
            a
          ), Yl = h;
          break;
        default:
          Hu(
            e,
            t,
            a
          );
      }
      (a.mode & Je) !== De && 0 <= Ae && 0 <= _e && (yl || 0.05 < rl) && du(
        a,
        Ae,
        _e,
        rl,
        tl
      ), ya(i), en(o), tl = f, yl = d;
    }
    function jy(e, t) {
      if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
        e = e.dehydrated;
        try {
          fe(
            t,
            cp,
            e
          );
        } catch (a) {
          pt(t, t.return, a);
        }
      }
    }
    function xy(e, t) {
      if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
        try {
          fe(
            t,
            hc,
            e
          );
        } catch (a) {
          pt(t, t.return, a);
        }
    }
    function er(e) {
      switch (e.tag) {
        case 31:
        case 13:
        case 19:
          var t = e.stateNode;
          return t === null && (t = e.stateNode = new Xb()), t;
        case 22:
          return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new Xb()), t;
        default:
          throw Error(
            "Unexpected Suspense handler tag (" + e.tag + "). This is a bug in React."
          );
      }
    }
    function tr(e, t) {
      var a = er(e);
      t.forEach(function(i) {
        if (!a.has(i)) {
          if (a.add(i), Nn)
            if (bm !== null && Em !== null)
              xu(Em, bm);
            else
              throw Error(
                "Expected finished root and lanes to be set. This is a bug in React."
              );
          var o = Ti.bind(null, e, i);
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
                if (zi(y.type)) {
                  ql = y.stateNode, Yn = !1;
                  break e;
                }
                break;
              case 5:
                ql = y.stateNode, Yn = !1;
                break e;
              case 3:
              case 4:
                ql = y.stateNode.containerInfo, Yn = !0;
                break e;
            }
            y = y.return;
          }
          if (ql === null)
            throw Error(
              "Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue."
            );
          qy(o, f, d), ql = null, Yn = !1, (d.mode & Je) !== De && 0 <= Ae && 0 <= _e && 0.05 < _e - Ae && ru(
            d,
            Ae,
            _e,
            "Unmount"
          ), ya(h), o = d, f = o.alternate, f !== null && (f.return = null), o.return = null;
        }
      if (t.subtreeFlags & 13886)
        for (t = t.child; t !== null; )
          Gy(t, e), t = t.sibling;
    }
    function Gy(e, t) {
      var a = Ml(), i = Pa(), o = bn(), f = ta(), d = e.alternate, h = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Zl(t, e), Ga(e), h & 4 && (bi(
            hn | ei,
            e,
            e.return
          ), Ic(hn | ei, e), Fc(
            e,
            e.return,
            tu | ei
          ));
          break;
        case 1:
          if (Zl(t, e), Ga(e), h & 512 && (Yl || d === null || Jn(d, d.return)), h & 64 && Ro && (h = e.updateQueue, h !== null && (d = h.callbacks, d !== null))) {
            var y = h.shared.hiddenCallbacks;
            h.shared.hiddenCallbacks = y === null ? d : y.concat(d);
          }
          break;
        case 26:
          if (y = Ni, Zl(t, e), Ga(e), h & 512 && (Yl || d === null || Jn(d, d.return)), h & 4) {
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
                        )[0], (!p || p[Yr] || p[Fl] || p.namespaceURI === at || p.hasAttribute("itemprop")) && (p = y.createElement(h), y.head.insertBefore(
                          p,
                          y.querySelector(
                            "head > title"
                          )
                        )), ot(p, h, d), p[Fl] = e, ye(p), h = p;
                        break e;
                      case "link":
                        var _ = Rv(
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
                        p = y.createElement(h), ot(p, h, d), y.head.appendChild(
                          p
                        );
                        break;
                      case "meta":
                        if (_ = Rv(
                          "meta",
                          "content",
                          y
                        ).get(h + (d.content || ""))) {
                          for (R = 0; R < _.length; R++)
                            if (p = _[R], At(
                              d.content,
                              "content"
                            ), p.getAttribute("content") === (d.content == null ? null : "" + d.content) && p.getAttribute("name") === (d.name == null ? null : d.name) && p.getAttribute("property") === (d.property == null ? null : d.property) && p.getAttribute("http-equiv") === (d.httpEquiv == null ? null : d.httpEquiv) && p.getAttribute("charset") === (d.charSet == null ? null : d.charSet)) {
                              _.splice(R, 1);
                              break t;
                            }
                        }
                        p = y.createElement(h), ot(p, h, d), y.head.appendChild(
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
                  dp(
                    y,
                    e.type,
                    e.stateNode
                  );
              else
                e.stateNode = _h(
                  y,
                  h,
                  e.memoizedProps
                );
            else
              p !== h ? (p === null ? d.stateNode !== null && (d = d.stateNode, d.parentNode.removeChild(d)) : p.count--, h === null ? dp(
                y,
                e.type,
                e.stateNode
              ) : _h(
                y,
                h,
                e.memoizedProps
              )) : h === null && e.stateNode !== null && ih(
                e,
                e.memoizedProps,
                d.memoizedProps
              );
          }
          break;
        case 27:
          Zl(t, e), Ga(e), h & 512 && (Yl || d === null || Jn(d, d.return)), d !== null && h & 4 && ih(
            e,
            e.memoizedProps,
            d.memoizedProps
          );
          break;
        case 5:
          if (Zl(t, e), Ga(e), h & 512 && (Yl || d === null || Jn(d, d.return)), e.flags & 32) {
            y = e.stateNode;
            try {
              fe(
                e,
                vv,
                y
              );
            } catch (oe) {
              pt(e, e.return, oe);
            }
          }
          h & 4 && e.stateNode != null && (y = e.memoizedProps, ih(
            e,
            y,
            d !== null ? d.memoizedProps : y
          )), h & 1024 && (ZS = !0, e.type !== "form" && console.error(
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
                Pg,
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
          if (y = wn(), Ng = null, p = Ni, Ni = Tr(t.containerInfo), Zl(t, e), Ni = p, Ga(e), h & 4 && d !== null && d.memoizedState.isDehydrated)
            try {
              fe(
                e,
                zh,
                t.containerInfo
              );
            } catch (oe) {
              pt(e, e.return, oe);
            }
          ZS && (ZS = !1, lr(e)), t.effectDuration += Ua(
            y
          );
          break;
        case 4:
          h = Ni, Ni = Tr(
            e.stateNode.containerInfo
          ), Zl(t, e), Ga(e), Ni = h;
          break;
        case 12:
          h = wn(), Zl(t, e), Ga(e), e.stateNode.effectDuration += Wi(h);
          break;
        case 31:
          Zl(t, e), Ga(e), h & 4 && (h = e.updateQueue, h !== null && (e.updateQueue = null, tr(e, h)));
          break;
        case 13:
          Zl(t, e), Ga(e), e.child.flags & 8192 && e.memoizedState !== null != (d !== null && d.memoizedState !== null) && (gg = sl()), h & 4 && (h = e.updateQueue, h !== null && (e.updateQueue = null, tr(e, h)));
          break;
        case 22:
          y = e.memoizedState !== null;
          var b = d !== null && d.memoizedState !== null, q = Ro, ne = Yl;
          if (Ro = q || y, Yl = ne || b, Zl(t, e), Yl = ne, Ro = q, b && !y && !q && !ne && (e.mode & Je) !== De && 0 <= Ae && 0 <= _e && 0.05 < _e - Ae && bd(
            e,
            Ae,
            _e
          ), Ga(e), h & 8192)
            e: for (t = e.stateNode, t._visibility = y ? t._visibility & ~wp : t._visibility | wp, !y || d === null || b || Ro || Yl || (ic(e), (e.mode & Je) !== De && 0 <= Ae && 0 <= _e && 0.05 < _e - Ae && ru(
              e,
              Ae,
              _e,
              "Disconnect"
            )), d = null, t = e; ; ) {
              if (t.tag === 5 || t.tag === 26) {
                if (d === null) {
                  b = d = t;
                  try {
                    p = b.stateNode, y ? fe(
                      b,
                      Ev,
                      p
                    ) : fe(
                      b,
                      Ov,
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
                      Tv,
                      _
                    ) : fe(
                      b,
                      bh,
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
                      bv,
                      R
                    ) : fe(
                      b,
                      Av,
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
          h & 4 && (h = e.updateQueue, h !== null && (d = h.retryQueue, d !== null && (h.retryQueue = null, tr(e, d))));
          break;
        case 19:
          Zl(t, e), Ga(e), h & 4 && (h = e.updateQueue, h !== null && (e.updateQueue = null, tr(e, h)));
          break;
        case 30:
          break;
        case 21:
          break;
        default:
          Zl(t, e), Ga(e);
      }
      (e.mode & Je) !== De && 0 <= Ae && 0 <= _e && ((yl || 0.05 < rl) && du(
        e,
        Ae,
        _e,
        rl,
        tl
      ), e.alternate === null && e.return !== null && e.return.alternate !== null && 0.05 < _e - Ae && (uv(
        e.return.alternate,
        e.return
      ) || ru(
        e,
        Ae,
        _e,
        "Mount"
      ))), ya(a), en(i), tl = o, yl = f;
    }
    function Ga(e) {
      var t = e.flags;
      if (t & 2) {
        try {
          fe(e, nv, e);
        } catch (a) {
          pt(e, e.return, a);
        }
        e.flags &= -3;
      }
      t & 4096 && (e.flags &= -4097);
    }
    function lr(e) {
      if (e.subtreeFlags & 1024)
        for (e = e.child; e !== null; ) {
          var t = e;
          lr(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
        }
    }
    function An(e, t) {
      if (t.subtreeFlags & 8772)
        for (t = t.child; t !== null; )
          hl(e, t.alternate, t), t = t.sibling;
    }
    function wy(e) {
      var t = Ml(), a = Pa(), i = bn(), o = ta();
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Fc(
            e,
            e.return,
            tu
          ), ic(e);
          break;
        case 1:
          Jn(e, e.return);
          var f = e.stateNode;
          typeof f.componentWillUnmount == "function" && My(
            e,
            e.return,
            f
          ), ic(e);
          break;
        case 27:
          fe(
            e,
            Er,
            e.stateNode
          );
        case 26:
        case 5:
          Jn(e, e.return), ic(e);
          break;
        case 22:
          e.memoizedState === null && ic(e);
          break;
        case 30:
          ic(e);
          break;
        default:
          ic(e);
      }
      (e.mode & Je) !== De && 0 <= Ae && 0 <= _e && (yl || 0.05 < rl) && du(
        e,
        Ae,
        _e,
        rl,
        tl
      ), ya(t), en(a), tl = i, yl = o;
    }
    function ic(e) {
      for (e = e.child; e !== null; )
        wy(e), e = e.sibling;
    }
    function Xy(e, t, a, i) {
      var o = Ml(), f = Pa(), d = bn(), h = ta(), y = a.flags;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          On(
            e,
            a,
            i
          ), _y(a, tu);
          break;
        case 1:
          if (On(
            e,
            a,
            i
          ), t = a.stateNode, typeof t.componentDidMount == "function" && fe(
            a,
            HS,
            a,
            t
          ), t = a.updateQueue, t !== null) {
            e = a.stateNode;
            try {
              fe(
                a,
                Cs,
                t,
                e
              );
            } catch (p) {
              pt(a, a.return, p);
            }
          }
          i && y & 64 && of(a), Pc(a, a.return);
          break;
        case 27:
          By(a);
        case 26:
        case 5:
          On(
            e,
            a,
            i
          ), i && t === null && y & 4 && Hy(a), Pc(a, a.return);
          break;
        case 12:
          if (i && y & 4) {
            y = wn(), On(
              e,
              a,
              i
            ), i = a.stateNode, i.effectDuration += Wi(y);
            try {
              fe(
                a,
                Uy,
                a,
                t,
                Yf,
                i.effectDuration
              );
            } catch (p) {
              pt(a, a.return, p);
            }
          } else
            On(
              e,
              a,
              i
            );
          break;
        case 31:
          On(
            e,
            a,
            i
          ), i && y & 4 && jy(e, a);
          break;
        case 13:
          On(
            e,
            a,
            i
          ), i && y & 4 && xy(e, a);
          break;
        case 22:
          a.memoizedState === null && On(
            e,
            a,
            i
          ), Pc(a, a.return);
          break;
        case 30:
          break;
        default:
          On(
            e,
            a,
            i
          );
      }
      (a.mode & Je) !== De && 0 <= Ae && 0 <= _e && (yl || 0.05 < rl) && du(
        a,
        Ae,
        _e,
        rl,
        tl
      ), ya(o), en(f), tl = d, yl = h;
    }
    function On(e, t, a) {
      for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; )
        Xy(
          e,
          t.alternate,
          t,
          a
        ), t = t.sibling;
    }
    function ar(e, t) {
      var a = null;
      e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== a && (e != null && xc(e), a != null && As(a));
    }
    function nr(e, t) {
      e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (xc(t), e != null && As(e));
    }
    function zn(e, t, a, i, o) {
      if (t.subtreeFlags & 10256 || t.actualDuration !== 0 && (t.alternate === null || t.alternate.child !== t.child))
        for (t = t.child; t !== null; ) {
          var f = t.sibling;
          oh(
            e,
            t,
            a,
            i,
            f !== null ? f.actualStartTime : o
          ), t = f;
        }
    }
    function oh(e, t, a, i, o) {
      var f = Ml(), d = Pa(), h = bn(), y = ta(), p = Uf, _ = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          (t.mode & Je) !== De && 0 < t.actualStartTime && (t.flags & 1) !== 0 && Ed(
            t,
            t.actualStartTime,
            o,
            Il,
            a
          ), zn(
            e,
            t,
            a,
            i,
            o
          ), _ & 2048 && Dy(t, mn | ei);
          break;
        case 1:
          (t.mode & Je) !== De && 0 < t.actualStartTime && ((t.flags & 128) !== 0 ? Td(
            t,
            t.actualStartTime,
            o,
            []
          ) : (t.flags & 1) !== 0 && Ed(
            t,
            t.actualStartTime,
            o,
            Il,
            a
          )), zn(
            e,
            t,
            a,
            i,
            o
          );
          break;
        case 3:
          var R = wn(), b = Il;
          Il = t.alternate !== null && t.alternate.memoizedState.isDehydrated && (t.flags & 256) === 0, zn(
            e,
            t,
            a,
            i,
            o
          ), Il = b, _ & 2048 && (a = null, t.alternate !== null && (a = t.alternate.memoizedState.cache), i = t.memoizedState.cache, i !== a && (xc(i), a != null && As(a))), e.passiveEffectDuration += Ua(
            R
          );
          break;
        case 12:
          if (_ & 2048) {
            _ = wn(), zn(
              e,
              t,
              a,
              i,
              o
            ), e = t.stateNode, e.passiveEffectDuration += Wi(_);
            try {
              fe(
                t,
                eo,
                t,
                t.alternate,
                Yf,
                e.passiveEffectDuration
              );
            } catch (q) {
              pt(t, t.return, q);
            }
          } else
            zn(
              e,
              t,
              a,
              i,
              o
            );
          break;
        case 31:
          _ = Il, R = t.alternate !== null ? t.alternate.memoizedState : null, b = t.memoizedState, R !== null && b === null ? (b = t.deletions, b !== null && 0 < b.length && b[0].tag === 18 ? (Il = !1, R = R.hydrationErrors, R !== null && Td(
            t,
            t.actualStartTime,
            o,
            R
          )) : Il = !0) : Il = !1, zn(
            e,
            t,
            a,
            i,
            o
          ), Il = _;
          break;
        case 13:
          _ = Il, R = t.alternate !== null ? t.alternate.memoizedState : null, b = t.memoizedState, R === null || R.dehydrated === null || b !== null && b.dehydrated !== null ? Il = !1 : (b = t.deletions, b !== null && 0 < b.length && b[0].tag === 18 ? (Il = !1, R = R.hydrationErrors, R !== null && Td(
            t,
            t.actualStartTime,
            o,
            R
          )) : Il = !0), zn(
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
          b = t.stateNode, R = t.alternate, t.memoizedState !== null ? b._visibility & go ? zn(
            e,
            t,
            a,
            i,
            o
          ) : rf(
            e,
            t,
            a,
            i,
            o
          ) : b._visibility & go ? zn(
            e,
            t,
            a,
            i,
            o
          ) : (b._visibility |= go, Ei(
            e,
            t,
            a,
            i,
            (t.subtreeFlags & 10256) !== 0 || t.actualDuration !== 0 && (t.alternate === null || t.alternate.child !== t.child),
            o
          ), (t.mode & Je) === De || Il || (e = t.actualStartTime, 0 <= e && 0.05 < o - e && bd(t, e, o), 0 <= Ae && 0 <= _e && 0.05 < _e - Ae && bd(
            t,
            Ae,
            _e
          ))), _ & 2048 && ar(
            R,
            t
          );
          break;
        case 24:
          zn(
            e,
            t,
            a,
            i,
            o
          ), _ & 2048 && nr(t.alternate, t);
          break;
        default:
          zn(
            e,
            t,
            a,
            i,
            o
          );
      }
      (t.mode & Je) !== De && ((e = !Il && t.alternate === null && t.return !== null && t.return.alternate !== null) && (a = t.actualStartTime, 0 <= a && 0.05 < o - a && ru(
        t,
        a,
        o,
        "Mount"
      )), 0 <= Ae && 0 <= _e && ((yl || 0.05 < rl) && du(
        t,
        Ae,
        _e,
        rl,
        tl
      ), e && 0.05 < _e - Ae && ru(
        t,
        Ae,
        _e,
        "Mount"
      ))), ya(f), en(d), tl = h, yl = y, Uf = p;
    }
    function Ei(e, t, a, i, o, f) {
      for (o = o && ((t.subtreeFlags & 10256) !== 0 || t.actualDuration !== 0 && (t.alternate === null || t.alternate.child !== t.child)), t = t.child; t !== null; ) {
        var d = t.sibling;
        fh(
          e,
          t,
          a,
          i,
          o,
          d !== null ? d.actualStartTime : f
        ), t = d;
      }
    }
    function fh(e, t, a, i, o, f) {
      var d = Ml(), h = Pa(), y = bn(), p = ta(), _ = Uf;
      o && (t.mode & Je) !== De && 0 < t.actualStartTime && (t.flags & 1) !== 0 && Ed(
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
          Ei(
            e,
            t,
            a,
            i,
            o,
            f
          ), Dy(t, mn);
          break;
        case 23:
          break;
        case 22:
          var b = t.stateNode;
          t.memoizedState !== null ? b._visibility & go ? Ei(
            e,
            t,
            a,
            i,
            o,
            f
          ) : rf(
            e,
            t,
            a,
            i,
            f
          ) : (b._visibility |= go, Ei(
            e,
            t,
            a,
            i,
            o,
            f
          )), o && R & 2048 && ar(
            t.alternate,
            t
          );
          break;
        case 24:
          Ei(
            e,
            t,
            a,
            i,
            o,
            f
          ), o && R & 2048 && nr(t.alternate, t);
          break;
        default:
          Ei(
            e,
            t,
            a,
            i,
            o,
            f
          );
      }
      (t.mode & Je) !== De && 0 <= Ae && 0 <= _e && (yl || 0.05 < rl) && du(
        t,
        Ae,
        _e,
        rl,
        tl
      ), ya(d), en(h), tl = y, yl = p, Uf = _;
    }
    function rf(e, t, a, i, o) {
      if (t.subtreeFlags & 10256 || t.actualDuration !== 0 && (t.alternate === null || t.alternate.child !== t.child))
        for (var f = t.child; f !== null; ) {
          t = f.sibling;
          var d = e, h = a, y = i, p = t !== null ? t.actualStartTime : o, _ = Uf;
          (f.mode & Je) !== De && 0 < f.actualStartTime && (f.flags & 1) !== 0 && Ed(
            f,
            f.actualStartTime,
            p,
            Il,
            h
          );
          var R = f.flags;
          switch (f.tag) {
            case 22:
              rf(
                d,
                f,
                h,
                y,
                p
              ), R & 2048 && ar(f.alternate, f);
              break;
            case 24:
              rf(
                d,
                f,
                h,
                y,
                p
              ), R & 2048 && nr(f.alternate, f);
              break;
            default:
              rf(
                d,
                f,
                h,
                y,
                p
              );
          }
          Uf = _, f = t;
        }
    }
    function cc(e, t, a) {
      if (e.subtreeFlags & i0)
        for (e = e.child; e !== null; )
          Qy(
            e,
            t,
            a
          ), e = e.sibling;
    }
    function Qy(e, t, a) {
      switch (e.tag) {
        case 26:
          cc(
            e,
            t,
            a
          ), e.flags & i0 && e.memoizedState !== null && Mh(
            a,
            Ni,
            e.memoizedState,
            e.memoizedProps
          );
          break;
        case 5:
          cc(
            e,
            t,
            a
          );
          break;
        case 3:
        case 4:
          var i = Ni;
          Ni = Tr(
            e.stateNode.containerInfo
          ), cc(
            e,
            t,
            a
          ), Ni = i;
          break;
        case 22:
          e.memoizedState === null && (i = e.alternate, i !== null && i.memoizedState !== null ? (i = i0, i0 = 16777216, cc(
            e,
            t,
            a
          ), i0 = i) : cc(
            e,
            t,
            a
          ));
          break;
        default:
          cc(
            e,
            t,
            a
          );
      }
    }
    function Nu(e) {
      var t = e.alternate;
      if (t !== null && (e = t.child, e !== null)) {
        t.child = null;
        do
          t = e.sibling, e.sibling = null, e = t;
        while (e !== null);
      }
    }
    function to(e) {
      var t = e.deletions;
      if ((e.flags & 16) !== 0) {
        if (t !== null)
          for (var a = 0; a < t.length; a++) {
            var i = t[a], o = Ml();
            ra = i, sh(
              i,
              e
            ), (i.mode & Je) !== De && 0 <= Ae && 0 <= _e && 0.05 < _e - Ae && ru(
              i,
              Ae,
              _e,
              "Unmount"
            ), ya(o);
          }
        Nu(e);
      }
      if (e.subtreeFlags & 10256)
        for (e = e.child; e !== null; )
          iv(e), e = e.sibling;
    }
    function iv(e) {
      var t = Ml(), a = Pa(), i = bn(), o = ta();
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          to(e), e.flags & 2048 && uh(
            e,
            e.return,
            mn | ei
          );
          break;
        case 3:
          var f = wn();
          to(e), e.stateNode.passiveEffectDuration += Ua(f);
          break;
        case 12:
          f = wn(), to(e), e.stateNode.passiveEffectDuration += Wi(f);
          break;
        case 22:
          f = e.stateNode, e.memoizedState !== null && f._visibility & go && (e.return === null || e.return.tag !== 13) ? (f._visibility &= ~go, ur(e), (e.mode & Je) !== De && 0 <= Ae && 0 <= _e && 0.05 < _e - Ae && ru(
            e,
            Ae,
            _e,
            "Disconnect"
          )) : to(e);
          break;
        default:
          to(e);
      }
      (e.mode & Je) !== De && 0 <= Ae && 0 <= _e && (yl || 0.05 < rl) && du(
        e,
        Ae,
        _e,
        rl,
        tl
      ), ya(t), en(a), yl = o, tl = i;
    }
    function ur(e) {
      var t = e.deletions;
      if ((e.flags & 16) !== 0) {
        if (t !== null)
          for (var a = 0; a < t.length; a++) {
            var i = t[a], o = Ml();
            ra = i, sh(
              i,
              e
            ), (i.mode & Je) !== De && 0 <= Ae && 0 <= _e && 0.05 < _e - Ae && ru(
              i,
              Ae,
              _e,
              "Unmount"
            ), ya(o);
          }
        Nu(e);
      }
      for (e = e.child; e !== null; )
        Bu(e), e = e.sibling;
    }
    function Bu(e) {
      var t = Ml(), a = Pa(), i = bn(), o = ta();
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          uh(
            e,
            e.return,
            mn
          ), ur(e);
          break;
        case 22:
          var f = e.stateNode;
          f._visibility & go && (f._visibility &= ~go, ur(e));
          break;
        default:
          ur(e);
      }
      (e.mode & Je) !== De && 0 <= Ae && 0 <= _e && (yl || 0.05 < rl) && du(
        e,
        Ae,
        _e,
        rl,
        tl
      ), ya(t), en(a), yl = o, tl = i;
    }
    function sh(e, t) {
      for (; ra !== null; ) {
        var a = ra, i = a, o = t, f = Ml(), d = Pa(), h = bn(), y = ta();
        switch (i.tag) {
          case 0:
          case 11:
          case 15:
            uh(
              i,
              o,
              mn
            );
            break;
          case 23:
          case 22:
            i.memoizedState !== null && i.memoizedState.cachePool !== null && (o = i.memoizedState.cachePool.pool, o != null && xc(o));
            break;
          case 24:
            As(i.memoizedState.cache);
        }
        if ((i.mode & Je) !== De && 0 <= Ae && 0 <= _e && (yl || 0.05 < rl) && du(
          i,
          Ae,
          _e,
          rl,
          tl
        ), ya(f), en(d), yl = y, tl = h, i = a.child, i !== null) i.return = a, ra = i;
        else
          e: for (a = e; ra !== null; ) {
            if (i = ra, f = i.sibling, d = i.return, Cl(i), i === a) {
              ra = null;
              break e;
            }
            if (f !== null) {
              f.return = d, ra = f;
              break e;
            }
            ra = d;
          }
      }
    }
    function cv() {
      kT.forEach(function(e) {
        return e();
      });
    }
    function ir() {
      var e = typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0;
      return e || w.actQueue === null || console.error(
        "The current testing environment is not configured to support act(...)"
      ), e;
    }
    function Jl(e) {
      if ((yt & Pl) !== da && $e !== 0)
        return $e & -$e;
      var t = w.T;
      return t !== null ? (t._updatedFibers || (t._updatedFibers = /* @__PURE__ */ new Set()), t._updatedFibers.add(e), ht()) : wi();
    }
    function Gt() {
      if (jn === 0)
        if (($e & 536870912) === 0 || it) {
          var e = Rf;
          Rf <<= 1, (Rf & 3932160) === 0 && (Rf = 262144), jn = e;
        } else jn = 536870912;
      return e = eu.current, e !== null && (e.flags |= 32), jn;
    }
    function el(e, t, a) {
      if (Om && console.error("useInsertionEffect must not schedule updates."), l1 && (Tg = !0), (e === Xt && (Nt === Ir || Nt === Pr) || e.cancelPendingCommit !== null) && (Sa(e, 0), ga(
        e,
        $e,
        jn,
        !1
      )), Gi(e, a), (yt & Pl) !== da && e === Xt) {
        if (Hn)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              e = Fe && se(Fe) || "Unknown", lE.has(e) || (lE.add(e), t = se(t) || "Unknown", console.error(
                "Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://react.dev/link/setstate-in-render",
                t,
                e,
                e
              ));
              break;
            case 1:
              tE || (console.error(
                "Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."
              ), tE = !0);
          }
      } else
        Nn && za(e, t, a), rr(t), e === Xt && ((yt & Pl) === da && (Lf |= a), dl === wf && ga(
          e,
          $e,
          jn,
          !1
        )), Ea(e);
    }
    function ov(e, t, a) {
      if ((yt & (Pl | lu)) !== da)
        throw Error("Should not already be working.");
      if ($e !== 0 && Fe !== null) {
        var i = Fe, o = sl();
        switch ($1) {
          case f0:
          case Ir:
            var f = Jp;
            $t && ((i = i._debugTask) ? i.run(
              console.timeStamp.bind(
                console,
                "Suspended",
                f,
                o,
                Ju,
                void 0,
                "primary-light"
              )
            ) : console.timeStamp(
              "Suspended",
              f,
              o,
              Ju,
              void 0,
              "primary-light"
            ));
            break;
          case Pr:
            f = Jp, $t && ((i = i._debugTask) ? i.run(
              console.timeStamp.bind(
                console,
                "Action",
                f,
                o,
                Ju,
                void 0,
                "primary-light"
              )
            ) : console.timeStamp(
              "Action",
              f,
              o,
              Ju,
              void 0,
              "primary-light"
            ));
            break;
          default:
            $t && (i = o - Jp, 3 > i || console.timeStamp(
              "Blocked",
              Jp,
              o,
              Ju,
              void 0,
              5 > i ? "primary-light" : 10 > i ? "primary" : 100 > i ? "primary-dark" : "error"
            ));
        }
      }
      f = (a = !a && (t & 127) === 0 && (t & e.expiredLanes) === 0 || ji(e, t)) ? Sl(e, t) : mh(e, t, !0);
      var d = a;
      do {
        if (f === Mo) {
          Tm && !a && ga(e, t, 0, !1), t = Nt, Jp = Hl(), $1 = t;
          break;
        } else {
          if (i = sl(), o = e.current.alternate, d && !cr(o)) {
            Fa(t), o = sa, f = i, !$t || f <= o || (bl ? bl.run(
              console.timeStamp.bind(
                console,
                "Teared Render",
                o,
                f,
                rt,
                ft,
                "error"
              )
            ) : console.timeStamp(
              "Teared Render",
              o,
              f,
              rt,
              ft,
              "error"
            )), Kn(t, i), f = mh(e, t, !1), d = !1;
            continue;
          }
          if (f === Fr) {
            if (d = t, e.errorRecoveryDisabledLanes & d)
              var h = 0;
            else
              h = e.pendingLanes & -536870913, h = h !== 0 ? h : h & 536870912 ? 536870912 : 0;
            if (h !== 0) {
              Fa(t), Zm(
                sa,
                i,
                t,
                bl
              ), Kn(t, i), t = h;
              e: {
                i = e, f = d, d = r0;
                var y = i.current.memoizedState.isDehydrated;
                if (y && (Sa(i, h).flags |= 256), h = mh(
                  i,
                  h,
                  !1
                ), h !== Fr) {
                  if ($S && !y) {
                    i.errorRecoveryDisabledLanes |= f, Lf |= f, f = wf;
                    break e;
                  }
                  i = yn, yn = d, i !== null && (yn === null ? yn = i : yn.push.apply(
                    yn,
                    i
                  ));
                }
                f = h;
              }
              if (d = !1, f !== Fr) continue;
              i = sl();
            }
          }
          if (f === o0) {
            Fa(t), Zm(
              sa,
              i,
              t,
              bl
            ), Kn(t, i), Sa(e, 0), ga(e, t, 0, !0);
            break;
          }
          e: {
            switch (a = e, f) {
              case Mo:
              case o0:
                throw Error("Root did not complete. This is a bug in React.");
              case wf:
                if ((t & 4194048) !== t) break;
              case mg:
                Fa(t), Q0(
                  sa,
                  i,
                  t,
                  bl
                ), Kn(t, i), o = t, (o & 127) !== 0 ? Pv = i : (o & 4194048) !== 0 && (eg = i), ga(
                  a,
                  t,
                  jn,
                  !Xf
                );
                break e;
              case Fr:
                yn = null;
                break;
              case hg:
              case Qb:
                break;
              default:
                throw Error("Unknown root exit status.");
            }
            if (w.actQueue !== null)
              ia(
                a,
                o,
                t,
                yn,
                d0,
                vg,
                jn,
                Lf,
                ed,
                f,
                null,
                null,
                sa,
                i
              );
            else {
              if ((t & 62914560) === t && (d = gg + Zb - sl(), 10 < d)) {
                if (ga(
                  a,
                  t,
                  jn,
                  !Xf
                ), El(a, 0, !0) !== 0) break e;
                Bi = t, a.timeoutHandle = sE(
                  Ly.bind(
                    null,
                    a,
                    o,
                    yn,
                    d0,
                    vg,
                    t,
                    jn,
                    Lf,
                    ed,
                    Xf,
                    f,
                    "Throttled",
                    sa,
                    i
                  ),
                  d
                );
                break e;
              }
              Ly(
                a,
                o,
                yn,
                d0,
                vg,
                t,
                jn,
                Lf,
                ed,
                Xf,
                f,
                null,
                sa,
                i
              );
            }
          }
        }
        break;
      } while (!0);
      Ea(e);
    }
    function Ly(e, t, a, i, o, f, d, h, y, p, _, R, b, q) {
      e.timeoutHandle = ud;
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
      }, Qy(t, f, oe), ne = (f & 62914560) === f ? gg - sl() : (f & 4194048) === f ? Vb - sl() : 0, ne = hp(oe, ne), ne !== null)) {
        Bi = f, e.cancelPendingCommit = ne(
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
            q
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
        q
      );
    }
    function cr(e) {
      for (var t = e; ; ) {
        var a = t.tag;
        if ((a === 0 || a === 11 || a === 15) && t.flags & 16384 && (a = t.updateQueue, a !== null && (a = a.stores, a !== null)))
          for (var i = 0; i < a.length; i++) {
            var o = a[i], f = o.getSnapshot;
            o = o.value;
            try {
              if (!rn(f(), o)) return !1;
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
      t &= ~kS, t &= ~Lf, e.suspendedLanes |= t, e.pingedLanes &= ~t, i && (e.warmLanes |= t), i = e.expirationTimes;
      for (var o = t; 0 < o; ) {
        var f = 31 - kl(o), d = 1 << f;
        i[f] = -1, o &= ~d;
      }
      a !== 0 && ls(e, a, t);
    }
    function lo() {
      return (yt & (Pl | lu)) === da ? (hf(0), !1) : !0;
    }
    function rh() {
      if (Fe !== null) {
        if (Nt === qn)
          var e = Fe.return;
        else
          e = Fe, Ki(), Pi(e), hm = null, t0 = 0, e = Fe;
        for (; e !== null; )
          lv(e.alternate, e), e = e.return;
        Fe = null;
      }
    }
    function Kn(e, t) {
      (e & 127) !== 0 && (Qr = t), (e & 4194048) !== 0 && (Ao = t), (e & 62914560) !== 0 && (J1 = t), (e & 2080374784) !== 0 && (K1 = t);
    }
    function Sa(e, t) {
      $t && (console.timeStamp(
        "Blocking Track",
        3e-3,
        3e-3,
        "Blocking",
        ft,
        "primary-light"
      ), console.timeStamp(
        "Transition Track",
        3e-3,
        3e-3,
        "Transition",
        ft,
        "primary-light"
      ), console.timeStamp(
        "Suspense Track",
        3e-3,
        3e-3,
        "Suspense",
        ft,
        "primary-light"
      ), console.timeStamp(
        "Idle Track",
        3e-3,
        3e-3,
        "Idle",
        ft,
        "primary-light"
      ));
      var a = sa;
      if (sa = Hl(), $e !== 0 && 0 < a) {
        if (Fa($e), dl === hg || dl === wf)
          Q0(
            a,
            sa,
            t,
            bl
          );
        else {
          var i = sa, o = bl;
          if ($t && !(i <= a)) {
            var f = (t & 738197653) === t ? "tertiary-dark" : "primary-dark", d = (t & 536870912) === t ? "Prewarm" : (t & 201326741) === t ? "Interrupted Hydration" : "Interrupted Render";
            o ? o.run(
              console.timeStamp.bind(
                console,
                d,
                a,
                i,
                rt,
                ft,
                f
              )
            ) : console.timeStamp(
              d,
              a,
              i,
              rt,
              ft,
              f
            );
          }
        }
        Kn($e, sa);
      }
      if (a = bl, bl = null, (t & 127) !== 0) {
        bl = Lp, o = 0 <= gc && gc < Qr ? Qr : gc, i = 0 <= Lr && Lr < Qr ? Qr : Lr, f = 0 <= i ? i : 0 <= o ? o : sa, 0 <= Pv ? (Fa(2), L0(
          Pv,
          f,
          t,
          a
        )) : tg & 127, a = o;
        var h = i, y = Vp, p = 0 < sm, _ = qf === Qp, R = qf === Iv;
        if (o = sa, i = Lp, f = DS, d = RS, $t) {
          if (rt = "Blocking", 0 < a ? a > o && (a = o) : a = o, 0 < h ? h > a && (h = a) : h = a, y !== null && a > h) {
            var b = p ? "secondary-light" : "warning";
            i ? i.run(
              console.timeStamp.bind(
                console,
                p ? "Consecutive" : "Event: " + y,
                h,
                a,
                rt,
                ft,
                b
              )
            ) : console.timeStamp(
              p ? "Consecutive" : "Event: " + y,
              h,
              a,
              rt,
              ft,
              b
            );
          }
          o > a && (h = _ ? "error" : (t & 738197653) === t ? "tertiary-light" : "primary-light", _ = R ? "Promise Resolved" : _ ? "Cascading Update" : 5 < o - a ? "Update Blocked" : "Update", R = [], d != null && R.push(["Component name", d]), f != null && R.push(["Method name", f]), a = {
            start: a,
            end: o,
            detail: {
              devtools: {
                properties: R,
                track: rt,
                trackGroup: ft,
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
        gc = -1.1, qf = 0, RS = DS = null, Pv = -1.1, sm = Lr, Lr = -1.1, Qr = Hl();
      }
      if ((t & 4194048) !== 0 && (bl = Zp, o = 0 <= Oo && Oo < Ao ? Ao : Oo, a = 0 <= Iu && Iu < Ao ? Ao : Iu, i = 0 <= jf && jf < Ao ? Ao : jf, f = 0 <= i ? i : 0 <= a ? a : sa, 0 <= eg ? (Fa(256), L0(
        eg,
        f,
        t,
        bl
      )) : tg & 4194048, R = i, h = Vr, y = 0 < xf, p = MS === Iv, f = sa, i = Zp, d = V1, _ = Z1, $t && (rt = "Transition", 0 < a ? a > f && (a = f) : a = f, 0 < o ? o > a && (o = a) : o = a, 0 < R ? R > o && (R = o) : R = o, o > R && h !== null && (b = y ? "secondary-light" : "warning", i ? i.run(
        console.timeStamp.bind(
          console,
          y ? "Consecutive" : "Event: " + h,
          R,
          o,
          rt,
          ft,
          b
        )
      ) : console.timeStamp(
        y ? "Consecutive" : "Event: " + h,
        R,
        o,
        rt,
        ft,
        b
      )), a > o && (i ? i.run(
        console.timeStamp.bind(
          console,
          "Action",
          o,
          a,
          rt,
          ft,
          "primary-dark"
        )
      ) : console.timeStamp(
        "Action",
        o,
        a,
        rt,
        ft,
        "primary-dark"
      )), f > a && (o = p ? "Promise Resolved" : 5 < f - a ? "Update Blocked" : "Update", R = [], _ != null && R.push(["Component name", _]), d != null && R.push(["Method name", d]), a = {
        start: a,
        end: f,
        detail: {
          devtools: {
            properties: R,
            track: rt,
            trackGroup: ft,
            color: "primary-light"
          }
        }
      }, i ? i.run(
        performance.measure.bind(
          performance,
          o,
          a
        )
      ) : performance.measure(o, a))), Iu = Oo = -1.1, MS = 0, eg = -1.1, xf = jf, jf = -1.1, Ao = Hl()), (t & 62914560) !== 0 && (tg & 62914560) !== 0 && (Fa(4194304), Jm(J1, sa)), (t & 2080374784) !== 0 && (tg & 2080374784) !== 0 && (Fa(268435456), Jm(K1, sa)), a = e.timeoutHandle, a !== ud && (e.timeoutHandle = ud, oA(a)), a = e.cancelPendingCommit, a !== null && (e.cancelPendingCommit = null, a()), Bi = 0, rh(), Xt = e, Fe = a = hu(
        e.current,
        null
      ), $e = t, Nt = qn, au = null, Xf = !1, Tm = ji(e, t), $S = !1, dl = Mo, ed = jn = kS = Lf = Qf = 0, yn = r0 = null, vg = !1, (t & 8) !== 0 && (t |= t & 32), i = e.entangledLanes, i !== 0)
        for (e = e.entanglements, i &= t; 0 < i; )
          o = 31 - kl(i), f = 1 << o, t |= e[o], i &= ~f;
      return bc = t, Lo(), e = x1(), 1e3 < e - j1 && (w.recentlyCreatedOwnerStacks = 0, j1 = e), Ui.discardPendingWarnings(), a;
    }
    function Vy(e, t) {
      Ue = null, w.H = u0, w.getCurrentStack = null, Hn = !1, on = null, t === dm || t === ug ? (t = Ds(), Nt = f0) : t === NS ? (t = Ds(), Nt = Lb) : Nt = t === LS ? KS : t !== null && typeof t == "object" && typeof t.then == "function" ? s0 : yg, au = t;
      var a = Fe;
      a === null ? (dl = o0, Ks(
        e,
        ha(t, e.current)
      )) : a.mode & Je && Zo(a);
    }
    function dh() {
      var e = eu.current;
      return e === null ? !0 : ($e & 4194048) === $e ? Pu === null : ($e & 62914560) === $e || ($e & 536870912) !== 0 ? e === Pu : !1;
    }
    function Zy() {
      var e = w.H;
      return w.H = u0, e === null ? u0 : e;
    }
    function hh() {
      var e = w.A;
      return w.A = $T, e;
    }
    function df(e) {
      bl === null && (bl = e._debugTask == null ? null : e._debugTask);
    }
    function ao() {
      dl = wf, Xf || ($e & 4194048) !== $e && eu.current !== null || (Tm = !0), (Qf & 134217727) === 0 && (Lf & 134217727) === 0 || Xt === null || ga(
        Xt,
        $e,
        jn,
        !1
      );
    }
    function mh(e, t, a) {
      var i = yt;
      yt |= Pl;
      var o = Zy(), f = hh();
      if (Xt !== e || $e !== t) {
        if (Nn) {
          var d = e.memoizedUpdaters;
          0 < d.size && (xu(e, $e), d.clear()), Rl(e, t);
        }
        d0 = null, Sa(e, t);
      }
      t = !1, d = dl;
      e: do
        try {
          if (Nt !== qn && Fe !== null) {
            var h = Fe, y = au;
            switch (Nt) {
              case KS:
                rh(), d = mg;
                break e;
              case f0:
              case Ir:
              case Pr:
              case s0:
                eu.current === null && (t = !0);
                var p = Nt;
                if (Nt = qn, au = null, no(e, h, y, p), a && Tm) {
                  d = Mo;
                  break e;
                }
                break;
              default:
                p = Nt, Nt = qn, au = null, no(e, h, y, p);
            }
          }
          Yu(), d = dl;
          break;
        } catch (_) {
          Vy(e, _);
        }
      while (!0);
      return t && e.shellSuspendCounter++, Ki(), yt = i, w.H = o, w.A = f, Fe === null && (Xt = null, $e = 0, Lo()), d;
    }
    function Yu() {
      for (; Fe !== null; ) Ky(Fe);
    }
    function Sl(e, t) {
      var a = yt;
      yt |= Pl;
      var i = Zy(), o = hh();
      if (Xt !== e || $e !== t) {
        if (Nn) {
          var f = e.memoizedUpdaters;
          0 < f.size && (xu(e, $e), f.clear()), Rl(e, t);
        }
        d0 = null, Sg = sl() + Jb, Sa(e, t);
      } else
        Tm = ji(
          e,
          t
        );
      e: do
        try {
          if (Nt !== qn && Fe !== null)
            t: switch (t = Fe, f = au, Nt) {
              case yg:
                Nt = qn, au = null, no(
                  e,
                  t,
                  f,
                  yg
                );
                break;
              case Ir:
              case Pr:
                if (ln(f)) {
                  Nt = qn, au = null, Al(t);
                  break;
                }
                t = function() {
                  Nt !== Ir && Nt !== Pr || Xt !== e || (Nt = pg), Ea(e);
                }, f.then(t, t);
                break e;
              case f0:
                Nt = pg;
                break e;
              case Lb:
                Nt = JS;
                break e;
              case pg:
                ln(f) ? (Nt = qn, au = null, Al(t)) : (Nt = qn, au = null, no(
                  e,
                  t,
                  f,
                  pg
                ));
                break;
              case JS:
                var d = null;
                switch (Fe.tag) {
                  case 26:
                    d = Fe.memoizedState;
                  case 5:
                  case 27:
                    var h = Fe;
                    if (d ? Rh(d) : h.stateNode.complete) {
                      Nt = qn, au = null;
                      var y = h.sibling;
                      if (y !== null) Fe = y;
                      else {
                        var p = h.return;
                        p !== null ? (Fe = p, or(p)) : Fe = null;
                      }
                      break t;
                    }
                    break;
                  default:
                    console.error(
                      "Unexpected type of fiber triggered a suspensey commit. This is a bug in React."
                    );
                }
                Nt = qn, au = null, no(
                  e,
                  t,
                  f,
                  JS
                );
                break;
              case s0:
                Nt = qn, au = null, no(
                  e,
                  t,
                  f,
                  s0
                );
                break;
              case KS:
                rh(), dl = mg;
                break e;
              default:
                throw Error(
                  "Unexpected SuspendedReason. This is a bug in React."
                );
            }
          w.actQueue !== null ? Yu() : Jy();
          break;
        } catch (_) {
          Vy(e, _);
        }
      while (!0);
      return Ki(), w.H = i, w.A = o, yt = a, Fe !== null ? Mo : (Xt = null, $e = 0, Lo(), dl);
    }
    function Jy() {
      for (; Fe !== null && !Vh(); )
        Ky(Fe);
    }
    function Ky(e) {
      var t = e.alternate;
      (e.mode & Je) !== De ? (Rd(e), t = fe(
        e,
        ah,
        t,
        e,
        bc
      ), Zo(e)) : t = fe(
        e,
        ah,
        t,
        e,
        bc
      ), e.memoizedProps = e.pendingProps, t === null ? or(e) : Fe = t;
    }
    function Al(e) {
      var t = fe(e, Ig, e);
      e.memoizedProps = e.pendingProps, t === null ? or(e) : Fe = t;
    }
    function Ig(e) {
      var t = e.alternate, a = (e.mode & Je) !== De;
      switch (a && Rd(e), e.tag) {
        case 15:
        case 0:
          t = Wc(
            t,
            e,
            e.pendingProps,
            e.type,
            void 0,
            $e
          );
          break;
        case 11:
          t = Wc(
            t,
            e,
            e.pendingProps,
            e.type.render,
            e.ref,
            $e
          );
          break;
        case 5:
          Pi(e);
        default:
          lv(t, e), e = Fe = Vo(e, bc), t = ah(t, e, bc);
      }
      return a && Zo(e), t;
    }
    function no(e, t, a, i) {
      Ki(), Pi(t), hm = null, t0 = 0;
      var o = t.return;
      try {
        if (F0(
          e,
          o,
          t,
          a,
          $e
        )) {
          dl = o0, Ks(
            e,
            ha(a, e.current)
          ), Fe = null;
          return;
        }
      } catch (f) {
        if (o !== null) throw Fe = o, f;
        dl = o0, Ks(
          e,
          ha(a, e.current)
        ), Fe = null;
        return;
      }
      t.flags & 32768 ? (it || i === yg ? e = !0 : Tm || ($e & 536870912) !== 0 ? e = !1 : (Xf = e = !0, (i === Ir || i === Pr || i === f0 || i === s0) && (i = eu.current, i !== null && i.tag === 13 && (i.flags |= 16384))), Vt(t, e)) : or(t);
    }
    function or(e) {
      var t = e;
      do {
        if ((t.flags & 32768) !== 0) {
          Vt(
            t,
            Xf
          );
          return;
        }
        var a = t.alternate;
        if (e = t.return, Rd(t), a = fe(
          t,
          ev,
          a,
          t,
          bc
        ), (t.mode & Je) !== De && Gc(t), a !== null) {
          Fe = a;
          return;
        }
        if (t = t.sibling, t !== null) {
          Fe = t;
          return;
        }
        Fe = t = e;
      } while (t !== null);
      dl === Mo && (dl = Qb);
    }
    function Vt(e, t) {
      do {
        var a = tv(e.alternate, e);
        if (a !== null) {
          a.flags &= 32767, Fe = a;
          return;
        }
        if ((e.mode & Je) !== De) {
          Gc(e), a = e.actualDuration;
          for (var i = e.child; i !== null; )
            a += i.actualDuration, i = i.sibling;
          e.actualDuration = a;
        }
        if (a = e.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !t && (e = e.sibling, e !== null)) {
          Fe = e;
          return;
        }
        Fe = e = a;
      } while (e !== null);
      dl = mg, Fe = null;
    }
    function ia(e, t, a, i, o, f, d, h, y, p, _, R, b, q) {
      e.cancelPendingCommit = null;
      do
        oc();
      while (jl !== Zf);
      if (Ui.flushLegacyContextWarning(), Ui.flushPendingUnsafeLifecycleWarnings(), (yt & (Pl | lu)) !== da)
        throw Error("Should not already be working.");
      if (Fa(a), p === Fr ? Zm(
        b,
        q,
        a,
        bl
      ) : i !== null ? $g(
        b,
        q,
        a,
        i,
        t !== null && t.alternate !== null && t.alternate.memoizedState.isDehydrated && (t.flags & 256) !== 0,
        bl
      ) : Kg(
        b,
        q,
        a,
        bl
      ), t !== null) {
        if (a === 0 && console.error(
          "finishedLanes should not be empty during a commit. This is a bug in React."
        ), t === e.current)
          throw Error(
            "Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue."
          );
        if (f = t.lanes | t.childLanes, f |= TS, ts(
          e,
          a,
          f,
          d,
          h,
          y
        ), e === Xt && (Fe = Xt = null, $e = 0), Am = t, Jf = e, Bi = a, IS = f, e1 = o, Ib = i, PS = q, Pb = R, Yi = bg, eE = null, t.actualDuration !== 0 || (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, sr(po, function() {
          return g0 = window.event, Yi === bg && (Yi = FS), ba(), null;
        })) : (e.callbackNode = null, e.callbackPriority = 0), To = null, Yf = Hl(), R !== null && kg(
          q,
          Yf,
          R,
          bl
        ), i = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || i) {
          i = w.T, w.T = null, o = Tt.p, Tt.p = zl, d = yt, yt |= lu;
          try {
            Yy(e, t, a);
          } finally {
            yt = d, Tt.p = o, w.T = i;
          }
        }
        jl = $b, qu(), $y(), ky();
      }
    }
    function qu() {
      if (jl === $b) {
        jl = Zf;
        var e = Jf, t = Am, a = Bi, i = (t.flags & 13878) !== 0;
        if ((t.subtreeFlags & 13878) !== 0 || i) {
          i = w.T, w.T = null;
          var o = Tt.p;
          Tt.p = zl;
          var f = yt;
          yt |= lu;
          try {
            bm = a, Em = e, ma(), Gy(t, e), Em = bm = null, a = r1;
            var d = G0(e.containerInfo), h = a.focusedElem, y = a.selectionRange;
            if (d !== h && h && h.ownerDocument && Sd(
              h.ownerDocument.documentElement,
              h
            )) {
              if (y !== null && Lm(h)) {
                var p = y.start, _ = y.end;
                if (_ === void 0 && (_ = p), "selectionStart" in h)
                  h.selectionStart = p, h.selectionEnd = Math.min(
                    _,
                    h.value.length
                  );
                else {
                  var R = h.ownerDocument || document, b = R && R.defaultView || window;
                  if (b.getSelection) {
                    var q = b.getSelection(), ne = h.textContent.length, oe = Math.min(
                      y.start,
                      ne
                    ), Zt = y.end === void 0 ? oe : Math.min(y.end, ne);
                    !q.extend && oe > Zt && (d = Zt, Zt = oe, oe = d);
                    var st = x0(
                      h,
                      oe
                    ), S = x0(
                      h,
                      Zt
                    );
                    if (st && S && (q.rangeCount !== 1 || q.anchorNode !== st.node || q.anchorOffset !== st.offset || q.focusNode !== S.node || q.focusOffset !== S.offset)) {
                      var E = R.createRange();
                      E.setStart(st.node, st.offset), q.removeAllRanges(), oe > Zt ? (q.addRange(E), q.extend(S.node, S.offset)) : (E.setEnd(S.node, S.offset), q.addRange(E));
                    }
                  }
                }
              }
              for (R = [], q = h; q = q.parentNode; )
                q.nodeType === 1 && R.push({
                  element: q,
                  left: q.scrollLeft,
                  top: q.scrollTop
                });
              for (typeof h.focus == "function" && h.focus(), h = 0; h < R.length; h++) {
                var z = R[h];
                z.element.scrollLeft = z.left, z.element.scrollTop = z.top;
              }
            }
            qg = !!s1, r1 = s1 = null;
          } finally {
            yt = f, Tt.p = o, w.T = i;
          }
        }
        e.current = t, jl = kb;
      }
    }
    function $y() {
      if (jl === kb) {
        jl = Zf;
        var e = eE;
        if (e !== null) {
          Yf = Hl();
          var t = Eo, a = Yf;
          !$t || a <= t || console.timeStamp(
            e,
            t,
            a,
            rt,
            ft,
            "secondary-light"
          );
        }
        e = Jf, t = Am, a = Bi;
        var i = (t.flags & 8772) !== 0;
        if ((t.subtreeFlags & 8772) !== 0 || i) {
          i = w.T, w.T = null;
          var o = Tt.p;
          Tt.p = zl;
          var f = yt;
          yt |= lu;
          try {
            bm = a, Em = e, ma(), hl(
              e,
              t.alternate,
              t
            ), Em = bm = null;
          } finally {
            yt = f, Tt.p = o, w.T = i;
          }
        }
        e = PS, t = Pb, Eo = Hl(), e = t === null ? e : Yf, t = Eo, a = Yi === WS, i = bl, To !== null ? V0(
          e,
          t,
          To,
          !1,
          i
        ) : !$t || t <= e || (i ? i.run(
          console.timeStamp.bind(
            console,
            a ? "Commit Interrupted View Transition" : "Commit",
            e,
            t,
            rt,
            ft,
            a ? "error" : "secondary-dark"
          )
        ) : console.timeStamp(
          a ? "Commit Interrupted View Transition" : "Commit",
          e,
          t,
          rt,
          ft,
          a ? "error" : "secondary-dark"
        )), jl = Wb;
      }
    }
    function ky() {
      if (jl === Fb || jl === Wb) {
        if (jl === Fb) {
          var e = Eo;
          Eo = Hl();
          var t = Eo, a = Yi === WS;
          !$t || t <= e || console.timeStamp(
            a ? "Interrupted View Transition" : "Starting Animation",
            e,
            t,
            rt,
            ft,
            a ? " error" : "secondary-light"
          ), Yi !== WS && (Yi = Kb);
        }
        jl = Zf, uS(), e = Jf;
        var i = Am;
        t = Bi, a = Ib;
        var o = i.actualDuration !== 0 || (i.subtreeFlags & 10256) !== 0 || (i.flags & 10256) !== 0;
        o ? jl = Eg : (jl = Zf, Am = Jf = null, sv(
          e,
          e.pendingLanes
        ), td = 0, m0 = null);
        var f = e.pendingLanes;
        if (f === 0 && (Vf = null), o || Dn(e), f = Yo(t), i = i.stateNode, oa && typeof oa.onCommitFiberRoot == "function")
          try {
            var d = (i.current.flags & 128) === 128;
            switch (f) {
              case zl:
                var h = Zh;
                break;
              case Wl:
                h = Jh;
                break;
              case fn:
                h = po;
                break;
              case mc:
                h = Nr;
                break;
              default:
                h = po;
            }
            oa.onCommitFiberRoot(
              Mi,
              i,
              h,
              d
            );
          } catch (R) {
            Vu || (Vu = !0, console.error(
              "React instrumentation encountered an error: %o",
              R
            ));
          }
        if (Nn && e.memoizedUpdaters.clear(), cv(), a !== null) {
          d = w.T, h = Tt.p, Tt.p = zl, w.T = null;
          try {
            var y = e.onRecoverableError;
            for (i = 0; i < a.length; i++) {
              var p = a[i], _ = fv(p.stack);
              fe(
                p.source,
                y,
                p.value,
                _
              );
            }
          } finally {
            w.T = d, Tt.p = h;
          }
        }
        (Bi & 3) !== 0 && oc(), Ea(e), f = e.pendingLanes, (t & 261930) !== 0 && (f & 42) !== 0 ? (ag = !0, e === t1 ? h0++ : (h0 = 0, t1 = e)) : h0 = 0, o || Kn(t, Eo), hf(0);
      }
    }
    function fv(e) {
      return e = { componentStack: e }, Object.defineProperty(e, "digest", {
        get: function() {
          console.error(
            'You are accessing "digest" from the errorInfo object passed to onRecoverableError. This property is no longer provided as part of errorInfo but can be accessed as a property of the Error instance itself.'
          );
        }
      }), e;
    }
    function sv(e, t) {
      (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, As(t)));
    }
    function oc() {
      return qu(), $y(), ky(), ba();
    }
    function ba() {
      if (jl !== Eg) return !1;
      var e = Jf, t = IS;
      IS = 0;
      var a = Yo(Bi), i = fn > a ? fn : a;
      a = w.T;
      var o = Tt.p;
      try {
        Tt.p = i, w.T = null;
        var f = e1;
        e1 = null, i = Jf;
        var d = Bi;
        if (jl = Zf, Am = Jf = null, Bi = 0, (yt & (Pl | lu)) !== da)
          throw Error("Cannot flush passive effects while already rendering.");
        Fa(d), l1 = !0, Tg = !1;
        var h = 0;
        if (To = null, h = sl(), Yi === Kb)
          Jm(
            Eo,
            h,
            XT
          );
        else {
          var y = Eo, p = h, _ = Yi === FS;
          !$t || p <= y || (bl ? bl.run(
            console.timeStamp.bind(
              console,
              _ ? "Waiting for Paint" : "Waiting",
              y,
              p,
              rt,
              ft,
              "secondary-light"
            )
          ) : console.timeStamp(
            _ ? "Waiting for Paint" : "Waiting",
            y,
            p,
            rt,
            ft,
            "secondary-light"
          ));
        }
        y = yt, yt |= lu;
        var R = i.current;
        ma(), iv(R);
        var b = i.current;
        R = PS, ma(), oh(
          i,
          b,
          d,
          f,
          R
        ), Dn(i), yt = y;
        var q = sl();
        if (b = h, R = bl, To !== null ? V0(
          b,
          q,
          To,
          !0,
          R
        ) : !$t || q <= b || (R ? R.run(
          console.timeStamp.bind(
            console,
            "Remaining Effects",
            b,
            q,
            rt,
            ft,
            "secondary-dark"
          )
        ) : console.timeStamp(
          "Remaining Effects",
          b,
          q,
          rt,
          ft,
          "secondary-dark"
        )), Kn(d, q), hf(0, !1), Tg ? i === m0 ? td++ : (td = 0, m0 = i) : td = 0, Tg = l1 = !1, oa && typeof oa.onPostCommitFiberRoot == "function")
          try {
            oa.onPostCommitFiberRoot(Mi, i);
          } catch (oe) {
            Vu || (Vu = !0, console.error(
              "React instrumentation encountered an error: %o",
              oe
            ));
          }
        var ne = i.current.stateNode;
        return ne.effectDuration = 0, ne.passiveEffectDuration = 0, !0;
      } finally {
        Tt.p = o, w.T = a, sv(e, t);
      }
    }
    function _n(e, t, a) {
      t = ha(a, t), Ha(t), t = Jd(e.stateNode, t, 2), e = pa(e, t, 2), e !== null && (Gi(e, 2), Ea(e));
    }
    function pt(e, t, a) {
      if (Om = !1, e.tag === 3)
        _n(e, e, a);
      else {
        for (; t !== null; ) {
          if (t.tag === 3) {
            _n(
              t,
              e,
              a
            );
            return;
          }
          if (t.tag === 1) {
            var i = t.stateNode;
            if (typeof t.type.getDerivedStateFromError == "function" || typeof i.componentDidCatch == "function" && (Vf === null || !Vf.has(i))) {
              e = ha(a, e), Ha(e), a = Kd(2), i = pa(t, a, 2), i !== null && ($s(
                a,
                i,
                t,
                e
              ), Gi(i, 2), Ea(i));
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
        i = e.pingCache = new WT();
        var o = /* @__PURE__ */ new Set();
        i.set(t, o);
      } else
        o = i.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), i.set(t, o));
      o.has(a) || ($S = !0, o.add(a), i = rv.bind(null, e, t, a), Nn && xu(e, a), t.then(i, i));
    }
    function rv(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t), e.pingedLanes |= e.suspendedLanes & a, e.warmLanes &= ~a, (a & 127) !== 0 ? 0 > gc && (Qr = gc = Hl(), Lp = Fv("Promise Resolved"), qf = Iv) : (a & 4194048) !== 0 && 0 > Iu && (Ao = Iu = Hl(), Zp = Fv("Promise Resolved"), MS = Iv), ir() && w.actQueue === null && console.error(
        `A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`
      ), Xt === e && ($e & a) === a && (dl === wf || dl === hg && ($e & 62914560) === $e && sl() - gg < Zb ? (yt & Pl) === da && Sa(e, 0) : kS |= a, ed === $e && (ed = 0)), Ea(e);
    }
    function ju(e, t) {
      t === 0 && (t = Bo()), e = Xl(e, t), e !== null && (Gi(e, t), Ea(e));
    }
    function uo(e) {
      var t = e.memoizedState, a = 0;
      t !== null && (a = t.retryLane), ju(e, a);
    }
    function Ti(e, t) {
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
      i !== null && i.delete(t), ju(e, a);
    }
    function fr(e, t, a) {
      if ((t.subtreeFlags & 67117056) !== 0)
        for (t = t.child; t !== null; ) {
          var i = e, o = t, f = o.type === zf;
          f = a || f, o.tag !== 22 ? o.flags & 67108864 ? f && fe(
            o,
            yh,
            i,
            o
          ) : fr(
            i,
            o,
            f
          ) : o.memoizedState === null && (f && o.flags & 8192 ? fe(
            o,
            yh,
            i,
            o
          ) : o.subtreeFlags & 67108864 && fe(
            o,
            fr,
            i,
            o,
            f
          )), t = t.sibling;
        }
    }
    function yh(e, t) {
      he(!0);
      try {
        wy(t), Bu(t), Xy(e, t.alternate, t, !1), fh(e, t, 0, null, !1, 0);
      } finally {
        he(!1);
      }
    }
    function Dn(e) {
      var t = !0;
      e.current.mode & (Ja | Ci) || (t = !1), fr(
        e,
        e.current,
        t
      );
    }
    function Wy(e) {
      if ((yt & Pl) === da) {
        var t = e.tag;
        if (t === 3 || t === 1 || t === 0 || t === 11 || t === 14 || t === 15) {
          if (t = se(e) || "ReactComponent", Ag !== null) {
            if (Ag.has(t)) return;
            Ag.add(t);
          } else Ag = /* @__PURE__ */ new Set([t]);
          fe(e, function() {
            console.error(
              "Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously tries to update the component. Move this work to useEffect instead."
            );
          });
        }
      }
    }
    function xu(e, t) {
      Nn && e.memoizedUpdaters.forEach(function(a) {
        za(e, a, t);
      });
    }
    function sr(e, t) {
      var a = w.actQueue;
      return a !== null ? (a.push(t), PT) : Df(e, t);
    }
    function rr(e) {
      ir() && w.actQueue === null && fe(e, function() {
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
    function Ea(e) {
      e !== zm && e.next === null && (zm === null ? Og = zm = e : zm = zm.next = e), zg = !0, w.actQueue !== null ? n1 || (n1 = !0, hv()) : a1 || (a1 = !0, hv());
    }
    function hf(e, t) {
      if (!u1 && zg) {
        u1 = !0;
        do
          for (var a = !1, i = Og; i !== null; ) {
            if (e !== 0) {
              var o = i.pendingLanes;
              if (o === 0) var f = 0;
              else {
                var d = i.suspendedLanes, h = i.pingedLanes;
                f = (1 << 31 - kl(42 | e) + 1) - 1, f &= o & ~(d & ~h), f = f & 201326741 ? f & 201326741 | 1 : f ? f | 2 : 0;
              }
              f !== 0 && (a = !0, Iy(i, f));
            } else
              f = $e, f = El(
                i,
                i === Xt ? f : 0,
                i.cancelPendingCommit !== null || i.timeoutHandle !== ud
              ), (f & 3) === 0 || ji(i, f) || (a = !0, Iy(i, f));
            i = i.next;
          }
        while (a);
        u1 = !1;
      }
    }
    function dv() {
      g0 = window.event, io();
    }
    function io() {
      zg = n1 = a1 = !1;
      var e = 0;
      Kf !== 0 && mf() && (e = Kf);
      for (var t = sl(), a = null, i = Og; i !== null; ) {
        var o = i.next, f = Fy(i, t);
        f === 0 ? (i.next = null, a === null ? Og = o : a.next = o, o === null && (zm = a)) : (a = i, (e !== 0 || (f & 3) !== 0) && (zg = !0)), i = o;
      }
      jl !== Zf && jl !== Eg || hf(e), Kf !== 0 && (Kf = 0);
    }
    function Fy(e, t) {
      for (var a = e.suspendedLanes, i = e.pingedLanes, o = e.expirationTimes, f = e.pendingLanes & -62914561; 0 < f; ) {
        var d = 31 - kl(f), h = 1 << d, y = o[d];
        y === -1 ? ((h & a) === 0 || (h & i) !== 0) && (o[d] = es(h, t)) : y <= t && (e.expiredLanes |= h), f &= ~h;
      }
      if (t = Xt, a = $e, a = El(
        e,
        e === t ? a : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== ud
      ), i = e.callbackNode, a === 0 || e === t && (Nt === Ir || Nt === Pr) || e.cancelPendingCommit !== null)
        return i !== null && Py(i), e.callbackNode = null, e.callbackPriority = 0;
      if ((a & 3) === 0 || ji(e, a)) {
        if (t = a & -a, t !== e.callbackPriority || w.actQueue !== null && i !== i1)
          Py(i);
        else return t;
        switch (Yo(a)) {
          case zl:
          case Wl:
            a = Jh;
            break;
          case fn:
            a = po;
            break;
          case mc:
            a = Nr;
            break;
          default:
            a = po;
        }
        return i = dr.bind(null, e), w.actQueue !== null ? (w.actQueue.push(i), a = i1) : a = Df(a, i), e.callbackPriority = t, e.callbackNode = a, t;
      }
      return i !== null && Py(i), e.callbackPriority = 2, e.callbackNode = null, 2;
    }
    function dr(e, t) {
      if (ag = lg = !1, g0 = window.event, jl !== Zf && jl !== Eg)
        return e.callbackNode = null, e.callbackPriority = 0, null;
      var a = e.callbackNode;
      if (Yi === bg && (Yi = FS), oc() && e.callbackNode !== a)
        return null;
      var i = $e;
      return i = El(
        e,
        e === Xt ? i : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== ud
      ), i === 0 ? null : (ov(
        e,
        i,
        t
      ), Fy(e, sl()), e.callbackNode != null && e.callbackNode === a ? dr.bind(null, e) : null);
    }
    function Iy(e, t) {
      if (oc()) return null;
      lg = ag, ag = !1, ov(e, t, !0);
    }
    function Py(e) {
      e !== i1 && e !== null && Lh(e);
    }
    function hv() {
      w.actQueue !== null && w.actQueue.push(function() {
        return io(), null;
      }), fA(function() {
        (yt & (Pl | lu)) !== da ? Df(
          Zh,
          dv
        ) : io();
      });
    }
    function ht() {
      if (Kf === 0) {
        var e = Zr;
        e === 0 && (e = Br, Br <<= 1, (Br & 261888) === 0 && (Br = 256)), Kf = e;
      }
      return Kf;
    }
    function Ut(e) {
      return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : (At(e, "action"), Qi("" + e));
    }
    function Pe(e, t) {
      var a = t.ownerDocument.createElement("input");
      return a.name = t.name, a.value = t.value, e.id && a.setAttribute("form", e.id), t.parentNode.insertBefore(a, t), e = new FormData(e), a.parentNode.removeChild(a), e;
    }
    function ut(e, t, a, i, o) {
      if (t === "submit" && a && a.stateNode === o) {
        var f = Ut(
          (o[fa] || null).action
        ), d = i.submitter;
        d && (t = (t = d[fa] || null) ? Ut(t.formAction) : d.getAttribute("formAction"), t !== null && (f = t, d = null));
        var h = new Vv(
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
                  if (Kf !== 0) {
                    var y = d ? Pe(
                      o,
                      d
                    ) : new FormData(o), p = {
                      pending: !0,
                      data: y,
                      method: o.method,
                      action: f
                    };
                    Object.freeze(p), ef(
                      a,
                      p,
                      null,
                      y
                    );
                  }
                } else
                  typeof f == "function" && (h.preventDefault(), y = d ? Pe(
                    o,
                    d
                  ) : new FormData(o), p = {
                    pending: !0,
                    data: y,
                    method: o.method,
                    action: f
                  }, Object.freeze(p), ef(
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
        gS(i);
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
    function qe(e, t) {
      c1.has(e) || console.error(
        'Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.',
        e
      );
      var a = t[Cp];
      a === void 0 && (a = t[Cp] = /* @__PURE__ */ new Set());
      var i = e + "__bubble";
      a.has(i) || (Gu(t, e, 2, !1), a.add(i));
    }
    function fc(e, t, a) {
      c1.has(e) && !t && console.error(
        'Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.',
        e
      );
      var i = 0;
      t && (i |= 4), Gu(
        a,
        e,
        i,
        t
      );
    }
    function hr(e) {
      if (!e[_g]) {
        e[_g] = !0, qr.forEach(function(a) {
          a !== "selectionchange" && (c1.has(a) || fc(a, !1, e), fc(a, !0, e));
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[_g] || (t[_g] = !0, fc("selectionchange", !1, t));
      }
    }
    function Gu(e, t, a, i) {
      switch (Nh(t)) {
        case zl:
          var o = Kl;
          break;
        case Wl:
          o = tS;
          break;
        default:
          o = Hh;
      }
      a = o.bind(
        null,
        t,
        a,
        e
      ), o = void 0, !oS || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), i ? o !== void 0 ? e.addEventListener(t, a, {
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
    function Kt(e, t, a, i, o) {
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
      Cc(function() {
        var p = f, _ = ds(a), R = [];
        e: {
          var b = q1.get(e);
          if (b !== void 0) {
            var q = Vv, ne = e;
            switch (e) {
              case "keypress":
                if (wo(a) === 0) break e;
              case "keydown":
              case "keyup":
                q = mT;
                break;
              case "focusin":
                ne = "focus", q = dS;
                break;
              case "focusout":
                ne = "blur", q = dS;
                break;
              case "beforeblur":
              case "afterblur":
                q = dS;
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
                q = T1;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                q = lT;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                q = vT;
                break;
              case H1:
              case N1:
              case B1:
                q = uT;
                break;
              case Y1:
                q = ST;
                break;
              case "scroll":
              case "scrollend":
                q = eT;
                break;
              case "wheel":
                q = ET;
                break;
              case "copy":
              case "cut":
              case "paste":
                q = cT;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                q = O1;
                break;
              case "toggle":
              case "beforetoggle":
                q = AT;
            }
            var oe = (t & 4) !== 0, Zt = !oe && (e === "scroll" || e === "scrollend"), st = oe ? b !== null ? b + "Capture" : null : b;
            oe = [];
            for (var S = p, E; S !== null; ) {
              var z = S;
              if (E = z.stateNode, z = z.tag, z !== 5 && z !== 26 && z !== 27 || E === null || st === null || (z = ou(S, st), z != null && oe.push(
                Rn(
                  S,
                  z,
                  E
                )
              )), Zt) break;
              S = S.return;
            }
            0 < oe.length && (b = new q(
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
            if (b = e === "mouseover" || e === "pointerover", q = e === "mouseout" || e === "pointerout", b && a !== Hp && (ne = a.relatedTarget || a.fromElement) && (I(ne) || ne[Bn]))
              break e;
            if ((q || b) && (b = _.window === _ ? _ : (b = _.ownerDocument) ? b.defaultView || b.parentWindow : window, q ? (ne = a.relatedTarget || a.toElement, q = p, ne = ne ? I(ne) : null, ne !== null && (Zt = dt(ne), oe = ne.tag, ne !== Zt || oe !== 5 && oe !== 27 && oe !== 6) && (ne = null)) : (q = null, ne = p), q !== ne)) {
              if (oe = T1, z = "onMouseLeave", st = "onMouseEnter", S = "mouse", (e === "pointerout" || e === "pointerover") && (oe = O1, z = "onPointerLeave", st = "onPointerEnter", S = "pointer"), Zt = q == null ? b : re(q), E = ne == null ? b : re(ne), b = new oe(
                z,
                S + "leave",
                q,
                a,
                _
              ), b.target = Zt, b.relatedTarget = E, z = null, I(_) === p && (oe = new oe(
                st,
                S + "enter",
                ne,
                a,
                _
              ), oe.target = E, oe.relatedTarget = Zt, z = oe), Zt = z, q && ne)
                t: {
                  for (oe = ep, st = q, S = ne, E = 0, z = st; z; z = oe(z))
                    E++;
                  z = 0;
                  for (var Z = S; Z; Z = oe(Z))
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
              q !== null && Xa(
                R,
                b,
                q,
                oe,
                !1
              ), ne !== null && Zt !== null && Xa(
                R,
                Zt,
                ne,
                oe,
                !0
              );
            }
          }
          e: {
            if (b = p ? re(p) : window, q = b.nodeName && b.nodeName.toLowerCase(), q === "select" || q === "input" && b.type === "file")
              var ue = ys;
            else if (ms(b))
              if (C1)
                ue = gd;
              else {
                ue = Qm;
                var He = Xm;
              }
            else
              q = b.nodeName, !q || q.toLowerCase() !== "input" || b.type !== "checkbox" && b.type !== "radio" ? p && rs(p.elementType) && (ue = ys) : ue = ps;
            if (ue && (ue = ue(e, p))) {
              wm(
                R,
                ue,
                a,
                _
              );
              break e;
            }
            He && He(e, b, p), e === "focusout" && p && b.type === "number" && p.memoizedProps.value != null && Cm(b, "number", b.value);
          }
          switch (He = p ? re(p) : window, e) {
            case "focusin":
              (ms(He) || He.contentEditable === "true") && (lm = He, mS = p, Gp = null);
              break;
            case "focusout":
              Gp = mS = lm = null;
              break;
            case "mousedown":
              yS = !0;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              yS = !1, w0(
                R,
                a,
                _
              );
              break;
            case "selectionchange":
              if (DT) break;
            case "keydown":
            case "keyup":
              w0(
                R,
                a,
                _
              );
          }
          var Ee;
          if (hS)
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
            tm ? oi(e, a) && (ve = "onCompositionEnd") : e === "keydown" && a.keyCode === z1 && (ve = "onCompositionStart");
          ve && (_1 && a.locale !== "ko" && (tm || ve !== "onCompositionStart" ? ve === "onCompositionEnd" && tm && (Ee = xm()) : (Cf = _, fS = "value" in Cf ? Cf.value : Cf.textContent, tm = !0)), He = wu(
            p,
            ve
          ), 0 < He.length && (ve = new A1(
            ve,
            e,
            null,
            a,
            _
          ), R.push({
            event: ve,
            listeners: He
          }), Ee ? ve.data = Ee : (Ee = yd(a), Ee !== null && (ve.data = Ee)))), (Ee = zT ? pd(e, a) : B0(e, a)) && (ve = wu(
            p,
            "onBeforeInput"
          ), 0 < ve.length && (He = new fT(
            "onBeforeInput",
            "beforeinput",
            null,
            a,
            _
          ), R.push({
            event: He,
            listeners: ve
          }), He.data = Ee)), ut(
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
    function Rn(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function wu(e, t) {
      for (var a = t + "Capture", i = []; e !== null; ) {
        var o = e, f = o.stateNode;
        if (o = o.tag, o !== 5 && o !== 26 && o !== 27 || f === null || (o = ou(e, a), o != null && i.unshift(
          Rn(e, o, f)
        ), o = ou(e, t), o != null && i.push(
          Rn(e, o, f)
        )), e.tag === 3) return i;
        e = e.return;
      }
      return [];
    }
    function ep(e) {
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
        h !== 5 && h !== 26 && h !== 27 || p === null || (y = p, o ? (p = ou(a, f), p != null && d.unshift(
          Rn(a, p, y)
        )) : o || (p = ou(a, f), p != null && d.push(
          Rn(a, p, y)
        ))), a = a.return;
      }
      d.length !== 0 && e.push({ event: t, listeners: d });
    }
    function sc(e, t) {
      jm(e, t), e !== "input" && e !== "textarea" && e !== "select" || t == null || t.value !== null || b1 || (b1 = !0, e === "select" && t.multiple ? console.error(
        "`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.",
        e
      ) : console.error(
        "`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.",
        e
      ));
      var a = {
        registrationNameDependencies: Zu,
        possibleRegistrationNames: kh
      };
      rs(e) || typeof t.is == "string" || Zg(e, t, a), t.contentEditable && !t.suppressContentEditableWarning && t.children != null && console.error(
        "A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."
      );
    }
    function ol(e, t, a, i) {
      t !== a && (a = Ai(a), Ai(t) !== a && (i[e] = t));
    }
    function Qa(e, t, a) {
      t.forEach(function(i) {
        a[co(i)] = i === "style" ? $n(e) : e.getAttribute(i);
      });
    }
    function Mn(e, t) {
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
    function mr(e, t) {
      return e = e.namespaceURI === We || e.namespaceURI === at ? e.ownerDocument.createElementNS(
        e.namespaceURI,
        e.tagName
      ) : e.ownerDocument.createElement(e.tagName), e.innerHTML = t, e.innerHTML;
    }
    function Ai(e) {
      return ni(e) && (console.error(
        "The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before using it here.",
        ka(e)
      ), nu(e)), (typeof e == "string" ? e : "" + e).replace(eA, `
`).replace(tA, "");
    }
    function yr(e, t) {
      return t = Ai(t), Ai(e) === t;
    }
    function Et(e, t, a, i, o, f) {
      switch (a) {
        case "children":
          typeof i == "string" ? (Go(i, t, !1), t === "body" || t === "textarea" && i === "" || cu(e, i)) : (typeof i == "number" || typeof i == "bigint") && (Go("" + i, t, !1), t !== "body" && cu(e, "" + i));
          break;
        case "className":
          ns(e, "class", i);
          break;
        case "tabIndex":
          ns(e, "tabindex", i);
          break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
          ns(e, a, i);
          break;
        case "style":
          Mc(e, i, f);
          break;
        case "data":
          if (t !== "object") {
            ns(e, "data", i);
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
          At(i, a), i = Qi("" + i), e.setAttribute(a, i);
          break;
        case "action":
        case "formAction":
          if (i != null && (t === "form" ? a === "formAction" ? console.error(
            "You can only pass the formAction prop to <input> or <button>. Use the action prop on <form>."
          ) : typeof i == "function" && (o.encType == null && o.method == null || Mg || (Mg = !0, console.error(
            "Cannot specify a encType or method for a form that specifies a function as the action. React provides those automatically. They will get overridden."
          )), o.target == null || Rg || (Rg = !0, console.error(
            "Cannot specify a target for a form that specifies a function as the action. The function will always be executed in the same window."
          ))) : t === "input" || t === "button" ? a === "action" ? console.error(
            "You can only pass the action prop to <form>. Use the formAction prop on <input> or <button>."
          ) : t !== "input" || o.type === "submit" || o.type === "image" || Dg ? t !== "button" || o.type == null || o.type === "submit" || Dg ? typeof i == "function" && (o.name == null || uE || (uE = !0, console.error(
            'Cannot specify a "name" prop for a button that specifies a function as a formAction. React needs it to encode which action should be invoked. It will get overridden.'
          )), o.formEncType == null && o.formMethod == null || Mg || (Mg = !0, console.error(
            "Cannot specify a formEncType or formMethod for a button that specifies a function as a formAction. React provides those automatically. They will get overridden."
          )), o.formTarget == null || Rg || (Rg = !0, console.error(
            "Cannot specify a formTarget for a button that specifies a function as a formAction. The function will always be executed in the same window."
          ))) : (Dg = !0, console.error(
            'A button can only specify a formAction along with type="submit" or no type.'
          )) : (Dg = !0, console.error(
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
            typeof f == "function" && (a === "formAction" ? (t !== "input" && Et(e, t, "name", o.name, o, null), Et(
              e,
              t,
              "formEncType",
              o.formEncType,
              o,
              null
            ), Et(
              e,
              t,
              "formMethod",
              o.formMethod,
              o,
              null
            ), Et(
              e,
              t,
              "formTarget",
              o.formTarget,
              o,
              null
            )) : (Et(
              e,
              t,
              "encType",
              o.encType,
              o,
              null
            ), Et(e, t, "method", o.method, o, null), Et(
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
          At(i, a), i = Qi("" + i), e.setAttribute(a, i);
          break;
        case "onClick":
          i != null && (typeof i != "function" && Mn(a, i), e.onclick = wl);
          break;
        case "onScroll":
          i != null && (typeof i != "function" && Mn(a, i), qe("scroll", e));
          break;
        case "onScrollEnd":
          i != null && (typeof i != "function" && Mn(a, i), qe("scrollend", e));
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
          At(i, a), a = Qi("" + i), e.setAttributeNS(ld, "xlink:href", a);
          break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
          i != null && typeof i != "function" && typeof i != "symbol" ? (At(i, a), e.setAttribute(a, "" + i)) : e.removeAttribute(a);
          break;
        case "inert":
          i !== "" || Cg[a] || (Cg[a] = !0, console.error(
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
          i === !0 ? e.setAttribute(a, "") : i !== !1 && i != null && typeof i != "function" && typeof i != "symbol" ? (At(i, a), e.setAttribute(a, i)) : e.removeAttribute(a);
          break;
        case "cols":
        case "rows":
        case "size":
        case "span":
          i != null && typeof i != "function" && typeof i != "symbol" && !isNaN(i) && 1 <= i ? (At(i, a), e.setAttribute(a, i)) : e.removeAttribute(a);
          break;
        case "rowSpan":
        case "start":
          i == null || typeof i == "function" || typeof i == "symbol" || isNaN(i) ? e.removeAttribute(a) : (At(i, a), e.setAttribute(a, i));
          break;
        case "popover":
          qe("beforetoggle", e), qe("toggle", e), Tc(e, "popover", i);
          break;
        case "xlinkActuate":
          iu(
            e,
            ld,
            "xlink:actuate",
            i
          );
          break;
        case "xlinkArcrole":
          iu(
            e,
            ld,
            "xlink:arcrole",
            i
          );
          break;
        case "xlinkRole":
          iu(
            e,
            ld,
            "xlink:role",
            i
          );
          break;
        case "xlinkShow":
          iu(
            e,
            ld,
            "xlink:show",
            i
          );
          break;
        case "xlinkTitle":
          iu(
            e,
            ld,
            "xlink:title",
            i
          );
          break;
        case "xlinkType":
          iu(
            e,
            ld,
            "xlink:type",
            i
          );
          break;
        case "xmlBase":
          iu(
            e,
            o1,
            "xml:base",
            i
          );
          break;
        case "xmlLang":
          iu(
            e,
            o1,
            "xml:lang",
            i
          );
          break;
        case "xmlSpace":
          iu(
            e,
            o1,
            "xml:space",
            i
          );
          break;
        case "is":
          f != null && console.error(
            'Cannot update the "is" prop after it has been initialized.'
          ), Tc(e, "is", i);
          break;
        case "innerText":
        case "textContent":
          break;
        case "popoverTarget":
          iE || i == null || typeof i != "object" || (iE = !0, console.error(
            "The `popoverTarget` prop expects the ID of an Element as a string. Received %s instead.",
            i
          ));
        default:
          !(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N" ? (a = qm(a), Tc(e, a, i)) : Zu.hasOwnProperty(a) && i != null && typeof i != "function" && Mn(a, i);
      }
    }
    function Xu(e, t, a, i, o, f) {
      switch (a) {
        case "style":
          Mc(e, i, f);
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
          typeof i == "string" ? cu(e, i) : (typeof i == "number" || typeof i == "bigint") && cu(e, "" + i);
          break;
        case "onScroll":
          i != null && (typeof i != "function" && Mn(a, i), qe("scroll", e));
          break;
        case "onScrollEnd":
          i != null && (typeof i != "function" && Mn(a, i), qe("scrollend", e));
          break;
        case "onClick":
          i != null && (typeof i != "function" && Mn(a, i), e.onclick = wl);
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
          if (Zu.hasOwnProperty(a))
            i != null && typeof i != "function" && Mn(a, i);
          else
            e: {
              if (a[0] === "o" && a[1] === "n" && (o = a.endsWith("Capture"), t = a.slice(2, o ? a.length - 7 : void 0), f = e[fa] || null, f = f != null ? f[a] : null, typeof f == "function" && e.removeEventListener(t, f, o), typeof i == "function")) {
                typeof f != "function" && f !== null && (a in e ? e[a] = null : e.hasAttribute(a) && e.removeAttribute(a)), e.addEventListener(t, i, o);
                break e;
              }
              a in e ? e[a] = i : i === !0 ? e.setAttribute(a, "") : Tc(e, a, i);
            }
      }
    }
    function ot(e, t, a) {
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
          qe("error", e), qe("load", e);
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
                    Et(e, t, f, d, a, null);
                }
            }
          o && Et(e, t, "srcSet", a.srcSet, a, null), i && Et(e, t, "src", a.src, a, null);
          return;
        case "input":
          Gl("input", a), qe("invalid", e);
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
                    Et(e, t, i, _, a, null);
                }
            }
          Ac(e, a), C0(
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
          Gl("select", a), qe("invalid", e), i = d = f = null;
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
                  Et(
                    e,
                    t,
                    o,
                    h,
                    a,
                    null
                  );
              }
          Oc(e, a), t = f, a = d, e.multiple = !!i, t != null ? Xi(e, !!i, t, !1) : a != null && Xi(e, !!i, a, !0);
          return;
        case "textarea":
          Gl("textarea", a), qe("invalid", e), f = o = i = null;
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
                  Et(
                    e,
                    t,
                    d,
                    h,
                    a,
                    null
                  );
              }
          zc(e, a), _c(e, i, o, f);
          return;
        case "option":
          Um(e, a);
          for (y in a)
            a.hasOwnProperty(y) && (i = a[y], i != null) && (y === "selected" ? e.selected = i && typeof i != "function" && typeof i != "symbol" : Et(e, t, y, i, a, null));
          return;
        case "dialog":
          qe("beforetoggle", e), qe("toggle", e), qe("cancel", e), qe("close", e);
          break;
        case "iframe":
        case "object":
          qe("load", e);
          break;
        case "video":
        case "audio":
          for (i = 0; i < y0.length; i++)
            qe(y0[i], e);
          break;
        case "image":
          qe("error", e), qe("load", e);
          break;
        case "details":
          qe("toggle", e);
          break;
        case "embed":
        case "source":
        case "link":
          qe("error", e), qe("load", e);
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
                  Et(e, t, p, i, a, null);
              }
          return;
        default:
          if (rs(t)) {
            for (_ in a)
              a.hasOwnProperty(_) && (i = a[_], i !== void 0 && Xu(
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
        a.hasOwnProperty(h) && (i = a[h], i != null && Et(e, t, h, i, a, null));
    }
    function rc(e, t, a, i) {
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
          for (q in a) {
            var R = a[q];
            if (a.hasOwnProperty(q) && R != null)
              switch (q) {
                case "checked":
                  break;
                case "value":
                  break;
                case "defaultValue":
                  y = R;
                default:
                  i.hasOwnProperty(q) || Et(
                    e,
                    t,
                    q,
                    null,
                    i,
                    R
                  );
              }
          }
          for (var b in i) {
            var q = i[b];
            if (R = a[b], i.hasOwnProperty(b) && (q != null || R != null))
              switch (b) {
                case "type":
                  f = q;
                  break;
                case "name":
                  o = q;
                  break;
                case "checked":
                  p = q;
                  break;
                case "defaultChecked":
                  _ = q;
                  break;
                case "value":
                  d = q;
                  break;
                case "defaultValue":
                  h = q;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (q != null)
                    throw Error(
                      t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  break;
                default:
                  q !== R && Et(
                    e,
                    t,
                    b,
                    q,
                    i,
                    R
                  );
              }
          }
          t = a.type === "checkbox" || a.type === "radio" ? a.checked != null : a.value != null, i = i.type === "checkbox" || i.type === "radio" ? i.checked != null : i.value != null, t || !i || nE || (console.error(
            "A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components"
          ), nE = !0), !t || i || aE || (console.error(
            "A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components"
          ), aE = !0), us(
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
          q = d = h = b = null;
          for (f in a)
            if (y = a[f], a.hasOwnProperty(f) && y != null)
              switch (f) {
                case "value":
                  break;
                case "multiple":
                  q = y;
                default:
                  i.hasOwnProperty(f) || Et(
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
                  f !== y && Et(
                    e,
                    t,
                    o,
                    f,
                    i,
                    y
                  );
              }
          i = h, t = d, a = q, b != null ? Xi(e, !!t, b, !1) : !!a != !!t && (i != null ? Xi(e, !!t, i, !0) : Xi(e, !!t, t ? [] : "", !1));
          return;
        case "textarea":
          q = b = null;
          for (h in a)
            if (o = a[h], a.hasOwnProperty(h) && o != null && !i.hasOwnProperty(h))
              switch (h) {
                case "value":
                  break;
                case "children":
                  break;
                default:
                  Et(e, t, h, null, i, o);
              }
          for (d in i)
            if (o = i[d], f = a[d], i.hasOwnProperty(d) && (o != null || f != null))
              switch (d) {
                case "value":
                  b = o;
                  break;
                case "defaultValue":
                  q = o;
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
                  o !== f && Et(e, t, d, o, i, f);
              }
          jo(e, b, q);
          return;
        case "option":
          for (var ne in a)
            b = a[ne], a.hasOwnProperty(ne) && b != null && !i.hasOwnProperty(ne) && (ne === "selected" ? e.selected = !1 : Et(
              e,
              t,
              ne,
              null,
              i,
              b
            ));
          for (y in i)
            b = i[y], q = a[y], i.hasOwnProperty(y) && b !== q && (b != null || q != null) && (y === "selected" ? e.selected = b && typeof b != "function" && typeof b != "symbol" : Et(
              e,
              t,
              y,
              b,
              i,
              q
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
            b = a[oe], a.hasOwnProperty(oe) && b != null && !i.hasOwnProperty(oe) && Et(
              e,
              t,
              oe,
              null,
              i,
              b
            );
          for (p in i)
            if (b = i[p], q = a[p], i.hasOwnProperty(p) && b !== q && (b != null || q != null))
              switch (p) {
                case "children":
                case "dangerouslySetInnerHTML":
                  if (b != null)
                    throw Error(
                      t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  break;
                default:
                  Et(
                    e,
                    t,
                    p,
                    b,
                    i,
                    q
                  );
              }
          return;
        default:
          if (rs(t)) {
            for (var Zt in a)
              b = a[Zt], a.hasOwnProperty(Zt) && b !== void 0 && !i.hasOwnProperty(Zt) && Xu(
                e,
                t,
                Zt,
                void 0,
                i,
                b
              );
            for (_ in i)
              b = i[_], q = a[_], !i.hasOwnProperty(_) || b === q || b === void 0 && q === void 0 || Xu(
                e,
                t,
                _,
                b,
                i,
                q
              );
            return;
          }
      }
      for (var st in a)
        b = a[st], a.hasOwnProperty(st) && b != null && !i.hasOwnProperty(st) && Et(e, t, st, null, i, b);
      for (R in i)
        b = i[R], q = a[R], !i.hasOwnProperty(R) || b === q || b == null && q == null || Et(e, t, R, b, i, q);
    }
    function co(e) {
      switch (e) {
        case "class":
          return "className";
        case "for":
          return "htmlFor";
        default:
          return e;
      }
    }
    function $n(e) {
      var t = {};
      e = e.style;
      for (var a = 0; a < e.length; a++) {
        var i = e[a];
        t[i] = e.getPropertyValue(i);
      }
      return t;
    }
    function ph(e, t, a) {
      if (t != null && typeof t != "object")
        console.error(
          "The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX."
        );
      else {
        var i, o = i = "", f;
        for (f in t)
          if (t.hasOwnProperty(f)) {
            var d = t[f];
            d != null && typeof d != "boolean" && d !== "" && (f.indexOf("--") === 0 ? (xl(d, f), i += o + f + ":" + ("" + d).trim()) : typeof d != "number" || d === 0 || Xe.has(f) ? (xl(d, f), i += o + f.replace(de, "-$1").toLowerCase().replace(ze, "-ms-") + ":" + ("" + d).trim()) : i += o + f.replace(de, "-$1").toLowerCase().replace(ze, "-ms-") + ":" + d + "px", o = ";");
          }
        i = i || null, t = e.getAttribute("style"), t !== i && (i = Ai(i), Ai(t) !== i && (a.style = $n(e)));
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
            if (At(i, t), e === "" + i)
              return;
        }
      ol(t, e, i, f);
    }
    function tp(e, t, a, i, o, f) {
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
    function oo(e, t, a, i, o, f) {
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
            if (At(i, a), e === "" + i)
              return;
        }
      ol(t, e, i, f);
    }
    function vh(e, t, a, i, o, f) {
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
            if (!isNaN(i) && (At(i, t), e === "" + i))
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
            if (At(i, t), a = Qi("" + i), e === a)
              return;
        }
      ol(t, e, i, f);
    }
    function lp(e, t, a, i) {
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
      if (rs(t)) {
        for (var y in a)
          if (a.hasOwnProperty(y)) {
            var p = a[y];
            if (p != null) {
              if (Zu.hasOwnProperty(y))
                typeof p != "function" && Mn(y, p);
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
                    d = e.innerHTML, p = p ? p.__html : void 0, p != null && (p = mr(e, p), ol(
                      y,
                      d,
                      p,
                      o
                    ));
                    continue;
                  case "style":
                    f.delete(y), ph(e, p, o);
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
                    f.delete("class"), d = od(
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
                    i.context === Co && t !== "svg" && t !== "math" ? f.delete(y.toLowerCase()) : f.delete(y), d = od(
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
            if (Zu.hasOwnProperty(p))
              typeof y != "function" && Mn(p, y);
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
                  d = e.innerHTML, y = y ? y.__html : void 0, y != null && (y = mr(e, y), d !== y && (o[p] = { __html: d }));
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
                  f.delete(p), ph(e, y, o);
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
                  } else if (d === lA) {
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
                  oo(
                    e,
                    p,
                    "contenteditable",
                    y,
                    f,
                    o
                  );
                  continue;
                case "spellCheck":
                  oo(
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
                  oo(
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
                  tp(
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
                          if (At(y, d), h === "" + y)
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
                          if (!(isNaN(y) || 1 > y) && (At(y, d), h === "" + y))
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
                  vh(
                    e,
                    p,
                    "rowspan",
                    y,
                    f,
                    o
                  );
                  continue;
                case "start":
                  vh(
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
                  y !== "" || Cg[p] || (Cg[p] = !0, console.error(
                    "Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.",
                    p
                  )), tp(
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
                    h = qm(p), d = !1, i.context === Co && t !== "svg" && t !== "math" ? f.delete(h.toLowerCase()) : (_ = p.toLowerCase(), _ = Fh.hasOwnProperty(
                      _
                    ) && Fh[_] || null, _ !== null && _ !== p && (d = !0, f.delete(_)), f.delete(h));
                    e: if (_ = e, R = h, h = y, _a(R))
                      if (_.hasAttribute(R))
                        _ = _.getAttribute(
                          R
                        ), At(
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
    function ap(e) {
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
    function mv() {
      if (typeof performance.getEntriesByType == "function") {
        for (var e = 0, t = 0, a = performance.getEntriesByType("resource"), i = 0; i < a.length; i++) {
          var o = a[i], f = o.transferSize, d = o.initiatorType, h = o.duration;
          if (f && h && ap(d)) {
            for (d = 0, h = o.responseEnd, i += 1; i < a.length; i++) {
              var y = a[i], p = y.startTime;
              if (p > h) break;
              var _ = y.transferSize, R = y.initiatorType;
              _ && ap(R) && (y = y.responseEnd, d += _ * (y < h ? 1 : (h - p) / (y - p)));
            }
            if (--i, t += 8 * (f + d) / (o.duration / 1e3), e++, 10 < e) break;
          }
        }
        if (0 < e) return t / e / 1e6;
      }
      return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
    }
    function gh(e) {
      return e.nodeType === 9 ? e : e.ownerDocument;
    }
    function Oi(e) {
      switch (e) {
        case at:
          return Dm;
        case We:
          return Hg;
        default:
          return Co;
      }
    }
    function pr(e, t) {
      if (e === Co)
        switch (t) {
          case "svg":
            return Dm;
          case "math":
            return Hg;
          default:
            return Co;
        }
      return e === Dm && t === "foreignObject" ? Co : e;
    }
    function vr(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function mf() {
      var e = window.event;
      return e && e.type === "popstate" ? e === d1 ? !1 : (d1 = e, !0) : (d1 = null, !1);
    }
    function yf() {
      var e = window.event;
      return e && e !== g0 ? e.type : null;
    }
    function pf() {
      var e = window.event;
      return e && e !== g0 ? e.timeStamp : -1.1;
    }
    function yv(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function pv(e, t, a) {
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
    function Sh() {
    }
    function np(e, t, a, i) {
      rc(e, t, a, i), e[fa] = i;
    }
    function vv(e) {
      cu(e, "");
    }
    function Pg(e, t, a) {
      e.nodeValue = a;
    }
    function gv(e) {
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
    function zi(e) {
      return e === "head";
    }
    function Sv(e, t) {
      e.removeChild(t);
    }
    function vf(e, t) {
      (e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e).removeChild(t);
    }
    function gr(e, t) {
      var a = t, i = 0;
      do {
        var o = a.nextSibling;
        if (e.removeChild(a), o && o.nodeType === 8)
          if (a = o.data, a === v0 || a === Ug) {
            if (i === 0) {
              e.removeChild(o), Af(t);
              return;
            }
            i--;
          } else if (a === p0 || a === $f || a === nd || a === _m || a === ad)
            i++;
          else if (a === nA)
            Er(
              e.ownerDocument.documentElement
            );
          else if (a === iA) {
            a = e.ownerDocument.head, Er(a);
            for (var f = a.firstChild; f; ) {
              var d = f.nextSibling, h = f.nodeName;
              f[Yr] || h === "SCRIPT" || h === "STYLE" || h === "LINK" && f.rel.toLowerCase() === "stylesheet" || a.removeChild(f), f = d;
            }
          } else
            a === uA && Er(e.ownerDocument.body);
        a = o;
      } while (a);
      Af(t);
    }
    function up(e, t) {
      var a = e;
      e = 0;
      do {
        var i = a.nextSibling;
        if (a.nodeType === 1 ? t ? (a._stashedDisplay = a.style.display, a.style.display = "none") : (a.style.display = a._stashedDisplay || "", a.getAttribute("style") === "" && a.removeAttribute("style")) : a.nodeType === 3 && (t ? (a._stashedText = a.nodeValue, a.nodeValue = "") : a.nodeValue = a._stashedText || ""), i && i.nodeType === 8)
          if (a = i.data, a === v0) {
            if (e === 0) break;
            e--;
          } else
            a !== p0 && a !== $f && a !== nd && a !== _m || e++;
        a = i;
      } while (a);
    }
    function bv(e) {
      up(e, !0);
    }
    function Ev(e) {
      e = e.style, typeof e.setProperty == "function" ? e.setProperty("display", "none", "important") : e.display = "none";
    }
    function Tv(e) {
      e.nodeValue = "";
    }
    function Av(e) {
      up(e, !1);
    }
    function Ov(e, t) {
      t = t[cA], t = t != null && t.hasOwnProperty("display") ? t.display : null, e.style.display = t == null || typeof t == "boolean" ? "" : ("" + t).trim();
    }
    function bh(e, t) {
      e.nodeValue = t;
    }
    function Eh(e) {
      var t = e.firstChild;
      for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
        var a = t;
        switch (t = t.nextSibling, a.nodeName) {
          case "HTML":
          case "HEAD":
          case "BODY":
            Eh(a), M(a);
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
    function zv(e, t, a, i) {
      for (; e.nodeType === 1; ) {
        var o = a;
        if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
          if (!i && (e.nodeName !== "INPUT" || e.type !== "hidden"))
            break;
        } else if (i) {
          if (!e[Yr])
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
          At(o.name, "name");
          var f = o.name == null ? null : "" + o.name;
          if (o.type === "hidden" && e.getAttribute("name") === f)
            return e;
        } else return e;
        if (e = cn(e.nextSibling), e === null) break;
      }
      return null;
    }
    function Rt(e, t, a) {
      if (t === "") return null;
      for (; e.nodeType !== 3; )
        if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !a || (e = cn(e.nextSibling), e === null)) return null;
      return e;
    }
    function Th(e, t) {
      for (; e.nodeType !== 8; )
        if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = cn(e.nextSibling), e === null)) return null;
      return e;
    }
    function ip(e) {
      return e.data === $f || e.data === nd;
    }
    function Ah(e) {
      return e.data === _m || e.data === $f && e.ownerDocument.readyState !== oE;
    }
    function eS(e, t) {
      var a = e.ownerDocument;
      if (e.data === nd)
        e._reactRetry = t;
      else if (e.data !== $f || a.readyState !== oE)
        t();
      else {
        var i = function() {
          t(), a.removeEventListener("DOMContentLoaded", i);
        };
        a.addEventListener("DOMContentLoaded", i), e._reactRetry = i;
      }
    }
    function cn(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
          if (t = e.data, t === p0 || t === _m || t === $f || t === nd || t === ad || t === f1 || t === cE)
            break;
          if (t === v0 || t === Ug)
            return null;
        }
      }
      return e;
    }
    function _v(e) {
      if (e.nodeType === 1) {
        for (var t = e.nodeName.toLowerCase(), a = {}, i = e.attributes, o = 0; o < i.length; o++) {
          var f = i[o];
          a[co(f.name)] = f.name.toLowerCase() === "style" ? $n(e) : f.value;
        }
        return { type: t, props: a };
      }
      return e.nodeType === 8 ? e.data === ad ? { type: "Activity", props: {} } : { type: "Suspense", props: {} } : e.nodeValue;
    }
    function Sr(e, t, a) {
      return a === null || a[aA] !== !0 ? (e.nodeValue === t ? e = null : (t = Ai(t), e = Ai(e.nodeValue) === t ? null : e.nodeValue), e) : null;
    }
    function dc(e) {
      e = e.nextSibling;
      for (var t = 0; e; ) {
        if (e.nodeType === 8) {
          var a = e.data;
          if (a === v0 || a === Ug) {
            if (t === 0)
              return cn(e.nextSibling);
            t--;
          } else
            a !== p0 && a !== _m && a !== $f && a !== nd && a !== ad || t++;
        }
        e = e.nextSibling;
      }
      return null;
    }
    function Oh(e) {
      e = e.previousSibling;
      for (var t = 0; e; ) {
        if (e.nodeType === 8) {
          var a = e.data;
          if (a === p0 || a === _m || a === $f || a === nd || a === ad) {
            if (t === 0) return e;
            t--;
          } else
            a !== v0 && a !== Ug || t++;
        }
        e = e.previousSibling;
      }
      return null;
    }
    function zh(e) {
      Af(e);
    }
    function cp(e) {
      Af(e);
    }
    function hc(e) {
      Af(e);
    }
    function kn(e, t, a, i, o) {
      switch (o && hd(e, i.ancestorInfo), t = gh(a), e) {
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
    function br(e, t, a, i) {
      if (!a[Bn] && le(a)) {
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
      ot(a, e, t), a[Fl] = i, a[fa] = t;
    }
    function Er(e) {
      for (var t = e.attributes; t.length; )
        e.removeAttributeNode(t[0]);
      M(e);
    }
    function Tr(e) {
      return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
    }
    function op(e, t, a) {
      var i = Rm;
      if (i && typeof t == "string" && t) {
        var o = Lt(t);
        o = 'link[rel="' + e + '"][href="' + o + '"]', typeof a == "string" && (o += '[crossorigin="' + a + '"]'), mE.has(o) || (mE.add(o), e = { rel: e, crossOrigin: a, href: t }, i.querySelector(o) === null && (t = i.createElement("link"), ot(t, "link", e), ye(t), i.head.appendChild(t)));
      }
    }
    function fp(e, t, a, i) {
      var o = (o = Un.current) ? Tr(o) : null;
      if (!o)
        throw Error(
          '"resourceRoot" was expected to exist. This is a bug in React.'
        );
      switch (e) {
        case "meta":
        case "title":
          return null;
        case "style":
          return typeof a.precedence == "string" && typeof a.href == "string" ? (a = gf(a.href), t = Me(o).hoistableStyles, i = t.get(a), i || (i = {
            type: "style",
            instance: null,
            count: 0,
            state: null
          }, t.set(a, i)), i) : { type: "void", instance: null, count: 0, state: null };
        case "link":
          if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
            e = gf(a.href);
            var f = Me(o).hoistableStyles, d = f.get(e);
            if (!d && (o = o.ownerDocument || o, d = {
              type: "stylesheet",
              instance: null,
              count: 0,
              state: { loading: id, preload: null }
            }, f.set(e, d), (f = o.querySelector(
              fo(e)
            )) && !f._p && (d.instance = f, d.state.loading = S0 | li), !ai.has(e))) {
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
              ai.set(e, h), f || Dv(
                o,
                e,
                h,
                d.state
              );
            }
            if (t && i === null)
              throw a = `

  - ` + Ar(t) + `
  + ` + Ar(a), Error(
                "Expected <link> not to update to be updated to a stylesheet with precedence. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key." + a
              );
            return d;
          }
          if (t && i !== null)
            throw a = `

  - ` + Ar(t) + `
  + ` + Ar(a), Error(
              "Expected stylesheet with precedence to not be updated to a different kind of <link>. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key." + a
            );
          return null;
        case "script":
          return t = a.async, a = a.src, typeof a == "string" && t && typeof t != "function" && typeof t != "symbol" ? (a = Sf(a), t = Me(o).hoistableScripts, i = t.get(a), i || (i = {
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
    function Ar(e) {
      var t = 0, a = "<link";
      return typeof e.rel == "string" ? (t++, a += ' rel="' + e.rel + '"') : Fn.call(e, "rel") && (t++, a += ' rel="' + (e.rel === null ? "null" : "invalid type " + typeof e.rel) + '"'), typeof e.href == "string" ? (t++, a += ' href="' + e.href + '"') : Fn.call(e, "href") && (t++, a += ' href="' + (e.href === null ? "null" : "invalid type " + typeof e.href) + '"'), typeof e.precedence == "string" ? (t++, a += ' precedence="' + e.precedence + '"') : Fn.call(e, "precedence") && (t++, a += " precedence={" + (e.precedence === null ? "null" : "invalid type " + typeof e.precedence) + "}"), Object.getOwnPropertyNames(e).length > t && (a += " ..."), a + " />";
    }
    function gf(e) {
      return 'href="' + Lt(e) + '"';
    }
    function fo(e) {
      return 'link[rel="stylesheet"][' + e + "]";
    }
    function sp(e) {
      return Ve({}, e, {
        "data-precedence": e.precedence,
        precedence: null
      });
    }
    function Dv(e, t, a, i) {
      e.querySelector(
        'link[rel="preload"][as="style"][' + t + "]"
      ) ? i.loading = S0 : (t = e.createElement("link"), i.preload = t, t.addEventListener("load", function() {
        return i.loading |= S0;
      }), t.addEventListener("error", function() {
        return i.loading |= dE;
      }), ot(t, "link", a), ye(t), e.head.appendChild(t));
    }
    function Sf(e) {
      return '[src="' + Lt(e) + '"]';
    }
    function so(e) {
      return "script[async]" + e;
    }
    function _h(e, t, a) {
      if (t.count++, t.instance === null)
        switch (t.type) {
          case "style":
            var i = e.querySelector(
              'style[data-href~="' + Lt(a.href) + '"]'
            );
            if (i)
              return t.instance = i, ye(i), i;
            var o = Ve({}, a, {
              "data-href": a.href,
              "data-precedence": a.precedence,
              href: null,
              precedence: null
            });
            return i = (e.ownerDocument || e).createElement("style"), ye(i), ot(i, "style", o), Dh(i, a.precedence, e), t.instance = i;
          case "stylesheet":
            o = gf(a.href);
            var f = e.querySelector(
              fo(o)
            );
            if (f)
              return t.state.loading |= li, t.instance = f, ye(f), f;
            i = sp(a), (o = ai.get(o)) && rp(i, o), f = (e.ownerDocument || e).createElement("link"), ye(f);
            var d = f;
            return d._p = new Promise(function(h, y) {
              d.onload = h, d.onerror = y;
            }), ot(f, "link", i), t.state.loading |= li, Dh(f, a.precedence, e), t.instance = f;
          case "script":
            return f = Sf(a.src), (o = e.querySelector(
              so(f)
            )) ? (t.instance = o, ye(o), o) : (i = a, (o = ai.get(f)) && (i = Ve({}, a), ro(i, o)), e = e.ownerDocument || e, o = e.createElement("script"), ye(o), ot(o, "link", i), e.head.appendChild(o), t.instance = o);
          case "void":
            return null;
          default:
            throw Error(
              'acquireResource encountered a resource type it did not expect: "' + t.type + '". this is a bug in React.'
            );
        }
      else
        t.type === "stylesheet" && (t.state.loading & li) === id && (i = t.instance, t.state.loading |= li, Dh(i, a.precedence, e));
      return t.instance;
    }
    function Dh(e, t, a) {
      for (var i = a.querySelectorAll(
        'link[rel="stylesheet"][data-precedence],style[data-precedence]'
      ), o = i.length ? i[i.length - 1] : null, f = o, d = 0; d < i.length; d++) {
        var h = i[d];
        if (h.dataset.precedence === t) f = h;
        else if (f !== o) break;
      }
      f ? f.parentNode.insertBefore(e, f.nextSibling) : (t = a.nodeType === 9 ? a.head : a, t.insertBefore(e, t.firstChild));
    }
    function rp(e, t) {
      e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
    }
    function ro(e, t) {
      e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
    }
    function Rv(e, t, a) {
      if (Ng === null) {
        var i = /* @__PURE__ */ new Map(), o = Ng = /* @__PURE__ */ new Map();
        o.set(a, i);
      } else
        o = Ng, i = o.get(a), i || (i = /* @__PURE__ */ new Map(), o.set(a, i));
      if (i.has(e)) return i;
      for (i.set(e, null), a = a.getElementsByTagName(e), o = 0; o < a.length; o++) {
        var f = a[o];
        if (!(f[Yr] || f[Fl] || e === "link" && f.getAttribute("rel") === "stylesheet") && f.namespaceURI !== at) {
          var d = f.getAttribute(t) || "";
          d = e + d;
          var h = i.get(d);
          h ? h.push(f) : i.set(d, [f]);
        }
      }
      return i;
    }
    function dp(e, t, a) {
      e = e.ownerDocument || e, e.head.insertBefore(
        a,
        t === "title" ? e.querySelector("head > title") : null
      );
    }
    function lt(e, t, a) {
      var i = !a.ancestorInfo.containerTagInScope;
      if (a.context === Dm || t.itemProp != null)
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
    function Rh(e) {
      return !(e.type === "stylesheet" && (e.state.loading & hE) === id);
    }
    function Mh(e, t, a, i) {
      if (a.type === "stylesheet" && (typeof i.media != "string" || matchMedia(i.media).matches !== !1) && (a.state.loading & li) === id) {
        if (a.instance === null) {
          var o = gf(i.href), f = t.querySelector(
            fo(o)
          );
          if (f) {
            t = f._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = Or.bind(e), t.then(e, e)), a.state.loading |= li, a.instance = f, ye(f);
            return;
          }
          f = t.ownerDocument || t, i = sp(i), (o = ai.get(o)) && rp(i, o), f = f.createElement("link"), ye(f);
          var d = f;
          d._p = new Promise(function(h, y) {
            d.onload = h, d.onerror = y;
          }), ot(f, "link", i), a.instance = f;
        }
        e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(a, t), (t = a.state.preload) && (a.state.loading & hE) === id && (e.count++, a = Or.bind(e), t.addEventListener("load", a), t.addEventListener("error", a));
      }
    }
    function hp(e, t) {
      return e.stylesheets && e.count === 0 && bf(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(a) {
        var i = setTimeout(function() {
          if (e.stylesheets && bf(e, e.stylesheets), e.unsuspend) {
            var f = e.unsuspend;
            e.unsuspend = null, f();
          }
        }, sA + t);
        0 < e.imgBytes && m1 === 0 && (m1 = 125 * mv() * dA);
        var o = setTimeout(
          function() {
            if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && bf(e, e.stylesheets), e.unsuspend)) {
              var f = e.unsuspend;
              e.unsuspend = null, f();
            }
          },
          (e.imgBytes > m1 ? 50 : rA) + t
        );
        return e.unsuspend = a, function() {
          e.unsuspend = null, clearTimeout(i), clearTimeout(o);
        };
      } : null;
    }
    function Or() {
      if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
        if (this.stylesheets)
          bf(this, this.stylesheets);
        else if (this.unsuspend) {
          var e = this.unsuspend;
          this.unsuspend = null, e();
        }
      }
    }
    function bf(e, t) {
      e.stylesheets = null, e.unsuspend !== null && (e.count++, Bg = /* @__PURE__ */ new Map(), t.forEach(zr, e), Bg = null, Or.call(e));
    }
    function zr(e, t) {
      if (!(t.state.loading & li)) {
        var a = Bg.get(e);
        if (a) var i = a.get(y1);
        else {
          a = /* @__PURE__ */ new Map(), Bg.set(e, a);
          for (var o = e.querySelectorAll(
            "link[data-precedence],style[data-precedence]"
          ), f = 0; f < o.length; f++) {
            var d = o[f];
            (d.nodeName === "LINK" || d.getAttribute("media") !== "not all") && (a.set(d.dataset.precedence, d), i = d);
          }
          i && a.set(y1, i);
        }
        o = t.instance, d = o.getAttribute("data-precedence"), f = a.get(d) || i, f === i && a.set(y1, o), a.set(d, o), this.count++, i = Or.bind(this), o.addEventListener("load", i), o.addEventListener("error", i), f ? f.parentNode.insertBefore(o, f.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(o, e.firstChild)), t.state.loading |= li;
      }
    }
    function Ch(e, t, a, i, o, f, d, h, y) {
      for (this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = ud, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = xi(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = xi(0), this.hiddenUpdates = xi(null), this.identifierPrefix = i, this.onUncaughtError = o, this.onCaughtError = f, this.onRecoverableError = d, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = y, this.incompleteTransitions = /* @__PURE__ */ new Map(), this.passiveEffectDuration = this.effectDuration = -0, this.memoizedUpdaters = /* @__PURE__ */ new Set(), e = this.pendingUpdatersLaneMap = [], t = 0; 31 > t; t++) e.push(/* @__PURE__ */ new Set());
      this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
    }
    function Mv(e, t, a, i, o, f, d, h, y, p, _, R) {
      return e = new Ch(
        e,
        t,
        a,
        d,
        y,
        p,
        _,
        R,
        h
      ), t = qT, f === !0 && (t |= Ja | Ci), t |= Je, f = N(3, null, null, t), e.current = f, f.stateNode = e, t = ly(), xc(t), e.pooledCache = t, xc(t), f.memoizedState = {
        element: i,
        isDehydrated: a,
        cache: t
      }, Eu(f), e;
    }
    function mp(e) {
      return e ? (e = Nf, e) : Nf;
    }
    function yp(e, t, a, i, o, f) {
      if (oa && typeof oa.onScheduleFiberRoot == "function")
        try {
          oa.onScheduleFiberRoot(Mi, i, a);
        } catch (d) {
          Vu || (Vu = !0, console.error(
            "React instrumentation encountered an error: %o",
            d
          ));
        }
      o = mp(o), i.context === null ? i.context = o : i.pendingContext = o, Hn && on !== null && !gE && (gE = !0, console.error(
        `Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`,
        se(on) || "Unknown"
      )), i = Tu(t), i.payload = { element: a }, f = f === void 0 ? null : f, f !== null && (typeof f != "function" && console.error(
        "Expected the last optional `callback` argument to be a function. Instead received: %s.",
        f
      ), i.callback = f), a = pa(e, i, t), a !== null && (Gn(t, "root.render()", null), el(a, e, t), $o(a, e, t));
    }
    function Cv(e, t) {
      if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var a = e.retryLane;
        e.retryLane = a !== 0 && a < t ? a : t;
      }
    }
    function Uh(e, t) {
      Cv(e, t), (e = e.alternate) && Cv(e, t);
    }
    function pp(e) {
      if (e.tag === 13 || e.tag === 31) {
        var t = Xl(e, 67108864);
        t !== null && el(t, e, 67108864), Uh(e, 67108864);
      }
    }
    function Mt(e) {
      if (e.tag === 13 || e.tag === 31) {
        var t = Jl(e);
        t = pl(t);
        var a = Xl(e, t);
        a !== null && el(a, e, t), Uh(e, t);
      }
    }
    function vp() {
      return on;
    }
    function Kl(e, t, a, i) {
      var o = w.T;
      w.T = null;
      var f = Tt.p;
      try {
        Tt.p = zl, Hh(e, t, a, i);
      } finally {
        Tt.p = f, w.T = o;
      }
    }
    function tS(e, t, a, i) {
      var o = w.T;
      w.T = null;
      var f = Tt.p;
      try {
        Tt.p = Wl, Hh(e, t, a, i);
      } finally {
        Tt.p = f, w.T = o;
      }
    }
    function Hh(e, t, a, i) {
      if (qg) {
        var o = gp(i);
        if (o === null)
          Kt(
            e,
            t,
            i,
            jg,
            a
          ), Dr(e, i);
        else if (Uv(
          o,
          e,
          t,
          a,
          i
        ))
          i.stopPropagation();
        else if (Dr(e, i), t & 4 && -1 < mA.indexOf(e)) {
          for (; o !== null; ) {
            var f = le(o);
            if (f !== null)
              switch (f.tag) {
                case 3:
                  if (f = f.stateNode, f.current.memoizedState.isDehydrated) {
                    var d = uu(f.pendingLanes);
                    if (d !== 0) {
                      var h = f;
                      for (h.pendingLanes |= 2, h.entangledLanes |= 2; d; ) {
                        var y = 1 << 31 - kl(d);
                        h.entanglements[1] |= y, d &= ~y;
                      }
                      Ea(f), (yt & (Pl | lu)) === da && (Sg = sl() + Jb, hf(0));
                    }
                  }
                  break;
                case 31:
                case 13:
                  h = Xl(f, 2), h !== null && el(h, f, 2), lo(), Uh(f, 2);
              }
            if (f = gp(i), f === null && Kt(
              e,
              t,
              i,
              jg,
              a
            ), f === o) break;
            o = f;
          }
          o !== null && i.stopPropagation();
        } else
          Kt(
            e,
            t,
            i,
            null,
            a
          );
      }
    }
    function gp(e) {
      return e = ds(e), _r(e);
    }
    function _r(e) {
      if (jg = null, e = I(e), e !== null) {
        var t = dt(e);
        if (t === null) e = null;
        else {
          var a = t.tag;
          if (a === 13) {
            if (e = Bt(t), e !== null) return e;
            e = null;
          } else if (a === 31) {
            if (e = Ft(t), e !== null) return e;
            e = null;
          } else if (a === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
              return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null;
          } else t !== e && (e = null);
        }
      }
      return jg = e, null;
    }
    function Nh(e) {
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
          switch (iS()) {
            case Zh:
              return zl;
            case Jh:
              return Wl;
            case po:
            case qv:
              return fn;
            case Nr:
              return mc;
            default:
              return fn;
          }
        default:
          return fn;
      }
    }
    function Dr(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          kf = null;
          break;
        case "dragenter":
        case "dragleave":
          Wf = null;
          break;
        case "mouseover":
        case "mouseout":
          Ff = null;
          break;
        case "pointerover":
        case "pointerout":
          E0.delete(t.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          T0.delete(t.pointerId);
      }
    }
    function Ef(e, t, a, i, o, f) {
      return e === null || e.nativeEvent !== f ? (e = {
        blockedOn: t,
        domEventName: a,
        eventSystemFlags: i,
        nativeEvent: f,
        targetContainers: [o]
      }, t !== null && (t = le(t), t !== null && pp(t)), e) : (e.eventSystemFlags |= i, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
    }
    function Uv(e, t, a, i, o) {
      switch (t) {
        case "focusin":
          return kf = Ef(
            kf,
            e,
            t,
            a,
            i,
            o
          ), !0;
        case "dragenter":
          return Wf = Ef(
            Wf,
            e,
            t,
            a,
            i,
            o
          ), !0;
        case "mouseover":
          return Ff = Ef(
            Ff,
            e,
            t,
            a,
            i,
            o
          ), !0;
        case "pointerover":
          var f = o.pointerId;
          return E0.set(
            f,
            Ef(
              E0.get(f) || null,
              e,
              t,
              a,
              i,
              o
            )
          ), !0;
        case "gotpointercapture":
          return f = o.pointerId, T0.set(
            f,
            Ef(
              T0.get(f) || null,
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
    function Bh(e) {
      var t = I(e.target);
      if (t !== null) {
        var a = dt(t);
        if (a !== null) {
          if (t = a.tag, t === 13) {
            if (t = Bt(a), t !== null) {
              e.blockedOn = t, v(e.priority, function() {
                Mt(a);
              });
              return;
            }
          } else if (t === 31) {
            if (t = Ft(a), t !== null) {
              e.blockedOn = t, v(e.priority, function() {
                Mt(a);
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
    function Tf(e) {
      if (e.blockedOn !== null) return !1;
      for (var t = e.targetContainers; 0 < t.length; ) {
        var a = gp(e.nativeEvent);
        if (a === null) {
          a = e.nativeEvent;
          var i = new a.constructor(
            a.type,
            a
          ), o = i;
          Hp !== null && console.error(
            "Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."
          ), Hp = o, a.target.dispatchEvent(i), Hp === null && console.error(
            "Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."
          ), Hp = null;
        } else
          return t = le(a), t !== null && pp(t), e.blockedOn = a, !1;
        t.shift();
      }
      return !0;
    }
    function Hv(e, t, a) {
      Tf(e) && a.delete(t);
    }
    function Nv() {
      p1 = !1, kf !== null && Tf(kf) && (kf = null), Wf !== null && Tf(Wf) && (Wf = null), Ff !== null && Tf(Ff) && (Ff = null), E0.forEach(Hv), T0.forEach(Hv);
    }
    function Yh(e, t) {
      e.blockedOn === t && (e.blockedOn = null, p1 || (p1 = !0, fl.unstable_scheduleCallback(
        fl.unstable_NormalPriority,
        Nv
      )));
    }
    function Sp(e) {
      xg !== e && (xg = e, fl.unstable_scheduleCallback(
        fl.unstable_NormalPriority,
        function() {
          xg === e && (xg = null);
          for (var t = 0; t < e.length; t += 3) {
            var a = e[t], i = e[t + 1], o = e[t + 2];
            if (typeof i != "function") {
              if (_r(i || a) === null)
                continue;
              break;
            }
            var f = le(a);
            f !== null && (e.splice(t, 3), t -= 3, a = {
              pending: !0,
              data: o,
              method: a.method,
              action: i
            }, Object.freeze(a), ef(
              f,
              a,
              i,
              o
            ));
          }
        }
      ));
    }
    function Af(e) {
      function t(y) {
        return Yh(y, e);
      }
      kf !== null && Yh(kf, e), Wf !== null && Yh(Wf, e), Ff !== null && Yh(Ff, e), E0.forEach(t), T0.forEach(t);
      for (var a = 0; a < If.length; a++) {
        var i = If[a];
        i.blockedOn === e && (i.blockedOn = null);
      }
      for (; 0 < If.length && (a = If[0], a.blockedOn === null); )
        Bh(a), a.blockedOn === null && If.shift();
      if (a = (e.ownerDocument || e).$$reactFormReplay, a != null)
        for (i = 0; i < a.length; i += 3) {
          var o = a[i], f = a[i + 1], d = o[fa] || null;
          if (typeof f == "function")
            d || Sp(a);
          else if (d) {
            var h = null;
            if (f && f.hasAttribute("formAction")) {
              if (o = f, d = f[fa] || null)
                h = d.formAction;
              else if (_r(o) !== null) continue;
            } else h = d.action;
            typeof h == "function" ? a[i + 1] = h : (a.splice(i, 3), i -= 3), Sp(a);
          }
        }
    }
    function Bv() {
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
    function Qu(e) {
      this._internalRoot = e;
    }
    function Rr(e) {
      this._internalRoot = e;
    }
    function bp(e) {
      e[Bn] && (e._reactRootContainer ? console.error(
        "You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported."
      ) : console.error(
        "You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."
      ));
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var fl = JE(), Ep = Mm(), lS = KE(), Ve = Object.assign, Tp = /* @__PURE__ */ Symbol.for("react.element"), Cn = /* @__PURE__ */ Symbol.for("react.transitional.element"), Of = /* @__PURE__ */ Symbol.for("react.portal"), $l = /* @__PURE__ */ Symbol.for("react.fragment"), zf = /* @__PURE__ */ Symbol.for("react.strict_mode"), qh = /* @__PURE__ */ Symbol.for("react.profiler"), jh = /* @__PURE__ */ Symbol.for("react.consumer"), Wn = /* @__PURE__ */ Symbol.for("react.context"), _i = /* @__PURE__ */ Symbol.for("react.forward_ref"), Za = /* @__PURE__ */ Symbol.for("react.suspense"), xh = /* @__PURE__ */ Symbol.for("react.suspense_list"), ho = /* @__PURE__ */ Symbol.for("react.memo"), ml = /* @__PURE__ */ Symbol.for("react.lazy"), Ap = /* @__PURE__ */ Symbol.for("react.activity"), aS = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), mo = Symbol.iterator, Yv = /* @__PURE__ */ Symbol.for("react.client.reference"), Ol = Array.isArray, w = Ep.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Tt = lS.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, nS = Object.freeze({
      pending: !1,
      data: null,
      method: null,
      action: null
    }), Op = [], zp = [], Di = -1, Ri = gt(null), Lu = gt(null), Un = gt(null), Mr = gt(null), Cr = 0, yo, _f, _p, Ur, Gh, wh, Hr;
    O.__reactDisabledLog = !0;
    var Xh, Dp, Rp = !1, Qh = new (typeof WeakMap == "function" ? WeakMap : Map)(), on = null, Hn = !1, Fn = Object.prototype.hasOwnProperty, Df = fl.unstable_scheduleCallback, Lh = fl.unstable_cancelCallback, Vh = fl.unstable_shouldYield, uS = fl.unstable_requestPaint, sl = fl.unstable_now, iS = fl.unstable_getCurrentPriorityLevel, Zh = fl.unstable_ImmediatePriority, Jh = fl.unstable_UserBlockingPriority, po = fl.unstable_NormalPriority, qv = fl.unstable_LowPriority, Nr = fl.unstable_IdlePriority, jv = fl.log, xv = fl.unstable_setDisableYieldValue, Mi = null, oa = null, Vu = !1, Nn = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u", kl = Math.clz32 ? Math.clz32 : No, Kh = Math.log, Mp = Math.LN2, Br = 256, Rf = 262144, In = 4194304, zl = 2, Wl = 8, fn = 32, mc = 268435456, Aa = Math.random().toString(36).slice(2), Fl = "__reactFiber$" + Aa, fa = "__reactProps$" + Aa, Bn = "__reactContainer$" + Aa, Cp = "__reactEvents$" + Aa, Gv = "__reactListeners$" + Aa, $h = "__reactHandles$" + Aa, Up = "__reactResources$" + Aa, Yr = "__reactMarker$" + Aa, qr = /* @__PURE__ */ new Set(), Zu = {}, kh = {}, Mf = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    }, wv = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), Wh = {}, jr = {}, Xv = /[\n"\\]/g, Qv = !1, xr = !1, l = !1, n = !1, u = !1, c = !1, s = ["value", "defaultValue"], r = !1, m = /["'&<>\n\t]|^\s|\s$/, g = "address applet area article aside base basefont bgsound blockquote body br button caption center col colgroup dd details dir div dl dt embed fieldset figcaption figure footer form frame frameset h1 h2 h3 h4 h5 h6 head header hgroup hr html iframe img input isindex li link listing main marquee menu menuitem meta nav noembed noframes noscript object ol p param plaintext pre script section select source style summary table tbody td template textarea tfoot th thead title tr track ul wbr xmp".split(
      " "
    ), T = "applet caption html table td th marquee object template foreignObject desc title".split(
      " "
    ), H = T.concat(["button"]), V = "dd dt li option optgroup p rp rt".split(" "), $ = {
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
    }, B = {}, G = {
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
    }, de = /([A-Z])/g, ze = /^ms-/, Ht = /^(?:webkit|moz|o)[A-Z]/, C = /^-ms-/, D = /-(.)/g, U = /;\s*$/, J = {}, Se = {}, mt = !1, pe = !1, Xe = new Set(
      "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
        " "
      )
    ), We = "http://www.w3.org/1998/Math/MathML", at = "http://www.w3.org/2000/svg", yc = /* @__PURE__ */ new Map([
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
    ]), Fh = {
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
    }, S1 = {
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
    }, Ih = {}, $E = RegExp(
      "^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), kE = RegExp(
      "^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), b1 = !1, sn = {}, E1 = /^on./, WE = /^on[^A-Z]/, FE = RegExp(
      "^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), IE = RegExp(
      "^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), PE = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i, Hp = null, Ph = null, em = null, cS = !1, pc = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), oS = !1;
    if (pc)
      try {
        var Np = {};
        Object.defineProperty(Np, "passive", {
          get: function() {
            oS = !0;
          }
        }), window.addEventListener("test", Np, Np), window.removeEventListener("test", Np, Np);
      } catch {
        oS = !1;
      }
    var Cf = null, fS = null, Lv = null, Gr = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, Vv = nl(Gr), Bp = Ve({}, Gr, { view: 0, detail: 0 }), eT = nl(Bp), sS, rS, Yp, Zv = Ve({}, Bp, {
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
      getModifierState: Uc,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (e !== Yp && (Yp && e.type === "mousemove" ? (sS = e.screenX - Yp.screenX, rS = e.screenY - Yp.screenY) : rS = sS = 0, Yp = e), sS);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : rS;
      }
    }), T1 = nl(Zv), tT = Ve({}, Zv, { dataTransfer: 0 }), lT = nl(tT), aT = Ve({}, Bp, { relatedTarget: 0 }), dS = nl(aT), nT = Ve({}, Gr, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), uT = nl(nT), iT = Ve({}, Gr, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), cT = nl(iT), oT = Ve({}, Gr, { data: 0 }), A1 = nl(
      oT
    ), fT = A1, sT = {
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
    }, rT = {
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
    }, dT = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    }, hT = Ve({}, Bp, {
      key: function(e) {
        if (e.key) {
          var t = sT[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress" ? (e = wo(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? rT[e.keyCode] || "Unidentified" : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Uc,
      charCode: function(e) {
        return e.type === "keypress" ? wo(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? wo(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), mT = nl(hT), yT = Ve({}, Zv, {
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
    }), O1 = nl(yT), pT = Ve({}, Bp, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Uc
    }), vT = nl(pT), gT = Ve({}, Gr, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), ST = nl(gT), bT = Ve({}, Zv, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
      },
      deltaZ: 0,
      deltaMode: 0
    }), ET = nl(bT), TT = Ve({}, Gr, {
      newState: 0,
      oldState: 0
    }), AT = nl(TT), OT = [9, 13, 27, 32], z1 = 229, hS = pc && "CompositionEvent" in window, qp = null;
    pc && "documentMode" in document && (qp = document.documentMode);
    var zT = pc && "TextEvent" in window && !qp, _1 = pc && (!hS || qp && 8 < qp && 11 >= qp), D1 = 32, R1 = String.fromCharCode(D1), M1 = !1, tm = !1, _T = {
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
    }, jp = null, xp = null, C1 = !1;
    pc && (C1 = vd("input") && (!document.documentMode || 9 < document.documentMode));
    var rn = typeof Object.is == "function" ? Object.is : q0, DT = pc && "documentMode" in document && 11 >= document.documentMode, lm = null, mS = null, Gp = null, yS = !1, am = {
      animationend: Hc("Animation", "AnimationEnd"),
      animationiteration: Hc("Animation", "AnimationIteration"),
      animationstart: Hc("Animation", "AnimationStart"),
      transitionrun: Hc("Transition", "TransitionRun"),
      transitionstart: Hc("Transition", "TransitionStart"),
      transitioncancel: Hc("Transition", "TransitionCancel"),
      transitionend: Hc("Transition", "TransitionEnd")
    }, pS = {}, U1 = {};
    pc && (U1 = document.createElement("div").style, "AnimationEvent" in window || (delete am.animationend.animation, delete am.animationiteration.animation, delete am.animationstart.animation), "TransitionEvent" in window || delete am.transitionend.transition);
    var H1 = Nc("animationend"), N1 = Nc("animationiteration"), B1 = Nc("animationstart"), RT = Nc("transitionrun"), MT = Nc("transitionstart"), CT = Nc("transitioncancel"), Y1 = Nc("transitionend"), q1 = /* @__PURE__ */ new Map(), vS = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
    vS.push("scrollEnd");
    var j1 = 0;
    if (typeof performance == "object" && typeof performance.now == "function")
      var UT = performance, x1 = function() {
        return UT.now();
      };
    else {
      var HT = Date;
      x1 = function() {
        return HT.now();
      };
    }
    var gS = typeof reportError == "function" ? reportError : function(e) {
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
    }, NT = "This object has been omitted by React in the console log to avoid sending too much data from the server. Try logging smaller or more specific objects.", Jv = 0, SS = 1, bS = 2, ES = 3, Kv = "– ", $v = "+ ", G1 = "  ", $t = typeof console < "u" && typeof console.timeStamp == "function" && typeof performance < "u" && typeof performance.measure == "function", Ju = "Components ⚛", ft = "Scheduler ⚛", rt = "Blocking", Uf = !1, vo = {
      color: "primary",
      properties: null,
      tooltipText: "",
      track: Ju
    }, Hf = {
      start: -0,
      end: -0,
      detail: { devtools: vo }
    }, BT = ["Changed Props", ""], w1 = "This component received deeply equal props. It might benefit from useMemo or the React Compiler in its owner.", YT = ["Changed Props", w1], wp = 1, go = 2, Ku = [], nm = 0, TS = 0, Nf = {};
    Object.freeze(Nf);
    var $u = null, um = null, De = 0, qT = 1, Je = 2, Ja = 8, Ci = 16, jT = 32, X1 = !1;
    try {
      var Q1 = Object.preventExtensions({});
    } catch {
      X1 = !0;
    }
    var AS = /* @__PURE__ */ new WeakMap(), im = [], cm = 0, kv = null, Xp = 0, ku = [], Wu = 0, wr = null, So = 1, bo = "", Oa = null, kt = null, it = !1, vc = !1, Pn = null, Bf = null, Fu = !1, OS = Error(
      "Hydration Mismatch Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."
    ), zS = gt(null), _S = gt(null), L1 = {}, Wv = null, om = null, fm = !1, xT = typeof AbortController < "u" ? AbortController : function() {
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
    }, GT = fl.unstable_scheduleCallback, wT = fl.unstable_NormalPriority, Ul = {
      $$typeof: Wn,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
      _currentRenderer: null,
      _currentRenderer2: null
    }, Hl = fl.unstable_now, Fv = console.createTask ? console.createTask : function() {
      return null;
    }, Qp = 1, Iv = 2, sa = -0, Yf = -0, Eo = -0, To = null, dn = -1.1, Xr = -0, rl = -0, Ae = -1.1, _e = -1.1, tl = null, yl = !1, Qr = -0, gc = -1.1, Lp = null, qf = 0, DS = null, RS = null, Lr = -1.1, Vp = null, sm = -1.1, Pv = -1.1, Ao = -0, Oo = -1.1, Iu = -1.1, MS = 0, Zp = null, V1 = null, Z1 = null, jf = -1.1, Vr = null, xf = -1.1, eg = -1.1, J1 = -0, K1 = -0, tg = 0, XT = null, $1 = 0, Jp = -1.1, lg = !1, ag = !1, Kp = null, CS = 0, Zr = 0, rm = null, k1 = w.S;
    w.S = function(e, t) {
      if (Vb = sl(), typeof t == "object" && t !== null && typeof t.then == "function") {
        if (0 > Oo && 0 > Iu) {
          Oo = Hl();
          var a = pf(), i = yf();
          (a !== xf || i !== Vr) && (xf = -1.1), jf = a, Vr = i;
        }
        W0(e, t);
      }
      k1 !== null && k1(e, t);
    };
    var Jr = gt(null), Ui = {
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
    }, $p = [], kp = [], Wp = [], Fp = [], Ip = [], Pp = [], Kr = /* @__PURE__ */ new Set();
    Ui.recordUnsafeLifecycleWarnings = function(e, t) {
      Kr.has(e.type) || (typeof t.componentWillMount == "function" && t.componentWillMount.__suppressDeprecationWarning !== !0 && $p.push(e), e.mode & Ja && typeof t.UNSAFE_componentWillMount == "function" && kp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && Wp.push(e), e.mode & Ja && typeof t.UNSAFE_componentWillReceiveProps == "function" && Fp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && Ip.push(e), e.mode & Ja && typeof t.UNSAFE_componentWillUpdate == "function" && Pp.push(e));
    }, Ui.flushPendingUnsafeLifecycleWarnings = function() {
      var e = /* @__PURE__ */ new Set();
      0 < $p.length && ($p.forEach(function(h) {
        e.add(
          se(h) || "Component"
        ), Kr.add(h.type);
      }), $p = []);
      var t = /* @__PURE__ */ new Set();
      0 < kp.length && (kp.forEach(function(h) {
        t.add(
          se(h) || "Component"
        ), Kr.add(h.type);
      }), kp = []);
      var a = /* @__PURE__ */ new Set();
      0 < Wp.length && (Wp.forEach(function(h) {
        a.add(
          se(h) || "Component"
        ), Kr.add(h.type);
      }), Wp = []);
      var i = /* @__PURE__ */ new Set();
      0 < Fp.length && (Fp.forEach(
        function(h) {
          i.add(
            se(h) || "Component"
          ), Kr.add(h.type);
        }
      ), Fp = []);
      var o = /* @__PURE__ */ new Set();
      0 < Ip.length && (Ip.forEach(function(h) {
        o.add(
          se(h) || "Component"
        ), Kr.add(h.type);
      }), Ip = []);
      var f = /* @__PURE__ */ new Set();
      if (0 < Pp.length && (Pp.forEach(function(h) {
        f.add(
          se(h) || "Component"
        ), Kr.add(h.type);
      }), Pp = []), 0 < t.size) {
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
    var ng = /* @__PURE__ */ new Map(), W1 = /* @__PURE__ */ new Set();
    Ui.recordLegacyContextWarning = function(e, t) {
      for (var a = null, i = e; i !== null; )
        i.mode & Ja && (a = i), i = i.return;
      a === null ? console.error(
        "Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue."
      ) : !W1.has(e.type) && (i = ng.get(a), e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], ng.set(a, i)), i.push(e));
    }, Ui.flushLegacyContextWarning = function() {
      ng.forEach(function(e) {
        if (e.length !== 0) {
          var t = e[0], a = /* @__PURE__ */ new Set();
          e.forEach(function(o) {
            a.add(se(o) || "Component"), W1.add(o.type);
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
    }, Ui.discardPendingWarnings = function() {
      $p = [], kp = [], Wp = [], Fp = [], Ip = [], Pp = [], ng = /* @__PURE__ */ new Map();
    };
    var F1 = {
      react_stack_bottom_frame: function(e, t, a) {
        var i = Hn;
        Hn = !0;
        try {
          return e(t, a);
        } finally {
          Hn = i;
        }
      }
    }, US = F1.react_stack_bottom_frame.bind(F1), I1 = {
      react_stack_bottom_frame: function(e) {
        var t = Hn;
        Hn = !0;
        try {
          return e.render();
        } finally {
          Hn = t;
        }
      }
    }, P1 = I1.react_stack_bottom_frame.bind(I1), eb = {
      react_stack_bottom_frame: function(e, t) {
        try {
          t.componentDidMount();
        } catch (a) {
          pt(e, e.return, a);
        }
      }
    }, HS = eb.react_stack_bottom_frame.bind(
      eb
    ), tb = {
      react_stack_bottom_frame: function(e, t, a, i, o) {
        try {
          t.componentDidUpdate(a, i, o);
        } catch (f) {
          pt(e, e.return, f);
        }
      }
    }, lb = tb.react_stack_bottom_frame.bind(
      tb
    ), ab = {
      react_stack_bottom_frame: function(e, t) {
        var a = t.stack;
        e.componentDidCatch(t.value, {
          componentStack: a !== null ? a : ""
        });
      }
    }, QT = ab.react_stack_bottom_frame.bind(
      ab
    ), nb = {
      react_stack_bottom_frame: function(e, t, a) {
        try {
          a.componentWillUnmount();
        } catch (i) {
          pt(e, t, i);
        }
      }
    }, ub = nb.react_stack_bottom_frame.bind(
      nb
    ), ib = {
      react_stack_bottom_frame: function(e) {
        var t = e.create;
        return e = e.inst, t = t(), e.destroy = t;
      }
    }, LT = ib.react_stack_bottom_frame.bind(ib), cb = {
      react_stack_bottom_frame: function(e, t, a) {
        try {
          a();
        } catch (i) {
          pt(e, t, i);
        }
      }
    }, VT = cb.react_stack_bottom_frame.bind(cb), ob = {
      react_stack_bottom_frame: function(e) {
        var t = e._init;
        return t(e._payload);
      }
    }, ZT = ob.react_stack_bottom_frame.bind(ob), dm = Error(
      "Suspense Exception: This is not a real error! It's an implementation detail of `use` to interrupt the current render. You must either rethrow it immediately, or move the `use` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary, or call the promise's `.catch` method and pass the result to `use`."
    ), NS = Error(
      "Suspense Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."
    ), ug = Error(
      "Suspense Exception: This is not a real error! It's an implementation detail of `useActionState` to interrupt the current render. You must either rethrow it immediately, or move the `useActionState` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary."
    ), ig = {
      then: function() {
        console.error(
          'Internal React error: A listener was unexpectedly attached to a "noop" thenable. This is a bug in React. Please file an issue.'
        );
      }
    }, $r = null, e0 = !1, hm = null, t0 = 0, Ke = null, BS, fb = BS = !1, sb = {}, rb = {}, db = {};
    me = function(e, t, a) {
      if (a !== null && typeof a == "object" && a._store && (!a._store.validated && a.key == null || a._store.validated === 2)) {
        if (typeof a._store != "object")
          throw Error(
            "React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue."
          );
        a._store.validated = 1;
        var i = se(e), o = i || "null";
        if (!sb[o]) {
          sb[o] = !0, a = a._owner, e = e._debugOwner;
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
    var kr = xt(!0), hb = xt(!1), mb = 0, yb = 1, pb = 2, YS = 3, Gf = !1, vb = !1, qS = null, jS = !1, mm = gt(null), cg = gt(0), eu = gt(null), Pu = null, ym = 1, l0 = 2, _l = gt(0), og = 0, ei = 1, hn = 2, tu = 4, mn = 8, pm, gb = /* @__PURE__ */ new Set(), Sb = /* @__PURE__ */ new Set(), xS = /* @__PURE__ */ new Set(), bb = /* @__PURE__ */ new Set(), zo = 0, Ue = null, wt = null, Nl = null, fg = !1, vm = !1, Wr = !1, sg = 0, a0 = 0, _o = null, JT = 0, KT = 25, x = null, ti = null, Do = -1, n0 = !1, u0 = {
      readContext: jt,
      use: qa,
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
    u0.useEffectEvent = ul;
    var GS = null, Eb = null, wS = null, Tb = null, Sc = null, Hi = null, rg = null;
    GS = {
      readContext: function(e) {
        return jt(e);
      },
      use: qa,
      useCallback: function(e, t) {
        return x = "useCallback", be(), Qc(t), Du(e, t);
      },
      useContext: function(e) {
        return x = "useContext", be(), jt(e);
      },
      useEffect: function(e, t) {
        return x = "useEffect", be(), Qc(t), Gs(e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return x = "useImperativeHandle", be(), Qc(a), Xs(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        x = "useInsertionEffect", be(), Qc(t), Tn(4, hn, e, t);
      },
      useLayoutEffect: function(e, t) {
        return x = "useLayoutEffect", be(), Qc(t), xa(e, t);
      },
      useMemo: function(e, t) {
        x = "useMemo", be(), Qc(t);
        var a = w.H;
        w.H = Sc;
        try {
          return It(e, t);
        } finally {
          w.H = a;
        }
      },
      useReducer: function(e, t, a) {
        x = "useReducer", be();
        var i = w.H;
        w.H = Sc;
        try {
          return jd(e, t, a);
        } finally {
          w.H = i;
        }
      },
      useRef: function(e) {
        return x = "useRef", be(), wd(e);
      },
      useState: function(e) {
        x = "useState", be();
        var t = w.H;
        w.H = Sc;
        try {
          return Vc(e);
        } finally {
          w.H = t;
        }
      },
      useDebugValue: function() {
        x = "useDebugValue", be();
      },
      useDeferredValue: function(e, t) {
        return x = "useDeferredValue", be(), Zn(e, t);
      },
      useTransition: function() {
        return x = "useTransition", be(), dy();
      },
      useSyncExternalStore: function(e, t, a) {
        return x = "useSyncExternalStore", be(), Wo(
          e,
          t,
          a
        );
      },
      useId: function() {
        return x = "useId", be(), Qd();
      },
      useFormState: function(e, t) {
        return x = "useFormState", be(), Bd(), _u(e, t);
      },
      useActionState: function(e, t) {
        return x = "useActionState", be(), _u(e, t);
      },
      useOptimistic: function(e) {
        return x = "useOptimistic", be(), Fo(e);
      },
      useHostTransitionStatus: gi,
      useMemoCache: di,
      useCacheRefresh: function() {
        return x = "useCacheRefresh", be(), Ld();
      },
      useEffectEvent: function(e) {
        return x = "useEffectEvent", be(), ws(e);
      }
    }, Eb = {
      readContext: function(e) {
        return jt(e);
      },
      use: qa,
      useCallback: function(e, t) {
        return x = "useCallback", F(), Du(e, t);
      },
      useContext: function(e) {
        return x = "useContext", F(), jt(e);
      },
      useEffect: function(e, t) {
        return x = "useEffect", F(), Gs(e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return x = "useImperativeHandle", F(), Xs(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        x = "useInsertionEffect", F(), Tn(4, hn, e, t);
      },
      useLayoutEffect: function(e, t) {
        return x = "useLayoutEffect", F(), xa(e, t);
      },
      useMemo: function(e, t) {
        x = "useMemo", F();
        var a = w.H;
        w.H = Sc;
        try {
          return It(e, t);
        } finally {
          w.H = a;
        }
      },
      useReducer: function(e, t, a) {
        x = "useReducer", F();
        var i = w.H;
        w.H = Sc;
        try {
          return jd(e, t, a);
        } finally {
          w.H = i;
        }
      },
      useRef: function(e) {
        return x = "useRef", F(), wd(e);
      },
      useState: function(e) {
        x = "useState", F();
        var t = w.H;
        w.H = Sc;
        try {
          return Vc(e);
        } finally {
          w.H = t;
        }
      },
      useDebugValue: function() {
        x = "useDebugValue", F();
      },
      useDeferredValue: function(e, t) {
        return x = "useDeferredValue", F(), Zn(e, t);
      },
      useTransition: function() {
        return x = "useTransition", F(), dy();
      },
      useSyncExternalStore: function(e, t, a) {
        return x = "useSyncExternalStore", F(), Wo(
          e,
          t,
          a
        );
      },
      useId: function() {
        return x = "useId", F(), Qd();
      },
      useActionState: function(e, t) {
        return x = "useActionState", F(), _u(e, t);
      },
      useFormState: function(e, t) {
        return x = "useFormState", F(), Bd(), _u(e, t);
      },
      useOptimistic: function(e) {
        return x = "useOptimistic", F(), Fo(e);
      },
      useHostTransitionStatus: gi,
      useMemoCache: di,
      useCacheRefresh: function() {
        return x = "useCacheRefresh", F(), Ld();
      },
      useEffectEvent: function(e) {
        return x = "useEffectEvent", F(), ws(e);
      }
    }, wS = {
      readContext: function(e) {
        return jt(e);
      },
      use: qa,
      useCallback: function(e, t) {
        return x = "useCallback", F(), ua(e, t);
      },
      useContext: function(e) {
        return x = "useContext", F(), jt(e);
      },
      useEffect: function(e, t) {
        x = "useEffect", F(), Ql(2048, mn, e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return x = "useImperativeHandle", F(), Qs(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        return x = "useInsertionEffect", F(), Ql(4, hn, e, t);
      },
      useLayoutEffect: function(e, t) {
        return x = "useLayoutEffect", F(), Ql(4, tu, e, t);
      },
      useMemo: function(e, t) {
        x = "useMemo", F();
        var a = w.H;
        w.H = Hi;
        try {
          return Kc(e, t);
        } finally {
          w.H = a;
        }
      },
      useReducer: function(e, t, a) {
        x = "useReducer", F();
        var i = w.H;
        w.H = Hi;
        try {
          return Vn(e, t, a);
        } finally {
          w.H = i;
        }
      },
      useRef: function() {
        return x = "useRef", F(), bt().memoizedState;
      },
      useState: function() {
        x = "useState", F();
        var e = w.H;
        w.H = Hi;
        try {
          return Vn(ja);
        } finally {
          w.H = e;
        }
      },
      useDebugValue: function() {
        x = "useDebugValue", F();
      },
      useDeferredValue: function(e, t) {
        return x = "useDeferredValue", F(), xe(e, t);
      },
      useTransition: function() {
        return x = "useTransition", F(), Pt();
      },
      useSyncExternalStore: function(e, t, a) {
        return x = "useSyncExternalStore", F(), Ys(
          e,
          t,
          a
        );
      },
      useId: function() {
        return x = "useId", F(), bt().memoizedState;
      },
      useFormState: function(e) {
        return x = "useFormState", F(), Bd(), Po(e);
      },
      useActionState: function(e) {
        return x = "useActionState", F(), Po(e);
      },
      useOptimistic: function(e, t) {
        return x = "useOptimistic", F(), Io(e, t);
      },
      useHostTransitionStatus: gi,
      useMemoCache: di,
      useCacheRefresh: function() {
        return x = "useCacheRefresh", F(), bt().memoizedState;
      },
      useEffectEvent: function(e) {
        return x = "useEffectEvent", F(), na(e);
      }
    }, Tb = {
      readContext: function(e) {
        return jt(e);
      },
      use: qa,
      useCallback: function(e, t) {
        return x = "useCallback", F(), ua(e, t);
      },
      useContext: function(e) {
        return x = "useContext", F(), jt(e);
      },
      useEffect: function(e, t) {
        x = "useEffect", F(), Ql(2048, mn, e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return x = "useImperativeHandle", F(), Qs(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        return x = "useInsertionEffect", F(), Ql(4, hn, e, t);
      },
      useLayoutEffect: function(e, t) {
        return x = "useLayoutEffect", F(), Ql(4, tu, e, t);
      },
      useMemo: function(e, t) {
        x = "useMemo", F();
        var a = w.H;
        w.H = rg;
        try {
          return Kc(e, t);
        } finally {
          w.H = a;
        }
      },
      useReducer: function(e, t, a) {
        x = "useReducer", F();
        var i = w.H;
        w.H = rg;
        try {
          return ec(e, t, a);
        } finally {
          w.H = i;
        }
      },
      useRef: function() {
        return x = "useRef", F(), bt().memoizedState;
      },
      useState: function() {
        x = "useState", F();
        var e = w.H;
        w.H = rg;
        try {
          return ec(ja);
        } finally {
          w.H = e;
        }
      },
      useDebugValue: function() {
        x = "useDebugValue", F();
      },
      useDeferredValue: function(e, t) {
        return x = "useDeferredValue", F(), _t(e, t);
      },
      useTransition: function() {
        return x = "useTransition", F(), Xd();
      },
      useSyncExternalStore: function(e, t, a) {
        return x = "useSyncExternalStore", F(), Ys(
          e,
          t,
          a
        );
      },
      useId: function() {
        return x = "useId", F(), bt().memoizedState;
      },
      useFormState: function(e) {
        return x = "useFormState", F(), Bd(), nc(e);
      },
      useActionState: function(e) {
        return x = "useActionState", F(), nc(e);
      },
      useOptimistic: function(e, t) {
        return x = "useOptimistic", F(), fy(e, t);
      },
      useHostTransitionStatus: gi,
      useMemoCache: di,
      useCacheRefresh: function() {
        return x = "useCacheRefresh", F(), bt().memoizedState;
      },
      useEffectEvent: function(e) {
        return x = "useEffectEvent", F(), na(e);
      }
    }, Sc = {
      readContext: function(e) {
        return L(), jt(e);
      },
      use: function(e) {
        return Q(), qa(e);
      },
      useCallback: function(e, t) {
        return x = "useCallback", Q(), be(), Du(e, t);
      },
      useContext: function(e) {
        return x = "useContext", Q(), be(), jt(e);
      },
      useEffect: function(e, t) {
        return x = "useEffect", Q(), be(), Gs(e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return x = "useImperativeHandle", Q(), be(), Xs(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        x = "useInsertionEffect", Q(), be(), Tn(4, hn, e, t);
      },
      useLayoutEffect: function(e, t) {
        return x = "useLayoutEffect", Q(), be(), xa(e, t);
      },
      useMemo: function(e, t) {
        x = "useMemo", Q(), be();
        var a = w.H;
        w.H = Sc;
        try {
          return It(e, t);
        } finally {
          w.H = a;
        }
      },
      useReducer: function(e, t, a) {
        x = "useReducer", Q(), be();
        var i = w.H;
        w.H = Sc;
        try {
          return jd(e, t, a);
        } finally {
          w.H = i;
        }
      },
      useRef: function(e) {
        return x = "useRef", Q(), be(), wd(e);
      },
      useState: function(e) {
        x = "useState", Q(), be();
        var t = w.H;
        w.H = Sc;
        try {
          return Vc(e);
        } finally {
          w.H = t;
        }
      },
      useDebugValue: function() {
        x = "useDebugValue", Q(), be();
      },
      useDeferredValue: function(e, t) {
        return x = "useDeferredValue", Q(), be(), Zn(e, t);
      },
      useTransition: function() {
        return x = "useTransition", Q(), be(), dy();
      },
      useSyncExternalStore: function(e, t, a) {
        return x = "useSyncExternalStore", Q(), be(), Wo(
          e,
          t,
          a
        );
      },
      useId: function() {
        return x = "useId", Q(), be(), Qd();
      },
      useFormState: function(e, t) {
        return x = "useFormState", Q(), be(), _u(e, t);
      },
      useActionState: function(e, t) {
        return x = "useActionState", Q(), be(), _u(e, t);
      },
      useOptimistic: function(e) {
        return x = "useOptimistic", Q(), be(), Fo(e);
      },
      useMemoCache: function(e) {
        return Q(), di(e);
      },
      useHostTransitionStatus: gi,
      useCacheRefresh: function() {
        return x = "useCacheRefresh", be(), Ld();
      },
      useEffectEvent: function(e) {
        return x = "useEffectEvent", Q(), be(), ws(e);
      }
    }, Hi = {
      readContext: function(e) {
        return L(), jt(e);
      },
      use: function(e) {
        return Q(), qa(e);
      },
      useCallback: function(e, t) {
        return x = "useCallback", Q(), F(), ua(e, t);
      },
      useContext: function(e) {
        return x = "useContext", Q(), F(), jt(e);
      },
      useEffect: function(e, t) {
        x = "useEffect", Q(), F(), Ql(2048, mn, e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return x = "useImperativeHandle", Q(), F(), Qs(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        return x = "useInsertionEffect", Q(), F(), Ql(4, hn, e, t);
      },
      useLayoutEffect: function(e, t) {
        return x = "useLayoutEffect", Q(), F(), Ql(4, tu, e, t);
      },
      useMemo: function(e, t) {
        x = "useMemo", Q(), F();
        var a = w.H;
        w.H = Hi;
        try {
          return Kc(e, t);
        } finally {
          w.H = a;
        }
      },
      useReducer: function(e, t, a) {
        x = "useReducer", Q(), F();
        var i = w.H;
        w.H = Hi;
        try {
          return Vn(e, t, a);
        } finally {
          w.H = i;
        }
      },
      useRef: function() {
        return x = "useRef", Q(), F(), bt().memoizedState;
      },
      useState: function() {
        x = "useState", Q(), F();
        var e = w.H;
        w.H = Hi;
        try {
          return Vn(ja);
        } finally {
          w.H = e;
        }
      },
      useDebugValue: function() {
        x = "useDebugValue", Q(), F();
      },
      useDeferredValue: function(e, t) {
        return x = "useDeferredValue", Q(), F(), xe(e, t);
      },
      useTransition: function() {
        return x = "useTransition", Q(), F(), Pt();
      },
      useSyncExternalStore: function(e, t, a) {
        return x = "useSyncExternalStore", Q(), F(), Ys(
          e,
          t,
          a
        );
      },
      useId: function() {
        return x = "useId", Q(), F(), bt().memoizedState;
      },
      useFormState: function(e) {
        return x = "useFormState", Q(), F(), Po(e);
      },
      useActionState: function(e) {
        return x = "useActionState", Q(), F(), Po(e);
      },
      useOptimistic: function(e, t) {
        return x = "useOptimistic", Q(), F(), Io(e, t);
      },
      useMemoCache: function(e) {
        return Q(), di(e);
      },
      useHostTransitionStatus: gi,
      useCacheRefresh: function() {
        return x = "useCacheRefresh", F(), bt().memoizedState;
      },
      useEffectEvent: function(e) {
        return x = "useEffectEvent", Q(), F(), na(e);
      }
    }, rg = {
      readContext: function(e) {
        return L(), jt(e);
      },
      use: function(e) {
        return Q(), qa(e);
      },
      useCallback: function(e, t) {
        return x = "useCallback", Q(), F(), ua(e, t);
      },
      useContext: function(e) {
        return x = "useContext", Q(), F(), jt(e);
      },
      useEffect: function(e, t) {
        x = "useEffect", Q(), F(), Ql(2048, mn, e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return x = "useImperativeHandle", Q(), F(), Qs(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        return x = "useInsertionEffect", Q(), F(), Ql(4, hn, e, t);
      },
      useLayoutEffect: function(e, t) {
        return x = "useLayoutEffect", Q(), F(), Ql(4, tu, e, t);
      },
      useMemo: function(e, t) {
        x = "useMemo", Q(), F();
        var a = w.H;
        w.H = Hi;
        try {
          return Kc(e, t);
        } finally {
          w.H = a;
        }
      },
      useReducer: function(e, t, a) {
        x = "useReducer", Q(), F();
        var i = w.H;
        w.H = Hi;
        try {
          return ec(e, t, a);
        } finally {
          w.H = i;
        }
      },
      useRef: function() {
        return x = "useRef", Q(), F(), bt().memoizedState;
      },
      useState: function() {
        x = "useState", Q(), F();
        var e = w.H;
        w.H = Hi;
        try {
          return ec(ja);
        } finally {
          w.H = e;
        }
      },
      useDebugValue: function() {
        x = "useDebugValue", Q(), F();
      },
      useDeferredValue: function(e, t) {
        return x = "useDeferredValue", Q(), F(), _t(e, t);
      },
      useTransition: function() {
        return x = "useTransition", Q(), F(), Xd();
      },
      useSyncExternalStore: function(e, t, a) {
        return x = "useSyncExternalStore", Q(), F(), Ys(
          e,
          t,
          a
        );
      },
      useId: function() {
        return x = "useId", Q(), F(), bt().memoizedState;
      },
      useFormState: function(e) {
        return x = "useFormState", Q(), F(), nc(e);
      },
      useActionState: function(e) {
        return x = "useActionState", Q(), F(), nc(e);
      },
      useOptimistic: function(e, t) {
        return x = "useOptimistic", Q(), F(), fy(e, t);
      },
      useMemoCache: function(e) {
        return Q(), di(e);
      },
      useHostTransitionStatus: gi,
      useCacheRefresh: function() {
        return x = "useCacheRefresh", F(), bt().memoizedState;
      },
      useEffectEvent: function(e) {
        return x = "useEffectEvent", Q(), F(), na(e);
      }
    };
    var Ab = {}, Ob = /* @__PURE__ */ new Set(), zb = /* @__PURE__ */ new Set(), _b = /* @__PURE__ */ new Set(), Db = /* @__PURE__ */ new Set(), Rb = /* @__PURE__ */ new Set(), Mb = /* @__PURE__ */ new Set(), Cb = /* @__PURE__ */ new Set(), Ub = /* @__PURE__ */ new Set(), Hb = /* @__PURE__ */ new Set(), Nb = /* @__PURE__ */ new Set();
    Object.freeze(Ab);
    var XS = {
      enqueueSetState: function(e, t, a) {
        e = e._reactInternals;
        var i = Jl(e), o = Tu(i);
        o.payload = t, a != null && (af(a), o.callback = a), t = pa(e, o, i), t !== null && (Gn(i, "this.setState()", e), el(t, e, i), $o(t, e, i));
      },
      enqueueReplaceState: function(e, t, a) {
        e = e._reactInternals;
        var i = Jl(e), o = Tu(i);
        o.tag = yb, o.payload = t, a != null && (af(a), o.callback = a), t = pa(e, o, i), t !== null && (Gn(i, "this.replaceState()", e), el(t, e, i), $o(t, e, i));
      },
      enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var a = Jl(e), i = Tu(a);
        i.tag = pb, t != null && (af(t), i.callback = t), t = pa(e, i, a), t !== null && (Gn(a, "this.forceUpdate()", e), el(t, e, a), $o(t, e, a));
      }
    }, gm = null, QS = null, LS = Error(
      "This is not a real error. It's an implementation detail of React's selective hydration feature. If this leaks into userspace, it's a bug in React. Please file an issue."
    ), Bl = !1, Bb = {}, Yb = {}, qb = {}, jb = {}, Sm = !1, xb = {}, dg = {}, VS = {
      dehydrated: null,
      treeContext: null,
      retryLane: 0,
      hydrationErrors: null
    }, Gb = !1, wb = null;
    wb = /* @__PURE__ */ new Set();
    var Ro = !1, Yl = !1, ZS = !1, Xb = typeof WeakSet == "function" ? WeakSet : Set, ra = null, bm = null, Em = null, ql = null, Yn = !1, Ni = null, Il = !1, i0 = 8192, $T = {
      getCacheForType: function(e) {
        var t = jt(Ul), a = t.data.get(e);
        return a === void 0 && (a = e(), t.data.set(e, a)), a;
      },
      cacheSignal: function() {
        return jt(Ul).controller.signal;
      },
      getOwner: function() {
        return on;
      }
    };
    if (typeof Symbol == "function" && Symbol.for) {
      var c0 = Symbol.for;
      c0("selector.component"), c0("selector.has_pseudo_class"), c0("selector.role"), c0("selector.test_id"), c0("selector.text");
    }
    var kT = [], WT = typeof WeakMap == "function" ? WeakMap : Map, da = 0, Pl = 2, lu = 4, Mo = 0, o0 = 1, Fr = 2, hg = 3, wf = 4, mg = 6, Qb = 5, yt = da, Xt = null, Fe = null, $e = 0, qn = 0, yg = 1, Ir = 2, f0 = 3, Lb = 4, JS = 5, s0 = 6, pg = 7, KS = 8, Pr = 9, Nt = qn, au = null, Xf = !1, Tm = !1, $S = !1, bc = 0, dl = Mo, Qf = 0, Lf = 0, kS = 0, jn = 0, ed = 0, r0 = null, yn = null, vg = !1, gg = 0, Vb = 0, Zb = 300, Sg = 1 / 0, Jb = 500, d0 = null, bl = null, Vf = null, bg = 0, WS = 1, FS = 2, Kb = 3, Zf = 0, $b = 1, kb = 2, Wb = 3, Fb = 4, Eg = 5, jl = 0, Jf = null, Am = null, Bi = 0, IS = 0, PS = -0, e1 = null, Ib = null, Pb = null, Yi = bg, eE = null, FT = 50, h0 = 0, t1 = null, l1 = !1, Tg = !1, IT = 50, td = 0, m0 = null, Om = !1, Ag = null, tE = !1, lE = /* @__PURE__ */ new Set(), PT = {}, Og = null, zm = null, a1 = !1, n1 = !1, zg = !1, u1 = !1, Kf = 0, i1 = {};
    (function() {
      for (var e = 0; e < vS.length; e++) {
        var t = vS[e], a = t.toLowerCase();
        t = t[0].toUpperCase() + t.slice(1), Sn(a, "on" + t);
      }
      Sn(H1, "onAnimationEnd"), Sn(N1, "onAnimationIteration"), Sn(B1, "onAnimationStart"), Sn("dblclick", "onDoubleClick"), Sn("focusin", "onFocus"), Sn("focusout", "onBlur"), Sn(RT, "onTransitionRun"), Sn(MT, "onTransitionStart"), Sn(CT, "onTransitionCancel"), Sn(Y1, "onTransitionEnd");
    })(), Be("onMouseEnter", ["mouseout", "mouseover"]), Be("onMouseLeave", ["mouseout", "mouseover"]), Be("onPointerEnter", ["pointerout", "pointerover"]), Be("onPointerLeave", ["pointerout", "pointerover"]), ct(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ), ct(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ), ct("onBeforeInput", [
      "compositionend",
      "keypress",
      "textInput",
      "paste"
    ]), ct(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ), ct(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ), ct(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
    var y0 = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ), c1 = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(y0)
    ), _g = "_reactListening" + Math.random().toString(36).slice(2), aE = !1, nE = !1, Dg = !1, uE = !1, Rg = !1, Mg = !1, iE = !1, Cg = {}, eA = /\r\n?/g, tA = /\u0000|\uFFFD/g, ld = "http://www.w3.org/1999/xlink", o1 = "http://www.w3.org/XML/1998/namespace", lA = "javascript:throw new Error('React form unexpectedly submitted.')", aA = "suppressHydrationWarning", ad = "&", Ug = "/&", p0 = "$", v0 = "/$", $f = "$?", nd = "$~", _m = "$!", nA = "html", uA = "body", iA = "head", f1 = "F!", cE = "F", oE = "loading", cA = "style", Co = 0, Dm = 1, Hg = 2, s1 = null, r1 = null, fE = { dialog: !0, webview: !0 }, d1 = null, g0 = void 0, sE = typeof setTimeout == "function" ? setTimeout : void 0, oA = typeof clearTimeout == "function" ? clearTimeout : void 0, ud = -1, rE = typeof Promise == "function" ? Promise : void 0, fA = typeof queueMicrotask == "function" ? queueMicrotask : typeof rE < "u" ? function(e) {
      return rE.resolve(null).then(e).catch(yv);
    } : sE, h1 = null, id = 0, S0 = 1, dE = 2, hE = 3, li = 4, ai = /* @__PURE__ */ new Map(), mE = /* @__PURE__ */ new Set(), Uo = Tt.d;
    Tt.d = {
      f: function() {
        var e = Uo.f(), t = lo();
        return e || t;
      },
      r: function(e) {
        var t = le(e);
        t !== null && t.tag === 5 && t.type === "form" ? $c(t) : Uo.r(e);
      },
      D: function(e) {
        Uo.D(e), op("dns-prefetch", e, null);
      },
      C: function(e, t) {
        Uo.C(e, t), op("preconnect", e, t);
      },
      L: function(e, t, a) {
        Uo.L(e, t, a);
        var i = Rm;
        if (i && e && t) {
          var o = 'link[rel="preload"][as="' + Lt(t) + '"]';
          t === "image" && a && a.imageSrcSet ? (o += '[imagesrcset="' + Lt(
            a.imageSrcSet
          ) + '"]', typeof a.imageSizes == "string" && (o += '[imagesizes="' + Lt(
            a.imageSizes
          ) + '"]')) : o += '[href="' + Lt(e) + '"]';
          var f = o;
          switch (t) {
            case "style":
              f = gf(e);
              break;
            case "script":
              f = Sf(e);
          }
          ai.has(f) || (e = Ve(
            {
              rel: "preload",
              href: t === "image" && a && a.imageSrcSet ? void 0 : e,
              as: t
            },
            a
          ), ai.set(f, e), i.querySelector(o) !== null || t === "style" && i.querySelector(
            fo(f)
          ) || t === "script" && i.querySelector(so(f)) || (t = i.createElement("link"), ot(t, "link", e), ye(t), i.head.appendChild(t)));
        }
      },
      m: function(e, t) {
        Uo.m(e, t);
        var a = Rm;
        if (a && e) {
          var i = t && typeof t.as == "string" ? t.as : "script", o = 'link[rel="modulepreload"][as="' + Lt(i) + '"][href="' + Lt(e) + '"]', f = o;
          switch (i) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
              f = Sf(e);
          }
          if (!ai.has(f) && (e = Ve({ rel: "modulepreload", href: e }, t), ai.set(f, e), a.querySelector(o) === null)) {
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
            i = a.createElement("link"), ot(i, "link", e), ye(i), a.head.appendChild(i);
          }
        }
      },
      X: function(e, t) {
        Uo.X(e, t);
        var a = Rm;
        if (a && e) {
          var i = Me(a).hoistableScripts, o = Sf(e), f = i.get(o);
          f || (f = a.querySelector(
            so(o)
          ), f || (e = Ve({ src: e, async: !0 }, t), (t = ai.get(o)) && ro(e, t), f = a.createElement("script"), ye(f), ot(f, "link", e), a.head.appendChild(f)), f = {
            type: "script",
            instance: f,
            count: 1,
            state: null
          }, i.set(o, f));
        }
      },
      S: function(e, t, a) {
        Uo.S(e, t, a);
        var i = Rm;
        if (i && e) {
          var o = Me(i).hoistableStyles, f = gf(e);
          t = t || "default";
          var d = o.get(f);
          if (!d) {
            var h = { loading: id, preload: null };
            if (d = i.querySelector(
              fo(f)
            ))
              h.loading = S0 | li;
            else {
              e = Ve(
                {
                  rel: "stylesheet",
                  href: e,
                  "data-precedence": t
                },
                a
              ), (a = ai.get(f)) && rp(e, a);
              var y = d = i.createElement("link");
              ye(y), ot(y, "link", e), y._p = new Promise(function(p, _) {
                y.onload = p, y.onerror = _;
              }), y.addEventListener("load", function() {
                h.loading |= S0;
              }), y.addEventListener("error", function() {
                h.loading |= dE;
              }), h.loading |= li, Dh(d, t, i);
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
        Uo.M(e, t);
        var a = Rm;
        if (a && e) {
          var i = Me(a).hoistableScripts, o = Sf(e), f = i.get(o);
          f || (f = a.querySelector(
            so(o)
          ), f || (e = Ve({ src: e, async: !0, type: "module" }, t), (t = ai.get(o)) && ro(e, t), f = a.createElement("script"), ye(f), ot(f, "link", e), a.head.appendChild(f)), f = {
            type: "script",
            instance: f,
            count: 1,
            state: null
          }, i.set(o, f));
        }
      }
    };
    var Rm = typeof document > "u" ? null : document, Ng = null, sA = 6e4, rA = 800, dA = 500, m1 = 0, y1 = null, Bg = null, cd = nS, b0 = {
      $$typeof: Wn,
      Provider: null,
      Consumer: null,
      _currentValue: cd,
      _currentValue2: cd,
      _threadCount: 0
    }, yE = "%c%s%c", pE = "background: #e6e6e6;background: light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.25));color: #000000;color: light-dark(#000000, #ffffff);border-radius: 2px", vE = "", Yg = " ", hA = Function.prototype.bind, gE = !1, SE = null, bE = null, EE = null, TE = null, AE = null, OE = null, zE = null, _E = null, DE = null, RE = null;
    SE = function(e, t, a, i) {
      t = te(e, t), t !== null && (a = Ce(t.memoizedState, a, 0, i), t.memoizedState = a, t.baseState = a, e.memoizedProps = Ve({}, e.memoizedProps), a = Xl(e, 2), a !== null && el(a, e, 2));
    }, bE = function(e, t, a) {
      t = te(e, t), t !== null && (a = Ne(t.memoizedState, a, 0), t.memoizedState = a, t.baseState = a, e.memoizedProps = Ve({}, e.memoizedProps), a = Xl(e, 2), a !== null && el(a, e, 2));
    }, EE = function(e, t, a, i) {
      t = te(e, t), t !== null && (a = j(t.memoizedState, a, i), t.memoizedState = a, t.baseState = a, e.memoizedProps = Ve({}, e.memoizedProps), a = Xl(e, 2), a !== null && el(a, e, 2));
    }, TE = function(e, t, a) {
      e.pendingProps = Ce(e.memoizedProps, t, 0, a), e.alternate && (e.alternate.pendingProps = e.pendingProps), t = Xl(e, 2), t !== null && el(t, e, 2);
    }, AE = function(e, t) {
      e.pendingProps = Ne(e.memoizedProps, t, 0), e.alternate && (e.alternate.pendingProps = e.pendingProps), t = Xl(e, 2), t !== null && el(t, e, 2);
    }, OE = function(e, t, a) {
      e.pendingProps = j(
        e.memoizedProps,
        t,
        a
      ), e.alternate && (e.alternate.pendingProps = e.pendingProps), t = Xl(e, 2), t !== null && el(t, e, 2);
    }, zE = function(e) {
      var t = Xl(e, 2);
      t !== null && el(t, e, 2);
    }, _E = function(e) {
      var t = Bo(), a = Xl(e, t);
      a !== null && el(a, e, t);
    }, DE = function(e) {
      Ot = e;
    }, RE = function(e) {
      Ge = e;
    };
    var qg = !0, jg = null, p1 = !1, kf = null, Wf = null, Ff = null, E0 = /* @__PURE__ */ new Map(), T0 = /* @__PURE__ */ new Map(), If = [], mA = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
      " "
    ), xg = null;
    if (Rr.prototype.render = Qu.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null) throw Error("Cannot update an unmounted root.");
      var a = arguments;
      typeof a[1] == "function" ? console.error(
        "does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."
      ) : Ie(a[1]) ? console.error(
        "You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root."
      ) : typeof a[1] < "u" && console.error(
        "You passed a second argument to root.render(...) but it only accepts one argument."
      ), a = e;
      var i = t.current, o = Jl(i);
      yp(i, o, a, t, null, null);
    }, Rr.prototype.unmount = Qu.prototype.unmount = function() {
      var e = arguments;
      if (typeof e[0] == "function" && console.error(
        "does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."
      ), e = this._internalRoot, e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        (yt & (Pl | lu)) !== da && console.error(
          "Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."
        ), yp(e.current, 2, null, e, null, null), lo(), t[Bn] = null;
      }
    }, Rr.prototype.unstable_scheduleHydration = function(e) {
      if (e) {
        var t = wi();
        e = { blockedOn: null, target: e, priority: t };
        for (var a = 0; a < If.length && t !== 0 && t < If[a].priority; a++) ;
        If.splice(a, 0, e), a === 0 && Bh(e);
      }
    }, (function() {
      var e = Ep.version;
      if (e !== "19.2.3")
        throw Error(
          `Incompatible React versions: The "react" and "react-dom" packages must have the exact same version. Instead got:
  - react:      ` + (e + `
  - react-dom:  19.2.3
Learn more: https://react.dev/warnings/version-mismatch`)
        );
    })(), typeof Map == "function" && Map.prototype != null && typeof Map.prototype.forEach == "function" && typeof Set == "function" && Set.prototype != null && typeof Set.prototype.clear == "function" && typeof Set.prototype.forEach == "function" || console.error(
      "React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://react.dev/link/react-polyfills"
    ), Tt.findDOMNode = function(e) {
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function" ? Error("Unable to find node on an unmounted component.") : (e = Object.keys(e).join(","), Error(
          "Argument appears to not be a ReactComponent. Keys: " + e
        ));
      return e = Yt(t), e = e !== null ? je(e) : null, e = e === null ? null : e.stateNode, e;
    }, !(function() {
      var e = {
        bundleType: 1,
        version: "19.2.3",
        rendererPackageName: "react-dom",
        currentDispatcherRef: w,
        reconcilerVersion: "19.2.3"
      };
      return e.overrideHookState = SE, e.overrideHookStateDeletePath = bE, e.overrideHookStateRenamePath = EE, e.overrideProps = TE, e.overridePropsDeletePath = AE, e.overridePropsRenamePath = OE, e.scheduleUpdate = zE, e.scheduleRetry = _E, e.setErrorHandler = DE, e.setSuspenseHandler = RE, e.scheduleRefresh = we, e.scheduleRoot = ce, e.setRefreshHandler = ll, e.getCurrentFiber = vp, Pf(e);
    })() && pc && window.top === window.self && (-1 < navigator.userAgent.indexOf("Chrome") && navigator.userAgent.indexOf("Edge") === -1 || -1 < navigator.userAgent.indexOf("Firefox"))) {
      var ME = window.location.protocol;
      /^(https?|file):$/.test(ME) && console.info(
        "%cDownload the React DevTools for a better development experience: https://react.dev/link/react-devtools" + (ME === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://react.dev/link/react-devtools-faq` : ""),
        "font-weight:bold"
      );
    }
    _0.createRoot = function(e, t) {
      if (!Ie(e))
        throw Error("Target container is not a DOM element.");
      bp(e);
      var a = !1, i = "", o = Zd, f = my, d = yy;
      return t != null && (t.hydrate ? console.warn(
        "hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead."
      ) : typeof t == "object" && t !== null && t.$$typeof === Cn && console.error(
        `You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`
      ), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (i = t.identifierPrefix), t.onUncaughtError !== void 0 && (o = t.onUncaughtError), t.onCaughtError !== void 0 && (f = t.onCaughtError), t.onRecoverableError !== void 0 && (d = t.onRecoverableError)), t = Mv(
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
        Bv
      ), e[Bn] = t.current, hr(e), new Qu(t);
    }, _0.hydrateRoot = function(e, t, a) {
      if (!Ie(e))
        throw Error("Target container is not a DOM element.");
      bp(e), t === void 0 && console.error(
        "Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)"
      );
      var i = !1, o = "", f = Zd, d = my, h = yy, y = null;
      return a != null && (a.unstable_strictMode === !0 && (i = !0), a.identifierPrefix !== void 0 && (o = a.identifierPrefix), a.onUncaughtError !== void 0 && (f = a.onUncaughtError), a.onCaughtError !== void 0 && (d = a.onCaughtError), a.onRecoverableError !== void 0 && (h = a.onRecoverableError), a.formState !== void 0 && (y = a.formState)), t = Mv(
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
        Bv
      ), t.context = mp(null), a = t.current, i = Jl(a), i = pl(i), o = Tu(i), o.callback = null, pa(a, o, i), Gn(i, "hydrateRoot()", null), a = i, t.current.lanes = a, Gi(t, a), Ea(t), e[Bn] = t.current, hr(e), new Rr(t);
    }, _0.version = "19.2.3", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  })(), _0;
}
var VE;
function DA() {
  if (VE) return Xg.exports;
  VE = 1;
  var W = {};
  function te() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
      if (W.NODE_ENV !== "production")
        throw new Error("^_^");
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(te);
      } catch (Ce) {
        console.error(Ce);
      }
    }
  }
  return W.NODE_ENV === "production" ? (te(), Xg.exports = zA()) : Xg.exports = _A(), Xg.exports;
}
var RA = DA();
const MA = /* @__PURE__ */ ZE(RA);
var CA = Mm();
const UA = /* @__PURE__ */ ZE(CA), HA = ({ config: W }) => {
  const [te, Ce] = UA.useState(!1);
  return /* @__PURE__ */ R0.jsxs(R0.Fragment, { children: [
    /* @__PURE__ */ R0.jsx(
      "div",
      {
        onClick: () => Ce(!te),
        style: {
          position: "fixed",
          bottom: 20,
          right: 20,
          width: 56,
          height: 56,
          borderRadius: "50%",
          background: W.primaryColor || "#4f46e5",
          cursor: "pointer"
        }
      }
    ),
    te && /* @__PURE__ */ R0.jsx("div", { style: {
      position: "fixed",
      bottom: 90,
      right: 20,
      width: 320,
      height: 420,
      background: "#fff",
      borderRadius: 12
    }, children: W.greeting })
  ] });
};
function NA(W) {
  const te = document.createElement("div");
  te.id = "chatbot-widget-root", document.body.appendChild(te), MA.createRoot(te).render(
    /* @__PURE__ */ R0.jsx(HA, { config: W })
  );
}
export {
  NA as init
};
