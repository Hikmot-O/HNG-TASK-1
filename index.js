"use strict";
const day = document.querySelector(".day");
const time = document.querySelector(".time");

const date = new Date().toUTCString();
const dayOfWeek = date.slice(0, 3) + "day";
const UTC_Time = Date.parse(date);

const getUTC_Time = () =>{
    return Date.parse(date);
}
getUTC_Time();


//Update text content
day.textContent = dayOfWeek;
time.textContent = UTC_Time;
