class Bank {

  constructor() {
    this.records = [];
    this.currentBalance = 0;
  }

  deposit(date, value) {
    const record = {}
    this.currentBalance += value;

    record.date = date.split("/").join("-");
    record.deposit = value.toFixed(2);
    record.withdrawal = "";
    record.balance = this.currentBalance.toFixed(2);
    this.records.push(record);
  }

  withdrawal(date, value) {
    const record = {}
    this.currentBalance -= value;

    record.date = date.split("/").join("-");
    record.deposit = "";
    record.withdrawal = value.toFixed(2);
    record.balance = this.currentBalance.toFixed(2);
    this.records.push(record);
  }

  transaction() {
    return this.records;
  }
 
}

module.exports = Bank;

