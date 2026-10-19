import { b as c, k as t } from "./three-fiber-GW7QWJN8.js";
import { bf as x, aX as n, bA as m, bx as p, bm as u, aY as f } from "./index-CcT_niyD.js";
import { clearRecentFiles as h, getRecentFiles as v, readDocumentAtPath as w } from "./native-file-Ra6bedUd.js";
import "./three-tnxpQXqG.js";
import "./three-drei-DdHLxnbx.js";
function E() {
  const [l, a] = c.useState(false), [r, o] = c.useState([]);
  x((e) => e.locale), c.useEffect(() => {
    const e = () => o(v()), s = () => {
      e(), a(true);
    };
    return window.addEventListener("vcad:open-recent-files", s), window.addEventListener("vcad:recent-files-changed", e), () => {
      window.removeEventListener("vcad:open-recent-files", s), window.removeEventListener("vcad:recent-files-changed", e);
    };
  }, []);
  const i = async (e) => {
    const s = await w(e.path);
    if (!s) {
      u.getState().addToast(f("modal.recents.cant_open", { name: e.name }), "error");
      return;
    }
    const d = new File([s.contents], s.name);
    window.dispatchEvent(new CustomEvent("vcad:open-recent-file", { detail: { file: d } })), a(false);
  };
  return l ? t.jsx("div", { className: "fixed inset-0 z-50 flex items-start justify-center bg-black/40 pt-24", onClick: () => a(false), children: t.jsxs("div", { className: "w-[480px] max-w-[90vw] rounded-md border border-border/60 bg-surface shadow-xl select-none", onClick: (e) => e.stopPropagation(), children: [t.jsxs("div", { "data-tauri-drag-region": "", className: "flex items-center justify-between border-b border-border/40 px-3 py-2", children: [t.jsx("span", { className: "text-xs font-medium text-text-muted", children: n("modal.recents.title") }), r.length > 0 && t.jsxs("button", { onClick: () => {
    h(), o([]);
  }, className: "flex items-center gap-1 text-[10px] text-text-muted hover:text-text", title: n("modal.recents.clear_tooltip"), children: [t.jsx(m, { size: 11 }), " ", n("modal.recents.clear")] })] }), r.length === 0 ? t.jsx("div", { className: "px-3 py-6 text-center text-xs text-text-muted", children: n("modal.recents.empty") }) : t.jsx("ul", { className: "max-h-[60vh] overflow-y-auto", children: r.map((e) => t.jsx("li", { children: t.jsxs("button", { onClick: () => {
    i(e);
  }, className: "flex w-full items-center gap-2 px-3 py-1.5 text-left text-xs hover:bg-hover", children: [t.jsx(p, { size: 13, className: "text-sky-400" }), t.jsx("span", { className: "flex-1 truncate", children: e.name }), t.jsx("span", { className: "truncate text-[10px] text-text-muted", children: e.path.replace(e.name, "").replace(/\/$/, "") })] }) }, e.path)) })] }) }) : null;
}
export {
  E as RecentFilesModal
};
