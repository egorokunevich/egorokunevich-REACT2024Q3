var Ep = Object.defineProperty;
var xp = (e, t, n) =>
  t in e
    ? Ep(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (e[t] = n);
var Ul = (e, t, n) => xp(e, typeof t != 'symbol' ? t + '' : t, n);
function of(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != 'string' && !Array.isArray(r)) {
      for (const l in r)
        if (l !== 'default' && !(l in e)) {
          const o = Object.getOwnPropertyDescriptor(r, l);
          o &&
            Object.defineProperty(
              e,
              l,
              o.get ? o : { enumerable: !0, get: () => r[l] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' })
  );
}
function af(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e;
}
var uf = { exports: {} },
  Zo = {},
  sf = { exports: {} },
  Y = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var xl = Symbol.for('react.element'),
  kp = Symbol.for('react.portal'),
  _p = Symbol.for('react.fragment'),
  Rp = Symbol.for('react.strict_mode'),
  Cp = Symbol.for('react.profiler'),
  Pp = Symbol.for('react.provider'),
  Lp = Symbol.for('react.context'),
  Tp = Symbol.for('react.forward_ref'),
  Np = Symbol.for('react.suspense'),
  Dp = Symbol.for('react.memo'),
  Op = Symbol.for('react.lazy'),
  Rs = Symbol.iterator;
function Mp(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Rs && e[Rs]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var cf = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  ff = Object.assign,
  df = {};
function Er(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = df),
    (this.updater = n || cf);
}
Er.prototype.isReactComponent = {};
Er.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
    );
  this.updater.enqueueSetState(this, e, t, 'setState');
};
Er.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
};
function hf() {}
hf.prototype = Er.prototype;
function eu(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = df),
    (this.updater = n || cf);
}
var tu = (eu.prototype = new hf());
tu.constructor = eu;
ff(tu, Er.prototype);
tu.isPureReactComponent = !0;
var Cs = Array.isArray,
  pf = Object.prototype.hasOwnProperty,
  nu = { current: null },
  mf = { key: !0, ref: !0, __self: !0, __source: !0 };
function vf(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (o = '' + t.key),
    t))
      pf.call(t, r) && !mf.hasOwnProperty(r) && (l[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) l.children = n;
  else if (1 < a) {
    for (var u = Array(a), s = 0; s < a; s++) u[s] = arguments[s + 2];
    l.children = u;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) l[r] === void 0 && (l[r] = a[r]);
  return {
    $$typeof: xl,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: nu.current,
  };
}
function zp(e, t) {
  return {
    $$typeof: xl,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function ru(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === xl;
}
function Fp(e) {
  var t = { '=': '=0', ':': '=2' };
  return (
    '$' +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Ps = /\/+/g;
function Ei(e, t) {
  return typeof e == 'object' && e !== null && e.key != null
    ? Fp('' + e.key)
    : t.toString(36);
}
function ao(e, t, n, r, l) {
  var o = typeof e;
  (o === 'undefined' || o === 'boolean') && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (o) {
      case 'string':
      case 'number':
        i = !0;
        break;
      case 'object':
        switch (e.$$typeof) {
          case xl:
          case kp:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (l = l(i)),
      (e = r === '' ? '.' + Ei(i, 0) : r),
      Cs(l)
        ? ((n = ''),
          e != null && (n = e.replace(Ps, '$&/') + '/'),
          ao(l, t, n, '', function (s) {
            return s;
          }))
        : l != null &&
          (ru(l) &&
            (l = zp(
              l,
              n +
                (!l.key || (i && i.key === l.key)
                  ? ''
                  : ('' + l.key).replace(Ps, '$&/') + '/') +
                e
            )),
          t.push(l)),
      1
    );
  if (((i = 0), (r = r === '' ? '.' : r + ':'), Cs(e)))
    for (var a = 0; a < e.length; a++) {
      o = e[a];
      var u = r + Ei(o, a);
      i += ao(o, t, n, u, l);
    }
  else if (((u = Mp(e)), typeof u == 'function'))
    for (e = u.call(e), a = 0; !(o = e.next()).done; )
      (o = o.value), (u = r + Ei(o, a++)), (i += ao(o, t, n, u, l));
  else if (o === 'object')
    throw (
      ((t = String(e)),
      Error(
        'Objects are not valid as a React child (found: ' +
          (t === '[object Object]'
            ? 'object with keys {' + Object.keys(e).join(', ') + '}'
            : t) +
          '). If you meant to render a collection of children, use an array instead.'
      ))
    );
  return i;
}
function Al(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    ao(e, r, '', '', function (o) {
      return t.call(n, o, l++);
    }),
    r
  );
}
function jp(e) {
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
var He = { current: null },
  uo = { transition: null },
  Ip = {
    ReactCurrentDispatcher: He,
    ReactCurrentBatchConfig: uo,
    ReactCurrentOwner: nu,
  };
function yf() {
  throw Error('act(...) is not supported in production builds of React.');
}
Y.Children = {
  map: Al,
  forEach: function (e, t, n) {
    Al(
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
      Al(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Al(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!ru(e))
      throw Error(
        'React.Children.only expected to receive a single React element child.'
      );
    return e;
  },
};
Y.Component = Er;
Y.Fragment = _p;
Y.Profiler = Cp;
Y.PureComponent = eu;
Y.StrictMode = Rp;
Y.Suspense = Np;
Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ip;
Y.act = yf;
Y.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' +
        e +
        '.'
    );
  var r = ff({}, e.props),
    l = e.key,
    o = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (i = nu.current)),
      t.key !== void 0 && (l = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (u in t)
      pf.call(t, u) &&
        !mf.hasOwnProperty(u) &&
        (r[u] = t[u] === void 0 && a !== void 0 ? a[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    a = Array(u);
    for (var s = 0; s < u; s++) a[s] = arguments[s + 2];
    r.children = a;
  }
  return { $$typeof: xl, type: e.type, key: l, ref: o, props: r, _owner: i };
};
Y.createContext = function (e) {
  return (
    (e = {
      $$typeof: Lp,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Pp, _context: e }),
    (e.Consumer = e)
  );
};
Y.createElement = vf;
Y.createFactory = function (e) {
  var t = vf.bind(null, e);
  return (t.type = e), t;
};
Y.createRef = function () {
  return { current: null };
};
Y.forwardRef = function (e) {
  return { $$typeof: Tp, render: e };
};
Y.isValidElement = ru;
Y.lazy = function (e) {
  return { $$typeof: Op, _payload: { _status: -1, _result: e }, _init: jp };
};
Y.memo = function (e, t) {
  return { $$typeof: Dp, type: e, compare: t === void 0 ? null : t };
};
Y.startTransition = function (e) {
  var t = uo.transition;
  uo.transition = {};
  try {
    e();
  } finally {
    uo.transition = t;
  }
};
Y.unstable_act = yf;
Y.useCallback = function (e, t) {
  return He.current.useCallback(e, t);
};
Y.useContext = function (e) {
  return He.current.useContext(e);
};
Y.useDebugValue = function () {};
Y.useDeferredValue = function (e) {
  return He.current.useDeferredValue(e);
};
Y.useEffect = function (e, t) {
  return He.current.useEffect(e, t);
};
Y.useId = function () {
  return He.current.useId();
};
Y.useImperativeHandle = function (e, t, n) {
  return He.current.useImperativeHandle(e, t, n);
};
Y.useInsertionEffect = function (e, t) {
  return He.current.useInsertionEffect(e, t);
};
Y.useLayoutEffect = function (e, t) {
  return He.current.useLayoutEffect(e, t);
};
Y.useMemo = function (e, t) {
  return He.current.useMemo(e, t);
};
Y.useReducer = function (e, t, n) {
  return He.current.useReducer(e, t, n);
};
Y.useRef = function (e) {
  return He.current.useRef(e);
};
Y.useState = function (e) {
  return He.current.useState(e);
};
Y.useSyncExternalStore = function (e, t, n) {
  return He.current.useSyncExternalStore(e, t, n);
};
Y.useTransition = function () {
  return He.current.useTransition();
};
Y.version = '18.3.1';
sf.exports = Y;
var v = sf.exports;
const Up = af(v),
  Ap = of({ __proto__: null, default: Up }, [v]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $p = v,
  Bp = Symbol.for('react.element'),
  Hp = Symbol.for('react.fragment'),
  Vp = Object.prototype.hasOwnProperty,
  Wp = $p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Kp = { key: !0, ref: !0, __self: !0, __source: !0 };
function gf(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  n !== void 0 && (o = '' + n),
    t.key !== void 0 && (o = '' + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (r in t) Vp.call(t, r) && !Kp.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: Bp,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: Wp.current,
  };
}
Zo.Fragment = Hp;
Zo.jsx = gf;
Zo.jsxs = gf;
uf.exports = Zo;
var c1 = uf.exports,
  wf = { exports: {} },
  tt = {},
  Sf = { exports: {} },
  Ef = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(z, B) {
    var H = z.length;
    z.push(B);
    e: for (; 0 < H; ) {
      var G = (H - 1) >>> 1,
        oe = z[G];
      if (0 < l(oe, B)) (z[G] = B), (z[H] = oe), (H = G);
      else break e;
    }
  }
  function n(z) {
    return z.length === 0 ? null : z[0];
  }
  function r(z) {
    if (z.length === 0) return null;
    var B = z[0],
      H = z.pop();
    if (H !== B) {
      z[0] = H;
      e: for (var G = 0, oe = z.length, kt = oe >>> 1; G < kt; ) {
        var Le = 2 * (G + 1) - 1,
          ht = z[Le],
          Ie = Le + 1,
          Bn = z[Ie];
        if (0 > l(ht, H))
          Ie < oe && 0 > l(Bn, ht)
            ? ((z[G] = Bn), (z[Ie] = H), (G = Ie))
            : ((z[G] = ht), (z[Le] = H), (G = Le));
        else if (Ie < oe && 0 > l(Bn, H)) (z[G] = Bn), (z[Ie] = H), (G = Ie);
        else break e;
      }
    }
    return B;
  }
  function l(z, B) {
    var H = z.sortIndex - B.sortIndex;
    return H !== 0 ? H : z.id - B.id;
  }
  if (typeof performance == 'object' && typeof performance.now == 'function') {
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
    f = 1,
    c = null,
    d = 3,
    E = !1,
    w = !1,
    S = !1,
    C = typeof setTimeout == 'function' ? setTimeout : null,
    p = typeof clearTimeout == 'function' ? clearTimeout : null,
    h = typeof setImmediate < 'u' ? setImmediate : null;
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(z) {
    for (var B = n(s); B !== null; ) {
      if (B.callback === null) r(s);
      else if (B.startTime <= z)
        r(s), (B.sortIndex = B.expirationTime), t(u, B);
      else break;
      B = n(s);
    }
  }
  function k(z) {
    if (((S = !1), m(z), !w))
      if (n(u) !== null) (w = !0), rt(L);
      else {
        var B = n(s);
        B !== null && ue(k, B.startTime - z);
      }
  }
  function L(z, B) {
    (w = !1), S && ((S = !1), p(P), (P = -1)), (E = !0);
    var H = d;
    try {
      for (
        m(B), c = n(u);
        c !== null && (!(c.expirationTime > B) || (z && !V()));

      ) {
        var G = c.callback;
        if (typeof G == 'function') {
          (c.callback = null), (d = c.priorityLevel);
          var oe = G(c.expirationTime <= B);
          (B = e.unstable_now()),
            typeof oe == 'function' ? (c.callback = oe) : c === n(u) && r(u),
            m(B);
        } else r(u);
        c = n(u);
      }
      if (c !== null) var kt = !0;
      else {
        var Le = n(s);
        Le !== null && ue(k, Le.startTime - B), (kt = !1);
      }
      return kt;
    } finally {
      (c = null), (d = H), (E = !1);
    }
  }
  var y = !1,
    T = null,
    P = -1,
    O = 5,
    M = -1;
  function V() {
    return !(e.unstable_now() - M < O);
  }
  function X() {
    if (T !== null) {
      var z = e.unstable_now();
      M = z;
      var B = !0;
      try {
        B = T(!0, z);
      } finally {
        B ? ge() : ((y = !1), (T = null));
      }
    } else y = !1;
  }
  var ge;
  if (typeof h == 'function')
    ge = function () {
      h(X);
    };
  else if (typeof MessageChannel < 'u') {
    var ee = new MessageChannel(),
      ke = ee.port2;
    (ee.port1.onmessage = X),
      (ge = function () {
        ke.postMessage(null);
      });
  } else
    ge = function () {
      C(X, 0);
    };
  function rt(z) {
    (T = z), y || ((y = !0), ge());
  }
  function ue(z, B) {
    P = C(function () {
      z(e.unstable_now());
    }, B);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (z) {
      z.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      w || E || ((w = !0), rt(L));
    }),
    (e.unstable_forceFrameRate = function (z) {
      0 > z || 125 < z
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
          )
        : (O = 0 < z ? Math.floor(1e3 / z) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return d;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(u);
    }),
    (e.unstable_next = function (z) {
      switch (d) {
        case 1:
        case 2:
        case 3:
          var B = 3;
          break;
        default:
          B = d;
      }
      var H = d;
      d = B;
      try {
        return z();
      } finally {
        d = H;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (z, B) {
      switch (z) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          z = 3;
      }
      var H = d;
      d = z;
      try {
        return B();
      } finally {
        d = H;
      }
    }),
    (e.unstable_scheduleCallback = function (z, B, H) {
      var G = e.unstable_now();
      switch (
        (typeof H == 'object' && H !== null
          ? ((H = H.delay), (H = typeof H == 'number' && 0 < H ? G + H : G))
          : (H = G),
        z)
      ) {
        case 1:
          var oe = -1;
          break;
        case 2:
          oe = 250;
          break;
        case 5:
          oe = 1073741823;
          break;
        case 4:
          oe = 1e4;
          break;
        default:
          oe = 5e3;
      }
      return (
        (oe = H + oe),
        (z = {
          id: f++,
          callback: B,
          priorityLevel: z,
          startTime: H,
          expirationTime: oe,
          sortIndex: -1,
        }),
        H > G
          ? ((z.sortIndex = H),
            t(s, z),
            n(u) === null &&
              z === n(s) &&
              (S ? (p(P), (P = -1)) : (S = !0), ue(k, H - G)))
          : ((z.sortIndex = oe), t(u, z), w || E || ((w = !0), rt(L))),
        z
      );
    }),
    (e.unstable_shouldYield = V),
    (e.unstable_wrapCallback = function (z) {
      var B = d;
      return function () {
        var H = d;
        d = B;
        try {
          return z.apply(this, arguments);
        } finally {
          d = H;
        }
      };
    });
})(Ef);
Sf.exports = Ef;
var Qp = Sf.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Yp = v,
  et = Qp;
function N(e) {
  for (
    var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1;
    n < arguments.length;
    n++
  )
    t += '&args[]=' + encodeURIComponent(arguments[n]);
  return (
    'Minified React error #' +
    e +
    '; visit ' +
    t +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  );
}
var xf = new Set(),
  nl = {};
function An(e, t) {
  hr(e, t), hr(e + 'Capture', t);
}
function hr(e, t) {
  for (nl[e] = t, e = 0; e < t.length; e++) xf.add(t[e]);
}
var Bt = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  ea = Object.prototype.hasOwnProperty,
  Xp =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Ls = {},
  Ts = {};
function Jp(e) {
  return ea.call(Ts, e)
    ? !0
    : ea.call(Ls, e)
      ? !1
      : Xp.test(e)
        ? (Ts[e] = !0)
        : ((Ls[e] = !0), !1);
}
function Gp(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case 'function':
    case 'symbol':
      return !0;
    case 'boolean':
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-');
    default:
      return !1;
  }
}
function Zp(e, t, n, r) {
  if (t === null || typeof t > 'u' || Gp(e, t, n, r)) return !0;
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
function Ve(e, t, n, r, l, o, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = i);
}
var Oe = {};
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    Oe[e] = new Ve(e, 0, !1, e, null, !1, !1);
  });
[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv'],
].forEach(function (e) {
  var t = e[0];
  Oe[t] = new Ve(t, 1, !1, e[1], null, !1, !1);
});
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  Oe[e] = new Ve(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  'autoReverse',
  'externalResourcesRequired',
  'focusable',
  'preserveAlpha',
].forEach(function (e) {
  Oe[e] = new Ve(e, 2, !1, e, null, !1, !1);
});
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    Oe[e] = new Ve(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  Oe[e] = new Ve(e, 3, !0, e, null, !1, !1);
});
['capture', 'download'].forEach(function (e) {
  Oe[e] = new Ve(e, 4, !1, e, null, !1, !1);
});
['cols', 'rows', 'size', 'span'].forEach(function (e) {
  Oe[e] = new Ve(e, 6, !1, e, null, !1, !1);
});
['rowSpan', 'start'].forEach(function (e) {
  Oe[e] = new Ve(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var lu = /[\-:]([a-z])/g;
function ou(e) {
  return e[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(lu, ou);
    Oe[t] = new Ve(t, 1, !1, e, null, !1, !1);
  });
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(lu, ou);
    Oe[t] = new Ve(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
  });
['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(lu, ou);
  Oe[t] = new Ve(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
});
['tabIndex', 'crossOrigin'].forEach(function (e) {
  Oe[e] = new Ve(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Oe.xlinkHref = new Ve(
  'xlinkHref',
  1,
  !1,
  'xlink:href',
  'http://www.w3.org/1999/xlink',
  !0,
  !1
);
['src', 'href', 'action', 'formAction'].forEach(function (e) {
  Oe[e] = new Ve(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function iu(e, t, n, r) {
  var l = Oe.hasOwnProperty(t) ? Oe[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== 'o' && t[0] !== 'O') ||
      (t[1] !== 'n' && t[1] !== 'N')) &&
    (Zp(t, n, l, r) && (n = null),
    r || l === null
      ? Jp(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
      : l.mustUseProperty
        ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : '') : n)
        : ((t = l.attributeName),
          (r = l.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((l = l.type),
              (n = l === 3 || (l === 4 && n === !0) ? '' : '' + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Qt = Yp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  $l = Symbol.for('react.element'),
  Xn = Symbol.for('react.portal'),
  Jn = Symbol.for('react.fragment'),
  au = Symbol.for('react.strict_mode'),
  ta = Symbol.for('react.profiler'),
  kf = Symbol.for('react.provider'),
  _f = Symbol.for('react.context'),
  uu = Symbol.for('react.forward_ref'),
  na = Symbol.for('react.suspense'),
  ra = Symbol.for('react.suspense_list'),
  su = Symbol.for('react.memo'),
  bt = Symbol.for('react.lazy'),
  Rf = Symbol.for('react.offscreen'),
  Ns = Symbol.iterator;
function Nr(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Ns && e[Ns]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var pe = Object.assign,
  xi;
function Hr(e) {
  if (xi === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      xi = (t && t[1]) || '';
    }
  return (
    `
` +
    xi +
    e
  );
}
var ki = !1;
function _i(e, t) {
  if (!e || ki) return '';
  ki = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, 'props', {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == 'object' && Reflect.construct)
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
    if (s && r && typeof s.stack == 'string') {
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
` + l[i].replace(' at new ', ' at ');
                return (
                  e.displayName &&
                    u.includes('<anonymous>') &&
                    (u = u.replace('<anonymous>', e.displayName)),
                  u
                );
              }
            while (1 <= i && 0 <= a);
          break;
        }
    }
  } finally {
    (ki = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : '') ? Hr(e) : '';
}
function qp(e) {
  switch (e.tag) {
    case 5:
      return Hr(e.type);
    case 16:
      return Hr('Lazy');
    case 13:
      return Hr('Suspense');
    case 19:
      return Hr('SuspenseList');
    case 0:
    case 2:
    case 15:
      return (e = _i(e.type, !1)), e;
    case 11:
      return (e = _i(e.type.render, !1)), e;
    case 1:
      return (e = _i(e.type, !0)), e;
    default:
      return '';
  }
}
function la(e) {
  if (e == null) return null;
  if (typeof e == 'function') return e.displayName || e.name || null;
  if (typeof e == 'string') return e;
  switch (e) {
    case Jn:
      return 'Fragment';
    case Xn:
      return 'Portal';
    case ta:
      return 'Profiler';
    case au:
      return 'StrictMode';
    case na:
      return 'Suspense';
    case ra:
      return 'SuspenseList';
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case _f:
        return (e.displayName || 'Context') + '.Consumer';
      case kf:
        return (e._context.displayName || 'Context') + '.Provider';
      case uu:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ''),
            (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        );
      case su:
        return (
          (t = e.displayName || null), t !== null ? t : la(e.type) || 'Memo'
        );
      case bt:
        (t = e._payload), (e = e._init);
        try {
          return la(e(t));
        } catch {}
    }
  return null;
}
function bp(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return 'Cache';
    case 9:
      return (t.displayName || 'Context') + '.Consumer';
    case 10:
      return (t._context.displayName || 'Context') + '.Provider';
    case 18:
      return 'DehydratedFragment';
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ''),
        t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
      );
    case 7:
      return 'Fragment';
    case 5:
      return t;
    case 4:
      return 'Portal';
    case 3:
      return 'Root';
    case 6:
      return 'Text';
    case 16:
      return la(t);
    case 8:
      return t === au ? 'StrictMode' : 'Mode';
    case 22:
      return 'Offscreen';
    case 12:
      return 'Profiler';
    case 21:
      return 'Scope';
    case 13:
      return 'Suspense';
    case 19:
      return 'SuspenseList';
    case 25:
      return 'TracingMarker';
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == 'function') return t.displayName || t.name || null;
      if (typeof t == 'string') return t;
  }
  return null;
}
function pn(e) {
  switch (typeof e) {
    case 'boolean':
    case 'number':
    case 'string':
    case 'undefined':
      return e;
    case 'object':
      return e;
    default:
      return '';
  }
}
function Cf(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === 'input' &&
    (t === 'checkbox' || t === 'radio')
  );
}
function em(e) {
  var t = Cf(e) ? 'checked' : 'value',
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = '' + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < 'u' &&
    typeof n.get == 'function' &&
    typeof n.set == 'function'
  ) {
    var l = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (i) {
          (r = '' + i), o.call(this, i);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (i) {
          r = '' + i;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Bl(e) {
  e._valueTracker || (e._valueTracker = em(e));
}
function Pf(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = '';
  return (
    e && (r = Cf(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function ko(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u'))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function oa(e, t) {
  var n = t.checked;
  return pe({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Ds(e, t) {
  var n = t.defaultValue == null ? '' : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = pn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === 'checkbox' || t.type === 'radio'
          ? t.checked != null
          : t.value != null,
    });
}
function Lf(e, t) {
  (t = t.checked), t != null && iu(e, 'checked', t, !1);
}
function ia(e, t) {
  Lf(e, t);
  var n = pn(t.value),
    r = t.type;
  if (n != null)
    r === 'number'
      ? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
      : e.value !== '' + n && (e.value = '' + n);
  else if (r === 'submit' || r === 'reset') {
    e.removeAttribute('value');
    return;
  }
  t.hasOwnProperty('value')
    ? aa(e, t.type, n)
    : t.hasOwnProperty('defaultValue') && aa(e, t.type, pn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Os(e, t, n) {
  if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
    var r = t.type;
    if (
      !(
        (r !== 'submit' && r !== 'reset') ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = '' + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== '' && (e.name = ''),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== '' && (e.name = n);
}
function aa(e, t, n) {
  (t !== 'number' || ko(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
}
var Vr = Array.isArray;
function ar(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t['$' + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty('$' + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = '' + pn(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function ua(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(N(91));
  return pe({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue,
  });
}
function Ms(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(N(92));
      if (Vr(n)) {
        if (1 < n.length) throw Error(N(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ''), (n = t);
  }
  e._wrapperState = { initialValue: pn(n) };
}
function Tf(e, t) {
  var n = pn(t.value),
    r = pn(t.defaultValue);
  n != null &&
    ((n = '' + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = '' + r);
}
function zs(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
}
function Nf(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg';
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML';
    default:
      return 'http://www.w3.org/1999/xhtml';
  }
}
function sa(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? Nf(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
      ? 'http://www.w3.org/1999/xhtml'
      : e;
}
var Hl,
  Df = (function (e) {
    return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e)
      e.innerHTML = t;
    else {
      for (
        Hl = Hl || document.createElement('div'),
          Hl.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = Hl.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function rl(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Yr = {
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
  tm = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(Yr).forEach(function (e) {
  tm.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Yr[t] = Yr[e]);
  });
});
function Of(e, t, n) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : n || typeof t != 'number' || t === 0 || (Yr.hasOwnProperty(e) && Yr[e])
      ? ('' + t).trim()
      : t + 'px';
}
function Mf(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        l = Of(n, t[n], r);
      n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var nm = pe(
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
function ca(e, t) {
  if (t) {
    if (nm[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(N(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(N(60));
      if (
        typeof t.dangerouslySetInnerHTML != 'object' ||
        !('__html' in t.dangerouslySetInnerHTML)
      )
        throw Error(N(61));
    }
    if (t.style != null && typeof t.style != 'object') throw Error(N(62));
  }
}
function fa(e, t) {
  if (e.indexOf('-') === -1) return typeof t.is == 'string';
  switch (e) {
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return !1;
    default:
      return !0;
  }
}
var da = null;
function cu(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var ha = null,
  ur = null,
  sr = null;
function Fs(e) {
  if ((e = Rl(e))) {
    if (typeof ha != 'function') throw Error(N(280));
    var t = e.stateNode;
    t && ((t = ni(t)), ha(e.stateNode, e.type, t));
  }
}
function zf(e) {
  ur ? (sr ? sr.push(e) : (sr = [e])) : (ur = e);
}
function Ff() {
  if (ur) {
    var e = ur,
      t = sr;
    if (((sr = ur = null), Fs(e), t)) for (e = 0; e < t.length; e++) Fs(t[e]);
  }
}
function jf(e, t) {
  return e(t);
}
function If() {}
var Ri = !1;
function Uf(e, t, n) {
  if (Ri) return e(t, n);
  Ri = !0;
  try {
    return jf(e, t, n);
  } finally {
    (Ri = !1), (ur !== null || sr !== null) && (If(), Ff());
  }
}
function ll(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = ni(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === 'button' ||
          e === 'input' ||
          e === 'select' ||
          e === 'textarea'
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != 'function') throw Error(N(231, t, typeof n));
  return n;
}
var pa = !1;
if (Bt)
  try {
    var Dr = {};
    Object.defineProperty(Dr, 'passive', {
      get: function () {
        pa = !0;
      },
    }),
      window.addEventListener('test', Dr, Dr),
      window.removeEventListener('test', Dr, Dr);
  } catch {
    pa = !1;
  }
function rm(e, t, n, r, l, o, i, a, u) {
  var s = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, s);
  } catch (f) {
    this.onError(f);
  }
}
var Xr = !1,
  _o = null,
  Ro = !1,
  ma = null,
  lm = {
    onError: function (e) {
      (Xr = !0), (_o = e);
    },
  };
function om(e, t, n, r, l, o, i, a, u) {
  (Xr = !1), (_o = null), rm.apply(lm, arguments);
}
function im(e, t, n, r, l, o, i, a, u) {
  if ((om.apply(this, arguments), Xr)) {
    if (Xr) {
      var s = _o;
      (Xr = !1), (_o = null);
    } else throw Error(N(198));
    Ro || ((Ro = !0), (ma = s));
  }
}
function $n(e) {
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
function Af(e) {
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
function js(e) {
  if ($n(e) !== e) throw Error(N(188));
}
function am(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = $n(e)), t === null)) throw Error(N(188));
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
        if (o === n) return js(l), e;
        if (o === r) return js(l), t;
        o = o.sibling;
      }
      throw Error(N(188));
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
        if (!i) throw Error(N(189));
      }
    }
    if (n.alternate !== r) throw Error(N(190));
  }
  if (n.tag !== 3) throw Error(N(188));
  return n.stateNode.current === n ? e : t;
}
function $f(e) {
  return (e = am(e)), e !== null ? Bf(e) : null;
}
function Bf(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Bf(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Hf = et.unstable_scheduleCallback,
  Is = et.unstable_cancelCallback,
  um = et.unstable_shouldYield,
  sm = et.unstable_requestPaint,
  ye = et.unstable_now,
  cm = et.unstable_getCurrentPriorityLevel,
  fu = et.unstable_ImmediatePriority,
  Vf = et.unstable_UserBlockingPriority,
  Co = et.unstable_NormalPriority,
  fm = et.unstable_LowPriority,
  Wf = et.unstable_IdlePriority,
  qo = null,
  Lt = null;
function dm(e) {
  if (Lt && typeof Lt.onCommitFiberRoot == 'function')
    try {
      Lt.onCommitFiberRoot(qo, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var wt = Math.clz32 ? Math.clz32 : mm,
  hm = Math.log,
  pm = Math.LN2;
function mm(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((hm(e) / pm) | 0)) | 0;
}
var Vl = 64,
  Wl = 4194304;
function Wr(e) {
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
function Po(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    o = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var a = i & ~l;
    a !== 0 ? (r = Wr(a)) : ((o &= i), o !== 0 && (r = Wr(o)));
  } else (i = n & ~l), i !== 0 ? (r = Wr(i)) : o !== 0 && (r = Wr(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (o = t & -t), l >= o || (l === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - wt(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function vm(e, t) {
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
function ym(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var i = 31 - wt(o),
      a = 1 << i,
      u = l[i];
    u === -1
      ? (!(a & n) || a & r) && (l[i] = vm(a, t))
      : u <= t && (e.expiredLanes |= a),
      (o &= ~a);
  }
}
function va(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Kf() {
  var e = Vl;
  return (Vl <<= 1), !(Vl & 4194240) && (Vl = 64), e;
}
function Ci(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function kl(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - wt(t)),
    (e[t] = n);
}
function gm(e, t) {
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
    var l = 31 - wt(n),
      o = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o);
  }
}
function du(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - wt(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var b = 0;
function Qf(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Yf,
  hu,
  Xf,
  Jf,
  Gf,
  ya = !1,
  Kl = [],
  on = null,
  an = null,
  un = null,
  ol = new Map(),
  il = new Map(),
  tn = [],
  wm =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' '
    );
function Us(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      on = null;
      break;
    case 'dragenter':
    case 'dragleave':
      an = null;
      break;
    case 'mouseover':
    case 'mouseout':
      un = null;
      break;
    case 'pointerover':
    case 'pointerout':
      ol.delete(t.pointerId);
      break;
    case 'gotpointercapture':
    case 'lostpointercapture':
      il.delete(t.pointerId);
  }
}
function Or(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [l],
      }),
      t !== null && ((t = Rl(t)), t !== null && hu(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function Sm(e, t, n, r, l) {
  switch (t) {
    case 'focusin':
      return (on = Or(on, e, t, n, r, l)), !0;
    case 'dragenter':
      return (an = Or(an, e, t, n, r, l)), !0;
    case 'mouseover':
      return (un = Or(un, e, t, n, r, l)), !0;
    case 'pointerover':
      var o = l.pointerId;
      return ol.set(o, Or(ol.get(o) || null, e, t, n, r, l)), !0;
    case 'gotpointercapture':
      return (
        (o = l.pointerId), il.set(o, Or(il.get(o) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function Zf(e) {
  var t = kn(e.target);
  if (t !== null) {
    var n = $n(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Af(n)), t !== null)) {
          (e.blockedOn = t),
            Gf(e.priority, function () {
              Xf(n);
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
function so(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = ga(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (da = r), n.target.dispatchEvent(r), (da = null);
    } else return (t = Rl(n)), t !== null && hu(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function As(e, t, n) {
  so(e) && n.delete(t);
}
function Em() {
  (ya = !1),
    on !== null && so(on) && (on = null),
    an !== null && so(an) && (an = null),
    un !== null && so(un) && (un = null),
    ol.forEach(As),
    il.forEach(As);
}
function Mr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    ya ||
      ((ya = !0),
      et.unstable_scheduleCallback(et.unstable_NormalPriority, Em)));
}
function al(e) {
  function t(l) {
    return Mr(l, e);
  }
  if (0 < Kl.length) {
    Mr(Kl[0], e);
    for (var n = 1; n < Kl.length; n++) {
      var r = Kl[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    on !== null && Mr(on, e),
      an !== null && Mr(an, e),
      un !== null && Mr(un, e),
      ol.forEach(t),
      il.forEach(t),
      n = 0;
    n < tn.length;
    n++
  )
    (r = tn[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < tn.length && ((n = tn[0]), n.blockedOn === null); )
    Zf(n), n.blockedOn === null && tn.shift();
}
var cr = Qt.ReactCurrentBatchConfig,
  Lo = !0;
function xm(e, t, n, r) {
  var l = b,
    o = cr.transition;
  cr.transition = null;
  try {
    (b = 1), pu(e, t, n, r);
  } finally {
    (b = l), (cr.transition = o);
  }
}
function km(e, t, n, r) {
  var l = b,
    o = cr.transition;
  cr.transition = null;
  try {
    (b = 4), pu(e, t, n, r);
  } finally {
    (b = l), (cr.transition = o);
  }
}
function pu(e, t, n, r) {
  if (Lo) {
    var l = ga(e, t, n, r);
    if (l === null) ji(e, t, r, To, n), Us(e, r);
    else if (Sm(l, e, t, n, r)) r.stopPropagation();
    else if ((Us(e, r), t & 4 && -1 < wm.indexOf(e))) {
      for (; l !== null; ) {
        var o = Rl(l);
        if (
          (o !== null && Yf(o),
          (o = ga(e, t, n, r)),
          o === null && ji(e, t, r, To, n),
          o === l)
        )
          break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else ji(e, t, r, null, n);
  }
}
var To = null;
function ga(e, t, n, r) {
  if (((To = null), (e = cu(r)), (e = kn(e)), e !== null))
    if (((t = $n(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Af(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (To = e), null;
}
function qf(e) {
  switch (e) {
    case 'cancel':
    case 'click':
    case 'close':
    case 'contextmenu':
    case 'copy':
    case 'cut':
    case 'auxclick':
    case 'dblclick':
    case 'dragend':
    case 'dragstart':
    case 'drop':
    case 'focusin':
    case 'focusout':
    case 'input':
    case 'invalid':
    case 'keydown':
    case 'keypress':
    case 'keyup':
    case 'mousedown':
    case 'mouseup':
    case 'paste':
    case 'pause':
    case 'play':
    case 'pointercancel':
    case 'pointerdown':
    case 'pointerup':
    case 'ratechange':
    case 'reset':
    case 'resize':
    case 'seeked':
    case 'submit':
    case 'touchcancel':
    case 'touchend':
    case 'touchstart':
    case 'volumechange':
    case 'change':
    case 'selectionchange':
    case 'textInput':
    case 'compositionstart':
    case 'compositionend':
    case 'compositionupdate':
    case 'beforeblur':
    case 'afterblur':
    case 'beforeinput':
    case 'blur':
    case 'fullscreenchange':
    case 'focus':
    case 'hashchange':
    case 'popstate':
    case 'select':
    case 'selectstart':
      return 1;
    case 'drag':
    case 'dragenter':
    case 'dragexit':
    case 'dragleave':
    case 'dragover':
    case 'mousemove':
    case 'mouseout':
    case 'mouseover':
    case 'pointermove':
    case 'pointerout':
    case 'pointerover':
    case 'scroll':
    case 'toggle':
    case 'touchmove':
    case 'wheel':
    case 'mouseenter':
    case 'mouseleave':
    case 'pointerenter':
    case 'pointerleave':
      return 4;
    case 'message':
      switch (cm()) {
        case fu:
          return 1;
        case Vf:
          return 4;
        case Co:
        case fm:
          return 16;
        case Wf:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var rn = null,
  mu = null,
  co = null;
function bf() {
  if (co) return co;
  var e,
    t = mu,
    n = t.length,
    r,
    l = 'value' in rn ? rn.value : rn.textContent,
    o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
  return (co = l.slice(e, 1 < r ? 1 - r : void 0));
}
function fo(e) {
  var t = e.keyCode;
  return (
    'charCode' in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Ql() {
  return !0;
}
function $s() {
  return !1;
}
function nt(e) {
  function t(n, r, l, o, i) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = i),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(o) : o[a]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? Ql
        : $s),
      (this.isPropagationStopped = $s),
      this
    );
  }
  return (
    pe(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
          (this.isDefaultPrevented = Ql));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = Ql));
      },
      persist: function () {},
      isPersistent: Ql,
    }),
    t
  );
}
var xr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  vu = nt(xr),
  _l = pe({}, xr, { view: 0, detail: 0 }),
  _m = nt(_l),
  Pi,
  Li,
  zr,
  bo = pe({}, _l, {
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
    getModifierState: yu,
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
      return 'movementX' in e
        ? e.movementX
        : (e !== zr &&
            (zr && e.type === 'mousemove'
              ? ((Pi = e.screenX - zr.screenX), (Li = e.screenY - zr.screenY))
              : (Li = Pi = 0),
            (zr = e)),
          Pi);
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : Li;
    },
  }),
  Bs = nt(bo),
  Rm = pe({}, bo, { dataTransfer: 0 }),
  Cm = nt(Rm),
  Pm = pe({}, _l, { relatedTarget: 0 }),
  Ti = nt(Pm),
  Lm = pe({}, xr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Tm = nt(Lm),
  Nm = pe({}, xr, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Dm = nt(Nm),
  Om = pe({}, xr, { data: 0 }),
  Hs = nt(Om),
  Mm = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified',
  },
  zm = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta',
  },
  Fm = {
    Alt: 'altKey',
    Control: 'ctrlKey',
    Meta: 'metaKey',
    Shift: 'shiftKey',
  };
function jm(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Fm[e]) ? !!t[e] : !1;
}
function yu() {
  return jm;
}
var Im = pe({}, _l, {
    key: function (e) {
      if (e.key) {
        var t = Mm[e.key] || e.key;
        if (t !== 'Unidentified') return t;
      }
      return e.type === 'keypress'
        ? ((e = fo(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
          ? zm[e.keyCode] || 'Unidentified'
          : '';
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: yu,
    charCode: function (e) {
      return e.type === 'keypress' ? fo(e) : 0;
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === 'keypress'
        ? fo(e)
        : e.type === 'keydown' || e.type === 'keyup'
          ? e.keyCode
          : 0;
    },
  }),
  Um = nt(Im),
  Am = pe({}, bo, {
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
  Vs = nt(Am),
  $m = pe({}, _l, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: yu,
  }),
  Bm = nt($m),
  Hm = pe({}, xr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Vm = nt(Hm),
  Wm = pe({}, bo, {
    deltaX: function (e) {
      return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return 'deltaY' in e
        ? e.deltaY
        : 'wheelDeltaY' in e
          ? -e.wheelDeltaY
          : 'wheelDelta' in e
            ? -e.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Km = nt(Wm),
  Qm = [9, 13, 27, 32],
  gu = Bt && 'CompositionEvent' in window,
  Jr = null;
Bt && 'documentMode' in document && (Jr = document.documentMode);
var Ym = Bt && 'TextEvent' in window && !Jr,
  ed = Bt && (!gu || (Jr && 8 < Jr && 11 >= Jr)),
  Ws = ' ',
  Ks = !1;
function td(e, t) {
  switch (e) {
    case 'keyup':
      return Qm.indexOf(t.keyCode) !== -1;
    case 'keydown':
      return t.keyCode !== 229;
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0;
    default:
      return !1;
  }
}
function nd(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
}
var Gn = !1;
function Xm(e, t) {
  switch (e) {
    case 'compositionend':
      return nd(t);
    case 'keypress':
      return t.which !== 32 ? null : ((Ks = !0), Ws);
    case 'textInput':
      return (e = t.data), e === Ws && Ks ? null : e;
    default:
      return null;
  }
}
function Jm(e, t) {
  if (Gn)
    return e === 'compositionend' || (!gu && td(e, t))
      ? ((e = bf()), (co = mu = rn = null), (Gn = !1), e)
      : null;
  switch (e) {
    case 'paste':
      return null;
    case 'keypress':
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case 'compositionend':
      return ed && t.locale !== 'ko' ? null : t.data;
    default:
      return null;
  }
}
var Gm = {
  color: !0,
  date: !0,
  datetime: !0,
  'datetime-local': !0,
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
function Qs(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === 'input' ? !!Gm[e.type] : t === 'textarea';
}
function rd(e, t, n, r) {
  zf(r),
    (t = No(t, 'onChange')),
    0 < t.length &&
      ((n = new vu('onChange', 'change', null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Gr = null,
  ul = null;
function Zm(e) {
  pd(e, 0);
}
function ei(e) {
  var t = bn(e);
  if (Pf(t)) return e;
}
function qm(e, t) {
  if (e === 'change') return t;
}
var ld = !1;
if (Bt) {
  var Ni;
  if (Bt) {
    var Di = 'oninput' in document;
    if (!Di) {
      var Ys = document.createElement('div');
      Ys.setAttribute('oninput', 'return;'),
        (Di = typeof Ys.oninput == 'function');
    }
    Ni = Di;
  } else Ni = !1;
  ld = Ni && (!document.documentMode || 9 < document.documentMode);
}
function Xs() {
  Gr && (Gr.detachEvent('onpropertychange', od), (ul = Gr = null));
}
function od(e) {
  if (e.propertyName === 'value' && ei(ul)) {
    var t = [];
    rd(t, ul, e, cu(e)), Uf(Zm, t);
  }
}
function bm(e, t, n) {
  e === 'focusin'
    ? (Xs(), (Gr = t), (ul = n), Gr.attachEvent('onpropertychange', od))
    : e === 'focusout' && Xs();
}
function ev(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
    return ei(ul);
}
function tv(e, t) {
  if (e === 'click') return ei(t);
}
function nv(e, t) {
  if (e === 'input' || e === 'change') return ei(t);
}
function rv(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Et = typeof Object.is == 'function' ? Object.is : rv;
function sl(e, t) {
  if (Et(e, t)) return !0;
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!ea.call(t, l) || !Et(e[l], t[l])) return !1;
  }
  return !0;
}
function Js(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Gs(e, t) {
  var n = Js(e);
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
    n = Js(n);
  }
}
function id(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? id(e, t.parentNode)
          : 'contains' in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function ad() {
  for (var e = window, t = ko(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == 'string';
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = ko(e.document);
  }
  return t;
}
function wu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === 'input' &&
      (e.type === 'text' ||
        e.type === 'search' ||
        e.type === 'tel' ||
        e.type === 'url' ||
        e.type === 'password')) ||
      t === 'textarea' ||
      e.contentEditable === 'true')
  );
}
function lv(e) {
  var t = ad(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    id(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && wu(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        'selectionStart' in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          o = Math.min(r.start, l);
        (r = r.end === void 0 ? o : Math.min(r.end, l)),
          !e.extend && o > r && ((l = r), (r = o), (o = l)),
          (l = Gs(n, o));
        var i = Gs(n, r);
        l &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(i.node, i.offset))
            : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var ov = Bt && 'documentMode' in document && 11 >= document.documentMode,
  Zn = null,
  wa = null,
  Zr = null,
  Sa = !1;
function Zs(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Sa ||
    Zn == null ||
    Zn !== ko(r) ||
    ((r = Zn),
    'selectionStart' in r && wu(r)
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
    (Zr && sl(Zr, r)) ||
      ((Zr = r),
      (r = No(wa, 'onSelect')),
      0 < r.length &&
        ((t = new vu('onSelect', 'select', null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Zn))));
}
function Yl(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n['Webkit' + e] = 'webkit' + t),
    (n['Moz' + e] = 'moz' + t),
    n
  );
}
var qn = {
    animationend: Yl('Animation', 'AnimationEnd'),
    animationiteration: Yl('Animation', 'AnimationIteration'),
    animationstart: Yl('Animation', 'AnimationStart'),
    transitionend: Yl('Transition', 'TransitionEnd'),
  },
  Oi = {},
  ud = {};
Bt &&
  ((ud = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete qn.animationend.animation,
    delete qn.animationiteration.animation,
    delete qn.animationstart.animation),
  'TransitionEvent' in window || delete qn.transitionend.transition);
function ti(e) {
  if (Oi[e]) return Oi[e];
  if (!qn[e]) return e;
  var t = qn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in ud) return (Oi[e] = t[n]);
  return e;
}
var sd = ti('animationend'),
  cd = ti('animationiteration'),
  fd = ti('animationstart'),
  dd = ti('transitionend'),
  hd = new Map(),
  qs =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' '
    );
function yn(e, t) {
  hd.set(e, t), An(t, [e]);
}
for (var Mi = 0; Mi < qs.length; Mi++) {
  var zi = qs[Mi],
    iv = zi.toLowerCase(),
    av = zi[0].toUpperCase() + zi.slice(1);
  yn(iv, 'on' + av);
}
yn(sd, 'onAnimationEnd');
yn(cd, 'onAnimationIteration');
yn(fd, 'onAnimationStart');
yn('dblclick', 'onDoubleClick');
yn('focusin', 'onFocus');
yn('focusout', 'onBlur');
yn(dd, 'onTransitionEnd');
hr('onMouseEnter', ['mouseout', 'mouseover']);
hr('onMouseLeave', ['mouseout', 'mouseover']);
hr('onPointerEnter', ['pointerout', 'pointerover']);
hr('onPointerLeave', ['pointerout', 'pointerover']);
An(
  'onChange',
  'change click focusin focusout input keydown keyup selectionchange'.split(' ')
);
An(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
    ' '
  )
);
An('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
An(
  'onCompositionEnd',
  'compositionend focusout keydown keypress keyup mousedown'.split(' ')
);
An(
  'onCompositionStart',
  'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
);
An(
  'onCompositionUpdate',
  'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
);
var Kr =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' '
    ),
  uv = new Set('cancel close invalid load scroll toggle'.split(' ').concat(Kr));
function bs(e, t, n) {
  var r = e.type || 'unknown-event';
  (e.currentTarget = n), im(r, t, void 0, e), (e.currentTarget = null);
}
function pd(e, t) {
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
          bs(l, a, s), (o = u);
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((a = r[i]),
            (u = a.instance),
            (s = a.currentTarget),
            (a = a.listener),
            u !== o && l.isPropagationStopped())
          )
            break e;
          bs(l, a, s), (o = u);
        }
    }
  }
  if (Ro) throw ((e = ma), (Ro = !1), (ma = null), e);
}
function ie(e, t) {
  var n = t[Ra];
  n === void 0 && (n = t[Ra] = new Set());
  var r = e + '__bubble';
  n.has(r) || (md(t, e, 2, !1), n.add(r));
}
function Fi(e, t, n) {
  var r = 0;
  t && (r |= 4), md(n, e, r, t);
}
var Xl = '_reactListening' + Math.random().toString(36).slice(2);
function cl(e) {
  if (!e[Xl]) {
    (e[Xl] = !0),
      xf.forEach(function (n) {
        n !== 'selectionchange' && (uv.has(n) || Fi(n, !1, e), Fi(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Xl] || ((t[Xl] = !0), Fi('selectionchange', !1, t));
  }
}
function md(e, t, n, r) {
  switch (qf(t)) {
    case 1:
      var l = xm;
      break;
    case 4:
      l = km;
      break;
    default:
      l = pu;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !pa ||
      (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
        ? e.addEventListener(t, n, { passive: l })
        : e.addEventListener(t, n, !1);
}
function ji(e, t, n, r, l) {
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
            if (
              (u === 3 || u === 4) &&
              ((u = i.stateNode.containerInfo),
              u === l || (u.nodeType === 8 && u.parentNode === l))
            )
              return;
            i = i.return;
          }
        for (; a !== null; ) {
          if (((i = kn(a)), i === null)) return;
          if (((u = i.tag), u === 5 || u === 6)) {
            r = o = i;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  Uf(function () {
    var s = o,
      f = cu(n),
      c = [];
    e: {
      var d = hd.get(e);
      if (d !== void 0) {
        var E = vu,
          w = e;
        switch (e) {
          case 'keypress':
            if (fo(n) === 0) break e;
          case 'keydown':
          case 'keyup':
            E = Um;
            break;
          case 'focusin':
            (w = 'focus'), (E = Ti);
            break;
          case 'focusout':
            (w = 'blur'), (E = Ti);
            break;
          case 'beforeblur':
          case 'afterblur':
            E = Ti;
            break;
          case 'click':
            if (n.button === 2) break e;
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            E = Bs;
            break;
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            E = Cm;
            break;
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            E = Bm;
            break;
          case sd:
          case cd:
          case fd:
            E = Tm;
            break;
          case dd:
            E = Vm;
            break;
          case 'scroll':
            E = _m;
            break;
          case 'wheel':
            E = Km;
            break;
          case 'copy':
          case 'cut':
          case 'paste':
            E = Dm;
            break;
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            E = Vs;
        }
        var S = (t & 4) !== 0,
          C = !S && e === 'scroll',
          p = S ? (d !== null ? d + 'Capture' : null) : d;
        S = [];
        for (var h = s, m; h !== null; ) {
          m = h;
          var k = m.stateNode;
          if (
            (m.tag === 5 &&
              k !== null &&
              ((m = k),
              p !== null && ((k = ll(h, p)), k != null && S.push(fl(h, k, m)))),
            C)
          )
            break;
          h = h.return;
        }
        0 < S.length &&
          ((d = new E(d, w, null, n, f)), c.push({ event: d, listeners: S }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((d = e === 'mouseover' || e === 'pointerover'),
          (E = e === 'mouseout' || e === 'pointerout'),
          d &&
            n !== da &&
            (w = n.relatedTarget || n.fromElement) &&
            (kn(w) || w[Ht]))
        )
          break e;
        if (
          (E || d) &&
          ((d =
            f.window === f
              ? f
              : (d = f.ownerDocument)
                ? d.defaultView || d.parentWindow
                : window),
          E
            ? ((w = n.relatedTarget || n.toElement),
              (E = s),
              (w = w ? kn(w) : null),
              w !== null &&
                ((C = $n(w)), w !== C || (w.tag !== 5 && w.tag !== 6)) &&
                (w = null))
            : ((E = null), (w = s)),
          E !== w)
        ) {
          if (
            ((S = Bs),
            (k = 'onMouseLeave'),
            (p = 'onMouseEnter'),
            (h = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((S = Vs),
              (k = 'onPointerLeave'),
              (p = 'onPointerEnter'),
              (h = 'pointer')),
            (C = E == null ? d : bn(E)),
            (m = w == null ? d : bn(w)),
            (d = new S(k, h + 'leave', E, n, f)),
            (d.target = C),
            (d.relatedTarget = m),
            (k = null),
            kn(f) === s &&
              ((S = new S(p, h + 'enter', w, n, f)),
              (S.target = m),
              (S.relatedTarget = C),
              (k = S)),
            (C = k),
            E && w)
          )
            t: {
              for (S = E, p = w, h = 0, m = S; m; m = Qn(m)) h++;
              for (m = 0, k = p; k; k = Qn(k)) m++;
              for (; 0 < h - m; ) (S = Qn(S)), h--;
              for (; 0 < m - h; ) (p = Qn(p)), m--;
              for (; h--; ) {
                if (S === p || (p !== null && S === p.alternate)) break t;
                (S = Qn(S)), (p = Qn(p));
              }
              S = null;
            }
          else S = null;
          E !== null && ec(c, d, E, S, !1),
            w !== null && C !== null && ec(c, C, w, S, !0);
        }
      }
      e: {
        if (
          ((d = s ? bn(s) : window),
          (E = d.nodeName && d.nodeName.toLowerCase()),
          E === 'select' || (E === 'input' && d.type === 'file'))
        )
          var L = qm;
        else if (Qs(d))
          if (ld) L = nv;
          else {
            L = ev;
            var y = bm;
          }
        else
          (E = d.nodeName) &&
            E.toLowerCase() === 'input' &&
            (d.type === 'checkbox' || d.type === 'radio') &&
            (L = tv);
        if (L && (L = L(e, s))) {
          rd(c, L, n, f);
          break e;
        }
        y && y(e, d, s),
          e === 'focusout' &&
            (y = d._wrapperState) &&
            y.controlled &&
            d.type === 'number' &&
            aa(d, 'number', d.value);
      }
      switch (((y = s ? bn(s) : window), e)) {
        case 'focusin':
          (Qs(y) || y.contentEditable === 'true') &&
            ((Zn = y), (wa = s), (Zr = null));
          break;
        case 'focusout':
          Zr = wa = Zn = null;
          break;
        case 'mousedown':
          Sa = !0;
          break;
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          (Sa = !1), Zs(c, n, f);
          break;
        case 'selectionchange':
          if (ov) break;
        case 'keydown':
        case 'keyup':
          Zs(c, n, f);
      }
      var T;
      if (gu)
        e: {
          switch (e) {
            case 'compositionstart':
              var P = 'onCompositionStart';
              break e;
            case 'compositionend':
              P = 'onCompositionEnd';
              break e;
            case 'compositionupdate':
              P = 'onCompositionUpdate';
              break e;
          }
          P = void 0;
        }
      else
        Gn
          ? td(e, n) && (P = 'onCompositionEnd')
          : e === 'keydown' && n.keyCode === 229 && (P = 'onCompositionStart');
      P &&
        (ed &&
          n.locale !== 'ko' &&
          (Gn || P !== 'onCompositionStart'
            ? P === 'onCompositionEnd' && Gn && (T = bf())
            : ((rn = f),
              (mu = 'value' in rn ? rn.value : rn.textContent),
              (Gn = !0))),
        (y = No(s, P)),
        0 < y.length &&
          ((P = new Hs(P, e, null, n, f)),
          c.push({ event: P, listeners: y }),
          T ? (P.data = T) : ((T = nd(n)), T !== null && (P.data = T)))),
        (T = Ym ? Xm(e, n) : Jm(e, n)) &&
          ((s = No(s, 'onBeforeInput')),
          0 < s.length &&
            ((f = new Hs('onBeforeInput', 'beforeinput', null, n, f)),
            c.push({ event: f, listeners: s }),
            (f.data = T)));
    }
    pd(c, t);
  });
}
function fl(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function No(e, t) {
  for (var n = t + 'Capture', r = []; e !== null; ) {
    var l = e,
      o = l.stateNode;
    l.tag === 5 &&
      o !== null &&
      ((l = o),
      (o = ll(e, n)),
      o != null && r.unshift(fl(e, o, l)),
      (o = ll(e, t)),
      o != null && r.push(fl(e, o, l))),
      (e = e.return);
  }
  return r;
}
function Qn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function ec(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var a = n,
      u = a.alternate,
      s = a.stateNode;
    if (u !== null && u === r) break;
    a.tag === 5 &&
      s !== null &&
      ((a = s),
      l
        ? ((u = ll(n, o)), u != null && i.unshift(fl(n, u, a)))
        : l || ((u = ll(n, o)), u != null && i.push(fl(n, u, a)))),
      (n = n.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var sv = /\r\n?/g,
  cv = /\u0000|\uFFFD/g;
function tc(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      sv,
      `
`
    )
    .replace(cv, '');
}
function Jl(e, t, n) {
  if (((t = tc(t)), tc(e) !== t && n)) throw Error(N(425));
}
function Do() {}
var Ea = null,
  xa = null;
function ka(e, t) {
  return (
    e === 'textarea' ||
    e === 'noscript' ||
    typeof t.children == 'string' ||
    typeof t.children == 'number' ||
    (typeof t.dangerouslySetInnerHTML == 'object' &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var _a = typeof setTimeout == 'function' ? setTimeout : void 0,
  fv = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  nc = typeof Promise == 'function' ? Promise : void 0,
  dv =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof nc < 'u'
        ? function (e) {
            return nc.resolve(null).then(e).catch(hv);
          }
        : _a;
function hv(e) {
  setTimeout(function () {
    throw e;
  });
}
function Ii(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === '/$')) {
        if (r === 0) {
          e.removeChild(l), al(t);
          return;
        }
        r--;
      } else (n !== '$' && n !== '$?' && n !== '$!') || r++;
    n = l;
  } while (n);
  al(t);
}
function sn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break;
      if (t === '/$') return null;
    }
  }
  return e;
}
function rc(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === '$' || n === '$!' || n === '$?') {
        if (t === 0) return e;
        t--;
      } else n === '/$' && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var kr = Math.random().toString(36).slice(2),
  Pt = '__reactFiber$' + kr,
  dl = '__reactProps$' + kr,
  Ht = '__reactContainer$' + kr,
  Ra = '__reactEvents$' + kr,
  pv = '__reactListeners$' + kr,
  mv = '__reactHandles$' + kr;
function kn(e) {
  var t = e[Pt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Ht] || n[Pt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = rc(e); e !== null; ) {
          if ((n = e[Pt])) return n;
          e = rc(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Rl(e) {
  return (
    (e = e[Pt] || e[Ht]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function bn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(N(33));
}
function ni(e) {
  return e[dl] || null;
}
var Ca = [],
  er = -1;
function gn(e) {
  return { current: e };
}
function ae(e) {
  0 > er || ((e.current = Ca[er]), (Ca[er] = null), er--);
}
function le(e, t) {
  er++, (Ca[er] = e.current), (e.current = t);
}
var mn = {},
  je = gn(mn),
  Qe = gn(!1),
  Dn = mn;
function pr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return mn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    o;
  for (o in n) l[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function Ye(e) {
  return (e = e.childContextTypes), e != null;
}
function Oo() {
  ae(Qe), ae(je);
}
function lc(e, t, n) {
  if (je.current !== mn) throw Error(N(168));
  le(je, t), le(Qe, n);
}
function vd(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != 'function'))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(N(108, bp(e) || 'Unknown', l));
  return pe({}, n, r);
}
function Mo(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || mn),
    (Dn = je.current),
    le(je, e),
    le(Qe, Qe.current),
    !0
  );
}
function oc(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(N(169));
  n
    ? ((e = vd(e, t, Dn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      ae(Qe),
      ae(je),
      le(je, e))
    : ae(Qe),
    le(Qe, n);
}
var jt = null,
  ri = !1,
  Ui = !1;
function yd(e) {
  jt === null ? (jt = [e]) : jt.push(e);
}
function vv(e) {
  (ri = !0), yd(e);
}
function wn() {
  if (!Ui && jt !== null) {
    Ui = !0;
    var e = 0,
      t = b;
    try {
      var n = jt;
      for (b = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (jt = null), (ri = !1);
    } catch (l) {
      throw (jt !== null && (jt = jt.slice(e + 1)), Hf(fu, wn), l);
    } finally {
      (b = t), (Ui = !1);
    }
  }
  return null;
}
var tr = [],
  nr = 0,
  zo = null,
  Fo = 0,
  it = [],
  at = 0,
  On = null,
  Ut = 1,
  At = '';
function En(e, t) {
  (tr[nr++] = Fo), (tr[nr++] = zo), (zo = e), (Fo = t);
}
function gd(e, t, n) {
  (it[at++] = Ut), (it[at++] = At), (it[at++] = On), (On = e);
  var r = Ut;
  e = At;
  var l = 32 - wt(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var o = 32 - wt(t) + l;
  if (30 < o) {
    var i = l - (l % 5);
    (o = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (l -= i),
      (Ut = (1 << (32 - wt(t) + l)) | (n << l) | r),
      (At = o + e);
  } else (Ut = (1 << o) | (n << l) | r), (At = e);
}
function Su(e) {
  e.return !== null && (En(e, 1), gd(e, 1, 0));
}
function Eu(e) {
  for (; e === zo; )
    (zo = tr[--nr]), (tr[nr] = null), (Fo = tr[--nr]), (tr[nr] = null);
  for (; e === On; )
    (On = it[--at]),
      (it[at] = null),
      (At = it[--at]),
      (it[at] = null),
      (Ut = it[--at]),
      (it[at] = null);
}
var be = null,
  qe = null,
  fe = !1,
  gt = null;
function wd(e, t) {
  var n = ut(5, null, null, 0);
  (n.elementType = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function ic(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (be = e), (qe = sn(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (be = e), (qe = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = On !== null ? { id: Ut, overflow: At } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = ut(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (be = e),
            (qe = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Pa(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function La(e) {
  if (fe) {
    var t = qe;
    if (t) {
      var n = t;
      if (!ic(e, t)) {
        if (Pa(e)) throw Error(N(418));
        t = sn(n.nextSibling);
        var r = be;
        t && ic(e, t)
          ? wd(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (fe = !1), (be = e));
      }
    } else {
      if (Pa(e)) throw Error(N(418));
      (e.flags = (e.flags & -4097) | 2), (fe = !1), (be = e);
    }
  }
}
function ac(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  be = e;
}
function Gl(e) {
  if (e !== be) return !1;
  if (!fe) return ac(e), (fe = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== 'head' && t !== 'body' && !ka(e.type, e.memoizedProps))),
    t && (t = qe))
  ) {
    if (Pa(e)) throw (Sd(), Error(N(418)));
    for (; t; ) wd(e, t), (t = sn(t.nextSibling));
  }
  if ((ac(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(N(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === '/$') {
            if (t === 0) {
              qe = sn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== '$' && n !== '$!' && n !== '$?') || t++;
        }
        e = e.nextSibling;
      }
      qe = null;
    }
  } else qe = be ? sn(e.stateNode.nextSibling) : null;
  return !0;
}
function Sd() {
  for (var e = qe; e; ) e = sn(e.nextSibling);
}
function mr() {
  (qe = be = null), (fe = !1);
}
function xu(e) {
  gt === null ? (gt = [e]) : gt.push(e);
}
var yv = Qt.ReactCurrentBatchConfig;
function Fr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(N(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(N(147, e));
      var l = r,
        o = '' + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == 'function' &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (i) {
            var a = l.refs;
            i === null ? delete a[o] : (a[o] = i);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != 'string') throw Error(N(284));
    if (!n._owner) throw Error(N(290, e));
  }
  return e;
}
function Zl(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      N(
        31,
        e === '[object Object]'
          ? 'object with keys {' + Object.keys(t).join(', ') + '}'
          : e
      )
    ))
  );
}
function uc(e) {
  var t = e._init;
  return t(e._payload);
}
function Ed(e) {
  function t(p, h) {
    if (e) {
      var m = p.deletions;
      m === null ? ((p.deletions = [h]), (p.flags |= 16)) : m.push(h);
    }
  }
  function n(p, h) {
    if (!e) return null;
    for (; h !== null; ) t(p, h), (h = h.sibling);
    return null;
  }
  function r(p, h) {
    for (p = new Map(); h !== null; )
      h.key !== null ? p.set(h.key, h) : p.set(h.index, h), (h = h.sibling);
    return p;
  }
  function l(p, h) {
    return (p = hn(p, h)), (p.index = 0), (p.sibling = null), p;
  }
  function o(p, h, m) {
    return (
      (p.index = m),
      e
        ? ((m = p.alternate),
          m !== null
            ? ((m = m.index), m < h ? ((p.flags |= 2), h) : m)
            : ((p.flags |= 2), h))
        : ((p.flags |= 1048576), h)
    );
  }
  function i(p) {
    return e && p.alternate === null && (p.flags |= 2), p;
  }
  function a(p, h, m, k) {
    return h === null || h.tag !== 6
      ? ((h = Ki(m, p.mode, k)), (h.return = p), h)
      : ((h = l(h, m)), (h.return = p), h);
  }
  function u(p, h, m, k) {
    var L = m.type;
    return L === Jn
      ? f(p, h, m.props.children, k, m.key)
      : h !== null &&
          (h.elementType === L ||
            (typeof L == 'object' &&
              L !== null &&
              L.$$typeof === bt &&
              uc(L) === h.type))
        ? ((k = l(h, m.props)), (k.ref = Fr(p, h, m)), (k.return = p), k)
        : ((k = wo(m.type, m.key, m.props, null, p.mode, k)),
          (k.ref = Fr(p, h, m)),
          (k.return = p),
          k);
  }
  function s(p, h, m, k) {
    return h === null ||
      h.tag !== 4 ||
      h.stateNode.containerInfo !== m.containerInfo ||
      h.stateNode.implementation !== m.implementation
      ? ((h = Qi(m, p.mode, k)), (h.return = p), h)
      : ((h = l(h, m.children || [])), (h.return = p), h);
  }
  function f(p, h, m, k, L) {
    return h === null || h.tag !== 7
      ? ((h = Nn(m, p.mode, k, L)), (h.return = p), h)
      : ((h = l(h, m)), (h.return = p), h);
  }
  function c(p, h, m) {
    if ((typeof h == 'string' && h !== '') || typeof h == 'number')
      return (h = Ki('' + h, p.mode, m)), (h.return = p), h;
    if (typeof h == 'object' && h !== null) {
      switch (h.$$typeof) {
        case $l:
          return (
            (m = wo(h.type, h.key, h.props, null, p.mode, m)),
            (m.ref = Fr(p, null, h)),
            (m.return = p),
            m
          );
        case Xn:
          return (h = Qi(h, p.mode, m)), (h.return = p), h;
        case bt:
          var k = h._init;
          return c(p, k(h._payload), m);
      }
      if (Vr(h) || Nr(h))
        return (h = Nn(h, p.mode, m, null)), (h.return = p), h;
      Zl(p, h);
    }
    return null;
  }
  function d(p, h, m, k) {
    var L = h !== null ? h.key : null;
    if ((typeof m == 'string' && m !== '') || typeof m == 'number')
      return L !== null ? null : a(p, h, '' + m, k);
    if (typeof m == 'object' && m !== null) {
      switch (m.$$typeof) {
        case $l:
          return m.key === L ? u(p, h, m, k) : null;
        case Xn:
          return m.key === L ? s(p, h, m, k) : null;
        case bt:
          return (L = m._init), d(p, h, L(m._payload), k);
      }
      if (Vr(m) || Nr(m)) return L !== null ? null : f(p, h, m, k, null);
      Zl(p, m);
    }
    return null;
  }
  function E(p, h, m, k, L) {
    if ((typeof k == 'string' && k !== '') || typeof k == 'number')
      return (p = p.get(m) || null), a(h, p, '' + k, L);
    if (typeof k == 'object' && k !== null) {
      switch (k.$$typeof) {
        case $l:
          return (p = p.get(k.key === null ? m : k.key) || null), u(h, p, k, L);
        case Xn:
          return (p = p.get(k.key === null ? m : k.key) || null), s(h, p, k, L);
        case bt:
          var y = k._init;
          return E(p, h, m, y(k._payload), L);
      }
      if (Vr(k) || Nr(k)) return (p = p.get(m) || null), f(h, p, k, L, null);
      Zl(h, k);
    }
    return null;
  }
  function w(p, h, m, k) {
    for (
      var L = null, y = null, T = h, P = (h = 0), O = null;
      T !== null && P < m.length;
      P++
    ) {
      T.index > P ? ((O = T), (T = null)) : (O = T.sibling);
      var M = d(p, T, m[P], k);
      if (M === null) {
        T === null && (T = O);
        break;
      }
      e && T && M.alternate === null && t(p, T),
        (h = o(M, h, P)),
        y === null ? (L = M) : (y.sibling = M),
        (y = M),
        (T = O);
    }
    if (P === m.length) return n(p, T), fe && En(p, P), L;
    if (T === null) {
      for (; P < m.length; P++)
        (T = c(p, m[P], k)),
          T !== null &&
            ((h = o(T, h, P)), y === null ? (L = T) : (y.sibling = T), (y = T));
      return fe && En(p, P), L;
    }
    for (T = r(p, T); P < m.length; P++)
      (O = E(T, p, P, m[P], k)),
        O !== null &&
          (e && O.alternate !== null && T.delete(O.key === null ? P : O.key),
          (h = o(O, h, P)),
          y === null ? (L = O) : (y.sibling = O),
          (y = O));
    return (
      e &&
        T.forEach(function (V) {
          return t(p, V);
        }),
      fe && En(p, P),
      L
    );
  }
  function S(p, h, m, k) {
    var L = Nr(m);
    if (typeof L != 'function') throw Error(N(150));
    if (((m = L.call(m)), m == null)) throw Error(N(151));
    for (
      var y = (L = null), T = h, P = (h = 0), O = null, M = m.next();
      T !== null && !M.done;
      P++, M = m.next()
    ) {
      T.index > P ? ((O = T), (T = null)) : (O = T.sibling);
      var V = d(p, T, M.value, k);
      if (V === null) {
        T === null && (T = O);
        break;
      }
      e && T && V.alternate === null && t(p, T),
        (h = o(V, h, P)),
        y === null ? (L = V) : (y.sibling = V),
        (y = V),
        (T = O);
    }
    if (M.done) return n(p, T), fe && En(p, P), L;
    if (T === null) {
      for (; !M.done; P++, M = m.next())
        (M = c(p, M.value, k)),
          M !== null &&
            ((h = o(M, h, P)), y === null ? (L = M) : (y.sibling = M), (y = M));
      return fe && En(p, P), L;
    }
    for (T = r(p, T); !M.done; P++, M = m.next())
      (M = E(T, p, P, M.value, k)),
        M !== null &&
          (e && M.alternate !== null && T.delete(M.key === null ? P : M.key),
          (h = o(M, h, P)),
          y === null ? (L = M) : (y.sibling = M),
          (y = M));
    return (
      e &&
        T.forEach(function (X) {
          return t(p, X);
        }),
      fe && En(p, P),
      L
    );
  }
  function C(p, h, m, k) {
    if (
      (typeof m == 'object' &&
        m !== null &&
        m.type === Jn &&
        m.key === null &&
        (m = m.props.children),
      typeof m == 'object' && m !== null)
    ) {
      switch (m.$$typeof) {
        case $l:
          e: {
            for (var L = m.key, y = h; y !== null; ) {
              if (y.key === L) {
                if (((L = m.type), L === Jn)) {
                  if (y.tag === 7) {
                    n(p, y.sibling),
                      (h = l(y, m.props.children)),
                      (h.return = p),
                      (p = h);
                    break e;
                  }
                } else if (
                  y.elementType === L ||
                  (typeof L == 'object' &&
                    L !== null &&
                    L.$$typeof === bt &&
                    uc(L) === y.type)
                ) {
                  n(p, y.sibling),
                    (h = l(y, m.props)),
                    (h.ref = Fr(p, y, m)),
                    (h.return = p),
                    (p = h);
                  break e;
                }
                n(p, y);
                break;
              } else t(p, y);
              y = y.sibling;
            }
            m.type === Jn
              ? ((h = Nn(m.props.children, p.mode, k, m.key)),
                (h.return = p),
                (p = h))
              : ((k = wo(m.type, m.key, m.props, null, p.mode, k)),
                (k.ref = Fr(p, h, m)),
                (k.return = p),
                (p = k));
          }
          return i(p);
        case Xn:
          e: {
            for (y = m.key; h !== null; ) {
              if (h.key === y)
                if (
                  h.tag === 4 &&
                  h.stateNode.containerInfo === m.containerInfo &&
                  h.stateNode.implementation === m.implementation
                ) {
                  n(p, h.sibling),
                    (h = l(h, m.children || [])),
                    (h.return = p),
                    (p = h);
                  break e;
                } else {
                  n(p, h);
                  break;
                }
              else t(p, h);
              h = h.sibling;
            }
            (h = Qi(m, p.mode, k)), (h.return = p), (p = h);
          }
          return i(p);
        case bt:
          return (y = m._init), C(p, h, y(m._payload), k);
      }
      if (Vr(m)) return w(p, h, m, k);
      if (Nr(m)) return S(p, h, m, k);
      Zl(p, m);
    }
    return (typeof m == 'string' && m !== '') || typeof m == 'number'
      ? ((m = '' + m),
        h !== null && h.tag === 6
          ? (n(p, h.sibling), (h = l(h, m)), (h.return = p), (p = h))
          : (n(p, h), (h = Ki(m, p.mode, k)), (h.return = p), (p = h)),
        i(p))
      : n(p, h);
  }
  return C;
}
var vr = Ed(!0),
  xd = Ed(!1),
  jo = gn(null),
  Io = null,
  rr = null,
  ku = null;
function _u() {
  ku = rr = Io = null;
}
function Ru(e) {
  var t = jo.current;
  ae(jo), (e._currentValue = t);
}
function Ta(e, t, n) {
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
function fr(e, t) {
  (Io = e),
    (ku = rr = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Ke = !0), (e.firstContext = null));
}
function ct(e) {
  var t = e._currentValue;
  if (ku !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), rr === null)) {
      if (Io === null) throw Error(N(308));
      (rr = e), (Io.dependencies = { lanes: 0, firstContext: e });
    } else rr = rr.next = e;
  return t;
}
var _n = null;
function Cu(e) {
  _n === null ? (_n = [e]) : _n.push(e);
}
function kd(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), Cu(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    Vt(e, r)
  );
}
function Vt(e, t) {
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
var en = !1;
function Pu(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function _d(e, t) {
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
function $t(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function cn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), J & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      Vt(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), Cu(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    Vt(e, n)
  );
}
function ho(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), du(e, n);
  }
}
function sc(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var i = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (l = o = i) : (o = o.next = i), (n = n.next);
      } while (n !== null);
      o === null ? (l = o = t) : (o = o.next = t);
    } else l = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: o,
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
function Uo(e, t, n, r) {
  var l = e.updateQueue;
  en = !1;
  var o = l.firstBaseUpdate,
    i = l.lastBaseUpdate,
    a = l.shared.pending;
  if (a !== null) {
    l.shared.pending = null;
    var u = a,
      s = u.next;
    (u.next = null), i === null ? (o = s) : (i.next = s), (i = u);
    var f = e.alternate;
    f !== null &&
      ((f = f.updateQueue),
      (a = f.lastBaseUpdate),
      a !== i &&
        (a === null ? (f.firstBaseUpdate = s) : (a.next = s),
        (f.lastBaseUpdate = u)));
  }
  if (o !== null) {
    var c = l.baseState;
    (i = 0), (f = s = u = null), (a = o);
    do {
      var d = a.lane,
        E = a.eventTime;
      if ((r & d) === d) {
        f !== null &&
          (f = f.next =
            {
              eventTime: E,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var w = e,
            S = a;
          switch (((d = t), (E = n), S.tag)) {
            case 1:
              if (((w = S.payload), typeof w == 'function')) {
                c = w.call(E, c, d);
                break e;
              }
              c = w;
              break e;
            case 3:
              w.flags = (w.flags & -65537) | 128;
            case 0:
              if (
                ((w = S.payload),
                (d = typeof w == 'function' ? w.call(E, c, d) : w),
                d == null)
              )
                break e;
              c = pe({}, c, d);
              break e;
            case 2:
              en = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (d = l.effects),
          d === null ? (l.effects = [a]) : d.push(a));
      } else
        (E = {
          eventTime: E,
          lane: d,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          f === null ? ((s = f = E), (u = c)) : (f = f.next = E),
          (i |= d);
      if (((a = a.next), a === null)) {
        if (((a = l.shared.pending), a === null)) break;
        (d = a),
          (a = d.next),
          (d.next = null),
          (l.lastBaseUpdate = d),
          (l.shared.pending = null);
      }
    } while (!0);
    if (
      (f === null && (u = c),
      (l.baseState = u),
      (l.firstBaseUpdate = s),
      (l.lastBaseUpdate = f),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (i |= l.lane), (l = l.next);
      while (l !== t);
    } else o === null && (l.shared.lanes = 0);
    (zn |= i), (e.lanes = i), (e.memoizedState = c);
  }
}
function cc(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != 'function'))
          throw Error(N(191, l));
        l.call(r);
      }
    }
}
var Cl = {},
  Tt = gn(Cl),
  hl = gn(Cl),
  pl = gn(Cl);
function Rn(e) {
  if (e === Cl) throw Error(N(174));
  return e;
}
function Lu(e, t) {
  switch ((le(pl, t), le(hl, e), le(Tt, Cl), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : sa(null, '');
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = sa(t, e));
  }
  ae(Tt), le(Tt, t);
}
function yr() {
  ae(Tt), ae(hl), ae(pl);
}
function Rd(e) {
  Rn(pl.current);
  var t = Rn(Tt.current),
    n = sa(t, e.type);
  t !== n && (le(hl, e), le(Tt, n));
}
function Tu(e) {
  hl.current === e && (ae(Tt), ae(hl));
}
var de = gn(0);
function Ao(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!')
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
var Ai = [];
function Nu() {
  for (var e = 0; e < Ai.length; e++)
    Ai[e]._workInProgressVersionPrimary = null;
  Ai.length = 0;
}
var po = Qt.ReactCurrentDispatcher,
  $i = Qt.ReactCurrentBatchConfig,
  Mn = 0,
  he = null,
  _e = null,
  Ce = null,
  $o = !1,
  qr = !1,
  ml = 0,
  gv = 0;
function Me() {
  throw Error(N(321));
}
function Du(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Et(e[n], t[n])) return !1;
  return !0;
}
function Ou(e, t, n, r, l, o) {
  if (
    ((Mn = o),
    (he = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (po.current = e === null || e.memoizedState === null ? xv : kv),
    (e = n(r, l)),
    qr)
  ) {
    o = 0;
    do {
      if (((qr = !1), (ml = 0), 25 <= o)) throw Error(N(301));
      (o += 1),
        (Ce = _e = null),
        (t.updateQueue = null),
        (po.current = _v),
        (e = n(r, l));
    } while (qr);
  }
  if (
    ((po.current = Bo),
    (t = _e !== null && _e.next !== null),
    (Mn = 0),
    (Ce = _e = he = null),
    ($o = !1),
    t)
  )
    throw Error(N(300));
  return e;
}
function Mu() {
  var e = ml !== 0;
  return (ml = 0), e;
}
function Ct() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Ce === null ? (he.memoizedState = Ce = e) : (Ce = Ce.next = e), Ce;
}
function ft() {
  if (_e === null) {
    var e = he.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = _e.next;
  var t = Ce === null ? he.memoizedState : Ce.next;
  if (t !== null) (Ce = t), (_e = e);
  else {
    if (e === null) throw Error(N(310));
    (_e = e),
      (e = {
        memoizedState: _e.memoizedState,
        baseState: _e.baseState,
        baseQueue: _e.baseQueue,
        queue: _e.queue,
        next: null,
      }),
      Ce === null ? (he.memoizedState = Ce = e) : (Ce = Ce.next = e);
  }
  return Ce;
}
function vl(e, t) {
  return typeof t == 'function' ? t(e) : t;
}
function Bi(e) {
  var t = ft(),
    n = t.queue;
  if (n === null) throw Error(N(311));
  n.lastRenderedReducer = e;
  var r = _e,
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
      var f = s.lane;
      if ((Mn & f) === f)
        u !== null &&
          (u = u.next =
            {
              lane: 0,
              action: s.action,
              hasEagerState: s.hasEagerState,
              eagerState: s.eagerState,
              next: null,
            }),
          (r = s.hasEagerState ? s.eagerState : e(r, s.action));
      else {
        var c = {
          lane: f,
          action: s.action,
          hasEagerState: s.hasEagerState,
          eagerState: s.eagerState,
          next: null,
        };
        u === null ? ((a = u = c), (i = r)) : (u = u.next = c),
          (he.lanes |= f),
          (zn |= f);
      }
      s = s.next;
    } while (s !== null && s !== o);
    u === null ? (i = r) : (u.next = a),
      Et(r, t.memoizedState) || (Ke = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = u),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (o = l.lane), (he.lanes |= o), (zn |= o), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Hi(e) {
  var t = ft(),
    n = t.queue;
  if (n === null) throw Error(N(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    o = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var i = (l = l.next);
    do (o = e(o, i.action)), (i = i.next);
    while (i !== l);
    Et(o, t.memoizedState) || (Ke = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function Cd() {}
function Pd(e, t) {
  var n = he,
    r = ft(),
    l = t(),
    o = !Et(r.memoizedState, l);
  if (
    (o && ((r.memoizedState = l), (Ke = !0)),
    (r = r.queue),
    zu(Nd.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (Ce !== null && Ce.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      yl(9, Td.bind(null, n, r, l, t), void 0, null),
      Pe === null)
    )
      throw Error(N(349));
    Mn & 30 || Ld(n, t, l);
  }
  return l;
}
function Ld(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = he.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (he.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Td(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Dd(t) && Od(e);
}
function Nd(e, t, n) {
  return n(function () {
    Dd(t) && Od(e);
  });
}
function Dd(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Et(e, n);
  } catch {
    return !0;
  }
}
function Od(e) {
  var t = Vt(e, 1);
  t !== null && St(t, e, 1, -1);
}
function fc(e) {
  var t = Ct();
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: vl,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Ev.bind(null, he, e)),
    [t.memoizedState, e]
  );
}
function yl(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = he.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (he.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Md() {
  return ft().memoizedState;
}
function mo(e, t, n, r) {
  var l = Ct();
  (he.flags |= e),
    (l.memoizedState = yl(1 | t, n, void 0, r === void 0 ? null : r));
}
function li(e, t, n, r) {
  var l = ft();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (_e !== null) {
    var i = _e.memoizedState;
    if (((o = i.destroy), r !== null && Du(r, i.deps))) {
      l.memoizedState = yl(t, n, o, r);
      return;
    }
  }
  (he.flags |= e), (l.memoizedState = yl(1 | t, n, o, r));
}
function dc(e, t) {
  return mo(8390656, 8, e, t);
}
function zu(e, t) {
  return li(2048, 8, e, t);
}
function zd(e, t) {
  return li(4, 2, e, t);
}
function Fd(e, t) {
  return li(4, 4, e, t);
}
function jd(e, t) {
  if (typeof t == 'function')
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
function Id(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), li(4, 4, jd.bind(null, t, e), n)
  );
}
function Fu() {}
function Ud(e, t) {
  var n = ft();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Du(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Ad(e, t) {
  var n = ft();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Du(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function $d(e, t, n) {
  return Mn & 21
    ? (Et(n, t) || ((n = Kf()), (he.lanes |= n), (zn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Ke = !0)), (e.memoizedState = n));
}
function wv(e, t) {
  var n = b;
  (b = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = $i.transition;
  $i.transition = {};
  try {
    e(!1), t();
  } finally {
    (b = n), ($i.transition = r);
  }
}
function Bd() {
  return ft().memoizedState;
}
function Sv(e, t, n) {
  var r = dn(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Hd(e))
  )
    Vd(t, n);
  else if (((n = kd(e, t, n, r)), n !== null)) {
    var l = Be();
    St(n, e, r, l), Wd(n, t, r);
  }
}
function Ev(e, t, n) {
  var r = dn(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Hd(e)) Vd(t, l);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var i = t.lastRenderedState,
          a = o(i, n);
        if (((l.hasEagerState = !0), (l.eagerState = a), Et(a, i))) {
          var u = t.interleaved;
          u === null
            ? ((l.next = l), Cu(t))
            : ((l.next = u.next), (u.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = kd(e, t, l, r)),
      n !== null && ((l = Be()), St(n, e, r, l), Wd(n, t, r));
  }
}
function Hd(e) {
  var t = e.alternate;
  return e === he || (t !== null && t === he);
}
function Vd(e, t) {
  qr = $o = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Wd(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), du(e, n);
  }
}
var Bo = {
    readContext: ct,
    useCallback: Me,
    useContext: Me,
    useEffect: Me,
    useImperativeHandle: Me,
    useInsertionEffect: Me,
    useLayoutEffect: Me,
    useMemo: Me,
    useReducer: Me,
    useRef: Me,
    useState: Me,
    useDebugValue: Me,
    useDeferredValue: Me,
    useTransition: Me,
    useMutableSource: Me,
    useSyncExternalStore: Me,
    useId: Me,
    unstable_isNewReconciler: !1,
  },
  xv = {
    readContext: ct,
    useCallback: function (e, t) {
      return (Ct().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: ct,
    useEffect: dc,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        mo(4194308, 4, jd.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return mo(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return mo(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Ct();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Ct();
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
        (e = e.dispatch = Sv.bind(null, he, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Ct();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: fc,
    useDebugValue: Fu,
    useDeferredValue: function (e) {
      return (Ct().memoizedState = e);
    },
    useTransition: function () {
      var e = fc(!1),
        t = e[0];
      return (e = wv.bind(null, e[1])), (Ct().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = he,
        l = Ct();
      if (fe) {
        if (n === void 0) throw Error(N(407));
        n = n();
      } else {
        if (((n = t()), Pe === null)) throw Error(N(349));
        Mn & 30 || Ld(r, t, n);
      }
      l.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (l.queue = o),
        dc(Nd.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        yl(9, Td.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Ct(),
        t = Pe.identifierPrefix;
      if (fe) {
        var n = At,
          r = Ut;
        (n = (r & ~(1 << (32 - wt(r) - 1))).toString(32) + n),
          (t = ':' + t + 'R' + n),
          (n = ml++),
          0 < n && (t += 'H' + n.toString(32)),
          (t += ':');
      } else (n = gv++), (t = ':' + t + 'r' + n.toString(32) + ':');
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  kv = {
    readContext: ct,
    useCallback: Ud,
    useContext: ct,
    useEffect: zu,
    useImperativeHandle: Id,
    useInsertionEffect: zd,
    useLayoutEffect: Fd,
    useMemo: Ad,
    useReducer: Bi,
    useRef: Md,
    useState: function () {
      return Bi(vl);
    },
    useDebugValue: Fu,
    useDeferredValue: function (e) {
      var t = ft();
      return $d(t, _e.memoizedState, e);
    },
    useTransition: function () {
      var e = Bi(vl)[0],
        t = ft().memoizedState;
      return [e, t];
    },
    useMutableSource: Cd,
    useSyncExternalStore: Pd,
    useId: Bd,
    unstable_isNewReconciler: !1,
  },
  _v = {
    readContext: ct,
    useCallback: Ud,
    useContext: ct,
    useEffect: zu,
    useImperativeHandle: Id,
    useInsertionEffect: zd,
    useLayoutEffect: Fd,
    useMemo: Ad,
    useReducer: Hi,
    useRef: Md,
    useState: function () {
      return Hi(vl);
    },
    useDebugValue: Fu,
    useDeferredValue: function (e) {
      var t = ft();
      return _e === null ? (t.memoizedState = e) : $d(t, _e.memoizedState, e);
    },
    useTransition: function () {
      var e = Hi(vl)[0],
        t = ft().memoizedState;
      return [e, t];
    },
    useMutableSource: Cd,
    useSyncExternalStore: Pd,
    useId: Bd,
    unstable_isNewReconciler: !1,
  };
function mt(e, t) {
  if (e && e.defaultProps) {
    (t = pe({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Na(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : pe({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var oi = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? $n(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Be(),
      l = dn(e),
      o = $t(r, l);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = cn(e, o, l)),
      t !== null && (St(t, e, l, r), ho(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Be(),
      l = dn(e),
      o = $t(r, l);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = cn(e, o, l)),
      t !== null && (St(t, e, l, r), ho(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Be(),
      r = dn(e),
      l = $t(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = cn(e, l, r)),
      t !== null && (St(t, e, r, n), ho(t, e, r));
  },
};
function hc(e, t, n, r, l, o, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(r, o, i)
      : t.prototype && t.prototype.isPureReactComponent
        ? !sl(n, r) || !sl(l, o)
        : !0
  );
}
function Kd(e, t, n) {
  var r = !1,
    l = mn,
    o = t.contextType;
  return (
    typeof o == 'object' && o !== null
      ? (o = ct(o))
      : ((l = Ye(t) ? Dn : je.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? pr(e, l) : mn)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = oi),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function pc(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == 'function' &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && oi.enqueueReplaceState(t, t.state, null);
}
function Da(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = {}), Pu(e);
  var o = t.contextType;
  typeof o == 'object' && o !== null
    ? (l.context = ct(o))
    : ((o = Ye(t) ? Dn : je.current), (l.context = pr(e, o))),
    (l.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == 'function' && (Na(e, t, o, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof l.getSnapshotBeforeUpdate == 'function' ||
      (typeof l.UNSAFE_componentWillMount != 'function' &&
        typeof l.componentWillMount != 'function') ||
      ((t = l.state),
      typeof l.componentWillMount == 'function' && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == 'function' &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && oi.enqueueReplaceState(l, l.state, null),
      Uo(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == 'function' && (e.flags |= 4194308);
}
function gr(e, t) {
  try {
    var n = '',
      r = t;
    do (n += qp(r)), (r = r.return);
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
function Vi(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Oa(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Rv = typeof WeakMap == 'function' ? WeakMap : Map;
function Qd(e, t, n) {
  (n = $t(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Vo || ((Vo = !0), (Ha = r)), Oa(e, t);
    }),
    n
  );
}
function Yd(e, t, n) {
  (n = $t(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == 'function') {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        Oa(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == 'function' &&
      (n.callback = function () {
        Oa(e, t),
          typeof r != 'function' &&
            (fn === null ? (fn = new Set([this])) : fn.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : '',
        });
      }),
    n
  );
}
function mc(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Rv();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = Av.bind(null, e, t, n)), t.then(e, e));
}
function vc(e) {
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
function yc(e, t, n, r, l) {
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
              : ((t = $t(-1, 1)), (t.tag = 2), cn(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Cv = Qt.ReactCurrentOwner,
  Ke = !1;
function $e(e, t, n, r) {
  t.child = e === null ? xd(t, null, n, r) : vr(t, e.child, n, r);
}
function gc(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return (
    fr(t, l),
    (r = Ou(e, t, n, r, o, l)),
    (n = Mu()),
    e !== null && !Ke
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Wt(e, t, l))
      : (fe && n && Su(t), (t.flags |= 1), $e(e, t, r, l), t.child)
  );
}
function wc(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == 'function' &&
      !Vu(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), Xd(e, t, o, r, l))
      : ((e = wo(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & l))) {
    var i = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : sl), n(i, r) && e.ref === t.ref)
    )
      return Wt(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = hn(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Xd(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (sl(o, r) && e.ref === t.ref)
      if (((Ke = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
        e.flags & 131072 && (Ke = !0);
      else return (t.lanes = e.lanes), Wt(e, t, l);
  }
  return Ma(e, t, n, r, l);
}
function Jd(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === 'hidden')
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        le(or, Ge),
        (Ge |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          le(or, Ge),
          (Ge |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        le(or, Ge),
        (Ge |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      le(or, Ge),
      (Ge |= r);
  return $e(e, t, l, n), t.child;
}
function Gd(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Ma(e, t, n, r, l) {
  var o = Ye(n) ? Dn : je.current;
  return (
    (o = pr(t, o)),
    fr(t, l),
    (n = Ou(e, t, n, r, o, l)),
    (r = Mu()),
    e !== null && !Ke
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Wt(e, t, l))
      : (fe && r && Su(t), (t.flags |= 1), $e(e, t, n, l), t.child)
  );
}
function Sc(e, t, n, r, l) {
  if (Ye(n)) {
    var o = !0;
    Mo(t);
  } else o = !1;
  if ((fr(t, l), t.stateNode === null))
    vo(e, t), Kd(t, n, r), Da(t, n, r, l), (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      a = t.memoizedProps;
    i.props = a;
    var u = i.context,
      s = n.contextType;
    typeof s == 'object' && s !== null
      ? (s = ct(s))
      : ((s = Ye(n) ? Dn : je.current), (s = pr(t, s)));
    var f = n.getDerivedStateFromProps,
      c =
        typeof f == 'function' ||
        typeof i.getSnapshotBeforeUpdate == 'function';
    c ||
      (typeof i.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof i.componentWillReceiveProps != 'function') ||
      ((a !== r || u !== s) && pc(t, i, r, s)),
      (en = !1);
    var d = t.memoizedState;
    (i.state = d),
      Uo(t, r, i, l),
      (u = t.memoizedState),
      a !== r || d !== u || Qe.current || en
        ? (typeof f == 'function' && (Na(t, n, f, r), (u = t.memoizedState)),
          (a = en || hc(t, n, a, r, d, u, s))
            ? (c ||
                (typeof i.UNSAFE_componentWillMount != 'function' &&
                  typeof i.componentWillMount != 'function') ||
                (typeof i.componentWillMount == 'function' &&
                  i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == 'function' &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == 'function' && (t.flags |= 4194308))
            : (typeof i.componentDidMount == 'function' && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = u)),
          (i.props = r),
          (i.state = u),
          (i.context = s),
          (r = a))
        : (typeof i.componentDidMount == 'function' && (t.flags |= 4194308),
          (r = !1));
  } else {
    (i = t.stateNode),
      _d(e, t),
      (a = t.memoizedProps),
      (s = t.type === t.elementType ? a : mt(t.type, a)),
      (i.props = s),
      (c = t.pendingProps),
      (d = i.context),
      (u = n.contextType),
      typeof u == 'object' && u !== null
        ? (u = ct(u))
        : ((u = Ye(n) ? Dn : je.current), (u = pr(t, u)));
    var E = n.getDerivedStateFromProps;
    (f =
      typeof E == 'function' ||
      typeof i.getSnapshotBeforeUpdate == 'function') ||
      (typeof i.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof i.componentWillReceiveProps != 'function') ||
      ((a !== c || d !== u) && pc(t, i, r, u)),
      (en = !1),
      (d = t.memoizedState),
      (i.state = d),
      Uo(t, r, i, l);
    var w = t.memoizedState;
    a !== c || d !== w || Qe.current || en
      ? (typeof E == 'function' && (Na(t, n, E, r), (w = t.memoizedState)),
        (s = en || hc(t, n, s, r, d, w, u) || !1)
          ? (f ||
              (typeof i.UNSAFE_componentWillUpdate != 'function' &&
                typeof i.componentWillUpdate != 'function') ||
              (typeof i.componentWillUpdate == 'function' &&
                i.componentWillUpdate(r, w, u),
              typeof i.UNSAFE_componentWillUpdate == 'function' &&
                i.UNSAFE_componentWillUpdate(r, w, u)),
            typeof i.componentDidUpdate == 'function' && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != 'function' ||
              (a === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != 'function' ||
              (a === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = w)),
        (i.props = r),
        (i.state = w),
        (i.context = u),
        (r = s))
      : (typeof i.componentDidUpdate != 'function' ||
          (a === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != 'function' ||
          (a === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return za(e, t, n, r, o, l);
}
function za(e, t, n, r, l, o) {
  Gd(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return l && oc(t, n, !1), Wt(e, t, o);
  (r = t.stateNode), (Cv.current = t);
  var a =
    i && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = vr(t, e.child, null, o)), (t.child = vr(t, null, a, o)))
      : $e(e, t, a, o),
    (t.memoizedState = r.state),
    l && oc(t, n, !0),
    t.child
  );
}
function Zd(e) {
  var t = e.stateNode;
  t.pendingContext
    ? lc(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && lc(e, t.context, !1),
    Lu(e, t.containerInfo);
}
function Ec(e, t, n, r, l) {
  return mr(), xu(l), (t.flags |= 256), $e(e, t, n, r), t.child;
}
var Fa = { dehydrated: null, treeContext: null, retryLane: 0 };
function ja(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function qd(e, t, n) {
  var r = t.pendingProps,
    l = de.current,
    o = !1,
    i = (t.flags & 128) !== 0,
    a;
  if (
    ((a = i) ||
      (a = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    a
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    le(de, l & 1),
    e === null)
  )
    return (
      La(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === '$!'
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((i = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (i = { mode: 'hidden', children: i }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = i))
                : (o = ui(i, r, 0, null)),
              (e = Nn(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = ja(n)),
              (t.memoizedState = Fa),
              e)
            : ju(t, i))
    );
  if (((l = e.memoizedState), l !== null && ((a = l.dehydrated), a !== null)))
    return Pv(e, t, i, r, a, l, n);
  if (o) {
    (o = r.fallback), (i = t.mode), (l = e.child), (a = l.sibling);
    var u = { mode: 'hidden', children: r.children };
    return (
      !(i & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = u),
          (t.deletions = null))
        : ((r = hn(l, u)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      a !== null ? (o = hn(a, o)) : ((o = Nn(o, i, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? ja(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (o.memoizedState = i),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = Fa),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = hn(o, { mode: 'visible', children: r.children })),
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
function ju(e, t) {
  return (
    (t = ui({ mode: 'visible', children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function ql(e, t, n, r) {
  return (
    r !== null && xu(r),
    vr(t, e.child, null, n),
    (e = ju(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Pv(e, t, n, r, l, o, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Vi(Error(N(422)))), ql(e, t, i, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((o = r.fallback),
          (l = t.mode),
          (r = ui({ mode: 'visible', children: r.children }, l, 0, null)),
          (o = Nn(o, l, i, null)),
          (o.flags |= 2),
          (r.return = t),
          (o.return = t),
          (r.sibling = o),
          (t.child = r),
          t.mode & 1 && vr(t, e.child, null, i),
          (t.child.memoizedState = ja(i)),
          (t.memoizedState = Fa),
          o);
  if (!(t.mode & 1)) return ql(e, t, i, null);
  if (l.data === '$!') {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (o = Error(N(419))), (r = Vi(o, r, void 0)), ql(e, t, i, r);
  }
  if (((a = (i & e.childLanes) !== 0), Ke || a)) {
    if (((r = Pe), r !== null)) {
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
      (l = l & (r.suspendedLanes | i) ? 0 : l),
        l !== 0 &&
          l !== o.retryLane &&
          ((o.retryLane = l), Vt(e, l), St(r, e, l, -1));
    }
    return Hu(), (r = Vi(Error(N(421)))), ql(e, t, i, r);
  }
  return l.data === '$?'
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = $v.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (qe = sn(l.nextSibling)),
      (be = t),
      (fe = !0),
      (gt = null),
      e !== null &&
        ((it[at++] = Ut),
        (it[at++] = At),
        (it[at++] = On),
        (Ut = e.id),
        (At = e.overflow),
        (On = t)),
      (t = ju(t, r.children)),
      (t.flags |= 4096),
      t);
}
function xc(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Ta(e.return, t, n);
}
function Wi(e, t, n, r, l) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = l));
}
function bd(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    o = r.tail;
  if (($e(e, t, r.children, n), (r = de.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && xc(e, n, t);
        else if (e.tag === 19) xc(e, n, t);
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
  if ((le(de, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case 'forwards':
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && Ao(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          Wi(t, !1, l, n, o);
        break;
      case 'backwards':
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && Ao(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        Wi(t, !0, n, null, o);
        break;
      case 'together':
        Wi(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function vo(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Wt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (zn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(N(153));
  if (t.child !== null) {
    for (
      e = t.child, n = hn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = hn(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Lv(e, t, n) {
  switch (t.tag) {
    case 3:
      Zd(t), mr();
      break;
    case 5:
      Rd(t);
      break;
    case 1:
      Ye(t.type) && Mo(t);
      break;
    case 4:
      Lu(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      le(jo, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (le(de, de.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? qd(e, t, n)
            : (le(de, de.current & 1),
              (e = Wt(e, t, n)),
              e !== null ? e.sibling : null);
      le(de, de.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return bd(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        le(de, de.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Jd(e, t, n);
  }
  return Wt(e, t, n);
}
var eh, Ia, th, nh;
eh = function (e, t) {
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
Ia = function () {};
th = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), Rn(Tt.current);
    var o = null;
    switch (n) {
      case 'input':
        (l = oa(e, l)), (r = oa(e, r)), (o = []);
        break;
      case 'select':
        (l = pe({}, l, { value: void 0 })),
          (r = pe({}, r, { value: void 0 })),
          (o = []);
        break;
      case 'textarea':
        (l = ua(e, l)), (r = ua(e, r)), (o = []);
        break;
      default:
        typeof l.onClick != 'function' &&
          typeof r.onClick == 'function' &&
          (e.onclick = Do);
    }
    ca(n, r);
    var i;
    n = null;
    for (s in l)
      if (!r.hasOwnProperty(s) && l.hasOwnProperty(s) && l[s] != null)
        if (s === 'style') {
          var a = l[s];
          for (i in a) a.hasOwnProperty(i) && (n || (n = {}), (n[i] = ''));
        } else
          s !== 'dangerouslySetInnerHTML' &&
            s !== 'children' &&
            s !== 'suppressContentEditableWarning' &&
            s !== 'suppressHydrationWarning' &&
            s !== 'autoFocus' &&
            (nl.hasOwnProperty(s)
              ? o || (o = [])
              : (o = o || []).push(s, null));
    for (s in r) {
      var u = r[s];
      if (
        ((a = l != null ? l[s] : void 0),
        r.hasOwnProperty(s) && u !== a && (u != null || a != null))
      )
        if (s === 'style')
          if (a) {
            for (i in a)
              !a.hasOwnProperty(i) ||
                (u && u.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ''));
            for (i in u)
              u.hasOwnProperty(i) &&
                a[i] !== u[i] &&
                (n || (n = {}), (n[i] = u[i]));
          } else n || (o || (o = []), o.push(s, n)), (n = u);
        else
          s === 'dangerouslySetInnerHTML'
            ? ((u = u ? u.__html : void 0),
              (a = a ? a.__html : void 0),
              u != null && a !== u && (o = o || []).push(s, u))
            : s === 'children'
              ? (typeof u != 'string' && typeof u != 'number') ||
                (o = o || []).push(s, '' + u)
              : s !== 'suppressContentEditableWarning' &&
                s !== 'suppressHydrationWarning' &&
                (nl.hasOwnProperty(s)
                  ? (u != null && s === 'onScroll' && ie('scroll', e),
                    o || a === u || (o = []))
                  : (o = o || []).push(s, u));
    }
    n && (o = o || []).push('style', n);
    var s = o;
    (t.updateQueue = s) && (t.flags |= 4);
  }
};
nh = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function jr(e, t) {
  if (!fe)
    switch (e.tailMode) {
      case 'hidden':
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case 'collapsed':
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
function ze(e) {
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
function Tv(e, t, n) {
  var r = t.pendingProps;
  switch ((Eu(t), t.tag)) {
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
      return ze(t), null;
    case 1:
      return Ye(t.type) && Oo(), ze(t), null;
    case 3:
      return (
        (r = t.stateNode),
        yr(),
        ae(Qe),
        ae(je),
        Nu(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Gl(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), gt !== null && (Ka(gt), (gt = null)))),
        Ia(e, t),
        ze(t),
        null
      );
    case 5:
      Tu(t);
      var l = Rn(pl.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        th(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(N(166));
          return ze(t), null;
        }
        if (((e = Rn(Tt.current)), Gl(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[Pt] = t), (r[dl] = o), (e = (t.mode & 1) !== 0), n)) {
            case 'dialog':
              ie('cancel', r), ie('close', r);
              break;
            case 'iframe':
            case 'object':
            case 'embed':
              ie('load', r);
              break;
            case 'video':
            case 'audio':
              for (l = 0; l < Kr.length; l++) ie(Kr[l], r);
              break;
            case 'source':
              ie('error', r);
              break;
            case 'img':
            case 'image':
            case 'link':
              ie('error', r), ie('load', r);
              break;
            case 'details':
              ie('toggle', r);
              break;
            case 'input':
              Ds(r, o), ie('invalid', r);
              break;
            case 'select':
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                ie('invalid', r);
              break;
            case 'textarea':
              Ms(r, o), ie('invalid', r);
          }
          ca(n, o), (l = null);
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var a = o[i];
              i === 'children'
                ? typeof a == 'string'
                  ? r.textContent !== a &&
                    (o.suppressHydrationWarning !== !0 &&
                      Jl(r.textContent, a, e),
                    (l = ['children', a]))
                  : typeof a == 'number' &&
                    r.textContent !== '' + a &&
                    (o.suppressHydrationWarning !== !0 &&
                      Jl(r.textContent, a, e),
                    (l = ['children', '' + a]))
                : nl.hasOwnProperty(i) &&
                  a != null &&
                  i === 'onScroll' &&
                  ie('scroll', r);
            }
          switch (n) {
            case 'input':
              Bl(r), Os(r, o, !0);
              break;
            case 'textarea':
              Bl(r), zs(r);
              break;
            case 'select':
            case 'option':
              break;
            default:
              typeof o.onClick == 'function' && (r.onclick = Do);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (i = l.nodeType === 9 ? l : l.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = Nf(n)),
            e === 'http://www.w3.org/1999/xhtml'
              ? n === 'script'
                ? ((e = i.createElement('div')),
                  (e.innerHTML = '<script></script>'),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == 'string'
                  ? (e = i.createElement(n, { is: r.is }))
                  : ((e = i.createElement(n)),
                    n === 'select' &&
                      ((i = e),
                      r.multiple
                        ? (i.multiple = !0)
                        : r.size && (i.size = r.size)))
              : (e = i.createElementNS(e, n)),
            (e[Pt] = t),
            (e[dl] = r),
            eh(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = fa(n, r)), n)) {
              case 'dialog':
                ie('cancel', e), ie('close', e), (l = r);
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                ie('load', e), (l = r);
                break;
              case 'video':
              case 'audio':
                for (l = 0; l < Kr.length; l++) ie(Kr[l], e);
                l = r;
                break;
              case 'source':
                ie('error', e), (l = r);
                break;
              case 'img':
              case 'image':
              case 'link':
                ie('error', e), ie('load', e), (l = r);
                break;
              case 'details':
                ie('toggle', e), (l = r);
                break;
              case 'input':
                Ds(e, r), (l = oa(e, r)), ie('invalid', e);
                break;
              case 'option':
                l = r;
                break;
              case 'select':
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = pe({}, r, { value: void 0 })),
                  ie('invalid', e);
                break;
              case 'textarea':
                Ms(e, r), (l = ua(e, r)), ie('invalid', e);
                break;
              default:
                l = r;
            }
            ca(n, l), (a = l);
            for (o in a)
              if (a.hasOwnProperty(o)) {
                var u = a[o];
                o === 'style'
                  ? Mf(e, u)
                  : o === 'dangerouslySetInnerHTML'
                    ? ((u = u ? u.__html : void 0), u != null && Df(e, u))
                    : o === 'children'
                      ? typeof u == 'string'
                        ? (n !== 'textarea' || u !== '') && rl(e, u)
                        : typeof u == 'number' && rl(e, '' + u)
                      : o !== 'suppressContentEditableWarning' &&
                        o !== 'suppressHydrationWarning' &&
                        o !== 'autoFocus' &&
                        (nl.hasOwnProperty(o)
                          ? u != null && o === 'onScroll' && ie('scroll', e)
                          : u != null && iu(e, o, u, i));
              }
            switch (n) {
              case 'input':
                Bl(e), Os(e, r, !1);
                break;
              case 'textarea':
                Bl(e), zs(e);
                break;
              case 'option':
                r.value != null && e.setAttribute('value', '' + pn(r.value));
                break;
              case 'select':
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? ar(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      ar(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == 'function' && (e.onclick = Do);
            }
            switch (n) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                r = !!r.autoFocus;
                break e;
              case 'img':
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
      return ze(t), null;
    case 6:
      if (e && t.stateNode != null) nh(e, t, e.memoizedProps, r);
      else {
        if (typeof r != 'string' && t.stateNode === null) throw Error(N(166));
        if (((n = Rn(pl.current)), Rn(Tt.current), Gl(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Pt] = t),
            (o = r.nodeValue !== n) && ((e = be), e !== null))
          )
            switch (e.tag) {
              case 3:
                Jl(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Jl(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Pt] = t),
            (t.stateNode = r);
      }
      return ze(t), null;
    case 13:
      if (
        (ae(de),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (fe && qe !== null && t.mode & 1 && !(t.flags & 128))
          Sd(), mr(), (t.flags |= 98560), (o = !1);
        else if (((o = Gl(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(N(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(N(317));
            o[Pt] = t;
          } else
            mr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          ze(t), (o = !1);
        } else gt !== null && (Ka(gt), (gt = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || de.current & 1 ? Re === 0 && (Re = 3) : Hu())),
          t.updateQueue !== null && (t.flags |= 4),
          ze(t),
          null);
    case 4:
      return (
        yr(), Ia(e, t), e === null && cl(t.stateNode.containerInfo), ze(t), null
      );
    case 10:
      return Ru(t.type._context), ze(t), null;
    case 17:
      return Ye(t.type) && Oo(), ze(t), null;
    case 19:
      if ((ae(de), (o = t.memoizedState), o === null)) return ze(t), null;
      if (((r = (t.flags & 128) !== 0), (i = o.rendering), i === null))
        if (r) jr(o, !1);
        else {
          if (Re !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = Ao(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    jr(o, !1),
                    r = i.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
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
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return le(de, (de.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            ye() > wr &&
            ((t.flags |= 128), (r = !0), jr(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Ao(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              jr(o, !0),
              o.tail === null && o.tailMode === 'hidden' && !i.alternate && !fe)
            )
              return ze(t), null;
          } else
            2 * ye() - o.renderingStartTime > wr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), jr(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((n = o.last),
            n !== null ? (n.sibling = i) : (t.child = i),
            (o.last = i));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = ye()),
          (t.sibling = null),
          (n = de.current),
          le(de, r ? (n & 1) | 2 : n & 1),
          t)
        : (ze(t), null);
    case 22:
    case 23:
      return (
        Bu(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Ge & 1073741824 && (ze(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ze(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(N(156, t.tag));
}
function Nv(e, t) {
  switch ((Eu(t), t.tag)) {
    case 1:
      return (
        Ye(t.type) && Oo(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        yr(),
        ae(Qe),
        ae(je),
        Nu(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Tu(t), null;
    case 13:
      if (
        (ae(de), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(N(340));
        mr();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return ae(de), null;
    case 4:
      return yr(), null;
    case 10:
      return Ru(t.type._context), null;
    case 22:
    case 23:
      return Bu(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var bl = !1,
  Fe = !1,
  Dv = typeof WeakSet == 'function' ? WeakSet : Set,
  j = null;
function lr(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == 'function')
      try {
        n(null);
      } catch (r) {
        ve(e, t, r);
      }
    else n.current = null;
}
function Ua(e, t, n) {
  try {
    n();
  } catch (r) {
    ve(e, t, r);
  }
}
var kc = !1;
function Ov(e, t) {
  if (((Ea = Lo), (e = ad()), wu(e))) {
    if ('selectionStart' in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
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
            f = 0,
            c = e,
            d = null;
          t: for (;;) {
            for (
              var E;
              c !== n || (l !== 0 && c.nodeType !== 3) || (a = i + l),
                c !== o || (r !== 0 && c.nodeType !== 3) || (u = i + r),
                c.nodeType === 3 && (i += c.nodeValue.length),
                (E = c.firstChild) !== null;

            )
              (d = c), (c = E);
            for (;;) {
              if (c === e) break t;
              if (
                (d === n && ++s === l && (a = i),
                d === o && ++f === r && (u = i),
                (E = c.nextSibling) !== null)
              )
                break;
              (c = d), (d = c.parentNode);
            }
            c = E;
          }
          n = a === -1 || u === -1 ? null : { start: a, end: u };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (xa = { focusedElem: e, selectionRange: n }, Lo = !1, j = t; j !== null; )
    if (((t = j), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (j = e);
    else
      for (; j !== null; ) {
        t = j;
        try {
          var w = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (w !== null) {
                  var S = w.memoizedProps,
                    C = w.memoizedState,
                    p = t.stateNode,
                    h = p.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? S : mt(t.type, S),
                      C
                    );
                  p.__reactInternalSnapshotBeforeUpdate = h;
                }
                break;
              case 3:
                var m = t.stateNode.containerInfo;
                m.nodeType === 1
                  ? (m.textContent = '')
                  : m.nodeType === 9 &&
                    m.documentElement &&
                    m.removeChild(m.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(N(163));
            }
        } catch (k) {
          ve(t, t.return, k);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (j = e);
          break;
        }
        j = t.return;
      }
  return (w = kc), (kc = !1), w;
}
function br(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        (l.destroy = void 0), o !== void 0 && Ua(t, n, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function ii(e, t) {
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
function Aa(e) {
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
    typeof t == 'function' ? t(e) : (t.current = e);
  }
}
function rh(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), rh(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Pt], delete t[dl], delete t[Ra], delete t[pv], delete t[mv])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function lh(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function _c(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || lh(e.return)) return null;
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
function $a(e, t, n) {
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
          n != null || t.onclick !== null || (t.onclick = Do));
  else if (r !== 4 && ((e = e.child), e !== null))
    for ($a(e, t, n), e = e.sibling; e !== null; ) $a(e, t, n), (e = e.sibling);
}
function Ba(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ba(e, t, n), e = e.sibling; e !== null; ) Ba(e, t, n), (e = e.sibling);
}
var Ne = null,
  vt = !1;
function Zt(e, t, n) {
  for (n = n.child; n !== null; ) oh(e, t, n), (n = n.sibling);
}
function oh(e, t, n) {
  if (Lt && typeof Lt.onCommitFiberUnmount == 'function')
    try {
      Lt.onCommitFiberUnmount(qo, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Fe || lr(n, t);
    case 6:
      var r = Ne,
        l = vt;
      (Ne = null),
        Zt(e, t, n),
        (Ne = r),
        (vt = l),
        Ne !== null &&
          (vt
            ? ((e = Ne),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Ne.removeChild(n.stateNode));
      break;
    case 18:
      Ne !== null &&
        (vt
          ? ((e = Ne),
            (n = n.stateNode),
            e.nodeType === 8
              ? Ii(e.parentNode, n)
              : e.nodeType === 1 && Ii(e, n),
            al(e))
          : Ii(Ne, n.stateNode));
      break;
    case 4:
      (r = Ne),
        (l = vt),
        (Ne = n.stateNode.containerInfo),
        (vt = !0),
        Zt(e, t, n),
        (Ne = r),
        (vt = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Fe &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var o = l,
            i = o.destroy;
          (o = o.tag),
            i !== void 0 && (o & 2 || o & 4) && Ua(n, t, i),
            (l = l.next);
        } while (l !== r);
      }
      Zt(e, t, n);
      break;
    case 1:
      if (
        !Fe &&
        (lr(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == 'function')
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          ve(n, t, a);
        }
      Zt(e, t, n);
      break;
    case 21:
      Zt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Fe = (r = Fe) || n.memoizedState !== null), Zt(e, t, n), (Fe = r))
        : Zt(e, t, n);
      break;
    default:
      Zt(e, t, n);
  }
}
function Rc(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Dv()),
      t.forEach(function (r) {
        var l = Bv.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function pt(e, t) {
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
              (Ne = a.stateNode), (vt = !1);
              break e;
            case 3:
              (Ne = a.stateNode.containerInfo), (vt = !0);
              break e;
            case 4:
              (Ne = a.stateNode.containerInfo), (vt = !0);
              break e;
          }
          a = a.return;
        }
        if (Ne === null) throw Error(N(160));
        oh(o, i, l), (Ne = null), (vt = !1);
        var u = l.alternate;
        u !== null && (u.return = null), (l.return = null);
      } catch (s) {
        ve(l, t, s);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) ih(t, e), (t = t.sibling);
}
function ih(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((pt(t, e), Rt(e), r & 4)) {
        try {
          br(3, e, e.return), ii(3, e);
        } catch (S) {
          ve(e, e.return, S);
        }
        try {
          br(5, e, e.return);
        } catch (S) {
          ve(e, e.return, S);
        }
      }
      break;
    case 1:
      pt(t, e), Rt(e), r & 512 && n !== null && lr(n, n.return);
      break;
    case 5:
      if (
        (pt(t, e),
        Rt(e),
        r & 512 && n !== null && lr(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          rl(l, '');
        } catch (S) {
          ve(e, e.return, S);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var o = e.memoizedProps,
          i = n !== null ? n.memoizedProps : o,
          a = e.type,
          u = e.updateQueue;
        if (((e.updateQueue = null), u !== null))
          try {
            a === 'input' && o.type === 'radio' && o.name != null && Lf(l, o),
              fa(a, i);
            var s = fa(a, o);
            for (i = 0; i < u.length; i += 2) {
              var f = u[i],
                c = u[i + 1];
              f === 'style'
                ? Mf(l, c)
                : f === 'dangerouslySetInnerHTML'
                  ? Df(l, c)
                  : f === 'children'
                    ? rl(l, c)
                    : iu(l, f, c, s);
            }
            switch (a) {
              case 'input':
                ia(l, o);
                break;
              case 'textarea':
                Tf(l, o);
                break;
              case 'select':
                var d = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var E = o.value;
                E != null
                  ? ar(l, !!o.multiple, E, !1)
                  : d !== !!o.multiple &&
                    (o.defaultValue != null
                      ? ar(l, !!o.multiple, o.defaultValue, !0)
                      : ar(l, !!o.multiple, o.multiple ? [] : '', !1));
            }
            l[dl] = o;
          } catch (S) {
            ve(e, e.return, S);
          }
      }
      break;
    case 6:
      if ((pt(t, e), Rt(e), r & 4)) {
        if (e.stateNode === null) throw Error(N(162));
        (l = e.stateNode), (o = e.memoizedProps);
        try {
          l.nodeValue = o;
        } catch (S) {
          ve(e, e.return, S);
        }
      }
      break;
    case 3:
      if (
        (pt(t, e), Rt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          al(t.containerInfo);
        } catch (S) {
          ve(e, e.return, S);
        }
      break;
    case 4:
      pt(t, e), Rt(e);
      break;
    case 13:
      pt(t, e),
        Rt(e),
        (l = e.child),
        l.flags & 8192 &&
          ((o = l.memoizedState !== null),
          (l.stateNode.isHidden = o),
          !o ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (Au = ye())),
        r & 4 && Rc(e);
      break;
    case 22:
      if (
        ((f = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Fe = (s = Fe) || f), pt(t, e), (Fe = s)) : pt(t, e),
        Rt(e),
        r & 8192)
      ) {
        if (
          ((s = e.memoizedState !== null),
          (e.stateNode.isHidden = s) && !f && e.mode & 1)
        )
          for (j = e, f = e.child; f !== null; ) {
            for (c = j = f; j !== null; ) {
              switch (((d = j), (E = d.child), d.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  br(4, d, d.return);
                  break;
                case 1:
                  lr(d, d.return);
                  var w = d.stateNode;
                  if (typeof w.componentWillUnmount == 'function') {
                    (r = d), (n = d.return);
                    try {
                      (t = r),
                        (w.props = t.memoizedProps),
                        (w.state = t.memoizedState),
                        w.componentWillUnmount();
                    } catch (S) {
                      ve(r, n, S);
                    }
                  }
                  break;
                case 5:
                  lr(d, d.return);
                  break;
                case 22:
                  if (d.memoizedState !== null) {
                    Pc(c);
                    continue;
                  }
              }
              E !== null ? ((E.return = d), (j = E)) : Pc(c);
            }
            f = f.sibling;
          }
        e: for (f = null, c = e; ; ) {
          if (c.tag === 5) {
            if (f === null) {
              f = c;
              try {
                (l = c.stateNode),
                  s
                    ? ((o = l.style),
                      typeof o.setProperty == 'function'
                        ? o.setProperty('display', 'none', 'important')
                        : (o.display = 'none'))
                    : ((a = c.stateNode),
                      (u = c.memoizedProps.style),
                      (i =
                        u != null && u.hasOwnProperty('display')
                          ? u.display
                          : null),
                      (a.style.display = Of('display', i)));
              } catch (S) {
                ve(e, e.return, S);
              }
            }
          } else if (c.tag === 6) {
            if (f === null)
              try {
                c.stateNode.nodeValue = s ? '' : c.memoizedProps;
              } catch (S) {
                ve(e, e.return, S);
              }
          } else if (
            ((c.tag !== 22 && c.tag !== 23) ||
              c.memoizedState === null ||
              c === e) &&
            c.child !== null
          ) {
            (c.child.return = c), (c = c.child);
            continue;
          }
          if (c === e) break e;
          for (; c.sibling === null; ) {
            if (c.return === null || c.return === e) break e;
            f === c && (f = null), (c = c.return);
          }
          f === c && (f = null), (c.sibling.return = c.return), (c = c.sibling);
        }
      }
      break;
    case 19:
      pt(t, e), Rt(e), r & 4 && Rc(e);
      break;
    case 21:
      break;
    default:
      pt(t, e), Rt(e);
  }
}
function Rt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (lh(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(N(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (rl(l, ''), (r.flags &= -33));
          var o = _c(e);
          Ba(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            a = _c(e);
          $a(e, a, i);
          break;
        default:
          throw Error(N(161));
      }
    } catch (u) {
      ve(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Mv(e, t, n) {
  (j = e), ah(e);
}
function ah(e, t, n) {
  for (var r = (e.mode & 1) !== 0; j !== null; ) {
    var l = j,
      o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || bl;
      if (!i) {
        var a = l.alternate,
          u = (a !== null && a.memoizedState !== null) || Fe;
        a = bl;
        var s = Fe;
        if (((bl = i), (Fe = u) && !s))
          for (j = l; j !== null; )
            (i = j),
              (u = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? Lc(l)
                : u !== null
                  ? ((u.return = i), (j = u))
                  : Lc(l);
        for (; o !== null; ) (j = o), ah(o), (o = o.sibling);
        (j = l), (bl = a), (Fe = s);
      }
      Cc(e);
    } else
      l.subtreeFlags & 8772 && o !== null ? ((o.return = l), (j = o)) : Cc(e);
  }
}
function Cc(e) {
  for (; j !== null; ) {
    var t = j;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Fe || ii(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Fe)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : mt(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && cc(t, o, r);
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
                cc(t, i, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var u = t.memoizedProps;
                switch (t.type) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    u.autoFocus && n.focus();
                    break;
                  case 'img':
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
                  var f = s.memoizedState;
                  if (f !== null) {
                    var c = f.dehydrated;
                    c !== null && al(c);
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
              throw Error(N(163));
          }
        Fe || (t.flags & 512 && Aa(t));
      } catch (d) {
        ve(t, t.return, d);
      }
    }
    if (t === e) {
      j = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (j = n);
      break;
    }
    j = t.return;
  }
}
function Pc(e) {
  for (; j !== null; ) {
    var t = j;
    if (t === e) {
      j = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (j = n);
      break;
    }
    j = t.return;
  }
}
function Lc(e) {
  for (; j !== null; ) {
    var t = j;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            ii(4, t);
          } catch (u) {
            ve(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == 'function') {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              ve(t, l, u);
            }
          }
          var o = t.return;
          try {
            Aa(t);
          } catch (u) {
            ve(t, o, u);
          }
          break;
        case 5:
          var i = t.return;
          try {
            Aa(t);
          } catch (u) {
            ve(t, i, u);
          }
      }
    } catch (u) {
      ve(t, t.return, u);
    }
    if (t === e) {
      j = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (j = a);
      break;
    }
    j = t.return;
  }
}
var zv = Math.ceil,
  Ho = Qt.ReactCurrentDispatcher,
  Iu = Qt.ReactCurrentOwner,
  st = Qt.ReactCurrentBatchConfig,
  J = 0,
  Pe = null,
  Ee = null,
  De = 0,
  Ge = 0,
  or = gn(0),
  Re = 0,
  gl = null,
  zn = 0,
  ai = 0,
  Uu = 0,
  el = null,
  We = null,
  Au = 0,
  wr = 1 / 0,
  Ft = null,
  Vo = !1,
  Ha = null,
  fn = null,
  eo = !1,
  ln = null,
  Wo = 0,
  tl = 0,
  Va = null,
  yo = -1,
  go = 0;
function Be() {
  return J & 6 ? ye() : yo !== -1 ? yo : (yo = ye());
}
function dn(e) {
  return e.mode & 1
    ? J & 2 && De !== 0
      ? De & -De
      : yv.transition !== null
        ? (go === 0 && (go = Kf()), go)
        : ((e = b),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : qf(e.type))),
          e)
    : 1;
}
function St(e, t, n, r) {
  if (50 < tl) throw ((tl = 0), (Va = null), Error(N(185)));
  kl(e, n, r),
    (!(J & 2) || e !== Pe) &&
      (e === Pe && (!(J & 2) && (ai |= n), Re === 4 && nn(e, De)),
      Xe(e, r),
      n === 1 && J === 0 && !(t.mode & 1) && ((wr = ye() + 500), ri && wn()));
}
function Xe(e, t) {
  var n = e.callbackNode;
  ym(e, t);
  var r = Po(e, e === Pe ? De : 0);
  if (r === 0)
    n !== null && Is(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Is(n), t === 1))
      e.tag === 0 ? vv(Tc.bind(null, e)) : yd(Tc.bind(null, e)),
        dv(function () {
          !(J & 6) && wn();
        }),
        (n = null);
    else {
      switch (Qf(r)) {
        case 1:
          n = fu;
          break;
        case 4:
          n = Vf;
          break;
        case 16:
          n = Co;
          break;
        case 536870912:
          n = Wf;
          break;
        default:
          n = Co;
      }
      n = mh(n, uh.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function uh(e, t) {
  if (((yo = -1), (go = 0), J & 6)) throw Error(N(327));
  var n = e.callbackNode;
  if (dr() && e.callbackNode !== n) return null;
  var r = Po(e, e === Pe ? De : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Ko(e, r);
  else {
    t = r;
    var l = J;
    J |= 2;
    var o = ch();
    (Pe !== e || De !== t) && ((Ft = null), (wr = ye() + 500), Tn(e, t));
    do
      try {
        Iv();
        break;
      } catch (a) {
        sh(e, a);
      }
    while (!0);
    _u(),
      (Ho.current = o),
      (J = l),
      Ee !== null ? (t = 0) : ((Pe = null), (De = 0), (t = Re));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = va(e)), l !== 0 && ((r = l), (t = Wa(e, l)))), t === 1)
    )
      throw ((n = gl), Tn(e, 0), nn(e, r), Xe(e, ye()), n);
    if (t === 6) nn(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !Fv(l) &&
          ((t = Ko(e, r)),
          t === 2 && ((o = va(e)), o !== 0 && ((r = o), (t = Wa(e, o)))),
          t === 1))
      )
        throw ((n = gl), Tn(e, 0), nn(e, r), Xe(e, ye()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(N(345));
        case 2:
          xn(e, We, Ft);
          break;
        case 3:
          if (
            (nn(e, r), (r & 130023424) === r && ((t = Au + 500 - ye()), 10 < t))
          ) {
            if (Po(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              Be(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = _a(xn.bind(null, e, We, Ft), t);
            break;
          }
          xn(e, We, Ft);
          break;
        case 4:
          if ((nn(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - wt(r);
            (o = 1 << i), (i = t[i]), i > l && (l = i), (r &= ~o);
          }
          if (
            ((r = l),
            (r = ye() - r),
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
                          : 1960 * zv(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = _a(xn.bind(null, e, We, Ft), r);
            break;
          }
          xn(e, We, Ft);
          break;
        case 5:
          xn(e, We, Ft);
          break;
        default:
          throw Error(N(329));
      }
    }
  }
  return Xe(e, ye()), e.callbackNode === n ? uh.bind(null, e) : null;
}
function Wa(e, t) {
  var n = el;
  return (
    e.current.memoizedState.isDehydrated && (Tn(e, t).flags |= 256),
    (e = Ko(e, t)),
    e !== 2 && ((t = We), (We = n), t !== null && Ka(t)),
    e
  );
}
function Ka(e) {
  We === null ? (We = e) : We.push.apply(We, e);
}
function Fv(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            o = l.getSnapshot;
          l = l.value;
          try {
            if (!Et(o(), l)) return !1;
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
function nn(e, t) {
  for (
    t &= ~Uu,
      t &= ~ai,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - wt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Tc(e) {
  if (J & 6) throw Error(N(327));
  dr();
  var t = Po(e, 0);
  if (!(t & 1)) return Xe(e, ye()), null;
  var n = Ko(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = va(e);
    r !== 0 && ((t = r), (n = Wa(e, r)));
  }
  if (n === 1) throw ((n = gl), Tn(e, 0), nn(e, t), Xe(e, ye()), n);
  if (n === 6) throw Error(N(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    xn(e, We, Ft),
    Xe(e, ye()),
    null
  );
}
function $u(e, t) {
  var n = J;
  J |= 1;
  try {
    return e(t);
  } finally {
    (J = n), J === 0 && ((wr = ye() + 500), ri && wn());
  }
}
function Fn(e) {
  ln !== null && ln.tag === 0 && !(J & 6) && dr();
  var t = J;
  J |= 1;
  var n = st.transition,
    r = b;
  try {
    if (((st.transition = null), (b = 1), e)) return e();
  } finally {
    (b = r), (st.transition = n), (J = t), !(J & 6) && wn();
  }
}
function Bu() {
  (Ge = or.current), ae(or);
}
function Tn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), fv(n)), Ee !== null))
    for (n = Ee.return; n !== null; ) {
      var r = n;
      switch ((Eu(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Oo();
          break;
        case 3:
          yr(), ae(Qe), ae(je), Nu();
          break;
        case 5:
          Tu(r);
          break;
        case 4:
          yr();
          break;
        case 13:
          ae(de);
          break;
        case 19:
          ae(de);
          break;
        case 10:
          Ru(r.type._context);
          break;
        case 22:
        case 23:
          Bu();
      }
      n = n.return;
    }
  if (
    ((Pe = e),
    (Ee = e = hn(e.current, null)),
    (De = Ge = t),
    (Re = 0),
    (gl = null),
    (Uu = ai = zn = 0),
    (We = el = null),
    _n !== null)
  ) {
    for (t = 0; t < _n.length; t++)
      if (((n = _n[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          o = n.pending;
        if (o !== null) {
          var i = o.next;
          (o.next = l), (r.next = i);
        }
        n.pending = r;
      }
    _n = null;
  }
  return e;
}
function sh(e, t) {
  do {
    var n = Ee;
    try {
      if ((_u(), (po.current = Bo), $o)) {
        for (var r = he.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        $o = !1;
      }
      if (
        ((Mn = 0),
        (Ce = _e = he = null),
        (qr = !1),
        (ml = 0),
        (Iu.current = null),
        n === null || n.return === null)
      ) {
        (Re = 1), (gl = t), (Ee = null);
        break;
      }
      e: {
        var o = e,
          i = n.return,
          a = n,
          u = t;
        if (
          ((t = De),
          (a.flags |= 32768),
          u !== null && typeof u == 'object' && typeof u.then == 'function')
        ) {
          var s = u,
            f = a,
            c = f.tag;
          if (!(f.mode & 1) && (c === 0 || c === 11 || c === 15)) {
            var d = f.alternate;
            d
              ? ((f.updateQueue = d.updateQueue),
                (f.memoizedState = d.memoizedState),
                (f.lanes = d.lanes))
              : ((f.updateQueue = null), (f.memoizedState = null));
          }
          var E = vc(i);
          if (E !== null) {
            (E.flags &= -257),
              yc(E, i, a, o, t),
              E.mode & 1 && mc(o, s, t),
              (t = E),
              (u = s);
            var w = t.updateQueue;
            if (w === null) {
              var S = new Set();
              S.add(u), (t.updateQueue = S);
            } else w.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              mc(o, s, t), Hu();
              break e;
            }
            u = Error(N(426));
          }
        } else if (fe && a.mode & 1) {
          var C = vc(i);
          if (C !== null) {
            !(C.flags & 65536) && (C.flags |= 256),
              yc(C, i, a, o, t),
              xu(gr(u, a));
            break e;
          }
        }
        (o = u = gr(u, a)),
          Re !== 4 && (Re = 2),
          el === null ? (el = [o]) : el.push(o),
          (o = i);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var p = Qd(o, u, t);
              sc(o, p);
              break e;
            case 1:
              a = u;
              var h = o.type,
                m = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof h.getDerivedStateFromError == 'function' ||
                  (m !== null &&
                    typeof m.componentDidCatch == 'function' &&
                    (fn === null || !fn.has(m))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var k = Yd(o, a, t);
                sc(o, k);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      dh(n);
    } catch (L) {
      (t = L), Ee === n && n !== null && (Ee = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function ch() {
  var e = Ho.current;
  return (Ho.current = Bo), e === null ? Bo : e;
}
function Hu() {
  (Re === 0 || Re === 3 || Re === 2) && (Re = 4),
    Pe === null || (!(zn & 268435455) && !(ai & 268435455)) || nn(Pe, De);
}
function Ko(e, t) {
  var n = J;
  J |= 2;
  var r = ch();
  (Pe !== e || De !== t) && ((Ft = null), Tn(e, t));
  do
    try {
      jv();
      break;
    } catch (l) {
      sh(e, l);
    }
  while (!0);
  if ((_u(), (J = n), (Ho.current = r), Ee !== null)) throw Error(N(261));
  return (Pe = null), (De = 0), Re;
}
function jv() {
  for (; Ee !== null; ) fh(Ee);
}
function Iv() {
  for (; Ee !== null && !um(); ) fh(Ee);
}
function fh(e) {
  var t = ph(e.alternate, e, Ge);
  (e.memoizedProps = e.pendingProps),
    t === null ? dh(e) : (Ee = t),
    (Iu.current = null);
}
function dh(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Nv(n, t)), n !== null)) {
        (n.flags &= 32767), (Ee = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Re = 6), (Ee = null);
        return;
      }
    } else if (((n = Tv(n, t, Ge)), n !== null)) {
      Ee = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Ee = t;
      return;
    }
    Ee = t = e;
  } while (t !== null);
  Re === 0 && (Re = 5);
}
function xn(e, t, n) {
  var r = b,
    l = st.transition;
  try {
    (st.transition = null), (b = 1), Uv(e, t, n, r);
  } finally {
    (st.transition = l), (b = r);
  }
  return null;
}
function Uv(e, t, n, r) {
  do dr();
  while (ln !== null);
  if (J & 6) throw Error(N(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(N(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (gm(e, o),
    e === Pe && ((Ee = Pe = null), (De = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      eo ||
      ((eo = !0),
      mh(Co, function () {
        return dr(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = st.transition), (st.transition = null);
    var i = b;
    b = 1;
    var a = J;
    (J |= 4),
      (Iu.current = null),
      Ov(e, n),
      ih(n, e),
      lv(xa),
      (Lo = !!Ea),
      (xa = Ea = null),
      (e.current = n),
      Mv(n),
      sm(),
      (J = a),
      (b = i),
      (st.transition = o);
  } else e.current = n;
  if (
    (eo && ((eo = !1), (ln = e), (Wo = l)),
    (o = e.pendingLanes),
    o === 0 && (fn = null),
    dm(n.stateNode),
    Xe(e, ye()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (Vo) throw ((Vo = !1), (e = Ha), (Ha = null), e);
  return (
    Wo & 1 && e.tag !== 0 && dr(),
    (o = e.pendingLanes),
    o & 1 ? (e === Va ? tl++ : ((tl = 0), (Va = e))) : (tl = 0),
    wn(),
    null
  );
}
function dr() {
  if (ln !== null) {
    var e = Qf(Wo),
      t = st.transition,
      n = b;
    try {
      if (((st.transition = null), (b = 16 > e ? 16 : e), ln === null))
        var r = !1;
      else {
        if (((e = ln), (ln = null), (Wo = 0), J & 6)) throw Error(N(331));
        var l = J;
        for (J |= 4, j = e.current; j !== null; ) {
          var o = j,
            i = o.child;
          if (j.flags & 16) {
            var a = o.deletions;
            if (a !== null) {
              for (var u = 0; u < a.length; u++) {
                var s = a[u];
                for (j = s; j !== null; ) {
                  var f = j;
                  switch (f.tag) {
                    case 0:
                    case 11:
                    case 15:
                      br(8, f, o);
                  }
                  var c = f.child;
                  if (c !== null) (c.return = f), (j = c);
                  else
                    for (; j !== null; ) {
                      f = j;
                      var d = f.sibling,
                        E = f.return;
                      if ((rh(f), f === s)) {
                        j = null;
                        break;
                      }
                      if (d !== null) {
                        (d.return = E), (j = d);
                        break;
                      }
                      j = E;
                    }
                }
              }
              var w = o.alternate;
              if (w !== null) {
                var S = w.child;
                if (S !== null) {
                  w.child = null;
                  do {
                    var C = S.sibling;
                    (S.sibling = null), (S = C);
                  } while (S !== null);
                }
              }
              j = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) (i.return = o), (j = i);
          else
            e: for (; j !== null; ) {
              if (((o = j), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    br(9, o, o.return);
                }
              var p = o.sibling;
              if (p !== null) {
                (p.return = o.return), (j = p);
                break e;
              }
              j = o.return;
            }
        }
        var h = e.current;
        for (j = h; j !== null; ) {
          i = j;
          var m = i.child;
          if (i.subtreeFlags & 2064 && m !== null) (m.return = i), (j = m);
          else
            e: for (i = h; j !== null; ) {
              if (((a = j), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ii(9, a);
                  }
                } catch (L) {
                  ve(a, a.return, L);
                }
              if (a === i) {
                j = null;
                break e;
              }
              var k = a.sibling;
              if (k !== null) {
                (k.return = a.return), (j = k);
                break e;
              }
              j = a.return;
            }
        }
        if (
          ((J = l), wn(), Lt && typeof Lt.onPostCommitFiberRoot == 'function')
        )
          try {
            Lt.onPostCommitFiberRoot(qo, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (b = n), (st.transition = t);
    }
  }
  return !1;
}
function Nc(e, t, n) {
  (t = gr(n, t)),
    (t = Qd(e, t, 1)),
    (e = cn(e, t, 1)),
    (t = Be()),
    e !== null && (kl(e, 1, t), Xe(e, t));
}
function ve(e, t, n) {
  if (e.tag === 3) Nc(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Nc(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' &&
            (fn === null || !fn.has(r)))
        ) {
          (e = gr(n, e)),
            (e = Yd(t, e, 1)),
            (t = cn(t, e, 1)),
            (e = Be()),
            t !== null && (kl(t, 1, e), Xe(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Av(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Be()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Pe === e &&
      (De & n) === n &&
      (Re === 4 || (Re === 3 && (De & 130023424) === De && 500 > ye() - Au)
        ? Tn(e, 0)
        : (Uu |= n)),
    Xe(e, t);
}
function hh(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Wl), (Wl <<= 1), !(Wl & 130023424) && (Wl = 4194304))
      : (t = 1));
  var n = Be();
  (e = Vt(e, t)), e !== null && (kl(e, t, n), Xe(e, n));
}
function $v(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), hh(e, n);
}
function Bv(e, t) {
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
      throw Error(N(314));
  }
  r !== null && r.delete(t), hh(e, n);
}
var ph;
ph = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Qe.current) Ke = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Ke = !1), Lv(e, t, n);
      Ke = !!(e.flags & 131072);
    }
  else (Ke = !1), fe && t.flags & 1048576 && gd(t, Fo, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      vo(e, t), (e = t.pendingProps);
      var l = pr(t, je.current);
      fr(t, n), (l = Ou(null, t, r, e, l, n));
      var o = Mu();
      return (
        (t.flags |= 1),
        typeof l == 'object' &&
        l !== null &&
        typeof l.render == 'function' &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ye(r) ? ((o = !0), Mo(t)) : (o = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            Pu(t),
            (l.updater = oi),
            (t.stateNode = l),
            (l._reactInternals = t),
            Da(t, r, e, n),
            (t = za(null, t, r, !0, o, n)))
          : ((t.tag = 0), fe && o && Su(t), $e(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (vo(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = Vv(r)),
          (e = mt(r, e)),
          l)
        ) {
          case 0:
            t = Ma(null, t, r, e, n);
            break e;
          case 1:
            t = Sc(null, t, r, e, n);
            break e;
          case 11:
            t = gc(null, t, r, e, n);
            break e;
          case 14:
            t = wc(null, t, r, mt(r.type, e), n);
            break e;
        }
        throw Error(N(306, r, ''));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : mt(r, l)),
        Ma(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : mt(r, l)),
        Sc(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((Zd(t), e === null)) throw Error(N(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (l = o.element),
          _d(e, t),
          Uo(t, r, null, n);
        var i = t.memoizedState;
        if (((r = i.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (l = gr(Error(N(423)), t)), (t = Ec(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = gr(Error(N(424)), t)), (t = Ec(e, t, r, n, l));
            break e;
          } else
            for (
              qe = sn(t.stateNode.containerInfo.firstChild),
                be = t,
                fe = !0,
                gt = null,
                n = xd(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((mr(), r === l)) {
            t = Wt(e, t, n);
            break e;
          }
          $e(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Rd(t),
        e === null && La(t),
        (r = t.type),
        (l = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (i = l.children),
        ka(r, l) ? (i = null) : o !== null && ka(r, o) && (t.flags |= 32),
        Gd(e, t),
        $e(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && La(t), null;
    case 13:
      return qd(e, t, n);
    case 4:
      return (
        Lu(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = vr(t, null, r, n)) : $e(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : mt(r, l)),
        gc(e, t, r, l, n)
      );
    case 7:
      return $e(e, t, t.pendingProps, n), t.child;
    case 8:
      return $e(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return $e(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (o = t.memoizedProps),
          (i = l.value),
          le(jo, r._currentValue),
          (r._currentValue = i),
          o !== null)
        )
          if (Et(o.value, i)) {
            if (o.children === l.children && !Qe.current) {
              t = Wt(e, t, n);
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
                      (u = $t(-1, n & -n)), (u.tag = 2);
                      var s = o.updateQueue;
                      if (s !== null) {
                        s = s.shared;
                        var f = s.pending;
                        f === null
                          ? (u.next = u)
                          : ((u.next = f.next), (f.next = u)),
                          (s.pending = u);
                      }
                    }
                    (o.lanes |= n),
                      (u = o.alternate),
                      u !== null && (u.lanes |= n),
                      Ta(o.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  u = u.next;
                }
              } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((i = o.return), i === null)) throw Error(N(341));
                (i.lanes |= n),
                  (a = i.alternate),
                  a !== null && (a.lanes |= n),
                  Ta(i, n, t),
                  (i = o.sibling);
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
        $e(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        fr(t, n),
        (l = ct(l)),
        (r = r(l)),
        (t.flags |= 1),
        $e(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = mt(r, t.pendingProps)),
        (l = mt(r.type, l)),
        wc(e, t, r, l, n)
      );
    case 15:
      return Xd(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : mt(r, l)),
        vo(e, t),
        (t.tag = 1),
        Ye(r) ? ((e = !0), Mo(t)) : (e = !1),
        fr(t, n),
        Kd(t, r, l),
        Da(t, r, l, n),
        za(null, t, r, !0, e, n)
      );
    case 19:
      return bd(e, t, n);
    case 22:
      return Jd(e, t, n);
  }
  throw Error(N(156, t.tag));
};
function mh(e, t) {
  return Hf(e, t);
}
function Hv(e, t, n, r) {
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
function ut(e, t, n, r) {
  return new Hv(e, t, n, r);
}
function Vu(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Vv(e) {
  if (typeof e == 'function') return Vu(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === uu)) return 11;
    if (e === su) return 14;
  }
  return 2;
}
function hn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = ut(e.tag, t, e.key, e.mode)),
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
function wo(e, t, n, r, l, o) {
  var i = 2;
  if (((r = e), typeof e == 'function')) Vu(e) && (i = 1);
  else if (typeof e == 'string') i = 5;
  else
    e: switch (e) {
      case Jn:
        return Nn(n.children, l, o, t);
      case au:
        (i = 8), (l |= 8);
        break;
      case ta:
        return (
          (e = ut(12, n, t, l | 2)), (e.elementType = ta), (e.lanes = o), e
        );
      case na:
        return (e = ut(13, n, t, l)), (e.elementType = na), (e.lanes = o), e;
      case ra:
        return (e = ut(19, n, t, l)), (e.elementType = ra), (e.lanes = o), e;
      case Rf:
        return ui(n, l, o, t);
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case kf:
              i = 10;
              break e;
            case _f:
              i = 9;
              break e;
            case uu:
              i = 11;
              break e;
            case su:
              i = 14;
              break e;
            case bt:
              (i = 16), (r = null);
              break e;
          }
        throw Error(N(130, e == null ? e : typeof e, ''));
    }
  return (
    (t = ut(i, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function Nn(e, t, n, r) {
  return (e = ut(7, e, r, t)), (e.lanes = n), e;
}
function ui(e, t, n, r) {
  return (
    (e = ut(22, e, r, t)),
    (e.elementType = Rf),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Ki(e, t, n) {
  return (e = ut(6, e, null, t)), (e.lanes = n), e;
}
function Qi(e, t, n) {
  return (
    (t = ut(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Wv(e, t, n, r, l) {
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
    (this.eventTimes = Ci(0)),
    (this.expirationTimes = Ci(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Ci(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function Wu(e, t, n, r, l, o, i, a, u) {
  return (
    (e = new Wv(e, t, n, a, u)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = ut(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Pu(o),
    e
  );
}
function Kv(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Xn,
    key: r == null ? null : '' + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function vh(e) {
  if (!e) return mn;
  e = e._reactInternals;
  e: {
    if ($n(e) !== e || e.tag !== 1) throw Error(N(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ye(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(N(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ye(n)) return vd(e, n, t);
  }
  return t;
}
function yh(e, t, n, r, l, o, i, a, u) {
  return (
    (e = Wu(n, r, !0, e, l, o, i, a, u)),
    (e.context = vh(null)),
    (n = e.current),
    (r = Be()),
    (l = dn(n)),
    (o = $t(r, l)),
    (o.callback = t ?? null),
    cn(n, o, l),
    (e.current.lanes = l),
    kl(e, l, r),
    Xe(e, r),
    e
  );
}
function si(e, t, n, r) {
  var l = t.current,
    o = Be(),
    i = dn(l);
  return (
    (n = vh(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = $t(o, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = cn(l, t, i)),
    e !== null && (St(e, l, i, o), ho(e, l, i)),
    i
  );
}
function Qo(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Dc(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Ku(e, t) {
  Dc(e, t), (e = e.alternate) && Dc(e, t);
}
function Qv() {
  return null;
}
var gh =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e);
      };
function Qu(e) {
  this._internalRoot = e;
}
ci.prototype.render = Qu.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(N(409));
  si(e, t, null, null);
};
ci.prototype.unmount = Qu.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Fn(function () {
      si(null, e, null, null);
    }),
      (t[Ht] = null);
  }
};
function ci(e) {
  this._internalRoot = e;
}
ci.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Jf();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < tn.length && t !== 0 && t < tn[n].priority; n++);
    tn.splice(n, 0, e), n === 0 && Zf(e);
  }
};
function Yu(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function fi(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  );
}
function Oc() {}
function Yv(e, t, n, r, l) {
  if (l) {
    if (typeof r == 'function') {
      var o = r;
      r = function () {
        var s = Qo(i);
        o.call(s);
      };
    }
    var i = yh(t, r, e, 0, null, !1, !1, '', Oc);
    return (
      (e._reactRootContainer = i),
      (e[Ht] = i.current),
      cl(e.nodeType === 8 ? e.parentNode : e),
      Fn(),
      i
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == 'function') {
    var a = r;
    r = function () {
      var s = Qo(u);
      a.call(s);
    };
  }
  var u = Wu(e, 0, !1, null, null, !1, !1, '', Oc);
  return (
    (e._reactRootContainer = u),
    (e[Ht] = u.current),
    cl(e.nodeType === 8 ? e.parentNode : e),
    Fn(function () {
      si(t, u, n, r);
    }),
    u
  );
}
function di(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == 'function') {
      var a = l;
      l = function () {
        var u = Qo(i);
        a.call(u);
      };
    }
    si(t, i, e, l);
  } else i = Yv(n, t, e, l, r);
  return Qo(i);
}
Yf = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Wr(t.pendingLanes);
        n !== 0 &&
          (du(t, n | 1), Xe(t, ye()), !(J & 6) && ((wr = ye() + 500), wn()));
      }
      break;
    case 13:
      Fn(function () {
        var r = Vt(e, 1);
        if (r !== null) {
          var l = Be();
          St(r, e, 1, l);
        }
      }),
        Ku(e, 1);
  }
};
hu = function (e) {
  if (e.tag === 13) {
    var t = Vt(e, 134217728);
    if (t !== null) {
      var n = Be();
      St(t, e, 134217728, n);
    }
    Ku(e, 134217728);
  }
};
Xf = function (e) {
  if (e.tag === 13) {
    var t = dn(e),
      n = Vt(e, t);
    if (n !== null) {
      var r = Be();
      St(n, e, t, r);
    }
    Ku(e, t);
  }
};
Jf = function () {
  return b;
};
Gf = function (e, t) {
  var n = b;
  try {
    return (b = e), t();
  } finally {
    b = n;
  }
};
ha = function (e, t, n) {
  switch (t) {
    case 'input':
      if ((ia(e, n), (t = n.name), n.type === 'radio' && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            'input[name=' + JSON.stringify('' + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = ni(r);
            if (!l) throw Error(N(90));
            Pf(r), ia(r, l);
          }
        }
      }
      break;
    case 'textarea':
      Tf(e, n);
      break;
    case 'select':
      (t = n.value), t != null && ar(e, !!n.multiple, t, !1);
  }
};
jf = $u;
If = Fn;
var Xv = { usingClientEntryPoint: !1, Events: [Rl, bn, ni, zf, Ff, $u] },
  Ir = {
    findFiberByHostInstance: kn,
    bundleType: 0,
    version: '18.3.1',
    rendererPackageName: 'react-dom',
  },
  Jv = {
    bundleType: Ir.bundleType,
    version: Ir.version,
    rendererPackageName: Ir.rendererPackageName,
    rendererConfig: Ir.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Qt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = $f(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Ir.findFiberByHostInstance || Qv,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.3.1-next-f1338f8080-20240426',
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var to = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!to.isDisabled && to.supportsFiber)
    try {
      (qo = to.inject(Jv)), (Lt = to);
    } catch {}
}
tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Xv;
tt.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Yu(t)) throw Error(N(200));
  return Kv(e, t, null, n);
};
tt.createRoot = function (e, t) {
  if (!Yu(e)) throw Error(N(299));
  var n = !1,
    r = '',
    l = gh;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = Wu(e, 1, !1, null, null, n, !1, r, l)),
    (e[Ht] = t.current),
    cl(e.nodeType === 8 ? e.parentNode : e),
    new Qu(t)
  );
};
tt.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == 'function'
      ? Error(N(188))
      : ((e = Object.keys(e).join(',')), Error(N(268, e)));
  return (e = $f(t)), (e = e === null ? null : e.stateNode), e;
};
tt.flushSync = function (e) {
  return Fn(e);
};
tt.hydrate = function (e, t, n) {
  if (!fi(t)) throw Error(N(200));
  return di(null, e, t, !0, n);
};
tt.hydrateRoot = function (e, t, n) {
  if (!Yu(e)) throw Error(N(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    o = '',
    i = gh;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = yh(t, null, e, 1, n ?? null, l, !1, o, i)),
    (e[Ht] = t.current),
    cl(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new ci(t);
};
tt.render = function (e, t, n) {
  if (!fi(t)) throw Error(N(200));
  return di(null, e, t, !1, n);
};
tt.unmountComponentAtNode = function (e) {
  if (!fi(e)) throw Error(N(40));
  return e._reactRootContainer
    ? (Fn(function () {
        di(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Ht] = null);
        });
      }),
      !0)
    : !1;
};
tt.unstable_batchedUpdates = $u;
tt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!fi(n)) throw Error(N(200));
  if (e == null || e._reactInternals === void 0) throw Error(N(38));
  return di(e, t, n, !1, r);
};
tt.version = '18.3.1-next-f1338f8080-20240426';
function wh() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(wh);
    } catch (e) {
      console.error(e);
    }
}
wh(), (wf.exports = tt);
var Sh = wf.exports;
const Gv = af(Sh),
  Zv = of({ __proto__: null, default: Gv }, [Sh]);
/**
 * @remix-run/router v1.19.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ce() {
  return (
    (ce = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ce.apply(this, arguments)
  );
}
var Se;
(function (e) {
  (e.Pop = 'POP'), (e.Push = 'PUSH'), (e.Replace = 'REPLACE');
})(Se || (Se = {}));
const Mc = 'popstate';
function f1(e) {
  e === void 0 && (e = {});
  function t(r, l) {
    let { pathname: o, search: i, hash: a } = r.location;
    return wl(
      '',
      { pathname: o, search: i, hash: a },
      (l.state && l.state.usr) || null,
      (l.state && l.state.key) || 'default'
    );
  }
  function n(r, l) {
    return typeof l == 'string' ? l : vn(l);
  }
  return bv(t, n, null, e);
}
function W(e, t) {
  if (e === !1 || e === null || typeof e > 'u') throw new Error(t);
}
function Sr(e, t) {
  if (!e) {
    typeof console < 'u' && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function qv() {
  return Math.random().toString(36).substr(2, 8);
}
function zc(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function wl(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    ce(
      { pathname: typeof e == 'string' ? e : e.pathname, search: '', hash: '' },
      typeof t == 'string' ? Yt(t) : t,
      { state: n, key: (t && t.key) || r || qv() }
    )
  );
}
function vn(e) {
  let { pathname: t = '/', search: n = '', hash: r = '' } = e;
  return (
    n && n !== '?' && (t += n.charAt(0) === '?' ? n : '?' + n),
    r && r !== '#' && (t += r.charAt(0) === '#' ? r : '#' + r),
    t
  );
}
function Yt(e) {
  let t = {};
  if (e) {
    let n = e.indexOf('#');
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf('?');
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function bv(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: l = document.defaultView, v5Compat: o = !1 } = r,
    i = l.history,
    a = Se.Pop,
    u = null,
    s = f();
  s == null && ((s = 0), i.replaceState(ce({}, i.state, { idx: s }), ''));
  function f() {
    return (i.state || { idx: null }).idx;
  }
  function c() {
    a = Se.Pop;
    let C = f(),
      p = C == null ? null : C - s;
    (s = C), u && u({ action: a, location: S.location, delta: p });
  }
  function d(C, p) {
    a = Se.Push;
    let h = wl(S.location, C, p);
    s = f() + 1;
    let m = zc(h, s),
      k = S.createHref(h);
    try {
      i.pushState(m, '', k);
    } catch (L) {
      if (L instanceof DOMException && L.name === 'DataCloneError') throw L;
      l.location.assign(k);
    }
    o && u && u({ action: a, location: S.location, delta: 1 });
  }
  function E(C, p) {
    a = Se.Replace;
    let h = wl(S.location, C, p);
    s = f();
    let m = zc(h, s),
      k = S.createHref(h);
    i.replaceState(m, '', k),
      o && u && u({ action: a, location: S.location, delta: 0 });
  }
  function w(C) {
    let p = l.location.origin !== 'null' ? l.location.origin : l.location.href,
      h = typeof C == 'string' ? C : vn(C);
    return (
      (h = h.replace(/ $/, '%20')),
      W(
        p,
        'No window.location.(origin|href) available to create URL for href: ' +
          h
      ),
      new URL(h, p)
    );
  }
  let S = {
    get action() {
      return a;
    },
    get location() {
      return e(l, i);
    },
    listen(C) {
      if (u) throw new Error('A history only accepts one active listener');
      return (
        l.addEventListener(Mc, c),
        (u = C),
        () => {
          l.removeEventListener(Mc, c), (u = null);
        }
      );
    },
    createHref(C) {
      return t(l, C);
    },
    createURL: w,
    encodeLocation(C) {
      let p = w(C);
      return { pathname: p.pathname, search: p.search, hash: p.hash };
    },
    push: d,
    replace: E,
    go(C) {
      return i.go(C);
    },
  };
  return S;
}
var ne;
(function (e) {
  (e.data = 'data'),
    (e.deferred = 'deferred'),
    (e.redirect = 'redirect'),
    (e.error = 'error');
})(ne || (ne = {}));
const ey = new Set([
  'lazy',
  'caseSensitive',
  'path',
  'id',
  'index',
  'children',
]);
function ty(e) {
  return e.index === !0;
}
function Sl(e, t, n, r) {
  return (
    n === void 0 && (n = []),
    r === void 0 && (r = {}),
    e.map((l, o) => {
      let i = [...n, String(o)],
        a = typeof l.id == 'string' ? l.id : i.join('-');
      if (
        (W(
          l.index !== !0 || !l.children,
          'Cannot specify children on an index route'
        ),
        W(
          !r[a],
          'Found a route id collision on id "' +
            a +
            `".  Route id's must be globally unique within Data Router usages`
        ),
        ty(l))
      ) {
        let u = ce({}, l, t(l), { id: a });
        return (r[a] = u), u;
      } else {
        let u = ce({}, l, t(l), { id: a, children: void 0 });
        return (
          (r[a] = u), l.children && (u.children = Sl(l.children, t, i, r)), u
        );
      }
    })
  );
}
function It(e, t, n) {
  return n === void 0 && (n = '/'), So(e, t, n, !1);
}
function So(e, t, n, r) {
  let l = typeof t == 'string' ? Yt(t) : t,
    o = dt(l.pathname || '/', n);
  if (o == null) return null;
  let i = xh(e);
  ny(i);
  let a = null;
  for (let u = 0; a == null && u < i.length; ++u) {
    let s = hy(o);
    a = fy(i[u], s, r);
  }
  return a;
}
function Eh(e, t) {
  let { route: n, pathname: r, params: l } = e;
  return { id: n.id, pathname: r, params: l, data: t[n.id], handle: n.handle };
}
function xh(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = '');
  let l = (o, i, a) => {
    let u = {
      relativePath: a === void 0 ? o.path || '' : a,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: i,
      route: o,
    };
    u.relativePath.startsWith('/') &&
      (W(
        u.relativePath.startsWith(r),
        'Absolute route path "' +
          u.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          'must start with the combined path of all its parent routes.'
      ),
      (u.relativePath = u.relativePath.slice(r.length)));
    let s = Nt([r, u.relativePath]),
      f = n.concat(u);
    o.children &&
      o.children.length > 0 &&
      (W(
        o.index !== !0,
        'Index routes must not have child routes. Please remove ' +
          ('all child routes from route path "' + s + '".')
      ),
      xh(o.children, t, f, s)),
      !(o.path == null && !o.index) &&
        t.push({ path: s, score: sy(s, o.index), routesMeta: f });
  };
  return (
    e.forEach((o, i) => {
      var a;
      if (o.path === '' || !((a = o.path) != null && a.includes('?'))) l(o, i);
      else for (let u of kh(o.path)) l(o, i, u);
    }),
    t
  );
}
function kh(e) {
  let t = e.split('/');
  if (t.length === 0) return [];
  let [n, ...r] = t,
    l = n.endsWith('?'),
    o = n.replace(/\?$/, '');
  if (r.length === 0) return l ? [o, ''] : [o];
  let i = kh(r.join('/')),
    a = [];
  return (
    a.push(...i.map((u) => (u === '' ? o : [o, u].join('/')))),
    l && a.push(...i),
    a.map((u) => (e.startsWith('/') && u === '' ? '/' : u))
  );
}
function ny(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : cy(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const ry = /^:[\w-]+$/,
  ly = 3,
  oy = 2,
  iy = 1,
  ay = 10,
  uy = -2,
  Fc = (e) => e === '*';
function sy(e, t) {
  let n = e.split('/'),
    r = n.length;
  return (
    n.some(Fc) && (r += uy),
    t && (r += oy),
    n
      .filter((l) => !Fc(l))
      .reduce((l, o) => l + (ry.test(o) ? ly : o === '' ? iy : ay), r)
  );
}
function cy(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, l) => r === t[l])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function fy(e, t, n) {
  n === void 0 && (n = !1);
  let { routesMeta: r } = e,
    l = {},
    o = '/',
    i = [];
  for (let a = 0; a < r.length; ++a) {
    let u = r[a],
      s = a === r.length - 1,
      f = o === '/' ? t : t.slice(o.length) || '/',
      c = Yo(
        { path: u.relativePath, caseSensitive: u.caseSensitive, end: s },
        f
      ),
      d = u.route;
    if (
      (!c &&
        s &&
        n &&
        !r[r.length - 1].route.index &&
        (c = Yo(
          { path: u.relativePath, caseSensitive: u.caseSensitive, end: !1 },
          f
        )),
      !c)
    )
      return null;
    Object.assign(l, c.params),
      i.push({
        params: l,
        pathname: Nt([o, c.pathname]),
        pathnameBase: vy(Nt([o, c.pathnameBase])),
        route: d,
      }),
      c.pathnameBase !== '/' && (o = Nt([o, c.pathnameBase]));
  }
  return i;
}
function Yo(e, t) {
  typeof e == 'string' && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = dy(e.path, e.caseSensitive, e.end),
    l = t.match(n);
  if (!l) return null;
  let o = l[0],
    i = o.replace(/(.)\/+$/, '$1'),
    a = l.slice(1);
  return {
    params: r.reduce((s, f, c) => {
      let { paramName: d, isOptional: E } = f;
      if (d === '*') {
        let S = a[c] || '';
        i = o.slice(0, o.length - S.length).replace(/(.)\/+$/, '$1');
      }
      const w = a[c];
      return (
        E && !w ? (s[d] = void 0) : (s[d] = (w || '').replace(/%2F/g, '/')), s
      );
    }, {}),
    pathname: o,
    pathnameBase: i,
    pattern: e,
  };
}
function dy(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Sr(
      e === '*' || !e.endsWith('*') || e.endsWith('/*'),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, '/*') + '" because the `*` character must ') +
        'always follow a `/` in the pattern. To get rid of this warning, ' +
        ('please change the route path to "' + e.replace(/\*$/, '/*') + '".')
    );
  let r = [],
    l =
      '^' +
      e
        .replace(/\/*\*?$/, '')
        .replace(/^\/*/, '/')
        .replace(/[\\.*+^${}|()[\]]/g, '\\$&')
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (i, a, u) => (
            r.push({ paramName: a, isOptional: u != null }),
            u ? '/?([^\\/]+)?' : '/([^\\/]+)'
          )
        );
  return (
    e.endsWith('*')
      ? (r.push({ paramName: '*' }),
        (l += e === '*' || e === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
      : n
        ? (l += '\\/*$')
        : e !== '' && e !== '/' && (l += '(?:(?=\\/|$))'),
    [new RegExp(l, t ? void 0 : 'i'), r]
  );
}
function hy(e) {
  try {
    return e
      .split('/')
      .map((t) => decodeURIComponent(t).replace(/\//g, '%2F'))
      .join('/');
  } catch (t) {
    return (
      Sr(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ('encoding (' + t + ').')
      ),
      e
    );
  }
}
function dt(e, t) {
  if (t === '/') return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith('/') ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== '/' ? null : e.slice(n) || '/';
}
function py(e, t) {
  t === void 0 && (t = '/');
  let {
    pathname: n,
    search: r = '',
    hash: l = '',
  } = typeof e == 'string' ? Yt(e) : e;
  return {
    pathname: n ? (n.startsWith('/') ? n : my(n, t)) : t,
    search: yy(r),
    hash: gy(l),
  };
}
function my(e, t) {
  let n = t.replace(/\/+$/, '').split('/');
  return (
    e.split('/').forEach((l) => {
      l === '..' ? n.length > 1 && n.pop() : l !== '.' && n.push(l);
    }),
    n.length > 1 ? n.join('/') : '/'
  );
}
function Yi(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ('`to.' +
      t +
      '` field [' +
      JSON.stringify(r) +
      '].  Please separate it out to the ') +
    ('`to.' + n + '` field. Alternatively you may provide the full path as ') +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function _h(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function Xu(e, t) {
  let n = _h(e);
  return t
    ? n.map((r, l) => (l === n.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function Ju(e, t, n, r) {
  r === void 0 && (r = !1);
  let l;
  typeof e == 'string'
    ? (l = Yt(e))
    : ((l = ce({}, e)),
      W(
        !l.pathname || !l.pathname.includes('?'),
        Yi('?', 'pathname', 'search', l)
      ),
      W(
        !l.pathname || !l.pathname.includes('#'),
        Yi('#', 'pathname', 'hash', l)
      ),
      W(!l.search || !l.search.includes('#'), Yi('#', 'search', 'hash', l)));
  let o = e === '' || l.pathname === '',
    i = o ? '/' : l.pathname,
    a;
  if (i == null) a = n;
  else {
    let c = t.length - 1;
    if (!r && i.startsWith('..')) {
      let d = i.split('/');
      for (; d[0] === '..'; ) d.shift(), (c -= 1);
      l.pathname = d.join('/');
    }
    a = c >= 0 ? t[c] : '/';
  }
  let u = py(l, a),
    s = i && i !== '/' && i.endsWith('/'),
    f = (o || i === '.') && n.endsWith('/');
  return !u.pathname.endsWith('/') && (s || f) && (u.pathname += '/'), u;
}
const Nt = (e) => e.join('/').replace(/\/\/+/g, '/'),
  vy = (e) => e.replace(/\/+$/, '').replace(/^\/*/, '/'),
  yy = (e) => (!e || e === '?' ? '' : e.startsWith('?') ? e : '?' + e),
  gy = (e) => (!e || e === '#' ? '' : e.startsWith('#') ? e : '#' + e);
class wy {
  constructor(t, n) {
    (this.type = 'DataWithResponseInit'),
      (this.data = t),
      (this.init = n || null);
  }
}
function Sy(e, t) {
  return new wy(e, typeof t == 'number' ? { status: t } : t);
}
class Xo extends Error {}
class Ey {
  constructor(t, n) {
    (this.pendingKeysSet = new Set()),
      (this.subscribers = new Set()),
      (this.deferredKeys = []),
      W(
        t && typeof t == 'object' && !Array.isArray(t),
        'defer() only accepts plain objects'
      );
    let r;
    (this.abortPromise = new Promise((o, i) => (r = i))),
      (this.controller = new AbortController());
    let l = () => r(new Xo('Deferred data aborted'));
    (this.unlistenAbortSignal = () =>
      this.controller.signal.removeEventListener('abort', l)),
      this.controller.signal.addEventListener('abort', l),
      (this.data = Object.entries(t).reduce((o, i) => {
        let [a, u] = i;
        return Object.assign(o, { [a]: this.trackPromise(a, u) });
      }, {})),
      this.done && this.unlistenAbortSignal(),
      (this.init = n);
  }
  trackPromise(t, n) {
    if (!(n instanceof Promise)) return n;
    this.deferredKeys.push(t), this.pendingKeysSet.add(t);
    let r = Promise.race([n, this.abortPromise]).then(
      (l) => this.onSettle(r, t, void 0, l),
      (l) => this.onSettle(r, t, l)
    );
    return (
      r.catch(() => {}),
      Object.defineProperty(r, '_tracked', { get: () => !0 }),
      r
    );
  }
  onSettle(t, n, r, l) {
    if (this.controller.signal.aborted && r instanceof Xo)
      return (
        this.unlistenAbortSignal(),
        Object.defineProperty(t, '_error', { get: () => r }),
        Promise.reject(r)
      );
    if (
      (this.pendingKeysSet.delete(n),
      this.done && this.unlistenAbortSignal(),
      r === void 0 && l === void 0)
    ) {
      let o = new Error(
        'Deferred data for key "' +
          n +
          '" resolved/rejected with `undefined`, you must resolve/reject with a value or `null`.'
      );
      return (
        Object.defineProperty(t, '_error', { get: () => o }),
        this.emit(!1, n),
        Promise.reject(o)
      );
    }
    return l === void 0
      ? (Object.defineProperty(t, '_error', { get: () => r }),
        this.emit(!1, n),
        Promise.reject(r))
      : (Object.defineProperty(t, '_data', { get: () => l }),
        this.emit(!1, n),
        l);
  }
  emit(t, n) {
    this.subscribers.forEach((r) => r(t, n));
  }
  subscribe(t) {
    return this.subscribers.add(t), () => this.subscribers.delete(t);
  }
  cancel() {
    this.controller.abort(),
      this.pendingKeysSet.forEach((t, n) => this.pendingKeysSet.delete(n)),
      this.emit(!0);
  }
  async resolveData(t) {
    let n = !1;
    if (!this.done) {
      let r = () => this.cancel();
      t.addEventListener('abort', r),
        (n = await new Promise((l) => {
          this.subscribe((o) => {
            t.removeEventListener('abort', r), (o || this.done) && l(o);
          });
        }));
    }
    return n;
  }
  get done() {
    return this.pendingKeysSet.size === 0;
  }
  get unwrappedData() {
    return (
      W(
        this.data !== null && this.done,
        'Can only unwrap data on initialized and settled deferreds'
      ),
      Object.entries(this.data).reduce((t, n) => {
        let [r, l] = n;
        return Object.assign(t, { [r]: ky(l) });
      }, {})
    );
  }
  get pendingKeys() {
    return Array.from(this.pendingKeysSet);
  }
}
function xy(e) {
  return e instanceof Promise && e._tracked === !0;
}
function ky(e) {
  if (!xy(e)) return e;
  if (e._error) throw e._error;
  return e._data;
}
const Rh = function (t, n) {
  n === void 0 && (n = 302);
  let r = n;
  typeof r == 'number'
    ? (r = { status: r })
    : typeof r.status > 'u' && (r.status = 302);
  let l = new Headers(r.headers);
  return l.set('Location', t), new Response(null, ce({}, r, { headers: l }));
};
class jn {
  constructor(t, n, r, l) {
    l === void 0 && (l = !1),
      (this.status = t),
      (this.statusText = n || ''),
      (this.internal = l),
      r instanceof Error
        ? ((this.data = r.toString()), (this.error = r))
        : (this.data = r);
  }
}
function _r(e) {
  return (
    e != null &&
    typeof e.status == 'number' &&
    typeof e.statusText == 'string' &&
    typeof e.internal == 'boolean' &&
    'data' in e
  );
}
const Ch = ['post', 'put', 'patch', 'delete'],
  _y = new Set(Ch),
  Ry = ['get', ...Ch],
  Cy = new Set(Ry),
  Py = new Set([301, 302, 303, 307, 308]),
  Ly = new Set([307, 308]),
  Xi = {
    state: 'idle',
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  Ty = {
    state: 'idle',
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  Ur = { state: 'unblocked', proceed: void 0, reset: void 0, location: void 0 },
  Gu = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Ny = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary }),
  Ph = 'remix-router-transitions';
function d1(e) {
  const t = e.window ? e.window : typeof window < 'u' ? window : void 0,
    n =
      typeof t < 'u' &&
      typeof t.document < 'u' &&
      typeof t.document.createElement < 'u',
    r = !n;
  W(
    e.routes.length > 0,
    'You must provide a non-empty routes array to createRouter'
  );
  let l;
  if (e.mapRouteProperties) l = e.mapRouteProperties;
  else if (e.detectErrorBoundary) {
    let g = e.detectErrorBoundary;
    l = (x) => ({ hasErrorBoundary: g(x) });
  } else l = Ny;
  let o = {},
    i = Sl(e.routes, l, void 0, o),
    a,
    u = e.basename || '/',
    s = e.unstable_dataStrategy || Fy,
    f = e.unstable_patchRoutesOnMiss,
    c = ce(
      {
        v7_fetcherPersist: !1,
        v7_normalizeFormMethod: !1,
        v7_partialHydration: !1,
        v7_prependBasename: !1,
        v7_relativeSplatPath: !1,
        v7_skipActionErrorRevalidation: !1,
      },
      e.future
    ),
    d = null,
    E = new Set(),
    w = null,
    S = null,
    C = null,
    p = e.hydrationData != null,
    h = It(i, e.history.location, u),
    m = null;
  if (h == null && !f) {
    let g = Ae(404, { pathname: e.history.location.pathname }),
      { matches: x, route: _ } = Kc(i);
    (h = x), (m = { [_.id]: g });
  }
  h &&
    !e.hydrationData &&
    Ml(h, i, e.history.location.pathname).active &&
    (h = null);
  let k;
  if (h)
    if (h.some((g) => g.route.lazy)) k = !1;
    else if (!h.some((g) => g.route.loader)) k = !0;
    else if (c.v7_partialHydration) {
      let g = e.hydrationData ? e.hydrationData.loaderData : null,
        x = e.hydrationData ? e.hydrationData.errors : null,
        _ = (R) =>
          R.route.loader
            ? typeof R.route.loader == 'function' &&
              R.route.loader.hydrate === !0
              ? !1
              : (g && g[R.route.id] !== void 0) ||
                (x && x[R.route.id] !== void 0)
            : !0;
      if (x) {
        let R = h.findIndex((F) => x[F.route.id] !== void 0);
        k = h.slice(0, R + 1).every(_);
      } else k = h.every(_);
    } else k = e.hydrationData != null;
  else if (((k = !1), (h = []), c.v7_partialHydration)) {
    let g = Ml(null, i, e.history.location.pathname);
    g.active && g.matches && (h = g.matches);
  }
  let L,
    y = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: h,
      initialized: k,
      navigation: Xi,
      restoreScrollPosition: e.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: 'idle',
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || m,
      fetchers: new Map(),
      blockers: new Map(),
    },
    T = Se.Pop,
    P = !1,
    O,
    M = !1,
    V = new Map(),
    X = null,
    ge = !1,
    ee = !1,
    ke = [],
    rt = new Set(),
    ue = new Map(),
    z = 0,
    B = -1,
    H = new Map(),
    G = new Set(),
    oe = new Map(),
    kt = new Map(),
    Le = new Set(),
    ht = new Map(),
    Ie = new Map(),
    Bn = new Map(),
    yi = !1;
  function lp() {
    if (
      ((d = e.history.listen((g) => {
        let { action: x, location: _, delta: R } = g;
        if (yi) {
          yi = !1;
          return;
        }
        Sr(
          Ie.size === 0 || R != null,
          'You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.'
        );
        let F = Es({
          currentLocation: y.location,
          nextLocation: _,
          historyAction: x,
        });
        if (F && R != null) {
          (yi = !0),
            e.history.go(R * -1),
            Dl(F, {
              state: 'blocked',
              location: _,
              proceed() {
                Dl(F, {
                  state: 'proceeding',
                  proceed: void 0,
                  reset: void 0,
                  location: _,
                }),
                  e.history.go(R);
              },
              reset() {
                let I = new Map(y.blockers);
                I.set(F, Ur), Ue({ blockers: I });
              },
            });
          return;
        }
        return Sn(x, _);
      })),
      n)
    ) {
      Xy(t, V);
      let g = () => Jy(t, V);
      t.addEventListener('pagehide', g),
        (X = () => t.removeEventListener('pagehide', g));
    }
    return y.initialized || Sn(Se.Pop, y.location, { initialHydration: !0 }), L;
  }
  function op() {
    d && d(),
      X && X(),
      E.clear(),
      O && O.abort(),
      y.fetchers.forEach((g, x) => Nl(x)),
      y.blockers.forEach((g, x) => Ss(x));
  }
  function ip(g) {
    return E.add(g), () => E.delete(g);
  }
  function Ue(g, x) {
    x === void 0 && (x = {}), (y = ce({}, y, g));
    let _ = [],
      R = [];
    c.v7_fetcherPersist &&
      y.fetchers.forEach((F, I) => {
        F.state === 'idle' && (Le.has(I) ? R.push(I) : _.push(I));
      }),
      [...E].forEach((F) =>
        F(y, {
          deletedFetchers: R,
          unstable_viewTransitionOpts: x.viewTransitionOpts,
          unstable_flushSync: x.flushSync === !0,
        })
      ),
      c.v7_fetcherPersist &&
        (_.forEach((F) => y.fetchers.delete(F)), R.forEach((F) => Nl(F)));
  }
  function Hn(g, x, _) {
    var R, F;
    let { flushSync: I } = _ === void 0 ? {} : _,
      $ =
        y.actionData != null &&
        y.navigation.formMethod != null &&
        yt(y.navigation.formMethod) &&
        y.navigation.state === 'loading' &&
        ((R = g.state) == null ? void 0 : R._isRedirect) !== !0,
      D;
    x.actionData
      ? Object.keys(x.actionData).length > 0
        ? (D = x.actionData)
        : (D = null)
      : $
        ? (D = y.actionData)
        : (D = null);
    let K = x.loaderData
        ? Vc(y.loaderData, x.loaderData, x.matches || [], x.errors)
        : y.loaderData,
      U = y.blockers;
    U.size > 0 && ((U = new Map(U)), U.forEach((q, re) => U.set(re, Ur)));
    let A =
      P === !0 ||
      (y.navigation.formMethod != null &&
        yt(y.navigation.formMethod) &&
        ((F = g.state) == null ? void 0 : F._isRedirect) !== !0);
    a && ((i = a), (a = void 0)),
      ge ||
        T === Se.Pop ||
        (T === Se.Push
          ? e.history.push(g, g.state)
          : T === Se.Replace && e.history.replace(g, g.state));
    let te;
    if (T === Se.Pop) {
      let q = V.get(y.location.pathname);
      q && q.has(g.pathname)
        ? (te = { currentLocation: y.location, nextLocation: g })
        : V.has(g.pathname) &&
          (te = { currentLocation: g, nextLocation: y.location });
    } else if (M) {
      let q = V.get(y.location.pathname);
      q
        ? q.add(g.pathname)
        : ((q = new Set([g.pathname])), V.set(y.location.pathname, q)),
        (te = { currentLocation: y.location, nextLocation: g });
    }
    Ue(
      ce({}, x, {
        actionData: D,
        loaderData: K,
        historyAction: T,
        location: g,
        initialized: !0,
        navigation: Xi,
        revalidation: 'idle',
        restoreScrollPosition: ks(g, x.matches || y.matches),
        preventScrollReset: A,
        blockers: U,
      }),
      { viewTransitionOpts: te, flushSync: I === !0 }
    ),
      (T = Se.Pop),
      (P = !1),
      (M = !1),
      (ge = !1),
      (ee = !1),
      (ke = []);
  }
  async function hs(g, x) {
    if (typeof g == 'number') {
      e.history.go(g);
      return;
    }
    let _ = Qa(
        y.location,
        y.matches,
        u,
        c.v7_prependBasename,
        g,
        c.v7_relativeSplatPath,
        x == null ? void 0 : x.fromRouteId,
        x == null ? void 0 : x.relative
      ),
      {
        path: R,
        submission: F,
        error: I,
      } = jc(c.v7_normalizeFormMethod, !1, _, x),
      $ = y.location,
      D = wl(y.location, R, x && x.state);
    D = ce({}, D, e.history.encodeLocation(D));
    let K = x && x.replace != null ? x.replace : void 0,
      U = Se.Push;
    K === !0
      ? (U = Se.Replace)
      : K === !1 ||
        (F != null &&
          yt(F.formMethod) &&
          F.formAction === y.location.pathname + y.location.search &&
          (U = Se.Replace));
    let A =
        x && 'preventScrollReset' in x ? x.preventScrollReset === !0 : void 0,
      te = (x && x.unstable_flushSync) === !0,
      q = Es({ currentLocation: $, nextLocation: D, historyAction: U });
    if (q) {
      Dl(q, {
        state: 'blocked',
        location: D,
        proceed() {
          Dl(q, {
            state: 'proceeding',
            proceed: void 0,
            reset: void 0,
            location: D,
          }),
            hs(g, x);
        },
        reset() {
          let re = new Map(y.blockers);
          re.set(q, Ur), Ue({ blockers: re });
        },
      });
      return;
    }
    return await Sn(U, D, {
      submission: F,
      pendingError: I,
      preventScrollReset: A,
      replace: x && x.replace,
      enableViewTransition: x && x.unstable_viewTransition,
      flushSync: te,
    });
  }
  function ap() {
    if (
      (gi(),
      Ue({ revalidation: 'loading' }),
      y.navigation.state !== 'submitting')
    ) {
      if (y.navigation.state === 'idle') {
        Sn(y.historyAction, y.location, { startUninterruptedRevalidation: !0 });
        return;
      }
      Sn(T || y.historyAction, y.navigation.location, {
        overrideNavigation: y.navigation,
      });
    }
  }
  async function Sn(g, x, _) {
    O && O.abort(),
      (O = null),
      (T = g),
      (ge = (_ && _.startUninterruptedRevalidation) === !0),
      yp(y.location, y.matches),
      (P = (_ && _.preventScrollReset) === !0),
      (M = (_ && _.enableViewTransition) === !0);
    let R = a || i,
      F = _ && _.overrideNavigation,
      I = It(R, x, u),
      $ = (_ && _.flushSync) === !0,
      D = Ml(I, R, x.pathname);
    if ((D.active && D.matches && (I = D.matches), !I)) {
      let { error: Z, notFoundMatches: Te, route: we } = wi(x.pathname);
      Hn(
        x,
        { matches: Te, loaderData: {}, errors: { [we.id]: Z } },
        { flushSync: $ }
      );
      return;
    }
    if (
      y.initialized &&
      !ee &&
      By(y.location, x) &&
      !(_ && _.submission && yt(_.submission.formMethod))
    ) {
      Hn(x, { matches: I }, { flushSync: $ });
      return;
    }
    O = new AbortController();
    let K = Yn(e.history, x, O.signal, _ && _.submission),
      U;
    if (_ && _.pendingError)
      U = [ir(I).route.id, { type: ne.error, error: _.pendingError }];
    else if (_ && _.submission && yt(_.submission.formMethod)) {
      let Z = await up(K, x, _.submission, I, D.active, {
        replace: _.replace,
        flushSync: $,
      });
      if (Z.shortCircuited) return;
      if (Z.pendingActionResult) {
        let [Te, we] = Z.pendingActionResult;
        if (Ze(we) && _r(we.error) && we.error.status === 404) {
          (O = null),
            Hn(x, {
              matches: Z.matches,
              loaderData: {},
              errors: { [Te]: we.error },
            });
          return;
        }
      }
      (I = Z.matches || I),
        (U = Z.pendingActionResult),
        (F = Ji(x, _.submission)),
        ($ = !1),
        (D.active = !1),
        (K = Yn(e.history, K.url, K.signal));
    }
    let {
      shortCircuited: A,
      matches: te,
      loaderData: q,
      errors: re,
    } = await sp(
      K,
      x,
      I,
      D.active,
      F,
      _ && _.submission,
      _ && _.fetcherSubmission,
      _ && _.replace,
      _ && _.initialHydration === !0,
      $,
      U
    );
    A ||
      ((O = null),
      Hn(x, ce({ matches: te || I }, Wc(U), { loaderData: q, errors: re })));
  }
  async function up(g, x, _, R, F, I) {
    I === void 0 && (I = {}), gi();
    let $ = Qy(x, _);
    if ((Ue({ navigation: $ }, { flushSync: I.flushSync === !0 }), F)) {
      let U = await zl(R, x.pathname, g.signal);
      if (U.type === 'aborted') return { shortCircuited: !0 };
      if (U.type === 'error') {
        let { boundaryId: A, error: te } = Ol(x.pathname, U);
        return {
          matches: U.partialMatches,
          pendingActionResult: [A, { type: ne.error, error: te }],
        };
      } else if (U.matches) R = U.matches;
      else {
        let { notFoundMatches: A, error: te, route: q } = wi(x.pathname);
        return {
          matches: A,
          pendingActionResult: [q.id, { type: ne.error, error: te }],
        };
      }
    }
    let D,
      K = Qr(R, x);
    if (!K.route.action && !K.route.lazy)
      D = {
        type: ne.error,
        error: Ae(405, {
          method: g.method,
          pathname: x.pathname,
          routeId: K.route.id,
        }),
      };
    else if (((D = (await Lr('action', g, [K], R))[0]), g.signal.aborted))
      return { shortCircuited: !0 };
    if (Pn(D)) {
      let U;
      return (
        I && I.replace != null
          ? (U = I.replace)
          : (U =
              $c(D.response.headers.get('Location'), new URL(g.url), u) ===
              y.location.pathname + y.location.search),
        await Pr(g, D, { submission: _, replace: U }),
        { shortCircuited: !0 }
      );
    }
    if (Cn(D)) throw Ae(400, { type: 'defer-action' });
    if (Ze(D)) {
      let U = ir(R, K.route.id);
      return (
        (I && I.replace) !== !0 && (T = Se.Push),
        { matches: R, pendingActionResult: [U.route.id, D] }
      );
    }
    return { matches: R, pendingActionResult: [K.route.id, D] };
  }
  async function sp(g, x, _, R, F, I, $, D, K, U, A) {
    let te = F || Ji(x, I),
      q = I || $ || Jc(te),
      re = !ge && (!c.v7_partialHydration || !K);
    if (R) {
      if (re) {
        let me = ps(A);
        Ue(ce({ navigation: te }, me !== void 0 ? { actionData: me } : {}), {
          flushSync: U,
        });
      }
      let Q = await zl(_, x.pathname, g.signal);
      if (Q.type === 'aborted') return { shortCircuited: !0 };
      if (Q.type === 'error') {
        let { boundaryId: me, error: Je } = Ol(x.pathname, Q);
        return {
          matches: Q.partialMatches,
          loaderData: {},
          errors: { [me]: Je },
        };
      } else if (Q.matches) _ = Q.matches;
      else {
        let { error: me, notFoundMatches: Je, route: se } = wi(x.pathname);
        return { matches: Je, loaderData: {}, errors: { [se.id]: me } };
      }
    }
    let Z = a || i,
      [Te, we] = Ic(
        e.history,
        y,
        _,
        q,
        x,
        c.v7_partialHydration && K === !0,
        c.v7_skipActionErrorRevalidation,
        ee,
        ke,
        rt,
        Le,
        oe,
        G,
        Z,
        u,
        A
      );
    if (
      (Si(
        (Q) =>
          !(_ && _.some((me) => me.route.id === Q)) ||
          (Te && Te.some((me) => me.route.id === Q))
      ),
      (B = ++z),
      Te.length === 0 && we.length === 0)
    ) {
      let Q = gs();
      return (
        Hn(
          x,
          ce(
            {
              matches: _,
              loaderData: {},
              errors: A && Ze(A[1]) ? { [A[0]]: A[1].error } : null,
            },
            Wc(A),
            Q ? { fetchers: new Map(y.fetchers) } : {}
          ),
          { flushSync: U }
        ),
        { shortCircuited: !0 }
      );
    }
    if (re) {
      let Q = {};
      if (!R) {
        Q.navigation = te;
        let me = ps(A);
        me !== void 0 && (Q.actionData = me);
      }
      we.length > 0 && (Q.fetchers = cp(we)), Ue(Q, { flushSync: U });
    }
    we.forEach((Q) => {
      ue.has(Q.key) && Jt(Q.key), Q.controller && ue.set(Q.key, Q.controller);
    });
    let Tr = () => we.forEach((Q) => Jt(Q.key));
    O && O.signal.addEventListener('abort', Tr);
    let { loaderResults: Gt, fetcherResults: Vn } = await ms(
      y.matches,
      _,
      Te,
      we,
      g
    );
    if (g.signal.aborted) return { shortCircuited: !0 };
    O && O.signal.removeEventListener('abort', Tr),
      we.forEach((Q) => ue.delete(Q.key));
    let Wn = Qc([...Gt, ...Vn]);
    if (Wn) {
      if (Wn.idx >= Te.length) {
        let Q = we[Wn.idx - Te.length].key;
        G.add(Q);
      }
      return await Pr(g, Wn.result, { replace: D }), { shortCircuited: !0 };
    }
    let { loaderData: Kn, errors: _t } = Hc(y, _, Te, Gt, A, we, Vn, ht);
    ht.forEach((Q, me) => {
      Q.subscribe((Je) => {
        (Je || Q.done) && ht.delete(me);
      });
    }),
      c.v7_partialHydration &&
        K &&
        y.errors &&
        Object.entries(y.errors)
          .filter((Q) => {
            let [me] = Q;
            return !Te.some((Je) => Je.route.id === me);
          })
          .forEach((Q) => {
            let [me, Je] = Q;
            _t = Object.assign(_t || {}, { [me]: Je });
          });
    let Fl = gs(),
      jl = ws(B),
      Il = Fl || jl || we.length > 0;
    return ce(
      { matches: _, loaderData: Kn, errors: _t },
      Il ? { fetchers: new Map(y.fetchers) } : {}
    );
  }
  function ps(g) {
    if (g && !Ze(g[1])) return { [g[0]]: g[1].data };
    if (y.actionData)
      return Object.keys(y.actionData).length === 0 ? null : y.actionData;
  }
  function cp(g) {
    return (
      g.forEach((x) => {
        let _ = y.fetchers.get(x.key),
          R = Ar(void 0, _ ? _.data : void 0);
        y.fetchers.set(x.key, R);
      }),
      new Map(y.fetchers)
    );
  }
  function fp(g, x, _, R) {
    if (r)
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback."
      );
    ue.has(g) && Jt(g);
    let F = (R && R.unstable_flushSync) === !0,
      I = a || i,
      $ = Qa(
        y.location,
        y.matches,
        u,
        c.v7_prependBasename,
        _,
        c.v7_relativeSplatPath,
        x,
        R == null ? void 0 : R.relative
      ),
      D = It(I, $, u),
      K = Ml(D, I, $);
    if ((K.active && K.matches && (D = K.matches), !D)) {
      Mt(g, x, Ae(404, { pathname: $ }), { flushSync: F });
      return;
    }
    let {
      path: U,
      submission: A,
      error: te,
    } = jc(c.v7_normalizeFormMethod, !0, $, R);
    if (te) {
      Mt(g, x, te, { flushSync: F });
      return;
    }
    let q = Qr(D, U);
    if (((P = (R && R.preventScrollReset) === !0), A && yt(A.formMethod))) {
      dp(g, x, U, q, D, K.active, F, A);
      return;
    }
    oe.set(g, { routeId: x, path: U }), hp(g, x, U, q, D, K.active, F, A);
  }
  async function dp(g, x, _, R, F, I, $, D) {
    gi(), oe.delete(g);
    function K(se) {
      if (!se.route.action && !se.route.lazy) {
        let zt = Ae(405, { method: D.formMethod, pathname: _, routeId: x });
        return Mt(g, x, zt, { flushSync: $ }), !0;
      }
      return !1;
    }
    if (!I && K(R)) return;
    let U = y.fetchers.get(g);
    Xt(g, Yy(D, U), { flushSync: $ });
    let A = new AbortController(),
      te = Yn(e.history, _, A.signal, D);
    if (I) {
      let se = await zl(F, _, te.signal);
      if (se.type === 'aborted') return;
      if (se.type === 'error') {
        let { error: zt } = Ol(_, se);
        Mt(g, x, zt, { flushSync: $ });
        return;
      } else if (se.matches) {
        if (((F = se.matches), (R = Qr(F, _)), K(R))) return;
      } else {
        Mt(g, x, Ae(404, { pathname: _ }), { flushSync: $ });
        return;
      }
    }
    ue.set(g, A);
    let q = z,
      Z = (await Lr('action', te, [R], F))[0];
    if (te.signal.aborted) {
      ue.get(g) === A && ue.delete(g);
      return;
    }
    if (c.v7_fetcherPersist && Le.has(g)) {
      if (Pn(Z) || Ze(Z)) {
        Xt(g, qt(void 0));
        return;
      }
    } else {
      if (Pn(Z))
        if ((ue.delete(g), B > q)) {
          Xt(g, qt(void 0));
          return;
        } else
          return G.add(g), Xt(g, Ar(D)), Pr(te, Z, { fetcherSubmission: D });
      if (Ze(Z)) {
        Mt(g, x, Z.error);
        return;
      }
    }
    if (Cn(Z)) throw Ae(400, { type: 'defer-action' });
    let Te = y.navigation.location || y.location,
      we = Yn(e.history, Te, A.signal),
      Tr = a || i,
      Gt =
        y.navigation.state !== 'idle'
          ? It(Tr, y.navigation.location, u)
          : y.matches;
    W(Gt, "Didn't find any matches after fetcher action");
    let Vn = ++z;
    H.set(g, Vn);
    let Wn = Ar(D, Z.data);
    y.fetchers.set(g, Wn);
    let [Kn, _t] = Ic(
      e.history,
      y,
      Gt,
      D,
      Te,
      !1,
      c.v7_skipActionErrorRevalidation,
      ee,
      ke,
      rt,
      Le,
      oe,
      G,
      Tr,
      u,
      [R.route.id, Z]
    );
    _t
      .filter((se) => se.key !== g)
      .forEach((se) => {
        let zt = se.key,
          _s = y.fetchers.get(zt),
          Sp = Ar(void 0, _s ? _s.data : void 0);
        y.fetchers.set(zt, Sp),
          ue.has(zt) && Jt(zt),
          se.controller && ue.set(zt, se.controller);
      }),
      Ue({ fetchers: new Map(y.fetchers) });
    let Fl = () => _t.forEach((se) => Jt(se.key));
    A.signal.addEventListener('abort', Fl);
    let { loaderResults: jl, fetcherResults: Il } = await ms(
      y.matches,
      Gt,
      Kn,
      _t,
      we
    );
    if (A.signal.aborted) return;
    A.signal.removeEventListener('abort', Fl),
      H.delete(g),
      ue.delete(g),
      _t.forEach((se) => ue.delete(se.key));
    let Q = Qc([...jl, ...Il]);
    if (Q) {
      if (Q.idx >= Kn.length) {
        let se = _t[Q.idx - Kn.length].key;
        G.add(se);
      }
      return Pr(we, Q.result);
    }
    let { loaderData: me, errors: Je } = Hc(
      y,
      y.matches,
      Kn,
      jl,
      void 0,
      _t,
      Il,
      ht
    );
    if (y.fetchers.has(g)) {
      let se = qt(Z.data);
      y.fetchers.set(g, se);
    }
    ws(Vn),
      y.navigation.state === 'loading' && Vn > B
        ? (W(T, 'Expected pending action'),
          O && O.abort(),
          Hn(y.navigation.location, {
            matches: Gt,
            loaderData: me,
            errors: Je,
            fetchers: new Map(y.fetchers),
          }))
        : (Ue({
            errors: Je,
            loaderData: Vc(y.loaderData, me, Gt, Je),
            fetchers: new Map(y.fetchers),
          }),
          (ee = !1));
  }
  async function hp(g, x, _, R, F, I, $, D) {
    let K = y.fetchers.get(g);
    Xt(g, Ar(D, K ? K.data : void 0), { flushSync: $ });
    let U = new AbortController(),
      A = Yn(e.history, _, U.signal);
    if (I) {
      let Z = await zl(F, _, A.signal);
      if (Z.type === 'aborted') return;
      if (Z.type === 'error') {
        let { error: Te } = Ol(_, Z);
        Mt(g, x, Te, { flushSync: $ });
        return;
      } else if (Z.matches) (F = Z.matches), (R = Qr(F, _));
      else {
        Mt(g, x, Ae(404, { pathname: _ }), { flushSync: $ });
        return;
      }
    }
    ue.set(g, U);
    let te = z,
      re = (await Lr('loader', A, [R], F))[0];
    if (
      (Cn(re) && (re = (await Oh(re, A.signal, !0)) || re),
      ue.get(g) === U && ue.delete(g),
      !A.signal.aborted)
    ) {
      if (Le.has(g)) {
        Xt(g, qt(void 0));
        return;
      }
      if (Pn(re))
        if (B > te) {
          Xt(g, qt(void 0));
          return;
        } else {
          G.add(g), await Pr(A, re);
          return;
        }
      if (Ze(re)) {
        Mt(g, x, re.error);
        return;
      }
      W(!Cn(re), 'Unhandled fetcher deferred data'), Xt(g, qt(re.data));
    }
  }
  async function Pr(g, x, _) {
    let {
      submission: R,
      fetcherSubmission: F,
      replace: I,
    } = _ === void 0 ? {} : _;
    x.response.headers.has('X-Remix-Revalidate') && (ee = !0);
    let $ = x.response.headers.get('Location');
    W($, 'Expected a Location header on the redirect Response'),
      ($ = $c($, new URL(g.url), u));
    let D = wl(y.location, $, { _isRedirect: !0 });
    if (n) {
      let re = !1;
      if (x.response.headers.has('X-Remix-Reload-Document')) re = !0;
      else if (Gu.test($)) {
        const Z = e.history.createURL($);
        re = Z.origin !== t.location.origin || dt(Z.pathname, u) == null;
      }
      if (re) {
        I ? t.location.replace($) : t.location.assign($);
        return;
      }
    }
    O = null;
    let K =
        I === !0 || x.response.headers.has('X-Remix-Replace')
          ? Se.Replace
          : Se.Push,
      { formMethod: U, formAction: A, formEncType: te } = y.navigation;
    !R && !F && U && A && te && (R = Jc(y.navigation));
    let q = R || F;
    if (Ly.has(x.response.status) && q && yt(q.formMethod))
      await Sn(K, D, {
        submission: ce({}, q, { formAction: $ }),
        preventScrollReset: P,
      });
    else {
      let re = Ji(D, R);
      await Sn(K, D, {
        overrideNavigation: re,
        fetcherSubmission: F,
        preventScrollReset: P,
      });
    }
  }
  async function Lr(g, x, _, R) {
    try {
      let F = await jy(s, g, x, _, R, o, l);
      return await Promise.all(
        F.map((I, $) => {
          if (Vy(I)) {
            let D = I.result;
            return {
              type: ne.redirect,
              response: Ay(D, x, _[$].route.id, R, u, c.v7_relativeSplatPath),
            };
          }
          return Uy(I);
        })
      );
    } catch (F) {
      return _.map(() => ({ type: ne.error, error: F }));
    }
  }
  async function ms(g, x, _, R, F) {
    let [I, ...$] = await Promise.all([
      _.length ? Lr('loader', F, _, x) : [],
      ...R.map((D) => {
        if (D.matches && D.match && D.controller) {
          let K = Yn(e.history, D.path, D.controller.signal);
          return Lr('loader', K, [D.match], D.matches).then((U) => U[0]);
        } else
          return Promise.resolve({
            type: ne.error,
            error: Ae(404, { pathname: D.path }),
          });
      }),
    ]);
    return (
      await Promise.all([
        Xc(
          g,
          _,
          I,
          I.map(() => F.signal),
          !1,
          y.loaderData
        ),
        Xc(
          g,
          R.map((D) => D.match),
          $,
          R.map((D) => (D.controller ? D.controller.signal : null)),
          !0
        ),
      ]),
      { loaderResults: I, fetcherResults: $ }
    );
  }
  function gi() {
    (ee = !0),
      ke.push(...Si()),
      oe.forEach((g, x) => {
        ue.has(x) && (rt.add(x), Jt(x));
      });
  }
  function Xt(g, x, _) {
    _ === void 0 && (_ = {}),
      y.fetchers.set(g, x),
      Ue(
        { fetchers: new Map(y.fetchers) },
        { flushSync: (_ && _.flushSync) === !0 }
      );
  }
  function Mt(g, x, _, R) {
    R === void 0 && (R = {});
    let F = ir(y.matches, x);
    Nl(g),
      Ue(
        { errors: { [F.route.id]: _ }, fetchers: new Map(y.fetchers) },
        { flushSync: (R && R.flushSync) === !0 }
      );
  }
  function vs(g) {
    return (
      c.v7_fetcherPersist &&
        (kt.set(g, (kt.get(g) || 0) + 1), Le.has(g) && Le.delete(g)),
      y.fetchers.get(g) || Ty
    );
  }
  function Nl(g) {
    let x = y.fetchers.get(g);
    ue.has(g) && !(x && x.state === 'loading' && H.has(g)) && Jt(g),
      oe.delete(g),
      H.delete(g),
      G.delete(g),
      Le.delete(g),
      rt.delete(g),
      y.fetchers.delete(g);
  }
  function pp(g) {
    if (c.v7_fetcherPersist) {
      let x = (kt.get(g) || 0) - 1;
      x <= 0 ? (kt.delete(g), Le.add(g)) : kt.set(g, x);
    } else Nl(g);
    Ue({ fetchers: new Map(y.fetchers) });
  }
  function Jt(g) {
    let x = ue.get(g);
    W(x, 'Expected fetch controller: ' + g), x.abort(), ue.delete(g);
  }
  function ys(g) {
    for (let x of g) {
      let _ = vs(x),
        R = qt(_.data);
      y.fetchers.set(x, R);
    }
  }
  function gs() {
    let g = [],
      x = !1;
    for (let _ of G) {
      let R = y.fetchers.get(_);
      W(R, 'Expected fetcher: ' + _),
        R.state === 'loading' && (G.delete(_), g.push(_), (x = !0));
    }
    return ys(g), x;
  }
  function ws(g) {
    let x = [];
    for (let [_, R] of H)
      if (R < g) {
        let F = y.fetchers.get(_);
        W(F, 'Expected fetcher: ' + _),
          F.state === 'loading' && (Jt(_), H.delete(_), x.push(_));
      }
    return ys(x), x.length > 0;
  }
  function mp(g, x) {
    let _ = y.blockers.get(g) || Ur;
    return Ie.get(g) !== x && Ie.set(g, x), _;
  }
  function Ss(g) {
    y.blockers.delete(g), Ie.delete(g);
  }
  function Dl(g, x) {
    let _ = y.blockers.get(g) || Ur;
    W(
      (_.state === 'unblocked' && x.state === 'blocked') ||
        (_.state === 'blocked' && x.state === 'blocked') ||
        (_.state === 'blocked' && x.state === 'proceeding') ||
        (_.state === 'blocked' && x.state === 'unblocked') ||
        (_.state === 'proceeding' && x.state === 'unblocked'),
      'Invalid blocker state transition: ' + _.state + ' -> ' + x.state
    );
    let R = new Map(y.blockers);
    R.set(g, x), Ue({ blockers: R });
  }
  function Es(g) {
    let { currentLocation: x, nextLocation: _, historyAction: R } = g;
    if (Ie.size === 0) return;
    Ie.size > 1 && Sr(!1, 'A router only supports one blocker at a time');
    let F = Array.from(Ie.entries()),
      [I, $] = F[F.length - 1],
      D = y.blockers.get(I);
    if (
      !(D && D.state === 'proceeding') &&
      $({ currentLocation: x, nextLocation: _, historyAction: R })
    )
      return I;
  }
  function wi(g) {
    let x = Ae(404, { pathname: g }),
      _ = a || i,
      { matches: R, route: F } = Kc(_);
    return Si(), { notFoundMatches: R, route: F, error: x };
  }
  function Ol(g, x) {
    return {
      boundaryId: ir(x.partialMatches).route.id,
      error: Ae(400, {
        type: 'route-discovery',
        pathname: g,
        message:
          x.error != null && 'message' in x.error ? x.error : String(x.error),
      }),
    };
  }
  function Si(g) {
    let x = [];
    return (
      ht.forEach((_, R) => {
        (!g || g(R)) && (_.cancel(), x.push(R), ht.delete(R));
      }),
      x
    );
  }
  function vp(g, x, _) {
    if (((w = g), (C = x), (S = _ || null), !p && y.navigation === Xi)) {
      p = !0;
      let R = ks(y.location, y.matches);
      R != null && Ue({ restoreScrollPosition: R });
    }
    return () => {
      (w = null), (C = null), (S = null);
    };
  }
  function xs(g, x) {
    return (
      (S &&
        S(
          g,
          x.map((R) => Eh(R, y.loaderData))
        )) ||
      g.key
    );
  }
  function yp(g, x) {
    if (w && C) {
      let _ = xs(g, x);
      w[_] = C();
    }
  }
  function ks(g, x) {
    if (w) {
      let _ = xs(g, x),
        R = w[_];
      if (typeof R == 'number') return R;
    }
    return null;
  }
  function Ml(g, x, _) {
    if (f)
      if (g) {
        let R = g[g.length - 1].route;
        if (R.path && (R.path === '*' || R.path.endsWith('/*')))
          return { active: !0, matches: So(x, _, u, !0) };
      } else return { active: !0, matches: So(x, _, u, !0) || [] };
    return { active: !1, matches: null };
  }
  async function zl(g, x, _) {
    let R = g,
      F = R.length > 0 ? R[R.length - 1].route : null;
    for (;;) {
      let I = a == null,
        $ = a || i;
      try {
        await zy(f, x, R, $, o, l, Bn, _);
      } catch (A) {
        return { type: 'error', error: A, partialMatches: R };
      } finally {
        I && (i = [...i]);
      }
      if (_.aborted) return { type: 'aborted' };
      let D = It($, x, u),
        K = !1;
      if (D) {
        let A = D[D.length - 1].route;
        if (A.index) return { type: 'success', matches: D };
        if (A.path && A.path.length > 0)
          if (A.path === '*') K = !0;
          else return { type: 'success', matches: D };
      }
      let U = So($, x, u, !0);
      if (
        !U ||
        R.map((A) => A.route.id).join('-') ===
          U.map((A) => A.route.id).join('-')
      )
        return { type: 'success', matches: K ? D : null };
      if (((R = U), (F = R[R.length - 1].route), F.path === '*'))
        return { type: 'success', matches: R };
    }
  }
  function gp(g) {
    (o = {}), (a = Sl(g, l, void 0, o));
  }
  function wp(g, x) {
    let _ = a == null;
    Th(g, x, a || i, o, l), _ && ((i = [...i]), Ue({}));
  }
  return (
    (L = {
      get basename() {
        return u;
      },
      get future() {
        return c;
      },
      get state() {
        return y;
      },
      get routes() {
        return i;
      },
      get window() {
        return t;
      },
      initialize: lp,
      subscribe: ip,
      enableScrollRestoration: vp,
      navigate: hs,
      fetch: fp,
      revalidate: ap,
      createHref: (g) => e.history.createHref(g),
      encodeLocation: (g) => e.history.encodeLocation(g),
      getFetcher: vs,
      deleteFetcher: pp,
      dispose: op,
      getBlocker: mp,
      deleteBlocker: Ss,
      patchRoutes: wp,
      _internalFetchControllers: ue,
      _internalActiveDeferreds: ht,
      _internalSetRoutes: gp,
    }),
    L
  );
}
function Dy(e) {
  return (
    e != null &&
    (('formData' in e && e.formData != null) ||
      ('body' in e && e.body !== void 0))
  );
}
function Qa(e, t, n, r, l, o, i, a) {
  let u, s;
  if (i) {
    u = [];
    for (let c of t)
      if ((u.push(c), c.route.id === i)) {
        s = c;
        break;
      }
  } else (u = t), (s = t[t.length - 1]);
  let f = Ju(l || '.', Xu(u, o), dt(e.pathname, n) || e.pathname, a === 'path');
  return (
    l == null && ((f.search = e.search), (f.hash = e.hash)),
    (l == null || l === '' || l === '.') &&
      s &&
      s.route.index &&
      !Zu(f.search) &&
      (f.search = f.search ? f.search.replace(/^\?/, '?index&') : '?index'),
    r &&
      n !== '/' &&
      (f.pathname = f.pathname === '/' ? n : Nt([n, f.pathname])),
    vn(f)
  );
}
function jc(e, t, n, r) {
  if (!r || !Dy(r)) return { path: n };
  if (r.formMethod && !Ky(r.formMethod))
    return { path: n, error: Ae(405, { method: r.formMethod }) };
  let l = () => ({ path: n, error: Ae(400, { type: 'invalid-body' }) }),
    o = r.formMethod || 'get',
    i = e ? o.toUpperCase() : o.toLowerCase(),
    a = Nh(n);
  if (r.body !== void 0) {
    if (r.formEncType === 'text/plain') {
      if (!yt(i)) return l();
      let d =
        typeof r.body == 'string'
          ? r.body
          : r.body instanceof FormData || r.body instanceof URLSearchParams
            ? Array.from(r.body.entries()).reduce((E, w) => {
                let [S, C] = w;
                return (
                  '' +
                  E +
                  S +
                  '=' +
                  C +
                  `
`
                );
              }, '')
            : String(r.body);
      return {
        path: n,
        submission: {
          formMethod: i,
          formAction: a,
          formEncType: r.formEncType,
          formData: void 0,
          json: void 0,
          text: d,
        },
      };
    } else if (r.formEncType === 'application/json') {
      if (!yt(i)) return l();
      try {
        let d = typeof r.body == 'string' ? JSON.parse(r.body) : r.body;
        return {
          path: n,
          submission: {
            formMethod: i,
            formAction: a,
            formEncType: r.formEncType,
            formData: void 0,
            json: d,
            text: void 0,
          },
        };
      } catch {
        return l();
      }
    }
  }
  W(
    typeof FormData == 'function',
    'FormData is not available in this environment'
  );
  let u, s;
  if (r.formData) (u = Ya(r.formData)), (s = r.formData);
  else if (r.body instanceof FormData) (u = Ya(r.body)), (s = r.body);
  else if (r.body instanceof URLSearchParams) (u = r.body), (s = Bc(u));
  else if (r.body == null) (u = new URLSearchParams()), (s = new FormData());
  else
    try {
      (u = new URLSearchParams(r.body)), (s = Bc(u));
    } catch {
      return l();
    }
  let f = {
    formMethod: i,
    formAction: a,
    formEncType: (r && r.formEncType) || 'application/x-www-form-urlencoded',
    formData: s,
    json: void 0,
    text: void 0,
  };
  if (yt(f.formMethod)) return { path: n, submission: f };
  let c = Yt(n);
  return (
    t && c.search && Zu(c.search) && u.append('index', ''),
    (c.search = '?' + u),
    { path: vn(c), submission: f }
  );
}
function Oy(e, t) {
  let n = e;
  if (t) {
    let r = e.findIndex((l) => l.route.id === t);
    r >= 0 && (n = e.slice(0, r));
  }
  return n;
}
function Ic(e, t, n, r, l, o, i, a, u, s, f, c, d, E, w, S) {
  let C = S ? (Ze(S[1]) ? S[1].error : S[1].data) : void 0,
    p = e.createURL(t.location),
    h = e.createURL(l),
    m = S && Ze(S[1]) ? S[0] : void 0,
    k = m ? Oy(n, m) : n,
    L = S ? S[1].statusCode : void 0,
    y = i && L && L >= 400,
    T = k.filter((O, M) => {
      let { route: V } = O;
      if (V.lazy) return !0;
      if (V.loader == null) return !1;
      if (o)
        return typeof V.loader != 'function' || V.loader.hydrate
          ? !0
          : t.loaderData[V.id] === void 0 &&
              (!t.errors || t.errors[V.id] === void 0);
      if (
        My(t.loaderData, t.matches[M], O) ||
        u.some((ee) => ee === O.route.id)
      )
        return !0;
      let X = t.matches[M],
        ge = O;
      return Uc(
        O,
        ce(
          {
            currentUrl: p,
            currentParams: X.params,
            nextUrl: h,
            nextParams: ge.params,
          },
          r,
          {
            actionResult: C,
            actionStatus: L,
            defaultShouldRevalidate: y
              ? !1
              : a ||
                p.pathname + p.search === h.pathname + h.search ||
                p.search !== h.search ||
                Lh(X, ge),
          }
        )
      );
    }),
    P = [];
  return (
    c.forEach((O, M) => {
      if (o || !n.some((ke) => ke.route.id === O.routeId) || f.has(M)) return;
      let V = It(E, O.path, w);
      if (!V) {
        P.push({
          key: M,
          routeId: O.routeId,
          path: O.path,
          matches: null,
          match: null,
          controller: null,
        });
        return;
      }
      let X = t.fetchers.get(M),
        ge = Qr(V, O.path),
        ee = !1;
      d.has(M)
        ? (ee = !1)
        : s.has(M)
          ? (s.delete(M), (ee = !0))
          : X && X.state !== 'idle' && X.data === void 0
            ? (ee = a)
            : (ee = Uc(
                ge,
                ce(
                  {
                    currentUrl: p,
                    currentParams: t.matches[t.matches.length - 1].params,
                    nextUrl: h,
                    nextParams: n[n.length - 1].params,
                  },
                  r,
                  {
                    actionResult: C,
                    actionStatus: L,
                    defaultShouldRevalidate: y ? !1 : a,
                  }
                )
              )),
        ee &&
          P.push({
            key: M,
            routeId: O.routeId,
            path: O.path,
            matches: V,
            match: ge,
            controller: new AbortController(),
          });
    }),
    [T, P]
  );
}
function My(e, t, n) {
  let r = !t || n.route.id !== t.route.id,
    l = e[n.route.id] === void 0;
  return r || l;
}
function Lh(e, t) {
  let n = e.route.path;
  return (
    e.pathname !== t.pathname ||
    (n != null && n.endsWith('*') && e.params['*'] !== t.params['*'])
  );
}
function Uc(e, t) {
  if (e.route.shouldRevalidate) {
    let n = e.route.shouldRevalidate(t);
    if (typeof n == 'boolean') return n;
  }
  return t.defaultShouldRevalidate;
}
async function zy(e, t, n, r, l, o, i, a) {
  let u = [t, ...n.map((s) => s.route.id)].join('-');
  try {
    let s = i.get(u);
    s ||
      ((s = e({
        path: t,
        matches: n,
        patch: (f, c) => {
          a.aborted || Th(f, c, r, l, o);
        },
      })),
      i.set(u, s)),
      s && Hy(s) && (await s);
  } finally {
    i.delete(u);
  }
}
function Th(e, t, n, r, l) {
  if (e) {
    var o;
    let i = r[e];
    W(i, 'No route found to patch children into: routeId = ' + e);
    let a = Sl(
      t,
      l,
      [
        e,
        'patch',
        String(((o = i.children) == null ? void 0 : o.length) || '0'),
      ],
      r
    );
    i.children ? i.children.push(...a) : (i.children = a);
  } else {
    let i = Sl(t, l, ['patch', String(n.length || '0')], r);
    n.push(...i);
  }
}
async function Ac(e, t, n) {
  if (!e.lazy) return;
  let r = await e.lazy();
  if (!e.lazy) return;
  let l = n[e.id];
  W(l, 'No route found in manifest');
  let o = {};
  for (let i in r) {
    let u = l[i] !== void 0 && i !== 'hasErrorBoundary';
    Sr(
      !u,
      'Route "' +
        l.id +
        '" has a static property "' +
        i +
        '" defined but its lazy function is also returning a value for this property. ' +
        ('The lazy route property "' + i + '" will be ignored.')
    ),
      !u && !ey.has(i) && (o[i] = r[i]);
  }
  Object.assign(l, o), Object.assign(l, ce({}, t(l), { lazy: void 0 }));
}
function Fy(e) {
  return Promise.all(e.matches.map((t) => t.resolve()));
}
async function jy(e, t, n, r, l, o, i, a) {
  let u = r.reduce((c, d) => c.add(d.route.id), new Set()),
    s = new Set(),
    f = await e({
      matches: l.map((c) => {
        let d = u.has(c.route.id);
        return ce({}, c, {
          shouldLoad: d,
          resolve: (w) => (
            s.add(c.route.id),
            d
              ? Iy(t, n, c, o, i, w, a)
              : Promise.resolve({ type: ne.data, result: void 0 })
          ),
        });
      }),
      request: n,
      params: l[0].params,
      context: a,
    });
  return (
    l.forEach((c) =>
      W(
        s.has(c.route.id),
        '`match.resolve()` was not called for route id "' +
          c.route.id +
          '". You must call `match.resolve()` on every match passed to `dataStrategy` to ensure all routes are properly loaded.'
      )
    ),
    f.filter((c, d) => u.has(l[d].route.id))
  );
}
async function Iy(e, t, n, r, l, o, i) {
  let a,
    u,
    s = (f) => {
      let c,
        d = new Promise((S, C) => (c = C));
      (u = () => c()), t.signal.addEventListener('abort', u);
      let E = (S) =>
          typeof f != 'function'
            ? Promise.reject(
                new Error(
                  'You cannot call the handler for a route which defines a boolean ' +
                    ('"' + e + '" [routeId: ' + n.route.id + ']')
                )
              )
            : f(
                { request: t, params: n.params, context: i },
                ...(S !== void 0 ? [S] : [])
              ),
        w;
      return (
        o
          ? (w = o((S) => E(S)))
          : (w = (async () => {
              try {
                return { type: 'data', result: await E() };
              } catch (S) {
                return { type: 'error', result: S };
              }
            })()),
        Promise.race([w, d])
      );
    };
  try {
    let f = n.route[e];
    if (n.route.lazy)
      if (f) {
        let c,
          [d] = await Promise.all([
            s(f).catch((E) => {
              c = E;
            }),
            Ac(n.route, l, r),
          ]);
        if (c !== void 0) throw c;
        a = d;
      } else if ((await Ac(n.route, l, r), (f = n.route[e]), f)) a = await s(f);
      else if (e === 'action') {
        let c = new URL(t.url),
          d = c.pathname + c.search;
        throw Ae(405, { method: t.method, pathname: d, routeId: n.route.id });
      } else return { type: ne.data, result: void 0 };
    else if (f) a = await s(f);
    else {
      let c = new URL(t.url),
        d = c.pathname + c.search;
      throw Ae(404, { pathname: d });
    }
    W(
      a.result !== void 0,
      'You defined ' +
        (e === 'action' ? 'an action' : 'a loader') +
        ' for route ' +
        ('"' +
          n.route.id +
          '" but didn\'t return anything from your `' +
          e +
          '` ') +
        'function. Please return a value or `null`.'
    );
  } catch (f) {
    return { type: ne.error, result: f };
  } finally {
    u && t.signal.removeEventListener('abort', u);
  }
  return a;
}
async function Uy(e) {
  let { result: t, type: n } = e;
  if (Dh(t)) {
    let s;
    try {
      let f = t.headers.get('Content-Type');
      f && /\bapplication\/json\b/.test(f)
        ? t.body == null
          ? (s = null)
          : (s = await t.json())
        : (s = await t.text());
    } catch (f) {
      return { type: ne.error, error: f };
    }
    return n === ne.error
      ? {
          type: ne.error,
          error: new jn(t.status, t.statusText, s),
          statusCode: t.status,
          headers: t.headers,
        }
      : { type: ne.data, data: s, statusCode: t.status, headers: t.headers };
  }
  if (n === ne.error) {
    if (Yc(t)) {
      var r;
      if (t.data instanceof Error) {
        var l;
        return {
          type: ne.error,
          error: t.data,
          statusCode: (l = t.init) == null ? void 0 : l.status,
        };
      }
      t = new jn(
        ((r = t.init) == null ? void 0 : r.status) || 500,
        void 0,
        t.data
      );
    }
    return { type: ne.error, error: t, statusCode: _r(t) ? t.status : void 0 };
  }
  if (Wy(t)) {
    var o, i;
    return {
      type: ne.deferred,
      deferredData: t,
      statusCode: (o = t.init) == null ? void 0 : o.status,
      headers:
        ((i = t.init) == null ? void 0 : i.headers) &&
        new Headers(t.init.headers),
    };
  }
  if (Yc(t)) {
    var a, u;
    return {
      type: ne.data,
      data: t.data,
      statusCode: (a = t.init) == null ? void 0 : a.status,
      headers:
        (u = t.init) != null && u.headers
          ? new Headers(t.init.headers)
          : void 0,
    };
  }
  return { type: ne.data, data: t };
}
function Ay(e, t, n, r, l, o) {
  let i = e.headers.get('Location');
  if (
    (W(
      i,
      'Redirects returned/thrown from loaders/actions must have a Location header'
    ),
    !Gu.test(i))
  ) {
    let a = r.slice(0, r.findIndex((u) => u.route.id === n) + 1);
    (i = Qa(new URL(t.url), a, l, !0, i, o)), e.headers.set('Location', i);
  }
  return e;
}
function $c(e, t, n) {
  if (Gu.test(e)) {
    let r = e,
      l = r.startsWith('//') ? new URL(t.protocol + r) : new URL(r),
      o = dt(l.pathname, n) != null;
    if (l.origin === t.origin && o) return l.pathname + l.search + l.hash;
  }
  return e;
}
function Yn(e, t, n, r) {
  let l = e.createURL(Nh(t)).toString(),
    o = { signal: n };
  if (r && yt(r.formMethod)) {
    let { formMethod: i, formEncType: a } = r;
    (o.method = i.toUpperCase()),
      a === 'application/json'
        ? ((o.headers = new Headers({ 'Content-Type': a })),
          (o.body = JSON.stringify(r.json)))
        : a === 'text/plain'
          ? (o.body = r.text)
          : a === 'application/x-www-form-urlencoded' && r.formData
            ? (o.body = Ya(r.formData))
            : (o.body = r.formData);
  }
  return new Request(l, o);
}
function Ya(e) {
  let t = new URLSearchParams();
  for (let [n, r] of e.entries())
    t.append(n, typeof r == 'string' ? r : r.name);
  return t;
}
function Bc(e) {
  let t = new FormData();
  for (let [n, r] of e.entries()) t.append(n, r);
  return t;
}
function $y(e, t, n, r, l, o) {
  let i = {},
    a = null,
    u,
    s = !1,
    f = {},
    c = r && Ze(r[1]) ? r[1].error : void 0;
  return (
    n.forEach((d, E) => {
      let w = t[E].route.id;
      if (
        (W(!Pn(d), 'Cannot handle redirect results in processLoaderData'),
        Ze(d))
      ) {
        let S = d.error;
        c !== void 0 && ((S = c), (c = void 0)), (a = a || {});
        {
          let C = ir(e, w);
          a[C.route.id] == null && (a[C.route.id] = S);
        }
        (i[w] = void 0),
          s || ((s = !0), (u = _r(d.error) ? d.error.status : 500)),
          d.headers && (f[w] = d.headers);
      } else
        Cn(d)
          ? (l.set(w, d.deferredData),
            (i[w] = d.deferredData.data),
            d.statusCode != null &&
              d.statusCode !== 200 &&
              !s &&
              (u = d.statusCode),
            d.headers && (f[w] = d.headers))
          : ((i[w] = d.data),
            d.statusCode && d.statusCode !== 200 && !s && (u = d.statusCode),
            d.headers && (f[w] = d.headers));
    }),
    c !== void 0 && r && ((a = { [r[0]]: c }), (i[r[0]] = void 0)),
    { loaderData: i, errors: a, statusCode: u || 200, loaderHeaders: f }
  );
}
function Hc(e, t, n, r, l, o, i, a) {
  let { loaderData: u, errors: s } = $y(t, n, r, l, a);
  for (let f = 0; f < o.length; f++) {
    let { key: c, match: d, controller: E } = o[f];
    W(
      i !== void 0 && i[f] !== void 0,
      'Did not find corresponding fetcher result'
    );
    let w = i[f];
    if (!(E && E.signal.aborted))
      if (Ze(w)) {
        let S = ir(e.matches, d == null ? void 0 : d.route.id);
        (s && s[S.route.id]) || (s = ce({}, s, { [S.route.id]: w.error })),
          e.fetchers.delete(c);
      } else if (Pn(w)) W(!1, 'Unhandled fetcher revalidation redirect');
      else if (Cn(w)) W(!1, 'Unhandled fetcher deferred data');
      else {
        let S = qt(w.data);
        e.fetchers.set(c, S);
      }
  }
  return { loaderData: u, errors: s };
}
function Vc(e, t, n, r) {
  let l = ce({}, t);
  for (let o of n) {
    let i = o.route.id;
    if (
      (t.hasOwnProperty(i)
        ? t[i] !== void 0 && (l[i] = t[i])
        : e[i] !== void 0 && o.route.loader && (l[i] = e[i]),
      r && r.hasOwnProperty(i))
    )
      break;
  }
  return l;
}
function Wc(e) {
  return e
    ? Ze(e[1])
      ? { actionData: {} }
      : { actionData: { [e[0]]: e[1].data } }
    : {};
}
function ir(e, t) {
  return (
    (t ? e.slice(0, e.findIndex((r) => r.route.id === t) + 1) : [...e])
      .reverse()
      .find((r) => r.route.hasErrorBoundary === !0) || e[0]
  );
}
function Kc(e) {
  let t =
    e.length === 1
      ? e[0]
      : e.find((n) => n.index || !n.path || n.path === '/') || {
          id: '__shim-error-route__',
        };
  return {
    matches: [{ params: {}, pathname: '', pathnameBase: '', route: t }],
    route: t,
  };
}
function Ae(e, t) {
  let {
      pathname: n,
      routeId: r,
      method: l,
      type: o,
      message: i,
    } = t === void 0 ? {} : t,
    a = 'Unknown Server Error',
    u = 'Unknown @remix-run/router error';
  return (
    e === 400
      ? ((a = 'Bad Request'),
        o === 'route-discovery'
          ? (u =
              'Unable to match URL "' +
              n +
              '" - the `unstable_patchRoutesOnMiss()` ' +
              (`function threw the following error:
` +
                i))
          : l && n && r
            ? (u =
                'You made a ' +
                l +
                ' request to "' +
                n +
                '" but ' +
                ('did not provide a `loader` for route "' + r + '", ') +
                'so there is no way to handle the request.')
            : o === 'defer-action'
              ? (u = 'defer() is not supported in actions')
              : o === 'invalid-body' &&
                (u = 'Unable to encode submission body'))
      : e === 403
        ? ((a = 'Forbidden'),
          (u = 'Route "' + r + '" does not match URL "' + n + '"'))
        : e === 404
          ? ((a = 'Not Found'), (u = 'No route matches URL "' + n + '"'))
          : e === 405 &&
            ((a = 'Method Not Allowed'),
            l && n && r
              ? (u =
                  'You made a ' +
                  l.toUpperCase() +
                  ' request to "' +
                  n +
                  '" but ' +
                  ('did not provide an `action` for route "' + r + '", ') +
                  'so there is no way to handle the request.')
              : l && (u = 'Invalid request method "' + l.toUpperCase() + '"')),
    new jn(e || 500, a, new Error(u), !0)
  );
}
function Qc(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let n = e[t];
    if (Pn(n)) return { result: n, idx: t };
  }
}
function Nh(e) {
  let t = typeof e == 'string' ? Yt(e) : e;
  return vn(ce({}, t, { hash: '' }));
}
function By(e, t) {
  return e.pathname !== t.pathname || e.search !== t.search
    ? !1
    : e.hash === ''
      ? t.hash !== ''
      : e.hash === t.hash
        ? !0
        : t.hash !== '';
}
function Hy(e) {
  return typeof e == 'object' && e != null && 'then' in e;
}
function Vy(e) {
  return Dh(e.result) && Py.has(e.result.status);
}
function Cn(e) {
  return e.type === ne.deferred;
}
function Ze(e) {
  return e.type === ne.error;
}
function Pn(e) {
  return (e && e.type) === ne.redirect;
}
function Yc(e) {
  return (
    typeof e == 'object' &&
    e != null &&
    'type' in e &&
    'data' in e &&
    'init' in e &&
    e.type === 'DataWithResponseInit'
  );
}
function Wy(e) {
  let t = e;
  return (
    t &&
    typeof t == 'object' &&
    typeof t.data == 'object' &&
    typeof t.subscribe == 'function' &&
    typeof t.cancel == 'function' &&
    typeof t.resolveData == 'function'
  );
}
function Dh(e) {
  return (
    e != null &&
    typeof e.status == 'number' &&
    typeof e.statusText == 'string' &&
    typeof e.headers == 'object' &&
    typeof e.body < 'u'
  );
}
function Ky(e) {
  return Cy.has(e.toLowerCase());
}
function yt(e) {
  return _y.has(e.toLowerCase());
}
async function Xc(e, t, n, r, l, o) {
  for (let i = 0; i < n.length; i++) {
    let a = n[i],
      u = t[i];
    if (!u) continue;
    let s = e.find((c) => c.route.id === u.route.id),
      f = s != null && !Lh(s, u) && (o && o[u.route.id]) !== void 0;
    if (Cn(a) && (l || f)) {
      let c = r[i];
      W(c, 'Expected an AbortSignal for revalidating fetcher deferred result'),
        await Oh(a, c, l).then((d) => {
          d && (n[i] = d || n[i]);
        });
    }
  }
}
async function Oh(e, t, n) {
  if ((n === void 0 && (n = !1), !(await e.deferredData.resolveData(t)))) {
    if (n)
      try {
        return { type: ne.data, data: e.deferredData.unwrappedData };
      } catch (l) {
        return { type: ne.error, error: l };
      }
    return { type: ne.data, data: e.deferredData.data };
  }
}
function Zu(e) {
  return new URLSearchParams(e).getAll('index').some((t) => t === '');
}
function Qr(e, t) {
  let n = typeof t == 'string' ? Yt(t).search : t.search;
  if (e[e.length - 1].route.index && Zu(n || '')) return e[e.length - 1];
  let r = _h(e);
  return r[r.length - 1];
}
function Jc(e) {
  let {
    formMethod: t,
    formAction: n,
    formEncType: r,
    text: l,
    formData: o,
    json: i,
  } = e;
  if (!(!t || !n || !r)) {
    if (l != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: void 0,
        text: l,
      };
    if (o != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: o,
        json: void 0,
        text: void 0,
      };
    if (i !== void 0)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: i,
        text: void 0,
      };
  }
}
function Ji(e, t) {
  return t
    ? {
        state: 'loading',
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text,
      }
    : {
        state: 'loading',
        location: e,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
      };
}
function Qy(e, t) {
  return {
    state: 'submitting',
    location: e,
    formMethod: t.formMethod,
    formAction: t.formAction,
    formEncType: t.formEncType,
    formData: t.formData,
    json: t.json,
    text: t.text,
  };
}
function Ar(e, t) {
  return e
    ? {
        state: 'loading',
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t,
      }
    : {
        state: 'loading',
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: t,
      };
}
function Yy(e, t) {
  return {
    state: 'submitting',
    formMethod: e.formMethod,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formData: e.formData,
    json: e.json,
    text: e.text,
    data: t ? t.data : void 0,
  };
}
function qt(e) {
  return {
    state: 'idle',
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: e,
  };
}
function Xy(e, t) {
  try {
    let n = e.sessionStorage.getItem(Ph);
    if (n) {
      let r = JSON.parse(n);
      for (let [l, o] of Object.entries(r || {}))
        o && Array.isArray(o) && t.set(l, new Set(o || []));
    }
  } catch {}
}
function Jy(e, t) {
  if (t.size > 0) {
    let n = {};
    for (let [r, l] of t) n[r] = [...l];
    try {
      e.sessionStorage.setItem(Ph, JSON.stringify(n));
    } catch (r) {
      Sr(
        !1,
        'Failed to save applied view transitions in sessionStorage (' + r + ').'
      );
    }
  }
}
/**
 * React Router v6.26.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Jo() {
  return (
    (Jo = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Jo.apply(this, arguments)
  );
}
const Rr = v.createContext(null),
  Pl = v.createContext(null),
  Go = v.createContext(null),
  xt = v.createContext(null),
  qu = v.createContext(null),
  Dt = v.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Mh = v.createContext(null);
function bu(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  Ll() || W(!1);
  let { basename: r, navigator: l } = v.useContext(xt),
    { hash: o, pathname: i, search: a } = Tl(e, { relative: n }),
    u = i;
  return (
    r !== '/' && (u = i === '/' ? r : Nt([r, i])),
    l.createHref({ pathname: u, search: a, hash: o })
  );
}
function Ll() {
  return v.useContext(qu) != null;
}
function Ot() {
  return Ll() || W(!1), v.useContext(qu).location;
}
function zh(e) {
  v.useContext(xt).static || v.useLayoutEffect(e);
}
function Fh() {
  let { isDataRoute: e } = v.useContext(Dt);
  return e ? hg() : Gy();
}
function Gy() {
  Ll() || W(!1);
  let e = v.useContext(Rr),
    { basename: t, future: n, navigator: r } = v.useContext(xt),
    { matches: l } = v.useContext(Dt),
    { pathname: o } = Ot(),
    i = JSON.stringify(Xu(l, n.v7_relativeSplatPath)),
    a = v.useRef(!1);
  return (
    zh(() => {
      a.current = !0;
    }),
    v.useCallback(
      function (s, f) {
        if ((f === void 0 && (f = {}), !a.current)) return;
        if (typeof s == 'number') {
          r.go(s);
          return;
        }
        let c = Ju(s, JSON.parse(i), o, f.relative === 'path');
        e == null &&
          t !== '/' &&
          (c.pathname = c.pathname === '/' ? t : Nt([t, c.pathname])),
          (f.replace ? r.replace : r.push)(c, f.state, f);
      },
      [t, r, i, o, e]
    )
  );
}
const Zy = v.createContext(null);
function qy(e) {
  let t = v.useContext(Dt).outlet;
  return t && v.createElement(Zy.Provider, { value: e }, t);
}
function h1() {
  let { matches: e } = v.useContext(Dt),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function Tl(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = v.useContext(xt),
    { matches: l } = v.useContext(Dt),
    { pathname: o } = Ot(),
    i = JSON.stringify(Xu(l, r.v7_relativeSplatPath));
  return v.useMemo(() => Ju(e, JSON.parse(i), o, n === 'path'), [e, i, o, n]);
}
function by(e, t, n, r) {
  Ll() || W(!1);
  let { navigator: l } = v.useContext(xt),
    { matches: o } = v.useContext(Dt),
    i = o[o.length - 1],
    a = i ? i.params : {};
  i && i.pathname;
  let u = i ? i.pathnameBase : '/';
  i && i.route;
  let s = Ot(),
    f;
  f = s;
  let c = f.pathname || '/',
    d = c;
  if (u !== '/') {
    let S = u.replace(/^\//, '').split('/');
    d = '/' + c.replace(/^\//, '').split('/').slice(S.length).join('/');
  }
  let E = It(e, { pathname: d });
  return lg(
    E &&
      E.map((S) =>
        Object.assign({}, S, {
          params: Object.assign({}, a, S.params),
          pathname: Nt([
            u,
            l.encodeLocation
              ? l.encodeLocation(S.pathname).pathname
              : S.pathname,
          ]),
          pathnameBase:
            S.pathnameBase === '/'
              ? u
              : Nt([
                  u,
                  l.encodeLocation
                    ? l.encodeLocation(S.pathnameBase).pathname
                    : S.pathnameBase,
                ]),
        })
      ),
    o,
    n,
    r
  );
}
function eg() {
  let e = Ih(),
    t = _r(e)
      ? e.status + ' ' + e.statusText
      : e instanceof Error
        ? e.message
        : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    l = { padding: '0.5rem', backgroundColor: 'rgba(200,200,200, 0.5)' };
  return v.createElement(
    v.Fragment,
    null,
    v.createElement('h2', null, 'Unexpected Application Error!'),
    v.createElement('h3', { style: { fontStyle: 'italic' } }, t),
    n ? v.createElement('pre', { style: l }, n) : null,
    null
  );
}
const tg = v.createElement(eg, null);
class ng extends v.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== 'idle' && t.revalidation === 'idle')
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      'React Router caught the following error during render',
      t,
      n
    );
  }
  render() {
    return this.state.error !== void 0
      ? v.createElement(
          Dt.Provider,
          { value: this.props.routeContext },
          v.createElement(Mh.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function rg(e) {
  let { routeContext: t, match: n, children: r } = e,
    l = v.useContext(Rr);
  return (
    l &&
      l.static &&
      l.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (l.staticContext._deepestRenderedBoundaryId = n.route.id),
    v.createElement(Dt.Provider, { value: t }, r)
  );
}
function lg(e, t, n, r) {
  var l;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var o;
    if (!n) return null;
    if (n.errors) e = n.matches;
    else if (
      (o = r) != null &&
      o.v7_partialHydration &&
      t.length === 0 &&
      !n.initialized &&
      n.matches.length > 0
    )
      e = n.matches;
    else return null;
  }
  let i = e,
    a = (l = n) == null ? void 0 : l.errors;
  if (a != null) {
    let f = i.findIndex(
      (c) => c.route.id && (a == null ? void 0 : a[c.route.id]) !== void 0
    );
    f >= 0 || W(!1), (i = i.slice(0, Math.min(i.length, f + 1)));
  }
  let u = !1,
    s = -1;
  if (n && r && r.v7_partialHydration)
    for (let f = 0; f < i.length; f++) {
      let c = i[f];
      if (
        ((c.route.HydrateFallback || c.route.hydrateFallbackElement) && (s = f),
        c.route.id)
      ) {
        let { loaderData: d, errors: E } = n,
          w =
            c.route.loader &&
            d[c.route.id] === void 0 &&
            (!E || E[c.route.id] === void 0);
        if (c.route.lazy || w) {
          (u = !0), s >= 0 ? (i = i.slice(0, s + 1)) : (i = [i[0]]);
          break;
        }
      }
    }
  return i.reduceRight((f, c, d) => {
    let E,
      w = !1,
      S = null,
      C = null;
    n &&
      ((E = a && c.route.id ? a[c.route.id] : void 0),
      (S = c.route.errorElement || tg),
      u &&
        (s < 0 && d === 0
          ? ((w = !0), (C = null))
          : s === d &&
            ((w = !0), (C = c.route.hydrateFallbackElement || null))));
    let p = t.concat(i.slice(0, d + 1)),
      h = () => {
        let m;
        return (
          E
            ? (m = S)
            : w
              ? (m = C)
              : c.route.Component
                ? (m = v.createElement(c.route.Component, null))
                : c.route.element
                  ? (m = c.route.element)
                  : (m = f),
          v.createElement(rg, {
            match: c,
            routeContext: { outlet: f, matches: p, isDataRoute: n != null },
            children: m,
          })
        );
      };
    return n && (c.route.ErrorBoundary || c.route.errorElement || d === 0)
      ? v.createElement(ng, {
          location: n.location,
          revalidation: n.revalidation,
          component: S,
          error: E,
          children: h(),
          routeContext: { outlet: null, matches: p, isDataRoute: !0 },
        })
      : h();
  }, null);
}
var jh = (function (e) {
    return (
      (e.UseBlocker = 'useBlocker'),
      (e.UseRevalidator = 'useRevalidator'),
      (e.UseNavigateStable = 'useNavigate'),
      e
    );
  })(jh || {}),
  Kt = (function (e) {
    return (
      (e.UseBlocker = 'useBlocker'),
      (e.UseLoaderData = 'useLoaderData'),
      (e.UseActionData = 'useActionData'),
      (e.UseRouteError = 'useRouteError'),
      (e.UseNavigation = 'useNavigation'),
      (e.UseRouteLoaderData = 'useRouteLoaderData'),
      (e.UseMatches = 'useMatches'),
      (e.UseRevalidator = 'useRevalidator'),
      (e.UseNavigateStable = 'useNavigate'),
      (e.UseRouteId = 'useRouteId'),
      e
    );
  })(Kt || {});
function og(e) {
  let t = v.useContext(Rr);
  return t || W(!1), t;
}
function hi(e) {
  let t = v.useContext(Pl);
  return t || W(!1), t;
}
function ig(e) {
  let t = v.useContext(Dt);
  return t || W(!1), t;
}
function pi(e) {
  let t = ig(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || W(!1), n.route.id;
}
function ag() {
  return pi(Kt.UseRouteId);
}
function ug() {
  return hi(Kt.UseNavigation).navigation;
}
function sg() {
  let { matches: e, loaderData: t } = hi(Kt.UseMatches);
  return v.useMemo(() => e.map((n) => Eh(n, t)), [e, t]);
}
function cg() {
  let e = hi(Kt.UseLoaderData),
    t = pi(Kt.UseLoaderData);
  if (e.errors && e.errors[t] != null) {
    console.error(
      'You cannot `useLoaderData` in an errorElement (routeId: ' + t + ')'
    );
    return;
  }
  return e.loaderData[t];
}
function Ih() {
  var e;
  let t = v.useContext(Mh),
    n = hi(Kt.UseRouteError),
    r = pi(Kt.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function fg() {
  let e = v.useContext(Go);
  return e == null ? void 0 : e._data;
}
function dg() {
  let e = v.useContext(Go);
  return e == null ? void 0 : e._error;
}
function hg() {
  let { router: e } = og(jh.UseNavigateStable),
    t = pi(Kt.UseNavigateStable),
    n = v.useRef(!1);
  return (
    zh(() => {
      n.current = !0;
    }),
    v.useCallback(
      function (l, o) {
        o === void 0 && (o = {}),
          n.current &&
            (typeof l == 'number'
              ? e.navigate(l)
              : e.navigate(l, Jo({ fromRouteId: t }, o)));
      },
      [e, t]
    )
  );
}
function p1(e) {
  return qy(e.context);
}
function pg(e) {
  let {
    basename: t = '/',
    children: n = null,
    location: r,
    navigationType: l = Se.Pop,
    navigator: o,
    static: i = !1,
    future: a,
  } = e;
  Ll() && W(!1);
  let u = t.replace(/^\/*/, '/'),
    s = v.useMemo(
      () => ({
        basename: u,
        navigator: o,
        static: i,
        future: Jo({ v7_relativeSplatPath: !1 }, a),
      }),
      [u, a, o, i]
    );
  typeof r == 'string' && (r = Yt(r));
  let {
      pathname: f = '/',
      search: c = '',
      hash: d = '',
      state: E = null,
      key: w = 'default',
    } = r,
    S = v.useMemo(() => {
      let C = dt(f, u);
      return C == null
        ? null
        : {
            location: { pathname: C, search: c, hash: d, state: E, key: w },
            navigationType: l,
          };
    }, [u, f, c, d, E, w, l]);
  return S == null
    ? null
    : v.createElement(
        xt.Provider,
        { value: s },
        v.createElement(qu.Provider, { children: n, value: S })
      );
}
function mg(e) {
  let { children: t, errorElement: n, resolve: r } = e;
  return v.createElement(
    yg,
    { resolve: r, errorElement: n },
    v.createElement(gg, null, t)
  );
}
var lt = (function (e) {
  return (
    (e[(e.pending = 0)] = 'pending'),
    (e[(e.success = 1)] = 'success'),
    (e[(e.error = 2)] = 'error'),
    e
  );
})(lt || {});
const vg = new Promise(() => {});
class yg extends v.Component {
  constructor(t) {
    super(t), (this.state = { error: null });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  componentDidCatch(t, n) {
    console.error('<Await> caught the following error during render', t, n);
  }
  render() {
    let { children: t, errorElement: n, resolve: r } = this.props,
      l = null,
      o = lt.pending;
    if (!(r instanceof Promise))
      (o = lt.success),
        (l = Promise.resolve()),
        Object.defineProperty(l, '_tracked', { get: () => !0 }),
        Object.defineProperty(l, '_data', { get: () => r });
    else if (this.state.error) {
      o = lt.error;
      let i = this.state.error;
      (l = Promise.reject().catch(() => {})),
        Object.defineProperty(l, '_tracked', { get: () => !0 }),
        Object.defineProperty(l, '_error', { get: () => i });
    } else
      r._tracked
        ? ((l = r),
          (o =
            '_error' in l ? lt.error : '_data' in l ? lt.success : lt.pending))
        : ((o = lt.pending),
          Object.defineProperty(r, '_tracked', { get: () => !0 }),
          (l = r.then(
            (i) => Object.defineProperty(r, '_data', { get: () => i }),
            (i) => Object.defineProperty(r, '_error', { get: () => i })
          )));
    if (o === lt.error && l._error instanceof Xo) throw vg;
    if (o === lt.error && !n) throw l._error;
    if (o === lt.error)
      return v.createElement(Go.Provider, { value: l, children: n });
    if (o === lt.success)
      return v.createElement(Go.Provider, { value: l, children: t });
    throw l;
  }
}
function gg(e) {
  let { children: t } = e,
    n = fg(),
    r = typeof t == 'function' ? t(n) : t;
  return v.createElement(v.Fragment, null, r);
}
function m1(e) {
  let t = {
    hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null,
  };
  return (
    e.Component &&
      Object.assign(t, {
        element: v.createElement(e.Component),
        Component: void 0,
      }),
    e.HydrateFallback &&
      Object.assign(t, {
        hydrateFallbackElement: v.createElement(e.HydrateFallback),
        HydrateFallback: void 0,
      }),
    e.ErrorBoundary &&
      Object.assign(t, {
        errorElement: v.createElement(e.ErrorBoundary),
        ErrorBoundary: void 0,
      }),
    t
  );
}
/**
 * React Router DOM v6.26.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function In() {
  return (
    (In = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    In.apply(this, arguments)
  );
}
function es(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    l,
    o;
  for (o = 0; o < r.length; o++)
    (l = r[o]), !(t.indexOf(l) >= 0) && (n[l] = e[l]);
  return n;
}
const Eo = 'get',
  Gi = 'application/x-www-form-urlencoded';
function mi(e) {
  return e != null && typeof e.tagName == 'string';
}
function wg(e) {
  return mi(e) && e.tagName.toLowerCase() === 'button';
}
function Sg(e) {
  return mi(e) && e.tagName.toLowerCase() === 'form';
}
function Eg(e) {
  return mi(e) && e.tagName.toLowerCase() === 'input';
}
function xg(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function kg(e, t) {
  return e.button === 0 && (!t || t === '_self') && !xg(e);
}
function Xa(e) {
  return (
    e === void 0 && (e = ''),
    new URLSearchParams(
      typeof e == 'string' || Array.isArray(e) || e instanceof URLSearchParams
        ? e
        : Object.keys(e).reduce((t, n) => {
            let r = e[n];
            return t.concat(Array.isArray(r) ? r.map((l) => [n, l]) : [[n, r]]);
          }, [])
    )
  );
}
function _g(e, t) {
  let n = Xa(e);
  return (
    t &&
      t.forEach((r, l) => {
        n.has(l) ||
          t.getAll(l).forEach((o) => {
            n.append(l, o);
          });
      }),
    n
  );
}
let no = null;
function Rg() {
  if (no === null)
    try {
      new FormData(document.createElement('form'), 0), (no = !1);
    } catch {
      no = !0;
    }
  return no;
}
const Cg = new Set([
  'application/x-www-form-urlencoded',
  'multipart/form-data',
  'text/plain',
]);
function Zi(e) {
  return e != null && !Cg.has(e) ? null : e;
}
function Pg(e, t) {
  let n, r, l, o, i;
  if (Sg(e)) {
    let a = e.getAttribute('action');
    (r = a ? dt(a, t) : null),
      (n = e.getAttribute('method') || Eo),
      (l = Zi(e.getAttribute('enctype')) || Gi),
      (o = new FormData(e));
  } else if (wg(e) || (Eg(e) && (e.type === 'submit' || e.type === 'image'))) {
    let a = e.form;
    if (a == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let u = e.getAttribute('formaction') || a.getAttribute('action');
    if (
      ((r = u ? dt(u, t) : null),
      (n = e.getAttribute('formmethod') || a.getAttribute('method') || Eo),
      (l =
        Zi(e.getAttribute('formenctype')) ||
        Zi(a.getAttribute('enctype')) ||
        Gi),
      (o = new FormData(a, e)),
      !Rg())
    ) {
      let { name: s, type: f, value: c } = e;
      if (f === 'image') {
        let d = s ? s + '.' : '';
        o.append(d + 'x', '0'), o.append(d + 'y', '0');
      } else s && o.append(s, c);
    }
  } else {
    if (mi(e))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    (n = Eo), (r = null), (l = Gi), (i = e);
  }
  return (
    o && l === 'text/plain' && ((i = o), (o = void 0)),
    { action: r, method: n.toLowerCase(), encType: l, formData: o, body: i }
  );
}
const Lg = [
    'onClick',
    'relative',
    'reloadDocument',
    'replace',
    'state',
    'target',
    'to',
    'preventScrollReset',
    'unstable_viewTransition',
  ],
  Tg = [
    'aria-current',
    'caseSensitive',
    'className',
    'end',
    'style',
    'to',
    'unstable_viewTransition',
    'children',
  ],
  Ng = [
    'fetcherKey',
    'navigate',
    'reloadDocument',
    'replace',
    'state',
    'method',
    'action',
    'onSubmit',
    'relative',
    'preventScrollReset',
    'unstable_viewTransition',
  ],
  Dg = '6';
try {
  window.__reactRouterVersion = Dg;
} catch {}
const Uh = v.createContext({ isTransitioning: !1 }),
  Og = v.createContext(new Map()),
  Mg = 'startTransition',
  Gc = Ap[Mg],
  zg = 'flushSync',
  Zc = Zv[zg];
function Fg(e) {
  Gc ? Gc(e) : e();
}
function $r(e) {
  Zc ? Zc(e) : e();
}
let jg = class {
  constructor() {
    (this.status = 'pending'),
      (this.promise = new Promise((t, n) => {
        (this.resolve = (r) => {
          this.status === 'pending' && ((this.status = 'resolved'), t(r));
        }),
          (this.reject = (r) => {
            this.status === 'pending' && ((this.status = 'rejected'), n(r));
          });
      }));
  }
};
function y1(e) {
  let { fallbackElement: t, router: n, future: r } = e,
    [l, o] = v.useState(n.state),
    [i, a] = v.useState(),
    [u, s] = v.useState({ isTransitioning: !1 }),
    [f, c] = v.useState(),
    [d, E] = v.useState(),
    [w, S] = v.useState(),
    C = v.useRef(new Map()),
    { v7_startTransition: p } = r || {},
    h = v.useCallback(
      (P) => {
        p ? Fg(P) : P();
      },
      [p]
    ),
    m = v.useCallback(
      (P, O) => {
        let {
          deletedFetchers: M,
          unstable_flushSync: V,
          unstable_viewTransitionOpts: X,
        } = O;
        M.forEach((ee) => C.current.delete(ee)),
          P.fetchers.forEach((ee, ke) => {
            ee.data !== void 0 && C.current.set(ke, ee.data);
          });
        let ge =
          n.window == null ||
          n.window.document == null ||
          typeof n.window.document.startViewTransition != 'function';
        if (!X || ge) {
          V ? $r(() => o(P)) : h(() => o(P));
          return;
        }
        if (V) {
          $r(() => {
            d && (f && f.resolve(), d.skipTransition()),
              s({
                isTransitioning: !0,
                flushSync: !0,
                currentLocation: X.currentLocation,
                nextLocation: X.nextLocation,
              });
          });
          let ee = n.window.document.startViewTransition(() => {
            $r(() => o(P));
          });
          ee.finished.finally(() => {
            $r(() => {
              c(void 0), E(void 0), a(void 0), s({ isTransitioning: !1 });
            });
          }),
            $r(() => E(ee));
          return;
        }
        d
          ? (f && f.resolve(),
            d.skipTransition(),
            S({
              state: P,
              currentLocation: X.currentLocation,
              nextLocation: X.nextLocation,
            }))
          : (a(P),
            s({
              isTransitioning: !0,
              flushSync: !1,
              currentLocation: X.currentLocation,
              nextLocation: X.nextLocation,
            }));
      },
      [n.window, d, f, C, h]
    );
  v.useLayoutEffect(() => n.subscribe(m), [n, m]),
    v.useEffect(() => {
      u.isTransitioning && !u.flushSync && c(new jg());
    }, [u]),
    v.useEffect(() => {
      if (f && i && n.window) {
        let P = i,
          O = f.promise,
          M = n.window.document.startViewTransition(async () => {
            h(() => o(P)), await O;
          });
        M.finished.finally(() => {
          c(void 0), E(void 0), a(void 0), s({ isTransitioning: !1 });
        }),
          E(M);
      }
    }, [h, i, f, n.window]),
    v.useEffect(() => {
      f && i && l.location.key === i.location.key && f.resolve();
    }, [f, d, l.location, i]),
    v.useEffect(() => {
      !u.isTransitioning &&
        w &&
        (a(w.state),
        s({
          isTransitioning: !0,
          flushSync: !1,
          currentLocation: w.currentLocation,
          nextLocation: w.nextLocation,
        }),
        S(void 0));
    }, [u.isTransitioning, w]),
    v.useEffect(() => {}, []);
  let k = v.useMemo(
      () => ({
        createHref: n.createHref,
        encodeLocation: n.encodeLocation,
        go: (P) => n.navigate(P),
        push: (P, O, M) =>
          n.navigate(P, {
            state: O,
            preventScrollReset: M == null ? void 0 : M.preventScrollReset,
          }),
        replace: (P, O, M) =>
          n.navigate(P, {
            replace: !0,
            state: O,
            preventScrollReset: M == null ? void 0 : M.preventScrollReset,
          }),
      }),
      [n]
    ),
    L = n.basename || '/',
    y = v.useMemo(
      () => ({ router: n, navigator: k, static: !1, basename: L }),
      [n, k, L]
    ),
    T = v.useMemo(
      () => ({ v7_relativeSplatPath: n.future.v7_relativeSplatPath }),
      [n.future.v7_relativeSplatPath]
    );
  return v.createElement(
    v.Fragment,
    null,
    v.createElement(
      Rr.Provider,
      { value: y },
      v.createElement(
        Pl.Provider,
        { value: l },
        v.createElement(
          Og.Provider,
          { value: C.current },
          v.createElement(
            Uh.Provider,
            { value: u },
            v.createElement(
              pg,
              {
                basename: L,
                location: l.location,
                navigationType: l.historyAction,
                navigator: k,
                future: T,
              },
              l.initialized || n.future.v7_partialHydration
                ? v.createElement(Ig, {
                    routes: n.routes,
                    future: n.future,
                    state: l,
                  })
                : t
            )
          )
        )
      )
    ),
    null
  );
}
const Ig = v.memo(Ug);
function Ug(e) {
  let { routes: t, future: n, state: r } = e;
  return by(t, void 0, r, n);
}
const Ag =
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u',
  $g = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Ah = v.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: l,
        reloadDocument: o,
        replace: i,
        state: a,
        target: u,
        to: s,
        preventScrollReset: f,
        unstable_viewTransition: c,
      } = t,
      d = es(t, Lg),
      { basename: E } = v.useContext(xt),
      w,
      S = !1;
    if (typeof s == 'string' && $g.test(s) && ((w = s), Ag))
      try {
        let m = new URL(window.location.href),
          k = s.startsWith('//') ? new URL(m.protocol + s) : new URL(s),
          L = dt(k.pathname, E);
        k.origin === m.origin && L != null
          ? (s = L + k.search + k.hash)
          : (S = !0);
      } catch {}
    let C = bu(s, { relative: l }),
      p = Wg(s, {
        replace: i,
        state: a,
        target: u,
        preventScrollReset: f,
        relative: l,
        unstable_viewTransition: c,
      });
    function h(m) {
      r && r(m), m.defaultPrevented || p(m);
    }
    return v.createElement(
      'a',
      In({}, d, { href: w || C, onClick: S || o ? r : h, ref: n, target: u })
    );
  }),
  Bg = v.forwardRef(function (t, n) {
    let {
        'aria-current': r = 'page',
        caseSensitive: l = !1,
        className: o = '',
        end: i = !1,
        style: a,
        to: u,
        unstable_viewTransition: s,
        children: f,
      } = t,
      c = es(t, Tg),
      d = Tl(u, { relative: c.relative }),
      E = Ot(),
      w = v.useContext(Pl),
      { navigator: S, basename: C } = v.useContext(xt),
      p = w != null && Zg(d) && s === !0,
      h = S.encodeLocation ? S.encodeLocation(d).pathname : d.pathname,
      m = E.pathname,
      k =
        w && w.navigation && w.navigation.location
          ? w.navigation.location.pathname
          : null;
    l ||
      ((m = m.toLowerCase()),
      (k = k ? k.toLowerCase() : null),
      (h = h.toLowerCase())),
      k && C && (k = dt(k, C) || k);
    const L = h !== '/' && h.endsWith('/') ? h.length - 1 : h.length;
    let y = m === h || (!i && m.startsWith(h) && m.charAt(L) === '/'),
      T =
        k != null &&
        (k === h || (!i && k.startsWith(h) && k.charAt(h.length) === '/')),
      P = { isActive: y, isPending: T, isTransitioning: p },
      O = y ? r : void 0,
      M;
    typeof o == 'function'
      ? (M = o(P))
      : (M = [
          o,
          y ? 'active' : null,
          T ? 'pending' : null,
          p ? 'transitioning' : null,
        ]
          .filter(Boolean)
          .join(' '));
    let V = typeof a == 'function' ? a(P) : a;
    return v.createElement(
      Ah,
      In({}, c, {
        'aria-current': O,
        className: M,
        ref: n,
        style: V,
        to: u,
        unstable_viewTransition: s,
      }),
      typeof f == 'function' ? f(P) : f
    );
  }),
  Hg = v.forwardRef((e, t) => {
    let {
        fetcherKey: n,
        navigate: r,
        reloadDocument: l,
        replace: o,
        state: i,
        method: a = Eo,
        action: u,
        onSubmit: s,
        relative: f,
        preventScrollReset: c,
        unstable_viewTransition: d,
      } = e,
      E = es(e, Ng),
      w = Xg(),
      S = Jg(u, { relative: f }),
      C = a.toLowerCase() === 'get' ? 'get' : 'post',
      p = (h) => {
        if ((s && s(h), h.defaultPrevented)) return;
        h.preventDefault();
        let m = h.nativeEvent.submitter,
          k = (m == null ? void 0 : m.getAttribute('formmethod')) || a;
        w(m || h.currentTarget, {
          fetcherKey: n,
          method: k,
          navigate: r,
          replace: o,
          state: i,
          relative: f,
          preventScrollReset: c,
          unstable_viewTransition: d,
        });
      };
    return v.createElement(
      'form',
      In({ ref: t, method: C, action: S, onSubmit: l ? s : p }, E)
    );
  });
var El;
(function (e) {
  (e.UseScrollRestoration = 'useScrollRestoration'),
    (e.UseSubmit = 'useSubmit'),
    (e.UseSubmitFetcher = 'useSubmitFetcher'),
    (e.UseFetcher = 'useFetcher'),
    (e.useViewTransitionState = 'useViewTransitionState');
})(El || (El = {}));
var Ja;
(function (e) {
  (e.UseFetcher = 'useFetcher'),
    (e.UseFetchers = 'useFetchers'),
    (e.UseScrollRestoration = 'useScrollRestoration');
})(Ja || (Ja = {}));
function ts(e) {
  let t = v.useContext(Rr);
  return t || W(!1), t;
}
function Vg(e) {
  let t = v.useContext(Pl);
  return t || W(!1), t;
}
function Wg(e, t) {
  let {
      target: n,
      replace: r,
      state: l,
      preventScrollReset: o,
      relative: i,
      unstable_viewTransition: a,
    } = t === void 0 ? {} : t,
    u = Fh(),
    s = Ot(),
    f = Tl(e, { relative: i });
  return v.useCallback(
    (c) => {
      if (kg(c, n)) {
        c.preventDefault();
        let d = r !== void 0 ? r : vn(s) === vn(f);
        u(e, {
          replace: d,
          state: l,
          preventScrollReset: o,
          relative: i,
          unstable_viewTransition: a,
        });
      }
    },
    [s, u, f, r, l, n, e, o, i, a]
  );
}
function g1(e) {
  let t = v.useRef(Xa(e)),
    n = v.useRef(!1),
    r = Ot(),
    l = v.useMemo(() => _g(r.search, n.current ? null : t.current), [r.search]),
    o = Fh(),
    i = v.useCallback(
      (a, u) => {
        const s = Xa(typeof a == 'function' ? a(l) : a);
        (n.current = !0), o('?' + s, u);
      },
      [o, l]
    );
  return [l, i];
}
function Kg() {
  if (typeof document > 'u')
    throw new Error(
      'You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.'
    );
}
let Qg = 0,
  Yg = () => '__' + String(++Qg) + '__';
function Xg() {
  let { router: e } = ts(El.UseSubmit),
    { basename: t } = v.useContext(xt),
    n = ag();
  return v.useCallback(
    function (r, l) {
      l === void 0 && (l = {}), Kg();
      let { action: o, method: i, encType: a, formData: u, body: s } = Pg(r, t);
      if (l.navigate === !1) {
        let f = l.fetcherKey || Yg();
        e.fetch(f, n, l.action || o, {
          preventScrollReset: l.preventScrollReset,
          formData: u,
          body: s,
          formMethod: l.method || i,
          formEncType: l.encType || a,
          unstable_flushSync: l.unstable_flushSync,
        });
      } else
        e.navigate(l.action || o, {
          preventScrollReset: l.preventScrollReset,
          formData: u,
          body: s,
          formMethod: l.method || i,
          formEncType: l.encType || a,
          replace: l.replace,
          state: l.state,
          fromRouteId: n,
          unstable_flushSync: l.unstable_flushSync,
          unstable_viewTransition: l.unstable_viewTransition,
        });
    },
    [e, t, n]
  );
}
function Jg(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { basename: r } = v.useContext(xt),
    l = v.useContext(Dt);
  l || W(!1);
  let [o] = l.matches.slice(-1),
    i = In({}, Tl(e || '.', { relative: n })),
    a = Ot();
  if (e == null) {
    i.search = a.search;
    let u = new URLSearchParams(i.search);
    u.has('index') &&
      u.get('index') === '' &&
      (u.delete('index'), (i.search = u.toString() ? '?' + u.toString() : ''));
  }
  return (
    (!e || e === '.') &&
      o.route.index &&
      (i.search = i.search ? i.search.replace(/^\?/, '?index&') : '?index'),
    r !== '/' && (i.pathname = i.pathname === '/' ? r : Nt([r, i.pathname])),
    vn(i)
  );
}
const qc = 'react-router-scroll-positions';
let ro = {};
function w1(e) {
  let { getKey: t, storageKey: n } = e === void 0 ? {} : e,
    { router: r } = ts(El.UseScrollRestoration),
    { restoreScrollPosition: l, preventScrollReset: o } = Vg(
      Ja.UseScrollRestoration
    ),
    { basename: i } = v.useContext(xt),
    a = Ot(),
    u = sg(),
    s = ug();
  v.useEffect(
    () => (
      (window.history.scrollRestoration = 'manual'),
      () => {
        window.history.scrollRestoration = 'auto';
      }
    ),
    []
  ),
    Gg(
      v.useCallback(() => {
        if (s.state === 'idle') {
          let f = (t ? t(a, u) : null) || a.key;
          ro[f] = window.scrollY;
        }
        try {
          sessionStorage.setItem(n || qc, JSON.stringify(ro));
        } catch {}
        window.history.scrollRestoration = 'auto';
      }, [n, t, s.state, a, u])
    ),
    typeof document < 'u' &&
      (v.useLayoutEffect(() => {
        try {
          let f = sessionStorage.getItem(n || qc);
          f && (ro = JSON.parse(f));
        } catch {}
      }, [n]),
      v.useLayoutEffect(() => {
        let f =
            t && i !== '/'
              ? (d, E) =>
                  t(In({}, d, { pathname: dt(d.pathname, i) || d.pathname }), E)
              : t,
          c =
            r == null
              ? void 0
              : r.enableScrollRestoration(ro, () => window.scrollY, f);
        return () => c && c();
      }, [r, i, t]),
      v.useLayoutEffect(() => {
        if (l !== !1) {
          if (typeof l == 'number') {
            window.scrollTo(0, l);
            return;
          }
          if (a.hash) {
            let f = document.getElementById(
              decodeURIComponent(a.hash.slice(1))
            );
            if (f) {
              f.scrollIntoView();
              return;
            }
          }
          o !== !0 && window.scrollTo(0, 0);
        }
      }, [a, l, o]));
}
function Gg(e, t) {
  let { capture: n } = {};
  v.useEffect(() => {
    let r = n != null ? { capture: n } : void 0;
    return (
      window.addEventListener('pagehide', e, r),
      () => {
        window.removeEventListener('pagehide', e, r);
      }
    );
  }, [e, n]);
}
function Zg(e, t) {
  t === void 0 && (t = {});
  let n = v.useContext(Uh);
  n == null && W(!1);
  let { basename: r } = ts(El.useViewTransitionState),
    l = Tl(e, { relative: t.relative });
  if (!n.isTransitioning) return !1;
  let o = dt(n.currentLocation.pathname, r) || n.currentLocation.pathname,
    i = dt(n.nextLocation.pathname, r) || n.nextLocation.pathname;
  return Yo(l.pathname, i) != null || Yo(l.pathname, o) != null;
}
var qg = -1,
  bg = -2,
  e0 = -3,
  t0 = -4,
  n0 = -5,
  r0 = -6,
  l0 = -7,
  o0 = 'B',
  i0 = 'D',
  $h = 'E',
  a0 = 'M',
  u0 = 'N',
  Bh = 'P',
  s0 = 'R',
  c0 = 'S',
  f0 = 'Y',
  d0 = 'U',
  h0 = 'Z',
  Hh = class {
    constructor() {
      Ul(this, 'promise');
      Ul(this, 'resolve');
      Ul(this, 'reject');
      this.promise = new Promise((e, t) => {
        (this.resolve = e), (this.reject = t);
      });
    }
  };
function p0() {
  const e = new TextDecoder();
  let t = '';
  return new TransformStream({
    transform(n, r) {
      const l = e.decode(n, { stream: !0 }),
        o = (t + l).split(`
`);
      t = o.pop() || '';
      for (const i of o) r.enqueue(i);
    },
    flush(n) {
      t && n.enqueue(t);
    },
  });
}
Object.getOwnPropertyNames(Object.prototype).sort().join('\0');
var qi =
  typeof window < 'u' ? window : typeof globalThis < 'u' ? globalThis : void 0;
function Ga(e) {
  const { hydrated: t, values: n } = this;
  if (typeof e == 'number') return ot.call(this, e);
  if (!Array.isArray(e) || !e.length) throw new SyntaxError();
  const r = n.length;
  return n.push(...e), (t.length = n.length), ot.call(this, r);
}
function ot(e) {
  const { hydrated: t, values: n, deferred: r, plugins: l } = this;
  switch (e) {
    case l0:
      return;
    case n0:
      return null;
    case bg:
      return NaN;
    case r0:
      return 1 / 0;
    case e0:
      return -1 / 0;
    case t0:
      return -0;
  }
  if (t[e]) return t[e];
  const o = n[e];
  if (!o || typeof o != 'object') return (t[e] = o);
  if (Array.isArray(o))
    if (typeof o[0] == 'string') {
      const [i, a, u] = o;
      switch (i) {
        case i0:
          return (t[e] = new Date(a));
        case d0:
          return (t[e] = new URL(a));
        case o0:
          return (t[e] = BigInt(a));
        case s0:
          return (t[e] = new RegExp(a, u));
        case f0:
          return (t[e] = Symbol.for(a));
        case c0:
          const s = new Set();
          t[e] = s;
          for (let S = 1; S < o.length; S++) s.add(ot.call(this, o[S]));
          return s;
        case a0:
          const f = new Map();
          t[e] = f;
          for (let S = 1; S < o.length; S += 2)
            f.set(ot.call(this, o[S]), ot.call(this, o[S + 1]));
          return f;
        case u0:
          const c = Object.create(null);
          t[e] = c;
          for (const S in a) c[ot.call(this, Number(S))] = ot.call(this, a[S]);
          return c;
        case Bh:
          if (t[a]) return (t[e] = t[a]);
          {
            const S = new Hh();
            return (r[a] = S), (t[e] = S.promise);
          }
        case $h:
          const [, d, E] = o;
          let w = E && qi && qi[E] ? new qi[E](d) : new Error(d);
          return (t[e] = w), w;
        case h0:
          return ot.call(this, a);
        default:
          if (Array.isArray(l)) {
            const S = o.slice(1).map((C) => ot.call(this, C));
            for (const C of l) {
              const p = C(o[0], ...S);
              if (p) return (t[e] = p.value);
            }
          }
          throw new SyntaxError();
      }
    } else {
      const i = [];
      t[e] = i;
      for (let a = 0; a < o.length; a++) {
        const u = o[a];
        u !== qg && (i[a] = ot.call(this, u));
      }
      return i;
    }
  else {
    const i = {};
    t[e] = i;
    for (const a in o) i[ot.call(this, Number(a))] = ot.call(this, o[a]);
    return i;
  }
}
async function m0(e, t) {
  const { plugins: n } = t ?? {},
    r = new Hh(),
    l = e.pipeThrough(p0()).getReader(),
    o = { values: [], hydrated: [], deferred: {}, plugins: n },
    i = await v0.call(o, l);
  let a = r.promise;
  return (
    i.done
      ? r.resolve()
      : (a = y0
          .call(o, l)
          .then(r.resolve)
          .catch((u) => {
            for (const s of Object.values(o.deferred)) s.reject(u);
            r.reject(u);
          })),
    { done: a.then(() => l.closed), value: i.value }
  );
}
async function v0(e) {
  const t = await e.read();
  if (!t.value) throw new SyntaxError();
  let n;
  try {
    n = JSON.parse(t.value);
  } catch {
    throw new SyntaxError();
  }
  return { done: t.done, value: Ga.call(this, n) };
}
async function y0(e) {
  let t = await e.read();
  for (; !t.done; ) {
    if (!t.value) continue;
    const n = t.value;
    switch (n[0]) {
      case Bh: {
        const r = n.indexOf(':'),
          l = Number(n.slice(1, r)),
          o = this.deferred[l];
        if (!o) throw new Error(`Deferred ID ${l} not found in stream`);
        const i = n.slice(r + 1);
        let a;
        try {
          a = JSON.parse(i);
        } catch {
          throw new SyntaxError();
        }
        const u = Ga.call(this, a);
        o.resolve(u);
        break;
      }
      case $h: {
        const r = n.indexOf(':'),
          l = Number(n.slice(1, r)),
          o = this.deferred[l];
        if (!o) throw new Error(`Deferred ID ${l} not found in stream`);
        const i = n.slice(r + 1);
        let a;
        try {
          a = JSON.parse(i);
        } catch {
          throw new SyntaxError();
        }
        const u = Ga.call(this, a);
        o.reject(u);
        break;
      }
      default:
        throw new SyntaxError();
    }
    t = await e.read();
  }
}
/**
 * @remix-run/server-runtime v2.11.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ const Vh = Symbol('SingleFetchRedirect');
/**
 * @remix-run/react v2.11.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function xe() {
  return (
    (xe = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    xe.apply(this, arguments)
  );
}
/**
 * @remix-run/react v2.11.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Un(e, t) {
  if (e === !1 || e === null || typeof e > 'u') throw new Error(t);
}
/**
 * @remix-run/react v2.11.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ async function Wh(e, t) {
  if (e.id in t) return t[e.id];
  try {
    let n = await import(e.module);
    return (t[e.id] = n), n;
  } catch (n) {
    return (
      console.error(
        `Error loading route module \`${e.module}\`, reloading page...`
      ),
      console.error(n),
      window.__remixContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
/**
 * @remix-run/react v2.11.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function g0(e, t, n) {
  let r = e
      .map((o) => {
        var i;
        let a = t[o.route.id],
          u = n.routes[o.route.id];
        return [
          u.css ? u.css.map((s) => ({ rel: 'stylesheet', href: s })) : [],
          (a == null || (i = a.links) === null || i === void 0
            ? void 0
            : i.call(a)) || [],
        ];
      })
      .flat(2),
    l = _0(e, n);
  return Qh(r, l);
}
async function Kh(e, t) {
  var n, r;
  if ((!e.css && !t.links) || !C0()) return;
  let l = [
    ((n = e.css) === null || n === void 0
      ? void 0
      : n.map((a) => ({ rel: 'stylesheet', href: a }))) ?? [],
    ((r = t.links) === null || r === void 0 ? void 0 : r.call(t)) ?? [],
  ].flat(1);
  if (l.length === 0) return;
  let o = [];
  for (let a of l)
    !ns(a) &&
      a.rel === 'stylesheet' &&
      o.push({ ...a, rel: 'preload', as: 'style' });
  let i = o.filter(
    (a) =>
      (!a.media || window.matchMedia(a.media).matches) &&
      !document.querySelector(`link[rel="stylesheet"][href="${a.href}"]`)
  );
  await Promise.all(i.map(w0));
}
async function w0(e) {
  return new Promise((t) => {
    let n = document.createElement('link');
    Object.assign(n, e);
    function r() {
      document.head.contains(n) && document.head.removeChild(n);
    }
    (n.onload = () => {
      r(), t();
    }),
      (n.onerror = () => {
        r(), t();
      }),
      document.head.appendChild(n);
  });
}
function ns(e) {
  return e != null && typeof e.page == 'string';
}
function S0(e) {
  return e == null
    ? !1
    : e.href == null
      ? e.rel === 'preload' &&
        typeof e.imageSrcSet == 'string' &&
        typeof e.imageSizes == 'string'
      : typeof e.rel == 'string' && typeof e.href == 'string';
}
async function E0(e, t, n) {
  let r = await Promise.all(
    e.map(async (l) => {
      let o = await Wh(t.routes[l.route.id], n);
      return o.links ? o.links() : [];
    })
  );
  return Qh(
    r
      .flat(1)
      .filter(S0)
      .filter((l) => l.rel === 'stylesheet' || l.rel === 'preload')
      .map((l) =>
        l.rel === 'stylesheet'
          ? { ...l, rel: 'prefetch', as: 'style' }
          : { ...l, rel: 'prefetch' }
      )
  );
}
function bc(e, t, n, r, l, o) {
  let i = Yh(e),
    a = (f, c) => (n[c] ? f.route.id !== n[c].route.id : !0),
    u = (f, c) => {
      var d;
      return (
        n[c].pathname !== f.pathname ||
        (((d = n[c].route.path) === null || d === void 0
          ? void 0
          : d.endsWith('*')) &&
          n[c].params['*'] !== f.params['*'])
      );
    };
  return o === 'data' && l.search !== i.search
    ? t.filter((f, c) => {
        if (!r.routes[f.route.id].hasLoader) return !1;
        if (a(f, c) || u(f, c)) return !0;
        if (f.route.shouldRevalidate) {
          var E;
          let w = f.route.shouldRevalidate({
            currentUrl: new URL(l.pathname + l.search + l.hash, window.origin),
            currentParams:
              ((E = n[0]) === null || E === void 0 ? void 0 : E.params) || {},
            nextUrl: new URL(e, window.origin),
            nextParams: f.params,
            defaultShouldRevalidate: !0,
          });
          if (typeof w == 'boolean') return w;
        }
        return !0;
      })
    : t.filter((f, c) => {
        let d = r.routes[f.route.id];
        return (o === 'assets' || d.hasLoader) && (a(f, c) || u(f, c));
      });
}
function x0(e, t, n) {
  let r = Yh(e);
  return rs(
    t
      .filter(
        (l) =>
          n.routes[l.route.id].hasLoader &&
          !n.routes[l.route.id].hasClientLoader
      )
      .map((l) => {
        let { pathname: o, search: i } = r,
          a = new URLSearchParams(i);
        return a.set('_data', l.route.id), `${o}?${a}`;
      })
  );
}
function k0(e, t) {
  return rs(
    e
      .map((n) => {
        let r = t.routes[n.route.id],
          l = [r.module];
        return r.imports && (l = l.concat(r.imports)), l;
      })
      .flat(1)
  );
}
function _0(e, t) {
  return rs(
    e
      .map((n) => {
        let r = t.routes[n.route.id],
          l = [r.module];
        return r.imports && (l = l.concat(r.imports)), l;
      })
      .flat(1)
  );
}
function rs(e) {
  return [...new Set(e)];
}
function R0(e) {
  let t = {},
    n = Object.keys(e).sort();
  for (let r of n) t[r] = e[r];
  return t;
}
function Qh(e, t) {
  let n = new Set(),
    r = new Set(t);
  return e.reduce((l, o) => {
    if (t && !ns(o) && o.as === 'script' && o.href && r.has(o.href)) return l;
    let a = JSON.stringify(R0(o));
    return n.has(a) || (n.add(a), l.push({ key: a, link: o })), l;
  }, []);
}
function Yh(e) {
  let t = Yt(e);
  return t.search === void 0 && (t.search = ''), t;
}
let lo;
function C0() {
  if (lo !== void 0) return lo;
  let e = document.createElement('link');
  return (lo = e.relList.supports('preload')), (e = null), lo;
}
/**
 * @remix-run/react v2.11.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ const P0 = {
    '&': '\\u0026',
    '>': '\\u003e',
    '<': '\\u003c',
    '\u2028': '\\u2028',
    '\u2029': '\\u2029',
  },
  L0 = /[&><\u2028\u2029]/g;
function oo(e) {
  return e.replace(L0, (t) => P0[t]);
}
function ef(e) {
  return { __html: e };
}
/**
 * @remix-run/react v2.11.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function T0(e) {
  return e.headers.get('X-Remix-Catch') != null;
}
function N0(e) {
  return e.headers.get('X-Remix-Error') != null;
}
function D0(e) {
  return (
    ls(e) &&
    e.status >= 400 &&
    e.headers.get('X-Remix-Error') == null &&
    e.headers.get('X-Remix-Catch') == null &&
    e.headers.get('X-Remix-Response') == null
  );
}
function O0(e) {
  return e.headers.get('X-Remix-Redirect') != null;
}
function M0(e) {
  var t;
  return !!(
    (t = e.headers.get('Content-Type')) !== null &&
    t !== void 0 &&
    t.match(/text\/remix-deferred/)
  );
}
function ls(e) {
  return (
    e != null &&
    typeof e.status == 'number' &&
    typeof e.statusText == 'string' &&
    typeof e.headers == 'object' &&
    typeof e.body < 'u'
  );
}
function z0(e) {
  let t = e;
  return (
    t &&
    typeof t == 'object' &&
    typeof t.data == 'object' &&
    typeof t.subscribe == 'function' &&
    typeof t.cancel == 'function' &&
    typeof t.resolveData == 'function'
  );
}
async function Xh(e, t, n = 0) {
  let r = new URL(e.url);
  r.searchParams.set('_data', t),
    n > 0 && (await new Promise((a) => setTimeout(a, 5 ** n * 10)));
  let l = await os(e),
    o = window.__remixRevalidation,
    i = await fetch(r.href, l).catch((a) => {
      if (
        typeof o == 'number' &&
        o === window.__remixRevalidation &&
        (a == null ? void 0 : a.name) === 'TypeError' &&
        n < 3
      )
        return Xh(e, t, n + 1);
      throw a;
    });
  if (N0(i)) {
    let a = await i.json(),
      u = new Error(a.message);
    return (u.stack = a.stack), u;
  }
  if (D0(i)) {
    let a = await i.text(),
      u = new Error(a);
    return (u.stack = void 0), u;
  }
  return i;
}
async function os(e) {
  let t = { signal: e.signal };
  if (e.method !== 'GET') {
    t.method = e.method;
    let n = e.headers.get('Content-Type');
    n && /\bapplication\/json\b/.test(n)
      ? ((t.headers = { 'Content-Type': n }),
        (t.body = JSON.stringify(await e.json())))
      : n && /\btext\/plain\b/.test(n)
        ? ((t.headers = { 'Content-Type': n }), (t.body = await e.text()))
        : n && /\bapplication\/x-www-form-urlencoded\b/.test(n)
          ? (t.body = new URLSearchParams(await e.text()))
          : (t.body = await e.formData());
  }
  return t;
}
const F0 = '__deferred_promise:';
async function j0(e) {
  if (!e)
    throw new Error('parseDeferredReadableStream requires stream argument');
  let t,
    n = {};
  try {
    let r = I0(e),
      o = (await r.next()).value;
    if (!o) throw new Error('no critical data');
    let i = JSON.parse(o);
    if (typeof i == 'object' && i !== null)
      for (let [a, u] of Object.entries(i))
        typeof u != 'string' ||
          !u.startsWith(F0) ||
          ((t = t || {}),
          (t[a] = new Promise((s, f) => {
            n[a] = {
              resolve: (c) => {
                s(c), delete n[a];
              },
              reject: (c) => {
                f(c), delete n[a];
              },
            };
          })));
    return (
      (async () => {
        try {
          for await (let a of r) {
            let [u, ...s] = a.split(':'),
              f = s.join(':'),
              c = JSON.parse(f);
            if (u === 'data')
              for (let [d, E] of Object.entries(c)) n[d] && n[d].resolve(E);
            else if (u === 'error')
              for (let [d, E] of Object.entries(c)) {
                let w = new Error(E.message);
                (w.stack = E.stack), n[d] && n[d].reject(w);
              }
          }
          for (let [a, u] of Object.entries(n))
            u.reject(new Xo(`Deferred ${a} will never be resolved`));
        } catch (a) {
          for (let u of Object.values(n)) u.reject(a);
        }
      })(),
      new Ey({ ...i, ...t })
    );
  } catch (r) {
    for (let l of Object.values(n)) l.reject(r);
    throw r;
  }
}
async function* I0(e) {
  let t = e.getReader(),
    n = [],
    r = [],
    l = !1,
    o = new TextEncoder(),
    i = new TextDecoder(),
    a = async () => {
      if (r.length > 0) return r.shift();
      for (; !l && r.length === 0; ) {
        let s = await t.read();
        if (s.done) {
          l = !0;
          break;
        }
        n.push(s.value);
        try {
          let c = i.decode(tf(...n)).split(`

`);
          if (
            (c.length >= 2 &&
              (r.push(...c.slice(0, -1)),
              (n = [
                o.encode(
                  c.slice(-1).join(`

`)
                ),
              ])),
            r.length > 0)
          )
            break;
        } catch {
          continue;
        }
      }
      return (
        r.length > 0 ||
          (n.length > 0 &&
            ((r = i
              .decode(tf(...n))
              .split(
                `

`
              )
              .filter((f) => f)),
            (n = []))),
        r.shift()
      );
    },
    u = await a();
  for (; u; ) yield u, (u = await a());
}
function tf(...e) {
  let t = new Uint8Array(e.reduce((r, l) => r + l.length, 0)),
    n = 0;
  for (let r of e) t.set(r, n), (n += r.length);
  return t;
}
/**
 * @remix-run/react v2.11.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function S1(e, t) {
  return async ({ request: n, matches: r }) =>
    n.method !== 'GET' ? U0(n, r) : A0(e, t, n, r);
}
function U0(e, t) {
  return Promise.all(
    t.map(async (n) => {
      let r,
        l = await n.resolve(async (o) => ({
          type: 'data',
          result: await o(async () => {
            let a = is(e.url),
              u = await os(e),
              { data: s, status: f } = await Za(a, u);
            return (r = f), qa(s, n.route.id);
          }),
        }));
      return ls(l.result) || _r(l.result)
        ? l
        : { type: l.type, result: Sy(l.result, r) };
    })
  );
}
function A0(e, t, n, r) {
  let l;
  return Promise.all(
    r.map(async (o) =>
      o.resolve(async (i) => {
        let a,
          u = $0(is(n.url)),
          s = await os(n);
        return (
          e.routes[o.route.id].hasClientLoader
            ? (a = await i(async () => {
                u.searchParams.set('_routes', o.route.id);
                let { data: f } = await Za(u, s);
                return nf(f, o.route.id);
              }))
            : (a = await i(async () => {
                l ||
                  ((u = Jh(
                    e,
                    t,
                    r.map((c) => c.route),
                    r.filter((c) => c.shouldLoad).map((c) => c.route),
                    u
                  )),
                  (l = Za(u, s).then(({ data: c }) => c)));
                let f = await l;
                return nf(f, o.route.id);
              })),
          { type: 'data', result: a }
        );
      })
    )
  );
}
function $0(e) {
  let t = e.searchParams.getAll('index');
  e.searchParams.delete('index');
  let n = [];
  for (let r of t) r && n.push(r);
  for (let r of n) e.searchParams.append('index', r);
  return e;
}
function Jh(e, t, n, r, l) {
  let o = (s) => s.filter((f) => e.routes[f].hasLoader).join(',');
  if (
    !n.some((s) => {
      var f, c;
      return (
        ((f = t[s.id]) === null || f === void 0
          ? void 0
          : f.shouldRevalidate) ||
        ((c = e.routes[s.id]) === null || c === void 0
          ? void 0
          : c.hasClientLoader)
      );
    })
  )
    return l;
  let a = o(n.map((s) => s.id)),
    u = o(
      r
        .filter((s) => {
          var f;
          return !(
            (f = e.routes[s.id]) !== null &&
            f !== void 0 &&
            f.hasClientLoader
          );
        })
        .map((s) => s.id)
    );
  return a !== u && l.searchParams.set('_routes', u), l;
}
function is(e) {
  let t = typeof e == 'string' ? new URL(e, window.location.origin) : e;
  return (
    t.pathname === '/'
      ? (t.pathname = '_root.data')
      : (t.pathname = `${t.pathname.replace(/\/$/, '')}.data`),
    t
  );
}
async function Za(e, t) {
  let n = await fetch(e, t);
  Un(n.body, 'No response body to decode');
  try {
    let r = await B0(n.body, window);
    return { status: n.status, data: r.value };
  } catch (r) {
    throw (
      (console.error(r),
      new Error(
        `Unable to decode turbo-stream response from URL: ${e.toString()}`
      ))
    );
  }
}
function B0(e, t) {
  return m0(e, {
    plugins: [
      (n, ...r) => {
        if (n === 'SanitizedError') {
          let [l, o, i] = r,
            a = Error;
          l && l in t && typeof t[l] == 'function' && (a = t[l]);
          let u = new a(o);
          return (u.stack = i), { value: u };
        }
        if (n === 'ErrorResponse') {
          let [l, o, i] = r;
          return { value: new jn(o, i, l) };
        }
        if (n === 'SingleFetchRedirect') return { value: { [Vh]: r[0] } };
      },
    ],
  });
}
function nf(e, t) {
  let n = e[Vh];
  return n ? qa(n, t) : e[t] !== void 0 ? qa(e[t], t) : null;
}
function qa(e, t) {
  if ('error' in e) throw e.error;
  if ('redirect' in e) {
    let n = {};
    return (
      e.revalidate && (n['X-Remix-Revalidate'] = 'yes'),
      e.reload && (n['X-Remix-Reload-Document'] = 'yes'),
      e.replace && (n['X-Remix-Replace'] = 'yes'),
      Rh(e.redirect, { status: e.status, headers: n })
    );
  } else {
    if ('data' in e) return e.data;
    throw new Error(`No response found for routeId "${t}"`);
  }
}
/**
 * @remix-run/react v2.11.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ class E1 extends v.Component {
  constructor(t) {
    super(t), (this.state = { error: t.error || null, location: t.location });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location
      ? { error: t.error || null, location: t.location }
      : { error: t.error || n.error, location: n.location };
  }
  render() {
    return this.state.error
      ? v.createElement(Gh, { error: this.state.error, isOutsideRemixApp: !0 })
      : this.props.children;
  }
}
function Gh({ error: e, isOutsideRemixApp: t }) {
  console.error(e);
  let n = v.createElement('script', {
    dangerouslySetInnerHTML: {
      __html: `
        console.log(
          "💿 Hey developer 👋. You can provide a way better UX than this when your app throws errors. Check out https://remix.run/guides/errors for more information."
        );
      `,
    },
  });
  if (_r(e))
    return v.createElement(
      ba,
      { title: 'Unhandled Thrown Response!' },
      v.createElement(
        'h1',
        { style: { fontSize: '24px' } },
        e.status,
        ' ',
        e.statusText
      ),
      n
    );
  let r;
  if (e instanceof Error) r = e;
  else {
    let l =
      e == null
        ? 'Unknown Error'
        : typeof e == 'object' && 'toString' in e
          ? e.toString()
          : JSON.stringify(e);
    r = new Error(l);
  }
  return v.createElement(
    ba,
    { title: 'Application Error!', isOutsideRemixApp: t },
    v.createElement('h1', { style: { fontSize: '24px' } }, 'Application Error'),
    v.createElement(
      'pre',
      {
        style: {
          padding: '2rem',
          background: 'hsla(10, 50%, 50%, 0.1)',
          color: 'red',
          overflow: 'auto',
        },
      },
      r.stack
    ),
    n
  );
}
function ba({ title: e, renderScripts: t, isOutsideRemixApp: n, children: r }) {
  var l;
  let { routeModules: o } = Cr();
  return (l = o.root) !== null && l !== void 0 && l.Layout && !n
    ? r
    : v.createElement(
        'html',
        { lang: 'en' },
        v.createElement(
          'head',
          null,
          v.createElement('meta', { charSet: 'utf-8' }),
          v.createElement('meta', {
            name: 'viewport',
            content: 'width=device-width,initial-scale=1,viewport-fit=cover',
          }),
          v.createElement('title', null, e)
        ),
        v.createElement(
          'body',
          null,
          v.createElement(
            'main',
            { style: { fontFamily: 'system-ui, sans-serif', padding: '2rem' } },
            r,
            t ? v.createElement(i1, null) : null
          )
        )
      );
}
/**
 * @remix-run/react v2.11.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function H0() {
  return v.createElement(
    ba,
    { title: 'Loading...', renderScripts: !0 },
    v.createElement('script', {
      dangerouslySetInnerHTML: {
        __html: `
              console.log(
                "💿 Hey developer 👋. You can provide a way better UX than this " +
                "when your app is running \`clientLoader\` functions on hydration. " +
                "Check out https://remix.run/route/hydrate-fallback for more information."
              );
            `,
      },
    })
  );
}
/**
 * @remix-run/react v2.11.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Zh(e) {
  let t = {};
  return (
    Object.values(e).forEach((n) => {
      let r = n.parentId || '';
      t[r] || (t[r] = []), t[r].push(n);
    }),
    t
  );
}
function V0(e, t, n) {
  let r = qh(t),
    l =
      t.HydrateFallback && (!n || e.id === 'root')
        ? t.HydrateFallback
        : e.id === 'root'
          ? H0
          : void 0,
    o = t.ErrorBoundary
      ? t.ErrorBoundary
      : e.id === 'root'
        ? () => v.createElement(Gh, { error: Ih() })
        : void 0;
  return e.id === 'root' && t.Layout
    ? {
        ...(r
          ? {
              element: v.createElement(
                t.Layout,
                null,
                v.createElement(r, null)
              ),
            }
          : { Component: r }),
        ...(o
          ? {
              errorElement: v.createElement(
                t.Layout,
                null,
                v.createElement(o, null)
              ),
            }
          : { ErrorBoundary: o }),
        ...(l
          ? {
              hydrateFallbackElement: v.createElement(
                t.Layout,
                null,
                v.createElement(l, null)
              ),
            }
          : { HydrateFallback: l }),
      }
    : { Component: r, ErrorBoundary: o, HydrateFallback: l };
}
function x1(e, t, n, r, l, o) {
  return as(t, n, r, l, o, '', Zh(t), e);
}
function io(e, t, n) {
  if (n) {
    let i = `You cannot call ${e === 'action' ? 'serverAction()' : 'serverLoader()'} in SPA Mode (routeId: "${t.id}")`;
    throw (console.error(i), new jn(400, 'Bad Request', new Error(i), !0));
  }
  let l = `You are trying to call ${e === 'action' ? 'serverAction()' : 'serverLoader()'} on a route that does not have a server ${e} (routeId: "${t.id}")`;
  if ((e === 'loader' && !t.hasLoader) || (e === 'action' && !t.hasAction))
    throw (console.error(l), new jn(400, 'Bad Request', new Error(l), !0));
}
function bi(e, t) {
  let n = e === 'clientAction' ? 'a' : 'an',
    r = `Route "${t}" does not have ${n} ${e}, but you are trying to submit to it. To fix this, please add ${n} \`${e}\` function to the route`;
  throw (console.error(r), new jn(405, 'Method Not Allowed', new Error(r), !0));
}
function as(e, t, n, r, l, o = '', i = Zh(e), a) {
  return (i[o] || []).map((u) => {
    let s = t[u.id];
    async function f(m, k, L) {
      if (typeof L == 'function') return await L();
      let y = await K0(m, u);
      return k ? Q0(y) : y;
    }
    function c(m, k, L) {
      return u.hasLoader ? f(m, k, L) : Promise.resolve(null);
    }
    function d(m, k, L) {
      if (!u.hasAction) throw bi('action', u.id);
      return f(m, k, L);
    }
    async function E(m) {
      let k = t[u.id],
        L = k ? Kh(u, k) : Promise.resolve();
      try {
        return m();
      } finally {
        await L;
      }
    }
    let w = { id: u.id, index: u.index, path: u.path };
    if (s) {
      var S, C, p;
      Object.assign(w, {
        ...w,
        ...V0(u, s, l),
        handle: s.handle,
        shouldRevalidate: a
          ? rf(u.id, s.shouldRevalidate, a)
          : s.shouldRevalidate,
      });
      let m =
          n == null || (S = n.loaderData) === null || S === void 0
            ? void 0
            : S[u.id],
        k =
          n == null || (C = n.errors) === null || C === void 0
            ? void 0
            : C[u.id],
        L =
          a == null &&
          (((p = s.clientLoader) === null || p === void 0
            ? void 0
            : p.hydrate) === !0 ||
            !u.hasLoader);
      (w.loader = async ({ request: y, params: T }, P) => {
        try {
          return await E(
            async () => (
              Un(s, 'No `routeModule` available for critical-route loader'),
              s.clientLoader
                ? s.clientLoader({
                    request: y,
                    params: T,
                    async serverLoader() {
                      if ((io('loader', u, l), L)) {
                        if (k !== void 0) throw k;
                        return m;
                      }
                      return c(y, !0, P);
                    },
                  })
                : l
                  ? null
                  : c(y, !1, P)
            )
          );
        } finally {
          L = !1;
        }
      }),
        (w.loader.hydrate = X0(u, s, l)),
        (w.action = ({ request: y, params: T }, P) =>
          E(async () => {
            if (
              (Un(s, 'No `routeModule` available for critical-route action'),
              !s.clientAction)
            ) {
              if (l) throw bi('clientAction', u.id);
              return d(y, !1, P);
            }
            return s.clientAction({
              request: y,
              params: T,
              async serverAction() {
                return io('action', u, l), d(y, !0, P);
              },
            });
          }));
    } else
      u.hasClientLoader ||
        (w.loader = ({ request: m }, k) =>
          E(() => (l ? Promise.resolve(null) : c(m, !1, k)))),
        u.hasClientAction ||
          (w.action = ({ request: m }, k) =>
            E(() => {
              if (l) throw bi('clientAction', u.id);
              return d(m, !1, k);
            })),
        (w.lazy = async () => {
          let m = await W0(u, t),
            k = { ...m };
          if (m.clientLoader) {
            let L = m.clientLoader;
            k.loader = (y, T) =>
              L({
                ...y,
                async serverLoader() {
                  return io('loader', u, l), c(y.request, !0, T);
                },
              });
          }
          if (m.clientAction) {
            let L = m.clientAction;
            k.action = (y, T) =>
              L({
                ...y,
                async serverAction() {
                  return io('action', u, l), d(y.request, !0, T);
                },
              });
          }
          return (
            a && (k.shouldRevalidate = rf(u.id, m.shouldRevalidate, a)),
            {
              ...(k.loader ? { loader: k.loader } : {}),
              ...(k.action ? { action: k.action } : {}),
              hasErrorBoundary: k.hasErrorBoundary,
              shouldRevalidate: k.shouldRevalidate,
              handle: k.handle,
              Component: k.Component,
              ErrorBoundary: k.ErrorBoundary,
            }
          );
        });
    let h = as(e, t, n, r, l, u.id, i, a);
    return h.length > 0 && (w.children = h), w;
  });
}
function rf(e, t, n) {
  let r = !1;
  return (l) =>
    r ? (t ? t(l) : l.defaultShouldRevalidate) : ((r = !0), n.has(e));
}
async function W0(e, t) {
  let n = await Wh(e, t);
  return (
    await Kh(e, n),
    {
      Component: qh(n),
      ErrorBoundary: n.ErrorBoundary,
      clientAction: n.clientAction,
      clientLoader: n.clientLoader,
      handle: n.handle,
      links: n.links,
      meta: n.meta,
      shouldRevalidate: n.shouldRevalidate,
    }
  );
}
async function K0(e, t) {
  let n = await Xh(e, t.id);
  if (n instanceof Error) throw n;
  if (O0(n)) throw Y0(n);
  if (T0(n)) throw n;
  return M0(n) && n.body ? await j0(n.body) : n;
}
function Q0(e) {
  if (z0(e)) return e.data;
  if (ls(e)) {
    let t = e.headers.get('Content-Type');
    return t && /\bapplication\/json\b/.test(t) ? e.json() : e.text();
  }
  return e;
}
function Y0(e) {
  let t = parseInt(e.headers.get('X-Remix-Status'), 10) || 302,
    n = e.headers.get('X-Remix-Redirect'),
    r = {},
    l = e.headers.get('X-Remix-Revalidate');
  l && (r['X-Remix-Revalidate'] = l);
  let o = e.headers.get('X-Remix-Reload-Document');
  o && (r['X-Remix-Reload-Document'] = o);
  let i = e.headers.get('X-Remix-Replace');
  return i && (r['X-Remix-Replace'] = i), Rh(n, { status: t, headers: r });
}
function qh(e) {
  if (e.default == null) return;
  if (!(typeof e.default == 'object' && Object.keys(e.default).length === 0))
    return e.default;
}
function X0(e, t, n) {
  return (
    (n && e.id !== 'root') ||
    (t.clientLoader != null &&
      (t.clientLoader.hydrate === !0 || e.hasLoader !== !0))
  );
}
/**
 * @remix-run/react v2.11.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ const J0 = 7680;
let Ln = null;
function us(e, t) {
  return e.unstable_lazyRouteDiscovery === !0 && !t;
}
function G0(e, t) {
  let n = new Set(t.state.matches.map((i) => i.route.id)),
    r = t.state.location.pathname.split('/').filter(Boolean),
    l = ['/'];
  for (r.pop(); r.length > 0; ) l.push(`/${r.join('/')}`), r.pop();
  l.forEach((i) => {
    let a = It(t.routes, i, t.basename);
    a && a.forEach((u) => n.add(u.route.id));
  });
  let o = [...n].reduce((i, a) => Object.assign(i, { [a]: e.routes[a] }), {});
  return { ...e, routes: o };
}
function k1(e, t, n, r, l) {
  return us(n, r)
    ? ((Ln = {
        nextPaths: new Set(),
        knownGoodPaths: new Set(),
        known404Paths: new Set(),
      }),
      {
        enabled: !0,
        patchRoutesOnMiss: async ({ path: o, patch: i }) => {
          Ln.known404Paths.has(o) ||
            Ln.knownGoodPaths.has(o) ||
            (await bh([o], Ln, e, t, n, r, l, i));
        },
      })
    : { enabled: !1 };
}
function _1(e, t, n, r, l) {
  v.useEffect(() => {
    var o;
    if (
      !us(r, l) ||
      ((o = navigator.connection) === null || o === void 0
        ? void 0
        : o.saveData) === !0
    )
      return;
    function i(c) {
      let d =
        c.tagName === 'FORM'
          ? c.getAttribute('action')
          : c.getAttribute('href');
      if (!d) return;
      let E = new URL(d, window.location.origin),
        { knownGoodPaths: w, known404Paths: S, nextPaths: C } = Ln;
      w.has(E.pathname) || S.has(E.pathname) || C.add(E.pathname);
    }
    async function a() {
      let c = Z0(Ln);
      if (c.length !== 0)
        try {
          await bh(c, Ln, t, n, r, l, e.basename, e.patchRoutes);
        } catch (d) {
          console.error('Failed to fetch manifest patches', d);
        }
    }
    document.body
      .querySelectorAll('a[data-discover], form[data-discover]')
      .forEach((c) => i(c)),
      a();
    let u = q0(a, 100);
    function s(c) {
      return c.nodeType === Node.ELEMENT_NODE;
    }
    let f = new MutationObserver((c) => {
      let d = new Set();
      c.forEach((E) => {
        [E.target, ...E.addedNodes].forEach((w) => {
          s(w) &&
            (((w.tagName === 'A' && w.getAttribute('data-discover')) ||
              (w.tagName === 'FORM' && w.getAttribute('data-discover'))) &&
              d.add(w),
            w.tagName !== 'A' &&
              w
                .querySelectorAll('a[data-discover], form[data-discover]')
                .forEach((S) => d.add(S)));
        });
      }),
        d.forEach((E) => i(E)),
        u();
    });
    return (
      f.observe(document.documentElement, {
        subtree: !0,
        childList: !0,
        attributes: !0,
        attributeFilter: ['data-discover', 'href', 'action'],
      }),
      () => f.disconnect()
    );
  }, [r, l, t, n, e]);
}
function Z0(e, t) {
  let { knownGoodPaths: n, known404Paths: r, nextPaths: l } = e;
  return Array.from(l.keys()).filter((o) =>
    n.has(o) || r.has(o) ? (l.delete(o), !1) : !0
  );
}
async function bh(e, t, n, r, l, o, i, a) {
  let { nextPaths: u, knownGoodPaths: s, known404Paths: f } = t,
    c = `${i ?? '/'}/__manifest`.replace(/\/+/g, '/'),
    d = new URL(c, window.location.origin);
  if (
    (d.searchParams.set('version', n.version),
    e.forEach((h) => d.searchParams.append('p', h)),
    d.toString().length > J0)
  ) {
    u.clear();
    return;
  }
  let E = await fetch(d);
  if (E.ok) {
    if (E.status >= 400) throw new Error(await E.text());
  } else throw new Error(`${E.status} ${E.statusText}`);
  let w = await E.json(),
    S = new Set(Object.keys(n.routes)),
    C = Object.values(w.patches).reduce(
      (h, m) => (S.has(m.id) ? h : Object.assign(h, { [m.id]: m })),
      {}
    );
  Object.assign(n.routes, C),
    w.notFoundPaths.forEach((h) => f.add(h)),
    e.forEach((h) => s.add(h));
  let p = new Set();
  Object.values(C).forEach((h) => {
    (!h.parentId || !C[h.parentId]) && p.add(h.parentId);
  }),
    p.forEach((h) => a(h || null, as(C, r, null, l, o, h)));
}
function q0(e, t) {
  let n;
  return (...r) => {
    window.clearTimeout(n), (n = window.setTimeout(() => e(...r), t));
  };
}
/**
 * @remix-run/react v2.11.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ep() {
  let e = v.useContext(Rr);
  return (
    Un(
      e,
      'You must render this element inside a <DataRouterContext.Provider> element'
    ),
    e
  );
}
function vi() {
  let e = v.useContext(Pl);
  return (
    Un(
      e,
      'You must render this element inside a <DataRouterStateContext.Provider> element'
    ),
    e
  );
}
const tp = v.createContext(void 0);
tp.displayName = 'Remix';
function Cr() {
  let e = v.useContext(tp);
  return Un(e, 'You must render this element inside a <Remix> element'), e;
}
function np(e, t) {
  let [n, r] = v.useState(!1),
    [l, o] = v.useState(!1),
    {
      onFocus: i,
      onBlur: a,
      onMouseEnter: u,
      onMouseLeave: s,
      onTouchStart: f,
    } = t,
    c = v.useRef(null);
  v.useEffect(() => {
    if ((e === 'render' && o(!0), e === 'viewport')) {
      let w = (C) => {
          C.forEach((p) => {
            o(p.isIntersecting);
          });
        },
        S = new IntersectionObserver(w, { threshold: 0.5 });
      return (
        c.current && S.observe(c.current),
        () => {
          S.disconnect();
        }
      );
    }
  }, [e]);
  let d = () => {
      e === 'intent' && r(!0);
    },
    E = () => {
      e === 'intent' && (r(!1), o(!1));
    };
  return (
    v.useEffect(() => {
      if (n) {
        let w = setTimeout(() => {
          o(!0);
        }, 100);
        return () => {
          clearTimeout(w);
        };
      }
    }, [n]),
    [
      l,
      c,
      {
        onFocus: Br(i, d),
        onBlur: Br(a, E),
        onMouseEnter: Br(u, d),
        onMouseLeave: Br(s, E),
        onTouchStart: Br(f, d),
      },
    ]
  );
}
const ss = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
function cs(e, t, n) {
  return e === 'render' && !t && !n ? 'true' : void 0;
}
let b0 = v.forwardRef(
  ({ to: e, prefetch: t = 'none', discover: n = 'render', ...r }, l) => {
    let o = typeof e == 'string' && ss.test(e),
      i = bu(e),
      [a, u, s] = np(t, r);
    return v.createElement(
      v.Fragment,
      null,
      v.createElement(
        Bg,
        xe({}, r, s, {
          ref: rp(l, u),
          to: e,
          'data-discover': cs(n, o, r.reloadDocument),
        })
      ),
      a && !o ? v.createElement(ds, { page: i }) : null
    );
  }
);
b0.displayName = 'NavLink';
let e1 = v.forwardRef(
  ({ to: e, prefetch: t = 'none', discover: n = 'render', ...r }, l) => {
    let o = typeof e == 'string' && ss.test(e),
      i = bu(e),
      [a, u, s] = np(t, r);
    return v.createElement(
      v.Fragment,
      null,
      v.createElement(
        Ah,
        xe({}, r, s, {
          ref: rp(l, u),
          to: e,
          'data-discover': cs(n, o, r.reloadDocument),
        })
      ),
      a && !o ? v.createElement(ds, { page: i }) : null
    );
  }
);
e1.displayName = 'Link';
let t1 = v.forwardRef(({ discover: e = 'render', ...t }, n) => {
  let r = typeof t.action == 'string' && ss.test(t.action);
  return v.createElement(
    Hg,
    xe({}, t, { ref: n, 'data-discover': cs(e, r, t.reloadDocument) })
  );
});
t1.displayName = 'Form';
function Br(e, t) {
  return (n) => {
    e && e(n), n.defaultPrevented || t(n);
  };
}
function fs(e, t, n) {
  if (n && !xo) return [e[0]];
  if (t) {
    let r = e.findIndex((l) => t[l.route.id] !== void 0);
    return e.slice(0, r + 1);
  }
  return e;
}
function R1() {
  let { isSpaMode: e, manifest: t, routeModules: n, criticalCss: r } = Cr(),
    { errors: l, matches: o } = vi(),
    i = fs(o, l, e),
    a = v.useMemo(() => g0(i, n, t), [i, n, t]);
  return v.createElement(
    v.Fragment,
    null,
    r
      ? v.createElement('style', { dangerouslySetInnerHTML: { __html: r } })
      : null,
    a.map(({ key: u, link: s }) =>
      ns(s)
        ? v.createElement(ds, xe({ key: u }, s))
        : v.createElement('link', xe({ key: u }, s))
    )
  );
}
function ds({ page: e, ...t }) {
  let { router: n } = ep(),
    r = v.useMemo(() => It(n.routes, e, n.basename), [n.routes, e, n.basename]);
  return r
    ? v.createElement(r1, xe({ page: e, matches: r }, t))
    : (console.warn(`Tried to prefetch ${e} but no routes matched.`), null);
}
function n1(e) {
  let { manifest: t, routeModules: n } = Cr(),
    [r, l] = v.useState([]);
  return (
    v.useEffect(() => {
      let o = !1;
      return (
        E0(e, t, n).then((i) => {
          o || l(i);
        }),
        () => {
          o = !0;
        }
      );
    }, [e, t, n]),
    r
  );
}
function r1({ page: e, matches: t, ...n }) {
  let r = Ot(),
    { future: l, manifest: o, routeModules: i } = Cr(),
    { matches: a } = vi(),
    u = v.useMemo(() => bc(e, t, a, o, r, 'data'), [e, t, a, o, r]),
    s = v.useMemo(() => bc(e, t, a, o, r, 'assets'), [e, t, a, o, r]),
    f = v.useMemo(() => x0(e, u, o), [u, e, o]),
    c = v.useMemo(() => k0(s, o), [s, o]),
    d = n1(s),
    E = null;
  if (!l.unstable_singleFetch)
    E = f.map((w) =>
      v.createElement(
        'link',
        xe({ key: w, rel: 'prefetch', as: 'fetch', href: w }, n)
      )
    );
  else if (u.length > 0) {
    let w = Jh(
      o,
      i,
      t.map((S) => S.route),
      u.map((S) => S.route),
      is(e)
    );
    w.searchParams.get('_routes') !== '' &&
      (E = v.createElement(
        'link',
        xe(
          {
            key: w.pathname + w.search,
            rel: 'prefetch',
            as: 'fetch',
            href: w.pathname + w.search,
          },
          n
        )
      ));
  }
  return v.createElement(
    v.Fragment,
    null,
    E,
    c.map((w) =>
      v.createElement('link', xe({ key: w, rel: 'modulepreload', href: w }, n))
    ),
    d.map(({ key: w, link: S }) => v.createElement('link', xe({ key: w }, S)))
  );
}
function C1() {
  let { isSpaMode: e, routeModules: t } = Cr(),
    { errors: n, matches: r, loaderData: l } = vi(),
    o = Ot(),
    i = fs(r, n, e),
    a = null;
  n && (a = n[i[i.length - 1].route.id]);
  let u = [],
    s = null,
    f = [];
  for (let c = 0; c < i.length; c++) {
    let d = i[c],
      E = d.route.id,
      w = l[E],
      S = d.params,
      C = t[E],
      p = [],
      h = {
        id: E,
        data: w,
        meta: [],
        params: d.params,
        pathname: d.pathname,
        handle: d.route.handle,
        error: a,
      };
    if (
      ((f[c] = h),
      C != null && C.meta
        ? (p =
            typeof C.meta == 'function'
              ? C.meta({
                  data: w,
                  params: S,
                  location: o,
                  matches: f,
                  error: a,
                })
              : Array.isArray(C.meta)
                ? [...C.meta]
                : C.meta)
        : s && (p = [...s]),
      (p = p || []),
      !Array.isArray(p))
    )
      throw new Error(
        'The route at ' +
          d.route.path +
          ` returns an invalid value. All route meta functions must return an array of meta objects.

To reference the meta function API, see https://remix.run/route/meta`
      );
    (h.meta = p), (f[c] = h), (u = [...p]), (s = u);
  }
  return v.createElement(
    v.Fragment,
    null,
    u.flat().map((c) => {
      if (!c) return null;
      if ('tagName' in c) {
        let { tagName: d, ...E } = c;
        if (!l1(d))
          return (
            console.warn(
              `A meta object uses an invalid tagName: ${d}. Expected either 'link' or 'meta'`
            ),
            null
          );
        let w = d;
        return v.createElement(w, xe({ key: JSON.stringify(E) }, E));
      }
      if ('title' in c)
        return v.createElement('title', { key: 'title' }, String(c.title));
      if (
        ('charset' in c &&
          (c.charSet ?? (c.charSet = c.charset), delete c.charset),
        'charSet' in c && c.charSet != null)
      )
        return typeof c.charSet == 'string'
          ? v.createElement('meta', { key: 'charSet', charSet: c.charSet })
          : null;
      if ('script:ld+json' in c)
        try {
          let d = JSON.stringify(c['script:ld+json']);
          return v.createElement('script', {
            key: `script:ld+json:${d}`,
            type: 'application/ld+json',
            dangerouslySetInnerHTML: { __html: d },
          });
        } catch {
          return null;
        }
      return v.createElement('meta', xe({ key: JSON.stringify(c) }, c));
    })
  );
}
function l1(e) {
  return typeof e == 'string' && /^(meta|link)$/.test(e);
}
function o1(e) {
  return v.createElement(mg, e);
}
let xo = !1;
function i1(e) {
  let {
      manifest: t,
      serverHandoffString: n,
      abortDelay: r,
      serializeError: l,
      isSpaMode: o,
      future: i,
      renderMeta: a,
    } = Cr(),
    { router: u, static: s, staticContext: f } = ep(),
    { matches: c } = vi(),
    d = us(i, o);
  a && (a.didRenderScripts = !0);
  let E = fs(c, null, o);
  v.useEffect(() => {
    xo = !0;
  }, []);
  let w = (y, T) => {
      let P;
      return (
        l && T instanceof Error ? (P = l(T)) : (P = T),
        `${JSON.stringify(y)}:__remixContext.p(!1, ${oo(JSON.stringify(P))})`
      );
    },
    S = (y, T, P) => {
      let O;
      try {
        O = JSON.stringify(P);
      } catch (M) {
        return w(T, M);
      }
      return `${JSON.stringify(T)}:__remixContext.p(${oo(O)})`;
    },
    C = (y, T, P) => {
      let O;
      return (
        l && P instanceof Error ? (O = l(P)) : (O = P),
        `__remixContext.r(${JSON.stringify(y)}, ${JSON.stringify(T)}, !1, ${oo(JSON.stringify(O))})`
      );
    },
    p = (y, T, P) => {
      let O;
      try {
        O = JSON.stringify(P);
      } catch (M) {
        return C(y, T, M);
      }
      return `__remixContext.r(${JSON.stringify(y)}, ${JSON.stringify(T)}, ${oo(O)})`;
    },
    h = [],
    m = v.useMemo(() => {
      var y;
      let T = i.unstable_singleFetch
          ? 'window.__remixContext.stream = new ReadableStream({start(controller){window.__remixContext.streamController = controller;}}).pipeThrough(new TextEncoderStream());'
          : '',
        P = f ? `window.__remixContext = ${n};${T}` : ' ',
        O = i.unstable_singleFetch || f == null ? void 0 : f.activeDeferreds;
      P += O
        ? [
            '__remixContext.p = function(v,e,p,x) {',
            "  if (typeof e !== 'undefined') {",
            `    x=new Error("Unexpected Server Error");
    x.stack=undefined;`,
            '    p=Promise.reject(x);',
            '  } else {',
            '    p=Promise.resolve(v);',
            '  }',
            '  return p;',
            '};',
            '__remixContext.n = function(i,k) {',
            '  __remixContext.t = __remixContext.t || {};',
            '  __remixContext.t[i] = __remixContext.t[i] || {};',
            '  let p = new Promise((r, e) => {__remixContext.t[i][k] = {r:(v)=>{r(v);},e:(v)=>{e(v);}};});',
            typeof r == 'number'
              ? `setTimeout(() => {if(typeof p._error !== "undefined" || typeof p._data !== "undefined"){return;} __remixContext.t[i][k].e(new Error("Server timeout."))}, ${r});`
              : '',
            '  return p;',
            '};',
            '__remixContext.r = function(i,k,v,e,p,x) {',
            '  p = __remixContext.t[i][k];',
            "  if (typeof e !== 'undefined') {",
            `    x=new Error("Unexpected Server Error");
    x.stack=undefined;`,
            '    p.e(x);',
            '  } else {',
            '    p.r(v);',
            '  }',
            '};',
          ].join(`
`) +
          Object.entries(O).map(([V, X]) => {
            let ge = new Set(X.pendingKeys),
              ee = X.deferredKeys.map((ke) => {
                if (ge.has(ke))
                  return (
                    h.push(
                      v.createElement(lf, {
                        key: `${V} | ${ke}`,
                        deferredData: X,
                        routeId: V,
                        dataKey: ke,
                        scriptProps: e,
                        serializeData: p,
                        serializeError: C,
                      })
                    ),
                    `${JSON.stringify(ke)}:__remixContext.n(${JSON.stringify(V)}, ${JSON.stringify(ke)})`
                  );
                {
                  let rt = X.data[ke];
                  return typeof rt._error < 'u'
                    ? w(ke, rt._error)
                    : S(V, ke, rt._data);
                }
              }).join(`,
`);
            return `Object.assign(__remixContext.state.loaderData[${JSON.stringify(V)}], {${ee}});`;
          }).join(`
`) +
          (h.length > 0 ? `__remixContext.a=${h.length};` : '')
        : '';
      let M = s
        ? `${(y = t.hmr) !== null && y !== void 0 && y.runtime ? `import ${JSON.stringify(t.hmr.runtime)};` : ''}${d ? '' : `import ${JSON.stringify(t.url)}`};
${E.map(
  (V, X) =>
    `import * as route${X} from ${JSON.stringify(t.routes[V.route.id].module)};`
).join(`
`)}
${d ? `window.__remixManifest = ${JSON.stringify(G0(t, u), null, 2)};` : ''}
window.__remixRouteModules = {${E.map((V, X) => `${JSON.stringify(V.route.id)}:route${X}`).join(',')}};

import(${JSON.stringify(t.entry.module)});`
        : ' ';
      return v.createElement(
        v.Fragment,
        null,
        v.createElement(
          'script',
          xe({}, e, {
            suppressHydrationWarning: !0,
            dangerouslySetInnerHTML: ef(P),
            type: void 0,
          })
        ),
        v.createElement(
          'script',
          xe({}, e, {
            suppressHydrationWarning: !0,
            dangerouslySetInnerHTML: ef(M),
            type: 'module',
            async: !0,
          })
        )
      );
    }, []);
  if (!s && typeof __remixContext == 'object' && __remixContext.a)
    for (let y = 0; y < __remixContext.a; y++)
      h.push(
        v.createElement(lf, {
          key: y,
          scriptProps: e,
          serializeData: p,
          serializeError: C,
        })
      );
  let k = E.map((y) => {
      let T = t.routes[y.route.id];
      return (T.imports || []).concat([T.module]);
    }).flat(1),
    L = xo ? [] : t.entry.imports.concat(k);
  return xo
    ? null
    : v.createElement(
        v.Fragment,
        null,
        d
          ? null
          : v.createElement('link', {
              rel: 'modulepreload',
              href: t.url,
              crossOrigin: e.crossOrigin,
            }),
        v.createElement('link', {
          rel: 'modulepreload',
          href: t.entry.module,
          crossOrigin: e.crossOrigin,
        }),
        u1(L).map((y) =>
          v.createElement('link', {
            key: y,
            rel: 'modulepreload',
            href: y,
            crossOrigin: e.crossOrigin,
          })
        ),
        m,
        h
      );
}
function lf({
  dataKey: e,
  deferredData: t,
  routeId: n,
  scriptProps: r,
  serializeData: l,
  serializeError: o,
}) {
  return (
    typeof document > 'u' &&
      t &&
      e &&
      n &&
      Un(
        t.pendingKeys.includes(e),
        `Deferred data for route ${n} with key ${e} was not pending but tried to render a script for it.`
      ),
    v.createElement(
      v.Suspense,
      {
        fallback:
          typeof document > 'u' && t && e && n
            ? null
            : v.createElement(
                'script',
                xe({}, r, {
                  async: !0,
                  suppressHydrationWarning: !0,
                  dangerouslySetInnerHTML: { __html: ' ' },
                })
              ),
      },
      typeof document > 'u' && t && e && n
        ? v.createElement(o1, {
            resolve: t.data[e],
            errorElement: v.createElement(a1, {
              dataKey: e,
              routeId: n,
              scriptProps: r,
              serializeError: o,
            }),
            children: (i) =>
              v.createElement(
                'script',
                xe({}, r, {
                  async: !0,
                  suppressHydrationWarning: !0,
                  dangerouslySetInnerHTML: { __html: l(n, e, i) },
                })
              ),
          })
        : v.createElement(
            'script',
            xe({}, r, {
              async: !0,
              suppressHydrationWarning: !0,
              dangerouslySetInnerHTML: { __html: ' ' },
            })
          )
    )
  );
}
function a1({ dataKey: e, routeId: t, scriptProps: n, serializeError: r }) {
  let l = dg();
  return v.createElement(
    'script',
    xe({}, n, {
      suppressHydrationWarning: !0,
      dangerouslySetInnerHTML: { __html: r(t, e, l) },
    })
  );
}
function u1(e) {
  return [...new Set(e)];
}
function P1() {
  return cg();
}
function rp(...e) {
  return (t) => {
    e.forEach((n) => {
      typeof n == 'function' ? n(t) : n != null && (n.current = t);
    });
  };
}
export {
  h1 as A,
  Ap as B,
  jn as E,
  R1 as L,
  C1 as M,
  p1 as O,
  tp as R,
  i1 as S,
  xe as _,
  as as a,
  k1 as b,
  x1 as c,
  B0 as d,
  d1 as e,
  f1 as f,
  m1 as g,
  S1 as h,
  Un as i,
  E1 as j,
  y1 as k,
  Sh as l,
  It as m,
  c1 as n,
  Cr as o,
  Ot as p,
  sg as q,
  v as r,
  X0 as s,
  w1 as t,
  _1 as u,
  Ih as v,
  g1 as w,
  Fh as x,
  P1 as y,
  Up as z,
};
