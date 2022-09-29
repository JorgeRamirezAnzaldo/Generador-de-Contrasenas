// Asignation code

//Asignation of the button that will start the password generation
var generateBtn = document.querySelector("#generate");
//Asignation of the dialog that contains the form with the character options
const OptionsDialog = document.getElementById("OptionsDialog");
//Asignation of the button that will confirm the character options selection
var submitBtn = document.querySelector("#confirmBtn");
//Assignation of the checkboxes with the characters options
var MayOption = document.querySelector("#may");
var MinOption = document.querySelector("#min");
var NumOption = document.querySelector("#num");
var CarOption = document.querySelector("#car");

//Declare global variables
var longitud;
var numlongitud;
var may;
var min;
var num;
var car;
var position;
var long;
var password = "";
//Declare 4 string variables with all the possible characters
var charmay = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; //Upper case string
var charmin = "abcdefghijklmnopqrstuvwxyz"; //Lower case string
var charnum = "1234567890"; //Numbers string
var charcar = " !\"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~"; //Special characters string

//Function that will generate and write the password in the text area
function writePassword() {
  
  password = ""; //Clean password variable 

  for ( var i = 0; i < numlongitud;){ //Loop to fulfill the password length
    //Verify if upper case was selected
    if (may == true){
      long = charmay.length; //Get length of the string with upper case letters
      position = Math.floor(Math.random()*long); //Determine a random position of the string
      password += charmay.charAt(position); //Add the character of the upper case string at random position to the password
      i++; //Increase counter
      if (i == numlongitud){ //Verify if password length has been fulfilled
        break; //Get out from loop
      }
    } 
    //Verify if lower case was selected
    if (min == true){
      long = charmin.length; //Get length of the string with lower case letters
      position = Math.floor(Math.random()*long); //Determine a random position of the string
      password += charmin.charAt(position); //Add the character of the lower case string at random position to the password
      i++; //Increase counter
      if (i == numlongitud){ //Verify if password length has been fulfilled
        break; //Get out from loop
      }
    } 
    //Verify if numbers option was selected
    if (num == true){
      long = charnum.length; //Get length of the string with numbers
      position = Math.floor(Math.random()*long); //Determine a random position of the string
      password += charnum.charAt(position); //Add the character of the numbers case string at random position to the password
      i++; //Increase counter
      if (i == numlongitud){ //Verify if password length has been fulfilled
        break; //Get out from loop
      }
    } 
    //Verify if special characters option was selected
    if (car == true){
      long = charcar.length; //Get length of the string with special characters
      position = Math.floor(Math.random()*long); //Determine a random position of the string
      password += charcar.charAt(position); //Add the character of the special characters string at random position to the password
      i++; //Increase counter
      if (i == numlongitud){ //Verify if password length has been fulfilled
        break; //Get out from loop
      }
    } 
    
  }

  //Reorder password randomly
  var array = password.split(""); //Change the password string to an array
  long = array.length; //Determine the length of the array

  for (var m = 0; m < long - 1; m++){ //Loop over all positions of the array
    var n = Math.floor(Math.random() * long); //Get a random position of the array
    var Savedvalue = array[m]; //Save the actual value at the array position with index m
    //Exhange/Switch values
    array[m] = array[n]; //Move the value at random position to m position in array
    array[n] = Savedvalue; //Move the saved value to the n position in array
  }

  password = array.join(""); //Change the array to a string

  var passwordText = document.querySelector("#password"); //Assign the password text area 

  passwordText.value = password; //Move the generated password to the password text area

}

//Fucntion to diplay the Prompt to request the desired length of the password
function displayLengthPrompt(){
  longitud=""; //Clean variable
  longitud = window.prompt('Introduzca la longitud deseada de la contraseña, puede ser entre 8 y 128 caracteres'); //Display prompt to request password length
  if (longitud == null ){ //If the user pressed cancel
    return; //Return
  }

  numlongitud = Number(longitud); //Change the string introduced to a number
  if (isNaN(numlongitud)){ //If the conversion was not possible (user introduced a non-numerical value)
    window.alert("Introduce un número por favor"); //Show an alert
    displayLengthPrompt(); //Display again the prompt to request the password length
  }


  if (numlongitud > 128 || numlongitud < 8 ) { //If the password does not have the valid length
    window.alert("La longitud de la contraseña debe ser entre 8 y 128 caracteres"); //Show an alert
    displayLengthPrompt(); //Display again the prompt to request the password length
  }

  if (numlongitud >= 8 && numlongitud <= 128){ //If the password has the valid length
    displayOptionsPrompt(); //Call function to display the character options
  }
}

//Function to display the dialog with the character options
function displayOptionsPrompt(){
  OptionsDialog.showModal(); //Show in Modal the dialog with the character options
  //Predefine a value for all checkboxes
  MayOption.checked = true; 
  MinOption.checked = true;
  NumOption.checked = true;
  CarOption.checked = true;

}

//Function to get all values from checkboxes in dialog
function getValues(){
  //Get values from checkboxes and save the values in variables
  may = MayOption.checked;
  min = MinOption.checked;
  num = NumOption.checked;
  car = CarOption.checked;
  //Validate if user selected at least one character option
  if (may == true || min == true || num == true || car ==true){
    writePassword(); //If the user selected at least one option, then proceed to generate the password
  }else{
    window.alert("Debes seleccionar al menos una opción entre: mayúsculas, minúsculas, números o caracteres especiales"); //If not, then show an alert and stop
  }
  
}

//When pressing generate button, display length prompt
generateBtn.addEventListener("click", displayLengthPrompt);
//When pressing confirm button in dialog with characters options, proceed to get the values from checkboxes
confirmBtn.addEventListener("click", getValues)
