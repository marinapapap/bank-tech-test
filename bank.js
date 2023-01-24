class Bank {

  constructor() {
    this.records = [];
    this.currentBalance = 0;
  }

  deposit(date, value) {
    const record = {}
    this.currentBalance += value;

    record.date = date;
    record.deposit = value;
    record.withdrawal = "";
    record.balance = this.currentBalance;
    this.records.push(record);
  }

  withdrawal(date, value) {
    const record = {}
    this.currentBalance -= value;

    record.date = date;
    record.deposit = "";
    record.withdrawal = value;
    record.balance = this.currentBalance;
    this.records.push(record);
  }

  returnRecords() {
    return this.records;
  }
 
}

module.exports = Bank;

