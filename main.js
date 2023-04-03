let hh = document.getElementById("hour")
let mm = document.getElementById("min")
let ss = document.getElementById("sec")


setInterval(()=>{
let day = new Date()
    let hour = day.getHours() 
    let min = day.getMinutes()
    let sec = day.getSeconds()
    
    hh.style.transform = `rotate(${(hour)* 30 + min/2}deg)`

    mm.style.transform = `rotate(${(min)*6}deg)`
    ss.style.transform = `rotate(${(sec)*6}deg)`
})
