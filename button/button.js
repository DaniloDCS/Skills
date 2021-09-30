const button = document.querySelector("#btn")
const times = document.querySelector("#times")
const msg = document.querySelector("#msg")
const table = document.querySelector("#table")

button.addEventListener('click', event => {
    click()
})

msg.addEventListener('click', () => {
    msg.style.display = 'none'
    start()
})

let timeStarts = 0
let counter = 0
let md = 0

function random() {
    return Math.floor(Math.random() * (6000 - 3000)) + 3000
}

function register(test, time) {
    let tr = document.createElement('tr')
    let tdTest = document.createElement('td')
    let tdTime = document.createElement('td')

    tdTest.innerHTML = test
    tdTime.innerHTML = time

    tr.append(tdTest, tdTime)
    table.append(tr)
}

function click() {
    let ms = new Date().getTime() - timeStarts.getTime()
    md += ms
    register(counter, ms + ' ms')
    times.innerHTML = ms + " ms"
    button.className = "bg-red"
    button.setAttribute('disabled', 'disabled')
    start()
}

function start() {
    setTimeout(() => {
        if (counter === 5) {
            button.className = "bg-blue"
            button.setAttribute('disabled', 'disabled')
            register("MD", md / 5 + 'ms')
        } else {
            setTimeout(() => {
                button.className = "bg-green"
                timeStarts = new Date()
                button.removeAttribute('disabled')
            }, random())
            counter++
        }
    }, 3000)
}