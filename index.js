let hour = () => 
   {  let h = new Date().getHours()
      h = (h < 10) ? "0" + h : h
      return h}

let minutes = () => 
   {  let m = new Date().getMinutes()
      m = (m < 10) ? "0" + m : m
      return m}

let seconds = () => 
   {  let s = new Date().getSeconds()
      s = (s < 10) ? "0" + s : s
      return s}

let timeSec = () => `${hour()}:${minutes()}:${seconds()}`

let timeMin = () => `${hour()}:${minutes()}`

let printSec = (id) => document.getElementById(id).innerText = timeSec();
let printMin = (id) => document.getElementById(id).innerText = timeMin();

printSec("MyClockDisplay")
setInterval(()=>printSec("MyClockDisplay"), 1000)

printMin("MyClockDisplay1")
if(seconds()=="00"){
   setInterval(()=>printMin("MyClockDisplay1"), 60000)
}else{
   setTimeout(() => {
      printMin("MyClockDisplay1")
      setInterval(()=>printMin("MyClockDisplay1"), 60000)
   }, ((60-parseInt(seconds()))*1000));
}


