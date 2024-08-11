import { n as e } from './components-DaO9B0RH.js';
const n = '_btn_1ur6k_1',
  o = { btn: n };
function c(t) {
  return e.jsx(e.Fragment, {
    children: e.jsx('button', {
      className: o.btn + ' ' + t.className,
      onClick: t.onClick,
      'data-testid': 'button',
      children: t.txt,
    }),
  });
}
const a = (t) => t.pokemons.selectedPokemons,
  m = (t) => t.pokemons.theme;
export { c as B, a, o as b, m as g };
