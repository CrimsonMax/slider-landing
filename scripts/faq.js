export function faqTable() {
  const faqContainer = document.querySelector('.faqs__boxes')
  const chevronLogo = document.querySelectorAll('.faq-chevron')
  const testText = document.querySelectorAll('.faq-modal')

  const choiseFaq = (e) => {
    let trg = e.target

    if (trg.tagName === 'BUTTON' || trg.tagName === 'SPAN') {

      chevronLogo.forEach(elem => {
        if (elem === trg || elem.parentNode === trg) {
          elem.classList.toggle('active')
        }
      })

      testText.forEach(elem => {
        if (elem.parentNode.contains(trg)) {
          elem.classList.toggle('active')
        }
      })
    } else {
      return
    }
  }

  faqContainer.addEventListener('click', choiseFaq)
}