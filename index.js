//Desafio Classificador de Nível de Herói
let SuperMario = 999
let Batman = 1015
let Aquaman = 2001
let LanternaVerde = 6680
let SuperCao = 8000
let HomemAranha = 8001
let Thor = 9999
let CapitaoAmerica = 15000

//Apresntação dos Heróis e sua respectiva Experiência XP acumulada
console.log("Lista de Heróis com os respectivos XP acumulado")
console.log ("Super Mário", SuperMario, "XP")
console.log("Aquaman", Aquaman, "XP")
console.log("Super Cão", SuperCao, "XP")
console.log ("Lanterna Verde", LanternaVerde,  "XP")
console.log ("Batman", Batman,  "XP")
console.log ("Homem Aranha", HomemAranha,  "XP")
console.log ("Thor", Thor,  "XP")
console.log ("Capitão América", CapitaoAmerica,  "XP")

//Referente a alteração dos Valores do Herói Super Mário
// Vale a pena ressaltar que o Valor de 1000XP não se enquadra em nenhuma categoria

let XpMinimoFerro = 0
let XpMaximoFerro = 999
let ResultadoFerro = ((SuperMario >=0) && (SuperMario < 1000))
if (ResultadoFerro){
    console.log ("O Heroi de Nome Super Mário está no Nível Ferro")
}

if (SuperMario === 1000){
    console.log("")
}

let XpMinimoBronze = 1001
let XpMaximoBronze = 2000
let ResultadoBronze = ((SuperMario <= XpMaximoBronze) && (SuperMario >= XpMinimoBronze))
if (ResultadoBronze){
      console.log ("O Heroi de Nome Super Mário está no Nível Bronze")
}

let XpMinimoPrata = 2001
let XpMaximoPrata = 5000
let ResultadoPrata = ((SuperMario <= XpMaximoPrata) && (SuperMario >= XpMinimoPrata))
if (ResultadoPrata){
      console.log ("O Heroi de Nome Super Mário está no Nível Prata")
}

let XpMinimo = 5001
let XpMaximo = 6000
let Resultado = ((SuperMario <= XpMaximo) && (SuperMario >= XpMinimo))
if (Resultado){
      console.log ("")
}

let XpMinimoOuro = 6001
let XpMaximoOuro = 7000
let ResultadoOuro = ((SuperMario <= XpMaximoOuro) && (SuperMario >= XpMinimoOuro))
if (ResultadoOuro){
      console.log ("O Heroi de Nome Super Mário está no Nível Ouro")
}

let XpMinimoPlatina = 7001
let XpMaximoPlatina = 8000
let ResultadoPlatina = ((SuperMario <= XpMaximoPlatina) && (SuperMario >= XpMinimoPlatina))
if (ResultadoPlatina){
      console.log ("O Heroi de Nome Super Mário está no Nível Platina")
}

let XpMinimoAscendente = 8001
let XpMaximoAscendente = 9000
let ResultadoAscendente = ((SuperMario <= XpMaximoAscendente) && (SuperMario >= XpMinimoAscendente))
if (ResultadoAscendente){
      console.log ("O Heroi de Nome Super Mário está no Nível Ascendente")
}

let XpMinimoImortal = 9001
let XpMaximoImortal = 10000
let ResultadoImortal = ((SuperMario <= XpMaximoImortal) && (SuperMario >= XpMinimoImortal))
if (ResultadoImortal){
      console.log ("O Heroi de Nome Super Mário está no Nível Imortal")
}

let XpRadiante = 10001
let ResultadoRadiante = (SuperMario >= XpRadiante) 
if (ResultadoRadiante){
      console.log ("O Heroi de Nome Super Mário está no Nível Radiante")
}

//Batman

let XpMinimoPrata1 = 2001
let XpMaximoPrata1 = 5000
let ResultadoPrata1 = ((Batman <= XpMaximoPrata1) && (Batman >= XpMinimoPrata1))
if (ResultadoPrata1){
      console.log ("O Heroi de Nome Batman está no Nível Prata")
}

if (Batman === 1000){
    console.log("")
}

let XpMinimoBronze1 = 1001
let XpMaximoBronze1 = 2000
let ResultadoBronze1= ((Batman <= XpMaximoBronze1) && (Batman >= XpMinimoBronze1))
if (ResultadoBronze1){
      console.log ("O Heroi de Nome Batman está no Nível Bronze")
}


