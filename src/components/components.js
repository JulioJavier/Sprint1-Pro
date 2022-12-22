

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