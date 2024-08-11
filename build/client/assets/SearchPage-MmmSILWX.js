import {
  z as $,
  r as P,
  n as e,
  w as S,
  x as N,
  y as v,
  A as I,
  O as L,
} from './components-DaO9B0RH.js';
import { L as M } from './Loader-HfTiRl3h.js';
import {
  a as j,
  b as R,
  u as y,
  d as w,
  e as D,
} from './reduxHooks-sRxE1122.js';
import { a as B, B as T, b as A } from './selectors-DeimZJVc.js';
const E = '_search-wrapper_1x84a_1',
  F = '_search-bar_1x84a_8',
  W = '_search-input_1x84a_14',
  O = '_search-btn_1x84a_36',
  U = '_icon-mask_1x84a_55',
  u = {
    'search-wrapper': '_search-wrapper_1x84a_1',
    searchWrapper: E,
    'search-bar': '_search-bar_1x84a_8',
    searchBar: F,
    'search-input': '_search-input_1x84a_14',
    searchInput: W,
    'search-btn': '_search-btn_1x84a_36',
    searchBtn: O,
    'icon-mask': '_icon-mask_1x84a_55',
    iconMask: U,
  };
function q(a) {
  const { onSearch: n } = a,
    [t, r] = P.useState(''),
    s = () => {
      n(t);
    };
  return e.jsx('div', {
    className: u.searchWrapper,
    'data-testid': 'search-bar',
    children: e.jsxs('div', {
      className: u.searchBar,
      children: [
        e.jsx('input', {
          className: u.searchInput,
          type: 'text',
          placeholder: 'Search query...',
          onChange: (c) => {
            r(c.target.value);
          },
          onKeyDown: (c) => {
            c.repeat || (c.key === 'Enter' && s());
          },
          value: t,
        }),
        e.jsx('button', {
          className: u.searchBtn,
          onClick: () => {
            s();
          },
          children: e.jsx('div', {
            className: u.iconMask,
            style: {
              maskImage: 'url(../../../../../assets/icons/search.svg)',
              WebkitMaskImage: 'url(../../../../../assets/icons/search.svg)',
            },
          }),
        }),
      ],
    }),
  });
}
const G = $.memo(q),
  H = '_card_137r0_1',
  Q = '_pic-shiny_137r0_21',
  z = '_card-title_137r0_25',
  K = '_pic-container_137r0_30',
  V = '_pic_137r0_21',
  J = '_checkbox-label_137r0_46',
  X = '_checkbox-marker_137r0_63',
  l = {
    card: H,
    'pic-shiny': '_pic-shiny_137r0_21',
    picShiny: Q,
    'card-title': '_card-title_137r0_25',
    cardTitle: z,
    'pic-container': '_pic-container_137r0_30',
    picContainer: K,
    pic: V,
    'checkbox-label': '_checkbox-label_137r0_46',
    checkboxLabel: J,
    'checkbox-marker': '_checkbox-marker_137r0_63',
    checkboxMarker: X,
  };
function Y({ pokemon: a, isSelected: n }) {
  const t = j(),
    [r] = S(),
    s = r.get('page') || '1',
    c = r.get('search') || '',
    i = N();
  if (!a) return e.jsx('div', { className: l.card, children: e.jsx(M, {}) });
  const h = () =>
    a.sprites.front_default
      ? e.jsxs(e.Fragment, {
          children: [
            e.jsx('img', { className: l.pic, src: a.sprites.front_default }),
            e.jsx('img', { className: l.picShiny, src: a.sprites.front_shiny }),
          ],
        })
      : e.jsx('img', {
          className: l.pic,
          src: a.sprites.other['official-artwork'].front_default,
        });
  return e.jsxs('div', {
    className: l.card,
    onClick: (o) => {
      o.stopPropagation(),
        i(`/pokemon/${a.name}?page=${s}${c ? `&search=${c}` : ''}`);
    },
    'data-testid': 'poke-card',
    children: [
      e.jsxs('label', {
        className: l.checkboxLabel,
        onClick: (o) => o.stopPropagation(),
        children: [
          e.jsx('input', {
            type: 'checkbox',
            className: l.check,
            checked: n,
            onChange: (o) => {
              o.stopPropagation(), t(R(a));
            },
          }),
          n && e.jsx('div', { className: l.checkboxMarker }),
        ],
      }),
      e.jsx('div', { className: l.cardTitle, children: a.name }),
      e.jsx('div', { className: l.picContainer, children: h() }),
      e.jsxs('p', { children: ['Weight: ', a.weight] }),
      e.jsxs('p', { children: ['Height: ', a.height] }),
    ],
  });
}
const Z = '_list-container_1daq1_1',
  ee = '_not-found-message_1daq1_11',
  C = {
    'list-container': '_list-container_1daq1_1',
    listContainer: Z,
    'not-found-message': '_not-found-message_1daq1_11',
    notFoundMessage: ee,
  };
