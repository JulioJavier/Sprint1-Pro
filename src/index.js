import { createP, createH1, createSpam, createDiv, createFooter } from "./components/components"
import { multipleOf } from "./components/utils"
import { countDown } from "./components/clock";

import "./styles/texts.sass";

// createTop()

const month = 'Dec '
const day = '25 '
const year = '2022'
const hour = ' 13'
const minute = ':00'
const seconds = ':00'
const gmt = ' GMT-0500'

const addDate = month + day + year + hour + minute + seconds + gmt

countDown(addDate, 'top', 'Terminado')
// let lorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem harum ut sed accusamus quae magni molestias at modi, praesentium voluptate provident est perspiciatis enim distinctio soluta aliquid omnis quasi numquam?"
// let words = lorem.split(" ")

// words.forEach((word, index) => {
// 	let elementClass = "black-text"
// 	if (multipleOf(index, 2)) {
// 		elementClass = "red-text"
// 	}
// 	if (multipleOf(index, 3)) {
// 		elementClass = "green-text"
// 	}
// 	if (multipleOf(index, 5)) {
// 		elementClass = "blue-text"
// 	}
// 	createP(word, elementClass)
// })