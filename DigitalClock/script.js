const time = document.getElementsByClassName('clock')[0]

setInterval(function(){

    const date = new Date()
    time.innerHTML = date.toLocaleTimeString()

}, 1000)

