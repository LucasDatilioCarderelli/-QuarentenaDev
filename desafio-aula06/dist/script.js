//Exe01
qualMes = prompt("Digite um número para saber qual é o mês")

if(qualMes==1){meses.innerHTML="Janeiro"}
if(qualMes==2){meses.innerHTML="Fevereiro"}
if(qualMes==3){meses.innerHTML="Março"}
if(qualMes==4){meses.innerHTML="Abril"}
if(qualMes==5){meses.innerHTML="Maio"}
if(qualMes==6){meses.innerHTML="Junho"}
if(qualMes==7){meses.innerHTML="Julho"}
if(qualMes==8){meses.innerHTML="Agosto"}
if(qualMes==9){meses.innerHTML="Setembro"}
if(qualMes==10){meses.innerHTML="Outubro"}
if(qualMes==11){meses.innerHTML="Novembro"}
if(qualMes==12){meses.innerHTML="Dezembro"}

//Exe02
altura = prompt('Qual é a sua Altura')
peso = prompt('Qual é o seu Peso')
imc = (peso/(altura**2))
document.write(`<h2>O seu IMC é: ${imc.toFixed(2)}</h2>`)

if(imc <=17){
  document.write("Seu peso está abaixo do normal.")}
if(imc >=18 && imc < 24.99){
  document.write("Seu peso está normal")}
if(imc >=25 && imc < 29.99){
  document.write("Seu peso está acima do normal.")}
if(imc >=30 && imc < 34.99){
  document.write("Você está com obesidade I")}
if(imc >=35){
  document.write("Você está com obesidade II")}