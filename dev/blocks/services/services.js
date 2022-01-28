function serviceClickHandler(el){
	if(serviceBtns.length > 0){
		el.classList.add('services__btn--active')
		let targetServiceDirection = el.dataset.servicedirection

		if(customDropdowns.length){
			customDropdowns.forEach((item) => {
				item.classList.add('hidden')
				if(item.dataset.servicedirection == targetServiceDirection){
					item.classList.remove('hidden')
				}
			})
		}

		if(serviceFilterNames.length > 0){
			serviceFilterNames.forEach((item) => {
				item.classList.add('hidden')

				if(item.dataset.servicedirection == targetServiceDirection){
					item.classList.remove('hidden')
				}
			})

			document.querySelectorAll('.services__filterBtn--active').forEach((btn) => {
				btn.classList.remove('services__filterBtn--active')
			})
			document.querySelector('.services__filterName:not(.hidden) .services__filterBtn').classList.add('services__filterBtn--active')
		}

		if(serviceItems.length > 0){
			let initialServiceTarget = document.querySelector('.services__filterBtn--active').dataset.servicetype
			serviceItems.forEach((item) => {
				item.classList.add('hidden')
				item.classList.remove('is-selected')
				item.classList.remove('services__item--slide')

				if(item.dataset.servicetype == initialServiceTarget){
					item.classList.remove('hidden')
					item.classList.add('services__item--slide')
				}
			})
		}

		document.querySelector('.services__filterBtn--active').click()
		document.querySelector('.services__select:not(.hidden) option').selected = true

		if(servicesSlider.isActive){
			servicesSlider.deactivate()
			servicesSlider.activate()
		}
	}
}

function serviceDropdownInitialListener(evt){
	evt.target.classList.toggle('dropdown__select--open')
	evt.target.parentElement.querySelector('.dropdown__list').classList.toggle('dropdown__list--active')
}

function serviceDropdownSelectedListener(evt){
	evt.target.parentElement.querySelector('.dropdown__item--active').classList.remove('dropdown__item--active')

	evt.target.classList.add('dropdown__item--active')
	evt.target.closest('.dropdown').querySelector('.dropdown__select').innerHTML = evt.target.innerHTML

	evt.target.closest('.dropdown').querySelector('.dropdown__select').classList.remove('dropdown__select--open')
	evt.target.parentElement.classList.remove('dropdown__list--active')

	let targetServiceDirection = evt.target.closest('.dropdown').dataset.servicedirection

	document.querySelector(`.services__select[data-servicedirection='${targetServiceDirection}'] option[value='${evt.target.getAttribute("value")}']`).selected = true
	document.querySelector(`.services__select[data-servicedirection='${targetServiceDirection}']`).dispatchEvent(new Event('change'));
}

function serviceBtnListener(evt){
	document.querySelector('.services__btn--active').classList.remove('services__btn--active')
	evt.currentTarget.classList.add('services__btn--active')

	serviceClickHandler(evt.currentTarget)
}

function serviceFilterBtnListener(evt) {
	document.querySelectorAll('.services__filterBtn--active').forEach((btn) => {
		btn.classList.remove('services__filterBtn--active')
	})
	evt.currentTarget.classList.add('services__filterBtn--active')

	document.querySelector(`.services__select:not(.hidden) option[value='${evt.currentTarget.dataset.servicetype}']`).selected = true
	document.querySelector(`.services__dropdown:not(.hidden) .dropdown__item--active`).classList.remove('dropdown__item--active')
	document.querySelector(`.services__dropdown:not(.hidden) .dropdown__item[value='${evt.currentTarget.dataset.servicetype}']`).classList.add('dropdown__item--active')
	document.querySelector(`.services__dropdown:not(.hidden) .dropdown__select`).innerHTML = document.querySelector(`.services__dropdown:not(.hidden) .dropdown__item--active`).innerHTML

	let targetServicesName = evt.currentTarget.dataset.servicetype

	serviceItems.forEach((item) => {
		item.classList.add('hidden')
		item.classList.remove('is-selected')
		item.classList.remove('services__item--slide')

		if(item.dataset.servicetype == targetServicesName){
			item.classList.remove('hidden')
			item.classList.add('services__item--slide')
		}
	})

	servicesSlider.resize()
}

