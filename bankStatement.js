// const FormatBankRecords = require('./formatBankRecords');

class BankStatement {
  constructor(formatter) {
    this.formatter = formatter;
    this.total = 0;
    this.bankStatementData = [];
  }

  addRecords() {
    this.bankStatementData = [];

    const formattedRecords = this.recordsFormatter();

    formattedRecords.map((record) => {
      this.bankStatementData.push(record);
    });

    this.bankStatementData.push(["date || credit || debit || balance"]);
  }

  recordsFormatter() {
    // const formatBankRecords = new FormatBankRecords(records);
    const formatBankRecords = this.formatter;
    formatBankRecords.formatter();
    return formatBankRecords.returnFormattedRecords();
  }

  statement() {
    return this.bankStatementData
      .map((x) => x.join(" || ").replace("  ", " "))
      .reverse()
      .join("\n");
  }
}

module.exports = BankStatement;
