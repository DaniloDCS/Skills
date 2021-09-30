const timer = document.querySelector("#timer")
const display = document.querySelector("#display")
const quantity = document.querySelector("#quantity")
const frequently = document.querySelector("#frequently")
const apmResult = document.querySelector("#apmResult")
const inputAleatory = document.querySelector("#aleatory")

let maxActions = 0
let minutes = 0
let seconds = 0
let allSeconds = 0
let milliseconds = 0
let actionsCounter = 0
let actuallyBall = 0
let ballsGreater = 0
let aleatory = false
let stopped = false

function start() {
    document.querySelector("#start").style.display = "none"
    maxActions = parseInt(quantity.value, 10)
    actionsCounter = maxActions
    actuallyBall = actionsCounter
    ballsGreater = parseInt(frequently.value, 10)
    aleatory = inputAleatory.checked

    for (let counter = 0; counter < ballsGreater; counter++) {
        greaterRandomPosition(actuallyBall - counter)
    }
}

function greaterRandomPosition(text) {
    let circle = document.createElement('div')
    circle.setAttribute('onclick', `mark(${text}, this)`)

    circle.className = 'circle'
    circle.innerText = text
    circle.style.top = Math.floor(Math.random() * (90 - 10)) + '%'
    circle.style.left = Math.floor(Math.random() * (90 - 10)) + '%'

    display.append(circle)
}

function mark(ball, element) {
    if (ball === maxActions) startTimer()
    if (ball === actuallyBall && !stopped) {

        actionsCounter--
        actuallyBall--

        if (aleatory) {

            display.innerHTML = ""

            if (ballsGreater > actuallyBall) ballsGreater = actuallyBall

            for (let counter = 0; counter < ballsGreater; counter++) {
                greaterRandomPosition(actuallyBall - counter)
            }

        } else {
            if (actuallyBall >= ballsGreater) greaterRandomPosition(actuallyBall - ballsGreater + 1)
        }

        if (ball === 1) {
            finish()
            stop()
        }

        element.remove()
    }
}

function startTimer() {
    interval = setInterval(() => {
        timer.innerHTML = (minutes > 0 ? (minutes < 10 ? '0' + minutes + ':' : minutes) : '') + (seconds < 10 ? '0' + seconds : seconds) + ':' + (milliseconds < 10 ? '0' + milliseconds : milliseconds)

        if (milliseconds === 99) {
            allSeconds++
            seconds++
            milliseconds = 0
        }

        if (seconds === 59) {
            seconds = 0
            minutes++
        }

        milliseconds++

    }, 10)
}

function stop() {
    clearInterval(interval)
    stopped = true
}

function finish() {
    clearInterval(interval)
    document.querySelector("#finish").style.display = "flex"
    let apm = (maxActions / (allSeconds / 60)).toFixed(2)
    apmResult.innerText = apm + ' APMs | ' + allSeconds + 's '
}

function restart() {
    clearInterval(interval)
    stopped = false
    minutes = 0
    seconds = 0
    allSeconds = 0
    milliseconds = 0
    display.innerHTML = ""
    timer.innerHTML = "00:00"
    document.querySelector("#start").style.display = "flex"
    document.querySelector("#finish").style.display = "none"
}

function rangeViewer(id, value) {
    document.querySelector("#" + id + "Range").innerText = value
}