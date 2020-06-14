function gerar() {
  botaoGerar.disabled = true
  
  nome = inputNome.value
  
  links = [
    'https://codepen.io/lucasdatiliocarderelli/pen/qBdGyqy',
    'https://codepen.io/lucasdatiliocarderelli/pen/WNQwZXq',
    'https://codepen.io/lucasdatiliocarderelli/pen/OJyNxma',
    'https://codepen.io/lucasdatiliocarderelli/pen/ExVKwoW',
    'https://codepen.io/lucasdatiliocarderelli/pen/NWGNaaV',
    
'https://codepen.io/lucasdatiliocarderelli/pen/VwvaMyX',
    
'https://codepen.io/lucasdatiliocarderelli/pen/WNQxOgG',

'https://codepen.io/lucasdatiliocarderelli/pen/GRpZVjj'
  ]
  
  titulos = [
    'Currículo',
    'App de Corrida',
    'App de Sorteio',
    'Ficha Médica',
    'Botão de Like',
    'Pokébola',
    'Pixel Art - Invader',
    'Exercicios de Desafio'
  ]
 
  contador = 0
  while(contador < 1000000) {
    contador = contador + 1
    htmlcertificado = emitirCertificado(nome)     
  }
  
  
  listalinksHTML = ""
  contadorlinks = 0
  while(contadorlinks < 8) {
    listalinksHTML = listalinksHTML + `
      <li>
        ${titulos[contadorlinks]}:
        <a target="_blank" href="${links[contadorlinks]}">
            ${links[contadorlinks].replace('https://', '')}
        </a>
      </li>
    `
    
    contadorlinks = contadorlinks + 1
  }
 
  
  document.body.innerHTML = htmlcertificado + `
    <ol>
      ${listalinksHTML}
    </ol>
  `
  
  print()
}