let XpMinimo1 = 5001
let XpMaximo1 = 6000
let Resultado1 = ((Batman <= XpMaximo1) && (Batman >= XpMinimo1))
if (Resultado1){
      console.log ("")
}

let XpMinimoOuro1 = 6001
let XpMaximoOuro1 = 7000
let ResultadoOuro1 = ((Batman <= XpMaximoOuro1) && (Batman >= XpMinimoOuro1))
if (ResultadoOuro1){
      console.log ("O Heroi de Nome Batman está no Nível Ouro")
}

let XpMinimoPlatina1 = 7001
let XpMaximoPlatina1 = 8000
let ResultadoPlatina1 = ((Batman <= XpMaximoPlatina1) && (Batman >= XpMinimoPlatina1))
if (ResultadoPlatina1){
      console.log ("O Heroi de Nome Batman está no Nível Platina")
}

let XpMinimoAscendente1 = 8001
let XpMaximoAscendente1 = 9000
let ResultadoAscendente1 = ((Batman <= XpMaximoAscendente1) && (Batman >= XpMinimoAscendente1))
if (ResultadoAscendente1){
      console.log ("O Heroi de Nome Batman está no Nível Ascendente")
}

let XpMinimoImortal1 = 9001
let XpMaximoImortal1 = 10000
let ResultadoImortal1 = ((Batman <= XpMaximoImortal1) && (Batman >= XpMinimoImortal1))
if (ResultadoImortal1){
      console.log ("O Heroi de Nome Batman está no Nível Imortal")
}

let XpRadiante1 = 10001
let ResultadoRadiante1 = (Batman >= XpRadiante1) 
if (ResultadoRadiante1){
      console.log ("O Heroi de Nome Batman está no Nível Radiante")
}

//Aquaman

let XpMinimoPrata2 = 2001
let XpMaximoPrata2 = 5000
let ResultadoPrata2 = ((Aquaman <= XpMaximoPrata2) && (Aquaman >= XpMinimoPrata2))
if (ResultadoPrata2){
      console.log ("O Heroi de Nome Aquaman está no Nível Prata")
}

if (Aquaman === 1000){
    console.log("")
}

let XpMinimoBronze2 = 1001
let XpMaximoBronze2 = 2000
let ResultadoBronze2= ((Aquaman <= XpMaximoBronze2) && (Aquaman >= XpMinimoBronze2))
if (ResultadoBronze2){
      console.log ("O Heroi de Nome Aquaman está no Nível Bronze")
}


let XpMinimo2 = 5001
let XpMaximo2 = 6000
let Resultado2 = ((Aquaman <= XpMaximo2) && (Aquaman >= XpMinimo2))
if (Resultado2){
      console.log ("")
}

let XpMinimoOuro2 = 6001
let XpMaximoOuro2 = 7000
let ResultadoOuro2 = ((Aquaman <= XpMaximoOuro2) && (Aquaman >= XpMinimoOuro2))
if (ResultadoOuro2){
      console.log ("O Heroi de Nome Aquaman está no Nível Ouro")
}

let XpMinimoPlatina2 = 7001
let XpMaximoPlatina2 = 8000
let ResultadoPlatina2 = ((Aquaman <= XpMaximoPlatina2) && (Aquaman >= XpMinimoPlatina2))
if (ResultadoPlatina2){
      console.log ("O Heroi de Nome Aquaman está no Nível Platina")
}

let XpMinimoAscendente2 = 8001
let XpMaximoAscendente2 = 9000
let ResultadoAscendente2 = ((Aquaman <= XpMaximoAscendente2) && (Aquaman >= XpMinimoAscendente2))
if (ResultadoAscendente2){
      console.log ("O Heroi de Nome Aquaman está no Nível Ascendente")
}

let XpMinimoImortal2 = 9001
let XpMaximoImortal2 = 10000
let ResultadoImortal2 = ((Aquaman <= XpMaximoImortal2) && (Aquaman >= XpMinimoImortal2))
if (ResultadoImortal2){
      console.log ("O Heroi de Nome Aquaman está no Nível Imortal")
}

let XpRadiante2 = 10001
let ResultadoRadiante2 = (Batman >= XpRadiante2) 
if (ResultadoRadiante2){
      console.log ("O Heroi de Nome Aquaman está no Nível Radiante")
}

//Lanterna Verde


