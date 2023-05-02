let milliseconds = 0
let seconds = 0
let minutes = 0


let digits = document.getElementById('digits')

let startButton = document.getElementById('start-btn')

let interval;

function start() { 

    startButton.disabled = true
    
    
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
    startButton.disabled = false

}

function reset() {
    stop()
    milliseconds = 0
    seconds = 0
    minutes = 0
    digits.innerHTML = "00:00:00"
}


function lap()  {
    const node = document.createElement("li");
    const textnode = document.createTextNode("Water");
    node.appendChild(textnode);
    document.getElementById("myList").appendChild(node);

}