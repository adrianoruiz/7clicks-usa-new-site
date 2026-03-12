/**
 * Composable for animated counting up numbers.
 * Used in SocialProof stats section.
 */
export function useCountUp(target: number, duration = 2000) {
  const current = ref(0)
  const hasAnimated = ref(false)

  function animate() {
    if (hasAnimated.value) return
    hasAnimated.value = true

    const startTime = performance.now()
    const step = (now: number) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      // Ease-out cubic for smooth deceleration
      const eased = 1 - Math.pow(1 - progress, 3)
      current.value = Math.round(eased * target)

      if (progress < 1) {
        requestAnimationFrame(step)
      }
    }
    requestAnimationFrame(step)
  }

  return { current, animate }
}