let XpMinimoPrata3 = 2001
let XpMaximoPrata3 = 5000
let ResultadoPrata3 = ((LanternaVerde <= XpMaximoPrata3) && (LanternaVerde >= XpMinimoPrata3))
if (ResultadoPrata3){
      console.log ("O Heroi de Lanterna Verde está no Nível Prata")
}

if (LanternaVerde === 1000){
    console.log("")
}

let XpMinimoBronze3 = 1001
let XpMaximoBronze3 = 2000
let ResultadoBronze3= ((LanternaVerde <= XpMaximoBronze3) && (LanternaVerde >= XpMinimoBronze3))
if (ResultadoBronze3){
      console.log ("O Heroi de Nome Lanterna Verde está no Nível Bronze")
}


let XpMinimo3 = 5001
let XpMaximo3 = 6000
let Resultado3 = ((LanternaVerde <= XpMaximo3) && (LanternaVerde >= XpMinimo3))
if (Resultado3){
      console.log ("")
}

let XpMinimoOuro3 = 6001
let XpMaximoOuro3 = 7000
let ResultadoOuro3 = ((LanternaVerde <= XpMaximoOuro3) && (LanternaVerde >= XpMinimoOuro3))
if (ResultadoOuro3){
      console.log ("O Heroi de Nome Lanterna Verde está no Nível Ouro")
}

let XpMinimoPlatina3 = 7001
let XpMaximoPlatina3 = 8000
let ResultadoPlatina3 = ((LanternaVerde <= XpMaximoPlatina3) && (LanternaVerde >= XpMinimoPlatina3))
if (ResultadoPlatina3){
      console.log ("O Heroi de Nome Lanterna Verde está no Nível Platina")
}

let XpMinimoAscendente3 = 8001
let XpMaximoAscendente3 = 9000
let ResultadoAscendente3 = ((LanternaVerde <= XpMaximoAscendente3) && (LanternaVerde >= XpMinimoAscendente3))
if (ResultadoAscendente3){
      console.log ("O Heroi de Nome Lanterna Verde está no Nível Ascendente")
}

let XpMinimoImortal3 = 9001
let XpMaximoImortal3 = 10000
let ResultadoImortal3 = ((LanternaVerde <= XpMaximoImortal3) && (LanternaVerde >= XpMinimoImortal3))
if (ResultadoImortal3){
      console.log ("O Heroi de Nome Lanterna Verde está no Nível Imortal")
}

let XpRadiante3 = 10001
let ResultadoRadiante3 = (LanternaVerde >= XpRadiante3) 
if (ResultadoRadiante3){
      console.log ("O Heroi de Nome Lanterna Verde está no Nível Radiante")
}

//Super Cão


let XpMinimoPrata4 = 2001
let XpMaximoPrata4 = 5000
let ResultadoPrata4 = ((SuperCao <= XpMaximoPrata4) && (SuperCao >= XpMinimoPrata4))
if (ResultadoPrata4){
      console.log ("O Heroi de Nome Super Cão está no Nível Prata")
}

if (SuperCao === 1000){
    console.log("")
}

let XpMinimoBronze4 = 1001
let XpMaximoBronze4 = 2000
let ResultadoBronze4= ((SuperCao <= XpMaximoBronze4) && (SuperCao >= XpMinimoBronze4))
if (ResultadoBronze4){
      console.log ("O Heroi de Nome Super Cão está no Nível Bronze")
}


let XpMinimo4 = 5001
let XpMaximo4 = 6000
let Resultado4 = ((SuperCao<= XpMaximo4) && (SuperCao >= XpMinimo4))
if (Resultado4){
      console.log ("")
}

let XpMinimoOuro4 = 6001
let XpMaximoOuro4 = 7000
let ResultadoOuro4 = ((SuperCao <= XpMaximoOuro4) && (SuperCao >= XpMinimoOuro4))
if (ResultadoOuro4){
      console.log ("O Heroi de Nome Super Cão está no Nível Ouro")
}

let XpMinimoPlatina4 = 7001
let XpMaximoPlatina4 = 8000
let ResultadoPlatina4 = ((SuperCao <= XpMaximoPlatina4) && (SuperCao >= XpMinimoPlatina4))
if (ResultadoPlatina4){
      console.log ("O Heroi de Nome Super Cão está no Nível Platina")
}

