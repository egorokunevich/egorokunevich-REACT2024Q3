import { n as t, O as a } from './components-DaO9B0RH.js';
import { S as n } from './SearchPage-MmmSILWX.js';
import './Loader-HfTiRl3h.js';
import './reduxHooks-sRxE1122.js';
import './selectors-DeimZJVc.js';
const x = ({ matches: r }) => [
  ...r.flatMap((e) => e.meta ?? []).filter((e) => !('title' in e)),
  { title: 'Pokemon Wiki' },
];
function f() {
  return t.jsxs(t.Fragment, { children: [t.jsx(n, {}), t.jsx(a, {})] });
}
export { f as default, x as meta };
