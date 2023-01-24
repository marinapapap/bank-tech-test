class Bank {

  constructor() {
    this.records = [];
    this.currentBalance = 0;
  }

  deposit(date, value) {
    const record = {}
    this.currentBalance += value;

    record.date = date.split("/").join("-");
    record.deposit = value;
    record.withdrawal = "";
    record.balance = this.currentBalance;
    this.records.push(record);
  }

  withdrawal(date, value) {
    const record = {}
    this.currentBalance -= value;

    record.date = date.split("/").join("-");
    record.deposit = "";
    record.withdrawal = value;
    record.balance = this.currentBalance;
    this.records.push(record);
  }

  transaction() {
    return this.records;
  }
 
}

module.exports = Bank;

