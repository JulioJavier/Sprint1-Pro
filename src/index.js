import {createDivDates, createP, createH1, createSpam, createDiv, createFooter, createDivClock } from "./components/components"
import { multipleOf } from "./components/utils"
import { countDown } from "./components/clock";
import "./styles/texts.sass";

// createTop()

const month = 'Jan '
const day = '30 '
const year = '2023'
const hour = ' 13'
const minute = ':00'
const seconds = ':00'
const gmt = ' GMT-0500'

const addDate = month + day + year + hour + minute + seconds + gmt

countDown(addDate, 'top', 'TIEMPO AGOTADO')
