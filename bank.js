class Bank {

  constructor() {
    this.records = [];
  }

  deposit(date, value) {
    const record = {}
    record.date = date.split("/").join("-");
    record.deposit = value;
    record.withdrawal = "";
    this.records.push(record);
  }

  withdrawal(date, value) {
    const record = {}
    record.date = date.split("/").join("-");
    record.deposit = "";
    record.withdrawal = value;
    this.records.push(record);
  }

  transaction() {
    return this.records;
  }
 
}

module.exports = Bank;

