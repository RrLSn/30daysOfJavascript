bodyEl = document.querySelector('body');
bodyEl.style.width = '100vw';
bodyEl.style.fontfamily = 'segoe UI';

wrappyEl = document.querySelector('.wrapper');
wrappyEl.style.width = '50%';
wrappyEl.style.margin = 'auto';

h1El = document.querySelector('h1');
h1El.style.textAlign = 'center';

h2El = document.querySelector('h2');
h2El.style.textAlign = 'center';
h2El.style.textDecoration = 'underline';
h2El.style.fontWeight = '100';


spanEl = document.querySelector('span');
spanEl.style.fontSize = '4rem';

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const now = new Date();
const year = now.getFullYear();
const month = now.getMonth();
const day = now.getDate();
const hour = now.getHours();
let hr = hour < 10 ? `0${hour}`: `${hour}`
const minute = now.getMinutes();
let min = minute < 10 ? `0${minute}`: `${minute}`
const second = now.getSeconds();
let sec = second < 10 ? `0${second}`: `${second}`

const date = `${monthNames[month]} ${day}, ${year} ${hr}:${min}:${sec}`

wrappyEl.innerHTML = `<div>${date}</div>`;
// divEl = document.querySelector('div')
// divEl.style.background = 'red'
// divEl.style.textAlign = 'center'
// divEl.style.width = '25%'
// divEl.style.height = '3rem'