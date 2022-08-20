function setInputFiled(isIncrease) {
  const inputElement = document.getElementById("phone-input-field");
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

function updatePhonePrice(newPoneNumber) {
  const phoneTotalPrice = newPoneNumber * 1219;
  const phonePrice = document.getElementById("phone-price");
  phonePrice.innerText = phoneTotalPrice;
}

function getTextElementById(elementId) {
  const phoneTotalElement = document.getElementById(elementId);
  const phoneTotalElementString = phoneTotalElement.innerText;
  const currentPoneTotal = parseInt(phoneTotalElementString);

  return currentPoneTotal;
}

function getTextSubId(elementId, newValue) {
  const textSubId = getElementById(elementId);
  textSubId.innerText = newValue;
}

document.getElementById("phone-plus-btn").addEventListener("click", () => {
  const newPoneNumber = setInputFiled(true);
  updatePhonePrice(newPoneNumber);

  calculateSubTotal();
});
document.getElementById("phone-plus-minus").addEventListener("click", () => {
  const newPoneNumber = setInputFiled(false);
  updatePhonePrice(newPoneNumber);

  calculateSubTotal();
});

// case
