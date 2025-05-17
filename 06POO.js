class Account {
  constructor(balance, limit) {
    this._balance = balance;
    this._limit = limit;
  }
  get balance() {
    return this._balance;
  }
  set balance(newBalance) {
    this._balance = newBalance;
  }
  get limit() {
    return this._limit;
  }
  set limit(newLimit) {
    this._limit = newLimit;
  }
  withdrawMoney(toBeWithdraw) {
    if (this.balance + this.limit >= toBeWithdraw) {
      this.balance - toBeWithdraw;
    } else {
      throw new Error("*-*");
    }
  }
}
