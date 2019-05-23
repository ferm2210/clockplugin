function hour() {
  let cur_date = new Date();
  let hours = cur_date.getHours();
  let minutes = cur_date.getMinutes();
  let seconds = cur_date.getSeconds();

  hours=(hours<10)?`0${hours}`:hours;
  minutes=(minutes<10)?`0${minutes}`:minutes;
  seconds=(seconds<10)?`0${seconds}`:seconds;

  return `${hours}:${minutes}:${seconds}`
}

function printTime(id) {
   let time=hour()
   document.getElementById(id).innerHTML = time
}

printTime('clock1');
setInterval(()=>printTime('clock1'), 1000);

let seconds = (new Date()).getSeconds();
let timeout=(60-seconds)*1000;
if(seconds=0){
   printTime('clock2');
   setInterval(()=>printTime('clock2'), 60000);
}else{

   setTimeout(() => {
      printTime('clock2');
   }, timeout).then(()=>setInterval(()=>printTime('clock2'), 60000));
}
async function(){
   
}
