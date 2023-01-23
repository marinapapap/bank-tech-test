class BankStatement {

  constructor() {
    this.total = 0;
    this.transactions = [];
  }

  addTransaction(record) {
    this.total += record.transaction()[1]; // adds deposits
    this.total -= record.transaction()[2]; // subtracts withdrawals

    const updatedRecord = record.transaction();
    updatedRecord.push(this.total);

    const formattedRecord = this.convertToDecimals(updatedRecord);
    this.transactions.push(formattedRecord);
  }

  convertToDecimals(record) {
    return record.map(x => {
      if(Number.isInteger(x)) {
        return x.toFixed(2);
      } else {
        return x;
      }
    });
  }

  statement() {
    this.transactions.push(["date || credit || debit || balance"])
    return this.transactions.map(x =>
        x.join(" || ").replace("  ", " ")
      ).reverse().join("\n");
  }
}

module.exports = BankStatement;
