function docsCheckerListener(evt){
	let targetDocsType = evt.currentTarget.dataset.doctype

	evt.currentTarget.closest('.docs__btns').querySelector('.docs__btn--active').classList.remove('docs__btn--active')
	evt.currentTarget.classList.add('docs__btn--active')

	docsItems.forEach((item) => {
		item.classList.add('hidden')
		item.classList.remove('docs__item--slide')

		if(item.dataset.doctype == targetDocsType){
			item.classList.remove('hidden')
			item.classList.add('docs__item--slide')
		}
	})

	docsSlider.deactivate()
	docsSlider.activate()
}

function docsDocumentListener(evt){
	if(docsCheckers.length > 0){
		// Активируем первый переключатель.
		docsCheckers[0].classList.add('docs__btn--active')

		docsItems.forEach((item) => {
			if(item.dataset.doctype != docsCheckers[0].dataset.doctype){
				item.classList.add('hidden')
				item.classList.remove('docs__item--slide')
			}

		})

		docsSlider.deactivate()
		docsSlider.activate()
	}
}

docsInit = () => {
	docsCheckers = document.querySelectorAll('.docs__btn')
	docsItems = document.querySelectorAll('.docs__item')
	docsList = document.querySelector('.docs__list')

	if(docsSlider){
		docsSlider.destroy()
	}
	if(docsList){
		docsSlider = new Flickity( docsList, {
			imagesLoaded: true,
			pageDots: false,
			adaptiveHeight: true,
			arrowShape: '',
			adaptiveHeight: false,
			cellAlign: 'left',
			contain: true,
			groupCells: true,
			cellSelector: '.docs__item--slide'
		});

	}

	docsDocumentListener()

	// Добавляем слушатель.
	docsCheckers.forEach((btn) => {
		btn.removeEventListener('click', docsCheckerListener)
		btn.addEventListener('click', docsCheckerListener)
	})
}
