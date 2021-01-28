# Drum Kit




Neste exercício é feita uma bateria virtual com a utilização de **HTML,CSS e JavaScript**.  
Ao pressionar determinadas teclas um som é emitido para cada uma delas.

### Código completo do arquivo de JavaScript:
    
    function playSound(event) {
      const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`); 
      const key = document.querySelector(`.key[data-key="${event.keyCode}"]`); 

      if(!audio) return;
      audio.currentTime = 0;
      audio.play();
      key.classList.add('playing');
    }

    function removeTransition(event) {
      if (event.propertyName !== "transform") return;
      this.classList.remove('playing');
    }

    const keys = document.querySelectorAll('.key');
    keys.forEach(key => key.addEventListener('transitionend', removeTransition));
    window.addEventListener('keydown', playSound);
    

### Função que fará o som ser emitido: 
    
    /*Função de Callback - será acionada quando ocorrer determinado evento 
    (nesse caso, o "keydown", ou seja, a tecla sendo pressioanda*/
    
    function playSound(event) {     
      //seleciona a tag audio que tenha como propriedade um data-key com o valor igual ao keyCode da tecla pressionada  
      const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`); 
      
      //seleciona o elemento com a classe "key" que tenha como propriedade um data-key com o valor igual ao keyCode da tecla pressionada    
      const key = document.querySelector(`.key[data-key="${event.keyCode}"]`); 
      
      //caso alguma tecla diferente das que possuem som forem pressionadas, a função irá parar.
      if(!audio) return; 
      
      //cada som possui seu próprio tempo, de forma que se não for colocado para 0, será necessário esperar o tempo transcorrer até que ele possa ser emitido novamente, 
      //ainda que se pressione a tecla várias vezes.
      audio.currentTime = 0;
      
      //método do Audio Object que faz com o que o audio seja reproduzido. 
      audio.play(); 
      
      // Adiciona a classe "playing" no elemento com a classe "key" para ativar a estilização definida no css para a classe playing.
      key.classList.add('playing'); 
    }

### Função que irá remover a classe "playing":  

     function removeTransition(event) {
     //Verifica se a transição que foi finalizada é equivalente a propriedade transform do css. Caso não seja, a função é finalizada.
      if (event.propertyName !== "transform") return; 
      
      //Remove a classe "playing" para retornar à estilização inicial
      this.classList.remove('playing'); 
      
    }
    

### Adicionando os Event Listeners:

    //Seleciona todos os elementos com a classe "key".
    const keys = document.querySelectorAll('.key');
    
    //Faz uma iteração para cada item adicionando um eventListener (ficará "escutando" aquele elemento para saber se o evento escolhido ('transitionend') ocorreu ou não. 
    //Se ocorrer acionará a função).
    keys.forEach(key => key.addEventListener('transitionend', removeTransition));
    
    //Adiciona um eventListener no objeto window para saber se uma tecla foi pressionada. Caso as teclas pré-determinadas forem pressioandas, a função será ativada.
    window.addEventListener('keydown', playSound);  
    
  
  
Caso haja interesse, segue [meu LinkedIn](https://www.linkedin.com/in/tahiana-passos/)
