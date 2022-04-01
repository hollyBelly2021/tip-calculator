"use strict";
const submitButton = document.getElementById("submit");
const answerSpace = document.getElementById("answer");

const tipCalc = function () {
  const percentInput = Number(document.getElementById("percent").value);
  const amountInput = Number(document.getElementById("amount").value);

  const answer = (percentInput / 100) * amountInput;

  answerSpace.textContent = answer.toFixed(2);
};

submitButton.addEventListener("click", tipCalc);
