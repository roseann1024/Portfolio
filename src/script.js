let now = new Date();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

let day = days[now.getDay()];
let minutes = now.getMinutes();
let hours = now.getHours();
let month = months[now.getMonth()];
let year = now.getFullYear();
let dates = now.getDate();

if (minutes < 10) {
  minutes = `0${minutes}`;
}

if (hours < 10) {
  hours = `0${hours}`;
}

let formattedDate = document.querySelector("#date-today");
formattedDate.innerHTML = `${hours}:${minutes}, ${day} | ${month} ${dates}, ${year}`;
