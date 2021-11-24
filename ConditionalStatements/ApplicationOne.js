let getPromtName = prompt("Please enter the your name: ")
let userName =document.getElementById("name")
userName.innerHTML = `Hello ${getPromtName} Welcome`



function showTime() {

    const myClock = document.querySelector("#myClock");
    const date = new Date();
    let sec = date.getSeconds();
    let min = date.getMinutes();
    let hour = date.getHours();

    sec = sec < 10 ? "0" + sec : sec;
    min = min < 10 ? "0" + min : min;
    hour = hour < 10 ? "0" + hour : hour;
  
    myClock.innerHTML = hour + ":" + min + ":" + sec;
    setTimeout(showTime, 1000);
  }
  
showTime();

const d = new Date();
const days = ["Sunday", "Monday", "Tuesday", "wednesday", "Thursday", "Friday", "Saturday"];
document.querySelector("#day").innerHTML = days[d.getDay()];
