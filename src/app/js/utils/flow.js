
export const goTo = (pathname) => {
  const url = new URL(window.location)
  url.pathname = pathname
  url.search = ''
  window.location = url.toString()
}
