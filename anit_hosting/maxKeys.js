let keys = {}

document.addEventListener('keydown', (e) => {
    e.preventDefault()
    keys[e.code] = true
    up()
})

document.addEventListener('keyup', (e) => {
    e.preventDefault()
    keys[e.code] = false
    up()
})

function up(){
    Object.keys(keys).forEach(key => {
        if (keys[key]) {
            document.querySelector("#" + key).classList.add('active')
        } else {
            document.querySelector("#" + key).classList.remove('active')
        }
    });
}