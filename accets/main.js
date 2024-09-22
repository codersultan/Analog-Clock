// get all elements

const sec = document.querySelector(".s");
const min = document.querySelector(".m");
const hour = document.querySelector(".h");
const sound = document.querySelector(".clock audio");

// clock rotetion logic base on time
function clockRools(time, current) {
  return (360 * current) / time; //it will return deg value

  // calculation: (360 deg * suppose cTime 50sec) / 60 = return 300deg
}

// setInterval function to rotate clock
setInterval(() => {
  // add sound effect
  sound.play();

  // get current time
  let time = new Date();
  let currentSec = time.getSeconds();
  let currentMin = time.getMinutes();
  let currentHour = time.getHours();

  // send transfrom rotation value to rotate clock
  sec.style.transform = `rotate(${clockRools(60, currentSec)}deg)`;
  min.style.transform = `rotate(${clockRools(60, currentMin)}deg)`;
  hour.style.transform = `rotate(${clockRools(12, currentHour)}deg)`;
}, 1000);
