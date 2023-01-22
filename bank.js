class Bank {

  constructor() {
    this.record = [];
  }

  deposit(date, value) {
    this.record[0] = date.split("/").join("-");
    this.record[1] = value;
    this.record[2] = "";
  }

  withdrawal(date, value) {
    this.record[0] = date.split("/").join("-");
    this.record[1] = "";
    this.record[2] = value;
  }

  transaction() {
    return this.record;
  }
 
}

module.exports = Bank;

