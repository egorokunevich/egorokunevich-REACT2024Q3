import { r as Ye, B as he, z as Je } from './components-DaO9B0RH.js';
function v(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var Ze = (typeof Symbol == 'function' && Symbol.observable) || '@@observable',
  me = Ze,
  Z = () => Math.random().toString(36).substring(7).split('').join('.'),
  et = {
    INIT: `@@redux/INIT${Z()}`,
    REPLACE: `@@redux/REPLACE${Z()}`,
    PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${Z()}`,
  },
  K = et;
function ue(e) {
  if (typeof e != 'object' || e === null) return !1;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; ) t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
}
function Oe(e, t, r) {
  if (typeof e != 'function') throw new Error(v(2));
  if (
    (typeof t == 'function' && typeof r == 'function') ||
    (typeof r == 'function' && typeof arguments[3] == 'function')
  )
    throw new Error(v(0));
  if (
    (typeof t == 'function' && typeof r > 'u' && ((r = t), (t = void 0)),
    typeof r < 'u')
  ) {
    if (typeof r != 'function') throw new Error(v(1));
    return r(Oe)(e, t);
  }
  let n = e,
    o = t,
    i = new Map(),
    s = i,
    c = 0,
    a = !1;
  function f() {
    s === i &&
      ((s = new Map()),
      i.forEach((h, b) => {
        s.set(b, h);
      }));
  }
  function u() {
    if (a) throw new Error(v(3));
    return o;
  }
  function l(h) {
    if (typeof h != 'function') throw new Error(v(4));
    if (a) throw new Error(v(5));
    let b = !0;
    f();
    const E = c++;
    return (
      s.set(E, h),
      function () {
        if (b) {
          if (a) throw new Error(v(6));
          (b = !1), f(), s.delete(E), (i = null);
        }
      }
    );
  }
  function p(h) {
    if (!ue(h)) throw new Error(v(7));
    if (typeof h.type > 'u') throw new Error(v(8));
    if (typeof h.type != 'string') throw new Error(v(17));
    if (a) throw new Error(v(9));
    try {
      (a = !0), (o = n(o, h));
    } finally {
      a = !1;
    }
    return (
      (i = s).forEach((E) => {
        E();
      }),
      h
    );
  }
  function y(h) {
    if (typeof h != 'function') throw new Error(v(10));
    (n = h), p({ type: K.REPLACE });
  }
  function d() {
    const h = l;
    return {
      subscribe(b) {
        if (typeof b != 'object' || b === null) throw new Error(v(11));
        function E() {
          const w = b;
          w.next && w.next(u());
        }
        return E(), { unsubscribe: h(E) };
      },
      [me]() {
        return this;
      },
    };
  }
  return (
    p({ type: K.INIT }),
    { dispatch: p, subscribe: l, getState: u, replaceReducer: y, [me]: d }
  );
}
function tt(e) {
  Object.keys(e).forEach((t) => {
    const r = e[t];
    if (typeof r(void 0, { type: K.INIT }) > 'u') throw new Error(v(12));
    if (typeof r(void 0, { type: K.PROBE_UNKNOWN_ACTION() }) > 'u')
      throw new Error(v(13));
  });
}
function rt(e) {
  const t = Object.keys(e),
    r = {};
  for (let i = 0; i < t.length; i++) {
    const s = t[i];
    typeof e[s] == 'function' && (r[s] = e[s]);
  }
  const n = Object.keys(r);
  let o;
  try {
    tt(r);
  } catch (i) {
    o = i;
  }
  return function (s = {}, c) {
    if (o) throw o;
    let a = !1;
    const f = {};
    for (let u = 0; u < n.length; u++) {
      const l = n[u],
        p = r[l],
        y = s[l],
        d = p(y, c);
      if (typeof d > 'u') throw (c && c.type, new Error(v(14)));
      (f[l] = d), (a = a || d !== y);
    }
    return (a = a || n.length !== Object.keys(s).length), a ? f : s;
  };
}
function q(...e) {
  return e.length === 0
    ? (t) => t
    : e.length === 1
      ? e[0]
      : e.reduce(
          (t, r) =>
            (...n) =>
              t(r(...n))
        );
}
function nt(...e) {
  return (t) => (r, n) => {
    const o = t(r, n);
    let i = () => {
      throw new Error(v(15));
    };
    const s = { getState: o.getState, dispatch: (a, ...f) => i(a, ...f) },
      c = e.map((a) => a(s));
    return (i = q(...c)(o.dispatch)), { ...o, dispatch: i };
  };
}
function ot(e) {
  return ue(e) && 'type' in e && typeof e.type == 'string';
}
var Te = Symbol.for('immer-nothing'),
  we = Symbol.for('immer-draftable'),
  R = Symbol.for('immer-state');
function x(e, ...t) {
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var j = Object.getPrototypeOf;
function M(e) {
  return !!e && !!e[R];
}
function D(e) {
  var t;
  return e
    ? De(e) ||
        Array.isArray(e) ||
        !!e[we] ||
        !!((t = e.constructor) != null && t[we]) ||
        Q(e) ||
        Y(e)
    : !1;
}
var it = Object.prototype.constructor.toString();
function De(e) {
  if (!e || typeof e != 'object') return !1;
  const t = j(e);
  if (t === null) return !0;
  const r = Object.hasOwnProperty.call(t, 'constructor') && t.constructor;
  return r === Object
    ? !0
    : typeof r == 'function' && Function.toString.call(r) === it;
}
function H(e, t) {
  G(e) === 0
    ? Reflect.ownKeys(e).forEach((r) => {
        t(r, e[r], e);
      })
    : e.forEach((r, n) => t(n, r, e));
}
function G(e) {
  const t = e[R];
  return t ? t.type_ : Array.isArray(e) ? 1 : Q(e) ? 2 : Y(e) ? 3 : 0;
}
function re(e, t) {
  return G(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function Me(e, t, r) {
  const n = G(e);
  n === 2 ? e.set(t, r) : n === 3 ? e.add(r) : (e[t] = r);
}
function st(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function Q(e) {
  return e instanceof Map;
}
function Y(e) {
  return e instanceof Set;
}
function N(e) {
  return e.copy_ || e.base_;
}
function ne(e, t) {
  if (Q(e)) return new Map(e);
  if (Y(e)) return new Set(e);
  if (Array.isArray(e)) return Array.prototype.slice.call(e);
  const r = De(e);
  if (t === !0 || (t === 'class_only' && !r)) {
    const n = Object.getOwnPropertyDescriptors(e);
    delete n[R];
    let o = Reflect.ownKeys(n);
    for (let i = 0; i < o.length; i++) {
      const s = o[i],
        c = n[s];
      c.writable === !1 && ((c.writable = !0), (c.configurable = !0)),
        (c.get || c.set) &&
          (n[s] = {
            configurable: !0,
            writable: !0,
            enumerable: c.enumerable,
            value: e[s],
          });
    }
    return Object.create(j(e), n);
  } else {
    const n = j(e);
    if (n !== null && r) return { ...e };
    const o = Object.create(n);
    return Object.assign(o, e);
  }
}
function ae(e, t = !1) {
  return (
    J(e) ||
      M(e) ||
      !D(e) ||
      (G(e) > 1 && (e.set = e.add = e.clear = e.delete = ct),
      Object.freeze(e),
      t && Object.entries(e).forEach(([r, n]) => ae(n, !0))),
    e
  );
}
function ct() {
  x(2);
}
function J(e) {
  return Object.isFrozen(e);
}
var ut = {};
function z(e) {
  const t = ut[e];
  return t || x(0, e), t;
}
var $;
function Ae() {
  return $;
}
function at(e, t) {
  return {
    drafts_: [],
    parent_: e,
    immer_: t,
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0,
  };
}
function _e(e, t) {
  t &&
    (z('Patches'),
    (e.patches_ = []),
    (e.inversePatches_ = []),
    (e.patchListener_ = t));
}
function oe(e) {
  ie(e), e.drafts_.forEach(ft), (e.drafts_ = null);
}
function ie(e) {
  e === $ && ($ = e.parent_);
}
function be(e) {
  return ($ = at($, e));
}
function ft(e) {
  const t = e[R];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : (t.revoked_ = !0);
}
function ve(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const r = t.drafts_[0];
  return (
    e !== void 0 && e !== r
      ? (r[R].modified_ && (oe(t), x(4)),
        D(e) && ((e = X(t, e)), t.parent_ || V(t, e)),
        t.patches_ &&
          z('Patches').generateReplacementPatches_(
            r[R].base_,
            e,
            t.patches_,
            t.inversePatches_
          ))
      : (e = X(t, r, [])),
    oe(t),
    t.patches_ && t.patchListener_(t.patches_, t.inversePatches_),
    e !== Te ? e : void 0
  );
}
function X(e, t, r) {
  if (J(t)) return t;
  const n = t[R];
  if (!n) return H(t, (o, i) => Se(e, n, t, o, i, r)), t;
  if (n.scope_ !== e) return t;
  if (!n.modified_) return V(e, n.base_, !0), n.base_;
  if (!n.finalized_) {
    (n.finalized_ = !0), n.scope_.unfinalizedDrafts_--;
    const o = n.copy_;
    let i = o,
      s = !1;
    n.type_ === 3 && ((i = new Set(o)), o.clear(), (s = !0)),
      H(i, (c, a) => Se(e, n, o, c, a, r, s)),
      V(e, o, !1),
      r &&
        e.patches_ &&
        z('Patches').generatePatches_(n, r, e.patches_, e.inversePatches_);
  }
  return n.copy_;
}
function Se(e, t, r, n, o, i, s) {
  if (M(o)) {
    const c =
        i && t && t.type_ !== 3 && !re(t.assigned_, n) ? i.concat(n) : void 0,
      a = X(e, o, c);
    if ((Me(r, n, a), M(a))) e.canAutoFreeze_ = !1;
    else return;
  } else s && r.add(o);
  if (D(o) && !J(o)) {
    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1) return;
    X(e, o),
      (!t || !t.scope_.parent_) &&
        typeof n != 'symbol' &&
        Object.prototype.propertyIsEnumerable.call(r, n) &&
        V(e, o);
  }
}
function V(e, t, r = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && ae(t, r);
}
function lt(e, t) {
  const r = Array.isArray(e),
    n = {
      type_: r ? 1 : 0,
      scope_: t ? t.scope_ : Ae(),
      modified_: !1,
      finalized_: !1,
      assigned_: {},
      parent_: t,
      base_: e,
      draft_: null,
      copy_: null,
      revoke_: null,
      isManual_: !1,
    };
  let o = n,
    i = fe;
  r && ((o = [n]), (i = L));
  const { revoke: s, proxy: c } = Proxy.revocable(o, i);
  return (n.draft_ = c), (n.revoke_ = s), c;
}
var fe = {
    get(e, t) {
      if (t === R) return e;
      const r = N(e);
      if (!re(r, t)) return dt(e, r, t);
      const n = r[t];
      return e.finalized_ || !D(n)
        ? n
        : n === ee(e.base_, t)
          ? (te(e), (e.copy_[t] = ce(n, e)))
          : n;
    },
    has(e, t) {
      return t in N(e);
    },
    ownKeys(e) {
      return Reflect.ownKeys(N(e));
    },
    set(e, t, r) {
      const n = Ne(N(e), t);
      if (n != null && n.set) return n.set.call(e.draft_, r), !0;
      if (!e.modified_) {
        const o = ee(N(e), t),
          i = o == null ? void 0 : o[R];
        if (i && i.base_ === r)
          return (e.copy_[t] = r), (e.assigned_[t] = !1), !0;
        if (st(r, o) && (r !== void 0 || re(e.base_, t))) return !0;
        te(e), se(e);
      }
      return (
        (e.copy_[t] === r && (r !== void 0 || t in e.copy_)) ||
          (Number.isNaN(r) && Number.isNaN(e.copy_[t])) ||
          ((e.copy_[t] = r), (e.assigned_[t] = !0)),
        !0
      );
    },
    deleteProperty(e, t) {
      return (
        ee(e.base_, t) !== void 0 || t in e.base_
          ? ((e.assigned_[t] = !1), te(e), se(e))
          : delete e.assigned_[t],
        e.copy_ && delete e.copy_[t],
        !0
      );
    },
    getOwnPropertyDescriptor(e, t) {
      const r = N(e),
        n = Reflect.getOwnPropertyDescriptor(r, t);
      return (
        n && {
          writable: !0,
          configurable: e.type_ !== 1 || t !== 'length',
          enumerable: n.enumerable,
          value: r[t],
        }
      );
    },
    defineProperty() {
      x(11);
    },
    getPrototypeOf(e) {
      return j(e.base_);
    },
    setPrototypeOf() {
      x(12);
    },
  },
  L = {};
H(fe, (e, t) => {
  L[e] = function () {
    return (arguments[0] = arguments[0][0]), t.apply(this, arguments);
  };
});
L.deleteProperty = function (e, t) {
  return L.set.call(this, e, t, void 0);
};
L.set = function (e, t, r) {
  return fe.set.call(this, e[0], t, r, e[0]);
};
function ee(e, t) {
  const r = e[R];
  return (r ? N(r) : e)[t];
}
function dt(e, t, r) {
  var o;
  const n = Ne(t, r);
  return n
    ? 'value' in n
      ? n.value
      : (o = n.get) == null
        ? void 0
        : o.call(e.draft_)
    : void 0;
}
function Ne(e, t) {
  if (!(t in e)) return;
  let r = j(e);
  for (; r; ) {
    const n = Object.getOwnPropertyDescriptor(r, t);
    if (n) return n;
    r = j(r);
  }
}
function se(e) {
  e.modified_ || ((e.modified_ = !0), e.parent_ && se(e.parent_));
}
function te(e) {
  e.copy_ || (e.copy_ = ne(e.base_, e.scope_.immer_.useStrictShallowCopy_));
}
var pt = class {
  constructor(e) {
    (this.autoFreeze_ = !0),
      (this.useStrictShallowCopy_ = !1),
      (this.produce = (t, r, n) => {
        if (typeof t == 'function' && typeof r != 'function') {
          const i = r;
          r = t;
          const s = this;
          return function (a = i, ...f) {
            return s.produce(a, (u) => r.call(this, u, ...f));
          };
        }
        typeof r != 'function' && x(6),
          n !== void 0 && typeof n != 'function' && x(7);
        let o;
        if (D(t)) {
          const i = be(this),
            s = ce(t, void 0);
          let c = !0;
          try {
            (o = r(s)), (c = !1);
          } finally {
            c ? oe(i) : ie(i);
          }
          return _e(i, n), ve(o, i);
        } else if (!t || typeof t != 'object') {
          if (
            ((o = r(t)),
            o === void 0 && (o = t),
            o === Te && (o = void 0),
            this.autoFreeze_ && ae(o, !0),
            n)
          ) {
            const i = [],
              s = [];
            z('Patches').generateReplacementPatches_(t, o, i, s), n(i, s);
          }
          return o;
        } else x(1, t);
      }),
      (this.produceWithPatches = (t, r) => {
        if (typeof t == 'function')
          return (s, ...c) => this.produceWithPatches(s, (a) => t(a, ...c));
        let n, o;
        return [
          this.produce(t, r, (s, c) => {
            (n = s), (o = c);
          }),
          n,
          o,
        ];
      }),
      typeof (e == null ? void 0 : e.autoFreeze) == 'boolean' &&
        this.setAutoFreeze(e.autoFreeze),
      typeof (e == null ? void 0 : e.useStrictShallowCopy) == 'boolean' &&
        this.setUseStrictShallowCopy(e.useStrictShallowCopy);
  }
  createDraft(e) {
    D(e) || x(8), M(e) && (e = ze(e));
    const t = be(this),
      r = ce(e, void 0);
    return (r[R].isManual_ = !0), ie(t), r;
  }
  finishDraft(e, t) {
    const r = e && e[R];
    (!r || !r.isManual_) && x(9);
    const { scope_: n } = r;
    return _e(n, t), ve(void 0, n);
  }
  setAutoFreeze(e) {
    this.autoFreeze_ = e;
  }
  setUseStrictShallowCopy(e) {
    this.useStrictShallowCopy_ = e;
  }
  applyPatches(e, t) {
    let r;
    for (r = t.length - 1; r >= 0; r--) {
      const o = t[r];
      if (o.path.length === 0 && o.op === 'replace') {
        e = o.value;
        break;
      }
    }
    r > -1 && (t = t.slice(r + 1));
    const n = z('Patches').applyPatches_;
    return M(e) ? n(e, t) : this.produce(e, (o) => n(o, t));
  }
};
function ce(e, t) {
  const r = Q(e)
    ? z('MapSet').proxyMap_(e, t)
    : Y(e)
      ? z('MapSet').proxySet_(e, t)
      : lt(e, t);
  return (t ? t.scope_ : Ae()).drafts_.push(r), r;
}
function ze(e) {
  return M(e) || x(10, e), je(e);
}
function je(e) {
  if (!D(e) || J(e)) return e;
  const t = e[R];
  let r;
  if (t) {
    if (!t.modified_) return t.base_;
    (t.finalized_ = !0), (r = ne(e, t.scope_.immer_.useStrictShallowCopy_));
  } else r = ne(e, !0);
  return (
    H(r, (n, o) => {
      Me(r, n, je(o));
    }),
    t && (t.finalized_ = !1),
    r
  );
}
var k = new pt(),
  Ie = k.produce;
k.produceWithPatches.bind(k);
k.setAutoFreeze.bind(k);
k.setUseStrictShallowCopy.bind(k);
k.applyPatches.bind(k);
k.createDraft.bind(k);
k.finishDraft.bind(k);
function yt(e, t = `expected a function, instead received ${typeof e}`) {
  if (typeof e != 'function') throw new TypeError(t);
}
function ht(e, t = `expected an object, instead received ${typeof e}`) {
  if (typeof e != 'object') throw new TypeError(t);
}
function mt(
  e,
  t = 'expected all items to be functions, instead received the following types: '
) {
  if (!e.every((r) => typeof r == 'function')) {
    const r = e
      .map((n) =>
        typeof n == 'function' ? `function ${n.name || 'unnamed'}()` : typeof n
      )
      .join(', ');
    throw new TypeError(`${t}[${r}]`);
  }
}
var ge = (e) => (Array.isArray(e) ? e : [e]);
function wt(e) {
  const t = Array.isArray(e[0]) ? e[0] : e;
  return (
    mt(
      t,
      'createSelector expects all input-selectors to be functions, but received the following types: '
    ),
    t
  );
}
function _t(e, t) {
  const r = [],
    { length: n } = e;
  for (let o = 0; o < n; o++) r.push(e[o].apply(null, t));
  return r;
}
var bt = class {
    constructor(e) {
      this.value = e;
    }
    deref() {
      return this.value;
    }
  },
  vt = typeof WeakRef < 'u' ? WeakRef : bt,
  St = 0,
  Ce = 1;
function W() {
  return { s: St, v: void 0, o: null, p: null };
}
function le(e, t = {}) {
  let r = W();
  const { resultEqualityCheck: n } = t;
  let o,
    i = 0;
  function s() {
    var l;
    let c = r;
    const { length: a } = arguments;
    for (let p = 0, y = a; p < y; p++) {
      const d = arguments[p];
      if (typeof d == 'function' || (typeof d == 'object' && d !== null)) {
        let _ = c.o;
        _ === null && (c.o = _ = new WeakMap());
        const h = _.get(d);
        h === void 0 ? ((c = W()), _.set(d, c)) : (c = h);
      } else {
        let _ = c.p;
        _ === null && (c.p = _ = new Map());
        const h = _.get(d);
        h === void 0 ? ((c = W()), _.set(d, c)) : (c = h);
      }
    }
    const f = c;
    let u;
    if (c.s === Ce) u = c.v;
    else if (((u = e.apply(null, arguments)), i++, n)) {
      const p =
        ((l = o == null ? void 0 : o.deref) == null ? void 0 : l.call(o)) ?? o;
      p != null && n(p, u) && ((u = p), i !== 0 && i--),
        (o =
          (typeof u == 'object' && u !== null) || typeof u == 'function'
            ? new vt(u)
            : u);
    }
    return (f.s = Ce), (f.v = u), u;
  }
  return (
    (s.clearCache = () => {
      (r = W()), s.resetResultsCount();
    }),
    (s.resultsCount = () => i),
    (s.resetResultsCount = () => {
      i = 0;
    }),
    s
  );
}
function Fe(e, ...t) {
  const r = typeof e == 'function' ? { memoize: e, memoizeOptions: t } : e,
    n = (...o) => {
      let i = 0,
        s = 0,
        c,
        a = {},
        f = o.pop();
      typeof f == 'object' && ((a = f), (f = o.pop())),
        yt(
          f,
          `createSelector expects an output function after the inputs, but received: [${typeof f}]`
        );
      const u = { ...r, ...a },
        {
          memoize: l,
          memoizeOptions: p = [],
          argsMemoize: y = le,
          argsMemoizeOptions: d = [],
          devModeChecks: _ = {},
        } = u,
        h = ge(p),
        b = ge(d),
        E = wt(o),
        m = l(
          function () {
            return i++, f.apply(null, arguments);
          },
          ...h
        ),
        w = y(
          function () {
            s++;
            const O = _t(E, arguments);
            return (c = m.apply(null, O)), c;
          },
          ...b
        );
      return Object.assign(w, {
        resultFunc: f,
        memoizedResultFunc: m,
        dependencies: E,
        dependencyRecomputations: () => s,
        resetDependencyRecomputations: () => {
          s = 0;
        },
        lastResult: () => c,
        recomputations: () => i,
        resetRecomputations: () => {
          i = 0;
        },
        memoize: l,
        argsMemoize: y,
      });
    };
  return Object.assign(n, { withTypes: () => n }), n;
}
var gt = Fe(le),
  Ct = Object.assign(
    (e, t = gt) => {
      ht(
        e,
        `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`
      );
      const r = Object.keys(e),
        n = r.map((i) => e[i]);
      return t(n, (...i) => i.reduce((s, c, a) => ((s[r[a]] = c), s), {}));
    },
    { withTypes: () => Ct }
  );
function $e(e) {
  return ({ dispatch: r, getState: n }) =>
    (o) =>
    (i) =>
      typeof i == 'function' ? i(r, n, e) : o(i);
}
var Et = $e(),
  Pt = $e,
  Rt = (...e) => {
    const t = Fe(...e),
      r = Object.assign(
        (...n) => {
          const o = t(...n),
            i = (s, ...c) => o(M(s) ? ze(s) : s, ...c);
          return Object.assign(i, o), i;
        },
        { withTypes: () => r }
      );
    return r;
  };
Rt(le);
var kt =
  typeof window < 'u' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : function () {
        if (arguments.length !== 0)
          return typeof arguments[0] == 'object' ? q : q.apply(null, arguments);
      };
function I(e, t) {
  function r(...n) {
    if (t) {
      let o = t(...n);
      if (!o) throw new Error(C(0));
      return {
        type: e,
        payload: o.payload,
        ...('meta' in o && { meta: o.meta }),
        ...('error' in o && { error: o.error }),
      };
    }
    return { type: e, payload: n[0] };
  }
  return (
    (r.toString = () => `${e}`),
    (r.type = e),
    (r.match = (n) => ot(n) && n.type === e),
    r
  );
}
var Le = class F extends Array {
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, F.prototype);
  }
  static get [Symbol.species]() {
    return F;
  }
  concat(...t) {
    return super.concat.apply(this, t);
  }
  prepend(...t) {
    return t.length === 1 && Array.isArray(t[0])
      ? new F(...t[0].concat(this))
      : new F(...t.concat(this));
  }
};
function Ee(e) {
  return D(e) ? Ie(e, () => {}) : e;
}
function Pe(e, t, r) {
  if (e.has(t)) {
    let o = e.get(t);
    return r.update && ((o = r.update(o, t, e)), e.set(t, o)), o;
  }
  if (!r.insert) throw new Error(C(10));
  const n = r.insert(t, e);
  return e.set(t, n), n;
}
function xt(e) {
  return typeof e == 'boolean';
}
var Ot = () =>
    function (t) {
      const {
        thunk: r = !0,
        immutableCheck: n = !0,
        serializableCheck: o = !0,
        actionCreatorCheck: i = !0,
      } = t ?? {};
      let s = new Le();
      return r && (xt(r) ? s.push(Et) : s.push(Pt(r.extraArgument))), s;
    },
  Tt = 'RTK_autoBatch',
  Be = (e) => (t) => {
    setTimeout(t, e);
  },
  Dt =
    typeof window < 'u' && window.requestAnimationFrame
      ? window.requestAnimationFrame
      : Be(10),
  Mt =
    (e = { type: 'raf' }) =>
    (t) =>
    (...r) => {
      const n = t(...r);
      let o = !0,
        i = !1,
        s = !1;
      const c = new Set(),
        a =
          e.type === 'tick'
            ? queueMicrotask
            : e.type === 'raf'
              ? Dt
              : e.type === 'callback'
                ? e.queueNotification
                : Be(e.timeout),
        f = () => {
          (s = !1), i && ((i = !1), c.forEach((u) => u()));
        };
      return Object.assign({}, n, {
        subscribe(u) {
          const l = () => o && u(),
            p = n.subscribe(l);
          return (
            c.add(u),
            () => {
              p(), c.delete(u);
            }
          );
        },
        dispatch(u) {
          var l;
          try {
            return (
              (o = !((l = u == null ? void 0 : u.meta) != null && l[Tt])),
              (i = !o),
              i && (s || ((s = !0), a(f))),
              n.dispatch(u)
            );
          } finally {
            o = !0;
          }
        },
      });
    },
  At = (e) =>
    function (r) {
      const { autoBatch: n = !0 } = r ?? {};
      let o = new Le(e);
      return n && o.push(Mt(typeof n == 'object' ? n : void 0)), o;
    },
  Nt = !0;
function Rr(e) {
  const t = Ot(),
    {
      reducer: r = void 0,
      middleware: n,
      devTools: o = !0,
      preloadedState: i = void 0,
      enhancers: s = void 0,
    } = e || {};
  let c;
  if (typeof r == 'function') c = r;
  else if (ue(r)) c = rt(r);
  else throw new Error(C(1));
  let a;
  typeof n == 'function' ? (a = n(t)) : (a = t());
  let f = q;
  o && (f = kt({ trace: !Nt, ...(typeof o == 'object' && o) }));
  const u = nt(...a),
    l = At(u);
  let p = typeof s == 'function' ? s(l) : l();
  const y = f(...p);
  return Oe(c, i, y);
}
function We(e) {
  const t = {},
    r = [];
  let n;
  const o = {
    addCase(i, s) {
      const c = typeof i == 'string' ? i : i.type;
      if (!c) throw new Error(C(28));
      if (c in t) throw new Error(C(29));
      return (t[c] = s), o;
    },
    addMatcher(i, s) {
      return r.push({ matcher: i, reducer: s }), o;
    },
    addDefaultCase(i) {
      return (n = i), o;
    },
  };
  return e(o), [t, r, n];
}
function zt(e) {
  return typeof e == 'function';
}
function jt(e, t) {
  let [r, n, o] = We(t),
    i;
  if (zt(e)) i = () => Ee(e());
  else {
    const c = Ee(e);
    i = () => c;
  }
  function s(c = i(), a) {
    let f = [
      r[a.type],
      ...n.filter(({ matcher: u }) => u(a)).map(({ reducer: u }) => u),
    ];
    return (
      f.filter((u) => !!u).length === 0 && (f = [o]),
      f.reduce((u, l) => {
        if (l)
          if (M(u)) {
            const y = l(u, a);
            return y === void 0 ? u : y;
          } else {
            if (D(u)) return Ie(u, (p) => l(p, a));
            {
              const p = l(u, a);
              if (p === void 0) {
                if (u === null) return u;
                throw new Error(C(9));
              }
              return p;
            }
          }
        return u;
      }, c)
    );
  }
  return (s.getInitialState = i), s;
}
var It = 'ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW',
  Ft = (e = 21) => {
    let t = '',
      r = e;
    for (; r--; ) t += It[(Math.random() * 64) | 0];
    return t;
  },
  $t = Symbol.for('rtk-slice-createasyncthunk');
function Lt(e, t) {
  return `${e}/${t}`;
}
function Bt({ creators: e } = {}) {
  var r;
  const t = (r = e == null ? void 0 : e.asyncThunk) == null ? void 0 : r[$t];
  return function (o) {
    const { name: i, reducerPath: s = i } = o;
    if (!i) throw new Error(C(11));
    typeof process < 'u';
    const c =
        (typeof o.reducers == 'function' ? o.reducers(Kt()) : o.reducers) || {},
      a = Object.keys(c),
      f = {
        sliceCaseReducersByName: {},
        sliceCaseReducersByType: {},
        actionCreators: {},
        sliceMatchers: [],
      },
      u = {
        addCase(m, w) {
          const S = typeof m == 'string' ? m : m.type;
          if (!S) throw new Error(C(12));
          if (S in f.sliceCaseReducersByType) throw new Error(C(13));
          return (f.sliceCaseReducersByType[S] = w), u;
        },
        addMatcher(m, w) {
          return f.sliceMatchers.push({ matcher: m, reducer: w }), u;
        },
        exposeAction(m, w) {
          return (f.actionCreators[m] = w), u;
        },
        exposeCaseReducer(m, w) {
          return (f.sliceCaseReducersByName[m] = w), u;
        },
      };
    a.forEach((m) => {
      const w = c[m],
        S = {
          reducerName: m,
          type: Lt(i, m),
          createNotation: typeof o.reducers == 'function',
        };
      Ht(w) ? Vt(S, w, u, t) : qt(S, w, u);
    });
    function l() {
      const [m = {}, w = [], S = void 0] =
          typeof o.extraReducers == 'function'
            ? We(o.extraReducers)
            : [o.extraReducers],
        O = { ...m, ...f.sliceCaseReducersByType };
      return jt(o.initialState, (T) => {
        for (let g in O) T.addCase(g, O[g]);
        for (let g of f.sliceMatchers) T.addMatcher(g.matcher, g.reducer);
        for (let g of w) T.addMatcher(g.matcher, g.reducer);
        S && T.addDefaultCase(S);
      });
    }
    const p = (m) => m,
      y = new Map();
    let d;
    function _(m, w) {
      return d || (d = l()), d(m, w);
    }
    function h() {
      return d || (d = l()), d.getInitialState();
    }
    function b(m, w = !1) {
      function S(T) {
        let g = T[m];
        return typeof g > 'u' && w && (g = h()), g;
      }
      function O(T = p) {
        const g = Pe(y, w, { insert: () => new WeakMap() });
        return Pe(g, T, {
          insert: () => {
            const ye = {};
            for (const [Ge, Qe] of Object.entries(o.selectors ?? {}))
              ye[Ge] = Wt(Qe, T, h, w);
            return ye;
          },
        });
      }
      return {
        reducerPath: m,
        getSelectors: O,
        get selectors() {
          return O(S);
        },
        selectSlice: S,
      };
    }
    const E = {
      name: i,
      reducer: _,
      actions: f.actionCreators,
      caseReducers: f.sliceCaseReducersByName,
      getInitialState: h,
      ...b(s),
      injectInto(m, { reducerPath: w, ...S } = {}) {
        const O = w ?? s;
        return (
          m.inject({ reducerPath: O, reducer: _ }, S), { ...E, ...b(O, !0) }
        );
      },
    };
    return E;
  };
}
function Wt(e, t, r, n) {
  function o(i, ...s) {
    let c = t(i);
    return typeof c > 'u' && n && (c = r()), e(c, ...s);
  }
  return (o.unwrapped = e), o;
}
var Ut = Bt();
function Kt() {
  function e(t, r) {
    return { _reducerDefinitionType: 'asyncThunk', payloadCreator: t, ...r };
  }
  return (
    (e.withTypes = () => e),
    {
      reducer(t) {
        return Object.assign(
          {
            [t.name](...r) {
              return t(...r);
            },
          }[t.name],
          { _reducerDefinitionType: 'reducer' }
        );
      },
      preparedReducer(t, r) {
        return {
          _reducerDefinitionType: 'reducerWithPrepare',
          prepare: t,
          reducer: r,
        };
      },
      asyncThunk: e,
    }
  );
}
function qt({ type: e, reducerName: t, createNotation: r }, n, o) {
  let i, s;
  if ('reducer' in n) {
    if (r && !Xt(n)) throw new Error(C(17));
    (i = n.reducer), (s = n.prepare);
  } else i = n;
  o.addCase(e, i)
    .exposeCaseReducer(t, i)
    .exposeAction(t, s ? I(e, s) : I(e));
}
function Ht(e) {
  return e._reducerDefinitionType === 'asyncThunk';
}
function Xt(e) {
  return e._reducerDefinitionType === 'reducerWithPrepare';
}
function Vt({ type: e, reducerName: t }, r, n, o) {
  if (!o) throw new Error(C(18));
  const {
      payloadCreator: i,
      fulfilled: s,
      pending: c,
      rejected: a,
      settled: f,
      options: u,
    } = r,
    l = o(e, i, u);
  n.exposeAction(t, l),
    s && n.addCase(l.fulfilled, s),
    c && n.addCase(l.pending, c),
    a && n.addCase(l.rejected, a),
    f && n.addMatcher(l.settled, f),
    n.exposeCaseReducer(t, {
      fulfilled: s || U,
      pending: c || U,
      rejected: a || U,
      settled: f || U,
    });
}
function U() {}
var Gt = (e, t) => {
    if (typeof e != 'function') throw new Error(C(32));
  },
  de = 'listenerMiddleware',
  Qt = (e) => {
    let { type: t, actionCreator: r, matcher: n, predicate: o, effect: i } = e;
    if (t) o = I(t).match;
    else if (r) (t = r.type), (o = r.match);
    else if (n) o = n;
    else if (!o) throw new Error(C(21));
    return Gt(i), { predicate: o, type: t, effect: i };
  },
  Yt = Object.assign(
    (e) => {
      const { type: t, predicate: r, effect: n } = Qt(e);
      return {
        id: Ft(),
        effect: n,
        type: t,
        predicate: r,
        pending: new Set(),
        unsubscribe: () => {
          throw new Error(C(22));
        },
      };
    },
    { withTypes: () => Yt }
  ),
  Jt = Object.assign(I(`${de}/add`), { withTypes: () => Jt });
I(`${de}/removeAll`);
var Zt = Object.assign(I(`${de}/remove`), { withTypes: () => Zt });
function C(e) {
  return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
const er = {
    currentPokemons: [],
    selectedPokemons: [],
    currentDetails: [],
    theme: 'dark',
  },
  Ue = Ut({
    name: 'pokemons',
    initialState: er,
    reducers: {
      setCurrentPokemons: (e, t) => {
        e.currentPokemons = t.payload;
      },
      toggleSelectedPokemons: (e, t) => {
        !!e.selectedPokemons.find((n) => n.name === t.payload.name)
          ? (e.selectedPokemons = e.selectedPokemons.filter(
              (n) => n.name !== t.payload.name
            ))
          : e.selectedPokemons.push(t.payload);
      },
      unselectAllPokemons: (e) => {
        e.selectedPokemons = [];
      },
      setCurrentDetails: (e, t) => {
        e.currentDetails = t.payload;
      },
      toggleLayoutTheme: (e, t) => {
        e.theme = t.payload;
      },
    },
  }),
  {
    setCurrentPokemons: kr,
    toggleSelectedPokemons: xr,
    unselectAllPokemons: Or,
    setCurrentDetails: Tr,
    toggleLayoutTheme: Dr,
  } = Ue.actions,
  Mr = Ue.reducer;
var Ke = { exports: {} },
  qe = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var B = Ye;
function tr(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var rr = typeof Object.is == 'function' ? Object.is : tr,
  nr = B.useSyncExternalStore,
  or = B.useRef,
  ir = B.useEffect,
  sr = B.useMemo,
  cr = B.useDebugValue;
qe.useSyncExternalStoreWithSelector = function (e, t, r, n, o) {
  var i = or(null);
  if (i.current === null) {
    var s = { hasValue: !1, value: null };
    i.current = s;
  } else s = i.current;
  i = sr(
    function () {
      function a(y) {
        if (!f) {
          if (((f = !0), (u = y), (y = n(y)), o !== void 0 && s.hasValue)) {
            var d = s.value;
            if (o(d, y)) return (l = d);
          }
          return (l = y);
        }
        if (((d = l), rr(u, y))) return d;
        var _ = n(y);
        return o !== void 0 && o(d, _) ? d : ((u = y), (l = _));
      }
      var f = !1,
        u,
        l,
        p = r === void 0 ? null : r;
      return [
        function () {
          return a(t());
        },
        p === null
          ? void 0
          : function () {
              return a(p());
            },
      ];
    },
    [t, r, n, o]
  );
  var c = nr(e, i[0], i[1]);
  return (
    ir(
      function () {
        (s.hasValue = !0), (s.value = c);
      },
      [c]
    ),
    cr(c),
    c
  );
};
Ke.exports = qe;
var ur = Ke.exports,
  P = 'default' in he ? Je : he,
  Re = Symbol.for('react-redux-context'),
  ke = typeof globalThis < 'u' ? globalThis : {};
function ar() {
  if (!P.createContext) return {};
  const e = ke[Re] ?? (ke[Re] = new Map());
  let t = e.get(P.createContext);
  return t || ((t = P.createContext(null)), e.set(P.createContext, t)), t;
}
var A = ar(),
  fr = () => {
    throw new Error('uSES not initialized!');
  };
function pe(e = A) {
  return function () {
    return P.useContext(e);
  };
}
var He = pe(),
  Xe = fr,
  lr = (e) => {
    Xe = e;
  },
  dr = (e, t) => e === t;
function pr(e = A) {
  const t = e === A ? He : pe(e),
    r = (n, o = {}) => {
      const { equalityFn: i = dr, devModeChecks: s = {} } =
          typeof o == 'function' ? { equalityFn: o } : o,
        {
          store: c,
          subscription: a,
          getServerState: f,
          stabilityCheck: u,
          identityFunctionCheck: l,
        } = t();
      P.useRef(!0);
      const p = P.useCallback(
          {
            [n.name](d) {
              return n(d);
            },
          }[n.name],
          [n, u, s.stabilityCheck]
        ),
        y = Xe(a.addNestedSub, c.getState, f || c.getState, p, i);
      return P.useDebugValue(y), y;
    };
  return Object.assign(r, { withTypes: () => r }), r;
}
var yr = pr();
function hr(e) {
  e();
}
function mr() {
  let e = null,
    t = null;
  return {
    clear() {
      (e = null), (t = null);
    },
    notify() {
      hr(() => {
        let r = e;
        for (; r; ) r.callback(), (r = r.next);
      });
    },
    get() {
      const r = [];
      let n = e;
      for (; n; ) r.push(n), (n = n.next);
      return r;
    },
    subscribe(r) {
      let n = !0;
      const o = (t = { callback: r, next: null, prev: t });
      return (
        o.prev ? (o.prev.next = o) : (e = o),
        function () {
          !n ||
            e === null ||
            ((n = !1),
            o.next ? (o.next.prev = o.prev) : (t = o.prev),
            o.prev ? (o.prev.next = o.next) : (e = o.next));
        }
      );
    },
  };
}
var xe = { notify() {}, get: () => [] };
function wr(e, t) {
  let r,
    n = xe,
    o = 0,
    i = !1;
  function s(_) {
    u();
    const h = n.subscribe(_);
    let b = !1;
    return () => {
      b || ((b = !0), h(), l());
    };
  }
  function c() {
    n.notify();
  }
  function a() {
    d.onStateChange && d.onStateChange();
  }
  function f() {
    return i;
  }
  function u() {
    o++, r || ((r = e.subscribe(a)), (n = mr()));
  }
  function l() {
    o--, r && o === 0 && (r(), (r = void 0), n.clear(), (n = xe));
  }
  function p() {
    i || ((i = !0), u());
  }
  function y() {
    i && ((i = !1), l());
  }
  const d = {
    addNestedSub: s,
    notifyNestedSubs: c,
    handleChangeWrapper: a,
    isSubscribed: f,
    trySubscribe: p,
    tryUnsubscribe: y,
    getListeners: () => n,
  };
  return d;
}
var _r =
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u',
  br = typeof navigator < 'u' && navigator.product === 'ReactNative',
  vr = _r || br ? P.useLayoutEffect : P.useEffect;
function Sr({
  store: e,
  context: t,
  children: r,
  serverState: n,
  stabilityCheck: o = 'once',
  identityFunctionCheck: i = 'once',
}) {
  const s = P.useMemo(() => {
      const f = wr(e);
      return {
        store: e,
        subscription: f,
        getServerState: n ? () => n : void 0,
        stabilityCheck: o,
        identityFunctionCheck: i,
      };
    }, [e, n, o, i]),
    c = P.useMemo(() => e.getState(), [e]);
  vr(() => {
    const { subscription: f } = s;
    return (
      (f.onStateChange = f.notifyNestedSubs),
      f.trySubscribe(),
      c !== e.getState() && f.notifyNestedSubs(),
      () => {
        f.tryUnsubscribe(), (f.onStateChange = void 0);
      }
    );
  }, [s, c]);
  const a = t || A;
  return P.createElement(a.Provider, { value: s }, r);
}
var Ar = Sr;
function Ve(e = A) {
  const t = e === A ? He : pe(e),
    r = () => {
      const { store: n } = t();
      return n;
    };
  return Object.assign(r, { withTypes: () => r }), r;
}
var gr = Ve();
function Cr(e = A) {
  const t = e === A ? gr : Ve(e),
    r = () => t().dispatch;
  return Object.assign(r, { withTypes: () => r }), r;
}
var Er = Cr();
lr(ur.useSyncExternalStoreWithSelector);
const Nr = Er.withTypes(),
  zr = yr.withTypes();
export {
  Ar as P,
  Nr as a,
  xr as b,
  Rr as c,
  Or as d,
  kr as e,
  Mr as p,
  Tr as s,
  Dr as t,
  zr as u,
};
