// Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
// YYY-MM-DD HH:mm eg. 20120-01-02 07:05

let now = new Date()
let Year = now.getFullYear()
let month = now.getMonth()
let date = now.getDate()
let hr = now.getHours()
let min = now.getMinutes()
let sec = now.getSeconds()

let monthlength = month.toString().length;
month = monthlength < 2 ? `0${month}` : month;

let datelength = date.toString().length;
date = datelength < 2 ? `0${date}` : date;

let hrlength = hr.toString().length;
hr = hrlength <2 ? `0${hr}` : hr;

let minlength = min.toString().length;
min = minlength < 2 ? `0${min}` : min;

let seclength = sec.toString().length;
sec = seclength < 2 ? `0${sec}` : sec;

console.log(`${Year}-${month}-${date} ${hr}:${min}:${sec}`)
