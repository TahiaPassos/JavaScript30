const inputs = document.querySelectorAll('.controls input');
img = document.querySelector('img');

//Função de callback que fará a atribuição dos valores aos inputs de acordo com o nome de cada um
function handleUpdate() {

  /*Sufixo que será adicionado aos valores que houver necessidade de conter uma unidade de medida, 
  nesse caso, o px*/
  const suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`, `${this.value}${suffix}`)
}

/*Iteração feita em cada input da classe 'controls' para adicionar dois eventos: 
change e mousemove */
inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

