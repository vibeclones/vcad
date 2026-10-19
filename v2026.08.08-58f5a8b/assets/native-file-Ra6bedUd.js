const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-B7bg5Poc.js","assets/index-CcT_niyD.js","assets/three-drei-DdHLxnbx.js","assets/three-fiber-GW7QWJN8.js","assets/three-tnxpQXqG.js","assets/index-D4g8y8C6.css","assets/index-DECXLrYg.js"])))=>i.map(i=>d[i]);
import { _ as i } from "./three-drei-DdHLxnbx.js";
import { bR as c, __tla as __tla_0 } from "./index-CcT_niyD.js";
import "./three-fiber-GW7QWJN8.js";
import "./three-tnxpQXqG.js";
let l, w, d, y, E, v;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  const s = "vcad:recentFiles", u = 10;
  d = function() {
    if (typeof localStorage > "u") return [];
    try {
      const t = localStorage.getItem(s);
      if (!t) return [];
      const n = JSON.parse(t);
      return Array.isArray(n) ? n.filter((e) => typeof (e == null ? void 0 : e.path) == "string" && typeof (e == null ? void 0 : e.name) == "string") : [];
    } catch {
      return [];
    }
  };
  l = function(t) {
    if (typeof localStorage > "u") return;
    const n = t.split("/").pop() ?? t, e = {
      path: t,
      name: n,
      openedAt: Date.now()
    }, o = d().filter((a) => a.path !== t), r = [
      e,
      ...o
    ].slice(0, u);
    try {
      localStorage.setItem(s, JSON.stringify(r)), window.dispatchEvent(new CustomEvent("vcad:recent-files-changed"));
    } catch {
    }
  };
  w = function() {
    typeof localStorage > "u" || (localStorage.removeItem(s), window.dispatchEvent(new CustomEvent("vcad:recent-files-changed")));
  };
  v = async function(t, n = "document.vcad") {
    if (!c()) return null;
    const { save: e } = await i(async () => {
      const { save: a } = await import("./index-B7bg5Poc.js");
      return {
        save: a
      };
    }, __vite__mapDeps([0,1,2,3,4,5])), { writeTextFile: o } = await i(async () => {
      const { writeTextFile: a } = await import("./index-DECXLrYg.js");
      return {
        writeTextFile: a
      };
    }, __vite__mapDeps([6,1,2,3,4,5])), r = await e({
      defaultPath: n,
      filters: [
        {
          name: "vcad",
          extensions: [
            "vcad"
          ]
        }
      ]
    });
    return r ? (await o(r, t), l(r), r) : null;
  };
  y = async function() {
    if (!c()) return null;
    const { open: t } = await i(async () => {
      const { open: a } = await import("./index-B7bg5Poc.js");
      return {
        open: a
      };
    }, __vite__mapDeps([0,1,2,3,4,5])), { readTextFile: n } = await i(async () => {
      const { readTextFile: a } = await import("./index-DECXLrYg.js");
      return {
        readTextFile: a
      };
    }, __vite__mapDeps([6,1,2,3,4,5])), e = await t({
      multiple: false,
      directory: false,
      filters: [
        {
          name: "vcad",
          extensions: [
            "vcad",
            "loon",
            "json"
          ]
        },
        {
          name: "STEP",
          extensions: [
            "step",
            "stp"
          ]
        },
        {
          name: "STL",
          extensions: [
            "stl"
          ]
        }
      ]
    });
    if (!e || typeof e != "string") return null;
    const o = await n(e);
    l(e);
    const r = e.split("/").pop() ?? e;
    return {
      path: e,
      contents: o,
      name: r
    };
  };
  E = async function(t) {
    if (!c()) return null;
    try {
      const { readTextFile: n } = await i(async () => {
        const { readTextFile: r } = await import("./index-DECXLrYg.js");
        return {
          readTextFile: r
        };
      }, __vite__mapDeps([6,1,2,3,4,5])), e = await n(t), o = t.split("/").pop() ?? t;
      return {
        contents: e,
        name: o
      };
    } catch (n) {
      return console.warn(`[native-file] failed to read ${t}:`, n), null;
    }
  };
});
export {
  __tla,
  l as addRecentFile,
  w as clearRecentFiles,
  d as getRecentFiles,
  y as openDocumentNative,
  E as readDocumentAtPath,
  v as saveDocumentNative
};
