import {
  o as y,
  p as k,
  q as S,
  t as T,
  r as l,
  _ as v,
  n as e,
  O as b,
  v as C,
  M as m,
  L as u,
  S as p,
} from './components-DaO9B0RH.js';
import { B as N, g as x } from './selectors-DeimZJVc.js';
import {
  c as L,
  p as E,
  u as _,
  a as M,
  t as R,
  P as I,
} from './reduxHooks-sRxE1122.js';
/**
 * @remix-run/react v2.11.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ let d = 'positions';
function O({ getKey: t, ...r }) {
  let { isSpaMode: o } = y(),
    s = k(),
    c = S();
  T({ getKey: t, storageKey: d });
  let j = l.useMemo(() => {
    if (!t) return null;
    let n = t(s, c);
    return n !== s.key ? n : null;
  }, []);
  if (o) return null;
  let f = ((n, w) => {
    if (!window.history.state || !window.history.state.key) {
      let a = Math.random().toString(32).slice(2);
      window.history.replaceState({ key: a }, '');
    }
    try {
      let g = JSON.parse(sessionStorage.getItem(n) || '{}')[
        w || window.history.state.key
      ];
      typeof g == 'number' && window.scrollTo(0, g);
    } catch (a) {
      console.error(a), sessionStorage.removeItem(n);
    }
  }).toString();
  return l.createElement(
    'script',
    v({}, r, {
      suppressHydrationWarning: !0,
      dangerouslySetInnerHTML: {
        __html: `(${f})(${JSON.stringify(d)}, ${JSON.stringify(j)})`,
      },
    })
  );
}
const A = '_wrapper_1wv73_1',
  P = '_error-info_1wv73_10',
  $ = '_error-title_1wv73_16',
  h = {
    wrapper: A,
    'error-info': '_error-info_1wv73_10',
    errorInfo: P,
    'error-title': '_error-title_1wv73_16',
    errorTitle: $,
  };
function H() {
  return e.jsxs('div', {
    className: h.wrapper,
    children: [
      e.jsx('h1', {
        className: h.errorTitle,
        children: 'Oops! Something went wrong.',
      }),
      e.jsx('p', {
        className: h.errorInfo,
        children: 'Please, try to reload the app.',
      }),
      e.jsx(N, { txt: 'Reload', onClick: () => {} }),
    ],
  });
}
const B = L({
    reducer: { pokemons: E },
    middleware: (t) =>
      t({
        immutableCheck: { warnAfter: 128 },
        serializableCheck: { warnAfter: 128 },
      }),
  }),
  J = l.createContext({ theme: 'dark', toggleTheme: () => {} }),
  z = ({ children: t }) => {
    const [r, o] = l.useState('dark'),
      s = () => {
        o(r === 'light' ? 'dark' : 'light');
      };
    return e.jsx(J.Provider, {
      value: { theme: r, toggleTheme: s },
      children: t,
    });
  },
  D = '_header_1ozn8_1',
  q = { header: D },
  K = ({ children: t }) =>
    e.jsx('header', {
      className: q.header,
      'data-testid': 'header',
      children: t,
    }),
  W = '_theme-toggle-container_1j6m3_1',
  Y = '_toggler_1j6m3_11',
  F = '_toggle-title_1j6m3_15',
  G = '_toggle-label_1j6m3_21',
  i = {
    'theme-toggle-container': '_theme-toggle-container_1j6m3_1',
    themeToggleContainer: W,
    toggler: Y,
    'toggle-title': '_toggle-title_1j6m3_15',
    toggleTitle: F,
    'toggle-label': '_toggle-label_1j6m3_21',
    toggleLabel: G,
  },
  Q = () => {
    const [t, r] = l.useState(!0),
      o = _(x),
      s = M(),
      c = () => {
        r(!t), s(R(o === 'light' ? 'dark' : 'light'));
      };
    return e.jsxs('div', {
      className: i.themeToggleContainer,
      children: [
        e.jsx('div', { className: i.toggleTitle, children: 'DARK THEME' }),
        e.jsxs('label', {
          className: i.toggleLabel,
          children: [
            e.jsx('input', { type: 'checkbox', onClick: c, 'aria-checked': t }),
            e.jsx('div', { className: i.toggler }),
          ],
        }),
      ],
    });
  };
function Z() {
  const t = C();
  return (
    console.error(t),
    e.jsxs('html', {
      children: [
        e.jsxs('head', {
          children: [
            e.jsx('title', { children: 'Oh no!' }),
            e.jsx(m, {}),
            e.jsx(u, {}),
          ],
        }),
        e.jsxs('body', { children: [e.jsx(H, {}), e.jsx(p, {})] }),
      ],
    })
  );
}
function ee({ children: t }) {
  return e.jsxs('html', {
    lang: 'en',
    children: [
      e.jsxs('head', {
        children: [
          e.jsx('meta', { charSet: 'utf-8' }),
          e.jsx('link', { rel: 'icon', href: '/favicon.ico' }),
          e.jsx('meta', {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1',
          }),
          e.jsx(m, {}),
          e.jsx(u, {}),
        ],
      }),
      e.jsxs('body', {
        children: [
          e.jsx(I, { store: B, children: e.jsx(z, { children: t }) }),
          e.jsx(O, {}),
          e.jsx(p, {}),
        ],
      }),
    ],
  });
}
function te() {
  const t = _(x);
  return e.jsxs('div', {
    className: `app ${t}`,
    children: [e.jsx(K, { children: e.jsx(Q, {}) }), e.jsx(b, {})],
  });
}
export { Z as ErrorBoundary, ee as Layout, te as default };
