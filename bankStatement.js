const FormatBankRecords = require('./formatBankRecords');

class BankStatement {

  constructor() {
    this.total = 0;
    this.bankStatementData = [];
  }

  addRecords(records) {
    this.bankStatementData = [];

    const formattedRecords = this.recordsFormatter(records);

    formattedRecords.map ( (record) => {
      this.bankStatementData.push(record);
    })

    this.bankStatementData.push(["date || credit || debit || balance"]);
  }

  recordsFormatter(records) {
    const formatBankRecords = new FormatBankRecords(records);
    formatBankRecords.formatter();
    return formatBankRecords.returnFormattedRecords();
  }

  statement() {
    return this.bankStatementData.map(x =>
        x.join(" || ").replace("  ", " ")
      ).reverse().join("\n");
  }
}

module.exports = BankStatement;
