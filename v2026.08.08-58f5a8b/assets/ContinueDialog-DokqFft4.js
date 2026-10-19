import { b as c, k as n } from "./three-fiber-GW7QWJN8.js";
import { ct as q, bj as T, b4 as S, bB as W, bD as F, bH as J, bm as _, bQ as G, bp as K, bq as M, br as Q, bs as V, bt as X, bg as Y, cn as Z, bu as ee, bh as N, bL as te, cu as ne } from "./index-9ryf29cW.js";
import "./three-tnxpQXqG.js";
import "./three-drei-DdHLxnbx.js";
const se = "https://mcp.vcad.io/mcp", oe = 8e3;
function ae(t) {
  return `mcp:cont_${t}`;
}
function re(t) {
  const s = new TextEncoder().encode(t);
  let o = "";
  for (const r of s) o += String.fromCharCode(r);
  return btoa(o);
}
function ce(t, s) {
  return `Continue ${s ? `my vcad part "${s}"` : "my vcad part"}. Call the vcad \`continue_document\` tool with token "${t}" to load it, then render it and tell me what you see. If the vcad tool isn't available, walk me through adding the vcad connector.`;
}
function le(t, s) {
  return `Continue ${s ? `my vcad part "${s}"` : "my vcad part"}. Call the vcad \`continue_document\` tool with this inline doc to load it, then render it and tell me what you see. If the vcad tool isn't available, walk me through adding the vcad connector.

doc="${t}"`;
}
async function ie(t) {
  const s = new CompressionStream("gzip"), o = new Blob([JSON.stringify(t)]).stream().pipeThrough(s), r = new Uint8Array(await new Response(o).arrayBuffer());
  let i = "";
  for (const u of r) i += String.fromCharCode(u);
  const d = btoa(i).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
  return d.length > oe ? null : d;
}
function D(t) {
  return { type: "http", url: t };
}
function L(t) {
  const s = t.mcpUrl ?? se, o = t.inlineDoc ? le(t.inlineDoc, t.docName) : ce(t.token ?? "", t.docName), r = encodeURIComponent(o), d = `cursor://anysphere.cursor-deeplink/mcp/install?name=vcad&config=${re(JSON.stringify(D(s)))}`, l = `vscode:mcp/install?${encodeURIComponent(JSON.stringify({ name: "vcad", ...D(s) }))}`;
  return [{ host: "claude-desktop", label: "Claude Desktop", hint: "Opens a new chat with your part loaded.", url: `claude://claude.ai/new?q=${r}` }, { host: "claude-web", label: "Claude (web)", hint: "Opens claude.ai and copies the starter prompt to paste.", url: "https://claude.ai/new", clipboard: o, copyWithOpen: true }, { host: "chatgpt", label: "ChatGPT", hint: "Opens ChatGPT with the starter prompt.", url: `https://chatgpt.com/?q=${r}` }, { host: "cursor", label: "Cursor", hint: "Installs the vcad connector; paste the copied prompt to start.", url: d, clipboard: o, copyWithOpen: true }, { host: "vscode", label: "VS Code", hint: "Installs the vcad connector; paste the copied prompt to start.", url: l, clipboard: o, copyWithOpen: true }, { host: "claude-code", label: "Claude Code", hint: "Copies a one-line install command + starter prompt.", clipboard: `claude mcp add --transport http vcad ${s}
# then:
claude "${o}"` }];
}
const A = { live: false, edits: 0, lastAt: null };
function de(t) {
  const [s, o] = c.useState(A);
  return c.useEffect(() => {
    if (o(A), !t) return;
    const r = q();
    if (!r) return;
    const i = r.channel(`continue-${t}`);
    return i.on("postgres_changes", { event: "*", schema: "public", table: "documents", filter: `local_id=eq.${ae(t)}` }, () => {
      o((d) => ({ live: true, edits: d.edits + 1, lastAt: Date.now() }));
    }), i.subscribe(), () => {
      r.removeChannel(i);
    };
  }, [t]), s;
}
const E = "vcad.continue.lastHost";
function ue(t) {
  const s = document.createElement("a");
  s.href = t, s.target = /^https?:/i.test(t) ? "_blank" : "_self", s.rel = "noopener noreferrer", document.body.appendChild(s), s.click(), s.remove();
}
function ge({ open: t, onOpenChange: s }) {
  const o = T((e) => e.user), r = T((e) => e.isAnonymous), i = !!o && !r, d = S((e) => e.documentId), u = S((e) => e.documentName), [l, b] = c.useState(null), [f, x] = c.useState(null), [g, p] = c.useState(null), [H, j] = c.useState(false), [v, k] = c.useState(null), [U, $] = c.useState(null), [I, y] = c.useState(false), m = de(I && l ? l : null);
  c.useEffect(() => {
    if (!t || !d) {
      b(null), x(null), p(null), y(false);
      return;
    }
    y(false);
    try {
      const a = localStorage.getItem(E);
      a && k(a);
    } catch {
    }
    let e = false;
    return (async () => {
      var _a, _b;
      j(true), p(null);
      try {
        if (i) {
          const w = ((_a = await W(d)) == null ? void 0 : _a.cloudId) ?? null;
          if (w && !e) {
            const z = await F(w);
            if (e) return;
            const R = ((_b = z[0]) == null ? void 0 : _b.token) ?? (await J(w)).token;
            e || (b(R), x(null));
            return;
          }
        }
        const a = S.getState().document, h = await ie(a);
        if (e) return;
        h ? (x(h), b(null)) : p("This part is too large for an accountless handoff. Sign in to continue it in Claude.");
      } catch (a) {
        console.error("[continue-dialog] prepare failed:", a), e || p(`Couldn't prepare the handoff: ${a.message}`);
      } finally {
        e || j(false);
      }
    })(), () => {
      e = true;
    };
  }, [t, d, i]);
  const O = c.useCallback((e) => {
    k(e);
    try {
      localStorage.setItem(E, e);
    } catch {
    }
  }, []), B = c.useCallback(async (e) => {
    const a = !!e.clipboard && (e.copyWithOpen || !e.url);
    if (a && e.clipboard) try {
      await navigator.clipboard.writeText(e.clipboard), $(e.host), setTimeout(() => $(null), 1500);
    } catch {
      _.getState().toast.error("Couldn't copy the starter prompt to the clipboard.");
    }
    e.url && ue(e.url), O(e.host), G.continueHandoff(e.host, l ? "token" : "inline"), l && y(true);
    const h = e.url ? a ? `Opening ${e.label} \u2014 paste the copied prompt to start.` : `Opening ${e.label} with your part.` : `Copied the install command + prompt for ${e.label}.`;
    _.getState().toast.success(h);
  }, [O, l]), C = l ? "token" : f ? "inline" : null, P = [...l ? L({ token: l, docName: u || void 0 }) : f ? L({ inlineDoc: f, docName: u || void 0 }) : []].sort((e, a) => e.host === v ? -1 : a.host === v ? 1 : 0);
  return n.jsx(K, { open: t, onOpenChange: s, children: n.jsxs(M, { children: [n.jsx(Q, { className: "fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" }), n.jsxs(V, { "data-tauri-drag-region": "", className: N("fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2", "rounded-xl border border-border bg-surface p-6 shadow-xl select-none", "focus:outline-none"), children: [n.jsx(X, { className: "absolute right-3 top-3 p-1.5 text-text-muted hover:text-text transition-colors cursor-pointer", children: n.jsx(Y, { size: 14 }) }), n.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [n.jsx(Z, { size: 14, className: "text-brand", weight: "fill" }), n.jsxs(ee, { className: "text-sm font-semibold text-text truncate", children: ["Continue ", u || "this part", " in Claude"] })] }), n.jsx("p", { className: "text-[11px] text-text-muted leading-relaxed mb-4", children: "Hand this part to an AI you can talk to \u2014 it loads your exact geometry and picks up where you left off." }), I && C === "token" && n.jsxs("div", { className: "flex items-center gap-2 mb-4 px-2.5 py-1.5 rounded-md border border-brand/30 bg-brand/5", children: [n.jsx("span", { className: N("h-1.5 w-1.5 rounded-full shrink-0", m.live ? "bg-brand animate-pulse" : "bg-text-muted/50") }), n.jsx("span", { className: "text-[11px] text-text", children: m.live ? `Live in Claude \xB7 ${m.edits} edit${m.edits === 1 ? "" : "s"}` : "Waiting for Claude to pick it up\u2026" })] }), g && n.jsx("div", { className: "text-xs text-text-muted py-4", children: g }), !g && n.jsxs("div", { className: "space-y-1.5", children: [H && !C && n.jsx("div", { className: "text-[11px] text-text-muted py-3", children: "Preparing your handoff\u2026" }), P.map((e) => {
    const a = !e.url;
    return n.jsxs("button", { type: "button", disabled: !l, onClick: () => B(e), className: N("w-full flex items-center gap-3 px-3 py-2 text-left", "border border-border bg-bg hover:border-brand hover:bg-hover", "transition-colors disabled:opacity-50 disabled:cursor-wait"), children: [n.jsxs("div", { className: "flex-1 min-w-0", children: [n.jsxs("div", { className: "flex items-center gap-2", children: [n.jsx("span", { className: "text-xs font-medium text-text", children: e.label }), e.host === v && n.jsx("span", { className: "text-[9px] uppercase tracking-wide text-brand", children: "Last used" })] }), n.jsx("div", { className: "text-[10px] text-text-muted/80 leading-snug mt-0.5", children: e.hint })] }), U === e.host ? n.jsx("span", { className: "text-[10px] text-brand", children: "Copied" }) : a ? n.jsx(te, { size: 13, className: "text-text-muted shrink-0" }) : n.jsx(ne, { size: 13, className: "text-text-muted shrink-0" })] }, e.host);
  }), C === "inline" && n.jsxs("p", { className: "text-[10px] text-text-muted/70 leading-relaxed pt-1", children: ["Handing off without an account.", " ", n.jsx("span", { className: "text-text-muted", children: "Sign in to hand off larger parts and keep them in your account." })] }), n.jsx("p", { className: "text-[10px] text-text-muted/70 leading-relaxed pt-2", children: "Adding the vcad connector is a one-time step. After that, every handoff is one click." })] })] })] }) });
}
export {
  ge as ContinueDialog
};
