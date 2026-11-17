function e(e2, t) {
  let n = URL.createObjectURL(e2), r = document.createElement(`a`);
  r.href = n, r.download = t, document.body.appendChild(r), r.click(), document.body.removeChild(r), URL.revokeObjectURL(n);
}
export {
  e as t
};
