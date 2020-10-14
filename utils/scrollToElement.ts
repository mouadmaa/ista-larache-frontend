export const scrollToElement = ref => {
  window.scrollTo(0, ref.current.offsetTop - 100)
}
