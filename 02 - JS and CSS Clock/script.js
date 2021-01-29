const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

//Função que será acionada a cada segundo através do setInterval
function setDate() {

  //Cria-se um objeto do tipo Date e usa-se seus métodos para conseguir os segundos, minutos e horas atuais
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  //Condicional que desativa a propriedade transition no CSS quando os valores chegarem em 0
  //para corrigir um bug da estilização
  if(seconds === 0 || minutes === 0 || hours === 0){
    secondHand.classList.add('nontransition');
    minHand.classList.add('nontransition');
    hourHand.classList.add('nontransition');
  } else {
    secondHand.classList.remove('nontransition');
    minHand.classList.remove('nontransition');
    hourHand.classList.remove('nontransition');
  }

  //Conversão do segundos, minutos e horas em graus para posicionar os ponteiros
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  const minutesDegrees = ((minutes / 60) * 360) + 90;
  const hoursDegrees = ((hours / 12) * 360) + 90;
  
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  minHand.style.transform = `rotate(${minutesDegrees}deg)`;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

//Ativa a função setDate a cada segundo
setInterval(setDate, 1000);