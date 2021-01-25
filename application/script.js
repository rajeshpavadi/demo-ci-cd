var unit = new Array();
var factor = new Array();
unit = new Array("Degrees Celsius ('C)", "Degrees Fahrenheit ('F)", "Degrees Kelvin ('K)", "Degrees Rankine ('R)");
factor = new Array(1, 0.555555555555, 1, 0.555555555555);
tempIncrement = new Array(0, -32, -273.15, -491.67);

function FillMenuWithArray(myMenu, myArray) {
  var i;
  myMenu.length = myArray.length;
  for (i = 0; i < myArray.length; i++) {
    myMenu.options[i].text = myArray[i];
  }
}

function CalculateUnit(sourceForm, targetForm) {

  var sourceValue = sourceForm.unit_input.value;

  sourceValue = parseFloat(sourceValue);
  if (!isNaN(sourceValue) || sourceValue == 0) {
    sourceForm.unit_input.value = sourceValue;
    ConvertFromTo(sourceForm, targetForm);
  }

  else{
    targetForm.result.value="invalid"
  }
}

function ConvertFromTo(sourceForm, targetForm) {
  var sourceIndex;
  var sourceFactor;
  var targetIndex;
  var targetFactor;
  var result;
  sourceIndex = sourceForm.unit_menu.selectedIndex;
  sourceFactor = factor[sourceIndex];

  targetIndex = targetForm.unit_menu.selectedIndex;
  targetFactor = factor[targetIndex];


  result = sourceForm.unit_input.value;
  result = parseFloat(result) + tempIncrement[sourceIndex];
 
  result = result * sourceFactor;

  result = result / targetFactor;

  result = parseFloat(result) - tempIncrement[targetIndex];
  
  console.log(result)
  input_value=targetForm.unit_input.value
  input_value=parseFloat(input_value)


  if(Math.round(input_value) == Math.round(result)){
    targetForm.result.value="correct"
  }
  else{
    targetForm.result.value="incorrect"

  }
}

window.onload = function(e) {
  FillMenuWithArray(document.form_A.unit_menu, unit);
  FillMenuWithArray(document.form_B.unit_menu, unit);
}