import util from "./util"

let counterValue = 100000000

function init() {
    startCounter()
}

function incrementCounter() {
    let counter = document.getElementById('counterValue')
    counter.innerHTML = counterValue
    counterValue = util.dec(counterValue)
}

function startCounter() {
    setInterval(incrementCounter, 100)
}

document.addEventListener('DOMContentLoaded', function(){
    init()
})
