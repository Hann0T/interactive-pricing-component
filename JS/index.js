const inputRange = document.querySelector('.card__range')

const inputViews = document.querySelector('.card__views')

const price = document.querySelector('.card__price')
const span = '.00 <span class="card__time">/month</span>'

const checkbox = document.querySelector('.card__checkbox')



function drawPrice() {

	var value = inputRange.value
	let views = '100k pageviews'

	switch (value) {
		case '0':
			value = 8
			views = '10k pageviews'
			break
		case '25':
			value = 12
			views = '50k pageviews'
			break
		case '50':
			value = 16
			views = '100k pageviews'
			break
		case '75':
			value = 24
			views = '500k pageviews'
			break
		case '100':
			value = 36
			views = '1M pageviews'
			break
	}

	if (checkbox.checked) {
		value *= 0.75
	} else {
		value *= 1
	}

	price.innerHTML = `$${value}${span}`
	inputViews.innerHTML = views

}


inputRange.addEventListener('change', () => {
	drawPrice()
})


checkbox.addEventListener('click', () => {
	drawPrice()
})



