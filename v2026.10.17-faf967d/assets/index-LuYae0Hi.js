import { br as g, b_ as R, cE as V, cQ as T, cR as P, cS as L, cT as U, bs as M } from "./index-Dh9039MG.js";
import { cU as W, cV as X, cW as Y, cX as J, cY as Z, cZ as ee, c_ as te, c$ as se, d0 as ae, d1 as ne, bP as re, bQ as ie, d2 as oe, d3 as ce, d4 as le, d5 as de, d6 as ue, d7 as xe, d8 as he, d9 as me, bK as be, cF as pe, cC as fe, cc as ge, da as ye, db as ke, dc as ze, cb as ve, dd as je, de as Se, df as Ne, dg as we, cG as Ae, bL as Ce, dh as De, di as Re, dj as Ve, dk as Te, bO as Pe, ca as Le, bM as Ue, dl as Ee, bN as _e, dm as Fe, dn as Me, dp as Ie, dq as $e, bt as Oe, dr as qe, ds as Be } from "./index-Dh9039MG.js";
import { u as Ge } from "./useRequireAuth-DChq4cbt.js";
import { b as n, k as e } from "./three-fiber-GW7QWJN8.js";
import { j as Qe } from "./xr-collab-DfFXwcSW.js";
import "./three-drei-vHRsxLlW.js";
import "./three-tnxpQXqG.js";
function q({ feature: c, children: a, fallback: d, as: r = "div", className: x }) {
  const l = g((i) => i.user), u = g((i) => i.isAnonymous), [h, o] = n.useState(false);
  if (!R()) return e.jsx(e.Fragment, { children: a });
  if (l && !u) return e.jsx(e.Fragment, { children: a });
  const m = (i) => {
    i.preventDefault(), i.stopPropagation(), o(true);
  };
  return e.jsxs(e.Fragment, { children: [e.jsx(r, { onClick: m, className: x, style: { cursor: "pointer" }, children: d ?? a }), e.jsx(V, { open: h, onOpenChange: o, feature: c })] });
}
function B({ localDocId: c, cloudDocId: a, onRestore: d }) {
  const [r, x] = n.useState([]), [l, u] = n.useState(true), [h, o] = n.useState(null), [m, i] = n.useState(null), [b, z] = n.useState("named"), [N, p] = n.useState(null), [v, y] = n.useState(""), f = n.useCallback(async () => {
    if (!a) {
      u(false);
      return;
    }
    u(true), o(null);
    try {
      const t = await T(a);
      x(t);
    } catch (t) {
      o(t.message);
    } finally {
      u(false);
    }
  }, [a]);
  n.useEffect(() => {
    f();
  }, [f]);
  const w = async (t) => {
    i(t.id);
    try {
      await U(c, t), d == null ? void 0 : d();
    } catch (s) {
      o(s.message);
    } finally {
      i(null);
    }
  }, j = async (t) => {
    const s = v.trim();
    if (!s) {
      p(null);
      return;
    }
    try {
      await P(t, s), p(null), y(""), await f();
    } catch (D) {
      o(D.message);
    }
  }, A = async (t) => {
    try {
      await L(t), await f();
    } catch (s) {
      o(s.message);
    }
  }, C = (t) => {
    const s = Math.floor((Date.now() - t) / 1e3);
    return s < 60 ? "just now" : s < 3600 ? `${Math.floor(s / 60)} minutes ago` : s < 86400 ? `${Math.floor(s / 3600)} hours ago` : s < 604800 ? `${Math.floor(s / 86400)} days ago` : new Date(t).toLocaleDateString();
  };
  if (!a) return e.jsxs("div", { className: "p-4", children: [e.jsx("h3", { className: "font-semibold mb-3 text-zinc-900 dark:text-zinc-100", children: "Version History" }), e.jsx("p", { className: "text-sm text-zinc-500 dark:text-zinc-400", children: "Enable cloud sync to access version history." }), e.jsx("p", { className: "text-xs text-zinc-400 dark:text-zinc-500 mt-2", children: "Your document changes will be automatically versioned when synced to the cloud." })] });
  const S = r.filter((t) => t.label), k = b === "named" ? S : r;
  return e.jsxs("div", { className: "p-4", children: [e.jsxs("div", { className: "flex items-center justify-between mb-3", children: [e.jsx("h3", { className: "font-semibold text-zinc-900 dark:text-zinc-100", children: "Version History" }), e.jsxs("div", { className: "flex gap-1 text-xs", children: [e.jsxs("button", { type: "button", onClick: () => z("named"), className: b === "named" ? "px-2 py-1 rounded bg-zinc-200 dark:bg-zinc-700 text-zinc-900 dark:text-zinc-100" : "px-2 py-1 rounded text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200", children: ["Named (", S.length, ")"] }), e.jsx("button", { type: "button", onClick: () => z("all"), className: b === "all" ? "px-2 py-1 rounded bg-zinc-200 dark:bg-zinc-700 text-zinc-900 dark:text-zinc-100" : "px-2 py-1 rounded text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200", children: "All history" })] })] }), l && e.jsxs("div", { className: "flex items-center gap-2 text-sm text-zinc-500", children: [e.jsx("span", { className: "animate-spin", children: "\u231B" }), "Loading versions..."] }), h && e.jsx("div", { className: "text-sm text-red-600 dark:text-red-400 mb-3", children: h }), !l && k.length === 0 && e.jsx("p", { className: "text-sm text-zinc-500 dark:text-zinc-400", children: b === "named" ? "No named versions yet. Use \u201CAll history\u201D and click \u201CLabel\u2026\u201D on a row to promote it to a named waypoint." : "No previous versions yet. Versions are created automatically when you save changes." }), k.length > 0 && e.jsx("div", { className: "space-y-1", children: k.map((t) => e.jsxs("div", { className: "flex items-center justify-between py-2 px-2 -mx-2 rounded hover:bg-zinc-50 dark:hover:bg-zinc-800", children: [e.jsxs("div", { className: "min-w-0 flex-1", children: [t.label ? e.jsx("div", { className: "text-sm font-medium text-zinc-900 dark:text-zinc-100 truncate", children: t.label }) : e.jsxs("div", { className: "text-sm font-medium text-zinc-900 dark:text-zinc-100", children: ["Version ", t.versionNumber] }), e.jsxs("div", { className: "text-xs text-zinc-500 dark:text-zinc-400", children: [t.label && `v${t.versionNumber} \xB7 `, C(t.deviceModifiedAt)] })] }), e.jsxs("div", { className: "flex items-center gap-2 shrink-0", children: [N === t.id ? e.jsxs(e.Fragment, { children: [e.jsx("input", { autoFocus: true, value: v, onChange: (s) => y(s.target.value), onKeyDown: (s) => {
    s.key === "Enter" && j(t.id), s.key === "Escape" && p(null);
  }, placeholder: "v1 pre-review", className: "text-xs px-1.5 py-0.5 border border-zinc-300 dark:border-zinc-600 rounded bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100" }), e.jsx("button", { type: "button", onClick: () => void j(t.id), className: "text-xs text-blue-600 dark:text-blue-400", children: "Save" })] }) : t.label ? e.jsx("button", { type: "button", onClick: () => void A(t.id), className: "text-xs text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200", title: "Remove label (auto-version row is preserved)", children: "Unlabel" }) : e.jsx("button", { type: "button", onClick: () => {
    p(t.id), y("");
  }, className: "text-xs text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200", children: "Label\u2026" }), e.jsx("button", { onClick: () => w(t), disabled: m === t.id, className: "text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 disabled:opacity-50", children: m === t.id ? "Restoring..." : "Restore" })] })] }, t.id)) })] });
}
const E = {};
function _() {
  return (typeof import.meta < "u" ? E == null ? void 0 : E.VITE_API_URL : "") || "";
}
async function H(c) {
  const a = g.getState().session;
  if (!a) throw new Error("Authentication required for AI features");
  const d = _(), r = await fetch(`${d}/api/generate`, { method: "POST", headers: { "Content-Type": "application/json", Authorization: `Bearer ${a.access_token}` }, body: JSON.stringify({ prompt: c }) });
  if (!r.ok) {
    const l = await r.json().catch(() => ({ error: "Unknown error" }));
    throw new Error(l.error || `AI request failed: ${r.status}`);
  }
  return (await r.json()).ir;
}
function G() {
  return !!g.getState().session;
}
export {
  V as AuthModal,
  W as AuthProvider,
  q as FeatureGate,
  X as SignInButton,
  Y as UserMenu,
  B as VersionHistoryPanel,
  J as applyAuthCallback,
  Z as checkUsernameAvailable,
  ee as clearThreadMessages,
  te as cloudContentToVcadFile,
  se as configureStorage,
  ae as configureVersionHistoryStorage,
  ne as createProfile,
  re as createShare,
  ie as createShareRedirect,
  oe as debouncedSync,
  ce as enableCloudSync,
  le as ensureSession,
  de as fetchCloudDocument,
  ue as fetchPublicDocument,
  xe as fetchSharedDocument,
  he as getAuthRedirectUrl,
  me as getCloudIdForDocument,
  be as getMyProfile,
  pe as getProfileByUsername,
  fe as getSupabase,
  T as getVersionHistory,
  ge as handleAuthDeepLink,
  ye as hydrateThread,
  ke as initSyncListeners,
  G as isAIAvailable,
  ze as isApplyingRemoteOps,
  ve as isAuthDeepLink,
  R as isAuthEnabled,
  je as isTauriRuntime,
  Se as joinCollabChannel,
  Qe as joinXRCollabChannel,
  P as labelVersion,
  Ne as listCloudDocuments,
  we as listNamedVersions,
  Ae as listPublicDocuments,
  Ce as listSharesForDocument,
  De as loadDeltas,
  Re as loadOrCreateThread,
  Ve as lookupShareRedirect,
  Te as persistToolResult,
  Pe as publishDocument,
  Le as requireSupabase,
  U as restoreVersion,
  Ue as revokeShare,
  Ee as signInWithOAuthPopup,
  _e as slugify,
  Fe as subscribeToThread,
  H as textToCAD,
  Me as triggerSync,
  L as unlabelVersion,
  Ie as updateProfile,
  $e as useAuth,
  g as useAuthStore,
  Ge as useRequireAuth,
  Oe as useSignInDelightStore,
  M as useSyncStore,
  qe as useUserPreferences,
  Be as vcadFileToCloudContent
};
