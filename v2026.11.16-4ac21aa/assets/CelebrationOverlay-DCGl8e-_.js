import { i as e } from "./rolldown-runtime-COiEfhsA.js";
import { M as t, O as n } from "./three-drei-_EcrAYRL.js";
import { t as r } from "./utils-D0T3A-kS.js";
import { t as i } from "./onboarding-store-BxlWWPNy.js";
var a = e(t(), 1), o = n(), s = [`#3b82f6`, `#10b981`, `#f59e0b`, `#ef4444`, `#8b5cf6`, `#ec4899`];
function c(e2) {
  return { id: e2, x: 50 + (Math.random() - 0.5) * 20, y: 50, color: s[Math.floor(Math.random() * s.length)], size: 4 + Math.random() * 4, velocityX: (Math.random() - 0.5) * 8, velocityY: -8 - Math.random() * 6, rotation: Math.random() * 360, rotationSpeed: (Math.random() - 0.5) * 20 };
}
function l() {
  let e2 = i((e3) => e3.guidedFlowStep), [t2, n2] = (0, a.useState)([]), [s2, l2] = (0, a.useState)(false), u = (0, a.useCallback)(() => {
    let e3 = Array.from({ length: 30 }, (e4, t4) => c(t4));
    n2(e3), l2(true);
    let t3 = 0, r2 = () => {
      t3++, t3 > 60 ? (l2(false), n2([])) : (n2((e4) => e4.map((e5) => ({ ...e5, x: e5.x + e5.velocityX * 0.3, y: e5.y + e5.velocityY * 0.3, velocityY: e5.velocityY + 0.4, rotation: e5.rotation + e5.rotationSpeed }))), requestAnimationFrame(r2));
    };
    requestAnimationFrame(r2);
  }, []);
  return (0, a.useEffect)(() => {
    e2 === `celebrate` && u();
  }, [e2, u]), (0, a.useEffect)(() => {
    let e3 = () => u();
    return window.addEventListener(`vcad:celebrate-sign-in`, e3), window.addEventListener(`vcad:celebrate-upgrade`, e3), () => {
      window.removeEventListener(`vcad:celebrate-sign-in`, e3), window.removeEventListener(`vcad:celebrate-upgrade`, e3);
    };
  }, [u]), s2 ? (0, o.jsx)(`div`, { className: `fixed inset-0 z-50 pointer-events-none overflow-hidden`, children: t2.map((e3) => (0, o.jsx)(`div`, { className: r(`absolute rounded-sm`, `transition-opacity duration-300`), style: { left: `${e3.x}%`, top: `${e3.y}%`, width: e3.size, height: e3.size, backgroundColor: e3.color, transform: `rotate(${e3.rotation}deg)`, opacity: Math.max(0, 1 - e3.y / 150) } }, e3.id)) }) : null;
}
export {
  l as CelebrationOverlay
};
