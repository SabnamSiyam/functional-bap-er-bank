// adding Event Listener to the  Deposit button.
document.getElementById("deposit-btn").addEventListener("click", function () {
  const newDepositAmout = getInputFieldValueById("deposit-field");
  const previousDepositAmount = getTextElementValueById("total-deposit");
  const newTotalDeposit = newDepositAmout + previousDepositAmount;
  setTextElementValueById("total-deposit", newTotalDeposit);
  const previousTotalBalance = getTextElementValueById("total-balance");
  const newTotalBalance = newDepositAmout + previousTotalBalance;
  setTextElementValueById("total-balance", newTotalBalance);
});
