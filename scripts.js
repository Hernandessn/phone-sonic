/*Segundos */
let number = 0
let cron = 0
let segundos = document.querySelector('.segundos')
/*Milisegundos */
let number1 = 0
let cron1 = 0
let milisegundos = document.querySelector('.milisegundos')
/*Minutos */
let min = 0;
let number2 = 0;
let minutos = document.querySelector('.minutes')
/*Imagem e fundo */

const fundo = document.querySelector('.fundo')
const fundo1 = document.querySelector('.fundo1')
const painel = document.querySelector('.painel')
const buttons = document.querySelector('.buttons')
const painelSonic = document.querySelector('.painel-sonic')


function start() {
    cron = setInterval(function () {
        number++
        segundos.innerHTML = number + "s"
 if(number === 60){
     number = 0;
 }
      

    }, 1000)
    cron1 = setInterval(function () {
        number1++
        milisegundos.innerHTML = number1 + "ms"
        if(number1 === 1000){
            number1 = 0;
        }
    }, 10 * -3)
    min = setInterval(function(){
        number2++
        minutos.innerHTML = number2
    },60000) 
   
    fundo1.src = `./img/video.run.mp4`
    fundo1.style = `display: flex;
    align-items: center;
    justify-content: center;
    width: 38%;
    top:35%;
    left: 0%;
   margin-bottom:20%;
    margin-top: 1%;`
 fundo.src = ` ` 
 painelSonic.style = `width:90%;`
 painel.style = `top:30%;width:40%;left:30%;`
 buttons.style = ` display: flex;
 gap: 10px;
position: relative; position: absolute;
display: flex;
align-items: center;
justify-content: center;
top: 125%;
left: 40%; `
}

function stop() {
    clearInterval(cron)
    clearInterval(cron1)
    clearInterval(min)
   
    painelSonic.style = `width:0%;`
 painel.style = ``
 fundo1.src = ``
 fundo.src = `./img/sonic.wait.mp4 `
 fundo.style = `top:50%;`

 buttons.style = `  display: flex;
 gap: 10px;
position: relative; position: absolute;
display: flex;
align-items: center;
justify-content: center;
top: 100%;
left: 40%;`
 
}
function restart() {
    clearInterval(cron)
    number = 0
    segundos.innerHTML = 0
    clearInterval(cron1)
    
    number1 = 0
    milisegundos.innerHTML = 0
    clearInterval(min)
    number2 = 0;
    minutos.innerHTML = 0
    painel.style = ``
 fundo1.src = ``
 fundo.src = `./img/sonic.wait.mp4 `
}