let XpMinimoAscendente4 = 8001
let XpMaximoAscendente4 = 9000
let ResultadoAscendente4 = ((SuperCao <= XpMaximoAscendente4) && (SuperCao >= XpMinimoAscendente4))
if (ResultadoAscendente4){
      console.log ("O Heroi de Nome Super Cão está no Nível Ascendente")
}

let XpMinimoImortal4 = 9001
let XpMaximoImortal4 = 10000
let ResultadoImortal4 = ((SuperCao <= XpMaximoImortal4) && (SuperCao >= XpMinimoImortal4))
if (ResultadoImortal4){
      console.log ("O Heroi de Nome Super Cão está no Nível Imortal")
}

let XpRadiante4 = 10001
let ResultadoRadiante4 = (SuperCao >= XpRadiante4) 
if (ResultadoRadiante4){
      console.log ("O Heroi de Nome Super Cão está no Nível Radiante")
}

//Homem Aranha


let XpMinimoPrata5 = 2001
let XpMaximoPrata5 = 5000
let ResultadoPrata5 = ((HomemAranha <= XpMaximoPrata5) && (HomemAranha >= XpMinimoPrata5))
if (ResultadoPrata5){
      console.log ("O Heroi de Nome Homem Aranha está no Nível Prata")
}

if (HomemAranha === 1000){
    console.log("")
}

let XpMinimoBronze5 = 1001
let XpMaximoBronze5 = 2000
let ResultadoBronze5 = ((HomemAranha <= XpMaximoBronze5) && (HomemAranha >= XpMinimoBronze5))
if (ResultadoBronze5){
      console.log ("O Heroi de Nome Homem Aranha está no Nível Bronze")
}


let XpMinimo5 = 5001
let XpMaximo5 = 6000
let Resultado5 = ((HomemAranha <= XpMaximo5) && (HomemAranha >= XpMinimo5))
if (Resultado5){
      console.log ("")
}

let XpMinimoOuro5 = 6001
let XpMaximoOuro5 = 7000
let ResultadoOuro5 = ((HomemAranha <= XpMaximoOuro5) && (HomemAranha >= XpMinimoOuro5))
if (ResultadoOuro5){
      console.log ("O Heroi de Nome Homem Aranha está no Nível Ouro")
}

let XpMinimoPlatina5 = 7001
let XpMaximoPlatina5 = 8000
let ResultadoPlatina5 = ((HomemAranha <= XpMaximoPlatina5) && (HomemAranha >= XpMinimoPlatina5))
if (ResultadoPlatina5){
      console.log ("O Heroi de Nome Homem Aranha está no Nível Platina")
}

let XpMinimoAscendente5 = 8001
let XpMaximoAscendente5 = 9000
let ResultadoAscendente5 = ((HomemAranha <= XpMaximoAscendente5) && (HomemAranha >= XpMinimoAscendente5))
if (ResultadoAscendente5){
      console.log ("O Heroi de Nome Homem Aranha está no Nível Ascendente")
}

let XpMinimoImortal5 = 9001
let XpMaximoImortal5 = 10000
let ResultadoImortal5 = ((HomemAranha <= XpMaximoImortal5) && (HomemAranha >= XpMinimoImortal5))
if (ResultadoImortal5){
      console.log ("O Heroi de Nome Homem Aranha está no Nível Imortal")
}

let XpRadiante5 = 10001
let ResultadoRadiante5 = (HomemAranha >= XpRadiante5) 
if (ResultadoRadiante5){
      console.log ("O Heroi de Nome Homem Aranha está no Nível Radiante")
}

//Thor


let XpMinimoPrata6 = 2001
let XpMaximoPrata6 = 5000
let ResultadoPrata6 = ((Thor <= XpMaximoPrata6) && (Thor >= XpMinimoPrata6))
if (ResultadoPrata6){
      console.log ("O Heroi de Nome Thor está no Nível Prata")
}

if (Thor === 1000){
    console.log("")
}

let XpMinimoBronze6 = 1001
let XpMaximoBronze6 = 2000
let ResultadoBronze6= ((Thor <= XpMaximoBronze6) && (Thor >= XpMinimoBronze6))
if (ResultadoBronze6){
      console.log ("O Heroi de Nome Thor está no Nível Bronze")
}


let XpMinimo6 = 5001
let XpMaximo6 = 6000
let Resultado6 = ((Thor <= XpMaximo6) && (Thor >= XpMinimo6))
if (Resultado6){
      console.log ("")
}

