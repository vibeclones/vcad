var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { i as e, t } from "./rolldown-runtime-COiEfhsA.js";
import { A as n, M as r, O as i } from "./three-drei-_EcrAYRL.js";
import { t as a } from "./react-Cf1qM0wN.js";
import { A as o, C as s, Cn as c, Ct as l, D as u, E as d, Ft as f, Gt as p, H as m, It as h, Jt as g, Lt as _, O as v, Q as y, S as b, T as x, Tt as S, U as C, Ut as ee, W as te, Wt as ne, Y as re, Zt as w, _ as ie, _n as ae, a as oe, at as T, b as se, c as ce, d as le, dn as ue, en as de, f as fe, fn as pe, ft as me, g as he, gn as ge, h as _e, i as ve, j as ye, k as be, kn as xe, l as Se, lt as Ce, m as we, o as Te, p as Ee, r as De, s as Oe, tn as ke, u as Ae, v as je, w as Me, wn as E, wt as Ne, x as Pe, y as Fe } from "./three-Dweqhmle.js";
import { t as Ie } from "./preload-helper-H3bccnwO.js";
let cy;
let __tla = (async () => {
  var D = i(), Le = () => {
  }, Re = {}, ze = {}, Be = null, Ve = {
    mark: Le,
    measure: Le
  };
  try {
    typeof window < `u` && (Re = window), typeof document < `u` && (ze = document), typeof MutationObserver < `u` && (Be = MutationObserver), typeof performance < `u` && (Ve = performance);
  } catch {
  }
  var { userAgent: He = `` } = Re.navigator || {}, Ue = Re, O = ze, We = Be, Ge = Ve;
  Ue.document;
  var Ke = !!O.documentElement && !!O.head && typeof O.addEventListener == `function` && typeof O.createElement == `function`, qe = ~He.indexOf(`MSIE`) || ~He.indexOf(`Trident/`), k = `classic`, Je = `duotone`, Ye = `sharp`, Xe = `sharp-duotone`, Ze = [
    k,
    Je,
    Ye,
    Xe
  ], Qe = {
    classic: {
      900: `fas`,
      400: `far`,
      normal: `far`,
      300: `fal`,
      100: `fat`
    },
    sharp: {
      900: `fass`,
      400: `fasr`,
      300: `fasl`,
      100: `fast`
    },
    "sharp-duotone": {
      900: `fasds`
    }
  }, $e = {
    kit: {
      fak: `kit`,
      "fa-kit": `kit`
    },
    "kit-duotone": {
      fakd: `kit-duotone`,
      "fa-kit-duotone": `kit-duotone`
    }
  }, et = [
    `kit`
  ], tt = /fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/, nt = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i, rt = {
    "Font Awesome 5 Free": {
      900: `fas`,
      400: `far`
    },
    "Font Awesome 5 Pro": {
      900: `fas`,
      400: `far`,
      normal: `far`,
      300: `fal`
    },
    "Font Awesome 5 Brands": {
      400: `fab`,
      normal: `fab`
    },
    "Font Awesome 5 Duotone": {
      900: `fad`
    }
  }, it = {
    "Font Awesome 6 Free": {
      900: `fas`,
      400: `far`
    },
    "Font Awesome 6 Pro": {
      900: `fas`,
      400: `far`,
      normal: `far`,
      300: `fal`,
      100: `fat`
    },
    "Font Awesome 6 Brands": {
      400: `fab`,
      normal: `fab`
    },
    "Font Awesome 6 Duotone": {
      900: `fad`
    },
    "Font Awesome 6 Sharp": {
      900: `fass`,
      400: `fasr`,
      normal: `fasr`,
      300: `fasl`,
      100: `fast`
    },
    "Font Awesome 6 Sharp Duotone": {
      900: `fasds`
    }
  }, at = {
    classic: {
      "fa-brands": `fab`,
      "fa-duotone": `fad`,
      "fa-light": `fal`,
      "fa-regular": `far`,
      "fa-solid": `fas`,
      "fa-thin": `fat`
    },
    sharp: {
      "fa-solid": `fass`,
      "fa-regular": `fasr`,
      "fa-light": `fasl`,
      "fa-thin": `fast`
    },
    "sharp-duotone": {
      "fa-solid": `fasds`
    }
  }, ot = {
    classic: [
      `fas`,
      `far`,
      `fal`,
      `fat`
    ],
    sharp: [
      `fass`,
      `fasr`,
      `fasl`,
      `fast`
    ],
    "sharp-duotone": [
      `fasds`
    ]
  }, st = {
    classic: {
      fab: `fa-brands`,
      fad: `fa-duotone`,
      fal: `fa-light`,
      far: `fa-regular`,
      fas: `fa-solid`,
      fat: `fa-thin`
    },
    sharp: {
      fass: `fa-solid`,
      fasr: `fa-regular`,
      fasl: `fa-light`,
      fast: `fa-thin`
    },
    "sharp-duotone": {
      fasds: `fa-solid`
    }
  }, ct = {
    classic: {
      solid: `fas`,
      regular: `far`,
      light: `fal`,
      thin: `fat`,
      duotone: `fad`,
      brands: `fab`
    },
    sharp: {
      solid: `fass`,
      regular: `fasr`,
      light: `fasl`,
      thin: `fast`
    },
    "sharp-duotone": {
      solid: `fasds`
    }
  }, lt = {
    classic: {
      fa: `solid`,
      fas: `solid`,
      "fa-solid": `solid`,
      far: `regular`,
      "fa-regular": `regular`,
      fal: `light`,
      "fa-light": `light`,
      fat: `thin`,
      "fa-thin": `thin`,
      fad: `duotone`,
      "fa-duotone": `duotone`,
      fab: `brands`,
      "fa-brands": `brands`
    },
    sharp: {
      fa: `solid`,
      fass: `solid`,
      "fa-solid": `solid`,
      fasr: `regular`,
      "fa-regular": `regular`,
      fasl: `light`,
      "fa-light": `light`,
      fast: `thin`,
      "fa-thin": `thin`
    },
    "sharp-duotone": {
      fa: `solid`,
      fasds: `solid`,
      "fa-solid": `solid`
    }
  }, ut = [
    `solid`,
    `regular`,
    `light`,
    `thin`,
    `duotone`,
    `brands`
  ], dt = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
  ], ft = dt.concat([
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20
  ]), pt = {
    GROUP: `duotone-group`,
    SWAP_OPACITY: `swap-opacity`,
    PRIMARY: `primary`,
    SECONDARY: `secondary`
  }, mt = [
    ...Object.keys(ot),
    ...ut,
    `2xs`,
    `xs`,
    `sm`,
    `lg`,
    `xl`,
    `2xl`,
    `beat`,
    `border`,
    `fade`,
    `beat-fade`,
    `bounce`,
    `flip-both`,
    `flip-horizontal`,
    `flip-vertical`,
    `flip`,
    `fw`,
    `inverse`,
    `layers-counter`,
    `layers-text`,
    `layers`,
    `li`,
    `pull-left`,
    `pull-right`,
    `pulse`,
    `rotate-180`,
    `rotate-270`,
    `rotate-90`,
    `rotate-by`,
    `shake`,
    `spin-pulse`,
    `spin-reverse`,
    `spin`,
    `stack-1x`,
    `stack-2x`,
    `stack`,
    `ul`,
    pt.GROUP,
    pt.SWAP_OPACITY,
    pt.PRIMARY,
    pt.SECONDARY
  ].concat(dt.map((e2) => `${e2}x`), ft.map((e2) => `w-${e2}`)), ht = {
    "Font Awesome Kit": {
      400: `fak`,
      normal: `fak`
    },
    "Font Awesome Kit Duotone": {
      400: `fakd`,
      normal: `fakd`
    }
  }, gt = {
    kit: {
      "fa-kit": `fak`
    },
    "kit-duotone": {
      "fa-kit-duotone": `fakd`
    }
  }, _t = {
    kit: {
      fak: `fa-kit`
    },
    "kit-duotone": {
      fakd: `fa-kit-duotone`
    }
  }, vt = {
    kit: {
      kit: `fak`
    },
    "kit-duotone": {
      "kit-duotone": `fakd`
    }
  }, yt = `___FONT_AWESOME___`, bt = 16, xt = `fa`, St = `svg-inline--fa`, Ct = `data-fa-i2svg`, wt = `data-fa-pseudo-element`, Tt = `data-fa-pseudo-element-pending`, Et = `data-prefix`, Dt = `data-icon`, Ot = `fontawesome-i2svg`, kt = `async`, At = [
    `HTML`,
    `HEAD`,
    `STYLE`,
    `SCRIPT`
  ], jt = (() => {
    try {
      return true;
    } catch {
      return false;
    }
  })(), Mt = [
    k,
    Ye,
    Xe
  ];
  function Nt(e2) {
    return new Proxy(e2, {
      get(e3, t2) {
        return t2 in e3 ? e3[t2] : e3[k];
      }
    });
  }
  var Pt = {
    ...lt
  };
  Pt[k] = {
    ...lt[k],
    ...$e.kit,
    ...$e[`kit-duotone`]
  };
  var Ft = Nt(Pt), It = {
    ...ct
  };
  It[k] = {
    ...It[k],
    ...vt.kit,
    ...vt[`kit-duotone`]
  };
  var Lt = Nt(It), Rt = {
    ...st
  };
  Rt[k] = {
    ...Rt[k],
    ..._t.kit
  };
  var zt = Nt(Rt), Bt = {
    ...at
  };
  Bt[k] = {
    ...Bt[k],
    ...gt.kit
  };
  var Vt = Nt(Bt), Ht = tt, Ut = `fa-layers-text`, Wt = nt;
  Nt({
    ...Qe
  });
  var Gt = [
    `class`,
    `data-prefix`,
    `data-icon`,
    `data-fa-transform`,
    `data-fa-mask`
  ], Kt = pt, qt = /* @__PURE__ */ new Set();
  Object.keys(Lt[k]).map(qt.add.bind(qt)), Object.keys(Lt[Ye]).map(qt.add.bind(qt)), Object.keys(Lt[Xe]).map(qt.add.bind(qt));
  var Jt = [
    ...et,
    ...mt
  ], Yt = Ue.FontAwesomeConfig || {};
  function Xt(e2) {
    var t2 = O.querySelector(`script[` + e2 + `]`);
    if (t2) return t2.getAttribute(e2);
  }
  function Zt(e2) {
    return e2 === `` ? true : e2 === `false` ? false : e2 === `true` || e2;
  }
  O && typeof O.querySelector == `function` && [
    [
      `data-family-prefix`,
      `familyPrefix`
    ],
    [
      `data-css-prefix`,
      `cssPrefix`
    ],
    [
      `data-family-default`,
      `familyDefault`
    ],
    [
      `data-style-default`,
      `styleDefault`
    ],
    [
      `data-replacement-class`,
      `replacementClass`
    ],
    [
      `data-auto-replace-svg`,
      `autoReplaceSvg`
    ],
    [
      `data-auto-add-css`,
      `autoAddCss`
    ],
    [
      `data-auto-a11y`,
      `autoA11y`
    ],
    [
      `data-search-pseudo-elements`,
      `searchPseudoElements`
    ],
    [
      `data-observe-mutations`,
      `observeMutations`
    ],
    [
      `data-mutate-approach`,
      `mutateApproach`
    ],
    [
      `data-keep-original-source`,
      `keepOriginalSource`
    ],
    [
      `data-measure-performance`,
      `measurePerformance`
    ],
    [
      `data-show-missing-icons`,
      `showMissingIcons`
    ]
  ].forEach((e2) => {
    let [t2, n2] = e2, r2 = Zt(Xt(t2));
    r2 != null && (Yt[n2] = r2);
  });
  var Qt = {
    styleDefault: `solid`,
    familyDefault: `classic`,
    cssPrefix: xt,
    replacementClass: St,
    autoReplaceSvg: true,
    autoAddCss: true,
    autoA11y: true,
    searchPseudoElements: false,
    observeMutations: true,
    mutateApproach: `async`,
    keepOriginalSource: true,
    measurePerformance: false,
    showMissingIcons: true
  };
  Yt.familyPrefix && (Yt.cssPrefix = Yt.familyPrefix);
  var $t = {
    ...Qt,
    ...Yt
  };
  $t.autoReplaceSvg || ($t.observeMutations = false);
  var A = {};
  Object.keys(Qt).forEach((e2) => {
    Object.defineProperty(A, e2, {
      enumerable: true,
      set: function(t2) {
        $t[e2] = t2, en.forEach((e3) => e3(A));
      },
      get: function() {
        return $t[e2];
      }
    });
  }), Object.defineProperty(A, "familyPrefix", {
    enumerable: true,
    set: function(e2) {
      $t.cssPrefix = e2, en.forEach((e3) => e3(A));
    },
    get: function() {
      return $t.cssPrefix;
    }
  }), Ue.FontAwesomeConfig = A;
  var en = [];
  function tn(e2) {
    return en.push(e2), () => {
      en.splice(en.indexOf(e2), 1);
    };
  }
  var nn = bt, rn = {
    size: 16,
    x: 0,
    y: 0,
    rotate: 0,
    flipX: false,
    flipY: false
  };
  function an(e2) {
    if (!e2 || !Ke) return;
    let t2 = O.createElement(`style`);
    t2.setAttribute(`type`, `text/css`), t2.innerHTML = e2;
    let n2 = O.head.childNodes, r2 = null;
    for (let e3 = n2.length - 1; e3 > -1; e3--) {
      let t3 = n2[e3], i2 = (t3.tagName || ``).toUpperCase();
      [
        `STYLE`,
        `LINK`
      ].indexOf(i2) > -1 && (r2 = t3);
    }
    return O.head.insertBefore(t2, r2), e2;
  }
  var on = `0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`;
  function sn() {
    let e2 = 12, t2 = ``;
    for (; e2-- > 0; ) t2 += on[Math.random() * 62 | 0];
    return t2;
  }
  function cn(e2) {
    let t2 = [];
    for (let n2 = (e2 || []).length >>> 0; n2--; ) t2[n2] = e2[n2];
    return t2;
  }
  function ln(e2) {
    return e2.classList ? cn(e2.classList) : (e2.getAttribute(`class`) || ``).split(` `).filter((e3) => e3);
  }
  function un(e2) {
    return `${e2}`.replace(/&/g, `&amp;`).replace(/"/g, `&quot;`).replace(/'/g, `&#39;`).replace(/</g, `&lt;`).replace(/>/g, `&gt;`);
  }
  function dn(e2) {
    return Object.keys(e2 || {}).reduce((t2, n2) => t2 + `${n2}="${un(e2[n2])}" `, ``).trim();
  }
  function fn(e2) {
    return Object.keys(e2 || {}).reduce((t2, n2) => t2 + `${n2}: ${e2[n2].trim()};`, ``);
  }
  function pn(e2) {
    return e2.size !== rn.size || e2.x !== rn.x || e2.y !== rn.y || e2.rotate !== rn.rotate || e2.flipX || e2.flipY;
  }
  function mn(e2) {
    let { transform: t2, containerWidth: n2, iconWidth: r2 } = e2;
    return {
      outer: {
        transform: `translate(${n2 / 2} 256)`
      },
      inner: {
        transform: `${`translate(${t2.x * 32}, ${t2.y * 32}) `} ${`scale(${t2.size / 16 * (t2.flipX ? -1 : 1)}, ${t2.size / 16 * (t2.flipY ? -1 : 1)}) `} ${`rotate(${t2.rotate} 0 0)`}`
      },
      path: {
        transform: `translate(${r2 / 2 * -1} -256)`
      }
    };
  }
  function hn(e2) {
    let { transform: t2, width: n2 = bt, height: r2 = bt, startCentered: i2 = false } = e2, a2 = ``;
    return a2 += i2 && qe ? `translate(${t2.x / nn - n2 / 2}em, ${t2.y / nn - r2 / 2}em) ` : i2 ? `translate(calc(-50% + ${t2.x / nn}em), calc(-50% + ${t2.y / nn}em)) ` : `translate(${t2.x / nn}em, ${t2.y / nn}em) `, a2 += `scale(${t2.size / nn * (t2.flipX ? -1 : 1)}, ${t2.size / nn * (t2.flipY ? -1 : 1)}) `, a2 += `rotate(${t2.rotate}deg) `, a2;
  }
  var gn = `:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;
  function _n() {
    let e2 = xt, t2 = St, n2 = A.cssPrefix, r2 = A.replacementClass, i2 = gn;
    if (n2 !== e2 || r2 !== t2) {
      let a2 = RegExp(`\\.${e2}\\-`, `g`), o2 = RegExp(`\\--${e2}\\-`, `g`), s2 = RegExp(`\\.${t2}`, `g`);
      i2 = i2.replace(a2, `.${n2}-`).replace(o2, `--${n2}-`).replace(s2, `.${r2}`);
    }
    return i2;
  }
  var vn = false;
  function yn() {
    A.autoAddCss && !vn && (an(_n()), vn = true);
  }
  var bn = {
    mixout() {
      return {
        dom: {
          css: _n,
          insertCss: yn
        }
      };
    },
    hooks() {
      return {
        beforeDOMElementCreation() {
          yn();
        },
        beforeI2svg() {
          yn();
        }
      };
    }
  }, xn = Ue || {};
  xn[yt] || (xn[yt] = {}), xn[yt].styles || (xn[yt].styles = {}), xn[yt].hooks || (xn[yt].hooks = {}), xn[yt].shims || (xn[yt].shims = []);
  var Sn = xn[yt], Cn = [], wn = function() {
    O.removeEventListener(`DOMContentLoaded`, wn), Tn = 1, Cn.map((e2) => e2());
  }, Tn = false;
  Ke && (Tn = (O.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(O.readyState), Tn || O.addEventListener(`DOMContentLoaded`, wn));
  function En(e2) {
    Ke && (Tn ? setTimeout(e2, 0) : Cn.push(e2));
  }
  function Dn(e2) {
    let { tag: t2, attributes: n2 = {}, children: r2 = [] } = e2;
    return typeof e2 == `string` ? un(e2) : `<${t2} ${dn(n2)}>${r2.map(Dn).join(``)}</${t2}>`;
  }
  function On(e2, t2, n2) {
    if (e2 && e2[t2] && e2[t2][n2]) return {
      prefix: t2,
      iconName: n2,
      icon: e2[t2][n2]
    };
  }
  var kn = function(e2, t2) {
    return function(n2, r2, i2, a2) {
      return e2.call(t2, n2, r2, i2, a2);
    };
  }, An = function(e2, t2, n2, r2) {
    var i2 = Object.keys(e2), a2 = i2.length, o2 = r2 === void 0 ? t2 : kn(t2, r2), s2, c2, l2;
    for (n2 === void 0 ? (s2 = 1, l2 = e2[i2[0]]) : (s2 = 0, l2 = n2); s2 < a2; s2++) c2 = i2[s2], l2 = o2(l2, e2[c2], c2, e2);
    return l2;
  };
  function jn(e2) {
    let t2 = [], n2 = 0, r2 = e2.length;
    for (; n2 < r2; ) {
      let i2 = e2.charCodeAt(n2++);
      if (i2 >= 55296 && i2 <= 56319 && n2 < r2) {
        let r3 = e2.charCodeAt(n2++);
        (r3 & 64512) == 56320 ? t2.push(((i2 & 1023) << 10) + (r3 & 1023) + 65536) : (t2.push(i2), n2--);
      } else t2.push(i2);
    }
    return t2;
  }
  function Mn(e2) {
    let t2 = jn(e2);
    return t2.length === 1 ? t2[0].toString(16) : null;
  }
  function Nn(e2, t2) {
    let n2 = e2.length, r2 = e2.charCodeAt(t2), i2;
    return r2 >= 55296 && r2 <= 56319 && n2 > t2 + 1 && (i2 = e2.charCodeAt(t2 + 1), i2 >= 56320 && i2 <= 57343) ? (r2 - 55296) * 1024 + i2 - 56320 + 65536 : r2;
  }
  function Pn(e2) {
    return Object.keys(e2).reduce((t2, n2) => {
      let r2 = e2[n2];
      return r2.icon ? t2[r2.iconName] = r2.icon : t2[n2] = r2, t2;
    }, {});
  }
  function Fn(e2, t2) {
    let { skipHooks: n2 = false } = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r2 = Pn(t2);
    typeof Sn.hooks.addPack == `function` && !n2 ? Sn.hooks.addPack(e2, Pn(t2)) : Sn.styles[e2] = {
      ...Sn.styles[e2] || {},
      ...r2
    }, e2 === `fas` && Fn(`fa`, t2);
  }
  var { styles: In, shims: Ln } = Sn, Rn = {
    [k]: Object.values(zt[k]),
    [Ye]: Object.values(zt[Ye]),
    [Xe]: Object.values(zt[Xe])
  }, zn = null, Bn = {}, Vn = {}, Hn = {}, Un = {}, Wn = {}, Gn = {
    [k]: Object.keys(Ft[k]),
    [Ye]: Object.keys(Ft[Ye]),
    [Xe]: Object.keys(Ft[Xe])
  };
  function Kn(e2) {
    return ~Jt.indexOf(e2);
  }
  function qn(e2, t2) {
    let n2 = t2.split(`-`), r2 = n2[0], i2 = n2.slice(1).join(`-`);
    return r2 === e2 && i2 !== `` && !Kn(i2) ? i2 : null;
  }
  var Jn = () => {
    let e2 = (e3) => An(In, (t3, n3, r2) => (t3[r2] = An(n3, e3, {}), t3), {});
    Bn = e2((e3, t3, n3) => (t3[3] && (e3[t3[3]] = n3), t3[2] && t3[2].filter((e4) => typeof e4 == `number`).forEach((t4) => {
      e3[t4.toString(16)] = n3;
    }), e3)), Vn = e2((e3, t3, n3) => (e3[n3] = n3, t3[2] && t3[2].filter((e4) => typeof e4 == `string`).forEach((t4) => {
      e3[t4] = n3;
    }), e3)), Wn = e2((e3, t3, n3) => {
      let r2 = t3[2];
      return e3[n3] = n3, r2.forEach((t4) => {
        e3[t4] = n3;
      }), e3;
    });
    let t2 = `far` in In || A.autoFetchSvg, n2 = An(Ln, (e3, n3) => {
      let r2 = n3[0], i2 = n3[1], a2 = n3[2];
      return i2 === `far` && !t2 && (i2 = `fas`), typeof r2 == `string` && (e3.names[r2] = {
        prefix: i2,
        iconName: a2
      }), typeof r2 == `number` && (e3.unicodes[r2.toString(16)] = {
        prefix: i2,
        iconName: a2
      }), e3;
    }, {
      names: {},
      unicodes: {}
    });
    Hn = n2.names, Un = n2.unicodes, zn = nr(A.styleDefault, {
      family: A.familyDefault
    });
  };
  tn((e2) => {
    zn = nr(e2.styleDefault, {
      family: A.familyDefault
    });
  }), Jn();
  function Yn(e2, t2) {
    return (Bn[e2] || {})[t2];
  }
  function Xn(e2, t2) {
    return (Vn[e2] || {})[t2];
  }
  function Zn(e2, t2) {
    return (Wn[e2] || {})[t2];
  }
  function Qn(e2) {
    return Hn[e2] || {
      prefix: null,
      iconName: null
    };
  }
  function $n(e2) {
    let t2 = Un[e2], n2 = Yn(`fas`, e2);
    return t2 || (n2 ? {
      prefix: `fas`,
      iconName: n2
    } : null) || {
      prefix: null,
      iconName: null
    };
  }
  function er() {
    return zn;
  }
  var tr = () => ({
    prefix: null,
    iconName: null,
    rest: []
  });
  function nr(e2) {
    let { family: t2 = k } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n2 = Ft[t2][e2], r2 = Lt[t2][e2] || Lt[t2][n2], i2 = e2 in Sn.styles ? e2 : null;
    return r2 || i2 || null;
  }
  var rr = {
    [k]: Object.keys(zt[k]),
    [Ye]: Object.keys(zt[Ye]),
    [Xe]: Object.keys(zt[Xe])
  };
  function ir(e2) {
    let { skipLookups: t2 = false } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n2 = {
      [k]: `${A.cssPrefix}-${k}`,
      [Ye]: `${A.cssPrefix}-${Ye}`,
      [Xe]: `${A.cssPrefix}-${Xe}`
    }, r2 = null, i2 = k, a2 = Ze.filter((e3) => e3 !== Je);
    a2.forEach((t3) => {
      (e2.includes(n2[t3]) || e2.some((e3) => rr[t3].includes(e3))) && (i2 = t3);
    });
    let o2 = e2.reduce((e3, o3) => {
      let s2 = qn(A.cssPrefix, o3);
      if (In[o3] ? (o3 = Rn[i2].includes(o3) ? Vt[i2][o3] : o3, r2 = o3, e3.prefix = o3) : Gn[i2].indexOf(o3) > -1 ? (r2 = o3, e3.prefix = nr(o3, {
        family: i2
      })) : s2 ? e3.iconName = s2 : o3 !== A.replacementClass && !a2.some((e4) => o3 === n2[e4]) && e3.rest.push(o3), !t2 && e3.prefix && e3.iconName) {
        let t3 = r2 === `fa` ? Qn(e3.iconName) : {}, n3 = Zn(e3.prefix, e3.iconName);
        t3.prefix && (r2 = null), e3.iconName = t3.iconName || n3 || e3.iconName, e3.prefix = t3.prefix || e3.prefix, e3.prefix === `far` && !In.far && In.fas && !A.autoFetchSvg && (e3.prefix = `fas`);
      }
      return e3;
    }, tr());
    return (e2.includes(`fa-brands`) || e2.includes(`fab`)) && (o2.prefix = `fab`), (e2.includes(`fa-duotone`) || e2.includes(`fad`)) && (o2.prefix = `fad`), !o2.prefix && i2 === Ye && (In.fass || A.autoFetchSvg) && (o2.prefix = `fass`, o2.iconName = Zn(o2.prefix, o2.iconName) || o2.iconName), !o2.prefix && i2 === Xe && (In.fasds || A.autoFetchSvg) && (o2.prefix = `fasds`, o2.iconName = Zn(o2.prefix, o2.iconName) || o2.iconName), (o2.prefix === `fa` || r2 === `fa`) && (o2.prefix = er() || `fas`), o2;
  }
  var ar = class {
    constructor() {
      this.definitions = {};
    }
    add() {
      let e2 = [
        ...arguments
      ].reduce(this._pullDefinitions, {});
      Object.keys(e2).forEach((t2) => {
        this.definitions[t2] = {
          ...this.definitions[t2] || {},
          ...e2[t2]
        }, Fn(t2, e2[t2]);
        let n2 = zt[k][t2];
        n2 && Fn(n2, e2[t2]), Jn();
      });
    }
    reset() {
      this.definitions = {};
    }
    _pullDefinitions(e2, t2) {
      let n2 = t2.prefix && t2.iconName && t2.icon ? {
        0: t2
      } : t2;
      return Object.keys(n2).map((t3) => {
        let { prefix: r2, iconName: i2, icon: a2 } = n2[t3], o2 = a2[2];
        e2[r2] || (e2[r2] = {}), o2.length > 0 && o2.forEach((t4) => {
          typeof t4 == `string` && (e2[r2][t4] = a2);
        }), e2[r2][i2] = a2;
      }), e2;
    }
  }, or = [], sr = {}, cr = {}, lr = Object.keys(cr);
  function ur(e2, t2) {
    let { mixoutsTo: n2 } = t2;
    return or = e2, sr = {}, Object.keys(cr).forEach((e3) => {
      lr.indexOf(e3) === -1 && delete cr[e3];
    }), or.forEach((e3) => {
      let t3 = e3.mixout ? e3.mixout() : {};
      if (Object.keys(t3).forEach((e4) => {
        typeof t3[e4] == `function` && (n2[e4] = t3[e4]), typeof t3[e4] == `object` && Object.keys(t3[e4]).forEach((r2) => {
          n2[e4] || (n2[e4] = {}), n2[e4][r2] = t3[e4][r2];
        });
      }), e3.hooks) {
        let t4 = e3.hooks();
        Object.keys(t4).forEach((e4) => {
          sr[e4] || (sr[e4] = []), sr[e4].push(t4[e4]);
        });
      }
      e3.provides && e3.provides(cr);
    }), n2;
  }
  function dr(e2, t2) {
    var n2 = [
      ...arguments
    ].slice(2);
    return (sr[e2] || []).forEach((e3) => {
      t2 = e3.apply(null, [
        t2,
        ...n2
      ]);
    }), t2;
  }
  function fr(e2) {
    var t2 = [
      ...arguments
    ].slice(1);
    (sr[e2] || []).forEach((e3) => {
      e3.apply(null, t2);
    });
  }
  function pr() {
    let e2 = arguments[0], t2 = Array.prototype.slice.call(arguments, 1);
    return cr[e2] ? cr[e2].apply(null, t2) : void 0;
  }
  function mr(e2) {
    e2.prefix === `fa` && (e2.prefix = `fas`);
    let { iconName: t2 } = e2, n2 = e2.prefix || er();
    if (t2) return t2 = Zn(n2, t2) || t2, On(hr.definitions, n2, t2) || On(Sn.styles, n2, t2);
  }
  var hr = new ar(), gr = {
    noAuto: () => {
      A.autoReplaceSvg = false, A.observeMutations = false, fr(`noAuto`);
    },
    config: A,
    dom: {
      i2svg: function() {
        let e2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        return Ke ? (fr(`beforeI2svg`, e2), pr(`pseudoElements2svg`, e2), pr(`i2svg`, e2)) : Promise.reject(Error(`Operation requires a DOM of some kind.`));
      },
      watch: function() {
        let e2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, { autoReplaceSvgRoot: t2 } = e2;
        A.autoReplaceSvg === false && (A.autoReplaceSvg = true), A.observeMutations = true, En(() => {
          _r({
            autoReplaceSvgRoot: t2
          }), fr(`watch`, e2);
        });
      }
    },
    parse: {
      icon: (e2) => {
        if (e2 === null) return null;
        if (typeof e2 == `object` && e2.prefix && e2.iconName) return {
          prefix: e2.prefix,
          iconName: Zn(e2.prefix, e2.iconName) || e2.iconName
        };
        if (Array.isArray(e2) && e2.length === 2) {
          let t2 = e2[1].indexOf(`fa-`) === 0 ? e2[1].slice(3) : e2[1], n2 = nr(e2[0]);
          return {
            prefix: n2,
            iconName: Zn(n2, t2) || t2
          };
        }
        if (typeof e2 == `string` && (e2.indexOf(`${A.cssPrefix}-`) > -1 || e2.match(Ht))) {
          let t2 = ir(e2.split(` `), {
            skipLookups: true
          });
          return {
            prefix: t2.prefix || er(),
            iconName: Zn(t2.prefix, t2.iconName) || t2.iconName
          };
        }
        if (typeof e2 == `string`) {
          let t2 = er();
          return {
            prefix: t2,
            iconName: Zn(t2, e2) || e2
          };
        }
      }
    },
    library: hr,
    findIconDefinition: mr,
    toHtml: Dn
  }, _r = function() {
    let { autoReplaceSvgRoot: e2 = O } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    (Object.keys(Sn.styles).length > 0 || A.autoFetchSvg) && Ke && A.autoReplaceSvg && gr.dom.i2svg({
      node: e2
    });
  };
  function vr(e2, t2) {
    return Object.defineProperty(e2, "abstract", {
      get: t2
    }), Object.defineProperty(e2, "html", {
      get: function() {
        return e2.abstract.map((e3) => Dn(e3));
      }
    }), Object.defineProperty(e2, "node", {
      get: function() {
        if (!Ke) return;
        let t3 = O.createElement(`div`);
        return t3.innerHTML = e2.html, t3.children;
      }
    }), e2;
  }
  function yr(e2) {
    let { children: t2, main: n2, mask: r2, attributes: i2, styles: a2, transform: o2 } = e2;
    if (pn(o2) && n2.found && !r2.found) {
      let { width: e3, height: t3 } = n2, r3 = {
        x: e3 / t3 / 2,
        y: 0.5
      };
      i2.style = fn({
        ...a2,
        "transform-origin": `${r3.x + o2.x / 16}em ${r3.y + o2.y / 16}em`
      });
    }
    return [
      {
        tag: `svg`,
        attributes: i2,
        children: t2
      }
    ];
  }
  function br(e2) {
    let { prefix: t2, iconName: n2, children: r2, attributes: i2, symbol: a2 } = e2, o2 = a2 === true ? `${t2}-${A.cssPrefix}-${n2}` : a2;
    return [
      {
        tag: `svg`,
        attributes: {
          style: `display: none;`
        },
        children: [
          {
            tag: `symbol`,
            attributes: {
              ...i2,
              id: o2
            },
            children: r2
          }
        ]
      }
    ];
  }
  function xr(e2) {
    let { icons: { main: t2, mask: n2 }, prefix: r2, iconName: i2, transform: a2, symbol: o2, title: s2, maskId: c2, titleId: l2, extra: u2, watchable: d2 = false } = e2, { width: f2, height: p2 } = n2.found ? n2 : t2, m2 = r2 === `fak`, h2 = [
      A.replacementClass,
      i2 ? `${A.cssPrefix}-${i2}` : ``
    ].filter((e3) => u2.classes.indexOf(e3) === -1).filter((e3) => e3 !== `` || !!e3).concat(u2.classes).join(` `), g2 = {
      children: [],
      attributes: {
        ...u2.attributes,
        "data-prefix": r2,
        "data-icon": i2,
        class: h2,
        role: u2.attributes.role || `img`,
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 ${f2} ${p2}`
      }
    }, _2 = m2 && !~u2.classes.indexOf(`fa-fw`) ? {
      width: `${f2 / p2 * 16 * 0.0625}em`
    } : {};
    d2 && (g2.attributes[Ct] = ``), s2 && (g2.children.push({
      tag: `title`,
      attributes: {
        id: g2.attributes[`aria-labelledby`] || `title-${l2 || sn()}`
      },
      children: [
        s2
      ]
    }), delete g2.attributes.title);
    let v2 = {
      ...g2,
      prefix: r2,
      iconName: i2,
      main: t2,
      mask: n2,
      maskId: c2,
      transform: a2,
      symbol: o2,
      styles: {
        ..._2,
        ...u2.styles
      }
    }, { children: y2, attributes: b2 } = n2.found && t2.found ? pr(`generateAbstractMask`, v2) || {
      children: [],
      attributes: {}
    } : pr(`generateAbstractIcon`, v2) || {
      children: [],
      attributes: {}
    };
    return v2.children = y2, v2.attributes = b2, o2 ? br(v2) : yr(v2);
  }
  function Sr(e2) {
    let { content: t2, width: n2, height: r2, transform: i2, title: a2, extra: o2, watchable: s2 = false } = e2, c2 = {
      ...o2.attributes,
      ...a2 ? {
        title: a2
      } : {},
      class: o2.classes.join(` `)
    };
    s2 && (c2[Ct] = ``);
    let l2 = {
      ...o2.styles
    };
    pn(i2) && (l2.transform = hn({
      transform: i2,
      startCentered: true,
      width: n2,
      height: r2
    }), l2[`-webkit-transform`] = l2.transform);
    let u2 = fn(l2);
    u2.length > 0 && (c2.style = u2);
    let d2 = [];
    return d2.push({
      tag: `span`,
      attributes: c2,
      children: [
        t2
      ]
    }), a2 && d2.push({
      tag: `span`,
      attributes: {
        class: `sr-only`
      },
      children: [
        a2
      ]
    }), d2;
  }
  function Cr(e2) {
    let { content: t2, title: n2, extra: r2 } = e2, i2 = {
      ...r2.attributes,
      ...n2 ? {
        title: n2
      } : {},
      class: r2.classes.join(` `)
    }, a2 = fn(r2.styles);
    a2.length > 0 && (i2.style = a2);
    let o2 = [];
    return o2.push({
      tag: `span`,
      attributes: i2,
      children: [
        t2
      ]
    }), n2 && o2.push({
      tag: `span`,
      attributes: {
        class: `sr-only`
      },
      children: [
        n2
      ]
    }), o2;
  }
  var { styles: wr } = Sn;
  function Tr(e2) {
    let t2 = e2[0], n2 = e2[1], [r2] = e2.slice(4), i2 = null;
    return i2 = Array.isArray(r2) ? {
      tag: `g`,
      attributes: {
        class: `${A.cssPrefix}-${Kt.GROUP}`
      },
      children: [
        {
          tag: `path`,
          attributes: {
            class: `${A.cssPrefix}-${Kt.SECONDARY}`,
            fill: `currentColor`,
            d: r2[0]
          }
        },
        {
          tag: `path`,
          attributes: {
            class: `${A.cssPrefix}-${Kt.PRIMARY}`,
            fill: `currentColor`,
            d: r2[1]
          }
        }
      ]
    } : {
      tag: `path`,
      attributes: {
        fill: `currentColor`,
        d: r2
      }
    }, {
      found: true,
      width: t2,
      height: n2,
      icon: i2
    };
  }
  var Er = {
    found: false,
    width: 512,
    height: 512
  };
  function Dr(e2, t2) {
    !jt && !A.showMissingIcons && e2 && console.error(`Icon with name "${e2}" and prefix "${t2}" is missing.`);
  }
  function Or(e2, t2) {
    let n2 = t2;
    return t2 === `fa` && A.styleDefault !== null && (t2 = er()), new Promise((r2, i2) => {
      if (n2 === `fa`) {
        let n3 = Qn(e2) || {};
        e2 = n3.iconName || e2, t2 = n3.prefix || t2;
      }
      if (e2 && t2 && wr[t2] && wr[t2][e2]) {
        let n3 = wr[t2][e2];
        return r2(Tr(n3));
      }
      Dr(e2, t2), r2({
        ...Er,
        icon: A.showMissingIcons && e2 && pr(`missingIconAbstract`) || {}
      });
    });
  }
  var kr = () => {
  }, Ar = A.measurePerformance && Ge && Ge.mark && Ge.measure ? Ge : {
    mark: kr,
    measure: kr
  }, jr = `FA "6.6.0"`, Mr = (e2) => (Ar.mark(`${jr} ${e2} begins`), () => Nr(e2)), Nr = (e2) => {
    Ar.mark(`${jr} ${e2} ends`), Ar.measure(`${jr} ${e2}`, `${jr} ${e2} begins`, `${jr} ${e2} ends`);
  }, Pr = {
    begin: Mr,
    end: Nr
  }, Fr = () => {
  };
  function Ir(e2) {
    return typeof (e2.getAttribute ? e2.getAttribute(Ct) : null) == `string`;
  }
  function Lr(e2) {
    let t2 = e2.getAttribute ? e2.getAttribute(Et) : null, n2 = e2.getAttribute ? e2.getAttribute(Dt) : null;
    return t2 && n2;
  }
  function Rr(e2) {
    return e2 && e2.classList && e2.classList.contains && e2.classList.contains(A.replacementClass);
  }
  function zr() {
    return A.autoReplaceSvg === true ? Wr.replace : Wr[A.autoReplaceSvg] || Wr.replace;
  }
  function Br(e2) {
    return O.createElementNS(`http://www.w3.org/2000/svg`, e2);
  }
  function Vr(e2) {
    return O.createElement(e2);
  }
  function Hr(e2) {
    let { ceFn: t2 = e2.tag === `svg` ? Br : Vr } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (typeof e2 == `string`) return O.createTextNode(e2);
    let n2 = t2(e2.tag);
    return Object.keys(e2.attributes || []).forEach(function(t3) {
      n2.setAttribute(t3, e2.attributes[t3]);
    }), (e2.children || []).forEach(function(e3) {
      n2.appendChild(Hr(e3, {
        ceFn: t2
      }));
    }), n2;
  }
  function Ur(e2) {
    let t2 = ` ${e2.outerHTML} `;
    return t2 = `${t2}Font Awesome fontawesome.com `, t2;
  }
  var Wr = {
    replace: function(e2) {
      let t2 = e2[0];
      if (t2.parentNode) {
        if (e2[1].forEach((e3) => {
          t2.parentNode.insertBefore(Hr(e3), t2);
        }), t2.getAttribute(Ct) === null && A.keepOriginalSource) {
          let e3 = O.createComment(Ur(t2));
          t2.parentNode.replaceChild(e3, t2);
        } else t2.remove();
      }
    },
    nest: function(e2) {
      let t2 = e2[0], n2 = e2[1];
      if (~ln(t2).indexOf(A.replacementClass)) return Wr.replace(e2);
      let r2 = RegExp(`${A.cssPrefix}-.*`);
      if (delete n2[0].attributes.id, n2[0].attributes.class) {
        let e3 = n2[0].attributes.class.split(` `).reduce((e4, t3) => (t3 === A.replacementClass || t3.match(r2) ? e4.toSvg.push(t3) : e4.toNode.push(t3), e4), {
          toNode: [],
          toSvg: []
        });
        n2[0].attributes.class = e3.toSvg.join(` `), e3.toNode.length === 0 ? t2.removeAttribute(`class`) : t2.setAttribute(`class`, e3.toNode.join(` `));
      }
      let i2 = n2.map((e3) => Dn(e3)).join(`
`);
      t2.setAttribute(Ct, ``), t2.innerHTML = i2;
    }
  };
  function Gr(e2) {
    e2();
  }
  function Kr(e2, t2) {
    let n2 = typeof t2 == `function` ? t2 : Fr;
    if (e2.length === 0) n2();
    else {
      let t3 = Gr;
      A.mutateApproach === kt && (t3 = Ue.requestAnimationFrame || Gr), t3(() => {
        let t4 = zr(), r2 = Pr.begin(`mutate`);
        e2.map(t4), r2(), n2();
      });
    }
  }
  var qr = false;
  function Jr() {
    qr = true;
  }
  function Yr() {
    qr = false;
  }
  var Xr = null;
  function Zr(e2) {
    if (!We || !A.observeMutations) return;
    let { treeCallback: t2 = Fr, nodeCallback: n2 = Fr, pseudoElementsCallback: r2 = Fr, observeMutationsRoot: i2 = O } = e2;
    Xr = new We((e3) => {
      if (qr) return;
      let i3 = er();
      cn(e3).forEach((e4) => {
        if (e4.type === `childList` && e4.addedNodes.length > 0 && !Ir(e4.addedNodes[0]) && (A.searchPseudoElements && r2(e4.target), t2(e4.target)), e4.type === `attributes` && e4.target.parentNode && A.searchPseudoElements && r2(e4.target.parentNode), e4.type === `attributes` && Ir(e4.target) && ~Gt.indexOf(e4.attributeName)) {
          if (e4.attributeName === `class` && Lr(e4.target)) {
            let { prefix: t3, iconName: n3 } = ir(ln(e4.target));
            e4.target.setAttribute(Et, t3 || i3), n3 && e4.target.setAttribute(Dt, n3);
          } else Rr(e4.target) && n2(e4.target);
        }
      });
    }), Ke && Xr.observe(i2, {
      childList: true,
      attributes: true,
      characterData: true,
      subtree: true
    });
  }
  function Qr() {
    Xr && Xr.disconnect();
  }
  function $r(e2) {
    let t2 = e2.getAttribute(`style`), n2 = [];
    return t2 && (n2 = t2.split(`;`).reduce((e3, t3) => {
      let n3 = t3.split(`:`), r2 = n3[0], i2 = n3.slice(1);
      return r2 && i2.length > 0 && (e3[r2] = i2.join(`:`).trim()), e3;
    }, {})), n2;
  }
  function ei(e2) {
    let t2 = e2.getAttribute(`data-prefix`), n2 = e2.getAttribute(`data-icon`), r2 = e2.innerText === void 0 ? `` : e2.innerText.trim(), i2 = ir(ln(e2));
    return i2.prefix || (i2.prefix = er()), t2 && n2 && (i2.prefix = t2, i2.iconName = n2), i2.iconName && i2.prefix || (i2.prefix && r2.length > 0 && (i2.iconName = Xn(i2.prefix, e2.innerText) || Yn(i2.prefix, Mn(e2.innerText))), !i2.iconName && A.autoFetchSvg && e2.firstChild && e2.firstChild.nodeType === Node.TEXT_NODE && (i2.iconName = e2.firstChild.data)), i2;
  }
  function ti(e2) {
    let t2 = cn(e2.attributes).reduce((e3, t3) => (e3.name !== `class` && e3.name !== `style` && (e3[t3.name] = t3.value), e3), {}), n2 = e2.getAttribute(`title`), r2 = e2.getAttribute(`data-fa-title-id`);
    return A.autoA11y && (n2 ? t2[`aria-labelledby`] = `${A.replacementClass}-title-${r2 || sn()}` : (t2[`aria-hidden`] = `true`, t2.focusable = `false`)), t2;
  }
  function ni() {
    return {
      iconName: null,
      title: null,
      titleId: null,
      prefix: null,
      transform: rn,
      symbol: false,
      mask: {
        iconName: null,
        prefix: null,
        rest: []
      },
      maskId: null,
      extra: {
        classes: [],
        styles: {},
        attributes: {}
      }
    };
  }
  function ri(e2) {
    let t2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      styleParser: true
    }, { iconName: n2, prefix: r2, rest: i2 } = ei(e2), a2 = ti(e2), o2 = dr(`parseNodeAttributes`, {}, e2), s2 = t2.styleParser ? $r(e2) : [];
    return {
      iconName: n2,
      title: e2.getAttribute(`title`),
      titleId: e2.getAttribute(`data-fa-title-id`),
      prefix: r2,
      transform: rn,
      mask: {
        iconName: null,
        prefix: null,
        rest: []
      },
      maskId: null,
      symbol: false,
      extra: {
        classes: i2,
        styles: s2,
        attributes: a2
      },
      ...o2
    };
  }
  var { styles: ii } = Sn;
  function ai(e2) {
    let t2 = A.autoReplaceSvg === `nest` ? ri(e2, {
      styleParser: false
    }) : ri(e2);
    return ~t2.extra.classes.indexOf(Ut) ? pr(`generateLayersText`, e2, t2) : pr(`generateSvgReplacementMutation`, e2, t2);
  }
  var oi = /* @__PURE__ */ new Set();
  Mt.map((e2) => {
    oi.add(`fa-${e2}`);
  }), Object.keys(Ft[k]).map(oi.add.bind(oi)), Object.keys(Ft[Ye]).map(oi.add.bind(oi)), Object.keys(Ft[Xe]).map(oi.add.bind(oi)), oi = [
    ...oi
  ];
  function si(e2) {
    let t2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
    if (!Ke) return Promise.resolve();
    let n2 = O.documentElement.classList, r2 = (e3) => n2.add(`${Ot}-${e3}`), i2 = (e3) => n2.remove(`${Ot}-${e3}`), a2 = A.autoFetchSvg ? oi : Mt.map((e3) => `fa-${e3}`).concat(Object.keys(ii));
    a2.includes(`fa`) || a2.push(`fa`);
    let o2 = [
      `.${Ut}:not([${Ct}])`
    ].concat(a2.map((e3) => `.${e3}:not([${Ct}])`)).join(`, `);
    if (o2.length === 0) return Promise.resolve();
    let s2 = [];
    try {
      s2 = cn(e2.querySelectorAll(o2));
    } catch {
    }
    if (s2.length > 0) r2(`pending`), i2(`complete`);
    else return Promise.resolve();
    let c2 = Pr.begin(`onTree`), l2 = s2.reduce((e3, t3) => {
      try {
        let n3 = ai(t3);
        n3 && e3.push(n3);
      } catch (e4) {
        jt || e4.name === `MissingIcon` && console.error(e4);
      }
      return e3;
    }, []);
    return new Promise((e3, n3) => {
      Promise.all(l2).then((n4) => {
        Kr(n4, () => {
          r2(`active`), r2(`complete`), i2(`pending`), typeof t2 == `function` && t2(), c2(), e3();
        });
      }).catch((e4) => {
        c2(), n3(e4);
      });
    });
  }
  function ci(e2) {
    let t2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
    ai(e2).then((e3) => {
      e3 && Kr([
        e3
      ], t2);
    });
  }
  function li(e2) {
    return function(t2) {
      let n2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r2 = (t2 || {}).icon ? t2 : mr(t2 || {}), { mask: i2 } = n2;
      return i2 && (i2 = (i2 || {}).icon ? i2 : mr(i2 || {})), e2(r2, {
        ...n2,
        mask: i2
      });
    };
  }
  var ui = function(e2) {
    let t2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, { transform: n2 = rn, symbol: r2 = false, mask: i2 = null, maskId: a2 = null, title: o2 = null, titleId: s2 = null, classes: c2 = [], attributes: l2 = {}, styles: u2 = {} } = t2;
    if (!e2) return;
    let { prefix: d2, iconName: f2, icon: p2 } = e2;
    return vr({
      type: `icon`,
      ...e2
    }, () => (fr(`beforeDOMElementCreation`, {
      iconDefinition: e2,
      params: t2
    }), A.autoA11y && (o2 ? l2[`aria-labelledby`] = `${A.replacementClass}-title-${s2 || sn()}` : (l2[`aria-hidden`] = `true`, l2.focusable = `false`)), xr({
      icons: {
        main: Tr(p2),
        mask: i2 ? Tr(i2.icon) : {
          found: false,
          width: null,
          height: null,
          icon: {}
        }
      },
      prefix: d2,
      iconName: f2,
      transform: {
        ...rn,
        ...n2
      },
      symbol: r2,
      title: o2,
      maskId: a2,
      titleId: s2,
      extra: {
        attributes: l2,
        styles: u2,
        classes: c2
      }
    })));
  }, di = {
    mixout() {
      return {
        icon: li(ui)
      };
    },
    hooks() {
      return {
        mutationObserverCallbacks(e2) {
          return e2.treeCallback = si, e2.nodeCallback = ci, e2;
        }
      };
    },
    provides(e2) {
      e2.i2svg = function(e3) {
        let { node: t2 = O, callback: n2 = () => {
        } } = e3;
        return si(t2, n2);
      }, e2.generateSvgReplacementMutation = function(e3, t2) {
        let { iconName: n2, title: r2, titleId: i2, prefix: a2, transform: o2, symbol: s2, mask: c2, maskId: l2, extra: u2 } = t2;
        return new Promise((t3, d2) => {
          Promise.all([
            Or(n2, a2),
            c2.iconName ? Or(c2.iconName, c2.prefix) : Promise.resolve({
              found: false,
              width: 512,
              height: 512,
              icon: {}
            })
          ]).then((c3) => {
            let [d3, f2] = c3;
            t3([
              e3,
              xr({
                icons: {
                  main: d3,
                  mask: f2
                },
                prefix: a2,
                iconName: n2,
                transform: o2,
                symbol: s2,
                maskId: l2,
                title: r2,
                titleId: i2,
                extra: u2,
                watchable: true
              })
            ]);
          }).catch(d2);
        });
      }, e2.generateAbstractIcon = function(e3) {
        let { children: t2, attributes: n2, main: r2, transform: i2, styles: a2 } = e3, o2 = fn(a2);
        o2.length > 0 && (n2.style = o2);
        let s2;
        return pn(i2) && (s2 = pr(`generateAbstractTransformGrouping`, {
          main: r2,
          transform: i2,
          containerWidth: r2.width,
          iconWidth: r2.width
        })), t2.push(s2 || r2.icon), {
          children: t2,
          attributes: n2
        };
      };
    }
  }, fi = {
    mixout() {
      return {
        layer(e2) {
          let t2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, { classes: n2 = [] } = t2;
          return vr({
            type: `layer`
          }, () => {
            fr(`beforeDOMElementCreation`, {
              assembler: e2,
              params: t2
            });
            let r2 = [];
            return e2((e3) => {
              Array.isArray(e3) ? e3.map((e4) => {
                r2 = r2.concat(e4.abstract);
              }) : r2 = r2.concat(e3.abstract);
            }), [
              {
                tag: `span`,
                attributes: {
                  class: [
                    `${A.cssPrefix}-layers`,
                    ...n2
                  ].join(` `)
                },
                children: r2
              }
            ];
          });
        }
      };
    }
  }, pi = {
    mixout() {
      return {
        counter(e2) {
          let t2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, { title: n2 = null, classes: r2 = [], attributes: i2 = {}, styles: a2 = {} } = t2;
          return vr({
            type: `counter`,
            content: e2
          }, () => (fr(`beforeDOMElementCreation`, {
            content: e2,
            params: t2
          }), Cr({
            content: e2.toString(),
            title: n2,
            extra: {
              attributes: i2,
              styles: a2,
              classes: [
                `${A.cssPrefix}-layers-counter`,
                ...r2
              ]
            }
          })));
        }
      };
    }
  }, mi = {
    mixout() {
      return {
        text(e2) {
          let t2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, { transform: n2 = rn, title: r2 = null, classes: i2 = [], attributes: a2 = {}, styles: o2 = {} } = t2;
          return vr({
            type: `text`,
            content: e2
          }, () => (fr(`beforeDOMElementCreation`, {
            content: e2,
            params: t2
          }), Sr({
            content: e2,
            transform: {
              ...rn,
              ...n2
            },
            title: r2,
            extra: {
              attributes: a2,
              styles: o2,
              classes: [
                `${A.cssPrefix}-layers-text`,
                ...i2
              ]
            }
          })));
        }
      };
    },
    provides(e2) {
      e2.generateLayersText = function(e3, t2) {
        let { title: n2, transform: r2, extra: i2 } = t2, a2 = null, o2 = null;
        if (qe) {
          let t3 = parseInt(getComputedStyle(e3).fontSize, 10), n3 = e3.getBoundingClientRect();
          a2 = n3.width / t3, o2 = n3.height / t3;
        }
        return A.autoA11y && !n2 && (i2.attributes[`aria-hidden`] = `true`), Promise.resolve([
          e3,
          Sr({
            content: e3.innerHTML,
            width: a2,
            height: o2,
            transform: r2,
            title: n2,
            extra: i2,
            watchable: true
          })
        ]);
      };
    }
  }, hi = RegExp(`"`, `ug`), gi = [
    1105920,
    1112319
  ], _i = {
    FontAwesome: {
      normal: `fas`,
      400: `fas`
    },
    ...it,
    ...rt,
    ...ht
  }, vi = Object.keys(_i).reduce((e2, t2) => (e2[t2.toLowerCase()] = _i[t2], e2), {}), yi = Object.keys(vi).reduce((e2, t2) => {
    let n2 = vi[t2];
    return e2[t2] = n2[900] || [
      ...Object.entries(n2)
    ][0][1], e2;
  }, {});
  function bi(e2) {
    let t2 = e2.replace(hi, ``), n2 = Nn(t2, 0), r2 = n2 >= gi[0] && n2 <= gi[1], i2 = t2.length === 2 && t2[0] === t2[1];
    return {
      value: Mn(i2 ? t2[0] : t2),
      isSecondary: r2 || i2
    };
  }
  function xi(e2, t2) {
    let n2 = e2.replace(/^['"]|['"]$/g, ``).toLowerCase(), r2 = parseInt(t2), i2 = isNaN(r2) ? `normal` : r2;
    return (vi[n2] || {})[i2] || yi[n2];
  }
  function Si(e2, t2) {
    let n2 = `${Tt}${t2.replace(`:`, `-`)}`;
    return new Promise((r2, i2) => {
      if (e2.getAttribute(n2) !== null) return r2();
      let a2 = cn(e2.children).filter((e3) => e3.getAttribute(wt) === t2)[0], o2 = Ue.getComputedStyle(e2, t2), s2 = o2.getPropertyValue(`font-family`), c2 = s2.match(Wt), l2 = o2.getPropertyValue(`font-weight`), u2 = o2.getPropertyValue(`content`);
      if (a2 && !c2) return e2.removeChild(a2), r2();
      if (c2 && u2 !== `none` && u2 !== ``) {
        let u3 = o2.getPropertyValue(`content`), d2 = xi(s2, l2), { value: f2, isSecondary: p2 } = bi(u3), m2 = c2[0].startsWith(`FontAwesome`), h2 = Yn(d2, f2), g2 = h2;
        if (m2) {
          let e3 = $n(f2);
          e3.iconName && e3.prefix && (h2 = e3.iconName, d2 = e3.prefix);
        }
        if (h2 && !p2 && (!a2 || a2.getAttribute(Et) !== d2 || a2.getAttribute(Dt) !== g2)) {
          e2.setAttribute(n2, g2), a2 && e2.removeChild(a2);
          let o3 = ni(), { extra: s3 } = o3;
          s3.attributes[wt] = t2, Or(h2, d2).then((i3) => {
            let a3 = xr({
              ...o3,
              icons: {
                main: i3,
                mask: tr()
              },
              prefix: d2,
              iconName: g2,
              extra: s3,
              watchable: true
            }), c3 = O.createElementNS(`http://www.w3.org/2000/svg`, `svg`);
            t2 === `::before` ? e2.insertBefore(c3, e2.firstChild) : e2.appendChild(c3), c3.outerHTML = a3.map((e3) => Dn(e3)).join(`
`), e2.removeAttribute(n2), r2();
          }).catch(i2);
        } else r2();
      } else r2();
    });
  }
  function Ci(e2) {
    return Promise.all([
      Si(e2, `::before`),
      Si(e2, `::after`)
    ]);
  }
  function wi(e2) {
    return e2.parentNode !== document.head && !~At.indexOf(e2.tagName.toUpperCase()) && !e2.getAttribute(wt) && (!e2.parentNode || e2.parentNode.tagName !== `svg`);
  }
  function Ti(e2) {
    if (Ke) return new Promise((t2, n2) => {
      let r2 = cn(e2.querySelectorAll(`*`)).filter(wi).map(Ci), i2 = Pr.begin(`searchPseudoElements`);
      Jr(), Promise.all(r2).then(() => {
        i2(), Yr(), t2();
      }).catch(() => {
        i2(), Yr(), n2();
      });
    });
  }
  var Ei = {
    hooks() {
      return {
        mutationObserverCallbacks(e2) {
          return e2.pseudoElementsCallback = Ti, e2;
        }
      };
    },
    provides(e2) {
      e2.pseudoElements2svg = function(e3) {
        let { node: t2 = O } = e3;
        A.searchPseudoElements && Ti(t2);
      };
    }
  }, Di = false, Oi = {
    mixout() {
      return {
        dom: {
          unwatch() {
            Jr(), Di = true;
          }
        }
      };
    },
    hooks() {
      return {
        bootstrap() {
          Zr(dr(`mutationObserverCallbacks`, {}));
        },
        noAuto() {
          Qr();
        },
        watch(e2) {
          let { observeMutationsRoot: t2 } = e2;
          Di ? Yr() : Zr(dr(`mutationObserverCallbacks`, {
            observeMutationsRoot: t2
          }));
        }
      };
    }
  }, ki = (e2) => e2.toLowerCase().split(` `).reduce((e3, t2) => {
    let n2 = t2.toLowerCase().split(`-`), r2 = n2[0], i2 = n2.slice(1).join(`-`);
    if (r2 && i2 === `h`) return e3.flipX = true, e3;
    if (r2 && i2 === `v`) return e3.flipY = true, e3;
    if (i2 = parseFloat(i2), isNaN(i2)) return e3;
    switch (r2) {
      case `grow`:
        e3.size += i2;
        break;
      case `shrink`:
        e3.size -= i2;
        break;
      case `left`:
        e3.x -= i2;
        break;
      case `right`:
        e3.x += i2;
        break;
      case `up`:
        e3.y -= i2;
        break;
      case `down`:
        e3.y += i2;
        break;
      case `rotate`:
        e3.rotate += i2;
    }
    return e3;
  }, {
    size: 16,
    x: 0,
    y: 0,
    flipX: false,
    flipY: false,
    rotate: 0
  }), Ai = {
    mixout() {
      return {
        parse: {
          transform: (e2) => ki(e2)
        }
      };
    },
    hooks() {
      return {
        parseNodeAttributes(e2, t2) {
          let n2 = t2.getAttribute(`data-fa-transform`);
          return n2 && (e2.transform = ki(n2)), e2;
        }
      };
    },
    provides(e2) {
      e2.generateAbstractTransformGrouping = function(e3) {
        let { main: t2, transform: n2, containerWidth: r2, iconWidth: i2 } = e3, a2 = {
          outer: {
            transform: `translate(${r2 / 2} 256)`
          },
          inner: {
            transform: `${`translate(${n2.x * 32}, ${n2.y * 32}) `} ${`scale(${n2.size / 16 * (n2.flipX ? -1 : 1)}, ${n2.size / 16 * (n2.flipY ? -1 : 1)}) `} ${`rotate(${n2.rotate} 0 0)`}`
          },
          path: {
            transform: `translate(${i2 / 2 * -1} -256)`
          }
        };
        return {
          tag: `g`,
          attributes: {
            ...a2.outer
          },
          children: [
            {
              tag: `g`,
              attributes: {
                ...a2.inner
              },
              children: [
                {
                  tag: t2.icon.tag,
                  children: t2.icon.children,
                  attributes: {
                    ...t2.icon.attributes,
                    ...a2.path
                  }
                }
              ]
            }
          ]
        };
      };
    }
  }, ji = {
    x: 0,
    y: 0,
    width: `100%`,
    height: `100%`
  };
  function Mi(e2) {
    let t2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
    return e2.attributes && (e2.attributes.fill || t2) && (e2.attributes.fill = `black`), e2;
  }
  function Ni(e2) {
    return e2.tag === `g` ? e2.children : [
      e2
    ];
  }
  ur([
    bn,
    di,
    fi,
    pi,
    mi,
    Ei,
    Oi,
    Ai,
    {
      hooks() {
        return {
          parseNodeAttributes(e2, t2) {
            let n2 = t2.getAttribute(`data-fa-mask`), r2 = n2 ? ir(n2.split(` `).map((e3) => e3.trim())) : tr();
            return r2.prefix || (r2.prefix = er()), e2.mask = r2, e2.maskId = t2.getAttribute(`data-fa-mask-id`), e2;
          }
        };
      },
      provides(e2) {
        e2.generateAbstractMask = function(e3) {
          let { children: t2, attributes: n2, main: r2, mask: i2, maskId: a2, transform: o2 } = e3, { width: s2, icon: c2 } = r2, { width: l2, icon: u2 } = i2, d2 = mn({
            transform: o2,
            containerWidth: l2,
            iconWidth: s2
          }), f2 = {
            tag: `rect`,
            attributes: {
              ...ji,
              fill: `white`
            }
          }, p2 = c2.children ? {
            children: c2.children.map(Mi)
          } : {}, m2 = {
            tag: `g`,
            attributes: {
              ...d2.inner
            },
            children: [
              Mi({
                tag: c2.tag,
                attributes: {
                  ...c2.attributes,
                  ...d2.path
                },
                ...p2
              })
            ]
          }, h2 = {
            tag: `g`,
            attributes: {
              ...d2.outer
            },
            children: [
              m2
            ]
          }, g2 = `mask-${a2 || sn()}`, _2 = `clip-${a2 || sn()}`, v2 = {
            tag: `mask`,
            attributes: {
              ...ji,
              id: g2,
              maskUnits: `userSpaceOnUse`,
              maskContentUnits: `userSpaceOnUse`
            },
            children: [
              f2,
              h2
            ]
          }, y2 = {
            tag: `defs`,
            children: [
              {
                tag: `clipPath`,
                attributes: {
                  id: _2
                },
                children: Ni(u2)
              },
              v2
            ]
          };
          return t2.push(y2, {
            tag: `rect`,
            attributes: {
              fill: `currentColor`,
              "clip-path": `url(#${_2})`,
              mask: `url(#${g2})`,
              ...ji
            }
          }), {
            children: t2,
            attributes: n2
          };
        };
      }
    },
    {
      provides(e2) {
        let t2 = false;
        Ue.matchMedia && (t2 = Ue.matchMedia(`(prefers-reduced-motion: reduce)`).matches), e2.missingIconAbstract = function() {
          let e3 = [], n2 = {
            fill: `currentColor`
          }, r2 = {
            attributeType: `XML`,
            repeatCount: `indefinite`,
            dur: `2s`
          };
          e3.push({
            tag: `path`,
            attributes: {
              ...n2,
              d: `M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z`
            }
          });
          let i2 = {
            ...r2,
            attributeName: `opacity`
          }, a2 = {
            tag: `circle`,
            attributes: {
              ...n2,
              cx: `256`,
              cy: `364`,
              r: `28`
            },
            children: []
          };
          return t2 || a2.children.push({
            tag: `animate`,
            attributes: {
              ...r2,
              attributeName: `r`,
              values: `28;14;28;28;14;28;`
            }
          }, {
            tag: `animate`,
            attributes: {
              ...i2,
              values: `1;0;1;1;0;1;`
            }
          }), e3.push(a2), e3.push({
            tag: `path`,
            attributes: {
              ...n2,
              opacity: `1`,
              d: `M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z`
            },
            children: t2 ? [] : [
              {
                tag: `animate`,
                attributes: {
                  ...i2,
                  values: `1;0;0;0;0;1;`
                }
              }
            ]
          }), t2 || e3.push({
            tag: `path`,
            attributes: {
              ...n2,
              opacity: `0`,
              d: `M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z`
            },
            children: [
              {
                tag: `animate`,
                attributes: {
                  ...i2,
                  values: `0;0;1;1;0;0;`
                }
              }
            ]
          }), {
            tag: `g`,
            attributes: {
              class: `missing`
            },
            children: e3
          };
        };
      }
    },
    {
      hooks() {
        return {
          parseNodeAttributes(e2, t2) {
            let n2 = t2.getAttribute(`data-fa-symbol`);
            return e2.symbol = n2 === null ? false : n2 === `` || n2, e2;
          }
        };
      }
    }
  ], {
    mixoutsTo: gr
  }), gr.noAuto, gr.config, gr.library, gr.dom;
  var Pi = gr.parse;
  gr.findIconDefinition, gr.toHtml;
  var Fi = gr.icon;
  gr.layer, gr.text, gr.counter;
  var Ii = t(((e2, t2) => {
    t2.exports = `SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED`;
  })), Li = t(((e2, t2) => {
    var n2 = Ii();
    function r2() {
    }
    function i2() {
    }
    i2.resetWarningCache = r2, t2.exports = function() {
      function e3(e4, t4, r3, i3, a3, o2) {
        if (o2 !== n2) {
          var s2 = Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw s2.name = `Invariant Violation`, s2;
        }
      }
      e3.isRequired = e3;
      function t3() {
        return e3;
      }
      var a2 = {
        array: e3,
        bigint: e3,
        bool: e3,
        func: e3,
        number: e3,
        object: e3,
        string: e3,
        symbol: e3,
        any: e3,
        arrayOf: t3,
        element: e3,
        elementType: e3,
        instanceOf: t3,
        node: e3,
        objectOf: t3,
        oneOf: t3,
        oneOfType: t3,
        shape: t3,
        exact: t3,
        checkPropTypes: i2,
        resetWarningCache: r2
      };
      return a2.PropTypes = a2, a2;
    };
  })), j = e(t(((e2, t2) => {
    t2.exports = Li()();
  }))()), M = e(r());
  function Ri(e2, t2) {
    var n2 = Object.keys(e2);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e2);
      t2 && (r2 = r2.filter(function(t3) {
        return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
      })), n2.push.apply(n2, r2);
    }
    return n2;
  }
  function zi(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = arguments[t2] == null ? {} : arguments[t2];
      t2 % 2 ? Ri(Object(n2), true).forEach(function(t3) {
        Vi(e2, t3, n2[t3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n2)) : Ri(Object(n2)).forEach(function(t3) {
        Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n2, t3));
      });
    }
    return e2;
  }
  function Bi(e2) {
    "@babel/helpers - typeof";
    return Bi = typeof Symbol == `function` && typeof Symbol.iterator == `symbol` ? function(e3) {
      return typeof e3;
    } : function(e3) {
      return e3 && typeof Symbol == `function` && e3.constructor === Symbol && e3 !== Symbol.prototype ? `symbol` : typeof e3;
    }, Bi(e2);
  }
  function Vi(e2, t2, n2) {
    return t2 in e2 ? Object.defineProperty(e2, t2, {
      value: n2,
      enumerable: true,
      configurable: true,
      writable: true
    }) : e2[t2] = n2, e2;
  }
  function Hi(e2, t2) {
    if (e2 == null) return {};
    for (var n2 = {}, r2 = Object.keys(e2), i2, a2 = 0; a2 < r2.length; a2++) i2 = r2[a2], t2.indexOf(i2) >= 0 || (n2[i2] = e2[i2]);
    return n2;
  }
  function Ui(e2, t2) {
    if (e2 == null) return {};
    var n2 = Hi(e2, t2), r2, i2;
    if (Object.getOwnPropertySymbols) {
      var a2 = Object.getOwnPropertySymbols(e2);
      for (i2 = 0; i2 < a2.length; i2++) r2 = a2[i2], t2.indexOf(r2) >= 0 || Object.prototype.propertyIsEnumerable.call(e2, r2) && (n2[r2] = e2[r2]);
    }
    return n2;
  }
  function Wi(e2) {
    return Gi(e2) || Ki(e2) || qi(e2) || Yi();
  }
  function Gi(e2) {
    if (Array.isArray(e2)) return Ji(e2);
  }
  function Ki(e2) {
    if (typeof Symbol < `u` && e2[Symbol.iterator] != null || e2[`@@iterator`] != null) return Array.from(e2);
  }
  function qi(e2, t2) {
    if (e2) {
      if (typeof e2 == `string`) return Ji(e2, t2);
      var n2 = Object.prototype.toString.call(e2).slice(8, -1);
      if (n2 === `Object` && e2.constructor && (n2 = e2.constructor.name), n2 === `Map` || n2 === `Set`) return Array.from(e2);
      if (n2 === `Arguments` || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2)) return Ji(e2, t2);
    }
  }
  function Ji(e2, t2) {
    (t2 == null || t2 > e2.length) && (t2 = e2.length);
    for (var n2 = 0, r2 = Array(t2); n2 < t2; n2++) r2[n2] = e2[n2];
    return r2;
  }
  function Yi() {
    throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function Xi(e2) {
    var t2, n2 = e2.beat, r2 = e2.fade, i2 = e2.beatFade, a2 = e2.bounce, o2 = e2.shake, s2 = e2.flash, c2 = e2.spin, l2 = e2.spinPulse, u2 = e2.spinReverse, d2 = e2.pulse, f2 = e2.fixedWidth, p2 = e2.inverse, m2 = e2.border, h2 = e2.listItem, g2 = e2.flip, _2 = e2.size, v2 = e2.rotation, y2 = e2.pull, b2 = (t2 = {
      "fa-beat": n2,
      "fa-fade": r2,
      "fa-beat-fade": i2,
      "fa-bounce": a2,
      "fa-shake": o2,
      "fa-flash": s2,
      "fa-spin": c2,
      "fa-spin-reverse": u2,
      "fa-spin-pulse": l2,
      "fa-pulse": d2,
      "fa-fw": f2,
      "fa-inverse": p2,
      "fa-border": m2,
      "fa-li": h2,
      "fa-flip": g2 === true,
      "fa-flip-horizontal": g2 === `horizontal` || g2 === `both`,
      "fa-flip-vertical": g2 === `vertical` || g2 === `both`
    }, Vi(t2, `fa-${_2}`, _2 != null), Vi(t2, `fa-rotate-${v2}`, v2 != null && v2 !== 0), Vi(t2, `fa-pull-${y2}`, y2 != null), Vi(t2, `fa-swap-opacity`, e2.swapOpacity), t2);
    return Object.keys(b2).map(function(e3) {
      return b2[e3] ? e3 : null;
    }).filter(function(e3) {
      return e3;
    });
  }
  function Zi(e2) {
    return e2 -= 0, e2 === e2;
  }
  function Qi(e2) {
    return Zi(e2) ? e2 : (e2 = e2.replace(/[\-_\s]+(.)?/g, function(e3, t2) {
      return t2 ? t2.toUpperCase() : ``;
    }), e2.substr(0, 1).toLowerCase() + e2.substr(1));
  }
  var $i = [
    `style`
  ];
  function ea(e2) {
    return e2.charAt(0).toUpperCase() + e2.slice(1);
  }
  function ta(e2) {
    return e2.split(`;`).map(function(e3) {
      return e3.trim();
    }).filter(function(e3) {
      return e3;
    }).reduce(function(e3, t2) {
      var n2 = t2.indexOf(`:`), r2 = Qi(t2.slice(0, n2)), i2 = t2.slice(n2 + 1).trim();
      return r2.startsWith(`webkit`) ? e3[ea(r2)] = i2 : e3[r2] = i2, e3;
    }, {});
  }
  function na(e2, t2) {
    var n2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    if (typeof t2 == `string`) return t2;
    var r2 = (t2.children || []).map(function(t3) {
      return na(e2, t3);
    }), i2 = Object.keys(t2.attributes || {}).reduce(function(e3, n3) {
      var r3 = t2.attributes[n3];
      switch (n3) {
        case `class`:
          e3.attrs.className = r3, delete t2.attributes.class;
          break;
        case `style`:
          e3.attrs.style = ta(r3);
          break;
        default:
          n3.indexOf(`aria-`) === 0 || n3.indexOf(`data-`) === 0 ? e3.attrs[n3.toLowerCase()] = r3 : e3.attrs[Qi(n3)] = r3;
      }
      return e3;
    }, {
      attrs: {}
    }), a2 = n2.style, o2 = a2 === void 0 ? {} : a2, s2 = Ui(n2, $i);
    return i2.attrs.style = zi(zi({}, i2.attrs.style), o2), e2.apply(void 0, [
      t2.tag,
      zi(zi({}, i2.attrs), s2)
    ].concat(Wi(r2)));
  }
  var ra = false;
  try {
    ra = true;
  } catch {
  }
  function ia() {
    if (!ra && console && typeof console.error == `function`) {
      var e2;
      (e2 = console).error.apply(e2, arguments);
    }
  }
  function aa(e2) {
    if (e2 && Bi(e2) === `object` && e2.prefix && e2.iconName && e2.icon) return e2;
    if (Pi.icon) return Pi.icon(e2);
    if (e2 === null) return null;
    if (e2 && Bi(e2) === `object` && e2.prefix && e2.iconName) return e2;
    if (Array.isArray(e2) && e2.length === 2) return {
      prefix: e2[0],
      iconName: e2[1]
    };
    if (typeof e2 == `string`) return {
      prefix: `fas`,
      iconName: e2
    };
  }
  function oa(e2, t2) {
    return Array.isArray(t2) && t2.length > 0 || !Array.isArray(t2) && t2 ? Vi({}, e2, t2) : {};
  }
  var sa = {
    border: false,
    className: ``,
    mask: null,
    maskId: null,
    fixedWidth: false,
    inverse: false,
    flip: false,
    icon: null,
    listItem: false,
    pull: null,
    pulse: false,
    rotation: null,
    size: null,
    spin: false,
    spinPulse: false,
    spinReverse: false,
    beat: false,
    fade: false,
    beatFade: false,
    bounce: false,
    shake: false,
    symbol: false,
    title: ``,
    titleId: null,
    transform: null,
    swapOpacity: false
  }, ca = M.forwardRef(function(e2, t2) {
    var n2 = zi(zi({}, sa), e2), r2 = n2.icon, i2 = n2.mask, a2 = n2.symbol, o2 = n2.className, s2 = n2.title, c2 = n2.titleId, l2 = n2.maskId, u2 = aa(r2), d2 = oa(`classes`, [].concat(Wi(Xi(n2)), Wi((o2 || ``).split(` `)))), f2 = oa(`transform`, typeof n2.transform == `string` ? Pi.transform(n2.transform) : n2.transform), p2 = oa(`mask`, aa(i2)), m2 = Fi(u2, zi(zi(zi(zi({}, d2), f2), p2), {}, {
      symbol: a2,
      title: s2,
      titleId: c2,
      maskId: l2
    }));
    if (!m2) return ia(`Could not find icon`, u2), null;
    var h2 = m2.abstract, g2 = {
      ref: t2
    };
    return Object.keys(n2).forEach(function(e3) {
      sa.hasOwnProperty(e3) || (g2[e3] = n2[e3]);
    }), la(h2[0], g2);
  });
  ca.displayName = `FontAwesomeIcon`, ca.propTypes = {
    beat: j.default.bool,
    border: j.default.bool,
    beatFade: j.default.bool,
    bounce: j.default.bool,
    className: j.default.string,
    fade: j.default.bool,
    flash: j.default.bool,
    mask: j.default.oneOfType([
      j.default.object,
      j.default.array,
      j.default.string
    ]),
    maskId: j.default.string,
    fixedWidth: j.default.bool,
    inverse: j.default.bool,
    flip: j.default.oneOf([
      true,
      false,
      `horizontal`,
      `vertical`,
      `both`
    ]),
    icon: j.default.oneOfType([
      j.default.object,
      j.default.array,
      j.default.string
    ]),
    listItem: j.default.bool,
    pull: j.default.oneOf([
      `right`,
      `left`
    ]),
    pulse: j.default.bool,
    rotation: j.default.oneOf([
      0,
      90,
      180,
      270
    ]),
    shake: j.default.bool,
    size: j.default.oneOf([
      `2xs`,
      `xs`,
      `sm`,
      `lg`,
      `xl`,
      `2xl`,
      `1x`,
      `2x`,
      `3x`,
      `4x`,
      `5x`,
      `6x`,
      `7x`,
      `8x`,
      `9x`,
      `10x`
    ]),
    spin: j.default.bool,
    spinPulse: j.default.bool,
    spinReverse: j.default.bool,
    symbol: j.default.oneOfType([
      j.default.bool,
      j.default.string
    ]),
    title: j.default.string,
    titleId: j.default.string,
    transform: j.default.oneOfType([
      j.default.string,
      j.default.object
    ]),
    swapOpacity: j.default.bool
  };
  var la = na.bind(null, M.createElement), N = `-ms-`, ua = `-moz-`, P = `-webkit-`, da = `comm`, fa = `rule`, pa = `decl`, ma = `@import`, ha = `@namespace`, ga = `@keyframes`, _a = `@layer`, va = Math.abs, ya = String.fromCharCode, ba = Object.assign;
  function xa(e2, t2) {
    return Ta(e2, 0) ^ 45 ? (((t2 << 2 ^ Ta(e2, 0)) << 2 ^ Ta(e2, 1)) << 2 ^ Ta(e2, 2)) << 2 ^ Ta(e2, 3) : 0;
  }
  function Sa(e2) {
    return e2.trim();
  }
  function Ca(e2, t2) {
    return (e2 = t2.exec(e2)) ? e2[0] : e2;
  }
  function F(e2, t2, n2) {
    return e2.replace(t2, n2);
  }
  function wa(e2, t2, n2) {
    return e2.indexOf(t2, n2);
  }
  function Ta(e2, t2) {
    return e2.charCodeAt(t2) | 0;
  }
  function Ea(e2, t2, n2) {
    return e2.slice(t2, n2);
  }
  function Da(e2) {
    return e2.length;
  }
  function Oa(e2) {
    return e2.length;
  }
  function ka(e2, t2) {
    return t2.push(e2), e2;
  }
  function Aa(e2, t2) {
    return e2.map(t2).join(``);
  }
  function ja(e2, t2) {
    return e2.filter(function(e3) {
      return !Ca(e3, t2);
    });
  }
  var Ma = 1, Na = 1, Pa = 0, Fa = 0, Ia = 0, La = ``;
  function Ra(e2, t2, n2, r2, i2, a2, o2, s2) {
    return {
      value: e2,
      root: t2,
      parent: n2,
      type: r2,
      props: i2,
      children: a2,
      line: Ma,
      column: Na,
      length: o2,
      return: ``,
      siblings: s2
    };
  }
  function za(e2, t2) {
    return ba(Ra(``, null, null, ``, null, null, 0, e2.siblings), e2, {
      length: -e2.length
    }, t2);
  }
  function Ba(e2) {
    for (; e2.root; ) e2 = za(e2.root, {
      children: [
        e2
      ]
    });
    ka(e2, e2.siblings);
  }
  function Va() {
    return Ia;
  }
  function Ha() {
    return Ia = Fa > 0 ? Ta(La, --Fa) : 0, Na--, Ia === 10 && (Na = 1, Ma--), Ia;
  }
  function Ua() {
    return Ia = Fa < Pa ? Ta(La, Fa++) : 0, Na++, Ia === 10 && (Na = 1, Ma++), Ia;
  }
  function Wa() {
    return Ta(La, Fa);
  }
  function Ga() {
    return Fa;
  }
  function Ka(e2, t2) {
    return Ea(La, e2, t2);
  }
  function qa(e2) {
    switch (e2) {
      case 0:
      case 9:
      case 10:
      case 13:
      case 32:
        return 5;
      case 33:
      case 43:
      case 44:
      case 47:
      case 62:
      case 64:
      case 126:
      case 59:
      case 123:
      case 125:
        return 4;
      case 58:
        return 3;
      case 34:
      case 39:
      case 40:
      case 91:
        return 2;
      case 41:
      case 93:
        return 1;
    }
    return 0;
  }
  function Ja(e2) {
    return Ma = Na = 1, Pa = Da(La = e2), Fa = 0, [];
  }
  function Ya(e2) {
    return La = ``, e2;
  }
  function Xa(e2) {
    return Sa(Ka(Fa - 1, $a(e2 === 91 ? e2 + 2 : e2 === 40 ? e2 + 1 : e2)));
  }
  function Za(e2) {
    for (; (Ia = Wa()) && Ia < 33; ) Ua();
    return qa(e2) > 2 || qa(Ia) > 3 ? `` : ` `;
  }
  function Qa(e2, t2) {
    for (; --t2 && Ua() && !(Ia < 48 || Ia > 102 || Ia > 57 && Ia < 65 || Ia > 70 && Ia < 97); ) ;
    return Ka(e2, Ga() + (t2 < 6 && Wa() == 32 && Ua() == 32));
  }
  function $a(e2) {
    for (; Ua(); ) switch (Ia) {
      case e2:
        return Fa;
      case 34:
      case 39:
        e2 !== 34 && e2 !== 39 && $a(Ia);
        break;
      case 40:
        e2 === 41 && $a(e2);
        break;
      case 92:
        Ua();
    }
    return Fa;
  }
  function eo(e2, t2) {
    for (; Ua() && e2 + Ia !== 57 && (e2 + Ia !== 84 || Wa() !== 47); ) ;
    return `/*` + Ka(t2, Fa - 1) + `*` + ya(e2 === 47 ? e2 : Ua());
  }
  function to(e2) {
    for (; !qa(Wa()); ) Ua();
    return Ka(e2, Fa);
  }
  function no(e2) {
    return Ya(ro(``, null, null, null, [
      ``
    ], e2 = Ja(e2), 0, [
      0
    ], e2));
  }
  function ro(e2, t2, n2, r2, i2, a2, o2, s2, c2) {
    for (var l2 = 0, u2 = 0, d2 = o2, f2 = 0, p2 = 0, m2 = 0, h2 = 1, g2 = 1, _2 = 1, v2 = 0, y2 = ``, b2 = i2, x2 = a2, S2 = r2, C2 = y2; g2; ) switch (m2 = v2, v2 = Ua()) {
      case 40:
        if (m2 != 108 && Ta(C2, d2 - 1) == 58) {
          wa(C2 += F(Xa(v2), `&`, `&\f`), `&\f`, va(l2 ? s2[l2 - 1] : 0)) != -1 && (_2 = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        C2 += Xa(v2);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        C2 += Za(m2);
        break;
      case 92:
        C2 += Qa(Ga() - 1, 7);
        continue;
      case 47:
        switch (Wa()) {
          case 42:
          case 47:
            ka(ao(eo(Ua(), Ga()), t2, n2, c2), c2), (qa(m2 || 1) == 5 || qa(Wa() || 1) == 5) && Da(C2) && Ea(C2, -1, void 0) !== ` ` && (C2 += ` `);
            break;
          default:
            C2 += `/`;
        }
        break;
      case 123 * h2:
        s2[l2++] = Da(C2) * _2;
      case 125 * h2:
      case 59:
      case 0:
        switch (v2) {
          case 0:
          case 125:
            g2 = 0;
          case 59 + u2:
            _2 == -1 && (C2 = F(C2, /\f/g, ``)), p2 > 0 && (Da(C2) - d2 || h2 === 0 && m2 === 47) && ka(p2 > 32 ? oo(C2 + `;`, r2, n2, d2 - 1, c2) : oo(F(C2, ` `, ``) + `;`, r2, n2, d2 - 2, c2), c2);
            break;
          case 59:
            C2 += `;`;
          default:
            if (ka(S2 = io(C2, t2, n2, l2, u2, i2, s2, y2, b2 = [], x2 = [], d2, a2), a2), v2 === 123) {
              if (u2 === 0) ro(C2, t2, S2, S2, b2, a2, d2, s2, x2);
              else {
                switch (f2) {
                  case 99:
                    if (Ta(C2, 3) === 110) break;
                  case 108:
                    if (Ta(C2, 2) === 97) break;
                  default:
                    u2 = 0;
                  case 100:
                  case 109:
                  case 115:
                }
                u2 ? ro(e2, S2, S2, r2 && ka(io(e2, S2, S2, 0, 0, i2, s2, y2, i2, b2 = [], d2, x2), x2), i2, x2, d2, s2, r2 ? b2 : x2) : ro(C2, S2, S2, S2, [
                  ``
                ], x2, 0, s2, x2);
              }
            }
        }
        l2 = u2 = p2 = 0, h2 = _2 = 1, y2 = C2 = ``, d2 = o2;
        break;
      case 58:
        d2 = 1 + Da(C2), p2 = m2;
      default:
        if (h2 < 1) {
          if (v2 == 123) --h2;
          else if (v2 == 125 && h2++ == 0 && Ha() == 125) continue;
        }
        switch (C2 += ya(v2), v2 * h2) {
          case 38:
            _2 = u2 > 0 ? 1 : (C2 += `\f`, -1);
            break;
          case 44:
            s2[l2++] = (Da(C2) - 1) * _2, _2 = 1;
            break;
          case 64:
            Wa() === 45 && (C2 += Xa(Ua())), f2 = Wa(), u2 = d2 = Da(y2 = C2 += to(Ga())), v2++;
            break;
          case 45:
            m2 === 45 && Da(C2) == 2 && (h2 = 0);
        }
    }
    return a2;
  }
  function io(e2, t2, n2, r2, i2, a2, o2, s2, c2, l2, u2, d2) {
    for (var f2 = i2 - 1, p2 = i2 === 0 ? a2 : [
      ``
    ], m2 = Oa(p2), h2 = 0, g2 = 0, _2 = 0; h2 < r2; ++h2) for (var v2 = 0, y2 = Ea(e2, f2 + 1, f2 = va(g2 = o2[h2])), b2 = e2; v2 < m2; ++v2) (b2 = Sa(g2 > 0 ? p2[v2] + ` ` + y2 : F(y2, /&\f/g, p2[v2]))) && (c2[_2++] = b2);
    return Ra(e2, t2, n2, i2 === 0 ? fa : s2, c2, l2, u2, d2);
  }
  function ao(e2, t2, n2, r2) {
    return Ra(e2, t2, n2, da, ya(Va()), Ea(e2, 2, -2), 0, r2);
  }
  function oo(e2, t2, n2, r2, i2) {
    return Ra(e2, t2, n2, pa, Ea(e2, 0, r2), Ea(e2, r2 + 1, -1), r2, i2);
  }
  function so(e2, t2, n2) {
    switch (xa(e2, t2)) {
      case 5103:
        return P + `print-` + e2 + e2;
      case 5737:
      case 4201:
      case 3177:
      case 3433:
      case 1641:
      case 4457:
      case 2921:
      case 5572:
      case 6356:
      case 5844:
      case 3191:
      case 6645:
      case 3005:
      case 4215:
      case 6389:
      case 5109:
      case 5365:
      case 5621:
      case 3829:
      case 6391:
      case 5879:
      case 5623:
      case 6135:
      case 4599:
        return P + e2 + e2;
      case 4855:
        return P + e2.replace(`add`, `source-over`).replace(`substract`, `source-out`).replace(`intersect`, `source-in`).replace(`exclude`, `xor`) + e2;
      case 4789:
        return ua + e2 + e2;
      case 5349:
      case 4246:
      case 4810:
      case 6968:
      case 2756:
        return P + e2 + ua + e2 + N + e2 + e2;
      case 5936:
        switch (Ta(e2, t2 + 11)) {
          case 114:
            return P + e2 + N + F(e2, /[svh]\w+-[tblr]{2}/, `tb`) + e2;
          case 108:
            return P + e2 + N + F(e2, /[svh]\w+-[tblr]{2}/, `tb-rl`) + e2;
          case 45:
            return P + e2 + N + F(e2, /[svh]\w+-[tblr]{2}/, `lr`) + e2;
        }
      case 6828:
      case 4268:
      case 2903:
        return P + e2 + N + e2 + e2;
      case 6165:
        return P + e2 + N + `flex-` + e2 + e2;
      case 5187:
        return P + e2 + F(e2, /(\w+).+(:[^]+)/, P + `box-$1$2` + N + `flex-$1$2`) + e2;
      case 5443:
        return P + e2 + N + `flex-item-` + F(e2, /flex-|-self/g, ``) + (Ca(e2, /flex-|baseline/) ? `` : N + `grid-row-` + F(e2, /flex-|-self/g, ``)) + e2;
      case 4675:
        return P + e2 + N + `flex-line-pack` + F(e2, /align-content|flex-|-self/g, ``) + e2;
      case 5548:
        return P + e2 + N + F(e2, `shrink`, `negative`) + e2;
      case 5292:
        return P + e2 + N + F(e2, `basis`, `preferred-size`) + e2;
      case 6060:
        return P + `box-` + F(e2, `-grow`, ``) + P + e2 + N + F(e2, `grow`, `positive`) + e2;
      case 4554:
        return P + F(e2, /([^-])(transform)/g, `$1` + P + `$2`) + e2;
      case 6187:
        return F(F(F(e2, /(zoom-|grab)/, P + `$1`), /(image-set)/, P + `$1`), e2, ``) + e2;
      case 5495:
      case 3959:
        return F(e2, /(image-set\([^]*)/, P + "$1$`$1");
      case 4968:
        return F(F(e2, /(.+:)(flex-)?(.*)/, P + `box-pack:$3` + N + `flex-pack:$3`), /space-between/, `justify`) + P + e2 + e2;
      case 4200:
        if (!Ca(e2, /flex-|baseline/)) return N + `grid-column-align` + Ea(e2, t2) + e2;
        break;
      case 2592:
      case 3360:
        return N + F(e2, `template-`, ``) + e2;
      case 4384:
      case 3616:
        return n2 && n2.some(function(e3, n3) {
          return t2 = n3, Ca(e3.props, /grid-\w+-end/);
        }) ? ~wa(e2 + (n2 = n2[t2].value), `span`, 0) ? e2 : N + F(e2, `-start`, ``) + e2 + N + `grid-row-span:` + (~wa(n2, `span`, 0) ? Ca(n2, /\d+/) : +Ca(n2, /\d+/) - Ca(e2, /\d+/)) + `;` : N + F(e2, `-start`, ``) + e2;
      case 4896:
      case 4128:
        return n2 && n2.some(function(e3) {
          return Ca(e3.props, /grid-\w+-start/);
        }) ? e2 : N + F(F(e2, `-end`, `-span`), `span `, ``) + e2;
      case 4095:
      case 3583:
      case 4068:
      case 2532:
        return F(e2, /(.+)-inline(.+)/, P + `$1$2`) + e2;
      case 8116:
      case 7059:
      case 5753:
      case 5535:
      case 5445:
      case 5701:
      case 4933:
      case 4677:
      case 5533:
      case 5789:
      case 5021:
      case 4765:
        if (Da(e2) - 1 - t2 > 6) switch (Ta(e2, t2 + 1)) {
          case 109:
            if (Ta(e2, t2 + 4) !== 45) break;
          case 102:
            return F(e2, /(.+:)(.+)-([^]+)/, `$1` + P + `$2-$3$1` + ua + (Ta(e2, t2 + 3) == 108 ? `$3` : `$2-$3`)) + e2;
          case 115:
            return ~wa(e2, `stretch`, 0) ? so(F(e2, `stretch`, `fill-available`), t2, n2) + e2 : e2;
        }
        break;
      case 5152:
      case 5920:
        return F(e2, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(t3, n3, r2, i2, a2, o2, s2) {
          return N + n3 + `:` + r2 + s2 + (i2 ? N + n3 + `-span:` + (a2 ? o2 : +o2 - r2) + s2 : ``) + e2;
        });
      case 4949:
        if (Ta(e2, t2 + 6) === 121) return F(e2, `:`, `:` + P) + e2;
        break;
      case 6444:
        switch (Ta(e2, Ta(e2, 14) === 45 ? 18 : 11)) {
          case 120:
            return F(e2, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, `$1` + P + (Ta(e2, 14) === 45 ? `inline-` : ``) + `box$3$1` + P + `$2$3$1` + N + `$2box$3`) + e2;
          case 100:
            return F(e2, `:`, `:` + N) + e2;
        }
        break;
      case 5719:
      case 2647:
      case 2135:
      case 3927:
      case 2391:
        return F(e2, `scroll-`, `scroll-snap-`) + e2;
    }
    return e2;
  }
  function co(e2, t2) {
    for (var n2 = ``, r2 = 0; r2 < e2.length; r2++) n2 += t2(e2[r2], r2, e2, t2) || ``;
    return n2;
  }
  function lo(e2, t2, n2, r2) {
    switch (e2.type) {
      case _a:
        if (e2.children.length) break;
      case ma:
      case ha:
      case pa:
        return e2.return = e2.return || e2.value;
      case da:
        return ``;
      case ga:
        return e2.return = e2.value + `{` + co(e2.children, r2) + `}`;
      case fa:
        if (!Da(e2.value = e2.props.join(`,`))) return ``;
    }
    return Da(n2 = co(e2.children, r2)) ? e2.return = e2.value + `{` + n2 + `}` : ``;
  }
  function uo(e2) {
    var t2 = Oa(e2);
    return function(n2, r2, i2, a2) {
      for (var o2 = ``, s2 = 0; s2 < t2; s2++) o2 += e2[s2](n2, r2, i2, a2) || ``;
      return o2;
    };
  }
  function fo(e2) {
    return function(t2) {
      t2.root || (t2 = t2.return) && e2(t2);
    };
  }
  function po(e2, t2, n2, r2) {
    if (e2.length > -1 && !e2.return) switch (e2.type) {
      case pa:
        e2.return = so(e2.value, e2.length, n2);
        return;
      case ga:
        return co([
          za(e2, {
            value: F(e2.value, `@`, `@` + P)
          })
        ], r2);
      case fa:
        if (e2.length) return Aa(n2 = e2.props, function(t3) {
          switch (Ca(t3, r2 = /(::plac\w+|:read-\w+)/)) {
            case `:read-only`:
            case `:read-write`:
              Ba(za(e2, {
                props: [
                  F(t3, /:(read-\w+)/, `:` + ua + `$1`)
                ]
              })), Ba(za(e2, {
                props: [
                  t3
                ]
              })), ba(e2, {
                props: ja(n2, r2)
              });
              break;
            case `::placeholder`:
              Ba(za(e2, {
                props: [
                  F(t3, /:(plac\w+)/, `:` + P + `input-$1`)
                ]
              })), Ba(za(e2, {
                props: [
                  F(t3, /:(plac\w+)/, `:` + ua + `$1`)
                ]
              })), Ba(za(e2, {
                props: [
                  F(t3, /:(plac\w+)/, N + `input-$1`)
                ]
              })), Ba(za(e2, {
                props: [
                  t3
                ]
              })), ba(e2, {
                props: ja(n2, r2)
              });
          }
          return ``;
        });
    }
  }
  var mo = typeof process < `u` && ({}.REACT_APP_SC_ATTR || {}.SC_ATTR) || `data-styled`, ho = `active`, go = `data-styled-version`, _o = `6.4.1`, vo = `/*!sc*/
`, yo = typeof window < `u` && typeof document < `u`;
  function bo(e2) {
    if (typeof process < `u`) {
      let t2 = {}[e2];
      if (t2 !== void 0 && t2 !== ``) return t2 !== `false`;
    }
  }
  var xo = !!(typeof SC_DISABLE_SPEEDY == `boolean` ? SC_DISABLE_SPEEDY : bo(`REACT_APP_SC_DISABLE_SPEEDY`) ?? bo(`SC_DISABLE_SPEEDY`) ?? (typeof process > `u` || false)), So = `sc-keyframes-`;
  function Co(e2, ...t2) {
    return Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${e2} for more information.${t2.length > 0 ? ` Args: ${t2.join(`, `)}` : ``}`);
  }
  var wo = /* @__PURE__ */ new Map(), To = /* @__PURE__ */ new Map(), Eo = 1, Do = (e2) => {
    if (wo.has(e2)) return wo.get(e2);
    for (; To.has(Eo); ) Eo++;
    let t2 = Eo++;
    return wo.set(e2, t2), To.set(t2, e2), t2;
  }, Oo = (e2) => To.get(e2), ko = (e2, t2) => {
    Eo = t2 + 1, wo.set(e2, t2), To.set(t2, e2);
  }, Ao = Object.freeze([]), jo = Object.freeze({});
  function Mo(e2, t2, n2 = jo) {
    return e2.theme !== n2.theme && e2.theme || t2 || n2.theme;
  }
  var No = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Po = /(^-|-$)/g;
  function Fo(e2) {
    return e2.replace(No, `-`).replace(Po, ``);
  }
  var Io = /(a)(d)/gi, Lo = (e2) => String.fromCharCode(e2 + (e2 > 25 ? 39 : 97));
  function Ro(e2) {
    let t2, n2 = ``;
    for (t2 = Math.abs(e2); t2 > 52; t2 = t2 / 52 | 0) n2 = Lo(t2 % 52) + n2;
    return (Lo(t2 % 52) + n2).replace(Io, `$1-$2`);
  }
  var zo = 5381, Bo = (e2, t2) => {
    let n2 = t2.length;
    for (; n2; ) e2 = 33 * e2 ^ t2.charCodeAt(--n2);
    return e2;
  }, Vo = (e2) => Bo(zo, e2);
  function Ho(e2) {
    return Ro(Vo(e2) >>> 0);
  }
  function Uo(e2) {
    return e2.displayName || e2.name || `Component`;
  }
  function Wo(e2) {
    return typeof e2 == `string` && true;
  }
  function Go(e2) {
    return Wo(e2) ? `styled.${e2}` : `Styled(${Uo(e2)})`;
  }
  var Ko = Symbol.for(`react.memo`), qo = Symbol.for(`react.forward_ref`), Jo = {
    contextType: true,
    defaultProps: true,
    displayName: true,
    getDerivedStateFromError: true,
    getDerivedStateFromProps: true,
    propTypes: true,
    type: true
  }, Yo = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true
  }, Xo = {
    $$typeof: true,
    compare: true,
    defaultProps: true,
    displayName: true,
    propTypes: true,
    type: true
  }, Zo = {
    [qo]: {
      $$typeof: true,
      render: true,
      defaultProps: true,
      displayName: true,
      propTypes: true
    },
    [Ko]: Xo
  };
  function Qo(e2) {
    return (`type` in (t2 = e2) && t2.type.$$typeof) === Ko ? Xo : `$$typeof` in e2 ? Zo[e2.$$typeof] : Jo;
    var t2;
  }
  var $o = Object.defineProperty, es = Object.getOwnPropertyNames, ts = Object.getOwnPropertySymbols, ns = Object.getOwnPropertyDescriptor, rs = Object.getPrototypeOf, is = Object.prototype;
  function as(e2, t2, n2) {
    if (typeof t2 != `string`) {
      let r2 = rs(t2);
      r2 && r2 !== is && as(e2, r2, n2);
      let i2 = es(t2).concat(ts(t2)), a2 = Qo(e2), o2 = Qo(t2);
      for (let r3 = 0; r3 < i2.length; ++r3) {
        let s2 = i2[r3];
        if (!(s2 in Yo || n2 && n2[s2] || o2 && s2 in o2 || a2 && s2 in a2)) {
          let n3 = ns(t2, s2);
          try {
            $o(e2, s2, n3);
          } catch {
          }
        }
      }
    }
    return e2;
  }
  function os(e2) {
    return typeof e2 == `function`;
  }
  function ss(e2) {
    return typeof e2 == `object` && `styledComponentId` in e2;
  }
  function cs(e2, t2) {
    return e2 && t2 ? e2 + ` ` + t2 : e2 || t2 || ``;
  }
  function ls(e2, t2) {
    return e2.join(t2 || ``);
  }
  function us(e2) {
    return typeof e2 == `object` && !!e2 && e2.constructor.name === Object.name && !(`props` in e2 && e2.$$typeof);
  }
  function ds(e2, t2, n2 = false) {
    if (!n2 && !us(e2) && !Array.isArray(e2)) return t2;
    if (Array.isArray(t2)) for (let n3 = 0; n3 < t2.length; n3++) e2[n3] = ds(e2[n3], t2[n3]);
    else if (us(t2)) for (let n3 in t2) e2[n3] = ds(e2[n3], t2[n3]);
    return e2;
  }
  function fs(e2, t2) {
    Object.defineProperty(e2, "toString", {
      value: t2
    });
  }
  var ps = class {
    constructor(e2) {
      this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = e2, this._cGroup = 0, this._cIndex = 0;
    }
    indexOfGroup(e2) {
      if (e2 === this._cGroup) return this._cIndex;
      let t2 = this._cIndex;
      if (e2 > this._cGroup) for (let n2 = this._cGroup; n2 < e2; n2++) t2 += this.groupSizes[n2];
      else for (let n2 = this._cGroup - 1; n2 >= e2; n2--) t2 -= this.groupSizes[n2];
      return this._cGroup = e2, this._cIndex = t2, t2;
    }
    insertRules(e2, t2) {
      if (e2 >= this.groupSizes.length) {
        let t3 = this.groupSizes, n3 = t3.length, r3 = n3;
        for (; e2 >= r3; ) if (r3 <<= 1, r3 < 0) throw Co(16, `${e2}`);
        this.groupSizes = new Uint32Array(r3), this.groupSizes.set(t3), this.length = r3;
        for (let e3 = n3; e3 < r3; e3++) this.groupSizes[e3] = 0;
      }
      let n2 = this.indexOfGroup(e2 + 1), r2 = 0;
      for (let i2 = 0, a2 = t2.length; i2 < a2; i2++) this.tag.insertRule(n2, t2[i2]) && (this.groupSizes[e2]++, n2++, r2++);
      r2 > 0 && this._cGroup > e2 && (this._cIndex += r2);
    }
    clearGroup(e2) {
      if (e2 < this.length) {
        let t2 = this.groupSizes[e2], n2 = this.indexOfGroup(e2), r2 = n2 + t2;
        this.groupSizes[e2] = 0;
        for (let e3 = n2; e3 < r2; e3++) this.tag.deleteRule(n2);
        t2 > 0 && this._cGroup > e2 && (this._cIndex -= t2);
      }
    }
    getGroup(e2) {
      let t2 = ``;
      if (e2 >= this.length || this.groupSizes[e2] === 0) return t2;
      let n2 = this.groupSizes[e2], r2 = this.indexOfGroup(e2), i2 = r2 + n2;
      for (let e3 = r2; e3 < i2; e3++) t2 += this.tag.getRule(e3) + vo;
      return t2;
    }
  }, ms = `style[${mo}][${go}="${_o}"]`, hs = RegExp(`^${mo}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`), gs = (e2) => typeof ShadowRoot < `u` && e2 instanceof ShadowRoot || `host` in e2 && e2.nodeType === 11, _s = (e2) => {
    if (!e2) return document;
    if (gs(e2)) return e2;
    if (`getRootNode` in e2) {
      let t2 = e2.getRootNode();
      if (gs(t2)) return t2;
    }
    return document;
  }, vs = (e2, t2, n2) => {
    let r2 = n2.split(`,`), i2;
    for (let n3 = 0, a2 = r2.length; n3 < a2; n3++) (i2 = r2[n3]) && e2.registerName(t2, i2);
  }, ys = (e2, t2) => {
    let n2 = (t2.textContent ?? ``).split(vo), r2 = [];
    for (let t3 = 0, i2 = n2.length; t3 < i2; t3++) {
      let i3 = n2[t3].trim();
      if (!i3) continue;
      let a2 = i3.match(hs);
      if (a2) {
        let t4 = 0 | parseInt(a2[1], 10), n3 = a2[2];
        t4 !== 0 && (ko(n3, t4), vs(e2, n3, a2[3]), e2.getTag().insertRules(t4, r2)), r2.length = 0;
      } else r2.push(i3);
    }
  }, bs = (e2) => {
    let t2 = _s(e2.options.target).querySelectorAll(ms);
    for (let n2 = 0, r2 = t2.length; n2 < r2; n2++) {
      let r3 = t2[n2];
      r3 && r3.getAttribute(mo) !== ho && (ys(e2, r3), r3.parentNode && r3.parentNode.removeChild(r3));
    }
  }, xs = false;
  function Ss() {
    if (false !== xs) return xs;
    if (typeof document < `u`) {
      let e2 = document.head.querySelector(`meta[property="csp-nonce"]`);
      if (e2) return xs = e2.nonce || e2.getAttribute(`content`) || void 0;
      let t2 = document.head.querySelector(`meta[name="sc-nonce"]`);
      if (t2) return xs = t2.getAttribute(`content`) || void 0;
    }
    return xs = typeof __webpack_nonce__ < `u` ? __webpack_nonce__ : void 0;
  }
  var Cs = (e2, t2) => {
    let n2 = document.head, r2 = e2 || n2, i2 = document.createElement(`style`), a2 = ((e3) => {
      let t3 = Array.from(e3.querySelectorAll(`style[${mo}]`));
      return t3[t3.length - 1];
    })(r2), o2 = a2 === void 0 ? null : a2.nextSibling;
    i2.setAttribute(mo, ho), i2.setAttribute(go, _o);
    let s2 = t2 || Ss();
    return s2 && i2.setAttribute(`nonce`, s2), r2.insertBefore(i2, o2), i2;
  }, ws = class {
    constructor(e2, t2) {
      this.element = Cs(e2, t2), this.element.appendChild(document.createTextNode(``)), this.sheet = ((e3) => {
        if (e3.sheet) return e3.sheet;
        let t3 = e3.getRootNode().styleSheets ?? document.styleSheets;
        for (let n2 = 0, r2 = t3.length; n2 < r2; n2++) {
          let r3 = t3[n2];
          if (r3.ownerNode === e3) return r3;
        }
        throw Co(17);
      })(this.element), this.length = 0;
    }
    insertRule(e2, t2) {
      try {
        return this.sheet.insertRule(t2, e2), this.length++, true;
      } catch {
        return false;
      }
    }
    deleteRule(e2) {
      this.sheet.deleteRule(e2), this.length--;
    }
    getRule(e2) {
      let t2 = this.sheet.cssRules[e2];
      return t2 && t2.cssText ? t2.cssText : ``;
    }
  }, Ts = class {
    constructor(e2, t2) {
      this.element = Cs(e2, t2), this.nodes = this.element.childNodes, this.length = 0;
    }
    insertRule(e2, t2) {
      if (e2 <= this.length && e2 >= 0) {
        let n2 = document.createTextNode(t2);
        return this.element.insertBefore(n2, this.nodes[e2] || null), this.length++, true;
      }
      return false;
    }
    deleteRule(e2) {
      this.element.removeChild(this.nodes[e2]), this.length--;
    }
    getRule(e2) {
      return e2 < this.length ? this.nodes[e2].textContent : ``;
    }
  }, Es = yo, Ds = {
    isServer: !yo,
    useCSSOMInjection: !xo
  }, Os = class e2 {
    static registerId(e3) {
      return Do(e3);
    }
    constructor(e3 = jo, t2 = {}, n2) {
      this.options = Object.assign(Object.assign({}, Ds), e3), this.gs = t2, this.keyframeIds = /* @__PURE__ */ new Set(), this.names = new Map(n2), this.server = !!e3.isServer, !this.server && yo && Es && (Es = false, bs(this)), fs(this, () => ((e4) => {
        let t3 = e4.getTag(), { length: n3 } = t3, r2 = ``;
        for (let i2 = 0; i2 < n3; i2++) {
          let n4 = Oo(i2);
          if (n4 === void 0) continue;
          let a2 = e4.names.get(n4);
          if (a2 === void 0 || !a2.size) continue;
          let o2 = t3.getGroup(i2);
          if (o2.length === 0) continue;
          let s2 = mo + `.g` + i2 + `[id="` + n4 + `"]`, c2 = ``;
          for (let e5 of a2) e5.length > 0 && (c2 += e5 + `,`);
          r2 += o2 + s2 + `{content:"` + c2 + `"}/*!sc*/
`;
        }
        return r2;
      })(this));
    }
    rehydrate() {
      !this.server && yo && bs(this);
    }
    reconstructWithOptions(t2, n2 = true) {
      let r2 = new e2(Object.assign(Object.assign({}, this.options), t2), this.gs, n2 && this.names || void 0);
      return r2.keyframeIds = new Set(this.keyframeIds), !this.server && yo && t2.target !== this.options.target && _s(this.options.target) !== _s(t2.target) && bs(r2), r2;
    }
    allocateGSInstance(e3) {
      return this.gs[e3] = (this.gs[e3] || 0) + 1;
    }
    getTag() {
      return this.tag || (this.tag = (e3 = (({ useCSSOMInjection: e4, target: t2, nonce: n2 }) => e4 ? new ws(t2, n2) : new Ts(t2, n2))(this.options), new ps(e3)));
      var e3;
    }
    hasNameForId(e3, t2) {
      var _a2;
      var n2;
      return (n2 = (_a2 = this.names.get(e3)) == null ? void 0 : _a2.has(t2)) != null && n2;
    }
    registerName(e3, t2) {
      Do(e3), e3.startsWith(So) && this.keyframeIds.add(e3);
      let n2 = this.names.get(e3);
      n2 ? n2.add(t2) : this.names.set(e3, /* @__PURE__ */ new Set([
        t2
      ]));
    }
    insertRules(e3, t2, n2) {
      this.registerName(e3, t2), this.getTag().insertRules(Do(e3), n2);
    }
    clearNames(e3) {
      this.names.has(e3) && this.names.get(e3).clear();
    }
    clearRules(e3) {
      this.getTag().clearGroup(Do(e3)), this.clearNames(e3);
    }
    clearTag() {
      this.tag = void 0;
    }
  }, ks = /* @__PURE__ */ new WeakSet(), As = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexShrink: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    scale: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1
  };
  function js(e2, t2) {
    return t2 == null || typeof t2 == `boolean` || t2 === `` ? `` : typeof t2 != `number` || t2 === 0 || e2 in As || e2.startsWith(`--`) ? String(t2).trim() : t2 + `px`;
  }
  var Ms = 47;
  function Ns(e2) {
    if (e2.charCodeAt(0) === 45 && e2.charCodeAt(1) === 45) return e2;
    let t2 = ``;
    for (let n2 = 0; n2 < e2.length; n2++) {
      let r2 = e2.charCodeAt(n2);
      t2 += r2 >= 65 && r2 <= 90 ? `-` + String.fromCharCode(r2 + 32) : e2[n2];
    }
    return t2.startsWith(`ms-`) ? `-` + t2 : t2;
  }
  var Ps = Symbol.for(`sc-keyframes`);
  function Fs(e2) {
    return typeof e2 == `object` && !!e2 && Ps in e2;
  }
  function Is(e2) {
    return os(e2) && !(e2.prototype && e2.prototype.isReactComponent);
  }
  var Ls = (e2) => e2 == null || false === e2 || e2 === ``, Rs = Symbol.for(`react.client.reference`);
  function zs(e2) {
    return e2.$$typeof === Rs;
  }
  function Bs(e2, t2) {
    for (let n2 in e2) {
      let r2 = e2[n2];
      e2.hasOwnProperty(n2) && !Ls(r2) && (Array.isArray(r2) && ks.has(r2) || os(r2) ? t2.push(Ns(n2) + `:`, r2, `;`) : us(r2) ? (t2.push(n2 + ` {`), Bs(r2, t2), t2.push(`}`)) : t2.push(Ns(n2) + `: ` + js(n2, r2) + `;`));
    }
  }
  function Vs(e2, t2, n2, r2, i2 = []) {
    if (Ls(e2)) return i2;
    let a2 = typeof e2;
    if (a2 === `string`) return i2.push(e2), i2;
    if (a2 === `function`) return zs(e2) ? i2 : Is(e2) && t2 ? Vs(e2(t2), t2, n2, r2, i2) : (i2.push(e2), i2);
    if (Array.isArray(e2)) {
      for (let a3 = 0; a3 < e2.length; a3++) Vs(e2[a3], t2, n2, r2, i2);
      return i2;
    }
    return ss(e2) ? (i2.push(`.${e2.styledComponentId}`), i2) : Fs(e2) ? (n2 ? (e2.inject(n2, r2), i2.push(e2.getName(r2))) : i2.push(e2), i2) : zs(e2) ? i2 : us(e2) ? (Bs(e2, i2), i2) : (i2.push(e2.toString()), i2);
  }
  var Hs = Vo(_o), Us = class {
    constructor(e2, t2, n2) {
      this.rules = e2, this.componentId = t2, this.baseHash = Bo(Hs, t2), this.baseStyle = n2, Os.registerId(t2);
    }
    generateAndInjectStyles(e2, t2, n2) {
      let r2 = this.baseStyle ? this.baseStyle.generateAndInjectStyles(e2, t2, n2) : ``;
      {
        let i2 = ``;
        for (let r3 = 0; r3 < this.rules.length; r3++) {
          let a2 = this.rules[r3];
          if (typeof a2 == `string`) i2 += a2;
          else if (a2) {
            if (Is(a2)) {
              let r4 = a2(e2);
              typeof r4 == `string` ? i2 += r4 : r4 != null && false !== r4 && (i2 += ls(Vs(r4, e2, t2, n2)));
            } else i2 += ls(Vs(a2, e2, t2, n2));
          }
        }
        if (i2) {
          this.dynamicNameCache || (this.dynamicNameCache = /* @__PURE__ */ new Map());
          let e3 = n2.hash ? n2.hash + i2 : i2, a2 = this.dynamicNameCache.get(e3);
          if (!a2) {
            if (a2 = Ro(Bo(Bo(this.baseHash, n2.hash), i2) >>> 0), this.dynamicNameCache.size >= 200) {
              let e4 = this.dynamicNameCache.keys().next().value;
              e4 !== void 0 && this.dynamicNameCache.delete(e4);
            }
            this.dynamicNameCache.set(e3, a2);
          }
          if (!t2.hasNameForId(this.componentId, a2)) {
            let e4 = n2(i2, `.` + a2, void 0, this.componentId);
            t2.insertRules(this.componentId, a2, e4);
          }
          r2 = cs(r2, a2);
        }
      }
      return r2;
    }
  }, Ws = /&/g;
  function Gs(e2, t2) {
    let n2 = 0;
    for (; --t2 >= 0 && e2.charCodeAt(t2) === 92; ) n2++;
    return !(1 & ~n2);
  }
  function Ks(e2) {
    let t2 = e2.length, n2 = ``, r2 = 0, i2 = 0, a2 = 0, o2 = false, s2 = false;
    for (let c2 = 0; c2 < t2; c2++) {
      let l2 = e2.charCodeAt(c2);
      if (a2 !== 0 || o2 || l2 !== Ms || e2.charCodeAt(c2 + 1) !== 42) {
        if (o2) l2 === 42 && e2.charCodeAt(c2 + 1) === Ms && (o2 = false, c2++);
        else if (l2 !== 34 && l2 !== 39 || Gs(e2, c2)) {
          if (a2 === 0) {
            if (l2 === 123) i2++;
            else if (l2 === 125) {
              if (i2--, i2 < 0) {
                s2 = true;
                let n3 = c2 + 1;
                for (; n3 < t2; ) {
                  let t3 = e2.charCodeAt(n3);
                  if (t3 === 59 || t3 === 10) break;
                  n3++;
                }
                n3 < t2 && e2.charCodeAt(n3) === 59 && n3++, i2 = 0, c2 = n3 - 1, r2 = n3;
                continue;
              }
              i2 === 0 && (n2 += e2.substring(r2, c2 + 1), r2 = c2 + 1);
            } else l2 === 59 && i2 === 0 && (n2 += e2.substring(r2, c2 + 1), r2 = c2 + 1);
          }
        } else a2 === 0 ? a2 = l2 : a2 === l2 && (a2 = 0);
      } else o2 = true, c2++;
    }
    return s2 || i2 !== 0 || a2 !== 0 ? (r2 < t2 && i2 === 0 && a2 === 0 && (n2 += e2.substring(r2)), n2) : e2;
  }
  function qs(e2, t2) {
    let n2 = t2 + ` `, r2 = `,` + n2;
    for (let i2 = 0; i2 < e2.length; i2++) {
      let a2 = e2[i2];
      if (a2.type === `rule`) {
        a2.value = (n2 + a2.value).replaceAll(`,`, r2);
        let e3 = a2.props, t3 = [];
        for (let r3 = 0; r3 < e3.length; r3++) t3[r3] = n2 + e3[r3];
        a2.props = t3;
      }
      Array.isArray(a2.children) && a2.type !== `@keyframes` && qs(a2.children, t2);
    }
    return e2;
  }
  function Js({ options: e2 = jo, plugins: t2 = Ao } = jo) {
    let n2, r2, i2, a2 = (e3, t3, i3) => i3.startsWith(r2) && i3.endsWith(r2) && i3.replaceAll(r2, ``).length > 0 ? `.${n2}` : e3, o2 = t2.slice();
    o2.push((e3) => {
      e3.type === `rule` && e3.value.includes(`&`) && (i2 || (i2 = RegExp(`\\${r2}\\b`, `g`)), e3.props[0] = e3.props[0].replace(Ws, r2).replace(i2, a2));
    }), e2.prefix && o2.push(po), o2.push(lo);
    let s2 = [], c2 = uo(o2.concat(fo((e3) => s2.push(e3)))), l2 = (t3, a3 = ``, o3 = ``, l3 = `&`) => {
      n2 = l3, r2 = a3, i2 = void 0;
      let u3 = (function(e3) {
        let t4 = e3.indexOf(`//`) !== -1, n3 = e3.indexOf(`}`) !== -1;
        if (!t4 && !n3) return e3;
        if (!t4) return Ks(e3);
        let r3 = e3.length, i3 = ``, a4 = 0, o4 = 0, s3 = 0, c3 = 0, l4 = 0, u4 = false;
        for (; o4 < r3; ) {
          let t5 = e3.charCodeAt(o4);
          if (t5 !== 34 && t5 !== 39 || Gs(e3, o4)) {
            if (s3 === 0) {
              if (t5 === Ms && o4 + 1 < r3 && e3.charCodeAt(o4 + 1) === 42) {
                for (o4 += 2; o4 + 1 < r3 && (e3.charCodeAt(o4) !== 42 || e3.charCodeAt(o4 + 1) !== Ms); ) o4++;
                o4 += 2;
              } else if (t5 !== 40) {
                if (t5 !== 41) {
                  if (c3 > 0) o4++;
                  else if (t5 === 42 && o4 + 1 < r3 && e3.charCodeAt(o4 + 1) === Ms) i3 += e3.substring(a4, o4), o4 += 2, a4 = o4, u4 = true;
                  else if (t5 === Ms && o4 + 1 < r3 && e3.charCodeAt(o4 + 1) === Ms) {
                    for (i3 += e3.substring(a4, o4); o4 < r3 && e3.charCodeAt(o4) !== 10; ) o4++;
                    a4 = o4, u4 = true;
                  } else t5 === 123 ? l4++ : t5 === 125 && l4--, o4++;
                } else c3 > 0 && c3--, o4++;
              } else c3++, o4++;
            } else o4++;
          } else s3 === 0 ? s3 = t5 : s3 === t5 && (s3 = 0), o4++;
        }
        return u4 ? (a4 < r3 && (i3 += e3.substring(a4)), l4 === 0 ? i3 : Ks(i3)) : l4 === 0 ? e3 : Ks(e3);
      })(t3), d3 = no(o3 || a3 ? o3 + ` ` + a3 + ` { ` + u3 + ` }` : u3);
      return e2.namespace && (d3 = qs(d3, e2.namespace)), s2 = [], co(d3, c2), s2;
    }, u2 = e2, d2 = zo;
    for (let e3 = 0; e3 < t2.length; e3++) t2[e3].name || Co(15), d2 = Bo(d2, t2[e3].name);
    return u2 != null && u2.namespace && (d2 = Bo(d2, u2.namespace)), u2 != null && u2.prefix && (d2 = Bo(d2, `p`)), l2.hash = d2 === zo ? `` : d2.toString(), l2;
  }
  var Ys = new Os(), Xs = Js(), Zs = M.createContext({
    shouldForwardProp: void 0,
    styleSheet: Ys,
    stylis: Xs,
    stylisPlugins: void 0
  });
  Zs.Consumer;
  function Qs() {
    return M.useContext(Zs);
  }
  function $s(e2) {
    let t2 = Qs(), { styleSheet: n2 } = t2, r2 = M.useMemo(() => {
      let t3 = n2;
      return e2.sheet ? t3 = e2.sheet : e2.target ? t3 = t3.reconstructWithOptions(e2.nonce === void 0 ? {
        target: e2.target
      } : {
        target: e2.target,
        nonce: e2.nonce
      }, false) : e2.nonce !== void 0 && (t3 = t3.reconstructWithOptions({
        nonce: e2.nonce
      })), e2.disableCSSOMInjection && (t3 = t3.reconstructWithOptions({
        useCSSOMInjection: false
      })), t3;
    }, [
      e2.disableCSSOMInjection,
      e2.nonce,
      e2.sheet,
      e2.target,
      n2
    ]), i2 = M.useMemo(() => e2.stylisPlugins === void 0 && e2.namespace === void 0 && e2.enableVendorPrefixes === void 0 ? t2.stylis : Js({
      options: {
        namespace: e2.namespace,
        prefix: e2.enableVendorPrefixes
      },
      plugins: e2.stylisPlugins ?? t2.stylisPlugins
    }), [
      e2.enableVendorPrefixes,
      e2.namespace,
      e2.stylisPlugins,
      t2.stylis,
      t2.stylisPlugins
    ]), a2 = `shouldForwardProp` in e2 ? e2.shouldForwardProp : t2.shouldForwardProp, o2 = e2.stylisPlugins ?? t2.stylisPlugins, s2 = M.useMemo(() => ({
      shouldForwardProp: a2,
      styleSheet: r2,
      stylis: i2,
      stylisPlugins: o2
    }), [
      a2,
      r2,
      i2,
      o2
    ]);
    return M.createElement(Zs.Provider, {
      value: s2
    }, e2.children);
  }
  var ec = M.createContext(void 0);
  ec.Consumer;
  var tc = Object.prototype.hasOwnProperty, nc = {};
  function rc(e2, t2) {
    let n2 = typeof e2 == `string` ? Fo(e2) : `sc`;
    nc[n2] = (nc[n2] || 0) + 1;
    let r2 = n2 + `-` + Ho(_o + n2 + nc[n2]);
    return t2 ? t2 + `-` + r2 : r2;
  }
  function ic(e2, t2, n2) {
    let r2 = ss(e2), i2 = e2, a2 = !Wo(e2), { attrs: o2 = Ao, componentId: s2 = rc(t2.displayName, t2.parentComponentId), displayName: c2 = Go(e2) } = t2, l2 = t2.displayName && t2.componentId ? Fo(t2.displayName) + `-` + t2.componentId : t2.componentId || s2, u2 = r2 && i2.attrs ? i2.attrs.concat(o2).filter(Boolean) : o2, { shouldForwardProp: d2 } = t2;
    if (r2 && i2.shouldForwardProp) {
      let e3 = i2.shouldForwardProp;
      if (t2.shouldForwardProp) {
        let n3 = t2.shouldForwardProp;
        d2 = (t3, r3) => e3(t3, r3) && n3(t3, r3);
      } else d2 = e3;
    }
    let f2 = new Us(n2, l2, r2 ? i2.componentStyle : void 0);
    function p2(e3, t3) {
      return (function(e4, t4, n3) {
        let { attrs: r3, componentStyle: i3, defaultProps: a3, foldedComponentIds: o3, styledComponentId: s3, target: c3 } = e4, l3 = M.useContext(ec), u3 = Qs(), d3 = e4.shouldForwardProp || u3.shouldForwardProp, f3 = Mo(t4, l3, a3) || jo, p3, m3;
        {
          let e5 = M.useRef(null), n4 = e5.current;
          if (n4 !== null && n4[1] === f3 && n4[2] === u3.styleSheet && n4[3] === u3.stylis && n4[7] === i3 && (function(e6, t5, n5) {
            let r4 = e6, i4 = t5, a4 = 0;
            for (let e7 in i4) if (tc.call(i4, e7) && (a4++, r4[e7] !== i4[e7])) return false;
            return a4 === n5;
          })(n4[0], t4, n4[4])) p3 = n4[5], m3 = n4[6];
          else {
            p3 = (function(e6, t5, n6) {
              let r4 = Object.assign(Object.assign({}, t5), {
                className: void 0,
                theme: n6
              }), i4 = e6.length > 1;
              for (let n7 = 0; n7 < e6.length; n7++) {
                let a4 = e6[n7], o4 = os(a4) ? a4(i4 ? Object.assign({}, r4) : r4) : a4;
                for (let e7 in o4) e7 === `className` ? r4.className = cs(r4.className, o4[e7]) : e7 === `style` ? r4.style = Object.assign(Object.assign({}, r4.style), o4[e7]) : e7 in t5 && t5[e7] === void 0 || (r4[e7] = o4[e7]);
              }
              return `className` in t5 && typeof t5.className == `string` && (r4.className = cs(r4.className, t5.className)), r4;
            })(r3, t4, f3), m3 = (function(e6, t5, n6, r4) {
              return e6.generateAndInjectStyles(t5, n6, r4);
            })(i3, p3, u3.styleSheet, u3.stylis);
            let n5 = 0;
            for (let e6 in t4) tc.call(t4, e6) && n5++;
            e5.current = [
              t4,
              f3,
              u3.styleSheet,
              u3.stylis,
              n5,
              p3,
              m3,
              i3
            ];
          }
        }
        let h2 = p3.as || c3, g2 = (function(e5, t5, n4, r4) {
          let i4 = {};
          for (let a4 in e5) e5[a4] === void 0 || a4[0] === `$` || a4 === `as` || a4 === `theme` && e5.theme === n4 || (a4 === `forwardedAs` ? i4.as = e5.forwardedAs : r4 && !r4(a4, t5) || (i4[a4] = e5[a4]));
          return i4;
        })(p3, h2, f3, d3), _2 = cs(o3, s3);
        return m3 && (_2 += ` ` + m3), p3.className && (_2 += ` ` + p3.className), g2[Wo(h2) && h2.includes(`-`) ? `class` : `className`] = _2, n3 && (g2.ref = n3), (0, M.createElement)(h2, g2);
      })(m2, e3, t3);
    }
    p2.displayName = c2;
    let m2 = M.forwardRef(p2);
    return m2.attrs = u2, m2.componentStyle = f2, m2.displayName = c2, m2.shouldForwardProp = d2, m2.foldedComponentIds = r2 ? cs(i2.foldedComponentIds, i2.styledComponentId) : ``, m2.styledComponentId = l2, m2.target = r2 ? i2.target : e2, Object.defineProperty(m2, "defaultProps", {
      get() {
        return this._foldedDefaultProps;
      },
      set(e3) {
        this._foldedDefaultProps = r2 ? (function(e4, ...t3) {
          for (let n3 of t3) ds(e4, n3, true);
          return e4;
        })({}, i2.defaultProps, e3) : e3;
      }
    }), fs(m2, () => `.${m2.styledComponentId}`), a2 && as(m2, e2, {
      attrs: true,
      componentStyle: true,
      displayName: true,
      foldedComponentIds: true,
      shouldForwardProp: true,
      styledComponentId: true,
      target: true
    }), m2;
  }
  var ac = new Set(`a.abbr.address.area.article.aside.audio.b.bdi.bdo.blockquote.body.button.br.canvas.caption.cite.code.col.colgroup.data.datalist.dd.del.details.dfn.dialog.div.dl.dt.em.embed.fieldset.figcaption.figure.footer.form.h1.h2.h3.h4.h5.h6.header.hgroup.hr.html.i.iframe.img.input.ins.kbd.label.legend.li.main.map.mark.menu.meter.nav.object.ol.optgroup.option.output.p.picture.pre.progress.q.rp.rt.ruby.s.samp.search.section.select.slot.small.span.strong.sub.summary.sup.table.tbody.td.template.textarea.tfoot.th.thead.time.tr.u.ul.var.video.wbr.circle.clipPath.defs.ellipse.feBlend.feColorMatrix.feComponentTransfer.feComposite.feConvolveMatrix.feDiffuseLighting.feDisplacementMap.feDistantLight.feDropShadow.feFlood.feFuncA.feFuncB.feFuncG.feFuncR.feGaussianBlur.feImage.feMerge.feMergeNode.feMorphology.feOffset.fePointLight.feSpecularLighting.feSpotLight.feTile.feTurbulence.filter.foreignObject.g.image.line.linearGradient.marker.mask.path.pattern.polygon.polyline.radialGradient.rect.stop.svg.switch.symbol.text.textPath.tspan.use`.split(`.`));
  function oc(e2, t2) {
    let n2 = [
      e2[0]
    ];
    for (let r2 = 0, i2 = t2.length; r2 < i2; r2 += 1) n2.push(t2[r2], e2[r2 + 1]);
    return n2;
  }
  var sc = (e2) => (ks.add(e2), e2);
  function cc(e2, ...t2) {
    if (os(e2) || us(e2)) return sc(Vs(oc(Ao, [
      e2,
      ...t2
    ])));
    let n2 = e2;
    return t2.length === 0 && n2.length === 1 && typeof n2[0] == `string` ? Vs(n2) : sc(Vs(oc(n2, t2)));
  }
  function lc(e2, t2, n2 = jo) {
    if (!t2) throw Co(1, t2);
    let r2 = (r3, ...i2) => e2(t2, n2, cc(r3, ...i2));
    return r2.attrs = (r3) => lc(e2, t2, Object.assign(Object.assign({}, n2), {
      attrs: Array.prototype.concat(n2.attrs, r3).filter(Boolean)
    })), r2.withConfig = (r3) => lc(e2, t2, Object.assign(Object.assign({}, n2), r3)), r2;
  }
  var uc = (e2) => lc(ic, e2), I = uc;
  ac.forEach((e2) => {
    I[e2] = uc(e2);
  }), `${mo}`, `${mo}`, `${mo}`;
  var L = {
    textWhite: `rgba(223, 223, 223, 1)`,
    textGrey: `rgba(156, 156, 156, 1)`,
    dangerRed: `rgba(243, 151, 143, 1)`,
    dangerRedPressed: `rgba(240, 97, 84,1)`,
    panelBackground: `rgba(38, 38, 38, 0.7)`,
    panelBorder: `rgba(61, 61, 63, 0.7)`,
    buttonBackground: `rgba(61, 61, 63, 0.6)`,
    buttonHovered: `rgba(61, 61, 63, 0.8)`,
    buttonPressed: `rgba(61, 61, 63, 1)`,
    gradientGrey: `linear-gradient(to bottom, #343434, #393939)`,
    gradientGreyTranslucent: `linear-gradient(to bottom, rgba(52, 52, 52, 0.75), rgba(57, 57, 57, 0.75))`,
    gradientLightGreyTranslucent: `linear-gradient(to bottom, rgba(75, 75, 75, 0.75), rgba(80, 80, 80, 0.75))`
  }, R = {
    height: `30px`,
    minWidth: `30px`,
    fontSize: `14px`,
    radiusMiddle: `3px`,
    radiusSolo: `10px`,
    radiusFirst: `10px 3px 3px 10px`,
    radiusLast: `3px 10px 10px 3px`,
    widthLong: `70px`,
    widthShort: `30px`,
    gap: `3px`
  }, dc = I.button`
	background: ${L.gradientGreyTranslucent};
	border: none;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	color: ${L.textWhite};
	border: 1px solid transparent;
	border-radius: ${R.radiusMiddle};
	font-size: ${R.fontSize};
	height: ${R.height};
	min-width: ${R.minWidth};
	transition: all 0.2s ease-in-out;
	text-transform: none;
	box-shadow: none;
	font-family: Arial, sans-serif;

	&:first-child {
		border-radius: ${({ $reverse: e2 }) => e2 ? R.radiusLast : R.radiusFirst};
	}

	&:last-child {
		border-radius: ${({ $reverse: e2 }) => e2 ? R.radiusFirst : R.radiusLast};
	}

	&:first-child:last-child {
		border-radius: ${R.radiusSolo};
	}
`, fc = I.div`
	padding: 2px;
	display: flex;
	background-color: ${L.panelBackground};
	border: 1px solid ${L.panelBorder};
	backdrop-filter: blur(40px);
	-webkit-backdrop-filter: blur(40px);
	justify-content: center;
	pointer-events: all;
	border-radius: 14px;
	align-items: center;
	height: 24px;
`, pc = I.button`
	background-color: transparent;
	border: none;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	color: ${L.textWhite};
	border-radius: 4px;
	font-size: 16px;
	height: 24px;
	min-width: 24px;
	transition: all 0.2s ease-in-out;
	text-transform: none;
	box-shadow: none;
	padding: 1px 5px;
	font-family: Arial, sans-serif;

	&:hover {
		background-color: ${L.buttonPressed};
	}

	&:active {
		background-color: ${L.buttonPressed};
	}

	&:focus {
		outline: none;
	}

	&:first-child {
		border-radius: 12px 4px 4px 12px;
	}

	&:last-child {
		border-radius: 4px 12px 12px 4px;
	}

	&:first-child:last-child {
		border-radius: 12px;
	}
`, mc = I.div`
	background-color: ${({ $pressed: e2 }) => e2 ? L.buttonPressed : L.buttonBackground};
	border: none;
	display: flex;
	align-items: center;
	justify-content: center;
	color: ${L.textWhite};
	border-radius: 8px;
	font-size: 14px;
	font-family: Arial, sans-serif;
	height: 30px;
	width: 30px;
	transition: all 0.2s ease-in-out;
`, hc = I.div`
	display: flex;
	align-items: center;
	height: 30px;
	margin-bottom: 3px;
	justify-content: flex-start;
	flex-direction: ${({ $reverse: e2 }) => e2 ? `row-reverse` : `row`};

	&:last-child {
		margin-bottom: 0;
	}
`, gc = I.div`
	display: flex;
	flex-direction: ${({ $reverse: e2 }) => e2 ? `row-reverse` : `row`};
	height: 100%;
	justify-content: space-between;
	align-items: center;
	margin: ${({ $reverse: e2 }) => e2 ? `0 5px 0 0` : `0 0 0 5px`};
	gap: 3px;
`;
  I.button`
	background-color: rgba(255, 255, 255, 0.3);
	border: none;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0;
	pointer-events: none;
	width: 50px;
	height: 50px;
	border-radius: 50%;
	position: relative;
	margin: 0 5px;
	backdrop-filter: blur(10px);
	-webkit-backdrop-filter: blur(10px);
`, I.div`
	position: absolute;
	background-color: ${L.textWhite};
	border-radius: 50%;
	width: 36px;
	height: 36px;
	cursor: pointer;
	pointer-events: auto;
`;
  var _c = I.input.attrs({
    type: `range`
  })`
	-webkit-appearance: none;
	appearance: none;
	background: ${L.gradientGreyTranslucent};
	border: none;
	height: 100%;
	width: ${R.widthLong};
	cursor: pointer;
	margin: 0;
	transition: all 0.2s ease-in-out;
	border-radius: ${({ $reverse: e2 }) => e2 ? R.radiusFirst : R.radiusLast};

	&::-webkit-slider-thumb {
		-webkit-appearance: none;
		appearance: none;
		width: 8px;
		height: 30px;
		background-color: ${L.textWhite};
		border-radius: ${R.radiusMiddle};
	}

	&::-moz-range-thumb {
		width: 10px;
		height: 30px;
		background-color: ${L.textWhite};
		border-radius: ${R.radiusMiddle};
	}

	&::-ms-thumb {
		width: 8px;
		height: 24px;
		background-color: ${L.textWhite};
		border-radius: ${R.radiusMiddle};
	}
`;
  I.div`
	display: flex;
	flex-direction: column;
	align-items: ${({ $reverse: e2 }) => e2 ? `flex-start` : `flex-end`};
	justify-content: center;
	margin: ${({ $reverse: e2 }) => e2 ? `2px -26px 0 0` : `2px 0 0 -26px`};
`, I.div`
	display: flex;
	flex-direction: ${({ $reverse: e2 }) => e2 ? `row-reverse` : `row`};
	align-items: center;
	justify-content: center;
`;
  var z = I(ca)`
	height: ${({ $size: e2 = 14 }) => `${e2}px`};
	min-height: ${({ $size: e2 = 14 }) => `${e2}px`};
	max-height: ${({ $size: e2 = 14 }) => `${e2}px`};
	width: ${({ $size: e2 = 14 }) => `${e2}px`};
	min-width: ${({ $size: e2 = 14 }) => `${e2}px`};
	max-width: ${({ $size: e2 = 14 }) => `${e2}px`};
	transform: ${({ $reverse: e2 }) => e2 ? `scaleX(-1)` : `unset`};
`, vc = I(ca)`
	height: 18px;
	min-height: 18px;
	max-height: 18px;
	width: 18px;
	min-width: 18px;
	max-width: 18px;
	margin: 6px;
	transform: ${({ $reverse: e2 }) => e2 ? `scaleX(-1)` : `unset`};
`, yc = I.div`
	position: fixed;
	padding: 5px;
	font-family: Arial, sans-serif;
	color: ${L.textWhite};
	pointer-events: all;
	background-color: ${L.panelBackground};
	border: 1px solid ${L.panelBorder};
	backdrop-filter: blur(40px);
	-webkit-backdrop-filter: blur(40px);
	border-radius: 12px;
	box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
	overflow: hidden;
	display: flex;
	flex-direction: column;
`, bc = I.hr`
	width: ${({ $horizontal: e2 = true }) => e2 ? `unset` : `1px`};
	height: ${({ $horizontal: e2 = true }) => e2 ? `1px` : `unset`};
	background-color: ${L.panelBorder};
	margin: 5px 3px;
	border: none;
`, xc = I.button`
	background-color: transparent;
	border: none;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	color: ${({ $isRed: e2 }) => e2 ? L.dangerRed : L.textWhite};
	font-size: 12px;
	padding: 3px;
	text-transform: none;
	box-shadow: none;

	&:hover {
		color: ${({ $isRed: e2 }) => e2 ? L.dangerRedPressed : `#ffffff`};
	}

	&:active {
		color: ${({ $isRed: e2 }) => e2 ? L.dangerRedPressed : `#ffffff`};
	}

	&:focus {
		outline: none;
	}
`, Sc = I.div`
	display: flex;
	flex-direction: row;
	gap: ${R.gap};
	height: 25px;
`, Cc = I.input.attrs({
    type: `text`
  })`
	width: 50px;
	outline: none;
	background: ${L.gradientGrey};
	border: 1px solid transparent;
	border-radius: 5px;
	height: 25px;
	color: ${L.textWhite};
	padding: 0 10px 0 5px;
	box-sizing: border-box;
	font-size: 10px;

	&:read-only {
		background: ${L.gradientGreyTranslucent};
	}

	&:invalid {
		background-color: ${L.dangerRed};
	}
`, wc = I.span`
	position: absolute;
	right: 5px;
	top: 50%;
	transform: translateY(-50%);
	pointer-events: none;
	color: ${L.textGrey};
	font-size: 10px;
`, Tc = {
    prefix: `fas`,
    iconName: `right-from-bracket`,
    icon: [
      512,
      512,
      [
        `sign-out-alt`
      ],
      `f2f5`,
      `M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z`
    ]
  }, Ec = {
    prefix: `fas`,
    iconName: `fingerprint`,
    icon: [
      512,
      512,
      [],
      `f577`,
      `M48 256C48 141.1 141.1 48 256 48c63.1 0 119.6 28.1 157.8 72.5c8.6 10.1 23.8 11.2 33.8 2.6s11.2-23.8 2.6-33.8C403.3 34.6 333.7 0 256 0C114.6 0 0 114.6 0 256l0 40c0 13.3 10.7 24 24 24s24-10.7 24-24l0-40zm458.5-52.9c-2.7-13-15.5-21.3-28.4-18.5s-21.3 15.5-18.5 28.4c2.9 13.9 4.5 28.3 4.5 43.1l0 40c0 13.3 10.7 24 24 24s24-10.7 24-24l0-40c0-18.1-1.9-35.8-5.5-52.9zM256 80c-19 0-37.4 3-54.5 8.6c-15.2 5-18.7 23.7-8.3 35.9c7.1 8.3 18.8 10.8 29.4 7.9c10.6-2.9 21.8-4.4 33.4-4.4c70.7 0 128 57.3 128 128l0 24.9c0 25.2-1.5 50.3-4.4 75.3c-1.7 14.6 9.4 27.8 24.2 27.8c11.8 0 21.9-8.6 23.3-20.3c3.3-27.4 5-55 5-82.7l0-24.9c0-97.2-78.8-176-176-176zM150.7 148.7c-9.1-10.6-25.3-11.4-33.9-.4C93.7 178 80 215.4 80 256l0 24.9c0 24.2-2.6 48.4-7.8 71.9C68.8 368.4 80.1 384 96.1 384c10.5 0 19.9-7 22.2-17.3c6.4-28.1 9.7-56.8 9.7-85.8l0-24.9c0-27.2 8.5-52.4 22.9-73.1c7.2-10.4 8-24.6-.2-34.2zM256 160c-53 0-96 43-96 96l0 24.9c0 35.9-4.6 71.5-13.8 106.1c-3.8 14.3 6.7 29 21.5 29c9.5 0 17.9-6.2 20.4-15.4c10.5-39 15.9-79.2 15.9-119.7l0-24.9c0-28.7 23.3-52 52-52s52 23.3 52 52l0 24.9c0 36.3-3.5 72.4-10.4 107.9c-2.7 13.9 7.7 27.2 21.8 27.2c10.2 0 19-7 21-17c7.7-38.8 11.6-78.3 11.6-118.1l0-24.9c0-53-43-96-96-96zm24 96c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 24.9c0 59.9-11 119.3-32.5 175.2l-5.9 15.3c-4.8 12.4 1.4 26.3 13.8 31s26.3-1.4 31-13.8l5.9-15.3C267.9 411.9 280 346.7 280 280.9l0-24.9z`
    ]
  }, Dc = {
    prefix: `fas`,
    iconName: `caret-right`,
    icon: [
      256,
      512,
      [],
      `f0da`,
      `M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z`
    ]
  }, Oc = {
    prefix: `fas`,
    iconName: `caret-left`,
    icon: [
      256,
      512,
      [],
      `f0d9`,
      `M9.4 278.6c-12.5-12.5-12.5-32.8 0-45.3l128-128c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6l0 256c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-128-128z`
    ]
  }, kc = {
    prefix: `fas`,
    iconName: `gamepad`,
    icon: [
      640,
      512,
      [],
      `f11b`,
      `M192 64C86 64 0 150 0 256S86 448 192 448l256 0c106 0 192-86 192-192s-86-192-192-192L192 64zM496 168a40 40 0 1 1 0 80 40 40 0 1 1 0-80zM392 304a40 40 0 1 1 80 0 40 40 0 1 1 -80 0zM168 200c0-13.3 10.7-24 24-24s24 10.7 24 24l0 32 32 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-32 0 0 32c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-32-32 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l32 0 0-32z`
    ]
  }, Ac = {
    prefix: `fas`,
    iconName: `hand`,
    icon: [
      512,
      512,
      [
        129306,
        9995,
        `hand-paper`
      ],
      `f256`,
      `M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 208c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-176c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 272c0 1.5 0 3.1 .1 4.6L67.6 283c-16-15.2-41.3-14.6-56.6 1.4s-14.6 41.3 1.4 56.6L124.8 448c43.1 41.1 100.4 64 160 64l19.2 0c97.2 0 176-78.8 176-176l0-208c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-176c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 176c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-208z`
    ]
  }, jc = {
    prefix: `fas`,
    iconName: `plug`,
    icon: [
      384,
      512,
      [
        128268
      ],
      `f1e6`,
      `M96 0C78.3 0 64 14.3 64 32l0 96 64 0 0-96c0-17.7-14.3-32-32-32zM288 0c-17.7 0-32 14.3-32 32l0 96 64 0 0-96c0-17.7-14.3-32-32-32zM32 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l0 32c0 77.4 55 142 128 156.8l0 67.2c0 17.7 14.3 32 32 32s32-14.3 32-32l0-67.2C297 398 352 333.4 352 256l0-32c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 160z`
    ]
  }, Mc = {
    prefix: `fas`,
    iconName: `ban`,
    icon: [
      512,
      512,
      [
        128683,
        `cancel`
      ],
      `f05e`,
      `M367.2 412.5L99.5 144.8C77.1 176.1 64 214.5 64 256c0 106 86 192 192 192c41.5 0 79.9-13.1 111.2-35.5zm45.3-45.3C434.9 335.9 448 297.5 448 256c0-106-86-192-192-192c-41.5 0-79.9 13.1-111.2 35.5L412.5 367.2zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z`
    ]
  }, Nc = {
    prefix: `fas`,
    iconName: `arrow-right-to-bracket`,
    icon: [
      512,
      512,
      [
        `sign-in`
      ],
      `f090`,
      `M352 96l64 0c17.7 0 32 14.3 32 32l0 256c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0c53 0 96-43 96-96l0-256c0-53-43-96-96-96l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32zm-9.4 182.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L242.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z`
    ]
  }, Pc = {
    prefix: `fas`,
    iconName: `caret-up`,
    icon: [
      320,
      512,
      [],
      `f0d8`,
      `M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8l256 0c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z`
    ]
  }, Fc = {
    prefix: `fas`,
    iconName: `rotate-left`,
    icon: [
      512,
      512,
      [
        `rotate-back`,
        `rotate-backward`,
        `undo-alt`
      ],
      `f2ea`,
      `M48.5 224L40 224c-13.3 0-24-10.7-24-24L16 72c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2L98.6 96.6c87.6-86.5 228.7-86.2 315.8 1c87.5 87.5 87.5 229.3 0 316.8s-229.3 87.5-316.8 0c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0c62.5 62.5 163.8 62.5 226.3 0s62.5-163.8 0-226.3c-62.2-62.2-162.7-62.5-225.3-1L185 183c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8L48.5 224z`
    ]
  }, Ic = {
    prefix: `fas`,
    iconName: `circle-play`,
    icon: [
      512,
      512,
      [
        61469,
        `play-circle`
      ],
      `f144`,
      `M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9l0 176c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z`
    ]
  }, Lc = {
    prefix: `fas`,
    iconName: `person-shelter`,
    icon: [
      512,
      512,
      [],
      `e54f`,
      `M271.9 4.2c-9.8-5.6-21.9-5.6-31.8 0l-224 128C6.2 137.9 0 148.5 0 160L0 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-301.4L256 68.9 448 178.6 448 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-320c0-11.5-6.2-22.1-16.1-27.8l-224-128zM256 208a40 40 0 1 0 0-80 40 40 0 1 0 0 80zm-8 280l0-88 16 0 0 88c0 13.3 10.7 24 24 24s24-10.7 24-24l0-174.5 26.9 49.9c6.3 11.7 20.8 16 32.5 9.8s16-20.8 9.8-32.5l-37.9-70.3c-15.3-28.5-45.1-46.3-77.5-46.3l-19.5 0c-32.4 0-62.1 17.8-77.5 46.3l-37.9 70.3c-6.3 11.7-1.9 26.2 9.8 32.5s26.2 1.9 32.5-9.8L200 313.5 200 488c0 13.3 10.7 24 24 24s24-10.7 24-24z`
    ]
  }, Rc = {
    prefix: `fas`,
    iconName: `hand-scissors`,
    icon: [
      512,
      512,
      [],
      `f257`,
      `M40 208c-22.1 0-40 17.9-40 40s17.9 40 40 40l180.2 0c-7.6 8.5-12.2 19.7-12.2 32c0 25.3 19.5 46 44.3 47.9c-7.7 8.5-12.3 19.8-12.3 32.1c0 26.5 21.5 48 48 48l32 0 64 0c70.7 0 128-57.3 128-128l0-113.1c0-40.2-16-78.8-44.4-107.3C444.8 76.8 413.9 64 381.7 64L336 64c-21.3 0-39.3 13.9-45.6 33.1l74.5 23.7c8.4 2.7 13.1 11.7 10.4 20.1s-11.7 13.1-20.1 10.4L288 129.9c0 0 0 .1 0 .1L84 65.8C62.9 59.2 40.5 70.9 33.8 92s5.1 43.5 26.2 50.2L269.5 208 40 208z`
    ]
  }, zc = {
    prefix: `fas`,
    iconName: `street-view`,
    icon: [
      512,
      512,
      [],
      `f21d`,
      `M320 64A64 64 0 1 0 192 64a64 64 0 1 0 128 0zm-96 96c-35.3 0-64 28.7-64 64l0 48c0 17.7 14.3 32 32 32l1.8 0 11.1 99.5c1.8 16.2 15.5 28.5 31.8 28.5l38.7 0c16.3 0 30-12.3 31.8-28.5L318.2 304l1.8 0c17.7 0 32-14.3 32-32l0-48c0-35.3-28.7-64-64-64l-64 0zM132.3 394.2c13-2.4 21.7-14.9 19.3-27.9s-14.9-21.7-27.9-19.3c-32.4 5.9-60.9 14.2-82 24.8c-10.5 5.3-20.3 11.7-27.8 19.6C6.4 399.5 0 410.5 0 424c0 21.4 15.5 36.1 29.1 45c14.7 9.6 34.3 17.3 56.4 23.4C130.2 504.7 190.4 512 256 512s125.8-7.3 170.4-19.6c22.1-6.1 41.8-13.8 56.4-23.4c13.7-8.9 29.1-23.6 29.1-45c0-13.5-6.4-24.5-14-32.6c-7.5-7.9-17.3-14.3-27.8-19.6c-21-10.6-49.5-18.9-82-24.8c-13-2.4-25.5 6.3-27.9 19.3s6.3 25.5 19.3 27.9c30.2 5.5 53.7 12.8 69 20.5c3.2 1.6 5.8 3.1 7.9 4.5c3.6 2.4 3.6 7.2 0 9.6c-8.8 5.7-23.1 11.8-43 17.3C374.3 457 318.5 464 256 464s-118.3-7-157.7-17.9c-19.9-5.5-34.2-11.6-43-17.3c-3.6-2.4-3.6-7.2 0-9.6c2.1-1.4 4.8-2.9 7.9-4.5c15.3-7.7 38.8-14.9 69-20.5z`
    ]
  }, Bc = {
    prefix: `fas`,
    iconName: `gear`,
    icon: [
      512,
      512,
      [
        9881,
        `cog`
      ],
      `f013`,
      `M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z`
    ]
  }, Vc = {
    prefix: `fas`,
    iconName: `caret-down`,
    icon: [
      320,
      512,
      [],
      `f0d7`,
      `M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z`
    ]
  }, Hc = {
    prefix: `fas`,
    iconName: `delete-left`,
    icon: [
      576,
      512,
      [
        9003,
        `backspace`
      ],
      `f55a`,
      `M576 128c0-35.3-28.7-64-64-64L205.3 64c-17 0-33.3 6.7-45.3 18.7L9.4 233.4c-6 6-9.4 14.1-9.4 22.6s3.4 16.6 9.4 22.6L160 429.3c12 12 28.3 18.7 45.3 18.7L512 448c35.3 0 64-28.7 64-64l0-256zM271 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z`
    ]
  }, Uc = {
    prefix: `fas`,
    iconName: `bug`,
    icon: [
      512,
      512,
      [],
      `f188`,
      `M256 0c53 0 96 43 96 96l0 3.6c0 15.7-12.7 28.4-28.4 28.4l-135.1 0c-15.7 0-28.4-12.7-28.4-28.4l0-3.6c0-53 43-96 96-96zM41.4 105.4c12.5-12.5 32.8-12.5 45.3 0l64 64c.7 .7 1.3 1.4 1.9 2.1c14.2-7.3 30.4-11.4 47.5-11.4l112 0c17.1 0 33.2 4.1 47.5 11.4c.6-.7 1.2-1.4 1.9-2.1l64-64c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-64 64c-.7 .7-1.4 1.3-2.1 1.9c6.2 12 10.1 25.3 11.1 39.5l64.3 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c0 24.6-5.5 47.8-15.4 68.6c2.2 1.3 4.2 2.9 6 4.8l64 64c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0l-63.1-63.1c-24.5 21.8-55.8 36.2-90.3 39.6L272 240c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 239.2c-34.5-3.4-65.8-17.8-90.3-39.6L86.6 502.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l64-64c1.9-1.9 3.9-3.4 6-4.8C101.5 367.8 96 344.6 96 320l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64.3 0c1.1-14.1 5-27.5 11.1-39.5c-.7-.6-1.4-1.2-2.1-1.9l-64-64c-12.5-12.5-12.5-32.8 0-45.3z`
    ]
  }, Wc = {
    prefix: `fas`,
    iconName: `angle-up`,
    icon: [
      448,
      512,
      [
        8963
      ],
      `f106`,
      `M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z`
    ]
  }, Gc = {
    prefix: `fas`,
    iconName: `chevron-left`,
    icon: [
      320,
      512,
      [
        9001
      ],
      `f053`,
      `M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z`
    ]
  }, Kc = {
    prefix: `fas`,
    iconName: `hand-lizard`,
    icon: [
      512,
      512,
      [],
      `f258`,
      `M0 112C0 85.5 21.5 64 48 64l112 0 80 0 46.5 0c36.8 0 71.2 18 92.1 48.2l113.5 164c13 18.7 19.9 41 19.9 63.8l0 12 0 16 0 48c0 17.7-14.3 32-32 32l-96 0c-17.7 0-32-14.3-32-32l0-13.8L273.9 352 240 352l-80 0-48 0c-26.5 0-48-21.5-48-48s21.5-48 48-48l48 0 80 0c26.5 0 48-21.5 48-48s-21.5-48-48-48l-80 0L48 160c-26.5 0-48-21.5-48-48z`
    ]
  }, qc = {
    prefix: `fas`,
    iconName: `chevron-right`,
    icon: [
      320,
      512,
      [
        9002
      ],
      `f054`,
      `M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z`
    ]
  }, Jc = {
    prefix: `fas`,
    iconName: `vr-cardboard`,
    icon: [
      640,
      512,
      [],
      `f729`,
      `M576 64L64 64C28.7 64 0 92.7 0 128L0 384c0 35.3 28.7 64 64 64l120.4 0c24.2 0 46.4-13.7 57.2-35.4l32-64c8.8-17.5 26.7-28.6 46.3-28.6s37.5 11.1 46.3 28.6l32 64c10.8 21.7 33 35.4 57.2 35.4L576 448c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64zM96 240a64 64 0 1 1 128 0A64 64 0 1 1 96 240zm384-64a64 64 0 1 1 0 128 64 64 0 1 1 0-128z`
    ]
  }, Yc = {
    prefix: `fas`,
    iconName: `arrow-turn-down`,
    icon: [
      384,
      512,
      [
        `level-down`
      ],
      `f149`,
      `M32 64C14.3 64 0 49.7 0 32S14.3 0 32 0l96 0c53 0 96 43 96 96l0 306.7 73.4-73.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-128 128c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 402.7 160 96c0-17.7-14.3-32-32-32L32 64z`
    ]
  }, Xc = {
    prefix: `fas`,
    iconName: `circle-xmark`,
    icon: [
      512,
      512,
      [
        61532,
        `times-circle`,
        `xmark-circle`
      ],
      `f057`,
      `M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z`
    ]
  }, Zc = {
    prefix: `fas`,
    iconName: `video`,
    icon: [
      576,
      512,
      [
        `video-camera`
      ],
      `f03d`,
      `M0 128C0 92.7 28.7 64 64 64l256 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2l0 256c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1l0-17.1 0-128 0-17.1 14.2-9.5 96-64c9.8-6.5 22.4-7.2 32.9-1.6z`
    ]
  }, B = R.height, Qc = {
    "x-button-left": ({ scale: e2 = 1.2 }) => (0, D.jsxs)(`svg`, {
      xmlns: `http://www.w3.org/2000/svg`,
      width: B,
      height: B,
      fill: `none`,
      transform: `scale(${e2}, ${e2})`,
      children: [
        (0, D.jsx)(`path`, {
          fill: `#fff`,
          fillRule: `evenodd`,
          d: `M7 13.125a7 7 0 1 0 14 0v1.75a7 7 0 0 1-14 0v-1.75Z`,
          clipRule: `evenodd`,
          style: {
            fill: `#fff`,
            fillOpacity: 1
          }
        }),
        (0, D.jsx)(`path`, {
          stroke: `#fff`,
          strokeWidth: 0.55,
          d: `M14 19.863a6.738 6.738 0 1 0 0-13.476 6.738 6.738 0 0 0 0 13.476Z`,
          style: {
            stroke: `#fff`,
            strokeOpacity: 1
          }
        }),
        (0, D.jsx)(`path`, {
          fill: `#fff`,
          d: `M16.529 16.1h-.893l-1.653-2.713-1.68 2.713h-.832l2.074-3.255-1.942-2.992h.875l1.531 2.45 1.54-2.45h.831l-1.933 2.975 2.082 3.272Z`,
          style: {
            fill: `#fff`,
            fillOpacity: 1
          }
        })
      ]
    }),
    "y-button-left": ({ scale: e2 = 1.2 }) => (0, D.jsxs)(`svg`, {
      xmlns: `http://www.w3.org/2000/svg`,
      width: B,
      height: B,
      fill: `none`,
      transform: `scale(${e2}, ${e2})`,
      children: [
        (0, D.jsx)(`path`, {
          fill: `#fff`,
          fillRule: `evenodd`,
          d: `M7 13.125a7 7 0 1 0 14 0v1.75a7 7 0 0 1-14 0v-1.75Z`,
          clipRule: `evenodd`,
          style: {
            fill: `#fff`,
            fillOpacity: 1
          }
        }),
        (0, D.jsx)(`path`, {
          stroke: `#fff`,
          strokeWidth: 0.55,
          d: `M14 19.863a6.738 6.738 0 1 0 0-13.476 6.738 6.738 0 0 0 0 13.476Z`,
          style: {
            stroke: `#fff`,
            strokeOpacity: 1
          }
        }),
        (0, D.jsx)(`path`, {
          fill: `#fff`,
          d: `m14.086 12.924 1.627-3.071h.849l-2.083 3.823V16.1h-.787v-2.389L11.61 9.853h.857l1.619 3.07Z`,
          style: {
            fill: `#fff`,
            fillOpacity: 1
          }
        })
      ]
    }),
    "a-button-right": ({ scale: e2 = 1.2 }) => (0, D.jsxs)(`svg`, {
      xmlns: `http://www.w3.org/2000/svg`,
      width: B,
      height: B,
      fill: `none`,
      transform: `scale(${e2}, ${e2})`,
      children: [
        (0, D.jsx)(`path`, {
          fill: `#fff`,
          fillRule: `evenodd`,
          d: `M7 13.125a7 7 0 1 0 14 0v1.75a7 7 0 0 1-14 0v-1.75Z`,
          clipRule: `evenodd`,
          style: {
            fill: `#fff`,
            fillOpacity: 1
          }
        }),
        (0, D.jsx)(`path`, {
          stroke: `#fff`,
          strokeWidth: 0.55,
          d: `M14 19.863a6.738 6.738 0 1 0 0-13.476 6.738 6.738 0 0 0 0 13.476Z`,
          style: {
            stroke: `#fff`,
            strokeOpacity: 1
          }
        }),
        (0, D.jsx)(`path`, {
          fill: `#fff`,
          d: `m15.975 16.1-.753-1.934h-2.476l-.744 1.934h-.796l2.441-6.274h.709l2.432 6.274h-.813Zm-1.69-4.524a29.052 29.052 0 0 1-.21-.63 5.175 5.175 0 0 0-.087-.306c-.029.117-.06.236-.096.359-.03.116-.061.224-.096.323-.03.1-.056.184-.079.254l-.709 1.89h1.978l-.7-1.89Z`,
          style: {
            fill: `#fff`,
            fillOpacity: 1
          }
        })
      ]
    }),
    "b-button-right": ({ scale: e2 = 1.2 }) => (0, D.jsxs)(`svg`, {
      xmlns: `http://www.w3.org/2000/svg`,
      width: B,
      height: B,
      fill: `none`,
      transform: `scale(${e2}, ${e2})`,
      children: [
        (0, D.jsx)(`path`, {
          fill: `#fff`,
          fillRule: `evenodd`,
          d: `M7 13.125a7 7 0 1 0 14 0v1.75a7 7 0 0 1-14 0v-1.75Z`,
          clipRule: `evenodd`,
          style: {
            fill: `#fff`,
            fillOpacity: 1
          }
        }),
        (0, D.jsx)(`path`, {
          stroke: `#fff`,
          strokeWidth: 0.55,
          d: `M14 19.863a6.738 6.738 0 1 0 0-13.476 6.738 6.738 0 0 0 0 13.476Z`,
          style: {
            stroke: `#fff`,
            strokeOpacity: 1
          }
        }),
        (0, D.jsx)(`path`, {
          fill: `#fff`,
          d: `M13.876 9.853c.519 0 .954.05 1.304.148.355.1.62.263.796.49.18.228.271.531.271.91 0 .245-.047.464-.14.656a1.198 1.198 0 0 1-.402.473 1.62 1.62 0 0 1-.648.254v.043c.262.041.499.117.709.228.216.11.385.268.507.473.123.204.184.47.184.796 0 .379-.088.703-.262.971a1.663 1.663 0 0 1-.753.604c-.32.134-.706.201-1.155.201h-2.196V9.853h1.785Zm.157 2.66c.537 0 .905-.085 1.103-.254.198-.175.297-.432.297-.77 0-.344-.122-.59-.367-.735-.24-.152-.624-.228-1.155-.228h-1.033v1.986h1.155Zm-1.155.656v2.266h1.26c.555 0 .94-.108 1.155-.324.216-.216.324-.498.324-.849 0-.221-.05-.414-.149-.577-.093-.163-.254-.289-.481-.376-.222-.093-.525-.14-.91-.14h-1.199Z`,
          style: {
            fill: `#fff`,
            fillOpacity: 1
          }
        })
      ]
    }),
    "thumbstick-left": ({ scale: e2 = 1.2 }) => (0, D.jsxs)(`svg`, {
      xmlns: `http://www.w3.org/2000/svg`,
      width: B,
      height: B,
      fill: `none`,
      transform: `scale(${e2}, ${e2})`,
      children: [
        (0, D.jsx)(`path`, {
          stroke: `#fff`,
          strokeWidth: 0.5,
          d: `M14 19.95a5.95 5.95 0 1 0 0-11.9 5.95 5.95 0 0 0 0 11.9Z`,
          style: {
            stroke: `#fff`,
            strokeOpacity: 1
          }
        }),
        (0, D.jsx)(`path`, {
          fill: `#fff`,
          d: `M12.642 17.325v-6.247h.787v5.547h2.73v.7h-3.517ZM14.479 6.389a.525.525 0 0 1-.782 0l-2.235-2.495a.525.525 0 0 1 .39-.875h4.47c.454 0 .694.537.391.875L14.478 6.39Z`,
          style: {
            fill: `#fff`,
            fillOpacity: 1
          }
        }),
        (0, D.jsx)(`path`, {
          fill: `#fff`,
          fillRule: `evenodd`,
          d: `m13.045 6.711-1.093-1.22a8.75 8.75 0 1 0 4.24.036L15.11 6.733A7.352 7.352 0 0 1 14 21.35a7.35 7.35 0 0 1-.955-14.639Z`,
          clipRule: `evenodd`,
          style: {
            fill: `#fff`,
            fillOpacity: 1
          }
        })
      ]
    }),
    "thumbstick-up-left": ({ scale: e2 = 1.2 }) => (0, D.jsxs)(`svg`, {
      xmlns: `http://www.w3.org/2000/svg`,
      width: B,
      height: B,
      fill: `none`,
      transform: `scale(${e2}, ${e2})`,
      children: [
        (0, D.jsx)(`path`, {
          stroke: `#fff`,
          strokeWidth: 1.5,
          d: `M14 22.05a8.05 8.05 0 1 0 0-16.1 8.05 8.05 0 0 0 0 16.1Z`,
          style: {
            stroke: `#fff`,
            strokeOpacity: 1
          }
        }),
        (0, D.jsx)(`path`, {
          stroke: `#fff`,
          strokeWidth: 0.75,
          d: `M14 19.95a5.95 5.95 0 1 0 0-11.9 5.95 5.95 0 0 0 0 11.9Z`,
          style: {
            stroke: `#fff`,
            strokeOpacity: 1
          }
        }),
        (0, D.jsx)(`path`, {
          fill: `#fff`,
          d: `M12.642 17.325v-6.248h.787v5.548h2.73v.7h-3.517ZM13.697.611a.525.525 0 0 1 .782 0l2.234 2.495a.525.525 0 0 1-.39.875h-4.47a.525.525 0 0 1-.391-.875L13.697.61Z`,
          style: {
            fill: `#fff`,
            fillOpacity: 1
          }
        })
      ]
    }),
    "thumbstick-down-left": ({ scale: e2 = 1.2 }) => (0, D.jsxs)(`svg`, {
      xmlns: `http://www.w3.org/2000/svg`,
      width: B,
      height: B,
      fill: `none`,
      transform: `scale(${e2}, ${e2})`,
      children: [
        (0, D.jsx)(`path`, {
          stroke: `#fff`,
          strokeWidth: 1.5,
          d: `M14 22.05a8.05 8.05 0 1 0 0-16.1 8.05 8.05 0 0 0 0 16.1Z`,
          style: {
            stroke: `#fff`,
            strokeOpacity: 1
          }
        }),
        (0, D.jsx)(`path`, {
          stroke: `#fff`,
          strokeWidth: 0.75,
          d: `M14 19.95a5.95 5.95 0 1 0 0-11.9 5.95 5.95 0 0 0 0 11.9Z`,
          style: {
            stroke: `#fff`,
            strokeOpacity: 1
          }
        }),
        (0, D.jsx)(`path`, {
          fill: `#fff`,
          d: `M12.642 17.325v-6.248h.787v5.548h2.73v.7h-3.517ZM14.479 27.389a.525.525 0 0 1-.782 0l-2.235-2.495a.525.525 0 0 1 .39-.875h4.47c.454 0 .694.537.391.875l-2.235 2.495Z`,
          style: {
            fill: `#fff`,
            fillOpacity: 1
          }
        })
      ]
    }),
    "thumbstick-right-left": ({ scale: e2 = 1.2 }) => (0, D.jsxs)(`svg`, {
      xmlns: `http://www.w3.org/2000/svg`,
      width: B,
      height: B,
      fill: `none`,
      transform: `scale(${e2}, ${e2})`,
      children: [
        (0, D.jsx)(`path`, {
          stroke: `#fff`,
          strokeWidth: 1.5,
          d: `M14 22.05a8.05 8.05 0 1 0 0-16.1 8.05 8.05 0 0 0 0 16.1Z`,
          style: {
            stroke: `#fff`,
            strokeOpacity: 1
          }
        }),
        (0, D.jsx)(`path`, {
          stroke: `#fff`,
          strokeWidth: 0.75,
          d: `M14 19.95a5.95 5.95 0 1 0 0-11.9 5.95 5.95 0 0 0 0 11.9Z`,
          style: {
            stroke: `#fff`,
            strokeOpacity: 1
          }
        }),
        (0, D.jsx)(`path`, {
          fill: `#fff`,
          d: `M12.642 17.325v-6.248h.787v5.548h2.73v.7h-3.517ZM27.389 13.521a.525.525 0 0 1 0 .782l-2.495 2.235a.525.525 0 0 1-.875-.39v-4.47c0-.454.537-.694.875-.391l2.495 2.234Z`,
          style: {
            fill: `#fff`,
            fillOpacity: 1
          }
        })
      ]
    }),
    "thumbstick-left-left": ({ scale: e2 = 1.2 }) => (0, D.jsxs)(`svg`, {
      xmlns: `http://www.w3.org/2000/svg`,
      width: B,
      height: B,
      fill: `none`,
      transform: `scale(${e2}, ${e2})`,
      children: [
        (0, D.jsx)(`path`, {
          stroke: `#fff`,
          strokeWidth: 1.5,
          d: `M14 22.05a8.05 8.05 0 1 0 0-16.1 8.05 8.05 0 0 0 0 16.1Z`,
          style: {
            stroke: `#fff`,
            strokeOpacity: 1
          }
        }),
        (0, D.jsx)(`path`, {
          stroke: `#fff`,
          strokeWidth: 0.75,
          d: `M14 19.95a5.95 5.95 0 1 0 0-11.9 5.95 5.95 0 0 0 0 11.9Z`,
          style: {
            stroke: `#fff`,
            strokeOpacity: 1
          }
        }),
        (0, D.jsx)(`path`, {
          fill: `#fff`,
          d: `M12.642 17.325v-6.248h.787v5.548h2.73v.7h-3.517ZM.611 14.303a.525.525 0 0 1 0-.782l2.495-2.234a.525.525 0 0 1 .875.39v4.47a.525.525 0 0 1-.875.391L.61 14.303Z`,
          style: {
            fill: `#fff`,
            fillOpacity: 1
          }
        })
      ]
    }),
    "pose-left": () => (0, D.jsx)(vc, {
      icon: Rc,
      $reverse: true
    }),
    "pinch-left": () => (0, D.jsx)(vc, {
      icon: Kc,
      $reverse: true
    }),
    "thumbstick-right": ({ scale: e2 = 1.2 }) => (0, D.jsxs)(`svg`, {
      xmlns: `http://www.w3.org/2000/svg`,
      width: B,
      height: B,
      fill: `none`,
      transform: `scale(${e2}, ${e2})`,
      children: [
        (0, D.jsx)(`path`, {
          stroke: `#fff`,
          strokeWidth: 0.7,
          d: `M14 19.95a5.95 5.95 0 1 0 0-11.9 5.95 5.95 0 0 0 0 11.9Z`,
          style: {
            stroke: `#fff`,
            strokeOpacity: 1
          }
        }),
        (0, D.jsx)(`path`, {
          fill: `#fff`,
          d: `M13.938 11.077c.52 0 .945.068 1.278.202.338.128.59.323.752.586.164.262.245.592.245.989 0 .332-.06.61-.183.83-.123.223-.28.4-.473.535a2.61 2.61 0 0 1-.595.306l1.715 2.8h-.919l-1.513-2.581h-1.243v2.58h-.787v-6.247h1.723Zm-.043.683h-.893v2.319h.936c.339 0 .616-.044.832-.132a.956.956 0 0 0 .472-.402c.105-.175.158-.394.158-.656 0-.274-.056-.493-.167-.657a.905.905 0 0 0-.49-.358c-.221-.076-.504-.114-.848-.114ZM14.479 6.389a.525.525 0 0 1-.782 0l-2.235-2.495a.525.525 0 0 1 .39-.875h4.47c.454 0 .694.537.391.875L14.478 6.39Z`,
          style: {
            fill: `#fff`,
            fillOpacity: 1
          }
        }),
        (0, D.jsx)(`path`, {
          fill: `#fff`,
          fillRule: `evenodd`,
          d: `m13.045 6.711-1.093-1.22a8.75 8.75 0 1 0 4.24.036L15.11 6.733A7.352 7.352 0 0 1 14 21.35a7.35 7.35 0 0 1-.955-14.639Z`,
          clipRule: `evenodd`,
          style: {
            fill: `#fff`,
            fillOpacity: 1
          }
        })
      ]
    }),
    "thumbstick-up-right": ({ scale: e2 = 1.2 }) => (0, D.jsxs)(`svg`, {
      xmlns: `http://www.w3.org/2000/svg`,
      width: B,
      height: B,
      fill: `none`,
      transform: `scale(${e2}, ${e2})`,
      children: [
        (0, D.jsx)(`path`, {
          stroke: `#fff`,
          strokeWidth: 1.5,
          d: `M14 22.05a8.05 8.05 0 1 0 0-16.1 8.05 8.05 0 0 0 0 16.1Z`,
          style: {
            stroke: `#fff`,
            strokeOpacity: 1
          }
        }),
        (0, D.jsx)(`path`, {
          stroke: `#fff`,
          strokeWidth: 0.75,
          d: `M14 19.95a5.95 5.95 0 1 0 0-11.9 5.95 5.95 0 0 0 0 11.9Z`,
          style: {
            stroke: `#fff`,
            strokeOpacity: 1
          }
        }),
        (0, D.jsx)(`path`, {
          fill: `#fff`,
          d: `M13.938 11.077c.52 0 .945.068 1.278.202.338.128.59.323.752.586.164.262.245.592.245.989 0 .332-.06.61-.183.83-.123.223-.28.4-.473.535a2.61 2.61 0 0 1-.595.306l1.715 2.8h-.919l-1.513-2.581h-1.243v2.58h-.787v-6.247h1.723Zm-.043.683h-.893v2.319h.936c.339 0 .616-.044.832-.132a.956.956 0 0 0 .472-.402c.105-.175.158-.394.158-.656 0-.274-.056-.493-.167-.657a.905.905 0 0 0-.49-.358c-.221-.076-.504-.114-.848-.114ZM13.697.611a.525.525 0 0 1 .782 0l2.234 2.495a.525.525 0 0 1-.39.875h-4.47a.525.525 0 0 1-.391-.875L13.697.61Z`,
          style: {
            fill: `#fff`,
            fillOpacity: 1
          }
        })
      ]
    }),
    "thumbstick-down-right": ({ scale: e2 = 1.2 }) => (0, D.jsxs)(`svg`, {
      xmlns: `http://www.w3.org/2000/svg`,
      width: B,
      height: B,
      fill: `none`,
      transform: `scale(${e2}, ${e2})`,
      children: [
        (0, D.jsx)(`path`, {
          stroke: `#fff`,
          strokeWidth: 1.5,
          d: `M14 22.05a8.05 8.05 0 1 0 0-16.1 8.05 8.05 0 0 0 0 16.1Z`,
          style: {
            stroke: `#fff`,
            strokeOpacity: 1
          }
        }),
        (0, D.jsx)(`path`, {
          stroke: `#fff`,
          strokeWidth: 0.75,
          d: `M14 19.95a5.95 5.95 0 1 0 0-11.9 5.95 5.95 0 0 0 0 11.9Z`,
          style: {
            stroke: `#fff`,
            strokeOpacity: 1
          }
        }),
        (0, D.jsx)(`path`, {
          fill: `#fff`,
          d: `M13.938 11.077c.52 0 .945.068 1.278.202.338.128.59.323.752.586.164.262.245.592.245.989 0 .332-.06.61-.183.83-.123.223-.28.4-.473.535a2.61 2.61 0 0 1-.595.306l1.715 2.8h-.919l-1.513-2.581h-1.243v2.58h-.787v-6.247h1.723Zm-.043.683h-.893v2.319h.936c.339 0 .616-.044.832-.132a.956.956 0 0 0 .472-.402c.105-.175.158-.394.158-.656 0-.274-.056-.493-.167-.657a.905.905 0 0 0-.49-.358c-.221-.076-.504-.114-.848-.114ZM14.479 27.389a.525.525 0 0 1-.782 0l-2.235-2.495a.525.525 0 0 1 .39-.875h4.47c.454 0 .694.537.391.875l-2.235 2.495Z`,
          style: {
            fill: `#fff`,
            fillOpacity: 1
          }
        })
      ]
    }),
    "thumbstick-right-right": ({ scale: e2 = 1.2 }) => (0, D.jsxs)(`svg`, {
      xmlns: `http://www.w3.org/2000/svg`,
      width: B,
      height: B,
      fill: `none`,
      transform: `scale(${e2}, ${e2})`,
      children: [
        (0, D.jsx)(`path`, {
          stroke: `#fff`,
          strokeWidth: 1.5,
          d: `M14 22.05a8.05 8.05 0 1 0 0-16.1 8.05 8.05 0 0 0 0 16.1Z`,
          style: {
            stroke: `#fff`,
            strokeOpacity: 1
          }
        }),
        (0, D.jsx)(`path`, {
          stroke: `#fff`,
          strokeWidth: 0.75,
          d: `M14 19.95a5.95 5.95 0 1 0 0-11.9 5.95 5.95 0 0 0 0 11.9Z`,
          style: {
            stroke: `#fff`,
            strokeOpacity: 1
          }
        }),
        (0, D.jsx)(`path`, {
          fill: `#fff`,
          d: `M13.938 11.077c.52 0 .945.068 1.278.202.338.128.59.323.752.586.164.262.245.592.245.989 0 .332-.06.61-.183.83-.123.223-.28.4-.473.535a2.61 2.61 0 0 1-.595.306l1.715 2.8h-.919l-1.513-2.581h-1.243v2.58h-.787v-6.247h1.723Zm-.043.683h-.893v2.319h.936c.339 0 .616-.044.832-.132a.956.956 0 0 0 .472-.402c.105-.175.158-.394.158-.656 0-.274-.056-.493-.167-.657a.905.905 0 0 0-.49-.358c-.221-.076-.504-.114-.848-.114ZM27.389 13.521a.525.525 0 0 1 0 .782l-2.495 2.235a.525.525 0 0 1-.875-.39v-4.47c0-.454.537-.694.875-.391l2.495 2.234Z`,
          style: {
            fill: `#fff`,
            fillOpacity: 1
          }
        })
      ]
    }),
    "thumbstick-left-right": ({ scale: e2 = 1.2 }) => (0, D.jsxs)(`svg`, {
      xmlns: `http://www.w3.org/2000/svg`,
      width: B,
      height: B,
      fill: `none`,
      transform: `scale(${e2}, ${e2})`,
      children: [
        (0, D.jsx)(`path`, {
          stroke: `#fff`,
          strokeWidth: 1.5,
          d: `M14 22.05a8.05 8.05 0 1 0 0-16.1 8.05 8.05 0 0 0 0 16.1Z`,
          style: {
            stroke: `#fff`,
            strokeOpacity: 1
          }
        }),
        (0, D.jsx)(`path`, {
          stroke: `#fff`,
          strokeWidth: 0.75,
          d: `M14 19.95a5.95 5.95 0 1 0 0-11.9 5.95 5.95 0 0 0 0 11.9Z`,
          style: {
            stroke: `#fff`,
            strokeOpacity: 1
          }
        }),
        (0, D.jsx)(`path`, {
          fill: `#fff`,
          d: `M13.938 11.077c.52 0 .945.068 1.278.202.338.128.59.323.752.586.164.262.245.592.245.989 0 .332-.06.61-.183.83-.123.223-.28.4-.473.535a2.61 2.61 0 0 1-.595.306l1.715 2.8h-.919l-1.513-2.581h-1.243v2.58h-.787v-6.247h1.723Zm-.043.683h-.893v2.319h.936c.339 0 .616-.044.832-.132a.956.956 0 0 0 .472-.402c.105-.175.158-.394.158-.656 0-.274-.056-.493-.167-.657a.905.905 0 0 0-.49-.358c-.221-.076-.504-.114-.848-.114ZM.611 14.303a.525.525 0 0 1 0-.782l2.495-2.234a.525.525 0 0 1 .875.39v4.47a.525.525 0 0 1-.875.391L.61 14.303Z`,
          style: {
            fill: `#fff`,
            fillOpacity: 1
          }
        })
      ]
    }),
    "trigger-left": ({ scale: e2 = 1.2 }) => (0, D.jsxs)(`svg`, {
      xmlns: `http://www.w3.org/2000/svg`,
      width: B,
      height: B,
      fill: `none`,
      transform: `scale(${e2}, ${e2})`,
      children: [
        (0, D.jsx)(`path`, {
          stroke: `#fff`,
          strokeWidth: 0.7,
          d: `M14 20.212a7.612 7.612 0 1 0 0-15.224 7.612 7.612 0 0 0 0 15.224Z`,
          style: {
            stroke: `#fff`,
            strokeOpacity: 1
          }
        }),
        (0, D.jsx)(`path`, {
          fill: `#fff`,
          d: `M10.209 15.662V9.415h.787v5.548h2.73v.7H10.21Zm6.395 0h-.787v-5.556h-1.952v-.691h4.682v.691h-1.943v5.556Z`,
          style: {
            fill: `#fff`,
            fillOpacity: 1
          }
        }),
        (0, D.jsx)(`path`, {
          fill: `#fff`,
          fillRule: `evenodd`,
          d: `M21.235 17.5a8.31 8.31 0 0 1-7.205 4.165A8.31 8.31 0 0 1 6.825 17.5c.823 3.4 3.737 5.915 7.205 5.915 3.469 0 6.382-2.514 7.205-5.915Z`,
          clipRule: `evenodd`,
          style: {
            fill: `#fff`,
            fillOpacity: 1
          }
        })
      ]
    }),
    "trigger-right": ({ scale: e2 = 1.2 }) => (0, D.jsxs)(`svg`, {
      xmlns: `http://www.w3.org/2000/svg`,
      width: B,
      height: B,
      fill: `none`,
      transform: `scale(${e2}, ${e2})`,
      children: [
        (0, D.jsx)(`path`, {
          stroke: `#fff`,
          strokeWidth: 0.7,
          d: `M14 20.212a7.612 7.612 0 1 0 0-15.224 7.612 7.612 0 0 0 0 15.224Z`,
          style: {
            stroke: `#fff`,
            strokeOpacity: 1
          }
        }),
        (0, D.jsx)(`path`, {
          fill: `#fff`,
          d: `M11.42 9.415c.52 0 .945.067 1.277.201.339.129.59.324.753.587.163.262.245.592.245.988 0 .333-.061.61-.184.832-.122.221-.28.4-.472.533-.187.129-.385.23-.595.307l1.715 2.8h-.92l-1.513-2.582h-1.242v2.582h-.788V9.415h1.724Zm-.044.683h-.892v2.318h.936c.338 0 .615-.043.831-.131a.956.956 0 0 0 .473-.402c.105-.175.157-.394.157-.657 0-.274-.055-.493-.166-.656a.905.905 0 0 0-.49-.359c-.222-.075-.505-.114-.849-.114Zm5.74 5.564h-.787v-5.556h-1.951v-.691h4.681v.691h-1.942v5.556Z`,
          style: {
            fill: `#fff`,
            fillOpacity: 1
          }
        }),
        (0, D.jsx)(`path`, {
          fill: `#fff`,
          fillRule: `evenodd`,
          d: `M21.235 17.5a8.31 8.31 0 0 1-7.205 4.165A8.31 8.31 0 0 1 6.825 17.5c.823 3.4 3.737 5.915 7.205 5.915 3.469 0 6.382-2.514 7.205-5.915Z`,
          clipRule: `evenodd`,
          style: {
            fill: `#fff`,
            fillOpacity: 1
          }
        })
      ]
    }),
    "squeeze-left": ({ scale: e2 = 1.2 }) => (0, D.jsxs)(`svg`, {
      xmlns: `http://www.w3.org/2000/svg`,
      width: B,
      height: B,
      fill: `none`,
      transform: `scale(${e2}, ${e2})`,
      children: [
        (0, D.jsx)(`path`, {
          fill: `#fff`,
          fillRule: `evenodd`,
          d: `M7.525 7.875c-2.283 1.22-3.82 3.507-3.82 6.125s1.537 4.904 3.82 6.125C4.405 19.425 2.1 16.948 2.1 14s2.306-5.425 5.425-6.125Z`,
          clipRule: `evenodd`,
          style: {
            fill: `#fff`,
            fillOpacity: 1
          }
        }),
        (0, D.jsx)(`path`, {
          stroke: `#fff`,
          strokeWidth: 0.7,
          d: `M24.702 10.954a2.187 2.187 0 0 0-2.095-2.817H11.025a5.863 5.863 0 0 0 0 11.726h9.377c.966 0 1.818-.634 2.095-1.56l2.205-7.35Z`,
          style: {
            stroke: `#fff`,
            strokeOpacity: 1
          }
        }),
        (0, D.jsx)(`path`, {
          fill: `#fff`,
          d: `M10.594 17.15v-6.248h.788v5.548h2.73v.7h-3.518Zm7.13-3.299h2.162v3.063c-.338.11-.68.192-1.024.245a7.837 7.837 0 0 1-1.172.078c-.648 0-1.193-.128-1.637-.385a2.567 2.567 0 0 1-1.015-1.11c-.227-.485-.34-1.057-.34-1.716 0-.653.127-1.219.384-1.697a2.699 2.699 0 0 1 1.103-1.112c.484-.268 1.067-.402 1.75-.402.35 0 .68.032.988.096.315.064.607.155.875.271l-.297.683a4.55 4.55 0 0 0-.753-.254 3.453 3.453 0 0 0-.857-.105c-.496 0-.922.102-1.278.306a2.004 2.004 0 0 0-.813.875c-.187.374-.28.82-.28 1.34 0 .495.078.935.236 1.32.163.38.417.677.761.893.344.21.796.315 1.356.315.187 0 .35-.006.49-.018.146-.017.277-.037.394-.06.123-.024.236-.047.341-.07V14.55h-1.373v-.7Z`,
          style: {
            fill: `#fff`,
            fillOpacity: 1
          }
        })
      ]
    }),
    "squeeze-right": ({ scale: e2 = 1.2 }) => (0, D.jsxs)(`svg`, {
      xmlns: `http://www.w3.org/2000/svg`,
      width: B,
      height: B,
      fill: `none`,
      transform: `scale(${e2}, ${e2})`,
      children: [
        (0, D.jsx)(`path`, {
          fill: `#fff`,
          fillRule: `evenodd`,
          d: `M20.441 7.875c2.283 1.22 3.82 3.507 3.82 6.125s-1.537 4.904-3.82 6.125c3.12-.7 5.425-3.177 5.425-6.125s-2.305-5.425-5.425-6.125Z`,
          clipRule: `evenodd`,
          style: {
            fill: `#fff`,
            fillOpacity: 1
          }
        }),
        (0, D.jsx)(`path`, {
          stroke: `#fff`,
          strokeWidth: 0.7,
          d: `M3.264 10.954a2.187 2.187 0 0 1 2.095-2.817h11.582a5.862 5.862 0 0 1 0 11.726H7.564a2.188 2.188 0 0 1-2.095-1.56l-2.205-7.35Z`,
          style: {
            stroke: `#fff`,
            strokeOpacity: 1
          }
        }),
        (0, D.jsx)(`path`, {
          fill: `#fff`,
          d: `M9.497 10.902c.519 0 .945.068 1.277.202.339.128.59.323.753.586.163.262.245.592.245.989 0 .332-.062.61-.184.83-.122.223-.28.4-.472.535-.187.128-.386.23-.595.306l1.714 2.8h-.918l-1.514-2.581H8.56v2.58h-.787v-6.247h1.724Zm-.044.683H8.56v2.319h.937c.338 0 .615-.044.831-.132a.956.956 0 0 0 .473-.402c.104-.175.157-.394.157-.656 0-.274-.055-.493-.166-.657a.905.905 0 0 0-.49-.358c-.222-.076-.505-.114-.849-.114Zm6.476 2.266h2.16v3.063c-.337.11-.679.192-1.023.245a7.837 7.837 0 0 1-1.172.078c-.648 0-1.193-.128-1.637-.385a2.568 2.568 0 0 1-1.015-1.11c-.227-.485-.34-1.057-.34-1.716 0-.653.127-1.219.384-1.697a2.699 2.699 0 0 1 1.103-1.112c.484-.268 1.067-.402 1.75-.402.35 0 .68.032.988.096.315.064.607.155.875.271l-.297.683a4.551 4.551 0 0 0-.753-.254 3.453 3.453 0 0 0-.857-.105c-.496 0-.922.102-1.278.306a2.004 2.004 0 0 0-.813.875c-.187.374-.28.82-.28 1.34 0 .495.078.935.236 1.32.163.38.417.677.761.893.344.21.796.315 1.356.315.187 0 .35-.006.49-.018a5.17 5.17 0 0 0 .394-.06c.123-.024.236-.047.341-.07V14.55H15.93v-.7Z`,
          style: {
            fill: `#fff`,
            fillOpacity: 1
          }
        })
      ]
    }),
    "thumbrest-left": ({ scale: e2 = 1.2 }) => (0, D.jsxs)(`svg`, {
      xmlns: `http://www.w3.org/2000/svg`,
      width: B,
      height: B,
      fill: `none`,
      transform: `scale(${e2}, ${e2})`,
      children: [
        (0, D.jsx)(`path`, {
          stroke: `#fff`,
          d: `m20.01 15.768-4.242 4.242a5.5 5.5 0 1 1-7.778-7.778l4.242-4.242a5.5 5.5 0 1 1 7.778 7.778Z`,
          style: {
            stroke: `#fff`,
            strokeOpacity: 1
          }
        }),
        (0, D.jsx)(`path`, {
          fill: `#fff`,
          fillRule: `evenodd`,
          d: `M11.172 16.828a1 1 0 0 0 1.414 0L15.414 14l.707.707-2.828 2.828a2 2 0 1 1-2.829-2.828l.708.707a1 1 0 0 0 0 1.414ZM12.586 14l2.828-2.829a1 1 0 1 1 1.414 1.415l.708.707a2 2 0 0 0-2.829-2.829l-2.828 2.829.707.707Z`,
          clipRule: `evenodd`,
          style: {
            fill: `#fff`,
            fillOpacity: 1
          }
        }),
        (0, D.jsx)(`path`, {
          fill: `#fff`,
          fillRule: `evenodd`,
          d: `M15.414 16.828 18.243 14a3 3 0 0 0-2.289-5.117l-.869-.869a4 4 0 0 1 3.864 6.693l-2.828 2.828-.707-.707Zm-.707 2.122a4 4 0 1 1-5.657-5.657l4.243-4.243.707.707L9.757 14A3 3 0 1 0 14 18.242l.707.708Z`,
          clipRule: `evenodd`,
          style: {
            fill: `#fff`,
            fillOpacity: 1
          }
        })
      ]
    }),
    "thumbrest-right": ({ scale: e2 = 1.2 }) => (0, D.jsxs)(`svg`, {
      xmlns: `http://www.w3.org/2000/svg`,
      width: B,
      height: B,
      fill: `none`,
      transform: `scale(${e2}, ${e2})`,
      children: [
        (0, D.jsx)(`path`, {
          stroke: `#fff`,
          d: `m15.768 7.99 4.242 4.242a5.5 5.5 0 1 1-7.778 7.778L7.99 15.768a5.5 5.5 0 1 1 7.778-7.778Z`,
          style: {
            stroke: `#fff`,
            strokeOpacity: 1
          }
        }),
        (0, D.jsx)(`path`, {
          fill: `#fff`,
          fillRule: `evenodd`,
          d: `M16.828 16.828a1 1 0 0 0 0-1.414L14 12.586l.707-.707 2.828 2.828a2 2 0 1 1-2.828 2.828l.707-.707a1 1 0 0 0 1.414 0ZM14 15.414l-2.828-2.828a1 1 0 0 1 1.414-1.414l.707-.708a2 2 0 0 0-2.829 2.829l2.829 2.828.707-.707Z`,
          clipRule: `evenodd`,
          style: {
            fill: `#fff`,
            fillOpacity: 1
          }
        }),
        (0, D.jsx)(`path`, {
          fill: `#fff`,
          fillRule: `evenodd`,
          d: `M16.828 12.586 14 9.757a3 3 0 0 0-5.117 2.289l-.869.869a4 4 0 0 1 6.693-3.864l2.828 2.828-.707.707Zm2.122.707a4 4 0 1 1-5.657 5.657L9.05 14.707 9.757 14 14 18.243A3 3 0 1 0 18.243 14l.707-.707Z`,
          clipRule: `evenodd`,
          style: {
            fill: `#fff`,
            fillOpacity: 1
          }
        })
      ]
    }),
    "pose-right": () => (0, D.jsx)(vc, {
      icon: Rc,
      $reverse: false
    }),
    "pinch-right": () => (0, D.jsx)(vc, {
      icon: Kc,
      $reverse: false
    })
  }, $c = ({ buttonName: e2, handedness: t2 }) => {
    let n2 = Qc[`${e2}-${t2}`];
    return n2 ? (0, D.jsx)(n2, {}) : (0, D.jsx)(`div`, {
      style: {
        width: R.height,
        height: R.height
      }
    });
  }, el = ({ scale: e2 = 1.2 }) => (0, D.jsxs)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    width: 12,
    height: 16,
    fill: `none`,
    transform: `scale(${e2}, ${e2})`,
    children: [
      (0, D.jsx)(`g`, {
        clipPath: `url(#a)`,
        children: (0, D.jsx)(`path`, {
          stroke: `#fff`,
          d: `M.5 6.5H6m-5.5 0V5C.5 2.237 2.237.5 5 .5h1m-5.5 6V11c0 2.762 1.737 4.5 4.5 4.5h2c2.762 0 4.5-1.738 4.5-4.5V6.5M6 6.5v-6m0 6h5.5M6 .5h1c2.762 0 4.5 1.737 4.5 4.5v1.5`,
          style: {
            stroke: `#fff`,
            strokeOpacity: 1
          }
        })
      }),
      (0, D.jsx)(`path`, {
        fill: `#fff`,
        d: `M.5 6.5H6v-6H5C2.237.5.5 2.237.5 5v1.5Z`,
        style: {
          fill: `#fff`,
          fillOpacity: 1
        }
      }),
      (0, D.jsx)(`defs`, {
        children: (0, D.jsx)(`clipPath`, {
          id: `a`,
          children: (0, D.jsx)(`path`, {
            fill: `#fff`,
            d: `M0 0h12v16H0z`,
            style: {
              fill: `#fff`,
              fillOpacity: 1
            }
          })
        })
      })
    ]
  }), tl = ({ scale: e2 = 1.2 }) => (0, D.jsxs)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    width: 12,
    height: 16,
    fill: `none`,
    transform: `scale(${e2}, ${e2})`,
    children: [
      (0, D.jsx)(`g`, {
        clipPath: `url(#a)`,
        children: (0, D.jsx)(`path`, {
          stroke: `#fff`,
          d: `M.5 6.5H6m-5.5 0V5C.5 2.237 2.237.5 5 .5h1m-5.5 6V11c0 2.762 1.737 4.5 4.5 4.5h2c2.762 0 4.5-1.738 4.5-4.5V6.5M6 6.5v-6m0 6h5.5M6 .5h1c2.762 0 4.5 1.737 4.5 4.5v1.5`,
          style: {
            stroke: `#fff`,
            strokeOpacity: 1
          }
        })
      }),
      (0, D.jsx)(`path`, {
        fill: `#fff`,
        d: `M11.5 6.5H6v-6h1c2.762 0 4.5 1.737 4.5 4.5v1.5Z`,
        style: {
          fill: `#fff`,
          fillOpacity: 1
        }
      }),
      (0, D.jsx)(`defs`, {
        children: (0, D.jsx)(`clipPath`, {
          id: `a`,
          children: (0, D.jsx)(`path`, {
            fill: `#fff`,
            d: `M0 0h12v16H0z`,
            style: {
              fill: `#fff`,
              fillOpacity: 1
            }
          })
        })
      })
    ]
  }), nl = ({ size: e2 = 14, color: t2 = L.textWhite }) => (0, D.jsx)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    width: e2,
    height: e2,
    viewBox: `0 0 14 14`,
    fill: `none`,
    children: (0, D.jsx)(`path`, {
      stroke: t2,
      strokeWidth: 1.5,
      d: `M7 13.037V5.512m-.324.289 6.3-2.275m-11.952 0 6.3 2.275m.23 6.937 4.233-1.528a1.627 1.627 0 0 0 1.076-1.53V4.396c0-.685-.43-1.297-1.076-1.53L7.553 1.339a1.63 1.63 0 0 0-1.106 0L2.213 2.867a1.627 1.627 0 0 0-1.075 1.53V9.68c0 .686.43 1.298 1.075 1.53l4.234 1.529a1.63 1.63 0 0 0 1.106 0Z`,
      style: {
        stroke: t2,
        strokeOpacity: 1
      }
    })
  }), rl = ({ size: e2 = 14, color: t2 = L.textWhite }) => (0, D.jsx)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    width: e2,
    height: e2,
    viewBox: `0 0 14 14`,
    fill: `none`,
    children: (0, D.jsx)(`path`, {
      stroke: t2,
      strokeWidth: 1.2,
      d: `M7 13.037V5.512M3.937 11.9V4.375m6.126 7.525V4.375M6.675 5.8l6.3-2.275m-9.275.962 6.3-2.275M1.024 3.526l6.3 2.275M6.85 9.388l6.3-2.275m-12.302 0 6.3 2.276m-3.15-7.176 6.3 2.276m-2.746 8.248 4.234-1.527a1.627 1.627 0 0 0 1.075-1.53V4.396c0-.685-.43-1.297-1.075-1.53L7.553 1.339a1.63 1.63 0 0 0-1.106 0L2.213 2.867a1.627 1.627 0 0 0-1.076 1.53V9.68c0 .686.43 1.298 1.076 1.53l4.234 1.529a1.63 1.63 0 0 0 1.106 0Z`,
      style: {
        stroke: t2,
        strokeOpacity: 1
      }
    })
  }), il = ({ size: e2 = 14, color: t2 = L.textWhite }) => (0, D.jsx)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    width: e2,
    height: e2,
    viewBox: `0 0 14 14`,
    fill: `none`,
    children: (0, D.jsx)(`path`, {
      stroke: t2,
      strokeWidth: 1.2,
      d: `M1.225 8.225h11.55M2.1 5.075h9.8m-7 7L5.6 2.1m3.5 9.975L8.4 2.1m-5.708 9.712h8.617a1.75 1.75 0 0 0 1.696-2.183l-1.567-6.125a1.75 1.75 0 0 0-1.695-1.317H4.258c-.8 0-1.498.542-1.696 1.317L.996 9.629a1.75 1.75 0 0 0 1.696 2.183Z`,
      style: {
        stroke: t2,
        strokeOpacity: 1
      }
    })
  }), al = ({ size: e2 = 14, color: t2 = L.textWhite }) => (0, D.jsxs)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    width: e2,
    height: e2,
    viewBox: `0 0 14 14`,
    fill: `none`,
    children: [
      (0, D.jsx)(`path`, {
        fill: t2,
        d: `M10.5 8.367a1.4 1.4 0 1 0 0-2.8 1.4 1.4 0 0 0 0 2.8Z`,
        style: {
          fill: t2,
          fillOpacity: 1
        }
      }),
      (0, D.jsx)(`path`, {
        fill: t2,
        fillRule: `evenodd`,
        d: `M0 5.8A2.8 2.8 0 0 1 2.8 3h8.4A2.8 2.8 0 0 1 14 5.8v2.8a2.8 2.8 0 0 1-2.8 2.8H9.526c-.619 0-1.184-.35-1.46-.903l-.108-.214a.933.933 0 0 0-.835-.516h-.246c-.354 0-.677.2-.835.516l-.107.214a1.633 1.633 0 0 1-1.461.903H2.8A2.8 2.8 0 0 1 0 8.6V5.8Zm4.9 1.167a1.4 1.4 0 1 1-2.8 0 1.4 1.4 0 0 1 2.8 0Zm8.367-.768a.268.268 0 0 0 .076-.292 2.942 2.942 0 0 0-.187-.407l-.055-.096a3.012 3.012 0 0 0-.262-.37.27.27 0 0 0-.29-.08l-.66.21a2.279 2.279 0 0 0-.522-.302l-.148-.676a.268.268 0 0 0-.215-.211 3.062 3.062 0 0 0-1.008.001.268.268 0 0 0-.215.21l-.148.677a2.28 2.28 0 0 0-.522.301l-.66-.21a.268.268 0 0 0-.29.081c-.096.116-.184.24-.262.37l-.056.096c-.072.13-.135.265-.187.406a.268.268 0 0 0 .076.292l.513.467a2.293 2.293 0 0 0 0 .603l-.513.467a.268.268 0 0 0-.076.291c.052.141.115.276.187.407l.056.096c.078.13.166.253.262.37a.27.27 0 0 0 .29.08l.66-.211c.158.122.333.224.52.3l.149.677a.268.268 0 0 0 .215.211 3.06 3.06 0 0 0 1.007 0 .268.268 0 0 0 .216-.21l.148-.677a2.28 2.28 0 0 0 .521-.301l.66.21c.105.033.22.004.29-.08.097-.117.184-.24.263-.37l.055-.097c.073-.13.135-.265.188-.406a.268.268 0 0 0-.076-.292l-.513-.466a2.299 2.299 0 0 0 0-.602l.513-.467Z`,
        clipRule: `evenodd`,
        style: {
          fill: t2,
          fillOpacity: 1
        }
      })
    ]
  }), ol = {
    KeyA: `A`,
    KeyB: `B`,
    KeyC: `C`,
    KeyD: `D`,
    KeyE: `E`,
    KeyF: `F`,
    KeyG: `G`,
    KeyH: `H`,
    KeyI: `I`,
    KeyJ: `J`,
    KeyK: `K`,
    KeyL: `L`,
    KeyM: `M`,
    KeyN: `N`,
    KeyO: `O`,
    KeyP: `P`,
    KeyQ: `Q`,
    KeyR: `R`,
    KeyS: `S`,
    KeyT: `T`,
    KeyU: `U`,
    KeyV: `V`,
    KeyW: `W`,
    KeyX: `X`,
    KeyY: `Y`,
    KeyZ: `Z`,
    Digit0: `0`,
    Digit1: `1`,
    Digit2: `2`,
    Digit3: `3`,
    Digit4: `4`,
    Digit5: `5`,
    Digit6: `6`,
    Digit7: `7`,
    Digit8: `8`,
    Digit9: `9`,
    Tab: (0, D.jsx)(z, {
      icon: Nc
    }),
    Backspace: (0, D.jsx)(z, {
      icon: Hc
    }),
    Enter: (0, D.jsx)(z, {
      style: {
        transform: `rotate(90deg)`
      },
      icon: Yc
    }),
    ShiftLeft: (0, D.jsx)(z, {
      icon: Wc
    }),
    ShiftRight: (0, D.jsx)(z, {
      icon: Wc
    }),
    Space: ` `,
    ArrowUp: (0, D.jsx)(z, {
      icon: Pc
    }),
    ArrowDown: (0, D.jsx)(z, {
      icon: Vc
    }),
    ArrowLeft: (0, D.jsx)(z, {
      icon: Oc
    }),
    ArrowRight: (0, D.jsx)(z, {
      icon: Dc
    }),
    Semicolon: `;`,
    Equal: `=`,
    Comma: `,`,
    Minus: `-`,
    Period: `.`,
    Slash: `/`,
    Backquote: "`",
    BracketLeft: `[`,
    Backslash: `\\`,
    BracketRight: `]`,
    Quote: `'`,
    MouseLeft: (0, D.jsx)(el, {}),
    MouseRight: (0, D.jsx)(tl, {})
  }, sl = {
    left: {
      "thumbstick-up": `KeyW`,
      "thumbstick-down": `KeyS`,
      "thumbstick-left": `KeyA`,
      "thumbstick-right": `KeyD`,
      thumbstick: `KeyR`,
      "x-button": `KeyX`,
      "y-button": `KeyZ`,
      trigger: `KeyQ`,
      squeeze: `KeyE`,
      pinch: `MouseLeft`,
      pose: `KeyF`
    },
    right: {
      "thumbstick-up": `ArrowUp`,
      "thumbstick-down": `ArrowDown`,
      "thumbstick-left": `ArrowLeft`,
      "thumbstick-right": `ArrowRight`,
      thumbstick: `Slash`,
      "a-button": `Enter`,
      "b-button": `ShiftRight`,
      trigger: `MouseLeft`,
      squeeze: `MouseRight`,
      pinch: `MouseRight`,
      pose: `Backslash`
    }
  }, cl = a((e2) => ({
    keyMap: sl,
    bindKey: (t2, n2, r2 = `Unmapped`) => e2((e3) => ({
      keyMap: {
        ...e3.keyMap,
        [t2]: {
          ...e3.keyMap[t2],
          [n2]: r2
        }
      }
    }))
  })), ll = I.div`
	display: flex;
	height: ${R.height};
	align-items: center;
	justify-content: space-between;
	margin-bottom: ${R.gap};

	&:last-child {
		margin-bottom: 0;
	}
`, ul = ({ handedness: e2, actions: t2 }) => {
    let { keyMap: n2, bindKey: r2 } = cl(), [i2, a2] = (0, M.useState)(null), o2 = (e3) => {
      a2({
        action: e3
      });
    };
    return (0, M.useEffect)(() => {
      let t3 = (t4) => {
        i2 && ol[t4.code] && (r2(e2, i2.action, t4.code), a2(null));
      }, n3 = (t4) => {
        if (i2) {
          let n4 = t4.button === 0 ? `MouseLeft` : t4.button === 2 ? `MouseRight` : null;
          n4 && ol[n4] && (r2(e2, i2.action, n4), a2(null));
        }
      }, o3 = (e3) => {
        e3.preventDefault();
      };
      return window.addEventListener(`keydown`, t3), window.addEventListener(`mousedown`, n3), window.addEventListener(`contextmenu`, o3), () => {
        window.removeEventListener(`keydown`, t3), window.removeEventListener(`mousedown`, n3), window.removeEventListener(`contextmenu`, o3);
      };
    }, [
      i2
    ]), Object.keys(n2[e2]).filter((e3) => t2.includes(e3)).map((t3) => (0, D.jsxs)(ll, {
      children: [
        (0, D.jsx)($c, {
          buttonName: t3 === `up` ? `thumbstick` : t3,
          handedness: e2
        }),
        (0, D.jsxs)(gc, {
          $reverse: false,
          children: [
            (0, D.jsx)(dc, {
              $reverse: false,
              style: {
                width: `100px`,
                background: i2 && i2.action === t3 ? L.gradientLightGreyTranslucent : L.gradientGreyTranslucent
              },
              onClick: () => o2(t3),
              onContextMenu: (e3) => e3.preventDefault(),
              children: n2[e2][t3]
            }),
            (0, D.jsx)(dc, {
              style: {
                width: R.widthShort
              },
              $reverse: false,
              onClick: () => r2(e2, t3),
              onContextMenu: (e3) => e3.preventDefault(),
              children: (0, D.jsx)(ca, {
                icon: Mc
              })
            })
          ]
        })
      ]
    }, t3));
  }, dl = ({ xrController: e2, buttonId: t2, pointerLocked: n2, mappedKey: r2 }) => {
    let [i2, a2] = (0, M.useState)(false), [o2, s2] = (0, M.useState)(false), [c2, l2] = (0, M.useState)(false), [u2, d2] = (0, M.useState)(0), f2 = e2.inputSource.handedness;
    return (0, M.useEffect)(() => {
      let i3 = (n3) => {
        n3.code === r2 && (e2.updateButtonValue(t2, 1), l2(true));
      }, a3 = (n3) => {
        n3.code === r2 && (e2.updateButtonValue(t2, 0), l2(false));
      }, o3 = (n3) => {
        (r2 === `MouseLeft` && n3.button === 0 || r2 === `MouseRight` && n3.button === 2) && (e2.updateButtonValue(t2, 1), l2(true));
      }, s3 = (n3) => {
        (r2 === `MouseLeft` && n3.button === 0 || r2 === `MouseRight` && n3.button === 2) && (e2.updateButtonValue(t2, 0), l2(false));
      };
      return n2 ? r2 === `MouseLeft` || r2 === `MouseRight` ? (window.addEventListener(`mousedown`, o3), window.addEventListener(`mouseup`, s3)) : (window.addEventListener(`keydown`, i3), window.addEventListener(`keyup`, a3)) : r2 === `MouseLeft` || r2 === `MouseRight` ? (window.removeEventListener(`mousedown`, o3), window.removeEventListener(`mouseup`, s3)) : (window.removeEventListener(`keydown`, i3), window.removeEventListener(`keyup`, a3)), () => {
        r2 === `MouseLeft` || r2 === `MouseRight` ? (window.removeEventListener(`mousedown`, o3), window.removeEventListener(`mouseup`, s3)) : (window.removeEventListener(`keydown`, i3), window.removeEventListener(`keyup`, a3));
      };
    }, [
      r2,
      n2,
      t2,
      e2
    ]), (0, D.jsxs)(hc, {
      $reverse: f2 === `right`,
      children: [
        (0, D.jsx)($c, {
          buttonName: t2,
          handedness: f2
        }),
        (0, D.jsx)(gc, {
          $reverse: f2 === `right`,
          children: n2 ? (0, D.jsx)(mc, {
            $pressed: c2,
            children: ol[r2]
          }) : (0, D.jsxs)(D.Fragment, {
            children: [
              (0, D.jsx)(dc, {
                $reverse: f2 === `right`,
                style: {
                  background: o2 ? L.gradientLightGreyTranslucent : L.gradientGreyTranslucent,
                  width: R.widthLong
                },
                onClick: () => {
                  s2(true), e2.updateButtonValue(t2, 1), setTimeout(() => {
                    s2(false), e2.updateButtonValue(t2, 0);
                  }, 250);
                },
                children: `Press`
              }),
              (0, D.jsx)(dc, {
                title: `Click to toggle touch state`,
                $reverse: f2 === `right`,
                style: {
                  background: i2 ? L.gradientLightGreyTranslucent : L.gradientGreyTranslucent,
                  width: R.widthShort
                },
                onClick: () => {
                  a2(!i2), e2.updateButtonTouch(t2, !i2);
                },
                children: (0, D.jsx)(z, {
                  icon: Ec
                })
              }),
              (0, D.jsx)(_c, {
                $reverse: f2 === `right`,
                value: u2,
                onChange: (n3) => {
                  let r3 = Number(n3.target.value);
                  d2(r3), e2.updateButtonValue(t2, r3 / 100);
                },
                min: `0`,
                max: `100`
              })
            ]
          })
        })
      ]
    });
  }, fl = ({ xrController: e2, buttonId: t2, pointerLocked: n2, mappedKey: r2 }) => {
    let [i2, a2] = (0, M.useState)(false), [o2, s2] = (0, M.useState)(false), [c2, l2] = (0, M.useState)(false), [u2, d2] = (0, M.useState)(false), f2 = e2.inputSource.handedness;
    return (0, M.useEffect)(() => {
      let i3 = (n3) => {
        n3.code === r2 && (e2.updateButtonValue(t2, 1), d2(true));
      }, a3 = (n3) => {
        n3.code === r2 && (e2.updateButtonValue(t2, 0), d2(false));
      };
      return n2 ? (window.addEventListener(`keydown`, i3), window.addEventListener(`keyup`, a3)) : (window.removeEventListener(`keydown`, i3), window.removeEventListener(`keyup`, a3)), () => {
        window.removeEventListener(`keydown`, i3), window.removeEventListener(`keyup`, a3);
      };
    }, [
      r2,
      n2,
      t2,
      e2
    ]), (0, D.jsxs)(hc, {
      $reverse: f2 === `right`,
      children: [
        (0, D.jsx)($c, {
          buttonName: t2,
          handedness: f2
        }),
        (0, D.jsx)(gc, {
          $reverse: f2 === `right`,
          children: n2 ? (0, D.jsx)(mc, {
            $pressed: u2,
            children: ol[r2]
          }) : (0, D.jsxs)(D.Fragment, {
            children: [
              (0, D.jsx)(dc, {
                $reverse: f2 === `right`,
                style: {
                  background: c2 ? L.gradientLightGreyTranslucent : L.gradientGreyTranslucent,
                  width: R.widthLong
                },
                onClick: () => {
                  l2(true), e2.updateButtonValue(t2, 1), setTimeout(() => {
                    l2(false), e2.updateButtonValue(t2, 0);
                  }, 250);
                },
                children: `Press`
              }),
              (0, D.jsx)(dc, {
                title: `Click to toggle touch state`,
                $reverse: f2 === `right`,
                style: {
                  background: i2 ? L.gradientLightGreyTranslucent : L.gradientGreyTranslucent,
                  width: R.widthShort
                },
                onClick: () => {
                  a2(!i2), e2.updateButtonTouch(t2, !i2);
                },
                children: (0, D.jsx)(z, {
                  icon: Ec
                })
              }),
              (0, D.jsx)(dc, {
                $reverse: f2 === `right`,
                style: {
                  background: o2 ? L.gradientLightGreyTranslucent : L.gradientGreyTranslucent,
                  width: R.widthLong
                },
                onClick: () => {
                  s2(!o2), e2.updateButtonValue(t2, +!o2);
                },
                children: `Hold`
              })
            ]
          })
        })
      ]
    });
  }, pl = I.div`
	display: flex;
	align-items: center;
	margin-bottom: ${R.gap};
`, ml = `calc(2 * ${R.height} + ${R.gap})`, hl = I.button`
	background: ${L.gradientGreyTranslucent};
	border: none;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0;
	pointer-events: none;
	width: ${ml};
	height: ${ml};
	border-radius: 50%;
	position: relative;
	margin: 0 5px;
`, gl = I.div`
	position: absolute;
	font-size: 50px;
	display: flex;
	align-items: center;
	justify-content: center;
	color: ${L.textWhite};
	cursor: pointer;
	pointer-events: auto;
`, _l = I(dc)`
	width: ${R.widthLong};
	font-size: ${R.fontSize};

	${({ $reverse: e2 }) => e2 ? `
    &:first-child {
      border-radius: ${R.radiusLast};
    }

    &:last-child {
      border-radius: ${R.radiusFirst};
    }
  ` : `
    &:first-child {
      border-radius: ${R.radiusFirst};
    }

    &:last-child {
      border-radius: ${R.radiusLast};
    }
  `}
`, vl = ({ xrController: e2, pointerLocked: t2, buttonId: n2, mappedKeyUp: r2, mappedKeyDown: i2, mappedKeyLeft: a2, mappedKeyRight: o2, mappedKeyPressed: s2 }) => {
    let c2 = (0, M.useRef)(null), [l2, u2] = (0, M.useState)(false), [d2, f2] = (0, M.useState)(false), [p2, m2] = (0, M.useState)(false), [h2, g2] = (0, M.useState)(false), [_2, v2] = (0, M.useState)({
      x: 0,
      y: 0
    }), [y2, b2] = (0, M.useState)({
      up: false,
      down: false,
      left: false,
      right: false,
      pressed: false
    }), x2 = e2.inputSource.handedness, S2 = () => {
      if (c2.current) {
        let e3 = c2.current.getBoundingClientRect();
        v2({
          x: e3.left + e3.width / 2,
          y: e3.top + e3.height / 2
        }), u2(true);
      }
    }, C2 = (t3) => {
      if (l2 && c2.current) {
        let r3 = t3.clientX - _2.x, i3 = t3.clientY - _2.y, a3 = Math.sqrt(r3 * r3 + i3 * i3), o3, s3;
        if (a3 < 12) o3 = r3, s3 = i3;
        else {
          let e3 = Math.atan2(i3, r3);
          o3 = Math.cos(e3) * 12, s3 = Math.sin(e3) * 12;
        }
        c2.current.style.transform = `translate(${o3}px, ${s3}px)`;
        let l3 = o3 / 12, u3 = s3 / 12;
        e2.updateAxes(n2, l3, u3);
      }
    }, ee2 = () => {
      u2(false), c2.current && (c2.current.style.transform = `translate(0, 0)`, e2.updateAxes(n2, 0, 0));
    };
    return (0, M.useEffect)(() => {
      let c3 = (t3) => {
        let c4 = {
          ...y2
        };
        t3.code === r2 && (c4.up = true), t3.code === i2 && (c4.down = true), t3.code === a2 && (c4.left = true), t3.code === o2 && (c4.right = true), t3.code === s2 && (c4.pressed = true, e2.updateButtonValue(n2, 1)), b2(c4), u3(c4);
      }, l3 = (t3) => {
        let c4 = {
          ...y2
        };
        t3.code === r2 && (c4.up = false), t3.code === i2 && (c4.down = false), t3.code === a2 && (c4.left = false), t3.code === o2 && (c4.right = false), t3.code === s2 && (c4.pressed = false, e2.updateButtonValue(n2, 0)), b2(c4), u3(c4);
      }, u3 = (t3) => {
        let r3 = +!!t3.right - !!t3.left, i3 = +!!t3.down - !!t3.up, a3 = Math.sqrt(r3 * r3 + i3 * i3);
        if (a3 === 0) {
          e2.updateAxes(n2, 0, 0);
          return;
        }
        let o3 = r3 / a3, s3 = i3 / a3;
        e2.updateAxes(n2, o3, s3);
      };
      return t2 ? (window.addEventListener(`keydown`, c3), window.addEventListener(`keyup`, l3)) : (window.removeEventListener(`keydown`, c3), window.removeEventListener(`keyup`, l3)), () => {
        window.removeEventListener(`keydown`, c3), window.removeEventListener(`keyup`, l3);
      };
    }, [
      r2,
      i2,
      a2,
      o2,
      t2,
      y2
    ]), (0, M.useEffect)(() => (document.addEventListener(`mousemove`, C2), document.addEventListener(`mouseup`, ee2), () => {
      document.removeEventListener(`mousemove`, C2), document.removeEventListener(`mouseup`, ee2);
    }), [
      l2,
      _2
    ]), t2 ? (0, D.jsxs)(D.Fragment, {
      children: [
        (0, D.jsxs)(hc, {
          $reverse: x2 === `right`,
          children: [
            (0, D.jsx)($c, {
              buttonName: `thumbstick`,
              handedness: e2.inputSource.handedness
            }),
            (0, D.jsxs)(gc, {
              $reverse: x2 === `right`,
              children: [
                (0, D.jsx)(mc, {
                  $pressed: y2.up,
                  children: ol[r2]
                }),
                (0, D.jsx)(mc, {
                  $pressed: y2.pressed,
                  children: ol[s2]
                })
              ]
            })
          ]
        }),
        (0, D.jsx)(hc, {
          $reverse: x2 === `right`,
          style: x2 === `right` ? {
            marginRight: `2px`
          } : {
            marginLeft: `2px`
          },
          children: (0, D.jsxs)(gc, {
            $reverse: false,
            style: {
              margin: 0
            },
            children: [
              (0, D.jsx)(mc, {
                $pressed: y2.left,
                children: ol[a2]
              }),
              (0, D.jsx)(mc, {
                $pressed: y2.down,
                children: ol[i2]
              }),
              (0, D.jsx)(mc, {
                $pressed: y2.right,
                children: ol[o2]
              })
            ]
          })
        })
      ]
    }) : (0, D.jsx)(pl, {
      style: {
        flexDirection: e2.inputSource.handedness === `left` ? `row` : `row-reverse`,
        alignItems: `flex-start`
      },
      children: (0, D.jsxs)(D.Fragment, {
        children: [
          (0, D.jsx)($c, {
            buttonName: `thumbstick`,
            handedness: e2.inputSource.handedness
          }),
          (0, D.jsx)(hl, {
            style: {
              margin: `0 5px`
            },
            children: (0, D.jsx)(gl, {
              ref: c2,
              onMouseDown: S2,
              children: (0, D.jsx)(z, {
                icon: Xc,
                $size: 50
              })
            })
          }),
          (0, D.jsxs)(`div`, {
            style: {
              display: `flex`,
              flexDirection: `column`,
              alignItems: x2 === `right` ? `start` : `end`
            },
            children: [
              (0, D.jsx)(dc, {
                $reverse: x2 === `right`,
                style: {
                  background: h2 ? L.gradientLightGreyTranslucent : L.gradientGreyTranslucent,
                  width: `calc(${R.widthLong} + ${R.widthShort} + ${R.gap})`,
                  marginBottom: R.gap,
                  borderRadius: R.radiusSolo
                },
                onClick: () => {
                  g2(true), e2.updateButtonValue(n2, 1), setTimeout(() => {
                    g2(false), e2.updateButtonValue(n2, 0);
                  }, 250);
                },
                children: `Press`
              }),
              (0, D.jsxs)(gc, {
                $reverse: x2 === `right`,
                children: [
                  (0, D.jsx)(_l, {
                    title: `Click to toggle touch state`,
                    $reverse: e2.inputSource.handedness !== `left`,
                    style: {
                      background: d2 ? L.gradientLightGreyTranslucent : L.gradientGreyTranslucent,
                      width: R.widthShort
                    },
                    onClick: () => {
                      f2(!d2), e2.updateButtonTouch(n2, !d2);
                    },
                    children: (0, D.jsx)(z, {
                      icon: Ec
                    })
                  }),
                  (0, D.jsx)(_l, {
                    $reverse: e2.inputSource.handedness !== `left`,
                    style: {
                      background: p2 ? L.gradientLightGreyTranslucent : L.gradientGreyTranslucent,
                      width: R.widthLong
                    },
                    onClick: () => {
                      m2(!p2), e2.updateButtonValue(n2, +!p2);
                    },
                    children: `Hold`
                  })
                ]
              })
            ]
          })
        ]
      })
    });
  };
  function yl(e2, t2) {
    let n2 = 10 ** t2;
    return Math.round(e2 * n2) / n2;
  }
  var bl = I.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	margin: 0;
	font-size: 12px;
`, xl = ({ vector: e2, label: t2 = ``, icon: n2, multiplier: r2 = 1, precision: i2 = 2, onValidInput: a2 = () => {
  }, marginBottom: o2 = `0` }) => {
    let [s2, c2] = (0, M.useState)({
      x: (e2.x / r2).toFixed(i2),
      y: (e2.y / r2).toFixed(i2),
      z: (e2.z / r2).toFixed(i2)
    }), l2 = (0, M.useRef)({
      x: yl(e2.x / r2, i2),
      y: yl(e2.y / r2, i2),
      z: yl(e2.z / r2, i2)
    }), u2 = (0, M.useRef)(null), d2 = () => {
      let t3 = {
        x: yl(e2.x / r2, i2),
        y: yl(e2.y / r2, i2),
        z: yl(e2.z / r2, i2)
      }, { x: n3, y: a3, z: o3 } = l2.current;
      (t3.x !== n3 || t3.y !== a3 || t3.z !== o3) && (l2.current = t3, c2({
        x: t3.x.toFixed(i2),
        y: t3.y.toFixed(i2),
        z: t3.z.toFixed(i2)
      })), u2.current = requestAnimationFrame(d2);
    };
    (0, M.useEffect)(() => (u2.current = requestAnimationFrame(d2), () => {
      u2.current && cancelAnimationFrame(u2.current);
    }), [
      e2,
      r2,
      i2
    ]);
    let f2 = (t3) => (n3) => {
      let i3 = n3.target.value, o3 = parseFloat(i3);
      c2((e3) => ({
        ...e3,
        [t3]: i3
      })), isNaN(o3) || (l2.current[t3] = o3, e2[t3] = o3 * r2, a2());
    };
    return (0, D.jsxs)(bl, {
      style: {
        marginBottom: o2
      },
      children: [
        n2 ? (0, D.jsx)(z, {
          icon: n2,
          style: {
            marginRight: `5px`
          }
        }) : (0, D.jsx)(`span`, {
          style: {
            marginRight: `5px`
          },
          children: t2
        }),
        (0, D.jsx)(Sc, {
          children: [
            `x`,
            `y`,
            `z`
          ].map((e3) => (0, D.jsxs)(`div`, {
            style: {
              position: `relative`,
              display: `inline-block`,
              height: `25px`
            },
            children: [
              (0, D.jsx)(Cc, {
                value: s2[e3],
                onChange: f2(e3),
                className: parseFloat(s2[e3]) === l2.current[e3] ? void 0 : `invalid`
              }),
              (0, D.jsx)(wc, {
                children: e3.toUpperCase()
              })
            ]
          }, `${t2}-${e3}`))
        })
      ]
    });
  };
  function Sl(e2) {
    let t2 = /* @__PURE__ */ new Set();
    for (let n3 of e2.axes) n3 && n3.id && t2.add(n3.id);
    let n2 = e2.buttons.filter((e3) => e3 !== null).map((e3) => ({
      id: e3.id,
      type: e3.type,
      hasAxes: t2.has(e3.id)
    }));
    return n2.sort((e3, t3) => e3.hasAxes && !t3.hasAxes ? -1 : !e3.hasAxes && t3.hasAxes ? 1 : 0), n2;
  }
  var Cl = ({ controller: e2, handle: t2, handedness: n2, pointerLocked: r2 }) => {
    let { keyMap: i2 } = cl(), [a2, o2] = M.useState(e2.connected), [s2, c2] = M.useState(false), l2 = Sl(e2.gamepadConfig), u2 = l2.flatMap((e3) => e3.hasAxes ? [
      `${e3.id}-left`,
      `${e3.id}-right`,
      `${e3.id}-up`,
      `${e3.id}-down`,
      e3.id
    ] : e3.id);
    return M.useEffect(() => {
      r2 && c2(false);
    }, [
      r2
    ]), (0, D.jsxs)(yc, {
      style: n2 === `left` ? {
        left: `8px`,
        bottom: `8px`
      } : {
        right: `8px`,
        bottom: `8px`
      },
      children: [
        !r2 && (0, D.jsx)(D.Fragment, {
          children: (0, D.jsxs)(`div`, {
            style: {
              display: `flex`,
              flexDirection: `row`,
              justifyContent: `space-between`,
              alignItems: `center`
            },
            children: [
              (0, D.jsxs)(`div`, {
                style: {
                  fontSize: `13px`,
                  display: `flex`,
                  flexDirection: `row`,
                  alignItems: `center`
                },
                children: [
                  (0, D.jsx)(z, {
                    icon: kc,
                    style: {
                      marginRight: `5px`
                    }
                  }),
                  `Controller\xA0`,
                  (0, D.jsxs)(`span`, {
                    style: {
                      fontWeight: `bold`
                    },
                    children: [
                      `[`,
                      n2 === `left` ? `L` : `R`,
                      `]`
                    ]
                  })
                ]
              }),
              (0, D.jsx)(`div`, {
                style: {
                  display: `flex`,
                  flexDirection: `row`,
                  gap: `1px`
                },
                children: a2 ? (0, D.jsxs)(D.Fragment, {
                  children: [
                    (0, D.jsx)(xc, {
                      title: `Click to ${s2 ? `close` : `change`} key bindings`,
                      onClick: () => {
                        c2(!s2);
                      },
                      children: (0, D.jsx)(z, {
                        icon: Bc
                      })
                    }),
                    (0, D.jsx)(xc, {
                      title: `Click to disconnect ${n2} controller`,
                      $isRed: true,
                      onClick: () => {
                        e2.connected = false, o2(false);
                      },
                      children: (0, D.jsx)(z, {
                        icon: Xc
                      })
                    })
                  ]
                }) : (0, D.jsx)(xc, {
                  title: `Click to reconnect ${n2} controller`,
                  onClick: () => {
                    e2.connected = true, o2(true);
                  },
                  style: {
                    marginLeft: `5px`
                  },
                  children: (0, D.jsx)(z, {
                    icon: jc
                  })
                })
              })
            ]
          })
        }),
        a2 && !r2 && (0, D.jsxs)(D.Fragment, {
          children: [
            !s2 && (0, D.jsxs)(D.Fragment, {
              children: [
                (0, D.jsx)(bc, {}),
                (0, D.jsx)(xl, {
                  vector: t2.position,
                  label: `Position`,
                  marginBottom: R.gap
                }),
                (0, D.jsx)(xl, {
                  vector: t2.rotation,
                  label: `Rotation`
                })
              ]
            }),
            (0, D.jsx)(bc, {})
          ]
        }),
        a2 && (s2 ? (0, D.jsx)(ul, {
          handedness: n2,
          actions: u2
        }) : l2.map((t3) => {
          let a3 = i2[n2];
          return t3.hasAxes ? (0, D.jsx)(vl, {
            xrController: e2,
            pointerLocked: r2,
            buttonId: t3.id,
            mappedKeyUp: i2[n2][`${t3.id}-up`],
            mappedKeyDown: a3[`${t3.id}-down`],
            mappedKeyLeft: a3[`${t3.id}-left`],
            mappedKeyRight: a3[`${t3.id}-right`],
            mappedKeyPressed: a3[t3.id]
          }, t3.id) : t3.type === `analog` ? (0, D.jsx)(dl, {
            xrController: e2,
            buttonId: t3.id,
            mappedKey: a3[t3.id],
            pointerLocked: r2
          }, t3.id) : (0, D.jsx)(fl, {
            xrController: e2,
            buttonId: t3.id,
            mappedKey: a3[t3.id],
            pointerLocked: r2
          }, t3.id);
        }))
      ]
    }, n2);
  }, wl = `calc(${R.widthLong} + ${R.widthShort} + ${R.gap})`, Tl = ({ hand: e2, pointerLocked: t2, mappedKey: n2 }) => {
    let [r2, i2] = (0, M.useState)(false), [a2, o2] = (0, M.useState)(false), [s2, c2] = (0, M.useState)(0), l2 = e2.inputSource.handedness;
    return (0, M.useEffect)(() => {
      let r3 = (t3) => {
        t3.code === n2 && (e2.updatePinchValue(1), o2(true));
      }, i3 = (t3) => {
        t3.code === n2 && (e2.updatePinchValue(0), o2(false));
      }, a3 = (t3) => {
        (n2 === `MouseLeft` && t3.button === 0 || n2 === `MouseRight` && t3.button === 2) && (e2.updatePinchValue(1), o2(true));
      }, s3 = (t3) => {
        (n2 === `MouseLeft` && t3.button === 0 || n2 === `MouseRight` && t3.button === 2) && (e2.updatePinchValue(0), o2(false));
      };
      return t2 ? n2 === `MouseLeft` || n2 === `MouseRight` ? (window.addEventListener(`mousedown`, a3), window.addEventListener(`mouseup`, s3)) : (window.addEventListener(`keydown`, r3), window.addEventListener(`keyup`, i3)) : n2 === `MouseLeft` || n2 === `MouseRight` ? (window.removeEventListener(`mousedown`, a3), window.removeEventListener(`mouseup`, s3)) : (window.removeEventListener(`keydown`, r3), window.removeEventListener(`keyup`, i3)), () => {
        n2 === `MouseLeft` || n2 === `MouseRight` ? (window.removeEventListener(`mousedown`, a3), window.removeEventListener(`mouseup`, s3)) : (window.removeEventListener(`keydown`, r3), window.removeEventListener(`keyup`, i3));
      };
    }, [
      n2,
      t2,
      e2
    ]), (0, D.jsxs)(hc, {
      $reverse: l2 === `right`,
      children: [
        (0, D.jsx)(vc, {
          icon: Kc,
          $reverse: l2 === `left`
        }),
        (0, D.jsx)(gc, {
          $reverse: l2 === `right`,
          children: t2 ? (0, D.jsx)(mc, {
            $pressed: a2,
            children: ol[n2]
          }) : (0, D.jsxs)(D.Fragment, {
            children: [
              (0, D.jsx)(dc, {
                $reverse: l2 === `right`,
                style: {
                  background: r2 ? L.gradientLightGreyTranslucent : L.gradientGreyTranslucent,
                  width: R.widthLong
                },
                onClick: () => {
                  i2(true), e2.updatePinchValue(1), setTimeout(() => {
                    i2(false), e2.updatePinchValue(0);
                  }, 250);
                },
                children: `Pinch`
              }),
              (0, D.jsx)(_c, {
                $reverse: l2 === `right`,
                value: s2,
                onChange: (t3) => {
                  let n3 = Number(t3.target.value);
                  c2(n3), e2.updatePinchValue(n3 / 100);
                },
                style: {
                  width: wl
                },
                min: `0`,
                max: `100`
              })
            ]
          })
        })
      ]
    });
  }, El = [
    `default`,
    `point`
  ], Dl = `calc(2 * ${R.widthLong} - ${R.widthShort})`, Ol = ({ hand: e2, pointerLocked: t2, mappedKey: n2 }) => {
    let [r2, i2] = (0, M.useState)(e2.poseId), [a2, o2] = (0, M.useState)(false), s2 = e2.inputSource.handedness, c2 = (t3) => {
      let n3 = (El.indexOf(e2.poseId) + El.length + t3) % El.length;
      i2(El[n3]), e2.poseId = El[n3];
    }, l2 = s2 === `right`;
    return (0, M.useEffect)(() => {
      let e3 = (e4) => {
        e4.code === n2 && (c2(1), o2(true));
      }, r3 = (e4) => {
        e4.code === n2 && o2(false);
      };
      return t2 ? (window.addEventListener(`keydown`, e3), window.addEventListener(`keyup`, r3)) : (window.removeEventListener(`keydown`, e3), window.removeEventListener(`keyup`, r3)), () => {
        window.removeEventListener(`keydown`, e3), window.removeEventListener(`keyup`, r3);
      };
    }, [
      n2,
      t2,
      e2
    ]), (0, D.jsxs)(hc, {
      $reverse: l2,
      children: [
        (0, D.jsx)(vc, {
          icon: Rc,
          $reverse: s2 === `left`
        }),
        (0, D.jsx)(gc, {
          $reverse: l2,
          children: t2 ? (0, D.jsx)(mc, {
            $pressed: a2,
            children: ol[n2]
          }) : (0, D.jsxs)(D.Fragment, {
            children: [
              (0, D.jsx)(dc, {
                $reverse: l2,
                style: {
                  width: R.widthShort
                },
                onClick: () => {
                  c2(l2 ? 1 : -1);
                },
                children: (0, D.jsx)(z, {
                  icon: l2 ? qc : Gc
                })
              }),
              (0, D.jsxs)(dc, {
                $reverse: l2,
                style: {
                  width: Dl
                },
                disabled: true,
                children: [
                  `Pose: `,
                  r2
                ]
              }),
              (0, D.jsx)(dc, {
                $reverse: l2,
                style: {
                  width: R.widthShort
                },
                onClick: () => {
                  c2(l2 ? -1 : 1);
                },
                children: (0, D.jsx)(z, {
                  icon: l2 ? Gc : qc
                })
              })
            ]
          })
        })
      ]
    });
  }, kl = ({ hand: e2, handle: t2, handedness: n2, pointerLocked: r2 }) => {
    let { keyMap: i2 } = cl(), [a2, o2] = M.useState(e2.connected), [s2, c2] = M.useState(false);
    return M.useEffect(() => {
      r2 && c2(false);
    }, [
      r2
    ]), (0, D.jsxs)(yc, {
      style: n2 === `left` ? {
        left: `8px`,
        bottom: `8px`
      } : {
        right: `8px`,
        bottom: `8px`
      },
      children: [
        !r2 && (0, D.jsx)(D.Fragment, {
          children: (0, D.jsxs)(`div`, {
            style: {
              display: `flex`,
              flexDirection: `row`,
              justifyContent: `space-between`,
              alignItems: `center`
            },
            children: [
              (0, D.jsxs)(`div`, {
                style: {
                  fontSize: `13px`,
                  display: `flex`,
                  flexDirection: `row`,
                  alignItems: `center`
                },
                children: [
                  (0, D.jsx)(z, {
                    icon: Ac,
                    $reverse: n2 === `left`,
                    style: {
                      marginRight: `5px`
                    }
                  }),
                  `Hand\xA0`,
                  (0, D.jsxs)(`span`, {
                    style: {
                      fontWeight: `bold`
                    },
                    children: [
                      `[`,
                      n2 === `left` ? `L` : `R`,
                      `]`
                    ]
                  })
                ]
              }),
              (0, D.jsx)(`div`, {
                style: {
                  display: `flex`,
                  flexDirection: `row`,
                  gap: `1px`
                },
                children: a2 ? (0, D.jsxs)(D.Fragment, {
                  children: [
                    (0, D.jsx)(xc, {
                      title: `Click to ${s2 ? `close` : `change`} key bindings`,
                      onClick: () => {
                        c2(!s2);
                      },
                      children: (0, D.jsx)(z, {
                        icon: Bc
                      })
                    }),
                    (0, D.jsx)(xc, {
                      title: `Click to disconnect ${n2} controller`,
                      $isRed: true,
                      onClick: () => {
                        e2.connected = false, o2(false);
                      },
                      children: (0, D.jsx)(z, {
                        icon: Xc
                      })
                    })
                  ]
                }) : (0, D.jsx)(xc, {
                  title: `Click to reconnect ${n2} controller`,
                  onClick: () => {
                    e2.connected = true, o2(true);
                  },
                  style: {
                    marginLeft: `5px`
                  },
                  children: (0, D.jsx)(z, {
                    icon: jc
                  })
                })
              })
            ]
          })
        }),
        a2 && !r2 && (0, D.jsxs)(D.Fragment, {
          children: [
            !s2 && (0, D.jsxs)(D.Fragment, {
              children: [
                (0, D.jsx)(bc, {}),
                (0, D.jsx)(xl, {
                  vector: t2.position,
                  label: `Position`,
                  marginBottom: R.gap
                }),
                (0, D.jsx)(xl, {
                  vector: t2.rotation,
                  label: `Rotation`
                })
              ]
            }),
            (0, D.jsx)(bc, {})
          ]
        }),
        a2 && (s2 ? (0, D.jsx)(ul, {
          handedness: n2,
          actions: [
            `pose`,
            `pinch`
          ]
        }) : (0, D.jsxs)(D.Fragment, {
          children: [
            (0, D.jsx)(Ol, {
              hand: e2,
              pointerLocked: r2,
              mappedKey: i2[n2].pose
            }),
            (0, D.jsx)(Tl, {
              hand: e2,
              pointerLocked: r2,
              mappedKey: i2[n2].pinch
            })
          ]
        }))
      ]
    }, n2);
  }, Al = a((e2) => ({
    inputMode: `controller`,
    setInputMode: (t2) => e2(() => ({
      inputMode: t2
    }))
  })), jl = ({ xrDevice: e2, inputLayer: t2, pointerLocked: n2 }) => {
    let { inputMode: r2 } = Al();
    return (0, D.jsx)(D.Fragment, {
      children: r2 === `controller` ? Object.entries(e2.controllers).map(([e3, r3]) => (0, D.jsx)(Cl, {
        controller: r3,
        handle: t2.transformHandles.get(e3),
        handedness: e3,
        pointerLocked: n2
      }, `controller-${e3}`)) : Object.entries(e2.hands).map(([e3, r3]) => (0, D.jsx)(kl, {
        hand: r3,
        handle: t2.transformHandles.get(e3),
        handedness: e3,
        pointerLocked: n2
      }, `hand-${e3}`))
    });
  }, Ml = I.td`
	text-align: right;
	color: ${L.textWhite};
	padding: 0 8px 0 0;
	font-weight: bold;
`, Nl = I.td`
	text-align: left;
	color: ${L.textGrey};
	padding: 0;
`, Pl = [
    `meeting_room`,
    `living_room`,
    `music_room`,
    `office_large`,
    `office_small`
  ], Fl = a((e2) => ({
    infoPanelOpen: false,
    envDropDownOpen: false,
    setInfoPanelOpen: (t2) => e2(() => ({
      infoPanelOpen: t2
    })),
    setEnvDropDownOpen: (t2) => e2(() => ({
      envDropDownOpen: t2
    }))
  }));
  function Il(e2) {
    return e2.split(`_`).map((e3) => e3.charAt(0).toUpperCase() + e3.slice(1)).join(` `);
  }
  var Ll = ({ xrDevice: e2, inputLayer: t2 }) => {
    var _a2, _b, _c2;
    let [n2, r2] = M.useState(!!((_a2 = e2.sem) == null ? void 0 : _a2.planesVisible)), [i2, a2] = M.useState(!!((_b = e2.sem) == null ? void 0 : _b.boundingBoxesVisible)), [o2, s2] = M.useState(!!((_c2 = e2.sem) == null ? void 0 : _c2.meshesVisible)), { inputMode: c2, setInputMode: l2 } = Al(), { infoPanelOpen: u2, setInfoPanelOpen: d2, envDropDownOpen: f2, setEnvDropDownOpen: p2 } = Fl();
    return (0, D.jsxs)(`div`, {
      style: {
        display: `flex`,
        justifyContent: `center`,
        flexDirection: `row`,
        alignItems: `center`,
        gap: `6px`,
        padding: `8px`
      },
      children: [
        (0, D.jsx)(fc, {
          children: (0, D.jsxs)(`div`, {
            style: {
              display: `flex`,
              flexDirection: `row`,
              gap: `1px`
            },
            children: [
              (0, D.jsx)(pc, {
                title: `Click to reset device transforms`,
                onClick: () => {
                  t2.resetDeviceTransforms();
                },
                children: (0, D.jsx)(z, {
                  icon: Fc,
                  $size: 16
                })
              }),
              (0, D.jsx)(pc, {
                title: `Click to activate play mode`,
                onClick: () => {
                  t2.lockPointer(), p2(false), d2(false);
                },
                children: (0, D.jsx)(z, {
                  icon: Ic,
                  $size: 16
                })
              }),
              (0, D.jsx)(pc, {
                title: `Click to toggle input mode`,
                onClick: () => {
                  c2 === `controller` ? (l2(`hand`), e2.primaryInputMode = `hand`) : (l2(`controller`), e2.primaryInputMode = `controller`);
                },
                children: (0, D.jsx)(z, {
                  icon: c2 === `controller` ? kc : Ac,
                  $size: 16
                })
              }),
              e2.sem && (0, D.jsxs)(D.Fragment, {
                children: [
                  (0, D.jsx)(bc, {
                    $horizontal: false
                  }),
                  (0, D.jsx)(pc, {
                    title: `Click to select/change emulated environment`,
                    onClick: () => p2(!f2),
                    children: (0, D.jsx)(z, {
                      icon: Lc,
                      $size: 16
                    })
                  }),
                  (0, D.jsx)(pc, {
                    title: `Click to toggle visibility of planes`,
                    onClick: () => {
                      e2.sem.planesVisible = !n2, r2(!n2);
                    },
                    children: (0, D.jsx)(il, {
                      size: 16,
                      color: n2 ? L.textWhite : L.textGrey
                    })
                  }),
                  (0, D.jsx)(pc, {
                    title: `Click to toggle visibility of bounding boxes`,
                    onClick: () => {
                      e2.sem.boundingBoxesVisible = !i2, a2(!i2);
                    },
                    children: (0, D.jsx)(nl, {
                      size: 16,
                      color: i2 ? L.textWhite : L.textGrey
                    })
                  }),
                  (0, D.jsx)(pc, {
                    title: `Click to toggle visibility of meshes`,
                    onClick: () => {
                      e2.sem.meshesVisible = !o2, s2(!o2);
                    },
                    children: (0, D.jsx)(rl, {
                      size: 16,
                      color: o2 ? L.textWhite : L.textGrey
                    })
                  })
                ]
              }),
              (0, D.jsx)(bc, {
                $horizontal: false
              }),
              (0, D.jsx)(pc, {
                title: `Click to exit XR session`,
                onClick: () => {
                  var _a3;
                  (_a3 = e2.activeSession) == null ? void 0 : _a3.end();
                },
                children: (0, D.jsx)(z, {
                  icon: Tc,
                  $size: 16
                })
              })
            ]
          })
        }),
        (0, D.jsx)(fc, {
          children: (0, D.jsxs)(`div`, {
            style: {
              display: `flex`,
              flexDirection: `row`,
              gap: `1px`
            },
            children: [
              (0, D.jsx)(pc, {
                title: `About IWER`,
                onClick: () => {
                  d2(!u2);
                },
                children: (0, D.jsx)(al, {
                  size: 16
                })
              }),
              (0, D.jsx)(pc, {
                title: `Report issues`,
                onClick: () => {
                  window.open(`https://github.com/meta-quest/immersive-web-emulation-runtime/issues`, `_blank`);
                },
                children: (0, D.jsx)(z, {
                  icon: Uc,
                  $size: 16
                })
              })
            ]
          })
        }),
        u2 && (0, D.jsxs)(yc, {
          style: {
            top: `50vh`,
            left: `50vw`,
            transform: `translate(-50%, -50%)`,
            maxWidth: `240px`,
            gap: `4px`
          },
          children: [
            (0, D.jsx)(`div`, {
              style: {
                display: `flex`,
                justifyContent: `end`
              },
              children: (0, D.jsx)(xc, {
                $isRed: true,
                onClick: () => {
                  d2(false);
                },
                children: (0, D.jsx)(z, {
                  icon: Xc
                })
              })
            }),
            (0, D.jsx)(`div`, {
              style: {
                display: `flex`,
                justifyContent: `center`
              },
              children: (0, D.jsx)(al, {
                size: 100
              })
            }),
            (0, D.jsxs)(`p`, {
              style: {
                textAlign: `center`,
                padding: `0 5px`,
                margin: `0`
              },
              children: [
                (0, D.jsx)(`b`, {
                  children: `Immersive Web Emulation Runtime`
                }),
                ` (IWER) is a free, open-source WebXR developer tool created by Meta Platforms, Inc.`
              ]
            }),
            (0, D.jsx)(`table`, {
              style: {
                width: `100%`,
                borderCollapse: `collapse`,
                display: `flex`,
                justifyContent: `center`,
                fontSize: `12px`,
                padding: `8px`
              },
              children: (0, D.jsxs)(`tbody`, {
                children: [
                  (0, D.jsxs)(`tr`, {
                    children: [
                      (0, D.jsx)(Ml, {
                        children: `IWER`
                      }),
                      (0, D.jsxs)(Nl, {
                        children: [
                          `v`,
                          e2.version
                        ]
                      })
                    ]
                  }),
                  (0, D.jsxs)(`tr`, {
                    children: [
                      (0, D.jsx)(Ml, {
                        children: `DevUI`
                      }),
                      (0, D.jsxs)(Nl, {
                        children: [
                          `v`,
                          e2.devui.version
                        ]
                      })
                    ]
                  }),
                  e2.sem && (0, D.jsxs)(`tr`, {
                    children: [
                      (0, D.jsx)(Ml, {
                        children: `SEM`
                      }),
                      (0, D.jsxs)(Nl, {
                        children: [
                          `v`,
                          e2.sem.version
                        ]
                      })
                    ]
                  })
                ]
              })
            }),
            (0, D.jsx)(dc, {
              style: {
                borderRadius: R.radiusSolo
              },
              onClick: () => {
                window.open(`https://github.com/meta-quest/immersive-web-emulation-runtime/blob/main/LICENSE`, `_blank`);
              },
              children: `MIT License`
            }),
            (0, D.jsx)(dc, {
              style: {
                borderRadius: R.radiusSolo
              },
              onClick: () => {
                window.open(`https://github.com/meta-quest/immersive-web-emulation-runtime`, `_blank`);
              },
              children: `View Source on GitHub`
            })
          ]
        }),
        f2 && (0, D.jsx)(yc, {
          style: {
            position: `absolute`,
            top: `40px`
          },
          children: Pl.map((t3) => (0, D.jsx)(`div`, {
            children: (0, D.jsx)(pc, {
              style: {
                fontSize: `12px`,
                width: `100%`,
                justifyContent: `start`,
                borderRadius: `8px`
              },
              onClick: () => {
                e2.sem.loadDefaultEnvironment(t3);
              },
              children: Il(t3)
            })
          }, t3))
        })
      ]
    });
  }, Rl = I.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	margin-top: ${R.gap};
	font-size: 12px;
`, zl = I.input.attrs({
    type: `range`
  })`
	-webkit-appearance: none;
	appearance: none;
	background: ${L.gradientGrey};
	border: 1px solid transparent;
	height: 25px;
	color: ${L.textWhite};
	width: ${R.widthLong};
	cursor: pointer;
	margin: 0;
	border-radius: 5px;
	padding: 0 10px 0 5px;
	box-sizing: border-box;
	font-size: 10px;

	&::-webkit-slider-thumb {
		-webkit-appearance: none;
		appearance: none;
		width: 8px;
		height: 25px;
		background-color: ${L.textWhite};
		border-radius: ${R.radiusMiddle};
	}

	&::-moz-range-thumb {
		width: 8px;
		height: 25px;
		background-color: ${L.textWhite};
		border-radius: ${R.radiusMiddle};
	}

	&::-ms-thumb {
		width: 8px;
		height: 25px;
		background-color: ${L.textWhite};
		border-radius: ${R.radiusMiddle};
	}
`, Bl = ({ xrDevice: e2, inputLayer: t2, pointerLocked: n2 }) => {
    let [r2, i2] = M.useState(e2.fovy);
    return (0, D.jsxs)(yc, {
      style: {
        left: `8px`,
        top: `8px`
      },
      children: [
        (0, D.jsxs)(`div`, {
          style: {
            display: `flex`,
            flexDirection: `row`,
            justifyContent: `space-between`,
            alignItems: `center`,
            height: `20px`
          },
          children: [
            (0, D.jsxs)(`div`, {
              style: {
                fontSize: `13px`,
                display: `flex`,
                flexDirection: `row`,
                alignItems: `center`,
                justifyItems: `start`
              },
              children: [
                (0, D.jsx)(z, {
                  icon: Jc,
                  style: {
                    marginRight: `5px`
                  }
                }),
                (0, D.jsx)(`div`, {
                  style: {
                    alignItems: `end`
                  },
                  children: e2.name
                })
              ]
            }),
            (0, D.jsx)(`div`, {
              style: {
                display: `flex`,
                flexDirection: `row`,
                gap: `1px`
              }
            })
          ]
        }),
        (0, D.jsx)(bc, {}),
        (0, D.jsx)(xl, {
          vector: t2.combinedCameraPosition,
          icon: zc
        }),
        !n2 && (0, D.jsxs)(Rl, {
          children: [
            (0, D.jsx)(z, {
              icon: Zc,
              style: {
                marginRight: `5px`
              }
            }),
            (0, D.jsxs)(Sc, {
              children: [
                (0, D.jsxs)(`div`, {
                  style: {
                    position: `relative`,
                    display: `inline-block`,
                    height: `25px`
                  },
                  children: [
                    (0, D.jsx)(Cc, {
                      type: `text`,
                      value: (r2 / Math.PI * 180).toFixed(0) + `\xB0`,
                      readOnly: true,
                      style: {
                        width: `73px`
                      }
                    }),
                    (0, D.jsx)(wc, {
                      children: `FOV-Y`
                    })
                  ]
                }),
                (0, D.jsx)(`div`, {
                  style: {
                    position: `relative`,
                    display: `inline-block`
                  },
                  children: (0, D.jsx)(zl, {
                    value: r2,
                    onChange: (t3) => {
                      let n3 = Number(t3.target.value);
                      i2(n3), e2.fovy = n3;
                    },
                    min: Math.PI / 6,
                    max: Math.PI / 1.5,
                    step: Math.PI / 48,
                    style: {
                      width: `80px`
                    }
                  })
                })
              ]
            })
          ]
        })
      ]
    });
  }, Vl = new f(), Hl = new f(), Ul = {
    x: `XYZ`,
    y: `YXZ`,
    z: `ZXY`
  };
  function Wl(e2, t2, n2, r2, i2, a2) {
    Vl.copy(n2), i2 != null && Vl.premultiply(Hl.copy(i2).invert());
    let o2 = new E(), s2 = new w(), c2 = new E();
    Vl.decompose(o2, s2, c2), ru(o2, r2.initialTargetPosition, a2.translate ?? true);
    let l2, u2 = a2.rotate ?? true;
    if (u2 === false) s2.copy(r2.initialTargetQuaternion), l2 = r2.initialTargetRotation.clone();
    else if (Array.isArray(u2) || u2 === true || typeof u2 != `string` && !Array.isArray(u2) && u2.x === true && u2.y === true && u2.z === true) l2 = new T().setFromQuaternion(s2, r2.initialTargetRotation.order);
    else if (typeof u2 == `string`) {
      let e3 = Ul[u2];
      l2 = new T().setFromQuaternion(s2, e3);
      for (let t3 of e3) {
        let e4 = t3.toLowerCase();
        e4 !== u2 && (l2[e4] = 0);
      }
      l2.order = r2.initialTargetRotation.order, s2.setFromEuler(l2);
    } else l2 = Ql(s2, r2.initialTargetRotation, u2);
    return typeof a2.scale == `object` && a2.scale.uniform || ru(c2, r2.initialTargetScale, a2.scale ?? true), {
      pointerAmount: t2,
      position: o2,
      quaternion: s2,
      rotation: l2,
      scale: c2,
      time: e2
    };
  }
  var Gl = new g(), Kl = new E(), ql = new E(), Jl = new E(), Yl = new w();
  function Xl(e2, t2, n2) {
    return Gl.normal.copy(e2), Gl.constant = 0, Zl(Kl, Gl.normal), ql.copy(Kl), ql.applyQuaternion(Yl.copy(t2).invert().premultiply(n2)), Gl.projectPoint(Kl, Kl).normalize(), Gl.projectPoint(ql, ql).normalize(), (Jl.crossVectors(Kl, Gl.normal).dot(ql) < 0 ? 1 : -1) * Kl.angleTo(ql);
  }
  function Zl(e2, t2) {
    t2.x === 0 ? e2.set(1, 0, 0) : t2.y === 0 ? e2.set(0, 1, 0) : t2.z === 0 ? e2.set(0, 0, 1) : e2.set(-t2.y, t2.x, 0);
  }
  function Ql(e2, t2, n2) {
    let r2 = ``, i2 = ``;
    for (let e3 of t2.order) n2[e3.toLowerCase()] === false ? i2 += e3 : r2 += e3;
    let a2 = r2 + i2, o2 = new T().setFromQuaternion(e2, a2);
    for (let e3 of a2) {
      let r3 = e3.toLowerCase();
      o2[r3] = iu(r3, o2[r3], t2[r3], n2);
    }
    return e2.setFromEuler(o2), o2;
  }
  var $l = new E(), eu = new g(), tu = new E(), nu = new E();
  function ru(e2, t2, n2) {
    if (Array.isArray(n2)) switch (n2.length) {
      case 0:
        e2.copy(t2);
        return;
      case 1:
        e2.sub(t2), Su(e2, n2[0] instanceof E ? n2[0] : $l.fromArray(n2[0])), e2.add(t2);
        return;
      case 2:
        $l.crossVectors(n2[0] instanceof E ? n2[0] : tu.fromArray(n2[0]), n2[1] instanceof E ? n2[1] : nu.fromArray(n2[1])), eu.setFromNormalAndCoplanarPoint($l, t2), eu.projectPoint(e2, e2);
        return;
    }
    else e2.x = iu(`x`, e2.x, t2.x, n2), e2.y = iu(`y`, e2.y, t2.y, n2), e2.z = iu(`z`, e2.z, t2.z, n2);
  }
  function iu(e2, t2, n2, r2) {
    if (typeof r2 == `boolean`) return r2 ? t2 : n2;
    if (typeof r2 == `string`) return r2 === e2 ? t2 : n2;
    let i2 = r2[e2];
    return i2 === false ? n2 : Array.isArray(i2) ? xe(t2, ...i2) : t2;
  }
  function au(e2 = true, t2, n2, r2, i2, a2) {
    if (e2) {
      switch (t2.length) {
        case 0:
        case 3:
          return;
        case 1:
          bu(n2, ...t2, r2, i2, a2);
          return;
        case 2:
          yu(...t2, n2, r2, i2, a2);
          return;
      }
      throw Error(`space cannot be ${t2.length}D but received (${t2.map((e3) => e3.toArray().join(`/`)).join(`; `)})`);
    }
  }
  var ou = {
    x: new E(1, 0, 0),
    y: new E(0, 1, 0),
    z: new E(0, 0, 1)
  };
  function su(e2, t2, n2, r2, i2) {
    if (r2 !== false) {
      if (r2 === true) e2[0] = ou.x, e2[1] = ou.y, e2[2] = ou.z;
      else if (typeof r2 == `string`) pu(e2, t2, n2, r2, i2);
      else if (Array.isArray(r2)) for (let a2 of r2) pu(e2, t2, n2, a2, i2);
      else r2.x !== false && pu(e2, t2, n2, `x`, i2), r2.y !== false && pu(e2, t2, n2, `y`, i2), r2.z !== false && pu(e2, t2, n2, `z`, i2);
    }
  }
  var cu = new w(), lu = new T(), uu = new E(), du = new E(), fu = new E();
  function pu(e2, t2, n2, r2, i2) {
    if (Array.isArray(r2) ? uu.set(...r2) : r2 instanceof E ? uu.copy(r2) : uu.copy(ou[r2]), i2 === `translate`) uu.applyQuaternion(t2), hu(e2, uu);
    else if (i2 === `scale`) Array.isArray(r2) ? cu.identity() : cu.setFromEuler(n2), cu.premultiply(t2), uu.applyQuaternion(cu), hu(e2, uu);
    else {
      if (Array.isArray(r2)) lu.set(0, 0, 0);
      else {
        lu.copy(n2);
        for (let e3 = 2; e3 >= 0; e3--) {
          let t3 = n2.order[e3].toLowerCase();
          if (lu[t3] = 0, t3 === r2) break;
        }
      }
      cu.setFromEuler(lu).premultiply(t2), uu.normalize(), du.set(0, 1, 0), uu.dot(du) > 0.99 && du.set(0, 0, 1), fu.crossVectors(uu, du).normalize(), du.copy(fu), fu.applyQuaternion(cu), hu(e2, fu), fu.crossVectors(uu, du).normalize(), fu.applyQuaternion(cu), hu(e2, fu);
    }
  }
  var mu = new E();
  function hu(e2, t2) {
    e2.length !== 3 && (e2.length === 0 ? e2.push(t2.clone()) : e2.length === 1 ? Math.abs(e2[0].dot(t2)) < 0.999 && e2.push(t2.clone()) : (mu.crossVectors(e2[0], e2[1]), Math.abs(mu.dot(t2)) < 1e-3 || e2.push(t2.clone())));
  }
  var gu = new g(), _u = new E(), vu = new E();
  function yu(e2, t2, n2, r2, i2, a2) {
    _u.crossVectors(e2, t2).normalize(), gu.setFromNormalAndCoplanarPoint(_u, n2);
    let o2 = a2 == null ? 0 : Math.abs(_u.dot(a2));
    if (a2 == null || o2 < 0.01) {
      gu.projectPoint(i2, i2);
      return;
    }
    let s2 = -gu.distanceToPoint(r2) / a2.dot(gu.normal);
    s2 < 0 ? gu.projectPoint(i2, i2) : (vu.copy(i2), i2.copy(r2).addScaledVector(a2, s2));
  }
  function bu(e2, t2, n2, r2, i2) {
    let a2 = i2 == null ? 0 : 1 - Math.abs(t2.dot(i2));
    if (i2 == null || a2 < 1e-3) {
      xu(r2, e2, t2);
      return;
    }
    vu.subVectors(n2, e2);
    let o2 = t2.dot(i2), s2 = t2.dot(vu), c2 = i2.dot(vu), l2 = 1 - o2 * o2, u2 = (s2 - o2 * c2) / l2;
    (o2 * s2 - c2) / l2 < 0 ? xu(r2, e2, t2) : (vu.copy(r2), r2.copy(e2).addScaledVector(t2, u2));
  }
  function xu(e2, t2, n2) {
    e2.sub(t2), Su(e2, n2), e2.add(t2);
  }
  function Su(e2, t2) {
    let n2 = e2.dot(t2);
    e2.copy(t2).multiplyScalar(n2);
  }
  var Cu = new f(), wu = new f(), Tu = new E(), Eu = new E(), Du = new w(), Ou = new E(1, 1, 1), ku = [];
  function Au(e2, t2, n2, r2, i2) {
    return r2 == null ? Du.identity() : r2.decompose(Tu, Du, Eu), ku.length = 0, su(ku, Du, n2.initialTargetRotation, i2.translate ?? true, `translate`), wu.makeRotationFromQuaternion(Du.copy(t2.initialPointerWorldQuaternion).invert()).multiply(Cu.makeTranslation(Tu.copy(t2.initialPointerWorldPoint).negate())), n2.initialTargetParentWorldMatrix != null && wu.multiply(n2.initialTargetParentWorldMatrix), au(i2.projectRays, ku, t2.initialPointerWorldPoint, t2.pointerWorldOrigin, Tu.copy(t2.pointerWorldPoint), t2.pointerWorldDirection), Du.copy(t2.pointerWorldQuaternion), (i2.rotate ?? true) === false && Du.copy(t2.initialPointerWorldQuaternion), Cu.compose(Tu, Du, Ou).multiply(wu).multiply(wu.compose(n2.initialTargetPosition, n2.initialTargetQuaternion, n2.initialTargetScale)), Wl(e2, 1, Cu, n2, r2, i2);
  }
  var ju = new E(), Mu = new E(), Nu = new E(), Pu = new E(), Fu = new E(), Iu = new E(), Lu = new E(), Ru = new f(), zu = new f(), Bu = new f(), Vu = new w(), Hu = new w(), Uu = [];
  function Wu(e2, t2, n2, r2, i2, a2) {
    i2 == null ? Vu.identity() : i2.decompose(Nu, Vu, Pu), Uu.length = 0, su(Uu, Vu, r2.initialTargetRotation, a2.translate ?? true, `translate`), su(Uu, Vu, r2.initialTargetRotation, a2.rotate ?? true, `rotate`), su(Uu, Vu, r2.initialTargetRotation, a2.scale ?? true, `scale`), au(a2.projectRays, Uu, t2.initialPointerWorldPoint, t2.pointerWorldOrigin, Nu.copy(t2.pointerWorldPoint), t2.pointerWorldDirection), au(a2.projectRays, Uu, n2.initialPointerWorldPoint, n2.pointerWorldOrigin, Pu.copy(n2.pointerWorldPoint), n2.pointerWorldDirection), ju.copy(n2.initialPointerWorldPoint).sub(t2.initialPointerWorldPoint), Mu.copy(Pu).sub(Nu), Nu.copy(ju), r2.prevTwoPointerDeltaRotation != null && Nu.applyQuaternion(r2.prevTwoPointerDeltaRotation), Nu.normalize(), Pu.copy(Mu).normalize(), Vu.setFromUnitVectors(Nu, Pu), r2.prevTwoPointerDeltaRotation == null ? r2.prevTwoPointerDeltaRotation = new w() : Vu.multiply(r2.prevTwoPointerDeltaRotation), r2.prevTwoPointerDeltaRotation.copy(Vu);
    let o2 = (Xl(Pu, t2.prevPointerWorldQuaternion, t2.pointerWorldQuaternion) + Xl(Pu, n2.prevPointerWorldQuaternion, n2.pointerWorldQuaternion)) * 0.5 + (r2.prevAngle ?? 0);
    if (r2.prevAngle = o2, Vu.premultiply(Hu.setFromAxisAngle(Pu, o2)), Bu.compose(r2.initialTargetPosition, r2.initialTargetQuaternion, r2.initialTargetScale), r2.initialTargetParentWorldMatrix != null && Bu.premultiply(r2.initialTargetParentWorldMatrix), typeof a2.scale == `object` && (a2.scale.uniform ?? false)) Lu.setScalar(Mu.length() / ju.length());
    else {
      Bu.decompose(Fu, Hu, Iu), Nu.copy(ju).applyQuaternion(Hu.invert()).divide(Iu), Nu.x = Math.abs(Nu.x), Nu.y = Math.abs(Nu.y), Nu.z = Math.abs(Nu.z);
      let e3 = Math.max(...Nu.toArray());
      Nu.divideScalar(e3), Lu.set(1, 1, 1), Lu.addScaledVector(Nu, Mu.length() / ju.length() - 1);
    }
    return Ru.makeTranslation(Nu.copy(Mu).multiplyScalar(0.5).add(t2.pointerWorldPoint)).multiply(zu.makeRotationFromQuaternion(Vu)).multiply(zu.makeRotationFromQuaternion(Hu.invert())).multiply(zu.makeScale(Lu.x, Lu.y, Lu.z)).multiply(zu.makeRotationFromQuaternion(Hu.invert())).multiply(zu.makeTranslation(Nu.copy(ju).multiplyScalar(0.5).add(t2.initialPointerWorldPoint).negate())).multiply(Bu), Wl(e2, 2, Ru, r2, i2, a2);
  }
  var Gu = new E(), Ku = new E(), qu = new E(), Ju = new E(), Yu = new E(), Xu = new w(), Zu = new w(), Qu = new f(), $u = new E(), ed = [];
  function td(e2, t2, n2, r2, i2, a2) {
    if (i2 == null ? Xu.identity() : i2.decompose(Gu, Xu, Ku), ed.length = 0, a2.translate === `as-scale` && su(ed, Xu, n2.initialTargetRotation, a2.scale ?? true, `scale`), a2.translate != `as-scale` && su(ed, Xu, n2.initialTargetRotation, a2.rotate ?? true, `rotate`), Qu.makeTranslation(n2.initialTargetPosition), n2.initialTargetParentWorldMatrix != null && Qu.premultiply(n2.initialTargetParentWorldMatrix), Ju.setFromMatrixPosition(Qu), au(a2.projectRays, ed, t2.initialPointerWorldPoint, t2.pointerWorldOrigin, Ju, void 0), Ju.negate().add(t2.initialPointerWorldPoint), Yu.setFromMatrixPosition(r2), au(a2.projectRays, ed, t2.initialPointerWorldPoint, t2.pointerWorldOrigin, Yu, void 0), au(a2.projectRays, ed, t2.initialPointerWorldPoint, t2.pointerWorldOrigin, Ku.copy(t2.pointerWorldPoint), t2.pointerWorldDirection), Yu.negate().add(Ku), a2.translate === `as-scale` ? Xu.copy(n2.initialTargetQuaternion) : (Gu.copy(Ju), n2.prevTranslateAsDeltaRotation != null && Gu.applyQuaternion(n2.prevTranslateAsDeltaRotation), Gu.normalize(), Ku.copy(Yu).normalize(), Xu.setFromUnitVectors(Gu, Ku), n2.prevTranslateAsDeltaRotation == null ? n2.prevTranslateAsDeltaRotation = new w() : Xu.multiply(n2.prevTranslateAsDeltaRotation), n2.prevTranslateAsDeltaRotation.copy(Xu), n2.initialTargetParentWorldMatrix != null && (Zu.setFromRotationMatrix(n2.initialTargetParentWorldMatrix), Xu.multiply(Zu.normalize()), Xu.premultiply(Zu.invert())), Xu.multiply(n2.initialTargetQuaternion)), a2.translate === `as-rotate`) $u.set(1, 1, 1);
    else if (typeof a2.scale == `object` && (a2.scale.uniform ?? false)) $u.setScalar(Yu.length() / Ju.length());
    else if (a2.translate === `as-rotate-and-scale`) {
      Qu.compose(n2.initialTargetPosition, n2.initialTargetQuaternion, n2.initialTargetScale), n2.initialTargetParentWorldMatrix != null && Qu.premultiply(n2.initialTargetParentWorldMatrix), Qu.decompose(Ku, Zu, qu), Gu.copy(Ju).applyQuaternion(Zu.invert()).divide(qu), Gu.x = Math.abs(Gu.x), Gu.y = Math.abs(Gu.y), Gu.z = Math.abs(Gu.z);
      let e3 = Math.max(...Gu.toArray());
      Gu.divideScalar(e3), $u.set(1, 1, 1), $u.addScaledVector(Gu, Yu.length() / Ju.length() - 1);
    } else n2.initialTargetParentWorldMatrix == null ? Zu.copy(n2.initialTargetQuaternion) : (n2.initialTargetParentWorldMatrix.decompose(Gu, Zu, Ku), Zu.multiply(n2.initialTargetQuaternion)), Gu.copy(Ju).applyQuaternion(Zu.invert()), i2 == null ? Zu.copy(n2.initialTargetQuaternion) : (i2.decompose(Ku, Zu, qu), Zu.multiply(n2.initialTargetQuaternion)), Ku.copy(Yu).applyQuaternion(Zu.invert()), $u.x = Math.abs(Gu.x) < 1e-3 ? 1 : Math.abs(Ku.x / Gu.x), $u.y = Math.abs(Gu.y) < 1e-3 ? 1 : Math.abs(Ku.y / Gu.y), $u.z = Math.abs(Gu.z) < 1e-3 ? 1 : Math.abs(Ku.z / Gu.z);
    return $u.multiply(n2.initialTargetScale), Qu.compose(n2.initialTargetPosition, Xu, $u), Wl(e2, 1, Qu, n2, void 0, a2);
  }
  var nd = class {
    constructor(e2, t2) {
      __publicField(this, "t1");
      __publicField(this, "t2");
      __publicField(this, "_position");
      __publicField(this, "_quaternion");
      __publicField(this, "_rotation");
      __publicField(this, "_scale");
      this.t1 = e2, this.t2 = t2;
    }
    get time() {
      return this.t1.time - this.t2.time;
    }
    get position() {
      return this._position ?? (this._position = this.t1.position.clone().sub(this.t2.position));
    }
    get quaternion() {
      return this._quaternion ?? (this._quaternion = this.t2.quaternion.clone().invert().premultiply(this.t1.quaternion));
    }
    get rotation() {
      return this._rotation ?? (this._rotation = new T().setFromQuaternion(this.quaternion));
    }
    get scale() {
      return this._scale ?? (this._scale = this.t1.scale.clone().sub(this.t2.scale));
    }
  }, rd = class {
    constructor(e2) {
      __publicField(this, "cancel");
      __publicField(this, "previous");
      __publicField(this, "memo");
      __publicField(this, "event");
      __publicField(this, "initial");
      __publicField(this, "current");
      __publicField(this, "first");
      __publicField(this, "last");
      __publicField(this, "_delta");
      __publicField(this, "_offset");
      this.cancel = e2;
    }
    start(e2, t2) {
      this.event = e2, this.previous = void 0, this.current = t2, this.initial = t2, this.first = true, this.last = false, this.memo = void 0, this._delta = void 0, this._offset = void 0;
    }
    update(e2, t2) {
      this.event = e2, this.previous = this.current, this.current = t2, this.first = false, this.last = false, this._delta = void 0, this._offset = void 0;
    }
    end(e2) {
      this.event = e2, this.first = false, this.last = true, this._delta = void 0, this._offset = void 0;
    }
    get delta() {
      if (this.previous != null) return this._delta ?? (this._delta = new nd(this.current, this.previous));
    }
    get offset() {
      return this._offset ?? (this._offset = new nd(this.current, this.initial));
    }
  };
  function id(e2, t2) {
    if (e2.details.type === `sphere`) return false;
    if (e2.details.type === `lines`) {
      let { line: n2 } = e2.details;
      return t2.copy(n2.end).sub(n2.start).normalize(), true;
    }
    return e2.details.type === `screen-ray` ? (t2.copy(e2.details.direction), true) : (t2.set(0, 0, -1).applyQuaternion(e2.pointerQuaternion), true);
  }
  var ad = new E(), od = class {
    constructor(e2, t2 = () => ({})) {
      __publicField(this, "target");
      __publicField(this, "getOptions");
      __publicField(this, "outputState");
      __publicField(this, "latestMoveEvent");
      __publicField(this, "inputState", /* @__PURE__ */ new Map());
      __publicField(this, "capturedObjects", /* @__PURE__ */ new Map());
      __publicField(this, "initialTargetPosition", new E());
      __publicField(this, "initialTargetQuaternion", new w());
      __publicField(this, "initialTargetRotation", new T());
      __publicField(this, "initialTargetScale", new E());
      __publicField(this, "initialTargetParentWorldMatrix");
      __publicField(this, "prevTwoPointerDeltaRotation");
      __publicField(this, "prevTranslateAsDeltaRotation");
      __publicField(this, "prevAngle");
      __publicField(this, "handlers", {
        onPointerDown: this.onPointerDown.bind(this),
        onPointerMove: this.onPointerMove.bind(this),
        onPointerUp: this.onPointerUp.bind(this)
      });
      this.target = e2, this.getOptions = t2, this.outputState = new rd(this.cancel.bind(this));
    }
    firstOnPointer(e2) {
      let t2 = this.getTarget();
      if (t2 == null) return;
      let n2 = id(e2, ad) ? ad.clone() : void 0;
      e2.intersection.details.type, this.inputState.set(e2.pointerId, {
        pointerWorldDirection: n2,
        pointerWorldPoint: e2.point,
        pointerWorldOrigin: e2.pointerPosition,
        pointerWorldQuaternion: e2.pointerQuaternion,
        initialPointerWorldPoint: e2.point.clone(),
        initialPointerWorldDirection: n2 == null ? void 0 : n2.clone(),
        initialPointerWorldQuaternion: e2.pointerQuaternion.clone(),
        prevPointerWorldQuaternion: e2.pointerQuaternion
      }), this.save(), this.inputState.size === 1 && this.outputState.start(e2, {
        pointerAmount: 1,
        time: e2.timeStamp,
        position: this.initialTargetPosition.clone(),
        quaternion: this.initialTargetQuaternion.clone(),
        rotation: this.initialTargetRotation.clone(),
        scale: this.initialTargetScale.clone()
      }), this.outputState.memo = this.apply(t2);
    }
    onPointerDown(e2) {
      var _a2, _b;
      ((_b = (_a2 = this.getOptions()).filter) == null ? void 0 : _b.call(_a2, e2)) !== false && (this.stopPropagation(e2), this.capturePointer(e2.pointerId, e2.object) && this.firstOnPointer(e2));
    }
    onPointerMove(e2) {
      if (!this.capturedObjects.has(e2.pointerId)) return;
      this.stopPropagation(e2);
      let t2 = this.inputState.get(e2.pointerId);
      t2 == null ? this.firstOnPointer(e2) : (this.latestMoveEvent = e2, t2.pointerWorldPoint = e2.point, t2.prevPointerWorldQuaternion = t2.pointerWorldQuaternion, t2.pointerWorldQuaternion = e2.pointerQuaternion, t2.pointerWorldOrigin = e2.pointerPosition, t2.pointerWorldDirection != null && id(e2, t2.pointerWorldDirection));
    }
    cancel() {
      if (this.capturedObjects.size === 0) return;
      for (let [e3, t2] of this.capturedObjects) t2.releasePointerCapture(e3);
      this.capturedObjects.clear(), this.inputState.clear(), this.outputState.end(void 0);
      let e2 = this.getTarget();
      e2 != null && this.apply(e2);
    }
    onPointerUp(e2) {
      this.capturedObjects.has(e2.pointerId) && (this.stopPropagation(e2), this.releasePointer(e2.pointerId, e2.object, e2));
    }
    update(e2) {
      var _a2, _b, _c2;
      let t2 = this.getTarget();
      if (t2 == null || this.inputState.size === 0 || this.latestMoveEvent == null && (this.getOptions().alwaysUpdate ?? false) === false) return;
      let n2 = this.getOptions(), r2;
      if (n2.translate === `as-rotate` || n2.translate === `as-rotate-and-scale` || n2.translate === `as-scale`) {
        n2.translate, this.prevTwoPointerDeltaRotation = void 0, this.prevAngle = void 0;
        let [i2] = this.inputState.values(), a2 = t2.matrixWorld, o2 = (_a2 = t2.parent) == null ? void 0 : _a2.matrixWorld;
        r2 = td(e2, i2, this, a2, o2, n2);
      } else if (this.inputState.size === 1) {
        this.prevTwoPointerDeltaRotation = void 0, this.prevAngle = void 0, this.prevTranslateAsDeltaRotation = void 0;
        let [i2] = this.inputState.values();
        r2 = Au(e2, i2, this, (_b = t2.parent) == null ? void 0 : _b.matrixWorld, n2);
      } else {
        this.prevTranslateAsDeltaRotation = void 0;
        let [i2, a2] = this.inputState.values();
        r2 = Wu(e2, i2, a2, this, (_c2 = t2.parent) == null ? void 0 : _c2.matrixWorld, n2);
      }
      this.outputState.update(this.latestMoveEvent, r2), this.outputState.memo = this.apply(t2), this.latestMoveEvent = void 0;
    }
    getTarget() {
      var _a2;
      return this.target instanceof ee ? this.target : (_a2 = this.target) == null ? void 0 : _a2.current;
    }
    capturePointer(e2, t2) {
      if (this.capturedObjects.has(e2)) return false;
      let { multitouch: n2, translate: r2 } = this.getOptions();
      return ((n2 ?? true) === false || typeof r2 == `string`) && this.capturedObjects.size === 1 ? false : (this.capturedObjects.set(e2, t2), t2.setPointerCapture(e2), true);
    }
    releasePointer(e2, t2, n2) {
      let r2 = this.getTarget();
      r2 != null && this.capturedObjects.delete(e2) && (this.inputState.delete(e2), t2.releasePointerCapture(e2), this.inputState.size > 0 ? this.save() : (this.outputState.end(n2), this.apply(r2)));
    }
    stopPropagation(e2) {
      var _a2;
      e2 != null && (((_a2 = this.getOptions()) == null ? void 0 : _a2.stopPropagation) ?? true) && e2.stopPropagation();
    }
    apply(e2) {
      return (this.getOptions().apply ?? cd)(this.outputState, e2);
    }
    getState() {
      return this.inputState.size === 0 ? void 0 : this.outputState;
    }
    save() {
      var _a2, _b;
      let e2 = this.getTarget();
      if (e2 != null) {
        e2.updateWorldMatrix(true, false), this.prevAngle = void 0, this.prevTwoPointerDeltaRotation = void 0, this.prevTranslateAsDeltaRotation = void 0, this.initialTargetParentWorldMatrix = (_a2 = e2.parent) == null ? void 0 : _a2.matrixWorld.clone(), e2.matrixAutoUpdate ? (this.initialTargetPosition.copy(e2.position), this.initialTargetQuaternion.copy(e2.quaternion), this.initialTargetRotation.copy(e2.rotation), this.initialTargetScale.copy(e2.scale)) : (e2.matrix.decompose(this.initialTargetPosition, this.initialTargetQuaternion, this.initialTargetScale), this.initialTargetRotation.setFromQuaternion(this.initialTargetQuaternion, e2.rotation.order));
        for (let e3 of this.inputState.values()) e3.pointerWorldDirection != null && ((_b = e3.initialPointerWorldDirection) == null ? void 0 : _b.copy(e3.pointerWorldDirection)), e3.initialPointerWorldPoint.copy(e3.pointerWorldPoint), e3.initialPointerWorldQuaternion.copy(e3.pointerWorldQuaternion);
      }
    }
    bind(e2) {
      let { onPointerDown: t2, onPointerMove: n2, onPointerUp: r2 } = this.handlers;
      return e2.addEventListener(`pointerdown`, t2), e2.addEventListener(`pointermove`, n2), e2.addEventListener(`pointerup`, r2), () => {
        e2.removeEventListener(`pointerdown`, t2), e2.removeEventListener(`pointermove`, n2), e2.removeEventListener(`pointerup`, r2), this.cancel();
      };
    }
    capture(e2, t2) {
      return this.capturePointer(e2, t2) ? () => this.releasePointer(e2, t2, void 0) : sd;
    }
  };
  function sd() {
  }
  function cd(e2, t2) {
    t2.position.copy(e2.current.position), t2.rotation.order = e2.current.rotation.order, t2.quaternion.copy(e2.current.quaternion), t2.scale.copy(e2.current.scale);
  }
  var ld = class {
    constructor(e2, t2) {
      __publicField(this, "target");
      __publicField(this, "getOptions");
      __publicField(this, "handles", []);
      __publicField(this, "hoveredTagMap", /* @__PURE__ */ new Map());
      __publicField(this, "hoverSubscriptions", []);
      __publicField(this, "applySubscriptions", []);
      __publicField(this, "space");
      this.target = e2, this.getOptions = t2;
    }
    getSpace() {
      return this.space ?? `world`;
    }
    getTarget() {
      return this.target instanceof ee ? this.target : this.target.current;
    }
    getHandleOptions(e2, t2) {
      var _a2;
      let n2 = (_a2 = this.getOptions) == null ? void 0 : _a2.call(this), r2 = t2 == null ? void 0 : t2();
      return {
        ...n2,
        ...r2,
        apply: (t3, i2) => {
          var _a3;
          return this.onApply(e2, t3, i2), (_a3 = (r2 == null ? void 0 : r2.apply) ?? (n2 == null ? void 0 : n2.apply) ?? cd) == null ? void 0 : _a3(t3, i2);
        }
      };
    }
    registerHandle(e2, t2, n2) {
      let r2 = {
        object: t2,
        store: e2,
        tag: n2
      };
      this.handles.push(r2);
      let i2 = e2.bind(t2), a2 = this.onPointerEnter.bind(this, n2), o2 = this.onPointerLeave.bind(this);
      return t2.addEventListener(`pointerenter`, a2), t2.addEventListener(`pointerleave`, o2), () => {
        let t3 = this.handles.indexOf(r2);
        t3 != -1 && this.handles.splice(t3, 1), i2(), e2.cancel();
      };
    }
    subscribeHover(e2) {
      return this.hoverSubscriptions.push(e2), e2(Array.from(this.hoveredTagMap.values())), () => {
        let t2 = this.hoverSubscriptions.indexOf(e2);
        t2 !== -1 && this.hoverSubscriptions.splice(t2, 1);
      };
    }
    subscribeApply(e2) {
      return this.applySubscriptions.push(e2), () => {
        let t2 = this.applySubscriptions.indexOf(e2);
        t2 !== -1 && this.applySubscriptions.splice(t2, 1);
      };
    }
    update(e2) {
      for (let { store: t2 } of this.handles) t2.update(e2);
    }
    onPointerEnter(e2, t2) {
      this.hoveredTagMap.set(t2.pointerId, e2), this.updateHover();
    }
    onPointerLeave(e2) {
      this.hoveredTagMap.delete(e2.pointerId), this.updateHover();
    }
    updateHover() {
      let e2 = Array.from(this.hoveredTagMap.values());
      for (let t2 of this.hoverSubscriptions) t2(e2);
    }
    onApply(e2, t2, n2) {
      for (let r2 of this.applySubscriptions) r2(e2, t2, n2);
    }
  }, ud = {
    depthTest: false,
    depthWrite: false,
    fog: false,
    toneMapped: false,
    transparent: true
  };
  function dd(e2, t2, n2, { color: r2, hoverColor: i2, hoverOpacity: a2, opacity: o2, disabled: s2 = false }) {
    if (i2 == null && a2 == null || s2) t2.color.set(r2), t2.opacity = o2 ?? 1, s2 && (t2.opacity *= 0.5, t2.color.lerp(new re(1, 1, 1), 0.5));
    else return i2 ?? (i2 = r2), e2.subscribeHover((e3) => {
      let s3 = e3.some((e4) => e4.includes(n2));
      t2.color.set(s3 ? i2 : r2), t2.opacity = (s3 ? a2 : o2) ?? 1;
    });
  }
  var fd = new w(), pd = new te();
  pd.setAttribute(`position`, new Ce([
    -1e3,
    0,
    0,
    1e3,
    0,
    0
  ], 3));
  var md = class extends S {
    constructor(e2, t2) {
      super(pd);
      __publicField(this, "context");
      __publicField(this, "rotationOffset");
      this.context = e2, this.rotationOffset = t2, this.renderOrder = 1 / 0;
    }
    update() {
      this.quaternion.setFromEuler(this.rotationOffset);
      let e2 = this.context.getTarget();
      this.context.getSpace() === `world` && e2 != null && (e2.getWorldQuaternion(fd).invert(), this.quaternion.premultiply(fd));
    }
    bind(e2) {
      this.material = new Ne({
        ...ud,
        color: this.material.color ?? `white`,
        opacity: this.material.opacity ?? 1
      });
      let t2 = this.context.subscribeHover((t3) => {
        let n3 = t3.some((t4) => t4.includes(e2));
        this.visible = n3;
      }), n2 = this.context.subscribeApply((e3, t3) => {
        if (t3.last) {
          this.position.set(0, 0, 0);
          return;
        }
        this.position.copy(t3.initial.position).sub(t3.current.position);
        let n3 = this.context.getTarget();
        n3 != null && (fd.copy(n3.quaternion).invert(), this.position.applyQuaternion(fd));
      });
      return () => {
        this.material.dispose(), t2(), n2();
      };
    }
  }, hd = class extends me {
    constructor(e2, t2, n2, r2) {
      super();
      __publicField(this, "context");
      __publicField(this, "axis");
      __publicField(this, "store");
      __publicField(this, "options");
      __publicField(this, "tag");
      this.context = e2, this.axis = t2, this.tag = (n2 ?? ``) + t2, this.store = new od(e2.target, () => e2.getHandleOptions(this.tag, r2));
    }
  };
  function gd(e2, t2 = true) {
    if (t2 === false) return {
      options: false,
      disabled: true
    };
    if (t2 === true) {
      let t3 = {
        x: false,
        y: false,
        z: false,
        e: false
      };
      for (let n3 of e2) t3[n3] = true;
      return {
        options: t3,
        disabled: false
      };
    }
    if (t2 === `disabled`) return {
      options: {
        x: true,
        y: true,
        z: true,
        e: true
      },
      disabled: true
    };
    if (typeof t2 == `string`) return {
      options: t2 === e2 && {
        x: false,
        y: false,
        z: false,
        e: false,
        [e2]: true
      },
      disabled: false
    };
    let n2 = {
      x: false,
      y: false,
      z: false,
      e: false
    }, r2 = false;
    for (let i2 of e2) {
      let e3 = t2[i2] ?? true;
      if (e3 === false) return {
        options: false,
        disabled: true
      };
      e3 === `disabled` && (r2 = true, e3 = true), n2[i2] = e3;
    }
    return {
      options: n2,
      disabled: r2
    };
  }
  var _d = new E(), vd = new E();
  function yd(e2, t2, n2, r2) {
    if (!n2) return r2;
    let i2;
    return t2 instanceof p ? i2 = (t2.top - t2.bottom) / t2.zoom : (t2.getWorldPosition(_d), e2.getWorldPosition(vd), i2 = _d.distanceTo(vd) * Math.min(1.9 * Math.tan(Math.PI * t2.fov / 360) / t2.zoom, 7)), i2 * r2 / 4;
  }
  var bd = new y(0, 0.04, 0.1, 12);
  bd.translate(0, 0.05, 0);
  var xd = new y(75e-4, 75e-4, 0.5, 3);
  xd.translate(0, 0.25, 0);
  var Sd = new T(0, 0, -Math.PI / 2), Cd = new T(0, 0, Math.PI / 2), wd = class extends hd {
    constructor(e2, t2, n2 = ``, r2, i2 = false, a2 = true) {
      super(e2, t2, n2, () => ({
        scale: false,
        rotate: false,
        translate: r2 == null ? this.options : [
          r2
        ],
        multitouch: false
      }));
      __publicField(this, "invert");
      __publicField(this, "showArrowBody");
      this.invert = i2, this.showArrowBody = a2;
    }
    bind(e2, t2, n2) {
      let { options: r2, disabled: i2 } = gd(this.axis, n2);
      if (r2 === false) return;
      this.options = r2;
      let a2 = this.invert ? Cd : Sd, o2 = new _(ud), s2 = dd(this.context, o2, this.tag, {
        color: e2,
        hoverColor: t2,
        disabled: i2
      }), c2 = new h(bd, o2);
      c2.renderOrder = 1 / 0, c2.position.x = this.invert ? -0.5 : 0.5, c2.rotation.copy(a2), this.add(c2);
      let l2, u2;
      if (this.showArrowBody) {
        let t3 = new _(ud);
        l2 = dd(this.context, t3, this.tag, {
          color: e2,
          hoverColor: 16777024,
          disabled: i2
        }), u2 = new h(xd, t3), u2.renderOrder = 1 / 0, u2.rotation.copy(a2), this.add(u2);
      }
      let d2 = new h(new y(0.13, 0, 0.6, 4));
      d2.pointerEventsOrder = 1 / 0, d2.position.x = this.invert ? -0.3 : 0.3, d2.rotation.copy(a2), d2.visible = false, this.add(d2);
      let f2 = i2 ? void 0 : this.context.registerHandle(this.store, d2, this.tag);
      return () => {
        o2.dispose(), f2 == null ? void 0 : f2(), s2 == null ? void 0 : s2(), l2 == null ? void 0 : l2(), this.remove(c2), u2 != null && this.remove(u2), this.remove(d2);
      };
    }
  }, Td = class extends hd {
    constructor(e2, t2, n2 = ``, r2) {
      super(e2, t2, n2, () => ({
        translate: r2 ?? this.options,
        scale: false,
        rotate: false,
        multitouch: false
      }));
    }
    bind(e2, t2, n2) {
      let { options: r2, disabled: i2 } = gd(this.axis, n2);
      if (r2 === false) return;
      this.options = r2;
      let a2 = new _(ud), o2 = dd(this.context, a2, this.tag, {
        opacity: 0.5,
        hoverOpacity: 1,
        color: e2,
        hoverColor: t2,
        disabled: i2
      }), s2 = new h(new m(0.2, 0.2, 0.01), a2);
      s2.renderOrder = 1 / 0, s2.pointerEventsOrder = 1 / 0, s2.position.set(0.15, 0.15, 0);
      let c2 = i2 ? void 0 : this.context.registerHandle(this.store, s2, this.tag);
      return this.add(s2), () => {
        a2.dispose(), s2.geometry.dispose(), c2 == null ? void 0 : c2(), o2 == null ? void 0 : o2(), this.remove(s2);
      };
    }
  };
  new E();
  var Ed = new w();
  function Dd(e2, t2) {
    let n2 = new h(new ne(0.01, 2), new _(ud));
    n2.renderOrder = 1 / 0, n2.visible = false, e2.add(n2);
    let r2 = new h(new ne(0.01, 2), new _(ud));
    r2.renderOrder = 1 / 0, r2.visible = false, e2.add(r2);
    let i2 = new te();
    i2.setAttribute(`position`, new Ce([
      0,
      0,
      0,
      1,
      1,
      1
    ], 3));
    let a2 = new S(i2, new Ne(ud));
    a2.renderOrder = 1 / 0, a2.visible = false, e2.add(a2);
    let o2 = t2.subscribeApply((e3, i3) => {
      r2.position.set(0, 0, 0), n2.position.copy(i3.initial.position).sub(i3.current.position);
      let o3 = t2.getTarget();
      o3 != null && (Ed.copy(o3.quaternion).invert(), n2.position.applyQuaternion(Ed)), a2.position.set(0, 0, 0), a2.scale.copy(n2.position), n2.visible = !i3.last, a2.visible = !i3.last, r2.visible = !i3.last;
    });
    return () => {
      n2.geometry.dispose(), n2.material.dispose(), r2.geometry.dispose(), r2.material.dispose(), a2.geometry.dispose(), a2.material.dispose(), e2.remove(n2), e2.remove(r2), e2.remove(a2), o2();
    };
  }
  var Od = class extends hd {
    constructor(e2) {
      super(e2, `xyz`, ``, () => ({
        translate: this.options,
        scale: false,
        rotate: false,
        multitouch: false
      }));
    }
    bind(e2) {
      let { options: t2, disabled: n2 } = gd(this.axis, e2);
      if (t2 === false) return;
      this.options = t2;
      let r2 = new _(ud), i2 = dd(this.context, r2, this.tag, {
        color: 16777215,
        hoverColor: 16776960,
        opacity: 0.25,
        hoverOpacity: 1,
        disabled: n2
      }), a2 = new h(new ne(0.1, 0), r2);
      a2.renderOrder = 1 / 0, this.add(a2);
      let o2 = new h(new ne(0.2, 0));
      o2.pointerEventsOrder = 1 / 0, o2.visible = false, this.add(o2);
      let s2 = n2 ? void 0 : this.context.registerHandle(this.store, o2, this.tag);
      return () => {
        r2.dispose(), a2.geometry.dispose(), o2.geometry.dispose(), s2 == null ? void 0 : s2(), i2 == null ? void 0 : i2(), this.remove(a2), this.remove(o2);
      };
    }
  }, kd = new E(), Ad = new w(), jd = new w(), Md = new w().setFromEuler(new T(0, 0, Math.PI / 2)), Nd = new w().setFromEuler(new T(0, -Math.PI / 2, 0)), Pd = new w(), Fd = new w().setFromEuler(new T(0, -Math.PI / 2, 0)), Id = new w().setFromEuler(new T(Math.PI / 2, 0, 0)), Ld = class extends me {
    constructor(e2, t2, n2) {
      super();
      __publicField(this, "context");
      __publicField(this, "size");
      __publicField(this, "fixed");
      __publicField(this, "free");
      __publicField(this, "translationX");
      __publicField(this, "translationY");
      __publicField(this, "translationZ");
      __publicField(this, "translationNegX");
      __publicField(this, "translationNegY");
      __publicField(this, "translationNegZ");
      __publicField(this, "translationXY");
      __publicField(this, "translationYZ");
      __publicField(this, "translationXZ");
      __publicField(this, "scaleGroup", new me());
      __publicField(this, "xAxis", new E());
      __publicField(this, "yAxis", new E());
      __publicField(this, "zAxis", new E());
      __publicField(this, "negXAxis", new E());
      __publicField(this, "negYAxis", new E());
      __publicField(this, "negZAxis", new E());
      this.context = e2, this.size = t2, this.fixed = n2, this.add(this.scaleGroup), this.free = new Od(this.context), this.scaleGroup.add(this.free), this.translationX = new wd(this.context, `x`, void 0, this.xAxis), this.scaleGroup.add(this.translationX), this.translationY = new wd(this.context, `y`, void 0, this.yAxis), this.scaleGroup.add(this.translationY), this.translationZ = new wd(this.context, `z`, void 0, this.zAxis), this.scaleGroup.add(this.translationZ), this.translationNegX = new wd(this.context, `x`, void 0, this.negXAxis, true, false), this.scaleGroup.add(this.translationNegX), this.translationNegY = new wd(this.context, `y`, void 0, this.negYAxis, true, false), this.scaleGroup.add(this.translationNegY), this.translationNegZ = new wd(this.context, `z`, void 0, this.negZAxis, true, false), this.scaleGroup.add(this.translationNegZ), this.translationXY = new Td(this.context, `xy`, void 0, [
        this.xAxis,
        this.yAxis
      ]), this.scaleGroup.add(this.translationXY), this.translationXZ = new Td(this.context, `xz`, void 0, [
        this.xAxis,
        this.zAxis
      ]), this.scaleGroup.add(this.translationXZ), this.translationYZ = new Td(this.context, `yz`, void 0, [
        this.yAxis,
        this.zAxis
      ]), this.scaleGroup.add(this.translationYZ);
    }
    update(e2) {
      this.updateWorldMatrix(true, false), this.xAxis.set(1, 0, 0), this.yAxis.set(0, 1, 0), this.zAxis.set(0, 0, 1), this.free.quaternion.identity(), this.translationX.quaternion.copy(jd), this.translationY.quaternion.copy(Md), this.translationZ.quaternion.copy(Nd), this.translationNegX.quaternion.copy(jd), this.translationNegY.quaternion.copy(Md), this.translationNegZ.quaternion.copy(Nd), this.translationXY.quaternion.copy(Pd), this.translationYZ.quaternion.copy(Fd), this.translationXZ.quaternion.copy(Id);
      let t2 = this.context.getSpace(), n2 = this.context.getTarget();
      t2 == `world` && n2 != null ? (n2.getWorldQuaternion(Ad).invert(), this.free.quaternion.premultiply(Ad), this.translationX.quaternion.premultiply(Ad), this.translationY.quaternion.premultiply(Ad), this.translationZ.quaternion.premultiply(Ad), this.translationNegX.quaternion.premultiply(Ad), this.translationNegY.quaternion.premultiply(Ad), this.translationNegZ.quaternion.premultiply(Ad), this.translationXY.quaternion.premultiply(Ad), this.translationYZ.quaternion.premultiply(Ad), this.translationXZ.quaternion.premultiply(Ad), n2.parent != null && (n2.parent.getWorldQuaternion(Ad).invert(), this.xAxis.applyQuaternion(Ad), this.yAxis.applyQuaternion(Ad), this.zAxis.applyQuaternion(Ad))) : n2 != null && (this.xAxis.applyQuaternion(n2.quaternion), this.yAxis.applyQuaternion(n2.quaternion), this.zAxis.applyQuaternion(n2.quaternion)), this.negXAxis.copy(this.xAxis).negate(), this.negYAxis.copy(this.yAxis).negate(), this.negZAxis.copy(this.zAxis).negate(), this.scaleGroup.scale.setScalar(1), n2 != null && (n2.getWorldScale(kd), this.scaleGroup.scale.divide(kd)), this.scaleGroup.scale.multiplyScalar(yd(this, e2, this.fixed ?? true, this.size ?? 1));
    }
    bind(e2) {
      let t2 = Dd(this, this.context), n2 = this.translationX.bind(16711680, 16776960, e2), r2 = this.translationY.bind(65280, 16776960, e2), i2 = this.translationZ.bind(255, 16776960, e2), a2 = this.translationNegX.bind(16711680, 16776960, e2), o2 = this.translationNegY.bind(65280, 16776960, e2), s2 = this.translationNegZ.bind(255, 16776960, e2), c2 = this.translationXY.bind(255, 16776960, e2), l2 = this.translationYZ.bind(16711680, 16776960, e2), u2 = this.translationXZ.bind(65280, 16776960, e2), d2 = this.free.bind(e2);
      return () => {
        t2(), n2 == null ? void 0 : n2(), r2 == null ? void 0 : r2(), i2 == null ? void 0 : i2(), a2 == null ? void 0 : a2(), o2 == null ? void 0 : o2(), s2 == null ? void 0 : s2(), c2 == null ? void 0 : c2(), l2 == null ? void 0 : l2(), u2 == null ? void 0 : u2(), d2 == null ? void 0 : d2();
      };
    }
  }, Rd = new T(0, 0, -Math.PI / 2), zd = new T(0, 0, Math.PI / 2), Bd = class extends hd {
    constructor(e2, t2, n2 = ``, r2 = false, i2 = true) {
      super(e2, t2, n2, () => ({
        scale: this.options,
        rotate: false,
        translate: `as-scale`,
        multitouch: false
      }));
      __publicField(this, "invert");
      __publicField(this, "showHandleLine");
      this.invert = r2, this.showHandleLine = i2;
    }
    bind(e2, t2, n2) {
      let { options: r2, disabled: i2 } = gd(this.axis, n2);
      if (r2 === false) return;
      this.options = r2;
      let a2 = this.invert ? zd : Rd, o2 = new me();
      o2.position.x = this.invert ? -0.5 : 0.5, o2.rotation.copy(a2), this.add(o2);
      let s2 = new _(ud), c2 = dd(this.context, s2, this.tag, {
        color: e2,
        hoverColor: t2,
        disabled: i2
      }), l2 = new h(new m(0.08, 0.08, 0.08), s2);
      l2.renderOrder = 1 / 0, l2.rotation.copy(a2), o2.add(l2);
      let u2, d2, f2;
      if (this.showHandleLine) {
        f2 = new me(), f2.rotation.copy(a2), this.add(f2);
        let n3 = new _(ud);
        u2 = dd(this.context, n3, this.tag, {
          color: e2,
          hoverColor: t2,
          disabled: i2
        }), d2 = new h(new y(75e-4, 75e-4, 0.5, 3), n3), d2.renderOrder = 1 / 0, d2.position.y = 0.25, f2.add(d2);
      }
      let p2 = new me();
      p2.visible = false, p2.rotation.copy(a2), p2.position.x = this.invert ? -0.3 : 0.3, this.add(p2);
      let g2 = new h(new y(0.2, 0, 0.5, 4));
      g2.pointerEventsOrder = 1 / 0, g2.position.y = 0.04, p2.add(g2);
      let v2 = i2 ? void 0 : this.context.registerHandle(this.store, g2, this.tag);
      return () => {
        s2.dispose(), g2.geometry.dispose(), l2.geometry.dispose(), d2 == null ? void 0 : d2.geometry.dispose(), v2 == null ? void 0 : v2(), c2 == null ? void 0 : c2(), u2 == null ? void 0 : u2(), f2 != null && this.remove(f2), this.remove(p2), this.remove(o2);
      };
    }
  }, Vd = class extends hd {
    constructor(e2, t2, n2 = ``) {
      super(e2, t2, n2, () => ({
        translate: `as-scale`,
        scale: this.options,
        rotate: false,
        multitouch: false
      }));
    }
    bind(e2, t2, n2) {
      let { options: r2, disabled: i2 } = gd(this.axis, n2);
      if (r2 === false) return;
      this.options = r2;
      let a2 = new _(ud), o2 = dd(this.context, a2, this.tag, {
        opacity: 0.5,
        hoverOpacity: 1,
        color: e2,
        hoverColor: t2,
        disabled: i2
      }), s2 = new h(new m(0.2, 0.2, 0.01), a2);
      s2.renderOrder = 1 / 0, s2.pointerEventsOrder = 1 / 0, s2.position.set(0.15, 0.15, 0);
      let c2 = i2 ? void 0 : this.context.registerHandle(this.store, s2, this.tag);
      return this.add(s2), () => {
        a2.dispose(), s2.geometry.dispose(), c2 == null ? void 0 : c2(), o2 == null ? void 0 : o2(), this.remove(s2);
      };
    }
  }, Hd = new T(0, 0, -Math.PI / 2), Ud = new T(0, 0, Math.PI / 2), Wd = class extends hd {
    constructor(e2, t2 = ``, n2, r2 = false) {
      super(e2, `xyz`, t2, () => ({
        scale: {
          uniform: true,
          ...this.options
        },
        rotate: false,
        translate: `as-scale`,
        multitouch: false
      }));
      __publicField(this, "actualAxis");
      __publicField(this, "invert");
      this.actualAxis = n2, this.invert = r2;
    }
    bind(e2, t2, n2) {
      let { options: r2, disabled: i2 } = gd(this.actualAxis, n2);
      if (r2 === false) return;
      this.options = r2;
      let a2 = this.invert ? Ud : Hd, o2 = new me();
      o2.position.x = this.invert ? -0.7 : 0.7, o2.rotation.copy(a2), this.add(o2);
      let s2 = new _(ud), c2 = dd(this.context, s2, this.tag, {
        color: e2,
        hoverColor: t2,
        opacity: 0.5,
        hoverOpacity: 1,
        disabled: i2
      }), l2 = new h(new m(0.08, 0.08, 0.08), s2);
      l2.renderOrder = 1 / 0, l2.rotation.copy(a2), o2.add(l2);
      let u2 = new h(new m(0.15, 0.15, 0.15), s2);
      u2.visible = false, u2.pointerEventsOrder = 1 / 0, u2.rotation.copy(a2), o2.add(u2);
      let d2 = i2 ? void 0 : this.context.registerHandle(this.store, u2, this.tag);
      return () => {
        s2.dispose(), l2.geometry.dispose(), d2 == null ? void 0 : d2(), c2 == null ? void 0 : c2(), this.remove(o2);
      };
    }
  }, Gd = new E(), Kd = class extends me {
    constructor(e2, t2, n2) {
      super();
      __publicField(this, "context");
      __publicField(this, "size");
      __publicField(this, "fixed");
      __publicField(this, "scaleX");
      __publicField(this, "scaleY");
      __publicField(this, "scaleZ");
      __publicField(this, "scaleNegX");
      __publicField(this, "scaleNegY");
      __publicField(this, "scaleNegZ");
      __publicField(this, "translationX");
      __publicField(this, "translationY");
      __publicField(this, "translationZ");
      __publicField(this, "translationNegX");
      __publicField(this, "translationNegY");
      __publicField(this, "translationNegZ");
      __publicField(this, "translationXY");
      __publicField(this, "translationYZ");
      __publicField(this, "translationXZ");
      this.context = e2, this.size = t2, this.fixed = n2, this.scaleX = new Wd(this.context, void 0, `x`), this.add(this.scaleX), this.scaleY = new Wd(this.context, void 0, `y`), this.scaleY.rotation.z = Math.PI / 2, this.add(this.scaleY), this.scaleZ = new Wd(this.context, void 0, `z`), this.scaleZ.rotation.y = -Math.PI / 2, this.add(this.scaleZ), this.scaleNegX = new Wd(this.context, void 0, `x`, true), this.add(this.scaleNegX), this.scaleNegY = new Wd(this.context, void 0, `y`, true), this.scaleNegY.rotation.z = Math.PI / 2, this.add(this.scaleNegY), this.scaleNegZ = new Wd(this.context, void 0, `z`, true), this.scaleNegZ.rotation.y = -Math.PI / 2, this.add(this.scaleNegZ), this.translationX = new Bd(this.context, `x`), this.add(this.translationX), this.translationY = new Bd(this.context, `y`), this.translationY.rotation.z = Math.PI / 2, this.add(this.translationY), this.translationZ = new Bd(this.context, `z`), this.translationZ.rotation.y = -Math.PI / 2, this.add(this.translationZ), this.translationNegX = new Bd(this.context, `x`, void 0, true, false), this.add(this.translationNegX), this.translationNegY = new Bd(this.context, `y`, void 0, true, false), this.translationNegY.rotation.z = Math.PI / 2, this.add(this.translationNegY), this.translationNegZ = new Bd(this.context, `z`, void 0, true, false), this.translationNegZ.rotation.y = -Math.PI / 2, this.add(this.translationNegZ), this.translationXY = new Vd(this.context, `xy`), this.add(this.translationXY), this.translationXZ = new Vd(this.context, `xz`), this.translationXZ.rotation.x = Math.PI / 2, this.add(this.translationXZ), this.translationYZ = new Vd(this.context, `yz`), this.translationYZ.rotation.y = -Math.PI / 2, this.add(this.translationYZ);
    }
    update(e2) {
      this.updateWorldMatrix(true, false), this.scale.setScalar(1);
      let t2 = this.context.getTarget();
      t2 != null && (t2.getWorldScale(Gd), this.scale.divide(Gd)), this.scale.multiplyScalar(yd(this, e2, this.fixed ?? true, this.size ?? 1));
    }
    bind(e2) {
      let t2 = this.scaleX.bind(16777215, 16776960, e2), n2 = this.scaleY.bind(16777215, 16776960, e2), r2 = this.scaleZ.bind(16777215, 16776960, e2), i2 = this.scaleNegX.bind(16777215, 16776960, e2), a2 = this.scaleNegY.bind(16777215, 16776960, e2), o2 = this.scaleNegZ.bind(16777215, 16776960, e2), s2 = this.translationX.bind(16711680, 16776960, e2), c2 = this.translationY.bind(65280, 16776960, e2), l2 = this.translationZ.bind(255, 16776960, e2), u2 = this.translationNegX.bind(16711680, 16776960, e2), d2 = this.translationNegY.bind(65280, 16776960, e2), f2 = this.translationNegZ.bind(255, 16776960, e2), p2 = this.translationXY.bind(255, 16776960, e2), m2 = this.translationYZ.bind(16711680, 16776960, e2), h2 = this.translationXZ.bind(65280, 16776960, e2);
      return () => {
        s2 == null ? void 0 : s2(), c2 == null ? void 0 : c2(), l2 == null ? void 0 : l2(), u2 == null ? void 0 : u2(), d2 == null ? void 0 : d2(), f2 == null ? void 0 : f2(), p2 == null ? void 0 : p2(), m2 == null ? void 0 : m2(), h2 == null ? void 0 : h2(), t2 == null ? void 0 : t2(), n2 == null ? void 0 : n2(), r2 == null ? void 0 : r2(), i2 == null ? void 0 : i2(), a2 == null ? void 0 : a2(), o2 == null ? void 0 : o2();
      };
    }
  }, qd = {
    x: {
      vector1: new E(0, 0, -1),
      vector2: new E(0, -1, 0),
      rotationOffset: new w(),
      axis: [
        1,
        0,
        0
      ]
    },
    y: {
      vector1: new E(0, 0, -1),
      vector2: new E(-1, 0, -1),
      rotationOffset: new w().setFromEuler(new T(0, 0, Math.PI / 2)),
      axis: [
        0,
        1,
        0
      ]
    },
    z: {
      vector1: new E(-1, 0, 0),
      vector2: new E(0, -1, 0),
      rotationOffset: new w().setFromEuler(new T(0, Math.PI / 2, 0)),
      axis: [
        0,
        0,
        1
      ]
    }
  }, Jd = new E(), Yd = new E(), Xd = new E(), Zd = new E(), Qd = new w(), $d = class extends hd {
    constructor(e2, t2, n2 = ``) {
      super(e2, t2, n2, () => ({
        scale: false,
        translate: `as-rotate`,
        rotate: [
          this.direction
        ],
        multitouch: false
      }));
      __publicField(this, "direction", new E(1, 0, 0));
    }
    update(e2) {
      let { rotationOffset: t2, vector1: n2, vector2: r2 } = qd[this.axis];
      e2.getWorldPosition(Jd), this.getWorldPosition(Yd).sub(Jd), Xd.copy(n2), Zd.copy(r2);
      let i2 = this.context.getTarget(), a2 = this.context.getSpace();
      a2 === `local` && i2 != null && (i2.getWorldQuaternion(Qd), Xd.applyQuaternion(Qd), Zd.applyQuaternion(Qd)), Zd.crossVectors(Xd, Zd);
      let o2 = Yd.dot(Zd);
      Zd.multiplyScalar(o2), Yd.sub(Zd), this.quaternion.setFromUnitVectors(Xd, Yd.normalize()), a2 === `local` && i2 != null && (i2.getWorldQuaternion(Qd), this.quaternion.multiply(Qd)), this.quaternion.multiply(t2), (i2 == null ? void 0 : i2.parent) == null ? Qd.identity() : (i2.parent.matrixWorld.decompose(Jd, Qd, Yd), Qd.invert(), this.quaternion.premultiply(Qd)), this.store.getState() ?? (this.direction.fromArray(qd[this.axis].axis), this.direction.applyQuaternion(a2 === `local` && i2 != null ? i2 == null ? void 0 : i2.quaternion : Qd)), i2 != null && this.quaternion.premultiply(Qd.copy(i2.quaternion).invert());
    }
    bind(e2, t2) {
      let { options: n2, disabled: r2 } = gd(this.axis, t2);
      if (n2 === false) return;
      this.options = n2;
      let i2 = new _(ud), a2 = dd(this.context, i2, this.tag, {
        color: e2,
        hoverColor: 16776960,
        disabled: r2
      }), o2 = new h(df(0.5, 0.5), i2);
      o2.renderOrder = 1 / 0, this.add(o2);
      let s2 = new h(new ge(0.5, 0.1, 4, 24));
      s2.visible = false, s2.pointerEventsOrder = 1 / 0, s2.rotation.set(0, -Math.PI / 2, -Math.PI / 2), this.add(s2);
      let c2 = r2 ? void 0 : this.context.registerHandle(this.store, s2, this.tag);
      return () => {
        i2.dispose(), s2.geometry.dispose(), o2.geometry.dispose(), c2 == null ? void 0 : c2(), a2 == null ? void 0 : a2(), this.remove(s2), this.remove(o2);
      };
    }
  }, ef = new E(), tf = new E(), nf = new E(1, 0, 0), rf = new w(), af = class extends hd {
    constructor(e2, t2 = ``) {
      super(e2, `xyz`, t2, () => ({
        scale: false,
        translate: `as-rotate`,
        rotate: this.options,
        multitouch: false
      }));
    }
    update(e2) {
      e2.getWorldPosition(ef), this.getWorldPosition(tf).sub(ef), this.quaternion.setFromUnitVectors(nf, tf.normalize());
      let t2 = this.context.getTarget();
      (t2 == null ? void 0 : t2.parent) != null && (t2.parent.matrixWorld.decompose(ef, rf, tf), rf.invert(), this.quaternion.premultiply(rf)), t2 != null && (rf.copy(t2.quaternion).invert(), this.quaternion.premultiply(rf));
    }
    bind(e2) {
      let { options: t2, disabled: n2 } = gd(this.axis, e2);
      if (t2 === false) return;
      this.options = t2;
      let r2 = new _(ud), i2 = dd(this.context, r2, this.tag, {
        color: 16777215,
        hoverColor: 16776960,
        opacity: 0.25,
        disabled: n2
      }), a2 = new h(df(0.5, 1), r2);
      a2.renderOrder = 1 / 0, this.add(a2);
      let o2 = new h(new pe(0.25, 10, 8));
      o2.visible = false, o2.pointerEventsOrder = 1 / 0, this.add(o2);
      let s2 = n2 ? void 0 : this.context.registerHandle(this.store, o2, this.tag);
      return () => {
        this.pointerEvents = `none`, r2.dispose(), o2.geometry.dispose(), a2.geometry.dispose(), s2 == null ? void 0 : s2(), i2 == null ? void 0 : i2(), this.remove(o2), this.remove(a2);
      };
    }
  }, of = new E(), sf = new E(), cf = new E(1, 0, 0), lf = new w(), uf = class extends hd {
    constructor(e2, t2 = ``) {
      super(e2, `e`, t2, () => ({
        scale: false,
        translate: `as-rotate`,
        rotate: [
          this.direction
        ],
        multitouch: false
      }));
      __publicField(this, "direction", new E(1, 0, 0));
    }
    update(e2) {
      e2.getWorldPosition(of), this.getWorldPosition(this.direction).sub(of).normalize(), this.quaternion.setFromUnitVectors(cf, this.direction);
      let t2 = this.context.getTarget();
      (t2 == null ? void 0 : t2.parent) != null && (t2.parent.matrixWorld.decompose(of, lf, sf), lf.invert(), this.quaternion.premultiply(lf), this.direction.applyQuaternion(lf)), t2 != null && (lf.copy(t2.quaternion).invert(), this.quaternion.premultiply(lf)), this.direction.negate();
    }
    bind(e2) {
      let { options: t2, disabled: n2 } = gd(this.axis, e2);
      if (t2 === false) return;
      this.options = t2;
      let r2 = new _(ud), i2 = dd(this.context, r2, this.tag, {
        color: 16776960,
        hoverColor: 16776960,
        opacity: 0.5,
        disabled: n2
      }), a2 = new h(df(0.75, 1), r2);
      a2.renderOrder = 1 / 0, this.add(a2);
      let o2 = new h(new ge(0.75, 0.1, 2, 24), new _({
        color: `white`
      }));
      o2.visible = false, o2.rotation.y = Math.PI / 2, o2.pointerEventsOrder = 1 / 0, this.add(o2);
      let s2 = n2 ? void 0 : this.context.registerHandle(this.store, o2, this.tag);
      return () => {
        r2.dispose(), o2.geometry.dispose(), a2.geometry.dispose(), s2 == null ? void 0 : s2(), i2 == null ? void 0 : i2(), this.remove(o2), this.remove(a2);
      };
    }
  };
  function df(e2, t2) {
    let n2 = new ge(e2, 75e-4, 3, 64, t2 * Math.PI * 2);
    return n2.rotateY(Math.PI / 2), n2.rotateX(Math.PI / 2), n2;
  }
  var ff = new E(), pf = class extends me {
    constructor(e2, t2, n2) {
      super();
      __publicField(this, "context");
      __publicField(this, "fixed");
      __publicField(this, "size");
      __publicField(this, "rotationX");
      __publicField(this, "rotationY");
      __publicField(this, "rotationZ");
      __publicField(this, "free");
      __publicField(this, "screen");
      this.context = e2, this.fixed = t2, this.size = n2, this.rotationX = new $d(this.context, `x`), this.add(this.rotationX), this.rotationY = new $d(this.context, `y`), this.add(this.rotationY), this.rotationZ = new $d(this.context, `z`), this.add(this.rotationZ), this.free = new af(this.context), this.add(this.free), this.screen = new uf(this.context), this.add(this.screen);
    }
    update(e2) {
      this.updateWorldMatrix(true, false), this.rotationX.update(e2), this.rotationY.update(e2), this.rotationZ.update(e2), this.free.update(e2), this.screen.update(e2), this.scale.setScalar(1);
      let t2 = this.context.getTarget();
      t2 != null && (t2.getWorldScale(ff), this.scale.divide(ff)), this.scale.multiplyScalar(yd(this, e2, this.fixed ?? true, this.size ?? 1));
    }
    bind(e2) {
      let t2 = this.rotationX.bind(16711680, e2), n2 = this.rotationY.bind(65280, e2), r2 = this.rotationZ.bind(255, e2), i2 = this.screen.bind(e2), a2 = this.free.bind(e2);
      return () => {
        t2 == null ? void 0 : t2(), n2 == null ? void 0 : n2(), r2 == null ? void 0 : r2(), i2 == null ? void 0 : i2(), a2 == null ? void 0 : a2();
      };
    }
  }, mf = new T(), hf = new T(0, 0, Math.PI / 2), gf = new T(0, -Math.PI / 2, 0), _f = class extends me {
    constructor(e2) {
      super();
      __publicField(this, "xAxisHighlight");
      __publicField(this, "yAxisHighlight");
      __publicField(this, "zAxisHighlight");
      __publicField(this, "handles");
      __publicField(this, "context");
      this.context = new ld(this, e2), this.xAxisHighlight = new md(this.context, mf), this.add(this.xAxisHighlight), this.yAxisHighlight = new md(this.context, hf), this.add(this.yAxisHighlight), this.zAxisHighlight = new md(this.context, gf), this.add(this.zAxisHighlight);
    }
    set space(e2) {
      this.context.space = e2;
    }
    get space() {
      return this.context.space;
    }
    update(e2, t2) {
      var _a2;
      this.context.update(e2), this.xAxisHighlight.update(), this.yAxisHighlight.update(), this.zAxisHighlight.update(), (_a2 = this.handles) == null ? void 0 : _a2.update(t2);
    }
    bind(e2, t2) {
      let n2 = this.xAxisHighlight.bind(`x`), r2 = this.yAxisHighlight.bind(`y`), i2 = this.zAxisHighlight.bind(`z`);
      switch (e2) {
        case `rotate`:
          this.handles = new pf(this.context);
          break;
        case `scale`:
          this.handles = new Kd(this.context);
          break;
        case `translate`:
          this.handles = new Ld(this.context);
      }
      this.add(this.handles);
      let a2 = this.handles.bind(t2);
      return () => {
        this.handles != null && this.remove(this.handles), this.handles = void 0, a2(), n2(), r2(), i2();
      };
    }
  };
  new E(0, 0, 1), new E(0, 1, 0), new E(), new E(), new T(), new w(), new E(), new w(), new w();
  var vf = class {
    constructor(e2) {
      __publicField(this, "nativeEvent");
      __publicField(this, "NONE", 0);
      __publicField(this, "CAPTURING_PHASE", 1);
      __publicField(this, "AT_TARGET", 2);
      __publicField(this, "BUBBLING_PHASE", 3);
      __publicField(this, "relatedTarget", null);
      this.nativeEvent = e2;
    }
    get altKey() {
      return this.getFromNative(`altKey`, false);
    }
    get button() {
      return this.getFromNative(`button`, 0);
    }
    get buttons() {
      return this.getFromNative(`buttons`, 0);
    }
    get clientX() {
      return this.getFromNative(`clientX`, 0);
    }
    get clientY() {
      return this.getFromNative(`clientY`, 0);
    }
    get ctrlKey() {
      return this.getFromNative(`ctrlKey`, false);
    }
    get layerX() {
      return this.getFromNative(`layerX`, 0);
    }
    get layerY() {
      return this.getFromNative(`layerY`, 0);
    }
    get metaKey() {
      return this.getFromNative(`metaKey`, false);
    }
    get movementX() {
      return this.getFromNative(`movementX`, 0);
    }
    get movementY() {
      return this.getFromNative(`movementY`, 0);
    }
    get offsetX() {
      return this.getFromNative(`offsetX`, 0);
    }
    get offsetY() {
      return this.getFromNative(`offsetY`, 0);
    }
    get pageX() {
      return this.getFromNative(`pageX`, 0);
    }
    get pageY() {
      return this.getFromNative(`pageY`, 0);
    }
    get screenX() {
      return this.getFromNative(`screenX`, 0);
    }
    get screenY() {
      return this.getFromNative(`screenY`, 0);
    }
    get shiftKey() {
      return this.getFromNative(`shiftKey`, false);
    }
    get x() {
      return this.getFromNative(`x`, 0);
    }
    get y() {
      return this.getFromNative(`y`, 0);
    }
    get detail() {
      return this.getFromNative(`detail`, 0);
    }
    get view() {
      return this.getFromNative(`view`, null);
    }
    get which() {
      return this.getFromNative(`which`, 0);
    }
    get cancelBubble() {
      return this.getFromNative(`cancelBubble`, false);
    }
    get composed() {
      return this.getFromNative(`composed`, false);
    }
    get eventPhase() {
      return this.getFromNative(`eventPhase`, 0);
    }
    get isTrusted() {
      return this.getFromNative(`isTrusted`, false);
    }
    get returnValue() {
      return this.getFromNative(`returnValue`, false);
    }
    get timeStamp() {
      return this.getFromNative(`timeStamp`, 0);
    }
    get cancelable() {
      return this.getFromNative(`cancelable`, false);
    }
    get defaultPrevented() {
      return this.getFromNative(`defaultPrevented`, false);
    }
    getFromNative(e2, t2) {
      return e2 in this.nativeEvent ? this.nativeEvent[e2] : t2;
    }
  }, yf = new E(), bf = class e2 extends vf {
    constructor(e3, t2, n2, r2, i2, a2, o2 = i2.object, s2 = o2, c2 = {
      stopped: !t2,
      stoppedImmediate: false
    }) {
      super(n2);
      __publicField(this, "type");
      __publicField(this, "bubbles");
      __publicField(this, "internalPointer");
      __publicField(this, "intersection");
      __publicField(this, "camera");
      __publicField(this, "currentObject");
      __publicField(this, "object");
      __publicField(this, "propagationState");
      __publicField(this, "_pointer");
      __publicField(this, "_ray");
      __publicField(this, "_intersections", []);
      __publicField(this, "_unprojectedPoint");
      this.type = e3, this.bubbles = t2, this.internalPointer = r2, this.intersection = i2, this.camera = a2, this.currentObject = o2, this.object = s2, this.propagationState = c2;
    }
    get pointerId() {
      return this.internalPointer.id;
    }
    get pointerType() {
      return this.internalPointer.type;
    }
    get pointerState() {
      return this.internalPointer.state;
    }
    get distance() {
      return this.intersection.distance;
    }
    get distanceToRay() {
      return this.intersection.distanceToRay;
    }
    get point() {
      return this.intersection.point;
    }
    get index() {
      return this.intersection.index;
    }
    get face() {
      return this.intersection.face;
    }
    get faceIndex() {
      return this.intersection.faceIndex;
    }
    get uv() {
      return this.intersection.uv;
    }
    get uv1() {
      return this.intersection.uv1;
    }
    get normal() {
      return this.intersection.normal;
    }
    get instanceId() {
      return this.intersection.instanceId;
    }
    get pointOnLine() {
      return this.intersection.pointOnLine;
    }
    get batchId() {
      return this.intersection.batchId;
    }
    get pointerPosition() {
      return this.intersection.pointerPosition;
    }
    get pointerQuaternion() {
      return this.intersection.pointerQuaternion;
    }
    get pointOnFace() {
      return this.intersection.pointOnFace;
    }
    get localPoint() {
      return this.intersection.localPoint;
    }
    get details() {
      return this.intersection.details;
    }
    get target() {
      return this.object;
    }
    get currentTarget() {
      return this.currentObject;
    }
    get eventObject() {
      return this.currentObject;
    }
    get srcElement() {
      return this.currentObject;
    }
    get pointer() {
      return this._pointer ?? (this._pointer = (yf.copy(this.intersection.point).project(this.camera), new c(yf.x, yf.y))), this._pointer;
    }
    get ray() {
      if (this._ray != null) return this._ray;
      switch (this.intersection.details.type) {
        case `screen-ray`:
        case `ray`:
        case `sphere`:
          return this._ray = new de(this.intersection.pointerPosition, new E(0, 0, -1).applyQuaternion(this.intersection.pointerQuaternion));
        case `lines`:
          return this._ray = new de(this.intersection.details.line.start, this.intersection.details.line.end.clone().sub(this.intersection.details.line.start).normalize());
      }
    }
    get intersections() {
      return this._intersections ?? (this._intersections = [
        {
          ...this.intersection,
          eventObject: this.currentObject
        }
      ]), this._intersections;
    }
    get unprojectedPoint() {
      if (this._unprojectedPoint == null) {
        let e3 = this.pointer;
        this._unprojectedPoint = new E(e3.x, e3.y, 0).unproject(this.camera);
      }
      return this._unprojectedPoint;
    }
    get stopped() {
      return this.propagationState.stoppedImmediate || this.propagationState.stopped;
    }
    get stoppedImmediate() {
      return this.propagationState.stoppedImmediate;
    }
    get delta() {
      throw Error(`not supported`);
    }
    stopPropagation() {
      this.propagationState.stopped = true;
    }
    stopImmediatePropagation() {
      this.propagationState.stoppedImmediate = true;
    }
    retarget(t2) {
      return new e2(this.type, this.bubbles, this.nativeEvent, this.internalPointer, this.intersection, this.camera, t2, this.target, this.propagationState);
    }
  }, xf = class e2 extends bf {
    get deltaX() {
      return this.nativeEvent.deltaX;
    }
    get deltaY() {
      return this.nativeEvent.deltaY;
    }
    get deltaZ() {
      return this.nativeEvent.deltaZ;
    }
    constructor(e3, t2, n2, r2, i2, a2) {
      super(`wheel`, true, e3, t2, n2, r2, i2, a2);
    }
    retarget(t2) {
      return new e2(this.nativeEvent, this.internalPointer, this.intersection, this.camera, t2, this.target);
    }
  };
  function Sf(e2) {
    Cf(e2, e2.currentObject);
  }
  function Cf(e2, t2) {
    if (t2 == null) return;
    let n2 = Ef(t2, e2.type);
    if (n2 != null && n2.length > 0) {
      let r2 = e2.retarget(t2), i2 = n2.length;
      for (let e3 = 0; e3 < i2 && !r2.stoppedImmediate; e3++) n2[e3](r2);
    }
    e2.stopped || Cf(e2, t2.parent);
  }
  var wf = {
    click: `onClick`,
    contextmenu: `onContextMenu`,
    dblclick: `onDoubleClick`,
    pointercancel: `onPointerCancel`,
    pointerdown: `onPointerDown`,
    pointerenter: `onPointerEnter`,
    pointerleave: `onPointerLeave`,
    pointermove: `onPointerMove`,
    pointerout: `onPointerOut`,
    pointerover: `onPointerOver`,
    pointerup: `onPointerUp`,
    wheel: `onWheel`
  }, Tf = Object.keys(wf);
  function Ef(e2, t2) {
    var _a2;
    if (e2._listeners != null && t2 in e2._listeners) return e2._listeners[t2];
    let n2;
    if (e2.isVoidObject && t2 === `click` && ((_a2 = e2.parent) == null ? void 0 : _a2.__r3f) != null && (n2 = e2.parent.__r3f.root.getState().onPointerMissed), e2.__r3f != null && (n2 = e2.__r3f.handlers[wf[t2]]), n2 != null) return [
      n2
    ];
  }
  var Df = new pe(1e10), Of = /* @__PURE__ */ new Map();
  function kf(e2) {
    let t2 = Of.get(e2);
    return t2 ?? (t2 = new h(Df), t2.isVoidObject = true, t2.parent = e2, t2.pointerEventsOrder = -1 / 0, Of.set(e2, t2)), t2;
  }
  function Af(e2, t2, n2) {
    var _a2;
    let r2 = t2.normal ?? ((_a2 = t2.face) == null ? void 0 : _a2.normal);
    return r2 != null && (e2.setFromNormalAndCoplanarPoint(r2, t2.localPoint), e2.applyMatrix4(n2), true);
  }
  function jf(e2, t2, n2) {
    if (t2 === `none` || t2 === `listener` && !e2) return false;
    if (n2 === `all`) return true;
    if (typeof n2 == `function`) return ({ id: e3, type: t3, state: r3 }) => n2(e3, t3, r3);
    let r2, i2;
    return `deny` in n2 ? (i2 = true, r2 = n2.deny) : (i2 = false, r2 = n2.allow), Array.isArray(r2) ? (e3) => Mf(r2.includes(e3.type), i2) : (e3) => Mf(r2 === e3.type, i2);
  }
  function Mf(e2, t2) {
    return t2 ? !e2 : e2;
  }
  function Nf(e2, t2, n2, r2 = false, i2, a2, o2) {
    let s2 = r2 || Pf(e2, t2), c2 = t2.pointerEvents ?? i2, l2 = c2 ?? t2.defaultPointerEvents ?? `listener`, u2 = t2.pointerEventsType ?? a2 ?? `all`, d2 = t2.pointerEventsOrder ?? o2 ?? 0, f2 = jf(s2, l2, u2), p2 = n2.length;
    if (p2 === 1) (f2 === true || typeof f2 == `function` && f2(n2[0])) && Ff(n2[0], t2, l2, u2, d2);
    else if (f2 === true) for (let e3 = 0; e3 < p2; e3++) Ff(n2[e3], t2, l2, u2, d2);
    else if (typeof f2 == `function`) for (let e3 = 0; e3 < p2; e3++) {
      let r3 = n2[e3];
      f2(r3) && Ff(r3, t2, l2, u2, d2);
    }
    if (t2.children.length === 0 || t2.intersectChildren === false) return;
    let m2 = t2.interactableDescendants ?? t2.children, h2 = m2.length;
    for (let t3 = 0; t3 < h2; t3++) Nf(e2, m2[t3], n2, s2, c2, u2, d2);
  }
  function Pf(e2, t2) {
    var _a2;
    if (t2.ancestorsHaveListeners || e2 === `pointer` && t2.ancestorsHavePointerListeners || e2 === `wheel` && t2.ancestorsHaveWheelListeners || t2.__r3f != null && ((_a2 = t2.__r3f) == null ? void 0 : _a2.eventCount) > 0 && (e2 === `wheel` && t2.__r3f.handlers.onWheel != null || e2 === `pointer` && Object.keys(t2.__r3f.handlers).some((e3) => e3 != `onWheel`))) return true;
    if (t2._listeners == null) return false;
    if (e2 === `wheel`) {
      let e3 = t2._listeners.wheel;
      return e3 != null && e3.length > 0;
    }
    let n2 = Object.entries(t2._listeners), r2 = n2.length;
    for (let e3 = 0; e3 < r2; e3++) {
      let t3 = n2[e3];
      if (t3[0] !== `wheel` && Tf.includes(t3[0]) && t3[1] != null && t3[1].length > 0) return true;
    }
    return false;
  }
  function Ff({ intersector: e2, options: t2 }, n2, r2, i2, a2) {
    var _a2;
    ((_a2 = t2.filter) == null ? void 0 : _a2.call(t2, n2, r2, i2, a2)) !== false && e2.executeIntersection(n2, a2);
  }
  function If(e2, t2, { customSort: n2 = Lf } = {}, r2) {
    let i2, a2, o2, s2 = e2.length;
    for (let c2 = 0; c2 < s2; c2++) {
      let s3 = e2[c2];
      if ((r2 == null ? void 0 : r2(s3)) === false) continue;
      let l2 = t2 == null ? void 0 : t2[c2];
      (i2 == null || n2(s3, l2, i2, a2) < 0) && (o2 = c2, i2 = s3, a2 = l2);
    }
    return o2;
  }
  function Lf(e2, t2 = 0, n2, r2 = 0) {
    return t2 == r2 ? e2.distance - n2.distance : r2 - t2;
  }
  var Rf = 1e7;
  function zf(e2, t2, n2, r2, i2, a2 = 0) {
    let o2 = t2.direction.clone().multiplyScalar(Rf), s2 = Rf;
    return {
      distance: s2 + a2,
      object: kf(e2),
      point: o2,
      normal: t2.origin.clone().sub(o2).normalize(),
      details: n2(o2, s2),
      pointerPosition: r2,
      pointerQuaternion: i2,
      pointOnFace: o2,
      localPoint: o2
    };
  }
  function Bf(e2, t2, n2) {
    for (; n2 > 0; ) e2.push(t2), --n2;
  }
  var Vf = Symbol(`buttonsDownTime`), Hf = Symbol(`buttonsClickTime`);
  globalThis.pointerEventspointerMap ?? (globalThis.pointerEventspointerMap = /* @__PURE__ */ new Map()), ee.prototype.setPointerCapture = function(e2) {
    var _a2;
    (_a2 = Uf(e2)) == null ? void 0 : _a2.setCapture(this);
  }, ee.prototype.releasePointerCapture = function(e2) {
    let t2 = Uf(e2);
    t2 != null && t2.hasCaptured(this) && t2.setCapture(void 0);
  }, ee.prototype.hasPointerCapture = function(e2) {
    var _a2;
    return ((_a2 = Uf(e2)) == null ? void 0 : _a2.hasCaptured(this)) ?? false;
  };
  function Uf(e2) {
    var _a2;
    return (_a2 = globalThis.pointerEventspointerMap) == null ? void 0 : _a2.get(e2);
  }
  var Wf = class {
    constructor(e2, t2, n2, r2, i2, a2, o2, s2, c2 = {}) {
      __publicField(this, "id");
      __publicField(this, "type");
      __publicField(this, "state");
      __publicField(this, "intersector");
      __publicField(this, "getCamera");
      __publicField(this, "onMoveCommited");
      __publicField(this, "parentSetPointerCapture");
      __publicField(this, "parentReleasePointerCapture");
      __publicField(this, "options");
      __publicField(this, "prevIntersection");
      __publicField(this, "intersection");
      __publicField(this, "prevEnabled", true);
      __publicField(this, "enabled", true);
      __publicField(this, "wheelIntersection");
      __publicField(this, "pointerEntered", []);
      __publicField(this, "pointerEnteredHelper", []);
      __publicField(this, "pointerCapture");
      __publicField(this, "buttonsDownTime", /* @__PURE__ */ new Map());
      __publicField(this, "buttonsDown", /* @__PURE__ */ new Set());
      __publicField(this, "wasMoved", false);
      __publicField(this, "onFirstMove", []);
      var _a2;
      this.id = e2, this.type = t2, this.state = n2, this.intersector = r2, this.getCamera = i2, this.onMoveCommited = a2, this.parentSetPointerCapture = o2, this.parentReleasePointerCapture = s2, this.options = c2, (_a2 = globalThis.pointerEventspointerMap) == null ? void 0 : _a2.set(e2, this);
    }
    getPointerCapture() {
      return this.pointerCapture;
    }
    hasCaptured(e2) {
      var _a2;
      return ((_a2 = this.pointerCapture) == null ? void 0 : _a2.object) === e2;
    }
    setCapture(e2) {
      var _a2, _b, _c2;
      ((_a2 = this.pointerCapture) == null ? void 0 : _a2.object) !== e2 && (this.pointerCapture != null && ((_b = this.parentReleasePointerCapture) == null ? void 0 : _b.call(this), this.pointerCapture = void 0), e2 != null && this.intersection != null && (this.pointerCapture = {
        object: e2,
        intersection: this.intersection
      }, (_c2 = this.parentSetPointerCapture) == null ? void 0 : _c2.call(this)));
    }
    getButtonsDown() {
      return this.buttonsDown;
    }
    getIntersection() {
      return this.intersection;
    }
    getEnabled() {
      return this.enabled;
    }
    setEnabled(e2, t2, n2 = true) {
      var _a2;
      this.enabled !== e2 && (!e2 && this.pointerCapture != null && ((_a2 = this.parentReleasePointerCapture) == null ? void 0 : _a2.call(this), this.pointerCapture = void 0), this.enabled = e2, n2 && this.commit(t2, false));
    }
    computeIntersection(e2, t2, n2) {
      return this.pointerCapture == null ? (this.intersector.startIntersection(n2), Nf(e2, t2, [
        this
      ]), this.intersector.finalizeIntersection(t2)) : this.intersector.intersectPointerCapture(this.pointerCapture, n2);
    }
    setIntersection(e2) {
      this.intersection = e2;
    }
    commit(e2, t2) {
      var _a2;
      let n2 = this.getCamera(), r2 = this.prevEnabled ? this.prevIntersection : void 0, i2 = this.enabled ? this.intersection : void 0;
      r2 != null && r2.object != (i2 == null ? void 0 : i2.object) && Sf(new bf(`pointerout`, true, e2, this, r2, n2));
      let a2 = this.pointerEntered;
      this.pointerEntered = [], this.pointerEnteredHelper.length = 0, Gf(i2 == null ? void 0 : i2.object, this.pointerEntered, a2, this.pointerEnteredHelper);
      let o2 = a2.length;
      for (let t3 = 0; t3 < o2; t3++) {
        let i3 = a2[t3];
        Sf(new bf(`pointerleave`, false, e2, this, r2, n2, i3));
      }
      i2 != null && (r2 == null ? void 0 : r2.object) != i2.object && Sf(new bf(`pointerover`, true, e2, this, i2, n2));
      for (let t3 = this.pointerEnteredHelper.length - 1; t3 >= 0; t3--) {
        let r3 = this.pointerEnteredHelper[t3];
        Sf(new bf(`pointerenter`, false, e2, this, i2, n2, r3));
      }
      if (t2 && i2 != null && Sf(new bf(`pointermove`, true, e2, this, i2, n2)), this.prevIntersection = this.intersection, this.prevEnabled = this.enabled, !this.wasMoved && this.intersector.isReady()) {
        this.wasMoved = true;
        let e3 = this.onFirstMove.length;
        for (let t3 = 0; t3 < e3; t3++) this.onFirstMove[t3](n2);
        this.onFirstMove.length = 0;
      }
      (_a2 = this.onMoveCommited) == null ? void 0 : _a2.call(this, this);
    }
    move(e2, t2) {
      this.intersection = this.computeIntersection(`pointer`, e2, t2), this.commit(t2, true);
    }
    over(e2, t2) {
      this.wasMoved || (this.intersection = this.computeIntersection(`pointer`, e2, t2), this.commit(t2, false));
    }
    emitMove(e2) {
      this.intersection != null && Sf(new bf(`pointermove`, true, e2, this, this.intersection, this.getCamera()));
    }
    down(e2) {
      if (this.buttonsDown.add(e2.button), !this.enabled) return;
      if (!this.wasMoved) {
        this.onFirstMove.push(this.down.bind(this, e2));
        return;
      }
      if (this.intersection == null) return;
      Sf(new bf(`pointerdown`, true, e2, this, this.intersection, this.getCamera()));
      let { object: t2 } = this.intersection;
      t2[Vf] ?? (t2[Vf] = /* @__PURE__ */ new Map()), t2[Vf].set(e2.button, e2.timeStamp), this.buttonsDownTime.set(e2.button, e2.timeStamp);
    }
    up(e2) {
      if (this.buttonsDown.delete(e2.button), !this.enabled) return;
      if (!this.wasMoved) {
        this.onFirstMove.push(this.up.bind(this, e2));
        return;
      }
      if (this.intersection == null) return;
      let { clickThesholdMs: t2, contextMenuButton: n2 = 2, dblClickThresholdMs: r2 = 500, clickThresholdMs: i2 = t2 ?? 300 } = this.options;
      this.pointerCapture = void 0;
      let a2 = Kf(this.buttonsDownTime, this.intersection.object[Vf], e2.button, e2.timeStamp, i2), o2 = this.getCamera();
      if (a2 && e2.button === n2 && Sf(new bf(`contextmenu`, true, e2, this, this.intersection, o2)), Sf(new bf(`pointerup`, true, e2, this, this.intersection, o2)), !a2 || e2.button === n2) return;
      Sf(new bf(`click`, true, e2, this, this.intersection, o2));
      let { object: s2 } = this.intersection, c2 = s2[Hf] ?? (s2[Hf] = /* @__PURE__ */ new Map()), l2 = c2.get(e2.button);
      l2 == null || e2.timeStamp - l2 > r2 ? c2.set(e2.button, e2.timeStamp) : (Sf(new bf(`dblclick`, true, e2, this, this.intersection, o2)), c2.delete(e2.button));
    }
    cancel(e2) {
      this.enabled && (this.wasMoved ? this.intersection != null && Sf(new bf(`pointercancel`, true, e2, this, this.intersection, this.getCamera())) : this.onFirstMove.push(this.cancel.bind(this, e2)));
    }
    wheel(e2, t2, n2 = false) {
      if (!this.enabled) return;
      if (!this.wasMoved && n2) {
        this.onFirstMove.push(this.wheel.bind(this, e2, t2, n2));
        return;
      }
      n2 || (this.wheelIntersection = this.computeIntersection(`wheel`, e2, t2));
      let r2 = n2 ? this.intersection : this.wheelIntersection;
      r2 != null && Sf(new xf(t2, this, r2, this.getCamera()));
    }
    emitWheel(e2, t2 = false) {
      if (!this.enabled) return;
      if (!this.wasMoved && t2) {
        this.onFirstMove.push(this.emitWheel.bind(this, e2, t2));
        return;
      }
      let n2 = t2 ? this.intersection : this.wheelIntersection;
      n2 != null && Sf(new xf(e2, this, n2, this.getCamera()));
    }
    exit(e2) {
      var _a2;
      this.wasMoved && (this.pointerCapture != null && ((_a2 = this.parentReleasePointerCapture) == null ? void 0 : _a2.call(this), this.pointerCapture = void 0), this.intersection = void 0, this.commit(e2, false)), this.onFirstMove.length = 0, this.wasMoved = false;
    }
  };
  function Gf(e2, t2, n2, r2) {
    if (e2 == null) return;
    let i2 = n2.indexOf(e2);
    i2 == -1 ? r2.push(e2) : n2.splice(i2, 1), t2.push(e2), Gf(e2.parent, t2, n2, r2);
  }
  function Kf(e2, t2, n2, r2, i2) {
    if (t2 == null) return false;
    let a2 = t2.get(n2);
    return !(a2 == null || r2 - a2 > i2 || a2 != e2.get(n2));
  }
  var qf = new ae(), Jf = new ae(), Yf = new c(), Xf = new c(), Zf = new c(), Qf = new E(), $f = new f(), ep = new E();
  function tp(e2, t2, n2) {
    ep.copy(t2).applyMatrix4($f.copy(n2.matrixWorld).invert());
    let r2 = n2.geometry.attributes.uv;
    if (r2 == null || !(r2 instanceof C)) return false;
    let i2;
    return np(n2, (e3, t3, a2) => {
      n2.getVertexPosition(e3, qf.a), n2.getVertexPosition(t3, qf.b), n2.getVertexPosition(a2, qf.c);
      let o2 = qf.closestPointToPoint(ep, Qf).distanceTo(ep);
      i2 != null && o2 >= i2 || (i2 = o2, Jf.copy(qf), Yf.fromBufferAttribute(r2, e3), Xf.fromBufferAttribute(r2, t3), Zf.fromBufferAttribute(r2, a2));
    }), i2 != null && (Jf.closestPointToPoint(ep, Qf), Jf.getInterpolation(Qf, Yf, Xf, Zf, e2), true);
  }
  function np(e2, t2) {
    let n2 = e2.geometry.drawRange;
    if (e2.geometry.index != null) {
      let r3 = e2.geometry.index, i3 = Math.max(0, n2.start), a3 = Math.min(r3.count, n2.start + n2.count);
      for (let e3 = i3; e3 < a3; e3 += 3) t2(r3.getX(e3), r3.getX(e3 + 1), r3.getX(e3 + 2));
      return;
    }
    let r2 = e2.geometry.attributes.position;
    if (r2 == null) return;
    let i2 = Math.max(0, n2.start), a2 = Math.min(r2.count, n2.start + n2.count);
    for (let e3 = i2; e3 < a2; e3 += 3) t2(e3, e3 + 1, e3 + 2);
  }
  new f(), new l(), new E(), new g(), new de(), new c(), new E(0, 0, 0), new E(0, 0, 1);
  var rp = new f(), ip = new E();
  new E(0, 0, -1), new g();
  var ap = new c(), op = new E(), sp = class {
    constructor(e2, t2) {
      __publicField(this, "prepareTransformation");
      __publicField(this, "options");
      __publicField(this, "raycaster", new ke());
      __publicField(this, "cameraQuaternion", new w());
      __publicField(this, "fromPosition", new E());
      __publicField(this, "fromQuaternion", new w());
      __publicField(this, "coords", new c());
      __publicField(this, "viewPlane", new g());
      __publicField(this, "intersects", []);
      __publicField(this, "pointerEventsOrders", []);
      this.prepareTransformation = e2, this.options = t2;
    }
    isReady() {
      return true;
    }
    intersectPointerCapture({ intersection: e2, object: t2 }, n2) {
      let r2 = e2.details;
      if (r2.type != `screen-ray`) throw Error(`unable to process a pointer capture of type "${e2.details.type}" with a camera ray intersector`);
      if (!this.startIntersection(n2)) return e2;
      this.viewPlane.constant -= r2.distanceViewPlane;
      let i2 = this.raycaster.ray.intersectPlane(this.viewPlane, new E());
      if (i2 == null) return e2;
      e2.object.updateWorldMatrix(true, false), Af(this.viewPlane, e2, e2.object.matrixWorld);
      let a2 = e2.uv;
      return e2.object instanceof h && tp(ap, i2, e2.object) && (a2 = ap.clone()), {
        ...e2,
        details: {
          ...r2,
          direction: this.raycaster.ray.direction.clone(),
          screenPoint: this.coords.clone()
        },
        uv: a2,
        object: t2,
        point: i2,
        pointOnFace: i2,
        pointerPosition: this.raycaster.ray.origin.clone(),
        pointerQuaternion: this.cameraQuaternion.clone()
      };
    }
    startIntersection(e2) {
      let t2 = this.prepareTransformation(e2, this.coords);
      return t2 != null && (t2.updateWorldMatrix(true, false), t2.matrixWorld.decompose(this.fromPosition, this.fromQuaternion, ip), this.raycaster.setFromCamera(this.coords, t2), this.viewPlane.setFromNormalAndCoplanarPoint(t2.getWorldDirection(op), this.raycaster.ray.origin), true);
    }
    executeIntersection(e2, t2) {
      let n2 = this.intersects.length;
      e2.raycast(this.raycaster, this.intersects), Bf(this.pointerEventsOrders, t2, this.intersects.length - n2);
    }
    finalizeIntersection(e2) {
      let t2 = this.fromPosition.clone(), n2 = this.cameraQuaternion.clone(), r2 = this.raycaster.ray.direction.clone(), i2 = If(this.intersects, this.pointerEventsOrders, this.options), a2 = i2 == null ? void 0 : this.intersects[i2];
      return this.intersects.length = 0, this.pointerEventsOrders.length = 0, a2 == null ? zf(e2, this.raycaster.ray, (e3, t3) => ({
        type: `screen-ray`,
        distanceViewPlane: t3,
        screenPoint: this.coords.clone(),
        direction: r2
      }), t2, n2) : (a2.object.updateWorldMatrix(true, false), rp.copy(a2.object.matrixWorld).invert(), Object.assign(a2, {
        details: {
          type: `screen-ray`,
          distanceViewPlane: this.viewPlane.distanceToPoint(a2.point),
          screenPoint: this.coords.clone(),
          direction: r2
        },
        pointOnFace: a2.point,
        pointerPosition: t2,
        pointerQuaternion: n2,
        localPoint: a2.point.clone().applyMatrix4(rp)
      }));
    }
  };
  new E(), new c(), new f(), new E(), new w(), new g(), new ue(), new E(), new E(), new E(), new E(1e-4, 1e-4, 1e-4), new f();
  var cp = 23412;
  function lp() {
    return cp++;
  }
  function up(e2, t2, n2) {
    if (!(t2 instanceof globalThis.MouseEvent)) return n2.set(0, 0);
    let { width: r2, height: i2, top: a2, left: o2 } = e2.getBoundingClientRect(), s2 = t2.clientX - o2, c2 = t2.clientY - a2;
    return n2.set(s2 / r2 * 2 - 1, -(c2 / i2) * 2 + 1);
  }
  function dp(e2, t2, n2, r2) {
    return fp(e2, typeof t2 == `function` ? t2 : () => t2, n2, up.bind(null, e2), e2.setPointerCapture.bind(e2), (t3) => {
      e2.hasPointerCapture(t3) && e2.releasePointerCapture(t3);
    }, {
      pointerTypePrefix: `screen-`,
      ...r2
    });
  }
  function fp(e2, t2, n2, r2, i2, a2, o2 = {}) {
    let s2 = (o2 == null ? void 0 : o2.forwardPointerCapture) ?? true, c2 = /* @__PURE__ */ new Map(), l2 = o2.pointerTypePrefix ?? `forward-`, u2 = (e3, u3) => {
      let d3 = c2.get(e3.pointerId);
      return d3 ?? (d3 = new Wf(lp(), `${l2}${e3.pointerType}`, e3.pointerState, new sp((e4, n3) => (r2(e4, n3), t2()), o2), t2, void 0, s2 ? i2.bind(null, e3.pointerId) : void 0, s2 ? a2.bind(null, e3.pointerId) : void 0, o2), u3 != `move` && u3 != `wheel` && (d3.setIntersection(d3.computeIntersection(`pointer`, n2, e3)), d3.commit(e3, false)), c2.set(e3.pointerId, d3)), d3;
    }, d2 = /* @__PURE__ */ new Map(), f2 = /* @__PURE__ */ new Map(), p2 = [], m2 = [], h2 = (e3, t3, r3) => {
      switch (e3) {
        case `move`:
          r3.move(n2, t3);
          return;
        case `over`:
          r3.move(n2, t3);
          return;
        case `wheel`:
          r3.wheel(n2, t3);
          return;
        case `cancel`:
          r3.cancel(t3);
          return;
        case `down`:
          if (!pp(t3)) return;
          r3.down(t3);
          return;
        case `up`:
          if (!pp(t3)) return;
          r3.up(t3);
          return;
        case `exit`:
          f2.delete(r3), d2.delete(r3), r3.exit(t3);
          return;
      }
    }, g2 = (e3, t3) => {
      let n3 = u2(t3, e3);
      e3 === `move` && f2.set(n3, t3), e3 === `wheel` && d2.set(n3, t3), o2.batchEvents ?? true ? m2.push({
        type: e3,
        event: t3
      }) : h2(e3, t3, n3);
    }, _2 = g2.bind(null, `move`), v2 = g2.bind(null, `over`), y2 = g2.bind(null, `cancel`), b2 = g2.bind(null, `down`), x2 = g2.bind(null, `up`), S2 = g2.bind(null, `wheel`), C2 = g2.bind(null, `exit`);
    return e2.addEventListener(`pointermove`, _2), e2.addEventListener(`pointerover`, v2), e2.addEventListener(`pointercancel`, y2), e2.addEventListener(`pointerdown`, b2), e2.addEventListener(`pointerup`, x2), e2.addEventListener(`wheel`, S2), e2.addEventListener(`pointerleave`, C2), {
      destroy() {
        e2.removeEventListener(`pointermove`, _2), e2.removeEventListener(`pointerover`, v2), e2.removeEventListener(`pointercancel`, y2), e2.removeEventListener(`pointerdown`, b2), e2.removeEventListener(`pointerup`, x2), e2.removeEventListener(`wheel`, S2), e2.removeEventListener(`pointerleave`, C2), f2.clear(), d2.clear();
      },
      update() {
        let e3 = m2.length;
        for (let t3 = 0; t3 < e3; t3++) {
          let { type: e4, event: n3 } = m2[t3], r3 = u2(n3, e4);
          e4 === `move` && (p2.push(r3), f2.get(r3) != n3) ? r3.emitMove(n3) : e4 === `wheel` && d2.get(r3) != n3 ? r3.emitWheel(n3) : h2(e4, n3, r3);
        }
        if (m2.length = 0, o2.intersectEveryFrame ?? false) for (let [e4, t3] of f2.entries()) p2.includes(e4) || e4.move(n2, t3);
        p2.length = 0;
      }
    };
  }
  function pp(e2) {
    return e2.button != null;
  }
  new c(), new w(), new E(), new E(), new E(), new c(), new c(), new E(), new E(), new c(), new c(), new c(), new c(), new E(), new E();
  var mp = 2, hp = class {
    constructor(e2) {
      this.xrDevice = e2, this.combinedCameraPosition = new o(), this.isPointerLocked = false, this.vec3 = new o(), this.quat = new u(), this.keyState = {
        ShiftLeft: false,
        KeyW: false,
        KeyA: false,
        KeyS: false,
        KeyD: false,
        ArrowUp: false,
        ArrowDown: false
      }, this.lastTime = 0, this.scene = new be(), this.camera = new d(50, window.innerWidth / window.innerHeight, 0.1, 40), this.playerRig = new s(), this.cameraRig = new s(), this.scene.add(this.playerRig), this.playerRig.add(this.cameraRig), this.cameraRig.position.fromArray(e2.position.vec3), this.cameraRig.quaternion.fromArray(e2.quaternion.quat), this.cameraRig.add(this.camera), this.camera.position.x -= e2.ipd / 2;
      let t2 = new Me(new v(0.25, 0.27, 32), new x({
        color: 16777215,
        side: 0
      }));
      t2.rotateX(-Math.PI / 2), this.scene.add(t2), this.renderer = new ye({
        alpha: true
      }), this.renderer.setPixelRatio(window.devicePixelRatio), this.renderer.setSize(window.innerWidth, window.innerHeight), this.renderer.setClearColor(0, 0), this.renderer.domElement.style.position = `fixed`, this.renderer.domElement.style.top = `50vh`, this.renderer.domElement.style.left = `50vw`, this.renderer.domElement.style.transform = `translate(-50%, -50%)`, this.transformHandles = /* @__PURE__ */ new Map(), [
        `left`,
        `right`
      ].forEach((t3) => {
        let n2 = new _f();
        n2.scale.setScalar(0.1), n2.position.fromArray(e2.controllers[t3].position.vec3), n2.quaternion.fromArray(e2.controllers[t3].quaternion.quat), this.cameraRig.attach(n2), n2.userData = {
          defaultPosition: n2.position.toArray(),
          defaultQuaternion: n2.quaternion.toArray()
        }, n2.userData.setMode = (e3) => {
          var t4, r2;
          (r2 = (t4 = n2.userData).modeCleanup) == null || r2.call(t4), n2.userData.modeCleanup = n2.bind(e3), n2.userData.mode = e3;
        }, n2.userData.setMode(`translate`), n2.space = `local`, this.transformHandles.set(t3, n2), n2.addEventListener(`click`, () => {
          n2.userData.mode === `translate` ? n2.userData.setMode(`rotate`) : n2.userData.setMode(`translate`);
        });
      }), window.transformHandles = this.transformHandles, this.mouseMoveHandler = (t3) => {
        if (!this.isPointerLocked) return;
        let n2 = t3.movementX || t3.mozMovementX || t3.webkitMovementX || 0, r2 = t3.movementY || t3.mozMovementY || t3.webkitMovementY || 0;
        this.playerRig.rotation.y -= n2 * 2e-3, this.cameraRig.rotation.x -= r2 * 2e-3, e2.quaternion.copy(this.cameraRig.getWorldQuaternion(new u()));
      }, this.cameraRig.getWorldPosition(this.combinedCameraPosition), this.headsetDefaultPosition = this.cameraRig.position.clone(), this.headsetDefaultQuaternion = this.cameraRig.quaternion.clone(), this.forwardHtmlEvents = dp(this.renderer.domElement, () => this.camera, this.scene).update, document.addEventListener(`pointerlockchange`, this.pointerLockChangeHandler.bind(this), false), document.addEventListener(`mozpointerlockchange`, this.pointerLockChangeHandler.bind(this), false), document.addEventListener(`webkitpointerlockchange`, this.pointerLockChangeHandler.bind(this), false), document.addEventListener(`keydown`, this.keyDownHandler.bind(this), false), document.addEventListener(`keyup`, this.keyUpHandler.bind(this), false);
    }
    lockPointer() {
      this.renderer.domElement.requestPointerLock = this.renderer.domElement.requestPointerLock || this.renderer.domElement.mozRequestPointerLock || this.renderer.domElement.webkitRequestPointerLock, this.renderer.domElement.requestPointerLock();
    }
    pointerLockChangeHandler() {
      this.isPointerLocked = document.pointerLockElement === this.renderer.domElement || document.mozPointerLockElement === this.renderer.domElement || document.webkitPointerLockElement === this.renderer.domElement, this.isPointerLocked ? (document.addEventListener(`mousemove`, this.mouseMoveHandler, false), Object.values(this.transformHandles).forEach((e2) => {
        e2.visible = false;
      })) : (document.removeEventListener(`mousemove`, this.mouseMoveHandler, false), Object.values(this.transformHandles).forEach((e2) => {
        e2.visible = true;
      }));
    }
    keyDownHandler(e2) {
      let { keyState: t2 } = this;
      e2.code in t2 && (t2[e2.code] = true), t2.ShiftLeft && t2.ArrowUp && (this.cameraRig.position.y += 0.05), t2.ShiftLeft && t2.ArrowDown && (this.cameraRig.position.y -= 0.05);
    }
    keyUpHandler(e2) {
      let { keyState: t2 } = this;
      e2.code in t2 && (t2[e2.code] = false);
    }
    movePlayerRig(e2) {
      let { playerRig: t2, keyState: n2, vec3: r2 } = this;
      r2.set(+!!n2.KeyD - !!n2.KeyA, 0, +!!n2.KeyS - !!n2.KeyW), r2.lengthSq() > 0 && n2.ShiftLeft && (r2.normalize().multiplyScalar(mp * e2).applyQuaternion(t2.quaternion), t2.position.add(r2));
    }
    resetDeviceTransforms() {
      let { playerRig: e2, cameraRig: t2, transformHandles: n2 } = this;
      t2.position.copy(this.headsetDefaultPosition), t2.quaternion.copy(this.headsetDefaultQuaternion), e2.position.set(0, 0, 0), e2.quaternion.set(0, 0, 0, 1), n2.forEach((e3) => {
        e3.position.fromArray(e3.userData.defaultPosition), e3.quaternion.fromArray(e3.userData.defaultQuaternion);
      });
    }
    syncDeviceTransforms() {
      let { xrDevice: e2, cameraRig: t2, transformHandles: n2 } = this;
      e2.position.copy(t2.getWorldPosition(this.vec3)), e2.quaternion.copy(t2.getWorldQuaternion(this.quat)), n2.forEach((t3, n3) => {
        let r2 = e2.primaryInputMode === `controller` ? e2.controllers[n3] : e2.hands[n3];
        r2.position.copy(t3.getWorldPosition(this.vec3)), r2.quaternion.copy(t3.getWorldQuaternion(this.quat));
      });
    }
    renderScene(e2) {
      let t2 = this.xrDevice.fovy / Math.PI * 180, n2 = false;
      this.camera.fov !== t2 && (this.camera.fov = t2, n2 = true);
      let r2 = this.xrDevice.canvasDimensions;
      if (r2) {
        let e3 = this.renderer.domElement;
        (e3.width !== r2.width || e3.height !== r2.height) && (this.camera.aspect = r2.width / r2.height, this.renderer.setSize(r2.width, r2.height), n2 = true);
      }
      n2 && this.camera.updateProjectionMatrix(), this.isPointerLocked ? this.cameraRig.getWorldPosition(this.combinedCameraPosition) : (this.cameraRig.position.y = this.combinedCameraPosition.y, this.playerRig.position.x = this.combinedCameraPosition.x, this.playerRig.position.z = this.combinedCameraPosition.z), this.forwardHtmlEvents(), this.transformHandles.forEach((t3, n3) => {
        var _a2;
        let r3 = !!((_a2 = this.xrDevice.controllers[n3]) == null ? void 0 : _a2.connected);
        t3.visible = r3 && !this.isPointerLocked, r3 && t3.update(e2, this.camera);
      });
      let i2 = Math.min((e2 - this.lastTime) / 1e3, 0.1);
      this.movePlayerRig(i2), this.syncDeviceTransforms(), this.renderer.render(this.scene, this.camera), this.lastTime = e2;
    }
    get domElement() {
      return this.renderer.domElement;
    }
    dispose() {
      this.renderer.dispose(), document.removeEventListener(`pointerlockchange`, this.pointerLockChangeHandler.bind(this), false), document.removeEventListener(`mozpointerlockchange`, this.pointerLockChangeHandler.bind(this), false), document.removeEventListener(`webkitpointerlockchange`, this.pointerLockChangeHandler.bind(this), false), document.removeEventListener(`mousemove`, this.mouseMoveHandler, false), document.removeEventListener(`keydown`, this.keyDownHandler.bind(this), false), document.removeEventListener(`keyup`, this.keyUpHandler.bind(this), false);
    }
  }, gp = `1.1.1`, _p = e(n(), 1), vp = class {
    constructor(e2) {
      this.version = gp, e2.ipd = 0, Al.getState().setInputMode(e2.primaryInputMode), this.devUIContainer = document.createElement(`div`), this.devUIContainer.style.position = `fixed`, this.devUIContainer.style.width = `100vw`, this.devUIContainer.style.height = `100vh`, this.devUIContainer.style.top = `50vh`, this.devUIContainer.style.left = `50vw`, this.devUIContainer.style.transform = `translate(-50%, -50%)`, this.devUIContainer.style.pointerEvents = `none`;
      let t2 = this.devUIContainer.attachShadow({
        mode: `open`
      });
      this.inputLayer = new hp(e2), (0, _p.createRoot)(t2).render((0, D.jsx)(yp, {
        xrDevice: e2,
        inputLayer: this.inputLayer,
        shadowRoot: t2
      }));
      let n2 = () => {
        let t3 = document.createElement(`div`);
        document.body.appendChild(t3);
        let n3 = t3.attachShadow({
          mode: `open`
        });
        (0, _p.createRoot)(n3).render((0, D.jsx)(bp, {
          xrDevice: e2,
          shadowRoot: n3
        }));
      };
      document.body ? n2() : window.onload = n2;
    }
    render(e2) {
      this.inputLayer.renderScene(e2);
    }
    get devUICanvas() {
      return this.inputLayer.domElement;
    }
  }, yp = ({ xrDevice: e2, inputLayer: t2, shadowRoot: n2 }) => {
    let [r2, i2] = (0, M.useState)(false);
    return (0, M.useEffect)(() => {
      let e3 = () => {
        let e4 = document.pointerLockElement || document.mozPointerLockElement || document.webkitPointerLockElement;
        i2(!!e4);
      };
      return document.addEventListener(`pointerlockchange`, e3, false), document.addEventListener(`mozpointerlockchange`, e3, false), document.addEventListener(`webkitpointerlockchange`, e3, false), () => {
        document.removeEventListener(`pointerlockchange`, e3, false), document.removeEventListener(`mozpointerlockchange`, e3, false), document.removeEventListener(`webkitpointerlockchange`, e3, false);
      };
    }, []), (0, D.jsx)($s, {
      target: n2,
      disableCSSOMInjection: true,
      children: (0, D.jsxs)(`div`, {
        style: {
          width: `100vw`,
          height: `100vh`,
          display: `flex`,
          flexDirection: `column`,
          justifyContent: `space-between`,
          pointerEvents: `none`
        },
        children: [
          (0, D.jsx)(Ll, {
            xrDevice: e2,
            inputLayer: t2
          }),
          (0, D.jsx)(Bl, {
            xrDevice: e2,
            inputLayer: t2,
            pointerLocked: r2
          }),
          (0, D.jsx)(jl, {
            xrDevice: e2,
            inputLayer: t2,
            pointerLocked: r2
          })
        ]
      })
    });
  }, bp = ({ xrDevice: e2, shadowRoot: t2 }) => {
    let [n2, r2] = M.useState(e2.sessionOffered && !e2.activeSession);
    return M.useEffect(() => {
      setInterval(() => {
        r2(e2.sessionOffered && !e2.activeSession);
      }, 1e3);
    }, []), (0, D.jsx)($s, {
      target: t2,
      disableCSSOMInjection: true,
      children: (0, D.jsxs)(fc, {
        style: {
          zIndex: 899,
          position: `fixed`,
          top: n2 ? `8px` : `-30px`,
          display: `flex`,
          flexDirection: `row`,
          alignItems: `center`,
          justifyItems: `space-between`,
          left: `50vw`,
          transform: `translateX(-50%)`,
          transition: `all 0.2s ease-in-out`,
          paddingLeft: `5px`,
          gap: `3px`
        },
        children: [
          (0, D.jsx)(al, {
            size: 24
          }),
          (0, D.jsx)(pc, {
            onClick: () => {
              e2.grantOfferedSession();
            },
            style: {
              fontSize: `16px`
            },
            children: `Enter XR`
          })
        ]
      })
    });
  }, xp = typeof Float32Array < `u` ? Float32Array : Array;
  function Sp() {
    var e2 = new xp(9);
    return xp != Float32Array && (e2[1] = 0, e2[2] = 0, e2[3] = 0, e2[5] = 0, e2[6] = 0, e2[7] = 0), e2[0] = 1, e2[4] = 1, e2[8] = 1, e2;
  }
  function Cp() {
    var e2 = new xp(16);
    return xp != Float32Array && (e2[1] = 0, e2[2] = 0, e2[3] = 0, e2[4] = 0, e2[6] = 0, e2[7] = 0, e2[8] = 0, e2[9] = 0, e2[11] = 0, e2[12] = 0, e2[13] = 0, e2[14] = 0), e2[0] = 1, e2[5] = 1, e2[10] = 1, e2[15] = 1, e2;
  }
  function wp(e2) {
    var t2 = new xp(16);
    return t2[0] = e2[0], t2[1] = e2[1], t2[2] = e2[2], t2[3] = e2[3], t2[4] = e2[4], t2[5] = e2[5], t2[6] = e2[6], t2[7] = e2[7], t2[8] = e2[8], t2[9] = e2[9], t2[10] = e2[10], t2[11] = e2[11], t2[12] = e2[12], t2[13] = e2[13], t2[14] = e2[14], t2[15] = e2[15], t2;
  }
  function Tp(e2, t2) {
    return e2[0] = t2[0], e2[1] = t2[1], e2[2] = t2[2], e2[3] = t2[3], e2[4] = t2[4], e2[5] = t2[5], e2[6] = t2[6], e2[7] = t2[7], e2[8] = t2[8], e2[9] = t2[9], e2[10] = t2[10], e2[11] = t2[11], e2[12] = t2[12], e2[13] = t2[13], e2[14] = t2[14], e2[15] = t2[15], e2;
  }
  function Ep(e2) {
    return e2[0] = 1, e2[1] = 0, e2[2] = 0, e2[3] = 0, e2[4] = 0, e2[5] = 1, e2[6] = 0, e2[7] = 0, e2[8] = 0, e2[9] = 0, e2[10] = 1, e2[11] = 0, e2[12] = 0, e2[13] = 0, e2[14] = 0, e2[15] = 1, e2;
  }
  function Dp(e2, t2) {
    var n2 = t2[0], r2 = t2[1], i2 = t2[2], a2 = t2[3], o2 = t2[4], s2 = t2[5], c2 = t2[6], l2 = t2[7], u2 = t2[8], d2 = t2[9], f2 = t2[10], p2 = t2[11], m2 = t2[12], h2 = t2[13], g2 = t2[14], _2 = t2[15], v2 = n2 * s2 - r2 * o2, y2 = n2 * c2 - i2 * o2, b2 = n2 * l2 - a2 * o2, x2 = r2 * c2 - i2 * s2, S2 = r2 * l2 - a2 * s2, C2 = i2 * l2 - a2 * c2, ee2 = u2 * h2 - d2 * m2, te2 = u2 * g2 - f2 * m2, ne2 = u2 * _2 - p2 * m2, re2 = d2 * g2 - f2 * h2, w2 = d2 * _2 - p2 * h2, ie2 = f2 * _2 - p2 * g2, ae2 = v2 * ie2 - y2 * w2 + b2 * re2 + x2 * ne2 - S2 * te2 + C2 * ee2;
    return ae2 ? (ae2 = 1 / ae2, e2[0] = (s2 * ie2 - c2 * w2 + l2 * re2) * ae2, e2[1] = (i2 * w2 - r2 * ie2 - a2 * re2) * ae2, e2[2] = (h2 * C2 - g2 * S2 + _2 * x2) * ae2, e2[3] = (f2 * S2 - d2 * C2 - p2 * x2) * ae2, e2[4] = (c2 * ne2 - o2 * ie2 - l2 * te2) * ae2, e2[5] = (n2 * ie2 - i2 * ne2 + a2 * te2) * ae2, e2[6] = (g2 * b2 - m2 * C2 - _2 * y2) * ae2, e2[7] = (u2 * C2 - f2 * b2 + p2 * y2) * ae2, e2[8] = (o2 * w2 - s2 * ne2 + l2 * ee2) * ae2, e2[9] = (r2 * ne2 - n2 * w2 - a2 * ee2) * ae2, e2[10] = (m2 * S2 - h2 * b2 + _2 * v2) * ae2, e2[11] = (d2 * b2 - u2 * S2 - p2 * v2) * ae2, e2[12] = (s2 * te2 - o2 * re2 - c2 * ee2) * ae2, e2[13] = (n2 * re2 - r2 * te2 + i2 * ee2) * ae2, e2[14] = (h2 * y2 - m2 * x2 - g2 * v2) * ae2, e2[15] = (u2 * x2 - d2 * y2 + f2 * v2) * ae2, e2) : null;
  }
  function Op(e2, t2, n2) {
    var r2 = t2[0], i2 = t2[1], a2 = t2[2], o2 = t2[3], s2 = t2[4], c2 = t2[5], l2 = t2[6], u2 = t2[7], d2 = t2[8], f2 = t2[9], p2 = t2[10], m2 = t2[11], h2 = t2[12], g2 = t2[13], _2 = t2[14], v2 = t2[15], y2 = n2[0], b2 = n2[1], x2 = n2[2], S2 = n2[3];
    return e2[0] = y2 * r2 + b2 * s2 + x2 * d2 + S2 * h2, e2[1] = y2 * i2 + b2 * c2 + x2 * f2 + S2 * g2, e2[2] = y2 * a2 + b2 * l2 + x2 * p2 + S2 * _2, e2[3] = y2 * o2 + b2 * u2 + x2 * m2 + S2 * v2, y2 = n2[4], b2 = n2[5], x2 = n2[6], S2 = n2[7], e2[4] = y2 * r2 + b2 * s2 + x2 * d2 + S2 * h2, e2[5] = y2 * i2 + b2 * c2 + x2 * f2 + S2 * g2, e2[6] = y2 * a2 + b2 * l2 + x2 * p2 + S2 * _2, e2[7] = y2 * o2 + b2 * u2 + x2 * m2 + S2 * v2, y2 = n2[8], b2 = n2[9], x2 = n2[10], S2 = n2[11], e2[8] = y2 * r2 + b2 * s2 + x2 * d2 + S2 * h2, e2[9] = y2 * i2 + b2 * c2 + x2 * f2 + S2 * g2, e2[10] = y2 * a2 + b2 * l2 + x2 * p2 + S2 * _2, e2[11] = y2 * o2 + b2 * u2 + x2 * m2 + S2 * v2, y2 = n2[12], b2 = n2[13], x2 = n2[14], S2 = n2[15], e2[12] = y2 * r2 + b2 * s2 + x2 * d2 + S2 * h2, e2[13] = y2 * i2 + b2 * c2 + x2 * f2 + S2 * g2, e2[14] = y2 * a2 + b2 * l2 + x2 * p2 + S2 * _2, e2[15] = y2 * o2 + b2 * u2 + x2 * m2 + S2 * v2, e2;
  }
  function kp(e2, t2) {
    return e2[0] = 1, e2[1] = 0, e2[2] = 0, e2[3] = 0, e2[4] = 0, e2[5] = 1, e2[6] = 0, e2[7] = 0, e2[8] = 0, e2[9] = 0, e2[10] = 1, e2[11] = 0, e2[12] = t2[0], e2[13] = t2[1], e2[14] = t2[2], e2[15] = 1, e2;
  }
  function Ap(e2, t2, n2) {
    var r2 = n2[0], i2 = n2[1], a2 = n2[2], o2 = Math.sqrt(r2 * r2 + i2 * i2 + a2 * a2), s2, c2, l2;
    return o2 < 1e-6 ? null : (o2 = 1 / o2, r2 *= o2, i2 *= o2, a2 *= o2, s2 = Math.sin(t2), c2 = Math.cos(t2), l2 = 1 - c2, e2[0] = r2 * r2 * l2 + c2, e2[1] = i2 * r2 * l2 + a2 * s2, e2[2] = a2 * r2 * l2 - i2 * s2, e2[3] = 0, e2[4] = r2 * i2 * l2 - a2 * s2, e2[5] = i2 * i2 * l2 + c2, e2[6] = a2 * i2 * l2 + r2 * s2, e2[7] = 0, e2[8] = r2 * a2 * l2 + i2 * s2, e2[9] = i2 * a2 * l2 - r2 * s2, e2[10] = a2 * a2 * l2 + c2, e2[11] = 0, e2[12] = 0, e2[13] = 0, e2[14] = 0, e2[15] = 1, e2);
  }
  function jp(e2, t2, n2) {
    var r2 = t2[0], i2 = t2[1], a2 = t2[2], o2 = t2[3], s2 = r2 + r2, c2 = i2 + i2, l2 = a2 + a2, u2 = r2 * s2, d2 = r2 * c2, f2 = r2 * l2, p2 = i2 * c2, m2 = i2 * l2, h2 = a2 * l2, g2 = o2 * s2, _2 = o2 * c2, v2 = o2 * l2;
    return e2[0] = 1 - (p2 + h2), e2[1] = d2 + v2, e2[2] = f2 - _2, e2[3] = 0, e2[4] = d2 - v2, e2[5] = 1 - (u2 + h2), e2[6] = m2 + g2, e2[7] = 0, e2[8] = f2 + _2, e2[9] = m2 - g2, e2[10] = 1 - (u2 + p2), e2[11] = 0, e2[12] = n2[0], e2[13] = n2[1], e2[14] = n2[2], e2[15] = 1, e2;
  }
  function Mp(e2, t2) {
    return e2[0] = t2[12], e2[1] = t2[13], e2[2] = t2[14], e2;
  }
  function Np(e2, t2) {
    var n2 = t2[0], r2 = t2[1], i2 = t2[2], a2 = t2[4], o2 = t2[5], s2 = t2[6], c2 = t2[8], l2 = t2[9], u2 = t2[10];
    return e2[0] = Math.sqrt(n2 * n2 + r2 * r2 + i2 * i2), e2[1] = Math.sqrt(a2 * a2 + o2 * o2 + s2 * s2), e2[2] = Math.sqrt(c2 * c2 + l2 * l2 + u2 * u2), e2;
  }
  function Pp(e2, t2) {
    var n2 = new xp(3);
    Np(n2, t2);
    var r2 = 1 / n2[0], i2 = 1 / n2[1], a2 = 1 / n2[2], o2 = t2[0] * r2, s2 = t2[1] * i2, c2 = t2[2] * a2, l2 = t2[4] * r2, u2 = t2[5] * i2, d2 = t2[6] * a2, f2 = t2[8] * r2, p2 = t2[9] * i2, m2 = t2[10] * a2, h2 = o2 + u2 + m2, g2 = 0;
    return h2 > 0 ? (g2 = Math.sqrt(h2 + 1) * 2, e2[3] = 0.25 * g2, e2[0] = (d2 - p2) / g2, e2[1] = (f2 - c2) / g2, e2[2] = (s2 - l2) / g2) : o2 > u2 && o2 > m2 ? (g2 = Math.sqrt(1 + o2 - u2 - m2) * 2, e2[3] = (d2 - p2) / g2, e2[0] = 0.25 * g2, e2[1] = (s2 + l2) / g2, e2[2] = (f2 + c2) / g2) : u2 > m2 ? (g2 = Math.sqrt(1 + u2 - o2 - m2) * 2, e2[3] = (f2 - c2) / g2, e2[0] = (s2 + l2) / g2, e2[1] = 0.25 * g2, e2[2] = (d2 + p2) / g2) : (g2 = Math.sqrt(1 + m2 - o2 - u2) * 2, e2[3] = (s2 - l2) / g2, e2[0] = (f2 + c2) / g2, e2[1] = (d2 + p2) / g2, e2[2] = 0.25 * g2), e2;
  }
  function Fp(e2, t2, n2, r2) {
    var i2 = t2[0], a2 = t2[1], o2 = t2[2], s2 = t2[3], c2 = i2 + i2, l2 = a2 + a2, u2 = o2 + o2, d2 = i2 * c2, f2 = i2 * l2, p2 = i2 * u2, m2 = a2 * l2, h2 = a2 * u2, g2 = o2 * u2, _2 = s2 * c2, v2 = s2 * l2, y2 = s2 * u2, b2 = r2[0], x2 = r2[1], S2 = r2[2];
    return e2[0] = (1 - (m2 + g2)) * b2, e2[1] = (f2 + y2) * b2, e2[2] = (p2 - v2) * b2, e2[3] = 0, e2[4] = (f2 - y2) * x2, e2[5] = (1 - (d2 + g2)) * x2, e2[6] = (h2 + _2) * x2, e2[7] = 0, e2[8] = (p2 + v2) * S2, e2[9] = (h2 - _2) * S2, e2[10] = (1 - (d2 + m2)) * S2, e2[11] = 0, e2[12] = n2[0], e2[13] = n2[1], e2[14] = n2[2], e2[15] = 1, e2;
  }
  function Ip(e2, t2, n2, r2, i2) {
    var a2 = 1 / Math.tan(t2 / 2);
    if (e2[0] = a2 / n2, e2[1] = 0, e2[2] = 0, e2[3] = 0, e2[4] = 0, e2[5] = a2, e2[6] = 0, e2[7] = 0, e2[8] = 0, e2[9] = 0, e2[11] = -1, e2[12] = 0, e2[13] = 0, e2[15] = 0, i2 != null && i2 !== 1 / 0) {
      var o2 = 1 / (r2 - i2);
      e2[10] = (i2 + r2) * o2, e2[14] = 2 * i2 * r2 * o2;
    } else e2[10] = -1, e2[14] = -2 * r2;
    return e2;
  }
  var Lp = Ip;
  function Rp() {
    var e2 = new xp(3);
    return xp != Float32Array && (e2[0] = 0, e2[1] = 0, e2[2] = 0), e2;
  }
  function zp(e2) {
    var t2 = e2[0], n2 = e2[1], r2 = e2[2];
    return Math.sqrt(t2 * t2 + n2 * n2 + r2 * r2);
  }
  function Bp(e2, t2, n2) {
    var r2 = new xp(3);
    return r2[0] = e2, r2[1] = t2, r2[2] = n2, r2;
  }
  function Vp(e2, t2) {
    return e2[0] = t2[0], e2[1] = t2[1], e2[2] = t2[2], e2;
  }
  function Hp(e2, t2, n2, r2) {
    return e2[0] = t2, e2[1] = n2, e2[2] = r2, e2;
  }
  function Up(e2, t2, n2) {
    return e2[0] = t2[0] + n2[0], e2[1] = t2[1] + n2[1], e2[2] = t2[2] + n2[2], e2;
  }
  function Wp(e2, t2) {
    var n2 = t2[0], r2 = t2[1], i2 = t2[2], a2 = n2 * n2 + r2 * r2 + i2 * i2;
    return a2 > 0 && (a2 = 1 / Math.sqrt(a2)), e2[0] = t2[0] * a2, e2[1] = t2[1] * a2, e2[2] = t2[2] * a2, e2;
  }
  function Gp(e2, t2) {
    return e2[0] * t2[0] + e2[1] * t2[1] + e2[2] * t2[2];
  }
  function Kp(e2, t2, n2) {
    var r2 = t2[0], i2 = t2[1], a2 = t2[2], o2 = n2[0], s2 = n2[1], c2 = n2[2];
    return e2[0] = i2 * c2 - a2 * s2, e2[1] = a2 * o2 - r2 * c2, e2[2] = r2 * s2 - i2 * o2, e2;
  }
  function qp(e2, t2, n2, r2) {
    var i2 = t2[0], a2 = t2[1], o2 = t2[2];
    return e2[0] = i2 + r2 * (n2[0] - i2), e2[1] = a2 + r2 * (n2[1] - a2), e2[2] = o2 + r2 * (n2[2] - o2), e2;
  }
  function Jp(e2, t2, n2) {
    var r2 = t2[0], i2 = t2[1], a2 = t2[2], o2 = n2[3] * r2 + n2[7] * i2 + n2[11] * a2 + n2[15];
    return o2 || (o2 = 1), e2[0] = (n2[0] * r2 + n2[4] * i2 + n2[8] * a2 + n2[12]) / o2, e2[1] = (n2[1] * r2 + n2[5] * i2 + n2[9] * a2 + n2[13]) / o2, e2[2] = (n2[2] * r2 + n2[6] * i2 + n2[10] * a2 + n2[14]) / o2, e2;
  }
  function Yp(e2, t2, n2) {
    var r2 = n2[0], i2 = n2[1], a2 = n2[2], o2 = n2[3], s2 = t2[0], c2 = t2[1], l2 = t2[2], u2 = i2 * l2 - a2 * c2, d2 = a2 * s2 - r2 * l2, f2 = r2 * c2 - i2 * s2;
    return u2 += u2, d2 += d2, f2 += f2, e2[0] = s2 + o2 * u2 + i2 * f2 - a2 * d2, e2[1] = c2 + o2 * d2 + a2 * u2 - r2 * f2, e2[2] = l2 + o2 * f2 + r2 * d2 - i2 * u2, e2;
  }
  var Xp = zp;
  (function() {
    var e2 = Rp();
    return function(t2, n2, r2, i2, a2, o2) {
      var s2, c2;
      for (n2 || (n2 = 3), r2 || (r2 = 0), c2 = i2 ? Math.min(i2 * n2 + r2, t2.length) : t2.length, s2 = r2; s2 < c2; s2 += n2) e2[0] = t2[s2], e2[1] = t2[s2 + 1], e2[2] = t2[s2 + 2], a2(e2, e2, o2), t2[s2] = e2[0], t2[s2 + 1] = e2[1], t2[s2 + 2] = e2[2];
      return t2;
    };
  })();
  function Zp() {
    var e2 = new xp(4);
    return xp != Float32Array && (e2[0] = 0, e2[1] = 0, e2[2] = 0, e2[3] = 0), e2;
  }
  function Qp(e2, t2, n2, r2) {
    var i2 = new xp(4);
    return i2[0] = e2, i2[1] = t2, i2[2] = n2, i2[3] = r2, i2;
  }
  function $p(e2, t2) {
    return e2[0] = t2[0], e2[1] = t2[1], e2[2] = t2[2], e2[3] = t2[3], e2;
  }
  function em(e2, t2, n2, r2, i2) {
    return e2[0] = t2, e2[1] = n2, e2[2] = r2, e2[3] = i2, e2;
  }
  function tm(e2, t2) {
    var n2 = t2[0], r2 = t2[1], i2 = t2[2], a2 = t2[3], o2 = n2 * n2 + r2 * r2 + i2 * i2 + a2 * a2;
    return o2 > 0 && (o2 = 1 / Math.sqrt(o2)), e2[0] = n2 * o2, e2[1] = r2 * o2, e2[2] = i2 * o2, e2[3] = a2 * o2, e2;
  }
  function nm(e2, t2, n2) {
    var r2 = t2[0], i2 = t2[1], a2 = t2[2], o2 = t2[3];
    return e2[0] = n2[0] * r2 + n2[4] * i2 + n2[8] * a2 + n2[12] * o2, e2[1] = n2[1] * r2 + n2[5] * i2 + n2[9] * a2 + n2[13] * o2, e2[2] = n2[2] * r2 + n2[6] * i2 + n2[10] * a2 + n2[14] * o2, e2[3] = n2[3] * r2 + n2[7] * i2 + n2[11] * a2 + n2[15] * o2, e2;
  }
  (function() {
    var e2 = Zp();
    return function(t2, n2, r2, i2, a2, o2) {
      var s2, c2;
      for (n2 || (n2 = 4), r2 || (r2 = 0), c2 = i2 ? Math.min(i2 * n2 + r2, t2.length) : t2.length, s2 = r2; s2 < c2; s2 += n2) e2[0] = t2[s2], e2[1] = t2[s2 + 1], e2[2] = t2[s2 + 2], e2[3] = t2[s2 + 3], a2(e2, e2, o2), t2[s2] = e2[0], t2[s2 + 1] = e2[1], t2[s2 + 2] = e2[2], t2[s2 + 3] = e2[3];
      return t2;
    };
  })();
  function rm() {
    var e2 = new xp(4);
    return xp != Float32Array && (e2[0] = 0, e2[1] = 0, e2[2] = 0), e2[3] = 1, e2;
  }
  function im(e2, t2, n2) {
    n2 *= 0.5;
    var r2 = Math.sin(n2);
    return e2[0] = r2 * t2[0], e2[1] = r2 * t2[1], e2[2] = r2 * t2[2], e2[3] = Math.cos(n2), e2;
  }
  function am(e2, t2, n2) {
    var r2 = t2[0], i2 = t2[1], a2 = t2[2], o2 = t2[3], s2 = n2[0], c2 = n2[1], l2 = n2[2], u2 = n2[3];
    return e2[0] = r2 * u2 + o2 * s2 + i2 * l2 - a2 * c2, e2[1] = i2 * u2 + o2 * c2 + a2 * s2 - r2 * l2, e2[2] = a2 * u2 + o2 * l2 + r2 * c2 - i2 * s2, e2[3] = o2 * u2 - r2 * s2 - i2 * c2 - a2 * l2, e2;
  }
  function om(e2, t2, n2, r2) {
    var i2 = t2[0], a2 = t2[1], o2 = t2[2], s2 = t2[3], c2 = n2[0], l2 = n2[1], u2 = n2[2], d2 = n2[3], f2, p2 = i2 * c2 + a2 * l2 + o2 * u2 + s2 * d2, m2, h2, g2;
    return p2 < 0 && (p2 = -p2, c2 = -c2, l2 = -l2, u2 = -u2, d2 = -d2), 1 - p2 > 1e-6 ? (f2 = Math.acos(p2), m2 = Math.sin(f2), h2 = Math.sin((1 - r2) * f2) / m2, g2 = Math.sin(r2 * f2) / m2) : (h2 = 1 - r2, g2 = r2), e2[0] = h2 * i2 + g2 * c2, e2[1] = h2 * a2 + g2 * l2, e2[2] = h2 * o2 + g2 * u2, e2[3] = h2 * s2 + g2 * d2, e2;
  }
  function sm(e2, t2) {
    return e2[0] = -t2[0], e2[1] = -t2[1], e2[2] = -t2[2], e2[3] = t2[3], e2;
  }
  function cm(e2, t2) {
    var n2 = t2[0] + t2[4] + t2[8], r2;
    if (n2 > 0) r2 = Math.sqrt(n2 + 1), e2[3] = 0.5 * r2, r2 = 0.5 / r2, e2[0] = (t2[5] - t2[7]) * r2, e2[1] = (t2[6] - t2[2]) * r2, e2[2] = (t2[1] - t2[3]) * r2;
    else {
      var i2 = 0;
      t2[4] > t2[0] && (i2 = 1), t2[8] > t2[i2 * 3 + i2] && (i2 = 2);
      var a2 = (i2 + 1) % 3, o2 = (i2 + 2) % 3;
      r2 = Math.sqrt(t2[i2 * 3 + i2] - t2[a2 * 3 + a2] - t2[o2 * 3 + o2] + 1), e2[i2] = 0.5 * r2, r2 = 0.5 / r2, e2[3] = (t2[a2 * 3 + o2] - t2[o2 * 3 + a2]) * r2, e2[a2] = (t2[a2 * 3 + i2] + t2[i2 * 3 + a2]) * r2, e2[o2] = (t2[o2 * 3 + i2] + t2[i2 * 3 + o2]) * r2;
    }
    return e2;
  }
  var lm = Qp, um = $p, dm = em, fm = tm;
  (function() {
    var e2 = Rp(), t2 = Bp(1, 0, 0), n2 = Bp(0, 1, 0);
    return function(r2, i2, a2) {
      var o2 = Gp(i2, a2);
      return o2 < -0.999999 ? (Kp(e2, t2, i2), Xp(e2) < 1e-6 && Kp(e2, n2, i2), Wp(e2, e2), im(r2, e2, Math.PI), r2) : o2 > 0.999999 ? (r2[0] = 0, r2[1] = 0, r2[2] = 0, r2[3] = 1, r2) : (Kp(e2, i2, a2), r2[0] = e2[0], r2[1] = e2[1], r2[2] = e2[2], r2[3] = 1 + o2, fm(r2, r2));
    };
  })(), (function() {
    var e2 = rm(), t2 = rm();
    return function(n2, r2, i2, a2, o2, s2) {
      return om(e2, r2, o2, s2), om(t2, i2, a2, s2), om(n2, e2, t2, 2 * s2 * (1 - s2)), n2;
    };
  })(), (function() {
    var e2 = Sp();
    return function(t2, n2, r2, i2) {
      return e2[0] = r2[0], e2[3] = r2[1], e2[6] = r2[2], e2[1] = i2[0], e2[4] = i2[1], e2[7] = i2[2], e2[2] = -n2[0], e2[5] = -n2[1], e2[8] = -n2[2], fm(t2, cm(t2, e2));
    };
  })();
  var V = Symbol(`@iwer/action-player`), pm = Symbol(`@iwer/xr-anchor`), mm = Symbol(`@iwer/xr-controller`), H = Symbol(`@iwer/xr-device`), hm = Symbol(`@iwer/xr-hand-input`), U = Symbol(`@iwer/xr-tracked-input`), W = Symbol(`@iwer/xr-frame`), G = Symbol(`@iwer/gamepad`), gm = Symbol(`@iwer/xr-system`), _m = Symbol(`@iwer/xr-input-source`), vm = Symbol(`@iwer/xr-webgl-layer`), ym = Symbol(`@iwer/xr-mesh`), bm = Symbol(`@iwer/xr-plane`), xm = Symbol(`@iwer/xr-joint-pose`), Sm = Symbol(`@iwer/xr-pose`), Cm = Symbol(`@iwer/xr-viewer-pose`), wm = Symbol(`@iwer/xr-rigid-transform`), Tm = Symbol(`@iwer/xr-render-state`), K = Symbol(`@iwer/xr-session`), Em = Symbol(`@iwer/xr-joint-space`), Dm = Symbol(`@iwer/xr-reference-space`), Om = Symbol(`@iwer/xr-space`), km = Symbol(`@iwer/xr-view`), Am = Symbol(`@iwer/xr-viewport`), jm = Symbol(`@iwer/xr-ray`), Mm = Symbol(`@iwer/xr-depth-info`), Nm = Symbol(`@iwer/xr-hit-test`), Pm = class extends EventTarget {
    constructor(e2, t2) {
      super(), this[Om] = {
        parentSpace: e2,
        offsetMatrix: t2 ? wp(t2) : Cp(),
        emulated: true
      };
    }
  }, Fm = class extends Pm {
    constructor() {
      super(void 0, Cp());
    }
  }, Im = class e2 {
    static updateOffsetPosition(e3, t2) {
      let n2 = e3[Om].offsetMatrix;
      kp(n2, t2);
    }
    static updateOffsetQuaternion(e3, t2) {
      let n2 = e3[Om].offsetMatrix, r2 = Rp();
      Mp(r2, n2), jp(n2, t2, r2);
    }
    static updateOffsetMatrix(e3, t2) {
      let n2 = e3[Om].offsetMatrix;
      Tp(n2, t2);
    }
    static calculateGlobalOffsetMatrix(t2, n2 = Cp()) {
      return Op(n2, t2[Om].parentSpace ? e2.calculateGlobalOffsetMatrix(t2[Om].parentSpace) : Cp(), t2[Om].offsetMatrix), n2;
    }
  }, Lm = class e2 {
    constructor(e3 = 0, t2 = 0, n2 = 0) {
      this.vec3 = Bp(e3, t2, n2), this.tempVec3 = Rp();
    }
    get x() {
      return this.vec3[0];
    }
    set x(e3) {
      this.vec3[0] = e3;
    }
    get y() {
      return this.vec3[1];
    }
    set y(e3) {
      this.vec3[1] = e3;
    }
    get z() {
      return this.vec3[2];
    }
    set z(e3) {
      this.vec3[2] = e3;
    }
    set(e3, t2, n2) {
      return Hp(this.vec3, e3, t2, n2), this;
    }
    clone() {
      return new e2(this.x, this.y, this.z);
    }
    copy(e3) {
      return this.x = e3.x, this.y = e3.y, this.z = e3.z, this;
    }
    round() {
      return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this;
    }
    normalize() {
      return Vp(this.tempVec3, this.vec3), Wp(this.vec3, this.tempVec3), this;
    }
    add(e3) {
      return Vp(this.tempVec3, this.vec3), Up(this.vec3, this.tempVec3, e3.vec3), this;
    }
    applyQuaternion(e3) {
      return Vp(this.tempVec3, this.vec3), Yp(this.vec3, this.tempVec3, e3.quat), this;
    }
  }, Rm = class e2 {
    constructor(e3 = 0, t2 = 0, n2 = 0, r2 = 1) {
      this.quat = lm(e3, t2, n2, r2), this.tempQuat = rm();
    }
    get x() {
      return this.quat[0];
    }
    set x(e3) {
      this.quat[0] = e3;
    }
    get y() {
      return this.quat[1];
    }
    set y(e3) {
      this.quat[1] = e3;
    }
    get z() {
      return this.quat[2];
    }
    set z(e3) {
      this.quat[2] = e3;
    }
    get w() {
      return this.quat[3];
    }
    set w(e3) {
      this.quat[3] = e3;
    }
    set(e3, t2, n2, r2) {
      return dm(this.quat, e3, t2, n2, r2), this;
    }
    clone() {
      return new e2(this.x, this.y, this.z, this.w);
    }
    copy(e3) {
      return dm(this.quat, e3.x, e3.y, e3.z, e3.w), this;
    }
    normalize() {
      return um(this.tempQuat, this.quat), fm(this.quat, this.tempQuat), this;
    }
    invert() {
      return um(this.tempQuat, this.quat), sm(this.quat, this.tempQuat), this;
    }
    multiply(e3) {
      return um(this.tempQuat, this.quat), am(this.quat, this.tempQuat, e3.quat), this;
    }
    setFromAxisAngle(e3, t2) {
      return im(this.quat, e3.vec3, t2), this;
    }
  };
  function zm(e2) {
    return {
      x: e2.x,
      y: e2.y,
      z: e2.z
    };
  }
  function Bm(e2) {
    return {
      x: e2.x,
      y: e2.y,
      z: e2.z,
      w: e2.w
    };
  }
  function Vm(e2) {
    let { x: t2, y: n2, z: r2, w: i2 } = e2, a2 = 180 / Math.PI, o2 = Math.max(-1, Math.min(1, 2 * (i2 * t2 - n2 * r2))), s2;
    s2 = Math.abs(o2) >= 1 ? Math.sign(o2) * Math.PI / 2 : Math.asin(o2);
    let c2 = 2 * (i2 * n2 + t2 * r2), l2 = 1 - 2 * (t2 * t2 + n2 * n2), u2 = Math.atan2(c2, l2), d2 = 2 * (i2 * r2 + t2 * n2), f2 = 1 - 2 * (t2 * t2 + r2 * r2), p2 = Math.atan2(d2, f2);
    return {
      pitch: s2 * a2,
      yaw: u2 * a2,
      roll: p2 * a2
    };
  }
  function Hm(e2) {
    let t2 = Math.PI / 180, n2 = (e2.pitch ?? 0) * t2, r2 = (e2.yaw ?? 0) * t2, i2 = (e2.roll ?? 0) * t2, a2 = Math.cos(n2 * 0.5), o2 = Math.sin(n2 * 0.5), s2 = Math.cos(r2 * 0.5), c2 = Math.sin(r2 * 0.5), l2 = Math.cos(i2 * 0.5), u2 = Math.sin(i2 * 0.5);
    return {
      w: a2 * s2 * l2 + o2 * c2 * u2,
      x: o2 * s2 * l2 + a2 * c2 * u2,
      y: a2 * c2 * l2 - o2 * s2 * u2,
      z: a2 * s2 * u2 - o2 * c2 * l2
    };
  }
  function Um(e2, t2) {
    let n2 = t2.x - e2.x, r2 = t2.y - e2.y, i2 = t2.z - e2.z, a2 = Math.sqrt(n2 * n2 + r2 * r2 + i2 * i2);
    return a2 === 0 ? {
      x: 0,
      y: 0,
      z: -1
    } : {
      x: n2 / a2,
      y: r2 / a2,
      z: i2 / a2
    };
  }
  function Wm(e2) {
    let t2 = Math.sqrt(e2.x * e2.x + e2.z * e2.z), n2 = 0;
    t2 > 1e-4 && (n2 = Math.atan2(-e2.x, -e2.z));
    let r2 = Math.atan2(e2.y, t2), i2 = 180 / Math.PI;
    return Hm({
      pitch: r2 * i2,
      yaw: n2 * i2,
      roll: 0
    });
  }
  function Gm(e2, t2 = {
    x: 0,
    y: 1,
    z: 0
  }) {
    let n2 = Math.sqrt(e2.x * e2.x + e2.y * e2.y + e2.z * e2.z);
    if (n2 === 0) return {
      x: 0,
      y: 0,
      z: 0,
      w: 1
    };
    let r2 = {
      x: e2.x / n2,
      y: e2.y / n2,
      z: e2.z / n2
    }, i2 = {
      x: r2.y * t2.z - r2.z * t2.y,
      y: r2.z * t2.x - r2.x * t2.z,
      z: r2.x * t2.y - r2.y * t2.x
    }, a2 = Math.sqrt(i2.x * i2.x + i2.y * i2.y + i2.z * i2.z);
    if (a2 === 0) {
      let e3 = {
        x: 1,
        y: 0,
        z: 0
      };
      i2.x = r2.y * e3.z - r2.z * e3.y, i2.y = r2.z * e3.x - r2.x * e3.z, i2.z = r2.x * e3.y - r2.y * e3.x;
      let t3 = Math.sqrt(i2.x * i2.x + i2.y * i2.y + i2.z * i2.z);
      i2.x /= t3, i2.y /= t3, i2.z /= t3;
    } else i2.x /= a2, i2.y /= a2, i2.z /= a2;
    let o2 = {
      x: i2.y * r2.z - i2.z * r2.y,
      y: i2.z * r2.x - i2.x * r2.z,
      z: i2.x * r2.y - i2.y * r2.x
    }, s2 = i2.x, c2 = o2.x, l2 = -r2.x, u2 = i2.y, d2 = o2.y, f2 = -r2.y, p2 = i2.z, m2 = o2.z, h2 = -r2.z, g2 = s2 + d2 + h2, _2, v2, y2, b2;
    if (g2 > 0) {
      let e3 = 0.5 / Math.sqrt(g2 + 1);
      _2 = 0.25 / e3, v2 = (m2 - f2) * e3, y2 = (l2 - p2) * e3, b2 = (u2 - c2) * e3;
    } else if (s2 > d2 && s2 > h2) {
      let e3 = 2 * Math.sqrt(1 + s2 - d2 - h2);
      _2 = (m2 - f2) / e3, v2 = 0.25 * e3, y2 = (c2 + u2) / e3, b2 = (l2 + p2) / e3;
    } else if (d2 > h2) {
      let e3 = 2 * Math.sqrt(1 + d2 - s2 - h2);
      _2 = (l2 - p2) / e3, v2 = (c2 + u2) / e3, y2 = 0.25 * e3, b2 = (f2 + m2) / e3;
    } else {
      let e3 = 2 * Math.sqrt(1 + h2 - s2 - d2);
      _2 = (u2 - c2) / e3, v2 = (l2 + p2) / e3, y2 = (f2 + m2) / e3, b2 = 0.25 * e3;
    }
    let x2 = Math.sqrt(v2 * v2 + y2 * y2 + b2 * b2 + _2 * _2);
    return x2 > 0 && (v2 /= x2, y2 /= x2, b2 /= x2, _2 /= x2), {
      x: v2,
      y: y2,
      z: b2,
      w: _2
    };
  }
  function Km(e2, t2 = 5e3) {
    return new Promise((n2, r2) => {
      let i2 = Date.now(), a2 = () => {
        e2() ? n2() : Date.now() - i2 > t2 ? r2(Error(`Timeout waiting for condition`)) : requestAnimationFrame(a2);
      };
      a2();
    });
  }
  function qm(e2) {
    return `pitch` in e2 || `yaw` in e2 || `roll` in e2;
  }
  function Jm(e2) {
    return qm(e2) ? Hm(e2) : e2;
  }
  function Ym(e2, t2, n2) {
    return e2 + (t2 - e2) * n2;
  }
  function Xm(e2, t2, n2) {
    return {
      x: Ym(e2.x, t2.x, n2),
      y: Ym(e2.y, t2.y, n2),
      z: Ym(e2.z, t2.z, n2)
    };
  }
  function Zm(e2, t2, n2) {
    let r2 = e2.x * t2.x + e2.y * t2.y + e2.z * t2.z + e2.w * t2.w, i2 = t2.x, a2 = t2.y, o2 = t2.z, s2 = t2.w;
    if (r2 < 0 && (r2 = -r2, i2 = -i2, a2 = -a2, o2 = -o2, s2 = -s2), r2 > 0.9995) {
      let t3 = {
        x: Ym(e2.x, i2, n2),
        y: Ym(e2.y, a2, n2),
        z: Ym(e2.z, o2, n2),
        w: Ym(e2.w, s2, n2)
      }, r3 = Math.sqrt(t3.x * t3.x + t3.y * t3.y + t3.z * t3.z + t3.w * t3.w);
      return {
        x: t3.x / r3,
        y: t3.y / r3,
        z: t3.z / r3,
        w: t3.w / r3
      };
    }
    let c2 = Math.acos(r2), l2 = c2 * n2, u2 = Math.sin(l2), d2 = Math.sin(c2), f2 = Math.cos(l2) - r2 * u2 / d2, p2 = u2 / d2;
    return {
      x: f2 * e2.x + p2 * i2,
      y: f2 * e2.y + p2 * a2,
      z: f2 * e2.z + p2 * o2,
      w: f2 * e2.w + p2 * s2
    };
  }
  var Qm = {
    right: `controller-right`,
    left: `controller-left`,
    "right-controller": `controller-right`,
    "left-controller": `controller-left`,
    "controllers.right": `controller-right`,
    "controllers.left": `controller-left`,
    rightController: `controller-right`,
    leftController: `controller-left`,
    "right-hand": `hand-right`,
    "left-hand": `hand-left`,
    "hands.right": `hand-right`,
    "hands.left": `hand-left`,
    rightHand: `hand-right`,
    leftHand: `hand-left`
  };
  function $m(e2) {
    return Qm[e2] ?? e2;
  }
  var eh = class e2 {
    constructor(e3) {
      this.commandQueue = [], this._isCaptured = false, this.releaseTimer = null, this.actionIdCounter = 0, this.RELEASE_TIMEOUT_MS = 3e4, this.device = e3;
    }
    generateActionId() {
      return `action_${++this.actionIdCounter}`;
    }
    get isCaptured() {
      return this._isCaptured;
    }
    get queueLength() {
      return this.commandQueue.length;
    }
    enqueueDiscrete(e3, t2) {
      return new Promise((n2, r2) => {
        let i2 = {
          type: `discrete`,
          id: this.generateActionId(),
          method: e3,
          params: t2,
          resolve: n2,
          reject: r2
        };
        this.commandQueue.push(i2);
      });
    }
    enqueueDuration(e3, t2, n2, r2, i2) {
      return new Promise((a2, o2) => {
        let s2 = {
          type: `duration`,
          id: this.generateActionId(),
          method: e3,
          params: t2,
          durationMs: n2,
          elapsedMs: 0,
          startState: r2,
          targetState: i2,
          resolve: a2,
          reject: o2
        };
        this.commandQueue.push(s2);
      });
    }
    update(e3) {
      if (this.commandQueue.length !== 0) {
        for (this.cancelReleaseTimer(), this._isCaptured || (this._isCaptured = true, this.device.controlMode = `programmatic`); this.commandQueue.length > 0; ) {
          let t2 = this.commandQueue[0];
          if (t2.type === `discrete`) {
            try {
              let e4 = this.executeDiscreteAction(t2);
              t2.resolve(e4);
            } catch (e4) {
              t2.reject(e4);
            }
            this.commandQueue.shift();
          } else if (t2.elapsedMs += e3, t2.elapsedMs >= t2.durationMs) {
            try {
              this.applyDurationFinalState(t2), t2.resolve(this.getDurationResult(t2));
            } catch (e4) {
              t2.reject(e4);
            }
            this.commandQueue.shift();
          } else {
            try {
              let e4 = t2.elapsedMs / t2.durationMs;
              this.applyDurationLerpState(t2, e4);
            } catch (e4) {
              t2.reject(e4), this.commandQueue.shift();
              continue;
            }
            break;
          }
        }
        this.device.notifyStateChange(), this.commandQueue.length === 0 && this.startReleaseTimer();
      }
    }
    startReleaseTimer() {
      this.cancelReleaseTimer(), this.releaseTimer = setTimeout(() => {
        this._isCaptured = false, this.device.controlMode = `manual`, this.releaseTimer = null;
      }, this.RELEASE_TIMEOUT_MS);
    }
    cancelReleaseTimer() {
      this.releaseTimer !== null && (clearTimeout(this.releaseTimer), this.releaseTimer = null);
    }
    getDeviceTransform(e3) {
      switch (e3) {
        case `headset`:
          return {
            position: zm(this.device.position),
            orientation: Bm(this.device.quaternion)
          };
        case `controller-left`: {
          let e4 = this.device.controllers.left;
          if (!e4) throw Error(`Left controller not available`);
          return {
            position: zm(e4.position),
            orientation: Bm(e4.quaternion)
          };
        }
        case `controller-right`: {
          let e4 = this.device.controllers.right;
          if (!e4) throw Error(`Right controller not available`);
          return {
            position: zm(e4.position),
            orientation: Bm(e4.quaternion)
          };
        }
        case `hand-left`: {
          let e4 = this.device.hands.left;
          if (!e4) throw Error(`Left hand not available`);
          return {
            position: zm(e4.position),
            orientation: Bm(e4.quaternion)
          };
        }
        case `hand-right`: {
          let e4 = this.device.hands.right;
          if (!e4) throw Error(`Right hand not available`);
          return {
            position: zm(e4.position),
            orientation: Bm(e4.quaternion)
          };
        }
        default:
          throw Error(`Unknown device: ${e3}`);
      }
    }
    setDeviceTransform(e3, t2, n2) {
      switch (e3) {
        case `headset`:
          t2 && this.device.position.set(t2.x, t2.y, t2.z), n2 && this.device.quaternion.set(n2.x, n2.y, n2.z, n2.w);
          break;
        case `controller-left`: {
          let e4 = this.device.controllers.left;
          if (!e4) throw Error(`Left controller not available`);
          t2 && e4.position.set(t2.x, t2.y, t2.z), n2 && e4.quaternion.set(n2.x, n2.y, n2.z, n2.w);
          break;
        }
        case `controller-right`: {
          let e4 = this.device.controllers.right;
          if (!e4) throw Error(`Right controller not available`);
          t2 && e4.position.set(t2.x, t2.y, t2.z), n2 && e4.quaternion.set(n2.x, n2.y, n2.z, n2.w);
          break;
        }
        case `hand-left`: {
          let e4 = this.device.hands.left;
          if (!e4) throw Error(`Left hand not available`);
          t2 && e4.position.set(t2.x, t2.y, t2.z), n2 && e4.quaternion.set(n2.x, n2.y, n2.z, n2.w);
          break;
        }
        case `hand-right`: {
          let e4 = this.device.hands.right;
          if (!e4) throw Error(`Right hand not available`);
          t2 && e4.position.set(t2.x, t2.y, t2.z), n2 && e4.quaternion.set(n2.x, n2.y, n2.z, n2.w);
          break;
        }
        default:
          throw Error(`Unknown device: ${e3}`);
      }
    }
    transformXROriginToGlobal(e3) {
      var _a2, _b;
      let t2 = this.device.activeSession;
      if (!t2) return e3;
      let n2 = (_a2 = t2[K]) == null ? void 0 : _a2.referenceSpaces;
      if (!n2 || n2.length === 0) return e3;
      let r2 = (_b = n2[0][Om]) == null ? void 0 : _b.offsetMatrix;
      if (!r2) return e3;
      let i2 = Bp(e3.x, e3.y, e3.z);
      return Jp(i2, i2, r2), {
        x: i2[0],
        y: i2[1],
        z: i2[2]
      };
    }
    getDeviceSelectValue(e3) {
      var _a2, _b, _c2, _d2;
      switch (e3) {
        case `controller-left`:
          return ((_a2 = this.device.controllers.left) == null ? void 0 : _a2.getButtonValue(`trigger`)) ?? 0;
        case `controller-right`:
          return ((_b = this.device.controllers.right) == null ? void 0 : _b.getButtonValue(`trigger`)) ?? 0;
        case `hand-left`:
          return ((_c2 = this.device.hands.left) == null ? void 0 : _c2.pinchValue) ?? 0;
        case `hand-right`:
          return ((_d2 = this.device.hands.right) == null ? void 0 : _d2.pinchValue) ?? 0;
        default:
          throw Error(`Unknown input device: ${e3}`);
      }
    }
    setDeviceSelectValue(e3, t2) {
      var n2, r2, i2, a2;
      switch (e3) {
        case `controller-left`:
          (n2 = this.device.controllers.left) == null || n2.updateButtonValue(`trigger`, t2);
          break;
        case `controller-right`:
          (r2 = this.device.controllers.right) == null || r2.updateButtonValue(`trigger`, t2);
          break;
        case `hand-left`:
          (i2 = this.device.hands.left) == null || i2.updatePinchValue(t2);
          break;
        case `hand-right`:
          (a2 = this.device.hands.right) == null || a2.updatePinchValue(t2);
          break;
        default:
          throw Error(`Unknown input device: ${e3}`);
      }
    }
    setDeviceConnected(e3, t2) {
      switch (e3) {
        case `controller-left`:
          this.device.controllers.left && (this.device.controllers.left.connected = t2);
          break;
        case `controller-right`:
          this.device.controllers.right && (this.device.controllers.right.connected = t2);
          break;
        case `hand-left`:
          this.device.hands.left && (this.device.hands.left.connected = t2);
          break;
        case `hand-right`:
          this.device.hands.right && (this.device.hands.right.connected = t2);
          break;
        default:
          throw Error(`Unknown input device: ${e3}`);
      }
    }
    executeDiscreteAction(e3) {
      let { method: t2, params: n2 } = e3;
      switch (t2) {
        case `get_session_status`:
          return this.executeGetSessionStatus();
        case `accept_session`:
          return this.executeAcceptSession();
        case `end_session`:
          return this.executeEndSession();
        case `get_transform`:
          return this.executeGetTransform(n2);
        case `set_transform`:
          return this.executeSetTransform(n2);
        case `look_at`:
          return this.executeLookAt(n2);
        case `set_input_mode`:
          return this.executeSetInputMode(n2);
        case `set_connected`:
          return this.executeSetConnected(n2);
        case `get_select_value`:
          return this.executeGetSelectValue(n2);
        case `set_select_value`:
          return this.executeSetSelectValue(n2);
        case `get_gamepad_state`:
          return this.executeGetGamepadState(n2);
        case `set_gamepad_state`:
          return this.executeSetGamepadState(n2);
        case `get_device_state`:
          return this.executeGetDeviceState();
        case `set_device_state`:
          return this.executeSetDeviceState(n2);
        case `capture_canvas`:
          return this.executeCaptureCanvas(n2);
        case `_select_press`: {
          let e4 = n2.device;
          this.setDeviceSelectValue(e4, 1);
          return;
        }
        case `_select_release`: {
          let e4 = n2.device;
          this.setDeviceSelectValue(e4, 0);
          return;
        }
        default:
          throw Error(`Unknown method: ${t2}`);
      }
    }
    executeGetSessionStatus() {
      let e3 = this.device.activeSession;
      return {
        deviceName: this.device.name,
        isRuntimeInstalled: true,
        sessionActive: !!e3,
        sessionOffered: this.device.sessionOffered,
        sessionMode: e3 ? e3.mode : null,
        enabledFeatures: e3 ? Array.from(e3.enabledFeatures || []) : [],
        visibilityState: this.device.visibilityState
      };
    }
    executeAcceptSession() {
      if (!this.device.sessionOffered) throw Error(`No session has been offered`);
      return this.device.grantOfferedSession(), {
        success: true
      };
    }
    executeEndSession() {
      let e3 = this.device.activeSession;
      if (!e3) throw Error(`No active session`);
      return e3.end(), {
        success: true
      };
    }
    executeGetTransform(e3) {
      let { device: t2 } = e3, n2 = this.getDeviceTransform(t2);
      return {
        device: t2,
        position: n2.position,
        orientation: n2.orientation,
        euler: Vm(n2.orientation)
      };
    }
    executeSetTransform(e3) {
      let { device: t2, position: n2, orientation: r2 } = e3, i2 = r2 ? Jm(r2) : void 0;
      this.setDeviceTransform(t2, n2, i2);
      let a2 = this.getDeviceTransform(t2);
      return {
        device: t2,
        position: a2.position,
        orientation: a2.orientation
      };
    }
    executeLookAt(e3) {
      let { device: t2, target: n2, moveToDistance: r2 } = e3, i2 = this.getDeviceTransform(t2), a2 = this.transformXROriginToGlobal(n2), o2 = Um(i2.position, a2), s2 = t2 === `headset` ? Wm(o2) : Gm(o2), c2;
      r2 !== void 0 && (c2 = {
        x: a2.x - o2.x * r2,
        y: a2.y - o2.y * r2,
        z: a2.z - o2.z * r2
      }), this.setDeviceTransform(t2, c2, s2);
      let l2 = this.getDeviceTransform(t2);
      return {
        device: t2,
        position: l2.position,
        orientation: l2.orientation
      };
    }
    executeSetInputMode(e3) {
      var _a2, _b, _c2, _d2;
      let { mode: t2 } = e3;
      this.device.primaryInputMode = t2;
      let n2 = [];
      return t2 === `controller` ? (((_a2 = this.device.controllers.left) == null ? void 0 : _a2.connected) && n2.push(`controller-left`), ((_b = this.device.controllers.right) == null ? void 0 : _b.connected) && n2.push(`controller-right`)) : (((_c2 = this.device.hands.left) == null ? void 0 : _c2.connected) && n2.push(`hand-left`), ((_d2 = this.device.hands.right) == null ? void 0 : _d2.connected) && n2.push(`hand-right`)), {
        mode: t2,
        activeDevices: n2
      };
    }
    executeSetConnected(e3) {
      let { device: t2, connected: n2 } = e3;
      return this.setDeviceConnected(t2, n2), {
        device: t2,
        connected: n2
      };
    }
    executeGetSelectValue(e3) {
      let { device: t2 } = e3;
      return {
        device: t2,
        value: this.getDeviceSelectValue(t2)
      };
    }
    executeSetSelectValue(e3) {
      let { device: t2, value: n2 } = e3;
      return this.setDeviceSelectValue(t2, n2), {
        device: t2,
        value: n2
      };
    }
    executeGetGamepadState(e3) {
      let { device: t2 } = e3, n2 = t2 === `controller-left` ? `left` : `right`, r2 = this.device.controllers[n2];
      if (!r2) throw Error(`Controller ${n2} not available`);
      let i2 = [
        `trigger`,
        `squeeze`,
        `thumbstick`,
        n2 === `left` ? `x-button` : `a-button`,
        n2 === `left` ? `y-button` : `b-button`,
        `thumbrest`
      ].map((e4, t3) => ({
        index: t3,
        name: e4.replace(`x-button`, `x`).replace(`y-button`, `y`).replace(`a-button`, `a`).replace(`b-button`, `b`),
        value: r2.getButtonValue(e4),
        touched: r2.getButtonTouched(e4),
        pressed: r2.getButtonValue(e4) > 0.5
      })), a2 = r2.getAxes(), o2 = [
        {
          index: 0,
          name: `thumbstick-x`,
          value: a2.x
        },
        {
          index: 1,
          name: `thumbstick-y`,
          value: a2.y
        }
      ];
      return {
        device: t2,
        connected: r2.connected,
        buttons: i2,
        axes: o2
      };
    }
    executeSetGamepadState(e3) {
      let { device: t2, buttons: n2, axes: r2 } = e3, i2 = t2 === `controller-left` ? `left` : `right`, a2 = this.device.controllers[i2];
      if (!a2) throw Error(`Controller ${i2} not available`);
      let o2 = 0, s2 = 0, c2 = [
        `trigger`,
        `squeeze`,
        `thumbstick`,
        i2 === `left` ? `x-button` : `a-button`,
        i2 === `left` ? `y-button` : `b-button`,
        `thumbrest`
      ];
      if (n2) for (let e4 of n2) {
        let t3 = c2[e4.index];
        t3 && (a2.updateButtonValue(t3, e4.value), e4.touched !== void 0 && a2.updateButtonTouch(t3, e4.touched), o2++);
      }
      if (r2) {
        let e4, t3;
        for (let n3 of r2) n3.index === 0 ? (e4 = n3.value, s2++) : n3.index === 1 && (t3 = n3.value, s2++);
        if (e4 !== void 0 || t3 !== void 0) {
          let n3 = a2.getAxes();
          a2.updateAxes(`thumbstick`, e4 ?? n3.x, t3 ?? n3.y);
        }
      }
      return {
        device: t2,
        buttonsSet: o2,
        axesSet: s2
      };
    }
    executeGetDeviceState() {
      var _a2, _b, _c2, _d2, _e2, _f2, _g2, _h2, _i2, _j, _k, _l2;
      return {
        headset: {
          position: zm(this.device.position),
          orientation: Bm(this.device.quaternion)
        },
        inputMode: this.device.primaryInputMode,
        controllers: {
          left: {
            connected: ((_a2 = this.device.controllers.left) == null ? void 0 : _a2.connected) ?? false,
            position: zm(((_b = this.device.controllers.left) == null ? void 0 : _b.position) ?? {
              x: 0,
              y: 0,
              z: 0
            }),
            orientation: Bm(((_c2 = this.device.controllers.left) == null ? void 0 : _c2.quaternion) ?? {
              x: 0,
              y: 0,
              z: 0,
              w: 1
            })
          },
          right: {
            connected: ((_d2 = this.device.controllers.right) == null ? void 0 : _d2.connected) ?? false,
            position: zm(((_e2 = this.device.controllers.right) == null ? void 0 : _e2.position) ?? {
              x: 0,
              y: 0,
              z: 0
            }),
            orientation: Bm(((_f2 = this.device.controllers.right) == null ? void 0 : _f2.quaternion) ?? {
              x: 0,
              y: 0,
              z: 0,
              w: 1
            })
          }
        },
        hands: {
          left: {
            connected: ((_g2 = this.device.hands.left) == null ? void 0 : _g2.connected) ?? false,
            position: zm(((_h2 = this.device.hands.left) == null ? void 0 : _h2.position) ?? {
              x: 0,
              y: 0,
              z: 0
            }),
            orientation: Bm(((_i2 = this.device.hands.left) == null ? void 0 : _i2.quaternion) ?? {
              x: 0,
              y: 0,
              z: 0,
              w: 1
            })
          },
          right: {
            connected: ((_j = this.device.hands.right) == null ? void 0 : _j.connected) ?? false,
            position: zm(((_k = this.device.hands.right) == null ? void 0 : _k.position) ?? {
              x: 0,
              y: 0,
              z: 0
            }),
            orientation: Bm(((_l2 = this.device.hands.right) == null ? void 0 : _l2.quaternion) ?? {
              x: 0,
              y: 0,
              z: 0,
              w: 1
            })
          }
        },
        stereoEnabled: this.device.stereoEnabled,
        fov: this.device.fovy * (180 / Math.PI)
      };
    }
    executeSetDeviceState(e3) {
      let { state: t2 } = e3;
      return t2 ? (t2.headset && (t2.headset.position && this.device.position.set(t2.headset.position.x, t2.headset.position.y, t2.headset.position.z), t2.headset.orientation && this.device.quaternion.set(t2.headset.orientation.x, t2.headset.orientation.y, t2.headset.orientation.z, t2.headset.orientation.w)), t2.inputMode !== void 0 && (this.device.primaryInputMode = t2.inputMode), t2.stereoEnabled !== void 0 && (this.device.stereoEnabled = t2.stereoEnabled), t2.fov !== void 0 && (this.device.fovy = t2.fov * (Math.PI / 180)), t2.controllers && (this.applyInputState(`controller-left`, t2.controllers.left), this.applyInputState(`controller-right`, t2.controllers.right)), t2.hands && (this.applyInputState(`hand-left`, t2.hands.left), this.applyInputState(`hand-right`, t2.hands.right))) : (this.device.position.set(0, 1.6, 0), this.device.quaternion.set(0, 0, 0, 1), this.device.primaryInputMode = `controller`, this.device.stereoEnabled = false, this.device.controllers.left && (this.device.controllers.left.position.set(-0.2, 1.4, -0.3), this.device.controllers.left.quaternion.set(0, 0, 0, 1), this.device.controllers.left.connected = true), this.device.controllers.right && (this.device.controllers.right.position.set(0.2, 1.4, -0.3), this.device.controllers.right.quaternion.set(0, 0, 0, 1), this.device.controllers.right.connected = true), this.device.hands.left && (this.device.hands.left.position.set(-0.15, 1.3, -0.4), this.device.hands.left.quaternion.set(0, 0, 0, 1), this.device.hands.left.connected = true), this.device.hands.right && (this.device.hands.right.position.set(0.15, 1.3, -0.4), this.device.hands.right.quaternion.set(0, 0, 0, 1), this.device.hands.right.connected = true)), {
        state: this.executeGetDeviceState()
      };
    }
    applyInputState(e3, t2) {
      t2 && (t2.connected !== void 0 && this.setDeviceConnected(e3, t2.connected), (t2.position || t2.orientation) && this.setDeviceTransform(e3, t2.position, t2.orientation));
    }
    executeCaptureCanvas(e3) {
      let { maxWidth: t2 = 800, format: n2 = `png`, quality: r2 = 0.92 } = e3, i2 = this.device.appCanvas;
      if (!i2) {
        let e4 = document.querySelectorAll(`canvas`);
        if (e4.length === 1) i2 = e4[0];
        else if (e4.length > 1) {
          let t3 = null, n3 = 0;
          e4.forEach((e5) => {
            let r3 = e5.getBoundingClientRect(), i3 = r3.width * r3.height;
            i3 > n3 && r3.width > 0 && r3.height > 0 && (n3 = i3, t3 = e5);
          }), i2 = t3;
        }
      }
      if (!i2) throw Error(`No canvas available. Either start an XR session or ensure an app canvas is in the DOM.`);
      let a2 = document.createElement(`canvas`), o2 = a2.getContext(`2d`);
      if (!o2) throw Error(`Failed to create canvas context`);
      let s2 = i2.height / i2.width, c2 = Math.min(i2.width, t2), l2 = Math.round(c2 * s2);
      a2.width = c2, a2.height = l2, o2.drawImage(i2, 0, 0, c2, l2);
      let u2 = `image/${n2}`;
      return {
        imageData: a2.toDataURL(u2, r2).split(`,`)[1],
        width: c2,
        height: l2,
        format: n2,
        timestamp: Date.now()
      };
    }
    applyDurationLerpState(e3, t2) {
      let { startState: n2, targetState: r2, params: i2 } = e3, a2 = i2.device, o2, s2;
      n2.position && r2.position && (o2 = Xm(n2.position, r2.position, t2)), n2.orientation && r2.orientation && (s2 = Zm(n2.orientation, r2.orientation, t2)), this.setDeviceTransform(a2, o2, s2);
    }
    applyDurationFinalState(e3) {
      let { targetState: t2, params: n2 } = e3, r2 = n2.device;
      this.setDeviceTransform(r2, t2.position, t2.orientation);
    }
    getDurationResult(e3) {
      let { params: t2, elapsedMs: n2 } = e3, r2 = t2.device, i2 = this.getDeviceTransform(r2);
      return {
        device: r2,
        position: i2.position,
        orientation: i2.orientation,
        actualDuration: n2 / 1e3
      };
    }
    activateCaptureMode() {
      this._isCaptured || (this._isCaptured = true, this.cancelReleaseTimer(), this.device.controlMode = `programmatic`), this.startReleaseTimer();
    }
    async dispatch(t2, n2 = {}) {
      if (typeof n2.device == `string` && (n2.device = $m(n2.device)), e2.IMMEDIATE_METHODS.has(t2)) return e2.ACTIVE_IMMEDIATE_METHODS.has(t2) && this.activateCaptureMode(), this.executeImmediateMethod(t2, n2);
      if (e2.SESSION_REQUIRED_METHODS.has(t2) && !this.device.activeSession) throw Error(`Cannot execute '${t2}': No active XR session. Use 'get_session_status' to check session state, and 'accept_session' to start a session.`);
      if (t2 === `animate_to`) {
        let e3 = n2, r2 = this.getDeviceTransform(e3.device), i2 = (e3.duration ?? 0.5) * 1e3, a2 = e3.orientation ? Jm(e3.orientation) : void 0, o2 = e3.position ? this.transformXROriginToGlobal(e3.position) : void 0;
        return this.enqueueDuration(t2, n2, i2, {
          position: e3.position ? r2.position : void 0,
          orientation: a2 ? r2.orientation : void 0
        }, {
          position: o2,
          orientation: a2
        });
      }
      if (t2 === `select`) {
        let e3 = n2;
        return this.executeSelectSequence(e3);
      }
      return this.enqueueDiscrete(t2, n2);
    }
    executeImmediateMethod(e3, t2) {
      switch (e3) {
        case `get_session_status`:
          return this.executeGetSessionStatus();
        case `accept_session`:
          return this.executeAcceptSession();
        case `end_session`:
          return this.executeEndSession();
        case `get_transform`:
          return this.executeGetTransform(t2);
        case `get_select_value`:
          return this.executeGetSelectValue(t2);
        case `get_gamepad_state`:
          return this.executeGetGamepadState(t2);
        case `get_device_state`:
          return this.executeGetDeviceState();
        case `capture_canvas`:
          return this.executeCaptureCanvas(t2);
        default:
          throw Error(`Unknown immediate method: ${e3}`);
      }
    }
    executeSelectSequence(e3) {
      let { device: t2, duration: n2 = 0.15 } = e3;
      return this.getDeviceSelectValue(t2), new Promise((e4, r2) => {
        let i2 = 0, a2 = () => {
          i2++, i2 === 3 && e4({
            device: t2,
            duration: n2
          });
        }, o2 = {
          type: `discrete`,
          id: this.generateActionId(),
          method: `_select_press`,
          params: {
            device: t2
          },
          resolve: a2,
          reject: r2
        }, s2 = {
          type: `duration`,
          id: this.generateActionId(),
          method: `_select_wait`,
          params: {
            device: t2
          },
          durationMs: n2 * 1e3,
          elapsedMs: 0,
          startState: {},
          targetState: {},
          resolve: a2,
          reject: r2
        }, c2 = {
          type: `discrete`,
          id: this.generateActionId(),
          method: `_select_release`,
          params: {
            device: t2
          },
          resolve: a2,
          reject: r2
        };
        this.commandQueue.push(o2, s2, c2);
      });
    }
    async acceptSession() {
      if (!this.device.sessionOffered) throw Error(`No session has been offered`);
      return this.device.grantOfferedSession(), await Km(() => !!this.device.activeSession, 5e3), {
        success: true
      };
    }
    forceRelease() {
      this.cancelReleaseTimer(), this._isCaptured = false, this.device.controlMode = `manual`;
      for (let e3 of this.commandQueue) e3.reject(Error(`Capture released`));
      this.commandQueue = [];
      for (let e3 of [
        `left`,
        `right`
      ]) {
        let t2 = this.device.controllers[e3];
        t2 && (t2.updateButtonValue(`trigger`, 0), t2.updateButtonValue(`squeeze`, 0));
      }
    }
  };
  eh.IMMEDIATE_METHODS = /* @__PURE__ */ new Set([
    `get_session_status`,
    `accept_session`,
    `end_session`,
    `get_transform`,
    `get_select_value`,
    `get_gamepad_state`,
    `get_device_state`,
    `capture_canvas`
  ]), eh.ACTIVE_IMMEDIATE_METHODS = /* @__PURE__ */ new Set([
    `accept_session`,
    `end_session`
  ]), eh.SESSION_REQUIRED_METHODS = /* @__PURE__ */ new Set([
    `set_transform`,
    `look_at`,
    `animate_to`,
    `set_input_mode`,
    `set_connected`,
    `set_select_value`,
    `select`,
    `set_gamepad_state`,
    `set_device_state`
  ]);
  var th;
  (function(e2) {
    e2.None = ``, e2.Standard = `standard`, e2.XRStandard = `xr-standard`;
  })(th || (th = {}));
  var nh = class {
    constructor(e2, t2) {
      this[G] = {
        type: e2,
        eventTrigger: t2,
        pressed: false,
        touched: false,
        value: 0,
        lastFrameValue: 0,
        pendingValue: null
      };
    }
    get pressed() {
      return this[G].type === `manual` ? this[G].pressed : this[G].value > 0;
    }
    get touched() {
      return this[G].type === `manual` ? this[G].touched : this[G].touched || this.pressed;
    }
    get value() {
      return this[G].value;
    }
  }, rh = class {
    constructor() {
      this.pressed = false, this.touched = false, this.value = 0;
    }
  }, ih = class {
    constructor(e2, t2 = ``, n2 = -1) {
      this[G] = {
        id: t2,
        index: n2,
        connected: false,
        timestamp: performance.now(),
        mapping: e2.mapping,
        buttonsMap: {},
        buttonsSequence: [],
        axesMap: {},
        axesSequence: [],
        hapticActuators: []
      }, e2.buttons.forEach((e3) => {
        e3 === null ? this[G].buttonsSequence.push(null) : (this[G].buttonsSequence.push(e3.id), this[G].buttonsMap[e3.id] = new nh(e3.type, e3.eventTrigger ?? null));
      }), e2.axes.forEach((e3) => {
        e3 === null ? this[G].axesSequence.push(null) : (this[G].axesSequence.push(e3.id + e3.type), this[G].axesMap[e3.id] || (this[G].axesMap[e3.id] = {
          x: 0,
          y: 0
        }));
      });
    }
    get id() {
      return this[G].id;
    }
    get index() {
      return this[G].index;
    }
    get connected() {
      return this[G].connected;
    }
    get timestamp() {
      return this[G].timestamp;
    }
    get mapping() {
      return this[G].mapping;
    }
    get axes() {
      let e2 = [];
      return this[G].axesSequence.forEach((t2) => {
        if (t2 === null) e2.push(null);
        else {
          let n2 = t2.substring(0, t2.length - 6), r2 = t2.substring(t2.length - 6);
          e2.push(r2 === `y-axis` ? this[G].axesMap[n2].y : this[G].axesMap[n2].x);
        }
      }), e2;
    }
    get buttons() {
      return this[G].buttonsSequence.map((e2) => e2 === null ? new rh() : this[G].buttonsMap[e2]);
    }
    get hapticActuators() {
      return this[G].hapticActuators;
    }
    get vibrationActuator() {
      return null;
    }
  }, ah;
  (function(e2) {
    e2.None = `none`, e2.Left = `left`, e2.Right = `right`;
  })(ah || (ah = {}));
  var oh;
  (function(e2) {
    e2.Gaze = `gaze`, e2.TrackedPointer = `tracked-pointer`, e2.Screen = `screen`, e2.TransientPointer = `transient-pointer`;
  })(oh || (oh = {}));
  var sh = class extends Array {
  }, ch = class {
    constructor(e2, t2, n2, r2, i2, a2, o2) {
      this[_m] = {
        handedness: e2,
        targetRayMode: t2,
        targetRaySpace: r2,
        gripSpace: a2,
        profiles: n2,
        gamepad: i2,
        hand: o2
      };
    }
    get handedness() {
      return this[_m].handedness;
    }
    get targetRayMode() {
      return this[_m].targetRayMode;
    }
    get targetRaySpace() {
      return this[_m].targetRaySpace;
    }
    get gripSpace() {
      return this[_m].gripSpace;
    }
    get profiles() {
      return this[_m].profiles;
    }
    get gamepad() {
      return this[_m].gamepad;
    }
    get hand() {
      return this[_m].hand;
    }
  }, lh = class extends Event {
    constructor(e2, t2) {
      if (super(e2, t2), !t2.frame) throw Error(`XRInputSourceEventInit.frame is required`);
      if (!t2.inputSource) throw Error(`XRInputSourceEventInit.inputSource is required`);
      this.frame = t2.frame, this.inputSource = t2.inputSource;
    }
  }, uh = {
    [ah.Left]: {
      position: new Lm(-0.25, 1.5, -0.4),
      quaternion: new Rm()
    },
    [ah.Right]: {
      position: new Lm(0.25, 1.5, -0.4),
      quaternion: new Rm()
    },
    [ah.None]: {
      position: new Lm(0.25, 1.5, -0.4),
      quaternion: new Rm()
    }
  }, dh = class {
    constructor(e2) {
      this[U] = {
        inputSource: e2,
        position: uh[e2.handedness].position.clone(),
        quaternion: uh[e2.handedness].quaternion.clone(),
        connected: true,
        lastFrameConnected: false,
        inputSourceChanged: true
      };
    }
    get position() {
      return this[U].position;
    }
    get quaternion() {
      return this[U].quaternion;
    }
    get inputSource() {
      return this[U].inputSource;
    }
    get connected() {
      return this[U].connected;
    }
    set connected(e2) {
      this[U].connected = e2, this[U].inputSource.gamepad[G].connected = e2;
    }
    onFrameStart(e2) {
      let t2 = this[U].inputSource.targetRaySpace;
      jp(t2[Om].offsetMatrix, this[U].quaternion.quat, this[U].position.vec3);
      let n2 = e2.session;
      this[U].inputSource.gamepad.buttons.forEach((t3) => {
        t3 instanceof nh && (t3[G].lastFrameValue = t3[G].value, t3[G].pendingValue != null && (t3[G].value = t3[G].pendingValue, t3[G].pendingValue = null), t3[G].eventTrigger != null && (t3[G].lastFrameValue === 0 && t3[G].value > 0 ? (n2.dispatchEvent(new lh(t3[G].eventTrigger, {
          frame: e2,
          inputSource: this[U].inputSource
        })), n2.dispatchEvent(new lh(t3[G].eventTrigger + `start`, {
          frame: e2,
          inputSource: this[U].inputSource
        }))) : t3[G].lastFrameValue > 0 && t3[G].value === 0 && n2.dispatchEvent(new lh(t3[G].eventTrigger + `end`, {
          frame: e2,
          inputSource: this[U].inputSource
        }))));
      }), this[U].inputSourceChanged = this.connected !== this[U].lastFrameConnected, this[U].lastFrameConnected = this.connected;
    }
  }, fh = class extends dh {
    constructor(e2, t2, n2) {
      if (!e2.layout[t2]) throw new DOMException(`Handedness not supported`, `InvalidStateError`);
      let r2 = new Pm(n2), i2 = e2.layout[t2].gripOffsetMatrix ? new Pm(r2, e2.layout[t2].gripOffsetMatrix) : void 0, a2 = [
        e2.profileId,
        ...e2.fallbackProfileIds
      ], o2 = new ch(t2, oh.TrackedPointer, a2, r2, new ih(e2.layout[t2].gamepad), i2);
      super(o2), this[mm] = {
        profileId: e2.profileId,
        gamepadConfig: e2.layout[t2].gamepad
      };
    }
    get gamepadConfig() {
      return this[mm].gamepadConfig;
    }
    get profileId() {
      return this[mm].profileId;
    }
    updateButtonValue(e2, t2) {
      if (t2 > 1 || t2 < 0) {
        console.warn(`Out-of-range value ${t2} provided for button ${e2}.`);
        return;
      }
      let n2 = this[U].inputSource.gamepad[G].buttonsMap[e2];
      if (n2) {
        if (n2[G].type === `binary` && t2 != 1 && t2 != 0) {
          console.warn(`Non-binary value ${t2} provided for binary button ${e2}.`);
          return;
        }
        n2[G].pendingValue = t2;
      } else console.warn(`Current controller does not have button ${e2}.`);
    }
    setButtonValueImmediate(e2, t2) {
      if (t2 > 1 || t2 < 0) {
        console.warn(`Out-of-range value ${t2} provided for button ${e2}.`);
        return;
      }
      let n2 = this[U].inputSource.gamepad[G].buttonsMap[e2];
      if (n2) {
        if (n2[G].type === `binary` && t2 != 1 && t2 != 0) {
          console.warn(`Non-binary value ${t2} provided for binary button ${e2}.`);
          return;
        }
        n2[G].value = t2, n2[G].pendingValue = t2;
      } else console.warn(`Current controller does not have button ${e2}.`);
    }
    updateButtonTouch(e2, t2) {
      let n2 = this[U].inputSource.gamepad[G].buttonsMap[e2];
      n2 ? n2[G].touched = t2 : console.warn(`Current controller does not have button ${e2}.`);
    }
    updateAxis(e2, t2, n2) {
      if (n2 > 1 || n2 < -1) {
        console.warn(`Out-of-range value ${n2} provided for ${e2} axes.`);
        return;
      }
      let r2 = this[U].inputSource.gamepad[G].axesMap[e2];
      r2 ? t2 === `x-axis` ? r2.x = n2 : t2 === `y-axis` && (r2.y = n2) : console.warn(`Current controller does not have ${e2} axes.`);
    }
    updateAxes(e2, t2, n2) {
      if (t2 > 1 || t2 < -1 || n2 > 1 || n2 < -1) {
        console.warn(`Out-of-range value x:${t2}, y:${n2} provided for ${e2} axes.`);
        return;
      }
      let r2 = this[U].inputSource.gamepad[G].axesMap[e2];
      r2 ? (r2.x = t2, r2.y = n2) : console.warn(`Current controller does not have ${e2} axes.`);
    }
    getButtonValue(e2) {
      let t2 = this[U].inputSource.gamepad[G].buttonsMap[e2];
      return t2 ? t2[G].pendingValue ?? t2.value : 0;
    }
    getButtonTouched(e2) {
      let t2 = this[U].inputSource.gamepad[G].buttonsMap[e2];
      return t2 ? t2.touched : false;
    }
    getAxes(e2 = `thumbstick`) {
      let t2 = this[U].inputSource.gamepad[G].axesMap[e2];
      return t2 ? {
        x: t2.x,
        y: t2.y
      } : {
        x: 0,
        y: 0
      };
    }
  }, ph = class {
    constructor(e2, t2, n2, r2, i2) {
      this[ym] = {
        nativeMesh: e2,
        frame: void 0,
        meshSpace: t2,
        vertices: n2,
        indices: r2,
        lastChangedTime: performance.now(),
        semanticLabel: i2
      };
    }
    get meshSpace() {
      return this[ym].meshSpace;
    }
    get vertices() {
      return this[ym].vertices;
    }
    get indices() {
      return this[ym].indices;
    }
    get lastChangedTime() {
      return this[ym].lastChangedTime;
    }
    get semanticLabel() {
      return this[ym].semanticLabel;
    }
  }, mh = class extends Set {
  }, hh = class {
    constructor(e2, t2, n2, r2) {
      this.transform = e2, this.vertices = t2, this.indices = n2, this.semanticLabel = r2;
    }
  }, q;
  (function(e2) {
    e2.Desk = `desk`, e2.Couch = `couch`, e2.Floor = `floor`, e2.Ceiling = `ceiling`, e2.Wall = `wall`, e2.Door = `door`, e2.Window = `window`, e2.Table = `table`, e2.Shelf = `shelf`, e2.Bed = `bed`, e2.Screen = `screen`, e2.Lamp = `lamp`, e2.Plant = `plant`, e2.WallArt = `wall art`, e2.GlobalMesh = `global mesh`, e2.Other = `other`;
  })(q || (q = {}));
  var gh;
  (function(e2) {
    e2.Horizontal = `horizontal`, e2.Vertical = `vertical`;
  })(gh || (gh = {}));
  var _h = {
    [q.Desk]: gh.Horizontal,
    [q.Couch]: gh.Horizontal,
    [q.Floor]: gh.Horizontal,
    [q.Ceiling]: gh.Horizontal,
    [q.Wall]: gh.Vertical,
    [q.Door]: gh.Vertical,
    [q.Window]: gh.Vertical,
    [q.Table]: gh.Horizontal,
    [q.Shelf]: gh.Horizontal,
    [q.Bed]: gh.Horizontal,
    [q.Screen]: gh.Horizontal,
    [q.Lamp]: gh.Horizontal,
    [q.Plant]: gh.Horizontal,
    [q.WallArt]: gh.Vertical
  }, vh = class {
    constructor(e2, t2, n2, r2) {
      this[bm] = {
        nativePlane: e2,
        frame: void 0,
        planeSpace: t2,
        polygon: n2,
        lastChangedTime: performance.now(),
        semanticLabel: r2,
        orientation: r2 ? _h[r2] : void 0
      };
    }
    get planeSpace() {
      return this[bm].planeSpace;
    }
    get polygon() {
      return this[bm].polygon;
    }
    get orientation() {
      return this[bm].orientation;
    }
    get lastChangedTime() {
      return this[bm].lastChangedTime;
    }
    get semanticLabel() {
      return this[bm].semanticLabel;
    }
  }, yh = class extends Set {
  }, bh = class {
    constructor(e2, t2, n2) {
      this.transform = e2, this.polygon = t2, this.semanticLabel = n2;
    }
  }, xh = class {
    constructor(e2, t2, n2, r2, i2, a2) {
      this[Mm] = {
        data: e2,
        width: t2,
        height: n2,
        normDepthBufferFromNormView: r2,
        rawValueToMeters: i2,
        dataFormat: a2
      };
    }
    get data() {
      return this[Mm].data;
    }
    get width() {
      return this[Mm].width;
    }
    get height() {
      return this[Mm].height;
    }
    get normDepthBufferFromNormView() {
      return this[Mm].normDepthBufferFromNormView;
    }
    get rawValueToMeters() {
      return this[Mm].rawValueToMeters;
    }
    getDepthInMeters(e2, t2) {
      let { width: n2, height: r2, rawValueToMeters: i2, data: a2, dataFormat: o2 } = this[Mm];
      if (e2 < 0 || e2 >= 1 || t2 < 0 || t2 >= 1) throw RangeError(`Normalized coordinates must be in [0, 1) range.`);
      let s2 = Math.floor(e2 * n2), c2 = Math.floor(t2 * r2);
      if (o2 === `float32`) return new Float32Array(a2)[c2 * n2 + s2] * i2;
      {
        let e3 = new Uint8Array(a2), t3 = (c2 * n2 + s2) * 2;
        return (e3[t3] + e3[t3 + 1] * 256) * i2;
      }
    }
  }, Sh = class {
    constructor(e2, t2) {
      this[pm] = {
        anchorSpace: e2,
        session: t2,
        deleted: false
      }, t2[K].trackedAnchors.add(this);
    }
    get anchorSpace() {
      if (this[pm].deleted) throw new DOMException(`XRAnchor has already been deleted.`, `InvalidStateError`);
      return this[pm].anchorSpace;
    }
    requestPersistentHandle() {
      return new Promise((e2, t2) => {
        if (this[pm].deleted) t2(new DOMException(`XRAnchor has already been deleted.`, `InvalidStateError`));
        else {
          let t3 = this[pm].session[K].persistentAnchors;
          for (let [n3, r2] of t3.entries()) if (r2 === this) {
            e2(n3);
            return;
          }
          let n2 = crypto.randomUUID();
          Th.createPersistentAnchor(this[pm].session, this, n2), e2(n2);
        }
      });
    }
    delete() {
      this[pm].deleted || (this[pm].anchorSpace = null, this[pm].deleted = true, this[pm].session[K].trackedAnchors.delete(this));
    }
  }, Ch = class extends Set {
  }, wh = `@immersive-web-emulation-runtime/persistent-anchors`, Th = class {
    static recoverPersistentAnchorsFromStorage(e2) {
      let t2 = JSON.parse(localStorage.getItem(wh) || `{}`);
      Object.entries(t2).forEach(([t3, n2]) => {
        let r2 = e2[K].device[H].globalSpace, i2 = new Sh(new Pm(r2, n2), e2);
        e2[K].persistentAnchors.set(t3, i2);
      });
    }
    static createPersistentAnchor(e2, t2, n2) {
      e2[K].trackedAnchors.add(t2), e2[K].persistentAnchors.set(n2, t2);
      let r2 = JSON.parse(localStorage.getItem(wh) || `{}`);
      r2[n2] = Array.from(t2[pm].anchorSpace[Om].offsetMatrix), localStorage.setItem(wh, JSON.stringify(r2));
    }
  }, Eh = class e2 {
    constructor(e3, t2) {
      let n2 = Bp(0, 0, 0), r2 = rm();
      this[wm] = {
        matrix: Cp(),
        position: e3 ? Bp(e3.x, e3.y, e3.z) : n2,
        orientation: t2 ? fm(rm(), lm(t2.x, t2.y, t2.z, t2.w)) : r2,
        inverse: null
      }, this.updateMatrix();
    }
    updateMatrix() {
      jp(this[wm].matrix, this[wm].orientation, this[wm].position);
    }
    get matrix() {
      return this[wm].matrix;
    }
    get position() {
      let e3 = this[wm].position;
      return new DOMPointReadOnly(e3[0], e3[1], e3[2], 1);
    }
    get orientation() {
      let e3 = this[wm].orientation;
      return new DOMPointReadOnly(e3[0], e3[1], e3[2], e3[3]);
    }
    get inverse() {
      if (!this[wm].inverse) {
        let t2 = Cp();
        if (!Dp(t2, this[wm].matrix)) throw Error(`Matrix is not invertible.`);
        let n2 = Rp();
        Mp(n2, t2);
        let r2 = rm();
        Pp(r2, t2), this[wm].inverse = new e2(new DOMPointReadOnly(n2[0], n2[1], n2[2], 1), new DOMPointReadOnly(r2[0], r2[1], r2[2], r2[3])), this[wm].inverse[wm].inverse = this;
      }
      return this[wm].inverse;
    }
  }, Dh = class {
    constructor(e2 = 0, t2 = 0, n2 = 0, r2 = 1) {
      this.x = e2, this.y = t2, this.z = n2, this.w = r2;
    }
  }, Oh = class {
    constructor(e2, t2) {
      let n2 = {
        x: 0,
        y: 0,
        z: 0,
        w: 1
      }, r2 = {
        x: 0,
        y: 0,
        z: -1,
        w: 0
      };
      if (e2 instanceof Eh) {
        let t3 = e2.matrix, i3 = em(Zp(), n2.x, n2.y, n2.z, n2.w), a2 = em(Zp(), r2.x, r2.y, r2.z, r2.w);
        nm(i3, i3, t3), nm(a2, a2, t3), n2.x = i3[0], n2.y = i3[1], n2.z = i3[2], n2.w = i3[3], r2.x = a2[0], r2.y = a2[1], r2.z = a2[2], r2.w = a2[3];
      } else if (e2 && (n2.x = e2.x, n2.y = e2.y, n2.z = e2.z, n2.w = e2.w), t2) {
        if (t2.x === 0 && t2.y === 0 && t2.z === 0 || t2.w !== 0) throw new DOMException(`Invalid direction value to construct XRRay`, `TypeError`);
        r2.x = t2.x, r2.y = t2.y, r2.z = t2.z, r2.w = t2.w;
      }
      let i2 = Math.sqrt(r2.x * r2.x + r2.y * r2.y + r2.z * r2.z) || 1;
      r2.x /= i2, r2.y /= i2, r2.z /= i2, this[jm] = {
        origin: new Dh(n2.x, n2.y, n2.z, n2.w),
        direction: new Dh(r2.x, r2.y, r2.z, r2.w),
        matrix: null
      };
    }
    get origin() {
      return this[jm].origin;
    }
    get direction() {
      return this[jm].direction;
    }
    get matrix() {
      if (this[jm].matrix) return this[jm].matrix;
      let e2 = Hp(Rp(), 0, 0, -1), t2 = Hp(Rp(), this[jm].origin.x, this[jm].origin.y, this[jm].origin.z), n2 = Hp(Rp(), this[jm].direction.x, this[jm].direction.y, this[jm].direction.z), r2 = Kp(Rp(), n2, e2), i2 = Gp(n2, e2), a2 = Cp();
      i2 > -1 && i2 < 1 ? Ap(a2, Math.acos(i2), r2) : i2 === -1 ? Ap(a2, Math.acos(i2), Hp(Rp(), 1, 0, 0)) : Ep(a2);
      let o2 = kp(Cp(), t2), s2 = Op(Cp(), o2, a2);
      return this[jm].matrix = new Float32Array(s2), this[jm].matrix;
    }
  }, kh = class {
    constructor(e2, t2) {
      this[Nm] = {
        session: e2,
        space: t2.space,
        offsetRay: t2.offsetRay ?? new Oh()
      };
    }
    cancel() {
      this[Nm].session[K].hitTestSources.delete(this);
    }
  }, Ah = class {
    constructor(e2, t2) {
      this[Nm] = {
        frame: e2,
        offsetSpace: t2
      };
    }
    getPose(e2) {
      return this[Nm].frame.getPose(this[Nm].offsetSpace, e2);
    }
    createAnchor() {
      return this[Nm].frame.createAnchor(new Eh(), this[Nm].offsetSpace);
    }
  }, jh = class extends Event {
    constructor(e2, t2) {
      if (super(e2, t2), !t2.session) throw Error(`XRInputSourcesChangeEventInit.session is required`);
      if (!t2.added) throw Error(`XRInputSourcesChangeEventInit.added is required`);
      if (!t2.removed) throw Error(`XRInputSourcesChangeEventInit.removed is required`);
      this.session = t2.session, this.added = t2.added, this.removed = t2.removed;
    }
  }, Mh, Nh;
  (function(e2) {
    e2.Viewer = `viewer`, e2.Local = `local`, e2.LocalFloor = `local-floor`, e2.BoundedFloor = `bounded-floor`, e2.Unbounded = `unbounded`;
  })(Nh || (Nh = {}));
  var Ph = class e2 extends Pm {
    constructor(e3, t2, n2) {
      super(t2, n2), this[Mh] = {
        type: null,
        onreset: () => {
        }
      }, this[Dm].type = e3;
    }
    get onreset() {
      return this[Dm].onreset ?? (() => {
      });
    }
    set onreset(e3) {
      this[Dm].onreset && this.removeEventListener(`reset`, this[Dm].onreset), this[Dm].onreset = e3, e3 && this.addEventListener(`reset`, e3);
    }
    getOffsetReferenceSpace(t2) {
      return new e2(this[Dm].type, this, t2);
    }
  };
  Mh = Dm;
  var Fh = class {
    constructor(e2 = {}, t2) {
      this[Tm] = {
        depthNear: e2.depthNear || (t2 == null ? void 0 : t2.depthNear) || 0.1,
        depthFar: e2.depthFar || (t2 == null ? void 0 : t2.depthFar) || 1e3,
        inlineVerticalFieldOfView: e2.inlineVerticalFieldOfView || (t2 == null ? void 0 : t2.inlineVerticalFieldOfView) || null,
        baseLayer: e2.baseLayer || (t2 == null ? void 0 : t2.baseLayer) || null
      };
    }
    get depthNear() {
      return this[Tm].depthNear;
    }
    get depthFar() {
      return this[Tm].depthFar;
    }
    get inlineVerticalFieldOfView() {
      return this[Tm].inlineVerticalFieldOfView;
    }
    get baseLayer() {
      return this[Tm].baseLayer;
    }
  }, Ih = class extends Event {
    constructor(e2, t2) {
      if (super(e2, t2), !t2.session) throw Error(`XRSessionEventInit.session is required`);
      this.session = t2.session;
    }
  }, J;
  (function(e2) {
    e2.None = `none`, e2.Left = `left`, e2.Right = `right`;
  })(J || (J = {}));
  var Lh = class {
    constructor(e2, t2, n2, r2) {
      this[km] = {
        eye: e2,
        projectionMatrix: t2,
        transform: n2,
        recommendedViewportScale: null,
        requestedViewportScale: 1,
        session: r2
      };
    }
    get eye() {
      return this[km].eye;
    }
    get projectionMatrix() {
      return this[km].projectionMatrix;
    }
    get transform() {
      return this[km].transform;
    }
    get recommendedViewportScale() {
      return this[km].recommendedViewportScale;
    }
    requestViewportScale(e2) {
      e2 === null || e2 <= 0 || e2 > 1 ? console.warn(`Invalid scale value. Scale must be > 0 and <= 1.`) : this[km].requestedViewportScale = e2;
    }
  }, Rh = class {
    constructor(e2, t2 = false, n2 = void 0, r2 = void 0) {
      this[Sm] = {
        transform: e2,
        emulatedPosition: t2,
        linearVelocity: n2,
        angularVelocity: r2
      };
    }
    get transform() {
      return this[Sm].transform;
    }
    get emulatedPosition() {
      return this[Sm].emulatedPosition;
    }
    get linearVelocity() {
      return this[Sm].linearVelocity;
    }
    get angularVelocity() {
      return this[Sm].angularVelocity;
    }
  }, zh = class extends Rh {
    constructor(e2, t2, n2 = false, r2 = void 0, i2 = void 0) {
      super(e2, n2, r2, i2), this[xm] = {
        radius: t2
      };
    }
    get radius() {
      return this[xm].radius;
    }
  }, Bh = class extends Rh {
    constructor(e2, t2, n2 = false, r2 = void 0, i2 = void 0) {
      super(e2, n2, r2, i2), this[Cm] = {
        views: Object.freeze(t2)
      };
    }
    get views() {
      return this[Cm].views;
    }
  }, Vh = Cp(), Hh = Cp(), Uh = Cp(), Wh = (e2, t2, n2) => {
    Im.calculateGlobalOffsetMatrix(t2, Vh), Im.calculateGlobalOffsetMatrix(n2, Hh), Dp(Uh, Hh), Op(e2, Uh, Vh);
  }, Gh = class {
    constructor(e2, t2, n2, r2, i2) {
      this[W] = {
        session: e2,
        id: t2,
        active: n2,
        animationFrame: r2,
        predictedDisplayTime: i2,
        tempMat4: Cp(),
        detectedPlanes: new yh(),
        detectedMeshes: new mh(),
        trackedAnchors: e2[K].frameTrackedAnchors,
        hitTestResultsMap: /* @__PURE__ */ new Map(),
        depthDataMap: /* @__PURE__ */ new Map()
      };
    }
    get session() {
      return this[W].session;
    }
    get predictedDisplayTime() {
      return this[W].predictedDisplayTime;
    }
    getPose(e2, t2) {
      if (!this[W].active) throw new DOMException(`XRFrame access outside the callback that produced it is invalid.`, `InvalidStateError`);
      Wh(this[W].tempMat4, e2, t2);
      let n2 = Rp();
      Mp(n2, this[W].tempMat4);
      let r2 = rm();
      return Pp(r2, this[W].tempMat4), new Rh(new Eh({
        x: n2[0],
        y: n2[1],
        z: n2[2],
        w: 1
      }, {
        x: r2[0],
        y: r2[1],
        z: r2[2],
        w: r2[3]
      }), e2[Om].emulated);
    }
    getViewerPose(e2) {
      if (!this[W].animationFrame) throw new DOMException(`getViewerPose can only be called on XRFrame objects passed to XRSession.requestAnimationFrame callbacks.`, `InvalidStateError`);
      let t2 = this[W].session, n2 = t2[K].device, r2 = this.getPose(n2.viewerSpace, e2), i2 = t2[K].mode === `inline` ? [
        J.None
      ] : [
        J.Left,
        J.Right
      ], a2 = [];
      return i2.forEach((r3) => {
        let i3 = n2.viewSpaces[r3], o2 = this.getPose(i3, e2), s2 = t2[K].getProjectionMatrix(r3), c2 = new Lh(r3, new Float32Array(s2), o2.transform, t2);
        a2.push(c2);
      }), new Bh(r2.transform, a2, false);
    }
    getJointPose(e2, t2) {
      let n2 = this.getPose(e2, t2), r2 = e2[Em].radius;
      return new zh(n2.transform, r2, false);
    }
    fillJointRadii(e2, t2) {
      if (e2 = Array.from(e2), !this[W].active) throw new DOMException(`XRFrame access outside the callback that produced it is invalid.`, `InvalidStateError`);
      if (e2.length > t2.length) throw new DOMException(`The length of jointSpaces is larger than the number of elements in radii`, `TypeError`);
      let n2 = true;
      for (let r2 = 0; r2 < e2.length; r2++) e2[r2][Em].radius ? t2[r2] = e2[r2][Em].radius : (t2[r2] = NaN, n2 = false);
      return n2;
    }
    fillPoses(e2, t2, n2) {
      if (e2 = Array.from(e2), !this[W].active) throw new DOMException(`XRFrame access outside the callback that produced it is invalid.`, `InvalidStateError`);
      if (e2.length * 16 > n2.length) throw new DOMException(`The length of spaces multiplied by 16 is larger than the number of elements in transforms`, `TypeError`);
      return e2.forEach((e3, r2) => {
        Wh(this[W].tempMat4, e3, t2);
        for (let e4 = 0; e4 < 16; e4++) n2[r2 * 16 + e4] = this[W].tempMat4[e4];
      }), true;
    }
    get detectedPlanes() {
      if (!this[W].active) throw new DOMException(`XRFrame access outside the callback that produced it is invalid.`, `InvalidStateError`);
      return this[W].detectedPlanes;
    }
    get detectedMeshes() {
      if (!this[W].active) throw new DOMException(`XRFrame access outside the callback that produced it is invalid.`, `InvalidStateError`);
      return this[W].detectedMeshes;
    }
    get trackedAnchors() {
      if (!this[W].active) throw new DOMException(`XRFrame access outside the callback that produced it is invalid.`, `InvalidStateError`);
      return this[W].trackedAnchors;
    }
    createAnchor(e2, t2) {
      return new Promise((n2, r2) => {
        if (!this[W].active) r2(new DOMException(`XRFrame access outside the callback that produced it is invalid.`, `InvalidStateError`));
        else {
          let i2 = this[W].session[K].device[H].globalSpace, a2 = new Pm(t2, e2.matrix), o2 = new Sh(new Pm(i2, Im.calculateGlobalOffsetMatrix(a2)), this[W].session);
          this[W].session[K].trackedAnchors.add(o2), this[W].session[K].newAnchors.set(o2, {
            resolve: n2,
            reject: r2
          });
        }
      });
    }
    getHitTestResults(e2) {
      if (!this[W].active) throw new DOMException(`XRFrame access outside the callback that produced it is invalid.`, `InvalidStateError`);
      if (this[W].hitTestResultsMap.has(e2)) return [
        ...this[W].hitTestResultsMap.get(e2)
      ];
      throw new DOMException(`Requested hit test results are not available for current frame.`, `InvalidStateError`);
    }
    getDepthInformation(e2) {
      if (!this[W].active) throw new DOMException(`XRFrame access outside the callback that produced it is invalid.`, `InvalidStateError`);
      if (!this[W].session[K].enabledFeatures.includes(`depth-sensing`)) throw new DOMException(`depth-sensing feature is not enabled on this session.`, `InvalidStateError`);
      return this[W].depthDataMap.get(e2[km].eye) ?? null;
    }
  }, Kh;
  (function(e2) {
    e2.Opaque = `opaque`, e2.AlphaBlend = `alpha-blend`, e2.Additive = `additive`;
  })(Kh || (Kh = {}));
  var qh;
  (function(e2) {
    e2.ScreenSpace = `screen-space`, e2.WorldSpace = `world-space`;
  })(qh || (qh = {}));
  var Jh = class extends EventTarget {
    constructor(e2, t2, n2) {
      super(), this[K] = {
        device: e2,
        mode: t2,
        renderState: new Fh(),
        pendingRenderState: null,
        enabledFeatures: n2,
        isSystemKeyboardSupported: false,
        ended: false,
        projectionMatrices: {
          [J.Left]: Cp(),
          [J.Right]: Cp(),
          [J.None]: Cp()
        },
        getProjectionMatrix: (e3) => this[K].projectionMatrices[e3],
        referenceSpaceIsSupported: (e3) => {
          if (!this[K].enabledFeatures.includes(e3)) return false;
          switch (e3) {
            case Nh.Viewer:
              return true;
            case Nh.Local:
            case Nh.LocalFloor:
            case Nh.BoundedFloor:
            case Nh.Unbounded:
              return this[K].mode != `inline`;
          }
        },
        frameHandle: 0,
        frameCallbacks: [],
        currentFrameCallbacks: null,
        onDeviceFrame: () => {
          if (this[K].ended) return;
          this[K].deviceFrameHandle = globalThis.requestAnimationFrame(this[K].onDeviceFrame), this[K].pendingRenderState != null && (this[K].renderState = this[K].pendingRenderState, this[K].pendingRenderState = null, this[K].device[H].onBaseLayerSet(this[K].renderState.baseLayer));
          let e3 = this[K].renderState.baseLayer;
          if (e3 === null) return;
          let t3 = e3.context, n3 = t3.canvas;
          if (this[K].mode != `inline`) {
            let e4 = t3.getParameter(t3.COLOR_CLEAR_VALUE), n4 = t3.getParameter(t3.DEPTH_CLEAR_VALUE), r3 = t3.getParameter(t3.STENCIL_CLEAR_VALUE);
            t3.clearColor(0, 0, 0, 0), t3.clearDepth(1), t3.clearStencil(0), t3.clear(t3.DEPTH_BUFFER_BIT | t3.COLOR_BUFFER_BIT | t3.STENCIL_BUFFER_BIT), t3.clearColor(e4[0], e4[1], e4[2], e4[3]), t3.clearDepth(n4), t3.clearStencil(r3);
          }
          let { depthNear: r2, depthFar: i2 } = this[K].renderState, { width: a2, height: o2 } = n3;
          if (this[K].mode !== `inline`) {
            let e4 = a2 * (this[K].device.stereoEnabled ? 0.5 : 1) / o2;
            Lp(this[K].projectionMatrices[J.Left], this[K].device.fovy, e4, r2, i2), Tp(this[K].projectionMatrices[J.Right], this[K].projectionMatrices[J.Left]);
          } else {
            let e4 = a2 / o2;
            Lp(this[K].projectionMatrices[J.None], this[K].renderState.inlineVerticalFieldOfView, e4, r2, i2);
          }
          let s2 = new Gh(this, this[K].frameHandle, true, true, performance.now()), c2 = performance.now(), l2 = this[K].device[H].devui;
          if (l2 && l2.render(c2), this[K].mode === `immersive-ar`) {
            let e4 = this[K].device[H].sem;
            e4 && e4.render(c2);
          }
          this[K].enabledFeatures.includes(`anchors`) && this[K].updateTrackedAnchors(), this[K].enabledFeatures.includes(`plane-detection`) && this[K].updateTrackedPlanes(s2), this[K].enabledFeatures.includes(`mesh-detection`) && this[K].updateTrackedMeshes(s2), this[K].enabledFeatures.includes(`depth-sensing`) && this[K].computeDepthSensing(s2), this[K].enabledFeatures.includes(`hit-test`) && this[K].computeHitTestResults(s2), this[K].device[H].onFrameStart(s2), this[K].updateActiveInputSources();
          let u2 = this[K].currentFrameCallbacks = this[K].frameCallbacks;
          this[K].frameCallbacks = [];
          let d2 = performance.now();
          for (let e4 = 0; e4 < u2.length; e4++) try {
            u2[e4].cancelled || u2[e4].callback(d2, s2);
          } catch (e5) {
            console.error(e5);
          }
          this[K].currentFrameCallbacks = null, s2[W].active = false;
        },
        nominalFrameRate: e2.internalNominalFrameRate,
        referenceSpaces: [],
        inputSourceArray: [],
        activeInputSources: [],
        updateActiveInputSources: () => {
          let e3 = this[K].enabledFeatures.includes(`hand-tracking`), t3 = this[K].activeInputSources, n3 = this[K].device.inputSources.filter((t4) => !t4.hand || e3), r2 = n3.filter((e4) => !t3.includes(e4)), i2 = t3.filter((e4) => !n3.includes(e4));
          this[K].activeInputSources = n3, (r2.length > 0 || i2.length > 0) && this.dispatchEvent(new jh(`inputsourceschange`, {
            session: this,
            added: r2,
            removed: i2
          }));
        },
        trackedAnchors: new Ch(),
        persistentAnchors: /* @__PURE__ */ new Map(),
        newAnchors: /* @__PURE__ */ new Map(),
        frameTrackedAnchors: new Ch(),
        updateTrackedAnchors: () => {
          this[K].enabledFeatures.includes(`anchors`) && (this[K].frameTrackedAnchors.clear(), Array.from(this[K].trackedAnchors).forEach((e3) => {
            if (e3[pm].deleted) {
              if (this[K].trackedAnchors.delete(e3), this[K].newAnchors.has(e3)) {
                let { reject: t3 } = this[K].newAnchors.get(e3);
                t3(new DOMException(`Anchor is no longer tracked`, `InvalidStateError`));
              }
            } else if (this[K].frameTrackedAnchors.add(e3), this[K].newAnchors.has(e3)) {
              let { resolve: t3 } = this[K].newAnchors.get(e3);
              t3(e3), this[K].newAnchors.delete(e3);
            }
          }));
        },
        trackedPlanes: /* @__PURE__ */ new Map(),
        updateTrackedPlanes: (e3) => {
          let t3 = this[K].device[H].sem;
          t3 && (Array.from(this[K].trackedPlanes.keys()).forEach((e4) => {
            t3.trackedPlanes.has(e4) || this[K].trackedPlanes.delete(e4);
          }), t3.trackedPlanes.forEach((t4) => {
            let n3 = this[K].trackedPlanes.get(t4);
            n3 || (n3 = new vh(t4, new Pm(this[K].device[H].globalSpace, t4.transform.matrix), t4.polygon, t4.semanticLabel), this[K].trackedPlanes.set(t4, n3)), n3[bm].lastChangedTime = e3.predictedDisplayTime, n3[bm].frame = e3, e3[W].detectedPlanes.add(n3);
          }));
        },
        trackedMeshes: /* @__PURE__ */ new Map(),
        updateTrackedMeshes: (e3) => {
          let t3 = this[K].device[H].sem;
          t3 && (Array.from(this[K].trackedMeshes.keys()).forEach((e4) => {
            t3.trackedMeshes.has(e4) || this[K].trackedMeshes.delete(e4);
          }), t3.trackedMeshes.forEach((t4) => {
            let n3 = this[K].trackedMeshes.get(t4);
            n3 || (n3 = new ph(t4, new Pm(this[K].device[H].globalSpace, t4.transform.matrix), t4.vertices, t4.indices, t4.semanticLabel), this[K].trackedMeshes.set(t4, n3)), n3[ym].lastChangedTime = e3.predictedDisplayTime, n3[ym].frame = e3, e3[W].detectedMeshes.add(n3);
          }));
        },
        depthSensingUsage: `cpu-optimized`,
        depthSensingDataFormat: `float32`,
        computeDepthSensing: (e3) => {
          let t3 = this[K].device[H].sem;
          if (!t3) return;
          let { depthNear: n3, depthFar: r2 } = this[K].renderState, i2 = this[K].renderState.baseLayer;
          if (!i2) return;
          let a2 = i2.context.canvas, o2 = Math.max(1, Math.floor(a2.width / 4)), s2 = Math.max(1, Math.floor(a2.height / 4)), c2 = this[K].mode === `inline` ? [
            J.None
          ] : [
            J.Left,
            J.Right
          ];
          for (let i3 of c2) {
            let a3 = this[K].getProjectionMatrix(i3), c3 = this[K].device.viewSpaces[i3], l2 = Im.calculateGlobalOffsetMatrix(c3), u2 = Cp();
            Dp(u2, l2);
            let d2 = t3.computeDepthBuffer(u2, a3, o2, s2, n3, r2);
            if (d2) {
              let t4 = new xh(d2.data, d2.width, d2.height, new Eh(), d2.rawValueToMeters, this[K].depthSensingDataFormat);
              e3[W].depthDataMap.set(i3, t4);
            }
          }
        },
        hitTestSources: /* @__PURE__ */ new Set(),
        computeHitTestResults: (e3) => {
          let t3 = this[K].device[H].sem;
          if (!t3) return;
          let n3 = this[K].device[H].globalSpace;
          this[K].hitTestSources.forEach((r2) => {
            let i2 = r2[Nm].space, a2 = Im.calculateGlobalOffsetMatrix(i2), o2 = r2[Nm].offsetRay.matrix, s2 = Cp();
            Op(s2, a2, o2);
            let c2 = [];
            t3.computeHitTestResults(s2).forEach((t4) => {
              let r3 = new Ah(e3, new Pm(n3, t4));
              c2.push(r3);
            }), e3[W].hitTestResultsMap.set(r2, c2);
          });
        },
        onend: null,
        oninputsourceschange: null,
        onselect: null,
        onselectstart: null,
        onselectend: null,
        onsqueeze: null,
        onsqueezestart: null,
        onsqueezeend: null,
        onvisibilitychange: null,
        onframeratechange: null
      }, Th.recoverPersistentAnchorsFromStorage(this), this[K].onDeviceFrame();
    }
    get visibilityState() {
      return this[K].device.visibilityState;
    }
    get frameRate() {
      return this[K].nominalFrameRate;
    }
    get supportedFrameRates() {
      return new Float32Array(this[K].device.supportedFrameRates);
    }
    get renderState() {
      return this[K].renderState;
    }
    get inputSources() {
      return this[K].inputSourceArray.length = 0, !this[K].ended && this[K].mode !== `inline` && this[K].inputSourceArray.push(...this[K].activeInputSources), this[K].inputSourceArray;
    }
    get enabledFeatures() {
      return this[K].enabledFeatures;
    }
    get isSystemKeyboardSupported() {
      return this[K].isSystemKeyboardSupported;
    }
    get environmentBlendMode() {
      return this[K].device[H].environmentBlendModes[this[K].mode] ?? Kh.Opaque;
    }
    get interactionMode() {
      return this[K].device[H].interactionMode;
    }
    get depthUsage() {
      return this[K].depthSensingUsage;
    }
    get depthDataFormat() {
      return this[K].depthSensingDataFormat;
    }
    updateRenderState(e2 = {}) {
      var _a2, _b, _c2, _d2;
      if (this[K].ended) throw new DOMException(`XRSession has already ended.`, `InvalidStateError`);
      if (e2.baseLayer && e2.baseLayer[vm].session !== this) throw new DOMException(`Base layer was created by a different XRSession`, `InvalidStateError`);
      if (e2.inlineVerticalFieldOfView != null && this[K].mode !== `inline`) throw new DOMException(`InlineVerticalFieldOfView must not be set for an immersive session`, `InvalidStateError`);
      let t2 = {
        baseLayer: e2.baseLayer || ((_a2 = this[K].pendingRenderState) == null ? void 0 : _a2.baseLayer) || void 0,
        depthFar: e2.depthFar || ((_b = this[K].pendingRenderState) == null ? void 0 : _b.depthFar) || void 0,
        depthNear: e2.depthNear || ((_c2 = this[K].pendingRenderState) == null ? void 0 : _c2.depthNear) || void 0,
        inlineVerticalFieldOfView: e2.inlineVerticalFieldOfView || ((_d2 = this[K].pendingRenderState) == null ? void 0 : _d2.inlineVerticalFieldOfView) || void 0
      };
      this[K].pendingRenderState = new Fh(t2, this[K].renderState);
    }
    async updateTargetFrameRate(e2) {
      return new Promise((t2, n2) => {
        this[K].ended ? n2(new DOMException(`XRSession has already ended.`, `InvalidStateError`)) : this[K].device.supportedFrameRates.includes(e2) ? (this[K].nominalFrameRate === e2 ? console.log(`Requested frame rate is the same as the current nominal frame rate, no update made`) : (this[K].nominalFrameRate = e2, this.dispatchEvent(new Ih(`frameratechange`, {
          session: this
        })), console.log(`Nominal frame rate updated to ${e2}`)), t2()) : n2(new DOMException(`Requested frame rate not supported.`, `InvalidStateError`));
      });
    }
    async requestReferenceSpace(e2) {
      return new Promise((t2, n2) => {
        if (this[K].ended || !this[K].referenceSpaceIsSupported(e2)) {
          n2(new DOMException(`The requested reference space type is not supported.`, `NotSupportedError`));
          return;
        }
        let r2;
        switch (e2) {
          case Nh.Viewer:
            r2 = this[K].device.viewerSpace;
            break;
          case Nh.Local:
            r2 = new Ph(e2, this[K].device[H].globalSpace, this[K].device.viewerSpace[Om].offsetMatrix);
            break;
          case Nh.LocalFloor:
          case Nh.BoundedFloor:
          case Nh.Unbounded:
            r2 = new Ph(e2, this[K].device[H].globalSpace);
        }
        this[K].referenceSpaces.push(r2), t2(r2);
      });
    }
    requestAnimationFrame(e2) {
      if (this[K].ended) return 0;
      let t2 = ++this[K].frameHandle;
      return this[K].frameCallbacks.push({
        handle: t2,
        callback: e2,
        cancelled: false
      }), t2;
    }
    cancelAnimationFrame(e2) {
      let t2 = this[K].frameCallbacks, n2 = t2.findIndex((t3) => t3 && t3.handle === e2);
      n2 > -1 && (t2[n2].cancelled = true, t2.splice(n2, 1)), t2 = this[K].currentFrameCallbacks, t2 && (n2 = t2.findIndex((t3) => t3 && t3.handle === e2), n2 > -1 && (t2[n2].cancelled = true));
    }
    async end() {
      return new Promise((e2, t2) => {
        this[K].ended || this[K].deviceFrameHandle === null ? t2(new DOMException(`XRSession has already ended.`, `InvalidStateError`)) : (globalThis.cancelAnimationFrame(this[K].deviceFrameHandle), this[K].device[H].onSessionEnd(), this.dispatchEvent(new Ih(`end`, {
          session: this
        })), e2());
      });
    }
    get persistentAnchors() {
      return Array.from(this[K].persistentAnchors.keys());
    }
    restorePersistentAnchor(e2) {
      return new Promise((t2, n2) => {
        if (!this[K].persistentAnchors.has(e2)) n2(new DOMException(`Persistent anchor with uuid ${e2} not found.`, `InvalidStateError`));
        else if (this[K].ended) n2(new DOMException(`XRSession has already ended.`, `InvalidStateError`));
        else {
          let r2 = this[K].persistentAnchors.get(e2);
          this[K].newAnchors.has(r2) ? n2(new DOMException(`Multiple concurrent attempts detected to restore the anchor with UUID: ${e2}.`, `InvalidStateError`)) : (this[K].trackedAnchors.add(r2), this[K].newAnchors.set(r2, {
            resolve: t2,
            reject: n2
          }));
        }
      });
    }
    deletePersistentAnchor(e2) {
      return new Promise((t2, n2) => {
        if (!this[K].persistentAnchors.has(e2)) n2(new DOMException(`Persistent anchor with uuid ${e2} not found.`, `InvalidStateError`));
        else {
          let n3 = this[K].persistentAnchors.get(e2);
          this[K].persistentAnchors.delete(e2), n3.delete(), t2(void 0);
        }
      });
    }
    requestHitTestSource(e2) {
      return new Promise((t2, n2) => {
        if (!this[K].enabledFeatures.includes(`hit-test`)) n2(new DOMException(`WebXR feature "hit-test" is not supported by current session`, `NotSupportedError`));
        else if (this[K].ended) n2(new DOMException(`XRSession has already ended.`, `InvalidStateError`));
        else if (!this[K].device[H].sem) n2(new DOMException(`Synthethic Environment Module required for emulating hit-test`, `OperationError`));
        else {
          let n3 = new kh(this, e2);
          this[K].hitTestSources.add(n3), t2(n3);
        }
      });
    }
    get onend() {
      return this[K].onend ?? (() => {
      });
    }
    set onend(e2) {
      this[K].onend && this.removeEventListener(`end`, this[K].onend), this[K].onend = e2, e2 && this.addEventListener(`end`, e2);
    }
    get oninputsourceschange() {
      return this[K].oninputsourceschange ?? (() => {
      });
    }
    set oninputsourceschange(e2) {
      this[K].oninputsourceschange && this.removeEventListener(`inputsourceschange`, this[K].oninputsourceschange), this[K].oninputsourceschange = e2, e2 && this.addEventListener(`inputsourceschange`, e2);
    }
    get onselect() {
      return this[K].onselect ?? (() => {
      });
    }
    set onselect(e2) {
      this[K].onselect && this.removeEventListener(`select`, this[K].onselect), this[K].onselect = e2, e2 && this.addEventListener(`select`, e2);
    }
    get onselectstart() {
      return this[K].onselectstart ?? (() => {
      });
    }
    set onselectstart(e2) {
      this[K].onselectstart && this.removeEventListener(`selectstart`, this[K].onselectstart), this[K].onselectstart = e2, e2 && this.addEventListener(`selectstart`, e2);
    }
    get onselectend() {
      return this[K].onselectend ?? (() => {
      });
    }
    set onselectend(e2) {
      this[K].onselectend && this.removeEventListener(`selectend`, this[K].onselectend), this[K].onselectend = e2, e2 && this.addEventListener(`selectend`, e2);
    }
    get onsqueeze() {
      return this[K].onsqueeze ?? (() => {
      });
    }
    set onsqueeze(e2) {
      this[K].onsqueeze && this.removeEventListener(`squeeze`, this[K].onsqueeze), this[K].onsqueeze = e2, e2 && this.addEventListener(`squeeze`, e2);
    }
    get onsqueezestart() {
      return this[K].onsqueezestart ?? (() => {
      });
    }
    set onsqueezestart(e2) {
      this[K].onsqueezestart && this.removeEventListener(`squeezestart`, this[K].onsqueezestart), this[K].onsqueezestart = e2, e2 && this.addEventListener(`squeezestart`, e2);
    }
    get onsqueezeend() {
      return this[K].onsqueezeend ?? (() => {
      });
    }
    set onsqueezeend(e2) {
      this[K].onsqueezeend && this.removeEventListener(`squeezeend`, this[K].onsqueezeend), this[K].onsqueezeend = e2, e2 && this.addEventListener(`squeezeend`, e2);
    }
    get onvisibilitychange() {
      return this[K].onvisibilitychange ?? (() => {
      });
    }
    set onvisibilitychange(e2) {
      this[K].onvisibilitychange && this.removeEventListener(`visibilitychange`, this[K].onvisibilitychange), this[K].onvisibilitychange = e2, e2 && this.addEventListener(`visibilitychange`, e2);
    }
    get onframeratechange() {
      return this[K].onframeratechange ?? (() => {
      });
    }
    set onframeratechange(e2) {
      this[K].onframeratechange && this.removeEventListener(`frameratechange`, this[K].onframeratechange), this[K].onframeratechange = e2, e2 && this.addEventListener(`frameratechange`, e2);
    }
  }, Yh;
  (function(e2) {
    e2.Wrist = `wrist`, e2.ThumbMetacarpal = `thumb-metacarpal`, e2.ThumbPhalanxProximal = `thumb-phalanx-proximal`, e2.ThumbPhalanxDistal = `thumb-phalanx-distal`, e2.ThumbTip = `thumb-tip`, e2.IndexFingerMetacarpal = `index-finger-metacarpal`, e2.IndexFingerPhalanxProximal = `index-finger-phalanx-proximal`, e2.IndexFingerPhalanxIntermediate = `index-finger-phalanx-intermediate`, e2.IndexFingerPhalanxDistal = `index-finger-phalanx-distal`, e2.IndexFingerTip = `index-finger-tip`, e2.MiddleFingerMetacarpal = `middle-finger-metacarpal`, e2.MiddleFingerPhalanxProximal = `middle-finger-phalanx-proximal`, e2.MiddleFingerPhalanxIntermediate = `middle-finger-phalanx-intermediate`, e2.MiddleFingerPhalanxDistal = `middle-finger-phalanx-distal`, e2.MiddleFingerTip = `middle-finger-tip`, e2.RingFingerMetacarpal = `ring-finger-metacarpal`, e2.RingFingerPhalanxProximal = `ring-finger-phalanx-proximal`, e2.RingFingerPhalanxIntermediate = `ring-finger-phalanx-intermediate`, e2.RingFingerPhalanxDistal = `ring-finger-phalanx-distal`, e2.RingFingerTip = `ring-finger-tip`, e2.PinkyFingerMetacarpal = `pinky-finger-metacarpal`, e2.PinkyFingerPhalanxProximal = `pinky-finger-phalanx-proximal`, e2.PinkyFingerPhalanxIntermediate = `pinky-finger-phalanx-intermediate`, e2.PinkyFingerPhalanxDistal = `pinky-finger-phalanx-distal`, e2.PinkyFingerTip = `pinky-finger-tip`;
  })(Yh || (Yh = {}));
  var Xh = class extends Map {
  }, Zh = class extends Pm {
    constructor(e2, t2, n2) {
      super(t2, n2), this[Em] = {
        jointName: e2,
        radius: 0
      };
    }
    get jointName() {
      return this[Em].jointName;
    }
  }, Qh = {
    profileId: `oculus-hand`,
    fallbackProfileIds: [
      `generic-hand`,
      `generic-hand-select`,
      `generic-trigger`
    ],
    poses: {
      default: {
        jointTransforms: {
          wrist: {
            offsetMatrix: [
              0.9616971015930176,
              -0.13805118203163147,
              0.2368120402097702,
              0,
              5348679260350764e-19,
              0.8648636937141418,
              0.5020061135292053,
              0,
              -0.2741127610206604,
              -0.48265108466148376,
              0.8318111300468445,
              0,
              -0.04913589730858803,
              0.0021463718730956316,
              0.11701996624469757,
              1
            ],
            radius: 0.021460847929120064
          },
          "thumb-metacarpal": {
            offsetMatrix: [
              -0.07536252588033676,
              -0.9959676265716553,
              -0.04867160692811012,
              0,
              0.5877083539962769,
              -0.08379616588354111,
              0.8047218918800354,
              0,
              -0.8055551648139954,
              0.032041035592556,
              0.5916536450386047,
              0,
              -0.010643752291798592,
              6936835707165301e-19,
              0.08736639469861984,
              1
            ],
            radius: 0.019382517784833908
          },
          "thumb-phalanx-proximal": {
            offsetMatrix: [
              0.1374533325433731,
              -0.9904957413673401,
              0.004982374142855406,
              0,
              0.5534393787384033,
              0.08097179979085922,
              0.8289443850517273,
              0,
              -0.8214688897132874,
              -0.11118389666080475,
              0.559309184551239,
              0,
              0.015547193586826324,
              -3480653394944966e-19,
              0.0681300163269043,
              1
            ],
            radius: 0.01228295173496008
          },
          "thumb-phalanx-distal": {
            offsetMatrix: [
              -0.04659227654337883,
              -0.9974699020385742,
              -0.05369402840733528,
              0,
              0.6812446117401123,
              -0.07104194164276123,
              0.728600800037384,
              0,
              -0.7305715084075928,
              -0.002631746232509613,
              0.6828309893608093,
              0,
              0.04330715537071228,
              0.003409178927540779,
              0.0492292083799839,
              1
            ],
            radius: 0.009768804535269737
          },
          "thumb-tip": {
            offsetMatrix: [
              -0.04659227654337883,
              -0.9974699020385742,
              -0.05369402840733528,
              0,
              0.6812446117401123,
              -0.07104194164276123,
              0.728600800037384,
              0,
              -0.7305715084075928,
              -0.002631746232509613,
              0.6828309893608093,
              0,
              0.062003348022699356,
              0.004069602582603693,
              0.03322213143110275,
              1
            ],
            radius: 0.008768804371356964
          },
          "index-finger-metacarpal": {
            offsetMatrix: [
              0.9616971015930176,
              -0.13805118203163147,
              0.2368120402097702,
              0,
              5348679260350764e-19,
              0.8648636937141418,
              0.5020061135292053,
              0,
              -0.2741127610206604,
              -0.48265108466148376,
              0.8318111300468445,
              0,
              -0.02009812369942665,
              0.008770795539021492,
              0.08660387247800827,
              1
            ],
            radius: 0.021228281781077385
          },
          "index-finger-phalanx-proximal": {
            offsetMatrix: [
              0.9001791477203369,
              -0.2598813474178314,
              0.3494834005832672,
              0,
              0.06073702871799469,
              0.8695210218429565,
              0.490146666765213,
              0,
              -0.4312632381916046,
              -0.41999316215515137,
              0.7985095381736755,
              0,
              -17739279428496957e-20,
              0.03890012577176094,
              0.039073407649993896,
              1
            ],
            radius: 0.010295259766280651
          },
          "index-finger-phalanx-intermediate": {
            offsetMatrix: [
              0.9082008600234985,
              -0.20898112654685974,
              0.36262574791908264,
              0,
              0.11045389622449875,
              0.9553793668746948,
              0.27395179867744446,
              0,
              -0.40369608998298645,
              -0.20874978601932526,
              0.8907597661018372,
              0,
              0.01617925800383091,
              0.05482936650514603,
              0.008788082748651505,
              1
            ],
            radius: 0.00853810179978609
          },
          "index-finger-phalanx-distal": {
            offsetMatrix: [
              0.9309692978858948,
              -0.16783711314201355,
              0.32423174381256104,
              0,
              0.1080828532576561,
              0.9749603867530823,
              0.1943446695804596,
              0,
              -0.34873148798942566,
              -0.14588497579097748,
              0.9257990717887878,
              0,
              0.02599053829908371,
              0.059902746230363846,
              -0.012860597111284733,
              1
            ],
            radius: 0.007636196445673704
          },
          "index-finger-tip": {
            offsetMatrix: [
              0.9309692978858948,
              -0.16783711314201355,
              0.32423174381256104,
              0,
              0.1080828532576561,
              0.9749603867530823,
              0.1943446695804596,
              0,
              -0.34873148798942566,
              -0.14588497579097748,
              0.9257990717887878,
              0,
              0.03362493962049484,
              0.06421422213315964,
              -0.033461250364780426,
              1
            ],
            radius: 0.006636196281760931
          },
          "middle-finger-metacarpal": {
            offsetMatrix: [
              0.9616971015930176,
              -0.13805118203163147,
              0.2368120402097702,
              0,
              5348679260350764e-19,
              0.8648636937141418,
              0.5020061135292053,
              0,
              -0.2741127610206604,
              -0.48265108466148376,
              0.8318111300468445,
              0,
              -0.03627845644950867,
              0.011579737067222595,
              0.08550142496824265,
              1
            ],
            radius: 0.021231964230537415
          },
          "middle-finger-phalanx-proximal": {
            offsetMatrix: [
              0.9876697659492493,
              -0.06786545366048813,
              0.1410750150680542,
              0,
              -0.015095947310328484,
              0.855663537979126,
              0.5173118710517883,
              0,
              -0.15582047402858734,
              -0.5130629539489746,
              0.8440889716148376,
              0,
              -0.021259509027004242,
              0.04587256908416748,
              0.03659208118915558,
              1
            ],
            radius: 0.01117393933236599
          },
          "middle-finger-phalanx-intermediate": {
            offsetMatrix: [
              0.988391637802124,
              -0.04354291781783104,
              0.14555205404758453,
              0,
              0.008894841186702251,
              0.9729899168014526,
              0.23067504167556763,
              0,
              -0.15166506171226501,
              -0.22670257091522217,
              0.9620829224586487,
              0,
              -0.014570588245987892,
              0.06789684295654297,
              3578895702958107e-19,
              1
            ],
            radius: 0.008030958473682404
          },
          "middle-finger-phalanx-distal": {
            offsetMatrix: [
              0.9853697419166565,
              0.044260796159505844,
              0.16458062827587128,
              0,
              -0.0757969319820404,
              0.9787378311157227,
              0.19059516489505768,
              0,
              -0.1526455283164978,
              -0.20028135180473328,
              0.9677740931510925,
              0,
              -0.010392282158136368,
              0.07414241135120392,
              -0.026147106662392616,
              1
            ],
            radius: 0.007629410829395056
          },
          "middle-finger-tip": {
            offsetMatrix: [
              0.9853697419166565,
              0.044260796159505844,
              0.16458062827587128,
              0,
              -0.0757969319820404,
              0.9787378311157227,
              0.19059516489505768,
              0,
              -0.1526455283164978,
              -0.20028135180473328,
              0.9677740931510925,
              0,
              -0.0069718430750072,
              0.08024183660745621,
              -0.05014154314994812,
              1
            ],
            radius: 0.006629410665482283
          },
          "ring-finger-metacarpal": {
            offsetMatrix: [
              0.9616971015930176,
              -0.13805118203163147,
              0.2368120402097702,
              0,
              5348679260350764e-19,
              0.8648636937141418,
              0.5020061135292053,
              0,
              -0.2741127610206604,
              -0.48265108466148376,
              0.8318111300468445,
              0,
              -0.05402477830648422,
              0.015797706320881844,
              0.08152295649051666,
              1
            ],
            radius: 0.019088275730609894
          },
          "ring-finger-phalanx-proximal": {
            offsetMatrix: [
              0.9940828680992126,
              0.05735103040933609,
              0.09224652498960495,
              0,
              -0.10022822767496109,
              0.8116500377655029,
              0.5754809379577637,
              0,
              -0.041867565363645554,
              -0.5813214182853699,
              0.8125960826873779,
              0,
              -0.041623555123806,
              0.04171867296099663,
              0.03582974523305893,
              1
            ],
            radius: 0.00992213748395443
          },
          "ring-finger-phalanx-intermediate": {
            offsetMatrix: [
              0.9843675494194031,
              0.12044742703437805,
              0.12850022315979004,
              0,
              -0.15629759430885315,
              0.9337108135223389,
              0.3221098482608795,
              0,
              -0.08118485659360886,
              -0.3371586799621582,
              0.937940776348114,
              0,
              -0.039990875869989395,
              0.06438793987035751,
              0.004141641780734062,
              1
            ],
            radius: 0.007611672393977642
          },
          "ring-finger-phalanx-distal": {
            offsetMatrix: [
              0.9748351573944092,
              0.11857274919748306,
              0.18877571821212769,
              0,
              -0.15575434267520905,
              0.9681083559989929,
              0.19623035192489624,
              0,
              -0.15948788821697235,
              -0.22069483995437622,
              0.9622148275375366,
              0,
              -0.03783353418111801,
              0.07334739714860916,
              -0.020782606676220894,
              1
            ],
            radius: 0.007231088820844889
          },
          "ring-finger-tip": {
            offsetMatrix: [
              0.9748351573944092,
              0.11857274919748306,
              0.18877571821212769,
              0,
              -0.15575434267520905,
              0.9681083559989929,
              0.19623035192489624,
              0,
              -0.15948788821697235,
              -0.22069483995437622,
              0.9622148275375366,
              0,
              -0.03445569798350334,
              0.0802423357963562,
              -0.04392268508672714,
              1
            ],
            radius: 0.0062310886569321156
          },
          "pinky-finger-metacarpal": {
            offsetMatrix: [
              0.9181402921676636,
              0.35625091195106506,
              0.17350243031978607,
              0,
              -0.39615097641944885,
              0.8352503180503845,
              0.38134080171585083,
              0,
              -0.009065053425729275,
              -0.41885748505592346,
              0.9080066680908203,
              0,
              -0.06191859766840935,
              0.013620133511722088,
              0.07850203663110733,
              1
            ],
            radius: 0.01808827556669712
          },
          "pinky-finger-phalanx-proximal": {
            offsetMatrix: [
              0.9714386463165283,
              0.236698180437088,
              -0.016745081171393394,
              0,
              -0.18462024629116058,
              0.7982627749443054,
              0.5733163952827454,
              0,
              0.14906984567642212,
              -0.5538501739501953,
              0.8191629648208618,
              0,
              -0.061502378433942795,
              0.032741155475378036,
              0.03705105185508728,
              1
            ],
            radius: 0.008483353070914745
          },
          "pinky-finger-phalanx-intermediate": {
            offsetMatrix: [
              0.9337416291236877,
              0.35620439052581787,
              -0.03527557849884033,
              0,
              -0.33203884959220886,
              0.8987522721290588,
              0.28634607791900635,
              0,
              0.13370157778263092,
              -0.2556603252887726,
              0.9574766755104065,
              0,
              -0.06608185172080994,
              0.049755651503801346,
              0.011886020191013813,
              1
            ],
            radius: 0.0067641944624483585
          },
          "pinky-finger-phalanx-distal": {
            offsetMatrix: [
              0.9419984817504883,
              0.3303581774234772,
              0.059175245463848114,
              0,
              -0.33483216166496277,
              0.9130291938781738,
              0.23294763267040253,
              0,
              0.02292730286717415,
              -0.2392500638961792,
              0.970687210559845,
              0,
              -0.0687975287437439,
              0.054948460310697556,
              -0.007561664097011089,
              1
            ],
            radius: 0.0064259846694767475
          },
          "pinky-finger-tip": {
            offsetMatrix: [
              0.9419984817504883,
              0.3303581774234772,
              0.059175245463848114,
              0,
              -0.33483216166496277,
              0.9130291938781738,
              0.23294763267040253,
              0,
              0.02292730286717415,
              -0.2392500638961792,
              0.970687210559845,
              0,
              -0.06947512179613113,
              0.0613851435482502,
              -0.028543535619974136,
              1
            ],
            radius: 0.005425984505563974
          }
        },
        gripOffsetMatrix: [
          -5348679260350764e-19,
          -0.8648636937141418,
          -0.5020061135292053,
          0,
          -0.2741127908229828,
          -0.48265108466148376,
          0.8318111896514893,
          0,
          -0.9616971015930176,
          0.13805119693279266,
          -0.2368120402097702,
          0,
          -0.02878567762672901,
          0.0017147823236882687,
          0.04536811262369156,
          1
        ]
      },
      pinch: {
        jointTransforms: {
          wrist: {
            offsetMatrix: [
              0.9060805439949036,
              -0.1844543218612671,
              0.3807799518108368,
              0,
              -0.08027800172567368,
              0.8086723685264587,
              0.5827555656433105,
              0,
              -0.4154181182384491,
              -0.5585917234420776,
              0.7179155349731445,
              0,
              -0.06867414712905884,
              -0.009423808194696903,
              0.10627774149179459,
              1
            ],
            radius: 0.021460847929120064
          },
          "thumb-metacarpal": {
            offsetMatrix: [
              -0.5012241005897522,
              -0.8650535345077515,
              -0.0213695727288723,
              0,
              0.7415963411331177,
              -0.4421543478965759,
              0.5045139193534851,
              0,
              -0.44587990641593933,
              0.23702676594257355,
              0.8631392121315002,
              0,
              -0.032122574746608734,
              -0.01196830440312624,
              0.07194234430789948,
              1
            ],
            radius: 0.019382517784833908
          },
          "thumb-phalanx-proximal": {
            offsetMatrix: [
              -0.3175753057003021,
              -0.9460570216178894,
              -0.06419729441404343,
              0,
              0.8958902955055237,
              -0.32153913378715515,
              0.30658137798309326,
              0,
              -0.3106854259967804,
              0.03984907269477844,
              0.9496771097183228,
              0,
              -0.017625702545046806,
              -0.01967475935816765,
              0.04387917369604111,
              1
            ],
            radius: 0.01228295173496008
          },
          "thumb-phalanx-distal": {
            offsetMatrix: [
              -0.4944636821746826,
              -0.8691971898078918,
              0.001086252392269671,
              0,
              0.8307800889015198,
              -0.4722411036491394,
              0.2946045398712158,
              0,
              -0.25555649399757385,
              0.14657381176948547,
              0.9556186199188232,
              0,
              -0.007126678712666035,
              -0.021021386608481407,
              0.011786630377173424,
              1
            ],
            radius: 0.009768804535269737
          },
          "thumb-tip": {
            offsetMatrix: [
              -0.4944636821746826,
              -0.8691971898078918,
              0.001086252392269671,
              0,
              0.8307800889015198,
              -0.4722411036491394,
              0.2946045398712158,
              0,
              -0.25555649399757385,
              0.14657381176948547,
              0.9556186199188232,
              0,
              3423091256991029e-19,
              -0.024528030306100845,
              -0.011410919018089771,
              1
            ],
            radius: 0.008768804371356964
          },
          "index-finger-metacarpal": {
            offsetMatrix: [
              0.9060805439949036,
              -0.1844543218612671,
              0.3807799518108368,
              0,
              -0.08027800172567368,
              0.8086723685264587,
              0.5827555656433105,
              0,
              -0.4154181182384491,
              -0.5585917234420776,
              0.7179155349731445,
              0,
              -0.038037415593862534,
              -0.0020236473064869642,
              0.07626739144325256,
              1
            ],
            radius: 0.021228281781077385
          },
          "index-finger-phalanx-proximal": {
            offsetMatrix: [
              0.7986818552017212,
              -0.35985732078552246,
              0.48229536414146423,
              0,
              0.538311243057251,
              0.7854709625244141,
              -0.30537736415863037,
              0,
              -0.2689369022846222,
              0.5035246014595032,
              0.8210577368736267,
              0,
              -0.006869405973702669,
              0.033938243985176086,
              0.04206443578004837,
              1
            ],
            radius: 0.010295259766280651
          },
          "index-finger-phalanx-intermediate": {
            offsetMatrix: [
              0.8285930156707764,
              -0.32672837376594543,
              0.4546217918395996,
              0,
              0.5577570199966431,
              0.4116027057170868,
              -0.7207564115524292,
              0,
              0.04836784675717354,
              0.8507823944091797,
              0.5232869386672974,
              0,
              0.0033306588884443045,
              0.014840902760624886,
              0.010923954658210278,
              1
            ],
            radius: 0.00853810179978609
          },
          "index-finger-phalanx-distal": {
            offsetMatrix: [
              0.8412464261054993,
              -0.35794928669929504,
              0.4051857888698578,
              0,
              0.5139996409416199,
              0.29711154103279114,
              -0.8046918511390686,
              0,
              0.16765329241752625,
              0.8852096796035767,
              0.4339304566383362,
              0,
              0.0021551470272243023,
              -0.0058362227864563465,
              -0.0017938464879989624,
              1
            ],
            radius: 0.007636196445673704
          },
          "index-finger-tip": {
            offsetMatrix: [
              0.8412464261054993,
              -0.35794928669929504,
              0.4051857888698578,
              0,
              0.5139996409416199,
              0.29711154103279114,
              -0.8046918511390686,
              0,
              0.16765329241752625,
              0.8852096796035767,
              0.4339304566383362,
              0,
              -0.00131594471167773,
              -0.025222131982445717,
              -0.012442642822861671,
              1
            ],
            radius: 0.006636196281760931
          },
          "middle-finger-metacarpal": {
            offsetMatrix: [
              0.9060805439949036,
              -0.1844543218612671,
              0.3807799518108368,
              0,
              -0.08027800172567368,
              0.8086723685264587,
              0.5827555656433105,
              0,
              -0.4154181182384491,
              -0.5585917234420776,
              0.7179155349731445,
              0,
              -0.05395089089870453,
              0.003063359996303916,
              0.07402937114238739,
              1
            ],
            radius: 0.021231964230537415
          },
          "middle-finger-phalanx-proximal": {
            offsetMatrix: [
              0.9187911748886108,
              -0.1530158370733261,
              0.36387869715690613,
              0,
              0.038666240870952606,
              0.9522662162780762,
              0.302808940410614,
              0,
              -0.3928440511226654,
              -0.26414817571640015,
              0.8808513283729553,
              0,
              -0.02717282809317112,
              0.04162866622209549,
              0.03678669035434723,
              1
            ],
            radius: 0.01117393933236599
          },
          "middle-finger-phalanx-intermediate": {
            offsetMatrix: [
              0.9228746294975281,
              -0.12856416404247284,
              0.36300456523895264,
              0,
              0.14524033665657043,
              0.9892153143882751,
              -0.01890045404434204,
              0,
              -0.3566599190235138,
              0.07016586512327194,
              0.9315956234931946,
              0,
              -0.01030921470373869,
              0.05296773463487625,
              -0.0010256498353555799,
              1
            ],
            radius: 0.008030958473682404
          },
          "middle-finger-phalanx-distal": {
            offsetMatrix: [
              0.9325166344642639,
              -0.040404170751571655,
              0.35885775089263916,
              0,
              0.06836572289466858,
              0.995502769947052,
              -0.0655682161450386,
              0,
              -0.3545948565006256,
              0.08567725121974945,
              0.9310863614082336,
              0,
              -4833847051486373e-19,
              0.05103470757603645,
              -0.026690717786550522,
              1
            ],
            radius: 0.007629410829395056
          },
          "middle-finger-tip": {
            offsetMatrix: [
              0.9325166344642639,
              -0.040404170751571655,
              0.35885775089263916,
              0,
              0.06836572289466858,
              0.995502769947052,
              -0.0655682161450386,
              0,
              -0.3545948565006256,
              0.08567725121974945,
              0.9310863614082336,
              0,
              0.008158999495208263,
              0.05004044249653816,
              -0.050120558589696884,
              1
            ],
            radius: 0.006629410665482283
          },
          "ring-finger-metacarpal": {
            offsetMatrix: [
              0.9060805439949036,
              -0.1844543218612671,
              0.3807799518108368,
              0,
              -0.08027800172567368,
              0.8086723685264587,
              0.5827555656433105,
              0,
              -0.4154181182384491,
              -0.5585917234420776,
              0.7179155349731445,
              0,
              -0.06732909381389618,
              0.007902119308710098,
              0.07209732383489609,
              1
            ],
            radius: 0.019088275730609894
          },
          "ring-finger-phalanx-proximal": {
            offsetMatrix: [
              0.9391821026802063,
              -0.027994679287075996,
              0.34227466583251953,
              0,
              -0.18282271921634674,
              0.8029410243034363,
              0.5673282742500305,
              0,
              -0.2907087206840515,
              -0.5954000353813171,
              0.7489906549453735,
              0,
              -0.047129884362220764,
              0.03806127607822418,
              0.032147664576768875,
              1
            ],
            radius: 0.00992213748395443
          },
          "ring-finger-phalanx-intermediate": {
            offsetMatrix: [
              0.9249380826950073,
              0.03699534013867378,
              0.3783116042613983,
              0,
              -0.12898847460746765,
              0.9667453765869141,
              0.2208271026611328,
              0,
              -0.3575615882873535,
              -0.25304901599884033,
              0.8989526629447937,
              0,
              -0.03579339757561684,
              0.06127955764532089,
              0.002939916681498289,
              1
            ],
            radius: 0.007611672393977642
          },
          "ring-finger-phalanx-distal": {
            offsetMatrix: [
              0.9001164436340332,
              0.03983335196971893,
              0.4338230490684509,
              0,
              -0.09662467986345291,
              0.9892624020576477,
              0.10964841395616531,
              0,
              -0.4247973561286926,
              -0.14061418175697327,
              0.8943013548851013,
              0,
              -0.026291755959391594,
              0.06800390034914017,
              -0.02094830758869648,
              1
            ],
            radius: 0.007231088820844889
          },
          "ring-finger-tip": {
            offsetMatrix: [
              0.9001164436340332,
              0.03983335196971893,
              0.4338230490684509,
              0,
              -0.09662467986345291,
              0.9892624020576477,
              0.10964841395616531,
              0,
              -0.4247973561286926,
              -0.14061418175697327,
              0.8943013548851013,
              0,
              -0.016345610842108727,
              0.07300511747598648,
              -0.04263874143362045,
              1
            ],
            radius: 0.0062310886569321156
          },
          "pinky-finger-metacarpal": {
            offsetMatrix: [
              0.8769711852073669,
              0.31462907791137695,
              0.36322021484375,
              0,
              -0.4506046175956726,
              0.801031768321991,
              0.39408499002456665,
              0,
              -0.16696058213710785,
              -0.5092697143554688,
              0.8442559838294983,
              0,
              -0.07460174709558487,
              0.0062340241856873035,
              0.06756893545389175,
              1
            ],
            radius: 0.01808827556669712
          },
          "pinky-finger-phalanx-proximal": {
            offsetMatrix: [
              0.9498357176780701,
              0.1553308218717575,
              0.2714462876319885,
              0,
              -0.3019258379936218,
              0.6817675232887268,
              0.6663586497306824,
              0,
              -0.08155745267868042,
              -0.7148879170417786,
              0.694466233253479,
              0,
              -0.06697750836610794,
              0.029482364654541016,
              0.02902858518064022,
              1
            ],
            radius: 0.008483353070914745
          },
          "pinky-finger-phalanx-intermediate": {
            offsetMatrix: [
              0.9214097261428833,
              0.27928245067596436,
              0.2701927423477173,
              0,
              -0.3670244514942169,
              0.8538867831230164,
              0.36901235580444336,
              0,
              -0.12765564024448395,
              -0.43917882442474365,
              0.8892839550971985,
              0,
              -0.06447203457355499,
              0.05144399777054787,
              0.0076942890882492065,
              1
            ],
            radius: 0.0067641944624483585
          },
          "pinky-finger-phalanx-distal": {
            offsetMatrix: [
              0.9038633704185486,
              0.23618005216121674,
              0.3567195236682892,
              0,
              -0.3532794713973999,
              0.8823202252388,
              0.3109731376171112,
              0,
              -0.24129553139209747,
              -0.4070987403392792,
              0.8809353709220886,
              0,
              -0.06187915802001953,
              0.060364335775375366,
              -0.010368337854743004,
              1
            ],
            radius: 0.0064259846694767475
          },
          "pinky-finger-tip": {
            offsetMatrix: [
              0.9038633704185486,
              0.23618005216121674,
              0.3567195236682892,
              0,
              -0.3532794713973999,
              0.8823202252388,
              0.3109731376171112,
              0,
              -0.24129553139209747,
              -0.4070987403392792,
              0.8809353709220886,
              0,
              -0.056796226650476456,
              0.07042007893323898,
              -0.02921444922685623,
              1
            ],
            radius: 0.005425984505563974
          }
        },
        gripOffsetMatrix: [
          0.08027800917625427,
          -0.8086723685264587,
          -0.5827556252479553,
          0,
          -0.4154181480407715,
          -0.5585916638374329,
          0.7179154753684998,
          0,
          -0.9060805439949036,
          0.1844543218612671,
          -0.3807799518108368,
          0,
          -0.038054611533880234,
          -0.002910431008785963,
          0.03720742464065552,
          1
        ]
      },
      point: {
        jointTransforms: {
          wrist: {
            offsetMatrix: [
              0.9340395331382751,
              -0.13936476409435272,
              0.32885703444480896,
              0,
              -0.005510995630174875,
              0.914999783039093,
              0.40341612696647644,
              0,
              -0.3571262061595917,
              -0.37861889600753784,
              0.8538784384727478,
              0,
              -0.05789132043719292,
              0.01670890860259533,
              0.11183350533246994,
              1
            ],
            radius: 0.021460847929120064
          },
          "thumb-metacarpal": {
            offsetMatrix: [
              0.02145560085773468,
              -0.9978390336036682,
              0.0621047280728817,
              0,
              0.41311800479888916,
              0.06541631370782852,
              0.9083252549171448,
              0,
              -0.9104245901107788,
              0.006167683284729719,
              0.4136286973953247,
              0,
              -0.016488194465637207,
              0.012708572670817375,
              0.08862338215112686,
              1
            ],
            radius: 0.019382517784833908
          },
          "thumb-phalanx-proximal": {
            offsetMatrix: [
              0.21270370483398438,
              -0.966137707233429,
              0.14606566727161407,
              0,
              0.49890995025634766,
              0.2359165996313095,
              0.8339261412620544,
              0,
              -0.8401462435722351,
              -0.10450579971075058,
              0.5321959853172302,
              0,
              0.013112368993461132,
              0.012508046813309193,
              0.07517509907484055,
              1
            ],
            radius: 0.01228295173496008
          },
          "thumb-phalanx-distal": {
            offsetMatrix: [
              0.01653280481696129,
              -0.9986647963523865,
              0.048943229019641876,
              0,
              0.26313456892967224,
              0.051570065319538116,
              0.9633802771568298,
              0,
              -0.9646173715591431,
              -0.0030490627977997065,
              0.26363563537597656,
              0,
              0.04150351136922836,
              0.016039609909057617,
              0.05719054117798805,
              1
            ],
            radius: 0.009768804535269737
          },
          "thumb-tip": {
            offsetMatrix: [
              0.01653280481696129,
              -0.9986647963523865,
              0.048943229019641876,
              0,
              0.26313456892967224,
              0.051570065319538116,
              0.9633802771568298,
              0,
              -0.9646173715591431,
              -0.0030490627977997065,
              0.26363563537597656,
              0,
              0.06548332422971725,
              0.01683700829744339,
              0.0516640841960907,
              1
            ],
            radius: 0.008768804371356964
          },
          "index-finger-metacarpal": {
            offsetMatrix: [
              0.9340395331382751,
              -0.13936476409435272,
              0.32885703444480896,
              0,
              -0.005510995630174875,
              0.914999783039093,
              0.40341612696647644,
              0,
              -0.3571262061595917,
              -0.37861889600753784,
              0.8538784384727478,
              0,
              -0.02592567168176174,
              0.019982583820819855,
              0.08479326963424683,
              1
            ],
            radius: 0.021228281781077385
          },
          "index-finger-phalanx-proximal": {
            offsetMatrix: [
              0.9063700437545776,
              -0.21756279468536377,
              0.3621589243412018,
              0,
              0.0970839336514473,
              0.9415287375450134,
              0.3226419687271118,
              0,
              -0.41117796301841736,
              -0.2572731077671051,
              0.8744958639144897,
              0,
              -0.0015709538711234927,
              0.043078210204839706,
              0.034657616168260574,
              1
            ],
            radius: 0.010295259766280651
          },
          "index-finger-phalanx-intermediate": {
            offsetMatrix: [
              0.9159826040267944,
              -0.1651475727558136,
              0.36565208435058594,
              0,
              0.09755707532167435,
              0.9756820797920227,
              0.1962820291519165,
              0,
              -0.3891757130622864,
              -0.14411886036396027,
              0.9098196625709534,
              0,
              0.014023927971720695,
              0.052835866808891296,
              0.0014903299743309617,
              1
            ],
            radius: 0.00853810179978609
          },
          "index-finger-phalanx-distal": {
            offsetMatrix: [
              0.9378057718276978,
              -0.12329639494419098,
              0.3245268166065216,
              0,
              0.032558172941207886,
              0.9619227051734924,
              0.2713746726512909,
              0,
              -0.3456292748451233,
              -0.2439306229352951,
              0.9061115384101868,
              0,
              0.023482320830225945,
              0.05633850023150444,
              -0.020621655508875847,
              1
            ],
            radius: 0.007636196445673704
          },
          "index-finger-tip": {
            offsetMatrix: [
              0.9378057718276978,
              -0.12329639494419098,
              0.3245268166065216,
              0,
              0.032558172941207886,
              0.9619227051734924,
              0.2713746726512909,
              0,
              -0.3456292748451233,
              -0.2439306229352951,
              0.9061115384101868,
              0,
              0.03096788562834263,
              0.06281610578298569,
              -0.040703095495700836,
              1
            ],
            radius: 0.006636196281760931
          },
          "middle-finger-metacarpal": {
            offsetMatrix: [
              0.9340395331382751,
              -0.13936476409435272,
              0.32885703444480896,
              0,
              -0.005510995630174875,
              0.914999783039093,
              0.40341612696647644,
              0,
              -0.3571262061595917,
              -0.37861889600753784,
              0.8538784384727478,
              0,
              -0.04184452444314957,
              0.022474845871329308,
              0.08177298307418823,
              1
            ],
            radius: 0.021231964230537415
          },
          "middle-finger-phalanx-proximal": {
            offsetMatrix: [
              0.9720265865325928,
              -0.08313076198101044,
              0.21966552734375,
              0,
              0.20477405190467834,
              0.7580050826072693,
              -0.6192700862884521,
              0,
              -0.11502730846405029,
              0.6469289064407349,
              0.7538246512413025,
              0,
              -0.022107340395450592,
              0.05035499855875969,
              0.02970452979207039,
              1
            ],
            radius: 0.01117393933236599
          },
          "middle-finger-phalanx-intermediate": {
            offsetMatrix: [
              0.9779140949249268,
              -0.07129573822021484,
              0.19646917283535004,
              0,
              0.1287083923816681,
              -0.5352076292037964,
              -0.8348574042320251,
              0,
              0.1646735966205597,
              0.8417060971260071,
              -0.5142109394073486,
              0,
              -0.017169542610645294,
              0.022584279999136925,
              -0.00265491777099669,
              1
            ],
            radius: 0.008030958473682404
          },
          "middle-finger-phalanx-distal": {
            offsetMatrix: [
              0.9774913787841797,
              -0.19657190144062042,
              0.07661263644695282,
              0,
              -0.1924918293952942,
              -0.9796126484870911,
              -0.05749811604619026,
              0,
              0.08635343611240387,
              0.041456472128629684,
              -0.995401918888092,
              0,
              -0.02170622907578945,
              -6043742760084569e-19,
              0.011511396616697311,
              1
            ],
            radius: 0.007629410829395056
          },
          "middle-finger-tip": {
            offsetMatrix: [
              0.9774913787841797,
              -0.19657190144062042,
              0.07661263644695282,
              0,
              -0.1924918293952942,
              -0.9796126484870911,
              -0.05749811604619026,
              0,
              0.08635343611240387,
              0.041456472128629684,
              -0.995401918888092,
              0,
              -0.02438267692923546,
              -0.0026927536819130182,
              0.03627248480916023,
              1
            ],
            radius: 0.006629410665482283
          },
          "ring-finger-metacarpal": {
            offsetMatrix: [
              0.9340395331382751,
              -0.13936476409435272,
              0.32885703444480896,
              0,
              -0.005510995630174875,
              0.914999783039093,
              0.40341612696647644,
              0,
              -0.3571262061595917,
              -0.37861889600753784,
              0.8538784384727478,
              0,
              -0.05944233387708664,
              0.0264605600386858,
              0.07478221505880356,
              1
            ],
            radius: 0.019088275730609894
          },
          "ring-finger-phalanx-proximal": {
            offsetMatrix: [
              0.9842101335525513,
              0.024470895528793335,
              0.1753024309873581,
              0,
              0.12200043350458145,
              0.6237703561782837,
              -0.7720272541046143,
              0,
              -0.12824076414108276,
              0.7812241315841675,
              0.610936164855957,
              0,
              -0.04249368980526924,
              0.0467497780919075,
              0.027722163125872612,
              1
            ],
            radius: 0.00992213748395443
          },
          "ring-finger-phalanx-intermediate": {
            offsetMatrix: [
              0.9941774606704712,
              0.05949164181947708,
              0.08983955532312393,
              0,
              0.10504482686519623,
              -0.7208291888237,
              -0.6851072907447815,
              0,
              0.024001073092222214,
              0.6905553936958313,
              -0.7228817939758301,
              0,
              -0.0374927744269371,
              0.016285063698887825,
              0.0038980208337306976,
              1
            ],
            radius: 0.007611672393977642
          },
          "ring-finger-phalanx-distal": {
            offsetMatrix: [
              0.9995742440223694,
              0.01638498157262802,
              0.02412819117307663,
              0,
              0.007813597097992897,
              -0.9474818110466003,
              0.31971633434295654,
              0,
              0.028100071474909782,
              -0.31939181685447693,
              -0.9472070932388306,
              0,
              -0.038130562752485275,
              -0.0020653479732573032,
              0.02310742810368538,
              1
            ],
            radius: 0.007231088820844889
          },
          "ring-finger-tip": {
            offsetMatrix: [
              0.9995742440223694,
              0.01638498157262802,
              0.02412819117307663,
              0,
              0.007813597097992897,
              -0.9474818110466003,
              0.31971633434295654,
              0,
              0.028100071474909782,
              -0.31939181685447693,
              -0.9472070932388306,
              0,
              -0.0390593595802784,
              0.004176302347332239,
              0.0466572530567646,
              1
            ],
            radius: 0.0062310886569321156
          },
          "pinky-finger-metacarpal": {
            offsetMatrix: [
              0.9147363901138306,
              0.3458845317363739,
              0.20885537564754486,
              0,
              -0.3923271894454956,
              0.8839452862739563,
              0.2544005811214447,
              0,
              -0.09662359952926636,
              -0.3146490156650543,
              0.9442773461341858,
              0,
              -0.06715242564678192,
              0.024195827543735504,
              0.07137546688318253,
              1
            ],
            radius: 0.01808827556669712
          },
          "pinky-finger-phalanx-proximal": {
            offsetMatrix: [
              0.9613109827041626,
              0.22439135611057281,
              0.15977802872657776,
              0,
              0.01002211682498455,
              0.5511574745178223,
              -0.8343409299850464,
              0,
              -0.27528178691864014,
              0.8036624789237976,
              0.5275853276252747,
              0,
              -0.06273911893367767,
              0.038559623062610626,
              0.028268879279494286,
              1
            ],
            radius: 0.008483353070914745
          },
          "pinky-finger-phalanx-intermediate": {
            offsetMatrix: [
              0.9820972084999084,
              0.18811029195785522,
              -0.00995189044624567,
              0,
              0.14063723385334015,
              -0.7673450708389282,
              -0.6256227493286133,
              0,
              -0.12532226741313934,
              0.6130226850509644,
              -0.7800630927085876,
              0,
              -0.05428232625126839,
              0.013870777562260628,
              0.012061242014169693,
              1
            ],
            radius: 0.0067641944624483585
          },
          "pinky-finger-phalanx-distal": {
            offsetMatrix: [
              0.9744614362716675,
              0.20454788208007812,
              -0.09265263378620148,
              0,
              0.22429193556308746,
              -0.9065253138542175,
              0.35764020681381226,
              0,
              -0.010836843401193619,
              -0.3692878782749176,
              -0.9292529225349426,
              0,
              -0.05173685774207115,
              0.0014194445684552193,
              0.02790539152920246,
              1
            ],
            radius: 0.0064259846694767475
          },
          "pinky-finger-tip": {
            offsetMatrix: [
              0.9744614362716675,
              0.20454788208007812,
              -0.09265263378620148,
              0,
              0.22429193556308746,
              -0.9065253138542175,
              0.35764020681381226,
              0,
              -0.010836843401193619,
              -0.3692878782749176,
              -0.9292529225349426,
              0,
              -0.05098633095622063,
              0.008463085629045963,
              0.048688892275094986,
              1
            ],
            radius: 0.005425984505563974
          }
        },
        gripOffsetMatrix: [
          0.005510995630174875,
          -0.9149997234344482,
          -0.40341615676879883,
          0,
          -0.3571262061595917,
          -0.37861889600753784,
          0.8538784384727478,
          0,
          -0.9340395331382751,
          0.13936474919319153,
          -0.32885703444480896,
          0,
          -0.031803809106349945,
          0.007837686687707901,
          0.04313928261399269,
          1
        ]
      }
    }
  }, $h = {
    mapping: th.None,
    buttons: [
      {
        id: `pinch`,
        type: `analog`,
        eventTrigger: `select`
      }
    ],
    axes: []
  }, eg = Rp(), tg = rm(), ng = Rp(), rg = Rp(), ig = rm(), ag = Rp(), og = Rp(), sg = rm(), cg = Rp(), lg = (e2, t2, n2, r2) => (Mp(eg, t2), Pp(tg, t2), Np(ng, t2), Mp(rg, n2), Pp(ig, n2), Np(ag, n2), qp(og, eg, rg, r2), om(sg, tg, ig, r2), qp(cg, ng, ag, r2), Fp(e2, sg, og, cg), e2), ug = [
    1,
    -1,
    -1,
    0,
    -1,
    1,
    1,
    0,
    -1,
    1,
    1,
    0,
    -1,
    1,
    1,
    1
  ], dg = (e2) => {
    for (let t2 = 0; t2 < 16; t2++) e2[t2] *= ug[t2];
  }, fg = class extends dh {
    constructor(e2, t2, n2) {
      if (t2 !== ah.Left && t2 !== ah.Right) throw new DOMException(`handedness for XRHandInput must be either "left" or "right"`, `InvalidStateError`);
      if (!e2.poses.default || !e2.poses.pinch) throw new DOMException(`"default" and "pinch" hand pose configs are required`, `InvalidStateError`);
      let r2 = new Pm(n2), i2 = new Pm(r2), a2 = [
        e2.profileId,
        ...e2.fallbackProfileIds
      ], o2 = new Xh();
      Object.values(Yh).forEach((e3) => {
        o2.set(e3, new Zh(e3, r2));
      });
      let s2 = new ch(t2, oh.TrackedPointer, a2, r2, new ih($h), i2, o2);
      super(s2), this[hm] = {
        poseId: `default`,
        poses: e2.poses
      }, this.updateHandPose();
    }
    get poseId() {
      return this[hm].poseId;
    }
    set poseId(e2) {
      this[hm].poses[e2] ? this[hm].poseId = e2 : console.warn(`Pose config ${e2} not found`);
    }
    updateHandPose() {
      let e2 = this[hm].poses[this[hm].poseId], t2 = this[hm].poses.pinch;
      Object.values(Yh).forEach((n2) => {
        let r2 = e2.jointTransforms[n2].offsetMatrix, i2 = t2.jointTransforms[n2].offsetMatrix, a2 = this.inputSource.hand.get(n2);
        lg(a2[Om].offsetMatrix, r2, i2, this.pinchValue), this.inputSource.handedness === ah.Right && dg(a2[Om].offsetMatrix), a2[Em].radius = (1 - this.pinchValue) * e2.jointTransforms[n2].radius + this.pinchValue * t2.jointTransforms[n2].radius;
      }), e2.gripOffsetMatrix && t2.gripOffsetMatrix && lg(this.inputSource.gripSpace[Om].offsetMatrix, e2.gripOffsetMatrix, t2.gripOffsetMatrix, this.pinchValue);
    }
    get pinchValue() {
      return this[U].inputSource.gamepad[G].buttonsMap.pinch.value;
    }
    updatePinchValue(e2) {
      if (e2 > 1 || e2 < 0) {
        console.warn(`Out-of-range value ${e2} provided for pinch`);
        return;
      }
      let t2 = this[U].inputSource.gamepad[G].buttonsMap.pinch;
      t2[G].pendingValue = e2;
    }
    onFrameStart(e2) {
      super.onFrameStart(e2), this.updateHandPose();
    }
  }, pg = class extends EventTarget {
  }, mg = {
    antialias: true,
    depth: true,
    stencil: false,
    alpha: true,
    ignoreDepthValues: false,
    framebufferScaleFactor: 1
  }, hg = class extends pg {
    constructor(e2, t2, n2 = {}) {
      if (super(), e2[K].ended) throw new DOMException(`Session has ended`, `InvalidStateError`);
      let r2 = {
        ...mg,
        ...n2
      };
      this[vm] = {
        session: e2,
        context: t2,
        antialias: r2.antialias
      };
    }
    get context() {
      return this[vm].context;
    }
    get antialias() {
      return this[vm].antialias;
    }
    get ignoreDepthValues() {
      return true;
    }
    get framebuffer() {
      return null;
    }
    get framebufferWidth() {
      return this[vm].context.drawingBufferWidth;
    }
    get framebufferHeight() {
      return this[vm].context.drawingBufferHeight;
    }
    getViewport(e2) {
      if (e2[km].session !== this[vm].session) throw new DOMException(`View's session differs from Layer's session`, `InvalidStateError`);
      return this[vm].session[K].device[H].getViewport(this, e2);
    }
    static getNativeFramebufferScaleFactor(e2) {
      if (!(e2 instanceof Jh)) throw TypeError(`getNativeFramebufferScaleFactor must be passed a session.`);
      return +!e2[K].ended;
    }
  }, gg = class {
    constructor(e2, t2, n2) {
      let { schema: r2, frames: i2 } = t2;
      if (!i2 || !r2 || i2.length === 0) throw new DOMException(`wrong recording format`, `NotSupportedError`);
      let a2 = new Ph(Nh.Viewer, e2), o2 = {
        [J.Left]: new Pm(a2),
        [J.Right]: new Pm(a2),
        [J.None]: new Pm(a2)
      };
      this[V] = {
        refSpace: e2,
        inputSources: /* @__PURE__ */ new Map(),
        inputSchemas: /* @__PURE__ */ new Map(),
        frames: i2,
        recordedFramePointer: 0,
        startingTimeStamp: i2[0][0],
        endingTimeStamp: i2[i2.length - 1][0],
        playbackTime: i2[0][0],
        playing: false,
        viewerSpace: a2,
        viewSpaces: o2,
        vec3: Rp(),
        quat: rm()
      }, kp(this[V].viewSpaces[J.Left][Om].offsetMatrix, Bp(-n2 / 2, 0, 0)), kp(this[V].viewSpaces[J.Right][Om].offsetMatrix, Bp(n2 / 2, 0, 0)), r2.forEach((t3) => {
        let n3 = t3[0], r3 = t3[1], i3;
        if (r3.hasGamepad) {
          let e3 = [];
          for (let t5 = 0; t5 < r3.numButtons; t5++) e3.push({
            id: t5.toString(),
            type: `manual`
          });
          let t4 = [];
          for (let e4 = 0; e4 < r3.numAxes; e4++) t4.push({
            id: e4.toString(),
            type: `manual`
          });
          i3 = new ih({
            mapping: r3.mapping,
            buttons: e3,
            axes: t4
          });
        }
        let a3 = new Pm(e2), o3;
        r3.hasHand && (o3 = new Xh(), Object.values(Yh).forEach((e3) => {
          o3.set(e3, new Zh(e3, a3));
        }));
        let s2 = new ch(r3.handedness, r3.targetRayMode, r3.profiles, a3, i3, r3.hasGrip ? new Pm(e2) : void 0, r3.hasHand ? o3 : void 0);
        this[V].inputSources.set(n3, {
          active: false,
          source: s2
        }), this[V].inputSchemas.set(n3, r3);
      });
    }
    play() {
      this[V].recordedFramePointer = 0, this[V].playbackTime = this[V].startingTimeStamp, this[V].playing = true, this[V].actualTimeStamp = performance.now();
    }
    stop() {
      this[V].playing = false;
    }
    get playing() {
      return this[V].playing;
    }
    get viewerSpace() {
      return this[V].viewerSpace;
    }
    get viewSpaces() {
      return this[V].viewSpaces;
    }
    get inputSources() {
      return Array.from(this[V].inputSources.values()).filter((e2) => e2.active).map((e2) => e2.source);
    }
    playFrame() {
      let e2 = performance.now(), t2 = e2 - this[V].actualTimeStamp;
      if (this[V].actualTimeStamp = e2, this[V].playbackTime += t2, this[V].playbackTime > this[V].endingTimeStamp) {
        this.stop();
        return;
      }
      for (; this[V].frames[this[V].recordedFramePointer + 1][0] < this[V].playbackTime; ) this[V].recordedFramePointer++;
      let n2 = this[V].frames[this[V].recordedFramePointer], r2 = this[V].frames[this[V].recordedFramePointer + 1], i2 = (this[V].playbackTime - n2[0]) / (r2[0] - n2[0]);
      this.updateXRSpaceFromMergedFrames(this[V].viewerSpace, n2.slice(1, 8), r2.slice(1, 8), i2);
      let a2 = /* @__PURE__ */ new Map();
      for (let e3 = 8; e3 < n2.length; e3++) {
        let { index: t3, inputData: r3 } = this.processRawInputData(n2[e3]);
        a2.set(t3, r3);
      }
      let o2 = /* @__PURE__ */ new Map();
      for (let e3 = 8; e3 < r2.length; e3++) {
        let { index: t3, inputData: n3 } = this.processRawInputData(r2[e3]);
        o2.set(t3, n3);
      }
      this[V].inputSources.forEach((e3) => {
        e3.active = false;
      }), o2.forEach((e3, t3) => {
        this[V].inputSources.get(t3).active = true;
        let n3 = this[V].inputSources.get(t3).source, r3 = this[V].inputSchemas.get(t3);
        this.updateInputSource(n3, r3, a2.has(t3) ? a2.get(t3) : e3, e3, i2);
      });
    }
    updateInputSource(e2, t2, n2, r2, i2) {
      if (this.updateXRSpaceFromMergedFrames(e2.targetRaySpace, n2.targetRayTransform, r2.targetRayTransform, i2), t2.hasGrip && this.updateXRSpaceFromMergedFrames(e2.gripSpace, n2.gripTransform, r2.gripTransform, i2), t2.hasHand) for (let a2 = 0; a2 < 25; a2++) {
        let o2 = n2.handTransforms.slice(a2 * 8, a2 * 8 + 7), s2 = r2.handTransforms.slice(a2 * 8, a2 * 8 + 7), c2 = n2.handTransforms[a2 * 8 + 7], l2 = r2.handTransforms[a2 * 8 + 7], u2 = e2.hand.get(t2.jointSequence[a2]);
        this.updateXRSpaceFromMergedFrames(u2, o2, s2, i2), u2[Em].radius = (l2 - c2) * i2 + c2;
      }
      if (t2.hasGamepad) {
        let t3 = e2.gamepad;
        r2.buttons.forEach((e3, r3) => {
          let a2 = t3.buttons[r3];
          a2[G].pressed = e3[0] === 1, a2[G].touched = e3[1] === 1;
          let o2 = n2.buttons[r3][2], s2 = e3[2];
          a2[G].value = (s2 - o2) * i2 + o2;
        }), r2.axes.forEach((e3, r3) => {
          let a2 = n2.axes[r3];
          t3[G].axesMap[r3.toString()].x = (e3 - a2) * i2 + a2;
        });
      }
    }
    updateXRSpaceFromMergedFrames(e2, t2, n2, r2) {
      let i2 = Bp(t2[0], t2[1], t2[2]), a2 = lm(t2[3], t2[4], t2[5], t2[6]), o2 = Bp(n2[0], n2[1], n2[2]), s2 = lm(n2[3], n2[4], n2[5], n2[6]);
      qp(this[V].vec3, i2, o2, r2), om(this[V].quat, a2, s2, r2), jp(e2[Om].offsetMatrix, this[V].quat, this[V].vec3);
    }
    processRawInputData(e2) {
      let t2 = e2[0], n2 = this[V].inputSchemas.get(t2), r2 = {
        targetRayTransform: e2.slice(1, 8)
      }, i2 = 8;
      if (n2.hasGrip && (r2.gripTransform = e2[i2++]), n2.hasHand && (r2.handTransforms = e2[i2++]), n2.hasGamepad) {
        let t3 = e2[i2];
        r2.buttons = t3.slice(0, n2.numButtons), r2.axes = t3.slice(n2.numButtons);
      }
      return {
        index: t2,
        inputData: r2
      };
    }
  }, _g = `2.2.1`, vg = class extends Event {
    constructor(e2, t2) {
      if (super(e2, t2), !t2.referenceSpace) throw Error(`XRReferenceSpaceEventInit.referenceSpace is required`);
      this.referenceSpace = t2.referenceSpace, this.transform = t2.transform;
    }
  }, yg = class extends EventTarget {
    constructor(e2) {
      super(), this[gm] = {
        device: e2,
        grantSession: ({ resolve: e3, reject: t2, mode: n2, options: r2 }) => {
          if (this[gm].activeSession) {
            t2(new DOMException(`An active XRSession already exists.`, `InvalidStateError`));
            return;
          }
          let { requiredFeatures: i2 = [], optionalFeatures: a2 = [] } = r2, { supportedFeatures: o2 } = this[gm].device;
          if (!i2.every((e4) => o2.includes(e4))) {
            t2(Error(`One or more required features are not supported by the device.`));
            return;
          }
          let s2 = a2.filter((e4) => o2.includes(e4)), c2 = Array.from(/* @__PURE__ */ new Set([
            ...i2,
            ...s2,
            `viewer`,
            `local`
          ])), l2 = new Jh(this[gm].device, n2, c2);
          this[gm].activeSession = l2, l2.addEventListener(`end`, () => {
            this[gm].activeSession = void 0;
          }), e3(l2);
        }
      };
    }
    isSessionSupported(e2) {
      return new Promise((t2, n2) => {
        t2(e2 === `inline` || this[gm].device.supportedSessionModes.includes(e2));
      });
    }
    requestSession(e2, t2 = {}) {
      return new Promise((n2, r2) => {
        this.isSessionSupported(e2).then((i2) => {
          if (!i2) {
            r2(new DOMException(`The requested XRSession mode is not supported.`, `NotSupportedError`));
            return;
          }
          let a2 = {
            resolve: n2,
            reject: r2,
            mode: e2,
            options: t2
          };
          this[gm].grantSession(a2);
        }).catch(r2);
      });
    }
    offerSession(e2, t2 = {}) {
      return new Promise((n2, r2) => {
        this.isSessionSupported(e2).then((i2) => {
          i2 ? this[gm].offeredSessionConfig = {
            resolve: n2,
            reject: r2,
            mode: e2,
            options: t2
          } : r2(new DOMException(`The requested XRSession mode is not supported.`, `NotSupportedError`));
        }).catch(r2);
      });
    }
  }, bg = class {
    constructor(e2, t2, n2, r2) {
      this[Am] = {
        x: e2,
        y: t2,
        width: n2,
        height: r2
      };
    }
    get x() {
      return this[Am].x;
    }
    get y() {
      return this[Am].y;
    }
    get width() {
      return this[Am].width;
    }
    get height() {
      return this[Am].height;
    }
  }, Y;
  (function(e2) {
    e2.texture = `texture`, e2[`texture-array`] = `texture-array`;
  })(Y || (Y = {}));
  var X;
  (function(e2) {
    e2.default = `default`, e2.mono = `mono`, e2.stereo = `stereo`, e2[`stereo-left-right`] = `stereo-left-right`, e2[`stereo-top-bottom`] = `stereo-top-bottom`;
  })(X || (X = {}));
  var xg = (e2) => e2 && typeof e2.getOffsetReferenceSpace == `function`, Sg = () => typeof global < `u` ? global : typeof self < `u` ? self : typeof window < `u` ? window : {}, Cg = (e2, t2) => {
    switch (t2) {
      case e2.RGBA8:
      case e2.RGB5_A1:
      case e2.RGBA4:
      case e2.SRGB8_ALPHA8:
        return {
          internalFormat: t2,
          textureFormat: e2.RGBA,
          type: e2.UNSIGNED_BYTE
        };
      case e2.RGBA8_SNORM:
        return {
          internalFormat: t2,
          textureFormat: e2.RGBA,
          type: e2.BYTE
        };
      case e2.RGB10_A2:
        return {
          internalFormat: t2,
          textureFormat: e2.RGBA,
          type: e2.UNSIGNED_INT_2_10_10_10_REV
        };
      case e2.RGBA16F:
        return {
          internalFormat: t2,
          textureFormat: e2.RGBA,
          type: e2.HALF_FLOAT
        };
      case e2.RGBA32F:
        return {
          internalFormat: t2,
          textureFormat: e2.RGBA,
          type: e2.FLOAT
        };
      case e2.RGBA8UI:
        return {
          internalFormat: t2,
          textureFormat: e2.RGBA_INTEGER,
          type: e2.UNSIGNED_BYTE
        };
      case e2.RGBA8I:
        return {
          internalFormat: t2,
          textureFormat: e2.RGBA_INTEGER,
          type: e2.BYTE
        };
      case e2.RGBA16UI:
        return {
          internalFormat: t2,
          textureFormat: e2.RGBA_INTEGER,
          type: e2.UNSIGNED_SHORT
        };
      case e2.RGBA16I:
        return {
          internalFormat: t2,
          textureFormat: e2.RGBA_INTEGER,
          type: e2.SHORT
        };
      case e2.RGBA32UI:
        return {
          internalFormat: t2,
          textureFormat: e2.RGBA_INTEGER,
          type: e2.UNSIGNED_INT
        };
      case e2.RGBA32I:
        return {
          internalFormat: t2,
          textureFormat: e2.RGBA_INTEGER,
          type: e2.INT
        };
      case e2.RGB10_A2UI:
        return {
          internalFormat: t2,
          textureFormat: e2.RGBA_INTEGER,
          type: e2.UNSIGNED_INT_2_10_10_10_REV
        };
      case e2.RGB8:
      case e2.RGB565:
      case e2.SRGB8:
        return {
          internalFormat: t2,
          textureFormat: e2.RGB,
          type: e2.UNSIGNED_BYTE
        };
      case e2.RGB8_SNORM:
        return {
          internalFormat: t2,
          textureFormat: e2.RGB,
          type: e2.BYTE
        };
      case e2.RGB16F:
      case e2.R11F_G11F_B10F:
      case e2.RGB9_E5:
        return {
          internalFormat: t2,
          textureFormat: e2.RGB,
          type: e2.HALF_FLOAT
        };
      case e2.RGB32F:
        return {
          internalFormat: t2,
          textureFormat: e2.RGB,
          type: e2.FLOAT
        };
      case e2.RGB8UI:
        return {
          internalFormat: t2,
          textureFormat: e2.RGB_INTEGER,
          type: e2.UNSIGNED_BYTE
        };
      case e2.RGB8I:
        return {
          internalFormat: t2,
          textureFormat: e2.RGB_INTEGER,
          type: e2.BYTE
        };
      case e2.RGB16UI:
        return {
          internalFormat: t2,
          textureFormat: e2.RGB_INTEGER,
          type: e2.UNSIGNED_SHORT
        };
      case e2.RGB16I:
        return {
          internalFormat: t2,
          textureFormat: e2.RGB_INTEGER,
          type: e2.SHORT
        };
      case e2.RGB32UI:
        return {
          internalFormat: t2,
          textureFormat: e2.RGB_INTEGER,
          type: e2.UNSIGNED_INT
        };
      case e2.RGB32I:
        return {
          internalFormat: t2,
          textureFormat: e2.RGB_INTEGER,
          type: e2.INT
        };
      case e2.DEPTH_COMPONENT16:
        return {
          internalFormat: t2,
          textureFormat: e2.DEPTH_COMPONENT,
          type: e2.UNSIGNED_SHORT
        };
      case e2.DEPTH_COMPONENT24:
        return {
          internalFormat: t2,
          textureFormat: e2.DEPTH_COMPONENT,
          type: e2.UNSIGNED_INT
        };
      case e2.DEPTH_COMPONENT32F:
        return {
          internalFormat: t2,
          textureFormat: e2.DEPTH_COMPONENT,
          type: e2.FLOAT
        };
      case e2.DEPTH24_STENCIL8:
        return {
          internalFormat: t2,
          textureFormat: e2.DEPTH_STENCIL,
          type: e2.UNSIGNED_INT_24_8
        };
      case e2.DEPTH32F_STENCIL8:
        return {
          internalFormat: t2,
          textureFormat: e2.DEPTH_STENCIL,
          type: e2.FLOAT_32_UNSIGNED_INT_24_8_REV
        };
      case e2.DEPTH_COMPONENT:
        return Cg(e2, e2.DEPTH_COMPONENT24);
      case e2.DEPTH_STENCIL:
        return Cg(e2, e2.DEPTH24_STENCIL8);
      case e2.RGBA:
      case e2.RGB:
      case e2.LUMINANCE_ALPHA:
      case e2.LUMINANCE:
      case e2.ALPHA:
        return {
          internalFormat: t2,
          textureFormat: t2,
          type: e2.UNSIGNED_BYTE
        };
      default:
        throw Error(`Attempted to create polyfill with unsupported format.`);
    }
  }, wg = class {
    constructor() {
      this._hasRunDeferredInitialize = false, this._media = null;
    }
    initialize(e2, t2) {
      this.session = e2, t2 && (this.context = t2), this.blendTextureSourceAlpha = true;
    }
    destroy() {
      this._colorTextures = [], this._depthStencilTextures = [];
    }
    addEventListener(e2, t2, n2) {
    }
    dispatchEvent(e2) {
      return false;
    }
    removeEventListener(e2, t2, n2) {
    }
    getContext() {
      return this.context;
    }
    getTextureType() {
      throw Error(`Unimplemented`);
    }
    get colorTextures() {
      return this._colorTextures;
    }
    get depthStencilTextures() {
      return this._depthStencilTextures;
    }
    get colorTexturesMeta() {
      return this._texturesMeta;
    }
    get media() {
      return this.isMediaLayer() || console.warn(`Attempted to retrieve media from a non-media layer`), this._media;
    }
    determineLayoutAttribute(e2, t2, n2) {
      if (!(t2 instanceof WebGL2RenderingContext) && e2 === Y[`texture-array`]) throw TypeError();
      if (n2 === X.mono) return n2;
      if (n2 === X.default) {
        if (this.session.internalViews && this.session.internalViews.length === 1) return X.mono;
        if (e2 === Y[`texture-array`]) return n2;
      }
      return n2 === X.default || n2 === X.stereo ? X[`stereo-left-right`] : n2;
    }
    isMediaLayer() {
      return this._media !== null;
    }
    _deferredInitialize() {
    }
    initializeIfNeeded() {
      this._hasRunDeferredInitialize || (this._hasRunDeferredInitialize = true, this._deferredInitialize());
    }
    _allocateColorTexturesInternal(e2, t2) {
      let n2 = this.session.internalViews;
      if (!n2 || n2.length === 0) console.warn(`We can't allocate color textures without views`);
      else {
        if (this.initializeIfNeeded(), this.layout === X.mono) {
          if (e2 === Y[`texture-array`]) {
            let n3 = this._createNewColorTexture(t2.viewPixelWidth, t2.viewPixelHeight, e2, t2.colorFormat);
            this._texturesMeta = [
              n3
            ], this._colorTextures = [
              n3.texture
            ];
            return;
          }
          {
            let n3 = this._createNewColorTexture(t2.viewPixelWidth, t2.viewPixelHeight, e2, t2.colorFormat);
            this._texturesMeta = [
              n3
            ], this._colorTextures = [
              n3.texture
            ];
            return;
          }
        }
        if (this.layout === X.stereo) {
          if (e2 === Y[`texture-array`]) {
            let n3 = this._createNewColorTexture(t2.viewPixelWidth, t2.viewPixelHeight, e2, t2.colorFormat, 2);
            this._texturesMeta = [
              n3
            ], this._colorTextures = [
              n3.texture
            ];
            return;
          }
          {
            let n3 = this._createNewColorTexture(t2.viewPixelWidth, t2.viewPixelHeight, e2, t2.colorFormat), r2 = this._createNewColorTexture(t2.viewPixelWidth, t2.viewPixelHeight, e2, t2.colorFormat);
            this._texturesMeta = [
              n3,
              r2
            ], this._colorTextures = [
              n3.texture,
              r2.texture
            ];
            return;
          }
        }
        if (this.layout === X[`stereo-left-right`]) {
          let n3 = this._createNewColorTexture(t2.viewPixelWidth * 2, t2.viewPixelHeight, e2, t2.colorFormat);
          this._texturesMeta = [
            n3
          ], this._colorTextures = [
            n3.texture
          ];
        } else if (this.layout === X[`stereo-top-bottom`]) {
          let n3 = this._createNewColorTexture(t2.viewPixelWidth, t2.viewPixelHeight * 2, e2, t2.colorFormat);
          this._texturesMeta = [
            n3
          ], this._colorTextures = [
            n3.texture
          ];
        }
      }
    }
    _allocateDepthStencilTexturesInternal(e2, t2) {
      if (!t2.depthFormat) this._depthStencilTextures = [];
      else {
        if (this._getSupportedDepthFormats().indexOf(t2.depthFormat) < 0) throw Error(`Depth format provided is not supported in non-projection layers.`);
        if (t2.mipLevels < 1) throw Error(`Invalid miplevel. Miplevel needs to be >= 1`);
        if (this.layout === X.mono) {
          if (e2 === Y[`texture-array`]) {
            let n2 = this._createNewDepthStencilTexture(t2.viewPixelWidth, t2.viewPixelHeight, e2, t2.depthFormat);
            this._depthStencilTextures = [
              n2.texture
            ];
            return;
          }
          {
            let n2 = this._createNewColorTexture(t2.viewPixelWidth, t2.viewPixelHeight, e2, t2.depthFormat);
            this._depthStencilTextures = [
              n2.texture
            ];
            return;
          }
        }
        if (this.layout === X.stereo) {
          if (e2 === Y[`texture-array`]) {
            let n2 = this._createNewDepthStencilTexture(t2.viewPixelWidth, t2.viewPixelHeight, e2, t2.depthFormat, 2);
            this._depthStencilTextures = [
              n2.texture
            ];
            return;
          }
          {
            let n2 = this._createNewDepthStencilTexture(t2.viewPixelWidth, t2.viewPixelHeight, e2, t2.depthFormat), r2 = this._createNewDepthStencilTexture(t2.viewPixelWidth, t2.viewPixelHeight, e2, t2.depthFormat);
            this._depthStencilTextures = [
              n2.texture,
              r2.texture
            ];
            return;
          }
        }
        if (this.layout === X[`stereo-left-right`]) {
          let n2 = this._createNewDepthStencilTexture(t2.viewPixelWidth * 2, t2.viewPixelHeight, e2, t2.depthFormat);
          this._depthStencilTextures = [
            n2.texture
          ];
        } else if (this.layout === X[`stereo-top-bottom`]) {
          let n2 = this._createNewDepthStencilTexture(t2.viewPixelWidth, t2.viewPixelHeight * 2, e2, t2.depthFormat);
          this._depthStencilTextures = [
            n2.texture
          ];
        }
      }
    }
    _createNewColorTexture(e2, t2, n2, r2, i2 = 1) {
      return this._createGenericPolyfillTexture(n2, e2, t2, r2, 0, i2);
    }
    _createNewDepthStencilTexture(e2, t2, n2, r2, i2 = 1) {
      return this._createGenericPolyfillTexture(n2, e2, t2, r2, 0, i2);
    }
    _createGenericPolyfillTexture(e2, t2, n2, r2, i2 = 0, a2 = 1) {
      if (e2 === Y[`texture-array`] && a2 <= 1 && console.warn(`creating a texture array with a single layer...`), e2 === Y[`texture-array`] && this.context instanceof WebGLRenderingContext) throw Error(`WebGL 1 does not support texture array`);
      let o2 = this.context.createTexture(), s2 = {
        width: t2,
        height: n2,
        layers: a2,
        type: e2,
        textureFormat: r2,
        texture: o2
      }, c2 = r2, l2 = this.context.UNSIGNED_BYTE;
      if (this.context instanceof WebGL2RenderingContext) {
        let e3 = Cg(this.context, r2);
        c2 = e3.internalFormat, r2 = e3.textureFormat, l2 = e3.type;
      } else r2 === this.context.DEPTH_COMPONENT && (l2 = this.context.UNSIGNED_INT), r2 === this.context.DEPTH_STENCIL && (l2 = this.context.UNSIGNED_INT_24_8_WEBGL);
      if (e2 === Y[`texture-array`] && this.context instanceof WebGL2RenderingContext) {
        console.warn(`texture-array layers are supported...questionably in the polyfill at the moment. Use at your own risk.`);
        let e3 = this.context.getParameter(this.context.TEXTURE_BINDING_2D_ARRAY);
        this.context.bindTexture(this.context.TEXTURE_2D_ARRAY, o2), this._getSupportedDepthFormats().indexOf(r2) >= 0 ? this.context.texStorage3D(this.context.TEXTURE_2D_ARRAY, 1, c2, t2, n2, a2) : this.context.texImage3D(this.context.TEXTURE_2D_ARRAY, 0, c2, t2, n2, a2, 0, r2, l2, null), this.context.bindTexture(this.context.TEXTURE_2D_ARRAY, e3);
      } else {
        let e3 = this.context.getParameter(this.context.TEXTURE_BINDING_2D);
        this.context.bindTexture(this.context.TEXTURE_2D, o2), this.context.texImage2D(this.context.TEXTURE_2D, 0, c2, t2, n2, 0, r2, l2, null), this.context.bindTexture(this.context.TEXTURE_2D, e3);
      }
      return s2;
    }
    _getSupportedDepthFormats() {
      let e2 = [];
      return this.context instanceof WebGLRenderingContext && !this.context.getExtension(`WEBGL_depth_texture`) || (e2.push(this.context.DEPTH_COMPONENT, this.context.DEPTH_STENCIL), this.context instanceof WebGL2RenderingContext && e2.push(this.context.DEPTH_COMPONENT24, this.context.DEPTH24_STENCIL8)), e2;
    }
  }, Tg = {
    colorFormat: 6408,
    mipLevels: 1,
    layout: X.mono,
    isStatic: false,
    space: null,
    viewPixelHeight: 0,
    viewPixelWidth: 0,
    textureType: Y.texture,
    radius: 2,
    centralAngle: 0.78539,
    aspectRatio: 2
  }, Eg = {
    layout: X.mono,
    invertStereo: false,
    space: null,
    radius: 2,
    centralAngle: 0.78539
  }, Dg = class extends wg {
    constructor(e2, t2) {
      super(), this._media = t2 ?? null, this.init = this.isMediaLayer() ? Object.assign(Object.assign({}, Eg), e2) : Object.assign(Object.assign({}, Tg), e2), this.radius = this.init.radius, this.centralAngle = this.init.centralAngle, this.aspectRatio = this.init.aspectRatio, this.space = this.init.space, this.layout = this.init.layout;
      let n2 = Sg();
      this.transform = this.init.transform ? new n2.XRRigidTransform(e2.transform.position, e2.transform.orientation) : new n2.XRRigidTransform({
        x: 0,
        y: 0,
        z: 0,
        w: 1
      }), this.isMediaLayer() || (this.isStatic = e2.isStatic);
    }
    getTextureType() {
      return this.isMediaLayer() ? Y.texture : this.init.textureType;
    }
    _deferredInitialize() {
      let e2 = this.determineLayoutAttribute(this.init.textureType, this.context, this.init.layout);
      this.layout = e2, this.needsRedraw = true;
    }
    get colorTextures() {
      if (this.isMediaLayer()) throw Error(`Media layers do not have associated textures`);
      return this._colorTextures && this._colorTextures.length || this._allocateColorTexturesInternal(this.getTextureType(), this.init), this._colorTextures;
    }
    get depthStencilTextures() {
      if (this.isMediaLayer()) throw Error(`Media layers do not have associated textures`);
      return this._depthStencilTextures && this._depthStencilTextures.length || this._allocateDepthStencilTexturesInternal(this.getTextureType(), this.init), this._depthStencilTextures;
    }
    get colorTexturesMeta() {
      if (this.isMediaLayer()) throw Error(`Media layers do not have associated textures`);
      return this._colorTextures && this._colorTextures.length || this._allocateColorTexturesInternal(this.getTextureType(), this.init), this._texturesMeta;
    }
    get width() {
      return 2 * this.radius * Math.PI * (this.centralAngle / (2 * Math.PI));
    }
    get height() {
      return this.width / this.aspectRatio;
    }
  }, Og = {
    colorFormat: 6408,
    mipLevels: 1,
    layout: X.mono,
    isStatic: false,
    space: null,
    viewPixelHeight: 0,
    viewPixelWidth: 0,
    textureType: Y.texture,
    radius: 0,
    centralHorizontalAngle: 6.28318,
    upperVerticalAngle: 1.570795,
    lowerVerticalAngle: -1.570795
  }, kg = {
    space: null,
    layout: X.mono,
    invertStereo: false,
    radius: 0,
    centralHorizontalAngle: 6.28318,
    upperVerticalAngle: 1.570795,
    lowerVerticalAngle: -1.570795
  }, Ag = class extends wg {
    constructor(e2, t2) {
      if (super(), this._media = t2 ?? null, this.init = this.isMediaLayer() ? Object.assign(Object.assign({}, kg), e2) : Object.assign(Object.assign({}, Og), e2), !xg(this.init.space)) throw TypeError(`Equirect layer's space needs to be an XRReferenceSpace`);
      this.radius = this.init.radius, this.centralHorizontalAngle = this.init.centralHorizontalAngle, this.upperVerticalAngle = this.init.upperVerticalAngle, this.lowerVerticalAngle = this.init.lowerVerticalAngle, this.space = this.init.space, this.layout = this.init.layout;
      let n2 = Sg();
      this.transform = e2.transform ? new n2.XRRigidTransform(e2.transform.position, e2.transform.orientation) : new n2.XRRigidTransform({
        x: 0,
        y: 0,
        z: 0,
        w: 1
      }), this.isMediaLayer() || (this.isStatic = e2.isStatic);
    }
    getTextureType() {
      return this.isMediaLayer() ? Y.texture : this.init.textureType;
    }
    _deferredInitialize() {
      let e2 = this.determineLayoutAttribute(this.init.textureType, this.context, this.init.layout);
      this.layout = e2, this.needsRedraw = true;
    }
    get colorTextures() {
      if (this.isMediaLayer()) throw Error(`Media layers do not have associated textures`);
      return this._colorTextures && this._colorTextures.length || this._allocateColorTexturesInternal(this.getTextureType(), this.init), this._colorTextures;
    }
    get depthStencilTextures() {
      if (this.isMediaLayer()) throw Error(`Media layers do not have associated textures`);
      return this._depthStencilTextures && this._depthStencilTextures.length || this._allocateDepthStencilTexturesInternal(this.getTextureType(), this.init), this._depthStencilTextures;
    }
    get colorTexturesMeta() {
      if (this.isMediaLayer()) throw Error(`Media layers do not have associated textures`);
      return this._colorTextures && this._colorTextures.length || this._allocateColorTexturesInternal(this.getTextureType(), this.init), this._texturesMeta;
    }
  }, jg = {
    colorFormat: 6408,
    mipLevels: 1,
    layout: X.mono,
    isStatic: false,
    space: null,
    viewPixelHeight: 0,
    viewPixelWidth: 0,
    textureType: Y.texture,
    width: 1,
    height: 1
  }, Mg = {
    space: null,
    layout: X.mono,
    invertStereo: false
  }, Ng = class extends wg {
    constructor(e2, t2) {
      super(), this._media = t2 ?? null, this.init = this.isMediaLayer() ? Object.assign(Object.assign({}, Mg), e2) : Object.assign(Object.assign({}, jg), e2), this.width = this.init.width, this.height = this.init.height, this.space = this.init.space, this.layout = this.init.layout;
      let n2 = Sg();
      this.transform = this.init.transform ? new n2.XRRigidTransform(e2.transform.position, e2.transform.orientation) : new n2.XRRigidTransform({
        x: 0,
        y: 0,
        z: 0,
        w: 1
      }), this.isMediaLayer() || (this.isStatic = e2.isStatic);
    }
    getTextureType() {
      return this.isMediaLayer() ? Y.texture : this.init.textureType;
    }
    _deferredInitialize() {
      let e2 = this.determineLayoutAttribute(this.init.textureType, this.context, this.init.layout);
      this.layout = e2, this.needsRedraw = true;
    }
    get colorTextures() {
      if (this.isMediaLayer()) throw Error(`Media layers do not have associated textures`);
      return this._colorTextures && this._colorTextures.length || this._allocateColorTexturesInternal(this.getTextureType(), this.init), this._colorTextures;
    }
    get depthStencilTextures() {
      if (this.isMediaLayer()) throw Error(`Media layers do not have associated textures`);
      return this._depthStencilTextures && this._depthStencilTextures.length || this._allocateDepthStencilTexturesInternal(this.getTextureType(), this.init), this._depthStencilTextures;
    }
    get colorTexturesMeta() {
      if (this.isMediaLayer()) throw Error(`Media layers do not have associated textures`);
      return this._colorTextures && this._colorTextures.length || this._allocateColorTexturesInternal(this.getTextureType(), this.init), this._texturesMeta;
    }
  }, Pg = class {
    constructor(e2) {
      if (this.session = e2, this.session.ended) throw Error(`Session has ended`);
    }
    createQuadLayer(e2, t2) {
      if (this.session.ended) throw Error(`Session has ended`);
      if (t2.layout === X.default) throw TypeError(`Media Quad layer cannot be created with layout of default`);
      let n2 = this.calculateAspectRatio(e2, t2.layout);
      t2.width === void 0 && t2.height === void 0 && (t2.width = 1), t2.height === void 0 && (t2.height = t2.width / n2), t2.width === void 0 && (t2.width = t2.height / n2);
      let r2 = new Ng(t2, e2);
      return r2.needsRedraw = false, r2.initialize(this.session), r2;
    }
    createCylinderLayer(e2, t2) {
      if (this.session.ended) throw Error(`Session has ended`);
      if (t2.layout === X.default) throw TypeError(`Media Cylinder layer cannot be created with layout of default`);
      let n2 = this.calculateAspectRatio(e2, t2.layout);
      t2.aspectRatio === void 0 && (t2.aspectRatio = n2);
      let r2 = new Dg(t2, e2);
      return r2.needsRedraw = false, r2.initialize(this.session), r2;
    }
    createEquirectLayer(e2, t2) {
      if (this.session.ended) throw Error(`Session has ended`);
      if (t2.layout === X.default) throw TypeError(`Media Equirect layer cannot be created with layout of default`);
      if (!xg(t2.space)) throw Error(`Media Equirect layer's space must be of type XRReferenceSpace`);
      let n2 = new Ag(t2, e2);
      return n2.needsRedraw = false, n2.initialize(this.session), n2;
    }
    calculateAspectRatio(e2, t2) {
      let n2 = e2.videoWidth, r2 = e2.videoHeight;
      return t2 === X[`stereo-left-right`] && (n2 /= 2), t2 === X[`stereo-top-bottom`] && (r2 /= 2), n2 / r2;
    }
  }, Fg = {
    textureType: Y.texture,
    colorFormat: 6408,
    depthFormat: 6402,
    scaleFactor: 1
  }, Ig = class extends wg {
    constructor(e2 = Fg) {
      super(), this.init = Object.assign(Object.assign({}, Fg), e2);
    }
    initialize(e2, t2) {
      super.initialize(e2, t2), this.initializeIfNeeded();
      let n2 = e2.getBaseLayer();
      this.textureWidth = n2.framebufferWidth * this.init.scaleFactor, this.textureHeight = n2.framebufferHeight * this.init.scaleFactor;
    }
    _allocateProjectionColorTextures() {
      let e2 = [], t2 = [], n2 = () => {
        e2 = [];
        for (let n3 of t2) e2.push(n3.texture);
      }, r2 = this.session, i2 = r2.internalViews;
      if (!i2 || i2.length === 0) {
        console.warn(`We can't allocate color textures without views`);
        return;
      }
      let a2 = r2.getBaseLayer(), o2 = i2.length, s2 = a2.framebufferWidth * this.init.scaleFactor / i2.length, c2 = a2.framebufferHeight * this.init.scaleFactor;
      if (this.layout === X.mono || this.layout === X.default) {
        if (this.init.textureType === Y[`texture-array`]) t2 = [
          this._createNewColorTexture(s2, c2, Y[`texture-array`], this.init.colorFormat, o2)
        ];
        else for (let e3 of i2) {
          let e4 = this._createNewColorTexture(s2, c2, Y.texture, this.init.colorFormat);
          t2.push(e4);
        }
        n2(), this._colorTexturesMeta = t2, this._colorTextures = e2;
      } else this.layout === X[`stereo-left-right`] ? t2 = [
        this._createNewColorTexture(s2 * o2, c2, this.init.textureType, this.init.colorFormat)
      ] : this.layout === X[`stereo-top-bottom`] && (t2 = [
        this._createNewColorTexture(s2, c2 * o2, this.init.textureType, this.init.colorFormat)
      ]), n2(), this._colorTexturesMeta = t2, this._colorTextures = e2;
    }
    _allocateProjectionDepthStencilTextures() {
      let e2 = this.session, t2 = e2.internalViews;
      if (!t2 || t2.length === 0) return;
      if (this.init.depthFormat === 0 || this.context instanceof WebGLRenderingContext && !this.context.getExtension(`WEBGL_depth_texture`)) {
        this._depthStencilTextures = [];
        return;
      }
      let n2 = [], r2 = [], i2 = () => {
        n2 = [];
        for (let e3 of r2) n2.push(e3.texture);
      };
      this.initializeIfNeeded();
      let a2 = e2.getBaseLayer(), o2 = t2.length, s2 = a2.framebufferWidth * this.init.scaleFactor / t2.length, c2 = a2.framebufferHeight * this.init.scaleFactor;
      if (this.layout === X.mono || this.layout === X.default) {
        if (this.init.textureType === Y[`texture-array`]) r2 = [
          this._createNewDepthStencilTexture(s2, c2, this.init.textureType, this.init.depthFormat, o2)
        ];
        else for (let e3 of t2) {
          let e4 = this._createNewDepthStencilTexture(s2, c2, this.init.textureType, this.init.depthFormat);
          r2.push(e4);
        }
        i2(), this._depthStencilTextures = n2;
      } else this.layout === X[`stereo-left-right`] ? r2 = [
        this._createNewDepthStencilTexture(s2 * o2, c2, this.init.textureType, this.init.depthFormat)
      ] : this.layout === X[`stereo-top-bottom`] && (r2 = [
        this._createNewDepthStencilTexture(s2, c2 * o2, this.init.textureType, this.init.depthFormat)
      ]), i2(), this._depthStencilTextures = n2;
    }
    get colorTextures() {
      return this._colorTextures && this._colorTextures.length || this._allocateProjectionColorTextures(), this._colorTextures;
    }
    get depthStencilTextures() {
      return this._depthStencilTextures === void 0 && this._allocateProjectionDepthStencilTextures(), this._depthStencilTextures || [];
    }
    get colorTexturesMeta() {
      return this._colorTextures && this._colorTextures.length || this._allocateProjectionColorTextures(), this._colorTexturesMeta;
    }
    getTextureType() {
      return this.init.textureType;
    }
    _deferredInitialize() {
      this.isStatic = false, this.ignoreDepthValues = false, this.fixedFoveation = 0;
      let e2 = this.determineLayoutAttribute(this.init.textureType, this.context, X.default);
      this.layout = e2, this.needsRedraw = true;
      let t2 = this.determineMaximumScaleFactor(), n2 = Math.min(this.init.scaleFactor, t2);
      this.init.scaleFactor = n2;
    }
    determineMaximumScaleFactor() {
      let e2 = this.session.getBaseLayer(this.context), t2 = e2.framebufferWidth, n2 = e2.framebufferHeight;
      this.layout === X[`stereo-left-right`] && (t2 *= 2), this.layout === X[`stereo-top-bottom`] && (n2 *= 2);
      let r2 = Math.max(t2, n2);
      return this.context.getParameter(this.context.MAX_TEXTURE_SIZE) / r2;
    }
  }, Lg = (e2, t2, n2, r2, i2) => {
    let a2 = 0, o2 = 0, s2 = t2.width, c2 = t2.height;
    n2 === X[`stereo-left-right`] ? (a2 = t2.width * r2 / i2, s2 = t2.width / i2) : n2 === X[`stereo-top-bottom`] && (o2 = t2.height * r2 / i2, c2 = t2.height / i2), e2.x = a2, e2.y = o2, e2.width = s2, e2.height = c2;
  }, Rg = (e2, t2, n2) => {
    var r2 = e2.createShader(n2);
    if (e2.shaderSource(r2, t2), e2.compileShader(r2), !e2.getShaderParameter(r2, e2.COMPILE_STATUS)) throw `could not compile shader:` + e2.getShaderInfoLog(r2);
    return r2;
  }, zg = (e2, t2, n2) => {
    let r2 = e2.createProgram(), i2 = Rg(e2, t2, e2.VERTEX_SHADER), a2 = Rg(e2, n2, e2.FRAGMENT_SHADER);
    if (e2.attachShader(r2, i2), e2.attachShader(r2, a2), e2.deleteShader(i2), e2.deleteShader(a2), e2.linkProgram(r2), !e2.getProgramParameter(r2, e2.LINK_STATUS)) throw `program failed to link:` + e2.getProgramInfoLog(r2);
    return r2;
  }, Bg = (e2, t2, n2, r2, i2) => {
    var a2 = t2, o2 = t2 + r2, s2 = n2, c2 = n2 + i2;
    e2.bufferData(e2.ARRAY_BUFFER, new Float32Array([
      a2,
      s2,
      o2,
      s2,
      a2,
      c2,
      a2,
      c2,
      o2,
      s2,
      o2,
      c2
    ]), e2.DYNAMIC_DRAW);
  }, Vg = (e2) => {
    if (e2 instanceof WebGL2RenderingContext) return e2;
    let t2 = e2.getExtension(`OES_vertex_array_object`);
    if (!t2) throw Error(`Cannot use VAOs.`);
    return {
      VERTEX_ARRAY_BINDING: t2.VERTEX_ARRAY_BINDING_OES,
      bindVertexArray: t2.bindVertexArrayOES.bind(t2),
      createVertexArray: t2.createVertexArrayOES.bind(t2),
      deleteVertexArray: t2.deleteVertexArrayOES.bind(t2),
      isVertexArray: t2.isVertexArrayOES.bind(t2)
    };
  }, Hg = (e2) => e2, Ug = Hg`
attribute vec2 a_position;
attribute vec2 a_texCoord;

varying vec2 v_texCoord;

void main() {
   // convert the rectangle from pixels to 0.0 to 1.0
   vec2 zeroToOne = a_position;

   // convert from 0->1 to 0->2
   vec2 zeroToTwo = zeroToOne * 2.0;

   // convert from 0->2 to -1->+1 (clipspace)
   vec2 clipSpace = zeroToTwo - 1.0;

   gl_Position = vec4(clipSpace * vec2(1, 1), 0, 1);

   // pass the texCoord to the fragment shader
   // The GPU will interpolate this value between points.
   v_texCoord = a_texCoord;
}
`, Wg = Hg`
precision mediump float;

// our texture
uniform sampler2D u_image;

// the texCoords passed in from the vertex shader.
varying vec2 v_texCoord;

void main() {
   	vec4 tex = texture2D(u_image, v_texCoord);
	gl_FragColor = vec4(tex.rgb, tex.a);
}
`, Gg = class {
    constructor(e2, t2) {
      this.gl = t2, this.layer = e2, this.program = zg(this.gl, Ug, Wg), this.programInfo = {
        attribLocations: {
          a_position: this.gl.getAttribLocation(this.program, `a_position`),
          a_texCoord: this.gl.getAttribLocation(this.program, `a_texCoord`)
        }
      }, this._createVAOs();
    }
    render(e2) {
      let t2 = this.gl, n2 = e2.getBaseLayer();
      t2.viewport(0, 0, n2.framebufferWidth, n2.framebufferHeight);
      let r2 = this.layer.getTextureType(), i2 = t2.getParameter(t2.TEXTURE_BINDING_2D), a2 = t2.getParameter(t2.ACTIVE_TEXTURE);
      if (r2 === Y.texture) t2.activeTexture(t2.TEXTURE0), t2.bindTexture(t2.TEXTURE_2D, this.layer.colorTextures[0]), t2.texParameteri(t2.TEXTURE_2D, t2.TEXTURE_WRAP_S, t2.CLAMP_TO_EDGE), t2.texParameteri(t2.TEXTURE_2D, t2.TEXTURE_WRAP_T, t2.CLAMP_TO_EDGE), t2.texParameteri(t2.TEXTURE_2D, t2.TEXTURE_MIN_FILTER, t2.NEAREST), t2.texParameteri(t2.TEXTURE_2D, t2.TEXTURE_MAG_FILTER, t2.NEAREST);
      else throw Error(`Created a texture projection renderer instead of a texture-array projection renderer for a texture-array layer.
This is probably an error with the polyfill itself; please file an issue on Github if you run into this.`);
      for (let r3 of e2.internalViews) {
        let e3 = n2.getViewport(r3);
        t2.viewport(e3.x, e3.y, e3.width, e3.height), this._shouldUseStereoTexturePoints() ? this._renderInternalStereo(r3) : this._renderInternal();
      }
      t2.activeTexture(a2), t2.bindTexture(t2.TEXTURE_2D, i2);
    }
    _renderInternal() {
      let e2 = this.gl, t2 = e2.getParameter(e2.CURRENT_PROGRAM);
      e2.useProgram(this.program), this.vaoGl.bindVertexArray(this.vao);
      var n2 = e2.TRIANGLES;
      e2.drawArrays(n2, 0, 6), this.vaoGl.bindVertexArray(null), e2.useProgram(t2);
    }
    _renderInternalStereo(e2) {
      if (e2.eye === `none`) return this._renderInternal();
      let t2 = this.gl;
      this.vaoGl.bindVertexArray(this.vao);
      let n2 = t2.getParameter(t2.CURRENT_PROGRAM);
      t2.useProgram(this.program), this._setStereoTextureBuffer(+(e2.eye === `right`));
      var r2 = t2.TRIANGLES;
      t2.drawArrays(r2, 0, 6), this.vaoGl.bindVertexArray(null), t2.useProgram(n2);
    }
    _createVAOs() {
      this._createTextureUVs();
      let e2 = this.gl;
      this.vaoGl = Vg(e2);
      let t2 = e2.createBuffer();
      this.vao = this.vaoGl.createVertexArray(), this.vaoGl.bindVertexArray(this.vao), e2.enableVertexAttribArray(this.programInfo.attribLocations.a_position), e2.bindBuffer(e2.ARRAY_BUFFER, t2), Bg(e2, 0, 0, 1, 1);
      let n2 = e2.FLOAT;
      e2.vertexAttribPointer(this.programInfo.attribLocations.a_position, 2, n2, false, 0, 0), this.texcoordBuffer = e2.createBuffer(), e2.enableVertexAttribArray(this.programInfo.attribLocations.a_texCoord), e2.bindBuffer(e2.ARRAY_BUFFER, this.texcoordBuffer), e2.bufferData(e2.ARRAY_BUFFER, this.texturePoints, e2.DYNAMIC_DRAW), e2.vertexAttribPointer(this.programInfo.attribLocations.a_texCoord, 2, n2, false, 0, 0), this.vaoGl.bindVertexArray(null), e2.bindBuffer(e2.ARRAY_BUFFER, null);
    }
    _setStereoTextureBuffer(e2) {
      let t2 = this.gl;
      t2.enableVertexAttribArray(this.programInfo.attribLocations.a_texCoord), t2.bindBuffer(t2.ARRAY_BUFFER, this.texcoordBuffer), t2.bufferData(t2.ARRAY_BUFFER, this.stereoTexturePoints[e2], t2.STATIC_DRAW);
      var n2 = 2, r2 = t2.FLOAT;
      t2.vertexAttribPointer(this.programInfo.attribLocations.a_texCoord, n2, r2, false, 0, 0), t2.bindBuffer(t2.ARRAY_BUFFER, null);
    }
    _createTextureUVs() {
      this.texturePoints = new Float32Array([
        0,
        0,
        1,
        0,
        0,
        1,
        0,
        1,
        1,
        0,
        1,
        1
      ]);
      let e2 = {
        x: 0,
        y: 0,
        width: 1,
        height: 1
      };
      this._shouldUseStereoTexturePoints() && (this.stereoTexturePoints = [], Lg(e2, this.layer.colorTexturesMeta[0], this.layer.layout, 0, 2), this.stereoTexturePoints[0] = this._offsetTextureUVsByRect(this.layer.colorTexturesMeta[0], this.texturePoints, e2), Lg(e2, this.layer.colorTexturesMeta[0], this.layer.layout, 1, 2), this.stereoTexturePoints[1] = this._offsetTextureUVsByRect(this.layer.colorTexturesMeta[0], this.texturePoints, e2));
    }
    _offsetTextureUVsByRect(e2, t2, n2) {
      n2 ?? (n2 = {
        x: 0,
        y: 0,
        width: e2.width,
        height: e2.height
      });
      let r2 = n2.x / e2.width, i2 = n2.y / e2.height, a2 = n2.width / e2.width, o2 = n2.height / e2.height, s2 = [];
      for (let e3 = 0; e3 < t2.length; e3 += 2) {
        let n3 = t2[e3], c2 = t2[e3 + 1], l2 = n3 * a2 + r2, u2 = c2 * o2 + i2;
        s2[e3] = l2, s2[e3 + 1] = u2;
      }
      return new Float32Array(s2);
    }
    _shouldUseStereoTexturePoints() {
      return this.layer.layout === X[`stereo-left-right`] || this.layer.layout === X[`stereo-top-bottom`];
    }
  }, Kg = Hg`#version 300 es

in vec2 a_position;
in vec2 a_texCoord;

out vec2 v_texCoord;

void main() {
	// convert the rectangle from pixels to 0.0 to 1.0
	vec2 zeroToOne = a_position;

	// convert from 0->1 to 0->2
	vec2 zeroToTwo = zeroToOne * 2.0;

	// convert from 0->2 to -1->+1 (clipspace)
	vec2 clipSpace = zeroToTwo - 1.0;

	gl_Position = vec4(clipSpace * vec2(1, 1), 0, 1);

	// pass the texCoord to the fragment shader
	// The GPU will interpolate this value between points.
	v_texCoord = a_texCoord;
}
`, qg = Hg`#version 300 es
precision mediump float;
precision mediump int;
precision mediump sampler2DArray;

uniform sampler2DArray u_image;
uniform int u_layer;

in vec2 v_texCoord;

out vec4 fragColor;

void main() {
	vec4 tex = texture(u_image, vec3(v_texCoord.x, v_texCoord.y, u_layer));
 	fragColor = vec4(tex.rgb, tex.a);
}

`, Jg = class extends Gg {
    constructor(e2, t2) {
      super(e2, t2), this.program = zg(this.gl, Kg, qg), this._createVAOs(), this.u_layerInfo = this.gl.getUniformLocation(this.program, `u_layer`);
    }
    render(e2) {
      let t2 = this.gl;
      if (this.layer.getTextureType() === Y.texture) throw Error(`Using texture array projection renderer on a layer without texture array.`);
      let n2 = e2.getBaseLayer(), r2 = t2.getParameter(t2.TEXTURE_BINDING_2D_ARRAY);
      t2.bindTexture(t2.TEXTURE_2D_ARRAY, this.layer.colorTextures[0]), t2.texParameteri(t2.TEXTURE_2D_ARRAY, t2.TEXTURE_MAG_FILTER, t2.LINEAR), t2.texParameteri(t2.TEXTURE_2D_ARRAY, t2.TEXTURE_MIN_FILTER, t2.LINEAR);
      for (let r3 of e2.internalViews) {
        let i2 = e2.getViewIndex(r3), a2 = n2.getViewport(r3);
        t2.viewport(a2.x, a2.y, a2.width, a2.height), this._renderInternal(i2);
      }
      t2.bindTexture(t2.TEXTURE_2D_ARRAY, r2);
    }
    _renderInternal(e2 = 0) {
      let t2 = this.gl, n2 = t2.getParameter(t2.CURRENT_PROGRAM);
      t2.useProgram(this.program), t2.bindVertexArray(this.vao), t2.uniform1i(this.u_layerInfo, e2);
      var r2 = t2.TRIANGLES;
      t2.drawArrays(r2, 0, 6), t2.bindVertexArray(null), t2.useProgram(n2);
    }
  }, Yg = (e2, t2) => e2.getTextureType() === Y[`texture-array`] && t2 instanceof WebGL2RenderingContext ? new Jg(e2, t2) : new Gg(e2, t2), Xg = typeof Float32Array < `u` ? Float32Array : Array;
  Math.hypot || (Math.hypot = function() {
    for (var e2 = 0, t2 = arguments.length; t2--; ) e2 += arguments[t2] * arguments[t2];
    return Math.sqrt(e2);
  });
  function Zg() {
    var e2 = new Xg(16);
    return Xg != Float32Array && (e2[1] = 0, e2[2] = 0, e2[3] = 0, e2[4] = 0, e2[6] = 0, e2[7] = 0, e2[8] = 0, e2[9] = 0, e2[11] = 0, e2[12] = 0, e2[13] = 0, e2[14] = 0), e2[0] = 1, e2[5] = 1, e2[10] = 1, e2[15] = 1, e2;
  }
  function Qg(e2, t2, n2) {
    var r2 = t2[0], i2 = t2[1], a2 = t2[2], o2 = t2[3], s2 = t2[4], c2 = t2[5], l2 = t2[6], u2 = t2[7], d2 = t2[8], f2 = t2[9], p2 = t2[10], m2 = t2[11], h2 = t2[12], g2 = t2[13], _2 = t2[14], v2 = t2[15], y2 = n2[0], b2 = n2[1], x2 = n2[2], S2 = n2[3];
    return e2[0] = y2 * r2 + b2 * s2 + x2 * d2 + S2 * h2, e2[1] = y2 * i2 + b2 * c2 + x2 * f2 + S2 * g2, e2[2] = y2 * a2 + b2 * l2 + x2 * p2 + S2 * _2, e2[3] = y2 * o2 + b2 * u2 + x2 * m2 + S2 * v2, y2 = n2[4], b2 = n2[5], x2 = n2[6], S2 = n2[7], e2[4] = y2 * r2 + b2 * s2 + x2 * d2 + S2 * h2, e2[5] = y2 * i2 + b2 * c2 + x2 * f2 + S2 * g2, e2[6] = y2 * a2 + b2 * l2 + x2 * p2 + S2 * _2, e2[7] = y2 * o2 + b2 * u2 + x2 * m2 + S2 * v2, y2 = n2[8], b2 = n2[9], x2 = n2[10], S2 = n2[11], e2[8] = y2 * r2 + b2 * s2 + x2 * d2 + S2 * h2, e2[9] = y2 * i2 + b2 * c2 + x2 * f2 + S2 * g2, e2[10] = y2 * a2 + b2 * l2 + x2 * p2 + S2 * _2, e2[11] = y2 * o2 + b2 * u2 + x2 * m2 + S2 * v2, y2 = n2[12], b2 = n2[13], x2 = n2[14], S2 = n2[15], e2[12] = y2 * r2 + b2 * s2 + x2 * d2 + S2 * h2, e2[13] = y2 * i2 + b2 * c2 + x2 * f2 + S2 * g2, e2[14] = y2 * a2 + b2 * l2 + x2 * p2 + S2 * _2, e2[15] = y2 * o2 + b2 * u2 + x2 * m2 + S2 * v2, e2;
  }
  function $g(e2, t2) {
    var n2 = t2[0], r2 = t2[1], i2 = t2[2], a2 = t2[3], o2 = n2 + n2, s2 = r2 + r2, c2 = i2 + i2, l2 = n2 * o2, u2 = r2 * o2, d2 = r2 * s2, f2 = i2 * o2, p2 = i2 * s2, m2 = i2 * c2, h2 = a2 * o2, g2 = a2 * s2, _2 = a2 * c2;
    return e2[0] = 1 - d2 - m2, e2[1] = u2 + _2, e2[2] = f2 - g2, e2[3] = 0, e2[4] = u2 - _2, e2[5] = 1 - l2 - m2, e2[6] = p2 + h2, e2[7] = 0, e2[8] = f2 + g2, e2[9] = p2 - h2, e2[10] = 1 - l2 - d2, e2[11] = 0, e2[12] = 0, e2[13] = 0, e2[14] = 0, e2[15] = 1, e2;
  }
  function e_() {
    var e2 = new Xg(2);
    return Xg != Float32Array && (e2[0] = 0, e2[1] = 0), e2;
  }
  (function() {
    var e2 = e_();
    return function(t2, n2, r2, i2, a2, o2) {
      var s2, c2;
      for (n2 || (n2 = 2), r2 || (r2 = 0), c2 = i2 ? Math.min(i2 * n2 + r2, t2.length) : t2.length, s2 = r2; s2 < c2; s2 += n2) e2[0] = t2[s2], e2[1] = t2[s2 + 1], a2(e2, e2, o2), t2[s2] = e2[0], t2[s2 + 1] = e2[1];
      return t2;
    };
  })();
  var t_ = (e2) => e2, n_ = t_`
attribute vec4 a_position;
attribute vec2 a_texCoord;

uniform mat4 u_matrix;
uniform mat4 u_projectionMatrix;

varying vec2 v_texCoord;

void main() {
  // Multiply the position by the matrix.
  gl_Position = u_projectionMatrix * u_matrix * a_position;

   // pass the texCoord to the fragment shader
   // The GPU will interpolate this value between points.
   v_texCoord = a_texCoord;
}
`, r_ = t_`
precision mediump float;

// our texture
uniform sampler2D u_image;

// the texCoords passed in from the vertex shader.
varying vec2 v_texCoord;

void main() {
   	vec4 tex = texture2D(u_image, v_texCoord);
	gl_FragColor = vec4(tex.rgb, tex.a);
	// gl_FragColor = vec4(1.0, 0, 0, 1.0);
}
`, i_ = t_`#version 300 es

in vec4 a_position;
in vec2 a_texCoord;

uniform mat4 u_matrix;
uniform mat4 u_projectionMatrix;

out vec2 v_texCoord;

void main() {
	// Multiply the position by the matrix.
    gl_Position = u_projectionMatrix * u_matrix * a_position;

	// pass the texCoord to the fragment shader
	// The GPU will interpolate this value between points.
	v_texCoord = a_texCoord;
}
`, a_ = t_`#version 300 es
precision mediump float;
precision mediump int;
precision mediump sampler2DArray;

uniform sampler2DArray u_image;
uniform int u_layer;

in vec2 v_texCoord;

out vec4 fragColor;

void main() {
	vec4 tex = texture(u_image, vec3(v_texCoord.x, v_texCoord.y, u_layer));
 	fragColor = vec4(tex.rgb, tex.a);
}

`, o_ = class {
    constructor(e2, t2) {
      this.usesTextureArrayShaders = false, this.savedVaoState = {
        vao: null,
        arrayBuffer: null
      }, this.hasMipmap = false, this.gl = t2, this.layer = e2;
      let n2 = this.gl;
      this.transformMatrix = Zg(), t2 instanceof WebGL2RenderingContext && this.layer.getTextureType() === Y[`texture-array`] && (this.usesTextureArrayShaders = true), this.program = this.usesTextureArrayShaders ? zg(n2, i_, a_) : zg(n2, n_, r_), this.programInfo = {
        attribLocations: {
          a_position: n2.getAttribLocation(this.program, `a_position`),
          a_texCoord: n2.getAttribLocation(this.program, `a_texCoord`)
        },
        uniformLocations: {
          u_matrix: n2.getUniformLocation(this.program, `u_matrix`),
          u_projectionMatrix: n2.getUniformLocation(this.program, `u_projectionMatrix`)
        }
      }, this.usesTextureArrayShaders && (this.programInfo.uniformLocations.u_layer = n2.getUniformLocation(this.program, `u_layer`));
    }
    saveVaoState() {
      this.savedVaoState.vao = this.gl.getParameter(this.vaoGl.VERTEX_ARRAY_BINDING), this.savedVaoState.arrayBuffer = this.gl.getParameter(this.gl.ARRAY_BUFFER_BINDING);
    }
    restoreVaoState() {
      this.vaoGl.bindVertexArray(this.savedVaoState.vao), this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.savedVaoState.arrayBuffer), this.savedVaoState.vao = this.savedVaoState.arrayBuffer = null;
    }
    initialize() {
      let e2 = this.gl;
      if (this.layer.isMediaLayer()) {
        this.mediaTexture = e2.createTexture(), this.mediaTexturePolyfill = {
          texture: this.mediaTexture,
          textureFormat: e2.RGBA,
          width: this.layer.media.videoWidth,
          height: this.layer.media.videoHeight,
          type: Y.texture
        };
        let t2 = e2.getParameter(e2.TEXTURE_BINDING_2D);
        e2.bindTexture(e2.TEXTURE_2D, this.mediaTexture), e2.texImage2D(e2.TEXTURE_2D, 0, e2.RGBA, this.layer.media.videoWidth, this.layer.media.videoHeight, 0, e2.RGBA, e2.UNSIGNED_BYTE, null), e2.bindTexture(e2.TEXTURE_2D, t2);
      }
      this._createVAOs();
    }
    render(e2, t2) {
      this.saveVaoState();
      let n2 = this.gl, r2 = e2.getBaseLayer(), i2 = t2.getViewerPose(e2.getReferenceSpace()), a2 = n2.getParameter(n2.ACTIVE_TEXTURE);
      for (let o2 of i2.views) {
        let i3 = r2.getViewport(o2);
        if (n2.viewport(i3.x, i3.y, i3.width, i3.height), n2.activeTexture(n2.TEXTURE0), this.usesTextureArrayShaders) {
          if (n2 instanceof WebGLRenderingContext) throw Error(`This should never happen; texture-arrays only supported on WebGL2.`);
          if (this.layer.isMediaLayer()) throw Error(`This should never happen. Media layers should never be created with texture-array`);
          let r3 = n2.getParameter(n2.TEXTURE_BINDING_2D_ARRAY);
          n2.bindTexture(n2.TEXTURE_2D_ARRAY, this.layer.colorTextures[0]), this.layer.isStatic ? (this.layer.needsRedraw === true && n2.generateMipmap(n2.TEXTURE_2D_ARRAY), this.hasMipmap = true) : this.hasMipmap = this.layer.mipLevels > 0, n2.texParameteri(n2.TEXTURE_2D_ARRAY, n2.TEXTURE_MAG_FILTER, this.hasMipmap ? n2.LINEAR_MIPMAP_LINEAR : n2.LINEAR), n2.texParameteri(n2.TEXTURE_2D_ARRAY, n2.TEXTURE_MIN_FILTER, this.hasMipmap ? n2.LINEAR_MIPMAP_LINEAR : n2.LINEAR);
          let i4 = 0;
          if (this.layer.layout === X.stereo) switch (o2.eye) {
            case `right`:
              i4 = 1;
          }
          this._shouldUseStereoTexturePoints() ? this._renderInternalStereo(e2, t2, o2, i4) : this._renderInternal(e2, t2, o2, i4), n2.activeTexture(a2), n2.bindTexture(n2.TEXTURE_2D_ARRAY, r3);
        } else {
          let r3 = n2.getParameter(n2.TEXTURE_BINDING_2D);
          if (this.layer.isMediaLayer()) n2.bindTexture(n2.TEXTURE_2D, this.mediaTexture), n2.pixelStorei(n2.UNPACK_FLIP_Y_WEBGL, true), n2.texSubImage2D(n2.TEXTURE_2D, 0, 0, 0, this.layer.media.videoWidth, this.layer.media.videoHeight, n2.RGBA, n2.UNSIGNED_BYTE, this.layer.media);
          else if (this.layer.layout === X.stereo) switch (o2.eye) {
            case `right`:
              n2.bindTexture(n2.TEXTURE_2D, this.layer.colorTextures[1]);
              break;
            default:
              n2.bindTexture(n2.TEXTURE_2D, this.layer.colorTextures[0]);
          }
          else n2.bindTexture(n2.TEXTURE_2D, this.layer.colorTextures[0]);
          this.layer.isStatic ? (this.layer.needsRedraw === true && n2.generateMipmap(n2.TEXTURE_2D), this.hasMipmap = true) : this.hasMipmap = this.layer.mipLevels > 0, n2.texParameteri(n2.TEXTURE_2D, n2.TEXTURE_WRAP_S, n2.CLAMP_TO_EDGE), n2.texParameteri(n2.TEXTURE_2D, n2.TEXTURE_WRAP_T, n2.CLAMP_TO_EDGE), n2.texParameteri(n2.TEXTURE_2D, n2.TEXTURE_MIN_FILTER, this.hasMipmap ? n2.LINEAR_MIPMAP_LINEAR : n2.LINEAR), n2.texParameteri(n2.TEXTURE_2D, n2.TEXTURE_MAG_FILTER, this.hasMipmap ? n2.LINEAR_MIPMAP_LINEAR : n2.LINEAR), this._shouldUseStereoTexturePoints() ? this._renderInternalStereo(e2, t2, o2) : this._renderInternal(e2, t2, o2), n2.activeTexture(a2), n2.bindTexture(n2.TEXTURE_2D, r3);
        }
      }
      this.restoreVaoState();
    }
    createPositionPoints() {
      return new Float32Array([]);
    }
    createTextureUVs() {
      return new Float32Array([]);
    }
    _offsetTextureUVsByRect(e2, t2, n2) {
      n2 ?? (n2 = {
        x: 0,
        y: 0,
        width: e2.width,
        height: e2.height
      });
      let r2 = n2.x / e2.width, i2 = n2.y / e2.height, a2 = n2.width / e2.width, o2 = n2.height / e2.height, s2 = [];
      for (let e3 = 0; e3 < t2.length; e3 += 2) {
        let n3 = t2[e3], c2 = t2[e3 + 1], l2 = n3 * a2 + r2, u2 = c2 * o2 + i2;
        s2[e3] = l2, s2[e3 + 1] = u2;
      }
      return new Float32Array(s2);
    }
    _shouldUseStereoTexturePoints() {
      return this.layer.layout === X[`stereo-left-right`] || this.layer.layout === X[`stereo-top-bottom`];
    }
    _setStereoTextureBuffer(e2) {
      let t2 = this.gl;
      t2.enableVertexAttribArray(this.programInfo.attribLocations.a_texCoord), t2.bindBuffer(t2.ARRAY_BUFFER, this.texcoordBuffer), t2.bufferData(t2.ARRAY_BUFFER, this.stereoTexturePoints[e2], t2.STATIC_DRAW);
      var n2 = 2, r2 = t2.FLOAT;
      t2.vertexAttribPointer(this.programInfo.attribLocations.a_texCoord, n2, r2, false, 0, 0), t2.bindBuffer(t2.ARRAY_BUFFER, null);
    }
    _recalculateVertices() {
      this.positionPoints = this.createPositionPoints(), this.texturePoints = this.createTextureUVs();
      let e2 = {
        x: 0,
        y: 0,
        width: 1,
        height: 1
      };
      if (this._shouldUseStereoTexturePoints()) {
        if (this.stereoTexturePoints = [], this.layer.isMediaLayer()) {
          Lg(e2, this.mediaTexturePolyfill, this.layer.layout, 0, 2), this.stereoTexturePoints[0] = this._offsetTextureUVsByRect(this.mediaTexturePolyfill, this.texturePoints, e2), Lg(e2, this.mediaTexturePolyfill, this.layer.layout, 1, 2), this.stereoTexturePoints[1] = this._offsetTextureUVsByRect(this.mediaTexturePolyfill, this.texturePoints, e2), this.layer.layout === X[`stereo-top-bottom`] && ([this.stereoTexturePoints[0], this.stereoTexturePoints[1]] = [
            this.stereoTexturePoints[1],
            this.stereoTexturePoints[0]
          ]);
          return;
        }
        Lg(e2, this.layer.colorTexturesMeta[0], this.layer.layout, 0, 2), this.stereoTexturePoints[0] = this._offsetTextureUVsByRect(this.layer.colorTexturesMeta[0], this.texturePoints, e2), Lg(e2, this.layer.colorTexturesMeta[0], this.layer.layout, 1, 2), this.stereoTexturePoints[1] = this._offsetTextureUVsByRect(this.layer.colorTexturesMeta[0], this.texturePoints, e2), this.layer.layout === X[`stereo-top-bottom`] && ([this.stereoTexturePoints[0], this.stereoTexturePoints[1]] = [
          this.stereoTexturePoints[1],
          this.stereoTexturePoints[0]
        ]);
      }
    }
    _createVAOs() {
      this._recalculateVertices();
      let e2 = this.gl;
      this.vaoGl = Vg(e2), this.saveVaoState();
      let t2 = e2.createBuffer();
      this.vao = this.vaoGl.createVertexArray(), this.vaoGl.bindVertexArray(this.vao), e2.enableVertexAttribArray(this.programInfo.attribLocations.a_position), e2.bindBuffer(e2.ARRAY_BUFFER, t2);
      let n2 = this.positionPoints;
      e2.bufferData(e2.ARRAY_BUFFER, n2, e2.STATIC_DRAW);
      var r2 = 3, i2 = e2.FLOAT, a2 = false, o2 = 0, s2 = 0;
      e2.vertexAttribPointer(this.programInfo.attribLocations.a_position, r2, i2, a2, o2, s2), e2.enableVertexAttribArray(this.programInfo.attribLocations.a_texCoord), this.texcoordBuffer = e2.createBuffer(), e2.bindBuffer(e2.ARRAY_BUFFER, this.texcoordBuffer), e2.bufferData(e2.ARRAY_BUFFER, this.texturePoints, e2.STATIC_DRAW);
      var r2 = 2, i2 = e2.FLOAT, a2 = false, o2 = 0, s2 = 0;
      e2.vertexAttribPointer(this.programInfo.attribLocations.a_texCoord, r2, i2, a2, o2, s2), this.restoreVaoState();
    }
    _renderInternal(e2, t2, n2, r2) {
      let i2 = this.gl, a2 = i2.getParameter(i2.CURRENT_PROGRAM);
      i2.useProgram(this.program), this.vaoGl.bindVertexArray(this.vao), this.usesTextureArrayShaders && i2.uniform1i(this.programInfo.uniformLocations.u_layer, r2), this._setTransformMatrix(e2, t2, n2), i2.uniformMatrix4fv(this.programInfo.uniformLocations.u_matrix, false, this.transformMatrix), i2.uniformMatrix4fv(this.programInfo.uniformLocations.u_projectionMatrix, false, n2.projectionMatrix);
      var o2 = i2.TRIANGLES, s2 = 0, c2 = this.positionPoints.length / 3;
      i2.drawArrays(o2, s2, c2), this.vaoGl.bindVertexArray(null), i2.useProgram(a2);
    }
    _renderInternalStereo(e2, t2, n2, r2) {
      if (n2.eye === `none`) return this._renderInternal(e2, t2, n2);
      let i2 = this.gl;
      this.vaoGl.bindVertexArray(this.vao);
      let a2 = i2.getParameter(i2.CURRENT_PROGRAM);
      i2.useProgram(this.program), this._setStereoTextureBuffer(+(n2.eye === `right`)), this.usesTextureArrayShaders && i2.uniform1i(this.programInfo.uniformLocations.u_layer, r2), this._setTransformMatrix(e2, t2, n2), i2.uniformMatrix4fv(this.programInfo.uniformLocations.u_matrix, false, this.transformMatrix), i2.uniformMatrix4fv(this.programInfo.uniformLocations.u_projectionMatrix, false, n2.projectionMatrix);
      var o2 = i2.TRIANGLES, s2 = 0, c2 = this.positionPoints.length / 3;
      i2.drawArrays(o2, s2, c2), this.vaoGl.bindVertexArray(null), i2.useProgram(a2);
    }
    _setTransformMatrix(e2, t2, n2) {
      let r2 = t2.getPose(this.layer.space, e2.getReferenceSpace());
      Qg(this.transformMatrix, r2.transform.matrix, this.layer.transform.matrix), Qg(this.transformMatrix, n2.transform.inverse.matrix, this.transformMatrix);
    }
  }, s_ = class extends o_ {
    constructor(e2, t2) {
      super(e2, t2), this.initialize();
    }
    createPositionPoints() {
      let e2 = this.layer.width, t2 = this.layer.height, n2 = [
        -e2,
        -t2,
        0,
        e2,
        -t2,
        0,
        -e2,
        t2,
        0,
        -e2,
        t2,
        0,
        e2,
        -t2,
        0,
        e2,
        t2,
        0
      ];
      return new Float32Array(n2);
    }
    createTextureUVs() {
      return new Float32Array([
        0,
        0,
        1,
        0,
        0,
        1,
        0,
        1,
        1,
        0,
        1,
        1
      ]);
    }
  }, c_ = class extends o_ {
    constructor(e2, t2) {
      super(e2, t2), this.segments = 16, this.initialize();
    }
    createPositionPoints() {
      let e2 = [], t2 = this.layer.centralAngle, n2 = this.layer.height, r2 = this.layer.radius, i2 = t2 / this.segments, a2 = Math.PI / 2 - t2 / 2, o2 = [], s2 = e_();
      s2[0] = r2 * Math.cos(a2), s2[1] = -r2 * Math.sin(a2), o2.push(s2);
      for (let e3 = 0; e3 < this.segments; e3++) {
        let t3 = e_();
        t3[0] = r2 * Math.cos(a2 + i2 * (e3 + 1)), t3[1] = -r2 * Math.sin(a2 + i2 * (e3 + 1)), o2.push(t3);
      }
      o2.reverse();
      for (let t3 = 0; t3 < this.segments; t3++) {
        let r3 = o2[t3], i3 = o2[t3 + 1];
        e2.push(r3[0], -n2 / 2, r3[1]), e2.push(i3[0], -n2 / 2, i3[1]), e2.push(r3[0], n2 / 2, r3[1]), e2.push(r3[0], n2 / 2, r3[1]), e2.push(i3[0], -n2 / 2, i3[1]), e2.push(i3[0], n2 / 2, i3[1]);
      }
      return new Float32Array(e2);
    }
    createTextureUVs() {
      let e2 = [], t2 = 1 / this.segments;
      for (let n2 = 0; n2 < this.segments; n2++) {
        let r2 = t2 * n2, i2 = t2 * (n2 + 1);
        e2.push(r2, 0), e2.push(i2, 0), e2.push(r2, 1), e2.push(r2, 1), e2.push(i2, 0), e2.push(i2, 1);
      }
      return new Float32Array(e2);
    }
  }, l_ = class extends o_ {
    constructor(e2, t2) {
      super(e2, t2), this.segmentsPerAxis = 40, this.initialize();
    }
    createPositionPoints() {
      let e2 = [], t2 = this.layer.radius;
      t2 === 0 && (t2 = 25), t2 > 25 && (t2 = 25);
      let n2 = this.layer.centralHorizontalAngle, r2 = this.layer.upperVerticalAngle + Math.PI / 2, i2 = this.layer.lowerVerticalAngle + Math.PI / 2, a2 = r2, o2 = i2, s2 = Math.PI / 2 - n2 / 2, c2 = s2 + n2, l2 = o2 - a2, u2 = c2 - s2, d2 = [];
      for (let e3 = 0; e3 <= this.segmentsPerAxis; e3++) for (let n3 = 0; n3 <= this.segmentsPerAxis; n3++) {
        let r3 = n3 / this.segmentsPerAxis, i3 = e3 / this.segmentsPerAxis, o3 = t2, s3 = c2 - u2 * r3, f3 = l2 * i3 + a2, p2 = Math.cos(s3) * Math.sin(f3), m2 = Math.cos(f3), h2 = -Math.sin(s3) * Math.sin(f3);
        d2.push([
          o3 * p2,
          o3 * m2,
          o3 * h2
        ]);
      }
      let f2 = this.segmentsPerAxis + 1;
      for (let t3 = 0; t3 < this.segmentsPerAxis; t3++) for (let n3 = 0; n3 < this.segmentsPerAxis; n3++) e2.push(...d2[n3 * f2 + t3]), e2.push(...d2[n3 * f2 + t3 + 1]), e2.push(...d2[(n3 + 1) * f2 + t3]), e2.push(...d2[(n3 + 1) * f2 + t3]), e2.push(...d2[n3 * f2 + t3 + 1]), e2.push(...d2[(n3 + 1) * f2 + t3 + 1]);
      return new Float32Array(e2);
    }
    createTextureUVs() {
      let e2 = [], t2 = [];
      for (let e3 = 0; e3 <= this.segmentsPerAxis; e3++) for (let n3 = 0; n3 <= this.segmentsPerAxis; n3++) {
        let r2 = n3 / this.segmentsPerAxis, i2 = e3 / this.segmentsPerAxis;
        t2.push([
          r2,
          i2
        ]);
      }
      let n2 = this.segmentsPerAxis + 1;
      for (let r2 = 0; r2 < this.segmentsPerAxis; r2++) for (let i2 = 0; i2 < this.segmentsPerAxis; i2++) e2.push(...t2[i2 * n2 + r2]), e2.push(...t2[i2 * n2 + r2 + 1]), e2.push(...t2[(i2 + 1) * n2 + r2]), e2.push(...t2[(i2 + 1) * n2 + r2]), e2.push(...t2[i2 * n2 + r2 + 1]), e2.push(...t2[(i2 + 1) * n2 + r2 + 1]);
      return new Float32Array(e2);
    }
  }, u_ = {
    colorFormat: 6408,
    mipLevels: 1,
    layout: X.mono,
    isStatic: false,
    space: null,
    viewPixelHeight: 0,
    viewPixelWidth: 0
  }, d_ = class extends wg {
    constructor(e2 = u_) {
      if (super(), !xg(e2.space)) throw TypeError(`XRCubeLayer's space needs to be an XRReferenceSpace`);
      switch (this.init = Object.assign(Object.assign({}, u_), e2), this.space = this.init.space, this.isStatic = this.init.isStatic, this.orientation = this.init.orientation ? DOMPointReadOnly.fromPoint(this.init.orientation) : new DOMPointReadOnly(), this.init.layout) {
        case X.default:
        case X[`stereo-left-right`]:
        case X[`stereo-top-bottom`]:
          throw TypeError(`Invalid layout format for XRCubeLayer`);
      }
      this.layout = this.init.layout, this.needsRedraw = true;
    }
    initialize(e2, t2) {
      super.initialize(e2, t2), this._allocateColorTexturesInternal(), this._allocateDepthStencilTexturesInternal();
    }
    _allocateColorTexturesInternal() {
      if (this._colorTextures = [], this._texturesMeta = [], this.layout === X.mono) {
        let e2 = this._createCubeColorTexture();
        this._texturesMeta.push(e2), this._colorTextures.push(e2.texture);
      } else {
        let e2 = this._createCubeColorTexture(), t2 = this._createCubeColorTexture();
        this._texturesMeta.push(e2, t2), this._colorTextures.push(e2.texture, t2.texture);
        return;
      }
    }
    _allocateDepthStencilTexturesInternal() {
      if (this._depthStencilTextures = [], this.init.depthFormat) {
        if (this.context instanceof WebGLRenderingContext && !this.context.getExtension(`WEBGL_depth_texture`)) throw TypeError(`Depth textures not supported in the current context`);
        if (this.layout === X.mono) {
          let e2 = this._createCubeDepthTexture();
          this._depthStencilTextures.push(e2.texture);
        } else {
          let e2 = this._createCubeDepthTexture(), t2 = this._createCubeDepthTexture();
          this._depthStencilTextures.push(e2.texture, t2.texture);
          return;
        }
      }
    }
    _createCubeColorTexture() {
      let e2 = this.context.createTexture(), t2 = {
        width: this.init.viewPixelWidth,
        height: this.init.viewPixelHeight,
        layers: 1,
        type: Y.texture,
        textureFormat: this.init.colorFormat,
        texture: e2
      }, n2 = this.context.getParameter(this.context.TEXTURE_BINDING_CUBE_MAP);
      this.context.bindTexture(this.context.TEXTURE_CUBE_MAP, e2);
      for (let e3 = 0; e3 < 6; e3++) this.context.texImage2D(this.context.TEXTURE_CUBE_MAP_POSITIVE_X + e3, 0, t2.textureFormat, t2.width, t2.height, 0, t2.textureFormat, this.context.UNSIGNED_BYTE, null);
      return this.context.bindTexture(this.context.TEXTURE_CUBE_MAP, n2), t2;
    }
    _createCubeDepthTexture() {
      let e2 = this.context.createTexture(), t2 = {
        width: this.init.viewPixelWidth,
        height: this.init.viewPixelHeight,
        layers: 1,
        type: Y.texture,
        textureFormat: this.init.depthFormat,
        texture: e2
      }, n2 = this.context.getParameter(this.context.TEXTURE_BINDING_CUBE_MAP);
      this.context.bindTexture(this.context.TEXTURE_CUBE_MAP, e2);
      let r2 = this.init.depthFormat;
      this.context instanceof WebGL2RenderingContext && (r2 === this.context.DEPTH_COMPONENT && (r2 = this.context.DEPTH_COMPONENT24), r2 === this.context.DEPTH_STENCIL && (r2 = this.context.DEPTH24_STENCIL8));
      for (let e3 = 0; e3 < 6; e3++) this.context.texImage2D(this.context.TEXTURE_CUBE_MAP_POSITIVE_X + e3, 0, r2, t2.width, t2.height, 0, t2.textureFormat, this.context.UNSIGNED_INT, null);
      return this.context.bindTexture(this.context.TEXTURE_CUBE_MAP, n2), t2;
    }
    getTextureType() {
      return Y.texture;
    }
  }, f_ = (e2) => e2, p_ = f_`
attribute vec4 a_position;
uniform mat4 u_projectionMatrix;
uniform mat4 u_matrix;
varying vec3 v_normal;

void main() {
   gl_Position = u_projectionMatrix * u_matrix * a_position;

   v_normal = normalize(a_position.xyz);
}
`, m_ = f_`
precision mediump float;

varying vec3 v_normal;

uniform samplerCube u_texture;

void main() {
   gl_FragColor = textureCube(u_texture, normalize(v_normal));
}
`, h_ = class {
    constructor(e2, t2) {
      this.savedVaoState = {
        vao: null,
        arrayBuffer: null
      }, this.hasMipmap = false, this.layer = e2, this.gl = t2, this.transformMatrix = Zg(), this.program = zg(t2, p_, m_), this.programInfo = {
        attribLocations: {
          a_position: t2.getAttribLocation(this.program, `a_position`)
        },
        uniformLocations: {
          u_matrix: t2.getUniformLocation(this.program, `u_matrix`),
          u_texture: t2.getUniformLocation(this.program, `u_texture`),
          u_projectionMatrix: t2.getUniformLocation(this.program, `u_projectionMatrix`)
        }
      }, this._createVAOs();
    }
    saveVaoState() {
      this.savedVaoState.vao = this.gl.getParameter(this.vaoGl.VERTEX_ARRAY_BINDING), this.savedVaoState.arrayBuffer = this.gl.getParameter(this.gl.ARRAY_BUFFER_BINDING);
    }
    restoreVaoState() {
      this.vaoGl.bindVertexArray(this.savedVaoState.vao), this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.savedVaoState.arrayBuffer), this.savedVaoState.vao = this.savedVaoState.arrayBuffer = null;
    }
    render(e2, t2) {
      this.saveVaoState();
      let n2 = this.gl, r2 = e2.getBaseLayer(), i2 = t2.getViewerPose(e2.getReferenceSpace()), a2 = n2.getParameter(n2.ACTIVE_TEXTURE);
      for (let e3 of i2.views) {
        let t3 = r2.getViewport(e3);
        n2.viewport(t3.x, t3.y, t3.width, t3.height), n2.activeTexture(n2.TEXTURE0);
        let i3 = n2.getParameter(n2.TEXTURE_BINDING_CUBE_MAP);
        if (this.layer.layout === X.stereo) {
          let t4 = +(e3.eye === `right`);
          n2.bindTexture(n2.TEXTURE_CUBE_MAP, this.layer.colorTextures[t4]);
        } else n2.bindTexture(n2.TEXTURE_CUBE_MAP, this.layer.colorTextures[0]);
        this.layer.isStatic ? (this.layer.needsRedraw === true && n2.generateMipmap(n2.TEXTURE_CUBE_MAP), this.hasMipmap = true) : this.hasMipmap = this.layer.mipLevels > 0, n2.texParameteri(n2.TEXTURE_CUBE_MAP, n2.TEXTURE_MAG_FILTER, this.hasMipmap ? n2.LINEAR_MIPMAP_LINEAR : n2.LINEAR), n2.texParameteri(n2.TEXTURE_CUBE_MAP, n2.TEXTURE_MIN_FILTER, this.hasMipmap ? n2.LINEAR_MIPMAP_LINEAR : n2.LINEAR), this._renderInternal(this.layer.orientation, e3), n2.activeTexture(a2), n2.bindTexture(n2.TEXTURE_CUBE_MAP, i3);
      }
      this.restoreVaoState();
    }
    createPositionPoints() {
      let e2 = 0.5;
      return new Float32Array([
        -0.5,
        -0.5,
        -0.5,
        -0.5,
        e2,
        -0.5,
        e2,
        -0.5,
        -0.5,
        -0.5,
        e2,
        -0.5,
        e2,
        e2,
        -0.5,
        e2,
        -0.5,
        -0.5,
        -0.5,
        -0.5,
        e2,
        e2,
        -0.5,
        e2,
        -0.5,
        e2,
        e2,
        -0.5,
        e2,
        e2,
        e2,
        -0.5,
        e2,
        e2,
        e2,
        e2,
        -0.5,
        e2,
        -0.5,
        -0.5,
        e2,
        e2,
        e2,
        e2,
        -0.5,
        -0.5,
        e2,
        e2,
        e2,
        e2,
        e2,
        e2,
        e2,
        -0.5,
        -0.5,
        -0.5,
        -0.5,
        e2,
        -0.5,
        -0.5,
        -0.5,
        -0.5,
        e2,
        -0.5,
        -0.5,
        e2,
        e2,
        -0.5,
        -0.5,
        e2,
        -0.5,
        e2,
        -0.5,
        -0.5,
        -0.5,
        -0.5,
        -0.5,
        e2,
        -0.5,
        e2,
        -0.5,
        -0.5,
        -0.5,
        e2,
        -0.5,
        e2,
        e2,
        -0.5,
        e2,
        -0.5,
        e2,
        -0.5,
        -0.5,
        e2,
        e2,
        -0.5,
        e2,
        -0.5,
        e2,
        e2,
        -0.5,
        e2,
        e2,
        e2,
        -0.5,
        e2,
        e2,
        e2
      ]);
    }
    _renderInternal(e2, t2) {
      let n2 = this.gl, r2 = n2.getParameter(n2.CURRENT_PROGRAM);
      n2.useProgram(this.program), this.vaoGl.bindVertexArray(this.vao), $g(this.transformMatrix, [
        e2.x,
        e2.y,
        e2.z,
        e2.w
      ]), this._poseOrientationMatrix || (this._poseOrientationMatrix = Zg()), $g(this._poseOrientationMatrix, [
        t2.transform.inverse.orientation.x,
        t2.transform.inverse.orientation.y,
        t2.transform.inverse.orientation.z,
        t2.transform.inverse.orientation.w
      ]), Qg(this.transformMatrix, this.transformMatrix, this._poseOrientationMatrix), n2.uniformMatrix4fv(this.programInfo.uniformLocations.u_matrix, false, this.transformMatrix), n2.uniformMatrix4fv(this.programInfo.uniformLocations.u_projectionMatrix, false, t2.projectionMatrix), n2.uniform1i(this.programInfo.uniformLocations.u_texture, 0);
      var i2 = n2.TRIANGLES, a2 = 0, o2 = this.positionPoints.length / 3;
      n2.drawArrays(i2, a2, o2), this.vaoGl.bindVertexArray(null), n2.useProgram(r2);
    }
    _recalculateVertices() {
      this.positionPoints = this.createPositionPoints();
    }
    _createVAOs() {
      this._recalculateVertices();
      let e2 = this.gl;
      this.vaoGl = Vg(e2), this.saveVaoState();
      let t2 = e2.createBuffer();
      this.vao = this.vaoGl.createVertexArray(), this.vaoGl.bindVertexArray(this.vao), e2.enableVertexAttribArray(this.programInfo.attribLocations.a_position), e2.bindBuffer(e2.ARRAY_BUFFER, t2);
      let n2 = this.positionPoints;
      e2.bufferData(e2.ARRAY_BUFFER, n2, e2.STATIC_DRAW);
      var r2 = 3, i2 = e2.FLOAT;
      e2.vertexAttribPointer(this.programInfo.attribLocations.a_position, r2, i2, false, 0, 0), this.restoreVaoState();
    }
  }, g_ = class {
    constructor() {
      this.mode = `inline`, this.layers = [], this.views = [], this.initializedViews = false, this.isPolyfillActive = false, this.taskQueue = [];
    }
    requestAnimationFrame(e2) {
      this.injectedFrameCallback || (this.injectedFrameCallback = (t2, n2) => {
        let r2 = this.context;
        if (!this.initializedViews && this.referenceSpace) {
          let e3 = n2.getViewerPose(this.referenceSpace);
          e3 && (this.views = e3.views, this.initializedViews = true);
        }
        if (this.isPolyfillActive && this.initializedViews) {
          this.tempFramebuffer || (this.tempFramebuffer = r2.createFramebuffer()), r2.bindFramebuffer(r2.FRAMEBUFFER, this.tempFramebuffer);
          let e3 = r2.getParameter(r2.COLOR_CLEAR_VALUE), t3 = r2.getParameter(r2.FRAMEBUFFER_BINDING);
          r2.clearColor(0, 0, 0, 0);
          for (let e4 of this.layers) if (e4 instanceof Ig) for (let t4 = 0; t4 < e4.colorTextures.length; t4++) e4.colorTexturesMeta[t4].type === Y[`texture-array`] || (r2.framebufferTexture2D(r2.FRAMEBUFFER, r2.COLOR_ATTACHMENT0, r2.TEXTURE_2D, e4.colorTextures[t4], 0), e4.depthStencilTextures && t4 < e4.depthStencilTextures.length ? r2.framebufferTexture2D(r2.FRAMEBUFFER, r2.DEPTH_ATTACHMENT, r2.TEXTURE_2D, e4.depthStencilTextures[t4], 0) : r2.framebufferTexture2D(r2.FRAMEBUFFER, r2.DEPTH_ATTACHMENT, r2.TEXTURE_2D, null, 0), r2.clear(r2.COLOR_BUFFER_BIT | r2.DEPTH_BUFFER_BIT));
          r2.bindFramebuffer(r2.FRAMEBUFFER, t3), r2.clearColor(e3[0], e3[1], e3[2], e3[3]);
        }
        if (e2(t2, n2), this.isPolyfillActive && this.initializedViews) {
          let e3 = r2.isEnabled(r2.BLEND), t3 = r2.isEnabled(r2.DEPTH_TEST), i2 = r2.isEnabled(r2.CULL_FACE), a2 = r2.getParameter(r2.FRAMEBUFFER_BINDING), o2 = r2.getParameter(r2.COLOR_CLEAR_VALUE);
          r2.bindFramebuffer(r2.FRAMEBUFFER, this.getBaseLayer().framebuffer), r2.clear(r2.COLOR_BUFFER_BIT | r2.DEPTH_BUFFER_BIT), r2.clearColor(o2[0], o2[1], o2[2], o2[3]), r2.enable(r2.BLEND), r2.disable(r2.DEPTH_TEST), r2.disable(r2.CULL_FACE);
          let s2 = r2.getParameter(r2.BLEND_SRC_RGB), c2 = r2.getParameter(r2.BLEND_SRC_ALPHA), l2 = r2.getParameter(r2.BLEND_DST_RGB), u2 = r2.getParameter(r2.BLEND_DST_ALPHA);
          r2.blendFunc(r2.SRC_ALPHA, r2.ONE_MINUS_SRC_ALPHA);
          for (let e4 of this.layers) if (this.renderers || (this.renderers = /* @__PURE__ */ new WeakMap()), e4 instanceof Ig) this.renderers.has(e4) || this.renderers.set(e4, Yg(e4, this.context)), this.renderers.get(e4).render(this);
          else if (e4 instanceof Ng) this.renderers.has(e4) || this.renderers.set(e4, new s_(e4, this.context)), this.renderers.get(e4).render(this, n2);
          else if (e4 instanceof Dg) this.renderers.has(e4) || this.renderers.set(e4, new c_(e4, this.context)), this.renderers.get(e4).render(this, n2);
          else if (e4 instanceof Ag) this.renderers.has(e4) || this.renderers.set(e4, new l_(e4, this.context)), this.renderers.get(e4).render(this, n2);
          else if (e4 instanceof d_) this.renderers.has(e4) || this.renderers.set(e4, new h_(e4, this.context)), this.renderers.get(e4).render(this, n2);
          else {
            let t4 = e4;
            if (t4.framebuffer === null) continue;
            r2 instanceof WebGL2RenderingContext ? (r2.bindFramebuffer(r2.READ_FRAMEBUFFER, t4.framebuffer), r2.bindFramebuffer(r2.DRAW_FRAMEBUFFER, this.getBaseLayer().framebuffer), r2.blitFramebuffer(0, 0, t4.framebufferWidth, t4.framebufferHeight, 0, 0, this.getBaseLayer().framebufferWidth, this.getBaseLayer().framebufferHeight, r2.COLOR_BUFFER_BIT | r2.DEPTH_BUFFER_BIT, r2.LINEAR)) : console.warn(`GL blitFramebuffer is not supported on WebGL1, so XRWebGLLayers may not show up properly when polyfilled.`);
          }
          for (e3 || r2.disable(r2.BLEND), t3 && r2.enable(r2.DEPTH_TEST), i2 && r2.enable(r2.CULL_FACE), r2.blendFuncSeparate(s2, l2, c2, u2), r2.bindFramebuffer(r2.FRAMEBUFFER, a2); this.taskQueue.length > 0; ) this.taskQueue.shift()();
        }
      }), this._requestAnimationFrame(this.injectedFrameCallback);
    }
    updateRenderState(e2) {
      if (this.existingBaseLayer = e2.baseLayer, e2.layers && (this.layers = e2.layers), this.activeRenderState || this.createActiveRenderState(), this.activeRenderState = Object.assign(Object.assign({}, this.activeRenderState), e2), !e2.layers) {
        this._updateRenderState(e2);
        return;
      }
      let t2 = Object.assign({}, e2);
      delete t2.layers;
      let n2;
      for (let e3 of this.layers) if (e3 instanceof wg) {
        n2 = e3.getContext();
        break;
      }
      if (!n2 && !this.context) {
        let t3 = function() {
          n2.canvas.width = n2.canvas.clientWidth * window.devicePixelRatio, n2.canvas.height = n2.canvas.clientHeight * window.devicePixelRatio;
        };
        console.log(`No existing context! Have the session make one`);
        let e3 = document.createElement(`canvas`);
        if (n2 = e3.getContext(`webgl2`, {
          xrCompatible: true
        }), n2 || (n2 = e3.getContext(`webgl`, {
          xrCompatible: true
        })), !n2) throw Error(`No webGL support detected.`);
        document.body.appendChild(n2.canvas);
        window.addEventListener(`resize`, t3), t3();
      }
      this.createInternalLayer(n2), this.isPolyfillActive = true, this._updateRenderState(Object.assign(Object.assign({}, t2), {
        baseLayer: this.internalLayer
      }));
    }
    initializeSession(e2) {
      this.mode = e2, this.requestReferenceSpace(`local`).then((e3) => {
        this.referenceSpace = e3;
      }).catch((e3) => {
      }), this.requestReferenceSpace(`viewer`).then((e3) => {
        this.viewerSpace = e3;
      });
    }
    getBaseLayer(e2) {
      return !this.internalLayer && !this.existingBaseLayer && e2 && this.createInternalLayer(e2), this.internalLayer || this.existingBaseLayer;
    }
    getReferenceSpace() {
      return this.referenceSpace ? this.referenceSpace : this.viewerSpace;
    }
    getViewerSpace() {
      return this.viewerSpace;
    }
    queueTask(e2) {
      this.taskQueue.push(e2);
    }
    get renderState() {
      return this.activeRenderState || this.createActiveRenderState(), this.activeRenderState;
    }
    get internalViews() {
      return this.views;
    }
    getViewIndex(e2) {
      for (let t2 = 0; t2 < this.views.length; t2++) {
        let n2 = this.views[t2];
        if (e2.eye === n2.eye && e2.recommendedViewportScale === n2.recommendedViewportScale) return t2;
      }
      return -1;
    }
    createInternalLayer(e2) {
      if (!e2 && this.internalLayer || e2 === this.context && this.internalLayer) return this.internalLayer;
      let t2 = Sg();
      return this.internalLayer = new t2.XRWebGLLayer(this, e2), this.setContext(e2), this.internalLayer;
    }
    setContext(e2) {
      this.context = e2, this.tempFramebuffer = e2.createFramebuffer(), this.renderers = /* @__PURE__ */ new WeakMap();
    }
    createActiveRenderState() {
      let e2 = Sg(), t2 = Object.getOwnPropertyNames(e2.XRRenderState.prototype), n2 = {};
      for (let e3 of t2) n2[e3] = this._renderState[e3];
      n2.layers = [], this.activeRenderState = n2;
    }
  }, __ = class {
    constructor() {
      this.viewport = {
        x: 0,
        y: 0,
        width: 0,
        height: 0
      };
    }
  }, v_ = class {
    constructor(e2, t2) {
      this.session = e2, this.context = t2, this.subImageCache = new y_();
    }
    createProjectionLayer(e2 = Fg) {
      let t2 = new Ig(e2);
      if (this.session.ended) throw Error(`Session has ended`);
      if (this.context.isContextLost()) throw Error(`context is lost`);
      return t2.initialize(this.session, this.context), t2;
    }
    createQuadLayer(e2 = jg) {
      if (this.session.ended) throw Error(`Session has ended`);
      if (this.context.isContextLost()) throw Error(`context is lost`);
      if (e2.layout === X.default) throw TypeError(`Trying to create a quad layer with default layout`);
      let t2 = new Ng(e2);
      return t2.initialize(this.session, this.context), t2;
    }
    createCylinderLayer(e2 = Tg) {
      if (this.session.ended) throw Error(`Session has ended`);
      if (this.context.isContextLost()) throw Error(`context is lost`);
      if (e2.layout === X.default) throw TypeError(`Cylinder Layer cannot have a default layout`);
      let t2 = new Dg(e2);
      return t2.initialize(this.session, this.context), t2;
    }
    createEquirectLayer(e2 = Og) {
      if (this.session.ended) throw Error(`Session has ended`);
      if (this.context.isContextLost()) throw Error(`context is lost`);
      if (e2.layout === X.default) throw TypeError(`Equirect Layer cannot have a default layout`);
      if (!xg(e2.space)) throw TypeError(`Equirect layer requires an XRReferenceSpace`);
      let t2 = new Ag(e2);
      return t2.initialize(this.session, this.context), t2;
    }
    createCubeLayer(e2) {
      if (this.session.ended) throw Error(`Session has ended`);
      if (this.context.isContextLost()) throw Error(`context is lost`);
      if (!(this.context instanceof WebGL2RenderingContext)) throw Error(`XRCubeLayer only work on WebGL2`);
      if (!xg(e2.space)) throw TypeError(`XRCubeLayer requires a space of type XRReferenceSpace`);
      let t2 = new d_(e2);
      return t2.initialize(this.session, this.context), t2;
    }
    getSubImage(e2, t2, n2 = `none`) {
      if (e2.isStatic && e2.needsRedraw === false) throw Error(`Invalid state for subimage creation`);
      let r2 = this.subImageCache.tryGetCachedSubImage(this.context, e2, n2);
      if (r2) return r2;
      let i2 = new __();
      if (e2 instanceof Ig || e2.layout === X.default) throw TypeError();
      if (!this.validateStateofSubImageCreation(e2, t2)) throw Error(`Invalid state for subimage creation`);
      let a2 = 0;
      if (e2.layout === X.stereo) {
        if (n2 === `none`) throw TypeError();
        n2 === `right` && (a2 = 1);
      }
      i2.imageIndex = e2.getTextureType() === Y[`texture-array`] ? a2 : 0;
      let o2 = 0;
      e2.getTextureType() === Y.texture ? (i2.colorTexture = e2.colorTextures[a2], o2 = a2) : (i2.colorTexture = e2.colorTextures[0], o2 = 0), i2.depthStencilTexture = !e2.depthStencilTextures || !e2.depthStencilTextures.length ? null : e2.getTextureType() === Y.texture ? e2.depthStencilTextures[a2] : e2.depthStencilTextures[0];
      let s2 = e2.colorTexturesMeta[o2];
      i2.textureWidth = s2.width, i2.textureHeight = s2.height;
      let c2 = 1;
      return (e2.layout === X[`stereo-left-right`] || e2.layout === X[`stereo-top-bottom`]) && (c2 = 2), Lg(i2.viewport, s2, e2.layout, a2, c2), this.session.queueTask(() => {
        e2.needsRedraw = false;
      }), this.subImageCache.cacheSubImage(i2, this.context, e2, n2), i2;
    }
    getViewSubImage(e2, t2) {
      let n2 = this.subImageCache.tryGetCachedViewSubImage(this.context, e2, t2);
      if (n2) return n2;
      let r2 = new __(), i2 = this.session;
      if (!i2.internalViews || !i2.internalViews.length) return console.warn(`Tried to get view sub image before we have any views`), r2;
      let a2 = i2.getViewIndex(t2), o2 = 0;
      return r2.imageIndex = e2.getTextureType() === Y[`texture-array`] ? a2 : 0, e2.layout === X.default && e2.getTextureType() === Y.texture ? (r2.colorTexture = e2.colorTextures[a2], o2 = a2) : (r2.colorTexture = e2.colorTextures[0], o2 = 0), r2.depthStencilTexture = e2.depthStencilTextures.length === 0 ? null : e2.layout === X.default && e2.getTextureType() === Y.texture ? e2.depthStencilTextures[a2] : e2.depthStencilTextures[0], r2.textureWidth = e2.colorTexturesMeta[o2].width, r2.textureHeight = e2.colorTexturesMeta[o2].height, Lg(r2.viewport, e2.colorTexturesMeta[o2], e2.layout, a2, i2.internalViews.length), e2.needsRedraw = false, this.subImageCache.cacheViewSubImage(r2, this.context, e2, t2), r2;
    }
    validateStateofSubImageCreation(e2, t2) {
      return !(t2.session !== e2.session || this.session !== e2.session || this.context !== e2.context || !e2.colorTextures || !e2.colorTextures.length || e2.isStatic && e2.needsRedraw === false);
    }
  }, y_ = class {
    constructor() {
      this.cache = /* @__PURE__ */ new Map(), this.viewCache = /* @__PURE__ */ new Map();
    }
    cacheSubImage(e2, t2, n2, r2) {
      let i2 = /* @__PURE__ */ new Map();
      i2.set(r2, e2);
      let a2 = /* @__PURE__ */ new Map();
      a2.set(n2, i2), this.cache.set(t2, a2);
    }
    tryGetCachedSubImage(e2, t2, n2) {
      var _a2, _b;
      return (_b = (_a2 = this.cache.get(e2)) == null ? void 0 : _a2.get(t2)) == null ? void 0 : _b.get(n2);
    }
    cacheViewSubImage(e2, t2, n2, r2) {
      let i2 = /* @__PURE__ */ new Map();
      i2.set(r2, e2);
      let a2 = /* @__PURE__ */ new Map();
      a2.set(n2, i2), this.viewCache.set(t2, a2);
    }
    tryGetCachedViewSubImage(e2, t2, n2) {
      var _a2, _b;
      return (_b = (_a2 = this.viewCache.get(e2)) == null ? void 0 : _a2.get(t2)) == null ? void 0 : _b.get(n2);
    }
  }, b_ = (e2) => e2.navigator.xr ? !!(e2.XRMediaBinding && e2.XRWebGLBinding) : false, x_ = class {
    constructor() {
      this.injected = false;
      let e2 = Sg();
      this._injectPolyfill(e2);
    }
    _injectPolyfill(e2) {
      if (!(`xr` in e2.navigator)) throw Error(`WebXR Layers polyfill requires WebXR support.`);
      this.injected === true && console.warn(`Polyfill has already been injected...`), b_(e2) || (this._polyfillRequiredLayersFeature(e2), this._polyfillXRSession(e2), e2.XRWebGLBinding = v_, e2.XRMediaBinding = Pg, this.injected = true, console.log(`Injected Layers Polyfill`));
    }
    _polyfillXRSession(e2) {
      e2.XRSession.prototype._updateRenderState = e2.XRSession.prototype.updateRenderState, e2.XRSession.prototype._requestAnimationFrame = e2.XRSession.prototype.requestAnimationFrame;
      let t2 = Object.getOwnPropertyDescriptor(e2.XRSession.prototype, `renderState`);
      Object.defineProperty(e2.XRSession.prototype, "_renderState", t2);
      let n2 = Object.getOwnPropertyDescriptor(g_.prototype, `renderState`);
      Object.defineProperty(e2.XRSession.prototype, "renderState", n2);
      let r2 = Object.getOwnPropertyNames(g_.prototype);
      for (let t3 of r2) {
        let n3 = Object.getOwnPropertyDescriptor(g_.prototype, t3);
        Object.defineProperty(e2.XRSession.prototype, t3, n3);
      }
    }
    _polyfillRequiredLayersFeature(e2) {
      let t2 = e2.navigator.xr.requestSession;
      Object.defineProperty(e2.navigator.xr, "requestSessionInternal", {
        writable: true
      }), e2.navigator.xr.requestSessionInternal = t2;
      let n2 = (t3, n3) => {
        let r2 = (n4, r3) => e2.navigator.xr.requestSessionInternal(n4, r3).then((e3) => {
          Object.assign(e3, new g_());
          let n5 = e3;
          return n5.initializeSession(t3), Promise.resolve(n5);
        });
        if (t3 !== `immersive-vr` || !n3) return r2(t3, n3);
        if (n3.requiredFeatures && n3.requiredFeatures.indexOf(`layers`) > -1) {
          let e3 = Object.assign({}, n3), i2 = [
            ...n3.requiredFeatures
          ], a2 = i2.indexOf(`layers`);
          return i2.splice(a2, 1), e3.requiredFeatures = i2, r2(t3, e3);
        }
        return r2(t3, n3);
      };
      Object.defineProperty(e2.navigator.xr, "requestSession", {
        writable: true
      }), e2.navigator.xr.requestSession = n2;
    }
  }, S_ = {
    ipd: 0.063,
    fovy: Math.PI / 2,
    headsetPosition: new Lm(0, 1.6, 0),
    headsetQuaternion: new Rm(),
    stereoEnabled: false
  }, C_ = 1, w_ = 2, T_ = 3, E_ = 4, D_ = class {
    constructor(e2, t2 = {}) {
      this.version = _g;
      let n2 = new Fm(), r2 = new Ph(Nh.Viewer, n2), i2 = {
        [J.Left]: new Pm(r2),
        [J.Right]: new Pm(r2),
        [J.None]: new Pm(r2)
      }, a2 = e2.controllerConfig, o2 = {};
      a2 && Object.values(ah).forEach((e3) => {
        a2.layout[e3] && (o2[e3] = new fh(a2, e3, n2));
      });
      let s2 = {
        [ah.Left]: new fg(Qh, ah.Left, n2),
        [ah.Right]: new fg(Qh, ah.Right, n2)
      }, c2 = t2.canvasContainer ?? document.createElement(`div`);
      c2.dataset.webxr_runtime = `Immersive Web Emulation Runtime v${_g}`, c2.style.position = `fixed`, c2.style.width = `100%`, c2.style.height = `100%`, c2.style.top = `0`, c2.style.left = `0`, c2.style.display = `flex`, c2.style.justifyContent = `center`, c2.style.alignItems = `center`, c2.style.overflow = `hidden`, c2.style.zIndex = `999`, this[H] = {
        name: e2.name,
        supportedSessionModes: e2.supportedSessionModes,
        supportedFeatures: e2.supportedFeatures,
        supportedFrameRates: e2.supportedFrameRates,
        isSystemKeyboardSupported: e2.isSystemKeyboardSupported,
        internalNominalFrameRate: e2.internalNominalFrameRate,
        environmentBlendModes: e2.environmentBlendModes,
        interactionMode: e2.interactionMode,
        userAgent: e2.userAgent,
        position: t2.headsetPosition ?? S_.headsetPosition.clone(),
        quaternion: t2.headsetQuaternion ?? S_.headsetQuaternion.clone(),
        stereoEnabled: t2.stereoEnabled ?? S_.stereoEnabled,
        ipd: t2.ipd ?? S_.ipd,
        fovy: t2.fovy ?? S_.fovy,
        controllers: o2,
        hands: s2,
        primaryInputMode: `controller`,
        pendingReferenceSpaceReset: false,
        visibilityState: `visible`,
        pendingVisibilityState: null,
        xrSystem: null,
        matrix: Cp(),
        globalSpace: n2,
        viewerSpace: r2,
        viewSpaces: i2,
        canvasContainer: c2,
        getViewport: (e3, t3) => {
          let { width: n3, height: r3 } = e3.context.canvas;
          switch (t3.eye) {
            case J.None:
              return new bg(0, 0, n3, r3);
            case J.Left:
              return new bg(0, 0, this[H].stereoEnabled ? n3 / 2 : n3, r3);
            case J.Right:
              return new bg(n3 / 2, 0, this[H].stereoEnabled ? n3 / 2 : 0, r3);
          }
        },
        updateViews: () => {
          let e3 = this[H].viewerSpace;
          jp(e3[Om].offsetMatrix, this[H].quaternion.quat, this[H].position.vec3), kp(this[H].viewSpaces[J.Left][Om].offsetMatrix, Bp(-this[H].ipd / 2, 0, 0)), kp(this[H].viewSpaces[J.Right][Om].offsetMatrix, Bp(this[H].ipd / 2, 0, 0));
        },
        onBaseLayerSet: (e3) => {
          if (!e3) return;
          let t3 = e3.context.canvas;
          if (t3.parentElement !== this[H].canvasContainer) {
            let e4 = this[H].devui;
            if (e4) {
              let { devUICanvas: t4, devUIContainer: n4 } = e4;
              t4.style.zIndex = T_.toString(), n4.style.zIndex = E_.toString(), this[H].canvasContainer.appendChild(e4.devUICanvas), this[H].canvasContainer.appendChild(e4.devUIContainer);
            }
            let n3 = this[H].sem;
            n3 && (n3.environmentCanvas.style.zIndex = C_.toString(), this[H].canvasContainer.appendChild(n3.environmentCanvas)), this[H].canvasData = {
              canvas: t3,
              parent: t3.parentElement,
              width: t3.width,
              height: t3.height,
              zIndex: t3.style.zIndex
            }, t3.style.zIndex = w_.toString(), this[H].canvasContainer.appendChild(t3), document.body.appendChild(this[H].canvasContainer);
          }
          t3.width = window.innerWidth, t3.height = window.innerHeight;
        },
        onSessionEnd: () => {
          if (this[H].canvasData) {
            let { canvas: e3, parent: t3, width: n3, height: r3, zIndex: i3 } = this[H].canvasData;
            e3.width = n3, e3.height = r3, e3.style.zIndex = i3, t3 ? t3.appendChild(e3) : this[H].canvasContainer.removeChild(e3);
            let a3 = this[H].devui;
            a3 && (this[H].canvasContainer.removeChild(a3.devUICanvas), this[H].canvasContainer.removeChild(a3.devUIContainer));
            let o3 = this[H].sem;
            o3 && this[H].canvasContainer.removeChild(o3.environmentCanvas), document.body.removeChild(this[H].canvasContainer), this[H].canvasData = void 0, window.dispatchEvent(new Event(`resize`));
          }
        },
        onFrameStart: (e3) => {
          var _a2;
          let t3 = performance.now(), n3 = this[H].lastFrameTime > 0 ? t3 - this[H].lastFrameTime : 16.67;
          if (this[H].lastFrameTime = t3, this[H].remote && this[H].remote.update(n3), (_a2 = this[H].actionPlayer) == null ? void 0 : _a2.playing) this[H].actionPlayer.playFrame();
          else {
            let t4 = e3.session;
            this[H].updateViews(), this[H].pendingVisibilityState && (this[H].visibilityState = this[H].pendingVisibilityState, this[H].pendingVisibilityState = null, t4.dispatchEvent(new Ih(`visibilitychange`, {
              session: t4
            }))), this[H].visibilityState === `visible` && this.activeInputs.forEach((t5) => {
              t5.onFrameStart(e3);
            }), this[H].pendingReferenceSpaceReset && (t4[K].referenceSpaces.forEach((e4) => {
              switch (e4[Dm].type) {
                case Nh.Local:
                case Nh.LocalFloor:
                case Nh.BoundedFloor:
                case Nh.Unbounded:
                  e4.dispatchEvent(new vg(`reset`, {
                    referenceSpace: e4
                  }));
              }
            }), this[H].pendingReferenceSpaceReset = false);
          }
          this[H].updateViews();
        },
        controlMode: `manual`,
        controlModeListeners: /* @__PURE__ */ new Set(),
        stateChangeListeners: /* @__PURE__ */ new Set(),
        remote: null,
        lastFrameTime: 0
      }, this[H].remote = new eh(this), this[H].updateViews();
    }
    installRuntime(e2) {
      let t2 = (e2 == null ? void 0 : e2.globalObject) ?? globalThis, n2 = e2 == null ? void 0 : e2.polyfillLayers;
      Object.defineProperty(WebGL2RenderingContext.prototype, "makeXRCompatible", {
        value: function() {
          return new Promise((e3, t3) => {
            e3(true);
          });
        },
        configurable: true
      }), this[H].xrSystem = new yg(this), Object.defineProperty(globalThis.navigator, "xr", {
        value: this[H].xrSystem,
        configurable: true
      }), Object.defineProperty(navigator, "userAgent", {
        value: this[H].userAgent,
        writable: false,
        configurable: false,
        enumerable: true
      }), t2.XRSystem = yg, t2.XRSession = Jh, t2.XRRenderState = Fh, t2.XRFrame = Gh, t2.XRSpace = Pm, t2.XRReferenceSpace = Ph, t2.XRJointSpace = Zh, t2.XRView = Lh, t2.XRViewport = bg, t2.XRRigidTransform = Eh, t2.XRPose = Rh, t2.XRViewerPose = Bh, t2.XRJointPose = zh, t2.XRInputSource = ch, t2.XRInputSourceArray = sh, t2.XRHand = Xh, t2.XRLayer = pg, t2.XRWebGLLayer = hg, t2.XRSessionEvent = Ih, t2.XRInputSourceEvent = lh, t2.XRInputSourcesChangeEvent = jh, t2.XRReferenceSpaceEvent = vg, n2 ? new x_() : (t2.XRMediaBinding = void 0, t2.XRWebGLBinding = void 0);
    }
    installDevUI(e2) {
      this[H].devui = new e2(this);
    }
    installSEM(e2) {
      this[H].sem = new e2(this);
    }
    get supportedSessionModes() {
      return this[H].supportedSessionModes;
    }
    get supportedFeatures() {
      return this[H].supportedFeatures;
    }
    get supportedFrameRates() {
      return this[H].supportedFrameRates;
    }
    get isSystemKeyboardSupported() {
      return this[H].isSystemKeyboardSupported;
    }
    get internalNominalFrameRate() {
      return this[H].internalNominalFrameRate;
    }
    get stereoEnabled() {
      return this[H].stereoEnabled;
    }
    set stereoEnabled(e2) {
      this[H].stereoEnabled = e2;
    }
    get ipd() {
      return this[H].ipd;
    }
    set ipd(e2) {
      this[H].ipd = e2;
    }
    get fovy() {
      return this[H].fovy;
    }
    set fovy(e2) {
      this[H].fovy = e2;
    }
    get position() {
      return this[H].position;
    }
    get quaternion() {
      return this[H].quaternion;
    }
    get viewerSpace() {
      var _a2;
      return ((_a2 = this[H].actionPlayer) == null ? void 0 : _a2.playing) ? this[H].actionPlayer.viewerSpace : this[H].viewerSpace;
    }
    get viewSpaces() {
      var _a2;
      return ((_a2 = this[H].actionPlayer) == null ? void 0 : _a2.playing) ? this[H].actionPlayer.viewSpaces : this[H].viewSpaces;
    }
    get controllers() {
      return this[H].controllers;
    }
    get hands() {
      return this[H].hands;
    }
    get primaryInputMode() {
      return this[H].primaryInputMode;
    }
    set primaryInputMode(e2) {
      e2 !== `controller` && e2 !== `hand` ? console.warn(`primary input mode can only be "controller" or "hand"`) : this[H].primaryInputMode = e2;
    }
    get activeInputs() {
      return this[H].visibilityState === `visible` ? (this[H].primaryInputMode === `controller` ? Object.values(this[H].controllers) : Object.values(this[H].hands)).filter((e2) => e2.connected) : [];
    }
    get inputSources() {
      var _a2;
      return ((_a2 = this[H].actionPlayer) == null ? void 0 : _a2.playing) ? this[H].actionPlayer.inputSources : this.activeInputs.map((e2) => e2.inputSource);
    }
    get canvasContainer() {
      return this[H].canvasContainer;
    }
    get canvasDimensions() {
      if (this[H].canvasData) {
        let { width: e2, height: t2 } = this[H].canvasData.canvas;
        return {
          width: e2,
          height: t2
        };
      }
    }
    get appCanvas() {
      var _a2;
      return (_a2 = this[H].canvasData) == null ? void 0 : _a2.canvas;
    }
    get activeSession() {
      var _a2;
      return (_a2 = this[H].xrSystem) == null ? void 0 : _a2[gm].activeSession;
    }
    get sessionOffered() {
      var _a2;
      return !!((_a2 = this[H].xrSystem) == null ? void 0 : _a2[gm].offeredSessionConfig);
    }
    get name() {
      return this[H].name;
    }
    grantOfferedSession() {
      let e2 = this[H].xrSystem, t2 = e2 == null ? void 0 : e2[gm];
      if (t2 && t2.offeredSessionConfig) {
        let { resolve: n2, reject: r2, mode: i2, options: a2 } = t2.offeredSessionConfig;
        t2.offeredSessionConfig = void 0, e2.requestSession(i2, a2).then(n2).catch(r2);
      }
    }
    recenter() {
      let e2 = new Lm(-this.position.x, 0, -this.position.z), t2 = new Lm(0, 0, -1).applyQuaternion(this.quaternion);
      t2.y = 0, t2.normalize();
      let n2 = Math.atan2(t2.x, -t2.z), r2 = new Rm().setFromAxisAngle(new Lm(0, 1, 0), n2);
      this.position.add(e2), this.quaternion.multiply(r2), [
        ...Object.values(this[H].controllers),
        ...Object.values(this[H].hands)
      ].forEach((t3) => {
        t3.position.add(e2), t3.quaternion.multiply(r2), t3.position.applyQuaternion(r2);
      }), this[H].pendingReferenceSpaceReset = true;
    }
    get visibilityState() {
      return this[H].visibilityState;
    }
    updateVisibilityState(e2) {
      if (!Object.values([
        `visible`,
        `visible-blurred`,
        `hidden`
      ]).includes(e2)) throw new DOMException(`Invalid XRVisibilityState value`, `NotSupportedError`);
      e2 !== this[H].visibilityState && (this[H].pendingVisibilityState = e2);
    }
    createActionPlayer(e2, t2) {
      return this[H].actionPlayer = new gg(e2, t2, this[H].ipd), this[H].actionPlayer;
    }
    get devui() {
      return this[H].devui;
    }
    get sem() {
      return this[H].sem;
    }
    get remote() {
      return this[H].remote;
    }
    get controlMode() {
      return this[H].controlMode;
    }
    set controlMode(e2) {
      e2 !== `manual` && e2 !== `programmatic` ? console.warn(`control mode can only be "manual" or "programmatic"`) : this[H].controlMode !== e2 && (this[H].controlMode = e2, this[H].controlModeListeners.forEach((t2) => t2(e2)));
    }
    onControlModeChange(e2) {
      return this[H].controlModeListeners.add(e2), () => {
        this[H].controlModeListeners.delete(e2);
      };
    }
    onStateChange(e2) {
      return this[H].stateChangeListeners.add(e2), () => {
        this[H].stateChangeListeners.delete(e2);
      };
    }
    notifyStateChange() {
      this[H].stateChangeListeners.forEach((e2) => e2());
    }
  }, O_ = {
    mapping: th.XRStandard,
    buttons: [
      {
        id: `trigger`,
        type: `analog`,
        eventTrigger: `select`
      },
      {
        id: `squeeze`,
        type: `analog`,
        eventTrigger: `squeeze`
      },
      null,
      {
        id: `thumbstick`,
        type: `binary`
      },
      {
        id: `x-button`,
        type: `binary`
      },
      {
        id: `y-button`,
        type: `binary`
      },
      {
        id: `thumbrest`,
        type: `binary`
      }
    ],
    axes: [
      null,
      null,
      {
        id: `thumbstick`,
        type: `x-axis`
      },
      {
        id: `thumbstick`,
        type: `y-axis`
      }
    ]
  }, k_ = {
    mapping: th.XRStandard,
    buttons: [
      {
        id: `trigger`,
        type: `analog`,
        eventTrigger: `select`
      },
      {
        id: `squeeze`,
        type: `analog`,
        eventTrigger: `squeeze`
      },
      null,
      {
        id: `thumbstick`,
        type: `binary`
      },
      {
        id: `a-button`,
        type: `binary`
      },
      {
        id: `b-button`,
        type: `binary`
      },
      {
        id: `thumbrest`,
        type: `binary`
      }
    ],
    axes: [
      null,
      null,
      {
        id: `thumbstick`,
        type: `x-axis`
      },
      {
        id: `thumbstick`,
        type: `y-axis`
      }
    ]
  }, A_ = {
    profileId: `oculus-touch-v2`,
    fallbackProfileIds: [
      `oculus-touch`,
      `generic-trigger-squeeze-thumbstick`
    ],
    layout: {
      left: {
        gamepad: O_,
        gripOffsetMatrix: [
          0.9925461411476135,
          4673031295254759e-24,
          -0.12186938524246216,
          0,
          0.08617470413446426,
          0.7071065306663513,
          0.7018362283706665,
          0,
          0.0861746296286583,
          -0.70710688829422,
          0.7018358707427979,
          0,
          -0.003979847766458988,
          -0.01585787907242775,
          0.04964185878634453,
          1
        ],
        numHapticActuators: 1
      },
      right: {
        gamepad: k_,
        gripOffsetMatrix: [
          0.9925461411476135,
          3688163374704345e-23,
          0.12186937034130096,
          0,
          -0.08617469668388367,
          0.7071066498756409,
          0.7018361687660217,
          0,
          -0.0861746147274971,
          -0.7071068286895752,
          0.7018359899520874,
          0,
          0.003979853354394436,
          -0.01585787907242775,
          0.04964182525873184,
          1
        ],
        numHapticActuators: 1
      }
    }
  }, j_ = {
    profileId: `oculus-touch-v3`,
    fallbackProfileIds: [
      `oculus-touch`,
      `generic-trigger-squeeze-thumbstick`
    ],
    layout: {
      left: {
        gamepad: O_,
        gripOffsetMatrix: [
          0.9925461411476135,
          20823669899527886e-24,
          -0.12186937034130096,
          0,
          0.08617465198040009,
          0.7071067094802856,
          0.701836109161377,
          0,
          0.08617466688156128,
          -0.7071067690849304,
          0.7018360495567322,
          0,
          -0.003979838453233242,
          -0.015857907012104988,
          0.04964181408286095,
          1
        ],
        numHapticActuators: 1
      },
      right: {
        gamepad: k_,
        gripOffsetMatrix: [
          0.9925461411476135,
          -8329467959811154e-23,
          0.12186941504478455,
          0,
          -0.08617465943098068,
          0.7071066498756409,
          0.7018361687660217,
          0,
          -0.08617471158504486,
          -0.7071068286895752,
          0.7018359303474426,
          0,
          0.003979798872023821,
          -0.015857888385653496,
          0.049641866236925125,
          1
        ],
        numHapticActuators: 1
      }
    }
  }, M_ = {
    profileId: `meta-quest-touch-pro`,
    fallbackProfileIds: [
      `oculus-touch-v2`,
      `oculus-touch`,
      `generic-trigger-squeeze-thumbstick`
    ],
    layout: {
      left: {
        gamepad: O_,
        gripOffsetMatrix: [
          0.9925461411476135,
          -15779937356796836e-24,
          -0.12186935544013977,
          0,
          0.08617467433214188,
          0.7071067094802856,
          0.701836109161377,
          0,
          0.0861746296286583,
          -0.7071067690849304,
          0.7018360495567322,
          0,
          -0.003979836590588093,
          -0.015857847407460213,
          0.049641840159893036,
          1
        ],
        numHapticActuators: 3
      },
      right: {
        gamepad: k_,
        gripOffsetMatrix: [
          0.9925461411476135,
          9267653311439972e-26,
          0.12186937034130096,
          0,
          -0.08617467433214188,
          0.7071067094802856,
          0.7018361687660217,
          0,
          -0.08617464452981949,
          -0.7071067690849304,
          0.7018360495567322,
          0,
          0.003979847766458988,
          -0.01585782691836357,
          0.04964186251163483,
          1
        ],
        numHapticActuators: 3
      }
    }
  }, N_ = {
    profileId: `meta-quest-touch-plus`,
    fallbackProfileIds: [
      `oculus-touch-v3`,
      `oculus-touch`,
      `generic-trigger-squeeze-thumbstick`
    ],
    layout: {
      left: {
        gamepad: O_,
        gripOffsetMatrix: [
          0.9925461411476135,
          10736208366779465e-24,
          -0.12186933308839798,
          0,
          0.08617459982633591,
          0.70710688829422,
          0.7018360495567322,
          0,
          0.08617466688156128,
          -0.7071067094802856,
          0.7018362283706665,
          0,
          -0.003979803062975407,
          -0.015857873484492302,
          0.04964187368750572,
          1
        ],
        numHapticActuators: 1
      },
      right: {
        gamepad: k_,
        gripOffsetMatrix: [
          0.9925461411476135,
          -26238110351073374e-24,
          0.12186934053897858,
          0,
          -0.0861746147274971,
          0.7071067690849304,
          0.7018360495567322,
          0,
          -0.08617465943098068,
          -0.7071067094802856,
          0.701836109161377,
          0,
          0.003979838453233242,
          -0.015857869759202003,
          0.04964182525873184,
          1
        ],
        numHapticActuators: 1
      }
    }
  }, P_ = {
    name: `Oculus Quest 1`,
    controllerConfig: A_,
    supportedSessionModes: [
      `inline`,
      `immersive-vr`,
      `immersive-ar`
    ],
    supportedFeatures: [
      `viewer`,
      `local`,
      `local-floor`,
      `bounded-floor`,
      `unbounded`,
      `anchors`,
      `plane-detection`,
      `hand-tracking`
    ],
    supportedFrameRates: [
      72,
      80,
      90
    ],
    isSystemKeyboardSupported: true,
    internalNominalFrameRate: 72,
    environmentBlendModes: {
      "immersive-vr": Kh.Opaque,
      "immersive-ar": Kh.AlphaBlend
    },
    interactionMode: qh.WorldSpace,
    userAgent: `Mozilla/5.0 (X11; Linux x86_64; Quest 1) AppleWebKit/537.36 (KHTML, like Gecko) OculusBrowser/33.0.0.x.x.x Chrome/126.0.6478.122 VR Safari/537.36`
  }, F_ = {
    name: `Meta Quest 2`,
    controllerConfig: j_,
    supportedSessionModes: [
      `inline`,
      `immersive-vr`,
      `immersive-ar`
    ],
    supportedFeatures: [
      `viewer`,
      `local`,
      `local-floor`,
      `bounded-floor`,
      `unbounded`,
      `anchors`,
      `plane-detection`,
      `mesh-detection`,
      `hit-test`,
      `hand-tracking`
    ],
    supportedFrameRates: [
      72,
      80,
      90,
      120
    ],
    isSystemKeyboardSupported: true,
    internalNominalFrameRate: 72,
    environmentBlendModes: {
      "immersive-vr": Kh.Opaque,
      "immersive-ar": Kh.AlphaBlend
    },
    interactionMode: qh.WorldSpace,
    userAgent: `Mozilla/5.0 (X11; Linux x86_64; Quest 2) AppleWebKit/537.36 (KHTML, like Gecko) OculusBrowser/33.0.0.x.x.x Chrome/126.0.6478.122 VR Safari/537.36`
  }, I_ = {
    name: `Meta Quest Pro`,
    controllerConfig: M_,
    supportedSessionModes: [
      `inline`,
      `immersive-vr`,
      `immersive-ar`
    ],
    supportedFeatures: [
      `viewer`,
      `local`,
      `local-floor`,
      `bounded-floor`,
      `unbounded`,
      `anchors`,
      `plane-detection`,
      `mesh-detection`,
      `hit-test`,
      `hand-tracking`
    ],
    supportedFrameRates: [
      72,
      80,
      90,
      120
    ],
    isSystemKeyboardSupported: true,
    internalNominalFrameRate: 90,
    environmentBlendModes: {
      "immersive-vr": Kh.Opaque,
      "immersive-ar": Kh.AlphaBlend
    },
    interactionMode: qh.WorldSpace,
    userAgent: `Mozilla/5.0 (X11; Linux x86_64; Quest Pro) AppleWebKit/537.36 (KHTML, like Gecko) OculusBrowser/33.0.0.x.x.x Chrome/126.0.6478.122 VR Safari/537.36`
  }, L_ = {
    name: `Meta Quest 3`,
    controllerConfig: N_,
    supportedSessionModes: [
      `inline`,
      `immersive-vr`,
      `immersive-ar`
    ],
    supportedFeatures: [
      `viewer`,
      `local`,
      `local-floor`,
      `bounded-floor`,
      `unbounded`,
      `anchors`,
      `plane-detection`,
      `mesh-detection`,
      `hit-test`,
      `hand-tracking`,
      `depth-sensing`
    ],
    supportedFrameRates: [
      72,
      80,
      90,
      120
    ],
    isSystemKeyboardSupported: true,
    internalNominalFrameRate: 90,
    environmentBlendModes: {
      "immersive-vr": Kh.Opaque,
      "immersive-ar": Kh.AlphaBlend
    },
    interactionMode: qh.WorldSpace,
    userAgent: `Mozilla/5.0 (X11; Linux x86_64; Quest 3) AppleWebKit/537.36 (KHTML, like Gecko) OculusBrowser/33.0.0.x.x.x Chrome/126.0.6478.122 VR Safari/537.36`
  };
  function R_() {
    let e2 = 0, t2 = 0;
    for (let n3 = 0; n3 < 28; n3 += 7) {
      let r2 = this.buf[this.pos++];
      if (e2 |= (r2 & 127) << n3, !(r2 & 128)) return this.assertBounds(), [
        e2,
        t2
      ];
    }
    let n2 = this.buf[this.pos++];
    if (e2 |= (n2 & 15) << 28, t2 = (n2 & 112) >> 4, !(n2 & 128)) return this.assertBounds(), [
      e2,
      t2
    ];
    for (let n3 = 3; n3 <= 31; n3 += 7) {
      let r2 = this.buf[this.pos++];
      if (t2 |= (r2 & 127) << n3, !(r2 & 128)) return this.assertBounds(), [
        e2,
        t2
      ];
    }
    throw Error(`invalid varint`);
  }
  function z_(e2, t2, n2) {
    for (let r3 = 0; r3 < 28; r3 += 7) {
      let i3 = e2 >>> r3, a2 = !(!(i3 >>> 7) && t2 == 0), o2 = (a2 ? i3 | 128 : i3) & 255;
      if (n2.push(o2), !a2) return;
    }
    let r2 = e2 >>> 28 & 15 | (t2 & 7) << 4, i2 = !!(t2 >> 3);
    if (n2.push((i2 ? r2 | 128 : r2) & 255), i2) {
      for (let e3 = 3; e3 < 31; e3 += 7) {
        let r3 = t2 >>> e3, i3 = !!(r3 >>> 7), a2 = (i3 ? r3 | 128 : r3) & 255;
        if (n2.push(a2), !i3) return;
      }
      n2.push(t2 >>> 31 & 1);
    }
  }
  var B_ = 4294967296;
  function V_(e2) {
    let t2 = e2[0] === `-`;
    t2 && (e2 = e2.slice(1));
    let n2 = 1e6, r2 = 0, i2 = 0;
    function a2(t3, a3) {
      let o2 = Number(e2.slice(t3, a3));
      i2 *= n2, r2 = r2 * n2 + o2, r2 >= B_ && (i2 += r2 / B_ | 0, r2 %= B_);
    }
    return a2(-24, -18), a2(-18, -12), a2(-12, -6), a2(-6), t2 ? K_(r2, i2) : G_(r2, i2);
  }
  function H_(e2, t2) {
    let n2 = G_(e2, t2), r2 = n2.hi & 2147483648;
    r2 && (n2 = K_(n2.lo, n2.hi));
    let i2 = U_(n2.lo, n2.hi);
    return r2 ? `-` + i2 : i2;
  }
  function U_(e2, t2) {
    if ({ lo: e2, hi: t2 } = W_(e2, t2), t2 <= 2097151) return String(B_ * t2 + e2);
    let n2 = e2 & 16777215, r2 = (e2 >>> 24 | t2 << 8) & 16777215, i2 = t2 >> 16 & 65535, a2 = n2 + r2 * 6777216 + i2 * 6710656, o2 = r2 + i2 * 8147497, s2 = i2 * 2, c2 = 1e7;
    return a2 >= c2 && (o2 += Math.floor(a2 / c2), a2 %= c2), o2 >= c2 && (s2 += Math.floor(o2 / c2), o2 %= c2), s2.toString() + q_(o2) + q_(a2);
  }
  function W_(e2, t2) {
    return {
      lo: e2 >>> 0,
      hi: t2 >>> 0
    };
  }
  function G_(e2, t2) {
    return {
      lo: e2 | 0,
      hi: t2 | 0
    };
  }
  function K_(e2, t2) {
    return t2 = ~t2, e2 ? e2 = ~e2 + 1 : t2 += 1, G_(e2, t2);
  }
  var q_ = (e2) => {
    let t2 = String(e2);
    return `0000000`.slice(t2.length) + t2;
  };
  function J_(e2, t2) {
    if (e2 >= 0) {
      for (; e2 > 127; ) t2.push(e2 & 127 | 128), e2 >>>= 7;
      t2.push(e2);
    } else {
      for (let n2 = 0; n2 < 9; n2++) t2.push(e2 & 127 | 128), e2 >>= 7;
      t2.push(1);
    }
  }
  function Y_() {
    let e2 = this.buf[this.pos++], t2 = e2 & 127;
    if (!(e2 & 128) || (e2 = this.buf[this.pos++], t2 |= (e2 & 127) << 7, !(e2 & 128)) || (e2 = this.buf[this.pos++], t2 |= (e2 & 127) << 14, !(e2 & 128)) || (e2 = this.buf[this.pos++], t2 |= (e2 & 127) << 21, !(e2 & 128))) return this.assertBounds(), t2;
    e2 = this.buf[this.pos++], t2 |= (e2 & 15) << 28;
    for (let t3 = 5; e2 & 128 && t3 < 10; t3++) e2 = this.buf[this.pos++];
    if (e2 & 128) throw Error(`invalid varint`);
    return this.assertBounds(), t2 >>> 0;
  }
  var X_ = Z_();
  function Z_() {
    let e2 = new DataView(new ArrayBuffer(8));
    if (typeof BigInt == `function` && typeof e2.getBigInt64 == `function` && typeof e2.getBigUint64 == `function` && typeof e2.setBigInt64 == `function` && typeof e2.setBigUint64 == `function` && (globalThis.Deno || typeof process != `object` || {}.BUF_BIGINT_DISABLE !== `1`)) {
      let t2 = BigInt(`-9223372036854775808`), n2 = BigInt(`9223372036854775807`), r2 = BigInt(`0`), i2 = BigInt(`18446744073709551615`);
      return {
        zero: BigInt(0),
        supported: true,
        parse(e3) {
          let r3 = typeof e3 == `bigint` ? e3 : BigInt(e3);
          if (r3 > n2 || r3 < t2) throw Error(`invalid int64: ${e3}`);
          return r3;
        },
        uParse(e3) {
          let t3 = typeof e3 == `bigint` ? e3 : BigInt(e3);
          if (t3 > i2 || t3 < r2) throw Error(`invalid uint64: ${e3}`);
          return t3;
        },
        enc(t3) {
          return e2.setBigInt64(0, this.parse(t3), true), {
            lo: e2.getInt32(0, true),
            hi: e2.getInt32(4, true)
          };
        },
        uEnc(t3) {
          return e2.setBigInt64(0, this.uParse(t3), true), {
            lo: e2.getInt32(0, true),
            hi: e2.getInt32(4, true)
          };
        },
        dec(t3, n3) {
          return e2.setInt32(0, t3, true), e2.setInt32(4, n3, true), e2.getBigInt64(0, true);
        },
        uDec(t3, n3) {
          return e2.setInt32(0, t3, true), e2.setInt32(4, n3, true), e2.getBigUint64(0, true);
        }
      };
    }
    return {
      zero: `0`,
      supported: false,
      parse(e3) {
        return typeof e3 != `string` && (e3 = e3.toString()), Q_(e3), e3;
      },
      uParse(e3) {
        return typeof e3 != `string` && (e3 = e3.toString()), $_(e3), e3;
      },
      enc(e3) {
        return typeof e3 != `string` && (e3 = e3.toString()), Q_(e3), V_(e3);
      },
      uEnc(e3) {
        return typeof e3 != `string` && (e3 = e3.toString()), $_(e3), V_(e3);
      },
      dec(e3, t2) {
        return H_(e3, t2);
      },
      uDec(e3, t2) {
        return U_(e3, t2);
      }
    };
  }
  function Q_(e2) {
    if (!/^-?[0-9]+$/.test(e2)) throw Error(`invalid int64: ` + e2);
  }
  function $_(e2) {
    if (!/^[0-9]+$/.test(e2)) throw Error(`invalid uint64: ` + e2);
  }
  var ev = Symbol.for(`@bufbuild/protobuf/text-encoding`);
  function tv() {
    if (globalThis[ev] == null) {
      let e2 = new globalThis.TextEncoder(), t2 = new globalThis.TextDecoder(), n2;
      globalThis[ev] = {
        encodeUtf8(t3) {
          return e2.encode(t3);
        },
        decodeUtf8(e3, r2) {
          return r2 ? (n2 === void 0 && (n2 = new globalThis.TextDecoder(`utf-8`, {
            fatal: true
          })), n2.decode(e3)) : t2.decode(e3);
        },
        checkUtf8(e3) {
          try {
            return true;
          } catch {
            return false;
          }
        }
      };
    }
    return globalThis[ev];
  }
  var nv;
  (function(e2) {
    e2[e2.Varint = 0] = `Varint`, e2[e2.Bit64 = 1] = `Bit64`, e2[e2.LengthDelimited = 2] = `LengthDelimited`, e2[e2.StartGroup = 3] = `StartGroup`, e2[e2.EndGroup = 4] = `EndGroup`, e2[e2.Bit32 = 5] = `Bit32`;
  })(nv || (nv = {}));
  var rv = class {
    constructor(e2 = tv().encodeUtf8) {
      this.encodeUtf8 = e2, this.stack = [], this.chunks = [], this.buf = [];
    }
    finish() {
      this.buf.length && (this.chunks.push(new Uint8Array(this.buf)), this.buf = []);
      let e2 = 0;
      for (let t3 = 0; t3 < this.chunks.length; t3++) e2 += this.chunks[t3].length;
      let t2 = new Uint8Array(e2), n2 = 0;
      for (let e3 = 0; e3 < this.chunks.length; e3++) t2.set(this.chunks[e3], n2), n2 += this.chunks[e3].length;
      return this.chunks = [], t2;
    }
    fork() {
      return this.stack.push({
        chunks: this.chunks,
        buf: this.buf
      }), this.chunks = [], this.buf = [], this;
    }
    join() {
      let e2 = this.finish(), t2 = this.stack.pop();
      if (!t2) throw Error(`invalid state, fork stack empty`);
      return this.chunks = t2.chunks, this.buf = t2.buf, this.uint32(e2.byteLength), this.raw(e2);
    }
    tag(e2, t2) {
      return this.uint32((e2 << 3 | t2) >>> 0);
    }
    raw(e2) {
      return this.buf.length && (this.chunks.push(new Uint8Array(this.buf)), this.buf = []), this.chunks.push(e2), this;
    }
    uint32(e2) {
      for (av(e2); e2 > 127; ) this.buf.push(e2 & 127 | 128), e2 >>>= 7;
      return this.buf.push(e2), this;
    }
    int32(e2) {
      return iv(e2), J_(e2, this.buf), this;
    }
    bool(e2) {
      return this.buf.push(+!!e2), this;
    }
    bytes(e2) {
      return this.uint32(e2.byteLength), this.raw(e2);
    }
    string(e2) {
      let t2 = this.encodeUtf8(e2);
      return this.uint32(t2.byteLength), this.raw(t2);
    }
    float(e2) {
      ov(e2);
      let t2 = new Uint8Array(4);
      return new DataView(t2.buffer).setFloat32(0, e2, true), this.raw(t2);
    }
    double(e2) {
      let t2 = new Uint8Array(8);
      return new DataView(t2.buffer).setFloat64(0, e2, true), this.raw(t2);
    }
    fixed32(e2) {
      av(e2);
      let t2 = new Uint8Array(4);
      return new DataView(t2.buffer).setUint32(0, e2, true), this.raw(t2);
    }
    sfixed32(e2) {
      iv(e2);
      let t2 = new Uint8Array(4);
      return new DataView(t2.buffer).setInt32(0, e2, true), this.raw(t2);
    }
    sint32(e2) {
      return iv(e2), e2 = (e2 << 1 ^ e2 >> 31) >>> 0, J_(e2, this.buf), this;
    }
    sfixed64(e2) {
      let t2 = new Uint8Array(8), n2 = new DataView(t2.buffer), r2 = X_.enc(e2);
      return n2.setInt32(0, r2.lo, true), n2.setInt32(4, r2.hi, true), this.raw(t2);
    }
    fixed64(e2) {
      let t2 = new Uint8Array(8), n2 = new DataView(t2.buffer), r2 = X_.uEnc(e2);
      return n2.setInt32(0, r2.lo, true), n2.setInt32(4, r2.hi, true), this.raw(t2);
    }
    int64(e2) {
      let t2 = X_.enc(e2);
      return z_(t2.lo, t2.hi, this.buf), this;
    }
    sint64(e2) {
      let t2 = X_.enc(e2), n2 = t2.hi >> 31;
      return z_(t2.lo << 1 ^ n2, (t2.hi << 1 | t2.lo >>> 31) ^ n2, this.buf), this;
    }
    uint64(e2) {
      let t2 = X_.uEnc(e2);
      return z_(t2.lo, t2.hi, this.buf), this;
    }
  }, Z = class {
    constructor(e2, t2 = tv().decodeUtf8) {
      this.decodeUtf8 = t2, this.varint64 = R_, this.uint32 = Y_, this.buf = e2, this.len = e2.length, this.pos = 0, this.view = new DataView(e2.buffer, e2.byteOffset, e2.byteLength);
    }
    tag() {
      let e2 = this.pos, t2 = this.uint32(), n2 = this.pos - e2;
      if (n2 > 5 || n2 == 5 && this.buf[this.pos - 1] > 15) throw Error(`illegal tag: varint overflows uint32`);
      let r2 = t2 >>> 3, i2 = t2 & 7;
      if (r2 <= 0 || i2 > 5) throw Error(`illegal tag: field no ` + r2 + ` wire type ` + i2);
      return [
        r2,
        i2
      ];
    }
    skip(e2, t2) {
      let n2 = this.pos;
      switch (e2) {
        case nv.Varint:
          for (; this.buf[this.pos++] & 128; ) ;
          break;
        case nv.Bit64:
          this.pos += 4;
        case nv.Bit32:
          this.pos += 4;
          break;
        case nv.LengthDelimited:
          let n3 = this.uint32();
          this.pos += n3;
          break;
        case nv.StartGroup:
          for (; ; ) {
            let [e3, n4] = this.tag();
            if (n4 === nv.EndGroup) {
              if (t2 !== void 0 && e3 !== t2) throw Error(`invalid end group tag`);
              break;
            }
            this.skip(n4, e3);
          }
          break;
        default:
          throw Error(`cant skip wire type ` + e2);
      }
      return this.assertBounds(), this.buf.subarray(n2, this.pos);
    }
    assertBounds() {
      if (this.pos > this.len) throw RangeError(`premature EOF`);
    }
    int32() {
      return this.uint32() | 0;
    }
    sint32() {
      let e2 = this.uint32();
      return e2 >>> 1 ^ -(e2 & 1);
    }
    int64() {
      return X_.dec(...this.varint64());
    }
    uint64() {
      return X_.uDec(...this.varint64());
    }
    sint64() {
      let [e2, t2] = this.varint64(), n2 = -(e2 & 1);
      return e2 = (e2 >>> 1 | (t2 & 1) << 31) ^ n2, t2 = t2 >>> 1 ^ n2, X_.dec(e2, t2);
    }
    bool() {
      let [e2, t2] = this.varint64();
      return e2 !== 0 || t2 !== 0;
    }
    fixed32() {
      return this.view.getUint32((this.pos += 4) - 4, true);
    }
    sfixed32() {
      return this.view.getInt32((this.pos += 4) - 4, true);
    }
    fixed64() {
      return X_.uDec(this.sfixed32(), this.sfixed32());
    }
    sfixed64() {
      return X_.dec(this.sfixed32(), this.sfixed32());
    }
    float() {
      return this.view.getFloat32((this.pos += 4) - 4, true);
    }
    double() {
      return this.view.getFloat64((this.pos += 8) - 8, true);
    }
    bytes() {
      let e2 = this.uint32(), t2 = this.pos;
      return this.pos += e2, this.assertBounds(), this.buf.subarray(t2, t2 + e2);
    }
    string(e2) {
      return this.decodeUtf8(this.bytes(), e2);
    }
  };
  function iv(e2) {
    if (typeof e2 == `string`) e2 = Number(e2);
    else if (typeof e2 != `number`) throw Error(`invalid int32: ` + typeof e2);
    if (!Number.isInteger(e2) || e2 > 2147483647 || e2 < -2147483648) throw Error(`invalid int32: ` + e2);
  }
  function av(e2) {
    if (typeof e2 == `string`) e2 = Number(e2);
    else if (typeof e2 != `number`) throw Error(`invalid uint32: ` + typeof e2);
    if (!Number.isInteger(e2) || e2 > 4294967295 || e2 < 0) throw Error(`invalid uint32: ` + e2);
  }
  function ov(e2) {
    if (typeof e2 == `string`) {
      let t2 = e2;
      if (e2 = Number(e2), Number.isNaN(e2) && t2 !== `NaN`) throw Error(`invalid float32: ` + t2);
    } else if (typeof e2 != `number`) throw Error(`invalid float32: ` + typeof e2);
    if (Number.isFinite(e2) && (e2 > 34028234663852886e22 || e2 < -34028234663852886e22)) throw Error(`invalid float32: ` + e2);
  }
  function sv() {
    return {
      x: 0,
      y: 0
    };
  }
  var cv = {
    encode(e2, t2 = new rv()) {
      return e2.x !== 0 && t2.uint32(13).float(e2.x), e2.y !== 0 && t2.uint32(21).float(e2.y), t2;
    },
    decode(e2, t2) {
      let n2 = e2 instanceof Z ? e2 : new Z(e2), r2 = t2 === void 0 ? n2.len : n2.pos + t2, i2 = sv();
      for (; n2.pos < r2; ) {
        let e3 = n2.uint32();
        switch (e3 >>> 3) {
          case 1:
            if (e3 !== 13) break;
            i2.x = n2.float();
            continue;
          case 2:
            if (e3 !== 21) break;
            i2.y = n2.float();
            continue;
        }
        if ((e3 & 7) == 4 || e3 === 0) break;
        n2.skip(e3 & 7);
      }
      return i2;
    },
    fromJSON(e2) {
      return {
        x: Cv(e2.x) ? globalThis.Number(e2.x) : 0,
        y: Cv(e2.y) ? globalThis.Number(e2.y) : 0
      };
    },
    toJSON(e2) {
      let t2 = {};
      return e2.x !== 0 && (t2.x = e2.x), e2.y !== 0 && (t2.y = e2.y), t2;
    },
    create(e2) {
      return cv.fromPartial(e2 ?? {});
    },
    fromPartial(e2) {
      let t2 = sv();
      return t2.x = e2.x ?? 0, t2.y = e2.y ?? 0, t2;
    }
  };
  function lv() {
    return {
      width: 0,
      height: 0
    };
  }
  var uv = {
    encode(e2, t2 = new rv()) {
      return e2.width !== 0 && t2.uint32(13).float(e2.width), e2.height !== 0 && t2.uint32(21).float(e2.height), t2;
    },
    decode(e2, t2) {
      let n2 = e2 instanceof Z ? e2 : new Z(e2), r2 = t2 === void 0 ? n2.len : n2.pos + t2, i2 = lv();
      for (; n2.pos < r2; ) {
        let e3 = n2.uint32();
        switch (e3 >>> 3) {
          case 1:
            if (e3 !== 13) break;
            i2.width = n2.float();
            continue;
          case 2:
            if (e3 !== 21) break;
            i2.height = n2.float();
            continue;
        }
        if ((e3 & 7) == 4 || e3 === 0) break;
        n2.skip(e3 & 7);
      }
      return i2;
    },
    fromJSON(e2) {
      return {
        width: Cv(e2.width) ? globalThis.Number(e2.width) : 0,
        height: Cv(e2.height) ? globalThis.Number(e2.height) : 0
      };
    },
    toJSON(e2) {
      let t2 = {};
      return e2.width !== 0 && (t2.width = e2.width), e2.height !== 0 && (t2.height = e2.height), t2;
    },
    create(e2) {
      return uv.fromPartial(e2 ?? {});
    },
    fromPartial(e2) {
      let t2 = lv();
      return t2.width = e2.width ?? 0, t2.height = e2.height ?? 0, t2;
    }
  };
  function dv() {
    return {
      x: 0,
      y: 0,
      z: 0
    };
  }
  var fv = {
    encode(e2, t2 = new rv()) {
      return e2.x !== 0 && t2.uint32(13).float(e2.x), e2.y !== 0 && t2.uint32(21).float(e2.y), e2.z !== 0 && t2.uint32(29).float(e2.z), t2;
    },
    decode(e2, t2) {
      let n2 = e2 instanceof Z ? e2 : new Z(e2), r2 = t2 === void 0 ? n2.len : n2.pos + t2, i2 = dv();
      for (; n2.pos < r2; ) {
        let e3 = n2.uint32();
        switch (e3 >>> 3) {
          case 1:
            if (e3 !== 13) break;
            i2.x = n2.float();
            continue;
          case 2:
            if (e3 !== 21) break;
            i2.y = n2.float();
            continue;
          case 3:
            if (e3 !== 29) break;
            i2.z = n2.float();
            continue;
        }
        if ((e3 & 7) == 4 || e3 === 0) break;
        n2.skip(e3 & 7);
      }
      return i2;
    },
    fromJSON(e2) {
      return {
        x: Cv(e2.x) ? globalThis.Number(e2.x) : 0,
        y: Cv(e2.y) ? globalThis.Number(e2.y) : 0,
        z: Cv(e2.z) ? globalThis.Number(e2.z) : 0
      };
    },
    toJSON(e2) {
      let t2 = {};
      return e2.x !== 0 && (t2.x = e2.x), e2.y !== 0 && (t2.y = e2.y), e2.z !== 0 && (t2.z = e2.z), t2;
    },
    create(e2) {
      return fv.fromPartial(e2 ?? {});
    },
    fromPartial(e2) {
      let t2 = dv();
      return t2.x = e2.x ?? 0, t2.y = e2.y ?? 0, t2.z = e2.z ?? 0, t2;
    }
  };
  function pv() {
    return {
      width: 0,
      height: 0,
      depth: 0
    };
  }
  var mv = {
    encode(e2, t2 = new rv()) {
      return e2.width !== 0 && t2.uint32(13).float(e2.width), e2.height !== 0 && t2.uint32(21).float(e2.height), e2.depth !== 0 && t2.uint32(29).float(e2.depth), t2;
    },
    decode(e2, t2) {
      let n2 = e2 instanceof Z ? e2 : new Z(e2), r2 = t2 === void 0 ? n2.len : n2.pos + t2, i2 = pv();
      for (; n2.pos < r2; ) {
        let e3 = n2.uint32();
        switch (e3 >>> 3) {
          case 1:
            if (e3 !== 13) break;
            i2.width = n2.float();
            continue;
          case 2:
            if (e3 !== 21) break;
            i2.height = n2.float();
            continue;
          case 3:
            if (e3 !== 29) break;
            i2.depth = n2.float();
            continue;
        }
        if ((e3 & 7) == 4 || e3 === 0) break;
        n2.skip(e3 & 7);
      }
      return i2;
    },
    fromJSON(e2) {
      return {
        width: Cv(e2.width) ? globalThis.Number(e2.width) : 0,
        height: Cv(e2.height) ? globalThis.Number(e2.height) : 0,
        depth: Cv(e2.depth) ? globalThis.Number(e2.depth) : 0
      };
    },
    toJSON(e2) {
      let t2 = {};
      return e2.width !== 0 && (t2.width = e2.width), e2.height !== 0 && (t2.height = e2.height), e2.depth !== 0 && (t2.depth = e2.depth), t2;
    },
    create(e2) {
      return mv.fromPartial(e2 ?? {});
    },
    fromPartial(e2) {
      let t2 = pv();
      return t2.width = e2.width ?? 0, t2.height = e2.height ?? 0, t2.depth = e2.depth ?? 0, t2;
    }
  };
  function hv() {
    return {
      x: 0,
      y: 0,
      z: 0,
      w: 0
    };
  }
  var gv = {
    encode(e2, t2 = new rv()) {
      return e2.x !== 0 && t2.uint32(13).float(e2.x), e2.y !== 0 && t2.uint32(21).float(e2.y), e2.z !== 0 && t2.uint32(29).float(e2.z), e2.w !== 0 && t2.uint32(37).float(e2.w), t2;
    },
    decode(e2, t2) {
      let n2 = e2 instanceof Z ? e2 : new Z(e2), r2 = t2 === void 0 ? n2.len : n2.pos + t2, i2 = hv();
      for (; n2.pos < r2; ) {
        let e3 = n2.uint32();
        switch (e3 >>> 3) {
          case 1:
            if (e3 !== 13) break;
            i2.x = n2.float();
            continue;
          case 2:
            if (e3 !== 21) break;
            i2.y = n2.float();
            continue;
          case 3:
            if (e3 !== 29) break;
            i2.z = n2.float();
            continue;
          case 4:
            if (e3 !== 37) break;
            i2.w = n2.float();
            continue;
        }
        if ((e3 & 7) == 4 || e3 === 0) break;
        n2.skip(e3 & 7);
      }
      return i2;
    },
    fromJSON(e2) {
      return {
        x: Cv(e2.x) ? globalThis.Number(e2.x) : 0,
        y: Cv(e2.y) ? globalThis.Number(e2.y) : 0,
        z: Cv(e2.z) ? globalThis.Number(e2.z) : 0,
        w: Cv(e2.w) ? globalThis.Number(e2.w) : 0
      };
    },
    toJSON(e2) {
      let t2 = {};
      return e2.x !== 0 && (t2.x = e2.x), e2.y !== 0 && (t2.y = e2.y), e2.z !== 0 && (t2.z = e2.z), e2.w !== 0 && (t2.w = e2.w), t2;
    },
    create(e2) {
      return gv.fromPartial(e2 ?? {});
    },
    fromPartial(e2) {
      let t2 = hv();
      return t2.x = e2.x ?? 0, t2.y = e2.y ?? 0, t2.z = e2.z ?? 0, t2.w = e2.w ?? 0, t2;
    }
  };
  function _v() {
    return {
      offset: void 0,
      extent: void 0
    };
  }
  var vv = {
    encode(e2, t2 = new rv()) {
      return e2.offset !== void 0 && cv.encode(e2.offset, t2.uint32(10).fork()).join(), e2.extent !== void 0 && uv.encode(e2.extent, t2.uint32(18).fork()).join(), t2;
    },
    decode(e2, t2) {
      let n2 = e2 instanceof Z ? e2 : new Z(e2), r2 = t2 === void 0 ? n2.len : n2.pos + t2, i2 = _v();
      for (; n2.pos < r2; ) {
        let e3 = n2.uint32();
        switch (e3 >>> 3) {
          case 1:
            if (e3 !== 10) break;
            i2.offset = cv.decode(n2, n2.uint32());
            continue;
          case 2:
            if (e3 !== 18) break;
            i2.extent = uv.decode(n2, n2.uint32());
            continue;
        }
        if ((e3 & 7) == 4 || e3 === 0) break;
        n2.skip(e3 & 7);
      }
      return i2;
    },
    fromJSON(e2) {
      return {
        offset: Cv(e2.offset) ? cv.fromJSON(e2.offset) : void 0,
        extent: Cv(e2.extent) ? uv.fromJSON(e2.extent) : void 0
      };
    },
    toJSON(e2) {
      let t2 = {};
      return e2.offset !== void 0 && (t2.offset = cv.toJSON(e2.offset)), e2.extent !== void 0 && (t2.extent = uv.toJSON(e2.extent)), t2;
    },
    create(e2) {
      return vv.fromPartial(e2 ?? {});
    },
    fromPartial(e2) {
      let t2 = _v();
      return t2.offset = e2.offset !== void 0 && e2.offset !== null ? cv.fromPartial(e2.offset) : void 0, t2.extent = e2.extent !== void 0 && e2.extent !== null ? uv.fromPartial(e2.extent) : void 0, t2;
    }
  };
  function yv() {
    return {
      offset: void 0,
      extent: void 0
    };
  }
  var bv = {
    encode(e2, t2 = new rv()) {
      return e2.offset !== void 0 && fv.encode(e2.offset, t2.uint32(10).fork()).join(), e2.extent !== void 0 && mv.encode(e2.extent, t2.uint32(18).fork()).join(), t2;
    },
    decode(e2, t2) {
      let n2 = e2 instanceof Z ? e2 : new Z(e2), r2 = t2 === void 0 ? n2.len : n2.pos + t2, i2 = yv();
      for (; n2.pos < r2; ) {
        let e3 = n2.uint32();
        switch (e3 >>> 3) {
          case 1:
            if (e3 !== 10) break;
            i2.offset = fv.decode(n2, n2.uint32());
            continue;
          case 2:
            if (e3 !== 18) break;
            i2.extent = mv.decode(n2, n2.uint32());
            continue;
        }
        if ((e3 & 7) == 4 || e3 === 0) break;
        n2.skip(e3 & 7);
      }
      return i2;
    },
    fromJSON(e2) {
      return {
        offset: Cv(e2.offset) ? fv.fromJSON(e2.offset) : void 0,
        extent: Cv(e2.extent) ? mv.fromJSON(e2.extent) : void 0
      };
    },
    toJSON(e2) {
      let t2 = {};
      return e2.offset !== void 0 && (t2.offset = fv.toJSON(e2.offset)), e2.extent !== void 0 && (t2.extent = mv.toJSON(e2.extent)), t2;
    },
    create(e2) {
      return bv.fromPartial(e2 ?? {});
    },
    fromPartial(e2) {
      let t2 = yv();
      return t2.offset = e2.offset !== void 0 && e2.offset !== null ? fv.fromPartial(e2.offset) : void 0, t2.extent = e2.extent !== void 0 && e2.extent !== null ? mv.fromPartial(e2.extent) : void 0, t2;
    }
  };
  function xv() {
    return {
      orientation: void 0,
      position: void 0
    };
  }
  var Sv = {
    encode(e2, t2 = new rv()) {
      return e2.orientation !== void 0 && gv.encode(e2.orientation, t2.uint32(10).fork()).join(), e2.position !== void 0 && fv.encode(e2.position, t2.uint32(18).fork()).join(), t2;
    },
    decode(e2, t2) {
      let n2 = e2 instanceof Z ? e2 : new Z(e2), r2 = t2 === void 0 ? n2.len : n2.pos + t2, i2 = xv();
      for (; n2.pos < r2; ) {
        let e3 = n2.uint32();
        switch (e3 >>> 3) {
          case 1:
            if (e3 !== 10) break;
            i2.orientation = gv.decode(n2, n2.uint32());
            continue;
          case 2:
            if (e3 !== 18) break;
            i2.position = fv.decode(n2, n2.uint32());
            continue;
        }
        if ((e3 & 7) == 4 || e3 === 0) break;
        n2.skip(e3 & 7);
      }
      return i2;
    },
    fromJSON(e2) {
      return {
        orientation: Cv(e2.orientation) ? gv.fromJSON(e2.orientation) : void 0,
        position: Cv(e2.position) ? fv.fromJSON(e2.position) : void 0
      };
    },
    toJSON(e2) {
      let t2 = {};
      return e2.orientation !== void 0 && (t2.orientation = gv.toJSON(e2.orientation)), e2.position !== void 0 && (t2.position = fv.toJSON(e2.position)), t2;
    },
    create(e2) {
      return Sv.fromPartial(e2 ?? {});
    },
    fromPartial(e2) {
      let t2 = xv();
      return t2.orientation = e2.orientation !== void 0 && e2.orientation !== null ? gv.fromPartial(e2.orientation) : void 0, t2.position = e2.position !== void 0 && e2.position !== null ? fv.fromPartial(e2.position) : void 0, t2;
    }
  };
  function Cv(e2) {
    return e2 != null;
  }
  var wv;
  (function(e2) {
    e2[e2.Keyboard = 0] = `Keyboard`, e2[e2.UNRECOGNIZED = -1] = `UNRECOGNIZED`;
  })(wv || (wv = {}));
  function Tv(e2) {
    switch (e2) {
      case 0:
      case `Keyboard`:
        return wv.Keyboard;
      default:
        return wv.UNRECOGNIZED;
    }
  }
  function Ev(e2) {
    switch (e2) {
      case wv.Keyboard:
        return `Keyboard`;
      case wv.UNRECOGNIZED:
      default:
        return `UNRECOGNIZED`;
    }
  }
  var Q;
  (function(e2) {
    e2[e2.UNKNOWN = 0] = `UNKNOWN`, e2[e2.FLOOR = 1] = `FLOOR`, e2[e2.CEILING = 2] = `CEILING`, e2[e2.WALL_FACE = 3] = `WALL_FACE`, e2[e2.TABLE = 4] = `TABLE`, e2[e2.COUCH = 5] = `COUCH`, e2[e2.DOOR_FRAME = 6] = `DOOR_FRAME`, e2[e2.WINDOW_FRAME = 7] = `WINDOW_FRAME`, e2[e2.OTHER = 8] = `OTHER`, e2[e2.STORAGE = 9] = `STORAGE`, e2[e2.BED = 10] = `BED`, e2[e2.SCREEN = 11] = `SCREEN`, e2[e2.LAMP = 12] = `LAMP`, e2[e2.PLANT = 13] = `PLANT`, e2[e2.WALL_ART = 14] = `WALL_ART`, e2[e2.GLOBAL_MESH = 15] = `GLOBAL_MESH`, e2[e2.INVISIBLE_WALL_FACE = 16] = `INVISIBLE_WALL_FACE`, e2[e2.CHAIR = 17] = `CHAIR`, e2[e2.INNER_WALL_FACE = 18] = `INNER_WALL_FACE`, e2[e2.OTHER_ROOM_FACE = 19] = `OTHER_ROOM_FACE`, e2[e2.OPENING = 20] = `OPENING`, e2[e2.UNRECOGNIZED = -1] = `UNRECOGNIZED`;
  })(Q || (Q = {}));
  function Dv(e2) {
    switch (e2) {
      case 0:
      case `UNKNOWN`:
        return Q.UNKNOWN;
      case 1:
      case `FLOOR`:
        return Q.FLOOR;
      case 2:
      case `CEILING`:
        return Q.CEILING;
      case 3:
      case `WALL_FACE`:
        return Q.WALL_FACE;
      case 4:
      case `TABLE`:
        return Q.TABLE;
      case 5:
      case `COUCH`:
        return Q.COUCH;
      case 6:
      case `DOOR_FRAME`:
        return Q.DOOR_FRAME;
      case 7:
      case `WINDOW_FRAME`:
        return Q.WINDOW_FRAME;
      case 8:
      case `OTHER`:
        return Q.OTHER;
      case 9:
      case `STORAGE`:
        return Q.STORAGE;
      case 10:
      case `BED`:
        return Q.BED;
      case 11:
      case `SCREEN`:
        return Q.SCREEN;
      case 12:
      case `LAMP`:
        return Q.LAMP;
      case 13:
      case `PLANT`:
        return Q.PLANT;
      case 14:
      case `WALL_ART`:
        return Q.WALL_ART;
      case 15:
      case `GLOBAL_MESH`:
        return Q.GLOBAL_MESH;
      case 16:
      case `INVISIBLE_WALL_FACE`:
        return Q.INVISIBLE_WALL_FACE;
      case 17:
      case `CHAIR`:
        return Q.CHAIR;
      case 18:
      case `INNER_WALL_FACE`:
        return Q.INNER_WALL_FACE;
      case 19:
      case `OTHER_ROOM_FACE`:
        return Q.OTHER_ROOM_FACE;
      case 20:
      case `OPENING`:
        return Q.OPENING;
      default:
        return Q.UNRECOGNIZED;
    }
  }
  function Ov(e2) {
    switch (e2) {
      case Q.UNKNOWN:
        return `UNKNOWN`;
      case Q.FLOOR:
        return `FLOOR`;
      case Q.CEILING:
        return `CEILING`;
      case Q.WALL_FACE:
        return `WALL_FACE`;
      case Q.TABLE:
        return `TABLE`;
      case Q.COUCH:
        return `COUCH`;
      case Q.DOOR_FRAME:
        return `DOOR_FRAME`;
      case Q.WINDOW_FRAME:
        return `WINDOW_FRAME`;
      case Q.OTHER:
        return `OTHER`;
      case Q.STORAGE:
        return `STORAGE`;
      case Q.BED:
        return `BED`;
      case Q.SCREEN:
        return `SCREEN`;
      case Q.LAMP:
        return `LAMP`;
      case Q.PLANT:
        return `PLANT`;
      case Q.WALL_ART:
        return `WALL_ART`;
      case Q.GLOBAL_MESH:
        return `GLOBAL_MESH`;
      case Q.INVISIBLE_WALL_FACE:
        return `INVISIBLE_WALL_FACE`;
      case Q.CHAIR:
        return `CHAIR`;
      case Q.INNER_WALL_FACE:
        return `INNER_WALL_FACE`;
      case Q.OTHER_ROOM_FACE:
        return `OTHER_ROOM_FACE`;
      case Q.OPENING:
        return `OPENING`;
      case Q.UNRECOGNIZED:
      default:
        return `UNRECOGNIZED`;
    }
  }
  function kv() {
    return {
      floorUuid: ``,
      ceilingUuid: ``,
      wallUuids: []
    };
  }
  var Av = {
    encode(e2, t2 = new rv()) {
      e2.floorUuid !== `` && t2.uint32(10).string(e2.floorUuid), e2.ceilingUuid !== `` && t2.uint32(18).string(e2.ceilingUuid);
      for (let n2 of e2.wallUuids) t2.uint32(26).string(n2);
      return t2;
    },
    decode(e2, t2) {
      let n2 = e2 instanceof Z ? e2 : new Z(e2), r2 = t2 === void 0 ? n2.len : n2.pos + t2, i2 = kv();
      for (; n2.pos < r2; ) {
        let e3 = n2.uint32();
        switch (e3 >>> 3) {
          case 1:
            if (e3 !== 10) break;
            i2.floorUuid = n2.string();
            continue;
          case 2:
            if (e3 !== 18) break;
            i2.ceilingUuid = n2.string();
            continue;
          case 3:
            if (e3 !== 26) break;
            i2.wallUuids.push(n2.string());
            continue;
        }
        if ((e3 & 7) == 4 || e3 === 0) break;
        n2.skip(e3 & 7);
      }
      return i2;
    },
    fromJSON(e2) {
      return {
        floorUuid: Uv(e2.floorUuid) ? globalThis.String(e2.floorUuid) : ``,
        ceilingUuid: Uv(e2.ceilingUuid) ? globalThis.String(e2.ceilingUuid) : ``,
        wallUuids: globalThis.Array.isArray(e2 == null ? void 0 : e2.wallUuids) ? e2.wallUuids.map((e3) => globalThis.String(e3)) : []
      };
    },
    toJSON(e2) {
      var _a2;
      let t2 = {};
      return e2.floorUuid !== `` && (t2.floorUuid = e2.floorUuid), e2.ceilingUuid !== `` && (t2.ceilingUuid = e2.ceilingUuid), ((_a2 = e2.wallUuids) == null ? void 0 : _a2.length) && (t2.wallUuids = e2.wallUuids), t2;
    },
    create(e2) {
      return Av.fromPartial(e2 ?? {});
    },
    fromPartial(e2) {
      var _a2;
      let t2 = kv();
      return t2.floorUuid = e2.floorUuid ?? ``, t2.ceilingUuid = e2.ceilingUuid ?? ``, t2.wallUuids = ((_a2 = e2.wallUuids) == null ? void 0 : _a2.map((e3) => e3)) || [], t2;
    }
  };
  function jv() {
    return {
      uuids: []
    };
  }
  var Mv = {
    encode(e2, t2 = new rv()) {
      for (let n2 of e2.uuids) t2.uint32(10).string(n2);
      return t2;
    },
    decode(e2, t2) {
      let n2 = e2 instanceof Z ? e2 : new Z(e2), r2 = t2 === void 0 ? n2.len : n2.pos + t2, i2 = jv();
      for (; n2.pos < r2; ) {
        let e3 = n2.uint32();
        switch (e3 >>> 3) {
          case 1:
            if (e3 !== 10) break;
            i2.uuids.push(n2.string());
            continue;
        }
        if ((e3 & 7) == 4 || e3 === 0) break;
        n2.skip(e3 & 7);
      }
      return i2;
    },
    fromJSON(e2) {
      return {
        uuids: globalThis.Array.isArray(e2 == null ? void 0 : e2.uuids) ? e2.uuids.map((e3) => globalThis.String(e3)) : []
      };
    },
    toJSON(e2) {
      var _a2;
      let t2 = {};
      return ((_a2 = e2.uuids) == null ? void 0 : _a2.length) && (t2.uuids = e2.uuids), t2;
    },
    create(e2) {
      return Mv.fromPartial(e2 ?? {});
    },
    fromPartial(e2) {
      var _a2;
      let t2 = jv();
      return t2.uuids = ((_a2 = e2.uuids) == null ? void 0 : _a2.map((e3) => e3)) || [], t2;
    }
  };
  function Nv() {
    return {
      vertices: new Uint8Array()
    };
  }
  var Pv = {
    encode(e2, t2 = new rv()) {
      return e2.vertices.length !== 0 && t2.uint32(10).bytes(e2.vertices), t2;
    },
    decode(e2, t2) {
      let n2 = e2 instanceof Z ? e2 : new Z(e2), r2 = t2 === void 0 ? n2.len : n2.pos + t2, i2 = Nv();
      for (; n2.pos < r2; ) {
        let e3 = n2.uint32();
        switch (e3 >>> 3) {
          case 1:
            if (e3 !== 10) break;
            i2.vertices = n2.bytes();
            continue;
        }
        if ((e3 & 7) == 4 || e3 === 0) break;
        n2.skip(e3 & 7);
      }
      return i2;
    },
    fromJSON(e2) {
      return {
        vertices: Uv(e2.vertices) ? Vv(e2.vertices) : new Uint8Array()
      };
    },
    toJSON(e2) {
      let t2 = {};
      return e2.vertices.length !== 0 && (t2.vertices = Hv(e2.vertices)), t2;
    },
    create(e2) {
      return Pv.fromPartial(e2 ?? {});
    },
    fromPartial(e2) {
      let t2 = Nv();
      return t2.vertices = e2.vertices ?? new Uint8Array(), t2;
    }
  };
  function Fv() {
    return {
      vertices: new Uint8Array(),
      indices: new Uint8Array()
    };
  }
  var Iv = {
    encode(e2, t2 = new rv()) {
      return e2.vertices.length !== 0 && t2.uint32(10).bytes(e2.vertices), e2.indices.length !== 0 && t2.uint32(18).bytes(e2.indices), t2;
    },
    decode(e2, t2) {
      let n2 = e2 instanceof Z ? e2 : new Z(e2), r2 = t2 === void 0 ? n2.len : n2.pos + t2, i2 = Fv();
      for (; n2.pos < r2; ) {
        let e3 = n2.uint32();
        switch (e3 >>> 3) {
          case 1:
            if (e3 !== 10) break;
            i2.vertices = n2.bytes();
            continue;
          case 2:
            if (e3 !== 18) break;
            i2.indices = n2.bytes();
            continue;
        }
        if ((e3 & 7) == 4 || e3 === 0) break;
        n2.skip(e3 & 7);
      }
      return i2;
    },
    fromJSON(e2) {
      return {
        vertices: Uv(e2.vertices) ? Vv(e2.vertices) : new Uint8Array(),
        indices: Uv(e2.indices) ? Vv(e2.indices) : new Uint8Array()
      };
    },
    toJSON(e2) {
      let t2 = {};
      return e2.vertices.length !== 0 && (t2.vertices = Hv(e2.vertices)), e2.indices.length !== 0 && (t2.indices = Hv(e2.indices)), t2;
    },
    create(e2) {
      return Iv.fromPartial(e2 ?? {});
    },
    fromPartial(e2) {
      let t2 = Fv();
      return t2.vertices = e2.vertices ?? new Uint8Array(), t2.indices = e2.indices ?? new Uint8Array(), t2;
    }
  };
  function Lv() {
    return {
      classType: 0
    };
  }
  var Rv = {
    encode(e2, t2 = new rv()) {
      return e2.classType !== 0 && t2.uint32(8).int32(e2.classType), t2;
    },
    decode(e2, t2) {
      let n2 = e2 instanceof Z ? e2 : new Z(e2), r2 = t2 === void 0 ? n2.len : n2.pos + t2, i2 = Lv();
      for (; n2.pos < r2; ) {
        let e3 = n2.uint32();
        switch (e3 >>> 3) {
          case 1:
            if (e3 !== 8) break;
            i2.classType = n2.int32();
            continue;
        }
        if ((e3 & 7) == 4 || e3 === 0) break;
        n2.skip(e3 & 7);
      }
      return i2;
    },
    fromJSON(e2) {
      return {
        classType: Uv(e2.classType) ? Tv(e2.classType) : 0
      };
    },
    toJSON(e2) {
      let t2 = {};
      return e2.classType !== 0 && (t2.classType = Ev(e2.classType)), t2;
    },
    create(e2) {
      return Rv.fromPartial(e2 ?? {});
    },
    fromPartial(e2) {
      let t2 = Lv();
      return t2.classType = e2.classType ?? 0, t2;
    }
  };
  function zv() {
    return {
      uuid: ``,
      semanticLabel_META: void 0,
      locatable_META: void 0,
      boundary2D_META: void 0,
      bounded2D_META: void 0,
      bounded3D_META: void 0,
      roomLayout_META: void 0,
      spaceContainer_META: void 0,
      triangleMesh_META: void 0,
      dynamicObject_META: void 0
    };
  }
  var Bv = {
    encode(e2, t2 = new rv()) {
      return e2.uuid !== `` && t2.uint32(10).string(e2.uuid), e2.semanticLabel_META !== void 0 && t2.uint32(16).int32(e2.semanticLabel_META), e2.locatable_META !== void 0 && Sv.encode(e2.locatable_META, t2.uint32(26).fork()).join(), e2.boundary2D_META !== void 0 && Pv.encode(e2.boundary2D_META, t2.uint32(34).fork()).join(), e2.bounded2D_META !== void 0 && vv.encode(e2.bounded2D_META, t2.uint32(42).fork()).join(), e2.bounded3D_META !== void 0 && bv.encode(e2.bounded3D_META, t2.uint32(50).fork()).join(), e2.roomLayout_META !== void 0 && Av.encode(e2.roomLayout_META, t2.uint32(58).fork()).join(), e2.spaceContainer_META !== void 0 && Mv.encode(e2.spaceContainer_META, t2.uint32(66).fork()).join(), e2.triangleMesh_META !== void 0 && Iv.encode(e2.triangleMesh_META, t2.uint32(74).fork()).join(), e2.dynamicObject_META !== void 0 && Rv.encode(e2.dynamicObject_META, t2.uint32(82).fork()).join(), t2;
    },
    decode(e2, t2) {
      let n2 = e2 instanceof Z ? e2 : new Z(e2), r2 = t2 === void 0 ? n2.len : n2.pos + t2, i2 = zv();
      for (; n2.pos < r2; ) {
        let e3 = n2.uint32();
        switch (e3 >>> 3) {
          case 1:
            if (e3 !== 10) break;
            i2.uuid = n2.string();
            continue;
          case 2:
            if (e3 !== 16) break;
            i2.semanticLabel_META = n2.int32();
            continue;
          case 3:
            if (e3 !== 26) break;
            i2.locatable_META = Sv.decode(n2, n2.uint32());
            continue;
          case 4:
            if (e3 !== 34) break;
            i2.boundary2D_META = Pv.decode(n2, n2.uint32());
            continue;
          case 5:
            if (e3 !== 42) break;
            i2.bounded2D_META = vv.decode(n2, n2.uint32());
            continue;
          case 6:
            if (e3 !== 50) break;
            i2.bounded3D_META = bv.decode(n2, n2.uint32());
            continue;
          case 7:
            if (e3 !== 58) break;
            i2.roomLayout_META = Av.decode(n2, n2.uint32());
            continue;
          case 8:
            if (e3 !== 66) break;
            i2.spaceContainer_META = Mv.decode(n2, n2.uint32());
            continue;
          case 9:
            if (e3 !== 74) break;
            i2.triangleMesh_META = Iv.decode(n2, n2.uint32());
            continue;
          case 10:
            if (e3 !== 82) break;
            i2.dynamicObject_META = Rv.decode(n2, n2.uint32());
            continue;
        }
        if ((e3 & 7) == 4 || e3 === 0) break;
        n2.skip(e3 & 7);
      }
      return i2;
    },
    fromJSON(e2) {
      return {
        uuid: Uv(e2.uuid) ? globalThis.String(e2.uuid) : ``,
        semanticLabel_META: Uv(e2.semanticLabel_META) ? Dv(e2.semanticLabel_META) : void 0,
        locatable_META: Uv(e2.locatable_META) ? Sv.fromJSON(e2.locatable_META) : void 0,
        boundary2D_META: Uv(e2.boundary2D_META) ? Pv.fromJSON(e2.boundary2D_META) : void 0,
        bounded2D_META: Uv(e2.bounded2D_META) ? vv.fromJSON(e2.bounded2D_META) : void 0,
        bounded3D_META: Uv(e2.bounded3D_META) ? bv.fromJSON(e2.bounded3D_META) : void 0,
        roomLayout_META: Uv(e2.roomLayout_META) ? Av.fromJSON(e2.roomLayout_META) : void 0,
        spaceContainer_META: Uv(e2.spaceContainer_META) ? Mv.fromJSON(e2.spaceContainer_META) : void 0,
        triangleMesh_META: Uv(e2.triangleMesh_META) ? Iv.fromJSON(e2.triangleMesh_META) : void 0,
        dynamicObject_META: Uv(e2.dynamicObject_META) ? Rv.fromJSON(e2.dynamicObject_META) : void 0
      };
    },
    toJSON(e2) {
      let t2 = {};
      return e2.uuid !== `` && (t2.uuid = e2.uuid), e2.semanticLabel_META !== void 0 && (t2.semanticLabel_META = Ov(e2.semanticLabel_META)), e2.locatable_META !== void 0 && (t2.locatable_META = Sv.toJSON(e2.locatable_META)), e2.boundary2D_META !== void 0 && (t2.boundary2D_META = Pv.toJSON(e2.boundary2D_META)), e2.bounded2D_META !== void 0 && (t2.bounded2D_META = vv.toJSON(e2.bounded2D_META)), e2.bounded3D_META !== void 0 && (t2.bounded3D_META = bv.toJSON(e2.bounded3D_META)), e2.roomLayout_META !== void 0 && (t2.roomLayout_META = Av.toJSON(e2.roomLayout_META)), e2.spaceContainer_META !== void 0 && (t2.spaceContainer_META = Mv.toJSON(e2.spaceContainer_META)), e2.triangleMesh_META !== void 0 && (t2.triangleMesh_META = Iv.toJSON(e2.triangleMesh_META)), e2.dynamicObject_META !== void 0 && (t2.dynamicObject_META = Rv.toJSON(e2.dynamicObject_META)), t2;
    },
    create(e2) {
      return Bv.fromPartial(e2 ?? {});
    },
    fromPartial(e2) {
      let t2 = zv();
      return t2.uuid = e2.uuid ?? ``, t2.semanticLabel_META = e2.semanticLabel_META ?? void 0, t2.locatable_META = e2.locatable_META !== void 0 && e2.locatable_META !== null ? Sv.fromPartial(e2.locatable_META) : void 0, t2.boundary2D_META = e2.boundary2D_META !== void 0 && e2.boundary2D_META !== null ? Pv.fromPartial(e2.boundary2D_META) : void 0, t2.bounded2D_META = e2.bounded2D_META !== void 0 && e2.bounded2D_META !== null ? vv.fromPartial(e2.bounded2D_META) : void 0, t2.bounded3D_META = e2.bounded3D_META !== void 0 && e2.bounded3D_META !== null ? bv.fromPartial(e2.bounded3D_META) : void 0, t2.roomLayout_META = e2.roomLayout_META !== void 0 && e2.roomLayout_META !== null ? Av.fromPartial(e2.roomLayout_META) : void 0, t2.spaceContainer_META = e2.spaceContainer_META !== void 0 && e2.spaceContainer_META !== null ? Mv.fromPartial(e2.spaceContainer_META) : void 0, t2.triangleMesh_META = e2.triangleMesh_META !== void 0 && e2.triangleMesh_META !== null ? Iv.fromPartial(e2.triangleMesh_META) : void 0, t2.dynamicObject_META = e2.dynamicObject_META !== void 0 && e2.dynamicObject_META !== null ? Rv.fromPartial(e2.dynamicObject_META) : void 0, t2;
    }
  };
  function Vv(e2) {
    if (globalThis.Buffer) return Uint8Array.from(globalThis.Buffer.from(e2, `base64`));
    {
      let t2 = globalThis.atob(e2), n2 = new Uint8Array(t2.length);
      for (let e3 = 0; e3 < t2.length; ++e3) n2[e3] = t2.charCodeAt(e3);
      return n2;
    }
  }
  function Hv(e2) {
    if (globalThis.Buffer) return globalThis.Buffer.from(e2).toString(`base64`);
    {
      let t2 = [];
      return e2.forEach((e3) => {
        t2.push(globalThis.String.fromCharCode(e3));
      }), globalThis.btoa(t2.join(``));
    }
  }
  function Uv(e2) {
    return e2 != null;
  }
  var $;
  (function(e2) {
    e2.Locatable = `locatable`, e2.Bounded3D = `bounded3D`, e2.Bounded2D = `bounded2D`, e2.TriangleMesh = `triangleMesh`, e2.SemanticLabel = `semanticLabel`;
  })($ || ($ = {}));
  var Wv = class extends EventTarget {
    constructor(e2) {
      super(), this._spatialEntity = e2;
    }
  }, Gv = class extends Wv {
    constructor(e2, t2) {
      super(e2), this._offset = new se(), this._extent = new se(), this.type = $.Bounded2D;
      let { offset: n2, extent: r2 } = t2;
      this._offset.set(n2.x, n2.y), this._extent.set(r2.width, r2.height), this.buildGeometry();
    }
    buildGeometry() {
      var e2;
      let t2 = new he(this._extent.x, this._extent.y);
      t2.translate(this._offset.x + this._extent.x / 2, this._offset.y + this._extent.y / 2, 0), t2.rotateX(Math.PI / 2), (e2 = this._spatialEntity.geometry) == null || e2.dispose(), this._spatialEntity.geometry = t2;
    }
    get offset() {
      return this._offset;
    }
    get extent() {
      return this._extent;
    }
    get initData() {
      return {
        offset: this.offset,
        extent: this.extent
      };
    }
    get pbData() {
      return {
        offset: {
          x: this._offset.x,
          y: this._offset.y
        },
        extent: {
          width: this._extent.x,
          height: this._extent.y
        }
      };
    }
  }, Kv = class extends Wv {
    constructor(e2, t2) {
      super(e2), this._offset = new Pe(), this._extent = new Pe(), this.type = $.Bounded3D;
      let { offset: n2, extent: r2 } = t2;
      this._offset.set(n2.x, n2.y, n2.z), this._extent.set(r2.width, r2.height, r2.depth), this.buildGeometry();
    }
    buildGeometry() {
      var e2;
      let t2 = new ve(this._extent.x, this._extent.y, this._extent.z);
      t2.translate(this._offset.x + this._extent.x / 2, this._offset.y + this._extent.y / 2, this._offset.z + this._extent.z / 2), (e2 = this._spatialEntity.geometry) == null || e2.dispose(), this._spatialEntity.geometry = t2;
    }
    get offset() {
      return this._offset;
    }
    get extent() {
      return this._extent;
    }
    get initData() {
      return {
        offset: this.offset,
        extent: this.extent
      };
    }
    get pbData() {
      return {
        offset: {
          x: this._offset.x,
          y: this._offset.y,
          z: this._offset.z
        },
        extent: {
          width: this._extent.x,
          height: this._extent.y,
          depth: this._extent.z
        }
      };
    }
  }, qv = class extends Wv {
    constructor(e2, t2) {
      super(e2), this.type = $.Locatable, t2.position && this.position.copy(t2.position), t2.orientation && this.orientation.copy(t2.orientation);
    }
    get position() {
      return this._spatialEntity.position;
    }
    get rotation() {
      return this._spatialEntity.rotation;
    }
    get orientation() {
      return this._spatialEntity.quaternion;
    }
    get initData() {
      return {
        position: {
          x: this.position.x,
          y: this.position.y,
          z: this.position.z
        },
        orientation: {
          x: this.orientation.x,
          y: this.orientation.y,
          z: this.orientation.z,
          w: this.orientation.w
        }
      };
    }
    get pbData() {
      return {
        position: {
          x: this._spatialEntity.position.x,
          y: this._spatialEntity.position.y,
          z: this._spatialEntity.position.z
        },
        orientation: {
          x: this._spatialEntity.quaternion.x,
          y: this._spatialEntity.quaternion.y,
          z: this._spatialEntity.quaternion.z,
          w: this._spatialEntity.quaternion.w
        }
      };
    }
  };
  function Jv(e2) {
    return e2.toLowerCase().replace(/_/g, ` `).trim();
  }
  var Yv = class extends Wv {
    constructor(e2, t2) {
      super(e2), this._semanticLabel = t2, this.type = $.SemanticLabel, this._spatialEntity.name = Jv(Ov(t2));
    }
    get semanticLabel() {
      return this._semanticLabel;
    }
    set semanticLabel(e2) {
      this._semanticLabel = Object.values(Q).includes(e2) ? e2 : Q.UNRECOGNIZED, this._spatialEntity.name = Jv(Ov(this._semanticLabel));
    }
    get initData() {
      return this._semanticLabel;
    }
    get pbData() {
      return this._semanticLabel;
    }
  };
  function Xv(e2) {
    let t2 = new Float32Array(e2.length * 3), n2 = 0;
    for (let r2 of e2) t2[n2++] = r2.x, t2[n2++] = r2.y, t2[n2++] = r2.z;
    return t2;
  }
  var Zv = class extends Wv {
    constructor(e2, t2) {
      super(e2), this._polygonCount = 0, this._vertexCount = 0, this._dimensions = {
        x: 0,
        y: 0,
        z: 0
      }, this.type = $.TriangleMesh;
      let { vertices: n2, indices: r2 } = t2, i2 = new Float32Array(n2.buffer), a2 = new Uint32Array(r2.buffer), o2 = [];
      for (let e3 = 0; e3 < i2.length / 3; e3++) o2.push({
        x: i2[3 * e3],
        y: i2[3 * e3 + 1],
        z: i2[3 * e3 + 2]
      });
      this._vertices = o2, this._indices = [
        ...a2
      ], this.buildGeometry();
      let s2 = e2.material;
      s2.polygonOffset = true, s2.polygonOffsetFactor = 1, s2.polygonOffsetUnits = 5e-3, s2.color.setHex(13948116), e2.renderOrder = 999;
    }
    buildGeometry() {
      var e2;
      let t2 = new Te(), n2 = Xv(this._vertices);
      t2.setAttribute(`position`, new oe(n2, 3)), t2.setIndex(new oe(new Uint16Array(this._indices), 1)), (e2 = this._spatialEntity.geometry) == null || e2.dispose(), this._spatialEntity.geometry = t2, t2.computeVertexNormals(), this._vertexCount = t2.attributes.position.count, this._polygonCount = t2.index ? t2.index.count / 3 : this._vertexCount / 3, t2.computeBoundingBox();
      let r2 = t2.boundingBox;
      this._dimensions = {
        x: r2.max.x - r2.min.x,
        y: r2.max.y - r2.min.y,
        z: r2.max.z - r2.min.z
      };
    }
    get vertexCount() {
      return this._vertexCount;
    }
    get polygonCount() {
      return this._polygonCount;
    }
    get dimensions() {
      return this._dimensions;
    }
    get initData() {
      return {
        vertices: this._vertices,
        indices: this._indices
      };
    }
    get pbData() {
      let e2 = Xv(this._vertices), t2 = new Uint32Array(this._indices);
      return {
        vertices: new Uint8Array(e2.buffer),
        indices: new Uint8Array(t2.buffer)
      };
    }
  }, Qv;
  (function(e2) {
    e2.Plane = `plane`, e2.Box = `box`, e2.Mesh = `mesh`;
  })(Qv || (Qv = {}));
  var $v = {
    [Q.OTHER]: q.Other,
    [Q.TABLE]: q.Table,
    [Q.COUCH]: q.Couch,
    [Q.FLOOR]: q.Floor,
    [Q.CEILING]: q.Ceiling,
    [Q.WALL_FACE]: q.Wall,
    [Q.INVISIBLE_WALL_FACE]: q.Window,
    [Q.INNER_WALL_FACE]: q.Wall,
    [Q.DOOR_FRAME]: q.Door,
    [Q.WINDOW_FRAME]: q.Window,
    [Q.WALL_ART]: q.WallArt,
    [Q.STORAGE]: q.Shelf,
    [Q.BED]: q.Bed,
    [Q.LAMP]: q.Lamp,
    [Q.SCREEN]: q.Screen,
    [Q.PLANT]: q.Plant,
    [Q.GLOBAL_MESH]: q.GlobalMesh,
    [Q.CHAIR]: q.Couch,
    [Q.UNKNOWN]: q.Other,
    [Q.OTHER_ROOM_FACE]: q.Other,
    [Q.OPENING]: q.Other,
    [Q.UNRECOGNIZED]: q.Other
  }, ey = class e2 extends fe {
    constructor(e3 = De()) {
      super(void 0, new Ee({
        color: 16777215 * Math.random(),
        flatShading: true
      })), this.name = `generic spatial entity`, this.isSpatialEntity = true, this._componentMap = /* @__PURE__ */ new Map(), this._spatialUUID = e3;
    }
    get spatialUUID() {
      return this._spatialUUID;
    }
    updateMatrixWorld(e3) {
      super.updateMatrixWorld(e3);
    }
    addComponent(e3, t2) {
      let n2 = null;
      switch (e3) {
        case $.Locatable:
          n2 = new qv(this, t2);
          break;
        case $.Bounded3D:
          n2 = new Kv(this, t2);
          break;
        case $.Bounded2D:
          n2 = new Gv(this, t2);
          break;
        case $.TriangleMesh:
          n2 = new Zv(this, t2);
          break;
        case $.SemanticLabel:
          n2 = new Yv(this, t2);
      }
      n2 && this._componentMap.set(e3, n2);
    }
    getComponent(e3) {
      return this._componentMap.get(e3);
    }
    duplicate() {
      let t2 = new e2();
      return this._componentMap.forEach((e3, n2, r2) => {
        t2.addComponent(e3.type, e3.initData);
      }), t2;
    }
    get nativeEntity() {
      if (!this._nativeEntity) {
        let e3 = new Eh({
          x: this.position.x,
          y: this.position.y,
          z: this.position.z,
          w: 1
        }, {
          x: this.quaternion.x,
          y: this.quaternion.y,
          z: this.quaternion.z,
          w: this.quaternion.w
        }), t2 = $v[this.getComponent($.SemanticLabel).semanticLabel];
        if (this.entityType === Qv.Plane) {
          let { offset: n2, extent: r2 } = this.getComponent($.Bounded2D), i2 = [
            new DOMPointReadOnly(n2.x, 0, n2.y),
            new DOMPointReadOnly(n2.x + r2.x, 0, n2.y),
            new DOMPointReadOnly(n2.x + r2.x, 0, n2.y + r2.y),
            new DOMPointReadOnly(n2.x, 0, n2.y + r2.y),
            new DOMPointReadOnly(n2.x, 0, n2.y)
          ];
          this._nativeEntity = new bh(e3, i2, t2);
        } else if (this.entityType === Qv.Box || this.entityType === Qv.Mesh) {
          let n2 = this.geometry.getAttribute(`position`).array, r2 = new Uint32Array(this.geometry.index.array);
          this._nativeEntity = new hh(e3, n2, r2, t2);
        }
      }
      return this._nativeEntity;
    }
    static fromPBJSON(t2) {
      let n2 = Bv.fromJSON(t2);
      if (n2.locatable_META) {
        let t3 = new e2(n2.uuid);
        return t3.addComponent($.Locatable, n2.locatable_META), n2.semanticLabel_META && t3.addComponent($.SemanticLabel, n2.semanticLabel_META), n2.bounded2D_META ? t3.addComponent($.Bounded2D, n2.bounded2D_META) : n2.bounded3D_META ? t3.addComponent($.Bounded3D, n2.bounded3D_META) : n2.triangleMesh_META && t3.addComponent($.TriangleMesh, n2.triangleMesh_META), t3;
      }
    }
    get entityType() {
      if (this.getComponent($.Bounded2D)) return Qv.Plane;
      if (this.getComponent($.Bounded3D)) return Qv.Box;
      if (this.getComponent($.TriangleMesh)) return Qv.Mesh;
    }
    static toPBJSON(e3) {
      var _a2, _b, _c2, _d2, _e2;
      return {
        uuid: e3.spatialUUID,
        locatable_META: (_a2 = e3.getComponent($.Locatable)) == null ? void 0 : _a2.pbData,
        boundary2D_META: void 0,
        bounded2D_META: (_b = e3.getComponent($.Bounded2D)) == null ? void 0 : _b.pbData,
        bounded3D_META: (_c2 = e3.getComponent($.Bounded3D)) == null ? void 0 : _c2.pbData,
        semanticLabel_META: (_d2 = e3.getComponent($.SemanticLabel)) == null ? void 0 : _d2.pbData,
        roomLayout_META: void 0,
        spaceContainer_META: void 0,
        triangleMesh_META: (_e2 = e3.getComponent($.TriangleMesh)) == null ? void 0 : _e2.pbData,
        dynamicObject_META: void 0
      };
    }
  }, ty = {
    living_room: () => Ie(() => import("./living_room-BnsZND9o.js").then(async (m2) => {
      await m2.__tla;
      return m2;
    }), []),
    meeting_room: () => Ie(() => import("./meeting_room-C9JCGYA6.js").then(async (m2) => {
      await m2.__tla;
      return m2;
    }), []),
    music_room: () => Ie(() => import("./music_room-DXDuiouU.js").then(async (m2) => {
      await m2.__tla;
      return m2;
    }), []),
    office_large: () => Ie(() => import("./office_large-BnjKbEmY.js").then(async (m2) => {
      await m2.__tla;
      return m2;
    }), []),
    office_small: () => Ie(() => import("./office_small-BhdJR0DT.js").then(async (m2) => {
      await m2.__tla;
      return m2;
    }), [])
  }, ny = `0.2.4`, ry = new Pe(0, 0, -1), iy = class extends EventTarget {
    constructor(e2) {
      super(), this.xrDevice = e2, this.trackedPlanes = /* @__PURE__ */ new Set(), this.trackedMeshes = /* @__PURE__ */ new Set(), this.version = ny, this.objectMap = /* @__PURE__ */ new Map(), this.planes = new Se(), this.boxes = new Se(), this.meshes = new Se(), this.tempPosition = new Pe(), this.tempQuaternion = new ie(), this.tempDirection = new Pe(), this.tempScale = new Pe(), this.tempMatrix = new le(), this.raycaster = new je(), this.hitTestTarget = new Se(), this.hitTestMarker = new we(), this.worldNormal = new Pe(), this.normalMatrix = new Ae(), this.scene = new Fe(), this.scene.background = new Oe(4079166), this.camera = new _e(50, window.innerWidth / window.innerHeight, 0.1, 40), this.camera.position.set(0, 1.6, 5);
      let t2 = new ce(50, 50);
      this.scene.add(t2), this.scene.add(this.planes, this.boxes, this.meshes), this.planes.renderOrder = 1, this.boxes.renderOrder = 2, this.meshes.renderOrder = 3, this.planes.visible = false, this.boxes.visible = false, this.renderer = new b({
        antialias: true,
        alpha: true
      }), this.renderer.setPixelRatio(window.devicePixelRatio), this.renderer.setSize(window.innerWidth, window.innerHeight), this.renderer.domElement.style.position = `fixed`, this.renderer.domElement.style.top = `50vh`, this.renderer.domElement.style.left = `50vw`, this.renderer.domElement.style.transform = `translate(-50%, -50%)`, this.hitTestTarget.add(this.hitTestMarker), this.hitTestMarker.rotateX(Math.PI / 2);
    }
    get environmentCanvas() {
      return this.renderer.domElement;
    }
    get planesVisible() {
      return this.planes.visible;
    }
    set planesVisible(e2) {
      this.planes.visible = e2;
    }
    get boundingBoxesVisible() {
      return this.boxes.visible;
    }
    set boundingBoxesVisible(e2) {
      this.boxes.visible = e2;
    }
    get meshesVisible() {
      return this.meshes.visible;
    }
    set meshesVisible(e2) {
      this.meshes.visible = e2;
    }
    render() {
      this.camera.position.copy(this.xrDevice.position), this.camera.quaternion.copy(this.xrDevice.quaternion);
      let e2 = this.xrDevice.fovy / Math.PI * 180, t2 = false;
      this.camera.fov !== e2 && (this.camera.fov = e2, t2 = true);
      let n2 = this.xrDevice.canvasDimensions;
      if (n2) {
        let e3 = this.renderer.domElement;
        (e3.width !== n2.width || e3.height !== n2.height) && (this.camera.aspect = n2.width / n2.height, this.renderer.setSize(n2.width, n2.height), t2 = true);
      }
      t2 && this.camera.updateProjectionMatrix(), this.renderer.render(this.scene, this.camera);
    }
    deleteAll() {
      [
        ...this.objectMap.values()
      ].forEach((e2) => {
        e2.removeFromParent();
      }), this.objectMap.clear(), this.trackedMeshes.clear(), this.trackedPlanes.clear();
    }
    loadEnvironment(e2) {
      this.deleteAll(), e2.spatialEntities.forEach((e3) => {
        let t2 = ey.fromPBJSON(e3);
        if (t2) {
          switch (t2.entityType) {
            case Qv.Box:
              this.boxes.add(t2), this.trackedMeshes.add(t2.nativeEntity);
              break;
            case Qv.Plane:
              this.planes.add(t2), this.trackedPlanes.add(t2.nativeEntity);
              break;
            case Qv.Mesh:
              this.meshes.add(t2), this.trackedMeshes.add(t2.nativeEntity);
          }
          let n2 = this.objectMap.get(e3.uuid);
          n2 && n2.removeFromParent(), this.objectMap.set(e3.uuid, t2);
        }
      });
    }
    loadDefaultEnvironment(e2) {
      if (typeof __IS_UMD__ < `u` && __IS_UMD__) {
        let t2 = `https://www.unpkg.com/@iwer/sem@${ny}/captures/${e2}.json`;
        fetch(t2).then((e3) => {
          if (!e3.ok) throw Error(`Network response was not ok: ${e3.statusText}`);
          return e3.json();
        }).then((e3) => {
          this.loadEnvironment(e3);
        }).catch((t3) => {
          console.error(`Error loading environment ${e2} from CDN`, t3);
        });
      } else {
        let t2 = ty[e2];
        if (!t2) {
          console.error(`Requested environment ${e2} does not exist`);
          return;
        }
        t2().then((e3) => {
          let t3 = e3.default;
          this.loadEnvironment(t3);
        }).catch((t3) => {
          console.error(`Error loading environment ${e2} locally`, t3);
        });
      }
    }
    computeHitTestResults(e2) {
      return this.tempMatrix.fromArray(e2), this.tempMatrix.decompose(this.tempPosition, this.tempQuaternion, this.tempScale), this.tempDirection.copy(ry).applyQuaternion(this.tempQuaternion).normalize(), this.raycaster.set(this.tempPosition, this.tempDirection), this.raycaster.intersectObject(this.meshes, true).map((e3) => {
        var _a2;
        let t2 = e3.point;
        if (this.hitTestTarget.position.copy(t2), (_a2 = e3.face) == null ? void 0 : _a2.normal) {
          this.worldNormal.copy(e3.face.normal);
          let n2 = e3.object;
          this.worldNormal.applyMatrix3(this.normalMatrix.getNormalMatrix(n2.matrixWorld)).normalize(), this.hitTestTarget.lookAt(this.tempPosition.addVectors(t2, this.worldNormal));
        } else this.hitTestTarget.quaternion.set(0, 0, 0, 1);
        return this.hitTestTarget.updateMatrixWorld(true), this.hitTestMarker.matrixWorld.toArray();
      });
    }
  }, ay = {
    metaQuest3: L_,
    metaQuest2: F_,
    metaQuestPro: I_,
    oculusQuest1: P_
  }, oy = [
    `office_small`,
    `meeting_room`,
    `living_room`,
    `music_room`,
    `office_large`
  ], sy = [
    `left`,
    `none`,
    `right`
  ];
  cy = function(e2) {
    var _a2, _b, _c2;
    let t2 = new D_(ay[typeof e2 == `string` ? e2 : e2.type ?? `metaQuest3`], typeof e2 == `string` ? void 0 : e2);
    typeof e2 != `string` && (fy(t2, e2.headset), dy(t2.hands, e2.hand), dy(t2.controllers, e2.controller), t2.primaryInputMode = e2.primaryInputMode ?? `controller`), t2.ipd = typeof e2 == `string` ? 0 : e2.ipd ?? 0, t2.installRuntime(), t2.installDevUI(vp);
    let n2 = typeof e2 == `string` || e2.syntheticEnvironment;
    return n2 === false || (t2.installSEM(iy), n2 === null) ? t2 : typeof n2 == `string` && oy.includes(n2) ? ((_a2 = t2.sem) == null ? void 0 : _a2.loadDefaultEnvironment(n2), t2) : n2 === true || n2 === void 0 ? ((_b = t2.sem) == null ? void 0 : _b.loadDefaultEnvironment(oy[0]), t2) : typeof n2 == `object` ? ((_c2 = t2.sem) == null ? void 0 : _c2.loadEnvironment(n2), t2) : (fetch(n2).then((e3) => e3.json()).then((e3) => {
      var _a3;
      return (_a3 = t2.sem) == null ? void 0 : _a3.loadEnvironment(e3);
    }).catch(console.error), t2);
  };
  var ly = new T(), uy = new w();
  function dy(e2, t2) {
    if (t2 != null) for (let n2 of sy) fy(e2[n2], t2[n2]);
  }
  function fy(e2, t2) {
    e2 != null && t2 != null && (py(e2.position, t2.position), py(ly, t2.rotation), my(e2.quaternion, uy.setFromEuler(ly)), my(e2.quaternion, t2.quaternion));
  }
  function py(e2, t2) {
    t2 != null && (t2 instanceof T && e2 instanceof T && e2.copy(t2), Array.isArray(t2) ? (e2.x = t2[0], e2.y = t2[1], e2.z = t2[2]) : (e2.x = t2.x, e2.y = t2.y, e2.z = t2.z));
  }
  function my(e2, t2) {
    t2 != null && (Array.isArray(t2) ? (e2.x = t2[0], e2.y = t2[1], e2.z = t2[2], e2.w = t2[3]) : (e2.x = t2.x, e2.y = t2.y, e2.z = t2.z, e2.w = t2.w));
  }
})();
export {
  __tla,
  cy as emulate
};
