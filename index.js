export default function smoothScroll(
  target,
  container = document.documentElement,
  dur = 330,
  ease = easeInOutQuart
) {
  const start = container.scrollTop
  const end = target.getBoundingClientRect().top

  let ts = 0

  function loop(t) {
    ts = ts || t
    const p = t - ts
    const d = p / dur
    container.scrollTop = ease(p, start, end, dur)

    if (d > 1) cancelAnimationFrame(loop)
    else requestAnimationFrame(loop)
  }

  loop(0)
}

// https://github.com/danro/jquery-easing/blob/master/jquery.easing.js
function easeInOutQuart(t, b, c, d) {
  if ((t /= d / 2) < 1) return (c / 2) * t * t * t * t + b
  return (-c / 2) * ((t -= 2) * t * t * t - 2) + b
}
