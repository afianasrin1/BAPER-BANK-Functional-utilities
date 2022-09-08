document.getElementById("btn-deposit").addEventListener("click", function () {
  /*1.get the element by id
 2.get the value from the element
 3convert string value to a number */

  const newDepositAmount = getInputFieldValueById("deposit-field");
  /*1.get previous deposite total by id
   */
  const previousDepositTotal = getTextElementValueById("deposit-balance");

  //calculate new Deposit Total
  const newDepositTotal = previousDepositTotal + newDepositAmount;

  //set deposit total value
  setTextElementValueById("deposit-balance", newDepositTotal);

  //get previous balance by using the function
  const previousBalanceTotal = getTextElementValueById("fynal-balance");

  //calculate new balance Total
  const newBalanceTotal = previousBalanceTotal + newDepositAmount;

  //set deposit total value
  setTextElementValueById("fynal-balance", newBalanceTotal);
});
