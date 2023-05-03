let milliseconds = 0
let seconds = 0
let minutes = 0


let digits = document.getElementById('digits')

let startButton = document.getElementById('start-btn')
let lapButton = document.getElementById("lbut")

let laplist = document.getElementById('Lap')

lapButton.disabled = true

let interval;

function start() { 

    startButton.disabled = true
    lapButton.disabled = false
    
    
    interval = setInterval (function() {
        milliseconds = milliseconds + 10
        if (milliseconds >= 1000) {
            seconds = seconds + 1
            milliseconds = 0
        }
        if (seconds >= 60) {
            minutes = minutes + 1
            seconds = 0

        }

        digits.innerHTML = minutes + ':' + String(seconds).padStart(2, '0') + ':' + milliseconds/10

}, 10)
}

function stop () {
    clearInterval(interval)
    lapButton.disabled = true
    milliseconds = 0
    seconds = 0
    minutes = 0
    digits.innerHTML = "00:00:00"
    laplist.innerHTML = ""


}

function reset() {
    lapButton.disabled = true
    startButton.disabled = false
    stop()
    milliseconds = 0
    seconds = 0
    minutes = 0
    digits.innerHTML = "00:00:00"
    laps.innerHTML = ""
}


function lap()  {
     let newListItem = document.createElement("li")
    newListItem.textContent =  digits.innerHTML = minutes + ':' + String(seconds).padStart(2, '0') + ':' + milliseconds/10
    laplist.appendChild(newListItem)



}