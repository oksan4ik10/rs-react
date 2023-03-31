function yd(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const l in r)
        if (l !== "default" && !(l in e)) {
          const i = Object.getOwnPropertyDescriptor(r, l);
          i &&
            Object.defineProperty(
              e,
              l,
              i.get ? i : { enumerable: !0, get: () => r[l] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const i of l)
      if (i.type === "childList")
        for (const o of i.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const i = {};
    return (
      l.integrity && (i.integrity = l.integrity),
      l.referrerPolicy && (i.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : l.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const i = n(l);
    fetch(l.href, i);
  }
})();
function vd(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var xr = {},
  wd = {
    get exports() {
      return xr;
    },
    set exports(e) {
      xr = e;
    },
  },
  li = {},
  L = {},
  kd = {
    get exports() {
      return L;
    },
    set exports(e) {
      L = e;
    },
  },
  $ = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Hr = Symbol.for("react.element"),
  Sd = Symbol.for("react.portal"),
  Ed = Symbol.for("react.fragment"),
  xd = Symbol.for("react.strict_mode"),
  Cd = Symbol.for("react.profiler"),
  _d = Symbol.for("react.provider"),
  Nd = Symbol.for("react.context"),
  Pd = Symbol.for("react.forward_ref"),
  Ld = Symbol.for("react.suspense"),
  Td = Symbol.for("react.memo"),
  Rd = Symbol.for("react.lazy"),
  ds = Symbol.iterator;
function Dd(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (ds && e[ds]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Bu = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  ju = Object.assign,
  Uu = {};
function Jn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Uu),
    (this.updater = n || Bu);
}
Jn.prototype.isReactComponent = {};
Jn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Jn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Vu() {}
Vu.prototype = Jn.prototype;
function la(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Uu),
    (this.updater = n || Bu);
}
var ia = (la.prototype = new Vu());
ia.constructor = la;
ju(ia, Jn.prototype);
ia.isPureReactComponent = !0;
var hs = Array.isArray,
  Hu = Object.prototype.hasOwnProperty,
  oa = { current: null },
  $u = { key: !0, ref: !0, __self: !0, __source: !0 };
function Wu(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      Hu.call(t, r) && !$u.hasOwnProperty(r) && (l[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) l.children = n;
  else if (1 < a) {
    for (var s = Array(a), c = 0; c < a; c++) s[c] = arguments[c + 2];
    l.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) l[r] === void 0 && (l[r] = a[r]);
  return {
    $$typeof: Hr,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: oa.current,
  };
}
function Fd(e, t) {
  return {
    $$typeof: Hr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function aa(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Hr;
}
function Od(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var ps = /\/+/g;
function xi(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Od("" + e.key)
    : t.toString(36);
}
function pl(e, t, n, r, l) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (i) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Hr:
          case Sd:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (l = l(o)),
      (e = r === "" ? "." + xi(o, 0) : r),
      hs(l)
        ? ((n = ""),
          e != null && (n = e.replace(ps, "$&/") + "/"),
          pl(l, t, n, "", function (c) {
            return c;
          }))
        : l != null &&
          (aa(l) &&
            (l = Fd(
              l,
              n +
                (!l.key || (o && o.key === l.key)
                  ? ""
                  : ("" + l.key).replace(ps, "$&/") + "/") +
                e
            )),
          t.push(l)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), hs(e)))
    for (var a = 0; a < e.length; a++) {
      i = e[a];
      var s = r + xi(i, a);
      o += pl(i, t, n, s, l);
    }
  else if (((s = Dd(e)), typeof s == "function"))
    for (e = s.call(e), a = 0; !(i = e.next()).done; )
      (i = i.value), (s = r + xi(i, a++)), (o += pl(i, t, n, s, l));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return o;
}
function Zr(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    pl(e, r, "", "", function (i) {
      return t.call(n, i, l++);
    }),
    r
  );
}
function Ad(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Fe = { current: null },
  ml = { transition: null },
  zd = {
    ReactCurrentDispatcher: Fe,
    ReactCurrentBatchConfig: ml,
    ReactCurrentOwner: oa,
  };
$.Children = {
  map: Zr,
  forEach: function (e, t, n) {
    Zr(
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
      Zr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Zr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!aa(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
$.Component = Jn;
$.Fragment = Ed;
$.Profiler = Cd;
$.PureComponent = la;
$.StrictMode = xd;
$.Suspense = Ld;
$.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = zd;
$.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = ju({}, e.props),
    l = e.key,
    i = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (o = oa.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (s in t)
      Hu.call(t, s) &&
        !$u.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && a !== void 0 ? a[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    a = Array(s);
    for (var c = 0; c < s; c++) a[c] = arguments[c + 2];
    r.children = a;
  }
  return { $$typeof: Hr, type: e.type, key: l, ref: i, props: r, _owner: o };
};
$.createContext = function (e) {
  return (
    (e = {
      $$typeof: Nd,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: _d, _context: e }),
    (e.Consumer = e)
  );
};
$.createElement = Wu;
$.createFactory = function (e) {
  var t = Wu.bind(null, e);
  return (t.type = e), t;
};
$.createRef = function () {
  return { current: null };
};
$.forwardRef = function (e) {
  return { $$typeof: Pd, render: e };
};
$.isValidElement = aa;
$.lazy = function (e) {
  return { $$typeof: Rd, _payload: { _status: -1, _result: e }, _init: Ad };
};
$.memo = function (e, t) {
  return { $$typeof: Td, type: e, compare: t === void 0 ? null : t };
};
$.startTransition = function (e) {
  var t = ml.transition;
  ml.transition = {};
  try {
    e();
  } finally {
    ml.transition = t;
  }
};
$.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
$.useCallback = function (e, t) {
  return Fe.current.useCallback(e, t);
};
$.useContext = function (e) {
  return Fe.current.useContext(e);
};
$.useDebugValue = function () {};
$.useDeferredValue = function (e) {
  return Fe.current.useDeferredValue(e);
};
$.useEffect = function (e, t) {
  return Fe.current.useEffect(e, t);
};
$.useId = function () {
  return Fe.current.useId();
};
$.useImperativeHandle = function (e, t, n) {
  return Fe.current.useImperativeHandle(e, t, n);
};
$.useInsertionEffect = function (e, t) {
  return Fe.current.useInsertionEffect(e, t);
};
$.useLayoutEffect = function (e, t) {
  return Fe.current.useLayoutEffect(e, t);
};
$.useMemo = function (e, t) {
  return Fe.current.useMemo(e, t);
};
$.useReducer = function (e, t, n) {
  return Fe.current.useReducer(e, t, n);
};
$.useRef = function (e) {
  return Fe.current.useRef(e);
};
$.useState = function (e) {
  return Fe.current.useState(e);
};
$.useSyncExternalStore = function (e, t, n) {
  return Fe.current.useSyncExternalStore(e, t, n);
};
$.useTransition = function () {
  return Fe.current.useTransition();
};
$.version = "18.2.0";
(function (e) {
  e.exports = $;
})(kd);
const kt = vd(L),
  ro = yd({ __proto__: null, default: kt }, [L]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Md = L,
  Id = Symbol.for("react.element"),
  Bd = Symbol.for("react.fragment"),
  jd = Object.prototype.hasOwnProperty,
  Ud = Md.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Vd = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ku(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
  for (r in t) jd.call(t, r) && !Vd.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: Id,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: Ud.current,
  };
}
li.Fragment = Bd;
li.jsx = Ku;
li.jsxs = Ku;
(function (e) {
  e.exports = li;
})(wd);
const mt = xr.Fragment,
  P = xr.jsx,
  ee = xr.jsxs;
var lo = {},
  io = {},
  Hd = {
    get exports() {
      return io;
    },
    set exports(e) {
      io = e;
    },
  },
  We = {},
  oo = {},
  $d = {
    get exports() {
      return oo;
    },
    set exports(e) {
      oo = e;
    },
  },
  Qu = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(N, B) {
    var j = N.length;
    N.push(B);
    e: for (; 0 < j; ) {
      var q = (j - 1) >>> 1,
        se = N[q];
      if (0 < l(se, B)) (N[q] = B), (N[j] = se), (j = q);
      else break e;
    }
  }
  function n(N) {
    return N.length === 0 ? null : N[0];
  }
  function r(N) {
    if (N.length === 0) return null;
    var B = N[0],
      j = N.pop();
    if (j !== B) {
      N[0] = j;
      e: for (var q = 0, se = N.length, yn = se >>> 1; q < yn; ) {
        var gt = 2 * (q + 1) - 1,
          er = N[gt],
          be = gt + 1,
          Tt = N[be];
        if (0 > l(er, j))
          be < se && 0 > l(Tt, er)
            ? ((N[q] = Tt), (N[be] = j), (q = be))
            : ((N[q] = er), (N[gt] = j), (q = gt));
        else if (be < se && 0 > l(Tt, j)) (N[q] = Tt), (N[be] = j), (q = be);
        else break e;
      }
    }
    return B;
  }
  function l(N, B) {
    var j = N.sortIndex - B.sortIndex;
    return j !== 0 ? j : N.id - B.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var o = Date,
      a = o.now();
    e.unstable_now = function () {
      return o.now() - a;
    };
  }
  var s = [],
    c = [],
    g = 1,
    m = null,
    p = 3,
    v = !1,
    S = !1,
    w = !1,
    T = typeof setTimeout == "function" ? setTimeout : null,
    f = typeof clearTimeout == "function" ? clearTimeout : null,
    u = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(N) {
    for (var B = n(c); B !== null; ) {
      if (B.callback === null) r(c);
      else if (B.startTime <= N)
        r(c), (B.sortIndex = B.expirationTime), t(s, B);
      else break;
      B = n(c);
    }
  }
  function k(N) {
    if (((w = !1), d(N), !S))
      if (n(s) !== null) (S = !0), Ce(C);
      else {
        var B = n(c);
        B !== null && Ae(k, B.startTime - N);
      }
  }
  function C(N, B) {
    (S = !1), w && ((w = !1), f(M), (M = -1)), (v = !0);
    var j = p;
    try {
      for (
        d(B), m = n(s);
        m !== null && (!(m.expirationTime > B) || (N && !ae()));

      ) {
        var q = m.callback;
        if (typeof q == "function") {
          (m.callback = null), (p = m.priorityLevel);
          var se = q(m.expirationTime <= B);
          (B = e.unstable_now()),
            typeof se == "function" ? (m.callback = se) : m === n(s) && r(s),
            d(B);
        } else r(s);
        m = n(s);
      }
      if (m !== null) var yn = !0;
      else {
        var gt = n(c);
        gt !== null && Ae(k, gt.startTime - B), (yn = !1);
      }
      return yn;
    } finally {
      (m = null), (p = j), (v = !1);
    }
  }
  var F = !1,
    O = null,
    M = -1,
    K = 5,
    U = -1;
  function ae() {
    return !(e.unstable_now() - U < K);
  }
  function H() {
    if (O !== null) {
      var N = e.unstable_now();
      U = N;
      var B = !0;
      try {
        B = O(!0, N);
      } finally {
        B ? V() : ((F = !1), (O = null));
      }
    } else F = !1;
  }
  var V;
  if (typeof u == "function")
    V = function () {
      u(H);
    };
  else if (typeof MessageChannel < "u") {
    var Z = new MessageChannel(),
      xe = Z.port2;
    (Z.port1.onmessage = H),
      (V = function () {
        xe.postMessage(null);
      });
  } else
    V = function () {
      T(H, 0);
    };
  function Ce(N) {
    (O = N), F || ((F = !0), V());
  }
  function Ae(N, B) {
    M = T(function () {
      N(e.unstable_now());
    }, B);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (N) {
      N.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      S || v || ((S = !0), Ce(C));
    }),
    (e.unstable_forceFrameRate = function (N) {
      0 > N || 125 < N
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (K = 0 < N ? Math.floor(1e3 / N) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return p;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function (N) {
      switch (p) {
        case 1:
        case 2:
        case 3:
          var B = 3;
          break;
        default:
          B = p;
      }
      var j = p;
      p = B;
      try {
        return N();
      } finally {
        p = j;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (N, B) {
      switch (N) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          N = 3;
      }
      var j = p;
      p = N;
      try {
        return B();
      } finally {
        p = j;
      }
    }),
    (e.unstable_scheduleCallback = function (N, B, j) {
      var q = e.unstable_now();
      switch (
        (typeof j == "object" && j !== null
          ? ((j = j.delay), (j = typeof j == "number" && 0 < j ? q + j : q))
          : (j = q),
        N)
      ) {
        case 1:
          var se = -1;
          break;
        case 2:
          se = 250;
          break;
        case 5:
          se = 1073741823;
          break;
        case 4:
          se = 1e4;
          break;
        default:
          se = 5e3;
      }
      return (
        (se = j + se),
        (N = {
          id: g++,
          callback: B,
          priorityLevel: N,
          startTime: j,
          expirationTime: se,
          sortIndex: -1,
        }),
        j > q
          ? ((N.sortIndex = j),
            t(c, N),
            n(s) === null &&
              N === n(c) &&
              (w ? (f(M), (M = -1)) : (w = !0), Ae(k, j - q)))
          : ((N.sortIndex = se), t(s, N), S || v || ((S = !0), Ce(C))),
        N
      );
    }),
    (e.unstable_shouldYield = ae),
    (e.unstable_wrapCallback = function (N) {
      var B = p;
      return function () {
        var j = p;
        p = B;
        try {
          return N.apply(this, arguments);
        } finally {
          p = j;
        }
      };
    });
})(Qu);
(function (e) {
  e.exports = Qu;
})($d);
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Yu = L,
  $e = oo;
function x(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Gu = new Set(),
  Cr = {};
function pn(e, t) {
  Hn(e, t), Hn(e + "Capture", t);
}
function Hn(e, t) {
  for (Cr[e] = t, e = 0; e < t.length; e++) Gu.add(t[e]);
}
var Ct = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  ao = Object.prototype.hasOwnProperty,
  Wd =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  ms = {},
  gs = {};
function Kd(e) {
  return ao.call(gs, e)
    ? !0
    : ao.call(ms, e)
    ? !1
    : Wd.test(e)
    ? (gs[e] = !0)
    : ((ms[e] = !0), !1);
}
function Qd(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Yd(e, t, n, r) {
  if (t === null || typeof t > "u" || Qd(e, t, n, r)) return !0;
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
function Oe(e, t, n, r, l, i, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = o);
}
var Ee = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Ee[e] = new Oe(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Ee[t] = new Oe(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Ee[e] = new Oe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Ee[e] = new Oe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Ee[e] = new Oe(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Ee[e] = new Oe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Ee[e] = new Oe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Ee[e] = new Oe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Ee[e] = new Oe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var sa = /[\-:]([a-z])/g;
function ua(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(sa, ua);
    Ee[t] = new Oe(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(sa, ua);
    Ee[t] = new Oe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(sa, ua);
  Ee[t] = new Oe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Ee[e] = new Oe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ee.xlinkHref = new Oe(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Ee[e] = new Oe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function ca(e, t, n, r) {
  var l = Ee.hasOwnProperty(t) ? Ee[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Yd(t, n, l, r) && (n = null),
    r || l === null
      ? Kd(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : l.mustUseProperty
      ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
      : ((t = l.attributeName),
        (r = l.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((l = l.type),
            (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Lt = Yu.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  qr = Symbol.for("react.element"),
  En = Symbol.for("react.portal"),
  xn = Symbol.for("react.fragment"),
  fa = Symbol.for("react.strict_mode"),
  so = Symbol.for("react.profiler"),
  Ju = Symbol.for("react.provider"),
  Xu = Symbol.for("react.context"),
  da = Symbol.for("react.forward_ref"),
  uo = Symbol.for("react.suspense"),
  co = Symbol.for("react.suspense_list"),
  ha = Symbol.for("react.memo"),
  Dt = Symbol.for("react.lazy"),
  Zu = Symbol.for("react.offscreen"),
  ys = Symbol.iterator;
function tr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (ys && e[ys]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var le = Object.assign,
  Ci;
function cr(e) {
  if (Ci === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Ci = (t && t[1]) || "";
    }
  return (
    `
` +
    Ci +
    e
  );
}
var _i = !1;
function Ni(e, t) {
  if (!e || _i) return "";
  _i = !0;
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
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (c) {
          r = c;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (
        var l = c.stack.split(`
`),
          i = r.stack.split(`
`),
          o = l.length - 1,
          a = i.length - 1;
        1 <= o && 0 <= a && l[o] !== i[a];

      )
        a--;
      for (; 1 <= o && 0 <= a; o--, a--)
        if (l[o] !== i[a]) {
          if (o !== 1 || a !== 1)
            do
              if ((o--, a--, 0 > a || l[o] !== i[a])) {
                var s =
                  `
` + l[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    s.includes("<anonymous>") &&
                    (s = s.replace("<anonymous>", e.displayName)),
                  s
                );
              }
            while (1 <= o && 0 <= a);
          break;
        }
    }
  } finally {
    (_i = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? cr(e) : "";
}
function Gd(e) {
  switch (e.tag) {
    case 5:
      return cr(e.type);
    case 16:
      return cr("Lazy");
    case 13:
      return cr("Suspense");
    case 19:
      return cr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Ni(e.type, !1)), e;
    case 11:
      return (e = Ni(e.type.render, !1)), e;
    case 1:
      return (e = Ni(e.type, !0)), e;
    default:
      return "";
  }
}
function fo(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case xn:
      return "Fragment";
    case En:
      return "Portal";
    case so:
      return "Profiler";
    case fa:
      return "StrictMode";
    case uo:
      return "Suspense";
    case co:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Xu:
        return (e.displayName || "Context") + ".Consumer";
      case Ju:
        return (e._context.displayName || "Context") + ".Provider";
      case da:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case ha:
        return (
          (t = e.displayName || null), t !== null ? t : fo(e.type) || "Memo"
        );
      case Dt:
        (t = e._payload), (e = e._init);
        try {
          return fo(e(t));
        } catch {}
    }
  return null;
}
function Jd(e) {
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
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
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
      return fo(t);
    case 8:
      return t === fa ? "StrictMode" : "Mode";
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
function Gt(e) {
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
function qu(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Xd(e) {
  var t = qu(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var l = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (o) {
          (r = "" + o), i.call(this, o);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function br(e) {
  e._valueTracker || (e._valueTracker = Xd(e));
}
function bu(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = qu(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Pl(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ho(e, t) {
  var n = t.checked;
  return le({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function vs(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Gt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function ec(e, t) {
  (t = t.checked), t != null && ca(e, "checked", t, !1);
}
function po(e, t) {
  ec(e, t);
  var n = Gt(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? mo(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && mo(e, t.type, Gt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function ws(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function mo(e, t, n) {
  (t !== "number" || Pl(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var fr = Array.isArray;
function zn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Gt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function go(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(x(91));
  return le({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function ks(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(x(92));
      if (fr(n)) {
        if (1 < n.length) throw Error(x(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Gt(n) };
}
function tc(e, t) {
  var n = Gt(t.value),
    r = Gt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Ss(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function nc(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function yo(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? nc(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var el,
  rc = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        el = el || document.createElement("div"),
          el.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = el.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function _r(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var pr = {
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
  Zd = ["Webkit", "ms", "Moz", "O"];
Object.keys(pr).forEach(function (e) {
  Zd.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (pr[t] = pr[e]);
  });
});
function lc(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (pr.hasOwnProperty(e) && pr[e])
    ? ("" + t).trim()
    : t + "px";
}
function ic(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = lc(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var qd = le(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function vo(e, t) {
  if (t) {
    if (qd[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(x(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(x(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(x(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(x(62));
  }
}
function wo(e, t) {
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
var ko = null;
function pa(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var So = null,
  Mn = null,
  In = null;
function Es(e) {
  if ((e = Kr(e))) {
    if (typeof So != "function") throw Error(x(280));
    var t = e.stateNode;
    t && ((t = ui(t)), So(e.stateNode, e.type, t));
  }
}
function oc(e) {
  Mn ? (In ? In.push(e) : (In = [e])) : (Mn = e);
}
function ac() {
  if (Mn) {
    var e = Mn,
      t = In;
    if (((In = Mn = null), Es(e), t)) for (e = 0; e < t.length; e++) Es(t[e]);
  }
}
function sc(e, t) {
  return e(t);
}
function uc() {}
var Pi = !1;
function cc(e, t, n) {
  if (Pi) return e(t, n);
  Pi = !0;
  try {
    return sc(e, t, n);
  } finally {
    (Pi = !1), (Mn !== null || In !== null) && (uc(), ac());
  }
}
function Nr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = ui(n);
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
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(x(231, t, typeof n));
  return n;
}
var Eo = !1;
if (Ct)
  try {
    var nr = {};
    Object.defineProperty(nr, "passive", {
      get: function () {
        Eo = !0;
      },
    }),
      window.addEventListener("test", nr, nr),
      window.removeEventListener("test", nr, nr);
  } catch {
    Eo = !1;
  }
function bd(e, t, n, r, l, i, o, a, s) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (g) {
    this.onError(g);
  }
}
var mr = !1,
  Ll = null,
  Tl = !1,
  xo = null,
  eh = {
    onError: function (e) {
      (mr = !0), (Ll = e);
    },
  };
function th(e, t, n, r, l, i, o, a, s) {
  (mr = !1), (Ll = null), bd.apply(eh, arguments);
}
function nh(e, t, n, r, l, i, o, a, s) {
  if ((th.apply(this, arguments), mr)) {
    if (mr) {
      var c = Ll;
      (mr = !1), (Ll = null);
    } else throw Error(x(198));
    Tl || ((Tl = !0), (xo = c));
  }
}
function mn(e) {
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
function fc(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function xs(e) {
  if (mn(e) !== e) throw Error(x(188));
}
function rh(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = mn(e)), t === null)) throw Error(x(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var i = l.alternate;
    if (i === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === i.child) {
      for (i = l.child; i; ) {
        if (i === n) return xs(l), e;
        if (i === r) return xs(l), t;
        i = i.sibling;
      }
      throw Error(x(188));
    }
    if (n.return !== r.return) (n = l), (r = i);
    else {
      for (var o = !1, a = l.child; a; ) {
        if (a === n) {
          (o = !0), (n = l), (r = i);
          break;
        }
        if (a === r) {
          (o = !0), (r = l), (n = i);
          break;
        }
        a = a.sibling;
      }
      if (!o) {
        for (a = i.child; a; ) {
          if (a === n) {
            (o = !0), (n = i), (r = l);
            break;
          }
          if (a === r) {
            (o = !0), (r = i), (n = l);
            break;
          }
          a = a.sibling;
        }
        if (!o) throw Error(x(189));
      }
    }
    if (n.alternate !== r) throw Error(x(190));
  }
  if (n.tag !== 3) throw Error(x(188));
  return n.stateNode.current === n ? e : t;
}
function dc(e) {
  return (e = rh(e)), e !== null ? hc(e) : null;
}
function hc(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = hc(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var pc = $e.unstable_scheduleCallback,
  Cs = $e.unstable_cancelCallback,
  lh = $e.unstable_shouldYield,
  ih = $e.unstable_requestPaint,
  ce = $e.unstable_now,
  oh = $e.unstable_getCurrentPriorityLevel,
  ma = $e.unstable_ImmediatePriority,
  mc = $e.unstable_UserBlockingPriority,
  Rl = $e.unstable_NormalPriority,
  ah = $e.unstable_LowPriority,
  gc = $e.unstable_IdlePriority,
  ii = null,
  ht = null;
function sh(e) {
  if (ht && typeof ht.onCommitFiberRoot == "function")
    try {
      ht.onCommitFiberRoot(ii, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var it = Math.clz32 ? Math.clz32 : fh,
  uh = Math.log,
  ch = Math.LN2;
function fh(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((uh(e) / ch) | 0)) | 0;
}
var tl = 64,
  nl = 4194304;
function dr(e) {
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
function Dl(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    i = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var a = o & ~l;
    a !== 0 ? (r = dr(a)) : ((i &= o), i !== 0 && (r = dr(i)));
  } else (o = n & ~l), o !== 0 ? (r = dr(o)) : i !== 0 && (r = dr(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (i = t & -t), l >= i || (l === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - it(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function dh(e, t) {
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
function hh(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var o = 31 - it(i),
      a = 1 << o,
      s = l[o];
    s === -1
      ? (!(a & n) || a & r) && (l[o] = dh(a, t))
      : s <= t && (e.expiredLanes |= a),
      (i &= ~a);
  }
}
function Co(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function yc() {
  var e = tl;
  return (tl <<= 1), !(tl & 4194240) && (tl = 64), e;
}
function Li(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function $r(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - it(t)),
    (e[t] = n);
}
function ph(e, t) {
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
    var l = 31 - it(n),
      i = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~i);
  }
}
function ga(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - it(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var Q = 0;
function vc(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var wc,
  ya,
  kc,
  Sc,
  Ec,
  _o = !1,
  rl = [],
  jt = null,
  Ut = null,
  Vt = null,
  Pr = new Map(),
  Lr = new Map(),
  Ot = [],
  mh =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function _s(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      jt = null;
      break;
    case "dragenter":
    case "dragleave":
      Ut = null;
      break;
    case "mouseover":
    case "mouseout":
      Vt = null;
      break;
    case "pointerover":
    case "pointerout":
      Pr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Lr.delete(t.pointerId);
  }
}
function rr(e, t, n, r, l, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [l],
      }),
      t !== null && ((t = Kr(t)), t !== null && ya(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function gh(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (jt = rr(jt, e, t, n, r, l)), !0;
    case "dragenter":
      return (Ut = rr(Ut, e, t, n, r, l)), !0;
    case "mouseover":
      return (Vt = rr(Vt, e, t, n, r, l)), !0;
    case "pointerover":
      var i = l.pointerId;
      return Pr.set(i, rr(Pr.get(i) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (i = l.pointerId), Lr.set(i, rr(Lr.get(i) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function xc(e) {
  var t = nn(e.target);
  if (t !== null) {
    var n = mn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = fc(n)), t !== null)) {
          (e.blockedOn = t),
            Ec(e.priority, function () {
              kc(n);
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
function gl(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = No(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (ko = r), n.target.dispatchEvent(r), (ko = null);
    } else return (t = Kr(n)), t !== null && ya(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Ns(e, t, n) {
  gl(e) && n.delete(t);
}
function yh() {
  (_o = !1),
    jt !== null && gl(jt) && (jt = null),
    Ut !== null && gl(Ut) && (Ut = null),
    Vt !== null && gl(Vt) && (Vt = null),
    Pr.forEach(Ns),
    Lr.forEach(Ns);
}
function lr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    _o ||
      ((_o = !0),
      $e.unstable_scheduleCallback($e.unstable_NormalPriority, yh)));
}
function Tr(e) {
  function t(l) {
    return lr(l, e);
  }
  if (0 < rl.length) {
    lr(rl[0], e);
    for (var n = 1; n < rl.length; n++) {
      var r = rl[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    jt !== null && lr(jt, e),
      Ut !== null && lr(Ut, e),
      Vt !== null && lr(Vt, e),
      Pr.forEach(t),
      Lr.forEach(t),
      n = 0;
    n < Ot.length;
    n++
  )
    (r = Ot[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Ot.length && ((n = Ot[0]), n.blockedOn === null); )
    xc(n), n.blockedOn === null && Ot.shift();
}
var Bn = Lt.ReactCurrentBatchConfig,
  Fl = !0;
function vh(e, t, n, r) {
  var l = Q,
    i = Bn.transition;
  Bn.transition = null;
  try {
    (Q = 1), va(e, t, n, r);
  } finally {
    (Q = l), (Bn.transition = i);
  }
}
function wh(e, t, n, r) {
  var l = Q,
    i = Bn.transition;
  Bn.transition = null;
  try {
    (Q = 4), va(e, t, n, r);
  } finally {
    (Q = l), (Bn.transition = i);
  }
}
function va(e, t, n, r) {
  if (Fl) {
    var l = No(e, t, n, r);
    if (l === null) Bi(e, t, r, Ol, n), _s(e, r);
    else if (gh(l, e, t, n, r)) r.stopPropagation();
    else if ((_s(e, r), t & 4 && -1 < mh.indexOf(e))) {
      for (; l !== null; ) {
        var i = Kr(l);
        if (
          (i !== null && wc(i),
          (i = No(e, t, n, r)),
          i === null && Bi(e, t, r, Ol, n),
          i === l)
        )
          break;
        l = i;
      }
      l !== null && r.stopPropagation();
    } else Bi(e, t, r, null, n);
  }
}
var Ol = null;
function No(e, t, n, r) {
  if (((Ol = null), (e = pa(r)), (e = nn(e)), e !== null))
    if (((t = mn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = fc(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Ol = e), null;
}
function Cc(e) {
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
      switch (oh()) {
        case ma:
          return 1;
        case mc:
          return 4;
        case Rl:
        case ah:
          return 16;
        case gc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var zt = null,
  wa = null,
  yl = null;
function _c() {
  if (yl) return yl;
  var e,
    t = wa,
    n = t.length,
    r,
    l = "value" in zt ? zt.value : zt.textContent,
    i = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === l[i - r]; r++);
  return (yl = l.slice(e, 1 < r ? 1 - r : void 0));
}
function vl(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function ll() {
  return !0;
}
function Ps() {
  return !1;
}
function Ke(e) {
  function t(n, r, l, i, o) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = o),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(i) : i[a]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? ll
        : Ps),
      (this.isPropagationStopped = Ps),
      this
    );
  }
  return (
    le(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = ll));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = ll));
      },
      persist: function () {},
      isPersistent: ll,
    }),
    t
  );
}
var Xn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  ka = Ke(Xn),
  Wr = le({}, Xn, { view: 0, detail: 0 }),
  kh = Ke(Wr),
  Ti,
  Ri,
  ir,
  oi = le({}, Wr, {
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
    getModifierState: Sa,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== ir &&
            (ir && e.type === "mousemove"
              ? ((Ti = e.screenX - ir.screenX), (Ri = e.screenY - ir.screenY))
              : (Ri = Ti = 0),
            (ir = e)),
          Ti);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Ri;
    },
  }),
  Ls = Ke(oi),
  Sh = le({}, oi, { dataTransfer: 0 }),
  Eh = Ke(Sh),
  xh = le({}, Wr, { relatedTarget: 0 }),
  Di = Ke(xh),
  Ch = le({}, Xn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  _h = Ke(Ch),
  Nh = le({}, Xn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Ph = Ke(Nh),
  Lh = le({}, Xn, { data: 0 }),
  Ts = Ke(Lh),
  Th = {
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
  Rh = {
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
  Dh = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Fh(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Dh[e]) ? !!t[e] : !1;
}
function Sa() {
  return Fh;
}
var Oh = le({}, Wr, {
    key: function (e) {
      if (e.key) {
        var t = Th[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = vl(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Rh[e.keyCode] || "Unidentified"
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
    getModifierState: Sa,
    charCode: function (e) {
      return e.type === "keypress" ? vl(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? vl(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Ah = Ke(Oh),
  zh = le({}, oi, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Rs = Ke(zh),
  Mh = le({}, Wr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Sa,
  }),
  Ih = Ke(Mh),
  Bh = le({}, Xn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  jh = Ke(Bh),
  Uh = le({}, oi, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Vh = Ke(Uh),
  Hh = [9, 13, 27, 32],
  Ea = Ct && "CompositionEvent" in window,
  gr = null;
Ct && "documentMode" in document && (gr = document.documentMode);
var $h = Ct && "TextEvent" in window && !gr,
  Nc = Ct && (!Ea || (gr && 8 < gr && 11 >= gr)),
  Ds = String.fromCharCode(32),
  Fs = !1;
function Pc(e, t) {
  switch (e) {
    case "keyup":
      return Hh.indexOf(t.keyCode) !== -1;
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
function Lc(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Cn = !1;
function Wh(e, t) {
  switch (e) {
    case "compositionend":
      return Lc(t);
    case "keypress":
      return t.which !== 32 ? null : ((Fs = !0), Ds);
    case "textInput":
      return (e = t.data), e === Ds && Fs ? null : e;
    default:
      return null;
  }
}
function Kh(e, t) {
  if (Cn)
    return e === "compositionend" || (!Ea && Pc(e, t))
      ? ((e = _c()), (yl = wa = zt = null), (Cn = !1), e)
      : null;
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
      return Nc && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Qh = {
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
function Os(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Qh[e.type] : t === "textarea";
}
function Tc(e, t, n, r) {
  oc(r),
    (t = Al(t, "onChange")),
    0 < t.length &&
      ((n = new ka("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var yr = null,
  Rr = null;
function Yh(e) {
  Uc(e, 0);
}
function ai(e) {
  var t = Pn(e);
  if (bu(t)) return e;
}
function Gh(e, t) {
  if (e === "change") return t;
}
var Rc = !1;
if (Ct) {
  var Fi;
  if (Ct) {
    var Oi = "oninput" in document;
    if (!Oi) {
      var As = document.createElement("div");
      As.setAttribute("oninput", "return;"),
        (Oi = typeof As.oninput == "function");
    }
    Fi = Oi;
  } else Fi = !1;
  Rc = Fi && (!document.documentMode || 9 < document.documentMode);
}
function zs() {
  yr && (yr.detachEvent("onpropertychange", Dc), (Rr = yr = null));
}
function Dc(e) {
  if (e.propertyName === "value" && ai(Rr)) {
    var t = [];
    Tc(t, Rr, e, pa(e)), cc(Yh, t);
  }
}
function Jh(e, t, n) {
  e === "focusin"
    ? (zs(), (yr = t), (Rr = n), yr.attachEvent("onpropertychange", Dc))
    : e === "focusout" && zs();
}
function Xh(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return ai(Rr);
}
function Zh(e, t) {
  if (e === "click") return ai(t);
}
function qh(e, t) {
  if (e === "input" || e === "change") return ai(t);
}
function bh(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var at = typeof Object.is == "function" ? Object.is : bh;
function Dr(e, t) {
  if (at(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!ao.call(t, l) || !at(e[l], t[l])) return !1;
  }
  return !0;
}
function Ms(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Is(e, t) {
  var n = Ms(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
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
    n = Ms(n);
  }
}
function Fc(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Fc(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Oc() {
  for (var e = window, t = Pl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Pl(e.document);
  }
  return t;
}
function xa(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function ep(e) {
  var t = Oc(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Fc(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && xa(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          i = Math.min(r.start, l);
        (r = r.end === void 0 ? i : Math.min(r.end, l)),
          !e.extend && i > r && ((l = r), (r = i), (i = l)),
          (l = Is(n, i));
        var o = Is(n, r);
        l &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var tp = Ct && "documentMode" in document && 11 >= document.documentMode,
  _n = null,
  Po = null,
  vr = null,
  Lo = !1;
function Bs(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Lo ||
    _n == null ||
    _n !== Pl(r) ||
    ((r = _n),
    "selectionStart" in r && xa(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (vr && Dr(vr, r)) ||
      ((vr = r),
      (r = Al(Po, "onSelect")),
      0 < r.length &&
        ((t = new ka("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = _n))));
}
function il(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Nn = {
    animationend: il("Animation", "AnimationEnd"),
    animationiteration: il("Animation", "AnimationIteration"),
    animationstart: il("Animation", "AnimationStart"),
    transitionend: il("Transition", "TransitionEnd"),
  },
  Ai = {},
  Ac = {};
Ct &&
  ((Ac = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Nn.animationend.animation,
    delete Nn.animationiteration.animation,
    delete Nn.animationstart.animation),
  "TransitionEvent" in window || delete Nn.transitionend.transition);
function si(e) {
  if (Ai[e]) return Ai[e];
  if (!Nn[e]) return e;
  var t = Nn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Ac) return (Ai[e] = t[n]);
  return e;
}
var zc = si("animationend"),
  Mc = si("animationiteration"),
  Ic = si("animationstart"),
  Bc = si("transitionend"),
  jc = new Map(),
  js =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Xt(e, t) {
  jc.set(e, t), pn(t, [e]);
}
for (var zi = 0; zi < js.length; zi++) {
  var Mi = js[zi],
    np = Mi.toLowerCase(),
    rp = Mi[0].toUpperCase() + Mi.slice(1);
  Xt(np, "on" + rp);
}
Xt(zc, "onAnimationEnd");
Xt(Mc, "onAnimationIteration");
Xt(Ic, "onAnimationStart");
Xt("dblclick", "onDoubleClick");
Xt("focusin", "onFocus");
Xt("focusout", "onBlur");
Xt(Bc, "onTransitionEnd");
Hn("onMouseEnter", ["mouseout", "mouseover"]);
Hn("onMouseLeave", ["mouseout", "mouseover"]);
Hn("onPointerEnter", ["pointerout", "pointerover"]);
Hn("onPointerLeave", ["pointerout", "pointerover"]);
pn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
pn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
pn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
pn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
pn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
pn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var hr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  lp = new Set("cancel close invalid load scroll toggle".split(" ").concat(hr));
function Us(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), nh(r, t, void 0, e), (e.currentTarget = null);
}
function Uc(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var a = r[o],
            s = a.instance,
            c = a.currentTarget;
          if (((a = a.listener), s !== i && l.isPropagationStopped())) break e;
          Us(l, a, c), (i = s);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((a = r[o]),
            (s = a.instance),
            (c = a.currentTarget),
            (a = a.listener),
            s !== i && l.isPropagationStopped())
          )
            break e;
          Us(l, a, c), (i = s);
        }
    }
  }
  if (Tl) throw ((e = xo), (Tl = !1), (xo = null), e);
}
function J(e, t) {
  var n = t[Oo];
  n === void 0 && (n = t[Oo] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Vc(t, e, 2, !1), n.add(r));
}
function Ii(e, t, n) {
  var r = 0;
  t && (r |= 4), Vc(n, e, r, t);
}
var ol = "_reactListening" + Math.random().toString(36).slice(2);
function Fr(e) {
  if (!e[ol]) {
    (e[ol] = !0),
      Gu.forEach(function (n) {
        n !== "selectionchange" && (lp.has(n) || Ii(n, !1, e), Ii(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[ol] || ((t[ol] = !0), Ii("selectionchange", !1, t));
  }
}
function Vc(e, t, n, r) {
  switch (Cc(t)) {
    case 1:
      var l = vh;
      break;
    case 4:
      l = wh;
      break;
    default:
      l = va;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !Eo ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
      ? e.addEventListener(t, n, { passive: l })
      : e.addEventListener(t, n, !1);
}
function Bi(e, t, n, r, l) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var a = r.stateNode.containerInfo;
        if (a === l || (a.nodeType === 8 && a.parentNode === l)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var s = o.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = o.stateNode.containerInfo),
              s === l || (s.nodeType === 8 && s.parentNode === l))
            )
              return;
            o = o.return;
          }
        for (; a !== null; ) {
          if (((o = nn(a)), o === null)) return;
          if (((s = o.tag), s === 5 || s === 6)) {
            r = i = o;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  cc(function () {
    var c = i,
      g = pa(n),
      m = [];
    e: {
      var p = jc.get(e);
      if (p !== void 0) {
        var v = ka,
          S = e;
        switch (e) {
          case "keypress":
            if (vl(n) === 0) break e;
          case "keydown":
          case "keyup":
            v = Ah;
            break;
          case "focusin":
            (S = "focus"), (v = Di);
            break;
          case "focusout":
            (S = "blur"), (v = Di);
            break;
          case "beforeblur":
          case "afterblur":
            v = Di;
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
            v = Ls;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = Eh;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = Ih;
            break;
          case zc:
          case Mc:
          case Ic:
            v = _h;
            break;
          case Bc:
            v = jh;
            break;
          case "scroll":
            v = kh;
            break;
          case "wheel":
            v = Vh;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = Ph;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = Rs;
        }
        var w = (t & 4) !== 0,
          T = !w && e === "scroll",
          f = w ? (p !== null ? p + "Capture" : null) : p;
        w = [];
        for (var u = c, d; u !== null; ) {
          d = u;
          var k = d.stateNode;
          if (
            (d.tag === 5 &&
              k !== null &&
              ((d = k),
              f !== null && ((k = Nr(u, f)), k != null && w.push(Or(u, k, d)))),
            T)
          )
            break;
          u = u.return;
        }
        0 < w.length &&
          ((p = new v(p, S, null, n, g)), m.push({ event: p, listeners: w }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((p = e === "mouseover" || e === "pointerover"),
          (v = e === "mouseout" || e === "pointerout"),
          p &&
            n !== ko &&
            (S = n.relatedTarget || n.fromElement) &&
            (nn(S) || S[_t]))
        )
          break e;
        if (
          (v || p) &&
          ((p =
            g.window === g
              ? g
              : (p = g.ownerDocument)
              ? p.defaultView || p.parentWindow
              : window),
          v
            ? ((S = n.relatedTarget || n.toElement),
              (v = c),
              (S = S ? nn(S) : null),
              S !== null &&
                ((T = mn(S)), S !== T || (S.tag !== 5 && S.tag !== 6)) &&
                (S = null))
            : ((v = null), (S = c)),
          v !== S)
        ) {
          if (
            ((w = Ls),
            (k = "onMouseLeave"),
            (f = "onMouseEnter"),
            (u = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((w = Rs),
              (k = "onPointerLeave"),
              (f = "onPointerEnter"),
              (u = "pointer")),
            (T = v == null ? p : Pn(v)),
            (d = S == null ? p : Pn(S)),
            (p = new w(k, u + "leave", v, n, g)),
            (p.target = T),
            (p.relatedTarget = d),
            (k = null),
            nn(g) === c &&
              ((w = new w(f, u + "enter", S, n, g)),
              (w.target = d),
              (w.relatedTarget = T),
              (k = w)),
            (T = k),
            v && S)
          )
            t: {
              for (w = v, f = S, u = 0, d = w; d; d = wn(d)) u++;
              for (d = 0, k = f; k; k = wn(k)) d++;
              for (; 0 < u - d; ) (w = wn(w)), u--;
              for (; 0 < d - u; ) (f = wn(f)), d--;
              for (; u--; ) {
                if (w === f || (f !== null && w === f.alternate)) break t;
                (w = wn(w)), (f = wn(f));
              }
              w = null;
            }
          else w = null;
          v !== null && Vs(m, p, v, w, !1),
            S !== null && T !== null && Vs(m, T, S, w, !0);
        }
      }
      e: {
        if (
          ((p = c ? Pn(c) : window),
          (v = p.nodeName && p.nodeName.toLowerCase()),
          v === "select" || (v === "input" && p.type === "file"))
        )
          var C = Gh;
        else if (Os(p))
          if (Rc) C = qh;
          else {
            C = Xh;
            var F = Jh;
          }
        else
          (v = p.nodeName) &&
            v.toLowerCase() === "input" &&
            (p.type === "checkbox" || p.type === "radio") &&
            (C = Zh);
        if (C && (C = C(e, c))) {
          Tc(m, C, n, g);
          break e;
        }
        F && F(e, p, c),
          e === "focusout" &&
            (F = p._wrapperState) &&
            F.controlled &&
            p.type === "number" &&
            mo(p, "number", p.value);
      }
      switch (((F = c ? Pn(c) : window), e)) {
        case "focusin":
          (Os(F) || F.contentEditable === "true") &&
            ((_n = F), (Po = c), (vr = null));
          break;
        case "focusout":
          vr = Po = _n = null;
          break;
        case "mousedown":
          Lo = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Lo = !1), Bs(m, n, g);
          break;
        case "selectionchange":
          if (tp) break;
        case "keydown":
        case "keyup":
          Bs(m, n, g);
      }
      var O;
      if (Ea)
        e: {
          switch (e) {
            case "compositionstart":
              var M = "onCompositionStart";
              break e;
            case "compositionend":
              M = "onCompositionEnd";
              break e;
            case "compositionupdate":
              M = "onCompositionUpdate";
              break e;
          }
          M = void 0;
        }
      else
        Cn
          ? Pc(e, n) && (M = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (M = "onCompositionStart");
      M &&
        (Nc &&
          n.locale !== "ko" &&
          (Cn || M !== "onCompositionStart"
            ? M === "onCompositionEnd" && Cn && (O = _c())
            : ((zt = g),
              (wa = "value" in zt ? zt.value : zt.textContent),
              (Cn = !0))),
        (F = Al(c, M)),
        0 < F.length &&
          ((M = new Ts(M, e, null, n, g)),
          m.push({ event: M, listeners: F }),
          O ? (M.data = O) : ((O = Lc(n)), O !== null && (M.data = O)))),
        (O = $h ? Wh(e, n) : Kh(e, n)) &&
          ((c = Al(c, "onBeforeInput")),
          0 < c.length &&
            ((g = new Ts("onBeforeInput", "beforeinput", null, n, g)),
            m.push({ event: g, listeners: c }),
            (g.data = O)));
    }
    Uc(m, t);
  });
}
function Or(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Al(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      i = l.stateNode;
    l.tag === 5 &&
      i !== null &&
      ((l = i),
      (i = Nr(e, n)),
      i != null && r.unshift(Or(e, i, l)),
      (i = Nr(e, t)),
      i != null && r.push(Or(e, i, l))),
      (e = e.return);
  }
  return r;
}
function wn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Vs(e, t, n, r, l) {
  for (var i = t._reactName, o = []; n !== null && n !== r; ) {
    var a = n,
      s = a.alternate,
      c = a.stateNode;
    if (s !== null && s === r) break;
    a.tag === 5 &&
      c !== null &&
      ((a = c),
      l
        ? ((s = Nr(n, i)), s != null && o.unshift(Or(n, s, a)))
        : l || ((s = Nr(n, i)), s != null && o.push(Or(n, s, a)))),
      (n = n.return);
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var ip = /\r\n?/g,
  op = /\u0000|\uFFFD/g;
function Hs(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      ip,
      `
`
    )
    .replace(op, "");
}
function al(e, t, n) {
  if (((t = Hs(t)), Hs(e) !== t && n)) throw Error(x(425));
}
function zl() {}
var To = null,
  Ro = null;
function Do(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Fo = typeof setTimeout == "function" ? setTimeout : void 0,
  ap = typeof clearTimeout == "function" ? clearTimeout : void 0,
  $s = typeof Promise == "function" ? Promise : void 0,
  sp =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof $s < "u"
      ? function (e) {
          return $s.resolve(null).then(e).catch(up);
        }
      : Fo;
function up(e) {
  setTimeout(function () {
    throw e;
  });
}
function ji(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), Tr(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  Tr(t);
}
function Ht(e) {
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
function Ws(e) {
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
var Zn = Math.random().toString(36).slice(2),
  ft = "__reactFiber$" + Zn,
  Ar = "__reactProps$" + Zn,
  _t = "__reactContainer$" + Zn,
  Oo = "__reactEvents$" + Zn,
  cp = "__reactListeners$" + Zn,
  fp = "__reactHandles$" + Zn;
function nn(e) {
  var t = e[ft];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[_t] || n[ft])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Ws(e); e !== null; ) {
          if ((n = e[ft])) return n;
          e = Ws(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Kr(e) {
  return (
    (e = e[ft] || e[_t]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Pn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(x(33));
}
function ui(e) {
  return e[Ar] || null;
}
var Ao = [],
  Ln = -1;
function Zt(e) {
  return { current: e };
}
function X(e) {
  0 > Ln || ((e.current = Ao[Ln]), (Ao[Ln] = null), Ln--);
}
function G(e, t) {
  Ln++, (Ao[Ln] = e.current), (e.current = t);
}
var Jt = {},
  Le = Zt(Jt),
  Ie = Zt(!1),
  un = Jt;
function $n(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Jt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    i;
  for (i in n) l[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function Be(e) {
  return (e = e.childContextTypes), e != null;
}
function Ml() {
  X(Ie), X(Le);
}
function Ks(e, t, n) {
  if (Le.current !== Jt) throw Error(x(168));
  G(Le, t), G(Ie, n);
}
function Hc(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(x(108, Jd(e) || "Unknown", l));
  return le({}, n, r);
}
function Il(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Jt),
    (un = Le.current),
    G(Le, e),
    G(Ie, Ie.current),
    !0
  );
}
function Qs(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(x(169));
  n
    ? ((e = Hc(e, t, un)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      X(Ie),
      X(Le),
      G(Le, e))
    : X(Ie),
    G(Ie, n);
}
var wt = null,
  ci = !1,
  Ui = !1;
function $c(e) {
  wt === null ? (wt = [e]) : wt.push(e);
}
function dp(e) {
  (ci = !0), $c(e);
}
function qt() {
  if (!Ui && wt !== null) {
    Ui = !0;
    var e = 0,
      t = Q;
    try {
      var n = wt;
      for (Q = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (wt = null), (ci = !1);
    } catch (l) {
      throw (wt !== null && (wt = wt.slice(e + 1)), pc(ma, qt), l);
    } finally {
      (Q = t), (Ui = !1);
    }
  }
  return null;
}
var Tn = [],
  Rn = 0,
  Bl = null,
  jl = 0,
  Ye = [],
  Ge = 0,
  cn = null,
  St = 1,
  Et = "";
function bt(e, t) {
  (Tn[Rn++] = jl), (Tn[Rn++] = Bl), (Bl = e), (jl = t);
}
function Wc(e, t, n) {
  (Ye[Ge++] = St), (Ye[Ge++] = Et), (Ye[Ge++] = cn), (cn = e);
  var r = St;
  e = Et;
  var l = 32 - it(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var i = 32 - it(t) + l;
  if (30 < i) {
    var o = l - (l % 5);
    (i = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (l -= o),
      (St = (1 << (32 - it(t) + l)) | (n << l) | r),
      (Et = i + e);
  } else (St = (1 << i) | (n << l) | r), (Et = e);
}
function Ca(e) {
  e.return !== null && (bt(e, 1), Wc(e, 1, 0));
}
function _a(e) {
  for (; e === Bl; )
    (Bl = Tn[--Rn]), (Tn[Rn] = null), (jl = Tn[--Rn]), (Tn[Rn] = null);
  for (; e === cn; )
    (cn = Ye[--Ge]),
      (Ye[Ge] = null),
      (Et = Ye[--Ge]),
      (Ye[Ge] = null),
      (St = Ye[--Ge]),
      (Ye[Ge] = null);
}
var He = null,
  Ve = null,
  te = !1,
  rt = null;
function Kc(e, t) {
  var n = Je(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Ys(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (He = e), (Ve = Ht(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (He = e), (Ve = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = cn !== null ? { id: St, overflow: Et } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Je(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (He = e),
            (Ve = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function zo(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Mo(e) {
  if (te) {
    var t = Ve;
    if (t) {
      var n = t;
      if (!Ys(e, t)) {
        if (zo(e)) throw Error(x(418));
        t = Ht(n.nextSibling);
        var r = He;
        t && Ys(e, t)
          ? Kc(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (te = !1), (He = e));
      }
    } else {
      if (zo(e)) throw Error(x(418));
      (e.flags = (e.flags & -4097) | 2), (te = !1), (He = e);
    }
  }
}
function Gs(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  He = e;
}
function sl(e) {
  if (e !== He) return !1;
  if (!te) return Gs(e), (te = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Do(e.type, e.memoizedProps))),
    t && (t = Ve))
  ) {
    if (zo(e)) throw (Qc(), Error(x(418)));
    for (; t; ) Kc(e, t), (t = Ht(t.nextSibling));
  }
  if ((Gs(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(x(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ve = Ht(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Ve = null;
    }
  } else Ve = He ? Ht(e.stateNode.nextSibling) : null;
  return !0;
}
function Qc() {
  for (var e = Ve; e; ) e = Ht(e.nextSibling);
}
function Wn() {
  (Ve = He = null), (te = !1);
}
function Na(e) {
  rt === null ? (rt = [e]) : rt.push(e);
}
var hp = Lt.ReactCurrentBatchConfig;
function tt(e, t) {
  if (e && e.defaultProps) {
    (t = le({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Ul = Zt(null),
  Vl = null,
  Dn = null,
  Pa = null;
function La() {
  Pa = Dn = Vl = null;
}
function Ta(e) {
  var t = Ul.current;
  X(Ul), (e._currentValue = t);
}
function Io(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function jn(e, t) {
  (Vl = e),
    (Pa = Dn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Me = !0), (e.firstContext = null));
}
function Ze(e) {
  var t = e._currentValue;
  if (Pa !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Dn === null)) {
      if (Vl === null) throw Error(x(308));
      (Dn = e), (Vl.dependencies = { lanes: 0, firstContext: e });
    } else Dn = Dn.next = e;
  return t;
}
var rn = null;
function Ra(e) {
  rn === null ? (rn = [e]) : rn.push(e);
}
function Yc(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), Ra(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    Nt(e, r)
  );
}
function Nt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Ft = !1;
function Da(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Gc(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function xt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function $t(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), W & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      Nt(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), Ra(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    Nt(e, n)
  );
}
function wl(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), ga(e, n);
  }
}
function Js(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (l = i = o) : (i = i.next = o), (n = n.next);
      } while (n !== null);
      i === null ? (l = i = t) : (i = i.next = t);
    } else l = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Hl(e, t, n, r) {
  var l = e.updateQueue;
  Ft = !1;
  var i = l.firstBaseUpdate,
    o = l.lastBaseUpdate,
    a = l.shared.pending;
  if (a !== null) {
    l.shared.pending = null;
    var s = a,
      c = s.next;
    (s.next = null), o === null ? (i = c) : (o.next = c), (o = s);
    var g = e.alternate;
    g !== null &&
      ((g = g.updateQueue),
      (a = g.lastBaseUpdate),
      a !== o &&
        (a === null ? (g.firstBaseUpdate = c) : (a.next = c),
        (g.lastBaseUpdate = s)));
  }
  if (i !== null) {
    var m = l.baseState;
    (o = 0), (g = c = s = null), (a = i);
    do {
      var p = a.lane,
        v = a.eventTime;
      if ((r & p) === p) {
        g !== null &&
          (g = g.next =
            {
              eventTime: v,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var S = e,
            w = a;
          switch (((p = t), (v = n), w.tag)) {
            case 1:
              if (((S = w.payload), typeof S == "function")) {
                m = S.call(v, m, p);
                break e;
              }
              m = S;
              break e;
            case 3:
              S.flags = (S.flags & -65537) | 128;
            case 0:
              if (
                ((S = w.payload),
                (p = typeof S == "function" ? S.call(v, m, p) : S),
                p == null)
              )
                break e;
              m = le({}, m, p);
              break e;
            case 2:
              Ft = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (p = l.effects),
          p === null ? (l.effects = [a]) : p.push(a));
      } else
        (v = {
          eventTime: v,
          lane: p,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          g === null ? ((c = g = v), (s = m)) : (g = g.next = v),
          (o |= p);
      if (((a = a.next), a === null)) {
        if (((a = l.shared.pending), a === null)) break;
        (p = a),
          (a = p.next),
          (p.next = null),
          (l.lastBaseUpdate = p),
          (l.shared.pending = null);
      }
    } while (1);
    if (
      (g === null && (s = m),
      (l.baseState = s),
      (l.firstBaseUpdate = c),
      (l.lastBaseUpdate = g),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (o |= l.lane), (l = l.next);
      while (l !== t);
    } else i === null && (l.shared.lanes = 0);
    (dn |= o), (e.lanes = o), (e.memoizedState = m);
  }
}
function Xs(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(x(191, l));
        l.call(r);
      }
    }
}
var Jc = new Yu.Component().refs;
function Bo(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : le({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var fi = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? mn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = De(),
      l = Kt(e),
      i = xt(r, l);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = $t(e, i, l)),
      t !== null && (ot(t, e, l, r), wl(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = De(),
      l = Kt(e),
      i = xt(r, l);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = $t(e, i, l)),
      t !== null && (ot(t, e, l, r), wl(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = De(),
      r = Kt(e),
      l = xt(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = $t(e, l, r)),
      t !== null && (ot(t, e, r, n), wl(t, e, r));
  },
};
function Zs(e, t, n, r, l, i, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, o)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Dr(n, r) || !Dr(l, i)
      : !0
  );
}
function Xc(e, t, n) {
  var r = !1,
    l = Jt,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = Ze(i))
      : ((l = Be(t) ? un : Le.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? $n(e, l) : Jt)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = fi),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function qs(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && fi.enqueueReplaceState(t, t.state, null);
}
function jo(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = Jc), Da(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (l.context = Ze(i))
    : ((i = Be(t) ? un : Le.current), (l.context = $n(e, i))),
    (l.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (Bo(e, t, i, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && fi.enqueueReplaceState(l, l.state, null),
      Hl(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function or(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(x(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(x(147, e));
      var l = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (o) {
            var a = l.refs;
            a === Jc && (a = l.refs = {}),
              o === null ? delete a[i] : (a[i] = o);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(x(284));
    if (!n._owner) throw Error(x(290, e));
  }
  return e;
}
function ul(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      x(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function bs(e) {
  var t = e._init;
  return t(e._payload);
}
function Zc(e) {
  function t(f, u) {
    if (e) {
      var d = f.deletions;
      d === null ? ((f.deletions = [u]), (f.flags |= 16)) : d.push(u);
    }
  }
  function n(f, u) {
    if (!e) return null;
    for (; u !== null; ) t(f, u), (u = u.sibling);
    return null;
  }
  function r(f, u) {
    for (f = new Map(); u !== null; )
      u.key !== null ? f.set(u.key, u) : f.set(u.index, u), (u = u.sibling);
    return f;
  }
  function l(f, u) {
    return (f = Qt(f, u)), (f.index = 0), (f.sibling = null), f;
  }
  function i(f, u, d) {
    return (
      (f.index = d),
      e
        ? ((d = f.alternate),
          d !== null
            ? ((d = d.index), d < u ? ((f.flags |= 2), u) : d)
            : ((f.flags |= 2), u))
        : ((f.flags |= 1048576), u)
    );
  }
  function o(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function a(f, u, d, k) {
    return u === null || u.tag !== 6
      ? ((u = Yi(d, f.mode, k)), (u.return = f), u)
      : ((u = l(u, d)), (u.return = f), u);
  }
  function s(f, u, d, k) {
    var C = d.type;
    return C === xn
      ? g(f, u, d.props.children, k, d.key)
      : u !== null &&
        (u.elementType === C ||
          (typeof C == "object" &&
            C !== null &&
            C.$$typeof === Dt &&
            bs(C) === u.type))
      ? ((k = l(u, d.props)), (k.ref = or(f, u, d)), (k.return = f), k)
      : ((k = _l(d.type, d.key, d.props, null, f.mode, k)),
        (k.ref = or(f, u, d)),
        (k.return = f),
        k);
  }
  function c(f, u, d, k) {
    return u === null ||
      u.tag !== 4 ||
      u.stateNode.containerInfo !== d.containerInfo ||
      u.stateNode.implementation !== d.implementation
      ? ((u = Gi(d, f.mode, k)), (u.return = f), u)
      : ((u = l(u, d.children || [])), (u.return = f), u);
  }
  function g(f, u, d, k, C) {
    return u === null || u.tag !== 7
      ? ((u = sn(d, f.mode, k, C)), (u.return = f), u)
      : ((u = l(u, d)), (u.return = f), u);
  }
  function m(f, u, d) {
    if ((typeof u == "string" && u !== "") || typeof u == "number")
      return (u = Yi("" + u, f.mode, d)), (u.return = f), u;
    if (typeof u == "object" && u !== null) {
      switch (u.$$typeof) {
        case qr:
          return (
            (d = _l(u.type, u.key, u.props, null, f.mode, d)),
            (d.ref = or(f, null, u)),
            (d.return = f),
            d
          );
        case En:
          return (u = Gi(u, f.mode, d)), (u.return = f), u;
        case Dt:
          var k = u._init;
          return m(f, k(u._payload), d);
      }
      if (fr(u) || tr(u))
        return (u = sn(u, f.mode, d, null)), (u.return = f), u;
      ul(f, u);
    }
    return null;
  }
  function p(f, u, d, k) {
    var C = u !== null ? u.key : null;
    if ((typeof d == "string" && d !== "") || typeof d == "number")
      return C !== null ? null : a(f, u, "" + d, k);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case qr:
          return d.key === C ? s(f, u, d, k) : null;
        case En:
          return d.key === C ? c(f, u, d, k) : null;
        case Dt:
          return (C = d._init), p(f, u, C(d._payload), k);
      }
      if (fr(d) || tr(d)) return C !== null ? null : g(f, u, d, k, null);
      ul(f, d);
    }
    return null;
  }
  function v(f, u, d, k, C) {
    if ((typeof k == "string" && k !== "") || typeof k == "number")
      return (f = f.get(d) || null), a(u, f, "" + k, C);
    if (typeof k == "object" && k !== null) {
      switch (k.$$typeof) {
        case qr:
          return (f = f.get(k.key === null ? d : k.key) || null), s(u, f, k, C);
        case En:
          return (f = f.get(k.key === null ? d : k.key) || null), c(u, f, k, C);
        case Dt:
          var F = k._init;
          return v(f, u, d, F(k._payload), C);
      }
      if (fr(k) || tr(k)) return (f = f.get(d) || null), g(u, f, k, C, null);
      ul(u, k);
    }
    return null;
  }
  function S(f, u, d, k) {
    for (
      var C = null, F = null, O = u, M = (u = 0), K = null;
      O !== null && M < d.length;
      M++
    ) {
      O.index > M ? ((K = O), (O = null)) : (K = O.sibling);
      var U = p(f, O, d[M], k);
      if (U === null) {
        O === null && (O = K);
        break;
      }
      e && O && U.alternate === null && t(f, O),
        (u = i(U, u, M)),
        F === null ? (C = U) : (F.sibling = U),
        (F = U),
        (O = K);
    }
    if (M === d.length) return n(f, O), te && bt(f, M), C;
    if (O === null) {
      for (; M < d.length; M++)
        (O = m(f, d[M], k)),
          O !== null &&
            ((u = i(O, u, M)), F === null ? (C = O) : (F.sibling = O), (F = O));
      return te && bt(f, M), C;
    }
    for (O = r(f, O); M < d.length; M++)
      (K = v(O, f, M, d[M], k)),
        K !== null &&
          (e && K.alternate !== null && O.delete(K.key === null ? M : K.key),
          (u = i(K, u, M)),
          F === null ? (C = K) : (F.sibling = K),
          (F = K));
    return (
      e &&
        O.forEach(function (ae) {
          return t(f, ae);
        }),
      te && bt(f, M),
      C
    );
  }
  function w(f, u, d, k) {
    var C = tr(d);
    if (typeof C != "function") throw Error(x(150));
    if (((d = C.call(d)), d == null)) throw Error(x(151));
    for (
      var F = (C = null), O = u, M = (u = 0), K = null, U = d.next();
      O !== null && !U.done;
      M++, U = d.next()
    ) {
      O.index > M ? ((K = O), (O = null)) : (K = O.sibling);
      var ae = p(f, O, U.value, k);
      if (ae === null) {
        O === null && (O = K);
        break;
      }
      e && O && ae.alternate === null && t(f, O),
        (u = i(ae, u, M)),
        F === null ? (C = ae) : (F.sibling = ae),
        (F = ae),
        (O = K);
    }
    if (U.done) return n(f, O), te && bt(f, M), C;
    if (O === null) {
      for (; !U.done; M++, U = d.next())
        (U = m(f, U.value, k)),
          U !== null &&
            ((u = i(U, u, M)), F === null ? (C = U) : (F.sibling = U), (F = U));
      return te && bt(f, M), C;
    }
    for (O = r(f, O); !U.done; M++, U = d.next())
      (U = v(O, f, M, U.value, k)),
        U !== null &&
          (e && U.alternate !== null && O.delete(U.key === null ? M : U.key),
          (u = i(U, u, M)),
          F === null ? (C = U) : (F.sibling = U),
          (F = U));
    return (
      e &&
        O.forEach(function (H) {
          return t(f, H);
        }),
      te && bt(f, M),
      C
    );
  }
  function T(f, u, d, k) {
    if (
      (typeof d == "object" &&
        d !== null &&
        d.type === xn &&
        d.key === null &&
        (d = d.props.children),
      typeof d == "object" && d !== null)
    ) {
      switch (d.$$typeof) {
        case qr:
          e: {
            for (var C = d.key, F = u; F !== null; ) {
              if (F.key === C) {
                if (((C = d.type), C === xn)) {
                  if (F.tag === 7) {
                    n(f, F.sibling),
                      (u = l(F, d.props.children)),
                      (u.return = f),
                      (f = u);
                    break e;
                  }
                } else if (
                  F.elementType === C ||
                  (typeof C == "object" &&
                    C !== null &&
                    C.$$typeof === Dt &&
                    bs(C) === F.type)
                ) {
                  n(f, F.sibling),
                    (u = l(F, d.props)),
                    (u.ref = or(f, F, d)),
                    (u.return = f),
                    (f = u);
                  break e;
                }
                n(f, F);
                break;
              } else t(f, F);
              F = F.sibling;
            }
            d.type === xn
              ? ((u = sn(d.props.children, f.mode, k, d.key)),
                (u.return = f),
                (f = u))
              : ((k = _l(d.type, d.key, d.props, null, f.mode, k)),
                (k.ref = or(f, u, d)),
                (k.return = f),
                (f = k));
          }
          return o(f);
        case En:
          e: {
            for (F = d.key; u !== null; ) {
              if (u.key === F)
                if (
                  u.tag === 4 &&
                  u.stateNode.containerInfo === d.containerInfo &&
                  u.stateNode.implementation === d.implementation
                ) {
                  n(f, u.sibling),
                    (u = l(u, d.children || [])),
                    (u.return = f),
                    (f = u);
                  break e;
                } else {
                  n(f, u);
                  break;
                }
              else t(f, u);
              u = u.sibling;
            }
            (u = Gi(d, f.mode, k)), (u.return = f), (f = u);
          }
          return o(f);
        case Dt:
          return (F = d._init), T(f, u, F(d._payload), k);
      }
      if (fr(d)) return S(f, u, d, k);
      if (tr(d)) return w(f, u, d, k);
      ul(f, d);
    }
    return (typeof d == "string" && d !== "") || typeof d == "number"
      ? ((d = "" + d),
        u !== null && u.tag === 6
          ? (n(f, u.sibling), (u = l(u, d)), (u.return = f), (f = u))
          : (n(f, u), (u = Yi(d, f.mode, k)), (u.return = f), (f = u)),
        o(f))
      : n(f, u);
  }
  return T;
}
var Kn = Zc(!0),
  qc = Zc(!1),
  Qr = {},
  pt = Zt(Qr),
  zr = Zt(Qr),
  Mr = Zt(Qr);
function ln(e) {
  if (e === Qr) throw Error(x(174));
  return e;
}
function Fa(e, t) {
  switch ((G(Mr, t), G(zr, e), G(pt, Qr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : yo(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = yo(t, e));
  }
  X(pt), G(pt, t);
}
function Qn() {
  X(pt), X(zr), X(Mr);
}
function bc(e) {
  ln(Mr.current);
  var t = ln(pt.current),
    n = yo(t, e.type);
  t !== n && (G(zr, e), G(pt, n));
}
function Oa(e) {
  zr.current === e && (X(pt), X(zr));
}
var ne = Zt(0);
function $l(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
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
var Vi = [];
function Aa() {
  for (var e = 0; e < Vi.length; e++)
    Vi[e]._workInProgressVersionPrimary = null;
  Vi.length = 0;
}
var kl = Lt.ReactCurrentDispatcher,
  Hi = Lt.ReactCurrentBatchConfig,
  fn = 0,
  re = null,
  he = null,
  ye = null,
  Wl = !1,
  wr = !1,
  Ir = 0,
  pp = 0;
function _e() {
  throw Error(x(321));
}
function za(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!at(e[n], t[n])) return !1;
  return !0;
}
function Ma(e, t, n, r, l, i) {
  if (
    ((fn = i),
    (re = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (kl.current = e === null || e.memoizedState === null ? vp : wp),
    (e = n(r, l)),
    wr)
  ) {
    i = 0;
    do {
      if (((wr = !1), (Ir = 0), 25 <= i)) throw Error(x(301));
      (i += 1),
        (ye = he = null),
        (t.updateQueue = null),
        (kl.current = kp),
        (e = n(r, l));
    } while (wr);
  }
  if (
    ((kl.current = Kl),
    (t = he !== null && he.next !== null),
    (fn = 0),
    (ye = he = re = null),
    (Wl = !1),
    t)
  )
    throw Error(x(300));
  return e;
}
function Ia() {
  var e = Ir !== 0;
  return (Ir = 0), e;
}
function ct() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return ye === null ? (re.memoizedState = ye = e) : (ye = ye.next = e), ye;
}
function qe() {
  if (he === null) {
    var e = re.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = he.next;
  var t = ye === null ? re.memoizedState : ye.next;
  if (t !== null) (ye = t), (he = e);
  else {
    if (e === null) throw Error(x(310));
    (he = e),
      (e = {
        memoizedState: he.memoizedState,
        baseState: he.baseState,
        baseQueue: he.baseQueue,
        queue: he.queue,
        next: null,
      }),
      ye === null ? (re.memoizedState = ye = e) : (ye = ye.next = e);
  }
  return ye;
}
function Br(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function $i(e) {
  var t = qe(),
    n = t.queue;
  if (n === null) throw Error(x(311));
  n.lastRenderedReducer = e;
  var r = he,
    l = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (l !== null) {
      var o = l.next;
      (l.next = i.next), (i.next = o);
    }
    (r.baseQueue = l = i), (n.pending = null);
  }
  if (l !== null) {
    (i = l.next), (r = r.baseState);
    var a = (o = null),
      s = null,
      c = i;
    do {
      var g = c.lane;
      if ((fn & g) === g)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action));
      else {
        var m = {
          lane: g,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        s === null ? ((a = s = m), (o = r)) : (s = s.next = m),
          (re.lanes |= g),
          (dn |= g);
      }
      c = c.next;
    } while (c !== null && c !== i);
    s === null ? (o = r) : (s.next = a),
      at(r, t.memoizedState) || (Me = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = s),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (i = l.lane), (re.lanes |= i), (dn |= i), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Wi(e) {
  var t = qe(),
    n = t.queue;
  if (n === null) throw Error(x(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    i = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var o = (l = l.next);
    do (i = e(i, o.action)), (o = o.next);
    while (o !== l);
    at(i, t.memoizedState) || (Me = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function ef() {}
function tf(e, t) {
  var n = re,
    r = qe(),
    l = t(),
    i = !at(r.memoizedState, l);
  if (
    (i && ((r.memoizedState = l), (Me = !0)),
    (r = r.queue),
    Ba(lf.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (ye !== null && ye.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      jr(9, rf.bind(null, n, r, l, t), void 0, null),
      ve === null)
    )
      throw Error(x(349));
    fn & 30 || nf(n, t, l);
  }
  return l;
}
function nf(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = re.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (re.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function rf(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), of(t) && af(e);
}
function lf(e, t, n) {
  return n(function () {
    of(t) && af(e);
  });
}
function of(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !at(e, n);
  } catch {
    return !0;
  }
}
function af(e) {
  var t = Nt(e, 1);
  t !== null && ot(t, e, 1, -1);
}
function eu(e) {
  var t = ct();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Br,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = yp.bind(null, re, e)),
    [t.memoizedState, e]
  );
}
function jr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = re.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (re.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function sf() {
  return qe().memoizedState;
}
function Sl(e, t, n, r) {
  var l = ct();
  (re.flags |= e),
    (l.memoizedState = jr(1 | t, n, void 0, r === void 0 ? null : r));
}
function di(e, t, n, r) {
  var l = qe();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (he !== null) {
    var o = he.memoizedState;
    if (((i = o.destroy), r !== null && za(r, o.deps))) {
      l.memoizedState = jr(t, n, i, r);
      return;
    }
  }
  (re.flags |= e), (l.memoizedState = jr(1 | t, n, i, r));
}
function tu(e, t) {
  return Sl(8390656, 8, e, t);
}
function Ba(e, t) {
  return di(2048, 8, e, t);
}
function uf(e, t) {
  return di(4, 2, e, t);
}
function cf(e, t) {
  return di(4, 4, e, t);
}
function ff(e, t) {
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
function df(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), di(4, 4, ff.bind(null, t, e), n)
  );
}
function ja() {}
function hf(e, t) {
  var n = qe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && za(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function pf(e, t) {
  var n = qe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && za(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function mf(e, t, n) {
  return fn & 21
    ? (at(n, t) || ((n = yc()), (re.lanes |= n), (dn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Me = !0)), (e.memoizedState = n));
}
function mp(e, t) {
  var n = Q;
  (Q = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Hi.transition;
  Hi.transition = {};
  try {
    e(!1), t();
  } finally {
    (Q = n), (Hi.transition = r);
  }
}
function gf() {
  return qe().memoizedState;
}
function gp(e, t, n) {
  var r = Kt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    yf(e))
  )
    vf(t, n);
  else if (((n = Yc(e, t, n, r)), n !== null)) {
    var l = De();
    ot(n, e, r, l), wf(n, t, r);
  }
}
function yp(e, t, n) {
  var r = Kt(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (yf(e)) vf(t, l);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var o = t.lastRenderedState,
          a = i(o, n);
        if (((l.hasEagerState = !0), (l.eagerState = a), at(a, o))) {
          var s = t.interleaved;
          s === null
            ? ((l.next = l), Ra(t))
            : ((l.next = s.next), (s.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = Yc(e, t, l, r)),
      n !== null && ((l = De()), ot(n, e, r, l), wf(n, t, r));
  }
}
function yf(e) {
  var t = e.alternate;
  return e === re || (t !== null && t === re);
}
function vf(e, t) {
  wr = Wl = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function wf(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), ga(e, n);
  }
}
var Kl = {
    readContext: Ze,
    useCallback: _e,
    useContext: _e,
    useEffect: _e,
    useImperativeHandle: _e,
    useInsertionEffect: _e,
    useLayoutEffect: _e,
    useMemo: _e,
    useReducer: _e,
    useRef: _e,
    useState: _e,
    useDebugValue: _e,
    useDeferredValue: _e,
    useTransition: _e,
    useMutableSource: _e,
    useSyncExternalStore: _e,
    useId: _e,
    unstable_isNewReconciler: !1,
  },
  vp = {
    readContext: Ze,
    useCallback: function (e, t) {
      return (ct().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Ze,
    useEffect: tu,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Sl(4194308, 4, ff.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Sl(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Sl(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = ct();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = ct();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = gp.bind(null, re, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = ct();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: eu,
    useDebugValue: ja,
    useDeferredValue: function (e) {
      return (ct().memoizedState = e);
    },
    useTransition: function () {
      var e = eu(!1),
        t = e[0];
      return (e = mp.bind(null, e[1])), (ct().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = re,
        l = ct();
      if (te) {
        if (n === void 0) throw Error(x(407));
        n = n();
      } else {
        if (((n = t()), ve === null)) throw Error(x(349));
        fn & 30 || nf(r, t, n);
      }
      l.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (l.queue = i),
        tu(lf.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        jr(9, rf.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = ct(),
        t = ve.identifierPrefix;
      if (te) {
        var n = Et,
          r = St;
        (n = (r & ~(1 << (32 - it(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Ir++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = pp++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  wp = {
    readContext: Ze,
    useCallback: hf,
    useContext: Ze,
    useEffect: Ba,
    useImperativeHandle: df,
    useInsertionEffect: uf,
    useLayoutEffect: cf,
    useMemo: pf,
    useReducer: $i,
    useRef: sf,
    useState: function () {
      return $i(Br);
    },
    useDebugValue: ja,
    useDeferredValue: function (e) {
      var t = qe();
      return mf(t, he.memoizedState, e);
    },
    useTransition: function () {
      var e = $i(Br)[0],
        t = qe().memoizedState;
      return [e, t];
    },
    useMutableSource: ef,
    useSyncExternalStore: tf,
    useId: gf,
    unstable_isNewReconciler: !1,
  },
  kp = {
    readContext: Ze,
    useCallback: hf,
    useContext: Ze,
    useEffect: Ba,
    useImperativeHandle: df,
    useInsertionEffect: uf,
    useLayoutEffect: cf,
    useMemo: pf,
    useReducer: Wi,
    useRef: sf,
    useState: function () {
      return Wi(Br);
    },
    useDebugValue: ja,
    useDeferredValue: function (e) {
      var t = qe();
      return he === null ? (t.memoizedState = e) : mf(t, he.memoizedState, e);
    },
    useTransition: function () {
      var e = Wi(Br)[0],
        t = qe().memoizedState;
      return [e, t];
    },
    useMutableSource: ef,
    useSyncExternalStore: tf,
    useId: gf,
    unstable_isNewReconciler: !1,
  };
function Yn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Gd(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (i) {
    l =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function Ki(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Uo(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Sp = typeof WeakMap == "function" ? WeakMap : Map;
function kf(e, t, n) {
  (n = xt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Yl || ((Yl = !0), (Xo = r)), Uo(e, t);
    }),
    n
  );
}
function Sf(e, t, n) {
  (n = xt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        Uo(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        Uo(e, t),
          typeof r != "function" &&
            (Wt === null ? (Wt = new Set([this])) : Wt.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function nu(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Sp();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = zp.bind(null, e, t, n)), t.then(e, e));
}
function ru(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function lu(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = xt(-1, 1)), (t.tag = 2), $t(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Ep = Lt.ReactCurrentOwner,
  Me = !1;
function Te(e, t, n, r) {
  t.child = e === null ? qc(t, null, n, r) : Kn(t, e.child, n, r);
}
function iu(e, t, n, r, l) {
  n = n.render;
  var i = t.ref;
  return (
    jn(t, l),
    (r = Ma(e, t, n, r, i, l)),
    (n = Ia()),
    e !== null && !Me
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Pt(e, t, l))
      : (te && n && Ca(t), (t.flags |= 1), Te(e, t, r, l), t.child)
  );
}
function ou(e, t, n, r, l) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !Ya(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), Ef(e, t, i, r, l))
      : ((e = _l(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & l))) {
    var o = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Dr), n(o, r) && e.ref === t.ref)
    )
      return Pt(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = Qt(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Ef(e, t, n, r, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Dr(i, r) && e.ref === t.ref)
      if (((Me = !1), (t.pendingProps = r = i), (e.lanes & l) !== 0))
        e.flags & 131072 && (Me = !0);
      else return (t.lanes = e.lanes), Pt(e, t, l);
  }
  return Vo(e, t, n, r, l);
}
function xf(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        G(On, Ue),
        (Ue |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          G(On, Ue),
          (Ue |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        G(On, Ue),
        (Ue |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      G(On, Ue),
      (Ue |= r);
  return Te(e, t, l, n), t.child;
}
function Cf(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Vo(e, t, n, r, l) {
  var i = Be(n) ? un : Le.current;
  return (
    (i = $n(t, i)),
    jn(t, l),
    (n = Ma(e, t, n, r, i, l)),
    (r = Ia()),
    e !== null && !Me
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Pt(e, t, l))
      : (te && r && Ca(t), (t.flags |= 1), Te(e, t, n, l), t.child)
  );
}
function au(e, t, n, r, l) {
  if (Be(n)) {
    var i = !0;
    Il(t);
  } else i = !1;
  if ((jn(t, l), t.stateNode === null))
    El(e, t), Xc(t, n, r), jo(t, n, r, l), (r = !0);
  else if (e === null) {
    var o = t.stateNode,
      a = t.memoizedProps;
    o.props = a;
    var s = o.context,
      c = n.contextType;
    typeof c == "object" && c !== null
      ? (c = Ze(c))
      : ((c = Be(n) ? un : Le.current), (c = $n(t, c)));
    var g = n.getDerivedStateFromProps,
      m =
        typeof g == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    m ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((a !== r || s !== c) && qs(t, o, r, c)),
      (Ft = !1);
    var p = t.memoizedState;
    (o.state = p),
      Hl(t, r, o, l),
      (s = t.memoizedState),
      a !== r || p !== s || Ie.current || Ft
        ? (typeof g == "function" && (Bo(t, n, g, r), (s = t.memoizedState)),
          (a = Ft || Zs(t, n, a, r, p, s, c))
            ? (m ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (o.props = r),
          (o.state = s),
          (o.context = c),
          (r = a))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (o = t.stateNode),
      Gc(e, t),
      (a = t.memoizedProps),
      (c = t.type === t.elementType ? a : tt(t.type, a)),
      (o.props = c),
      (m = t.pendingProps),
      (p = o.context),
      (s = n.contextType),
      typeof s == "object" && s !== null
        ? (s = Ze(s))
        : ((s = Be(n) ? un : Le.current), (s = $n(t, s)));
    var v = n.getDerivedStateFromProps;
    (g =
      typeof v == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((a !== m || p !== s) && qs(t, o, r, s)),
      (Ft = !1),
      (p = t.memoizedState),
      (o.state = p),
      Hl(t, r, o, l);
    var S = t.memoizedState;
    a !== m || p !== S || Ie.current || Ft
      ? (typeof v == "function" && (Bo(t, n, v, r), (S = t.memoizedState)),
        (c = Ft || Zs(t, n, c, r, p, S, s) || !1)
          ? (g ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, S, s),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, S, s)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (a === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = S)),
        (o.props = r),
        (o.state = S),
        (o.context = s),
        (r = c))
      : (typeof o.componentDidUpdate != "function" ||
          (a === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Ho(e, t, n, r, i, l);
}
function Ho(e, t, n, r, l, i) {
  Cf(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return l && Qs(t, n, !1), Pt(e, t, i);
  (r = t.stateNode), (Ep.current = t);
  var a =
    o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = Kn(t, e.child, null, i)), (t.child = Kn(t, null, a, i)))
      : Te(e, t, a, i),
    (t.memoizedState = r.state),
    l && Qs(t, n, !0),
    t.child
  );
}
function _f(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Ks(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Ks(e, t.context, !1),
    Fa(e, t.containerInfo);
}
function su(e, t, n, r, l) {
  return Wn(), Na(l), (t.flags |= 256), Te(e, t, n, r), t.child;
}
var $o = { dehydrated: null, treeContext: null, retryLane: 0 };
function Wo(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Nf(e, t, n) {
  var r = t.pendingProps,
    l = ne.current,
    i = !1,
    o = (t.flags & 128) !== 0,
    a;
  if (
    ((a = o) ||
      (a = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    a
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    G(ne, l & 1),
    e === null)
  )
    return (
      Mo(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = o))
                : (i = mi(o, r, 0, null)),
              (e = sn(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = Wo(n)),
              (t.memoizedState = $o),
              e)
            : Ua(t, o))
    );
  if (((l = e.memoizedState), l !== null && ((a = l.dehydrated), a !== null)))
    return xp(e, t, o, r, a, l, n);
  if (i) {
    (i = r.fallback), (o = t.mode), (l = e.child), (a = l.sibling);
    var s = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (t.deletions = null))
        : ((r = Qt(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      a !== null ? (i = Qt(a, i)) : ((i = sn(i, o, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? Wo(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (i.memoizedState = o),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = $o),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = Qt(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Ua(e, t) {
  return (
    (t = mi({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function cl(e, t, n, r) {
  return (
    r !== null && Na(r),
    Kn(t, e.child, null, n),
    (e = Ua(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function xp(e, t, n, r, l, i, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Ki(Error(x(422)))), cl(e, t, o, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (l = t.mode),
        (r = mi({ mode: "visible", children: r.children }, l, 0, null)),
        (i = sn(i, l, o, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && Kn(t, e.child, null, o),
        (t.child.memoizedState = Wo(o)),
        (t.memoizedState = $o),
        i);
  if (!(t.mode & 1)) return cl(e, t, o, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (i = Error(x(419))), (r = Ki(i, r, void 0)), cl(e, t, o, r);
  }
  if (((a = (o & e.childLanes) !== 0), Me || a)) {
    if (((r = ve), r !== null)) {
      switch (o & -o) {
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
      (l = l & (r.suspendedLanes | o) ? 0 : l),
        l !== 0 &&
          l !== i.retryLane &&
          ((i.retryLane = l), Nt(e, l), ot(r, e, l, -1));
    }
    return Qa(), (r = Ki(Error(x(421)))), cl(e, t, o, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Mp.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (Ve = Ht(l.nextSibling)),
      (He = t),
      (te = !0),
      (rt = null),
      e !== null &&
        ((Ye[Ge++] = St),
        (Ye[Ge++] = Et),
        (Ye[Ge++] = cn),
        (St = e.id),
        (Et = e.overflow),
        (cn = t)),
      (t = Ua(t, r.children)),
      (t.flags |= 4096),
      t);
}
function uu(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Io(e.return, t, n);
}
function Qi(e, t, n, r, l) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = l));
}
function Pf(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    i = r.tail;
  if ((Te(e, t, r.children, n), (r = ne.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && uu(e, n, t);
        else if (e.tag === 19) uu(e, n, t);
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
  if ((G(ne, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && $l(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          Qi(t, !1, l, n, i);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && $l(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        Qi(t, !0, n, null, i);
        break;
      case "together":
        Qi(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function El(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Pt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (dn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(x(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Qt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Qt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Cp(e, t, n) {
  switch (t.tag) {
    case 3:
      _f(t), Wn();
      break;
    case 5:
      bc(t);
      break;
    case 1:
      Be(t.type) && Il(t);
      break;
    case 4:
      Fa(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      G(Ul, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (G(ne, ne.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Nf(e, t, n)
          : (G(ne, ne.current & 1),
            (e = Pt(e, t, n)),
            e !== null ? e.sibling : null);
      G(ne, ne.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Pf(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        G(ne, ne.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), xf(e, t, n);
  }
  return Pt(e, t, n);
}
var Lf, Ko, Tf, Rf;
Lf = function (e, t) {
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
Ko = function () {};
Tf = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), ln(pt.current);
    var i = null;
    switch (n) {
      case "input":
        (l = ho(e, l)), (r = ho(e, r)), (i = []);
        break;
      case "select":
        (l = le({}, l, { value: void 0 })),
          (r = le({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (l = go(e, l)), (r = go(e, r)), (i = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = zl);
    }
    vo(n, r);
    var o;
    n = null;
    for (c in l)
      if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null)
        if (c === "style") {
          var a = l[c];
          for (o in a) a.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (Cr.hasOwnProperty(c)
              ? i || (i = [])
              : (i = i || []).push(c, null));
    for (c in r) {
      var s = r[c];
      if (
        ((a = l != null ? l[c] : void 0),
        r.hasOwnProperty(c) && s !== a && (s != null || a != null))
      )
        if (c === "style")
          if (a) {
            for (o in a)
              !a.hasOwnProperty(o) ||
                (s && s.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in s)
              s.hasOwnProperty(o) &&
                a[o] !== s[o] &&
                (n || (n = {}), (n[o] = s[o]));
          } else n || (i || (i = []), i.push(c, n)), (n = s);
        else
          c === "dangerouslySetInnerHTML"
            ? ((s = s ? s.__html : void 0),
              (a = a ? a.__html : void 0),
              s != null && a !== s && (i = i || []).push(c, s))
            : c === "children"
            ? (typeof s != "string" && typeof s != "number") ||
              (i = i || []).push(c, "" + s)
            : c !== "suppressContentEditableWarning" &&
              c !== "suppressHydrationWarning" &&
              (Cr.hasOwnProperty(c)
                ? (s != null && c === "onScroll" && J("scroll", e),
                  i || a === s || (i = []))
                : (i = i || []).push(c, s));
    }
    n && (i = i || []).push("style", n);
    var c = i;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
Rf = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function ar(e, t) {
  if (!te)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Ne(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function _p(e, t, n) {
  var r = t.pendingProps;
  switch ((_a(t), t.tag)) {
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
      return Ne(t), null;
    case 1:
      return Be(t.type) && Ml(), Ne(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Qn(),
        X(Ie),
        X(Le),
        Aa(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (sl(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), rt !== null && (bo(rt), (rt = null)))),
        Ko(e, t),
        Ne(t),
        null
      );
    case 5:
      Oa(t);
      var l = ln(Mr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Tf(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(x(166));
          return Ne(t), null;
        }
        if (((e = ln(pt.current)), sl(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[ft] = t), (r[Ar] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              J("cancel", r), J("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              J("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < hr.length; l++) J(hr[l], r);
              break;
            case "source":
              J("error", r);
              break;
            case "img":
            case "image":
            case "link":
              J("error", r), J("load", r);
              break;
            case "details":
              J("toggle", r);
              break;
            case "input":
              vs(r, i), J("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                J("invalid", r);
              break;
            case "textarea":
              ks(r, i), J("invalid", r);
          }
          vo(n, i), (l = null);
          for (var o in i)
            if (i.hasOwnProperty(o)) {
              var a = i[o];
              o === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (i.suppressHydrationWarning !== !0 &&
                      al(r.textContent, a, e),
                    (l = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (i.suppressHydrationWarning !== !0 &&
                      al(r.textContent, a, e),
                    (l = ["children", "" + a]))
                : Cr.hasOwnProperty(o) &&
                  a != null &&
                  o === "onScroll" &&
                  J("scroll", r);
            }
          switch (n) {
            case "input":
              br(r), ws(r, i, !0);
              break;
            case "textarea":
              br(r), Ss(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = zl);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (o = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = nc(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = o.createElement(n, { is: r.is }))
                : ((e = o.createElement(n)),
                  n === "select" &&
                    ((o = e),
                    r.multiple
                      ? (o.multiple = !0)
                      : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[ft] = t),
            (e[Ar] = r),
            Lf(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = wo(n, r)), n)) {
              case "dialog":
                J("cancel", e), J("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                J("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < hr.length; l++) J(hr[l], e);
                l = r;
                break;
              case "source":
                J("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                J("error", e), J("load", e), (l = r);
                break;
              case "details":
                J("toggle", e), (l = r);
                break;
              case "input":
                vs(e, r), (l = ho(e, r)), J("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = le({}, r, { value: void 0 })),
                  J("invalid", e);
                break;
              case "textarea":
                ks(e, r), (l = go(e, r)), J("invalid", e);
                break;
              default:
                l = r;
            }
            vo(n, l), (a = l);
            for (i in a)
              if (a.hasOwnProperty(i)) {
                var s = a[i];
                i === "style"
                  ? ic(e, s)
                  : i === "dangerouslySetInnerHTML"
                  ? ((s = s ? s.__html : void 0), s != null && rc(e, s))
                  : i === "children"
                  ? typeof s == "string"
                    ? (n !== "textarea" || s !== "") && _r(e, s)
                    : typeof s == "number" && _r(e, "" + s)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (Cr.hasOwnProperty(i)
                      ? s != null && i === "onScroll" && J("scroll", e)
                      : s != null && ca(e, i, s, o));
              }
            switch (n) {
              case "input":
                br(e), ws(e, r, !1);
                break;
              case "textarea":
                br(e), Ss(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Gt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? zn(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      zn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = zl);
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
      return Ne(t), null;
    case 6:
      if (e && t.stateNode != null) Rf(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(x(166));
        if (((n = ln(Mr.current)), ln(pt.current), sl(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[ft] = t),
            (i = r.nodeValue !== n) && ((e = He), e !== null))
          )
            switch (e.tag) {
              case 3:
                al(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  al(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[ft] = t),
            (t.stateNode = r);
      }
      return Ne(t), null;
    case 13:
      if (
        (X(ne),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (te && Ve !== null && t.mode & 1 && !(t.flags & 128))
          Qc(), Wn(), (t.flags |= 98560), (i = !1);
        else if (((i = sl(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(x(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(x(317));
            i[ft] = t;
          } else
            Wn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Ne(t), (i = !1);
        } else rt !== null && (bo(rt), (rt = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || ne.current & 1 ? pe === 0 && (pe = 3) : Qa())),
          t.updateQueue !== null && (t.flags |= 4),
          Ne(t),
          null);
    case 4:
      return (
        Qn(), Ko(e, t), e === null && Fr(t.stateNode.containerInfo), Ne(t), null
      );
    case 10:
      return Ta(t.type._context), Ne(t), null;
    case 17:
      return Be(t.type) && Ml(), Ne(t), null;
    case 19:
      if ((X(ne), (i = t.memoizedState), i === null)) return Ne(t), null;
      if (((r = (t.flags & 128) !== 0), (o = i.rendering), o === null))
        if (r) ar(i, !1);
        else {
          if (pe !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = $l(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    ar(i, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (o = i.alternate),
                    o === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = o.childLanes),
                        (i.lanes = o.lanes),
                        (i.child = o.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = o.memoizedProps),
                        (i.memoizedState = o.memoizedState),
                        (i.updateQueue = o.updateQueue),
                        (i.type = o.type),
                        (e = o.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return G(ne, (ne.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            ce() > Gn &&
            ((t.flags |= 128), (r = !0), ar(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = $l(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              ar(i, !0),
              i.tail === null && i.tailMode === "hidden" && !o.alternate && !te)
            )
              return Ne(t), null;
          } else
            2 * ce() - i.renderingStartTime > Gn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), ar(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = i.last),
            n !== null ? (n.sibling = o) : (t.child = o),
            (i.last = o));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = ce()),
          (t.sibling = null),
          (n = ne.current),
          G(ne, r ? (n & 1) | 2 : n & 1),
          t)
        : (Ne(t), null);
    case 22:
    case 23:
      return (
        Ka(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Ue & 1073741824 && (Ne(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Ne(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(x(156, t.tag));
}
function Np(e, t) {
  switch ((_a(t), t.tag)) {
    case 1:
      return (
        Be(t.type) && Ml(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Qn(),
        X(Ie),
        X(Le),
        Aa(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Oa(t), null;
    case 13:
      if ((X(ne), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(x(340));
        Wn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return X(ne), null;
    case 4:
      return Qn(), null;
    case 10:
      return Ta(t.type._context), null;
    case 22:
    case 23:
      return Ka(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var fl = !1,
  Pe = !1,
  Pp = typeof WeakSet == "function" ? WeakSet : Set,
  D = null;
function Fn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        oe(e, t, r);
      }
    else n.current = null;
}
function Qo(e, t, n) {
  try {
    n();
  } catch (r) {
    oe(e, t, r);
  }
}
var cu = !1;
function Lp(e, t) {
  if (((To = Fl), (e = Oc()), xa(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            a = -1,
            s = -1,
            c = 0,
            g = 0,
            m = e,
            p = null;
          t: for (;;) {
            for (
              var v;
              m !== n || (l !== 0 && m.nodeType !== 3) || (a = o + l),
                m !== i || (r !== 0 && m.nodeType !== 3) || (s = o + r),
                m.nodeType === 3 && (o += m.nodeValue.length),
                (v = m.firstChild) !== null;

            )
              (p = m), (m = v);
            for (;;) {
              if (m === e) break t;
              if (
                (p === n && ++c === l && (a = o),
                p === i && ++g === r && (s = o),
                (v = m.nextSibling) !== null)
              )
                break;
              (m = p), (p = m.parentNode);
            }
            m = v;
          }
          n = a === -1 || s === -1 ? null : { start: a, end: s };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Ro = { focusedElem: e, selectionRange: n }, Fl = !1, D = t; D !== null; )
    if (((t = D), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (D = e);
    else
      for (; D !== null; ) {
        t = D;
        try {
          var S = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (S !== null) {
                  var w = S.memoizedProps,
                    T = S.memoizedState,
                    f = t.stateNode,
                    u = f.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? w : tt(t.type, w),
                      T
                    );
                  f.__reactInternalSnapshotBeforeUpdate = u;
                }
                break;
              case 3:
                var d = t.stateNode.containerInfo;
                d.nodeType === 1
                  ? (d.textContent = "")
                  : d.nodeType === 9 &&
                    d.documentElement &&
                    d.removeChild(d.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(x(163));
            }
        } catch (k) {
          oe(t, t.return, k);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (D = e);
          break;
        }
        D = t.return;
      }
  return (S = cu), (cu = !1), S;
}
function kr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var i = l.destroy;
        (l.destroy = void 0), i !== void 0 && Qo(t, n, i);
      }
      l = l.next;
    } while (l !== r);
  }
}
function hi(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
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
function Yo(e) {
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
function Df(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Df(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[ft], delete t[Ar], delete t[Oo], delete t[cp], delete t[fp])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Ff(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function fu(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Ff(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Go(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = zl));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Go(e, t, n), e = e.sibling; e !== null; ) Go(e, t, n), (e = e.sibling);
}
function Jo(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Jo(e, t, n), e = e.sibling; e !== null; ) Jo(e, t, n), (e = e.sibling);
}
var ke = null,
  nt = !1;
function Rt(e, t, n) {
  for (n = n.child; n !== null; ) Of(e, t, n), (n = n.sibling);
}
function Of(e, t, n) {
  if (ht && typeof ht.onCommitFiberUnmount == "function")
    try {
      ht.onCommitFiberUnmount(ii, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Pe || Fn(n, t);
    case 6:
      var r = ke,
        l = nt;
      (ke = null),
        Rt(e, t, n),
        (ke = r),
        (nt = l),
        ke !== null &&
          (nt
            ? ((e = ke),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ke.removeChild(n.stateNode));
      break;
    case 18:
      ke !== null &&
        (nt
          ? ((e = ke),
            (n = n.stateNode),
            e.nodeType === 8
              ? ji(e.parentNode, n)
              : e.nodeType === 1 && ji(e, n),
            Tr(e))
          : ji(ke, n.stateNode));
      break;
    case 4:
      (r = ke),
        (l = nt),
        (ke = n.stateNode.containerInfo),
        (nt = !0),
        Rt(e, t, n),
        (ke = r),
        (nt = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Pe &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var i = l,
            o = i.destroy;
          (i = i.tag),
            o !== void 0 && (i & 2 || i & 4) && Qo(n, t, o),
            (l = l.next);
        } while (l !== r);
      }
      Rt(e, t, n);
      break;
    case 1:
      if (
        !Pe &&
        (Fn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          oe(n, t, a);
        }
      Rt(e, t, n);
      break;
    case 21:
      Rt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Pe = (r = Pe) || n.memoizedState !== null), Rt(e, t, n), (Pe = r))
        : Rt(e, t, n);
      break;
    default:
      Rt(e, t, n);
  }
}
function du(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Pp()),
      t.forEach(function (r) {
        var l = Ip.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function et(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var i = e,
          o = t,
          a = o;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (ke = a.stateNode), (nt = !1);
              break e;
            case 3:
              (ke = a.stateNode.containerInfo), (nt = !0);
              break e;
            case 4:
              (ke = a.stateNode.containerInfo), (nt = !0);
              break e;
          }
          a = a.return;
        }
        if (ke === null) throw Error(x(160));
        Of(i, o, l), (ke = null), (nt = !1);
        var s = l.alternate;
        s !== null && (s.return = null), (l.return = null);
      } catch (c) {
        oe(l, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Af(t, e), (t = t.sibling);
}
function Af(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((et(t, e), st(e), r & 4)) {
        try {
          kr(3, e, e.return), hi(3, e);
        } catch (w) {
          oe(e, e.return, w);
        }
        try {
          kr(5, e, e.return);
        } catch (w) {
          oe(e, e.return, w);
        }
      }
      break;
    case 1:
      et(t, e), st(e), r & 512 && n !== null && Fn(n, n.return);
      break;
    case 5:
      if (
        (et(t, e),
        st(e),
        r & 512 && n !== null && Fn(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          _r(l, "");
        } catch (w) {
          oe(e, e.return, w);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var i = e.memoizedProps,
          o = n !== null ? n.memoizedProps : i,
          a = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            a === "input" && i.type === "radio" && i.name != null && ec(l, i),
              wo(a, o);
            var c = wo(a, i);
            for (o = 0; o < s.length; o += 2) {
              var g = s[o],
                m = s[o + 1];
              g === "style"
                ? ic(l, m)
                : g === "dangerouslySetInnerHTML"
                ? rc(l, m)
                : g === "children"
                ? _r(l, m)
                : ca(l, g, m, c);
            }
            switch (a) {
              case "input":
                po(l, i);
                break;
              case "textarea":
                tc(l, i);
                break;
              case "select":
                var p = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!i.multiple;
                var v = i.value;
                v != null
                  ? zn(l, !!i.multiple, v, !1)
                  : p !== !!i.multiple &&
                    (i.defaultValue != null
                      ? zn(l, !!i.multiple, i.defaultValue, !0)
                      : zn(l, !!i.multiple, i.multiple ? [] : "", !1));
            }
            l[Ar] = i;
          } catch (w) {
            oe(e, e.return, w);
          }
      }
      break;
    case 6:
      if ((et(t, e), st(e), r & 4)) {
        if (e.stateNode === null) throw Error(x(162));
        (l = e.stateNode), (i = e.memoizedProps);
        try {
          l.nodeValue = i;
        } catch (w) {
          oe(e, e.return, w);
        }
      }
      break;
    case 3:
      if (
        (et(t, e), st(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Tr(t.containerInfo);
        } catch (w) {
          oe(e, e.return, w);
        }
      break;
    case 4:
      et(t, e), st(e);
      break;
    case 13:
      et(t, e),
        st(e),
        (l = e.child),
        l.flags & 8192 &&
          ((i = l.memoizedState !== null),
          (l.stateNode.isHidden = i),
          !i ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            ($a = ce())),
        r & 4 && du(e);
      break;
    case 22:
      if (
        ((g = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Pe = (c = Pe) || g), et(t, e), (Pe = c)) : et(t, e),
        st(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !g && e.mode & 1)
        )
          for (D = e, g = e.child; g !== null; ) {
            for (m = D = g; D !== null; ) {
              switch (((p = D), (v = p.child), p.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  kr(4, p, p.return);
                  break;
                case 1:
                  Fn(p, p.return);
                  var S = p.stateNode;
                  if (typeof S.componentWillUnmount == "function") {
                    (r = p), (n = p.return);
                    try {
                      (t = r),
                        (S.props = t.memoizedProps),
                        (S.state = t.memoizedState),
                        S.componentWillUnmount();
                    } catch (w) {
                      oe(r, n, w);
                    }
                  }
                  break;
                case 5:
                  Fn(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    pu(m);
                    continue;
                  }
              }
              v !== null ? ((v.return = p), (D = v)) : pu(m);
            }
            g = g.sibling;
          }
        e: for (g = null, m = e; ; ) {
          if (m.tag === 5) {
            if (g === null) {
              g = m;
              try {
                (l = m.stateNode),
                  c
                    ? ((i = l.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((a = m.stateNode),
                      (s = m.memoizedProps.style),
                      (o =
                        s != null && s.hasOwnProperty("display")
                          ? s.display
                          : null),
                      (a.style.display = lc("display", o)));
              } catch (w) {
                oe(e, e.return, w);
              }
            }
          } else if (m.tag === 6) {
            if (g === null)
              try {
                m.stateNode.nodeValue = c ? "" : m.memoizedProps;
              } catch (w) {
                oe(e, e.return, w);
              }
          } else if (
            ((m.tag !== 22 && m.tag !== 23) ||
              m.memoizedState === null ||
              m === e) &&
            m.child !== null
          ) {
            (m.child.return = m), (m = m.child);
            continue;
          }
          if (m === e) break e;
          for (; m.sibling === null; ) {
            if (m.return === null || m.return === e) break e;
            g === m && (g = null), (m = m.return);
          }
          g === m && (g = null), (m.sibling.return = m.return), (m = m.sibling);
        }
      }
      break;
    case 19:
      et(t, e), st(e), r & 4 && du(e);
      break;
    case 21:
      break;
    default:
      et(t, e), st(e);
  }
}
function st(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Ff(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(x(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (_r(l, ""), (r.flags &= -33));
          var i = fu(e);
          Jo(e, i, l);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            a = fu(e);
          Go(e, a, o);
          break;
        default:
          throw Error(x(161));
      }
    } catch (s) {
      oe(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Tp(e, t, n) {
  (D = e), zf(e);
}
function zf(e, t, n) {
  for (var r = (e.mode & 1) !== 0; D !== null; ) {
    var l = D,
      i = l.child;
    if (l.tag === 22 && r) {
      var o = l.memoizedState !== null || fl;
      if (!o) {
        var a = l.alternate,
          s = (a !== null && a.memoizedState !== null) || Pe;
        a = fl;
        var c = Pe;
        if (((fl = o), (Pe = s) && !c))
          for (D = l; D !== null; )
            (o = D),
              (s = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? mu(l)
                : s !== null
                ? ((s.return = o), (D = s))
                : mu(l);
        for (; i !== null; ) (D = i), zf(i), (i = i.sibling);
        (D = l), (fl = a), (Pe = c);
      }
      hu(e);
    } else
      l.subtreeFlags & 8772 && i !== null ? ((i.return = l), (D = i)) : hu(e);
  }
}
function hu(e) {
  for (; D !== null; ) {
    var t = D;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Pe || hi(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Pe)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : tt(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && Xs(t, i, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Xs(t, o, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var s = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && n.focus();
                    break;
                  case "img":
                    s.src && (n.src = s.src);
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
                var c = t.alternate;
                if (c !== null) {
                  var g = c.memoizedState;
                  if (g !== null) {
                    var m = g.dehydrated;
                    m !== null && Tr(m);
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
              throw Error(x(163));
          }
        Pe || (t.flags & 512 && Yo(t));
      } catch (p) {
        oe(t, t.return, p);
      }
    }
    if (t === e) {
      D = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (D = n);
      break;
    }
    D = t.return;
  }
}
function pu(e) {
  for (; D !== null; ) {
    var t = D;
    if (t === e) {
      D = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (D = n);
      break;
    }
    D = t.return;
  }
}
function mu(e) {
  for (; D !== null; ) {
    var t = D;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            hi(4, t);
          } catch (s) {
            oe(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              oe(t, l, s);
            }
          }
          var i = t.return;
          try {
            Yo(t);
          } catch (s) {
            oe(t, i, s);
          }
          break;
        case 5:
          var o = t.return;
          try {
            Yo(t);
          } catch (s) {
            oe(t, o, s);
          }
      }
    } catch (s) {
      oe(t, t.return, s);
    }
    if (t === e) {
      D = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (D = a);
      break;
    }
    D = t.return;
  }
}
var Rp = Math.ceil,
  Ql = Lt.ReactCurrentDispatcher,
  Va = Lt.ReactCurrentOwner,
  Xe = Lt.ReactCurrentBatchConfig,
  W = 0,
  ve = null,
  de = null,
  Se = 0,
  Ue = 0,
  On = Zt(0),
  pe = 0,
  Ur = null,
  dn = 0,
  pi = 0,
  Ha = 0,
  Sr = null,
  ze = null,
  $a = 0,
  Gn = 1 / 0,
  vt = null,
  Yl = !1,
  Xo = null,
  Wt = null,
  dl = !1,
  Mt = null,
  Gl = 0,
  Er = 0,
  Zo = null,
  xl = -1,
  Cl = 0;
function De() {
  return W & 6 ? ce() : xl !== -1 ? xl : (xl = ce());
}
function Kt(e) {
  return e.mode & 1
    ? W & 2 && Se !== 0
      ? Se & -Se
      : hp.transition !== null
      ? (Cl === 0 && (Cl = yc()), Cl)
      : ((e = Q),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Cc(e.type))),
        e)
    : 1;
}
function ot(e, t, n, r) {
  if (50 < Er) throw ((Er = 0), (Zo = null), Error(x(185)));
  $r(e, n, r),
    (!(W & 2) || e !== ve) &&
      (e === ve && (!(W & 2) && (pi |= n), pe === 4 && At(e, Se)),
      je(e, r),
      n === 1 && W === 0 && !(t.mode & 1) && ((Gn = ce() + 500), ci && qt()));
}
function je(e, t) {
  var n = e.callbackNode;
  hh(e, t);
  var r = Dl(e, e === ve ? Se : 0);
  if (r === 0)
    n !== null && Cs(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Cs(n), t === 1))
      e.tag === 0 ? dp(gu.bind(null, e)) : $c(gu.bind(null, e)),
        sp(function () {
          !(W & 6) && qt();
        }),
        (n = null);
    else {
      switch (vc(r)) {
        case 1:
          n = ma;
          break;
        case 4:
          n = mc;
          break;
        case 16:
          n = Rl;
          break;
        case 536870912:
          n = gc;
          break;
        default:
          n = Rl;
      }
      n = $f(n, Mf.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Mf(e, t) {
  if (((xl = -1), (Cl = 0), W & 6)) throw Error(x(327));
  var n = e.callbackNode;
  if (Un() && e.callbackNode !== n) return null;
  var r = Dl(e, e === ve ? Se : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Jl(e, r);
  else {
    t = r;
    var l = W;
    W |= 2;
    var i = Bf();
    (ve !== e || Se !== t) && ((vt = null), (Gn = ce() + 500), an(e, t));
    do
      try {
        Op();
        break;
      } catch (a) {
        If(e, a);
      }
    while (1);
    La(),
      (Ql.current = i),
      (W = l),
      de !== null ? (t = 0) : ((ve = null), (Se = 0), (t = pe));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = Co(e)), l !== 0 && ((r = l), (t = qo(e, l)))), t === 1)
    )
      throw ((n = Ur), an(e, 0), At(e, r), je(e, ce()), n);
    if (t === 6) At(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !Dp(l) &&
          ((t = Jl(e, r)),
          t === 2 && ((i = Co(e)), i !== 0 && ((r = i), (t = qo(e, i)))),
          t === 1))
      )
        throw ((n = Ur), an(e, 0), At(e, r), je(e, ce()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(x(345));
        case 2:
          en(e, ze, vt);
          break;
        case 3:
          if (
            (At(e, r), (r & 130023424) === r && ((t = $a + 500 - ce()), 10 < t))
          ) {
            if (Dl(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              De(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = Fo(en.bind(null, e, ze, vt), t);
            break;
          }
          en(e, ze, vt);
          break;
        case 4:
          if ((At(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var o = 31 - it(r);
            (i = 1 << o), (o = t[o]), o > l && (l = o), (r &= ~i);
          }
          if (
            ((r = l),
            (r = ce() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * Rp(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Fo(en.bind(null, e, ze, vt), r);
            break;
          }
          en(e, ze, vt);
          break;
        case 5:
          en(e, ze, vt);
          break;
        default:
          throw Error(x(329));
      }
    }
  }
  return je(e, ce()), e.callbackNode === n ? Mf.bind(null, e) : null;
}
function qo(e, t) {
  var n = Sr;
  return (
    e.current.memoizedState.isDehydrated && (an(e, t).flags |= 256),
    (e = Jl(e, t)),
    e !== 2 && ((t = ze), (ze = n), t !== null && bo(t)),
    e
  );
}
function bo(e) {
  ze === null ? (ze = e) : ze.push.apply(ze, e);
}
function Dp(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            i = l.getSnapshot;
          l = l.value;
          try {
            if (!at(i(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
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
function At(e, t) {
  for (
    t &= ~Ha,
      t &= ~pi,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - it(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function gu(e) {
  if (W & 6) throw Error(x(327));
  Un();
  var t = Dl(e, 0);
  if (!(t & 1)) return je(e, ce()), null;
  var n = Jl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Co(e);
    r !== 0 && ((t = r), (n = qo(e, r)));
  }
  if (n === 1) throw ((n = Ur), an(e, 0), At(e, t), je(e, ce()), n);
  if (n === 6) throw Error(x(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    en(e, ze, vt),
    je(e, ce()),
    null
  );
}
function Wa(e, t) {
  var n = W;
  W |= 1;
  try {
    return e(t);
  } finally {
    (W = n), W === 0 && ((Gn = ce() + 500), ci && qt());
  }
}
function hn(e) {
  Mt !== null && Mt.tag === 0 && !(W & 6) && Un();
  var t = W;
  W |= 1;
  var n = Xe.transition,
    r = Q;
  try {
    if (((Xe.transition = null), (Q = 1), e)) return e();
  } finally {
    (Q = r), (Xe.transition = n), (W = t), !(W & 6) && qt();
  }
}
function Ka() {
  (Ue = On.current), X(On);
}
function an(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), ap(n)), de !== null))
    for (n = de.return; n !== null; ) {
      var r = n;
      switch ((_a(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Ml();
          break;
        case 3:
          Qn(), X(Ie), X(Le), Aa();
          break;
        case 5:
          Oa(r);
          break;
        case 4:
          Qn();
          break;
        case 13:
          X(ne);
          break;
        case 19:
          X(ne);
          break;
        case 10:
          Ta(r.type._context);
          break;
        case 22:
        case 23:
          Ka();
      }
      n = n.return;
    }
  if (
    ((ve = e),
    (de = e = Qt(e.current, null)),
    (Se = Ue = t),
    (pe = 0),
    (Ur = null),
    (Ha = pi = dn = 0),
    (ze = Sr = null),
    rn !== null)
  ) {
    for (t = 0; t < rn.length; t++)
      if (((n = rn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          i = n.pending;
        if (i !== null) {
          var o = i.next;
          (i.next = l), (r.next = o);
        }
        n.pending = r;
      }
    rn = null;
  }
  return e;
}
function If(e, t) {
  do {
    var n = de;
    try {
      if ((La(), (kl.current = Kl), Wl)) {
        for (var r = re.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        Wl = !1;
      }
      if (
        ((fn = 0),
        (ye = he = re = null),
        (wr = !1),
        (Ir = 0),
        (Va.current = null),
        n === null || n.return === null)
      ) {
        (pe = 1), (Ur = t), (de = null);
        break;
      }
      e: {
        var i = e,
          o = n.return,
          a = n,
          s = t;
        if (
          ((t = Se),
          (a.flags |= 32768),
          s !== null && typeof s == "object" && typeof s.then == "function")
        ) {
          var c = s,
            g = a,
            m = g.tag;
          if (!(g.mode & 1) && (m === 0 || m === 11 || m === 15)) {
            var p = g.alternate;
            p
              ? ((g.updateQueue = p.updateQueue),
                (g.memoizedState = p.memoizedState),
                (g.lanes = p.lanes))
              : ((g.updateQueue = null), (g.memoizedState = null));
          }
          var v = ru(o);
          if (v !== null) {
            (v.flags &= -257),
              lu(v, o, a, i, t),
              v.mode & 1 && nu(i, c, t),
              (t = v),
              (s = c);
            var S = t.updateQueue;
            if (S === null) {
              var w = new Set();
              w.add(s), (t.updateQueue = w);
            } else S.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              nu(i, c, t), Qa();
              break e;
            }
            s = Error(x(426));
          }
        } else if (te && a.mode & 1) {
          var T = ru(o);
          if (T !== null) {
            !(T.flags & 65536) && (T.flags |= 256),
              lu(T, o, a, i, t),
              Na(Yn(s, a));
            break e;
          }
        }
        (i = s = Yn(s, a)),
          pe !== 4 && (pe = 2),
          Sr === null ? (Sr = [i]) : Sr.push(i),
          (i = o);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var f = kf(i, s, t);
              Js(i, f);
              break e;
            case 1:
              a = s;
              var u = i.type,
                d = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof u.getDerivedStateFromError == "function" ||
                  (d !== null &&
                    typeof d.componentDidCatch == "function" &&
                    (Wt === null || !Wt.has(d))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var k = Sf(i, a, t);
                Js(i, k);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Uf(n);
    } catch (C) {
      (t = C), de === n && n !== null && (de = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function Bf() {
  var e = Ql.current;
  return (Ql.current = Kl), e === null ? Kl : e;
}
function Qa() {
  (pe === 0 || pe === 3 || pe === 2) && (pe = 4),
    ve === null || (!(dn & 268435455) && !(pi & 268435455)) || At(ve, Se);
}
function Jl(e, t) {
  var n = W;
  W |= 2;
  var r = Bf();
  (ve !== e || Se !== t) && ((vt = null), an(e, t));
  do
    try {
      Fp();
      break;
    } catch (l) {
      If(e, l);
    }
  while (1);
  if ((La(), (W = n), (Ql.current = r), de !== null)) throw Error(x(261));
  return (ve = null), (Se = 0), pe;
}
function Fp() {
  for (; de !== null; ) jf(de);
}
function Op() {
  for (; de !== null && !lh(); ) jf(de);
}
function jf(e) {
  var t = Hf(e.alternate, e, Ue);
  (e.memoizedProps = e.pendingProps),
    t === null ? Uf(e) : (de = t),
    (Va.current = null);
}
function Uf(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Np(n, t)), n !== null)) {
        (n.flags &= 32767), (de = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (pe = 6), (de = null);
        return;
      }
    } else if (((n = _p(n, t, Ue)), n !== null)) {
      de = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      de = t;
      return;
    }
    de = t = e;
  } while (t !== null);
  pe === 0 && (pe = 5);
}
function en(e, t, n) {
  var r = Q,
    l = Xe.transition;
  try {
    (Xe.transition = null), (Q = 1), Ap(e, t, n, r);
  } finally {
    (Xe.transition = l), (Q = r);
  }
  return null;
}
function Ap(e, t, n, r) {
  do Un();
  while (Mt !== null);
  if (W & 6) throw Error(x(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(x(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (ph(e, i),
    e === ve && ((de = ve = null), (Se = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      dl ||
      ((dl = !0),
      $f(Rl, function () {
        return Un(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = Xe.transition), (Xe.transition = null);
    var o = Q;
    Q = 1;
    var a = W;
    (W |= 4),
      (Va.current = null),
      Lp(e, n),
      Af(n, e),
      ep(Ro),
      (Fl = !!To),
      (Ro = To = null),
      (e.current = n),
      Tp(n),
      ih(),
      (W = a),
      (Q = o),
      (Xe.transition = i);
  } else e.current = n;
  if (
    (dl && ((dl = !1), (Mt = e), (Gl = l)),
    (i = e.pendingLanes),
    i === 0 && (Wt = null),
    sh(n.stateNode),
    je(e, ce()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (Yl) throw ((Yl = !1), (e = Xo), (Xo = null), e);
  return (
    Gl & 1 && e.tag !== 0 && Un(),
    (i = e.pendingLanes),
    i & 1 ? (e === Zo ? Er++ : ((Er = 0), (Zo = e))) : (Er = 0),
    qt(),
    null
  );
}
function Un() {
  if (Mt !== null) {
    var e = vc(Gl),
      t = Xe.transition,
      n = Q;
    try {
      if (((Xe.transition = null), (Q = 16 > e ? 16 : e), Mt === null))
        var r = !1;
      else {
        if (((e = Mt), (Mt = null), (Gl = 0), W & 6)) throw Error(x(331));
        var l = W;
        for (W |= 4, D = e.current; D !== null; ) {
          var i = D,
            o = i.child;
          if (D.flags & 16) {
            var a = i.deletions;
            if (a !== null) {
              for (var s = 0; s < a.length; s++) {
                var c = a[s];
                for (D = c; D !== null; ) {
                  var g = D;
                  switch (g.tag) {
                    case 0:
                    case 11:
                    case 15:
                      kr(8, g, i);
                  }
                  var m = g.child;
                  if (m !== null) (m.return = g), (D = m);
                  else
                    for (; D !== null; ) {
                      g = D;
                      var p = g.sibling,
                        v = g.return;
                      if ((Df(g), g === c)) {
                        D = null;
                        break;
                      }
                      if (p !== null) {
                        (p.return = v), (D = p);
                        break;
                      }
                      D = v;
                    }
                }
              }
              var S = i.alternate;
              if (S !== null) {
                var w = S.child;
                if (w !== null) {
                  S.child = null;
                  do {
                    var T = w.sibling;
                    (w.sibling = null), (w = T);
                  } while (w !== null);
                }
              }
              D = i;
            }
          }
          if (i.subtreeFlags & 2064 && o !== null) (o.return = i), (D = o);
          else
            e: for (; D !== null; ) {
              if (((i = D), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    kr(9, i, i.return);
                }
              var f = i.sibling;
              if (f !== null) {
                (f.return = i.return), (D = f);
                break e;
              }
              D = i.return;
            }
        }
        var u = e.current;
        for (D = u; D !== null; ) {
          o = D;
          var d = o.child;
          if (o.subtreeFlags & 2064 && d !== null) (d.return = o), (D = d);
          else
            e: for (o = u; D !== null; ) {
              if (((a = D), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      hi(9, a);
                  }
                } catch (C) {
                  oe(a, a.return, C);
                }
              if (a === o) {
                D = null;
                break e;
              }
              var k = a.sibling;
              if (k !== null) {
                (k.return = a.return), (D = k);
                break e;
              }
              D = a.return;
            }
        }
        if (
          ((W = l), qt(), ht && typeof ht.onPostCommitFiberRoot == "function")
        )
          try {
            ht.onPostCommitFiberRoot(ii, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (Q = n), (Xe.transition = t);
    }
  }
  return !1;
}
function yu(e, t, n) {
  (t = Yn(n, t)),
    (t = kf(e, t, 1)),
    (e = $t(e, t, 1)),
    (t = De()),
    e !== null && ($r(e, 1, t), je(e, t));
}
function oe(e, t, n) {
  if (e.tag === 3) yu(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        yu(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Wt === null || !Wt.has(r)))
        ) {
          (e = Yn(n, e)),
            (e = Sf(t, e, 1)),
            (t = $t(t, e, 1)),
            (e = De()),
            t !== null && ($r(t, 1, e), je(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function zp(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = De()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ve === e &&
      (Se & n) === n &&
      (pe === 4 || (pe === 3 && (Se & 130023424) === Se && 500 > ce() - $a)
        ? an(e, 0)
        : (Ha |= n)),
    je(e, t);
}
function Vf(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = nl), (nl <<= 1), !(nl & 130023424) && (nl = 4194304))
      : (t = 1));
  var n = De();
  (e = Nt(e, t)), e !== null && ($r(e, t, n), je(e, n));
}
function Mp(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Vf(e, n);
}
function Ip(e, t) {
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
      throw Error(x(314));
  }
  r !== null && r.delete(t), Vf(e, n);
}
var Hf;
Hf = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ie.current) Me = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Me = !1), Cp(e, t, n);
      Me = !!(e.flags & 131072);
    }
  else (Me = !1), te && t.flags & 1048576 && Wc(t, jl, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      El(e, t), (e = t.pendingProps);
      var l = $n(t, Le.current);
      jn(t, n), (l = Ma(null, t, r, e, l, n));
      var i = Ia();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Be(r) ? ((i = !0), Il(t)) : (i = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            Da(t),
            (l.updater = fi),
            (t.stateNode = l),
            (l._reactInternals = t),
            jo(t, r, e, n),
            (t = Ho(null, t, r, !0, i, n)))
          : ((t.tag = 0), te && i && Ca(t), Te(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (El(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = jp(r)),
          (e = tt(r, e)),
          l)
        ) {
          case 0:
            t = Vo(null, t, r, e, n);
            break e;
          case 1:
            t = au(null, t, r, e, n);
            break e;
          case 11:
            t = iu(null, t, r, e, n);
            break e;
          case 14:
            t = ou(null, t, r, tt(r.type, e), n);
            break e;
        }
        throw Error(x(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : tt(r, l)),
        Vo(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : tt(r, l)),
        au(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((_f(t), e === null)) throw Error(x(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (l = i.element),
          Gc(e, t),
          Hl(t, r, null, n);
        var o = t.memoizedState;
        if (((r = o.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (l = Yn(Error(x(423)), t)), (t = su(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = Yn(Error(x(424)), t)), (t = su(e, t, r, n, l));
            break e;
          } else
            for (
              Ve = Ht(t.stateNode.containerInfo.firstChild),
                He = t,
                te = !0,
                rt = null,
                n = qc(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Wn(), r === l)) {
            t = Pt(e, t, n);
            break e;
          }
          Te(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        bc(t),
        e === null && Mo(t),
        (r = t.type),
        (l = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (o = l.children),
        Do(r, l) ? (o = null) : i !== null && Do(r, i) && (t.flags |= 32),
        Cf(e, t),
        Te(e, t, o, n),
        t.child
      );
    case 6:
      return e === null && Mo(t), null;
    case 13:
      return Nf(e, t, n);
    case 4:
      return (
        Fa(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Kn(t, null, r, n)) : Te(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : tt(r, l)),
        iu(e, t, r, l, n)
      );
    case 7:
      return Te(e, t, t.pendingProps, n), t.child;
    case 8:
      return Te(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Te(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (i = t.memoizedProps),
          (o = l.value),
          G(Ul, r._currentValue),
          (r._currentValue = o),
          i !== null)
        )
          if (at(i.value, o)) {
            if (i.children === l.children && !Ie.current) {
              t = Pt(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var a = i.dependencies;
              if (a !== null) {
                o = i.child;
                for (var s = a.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (i.tag === 1) {
                      (s = xt(-1, n & -n)), (s.tag = 2);
                      var c = i.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var g = c.pending;
                        g === null
                          ? (s.next = s)
                          : ((s.next = g.next), (g.next = s)),
                          (c.pending = s);
                      }
                    }
                    (i.lanes |= n),
                      (s = i.alternate),
                      s !== null && (s.lanes |= n),
                      Io(i.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else if (i.tag === 10) o = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((o = i.return), o === null)) throw Error(x(341));
                (o.lanes |= n),
                  (a = o.alternate),
                  a !== null && (a.lanes |= n),
                  Io(o, n, t),
                  (o = i.sibling);
              } else o = i.child;
              if (o !== null) o.return = i;
              else
                for (o = i; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((i = o.sibling), i !== null)) {
                    (i.return = o.return), (o = i);
                    break;
                  }
                  o = o.return;
                }
              i = o;
            }
        Te(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        jn(t, n),
        (l = Ze(l)),
        (r = r(l)),
        (t.flags |= 1),
        Te(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = tt(r, t.pendingProps)),
        (l = tt(r.type, l)),
        ou(e, t, r, l, n)
      );
    case 15:
      return Ef(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : tt(r, l)),
        El(e, t),
        (t.tag = 1),
        Be(r) ? ((e = !0), Il(t)) : (e = !1),
        jn(t, n),
        Xc(t, r, l),
        jo(t, r, l, n),
        Ho(null, t, r, !0, e, n)
      );
    case 19:
      return Pf(e, t, n);
    case 22:
      return xf(e, t, n);
  }
  throw Error(x(156, t.tag));
};
function $f(e, t) {
  return pc(e, t);
}
function Bp(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Je(e, t, n, r) {
  return new Bp(e, t, n, r);
}
function Ya(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function jp(e) {
  if (typeof e == "function") return Ya(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === da)) return 11;
    if (e === ha) return 14;
  }
  return 2;
}
function Qt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Je(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function _l(e, t, n, r, l, i) {
  var o = 2;
  if (((r = e), typeof e == "function")) Ya(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case xn:
        return sn(n.children, l, i, t);
      case fa:
        (o = 8), (l |= 8);
        break;
      case so:
        return (
          (e = Je(12, n, t, l | 2)), (e.elementType = so), (e.lanes = i), e
        );
      case uo:
        return (e = Je(13, n, t, l)), (e.elementType = uo), (e.lanes = i), e;
      case co:
        return (e = Je(19, n, t, l)), (e.elementType = co), (e.lanes = i), e;
      case Zu:
        return mi(n, l, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Ju:
              o = 10;
              break e;
            case Xu:
              o = 9;
              break e;
            case da:
              o = 11;
              break e;
            case ha:
              o = 14;
              break e;
            case Dt:
              (o = 16), (r = null);
              break e;
          }
        throw Error(x(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Je(o, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function sn(e, t, n, r) {
  return (e = Je(7, e, r, t)), (e.lanes = n), e;
}
function mi(e, t, n, r) {
  return (
    (e = Je(22, e, r, t)),
    (e.elementType = Zu),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Yi(e, t, n) {
  return (e = Je(6, e, null, t)), (e.lanes = n), e;
}
function Gi(e, t, n) {
  return (
    (t = Je(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Up(e, t, n, r, l) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Li(0)),
    (this.expirationTimes = Li(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Li(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function Ga(e, t, n, r, l, i, o, a, s) {
  return (
    (e = new Up(e, t, n, a, s)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = Je(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Da(i),
    e
  );
}
function Vp(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: En,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Wf(e) {
  if (!e) return Jt;
  e = e._reactInternals;
  e: {
    if (mn(e) !== e || e.tag !== 1) throw Error(x(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Be(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(x(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Be(n)) return Hc(e, n, t);
  }
  return t;
}
function Kf(e, t, n, r, l, i, o, a, s) {
  return (
    (e = Ga(n, r, !0, e, l, i, o, a, s)),
    (e.context = Wf(null)),
    (n = e.current),
    (r = De()),
    (l = Kt(n)),
    (i = xt(r, l)),
    (i.callback = t ?? null),
    $t(n, i, l),
    (e.current.lanes = l),
    $r(e, l, r),
    je(e, r),
    e
  );
}
function gi(e, t, n, r) {
  var l = t.current,
    i = De(),
    o = Kt(l);
  return (
    (n = Wf(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = xt(i, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = $t(l, t, o)),
    e !== null && (ot(e, l, o, i), wl(e, l, o)),
    o
  );
}
function Xl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function vu(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Ja(e, t) {
  vu(e, t), (e = e.alternate) && vu(e, t);
}
function Hp() {
  return null;
}
var Qf =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Xa(e) {
  this._internalRoot = e;
}
yi.prototype.render = Xa.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(x(409));
  gi(e, t, null, null);
};
yi.prototype.unmount = Xa.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    hn(function () {
      gi(null, e, null, null);
    }),
      (t[_t] = null);
  }
};
function yi(e) {
  this._internalRoot = e;
}
yi.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Sc();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Ot.length && t !== 0 && t < Ot[n].priority; n++);
    Ot.splice(n, 0, e), n === 0 && xc(e);
  }
};
function Za(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function vi(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function wu() {}
function $p(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var c = Xl(o);
        i.call(c);
      };
    }
    var o = Kf(t, r, e, 0, null, !1, !1, "", wu);
    return (
      (e._reactRootContainer = o),
      (e[_t] = o.current),
      Fr(e.nodeType === 8 ? e.parentNode : e),
      hn(),
      o
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var c = Xl(s);
      a.call(c);
    };
  }
  var s = Ga(e, 0, !1, null, null, !1, !1, "", wu);
  return (
    (e._reactRootContainer = s),
    (e[_t] = s.current),
    Fr(e.nodeType === 8 ? e.parentNode : e),
    hn(function () {
      gi(t, s, n, r);
    }),
    s
  );
}
function wi(e, t, n, r, l) {
  var i = n._reactRootContainer;
  if (i) {
    var o = i;
    if (typeof l == "function") {
      var a = l;
      l = function () {
        var s = Xl(o);
        a.call(s);
      };
    }
    gi(t, o, e, l);
  } else o = $p(n, t, e, l, r);
  return Xl(o);
}
wc = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = dr(t.pendingLanes);
        n !== 0 &&
          (ga(t, n | 1), je(t, ce()), !(W & 6) && ((Gn = ce() + 500), qt()));
      }
      break;
    case 13:
      hn(function () {
        var r = Nt(e, 1);
        if (r !== null) {
          var l = De();
          ot(r, e, 1, l);
        }
      }),
        Ja(e, 1);
  }
};
ya = function (e) {
  if (e.tag === 13) {
    var t = Nt(e, 134217728);
    if (t !== null) {
      var n = De();
      ot(t, e, 134217728, n);
    }
    Ja(e, 134217728);
  }
};
kc = function (e) {
  if (e.tag === 13) {
    var t = Kt(e),
      n = Nt(e, t);
    if (n !== null) {
      var r = De();
      ot(n, e, t, r);
    }
    Ja(e, t);
  }
};
Sc = function () {
  return Q;
};
Ec = function (e, t) {
  var n = Q;
  try {
    return (Q = e), t();
  } finally {
    Q = n;
  }
};
So = function (e, t, n) {
  switch (t) {
    case "input":
      if ((po(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = ui(r);
            if (!l) throw Error(x(90));
            bu(r), po(r, l);
          }
        }
      }
      break;
    case "textarea":
      tc(e, n);
      break;
    case "select":
      (t = n.value), t != null && zn(e, !!n.multiple, t, !1);
  }
};
sc = Wa;
uc = hn;
var Wp = { usingClientEntryPoint: !1, Events: [Kr, Pn, ui, oc, ac, Wa] },
  sr = {
    findFiberByHostInstance: nn,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  Kp = {
    bundleType: sr.bundleType,
    version: sr.version,
    rendererPackageName: sr.rendererPackageName,
    rendererConfig: sr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Lt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = dc(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: sr.findFiberByHostInstance || Hp,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var hl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!hl.isDisabled && hl.supportsFiber)
    try {
      (ii = hl.inject(Kp)), (ht = hl);
    } catch {}
}
We.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Wp;
We.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Za(t)) throw Error(x(200));
  return Vp(e, t, null, n);
};
We.createRoot = function (e, t) {
  if (!Za(e)) throw Error(x(299));
  var n = !1,
    r = "",
    l = Qf;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = Ga(e, 1, !1, null, null, n, !1, r, l)),
    (e[_t] = t.current),
    Fr(e.nodeType === 8 ? e.parentNode : e),
    new Xa(t)
  );
};
We.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(x(188))
      : ((e = Object.keys(e).join(",")), Error(x(268, e)));
  return (e = dc(t)), (e = e === null ? null : e.stateNode), e;
};
We.flushSync = function (e) {
  return hn(e);
};
We.hydrate = function (e, t, n) {
  if (!vi(t)) throw Error(x(200));
  return wi(null, e, t, !0, n);
};
We.hydrateRoot = function (e, t, n) {
  if (!Za(e)) throw Error(x(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    i = "",
    o = Qf;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = Kf(t, null, e, 1, n ?? null, l, !1, i, o)),
    (e[_t] = t.current),
    Fr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new yi(t);
};
We.render = function (e, t, n) {
  if (!vi(t)) throw Error(x(200));
  return wi(null, e, t, !1, n);
};
We.unmountComponentAtNode = function (e) {
  if (!vi(e)) throw Error(x(40));
  return e._reactRootContainer
    ? (hn(function () {
        wi(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[_t] = null);
        });
      }),
      !0)
    : !1;
};
We.unstable_batchedUpdates = Wa;
We.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!vi(n)) throw Error(x(200));
  if (e == null || e._reactInternals === void 0) throw Error(x(38));
  return wi(e, t, n, !1, r);
};
We.version = "18.2.0-next-9e3b772b8-20220608";
(function (e) {
  function t() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (n) {
        console.error(n);
      }
  }
  t(), (e.exports = We);
})(Hd);
var ku = io;
(lo.createRoot = ku.createRoot), (lo.hydrateRoot = ku.hydrateRoot);
/**
 * @remix-run/router v1.4.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Vr() {
  return (
    (Vr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Vr.apply(this, arguments)
  );
}
var It;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(It || (It = {}));
const Su = "popstate";
function Qp(e) {
  e === void 0 && (e = {});
  function t(r, l) {
    let { pathname: i, search: o, hash: a } = r.location;
    return ea(
      "",
      { pathname: i, search: o, hash: a },
      (l.state && l.state.usr) || null,
      (l.state && l.state.key) || "default"
    );
  }
  function n(r, l) {
    return typeof l == "string" ? l : Zl(l);
  }
  return Gp(t, n, null, e);
}
function me(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function qa(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function Yp() {
  return Math.random().toString(36).substr(2, 8);
}
function Eu(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function ea(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    Vr(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? qn(t) : t,
      { state: n, key: (t && t.key) || r || Yp() }
    )
  );
}
function Zl(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function qn(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function Gp(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: l = document.defaultView, v5Compat: i = !1 } = r,
    o = l.history,
    a = It.Pop,
    s = null,
    c = g();
  c == null && ((c = 0), o.replaceState(Vr({}, o.state, { idx: c }), ""));
  function g() {
    return (o.state || { idx: null }).idx;
  }
  function m() {
    a = It.Pop;
    let T = g(),
      f = T == null ? null : T - c;
    (c = T), s && s({ action: a, location: w.location, delta: f });
  }
  function p(T, f) {
    a = It.Push;
    let u = ea(w.location, T, f);
    n && n(u, T), (c = g() + 1);
    let d = Eu(u, c),
      k = w.createHref(u);
    try {
      o.pushState(d, "", k);
    } catch {
      l.location.assign(k);
    }
    i && s && s({ action: a, location: w.location, delta: 1 });
  }
  function v(T, f) {
    a = It.Replace;
    let u = ea(w.location, T, f);
    n && n(u, T), (c = g());
    let d = Eu(u, c),
      k = w.createHref(u);
    o.replaceState(d, "", k),
      i && s && s({ action: a, location: w.location, delta: 0 });
  }
  function S(T) {
    let f = l.location.origin !== "null" ? l.location.origin : l.location.href,
      u = typeof T == "string" ? T : Zl(T);
    return (
      me(
        f,
        "No window.location.(origin|href) available to create URL for href: " +
          u
      ),
      new URL(u, f)
    );
  }
  let w = {
    get action() {
      return a;
    },
    get location() {
      return e(l, o);
    },
    listen(T) {
      if (s) throw new Error("A history only accepts one active listener");
      return (
        l.addEventListener(Su, m),
        (s = T),
        () => {
          l.removeEventListener(Su, m), (s = null);
        }
      );
    },
    createHref(T) {
      return t(l, T);
    },
    createURL: S,
    encodeLocation(T) {
      let f = S(T);
      return { pathname: f.pathname, search: f.search, hash: f.hash };
    },
    push: p,
    replace: v,
    go(T) {
      return o.go(T);
    },
  };
  return w;
}
var xu;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(xu || (xu = {}));
function Jp(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? qn(t) : t,
    l = ba(r.pathname || "/", n);
  if (l == null) return null;
  let i = Yf(e);
  Xp(i);
  let o = null;
  for (let a = 0; o == null && a < i.length; ++a) o = im(i[a], sm(l));
  return o;
}
function Yf(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let l = (i, o, a) => {
    let s = {
      relativePath: a === void 0 ? i.path || "" : a,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: o,
      route: i,
    };
    s.relativePath.startsWith("/") &&
      (me(
        s.relativePath.startsWith(r),
        'Absolute route path "' +
          s.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (s.relativePath = s.relativePath.slice(r.length)));
    let c = Yt([r, s.relativePath]),
      g = n.concat(s);
    i.children &&
      i.children.length > 0 &&
      (me(
        i.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + c + '".')
      ),
      Yf(i.children, t, g, c)),
      !(i.path == null && !i.index) &&
        t.push({ path: c, score: rm(c, i.index), routesMeta: g });
  };
  return (
    e.forEach((i, o) => {
      var a;
      if (i.path === "" || !((a = i.path) != null && a.includes("?"))) l(i, o);
      else for (let s of Gf(i.path)) l(i, o, s);
    }),
    t
  );
}
function Gf(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    l = n.endsWith("?"),
    i = n.replace(/\?$/, "");
  if (r.length === 0) return l ? [i, ""] : [i];
  let o = Gf(r.join("/")),
    a = [];
  return (
    a.push(...o.map((s) => (s === "" ? i : [i, s].join("/")))),
    l && a.push(...o),
    a.map((s) => (e.startsWith("/") && s === "" ? "/" : s))
  );
}
function Xp(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : lm(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const Zp = /^:\w+$/,
  qp = 3,
  bp = 2,
  em = 1,
  tm = 10,
  nm = -2,
  Cu = (e) => e === "*";
function rm(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(Cu) && (r += nm),
    t && (r += bp),
    n
      .filter((l) => !Cu(l))
      .reduce((l, i) => l + (Zp.test(i) ? qp : i === "" ? em : tm), r)
  );
}
function lm(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, l) => r === t[l])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function im(e, t) {
  let { routesMeta: n } = e,
    r = {},
    l = "/",
    i = [];
  for (let o = 0; o < n.length; ++o) {
    let a = n[o],
      s = o === n.length - 1,
      c = l === "/" ? t : t.slice(l.length) || "/",
      g = om(
        { path: a.relativePath, caseSensitive: a.caseSensitive, end: s },
        c
      );
    if (!g) return null;
    Object.assign(r, g.params);
    let m = a.route;
    i.push({
      params: r,
      pathname: Yt([l, g.pathname]),
      pathnameBase: dm(Yt([l, g.pathnameBase])),
      route: m,
    }),
      g.pathnameBase !== "/" && (l = Yt([l, g.pathnameBase]));
  }
  return i;
}
function om(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = am(e.path, e.caseSensitive, e.end),
    l = t.match(n);
  if (!l) return null;
  let i = l[0],
    o = i.replace(/(.)\/+$/, "$1"),
    a = l.slice(1);
  return {
    params: r.reduce((c, g, m) => {
      if (g === "*") {
        let p = a[m] || "";
        o = i.slice(0, i.length - p.length).replace(/(.)\/+$/, "$1");
      }
      return (c[g] = um(a[m] || "", g)), c;
    }, {}),
    pathname: i,
    pathnameBase: o,
    pattern: e,
  };
}
function am(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    qa(
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
        .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&")
        .replace(/\/:(\w+)/g, (o, a) => (r.push(a), "/([^\\/]+)"));
  return (
    e.endsWith("*")
      ? (r.push("*"),
        (l += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (l += "\\/*$")
      : e !== "" && e !== "/" && (l += "(?:(?=\\/|$))"),
    [new RegExp(l, t ? void 0 : "i"), r]
  );
}
function sm(e) {
  try {
    return decodeURI(e);
  } catch (t) {
    return (
      qa(
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
function um(e, t) {
  try {
    return decodeURIComponent(e);
  } catch (n) {
    return (
      qa(
        !1,
        'The value for the URL param "' +
          t +
          '" will not be decoded because' +
          (' the string "' +
            e +
            '" is a malformed URL segment. This is probably') +
          (" due to a bad percent encoding (" + n + ").")
      ),
      e
    );
  }
}
function ba(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function cm(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: l = "",
  } = typeof e == "string" ? qn(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : fm(n, t)) : t,
    search: hm(r),
    hash: pm(l),
  };
}
function fm(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((l) => {
      l === ".." ? n.length > 1 && n.pop() : l !== "." && n.push(l);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function Ji(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function Jf(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function Xf(e, t, n, r) {
  r === void 0 && (r = !1);
  let l;
  typeof e == "string"
    ? (l = qn(e))
    : ((l = Vr({}, e)),
      me(
        !l.pathname || !l.pathname.includes("?"),
        Ji("?", "pathname", "search", l)
      ),
      me(
        !l.pathname || !l.pathname.includes("#"),
        Ji("#", "pathname", "hash", l)
      ),
      me(!l.search || !l.search.includes("#"), Ji("#", "search", "hash", l)));
  let i = e === "" || l.pathname === "",
    o = i ? "/" : l.pathname,
    a;
  if (r || o == null) a = n;
  else {
    let m = t.length - 1;
    if (o.startsWith("..")) {
      let p = o.split("/");
      for (; p[0] === ".."; ) p.shift(), (m -= 1);
      l.pathname = p.join("/");
    }
    a = m >= 0 ? t[m] : "/";
  }
  let s = cm(l, a),
    c = o && o !== "/" && o.endsWith("/"),
    g = (i || o === ".") && n.endsWith("/");
  return !s.pathname.endsWith("/") && (c || g) && (s.pathname += "/"), s;
}
const Yt = (e) => e.join("/").replace(/\/\/+/g, "/"),
  dm = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  hm = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  pm = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function mm(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
/**
 * React Router v6.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function gm(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
const ym = typeof Object.is == "function" ? Object.is : gm,
  { useState: vm, useEffect: wm, useLayoutEffect: km, useDebugValue: Sm } = ro;
function Em(e, t, n) {
  const r = t(),
    [{ inst: l }, i] = vm({ inst: { value: r, getSnapshot: t } });
  return (
    km(() => {
      (l.value = r), (l.getSnapshot = t), Xi(l) && i({ inst: l });
    }, [e, r, t]),
    wm(
      () => (
        Xi(l) && i({ inst: l }),
        e(() => {
          Xi(l) && i({ inst: l });
        })
      ),
      [e]
    ),
    Sm(r),
    r
  );
}
function Xi(e) {
  const t = e.getSnapshot,
    n = e.value;
  try {
    const r = t();
    return !ym(n, r);
  } catch {
    return !0;
  }
}
function xm(e, t, n) {
  return t();
}
const Cm =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  _m = !Cm,
  Nm = _m ? xm : Em;
"useSyncExternalStore" in ro && ((e) => e.useSyncExternalStore)(ro);
const Zf = L.createContext(null),
  es = L.createContext(null),
  bn = L.createContext(null),
  ki = L.createContext(null),
  gn = L.createContext({ outlet: null, matches: [] }),
  qf = L.createContext(null);
function ta() {
  return (
    (ta = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ta.apply(this, arguments)
  );
}
function Pm(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  Yr() || me(!1);
  let { basename: r, navigator: l } = L.useContext(bn),
    { hash: i, pathname: o, search: a } = ts(e, { relative: n }),
    s = o;
  return (
    r !== "/" && (s = o === "/" ? r : Yt([r, o])),
    l.createHref({ pathname: s, search: a, hash: i })
  );
}
function Yr() {
  return L.useContext(ki) != null;
}
function Gr() {
  return Yr() || me(!1), L.useContext(ki).location;
}
function Lm() {
  Yr() || me(!1);
  let { basename: e, navigator: t } = L.useContext(bn),
    { matches: n } = L.useContext(gn),
    { pathname: r } = Gr(),
    l = JSON.stringify(Jf(n).map((a) => a.pathnameBase)),
    i = L.useRef(!1);
  return (
    L.useEffect(() => {
      i.current = !0;
    }),
    L.useCallback(
      function (a, s) {
        if ((s === void 0 && (s = {}), !i.current)) return;
        if (typeof a == "number") {
          t.go(a);
          return;
        }
        let c = Xf(a, JSON.parse(l), r, s.relative === "path");
        e !== "/" &&
          (c.pathname = c.pathname === "/" ? e : Yt([e, c.pathname])),
          (s.replace ? t.replace : t.push)(c, s.state, s);
      },
      [e, t, l, r]
    )
  );
}
const Tm = L.createContext(null);
function Rm(e) {
  let t = L.useContext(gn).outlet;
  return t && L.createElement(Tm.Provider, { value: e }, t);
}
function ts(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { matches: r } = L.useContext(gn),
    { pathname: l } = Gr(),
    i = JSON.stringify(Jf(r).map((o) => o.pathnameBase));
  return L.useMemo(() => Xf(e, JSON.parse(i), l, n === "path"), [e, i, l, n]);
}
function Dm(e, t) {
  Yr() || me(!1);
  let { navigator: n } = L.useContext(bn),
    r = L.useContext(es),
    { matches: l } = L.useContext(gn),
    i = l[l.length - 1],
    o = i ? i.params : {};
  i && i.pathname;
  let a = i ? i.pathnameBase : "/";
  i && i.route;
  let s = Gr(),
    c;
  if (t) {
    var g;
    let w = typeof t == "string" ? qn(t) : t;
    a === "/" || ((g = w.pathname) != null && g.startsWith(a)) || me(!1),
      (c = w);
  } else c = s;
  let m = c.pathname || "/",
    p = a === "/" ? m : m.slice(a.length) || "/",
    v = Jp(e, { pathname: p }),
    S = zm(
      v &&
        v.map((w) =>
          Object.assign({}, w, {
            params: Object.assign({}, o, w.params),
            pathname: Yt([
              a,
              n.encodeLocation
                ? n.encodeLocation(w.pathname).pathname
                : w.pathname,
            ]),
            pathnameBase:
              w.pathnameBase === "/"
                ? a
                : Yt([
                    a,
                    n.encodeLocation
                      ? n.encodeLocation(w.pathnameBase).pathname
                      : w.pathnameBase,
                  ]),
          })
        ),
      l,
      r || void 0
    );
  return t && S
    ? L.createElement(
        ki.Provider,
        {
          value: {
            location: ta(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              c
            ),
            navigationType: It.Pop,
          },
        },
        S
      )
    : S;
}
function Fm() {
  let e = jm(),
    t = mm(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    l = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" },
    i = null;
  return L.createElement(
    L.Fragment,
    null,
    L.createElement("h2", null, "Unexpected Application Error!"),
    L.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? L.createElement("pre", { style: l }, n) : null,
    i
  );
}
class Om extends L.Component {
  constructor(t) {
    super(t), (this.state = { location: t.location, error: t.error });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location
      ? { error: t.error, location: t.location }
      : { error: t.error || n.error, location: n.location };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error
      ? L.createElement(
          gn.Provider,
          { value: this.props.routeContext },
          L.createElement(qf.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function Am(e) {
  let { routeContext: t, match: n, children: r } = e,
    l = L.useContext(Zf);
  return (
    l &&
      l.static &&
      l.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (l.staticContext._deepestRenderedBoundaryId = n.route.id),
    L.createElement(gn.Provider, { value: t }, r)
  );
}
function zm(e, t, n) {
  if ((t === void 0 && (t = []), e == null))
    if (n != null && n.errors) e = n.matches;
    else return null;
  let r = e,
    l = n == null ? void 0 : n.errors;
  if (l != null) {
    let i = r.findIndex(
      (o) => o.route.id && (l == null ? void 0 : l[o.route.id])
    );
    i >= 0 || me(!1), (r = r.slice(0, Math.min(r.length, i + 1)));
  }
  return r.reduceRight((i, o, a) => {
    let s = o.route.id ? (l == null ? void 0 : l[o.route.id]) : null,
      c = null;
    n &&
      (o.route.ErrorBoundary
        ? (c = L.createElement(o.route.ErrorBoundary, null))
        : o.route.errorElement
        ? (c = o.route.errorElement)
        : (c = L.createElement(Fm, null)));
    let g = t.concat(r.slice(0, a + 1)),
      m = () => {
        let p = i;
        return (
          s
            ? (p = c)
            : o.route.Component
            ? (p = L.createElement(o.route.Component, null))
            : o.route.element && (p = o.route.element),
          L.createElement(Am, {
            match: o,
            routeContext: { outlet: i, matches: g },
            children: p,
          })
        );
      };
    return n && (o.route.ErrorBoundary || o.route.errorElement || a === 0)
      ? L.createElement(Om, {
          location: n.location,
          component: c,
          error: s,
          children: m(),
          routeContext: { outlet: null, matches: g },
        })
      : m();
  }, null);
}
var _u;
(function (e) {
  (e.UseBlocker = "useBlocker"), (e.UseRevalidator = "useRevalidator");
})(_u || (_u = {}));
var ql;
(function (e) {
  (e.UseBlocker = "useBlocker"),
    (e.UseLoaderData = "useLoaderData"),
    (e.UseActionData = "useActionData"),
    (e.UseRouteError = "useRouteError"),
    (e.UseNavigation = "useNavigation"),
    (e.UseRouteLoaderData = "useRouteLoaderData"),
    (e.UseMatches = "useMatches"),
    (e.UseRevalidator = "useRevalidator");
})(ql || (ql = {}));
function Mm(e) {
  let t = L.useContext(es);
  return t || me(!1), t;
}
function Im(e) {
  let t = L.useContext(gn);
  return t || me(!1), t;
}
function Bm(e) {
  let t = Im(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || me(!1), n.route.id;
}
function jm() {
  var e;
  let t = L.useContext(qf),
    n = Mm(ql.UseRouteError),
    r = Bm(ql.UseRouteError);
  return t || ((e = n.errors) == null ? void 0 : e[r]);
}
function Um(e) {
  return Rm(e.context);
}
function Sn(e) {
  me(!1);
}
function Vm(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: l = It.Pop,
    navigator: i,
    static: o = !1,
  } = e;
  Yr() && me(!1);
  let a = t.replace(/^\/*/, "/"),
    s = L.useMemo(() => ({ basename: a, navigator: i, static: o }), [a, i, o]);
  typeof r == "string" && (r = qn(r));
  let {
      pathname: c = "/",
      search: g = "",
      hash: m = "",
      state: p = null,
      key: v = "default",
    } = r,
    S = L.useMemo(() => {
      let w = ba(c, a);
      return w == null
        ? null
        : {
            location: { pathname: w, search: g, hash: m, state: p, key: v },
            navigationType: l,
          };
    }, [a, c, g, m, p, v, l]);
  return S == null
    ? null
    : L.createElement(
        bn.Provider,
        { value: s },
        L.createElement(ki.Provider, { children: n, value: S })
      );
}
function Hm(e) {
  let { children: t, location: n } = e,
    r = L.useContext(Zf),
    l = r && !t ? r.router.routes : na(t);
  return Dm(l, n);
}
var Nu;
(function (e) {
  (e[(e.pending = 0)] = "pending"),
    (e[(e.success = 1)] = "success"),
    (e[(e.error = 2)] = "error");
})(Nu || (Nu = {}));
new Promise(() => {});
function na(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    L.Children.forEach(e, (r, l) => {
      if (!L.isValidElement(r)) return;
      if (r.type === L.Fragment) {
        n.push.apply(n, na(r.props.children, t));
        return;
      }
      r.type !== Sn && me(!1), !r.props.index || !r.props.children || me(!1);
      let i = [...t, l],
        o = {
          id: r.props.id || i.join("-"),
          caseSensitive: r.props.caseSensitive,
          element: r.props.element,
          Component: r.props.Component,
          index: r.props.index,
          path: r.props.path,
          loader: r.props.loader,
          action: r.props.action,
          errorElement: r.props.errorElement,
          ErrorBoundary: r.props.ErrorBoundary,
          hasErrorBoundary:
            r.props.ErrorBoundary != null || r.props.errorElement != null,
          shouldRevalidate: r.props.shouldRevalidate,
          handle: r.props.handle,
          lazy: r.props.lazy,
        };
      r.props.children && (o.children = na(r.props.children, i)), n.push(o);
    }),
    n
  );
}
/**
 * React Router DOM v6.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function bl() {
  return (
    (bl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    bl.apply(this, arguments)
  );
}
function bf(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    l,
    i;
  for (i = 0; i < r.length; i++)
    (l = r[i]), !(t.indexOf(l) >= 0) && (n[l] = e[l]);
  return n;
}
function $m(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function Wm(e, t) {
  return e.button === 0 && (!t || t === "_self") && !$m(e);
}
const Km = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
  ],
  Qm = [
    "aria-current",
    "caseSensitive",
    "className",
    "end",
    "style",
    "to",
    "children",
  ];
function Ym(e) {
  let { basename: t, children: n, window: r } = e,
    l = L.useRef();
  l.current == null && (l.current = Qp({ window: r, v5Compat: !0 }));
  let i = l.current,
    [o, a] = L.useState({ action: i.action, location: i.location });
  return (
    L.useLayoutEffect(() => i.listen(a), [i]),
    L.createElement(Vm, {
      basename: t,
      children: n,
      location: o.location,
      navigationType: o.action,
      navigator: i,
    })
  );
}
const Gm =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  Jm = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  ed = L.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: l,
        reloadDocument: i,
        replace: o,
        state: a,
        target: s,
        to: c,
        preventScrollReset: g,
      } = t,
      m = bf(t, Km),
      { basename: p } = L.useContext(bn),
      v,
      S = !1;
    if (typeof c == "string" && Jm.test(c) && ((v = c), Gm)) {
      let u = new URL(window.location.href),
        d = c.startsWith("//") ? new URL(u.protocol + c) : new URL(c),
        k = ba(d.pathname, p);
      d.origin === u.origin && k != null
        ? (c = k + d.search + d.hash)
        : (S = !0);
    }
    let w = Pm(c, { relative: l }),
      T = Xm(c, {
        replace: o,
        state: a,
        target: s,
        preventScrollReset: g,
        relative: l,
      });
    function f(u) {
      r && r(u), u.defaultPrevented || T(u);
    }
    return L.createElement(
      "a",
      bl({}, m, { href: v || w, onClick: S || i ? r : f, ref: n, target: s })
    );
  }),
  Zi = L.forwardRef(function (t, n) {
    let {
        "aria-current": r = "page",
        caseSensitive: l = !1,
        className: i = "",
        end: o = !1,
        style: a,
        to: s,
        children: c,
      } = t,
      g = bf(t, Qm),
      m = ts(s, { relative: g.relative }),
      p = Gr(),
      v = L.useContext(es),
      { navigator: S } = L.useContext(bn),
      w = S.encodeLocation ? S.encodeLocation(m).pathname : m.pathname,
      T = p.pathname,
      f =
        v && v.navigation && v.navigation.location
          ? v.navigation.location.pathname
          : null;
    l ||
      ((T = T.toLowerCase()),
      (f = f ? f.toLowerCase() : null),
      (w = w.toLowerCase()));
    let u = T === w || (!o && T.startsWith(w) && T.charAt(w.length) === "/"),
      d =
        f != null &&
        (f === w || (!o && f.startsWith(w) && f.charAt(w.length) === "/")),
      k = u ? r : void 0,
      C;
    typeof i == "function"
      ? (C = i({ isActive: u, isPending: d }))
      : (C = [i, u ? "active" : null, d ? "pending" : null]
          .filter(Boolean)
          .join(" "));
    let F = typeof a == "function" ? a({ isActive: u, isPending: d }) : a;
    return L.createElement(
      ed,
      bl({}, g, { "aria-current": k, className: C, ref: n, style: F, to: s }),
      typeof c == "function" ? c({ isActive: u, isPending: d }) : c
    );
  });
var Pu;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmitImpl = "useSubmitImpl"),
    (e.UseFetcher = "useFetcher");
})(Pu || (Pu = {}));
var Lu;
(function (e) {
  (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(Lu || (Lu = {}));
function Xm(e, t) {
  let {
      target: n,
      replace: r,
      state: l,
      preventScrollReset: i,
      relative: o,
    } = t === void 0 ? {} : t,
    a = Lm(),
    s = Gr(),
    c = ts(e, { relative: o });
  return L.useCallback(
    (g) => {
      if (Wm(g, n)) {
        g.preventDefault();
        let m = r !== void 0 ? r : Zl(s) === Zl(c);
        a(e, { replace: m, state: l, preventScrollReset: i, relative: o });
      }
    },
    [s, a, c, r, l, n, e, i, o]
  );
}
const Zm = () => {
    const e = localStorage.getItem("date");
    let t;
    e ? (t = e) : (t = "");
    const [n, r] = L.useState(t);
    function l(i) {
      const o = i.target.value;
      r(o), localStorage.setItem("date", o);
    }
    return P("input", { onInput: l, value: n, placeholder: "Search..." });
  },
  qm = (e) => {
    let t = { date: "", count: 10 };
    e.check && (t = { date: "active", count: 11 });
    const [n, r] = L.useState(t);
    function l() {
      n.date
        ? r({ date: "", count: n.count - 1 })
        : r({ date: "active", count: n.count + 1 });
    }
    return P(mt, {
      children: ee("div", {
        className: "card",
        children: [
          P("img", { src: e.img, className: "card__img" }),
          ee("div", {
            className: "card__info",
            children: [
              ee("div", {
                className: "card__head",
                children: [
                  P("h3", { className: "card__title", children: e.title }),
                  ee("div", {
                    className: "card__year",
                    children: [P("span", { children: "Year: " }), e.year],
                  }),
                ],
              }),
              ee("div", {
                className: "card__author",
                children: [P("span", { children: "Author: " }), e.author],
              }),
              ee("div", {
                className: "card__genre",
                children: [P("span", { children: "Genre: " }), e.genre],
              }),
              P("div", { className: "card__desc", children: e.desc }),
              ee("div", {
                className: "card__likes",
                onClick: l,
                children: [
                  P("svg", {
                    role: "image",
                    className: "card__like " + n.date,
                    children: P("use", { xlinkHref: "../like.svg#like" }),
                  }),
                  P("span", { children: n.count }),
                ],
              }),
            ],
          }),
        ],
      }),
    });
  },
  td = (e) => {
    const t = e.books;
    return t
      ? P(mt, {
          children: P("div", {
            className: "cards",
            children: t.map((n, r) => P(qm, { ...n }, r)),
          }),
        })
      : P(mt, {});
  },
  ns = [
    {
      title: "Shooter",
      author: "Stephen King",
      img: "https://fantlab.ru/images/editions/big/310370?r=1619868610",
      year: 1982,
      desc: "Somewhere on the edge of the world stands the mysterious Black Tower - the embodiment of all Evil. Shooter Roland sets off on a journey full of dangers and difficult decisions to find it. He is hindered by a man in black, who must reveal the secrets of the universe to the arrow, but only then. .. And now the offspring of the great family of Elda has a predestined and difficult path ahead ... ",
      genre: "Horror",
    },
    {
      title: "Extracting Three",
      author: "Stephen King",
      img: "https://fantlab.ru/images/editions/big/310370?r=1619868610",
      year: 1987,
      desc: "In this part of his adventures, Roland extracts from our reality the assistants whom the Tarot cards predicted for him. They will accompany him on his travels: drug addict Eddie Dean, a black disabled woman Odette Holmes ...",
      genre: "Horror",
    },
    {
      title: "Badlands",
      author: "Stephen King",
      img: "https://fantlab.ru/images/editions/big/310370?r=1619868610",
      year: 1991,
      desc: "Roland - the last shooter - goes to the Heart of Darkness called the Dark Tower. From another world, he brought two more people who will help him on this difficult and dangerous journey. Many adventures await them along the way - Guardian Shardik, the Dying City of Lad and the living riddle-loving train.",
      genre: "Horror",
    },
    {
      title: "Sorcerer and Crystal",
      author: "Stephen King",
      img: "https://fantlab.ru/images/editions/big/315486?r=1622721443",
      year: 1997,
      desc: "After Roland passed the test and became a shooter, his father sends him to a safe place, to the east, to the outer fiefs, in order to save him from the machinations of Marten. But the city of Majlis is not a quiet backwater at all. Behind the calm measured rural life, preparations Something very bad. Will Roland and his companions be able to figure out what is happening? What will happen to the fate of Roland's first lover, Susanna? Will they be able to deprive the main enemy of the Alliance of his magic ball?",
      genre: "Horror",
    },
    {
      title: "Wolves of Calla",
      author: "Stephen King",
      img: "https://fantlab.ru/images/editions/big/7255?r=1632984596",
      year: 2003,
      desc: "Following the path of the Beam, Roland's ka-tet enters a settlement called Kalya. The local population is terrorized by unknown people in wolf masks who raid the town every twenty years, while kidnapping half of the children and taking them to Thunderclap. The time for another attack is coming .. .",
      genre: "Horror",
    },
    {
      title: "The Song of Susanna",
      author: "Stephen King",
      img: "https://fantlab.ru/images/editions/big/7257?r=1619215691",
      year: 2003,
      desc: "Having suppressed Suzanne's mind, Mia escapes in her body to New York. The purpose of the invader is to give birth to a child with whom Suzanne is pregnant. Roland's ka-tet goes after her - father Callahan and Jake in order to return the lost member of the ka-tet, and Roland and Eddie will take care of saving the wasteland with the rose.",
      genre: "Horror",
    },
    {
      title: "Dark tower",
      author: "Stephen King",
      img: "https://fantlab.ru/images/editions/big/4665?r=1565407267",
      year: 2004,
      desc: "The last days of the journey of Roland Descane and his friends are coming. The Dark Tower is getting closer... But now the last of the shooters are threatened by a new danger. The demon child Mordred, who was predicted by the forces of Darkness to be the killer of Roland, has grown up - and is ready to fulfill his mission. Everything does existence serve the Beam? All existence serves the Crimson King?",
      genre: "Horror",
    },
    {
      title: "The Wizard's Nephew",
      author: "Clive Staples Lewis",
      img: "https://fantlab.ru/images/editions/big/50938?r=1492542899",
      year: 1955,
      desc: "Polly and Digory once mistakenly got into Uncle Andrew's room, where they were strictly forbidden to enter. Uncle Andrew turned out to be a sorcerer who created rings with which you can travel to other worlds. He tricks the children into using the rings, and they go on an incredible journey After passing through a series of worlds, they find themselves in Narnia, on the day of its creation by the lion Aslan. But together with the children, the White Witch Jadis got into the young world.",
      genre: "Fantasy",
    },
    {
      title: "The Lion, the Witch and the Wardrobe",
      author: "Clive Staples Lewis",
      img: "https://fantlab.ru/images/editions/big/50938?r=1492542899",
      year: 1950,
      desc: "Opening the wardrobe and hiding in it, be prepared to find yourself in the magical land of Narnia. This is exactly what happened to Lucy and Peter, Susan and Edmund - brothers and sisters who have since turned from ordinary children into kings sitting on thrones in Caer. Peravele. But first they met fauns and beavers who can speak, they defeated the sorceress Yadis and recognized the lion Aslan himself, they knew the betrayal of loved ones and love, death and resurrection, but found the strength to forgive and remain themselves.",
      genre: "Fantasy",
    },
    {
      title: "The Horse and His Boy",
      author: "Clive Staples Lewis",
      img: "https://fantlab.ru/images/editions/big/50938?r=1492542899",
      year: 1954,
      desc: "The boy Shasta lives on the seashore, who one day learns that he is the adopted son of a fisherman and will soon be sold into slavery. Together with the talking horse Igogo, he goes to Narnia. On the way to the north, they have to go through many trials.",
      genre: "Fantasy",
    },
    {
      title: "Prince Caspian",
      author: "Clive Staples Lewis",
      img: "https://fantlab.ru/images/editions/big/50938?r=1492542899",
      year: 1951,
      desc: "A year has passed since the return of Peter, Susan, Edmund and Lucy from Narnia. Now they are ordinary schoolchildren, not kings of a fairy-tale land. But one day, on the way to school, the children again find themselves in Narnia, in which almost one and a half thousand years have passed during their absence. The castle of Cair Paravel is destroyed, animals and trees have forgotten how to speak, and the country itself has been captured by the Telmarines, led by Lord Regent Miraz, who dreams of becoming the full ruler of Narnia.Only Prince Caspian, who is being killed, is forced to escape from the palace. to join the army of Old Narnia.",
      genre: "Fantasy",
    },
    {
      title: "The Voyage of the Dawn, or Swimming to the End of the World",
      author: "Clive Staples Lewis",
      img: "https://fantlab.ru/images/editions/big/50938?r=1492542899",
      year: 1951,
      desc: "Edmund and Lucy, as well as their cousin Eustace, looking at the picture, which depicts the ship, miraculously find themselves first at sea, and then on the same ship called the Dawn Treader. It is on it that King Caspian explores the Eastern Isles, and is also looking for seven lords who were sent to explore unknown lands, but never returned.And now the three children and King Caspian are waiting for an extraordinary adventure in which they will have to show who is capable of what. ",
      genre: "Fantasy",
    },
    {
      title: "Silver Chair",
      author: "Clive Staples Lewis",
      img: "https://fantlab.ru/images/editions/big/50938?r=1492542899",
      year: 1951,
      desc: "Eustace tells the girl Jill about his adventures in Narnia, where they soon find themselves running away from hooligans. There they meet the lion Aslan, who called them from England to search for the son of King Caspian. Before that, the search for Prince Riliane had already been organized, but no one of the knights never came back, so the search was officially banned. To help the children in this difficult task will be a quack wanderer named Khmur. Following the precepts of Aslan, the search party sets off towards dangers.",
      genre: "Fantasy",
    },
    {
      title: "Last fight",
      author: "Clive Staples Lewis",
      img: "https://fantlab.ru/images/editions/big/50938?r=1492542899",
      year: 1956,
      desc: "One fine day, a terrible event happens in Narnia. A cunning monkey finds the skin of a killed wild lion and puts it on a stupid donkey, passing him off as Aslan. And now an insidious monkey rules in Narnia, hiding behind Aslan. enslave the inhabitants. The last king of Narnia, Tirian, has no choice but to ask for help from children from another world who have repeatedly helped the inhabitants of Narnia.",
      genre: "Fantasy",
    },
    {
      title: "The Balamut Letters",
      author: "Clive Staples Lewis",
      img: "https://fantlab.ru/images/editions/big/67850?r=1492544742",
      year: 1941,
      desc: "Demons, devils in the minds of people are some funny characters in fairy tales and humorous works. Of course, in fairy tales they intrigue people, do harm in every possible way, etc. The author creates a completely different image of a demon, it is filled with a completely different meaning. Elder demon - Balamut advises the young tempter Gnusik not just how to harm a person, but much more terrible things - how to destroy a person’s soul and bring it to hell",
      genre: "Fantasy",
    },
    {
      title: "The Hobbit, or There and Back Again",
      author: "J. R. R. Tolkien",
      img: "https://fantlab.ru/images/editions/big/105712?r=1492543337",
      year: 1937,
      desc: "Who is a hobbit? In 1937, after the release of this fairy tale, half the world was puzzled by this most interesting question. And this is just a creature of small stature with furry legs, brave, but good-natured, able to move very quietly. It is about the adventures of the hobbit - Bilbo Baggins, as well as his friends - the brave dwarves and the wizard Gandalf, this book tells",
      genre: "Fantasy",
    },
    {
      title: "The Fellowship of the Ring",
      author: "J. R. R. Tolkien",
      img: "https://fantlab.ru/images/editions/big/1047?r=1657312690",
      year: 1954,
      desc: "Bilbo Baggins' nephew, the hobbit Frodo, did not even suspect what kind of legacy his uncle had left him. One warm spring morning, the wizard Gandalf appears on the threshold of Frodo's house. life, and the insidious and terrible servants of the Enemy are ready to do anything to return the lost to their master. Through obstacles and losses, a detachment of Guardians sets out on a journey.",
      genre: "Fantasy",
    },
    {
      title: "Two Towers",
      author: "J. R. R. Tolkien",
      img: "https://fantlab.ru/images/editions/big/1047?r=1657312690",
      year: 1954,
      desc: "The detachment of the Guardians breaks up, and the war comes to the steppes of Rohan - the state of the Riders, the allies of Gondor. Aragorn, Gimli and Legolas, as well as the younger hobbits, help the Rohirrim in the decisive battle against the magician Saruman, and the path of Frodo and Sam lies in darkness, to the Ash Mountains, and further, to the terrible fortress of Kirith Ungol, where a secret passage to the Dark Land is hidden",
      genre: "Fantasy",
    },
    {
      title: "Return of the King",
      author: "J. R. R. Tolkien",
      img: "https://fantlab.ru/images/editions/big/1047?r=1657312690",
      year: 1955,
      desc: "Minas Tirith is besieged by hordes of orcs. Aragorn and other members of the Guardian detachment need not only to recapture the capital of Gondor, but also to distract Sauron to themselves so that Frodo and Sam can destroy the Ring of Omnipotence. But they only have to wonder if the Chief Guardian or the Ring of Omnipotence is already alive Sauron's?",
      genre: "Fantasy",
    },
    {
      title: "The Silmarillion",
      author: "J. R. R. Tolkien",
      img: "https://fantlab.ru/images/editions/big/4012?r=1635854535",
      year: 1977,
      desc: "As you know, the writer J. R. R. Tolkien is first of all - The Hobbit, The Lord of the Rings and The Silmarillion. The first book is a fairy tale that was immensely popular. fantasy. And the third is the author's attempt to bring together the scattered legends of the Lands of Beleriand and make a more or less coherent story out of them. Unfortunately, the Professor did not manage to finish this work, in many respects the release of this book is the merit of his son Christopher. ",
      genre: "Fantasy",
    },
    {
      title: "The Adventures of Sherlock Holmes",
      author: "Arthur Conan Doyle",
      img: "https://fantlab.ru/images/editions/big/14717?r=1492544737",
      year: 1892,
      desc: "The first collection of stories about Sherlock Holmes is a narration by a military doctor, Dr. Watson (or Watson) about the great detective. It includes stories from 1891-1892. It is this collection that includes stories that became wildly popular in the early 20th century and remain popular to this day since.",
      genre: "Detective",
    },
    {
      title: "The Sign of Four",
      author: "Arthur Conan Doyle",
      img: "https://fantlab.ru/images/editions/big/57710?r=1492544197",
      year: 1890,
      desc: "The action takes place in 1888 London. Young, frightened governess Mary Morstan turns to Sherlock Holmes for help with two riddles. The first concerned the disappearance of her father 10 years ago, a few years after which she began to receive rare pearls in the mail from an unknown patron. Finally, a mysterious benefactor asks the girl to meet. However, Mary's meeting with a stranger only raises new questions for Holmes, and Mary causes even more fear and suspicion. But unforeseen difficulties not only do not embarrass the brilliant detective, but even more inflame his sports passion. unravel the tangled tangle of crime, where hidden treasure, greed, revenge and sudden death are intertwined.",
      genre: "Detective",
    },
    {
      title: "The Hound of the Baskervilles",
      author: "Arthur Conan Doyle",
      img: "https://fantlab.ru/images/editions/big/217570?r=1517143183",
      year: 1902,
      desc: "The strange death of Sir Charles Baskerville, the owner of a large fortune, frightens his neighbors and friends, because everyone knows that, according to family tradition, a terrible curse haunts his family - a demon in the form of a terrible dog appears from the depths of the swamps to take revenge on the Baskervilles for the ancient crime of a dissolute ancestor. Inhuman footprints were found near his body. Has the curse found another victim?",
      genre: "Detective",
    },
    {
      title: "The Return of Sherlock Holmes",
      author: "Arthur Conan Doyle",
      img: "https://fantlab.ru/images/editions/big/17603?r=1492543014",
      year: 1905,
      desc: "Conan Doyle considered his stories about Sherlock Holmes to be frivolous, so he decided to kill him - a common technique of writers. After the publication of the story The Last Case of Holmes, an angry stream of letters hit. There is an unconfirmed legend about the letter of Queen Conan Doyle that the death of Sherlock Holmes a tricky move by a detective, and the writer had to revive the character...",
      genre: "Detective",
    },
    {
      title: "Dinka",
      author: "Valentina Oseeva",
      img: "https://fantlab.ru/images/editions/big/123816?r=1492543517",
      year: 1959,
      desc: "The childhood of a girl named Dinka coincided with the difficult years that came after the first Russian revolution of 1905. She grew up in a family associated with the revolutionary underground. But not only the family raised Dinka - free and free, like a bird, Dinka was looking for communication with people from the people and she herself found friends and enemies. You will read about this Dinka, who was called a difficult girl, in the book.",
      genre: "realism",
    },
    {
      title: "Dinka says goodbye to childhood",
      author: "Valentina Oseeva",
      img: "https://fantlab.ru/images/editions/big/183710?r=1492545010",
      year: 1969,
      desc: "Continuation of the famous story by V. A. Oseeva Dinka during the years of the imperialist war. Dinka has been here for fifteen years, she spends her holidays on a farm in the company of Fyodor and Dmitr, she travels around the area on her beloved mare Prima. The older sister got married, the other works as a nurse. Dinka's father was sentenced to 10 years.Dinka remains true to her character - she does not tolerate betrayal, lies, cunning, meanness.Comes to the farm and finds out that the musician Yakov was killed, and his little son Ioska disappeared.Starting the search, she meets Zhuk and others homeless boys who hide Ioska in their homes. There are changes in communication between Lenya and Dinka, they understand that they love each other. For the first time in his life, Dinka will have to make a difficult choice: friendship or love.",
      genre: "realism",
    },
    {
      title: "Civil Campaign",
      author: "Lois McMaster Bujold",
      img: "https://fantlab.ru/images/editions/big/2741?r=1492543980",
      year: 1999,
      desc: "Miles has prepared a new operation ... All the moves of the enemy are calculated, all the troops are on alert. There can be no question of any failure! But everything does not turn out as planned ... failure follows failure ... the general battle was lost before it even started... Victory on the love front is oh so difficult! And here also political opponents raise their heads again... But a real commander knows no defeat. Under the onslaught of a professional, not a single fortress can resist... ",
      genre: "fantasy",
    },
    {
      title: "Borders of Infinity",
      author: "Lois McMaster Bujold",
      img: "https://fantlab.ru/images/editions/big/2726?r=1492543681",
      year: 1989,
      desc: "Following previous surgery, Miles is hospitalized. Broken arm bones are replaced with synthetic ones. Lying in a hospital bed, Miles helps Simon Illyan expose another conspiracy against his father.",
      genre: "fantasy",
    },
    {
      title: "Memory",
      author: "Lois McMaster Bujold",
      img: "https://fantlab.ru/images/editions/big/16327?r=1492543416",
      year: 1996,
      desc: "The consequences of cryo-revival led to the fact that Miles was forced to retire for health reasons. However, a calm, measured life is not for Vorkosigan, especially since Barrayar's security is again under threat - the head of the SIS, Simon Illyan, Miles's friend and mentor, becomes the target of another conspiracy What can the destruction of the memory chip implanted in Illyan's brain lead to? Who did it and why? Who can find the traitor and save the Empire? Miles is the only hope...",
      genre: "fantasy",
    },
    {
      title: "Shards of Honor",
      author: "Lois McMaster Bujold",
      img: "https://fantlab.ru/images/editions/big/2711?r=1574925172",
      year: 1986,
      desc: "The story of how Miles's parents met, Aral Vorkosigan - fallen from disgrace, the youngest admiral of the Barrayaran Empire and Cordelia Naismith - captain of the research ship of the Beta colony. Enemies, they fell in love. Spouses, they went through hell to save the Barrayaran Empire from the impending civil war...",
      genre: "fantasy",
    },
    {
      title: "The Warrior's Apprentice",
      author: "Lois McMaster Bujold",
      img: "https://fantlab.ru/images/editions/big/2724?r=1492543171",
      year: 1986,
      desc: "Young Miles Naismith, according to the old noble tradition, tries to make a military career, but due to the consequences of poisoning, he fails the entrance exam to the Imperial Academy. Having found himself a new goal in life, he goes to his mother's homeland - the Beta colony, where he becomes embroiled in an intrigue with trade Engaged in this dubious enterprise, Miles unwittingly finds himself in the thick of a local war. ",
      genre: "fantasy",
    },
    {
      title: "Komarra",
      author: "Lois McMaster Bujold",
      img: "https://fantlab.ru/images/editions/big/2740?r=1492543286",
      year: 1998,
      desc: "Miles Vorkosigan is sent to the planet Komarra, in whose orbit a solar reflector exploded under unclear circumstances, Miles meets a noble but unhappy Vor-lady, forced by duty to endure her tyrant husband as an aristocrat. Will Miles reveal another conspiracy against the Barrayaran Empire? ...",
      genre: "fantasy",
    },
    {
      title: "Diary of member",
      author: "Nicholas Sparks",
      img: "https://fantlab.ru/images/editions/big/70062?r=1492544771",
      year: 1996,
      desc: "This is not a love story , but a novel about love. About the love of ordinary men and women - like us ... Why did this book become an absolute bestseller all over the world? Why does it touch the souls of readers of all ages and intellectual levels? Read Memory Diary - and you will understand!",
      genre: "Love story",
    },
    {
      title: "Last song",
      author: "Nicholas Sparks",
      img: "https://fantlab.ru/images/editions/big/159480?r=1571986309",
      year: 2009,
      desc: "The story of complex relationships that determine fate and shape characters. .A love story that forever changed lives. .Love for which there are no barriers. .Love for which we are ready for anything. .Love that cannot be forgotten and which not only breaks hearts, but also heals them. .Love that stays with us forever...",
      genre: "Love story",
    },
    {
      title: "Hurry to Love",
      author: "Nicholas Sparks",
      img: "https://fantlab.ru/images/editions/big/68854?r=1492545191",
      year: 1999,
      desc: "Quiet town of Beaufort. Every year Landon Carter comes here to remember the story of his first love ... The story of passion and tenderness that many years ago connected him, a guy from a wealthy family, and Jamie Sullivan, the modest daughter of a local pastor. A story of joy and sadness, happiness and pain. The story of a feeling that a person has to experience only once in a lifetime - and remember forever ... ",
      genre: "Love story",
    },
    {
      title: "Dear John",
      author: "Nicholas Sparks",
      img: "https://fantlab.ru/images/editions/big/68847?r=1492544349",
      year: 2006,
      desc: "Dear John ... So begins the letter of Savannah, who, tired of waiting for her beloved, married another. These words broke John's heart. He no longer believes in women. He no longer believes in love. But do real feelings die? A mistake of youth can be considered a betrayal? Years will pass, John and Savannah will meet again. And the spark of the former flame, left in his soul, will flare up with a new fire ... Is it too late? But is it too late for happiness?",
      genre: "Love story",
    },
    {
      title: "Long road",
      author: "Nicholas Sparks",
      img: "https://fantlab.ru/images/editions/big/135657?r=1492543569",
      year: 2013,
      desc: "How bizarrely human destinies sometimes intertwine ... It would seem that what is common between the old man Ira Levinson, on the verge of life and death, remembering the story of his love for his wife, with whom he lived for more than fifty years, and student Sofia, who fell in love with an ex-rodeo champion and turned out to be before a difficult choice between feeling and a brilliant future? Two generations, two stories, eternal love ... ",
      genre: "Love story",
    },
    {
      title: "A quiet harbor",
      author: "Nicholas Sparks",
      img: "https://fantlab.ru/images/editions/big/352352?r=1652803468",
      year: 2010,
      desc: "Katie. A woman who suffered for many years from her husband's cruelty. The police could not help her - after all, it was there that the man who turned her life into hell served ... And then one day Katie's patience snapped. Having lost hope of salvation, she made a desperate escape - and found a sae haven in a small, calm southern town. But is Katie ready for a new relationship? Is she able to trust a man again, understand him and love him? Even if we are talking about such a charming person as the young widower Alex Whitley, who sees in Katie not only a lover and a friend, but also a mother for their children. Alex and Katie are walking on the thin ice of the unknown - and meanwhile, Katie's husband has already begun searching for her...",
      genre: "Love story",
    },
    {
      title: "Brothers Lionheart",
      author: "Astrid Lindgren",
      img: "https://fantlab.ru/images/editions/big/32684?r=1492544192",
      year: 1973,
      desc: "Two brothers live in Sweden. The younger one, Karl, is seriously ill. The elder one, Jonathan, consoles him, promising that if he dies, he will go to the magical, beautiful country of Nangiyalu. But it so happened that Jonathan, saving his brother from a fire, dies himself. After the death of Charles, the brothers meet in the fabulous Nangiyala. But not everything is fine there either. The evil ruler and his terrible monster keep the whole country in fear. The Lionheart brothers will challenge them.",
      genre: "Fairy tale",
    },
    {
      title: "Mio, my Mio!",
      author: "Astrid Lindgren",
      img: "https://fantlab.ru/images/editions/big/18462?r=1492542909",
      year: 1954,
      desc: "The little boy Mio was not loved by anyone and everyone offended. But one day he ended up in the Far Country and his life changed dramatically - it turns out he is a long-lost son and heir to the ruler of this country. He is loved in it, he has friends and a faithful horse. One day a knight Kato decided to take over the country, and only Mio with his kind and brave heart can handle him.",
      genre: "Fairy tale",
    },
    {
      title: "Roni the Robber's Daughter",
      author: "Astrid Lindgren",
      img: "https://fantlab.ru/images/editions/big/49012?r=1492543396",
      year: 1981,
      desc: "Roni, the daughter of the robber Mattis, has lived happily in the forest with her father's gang all her short life. Everything changes surprisingly when she meets Birk, the son of her worst enemy.",
      genre: "Fairy tale",
    },
    {
      title: "Pippi Longstocking",
      author: "Astrid Lindgren",
      img: "https://fantlab.ru/images/editions/big/240596?r=1546076859",
      year: 1945,
      desc: "A cycle of funny stories about an orphan girl who possessed great physical strength. The events unfold in the Chicken Villa, where the Pippi girl lives with Mr. Nils, a pet monkey, and a horse.",
      genre: "Fairy tale",
    },
    {
      title: "Carlson, who lives on the roof",
      author: "Astrid Lindgren",
      img: "https://fantlab.ru/images/editions/big/22238?r=1622729947",
      year: 1986,
      desc: "The cycle is about a moderately well-fed man in the prime of life, who lives on the roof and loves to misbehave.",
      genre: "Fairy tale",
    },
    {
      title: "Famous detective Kalle Blomkvist",
      author: "Astrid Lindgren",
      img: "https://fantlab.ru/images/editions/big/105397?r=1492543167",
      year: 1946,
      desc: "Kalle Blomkvist dreams of becoming a legendary detective. All day long he thinks about how he will catch criminals and unravel the most difficult cases ... But the trouble is - Kalle lives in a small and sleepy town, where the biggest crime is when Lame Frederick is on Sunday stole a mug of donations from the sacristy. But one day a mysterious stranger appeared in the town. He whistles unpleasantly, reads newspapers every day, and carries skeleton keys in his pocket. His name is Uncle Einar. Such a suspicious type demands attention and Kalle begins an investigation ... ",
      genre: "Adventures",
    },
    {
      title: "Famous detective Kalle Blomkvist takes risks",
      author: "Astrid Lindgren",
      img: "https://fantlab.ru/images/editions/big/105397?r=1492543167",
      year: 1951,
      desc: "Search work is great! But you can't forget friends, and the city is so quiet! Kalle decides to temporarily quit detective work - a war has been declared between the Scarlet and White Roses. And a cheerful company of friends goes to the real Prairies, spread out outside the city, where battles take place knights and castle assaults, and real secret cards become the object of the hunt!But the terrible find of Eva-Lotta interrupts the game and Kalle again challenges the real secret...",
      genre: "Adventures",
    },
    {
      title: "Kalle Blomkvist and Rasmus",
      author: "Astrid Lindgren",
      img: "https://fantlab.ru/images/editions/big/105397?r=1492543167",
      year: 1953,
      desc: "Little Rasmus, (as the son of a rich man ), is kidnapped. On the trail of the kidnappers, the detective boy Kalle comes out. Although the end is good, blood is still shed ...",
      genre: "Adventures",
    },
    {
      title: "Twelve",
      author: "Alexander Blok",
      img: "https://fantlab.ru/images/editions/big/168683?r=1492543225",
      year: 1918,
      desc: "Revolutionary Petrograd, a mixture of words, images, ideas, from the smallest to the greatest, from the vulgar and tavern to the divine. All this is reflected in the poem of Alexander Blok.",
      genre: "Poetry",
    },
    {
      title: "Death of gods",
      author: "Nick Perumov",
      img: "https://fantlab.ru/images/editions/big/27488?r=1492543078",
      year: 1994,
      desc: "For many centuries, the seven Young Gods, who once defeated and overthrew their predecessors, have ruled over Hjorvard. But now the time has come for them to face the threat of their power - the magician Hedin, his student Hagen and his longtime associate Rakot raise a rebellion, and in the outbreak of war, Hjervard can change beyond recognition...",
      genre: "Action",
    },
    {
      title: "Warrior of the Great Darkness",
      author: "Nick Perumov",
      img: "https://fantlab.ru/images/editions/big/297?r=1492543581",
      year: 1995,
      desc: "Trogvar and Aryata - the children of the last king Hallan, who lost his throne in civil strife - were separated; fate threw them into different parts of the world of Hjorvard. The prince became a student of the magician, and his sister wandered around the world and cherished plans for revenge ... Will they meet? And if so, how will they accept each other, and most importantly, will any of them be able to win back their rightful throne?",
      genre: "Action",
    },
    {
      title: "Land Without Joy",
      author: "Nick Perumov",
      img: "https://fantlab.ru/images/editions/big/305?r=1492543878",
      year: 1995,
      desc: "The former centurion Argnist, and now the owner of a peaceful farm, is forced, like his neighbors, to repulse the attacks of terrible creatures called the Horde every now and then. On this farm, the paths of different people (and non-humans) will converge: a dwarf Dwalin, the elf Eltara, a mysterious someone called the Destroyer, circling nearby.... Sooner or later they - or their children - will have to find out: who let the Horde into the peaceful lands of Northern Hjorvard? rebel army, an elf will become a mother and pay a terrible price for it, a dwarf will make friends with a more than strange magician... Their destinies are intertwined more than bizarrely, but all of them (even those who are non-human races) still remain people in their souls. There is a chance to win.",
      genre: "Action",
    },
    {
      title: "Tim Thaler, or Sold Laughter",
      author: "James Crews",
      img: "https://fantlab.ru/images/editions/big/49201?r=1492544531",
      year: 1962,
      desc: "The boy Tim lived in one very poor family, but, despite his poverty, he was fabulously rich. His wealth was laughter. Cheerful, iridescent, contagious laughter. But Tim did not know that this was the biggest and most important wealth, he believed that without money there is no happiness. And then one day a man who introduced himself as a friend of his father suggested that Tim change his laughter for the opportunity to win any bet, even the most insane.",
      genre: "Fairy tale",
    },
  ],
  bm = { books: ns },
  eg = Object.freeze(
    Object.defineProperty(
      { __proto__: null, books: ns, default: bm },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  tg = () =>
    ee(mt, {
      children: [
        P("h1", { children: "RS-Books" }),
        P(Zm, {}),
        P(td, { ...eg }),
      ],
    }),
  ng = () =>
    ee("div", {
      children: [
        P("h1", { children: "About us" }),
        "Full version: ",
        P("a", {
          href: "https://rs-book.netlify.app/",
          children: " https://rs-book.netlify.app/",
        }),
        P("p", { children: "Oksana Kalinina @oksan4ik10" }),
      ],
    }),
  rg = () =>
    ee("div", {
      children: [
        P("h1", { children: "404" }),
        ee("p", {
          children: [
            "This page does not exist. Go ",
            P(ed, { to: "/", children: "home" }),
          ],
        }),
      ],
    });
var Jr = (e) => e.type === "checkbox",
  An = (e) => e instanceof Date,
  Re = (e) => e == null;
const nd = (e) => typeof e == "object";
var ge = (e) => !Re(e) && !Array.isArray(e) && nd(e) && !An(e),
  lg = (e) =>
    ge(e) && e.target ? (Jr(e.target) ? e.target.checked : e.target.value) : e,
  ig = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e,
  og = (e, t) => e.has(ig(t)),
  ag = (e) => {
    const t = e.constructor && e.constructor.prototype;
    return ge(t) && t.hasOwnProperty("isPrototypeOf");
  },
  rs =
    typeof window < "u" &&
    typeof window.HTMLElement < "u" &&
    typeof document < "u";
function tn(e) {
  let t;
  const n = Array.isArray(e);
  if (e instanceof Date) t = new Date(e);
  else if (e instanceof Set) t = new Set(e);
  else if (
    !(rs && (e instanceof Blob || e instanceof FileList)) &&
    (n || ge(e))
  )
    if (((t = n ? [] : {}), !Array.isArray(e) && !ag(e))) t = e;
    else for (const r in e) t[r] = tn(e[r]);
  else return e;
  return t;
}
var Xr = (e) => (Array.isArray(e) ? e.filter(Boolean) : []),
  fe = (e) => e === void 0,
  z = (e, t, n) => {
    if (!t || !ge(e)) return n;
    const r = Xr(t.split(/[,[\].]+?/)).reduce((l, i) => (Re(l) ? l : l[i]), e);
    return fe(r) || r === e ? (fe(e[t]) ? n : e[t]) : r;
  };
const Tu = { BLUR: "blur", FOCUS_OUT: "focusout", CHANGE: "change" },
  lt = {
    onBlur: "onBlur",
    onChange: "onChange",
    onSubmit: "onSubmit",
    onTouched: "onTouched",
    all: "all",
  },
  yt = {
    max: "max",
    min: "min",
    maxLength: "maxLength",
    minLength: "minLength",
    pattern: "pattern",
    required: "required",
    validate: "validate",
  };
kt.createContext(null);
var sg = (e, t, n, r = !0) => {
    const l = { defaultValues: t._defaultValues };
    for (const i in e)
      Object.defineProperty(l, i, {
        get: () => {
          const o = i;
          return (
            t._proxyFormState[o] !== lt.all &&
              (t._proxyFormState[o] = !r || lt.all),
            n && (n[o] = !0),
            e[o]
          );
        },
      });
    return l;
  },
  Qe = (e) => ge(e) && !Object.keys(e).length,
  ug = (e, t, n, r) => {
    n(e);
    const { name: l, ...i } = e;
    return (
      Qe(i) ||
      Object.keys(i).length >= Object.keys(t).length ||
      Object.keys(i).find((o) => t[o] === (!r || lt.all))
    );
  },
  qi = (e) => (Array.isArray(e) ? e : [e]);
function cg(e) {
  const t = kt.useRef(e);
  (t.current = e),
    kt.useEffect(() => {
      const n =
        !e.disabled &&
        t.current.subject &&
        t.current.subject.subscribe({ next: t.current.next });
      return () => {
        n && n.unsubscribe();
      };
    }, [e.disabled]);
}
var dt = (e) => typeof e == "string",
  fg = (e, t, n, r, l) =>
    dt(e)
      ? (r && t.watch.add(e), z(n, e, l))
      : Array.isArray(e)
      ? e.map((i) => (r && t.watch.add(i), z(n, i)))
      : (r && (t.watchAll = !0), n),
  ls = (e) => /^\w*$/.test(e),
  rd = (e) => Xr(e.replace(/["|']|\]/g, "").split(/\.|\[/));
function b(e, t, n) {
  let r = -1;
  const l = ls(t) ? [t] : rd(t),
    i = l.length,
    o = i - 1;
  for (; ++r < i; ) {
    const a = l[r];
    let s = n;
    if (r !== o) {
      const c = e[a];
      s = ge(c) || Array.isArray(c) ? c : isNaN(+l[r + 1]) ? {} : [];
    }
    (e[a] = s), (e = e[a]);
  }
  return e;
}
var dg = (e, t, n, r, l) =>
  t
    ? {
        ...n[e],
        types: { ...(n[e] && n[e].types ? n[e].types : {}), [r]: l || !0 },
      }
    : {};
const ra = (e, t, n) => {
  for (const r of n || Object.keys(e)) {
    const l = z(e, r);
    if (l) {
      const { _f: i, ...o } = l;
      if (i && t(i.name)) {
        if (i.ref.focus) {
          i.ref.focus();
          break;
        } else if (i.refs && i.refs[0].focus) {
          i.refs[0].focus();
          break;
        }
      } else ge(o) && ra(o, t);
    }
  }
};
var Ru = (e) => ({
    isOnSubmit: !e || e === lt.onSubmit,
    isOnBlur: e === lt.onBlur,
    isOnChange: e === lt.onChange,
    isOnAll: e === lt.all,
    isOnTouch: e === lt.onTouched,
  }),
  Du = (e, t, n) =>
    !n &&
    (t.watchAll ||
      t.watch.has(e) ||
      [...t.watch].some(
        (r) => e.startsWith(r) && /^\.\w+/.test(e.slice(r.length))
      )),
  hg = (e, t, n) => {
    const r = Xr(z(e, n));
    return b(r, "root", t[n]), b(e, n, r), e;
  },
  Vn = (e) => typeof e == "boolean",
  is = (e) => e.type === "file",
  Bt = (e) => typeof e == "function",
  ei = (e) => {
    if (!rs) return !1;
    const t = e ? e.ownerDocument : 0;
    return (
      e instanceof
      (t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement)
    );
  },
  Nl = (e) => dt(e),
  os = (e) => e.type === "radio",
  ti = (e) => e instanceof RegExp;
const Fu = { value: !1, isValid: !1 },
  Ou = { value: !0, isValid: !0 };
var ld = (e) => {
  if (Array.isArray(e)) {
    if (e.length > 1) {
      const t = e
        .filter((n) => n && n.checked && !n.disabled)
        .map((n) => n.value);
      return { value: t, isValid: !!t.length };
    }
    return e[0].checked && !e[0].disabled
      ? e[0].attributes && !fe(e[0].attributes.value)
        ? fe(e[0].value) || e[0].value === ""
          ? Ou
          : { value: e[0].value, isValid: !0 }
        : Ou
      : Fu;
  }
  return Fu;
};
const Au = { isValid: !1, value: null };
var id = (e) =>
  Array.isArray(e)
    ? e.reduce(
        (t, n) =>
          n && n.checked && !n.disabled ? { isValid: !0, value: n.value } : t,
        Au
      )
    : Au;
function zu(e, t, n = "validate") {
  if (Nl(e) || (Array.isArray(e) && e.every(Nl)) || (Vn(e) && !e))
    return { type: n, message: Nl(e) ? e : "", ref: t };
}
var kn = (e) => (ge(e) && !ti(e) ? e : { value: e, message: "" }),
  Mu = async (e, t, n, r, l) => {
    const {
        ref: i,
        refs: o,
        required: a,
        maxLength: s,
        minLength: c,
        min: g,
        max: m,
        pattern: p,
        validate: v,
        name: S,
        valueAsNumber: w,
        mount: T,
        disabled: f,
      } = e._f,
      u = z(t, S);
    if (!T || f) return {};
    const d = o ? o[0] : i,
      k = (H) => {
        r &&
          d.reportValidity &&
          (d.setCustomValidity(Vn(H) ? "" : H || ""), d.reportValidity());
      },
      C = {},
      F = os(i),
      O = Jr(i),
      M = F || O,
      K =
        ((w || is(i)) && fe(i.value) && fe(u)) ||
        (ei(i) && i.value === "") ||
        u === "" ||
        (Array.isArray(u) && !u.length),
      U = dg.bind(null, S, n, C),
      ae = (H, V, Z, xe = yt.maxLength, Ce = yt.minLength) => {
        const Ae = H ? V : Z;
        C[S] = {
          type: H ? xe : Ce,
          message: Ae,
          ref: i,
          ...U(H ? xe : Ce, Ae),
        };
      };
    if (
      l
        ? !Array.isArray(u) || !u.length
        : a &&
          ((!M && (K || Re(u))) ||
            (Vn(u) && !u) ||
            (O && !ld(o).isValid) ||
            (F && !id(o).isValid))
    ) {
      const { value: H, message: V } = Nl(a)
        ? { value: !!a, message: a }
        : kn(a);
      if (
        H &&
        ((C[S] = {
          type: yt.required,
          message: V,
          ref: d,
          ...U(yt.required, V),
        }),
        !n)
      )
        return k(V), C;
    }
    if (!K && (!Re(g) || !Re(m))) {
      let H, V;
      const Z = kn(m),
        xe = kn(g);
      if (!Re(u) && !isNaN(u)) {
        const Ce = i.valueAsNumber || (u && +u);
        Re(Z.value) || (H = Ce > Z.value), Re(xe.value) || (V = Ce < xe.value);
      } else {
        const Ce = i.valueAsDate || new Date(u),
          Ae = (j) => new Date(new Date().toDateString() + " " + j),
          N = i.type == "time",
          B = i.type == "week";
        dt(Z.value) &&
          u &&
          (H = N
            ? Ae(u) > Ae(Z.value)
            : B
            ? u > Z.value
            : Ce > new Date(Z.value)),
          dt(xe.value) &&
            u &&
            (V = N
              ? Ae(u) < Ae(xe.value)
              : B
              ? u < xe.value
              : Ce < new Date(xe.value));
      }
      if ((H || V) && (ae(!!H, Z.message, xe.message, yt.max, yt.min), !n))
        return k(C[S].message), C;
    }
    if ((s || c) && !K && (dt(u) || (l && Array.isArray(u)))) {
      const H = kn(s),
        V = kn(c),
        Z = !Re(H.value) && u.length > +H.value,
        xe = !Re(V.value) && u.length < +V.value;
      if ((Z || xe) && (ae(Z, H.message, V.message), !n))
        return k(C[S].message), C;
    }
    if (p && !K && dt(u)) {
      const { value: H, message: V } = kn(p);
      if (
        ti(H) &&
        !u.match(H) &&
        ((C[S] = { type: yt.pattern, message: V, ref: i, ...U(yt.pattern, V) }),
        !n)
      )
        return k(V), C;
    }
    if (v) {
      if (Bt(v)) {
        const H = await v(u, t),
          V = zu(H, d);
        if (V && ((C[S] = { ...V, ...U(yt.validate, V.message) }), !n))
          return k(V.message), C;
      } else if (ge(v)) {
        let H = {};
        for (const V in v) {
          if (!Qe(H) && !n) break;
          const Z = zu(await v[V](u, t), d, V);
          Z &&
            ((H = { ...Z, ...U(V, Z.message) }), k(Z.message), n && (C[S] = H));
        }
        if (!Qe(H) && ((C[S] = { ref: d, ...H }), !n)) return C;
      }
    }
    return k(!0), C;
  };
function pg(e, t) {
  const n = t.slice(0, -1).length;
  let r = 0;
  for (; r < n; ) e = fe(e) ? r++ : e[t[r++]];
  return e;
}
function mg(e) {
  for (const t in e) if (!fe(e[t])) return !1;
  return !0;
}
function we(e, t) {
  const n = Array.isArray(t) ? t : ls(t) ? [t] : rd(t),
    r = n.length === 1 ? e : pg(e, n),
    l = n.length - 1,
    i = n[l];
  return (
    r && delete r[i],
    l !== 0 &&
      ((ge(r) && Qe(r)) || (Array.isArray(r) && mg(r))) &&
      we(e, n.slice(0, -1)),
    e
  );
}
function bi() {
  let e = [];
  return {
    get observers() {
      return e;
    },
    next: (l) => {
      for (const i of e) i.next && i.next(l);
    },
    subscribe: (l) => (
      e.push(l),
      {
        unsubscribe: () => {
          e = e.filter((i) => i !== l);
        },
      }
    ),
    unsubscribe: () => {
      e = [];
    },
  };
}
var ni = (e) => Re(e) || !nd(e);
function on(e, t) {
  if (ni(e) || ni(t)) return e === t;
  if (An(e) && An(t)) return e.getTime() === t.getTime();
  const n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (const l of n) {
    const i = e[l];
    if (!r.includes(l)) return !1;
    if (l !== "ref") {
      const o = t[l];
      if (
        (An(i) && An(o)) ||
        (ge(i) && ge(o)) ||
        (Array.isArray(i) && Array.isArray(o))
          ? !on(i, o)
          : i !== o
      )
        return !1;
    }
  }
  return !0;
}
var od = (e) => e.type === "select-multiple",
  gg = (e) => os(e) || Jr(e),
  eo = (e) => ei(e) && e.isConnected,
  ad = (e) => {
    for (const t in e) if (Bt(e[t])) return !0;
    return !1;
  };
function ri(e, t = {}) {
  const n = Array.isArray(e);
  if (ge(e) || n)
    for (const r in e)
      Array.isArray(e[r]) || (ge(e[r]) && !ad(e[r]))
        ? ((t[r] = Array.isArray(e[r]) ? [] : {}), ri(e[r], t[r]))
        : Re(e[r]) || (t[r] = !0);
  return t;
}
function sd(e, t, n) {
  const r = Array.isArray(e);
  if (ge(e) || r)
    for (const l in e)
      Array.isArray(e[l]) || (ge(e[l]) && !ad(e[l]))
        ? fe(t) || ni(n[l])
          ? (n[l] = Array.isArray(e[l]) ? ri(e[l], []) : { ...ri(e[l]) })
          : sd(e[l], Re(t) ? {} : t[l], n[l])
        : (n[l] = !on(e[l], t[l]));
  return n;
}
var to = (e, t) => sd(e, t, ri(t)),
  ud = (e, { valueAsNumber: t, valueAsDate: n, setValueAs: r }) =>
    fe(e)
      ? e
      : t
      ? e === ""
        ? NaN
        : e && +e
      : n && dt(e)
      ? new Date(e)
      : r
      ? r(e)
      : e;
function no(e) {
  const t = e.ref;
  if (!(e.refs ? e.refs.every((n) => n.disabled) : t.disabled))
    return is(t)
      ? t.files
      : os(t)
      ? id(e.refs).value
      : od(t)
      ? [...t.selectedOptions].map(({ value: n }) => n)
      : Jr(t)
      ? ld(e.refs).value
      : ud(fe(t.value) ? e.ref.value : t.value, e);
}
var yg = (e, t, n, r) => {
    const l = {};
    for (const i of e) {
      const o = z(t, i);
      o && b(l, i, o._f);
    }
    return {
      criteriaMode: n,
      names: [...e],
      fields: l,
      shouldUseNativeValidation: r,
    };
  },
  ur = (e) =>
    fe(e)
      ? e
      : ti(e)
      ? e.source
      : ge(e)
      ? ti(e.value)
        ? e.value.source
        : e.value
      : e,
  vg = (e) =>
    e.mount &&
    (e.required ||
      e.min ||
      e.max ||
      e.maxLength ||
      e.minLength ||
      e.pattern ||
      e.validate);
function Iu(e, t, n) {
  const r = z(e, n);
  if (r || ls(n)) return { error: r, name: n };
  const l = n.split(".");
  for (; l.length; ) {
    const i = l.join("."),
      o = z(t, i),
      a = z(e, i);
    if (o && !Array.isArray(o) && n !== i) return { name: n };
    if (a && a.type) return { name: i, error: a };
    l.pop();
  }
  return { name: n };
}
var wg = (e, t, n, r, l) =>
    l.isOnAll
      ? !1
      : !n && l.isOnTouch
      ? !(t || e)
      : (n ? r.isOnBlur : l.isOnBlur)
      ? !e
      : (n ? r.isOnChange : l.isOnChange)
      ? e
      : !0,
  kg = (e, t) => !Xr(z(e, t)).length && we(e, t);
const Sg = {
  mode: lt.onSubmit,
  reValidateMode: lt.onChange,
  shouldFocusError: !0,
};
function Eg(e = {}, t) {
  let n = { ...Sg, ...e },
    r = {
      submitCount: 0,
      isDirty: !1,
      isLoading: Bt(n.defaultValues),
      isValidating: !1,
      isSubmitted: !1,
      isSubmitting: !1,
      isSubmitSuccessful: !1,
      isValid: !1,
      touchedFields: {},
      dirtyFields: {},
      errors: {},
    },
    l = {},
    i =
      ge(n.defaultValues) || ge(n.values)
        ? tn(n.defaultValues || n.values) || {}
        : {},
    o = n.shouldUnregister ? {} : tn(i),
    a = { action: !1, mount: !1, watch: !1 },
    s = {
      mount: new Set(),
      unMount: new Set(),
      array: new Set(),
      watch: new Set(),
    },
    c,
    g = 0;
  const m = {
      isDirty: !1,
      dirtyFields: !1,
      touchedFields: !1,
      isValidating: !1,
      isValid: !1,
      errors: !1,
    },
    p = { values: bi(), array: bi(), state: bi() },
    v = e.resetOptions && e.resetOptions.keepDirtyValues,
    S = Ru(n.mode),
    w = Ru(n.reValidateMode),
    T = n.criteriaMode === lt.all,
    f = (h) => (y) => {
      clearTimeout(g), (g = setTimeout(h, y));
    },
    u = async (h) => {
      if (m.isValid || h) {
        const y = n.resolver ? Qe((await K()).errors) : await ae(l, !0);
        y !== r.isValid && p.state.next({ isValid: y });
      }
    },
    d = (h) => m.isValidating && p.state.next({ isValidating: h }),
    k = (h, y = [], E, A, R = !0, _ = !0) => {
      if (A && E) {
        if (((a.action = !0), _ && Array.isArray(z(l, h)))) {
          const I = E(z(l, h), A.argA, A.argB);
          R && b(l, h, I);
        }
        if (_ && Array.isArray(z(r.errors, h))) {
          const I = E(z(r.errors, h), A.argA, A.argB);
          R && b(r.errors, h, I), kg(r.errors, h);
        }
        if (m.touchedFields && _ && Array.isArray(z(r.touchedFields, h))) {
          const I = E(z(r.touchedFields, h), A.argA, A.argB);
          R && b(r.touchedFields, h, I);
        }
        m.dirtyFields && (r.dirtyFields = to(i, o)),
          p.state.next({
            name: h,
            isDirty: V(h, y),
            dirtyFields: r.dirtyFields,
            errors: r.errors,
            isValid: r.isValid,
          });
      } else b(o, h, y);
    },
    C = (h, y) => {
      b(r.errors, h, y), p.state.next({ errors: r.errors });
    },
    F = (h, y, E, A) => {
      const R = z(l, h);
      if (R) {
        const _ = z(o, h, fe(E) ? z(i, h) : E);
        fe(_) || (A && A.defaultChecked) || y
          ? b(o, h, y ? _ : no(R._f))
          : Ce(h, _),
          a.mount && u();
      }
    },
    O = (h, y, E, A, R) => {
      let _ = !1,
        I = !1;
      const ie = { name: h };
      if (!E || A) {
        m.isDirty &&
          ((I = r.isDirty),
          (r.isDirty = ie.isDirty = V()),
          (_ = I !== ie.isDirty));
        const ue = on(z(i, h), y);
        (I = z(r.dirtyFields, h)),
          ue ? we(r.dirtyFields, h) : b(r.dirtyFields, h, !0),
          (ie.dirtyFields = r.dirtyFields),
          (_ = _ || (m.dirtyFields && I !== !ue));
      }
      if (E) {
        const ue = z(r.touchedFields, h);
        ue ||
          (b(r.touchedFields, h, E),
          (ie.touchedFields = r.touchedFields),
          (_ = _ || (m.touchedFields && ue !== E)));
      }
      return _ && R && p.state.next(ie), _ ? ie : {};
    },
    M = (h, y, E, A) => {
      const R = z(r.errors, h),
        _ = m.isValid && Vn(y) && r.isValid !== y;
      if (
        (e.delayError && E
          ? ((c = f(() => C(h, E))), c(e.delayError))
          : (clearTimeout(g),
            (c = null),
            E ? b(r.errors, h, E) : we(r.errors, h)),
        (E ? !on(R, E) : R) || !Qe(A) || _)
      ) {
        const I = {
          ...A,
          ...(_ && Vn(y) ? { isValid: y } : {}),
          errors: r.errors,
          name: h,
        };
        (r = { ...r, ...I }), p.state.next(I);
      }
      d(!1);
    },
    K = async (h) =>
      n.resolver(
        o,
        n.context,
        yg(h || s.mount, l, n.criteriaMode, n.shouldUseNativeValidation)
      ),
    U = async (h) => {
      const { errors: y } = await K();
      if (h)
        for (const E of h) {
          const A = z(y, E);
          A ? b(r.errors, E, A) : we(r.errors, E);
        }
      else r.errors = y;
      return y;
    },
    ae = async (h, y, E = { valid: !0 }) => {
      for (const A in h) {
        const R = h[A];
        if (R) {
          const { _f: _, ...I } = R;
          if (_) {
            const ie = s.array.has(_.name),
              ue = await Mu(R, o, T, n.shouldUseNativeValidation && !y, ie);
            if (ue[_.name] && ((E.valid = !1), y)) break;
            !y &&
              (z(ue, _.name)
                ? ie
                  ? hg(r.errors, ue, _.name)
                  : b(r.errors, _.name, ue[_.name])
                : we(r.errors, _.name));
          }
          I && (await ae(I, y, E));
        }
      }
      return E.valid;
    },
    H = () => {
      for (const h of s.unMount) {
        const y = z(l, h);
        y &&
          (y._f.refs ? y._f.refs.every((E) => !eo(E)) : !eo(y._f.ref)) &&
          be(h);
      }
      s.unMount = new Set();
    },
    V = (h, y) => (h && y && b(o, h, y), !on(q(), i)),
    Z = (h, y, E) =>
      fg(h, s, { ...(a.mount ? o : fe(y) ? i : dt(h) ? { [h]: y } : y) }, E, y),
    xe = (h) =>
      Xr(z(a.mount ? o : i, h, e.shouldUnregister ? z(i, h, []) : [])),
    Ce = (h, y, E = {}) => {
      const A = z(l, h);
      let R = y;
      if (A) {
        const _ = A._f;
        _ &&
          (!_.disabled && b(o, h, ud(y, _)),
          (R = ei(_.ref) && Re(y) ? "" : y),
          od(_.ref)
            ? [..._.ref.options].forEach(
                (I) => (I.selected = R.includes(I.value))
              )
            : _.refs
            ? Jr(_.ref)
              ? _.refs.length > 1
                ? _.refs.forEach(
                    (I) =>
                      (!I.defaultChecked || !I.disabled) &&
                      (I.checked = Array.isArray(R)
                        ? !!R.find((ie) => ie === I.value)
                        : R === I.value)
                  )
                : _.refs[0] && (_.refs[0].checked = !!R)
              : _.refs.forEach((I) => (I.checked = I.value === R))
            : is(_.ref)
            ? (_.ref.value = "")
            : ((_.ref.value = R),
              _.ref.type || p.values.next({ name: h, values: { ...o } })));
      }
      (E.shouldDirty || E.shouldTouch) &&
        O(h, R, E.shouldTouch, E.shouldDirty, !0),
        E.shouldValidate && j(h);
    },
    Ae = (h, y, E) => {
      for (const A in y) {
        const R = y[A],
          _ = `${h}.${A}`,
          I = z(l, _);
        (s.array.has(h) || !ni(R) || (I && !I._f)) && !An(R)
          ? Ae(_, R, E)
          : Ce(_, R, E);
      }
    },
    N = (h, y, E = {}) => {
      const A = z(l, h),
        R = s.array.has(h),
        _ = tn(y);
      b(o, h, _),
        R
          ? (p.array.next({ name: h, values: { ...o } }),
            (m.isDirty || m.dirtyFields) &&
              E.shouldDirty &&
              p.state.next({
                name: h,
                dirtyFields: to(i, o),
                isDirty: V(h, _),
              }))
          : A && !A._f && !Re(_)
          ? Ae(h, _, E)
          : Ce(h, _, E),
        Du(h, s) && p.state.next({ ...r }),
        p.values.next({ name: h, values: { ...o } }),
        !a.mount && t();
    },
    B = async (h) => {
      const y = h.target;
      let E = y.name,
        A = !0;
      const R = z(l, E),
        _ = () => (y.type ? no(R._f) : lg(h));
      if (R) {
        let I, ie;
        const ue = _(),
          vn = h.type === Tu.BLUR || h.type === Tu.FOCUS_OUT,
          pd =
            (!vg(R._f) && !n.resolver && !z(r.errors, E) && !R._f.deps) ||
            wg(vn, z(r.touchedFields, E), r.isSubmitted, w, S),
          Si = Du(E, s, vn);
        b(o, E, ue),
          vn
            ? (R._f.onBlur && R._f.onBlur(h), c && c(0))
            : R._f.onChange && R._f.onChange(h);
        const Ei = O(E, ue, vn, !1),
          md = !Qe(Ei) || Si;
        if (
          (!vn && p.values.next({ name: E, type: h.type, values: { ...o } }),
          pd)
        )
          return (
            m.isValid && u(), md && p.state.next({ name: E, ...(Si ? {} : Ei) })
          );
        if ((!vn && Si && p.state.next({ ...r }), d(!0), n.resolver)) {
          const { errors: cs } = await K([E]),
            gd = Iu(r.errors, l, E),
            fs = Iu(cs, l, gd.name || E);
          (I = fs.error), (E = fs.name), (ie = Qe(cs));
        } else
          (I = (await Mu(R, o, T, n.shouldUseNativeValidation))[E]),
            (A = isNaN(ue) || ue === z(o, E, ue)),
            A && (I ? (ie = !1) : m.isValid && (ie = await ae(l, !0)));
        A && (R._f.deps && j(R._f.deps), M(E, ie, I, Ei));
      }
    },
    j = async (h, y = {}) => {
      let E, A;
      const R = qi(h);
      if ((d(!0), n.resolver)) {
        const _ = await U(fe(h) ? h : R);
        (E = Qe(_)), (A = h ? !R.some((I) => z(_, I)) : E);
      } else
        h
          ? ((A = (
              await Promise.all(
                R.map(async (_) => {
                  const I = z(l, _);
                  return await ae(I && I._f ? { [_]: I } : I);
                })
              )
            ).every(Boolean)),
            !(!A && !r.isValid) && u())
          : (A = E = await ae(l));
      return (
        p.state.next({
          ...(!dt(h) || (m.isValid && E !== r.isValid) ? {} : { name: h }),
          ...(n.resolver || !h ? { isValid: E } : {}),
          errors: r.errors,
          isValidating: !1,
        }),
        y.shouldFocus &&
          !A &&
          ra(l, (_) => _ && z(r.errors, _), h ? R : s.mount),
        A
      );
    },
    q = (h) => {
      const y = { ...i, ...(a.mount ? o : {}) };
      return fe(h) ? y : dt(h) ? z(y, h) : h.map((E) => z(y, E));
    },
    se = (h, y) => ({
      invalid: !!z((y || r).errors, h),
      isDirty: !!z((y || r).dirtyFields, h),
      isTouched: !!z((y || r).touchedFields, h),
      error: z((y || r).errors, h),
    }),
    yn = (h) => {
      h && qi(h).forEach((y) => we(r.errors, y)),
        p.state.next({ errors: h ? r.errors : {} });
    },
    gt = (h, y, E) => {
      const A = (z(l, h, { _f: {} })._f || {}).ref;
      b(r.errors, h, { ...y, ref: A }),
        p.state.next({ name: h, errors: r.errors, isValid: !1 }),
        E && E.shouldFocus && A && A.focus && A.focus();
    },
    er = (h, y) =>
      Bt(h)
        ? p.values.subscribe({ next: (E) => h(Z(void 0, y), E) })
        : Z(h, y, !0),
    be = (h, y = {}) => {
      for (const E of h ? qi(h) : s.mount)
        s.mount.delete(E),
          s.array.delete(E),
          y.keepValue || (we(l, E), we(o, E)),
          !y.keepError && we(r.errors, E),
          !y.keepDirty && we(r.dirtyFields, E),
          !y.keepTouched && we(r.touchedFields, E),
          !n.shouldUnregister && !y.keepDefaultValue && we(i, E);
      p.values.next({ values: { ...o } }),
        p.state.next({ ...r, ...(y.keepDirty ? { isDirty: V() } : {}) }),
        !y.keepIsValid && u();
    },
    Tt = (h, y = {}) => {
      let E = z(l, h);
      const A = Vn(y.disabled);
      return (
        b(l, h, {
          ...(E || {}),
          _f: {
            ...(E && E._f ? E._f : { ref: { name: h } }),
            name: h,
            mount: !0,
            ...y,
          },
        }),
        s.mount.add(h),
        E
          ? A && b(o, h, y.disabled ? void 0 : z(o, h, no(E._f)))
          : F(h, !0, y.value),
        {
          ...(A ? { disabled: y.disabled } : {}),
          ...(n.shouldUseNativeValidation
            ? {
                required: !!y.required,
                min: ur(y.min),
                max: ur(y.max),
                minLength: ur(y.minLength),
                maxLength: ur(y.maxLength),
                pattern: ur(y.pattern),
              }
            : {}),
          name: h,
          onChange: B,
          onBlur: B,
          ref: (R) => {
            if (R) {
              Tt(h, y), (E = z(l, h));
              const _ =
                  (fe(R.value) &&
                    R.querySelectorAll &&
                    R.querySelectorAll("input,select,textarea")[0]) ||
                  R,
                I = gg(_),
                ie = E._f.refs || [];
              if (I ? ie.find((ue) => ue === _) : _ === E._f.ref) return;
              b(l, h, {
                _f: {
                  ...E._f,
                  ...(I
                    ? {
                        refs: [
                          ...ie.filter(eo),
                          _,
                          ...(Array.isArray(z(i, h)) ? [{}] : []),
                        ],
                        ref: { type: _.type, name: h },
                      }
                    : { ref: _ }),
                },
              }),
                F(h, !1, void 0, _);
            } else
              (E = z(l, h, {})),
                E._f && (E._f.mount = !1),
                (n.shouldUnregister || y.shouldUnregister) &&
                  !(og(s.array, h) && a.action) &&
                  s.unMount.add(h);
          },
        }
      );
    },
    as = () => n.shouldFocusError && ra(l, (h) => h && z(r.errors, h), s.mount),
    cd = (h, y) => async (E) => {
      E && (E.preventDefault && E.preventDefault(), E.persist && E.persist());
      let A = tn(o);
      if ((p.state.next({ isSubmitting: !0 }), n.resolver)) {
        const { errors: R, values: _ } = await K();
        (r.errors = R), (A = _);
      } else await ae(l);
      we(r.errors, "root"),
        Qe(r.errors)
          ? (p.state.next({ errors: {} }), await h(A, E))
          : (y && (await y({ ...r.errors }, E)), as(), setTimeout(as)),
        p.state.next({
          isSubmitted: !0,
          isSubmitting: !1,
          isSubmitSuccessful: Qe(r.errors),
          submitCount: r.submitCount + 1,
          errors: r.errors,
        });
    },
    fd = (h, y = {}) => {
      z(l, h) &&
        (fe(y.defaultValue)
          ? N(h, z(i, h))
          : (N(h, y.defaultValue), b(i, h, y.defaultValue)),
        y.keepTouched || we(r.touchedFields, h),
        y.keepDirty ||
          (we(r.dirtyFields, h),
          (r.isDirty = y.defaultValue ? V(h, z(i, h)) : V())),
        y.keepError || (we(r.errors, h), m.isValid && u()),
        p.state.next({ ...r }));
    },
    ss = (h, y = {}) => {
      const E = h || i,
        A = tn(E),
        R = h && !Qe(h) ? A : i;
      if ((y.keepDefaultValues || (i = E), !y.keepValues)) {
        if (y.keepDirtyValues || v)
          for (const _ of s.mount)
            z(r.dirtyFields, _) ? b(R, _, z(o, _)) : N(_, z(R, _));
        else {
          if (rs && fe(h))
            for (const _ of s.mount) {
              const I = z(l, _);
              if (I && I._f) {
                const ie = Array.isArray(I._f.refs) ? I._f.refs[0] : I._f.ref;
                if (ei(ie)) {
                  const ue = ie.closest("form");
                  if (ue) {
                    ue.reset();
                    break;
                  }
                }
              }
            }
          l = {};
        }
        (o = e.shouldUnregister ? (y.keepDefaultValues ? tn(i) : {}) : A),
          p.array.next({ values: { ...R } }),
          p.values.next({ values: { ...R } });
      }
      (s = {
        mount: new Set(),
        unMount: new Set(),
        array: new Set(),
        watch: new Set(),
        watchAll: !1,
        focus: "",
      }),
        !a.mount && t(),
        (a.mount = !m.isValid || !!y.keepIsValid),
        (a.watch = !!e.shouldUnregister),
        p.state.next({
          submitCount: y.keepSubmitCount ? r.submitCount : 0,
          isDirty: y.keepDirty
            ? r.isDirty
            : !!(y.keepDefaultValues && !on(h, i)),
          isSubmitted: y.keepIsSubmitted ? r.isSubmitted : !1,
          dirtyFields: y.keepDirtyValues
            ? r.dirtyFields
            : y.keepDefaultValues && h
            ? to(i, h)
            : {},
          touchedFields: y.keepTouched ? r.touchedFields : {},
          errors: y.keepErrors ? r.errors : {},
          isSubmitting: !1,
          isSubmitSuccessful: !1,
        });
    },
    us = (h, y) => ss(Bt(h) ? h(o) : h, y),
    dd = (h, y = {}) => {
      const E = z(l, h),
        A = E && E._f;
      if (A) {
        const R = A.refs ? A.refs[0] : A.ref;
        R.focus && (R.focus(), y.shouldSelect && R.select());
      }
    },
    hd = (h) => {
      r = { ...r, ...h };
    };
  return (
    Bt(n.defaultValues) &&
      n.defaultValues().then((h) => {
        us(h, n.resetOptions), p.state.next({ isLoading: !1 });
      }),
    {
      control: {
        register: Tt,
        unregister: be,
        getFieldState: se,
        _executeSchema: K,
        _getWatch: Z,
        _getDirty: V,
        _updateValid: u,
        _removeUnmounted: H,
        _updateFieldArray: k,
        _getFieldArray: xe,
        _reset: ss,
        _updateFormState: hd,
        _subjects: p,
        _proxyFormState: m,
        get _fields() {
          return l;
        },
        get _formValues() {
          return o;
        },
        get _state() {
          return a;
        },
        set _state(h) {
          a = h;
        },
        get _defaultValues() {
          return i;
        },
        get _names() {
          return s;
        },
        set _names(h) {
          s = h;
        },
        get _formState() {
          return r;
        },
        set _formState(h) {
          r = h;
        },
        get _options() {
          return n;
        },
        set _options(h) {
          n = { ...n, ...h };
        },
      },
      trigger: j,
      register: Tt,
      handleSubmit: cd,
      watch: er,
      setValue: N,
      getValues: q,
      reset: us,
      resetField: fd,
      clearErrors: yn,
      unregister: be,
      setError: gt,
      setFocus: dd,
      getFieldState: se,
    }
  );
}
function xg(e = {}) {
  const t = kt.useRef(),
    [n, r] = kt.useState({
      isDirty: !1,
      isValidating: !1,
      isLoading: Bt(e.defaultValues),
      isSubmitted: !1,
      isSubmitting: !1,
      isSubmitSuccessful: !1,
      isValid: !1,
      submitCount: 0,
      dirtyFields: {},
      touchedFields: {},
      errors: {},
      defaultValues: Bt(e.defaultValues) ? void 0 : e.defaultValues,
    });
  t.current ||
    (t.current = { ...Eg(e, () => r((i) => ({ ...i }))), formState: n });
  const l = t.current.control;
  return (
    (l._options = e),
    cg({
      subject: l._subjects.state,
      next: (i) => {
        ug(i, l._proxyFormState, l._updateFormState, !0) &&
          r({ ...l._formState });
      },
    }),
    kt.useEffect(() => {
      e.values &&
        !on(e.values, l._defaultValues) &&
        l._reset(e.values, l._options.resetOptions);
    }, [e.values, l]),
    kt.useEffect(() => {
      l._state.mount || (l._updateValid(), (l._state.mount = !0)),
        l._state.watch &&
          ((l._state.watch = !1), l._subjects.state.next({ ...l._formState })),
        l._removeUnmounted();
    }),
    (t.current.formState = sg(n, l)),
    t.current
  );
}
const Cg = "_title_kp8to_7",
  _g = "_forms_kp8to_15",
  Ng = "_label_kp8to_39",
  Pg = "_error_kp8to_53",
  Lg = "_textarea_kp8to_65",
  Tg = "_select_kp8to_83",
  Rg = "_checkbox_kp8to_93",
  Dg = "_custom_kp8to_129",
  Fg = "_radio_kp8to_155",
  Y = {
    title: Cg,
    forms: _g,
    label: Ng,
    error: Pg,
    textarea: Lg,
    select: Tg,
    checkbox: Rg,
    custom: Dg,
    radio: Fg,
  },
  ut = (e) => {
    const {
        register: t,
        errors: n,
        className: r,
        classNameError: l,
        type: i,
        accept: o,
        value: a,
        classNameInput: s,
      } = e,
      c = t.name ? t.name : "",
      g = "error" + c[0].toUpperCase() + (c == null ? void 0 : c.slice(1));
    return P(mt, {
      children: ee("label", {
        className: r,
        children: [
          typeof e.children == "string" &&
            e.children.replace(/(^|\s)\S/g, function (m) {
              return m.toUpperCase();
            }),
          P("input", {
            ...t,
            type: i,
            name: c,
            role: c,
            accept: o || "",
            value: a,
            className: s,
          }),
          n && P("span", { className: l, role: g, children: n.message }),
        ],
      }),
    });
  },
  Og = () => {
    const e = Array.from(new Set(ns.map((t) => t.author)));
    return ee(mt, {
      children: [
        P("option", { value: "Change author", children: "Change author" }),
        e.map((t, n) => P("option", { value: t, children: t }, n)),
      ],
    });
  },
  Ag = (e) => {
    const {
        register: t,
        errors: n,
        className: r,
        classNameError: l,
        classNameSelect: i,
      } = e,
      o = t.name ? t.name : "",
      a = "error" + o[0].toUpperCase() + (o == null ? void 0 : o.slice(1));
    return P(mt, {
      children: ee("label", {
        className: r,
        children: [
          P("span", {
            children:
              typeof e.children == "string" &&
              e.children.replace(/(^|\s)\S/g, function (s) {
                return s.toUpperCase();
              }),
          }),
          P("select", {
            className: i,
            ...t,
            name: o,
            role: o,
            children: P(Og, {}),
          }),
          n && P("span", { className: l, role: a, children: n.message }),
        ],
      }),
    });
  },
  zg = () => {
    var m, p;
    const {
        register: e,
        handleSubmit: t,
        formState: { errors: n },
        reset: r,
      } = xg(),
      [l, i] = L.useState({}),
      [o, a] = L.useState(""),
      s = e("check", { required: "Please select at least one genre" }),
      c = e("radio", { required: "Please select Yes/No" });
    function g(v) {
      let S;
      if (v.file && v.file[0]) {
        S = v.file[0];
        const w = Number(v.year.split("-")[0]),
          T = {
            author: v.author,
            desc: v.desc,
            title: v.title,
            genre: v.check.join(", "),
            year: w,
            img: URL.createObjectURL(S),
            check: !!v.radio,
          };
        l.books ? l.books.push(T) : (l.books = [T]),
          i(l),
          r(),
          a("Book created!"),
          setTimeout(() => a(""), 3e3);
      } else return;
    }
    return ee(mt, {
      children: [
        ee("form", {
          className: Y.forms,
          onSubmit: t(g),
          children: [
            P(ut, {
              register: e("title", {
                required: "Title field is empty",
                minLength: { value: 3, message: "Length title < 3" },
                pattern: {
                  value: /^[A-Z]/,
                  message: "Title must start with a capital letter",
                },
              }),
              errors: n.title,
              className: Y.label,
              classNameError: Y.error,
              children: "title",
            }),
            P(ut, {
              register: e("desc", {
                required: "Desc field is empty",
                minLength: { value: 5, message: "Length desc < 5" },
                pattern: {
                  value: /^[A-Z]/,
                  message: "Desc must start with a capital letter",
                },
              }),
              errors: n.desc,
              className: Y.label,
              classNameError: Y.error,
              children: "Desc",
            }),
            P(ut, {
              register: e("year", {
                required: "Year field is empty",
                validate: {
                  positive: (v) => {
                    if (v) {
                      const S = Number(v.split("-")[0]),
                        w = new Date().getFullYear();
                      if (S > w) return "Year selected incorrectly";
                    }
                    return !0;
                  },
                },
              }),
              type: "date",
              errors: n.year,
              className: Y.label,
              classNameError: Y.error,
              children: "Year",
            }),
            P(Ag, {
              register: e("author", {
                validate: {
                  positive: (v) =>
                    v === "Change author" ? "Choose an author" : !0,
                },
              }),
              type: "date",
              errors: n.author,
              className: Y.label,
              classNameSelect: Y.select,
              classNameError: Y.error,
              children: "Author",
            }),
            ee("div", {
              className: Y.label,
              children: [
                "Genre",
                ee("div", {
                  className: Y.checkbox,
                  children: [
                    P(ut, {
                      register: s,
                      errors: void 0,
                      type: "checkbox",
                      className: Y.label,
                      classNameInput: Y.custom,
                      value: "Horror",
                      children: "Horror",
                    }),
                    P(ut, {
                      register: s,
                      errors: void 0,
                      type: "checkbox",
                      className: Y.label,
                      classNameInput: Y.custom,
                      value: "Detective",
                      children: "Detective",
                    }),
                    P(ut, {
                      register: s,
                      errors: void 0,
                      type: "checkbox",
                      className: Y.label,
                      classNameInput: Y.custom,
                      value: "Fantasy",
                      children: "Fantasy",
                    }),
                    P(ut, {
                      register: s,
                      errors: void 0,
                      type: "checkbox",
                      className: Y.label,
                      classNameInput: Y.custom,
                      value: "Other",
                      children: "Other",
                    }),
                  ],
                }),
                P("span", {
                  className: Y.error,
                  role: "errorGenre",
                  children: (m = n.check) == null ? void 0 : m.message,
                }),
              ],
            }),
            ee("div", {
              className: Y.label,
              children: [
                "Like",
                ee("div", {
                  className: Y.radio,
                  children: [
                    P(ut, {
                      register: c,
                      errors: void 0,
                      type: "radio",
                      className: "",
                      value: "Yes",
                      children: "Yes",
                    }),
                    P(ut, {
                      register: c,
                      errors: void 0,
                      type: "radio",
                      className: "",
                      value: "",
                      children: "No",
                    }),
                  ],
                }),
                P("span", {
                  className: Y.error,
                  role: "errorLike",
                  children: (p = n.radio) == null ? void 0 : p.message,
                }),
              ],
            }),
            P(ut, {
              register: e("file", {
                required: "File not selected",
                validate: {
                  positive: (v) => {
                    if (v) {
                      const S = v[0],
                        w = S.name.split("."),
                        T = w[w.length - 1].toLocaleLowerCase();
                      return S && S.size > 5 * 1024 * 1024
                        ? "The file must be no larger than 5 MB"
                        : T === "png" ||
                          T === "jpg" ||
                          T === "jpeg" ||
                          T === "svg" ||
                          T === "gif"
                        ? !0
                        : "Extension is not .jpg, .png, .gif, .svg";
                    }
                    return !0;
                  },
                },
              }),
              type: "file",
              accept: "image/*",
              errors: n.file,
              className: Y.label,
              classNameError: Y.error,
              children: "Upload",
            }),
            P("input", { type: "submit", value: "Create card" }),
          ],
        }),
        P("h3", { className: Y.title, children: o }),
        P(td, { ...l }),
      ],
    });
  },
  Mg = () =>
    ee(mt, { children: [P("h1", { children: "Add book" }), P(zg, {})] }),
  Ig = () => {
    const [e, t] = L.useState(window.location.href);
    function n() {
      t(window.location.href);
    }
    return ee(mt, {
      children: [
        ee("header", {
          onClick: n,
          children: [
            P(Zi, { to: "/", children: "Home" }),
            P(Zi, { to: "/about", children: "About" }),
            P(Zi, { to: "/add", children: "Add book" }),
            P("p", { children: e }),
          ],
        }),
        P("main", { className: "container", children: P(Um, {}) }),
        P("footer", { children: "Oksana Kalinina, 2023" }),
      ],
    });
  };
function Bg() {
  return P("div", {
    className: "App",
    children: P(Hm, {
      children: ee(Sn, {
        path: "/",
        element: P(Ig, {}),
        children: [
          P(Sn, { index: !0, element: P(tg, {}) }),
          P(Sn, { path: "/about", element: P(ng, {}) }),
          P(Sn, { path: "/add", element: P(Mg, {}) }),
          P(Sn, { path: "/*", element: P(rg, {}) }),
        ],
      }),
    }),
  });
}
lo.createRoot(document.getElementById("root")).render(
  P(kt.StrictMode, { children: P(Ym, { children: P(Bg, {}) }) })
);
