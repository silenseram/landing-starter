import util from "./util"

let counterValue = 1

function init() {
    startCounter()
}

function incrementCounter() {
    let counter = document.getElementById('counterValue')
    counter.innerHTML = counterValue
    counterValue = util.inc(counterValue)
}

function startCounter() {
    setInterval(incrementCounter, 100)
}

document.addEventListener('DOMContentLoaded', function(){
    init()
})
