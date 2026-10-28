import { ax as qe, aA as wt, j as Fe, h as Ue, e as we, k as je, a as ke, F as Ne, X as xn, aR as Tn, aS as En, M as pe, q as dt, S as _n, aT as Cn, aa as _e, aU as ut, aV as vn, aW as ft, C as Ie, V as Ln, D as In, aN as Rn, P as ht, O as Sn, aX as Mn, aY as Gn, aZ as On, a_ as jn, a$ as pt, Q as qn, b0 as mt, b1 as Fn, b2 as Un, r as gt, al as Pn, o as Pe, u as Hn, b3 as Bn, b4 as zn, aQ as Re, aq as bt } from "./three-tnxpQXqG.js";
import { bK as Vn } from "./index-BkIlMx7Q.js";
import "./three-drei-CTUAgrap.js";
import "./three-fiber-DvYcInOp.js";
class Dn extends qe {
  constructor(g) {
    super(g);
  }
  load(g, G, w, P) {
    const y = this, R = new wt(this.manager);
    R.setPath(this.path), R.setResponseType("arraybuffer"), R.setRequestHeader(this.requestHeader), R.setWithCredentials(this.withCredentials), R.load(g, function(f) {
      try {
        G(y.parse(f));
      } catch (N) {
        P ? P(N) : console.error(N), y.manager.itemError(g);
      }
    }, w, P);
  }
  parse(g) {
    function G(S) {
      const _ = new DataView(S), U = 32 / 8 * 3 + 32 / 8 * 3 * 3 + 16 / 8, K = _.getUint32(80, true);
      if (80 + 32 / 8 + K * U === _.byteLength) return true;
      const C = [115, 111, 108, 105, 100];
      for (let I = 0; I < 5; I++) if (w(C, _, I)) return false;
      return true;
    }
    function w(S, _, U) {
      for (let K = 0, v = S.length; K < v; K++) if (S[K] !== _.getUint8(U + K)) return false;
      return true;
    }
    function P(S) {
      const _ = new DataView(S), U = _.getUint32(80, true);
      let K, v, C, I = false, ee, oe, ce, re, ue;
      for (let $ = 0; $ < 70; $++) _.getUint32($, false) == 1129270351 && _.getUint8($ + 4) == 82 && _.getUint8($ + 5) == 61 && (I = true, ee = new Float32Array(U * 3 * 3), oe = _.getUint8($ + 6) / 255, ce = _.getUint8($ + 7) / 255, re = _.getUint8($ + 8) / 255, ue = _.getUint8($ + 9) / 255);
      const ie = 84, Z = 50, ne = new Fe(), j = new Float32Array(U * 3 * 3), q = new Float32Array(U * 3 * 3), H = new Ue();
      for (let $ = 0; $ < U; $++) {
        const le = ie + $ * Z, me = _.getFloat32(le, true), ge = _.getFloat32(le + 4, true), be = _.getFloat32(le + 8, true);
        if (I) {
          const l = _.getUint16(le + 48, true);
          (l & 32768) === 0 ? (K = (l & 31) / 31, v = (l >> 5 & 31) / 31, C = (l >> 10 & 31) / 31) : (K = oe, v = ce, C = re);
        }
        for (let l = 1; l <= 3; l++) {
          const J = le + l * 12, F = $ * 3 * 3 + (l - 1) * 3;
          j[F] = _.getFloat32(J, true), j[F + 1] = _.getFloat32(J + 4, true), j[F + 2] = _.getFloat32(J + 8, true), q[F] = me, q[F + 1] = ge, q[F + 2] = be, I && (H.setRGB(K, v, C, we), ee[F] = H.r, ee[F + 1] = H.g, ee[F + 2] = H.b);
        }
      }
      return ne.setAttribute("position", new je(j, 3)), ne.setAttribute("normal", new je(q, 3)), I && (ne.setAttribute("color", new je(ee, 3)), ne.hasColors = true, ne.alpha = ue), ne;
    }
    function y(S) {
      const _ = new Fe(), U = /solid([\s\S]*?)endsolid/g, K = /facet([\s\S]*?)endfacet/g, v = /solid\s(.+)/;
      let C = 0;
      const I = /[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source, ee = new RegExp("vertex" + I + I + I, "g"), oe = new RegExp("normal" + I + I + I, "g"), ce = [], re = [], ue = [], ie = new ke();
      let Z, ne = 0, j = 0, q = 0;
      for (; (Z = U.exec(S)) !== null; ) {
        j = q;
        const H = Z[0], $ = (Z = v.exec(H)) !== null ? Z[1] : "";
        for (ue.push($); (Z = K.exec(H)) !== null; ) {
          let ge = 0, be = 0;
          const l = Z[0];
          for (; (Z = oe.exec(l)) !== null; ) ie.x = parseFloat(Z[1]), ie.y = parseFloat(Z[2]), ie.z = parseFloat(Z[3]), be++;
          for (; (Z = ee.exec(l)) !== null; ) ce.push(parseFloat(Z[1]), parseFloat(Z[2]), parseFloat(Z[3])), re.push(ie.x, ie.y, ie.z), ge++, q++;
          be !== 1 && console.error("THREE.STLLoader: Something isn't right with the normal of face number " + C), ge !== 3 && console.error("THREE.STLLoader: Something isn't right with the vertices of face number " + C), C++;
        }
        const le = j, me = q - j;
        _.userData.groupNames = ue, _.addGroup(le, me, ne), ne++;
      }
      return _.setAttribute("position", new Ne(ce, 3)), _.setAttribute("normal", new Ne(re, 3)), _;
    }
    function R(S) {
      return typeof S != "string" ? new TextDecoder().decode(S) : S;
    }
    function f(S) {
      if (typeof S == "string") {
        const _ = new Uint8Array(S.length);
        for (let U = 0; U < S.length; U++) _[U] = S.charCodeAt(U) & 255;
        return _.buffer || _;
      } else return S;
    }
    const N = f(g);
    return G(N) ? P(N) : y(R(g));
  }
}
class yt extends xn {
  constructor(g) {
    super(g);
  }
  parse(g) {
    function G(l) {
      switch (l.image_type) {
        case K:
        case I:
          if (l.colormap_length > 256 || l.colormap_size !== 24 || l.colormap_type !== 1) throw new Error("THREE.TGALoader: Invalid type colormap data for indexed type.");
          break;
        case v:
        case C:
        case ee:
        case oe:
          if (l.colormap_type) throw new Error("THREE.TGALoader: Invalid type colormap data for colormap type.");
          break;
        case U:
          throw new Error("THREE.TGALoader: No data.");
        default:
          throw new Error("THREE.TGALoader: Invalid type " + l.image_type);
      }
      if (l.width <= 0 || l.height <= 0) throw new Error("THREE.TGALoader: Invalid image size.");
      if (l.pixel_size !== 8 && l.pixel_size !== 16 && l.pixel_size !== 24 && l.pixel_size !== 32) throw new Error("THREE.TGALoader: Invalid pixel size " + l.pixel_size);
    }
    function w(l, J, F, W, te) {
      let V, Y;
      const M = F.pixel_size >> 3, L = F.width * F.height * M;
      if (J && (Y = te.subarray(W, W += F.colormap_length * (F.colormap_size >> 3))), l) {
        V = new Uint8Array(L);
        let x, h, T, X = 0;
        const fe = new Uint8Array(M);
        for (; X < L; ) if (x = te[W++], h = (x & 127) + 1, x & 128) {
          for (T = 0; T < M; ++T) fe[T] = te[W++];
          for (T = 0; T < h; ++T) V.set(fe, X + T * M);
          X += M * h;
        } else {
          for (h *= M, T = 0; T < h; ++T) V[X + T] = te[W++];
          X += h;
        }
      } else V = te.subarray(W, W += J ? F.width * F.height : L);
      return { pixel_data: V, palettes: Y };
    }
    function P(l, J, F, W, te, V, Y, M, L) {
      const x = L;
      let h, T = 0, X, fe;
      const Ae = H.width;
      for (fe = J; fe !== W; fe += F) for (X = te; X !== Y; X += V, T++) h = M[T], l[(X + Ae * fe) * 4 + 3] = 255, l[(X + Ae * fe) * 4 + 2] = x[h * 3 + 0], l[(X + Ae * fe) * 4 + 1] = x[h * 3 + 1], l[(X + Ae * fe) * 4 + 0] = x[h * 3 + 2];
      return l;
    }
    function y(l, J, F, W, te, V, Y, M) {
      let L, x = 0, h, T;
      const X = H.width;
      for (T = J; T !== W; T += F) for (h = te; h !== Y; h += V, x += 2) L = M[x + 0] + (M[x + 1] << 8), l[(h + X * T) * 4 + 0] = (L & 31744) >> 7, l[(h + X * T) * 4 + 1] = (L & 992) >> 2, l[(h + X * T) * 4 + 2] = (L & 31) << 3, l[(h + X * T) * 4 + 3] = L & 32768 ? 0 : 255;
      return l;
    }
    function R(l, J, F, W, te, V, Y, M) {
      let L = 0, x, h;
      const T = H.width;
      for (h = J; h !== W; h += F) for (x = te; x !== Y; x += V, L += 3) l[(x + T * h) * 4 + 3] = 255, l[(x + T * h) * 4 + 2] = M[L + 0], l[(x + T * h) * 4 + 1] = M[L + 1], l[(x + T * h) * 4 + 0] = M[L + 2];
      return l;
    }
    function f(l, J, F, W, te, V, Y, M) {
      let L = 0, x, h;
      const T = H.width;
      for (h = J; h !== W; h += F) for (x = te; x !== Y; x += V, L += 4) l[(x + T * h) * 4 + 2] = M[L + 0], l[(x + T * h) * 4 + 1] = M[L + 1], l[(x + T * h) * 4 + 0] = M[L + 2], l[(x + T * h) * 4 + 3] = M[L + 3];
      return l;
    }
    function N(l, J, F, W, te, V, Y, M) {
      let L, x = 0, h, T;
      const X = H.width;
      for (T = J; T !== W; T += F) for (h = te; h !== Y; h += V, x++) L = M[x], l[(h + X * T) * 4 + 0] = L, l[(h + X * T) * 4 + 1] = L, l[(h + X * T) * 4 + 2] = L, l[(h + X * T) * 4 + 3] = 255;
      return l;
    }
    function S(l, J, F, W, te, V, Y, M) {
      let L = 0, x, h;
      const T = H.width;
      for (h = J; h !== W; h += F) for (x = te; x !== Y; x += V, L += 2) l[(x + T * h) * 4 + 0] = M[L + 0], l[(x + T * h) * 4 + 1] = M[L + 0], l[(x + T * h) * 4 + 2] = M[L + 0], l[(x + T * h) * 4 + 3] = M[L + 1];
      return l;
    }
    function _(l, J, F, W, te) {
      let V, Y, M, L, x, h;
      switch ((H.flags & ce) >> re) {
        default:
        case Z:
          V = 0, M = 1, x = J, Y = 0, L = 1, h = F;
          break;
        case ue:
          V = 0, M = 1, x = J, Y = F - 1, L = -1, h = -1;
          break;
        case ne:
          V = J - 1, M = -1, x = -1, Y = 0, L = 1, h = F;
          break;
        case ie:
          V = J - 1, M = -1, x = -1, Y = F - 1, L = -1, h = -1;
          break;
      }
      if (me) switch (H.pixel_size) {
        case 8:
          N(l, Y, L, h, V, M, x, W);
          break;
        case 16:
          S(l, Y, L, h, V, M, x, W);
          break;
        default:
          throw new Error("THREE.TGALoader: Format not supported.");
      }
      else switch (H.pixel_size) {
        case 8:
          P(l, Y, L, h, V, M, x, W, te);
          break;
        case 16:
          y(l, Y, L, h, V, M, x, W);
          break;
        case 24:
          R(l, Y, L, h, V, M, x, W);
          break;
        case 32:
          f(l, Y, L, h, V, M, x, W);
          break;
        default:
          throw new Error("THREE.TGALoader: Format not supported.");
      }
      return l;
    }
    const U = 0, K = 1, v = 2, C = 3, I = 9, ee = 10, oe = 11, ce = 48, re = 4, ue = 0, ie = 1, Z = 2, ne = 3;
    if (g.length < 19) throw new Error("THREE.TGALoader: Not enough data to contain header.");
    let j = 0;
    const q = new Uint8Array(g), H = { id_length: q[j++], colormap_type: q[j++], image_type: q[j++], colormap_index: q[j++] | q[j++] << 8, colormap_length: q[j++] | q[j++] << 8, colormap_size: q[j++], origin: [q[j++] | q[j++] << 8, q[j++] | q[j++] << 8], width: q[j++] | q[j++] << 8, height: q[j++] | q[j++] << 8, pixel_size: q[j++], flags: q[j++] };
    if (G(H), H.id_length + j > g.length) throw new Error("THREE.TGALoader: No data.");
    j += H.id_length;
    let $ = false, le = false, me = false;
    switch (H.image_type) {
      case I:
        $ = true, le = true;
        break;
      case K:
        le = true;
        break;
      case ee:
        $ = true;
        break;
      case v:
        break;
      case oe:
        $ = true, me = true;
        break;
      case C:
        me = true;
        break;
    }
    const ge = new Uint8Array(H.width * H.height * 4), be = w($, le, H, j, q);
    return _(ge, H.width, H.height, be.pixel_data, be.palettes), { data: ge, width: H.width, height: H.height, flipY: true, generateMipmaps: true, minFilter: Tn };
  }
}
class Wn extends qe {
  load(g, G, w, P) {
    const y = this, R = y.path === "" ? En.extractUrlBase(g) : y.path, f = new wt(y.manager);
    f.setPath(y.path), f.setRequestHeader(y.requestHeader), f.setWithCredentials(y.withCredentials), f.load(g, function(N) {
      try {
        G(y.parse(N, R));
      } catch (S) {
        P ? P(S) : console.error(S), y.manager.itemError(g);
      }
    }, w, P);
  }
  parse(g, G) {
    function w(t, e) {
      const s = [], n = t.childNodes;
      for (let i = 0, o = n.length; i < o; i++) {
        const r = n[i];
        r.nodeName === e && s.push(r);
      }
      return s;
    }
    function P(t) {
      if (t.length === 0) return [];
      const e = t.trim().split(/\s+/), s = new Array(e.length);
      for (let n = 0, i = e.length; n < i; n++) s[n] = e[n];
      return s;
    }
    function y(t) {
      if (t.length === 0) return [];
      const e = t.trim().split(/\s+/), s = new Array(e.length);
      for (let n = 0, i = e.length; n < i; n++) s[n] = parseFloat(e[n]);
      return s;
    }
    function R(t) {
      if (t.length === 0) return [];
      const e = t.trim().split(/\s+/), s = new Array(e.length);
      for (let n = 0, i = e.length; n < i; n++) s[n] = parseInt(e[n]);
      return s;
    }
    function f(t) {
      return t.substring(1);
    }
    function N() {
      return "three_default_" + Nn++;
    }
    function S(t) {
      return Object.keys(t).length === 0;
    }
    function _(t) {
      return { unit: U(w(t, "unit")[0]), upAxis: K(w(t, "up_axis")[0]) };
    }
    function U(t) {
      return t !== void 0 && t.hasAttribute("meter") === true ? parseFloat(t.getAttribute("meter")) : 1;
    }
    function K(t) {
      return t !== void 0 ? t.textContent : "Y_UP";
    }
    function v(t, e, s, n) {
      const i = w(t, e)[0];
      if (i !== void 0) {
        const o = w(i, s);
        for (let r = 0; r < o.length; r++) n(o[r]);
      }
    }
    function C(t, e) {
      for (const s in t) {
        const n = t[s];
        n.build = e(t[s]);
      }
    }
    function I(t, e) {
      return t.build !== void 0 || (t.build = e(t)), t.build;
    }
    function ee(t) {
      const e = { sources: {}, samplers: {}, channels: {} };
      let s = false;
      for (let n = 0, i = t.childNodes.length; n < i; n++) {
        const o = t.childNodes[n];
        if (o.nodeType !== 1) continue;
        let r;
        switch (o.nodeName) {
          case "source":
            r = o.getAttribute("id"), e.sources[r] = Se(o);
            break;
          case "sampler":
            r = o.getAttribute("id"), e.samplers[r] = oe(o);
            break;
          case "channel":
            r = o.getAttribute("target"), e.channels[r] = ce(o);
            break;
          case "animation":
            ee(o), s = true;
            break;
          default:
            console.log(o);
        }
      }
      s === false && (E.animations[t.getAttribute("id") || _e.generateUUID()] = e);
    }
    function oe(t) {
      const e = { inputs: {} };
      for (let s = 0, n = t.childNodes.length; s < n; s++) {
        const i = t.childNodes[s];
        if (i.nodeType === 1) switch (i.nodeName) {
          case "input":
            const o = f(i.getAttribute("source")), r = i.getAttribute("semantic");
            e.inputs[r] = o;
            break;
        }
      }
      return e;
    }
    function ce(t) {
      const e = {};
      let n = t.getAttribute("target").split("/");
      const i = n.shift();
      let o = n.shift();
      const r = o.indexOf("(") !== -1, u = o.indexOf(".") !== -1;
      if (u) n = o.split("."), o = n.shift(), e.member = n.shift();
      else if (r) {
        const c = o.split("(");
        o = c.shift();
        for (let d = 0; d < c.length; d++) c[d] = parseInt(c[d].replace(/\)/, ""));
        e.indices = c;
      }
      return e.id = i, e.sid = o, e.arraySyntax = r, e.memberSyntax = u, e.sampler = f(t.getAttribute("source")), e;
    }
    function re(t) {
      const e = [], s = t.channels, n = t.samplers, i = t.sources;
      for (const o in s) if (s.hasOwnProperty(o)) {
        const r = s[o], u = n[r.sampler], c = u.inputs.INPUT, d = u.inputs.OUTPUT, b = i[c], a = i[d], m = ie(r, b, a);
        H(m, e);
      }
      return e;
    }
    function ue(t) {
      return I(E.animations[t], re);
    }
    function ie(t, e, s) {
      const n = E.nodes[t.id], i = Te(n.id), o = n.transforms[t.sid], r = n.matrix.clone().transpose();
      let u, c, d, b, a, m;
      const p = {};
      switch (o) {
        case "matrix":
          for (d = 0, b = e.array.length; d < b; d++) if (u = e.array[d], c = d * s.stride, p[u] === void 0 && (p[u] = {}), t.arraySyntax === true) {
            const Q = s.array[c], D = t.indices[0] + 4 * t.indices[1];
            p[u][D] = Q;
          } else for (a = 0, m = s.stride; a < m; a++) p[u][a] = s.array[c + a];
          break;
        case "translate":
          console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.', o);
          break;
        case "rotate":
          console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.', o);
          break;
        case "scale":
          console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.', o);
          break;
      }
      const A = Z(p, r);
      return { name: i.uuid, keyframes: A };
    }
    function Z(t, e) {
      const s = [];
      for (const i in t) s.push({ time: parseFloat(i), value: t[i] });
      s.sort(n);
      for (let i = 0; i < 16; i++) $(s, i, e.elements[i]);
      return s;
      function n(i, o) {
        return i.time - o.time;
      }
    }
    const ne = new ke(), j = new ke(), q = new qn();
    function H(t, e) {
      const s = t.keyframes, n = t.name, i = [], o = [], r = [], u = [];
      for (let c = 0, d = s.length; c < d; c++) {
        const b = s[c], a = b.time, m = b.value;
        de.fromArray(m).transpose(), de.decompose(ne, q, j), i.push(a), o.push(ne.x, ne.y, ne.z), r.push(q.x, q.y, q.z, q.w), u.push(j.x, j.y, j.z);
      }
      return o.length > 0 && e.push(new mt(n + ".position", i, o)), r.length > 0 && e.push(new Fn(n + ".quaternion", i, r)), u.length > 0 && e.push(new mt(n + ".scale", i, u)), e;
    }
    function $(t, e, s) {
      let n, i = true, o, r;
      for (o = 0, r = t.length; o < r; o++) n = t[o], n.value[e] === void 0 ? n.value[e] = null : i = false;
      if (i === true) for (o = 0, r = t.length; o < r; o++) n = t[o], n.value[e] = s;
      else le(t, e);
    }
    function le(t, e) {
      let s, n;
      for (let i = 0, o = t.length; i < o; i++) {
        const r = t[i];
        if (r.value[e] === null) {
          if (s = me(t, i, e), n = ge(t, i, e), s === null) {
            r.value[e] = n.value[e];
            continue;
          }
          if (n === null) {
            r.value[e] = s.value[e];
            continue;
          }
          be(r, s, n, e);
        }
      }
    }
    function me(t, e, s) {
      for (; e >= 0; ) {
        const n = t[e];
        if (n.value[s] !== null) return n;
        e--;
      }
      return null;
    }
    function ge(t, e, s) {
      for (; e < t.length; ) {
        const n = t[e];
        if (n.value[s] !== null) return n;
        e++;
      }
      return null;
    }
    function be(t, e, s, n) {
      if (s.time - e.time === 0) {
        t.value[n] = e.value[n];
        return;
      }
      t.value[n] = (t.time - e.time) * (s.value[n] - e.value[n]) / (s.time - e.time) + e.value[n];
    }
    function l(t) {
      const e = { name: t.getAttribute("id") || "default", start: parseFloat(t.getAttribute("start") || 0), end: parseFloat(t.getAttribute("end") || 0), animations: [] };
      for (let s = 0, n = t.childNodes.length; s < n; s++) {
        const i = t.childNodes[s];
        if (i.nodeType === 1) switch (i.nodeName) {
          case "instance_animation":
            e.animations.push(f(i.getAttribute("url")));
            break;
        }
      }
      E.clips[t.getAttribute("id")] = e;
    }
    function J(t) {
      const e = [], s = t.name, n = t.end - t.start || -1, i = t.animations;
      for (let o = 0, r = i.length; o < r; o++) {
        const u = ue(i[o]);
        for (let c = 0, d = u.length; c < d; c++) e.push(u[c]);
      }
      return new ut(s, n, e);
    }
    function F(t) {
      return I(E.clips[t], J);
    }
    function W(t) {
      const e = {};
      for (let s = 0, n = t.childNodes.length; s < n; s++) {
        const i = t.childNodes[s];
        if (i.nodeType === 1) switch (i.nodeName) {
          case "skin":
            e.id = f(i.getAttribute("source")), e.skin = te(i);
            break;
          case "morph":
            e.id = f(i.getAttribute("source")), console.warn("THREE.ColladaLoader: Morph target animation not supported yet.");
            break;
        }
      }
      E.controllers[t.getAttribute("id")] = e;
    }
    function te(t) {
      const e = { sources: {} };
      for (let s = 0, n = t.childNodes.length; s < n; s++) {
        const i = t.childNodes[s];
        if (i.nodeType === 1) switch (i.nodeName) {
          case "bind_shape_matrix":
            e.bindShapeMatrix = y(i.textContent);
            break;
          case "source":
            const o = i.getAttribute("id");
            e.sources[o] = Se(i);
            break;
          case "joints":
            e.joints = V(i);
            break;
          case "vertex_weights":
            e.vertexWeights = Y(i);
            break;
        }
      }
      return e;
    }
    function V(t) {
      const e = { inputs: {} };
      for (let s = 0, n = t.childNodes.length; s < n; s++) {
        const i = t.childNodes[s];
        if (i.nodeType === 1) switch (i.nodeName) {
          case "input":
            const o = i.getAttribute("semantic"), r = f(i.getAttribute("source"));
            e.inputs[o] = r;
            break;
        }
      }
      return e;
    }
    function Y(t) {
      const e = { inputs: {} };
      for (let s = 0, n = t.childNodes.length; s < n; s++) {
        const i = t.childNodes[s];
        if (i.nodeType === 1) switch (i.nodeName) {
          case "input":
            const o = i.getAttribute("semantic"), r = f(i.getAttribute("source")), u = parseInt(i.getAttribute("offset"));
            e.inputs[o] = { id: r, offset: u };
            break;
          case "vcount":
            e.vcount = R(i.textContent);
            break;
          case "v":
            e.v = R(i.textContent);
            break;
        }
      }
      return e;
    }
    function M(t) {
      const e = { id: t.id }, s = E.geometries[e.id];
      return t.skin !== void 0 && (e.skin = L(t.skin), s.sources.skinIndices = e.skin.indices, s.sources.skinWeights = e.skin.weights), e;
    }
    function L(t) {
      const s = { joints: [], indices: { array: [], stride: 4 }, weights: { array: [], stride: 4 } }, n = t.sources, i = t.vertexWeights, o = i.vcount, r = i.v, u = i.inputs.JOINT.offset, c = i.inputs.WEIGHT.offset, d = t.sources[t.joints.inputs.JOINT], b = t.sources[t.joints.inputs.INV_BIND_MATRIX], a = n[i.inputs.WEIGHT.id].array;
      let m = 0, p, A, k;
      for (p = 0, k = o.length; p < k; p++) {
        const D = o[p], B = [];
        for (A = 0; A < D; A++) {
          const z = r[m + u], ye = r[m + c], ae = a[ye];
          B.push({ index: z, weight: ae }), m += 2;
        }
        for (B.sort(Q), A = 0; A < 4; A++) {
          const z = B[A];
          z !== void 0 ? (s.indices.array.push(z.index), s.weights.array.push(z.weight)) : (s.indices.array.push(0), s.weights.array.push(0));
        }
      }
      for (t.bindShapeMatrix ? s.bindMatrix = new pe().fromArray(t.bindShapeMatrix).transpose() : s.bindMatrix = new pe().identity(), p = 0, k = d.array.length; p < k; p++) {
        const D = d.array[p], B = new pe().fromArray(b.array, p * b.stride).transpose();
        s.joints.push({ name: D, boneInverse: B });
      }
      return s;
      function Q(D, B) {
        return B.weight - D.weight;
      }
    }
    function x(t) {
      return I(E.controllers[t], M);
    }
    function h(t) {
      const e = { init_from: w(t, "init_from")[0].textContent };
      E.images[t.getAttribute("id")] = e;
    }
    function T(t) {
      return t.build !== void 0 ? t.build : t.init_from;
    }
    function X(t) {
      const e = E.images[t];
      return e !== void 0 ? I(e, T) : (console.warn("THREE.ColladaLoader: Couldn't find image with ID:", t), null);
    }
    function fe(t) {
      const e = {};
      for (let s = 0, n = t.childNodes.length; s < n; s++) {
        const i = t.childNodes[s];
        if (i.nodeType === 1) switch (i.nodeName) {
          case "profile_COMMON":
            e.profile = Ae(i);
            break;
        }
      }
      E.effects[t.getAttribute("id")] = e;
    }
    function Ae(t) {
      const e = { surfaces: {}, samplers: {} };
      for (let s = 0, n = t.childNodes.length; s < n; s++) {
        const i = t.childNodes[s];
        if (i.nodeType === 1) switch (i.nodeName) {
          case "newparam":
            kt(i, e);
            break;
          case "technique":
            e.technique = xt(i);
            break;
          case "extra":
            e.extra = ze(i);
            break;
        }
      }
      return e;
    }
    function kt(t, e) {
      const s = t.getAttribute("sid");
      for (let n = 0, i = t.childNodes.length; n < i; n++) {
        const o = t.childNodes[n];
        if (o.nodeType === 1) switch (o.nodeName) {
          case "surface":
            e.surfaces[s] = Nt(o);
            break;
          case "sampler2D":
            e.samplers[s] = At(o);
            break;
        }
      }
    }
    function Nt(t) {
      const e = {};
      for (let s = 0, n = t.childNodes.length; s < n; s++) {
        const i = t.childNodes[s];
        if (i.nodeType === 1) switch (i.nodeName) {
          case "init_from":
            e.init_from = i.textContent;
            break;
        }
      }
      return e;
    }
    function At(t) {
      const e = {};
      for (let s = 0, n = t.childNodes.length; s < n; s++) {
        const i = t.childNodes[s];
        if (i.nodeType === 1) switch (i.nodeName) {
          case "source":
            e.source = i.textContent;
            break;
        }
      }
      return e;
    }
    function xt(t) {
      const e = {};
      for (let s = 0, n = t.childNodes.length; s < n; s++) {
        const i = t.childNodes[s];
        if (i.nodeType === 1) switch (i.nodeName) {
          case "constant":
          case "lambert":
          case "blinn":
          case "phong":
            e.type = i.nodeName, e.parameters = Tt(i);
            break;
          case "extra":
            e.extra = ze(i);
            break;
        }
      }
      return e;
    }
    function Tt(t) {
      const e = {};
      for (let s = 0, n = t.childNodes.length; s < n; s++) {
        const i = t.childNodes[s];
        if (i.nodeType === 1) switch (i.nodeName) {
          case "emission":
          case "diffuse":
          case "specular":
          case "bump":
          case "ambient":
          case "shininess":
          case "transparency":
            e[i.nodeName] = He(i);
            break;
          case "transparent":
            e[i.nodeName] = { opaque: i.hasAttribute("opaque") ? i.getAttribute("opaque") : "A_ONE", data: He(i) };
            break;
        }
      }
      return e;
    }
    function He(t) {
      const e = {};
      for (let s = 0, n = t.childNodes.length; s < n; s++) {
        const i = t.childNodes[s];
        if (i.nodeType === 1) switch (i.nodeName) {
          case "color":
            e[i.nodeName] = y(i.textContent);
            break;
          case "float":
            e[i.nodeName] = parseFloat(i.textContent);
            break;
          case "texture":
            e[i.nodeName] = { id: i.getAttribute("texture"), extra: Be(i) };
            break;
        }
      }
      return e;
    }
    function Be(t) {
      const e = { technique: {} };
      for (let s = 0, n = t.childNodes.length; s < n; s++) {
        const i = t.childNodes[s];
        if (i.nodeType === 1) switch (i.nodeName) {
          case "extra":
            Et(i, e);
            break;
        }
      }
      return e;
    }
    function Et(t, e) {
      for (let s = 0, n = t.childNodes.length; s < n; s++) {
        const i = t.childNodes[s];
        if (i.nodeType === 1) switch (i.nodeName) {
          case "technique":
            _t(i, e);
            break;
        }
      }
    }
    function _t(t, e) {
      for (let s = 0, n = t.childNodes.length; s < n; s++) {
        const i = t.childNodes[s];
        if (i.nodeType === 1) switch (i.nodeName) {
          case "repeatU":
          case "repeatV":
          case "offsetU":
          case "offsetV":
            e.technique[i.nodeName] = parseFloat(i.textContent);
            break;
          case "wrapU":
          case "wrapV":
            i.textContent.toUpperCase() === "TRUE" ? e.technique[i.nodeName] = 1 : i.textContent.toUpperCase() === "FALSE" ? e.technique[i.nodeName] = 0 : e.technique[i.nodeName] = parseInt(i.textContent);
            break;
          case "bump":
            e[i.nodeName] = Ve(i);
            break;
        }
      }
    }
    function ze(t) {
      const e = {};
      for (let s = 0, n = t.childNodes.length; s < n; s++) {
        const i = t.childNodes[s];
        if (i.nodeType === 1) switch (i.nodeName) {
          case "technique":
            e.technique = Ct(i);
            break;
        }
      }
      return e;
    }
    function Ct(t) {
      const e = {};
      for (let s = 0, n = t.childNodes.length; s < n; s++) {
        const i = t.childNodes[s];
        if (i.nodeType === 1) switch (i.nodeName) {
          case "double_sided":
            e[i.nodeName] = parseInt(i.textContent);
            break;
          case "bump":
            e[i.nodeName] = Ve(i);
            break;
        }
      }
      return e;
    }
    function Ve(t) {
      const e = {};
      for (let s = 0, n = t.childNodes.length; s < n; s++) {
        const i = t.childNodes[s];
        if (i.nodeType === 1) switch (i.nodeName) {
          case "texture":
            e[i.nodeName] = { id: i.getAttribute("texture"), texcoord: i.getAttribute("texcoord"), extra: Be(i) };
            break;
        }
      }
      return e;
    }
    function De(t) {
      return t;
    }
    function vt(t) {
      return I(E.effects[t], De);
    }
    function Lt(t) {
      const e = { name: t.getAttribute("name") };
      for (let s = 0, n = t.childNodes.length; s < n; s++) {
        const i = t.childNodes[s];
        if (i.nodeType === 1) switch (i.nodeName) {
          case "instance_effect":
            e.url = f(i.getAttribute("url"));
            break;
        }
      }
      E.materials[t.getAttribute("id")] = e;
    }
    function It(t) {
      let e, s = t.slice((t.lastIndexOf(".") - 1 >>> 0) + 2);
      switch (s = s.toLowerCase(), s) {
        case "tga":
          e = Oe;
          break;
        default:
          e = at;
      }
      return e;
    }
    function We(t) {
      const e = vt(t.url), s = e.profile.technique;
      let n;
      switch (s.type) {
        case "phong":
        case "blinn":
          n = new ft();
          break;
        case "lambert":
          n = new vn();
          break;
        default:
          n = new dt();
          break;
      }
      n.name = t.name || "";
      function i(c, d = null) {
        const b = e.profile.samplers[c.id];
        let a = null;
        if (b !== void 0) {
          const m = e.profile.surfaces[b.source];
          a = X(m.init_from);
        } else console.warn("THREE.ColladaLoader: Undefined sampler. Access image directly (see #12530)."), a = X(c.id);
        if (a !== null) {
          const m = It(a);
          if (m !== void 0) {
            const p = m.load(a), A = c.extra;
            if (A !== void 0 && A.technique !== void 0 && S(A.technique) === false) {
              const k = A.technique;
              p.wrapS = k.wrapU ? Re : bt, p.wrapT = k.wrapV ? Re : bt, p.offset.set(k.offsetU || 0, k.offsetV || 0), p.repeat.set(k.repeatU || 1, k.repeatV || 1);
            } else p.wrapS = Re, p.wrapT = Re;
            return d !== null && (p.colorSpace = d), p;
          } else return console.warn("THREE.ColladaLoader: Loader for texture %s not found.", a), null;
        } else return console.warn("THREE.ColladaLoader: Couldn't create texture with ID:", c.id), null;
      }
      const o = s.parameters;
      for (const c in o) {
        const d = o[c];
        switch (c) {
          case "diffuse":
            d.color && n.color.fromArray(d.color), d.texture && (n.map = i(d.texture, we));
            break;
          case "specular":
            d.color && n.specular && n.specular.fromArray(d.color), d.texture && (n.specularMap = i(d.texture));
            break;
          case "bump":
            d.texture && (n.normalMap = i(d.texture));
            break;
          case "ambient":
            d.texture && (n.lightMap = i(d.texture, we));
            break;
          case "shininess":
            d.float && n.shininess && (n.shininess = d.float);
            break;
          case "emission":
            d.color && n.emissive && n.emissive.fromArray(d.color), d.texture && (n.emissiveMap = i(d.texture, we));
            break;
        }
      }
      Ie.toWorkingColorSpace(n.color, we), n.specular && Ie.toWorkingColorSpace(n.specular, we), n.emissive && Ie.toWorkingColorSpace(n.emissive, we);
      let r = o.transparent, u = o.transparency;
      if (u === void 0 && r && (u = { float: 1 }), r === void 0 && u && (r = { opaque: "A_ONE", data: { color: [1, 1, 1, 1] } }), r && u) if (r.data.texture) n.transparent = true;
      else {
        const c = r.data.color;
        switch (r.opaque) {
          case "A_ONE":
            n.opacity = c[3] * u.float;
            break;
          case "RGB_ZERO":
            n.opacity = 1 - c[0] * u.float;
            break;
          case "A_ZERO":
            n.opacity = 1 - c[3] * u.float;
            break;
          case "RGB_ONE":
            n.opacity = c[0] * u.float;
            break;
          default:
            console.warn('THREE.ColladaLoader: Invalid opaque type "%s" of transparent tag.', r.opaque);
        }
        n.opacity < 1 && (n.transparent = true);
      }
      if (s.extra !== void 0 && s.extra.technique !== void 0) {
        const c = s.extra.technique;
        for (const d in c) {
          const b = c[d];
          switch (d) {
            case "double_sided":
              n.side = b === 1 ? In : Rn;
              break;
            case "bump":
              n.normalMap = i(b.texture), n.normalScale = new Ln(1, 1);
              break;
          }
        }
      }
      return n;
    }
    function Rt(t) {
      return I(E.materials[t], We);
    }
    function St(t) {
      const e = { name: t.getAttribute("name") };
      for (let s = 0, n = t.childNodes.length; s < n; s++) {
        const i = t.childNodes[s];
        if (i.nodeType === 1) switch (i.nodeName) {
          case "optics":
            e.optics = Mt(i);
            break;
        }
      }
      E.cameras[t.getAttribute("id")] = e;
    }
    function Mt(t) {
      for (let e = 0; e < t.childNodes.length; e++) {
        const s = t.childNodes[e];
        switch (s.nodeName) {
          case "technique_common":
            return Gt(s);
        }
      }
      return {};
    }
    function Gt(t) {
      const e = {};
      for (let s = 0; s < t.childNodes.length; s++) {
        const n = t.childNodes[s];
        switch (n.nodeName) {
          case "perspective":
          case "orthographic":
            e.technique = n.nodeName, e.parameters = Ot(n);
            break;
        }
      }
      return e;
    }
    function Ot(t) {
      const e = {};
      for (let s = 0; s < t.childNodes.length; s++) {
        const n = t.childNodes[s];
        switch (n.nodeName) {
          case "xfov":
          case "yfov":
          case "xmag":
          case "ymag":
          case "znear":
          case "zfar":
          case "aspect_ratio":
            e[n.nodeName] = parseFloat(n.textContent);
            break;
        }
      }
      return e;
    }
    function Ke(t) {
      let e;
      switch (t.optics.technique) {
        case "perspective":
          e = new ht(t.optics.parameters.yfov, t.optics.parameters.aspect_ratio, t.optics.parameters.znear, t.optics.parameters.zfar);
          break;
        case "orthographic":
          let s = t.optics.parameters.ymag, n = t.optics.parameters.xmag;
          const i = t.optics.parameters.aspect_ratio;
          n = n === void 0 ? s * i : n, s = s === void 0 ? n / i : s, n *= 0.5, s *= 0.5, e = new Sn(-n, n, s, -s, t.optics.parameters.znear, t.optics.parameters.zfar);
          break;
        default:
          e = new ht();
          break;
      }
      return e.name = t.name || "", e;
    }
    function jt(t) {
      const e = E.cameras[t];
      return e !== void 0 ? I(e, Ke) : (console.warn("THREE.ColladaLoader: Couldn't find camera with ID:", t), null);
    }
    function qt(t) {
      let e = {};
      for (let s = 0, n = t.childNodes.length; s < n; s++) {
        const i = t.childNodes[s];
        if (i.nodeType === 1) switch (i.nodeName) {
          case "technique_common":
            e = Ft(i);
            break;
        }
      }
      E.lights[t.getAttribute("id")] = e;
    }
    function Ft(t) {
      const e = {};
      for (let s = 0, n = t.childNodes.length; s < n; s++) {
        const i = t.childNodes[s];
        if (i.nodeType === 1) switch (i.nodeName) {
          case "directional":
          case "point":
          case "spot":
          case "ambient":
            e.technique = i.nodeName, e.parameters = Ut(i);
        }
      }
      return e;
    }
    function Ut(t) {
      const e = {};
      for (let s = 0, n = t.childNodes.length; s < n; s++) {
        const i = t.childNodes[s];
        if (i.nodeType === 1) switch (i.nodeName) {
          case "color":
            const o = y(i.textContent);
            e.color = new Ue().fromArray(o), Ie.toWorkingColorSpace(e.color, we);
            break;
          case "falloff_angle":
            e.falloffAngle = parseFloat(i.textContent);
            break;
          case "quadratic_attenuation":
            const r = parseFloat(i.textContent);
            e.distance = r ? Math.sqrt(1 / r) : 0;
            break;
        }
      }
      return e;
    }
    function Ye(t) {
      let e;
      switch (t.technique) {
        case "directional":
          e = new jn();
          break;
        case "point":
          e = new On();
          break;
        case "spot":
          e = new Gn();
          break;
        case "ambient":
          e = new Mn();
          break;
      }
      return t.parameters.color && e.color.copy(t.parameters.color), t.parameters.distance && (e.distance = t.parameters.distance), e;
    }
    function Pt(t) {
      const e = E.lights[t];
      return e !== void 0 ? I(e, Ye) : (console.warn("THREE.ColladaLoader: Couldn't find light with ID:", t), null);
    }
    function Ht(t) {
      const e = { name: t.getAttribute("name"), sources: {}, vertices: {}, primitives: [] }, s = w(t, "mesh")[0];
      if (s !== void 0) {
        for (let n = 0; n < s.childNodes.length; n++) {
          const i = s.childNodes[n];
          if (i.nodeType !== 1) continue;
          const o = i.getAttribute("id");
          switch (i.nodeName) {
            case "source":
              e.sources[o] = Se(i);
              break;
            case "vertices":
              e.vertices = Bt(i);
              break;
            case "polygons":
              console.warn("THREE.ColladaLoader: Unsupported primitive type: ", i.nodeName);
              break;
            case "lines":
            case "linestrips":
            case "polylist":
            case "triangles":
              e.primitives.push(zt(i));
              break;
            default:
              console.log(i);
          }
        }
        E.geometries[t.getAttribute("id")] = e;
      }
    }
    function Se(t) {
      const e = { array: [], stride: 3 };
      for (let s = 0; s < t.childNodes.length; s++) {
        const n = t.childNodes[s];
        if (n.nodeType === 1) switch (n.nodeName) {
          case "float_array":
            e.array = y(n.textContent);
            break;
          case "Name_array":
            e.array = P(n.textContent);
            break;
          case "technique_common":
            const i = w(n, "accessor")[0];
            i !== void 0 && (e.stride = parseInt(i.getAttribute("stride")));
            break;
        }
      }
      return e;
    }
    function Bt(t) {
      const e = {};
      for (let s = 0; s < t.childNodes.length; s++) {
        const n = t.childNodes[s];
        n.nodeType === 1 && (e[n.getAttribute("semantic")] = f(n.getAttribute("source")));
      }
      return e;
    }
    function zt(t) {
      const e = { type: t.nodeName, material: t.getAttribute("material"), count: parseInt(t.getAttribute("count")), inputs: {}, stride: 0, hasUV: false };
      for (let s = 0, n = t.childNodes.length; s < n; s++) {
        const i = t.childNodes[s];
        if (i.nodeType === 1) switch (i.nodeName) {
          case "input":
            const o = f(i.getAttribute("source")), r = i.getAttribute("semantic"), u = parseInt(i.getAttribute("offset")), c = parseInt(i.getAttribute("set")), d = c > 0 ? r + c : r;
            e.inputs[d] = { id: o, offset: u }, e.stride = Math.max(e.stride, u + 1), r === "TEXCOORD" && (e.hasUV = true);
            break;
          case "vcount":
            e.vcount = R(i.textContent);
            break;
          case "p":
            e.p = R(i.textContent);
            break;
        }
      }
      return e;
    }
    function Vt(t) {
      const e = {};
      for (let s = 0; s < t.length; s++) {
        const n = t[s];
        e[n.type] === void 0 && (e[n.type] = []), e[n.type].push(n);
      }
      return e;
    }
    function Dt(t) {
      let e = 0;
      for (let s = 0, n = t.length; s < n; s++) t[s].hasUV === true && e++;
      e > 0 && e < t.length && (t.uvsNeedsFix = true);
    }
    function Je(t) {
      const e = {}, s = t.sources, n = t.vertices, i = t.primitives;
      if (i.length === 0) return {};
      const o = Vt(i);
      for (const r in o) {
        const u = o[r];
        Dt(u), e[r] = Wt(u, s, n);
      }
      return e;
    }
    function Wt(t, e, s) {
      const n = {}, i = { array: [], stride: 0 }, o = { array: [], stride: 0 }, r = { array: [], stride: 0 }, u = { array: [], stride: 0 }, c = { array: [], stride: 0 }, d = { array: [], stride: 4 }, b = { array: [], stride: 4 }, a = new Fe(), m = [];
      let p = 0;
      for (let A = 0; A < t.length; A++) {
        const k = t[A], Q = k.inputs;
        let D = 0;
        switch (k.type) {
          case "lines":
          case "linestrips":
            D = k.count * 2;
            break;
          case "triangles":
            D = k.count * 3;
            break;
          case "polylist":
            for (let B = 0; B < k.count; B++) {
              const z = k.vcount[B];
              switch (z) {
                case 3:
                  D += 3;
                  break;
                case 4:
                  D += 6;
                  break;
                default:
                  D += (z - 2) * 3;
                  break;
              }
            }
            break;
          default:
            console.warn("THREE.ColladaLoader: Unknown primitive type:", k.type);
        }
        a.addGroup(p, D, A), p += D, k.material && m.push(k.material);
        for (const B in Q) {
          const z = Q[B];
          switch (B) {
            case "VERTEX":
              for (const ye in s) {
                const ae = s[ye];
                switch (ye) {
                  case "POSITION":
                    const Ee = i.array.length;
                    if (he(k, e[ae], z.offset, i.array), i.stride = e[ae].stride, e.skinWeights && e.skinIndices && (he(k, e.skinIndices, z.offset, d.array), he(k, e.skinWeights, z.offset, b.array)), k.hasUV === false && t.uvsNeedsFix === true) {
                      const An = (i.array.length - Ee) / i.stride;
                      for (let lt = 0; lt < An; lt++) r.array.push(0, 0);
                    }
                    break;
                  case "NORMAL":
                    he(k, e[ae], z.offset, o.array), o.stride = e[ae].stride;
                    break;
                  case "COLOR":
                    he(k, e[ae], z.offset, c.array), c.stride = e[ae].stride;
                    break;
                  case "TEXCOORD":
                    he(k, e[ae], z.offset, r.array), r.stride = e[ae].stride;
                    break;
                  case "TEXCOORD1":
                    he(k, e[ae], z.offset, u.array), r.stride = e[ae].stride;
                    break;
                  default:
                    console.warn('THREE.ColladaLoader: Semantic "%s" not handled in geometry build process.', ye);
                }
              }
              break;
            case "NORMAL":
              he(k, e[z.id], z.offset, o.array), o.stride = e[z.id].stride;
              break;
            case "COLOR":
              he(k, e[z.id], z.offset, c.array, true), c.stride = e[z.id].stride;
              break;
            case "TEXCOORD":
              he(k, e[z.id], z.offset, r.array), r.stride = e[z.id].stride;
              break;
            case "TEXCOORD1":
              he(k, e[z.id], z.offset, u.array), u.stride = e[z.id].stride;
              break;
          }
        }
      }
      return i.array.length > 0 && a.setAttribute("position", new Ne(i.array, i.stride)), o.array.length > 0 && a.setAttribute("normal", new Ne(o.array, o.stride)), c.array.length > 0 && a.setAttribute("color", new Ne(c.array, c.stride)), r.array.length > 0 && a.setAttribute("uv", new Ne(r.array, r.stride)), u.array.length > 0 && a.setAttribute("uv1", new Ne(u.array, u.stride)), d.array.length > 0 && a.setAttribute("skinIndex", new Ne(d.array, d.stride)), b.array.length > 0 && a.setAttribute("skinWeight", new Ne(b.array, b.stride)), n.data = a, n.type = t[0].type, n.materialKeys = m, n;
    }
    function he(t, e, s, n, i = false) {
      const o = t.p, r = t.stride, u = t.vcount;
      function c(a) {
        let m = o[a + s] * b;
        const p = m + b;
        for (; m < p; m++) n.push(d[m]);
        if (i) {
          const A = n.length - b - 1;
          Ce.setRGB(n[A + 0], n[A + 1], n[A + 2], we), n[A + 0] = Ce.r, n[A + 1] = Ce.g, n[A + 2] = Ce.b;
        }
      }
      const d = e.array, b = e.stride;
      if (t.vcount !== void 0) {
        let a = 0;
        for (let m = 0, p = u.length; m < p; m++) {
          const A = u[m];
          if (A === 4) {
            const k = a + r * 0, Q = a + r * 1, D = a + r * 2, B = a + r * 3;
            c(k), c(Q), c(B), c(Q), c(D), c(B);
          } else if (A === 3) {
            const k = a + r * 0, Q = a + r * 1, D = a + r * 2;
            c(k), c(Q), c(D);
          } else if (A > 4) for (let k = 1, Q = A - 2; k <= Q; k++) {
            const D = a + r * 0, B = a + r * k, z = a + r * (k + 1);
            c(D), c(B), c(z);
          }
          a += r * A;
        }
      } else for (let a = 0, m = o.length; a < m; a += r) c(a);
    }
    function Xe(t) {
      return I(E.geometries[t], Je);
    }
    function Kt(t) {
      const e = { name: t.getAttribute("name") || "", joints: {}, links: [] };
      for (let s = 0; s < t.childNodes.length; s++) {
        const n = t.childNodes[s];
        if (n.nodeType === 1) switch (n.nodeName) {
          case "technique_common":
            Xt(n, e);
            break;
        }
      }
      E.kinematicsModels[t.getAttribute("id")] = e;
    }
    function Yt(t) {
      return t.build !== void 0 ? t.build : t;
    }
    function Jt(t) {
      return I(E.kinematicsModels[t], Yt);
    }
    function Xt(t, e) {
      for (let s = 0; s < t.childNodes.length; s++) {
        const n = t.childNodes[s];
        if (n.nodeType === 1) switch (n.nodeName) {
          case "joint":
            e.joints[n.getAttribute("sid")] = Zt(n);
            break;
          case "link":
            e.links.push(Ze(n));
            break;
        }
      }
    }
    function Zt(t) {
      let e;
      for (let s = 0; s < t.childNodes.length; s++) {
        const n = t.childNodes[s];
        if (n.nodeType === 1) switch (n.nodeName) {
          case "prismatic":
          case "revolute":
            e = $t(n);
            break;
        }
      }
      return e;
    }
    function $t(t) {
      const e = { sid: t.getAttribute("sid"), name: t.getAttribute("name") || "", axis: new ke(), limits: { min: 0, max: 0 }, type: t.nodeName, static: false, zeroPosition: 0, middlePosition: 0 };
      for (let s = 0; s < t.childNodes.length; s++) {
        const n = t.childNodes[s];
        if (n.nodeType === 1) switch (n.nodeName) {
          case "axis":
            const i = y(n.textContent);
            e.axis.fromArray(i);
            break;
          case "limits":
            const o = n.getElementsByTagName("max")[0], r = n.getElementsByTagName("min")[0];
            e.limits.max = parseFloat(o.textContent), e.limits.min = parseFloat(r.textContent);
            break;
        }
      }
      return e.limits.min >= e.limits.max && (e.static = true), e.middlePosition = (e.limits.min + e.limits.max) / 2, e;
    }
    function Ze(t) {
      const e = { sid: t.getAttribute("sid"), name: t.getAttribute("name") || "", attachments: [], transforms: [] };
      for (let s = 0; s < t.childNodes.length; s++) {
        const n = t.childNodes[s];
        if (n.nodeType === 1) switch (n.nodeName) {
          case "attachment_full":
            e.attachments.push(Qt(n));
            break;
          case "matrix":
          case "translate":
          case "rotate":
            e.transforms.push($e(n));
            break;
        }
      }
      return e;
    }
    function Qt(t) {
      const e = { joint: t.getAttribute("joint").split("/").pop(), transforms: [], links: [] };
      for (let s = 0; s < t.childNodes.length; s++) {
        const n = t.childNodes[s];
        if (n.nodeType === 1) switch (n.nodeName) {
          case "link":
            e.links.push(Ze(n));
            break;
          case "matrix":
          case "translate":
          case "rotate":
            e.transforms.push($e(n));
            break;
        }
      }
      return e;
    }
    function $e(t) {
      const e = { type: t.nodeName }, s = y(t.textContent);
      switch (e.type) {
        case "matrix":
          e.obj = new pe(), e.obj.fromArray(s).transpose();
          break;
        case "translate":
          e.obj = new ke(), e.obj.fromArray(s);
          break;
        case "rotate":
          e.obj = new ke(), e.obj.fromArray(s), e.angle = _e.degToRad(s[3]);
          break;
      }
      return e;
    }
    function en(t) {
      const e = { name: t.getAttribute("name") || "", rigidBodies: {} };
      for (let s = 0; s < t.childNodes.length; s++) {
        const n = t.childNodes[s];
        if (n.nodeType === 1) switch (n.nodeName) {
          case "rigid_body":
            e.rigidBodies[n.getAttribute("name")] = {}, tn(n, e.rigidBodies[n.getAttribute("name")]);
            break;
        }
      }
      E.physicsModels[t.getAttribute("id")] = e;
    }
    function tn(t, e) {
      for (let s = 0; s < t.childNodes.length; s++) {
        const n = t.childNodes[s];
        if (n.nodeType === 1) switch (n.nodeName) {
          case "technique_common":
            nn(n, e);
            break;
        }
      }
    }
    function nn(t, e) {
      for (let s = 0; s < t.childNodes.length; s++) {
        const n = t.childNodes[s];
        if (n.nodeType === 1) switch (n.nodeName) {
          case "inertia":
            e.inertia = y(n.textContent);
            break;
          case "mass":
            e.mass = y(n.textContent)[0];
            break;
        }
      }
    }
    function sn(t) {
      const e = { bindJointAxis: [] };
      for (let s = 0; s < t.childNodes.length; s++) {
        const n = t.childNodes[s];
        if (n.nodeType === 1) switch (n.nodeName) {
          case "bind_joint_axis":
            e.bindJointAxis.push(on(n));
            break;
        }
      }
      E.kinematicsScenes[f(t.getAttribute("url"))] = e;
    }
    function on(t) {
      const e = { target: t.getAttribute("target").split("/").pop() };
      for (let s = 0; s < t.childNodes.length; s++) {
        const n = t.childNodes[s];
        if (n.nodeType === 1) switch (n.nodeName) {
          case "axis":
            const i = n.getElementsByTagName("param")[0];
            e.axis = i.textContent;
            const o = e.axis.split("inst_").pop().split("axis")[0];
            e.jointIndex = o.substring(0, o.length - 1);
            break;
        }
      }
      return e;
    }
    function rn(t) {
      return t.build !== void 0 ? t.build : t;
    }
    function an(t) {
      return I(E.kinematicsScenes[t], rn);
    }
    function cn() {
      const t = Object.keys(E.kinematicsModels)[0], e = Object.keys(E.kinematicsScenes)[0], s = Object.keys(E.visualScenes)[0];
      if (t === void 0 || e === void 0) return;
      const n = Jt(t), i = an(e), o = it(s), r = i.bindJointAxis, u = {};
      for (let b = 0, a = r.length; b < a; b++) {
        const m = r[b], p = se.querySelector('[sid="' + m.target + '"]');
        if (p) {
          const A = p.parentElement;
          c(m.jointIndex, A);
        }
      }
      function c(b, a) {
        const m = a.getAttribute("name"), p = n.joints[b];
        o.traverse(function(A) {
          A.name === m && (u[b] = { object: A, transforms: ln(a), joint: p, position: p.zeroPosition });
        });
      }
      const d = new pe();
      ct = { joints: n && n.joints, getJointValue: function(b) {
        const a = u[b];
        if (a) return a.position;
        console.warn("THREE.ColladaLoader: Joint " + b + " doesn't exist.");
      }, setJointValue: function(b, a) {
        const m = u[b];
        if (m) {
          const p = m.joint;
          if (a > p.limits.max || a < p.limits.min) console.warn("THREE.ColladaLoader: Joint " + b + " value " + a + " outside of limits (min: " + p.limits.min + ", max: " + p.limits.max + ").");
          else if (p.static) console.warn("THREE.ColladaLoader: Joint " + b + " is static.");
          else {
            const A = m.object, k = p.axis, Q = m.transforms;
            de.identity();
            for (let D = 0; D < Q.length; D++) {
              const B = Q[D];
              if (B.sid && B.sid.indexOf(b) !== -1) switch (p.type) {
                case "revolute":
                  de.multiply(d.makeRotationAxis(k, _e.degToRad(a)));
                  break;
                case "prismatic":
                  de.multiply(d.makeTranslation(k.x * a, k.y * a, k.z * a));
                  break;
                default:
                  console.warn("THREE.ColladaLoader: Unknown joint type: " + p.type);
                  break;
              }
              else switch (B.type) {
                case "matrix":
                  de.multiply(B.obj);
                  break;
                case "translate":
                  de.multiply(d.makeTranslation(B.obj.x, B.obj.y, B.obj.z));
                  break;
                case "scale":
                  de.scale(B.obj);
                  break;
                case "rotate":
                  de.multiply(d.makeRotationAxis(B.obj, B.angle));
                  break;
              }
            }
            A.matrix.copy(de), A.matrix.decompose(A.position, A.quaternion, A.scale), u[b].position = a;
          }
        } else console.log("THREE.ColladaLoader: " + b + " does not exist.");
      } };
    }
    function ln(t) {
      const e = [], s = se.querySelector('[id="' + t.id + '"]');
      for (let n = 0; n < s.childNodes.length; n++) {
        const i = s.childNodes[n];
        if (i.nodeType !== 1) continue;
        let o, r;
        switch (i.nodeName) {
          case "matrix":
            o = y(i.textContent);
            const u = new pe().fromArray(o).transpose();
            e.push({ sid: i.getAttribute("sid"), type: i.nodeName, obj: u });
            break;
          case "translate":
          case "scale":
            o = y(i.textContent), r = new ke().fromArray(o), e.push({ sid: i.getAttribute("sid"), type: i.nodeName, obj: r });
            break;
          case "rotate":
            o = y(i.textContent), r = new ke().fromArray(o);
            const c = _e.degToRad(o[3]);
            e.push({ sid: i.getAttribute("sid"), type: i.nodeName, obj: r, angle: c });
            break;
        }
      }
      return e;
    }
    function dn(t) {
      const e = t.getElementsByTagName("node");
      for (let s = 0; s < e.length; s++) {
        const n = e[s];
        n.hasAttribute("id") === false && n.setAttribute("id", N());
      }
    }
    const de = new pe(), xe = new ke();
    function Me(t) {
      const e = { name: t.getAttribute("name") || "", type: t.getAttribute("type"), id: t.getAttribute("id"), sid: t.getAttribute("sid"), matrix: new pe(), nodes: [], instanceCameras: [], instanceControllers: [], instanceLights: [], instanceGeometries: [], instanceNodes: [], transforms: {} };
      for (let s = 0; s < t.childNodes.length; s++) {
        const n = t.childNodes[s];
        if (n.nodeType !== 1) continue;
        let i;
        switch (n.nodeName) {
          case "node":
            e.nodes.push(n.getAttribute("id")), Me(n);
            break;
          case "instance_camera":
            e.instanceCameras.push(f(n.getAttribute("url")));
            break;
          case "instance_controller":
            e.instanceControllers.push(Qe(n));
            break;
          case "instance_light":
            e.instanceLights.push(f(n.getAttribute("url")));
            break;
          case "instance_geometry":
            e.instanceGeometries.push(Qe(n));
            break;
          case "instance_node":
            e.instanceNodes.push(f(n.getAttribute("url")));
            break;
          case "matrix":
            i = y(n.textContent), e.matrix.multiply(de.fromArray(i).transpose()), e.transforms[n.getAttribute("sid")] = n.nodeName;
            break;
          case "translate":
            i = y(n.textContent), xe.fromArray(i), e.matrix.multiply(de.makeTranslation(xe.x, xe.y, xe.z)), e.transforms[n.getAttribute("sid")] = n.nodeName;
            break;
          case "rotate":
            i = y(n.textContent);
            const o = _e.degToRad(i[3]);
            e.matrix.multiply(de.makeRotationAxis(xe.fromArray(i), o)), e.transforms[n.getAttribute("sid")] = n.nodeName;
            break;
          case "scale":
            i = y(n.textContent), e.matrix.scale(xe.fromArray(i)), e.transforms[n.getAttribute("sid")] = n.nodeName;
            break;
          case "extra":
            break;
          default:
            console.log(n);
        }
      }
      return nt(e.id) ? console.warn("THREE.ColladaLoader: There is already a node with ID %s. Exclude current node from further processing.", e.id) : E.nodes[e.id] = e, e;
    }
    function Qe(t) {
      const e = { id: f(t.getAttribute("url")), materials: {}, skeletons: [] };
      for (let s = 0; s < t.childNodes.length; s++) {
        const n = t.childNodes[s];
        switch (n.nodeName) {
          case "bind_material":
            const i = n.getElementsByTagName("instance_material");
            for (let o = 0; o < i.length; o++) {
              const r = i[o], u = r.getAttribute("symbol"), c = r.getAttribute("target");
              e.materials[u] = f(c);
            }
            break;
          case "skeleton":
            e.skeletons.push(f(n.textContent));
            break;
        }
      }
      return e;
    }
    function un(t, e) {
      const s = [], n = [];
      let i, o, r;
      for (i = 0; i < t.length; i++) {
        const d = t[i];
        let b;
        if (nt(d)) b = Te(d), et(b, e, s);
        else if (gn(d)) {
          const m = E.visualScenes[d].children;
          for (let p = 0; p < m.length; p++) {
            const A = m[p];
            if (A.type === "JOINT") {
              const k = Te(A.id);
              et(k, e, s);
            }
          }
        } else console.error("THREE.ColladaLoader: Unable to find root bone of skeleton with ID:", d);
      }
      for (i = 0; i < e.length; i++) for (o = 0; o < s.length; o++) if (r = s[o], r.bone.name === e[i].name) {
        n[i] = r, r.processed = true;
        break;
      }
      for (i = 0; i < s.length; i++) r = s[i], r.processed === false && (n.push(r), r.processed = true);
      const u = [], c = [];
      for (i = 0; i < n.length; i++) r = n[i], u.push(r.bone), c.push(r.boneInverse);
      return new zn(u, c);
    }
    function et(t, e, s) {
      t.traverse(function(n) {
        if (n.isBone === true) {
          let i;
          for (let o = 0; o < e.length; o++) {
            const r = e[o];
            if (r.name === n.name) {
              i = r.boneInverse;
              break;
            }
          }
          i === void 0 && (i = new pe()), s.push({ bone: n, boneInverse: i, processed: false });
        }
      });
    }
    function fn(t) {
      const e = [], s = t.matrix, n = t.nodes, i = t.type, o = t.instanceCameras, r = t.instanceControllers, u = t.instanceLights, c = t.instanceGeometries, d = t.instanceNodes;
      for (let a = 0, m = n.length; a < m; a++) e.push(Te(n[a]));
      for (let a = 0, m = o.length; a < m; a++) {
        const p = jt(o[a]);
        p !== null && e.push(p.clone());
      }
      for (let a = 0, m = r.length; a < m; a++) {
        const p = r[a], A = x(p.id), k = Xe(A.id), Q = tt(k, p.materials), D = p.skeletons, B = A.skin.joints, z = un(D, B);
        for (let ye = 0, ae = Q.length; ye < ae; ye++) {
          const Ee = Q[ye];
          Ee.isSkinnedMesh && (Ee.bind(z, A.skin.bindMatrix), Ee.normalizeSkinWeights()), e.push(Ee);
        }
      }
      for (let a = 0, m = u.length; a < m; a++) {
        const p = Pt(u[a]);
        p !== null && e.push(p.clone());
      }
      for (let a = 0, m = c.length; a < m; a++) {
        const p = c[a], A = Xe(p.id), k = tt(A, p.materials);
        for (let Q = 0, D = k.length; Q < D; Q++) e.push(k[Q]);
      }
      for (let a = 0, m = d.length; a < m; a++) e.push(Te(d[a]).clone());
      let b;
      if (n.length === 0 && e.length === 1) b = e[0];
      else {
        b = i === "JOINT" ? new Un() : new pt();
        for (let a = 0; a < e.length; a++) b.add(e[a]);
      }
      return b.name = i === "JOINT" ? t.sid : t.name, b.matrix.copy(s), b.matrix.decompose(b.position, b.quaternion, b.scale), b;
    }
    const hn = new dt({ name: qe.DEFAULT_MATERIAL_NAME, color: 16711935 });
    function pn(t, e) {
      const s = [];
      for (let n = 0, i = t.length; n < i; n++) {
        const o = e[t[n]];
        o === void 0 ? (console.warn("THREE.ColladaLoader: Material with key %s not found. Apply fallback material.", t[n]), s.push(hn)) : s.push(Rt(o));
      }
      return s;
    }
    function tt(t, e) {
      const s = [];
      for (const n in t) {
        const i = t[n], o = pn(i.materialKeys, e);
        if (o.length === 0 && (n === "lines" || n === "linestrips" ? o.push(new gt()) : o.push(new ft())), n === "lines" || n === "linestrips") for (let d = 0, b = o.length; d < b; d++) {
          const a = o[d];
          if (a.isMeshPhongMaterial === true || a.isMeshLambertMaterial === true) {
            const m = new gt();
            m.color.copy(a.color), m.opacity = a.opacity, m.transparent = a.transparent, o[d] = m;
          }
        }
        const r = i.data.attributes.skinIndex !== void 0, u = o.length === 1 ? o[0] : o;
        let c;
        switch (n) {
          case "lines":
            c = new Bn(i.data, u);
            break;
          case "linestrips":
            c = new Hn(i.data, u);
            break;
          case "triangles":
          case "polylist":
            r ? c = new Pn(i.data, u) : c = new Pe(i.data, u);
            break;
        }
        s.push(c);
      }
      return s;
    }
    function nt(t) {
      return E.nodes[t] !== void 0;
    }
    function Te(t) {
      return I(E.nodes[t], fn);
    }
    function mn(t) {
      const e = { name: t.getAttribute("name"), children: [] };
      dn(t);
      const s = w(t, "node");
      for (let n = 0; n < s.length; n++) e.children.push(Me(s[n]));
      E.visualScenes[t.getAttribute("id")] = e;
    }
    function st(t) {
      const e = new pt();
      e.name = t.name;
      const s = t.children;
      for (let n = 0; n < s.length; n++) {
        const i = s[n];
        e.add(Te(i.id));
      }
      return e;
    }
    function gn(t) {
      return E.visualScenes[t] !== void 0;
    }
    function it(t) {
      return I(E.visualScenes[t], st);
    }
    function bn(t) {
      const e = w(t, "instance_visual_scene")[0];
      return it(f(e.getAttribute("url")));
    }
    function yn() {
      const t = E.clips;
      if (S(t) === true) {
        if (S(E.animations) === false) {
          const e = [];
          for (const s in E.animations) {
            const n = ue(s);
            for (let i = 0, o = n.length; i < o; i++) e.push(n[i]);
          }
          ve.push(new ut("default", -1, e));
        }
      } else for (const e in t) ve.push(F(e));
    }
    function wn(t) {
      let e = "";
      const s = [t];
      for (; s.length; ) {
        const n = s.shift();
        n.nodeType === Node.TEXT_NODE ? e += n.textContent : (e += `
`, s.push.apply(s, n.childNodes));
      }
      return e.trim();
    }
    if (g.length === 0) return { scene: new _n() };
    const ot = new DOMParser().parseFromString(g, "application/xml"), se = w(ot, "COLLADA")[0], Ge = ot.getElementsByTagName("parsererror")[0];
    if (Ge !== void 0) {
      const t = w(Ge, "div")[0];
      let e;
      return t ? e = t.textContent : e = wn(Ge), console.error(`THREE.ColladaLoader: Failed to parse collada file.
`, e), null;
    }
    const kn = se.getAttribute("version");
    console.debug("THREE.ColladaLoader: File version", kn);
    const rt = _(w(se, "asset")[0]), at = new Cn(this.manager);
    at.setPath(this.resourcePath || G).setCrossOrigin(this.crossOrigin);
    let Oe;
    yt && (Oe = new yt(this.manager), Oe.setPath(this.resourcePath || G));
    const Ce = new Ue(), ve = [];
    let ct = {}, Nn = 0;
    const E = { animations: {}, clips: {}, controllers: {}, images: {}, effects: {}, materials: {}, cameras: {}, lights: {}, geometries: {}, nodes: {}, visualScenes: {}, kinematicsModels: {}, physicsModels: {}, kinematicsScenes: {} };
    v(se, "library_animations", "animation", ee), v(se, "library_animation_clips", "animation_clip", l), v(se, "library_controllers", "controller", W), v(se, "library_images", "image", h), v(se, "library_effects", "effect", fe), v(se, "library_materials", "material", Lt), v(se, "library_cameras", "camera", St), v(se, "library_lights", "light", qt), v(se, "library_geometries", "geometry", Ht), v(se, "library_nodes", "node", Me), v(se, "library_visual_scenes", "visual_scene", mn), v(se, "library_kinematics_models", "kinematics_model", Kt), v(se, "library_physics_models", "physics_model", en), v(se, "scene", "instance_kinematics_scene", sn), C(E.animations, re), C(E.clips, J), C(E.controllers, M), C(E.images, T), C(E.effects, De), C(E.materials, We), C(E.cameras, Ke), C(E.lights, Ye), C(E.geometries, Je), C(E.visualScenes, st), yn(), cn();
    const Le = bn(w(se, "scene")[0]);
    return Le.animations = ve, rt.upAxis === "Z_UP" && (console.warn("THREE.ColladaLoader: You are loading an asset with a Z-UP coordinate system. The loader just rotates the asset to transform it into Y-UP. The vertex data are not converted, see #24289."), Le.rotation.set(-Math.PI / 2, 0, 0)), Le.scale.multiplyScalar(rt.unit), { get animations() {
      return console.warn("THREE.ColladaLoader: Please access animations over scene.animations now."), ve;
    }, kinematics: ct, library: E, scene: Le };
  }
}
const Kn = new Dn(), Yn = new Wn(), Jn = new Vn();
async function Xn(O) {
  const g = await fetch(O);
  if (!g.ok) throw new Error(`Failed to fetch ${O}: ${g.status} ${g.statusText}`);
  return g.arrayBuffer();
}
function Zn(O, g = 1e3) {
  const G = O.getAttribute("position"), w = new Array(G.count * 3);
  for (let f = 0; f < G.count; f++) w[f * 3] = G.getX(f) * g, w[f * 3 + 1] = G.getY(f) * g, w[f * 3 + 2] = G.getZ(f) * g;
  let P;
  if (O.index) P = Array.from(O.index.array);
  else {
    P = new Array(G.count);
    for (let f = 0; f < G.count; f++) P[f] = f;
  }
  let y;
  const R = O.getAttribute("normal");
  if (R) {
    y = new Array(R.count * 3);
    for (let f = 0; f < R.count; f++) y[f * 3] = R.getX(f), y[f * 3 + 1] = R.getY(f), y[f * 3 + 2] = R.getZ(f);
  }
  return { positions: w, indices: P, normals: y };
}
async function $n(O) {
  const g = Kn.parse(O);
  return g.computeVertexNormals(), Zn(g);
}
async function Qn(O, g) {
  const G = new TextDecoder().decode(O), w = Yn.parse(G, g.slice(0, g.lastIndexOf("/") + 1));
  w.scene.matrix.identity(), w.scene.matrixAutoUpdate = false, w.scene.updateMatrixWorld(true);
  const P = [], y = [], R = [];
  let f = 0;
  const N = new pe();
  return w.scene.traverse((S) => {
    if (!(S instanceof Pe)) return;
    const _ = S.geometry, U = _.getAttribute("position");
    if (!U) return;
    const K = _.getAttribute("normal");
    N.copy(S.matrixWorld);
    const v = U.count;
    for (let C = 0; C < v; C++) {
      const I = U.getX(C), ee = U.getY(C), oe = U.getZ(C), ce = N.elements[0] * I + N.elements[4] * ee + N.elements[8] * oe + N.elements[12], re = N.elements[1] * I + N.elements[5] * ee + N.elements[9] * oe + N.elements[13], ue = N.elements[2] * I + N.elements[6] * ee + N.elements[10] * oe + N.elements[14];
      if (P.push(ce * 1e3, re * 1e3, ue * 1e3), K) {
        const ie = K.getX(C), Z = K.getY(C), ne = K.getZ(C), j = N.elements[0] * ie + N.elements[4] * Z + N.elements[8] * ne, q = N.elements[1] * ie + N.elements[5] * Z + N.elements[9] * ne, H = N.elements[2] * ie + N.elements[6] * Z + N.elements[10] * ne;
        R.push(j, q, H);
      }
    }
    if (_.index) {
      const C = _.index.array;
      for (let I = 0; I < C.length; I++) y.push(f + C[I]);
    } else for (let C = 0; C < v; C++) y.push(f + C);
    f += v;
  }), { positions: P, indices: y, normals: R.length === P.length ? R : void 0 };
}
async function es(O) {
  return new Promise((g, G) => {
    Jn.parse(O, "", (w) => {
      const P = [], y = [], R = [];
      let f = 0;
      const N = new pe();
      w.scene.updateMatrixWorld(true), w.scene.traverse((S) => {
        if (!(S instanceof Pe)) return;
        const _ = S.geometry, U = _.getAttribute("position");
        if (!U) return;
        const K = _.getAttribute("normal");
        N.copy(S.matrixWorld);
        for (let v = 0; v < U.count; v++) {
          const C = U.getX(v), I = U.getY(v), ee = U.getZ(v), oe = N.elements[0] * C + N.elements[4] * I + N.elements[8] * ee + N.elements[12], ce = N.elements[1] * C + N.elements[5] * I + N.elements[9] * ee + N.elements[13], re = N.elements[2] * C + N.elements[6] * I + N.elements[10] * ee + N.elements[14];
          P.push(oe * 1e3, ce * 1e3, re * 1e3), K && R.push(K.getX(v), K.getY(v), K.getZ(v));
        }
        if (_.index) {
          const v = _.index.array;
          for (let C = 0; C < v.length; C++) y.push(f + v[C]);
        } else for (let v = 0; v < U.count; v++) y.push(f + v);
        f += U.count;
      }), g({ positions: P, indices: y, normals: R.length === P.length ? R : void 0 });
    }, G);
  });
}
async function ts(O) {
  var _a;
  const g = ((_a = O.split(".").pop()) == null ? void 0 : _a.toLowerCase()) ?? "", G = await Xn(O);
  if (g === "stl") return $n(G);
  if (g === "dae") return Qn(G, O);
  if (g === "glb" || g === "gltf") return es(G);
  throw new Error(`Unsupported mesh extension: ${g} (${O})`);
}
async function cs(O) {
  const g = /* @__PURE__ */ new Map(), G = Object.entries(O);
  return await Promise.all(G.map(async ([w, P]) => {
    const y = await ts(P);
    g.set(w, y);
    const R = w.split("/").pop();
    R && R !== w && g.set(R, y);
    const f = w.replace(/^package:\/\/[^/]+\//, "");
    f !== w && g.set(f, y);
  })), g;
}
function ls(O, g) {
  let G = 0, w = 0;
  for (const P of Object.keys(O.nodes)) {
    const y = O.nodes[P], R = y.op;
    if (R.type !== "mesh_import" && R.type !== "MeshImport") continue;
    const f = R.path ?? "", N = ns(g, f);
    if (!N) {
      w++;
      continue;
    }
    const S = R.scale, _ = N.positions, U = S && (S.x !== 1 || S.y !== 1 || S.z !== 1) ? ss(_, [S.x, S.y, S.z]) : _;
    O.nodes[P] = { id: y.id, name: y.name, op: { type: "ImportedMesh", positions: U, indices: N.indices, normals: N.normals, source: f } }, G++;
  }
  w > 0 && console.warn(`[urdf-meshes] inlined ${G} mesh(es); ${w} reference(s) had no matching asset`);
}
function ns(O, g) {
  const G = O.get(g);
  if (G) return G;
  const w = g.replace(/^package:\/\/[^/]+\//, ""), P = O.get(w);
  if (P) return P;
  const y = g.split("/").pop();
  if (y) {
    const R = O.get(y);
    if (R) return R;
  }
}
function ss(O, g) {
  const G = new Array(O.length);
  for (let w = 0; w < O.length; w += 3) G[w] = O[w] * g[0], G[w + 1] = O[w + 1] * g[1], G[w + 2] = O[w + 2] * g[2];
  return G;
}
export {
  ls as inlineMeshImports,
  ts as loadMeshFromUrl,
  cs as loadUrdfMeshes
};
