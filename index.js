export default function smoothScroll(
  target,
  container = document.documentElement,
  dur = 330,
  ease = linear
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

function linear(t, b, c, d) {
  return (c * t) / d + b
}
