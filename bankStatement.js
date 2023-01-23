class BankStatement {

  constructor() {
    this.total = 0;
    this.transactions = [];
  }

  addTransaction(transaction) {
    
  }

  statement() {
    return "date || credit || debit || balance";
  }
}

module.exports = BankStatement;