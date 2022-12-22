import { createP, createTop } from "./components/components"
import { multipleOf } from "./components/utils"

import "./styles/texts.sass";

createTop()

let lorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem harum ut sed accusamus quae magni molestias at modi, praesentium voluptate provident est perspiciatis enim distinctio soluta aliquid omnis quasi numquam?"
let words = lorem.split(" ")

words.forEach((word, index) => {
	let elementClass = "black-text"
	if (multipleOf(index, 2)) {
		elementClass = "red-text"
	}
	if (multipleOf(index, 3)) {
		elementClass = "green-text"
	}
	if (multipleOf(index, 5)) {
		elementClass = "blue-text"
	}
	createP(word, elementClass)
})