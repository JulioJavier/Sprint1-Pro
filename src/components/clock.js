import { createDivDates, createP, createH1, createSpan, createDiv, createFooter, createDivClock } from "./components";

export const getRemainTime = deadline =>{
    let now = new Date(),
    remainTime = (new Date(deadline) - now + 1000) / 1000,
    remainSeconds = ('0' + Math.floor(remainTime % 60)).slice(-2),
    remainMinutes = ('0' + Math.floor(remainTime /60 % 60)).slice(-2),
    remainHours = ('0' + Math.floor(remainTime /3600 % 24)).slice(-2),
    remainDays = Math.floor(remainTime /(3600 * 24)) 
    return{
        remainTime,
        remainSeconds,
        remainMinutes,
        remainHours,
        remainDays
    }
};

console.log(getRemainTime('Jan 01 2023 16:18:05 GMT-0500'));

// export const createDiv = (id = "myDiv") => {
//     let element = document.createElement("div")
// 	element.id = id
// 	document.body.appendChild(element)
// }

export const countDown = (deadline, elem, finalMessage) => {
    const DIV_ID = elem
	createDiv(DIV_ID)
	let div = document.getElementById(DIV_ID)
    
    const timerUpdate = setInterval( () => {
        document.body.innerHTML = '';
        // createTop()
        let t = getRemainTime(deadline);
        let time = `${t.remainDays}d:${t.remainHours}h:${t.remainMinutes}m:${t.remainSeconds}s`
        let days = `${t.remainDays}`
        let hours = `${t.remainHours}`
        let minutes = `${t.remainMinutes}`
        let seconds = `${t.remainSeconds}`
        let elementClass = 'countDown'
        let textH1 = "WE'RE LAUCHING SOON"
        //createDiv('footer')
        if (t.remainTime <= 1) {
            clearInterval(timerUpdate)
            createH1(textH1,'title')
            time = finalMessage
            createSpan(time, 'messageEnd')
            createFooter()
        } else {
            createH1(textH1,'title')
            createDivDates()
            createDivClock(days,hours,minutes,seconds)
            createFooter()
        }
    }, 1000)
}

// export const getRemainTime = deadline =>{
//     let now = new Date(),
//     remainTime = (new Date(deadline) - now + 1000) / 1000,
//     remainSeconds = ('0' + Math.floor(remainTime % 60)).slice(-2),
//     remainMinutes = ('0' + Math.floor(remainTime /60 % 60)).slice(-2),
//     remainHours = ('0' + Math.floor(remainTime /3600 % 24)).slice(-2),
//     remainDays = Math.floor(remainTime /(3600 * 24)) 
//     return{
//         remainTime,
//         remainSeconds,
//         remainMinutes,
//         remainHours,
//         remainDays
//     }
// };

// console.log(getRemainTime('Jan 01 2023 16:18:05 GMT-0500'));

// export const countDown = (deadline, elem, finalMessage) => {
//     const el = document.getElementById(elem);

//     const timerUpdate = setInterval( () => {
//         let t = getRemainTime(deadline);
//         el.innerHTML =`${t.remainDays}d:${t.remainHours}h:${t.remainMinutes}m:${t.remainSeconds}s`
//         if (t.remainTime <= 1) {
//             clearInterval(timerUpdate)
//             el.innerHTML = finalMessage
//         }
//     }, 1000)
// }