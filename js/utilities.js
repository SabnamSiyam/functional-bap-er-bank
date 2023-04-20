// console.log('utilities connected');

// lets make fuction for get input field value by id---->>>

function getInputFieldValueById(inputId) {
  const inputFieldElement = document.getElementById(inputId);
  const inputFieldStringValue = inputFieldElement.value;
  const inputFiledNumbericValue = parseFloat(inputFieldStringValue);
  inputFieldElement.value = "";
  if (isNaN(inputFiledNumbericValue)) {
    alert("Are bolod Valid takar amount input de age!!!");
    return 0;
  } else {
    return inputFiledNumbericValue;
  }
}

// lets make fuction for get text element value by id---->>>

function getTextElementValueById(inputId) {
  const getTextElemnt = document.getElementById(inputId);
  const getTextElementStringValue = getTextElemnt.innerText;
  const getTextElementValue = parseFloat(getTextElementStringValue);
  return getTextElementValue;
}

// lets set the value for Text element by id------>>>>>
function setTextElementValueById(ElementId, newValue) {
  const textElement = document.getElementById(ElementId);
  textElement.innerText = newValue;
}

// input firld value for login and password --------------**
function getInputFieldValueForLoginById(inputId) {
  const inputFieldElement = document.getElementById(inputId);
  const inputFieldStringValue = inputFieldElement.value;
  inputFieldElement.value = "";
  return inputFieldStringValue;
}
