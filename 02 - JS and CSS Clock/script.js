const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  if(seconds === 0 || minutes === 0 || hours === 0){
    secondHand.classList.add('nontransition');
    minHand.classList.add('nontransition');
    hourHand.classList.add('nontransition');
  } else {
    secondHand.classList.remove('nontransition');
    minHand.classList.remove('nontransition');
    hourHand.classList.remove('nontransition');
  }

  const secondsDegrees = ((seconds / 60) * 360) + 90;
  const minutesDegrees = ((minutes / 60) * 360) + 90;
  const hoursDegrees = ((hours / 12) * 360) + 90;
  
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  minHand.style.transform = `rotate(${minutesDegrees}deg)`;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

}

setInterval(setDate, 1000);