function serviceSelectChangeListener(evt) {
	let targetServicesName = evt.currentTarget.value

	document.querySelector('.services__filterBtn--active').classList.remove('services__filterBtn--active')
	document.querySelector(`.services__filterBtn[data-serviceType='${targetServicesName}']`).classList.add('services__filterBtn--active')

	serviceItems.forEach((item) => {
		item.classList.add('hidden')
		item.classList.remove('is-selected')
		item.classList.remove('services__item--slide')

		if(item.dataset.servicetype == targetServicesName){
			item.classList.remove('hidden')
			item.classList.add('services__item--slide')
		}
	})

	servicesSlider.deactivate()
	servicesSlider.activate()
}

servicesInit = () => {
	let services = document.querySelector('.services__list')

	if(servicesSlider){
		servicesSlider.destroy()
	}

	if(services){
		servicesSlider = new Flickity( services, {
			imagesLoaded: true,
			pageDots: false,
			adaptiveHeight: true,
			arrowShape: '',
			adaptiveHeight: false,
			cellAlign: 'left',
			contain: true,
			cellSelector: '.services__item--slide',
			watchCSS: true
		});

	}

		customDropdowns = document.querySelectorAll('.dropdown--service')

		// Ставим значение по умолчанию.
		let customDropdownsSelected = document.querySelectorAll('.dropdown--service .dropdown__select')
		if(customDropdownsSelected.length){
			customDropdownsSelected.forEach((item) => {
				item.innerHTML = item.parentElement.querySelector('.dropdown__item').innerHTML
				item.parentElement.querySelector('.dropdown__item').classList.add('dropdown__item--active')

				item.removeEventListener('click', serviceDropdownInitialListener)
				item.addEventListener('click', serviceDropdownInitialListener)
			})
		}

		// Устанавливаем обработчики.
		let customSelectOptions = document.querySelectorAll('.dropdown--service .dropdown__item')
		if(customSelectOptions.length){
			customSelectOptions.forEach((item) => {
				item.removeEventListener('click', serviceDropdownSelectedListener)
				item.addEventListener('click', serviceDropdownSelectedListener)
			})
		}

		serviceBtns = document.querySelectorAll('.services__btn')
		serviceFilterNames = document.querySelectorAll('.services__filterName')
		serviceFilterBtns = document.querySelectorAll('.services__filterBtn')
		serviceFilterSelect = document.querySelectorAll('.services__select')
		serviceItems = document.querySelectorAll('.services__item')

		// Активируем первое направление и отображаем его услуги.
		serviceClickHandler(serviceBtns[0])

		// Навешиваем обработчик на переключатели направлений.
		serviceBtns.forEach((item) => {
			item.removeEventListener('click', serviceBtnListener)
			item.addEventListener('click', serviceBtnListener)
		})
	//


		if(serviceFilterBtns.length > 0 || serviceItems.length > 0){
			// Активируем первый пункт.
			serviceFilterBtns[0].classList.add('services__filterBtn--active')

			// Отображаем услуги первого пункта.
			serviceItems.forEach((item) => {
				item.classList.add('services__item--slide')

				if(item.dataset.servicetype != serviceFilterBtns[0].dataset.servicetype){
					item.classList.add('hidden')
					item.classList.remove('is-selected')
					item.classList.remove('services__item--slide')
				}
			})

			servicesSlider.resize()

			// Навешиваем обработчик переключения услуг и класса активного пункта.
			serviceFilterBtns.forEach((btn) => {
				btn.removeEventListener('click', serviceFilterBtnListener)
				btn.addEventListener('click', serviceFilterBtnListener)
			})

			// Навешиваем обработчик на select (для мобилок и планшетов).
			if(serviceFilterSelect.length > 0){
				serviceFilterSelect.forEach((item) => {
					item.removeEventListener('change', serviceSelectChangeListener)
					item.addEventListener('change', serviceSelectChangeListener)
				})
			}

		}
}
