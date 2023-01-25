const FormatRecords = require('./formatRecords');

class BankStatement {

  constructor() {
    this.total = 0;
    this.bankStatementData = [];
  }

  addRecords(records) {
    this.bankStatementData = [];

    const formatRecords = new FormatRecords(records);
    formatRecords.formatter();
    const formattedRecords = formatRecords.returnFormattedRecords();

    formattedRecords.map ( (record) => {
      this.bankStatementData.push(record);
    })

    this.bankStatementData.push(["date || credit || debit || balance"]);
  }

  statement() {
    return this.bankStatementData.map(x =>
        x.join(" || ").replace("  ", " ")
      ).reverse().join("\n");
  }
}

module.exports = BankStatement;
