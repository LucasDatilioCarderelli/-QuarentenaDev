//exe01:
//Abaixo de 17=Muito abaixo do peso
//Entre 17 e 18,49=Abaixo do peso
//Entre 18,5 e 24,99=Peso normal
//Entre 25 e 29,99=Acima do peso
//Entre 30 e 34,99=Obesidade I
//Entre 35 e 39,99=Obesidade II
peso = prompt('peso')
altura = prompt('altura')
imc=(peso/(altura**2))
alert(imc.toFixed(2))

//exe02:
gui=30
ca=20
ma=15
pa=10
me=(gui+ca+ma+pa)/4
alert(me)

//exe03
nascimento=prompt('nascimento')
ano=2020-nascimento
alert(ano)