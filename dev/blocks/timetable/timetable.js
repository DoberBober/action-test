function timetableSelectChangeListener(evt){
	document.querySelector('.timetable__day--visible').classList.remove('timetable__day--visible')
	document.querySelector(`.timetable__day[data-day='${evt.currentTarget.value}']`).classList.add('timetable__day--visible')

	timetablesSliders.forEach((item) => {
		item.resize()
	})
}
function customDropdownsSelectedClickListener(evt){
	evt.target.classList.toggle('dropdown__select--open')
	evt.target.parentElement.querySelector('.dropdown__list').classList.toggle('dropdown__list--active')
}
function customSelectOptionsClickListener(evt) {
	evt.target.parentElement.querySelector('.dropdown__item--active').classList.remove('dropdown__item--active')

	evt.target.classList.add('dropdown__item--active')
	evt.target.closest('.dropdown').querySelector('.dropdown__select').innerHTML = evt.target.innerHTML

	evt.target.closest('.dropdown').querySelector('.dropdown__select').classList.remove('dropdown__select--open')
	evt.target.parentElement.classList.remove('dropdown__list--active')

	let targetTimetableDay = evt.target.closest('.dropdown').querySelector('.dropdown__select').innerHTML;
	console.log(targetTimetableDay)

	document.querySelector(`.timetable__select option[value='${evt.target.getAttribute("value")}']`).selected = true
	document.querySelector(`.timetable__select`).dispatchEvent(new Event('change'));
}

function timetableBtnListener(evt){
	document.querySelector('.timetable__btn--active').classList.remove('timetable__btn--active')
	evt.currentTarget.classList.add('timetable__btn--active')

	document.querySelector('.timetable__day--visible').classList.remove('timetable__day--visible')
	document.querySelector(`.timetable__day[data-day="${evt.currentTarget.dataset.day}"]`).classList.add('timetable__day--visible')
}

timetableInit = () => {
	let timetables = document.querySelectorAll('.timetable__schedule')

	if(timetablesSliders.length){
		timetablesSliders.forEach((slider) => {
			slider.destroy()
		})
		timetablesSliders = []
	}

	if(timetables.length > 0){
		timetables.forEach((item) => {
			timetablesSliders.push(new Flickity( item, {
				imagesLoaded: true,
				pageDots: false,
				cellAlign: 'left',
				arrowShape: '',
				contain: true,
				watchCSS: true
			}));
		})
	}

	if(document.querySelector('.timetable__day')){
		document.querySelector('.timetable__day').classList.add('timetable__day--visible')
	}

	if(document.querySelector('.timetable__btn')){
		document.querySelector('.timetable__btn').classList.add('timetable__btn--active')
	}

	if(timetablesSliders.length > 0){
		timetablesSliders.forEach((item) => {
			item.resize()
		})

		let timetableSelect = document.querySelector('.timetable__select')

		timetableSelect.removeEventListener('change', timetableSelectChangeListener)
		timetableSelect.addEventListener('change', timetableSelectChangeListener)
	}


	let customDropdowns = document.querySelectorAll('.dropdown--timetable')

	// Ставим значение по умолчанию.
	let customDropdownsSelected = document.querySelectorAll('.dropdown--timetable .dropdown__select')
	if(customDropdownsSelected.length){
		customDropdownsSelected.forEach((item) => {
			item.innerHTML = item.parentElement.querySelector('.dropdown__item').innerHTML
			item.parentElement.querySelector('.dropdown__item').classList.add('dropdown__item--active')

			item.removeEventListener('click', customDropdownsSelectedClickListener)
			item.addEventListener('click', customDropdownsSelectedClickListener)
		})
	}

	// Устанавливаем обработчики.
	let customSelectOptions = document.querySelectorAll('.dropdown--timetable .dropdown__item')
	if(customSelectOptions.length){
		customSelectOptions.forEach((item) => {
			item.removeEventListener('click', customSelectOptionsClickListener)
			item.addEventListener('click', customSelectOptionsClickListener)
		})
	}

	let timetableBtns = document.querySelectorAll('.timetable__btn')
	if(timetableBtns.length){
		timetableBtns.forEach((btn) => {
			btn.removeEventListener('click', timetableBtnListener)
			btn.addEventListener('click', timetableBtnListener)
		})
	}
}