function ae() {
  const a = y(B),
    t = v().pokemons;
  return t.length
    ? e.jsx('div', {
        className: C.listContainer,
        'data-testid': 'resultsListWrapper',
        children: t.map((r, s) =>
          e.jsx(
            Y,
            { pokemon: r, isSelected: a.some((c) => c.name === r.name) },
            r.name + s
          )
        ),
      })
    : e.jsx('div', {
        className: C.notFoundMessage,
        children: 'There is no such Pokemon!',
      });
}
const ne = '_wrapper_c8wgb_1',
  te = '_main-section_c8wgb_6',
  se = '_page-container_c8wgb_13',
  ce = '_not-found-wrapper_c8wgb_22',
  re = '_not-found-message_c8wgb_30',
  b = {
    wrapper: ne,
    'main-section': '_main-section_c8wgb_6',
    mainSection: te,
    'page-container': '_page-container_c8wgb_13',
    pageContainer: se,
    'not-found-wrapper': '_not-found-wrapper_c8wgb_22',
    notFoundWrapper: ce,
    'not-found-message': '_not-found-message_c8wgb_30',
    notFoundMessage: re,
  },
  x = (a, n) => {
    if (n <= a) return [1];
    const t = n - a + 1;
    return Array.from({ length: t }, (r, s) => s + a);
  },
  oe = 5,
  _ = 2,
  ie = (a) => {
    const { pagesCount: n, currentPage: t } = a;
    return (() => {
      if (_ + oe >= n) return x(1, n);
      const c = Math.max(t - _, 1),
        i = Math.min(t + _, n),
        h = c > _,
        o = i < n - _,
        d = 1,
        m = n;
      if (!h && o) {
        const g = 3 + _ * _;
        return [...x(1, g), '...', n];
      }
      if (h && !o) {
        const g = 3 + _ * _,
          p = x(n - g + 1, n);
        return [d, '...', ...p];
      }
      if (h && o) {
        const g = x(c, i);
        return [d, '...', ...g, '...', m];
      }
    })();
  },
  le = '_container_1p58n_1',
  pe = '_pagination_1p58n_9',
  _e = '_page-btn_1p58n_17',
  k = {
    container: le,
    pagination: pe,
    'page-btn': '_page-btn_1p58n_17',
    pageBtn: _e,
  },
  de = (a) => {
    const { txt: n, isActive: t, handleClick: r } = a;
    return e.jsx('button', {
      className: k.pageBtn,
      style: {
        color: t ? 'var(--bg-color)' : 'var(--primary-color)',
        backgroundColor: t ? 'var(--primary-color)' : 'var(--bg-color)',
      },
      onClick: (s) => {
        s.stopPropagation(), +n && r(+n);
      },
      'data-testid': 'page-btn',
      children: n,
    });
  },
  he = (a) => {
    const { totalPages: n, currentPage: t, handleClick: r } = a,
      s = ie({ pagesCount: n, currentPage: t });
    return e.jsx('div', {
      className: k.container,
      children: e.jsx('div', {
        className: k.pagination,
        children:
          s == null
            ? void 0
            : s.map((c, i) =>
                e.jsx(
                  de,
                  { txt: c.toString(), isActive: +c === t, handleClick: r },
                  i
                )
              ),
      }),
    });
  },
  ge = '_wrapper_ge4e7_1',
  ue = '_container_ge4e7_12',
  me = '_info_ge4e7_21',
  f = { wrapper: ge, container: ue, info: me },
  xe = (a) => {
    const n = a.map((s) => {
        const { sprites: c, ...i } = s;
        return i;
      }),
      t = Object.keys(n[0]).toString(),
      r = n.map((s) =>
        Object.values(s).filter((c) => {
          if (typeof c == 'string' || typeof c == 'number') return c;
        })
      );
    return [t, ...r].join(`
`);
  },
  be = (a) => {
    const n = new Blob([a], { type: 'application/csv' });
    return URL.createObjectURL(n);
  },
  fe = ({ selectedPokemons: a }) => {
    const n = j();
    return e.jsx('div', {
      className: f.wrapper,
      'data-testid': 'flyout',
      children: e.jsxs('div', {
        className: f.container,
        children: [
          e.jsxs('div', {
            className: f.info,
            children: ['Pokemons selected: ', a.length],
          }),
          e.jsx(T, {
            txt: 'Unselect All',
            onClick: () => n(w()),
            'data-testid': 'unselect-btn',
          }),
          e.jsx('a', {
            style: { padding: '0.6em 1.2em', lineHeight: '1.15' },
            className: A.btn,
            href: be(xe(a)),
            onClick: () => n(w()),
            download: `${a.length}_pokemons.csv`,
            children: 'Download',
          }),
        ],
      }),
    });
  },
  ke = (a, n) => Math.ceil(a / n),
  je = 12;
function Ne() {
  const [a, n] = S(),
    t = I(),
    r = +(a.get('page') || '1'),
    s = a.get('search') || '',
    c = j(),
    i = N(),
    h = (p) => {
      n({ page: p.toString() });
    },
    o = v(),
    d = o.pokemons,
    m = y(B);
  P.useEffect(() => {
    d && c(D(d));
  }, [d]);
  const g = d && d.length > 1;
  return e.jsx('div', {
    className: b.pageContainer,
    children: e.jsxs('div', {
      className: b.wrapper,
      children: [
        e.jsxs('div', {
          className: b.mainSection,
          onClick: () => {
            t.pokeName && i(`/?page=${r}${s ? `&search=${s}` : ''}`);
          },
          'data-testid': 'searchPage-mainSection',
          children: [
            e.jsx(G, {
              onSearch: (p) => {
                i(`/?page=${r}${p ? `&search=${p}` : ''}`);
              },
            }),
            e.jsx(ae, {}),
            g &&
              e.jsx(he, {
                totalPages: ke(o.totalCount, je),
                currentPage: +r,
                handleClick: (p) => {
                  h(p);
                },
              }),
          ],
        }),
        e.jsx(L, {}),
        m.length > 0 && e.jsx(fe, { selectedPokemons: m }),
      ],
    }),
  });
}
export { Ne as S };
