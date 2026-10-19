import { b as t, k as e } from "./three-fiber-GW7QWJN8.js";
import { cs as f, cC as p, cD as g, bD as b, bl as j } from "./index-BFVdGF5u.js";
import "./three-tnxpQXqG.js";
import "./three-drei-en0aG1CM.js";
const N = /* @__PURE__ */ new Map([["bold", t.createElement(t.Fragment, null, t.createElement("path", { d: "M234.38,210a123.36,123.36,0,0,0-60.78-53.23,76,76,0,1,0-91.2,0A123.36,123.36,0,0,0,21.62,210a12,12,0,1,0,20.77,12c18.12-31.32,50.12-50,85.61-50s67.49,18.69,85.61,50a12,12,0,0,0,20.77-12ZM76,96a52,52,0,1,1,52,52A52.06,52.06,0,0,1,76,96Z" }))], ["duotone", t.createElement(t.Fragment, null, t.createElement("path", { d: "M192,96a64,64,0,1,1-64-64A64,64,0,0,1,192,96Z", opacity: "0.2" }), t.createElement("path", { d: "M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z" }))], ["fill", t.createElement(t.Fragment, null, t.createElement("path", { d: "M230.93,220a8,8,0,0,1-6.93,4H32a8,8,0,0,1-6.92-12c15.23-26.33,38.7-45.21,66.09-54.16a72,72,0,1,1,73.66,0c27.39,8.95,50.86,27.83,66.09,54.16A8,8,0,0,1,230.93,220Z" }))], ["light", t.createElement(t.Fragment, null, t.createElement("path", { d: "M229.19,213c-15.81-27.32-40.63-46.49-69.47-54.62a70,70,0,1,0-63.44,0C67.44,166.5,42.62,185.67,26.81,213a6,6,0,1,0,10.38,6C56.4,185.81,90.34,166,128,166s71.6,19.81,90.81,53a6,6,0,1,0,10.38-6ZM70,96a58,58,0,1,1,58,58A58.07,58.07,0,0,1,70,96Z" }))], ["regular", t.createElement(t.Fragment, null, t.createElement("path", { d: "M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z" }))], ["thin", t.createElement(t.Fragment, null, t.createElement("path", { d: "M227.46,214c-16.52-28.56-43-48.06-73.68-55.09a68,68,0,1,0-51.56,0c-30.64,7-57.16,26.53-73.68,55.09a4,4,0,0,0,6.92,4C55,184.19,89.62,164,128,164s73,20.19,92.54,54a4,4,0,0,0,3.46,2,3.93,3.93,0,0,0,2-.54A4,4,0,0,0,227.46,214ZM68,96a60,60,0,1,1,60,60A60.07,60.07,0,0,1,68,96Z" }))]]), d = t.forwardRef((s, r) => t.createElement(f, { ref: r, ...s, weights: N }));
d.displayName = "UserIcon";
const v = d;
function Z({ username: s }) {
  const [r, o] = t.useState(null), [n, x] = t.useState([]), [m, c] = t.useState(true), [u, i] = t.useState(false);
  return t.useEffect(() => {
    let a = false;
    return c(true), i(false), (async () => {
      try {
        const l = await p(s);
        if (a) return;
        if (!l) {
          i(true), c(false);
          return;
        }
        o(l);
        const h = await g(s);
        if (a) return;
        x(h);
      } catch (l) {
        console.error("[ProfilePage] failed to load:", l), a || i(true);
      } finally {
        a || c(false);
      }
    })(), () => {
      a = true;
    };
  }, [s]), m ? e.jsxs("div", { className: "flex h-screen items-center justify-center bg-bg text-text-muted text-sm", children: ["Loading @", s, "\u2026"] }) : u ? e.jsxs("div", { className: "flex h-screen flex-col items-center justify-center bg-bg gap-3", children: [e.jsxs("span", { className: "text-3xl text-text-muted/30", children: ["@", s] }), e.jsx("span", { className: "text-sm text-text-muted", children: "Profile not found" }), e.jsx("a", { href: "/", className: "mt-4 text-xs text-brand hover:underline", children: "\u2190 Back to vcad" })] }) : e.jsxs("div", { className: "min-h-screen bg-bg", children: [e.jsx("header", { className: "border-b border-border/40 bg-surface", children: e.jsx("div", { className: "mx-auto max-w-3xl px-6 py-8", children: e.jsxs("div", { className: "flex items-center gap-4", children: [(r == null ? void 0 : r.avatar_url) ? e.jsx("img", { src: r.avatar_url, alt: "", className: "w-14 h-14 rounded-full object-cover", referrerPolicy: "no-referrer" }) : e.jsx("div", { className: "w-14 h-14 rounded-full bg-brand/15 flex items-center justify-center", children: e.jsx(v, { size: 24, className: "text-brand" }) }), e.jsxs("div", { children: [e.jsx("h1", { className: "text-lg font-semibold text-text", children: (r == null ? void 0 : r.display_name) || `@${s}` }), (r == null ? void 0 : r.display_name) && e.jsxs("p", { className: "text-sm text-text-muted", children: ["@", s] }), (r == null ? void 0 : r.bio) && e.jsx("p", { className: "text-xs text-text-muted mt-1 max-w-md", children: r.bio })] })] }) }) }), e.jsxs("main", { className: "mx-auto max-w-3xl px-6 py-8", children: [e.jsxs("h2", { className: "text-xs font-medium text-text-muted uppercase tracking-wider mb-4", children: ["Public documents (", n.length, ")"] }), n.length === 0 ? e.jsx("p", { className: "text-sm text-text-muted/60 py-8 text-center", children: "No public documents yet." }) : e.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3", children: n.map((a) => e.jsxs("a", { href: `/@${s}/${a.slug}`, className: j("group flex flex-col gap-2 p-4", "border border-border/60 bg-surface", "hover:border-brand/40 hover:bg-hover transition-colors"), children: [e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx(b, { size: 14, className: "text-text-muted/50 group-hover:text-brand transition-colors" }), e.jsx("span", { className: "text-sm font-medium text-text truncate", children: a.name })] }), e.jsxs("div", { className: "flex items-center gap-2 text-[10px] text-text-muted", children: [e.jsx("span", { className: "font-mono", children: a.slug }), e.jsx("span", { children: "\xB7" }), e.jsx("span", { children: a.published_at ? new Date(a.published_at).toLocaleDateString() : new Date(a.updated_at).toLocaleDateString() })] })] }, a.id)) })] }), e.jsx("footer", { className: "border-t border-border/40 py-6 text-center", children: e.jsx("a", { href: "/", className: "text-xs text-text-muted hover:text-brand transition-colors", children: "vcad.io" }) })] });
}
export {
  Z as ProfilePage
};
