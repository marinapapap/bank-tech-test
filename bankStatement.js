const FormatRecords = require('./formatRecords');

class BankStatement {

  constructor() {
    this.total = 0;
    this.bankStatementData = [];
  }

  addRecords(records) {
    this.bankStatementData = [];
    const allRecords = records.returnRecords();

    allRecords.map ( (record) => {
      this.updateBankStatementData(record)
    })

    this.bankStatementData.push(["date || credit || debit || balance"]);
  }

  updateBankStatementData(record) {
    let updatedRecord = [];
    this.convertToDecimals(record);
    
    updatedRecord[0] = record.date.split("/").join("-");
    updatedRecord[1] = record.deposit;
    updatedRecord[2] = record.withdrawal;
    updatedRecord[3] = record.balance.toFixed(2);
    
    this.bankStatementData.push(updatedRecord);
  }

  convertToDecimals(record) {
    if(Number.isInteger(record.deposit)) {
      record.deposit = record.deposit.toFixed(2);
      return record;
    } else if(Number.isInteger(record.withdrawal)) {
      record.withdrawal = record.withdrawal.toFixed(2);
      return record;
    } else {
      return record;
    }
  }

  statement() {
    return this.bankStatementData.map(x =>
        x.join(" || ").replace("  ", " ")
      ).reverse().join("\n");
  }
}

module.exports = BankStatement;
