

export const createH1 = (text = " ", elementClass = " ") => {
	let element = document.createElement("p")
	element.innerHTML = text
	element.classList.add(elementClass)
	document.body.appendChild(element)
}
export const createP = (text = " ", elementClass = " ") => {
	let element = document.createElement("p")
	element.innerHTML = text
	element.classList.add(elementClass)
	document.body.appendChild(element)
}

export const createSpan = (text = " ", elementClass = " ") => {
	let element = document.createElement("span")
	element.innerHTML = text
	element.classList.add(elementClass)
	document.body.appendChild(element)
}

export const createDiv = (id) => {
	let element = document.createElement("div")
	element.id = id
	document.body.appendChild(element)
}
export const createDivClock = (days,hours,minutes,seconds) => {
	let container = document.createElement("div")
	container.classList.add('container')
	container.innerHTML = `
	<span class="countDown">${days}</span>
	<span class="countDown">${hours}</span>
	<span class="countDown">${minutes}</span>
	<span class="countDown">${seconds}</span>
	`
	document.body.appendChild(container)
}
export const createDivDates = () => {
	let index = document.createElement("div")
	index.classList.add('containerIndex')
	index.innerHTML = `
	<p class="indexDates">DAYS</p>
	<p class="indexDates">HOURS</p>
	<p class="indexDates">MINUTES</p>
	<p class="indexDates">SECONDS</p>
	`
	document.body.appendChild(index)
}
export const createFooter = () => {
	let element = document.createElement("div")
	document.body.appendChild(element)
	element.classList.add('footerImg')
}
