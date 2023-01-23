class BankStatement {

  constructor() {
    this.total = 0;
    this.transactions = [];
  }

  addTransaction(record) {
    this.total += record.transaction()[1];
    this.total -= record.transaction()[2];
    record.transaction().push(this.total);

    const formattedRecord = this.convertToDecimals(record.transaction());
    this.transactions.push(formattedRecord);
  }

  convertToDecimals(record) {
    return record.map(x => {
      if(Number.isInteger(x)) {
        return x.toFixed(2);
      } else {
        return x;
      };
    });
  };

  statement() {
    this.transactions.push(["date || credit || debit || balance"])
    return this.transactions.map(x =>
        x.join(" || ").replace("  ", " ")
      ).reverse().join("\n");
  };
};

module.exports = BankStatement;