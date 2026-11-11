import { t as e } from "./react-Cf1qM0wN.js";
var t = 0, n = () => `notification-${++t}`, r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), a = e((e2, t2) => {
  let a2 = (e3, n2) => {
    if (n2 <= 0) return;
    let i2 = setTimeout(() => {
      t2().dismiss(e3), r.delete(e3);
    }, n2);
    r.set(e3, i2);
  }, o = (t3, r2, i2) => {
    let o2 = n(), s = (i2 == null ? void 0 : i2.duration) ?? 4e3, c = (i2 == null ? void 0 : i2.dismissible) ?? true, l = { id: o2, timestamp: Date.now(), kind: `toast`, type: r2, message: t3, duration: s, dismissible: c };
    return e2((e3) => ({ notifications: [...e3.notifications, l] })), a2(o2, s), o2;
  };
  return { notifications: [], activityLog: [], activityPanelOpen: false, setActivityPanelOpen: (t3) => e2({ activityPanelOpen: t3 }), toggleActivityPanel: () => e2((e3) => ({ activityPanelOpen: !e3.activityPanelOpen })), toast: { success: (e3, t3) => o(e3, `success`, t3), error: (e3, t3) => o(e3, `error`, { duration: 6e3, ...t3 }), warning: (e3, t3) => o(e3, `warning`, { duration: 5e3, ...t3 }), info: (e3, t3) => o(e3, `info`, t3) }, addToast: (e3, t3, n2 = 4e3) => o(e3, t3, { duration: n2 }), startAIOperation: (r2, i2, a3) => {
    let o2 = n(), s = { id: o2, timestamp: Date.now(), kind: `ai-progress`, prompt: r2, stages: i2.map((e3) => ({ label: e3, status: `pending` })), progress: 0, cancelable: !!a3, onCancel: a3, dismissible: false };
    return e2((e3) => ({ notifications: [...e3.notifications, s] })), t2().logActivity({ type: `ai-generation`, title: `Generating: ${r2.slice(0, 50)}${r2.length > 50 ? `...` : ``}`, details: { prompt: r2 }, undoable: false }), o2;
  }, updateAIProgress: (t3, n2, r2, i2) => {
    e2((e3) => ({ notifications: e3.notifications.map((e4) => {
      if (e4.id !== t3 || e4.kind !== `ai-progress`) return e4;
      let a3 = e4.stages.map((e5, t4) => t4 < n2 ? { ...e5, status: `complete` } : t4 === n2 ? { ...e5, status: `running` } : e5);
      return { ...e4, stages: a3, progress: r2, ...i2 && { downloadProgress: i2 } };
    }) }));
  }, completeAIOperation: (n2, r2) => {
    t2().notifications.find((e3) => e3.id === n2 && e3.kind === `ai-progress`) && (e2((e3) => ({ notifications: e3.notifications.filter((e4) => e4.id !== n2) })), r2 ? t2().showActionResult({ type: `success`, title: r2.title ?? `Generation complete`, description: r2.description, actions: r2.actions ?? [] }) : t2().toast.success(`Generation complete`));
  }, failAIOperation: (n2, r2) => {
    let i2 = t2().notifications.find((e3) => e3.id === n2 && e3.kind === `ai-progress`);
    e2((e3) => ({ notifications: e3.notifications.filter((e4) => e4.id !== n2) })), t2().toast.error(r2), i2 && t2().logActivity({ type: `error`, title: `Failed: ${i2.prompt.slice(0, 50)}`, details: { prompt: i2.prompt, error: r2 }, undoable: false });
  }, cancelAIOperation: (n2) => {
    let r2 = t2().notifications.find((e3) => e3.id === n2 && e3.kind === `ai-progress`);
    (r2 == null ? void 0 : r2.onCancel) && r2.onCancel(), e2((e3) => ({ notifications: e3.notifications.filter((e4) => e4.id !== n2) })), t2().toast.info(`Generation cancelled`);
  }, requestDecision: (r2) => new Promise((i2) => {
    let a3 = n(), o2 = { id: a3, timestamp: Date.now(), kind: `decision`, dismissible: false, ...r2, onSelect: (e3) => {
      r2.onSelect(e3), t2().dismiss(a3), i2(e3);
    } };
    e2((e3) => ({ notifications: [...e3.notifications, o2] }));
  }), showActionResult: (t3) => {
    let r2 = n(), i2 = { id: r2, timestamp: Date.now(), kind: `action-result`, dismissible: true, ...t3 };
    return e2((e3) => ({ notifications: [...e3.notifications, i2] })), t3.actions.length === 0 && a2(r2, 8e3), r2;
  }, showWarning: (r2) => {
    let i2 = n(), a3 = { id: i2, timestamp: Date.now(), kind: `warning`, dismissible: true, ...r2 };
    return e2((e3) => ({ notifications: [...e3.notifications, a3] })), t2().logActivity({ type: `warning`, title: r2.title, details: { description: r2.description, category: r2.category }, undoable: false }), i2;
  }, logActivity: (t3) => {
    let r2 = { id: n(), timestamp: Date.now(), ...t3 };
    e2((e3) => ({ activityLog: [r2, ...e3.activityLog].slice(0, 100) }));
  }, clearActivityLog: () => e2({ activityLog: [] }), dismiss: (t3) => {
    let n2 = r.get(t3);
    n2 && (clearTimeout(n2), r.delete(t3)), i.delete(t3), e2((e3) => ({ notifications: e3.notifications.filter((e4) => e4.id !== t3) }));
  }, dismissAll: () => {
    r.forEach((e3) => clearTimeout(e3)), r.clear(), i.clear(), e2({ notifications: [] });
  }, pauseAutoDismiss: (e3) => {
    let n2 = r.get(e3);
    if (!n2) return;
    clearTimeout(n2), r.delete(e3);
    let a3 = t2().notifications.find((t3) => t3.id === e3);
    if (a3 && `duration` in a3) {
      let t3 = Date.now() - a3.timestamp, n3 = Math.max(0, a3.duration - t3);
      i.set(e3, n3);
    }
  }, resumeAutoDismiss: (e3) => {
    let t3 = i.get(e3);
    t3 !== void 0 && (i.delete(e3), a2(e3, t3));
  } };
});
export {
  a as t
};
