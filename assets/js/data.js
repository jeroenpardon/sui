let config = {}

const renderTemplate = (fileName, data) => {
  const src = document.getElementById(`${fileName}-template`).innerHTML
  const template = Handlebars.compile(src)
  const rendered = template({ ...data, labels: config.labels })

  document.getElementById(fileName).innerHTML += rendered
}

const fetchAndRender = async (fileName) => {
  const res = await fetch(`${fileName}.json`)
  const data = await res.json()

  if (fileName === 'apps' && config.useAppCategories) {
    const categories = data.apps.reduce((acc, app) => {
      if (!acc.includes(app.category)) acc.push(app.category)
      return acc
    }, [])

    const sortedData = categories.map((category) => {
      return {
        category,
        apps: data.apps
          .filter((app) => app.category === category)
          .map((app) => {
            return {
              ...app,
              url:
                app.url.includes('http://') || app.url.includes('https://')
                  ? app.url
                  : `http://${app.url}`,
              url_stripped: app.url.replace(/^\w+:\/\/(.+)\?.+/, '$1')
            }
          })
      }
    })

    sortedData.forEach((item) => renderTemplate(fileName, item))
  } else {
    renderTemplate(fileName, data)
  }

  return null
}

const fetchUser = async () => {
  const res = await fetch(oauth2UserInfoURL, {
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    }
  })

  return await res.json()
}

const fetchConfig = async () => {
  const res = await fetch('config.json')
  const data = await res.json()

  config = data

  for (const theme of Object.keys(config.themes)) {
    const src = document.getElementById(`theme-button`).innerHTML
    const template = Handlebars.compile(src)
    const rendered = template({ theme })

    document.getElementById('modal-theme').innerHTML += rendered
  }

  if (config.backgroundImage && config.backgroundImage.length > 0) {
    document.documentElement.style.setProperty(
      'background-image',
      `url(${config.backgroundImage}`
    )
    document.documentElement.style.setProperty('background-size', `cover`)
    document.documentElement.style.setProperty('background-repeat', `no-repeat`)
    document.documentElement.style.setProperty('background-attachment', `fixed`)
    document.body.style.setProperty('background', `transparent`)
  }

  return true
}

document.addEventListener('DOMContentLoaded', async () => {
  await fetchConfig()

  if (config.hideSettings) {
    document.getElementById('modal').style.display = 'none'
    document.getElementById('modal_init').style.display = 'none'
  }

  const user = config.useOauth2 ? await fetchUser() : null

  Handlebars.registerHelper('hasGroup', (groups) => {
    if (!groups || groups.length === 0) return true
    return user[config.userPermissionKey].some((g) => groups.includes(g))
  })

  if (config.withApps) await fetchAndRender('apps')

  if (config.withLinks) await fetchAndRender('links')

  if (config.withSearch) {
    await fetchAndRender('providers')
    document.getElementById('search').style.display = 'block'
    document.getElementById('provider-area').style.display = 'block'
  }

  setValueFromLocalStorage('color-background')
  setValueFromLocalStorage('color-text-pri')
  setValueFromLocalStorage('color-text-acc')

  date()
  greet()
})
