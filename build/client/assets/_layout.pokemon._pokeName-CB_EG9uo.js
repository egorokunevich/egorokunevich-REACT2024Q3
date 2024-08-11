import {
  w as i,
  x as l,
  y as p,
  r as _,
  n as e,
} from './components-DaO9B0RH.js';
import { L as m } from './Loader-HfTiRl3h.js';
import { a as g, s as d } from './reduxHooks-sRxE1122.js';
const k = '_page-wrapper_s7k7o_1',
  u = '_page-content_s7k7o_10',
  h = '_name_s7k7o_26',
  x = '_pic_s7k7o_31',
  f = '_info-text_s7k7o_36',
  j = '_loader-container_s7k7o_40',
  C = '_button-container_s7k7o_46',
  b = '_close-btn_s7k7o_53',
  v = '_close-icon_s7k7o_70',
  s = {
    'page-wrapper': '_page-wrapper_s7k7o_1',
    pageWrapper: k,
    'page-content': '_page-content_s7k7o_10',
    pageContent: u,
    name: h,
    pic: x,
    'info-text': '_info-text_s7k7o_36',
    infoText: f,
    'loader-container': '_loader-container_s7k7o_40',
    loaderContainer: j,
    'button-container': '_button-container_s7k7o_46',
    buttonContainer: C,
    'close-btn': '_close-btn_s7k7o_53',
    closeBtn: b,
    'close-icon': '_close-icon_s7k7o_70',
    closeIcon: v,
  };
function N() {
  const [a] = i(),
    o = a.get('page') || '1',
    c = a.get('search') || '',
    n = l(),
    t = p().pokemonToDisplay,
    r = g();
  return (
    _.useEffect(() => {
      t && r(d([t]));
    }, [t]),
    t
      ? e.jsx('div', {
          className: s.pageWrapper,
          'data-testid': 'details-page',
          children: e.jsxs('div', {
            className: s.pageContent,
            children: [
              e.jsx('div', {
                className: s.buttonContainer,
                children: e.jsx('button', {
                  className: s.closeBtn,
                  onClick: () => {
                    n(`/?page=${o}${c ? `&search=${c}` : ''}`);
                  },
                  children: e.jsx('div', {
                    className: s.closeIcon,
                    style: {
                      maskImage: 'url(../../../assets/icons/cancel.svg)',
                      WebkitMaskImage: 'url(../../../assets/icons/cancel.svg)',
                    },
                  }),
                }),
              }),
              e.jsx('h1', { className: s.name, children: t.name }),
              e.jsx('img', {
                className: s.pic,
                src: t.sprites.other['official-artwork'].front_default,
              }),
              e.jsxs('div', {
                className: s.infoText,
                children: ['Height: ', t.height],
              }),
              e.jsxs('div', {
                className: s.infoText,
                children: ['Weight: ', t.weight],
              }),
            ],
          }),
        })
      : e.jsx('div', { className: s.loaderContainer, children: e.jsx(m, {}) })
  );
}
const D = (a) => a.charAt(0).toUpperCase() + a.slice(1),
  I = ({ matches: a, data: o }) => [
    ...a.flatMap((n) => n.meta ?? []).filter((n) => !('title' in n)),
    {
      title: D(
        (o == null ? void 0 : o.pokemonToDisplay.name) || 'Pokemon Wiki'
      ),
    },
  ],
  P = () => e.jsx(e.Fragment, { children: e.jsx(N, {}) });
export { P as default, I as meta };
