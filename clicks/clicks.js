const touch = document.querySelector("#touch")
let counterClicks = 0
let timerStart = 0
let timerFinish = 0
let timerClick = 0
let md = 0

let seconds = 0

function start() {
    counterClicks++
    if (counterClicks === 1) {
        timerStart = new Date()
        timerFinish = new Date()
        timerFinish.setSeconds(timerFinish.getSeconds() + 10)
       

        let inter = setInterval(() => {
            seconds++

            if (seconds === 10) {
                touch.removeAttribute('onclick')
                clearInterval(inter)
            }
            
            document.querySelector('#progress').style.width = (seconds * 10) + "%"

        }, 1000);

    } else {
        timerClick = new Date().getTime()
        md += (timerFinish.getTime() - timerClick)
        newPointer((timerFinish.getTime() - timerClick) / 100)
        touch.innerHTML = counterClicks
    }
}

function newPointer(percent) {
    let div = document.createElement("div")
    div.className = 'pointer'
    div.style.right = (percent - 1) + '%'
    div.style.bottom = counterClicks + '%'
    document.querySelector('#media').innerHTML = (counterClicks / 10).toFixed(2) + ' cps'
    document.querySelector("#graphic").append(div)
}