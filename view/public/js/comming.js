var count = new Date("aug 1,2019 00:00:00").getTime()
var x = setInterval( () => {
    var now = new Date().getTime()
    var d = count - now
    var days = Math.floor(d/(1000*60*60*24))
    var hours = Math.floor((d%(1000*60*60*24))/(1000*60*60))
    var minutes = Math.floor((d% (1000*60*60))/(1000*60))
    var seconds = Math.floor((d%(1000*60))/1000)


    document.getElementById("day").innerHTML = days ;
    document.getElementById("hour").innerHTML = hours;
    document.getElementById("minute").innerHTML = minutes;
    document.getElementById("second").innerHTML = seconds;  

    if(d <= 0){
        clearInterval(x);
    }

}, 1000)