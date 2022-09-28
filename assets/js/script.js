// Código de asignación
var generateBtn = document.querySelector("#generate");
const OptionsDialog = document.getElementById("OptionsDialog");
var submitBtn = document.querySelector("#confirmBtn");
var MayOption = document.querySelector("#may");
var MinOption = document.querySelector("#min");
var NumOption = document.querySelector("#num");
var CarOption = document.querySelector("#car");

var longitud;
var numlongitud;
var may;
var min;
var num;
var car;
var charmay = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var charmin = "abcdefghijklmnopqrstuvwxyz";
var charnum = "1234567890";
var charcar = " !\"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~";
var position;
var long;
var password = "";


function writePassword() {
  password = "";


  for ( var i = 0; i < numlongitud;){
    if (may == true){
      long = charmay.length;
      position = Math.floor(Math.random()*long);
      password += charmay.charAt(position);
      i++; 
      if (i == numlongitud){
        break;
      }
    } 
    if (min == true){
      long = charmin.length;
      position = Math.floor(Math.random()*long);
      password += charmin.charAt(position);
      i++;
      if (i == numlongitud){
        break;
      }
    } 
    if (num == true){
      long = charnum.length;
      position = Math.floor(Math.random()*long);
      password += charnum.charAt(position);
      i++;
      if (i == numlongitud){
        break;
      }
    } 
    if (car == true){
      long = charcar.length;
      position = Math.floor(Math.random()*long);
      password += charcar.charAt(position);
      i++;
      if (i == numlongitud){
        break;
      }
    } 
    
  }

  console.log(password);

//Reorder password randomly
  var array = password.split("");
  long = array.length;

  for (var m = 0; m < long - 1; m++){
    var n = Math.floor(Math.random() * long);
    var Savedvalue = array[m];
    array[m] = array[n];
    array[n] = Savedvalue;
  }

  password = array.join("");

  console.log(password);

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


function displayLengthPrompt(){
  longitud="";
  longitud = window.prompt('Introduzca la longitud deseada de la contraseña, puede ser entre 8 y 128 caracteres');

  if (longitud == null ){
    return;
  }

  numlongitud = Number(longitud);
  if (isNaN(numlongitud)){
    window.alert("Introduce un número por favor");
    displayLengthPrompt();
  }


  if (numlongitud > 128 || numlongitud < 8 ) {
    window.alert("La longitud de la contraseña debe ser entre 8 y 128 caracteres");
    displayLengthPrompt();
  }

  displayOptionsPrompt();
}

function displayOptionsPrompt(){
  OptionsDialog.showModal();
  MayOption.checked = true;
  MinOption.checked = true;
  NumOption.checked = true;
  CarOption.checked = true;

}

function getValues(){
  may = MayOption.checked;
  min = MinOption.checked;
  num = NumOption.checked;
  car = CarOption.checked;
  if (may == true || min == true || num == true || car ==true){
    writePassword();
  }else{
    window.alert("Debes seleccionar al menos una opción entre: mayúsculas, minúsculas, números o caracteres especiales");
  }
  
}

generateBtn.addEventListener("click", displayLengthPrompt);
confirmBtn.addEventListener("click", getValues)
