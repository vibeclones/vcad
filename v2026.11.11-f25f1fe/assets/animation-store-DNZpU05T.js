import { t as e } from "./react-Cf1qM0wN.js";
var t = e((e2) => ({ visible: false, playing: false, timeS: 0, loop: true, speed: 1, show: () => e2({ visible: true }), hide: () => e2({ visible: false, playing: false }), play: () => e2({ playing: true, visible: true }), pause: () => e2({ playing: false }), togglePlay: () => e2((e3) => ({ playing: !e3.playing, visible: true })), seek: (t2) => e2({ timeS: t2, playing: false }), setLoop: (t2) => e2({ loop: t2 }), setSpeed: (t2) => e2({ speed: t2 }) }));
export {
  t
};
