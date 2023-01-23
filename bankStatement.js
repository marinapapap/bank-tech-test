class BankStatement {

  constructor() {
    this.total = 0;
    this.transactions = [];
  }

  addTransaction(record) {
    this.total += record.transaction()[1];
    record.transaction().push(this.total);
    console.log(record.transaction());

    const array = record.transaction().map(x => {

      if(Number.isInteger(x)) {
        return x.toFixed(2);
      } else {
        return x;
      };

    });

    this.transactions.push(array);
  }

  statement() {
    this.transactions.push(["date || credit || debit || balance"])
    return this.transactions.map(x =>
        x.join(" || ").replace("  ", " ")
      ).reverse().join("\n");
  }
}

module.exports = BankStatement;