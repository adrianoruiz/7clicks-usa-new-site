export default defineNuxtPlugin(() => {
  let saved = localStorage.getItem('theme')

  // Migrar valores antigos para nomes de tema daisyUI
  if (saved === 'dark') {
    saved = '7clicks-dark'
    localStorage.setItem('theme', saved)
  } else if (saved === 'light') {
    saved = '7clicks'
    localStorage.setItem('theme', saved)
  }

  // Se não tem preferência salva, detectar do sistema
  if (!saved) {
    saved = window.matchMedia('(prefers-color-scheme: dark)').matches
      ? '7clicks-dark'
      : '7clicks'
  }

  if (['7clicks', '7clicks-dark'].includes(saved)) {
    document.documentElement.setAttribute('data-theme', saved)
  }
})
