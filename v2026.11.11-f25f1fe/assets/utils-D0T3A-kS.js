function e(t2) {
  var n2, r2, i2 = ``;
  if (typeof t2 == `string` || typeof t2 == `number`) i2 += t2;
  else if (typeof t2 == `object`) {
    if (Array.isArray(t2)) {
      var a2 = t2.length;
      for (n2 = 0; n2 < a2; n2++) t2[n2] && (r2 = e(t2[n2])) && (i2 && (i2 += ` `), i2 += r2);
    } else for (r2 in t2) t2[r2] && (i2 && (i2 += ` `), i2 += r2);
  }
  return i2;
}
function t() {
  for (var t2, n2, r2 = 0, i2 = ``, a2 = arguments.length; r2 < a2; r2++) (t2 = arguments[r2]) && (n2 = e(t2)) && (i2 && (i2 += ` `), i2 += n2);
  return i2;
}
var n = (e2, t2) => {
  let n2 = Array(e2.length + t2.length);
  for (let t3 = 0; t3 < e2.length; t3++) n2[t3] = e2[t3];
  for (let r2 = 0; r2 < t2.length; r2++) n2[e2.length + r2] = t2[r2];
  return n2;
}, r = (e2, t2) => ({ classGroupId: e2, validator: t2 }), i = (e2 = /* @__PURE__ */ new Map(), t2 = null, n2) => ({ nextPart: e2, validators: t2, classGroupId: n2 }), a = `-`, o = [], s = `arbitrary..`, c = (e2) => {
  let t2 = d(e2), { conflictingClassGroups: r2, conflictingClassGroupModifiers: i2 } = e2;
  return { getClassGroupId: (e3) => {
    if (e3.startsWith(`[`) && e3.endsWith(`]`)) return u(e3);
    let n2 = e3.split(a);
    return l(n2, +(n2[0] === `` && n2.length > 1), t2);
  }, getConflictingClassGroupIds: (e3, t3) => {
    if (t3) {
      let t4 = i2[e3], a2 = r2[e3];
      return t4 ? a2 ? n(a2, t4) : t4 : a2 || o;
    }
    return r2[e3] || o;
  } };
}, l = (e2, t2, n2) => {
  if (e2.length - t2 === 0) return n2.classGroupId;
  let r2 = e2[t2], i2 = n2.nextPart.get(r2);
  if (i2) {
    let n3 = l(e2, t2 + 1, i2);
    if (n3) return n3;
  }
  let o2 = n2.validators;
  if (o2 === null) return;
  let s2 = t2 === 0 ? e2.join(a) : e2.slice(t2).join(a), c2 = o2.length;
  for (let e3 = 0; e3 < c2; e3++) {
    let t3 = o2[e3];
    if (t3.validator(s2)) return t3.classGroupId;
  }
}, u = (e2) => e2.slice(1, -1).indexOf(`:`) === -1 ? void 0 : (() => {
  let t2 = e2.slice(1, -1), n2 = t2.indexOf(`:`), r2 = t2.slice(0, n2);
  return r2 ? s + r2 : void 0;
})(), d = (e2) => {
  let { theme: t2, classGroups: n2 } = e2;
  return ee(n2, t2);
}, ee = (e2, t2) => {
  let n2 = i();
  for (let r2 in e2) {
    let i2 = e2[r2];
    f(i2, n2, r2, t2);
  }
  return n2;
}, f = (e2, t2, n2, r2) => {
  let i2 = e2.length;
  for (let a2 = 0; a2 < i2; a2++) {
    let i3 = e2[a2];
    p(i3, t2, n2, r2);
  }
}, p = (e2, t2, n2, r2) => {
  typeof e2 == `string` ? m(e2, t2, n2) : typeof e2 == `function` ? h(e2, t2, n2, r2) : g(e2, t2, n2, r2);
}, m = (e2, t2, n2) => {
  let r2 = e2 === `` ? t2 : _(t2, e2);
  r2.classGroupId = n2;
}, h = (e2, t2, n2, i2) => {
  v(e2) ? f(e2(i2), t2, n2, i2) : (t2.validators === null && (t2.validators = []), t2.validators.push(r(n2, e2)));
}, g = (e2, t2, n2, r2) => {
  let i2 = Object.entries(e2), a2 = i2.length;
  for (let e3 = 0; e3 < a2; e3++) {
    let [a3, o2] = i2[e3];
    f(o2, _(t2, a3), n2, r2);
  }
}, _ = (e2, t2) => {
  let n2 = e2, r2 = t2.split(a), o2 = r2.length;
  for (let e3 = 0; e3 < o2; e3++) {
    let t3 = r2[e3], a2 = n2.nextPart.get(t3);
    a2 || (a2 = i(), n2.nextPart.set(t3, a2)), n2 = a2;
  }
  return n2;
}, v = (e2) => `isThemeGetter` in e2 && e2.isThemeGetter === true, y = (e2) => {
  if (e2 < 1) return { get: () => void 0, set: () => {
  } };
  let t2 = 0, n2 = /* @__PURE__ */ Object.create(null), r2 = /* @__PURE__ */ Object.create(null), i2 = (i3, a2) => {
    n2[i3] = a2, t2++, t2 > e2 && (t2 = 0, r2 = n2, n2 = /* @__PURE__ */ Object.create(null));
  };
  return { get(e3) {
    let t3 = n2[e3];
    if (t3 !== void 0) return t3;
    if ((t3 = r2[e3]) !== void 0) return i2(e3, t3), t3;
  }, set(e3, t3) {
    e3 in n2 ? n2[e3] = t3 : i2(e3, t3);
  } };
}, b = `!`, x = `:`, S = [], C = (e2, t2, n2, r2, i2) => ({ modifiers: e2, hasImportantModifier: t2, baseClassName: n2, maybePostfixModifierPosition: r2, isExternal: i2 }), w = (e2) => {
  let { prefix: t2, experimentalParseClassName: n2 } = e2, r2 = (e3) => {
    let t3 = [], n3 = 0, r3 = 0, i2 = 0, a2, o2 = e3.length;
    for (let s3 = 0; s3 < o2; s3++) {
      let o3 = e3[s3];
      if (n3 === 0 && r3 === 0) {
        if (o3 === x) {
          t3.push(e3.slice(i2, s3)), i2 = s3 + 1;
          continue;
        }
        if (o3 === `/`) {
          a2 = s3;
          continue;
        }
      }
      o3 === `[` ? n3++ : o3 === `]` ? n3-- : o3 === `(` ? r3++ : o3 === `)` && r3--;
    }
    let s2 = t3.length === 0 ? e3 : e3.slice(i2), c2 = s2, l2 = false;
    s2.endsWith(b) ? (c2 = s2.slice(0, -1), l2 = true) : s2.startsWith(b) && (c2 = s2.slice(1), l2 = true);
    let u2 = a2 && a2 > i2 ? a2 - i2 : void 0;
    return C(t3, l2, c2, u2);
  };
  if (t2) {
    let e3 = t2 + x, n3 = r2;
    r2 = (t3) => t3.startsWith(e3) ? n3(t3.slice(e3.length)) : C(S, false, t3, void 0, true);
  }
  if (n2) {
    let e3 = r2;
    r2 = (t3) => n2({ className: t3, parseClassName: e3 });
  }
  return r2;
}, te = (e2) => {
  let t2 = /* @__PURE__ */ new Map();
  return e2.orderSensitiveModifiers.forEach((e3, n2) => {
    t2.set(e3, 1e6 + n2);
  }), (e3) => {
    let n2 = [], r2 = [];
    for (let i2 = 0; i2 < e3.length; i2++) {
      let a2 = e3[i2], o2 = a2[0] === `[`, s2 = t2.has(a2);
      o2 || s2 ? (r2.length > 0 && (r2.sort(), n2.push(...r2), r2 = []), n2.push(a2)) : r2.push(a2);
    }
    return r2.length > 0 && (r2.sort(), n2.push(...r2)), n2;
  };
}, ne = (e2) => ({ cache: y(e2.cacheSize), parseClassName: w(e2), sortModifiers: te(e2), postfixLookupClassGroupIds: T(e2), ...c(e2) }), T = (e2) => {
  let t2 = /* @__PURE__ */ Object.create(null), n2 = e2.postfixLookupClassGroups;
  if (n2) for (let e3 = 0; e3 < n2.length; e3++) t2[n2[e3]] = true;
  return t2;
}, re = /\s+/, E = (e2, t2) => {
  let { parseClassName: n2, getClassGroupId: r2, getConflictingClassGroupIds: i2, sortModifiers: a2, postfixLookupClassGroupIds: o2 } = t2, s2 = [], c2 = e2.trim().split(re), l2 = ``;
  for (let e3 = c2.length - 1; e3 >= 0; --e3) {
    let t3 = c2[e3], { isExternal: u2, modifiers: d2, hasImportantModifier: ee2, baseClassName: f2, maybePostfixModifierPosition: p2 } = n2(t3);
    if (u2) {
      l2 = t3 + (l2.length > 0 ? ` ` + l2 : l2);
      continue;
    }
    let m2 = !!p2, h2;
    if (m2) {
      h2 = r2(f2.substring(0, p2));
      let e4 = h2 && o2[h2] ? r2(f2) : void 0;
      e4 && e4 !== h2 && (h2 = e4, m2 = false);
    } else h2 = r2(f2);
    if (!h2) {
      if (!m2 || (h2 = r2(f2), !h2)) {
        l2 = t3 + (l2.length > 0 ? ` ` + l2 : l2);
        continue;
      }
      m2 = false;
    }
    let g2 = d2.length === 0 ? `` : d2.length === 1 ? d2[0] : a2(d2).join(`:`), _2 = ee2 ? g2 + b : g2, v2 = _2 + h2;
    if (s2.indexOf(v2) > -1) continue;
    s2.push(v2);
    let y2 = i2(h2, m2);
    for (let e4 = 0; e4 < y2.length; ++e4) {
      let t4 = y2[e4];
      s2.push(_2 + t4);
    }
    l2 = t3 + (l2.length > 0 ? ` ` + l2 : l2);
  }
  return l2;
}, D = (...e2) => {
  let t2 = 0, n2, r2, i2 = ``;
  for (; t2 < e2.length; ) (n2 = e2[t2++]) && (r2 = O(n2)) && (i2 && (i2 += ` `), i2 += r2);
  return i2;
}, O = (e2) => {
  if (typeof e2 == `string`) return e2;
  let t2, n2 = ``;
  for (let r2 = 0; r2 < e2.length; r2++) e2[r2] && (t2 = O(e2[r2])) && (n2 && (n2 += ` `), n2 += t2);
  return n2;
}, k = (e2, ...t2) => {
  let n2, r2, i2, a2, o2 = (o3) => (n2 = ne(t2.reduce((e3, t3) => t3(e3), e2())), r2 = n2.cache.get, i2 = n2.cache.set, a2 = s2, s2(o3)), s2 = (e3) => {
    let t3 = r2(e3);
    if (t3) return t3;
    let a3 = E(e3, n2);
    return i2(e3, a3), a3;
  };
  return a2 = o2, (...e3) => a2(D(...e3));
}, A = [], j = (e2) => {
  let t2 = (t3) => t3[e2] || A;
  return t2.isThemeGetter = true, t2.themeKey = e2, t2;
}, M = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, N = /^\((?:(\w[\w-]*):)?(.+)\)$/i, ie = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, ae = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, oe = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, P = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix|color|light-dark)\(.+\)$/, F = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, I = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, L = (e2) => ie.test(e2), R = (e2) => !!e2 && !Number.isNaN(Number(e2)), z = (e2) => !!e2 && Number.isInteger(Number(e2)), se = (e2) => e2.endsWith(`%`) && R(e2.slice(0, -1)), B = (e2) => ae.test(e2), ce = () => true, V = (e2) => oe.test(e2) && !P.test(e2), H = () => false, U = (e2) => F.test(e2), le = (e2) => I.test(e2), ue = (e2) => !W(e2) && !q(e2), de = (e2) => e2.startsWith(`@container`) && (e2[10] === `/` && e2[11] !== void 0 || e2[11] === `s` && e2[16] !== void 0 && e2.startsWith(`-size/`, 10) || e2[11] === `n` && e2[18] !== void 0 && e2.startsWith(`-normal/`, 10)), fe = (e2) => X(e2, Ce, H), W = (e2) => M.test(e2), G = (e2) => X(e2, we, V), pe = (e2) => X(e2, Te, R), me = (e2) => X(e2, De, ce), he = (e2) => X(e2, Ee, H), ge = (e2) => X(e2, Q, H), _e = (e2) => X(e2, $, le), K = (e2) => X(e2, Oe, U), q = (e2) => N.test(e2), J = (e2) => Z(e2, we), ve = (e2) => Z(e2, Ee), ye = (e2) => Z(e2, Q), be = (e2) => Z(e2, Ce), xe = (e2) => Z(e2, $), Y = (e2) => Z(e2, Oe, true), Se = (e2) => Z(e2, De, true), X = (e2, t2, n2) => {
  let r2 = M.exec(e2);
  return r2 ? r2[1] ? t2(r2[1]) : n2(r2[2]) : false;
}, Z = (e2, t2, n2 = false) => {
  let r2 = N.exec(e2);
  return r2 ? r2[1] ? t2(r2[1]) : n2 : false;
}, Q = (e2) => e2 === `position` || e2 === `percentage`, $ = (e2) => e2 === `image` || e2 === `url`, Ce = (e2) => e2 === `length` || e2 === `size` || e2 === `bg-size`, we = (e2) => e2 === `length`, Te = (e2) => e2 === `number`, Ee = (e2) => e2 === `family-name`, De = (e2) => e2 === `number` || e2 === `weight`, Oe = (e2) => e2 === `shadow`, ke = k(() => {
  let e2 = j(`color`), t2 = j(`font`), n2 = j(`text`), r2 = j(`font-weight`), i2 = j(`tracking`), a2 = j(`leading`), o2 = j(`breakpoint`), s2 = j(`container`), c2 = j(`spacing`), l2 = j(`radius`), u2 = j(`shadow`), d2 = j(`inset-shadow`), ee2 = j(`text-shadow`), f2 = j(`drop-shadow`), p2 = j(`blur`), m2 = j(`perspective`), h2 = j(`aspect`), g2 = j(`ease`), _2 = j(`animate`), v2 = () => [`auto`, `avoid`, `all`, `avoid-page`, `page`, `left`, `right`, `column`], y2 = () => [`center`, `top`, `bottom`, `left`, `right`, `top-left`, `left-top`, `top-right`, `right-top`, `bottom-right`, `right-bottom`, `bottom-left`, `left-bottom`], b2 = () => [...y2(), q, W], x2 = () => [`auto`, `hidden`, `clip`, `visible`, `scroll`], S2 = () => [`auto`, `contain`, `none`], C2 = () => [q, W, c2], w2 = () => [L, `full`, `auto`, ...C2()], te2 = () => [z, `none`, `subgrid`, q, W], ne2 = () => [`auto`, { span: [`full`, z, q, W] }, z, q, W], T2 = () => [z, `auto`, q, W], re2 = () => [`auto`, `min`, `max`, `fr`, q, W], E2 = () => [`start`, `end`, `center`, `between`, `around`, `evenly`, `stretch`, `baseline`, `center-safe`, `end-safe`], D2 = () => [`start`, `end`, `center`, `stretch`, `center-safe`, `end-safe`], O2 = () => [`auto`, ...C2()], k2 = () => [L, `auto`, `full`, `dvw`, `dvh`, `lvw`, `lvh`, `svw`, `svh`, `min`, `max`, `fit`, ...C2()], A2 = () => [s2, L, `screen`, `full`, `dvw`, `lvw`, `svw`, `min`, `max`, `fit`, ...C2()], M2 = () => [L, `screen`, `full`, `lh`, `dvh`, `lvh`, `svh`, `min`, `max`, `fit`, ...C2()], N2 = () => [e2, q, W], ie2 = () => [...y2(), ye, ge, { position: [q, W] }], ae2 = () => [`no-repeat`, { repeat: [``, `x`, `y`, `space`, `round`] }], oe2 = () => [`auto`, `cover`, `contain`, be, fe, { size: [q, W] }], P2 = () => [se, J, G], F2 = () => [``, `none`, `full`, l2, q, W], I2 = () => [``, R, J, G], V2 = () => [`solid`, `dashed`, `dotted`, `double`], H2 = () => [`normal`, `multiply`, `screen`, `overlay`, `darken`, `lighten`, `color-dodge`, `color-burn`, `hard-light`, `soft-light`, `difference`, `exclusion`, `hue`, `saturation`, `color`, `luminosity`], U2 = () => [R, se, ye, ge], le2 = () => [``, `none`, p2, q, W], X2 = () => [`none`, R, q, W], Z2 = () => [`none`, R, q, W], Q2 = () => [R, q, W], $2 = () => [L, `full`, ...C2()];
  return { cacheSize: 500, theme: { animate: [`spin`, `ping`, `pulse`, `bounce`], aspect: [`video`], blur: [B], breakpoint: [B], color: [ce], container: [B], "drop-shadow": [B], ease: [`in`, `out`, `in-out`], font: [ue], "font-weight": [`thin`, `extralight`, `light`, `normal`, `medium`, `semibold`, `bold`, `extrabold`, `black`], "inset-shadow": [B], leading: [`none`, `tight`, `snug`, `normal`, `relaxed`, `loose`], perspective: [`dramatic`, `near`, `normal`, `midrange`, `distant`, `none`], radius: [B], shadow: [B], spacing: [`px`, R], text: [B], "text-shadow": [B], tracking: [`tighter`, `tight`, `normal`, `wide`, `wider`, `widest`] }, classGroups: { aspect: [{ aspect: [`auto`, `square`, L, W, q, h2] }], container: [`container`], "container-type": [{ "@container": [``, `normal`, `size`, q, W] }], "container-named": [de], columns: [{ columns: [R, `auto`, W, q, s2] }], "break-after": [{ "break-after": v2() }], "break-before": [{ "break-before": v2() }], "break-inside": [{ "break-inside": [`auto`, `avoid`, `avoid-page`, `avoid-column`] }], "box-decoration": [{ "box-decoration": [`slice`, `clone`] }], box: [{ box: [`border`, `content`] }], display: [`block`, `inline-block`, `inline`, `flex`, `inline-flex`, `table`, `inline-table`, `table-caption`, `table-cell`, `table-column`, `table-column-group`, `table-footer-group`, `table-header-group`, `table-row-group`, `table-row`, `flow-root`, `grid`, `inline-grid`, `contents`, `list-item`, `hidden`], sr: [`sr-only`, `not-sr-only`], float: [{ float: [`right`, `left`, `none`, `start`, `end`] }], clear: [{ clear: [`left`, `right`, `both`, `none`, `start`, `end`] }], isolation: [`isolate`, `isolation-auto`], "object-fit": [{ object: [`contain`, `cover`, `fill`, `none`, `scale-down`] }], "object-position": [{ object: b2() }], overflow: [{ overflow: x2() }], "overflow-x": [{ "overflow-x": x2() }], "overflow-y": [{ "overflow-y": x2() }], overscroll: [{ overscroll: S2() }], "overscroll-x": [{ "overscroll-x": S2() }], "overscroll-y": [{ "overscroll-y": S2() }], position: [`static`, `fixed`, `absolute`, `relative`, `sticky`], inset: [{ inset: w2() }], "inset-x": [{ "inset-x": w2() }], "inset-y": [{ "inset-y": w2() }], start: [{ "inset-s": w2(), start: w2() }], end: [{ "inset-e": w2(), end: w2() }], "inset-bs": [{ "inset-bs": w2() }], "inset-be": [{ "inset-be": w2() }], top: [{ top: w2() }], right: [{ right: w2() }], bottom: [{ bottom: w2() }], left: [{ left: w2() }], visibility: [`visible`, `invisible`, `collapse`], z: [{ z: [z, `auto`, q, W] }], basis: [{ basis: [L, `full`, `auto`, s2, ...C2()] }], "flex-direction": [{ flex: [`row`, `row-reverse`, `col`, `col-reverse`] }], "flex-wrap": [{ flex: [`nowrap`, `wrap`, `wrap-reverse`] }], flex: [{ flex: [R, L, `auto`, `initial`, `none`, W] }], grow: [{ grow: [``, R, q, W] }], shrink: [{ shrink: [``, R, q, W] }], order: [{ order: [z, `first`, `last`, `none`, q, W] }], "grid-cols": [{ "grid-cols": te2() }], "col-start-end": [{ col: ne2() }], "col-start": [{ "col-start": T2() }], "col-end": [{ "col-end": T2() }], "grid-rows": [{ "grid-rows": te2() }], "row-start-end": [{ row: ne2() }], "row-start": [{ "row-start": T2() }], "row-end": [{ "row-end": T2() }], "grid-flow": [{ "grid-flow": [`row`, `col`, `dense`, `row-dense`, `col-dense`] }], "auto-cols": [{ "auto-cols": re2() }], "auto-rows": [{ "auto-rows": re2() }], gap: [{ gap: C2() }], "gap-x": [{ "gap-x": C2() }], "gap-y": [{ "gap-y": C2() }], "justify-content": [{ justify: [...E2(), `normal`] }], "justify-items": [{ "justify-items": [...D2(), `normal`] }], "justify-self": [{ "justify-self": [`auto`, ...D2()] }], "align-content": [{ content: [`normal`, ...E2()] }], "align-items": [{ items: [...D2(), { baseline: [``, `last`] }] }], "align-self": [{ self: [`auto`, ...D2(), { baseline: [``, `last`] }] }], "place-content": [{ "place-content": E2() }], "place-items": [{ "place-items": [...D2(), `baseline`] }], "place-self": [{ "place-self": [`auto`, ...D2()] }], p: [{ p: C2() }], px: [{ px: C2() }], py: [{ py: C2() }], ps: [{ ps: C2() }], pe: [{ pe: C2() }], pbs: [{ pbs: C2() }], pbe: [{ pbe: C2() }], pt: [{ pt: C2() }], pr: [{ pr: C2() }], pb: [{ pb: C2() }], pl: [{ pl: C2() }], m: [{ m: O2() }], mx: [{ mx: O2() }], my: [{ my: O2() }], ms: [{ ms: O2() }], me: [{ me: O2() }], mbs: [{ mbs: O2() }], mbe: [{ mbe: O2() }], mt: [{ mt: O2() }], mr: [{ mr: O2() }], mb: [{ mb: O2() }], ml: [{ ml: O2() }], "space-x": [{ "space-x": C2() }], "space-x-reverse": [`space-x-reverse`], "space-y": [{ "space-y": C2() }], "space-y-reverse": [`space-y-reverse`], size: [{ size: k2() }], "inline-size": [{ inline: [`auto`, ...A2()] }], "min-inline-size": [{ "min-inline": [`auto`, ...A2()] }], "max-inline-size": [{ "max-inline": [`none`, ...A2()] }], "block-size": [{ block: [`auto`, ...M2()] }], "min-block-size": [{ "min-block": [`auto`, ...M2()] }], "max-block-size": [{ "max-block": [`none`, ...M2()] }], w: [{ w: [s2, `screen`, ...k2()] }], "min-w": [{ "min-w": [s2, `screen`, `none`, ...k2()] }], "max-w": [{ "max-w": [s2, `screen`, `none`, `prose`, { screen: [o2] }, ...k2()] }], h: [{ h: [`screen`, `lh`, ...k2()] }], "min-h": [{ "min-h": [`screen`, `lh`, `none`, ...k2()] }], "max-h": [{ "max-h": [`screen`, `lh`, `none`, ...k2()] }], "font-size": [{ text: [`base`, n2, J, G] }], "font-smoothing": [`antialiased`, `subpixel-antialiased`], "font-style": [`italic`, `not-italic`], "font-weight": [{ font: [r2, Se, me] }], "font-stretch": [{ "font-stretch": [`ultra-condensed`, `extra-condensed`, `condensed`, `semi-condensed`, `normal`, `semi-expanded`, `expanded`, `extra-expanded`, `ultra-expanded`, se, W] }], "font-family": [{ font: [ve, he, t2] }], "font-features": [{ "font-features": [W] }], "fvn-normal": [`normal-nums`], "fvn-ordinal": [`ordinal`], "fvn-slashed-zero": [`slashed-zero`], "fvn-figure": [`lining-nums`, `oldstyle-nums`], "fvn-spacing": [`proportional-nums`, `tabular-nums`], "fvn-fraction": [`diagonal-fractions`, `stacked-fractions`], tracking: [{ tracking: [i2, q, W] }], "line-clamp": [{ "line-clamp": [R, `none`, q, pe] }], leading: [{ leading: [`none`, a2, ...C2()] }], "list-image": [{ "list-image": [`none`, q, W] }], "list-style-position": [{ list: [`inside`, `outside`] }], "list-style-type": [{ list: [`disc`, `decimal`, `none`, q, W] }], "text-alignment": [{ text: [`left`, `center`, `right`, `justify`, `start`, `end`] }], "placeholder-color": [{ placeholder: N2() }], "text-color": [{ text: N2() }], "text-decoration": [`underline`, `overline`, `line-through`, `no-underline`], "text-decoration-style": [{ decoration: [...V2(), `wavy`] }], "text-decoration-thickness": [{ decoration: [R, `from-font`, `auto`, q, G] }], "text-decoration-color": [{ decoration: N2() }], "underline-offset": [{ "underline-offset": [R, `auto`, q, W] }], "text-transform": [`uppercase`, `lowercase`, `capitalize`, `normal-case`], "text-overflow": [`truncate`, `text-ellipsis`, `text-clip`], "text-wrap": [{ text: [`wrap`, `nowrap`, `balance`, `pretty`] }], indent: [{ indent: C2() }], "tab-size": [{ tab: [z, q, W] }], "vertical-align": [{ align: [`baseline`, `top`, `middle`, `bottom`, `text-top`, `text-bottom`, `sub`, `super`, q, W] }], whitespace: [{ whitespace: [`normal`, `nowrap`, `pre`, `pre-line`, `pre-wrap`, `break-spaces`] }], break: [{ break: [`normal`, `words`, `all`, `keep`] }], wrap: [{ wrap: [`break-word`, `anywhere`, `normal`] }], hyphens: [{ hyphens: [`none`, `manual`, `auto`] }], content: [{ content: [`none`, q, W] }], "bg-attachment": [{ bg: [`fixed`, `local`, `scroll`] }], "bg-clip": [{ "bg-clip": [`border`, `padding`, `content`, `text`] }], "bg-origin": [{ "bg-origin": [`border`, `padding`, `content`] }], "bg-position": [{ bg: ie2() }], "bg-repeat": [{ bg: ae2() }], "bg-size": [{ bg: oe2() }], "bg-image": [{ bg: [`none`, { linear: [{ to: [`t`, `tr`, `r`, `br`, `b`, `bl`, `l`, `tl`] }, z, q, W], radial: [``, q, W], conic: [``, z, q, W] }, xe, _e] }], "bg-color": [{ bg: N2() }], "gradient-from-pos": [{ from: P2() }], "gradient-via-pos": [{ via: P2() }], "gradient-to-pos": [{ to: P2() }], "gradient-from": [{ from: N2() }], "gradient-via": [{ via: N2() }], "gradient-to": [{ to: N2() }], rounded: [{ rounded: F2() }], "rounded-s": [{ "rounded-s": F2() }], "rounded-e": [{ "rounded-e": F2() }], "rounded-t": [{ "rounded-t": F2() }], "rounded-r": [{ "rounded-r": F2() }], "rounded-b": [{ "rounded-b": F2() }], "rounded-l": [{ "rounded-l": F2() }], "rounded-ss": [{ "rounded-ss": F2() }], "rounded-se": [{ "rounded-se": F2() }], "rounded-ee": [{ "rounded-ee": F2() }], "rounded-es": [{ "rounded-es": F2() }], "rounded-tl": [{ "rounded-tl": F2() }], "rounded-tr": [{ "rounded-tr": F2() }], "rounded-br": [{ "rounded-br": F2() }], "rounded-bl": [{ "rounded-bl": F2() }], "border-w": [{ border: I2() }], "border-w-x": [{ "border-x": I2() }], "border-w-y": [{ "border-y": I2() }], "border-w-s": [{ "border-s": I2() }], "border-w-e": [{ "border-e": I2() }], "border-w-bs": [{ "border-bs": I2() }], "border-w-be": [{ "border-be": I2() }], "border-w-t": [{ "border-t": I2() }], "border-w-r": [{ "border-r": I2() }], "border-w-b": [{ "border-b": I2() }], "border-w-l": [{ "border-l": I2() }], "divide-x": [{ "divide-x": I2() }], "divide-x-reverse": [`divide-x-reverse`], "divide-y": [{ "divide-y": I2() }], "divide-y-reverse": [`divide-y-reverse`], "border-style": [{ border: [...V2(), `hidden`, `none`] }], "divide-style": [{ divide: [...V2(), `hidden`, `none`] }], "border-color": [{ border: N2() }], "border-color-x": [{ "border-x": N2() }], "border-color-y": [{ "border-y": N2() }], "border-color-s": [{ "border-s": N2() }], "border-color-e": [{ "border-e": N2() }], "border-color-bs": [{ "border-bs": N2() }], "border-color-be": [{ "border-be": N2() }], "border-color-t": [{ "border-t": N2() }], "border-color-r": [{ "border-r": N2() }], "border-color-b": [{ "border-b": N2() }], "border-color-l": [{ "border-l": N2() }], "divide-color": [{ divide: N2() }], "outline-style": [{ outline: [...V2(), `none`, `hidden`] }], "outline-offset": [{ "outline-offset": [R, q, W] }], "outline-w": [{ outline: [``, R, J, G] }], "outline-color": [{ outline: N2() }], shadow: [{ shadow: [``, `inner`, `none`, u2, Y, K] }], "shadow-color": [{ shadow: N2() }], "inset-shadow": [{ "inset-shadow": [`none`, d2, Y, K] }], "inset-shadow-color": [{ "inset-shadow": N2() }], "ring-w": [{ ring: I2() }], "ring-w-inset": [`ring-inset`], "ring-color": [{ ring: N2() }], "ring-offset-w": [{ "ring-offset": [R, G] }], "ring-offset-color": [{ "ring-offset": N2() }], "inset-ring-w": [{ "inset-ring": I2() }], "inset-ring-color": [{ "inset-ring": N2() }], "text-shadow": [{ "text-shadow": [`none`, ee2, Y, K] }], "text-shadow-color": [{ "text-shadow": N2() }], opacity: [{ opacity: [R, q, W] }], "mix-blend": [{ "mix-blend": [...H2(), `plus-darker`, `plus-lighter`] }], "bg-blend": [{ "bg-blend": H2() }], "mask-clip": [{ "mask-clip": [`border`, `padding`, `content`, `fill`, `stroke`, `view`] }, `mask-no-clip`], "mask-composite": [{ mask: [`add`, `subtract`, `intersect`, `exclude`] }], "mask-image-linear-pos": [{ "mask-linear": [R] }], "mask-image-linear-from-pos": [{ "mask-linear-from": U2() }], "mask-image-linear-to-pos": [{ "mask-linear-to": U2() }], "mask-image-linear-from-color": [{ "mask-linear-from": N2() }], "mask-image-linear-to-color": [{ "mask-linear-to": N2() }], "mask-image-t-from-pos": [{ "mask-t-from": U2() }], "mask-image-t-to-pos": [{ "mask-t-to": U2() }], "mask-image-t-from-color": [{ "mask-t-from": N2() }], "mask-image-t-to-color": [{ "mask-t-to": N2() }], "mask-image-r-from-pos": [{ "mask-r-from": U2() }], "mask-image-r-to-pos": [{ "mask-r-to": U2() }], "mask-image-r-from-color": [{ "mask-r-from": N2() }], "mask-image-r-to-color": [{ "mask-r-to": N2() }], "mask-image-b-from-pos": [{ "mask-b-from": U2() }], "mask-image-b-to-pos": [{ "mask-b-to": U2() }], "mask-image-b-from-color": [{ "mask-b-from": N2() }], "mask-image-b-to-color": [{ "mask-b-to": N2() }], "mask-image-l-from-pos": [{ "mask-l-from": U2() }], "mask-image-l-to-pos": [{ "mask-l-to": U2() }], "mask-image-l-from-color": [{ "mask-l-from": N2() }], "mask-image-l-to-color": [{ "mask-l-to": N2() }], "mask-image-x-from-pos": [{ "mask-x-from": U2() }], "mask-image-x-to-pos": [{ "mask-x-to": U2() }], "mask-image-x-from-color": [{ "mask-x-from": N2() }], "mask-image-x-to-color": [{ "mask-x-to": N2() }], "mask-image-y-from-pos": [{ "mask-y-from": U2() }], "mask-image-y-to-pos": [{ "mask-y-to": U2() }], "mask-image-y-from-color": [{ "mask-y-from": N2() }], "mask-image-y-to-color": [{ "mask-y-to": N2() }], "mask-image-radial": [{ "mask-radial": [q, W] }], "mask-image-radial-from-pos": [{ "mask-radial-from": U2() }], "mask-image-radial-to-pos": [{ "mask-radial-to": U2() }], "mask-image-radial-from-color": [{ "mask-radial-from": N2() }], "mask-image-radial-to-color": [{ "mask-radial-to": N2() }], "mask-image-radial-shape": [{ "mask-radial": [`circle`, `ellipse`] }], "mask-image-radial-size": [{ "mask-radial": [{ closest: [`side`, `corner`], farthest: [`side`, `corner`] }] }], "mask-image-radial-pos": [{ "mask-radial-at": y2() }], "mask-image-conic-pos": [{ "mask-conic": [R] }], "mask-image-conic-from-pos": [{ "mask-conic-from": U2() }], "mask-image-conic-to-pos": [{ "mask-conic-to": U2() }], "mask-image-conic-from-color": [{ "mask-conic-from": N2() }], "mask-image-conic-to-color": [{ "mask-conic-to": N2() }], "mask-mode": [{ mask: [`alpha`, `luminance`, `match`] }], "mask-origin": [{ "mask-origin": [`border`, `padding`, `content`, `fill`, `stroke`, `view`] }], "mask-position": [{ mask: ie2() }], "mask-repeat": [{ mask: ae2() }], "mask-size": [{ mask: oe2() }], "mask-type": [{ "mask-type": [`alpha`, `luminance`] }], "mask-image": [{ mask: [`none`, q, W] }], filter: [{ filter: [``, `none`, q, W] }], blur: [{ blur: le2() }], brightness: [{ brightness: [R, q, W] }], contrast: [{ contrast: [R, q, W] }], "drop-shadow": [{ "drop-shadow": [``, `none`, f2, Y, K] }], "drop-shadow-color": [{ "drop-shadow": N2() }], grayscale: [{ grayscale: [``, R, q, W] }], "hue-rotate": [{ "hue-rotate": [R, q, W] }], invert: [{ invert: [``, R, q, W] }], saturate: [{ saturate: [R, q, W] }], sepia: [{ sepia: [``, R, q, W] }], "backdrop-filter": [{ "backdrop-filter": [``, `none`, q, W] }], "backdrop-blur": [{ "backdrop-blur": le2() }], "backdrop-brightness": [{ "backdrop-brightness": [R, q, W] }], "backdrop-contrast": [{ "backdrop-contrast": [R, q, W] }], "backdrop-grayscale": [{ "backdrop-grayscale": [``, R, q, W] }], "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [R, q, W] }], "backdrop-invert": [{ "backdrop-invert": [``, R, q, W] }], "backdrop-opacity": [{ "backdrop-opacity": [R, q, W] }], "backdrop-saturate": [{ "backdrop-saturate": [R, q, W] }], "backdrop-sepia": [{ "backdrop-sepia": [``, R, q, W] }], "border-collapse": [{ border: [`collapse`, `separate`] }], "border-spacing": [{ "border-spacing": C2() }], "border-spacing-x": [{ "border-spacing-x": C2() }], "border-spacing-y": [{ "border-spacing-y": C2() }], "table-layout": [{ table: [`auto`, `fixed`] }], caption: [{ caption: [`top`, `bottom`] }], transition: [{ transition: [``, `all`, `colors`, `opacity`, `shadow`, `transform`, `none`, q, W] }], "transition-behavior": [{ transition: [`normal`, `discrete`] }], duration: [{ duration: [R, `initial`, q, W] }], ease: [{ ease: [`linear`, `initial`, g2, q, W] }], delay: [{ delay: [R, q, W] }], animate: [{ animate: [`none`, _2, q, W] }], backface: [{ backface: [`hidden`, `visible`] }], perspective: [{ perspective: [m2, q, W] }], "perspective-origin": [{ "perspective-origin": b2() }], rotate: [{ rotate: X2() }], "rotate-x": [{ "rotate-x": X2() }], "rotate-y": [{ "rotate-y": X2() }], "rotate-z": [{ "rotate-z": X2() }], scale: [{ scale: Z2() }], "scale-x": [{ "scale-x": Z2() }], "scale-y": [{ "scale-y": Z2() }], "scale-z": [{ "scale-z": Z2() }], "scale-3d": [`scale-3d`], skew: [{ skew: Q2() }], "skew-x": [{ "skew-x": Q2() }], "skew-y": [{ "skew-y": Q2() }], transform: [{ transform: [q, W, ``, `none`, `gpu`, `cpu`] }], "transform-origin": [{ origin: b2() }], "transform-style": [{ transform: [`3d`, `flat`] }], translate: [{ translate: $2() }], "translate-x": [{ "translate-x": $2() }], "translate-y": [{ "translate-y": $2() }], "translate-z": [{ "translate-z": $2() }], "translate-none": [`translate-none`], zoom: [{ zoom: [z, q, W] }], accent: [{ accent: N2() }], appearance: [{ appearance: [`none`, `auto`] }], "caret-color": [{ caret: N2() }], "color-scheme": [{ scheme: [`normal`, `dark`, `light`, `light-dark`, `only-dark`, `only-light`] }], cursor: [{ cursor: [`auto`, `default`, `pointer`, `wait`, `text`, `move`, `help`, `not-allowed`, `none`, `context-menu`, `progress`, `cell`, `crosshair`, `vertical-text`, `alias`, `copy`, `no-drop`, `grab`, `grabbing`, `all-scroll`, `col-resize`, `row-resize`, `n-resize`, `e-resize`, `s-resize`, `w-resize`, `ne-resize`, `nw-resize`, `se-resize`, `sw-resize`, `ew-resize`, `ns-resize`, `nesw-resize`, `nwse-resize`, `zoom-in`, `zoom-out`, q, W] }], "field-sizing": [{ "field-sizing": [`fixed`, `content`] }], "pointer-events": [{ "pointer-events": [`auto`, `none`] }], resize: [{ resize: [`none`, ``, `y`, `x`] }], "scroll-behavior": [{ scroll: [`auto`, `smooth`] }], "scrollbar-thumb-color": [{ "scrollbar-thumb": N2() }], "scrollbar-track-color": [{ "scrollbar-track": N2() }], "scrollbar-gutter": [{ "scrollbar-gutter": [`auto`, `stable`, `both`] }], "scrollbar-w": [{ scrollbar: [`auto`, `thin`, `none`] }], "scroll-m": [{ "scroll-m": C2() }], "scroll-mx": [{ "scroll-mx": C2() }], "scroll-my": [{ "scroll-my": C2() }], "scroll-ms": [{ "scroll-ms": C2() }], "scroll-me": [{ "scroll-me": C2() }], "scroll-mbs": [{ "scroll-mbs": C2() }], "scroll-mbe": [{ "scroll-mbe": C2() }], "scroll-mt": [{ "scroll-mt": C2() }], "scroll-mr": [{ "scroll-mr": C2() }], "scroll-mb": [{ "scroll-mb": C2() }], "scroll-ml": [{ "scroll-ml": C2() }], "scroll-p": [{ "scroll-p": C2() }], "scroll-px": [{ "scroll-px": C2() }], "scroll-py": [{ "scroll-py": C2() }], "scroll-ps": [{ "scroll-ps": C2() }], "scroll-pe": [{ "scroll-pe": C2() }], "scroll-pbs": [{ "scroll-pbs": C2() }], "scroll-pbe": [{ "scroll-pbe": C2() }], "scroll-pt": [{ "scroll-pt": C2() }], "scroll-pr": [{ "scroll-pr": C2() }], "scroll-pb": [{ "scroll-pb": C2() }], "scroll-pl": [{ "scroll-pl": C2() }], "snap-align": [{ snap: [`start`, `end`, `center`, `align-none`] }], "snap-stop": [{ snap: [`normal`, `always`] }], "snap-type": [{ snap: [`none`, `x`, `y`, `both`] }], "snap-strictness": [{ snap: [`mandatory`, `proximity`] }], touch: [{ touch: [`auto`, `none`, `manipulation`] }], "touch-x": [{ "touch-pan": [`x`, `left`, `right`] }], "touch-y": [{ "touch-pan": [`y`, `up`, `down`] }], "touch-pz": [`touch-pinch-zoom`], select: [{ select: [`none`, `text`, `all`, `auto`] }], "will-change": [{ "will-change": [`auto`, `scroll`, `contents`, `transform`, q, W] }], fill: [{ fill: [`none`, ...N2()] }], "stroke-w": [{ stroke: [R, J, G, pe] }], stroke: [{ stroke: [`none`, ...N2()] }], "forced-color-adjust": [{ "forced-color-adjust": [`auto`, `none`] }] }, conflictingClassGroups: { "container-named": [`container-type`], overflow: [`overflow-x`, `overflow-y`], overscroll: [`overscroll-x`, `overscroll-y`], inset: [`inset-x`, `inset-y`, `inset-bs`, `inset-be`, `start`, `end`, `top`, `right`, `bottom`, `left`], "inset-x": [`start`, `end`, `right`, `left`], "inset-y": [`inset-bs`, `inset-be`, `top`, `bottom`], flex: [`basis`, `grow`, `shrink`], gap: [`gap-x`, `gap-y`], p: [`px`, `py`, `ps`, `pe`, `pbs`, `pbe`, `pt`, `pr`, `pb`, `pl`], px: [`ps`, `pe`, `pr`, `pl`], py: [`pbs`, `pbe`, `pt`, `pb`], m: [`mx`, `my`, `ms`, `me`, `mbs`, `mbe`, `mt`, `mr`, `mb`, `ml`], mx: [`ms`, `me`, `mr`, `ml`], my: [`mbs`, `mbe`, `mt`, `mb`], size: [`w`, `h`], "font-size": [`leading`], "fvn-normal": [`fvn-ordinal`, `fvn-slashed-zero`, `fvn-figure`, `fvn-spacing`, `fvn-fraction`], "fvn-ordinal": [`fvn-normal`], "fvn-slashed-zero": [`fvn-normal`], "fvn-figure": [`fvn-normal`], "fvn-spacing": [`fvn-normal`], "fvn-fraction": [`fvn-normal`], "line-clamp": [`display`, `overflow`], rounded: [`rounded-s`, `rounded-e`, `rounded-t`, `rounded-r`, `rounded-b`, `rounded-l`, `rounded-ss`, `rounded-se`, `rounded-ee`, `rounded-es`, `rounded-tl`, `rounded-tr`, `rounded-br`, `rounded-bl`], "rounded-s": [`rounded-ss`, `rounded-es`], "rounded-e": [`rounded-se`, `rounded-ee`], "rounded-t": [`rounded-tl`, `rounded-tr`], "rounded-r": [`rounded-tr`, `rounded-br`], "rounded-b": [`rounded-br`, `rounded-bl`], "rounded-l": [`rounded-tl`, `rounded-bl`], "border-spacing": [`border-spacing-x`, `border-spacing-y`], "border-w": [`border-w-x`, `border-w-y`, `border-w-s`, `border-w-e`, `border-w-bs`, `border-w-be`, `border-w-t`, `border-w-r`, `border-w-b`, `border-w-l`], "border-w-x": [`border-w-s`, `border-w-e`, `border-w-r`, `border-w-l`], "border-w-y": [`border-w-bs`, `border-w-be`, `border-w-t`, `border-w-b`], "border-color": [`border-color-x`, `border-color-y`, `border-color-s`, `border-color-e`, `border-color-bs`, `border-color-be`, `border-color-t`, `border-color-r`, `border-color-b`, `border-color-l`], "border-color-x": [`border-color-s`, `border-color-e`, `border-color-r`, `border-color-l`], "border-color-y": [`border-color-bs`, `border-color-be`, `border-color-t`, `border-color-b`], translate: [`translate-x`, `translate-y`, `translate-none`], "translate-none": [`translate`, `translate-x`, `translate-y`, `translate-z`], "scroll-m": [`scroll-mx`, `scroll-my`, `scroll-ms`, `scroll-me`, `scroll-mbs`, `scroll-mbe`, `scroll-mt`, `scroll-mr`, `scroll-mb`, `scroll-ml`], "scroll-mx": [`scroll-ms`, `scroll-me`, `scroll-mr`, `scroll-ml`], "scroll-my": [`scroll-mbs`, `scroll-mbe`, `scroll-mt`, `scroll-mb`], "scroll-p": [`scroll-px`, `scroll-py`, `scroll-ps`, `scroll-pe`, `scroll-pbs`, `scroll-pbe`, `scroll-pt`, `scroll-pr`, `scroll-pb`, `scroll-pl`], "scroll-px": [`scroll-ps`, `scroll-pe`, `scroll-pr`, `scroll-pl`], "scroll-py": [`scroll-pbs`, `scroll-pbe`, `scroll-pt`, `scroll-pb`], touch: [`touch-x`, `touch-y`, `touch-pz`], "touch-x": [`touch`], "touch-y": [`touch`], "touch-pz": [`touch`] }, conflictingClassGroupModifiers: { "font-size": [`leading`] }, postfixLookupClassGroups: [`container-type`], orderSensitiveModifiers: [`*`, `**`, `after`, `backdrop`, `before`, `details-content`, `file`, `first-letter`, `first-line`, `marker`, `placeholder`, `selection`] };
});
function Ae(...e2) {
  return ke(t(e2));
}
export {
  t as n,
  Ae as t
};
