const setValue = (property, value) => {
  if (!value) return

  document.documentElement.style.setProperty(`--${property}`, value)

  const input = document.querySelector(`#${property}`)
  if (input) {
    value = value.replace('px', '')
    input.value = value
  }
}

const setValueFromLocalStorage = (property) => {
  console.log(config.defaultTheme)
  const value =
    localStorage.getItem(property) ||
    config.themes[config.defaultTheme][property]
  setValue(property, value)
}

const setTheme = (options) => {
  for (const option of Object.keys(options)) {
    const value = options[option]

    setValue(option, value)
    localStorage.setItem(option, value)
  }
}

const observer = new MutationObserver((mutationsList) => {
  mutationsList.forEach((mutation) => {
    if (mutation.type === 'childList') {
      mutation.addedNodes.forEach((node) => {
        if (
          node.nodeType === Node.ELEMENT_NODE &&
          node.hasAttribute('data-theme')
        ) {
          node.addEventListener('click', () => {
            const theme = node.dataset.theme

            setTheme(config.themes[theme])
          })
        }
      })
    }
  })
})

observer.observe(document.body, { childList: true, subtree: true })
