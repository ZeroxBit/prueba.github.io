function sc(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const l in r)
        if (l !== "default" && !(l in e)) {
          const o = Object.getOwnPropertyDescriptor(r, l);
          o && Object.defineProperty(e, l, o.get ? o : { enumerable: !0, get: () => r[l] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const o of l) if (o.type === "childList") for (const i of o.addedNodes) i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const o = {};
    return (
      l.integrity && (o.integrity = l.integrity),
      l.referrerPolicy && (o.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : l.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const o = n(l);
    fetch(l.href, o);
  }
})();
function cc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var dc = { exports: {} },
  xo = {},
  fc = { exports: {} },
  K = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var cl = Symbol.for("react.element"),
  cp = Symbol.for("react.portal"),
  dp = Symbol.for("react.fragment"),
  fp = Symbol.for("react.strict_mode"),
  pp = Symbol.for("react.profiler"),
  hp = Symbol.for("react.provider"),
  mp = Symbol.for("react.context"),
  vp = Symbol.for("react.forward_ref"),
  gp = Symbol.for("react.suspense"),
  yp = Symbol.for("react.memo"),
  wp = Symbol.for("react.lazy"),
  ju = Symbol.iterator;
function Sp(e) {
  return e === null || typeof e != "object" ? null : ((e = (ju && e[ju]) || e["@@iterator"]), typeof e == "function" ? e : null);
}
var pc = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  hc = Object.assign,
  mc = {};
function ar(e, t, n) {
  (this.props = e), (this.context = t), (this.refs = mc), (this.updater = n || pc);
}
ar.prototype.isReactComponent = {};
ar.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
ar.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function vc() {}
vc.prototype = ar.prototype;
function xa(e, t, n) {
  (this.props = e), (this.context = t), (this.refs = mc), (this.updater = n || pc);
}
var Ea = (xa.prototype = new vc());
Ea.constructor = xa;
hc(Ea, ar.prototype);
Ea.isPureReactComponent = !0;
var Tu = Array.isArray,
  gc = Object.prototype.hasOwnProperty,
  Ca = { current: null },
  yc = { key: !0, ref: !0, __self: !0, __source: !0 };
function wc(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  if (t != null) for (r in (t.ref !== void 0 && (i = t.ref), t.key !== void 0 && (o = "" + t.key), t)) gc.call(t, r) && !yc.hasOwnProperty(r) && (l[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) l.children = n;
  else if (1 < a) {
    for (var u = Array(a), s = 0; s < a; s++) u[s] = arguments[s + 2];
    l.children = u;
  }
  if (e && e.defaultProps) for (r in ((a = e.defaultProps), a)) l[r] === void 0 && (l[r] = a[r]);
  return { $$typeof: cl, type: e, key: o, ref: i, props: l, _owner: Ca.current };
}
function _p(e, t) {
  return { $$typeof: cl, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function ka(e) {
  return typeof e == "object" && e !== null && e.$$typeof === cl;
}
function xp(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Du = /\/+/g;
function Xo(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? xp("" + e.key) : t.toString(36);
}
function Il(e, t, n, r, l) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (o) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case cl:
          case cp:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (l = l(i)),
      (e = r === "" ? "." + Xo(i, 0) : r),
      Tu(l)
        ? ((n = ""),
          e != null && (n = e.replace(Du, "$&/") + "/"),
          Il(l, t, n, "", function (s) {
            return s;
          }))
        : l != null && (ka(l) && (l = _p(l, n + (!l.key || (i && i.key === l.key) ? "" : ("" + l.key).replace(Du, "$&/") + "/") + e)), t.push(l)),
      1
    );
  if (((i = 0), (r = r === "" ? "." : r + ":"), Tu(e)))
    for (var a = 0; a < e.length; a++) {
      o = e[a];
      var u = r + Xo(o, a);
      i += Il(o, t, n, u, l);
    }
  else if (((u = Sp(e)), typeof u == "function"))
    for (e = u.call(e), a = 0; !(o = e.next()).done; ) (o = o.value), (u = r + Xo(o, a++)), (i += Il(o, t, n, u, l));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return i;
}
function Sl(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    Il(e, r, "", "", function (o) {
      return t.call(n, o, l++);
    }),
    r
  );
}
function Ep(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) && ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) && ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Oe = { current: null },
  Ul = { transition: null },
  Cp = { ReactCurrentDispatcher: Oe, ReactCurrentBatchConfig: Ul, ReactCurrentOwner: Ca };
K.Children = {
  map: Sl,
  forEach: function (e, t, n) {
    Sl(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Sl(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Sl(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!ka(e)) throw Error("React.Children.only expected to receive a single React element child.");
    return e;
  },
};
K.Component = ar;
K.Fragment = dp;
K.Profiler = pp;
K.PureComponent = xa;
K.StrictMode = fp;
K.Suspense = gp;
K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Cp;
K.cloneElement = function (e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = hc({}, e.props),
    l = e.key,
    o = e.ref,
    i = e._owner;
  if (t != null) {
    if ((t.ref !== void 0 && ((o = t.ref), (i = Ca.current)), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps)) var a = e.type.defaultProps;
    for (u in t) gc.call(t, u) && !yc.hasOwnProperty(u) && (r[u] = t[u] === void 0 && a !== void 0 ? a[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    a = Array(u);
    for (var s = 0; s < u; s++) a[s] = arguments[s + 2];
    r.children = a;
  }
  return { $$typeof: cl, type: e.type, key: l, ref: o, props: r, _owner: i };
};
K.createContext = function (e) {
  return (
    (e = { $$typeof: mp, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }),
    (e.Provider = { $$typeof: hp, _context: e }),
    (e.Consumer = e)
  );
};
K.createElement = wc;
K.createFactory = function (e) {
  var t = wc.bind(null, e);
  return (t.type = e), t;
};
K.createRef = function () {
  return { current: null };
};
K.forwardRef = function (e) {
  return { $$typeof: vp, render: e };
};
K.isValidElement = ka;
K.lazy = function (e) {
  return { $$typeof: wp, _payload: { _status: -1, _result: e }, _init: Ep };
};
K.memo = function (e, t) {
  return { $$typeof: yp, type: e, compare: t === void 0 ? null : t };
};
K.startTransition = function (e) {
  var t = Ul.transition;
  Ul.transition = {};
  try {
    e();
  } finally {
    Ul.transition = t;
  }
};
K.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
K.useCallback = function (e, t) {
  return Oe.current.useCallback(e, t);
};
K.useContext = function (e) {
  return Oe.current.useContext(e);
};
K.useDebugValue = function () {};
K.useDeferredValue = function (e) {
  return Oe.current.useDeferredValue(e);
};
K.useEffect = function (e, t) {
  return Oe.current.useEffect(e, t);
};
K.useId = function () {
  return Oe.current.useId();
};
K.useImperativeHandle = function (e, t, n) {
  return Oe.current.useImperativeHandle(e, t, n);
};
K.useInsertionEffect = function (e, t) {
  return Oe.current.useInsertionEffect(e, t);
};
K.useLayoutEffect = function (e, t) {
  return Oe.current.useLayoutEffect(e, t);
};
K.useMemo = function (e, t) {
  return Oe.current.useMemo(e, t);
};
K.useReducer = function (e, t, n) {
  return Oe.current.useReducer(e, t, n);
};
K.useRef = function (e) {
  return Oe.current.useRef(e);
};
K.useState = function (e) {
  return Oe.current.useState(e);
};
K.useSyncExternalStore = function (e, t, n) {
  return Oe.current.useSyncExternalStore(e, t, n);
};
K.useTransition = function () {
  return Oe.current.useTransition();
};
K.version = "18.2.0";
fc.exports = K;
var E = fc.exports;
const Sc = cc(E),
  kp = sc({ __proto__: null, default: Sc }, [E]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Pp = E,
  Np = Symbol.for("react.element"),
  Rp = Symbol.for("react.fragment"),
  Lp = Object.prototype.hasOwnProperty,
  jp = Pp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Tp = { key: !0, ref: !0, __self: !0, __source: !0 };
function _c(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (i = t.ref);
  for (r in t) Lp.call(t, r) && !Tp.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps) for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return { $$typeof: Np, type: e, key: o, ref: i, props: l, _owner: jp.current };
}
xo.Fragment = Rp;
xo.jsx = _c;
xo.jsxs = _c;
dc.exports = xo;
var v = dc.exports,
  Ci = {},
  xc = { exports: {} },
  Ye = {},
  Ec = { exports: {} },
  Cc = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(D, A) {
    var B = D.length;
    D.push(A);
    e: for (; 0 < B; ) {
      var X = (B - 1) >>> 1,
        ee = D[X];
      if (0 < l(ee, A)) (D[X] = A), (D[B] = ee), (B = X);
      else break e;
    }
  }
  function n(D) {
    return D.length === 0 ? null : D[0];
  }
  function r(D) {
    if (D.length === 0) return null;
    var A = D[0],
      B = D.pop();
    if (B !== A) {
      D[0] = B;
      e: for (var X = 0, ee = D.length, pt = ee >>> 1; X < pt; ) {
        var Ee = 2 * (X + 1) - 1,
          lt = D[Ee],
          De = Ee + 1,
          zt = D[De];
        if (0 > l(lt, B)) De < ee && 0 > l(zt, lt) ? ((D[X] = zt), (D[De] = B), (X = De)) : ((D[X] = lt), (D[Ee] = B), (X = Ee));
        else if (De < ee && 0 > l(zt, B)) (D[X] = zt), (D[De] = B), (X = De);
        else break e;
      }
    }
    return A;
  }
  function l(D, A) {
    var B = D.sortIndex - A.sortIndex;
    return B !== 0 ? B : D.id - A.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var i = Date,
      a = i.now();
    e.unstable_now = function () {
      return i.now() - a;
    };
  }
  var u = [],
    s = [],
    c = 1,
    h = null,
    p = 3,
    x = !1,
    _ = !1,
    S = !1,
    N = typeof setTimeout == "function" ? setTimeout : null,
    f = typeof clearTimeout == "function" ? clearTimeout : null,
    d = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(D) {
    for (var A = n(s); A !== null; ) {
      if (A.callback === null) r(s);
      else if (A.startTime <= D) r(s), (A.sortIndex = A.expirationTime), t(u, A);
      else break;
      A = n(s);
    }
  }
  function C(D) {
    if (((S = !1), m(D), !_))
      if (n(u) !== null) (_ = !0), Mt(L);
      else {
        var A = n(s);
        A !== null && re(C, A.startTime - D);
      }
  }
  function L(D, A) {
    (_ = !1), S && ((S = !1), f(j), (j = -1)), (x = !0);
    var B = p;
    try {
      for (m(A), h = n(u); h !== null && (!(h.expirationTime > A) || (D && !V())); ) {
        var X = h.callback;
        if (typeof X == "function") {
          (h.callback = null), (p = h.priorityLevel);
          var ee = X(h.expirationTime <= A);
          (A = e.unstable_now()), typeof ee == "function" ? (h.callback = ee) : h === n(u) && r(u), m(A);
        } else r(u);
        h = n(u);
      }
      if (h !== null) var pt = !0;
      else {
        var Ee = n(s);
        Ee !== null && re(C, Ee.startTime - A), (pt = !1);
      }
      return pt;
    } finally {
      (h = null), (p = B), (x = !1);
    }
  }
  var g = !1,
    k = null,
    j = -1,
    M = 5,
    O = -1;
  function V() {
    return !(e.unstable_now() - O < M);
  }
  function fe() {
    if (k !== null) {
      var D = e.unstable_now();
      O = D;
      var A = !0;
      try {
        A = k(!0, D);
      } finally {
        A ? me() : ((g = !1), (k = null));
      }
    } else g = !1;
  }
  var me;
  if (typeof d == "function")
    me = function () {
      d(fe);
    };
  else if (typeof MessageChannel < "u") {
    var Xe = new MessageChannel(),
      Nn = Xe.port2;
    (Xe.port1.onmessage = fe),
      (me = function () {
        Nn.postMessage(null);
      });
  } else
    me = function () {
      N(fe, 0);
    };
  function Mt(D) {
    (k = D), g || ((g = !0), me());
  }
  function re(D, A) {
    j = N(function () {
      D(e.unstable_now());
    }, A);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (D) {
      D.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      _ || x || ((_ = !0), Mt(L));
    }),
    (e.unstable_forceFrameRate = function (D) {
      0 > D || 125 < D
        ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported")
        : (M = 0 < D ? Math.floor(1e3 / D) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return p;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(u);
    }),
    (e.unstable_next = function (D) {
      switch (p) {
        case 1:
        case 2:
        case 3:
          var A = 3;
          break;
        default:
          A = p;
      }
      var B = p;
      p = A;
      try {
        return D();
      } finally {
        p = B;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (D, A) {
      switch (D) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          D = 3;
      }
      var B = p;
      p = D;
      try {
        return A();
      } finally {
        p = B;
      }
    }),
    (e.unstable_scheduleCallback = function (D, A, B) {
      var X = e.unstable_now();
      switch ((typeof B == "object" && B !== null ? ((B = B.delay), (B = typeof B == "number" && 0 < B ? X + B : X)) : (B = X), D)) {
        case 1:
          var ee = -1;
          break;
        case 2:
          ee = 250;
          break;
        case 5:
          ee = 1073741823;
          break;
        case 4:
          ee = 1e4;
          break;
        default:
          ee = 5e3;
      }
      return (
        (ee = B + ee),
        (D = { id: c++, callback: A, priorityLevel: D, startTime: B, expirationTime: ee, sortIndex: -1 }),
        B > X
          ? ((D.sortIndex = B), t(s, D), n(u) === null && D === n(s) && (S ? (f(j), (j = -1)) : (S = !0), re(C, B - X)))
          : ((D.sortIndex = ee), t(u, D), _ || x || ((_ = !0), Mt(L))),
        D
      );
    }),
    (e.unstable_shouldYield = V),
    (e.unstable_wrapCallback = function (D) {
      var A = p;
      return function () {
        var B = p;
        p = A;
        try {
          return D.apply(this, arguments);
        } finally {
          p = B;
        }
      };
    });
})(Cc);
Ec.exports = Cc;
var Dp = Ec.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var kc = E,
  Ke = Dp;
function R(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Pc = new Set(),
  Vr = {};
function kn(e, t) {
  bn(e, t), bn(e + "Capture", t);
}
function bn(e, t) {
  for (Vr[e] = t, e = 0; e < t.length; e++) Pc.add(t[e]);
}
var Pt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
  ki = Object.prototype.hasOwnProperty,
  Mp =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Mu = {},
  zu = {};
function zp(e) {
  return ki.call(zu, e) ? !0 : ki.call(Mu, e) ? !1 : Mp.test(e) ? (zu[e] = !0) : ((Mu[e] = !0), !1);
}
function Op(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r ? !1 : n !== null ? !n.acceptsBooleans : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Fp(e, t, n, r) {
  if (t === null || typeof t > "u" || Op(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Fe(e, t, n, r, l, o, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = i);
}
var Ne = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Ne[e] = new Fe(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Ne[t] = new Fe(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Ne[e] = new Fe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (e) {
  Ne[e] = new Fe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Ne[e] = new Fe(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Ne[e] = new Fe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Ne[e] = new Fe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Ne[e] = new Fe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Ne[e] = new Fe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Pa = /[\-:]([a-z])/g;
function Na(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Pa, Na);
    Ne[t] = new Fe(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (e) {
  var t = e.replace(Pa, Na);
  Ne[t] = new Fe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Pa, Na);
  Ne[t] = new Fe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Ne[e] = new Fe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ne.xlinkHref = new Fe("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function (e) {
  Ne[e] = new Fe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Ra(e, t, n, r) {
  var l = Ne.hasOwnProperty(t) ? Ne[t] : null;
  (l !== null ? l.type !== 0 : r || !(2 < t.length) || (t[0] !== "o" && t[0] !== "O") || (t[1] !== "n" && t[1] !== "N")) &&
    (Fp(t, n, l, r) && (n = null),
    r || l === null
      ? zp(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : l.mustUseProperty
      ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
      : ((t = l.attributeName),
        (r = l.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((l = l.type), (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n), r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var jt = kc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  _l = Symbol.for("react.element"),
  Mn = Symbol.for("react.portal"),
  zn = Symbol.for("react.fragment"),
  La = Symbol.for("react.strict_mode"),
  Pi = Symbol.for("react.profiler"),
  Nc = Symbol.for("react.provider"),
  Rc = Symbol.for("react.context"),
  ja = Symbol.for("react.forward_ref"),
  Ni = Symbol.for("react.suspense"),
  Ri = Symbol.for("react.suspense_list"),
  Ta = Symbol.for("react.memo"),
  $t = Symbol.for("react.lazy"),
  Lc = Symbol.for("react.offscreen"),
  Ou = Symbol.iterator;
function vr(e) {
  return e === null || typeof e != "object" ? null : ((e = (Ou && e[Ou]) || e["@@iterator"]), typeof e == "function" ? e : null);
}
var ue = Object.assign,
  Zo;
function Lr(e) {
  if (Zo === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Zo = (t && t[1]) || "";
    }
  return (
    `
` +
    Zo +
    e
  );
}
var Jo = !1;
function qo(e, t) {
  if (!e || Jo) return "";
  Jo = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (s) {
          var r = s;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (s) {
          r = s;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (s) {
        r = s;
      }
      e();
    }
  } catch (s) {
    if (s && r && typeof s.stack == "string") {
      for (
        var l = s.stack.split(`
`),
          o = r.stack.split(`
`),
          i = l.length - 1,
          a = o.length - 1;
        1 <= i && 0 <= a && l[i] !== o[a];

      )
        a--;
      for (; 1 <= i && 0 <= a; i--, a--)
        if (l[i] !== o[a]) {
          if (i !== 1 || a !== 1)
            do
              if ((i--, a--, 0 > a || l[i] !== o[a])) {
                var u =
                  `
` + l[i].replace(" at new ", " at ");
                return e.displayName && u.includes("<anonymous>") && (u = u.replace("<anonymous>", e.displayName)), u;
              }
            while (1 <= i && 0 <= a);
          break;
        }
    }
  } finally {
    (Jo = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Lr(e) : "";
}
function Ip(e) {
  switch (e.tag) {
    case 5:
      return Lr(e.type);
    case 16:
      return Lr("Lazy");
    case 13:
      return Lr("Suspense");
    case 19:
      return Lr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = qo(e.type, !1)), e;
    case 11:
      return (e = qo(e.type.render, !1)), e;
    case 1:
      return (e = qo(e.type, !0)), e;
    default:
      return "";
  }
}
function Li(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case zn:
      return "Fragment";
    case Mn:
      return "Portal";
    case Pi:
      return "Profiler";
    case La:
      return "StrictMode";
    case Ni:
      return "Suspense";
    case Ri:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Rc:
        return (e.displayName || "Context") + ".Consumer";
      case Nc:
        return (e._context.displayName || "Context") + ".Provider";
      case ja:
        var t = e.render;
        return (e = e.displayName), e || ((e = t.displayName || t.name || ""), (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")), e;
      case Ta:
        return (t = e.displayName || null), t !== null ? t : Li(e.type) || "Memo";
      case $t:
        (t = e._payload), (e = e._init);
        try {
          return Li(e(t));
        } catch {}
    }
  return null;
}
function Up(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (e = t.render), (e = e.displayName || e.name || ""), t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Li(t);
    case 8:
      return t === La ? "StrictMode" : "Mode";
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
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function en(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function jc(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Ap(e) {
  var t = jc(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var l = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (i) {
          (r = "" + i), o.call(this, i);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (i) {
          r = "" + i;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function xl(e) {
  e._valueTracker || (e._valueTracker = Ap(e));
}
function Tc(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return e && (r = jc(e) ? (e.checked ? "true" : "false") : e.value), (e = r), e !== n ? (t.setValue(e), !0) : !1;
}
function Xl(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")) return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ji(e, t) {
  var n = t.checked;
  return ue({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function Fu(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = en(t.value != null ? t.value : n)),
    (e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null });
}
function Dc(e, t) {
  (t = t.checked), t != null && Ra(e, "checked", t, !1);
}
function Ti(e, t) {
  Dc(e, t);
  var n = en(t.value),
    r = t.type;
  if (n != null) r === "number" ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Di(e, t.type, n) : t.hasOwnProperty("defaultValue") && Di(e, t.type, en(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Iu(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!((r !== "submit" && r !== "reset") || (t.value !== void 0 && t.value !== null))) return;
    (t = "" + e._wrapperState.initialValue), n || t === e.value || (e.value = t), (e.defaultValue = t);
  }
  (n = e.name), n !== "" && (e.name = ""), (e.defaultChecked = !!e._wrapperState.initialChecked), n !== "" && (e.name = n);
}
function Di(e, t, n) {
  (t !== "number" || Xl(e.ownerDocument) !== e) &&
    (n == null ? (e.defaultValue = "" + e._wrapperState.initialValue) : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var jr = Array.isArray;
function Yn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++) (l = t.hasOwnProperty("$" + e[n].value)), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + en(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function Mi(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(R(91));
  return ue({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Uu(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(R(92));
      if (jr(n)) {
        if (1 < n.length) throw Error(R(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: en(n) };
}
function Mc(e, t) {
  var n = en(t.value),
    r = en(t.defaultValue);
  n != null && ((n = "" + n), n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Au(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function zc(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function zi(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? zc(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var El,
  Oc = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (El = El || document.createElement("div"), El.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = El.firstChild; e.firstChild; )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Wr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Mr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  $p = ["Webkit", "ms", "Moz", "O"];
Object.keys(Mr).forEach(function (e) {
  $p.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Mr[t] = Mr[e]);
  });
});
function Fc(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Mr.hasOwnProperty(e) && Mr[e])
    ? ("" + t).trim()
    : t + "px";
}
function Ic(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = Fc(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var Bp = ue(
  { menuitem: !0 },
  { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 }
);
function Oi(e, t) {
  if (t) {
    if (Bp[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(R(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(R(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(R(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(R(62));
  }
}
function Fi(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
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
var Ii = null;
function Da(e) {
  return (e = e.target || e.srcElement || window), e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Ui = null,
  Gn = null,
  Xn = null;
function $u(e) {
  if ((e = pl(e))) {
    if (typeof Ui != "function") throw Error(R(280));
    var t = e.stateNode;
    t && ((t = No(t)), Ui(e.stateNode, e.type, t));
  }
}
function Uc(e) {
  Gn ? (Xn ? Xn.push(e) : (Xn = [e])) : (Gn = e);
}
function Ac() {
  if (Gn) {
    var e = Gn,
      t = Xn;
    if (((Xn = Gn = null), $u(e), t)) for (e = 0; e < t.length; e++) $u(t[e]);
  }
}
function $c(e, t) {
  return e(t);
}
function Bc() {}
var bo = !1;
function Hc(e, t, n) {
  if (bo) return e(t, n);
  bo = !0;
  try {
    return $c(e, t, n);
  } finally {
    (bo = !1), (Gn !== null || Xn !== null) && (Bc(), Ac());
  }
}
function Qr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = No(n);
  if (r === null) return null;
  n = r[t];
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
      (r = !r.disabled) || ((e = e.type), (r = !(e === "button" || e === "input" || e === "select" || e === "textarea"))), (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(R(231, t, typeof n));
  return n;
}
var Ai = !1;
if (Pt)
  try {
    var gr = {};
    Object.defineProperty(gr, "passive", {
      get: function () {
        Ai = !0;
      },
    }),
      window.addEventListener("test", gr, gr),
      window.removeEventListener("test", gr, gr);
  } catch {
    Ai = !1;
  }
function Hp(e, t, n, r, l, o, i, a, u) {
  var s = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, s);
  } catch (c) {
    this.onError(c);
  }
}
var zr = !1,
  Zl = null,
  Jl = !1,
  $i = null,
  Vp = {
    onError: function (e) {
      (zr = !0), (Zl = e);
    },
  };
function Wp(e, t, n, r, l, o, i, a, u) {
  (zr = !1), (Zl = null), Hp.apply(Vp, arguments);
}
function Qp(e, t, n, r, l, o, i, a, u) {
  if ((Wp.apply(this, arguments), zr)) {
    if (zr) {
      var s = Zl;
      (zr = !1), (Zl = null);
    } else throw Error(R(198));
    Jl || ((Jl = !0), ($i = s));
  }
}
function Pn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Vc(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null)) return t.dehydrated;
  }
  return null;
}
function Bu(e) {
  if (Pn(e) !== e) throw Error(R(188));
}
function Kp(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Pn(e)), t === null)) throw Error(R(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var o = l.alternate;
    if (o === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === o.child) {
      for (o = l.child; o; ) {
        if (o === n) return Bu(l), e;
        if (o === r) return Bu(l), t;
        o = o.sibling;
      }
      throw Error(R(188));
    }
    if (n.return !== r.return) (n = l), (r = o);
    else {
      for (var i = !1, a = l.child; a; ) {
        if (a === n) {
          (i = !0), (n = l), (r = o);
          break;
        }
        if (a === r) {
          (i = !0), (r = l), (n = o);
          break;
        }
        a = a.sibling;
      }
      if (!i) {
        for (a = o.child; a; ) {
          if (a === n) {
            (i = !0), (n = o), (r = l);
            break;
          }
          if (a === r) {
            (i = !0), (r = o), (n = l);
            break;
          }
          a = a.sibling;
        }
        if (!i) throw Error(R(189));
      }
    }
    if (n.alternate !== r) throw Error(R(190));
  }
  if (n.tag !== 3) throw Error(R(188));
  return n.stateNode.current === n ? e : t;
}
function Wc(e) {
  return (e = Kp(e)), e !== null ? Qc(e) : null;
}
function Qc(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Qc(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Kc = Ke.unstable_scheduleCallback,
  Hu = Ke.unstable_cancelCallback,
  Yp = Ke.unstable_shouldYield,
  Gp = Ke.unstable_requestPaint,
  he = Ke.unstable_now,
  Xp = Ke.unstable_getCurrentPriorityLevel,
  Ma = Ke.unstable_ImmediatePriority,
  Yc = Ke.unstable_UserBlockingPriority,
  ql = Ke.unstable_NormalPriority,
  Zp = Ke.unstable_LowPriority,
  Gc = Ke.unstable_IdlePriority,
  Eo = null,
  yt = null;
function Jp(e) {
  if (yt && typeof yt.onCommitFiberRoot == "function")
    try {
      yt.onCommitFiberRoot(Eo, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var ct = Math.clz32 ? Math.clz32 : eh,
  qp = Math.log,
  bp = Math.LN2;
function eh(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((qp(e) / bp) | 0)) | 0;
}
var Cl = 64,
  kl = 4194304;
function Tr(e) {
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
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function bl(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    o = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var a = i & ~l;
    a !== 0 ? (r = Tr(a)) : ((o &= i), o !== 0 && (r = Tr(o)));
  } else (i = n & ~l), i !== 0 ? (r = Tr(i)) : o !== 0 && (r = Tr(o));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & l) && ((l = r & -r), (o = t & -t), l >= o || (l === 16 && (o & 4194240) !== 0))) return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; ) (n = 31 - ct(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function th(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
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
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function nh(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
    var i = 31 - ct(o),
      a = 1 << i,
      u = l[i];
    u === -1 ? (!(a & n) || a & r) && (l[i] = th(a, t)) : u <= t && (e.expiredLanes |= a), (o &= ~a);
  }
}
function Bi(e) {
  return (e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Xc() {
  var e = Cl;
  return (Cl <<= 1), !(Cl & 4194240) && (Cl = 64), e;
}
function ei(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function dl(e, t, n) {
  (e.pendingLanes |= t), t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)), (e = e.eventTimes), (t = 31 - ct(t)), (e[t] = n);
}
function rh(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - ct(n),
      o = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o);
  }
}
function za(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - ct(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var Z = 0;
function Zc(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Jc,
  Oa,
  qc,
  bc,
  ed,
  Hi = !1,
  Pl = [],
  Kt = null,
  Yt = null,
  Gt = null,
  Kr = new Map(),
  Yr = new Map(),
  Ht = [],
  lh =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Vu(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Kt = null;
      break;
    case "dragenter":
    case "dragleave":
      Yt = null;
      break;
    case "mouseover":
    case "mouseout":
      Gt = null;
      break;
    case "pointerover":
    case "pointerout":
      Kr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Yr.delete(t.pointerId);
  }
}
function yr(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [l] }), t !== null && ((t = pl(t)), t !== null && Oa(t)), e)
    : ((e.eventSystemFlags |= r), (t = e.targetContainers), l !== null && t.indexOf(l) === -1 && t.push(l), e);
}
function oh(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (Kt = yr(Kt, e, t, n, r, l)), !0;
    case "dragenter":
      return (Yt = yr(Yt, e, t, n, r, l)), !0;
    case "mouseover":
      return (Gt = yr(Gt, e, t, n, r, l)), !0;
    case "pointerover":
      var o = l.pointerId;
      return Kr.set(o, yr(Kr.get(o) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (o = l.pointerId), Yr.set(o, yr(Yr.get(o) || null, e, t, n, r, l)), !0;
  }
  return !1;
}
function td(e) {
  var t = fn(e.target);
  if (t !== null) {
    var n = Pn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Vc(n)), t !== null)) {
          (e.blockedOn = t),
            ed(e.priority, function () {
              qc(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Al(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Vi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Ii = r), n.target.dispatchEvent(r), (Ii = null);
    } else return (t = pl(n)), t !== null && Oa(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Wu(e, t, n) {
  Al(e) && n.delete(t);
}
function ih() {
  (Hi = !1), Kt !== null && Al(Kt) && (Kt = null), Yt !== null && Al(Yt) && (Yt = null), Gt !== null && Al(Gt) && (Gt = null), Kr.forEach(Wu), Yr.forEach(Wu);
}
function wr(e, t) {
  e.blockedOn === t && ((e.blockedOn = null), Hi || ((Hi = !0), Ke.unstable_scheduleCallback(Ke.unstable_NormalPriority, ih)));
}
function Gr(e) {
  function t(l) {
    return wr(l, e);
  }
  if (0 < Pl.length) {
    wr(Pl[0], e);
    for (var n = 1; n < Pl.length; n++) {
      var r = Pl[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (Kt !== null && wr(Kt, e), Yt !== null && wr(Yt, e), Gt !== null && wr(Gt, e), Kr.forEach(t), Yr.forEach(t), n = 0; n < Ht.length; n++)
    (r = Ht[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Ht.length && ((n = Ht[0]), n.blockedOn === null); ) td(n), n.blockedOn === null && Ht.shift();
}
var Zn = jt.ReactCurrentBatchConfig,
  eo = !0;
function ah(e, t, n, r) {
  var l = Z,
    o = Zn.transition;
  Zn.transition = null;
  try {
    (Z = 1), Fa(e, t, n, r);
  } finally {
    (Z = l), (Zn.transition = o);
  }
}
function uh(e, t, n, r) {
  var l = Z,
    o = Zn.transition;
  Zn.transition = null;
  try {
    (Z = 4), Fa(e, t, n, r);
  } finally {
    (Z = l), (Zn.transition = o);
  }
}
function Fa(e, t, n, r) {
  if (eo) {
    var l = Vi(e, t, n, r);
    if (l === null) ci(e, t, r, to, n), Vu(e, r);
    else if (oh(l, e, t, n, r)) r.stopPropagation();
    else if ((Vu(e, r), t & 4 && -1 < lh.indexOf(e))) {
      for (; l !== null; ) {
        var o = pl(l);
        if ((o !== null && Jc(o), (o = Vi(e, t, n, r)), o === null && ci(e, t, r, to, n), o === l)) break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else ci(e, t, r, null, n);
  }
}
var to = null;
function Vi(e, t, n, r) {
  if (((to = null), (e = Da(r)), (e = fn(e)), e !== null))
    if (((t = Pn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Vc(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (to = e), null;
}
function nd(e) {
  switch (e) {
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
      return 1;
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
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Xp()) {
        case Ma:
          return 1;
        case Yc:
          return 4;
        case ql:
        case Zp:
          return 16;
        case Gc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Wt = null,
  Ia = null,
  $l = null;
function rd() {
  if ($l) return $l;
  var e,
    t = Ia,
    n = t.length,
    r,
    l = "value" in Wt ? Wt.value : Wt.textContent,
    o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
  return ($l = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Bl(e) {
  var t = e.keyCode;
  return "charCode" in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t), e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Nl() {
  return !0;
}
function Qu() {
  return !1;
}
function Ge(e) {
  function t(n, r, l, o, i) {
    (this._reactName = n), (this._targetInst = l), (this.type = r), (this.nativeEvent = o), (this.target = i), (this.currentTarget = null);
    for (var a in e) e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(o) : o[a]));
    return (
      (this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? Nl : Qu), (this.isPropagationStopped = Qu), this
    );
  }
  return (
    ue(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), (this.isDefaultPrevented = Nl));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), (this.isPropagationStopped = Nl));
      },
      persist: function () {},
      isPersistent: Nl,
    }),
    t
  );
}
var ur = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Ua = Ge(ur),
  fl = ue({}, ur, { view: 0, detail: 0 }),
  sh = Ge(fl),
  ti,
  ni,
  Sr,
  Co = ue({}, fl, {
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
    getModifierState: Aa,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0 ? (e.fromElement === e.srcElement ? e.toElement : e.fromElement) : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Sr && (Sr && e.type === "mousemove" ? ((ti = e.screenX - Sr.screenX), (ni = e.screenY - Sr.screenY)) : (ni = ti = 0), (Sr = e)), ti);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : ni;
    },
  }),
  Ku = Ge(Co),
  ch = ue({}, Co, { dataTransfer: 0 }),
  dh = Ge(ch),
  fh = ue({}, fl, { relatedTarget: 0 }),
  ri = Ge(fh),
  ph = ue({}, ur, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  hh = Ge(ph),
  mh = ue({}, ur, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  vh = Ge(mh),
  gh = ue({}, ur, { data: 0 }),
  Yu = Ge(gh),
  yh = {
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
    MozPrintableKey: "Unidentified",
  },
  wh = {
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
    224: "Meta",
  },
  Sh = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function _h(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Sh[e]) ? !!t[e] : !1;
}
function Aa() {
  return _h;
}
var xh = ue({}, fl, {
    key: function (e) {
      if (e.key) {
        var t = yh[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Bl(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? wh[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Aa,
    charCode: function (e) {
      return e.type === "keypress" ? Bl(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress" ? Bl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
  }),
  Eh = Ge(xh),
  Ch = ue({}, Co, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }),
  Gu = Ge(Ch),
  kh = ue({}, fl, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Aa }),
  Ph = Ge(kh),
  Nh = ue({}, ur, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Rh = Ge(Nh),
  Lh = ue({}, Co, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  jh = Ge(Lh),
  Th = [9, 13, 27, 32],
  $a = Pt && "CompositionEvent" in window,
  Or = null;
Pt && "documentMode" in document && (Or = document.documentMode);
var Dh = Pt && "TextEvent" in window && !Or,
  ld = Pt && (!$a || (Or && 8 < Or && 11 >= Or)),
  Xu = " ",
  Zu = !1;
function od(e, t) {
  switch (e) {
    case "keyup":
      return Th.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function id(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var On = !1;
function Mh(e, t) {
  switch (e) {
    case "compositionend":
      return id(t);
    case "keypress":
      return t.which !== 32 ? null : ((Zu = !0), Xu);
    case "textInput":
      return (e = t.data), e === Xu && Zu ? null : e;
    default:
      return null;
  }
}
function zh(e, t) {
  if (On) return e === "compositionend" || (!$a && od(e, t)) ? ((e = rd()), ($l = Ia = Wt = null), (On = !1), e) : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return ld && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Oh = {
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
  week: !0,
};
function Ju(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Oh[e.type] : t === "textarea";
}
function ad(e, t, n, r) {
  Uc(r), (t = no(t, "onChange")), 0 < t.length && ((n = new Ua("onChange", "change", null, n, r)), e.push({ event: n, listeners: t }));
}
var Fr = null,
  Xr = null;
function Fh(e) {
  yd(e, 0);
}
function ko(e) {
  var t = Un(e);
  if (Tc(t)) return e;
}
function Ih(e, t) {
  if (e === "change") return t;
}
var ud = !1;
if (Pt) {
  var li;
  if (Pt) {
    var oi = "oninput" in document;
    if (!oi) {
      var qu = document.createElement("div");
      qu.setAttribute("oninput", "return;"), (oi = typeof qu.oninput == "function");
    }
    li = oi;
  } else li = !1;
  ud = li && (!document.documentMode || 9 < document.documentMode);
}
function bu() {
  Fr && (Fr.detachEvent("onpropertychange", sd), (Xr = Fr = null));
}
function sd(e) {
  if (e.propertyName === "value" && ko(Xr)) {
    var t = [];
    ad(t, Xr, e, Da(e)), Hc(Fh, t);
  }
}
function Uh(e, t, n) {
  e === "focusin" ? (bu(), (Fr = t), (Xr = n), Fr.attachEvent("onpropertychange", sd)) : e === "focusout" && bu();
}
function Ah(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return ko(Xr);
}
function $h(e, t) {
  if (e === "click") return ko(t);
}
function Bh(e, t) {
  if (e === "input" || e === "change") return ko(t);
}
function Hh(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var ft = typeof Object.is == "function" ? Object.is : Hh;
function Zr(e, t) {
  if (ft(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!ki.call(t, l) || !ft(e[l], t[l])) return !1;
  }
  return !0;
}
function es(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function ts(e, t) {
  var n = es(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t)) return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = es(n);
  }
}
function cd(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? cd(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function dd() {
  for (var e = window, t = Xl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Xl(e.document);
  }
  return t;
}
function Ba(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Vh(e) {
  var t = dd(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && cd(n.ownerDocument.documentElement, n)) {
    if (r !== null && Ba(n)) {
      if (((t = r.start), (e = r.end), e === void 0 && (e = t), "selectionStart" in n)) (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (((e = ((t = n.ownerDocument || document) && t.defaultView) || window), e.getSelection)) {
        e = e.getSelection();
        var l = n.textContent.length,
          o = Math.min(r.start, l);
        (r = r.end === void 0 ? o : Math.min(r.end, l)), !e.extend && o > r && ((l = r), (r = o), (o = l)), (l = ts(n, o));
        var i = ts(n, r);
        l &&
          i &&
          (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          o > r ? (e.addRange(t), e.extend(i.node, i.offset)) : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) (e = t[n]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top);
  }
}
var Wh = Pt && "documentMode" in document && 11 >= document.documentMode,
  Fn = null,
  Wi = null,
  Ir = null,
  Qi = !1;
function ns(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Qi ||
    Fn == null ||
    Fn !== Xl(r) ||
    ((r = Fn),
    "selectionStart" in r && Ba(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()),
        (r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset })),
    (Ir && Zr(Ir, r)) ||
      ((Ir = r),
      (r = no(Wi, "onSelect")),
      0 < r.length && ((t = new Ua("onSelect", "select", null, t, n)), e.push({ event: t, listeners: r }), (t.target = Fn))));
}
function Rl(e, t) {
  var n = {};
  return (n[e.toLowerCase()] = t.toLowerCase()), (n["Webkit" + e] = "webkit" + t), (n["Moz" + e] = "moz" + t), n;
}
var In = {
    animationend: Rl("Animation", "AnimationEnd"),
    animationiteration: Rl("Animation", "AnimationIteration"),
    animationstart: Rl("Animation", "AnimationStart"),
    transitionend: Rl("Transition", "TransitionEnd"),
  },
  ii = {},
  fd = {};
Pt &&
  ((fd = document.createElement("div").style),
  "AnimationEvent" in window || (delete In.animationend.animation, delete In.animationiteration.animation, delete In.animationstart.animation),
  "TransitionEvent" in window || delete In.transitionend.transition);
function Po(e) {
  if (ii[e]) return ii[e];
  if (!In[e]) return e;
  var t = In[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in fd) return (ii[e] = t[n]);
  return e;
}
var pd = Po("animationend"),
  hd = Po("animationiteration"),
  md = Po("animationstart"),
  vd = Po("transitionend"),
  gd = new Map(),
  rs =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function nn(e, t) {
  gd.set(e, t), kn(t, [e]);
}
for (var ai = 0; ai < rs.length; ai++) {
  var ui = rs[ai],
    Qh = ui.toLowerCase(),
    Kh = ui[0].toUpperCase() + ui.slice(1);
  nn(Qh, "on" + Kh);
}
nn(pd, "onAnimationEnd");
nn(hd, "onAnimationIteration");
nn(md, "onAnimationStart");
nn("dblclick", "onDoubleClick");
nn("focusin", "onFocus");
nn("focusout", "onBlur");
nn(vd, "onTransitionEnd");
bn("onMouseEnter", ["mouseout", "mouseover"]);
bn("onMouseLeave", ["mouseout", "mouseover"]);
bn("onPointerEnter", ["pointerout", "pointerover"]);
bn("onPointerLeave", ["pointerout", "pointerover"]);
kn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
kn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
kn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
kn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
kn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
kn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Dr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Yh = new Set("cancel close invalid load scroll toggle".split(" ").concat(Dr));
function ls(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Qp(r, t, void 0, e), (e.currentTarget = null);
}
function yd(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var a = r[i],
            u = a.instance,
            s = a.currentTarget;
          if (((a = a.listener), u !== o && l.isPropagationStopped())) break e;
          ls(l, a, s), (o = u);
        }
      else
        for (i = 0; i < r.length; i++) {
          if (((a = r[i]), (u = a.instance), (s = a.currentTarget), (a = a.listener), u !== o && l.isPropagationStopped())) break e;
          ls(l, a, s), (o = u);
        }
    }
  }
  if (Jl) throw ((e = $i), (Jl = !1), ($i = null), e);
}
function te(e, t) {
  var n = t[Zi];
  n === void 0 && (n = t[Zi] = new Set());
  var r = e + "__bubble";
  n.has(r) || (wd(t, e, 2, !1), n.add(r));
}
function si(e, t, n) {
  var r = 0;
  t && (r |= 4), wd(n, e, r, t);
}
var Ll = "_reactListening" + Math.random().toString(36).slice(2);
function Jr(e) {
  if (!e[Ll]) {
    (e[Ll] = !0),
      Pc.forEach(function (n) {
        n !== "selectionchange" && (Yh.has(n) || si(n, !1, e), si(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Ll] || ((t[Ll] = !0), si("selectionchange", !1, t));
  }
}
function wd(e, t, n, r) {
  switch (nd(t)) {
    case 1:
      var l = ah;
      break;
    case 4:
      l = uh;
      break;
    default:
      l = Fa;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !Ai || (t !== "touchstart" && t !== "touchmove" && t !== "wheel") || (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
      ? e.addEventListener(t, n, { passive: l })
      : e.addEventListener(t, n, !1);
}
function ci(e, t, n, r, l) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var a = r.stateNode.containerInfo;
        if (a === l || (a.nodeType === 8 && a.parentNode === l)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var u = i.tag;
            if ((u === 3 || u === 4) && ((u = i.stateNode.containerInfo), u === l || (u.nodeType === 8 && u.parentNode === l))) return;
            i = i.return;
          }
        for (; a !== null; ) {
          if (((i = fn(a)), i === null)) return;
          if (((u = i.tag), u === 5 || u === 6)) {
            r = o = i;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  Hc(function () {
    var s = o,
      c = Da(n),
      h = [];
    e: {
      var p = gd.get(e);
      if (p !== void 0) {
        var x = Ua,
          _ = e;
        switch (e) {
          case "keypress":
            if (Bl(n) === 0) break e;
          case "keydown":
          case "keyup":
            x = Eh;
            break;
          case "focusin":
            (_ = "focus"), (x = ri);
            break;
          case "focusout":
            (_ = "blur"), (x = ri);
            break;
          case "beforeblur":
          case "afterblur":
            x = ri;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            x = Ku;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            x = dh;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            x = Ph;
            break;
          case pd:
          case hd:
          case md:
            x = hh;
            break;
          case vd:
            x = Rh;
            break;
          case "scroll":
            x = sh;
            break;
          case "wheel":
            x = jh;
            break;
          case "copy":
          case "cut":
          case "paste":
            x = vh;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            x = Gu;
        }
        var S = (t & 4) !== 0,
          N = !S && e === "scroll",
          f = S ? (p !== null ? p + "Capture" : null) : p;
        S = [];
        for (var d = s, m; d !== null; ) {
          m = d;
          var C = m.stateNode;
          if ((m.tag === 5 && C !== null && ((m = C), f !== null && ((C = Qr(d, f)), C != null && S.push(qr(d, C, m)))), N)) break;
          d = d.return;
        }
        0 < S.length && ((p = new x(p, _, null, n, c)), h.push({ event: p, listeners: S }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((p = e === "mouseover" || e === "pointerover"),
          (x = e === "mouseout" || e === "pointerout"),
          p && n !== Ii && (_ = n.relatedTarget || n.fromElement) && (fn(_) || _[Nt]))
        )
          break e;
        if (
          (x || p) &&
          ((p = c.window === c ? c : (p = c.ownerDocument) ? p.defaultView || p.parentWindow : window),
          x
            ? ((_ = n.relatedTarget || n.toElement),
              (x = s),
              (_ = _ ? fn(_) : null),
              _ !== null && ((N = Pn(_)), _ !== N || (_.tag !== 5 && _.tag !== 6)) && (_ = null))
            : ((x = null), (_ = s)),
          x !== _)
        ) {
          if (
            ((S = Ku),
            (C = "onMouseLeave"),
            (f = "onMouseEnter"),
            (d = "mouse"),
            (e === "pointerout" || e === "pointerover") && ((S = Gu), (C = "onPointerLeave"), (f = "onPointerEnter"), (d = "pointer")),
            (N = x == null ? p : Un(x)),
            (m = _ == null ? p : Un(_)),
            (p = new S(C, d + "leave", x, n, c)),
            (p.target = N),
            (p.relatedTarget = m),
            (C = null),
            fn(c) === s && ((S = new S(f, d + "enter", _, n, c)), (S.target = m), (S.relatedTarget = N), (C = S)),
            (N = C),
            x && _)
          )
            t: {
              for (S = x, f = _, d = 0, m = S; m; m = Tn(m)) d++;
              for (m = 0, C = f; C; C = Tn(C)) m++;
              for (; 0 < d - m; ) (S = Tn(S)), d--;
              for (; 0 < m - d; ) (f = Tn(f)), m--;
              for (; d--; ) {
                if (S === f || (f !== null && S === f.alternate)) break t;
                (S = Tn(S)), (f = Tn(f));
              }
              S = null;
            }
          else S = null;
          x !== null && os(h, p, x, S, !1), _ !== null && N !== null && os(h, N, _, S, !0);
        }
      }
      e: {
        if (((p = s ? Un(s) : window), (x = p.nodeName && p.nodeName.toLowerCase()), x === "select" || (x === "input" && p.type === "file"))) var L = Ih;
        else if (Ju(p))
          if (ud) L = Bh;
          else {
            L = Ah;
            var g = Uh;
          }
        else (x = p.nodeName) && x.toLowerCase() === "input" && (p.type === "checkbox" || p.type === "radio") && (L = $h);
        if (L && (L = L(e, s))) {
          ad(h, L, n, c);
          break e;
        }
        g && g(e, p, s), e === "focusout" && (g = p._wrapperState) && g.controlled && p.type === "number" && Di(p, "number", p.value);
      }
      switch (((g = s ? Un(s) : window), e)) {
        case "focusin":
          (Ju(g) || g.contentEditable === "true") && ((Fn = g), (Wi = s), (Ir = null));
          break;
        case "focusout":
          Ir = Wi = Fn = null;
          break;
        case "mousedown":
          Qi = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Qi = !1), ns(h, n, c);
          break;
        case "selectionchange":
          if (Wh) break;
        case "keydown":
        case "keyup":
          ns(h, n, c);
      }
      var k;
      if ($a)
        e: {
          switch (e) {
            case "compositionstart":
              var j = "onCompositionStart";
              break e;
            case "compositionend":
              j = "onCompositionEnd";
              break e;
            case "compositionupdate":
              j = "onCompositionUpdate";
              break e;
          }
          j = void 0;
        }
      else On ? od(e, n) && (j = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (j = "onCompositionStart");
      j &&
        (ld &&
          n.locale !== "ko" &&
          (On || j !== "onCompositionStart"
            ? j === "onCompositionEnd" && On && (k = rd())
            : ((Wt = c), (Ia = "value" in Wt ? Wt.value : Wt.textContent), (On = !0))),
        (g = no(s, j)),
        0 < g.length && ((j = new Yu(j, e, null, n, c)), h.push({ event: j, listeners: g }), k ? (j.data = k) : ((k = id(n)), k !== null && (j.data = k)))),
        (k = Dh ? Mh(e, n) : zh(e, n)) &&
          ((s = no(s, "onBeforeInput")),
          0 < s.length && ((c = new Yu("onBeforeInput", "beforeinput", null, n, c)), h.push({ event: c, listeners: s }), (c.data = k)));
    }
    yd(h, t);
  });
}
function qr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function no(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      o = l.stateNode;
    l.tag === 5 && o !== null && ((l = o), (o = Qr(e, n)), o != null && r.unshift(qr(e, o, l)), (o = Qr(e, t)), o != null && r.push(qr(e, o, l))),
      (e = e.return);
  }
  return r;
}
function Tn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function os(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var a = n,
      u = a.alternate,
      s = a.stateNode;
    if (u !== null && u === r) break;
    a.tag === 5 && s !== null && ((a = s), l ? ((u = Qr(n, o)), u != null && i.unshift(qr(n, u, a))) : l || ((u = Qr(n, o)), u != null && i.push(qr(n, u, a)))),
      (n = n.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var Gh = /\r\n?/g,
  Xh = /\u0000|\uFFFD/g;
function is(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Gh,
      `
`
    )
    .replace(Xh, "");
}
function jl(e, t, n) {
  if (((t = is(t)), is(e) !== t && n)) throw Error(R(425));
}
function ro() {}
var Ki = null,
  Yi = null;
function Gi(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null)
  );
}
var Xi = typeof setTimeout == "function" ? setTimeout : void 0,
  Zh = typeof clearTimeout == "function" ? clearTimeout : void 0,
  as = typeof Promise == "function" ? Promise : void 0,
  Jh =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof as < "u"
      ? function (e) {
          return as.resolve(null).then(e).catch(qh);
        }
      : Xi;
function qh(e) {
  setTimeout(function () {
    throw e;
  });
}
function di(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), Gr(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  Gr(t);
}
function Xt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function us(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var sr = Math.random().toString(36).slice(2),
  gt = "__reactFiber$" + sr,
  br = "__reactProps$" + sr,
  Nt = "__reactContainer$" + sr,
  Zi = "__reactEvents$" + sr,
  bh = "__reactListeners$" + sr,
  em = "__reactHandles$" + sr;
function fn(e) {
  var t = e[gt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Nt] || n[gt])) {
      if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
        for (e = us(e); e !== null; ) {
          if ((n = e[gt])) return n;
          e = us(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function pl(e) {
  return (e = e[gt] || e[Nt]), !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e;
}
function Un(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(R(33));
}
function No(e) {
  return e[br] || null;
}
var Ji = [],
  An = -1;
function rn(e) {
  return { current: e };
}
function ne(e) {
  0 > An || ((e.current = Ji[An]), (Ji[An] = null), An--);
}
function b(e, t) {
  An++, (Ji[An] = e.current), (e.current = t);
}
var tn = {},
  Te = rn(tn),
  Ae = rn(!1),
  wn = tn;
function er(e, t) {
  var n = e.type.contextTypes;
  if (!n) return tn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    o;
  for (o in n) l[o] = t[o];
  return r && ((e = e.stateNode), (e.__reactInternalMemoizedUnmaskedChildContext = t), (e.__reactInternalMemoizedMaskedChildContext = l)), l;
}
function $e(e) {
  return (e = e.childContextTypes), e != null;
}
function lo() {
  ne(Ae), ne(Te);
}
function ss(e, t, n) {
  if (Te.current !== tn) throw Error(R(168));
  b(Te, t), b(Ae, n);
}
function Sd(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function")) return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(R(108, Up(e) || "Unknown", l));
  return ue({}, n, r);
}
function oo(e) {
  return (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || tn), (wn = Te.current), b(Te, e), b(Ae, Ae.current), !0;
}
function cs(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(R(169));
  n ? ((e = Sd(e, t, wn)), (r.__reactInternalMemoizedMergedChildContext = e), ne(Ae), ne(Te), b(Te, e)) : ne(Ae), b(Ae, n);
}
var _t = null,
  Ro = !1,
  fi = !1;
function _d(e) {
  _t === null ? (_t = [e]) : _t.push(e);
}
function tm(e) {
  (Ro = !0), _d(e);
}
function ln() {
  if (!fi && _t !== null) {
    fi = !0;
    var e = 0,
      t = Z;
    try {
      var n = _t;
      for (Z = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (_t = null), (Ro = !1);
    } catch (l) {
      throw (_t !== null && (_t = _t.slice(e + 1)), Kc(Ma, ln), l);
    } finally {
      (Z = t), (fi = !1);
    }
  }
  return null;
}
var $n = [],
  Bn = 0,
  io = null,
  ao = 0,
  qe = [],
  be = 0,
  Sn = null,
  xt = 1,
  Et = "";
function sn(e, t) {
  ($n[Bn++] = ao), ($n[Bn++] = io), (io = e), (ao = t);
}
function xd(e, t, n) {
  (qe[be++] = xt), (qe[be++] = Et), (qe[be++] = Sn), (Sn = e);
  var r = xt;
  e = Et;
  var l = 32 - ct(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var o = 32 - ct(t) + l;
  if (30 < o) {
    var i = l - (l % 5);
    (o = (r & ((1 << i) - 1)).toString(32)), (r >>= i), (l -= i), (xt = (1 << (32 - ct(t) + l)) | (n << l) | r), (Et = o + e);
  } else (xt = (1 << o) | (n << l) | r), (Et = e);
}
function Ha(e) {
  e.return !== null && (sn(e, 1), xd(e, 1, 0));
}
function Va(e) {
  for (; e === io; ) (io = $n[--Bn]), ($n[Bn] = null), (ao = $n[--Bn]), ($n[Bn] = null);
  for (; e === Sn; ) (Sn = qe[--be]), (qe[be] = null), (Et = qe[--be]), (qe[be] = null), (xt = qe[--be]), (qe[be] = null);
}
var Qe = null,
  We = null,
  oe = !1,
  st = null;
function Ed(e, t) {
  var n = et(5, null, null, 0);
  (n.elementType = "DELETED"), (n.stateNode = t), (n.return = e), (t = e.deletions), t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function ds(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t),
        t !== null ? ((e.stateNode = t), (Qe = e), (We = Xt(t.firstChild)), !0) : !1
      );
    case 6:
      return (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t), t !== null ? ((e.stateNode = t), (Qe = e), (We = null), !0) : !1;
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Sn !== null ? { id: xt, overflow: Et } : null),
            (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
            (n = et(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Qe = e),
            (We = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function qi(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function bi(e) {
  if (oe) {
    var t = We;
    if (t) {
      var n = t;
      if (!ds(e, t)) {
        if (qi(e)) throw Error(R(418));
        t = Xt(n.nextSibling);
        var r = Qe;
        t && ds(e, t) ? Ed(r, n) : ((e.flags = (e.flags & -4097) | 2), (oe = !1), (Qe = e));
      }
    } else {
      if (qi(e)) throw Error(R(418));
      (e.flags = (e.flags & -4097) | 2), (oe = !1), (Qe = e);
    }
  }
}
function fs(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  Qe = e;
}
function Tl(e) {
  if (e !== Qe) return !1;
  if (!oe) return fs(e), (oe = !0), !1;
  var t;
  if (((t = e.tag !== 3) && !(t = e.tag !== 5) && ((t = e.type), (t = t !== "head" && t !== "body" && !Gi(e.type, e.memoizedProps))), t && (t = We))) {
    if (qi(e)) throw (Cd(), Error(R(418)));
    for (; t; ) Ed(e, t), (t = Xt(t.nextSibling));
  }
  if ((fs(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(R(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              We = Xt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      We = null;
    }
  } else We = Qe ? Xt(e.stateNode.nextSibling) : null;
  return !0;
}
function Cd() {
  for (var e = We; e; ) e = Xt(e.nextSibling);
}
function tr() {
  (We = Qe = null), (oe = !1);
}
function Wa(e) {
  st === null ? (st = [e]) : st.push(e);
}
var nm = jt.ReactCurrentBatchConfig;
function it(e, t) {
  if (e && e.defaultProps) {
    (t = ue({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var uo = rn(null),
  so = null,
  Hn = null,
  Qa = null;
function Ka() {
  Qa = Hn = so = null;
}
function Ya(e) {
  var t = uo.current;
  ne(uo), (e._currentValue = t);
}
function ea(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t ? ((e.childLanes |= t), r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Jn(e, t) {
  (so = e), (Qa = Hn = null), (e = e.dependencies), e !== null && e.firstContext !== null && (e.lanes & t && (Ue = !0), (e.firstContext = null));
}
function nt(e) {
  var t = e._currentValue;
  if (Qa !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Hn === null)) {
      if (so === null) throw Error(R(308));
      (Hn = e), (so.dependencies = { lanes: 0, firstContext: e });
    } else Hn = Hn.next = e;
  return t;
}
var pn = null;
function Ga(e) {
  pn === null ? (pn = [e]) : pn.push(e);
}
function kd(e, t, n, r) {
  var l = t.interleaved;
  return l === null ? ((n.next = n), Ga(t)) : ((n.next = l.next), (l.next = n)), (t.interleaved = n), Rt(e, r);
}
function Rt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t), (n = e.alternate), n !== null && (n.childLanes |= t), (n = e), (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Bt = !1;
function Xa(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Pd(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Ct(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Zt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), G & 2)) {
    var l = r.pending;
    return l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)), (r.pending = t), Rt(e, n);
  }
  return (l = r.interleaved), l === null ? ((t.next = t), Ga(r)) : ((t.next = l.next), (l.next = t)), (r.interleaved = t), Rt(e, n);
}
function Hl(e, t, n) {
  if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), za(e, n);
  }
}
function ps(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var i = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        o === null ? (l = o = i) : (o = o.next = i), (n = n.next);
      } while (n !== null);
      o === null ? (l = o = t) : (o = o.next = t);
    } else l = o = t;
    (n = { baseState: r.baseState, firstBaseUpdate: l, lastBaseUpdate: o, shared: r.shared, effects: r.effects }), (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate), e === null ? (n.firstBaseUpdate = t) : (e.next = t), (n.lastBaseUpdate = t);
}
function co(e, t, n, r) {
  var l = e.updateQueue;
  Bt = !1;
  var o = l.firstBaseUpdate,
    i = l.lastBaseUpdate,
    a = l.shared.pending;
  if (a !== null) {
    l.shared.pending = null;
    var u = a,
      s = u.next;
    (u.next = null), i === null ? (o = s) : (i.next = s), (i = u);
    var c = e.alternate;
    c !== null && ((c = c.updateQueue), (a = c.lastBaseUpdate), a !== i && (a === null ? (c.firstBaseUpdate = s) : (a.next = s), (c.lastBaseUpdate = u)));
  }
  if (o !== null) {
    var h = l.baseState;
    (i = 0), (c = s = u = null), (a = o);
    do {
      var p = a.lane,
        x = a.eventTime;
      if ((r & p) === p) {
        c !== null && (c = c.next = { eventTime: x, lane: 0, tag: a.tag, payload: a.payload, callback: a.callback, next: null });
        e: {
          var _ = e,
            S = a;
          switch (((p = t), (x = n), S.tag)) {
            case 1:
              if (((_ = S.payload), typeof _ == "function")) {
                h = _.call(x, h, p);
                break e;
              }
              h = _;
              break e;
            case 3:
              _.flags = (_.flags & -65537) | 128;
            case 0:
              if (((_ = S.payload), (p = typeof _ == "function" ? _.call(x, h, p) : _), p == null)) break e;
              h = ue({}, h, p);
              break e;
            case 2:
              Bt = !0;
          }
        }
        a.callback !== null && a.lane !== 0 && ((e.flags |= 64), (p = l.effects), p === null ? (l.effects = [a]) : p.push(a));
      } else
        (x = { eventTime: x, lane: p, tag: a.tag, payload: a.payload, callback: a.callback, next: null }),
          c === null ? ((s = c = x), (u = h)) : (c = c.next = x),
          (i |= p);
      if (((a = a.next), a === null)) {
        if (((a = l.shared.pending), a === null)) break;
        (p = a), (a = p.next), (p.next = null), (l.lastBaseUpdate = p), (l.shared.pending = null);
      }
    } while (!0);
    if ((c === null && (u = h), (l.baseState = u), (l.firstBaseUpdate = s), (l.lastBaseUpdate = c), (t = l.shared.interleaved), t !== null)) {
      l = t;
      do (i |= l.lane), (l = l.next);
      while (l !== t);
    } else o === null && (l.shared.lanes = 0);
    (xn |= i), (e.lanes = i), (e.memoizedState = h);
  }
}
function hs(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function")) throw Error(R(191, l));
        l.call(r);
      }
    }
}
var Nd = new kc.Component().refs;
function ta(e, t, n, r) {
  (t = e.memoizedState), (n = n(r, t)), (n = n == null ? t : ue({}, t, n)), (e.memoizedState = n), e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Lo = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Pn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = ze(),
      l = qt(e),
      o = Ct(r, l);
    (o.payload = t), n != null && (o.callback = n), (t = Zt(e, o, l)), t !== null && (dt(t, e, l, r), Hl(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = ze(),
      l = qt(e),
      o = Ct(r, l);
    (o.tag = 1), (o.payload = t), n != null && (o.callback = n), (t = Zt(e, o, l)), t !== null && (dt(t, e, l, r), Hl(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = ze(),
      r = qt(e),
      l = Ct(n, r);
    (l.tag = 2), t != null && (l.callback = t), (t = Zt(e, l, r)), t !== null && (dt(t, e, r, n), Hl(t, e, r));
  },
};
function ms(e, t, n, r, l, o, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, i)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Zr(n, r) || !Zr(l, o)
      : !0
  );
}
function Rd(e, t, n) {
  var r = !1,
    l = tn,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null ? (o = nt(o)) : ((l = $e(t) ? wn : Te.current), (r = t.contextTypes), (o = (r = r != null) ? er(e, l) : tn)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Lo),
    (e.stateNode = t),
    (t._reactInternals = e),
    r && ((e = e.stateNode), (e.__reactInternalMemoizedUnmaskedChildContext = l), (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function vs(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Lo.enqueueReplaceState(t, t.state, null);
}
function na(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = Nd), Xa(e);
  var o = t.contextType;
  typeof o == "object" && o !== null ? (l.context = nt(o)) : ((o = $e(t) ? wn : Te.current), (l.context = er(e, o))),
    (l.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (ta(e, t, o, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(),
      t !== l.state && Lo.enqueueReplaceState(l, l.state, null),
      co(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function _r(e, t, n) {
  if (((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(R(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(R(147, e));
      var l = r,
        o = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o
        ? t.ref
        : ((t = function (i) {
            var a = l.refs;
            a === Nd && (a = l.refs = {}), i === null ? delete a[o] : (a[o] = i);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(R(284));
    if (!n._owner) throw Error(R(290, e));
  }
  return e;
}
function Dl(e, t) {
  throw ((e = Object.prototype.toString.call(t)), Error(R(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)));
}
function gs(e) {
  var t = e._init;
  return t(e._payload);
}
function Ld(e) {
  function t(f, d) {
    if (e) {
      var m = f.deletions;
      m === null ? ((f.deletions = [d]), (f.flags |= 16)) : m.push(d);
    }
  }
  function n(f, d) {
    if (!e) return null;
    for (; d !== null; ) t(f, d), (d = d.sibling);
    return null;
  }
  function r(f, d) {
    for (f = new Map(); d !== null; ) d.key !== null ? f.set(d.key, d) : f.set(d.index, d), (d = d.sibling);
    return f;
  }
  function l(f, d) {
    return (f = bt(f, d)), (f.index = 0), (f.sibling = null), f;
  }
  function o(f, d, m) {
    return (
      (f.index = m), e ? ((m = f.alternate), m !== null ? ((m = m.index), m < d ? ((f.flags |= 2), d) : m) : ((f.flags |= 2), d)) : ((f.flags |= 1048576), d)
    );
  }
  function i(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function a(f, d, m, C) {
    return d === null || d.tag !== 6 ? ((d = wi(m, f.mode, C)), (d.return = f), d) : ((d = l(d, m)), (d.return = f), d);
  }
  function u(f, d, m, C) {
    var L = m.type;
    return L === zn
      ? c(f, d, m.props.children, C, m.key)
      : d !== null && (d.elementType === L || (typeof L == "object" && L !== null && L.$$typeof === $t && gs(L) === d.type))
      ? ((C = l(d, m.props)), (C.ref = _r(f, d, m)), (C.return = f), C)
      : ((C = Gl(m.type, m.key, m.props, null, f.mode, C)), (C.ref = _r(f, d, m)), (C.return = f), C);
  }
  function s(f, d, m, C) {
    return d === null || d.tag !== 4 || d.stateNode.containerInfo !== m.containerInfo || d.stateNode.implementation !== m.implementation
      ? ((d = Si(m, f.mode, C)), (d.return = f), d)
      : ((d = l(d, m.children || [])), (d.return = f), d);
  }
  function c(f, d, m, C, L) {
    return d === null || d.tag !== 7 ? ((d = yn(m, f.mode, C, L)), (d.return = f), d) : ((d = l(d, m)), (d.return = f), d);
  }
  function h(f, d, m) {
    if ((typeof d == "string" && d !== "") || typeof d == "number") return (d = wi("" + d, f.mode, m)), (d.return = f), d;
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case _l:
          return (m = Gl(d.type, d.key, d.props, null, f.mode, m)), (m.ref = _r(f, null, d)), (m.return = f), m;
        case Mn:
          return (d = Si(d, f.mode, m)), (d.return = f), d;
        case $t:
          var C = d._init;
          return h(f, C(d._payload), m);
      }
      if (jr(d) || vr(d)) return (d = yn(d, f.mode, m, null)), (d.return = f), d;
      Dl(f, d);
    }
    return null;
  }
  function p(f, d, m, C) {
    var L = d !== null ? d.key : null;
    if ((typeof m == "string" && m !== "") || typeof m == "number") return L !== null ? null : a(f, d, "" + m, C);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case _l:
          return m.key === L ? u(f, d, m, C) : null;
        case Mn:
          return m.key === L ? s(f, d, m, C) : null;
        case $t:
          return (L = m._init), p(f, d, L(m._payload), C);
      }
      if (jr(m) || vr(m)) return L !== null ? null : c(f, d, m, C, null);
      Dl(f, m);
    }
    return null;
  }
  function x(f, d, m, C, L) {
    if ((typeof C == "string" && C !== "") || typeof C == "number") return (f = f.get(m) || null), a(d, f, "" + C, L);
    if (typeof C == "object" && C !== null) {
      switch (C.$$typeof) {
        case _l:
          return (f = f.get(C.key === null ? m : C.key) || null), u(d, f, C, L);
        case Mn:
          return (f = f.get(C.key === null ? m : C.key) || null), s(d, f, C, L);
        case $t:
          var g = C._init;
          return x(f, d, m, g(C._payload), L);
      }
      if (jr(C) || vr(C)) return (f = f.get(m) || null), c(d, f, C, L, null);
      Dl(d, C);
    }
    return null;
  }
  function _(f, d, m, C) {
    for (var L = null, g = null, k = d, j = (d = 0), M = null; k !== null && j < m.length; j++) {
      k.index > j ? ((M = k), (k = null)) : (M = k.sibling);
      var O = p(f, k, m[j], C);
      if (O === null) {
        k === null && (k = M);
        break;
      }
      e && k && O.alternate === null && t(f, k), (d = o(O, d, j)), g === null ? (L = O) : (g.sibling = O), (g = O), (k = M);
    }
    if (j === m.length) return n(f, k), oe && sn(f, j), L;
    if (k === null) {
      for (; j < m.length; j++) (k = h(f, m[j], C)), k !== null && ((d = o(k, d, j)), g === null ? (L = k) : (g.sibling = k), (g = k));
      return oe && sn(f, j), L;
    }
    for (k = r(f, k); j < m.length; j++)
      (M = x(k, f, j, m[j], C)),
        M !== null && (e && M.alternate !== null && k.delete(M.key === null ? j : M.key), (d = o(M, d, j)), g === null ? (L = M) : (g.sibling = M), (g = M));
    return (
      e &&
        k.forEach(function (V) {
          return t(f, V);
        }),
      oe && sn(f, j),
      L
    );
  }
  function S(f, d, m, C) {
    var L = vr(m);
    if (typeof L != "function") throw Error(R(150));
    if (((m = L.call(m)), m == null)) throw Error(R(151));
    for (var g = (L = null), k = d, j = (d = 0), M = null, O = m.next(); k !== null && !O.done; j++, O = m.next()) {
      k.index > j ? ((M = k), (k = null)) : (M = k.sibling);
      var V = p(f, k, O.value, C);
      if (V === null) {
        k === null && (k = M);
        break;
      }
      e && k && V.alternate === null && t(f, k), (d = o(V, d, j)), g === null ? (L = V) : (g.sibling = V), (g = V), (k = M);
    }
    if (O.done) return n(f, k), oe && sn(f, j), L;
    if (k === null) {
      for (; !O.done; j++, O = m.next()) (O = h(f, O.value, C)), O !== null && ((d = o(O, d, j)), g === null ? (L = O) : (g.sibling = O), (g = O));
      return oe && sn(f, j), L;
    }
    for (k = r(f, k); !O.done; j++, O = m.next())
      (O = x(k, f, j, O.value, C)),
        O !== null && (e && O.alternate !== null && k.delete(O.key === null ? j : O.key), (d = o(O, d, j)), g === null ? (L = O) : (g.sibling = O), (g = O));
    return (
      e &&
        k.forEach(function (fe) {
          return t(f, fe);
        }),
      oe && sn(f, j),
      L
    );
  }
  function N(f, d, m, C) {
    if ((typeof m == "object" && m !== null && m.type === zn && m.key === null && (m = m.props.children), typeof m == "object" && m !== null)) {
      switch (m.$$typeof) {
        case _l:
          e: {
            for (var L = m.key, g = d; g !== null; ) {
              if (g.key === L) {
                if (((L = m.type), L === zn)) {
                  if (g.tag === 7) {
                    n(f, g.sibling), (d = l(g, m.props.children)), (d.return = f), (f = d);
                    break e;
                  }
                } else if (g.elementType === L || (typeof L == "object" && L !== null && L.$$typeof === $t && gs(L) === g.type)) {
                  n(f, g.sibling), (d = l(g, m.props)), (d.ref = _r(f, g, m)), (d.return = f), (f = d);
                  break e;
                }
                n(f, g);
                break;
              } else t(f, g);
              g = g.sibling;
            }
            m.type === zn
              ? ((d = yn(m.props.children, f.mode, C, m.key)), (d.return = f), (f = d))
              : ((C = Gl(m.type, m.key, m.props, null, f.mode, C)), (C.ref = _r(f, d, m)), (C.return = f), (f = C));
          }
          return i(f);
        case Mn:
          e: {
            for (g = m.key; d !== null; ) {
              if (d.key === g)
                if (d.tag === 4 && d.stateNode.containerInfo === m.containerInfo && d.stateNode.implementation === m.implementation) {
                  n(f, d.sibling), (d = l(d, m.children || [])), (d.return = f), (f = d);
                  break e;
                } else {
                  n(f, d);
                  break;
                }
              else t(f, d);
              d = d.sibling;
            }
            (d = Si(m, f.mode, C)), (d.return = f), (f = d);
          }
          return i(f);
        case $t:
          return (g = m._init), N(f, d, g(m._payload), C);
      }
      if (jr(m)) return _(f, d, m, C);
      if (vr(m)) return S(f, d, m, C);
      Dl(f, m);
    }
    return (typeof m == "string" && m !== "") || typeof m == "number"
      ? ((m = "" + m),
        d !== null && d.tag === 6 ? (n(f, d.sibling), (d = l(d, m)), (d.return = f), (f = d)) : (n(f, d), (d = wi(m, f.mode, C)), (d.return = f), (f = d)),
        i(f))
      : n(f, d);
  }
  return N;
}
var nr = Ld(!0),
  jd = Ld(!1),
  hl = {},
  wt = rn(hl),
  el = rn(hl),
  tl = rn(hl);
function hn(e) {
  if (e === hl) throw Error(R(174));
  return e;
}
function Za(e, t) {
  switch ((b(tl, t), b(el, e), b(wt, hl), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : zi(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t), (t = e.namespaceURI || null), (e = e.tagName), (t = zi(t, e));
  }
  ne(wt), b(wt, t);
}
function rr() {
  ne(wt), ne(el), ne(tl);
}
function Td(e) {
  hn(tl.current);
  var t = hn(wt.current),
    n = zi(t, e.type);
  t !== n && (b(el, e), b(wt, n));
}
function Ja(e) {
  el.current === e && (ne(wt), ne(el));
}
var ie = rn(0);
function fo(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (n !== null && ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")) return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var pi = [];
function qa() {
  for (var e = 0; e < pi.length; e++) pi[e]._workInProgressVersionPrimary = null;
  pi.length = 0;
}
var Vl = jt.ReactCurrentDispatcher,
  hi = jt.ReactCurrentBatchConfig,
  _n = 0,
  ae = null,
  ge = null,
  _e = null,
  po = !1,
  Ur = !1,
  nl = 0,
  rm = 0;
function Re() {
  throw Error(R(321));
}
function ba(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!ft(e[n], t[n])) return !1;
  return !0;
}
function eu(e, t, n, r, l, o) {
  if (
    ((_n = o),
    (ae = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Vl.current = e === null || e.memoizedState === null ? am : um),
    (e = n(r, l)),
    Ur)
  ) {
    o = 0;
    do {
      if (((Ur = !1), (nl = 0), 25 <= o)) throw Error(R(301));
      (o += 1), (_e = ge = null), (t.updateQueue = null), (Vl.current = sm), (e = n(r, l));
    } while (Ur);
  }
  if (((Vl.current = ho), (t = ge !== null && ge.next !== null), (_n = 0), (_e = ge = ae = null), (po = !1), t)) throw Error(R(300));
  return e;
}
function tu() {
  var e = nl !== 0;
  return (nl = 0), e;
}
function vt() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return _e === null ? (ae.memoizedState = _e = e) : (_e = _e.next = e), _e;
}
function rt() {
  if (ge === null) {
    var e = ae.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ge.next;
  var t = _e === null ? ae.memoizedState : _e.next;
  if (t !== null) (_e = t), (ge = e);
  else {
    if (e === null) throw Error(R(310));
    (ge = e),
      (e = { memoizedState: ge.memoizedState, baseState: ge.baseState, baseQueue: ge.baseQueue, queue: ge.queue, next: null }),
      _e === null ? (ae.memoizedState = _e = e) : (_e = _e.next = e);
  }
  return _e;
}
function rl(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function mi(e) {
  var t = rt(),
    n = t.queue;
  if (n === null) throw Error(R(311));
  n.lastRenderedReducer = e;
  var r = ge,
    l = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (l !== null) {
      var i = l.next;
      (l.next = o.next), (o.next = i);
    }
    (r.baseQueue = l = o), (n.pending = null);
  }
  if (l !== null) {
    (o = l.next), (r = r.baseState);
    var a = (i = null),
      u = null,
      s = o;
    do {
      var c = s.lane;
      if ((_n & c) === c)
        u !== null && (u = u.next = { lane: 0, action: s.action, hasEagerState: s.hasEagerState, eagerState: s.eagerState, next: null }),
          (r = s.hasEagerState ? s.eagerState : e(r, s.action));
      else {
        var h = { lane: c, action: s.action, hasEagerState: s.hasEagerState, eagerState: s.eagerState, next: null };
        u === null ? ((a = u = h), (i = r)) : (u = u.next = h), (ae.lanes |= c), (xn |= c);
      }
      s = s.next;
    } while (s !== null && s !== o);
    u === null ? (i = r) : (u.next = a),
      ft(r, t.memoizedState) || (Ue = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = u),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (o = l.lane), (ae.lanes |= o), (xn |= o), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function vi(e) {
  var t = rt(),
    n = t.queue;
  if (n === null) throw Error(R(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    o = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var i = (l = l.next);
    do (o = e(o, i.action)), (i = i.next);
    while (i !== l);
    ft(o, t.memoizedState) || (Ue = !0), (t.memoizedState = o), t.baseQueue === null && (t.baseState = o), (n.lastRenderedState = o);
  }
  return [o, r];
}
function Dd() {}
function Md(e, t) {
  var n = ae,
    r = rt(),
    l = t(),
    o = !ft(r.memoizedState, l);
  if (
    (o && ((r.memoizedState = l), (Ue = !0)),
    (r = r.queue),
    nu(Fd.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (_e !== null && _e.memoizedState.tag & 1))
  ) {
    if (((n.flags |= 2048), ll(9, Od.bind(null, n, r, l, t), void 0, null), xe === null)) throw Error(R(349));
    _n & 30 || zd(n, t, l);
  }
  return l;
}
function zd(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = ae.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }), (ae.updateQueue = t), (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Od(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Id(t) && Ud(e);
}
function Fd(e, t, n) {
  return n(function () {
    Id(t) && Ud(e);
  });
}
function Id(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !ft(e, n);
  } catch {
    return !0;
  }
}
function Ud(e) {
  var t = Rt(e, 1);
  t !== null && dt(t, e, 1, -1);
}
function ys(e) {
  var t = vt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: rl, lastRenderedState: e }),
    (t.queue = e),
    (e = e.dispatch = im.bind(null, ae, e)),
    [t.memoizedState, e]
  );
}
function ll(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = ae.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }), (ae.updateQueue = t), (t.lastEffect = e.next = e))
      : ((n = t.lastEffect), n === null ? (t.lastEffect = e.next = e) : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Ad() {
  return rt().memoizedState;
}
function Wl(e, t, n, r) {
  var l = vt();
  (ae.flags |= e), (l.memoizedState = ll(1 | t, n, void 0, r === void 0 ? null : r));
}
function jo(e, t, n, r) {
  var l = rt();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (ge !== null) {
    var i = ge.memoizedState;
    if (((o = i.destroy), r !== null && ba(r, i.deps))) {
      l.memoizedState = ll(t, n, o, r);
      return;
    }
  }
  (ae.flags |= e), (l.memoizedState = ll(1 | t, n, o, r));
}
function ws(e, t) {
  return Wl(8390656, 8, e, t);
}
function nu(e, t) {
  return jo(2048, 8, e, t);
}
function $d(e, t) {
  return jo(4, 2, e, t);
}
function Bd(e, t) {
  return jo(4, 4, e, t);
}
function Hd(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Vd(e, t, n) {
  return (n = n != null ? n.concat([e]) : null), jo(4, 4, Hd.bind(null, t, e), n);
}
function ru() {}
function Wd(e, t) {
  var n = rt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ba(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
}
function Qd(e, t) {
  var n = rt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ba(t, r[1]) ? r[0] : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Kd(e, t, n) {
  return _n & 21
    ? (ft(n, t) || ((n = Xc()), (ae.lanes |= n), (xn |= n), (e.baseState = !0)), t)
    : (e.baseState && ((e.baseState = !1), (Ue = !0)), (e.memoizedState = n));
}
function lm(e, t) {
  var n = Z;
  (Z = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = hi.transition;
  hi.transition = {};
  try {
    e(!1), t();
  } finally {
    (Z = n), (hi.transition = r);
  }
}
function Yd() {
  return rt().memoizedState;
}
function om(e, t, n) {
  var r = qt(e);
  if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), Gd(e))) Xd(t, n);
  else if (((n = kd(e, t, n, r)), n !== null)) {
    var l = ze();
    dt(n, e, r, l), Zd(n, t, r);
  }
}
function im(e, t, n) {
  var r = qt(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Gd(e)) Xd(t, l);
  else {
    var o = e.alternate;
    if (e.lanes === 0 && (o === null || o.lanes === 0) && ((o = t.lastRenderedReducer), o !== null))
      try {
        var i = t.lastRenderedState,
          a = o(i, n);
        if (((l.hasEagerState = !0), (l.eagerState = a), ft(a, i))) {
          var u = t.interleaved;
          u === null ? ((l.next = l), Ga(t)) : ((l.next = u.next), (u.next = l)), (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = kd(e, t, l, r)), n !== null && ((l = ze()), dt(n, e, r, l), Zd(n, t, r));
  }
}
function Gd(e) {
  var t = e.alternate;
  return e === ae || (t !== null && t === ae);
}
function Xd(e, t) {
  Ur = po = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t);
}
function Zd(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), za(e, n);
  }
}
var ho = {
    readContext: nt,
    useCallback: Re,
    useContext: Re,
    useEffect: Re,
    useImperativeHandle: Re,
    useInsertionEffect: Re,
    useLayoutEffect: Re,
    useMemo: Re,
    useReducer: Re,
    useRef: Re,
    useState: Re,
    useDebugValue: Re,
    useDeferredValue: Re,
    useTransition: Re,
    useMutableSource: Re,
    useSyncExternalStore: Re,
    useId: Re,
    unstable_isNewReconciler: !1,
  },
  am = {
    readContext: nt,
    useCallback: function (e, t) {
      return (vt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: nt,
    useEffect: ws,
    useImperativeHandle: function (e, t, n) {
      return (n = n != null ? n.concat([e]) : null), Wl(4194308, 4, Hd.bind(null, t, e), n);
    },
    useLayoutEffect: function (e, t) {
      return Wl(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Wl(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = vt();
      return (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e;
    },
    useReducer: function (e, t, n) {
      var r = vt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }),
        (r.queue = e),
        (e = e.dispatch = om.bind(null, ae, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = vt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: ys,
    useDebugValue: ru,
    useDeferredValue: function (e) {
      return (vt().memoizedState = e);
    },
    useTransition: function () {
      var e = ys(!1),
        t = e[0];
      return (e = lm.bind(null, e[1])), (vt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = ae,
        l = vt();
      if (oe) {
        if (n === void 0) throw Error(R(407));
        n = n();
      } else {
        if (((n = t()), xe === null)) throw Error(R(349));
        _n & 30 || zd(r, t, n);
      }
      l.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (l.queue = o), ws(Fd.bind(null, r, o, e), [e]), (r.flags |= 2048), ll(9, Od.bind(null, r, o, n, t), void 0, null), n;
    },
    useId: function () {
      var e = vt(),
        t = xe.identifierPrefix;
      if (oe) {
        var n = Et,
          r = xt;
        (n = (r & ~(1 << (32 - ct(r) - 1))).toString(32) + n), (t = ":" + t + "R" + n), (n = nl++), 0 < n && (t += "H" + n.toString(32)), (t += ":");
      } else (n = rm++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  um = {
    readContext: nt,
    useCallback: Wd,
    useContext: nt,
    useEffect: nu,
    useImperativeHandle: Vd,
    useInsertionEffect: $d,
    useLayoutEffect: Bd,
    useMemo: Qd,
    useReducer: mi,
    useRef: Ad,
    useState: function () {
      return mi(rl);
    },
    useDebugValue: ru,
    useDeferredValue: function (e) {
      var t = rt();
      return Kd(t, ge.memoizedState, e);
    },
    useTransition: function () {
      var e = mi(rl)[0],
        t = rt().memoizedState;
      return [e, t];
    },
    useMutableSource: Dd,
    useSyncExternalStore: Md,
    useId: Yd,
    unstable_isNewReconciler: !1,
  },
  sm = {
    readContext: nt,
    useCallback: Wd,
    useContext: nt,
    useEffect: nu,
    useImperativeHandle: Vd,
    useInsertionEffect: $d,
    useLayoutEffect: Bd,
    useMemo: Qd,
    useReducer: vi,
    useRef: Ad,
    useState: function () {
      return vi(rl);
    },
    useDebugValue: ru,
    useDeferredValue: function (e) {
      var t = rt();
      return ge === null ? (t.memoizedState = e) : Kd(t, ge.memoizedState, e);
    },
    useTransition: function () {
      var e = vi(rl)[0],
        t = rt().memoizedState;
      return [e, t];
    },
    useMutableSource: Dd,
    useSyncExternalStore: Md,
    useId: Yd,
    unstable_isNewReconciler: !1,
  };
function lr(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Ip(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (o) {
    l =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function gi(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function ra(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var cm = typeof WeakMap == "function" ? WeakMap : Map;
function Jd(e, t, n) {
  (n = Ct(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      vo || ((vo = !0), (pa = r)), ra(e, t);
    }),
    n
  );
}
function qd(e, t, n) {
  (n = Ct(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        ra(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        ra(e, t), typeof r != "function" && (Jt === null ? (Jt = new Set([this])) : Jt.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, { componentStack: i !== null ? i : "" });
      }),
    n
  );
}
function Ss(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new cm();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = Cm.bind(null, e, t, n)), t.then(e, e));
}
function _s(e) {
  do {
    var t;
    if (((t = e.tag === 13) && ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)), t)) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function xs(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 && (n.alternate === null ? (n.tag = 17) : ((t = Ct(-1, 1)), (t.tag = 2), Zt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var dm = jt.ReactCurrentOwner,
  Ue = !1;
function Me(e, t, n, r) {
  t.child = e === null ? jd(t, null, n, r) : nr(t, e.child, n, r);
}
function Es(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return (
    Jn(t, l),
    (r = eu(e, t, n, r, o, l)),
    (n = tu()),
    e !== null && !Ue
      ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l), Lt(e, t, l))
      : (oe && n && Ha(t), (t.flags |= 1), Me(e, t, r, l), t.child)
  );
}
function Cs(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" && !du(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), bd(e, t, o, r, l))
      : ((e = Gl(n.type, null, r, t, t.mode, l)), (e.ref = t.ref), (e.return = t), (t.child = e));
  }
  if (((o = e.child), !(e.lanes & l))) {
    var i = o.memoizedProps;
    if (((n = n.compare), (n = n !== null ? n : Zr), n(i, r) && e.ref === t.ref)) return Lt(e, t, l);
  }
  return (t.flags |= 1), (e = bt(o, r)), (e.ref = t.ref), (e.return = t), (t.child = e);
}
function bd(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Zr(o, r) && e.ref === t.ref)
      if (((Ue = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0)) e.flags & 131072 && (Ue = !0);
      else return (t.lanes = e.lanes), Lt(e, t, l);
  }
  return la(e, t, n, r, l);
}
function ef(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1)) (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }), b(Wn, Ve), (Ve |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
          (t.updateQueue = null),
          b(Wn, Ve),
          (Ve |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }), (r = o !== null ? o.baseLanes : n), b(Wn, Ve), (Ve |= r);
    }
  else o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n), b(Wn, Ve), (Ve |= r);
  return Me(e, t, l, n), t.child;
}
function tf(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) && ((t.flags |= 512), (t.flags |= 2097152));
}
function la(e, t, n, r, l) {
  var o = $e(n) ? wn : Te.current;
  return (
    (o = er(t, o)),
    Jn(t, l),
    (n = eu(e, t, n, r, o, l)),
    (r = tu()),
    e !== null && !Ue
      ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l), Lt(e, t, l))
      : (oe && r && Ha(t), (t.flags |= 1), Me(e, t, n, l), t.child)
  );
}
function ks(e, t, n, r, l) {
  if ($e(n)) {
    var o = !0;
    oo(t);
  } else o = !1;
  if ((Jn(t, l), t.stateNode === null)) Ql(e, t), Rd(t, n, r), na(t, n, r, l), (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      a = t.memoizedProps;
    i.props = a;
    var u = i.context,
      s = n.contextType;
    typeof s == "object" && s !== null ? (s = nt(s)) : ((s = $e(n) ? wn : Te.current), (s = er(t, s)));
    var c = n.getDerivedStateFromProps,
      h = typeof c == "function" || typeof i.getSnapshotBeforeUpdate == "function";
    h ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function") ||
      ((a !== r || u !== s) && vs(t, i, r, s)),
      (Bt = !1);
    var p = t.memoizedState;
    (i.state = p),
      co(t, r, i, l),
      (u = t.memoizedState),
      a !== r || p !== u || Ae.current || Bt
        ? (typeof c == "function" && (ta(t, n, c, r), (u = t.memoizedState)),
          (a = Bt || ms(t, n, a, r, p, u, s))
            ? (h ||
                (typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function") ||
                (typeof i.componentWillMount == "function" && i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), (t.memoizedProps = r), (t.memoizedState = u)),
          (i.props = r),
          (i.state = u),
          (i.context = s),
          (r = a))
        : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), (r = !1));
  } else {
    (i = t.stateNode),
      Pd(e, t),
      (a = t.memoizedProps),
      (s = t.type === t.elementType ? a : it(t.type, a)),
      (i.props = s),
      (h = t.pendingProps),
      (p = i.context),
      (u = n.contextType),
      typeof u == "object" && u !== null ? (u = nt(u)) : ((u = $e(n) ? wn : Te.current), (u = er(t, u)));
    var x = n.getDerivedStateFromProps;
    (c = typeof x == "function" || typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function") ||
      ((a !== h || p !== u) && vs(t, i, r, u)),
      (Bt = !1),
      (p = t.memoizedState),
      (i.state = p),
      co(t, r, i, l);
    var _ = t.memoizedState;
    a !== h || p !== _ || Ae.current || Bt
      ? (typeof x == "function" && (ta(t, n, x, r), (_ = t.memoizedState)),
        (s = Bt || ms(t, n, s, r, p, _, u) || !1)
          ? (c ||
              (typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, _, u),
              typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, _, u)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" || (a === e.memoizedProps && p === e.memoizedState) || (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" || (a === e.memoizedProps && p === e.memoizedState) || (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = _)),
        (i.props = r),
        (i.state = _),
        (i.context = u),
        (r = s))
      : (typeof i.componentDidUpdate != "function" || (a === e.memoizedProps && p === e.memoizedState) || (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" || (a === e.memoizedProps && p === e.memoizedState) || (t.flags |= 1024),
        (r = !1));
  }
  return oa(e, t, n, r, o, l);
}
function oa(e, t, n, r, l, o) {
  tf(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return l && cs(t, n, !1), Lt(e, t, o);
  (r = t.stateNode), (dm.current = t);
  var a = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i ? ((t.child = nr(t, e.child, null, o)), (t.child = nr(t, null, a, o))) : Me(e, t, a, o),
    (t.memoizedState = r.state),
    l && cs(t, n, !0),
    t.child
  );
}
function nf(e) {
  var t = e.stateNode;
  t.pendingContext ? ss(e, t.pendingContext, t.pendingContext !== t.context) : t.context && ss(e, t.context, !1), Za(e, t.containerInfo);
}
function Ps(e, t, n, r, l) {
  return tr(), Wa(l), (t.flags |= 256), Me(e, t, n, r), t.child;
}
var ia = { dehydrated: null, treeContext: null, retryLane: 0 };
function aa(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function rf(e, t, n) {
  var r = t.pendingProps,
    l = ie.current,
    o = !1,
    i = (t.flags & 128) !== 0,
    a;
  if (
    ((a = i) || (a = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    a ? ((o = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (l |= 1),
    b(ie, l & 1),
    e === null)
  )
    return (
      bi(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1 ? (e.data === "$!" ? (t.lanes = 8) : (t.lanes = 1073741824)) : (t.lanes = 1), null)
        : ((i = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (i = { mode: "hidden", children: i }),
              !(r & 1) && o !== null ? ((o.childLanes = 0), (o.pendingProps = i)) : (o = Mo(i, r, 0, null)),
              (e = yn(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = aa(n)),
              (t.memoizedState = ia),
              e)
            : lu(t, i))
    );
  if (((l = e.memoizedState), l !== null && ((a = l.dehydrated), a !== null))) return fm(e, t, i, r, a, l, n);
  if (o) {
    (o = r.fallback), (i = t.mode), (l = e.child), (a = l.sibling);
    var u = { mode: "hidden", children: r.children };
    return (
      !(i & 1) && t.child !== l
        ? ((r = t.child), (r.childLanes = 0), (r.pendingProps = u), (t.deletions = null))
        : ((r = bt(l, u)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      a !== null ? (o = bt(a, o)) : ((o = yn(o, i, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (i = e.child.memoizedState),
      (i = i === null ? aa(n) : { baseLanes: i.baseLanes | n, cachePool: null, transitions: i.transitions }),
      (o.memoizedState = i),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = ia),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = bt(o, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null && ((n = t.deletions), n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function lu(e, t) {
  return (t = Mo({ mode: "visible", children: t }, e.mode, 0, null)), (t.return = e), (e.child = t);
}
function Ml(e, t, n, r) {
  return r !== null && Wa(r), nr(t, e.child, null, n), (e = lu(t, t.pendingProps.children)), (e.flags |= 2), (t.memoizedState = null), e;
}
function fm(e, t, n, r, l, o, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = gi(Error(R(422)))), Ml(e, t, i, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (l = t.mode),
        (r = Mo({ mode: "visible", children: r.children }, l, 0, null)),
        (o = yn(o, l, i, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && nr(t, e.child, null, i),
        (t.child.memoizedState = aa(i)),
        (t.memoizedState = ia),
        o);
  if (!(t.mode & 1)) return Ml(e, t, i, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (o = Error(R(419))), (r = gi(o, r, void 0)), Ml(e, t, i, r);
  }
  if (((a = (i & e.childLanes) !== 0), Ue || a)) {
    if (((r = xe), r !== null)) {
      switch (i & -i) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
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
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | i) ? 0 : l), l !== 0 && l !== o.retryLane && ((o.retryLane = l), Rt(e, l), dt(r, e, l, -1));
    }
    return cu(), (r = gi(Error(R(421)))), Ml(e, t, i, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128), (t.child = e.child), (t = km.bind(null, e)), (l._reactRetry = t), null)
    : ((e = o.treeContext),
      (We = Xt(l.nextSibling)),
      (Qe = t),
      (oe = !0),
      (st = null),
      e !== null && ((qe[be++] = xt), (qe[be++] = Et), (qe[be++] = Sn), (xt = e.id), (Et = e.overflow), (Sn = t)),
      (t = lu(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Ns(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), ea(e.return, t, n);
}
function yi(e, t, n, r, l) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l })
    : ((o.isBackwards = t), (o.rendering = null), (o.renderingStartTime = 0), (o.last = r), (o.tail = n), (o.tailMode = l));
}
function lf(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    o = r.tail;
  if ((Me(e, t, r.children, n), (r = ie.current), r & 2)) (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Ns(e, n, t);
        else if (e.tag === 19) Ns(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((b(ie, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; ) (e = n.alternate), e !== null && fo(e) === null && (l = n), (n = n.sibling);
        (n = l), n === null ? ((l = t.child), (t.child = null)) : ((l = n.sibling), (n.sibling = null)), yi(t, !1, l, n, o);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && fo(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        yi(t, !0, n, null, o);
        break;
      case "together":
        yi(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Ql(e, t) {
  !(t.mode & 1) && e !== null && ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Lt(e, t, n) {
  if ((e !== null && (t.dependencies = e.dependencies), (xn |= t.lanes), !(n & t.childLanes))) return null;
  if (e !== null && t.child !== e.child) throw Error(R(153));
  if (t.child !== null) {
    for (e = t.child, n = bt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
      (e = e.sibling), (n = n.sibling = bt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function pm(e, t, n) {
  switch (t.tag) {
    case 3:
      nf(t), tr();
      break;
    case 5:
      Td(t);
      break;
    case 1:
      $e(t.type) && oo(t);
      break;
    case 4:
      Za(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      b(uo, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (b(ie, ie.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? rf(e, t, n)
          : (b(ie, ie.current & 1), (e = Lt(e, t, n)), e !== null ? e.sibling : null);
      b(ie, ie.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return lf(e, t, n);
        t.flags |= 128;
      }
      if (((l = t.memoizedState), l !== null && ((l.rendering = null), (l.tail = null), (l.lastEffect = null)), b(ie, ie.current), r)) break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), ef(e, t, n);
  }
  return Lt(e, t, n);
}
var of, ua, af, uf;
of = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
ua = function () {};
af = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), hn(wt.current);
    var o = null;
    switch (n) {
      case "input":
        (l = ji(e, l)), (r = ji(e, r)), (o = []);
        break;
      case "select":
        (l = ue({}, l, { value: void 0 })), (r = ue({}, r, { value: void 0 })), (o = []);
        break;
      case "textarea":
        (l = Mi(e, l)), (r = Mi(e, r)), (o = []);
        break;
      default:
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = ro);
    }
    Oi(n, r);
    var i;
    n = null;
    for (s in l)
      if (!r.hasOwnProperty(s) && l.hasOwnProperty(s) && l[s] != null)
        if (s === "style") {
          var a = l[s];
          for (i in a) a.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
        } else
          s !== "dangerouslySetInnerHTML" &&
            s !== "children" &&
            s !== "suppressContentEditableWarning" &&
            s !== "suppressHydrationWarning" &&
            s !== "autoFocus" &&
            (Vr.hasOwnProperty(s) ? o || (o = []) : (o = o || []).push(s, null));
    for (s in r) {
      var u = r[s];
      if (((a = l != null ? l[s] : void 0), r.hasOwnProperty(s) && u !== a && (u != null || a != null)))
        if (s === "style")
          if (a) {
            for (i in a) !a.hasOwnProperty(i) || (u && u.hasOwnProperty(i)) || (n || (n = {}), (n[i] = ""));
            for (i in u) u.hasOwnProperty(i) && a[i] !== u[i] && (n || (n = {}), (n[i] = u[i]));
          } else n || (o || (o = []), o.push(s, n)), (n = u);
        else
          s === "dangerouslySetInnerHTML"
            ? ((u = u ? u.__html : void 0), (a = a ? a.__html : void 0), u != null && a !== u && (o = o || []).push(s, u))
            : s === "children"
            ? (typeof u != "string" && typeof u != "number") || (o = o || []).push(s, "" + u)
            : s !== "suppressContentEditableWarning" &&
              s !== "suppressHydrationWarning" &&
              (Vr.hasOwnProperty(s) ? (u != null && s === "onScroll" && te("scroll", e), o || a === u || (o = [])) : (o = o || []).push(s, u));
    }
    n && (o = o || []).push("style", n);
    var s = o;
    (t.updateQueue = s) && (t.flags |= 4);
  }
};
uf = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function xr(e, t) {
  if (!oe)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; ) t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; ) n.alternate !== null && (r = n), (n = n.sibling);
        r === null ? (t || e.tail === null ? (e.tail = null) : (e.tail.sibling = null)) : (r.sibling = null);
    }
}
function Le(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes), (r |= l.subtreeFlags & 14680064), (r |= l.flags & 14680064), (l.return = e), (l = l.sibling);
  else for (l = e.child; l !== null; ) (n |= l.lanes | l.childLanes), (r |= l.subtreeFlags), (r |= l.flags), (l.return = e), (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function hm(e, t, n) {
  var r = t.pendingProps;
  switch ((Va(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Le(t), null;
    case 1:
      return $e(t.type) && lo(), Le(t), null;
    case 3:
      return (
        (r = t.stateNode),
        rr(),
        ne(Ae),
        ne(Te),
        qa(),
        r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Tl(t)
            ? (t.flags |= 4)
            : e === null || (e.memoizedState.isDehydrated && !(t.flags & 256)) || ((t.flags |= 1024), st !== null && (va(st), (st = null)))),
        ua(e, t),
        Le(t),
        null
      );
    case 5:
      Ja(t);
      var l = hn(tl.current);
      if (((n = t.type), e !== null && t.stateNode != null)) af(e, t, n, r, l), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(R(166));
          return Le(t), null;
        }
        if (((e = hn(wt.current)), Tl(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[gt] = t), (r[br] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              te("cancel", r), te("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              te("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Dr.length; l++) te(Dr[l], r);
              break;
            case "source":
              te("error", r);
              break;
            case "img":
            case "image":
            case "link":
              te("error", r), te("load", r);
              break;
            case "details":
              te("toggle", r);
              break;
            case "input":
              Fu(r, o), te("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }), te("invalid", r);
              break;
            case "textarea":
              Uu(r, o), te("invalid", r);
          }
          Oi(n, o), (l = null);
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var a = o[i];
              i === "children"
                ? typeof a == "string"
                  ? r.textContent !== a && (o.suppressHydrationWarning !== !0 && jl(r.textContent, a, e), (l = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (o.suppressHydrationWarning !== !0 && jl(r.textContent, a, e), (l = ["children", "" + a]))
                : Vr.hasOwnProperty(i) && a != null && i === "onScroll" && te("scroll", r);
            }
          switch (n) {
            case "input":
              xl(r), Iu(r, o, !0);
              break;
            case "textarea":
              xl(r), Au(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = ro);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (i = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = zc(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = i.createElement("div")), (e.innerHTML = "<script></script>"), (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = i.createElement(n, { is: r.is }))
                : ((e = i.createElement(n)), n === "select" && ((i = e), r.multiple ? (i.multiple = !0) : r.size && (i.size = r.size)))
              : (e = i.createElementNS(e, n)),
            (e[gt] = t),
            (e[br] = r),
            of(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = Fi(n, r)), n)) {
              case "dialog":
                te("cancel", e), te("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                te("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < Dr.length; l++) te(Dr[l], e);
                l = r;
                break;
              case "source":
                te("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                te("error", e), te("load", e), (l = r);
                break;
              case "details":
                te("toggle", e), (l = r);
                break;
              case "input":
                Fu(e, r), (l = ji(e, r)), te("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }), (l = ue({}, r, { value: void 0 })), te("invalid", e);
                break;
              case "textarea":
                Uu(e, r), (l = Mi(e, r)), te("invalid", e);
                break;
              default:
                l = r;
            }
            Oi(n, l), (a = l);
            for (o in a)
              if (a.hasOwnProperty(o)) {
                var u = a[o];
                o === "style"
                  ? Ic(e, u)
                  : o === "dangerouslySetInnerHTML"
                  ? ((u = u ? u.__html : void 0), u != null && Oc(e, u))
                  : o === "children"
                  ? typeof u == "string"
                    ? (n !== "textarea" || u !== "") && Wr(e, u)
                    : typeof u == "number" && Wr(e, "" + u)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (Vr.hasOwnProperty(o) ? u != null && o === "onScroll" && te("scroll", e) : u != null && Ra(e, o, u, i));
              }
            switch (n) {
              case "input":
                xl(e), Iu(e, r, !1);
                break;
              case "textarea":
                xl(e), Au(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + en(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null ? Yn(e, !!r.multiple, o, !1) : r.defaultValue != null && Yn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = ro);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Le(t), null;
    case 6:
      if (e && t.stateNode != null) uf(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(R(166));
        if (((n = hn(tl.current)), hn(wt.current), Tl(t))) {
          if (((r = t.stateNode), (n = t.memoizedProps), (r[gt] = t), (o = r.nodeValue !== n) && ((e = Qe), e !== null)))
            switch (e.tag) {
              case 3:
                jl(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && jl(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)), (r[gt] = t), (t.stateNode = r);
      }
      return Le(t), null;
    case 13:
      if ((ne(ie), (r = t.memoizedState), e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))) {
        if (oe && We !== null && t.mode & 1 && !(t.flags & 128)) Cd(), tr(), (t.flags |= 98560), (o = !1);
        else if (((o = Tl(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(R(318));
            if (((o = t.memoizedState), (o = o !== null ? o.dehydrated : null), !o)) throw Error(R(317));
            o[gt] = t;
          } else tr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Le(t), (o = !1);
        } else st !== null && (va(st), (st = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192), t.mode & 1 && (e === null || ie.current & 1 ? ye === 0 && (ye = 3) : cu())),
          t.updateQueue !== null && (t.flags |= 4),
          Le(t),
          null);
    case 4:
      return rr(), ua(e, t), e === null && Jr(t.stateNode.containerInfo), Le(t), null;
    case 10:
      return Ya(t.type._context), Le(t), null;
    case 17:
      return $e(t.type) && lo(), Le(t), null;
    case 19:
      if ((ne(ie), (o = t.memoizedState), o === null)) return Le(t), null;
      if (((r = (t.flags & 128) !== 0), (i = o.rendering), i === null))
        if (r) xr(o, !1);
        else {
          if (ye !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = fo(e)), i !== null)) {
                for (
                  t.flags |= 128, xr(o, !1), r = i.updateQueue, r !== null && ((t.updateQueue = r), (t.flags |= 4)), t.subtreeFlags = 0, r = n, n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (i = o.alternate),
                    i === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = i.childLanes),
                        (o.lanes = i.lanes),
                        (o.child = i.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = i.memoizedProps),
                        (o.memoizedState = i.memoizedState),
                        (o.updateQueue = i.updateQueue),
                        (o.type = i.type),
                        (e = i.dependencies),
                        (o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext })),
                    (n = n.sibling);
                return b(ie, (ie.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null && he() > or && ((t.flags |= 128), (r = !0), xr(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = fo(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              xr(o, !0),
              o.tail === null && o.tailMode === "hidden" && !i.alternate && !oe)
            )
              return Le(t), null;
          } else 2 * he() - o.renderingStartTime > or && n !== 1073741824 && ((t.flags |= 128), (r = !0), xr(o, !1), (t.lanes = 4194304));
        o.isBackwards ? ((i.sibling = t.child), (t.child = i)) : ((n = o.last), n !== null ? (n.sibling = i) : (t.child = i), (o.last = i));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = he()),
          (t.sibling = null),
          (n = ie.current),
          b(ie, r ? (n & 1) | 2 : n & 1),
          t)
        : (Le(t), null);
    case 22:
    case 23:
      return (
        su(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1 ? Ve & 1073741824 && (Le(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Le(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(R(156, t.tag));
}
function mm(e, t) {
  switch ((Va(t), t.tag)) {
    case 1:
      return $e(t.type) && lo(), (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
    case 3:
      return rr(), ne(Ae), ne(Te), qa(), (e = t.flags), e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null;
    case 5:
      return Ja(t), null;
    case 13:
      if ((ne(ie), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(R(340));
        tr();
      }
      return (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
    case 19:
      return ne(ie), null;
    case 4:
      return rr(), null;
    case 10:
      return Ya(t.type._context), null;
    case 22:
    case 23:
      return su(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var zl = !1,
  je = !1,
  vm = typeof WeakSet == "function" ? WeakSet : Set,
  z = null;
function Vn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        ce(e, t, r);
      }
    else n.current = null;
}
function sa(e, t, n) {
  try {
    n();
  } catch (r) {
    ce(e, t, r);
  }
}
var Rs = !1;
function gm(e, t) {
  if (((Ki = eo), (e = dd()), Ba(e))) {
    if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0,
            a = -1,
            u = -1,
            s = 0,
            c = 0,
            h = e,
            p = null;
          t: for (;;) {
            for (
              var x;
              h !== n || (l !== 0 && h.nodeType !== 3) || (a = i + l),
                h !== o || (r !== 0 && h.nodeType !== 3) || (u = i + r),
                h.nodeType === 3 && (i += h.nodeValue.length),
                (x = h.firstChild) !== null;

            )
              (p = h), (h = x);
            for (;;) {
              if (h === e) break t;
              if ((p === n && ++s === l && (a = i), p === o && ++c === r && (u = i), (x = h.nextSibling) !== null)) break;
              (h = p), (p = h.parentNode);
            }
            h = x;
          }
          n = a === -1 || u === -1 ? null : { start: a, end: u };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Yi = { focusedElem: e, selectionRange: n }, eo = !1, z = t; z !== null; )
    if (((t = z), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)) (e.return = t), (z = e);
    else
      for (; z !== null; ) {
        t = z;
        try {
          var _ = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (_ !== null) {
                  var S = _.memoizedProps,
                    N = _.memoizedState,
                    f = t.stateNode,
                    d = f.getSnapshotBeforeUpdate(t.elementType === t.type ? S : it(t.type, S), N);
                  f.__reactInternalSnapshotBeforeUpdate = d;
                }
                break;
              case 3:
                var m = t.stateNode.containerInfo;
                m.nodeType === 1 ? (m.textContent = "") : m.nodeType === 9 && m.documentElement && m.removeChild(m.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(R(163));
            }
        } catch (C) {
          ce(t, t.return, C);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (z = e);
          break;
        }
        z = t.return;
      }
  return (_ = Rs), (Rs = !1), _;
}
function Ar(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        (l.destroy = void 0), o !== void 0 && sa(t, n, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function To(e, t) {
  if (((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function ca(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function sf(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), sf(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 && ((t = e.stateNode), t !== null && (delete t[gt], delete t[br], delete t[Zi], delete t[bh], delete t[em])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function cf(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Ls(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || cf(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function da(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8 ? ((t = n.parentNode), t.insertBefore(e, n)) : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = ro));
  else if (r !== 4 && ((e = e.child), e !== null)) for (da(e, t, n), e = e.sibling; e !== null; ) da(e, t, n), (e = e.sibling);
}
function fa(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null)) for (fa(e, t, n), e = e.sibling; e !== null; ) fa(e, t, n), (e = e.sibling);
}
var ke = null,
  at = !1;
function Ut(e, t, n) {
  for (n = n.child; n !== null; ) df(e, t, n), (n = n.sibling);
}
function df(e, t, n) {
  if (yt && typeof yt.onCommitFiberUnmount == "function")
    try {
      yt.onCommitFiberUnmount(Eo, n);
    } catch {}
  switch (n.tag) {
    case 5:
      je || Vn(n, t);
    case 6:
      var r = ke,
        l = at;
      (ke = null),
        Ut(e, t, n),
        (ke = r),
        (at = l),
        ke !== null && (at ? ((e = ke), (n = n.stateNode), e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ke.removeChild(n.stateNode));
      break;
    case 18:
      ke !== null && (at ? ((e = ke), (n = n.stateNode), e.nodeType === 8 ? di(e.parentNode, n) : e.nodeType === 1 && di(e, n), Gr(e)) : di(ke, n.stateNode));
      break;
    case 4:
      (r = ke), (l = at), (ke = n.stateNode.containerInfo), (at = !0), Ut(e, t, n), (ke = r), (at = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!je && ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))) {
        l = r = r.next;
        do {
          var o = l,
            i = o.destroy;
          (o = o.tag), i !== void 0 && (o & 2 || o & 4) && sa(n, t, i), (l = l.next);
        } while (l !== r);
      }
      Ut(e, t, n);
      break;
    case 1:
      if (!je && (Vn(n, t), (r = n.stateNode), typeof r.componentWillUnmount == "function"))
        try {
          (r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount();
        } catch (a) {
          ce(n, t, a);
        }
      Ut(e, t, n);
      break;
    case 21:
      Ut(e, t, n);
      break;
    case 22:
      n.mode & 1 ? ((je = (r = je) || n.memoizedState !== null), Ut(e, t, n), (je = r)) : Ut(e, t, n);
      break;
    default:
      Ut(e, t, n);
  }
}
function js(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new vm()),
      t.forEach(function (r) {
        var l = Pm.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function ot(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var o = e,
          i = t,
          a = i;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (ke = a.stateNode), (at = !1);
              break e;
            case 3:
              (ke = a.stateNode.containerInfo), (at = !0);
              break e;
            case 4:
              (ke = a.stateNode.containerInfo), (at = !0);
              break e;
          }
          a = a.return;
        }
        if (ke === null) throw Error(R(160));
        df(o, i, l), (ke = null), (at = !1);
        var u = l.alternate;
        u !== null && (u.return = null), (l.return = null);
      } catch (s) {
        ce(l, t, s);
      }
    }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) ff(t, e), (t = t.sibling);
}
function ff(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((ot(t, e), mt(e), r & 4)) {
        try {
          Ar(3, e, e.return), To(3, e);
        } catch (S) {
          ce(e, e.return, S);
        }
        try {
          Ar(5, e, e.return);
        } catch (S) {
          ce(e, e.return, S);
        }
      }
      break;
    case 1:
      ot(t, e), mt(e), r & 512 && n !== null && Vn(n, n.return);
      break;
    case 5:
      if ((ot(t, e), mt(e), r & 512 && n !== null && Vn(n, n.return), e.flags & 32)) {
        var l = e.stateNode;
        try {
          Wr(l, "");
        } catch (S) {
          ce(e, e.return, S);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var o = e.memoizedProps,
          i = n !== null ? n.memoizedProps : o,
          a = e.type,
          u = e.updateQueue;
        if (((e.updateQueue = null), u !== null))
          try {
            a === "input" && o.type === "radio" && o.name != null && Dc(l, o), Fi(a, i);
            var s = Fi(a, o);
            for (i = 0; i < u.length; i += 2) {
              var c = u[i],
                h = u[i + 1];
              c === "style" ? Ic(l, h) : c === "dangerouslySetInnerHTML" ? Oc(l, h) : c === "children" ? Wr(l, h) : Ra(l, c, h, s);
            }
            switch (a) {
              case "input":
                Ti(l, o);
                break;
              case "textarea":
                Mc(l, o);
                break;
              case "select":
                var p = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var x = o.value;
                x != null
                  ? Yn(l, !!o.multiple, x, !1)
                  : p !== !!o.multiple && (o.defaultValue != null ? Yn(l, !!o.multiple, o.defaultValue, !0) : Yn(l, !!o.multiple, o.multiple ? [] : "", !1));
            }
            l[br] = o;
          } catch (S) {
            ce(e, e.return, S);
          }
      }
      break;
    case 6:
      if ((ot(t, e), mt(e), r & 4)) {
        if (e.stateNode === null) throw Error(R(162));
        (l = e.stateNode), (o = e.memoizedProps);
        try {
          l.nodeValue = o;
        } catch (S) {
          ce(e, e.return, S);
        }
      }
      break;
    case 3:
      if ((ot(t, e), mt(e), r & 4 && n !== null && n.memoizedState.isDehydrated))
        try {
          Gr(t.containerInfo);
        } catch (S) {
          ce(e, e.return, S);
        }
      break;
    case 4:
      ot(t, e), mt(e);
      break;
    case 13:
      ot(t, e),
        mt(e),
        (l = e.child),
        l.flags & 8192 &&
          ((o = l.memoizedState !== null), (l.stateNode.isHidden = o), !o || (l.alternate !== null && l.alternate.memoizedState !== null) || (au = he())),
        r & 4 && js(e);
      break;
    case 22:
      if (((c = n !== null && n.memoizedState !== null), e.mode & 1 ? ((je = (s = je) || c), ot(t, e), (je = s)) : ot(t, e), mt(e), r & 8192)) {
        if (((s = e.memoizedState !== null), (e.stateNode.isHidden = s) && !c && e.mode & 1))
          for (z = e, c = e.child; c !== null; ) {
            for (h = z = c; z !== null; ) {
              switch (((p = z), (x = p.child), p.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Ar(4, p, p.return);
                  break;
                case 1:
                  Vn(p, p.return);
                  var _ = p.stateNode;
                  if (typeof _.componentWillUnmount == "function") {
                    (r = p), (n = p.return);
                    try {
                      (t = r), (_.props = t.memoizedProps), (_.state = t.memoizedState), _.componentWillUnmount();
                    } catch (S) {
                      ce(r, n, S);
                    }
                  }
                  break;
                case 5:
                  Vn(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    Ds(h);
                    continue;
                  }
              }
              x !== null ? ((x.return = p), (z = x)) : Ds(h);
            }
            c = c.sibling;
          }
        e: for (c = null, h = e; ; ) {
          if (h.tag === 5) {
            if (c === null) {
              c = h;
              try {
                (l = h.stateNode),
                  s
                    ? ((o = l.style), typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : (o.display = "none"))
                    : ((a = h.stateNode),
                      (u = h.memoizedProps.style),
                      (i = u != null && u.hasOwnProperty("display") ? u.display : null),
                      (a.style.display = Fc("display", i)));
              } catch (S) {
                ce(e, e.return, S);
              }
            }
          } else if (h.tag === 6) {
            if (c === null)
              try {
                h.stateNode.nodeValue = s ? "" : h.memoizedProps;
              } catch (S) {
                ce(e, e.return, S);
              }
          } else if (((h.tag !== 22 && h.tag !== 23) || h.memoizedState === null || h === e) && h.child !== null) {
            (h.child.return = h), (h = h.child);
            continue;
          }
          if (h === e) break e;
          for (; h.sibling === null; ) {
            if (h.return === null || h.return === e) break e;
            c === h && (c = null), (h = h.return);
          }
          c === h && (c = null), (h.sibling.return = h.return), (h = h.sibling);
        }
      }
      break;
    case 19:
      ot(t, e), mt(e), r & 4 && js(e);
      break;
    case 21:
      break;
    default:
      ot(t, e), mt(e);
  }
}
function mt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (cf(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(R(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Wr(l, ""), (r.flags &= -33));
          var o = Ls(e);
          fa(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            a = Ls(e);
          da(e, a, i);
          break;
        default:
          throw Error(R(161));
      }
    } catch (u) {
      ce(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function ym(e, t, n) {
  (z = e), pf(e);
}
function pf(e, t, n) {
  for (var r = (e.mode & 1) !== 0; z !== null; ) {
    var l = z,
      o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || zl;
      if (!i) {
        var a = l.alternate,
          u = (a !== null && a.memoizedState !== null) || je;
        a = zl;
        var s = je;
        if (((zl = i), (je = u) && !s))
          for (z = l; z !== null; ) (i = z), (u = i.child), i.tag === 22 && i.memoizedState !== null ? Ms(l) : u !== null ? ((u.return = i), (z = u)) : Ms(l);
        for (; o !== null; ) (z = o), pf(o), (o = o.sibling);
        (z = l), (zl = a), (je = s);
      }
      Ts(e);
    } else l.subtreeFlags & 8772 && o !== null ? ((o.return = l), (z = o)) : Ts(e);
  }
}
function Ts(e) {
  for (; z !== null; ) {
    var t = z;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              je || To(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !je)
                if (n === null) r.componentDidMount();
                else {
                  var l = t.elementType === t.type ? n.memoizedProps : it(t.type, n.memoizedProps);
                  r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                }
              var o = t.updateQueue;
              o !== null && hs(t, o, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                hs(t, i, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var u = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    u.autoFocus && n.focus();
                    break;
                  case "img":
                    u.src && (n.src = u.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var s = t.alternate;
                if (s !== null) {
                  var c = s.memoizedState;
                  if (c !== null) {
                    var h = c.dehydrated;
                    h !== null && Gr(h);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(R(163));
          }
        je || (t.flags & 512 && ca(t));
      } catch (p) {
        ce(t, t.return, p);
      }
    }
    if (t === e) {
      z = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (z = n);
      break;
    }
    z = t.return;
  }
}
function Ds(e) {
  for (; z !== null; ) {
    var t = z;
    if (t === e) {
      z = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (z = n);
      break;
    }
    z = t.return;
  }
}
function Ms(e) {
  for (; z !== null; ) {
    var t = z;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            To(4, t);
          } catch (u) {
            ce(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              ce(t, l, u);
            }
          }
          var o = t.return;
          try {
            ca(t);
          } catch (u) {
            ce(t, o, u);
          }
          break;
        case 5:
          var i = t.return;
          try {
            ca(t);
          } catch (u) {
            ce(t, i, u);
          }
      }
    } catch (u) {
      ce(t, t.return, u);
    }
    if (t === e) {
      z = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (z = a);
      break;
    }
    z = t.return;
  }
}
var wm = Math.ceil,
  mo = jt.ReactCurrentDispatcher,
  ou = jt.ReactCurrentOwner,
  tt = jt.ReactCurrentBatchConfig,
  G = 0,
  xe = null,
  ve = null,
  Pe = 0,
  Ve = 0,
  Wn = rn(0),
  ye = 0,
  ol = null,
  xn = 0,
  Do = 0,
  iu = 0,
  $r = null,
  Ie = null,
  au = 0,
  or = 1 / 0,
  St = null,
  vo = !1,
  pa = null,
  Jt = null,
  Ol = !1,
  Qt = null,
  go = 0,
  Br = 0,
  ha = null,
  Kl = -1,
  Yl = 0;
function ze() {
  return G & 6 ? he() : Kl !== -1 ? Kl : (Kl = he());
}
function qt(e) {
  return e.mode & 1
    ? G & 2 && Pe !== 0
      ? Pe & -Pe
      : nm.transition !== null
      ? (Yl === 0 && (Yl = Xc()), Yl)
      : ((e = Z), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : nd(e.type))), e)
    : 1;
}
function dt(e, t, n, r) {
  if (50 < Br) throw ((Br = 0), (ha = null), Error(R(185)));
  dl(e, n, r),
    (!(G & 2) || e !== xe) &&
      (e === xe && (!(G & 2) && (Do |= n), ye === 4 && Vt(e, Pe)), Be(e, r), n === 1 && G === 0 && !(t.mode & 1) && ((or = he() + 500), Ro && ln()));
}
function Be(e, t) {
  var n = e.callbackNode;
  nh(e, t);
  var r = bl(e, e === xe ? Pe : 0);
  if (r === 0) n !== null && Hu(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Hu(n), t === 1))
      e.tag === 0 ? tm(zs.bind(null, e)) : _d(zs.bind(null, e)),
        Jh(function () {
          !(G & 6) && ln();
        }),
        (n = null);
    else {
      switch (Zc(r)) {
        case 1:
          n = Ma;
          break;
        case 4:
          n = Yc;
          break;
        case 16:
          n = ql;
          break;
        case 536870912:
          n = Gc;
          break;
        default:
          n = ql;
      }
      n = _f(n, hf.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function hf(e, t) {
  if (((Kl = -1), (Yl = 0), G & 6)) throw Error(R(327));
  var n = e.callbackNode;
  if (qn() && e.callbackNode !== n) return null;
  var r = bl(e, e === xe ? Pe : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = yo(e, r);
  else {
    t = r;
    var l = G;
    G |= 2;
    var o = vf();
    (xe !== e || Pe !== t) && ((St = null), (or = he() + 500), gn(e, t));
    do
      try {
        xm();
        break;
      } catch (a) {
        mf(e, a);
      }
    while (!0);
    Ka(), (mo.current = o), (G = l), ve !== null ? (t = 0) : ((xe = null), (Pe = 0), (t = ye));
  }
  if (t !== 0) {
    if ((t === 2 && ((l = Bi(e)), l !== 0 && ((r = l), (t = ma(e, l)))), t === 1)) throw ((n = ol), gn(e, 0), Vt(e, r), Be(e, he()), n);
    if (t === 6) Vt(e, r);
    else {
      if (((l = e.current.alternate), !(r & 30) && !Sm(l) && ((t = yo(e, r)), t === 2 && ((o = Bi(e)), o !== 0 && ((r = o), (t = ma(e, o)))), t === 1)))
        throw ((n = ol), gn(e, 0), Vt(e, r), Be(e, he()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(R(345));
        case 2:
          cn(e, Ie, St);
          break;
        case 3:
          if ((Vt(e, r), (r & 130023424) === r && ((t = au + 500 - he()), 10 < t))) {
            if (bl(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              ze(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = Xi(cn.bind(null, e, Ie, St), t);
            break;
          }
          cn(e, Ie, St);
          break;
        case 4:
          if ((Vt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - ct(r);
            (o = 1 << i), (i = t[i]), i > l && (l = i), (r &= ~o);
          }
          if (
            ((r = l),
            (r = he() - r),
            (r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * wm(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Xi(cn.bind(null, e, Ie, St), r);
            break;
          }
          cn(e, Ie, St);
          break;
        case 5:
          cn(e, Ie, St);
          break;
        default:
          throw Error(R(329));
      }
    }
  }
  return Be(e, he()), e.callbackNode === n ? hf.bind(null, e) : null;
}
function ma(e, t) {
  var n = $r;
  return e.current.memoizedState.isDehydrated && (gn(e, t).flags |= 256), (e = yo(e, t)), e !== 2 && ((t = Ie), (Ie = n), t !== null && va(t)), e;
}
function va(e) {
  Ie === null ? (Ie = e) : Ie.push.apply(Ie, e);
}
function Sm(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            o = l.getSnapshot;
          l = l.value;
          try {
            if (!ft(o(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null)) (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Vt(e, t) {
  for (t &= ~iu, t &= ~Do, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - ct(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function zs(e) {
  if (G & 6) throw Error(R(327));
  qn();
  var t = bl(e, 0);
  if (!(t & 1)) return Be(e, he()), null;
  var n = yo(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Bi(e);
    r !== 0 && ((t = r), (n = ma(e, r)));
  }
  if (n === 1) throw ((n = ol), gn(e, 0), Vt(e, t), Be(e, he()), n);
  if (n === 6) throw Error(R(345));
  return (e.finishedWork = e.current.alternate), (e.finishedLanes = t), cn(e, Ie, St), Be(e, he()), null;
}
function uu(e, t) {
  var n = G;
  G |= 1;
  try {
    return e(t);
  } finally {
    (G = n), G === 0 && ((or = he() + 500), Ro && ln());
  }
}
function En(e) {
  Qt !== null && Qt.tag === 0 && !(G & 6) && qn();
  var t = G;
  G |= 1;
  var n = tt.transition,
    r = Z;
  try {
    if (((tt.transition = null), (Z = 1), e)) return e();
  } finally {
    (Z = r), (tt.transition = n), (G = t), !(G & 6) && ln();
  }
}
function su() {
  (Ve = Wn.current), ne(Wn);
}
function gn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Zh(n)), ve !== null))
    for (n = ve.return; n !== null; ) {
      var r = n;
      switch ((Va(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && lo();
          break;
        case 3:
          rr(), ne(Ae), ne(Te), qa();
          break;
        case 5:
          Ja(r);
          break;
        case 4:
          rr();
          break;
        case 13:
          ne(ie);
          break;
        case 19:
          ne(ie);
          break;
        case 10:
          Ya(r.type._context);
          break;
        case 22:
        case 23:
          su();
      }
      n = n.return;
    }
  if (((xe = e), (ve = e = bt(e.current, null)), (Pe = Ve = t), (ye = 0), (ol = null), (iu = Do = xn = 0), (Ie = $r = null), pn !== null)) {
    for (t = 0; t < pn.length; t++)
      if (((n = pn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          o = n.pending;
        if (o !== null) {
          var i = o.next;
          (o.next = l), (r.next = i);
        }
        n.pending = r;
      }
    pn = null;
  }
  return e;
}
function mf(e, t) {
  do {
    var n = ve;
    try {
      if ((Ka(), (Vl.current = ho), po)) {
        for (var r = ae.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        po = !1;
      }
      if (((_n = 0), (_e = ge = ae = null), (Ur = !1), (nl = 0), (ou.current = null), n === null || n.return === null)) {
        (ye = 1), (ol = t), (ve = null);
        break;
      }
      e: {
        var o = e,
          i = n.return,
          a = n,
          u = t;
        if (((t = Pe), (a.flags |= 32768), u !== null && typeof u == "object" && typeof u.then == "function")) {
          var s = u,
            c = a,
            h = c.tag;
          if (!(c.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var p = c.alternate;
            p
              ? ((c.updateQueue = p.updateQueue), (c.memoizedState = p.memoizedState), (c.lanes = p.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var x = _s(i);
          if (x !== null) {
            (x.flags &= -257), xs(x, i, a, o, t), x.mode & 1 && Ss(o, s, t), (t = x), (u = s);
            var _ = t.updateQueue;
            if (_ === null) {
              var S = new Set();
              S.add(u), (t.updateQueue = S);
            } else _.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              Ss(o, s, t), cu();
              break e;
            }
            u = Error(R(426));
          }
        } else if (oe && a.mode & 1) {
          var N = _s(i);
          if (N !== null) {
            !(N.flags & 65536) && (N.flags |= 256), xs(N, i, a, o, t), Wa(lr(u, a));
            break e;
          }
        }
        (o = u = lr(u, a)), ye !== 4 && (ye = 2), $r === null ? ($r = [o]) : $r.push(o), (o = i);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var f = Jd(o, u, t);
              ps(o, f);
              break e;
            case 1:
              a = u;
              var d = o.type,
                m = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof d.getDerivedStateFromError == "function" || (m !== null && typeof m.componentDidCatch == "function" && (Jt === null || !Jt.has(m))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var C = qd(o, a, t);
                ps(o, C);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      yf(n);
    } catch (L) {
      (t = L), ve === n && n !== null && (ve = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function vf() {
  var e = mo.current;
  return (mo.current = ho), e === null ? ho : e;
}
function cu() {
  (ye === 0 || ye === 3 || ye === 2) && (ye = 4), xe === null || (!(xn & 268435455) && !(Do & 268435455)) || Vt(xe, Pe);
}
function yo(e, t) {
  var n = G;
  G |= 2;
  var r = vf();
  (xe !== e || Pe !== t) && ((St = null), gn(e, t));
  do
    try {
      _m();
      break;
    } catch (l) {
      mf(e, l);
    }
  while (!0);
  if ((Ka(), (G = n), (mo.current = r), ve !== null)) throw Error(R(261));
  return (xe = null), (Pe = 0), ye;
}
function _m() {
  for (; ve !== null; ) gf(ve);
}
function xm() {
  for (; ve !== null && !Yp(); ) gf(ve);
}
function gf(e) {
  var t = Sf(e.alternate, e, Ve);
  (e.memoizedProps = e.pendingProps), t === null ? yf(e) : (ve = t), (ou.current = null);
}
function yf(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = mm(n, t)), n !== null)) {
        (n.flags &= 32767), (ve = n);
        return;
      }
      if (e !== null) (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ye = 6), (ve = null);
        return;
      }
    } else if (((n = hm(n, t, Ve)), n !== null)) {
      ve = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ve = t;
      return;
    }
    ve = t = e;
  } while (t !== null);
  ye === 0 && (ye = 5);
}
function cn(e, t, n) {
  var r = Z,
    l = tt.transition;
  try {
    (tt.transition = null), (Z = 1), Em(e, t, n, r);
  } finally {
    (tt.transition = l), (Z = r);
  }
  return null;
}
function Em(e, t, n, r) {
  do qn();
  while (Qt !== null);
  if (G & 6) throw Error(R(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(R(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (rh(e, o),
    e === xe && ((ve = xe = null), (Pe = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Ol ||
      ((Ol = !0),
      _f(ql, function () {
        return qn(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = tt.transition), (tt.transition = null);
    var i = Z;
    Z = 1;
    var a = G;
    (G |= 4),
      (ou.current = null),
      gm(e, n),
      ff(n, e),
      Vh(Yi),
      (eo = !!Ki),
      (Yi = Ki = null),
      (e.current = n),
      ym(n),
      Gp(),
      (G = a),
      (Z = i),
      (tt.transition = o);
  } else e.current = n;
  if ((Ol && ((Ol = !1), (Qt = e), (go = l)), (o = e.pendingLanes), o === 0 && (Jt = null), Jp(n.stateNode), Be(e, he()), t !== null))
    for (r = e.onRecoverableError, n = 0; n < t.length; n++) (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (vo) throw ((vo = !1), (e = pa), (pa = null), e);
  return go & 1 && e.tag !== 0 && qn(), (o = e.pendingLanes), o & 1 ? (e === ha ? Br++ : ((Br = 0), (ha = e))) : (Br = 0), ln(), null;
}
function qn() {
  if (Qt !== null) {
    var e = Zc(go),
      t = tt.transition,
      n = Z;
    try {
      if (((tt.transition = null), (Z = 16 > e ? 16 : e), Qt === null)) var r = !1;
      else {
        if (((e = Qt), (Qt = null), (go = 0), G & 6)) throw Error(R(331));
        var l = G;
        for (G |= 4, z = e.current; z !== null; ) {
          var o = z,
            i = o.child;
          if (z.flags & 16) {
            var a = o.deletions;
            if (a !== null) {
              for (var u = 0; u < a.length; u++) {
                var s = a[u];
                for (z = s; z !== null; ) {
                  var c = z;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ar(8, c, o);
                  }
                  var h = c.child;
                  if (h !== null) (h.return = c), (z = h);
                  else
                    for (; z !== null; ) {
                      c = z;
                      var p = c.sibling,
                        x = c.return;
                      if ((sf(c), c === s)) {
                        z = null;
                        break;
                      }
                      if (p !== null) {
                        (p.return = x), (z = p);
                        break;
                      }
                      z = x;
                    }
                }
              }
              var _ = o.alternate;
              if (_ !== null) {
                var S = _.child;
                if (S !== null) {
                  _.child = null;
                  do {
                    var N = S.sibling;
                    (S.sibling = null), (S = N);
                  } while (S !== null);
                }
              }
              z = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) (i.return = o), (z = i);
          else
            e: for (; z !== null; ) {
              if (((o = z), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Ar(9, o, o.return);
                }
              var f = o.sibling;
              if (f !== null) {
                (f.return = o.return), (z = f);
                break e;
              }
              z = o.return;
            }
        }
        var d = e.current;
        for (z = d; z !== null; ) {
          i = z;
          var m = i.child;
          if (i.subtreeFlags & 2064 && m !== null) (m.return = i), (z = m);
          else
            e: for (i = d; z !== null; ) {
              if (((a = z), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      To(9, a);
                  }
                } catch (L) {
                  ce(a, a.return, L);
                }
              if (a === i) {
                z = null;
                break e;
              }
              var C = a.sibling;
              if (C !== null) {
                (C.return = a.return), (z = C);
                break e;
              }
              z = a.return;
            }
        }
        if (((G = l), ln(), yt && typeof yt.onPostCommitFiberRoot == "function"))
          try {
            yt.onPostCommitFiberRoot(Eo, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (Z = n), (tt.transition = t);
    }
  }
  return !1;
}
function Os(e, t, n) {
  (t = lr(n, t)), (t = Jd(e, t, 1)), (e = Zt(e, t, 1)), (t = ze()), e !== null && (dl(e, 1, t), Be(e, t));
}
function ce(e, t, n) {
  if (e.tag === 3) Os(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Os(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || (typeof r.componentDidCatch == "function" && (Jt === null || !Jt.has(r)))) {
          (e = lr(n, e)), (e = qd(t, e, 1)), (t = Zt(t, e, 1)), (e = ze()), t !== null && (dl(t, 1, e), Be(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Cm(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = ze()),
    (e.pingedLanes |= e.suspendedLanes & n),
    xe === e && (Pe & n) === n && (ye === 4 || (ye === 3 && (Pe & 130023424) === Pe && 500 > he() - au) ? gn(e, 0) : (iu |= n)),
    Be(e, t);
}
function wf(e, t) {
  t === 0 && (e.mode & 1 ? ((t = kl), (kl <<= 1), !(kl & 130023424) && (kl = 4194304)) : (t = 1));
  var n = ze();
  (e = Rt(e, t)), e !== null && (dl(e, t, n), Be(e, n));
}
function km(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), wf(e, n);
}
function Pm(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(R(314));
  }
  r !== null && r.delete(t), wf(e, n);
}
var Sf;
Sf = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ae.current) Ue = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Ue = !1), pm(e, t, n);
      Ue = !!(e.flags & 131072);
    }
  else (Ue = !1), oe && t.flags & 1048576 && xd(t, ao, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Ql(e, t), (e = t.pendingProps);
      var l = er(t, Te.current);
      Jn(t, n), (l = eu(null, t, r, e, l, n));
      var o = tu();
      return (
        (t.flags |= 1),
        typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            $e(r) ? ((o = !0), oo(t)) : (o = !1),
            (t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null),
            Xa(t),
            (l.updater = Lo),
            (t.stateNode = l),
            (l._reactInternals = t),
            na(t, r, e, n),
            (t = oa(null, t, r, !0, o, n)))
          : ((t.tag = 0), oe && o && Ha(t), Me(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch ((Ql(e, t), (e = t.pendingProps), (l = r._init), (r = l(r._payload)), (t.type = r), (l = t.tag = Rm(r)), (e = it(r, e)), l)) {
          case 0:
            t = la(null, t, r, e, n);
            break e;
          case 1:
            t = ks(null, t, r, e, n);
            break e;
          case 11:
            t = Es(null, t, r, e, n);
            break e;
          case 14:
            t = Cs(null, t, r, it(r.type, e), n);
            break e;
        }
        throw Error(R(306, r, ""));
      }
      return t;
    case 0:
      return (r = t.type), (l = t.pendingProps), (l = t.elementType === r ? l : it(r, l)), la(e, t, r, l, n);
    case 1:
      return (r = t.type), (l = t.pendingProps), (l = t.elementType === r ? l : it(r, l)), ks(e, t, r, l, n);
    case 3:
      e: {
        if ((nf(t), e === null)) throw Error(R(387));
        (r = t.pendingProps), (o = t.memoizedState), (l = o.element), Pd(e, t), co(t, r, null, n);
        var i = t.memoizedState;
        if (((r = i.element), o.isDehydrated))
          if (
            ((o = { element: r, isDehydrated: !1, cache: i.cache, pendingSuspenseBoundaries: i.pendingSuspenseBoundaries, transitions: i.transitions }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (l = lr(Error(R(423)), t)), (t = Ps(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = lr(Error(R(424)), t)), (t = Ps(e, t, r, n, l));
            break e;
          } else
            for (We = Xt(t.stateNode.containerInfo.firstChild), Qe = t, oe = !0, st = null, n = jd(t, null, r, n), t.child = n; n; )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((tr(), r === l)) {
            t = Lt(e, t, n);
            break e;
          }
          Me(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Td(t),
        e === null && bi(t),
        (r = t.type),
        (l = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (i = l.children),
        Gi(r, l) ? (i = null) : o !== null && Gi(r, o) && (t.flags |= 32),
        tf(e, t),
        Me(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && bi(t), null;
    case 13:
      return rf(e, t, n);
    case 4:
      return Za(t, t.stateNode.containerInfo), (r = t.pendingProps), e === null ? (t.child = nr(t, null, r, n)) : Me(e, t, r, n), t.child;
    case 11:
      return (r = t.type), (l = t.pendingProps), (l = t.elementType === r ? l : it(r, l)), Es(e, t, r, l, n);
    case 7:
      return Me(e, t, t.pendingProps, n), t.child;
    case 8:
      return Me(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Me(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (((r = t.type._context), (l = t.pendingProps), (o = t.memoizedProps), (i = l.value), b(uo, r._currentValue), (r._currentValue = i), o !== null))
          if (ft(o.value, i)) {
            if (o.children === l.children && !Ae.current) {
              t = Lt(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var a = o.dependencies;
              if (a !== null) {
                i = o.child;
                for (var u = a.firstContext; u !== null; ) {
                  if (u.context === r) {
                    if (o.tag === 1) {
                      (u = Ct(-1, n & -n)), (u.tag = 2);
                      var s = o.updateQueue;
                      if (s !== null) {
                        s = s.shared;
                        var c = s.pending;
                        c === null ? (u.next = u) : ((u.next = c.next), (c.next = u)), (s.pending = u);
                      }
                    }
                    (o.lanes |= n), (u = o.alternate), u !== null && (u.lanes |= n), ea(o.return, n, t), (a.lanes |= n);
                    break;
                  }
                  u = u.next;
                }
              } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((i = o.return), i === null)) throw Error(R(341));
                (i.lanes |= n), (a = i.alternate), a !== null && (a.lanes |= n), ea(i, n, t), (i = o.sibling);
              } else i = o.child;
              if (i !== null) i.return = o;
              else
                for (i = o; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (((o = i.sibling), o !== null)) {
                    (o.return = i.return), (i = o);
                    break;
                  }
                  i = i.return;
                }
              o = i;
            }
        Me(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (l = t.type), (r = t.pendingProps.children), Jn(t, n), (l = nt(l)), (r = r(l)), (t.flags |= 1), Me(e, t, r, n), t.child;
    case 14:
      return (r = t.type), (l = it(r, t.pendingProps)), (l = it(r.type, l)), Cs(e, t, r, l, n);
    case 15:
      return bd(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : it(r, l)),
        Ql(e, t),
        (t.tag = 1),
        $e(r) ? ((e = !0), oo(t)) : (e = !1),
        Jn(t, n),
        Rd(t, r, l),
        na(t, r, l, n),
        oa(null, t, r, !0, e, n)
      );
    case 19:
      return lf(e, t, n);
    case 22:
      return ef(e, t, n);
  }
  throw Error(R(156, t.tag));
};
function _f(e, t) {
  return Kc(e, t);
}
function Nm(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function et(e, t, n, r) {
  return new Nm(e, t, n, r);
}
function du(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Rm(e) {
  if (typeof e == "function") return du(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === ja)) return 11;
    if (e === Ta) return 14;
  }
  return 2;
}
function bt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = et(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t), (n.type = e.type), (n.flags = 0), (n.subtreeFlags = 0), (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Gl(e, t, n, r, l, o) {
  var i = 2;
  if (((r = e), typeof e == "function")) du(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case zn:
        return yn(n.children, l, o, t);
      case La:
        (i = 8), (l |= 8);
        break;
      case Pi:
        return (e = et(12, n, t, l | 2)), (e.elementType = Pi), (e.lanes = o), e;
      case Ni:
        return (e = et(13, n, t, l)), (e.elementType = Ni), (e.lanes = o), e;
      case Ri:
        return (e = et(19, n, t, l)), (e.elementType = Ri), (e.lanes = o), e;
      case Lc:
        return Mo(n, l, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Nc:
              i = 10;
              break e;
            case Rc:
              i = 9;
              break e;
            case ja:
              i = 11;
              break e;
            case Ta:
              i = 14;
              break e;
            case $t:
              (i = 16), (r = null);
              break e;
          }
        throw Error(R(130, e == null ? e : typeof e, ""));
    }
  return (t = et(i, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = o), t;
}
function yn(e, t, n, r) {
  return (e = et(7, e, r, t)), (e.lanes = n), e;
}
function Mo(e, t, n, r) {
  return (e = et(22, e, r, t)), (e.elementType = Lc), (e.lanes = n), (e.stateNode = { isHidden: !1 }), e;
}
function wi(e, t, n) {
  return (e = et(6, e, null, t)), (e.lanes = n), e;
}
function Si(e, t, n) {
  return (
    (t = et(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }),
    t
  );
}
function Lm(e, t, n, r, l) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = ei(0)),
    (this.expirationTimes = ei(-1)),
    (this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0),
    (this.entanglements = ei(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function fu(e, t, n, r, l, o, i, a, u) {
  return (
    (e = new Lm(e, t, n, a, u)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = et(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }),
    Xa(o),
    e
  );
}
function jm(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Mn, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function xf(e) {
  if (!e) return tn;
  e = e._reactInternals;
  e: {
    if (Pn(e) !== e || e.tag !== 1) throw Error(R(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if ($e(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(R(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if ($e(n)) return Sd(e, n, t);
  }
  return t;
}
function Ef(e, t, n, r, l, o, i, a, u) {
  return (
    (e = fu(n, r, !0, e, l, o, i, a, u)),
    (e.context = xf(null)),
    (n = e.current),
    (r = ze()),
    (l = qt(n)),
    (o = Ct(r, l)),
    (o.callback = t ?? null),
    Zt(n, o, l),
    (e.current.lanes = l),
    dl(e, l, r),
    Be(e, r),
    e
  );
}
function zo(e, t, n, r) {
  var l = t.current,
    o = ze(),
    i = qt(l);
  return (
    (n = xf(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Ct(o, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Zt(l, t, i)),
    e !== null && (dt(e, l, i, o), Hl(e, l, i)),
    i
  );
}
function wo(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Fs(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function pu(e, t) {
  Fs(e, t), (e = e.alternate) && Fs(e, t);
}
function Tm() {
  return null;
}
var Cf =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function hu(e) {
  this._internalRoot = e;
}
Oo.prototype.render = hu.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(R(409));
  zo(e, t, null, null);
};
Oo.prototype.unmount = hu.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    En(function () {
      zo(null, e, null, null);
    }),
      (t[Nt] = null);
  }
};
function Oo(e) {
  this._internalRoot = e;
}
Oo.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = bc();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Ht.length && t !== 0 && t < Ht[n].priority; n++);
    Ht.splice(n, 0, e), n === 0 && td(e);
  }
};
function mu(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Fo(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable ")));
}
function Is() {}
function Dm(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var s = wo(i);
        o.call(s);
      };
    }
    var i = Ef(t, r, e, 0, null, !1, !1, "", Is);
    return (e._reactRootContainer = i), (e[Nt] = i.current), Jr(e.nodeType === 8 ? e.parentNode : e), En(), i;
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var s = wo(u);
      a.call(s);
    };
  }
  var u = fu(e, 0, !1, null, null, !1, !1, "", Is);
  return (
    (e._reactRootContainer = u),
    (e[Nt] = u.current),
    Jr(e.nodeType === 8 ? e.parentNode : e),
    En(function () {
      zo(t, u, n, r);
    }),
    u
  );
}
function Io(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == "function") {
      var a = l;
      l = function () {
        var u = wo(i);
        a.call(u);
      };
    }
    zo(t, i, e, l);
  } else i = Dm(n, t, e, l, r);
  return wo(i);
}
Jc = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Tr(t.pendingLanes);
        n !== 0 && (za(t, n | 1), Be(t, he()), !(G & 6) && ((or = he() + 500), ln()));
      }
      break;
    case 13:
      En(function () {
        var r = Rt(e, 1);
        if (r !== null) {
          var l = ze();
          dt(r, e, 1, l);
        }
      }),
        pu(e, 1);
  }
};
Oa = function (e) {
  if (e.tag === 13) {
    var t = Rt(e, 134217728);
    if (t !== null) {
      var n = ze();
      dt(t, e, 134217728, n);
    }
    pu(e, 134217728);
  }
};
qc = function (e) {
  if (e.tag === 13) {
    var t = qt(e),
      n = Rt(e, t);
    if (n !== null) {
      var r = ze();
      dt(n, e, t, r);
    }
    pu(e, t);
  }
};
bc = function () {
  return Z;
};
ed = function (e, t) {
  var n = Z;
  try {
    return (Z = e), t();
  } finally {
    Z = n;
  }
};
Ui = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Ti(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = No(r);
            if (!l) throw Error(R(90));
            Tc(r), Ti(r, l);
          }
        }
      }
      break;
    case "textarea":
      Mc(e, n);
      break;
    case "select":
      (t = n.value), t != null && Yn(e, !!n.multiple, t, !1);
  }
};
$c = uu;
Bc = En;
var Mm = { usingClientEntryPoint: !1, Events: [pl, Un, No, Uc, Ac, uu] },
  Er = { findFiberByHostInstance: fn, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" },
  zm = {
    bundleType: Er.bundleType,
    version: Er.version,
    rendererPackageName: Er.rendererPackageName,
    rendererConfig: Er.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: jt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Wc(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Er.findFiberByHostInstance || Tm,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Fl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Fl.isDisabled && Fl.supportsFiber)
    try {
      (Eo = Fl.inject(zm)), (yt = Fl);
    } catch {}
}
Ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Mm;
Ye.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!mu(t)) throw Error(R(200));
  return jm(e, t, null, n);
};
Ye.createRoot = function (e, t) {
  if (!mu(e)) throw Error(R(299));
  var n = !1,
    r = "",
    l = Cf;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = fu(e, 1, !1, null, null, n, !1, r, l)),
    (e[Nt] = t.current),
    Jr(e.nodeType === 8 ? e.parentNode : e),
    new hu(t)
  );
};
Ye.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0) throw typeof e.render == "function" ? Error(R(188)) : ((e = Object.keys(e).join(",")), Error(R(268, e)));
  return (e = Wc(t)), (e = e === null ? null : e.stateNode), e;
};
Ye.flushSync = function (e) {
  return En(e);
};
Ye.hydrate = function (e, t, n) {
  if (!Fo(t)) throw Error(R(200));
  return Io(null, e, t, !0, n);
};
Ye.hydrateRoot = function (e, t, n) {
  if (!mu(e)) throw Error(R(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    o = "",
    i = Cf;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = Ef(t, null, e, 1, n ?? null, l, !1, o, i)),
    (e[Nt] = t.current),
    Jr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null ? (t.mutableSourceEagerHydrationData = [n, l]) : t.mutableSourceEagerHydrationData.push(n, l);
  return new Oo(t);
};
Ye.render = function (e, t, n) {
  if (!Fo(t)) throw Error(R(200));
  return Io(null, e, t, !1, n);
};
Ye.unmountComponentAtNode = function (e) {
  if (!Fo(e)) throw Error(R(40));
  return e._reactRootContainer
    ? (En(function () {
        Io(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Nt] = null);
        });
      }),
      !0)
    : !1;
};
Ye.unstable_batchedUpdates = uu;
Ye.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Fo(n)) throw Error(R(200));
  if (e == null || e._reactInternals === void 0) throw Error(R(38));
  return Io(e, t, n, !1, r);
};
Ye.version = "18.2.0-next-9e3b772b8-20220608";
function kf() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(kf);
    } catch (e) {
      console.error(e);
    }
}
kf(), (xc.exports = Ye);
var vu = xc.exports;
const Om = cc(vu),
  Fm = sc({ __proto__: null, default: Om }, [vu]);
var Us = vu;
(Ci.createRoot = Us.createRoot), (Ci.hydrateRoot = Us.hydrateRoot);
/**
 * @remix-run/router v1.15.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function de() {
  return (
    (de = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    de.apply(this, arguments)
  );
}
var pe;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(pe || (pe = {}));
const As = "popstate";
function Im(e) {
  e === void 0 && (e = {});
  function t(r, l) {
    let { pathname: o, search: i, hash: a } = r.location;
    return il("", { pathname: o, search: i, hash: a }, (l.state && l.state.usr) || null, (l.state && l.state.key) || "default");
  }
  function n(r, l) {
    return typeof l == "string" ? l : Cn(l);
  }
  return Am(t, n, null, e);
}
function H(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function ir(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function Um() {
  return Math.random().toString(36).substr(2, 8);
}
function $s(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function il(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    de({ pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" }, typeof t == "string" ? Tt(t) : t, {
      state: n,
      key: (t && t.key) || r || Um(),
    })
  );
}
function Cn(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n), r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r), t;
}
function Tt(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))), e && (t.pathname = e);
  }
  return t;
}
function Am(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: l = document.defaultView, v5Compat: o = !1 } = r,
    i = l.history,
    a = pe.Pop,
    u = null,
    s = c();
  s == null && ((s = 0), i.replaceState(de({}, i.state, { idx: s }), ""));
  function c() {
    return (i.state || { idx: null }).idx;
  }
  function h() {
    a = pe.Pop;
    let N = c(),
      f = N == null ? null : N - s;
    (s = N), u && u({ action: a, location: S.location, delta: f });
  }
  function p(N, f) {
    a = pe.Push;
    let d = il(S.location, N, f);
    n && n(d, N), (s = c() + 1);
    let m = $s(d, s),
      C = S.createHref(d);
    try {
      i.pushState(m, "", C);
    } catch (L) {
      if (L instanceof DOMException && L.name === "DataCloneError") throw L;
      l.location.assign(C);
    }
    o && u && u({ action: a, location: S.location, delta: 1 });
  }
  function x(N, f) {
    a = pe.Replace;
    let d = il(S.location, N, f);
    n && n(d, N), (s = c());
    let m = $s(d, s),
      C = S.createHref(d);
    i.replaceState(m, "", C), o && u && u({ action: a, location: S.location, delta: 0 });
  }
  function _(N) {
    let f = l.location.origin !== "null" ? l.location.origin : l.location.href,
      d = typeof N == "string" ? N : Cn(N);
    return (d = d.replace(/ $/, "%20")), H(f, "No window.location.(origin|href) available to create URL for href: " + d), new URL(d, f);
  }
  let S = {
    get action() {
      return a;
    },
    get location() {
      return e(l, i);
    },
    listen(N) {
      if (u) throw new Error("A history only accepts one active listener");
      return (
        l.addEventListener(As, h),
        (u = N),
        () => {
          l.removeEventListener(As, h), (u = null);
        }
      );
    },
    createHref(N) {
      return t(l, N);
    },
    createURL: _,
    encodeLocation(N) {
      let f = _(N);
      return { pathname: f.pathname, search: f.search, hash: f.hash };
    },
    push: p,
    replace: x,
    go(N) {
      return i.go(N);
    },
  };
  return S;
}
var se;
(function (e) {
  (e.data = "data"), (e.deferred = "deferred"), (e.redirect = "redirect"), (e.error = "error");
})(se || (se = {}));
const $m = new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);
function Bm(e) {
  return e.index === !0;
}
function ga(e, t, n, r) {
  return (
    n === void 0 && (n = []),
    r === void 0 && (r = {}),
    e.map((l, o) => {
      let i = [...n, o],
        a = typeof l.id == "string" ? l.id : i.join("-");
      if (
        (H(l.index !== !0 || !l.children, "Cannot specify children on an index route"),
        H(!r[a], 'Found a route id collision on id "' + a + `".  Route id's must be globally unique within Data Router usages`),
        Bm(l))
      ) {
        let u = de({}, l, t(l), { id: a });
        return (r[a] = u), u;
      } else {
        let u = de({}, l, t(l), { id: a, children: void 0 });
        return (r[a] = u), l.children && (u.children = ga(l.children, t, i, r)), u;
      }
    })
  );
}
function Qn(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? Tt(t) : t,
    l = cr(r.pathname || "/", n);
  if (l == null) return null;
  let o = Pf(e);
  Vm(o);
  let i = null;
  for (let a = 0; i == null && a < o.length; ++a) {
    let u = t0(l);
    i = qm(o[a], u);
  }
  return i;
}
function Hm(e, t) {
  let { route: n, pathname: r, params: l } = e;
  return { id: n.id, pathname: r, params: l, data: t[n.id], handle: n.handle };
}
function Pf(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let l = (o, i, a) => {
    let u = { relativePath: a === void 0 ? o.path || "" : a, caseSensitive: o.caseSensitive === !0, childrenIndex: i, route: o };
    u.relativePath.startsWith("/") &&
      (H(
        u.relativePath.startsWith(r),
        'Absolute route path "' +
          u.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (u.relativePath = u.relativePath.slice(r.length)));
    let s = kt([r, u.relativePath]),
      c = n.concat(u);
    o.children &&
      o.children.length > 0 &&
      (H(o.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + s + '".')),
      Pf(o.children, t, c, s)),
      !(o.path == null && !o.index) && t.push({ path: s, score: Zm(s, o.index), routesMeta: c });
  };
  return (
    e.forEach((o, i) => {
      var a;
      if (o.path === "" || !((a = o.path) != null && a.includes("?"))) l(o, i);
      else for (let u of Nf(o.path)) l(o, i, u);
    }),
    t
  );
}
function Nf(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    l = n.endsWith("?"),
    o = n.replace(/\?$/, "");
  if (r.length === 0) return l ? [o, ""] : [o];
  let i = Nf(r.join("/")),
    a = [];
  return a.push(...i.map((u) => (u === "" ? o : [o, u].join("/")))), l && a.push(...i), a.map((u) => (e.startsWith("/") && u === "" ? "/" : u));
}
function Vm(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : Jm(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const Wm = /^:[\w-]+$/,
  Qm = 3,
  Km = 2,
  Ym = 1,
  Gm = 10,
  Xm = -2,
  Bs = (e) => e === "*";
function Zm(e, t) {
  let n = e.split("/"),
    r = n.length;
  return n.some(Bs) && (r += Xm), t && (r += Km), n.filter((l) => !Bs(l)).reduce((l, o) => l + (Wm.test(o) ? Qm : o === "" ? Ym : Gm), r);
}
function Jm(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, l) => r === t[l]) ? e[e.length - 1] - t[t.length - 1] : 0;
}
function qm(e, t) {
  let { routesMeta: n } = e,
    r = {},
    l = "/",
    o = [];
  for (let i = 0; i < n.length; ++i) {
    let a = n[i],
      u = i === n.length - 1,
      s = l === "/" ? t : t.slice(l.length) || "/",
      c = bm({ path: a.relativePath, caseSensitive: a.caseSensitive, end: u }, s);
    if (!c) return null;
    Object.assign(r, c.params);
    let h = a.route;
    o.push({ params: r, pathname: kt([l, c.pathname]), pathnameBase: l0(kt([l, c.pathnameBase])), route: h }),
      c.pathnameBase !== "/" && (l = kt([l, c.pathnameBase]));
  }
  return o;
}
function bm(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = e0(e.path, e.caseSensitive, e.end),
    l = t.match(n);
  if (!l) return null;
  let o = l[0],
    i = o.replace(/(.)\/+$/, "$1"),
    a = l.slice(1);
  return {
    params: r.reduce((s, c, h) => {
      let { paramName: p, isOptional: x } = c;
      if (p === "*") {
        let S = a[h] || "";
        i = o.slice(0, o.length - S.length).replace(/(.)\/+$/, "$1");
      }
      const _ = a[h];
      return x && !_ ? (s[p] = void 0) : (s[p] = (_ || "").replace(/%2F/g, "/")), s;
    }, {}),
    pathname: o,
    pathnameBase: i,
    pattern: e,
  };
}
function e0(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    ir(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    l =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(/\/:([\w-]+)(\?)?/g, (i, a, u) => (r.push({ paramName: a, isOptional: u != null }), u ? "/?([^\\/]+)?" : "/([^\\/]+)"));
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }), (l += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (l += "\\/*$")
      : e !== "" && e !== "/" && (l += "(?:(?=\\/|$))"),
    [new RegExp(l, t ? void 0 : "i"), r]
  );
}
function t0(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      ir(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function cr(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function n0(e, t) {
  t === void 0 && (t = "/");
  let { pathname: n, search: r = "", hash: l = "" } = typeof e == "string" ? Tt(e) : e;
  return { pathname: n ? (n.startsWith("/") ? n : r0(n, t)) : t, search: o0(r), hash: i0(l) };
}
function r0(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((l) => {
      l === ".." ? n.length > 1 && n.pop() : l !== "." && n.push(l);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function _i(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function Rf(e) {
  return e.filter((t, n) => n === 0 || (t.route.path && t.route.path.length > 0));
}
function Uo(e, t) {
  let n = Rf(e);
  return t ? n.map((r, l) => (l === e.length - 1 ? r.pathname : r.pathnameBase)) : n.map((r) => r.pathnameBase);
}
function Ao(e, t, n, r) {
  r === void 0 && (r = !1);
  let l;
  typeof e == "string"
    ? (l = Tt(e))
    : ((l = de({}, e)),
      H(!l.pathname || !l.pathname.includes("?"), _i("?", "pathname", "search", l)),
      H(!l.pathname || !l.pathname.includes("#"), _i("#", "pathname", "hash", l)),
      H(!l.search || !l.search.includes("#"), _i("#", "search", "hash", l)));
  let o = e === "" || l.pathname === "",
    i = o ? "/" : l.pathname,
    a;
  if (i == null) a = n;
  else {
    let h = t.length - 1;
    if (!r && i.startsWith("..")) {
      let p = i.split("/");
      for (; p[0] === ".."; ) p.shift(), (h -= 1);
      l.pathname = p.join("/");
    }
    a = h >= 0 ? t[h] : "/";
  }
  let u = n0(l, a),
    s = i && i !== "/" && i.endsWith("/"),
    c = (o || i === ".") && n.endsWith("/");
  return !u.pathname.endsWith("/") && (s || c) && (u.pathname += "/"), u;
}
const kt = (e) => e.join("/").replace(/\/\/+/g, "/"),
  l0 = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  o0 = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  i0 = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
class gu {
  constructor(t, n, r, l) {
    l === void 0 && (l = !1),
      (this.status = t),
      (this.statusText = n || ""),
      (this.internal = l),
      r instanceof Error ? ((this.data = r.toString()), (this.error = r)) : (this.data = r);
  }
}
function Lf(e) {
  return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e;
}
const jf = ["post", "put", "patch", "delete"],
  a0 = new Set(jf),
  u0 = ["get", ...jf],
  s0 = new Set(u0),
  c0 = new Set([301, 302, 303, 307, 308]),
  d0 = new Set([307, 308]),
  xi = { state: "idle", location: void 0, formMethod: void 0, formAction: void 0, formEncType: void 0, formData: void 0, json: void 0, text: void 0 },
  f0 = { state: "idle", data: void 0, formMethod: void 0, formAction: void 0, formEncType: void 0, formData: void 0, json: void 0, text: void 0 },
  Cr = { state: "unblocked", proceed: void 0, reset: void 0, location: void 0 },
  Tf = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  p0 = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary }),
  Df = "remix-router-transitions";
function h0(e) {
  const t = e.window ? e.window : typeof window < "u" ? window : void 0,
    n = typeof t < "u" && typeof t.document < "u" && typeof t.document.createElement < "u",
    r = !n;
  H(e.routes.length > 0, "You must provide a non-empty routes array to createRouter");
  let l;
  if (e.mapRouteProperties) l = e.mapRouteProperties;
  else if (e.detectErrorBoundary) {
    let y = e.detectErrorBoundary;
    l = (w) => ({ hasErrorBoundary: y(w) });
  } else l = p0;
  let o = {},
    i = ga(e.routes, l, void 0, o),
    a,
    u = e.basename || "/",
    s = de({ v7_fetcherPersist: !1, v7_normalizeFormMethod: !1, v7_partialHydration: !1, v7_prependBasename: !1, v7_relativeSplatPath: !1 }, e.future),
    c = null,
    h = new Set(),
    p = null,
    x = null,
    _ = null,
    S = e.hydrationData != null,
    N = Qn(i, e.history.location, u),
    f = null;
  if (N == null) {
    let y = Je(404, { pathname: e.history.location.pathname }),
      { matches: w, route: P } = Xs(i);
    (N = w), (f = { [P.id]: y });
  }
  let d,
    m = N.some((y) => y.route.lazy),
    C = N.some((y) => y.route.loader);
  if (m) d = !1;
  else if (!C) d = !0;
  else if (s.v7_partialHydration) {
    let y = e.hydrationData ? e.hydrationData.loaderData : null,
      w = e.hydrationData ? e.hydrationData.errors : null;
    d = N.every((P) => P.route.loader && P.route.loader.hydrate !== !0 && ((y && y[P.route.id] !== void 0) || (w && w[P.route.id] !== void 0)));
  } else d = e.hydrationData != null;
  let L,
    g = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: N,
      initialized: d,
      navigation: xi,
      restoreScrollPosition: e.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: "idle",
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || f,
      fetchers: new Map(),
      blockers: new Map(),
    },
    k = pe.Pop,
    j = !1,
    M,
    O = !1,
    V = new Map(),
    fe = null,
    me = !1,
    Xe = !1,
    Nn = [],
    Mt = [],
    re = new Map(),
    D = 0,
    A = -1,
    B = new Map(),
    X = new Set(),
    ee = new Map(),
    pt = new Map(),
    Ee = new Set(),
    lt = new Map(),
    De = new Map(),
    zt = !1;
  function Xf() {
    if (
      ((c = e.history.listen((y) => {
        let { action: w, location: P, delta: T } = y;
        if (zt) {
          zt = !1;
          return;
        }
        ir(
          De.size === 0 || T != null,
          "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL."
        );
        let F = Nu({ currentLocation: g.location, nextLocation: P, historyAction: w });
        if (F && T != null) {
          (zt = !0),
            e.history.go(T * -1),
            gl(F, {
              state: "blocked",
              location: P,
              proceed() {
                gl(F, { state: "proceeding", proceed: void 0, reset: void 0, location: P }), e.history.go(T);
              },
              reset() {
                let Q = new Map(g.blockers);
                Q.set(F, Cr), He({ blockers: Q });
              },
            });
          return;
        }
        return an(w, P);
      })),
      n)
    ) {
      k0(t, V);
      let y = () => P0(t, V);
      t.addEventListener("pagehide", y), (fe = () => t.removeEventListener("pagehide", y));
    }
    return g.initialized || an(pe.Pop, g.location, { initialHydration: !0 }), L;
  }
  function Zf() {
    c && c(), fe && fe(), h.clear(), M && M.abort(), g.fetchers.forEach((y, w) => vl(w)), g.blockers.forEach((y, w) => Pu(w));
  }
  function Jf(y) {
    return h.add(y), () => h.delete(y);
  }
  function He(y, w) {
    w === void 0 && (w = {}), (g = de({}, g, y));
    let P = [],
      T = [];
    s.v7_fetcherPersist &&
      g.fetchers.forEach((F, Q) => {
        F.state === "idle" && (Ee.has(Q) ? T.push(Q) : P.push(Q));
      }),
      [...h].forEach((F) => F(g, { deletedFetchers: T, unstable_viewTransitionOpts: w.viewTransitionOpts, unstable_flushSync: w.flushSync === !0 })),
      s.v7_fetcherPersist && (P.forEach((F) => g.fetchers.delete(F)), T.forEach((F) => vl(F)));
  }
  function pr(y, w, P) {
    var T, F;
    let { flushSync: Q } = P === void 0 ? {} : P,
      $ =
        g.actionData != null &&
        g.navigation.formMethod != null &&
        ut(g.navigation.formMethod) &&
        g.navigation.state === "loading" &&
        ((T = y.state) == null ? void 0 : T._isRedirect) !== !0,
      U;
    w.actionData ? (Object.keys(w.actionData).length > 0 ? (U = w.actionData) : (U = null)) : $ ? (U = g.actionData) : (U = null);
    let I = w.loaderData ? Gs(g.loaderData, w.loaderData, w.matches || [], w.errors) : g.loaderData,
      Y = g.blockers;
    Y.size > 0 && ((Y = new Map(Y)), Y.forEach((q, Ce) => Y.set(Ce, Cr)));
    let we = j === !0 || (g.navigation.formMethod != null && ut(g.navigation.formMethod) && ((F = y.state) == null ? void 0 : F._isRedirect) !== !0);
    a && ((i = a), (a = void 0)), me || k === pe.Pop || (k === pe.Push ? e.history.push(y, y.state) : k === pe.Replace && e.history.replace(y, y.state));
    let W;
    if (k === pe.Pop) {
      let q = V.get(g.location.pathname);
      q && q.has(y.pathname)
        ? (W = { currentLocation: g.location, nextLocation: y })
        : V.has(y.pathname) && (W = { currentLocation: y, nextLocation: g.location });
    } else if (O) {
      let q = V.get(g.location.pathname);
      q ? q.add(y.pathname) : ((q = new Set([y.pathname])), V.set(g.location.pathname, q)), (W = { currentLocation: g.location, nextLocation: y });
    }
    He(
      de({}, w, {
        actionData: U,
        loaderData: I,
        historyAction: k,
        location: y,
        initialized: !0,
        navigation: xi,
        revalidation: "idle",
        restoreScrollPosition: Lu(y, w.matches || g.matches),
        preventScrollReset: we,
        blockers: Y,
      }),
      { viewTransitionOpts: W, flushSync: Q === !0 }
    ),
      (k = pe.Pop),
      (j = !1),
      (O = !1),
      (me = !1),
      (Xe = !1),
      (Nn = []),
      (Mt = []);
  }
  async function Su(y, w) {
    if (typeof y == "number") {
      e.history.go(y);
      return;
    }
    let P = ya(g.location, g.matches, u, s.v7_prependBasename, y, s.v7_relativeSplatPath, w == null ? void 0 : w.fromRouteId, w == null ? void 0 : w.relative),
      { path: T, submission: F, error: Q } = Hs(s.v7_normalizeFormMethod, !1, P, w),
      $ = g.location,
      U = il(g.location, T, w && w.state);
    U = de({}, U, e.history.encodeLocation(U));
    let I = w && w.replace != null ? w.replace : void 0,
      Y = pe.Push;
    I === !0 ? (Y = pe.Replace) : I === !1 || (F != null && ut(F.formMethod) && F.formAction === g.location.pathname + g.location.search && (Y = pe.Replace));
    let we = w && "preventScrollReset" in w ? w.preventScrollReset === !0 : void 0,
      W = (w && w.unstable_flushSync) === !0,
      q = Nu({ currentLocation: $, nextLocation: U, historyAction: Y });
    if (q) {
      gl(q, {
        state: "blocked",
        location: U,
        proceed() {
          gl(q, { state: "proceeding", proceed: void 0, reset: void 0, location: U }), Su(y, w);
        },
        reset() {
          let Ce = new Map(g.blockers);
          Ce.set(q, Cr), He({ blockers: Ce });
        },
      });
      return;
    }
    return await an(Y, U, {
      submission: F,
      pendingError: Q,
      preventScrollReset: we,
      replace: w && w.replace,
      enableViewTransition: w && w.unstable_viewTransition,
      flushSync: W,
    });
  }
  function qf() {
    if ((Vo(), He({ revalidation: "loading" }), g.navigation.state !== "submitting")) {
      if (g.navigation.state === "idle") {
        an(g.historyAction, g.location, { startUninterruptedRevalidation: !0 });
        return;
      }
      an(k || g.historyAction, g.navigation.location, { overrideNavigation: g.navigation });
    }
  }
  async function an(y, w, P) {
    M && M.abort(),
      (M = null),
      (k = y),
      (me = (P && P.startUninterruptedRevalidation) === !0),
      ap(g.location, g.matches),
      (j = (P && P.preventScrollReset) === !0),
      (O = (P && P.enableViewTransition) === !0);
    let T = a || i,
      F = P && P.overrideNavigation,
      Q = Qn(T, w, u),
      $ = (P && P.flushSync) === !0;
    if (!Q) {
      let Ce = Je(404, { pathname: w.pathname }),
        { matches: Ze, route: Se } = Xs(T);
      Wo(), pr(w, { matches: Ze, loaderData: {}, errors: { [Se.id]: Ce } }, { flushSync: $ });
      return;
    }
    if (g.initialized && !Xe && w0(g.location, w) && !(P && P.submission && ut(P.submission.formMethod))) {
      pr(w, { matches: Q }, { flushSync: $ });
      return;
    }
    M = new AbortController();
    let U = Pr(e.history, w, M.signal, P && P.submission),
      I,
      Y;
    if (P && P.pendingError) Y = { [Hr(Q).route.id]: P.pendingError };
    else if (P && P.submission && ut(P.submission.formMethod)) {
      let Ce = await bf(U, w, P.submission, Q, { replace: P.replace, flushSync: $ });
      if (Ce.shortCircuited) return;
      (I = Ce.pendingActionData), (Y = Ce.pendingActionError), (F = Ei(w, P.submission)), ($ = !1), (U = new Request(U.url, { signal: U.signal }));
    }
    let {
      shortCircuited: we,
      loaderData: W,
      errors: q,
    } = await ep(U, w, Q, F, P && P.submission, P && P.fetcherSubmission, P && P.replace, P && P.initialHydration === !0, $, I, Y);
    we || ((M = null), pr(w, de({ matches: Q }, I ? { actionData: I } : {}, { loaderData: W, errors: q })));
  }
  async function bf(y, w, P, T, F) {
    F === void 0 && (F = {}), Vo();
    let Q = E0(w, P);
    He({ navigation: Q }, { flushSync: F.flushSync === !0 });
    let $,
      U = Sa(T, w);
    if (!U.route.action && !U.route.lazy) $ = { type: se.error, error: Je(405, { method: y.method, pathname: w.pathname, routeId: U.route.id }) };
    else if ((($ = await kr("action", y, U, T, o, l, u, s.v7_relativeSplatPath)), y.signal.aborted)) return { shortCircuited: !0 };
    if (vn($)) {
      let I;
      return (
        F && F.replace != null ? (I = F.replace) : (I = $.location === g.location.pathname + g.location.search),
        await hr(g, $, { submission: P, replace: I }),
        { shortCircuited: !0 }
      );
    }
    if (Kn($)) {
      let I = Hr(T, U.route.id);
      return (F && F.replace) !== !0 && (k = pe.Push), { pendingActionData: {}, pendingActionError: { [I.route.id]: $.error } };
    }
    if (mn($)) throw Je(400, { type: "defer-action" });
    return { pendingActionData: { [U.route.id]: $.data } };
  }
  async function ep(y, w, P, T, F, Q, $, U, I, Y, we) {
    let W = T || Ei(w, F),
      q = F || Q || qs(W),
      Ce = a || i,
      [Ze, Se] = Vs(e.history, g, P, q, w, s.v7_partialHydration && U === !0, Xe, Nn, Mt, Ee, ee, X, Ce, u, Y, we);
    if ((Wo((J) => !(P && P.some((le) => le.route.id === J)) || (Ze && Ze.some((le) => le.route.id === J))), (A = ++D), Ze.length === 0 && Se.length === 0)) {
      let J = Cu();
      return (
        pr(w, de({ matches: P, loaderData: {}, errors: we || null }, Y ? { actionData: Y } : {}, J ? { fetchers: new Map(g.fetchers) } : {}), { flushSync: I }),
        { shortCircuited: !0 }
      );
    }
    if (!me && (!s.v7_partialHydration || !U)) {
      Se.forEach((le) => {
        let ht = g.fetchers.get(le.key),
          wl = Nr(void 0, ht ? ht.data : void 0);
        g.fetchers.set(le.key, wl);
      });
      let J = Y || g.actionData;
      He(
        de(
          { navigation: W },
          J ? (Object.keys(J).length === 0 ? { actionData: null } : { actionData: J }) : {},
          Se.length > 0 ? { fetchers: new Map(g.fetchers) } : {}
        ),
        { flushSync: I }
      );
    }
    Se.forEach((J) => {
      re.has(J.key) && Ft(J.key), J.controller && re.set(J.key, J.controller);
    });
    let Rn = () => Se.forEach((J) => Ft(J.key));
    M && M.signal.addEventListener("abort", Rn);
    let { results: Qo, loaderResults: Ln, fetcherResults: It } = await _u(g.matches, P, Ze, Se, y);
    if (y.signal.aborted) return { shortCircuited: !0 };
    M && M.signal.removeEventListener("abort", Rn), Se.forEach((J) => re.delete(J.key));
    let un = Zs(Qo);
    if (un) {
      if (un.idx >= Ze.length) {
        let J = Se[un.idx - Ze.length].key;
        X.add(J);
      }
      return await hr(g, un.result, { replace: $ }), { shortCircuited: !0 };
    }
    let { loaderData: Ko, errors: Yo } = Ys(g, P, Ze, Ln, we, Se, It, lt);
    lt.forEach((J, le) => {
      J.subscribe((ht) => {
        (ht || J.done) && lt.delete(le);
      });
    });
    let Go = Cu(),
      jn = ku(A),
      yl = Go || jn || Se.length > 0;
    return de({ loaderData: Ko, errors: Yo }, yl ? { fetchers: new Map(g.fetchers) } : {});
  }
  function tp(y, w, P, T) {
    if (r)
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback."
      );
    re.has(y) && Ft(y);
    let F = (T && T.unstable_flushSync) === !0,
      Q = a || i,
      $ = ya(g.location, g.matches, u, s.v7_prependBasename, P, s.v7_relativeSplatPath, w, T == null ? void 0 : T.relative),
      U = Qn(Q, $, u);
    if (!U) {
      mr(y, w, Je(404, { pathname: $ }), { flushSync: F });
      return;
    }
    let { path: I, submission: Y, error: we } = Hs(s.v7_normalizeFormMethod, !0, $, T);
    if (we) {
      mr(y, w, we, { flushSync: F });
      return;
    }
    let W = Sa(U, I);
    if (((j = (T && T.preventScrollReset) === !0), Y && ut(Y.formMethod))) {
      np(y, w, I, W, U, F, Y);
      return;
    }
    ee.set(y, { routeId: w, path: I }), rp(y, w, I, W, U, F, Y);
  }
  async function np(y, w, P, T, F, Q, $) {
    if ((Vo(), ee.delete(y), !T.route.action && !T.route.lazy)) {
      let le = Je(405, { method: $.formMethod, pathname: P, routeId: w });
      mr(y, w, le, { flushSync: Q });
      return;
    }
    let U = g.fetchers.get(y);
    Ot(y, C0($, U), { flushSync: Q });
    let I = new AbortController(),
      Y = Pr(e.history, P, I.signal, $);
    re.set(y, I);
    let we = D,
      W = await kr("action", Y, T, F, o, l, u, s.v7_relativeSplatPath);
    if (Y.signal.aborted) {
      re.get(y) === I && re.delete(y);
      return;
    }
    if (s.v7_fetcherPersist && Ee.has(y)) {
      if (vn(W) || Kn(W)) {
        Ot(y, At(void 0));
        return;
      }
    } else {
      if (vn(W))
        if ((re.delete(y), A > we)) {
          Ot(y, At(void 0));
          return;
        } else return X.add(y), Ot(y, Nr($)), hr(g, W, { fetcherSubmission: $ });
      if (Kn(W)) {
        mr(y, w, W.error);
        return;
      }
    }
    if (mn(W)) throw Je(400, { type: "defer-action" });
    let q = g.navigation.location || g.location,
      Ce = Pr(e.history, q, I.signal),
      Ze = a || i,
      Se = g.navigation.state !== "idle" ? Qn(Ze, g.navigation.location, u) : g.matches;
    H(Se, "Didn't find any matches after fetcher action");
    let Rn = ++D;
    B.set(y, Rn);
    let Qo = Nr($, W.data);
    g.fetchers.set(y, Qo);
    let [Ln, It] = Vs(e.history, g, Se, $, q, !1, Xe, Nn, Mt, Ee, ee, X, Ze, u, { [T.route.id]: W.data }, void 0);
    It.filter((le) => le.key !== y).forEach((le) => {
      let ht = le.key,
        wl = g.fetchers.get(ht),
        sp = Nr(void 0, wl ? wl.data : void 0);
      g.fetchers.set(ht, sp), re.has(ht) && Ft(ht), le.controller && re.set(ht, le.controller);
    }),
      He({ fetchers: new Map(g.fetchers) });
    let un = () => It.forEach((le) => Ft(le.key));
    I.signal.addEventListener("abort", un);
    let { results: Ko, loaderResults: Yo, fetcherResults: Go } = await _u(g.matches, Se, Ln, It, Ce);
    if (I.signal.aborted) return;
    I.signal.removeEventListener("abort", un), B.delete(y), re.delete(y), It.forEach((le) => re.delete(le.key));
    let jn = Zs(Ko);
    if (jn) {
      if (jn.idx >= Ln.length) {
        let le = It[jn.idx - Ln.length].key;
        X.add(le);
      }
      return hr(g, jn.result);
    }
    let { loaderData: yl, errors: J } = Ys(g, g.matches, Ln, Yo, void 0, It, Go, lt);
    if (g.fetchers.has(y)) {
      let le = At(W.data);
      g.fetchers.set(y, le);
    }
    ku(Rn),
      g.navigation.state === "loading" && Rn > A
        ? (H(k, "Expected pending action"),
          M && M.abort(),
          pr(g.navigation.location, { matches: Se, loaderData: yl, errors: J, fetchers: new Map(g.fetchers) }))
        : (He({ errors: J, loaderData: Gs(g.loaderData, yl, Se, J), fetchers: new Map(g.fetchers) }), (Xe = !1));
  }
  async function rp(y, w, P, T, F, Q, $) {
    let U = g.fetchers.get(y);
    Ot(y, Nr($, U ? U.data : void 0), { flushSync: Q });
    let I = new AbortController(),
      Y = Pr(e.history, P, I.signal);
    re.set(y, I);
    let we = D,
      W = await kr("loader", Y, T, F, o, l, u, s.v7_relativeSplatPath);
    if ((mn(W) && (W = (await Of(W, Y.signal, !0)) || W), re.get(y) === I && re.delete(y), !Y.signal.aborted)) {
      if (Ee.has(y)) {
        Ot(y, At(void 0));
        return;
      }
      if (vn(W))
        if (A > we) {
          Ot(y, At(void 0));
          return;
        } else {
          X.add(y), await hr(g, W);
          return;
        }
      if (Kn(W)) {
        mr(y, w, W.error);
        return;
      }
      H(!mn(W), "Unhandled fetcher deferred data"), Ot(y, At(W.data));
    }
  }
  async function hr(y, w, P) {
    let { submission: T, fetcherSubmission: F, replace: Q } = P === void 0 ? {} : P;
    w.revalidate && (Xe = !0);
    let $ = il(y.location, w.location, { _isRedirect: !0 });
    if ((H($, "Expected a location on the redirect navigation"), n)) {
      let q = !1;
      if (w.reloadDocument) q = !0;
      else if (Tf.test(w.location)) {
        const Ce = e.history.createURL(w.location);
        q = Ce.origin !== t.location.origin || cr(Ce.pathname, u) == null;
      }
      if (q) {
        Q ? t.location.replace(w.location) : t.location.assign(w.location);
        return;
      }
    }
    M = null;
    let U = Q === !0 ? pe.Replace : pe.Push,
      { formMethod: I, formAction: Y, formEncType: we } = y.navigation;
    !T && !F && I && Y && we && (T = qs(y.navigation));
    let W = T || F;
    if (d0.has(w.status) && W && ut(W.formMethod)) await an(U, $, { submission: de({}, W, { formAction: w.location }), preventScrollReset: j });
    else {
      let q = Ei($, T);
      await an(U, $, { overrideNavigation: q, fetcherSubmission: F, preventScrollReset: j });
    }
  }
  async function _u(y, w, P, T, F) {
    let Q = await Promise.all([
        ...P.map((I) => kr("loader", F, I, w, o, l, u, s.v7_relativeSplatPath)),
        ...T.map((I) =>
          I.matches && I.match && I.controller
            ? kr("loader", Pr(e.history, I.path, I.controller.signal), I.match, I.matches, o, l, u, s.v7_relativeSplatPath)
            : { type: se.error, error: Je(404, { pathname: I.path }) }
        ),
      ]),
      $ = Q.slice(0, P.length),
      U = Q.slice(P.length);
    return (
      await Promise.all([
        Js(
          y,
          P,
          $,
          $.map(() => F.signal),
          !1,
          g.loaderData
        ),
        Js(
          y,
          T.map((I) => I.match),
          U,
          T.map((I) => (I.controller ? I.controller.signal : null)),
          !0
        ),
      ]),
      { results: Q, loaderResults: $, fetcherResults: U }
    );
  }
  function Vo() {
    (Xe = !0),
      Nn.push(...Wo()),
      ee.forEach((y, w) => {
        re.has(w) && (Mt.push(w), Ft(w));
      });
  }
  function Ot(y, w, P) {
    P === void 0 && (P = {}), g.fetchers.set(y, w), He({ fetchers: new Map(g.fetchers) }, { flushSync: (P && P.flushSync) === !0 });
  }
  function mr(y, w, P, T) {
    T === void 0 && (T = {});
    let F = Hr(g.matches, w);
    vl(y), He({ errors: { [F.route.id]: P }, fetchers: new Map(g.fetchers) }, { flushSync: (T && T.flushSync) === !0 });
  }
  function xu(y) {
    return s.v7_fetcherPersist && (pt.set(y, (pt.get(y) || 0) + 1), Ee.has(y) && Ee.delete(y)), g.fetchers.get(y) || f0;
  }
  function vl(y) {
    let w = g.fetchers.get(y);
    re.has(y) && !(w && w.state === "loading" && B.has(y)) && Ft(y), ee.delete(y), B.delete(y), X.delete(y), Ee.delete(y), g.fetchers.delete(y);
  }
  function lp(y) {
    if (s.v7_fetcherPersist) {
      let w = (pt.get(y) || 0) - 1;
      w <= 0 ? (pt.delete(y), Ee.add(y)) : pt.set(y, w);
    } else vl(y);
    He({ fetchers: new Map(g.fetchers) });
  }
  function Ft(y) {
    let w = re.get(y);
    H(w, "Expected fetch controller: " + y), w.abort(), re.delete(y);
  }
  function Eu(y) {
    for (let w of y) {
      let P = xu(w),
        T = At(P.data);
      g.fetchers.set(w, T);
    }
  }
  function Cu() {
    let y = [],
      w = !1;
    for (let P of X) {
      let T = g.fetchers.get(P);
      H(T, "Expected fetcher: " + P), T.state === "loading" && (X.delete(P), y.push(P), (w = !0));
    }
    return Eu(y), w;
  }
  function ku(y) {
    let w = [];
    for (let [P, T] of B)
      if (T < y) {
        let F = g.fetchers.get(P);
        H(F, "Expected fetcher: " + P), F.state === "loading" && (Ft(P), B.delete(P), w.push(P));
      }
    return Eu(w), w.length > 0;
  }
  function op(y, w) {
    let P = g.blockers.get(y) || Cr;
    return De.get(y) !== w && De.set(y, w), P;
  }
  function Pu(y) {
    g.blockers.delete(y), De.delete(y);
  }
  function gl(y, w) {
    let P = g.blockers.get(y) || Cr;
    H(
      (P.state === "unblocked" && w.state === "blocked") ||
        (P.state === "blocked" && w.state === "blocked") ||
        (P.state === "blocked" && w.state === "proceeding") ||
        (P.state === "blocked" && w.state === "unblocked") ||
        (P.state === "proceeding" && w.state === "unblocked"),
      "Invalid blocker state transition: " + P.state + " -> " + w.state
    );
    let T = new Map(g.blockers);
    T.set(y, w), He({ blockers: T });
  }
  function Nu(y) {
    let { currentLocation: w, nextLocation: P, historyAction: T } = y;
    if (De.size === 0) return;
    De.size > 1 && ir(!1, "A router only supports one blocker at a time");
    let F = Array.from(De.entries()),
      [Q, $] = F[F.length - 1],
      U = g.blockers.get(Q);
    if (!(U && U.state === "proceeding") && $({ currentLocation: w, nextLocation: P, historyAction: T })) return Q;
  }
  function Wo(y) {
    let w = [];
    return (
      lt.forEach((P, T) => {
        (!y || y(T)) && (P.cancel(), w.push(T), lt.delete(T));
      }),
      w
    );
  }
  function ip(y, w, P) {
    if (((p = y), (_ = w), (x = P || null), !S && g.navigation === xi)) {
      S = !0;
      let T = Lu(g.location, g.matches);
      T != null && He({ restoreScrollPosition: T });
    }
    return () => {
      (p = null), (_ = null), (x = null);
    };
  }
  function Ru(y, w) {
    return (
      (x &&
        x(
          y,
          w.map((T) => Hm(T, g.loaderData))
        )) ||
      y.key
    );
  }
  function ap(y, w) {
    if (p && _) {
      let P = Ru(y, w);
      p[P] = _();
    }
  }
  function Lu(y, w) {
    if (p) {
      let P = Ru(y, w),
        T = p[P];
      if (typeof T == "number") return T;
    }
    return null;
  }
  function up(y) {
    (o = {}), (a = ga(y, l, void 0, o));
  }
  return (
    (L = {
      get basename() {
        return u;
      },
      get future() {
        return s;
      },
      get state() {
        return g;
      },
      get routes() {
        return i;
      },
      get window() {
        return t;
      },
      initialize: Xf,
      subscribe: Jf,
      enableScrollRestoration: ip,
      navigate: Su,
      fetch: tp,
      revalidate: qf,
      createHref: (y) => e.history.createHref(y),
      encodeLocation: (y) => e.history.encodeLocation(y),
      getFetcher: xu,
      deleteFetcher: lp,
      dispose: Zf,
      getBlocker: op,
      deleteBlocker: Pu,
      _internalFetchControllers: re,
      _internalActiveDeferreds: lt,
      _internalSetRoutes: up,
    }),
    L
  );
}
function m0(e) {
  return e != null && (("formData" in e && e.formData != null) || ("body" in e && e.body !== void 0));
}
function ya(e, t, n, r, l, o, i, a) {
  let u, s;
  if (i) {
    u = [];
    for (let h of t)
      if ((u.push(h), h.route.id === i)) {
        s = h;
        break;
      }
  } else (u = t), (s = t[t.length - 1]);
  let c = Ao(l || ".", Uo(u, o), cr(e.pathname, n) || e.pathname, a === "path");
  return (
    l == null && ((c.search = e.search), (c.hash = e.hash)),
    (l == null || l === "" || l === ".") && s && s.route.index && !yu(c.search) && (c.search = c.search ? c.search.replace(/^\?/, "?index&") : "?index"),
    r && n !== "/" && (c.pathname = c.pathname === "/" ? n : kt([n, c.pathname])),
    Cn(c)
  );
}
function Hs(e, t, n, r) {
  if (!r || !m0(r)) return { path: n };
  if (r.formMethod && !x0(r.formMethod)) return { path: n, error: Je(405, { method: r.formMethod }) };
  let l = () => ({ path: n, error: Je(400, { type: "invalid-body" }) }),
    o = r.formMethod || "get",
    i = e ? o.toUpperCase() : o.toLowerCase(),
    a = zf(n);
  if (r.body !== void 0) {
    if (r.formEncType === "text/plain") {
      if (!ut(i)) return l();
      let p =
        typeof r.body == "string"
          ? r.body
          : r.body instanceof FormData || r.body instanceof URLSearchParams
          ? Array.from(r.body.entries()).reduce((x, _) => {
              let [S, N] = _;
              return (
                "" +
                x +
                S +
                "=" +
                N +
                `
`
              );
            }, "")
          : String(r.body);
      return { path: n, submission: { formMethod: i, formAction: a, formEncType: r.formEncType, formData: void 0, json: void 0, text: p } };
    } else if (r.formEncType === "application/json") {
      if (!ut(i)) return l();
      try {
        let p = typeof r.body == "string" ? JSON.parse(r.body) : r.body;
        return { path: n, submission: { formMethod: i, formAction: a, formEncType: r.formEncType, formData: void 0, json: p, text: void 0 } };
      } catch {
        return l();
      }
    }
  }
  H(typeof FormData == "function", "FormData is not available in this environment");
  let u, s;
  if (r.formData) (u = wa(r.formData)), (s = r.formData);
  else if (r.body instanceof FormData) (u = wa(r.body)), (s = r.body);
  else if (r.body instanceof URLSearchParams) (u = r.body), (s = Ks(u));
  else if (r.body == null) (u = new URLSearchParams()), (s = new FormData());
  else
    try {
      (u = new URLSearchParams(r.body)), (s = Ks(u));
    } catch {
      return l();
    }
  let c = { formMethod: i, formAction: a, formEncType: (r && r.formEncType) || "application/x-www-form-urlencoded", formData: s, json: void 0, text: void 0 };
  if (ut(c.formMethod)) return { path: n, submission: c };
  let h = Tt(n);
  return t && h.search && yu(h.search) && u.append("index", ""), (h.search = "?" + u), { path: Cn(h), submission: c };
}
function v0(e, t) {
  let n = e;
  if (t) {
    let r = e.findIndex((l) => l.route.id === t);
    r >= 0 && (n = e.slice(0, r));
  }
  return n;
}
function Vs(e, t, n, r, l, o, i, a, u, s, c, h, p, x, _, S) {
  let N = S ? Object.values(S)[0] : _ ? Object.values(_)[0] : void 0,
    f = e.createURL(t.location),
    d = e.createURL(l),
    m = S ? Object.keys(S)[0] : void 0,
    L = v0(n, m).filter((k, j) => {
      let { route: M } = k;
      if (M.lazy) return !0;
      if (M.loader == null) return !1;
      if (o) return M.loader.hydrate ? !0 : t.loaderData[M.id] === void 0 && (!t.errors || t.errors[M.id] === void 0);
      if (g0(t.loaderData, t.matches[j], k) || a.some((fe) => fe === k.route.id)) return !0;
      let O = t.matches[j],
        V = k;
      return Ws(
        k,
        de({ currentUrl: f, currentParams: O.params, nextUrl: d, nextParams: V.params }, r, {
          actionResult: N,
          defaultShouldRevalidate: i || f.pathname + f.search === d.pathname + d.search || f.search !== d.search || Mf(O, V),
        })
      );
    }),
    g = [];
  return (
    c.forEach((k, j) => {
      if (o || !n.some((me) => me.route.id === k.routeId) || s.has(j)) return;
      let M = Qn(p, k.path, x);
      if (!M) {
        g.push({ key: j, routeId: k.routeId, path: k.path, matches: null, match: null, controller: null });
        return;
      }
      let O = t.fetchers.get(j),
        V = Sa(M, k.path),
        fe = !1;
      h.has(j)
        ? (fe = !1)
        : u.includes(j)
        ? (fe = !0)
        : O && O.state !== "idle" && O.data === void 0
        ? (fe = i)
        : (fe = Ws(
            V,
            de({ currentUrl: f, currentParams: t.matches[t.matches.length - 1].params, nextUrl: d, nextParams: n[n.length - 1].params }, r, {
              actionResult: N,
              defaultShouldRevalidate: i,
            })
          )),
        fe && g.push({ key: j, routeId: k.routeId, path: k.path, matches: M, match: V, controller: new AbortController() });
    }),
    [L, g]
  );
}
function g0(e, t, n) {
  let r = !t || n.route.id !== t.route.id,
    l = e[n.route.id] === void 0;
  return r || l;
}
function Mf(e, t) {
  let n = e.route.path;
  return e.pathname !== t.pathname || (n != null && n.endsWith("*") && e.params["*"] !== t.params["*"]);
}
function Ws(e, t) {
  if (e.route.shouldRevalidate) {
    let n = e.route.shouldRevalidate(t);
    if (typeof n == "boolean") return n;
  }
  return t.defaultShouldRevalidate;
}
async function Qs(e, t, n) {
  if (!e.lazy) return;
  let r = await e.lazy();
  if (!e.lazy) return;
  let l = n[e.id];
  H(l, "No route found in manifest");
  let o = {};
  for (let i in r) {
    let u = l[i] !== void 0 && i !== "hasErrorBoundary";
    ir(
      !u,
      'Route "' +
        l.id +
        '" has a static property "' +
        i +
        '" defined but its lazy function is also returning a value for this property. ' +
        ('The lazy route property "' + i + '" will be ignored.')
    ),
      !u && !$m.has(i) && (o[i] = r[i]);
  }
  Object.assign(l, o), Object.assign(l, de({}, t(l), { lazy: void 0 }));
}
async function kr(e, t, n, r, l, o, i, a, u) {
  u === void 0 && (u = {});
  let s,
    c,
    h,
    p = (S) => {
      let N,
        f = new Promise((d, m) => (N = m));
      return (h = () => N()), t.signal.addEventListener("abort", h), Promise.race([S({ request: t, params: n.params, context: u.requestContext }), f]);
    };
  try {
    let S = n.route[e];
    if (n.route.lazy)
      if (S) {
        let N,
          f = await Promise.all([
            p(S).catch((d) => {
              N = d;
            }),
            Qs(n.route, o, l),
          ]);
        if (N) throw N;
        c = f[0];
      } else if ((await Qs(n.route, o, l), (S = n.route[e]), S)) c = await p(S);
      else if (e === "action") {
        let N = new URL(t.url),
          f = N.pathname + N.search;
        throw Je(405, { method: t.method, pathname: f, routeId: n.route.id });
      } else return { type: se.data, data: void 0 };
    else if (S) c = await p(S);
    else {
      let N = new URL(t.url),
        f = N.pathname + N.search;
      throw Je(404, { pathname: f });
    }
    H(
      c !== void 0,
      "You defined " +
        (e === "action" ? "an action" : "a loader") +
        " for route " +
        ('"' + n.route.id + "\" but didn't return anything from your `" + e + "` ") +
        "function. Please return a value or `null`."
    );
  } catch (S) {
    (s = se.error), (c = S);
  } finally {
    h && t.signal.removeEventListener("abort", h);
  }
  if (_0(c)) {
    let S = c.status;
    if (c0.has(S)) {
      let f = c.headers.get("Location");
      if ((H(f, "Redirects returned/thrown from loaders/actions must have a Location header"), !Tf.test(f)))
        f = ya(new URL(t.url), r.slice(0, r.indexOf(n) + 1), i, !0, f, a);
      else if (!u.isStaticRequest) {
        let d = new URL(t.url),
          m = f.startsWith("//") ? new URL(d.protocol + f) : new URL(f),
          C = cr(m.pathname, i) != null;
        m.origin === d.origin && C && (f = m.pathname + m.search + m.hash);
      }
      if (u.isStaticRequest) throw (c.headers.set("Location", f), c);
      return {
        type: se.redirect,
        status: S,
        location: f,
        revalidate: c.headers.get("X-Remix-Revalidate") !== null,
        reloadDocument: c.headers.get("X-Remix-Reload-Document") !== null,
      };
    }
    if (u.isRouteRequest) throw { type: s === se.error ? se.error : se.data, response: c };
    let N;
    try {
      let f = c.headers.get("Content-Type");
      f && /\bapplication\/json\b/.test(f) ? (c.body == null ? (N = null) : (N = await c.json())) : (N = await c.text());
    } catch (f) {
      return { type: se.error, error: f };
    }
    return s === se.error
      ? { type: s, error: new gu(S, c.statusText, N), headers: c.headers }
      : { type: se.data, data: N, statusCode: c.status, headers: c.headers };
  }
  if (s === se.error) return { type: s, error: c };
  if (S0(c)) {
    var x, _;
    return {
      type: se.deferred,
      deferredData: c,
      statusCode: (x = c.init) == null ? void 0 : x.status,
      headers: ((_ = c.init) == null ? void 0 : _.headers) && new Headers(c.init.headers),
    };
  }
  return { type: se.data, data: c };
}
function Pr(e, t, n, r) {
  let l = e.createURL(zf(t)).toString(),
    o = { signal: n };
  if (r && ut(r.formMethod)) {
    let { formMethod: i, formEncType: a } = r;
    (o.method = i.toUpperCase()),
      a === "application/json"
        ? ((o.headers = new Headers({ "Content-Type": a })), (o.body = JSON.stringify(r.json)))
        : a === "text/plain"
        ? (o.body = r.text)
        : a === "application/x-www-form-urlencoded" && r.formData
        ? (o.body = wa(r.formData))
        : (o.body = r.formData);
  }
  return new Request(l, o);
}
function wa(e) {
  let t = new URLSearchParams();
  for (let [n, r] of e.entries()) t.append(n, typeof r == "string" ? r : r.name);
  return t;
}
function Ks(e) {
  let t = new FormData();
  for (let [n, r] of e.entries()) t.append(n, r);
  return t;
}
function y0(e, t, n, r, l) {
  let o = {},
    i = null,
    a,
    u = !1,
    s = {};
  return (
    n.forEach((c, h) => {
      let p = t[h].route.id;
      if ((H(!vn(c), "Cannot handle redirect results in processLoaderData"), Kn(c))) {
        let x = Hr(e, p),
          _ = c.error;
        r && ((_ = Object.values(r)[0]), (r = void 0)),
          (i = i || {}),
          i[x.route.id] == null && (i[x.route.id] = _),
          (o[p] = void 0),
          u || ((u = !0), (a = Lf(c.error) ? c.error.status : 500)),
          c.headers && (s[p] = c.headers);
      } else
        mn(c) ? (l.set(p, c.deferredData), (o[p] = c.deferredData.data)) : (o[p] = c.data),
          c.statusCode != null && c.statusCode !== 200 && !u && (a = c.statusCode),
          c.headers && (s[p] = c.headers);
    }),
    r && ((i = r), (o[Object.keys(r)[0]] = void 0)),
    { loaderData: o, errors: i, statusCode: a || 200, loaderHeaders: s }
  );
}
function Ys(e, t, n, r, l, o, i, a) {
  let { loaderData: u, errors: s } = y0(t, n, r, l, a);
  for (let c = 0; c < o.length; c++) {
    let { key: h, match: p, controller: x } = o[c];
    H(i !== void 0 && i[c] !== void 0, "Did not find corresponding fetcher result");
    let _ = i[c];
    if (!(x && x.signal.aborted))
      if (Kn(_)) {
        let S = Hr(e.matches, p == null ? void 0 : p.route.id);
        (s && s[S.route.id]) || (s = de({}, s, { [S.route.id]: _.error })), e.fetchers.delete(h);
      } else if (vn(_)) H(!1, "Unhandled fetcher revalidation redirect");
      else if (mn(_)) H(!1, "Unhandled fetcher deferred data");
      else {
        let S = At(_.data);
        e.fetchers.set(h, S);
      }
  }
  return { loaderData: u, errors: s };
}
function Gs(e, t, n, r) {
  let l = de({}, t);
  for (let o of n) {
    let i = o.route.id;
    if ((t.hasOwnProperty(i) ? t[i] !== void 0 && (l[i] = t[i]) : e[i] !== void 0 && o.route.loader && (l[i] = e[i]), r && r.hasOwnProperty(i))) break;
  }
  return l;
}
function Hr(e, t) {
  return (t ? e.slice(0, e.findIndex((r) => r.route.id === t) + 1) : [...e]).reverse().find((r) => r.route.hasErrorBoundary === !0) || e[0];
}
function Xs(e) {
  let t = e.length === 1 ? e[0] : e.find((n) => n.index || !n.path || n.path === "/") || { id: "__shim-error-route__" };
  return { matches: [{ params: {}, pathname: "", pathnameBase: "", route: t }], route: t };
}
function Je(e, t) {
  let { pathname: n, routeId: r, method: l, type: o } = t === void 0 ? {} : t,
    i = "Unknown Server Error",
    a = "Unknown @remix-run/router error";
  return (
    e === 400
      ? ((i = "Bad Request"),
        l && n && r
          ? (a =
              "You made a " +
              l +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide a `loader` for route "' + r + '", ') +
              "so there is no way to handle the request.")
          : o === "defer-action"
          ? (a = "defer() is not supported in actions")
          : o === "invalid-body" && (a = "Unable to encode submission body"))
      : e === 403
      ? ((i = "Forbidden"), (a = 'Route "' + r + '" does not match URL "' + n + '"'))
      : e === 404
      ? ((i = "Not Found"), (a = 'No route matches URL "' + n + '"'))
      : e === 405 &&
        ((i = "Method Not Allowed"),
        l && n && r
          ? (a =
              "You made a " +
              l.toUpperCase() +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide an `action` for route "' + r + '", ') +
              "so there is no way to handle the request.")
          : l && (a = 'Invalid request method "' + l.toUpperCase() + '"')),
    new gu(e || 500, i, new Error(a), !0)
  );
}
function Zs(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let n = e[t];
    if (vn(n)) return { result: n, idx: t };
  }
}
function zf(e) {
  let t = typeof e == "string" ? Tt(e) : e;
  return Cn(de({}, t, { hash: "" }));
}
function w0(e, t) {
  return e.pathname !== t.pathname || e.search !== t.search ? !1 : e.hash === "" ? t.hash !== "" : e.hash === t.hash ? !0 : t.hash !== "";
}
function mn(e) {
  return e.type === se.deferred;
}
function Kn(e) {
  return e.type === se.error;
}
function vn(e) {
  return (e && e.type) === se.redirect;
}
function S0(e) {
  let t = e;
  return (
    t &&
    typeof t == "object" &&
    typeof t.data == "object" &&
    typeof t.subscribe == "function" &&
    typeof t.cancel == "function" &&
    typeof t.resolveData == "function"
  );
}
function _0(e) {
  return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.headers == "object" && typeof e.body < "u";
}
function x0(e) {
  return s0.has(e.toLowerCase());
}
function ut(e) {
  return a0.has(e.toLowerCase());
}
async function Js(e, t, n, r, l, o) {
  for (let i = 0; i < n.length; i++) {
    let a = n[i],
      u = t[i];
    if (!u) continue;
    let s = e.find((h) => h.route.id === u.route.id),
      c = s != null && !Mf(s, u) && (o && o[u.route.id]) !== void 0;
    if (mn(a) && (l || c)) {
      let h = r[i];
      H(h, "Expected an AbortSignal for revalidating fetcher deferred result"),
        await Of(a, h, l).then((p) => {
          p && (n[i] = p || n[i]);
        });
    }
  }
}
async function Of(e, t, n) {
  if ((n === void 0 && (n = !1), !(await e.deferredData.resolveData(t)))) {
    if (n)
      try {
        return { type: se.data, data: e.deferredData.unwrappedData };
      } catch (l) {
        return { type: se.error, error: l };
      }
    return { type: se.data, data: e.deferredData.data };
  }
}
function yu(e) {
  return new URLSearchParams(e).getAll("index").some((t) => t === "");
}
function Sa(e, t) {
  let n = typeof t == "string" ? Tt(t).search : t.search;
  if (e[e.length - 1].route.index && yu(n || "")) return e[e.length - 1];
  let r = Rf(e);
  return r[r.length - 1];
}
function qs(e) {
  let { formMethod: t, formAction: n, formEncType: r, text: l, formData: o, json: i } = e;
  if (!(!t || !n || !r)) {
    if (l != null) return { formMethod: t, formAction: n, formEncType: r, formData: void 0, json: void 0, text: l };
    if (o != null) return { formMethod: t, formAction: n, formEncType: r, formData: o, json: void 0, text: void 0 };
    if (i !== void 0) return { formMethod: t, formAction: n, formEncType: r, formData: void 0, json: i, text: void 0 };
  }
}
function Ei(e, t) {
  return t
    ? {
        state: "loading",
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text,
      }
    : { state: "loading", location: e, formMethod: void 0, formAction: void 0, formEncType: void 0, formData: void 0, json: void 0, text: void 0 };
}
function E0(e, t) {
  return {
    state: "submitting",
    location: e,
    formMethod: t.formMethod,
    formAction: t.formAction,
    formEncType: t.formEncType,
    formData: t.formData,
    json: t.json,
    text: t.text,
  };
}
function Nr(e, t) {
  return e
    ? {
        state: "loading",
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t,
      }
    : { state: "loading", formMethod: void 0, formAction: void 0, formEncType: void 0, formData: void 0, json: void 0, text: void 0, data: t };
}
function C0(e, t) {
  return {
    state: "submitting",
    formMethod: e.formMethod,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formData: e.formData,
    json: e.json,
    text: e.text,
    data: t ? t.data : void 0,
  };
}
function At(e) {
  return { state: "idle", formMethod: void 0, formAction: void 0, formEncType: void 0, formData: void 0, json: void 0, text: void 0, data: e };
}
function k0(e, t) {
  try {
    let n = e.sessionStorage.getItem(Df);
    if (n) {
      let r = JSON.parse(n);
      for (let [l, o] of Object.entries(r || {})) o && Array.isArray(o) && t.set(l, new Set(o || []));
    }
  } catch {}
}
function P0(e, t) {
  if (t.size > 0) {
    let n = {};
    for (let [r, l] of t) n[r] = [...l];
    try {
      e.sessionStorage.setItem(Df, JSON.stringify(n));
    } catch (r) {
      ir(!1, "Failed to save applied view transitions in sessionStorage (" + r + ").");
    }
  }
}
/**
 * React Router v6.22.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function al() {
  return (
    (al = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    al.apply(this, arguments)
  );
}
const $o = E.createContext(null),
  Ff = E.createContext(null),
  on = E.createContext(null),
  Bo = E.createContext(null),
  Dt = E.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  If = E.createContext(null);
function N0(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  dr() || H(!1);
  let { basename: r, navigator: l } = E.useContext(on),
    { hash: o, pathname: i, search: a } = Af(e, { relative: n }),
    u = i;
  return r !== "/" && (u = i === "/" ? r : kt([r, i])), l.createHref({ pathname: u, search: a, hash: o });
}
function dr() {
  return E.useContext(Bo) != null;
}
function fr() {
  return dr() || H(!1), E.useContext(Bo).location;
}
function Uf(e) {
  E.useContext(on).static || E.useLayoutEffect(e);
}
function Ho() {
  let { isDataRoute: e } = E.useContext(Dt);
  return e ? B0() : R0();
}
function R0() {
  dr() || H(!1);
  let e = E.useContext($o),
    { basename: t, future: n, navigator: r } = E.useContext(on),
    { matches: l } = E.useContext(Dt),
    { pathname: o } = fr(),
    i = JSON.stringify(Uo(l, n.v7_relativeSplatPath)),
    a = E.useRef(!1);
  return (
    Uf(() => {
      a.current = !0;
    }),
    E.useCallback(
      function (s, c) {
        if ((c === void 0 && (c = {}), !a.current)) return;
        if (typeof s == "number") {
          r.go(s);
          return;
        }
        let h = Ao(s, JSON.parse(i), o, c.relative === "path");
        e == null && t !== "/" && (h.pathname = h.pathname === "/" ? t : kt([t, h.pathname])), (c.replace ? r.replace : r.push)(h, c.state, c);
      },
      [t, r, i, o, e]
    )
  );
}
const L0 = E.createContext(null);
function j0(e) {
  let t = E.useContext(Dt).outlet;
  return t && E.createElement(L0.Provider, { value: e }, t);
}
function Af(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = E.useContext(on),
    { matches: l } = E.useContext(Dt),
    { pathname: o } = fr(),
    i = JSON.stringify(Uo(l, r.v7_relativeSplatPath));
  return E.useMemo(() => Ao(e, JSON.parse(i), o, n === "path"), [e, i, o, n]);
}
function T0(e, t, n, r) {
  dr() || H(!1);
  let { navigator: l } = E.useContext(on),
    { matches: o } = E.useContext(Dt),
    i = o[o.length - 1],
    a = i ? i.params : {};
  i && i.pathname;
  let u = i ? i.pathnameBase : "/";
  i && i.route;
  let s = fr(),
    c;
  if (t) {
    var h;
    let N = typeof t == "string" ? Tt(t) : t;
    u === "/" || ((h = N.pathname) != null && h.startsWith(u)) || H(!1), (c = N);
  } else c = s;
  let p = c.pathname || "/",
    x = p;
  if (u !== "/") {
    let N = u.replace(/^\//, "").split("/");
    x = "/" + p.replace(/^\//, "").split("/").slice(N.length).join("/");
  }
  let _ = Qn(e, { pathname: x }),
    S = F0(
      _ &&
        _.map((N) =>
          Object.assign({}, N, {
            params: Object.assign({}, a, N.params),
            pathname: kt([u, l.encodeLocation ? l.encodeLocation(N.pathname).pathname : N.pathname]),
            pathnameBase: N.pathnameBase === "/" ? u : kt([u, l.encodeLocation ? l.encodeLocation(N.pathnameBase).pathname : N.pathnameBase]),
          })
        ),
      o,
      n,
      r
    );
  return t && S
    ? E.createElement(
        Bo.Provider,
        { value: { location: al({ pathname: "/", search: "", hash: "", state: null, key: "default" }, c), navigationType: pe.Pop } },
        S
      )
    : S;
}
function D0() {
  let e = $0(),
    t = Lf(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    l = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return E.createElement(
    E.Fragment,
    null,
    E.createElement("h2", null, "Unexpected Application Error!"),
    E.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? E.createElement("pre", { style: l }, n) : null,
    null
  );
}
const M0 = E.createElement(D0, null);
class z0 extends E.Component {
  constructor(t) {
    super(t), (this.state = { location: t.location, revalidation: t.revalidation, error: t.error });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location || (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : { error: t.error !== void 0 ? t.error : n.error, location: n.location, revalidation: t.revalidation || n.revalidation };
  }
  componentDidCatch(t, n) {
    console.error("React Router caught the following error during render", t, n);
  }
  render() {
    return this.state.error !== void 0
      ? E.createElement(
          Dt.Provider,
          { value: this.props.routeContext },
          E.createElement(If.Provider, { value: this.state.error, children: this.props.component })
        )
      : this.props.children;
  }
}
function O0(e) {
  let { routeContext: t, match: n, children: r } = e,
    l = E.useContext($o);
  return (
    l && l.static && l.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (l.staticContext._deepestRenderedBoundaryId = n.route.id),
    E.createElement(Dt.Provider, { value: t }, r)
  );
}
function F0(e, t, n, r) {
  var l;
  if ((t === void 0 && (t = []), n === void 0 && (n = null), r === void 0 && (r = null), e == null)) {
    var o;
    if ((o = n) != null && o.errors) e = n.matches;
    else return null;
  }
  let i = e,
    a = (l = n) == null ? void 0 : l.errors;
  if (a != null) {
    let c = i.findIndex((h) => h.route.id && (a == null ? void 0 : a[h.route.id]));
    c >= 0 || H(!1), (i = i.slice(0, Math.min(i.length, c + 1)));
  }
  let u = !1,
    s = -1;
  if (n && r && r.v7_partialHydration)
    for (let c = 0; c < i.length; c++) {
      let h = i[c];
      if (((h.route.HydrateFallback || h.route.hydrateFallbackElement) && (s = c), h.route.id)) {
        let { loaderData: p, errors: x } = n,
          _ = h.route.loader && p[h.route.id] === void 0 && (!x || x[h.route.id] === void 0);
        if (h.route.lazy || _) {
          (u = !0), s >= 0 ? (i = i.slice(0, s + 1)) : (i = [i[0]]);
          break;
        }
      }
    }
  return i.reduceRight((c, h, p) => {
    let x,
      _ = !1,
      S = null,
      N = null;
    n &&
      ((x = a && h.route.id ? a[h.route.id] : void 0),
      (S = h.route.errorElement || M0),
      u && (s < 0 && p === 0 ? (H0("route-fallback", !1), (_ = !0), (N = null)) : s === p && ((_ = !0), (N = h.route.hydrateFallbackElement || null))));
    let f = t.concat(i.slice(0, p + 1)),
      d = () => {
        let m;
        return (
          x ? (m = S) : _ ? (m = N) : h.route.Component ? (m = E.createElement(h.route.Component, null)) : h.route.element ? (m = h.route.element) : (m = c),
          E.createElement(O0, { match: h, routeContext: { outlet: c, matches: f, isDataRoute: n != null }, children: m })
        );
      };
    return n && (h.route.ErrorBoundary || h.route.errorElement || p === 0)
      ? E.createElement(z0, {
          location: n.location,
          revalidation: n.revalidation,
          component: S,
          error: x,
          children: d(),
          routeContext: { outlet: null, matches: f, isDataRoute: !0 },
        })
      : d();
  }, null);
}
var $f = (function (e) {
    return (e.UseBlocker = "useBlocker"), (e.UseRevalidator = "useRevalidator"), (e.UseNavigateStable = "useNavigate"), e;
  })($f || {}),
  So = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(So || {});
function I0(e) {
  let t = E.useContext($o);
  return t || H(!1), t;
}
function U0(e) {
  let t = E.useContext(Ff);
  return t || H(!1), t;
}
function A0(e) {
  let t = E.useContext(Dt);
  return t || H(!1), t;
}
function Bf(e) {
  let t = A0(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || H(!1), n.route.id;
}
function $0() {
  var e;
  let t = E.useContext(If),
    n = U0(So.UseRouteError),
    r = Bf(So.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function B0() {
  let { router: e } = I0($f.UseNavigateStable),
    t = Bf(So.UseNavigateStable),
    n = E.useRef(!1);
  return (
    Uf(() => {
      n.current = !0;
    }),
    E.useCallback(
      function (l, o) {
        o === void 0 && (o = {}), n.current && (typeof l == "number" ? e.navigate(l) : e.navigate(l, al({ fromRouteId: t }, o)));
      },
      [e, t]
    )
  );
}
const bs = {};
function H0(e, t, n) {
  !t && !bs[e] && (bs[e] = !0);
}
function Hf(e) {
  let { to: t, replace: n, state: r, relative: l } = e;
  dr() || H(!1);
  let { future: o, static: i } = E.useContext(on),
    { matches: a } = E.useContext(Dt),
    { pathname: u } = fr(),
    s = Ho(),
    c = Ao(t, Uo(a, o.v7_relativeSplatPath), u, l === "path"),
    h = JSON.stringify(c);
  return E.useEffect(() => s(JSON.parse(h), { replace: n, state: r, relative: l }), [s, h, l, n, r]), null;
}
function V0(e) {
  return j0(e.context);
}
function dn(e) {
  H(!1);
}
function W0(e) {
  let { basename: t = "/", children: n = null, location: r, navigationType: l = pe.Pop, navigator: o, static: i = !1, future: a } = e;
  dr() && H(!1);
  let u = t.replace(/^\/*/, "/"),
    s = E.useMemo(() => ({ basename: u, navigator: o, static: i, future: al({ v7_relativeSplatPath: !1 }, a) }), [u, a, o, i]);
  typeof r == "string" && (r = Tt(r));
  let { pathname: c = "/", search: h = "", hash: p = "", state: x = null, key: _ = "default" } = r,
    S = E.useMemo(() => {
      let N = cr(c, u);
      return N == null ? null : { location: { pathname: N, search: h, hash: p, state: x, key: _ }, navigationType: l };
    }, [u, c, h, p, x, _, l]);
  return S == null ? null : E.createElement(on.Provider, { value: s }, E.createElement(Bo.Provider, { children: n, value: S }));
}
new Promise(() => {});
function _a(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    E.Children.forEach(e, (r, l) => {
      if (!E.isValidElement(r)) return;
      let o = [...t, l];
      if (r.type === E.Fragment) {
        n.push.apply(n, _a(r.props.children, o));
        return;
      }
      r.type !== dn && H(!1), !r.props.index || !r.props.children || H(!1);
      let i = {
        id: r.props.id || o.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (i.children = _a(r.props.children, o)), n.push(i);
    }),
    n
  );
}
function Q0(e) {
  let t = { hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null };
  return (
    e.Component && Object.assign(t, { element: E.createElement(e.Component), Component: void 0 }),
    e.HydrateFallback && Object.assign(t, { hydrateFallbackElement: E.createElement(e.HydrateFallback), HydrateFallback: void 0 }),
    e.ErrorBoundary && Object.assign(t, { errorElement: E.createElement(e.ErrorBoundary), ErrorBoundary: void 0 }),
    t
  );
}
/**
 * React Router DOM v6.22.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ul() {
  return (
    (ul = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ul.apply(this, arguments)
  );
}
function K0(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    l,
    o;
  for (o = 0; o < r.length; o++) (l = r[o]), !(t.indexOf(l) >= 0) && (n[l] = e[l]);
  return n;
}
function Y0(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function G0(e, t) {
  return e.button === 0 && (!t || t === "_self") && !Y0(e);
}
const X0 = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "unstable_viewTransition"],
  Z0 = "6";
try {
  window.__reactRouterVersion = Z0;
} catch {}
function J0(e, t) {
  return h0({
    basename: t == null ? void 0 : t.basename,
    future: ul({}, t == null ? void 0 : t.future, { v7_prependBasename: !0 }),
    history: Im({ window: t == null ? void 0 : t.window }),
    hydrationData: (t == null ? void 0 : t.hydrationData) || q0(),
    routes: e,
    mapRouteProperties: Q0,
    window: t == null ? void 0 : t.window,
  }).initialize();
}
function q0() {
  var e;
  let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
  return t && t.errors && (t = ul({}, t, { errors: b0(t.errors) })), t;
}
function b0(e) {
  if (!e) return null;
  let t = Object.entries(e),
    n = {};
  for (let [r, l] of t)
    if (l && l.__type === "RouteErrorResponse") n[r] = new gu(l.status, l.statusText, l.data, l.internal === !0);
    else if (l && l.__type === "Error") {
      if (l.__subType) {
        let o = window[l.__subType];
        if (typeof o == "function")
          try {
            let i = new o(l.message);
            (i.stack = ""), (n[r] = i);
          } catch {}
      }
      if (n[r] == null) {
        let o = new Error(l.message);
        (o.stack = ""), (n[r] = o);
      }
    } else n[r] = l;
  return n;
}
const ev = E.createContext({ isTransitioning: !1 }),
  tv = E.createContext(new Map()),
  nv = "startTransition",
  ec = kp[nv],
  rv = "flushSync",
  tc = Fm[rv];
function lv(e) {
  ec ? ec(e) : e();
}
function Rr(e) {
  tc ? tc(e) : e();
}
class ov {
  constructor() {
    (this.status = "pending"),
      (this.promise = new Promise((t, n) => {
        (this.resolve = (r) => {
          this.status === "pending" && ((this.status = "resolved"), t(r));
        }),
          (this.reject = (r) => {
            this.status === "pending" && ((this.status = "rejected"), n(r));
          });
      }));
  }
}
function iv(e) {
  let { fallbackElement: t, router: n, future: r } = e,
    [l, o] = E.useState(n.state),
    [i, a] = E.useState(),
    [u, s] = E.useState({ isTransitioning: !1 }),
    [c, h] = E.useState(),
    [p, x] = E.useState(),
    [_, S] = E.useState(),
    N = E.useRef(new Map()),
    { v7_startTransition: f } = r || {},
    d = E.useCallback(
      (k) => {
        f ? lv(k) : k();
      },
      [f]
    ),
    m = E.useCallback(
      (k, j) => {
        let { deletedFetchers: M, unstable_flushSync: O, unstable_viewTransitionOpts: V } = j;
        M.forEach((me) => N.current.delete(me)),
          k.fetchers.forEach((me, Xe) => {
            me.data !== void 0 && N.current.set(Xe, me.data);
          });
        let fe = n.window == null || typeof n.window.document.startViewTransition != "function";
        if (!V || fe) {
          O ? Rr(() => o(k)) : d(() => o(k));
          return;
        }
        if (O) {
          Rr(() => {
            p && (c && c.resolve(), p.skipTransition()),
              s({ isTransitioning: !0, flushSync: !0, currentLocation: V.currentLocation, nextLocation: V.nextLocation });
          });
          let me = n.window.document.startViewTransition(() => {
            Rr(() => o(k));
          });
          me.finished.finally(() => {
            Rr(() => {
              h(void 0), x(void 0), a(void 0), s({ isTransitioning: !1 });
            });
          }),
            Rr(() => x(me));
          return;
        }
        p
          ? (c && c.resolve(), p.skipTransition(), S({ state: k, currentLocation: V.currentLocation, nextLocation: V.nextLocation }))
          : (a(k), s({ isTransitioning: !0, flushSync: !1, currentLocation: V.currentLocation, nextLocation: V.nextLocation }));
      },
      [n.window, p, c, N, d]
    );
  E.useLayoutEffect(() => n.subscribe(m), [n, m]),
    E.useEffect(() => {
      u.isTransitioning && !u.flushSync && h(new ov());
    }, [u]),
    E.useEffect(() => {
      if (c && i && n.window) {
        let k = i,
          j = c.promise,
          M = n.window.document.startViewTransition(async () => {
            d(() => o(k)), await j;
          });
        M.finished.finally(() => {
          h(void 0), x(void 0), a(void 0), s({ isTransitioning: !1 });
        }),
          x(M);
      }
    }, [d, i, c, n.window]),
    E.useEffect(() => {
      c && i && l.location.key === i.location.key && c.resolve();
    }, [c, p, l.location, i]),
    E.useEffect(() => {
      !u.isTransitioning &&
        _ &&
        (a(_.state), s({ isTransitioning: !0, flushSync: !1, currentLocation: _.currentLocation, nextLocation: _.nextLocation }), S(void 0));
    }, [u.isTransitioning, _]),
    E.useEffect(() => {}, []);
  let C = E.useMemo(
      () => ({
        createHref: n.createHref,
        encodeLocation: n.encodeLocation,
        go: (k) => n.navigate(k),
        push: (k, j, M) => n.navigate(k, { state: j, preventScrollReset: M == null ? void 0 : M.preventScrollReset }),
        replace: (k, j, M) => n.navigate(k, { replace: !0, state: j, preventScrollReset: M == null ? void 0 : M.preventScrollReset }),
      }),
      [n]
    ),
    L = n.basename || "/",
    g = E.useMemo(() => ({ router: n, navigator: C, static: !1, basename: L }), [n, C, L]);
  return E.createElement(
    E.Fragment,
    null,
    E.createElement(
      $o.Provider,
      { value: g },
      E.createElement(
        Ff.Provider,
        { value: l },
        E.createElement(
          tv.Provider,
          { value: N.current },
          E.createElement(
            ev.Provider,
            { value: u },
            E.createElement(
              W0,
              {
                basename: L,
                location: l.location,
                navigationType: l.historyAction,
                navigator: C,
                future: { v7_relativeSplatPath: n.future.v7_relativeSplatPath },
              },
              l.initialized || n.future.v7_partialHydration ? E.createElement(av, { routes: n.routes, future: n.future, state: l }) : t
            )
          )
        )
      )
    ),
    null
  );
}
function av(e) {
  let { routes: t, future: n, state: r } = e;
  return T0(t, void 0, r, n);
}
const uv = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u",
  sv = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  wu = E.forwardRef(function (t, n) {
    let { onClick: r, relative: l, reloadDocument: o, replace: i, state: a, target: u, to: s, preventScrollReset: c, unstable_viewTransition: h } = t,
      p = K0(t, X0),
      { basename: x } = E.useContext(on),
      _,
      S = !1;
    if (typeof s == "string" && sv.test(s) && ((_ = s), uv))
      try {
        let m = new URL(window.location.href),
          C = s.startsWith("//") ? new URL(m.protocol + s) : new URL(s),
          L = cr(C.pathname, x);
        C.origin === m.origin && L != null ? (s = L + C.search + C.hash) : (S = !0);
      } catch {}
    let N = N0(s, { relative: l }),
      f = cv(s, { replace: i, state: a, target: u, preventScrollReset: c, relative: l, unstable_viewTransition: h });
    function d(m) {
      r && r(m), m.defaultPrevented || f(m);
    }
    return E.createElement("a", ul({}, p, { href: _ || N, onClick: S || o ? r : d, ref: n, target: u }));
  });
var nc;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(nc || (nc = {}));
var rc;
(function (e) {
  (e.UseFetcher = "useFetcher"), (e.UseFetchers = "useFetchers"), (e.UseScrollRestoration = "useScrollRestoration");
})(rc || (rc = {}));
function cv(e, t) {
  let { target: n, replace: r, state: l, preventScrollReset: o, relative: i, unstable_viewTransition: a } = t === void 0 ? {} : t,
    u = Ho(),
    s = fr(),
    c = Af(e, { relative: i });
  return E.useCallback(
    (h) => {
      if (G0(h, n)) {
        h.preventDefault();
        let p = r !== void 0 ? r : Cn(s) === Cn(c);
        u(e, { replace: p, state: l, preventScrollReset: o, relative: i, unstable_viewTransition: a });
      }
    },
    [s, u, c, r, l, n, e, o, i, a]
  );
}
const _o = "USER_KEY",
  Vf = (e) => {
    const t = sessionStorage.getItem(e);
    return t ? JSON.parse(t) : null;
  },
  dv = (e, t) => {
    const n = typeof t == "string" ? t : JSON.stringify(t);
    sessionStorage.setItem(e, n);
  },
  fv = (e) => {
    sessionStorage.removeItem(e);
  },
  Wf = "https://rimac-front-end-challenge.netlify.app/api",
  pv = `${Wf}/user.json`,
  hv = `${Wf}/plans.json`,
  mv = async () => (await fetch(hv)).json(),
  vv = (e, t) => t.filter((n) => n.age >= e).map((n) => ({ ...n, descount: n.price * 0.05 })),
  gv = async (e) => {
    try {
      const t = await mv();
      return vv(e, t.list);
    } catch {
      throw new Error("Error al obtener los planes");
    }
  },
  yv = (e) => new Date().getFullYear() - new Date(e).getFullYear(),
  wv = () => {
    window.scrollTo(0, 0);
  },
  Sv = (e, t) => {
    const n = yv(e.birthDay);
    return { ...e, ...t, age: n };
  },
  _v = async () => (await fetch(pv)).json(),
  xv = async (e) => {
    try {
      const t = await _v(),
        n = Sv(t, e);
      return dv(_o, n), n;
    } catch {
      throw new Error("Error al obtener el usuario");
    }
  },
  ml = E.createContext({
    user: null,
    handleLogin: async (e) => {},
    isLoading: !1,
    userError: "",
    handleGetPlans: async () => {},
    plans: [],
    plansLoading: !1,
    plansError: "",
    typePlan: 0,
    handleSetTypePlan: (e) => {},
    selectedPlan: null,
    handleSetSelectPlan: (e) => {},
    logout: () => {},
  }),
  Ev = ({ children: e }) => {
    const [t, n] = E.useState(null),
      [r, l] = E.useState(!1),
      [o, i] = E.useState(""),
      [a, u] = E.useState([]),
      [s, c] = E.useState(""),
      [h, p] = E.useState(!1),
      [x, _] = E.useState(0),
      [S, N] = E.useState(null);
    E.useEffect(() => {
      const k = Vf(_o);
      return (
        !t && k && n(k),
        () => {
          n(null);
        }
      );
    }, []);
    const g = {
      user: t,
      handleLogin: async (k) => {
        l(!0),
          await xv(k)
            .then((j) => n(j))
            .catch((j) => i(j)),
          l(!1);
      },
      isLoading: r,
      userError: o,
      handleGetPlans: async () => {
        t != null &&
          t.age &&
          (p(!0),
          await gv(t == null ? void 0 : t.age)
            .then((k) => u(k))
            .catch((k) => c(k)));
      },
      plans: a,
      plansError: s,
      plansLoading: h,
      selectedPlan: S,
      handleSetSelectPlan: (k) => {
        N(k);
      },
      typePlan: x,
      handleSetTypePlan: (k) => {
        _(() => k);
      },
      logout: () => {
        n(null), fv(_o), N(null), _(0);
      },
    };
    return v.jsx(ml.Provider, { value: g, children: e });
  },
  Cv =
    "data:image/svg+xml,%3csvg%20width='74'%20height='36'%20viewBox='0%200%2074%2036'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_9_8237)'%3e%3cpath%20d='M8.6779%2024.1317H2.69584L0.012207%2035.8024H3.06423L4.07425%2031.4112H5.65028L8.36806%2035.8024H11.7104L8.66326%2031.1551C11.3664%2030.4525%2012.2862%2029.0034%2012.4569%2027.4543C12.6277%2025.9052%2011.7641%2024.1293%208.67546%2024.1293L8.6779%2024.1317ZM9.4098%2027.6227C9.28294%2028.7644%208.21193%2029.4377%206.72617%2029.4377H4.53047L5.34532%2025.9174H7.66056C8.88771%2025.9174%209.52691%2026.5176%209.40736%2027.6227H9.4098ZM17.2167%2024.1342H20.2883L19.5735%2027.2323L17.5973%2035.7975H14.4916L17.2167%2024.1342ZM43.1894%2023.4877L43.2114%2035.7951H40.2838L40.3155%2027.0128L34.0968%2035.7951H31.2595L28.6856%2026.964L24.565%2035.7951H21.1617L27.2486%2022.9851C27.6902%2022.1581%2028.1172%2021.7898%2028.9564%2021.7849C29.5127%2021.7849%2030.1177%2022.1045%2030.3934%2023.0754L33.0502%2032.6847L39.9617%2022.8632C40.5497%2022.0313%2041.045%2021.7776%2041.7281%2021.7947C42.46%2021.8142%2043.1919%2022.2948%2043.1919%2023.4877H43.1894ZM63.8998%2030.233C63.6924%2032.1089%2065.1196%2033.5873%2067.6178%2033.6239C68.8455%2033.6581%2070.0706%2033.4933%2071.2456%2033.136L70.6527%2035.6999C69.6419%2035.8874%2068.6166%2035.9854%2067.5885%2035.9927C62.675%2035.9927%2060.3915%2033.5531%2060.7575%2030.1744C61.1722%2026.359%2064.5389%2023.7926%2069.8428%2023.7926C70.9691%2023.8094%2072.0907%2023.9419%2073.19%2024.1878L72.6533%2026.5371C71.6149%2026.2871%2070.5497%2026.1658%2069.4817%2026.176C66.3882%2026.1516%2064.1779%2027.6959%2063.9022%2030.233H63.8998ZM51.2306%2031.4356L54.0874%2027.4031L54.9803%2031.4356H51.2306ZM56.0245%2035.7975H58.9911L56.1514%2025.6369C55.7805%2024.4049%2055.0511%2024.0805%2054.2923%2024.1464C53.8166%2024.1878%2053.3165%2024.3903%2052.8139%2025.11L45.4461%2035.7999H48.4689L49.9668%2033.4092H55.4585L56.0294%2035.8073L56.0245%2035.7975ZM61.243%209.69464C60.6208%209.90687%2033.1673%2017.5011%2032.7647%2017.5962C32.492%2017.6812%2032.2017%2017.6925%2031.9232%2017.6291C31.6448%2017.5657%2031.388%2017.4298%2031.1789%2017.2352C30.447%2016.5692%2030.7471%2015.6446%2030.9545%2015.1762C31.1985%2014.6249%2036.4852%203.50313%2036.4852%203.50313L15.3797%2012.3513C14.4989%2012.6587%2014.1989%2011.9341%2014.1989%2011.9341C14.1989%2011.9341%2013.8305%2011.1315%2014.7917%2010.6778L37.9685%200.26833C38.3491%200.0975639%2039.0639%20-0.23909%2039.6202%200.26833C40.1764%200.77575%2039.9593%201.54176%2039.7885%202.01503C39.7056%202.23946%2035.9095%2012.7831%2035.9095%2012.7831C35.9095%2012.7831%2058.5032%203.08842%2059.2351%202.81275C60.6672%202.26874%2061.97%202.59075%2062.8946%203.66902C63.307%204.16244%2063.5944%204.74799%2063.7324%205.37606C63.8705%206.00413%2063.8551%206.65622%2063.6875%207.27707C63.3679%208.36754%2062.6628%209.20185%2061.2478%209.68488L61.243%209.69464Z'%20fill='%23F7052D'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_9_8237'%3e%3crect%20width='73.19'%20height='36'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",
  Qf = () =>
    v.jsx("header", {
      className: "header",
      children: v.jsx("nav", {
        className: "header__nav",
        children: v.jsxs("ul", {
          className: "header__nav__ul",
          children: [
            v.jsx("li", { children: v.jsx(wu, { to: "/", children: v.jsx("img", { src: Cv, alt: "logo" }) }) }),
            v.jsxs("li", {
              className: "header__nav__info",
              children: [
                v.jsx("p", { className: "header__nav__info__description", children: "¡Compra por este medio!" }),
                v.jsxs("div", {
                  className: "center-flex",
                  children: [
                    v.jsx("i", { className: "icon__phone" }),
                    v.jsx("a", { className: "header__nav__number-phone", href: "tel:014116001", children: "(01) 411 6001" }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
    }),
  kv = "/",
  lc = () => {
    const { user: e } = E.useContext(ml);
    return e ? v.jsxs(v.Fragment, { children: [v.jsx(Qf, {}), v.jsx(V0, {})] }) : v.jsx(Hf, { to: kv, replace: !0 });
  },
  Pv = ({ responsive: e }) =>
    e != null && e.length
      ? v.jsx(v.Fragment, { children: e.map(({ src: t, minWidth: n }, r) => v.jsx("source", { media: `(min-width: ${n})`, srcSet: t }, `media-${r}`)) })
      : v.jsx(v.Fragment, {}),
  sl = ({ responsive: e, ...t }) => v.jsxs("picture", { children: [v.jsx(Pv, { responsive: e }), v.jsx("img", { ...t })] }),
  Nv = "_icon__phone_droma_5",
  Rv = "_hidden_droma_52",
  Lv = "_container_droma_80",
  jv = "_main_droma_91",
  Tv = {
    icon__phone: Nv,
    "icon-arrow-down": "_icon-arrow-down_droma_12",
    "icon-arrow-left": "_icon-arrow-left_droma_19",
    "icon-circle-check": "_icon-circle-check_droma_26",
    "icon-circle-uncheck": "_icon-circle-uncheck_droma_33",
    "icon-family": "_icon-family_droma_40",
    "center-flex": "_center-flex_droma_47",
    hidden: Rv,
    "mt-1": "_mt-1_droma_56",
    "mt-2": "_mt-2_droma_60",
    "mt-3": "_mt-3_droma_64",
    "mb-1": "_mb-1_droma_68",
    "mb-2": "_mb-2_droma_72",
    "mb-3": "_mb-3_droma_76",
    container: Lv,
    main: jv,
  },
  Dv = () =>
    v.jsx("footer", {
      className: "footer",
      children: v.jsxs("section", {
        className: "footer__section",
        children: [
          v.jsx("div", {
            children: v.jsx(sl, {
              src: "/images/logo-mobile.svg",
              alt: "Logo white",
              width: "86",
              height: "43",
              className: "footer__logo",
              responsive: [{ minWidth: "768px", src: "/images/logo-white.svg" }],
            }),
          }),
          v.jsx("p", { className: "footer__text", children: "© 2023 RIMAC Seguros y Reaseguros." }),
        ],
      }),
    }),
  Mv = ({ children: e, className: t }) =>
    v.jsxs(v.Fragment, { children: [v.jsxs("main", { className: `${Tv.main} ${t}`, children: [v.jsx(Qf, {}), e] }), v.jsx(Dv, {})] }),
  zv = ({ className: e, show: t = !0 }) => (t ? v.jsx("span", { className: `loader ${e}` }) : v.jsx(v.Fragment, {})),
  Kf = ({ children: e, isLoading: t, ...n }) =>
    v.jsxs("button", {
      className: "button",
      ...n,
      children: [v.jsx("span", { className: `button__text ${t ? "hidden" : ""}`, children: e }), v.jsx(zv, { className: t ? "" : "hidden" })],
    }),
  oc = (e) => {
    const { id: t, text: n, name: r, onChange: l, error: o, classContainer: i = "", checked: a = !1 } = e,
      [u, s] = E.useState(!1);
    E.useEffect(() => {
      a && s(a);
    }, []);
    const c = (p) => {
        s(!u), l && l(p);
      },
      h = o ? "checkbox__label-text--error" : "";
    return v.jsxs("div", {
      className: `checkbox__container ${i}`,
      children: [
        v.jsxs("div", {
          className: "checkbox__group",
          children: [v.jsx("input", { type: "checkbox", checked: u, id: t, name: r, onChange: c }), v.jsx("label", { htmlFor: t })],
        }),
        v.jsx("label", { htmlFor: t, className: `checkbox__label-text ${h}`, children: n }),
      ],
    });
  },
  Yf = (e) => {
    const {
        classContainer: t = "",
        classLabel: n = "",
        classInput: r = "",
        classError: l = "",
        type: o = "text",
        id: i,
        label: a,
        name: u,
        error: s = !1,
        textError: c = "",
        inputOptions: h = {},
        onFocus: p,
        onBlur: x,
        onChange: _,
      } = e,
      [S, N] = E.useState(""),
      [f, d] = E.useState(!1),
      m = () => {
        d(!0), p && p();
      },
      C = () => {
        d(!1), x && x();
      },
      L = ({ target: M }) => {
        const { value: O } = M;
        N(O), _ && _(M);
      },
      g = s ? "input__container--error" : "",
      k = s ? "" : "input__text-error--hidden",
      j = f || S ? "input__label--active" : "";
    return v.jsxs(v.Fragment, {
      children: [
        v.jsxs("fieldset", {
          className: `input__container ${t} ${g}`,
          children: [
            v.jsx("label", { htmlFor: i, className: `input__label ${j} ${n}`, children: a }),
            v.jsx("input", { type: o, id: i, className: `input__field ${r}`, value: S, name: u, onFocus: m, onBlur: C, onChange: L, ...h }),
          ],
        }),
        v.jsx("span", { className: `input__text-error ${k} ${l}`, children: c }),
      ],
    });
  },
  Ov = (e) => {
    const { options: t, onChange: n, error: r, classContainer: l = "", classSelect: o = "", defaultValue: i = "" } = e,
      [a, u] = E.useState("");
    E.useEffect(() => {
      i && u(i);
    }, []);
    const s = ({ target: h }) => {
        const { value: p } = h;
        u(p), n && n(p);
      },
      c = r ? "select__container--error" : "";
    return v.jsxs("div", {
      className: `select__container ${l} ${c}`,
      children: [
        v.jsx("select", {
          name: "document",
          onChange: s,
          className: `select__tag ${o}`,
          value: a,
          children: t.map((h) => v.jsx("option", { value: h.value, children: h.text }, h.value)),
        }),
        v.jsx("i", { className: "icon-arrow-down" }),
      ],
    });
  },
  Fv = "Nro. de documento",
  Iv = (e) => {
    const {
        inputName: t,
        textError: n,
        error: r,
        listOptions: l,
        onSelectChange: o,
        onInputChange: i,
        defaultSelectValue: a,
        inputOptions: u,
        inputLabelText: s = Fv,
      } = e,
      c = (x) => {
        o && o(x);
      },
      h = (x) => {
        i && i(x);
      },
      p = r ? "" : "select__text-error--hidden";
    return v.jsxs(v.Fragment, {
      children: [
        v.jsxs("fieldset", {
          className: "input-document",
          children: [
            v.jsx(Ov, { options: l, classContainer: "input-document__select", error: r, onChange: c, defaultValue: a }),
            v.jsx(Yf, { id: "phone", name: t, label: s, type: "tel", error: r, classContainer: "input-document__input", onChange: h, inputOptions: u }),
          ],
        }),
        v.jsx("span", { className: `select__text-error ${p}`, children: n }),
      ],
    });
  },
  Uv = (e) => /^[0-9]{9}$/.test(e),
  Av = (e) => /^[0-9]{8}$/.test(e),
  $v = (e) => /^[A-Z0-9]{9}$/.test(e),
  Bv = (e, t) => (t === "dni" ? Av(e) : $v(e)),
  Hv = (e) => Uv(e),
  Vv = (e) => {
    const { document: t, typeDocument: n, phone: r, commercial: l, privacity: o } = e;
    let i = null;
    return (
      Bv(t, n) || (i = { document: { error: !0, mesagge: "Ingrese un documento válido" } }),
      Hv(r) || (i = { ...i, phone: { error: !0, mesagge: "Ingrese un número válido" } }),
      l || (i = { ...i, commercial: { error: !0, mesagge: "" } }),
      o || (i = { ...i, privacity: { error: !0, mesagge: "" } }),
      i
    );
  },
  ic = [
    { text: "DNI", value: "dni" },
    { text: "CE", value: "ce" },
  ],
  Wv = 9,
  Qv = { dni: 8, ce: 12 },
  ac = ({ onSubmit: e, isLoading: t }) => {
    var f, d, m, C, L, g, k, j;
    const [n, r] = E.useState(""),
      [l, o] = E.useState(""),
      [i, a] = E.useState(ic[0].value),
      [u, s] = E.useState(!1),
      [c, h] = E.useState(!1),
      [p, x] = E.useState(null),
      _ = (M) => {
        const { value: O, name: V } = M;
        V === "phone" ? r(O) : o(O);
      },
      S = ({ target: M }) => {
        const { checked: O, name: V } = M;
        V === "privacity" ? s(O) : h(O);
      },
      N = async (M) => {
        M.preventDefault();
        const O = { phone: n, document: l, typeDocument: i, privacity: u, commercial: c },
          V = Vv(O);
        x(() => V), !(V && Object.entries(V).some(([, fe]) => fe)) && e(O);
      };
    return v.jsxs("form", {
      onSubmit: N,
      className: "form-login mt-2",
      children: [
        v.jsx(Iv, {
          defaultSelectValue: l,
          onInputChange: _,
          inputName: "document",
          onSelectChange: a,
          listOptions: ic,
          error: ((f = p == null ? void 0 : p.document) == null ? void 0 : f.error) || ((d = p == null ? void 0 : p.typeDocument) == null ? void 0 : d.error),
          textError:
            ((m = p == null ? void 0 : p.document) == null ? void 0 : m.mesagge) || ((C = p == null ? void 0 : p.typeDocument) == null ? void 0 : C.mesagge),
          inputOptions: { maxLength: Qv[i] },
        }),
        v.jsx(Yf, {
          id: "phone",
          name: "phone",
          label: "Celular",
          type: "tel",
          onChange: _,
          error: (L = p == null ? void 0 : p.phone) == null ? void 0 : L.error,
          textError: (g = p == null ? void 0 : p.phone) == null ? void 0 : g.mesagge,
          classContainer: "mt-1",
          inputOptions: { maxLength: Wv },
        }),
        v.jsx(oc, {
          name: "privacity",
          classContainer: "mt-1",
          id: "privacity",
          text: "Acepto lo Política de Privacidad",
          onChange: S,
          error: (k = p == null ? void 0 : p.privacity) == null ? void 0 : k.error,
        }),
        v.jsx(oc, {
          name: "commercial",
          classContainer: "mt-1",
          id: "commercial",
          text: "Acepto la Política Comunicaciones Comerciales",
          onChange: S,
          error: (j = p == null ? void 0 : p.commercial) == null ? void 0 : j.error,
        }),
        v.jsx("a", {
          href: "https://www.rimac.com/politica-privacidad",
          className: "form-login__link mt-1",
          target: "_blank",
          children: "Aplican Términos y Condiciones.",
        }),
        v.jsx(Kf, { type: "submit", isLoading: t, className: "form-login__button form-login__button--primary mt-1", children: "Cotiza aquí" }),
      ],
    });
  },
  Kv = () => {
    const { handleLogin: e, isLoading: t } = E.useContext(ml),
      n = Ho(),
      [r, l] = E.useState(0);
    console.log("width", r),
      E.useEffect(() => {
        const a = () => {
          const u = document.body.clientWidth;
          console.log(`updateWidth con ${u}`), l(u);
        };
        a(), window.addEventListener("resize", a);
      }, []);
    const o = async (a) => {
        await e(a).then(i);
      },
      i = () => {
        n("/planes", { replace: !0 });
      };
    return v.jsx(Mv, {
      children:
        r > 768
          ? v.jsxs("section", {
              className: "container login__grid",
              children: [
                v.jsx("aside", {
                  className: "login__section-left",
                  children: v.jsx(sl, { src: ".//images/imagen_login.png", width: "540", alt: "Login", className: "image" }),
                }),
                v.jsxs("section", {
                  className: "login__section-right",
                  children: [
                    v.jsx("h1", { className: "login__sub-title-gradient", children: "Seguro Salud Flexible" }),
                    v.jsx("h2", { className: "title mt-1", children: "Creado para ti y tu familia" }),
                    v.jsx("p", {
                      className: "login__text mt-1",
                      children: "Tú eliges cuánto Opagar. Ingresa tus datos, cotiza y recibe nuestra asesoría. 100% online.",
                    }),
                    v.jsx(ac, { isLoading: t, onSubmit: o }),
                  ],
                }),
              ],
            })
          : v.jsxs("section", {
              className: "login__grid-mobile",
              children: [
                v.jsxs("section", {
                  className: "login__grid-mobile__row",
                  children: [
                    v.jsxs("section", {
                      className: "login__grid-mobile__section-left",
                      children: [
                        v.jsx("h1", { className: "login__sub-title-gradient", children: "Seguro Salud Flexible" }),
                        v.jsx("h2", { className: "title mt-1", children: "Creado para ti y tu familia" }),
                      ],
                    }),
                    v.jsx("aside", {
                      className: "login__grid-mobile__section-right",
                      children: v.jsx(sl, { src: ".//images/imagen_login.png", width: "540", alt: "Login", className: "image" }),
                    }),
                  ],
                }),
                v.jsxs("section", {
                  className: "login__grid-mobile__row2",
                  children: [
                    v.jsx("p", {
                      className: "login__text mt-1",
                      children: "Tú eliges cuánto Opagar. Ingresa tus datos, cotiza y recibe nuestra asesoría. 100% online.",
                    }),
                    v.jsx(ac, { isLoading: t, onSubmit: o }),
                  ],
                }),
              ],
            }),
    });
  },
  uc = ({ active: e, image: t, text: n, title: r, onSelect: l, id: o = 0 }) => {
    const i = e ? "icon-circle-check" : "icon-circle-uncheck",
      a = () => {
        l && l(o);
      };
    return v.jsxs("div", {
      className: `card ${e ? "card--active" : ""}`,
      onClick: a,
      children: [
        v.jsx("div", { className: "card__header", children: v.jsx("i", { className: i }) }),
        v.jsxs("div", {
          className: "card__body",
          children: [
            v.jsx("div", { children: v.jsx(sl, { className: "card__body__image", src: t, alt: "Shield for me", width: "40", height: "48" }) }),
            v.jsx("p", { className: "card__body__title", children: r }),
            v.jsx("p", { className: "card__body__text", children: n }),
          ],
        }),
      ],
    });
  },
  Gf = () => {
    const { pathname: e } = fr(),
      t = e === "/plans";
    return v.jsx("nav", {
      className: "header-steps",
      children: v.jsxs("ul", {
        children: [
          v.jsxs("li", { className: `${t ? "" : "disabled"}`, children: [v.jsx("span", { children: "1" }), " Planes y coberturas"] }),
          v.jsx("li", { className: "dashed" }),
          v.jsxs("li", { className: `${t ? "disabled" : ""}`, children: [v.jsx("span", { children: "2" }), " Resumen"] }),
        ],
      }),
    });
  },
  Dn = { forMe: 1, forOthers: 2 },
  Yv = ({ showDescount: e, descount: t, price: n }) => {
    const r = () => (e ? n - t : n);
    return v.jsxs("div", {
      className: "card-plan__descount mt-2",
      children: [
        v.jsx("p", { className: "card-plan__descount__title", children: "Costo del plan" }),
        e && v.jsxs("p", { className: "card-plan__descount__descount", children: ["$", n, " antes"] }),
        v.jsxs("p", { className: "card-plan__header__pricing__price", children: ["$", r(), " al mes"] }),
      ],
    });
  },
  Gv = (e) => {
    const { title: t, listDescription: n, descount: r, image: l, price: o, showDescount: i, onClick: a } = e;
    return v.jsxs("div", {
      className: "card-plan",
      children: [
        v.jsxs("div", {
          className: "card-plan__header",
          children: [
            v.jsxs("div", {
              className: "card-plan__header__container",
              children: [
                v.jsx("p", { className: "card-plan__header__title", children: t }),
                v.jsx("div", { children: v.jsx(sl, { className: "card-plan__header__image", src: l, alt: "Shield for me", width: "48", height: "48" }) }),
              ],
            }),
            v.jsx(Yv, { descount: r, showDescount: i, price: o }),
          ],
        }),
        v.jsxs("div", {
          className: "card-plan__content",
          children: [
            v.jsx("div", {
              className: "card-plan__body",
              children: v.jsx("ul", {
                className: "card-plan__body__list",
                children: n.map((u, s) => v.jsx("li", { className: "card-plan__body__list__item", children: u }, s)),
              }),
            }),
            v.jsx("div", {
              className: "card-plan__footer",
              children: v.jsx(Kf, { className: "button button--secondary button--small", onClick: a, children: "Seleccionar Plan" }),
            }),
          ],
        }),
      ],
    });
  },
  Xv = "/images/icon-plan-house.svg",
  Zv = "/images/icon-plan-house-hospital.svg",
  Jv = "Plan en Casa y Clínica",
  qv = ({ show: e, plans: t, onSelect: n, showDescount: r }) => {
    if (!e) return v.jsx(v.Fragment, {});
    const l = (o) => {
      n(o);
    };
    return t.map((o, i) =>
      v.jsx(
        Gv,
        {
          image: Jv === o.name ? Zv : Xv,
          title: o.name,
          price: o.price,
          listDescription: o.description,
          descount: o.descount,
          onClick: () => l(o),
          showDescount: r,
        },
        i
      )
    );
  },
  bv = () => {
    const { handleGetPlans: e, plans: t, typePlan: n, handleSetTypePlan: r, handleSetSelectPlan: l, logout: o } = E.useContext(ml),
      i = Ho();
    E.useEffect(() => {
      wv(), t.length || e();
    }, []);
    const a = (h) => {
        h.preventDefault(), o(), i("/", { replace: !0 });
      },
      u = (h) => {
        r(h);
      },
      s = (h) => {
        l(h), c();
      },
      c = () => {
        i("/resumen");
      };
    return v.jsxs("main", {
      className: "plans",
      children: [
        v.jsx(Gf, {}),
        v.jsxs("section", {
          className: "container plans__grid ",
          children: [
            v.jsx("aside", {
              className: "plans__grid__section-1",
              children: v.jsxs(wu, { to: "/", className: "link", onClick: a, children: [v.jsx("i", { className: "icon-arrow-left" }), "Volver"] }),
            }),
            v.jsxs("section", {
              className: "plans__grid__section-2",
              children: [
                v.jsx("h1", { className: "title", children: "Rocío ¿Para quién deseas cotizar?" }),
                v.jsx("p", { className: "description mt-1", children: "Selecciona la opción que se ajuste más a tus necesidades." }),
              ],
            }),
            v.jsx("section", {
              className: "plans__grid__section-3",
              children: v.jsxs("div", {
                className: "plans__grid__section-3__wrapper-cards ",
                children: [
                  v.jsx(uc, {
                    image: "/images/icon-shield-for-me.svg",
                    title: "Para mi",
                    text: "Cotiza tu seguro de salud y agrega familiares si así lo deseas.",
                    active: n === Dn.forMe,
                    id: Dn.forMe,
                    onSelect: u,
                  }),
                  v.jsx(uc, {
                    image: "/images/icon-shield-for-others.svg",
                    title: "Para alguien más",
                    text: "Realiza una cotización para uno de tus familiares o cualquier persona.",
                    active: n === Dn.forOthers,
                    id: Dn.forOthers,
                    onSelect: u,
                  }),
                ],
              }),
            }),
            v.jsx("section", {
              className: "plans__grid__section-4",
              children: v.jsx(qv, { plans: t, onSelect: s, show: !!n, showDescount: n === Dn.forOthers }),
            }),
          ],
        }),
      ],
    });
  },
  eg = () => {
    const { user: e, selectedPlan: t, typePlan: n } = E.useContext(ml),
      { name: r, document: l, phone: o, lastName: i, typeDocument: a } = e,
      u = () => (t ? (n === Dn.forOthers ? t.price - (t == null ? void 0 : t.descount) : t.price) : 0);
    return v.jsxs("div", {
      className: "card-summary",
      children: [
        v.jsxs("div", {
          className: "card-summary__header",
          children: [
            v.jsx("h2", { className: "card-summary__header__title", children: "Precios calculados para:" }),
            v.jsxs("h3", { className: "card-summary__header__description", children: [v.jsx("i", { className: "icon-family" }), " ", r, " ", i] }),
          ],
        }),
        v.jsxs("div", {
          className: "card-summary__body",
          children: [
            v.jsxs("div", {
              className: "card-summary__body__col",
              children: [
                v.jsx("p", { className: "card-summary__body__col__title", children: "Responsable de pago" }),
                v.jsxs("p", { className: "card-summary__body__col__description", children: [a == null ? void 0 : a.toLocaleUpperCase(), ": ", l] }),
                v.jsxs("p", { className: "card-summary__body__col__description", children: ["Celular: ", o] }),
              ],
            }),
            v.jsxs("div", {
              className: "card-summary__body__col",
              children: [
                v.jsx("p", { className: "card-summary__body__col__title", children: "Plan elegido" }),
                v.jsx("p", { className: "card-summary__body__col__description", children: "Plan en Casa y Clínica" }),
                v.jsxs("p", { className: "card-summary__body__col__description", children: ["Costo del Plan: $", u(), " al mes"] }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  tg = () =>
    v.jsxs("main", {
      className: "summary",
      children: [
        v.jsx(Gf, {}),
        v.jsxs("section", {
          className: "container summary__grid ",
          children: [
            v.jsx("aside", {
              className: "summary__grid__section-1",
              children: v.jsxs(wu, { to: "/plans", className: "link", children: [v.jsx("i", { className: "icon-arrow-left" }), "Volver"] }),
            }),
            v.jsx("aside", { className: "summary__grid__section-2", children: v.jsx("h1", { className: "title", children: "Resumen del seguro" }) }),
            v.jsx("section", { className: "summary__grid__section-3", children: v.jsx(eg, {}) }),
          ],
        }),
      ],
    }),
  ng = ({ component: e, fallbackPath: t = "/planes" }) => (Vf(_o) ? v.jsx(Hf, { to: t, replace: !0 }) : v.jsx(e, {})),
  rg = J0(
    _a(
      v.jsxs(v.Fragment, {
        children: [
          v.jsx(dn, { path: "/", element: v.jsx(ng, { component: Kv }) }),
          v.jsx(dn, { path: "/planes", element: v.jsx(lc, {}), children: v.jsx(dn, { index: !0, element: v.jsx(bv, {}) }) }),
          v.jsx(dn, { path: "/resumen", element: v.jsx(lc, {}), children: v.jsx(dn, { index: !0, element: v.jsx(tg, {}) }) }),
          v.jsx(dn, { path: "*", element: v.jsx("div", { children: "404" }) }),
        ],
      })
    )
  );
Ci.createRoot(document.getElementById("root")).render(v.jsx(Sc.StrictMode, { children: v.jsx(Ev, { children: v.jsx(iv, { router: rg }) }) }));
