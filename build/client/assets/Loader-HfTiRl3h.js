import { n as e } from './components-DaO9B0RH.js';
const a = '_loader-container_8wbln_1',
  r = '_loader_8wbln_1',
  n = '_pokeLoader_8wbln_1',
  t = '_loader-text_8wbln_56',
  o = {
    'loader-container': '_loader-container_8wbln_1',
    loaderContainer: a,
    loader: r,
    pokeLoader: n,
    'loader-text': '_loader-text_8wbln_56',
    loaderText: t,
  };
function d() {
  return e.jsxs('div', {
    className: o.loaderContainer,
    'data-testid': 'loader',
    children: [
      e.jsx('div', { className: o.loader }),
      e.jsx('div', { className: o.loaderText, children: 'LOADING' }),
    ],
  });
}
export { d as L };
