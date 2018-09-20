# Smooth Scroll 🥤 ⚓

#### simple smooth scrolling

### Usage

````javascript
const arr = [...document.querySelectorAll(".items")]
  arr.forEach(el =>
    el.addEventListener("click", () => {
      smoothScroll(document.getElementById(el.getAttribute('data-link-or-smth')))
    })
  )```
````

### API

```typescript
function smoothScroll(
    target: HTMLElement,
    container: HTMLElement,
    duration: number,
    ease: (
        time: number,
        beggining: number,
        change: number,
        duration: number
    ) => number
): void
```

### Defaults

```
    container = document.documentElement
    duration = 330
    ease = linear
```
