var e = typeof window < `u` ? window : void 0, t = typeof globalThis < `u` ? globalThis : e;
typeof self > `u` && (t.self = t), typeof File > `u` && (t.File = function() {
});
var n = Array.prototype, r = n.forEach, i = n.indexOf, a = t == null ? void 0 : t.navigator, o = t == null ? void 0 : t.document, s = t == null ? void 0 : t.location, c = t == null ? void 0 : t.fetch, l = t != null && t.XMLHttpRequest && `withCredentials` in new t.XMLHttpRequest() ? t.XMLHttpRequest : void 0, u = t == null ? void 0 : t.AbortController, d = a == null ? void 0 : a.userAgent, f = e ?? {}, p = { DEBUG: false, LIB_VERSION: `1.341.0` };
function m(e3, t4, n2, r2, i2, a2, o2) {
  try {
    var s2 = e3[a2](o2), c2 = s2.value;
  } catch (e4) {
    n2(e4);
    return;
  }
  s2.done ? t4(c2) : Promise.resolve(c2).then(r2, i2);
}
function h(e3) {
  return function() {
    var t4 = this, n2 = arguments;
    return new Promise((function(r2, i2) {
      var a2 = e3.apply(t4, n2);
      function o2(e4) {
        m(a2, r2, i2, o2, s2, `next`, e4);
      }
      function s2(e4) {
        m(a2, r2, i2, o2, s2, `throw`, e4);
      }
      o2(void 0);
    }));
  };
}
function g() {
  return g = Object.assign ? Object.assign.bind() : function(e3) {
    for (var t4 = 1; t4 < arguments.length; t4++) {
      var n2 = arguments[t4];
      for (var r2 in n2) ({}).hasOwnProperty.call(n2, r2) && (e3[r2] = n2[r2]);
    }
    return e3;
  }, g.apply(null, arguments);
}
function _(e3, t4) {
  if (e3 == null) return {};
  var n2 = {};
  for (var r2 in e3) if ({}.hasOwnProperty.call(e3, r2)) {
    if (t4.indexOf(r2) !== -1) continue;
    n2[r2] = e3[r2];
  }
  return n2;
}
var v = `amazonbot,amazonproductbot,app.hypefactors.com,applebot,archive.org_bot,awariobot,backlinksextendedbot,baiduspider,bingbot,bingpreview,chrome-lighthouse,dataforseobot,deepscan,duckduckbot,facebookexternal,facebookcatalog,http://yandex.com/bots,hubspot,ia_archiver,leikibot,linkedinbot,meta-externalagent,mj12bot,msnbot,nessus,petalbot,pinterest,prerender,rogerbot,screaming frog,sebot-wa,sitebulb,slackbot,slurp,trendictionbot,turnitin,twitterbot,vercel-screenshot,vercelbot,yahoo! slurp,yandexbot,zoombot,bot.htm,bot.php,(bot;,bot/,crawler,ahrefsbot,ahrefssiteaudit,semrushbot,siteauditbot,splitsignalbot,gptbot,oai-searchbot,chatgpt-user,perplexitybot,better uptime bot,sentryuptimebot,uptimerobot,headlesschrome,cypress,google-hoteladsverifier,adsbot-google,apis-google,duplexweb-google,feedfetcher-google,google favicon,google web preview,google-read-aloud,googlebot,googleother,google-cloudvertexbot,googleweblight,mediapartners-google,storebot-google,google-inspectiontool,bytespider`.split(`,`), y = function(e3, t4) {
  if (t4 === void 0 && (t4 = []), !e3) return false;
  var n2 = e3.toLowerCase();
  return v.concat(t4).some(((e4) => {
    var t5 = e4.toLowerCase();
    return n2.indexOf(t5) !== -1;
  }));
}, ee = [`$snapshot`, `$pageview`, `$pageleave`, `$set`, `survey dismissed`, `survey sent`, `survey shown`, `$identify`, `$groupidentify`, `$create_alias`, `$$client_ingestion_warning`, `$web_experiment_applied`, `$feature_enrollment_update`, `$feature_flag_called`];
function b(e3, t4) {
  return e3.indexOf(t4) !== -1;
}
var x = function(e3) {
  return e3.trim();
}, S = function(e3) {
  return e3.replace(/^\$/, ``);
}, C = Array.isArray, te = Object.prototype, w = te.hasOwnProperty, ne = te.toString, T = C || function(e3) {
  return ne.call(e3) === `[object Array]`;
}, E = (e3) => typeof e3 == `function`, D = (e3) => e3 === Object(e3) && !T(e3), O = (e3) => {
  if (D(e3)) {
    for (var t4 in e3) if (w.call(e3, t4)) return false;
    return true;
  }
  return false;
}, k = (e3) => e3 === void 0, A = (e3) => ne.call(e3) == `[object String]`, j = (e3) => A(e3) && e3.trim().length === 0, M = (e3) => e3 === null, N = (e3) => k(e3) || M(e3), P = (e3) => ne.call(e3) == `[object Number]` && e3 == e3, F = (e3) => P(e3) && e3 > 0, I = (e3) => ne.call(e3) === `[object Boolean]`, L = (e3) => e3 instanceof FormData, R = (e3) => b(ee, e3);
function re(e3) {
  return typeof e3 != `object` || !e3;
}
function ie(e3, t4) {
  return Object.prototype.toString.call(e3) === `[object ` + t4 + `]`;
}
function ae(e3) {
  return !k(Event) && (function(e4, t4) {
    try {
      return e4 instanceof t4;
    } catch {
      return false;
    }
  })(e3, Event);
}
var oe = [true, `true`, 1, `1`, `yes`], se = (e3) => b(oe, e3), ce = [false, `false`, 0, `0`, `no`];
function z(e3, t4, n2, r2, i2) {
  return t4 > n2 && (r2.warn(`min cannot be greater than max.`), t4 = n2), P(e3) ? e3 > n2 ? (r2.warn(` cannot be  greater than max: ` + n2 + `. Using max value instead.`), n2) : e3 < t4 ? (r2.warn(` cannot be less than min: ` + t4 + `. Using min value instead.`), t4) : e3 : (r2.warn(` must be a number. using max or fallback. max: ` + n2 + `, fallback: ` + i2), z(i2 || n2, t4, n2, r2));
}
var le = class {
  constructor(e3) {
    this.t = {}, this.i = e3.i, this.o = z(e3.bucketSize, 0, 100, e3.h), this.m = z(e3.refillRate, 0, this.o, e3.h), this.$ = z(e3.refillInterval, 0, 864e5, e3.h);
  }
  S(e3, t4) {
    var n2 = t4 - e3.lastAccess, r2 = Math.floor(n2 / this.$);
    if (r2 > 0) {
      var i2 = r2 * this.m;
      e3.tokens = Math.min(e3.tokens + i2, this.o), e3.lastAccess += r2 * this.$;
    }
  }
  consumeRateLimit(e3) {
    var t4, n2 = Date.now(), r2 = String(e3), i2 = this.t[r2];
    return i2 ? this.S(i2, n2) : (i2 = { tokens: this.o, lastAccess: n2 }, this.t[r2] = i2), i2.tokens === 0 || (i2.tokens--, i2.tokens === 0 && ((t4 = this.i) == null || t4.call(this, e3)), i2.tokens === 0);
  }
  stop() {
    this.t = {};
  }
}, B = `Mobile`, ue = `iOS`, de = `Android`, fe = `Tablet`, pe = de + ` ` + fe, me = `iPad`, he = `Apple`, ge = he + ` Watch`, _e = `Safari`, ve = `BlackBerry`, ye = `Samsung`, be = ye + `Browser`, xe = ye + ` Internet`, Se = `Chrome`, Ce = Se + ` OS`, we = Se + ` ` + ue, Te = `Internet Explorer`, Ee = Te + ` ` + B, De = `Opera`, Oe = De + ` Mini`, ke = `Edge`, Ae = `Microsoft ` + ke, je = `Firefox`, Me = je + ` ` + ue, Ne = `Nintendo`, Pe = `PlayStation`, Fe = `Xbox`, Ie = de + ` ` + B, Le = B + ` ` + _e, Re = `Windows`, ze = Re + ` Phone`, Be = `Nokia`, Ve = `Ouya`, He = `Generic`, Ue = He + ` ` + B.toLowerCase(), We = He + ` ` + fe.toLowerCase(), Ge = `Konqueror`, V = `(\\d+(\\.\\d+)?)`, Ke = RegExp(`Version/` + V), qe = new RegExp(Fe, `i`), Je = RegExp(Pe + ` \\w+`, `i`), Ye = RegExp(Ne + ` \\w+`, `i`), Xe = RegExp(ve + `|PlayBook|BB10`, `i`), Ze = { "NT3.51": `NT 3.11`, "NT4.0": `NT 4.0`, "5.0": `2000`, 5.1: `XP`, 5.2: `XP`, "6.0": `Vista`, 6.1: `7`, 6.2: `8`, 6.3: `8.1`, 6.4: `10`, "10.0": `10` }, Qe, $e, et, tt = (e3, t4) => t4 && b(t4, he) || (function(e4) {
  return b(e4, _e) && !b(e4, Se) && !b(e4, de);
})(e3), nt = function(e3, t4) {
  return t4 || (t4 = ``), b(e3, ` OPR/`) && b(e3, `Mini`) ? Oe : b(e3, ` OPR/`) ? De : Xe.test(e3) ? ve : b(e3, `IE` + B) || b(e3, `WPDesktop`) ? Ee : b(e3, be) ? xe : b(e3, ke) || b(e3, `Edg/`) ? Ae : b(e3, `FBIOS`) ? `Facebook ` + B : b(e3, `UCWEB`) || b(e3, `UCBrowser`) ? `UC Browser` : b(e3, `CriOS`) ? we : b(e3, `CrMo`) || b(e3, Se) ? Se : b(e3, de) && b(e3, _e) ? Ie : b(e3, `FxiOS`) ? Me : b(e3.toLowerCase(), Ge.toLowerCase()) ? Ge : tt(e3, t4) ? b(e3, B) ? Le : _e : b(e3, je) ? je : b(e3, `MSIE`) || b(e3, `Trident/`) ? Te : b(e3, `Gecko`) ? je : ``;
}, rt = { [Ee]: [RegExp(`rv:` + V)], [Ae]: [RegExp(ke + `?\\/` + V)], [Se]: [RegExp(`(` + Se + `|CrMo)\\/` + V)], [we]: [RegExp(`CriOS\\/` + V)], "UC Browser": [RegExp(`(UCBrowser|UCWEB)\\/` + V)], [_e]: [Ke], [Le]: [Ke], [De]: [RegExp(`(Opera|OPR)\\/` + V)], [je]: [RegExp(je + `\\/` + V)], [Me]: [RegExp(`FxiOS\\/` + V)], [Ge]: [RegExp(`Konqueror[:/]?` + V, `i`)], [ve]: [RegExp(ve + ` ` + V), Ke], [Ie]: [RegExp(`android\\s` + V, `i`)], [xe]: [RegExp(be + `\\/` + V)], [Te]: [RegExp(`(rv:|MSIE )` + V)], Mozilla: [RegExp(`rv:` + V)] }, it = function(e3, t4) {
  var n2 = rt[nt(e3, t4)];
  if (k(n2)) return null;
  for (var r2 = 0; r2 < n2.length; r2++) {
    var i2 = n2[r2], a2 = e3.match(i2);
    if (a2) return parseFloat(a2[a2.length - 2]);
  }
  return null;
}, at = [[RegExp(Fe + `; ` + Fe + ` (.*?)[);]`, `i`), (e3) => [Fe, e3 && e3[1] || ``]], [new RegExp(Ne, `i`), [Ne, ``]], [new RegExp(Pe, `i`), [Pe, ``]], [Xe, [ve, ``]], [new RegExp(Re, `i`), (e3, t4) => {
  if (/Phone/.test(t4) || /WPDesktop/.test(t4)) return [ze, ``];
  if (new RegExp(B).test(t4) && !/IEMobile\b/.test(t4)) return [Re + ` ` + B, ``];
  var n2 = /Windows NT ([0-9.]+)/i.exec(t4);
  if (n2 && n2[1]) {
    var r2 = Ze[n2[1]] || ``;
    return /arm/i.test(t4) && (r2 = `RT`), [Re, r2];
  }
  return [Re, ``];
}], [/((iPhone|iPad|iPod).*?OS (\d+)_(\d+)_?(\d+)?|iPhone)/, (e3) => e3 && e3[3] ? [ue, [e3[3], e3[4], e3[5] || `0`].join(`.`)] : [ue, ``]], [/(watch.*\/(\d+\.\d+\.\d+)|watch os,(\d+\.\d+),)/i, (e3) => {
  var t4 = ``;
  return e3 && e3.length >= 3 && (t4 = k(e3[2]) ? e3[3] : e3[2]), [`watchOS`, t4];
}], [RegExp(`(` + de + ` (\\d+)\\.(\\d+)\\.?(\\d+)?|` + de + `)`, `i`), (e3) => e3 && e3[2] ? [de, [e3[2], e3[3], e3[4] || `0`].join(`.`)] : [de, ``]], [/Mac OS X (\d+)[_.](\d+)[_.]?(\d+)?/i, (e3) => {
  var t4 = [`Mac OS X`, ``];
  return e3 && e3[1] && (t4[1] = [e3[1], e3[2], e3[3] || `0`].join(`.`)), t4;
}], [/Mac/i, [`Mac OS X`, ``]], [/CrOS/, [Ce, ``]], [/Linux|debian/i, [`Linux`, ``]]], ot = function(e3) {
  return Ye.test(e3) ? Ne : Je.test(e3) ? Pe : qe.test(e3) ? Fe : new RegExp(Ve, `i`).test(e3) ? Ve : RegExp(`(` + ze + `|WPDesktop)`, `i`).test(e3) ? ze : /iPad/.test(e3) ? me : /iPod/.test(e3) ? `iPod Touch` : /iPhone/.test(e3) ? `iPhone` : /(watch)(?: ?os[,/]|\d,\d\/)[\d.]+/i.test(e3) ? ge : Xe.test(e3) ? ve : /(kobo)\s(ereader|touch)/i.test(e3) ? `Kobo` : new RegExp(Be, `i`).test(e3) ? Be : /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i.test(e3) || /(kf[a-z]+)( bui|\)).+silk\//i.test(e3) ? `Kindle Fire` : /(Android|ZTE)/i.test(e3) ? new RegExp(B).test(e3) && !/(9138B|TB782B|Nexus [97]|pixel c|HUAWEISHT|BTV|noble nook|smart ultra 6)/i.test(e3) || /pixel[\daxl ]{1,6}/i.test(e3) && !/pixel c/i.test(e3) || /(huaweimed-al00|tah-|APA|SM-G92|i980|zte|U304AA)/i.test(e3) || /lmy47v/i.test(e3) && !/QTAQZ3/i.test(e3) ? de : pe : RegExp(`(pda|` + B + `)`, `i`).test(e3) ? Ue : new RegExp(fe, `i`).test(e3) && !RegExp(fe + ` pc`, `i`).test(e3) ? We : ``;
}, st = (e3) => e3 instanceof Error;
function ct(e3) {
  var t4 = globalThis._posthogChunkIds;
  if (t4) {
    var n2 = Object.keys(t4);
    return et && n2.length === $e || ($e = n2.length, et = n2.reduce(((n3, r2) => {
      var _a2;
      Qe || (Qe = {});
      var i2 = Qe[r2];
      if (i2) n3[i2[0]] = i2[1];
      else for (var a2 = e3(r2), o2 = a2.length - 1; o2 >= 0; o2--) {
        var s2 = (_a2 = a2[o2]) == null ? void 0 : _a2.filename, c2 = t4[r2];
        if (s2 && c2) {
          n3[s2] = c2, Qe[r2] = [s2, c2];
          break;
        }
      }
      return n3;
    }), {})), et;
  }
}
var lt = class {
  constructor(e3, t4, n2) {
    n2 === void 0 && (n2 = []), this.coercers = e3, this.stackParser = t4, this.modifiers = n2;
  }
  buildFromUnknown(e3, t4) {
    t4 === void 0 && (t4 = {});
    var n2 = t4 && t4.mechanism || { handled: true, type: `generic` }, r2 = this.buildCoercingContext(n2, t4, 0).apply(e3), i2 = this.buildParsingContext(), a2 = this.parseStacktrace(r2, i2);
    return { $exception_list: this.convertToExceptionList(a2, n2), $exception_level: `error` };
  }
  modifyFrames(e3) {
    var t4 = this;
    return h((function* () {
      for (var n2 of e3) n2.stacktrace && n2.stacktrace.frames && T(n2.stacktrace.frames) && (n2.stacktrace.frames = yield t4.applyModifiers(n2.stacktrace.frames));
      return e3;
    }))();
  }
  coerceFallback(e3) {
    var _a2;
    return { type: `Error`, value: `Unknown error`, stack: (_a2 = e3.syntheticException) == null ? void 0 : _a2.stack, synthetic: true };
  }
  parseStacktrace(e3, t4) {
    var n2, r2;
    return e3.cause != null && (n2 = this.parseStacktrace(e3.cause, t4)), e3.stack != `` && e3.stack != null && (r2 = this.applyChunkIds(this.stackParser(e3.stack, +!!e3.synthetic), t4.chunkIdMap)), g({}, e3, { cause: n2, stack: r2 });
  }
  applyChunkIds(e3, t4) {
    return e3.map(((e4) => (e4.filename && t4 && (e4.chunk_id = t4[e4.filename]), e4)));
  }
  applyCoercers(e3, t4) {
    for (var n2 of this.coercers) if (n2.match(e3)) return n2.coerce(e3, t4);
    return this.coerceFallback(t4);
  }
  applyModifiers(e3) {
    var t4 = this;
    return h((function* () {
      var n2 = e3;
      for (var r2 of t4.modifiers) n2 = yield r2(n2);
      return n2;
    }))();
  }
  convertToExceptionList(e3, t4) {
    var n2, r2, i2 = { type: e3.type, value: e3.value, mechanism: { type: t4.type ?? `generic`, handled: (n2 = t4.handled) == null || n2, synthetic: (r2 = e3.synthetic) != null && r2 } };
    e3.stack && (i2.stacktrace = { type: `raw`, frames: e3.stack });
    var a2 = [i2];
    return e3.cause != null && a2.push(...this.convertToExceptionList(e3.cause, g({}, t4, { handled: true }))), a2;
  }
  buildParsingContext() {
    return { chunkIdMap: ct(this.stackParser) };
  }
  buildCoercingContext(e3, t4, n2) {
    n2 === void 0 && (n2 = 0);
    var r2 = (n3, r3) => {
      if (r3 <= 4) {
        var i2 = this.buildCoercingContext(e3, t4, r3);
        return this.applyCoercers(n3, i2);
      }
    };
    return g({}, t4, { syntheticException: n2 == 0 ? t4.syntheticException : void 0, mechanism: e3, apply: (e4) => r2(e4, n2), next: (e4) => r2(e4, n2 + 1) });
  }
}, ut = `?`;
function dt(e3, t4, n2, r2, i2) {
  var a2 = { platform: e3, filename: t4, function: n2 === `<anonymous>` ? ut : n2, in_app: true };
  return k(r2) || (a2.lineno = r2), k(i2) || (a2.colno = i2), a2;
}
var ft = (e3, t4) => {
  var n2 = e3.indexOf(`safari-extension`) !== -1, r2 = e3.indexOf(`safari-web-extension`) !== -1;
  return n2 || r2 ? [e3.indexOf(`@`) === -1 ? ut : e3.split(`@`)[0], n2 ? `safari-extension:` + t4 : `safari-web-extension:` + t4] : [e3, t4];
}, pt = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i, mt = /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i, ht = /\((\S*)(?::(\d+))(?::(\d+))\)/, gt = (e3, t4) => {
  var n2 = pt.exec(e3);
  if (n2) {
    var [, r2, i2, a2] = n2;
    return dt(t4, r2, ut, +i2, +a2);
  }
  var o2 = mt.exec(e3);
  if (o2) {
    if (o2[2] && o2[2].indexOf(`eval`) === 0) {
      var s2 = ht.exec(o2[2]);
      s2 && (o2[2] = s2[1], o2[3] = s2[2], o2[4] = s2[3]);
    }
    var [c2, l2] = ft(o2[1] || ut, o2[2]);
    return dt(t4, l2, c2, o2[3] ? +o2[3] : void 0, o2[4] ? +o2[4] : void 0);
  }
}, _t = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i, vt = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i, yt = (e3, t4) => {
  var n2 = _t.exec(e3);
  if (n2) {
    if (n2[3] && n2[3].indexOf(` > eval`) > -1) {
      var r2 = vt.exec(n2[3]);
      r2 && (n2[1] = n2[1] || `eval`, n2[3] = r2[1], n2[4] = r2[2], n2[5] = ``);
    }
    var i2 = n2[3], a2 = n2[1] || ut;
    return [a2, i2] = ft(a2, i2), dt(t4, i2, a2, n2[4] ? +n2[4] : void 0, n2[5] ? +n2[5] : void 0);
  }
}, bt = /\(error: (.*)\)/, xt = 50;
function St() {
  return (function(e3) {
    var t4 = [...arguments].slice(1);
    return function(n2, r2) {
      r2 === void 0 && (r2 = 0);
      for (var i2 = [], a2 = n2.split(`
`), o2 = r2; o2 < a2.length; o2++) {
        var s2 = a2[o2];
        if (!(s2.length > 1024)) {
          var c2 = bt.test(s2) ? s2.replace(bt, `$1`) : s2;
          if (!c2.match(/\S*Error: /)) {
            for (var l2 of t4) {
              var u2 = l2(c2, e3);
              if (u2) {
                i2.push(u2);
                break;
              }
            }
            if (i2.length >= xt) break;
          }
        }
      }
      return (function(e4) {
        if (!e4.length) return [];
        var t5 = Array.from(e4);
        return t5.reverse(), t5.slice(0, xt).map(((e5) => {
          return g({}, e5, { filename: e5.filename || (n3 = t5, n3[n3.length - 1] || {}).filename, function: e5.function || ut });
          var n3;
        }));
      })(i2);
    };
  })(`web:javascript`, gt, yt);
}
var Ct = class {
  match(e3) {
    return this.isDOMException(e3) || this.isDOMError(e3);
  }
  coerce(e3, t4) {
    var n2 = A(e3.stack);
    return { type: this.getType(e3), value: this.getValue(e3), stack: n2 ? e3.stack : void 0, cause: e3.cause ? t4.next(e3.cause) : void 0, synthetic: false };
  }
  getType(e3) {
    return this.isDOMError(e3) ? `DOMError` : `DOMException`;
  }
  getValue(e3) {
    var t4 = e3.name || (this.isDOMError(e3) ? `DOMError` : `DOMException`);
    return e3.message ? t4 + `: ` + e3.message : t4;
  }
  isDOMException(e3) {
    return ie(e3, `DOMException`);
  }
  isDOMError(e3) {
    return ie(e3, `DOMError`);
  }
}, wt = class {
  match(e3) {
    return ((e4) => e4 instanceof Error)(e3);
  }
  coerce(e3, t4) {
    return { type: this.getType(e3), value: this.getMessage(e3, t4), stack: this.getStack(e3), cause: e3.cause ? t4.next(e3.cause) : void 0, synthetic: false };
  }
  getType(e3) {
    return e3.name || e3.constructor.name;
  }
  getMessage(e3, t4) {
    var n2 = e3.message;
    return n2.error && typeof n2.error.message == `string` ? String(n2.error.message) : String(n2);
  }
  getStack(e3) {
    return e3.stacktrace || e3.stack || void 0;
  }
}, Tt = class {
  constructor() {
  }
  match(e3) {
    return ie(e3, `ErrorEvent`) && e3.error != null;
  }
  coerce(e3, t4) {
    var _a2;
    return t4.apply(e3.error) || { type: `ErrorEvent`, value: e3.message, stack: (_a2 = t4.syntheticException) == null ? void 0 : _a2.stack, synthetic: true };
  }
}, Et = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i, Dt = class {
  match(e3) {
    return typeof e3 == `string`;
  }
  coerce(e3, t4) {
    var _a2;
    var [n2, r2] = this.getInfos(e3);
    return { type: n2 ?? `Error`, value: r2 ?? e3, stack: (_a2 = t4.syntheticException) == null ? void 0 : _a2.stack, synthetic: true };
  }
  getInfos(e3) {
    var t4 = `Error`, n2 = e3, r2 = e3.match(Et);
    return r2 && (t4 = r2[1], n2 = r2[2]), [t4, n2];
  }
}, Ot = [`fatal`, `error`, `warning`, `log`, `info`, `debug`];
function kt(e3, t4) {
  t4 === void 0 && (t4 = 40);
  var n2 = Object.keys(e3);
  if (n2.sort(), !n2.length) return `[object has no keys]`;
  for (var r2 = n2.length; r2 > 0; r2--) {
    var i2 = n2.slice(0, r2).join(`, `);
    if (!(i2.length > t4)) return r2 === n2.length || i2.length <= t4 ? i2 : i2.slice(0, t4) + `...`;
  }
  return ``;
}
var At = class {
  match(e3) {
    return typeof e3 == `object` && !!e3;
  }
  coerce(e3, t4) {
    var _a2;
    var n2 = this.getErrorPropertyFromObject(e3);
    return n2 ? t4.apply(n2) : { type: this.getType(e3), value: this.getValue(e3), stack: (_a2 = t4.syntheticException) == null ? void 0 : _a2.stack, level: this.isSeverityLevel(e3.level) ? e3.level : `error`, synthetic: true };
  }
  getType(e3) {
    return ae(e3) ? e3.constructor.name : `Error`;
  }
  getValue(e3) {
    if (`name` in e3 && typeof e3.name == `string`) {
      var t4 = `'` + e3.name + `' captured as exception`;
      return `message` in e3 && typeof e3.message == `string` && (t4 += ` with message: '` + e3.message + `'`), t4;
    }
    if (`message` in e3 && typeof e3.message == `string`) return e3.message;
    var n2 = this.getObjectClassName(e3);
    return (n2 && n2 !== `Object` ? `'` + n2 + `'` : `Object`) + ` captured as exception with keys: ` + kt(e3);
  }
  isSeverityLevel(e3) {
    return A(e3) && !j(e3) && Ot.indexOf(e3) >= 0;
  }
  getErrorPropertyFromObject(e3) {
    for (var t4 in e3) if (Object.prototype.hasOwnProperty.call(e3, t4)) {
      var n2 = e3[t4];
      if (st(n2)) return n2;
    }
  }
  getObjectClassName(e3) {
    try {
      var t4 = Object.getPrototypeOf(e3);
      return t4 ? t4.constructor.name : void 0;
    } catch {
      return;
    }
  }
}, jt = class {
  match(e3) {
    return ae(e3);
  }
  coerce(e3, t4) {
    var _a2;
    var n2 = e3.constructor.name;
    return { type: n2, value: n2 + ` captured as exception with keys: ` + kt(e3), stack: (_a2 = t4.syntheticException) == null ? void 0 : _a2.stack, synthetic: true };
  }
}, Mt = class {
  match(e3) {
    return re(e3);
  }
  coerce(e3, t4) {
    var _a2;
    return { type: `Error`, value: `Primitive value captured as exception: ` + String(e3), stack: (_a2 = t4.syntheticException) == null ? void 0 : _a2.stack, synthetic: true };
  }
}, Nt = class {
  match(e3) {
    return ie(e3, `PromiseRejectionEvent`);
  }
  coerce(e3, t4) {
    var _a2;
    var n2 = this.getUnhandledRejectionReason(e3);
    return re(n2) ? { type: `UnhandledRejection`, value: `Non-Error promise rejection captured with value: ` + String(n2), stack: (_a2 = t4.syntheticException) == null ? void 0 : _a2.stack, synthetic: true } : t4.apply(n2);
  }
  getUnhandledRejectionReason(e3) {
    if (re(e3)) return e3;
    try {
      if (`reason` in e3) return e3.reason;
      if (`detail` in e3 && `reason` in e3.detail) return e3.detail.reason;
    } catch {
    }
    return e3;
  }
}, Pt = function(t4, n2) {
  var { debugEnabled: r2 } = n2 === void 0 ? {} : n2, i2 = { k: function(n3) {
    if (e && (p.DEBUG || f.POSTHOG_DEBUG || r2) && !k(e.console) && e.console) {
      for (var i3 = (`__rrweb_original__` in e.console[n3]) ? e.console[n3].__rrweb_original__ : e.console[n3], a2 = arguments.length, o2 = Array(a2 > 1 ? a2 - 1 : 0), s2 = 1; s2 < a2; s2++) o2[s2 - 1] = arguments[s2];
      i3(t4, ...o2);
    }
  }, info: function() {
    var e3 = [...arguments];
    i2.k(`log`, ...e3);
  }, warn: function() {
    var e3 = [...arguments];
    i2.k(`warn`, ...e3);
  }, error: function() {
    var e3 = [...arguments];
    i2.k(`error`, ...e3);
  }, critical: function() {
    console.error(t4, ...arguments);
  }, uninitializedWarning: (e3) => {
    i2.error(`You must initialize PostHog before calling ` + e3);
  }, createLogger: (e3, n3) => Pt(t4 + ` ` + e3, n3) };
  return i2;
}, H = Pt(`[PostHog.js]`), U = H.createLogger, Ft = U(`[ExternalScriptsLoader]`), It = (e3, t4, n2) => {
  if (e3.config.disable_external_dependency_loading) return Ft.warn(t4 + ` was requested but loading of external scripts is disabled.`), n2(`Loading of external scripts is disabled`);
  var r2 = o == null ? void 0 : o.querySelectorAll(`script`);
  if (r2) {
    for (var i2, a2 = function() {
      if (r2[s2].src === t4) {
        var e4 = r2[s2];
        return e4.__posthog_loading_callback_fired ? { v: n2() } : (e4.addEventListener(`load`, ((t5) => {
          e4.__posthog_loading_callback_fired = true, n2(void 0, t5);
        })), e4.onerror = (e5) => n2(e5), { v: void 0 });
      }
    }, s2 = 0; s2 < r2.length; s2++) if (i2 = a2()) return i2.v;
  }
  var c2 = () => {
    if (!o) return n2(`document not found`);
    var r3 = o.createElement(`script`);
    if (r3.type = `text/javascript`, r3.crossOrigin = `anonymous`, r3.src = t4, r3.onload = (e4) => {
      r3.__posthog_loading_callback_fired = true, n2(void 0, e4);
    }, r3.onerror = (e4) => n2(e4), e3.config.prepare_external_dependency_script && (r3 = e3.config.prepare_external_dependency_script(r3)), !r3) return n2(`prepare_external_dependency_script returned null`);
    if (e3.config.external_scripts_inject_target === `head`) o.head.appendChild(r3);
    else {
      var i3, a3 = o.querySelectorAll(`body > script`);
      a3.length > 0 ? (i3 = a3[0].parentNode) == null || i3.insertBefore(r3, a3[0]) : o.body.appendChild(r3);
    }
  };
  o != null && o.body ? c2() : o == null ? void 0 : o.addEventListener(`DOMContentLoaded`, c2);
};
f.__PosthogExtensions__ = f.__PosthogExtensions__ || {}, f.__PosthogExtensions__.loadExternalDependency = (e3, t4, n2) => {
  var r2 = `/static/` + t4 + `.js?v=` + e3.version;
  if (t4 === `remote-config` && (r2 = `/array/` + e3.config.token + `/config.js`), t4 === `toolbar`) {
    var i2 = 3e5;
    r2 = r2 + `&t=` + Math.floor(Date.now() / i2) * i2;
  }
  It(e3, e3.requestRouter.endpointFor(`assets`, r2), n2);
}, f.__PosthogExtensions__.loadSiteApp = (e3, t4, n2) => {
  It(e3, e3.requestRouter.endpointFor(`api`, t4), n2);
};
var Lt = {};
function Rt(e3, t4, n2) {
  if (T(e3)) {
    if (r && e3.forEach === r) e3.forEach(t4, n2);
    else if (`length` in e3 && e3.length === +e3.length) {
      for (var i2 = 0, a2 = e3.length; i2 < a2; i2++) if (i2 in e3 && t4.call(n2, e3[i2], i2) === Lt) return;
    }
  }
}
function W(e3, t4, n2) {
  if (!N(e3)) {
    if (T(e3)) return Rt(e3, t4, n2);
    if (L(e3)) {
      for (var r2 of e3.entries()) if (t4.call(n2, r2[1], r2[0]) === Lt) return;
    } else for (var i2 in e3) if (w.call(e3, i2) && t4.call(n2, e3[i2], i2) === Lt) return;
  }
}
var G = function(e3) {
  return Rt([...arguments].slice(1), (function(t4) {
    for (var n2 in t4) t4[n2] !== void 0 && (e3[n2] = t4[n2]);
  })), e3;
}, zt = function(e3) {
  return Rt([...arguments].slice(1), (function(t4) {
    Rt(t4, (function(t5) {
      e3.push(t5);
    }));
  })), e3;
};
function Bt(e3) {
  for (var t4 = Object.keys(e3), n2 = t4.length, r2 = Array(n2); n2--; ) r2[n2] = [t4[n2], e3[t4[n2]]];
  return r2;
}
var Vt = function(e3) {
  try {
    return e3();
  } catch {
    return;
  }
}, Ht = function(e3) {
  return function() {
    try {
      var t4 = [...arguments];
      return e3.apply(this, t4);
    } catch (e4) {
      H.critical(`Implementation error. Please turn on debug mode and open a ticket on https://app.posthog.com/home#panel=support%3Asupport%3A.`), H.critical(e4);
    }
  };
}, Ut = function(e3) {
  var t4 = {};
  return W(e3, (function(e4, n2) {
    (A(e4) && e4.length > 0 || P(e4)) && (t4[n2] = e4);
  })), t4;
};
function Wt(e3, t4) {
  return n2 = e3, r2 = (e4) => A(e4) && !M(t4) ? e4.slice(0, t4) : e4, i2 = /* @__PURE__ */ new Set(), (function e4(t5, n3) {
    return t5 === Object(t5) ? i2.has(t5) ? void 0 : (i2.add(t5), T(t5) ? (a2 = [], Rt(t5, ((t6) => {
      a2.push(e4(t6));
    }))) : (a2 = {}, W(t5, ((t6, n4) => {
      i2.has(t6) || (a2[n4] = e4(t6, n4));
    }))), a2) : r2 ? r2(t5, n3) : t5;
    var a2;
  })(n2);
  var n2, r2, i2;
}
var Gt = [`herokuapp.com`, `vercel.app`, `netlify.app`];
function Kt(e3) {
  var t4 = e3 == null ? void 0 : e3.hostname;
  if (!A(t4)) return false;
  var n2 = t4.split(`.`).slice(-2).join(`.`);
  for (var r2 of Gt) if (n2 === r2) return false;
  return true;
}
function qt(e3, t4) {
  for (var n2 = 0; n2 < e3.length; n2++) if (t4(e3[n2])) return e3[n2];
}
function K(e3, t4, n2, r2) {
  var { capture: i2 = false, passive: a2 = true } = r2 ?? {};
  e3 == null ? void 0 : e3.addEventListener(t4, n2, { capture: i2, passive: a2 });
}
var Jt = `$people_distinct_id`, Yt = `__alias`, Xt = `__timers`, Zt = `$autocapture_disabled_server_side`, Qt = `$heatmaps_enabled_server_side`, $t = `$exception_capture_enabled_server_side`, en = `$error_tracking_suppression_rules`, tn = `$error_tracking_capture_extension_exceptions`, nn = `$web_vitals_enabled_server_side`, rn = `$dead_clicks_enabled_server_side`, an = `$product_tours_enabled_server_side`, on = `$web_vitals_allowed_metrics`, sn = `$session_recording_remote_config`, cn = `$sesid`, ln = `$session_is_sampled`, un = `$enabled_feature_flags`, dn = `$early_access_features`, fn = `$feature_flag_details`, pn = `$stored_person_properties`, mn = `$stored_group_properties`, hn = `$surveys`, gn = `$flag_call_reported`, _n = `$user_state`, vn = `$client_session_props`, yn = `$capture_rate_limit`, bn = `$initial_campaign_params`, xn = `$initial_referrer_info`, Sn = `$initial_person_info`, Cn = `$epp`, wn = `__POSTHOG_TOOLBAR__`, Tn = `$posthog_cookieless`, En = [Jt, Yt, `__cmpns`, Xt, `$session_recording_enabled_server_side`, Qt, cn, un, en, _n, dn, fn, mn, pn, hn, gn, vn, yn, bn, xn, Cn, Sn, `$conversations_widget_session_id`, `$conversations_ticket_id`, `$conversations_widget_state`, `$conversations_user_traits`];
function Dn(e3) {
  return e3 instanceof Element && (e3.id === wn || !(e3.closest == null || !e3.closest(`.toolbar-global-fade-container`)));
}
function On(e3) {
  return !!e3 && e3.nodeType === 1;
}
function kn(e3, t4) {
  return !!e3 && !!e3.tagName && e3.tagName.toLowerCase() === t4.toLowerCase();
}
function An(e3) {
  return !!e3 && e3.nodeType === 3;
}
function jn(e3) {
  return !!e3 && e3.nodeType === 11;
}
function Mn(e3) {
  return e3 ? x(e3).split(/\s+/) : [];
}
function Nn(t4) {
  var n2 = e == null ? void 0 : e.location.href;
  return !!(n2 && t4 && t4.some(((e3) => n2.match(e3))));
}
function Pn(e3) {
  var t4 = ``;
  switch (typeof e3.className) {
    case `string`:
      t4 = e3.className;
      break;
    case `object`:
      t4 = (e3.className && `baseVal` in e3.className ? e3.className.baseVal : null) || e3.getAttribute(`class`) || ``;
      break;
    default:
      t4 = ``;
  }
  return Mn(t4);
}
function Fn(e3) {
  return N(e3) ? null : x(e3).split(/(\s+)/).filter(((e4) => nr(e4))).join(``).replace(/[\r\n]/g, ` `).replace(/[ ]+/g, ` `).substring(0, 255);
}
function In(e3) {
  var t4 = ``;
  return Jn(e3) && !Yn(e3) && e3.childNodes && e3.childNodes.length && W(e3.childNodes, (function(e4) {
    An(e4) && e4.textContent && (t4 += Fn(e4.textContent) ?? ``);
  })), x(t4);
}
function Ln(e3) {
  return k(e3.target) ? e3.srcElement || null : (t4 = e3.target) != null && t4.shadowRoot ? e3.composedPath()[0] || null : e3.target || null;
  var t4;
}
var Rn = [`a`, `button`, `form`, `input`, `select`, `textarea`, `label`];
function zn(e3, t4) {
  if (k(t4)) return true;
  var n2, r2 = function(e4) {
    if (t4.some(((t5) => e4.matches(t5)))) return { v: true };
  };
  for (var i2 of e3) if (n2 = r2(i2)) return n2.v;
  return false;
}
function Bn(e3) {
  var t4 = e3.parentNode;
  return !(!t4 || !On(t4)) && t4;
}
var Vn = [`next`, `previous`, `prev`, `>`, `<`], Hn = 10, Un = [`.ph-no-rageclick`, `.ph-no-capture`];
function Wn(t4, n2) {
  if (!e || Gn(t4)) return false;
  var r2, i2;
  if (I(n2) ? (r2 = !!n2 && Un, i2 = void 0) : (r2 = (n2 == null ? void 0 : n2.css_selector_ignorelist) ?? Un, i2 = n2 == null ? void 0 : n2.content_ignorelist), false === r2) return false;
  var { targetElementList: a2 } = Kn(t4, false);
  return !(function(e3, t5) {
    if (false === e3 || k(e3)) return false;
    var n3;
    if (true === e3) n3 = Vn;
    else {
      if (!T(e3)) return false;
      if (e3.length > Hn) return H.error(`[PostHog] content_ignorelist array cannot exceed ` + Hn + ` items. Use css_selector_ignorelist for more complex matching.`), false;
      n3 = e3.map(((e4) => e4.toLowerCase()));
    }
    return t5.some(((e4) => {
      var { safeText: t6, ariaLabel: r3 } = e4;
      return n3.some(((e5) => t6.includes(e5) || r3.includes(e5)));
    }));
  })(i2, a2.map(((e3) => {
    var _a2;
    return { safeText: In(e3).toLowerCase(), ariaLabel: ((_a2 = e3.getAttribute(`aria-label`)) == null ? void 0 : _a2.toLowerCase().trim()) || `` };
  }))) && !zn(a2, r2);
}
var Gn = (e3) => !e3 || kn(e3, `html`) || !On(e3), Kn = (t4, n2) => {
  if (!e || Gn(t4)) return { parentIsUsefulElement: false, targetElementList: [] };
  for (var r2 = false, i2 = [t4], a2 = t4; a2.parentNode && !kn(a2, `body`); ) if (jn(a2.parentNode)) i2.push(a2.parentNode.host), a2 = a2.parentNode.host;
  else {
    var o2 = Bn(a2);
    if (!o2) break;
    if (n2 || Rn.indexOf(o2.tagName.toLowerCase()) > -1) r2 = true;
    else {
      var s2 = e.getComputedStyle(o2);
      s2 && s2.getPropertyValue(`cursor`) === `pointer` && (r2 = true);
    }
    i2.push(o2), a2 = o2;
  }
  return { parentIsUsefulElement: r2, targetElementList: i2 };
};
function qn(t4, n2, r2, i2, a2) {
  var o2, s2, c2;
  if (r2 === void 0 && (r2 = void 0), !e || Gn(t4) || (o2 = r2) != null && o2.url_allowlist && !Nn(r2.url_allowlist) || (s2 = r2) != null && s2.url_ignorelist && Nn(r2.url_ignorelist)) return false;
  if ((c2 = r2) != null && c2.dom_event_allowlist) {
    var l2 = r2.dom_event_allowlist;
    if (l2 && !l2.some(((e3) => n2.type === e3))) return false;
  }
  var { parentIsUsefulElement: u2, targetElementList: d2 } = Kn(t4, i2);
  if (!(function(e3, t5) {
    var n3 = t5 == null ? void 0 : t5.element_allowlist;
    if (k(n3)) return true;
    var r3, i3 = function(e4) {
      if (n3.some(((t6) => e4.tagName.toLowerCase() === t6))) return { v: true };
    };
    for (var a3 of e3) if (r3 = i3(a3)) return r3.v;
    return false;
  })(d2, r2) || !zn(d2, r2 == null ? void 0 : r2.css_selector_allowlist)) return false;
  var f2 = e.getComputedStyle(t4);
  if (f2 && f2.getPropertyValue(`cursor`) === `pointer` && n2.type === `click`) return true;
  var p2 = t4.tagName.toLowerCase();
  switch (p2) {
    case `html`:
      return false;
    case `form`:
      return (a2 || [`submit`]).indexOf(n2.type) >= 0;
    case `input`:
    case `select`:
    case `textarea`:
      return (a2 || [`change`, `click`]).indexOf(n2.type) >= 0;
    default:
      return u2 ? (a2 || [`click`]).indexOf(n2.type) >= 0 : (a2 || [`click`]).indexOf(n2.type) >= 0 && (Rn.indexOf(p2) > -1 || t4.getAttribute(`contenteditable`) === `true`);
  }
}
function Jn(e3) {
  for (var t4 = e3; t4.parentNode && !kn(t4, `body`); t4 = t4.parentNode) {
    var n2 = Pn(t4);
    if (b(n2, `ph-sensitive`) || b(n2, `ph-no-capture`)) return false;
  }
  if (b(Pn(e3), `ph-include`)) return true;
  var r2 = e3.type || ``;
  if (A(r2)) switch (r2.toLowerCase()) {
    case `hidden`:
    case `password`:
      return false;
  }
  var i2 = e3.name || e3.id || ``;
  return !(A(i2) && /^cc|cardnum|ccnum|creditcard|csc|cvc|cvv|exp|pass|pwd|routing|seccode|securitycode|securitynum|socialsec|socsec|ssn/i.test(i2.replace(/[^a-zA-Z0-9]/g, ``)));
}
function Yn(e3) {
  return !!(kn(e3, `input`) && ![`button`, `checkbox`, `submit`, `reset`].includes(e3.type) || kn(e3, `select`) || kn(e3, `textarea`) || e3.getAttribute(`contenteditable`) === `true`);
}
var Xn = `(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11})`, Zn = RegExp(`^(?:` + Xn + `)$`), Qn = new RegExp(Xn), $n = `\\d{3}-?\\d{2}-?\\d{4}`, er = RegExp(`^(` + $n + `)$`), tr = RegExp(`(` + $n + `)`);
function nr(e3, t4) {
  return t4 === void 0 && (t4 = true), !(N(e3) || A(e3) && (e3 = x(e3), (t4 ? Zn : Qn).test((e3 || ``).replace(/[- ]/g, ``)) || (t4 ? er : tr).test(e3)));
}
function rr(e3) {
  var t4 = In(e3);
  return nr(t4 = (t4 + ` ` + ir(e3)).trim()) ? t4 : ``;
}
function ir(e3) {
  var t4 = ``;
  return e3 && e3.childNodes && e3.childNodes.length && W(e3.childNodes, (function(e4) {
    var _a2;
    if (e4 && ((_a2 = e4.tagName) == null ? void 0 : _a2.toLowerCase()) === `span`) try {
      var n2 = In(e4);
      t4 = (t4 + ` ` + n2).trim(), e4.childNodes && e4.childNodes.length && (t4 = (t4 + ` ` + ir(e4)).trim());
    } catch (e5) {
      H.error(`[AutoCapture]`, e5);
    }
  })), t4;
}
function ar(e3) {
  return (function(e4) {
    return e4.map(((e5) => {
      var t4 = ``;
      if (e5.tag_name && (t4 += e5.tag_name), e5.attr_class) for (var n2 of (e5.attr_class.sort(), e5.attr_class)) t4 += `.` + n2.replace(/"/g, ``);
      var r2 = g({}, e5.text ? { text: e5.text } : {}, { "nth-child": e5.nth_child ?? 0, "nth-of-type": e5.nth_of_type ?? 0 }, e5.href ? { href: e5.href } : {}, e5.attr_id ? { attr_id: e5.attr_id } : {}, e5.attributes), i2 = {};
      return Bt(r2).sort(((e6, t5) => {
        var [n3] = e6, [r3] = t5;
        return n3.localeCompare(r3);
      })).forEach(((e6) => {
        var [t5, n3] = e6;
        return i2[or(t5.toString())] = or(n3.toString());
      })), t4 += `:`, t4 += Bt(i2).map(((e6) => {
        var [t5, n3] = e6;
        return t5 + `="` + n3 + `"`;
      })).join(``);
    })).join(`;`);
  })((function(e4) {
    return e4.map(((e5) => {
      var _a2, _b;
      var t4 = { text: (_a2 = e5.$el_text) == null ? void 0 : _a2.slice(0, 400), tag_name: e5.tag_name, href: (_b = e5.attr__href) == null ? void 0 : _b.slice(0, 2048), attr_class: sr(e5), attr_id: e5.attr__id, nth_child: e5.nth_child, nth_of_type: e5.nth_of_type, attributes: {} };
      return Bt(e5).filter(((e6) => {
        var [t5] = e6;
        return t5.indexOf(`attr__`) === 0;
      })).forEach(((e6) => {
        var [n2, r2] = e6;
        return t4.attributes[n2] = r2;
      })), t4;
    }));
  })(e3));
}
function or(e3) {
  return e3.replace(/"|\\"/g, `\\"`);
}
function sr(e3) {
  var t4 = e3.attr__class;
  return t4 ? T(t4) ? t4 : Mn(t4) : void 0;
}
var cr = class {
  constructor(e3) {
    this.disabled = false === e3;
    var t4 = D(e3) ? e3 : {};
    this.thresholdPx = t4.threshold_px || 30, this.timeoutMs = t4.timeout_ms || 1e3, this.clickCount = t4.click_count || 3, this.clicks = [];
  }
  isRageClick(e3, t4, n2) {
    if (this.disabled) return false;
    var r2 = this.clicks[this.clicks.length - 1];
    if (r2 && Math.abs(e3 - r2.x) + Math.abs(t4 - r2.y) < this.thresholdPx && n2 - r2.timestamp < this.timeoutMs) {
      if (this.clicks.push({ x: e3, y: t4, timestamp: n2 }), this.clicks.length === this.clickCount) return true;
    } else this.clicks = [{ x: e3, y: t4, timestamp: n2 }];
    return false;
  }
}, lr = (e3) => {
  var t4 = o == null ? void 0 : o.createElement(`a`);
  return k(t4) ? null : (t4.href = e3, t4);
}, ur = function(e3, t4) {
  var n2, r2;
  t4 === void 0 && (t4 = `&`);
  var i2 = [];
  return W(e3, (function(e4, t5) {
    k(e4) || k(t5) || t5 === `undefined` || (n2 = encodeURIComponent(((e5) => e5 instanceof File)(e4) ? e4.name : e4.toString()), r2 = encodeURIComponent(t5), i2[i2.length] = r2 + `=` + n2);
  })), i2.join(t4);
}, dr = function(e3, t4) {
  for (var n2, r2 = ((e3.split(`#`)[0] || ``).split(/\?(.*)/)[1] || ``).replace(/^\?+/g, ``).split(`&`), i2 = 0; i2 < r2.length; i2++) {
    var a2 = r2[i2].split(`=`);
    if (a2[0] === t4) {
      n2 = a2;
      break;
    }
  }
  if (!T(n2) || n2.length < 2) return ``;
  var o2 = n2[1];
  try {
    o2 = decodeURIComponent(o2);
  } catch {
    H.error(`Skipping decoding for malformed query param: ` + o2);
  }
  return o2.replace(/\+/g, ` `);
}, fr = function(e3, t4, n2) {
  if (!e3 || !t4 || !t4.length) return e3;
  for (var r2 = e3.split(`#`), i2 = r2[0] || ``, a2 = r2[1], o2 = i2.split(`?`), s2 = o2[1], c2 = o2[0], l2 = (s2 || ``).split(`&`), u2 = [], d2 = 0; d2 < l2.length; d2++) {
    var f2 = l2[d2].split(`=`);
    T(f2) && (t4.includes(f2[0]) ? u2.push(f2[0] + `=` + n2) : u2.push(l2[d2]));
  }
  var p2 = c2;
  return s2 != null && (p2 += `?` + u2.join(`&`)), a2 != null && (p2 += `#` + a2), p2;
}, pr = function(e3, t4) {
  var n2 = e3.match(RegExp(t4 + `=([^&]*)`));
  return n2 ? n2[1] : null;
}, mr = `$copy_autocapture`, hr = U(`[AutoCapture]`);
function gr(e3, t4) {
  return t4.length > e3 ? t4.slice(0, e3) + `...` : t4;
}
function _r(e3) {
  if (e3.previousElementSibling) return e3.previousElementSibling;
  var t4 = e3;
  do
    t4 = t4.previousSibling;
  while (t4 && !On(t4));
  return t4;
}
function vr(e3, t4, n2, r2) {
  var i2 = e3.tagName.toLowerCase(), a2 = { tag_name: i2 };
  Rn.indexOf(i2) > -1 && !n2 && (a2.$el_text = i2.toLowerCase() === `a` || i2.toLowerCase() === `button` ? gr(1024, rr(e3)) : gr(1024, In(e3)));
  var o2 = Pn(e3);
  o2.length > 0 && (a2.classes = o2.filter((function(e4) {
    return e4 !== ``;
  }))), W(e3.attributes, (function(n3) {
    var i3;
    if ((!Yn(e3) || [`name`, `id`, `class`, `aria-label`].indexOf(n3.name) !== -1) && (r2 == null || !r2.includes(n3.name)) && !t4 && nr(n3.value) && (i3 = n3.name, !A(i3) || i3.substring(0, 10) !== `_ngcontent` && i3.substring(0, 7) !== `_nghost`)) {
      var o3 = n3.value;
      n3.name === `class` && (o3 = Mn(o3).join(` `)), a2[`attr__` + n3.name] = gr(1024, o3);
    }
  }));
  for (var s2 = 1, c2 = 1, l2 = e3; l2 = _r(l2); ) s2++, l2.tagName === e3.tagName && c2++;
  return a2.nth_child = s2, a2.nth_of_type = c2, a2;
}
function yr(t4, n2) {
  var _a2, _b;
  for (var r2, { e: i2, maskAllElementAttributes: a2, maskAllText: o2, elementAttributeIgnoreList: s2, elementsChainAsString: c2 } = n2, l2 = [t4], u2 = t4; u2.parentNode && !kn(u2, `body`); ) jn(u2.parentNode) ? (l2.push(u2.parentNode.host), u2 = u2.parentNode.host) : (l2.push(u2.parentNode), u2 = u2.parentNode);
  var d2, f2 = [], p2 = {}, m2 = false, h2 = false;
  if (W(l2, ((e3) => {
    var t5 = Jn(e3);
    e3.tagName.toLowerCase() === `a` && (m2 = e3.getAttribute(`href`), m2 = t5 && m2 && nr(m2) && m2), b(Pn(e3), `ph-no-capture`) && (h2 = true), f2.push(vr(e3, a2, o2, s2)), G(p2, (function(e4) {
      if (!Jn(e4)) return {};
      var t6 = {};
      return W(e4.attributes, (function(e5) {
        if (e5.name && e5.name.indexOf(`data-ph-capture-attribute`) === 0) {
          var n3 = e5.name.replace(`data-ph-capture-attribute-`, ``), r3 = e5.value;
          n3 && r3 && nr(r3) && (t6[n3] = r3);
        }
      })), t6;
    })(e3));
  })), h2) return { props: {}, explicitNoCapture: h2 };
  if (o2 || (t4.tagName.toLowerCase() === `a` || t4.tagName.toLowerCase() === `button` ? f2[0].$el_text = rr(t4) : f2[0].$el_text = In(t4)), m2) {
    var g2;
    f2[0].attr__href = m2;
    var _2 = (_a2 = lr(m2)) == null ? void 0 : _a2.host, v2 = e == null || (g2 = e.location) == null ? void 0 : g2.host;
    _2 && v2 && _2 !== v2 && (d2 = m2);
  }
  return { props: G({ $event_type: i2.type, $ce_version: 1 }, c2 ? {} : { $elements: f2 }, { $elements_chain: ar(f2) }, (r2 = f2[0]) != null && r2.$el_text ? { $el_text: (_b = f2[0]) == null ? void 0 : _b.$el_text } : {}, d2 && i2.type === `click` ? { $external_click_url: d2 } : {}, p2) };
}
var br = class {
  constructor(e3) {
    this.P = false, this.T = null, this.I = false, this.instance = e3, this.rageclicks = new cr(e3.config.rageclick), this.C = null;
  }
  get R() {
    var _a2, _b;
    var e3 = D(this.instance.config.autocapture) ? this.instance.config.autocapture : {};
    return e3.url_allowlist = (_a2 = e3.url_allowlist) == null ? void 0 : _a2.map(((e4) => new RegExp(e4))), e3.url_ignorelist = (_b = e3.url_ignorelist) == null ? void 0 : _b.map(((e4) => new RegExp(e4))), e3;
  }
  F() {
    if (this.isBrowserSupported()) {
      if (e && o) {
        var t4 = (t5) => {
          t5 || (t5 = e == null ? void 0 : e.event);
          try {
            this.O(t5);
          } catch (e3) {
            hr.error(`Failed to capture event`, e3);
          }
        };
        if (K(o, `submit`, t4, { capture: true }), K(o, `change`, t4, { capture: true }), K(o, `click`, t4, { capture: true }), this.R.capture_copied_text) {
          var n2 = (t5) => {
            t5 || (t5 = e == null ? void 0 : e.event), this.O(t5, mr);
          };
          K(o, `copy`, n2, { capture: true }), K(o, `cut`, n2, { capture: true });
        }
      }
    } else hr.info(`Disabling Automatic Event Collection because this browser is not supported`);
  }
  startIfEnabled() {
    this.isEnabled && !this.P && (this.F(), this.P = true);
  }
  onRemoteConfig(e3) {
    e3.elementsChainAsString && (this.I = e3.elementsChainAsString), this.instance.persistence && this.instance.persistence.register({ [Zt]: !!e3.autocapture_opt_out }), this.T = !!e3.autocapture_opt_out, this.startIfEnabled();
  }
  setElementSelectors(e3) {
    this.C = e3;
  }
  getElementSelectors(e3) {
    var t4, n2 = [];
    return (t4 = this.C) == null || t4.forEach(((t5) => {
      var _a2;
      (_a2 = o == null ? void 0 : o.querySelectorAll(t5)) == null ? void 0 : _a2.forEach(((r2) => {
        e3 === r2 && n2.push(t5);
      }));
    })), n2;
  }
  get isEnabled() {
    var _a2;
    var e3 = (_a2 = this.instance.persistence) == null ? void 0 : _a2.props[Zt], t4 = this.T;
    if (M(t4) && !I(e3) && !this.instance.M()) return false;
    var n2 = this.T ?? !!e3;
    return !!this.instance.config.autocapture && !n2;
  }
  O(t4, n2) {
    if (n2 === void 0 && (n2 = `$autocapture`), this.isEnabled) {
      var r2, i2 = Ln(t4);
      An(i2) && (i2 = i2.parentNode || null), n2 === `$autocapture` && t4.type === `click` && t4 instanceof MouseEvent && this.instance.config.rageclick && (r2 = this.rageclicks) != null && r2.isRageClick(t4.clientX, t4.clientY, t4.timeStamp || (/* @__PURE__ */ new Date()).getTime()) && Wn(i2, this.instance.config.rageclick) && this.O(t4, `$rageclick`);
      var a2 = n2 === mr;
      if (i2 && qn(i2, t4, this.R, a2, a2 ? [`copy`, `cut`] : void 0)) {
        var { props: o2, explicitNoCapture: s2 } = yr(i2, { e: t4, maskAllElementAttributes: this.instance.config.mask_all_element_attributes, maskAllText: this.instance.config.mask_all_text, elementAttributeIgnoreList: this.R.element_attribute_ignorelist, elementsChainAsString: this.I });
        if (s2) return false;
        var c2 = this.getElementSelectors(i2);
        if (c2 && c2.length > 0 && (o2.$element_selectors = c2), n2 === mr) {
          var l2, u2 = Fn(e == null || (l2 = e.getSelection()) == null ? void 0 : l2.toString()), d2 = t4.type || `clipboard`;
          if (!u2) return false;
          o2.$selected_content = u2, o2.$copy_type = d2;
        }
        return this.instance.capture(n2, o2), true;
      }
    }
  }
  isBrowserSupported() {
    return E(o == null ? void 0 : o.querySelectorAll);
  }
};
Math.trunc || (Math.trunc = function(e3) {
  return e3 < 0 ? Math.ceil(e3) : Math.floor(e3);
}), Number.isInteger || (Number.isInteger = function(e3) {
  return P(e3) && isFinite(e3) && Math.floor(e3) === e3;
});
var xr = `0123456789abcdef`, Sr = class e2 {
  constructor(e3) {
    if (this.bytes = e3, e3.length !== 16) throw TypeError(`not 128-bit length`);
  }
  static fromFieldsV7(t4, n2, r2, i2) {
    if (!Number.isInteger(t4) || !Number.isInteger(n2) || !Number.isInteger(r2) || !Number.isInteger(i2) || t4 < 0 || n2 < 0 || r2 < 0 || i2 < 0 || t4 > 281474976710655 || n2 > 4095 || r2 > 1073741823 || i2 > 4294967295) throw RangeError(`invalid field value`);
    var a2 = new Uint8Array(16);
    return a2[0] = t4 / 2 ** 40, a2[1] = t4 / 2 ** 32, a2[2] = t4 / 2 ** 24, a2[3] = t4 / 2 ** 16, a2[4] = t4 / 256, a2[5] = t4, a2[6] = 112 | n2 >>> 8, a2[7] = n2, a2[8] = 128 | r2 >>> 24, a2[9] = r2 >>> 16, a2[10] = r2 >>> 8, a2[11] = r2, a2[12] = i2 >>> 24, a2[13] = i2 >>> 16, a2[14] = i2 >>> 8, a2[15] = i2, new e2(a2);
  }
  toString() {
    for (var e3 = ``, t4 = 0; t4 < this.bytes.length; t4++) e3 = e3 + xr.charAt(this.bytes[t4] >>> 4) + xr.charAt(15 & this.bytes[t4]), t4 !== 3 && t4 !== 5 && t4 !== 7 && t4 !== 9 || (e3 += `-`);
    if (e3.length !== 36) throw Error(`Invalid UUIDv7 was generated`);
    return e3;
  }
  clone() {
    return new e2(this.bytes.slice(0));
  }
  equals(e3) {
    return this.compareTo(e3) === 0;
  }
  compareTo(e3) {
    for (var t4 = 0; t4 < 16; t4++) {
      var n2 = this.bytes[t4] - e3.bytes[t4];
      if (n2 !== 0) return Math.sign(n2);
    }
    return 0;
  }
}, Cr = class {
  constructor() {
    this.A = 0, this.j = 0, this.D = new Er();
  }
  generate() {
    var e3 = this.generateOrAbort();
    if (k(e3)) {
      this.A = 0;
      var t4 = this.generateOrAbort();
      if (k(t4)) throw Error(`Could not generate UUID after timestamp reset`);
      return t4;
    }
    return e3;
  }
  generateOrAbort() {
    var e3 = Date.now();
    if (e3 > this.A) this.A = e3, this.L();
    else {
      if (!(e3 + 1e4 > this.A)) return;
      this.j++, this.j > 4398046511103 && (this.A++, this.L());
    }
    return Sr.fromFieldsV7(this.A, Math.trunc(this.j / 2 ** 30), this.j & 2 ** 30 - 1, this.D.nextUint32());
  }
  L() {
    this.j = 1024 * this.D.nextUint32() + (1023 & this.D.nextUint32());
  }
}, wr, Tr = (e3) => {
  if (typeof UUIDV7_DENY_WEAK_RNG < `u` && UUIDV7_DENY_WEAK_RNG) throw Error(`no cryptographically strong RNG available`);
  for (var t4 = 0; t4 < e3.length; t4++) e3[t4] = 65536 * Math.trunc(65536 * Math.random()) + Math.trunc(65536 * Math.random());
  return e3;
};
e && !k(e.crypto) && crypto.getRandomValues && (Tr = (e3) => crypto.getRandomValues(e3));
var Er = class {
  constructor() {
    this.N = new Uint32Array(8), this.U = 1 / 0;
  }
  nextUint32() {
    return this.U >= this.N.length && (Tr(this.N), this.U = 0), this.N[this.U++];
  }
}, Dr = () => Or().toString(), Or = () => (wr || (wr = new Cr())).generate(), kr = ``, Ar = /[a-z0-9][a-z0-9-]+\.[a-z]{2,}$/i;
function jr(e3, t4) {
  if (t4) {
    var n2 = (function(e4, t5) {
      if (t5 === void 0 && (t5 = o), kr) return kr;
      if (!t5 || [`localhost`, `127.0.0.1`].includes(e4)) return ``;
      for (var n3 = e4.split(`.`), r3 = Math.min(n3.length, 8), i2 = `dmn_chk_` + Dr(); !kr && r3--; ) {
        var a2 = n3.slice(r3).join(`.`), s2 = i2 + `=1;domain=.` + a2 + `;path=/`;
        t5.cookie = s2 + `;max-age=3`, t5.cookie.includes(i2) && (t5.cookie = s2 + `;max-age=0`, kr = a2);
      }
      return kr;
    })(e3);
    if (!n2) {
      var r2 = ((e4) => {
        var t5 = e4.match(Ar);
        return t5 ? t5[0] : ``;
      })(e3);
      r2 !== n2 && H.info(`Warning: cookie subdomain discovery mismatch`, r2, n2), n2 = r2;
    }
    return n2 ? `; domain=.` + n2 : ``;
  }
  return ``;
}
var Mr = { H: () => !!o, B: function(e3) {
  H.error(`cookieStore error: ` + e3);
}, q: function(e3) {
  if (o) {
    try {
      for (var t4 = e3 + `=`, n2 = o.cookie.split(`;`).filter(((e4) => e4.length)), r2 = 0; r2 < n2.length; r2++) {
        for (var i2 = n2[r2]; i2.charAt(0) == ` `; ) i2 = i2.substring(1, i2.length);
        if (i2.indexOf(t4) === 0) return decodeURIComponent(i2.substring(t4.length, i2.length));
      }
    } catch {
    }
    return null;
  }
}, W: function(e3) {
  var t4;
  try {
    t4 = JSON.parse(Mr.q(e3)) || {};
  } catch {
  }
  return t4;
}, G: function(e3, t4, n2, r2, i2) {
  if (o) try {
    var a2 = ``, s2 = ``, c2 = jr(o.location.hostname, r2);
    if (n2) {
      var l2 = /* @__PURE__ */ new Date();
      l2.setTime(l2.getTime() + 24 * n2 * 60 * 60 * 1e3), a2 = `; expires=` + l2.toUTCString();
    }
    i2 && (s2 = `; secure`);
    var u2 = e3 + `=` + encodeURIComponent(JSON.stringify(t4)) + a2 + `; SameSite=Lax; path=/` + c2 + s2;
    return u2.length > 3686.4 && H.warn(`cookieStore warning: large cookie, len=` + u2.length), o.cookie = u2, u2;
  } catch {
    return;
  }
}, V: function(e3, t4) {
  if (o != null && o.cookie) try {
    Mr.G(e3, ``, -1, t4);
  } catch {
    return;
  }
} }, Nr = null, q = { H: function() {
  if (!M(Nr)) return Nr;
  var t4 = true;
  if (k(e)) t4 = false;
  else try {
    var n2 = `__mplssupport__`;
    q.G(n2, `xyz`), q.q(n2) !== `"xyz"` && (t4 = false), q.V(n2);
  } catch {
    t4 = false;
  }
  return t4 || H.error(`localStorage unsupported; falling back to cookie store`), Nr = t4, t4;
}, B: function(e3) {
  H.error(`localStorage error: ` + e3);
}, q: function(t4) {
  try {
    return e == null ? void 0 : e.localStorage.getItem(t4);
  } catch (e3) {
    q.B(e3);
  }
  return null;
}, W: function(e3) {
  try {
    return JSON.parse(q.q(e3)) || {};
  } catch {
  }
  return null;
}, G: function(t4, n2) {
  try {
    e == null ? void 0 : e.localStorage.setItem(t4, JSON.stringify(n2));
  } catch (e3) {
    q.B(e3);
  }
}, V: function(t4) {
  try {
    e == null ? void 0 : e.localStorage.removeItem(t4);
  } catch (e3) {
    q.B(e3);
  }
} }, Pr = [`$device_id`, `distinct_id`, cn, ln, Cn, Sn], Fr = {}, Ir = { H: function() {
  return true;
}, B: function(e3) {
  H.error(`memoryStorage error: ` + e3);
}, q: function(e3) {
  return Fr[e3] || null;
}, W: function(e3) {
  return Fr[e3] || null;
}, G: function(e3, t4) {
  Fr[e3] = t4;
}, V: function(e3) {
  delete Fr[e3];
} }, Lr = null, J = { H: function() {
  if (!M(Lr)) return Lr;
  if (Lr = true, k(e)) Lr = false;
  else try {
    var t4 = `__support__`;
    J.G(t4, `xyz`), J.q(t4) !== `"xyz"` && (Lr = false), J.V(t4);
  } catch {
    Lr = false;
  }
  return Lr;
}, B: function(e3) {
  H.error(`sessionStorage error: `, e3);
}, q: function(t4) {
  try {
    return e == null ? void 0 : e.sessionStorage.getItem(t4);
  } catch (e3) {
    J.B(e3);
  }
  return null;
}, W: function(e3) {
  try {
    return JSON.parse(J.q(e3)) || null;
  } catch {
  }
  return null;
}, G: function(t4, n2) {
  try {
    e == null ? void 0 : e.sessionStorage.setItem(t4, JSON.stringify(n2));
  } catch (e3) {
    J.B(e3);
  }
}, V: function(t4) {
  try {
    e == null ? void 0 : e.sessionStorage.removeItem(t4);
  } catch (e3) {
    J.B(e3);
  }
} }, Rr = (function(e3) {
  return e3[e3.PENDING = -1] = `PENDING`, e3[e3.DENIED = 0] = `DENIED`, e3[e3.GRANTED = 1] = `GRANTED`, e3;
})({}), zr = class {
  constructor(e3) {
    this._instance = e3;
  }
  get R() {
    return this._instance.config;
  }
  get consent() {
    return this.J() ? Rr.DENIED : this.K;
  }
  isOptedOut() {
    return this.R.cookieless_mode === `always` || this.consent === Rr.DENIED || this.consent === Rr.PENDING && (this.R.opt_out_capturing_by_default || this.R.cookieless_mode === `on_reject`);
  }
  isOptedIn() {
    return !this.isOptedOut();
  }
  isExplicitlyOptedOut() {
    return this.consent === Rr.DENIED;
  }
  optInOut(e3) {
    this.Y.G(this.X, +!!e3, this.R.cookie_expiration, this.R.cross_subdomain_cookie, this.R.secure_cookie);
  }
  reset() {
    this.Y.V(this.X, this.R.cross_subdomain_cookie);
  }
  get X() {
    var { token: e3, opt_out_capturing_cookie_prefix: t4, consent_persistence_name: n2 } = this._instance.config;
    return n2 || (t4 ? t4 + e3 : `__ph_opt_in_out_` + e3);
  }
  get K() {
    var e3 = this.Y.q(this.X);
    return se(e3) ? Rr.GRANTED : b(ce, e3) ? Rr.DENIED : Rr.PENDING;
  }
  get Y() {
    if (!this.Z) {
      var e3 = this.R.opt_out_capturing_persistence_type;
      this.Z = e3 === `localStorage` ? q : Mr;
      var t4 = e3 === `localStorage` ? Mr : q;
      t4.q(this.X) && (this.Z.q(this.X) || this.optInOut(se(t4.q(this.X))), t4.V(this.X, this.R.cross_subdomain_cookie));
    }
    return this.Z;
  }
  J() {
    return !!this.R.respect_dnt && !!qt([a == null ? void 0 : a.doNotTrack, a == null ? void 0 : a.msDoNotTrack, f.doNotTrack], ((e3) => se(e3)));
  }
}, Br = U(`[Dead Clicks]`), Vr = () => true, Hr = (e3) => {
  var t4, n2 = !((t4 = e3.instance.persistence) == null || !t4.get_property(rn)), r2 = e3.instance.config.capture_dead_clicks;
  return I(r2) ? r2 : !!D(r2) || n2;
}, Ur = class {
  get lazyLoadedDeadClicksAutocapture() {
    return this.tt;
  }
  constructor(e3, t4, n2) {
    this.instance = e3, this.isEnabled = t4, this.onCapture = n2, this.startIfEnabled();
  }
  onRemoteConfig(e3) {
    this.instance.persistence && this.instance.persistence.register({ [rn]: e3 == null ? void 0 : e3.captureDeadClicks }), this.startIfEnabled();
  }
  startIfEnabled() {
    this.isEnabled(this) && this.it((() => {
      this.et();
    }));
  }
  it(e3) {
    var t4, n2;
    (t4 = f.__PosthogExtensions__) != null && t4.initDeadClicksAutocapture && e3(), (n2 = f.__PosthogExtensions__) == null || n2.loadExternalDependency == null || n2.loadExternalDependency(this.instance, `dead-clicks-autocapture`, ((t5) => {
      t5 ? Br.error(`failed to load script`, t5) : e3();
    }));
  }
  et() {
    var e3;
    if (o) {
      if (!this.tt && (e3 = f.__PosthogExtensions__) != null && e3.initDeadClicksAutocapture) {
        var t4 = D(this.instance.config.capture_dead_clicks) ? this.instance.config.capture_dead_clicks : {};
        t4.__onCapture = this.onCapture, this.tt = f.__PosthogExtensions__.initDeadClicksAutocapture(this.instance, t4), this.tt.start(o), Br.info(`starting...`);
      }
    } else Br.error("`document` not found. Cannot start.");
  }
  stop() {
    this.tt && (this.tt.stop(), this.tt = void 0, Br.info(`stopping...`));
  }
}, Wr = U(`[ExceptionAutocapture]`), Gr = class {
  constructor(t4) {
    var n2;
    this.rt = () => {
      var t5;
      if (e && this.isEnabled && (t5 = f.__PosthogExtensions__) != null && t5.errorWrappingFunctions) {
        var n3 = f.__PosthogExtensions__.errorWrappingFunctions.wrapOnError, r2 = f.__PosthogExtensions__.errorWrappingFunctions.wrapUnhandledRejection, i2 = f.__PosthogExtensions__.errorWrappingFunctions.wrapConsoleError;
        try {
          !this.st && this.R.capture_unhandled_errors && (this.st = n3(this.captureException.bind(this))), !this.nt && this.R.capture_unhandled_rejections && (this.nt = r2(this.captureException.bind(this))), !this.ot && this.R.capture_console_errors && (this.ot = i2(this.captureException.bind(this)));
        } catch (e3) {
          Wr.error(`failed to start`, e3), this.ut();
        }
      }
    }, this._instance = t4, this.ht = !((n2 = this._instance.persistence) == null || !n2.props[$t]), this.dt = new le({ refillRate: this._instance.config.error_tracking.__exceptionRateLimiterRefillRate ?? 1, bucketSize: this._instance.config.error_tracking.__exceptionRateLimiterBucketSize ?? 10, refillInterval: 1e4, h: Wr }), this.R = this.vt(), this.startIfEnabledOrStop();
  }
  vt() {
    var e3 = this._instance.config.capture_exceptions, t4 = { capture_unhandled_errors: false, capture_unhandled_rejections: false, capture_console_errors: false };
    return D(e3) ? t4 = g({}, t4, e3) : (k(e3) ? this.ht : e3) && (t4 = g({}, t4, { capture_unhandled_errors: true, capture_unhandled_rejections: true })), t4;
  }
  get isEnabled() {
    return this.R.capture_console_errors || this.R.capture_unhandled_errors || this.R.capture_unhandled_rejections;
  }
  startIfEnabledOrStop() {
    this.isEnabled ? (Wr.info(`enabled`), this.ut(), this.it(this.rt)) : this.ut();
  }
  it(e3) {
    var t4, n2;
    (t4 = f.__PosthogExtensions__) != null && t4.errorWrappingFunctions && e3(), (n2 = f.__PosthogExtensions__) == null || n2.loadExternalDependency == null || n2.loadExternalDependency(this._instance, `exception-autocapture`, ((t5) => {
      if (t5) return Wr.error(`failed to load script`, t5);
      e3();
    }));
  }
  ut() {
    var e3, t4, n2;
    (e3 = this.st) == null || e3.call(this), this.st = void 0, (t4 = this.nt) == null || t4.call(this), this.nt = void 0, (n2 = this.ot) == null || n2.call(this), this.ot = void 0;
  }
  onRemoteConfig(e3) {
    var t4 = e3.autocaptureExceptions;
    this.ht = !!t4 || false, this._instance.persistence && this._instance.persistence.register({ [$t]: this.ht }), this.R = this.vt(), this.startIfEnabledOrStop();
  }
  onConfigChange() {
    this.R = this.vt();
  }
  captureException(e3) {
    var t4, n2 = (e3 == null || (t4 = e3.$exception_list) == null || (t4 = t4[0]) == null ? void 0 : t4.type) ?? `Exception`;
    this.dt.consumeRateLimit(n2) ? Wr.info(`Skipping exception capture because of client rate limiting.`, { exception: n2 }) : this._instance.exceptions.sendExceptionEvent(e3);
  }
};
function Kr(e3, t4, n2) {
  try {
    if (!(t4 in e3)) return () => {
    };
    var r2 = e3[t4], i2 = n2(r2);
    return E(i2) && (i2.prototype = i2.prototype || {}, Object.defineProperties(i2, { __posthog_wrapped__: { enumerable: false, value: true } })), e3[t4] = i2, () => {
      e3[t4] = r2;
    };
  } catch {
    return () => {
    };
  }
}
var qr = class {
  constructor(t4) {
    var n2;
    this._instance = t4, this.ct = (e == null || (n2 = e.location) == null ? void 0 : n2.pathname) || ``;
  }
  get isEnabled() {
    return this._instance.config.capture_pageview === `history_change`;
  }
  startIfEnabled() {
    this.isEnabled && (H.info(`History API monitoring enabled, starting...`), this.monitorHistoryChanges());
  }
  stop() {
    this.ft && this.ft(), this.ft = void 0, H.info(`History API monitoring stopped`);
  }
  monitorHistoryChanges() {
    var t4, n2;
    if (e && e.history) {
      var r2 = this;
      (t4 = e.history.pushState) != null && t4.__posthog_wrapped__ || Kr(e.history, `pushState`, ((e3) => function(t5, n3, i2) {
        e3.call(this, t5, n3, i2), r2._t(`pushState`);
      })), (n2 = e.history.replaceState) != null && n2.__posthog_wrapped__ || Kr(e.history, `replaceState`, ((e3) => function(t5, n3, i2) {
        e3.call(this, t5, n3, i2), r2._t(`replaceState`);
      })), this.bt();
    }
  }
  _t(t4) {
    try {
      var n2, r2 = e == null || (n2 = e.location) == null ? void 0 : n2.pathname;
      if (!r2) return;
      r2 !== this.ct && this.isEnabled && this._instance.capture(`$pageview`, { navigation_type: t4 }), this.ct = r2;
    } catch (e3) {
      H.error(`Error capturing ` + t4 + ` pageview`, e3);
    }
  }
  bt() {
    if (!this.ft) {
      var t4 = () => {
        this._t(`popstate`);
      };
      K(e, `popstate`, t4), this.ft = () => {
        e && e.removeEventListener(`popstate`, t4);
      };
    }
  }
}, Jr = U(`[SegmentIntegration]`);
function Yr(e3, t4) {
  var n2 = e3.config.segment;
  if (!n2) return t4();
  (function(e4, t5) {
    var n3 = e4.config.segment;
    if (!n3) return t5();
    var r2 = (n4) => {
      var r3 = () => n4.anonymousId() || Dr();
      e4.config.get_device_id = r3, n4.id() && (e4.register({ distinct_id: n4.id(), $device_id: r3() }), e4.persistence.set_property(_n, `identified`)), t5();
    }, i2 = n3.user();
    `then` in i2 && E(i2.then) ? i2.then(r2) : r2(i2);
  })(e3, (() => {
    n2.register(((e4) => {
      Promise && Promise.resolve || Jr.warn(`This browser does not have Promise support, and can not use the segment integration`);
      var t5 = (t6, n3) => {
        if (!n3) return t6;
        t6.event.userId || t6.event.anonymousId === e4.get_distinct_id() || (Jr.info(`No userId set, resetting PostHog`), e4.reset()), t6.event.userId && t6.event.userId !== e4.get_distinct_id() && (Jr.info(`UserId set, identifying with PostHog`), e4.identify(t6.event.userId));
        var r2 = e4.calculateEventProperties(n3, t6.event.properties);
        return t6.event.properties = Object.assign({}, r2, t6.event.properties), t6;
      };
      return { name: `PostHog JS`, type: `enrichment`, version: `1.0.0`, isLoaded: () => true, load: () => Promise.resolve(), track: (e5) => t5(e5, e5.event.event), page: (e5) => t5(e5, `$pageview`), identify: (e5) => t5(e5, `$identify`), screen: (e5) => t5(e5, `$screen`) };
    })(e3)).then((() => {
      t4();
    }));
  }));
}
var Xr = `posthog-js`;
function Zr(e3, t4) {
  var { organization: n2, projectId: r2, prefix: i2, severityAllowList: a2 = [`error`], sendExceptionsToPostHog: o2 = true } = t4 === void 0 ? {} : t4;
  return (t5) => {
    var _a2, _b, _c, _d, _e2;
    if (!(a2 === `*` || a2.includes(t5.level)) || !e3.__loaded) return t5;
    t5.tags || (t5.tags = {});
    var s2 = e3.requestRouter.endpointFor(`ui`, `/project/` + e3.config.token + `/person/` + e3.get_distinct_id());
    t5.tags[`PostHog Person URL`] = s2, e3.sessionRecordingStarted() && (t5.tags[`PostHog Recording URL`] = e3.get_session_replay_url({ withTimestamp: true }));
    var c2 = ((_a2 = t5.exception) == null ? void 0 : _a2.values) || [], l2 = c2.map(((e4) => g({}, e4, { stacktrace: e4.stacktrace ? g({}, e4.stacktrace, { type: `raw`, frames: (e4.stacktrace.frames || []).map(((e5) => g({}, e5, { platform: `web:javascript` }))) }) : void 0 }))), u2 = { $exception_message: ((_b = c2[0]) == null ? void 0 : _b.value) || t5.message, $exception_type: (_c = c2[0]) == null ? void 0 : _c.type, $exception_level: t5.level, $exception_list: l2, $sentry_event_id: t5.event_id, $sentry_exception: t5.exception, $sentry_exception_message: ((_d = c2[0]) == null ? void 0 : _d.value) || t5.message, $sentry_exception_type: (_e2 = c2[0]) == null ? void 0 : _e2.type, $sentry_tags: t5.tags };
    return n2 && r2 && (u2.$sentry_url = (i2 || `https://sentry.io/organizations/`) + n2 + `/issues/?project=` + r2 + `&query=` + t5.event_id), o2 && e3.exceptions.sendExceptionEvent(u2), t5;
  };
}
var Qr = class {
  constructor(e3, t4, n2, r2, i2, a2) {
    this.name = Xr, this.setupOnce = function(o2) {
      o2(Zr(e3, { organization: t4, projectId: n2, prefix: r2, severityAllowList: i2, sendExceptionsToPostHog: a2 == null || a2 }));
    };
  }
}, $r = e != null && e.location ? pr(e.location.hash, `__posthog`) || pr(location.hash, `state`) : null, ei = `_postHogToolbarParams`, ti = U(`[Toolbar]`), ni = (function(e3) {
  return e3[e3.UNINITIALIZED = 0] = `UNINITIALIZED`, e3[e3.LOADING = 1] = `LOADING`, e3[e3.LOADED = 2] = `LOADED`, e3;
})(ni || {}), ri = class {
  constructor(e3) {
    this.instance = e3;
  }
  yt(e3) {
    f.ph_toolbar_state = e3;
  }
  wt() {
    return f.ph_toolbar_state ?? ni.UNINITIALIZED;
  }
  maybeLoadToolbar(t4, n2, r2) {
    if (t4 === void 0 && (t4 = void 0), n2 === void 0 && (n2 = void 0), r2 === void 0 && (r2 = void 0), !e || !o) return false;
    t4 ?? (t4 = e.location), r2 ?? (r2 = e.history);
    try {
      if (!n2) {
        try {
          e.localStorage.setItem(`test`, `test`), e.localStorage.removeItem(`test`);
        } catch {
          return false;
        }
        n2 = e == null ? void 0 : e.localStorage;
      }
      var i2, a2 = $r || pr(t4.hash, `__posthog`) || pr(t4.hash, `state`), s2 = a2 ? Vt((() => JSON.parse(atob(decodeURIComponent(a2))))) || Vt((() => JSON.parse(decodeURIComponent(a2)))) : null;
      return s2 && s2.action === `ph_authorize` ? ((i2 = s2).source = `url`, i2 && Object.keys(i2).length > 0 && (s2.desiredHash ? t4.hash = s2.desiredHash : r2 ? r2.replaceState(r2.state, ``, t4.pathname + t4.search) : t4.hash = ``)) : ((i2 = JSON.parse(n2.getItem(ei) || `{}`)).source = `localstorage`, delete i2.userIntent), !(!i2.token || this.instance.config.token !== i2.token) && (this.loadToolbar(i2), true);
    } catch {
      return false;
    }
  }
  xt(e3) {
    var t4 = f.ph_load_toolbar || f.ph_load_editor;
    !N(t4) && E(t4) ? t4(e3, this.instance) : ti.warn(`No toolbar load function found`);
  }
  loadToolbar(t4) {
    var n2 = !(o == null || !o.getElementById(wn));
    if (!e || n2) return false;
    var r2 = this.instance.requestRouter.region === `custom` && this.instance.config.advanced_disable_toolbar_metrics, i2 = g({ token: this.instance.config.token }, t4, { apiURL: this.instance.requestRouter.endpointFor(`ui`) }, r2 ? { instrument: false } : {});
    if (e.localStorage.setItem(ei, JSON.stringify(g({}, i2, { source: void 0 }))), this.wt() === ni.LOADED) this.xt(i2);
    else if (this.wt() === ni.UNINITIALIZED) {
      var a2;
      this.yt(ni.LOADING), (a2 = f.__PosthogExtensions__) == null || a2.loadExternalDependency == null || a2.loadExternalDependency(this.instance, `toolbar`, ((e3) => {
        if (e3) return ti.error(`[Toolbar] Failed to load`, e3), void this.yt(ni.UNINITIALIZED);
        this.yt(ni.LOADED), this.xt(i2);
      })), K(e, `turbolinks:load`, (() => {
        this.yt(ni.UNINITIALIZED), this.loadToolbar(i2);
      }));
    }
    return true;
  }
  Et(e3) {
    return this.loadToolbar(e3);
  }
  maybeLoadEditor(e3, t4, n2) {
    return e3 === void 0 && (e3 = void 0), t4 === void 0 && (t4 = void 0), n2 === void 0 && (n2 = void 0), this.maybeLoadToolbar(e3, t4, n2);
  }
}, ii = U(`[TracingHeaders]`), ai = class {
  constructor(e3) {
    this.$t = void 0, this.St = void 0, this.rt = () => {
      var e4, t4;
      k(this.$t) && ((e4 = f.__PosthogExtensions__) == null || (e4 = e4.tracingHeadersPatchFns) == null || e4._patchXHR(this._instance.config.__add_tracing_headers || [], this._instance.get_distinct_id(), this._instance.sessionManager)), k(this.St) && ((t4 = f.__PosthogExtensions__) == null || (t4 = t4.tracingHeadersPatchFns) == null || t4._patchFetch(this._instance.config.__add_tracing_headers || [], this._instance.get_distinct_id(), this._instance.sessionManager));
    }, this._instance = e3;
  }
  it(e3) {
    var t4, n2;
    (t4 = f.__PosthogExtensions__) != null && t4.tracingHeadersPatchFns && e3(), (n2 = f.__PosthogExtensions__) == null || n2.loadExternalDependency == null || n2.loadExternalDependency(this._instance, `tracing-headers`, ((t5) => {
      if (t5) return ii.error(`failed to load script`, t5);
      e3();
    }));
  }
  startIfEnabledOrStop() {
    var e3, t4;
    this._instance.config.__add_tracing_headers ? this.it(this.rt) : ((e3 = this.$t) == null || e3.call(this), (t4 = this.St) == null || t4.call(this), this.$t = void 0, this.St = void 0);
  }
}, oi = `https?://(.*)`, si = [`gclid`, `gclsrc`, `dclid`, `gbraid`, `wbraid`, `fbclid`, `msclkid`, `twclid`, `li_fat_id`, `igshid`, `ttclid`, `rdt_cid`, `epik`, `qclid`, `sccid`, `irclid`, `_kx`], ci = zt([`utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_term`, `gad_source`, `mc_cid`], si), li = `<masked>`, ui = [`li_fat_id`];
function di(e3, t4, n2) {
  if (!o) return {};
  var r2, i2 = t4 ? zt([], si, n2 || []) : [], a2 = fi(fr(o.URL, i2, li), e3);
  return G((r2 = {}, W(ui, (function(e4) {
    var t5 = Mr.q(e4);
    r2[e4] = t5 || null;
  })), r2), a2);
}
function fi(e3, t4) {
  var n2 = ci.concat(t4 || []), r2 = {};
  return W(n2, (function(t5) {
    r2[t5] = dr(e3, t5) || null;
  })), r2;
}
function pi(e3) {
  var t4 = (function(e4) {
    return e4 ? e4.search(oi + `google.([^/?]*)`) === 0 ? `google` : e4.search(oi + `bing.com`) === 0 ? `bing` : e4.search(oi + `yahoo.com`) === 0 ? `yahoo` : e4.search(oi + `duckduckgo.com`) === 0 ? `duckduckgo` : null : null;
  })(e3), n2 = t4 == `yahoo` ? `p` : `q`, r2 = {};
  if (!M(t4)) {
    r2.$search_engine = t4;
    var i2 = o ? dr(o.referrer, n2) : ``;
    i2.length && (r2.ph_keyword = i2);
  }
  return r2;
}
function mi() {
  return navigator.language || navigator.userLanguage;
}
function hi() {
  return (o == null ? void 0 : o.referrer) || `$direct`;
}
function gi(e3, t4) {
  var n2 = e3 ? zt([], si, t4 || []) : [], r2 = s == null ? void 0 : s.href.substring(0, 1e3);
  return { r: hi().substring(0, 1e3), u: r2 ? fr(r2, n2, li) : void 0 };
}
function _i(e3) {
  var _a2;
  var { r: t4, u: n2 } = e3, r2 = { $referrer: t4, $referring_domain: t4 == null ? void 0 : t4 == `$direct` ? `$direct` : (_a2 = lr(t4)) == null ? void 0 : _a2.host };
  if (n2) {
    r2.$current_url = n2;
    var i2 = lr(n2);
    r2.$host = i2 == null ? void 0 : i2.host, r2.$pathname = i2 == null ? void 0 : i2.pathname, G(r2, fi(n2));
  }
  return t4 && G(r2, pi(t4)), r2;
}
function vi() {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  } catch {
    return;
  }
}
function yi() {
  try {
    return (/* @__PURE__ */ new Date()).getTimezoneOffset();
  } catch {
    return;
  }
}
function bi(t4, n2) {
  if (!d) return {};
  var r2, i2, a2, o2 = t4 ? zt([], si, n2 || []) : [], [c2, l2] = (function(e3) {
    for (var t5 = 0; t5 < at.length; t5++) {
      var [n3, r3] = at[t5], i3 = n3.exec(e3), a3 = i3 && (E(r3) ? r3(i3, e3) : r3);
      if (a3) return a3;
    }
    return [``, ``];
  })(d);
  return G(Ut({ $os: c2, $os_version: l2, $browser: nt(d, navigator.vendor), $device: ot(d), $device_type: (i2 = d, a2 = ot(i2), a2 === me || a2 === pe || a2 === `Kobo` || a2 === `Kindle Fire` || a2 === We ? fe : a2 === Ne || a2 === Fe || a2 === Pe || a2 === Ve ? `Console` : a2 === ge ? `Wearable` : a2 ? B : `Desktop`), $timezone: vi(), $timezone_offset: yi() }), { $current_url: fr(s == null ? void 0 : s.href, o2, li), $host: s == null ? void 0 : s.host, $pathname: s == null ? void 0 : s.pathname, $raw_user_agent: d.length > 1e3 ? d.substring(0, 997) + `...` : d, $browser_version: it(d, navigator.vendor), $browser_language: mi(), $browser_language_prefix: (r2 = mi(), typeof r2 == `string` ? r2.split(`-`)[0] : void 0), $screen_height: e == null ? void 0 : e.screen.height, $screen_width: e == null ? void 0 : e.screen.width, $viewport_height: e == null ? void 0 : e.innerHeight, $viewport_width: e == null ? void 0 : e.innerWidth, $lib: `web`, $lib_version: p.LIB_VERSION, $insert_id: Math.random().toString(36).substring(2, 10) + Math.random().toString(36).substring(2, 10), $time: Date.now() / 1e3 });
}
var xi = U(`[Web Vitals]`), Si = 9e5, Ci = class {
  constructor(e3) {
    var t4;
    this.kt = false, this.P = false, this.N = { url: void 0, metrics: [], firstMetricTimestamp: void 0 }, this.Pt = () => {
      clearTimeout(this.Tt), this.N.metrics.length !== 0 && (this._instance.capture(`$web_vitals`, this.N.metrics.reduce(((e4, t5) => g({}, e4, { [`$web_vitals_` + t5.name + `_event`]: g({}, t5), [`$web_vitals_` + t5.name + `_value`]: t5.value })), {})), this.N = { url: void 0, metrics: [], firstMetricTimestamp: void 0 });
    }, this.It = (e4) => {
      var _a2;
      var t5 = (_a2 = this._instance.sessionManager) == null ? void 0 : _a2.checkAndGetSessionAndWindowId(true);
      if (k(t5)) xi.error(`Could not read session ID. Dropping metrics!`);
      else {
        this.N = this.N || { url: void 0, metrics: [], firstMetricTimestamp: void 0 };
        var n2 = this.Ct();
        k(n2) || (N(e4 == null ? void 0 : e4.name) || N(e4 == null ? void 0 : e4.value) ? xi.error(`Invalid metric received`, e4) : this.Rt && e4.value >= this.Rt ? xi.error(`Ignoring metric with value >= ` + this.Rt, e4) : (this.N.url !== n2 && (this.Pt(), this.Tt = setTimeout(this.Pt, this.flushToCaptureTimeoutMs)), k(this.N.url) && (this.N.url = n2), this.N.firstMetricTimestamp = k(this.N.firstMetricTimestamp) ? Date.now() : this.N.firstMetricTimestamp, e4.attribution && e4.attribution.interactionTargetElement && (e4.attribution.interactionTargetElement = void 0), this.N.metrics.push(g({}, e4, { $current_url: n2, $session_id: t5.sessionId, $window_id: t5.windowId, timestamp: Date.now() })), this.N.metrics.length === this.allowedMetrics.length && this.Pt()));
      }
    }, this.rt = () => {
      if (!this.P) {
        var e4, t5, n2, r2, i2 = f.__PosthogExtensions__;
        k(i2) || k(i2.postHogWebVitalsCallbacks) || ({ onLCP: e4, onCLS: t5, onFCP: n2, onINP: r2 } = i2.postHogWebVitalsCallbacks), e4 && t5 && n2 && r2 ? (this.allowedMetrics.indexOf(`LCP`) > -1 && e4(this.It.bind(this)), this.allowedMetrics.indexOf(`CLS`) > -1 && t5(this.It.bind(this)), this.allowedMetrics.indexOf(`FCP`) > -1 && n2(this.It.bind(this)), this.allowedMetrics.indexOf(`INP`) > -1 && r2(this.It.bind(this)), this.P = true) : xi.error(`web vitals callbacks not loaded - not starting`);
      }
    }, this._instance = e3, this.kt = !((t4 = this._instance.persistence) == null || !t4.props[nn]), this.startIfEnabled();
  }
  get allowedMetrics() {
    var _a2, _b;
    var e3 = D(this._instance.config.capture_performance) ? (_a2 = this._instance.config.capture_performance) == null ? void 0 : _a2.web_vitals_allowed_metrics : void 0;
    return N(e3) ? ((_b = this._instance.persistence) == null ? void 0 : _b.props[on]) || [`CLS`, `FCP`, `INP`, `LCP`] : e3;
  }
  get flushToCaptureTimeoutMs() {
    return (D(this._instance.config.capture_performance) ? this._instance.config.capture_performance.web_vitals_delayed_flush_ms : void 0) || 5e3;
  }
  get useAttribution() {
    var e3 = D(this._instance.config.capture_performance) ? this._instance.config.capture_performance.web_vitals_attribution : void 0;
    return e3 != null && e3;
  }
  get Rt() {
    var e3 = D(this._instance.config.capture_performance) && P(this._instance.config.capture_performance.__web_vitals_max_value) ? this._instance.config.capture_performance.__web_vitals_max_value : Si;
    return 0 < e3 && e3 <= 6e4 ? Si : e3;
  }
  get isEnabled() {
    var e3 = s == null ? void 0 : s.protocol;
    if (e3 !== `http:` && e3 !== `https:`) return xi.info(`Web Vitals are disabled on non-http/https protocols`), false;
    var t4 = D(this._instance.config.capture_performance) ? this._instance.config.capture_performance.web_vitals : I(this._instance.config.capture_performance) ? this._instance.config.capture_performance : void 0;
    return I(t4) ? t4 : this.kt;
  }
  startIfEnabled() {
    this.isEnabled && !this.P && (xi.info(`enabled, starting...`), this.it(this.rt));
  }
  onRemoteConfig(e3) {
    var t4 = D(e3.capturePerformance) && !!e3.capturePerformance.web_vitals, n2 = D(e3.capturePerformance) ? e3.capturePerformance.web_vitals_allowed_metrics : void 0;
    this._instance.persistence && (this._instance.persistence.register({ [nn]: t4 }), this._instance.persistence.register({ [on]: n2 })), this.kt = t4, this.startIfEnabled();
  }
  it(e3) {
    var t4, n2;
    if ((t4 = f.__PosthogExtensions__) != null && t4.postHogWebVitalsCallbacks) e3();
    else {
      var r2 = this.useAttribution ? `web-vitals-with-attribution` : `web-vitals`;
      (n2 = f.__PosthogExtensions__) == null || n2.loadExternalDependency == null || n2.loadExternalDependency(this._instance, r2, ((t5) => {
        t5 ? xi.error(`failed to load script`, t5) : e3();
      }));
    }
  }
  Ct() {
    var t4 = e ? e.location.href : void 0;
    if (t4) {
      var n2 = this._instance.config.mask_personal_data_properties, r2 = this._instance.config.custom_personal_data_properties;
      return fr(t4, n2 ? zt([], si, r2 || []) : [], li);
    }
    xi.error(`Could not determine current URL`);
  }
}, wi = U(`[Heatmaps]`);
function Ti(e3) {
  return D(e3) && `clientX` in e3 && `clientY` in e3 && P(e3.clientX) && P(e3.clientY);
}
var Ei = class {
  constructor(e3) {
    var t4;
    this.kt = false, this.P = false, this.Ft = null, this.instance = e3, this.kt = !((t4 = this.instance.persistence) == null || !t4.props[Qt]), this.rageclicks = new cr(e3.config.rageclick);
  }
  get flushIntervalMilliseconds() {
    var e3 = 5e3;
    return D(this.instance.config.capture_heatmaps) && this.instance.config.capture_heatmaps.flush_interval_milliseconds && (e3 = this.instance.config.capture_heatmaps.flush_interval_milliseconds), e3;
  }
  get isEnabled() {
    return N(this.instance.config.capture_heatmaps) ? N(this.instance.config.enable_heatmaps) ? this.kt : this.instance.config.enable_heatmaps : false !== this.instance.config.capture_heatmaps;
  }
  startIfEnabled() {
    if (this.isEnabled) {
      if (this.P) return;
      wi.info(`starting...`), this.Ot(), this.Mt();
    } else clearInterval(this.Ft ?? void 0), this.At(), this.getAndClearBuffer();
  }
  onRemoteConfig(e3) {
    var t4 = !!e3.heatmaps;
    this.instance.persistence && this.instance.persistence.register({ [Qt]: t4 }), this.kt = t4, this.startIfEnabled();
  }
  getAndClearBuffer() {
    var e3 = this.N;
    return this.N = void 0, e3;
  }
  jt(e3) {
    this.Dt(e3.originalEvent, `deadclick`);
  }
  Mt() {
    this.Ft && clearInterval(this.Ft), this.Ft = (function(e3) {
      return (e3 == null ? void 0 : e3.visibilityState) === `visible`;
    })(o) ? setInterval(this.Lt.bind(this), this.flushIntervalMilliseconds) : null;
  }
  Ot() {
    e && o && (this.Nt = this.Lt.bind(this), K(e, `beforeunload`, this.Nt), this.Ut = (t4) => this.Dt(t4 || (e == null ? void 0 : e.event)), K(o, `click`, this.Ut, { capture: true }), this.zt = (t4) => this.Ht(t4 || (e == null ? void 0 : e.event)), K(o, `mousemove`, this.zt, { capture: true }), this.Bt = new Ur(this.instance, Vr, this.jt.bind(this)), this.Bt.startIfEnabled(), this.qt = this.Mt.bind(this), K(o, `visibilitychange`, this.qt), this.P = true);
  }
  At() {
    var t4;
    e && o && (this.Nt && e.removeEventListener(`beforeunload`, this.Nt), this.Ut && o.removeEventListener(`click`, this.Ut, { capture: true }), this.zt && o.removeEventListener(`mousemove`, this.zt, { capture: true }), this.qt && o.removeEventListener(`visibilitychange`, this.qt), clearTimeout(this.Wt), (t4 = this.Bt) == null || t4.stop(), this.P = false);
  }
  Gt(t4, n2) {
    var r2 = this.instance.scrollManager.scrollY(), i2 = this.instance.scrollManager.scrollX(), a2 = this.instance.scrollManager.scrollElement(), o2 = (function(t5, n3, r3) {
      for (var i3 = t5; i3 && On(i3) && !kn(i3, `body`); ) {
        if (i3 === r3) return false;
        if (b(n3, e == null ? void 0 : e.getComputedStyle(i3).position)) return true;
        i3 = Bn(i3);
      }
      return false;
    })(Ln(t4), [`fixed`, `sticky`], a2);
    return { x: t4.clientX + (o2 ? 0 : i2), y: t4.clientY + (o2 ? 0 : r2), target_fixed: o2, type: n2 };
  }
  Dt(e3, t4) {
    var n2;
    if (t4 === void 0 && (t4 = `click`), !Dn(e3.target) && Ti(e3)) {
      var r2 = this.Gt(e3, t4);
      (n2 = this.rageclicks) != null && n2.isRageClick(e3.clientX, e3.clientY, (/* @__PURE__ */ new Date()).getTime()) && this.Vt(g({}, r2, { type: `rageclick` })), this.Vt(r2);
    }
  }
  Ht(e3) {
    !Dn(e3.target) && Ti(e3) && (clearTimeout(this.Wt), this.Wt = setTimeout((() => {
      this.Vt(this.Gt(e3, `mousemove`));
    }), 500));
  }
  Vt(t4) {
    if (e) {
      var n2 = e.location.href, r2 = this.instance.config.mask_personal_data_properties, i2 = this.instance.config.custom_personal_data_properties, a2 = fr(n2, r2 ? zt([], si, i2 || []) : [], li);
      this.N = this.N || {}, this.N[a2] || (this.N[a2] = []), this.N[a2].push(t4);
    }
  }
  Lt() {
    this.N && !O(this.N) && this.instance.capture(`$$heatmap`, { $heatmap_data: this.getAndClearBuffer() });
  }
}, Di = class {
  constructor(e3) {
    this.Jt = (e4, t4, n2) => {
      n2 && (n2.noSessionId || n2.activityTimeout || n2.sessionPastMaximumLength) && (H.info(`[PageViewManager] Session rotated, clearing pageview state`, { sessionId: e4, changeReason: n2 }), this.Kt = void 0, this._instance.scrollManager.resetContext());
    }, this._instance = e3, this.Yt();
  }
  Yt() {
    var _a2;
    this.Xt = (_a2 = this._instance.sessionManager) == null ? void 0 : _a2.onSessionId(this.Jt);
  }
  destroy() {
    var e3;
    (e3 = this.Xt) == null || e3.call(this), this.Xt = void 0;
  }
  doPageView(t4, n2) {
    var r2 = this.Qt(t4, n2);
    return this.Kt = { pathname: (e == null ? void 0 : e.location.pathname) ?? ``, pageViewId: n2, timestamp: t4 }, this._instance.scrollManager.resetContext(), r2;
  }
  doPageLeave(e3) {
    var _a2;
    return this.Qt(e3, (_a2 = this.Kt) == null ? void 0 : _a2.pageViewId);
  }
  doEvent() {
    var _a2;
    return { $pageview_id: (_a2 = this.Kt) == null ? void 0 : _a2.pageViewId };
  }
  Qt(e3, t4) {
    var n2 = this.Kt;
    if (!n2) return { $pageview_id: t4 };
    var r2 = { $pageview_id: t4, $prev_pageview_id: n2.pageViewId }, i2 = this._instance.scrollManager.getContext();
    if (i2 && !this._instance.config.disable_scroll_properties) {
      var { maxScrollHeight: a2, lastScrollY: o2, maxScrollY: s2, maxContentHeight: c2, lastContentY: l2, maxContentY: u2 } = i2;
      if (!(k(a2) || k(o2) || k(s2) || k(c2) || k(l2) || k(u2))) {
        a2 = Math.ceil(a2), o2 = Math.ceil(o2), s2 = Math.ceil(s2), c2 = Math.ceil(c2), l2 = Math.ceil(l2), u2 = Math.ceil(u2);
        var d2 = a2 <= 1 ? 1 : z(o2 / a2, 0, 1, H), f2 = a2 <= 1 ? 1 : z(s2 / a2, 0, 1, H), p2 = c2 <= 1 ? 1 : z(l2 / c2, 0, 1, H), m2 = c2 <= 1 ? 1 : z(u2 / c2, 0, 1, H);
        r2 = G(r2, { $prev_pageview_last_scroll: o2, $prev_pageview_last_scroll_percentage: d2, $prev_pageview_max_scroll: s2, $prev_pageview_max_scroll_percentage: f2, $prev_pageview_last_content: l2, $prev_pageview_last_content_percentage: p2, $prev_pageview_max_content: u2, $prev_pageview_max_content_percentage: m2 });
      }
    }
    return n2.pathname && (r2.$prev_pageview_pathname = n2.pathname), n2.timestamp && (r2.$prev_pageview_duration = (e3.getTime() - n2.timestamp.getTime()) / 1e3), r2;
  }
}, Oi = (function(e3) {
  return e3.GZipJS = `gzip-js`, e3.Base64 = `base64`, e3;
})({}), Y = Uint8Array, X = Uint16Array, ki = Uint32Array, Ai = new Y([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]), ji = new Y([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]), Mi = new Y([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), Ni = function(e3, t4) {
  for (var n2 = new X(31), r2 = 0; r2 < 31; ++r2) n2[r2] = t4 += 1 << e3[r2 - 1];
  var i2 = new ki(n2[30]);
  for (r2 = 1; r2 < 30; ++r2) for (var a2 = n2[r2]; a2 < n2[r2 + 1]; ++a2) i2[a2] = a2 - n2[r2] << 5 | r2;
  return [n2, i2];
}, Pi = Ni(Ai, 2), Fi = Pi[0], Ii = Pi[1];
Fi[28] = 258, Ii[258] = 28;
for (var Li = Ni(ji, 0)[1], Ri = new X(32768), Z = 0; Z < 32768; ++Z) {
  var zi = (43690 & Z) >>> 1 | (21845 & Z) << 1;
  zi = (61680 & (zi = (52428 & zi) >>> 2 | (13107 & zi) << 2)) >>> 4 | (3855 & zi) << 4, Ri[Z] = ((65280 & zi) >>> 8 | (255 & zi) << 8) >>> 1;
}
var Bi = function(e3, t4, n2) {
  for (var r2 = e3.length, i2 = 0, a2 = new X(t4); i2 < r2; ++i2) ++a2[e3[i2] - 1];
  var o2, s2 = new X(t4);
  for (i2 = 0; i2 < t4; ++i2) s2[i2] = s2[i2 - 1] + a2[i2 - 1] << 1;
  if (n2) {
    o2 = new X(1 << t4);
    var c2 = 15 - t4;
    for (i2 = 0; i2 < r2; ++i2) if (e3[i2]) for (var l2 = i2 << 4 | e3[i2], u2 = t4 - e3[i2], d2 = s2[e3[i2] - 1]++ << u2, f2 = d2 | (1 << u2) - 1; d2 <= f2; ++d2) o2[Ri[d2] >>> c2] = l2;
  } else for (o2 = new X(r2), i2 = 0; i2 < r2; ++i2) o2[i2] = Ri[s2[e3[i2] - 1]++] >>> 15 - e3[i2];
  return o2;
}, Vi = new Y(288);
for (Z = 0; Z < 144; ++Z) Vi[Z] = 8;
for (Z = 144; Z < 256; ++Z) Vi[Z] = 9;
for (Z = 256; Z < 280; ++Z) Vi[Z] = 7;
for (Z = 280; Z < 288; ++Z) Vi[Z] = 8;
var Hi = new Y(32);
for (Z = 0; Z < 32; ++Z) Hi[Z] = 5;
var Ui = Bi(Vi, 9, 0), Wi = Bi(Hi, 5, 0), Gi = function(e3) {
  return (e3 / 8 | 0) + (7 & e3 && 1);
}, Ki = function(e3, t4, n2) {
  (n2 == null || n2 > e3.length) && (n2 = e3.length);
  var r2 = new (e3 instanceof X ? X : e3 instanceof ki ? ki : Y)(n2 - t4);
  return r2.set(e3.subarray(t4, n2)), r2;
}, qi = function(e3, t4, n2) {
  n2 <<= 7 & t4;
  var r2 = t4 / 8 | 0;
  e3[r2] |= n2, e3[r2 + 1] |= n2 >>> 8;
}, Ji = function(e3, t4, n2) {
  n2 <<= 7 & t4;
  var r2 = t4 / 8 | 0;
  e3[r2] |= n2, e3[r2 + 1] |= n2 >>> 8, e3[r2 + 2] |= n2 >>> 16;
}, Yi = function(e3, t4) {
  for (var n2 = [], r2 = 0; r2 < e3.length; ++r2) e3[r2] && n2.push({ s: r2, f: e3[r2] });
  var i2 = n2.length, a2 = n2.slice();
  if (!i2) return [new Y(0), 0];
  if (i2 == 1) {
    var o2 = new Y(n2[0].s + 1);
    return o2[n2[0].s] = 1, [o2, 1];
  }
  n2.sort((function(e4, t5) {
    return e4.f - t5.f;
  })), n2.push({ s: -1, f: 25001 });
  var s2 = n2[0], c2 = n2[1], l2 = 0, u2 = 1, d2 = 2;
  for (n2[0] = { s: -1, f: s2.f + c2.f, l: s2, r: c2 }; u2 != i2 - 1; ) s2 = n2[n2[l2].f < n2[d2].f ? l2++ : d2++], c2 = n2[l2 != u2 && n2[l2].f < n2[d2].f ? l2++ : d2++], n2[u2++] = { s: -1, f: s2.f + c2.f, l: s2, r: c2 };
  var f2 = a2[0].s;
  for (r2 = 1; r2 < i2; ++r2) a2[r2].s > f2 && (f2 = a2[r2].s);
  var p2 = new X(f2 + 1), m2 = Xi(n2[u2 - 1], p2, 0);
  if (m2 > t4) {
    r2 = 0;
    var h2 = 0, g2 = m2 - t4, _2 = 1 << g2;
    for (a2.sort((function(e4, t5) {
      return p2[t5.s] - p2[e4.s] || e4.f - t5.f;
    })); r2 < i2; ++r2) {
      var v2 = a2[r2].s;
      if (!(p2[v2] > t4)) break;
      h2 += _2 - (1 << m2 - p2[v2]), p2[v2] = t4;
    }
    for (h2 >>>= g2; h2 > 0; ) {
      var y2 = a2[r2].s;
      p2[y2] < t4 ? h2 -= 1 << t4 - p2[y2]++ - 1 : ++r2;
    }
    for (; r2 >= 0 && h2; --r2) {
      var ee2 = a2[r2].s;
      p2[ee2] == t4 && (--p2[ee2], ++h2);
    }
    m2 = t4;
  }
  return [new Y(p2), m2];
}, Xi = function(e3, t4, n2) {
  return e3.s == -1 ? Math.max(Xi(e3.l, t4, n2 + 1), Xi(e3.r, t4, n2 + 1)) : t4[e3.s] = n2;
}, Zi = function(e3) {
  for (var t4 = e3.length; t4 && !e3[--t4]; ) ;
  for (var n2 = new X(++t4), r2 = 0, i2 = e3[0], a2 = 1, o2 = function(e4) {
    n2[r2++] = e4;
  }, s2 = 1; s2 <= t4; ++s2) if (e3[s2] == i2 && s2 != t4) ++a2;
  else {
    if (!i2 && a2 > 2) {
      for (; a2 > 138; a2 -= 138) o2(32754);
      a2 > 2 && (o2(a2 > 10 ? a2 - 11 << 5 | 28690 : a2 - 3 << 5 | 12305), a2 = 0);
    } else if (a2 > 3) {
      for (o2(i2), --a2; a2 > 6; a2 -= 6) o2(8304);
      a2 > 2 && (o2(a2 - 3 << 5 | 8208), a2 = 0);
    }
    for (; a2--; ) o2(i2);
    a2 = 1, i2 = e3[s2];
  }
  return [n2.subarray(0, r2), t4];
}, Qi = function(e3, t4) {
  for (var n2 = 0, r2 = 0; r2 < t4.length; ++r2) n2 += e3[r2] * t4[r2];
  return n2;
}, $i = function(e3, t4, n2) {
  var r2 = n2.length, i2 = Gi(t4 + 2);
  e3[i2] = 255 & r2, e3[i2 + 1] = r2 >>> 8, e3[i2 + 2] = 255 ^ e3[i2], e3[i2 + 3] = 255 ^ e3[i2 + 1];
  for (var a2 = 0; a2 < r2; ++a2) e3[i2 + a2 + 4] = n2[a2];
  return 8 * (i2 + 4 + r2);
}, ea = function(e3, t4, n2, r2, i2, a2, o2, s2, c2, l2, u2) {
  qi(t4, u2++, n2), ++i2[256];
  for (var d2 = Yi(i2, 15), f2 = d2[0], p2 = d2[1], m2 = Yi(a2, 15), h2 = m2[0], g2 = m2[1], _2 = Zi(f2), v2 = _2[0], y2 = _2[1], ee2 = Zi(h2), b2 = ee2[0], x2 = ee2[1], S2 = new X(19), C2 = 0; C2 < v2.length; ++C2) S2[31 & v2[C2]]++;
  for (C2 = 0; C2 < b2.length; ++C2) S2[31 & b2[C2]]++;
  for (var te2 = Yi(S2, 7), w2 = te2[0], ne2 = te2[1], T2 = 19; T2 > 4 && !w2[Mi[T2 - 1]]; --T2) ;
  var E2, D2, O2, k2, A2 = l2 + 5 << 3, j2 = Qi(i2, Vi) + Qi(a2, Hi) + o2, M2 = Qi(i2, f2) + Qi(a2, h2) + o2 + 14 + 3 * T2 + Qi(S2, w2) + (2 * S2[16] + 3 * S2[17] + 7 * S2[18]);
  if (A2 <= j2 && A2 <= M2) return $i(t4, u2, e3.subarray(c2, c2 + l2));
  if (qi(t4, u2, 1 + (M2 < j2)), u2 += 2, M2 < j2) {
    E2 = Bi(f2, p2, 0), D2 = f2, O2 = Bi(h2, g2, 0), k2 = h2;
    var N2 = Bi(w2, ne2, 0);
    for (qi(t4, u2, y2 - 257), qi(t4, u2 + 5, x2 - 1), qi(t4, u2 + 10, T2 - 4), u2 += 14, C2 = 0; C2 < T2; ++C2) qi(t4, u2 + 3 * C2, w2[Mi[C2]]);
    u2 += 3 * T2;
    for (var P2 = [v2, b2], F2 = 0; F2 < 2; ++F2) {
      var I2 = P2[F2];
      for (C2 = 0; C2 < I2.length; ++C2) {
        var L2 = 31 & I2[C2];
        qi(t4, u2, N2[L2]), u2 += w2[L2], L2 > 15 && (qi(t4, u2, I2[C2] >>> 5 & 127), u2 += I2[C2] >>> 12);
      }
    }
  } else E2 = Ui, D2 = Vi, O2 = Wi, k2 = Hi;
  for (C2 = 0; C2 < s2; ++C2) if (r2[C2] > 255) {
    L2 = r2[C2] >>> 18 & 31, Ji(t4, u2, E2[L2 + 257]), u2 += D2[L2 + 257], L2 > 7 && (qi(t4, u2, r2[C2] >>> 23 & 31), u2 += Ai[L2]);
    var R2 = 31 & r2[C2];
    Ji(t4, u2, O2[R2]), u2 += k2[R2], R2 > 3 && (Ji(t4, u2, r2[C2] >>> 5 & 8191), u2 += ji[R2]);
  } else Ji(t4, u2, E2[r2[C2]]), u2 += D2[r2[C2]];
  return Ji(t4, u2, E2[256]), u2 + D2[256];
}, ta = new ki([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]), na = (function() {
  for (var e3 = new ki(256), t4 = 0; t4 < 256; ++t4) {
    for (var n2 = t4, r2 = 9; --r2; ) n2 = (1 & n2 && 3988292384) ^ n2 >>> 1;
    e3[t4] = n2;
  }
  return e3;
})(), ra = function(e3, t4, n2, r2, i2) {
  return (function(e4, t5, n3, r3, i3, a2) {
    var o2 = e4.length, s2 = new Y(r3 + o2 + 5 * (1 + Math.floor(o2 / 7e3)) + i3), c2 = s2.subarray(r3, s2.length - i3), l2 = 0;
    if (!t5 || o2 < 8) for (var u2 = 0; u2 <= o2; u2 += 65535) {
      var d2 = u2 + 65535;
      d2 < o2 ? l2 = $i(c2, l2, e4.subarray(u2, d2)) : (c2[u2] = a2, l2 = $i(c2, l2, e4.subarray(u2, o2)));
    }
    else {
      for (var f2 = ta[t5 - 1], p2 = f2 >>> 13, m2 = 8191 & f2, h2 = (1 << n3) - 1, g2 = new X(32768), _2 = new X(h2 + 1), v2 = Math.ceil(n3 / 3), y2 = 2 * v2, ee2 = function(t6) {
        return (e4[t6] ^ e4[t6 + 1] << v2 ^ e4[t6 + 2] << y2) & h2;
      }, b2 = new ki(25e3), x2 = new X(288), S2 = new X(32), C2 = 0, te2 = 0, w2 = (u2 = 0, 0), ne2 = 0, T2 = 0; u2 < o2; ++u2) {
        var E2 = ee2(u2), D2 = 32767 & u2, O2 = _2[E2];
        if (g2[D2] = O2, _2[E2] = D2, ne2 <= u2) {
          var k2 = o2 - u2;
          if ((C2 > 7e3 || w2 > 24576) && k2 > 423) {
            l2 = ea(e4, c2, 0, b2, x2, S2, te2, w2, T2, u2 - T2, l2), w2 = C2 = te2 = 0, T2 = u2;
            for (var A2 = 0; A2 < 286; ++A2) x2[A2] = 0;
            for (A2 = 0; A2 < 30; ++A2) S2[A2] = 0;
          }
          var j2 = 2, M2 = 0, N2 = m2, P2 = D2 - O2 & 32767;
          if (k2 > 2 && E2 == ee2(u2 - P2)) for (var F2 = Math.min(p2, k2) - 1, I2 = Math.min(32767, u2), L2 = Math.min(258, k2); P2 <= I2 && --N2 && D2 != O2; ) {
            if (e4[u2 + j2] == e4[u2 + j2 - P2]) {
              for (var R2 = 0; R2 < L2 && e4[u2 + R2] == e4[u2 + R2 - P2]; ++R2) ;
              if (R2 > j2) {
                if (j2 = R2, M2 = P2, R2 > F2) break;
                var re2 = Math.min(P2, R2 - 2), ie2 = 0;
                for (A2 = 0; A2 < re2; ++A2) {
                  var ae2 = u2 - P2 + A2 + 32768 & 32767, oe2 = ae2 - g2[ae2] + 32768 & 32767;
                  oe2 > ie2 && (ie2 = oe2, O2 = ae2);
                }
              }
            }
            P2 += (D2 = O2) - (O2 = g2[D2]) + 32768 & 32767;
          }
          if (M2) {
            b2[w2++] = 268435456 | Ii[j2] << 18 | Li[M2];
            var se2 = 31 & Ii[j2], ce2 = 31 & Li[M2];
            te2 += Ai[se2] + ji[ce2], ++x2[257 + se2], ++S2[ce2], ne2 = u2 + j2, ++C2;
          } else b2[w2++] = e4[u2], ++x2[e4[u2]];
        }
      }
      l2 = ea(e4, c2, a2, b2, x2, S2, te2, w2, T2, u2 - T2, l2);
    }
    return Ki(s2, 0, r3 + Gi(l2) + i3);
  })(e3, t4.level == null ? 6 : t4.level, t4.mem == null ? Math.ceil(1.5 * Math.max(8, Math.min(13, Math.log(e3.length)))) : 12 + t4.mem, n2, r2, true);
}, ia = function(e3, t4, n2) {
  for (; n2; ++t4) e3[t4] = n2, n2 >>>= 8;
};
function aa(e3, t4) {
  t4 === void 0 && (t4 = {});
  var n2 = /* @__PURE__ */ (function() {
    var e4 = 4294967295;
    return { p: function(t5) {
      for (var n3 = e4, r3 = 0; r3 < t5.length; ++r3) n3 = na[255 & n3 ^ t5[r3]] ^ n3 >>> 8;
      e4 = n3;
    }, d: function() {
      return 4294967295 ^ e4;
    } };
  })(), r2 = e3.length;
  n2.p(e3);
  var i2, a2 = ra(e3, t4, 10 + ((i2 = t4).filename && i2.filename.length + 1 || 0), 8), o2 = a2.length;
  return (function(e4, t5) {
    var n3 = t5.filename;
    if (e4[0] = 31, e4[1] = 139, e4[2] = 8, e4[8] = t5.level < 2 ? 4 : t5.level == 9 ? 2 : 0, e4[9] = 3, t5.mtime != 0 && ia(e4, 4, Math.floor(new Date(t5.mtime || Date.now()) / 1e3)), n3) {
      e4[3] = 8;
      for (var r3 = 0; r3 <= n3.length; ++r3) e4[r3 + 10] = n3.charCodeAt(r3);
    }
  })(a2, t4), ia(a2, o2 - 8, n2.d()), ia(a2, o2 - 4, r2), a2;
}
var oa = function(e3) {
  var t4, n2, r2, i2, a2 = ``;
  for (t4 = n2 = 0, r2 = (e3 = (e3 + ``).replace(/\r\n/g, `
`).replace(/\r/g, `
`)).length, i2 = 0; i2 < r2; i2++) {
    var o2 = e3.charCodeAt(i2), s2 = null;
    o2 < 128 ? n2++ : s2 = o2 > 127 && o2 < 2048 ? String.fromCharCode(o2 >> 6 | 192, 63 & o2 | 128) : String.fromCharCode(o2 >> 12 | 224, o2 >> 6 & 63 | 128, 63 & o2 | 128), M(s2) || (n2 > t4 && (a2 += e3.substring(t4, n2)), a2 += s2, t4 = n2 = i2 + 1);
  }
  return n2 > t4 && (a2 += e3.substring(t4, e3.length)), a2;
}, sa = !!l || !!c, ca = `text/plain`, la = function(e3, t4, n2) {
  n2 === void 0 && (n2 = true);
  var [r2, i2] = e3.split(`?`), a2 = g({}, t4), o2 = (i2 == null ? void 0 : i2.split(`&`).map(((e4) => {
    var t5, [r3, i3] = e4.split(`=`), o3 = n2 && (t5 = a2[r3]) != null ? t5 : i3;
    return delete a2[r3], r3 + `=` + o3;
  }))) ?? [], s2 = ur(a2);
  return s2 && o2.push(s2), r2 + `?` + o2.join(`&`);
}, ua = (e3, t4) => JSON.stringify(e3, ((e4, t5) => typeof t5 == `bigint` ? t5.toString() : t5), t4), da = (e3) => {
  var { data: t4, compression: n2 } = e3;
  if (t4) {
    if (n2 === Oi.GZipJS) {
      var r2 = aa((function(e4, t5) {
        var n3 = e4.length;
        if (typeof TextEncoder < `u`) return new TextEncoder().encode(e4);
        for (var r3 = new Y(e4.length + (e4.length >>> 1)), i3 = 0, a3 = function(e5) {
          r3[i3++] = e5;
        }, o3 = 0; o3 < n3; ++o3) {
          if (i3 + 5 > r3.length) {
            var s2 = new Y(i3 + 8 + (n3 - o3 << 1));
            s2.set(r3), r3 = s2;
          }
          var c2 = e4.charCodeAt(o3);
          c2 < 128 || t5 ? a3(c2) : c2 < 2048 ? (a3(192 | c2 >>> 6), a3(128 | 63 & c2)) : c2 > 55295 && c2 < 57344 ? (a3(240 | (c2 = 65536 + (1047552 & c2) | 1023 & e4.charCodeAt(++o3)) >>> 18), a3(128 | c2 >>> 12 & 63), a3(128 | c2 >>> 6 & 63), a3(128 | 63 & c2)) : (a3(224 | c2 >>> 12), a3(128 | c2 >>> 6 & 63), a3(128 | 63 & c2));
        }
        return Ki(r3, 0, i3);
      })(ua(t4)), { mtime: 0 }), i2 = new Blob([r2], { type: ca });
      return { contentType: ca, body: i2, estimatedSize: i2.size };
    }
    if (n2 === Oi.Base64) {
      var a2 = ((e4) => `data=` + encodeURIComponent(typeof e4 == `string` ? e4 : ua(e4)))((function(e4) {
        var t5, n3, r3, i3, a3, o3 = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=`, s2 = 0, c2 = 0, l2 = ``, u2 = [];
        if (!e4) return e4;
        e4 = oa(e4);
        do
          t5 = (a3 = e4.charCodeAt(s2++) << 16 | e4.charCodeAt(s2++) << 8 | e4.charCodeAt(s2++)) >> 18 & 63, n3 = a3 >> 12 & 63, r3 = a3 >> 6 & 63, i3 = 63 & a3, u2[c2++] = o3.charAt(t5) + o3.charAt(n3) + o3.charAt(r3) + o3.charAt(i3);
        while (s2 < e4.length);
        switch (l2 = u2.join(``), e4.length % 3) {
          case 1:
            l2 = l2.slice(0, -2) + `==`;
            break;
          case 2:
            l2 = l2.slice(0, -1) + `=`;
        }
        return l2;
      })(ua(t4)));
      return { contentType: `application/x-www-form-urlencoded`, body: a2, estimatedSize: new Blob([a2]).size };
    }
    var o2 = ua(t4);
    return { contentType: `application/json`, body: o2, estimatedSize: new Blob([o2]).size };
  }
}, fa = [];
c && fa.push({ transport: `fetch`, method: (e3) => {
  var { contentType: t4, body: n2, estimatedSize: r2 } = da(e3) ?? {}, i2 = new Headers();
  W(e3.headers, (function(e4, t5) {
    i2.append(t5, e4);
  })), t4 && i2.append(`Content-Type`, t4);
  var a2 = e3.url, o2 = null;
  if (u) {
    var s2 = new u();
    o2 = { signal: s2.signal, timeout: setTimeout((() => s2.abort()), e3.timeout) };
  }
  c(a2, g({ method: (e3 == null ? void 0 : e3.method) || `GET`, headers: i2, keepalive: e3.method === `POST` && (r2 || 0) < 52428.8, body: n2, signal: o2 == null ? void 0 : o2.signal }, e3.fetchOptions)).then(((t5) => t5.text().then(((n3) => {
    var r3 = { statusCode: t5.status, text: n3 };
    if (t5.status === 200) try {
      r3.json = JSON.parse(n3);
    } catch (e4) {
      H.error(e4);
    }
    e3.callback == null || e3.callback(r3);
  })))).catch(((t5) => {
    H.error(t5), e3.callback == null || e3.callback({ statusCode: 0, text: t5 });
  })).finally((() => o2 ? clearTimeout(o2.timeout) : null));
} }), l && fa.push({ transport: `XHR`, method: (e3) => {
  var t4 = new l();
  t4.open(e3.method || `GET`, e3.url, true);
  var { contentType: n2, body: r2 } = da(e3) ?? {};
  W(e3.headers, (function(e4, n3) {
    t4.setRequestHeader(n3, e4);
  })), n2 && t4.setRequestHeader(`Content-Type`, n2), e3.timeout && (t4.timeout = e3.timeout), e3.disableXHRCredentials || (t4.withCredentials = true), t4.onreadystatechange = () => {
    if (t4.readyState === 4) {
      var n3 = { statusCode: t4.status, text: t4.responseText };
      if (t4.status === 200) try {
        n3.json = JSON.parse(t4.responseText);
      } catch {
      }
      e3.callback == null || e3.callback(n3);
    }
  }, t4.send(r2);
} }), a != null && a.sendBeacon && fa.push({ transport: `sendBeacon`, method: (e3) => {
  var t4 = la(e3.url, { beacon: `1` });
  try {
    var { contentType: n2, body: r2 } = da(e3) ?? {}, i2 = typeof r2 == `string` ? new Blob([r2], { type: n2 }) : r2;
    a.sendBeacon(t4, i2);
  } catch {
  }
} });
var pa = function(e3, t4) {
  if (!(function(e4) {
    try {
      new RegExp(e4);
    } catch {
      return false;
    }
    return true;
  })(t4)) return false;
  try {
    return new RegExp(t4).test(e3);
  } catch {
    return false;
  }
};
function ma(e3, t4, n2) {
  return ua({ distinct_id: e3, userPropertiesToSet: t4, userPropertiesToSetOnce: n2 });
}
var ha = { exact: (e3, t4) => t4.some(((t5) => e3.some(((e4) => t5 === e4)))), is_not: (e3, t4) => t4.every(((t5) => e3.every(((e4) => t5 !== e4)))), regex: (e3, t4) => t4.some(((t5) => e3.some(((e4) => pa(t5, e4))))), not_regex: (e3, t4) => t4.every(((t5) => e3.every(((e4) => !pa(t5, e4))))), icontains: (e3, t4) => t4.map(ga).some(((t5) => e3.map(ga).some(((e4) => t5.includes(e4))))), not_icontains: (e3, t4) => t4.map(ga).every(((t5) => e3.map(ga).every(((e4) => !t5.includes(e4))))), gt: (e3, t4) => t4.some(((t5) => {
  var n2 = parseFloat(t5);
  return !isNaN(n2) && e3.some(((e4) => n2 > parseFloat(e4)));
})), lt: (e3, t4) => t4.some(((t5) => {
  var n2 = parseFloat(t5);
  return !isNaN(n2) && e3.some(((e4) => n2 < parseFloat(e4)));
})) }, ga = (e3) => e3.toLowerCase();
function _a(e3, t4) {
  return !e3 || Object.entries(e3).every(((e4) => {
    var [n2, r2] = e4, i2 = t4 == null ? void 0 : t4[n2];
    if (k(i2) || M(i2)) return false;
    var a2 = [String(i2)], o2 = ha[r2.operator];
    return !!o2 && o2(r2.values, a2);
  }));
}
var va = U(`[Error tracking]`), ya = class {
  constructor(e3) {
    var _a2;
    this.Zt = [], this.ti = new lt([new Ct(), new Nt(), new Tt(), new wt(), new jt(), new At(), new Dt(), new Mt()], St()), this._instance = e3, this.Zt = ((_a2 = this._instance.persistence) == null ? void 0 : _a2.get_property(en)) ?? [];
  }
  onRemoteConfig(e3) {
    var _a2, _b;
    var t4 = ((_a2 = e3.errorTracking) == null ? void 0 : _a2.suppressionRules) ?? [], n2 = (_b = e3.errorTracking) == null ? void 0 : _b.captureExtensionExceptions;
    this.Zt = t4, this._instance.persistence && this._instance.persistence.register({ [en]: this.Zt, [tn]: n2 });
  }
  get ii() {
    var e3, t4 = !!this._instance.get_property(tn);
    return (e3 = this._instance.config.error_tracking.captureExtensionExceptions ?? t4) != null && e3;
  }
  buildProperties(e3, t4) {
    return this.ti.buildFromUnknown(e3, { syntheticException: t4 == null ? void 0 : t4.syntheticException, mechanism: { handled: t4 == null ? void 0 : t4.handled } });
  }
  sendExceptionEvent(e3) {
    var t4 = e3.$exception_list;
    if (this.ei(t4)) {
      if (this.ri(t4)) return void va.info(`Skipping exception capture because a suppression rule matched`);
      if (!this.ii && this.si(t4)) return void va.info(`Skipping exception capture because it was thrown by an extension`);
      if (!this._instance.config.error_tracking.__capturePostHogExceptions && this.ni(t4)) return void va.info(`Skipping exception capture because it was thrown by the PostHog SDK`);
    }
    return this._instance.capture(`$exception`, e3, { _noTruncate: true, _batchKey: `exceptionEvent` });
  }
  ri(e3) {
    if (e3.length === 0) return false;
    var t4 = e3.reduce(((e4, t5) => {
      var { type: n2, value: r2 } = t5;
      return A(n2) && n2.length > 0 && e4.$exception_types.push(n2), A(r2) && r2.length > 0 && e4.$exception_values.push(r2), e4;
    }), { $exception_types: [], $exception_values: [] });
    return this.Zt.some(((e4) => {
      var n2 = e4.values.map(((e5) => {
        var n3 = ha[e5.operator], r2 = T(e5.value) ? e5.value : [e5.value], i2 = t4[e5.key] ?? [];
        return r2.length > 0 && n3(r2, i2);
      }));
      return e4.type === `OR` ? n2.some(Boolean) : n2.every(Boolean);
    }));
  }
  si(e3) {
    return e3.flatMap(((e4) => {
      var _a2;
      return ((_a2 = e4.stacktrace) == null ? void 0 : _a2.frames) ?? [];
    })).some(((e4) => e4.filename && e4.filename.startsWith(`chrome-extension://`)));
  }
  ni(e3) {
    var _a2;
    if (e3.length > 0) {
      var t4, n2, r2 = ((_a2 = e3[0].stacktrace) == null ? void 0 : _a2.frames) ?? [], i2 = r2[r2.length - 1];
      return (t4 = i2 == null || (n2 = i2.filename) == null ? void 0 : n2.includes(`posthog.com/static`)) != null && t4;
    }
    return false;
  }
  ei(e3) {
    return !N(e3) && T(e3);
  }
}, Q = U(`[FeatureFlags]`), ba = U(`[FeatureFlags]`, { debugEnabled: true }), xa = `$active_feature_flags`, Sa = `$override_feature_flags`, Ca = `$feature_flag_payloads`, wa = `$override_feature_flag_payloads`, Ta = `$feature_flag_request_id`, Ea = `$feature_flag_evaluated_at`, Da = (e3) => {
  var t4 = {};
  for (var [n2, r2] of Bt(e3 || {})) r2 && (t4[n2] = r2);
  return t4;
}, Oa = (e3) => {
  var t4 = e3.flags;
  return t4 ? (e3.featureFlags = Object.fromEntries(Object.keys(t4).map(((e4) => [e4, t4[e4].variant ?? t4[e4].enabled]))), e3.featureFlagPayloads = Object.fromEntries(Object.keys(t4).filter(((e4) => t4[e4].enabled)).filter(((e4) => {
    var _a2;
    return (_a2 = t4[e4].metadata) == null ? void 0 : _a2.payload;
  })).map(((e4) => {
    var _a2;
    return [e4, (_a2 = t4[e4].metadata) == null ? void 0 : _a2.payload];
  })))) : Q.warn(`Using an older version of the feature flags endpoint. Please upgrade your PostHog server to the latest version`), e3;
}, ka = (function(e3) {
  return e3.FeatureFlags = `feature_flags`, e3.Recordings = `recordings`, e3;
})({}), Aa = class {
  constructor(e3) {
    this.oi = false, this.ai = false, this.li = false, this.ui = false, this.hi = false, this.di = false, this.vi = false, this.ci = false, this._instance = e3, this.featureFlagEventHandlers = [];
  }
  fi() {
    var e3 = this._instance.config.evaluation_contexts ?? this._instance.config.evaluation_environments;
    return !this._instance.config.evaluation_environments || this._instance.config.evaluation_contexts || this.ci || (Q.warn(`evaluation_environments is deprecated. Use evaluation_contexts instead. evaluation_environments will be removed in a future version.`), this.ci = true), e3 != null && e3.length ? e3.filter(((e4) => {
      var t4 = e4 && typeof e4 == `string` && e4.trim().length > 0;
      return t4 || Q.error(`Invalid evaluation context found:`, e4, `Expected non-empty string`), t4;
    })) : [];
  }
  pi() {
    return this.fi().length > 0;
  }
  flags() {
    if (this._instance.config.__preview_remote_config) this.di = true;
    else {
      var e3 = !this.gi && (this._instance.config.advanced_disable_feature_flags || this._instance.config.advanced_disable_feature_flags_on_first_load);
      this.mi({ disableFlags: e3 });
    }
  }
  get hasLoadedFlags() {
    return this.ai;
  }
  getFlags() {
    return Object.keys(this.getFlagVariants());
  }
  getFlagsWithDetails() {
    var e3 = this._instance.get_property(fn), t4 = this._instance.get_property(Sa), n2 = this._instance.get_property(wa);
    if (!n2 && !t4) return e3 || {};
    var r2 = G({}, e3 || {});
    for (var i2 of [.../* @__PURE__ */ new Set([...Object.keys(n2 || {}), ...Object.keys(t4 || {})])]) {
      var a2, o2, s2 = r2[i2], c2 = t4 == null ? void 0 : t4[i2], l2 = k(c2) ? (a2 = s2 == null ? void 0 : s2.enabled) != null && a2 : !!c2, u2 = k(c2) ? s2.variant : typeof c2 == `string` ? c2 : void 0, d2 = n2 == null ? void 0 : n2[i2], f2 = g({}, s2, { enabled: l2, variant: l2 ? u2 ?? (s2 == null ? void 0 : s2.variant) : void 0 });
      l2 !== (s2 == null ? void 0 : s2.enabled) && (f2.original_enabled = s2 == null ? void 0 : s2.enabled), u2 !== (s2 == null ? void 0 : s2.variant) && (f2.original_variant = s2 == null ? void 0 : s2.variant), d2 && (f2.metadata = g({}, s2 == null ? void 0 : s2.metadata, { payload: d2, original_payload: s2 == null || (o2 = s2.metadata) == null ? void 0 : o2.payload })), r2[i2] = f2;
    }
    return this.oi || (this.oi = (Q.warn(` Overriding feature flag details!`, { flagDetails: e3, overriddenPayloads: n2, finalDetails: r2 }), true)), r2;
  }
  getFlagVariants() {
    var e3 = this._instance.get_property(un), t4 = this._instance.get_property(Sa);
    if (!t4) return e3 || {};
    for (var n2 = G({}, e3), r2 = Object.keys(t4), i2 = 0; i2 < r2.length; i2++) n2[r2[i2]] = t4[r2[i2]];
    return this.oi || (this.oi = (Q.warn(` Overriding feature flags!`, { enabledFlags: e3, overriddenFlags: t4, finalFlags: n2 }), true)), n2;
  }
  getFlagPayloads() {
    var e3 = this._instance.get_property(Ca), t4 = this._instance.get_property(wa);
    if (!t4) return e3 || {};
    for (var n2 = G({}, e3 || {}), r2 = Object.keys(t4), i2 = 0; i2 < r2.length; i2++) n2[r2[i2]] = t4[r2[i2]];
    return this.oi || (this.oi = (Q.warn(` Overriding feature flag payloads!`, { flagPayloads: e3, overriddenPayloads: t4, finalPayloads: n2 }), true)), n2;
  }
  reloadFeatureFlags() {
    this.ui || this._instance.config.advanced_disable_feature_flags || this.gi || (this.gi = setTimeout((() => {
      this.mi();
    }), 5));
  }
  bi() {
    clearTimeout(this.gi), this.gi = void 0;
  }
  ensureFlagsLoaded() {
    this.ai || this.li || this.gi || this.reloadFeatureFlags();
  }
  setAnonymousDistinctId(e3) {
    this.$anon_distinct_id = e3;
  }
  setReloadingPaused(e3) {
    this.ui = e3;
  }
  mi(e3) {
    var _a2;
    if (this.bi(), !this._instance.M()) {
      if (this.li) this.hi = true;
      else {
        var t4 = this._instance.config.token, n2 = this._instance.get_property(`$device_id`), r2 = { token: t4, distinct_id: this._instance.get_distinct_id(), groups: this._instance.getGroups(), $anon_distinct_id: this.$anon_distinct_id, person_properties: g({}, ((_a2 = this._instance.persistence) == null ? void 0 : _a2.get_initial_props()) || {}, this._instance.get_property(pn) || {}), group_properties: this._instance.get_property(mn) };
        M(n2) || k(n2) || (r2.$device_id = n2), (e3 != null && e3.disableFlags || this._instance.config.advanced_disable_feature_flags) && (r2.disable_flags = true), this.pi() && (r2.evaluation_contexts = this.fi());
        var i2 = this._instance.config.__preview_remote_config, a2 = i2 ? `/flags/?v=2` : `/flags/?v=2&config=true`, o2 = this._instance.config.advanced_only_evaluate_survey_feature_flags ? `&only_evaluate_survey_feature_flags=true` : ``, s2 = this._instance.requestRouter.endpointFor(`flags`, a2 + o2);
        i2 && (r2.timezone = vi()), this.li = true, this._instance._send_request({ method: `POST`, url: s2, data: r2, compression: this._instance.config.disable_compression ? void 0 : Oi.Base64, timeout: this._instance.config.feature_flag_request_timeout_ms, callback: (e4) => {
          var t5, n3 = true;
          e4.statusCode === 200 && (this.hi || (this.$anon_distinct_id = void 0), n3 = false), this.li = false, this.di || (this.di = true, this._instance.yi(e4.json ?? {})), (!r2.disable_flags || this.hi) && (this.vi = !n3, e4.json && (t5 = e4.json.quotaLimited) != null && t5.includes(ka.FeatureFlags) ? Q.warn(`You have hit your feature flags quota limit, and will not be able to load feature flags until the quota is reset.  Please visit https://posthog.com/docs/billing/limits-alerts to learn more.`) : (r2.disable_flags || this.receivedFeatureFlags(e4.json ?? {}, n3), this.hi && (this.hi = false, this.mi())));
        } });
      }
    }
  }
  getFeatureFlag(e3, t4) {
    if (t4 === void 0 && (t4 = {}), this.ai || this.getFlags() && this.getFlags().length > 0) {
      var n2 = this.getFeatureFlagResult(e3, t4);
      return (n2 == null ? void 0 : n2.variant) ?? (n2 == null ? void 0 : n2.enabled);
    }
    Q.warn(`getFeatureFlag for key "` + e3 + `" failed. Feature flags didn't load in time.`);
  }
  getFeatureFlagDetails(e3) {
    return this.getFlagsWithDetails()[e3];
  }
  getFeatureFlagPayload(e3) {
    var _a2;
    return (_a2 = this.getFeatureFlagResult(e3, { send_event: false })) == null ? void 0 : _a2.payload;
  }
  getFeatureFlagResult(e3, t4) {
    if (t4 === void 0 && (t4 = {}), this.ai || this.getFlags() && this.getFlags().length > 0) {
      var n2 = this.getFlagVariants(), r2 = e3 in n2, i2 = n2[e3], a2 = this.getFlagPayloads()[e3], o2 = String(i2), s2 = this._instance.get_property(Ta) || void 0, c2 = this._instance.get_property(Ea) || void 0, l2 = this._instance.get_property(gn) || {};
      if ((t4.send_event || !(`send_event` in t4)) && (!(e3 in l2) || !l2[e3].includes(o2))) {
        var u2, d2, f2, p2, m2, h2, g2, _2;
        T(l2[e3]) ? l2[e3].push(o2) : l2[e3] = [o2], (u2 = this._instance.persistence) == null || u2.register({ [gn]: l2 });
        var v2 = this.getFeatureFlagDetails(e3), y2 = { $feature_flag: e3, $feature_flag_response: i2, $feature_flag_payload: a2 || null, $feature_flag_request_id: s2, $feature_flag_evaluated_at: c2, $feature_flag_bootstrapped_response: ((d2 = this._instance.config.bootstrap) == null || (d2 = d2.featureFlags) == null ? void 0 : d2[e3]) || null, $feature_flag_bootstrapped_payload: ((f2 = this._instance.config.bootstrap) == null || (f2 = f2.featureFlagPayloads) == null ? void 0 : f2[e3]) || null, $used_bootstrap_value: !this.vi };
        k(v2 == null || (p2 = v2.metadata) == null ? void 0 : p2.version) || (y2.$feature_flag_version = v2.metadata.version);
        var ee2, b2 = (v2 == null || (m2 = v2.reason) == null ? void 0 : m2.description) ?? (v2 == null || (h2 = v2.reason) == null ? void 0 : h2.code);
        b2 && (y2.$feature_flag_reason = b2), v2 != null && (g2 = v2.metadata) != null && g2.id && (y2.$feature_flag_id = v2.metadata.id), k(v2 == null ? void 0 : v2.original_variant) && k(v2 == null ? void 0 : v2.original_enabled) || (y2.$feature_flag_original_response = k(v2.original_variant) ? v2.original_enabled : v2.original_variant), v2 != null && (_2 = v2.metadata) != null && _2.original_payload && (y2.$feature_flag_original_payload = v2 == null || (ee2 = v2.metadata) == null ? void 0 : ee2.original_payload), this._instance.capture(`$feature_flag_called`, y2);
      }
      if (r2) {
        var x2 = a2;
        if (!k(a2)) try {
          x2 = JSON.parse(a2);
        } catch {
        }
        return { key: e3, enabled: !!i2, variant: typeof i2 == `string` ? i2 : void 0, payload: x2 };
      }
    } else Q.warn(`getFeatureFlagResult for key "` + e3 + `" failed. Feature flags didn't load in time.`);
  }
  getRemoteConfigPayload(e3, t4) {
    var n2 = this._instance.config.token, r2 = { distinct_id: this._instance.get_distinct_id(), token: n2 };
    this.pi() && (r2.evaluation_contexts = this.fi()), this._instance._send_request({ method: `POST`, url: this._instance.requestRouter.endpointFor(`flags`, `/flags/?v=2&config=true`), data: r2, compression: this._instance.config.disable_compression ? void 0 : Oi.Base64, timeout: this._instance.config.feature_flag_request_timeout_ms, callback: (n3) => {
      var _a2;
      var r3 = (_a2 = n3.json) == null ? void 0 : _a2.featureFlagPayloads;
      t4((r3 == null ? void 0 : r3[e3]) || void 0);
    } });
  }
  isFeatureEnabled(e3, t4) {
    if (t4 === void 0 && (t4 = {}), this.ai || this.getFlags() && this.getFlags().length > 0) {
      var n2 = this.getFeatureFlag(e3, t4);
      return k(n2) ? void 0 : !!n2;
    }
    Q.warn(`isFeatureEnabled for key "` + e3 + `" failed. Feature flags didn't load in time.`);
  }
  addFeatureFlagsHandler(e3) {
    this.featureFlagEventHandlers.push(e3);
  }
  removeFeatureFlagsHandler(e3) {
    this.featureFlagEventHandlers = this.featureFlagEventHandlers.filter(((t4) => t4 !== e3));
  }
  receivedFeatureFlags(e3, t4) {
    if (this._instance.persistence) {
      this.ai = true;
      var n2 = this.getFlagVariants(), r2 = this.getFlagPayloads(), i2 = this.getFlagsWithDetails();
      (function(e4, t5, n3, r3, i3) {
        n3 === void 0 && (n3 = {}), r3 === void 0 && (r3 = {}), i3 === void 0 && (i3 = {});
        var a2 = Oa(e4), o2 = a2.flags, s2 = a2.featureFlags, c2 = a2.featureFlagPayloads;
        if (s2) {
          var l2 = e4.requestId, u2 = e4.evaluatedAt;
          if (T(s2)) {
            Q.warn(`v1 of the feature flags endpoint is deprecated. Please use the latest version.`);
            var d2 = {};
            if (s2) for (var f2 = 0; f2 < s2.length; f2++) d2[s2[f2]] = true;
            t5 && t5.register({ [xa]: s2, [un]: d2 });
          } else {
            var p2 = s2, m2 = c2, h2 = o2;
            if (e4.errorsWhileComputingFlags) {
              if (o2) {
                var _2 = new Set(Object.keys(o2).filter(((e5) => {
                  var t6;
                  return !((t6 = o2[e5]) != null && t6.failed);
                })));
                p2 = g({}, n3, Object.fromEntries(Object.entries(p2).filter(((e5) => {
                  var [t6] = e5;
                  return _2.has(t6);
                })))), m2 = g({}, r3, Object.fromEntries(Object.entries(m2 || {}).filter(((e5) => {
                  var [t6] = e5;
                  return _2.has(t6);
                })))), h2 = g({}, i3, Object.fromEntries(Object.entries(h2 || {}).filter(((e5) => {
                  var [t6] = e5;
                  return _2.has(t6);
                }))));
              } else p2 = g({}, n3, p2), m2 = g({}, r3, m2), h2 = g({}, i3, h2);
            }
            t5 && t5.register(g({ [xa]: Object.keys(Da(p2)), [un]: p2 || {}, [Ca]: m2 || {}, [fn]: h2 || {} }, l2 ? { [Ta]: l2 } : {}, u2 ? { [Ea]: u2 } : {}));
          }
        }
      })(e3, this._instance.persistence, n2, r2, i2), this.wi(t4);
    }
  }
  override(e3, t4) {
    t4 === void 0 && (t4 = false), Q.warn(`override is deprecated. Please use overrideFeatureFlags instead.`), this.overrideFeatureFlags({ flags: e3, suppressWarning: t4 });
  }
  overrideFeatureFlags(e3) {
    if (!this._instance.__loaded || !this._instance.persistence) return Q.uninitializedWarning(`posthog.featureFlags.overrideFeatureFlags`);
    if (false === e3) return this._instance.persistence.unregister(Sa), this._instance.persistence.unregister(wa), this.wi(), ba.info(`All overrides cleared`);
    if (e3 && typeof e3 == `object` && (`flags` in e3 || `payloads` in e3)) {
      var t4, n2 = e3;
      if (this.oi = !!((t4 = n2.suppressWarning) != null && t4), `flags` in n2) {
        if (false === n2.flags) this._instance.persistence.unregister(Sa), ba.info(`Flag overrides cleared`);
        else if (n2.flags) {
          if (T(n2.flags)) {
            for (var r2 = {}, i2 = 0; i2 < n2.flags.length; i2++) r2[n2.flags[i2]] = true;
            this._instance.persistence.register({ [Sa]: r2 });
          } else this._instance.persistence.register({ [Sa]: n2.flags });
          ba.info(`Flag overrides set`, { flags: n2.flags });
        }
      }
      `payloads` in n2 && (false === n2.payloads ? (this._instance.persistence.unregister(wa), ba.info(`Payload overrides cleared`)) : n2.payloads && (this._instance.persistence.register({ [wa]: n2.payloads }), ba.info(`Payload overrides set`, { payloads: n2.payloads }))), this.wi();
    } else this.wi();
  }
  onFeatureFlags(e3) {
    if (this.addFeatureFlagsHandler(e3), this.ai) {
      var { flags: t4, flagVariants: n2 } = this.xi();
      e3(t4, n2);
    }
    return () => this.removeFeatureFlagsHandler(e3);
  }
  updateEarlyAccessFeatureEnrollment(e3, t4, n2) {
    var r2, i2 = (this._instance.get_property(dn) || []).find(((t5) => t5.flagKey === e3)), a2 = { [`$feature_enrollment/` + e3]: t4 }, o2 = { $feature_flag: e3, $feature_enrollment: t4, $set: a2 };
    i2 && (o2.$early_access_feature_name = i2.name), n2 && (o2.$feature_enrollment_stage = n2), this._instance.capture(`$feature_enrollment_update`, o2), this.setPersonPropertiesForFlags(a2, false);
    var s2 = g({}, this.getFlagVariants(), { [e3]: t4 });
    (r2 = this._instance.persistence) == null || r2.register({ [xa]: Object.keys(Da(s2)), [un]: s2 }), this.wi();
  }
  getEarlyAccessFeatures(e3, t4, n2) {
    t4 === void 0 && (t4 = false);
    var r2 = this._instance.get_property(dn), i2 = n2 ? `&` + n2.map(((e4) => `stage=` + e4)).join(`&`) : ``;
    if (r2 && !t4) return e3(r2);
    this._instance._send_request({ url: this._instance.requestRouter.endpointFor(`api`, `/api/early_access_features/?token=` + this._instance.config.token + i2), method: `GET`, callback: (t5) => {
      var n3, r3;
      if (t5.json) {
        var i3 = t5.json.earlyAccessFeatures;
        return (n3 = this._instance.persistence) == null || n3.unregister(dn), (r3 = this._instance.persistence) == null || r3.register({ [dn]: i3 }), e3(i3);
      }
    } });
  }
  xi() {
    var e3 = this.getFlags(), t4 = this.getFlagVariants();
    return { flags: e3.filter(((e4) => t4[e4])), flagVariants: Object.keys(t4).filter(((e4) => t4[e4])).reduce(((e4, n2) => (e4[n2] = t4[n2], e4)), {}) };
  }
  wi(e3) {
    var { flags: t4, flagVariants: n2 } = this.xi();
    this.featureFlagEventHandlers.forEach(((r2) => r2(t4, n2, { errorsLoading: e3 })));
  }
  setPersonPropertiesForFlags(e3, t4) {
    t4 === void 0 && (t4 = true);
    var n2 = this._instance.get_property(pn) || {};
    this._instance.register({ [pn]: g({}, n2, e3) }), t4 && this._instance.reloadFeatureFlags();
  }
  resetPersonPropertiesForFlags() {
    this._instance.unregister(pn);
  }
  setGroupPropertiesForFlags(e3, t4) {
    t4 === void 0 && (t4 = true);
    var n2 = this._instance.get_property(mn) || {};
    Object.keys(n2).length !== 0 && Object.keys(n2).forEach(((t5) => {
      n2[t5] = g({}, n2[t5], e3[t5]), delete e3[t5];
    })), this._instance.register({ [mn]: g({}, n2, e3) }), t4 && this._instance.reloadFeatureFlags();
  }
  resetGroupPropertiesForFlags(e3) {
    if (e3) {
      var t4 = this._instance.get_property(mn) || {};
      this._instance.register({ [mn]: g({}, t4, { [e3]: {} }) });
    } else this._instance.unregister(mn);
  }
  reset() {
    this.ai = false, this.li = false, this.ui = false, this.hi = false, this.di = false, this.vi = false, this.$anon_distinct_id = void 0, this.bi(), this.oi = false;
  }
}, ja = [`cookie`, `localstorage`, `localstorage+cookie`, `sessionstorage`, `memory`], Ma = class {
  constructor(e3, t4) {
    this.R = e3, this.props = {}, this.Ei = false, this.$i = ((e4) => {
      var t5 = ``;
      return e4.token && (t5 = e4.token.replace(/\+/g, `PL`).replace(/\//g, `SL`).replace(/=/g, `EQ`)), e4.persistence_name ? `ph_` + e4.persistence_name : `ph_` + t5 + `_posthog`;
    })(e3), this.Y = this.Si(e3), this.load(), e3.debug && H.info(`Persistence loaded`, e3.persistence, g({}, this.props)), this.update_config(e3, e3, t4), this.save();
  }
  isDisabled() {
    return !!this.ki;
  }
  Si(t4) {
    ja.indexOf(t4.persistence.toLowerCase()) === -1 && (H.critical(`Unknown persistence type ` + t4.persistence + `; falling back to localStorage+cookie`), t4.persistence = `localStorage+cookie`);
    var n2 = (function(t5) {
      t5 === void 0 && (t5 = []);
      var n3 = [...Pr, ...t5];
      return g({}, q, { W: function(e3) {
        try {
          var t6 = {};
          try {
            t6 = Mr.W(e3) || {};
          } catch {
          }
          var n4 = G(t6, JSON.parse(q.q(e3) || `{}`));
          return q.G(e3, n4), n4;
        } catch {
        }
        return null;
      }, G: function(e3, t6, r3, i2, a2, o2) {
        try {
          q.G(e3, t6, void 0, void 0, o2);
          var s2 = {};
          n3.forEach(((e4) => {
            t6[e4] && (s2[e4] = t6[e4]);
          })), Object.keys(s2).length && Mr.G(e3, s2, r3, i2, a2, o2);
        } catch (e4) {
          q.B(e4);
        }
      }, V: function(t6, n4) {
        try {
          e == null ? void 0 : e.localStorage.removeItem(t6), Mr.V(t6, n4);
        } catch (e3) {
          q.B(e3);
        }
      } });
    })(t4.cookie_persisted_properties || []), r2 = t4.persistence.toLowerCase();
    return r2 === `localstorage` && q.H() ? q : r2 === `localstorage+cookie` && n2.H() ? n2 : r2 === `sessionstorage` && J.H() ? J : r2 === `memory` ? Ir : r2 === `cookie` ? Mr : n2.H() ? n2 : Mr;
  }
  properties() {
    var e3 = {};
    return W(this.props, (function(t4, n2) {
      if (n2 === un && D(t4)) for (var r2 = Object.keys(t4), a2 = 0; a2 < r2.length; a2++) e3[`$feature/` + r2[a2]] = t4[r2[a2]];
      else s2 = n2, c2 = false, (M(o2 = En) ? c2 : i && o2.indexOf === i ? o2.indexOf(s2) != -1 : (W(o2, (function(e4) {
        if (c2 || (c2 = e4 === s2)) return Lt;
      })), c2)) || (e3[n2] = t4);
      var o2, s2, c2;
    })), e3;
  }
  load() {
    if (!this.ki) {
      var e3 = this.Y.W(this.$i);
      e3 && (this.props = G({}, e3));
    }
  }
  save() {
    this.ki || this.Y.G(this.$i, this.props, this.Pi, this.Ti, this.Ii, this.R.debug);
  }
  remove() {
    this.Y.V(this.$i, false), this.Y.V(this.$i, true);
  }
  clear() {
    this.remove(), this.props = {};
  }
  register_once(e3, t4, n2) {
    if (D(e3)) {
      k(t4) && (t4 = `None`), this.Pi = k(n2) ? this.Ci : n2;
      var r2 = false;
      if (W(e3, ((e4, n3) => {
        this.props.hasOwnProperty(n3) && this.props[n3] !== t4 || (this.props[n3] = e4, r2 = true);
      })), r2) return this.save(), true;
    }
    return false;
  }
  register(e3, t4) {
    if (D(e3)) {
      this.Pi = k(t4) ? this.Ci : t4;
      var n2 = false;
      if (W(e3, ((t5, r2) => {
        e3.hasOwnProperty(r2) && this.props[r2] !== t5 && (this.props[r2] = t5, n2 = true);
      })), n2) return this.save(), true;
    }
    return false;
  }
  unregister(e3) {
    e3 in this.props && (delete this.props[e3], this.save());
  }
  update_campaign_params() {
    if (!this.Ei) {
      var e3 = di(this.R.custom_campaign_params, this.R.mask_personal_data_properties, this.R.custom_personal_data_properties);
      O(Ut(e3)) || this.register(e3), this.Ei = true;
    }
  }
  update_search_keyword() {
    var e3;
    this.register((e3 = o == null ? void 0 : o.referrer) ? pi(e3) : {});
  }
  update_referrer_info() {
    var _a2;
    this.register_once({ $referrer: hi(), $referring_domain: o != null && o.referrer && ((_a2 = lr(o.referrer)) == null ? void 0 : _a2.host) || `$direct` }, void 0);
  }
  set_initial_person_info() {
    this.props[bn] || this.props[xn] || this.register_once({ [Sn]: gi(this.R.mask_personal_data_properties, this.R.custom_personal_data_properties) }, void 0);
  }
  get_initial_props() {
    var e3 = {};
    W([xn, bn], ((t5) => {
      var n3 = this.props[t5];
      n3 && W(n3, (function(t6, n4) {
        e3[`$initial_` + S(n4)] = t6;
      }));
    }));
    var t4, n2, r2 = this.props[Sn];
    return r2 && G(e3, (t4 = _i(r2), n2 = {}, W(t4, (function(e4, t5) {
      n2[`$initial_` + S(t5)] = e4;
    })), n2)), e3;
  }
  safe_merge(e3) {
    return W(this.props, (function(t4, n2) {
      n2 in e3 || (e3[n2] = t4);
    })), e3;
  }
  update_config(e3, t4, n2) {
    if (this.Ci = this.Pi = e3.cookie_expiration, this.set_disabled(e3.disable_persistence || !!n2), this.set_cross_subdomain(e3.cross_subdomain_cookie), this.set_secure(e3.secure_cookie), e3.persistence !== t4.persistence || !((e4, t5) => {
      if (e4.length !== t5.length) return false;
      var n3 = [...e4].sort(), r3 = [...t5].sort();
      return n3.every(((e5, t6) => e5 === r3[t6]));
    })(e3.cookie_persisted_properties || [], t4.cookie_persisted_properties || [])) {
      var r2 = this.Si(e3), i2 = this.props;
      this.clear(), this.Y = r2, this.props = i2, this.save();
    }
  }
  set_disabled(e3) {
    this.ki = e3, this.ki ? this.remove() : this.save();
  }
  set_cross_subdomain(e3) {
    e3 !== this.Ti && (this.Ti = e3, this.remove(), this.save());
  }
  set_secure(e3) {
    e3 !== this.Ii && (this.Ii = e3, this.remove(), this.save());
  }
  set_event_timer(e3, t4) {
    var n2 = this.props[Xt] || {};
    n2[e3] = t4, this.props[Xt] = n2, this.save();
  }
  remove_event_timer(e3) {
    var t4 = (this.props[Xt] || {})[e3];
    return k(t4) || (delete this.props[Xt][e3], this.save()), t4;
  }
  get_property(e3) {
    return this.props[e3];
  }
  set_property(e3, t4) {
    this.props[e3] = t4, this.save();
  }
}, Na = U(`[Product Tours]`), Pa = `ph_product_tours`, Fa = class {
  constructor(e3) {
    this.Ri = null, this.Fi = null, this._instance = e3;
  }
  onRemoteConfig(e3) {
    this._instance.persistence && this._instance.persistence.register({ [an]: !(e3 == null || !e3.productTours) }), this.loadIfEnabled();
  }
  loadIfEnabled() {
    var e3, t4;
    this.Ri || (e3 = this._instance).config.disable_product_tours || (t4 = e3.persistence) == null || !t4.get_property(an) || this.it((() => this.Oi()));
  }
  it(e3) {
    var t4, n2;
    (t4 = f.__PosthogExtensions__) != null && t4.generateProductTours ? e3() : (n2 = f.__PosthogExtensions__) == null || n2.loadExternalDependency == null || n2.loadExternalDependency(this._instance, `product-tours`, ((t5) => {
      t5 ? Na.error(`Could not load product tours script`, t5) : e3();
    }));
  }
  Oi() {
    var e3;
    !this.Ri && (e3 = f.__PosthogExtensions__) != null && e3.generateProductTours && (this.Ri = f.__PosthogExtensions__.generateProductTours(this._instance, true));
  }
  getProductTours(e3, t4) {
    if (t4 === void 0 && (t4 = false), !T(this.Fi) || t4) {
      var n2 = this._instance.persistence;
      if (n2) {
        var r2 = n2.props[Pa];
        if (T(r2) && !t4) return this.Fi = r2, void e3(r2, { isLoaded: true });
      }
      this._instance._send_request({ url: this._instance.requestRouter.endpointFor(`api`, `/api/product_tours/?token=` + this._instance.config.token), method: `GET`, callback: (t5) => {
        var r3 = t5.statusCode;
        if (r3 !== 200 || !t5.json) {
          var i2 = `Product Tours API could not be loaded, status: ` + r3;
          Na.error(i2), e3([], { isLoaded: false, error: i2 });
        } else {
          var a2 = T(t5.json.product_tours) ? t5.json.product_tours : [];
          this.Fi = a2, n2 && n2.register({ [Pa]: a2 }), e3(a2, { isLoaded: true });
        }
      } });
    } else e3(this.Fi, { isLoaded: true });
  }
  getActiveProductTours(e3) {
    N(this.Ri) ? e3([], { isLoaded: false, error: `Product tours not loaded` }) : this.Ri.getActiveProductTours(e3);
  }
  showProductTour(e3) {
    var t4;
    (t4 = this.Ri) == null || t4.showTourById(e3);
  }
  previewTour(e3) {
    this.Ri ? this.Ri.previewTour(e3) : this.it((() => {
      var t4;
      this.Oi(), (t4 = this.Ri) == null || t4.previewTour(e3);
    }));
  }
  dismissProductTour() {
    var e3;
    (e3 = this.Ri) == null || e3.dismissTour(`user_clicked_skip`);
  }
  nextStep() {
    var e3;
    (e3 = this.Ri) == null || e3.nextStep();
  }
  previousStep() {
    var e3;
    (e3 = this.Ri) == null || e3.previousStep();
  }
  clearCache() {
    var e3;
    this.Fi = null, (e3 = this._instance.persistence) == null || e3.unregister(Pa);
  }
  resetTour(e3) {
    var t4;
    (t4 = this.Ri) == null || t4.resetTour(e3);
  }
  resetAllTours() {
    var e3;
    (e3 = this.Ri) == null || e3.resetAllTours();
  }
  cancelPendingTour(e3) {
    var t4;
    (t4 = this.Ri) == null || t4.cancelPendingTour(e3);
  }
}, Ia = (function(e3) {
  return e3.Activation = `events`, e3.Cancellation = `cancelEvents`, e3;
})({});
(function(e3) {
  return e3.Button = `button`, e3.Tab = `tab`, e3.Selector = `selector`, e3;
})({}), (function(e3) {
  return e3.TopLeft = `top_left`, e3.TopRight = `top_right`, e3.TopCenter = `top_center`, e3.MiddleLeft = `middle_left`, e3.MiddleRight = `middle_right`, e3.MiddleCenter = `middle_center`, e3.Left = `left`, e3.Center = `center`, e3.Right = `right`, e3.NextToTrigger = `next_to_trigger`, e3;
})({}), (function(e3) {
  return e3.Top = `top`, e3.Left = `left`, e3.Right = `right`, e3.Bottom = `bottom`, e3;
})({});
var La = (function(e3) {
  return e3.Popover = `popover`, e3.API = `api`, e3.Widget = `widget`, e3.ExternalSurvey = `external_survey`, e3;
})({});
(function(e3) {
  return e3.Open = `open`, e3.MultipleChoice = `multiple_choice`, e3.SingleChoice = `single_choice`, e3.Rating = `rating`, e3.Link = `link`, e3;
})({}), (function(e3) {
  return e3.NextQuestion = `next_question`, e3.End = `end`, e3.ResponseBased = `response_based`, e3.SpecificQuestion = `specific_question`, e3;
})({}), (function(e3) {
  return e3.Once = `once`, e3.Recurring = `recurring`, e3.Always = `always`, e3;
})({});
var Ra = (function(e3) {
  return e3.SHOWN = `survey shown`, e3.DISMISSED = `survey dismissed`, e3.SENT = `survey sent`, e3.ABANDONED = `survey abandoned`, e3;
})({}), za = (function(e3) {
  return e3.SURVEY_ID = `$survey_id`, e3.SURVEY_NAME = `$survey_name`, e3.SURVEY_RESPONSE = `$survey_response`, e3.SURVEY_ITERATION = `$survey_iteration`, e3.SURVEY_ITERATION_START_DATE = `$survey_iteration_start_date`, e3.SURVEY_PARTIALLY_COMPLETED = `$survey_partially_completed`, e3.SURVEY_SUBMISSION_ID = `$survey_submission_id`, e3.SURVEY_QUESTIONS = `$survey_questions`, e3.SURVEY_COMPLETED = `$survey_completed`, e3.PRODUCT_TOUR_ID = `$product_tour_id`, e3.SURVEY_LAST_SEEN_DATE = `$survey_last_seen_date`, e3;
})({}), Ba = (function(e3) {
  return e3.Popover = `popover`, e3.Inline = `inline`, e3;
})({}), $ = U(`[Surveys]`), Va = `seenSurvey_`, Ha = (e3, t4) => {
  var n2 = `$survey_` + t4 + `/` + e3.id;
  return e3.current_iteration && e3.current_iteration > 0 && (n2 = `$survey_` + t4 + `/` + e3.id + `/` + e3.current_iteration), n2;
}, Ua = (e3) => ((e4, t4) => {
  var n2 = `` + e4 + t4.id;
  return t4.current_iteration && t4.current_iteration > 0 && (n2 = `` + e4 + t4.id + `_` + t4.current_iteration), n2;
})(Va, e3), Wa = [La.Popover, La.Widget, La.API], Ga = { ignoreConditions: false, ignoreDelay: false, displayType: Ba.Popover }, Ka = class {
  constructor() {
    this.Mi = {}, this.Mi = {};
  }
  on(e3, t4) {
    return this.Mi[e3] || (this.Mi[e3] = []), this.Mi[e3].push(t4), () => {
      this.Mi[e3] = this.Mi[e3].filter(((e4) => e4 !== t4));
    };
  }
  emit(e3, t4) {
    for (var n2 of this.Mi[e3] || []) n2(t4);
    for (var r2 of this.Mi[`*`] || []) r2(e3, t4);
  }
};
function qa(e3, t4, n2) {
  if (N(e3)) return false;
  switch (n2) {
    case `exact`:
      return e3 === t4;
    case `contains`:
      var r2 = t4.replace(/[.*+?^${}()|[\]\\]/g, `\\$&`).replace(/_/g, `.`).replace(/%/g, `.*`);
      return new RegExp(r2, `i`).test(e3);
    case `regex`:
      try {
        return new RegExp(t4).test(e3);
      } catch {
        return false;
      }
    default:
      return false;
  }
}
var Ja = class {
  constructor(e3) {
    this.Ai = new Ka(), this.ji = (e4, t4) => this.Di(e4, t4) && this.Li(e4, t4) && this.Ni(e4, t4) && this.Ui(e4, t4), this.Di = (e4, t4) => t4 == null || !t4.event || (e4 == null ? void 0 : e4.event) === (t4 == null ? void 0 : t4.event), this._instance = e3, this.zi = /* @__PURE__ */ new Set(), this.Hi = /* @__PURE__ */ new Set();
  }
  init() {
    var _a2;
    if (!k((_a2 = this._instance) == null ? void 0 : _a2._addCaptureHook)) {
      var e3;
      (e3 = this._instance) == null || e3._addCaptureHook(((e4, t4) => {
        this.on(e4, t4);
      }));
    }
  }
  register(e3) {
    var _a2;
    var t4;
    if (!k((_a2 = this._instance) == null ? void 0 : _a2._addCaptureHook) && (e3.forEach(((e4) => {
      var t5, n3;
      (t5 = this.Hi) == null || t5.add(e4), (n3 = e4.steps) == null || n3.forEach(((e5) => {
        var t6;
        (t6 = this.zi) == null || t6.add((e5 == null ? void 0 : e5.event) || ``);
      }));
    })), (t4 = this._instance) != null && t4.autocapture)) {
      var n2, r2 = /* @__PURE__ */ new Set();
      e3.forEach(((e4) => {
        var t5;
        (t5 = e4.steps) == null || t5.forEach(((e5) => {
          e5 != null && e5.selector && r2.add(e5 == null ? void 0 : e5.selector);
        }));
      })), (n2 = this._instance) == null || n2.autocapture.setElementSelectors(r2);
    }
  }
  on(e3, t4) {
    var _a2;
    t4 != null && e3.length != 0 && (this.zi.has(e3) || this.zi.has(t4 == null ? void 0 : t4.event)) && this.Hi && ((_a2 = this.Hi) == null ? void 0 : _a2.size) > 0 && this.Hi.forEach(((e4) => {
      this.Bi(t4, e4) && this.Ai.emit(`actionCaptured`, e4.name);
    }));
  }
  qi(e3) {
    this.onAction(`actionCaptured`, ((t4) => e3(t4)));
  }
  Bi(e3, t4) {
    if ((t4 == null ? void 0 : t4.steps) == null) return false;
    for (var n2 of t4.steps) if (this.ji(e3, n2)) return true;
    return false;
  }
  onAction(e3, t4) {
    return this.Ai.on(e3, t4);
  }
  Li(e3, t4) {
    if (t4 != null && t4.url) {
      var n2, r2 = e3 == null || (n2 = e3.properties) == null ? void 0 : n2.$current_url;
      if (!r2 || typeof r2 != `string` || !qa(r2, t4.url, t4.url_matching || `contains`)) return false;
    }
    return true;
  }
  Ni(e3, t4) {
    return !!this.Wi(e3, t4) && !!this.Gi(e3, t4) && !!this.Vi(e3, t4);
  }
  Wi(e3, t4) {
    var n2;
    if (t4 == null || !t4.href) return true;
    var r2 = this.Ji(e3);
    if (r2.length > 0) return r2.some(((e4) => qa(e4.href, t4.href, t4.href_matching || `exact`)));
    var i2, a2 = (e3 == null || (n2 = e3.properties) == null ? void 0 : n2.$elements_chain) || ``;
    return !!a2 && qa((i2 = a2.match(/(?::|")href="(.*?)"/)) ? i2[1] : ``, t4.href, t4.href_matching || `exact`);
  }
  Gi(e3, t4) {
    var n2;
    if (t4 == null || !t4.text) return true;
    var r2 = this.Ji(e3);
    if (r2.length > 0) return r2.some(((e4) => qa(e4.text, t4.text, t4.text_matching || `exact`) || qa(e4.$el_text, t4.text, t4.text_matching || `exact`)));
    var i2, a2, o2, s2 = (e3 == null || (n2 = e3.properties) == null ? void 0 : n2.$elements_chain) || ``;
    return !!s2 && (i2 = (function(e4) {
      for (var t5, n3 = [], r3 = /(?::|")text="(.*?)"/g; !N(t5 = r3.exec(e4)); ) n3.includes(t5[1]) || n3.push(t5[1]);
      return n3;
    })(s2), a2 = t4.text, o2 = t4.text_matching || `exact`, i2.some(((e4) => qa(e4, a2, o2))));
  }
  Vi(e3, t4) {
    var n2, r2;
    if (t4 == null || !t4.selector) return true;
    var i2 = e3 == null || (n2 = e3.properties) == null ? void 0 : n2.$element_selectors;
    if (i2 != null && i2.includes(t4.selector)) return true;
    var a2 = (e3 == null || (r2 = e3.properties) == null ? void 0 : r2.$elements_chain) || ``;
    if (t4.selector_regex && a2) try {
      return new RegExp(t4.selector_regex).test(a2);
    } catch {
      return false;
    }
    return false;
  }
  Ji(e3) {
    var t4;
    return (e3 == null || (t4 = e3.properties) == null ? void 0 : t4.$elements) == null ? [] : e3 == null ? void 0 : e3.properties.$elements;
  }
  Ui(e3, t4) {
    return t4 == null || !t4.properties || t4.properties.length === 0 || _a(t4.properties.reduce(((e4, t5) => {
      var n2 = T(t5.value) ? t5.value.map(String) : t5.value == null ? [] : [String(t5.value)];
      return e4[t5.key] = { values: n2, operator: t5.operator || `exact` }, e4;
    }), {}), e3 == null ? void 0 : e3.properties);
  }
}, Ya = class {
  constructor(e3) {
    this._instance = e3, this.Ki = /* @__PURE__ */ new Map(), this.Yi = /* @__PURE__ */ new Map(), this.Xi = /* @__PURE__ */ new Map();
  }
  Qi(e3, t4) {
    return !!e3 && _a(e3.propertyFilters, t4 == null ? void 0 : t4.properties);
  }
  Zi(e3, t4) {
    var n2 = /* @__PURE__ */ new Map();
    return e3.forEach(((e4) => {
      var r2;
      (r2 = e4.conditions) == null || (r2 = r2[t4]) == null || (r2 = r2.values) == null || r2.forEach(((t5) => {
        if (t5 != null && t5.name) {
          var r3 = n2.get(t5.name) || [];
          r3.push(e4.id), n2.set(t5.name, r3);
        }
      }));
    })), n2;
  }
  te(e3, t4, n2) {
    var r2 = (n2 === Ia.Activation ? this.Ki : this.Yi).get(e3), i2 = [];
    return this.ie(((e4) => {
      i2 = e4.filter(((e5) => r2 == null ? void 0 : r2.includes(e5.id)));
    })), i2.filter(((r3) => {
      var i3, a2 = (i3 = r3.conditions) == null || (i3 = i3[n2]) == null || (i3 = i3.values) == null ? void 0 : i3.find(((t5) => t5.name === e3));
      return this.Qi(a2, t4);
    }));
  }
  register(e3) {
    var _a2;
    k((_a2 = this._instance) == null ? void 0 : _a2._addCaptureHook) || (this.ee(e3), this.re(e3));
  }
  re(e3) {
    var t4 = e3.filter(((e4) => {
      var _a2;
      var t5;
      return ((_a2 = e4.conditions) == null ? void 0 : _a2.actions) && ((t5 = e4.conditions) == null || (t5 = t5.actions) == null || (t5 = t5.values) == null ? void 0 : t5.length) > 0;
    }));
    t4.length !== 0 && (this.se ?? (this.se = new Ja(this._instance), this.se.init(), this.se.qi(((e4) => {
      this.onAction(e4);
    }))), t4.forEach(((e4) => {
      var t5, n2, r2, i2, a2;
      e4.conditions && (t5 = e4.conditions) != null && t5.actions && (n2 = e4.conditions) != null && (n2 = n2.actions) != null && n2.values && ((r2 = e4.conditions) == null || (r2 = r2.actions) == null || (r2 = r2.values) == null ? void 0 : r2.length) > 0 && ((i2 = this.se) == null || i2.register(e4.conditions.actions.values), (a2 = e4.conditions) == null || (a2 = a2.actions) == null || (a2 = a2.values) == null || a2.forEach(((t6) => {
        if (t6 && t6.name) {
          var n3 = this.Xi.get(t6.name);
          n3 && n3.push(e4.id), this.Xi.set(t6.name, n3 || [e4.id]);
        }
      })));
    })));
  }
  ee(e3) {
    var t4, n2 = e3.filter(((e4) => {
      var _a2;
      var t5;
      return ((_a2 = e4.conditions) == null ? void 0 : _a2.events) && ((t5 = e4.conditions) == null || (t5 = t5.events) == null || (t5 = t5.values) == null ? void 0 : t5.length) > 0;
    })), r2 = e3.filter(((e4) => {
      var _a2;
      var t5;
      return ((_a2 = e4.conditions) == null ? void 0 : _a2.cancelEvents) && ((t5 = e4.conditions) == null || (t5 = t5.cancelEvents) == null || (t5 = t5.values) == null ? void 0 : t5.length) > 0;
    }));
    (n2.length !== 0 || r2.length !== 0) && ((t4 = this._instance) == null || t4._addCaptureHook(((e4, t5) => {
      this.onEvent(e4, t5);
    })), this.Ki = this.Zi(e3, Ia.Activation), this.Yi = this.Zi(e3, Ia.Cancellation));
  }
  onEvent(e3, t4) {
    var n2, r2 = this.ne(), i2 = this.oe(), a2 = this.ae(), o2 = ((n2 = this._instance) == null || (n2 = n2.persistence) == null ? void 0 : n2.props[i2]) || [];
    if (a2 === e3 && t4 && o2.length > 0) {
      var s2, c2;
      r2.info(`event matched, removing item from activated items`, { event: e3, eventPayload: t4, existingActivatedItems: o2 });
      var l2 = (t4 == null || (s2 = t4.properties) == null ? void 0 : s2.$survey_id) || (t4 == null || (c2 = t4.properties) == null ? void 0 : c2.$product_tour_id);
      if (l2) {
        var u2 = o2.indexOf(l2);
        u2 >= 0 && (o2.splice(u2, 1), this.le(o2));
      }
    } else {
      if (this.Yi.has(e3)) {
        var d2 = this.te(e3, t4, Ia.Cancellation);
        d2.length > 0 && (r2.info(`cancel event matched, cancelling items`, { event: e3, itemsToCancel: d2.map(((e4) => e4.id)) }), d2.forEach(((e4) => {
          var t5 = o2.indexOf(e4.id);
          t5 >= 0 && o2.splice(t5, 1), this.ue(e4.id);
        })), this.le(o2));
      }
      if (this.Ki.has(e3)) {
        r2.info(`event name matched`, { event: e3, eventPayload: t4, items: this.Ki.get(e3) });
        var f2 = this.te(e3, t4, Ia.Activation);
        this.le(o2.concat(f2.map(((e4) => e4.id)) || []));
      }
    }
  }
  onAction(e3) {
    var t4, n2 = this.oe(), r2 = ((t4 = this._instance) == null || (t4 = t4.persistence) == null ? void 0 : t4.props[n2]) || [];
    this.Xi.has(e3) && this.le(r2.concat(this.Xi.get(e3) || []));
  }
  le(e3) {
    var t4, n2 = this.ne(), r2 = this.oe(), i2 = [...new Set(e3)].filter(((e4) => !this.he(e4)));
    n2.info(`updating activated items`, { activatedItems: i2 }), (t4 = this._instance) == null || (t4 = t4.persistence) == null || t4.register({ [r2]: i2 });
  }
  getActivatedIds() {
    var e3, t4 = this.oe();
    return ((e3 = this._instance) == null || (e3 = e3.persistence) == null ? void 0 : e3.props[t4]) || [];
  }
  getEventToItemsMap() {
    return this.Ki;
  }
  de() {
    return this.se;
  }
}, Xa = class extends Ya {
  constructor(e3) {
    super(e3);
  }
  oe() {
    return `$surveys_activated`;
  }
  ae() {
    return Ra.SHOWN;
  }
  ie(e3) {
    var t4;
    (t4 = this._instance) == null || t4.getSurveys(e3);
  }
  ue(e3) {
    var t4;
    (t4 = this._instance) == null || t4.cancelPendingSurvey(e3);
  }
  ne() {
    return $;
  }
  he() {
    return false;
  }
  getSurveys() {
    return this.getActivatedIds();
  }
  getEventToSurveys() {
    return this.getEventToItemsMap();
  }
}, Za = class {
  constructor(e3) {
    this.ve = void 0, this._surveyManager = null, this.ce = false, this.fe = [], this.pe = null, this._instance = e3, this._surveyEventReceiver = null;
  }
  onRemoteConfig(e3) {
    if (!this._instance.config.disable_surveys) {
      var t4 = e3.surveys;
      if (N(t4)) return $.warn(`Flags not loaded yet. Not loading surveys.`);
      var n2 = T(t4);
      this.ve = n2 ? t4.length > 0 : t4, $.info(`flags response received, isSurveysEnabled: ` + this.ve), this.loadIfEnabled();
    }
  }
  reset() {
    localStorage.removeItem(`lastSeenSurveyDate`);
    for (var e3 = [], t4 = 0; t4 < localStorage.length; t4++) {
      var n2 = localStorage.key(t4);
      (n2 != null && n2.startsWith(Va) || n2 != null && n2.startsWith(`inProgressSurvey_`)) && e3.push(n2);
    }
    e3.forEach(((e4) => localStorage.removeItem(e4)));
  }
  loadIfEnabled() {
    if (!this._surveyManager) {
      if (this.ce) $.info(`Already initializing surveys, skipping...`);
      else if (this._instance.config.disable_surveys) $.info(`Disabled. Not loading surveys.`);
      else if (this._instance.config.cookieless_mode && this._instance.consent.isOptedOut()) $.info(`Not loading surveys in cookieless mode without consent.`);
      else {
        var e3 = f == null ? void 0 : f.__PosthogExtensions__;
        if (e3) {
          if (!k(this.ve) || this._instance.config.advanced_enable_surveys) {
            var t4 = this.ve || this._instance.config.advanced_enable_surveys;
            this.ce = true;
            try {
              var n2 = e3.generateSurveys;
              if (n2) return void this.ge(n2, t4);
              var r2 = e3.loadExternalDependency;
              if (!r2) return void this._e(`PostHog loadExternalDependency extension not found.`);
              r2(this._instance, `surveys`, ((n3) => {
                n3 || !e3.generateSurveys ? this._e(`Could not load surveys script`, n3) : this.ge(e3.generateSurveys, t4);
              }));
            } catch (e4) {
              throw this._e(`Error initializing surveys`, e4), e4;
            } finally {
              this.ce = false;
            }
          }
        } else $.error(`PostHog Extensions not found.`);
      }
    }
  }
  ge(e3, t4) {
    this._surveyManager = e3(this._instance, t4), this._surveyEventReceiver = new Xa(this._instance), $.info(`Surveys loaded successfully`), this.me({ isLoaded: true });
  }
  _e(e3, t4) {
    $.error(e3, t4), this.me({ isLoaded: false, error: e3 });
  }
  onSurveysLoaded(e3) {
    return this.fe.push(e3), this._surveyManager && this.me({ isLoaded: true }), () => {
      this.fe = this.fe.filter(((t4) => t4 !== e3));
    };
  }
  getSurveys(e3, t4) {
    if (t4 === void 0 && (t4 = false), this._instance.config.disable_surveys) return $.info(`Disabled. Not loading surveys.`), e3([]);
    var n2, r2 = this._instance.get_property(hn);
    if (r2 && !t4) return e3(r2, { isLoaded: true });
    typeof Promise < `u` && this.pe ? this.pe.then(((t5) => {
      var { surveys: n3, context: r3 } = t5;
      return e3(n3, r3);
    })) : (typeof Promise < `u` && (this.pe = new Promise(((e4) => {
      n2 = e4;
    }))), this._instance._send_request({ url: this._instance.requestRouter.endpointFor(`api`, `/api/surveys/?token=` + this._instance.config.token), method: `GET`, timeout: this._instance.config.surveys_request_timeout_ms, callback: (t5) => {
      var r3;
      this.pe = null;
      var i2 = t5.statusCode;
      if (i2 !== 200 || !t5.json) {
        var a2 = `Surveys API could not be loaded, status: ` + i2;
        $.error(a2);
        var o2 = { isLoaded: false, error: a2 };
        e3([], o2), n2 == null ? void 0 : n2({ surveys: [], context: o2 });
      } else {
        var s2, c2 = t5.json.surveys || [], l2 = c2.filter(((e4) => (function(e5) {
          return !(!e5.start_date || e5.end_date);
        })(e4) && ((function(e5) {
          var t6;
          return !((t6 = e5.conditions) == null || (t6 = t6.events) == null || (t6 = t6.values) == null || !t6.length);
        })(e4) || (function(e5) {
          var t6;
          return !((t6 = e5.conditions) == null || (t6 = t6.actions) == null || (t6 = t6.values) == null || !t6.length);
        })(e4))));
        l2.length > 0 && ((s2 = this._surveyEventReceiver) == null || s2.register(l2)), (r3 = this._instance.persistence) == null || r3.register({ [hn]: c2 });
        var u2 = { isLoaded: true };
        e3(c2, u2), n2 == null ? void 0 : n2({ surveys: c2, context: u2 });
      }
    } }));
  }
  me(e3) {
    for (var t4 of this.fe) try {
      if (!e3.isLoaded) return t4([], e3);
      this.getSurveys(t4);
    } catch (e4) {
      $.error(`Error in survey callback`, e4);
    }
  }
  getActiveMatchingSurveys(e3, t4) {
    if (t4 === void 0 && (t4 = false), !N(this._surveyManager)) return this._surveyManager.getActiveMatchingSurveys(e3, t4);
    $.warn(`init was not called`);
  }
  be(e3) {
    var t4 = null;
    return this.getSurveys(((n2) => {
      t4 = n2.find(((t5) => t5.id === e3)) ?? null;
    })), t4;
  }
  ye(e3) {
    if (N(this._surveyManager)) return { eligible: false, reason: `SDK is not enabled or survey functionality is not yet loaded` };
    var t4 = typeof e3 == `string` ? this.be(e3) : e3;
    return t4 ? this._surveyManager.checkSurveyEligibility(t4) : { eligible: false, reason: `Survey not found` };
  }
  canRenderSurvey(e3) {
    if (N(this._surveyManager)) return $.warn(`init was not called`), { visible: false, disabledReason: `SDK is not enabled or survey functionality is not yet loaded` };
    var t4 = this.ye(e3);
    return { visible: t4.eligible, disabledReason: t4.reason };
  }
  canRenderSurveyAsync(e3, t4) {
    return N(this._surveyManager) ? ($.warn(`init was not called`), Promise.resolve({ visible: false, disabledReason: `SDK is not enabled or survey functionality is not yet loaded` })) : new Promise(((n2) => {
      this.getSurveys(((t5) => {
        var r2 = t5.find(((t6) => t6.id === e3)) ?? null;
        if (r2) {
          var i2 = this.ye(r2);
          n2({ visible: i2.eligible, disabledReason: i2.reason });
        } else n2({ visible: false, disabledReason: `Survey not found` });
      }), t4);
    }));
  }
  renderSurvey(e3, t4, n2) {
    var r2;
    if (N(this._surveyManager)) $.warn(`init was not called`);
    else {
      var i2 = typeof e3 == `string` ? this.be(e3) : e3;
      if (i2 != null && i2.id) {
        if (Wa.includes(i2.type)) {
          var a2 = o == null ? void 0 : o.querySelector(t4);
          if (a2) return (r2 = i2.appearance) != null && r2.surveyPopupDelaySeconds ? ($.info(`Rendering survey ` + i2.id + ` with delay of ` + i2.appearance.surveyPopupDelaySeconds + ` seconds`), void setTimeout((() => {
            var _a2;
            var e4;
            $.info(`Rendering survey ` + i2.id + ` with delay of ` + ((_a2 = i2.appearance) == null ? void 0 : _a2.surveyPopupDelaySeconds) + ` seconds`), (e4 = this._surveyManager) == null || e4.renderSurvey(i2, a2, n2), $.info(`Survey ` + i2.id + ` rendered`);
          }), 1e3 * i2.appearance.surveyPopupDelaySeconds)) : void this._surveyManager.renderSurvey(i2, a2, n2);
          $.warn(`Survey element not found`);
        } else $.warn(`Surveys of type ` + i2.type + ` cannot be rendered in the app`);
      } else $.warn(`Survey not found`);
    }
  }
  displaySurvey(e3, t4) {
    var n2;
    if (N(this._surveyManager)) $.warn(`init was not called`);
    else {
      var r2 = this.be(e3);
      if (r2) {
        var i2 = r2;
        if ((n2 = r2.appearance) != null && n2.surveyPopupDelaySeconds && t4.ignoreDelay && (i2 = g({}, r2, { appearance: g({}, r2.appearance, { surveyPopupDelaySeconds: 0 }) })), t4.displayType !== Ba.Popover && t4.initialResponses && $.warn(`initialResponses is only supported for popover surveys. prefill will not be applied.`), false === t4.ignoreConditions) {
          var a2 = this.canRenderSurvey(r2);
          if (!a2.visible) return void $.warn(`Survey is not eligible to be displayed: `, a2.disabledReason);
        }
        t4.displayType === Ba.Inline ? this.renderSurvey(i2, t4.selector, t4.properties) : this._surveyManager.handlePopoverSurvey(i2, t4);
      } else $.warn(`Survey not found`);
    }
  }
  cancelPendingSurvey(e3) {
    N(this._surveyManager) ? $.warn(`init was not called`) : this._surveyManager.cancelSurvey(e3);
  }
  handlePageUnload() {
    var e3;
    (e3 = this._surveyManager) == null || e3.handlePageUnload();
  }
}, Qa = U(`[Conversations]`), $a = class {
  constructor(e3) {
    this.we = void 0, this._conversationsManager = null, this.xe = false, this.Ee = null, this._instance = e3;
  }
  onRemoteConfig(e3) {
    if (!this._instance.config.disable_conversations) {
      var t4 = e3.conversations;
      N(t4) || (I(t4) ? this.we = t4 : (this.we = t4.enabled, this.Ee = t4), this.loadIfEnabled());
    }
  }
  reset() {
    var e3;
    (e3 = this._conversationsManager) == null || e3.reset(), this._conversationsManager = null, this.we = void 0, this.Ee = null;
  }
  loadIfEnabled() {
    if (!this._conversationsManager && !this.xe && !(this._instance.config.disable_conversations || this._instance.config.cookieless_mode && this._instance.consent.isOptedOut())) {
      var e3 = f == null ? void 0 : f.__PosthogExtensions__;
      if (e3 && !k(this.we) && this.we) {
        if (this.Ee && this.Ee.token) {
          this.xe = true;
          try {
            var t4 = e3.initConversations;
            if (t4) return this.$e(t4), void (this.xe = false);
            var n2 = e3.loadExternalDependency;
            if (!n2) return void this.Se(`PostHog loadExternalDependency extension not found.`);
            n2(this._instance, `conversations`, ((t5) => {
              t5 || !e3.initConversations ? this.Se(`Could not load conversations script`, t5) : this.$e(e3.initConversations), this.xe = false;
            }));
          } catch (e4) {
            this.Se(`Error initializing conversations`, e4), this.xe = false;
          }
        } else Qa.error(`Conversations enabled but missing token in remote config.`);
      }
    }
  }
  $e(e3) {
    if (this.Ee) try {
      this._conversationsManager = e3(this.Ee, this._instance), Qa.info(`Conversations loaded successfully`);
    } catch (e4) {
      this.Se(`Error completing conversations initialization`, e4);
    }
    else Qa.error(`Cannot complete initialization: remote config is null`);
  }
  Se(e3, t4) {
    Qa.error(e3, t4), this._conversationsManager = null, this.xe = false;
  }
  show() {
    this._conversationsManager ? this._conversationsManager.show() : Qa.warn(`Conversations not loaded yet.`);
  }
  hide() {
    this._conversationsManager && this._conversationsManager.hide();
  }
  isAvailable() {
    return true === this.we && !M(this._conversationsManager);
  }
  isVisible() {
    var _a2;
    var e3;
    return (e3 = (_a2 = this._conversationsManager) == null ? void 0 : _a2.isVisible()) != null && e3;
  }
  sendMessage(e3, t4, n2) {
    var r2 = this;
    return h((function* () {
      return r2._conversationsManager ? r2._conversationsManager.sendMessage(e3, t4, n2) : (Qa.warn(`Conversations not available yet.`), null);
    }))();
  }
  getMessages(e3, t4) {
    var n2 = this;
    return h((function* () {
      return n2._conversationsManager ? n2._conversationsManager.getMessages(e3, t4) : (Qa.warn(`Conversations not available yet.`), null);
    }))();
  }
  markAsRead(e3) {
    var t4 = this;
    return h((function* () {
      return t4._conversationsManager ? t4._conversationsManager.markAsRead(e3) : (Qa.warn(`Conversations not available yet.`), null);
    }))();
  }
  getTickets(e3) {
    var t4 = this;
    return h((function* () {
      return t4._conversationsManager ? t4._conversationsManager.getTickets(e3) : (Qa.warn(`Conversations not available yet.`), null);
    }))();
  }
  getCurrentTicketId() {
    var _a2;
    return ((_a2 = this._conversationsManager) == null ? void 0 : _a2.getCurrentTicketId()) ?? null;
  }
  getWidgetSessionId() {
    var _a2;
    return ((_a2 = this._conversationsManager) == null ? void 0 : _a2.getWidgetSessionId()) ?? null;
  }
}, eo = class {
  constructor(e3) {
    var t4;
    this.ke = false, this.Pe = false, this._instance = e3, this._instance && (t4 = this._instance.config.logs) != null && t4.captureConsoleLogs && (this.ke = true);
  }
  onRemoteConfig(e3) {
    var _a2;
    var t4 = (_a2 = e3.logs) == null ? void 0 : _a2.captureConsoleLogs;
    !N(t4) && t4 && (this.ke = true, this.loadIfEnabled());
  }
  reset() {
  }
  loadIfEnabled() {
    if (this.ke && !this.Pe) {
      var e3 = U(`[logs]`), t4 = f == null ? void 0 : f.__PosthogExtensions__;
      if (t4) {
        var n2 = t4.loadExternalDependency;
        n2 ? n2(this._instance, `logs`, ((n3) => {
          var r2;
          n3 || (r2 = t4.logs) == null || !r2.initializeLogs ? e3.error(`Could not load logs script`, n3) : (t4.logs.initializeLogs(this._instance), this.Pe = true);
        })) : e3.error(`PostHog loadExternalDependency extension not found.`);
      } else e3.error(`PostHog Extensions not found.`);
    }
  }
}, to = U(`[RateLimiter]`), no = class {
  constructor(e3) {
    this.serverLimits = {}, this.lastEventRateLimited = false, this.checkForLimiting = (e4) => {
      var t4 = e4.text;
      if (t4 && t4.length) try {
        (JSON.parse(t4).quota_limited || []).forEach(((e5) => {
          to.info((e5 || `events`) + ` is quota limited.`), this.serverLimits[e5] = (/* @__PURE__ */ new Date()).getTime() + 6e4;
        }));
      } catch (e5) {
        to.warn(`could not rate limit - continuing. Error: "` + (e5 == null ? void 0 : e5.message) + `"`, { text: t4 });
        return;
      }
    }, this.instance = e3, this.lastEventRateLimited = this.clientRateLimitContext(true).isRateLimited;
  }
  get captureEventsPerSecond() {
    var _a2;
    return ((_a2 = this.instance.config.rate_limiting) == null ? void 0 : _a2.events_per_second) || 10;
  }
  get captureEventsBurstLimit() {
    var _a2;
    return Math.max(((_a2 = this.instance.config.rate_limiting) == null ? void 0 : _a2.events_burst_limit) || 10 * this.captureEventsPerSecond, this.captureEventsPerSecond);
  }
  clientRateLimitContext(e3) {
    var _a2;
    var t4;
    e3 === void 0 && (e3 = false);
    var { captureEventsBurstLimit: n2, captureEventsPerSecond: r2 } = this, i2 = (/* @__PURE__ */ new Date()).getTime(), a2 = ((_a2 = this.instance.persistence) == null ? void 0 : _a2.get_property(yn)) ?? { tokens: n2, last: i2 };
    a2.tokens += (i2 - a2.last) / 1e3 * r2, a2.last = i2, a2.tokens > n2 && (a2.tokens = n2);
    var o2 = a2.tokens < 1;
    return o2 || e3 || (a2.tokens = Math.max(0, a2.tokens - 1)), !o2 || this.lastEventRateLimited || e3 || this.instance.capture(`$$client_ingestion_warning`, { $$client_ingestion_warning_message: `posthog-js client rate limited. Config is set to ` + r2 + ` events per second and ` + n2 + ` events burst limit.` }, { skip_client_rate_limiting: true }), this.lastEventRateLimited = o2, (t4 = this.instance.persistence) == null || t4.set_property(yn, a2), { isRateLimited: o2, remainingTokens: a2.tokens };
  }
  isServerRateLimited(e3) {
    var t4 = this.serverLimits[e3 || `events`] || false;
    return false !== t4 && (/* @__PURE__ */ new Date()).getTime() < t4;
  }
}, ro = U(`[RemoteConfig]`), io = class {
  constructor(e3) {
    this._instance = e3;
  }
  get remoteConfig() {
    var e3;
    return (e3 = f._POSTHOG_REMOTE_CONFIG) == null || (e3 = e3[this._instance.config.token]) == null ? void 0 : e3.config;
  }
  Te(e3) {
    var t4, n2;
    (t4 = f.__PosthogExtensions__) != null && t4.loadExternalDependency ? (n2 = f.__PosthogExtensions__) == null || n2.loadExternalDependency == null || n2.loadExternalDependency(this._instance, `remote-config`, (() => e3(this.remoteConfig))) : (ro.error(`PostHog Extensions not found. Cannot load remote config.`), e3());
  }
  Ie(e3) {
    this._instance._send_request({ method: `GET`, url: this._instance.requestRouter.endpointFor(`assets`, `/array/` + this._instance.config.token + `/config`), callback: (t4) => {
      e3(t4.json);
    } });
  }
  load() {
    try {
      if (this.remoteConfig) return ro.info(`Using preloaded remote config`, this.remoteConfig), void this.yi(this.remoteConfig);
      if (this._instance.M()) return void ro.warn(`Remote config is disabled. Falling back to local config.`);
      this.Te(((e3) => {
        if (!e3) return ro.info(`No config found after loading remote JS config. Falling back to JSON.`), void this.Ie(((e4) => {
          this.yi(e4);
        }));
        this.yi(e3);
      }));
    } catch (e3) {
      ro.error(`Error loading remote config`, e3);
    }
  }
  yi(e3) {
    e3 ? this._instance.config.__preview_remote_config ? (this._instance.yi(e3), false !== e3.hasFeatureFlags && this._instance.featureFlags.ensureFlagsLoaded()) : ro.info(`__preview_remote_config is disabled. Logging config instead`, e3) : ro.error(`Failed to fetch remote config from PostHog.`);
  }
}, ao = 3e3, oo = class {
  constructor(e3, t4) {
    this.Ce = true, this.Re = [], this.Fe = z((t4 == null ? void 0 : t4.flush_interval_ms) || ao, 250, 5e3, H.createLogger(`flush interval`), ao), this.Oe = e3;
  }
  enqueue(e3) {
    this.Re.push(e3), this.Me || this.Ae();
  }
  unload() {
    this.je();
    var e3 = this.Re.length > 0 ? this.De() : {}, t4 = Object.values(e3);
    [...t4.filter(((e4) => e4.url.indexOf(`/e`) === 0)), ...t4.filter(((e4) => e4.url.indexOf(`/e`) !== 0))].map(((e4) => {
      this.Oe(g({}, e4, { transport: `sendBeacon` }));
    }));
  }
  enable() {
    this.Ce = false, this.Ae();
  }
  Ae() {
    var e3 = this;
    this.Ce || (this.Me = setTimeout((() => {
      if (this.je(), this.Re.length > 0) {
        var t4 = this.De(), n2 = function() {
          var n3 = t4[r2], i2 = (/* @__PURE__ */ new Date()).getTime();
          n3.data && T(n3.data) && W(n3.data, ((e4) => {
            e4.offset = Math.abs(e4.timestamp - i2), delete e4.timestamp;
          })), e3.Oe(n3);
        };
        for (var r2 in t4) n2();
      }
    }), this.Fe));
  }
  je() {
    clearTimeout(this.Me), this.Me = void 0;
  }
  De() {
    var e3 = {};
    return W(this.Re, ((t4) => {
      var n2, r2 = t4, i2 = (r2 ? r2.batchKey : null) || r2.url;
      k(e3[i2]) && (e3[i2] = g({}, r2, { data: [] })), (n2 = e3[i2].data) == null || n2.push(r2.data);
    })), this.Re = [], e3;
  }
}, so = [`retriesPerformedSoFar`], co = class {
  constructor(t4) {
    this.Le = false, this.Ne = 3e3, this.Re = [], this._instance = t4, this.Re = [], this.Ue = true, !k(e) && `onLine` in e.navigator && (this.Ue = e.navigator.onLine, this.ze = () => {
      this.Ue = true, this.Lt();
    }, this.He = () => {
      this.Ue = false;
    }, K(e, `online`, this.ze), K(e, `offline`, this.He));
  }
  get length() {
    return this.Re.length;
  }
  retriableRequest(e3) {
    var { retriesPerformedSoFar: t4 } = e3, n2 = _(e3, so);
    F(t4) && (n2.url = la(n2.url, { retry_count: t4 })), this._instance._send_request(g({}, n2, { callback: (e4) => {
      e4.statusCode !== 200 && (e4.statusCode < 400 || e4.statusCode >= 500) && (t4 ?? 0) < 10 ? this.Be(g({ retriesPerformedSoFar: t4 }, n2)) : n2.callback == null || n2.callback(e4);
    } }));
  }
  Be(e3) {
    var t4 = e3.retriesPerformedSoFar || 0;
    e3.retriesPerformedSoFar = t4 + 1;
    var n2 = (function(e4) {
      var t5 = 3e3 * 2 ** e4, n3 = t5 / 2, r3 = Math.min(18e5, t5), i3 = (Math.random() - 0.5) * (r3 - n3);
      return Math.ceil(r3 + i3);
    })(t4), r2 = Date.now() + n2;
    this.Re.push({ retryAt: r2, requestOptions: e3 });
    var i2 = `Enqueued failed request for retry in ` + n2;
    navigator.onLine || (i2 += ` (Browser is offline)`), H.warn(i2), this.Le || (this.Le = true, this.qe());
  }
  qe() {
    if (this.We && clearTimeout(this.We), this.Re.length === 0) return this.Le = false, void (this.We = void 0);
    this.We = setTimeout((() => {
      this.Ue && this.Re.length > 0 && this.Lt(), this.qe();
    }), this.Ne);
  }
  Lt() {
    var e3 = Date.now(), t4 = [], n2 = this.Re.filter(((n3) => n3.retryAt < e3 || (t4.push(n3), false)));
    if (this.Re = t4, n2.length > 0) for (var { requestOptions: r2 } of n2) this.retriableRequest(r2);
  }
  unload() {
    for (var { requestOptions: t4 } of (this.We && (this.We = (clearTimeout(this.We), void 0)), this.Le = false, k(e) || (this.ze && (this.ze = (e.removeEventListener(`online`, this.ze), void 0)), this.He && (this.He = (e.removeEventListener(`offline`, this.He), void 0))), this.Re)) try {
      this._instance._send_request(g({}, t4, { transport: `sendBeacon` }));
    } catch (e3) {
      H.error(e3);
    }
    this.Re = [];
  }
}, lo = class {
  constructor(e3) {
    this.Ge = () => {
      this.Ve || (this.Ve = {});
      var e4 = this.scrollElement(), t4 = this.scrollY(), n2 = e4 ? Math.max(0, e4.scrollHeight - e4.clientHeight) : 0, r2 = t4 + ((e4 == null ? void 0 : e4.clientHeight) || 0), i2 = (e4 == null ? void 0 : e4.scrollHeight) || 0;
      this.Ve.lastScrollY = Math.ceil(t4), this.Ve.maxScrollY = Math.max(t4, this.Ve.maxScrollY ?? 0), this.Ve.maxScrollHeight = Math.max(n2, this.Ve.maxScrollHeight ?? 0), this.Ve.lastContentY = r2, this.Ve.maxContentY = Math.max(r2, this.Ve.maxContentY ?? 0), this.Ve.maxContentHeight = Math.max(i2, this.Ve.maxContentHeight ?? 0);
    }, this._instance = e3;
  }
  getContext() {
    return this.Ve;
  }
  resetContext() {
    var e3 = this.Ve;
    return setTimeout(this.Ge, 0), e3;
  }
  startMeasuringScrollPosition() {
    K(e, `scroll`, this.Ge, { capture: true }), K(e, `scrollend`, this.Ge, { capture: true }), K(e, `resize`, this.Ge);
  }
  scrollElement() {
    if (!this._instance.config.scroll_root_selector) return e == null ? void 0 : e.document.documentElement;
    for (var t4 of T(this._instance.config.scroll_root_selector) ? this._instance.config.scroll_root_selector : [this._instance.config.scroll_root_selector]) {
      var n2 = e == null ? void 0 : e.document.querySelector(t4);
      if (n2) return n2;
    }
  }
  scrollY() {
    if (this._instance.config.scroll_root_selector) {
      var t4 = this.scrollElement();
      return t4 && t4.scrollTop || 0;
    }
    return e && (e.scrollY || e.pageYOffset || e.document.documentElement.scrollTop) || 0;
  }
  scrollX() {
    if (this._instance.config.scroll_root_selector) {
      var t4 = this.scrollElement();
      return t4 && t4.scrollLeft || 0;
    }
    return e && (e.scrollX || e.pageXOffset || e.document.documentElement.scrollLeft) || 0;
  }
}, uo = (e3) => gi(e3 == null ? void 0 : e3.config.mask_personal_data_properties, e3 == null ? void 0 : e3.config.custom_personal_data_properties), fo = class {
  constructor(e3, t4, n2, r2) {
    this.Je = (e4) => {
      var t5 = this.Ke();
      if (!t5 || t5.sessionId !== e4) {
        var n3 = { sessionId: e4, props: this.Ye(this._instance) };
        this.Xe.register({ [vn]: n3 });
      }
    }, this._instance = e3, this.Qe = t4, this.Xe = n2, this.Ye = r2 || uo, this.Qe.onSessionId(this.Je);
  }
  Ke() {
    return this.Xe.props[vn];
  }
  getSetOnceProps() {
    var _a2;
    var e3 = (_a2 = this.Ke()) == null ? void 0 : _a2.props;
    return e3 ? `r` in e3 ? _i(e3) : { $referring_domain: e3.referringDomain, $pathname: e3.initialPathName, utm_source: e3.utm_source, utm_campaign: e3.utm_campaign, utm_medium: e3.utm_medium, utm_content: e3.utm_content, utm_term: e3.utm_term } : {};
  }
  getSessionProps() {
    var e3 = {};
    return W(Ut(this.getSetOnceProps()), ((t4, n2) => {
      n2 === `$current_url` && (n2 = `url`), e3[`$session_entry_` + S(n2)] = t4;
    })), e3;
  }
}, po = U(`[SessionId]`), mo = class {
  on(e3, t4) {
    return this.Ze.on(e3, t4);
  }
  constructor(e3, t4, n2) {
    var r2;
    if (this.tr = [], this.ir = void 0, this.Ze = new Ka(), this.er = (e4, t5) => !(!F(e4) || !F(t5)) && Math.abs(e4 - t5) > this.sessionTimeoutMs, !e3.persistence) throw Error(`SessionIdManager requires a PostHogPersistence instance`);
    if (e3.config.cookieless_mode === `always`) throw Error(`SessionIdManager cannot be used with cookieless_mode="always"`);
    this.R = e3.config, this.Xe = e3.persistence, this.rr = void 0, this.sr = void 0, this._sessionStartTimestamp = null, this._sessionActivityTimestamp = null, this.nr = t4 || Dr, this.ar = n2 || Dr;
    var i2 = this.R.persistence_name || this.R.token, a2 = this.R.session_idle_timeout_seconds || 1800;
    if (this._sessionTimeoutMs = 1e3 * z(a2, 60, 36e3, po.createLogger(`session_idle_timeout_seconds`), 1800), e3.register({ $configured_session_timeout_ms: this._sessionTimeoutMs }), this.lr(), this.ur = `ph_` + i2 + `_window_id`, this.hr = `ph_` + i2 + `_primary_window_exists`, this.dr()) {
      var o2 = J.W(this.ur), s2 = J.W(this.hr);
      o2 && !s2 ? this.rr = o2 : J.V(this.ur), J.G(this.hr, true);
    }
    if ((r2 = this.R.bootstrap) != null && r2.sessionID) try {
      var c2 = ((e4) => {
        var t5 = e4.replace(/-/g, ``);
        if (t5.length !== 32) throw Error(`Not a valid UUID`);
        if (t5[12] !== `7`) throw Error(`Not a UUIDv7`);
        return parseInt(t5.substring(0, 12), 16);
      })(this.R.bootstrap.sessionID);
      this.vr(this.R.bootstrap.sessionID, (/* @__PURE__ */ new Date()).getTime(), c2);
    } catch (e4) {
      po.error(`Invalid sessionID in bootstrap`, e4);
    }
    this.cr();
  }
  get sessionTimeoutMs() {
    return this._sessionTimeoutMs;
  }
  onSessionId(e3) {
    return k(this.tr) && (this.tr = []), this.tr.push(e3), this.sr && e3(this.sr, this.rr), () => {
      this.tr = this.tr.filter(((t4) => t4 !== e3));
    };
  }
  dr() {
    return this.R.persistence !== `memory` && !this.Xe.ki && J.H();
  }
  pr(e3) {
    e3 !== this.rr && (this.rr = e3, this.dr() && J.G(this.ur, e3));
  }
  gr() {
    return this.rr ? this.rr : this.dr() ? J.W(this.ur) : null;
  }
  vr(e3, t4, n2) {
    e3 === this.sr && t4 === this._sessionActivityTimestamp && n2 === this._sessionStartTimestamp || (this._sessionStartTimestamp = n2, this._sessionActivityTimestamp = t4, this.sr = e3, this.Xe.register({ [cn]: [t4, e3, n2] }));
  }
  _r() {
    var e3 = this.Xe.props[cn];
    return T(e3) && e3.length === 2 && e3.push(e3[0]), e3 || [0, null, 0];
  }
  resetSessionId() {
    this.vr(null, null, null);
  }
  destroy() {
    clearTimeout(this.mr), this.mr = void 0, this.ir && e && (e.removeEventListener(`beforeunload`, this.ir, { capture: false }), this.ir = void 0), this.tr = [];
  }
  cr() {
    this.ir = () => {
      this.dr() && J.V(this.hr);
    }, K(e, `beforeunload`, this.ir, { capture: false });
  }
  checkAndGetSessionAndWindowId(e3, t4) {
    if (e3 === void 0 && (e3 = false), t4 === void 0 && (t4 = null), this.R.cookieless_mode === `always`) throw Error(`checkAndGetSessionAndWindowId should not be called with cookieless_mode="always"`);
    var n2 = t4 || (/* @__PURE__ */ new Date()).getTime(), [r2, i2, a2] = this._r(), o2 = this.gr(), s2 = F(a2) && Math.abs(n2 - a2) > 864e5, c2 = false, l2 = !i2, u2 = !l2 && !e3 && this.er(n2, r2);
    l2 || u2 || s2 ? (i2 = this.nr(), o2 = this.ar(), po.info(`new session ID generated`, { sessionId: i2, windowId: o2, changeReason: { noSessionId: l2, activityTimeout: u2, sessionPastMaximumLength: s2 } }), a2 = n2, c2 = true) : o2 || (o2 = this.ar(), c2 = true);
    var d2 = F(r2) && e3 && !s2 ? r2 : n2, f2 = F(a2) ? a2 : (/* @__PURE__ */ new Date()).getTime();
    return this.pr(o2), this.vr(i2, d2, f2), e3 || this.lr(), c2 && this.tr.forEach(((e4) => e4(i2, o2, c2 ? { noSessionId: l2, activityTimeout: u2, sessionPastMaximumLength: s2 } : void 0))), { sessionId: i2, windowId: o2, sessionStartTimestamp: f2, changeReason: c2 ? { noSessionId: l2, activityTimeout: u2, sessionPastMaximumLength: s2 } : void 0, lastActivityTimestamp: r2 };
  }
  lr() {
    clearTimeout(this.mr), this.mr = setTimeout((() => {
      var [e3] = this._r();
      if (this.er((/* @__PURE__ */ new Date()).getTime(), e3)) {
        var t4 = this.sr;
        this.resetSessionId(), this.Ze.emit(`forcedIdleReset`, { idleSessionId: t4 });
      }
    }), 1.1 * this.sessionTimeoutMs);
  }
}, ho = [`$set_once`, `$set`], go = U(`[SiteApps]`), _o = class {
  constructor(e3) {
    this._instance = e3, this.br = [], this.apps = {};
  }
  get isEnabled() {
    return !!this._instance.config.opt_in_site_apps;
  }
  yr(e3, t4) {
    if (t4) {
      var n2 = this.globalsForEvent(t4);
      this.br.push(n2), this.br.length > 1e3 && (this.br = this.br.slice(10));
    }
  }
  get siteAppLoaders() {
    var e3;
    return (e3 = f._POSTHOG_REMOTE_CONFIG) == null || (e3 = e3[this._instance.config.token]) == null ? void 0 : e3.siteApps;
  }
  init() {
    if (this.isEnabled) {
      var e3 = this._instance._addCaptureHook(this.yr.bind(this));
      this.wr = () => {
        e3(), this.br = [], this.wr = void 0;
      };
    }
  }
  globalsForEvent(e3) {
    var _a2, _b, _c, _d;
    if (!e3) throw Error(`Event payload is required`);
    var t4 = {}, n2 = this._instance.get_property(`$groups`) || [], r2 = this._instance.get_property(`$stored_group_properties`) || {};
    for (var [i2, a2] of Object.entries(r2)) t4[i2] = { id: n2[i2], type: i2, properties: a2 };
    var { $set_once: o2, $set: s2 } = e3;
    return { event: g({}, _(e3, ho), { properties: g({}, e3.properties, s2 ? { $set: g({}, ((_a2 = e3.properties) == null ? void 0 : _a2.$set) ?? {}, s2) } : {}, o2 ? { $set_once: g({}, ((_b = e3.properties) == null ? void 0 : _b.$set_once) ?? {}, o2) } : {}), elements_chain: ((_c = e3.properties) == null ? void 0 : _c.$elements_chain) ?? ``, distinct_id: (_d = e3.properties) == null ? void 0 : _d.distinct_id }), person: { properties: this._instance.get_property(`$stored_person_properties`) }, groups: t4 };
  }
  setupSiteApp(e3) {
    var t4 = this.apps[e3.id], n2 = () => {
      var n3;
      !t4.errored && this.br.length && (go.info(`Processing ` + this.br.length + ` events for site app with id ` + e3.id), this.br.forEach(((e4) => t4.processEvent == null ? void 0 : t4.processEvent(e4))), t4.processedBuffer = true), Object.values(this.apps).every(((e4) => e4.processedBuffer || e4.errored)) && ((n3 = this.wr) == null || n3.call(this));
    }, r2 = false, i2 = (i3) => {
      t4.errored = !i3, t4.loaded = true, go.info(`Site app with id ` + e3.id + ` ` + (i3 ? `loaded` : `errored`)), r2 && n2();
    };
    try {
      var { processEvent: a2 } = e3.init({ posthog: this._instance, callback: (e4) => {
        i2(e4);
      } });
      a2 && (t4.processEvent = a2), r2 = true;
    } catch (t5) {
      go.error(`Error while initializing PostHog app with config id ` + e3.id, t5), i2(false);
    }
    if (r2 && t4.loaded) try {
      n2();
    } catch (n3) {
      go.error(`Error while processing buffered events PostHog app with config id ` + e3.id, n3), t4.errored = true;
    }
  }
  Er() {
    var e3 = this.siteAppLoaders || [];
    for (var t4 of e3) this.apps[t4.id] = { id: t4.id, loaded: false, errored: false, processedBuffer: false };
    for (var n2 of e3) this.setupSiteApp(n2);
  }
  $r(e3) {
    if (Object.keys(this.apps).length !== 0) {
      var t4 = this.globalsForEvent(e3);
      for (var n2 of Object.values(this.apps)) try {
        n2.processEvent == null || n2.processEvent(t4);
      } catch (t5) {
        go.error(`Error while processing event ` + e3.event + ` for site app ` + n2.id, t5);
      }
    }
  }
  onRemoteConfig(e3) {
    var t4, n2, r2, i2 = this;
    if ((t4 = this.siteAppLoaders) != null && t4.length) return this.isEnabled ? (this.Er(), void this._instance.on(`eventCaptured`, ((e4) => this.$r(e4)))) : void go.error(`PostHog site apps are disabled. Enable the "opt_in_site_apps" config to proceed.`);
    if ((n2 = this.wr) == null || n2.call(this), (r2 = e3.siteApps) != null && r2.length) {
      if (this.isEnabled) {
        var a2 = function(e4) {
          var t5;
          f[`__$$ph_site_app_` + e4] = i2._instance, (t5 = f.__PosthogExtensions__) == null || t5.loadSiteApp == null || t5.loadSiteApp(i2._instance, s2, ((t6) => {
            if (t6) return go.error(`Error while initializing PostHog app with config id ` + e4, t6);
          }));
        };
        for (var { id: o2, url: s2 } of e3.siteApps) a2(o2);
      } else go.error(`PostHog site apps are disabled. Enable the "opt_in_site_apps" config to proceed.`);
    }
  }
}, vo = function(e3, t4) {
  if (!e3) return false;
  var n2 = e3.userAgent;
  if (n2 && y(n2, t4)) return true;
  try {
    var r2 = e3 == null ? void 0 : e3.userAgentData;
    if (r2 != null && r2.brands && r2.brands.some(((e4) => y(e4 == null ? void 0 : e4.brand, t4)))) return true;
  } catch {
  }
  return !!e3.webdriver;
}, yo = (function(e3) {
  return e3.US = `us`, e3.EU = `eu`, e3.CUSTOM = `custom`, e3;
})({}), bo = `i.posthog.com`, xo = class {
  constructor(e3) {
    this.Sr = {}, this.instance = e3;
  }
  get apiHost() {
    var e3 = this.instance.config.api_host.trim().replace(/\/$/, ``);
    return e3 === `https://app.posthog.com` ? `https://us.i.posthog.com` : e3;
  }
  get flagsApiHost() {
    var e3 = this.instance.config.flags_api_host;
    return e3 ? e3.trim().replace(/\/$/, ``) : this.apiHost;
  }
  get uiHost() {
    var _a2;
    var e3 = (_a2 = this.instance.config.ui_host) == null ? void 0 : _a2.replace(/\/$/, ``);
    return e3 || (e3 = this.apiHost.replace(`.` + bo, `.posthog.com`)), e3 === `https://app.posthog.com` ? `https://us.posthog.com` : e3;
  }
  get region() {
    return this.Sr[this.apiHost] || (/https:\/\/(app|us|us-assets)(\.i)?\.posthog\.com/i.test(this.apiHost) ? this.Sr[this.apiHost] = yo.US : /https:\/\/(eu|eu-assets)(\.i)?\.posthog\.com/i.test(this.apiHost) ? this.Sr[this.apiHost] = yo.EU : this.Sr[this.apiHost] = yo.CUSTOM), this.Sr[this.apiHost];
  }
  endpointFor(e3, t4) {
    if (t4 === void 0 && (t4 = ``), t4 && (t4 = t4[0] === `/` ? t4 : `/` + t4), e3 === `ui`) return this.uiHost + t4;
    if (e3 === `flags`) return this.flagsApiHost + t4;
    if (this.region === yo.CUSTOM) return this.apiHost + t4;
    var n2 = bo + t4;
    switch (e3) {
      case `assets`:
        return `https://` + this.region + `-assets.` + n2;
      case `api`:
        return `https://` + this.region + `.` + n2;
    }
  }
}, So = { icontains: (t4, n2) => !!e && n2.href.toLowerCase().indexOf(t4.toLowerCase()) > -1, not_icontains: (t4, n2) => !!e && n2.href.toLowerCase().indexOf(t4.toLowerCase()) === -1, regex: (t4, n2) => !!e && pa(n2.href, t4), not_regex: (t4, n2) => !!e && !pa(n2.href, t4), exact: (e3, t4) => t4.href === e3, is_not: (e3, t4) => t4.href !== e3 }, Co = class t2 {
  constructor(e3) {
    var n2 = this;
    this.getWebExperimentsAndEvaluateDisplayLogic = function(e4) {
      e4 === void 0 && (e4 = false), n2.getWebExperiments(((e5) => {
        t2.kr(`retrieved web experiments from the server`), n2.Pr = /* @__PURE__ */ new Map(), e5.forEach(((e6) => {
          if (e6.feature_flag_key) {
            var r2;
            n2.Pr && (t2.kr(`setting flag key `, e6.feature_flag_key, ` to web experiment `, e6), (r2 = n2.Pr) == null || r2.set(e6.feature_flag_key, e6));
            var i2 = n2._instance.getFeatureFlag(e6.feature_flag_key);
            A(i2) && e6.variants[i2] && n2.Tr(e6.name, i2, e6.variants[i2].transforms);
          } else if (e6.variants) for (var a2 in e6.variants) {
            var o2 = e6.variants[a2];
            t2.Ir(o2) && n2.Tr(e6.name, a2, o2.transforms);
          }
        }));
      }), e4);
    }, this._instance = e3, this._instance.onFeatureFlags(((e4) => {
      this.onFeatureFlags(e4);
    }));
  }
  onFeatureFlags(e3) {
    if (this._is_bot()) t2.kr(`Refusing to render web experiment since the viewer is a likely bot`);
    else if (!this._instance.config.disable_web_experiments) {
      if (N(this.Pr)) return this.Pr = /* @__PURE__ */ new Map(), this.loadIfEnabled(), void this.previewWebExperiment();
      t2.kr(`applying feature flags`, e3), e3.forEach(((e4) => {
        var _a2;
        var t4;
        if (this.Pr && (t4 = this.Pr) != null && t4.has(e4)) {
          var n2 = this._instance.getFeatureFlag(e4), r2 = (_a2 = this.Pr) == null ? void 0 : _a2.get(e4);
          n2 && r2 != null && r2.variants[n2] && this.Tr(r2.name, n2, r2.variants[n2].transforms);
        }
      }));
    }
  }
  previewWebExperiment() {
    var e3 = t2.getWindowLocation();
    if (e3 != null && e3.search) {
      var n2 = dr(e3 == null ? void 0 : e3.search, `__experiment_id`), r2 = dr(e3 == null ? void 0 : e3.search, `__experiment_variant`);
      n2 && r2 && (t2.kr(`previewing web experiments ` + n2 + ` && ` + r2), this.getWebExperiments(((e4) => {
        this.Cr(parseInt(n2), r2, e4);
      }), false, true));
    }
  }
  loadIfEnabled() {
    this._instance.config.disable_web_experiments || this.getWebExperimentsAndEvaluateDisplayLogic();
  }
  getWebExperiments(e3, t4, n2) {
    if (this._instance.config.disable_web_experiments && !n2) return e3([]);
    var r2 = this._instance.get_property(`$web_experiments`);
    if (r2 && !t4) return e3(r2);
    this._instance._send_request({ url: this._instance.requestRouter.endpointFor(`api`, `/api/web_experiments/?token=` + this._instance.config.token), method: `GET`, callback: (t5) => t5.statusCode !== 200 || !t5.json ? e3([]) : e3(t5.json.experiments || []) });
  }
  Cr(e3, n2, r2) {
    var i2 = r2.filter(((t4) => t4.id === e3));
    i2 && i2.length > 0 && (t2.kr(`Previewing web experiment [` + i2[0].name + `] with variant [` + n2 + `]`), this.Tr(i2[0].name, n2, i2[0].variants[n2].transforms));
  }
  static Ir(e3) {
    return !N(e3.conditions) && t2.Rr(e3) && t2.Fr(e3);
  }
  static Rr(e3) {
    var _a2, _b;
    if (N(e3.conditions) || N((_a2 = e3.conditions) == null ? void 0 : _a2.url)) return true;
    var n2, r2 = t2.getWindowLocation();
    return !!r2 && ((n2 = e3.conditions) == null || !n2.url || So[((_b = e3.conditions) == null ? void 0 : _b.urlMatchType) ?? `icontains`](e3.conditions.url, r2));
  }
  static getWindowLocation() {
    return e == null ? void 0 : e.location;
  }
  static Fr(e3) {
    var _a2;
    if (N(e3.conditions) || N((_a2 = e3.conditions) == null ? void 0 : _a2.utm)) return true;
    var t4 = di();
    if (t4.utm_source) {
      var n2, r2, i2, a2, o2, s2, c2, l2, u2 = (n2 = e3.conditions) == null || (n2 = n2.utm) == null || !n2.utm_campaign || ((r2 = e3.conditions) == null || (r2 = r2.utm) == null ? void 0 : r2.utm_campaign) == t4.utm_campaign, d2 = (i2 = e3.conditions) == null || (i2 = i2.utm) == null || !i2.utm_source || ((a2 = e3.conditions) == null || (a2 = a2.utm) == null ? void 0 : a2.utm_source) == t4.utm_source, f2 = (o2 = e3.conditions) == null || (o2 = o2.utm) == null || !o2.utm_medium || ((s2 = e3.conditions) == null || (s2 = s2.utm) == null ? void 0 : s2.utm_medium) == t4.utm_medium, p2 = (c2 = e3.conditions) == null || (c2 = c2.utm) == null || !c2.utm_term || ((l2 = e3.conditions) == null || (l2 = l2.utm) == null ? void 0 : l2.utm_term) == t4.utm_term;
      return u2 && f2 && p2 && d2;
    }
    return false;
  }
  static kr(e3) {
    var t4 = [...arguments].slice(1);
    H.info(`[WebExperiments] ` + e3, t4);
  }
  Tr(e3, n2, r2) {
    this._is_bot() ? t2.kr(`Refusing to render web experiment since the viewer is a likely bot`) : n2 === `control` ? t2.kr(`Control variants leave the page unmodified.`) : r2.forEach(((r3) => {
      var _a2;
      r3.selector && (t2.kr(`applying transform of variant ` + n2 + ` for experiment ` + e3 + ` `, r3), (_a2 = document == null ? void 0 : document.querySelectorAll(r3.selector)) == null ? void 0 : _a2.forEach(((e4) => {
        var t4 = e4;
        r3.html && (t4.innerHTML = r3.html), r3.css && t4.setAttribute(`style`, r3.css);
      })));
    }));
  }
  _is_bot() {
    return a && this._instance ? vo(a, this._instance.config.custom_blocked_useragents) : void 0;
  }
}, wo = U(`[PostHog ExternalIntegrations]`), To = { intercom: `intercom-integration`, crispChat: `crisp-chat-integration` }, Eo = class {
  constructor(e3) {
    this._instance = e3;
  }
  it(e3, t4) {
    var n2;
    (n2 = f.__PosthogExtensions__) == null || n2.loadExternalDependency == null || n2.loadExternalDependency(this._instance, e3, ((e4) => {
      if (e4) return wo.error(`failed to load script`, e4);
      t4();
    }));
  }
  startIfEnabledOrStop() {
    var e3 = this, t4 = function(t5) {
      var n3, i3, a2;
      !r2 || (n3 = f.__PosthogExtensions__) != null && (n3 = n3.integrations) != null && n3[t5] || e3.it(To[t5], (() => {
        var n4;
        (n4 = f.__PosthogExtensions__) == null || (n4 = n4.integrations) == null || (n4 = n4[t5]) == null || n4.start(e3._instance);
      })), !r2 && (i3 = f.__PosthogExtensions__) != null && (i3 = i3.integrations) != null && i3[t5] && ((a2 = f.__PosthogExtensions__) == null || (a2 = a2.integrations) == null || (a2 = a2[t5]) == null || a2.stop());
    };
    for (var [n2, r2] of Object.entries((i2 = this._instance.config.integrations) ?? {})) {
      var i2;
      t4(n2);
    }
  }
}, Do = `[SessionRecording]`, Oo = U(Do), ko = class {
  get started() {
    var e3;
    return !((e3 = this.Or) == null || !e3.isStarted);
  }
  get status() {
    return this.Or ? this.Or.status : this.Mr && !this.Ar ? `disabled` : `lazy_loading`;
  }
  constructor(e3) {
    if (this._forceAllowLocalhostNetworkCapture = false, this.Mr = false, this.jr = void 0, this._instance = e3, !this._instance.sessionManager) throw Oo.error(`started without valid sessionManager`), Error(Do + ` started without valid sessionManager. This is a bug.`);
    if (this._instance.config.cookieless_mode === `always`) throw Error(Do + ` cannot be used with cookieless_mode="always"`);
  }
  get Ar() {
    var t4, n2 = !((t4 = this._instance.get_property(sn)) == null || !t4.enabled), r2 = !this._instance.config.disable_session_recording, i2 = this._instance.config.disable_session_recording || this._instance.consent.isOptedOut();
    return e && n2 && r2 && !i2;
  }
  startIfEnabledOrStop(e3) {
    var t4;
    if (!this.Ar || (t4 = this.Or) == null || !t4.isStarted) {
      var n2 = !k(Object.assign) && !k(Array.from);
      this.Ar && n2 ? (this.Dr(e3), Oo.info(`starting`)) : this.stopRecording();
    }
  }
  Dr(e3) {
    var t4, n2, r2;
    this.Ar && (f != null && (t4 = f.__PosthogExtensions__) != null && (t4 = t4.rrweb) != null && t4.record && (n2 = f.__PosthogExtensions__) != null && n2.initSessionRecording ? this.Lr(e3) : (r2 = f.__PosthogExtensions__) == null || r2.loadExternalDependency == null || r2.loadExternalDependency(this._instance, this.Nr, ((t5) => {
      if (t5) return Oo.error(`could not load recorder`, t5);
      this.Lr(e3);
    })));
  }
  stopRecording() {
    var e3, t4;
    (e3 = this.jr) == null || e3.call(this), this.jr = void 0, (t4 = this.Or) == null || t4.stop();
  }
  Ur() {
    var e3;
    (e3 = this._instance.persistence) == null || e3.unregister(ln);
  }
  zr(e3) {
    var _a2;
    if (this._instance.persistence) {
      var t4, n2 = this._instance.persistence, r2 = () => {
        var t5 = false === e3.sessionRecording ? void 0 : e3.sessionRecording, r3 = t5 == null ? void 0 : t5.sampleRate, i2 = N(r3) ? null : parseFloat(r3);
        N(i2) && this.Ur();
        var a2 = t5 == null ? void 0 : t5.minimumDurationMilliseconds;
        n2.register({ [sn]: g({ enabled: !!t5 }, t5, { networkPayloadCapture: g({ capturePerformance: e3.capturePerformance }, t5 == null ? void 0 : t5.networkPayloadCapture), canvasRecording: { enabled: t5 == null ? void 0 : t5.recordCanvas, fps: t5 == null ? void 0 : t5.canvasFps, quality: t5 == null ? void 0 : t5.canvasQuality }, sampleRate: i2, minimumDurationMilliseconds: k(a2) ? null : a2, endpoint: t5 == null ? void 0 : t5.endpoint, triggerMatchType: t5 == null ? void 0 : t5.triggerMatchType, masking: t5 == null ? void 0 : t5.masking, urlTriggers: t5 == null ? void 0 : t5.urlTriggers }) });
      };
      r2(), (t4 = this.jr) == null || t4.call(this), this.jr = (_a2 = this._instance.sessionManager) == null ? void 0 : _a2.onSessionId(r2);
    }
  }
  onRemoteConfig(e3) {
    `sessionRecording` in e3 ? false === e3.sessionRecording ? this.Mr = true : (this.zr(e3), this.Mr = true, this.startIfEnabledOrStop()) : Oo.info(`skipping remote config with no sessionRecording`, e3);
  }
  log(e3, t4) {
    var n2;
    t4 === void 0 && (t4 = `log`), (n2 = this.Or) != null && n2.log ? this.Or.log(e3, t4) : Oo.warn(`log called before recorder was ready`);
  }
  get Nr() {
    var e3, t4, n2 = (e3 = this._instance) == null || (e3 = e3.persistence) == null ? void 0 : e3.get_property(sn);
    return (n2 == null || (t4 = n2.scriptConfig) == null ? void 0 : t4.script) || `lazy-recorder`;
  }
  Lr(e3) {
    var _a2;
    var t4;
    if ((t4 = f.__PosthogExtensions__) == null || !t4.initSessionRecording) throw Error(`Called on script loaded before session recording is available`);
    this.Or || (this.Or = (_a2 = f.__PosthogExtensions__) == null ? void 0 : _a2.initSessionRecording(this._instance), this.Or._forceAllowLocalhostNetworkCapture = this._forceAllowLocalhostNetworkCapture), this.Or.start(e3);
  }
  onRRwebEmit(e3) {
    var t4;
    (t4 = this.Or) == null || t4.onRRwebEmit == null || t4.onRRwebEmit(e3);
  }
  overrideLinkedFlag() {
    var e3, t4;
    this.Or || (t4 = this._instance.persistence) == null || t4.register({ $replay_override_linked_flag: true }), (e3 = this.Or) == null || e3.overrideLinkedFlag();
  }
  overrideSampling() {
    var e3, t4;
    this.Or || (t4 = this._instance.persistence) == null || t4.register({ $replay_override_sampling: true }), (e3 = this.Or) == null || e3.overrideSampling();
  }
  overrideTrigger(e3) {
    var t4, n2;
    this.Or || (n2 = this._instance.persistence) == null || n2.register({ [e3 === `url` ? `$replay_override_url_trigger` : `$replay_override_event_trigger`]: true }), (t4 = this.Or) == null || t4.overrideTrigger(e3);
  }
  get sdkDebugProperties() {
    var _a2;
    return ((_a2 = this.Or) == null ? void 0 : _a2.sdkDebugProperties) || { $recording_status: this.status };
  }
  tryAddCustomEvent(e3, t4) {
    var n2;
    return !((n2 = this.Or) == null || !n2.tryAddCustomEvent(e3, t4));
  }
}, Ao = {}, jo = () => {
}, Mo = `posthog`, No = !sa && (d == null ? void 0 : d.indexOf(`MSIE`)) === -1 && (d == null ? void 0 : d.indexOf(`Mozilla`)) === -1, Po = (t4) => {
  var n2;
  return g({ api_host: `https://us.i.posthog.com`, flags_api_host: null, ui_host: null, token: ``, autocapture: true, cross_subdomain_cookie: Kt(o == null ? void 0 : o.location), persistence: `localStorage+cookie`, persistence_name: ``, cookie_persisted_properties: [], loaded: jo, save_campaign_params: true, custom_campaign_params: [], custom_blocked_useragents: [], save_referrer: true, capture_pageleave: `if_capture_pageview`, defaults: t4 ?? `unset`, __preview_deferred_init_extensions: false, debug: s && A(s == null ? void 0 : s.search) && s.search.indexOf(`__posthog_debug=true`) !== -1 || false, cookie_expiration: 365, upgrade: false, disable_session_recording: false, disable_persistence: false, disable_web_experiments: true, disable_surveys: false, disable_surveys_automatic_display: false, disable_conversations: false, disable_product_tours: true, disable_external_dependency_loading: false, enable_recording_console_log: void 0, secure_cookie: (e == null || (n2 = e.location) == null ? void 0 : n2.protocol) === `https:`, ip: false, opt_out_capturing_by_default: false, opt_out_persistence_by_default: false, opt_out_useragent_filter: false, opt_out_capturing_persistence_type: `localStorage`, consent_persistence_name: null, opt_out_capturing_cookie_prefix: null, opt_in_site_apps: false, property_denylist: [], respect_dnt: false, sanitize_properties: null, request_headers: {}, request_batching: true, properties_string_max_length: 65535, mask_all_element_attributes: false, mask_all_text: false, mask_personal_data_properties: false, custom_personal_data_properties: [], advanced_disable_flags: false, advanced_disable_decide: false, advanced_disable_feature_flags: false, advanced_disable_feature_flags_on_first_load: false, advanced_only_evaluate_survey_feature_flags: false, advanced_enable_surveys: false, advanced_disable_toolbar_metrics: false, feature_flag_request_timeout_ms: 3e3, surveys_request_timeout_ms: 1e4, on_request_error: (e3) => {
    var t5 = `Bad HTTP status: ` + e3.statusCode + ` ` + e3.text;
    H.error(t5);
  }, get_device_id: (e3) => e3, capture_performance: void 0, name: `posthog`, bootstrap: {}, disable_compression: false, session_idle_timeout_seconds: 1800, person_profiles: `identified_only`, before_send: void 0, request_queue_config: { flush_interval_ms: ao }, error_tracking: {}, _onCapture: jo, __preview_eager_load_replay: false }, ((e3) => ({ rageclick: !(e3 && e3 >= `2025-11-30`) || { content_ignorelist: true }, capture_pageview: !(e3 && e3 >= `2025-05-24`) || `history_change`, session_recording: e3 && e3 >= `2025-11-30` ? { strictMinimumDuration: true } : {}, external_scripts_inject_target: e3 && e3 >= `2026-01-30` ? `head` : `body`, internal_or_test_user_hostname: e3 && e3 >= `2026-01-30` ? /^(localhost|127\.0\.0\.1)$/ : void 0 }))(t4));
}, Fo = (e3) => {
  var t4 = {};
  k(e3.process_person) || (t4.person_profiles = e3.process_person), k(e3.xhr_headers) || (t4.request_headers = e3.xhr_headers), k(e3.cookie_name) || (t4.persistence_name = e3.cookie_name), k(e3.disable_cookie) || (t4.disable_persistence = e3.disable_cookie), k(e3.store_google) || (t4.save_campaign_params = e3.store_google), k(e3.verbose) || (t4.debug = e3.verbose);
  var n2 = G({}, t4, e3);
  return T(e3.property_blacklist) && (k(e3.property_denylist) ? n2.property_denylist = e3.property_blacklist : T(e3.property_denylist) ? n2.property_denylist = [...e3.property_blacklist, ...e3.property_denylist] : H.error(`Invalid value for property_denylist config: ` + e3.property_denylist)), n2;
}, Io = class {
  constructor() {
    this.__forceAllowLocalhost = false;
  }
  get Hr() {
    return this.__forceAllowLocalhost;
  }
  set Hr(e3) {
    H.error("WebPerformanceObserver is deprecated and has no impact on network capture. Use `_forceAllowLocalhostNetworkCapture` on `posthog.sessionRecording`"), this.__forceAllowLocalhost = e3;
  }
}, Lo = class t3 {
  get decideEndpointWasHit() {
    var _a2;
    var e3;
    return (e3 = (_a2 = this.featureFlags) == null ? void 0 : _a2.hasLoadedFlags) != null && e3;
  }
  get flagsEndpointWasHit() {
    var _a2;
    var e3;
    return (e3 = (_a2 = this.featureFlags) == null ? void 0 : _a2.hasLoadedFlags) != null && e3;
  }
  constructor() {
    this.webPerformance = new Io(), this.Br = false, this.version = p.LIB_VERSION, this.qr = new Ka(), this._calculate_event_properties = this.calculateEventProperties.bind(this), this.config = Po(), this.SentryIntegration = Qr, this.sentryIntegration = (e3) => (function(e4, t4) {
      var n2 = Zr(e4, t4);
      return { name: Xr, processEvent: (e5) => n2(e5) };
    })(this, e3), this.__request_queue = [], this.__loaded = false, this.analyticsDefaultEndpoint = `/e/`, this.Wr = false, this.Gr = null, this.Vr = null, this.Jr = null, this.featureFlags = new Aa(this), this.toolbar = new ri(this), this.scrollManager = new lo(this), this.pageViewManager = new Di(this), this.surveys = new Za(this), this.conversations = new $a(this), this.logs = new eo(this), this.experiments = new Co(this), this.exceptions = new ya(this), this.rateLimiter = new no(this), this.requestRouter = new xo(this), this.consent = new zr(this), this.externalIntegrations = new Eo(this), this.people = { set: (e3, t4, n2) => {
      var r2 = A(e3) ? { [e3]: t4 } : e3;
      this.setPersonProperties(r2), n2 == null ? void 0 : n2({});
    }, set_once: (e3, t4, n2) => {
      var r2 = A(e3) ? { [e3]: t4 } : e3;
      this.setPersonProperties(void 0, r2), n2 == null ? void 0 : n2({});
    } }, this.on(`eventCaptured`, ((e3) => H.info(`send "` + (e3 == null ? void 0 : e3.event) + `"`, e3)));
  }
  init(e3, n2, r2) {
    if (r2 && r2 !== Mo) {
      var i2 = Ao[r2] ?? new t3();
      return i2._init(e3, n2, r2), Ao[r2] = i2, Ao[Mo][r2] = i2, i2;
    }
    return this._init(e3, n2, r2);
  }
  _init(t4, n2, r2) {
    var _a2, _b, _c;
    if (n2 === void 0 && (n2 = {}), k(t4) || j(t4)) return H.critical(`PostHog was initialized without a token. This likely indicates a misconfiguration. Please check the first argument passed to posthog.init()`), this;
    if (this.__loaded) return console.warn(`[PostHog.js]`, `You have already initialized PostHog! Re-initializing is a no-op`), this;
    this.__loaded = true, this.config = {}, n2.debug = this.Kr(n2.debug), this.Yr = n2, this.Xr = [], n2.person_profiles && (this.Vr = n2.person_profiles), this.set_config(G({}, Po(n2.defaults), Fo(n2), { name: r2, token: t4 })), this.config.on_xhr_error && H.error(`on_xhr_error is deprecated. Use on_request_error instead`), this.compression = n2.disable_compression ? void 0 : Oi.GZipJS;
    var i2 = this.Qr();
    this.persistence = new Ma(this.config, i2), this.sessionPersistence = this.config.persistence === `sessionStorage` || this.config.persistence === `memory` ? this.persistence : new Ma(g({}, this.config, { persistence: `sessionStorage` }), i2);
    var a2 = g({}, this.persistence.props), o2 = g({}, this.sessionPersistence.props);
    this.register({ $initialization_time: (/* @__PURE__ */ new Date()).toISOString() }), this.Zr = new oo(((e3) => this.ts(e3)), this.config.request_queue_config), this.es = new co(this), this.__request_queue = [];
    var s2 = this.config.cookieless_mode === `always` || this.config.cookieless_mode === `on_reject` && this.consent.isExplicitlyOptedOut();
    if (s2 || (this.sessionManager = new mo(this), this.sessionPropsManager = new fo(this, this.sessionManager, this.persistence)), this.config.__preview_deferred_init_extensions ? (H.info(`Deferring extension initialization to improve startup performance`), setTimeout((() => {
      this.rs(s2);
    }), 0)) : (H.info(`Initializing extensions synchronously`), this.rs(s2)), p.DEBUG = p.DEBUG || this.config.debug, p.DEBUG && H.info(`Starting in debug mode`, { this: this, config: n2, thisC: g({}, this.config), p: a2, s: o2 }), ((_a2 = n2.bootstrap) == null ? void 0 : _a2.distinctID) !== void 0) {
      var c2, l2, u2 = this.config.get_device_id(Dr()), d2 = (c2 = n2.bootstrap) != null && c2.isIdentifiedID ? u2 : n2.bootstrap.distinctID;
      this.persistence.set_property(_n, (l2 = n2.bootstrap) != null && l2.isIdentifiedID ? `identified` : `anonymous`), this.register({ distinct_id: n2.bootstrap.distinctID, $device_id: d2 });
    }
    if (this.ss()) {
      var f2 = Object.keys(((_b = n2.bootstrap) == null ? void 0 : _b.featureFlags) || {}).filter(((e3) => {
        var t5;
        return !((t5 = n2.bootstrap) == null || (t5 = t5.featureFlags) == null || !t5[e3]);
      })).reduce(((e3, t5) => {
        var r3;
        return e3[t5] = ((r3 = n2.bootstrap) == null || (r3 = r3.featureFlags) == null ? void 0 : r3[t5]) || false, e3;
      }), {}), m2 = Object.keys(((_c = n2.bootstrap) == null ? void 0 : _c.featureFlagPayloads) || {}).filter(((e3) => f2[e3])).reduce(((e3, t5) => {
        var r3, i3;
        return (r3 = n2.bootstrap) != null && (r3 = r3.featureFlagPayloads) != null && r3[t5] && (e3[t5] = (i3 = n2.bootstrap) == null || (i3 = i3.featureFlagPayloads) == null ? void 0 : i3[t5]), e3;
      }), {});
      this.featureFlags.receivedFeatureFlags({ featureFlags: f2, featureFlagPayloads: m2 });
    }
    if (s2) this.register_once({ distinct_id: Tn, $device_id: null }, ``);
    else if (!this.get_distinct_id()) {
      var h2 = this.config.get_device_id(Dr());
      this.register_once({ distinct_id: h2, $device_id: h2 }, ``), this.persistence.set_property(_n, `anonymous`);
    }
    return K(e, `onpagehide` in self ? `pagehide` : `unload`, this._handle_unload.bind(this), { passive: false }), this.toolbar.maybeLoadToolbar(), n2.segment ? Yr(this, (() => this.ns())) : this.ns(), E(this.config._onCapture) && this.config._onCapture !== jo && (H.warn("onCapture is deprecated. Please use `before_send` instead"), this.on(`eventCaptured`, ((e3) => this.config._onCapture(e3.event, e3)))), this.config.ip && H.warn('The `ip` config option has NO EFFECT AT ALL and has been deprecated. Use a custom transformation or "Discard IP data" project setting instead. See https://posthog.com/tutorials/web-redact-properties#hiding-customer-ip-address for more information.'), this;
  }
  rs(e3) {
    var t4 = performance.now();
    this.historyAutocapture = new qr(this), this.historyAutocapture.startIfEnabled();
    var n2 = [];
    n2.push((() => {
      new ai(this).startIfEnabledOrStop();
    })), n2.push((() => {
      var e4;
      this.siteApps = new _o(this), (e4 = this.siteApps) == null || e4.init();
    })), e3 || n2.push((() => {
      this.sessionRecording = new ko(this), this.sessionRecording.startIfEnabledOrStop();
    })), this.config.disable_scroll_properties || n2.push((() => {
      this.scrollManager.startMeasuringScrollPosition();
    })), n2.push((() => {
      this.autocapture = new br(this), this.autocapture.startIfEnabled();
    })), n2.push((() => {
      this.surveys.loadIfEnabled();
    })), n2.push((() => {
      this.logs.loadIfEnabled();
    })), n2.push((() => {
      this.conversations.loadIfEnabled();
    })), n2.push((() => {
      this.productTours = new Fa(this), this.productTours.loadIfEnabled();
    })), n2.push((() => {
      this.heatmaps = new Ei(this), this.heatmaps.startIfEnabled();
    })), n2.push((() => {
      this.webVitalsAutocapture = new Ci(this);
    })), n2.push((() => {
      this.exceptionObserver = new Gr(this), this.exceptionObserver.startIfEnabledOrStop();
    })), n2.push((() => {
      this.deadClicksAutocapture = new Ur(this, Hr), this.deadClicksAutocapture.startIfEnabled();
    })), n2.push((() => {
      if (this.os) {
        var e4 = this.os;
        this.os = void 0, this.yi(e4);
      }
    })), this.ls(n2, t4);
  }
  ls(e3, t4) {
    for (; e3.length > 0; ) {
      if (this.config.__preview_deferred_init_extensions && performance.now() - t4 >= 30 && e3.length > 0) return void setTimeout((() => {
        this.ls(e3, t4);
      }), 0);
      var n2 = e3.shift();
      if (n2) try {
        n2();
      } catch (e4) {
        H.error(`Error initializing extension:`, e4);
      }
    }
    var r2 = Math.round(performance.now() - t4);
    this.register_for_session({ $sdk_debug_extensions_init_method: this.config.__preview_deferred_init_extensions ? `deferred` : `synchronous`, $sdk_debug_extensions_init_time_ms: r2 }), this.config.__preview_deferred_init_extensions && H.info(`PostHog extensions initialized (` + r2 + `ms)`);
  }
  yi(e3) {
    var t4, n2, r2, i2, a2, s2, c2, l2, u2;
    if (!o || !o.body) return H.info(`document not ready yet, trying again in 500 milliseconds...`), void setTimeout((() => {
      this.yi(e3);
    }), 500);
    this.config.__preview_deferred_init_extensions && (this.os = e3), this.compression = void 0, e3.supportedCompression && !this.config.disable_compression && (this.compression = b(e3.supportedCompression, Oi.GZipJS) ? Oi.GZipJS : b(e3.supportedCompression, Oi.Base64) ? Oi.Base64 : void 0), (t4 = e3.analytics) != null && t4.endpoint && (this.analyticsDefaultEndpoint = e3.analytics.endpoint), this.set_config({ person_profiles: this.Vr ? this.Vr : `identified_only` }), (n2 = this.siteApps) == null || n2.onRemoteConfig(e3), (r2 = this.sessionRecording) == null || r2.onRemoteConfig(e3), (i2 = this.autocapture) == null || i2.onRemoteConfig(e3), (a2 = this.heatmaps) == null || a2.onRemoteConfig(e3), this.surveys.onRemoteConfig(e3), this.logs.onRemoteConfig(e3), this.conversations.onRemoteConfig(e3), (s2 = this.productTours) == null || s2.onRemoteConfig(e3), (c2 = this.webVitalsAutocapture) == null || c2.onRemoteConfig(e3), (l2 = this.exceptionObserver) == null || l2.onRemoteConfig(e3), this.exceptions.onRemoteConfig(e3), (u2 = this.deadClicksAutocapture) == null || u2.onRemoteConfig(e3);
  }
  ns() {
    try {
      this.config.loaded(this);
    } catch (e4) {
      H.critical("`loaded` function failed", e4);
    }
    if (this.us(), this.config.internal_or_test_user_hostname && s != null && s.hostname) {
      var e3 = s.hostname, t4 = this.config.internal_or_test_user_hostname;
      (typeof t4 == `string` ? e3 === t4 : t4.test(e3)) && this.setInternalOrTestUser();
    }
    this.config.capture_pageview && setTimeout((() => {
      (this.consent.isOptedIn() || this.config.cookieless_mode === `always`) && this.hs();
    }), 1), new io(this).load(), this.featureFlags.flags();
  }
  us() {
    var e3;
    this.is_capturing() && this.config.request_batching && ((e3 = this.Zr) == null || e3.enable());
  }
  _dom_loaded() {
    this.is_capturing() && Rt(this.__request_queue, ((e3) => this.ts(e3))), this.__request_queue = [], this.us();
  }
  _handle_unload() {
    var e3, t4;
    this.surveys.handlePageUnload(), this.config.request_batching ? (this.ds() && this.capture(`$pageleave`), (e3 = this.Zr) == null || e3.unload(), (t4 = this.es) == null || t4.unload()) : this.ds() && this.capture(`$pageleave`, null, { transport: `sendBeacon` });
  }
  _send_request(e3) {
    this.__loaded && (No ? this.__request_queue.push(e3) : this.rateLimiter.isServerRateLimited(e3.batchKey) || (e3.transport = e3.transport || this.config.api_transport, e3.url = la(e3.url, { ip: +!!this.config.ip }), e3.headers = g({}, this.config.request_headers, e3.headers), e3.compression = e3.compression === `best-available` ? this.compression : e3.compression, e3.disableXHRCredentials = this.config.__preview_disable_xhr_credentials, this.config.__preview_disable_beacon && (e3.disableTransport = [`sendBeacon`]), e3.fetchOptions = e3.fetchOptions || this.config.fetch_options, ((e4) => {
      var _a2;
      var t4 = g({}, e4);
      t4.timeout = t4.timeout || 6e4, t4.url = la(t4.url, { _: (/* @__PURE__ */ new Date()).getTime().toString(), ver: p.LIB_VERSION, compression: t4.compression });
      var n2 = t4.transport ?? `fetch`, r2 = fa.filter(((e5) => !t4.disableTransport || !e5.transport || !t4.disableTransport.includes(e5.transport))), i2 = ((_a2 = qt(r2, ((e5) => e5.transport === n2))) == null ? void 0 : _a2.method) ?? r2[0].method;
      if (!i2) throw Error(`No available transport method`);
      i2(t4);
    })(g({}, e3, { callback: (t4) => {
      var n2, r2;
      this.rateLimiter.checkForLimiting(t4), t4.statusCode >= 400 && ((n2 = (r2 = this.config).on_request_error) == null || n2.call(r2, t4)), e3.callback == null || e3.callback(t4);
    } }))));
  }
  ts(e3) {
    this.es ? this.es.retriableRequest(e3) : this._send_request(e3);
  }
  _execute_array(e3) {
    var t4, n2 = [], r2 = [], i2 = [];
    Rt(e3, ((e4) => {
      e4 && (t4 = e4[0], T(t4) ? i2.push(e4) : E(e4) ? e4.call(this) : T(e4) && t4 === `alias` ? n2.push(e4) : T(e4) && t4.indexOf(`capture`) !== -1 && E(this[t4]) ? i2.push(e4) : r2.push(e4));
    }));
    var a2 = function(e4, t5) {
      Rt(e4, (function(e5) {
        if (T(e5[0])) {
          var n3 = t5;
          W(e5, (function(e6) {
            n3 = n3[e6[0]].apply(n3, e6.slice(1));
          }));
        } else this[e5[0]].apply(this, e5.slice(1));
      }), t5);
    };
    a2(n2, this), a2(r2, this), a2(i2, this);
  }
  ss() {
    var _a2, _b;
    return ((_a2 = this.config.bootstrap) == null ? void 0 : _a2.featureFlags) && Object.keys((_b = this.config.bootstrap) == null ? void 0 : _b.featureFlags).length > 0 || false;
  }
  push(e3) {
    this._execute_array([e3]);
  }
  capture(e3, t4, n2) {
    if (this.__loaded && this.persistence && this.sessionPersistence && this.Zr) {
      if (this.is_capturing()) {
        if (!k(e3) && A(e3)) {
          var r2 = !this.config.opt_out_useragent_filter && this._is_bot();
          if (!r2 || this.config.__preview_capture_bot_pageviews) {
            var i2 = n2 != null && n2.skip_client_rate_limiting ? void 0 : this.rateLimiter.clientRateLimitContext();
            if (i2 == null || !i2.isRateLimited) {
              t4 != null && t4.$current_url && !A(t4 == null ? void 0 : t4.$current_url) && (H.error("Invalid `$current_url` property provided to `posthog.capture`. Input must be a string. Ignoring provided value."), t4 == null || delete t4.$current_url), this.sessionPersistence.update_search_keyword(), this.config.save_campaign_params && this.sessionPersistence.update_campaign_params(), this.config.save_referrer && this.sessionPersistence.update_referrer_info(), (this.config.save_campaign_params || this.config.save_referrer) && this.persistence.set_initial_person_info();
              var a2 = /* @__PURE__ */ new Date(), o2 = (n2 == null ? void 0 : n2.timestamp) || a2, s2 = Dr(), c2 = { uuid: s2, event: e3, properties: this.calculateEventProperties(e3, t4 || {}, o2, s2) };
              e3 === `$pageview` && this.config.__preview_capture_bot_pageviews && r2 && (c2.event = `$bot_pageview`, c2.properties.$browser_type = `bot`), i2 && (c2.properties.$lib_rate_limit_remaining_tokens = i2.remainingTokens), n2 != null && n2.$set && (c2.$set = n2 == null ? void 0 : n2.$set);
              var l2, u2 = e3 !== `$groupidentify`, d2 = this.vs(n2 == null ? void 0 : n2.$set_once, u2);
              if (d2 && (c2.$set_once = d2), (c2 = Wt(c2, n2 != null && n2._noTruncate ? null : this.config.properties_string_max_length)).timestamp = o2, k(n2 == null ? void 0 : n2.timestamp) || (c2.properties.$event_time_override_provided = true, c2.properties.$event_time_override_system_time = a2), e3 === Ra.DISMISSED || e3 === Ra.SENT) {
                var f2 = t4 == null ? void 0 : t4[za.SURVEY_ID], p2 = t4 == null ? void 0 : t4[za.SURVEY_ITERATION];
                l2 = { id: f2, current_iteration: p2 }, localStorage.getItem(Ua(l2)) || localStorage.setItem(Ua(l2), `true`), c2.$set = g({}, c2.$set, { [Ha({ id: f2, current_iteration: p2 }, e3 === Ra.SENT ? `responded` : `dismissed`)]: true });
              } else e3 === Ra.SHOWN && (c2.$set = g({}, c2.$set, { [za.SURVEY_LAST_SEEN_DATE]: (/* @__PURE__ */ new Date()).toISOString() }));
              var m2 = g({}, c2.properties.$set, c2.$set);
              if (O(m2) || this.setPersonPropertiesForFlags(m2), !N(this.config.before_send)) {
                var h2 = this.cs(c2);
                if (!h2) return;
                c2 = h2;
              }
              this.qr.emit(`eventCaptured`, c2);
              var _2 = { method: `POST`, url: (n2 == null ? void 0 : n2._url) ?? this.requestRouter.endpointFor(`api`, this.analyticsDefaultEndpoint), data: c2, compression: `best-available`, batchKey: n2 == null ? void 0 : n2._batchKey };
              return !this.config.request_batching || n2 && (n2 == null || !n2._batchKey) || n2 != null && n2.send_instantly ? this.ts(_2) : this.Zr.enqueue(_2), c2;
            }
            H.critical(`This capture call is ignored due to client rate limiting.`);
          }
        } else H.error(`No event name provided to posthog.capture`);
      }
    } else H.uninitializedWarning(`posthog.capture`);
  }
  _addCaptureHook(e3) {
    return this.on(`eventCaptured`, ((t4) => e3(t4.event, t4)));
  }
  calculateEventProperties(e3, t4, n2, r2, i2) {
    var _a2;
    if (n2 || (n2 = /* @__PURE__ */ new Date()), !this.persistence || !this.sessionPersistence) return t4;
    var a2 = i2 ? void 0 : this.persistence.remove_event_timer(e3), s2 = g({}, t4);
    if (s2.token = this.config.token, s2.$config_defaults = this.config.defaults, (this.config.cookieless_mode == `always` || this.config.cookieless_mode == `on_reject` && this.consent.isExplicitlyOptedOut()) && (s2.$cookieless_mode = true), e3 === `$snapshot`) {
      var c2 = g({}, this.persistence.properties(), this.sessionPersistence.properties());
      return s2.distinct_id = c2.distinct_id, (!A(s2.distinct_id) && !P(s2.distinct_id) || j(s2.distinct_id)) && H.error(`Invalid distinct_id for replay event. This indicates a bug in your implementation`), s2;
    }
    var l2, u2 = bi(this.config.mask_personal_data_properties, this.config.custom_personal_data_properties);
    if (this.sessionManager) {
      var { sessionId: f2, windowId: p2 } = this.sessionManager.checkAndGetSessionAndWindowId(i2, n2.getTime());
      s2.$session_id = f2, s2.$window_id = p2;
    }
    this.sessionPropsManager && G(s2, this.sessionPropsManager.getSessionProps());
    try {
      this.sessionRecording && G(s2, this.sessionRecording.sdkDebugProperties), s2.$sdk_debug_retry_queue_size = (_a2 = this.es) == null ? void 0 : _a2.length;
    } catch (e4) {
      s2.$sdk_debug_error_capturing_properties = String(e4);
    }
    if (this.requestRouter.region === yo.CUSTOM && (s2.$lib_custom_api_host = this.config.api_host), l2 = e3 !== `$pageview` || i2 ? e3 !== `$pageleave` || i2 ? this.pageViewManager.doEvent() : this.pageViewManager.doPageLeave(n2) : this.pageViewManager.doPageView(n2, r2), s2 = G(s2, l2), e3 === `$pageview` && o && (s2.title = o.title), !k(a2)) {
      var m2 = n2.getTime() - a2;
      s2.$duration = parseFloat((m2 / 1e3).toFixed(3));
    }
    d && this.config.opt_out_useragent_filter && (s2.$browser_type = this._is_bot() ? `bot` : `browser`), (s2 = G({}, u2, this.persistence.properties(), this.sessionPersistence.properties(), s2)).$is_identified = this._isIdentified(), T(this.config.property_denylist) ? W(this.config.property_denylist, (function(e4) {
      delete s2[e4];
    })) : H.error(`Invalid value for property_denylist config: ` + this.config.property_denylist + ` or property_blacklist config: ` + this.config.property_blacklist);
    var h2 = this.config.sanitize_properties;
    h2 && (H.error(`sanitize_properties is deprecated. Use before_send instead`), s2 = h2(s2, e3));
    var _2 = this.fs();
    return s2.$process_person_profile = _2, _2 && !i2 && this.ps(`_calculate_event_properties`), s2;
  }
  vs(e3, t4) {
    var _a2;
    if (t4 === void 0 && (t4 = true), !this.persistence || !this.fs() || this.Br) return e3;
    var n2 = G({}, this.persistence.get_initial_props(), ((_a2 = this.sessionPropsManager) == null ? void 0 : _a2.getSetOnceProps()) || {}, e3 || {}), r2 = this.config.sanitize_properties;
    return r2 && (H.error(`sanitize_properties is deprecated. Use before_send instead`), n2 = r2(n2, `$set_once`)), t4 && (this.Br = true), O(n2) ? void 0 : n2;
  }
  register(e3, t4) {
    var n2;
    (n2 = this.persistence) == null || n2.register(e3, t4);
  }
  register_once(e3, t4, n2) {
    var r2;
    (r2 = this.persistence) == null || r2.register_once(e3, t4, n2);
  }
  register_for_session(e3) {
    var t4;
    (t4 = this.sessionPersistence) == null || t4.register(e3);
  }
  unregister(e3) {
    var t4;
    (t4 = this.persistence) == null || t4.unregister(e3);
  }
  unregister_for_session(e3) {
    var t4;
    (t4 = this.sessionPersistence) == null || t4.unregister(e3);
  }
  gs(e3, t4) {
    this.register({ [e3]: t4 });
  }
  getFeatureFlag(e3, t4) {
    return this.featureFlags.getFeatureFlag(e3, t4);
  }
  getFeatureFlagPayload(e3) {
    return this.featureFlags.getFeatureFlagPayload(e3);
  }
  getFeatureFlagResult(e3, t4) {
    return this.featureFlags.getFeatureFlagResult(e3, t4);
  }
  isFeatureEnabled(e3, t4) {
    return this.featureFlags.isFeatureEnabled(e3, t4);
  }
  reloadFeatureFlags() {
    this.featureFlags.reloadFeatureFlags();
  }
  updateFlags(e3, t4, n2) {
    var r2 = n2 != null && n2.merge ? this.featureFlags.getFlagVariants() : {}, i2 = n2 != null && n2.merge ? this.featureFlags.getFlagPayloads() : {}, a2 = g({}, r2, e3), o2 = g({}, i2, t4), s2 = {};
    for (var [c2, l2] of Object.entries(a2)) {
      var u2 = typeof l2 == `string`;
      s2[c2] = { key: c2, enabled: !!u2 || !!l2, variant: u2 ? l2 : void 0, reason: void 0, metadata: k(o2 == null ? void 0 : o2[c2]) ? void 0 : { id: 0, version: void 0, description: void 0, payload: o2[c2] } };
    }
    this.featureFlags.receivedFeatureFlags({ flags: s2 });
  }
  updateEarlyAccessFeatureEnrollment(e3, t4, n2) {
    this.featureFlags.updateEarlyAccessFeatureEnrollment(e3, t4, n2);
  }
  getEarlyAccessFeatures(e3, t4, n2) {
    return t4 === void 0 && (t4 = false), this.featureFlags.getEarlyAccessFeatures(e3, t4, n2);
  }
  on(e3, t4) {
    return this.qr.on(e3, t4);
  }
  onFeatureFlags(e3) {
    return this.featureFlags.onFeatureFlags(e3);
  }
  onSurveysLoaded(e3) {
    return this.surveys.onSurveysLoaded(e3);
  }
  onSessionId(e3) {
    var _a2;
    return ((_a2 = this.sessionManager) == null ? void 0 : _a2.onSessionId(e3)) ?? (() => {
    });
  }
  getSurveys(e3, t4) {
    t4 === void 0 && (t4 = false), this.surveys.getSurveys(e3, t4);
  }
  getActiveMatchingSurveys(e3, t4) {
    t4 === void 0 && (t4 = false), this.surveys.getActiveMatchingSurveys(e3, t4);
  }
  renderSurvey(e3, t4) {
    this.surveys.renderSurvey(e3, t4);
  }
  displaySurvey(e3, t4) {
    t4 === void 0 && (t4 = Ga), this.surveys.displaySurvey(e3, t4);
  }
  cancelPendingSurvey(e3) {
    this.surveys.cancelPendingSurvey(e3);
  }
  canRenderSurvey(e3) {
    return this.surveys.canRenderSurvey(e3);
  }
  canRenderSurveyAsync(e3, t4) {
    return t4 === void 0 && (t4 = false), this.surveys.canRenderSurveyAsync(e3, t4);
  }
  identify(e3, t4, n2) {
    if (!this.__loaded || !this.persistence) return H.uninitializedWarning(`posthog.identify`);
    if (P(e3) && (e3 = e3.toString(), H.warn(`The first argument to posthog.identify was a number, but it should be a string. It has been converted to a string.`)), e3) {
      if ([`distinct_id`, `distinctid`].includes(e3.toLowerCase())) H.critical(`The string "` + e3 + `" was set in posthog.identify which indicates an error. This ID should be unique to the user and not a hardcoded string.`);
      else if (e3 !== Tn) {
        if (this.ps(`posthog.identify`)) {
          var r2 = this.get_distinct_id();
          if (this.register({ $user_id: e3 }), !this.get_property(`$device_id`)) {
            var i2 = r2;
            this.register_once({ $had_persisted_distinct_id: true, $device_id: i2 }, ``);
          }
          e3 !== r2 && e3 !== this.get_property(Yt) && (this.unregister(Yt), this.register({ distinct_id: e3 }));
          var a2 = (this.persistence.get_property(_n) || `anonymous`) === `anonymous`;
          e3 !== r2 && a2 ? (this.persistence.set_property(_n, `identified`), this.setPersonPropertiesForFlags(g({}, n2 || {}, t4 || {}), false), this.capture(`$identify`, { distinct_id: e3, $anon_distinct_id: r2 }, { $set: t4 || {}, $set_once: n2 || {} }), this.Jr = ma(e3, t4, n2), this.featureFlags.setAnonymousDistinctId(r2)) : (t4 || n2) && this.setPersonProperties(t4, n2), e3 !== r2 && (this.reloadFeatureFlags(), this.unregister(gn));
        }
      } else H.critical(`The string "` + Tn + `" was set in posthog.identify which indicates an error. This ID is only used as a sentinel value.`);
    } else H.error(`Unique user id has not been set in posthog.identify`);
  }
  setPersonProperties(e3, t4) {
    if ((e3 || t4) && this.ps(`posthog.setPersonProperties`)) {
      var n2 = ma(this.get_distinct_id(), e3, t4);
      this.Jr === n2 ? H.info(`A duplicate setPersonProperties call was made with the same properties. It has been ignored.`) : (this.setPersonPropertiesForFlags(g({}, t4 || {}, e3 || {})), this.capture(`$set`, { $set: e3 || {}, $set_once: t4 || {} }), this.Jr = n2);
    }
  }
  group(e3, t4, n2) {
    if (e3 && t4) {
      var r2 = this.getGroups();
      r2[e3] !== t4 && this.resetGroupPropertiesForFlags(e3), this.register({ $groups: g({}, r2, { [e3]: t4 }) }), n2 && (this.capture(`$groupidentify`, { $group_type: e3, $group_key: t4, $group_set: n2 }), this.setGroupPropertiesForFlags({ [e3]: n2 })), r2[e3] === t4 || n2 || this.reloadFeatureFlags();
    } else H.error(`posthog.group requires a group type and group key`);
  }
  resetGroups() {
    this.register({ $groups: {} }), this.resetGroupPropertiesForFlags(), this.reloadFeatureFlags();
  }
  setPersonPropertiesForFlags(e3, t4) {
    t4 === void 0 && (t4 = true), this.featureFlags.setPersonPropertiesForFlags(e3, t4);
  }
  resetPersonPropertiesForFlags() {
    this.featureFlags.resetPersonPropertiesForFlags();
  }
  setGroupPropertiesForFlags(e3, t4) {
    t4 === void 0 && (t4 = true), this.ps(`posthog.setGroupPropertiesForFlags`) && this.featureFlags.setGroupPropertiesForFlags(e3, t4);
  }
  resetGroupPropertiesForFlags(e3) {
    this.featureFlags.resetGroupPropertiesForFlags(e3);
  }
  reset(e3) {
    var t4, n2, r2, i2;
    if (H.info(`reset`), !this.__loaded) return H.uninitializedWarning(`posthog.reset`);
    var a2 = this.get_property(`$device_id`);
    if (this.consent.reset(), (t4 = this.persistence) == null || t4.clear(), (n2 = this.sessionPersistence) == null || n2.clear(), this.surveys.reset(), this.featureFlags.reset(), (r2 = this.persistence) == null || r2.set_property(_n, `anonymous`), (i2 = this.sessionManager) == null || i2.resetSessionId(), this.Jr = null, this.config.cookieless_mode === `always`) this.register_once({ distinct_id: Tn, $device_id: null }, ``);
    else {
      var o2 = this.config.get_device_id(Dr());
      this.register_once({ distinct_id: o2, $device_id: e3 ? o2 : a2 }, ``);
    }
    this.register({ $last_posthog_reset: (/* @__PURE__ */ new Date()).toISOString() }, 1);
  }
  get_distinct_id() {
    return this.get_property(`distinct_id`);
  }
  getGroups() {
    return this.get_property(`$groups`) || {};
  }
  get_session_id() {
    var _a2;
    return ((_a2 = this.sessionManager) == null ? void 0 : _a2.checkAndGetSessionAndWindowId(true).sessionId) ?? ``;
  }
  get_session_replay_url(e3) {
    if (!this.sessionManager) return ``;
    var { sessionId: t4, sessionStartTimestamp: n2 } = this.sessionManager.checkAndGetSessionAndWindowId(true), r2 = this.requestRouter.endpointFor(`ui`, `/project/` + this.config.token + `/replay/` + t4);
    if (e3 != null && e3.withTimestamp && n2) {
      var i2 = e3.timestampLookBack ?? 10;
      if (!n2) return r2;
      r2 += `?t=` + Math.max(Math.floor(((/* @__PURE__ */ new Date()).getTime() - n2) / 1e3) - i2, 0);
    }
    return r2;
  }
  alias(e3, t4) {
    return e3 === this.get_property(Jt) ? (H.critical(`Attempting to create alias for existing People user - aborting.`), -2) : this.ps(`posthog.alias`) ? (k(t4) && (t4 = this.get_distinct_id()), e3 === t4 ? (H.warn(`alias matches current distinct_id - skipping api call.`), this.identify(e3), -1) : (this.gs(Yt, e3), this.capture(`$create_alias`, { alias: e3, distinct_id: t4 }))) : void 0;
  }
  set_config(e3) {
    var t4 = g({}, this.config);
    if (D(e3)) {
      var n2, r2, i2, a2, o2, s2, c2;
      G(this.config, Fo(e3));
      var l2 = this.Qr();
      (n2 = this.persistence) == null || n2.update_config(this.config, t4, l2), this.sessionPersistence = this.config.persistence === `sessionStorage` || this.config.persistence === `memory` ? this.persistence : new Ma(g({}, this.config, { persistence: `sessionStorage` }), l2);
      var u2 = this.Kr(this.config.debug);
      I(u2) && (this.config.debug = u2), I(this.config.debug) && (this.config.debug ? (p.DEBUG = true, q.H() && q.G(`ph_debug`, `true`), H.info(`set_config`, { config: e3, oldConfig: t4, newConfig: g({}, this.config) })) : (p.DEBUG = false, q.H() && q.V(`ph_debug`))), (r2 = this.exceptionObserver) == null || r2.onConfigChange(), (i2 = this.sessionRecording) == null || i2.startIfEnabledOrStop(), (a2 = this.autocapture) == null || a2.startIfEnabled(), (o2 = this.heatmaps) == null || o2.startIfEnabled(), (s2 = this.exceptionObserver) == null || s2.startIfEnabledOrStop(), this.surveys.loadIfEnabled(), this._s(), (c2 = this.externalIntegrations) == null || c2.startIfEnabledOrStop();
    }
  }
  startSessionRecording(e3) {
    var t4 = true === e3, n2 = { sampling: t4 || !(e3 == null || !e3.sampling), linked_flag: t4 || !(e3 == null || !e3.linked_flag), url_trigger: t4 || !(e3 == null || !e3.url_trigger), event_trigger: t4 || !(e3 == null || !e3.event_trigger) };
    if (Object.values(n2).some(Boolean)) {
      var r2, i2, a2, o2, s2;
      (r2 = this.sessionManager) == null || r2.checkAndGetSessionAndWindowId(), n2.sampling && ((i2 = this.sessionRecording) == null || i2.overrideSampling()), n2.linked_flag && ((a2 = this.sessionRecording) == null || a2.overrideLinkedFlag()), n2.url_trigger && ((o2 = this.sessionRecording) == null || o2.overrideTrigger(`url`)), n2.event_trigger && ((s2 = this.sessionRecording) == null || s2.overrideTrigger(`event`));
    }
    this.set_config({ disable_session_recording: false });
  }
  stopSessionRecording() {
    this.set_config({ disable_session_recording: true });
  }
  sessionRecordingStarted() {
    var e3;
    return !((e3 = this.sessionRecording) == null || !e3.started);
  }
  captureException(e3, t4) {
    var n2 = Error(`PostHog syntheticException`), r2 = this.exceptions.buildProperties(e3, { handled: true, syntheticException: n2 });
    return this.exceptions.sendExceptionEvent(g({}, r2, t4));
  }
  startExceptionAutocapture(e3) {
    this.set_config({ capture_exceptions: e3 == null || e3 });
  }
  stopExceptionAutocapture() {
    this.set_config({ capture_exceptions: false });
  }
  loadToolbar(e3) {
    return this.toolbar.loadToolbar(e3);
  }
  get_property(e3) {
    var _a2;
    return (_a2 = this.persistence) == null ? void 0 : _a2.props[e3];
  }
  getSessionProperty(e3) {
    var _a2;
    return (_a2 = this.sessionPersistence) == null ? void 0 : _a2.props[e3];
  }
  toString() {
    var e3 = this.config.name ?? Mo;
    return e3 !== Mo && (e3 = Mo + `.` + e3), e3;
  }
  _isIdentified() {
    var _a2, _b;
    return ((_a2 = this.persistence) == null ? void 0 : _a2.get_property(_n)) === `identified` || ((_b = this.sessionPersistence) == null ? void 0 : _b.get_property(_n)) === `identified`;
  }
  fs() {
    var e3, t4;
    return !(this.config.person_profiles === `never` || this.config.person_profiles === `identified_only` && !this._isIdentified() && O(this.getGroups()) && ((e3 = this.persistence) == null || (e3 = e3.props) == null || !e3[Yt]) && ((t4 = this.persistence) == null || (t4 = t4.props) == null || !t4[Cn]));
  }
  ds() {
    return true === this.config.capture_pageleave || this.config.capture_pageleave === `if_capture_pageview` && (true === this.config.capture_pageview || this.config.capture_pageview === `history_change`);
  }
  createPersonProfile() {
    this.fs() || this.ps(`posthog.createPersonProfile`) && this.setPersonProperties({}, {});
  }
  setInternalOrTestUser() {
    this.ps(`posthog.setInternalOrTestUser`) && this.setPersonProperties({ $internal_or_test_user: true });
  }
  ps(e3) {
    return this.config.person_profiles === `never` ? (H.error(e3 + ` was called, but process_person is set to "never". This call will be ignored.`), false) : (this.gs(Cn, true), true);
  }
  Qr() {
    if (this.config.cookieless_mode === `always`) return true;
    var e3 = this.consent.isOptedOut(), t4 = this.config.opt_out_persistence_by_default || this.config.cookieless_mode === `on_reject`;
    return this.config.disable_persistence || e3 && !!t4;
  }
  _s() {
    var _a2, _b;
    var e3, t4, n2 = this.Qr();
    return ((_a2 = this.persistence) == null ? void 0 : _a2.ki) !== n2 && ((e3 = this.persistence) == null || e3.set_disabled(n2)), ((_b = this.sessionPersistence) == null ? void 0 : _b.ki) !== n2 && ((t4 = this.sessionPersistence) == null || t4.set_disabled(n2)), n2;
  }
  opt_in_capturing(e3) {
    var t4;
    if (this.config.cookieless_mode !== `always`) {
      var n2, r2;
      this.config.cookieless_mode === `on_reject` && this.consent.isExplicitlyOptedOut() && (this.reset(true), (n2 = this.sessionManager) == null || n2.destroy(), (r2 = this.pageViewManager) == null || r2.destroy(), this.sessionManager = new mo(this), this.pageViewManager = new Di(this), this.persistence && (this.sessionPropsManager = new fo(this, this.sessionManager, this.persistence)), this.sessionRecording = new ko(this), this.sessionRecording.startIfEnabledOrStop()), this.consent.optInOut(true), this._s(), this.us(), (t4 = this.sessionRecording) == null || t4.startIfEnabledOrStop(), this.config.cookieless_mode == `on_reject` && this.surveys.loadIfEnabled(), (k(e3 == null ? void 0 : e3.captureEventName) || e3 != null && e3.captureEventName) && this.capture((e3 == null ? void 0 : e3.captureEventName) ?? `$opt_in`, e3 == null ? void 0 : e3.captureProperties, { send_instantly: true }), this.config.capture_pageview && this.hs();
    } else H.warn(`Consent opt in/out is not valid with cookieless_mode="always" and will be ignored`);
  }
  opt_out_capturing() {
    var e3, t4, n2;
    this.config.cookieless_mode === `always` ? H.warn(`Consent opt in/out is not valid with cookieless_mode="always" and will be ignored`) : (this.config.cookieless_mode === `on_reject` && this.consent.isOptedIn() && this.reset(true), this.consent.optInOut(false), this._s(), this.config.cookieless_mode === `on_reject` && (this.register({ distinct_id: Tn, $device_id: null }), (e3 = this.sessionManager) == null || e3.destroy(), (t4 = this.pageViewManager) == null || t4.destroy(), this.sessionManager = void 0, this.sessionPropsManager = void 0, (n2 = this.sessionRecording) == null || n2.stopRecording(), this.sessionRecording = void 0, this.hs()));
  }
  has_opted_in_capturing() {
    return this.consent.isOptedIn();
  }
  has_opted_out_capturing() {
    return this.consent.isOptedOut();
  }
  get_explicit_consent_status() {
    var e3 = this.consent.consent;
    return e3 === Rr.GRANTED ? `granted` : e3 === Rr.DENIED ? `denied` : `pending`;
  }
  is_capturing() {
    return this.config.cookieless_mode === `always` || (this.config.cookieless_mode === `on_reject` ? this.consent.isExplicitlyOptedOut() || this.consent.isOptedIn() : !this.has_opted_out_capturing());
  }
  clear_opt_in_out_capturing() {
    this.consent.reset(), this._s();
  }
  _is_bot() {
    return a ? vo(a, this.config.custom_blocked_useragents) : void 0;
  }
  hs() {
    o && (o.visibilityState === `visible` ? this.Wr || (this.Wr = true, this.capture(`$pageview`, { title: o.title }, { send_instantly: true }), this.Gr && (this.Gr = (o.removeEventListener(`visibilitychange`, this.Gr), null))) : this.Gr || (this.Gr = this.hs.bind(this), K(o, `visibilitychange`, this.Gr)));
  }
  debug(t4) {
    false === t4 ? (e == null ? void 0 : e.console.log(`You've disabled debug mode.`), this.set_config({ debug: false })) : (e == null ? void 0 : e.console.log("You're now in debug mode. All calls to PostHog will be logged in your console.\nYou can disable this with `posthog.debug(false)`."), this.set_config({ debug: true }));
  }
  M() {
    var e3, t4, n2, r2, i2, a2, o2, s2 = this.Yr || {};
    return `advanced_disable_flags` in s2 ? !!s2.advanced_disable_flags : false === this.config.advanced_disable_flags ? true === this.config.advanced_disable_decide ? (H.warn(`Config field 'advanced_disable_decide' is deprecated. Please use 'advanced_disable_flags' instead. The old field will be removed in a future major version.`), true) : (n2 = `advanced_disable_decide`, r2 = false, i2 = H, a2 = (t4 = `advanced_disable_flags`) in (e3 = s2) && !N(e3[t4]), o2 = n2 in e3 && !N(e3[n2]), a2 ? e3[t4] : o2 ? (i2 && i2.warn(`Config field '` + n2 + `' is deprecated. Please use '` + t4 + `' instead. The old field will be removed in a future major version.`), e3[n2]) : r2) : !!this.config.advanced_disable_flags;
  }
  cs(e3) {
    if (N(this.config.before_send)) return e3;
    var t4 = T(this.config.before_send) ? this.config.before_send : [this.config.before_send], n2 = e3;
    for (var r2 of t4) {
      if (n2 = r2(n2), N(n2)) {
        var i2 = `Event '` + e3.event + `' was rejected in beforeSend function`;
        return R(e3.event) ? H.warn(i2 + `. This can cause unexpected behavior.`) : H.info(i2), null;
      }
      n2.properties && !O(n2.properties) || H.warn(`Event '` + e3.event + `' has no properties after beforeSend function, this is likely an error.`);
    }
    return n2;
  }
  getPageViewId() {
    var _a2;
    return (_a2 = this.pageViewManager.Kt) == null ? void 0 : _a2.pageViewId;
  }
  captureTraceFeedback(e3, t4) {
    this.capture(`$ai_feedback`, { $ai_trace_id: String(e3), $ai_feedback_text: t4 });
  }
  captureTraceMetric(e3, t4, n2) {
    this.capture(`$ai_metric`, { $ai_trace_id: String(e3), $ai_metric_name: t4, $ai_metric_value: String(n2) });
  }
  Kr(e3) {
    var t4 = I(e3) && !e3, n2 = q.H() && q.q(`ph_debug`) === `true`;
    return !t4 && (!!n2 || e3);
  }
};
(function(e3, t4) {
  for (var n2 = 0; n2 < t4.length; n2++) e3.prototype[t4[n2]] = Ht(e3.prototype[t4[n2]]);
})(Lo, [`identify`]);
var Ro = Ao[Mo] = new Lo(), zo = ((function() {
  function t4() {
    t4.done || (t4.done = true, No = false, W(Ao, (function(e3) {
      e3._dom_loaded();
    })));
  }
  o != null && o.addEventListener ? o.readyState === `complete` ? t4() : K(o, `DOMContentLoaded`, t4, { capture: false }) : e && H.error("Browser doesn't support `document.addEventListener` so PostHog couldn't be initialized");
})(), Ro);
export {
  zo as default,
  zo as posthog
};
