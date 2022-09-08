document.getElementById("btn-withdraw").addEventListener("click", function () {
  const newWithdrawAmount = getInputFieldValueById("withdraw-field");

  const previousWithdrawAmount = getTextElementValueById("withdraw-balance");

  const totalWithdraw = previousWithdrawAmount + newWithdrawAmount;

  setTextElementValueById("withdraw-balance", totalWithdraw);

  const previousBalanceTotal = getTextElementValueById("fynal-balance");
  const lastTotalBalance = previousBalanceTotal - newWithdrawAmount;
  setTextElementValueById("fynal-balance", lastTotalBalance);
});
