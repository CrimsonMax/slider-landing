const facilitiesItem = document.querySelector('.facilities__content___list')
const facilitiesImage = document.querySelector('.facilities__content___image____pic')

function changeAnimation(elem) {
  facilitiesImage.style.opacity = '0'
  setTimeout(() => {
    facilitiesImage.style.opacity = '1'
    facilitiesImage.src = `img/images/facilities-${elem}.png`
  }, 150)
}

function sortImage(event) {
  let block = event.target
  let index = block.dataset.image

  if (block.classList.contains('highlight-facility')) return
  document.querySelector('.highlight-facility').classList.remove('highlight-facility')
  block.classList.add('highlight-facility')
  changeAnimation(index)
}

// function autoChange() {
//   const facilitiesArray = document.querySelectorAll('.facilities__content___list____block')
//   let index
//   let point
//   const check = (num) => num <= facilitiesArray.length - 1 ? num : 0


//   facilitiesArray.forEach(facility => {

//     if (facility.classList.contains('highlight-facility')) {
//       index = facility.dataset.image
//       facility.classList.remove('highlight-facility')
//       index++
//       index <= 5 ? changeAnimation(index) : changeAnimation(1)
//       point = index - 1
//     }

//   })

//   facilitiesArray[check(point)].classList.add('highlight-facility')
// }

// export function autoFacilitiesImage() {
//   setInterval(autoChange, 5000);
// }

export function changeImage() {
  facilitiesItem.addEventListener('click', sortImage)
}