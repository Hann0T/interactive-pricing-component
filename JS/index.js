const inputRange = document.querySelector('.card__range')

const inputViews = document.querySelector('.card__views')

const price = document.querySelector('.card__price')
const span = '.00 <span class="card__time">/month</span>'

const checkbox = document.querySelector('.card__checkbox')

const headStyle = document.head.appendChild(document.createElement('style'))


function drawPrice() {

	var value = inputRange.value
	let views = '100k pageviews'
	let barPercentage = '0%'

	switch (value) {
		case '0':
			value = 8
			views = '10k pageviews'
			barPercentage = '0%'
			break
		case '25':
			value = 12
			views = '50k pageviews'
			barPercentage = '25%'
			break
		case '50':
			value = 16
			views = '100k pageviews'
			barPercentage = '50%'
			break
		case '75':
			value = 24
			views = '500k pageviews'
			barPercentage = '75%'
			break
		case '100':
			value = 36
			views = '1M pageviews'
			barPercentage = '100%'
			break
	}

	if (checkbox.checked) {
		value *= 0.75
	} else {
		value *= 1
	}

	price.innerHTML = `$${value}${span}`
	inputViews.innerHTML = views
	headStyle.innerHTML = `.card__range::before{width: ${barPercentage};}`

}

inputRange.addEventListener('change', () => {
	drawPrice()
})


checkbox.addEventListener('click', () => {
	drawPrice()
})



