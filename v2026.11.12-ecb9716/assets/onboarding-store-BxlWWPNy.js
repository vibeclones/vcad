import { t as e } from "./react-Cf1qM0wN.js";
import { t } from "./middleware-CJ9hWF1h.js";
var n = [`add-cube`, `add-cylinder`, `position-cylinder`, `subtract`, `celebrate`], r = e()(t((e2, t2) => ({ projectsCreated: 0, welcomeModalDismissed: false, welcomeHiddenThisSession: false, guidedFlowActive: false, guidedFlowStep: null, guidedFlowCompleted: false, sessionsCompleted: 0, incrementProjectsCreated: () => e2((e3) => ({ projectsCreated: e3.projectsCreated + 1 })), dismissWelcomeModal: () => e2({ welcomeModalDismissed: true, welcomeHiddenThisSession: true }), hideWelcomeThisSession: () => e2({ welcomeHiddenThisSession: true }), startGuidedFlow: () => e2({ guidedFlowActive: true, guidedFlowStep: `add-cube`, welcomeHiddenThisSession: true }), advanceGuidedFlow: () => {
  let { guidedFlowStep: r2 } = t2(), i = n.indexOf(r2);
  i === -1 || i >= n.length - 1 || e2({ guidedFlowStep: n[i + 1] });
}, skipGuidedFlow: () => e2({ guidedFlowActive: false, guidedFlowStep: null }), completeGuidedFlow: () => e2({ guidedFlowActive: false, guidedFlowStep: null, guidedFlowCompleted: true }), incrementSessions: () => e2((e3) => ({ sessionsCompleted: e3.sessionsCompleted + 1 })) }), { name: `vcad-onboarding`, partialize: (e2) => ({ projectsCreated: e2.projectsCreated, welcomeModalDismissed: e2.welcomeModalDismissed, guidedFlowCompleted: e2.guidedFlowCompleted, sessionsCompleted: e2.sessionsCompleted }) }));
export {
  r as t
};