let XpMinimoOuro6 = 6001
let XpMaximoOuro6 = 7000
let ResultadoOuro6 = ((Thor <= XpMaximoOuro6) && (Thor >= XpMinimoOuro6))
if (ResultadoOuro6){
      console.log ("O Heroi de Nome Thor está no Nível Ouro")
}

let XpMinimoPlatina6 = 7001
let XpMaximoPlatina6 = 8000
let ResultadoPlatina6 = ((Thor <= XpMaximoPlatina6) && (Thor>= XpMinimoPlatina6))
if (ResultadoPlatina6){
      console.log ("O Heroi de Nome Thor está no Nível Platina")
}

let XpMinimoAscendente6 = 8001
let XpMaximoAscendente6 = 9000
let ResultadoAscendente6 = ((Thor <= XpMaximoAscendente6) && (Thor >= XpMinimoAscendente6))
if (ResultadoAscendente6){
      console.log ("O Heroi de Nome Thor está no Nível Ascendente")
}

let XpMinimoImortal6 = 9001
let XpMaximoImortal6 = 10000
let ResultadoImortal6 = ((Thor <= XpMaximoImortal6) && (Thor >= XpMinimoImortal6))
if (ResultadoImortal6){
      console.log ("O Heroi de Nome Thor está no Nível Imortal")
}

let XpRadiante6 = 10001
let ResultadoRadiante6 = (Thor >= XpRadiante6) 
if (ResultadoRadiante6){
      console.log ("O Heroi de Nome Thor está no Nível Radiante")
}

//Capitão América


let XpMinimoPrata7 = 2001
let XpMaximoPrata7 = 5000
let ResultadoPrata7 = ((CapitaoAmerica <= XpMaximoPrata7) && (CapitaoAmerica >= XpMinimoPrata7))
if (ResultadoPrata7){
      console.log ("O Heroi de Nome Capitão América está no Nível Prata")
}

if (CapitaoAmerica === 1000){
    console.log("")
}

let XpMinimoBronze7 = 1001
let XpMaximoBronze7 = 2000
let ResultadoBronze7 = ((CapitaoAmerica <= XpMaximoBronze7) && (CapitaoAmerica >= XpMinimoBronze7))
if (ResultadoBronze7){
      console.log ("O Heroi de Nome Capitão América está no Nível Bronze")
}


let XpMinimo7 = 5001
let XpMaximo7 = 6000
let Resultado7 = ((CapitaoAmerica <= XpMaximo7) && (CapitaoAmerica >= XpMinimo7))
if (Resultado7){
      console.log ("")
}

let XpMinimoOuro7 = 6001
let XpMaximoOuro7 = 7000
let ResultadoOuro7 = ((CapitaoAmerica <= XpMaximoOuro7) && (CapitaoAmerica >= XpMinimoOuro7))
if (ResultadoOuro7){
      console.log ("O Heroi de Nome Capitão América está no Nível Ouro")
}

let XpMinimoPlatina7 = 7001
let XpMaximoPlatina7 = 8000
let ResultadoPlatina7 = ((CapitaoAmerica <= XpMaximoPlatina7) && (CapitaoAmerica >= XpMinimoPlatina7))
if (ResultadoPlatina7){
      console.log ("O Heroi de Nome Capitão América está no Nível Platina")
}

let XpMinimoAscendente7 = 8001
let XpMaximoAscendente7 = 9000
let ResultadoAscendente7 = ((CapitaoAmerica <= XpMaximoAscendente7) && (CapitaoAmerica >= XpMinimoAscendente7))
if (ResultadoAscendente7){
      console.log ("O Heroi de Nome Capitão América está no Nível Ascendente")
}

let XpMinimoImortal7 = 9001
let XpMaximoImortal7 = 10000
let ResultadoImortal7 = ((CapitaoAmerica <= XpMaximoImortal7) && (CapitaoAmerica >= XpMinimoImortal7))
if (ResultadoImortal7){
      console.log ("O Heroi de Nome Capitão América está no Nível Imortal")
}

let XpRadiante7 = 10001
let ResultadoRadiante7 = (CapitaoAmerica >= XpRadiante1) 
if (ResultadoRadiante7){
      console.log ("O Heroi de Nome Capitão América está no Nível Radiante")
}