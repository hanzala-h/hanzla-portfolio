import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'

export const initHeader = () => {
  const btnOpen = document.getElementById('btnOpen')
  const btnClose = document.getElementById('btnClose')
  const topNavMenu = document.querySelector('.topnav__menu')
  const main = document.querySelector('main')
  const body = document.body
  const media = window.matchMedia('(max-width: 768px)')

  if (!btnOpen || !btnClose || !topNavMenu || !main) return

  const setupTopNav = (evt) => {
    if (evt.matches) {
      topNavMenu.setAttribute('inert', '')
      topNavMenu.classList.remove('is-open')
    } else {
      topNavMenu.removeAttribute('inert')
      topNavMenu.classList.remove('is-open')
      main.removeAttribute('inert')
      enableBodyScroll(body)
    }
  }

  const openMobileMenu = () => {
    btnOpen.setAttribute('aria-expanded', 'true')
    topNavMenu.removeAttribute('inert')
    topNavMenu.classList.add('is-open')
    main.setAttribute('inert', '')
    disableBodyScroll(body)
    btnClose.focus()
  }

  const closeMobileMenu = () => {
    btnOpen.setAttribute('aria-expanded', 'false')
    topNavMenu.setAttribute('inert', '')
    topNavMenu.classList.remove('is-open')
    main.removeAttribute('inert')
    enableBodyScroll(body)
    btnOpen.focus()
  }

  btnOpen.addEventListener('click', openMobileMenu)
  btnClose.addEventListener('click', closeMobileMenu)

  setupTopNav(media)
  media.addEventListener('change', setupTopNav)
}
