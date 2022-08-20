function setTextElementValueById(elementId, value) {
  const subTotalElement = document.getElementById(elementId);
  subTotalElement.innerText = value;
}

function calculateSubTotal() {
  //   calculate total

  const currentPhoneTotal = getTextElementById("phone-price");
  const currentCaseTotal = getTextElementById("case-price");

  const currentTotal = currentPhoneTotal + currentCaseTotal;

  setTextElementValueById("sub-total", currentTotal);

  const taxAmountElement = (currentTotal * 0.5).toFixed(2);
  const taxAmount = parseFloat(taxAmountElement);
  setTextElementValueById("tax-amount", taxAmount);

  const finalAmount = currentTotal + taxAmount;

  setTextElementValueById("final-total", finalAmount);
}
