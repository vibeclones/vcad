import { b as o, k as d } from "./three-fiber-DvYcInOp.js";
import { u as b, c as h } from "./index-DYo2o8YT.js";
import "./three-tnxpQXqG.js";
import "./three-drei-B9AdtZoT.js";
const m = ["#3b82f6", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6", "#ec4899"];
function y(r) {
  return { id: r, x: 50 + (Math.random() - 0.5) * 20, y: 50, color: m[Math.floor(Math.random() * m.length)], size: 4 + Math.random() * 4, velocityX: (Math.random() - 0.5) * 8, velocityY: -8 - Math.random() * 6, rotation: Math.random() * 360, rotationSpeed: (Math.random() - 0.5) * 20 };
}
function E() {
  const r = b((e) => e.guidedFlowStep), [u, n] = o.useState([]), [f, i] = o.useState(false), a = o.useCallback(() => {
    const e = Array.from({ length: 30 }, (l, t) => y(t));
    n(e), i(true);
    let s = 0;
    const v = 60, c = () => {
      if (s++, s > v) {
        i(false), n([]);
        return;
      }
      n((l) => l.map((t) => ({ ...t, x: t.x + t.velocityX * 0.3, y: t.y + t.velocityY * 0.3, velocityY: t.velocityY + 0.4, rotation: t.rotation + t.rotationSpeed }))), requestAnimationFrame(c);
    };
    requestAnimationFrame(c);
  }, []);
  return o.useEffect(() => {
    r === "celebrate" && a();
  }, [r, a]), o.useEffect(() => {
    const e = () => a();
    return window.addEventListener("vcad:celebrate-sign-in", e), window.addEventListener("vcad:celebrate-upgrade", e), () => {
      window.removeEventListener("vcad:celebrate-sign-in", e), window.removeEventListener("vcad:celebrate-upgrade", e);
    };
  }, [a]), f ? d.jsx("div", { className: "fixed inset-0 z-50 pointer-events-none overflow-hidden", children: u.map((e) => d.jsx("div", { className: h("absolute rounded-sm", "transition-opacity duration-300"), style: { left: `${e.x}%`, top: `${e.y}%`, width: e.size, height: e.size, backgroundColor: e.color, transform: `rotate(${e.rotation}deg)`, opacity: Math.max(0, 1 - e.y / 150) } }, e.id)) }) : null;
}
export {
  E as CelebrationOverlay
};
