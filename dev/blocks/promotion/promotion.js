promotionInit = () => {
	let promotionsList = document.querySelector('.promotion__list')

	if(promotionsSlider){
		promotionsSlider.destroy()
	}

	if(promotionsList){
		promotionsSlider = new Flickity( promotionsList, {
			imagesLoaded: true,
			arrowShape: '',
			adaptiveHeight: false,
			cellAlign: 'left',
			contain: true,
		});

		promotionsSlider.deactivate()
		promotionsSlider.activate()

		let promotionsListDots = promotionsList.querySelectorAll('.flickity-page-dots .dot')
		if(promotionsListDots.length>5){
			promotionsListDots[4].classList.add('small')
			for(let i=5; i<promotionsListDots.length; i++){
				promotionsListDots[i].classList.add('hidden')
				promotionsListDots[i].classList.add('small')
			}
		}

		promotionsSlider.on('change', () => {
			let promotionsListActiveDot = promotionsList.querySelector('.flickity-page-dots .is-selected')
			let activeDotIndex = [...promotionsListActiveDot.parentElement.children].indexOf(promotionsListActiveDot) + 1

			if(promotionsListDots.length > 5){

				promotionsListDots.forEach((dot) => {
					dot.classList.add('hidden')
					dot.classList.add('small')
				})

				promotionsListActiveDot.classList.remove('hidden')
				promotionsListActiveDot.classList.remove('small')

				if(activeDotIndex <= 3){
					for(let i=0; i<=3; i++){
						promotionsListDots[i].classList.remove('hidden')
						promotionsListDots[i].classList.remove('small')
					}

					promotionsListDots[4].classList.remove('hidden')
					promotionsListDots[4].classList.add('small')

				} else if(activeDotIndex >= promotionsListDots.length-2){
					for(let i=1; i<=4; i++){
						promotionsListDots[promotionsListDots.length-i].classList.remove('hidden')
						promotionsListDots[promotionsListDots.length-i].classList.remove('small')
					}

					promotionsListDots[promotionsListDots.length-5].classList.remove('hidden')
					promotionsListDots[promotionsListDots.length-5].classList.add('small')
				} else {
					promotionsListDots[activeDotIndex].classList.remove('small')
					promotionsListDots[activeDotIndex].classList.remove('hidden')

					promotionsListDots[activeDotIndex-2].classList.remove('small')
					promotionsListDots[activeDotIndex-2].classList.remove('hidden')

					promotionsListDots[activeDotIndex+1].classList.add('small')
					promotionsListDots[activeDotIndex+1].classList.remove('hidden')

					promotionsListDots[activeDotIndex-3].classList.add('small')
					promotionsListDots[activeDotIndex-3].classList.remove('hidden')
				}
			}
		});
	}
}
