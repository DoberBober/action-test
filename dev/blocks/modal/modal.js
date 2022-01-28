// // Modal and modal overlay.
// function modalHide(){
// 	modal.classList.remove('modal--show')
// 	modalOverlay.classList.remove('modalOverlay--show')
// }

// if(!document.querySelector('.modal')){
// 	let modalOverlayElement = document.createElement("div");
// 	modalOverlayElement.classList.add('modalOverlay')
// 	document.body.append(modalOverlayElement)

// 	let modalElement = document.createElement("div");
// 	modalElement.classList.add('modal')
// 	modalElement.innerHTML = `<button class="modal__close" type="button" aria-label="Закрыть модальное окно">${modalCloseSVG}</button>`

// 	let modalContentElement = document.createElement("div");
// 	modalContentElement.classList.add('modal__content')
// 	modalElement.append(modalContentElement)

// 	let modalImageWrapperElement = document.createElement("div");
// 	modalImageWrapperElement.classList.add('modal__image')
// 	modalContentElement.append(modalImageWrapperElement)

// 	let modalImageElement = document.createElement("img");
// 	modalImageWrapperElement.append(modalImageElement)

// 	let modalInfoElement = document.createElement("div");
// 	modalInfoElement.classList.add('modal__info')
// 	modalContentElement.append(modalInfoElement)

// 	document.body.append(modalElement)

// 	let modal = document.querySelector('.modal')
// 	let modalClose = document.querySelector('.modal__close')
// 	let modalOverlay = document.querySelector('.modalOverlay')

// 	if(modal && modalClose){
// 		modalClose.addEventListener('click', modalHide)
// 	}
// }
