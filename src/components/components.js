

export const createP = (text = " ", elementClass = " ") => {
	let element = document.createElement("p")
	element.innerHTML = text
	element.classList.add(elementClass)
	document.body.appendChild(element)
}

export const createDiv = (id = "myDiv") => {
	let element = document.createElement("div")
	element.id = id
	document.body.appendChild(element)
}

export const createTop = () => {
	const DIV_ID = "top"
	createDiv(DIV_ID)
	let div = document.getElementById(DIV_ID)
	let p = document.createElement("p")
	p.innerHTML = "holas :D"
	div.appendChild(p)
}