function setInputFiledCase(isIncrease) {
  const inputElement = document.getElementById("case-input-field");
  const inputElementString = inputElement.value;
  const inputNumber = parseInt(inputElementString);

  let newInput;

  if (isIncrease === true) {
    newInput = inputNumber + 1;
  } else {
    newInput = inputNumber - 1;
  }

  inputElement.value = newInput;

  return newInput;
}

function updatePhonePriceCase(newCaseNumber) {
  const caseTotalPrice = newCaseNumber * 59;
  const casePrice = document.getElementById("case-price");
  casePrice.innerText = caseTotalPrice;
}

document.getElementById("case-plus-btn").addEventListener("click", () => {
  const newCaseNumber = setInputFiledCase(true);
  updatePhonePriceCase(newCaseNumber);

  calculateSubTotal();
});

document.getElementById("case-minus-btn").addEventListener("click", () => {
  const newCaseNumber = setInputFiledCase(false);
  updatePhonePriceCase(newCaseNumber);

  calculateSubTotal();
});
