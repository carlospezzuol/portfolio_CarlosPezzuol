document.addEventListener("DOMContentLoaded", function() {
    var palavras = ["DESENVOLVEDOR WEB_", "HTML_", "CSS_", "JAVASCRIPT_", "REACT_"];
    var index = 0;
    var elemento = document.getElementById("textoDinamico");
  
    function alterarPalavra() {
      var palavraAtual = palavras[index];
      var letras = palavraAtual.split("");
      var contador = 0;
  
      var intervalo = setInterval(function() {
        elemento.style.color = 'green'
        if (contador < letras.length) {
          elemento.innerHTML += letras[contador];
          contador++;
        } else {
          clearInterval(intervalo);
          setTimeout(function() {
            apagarPalavra();
          }, 500); // Aguarda 1 segundo antes de começar a apagar
        }
      }, 50); // Adiciona cada letra a cada 100 milissegundos
    }
  
    function apagarPalavra() {
      var palavraAtual = elemento.innerHTML;
      var letras = palavraAtual.split("");
      var contador = letras.length - 1;
  
      var intervalo = setInterval(function() {
        if (contador >= 0) {
          letras.pop();
          elemento.innerHTML = letras.join("");
          contador--;
        } else {
          clearInterval(intervalo);
          index = (index + 1) % palavras.length;
          setTimeout(function() {
            alterarPalavra();
          }, 500); 
        }
      }, 100); 
    }
  
    alterarPalavra(); 
  });


  let count = 1;
  document.getElementById("radio1").checked = true;
  
  setInterval(function () {
      nextImage();
  }, 2000);
  
  function nextImage() {
      count++;
      if (count > 6) {
          count = 1;
      }
      document.getElementById("radio" + count).checked = true;
  }
  