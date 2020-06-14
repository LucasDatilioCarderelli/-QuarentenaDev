// Aula04
// Formula da corrida: 2 + km * 1,40 + min * 0,26
percorrido = prompt('Quantos Km percorrido?')
tempomin = prompt('Quanto tempo levou?')
valor = 2 + (percorrido*1.40) + (tempomin*0.26)
document.write("<body style=background-color:Gray;>" + "<h2>Sua corrida deu R$: </h2>" + "<h3>" + valor.toFixed(2) + "</h3>" + "</body>")