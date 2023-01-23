class BankStatement {

  constructor() {
    this.total = 0;
    this.transactions = [["date || credit || debit || balance"]];
  }

  addTransactionWithCurrentBalance(record) {
    this.calculateCurrentBalance(record);

    const updatedRecord = record.transaction();
    updatedRecord.push(this.total);

    const formattedRecord = this.convertToDecimals(updatedRecord);
    this.transactions.push(formattedRecord);
  }

  calculateCurrentBalance(record) {
    this.total += record.transaction()[1]; // adds deposits
    this.total -= record.transaction()[2]; // subtracts withdrawals
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
    this.transactions.push(this.transactions.shift());
    return this.transactions.map(x =>
        x.join(" || ").replace("  ", " ")
      ).reverse().join("\n");
  }
}

module.exports = BankStatement;
