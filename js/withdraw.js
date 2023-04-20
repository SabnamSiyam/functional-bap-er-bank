// adding Event Listener to the  Withdraw button.
document.getElementById("withdraw-btn").addEventListener("click", function () {
  const withdrawamount = getInputFieldValueById("withdraw-field");
  const previousWithdrawTotal = getTextElementValueById("total-withdraw");
  const newWithdrawTotal = previousWithdrawTotal + withdrawamount;
  const previousTotalBalance = getTextElementValueById("total-balance");

  if (withdrawamount > previousTotalBalance) {
    alert("Ore fokirer ghorer fokir re!!!! Tor Bap Er Bank a Ato taka nai!!");
    return;
  }

  setTextElementValueById("total-withdraw", newWithdrawTotal);
  const newTotalBalance = previousTotalBalance - withdrawamount;

  setTextElementValueById("total-balance", newTotalBalance);
});
