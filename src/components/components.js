

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
	// let Dtdays = days
	// let Dthour = hours
	// let Dtminutes = minutes
	// let Dtseconds = seconds
	// let spanClass = 'countDown'
	// let span = document.createElement("span")
	// span.classList.add(spanClass)
	// document.body.appendChild(span)
}
export const createFooter = () => {
	let element = document.createElement("div")
	document.body.appendChild(element)
	element.classList.add('footerImg')

	// element.innerHTML = `<img src="../img/pattern-hills.svg" alt="">`
	// let element = document.createElement("footer")
	// document.body.appendChild(element)
	// let img = document.createElement("img")
	// element.appendChild(img)
	// img.src('../img/pattern-hills.svg')
	// img.src
	//img.src('../img/pattern-hills.svg')
	
}
// export const createTop = () => {
// 	const DIV_ID = "top"
// 	createDiv(DIV_ID)
// 	let div = document.getElementById(DIV_ID)
// 	let p = document.createElement("p")
// 	p.innerHTML = "holas :D"
// 	div.appendChild(p)
// }