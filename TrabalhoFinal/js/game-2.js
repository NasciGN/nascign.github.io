var myNumbers = []

const random = (min, max) => Math.floor(Math.random() * (max - min) + min);
var numAleatorio = 0;
limite = 4;
for (var i = 0; i < limite; i++){
    numAleatorio = random(0, 256)
    if(myNumbers.includes(numAleatorio) == false) {
        myNumbers.push(numAleatorio);
    }
}

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

var dropArray = myNumbers.slice();
dropArray = shuffleArray(dropArray)

var dropBin1 = (dropArray[0]);
var dropBin2 = (dropArray[1]);
var dropBin3 = (dropArray[2]);
var dropBin4 = (dropArray[3]);

var num1 = (myNumbers[0]);
var num2 = (myNumbers[1]);
var num3 = (myNumbers[2]);
var num4 = (myNumbers[3]); 

function numAleatorios() {
 

    document.getElementById("numero1").innerHTML = num1;
    document.getElementById("numero2").innerHTML = num2;
    document.getElementById("numero3").innerHTML = num3;
    document.getElementById("numero4").innerHTML = num4;

    document.getElementById("drop1").innerHTML = dropArray[0].toString(2);
    document.getElementById("drop2").innerHTML = dropArray[1].toString(2);
    document.getElementById("drop3").innerHTML = dropArray[2].toString(2);
    document.getElementById("drop4").innerHTML = dropArray[3].toString(2);
    document.getElementById('num1').setAttribute('draggable', 'true')
    document.getElementById('num2').setAttribute('draggable', 'true')
    document.getElementById('num3').setAttribute('draggable', 'true')
    document.getElementById('num4').setAttribute('draggable', 'true')
    
}

var valOrigem = [];
var valDestino = [];
var dropValues = ['drop-valor1', 'drop-valor2', 'drop-valor3', 'drop-valor4'];
var key = 1;


function encurt(a, b, c, d){
  for (var i = 0; i <= 4; i++){
    switch (valDestino[i]){
      case c:
        if (valOrigem[i] == d){
          if (a == b){
            document.getElementById(c).classList.add('box-drop-acertou');
            document.getElementById(d).classList.add('drop-acertou');
        
          } else {
            document.getElementById(c).classList.add('box-drop-errou');
            document.getElementById(d).classList.add('drop-errou');
          }
        }
      break
    }
  }
}

function verificaValor() {
confere=0;
console.log(valOrigem);
console.log(valDestino);

 encurt(dropBin1, num1, 'drop-valor1', 'num1')
 encurt(dropBin1, num2, 'drop-valor1', 'num2')
 encurt(dropBin1, num3, 'drop-valor1', 'num3')
 encurt(dropBin1, num4, 'drop-valor1', 'num4')

 encurt(dropBin2, num1, 'drop-valor2', 'num1')
 encurt(dropBin2, num2, 'drop-valor2', 'num2')
 encurt(dropBin2, num3, 'drop-valor2', 'num3')
 encurt(dropBin2, num4, 'drop-valor2', 'num4')

 encurt(dropBin3, num1, 'drop-valor3', 'num1')
 encurt(dropBin3, num2, 'drop-valor3', 'num2')
 encurt(dropBin3, num3, 'drop-valor3', 'num3')
 encurt(dropBin3, num4, 'drop-valor3', 'num4')

 encurt(dropBin4, num1, 'drop-valor4', 'num1')
 encurt(dropBin4, num2, 'drop-valor4', 'num2')
 encurt(dropBin4, num3, 'drop-valor4', 'num3')
 encurt(dropBin4, num4, 'drop-valor4', 'num4')


}




  

  

/* 

          if(num1 == dropBin1){
            console.log('Parabens! Você acertou')
          } else {
            console.log('ERROU!!!')
          }

        }
*/
  



function limpaTela() {
  var num1 = ''
  var num2 = ''
  var num3 = ''
  var num4 = ''
  document.getElementById("numero1").innerHTML = num1;
  document.getElementById("numero2").innerHTML = num2;
  document.getElementById("numero3").innerHTML = num3;
  document.getElementById("numero4").innerHTML = num4;

  document.getElementById('num1').setAttribute('draggable', 'false')
  document.getElementById('num2').setAttribute('draggable', 'false')
  document.getElementById('num3').setAttribute('draggable', 'false')
  document.getElementById('num4').setAttribute('draggable', 'false')

  document.location.reload(true);
  
}

var escolha = ""
function onDragStart(event) {
  event.dataTransfer.setData('text', event.target.id);
  escolha=event.target.id;
  if(valOrigem.includes(escolha) == false) {
    valOrigem.push(escolha);
  }

}


function onDragEnter(event){
  event.target.classList.add('drag-focus');
}

function onDragOver(event){
  event.preventDefault();
  event.target.classList.add('drag-focus');


}

function onDragLeave(event){
  event.target.classList.remove('drag-focus');

}


var destino = ""
function onDrop(event) {
  const id = event.dataTransfer.getData('text');
  event.target.appendChild(document.getElementById(id));
  event.target.classList.remove('drag-focus');
  destino = event.target.id;
  if(valDestino.includes(destino) == false) {
    valDestino.push(destino);
  }
  event.dataTransfer.clearData();
  document.getElementById(escolha).setAttribute('draggable', 'false');
}