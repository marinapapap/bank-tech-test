class BankStatement {

  constructor() {
    this.total = 0;
    this.bankStatementData = [["date || credit || debit || balance"]];
  }

  addRecords(records) {
    const allRecords = records.returnRecords();

    allRecords.map ( (record) => {
      let updatedRecord = ["", "", ""];
      this.convertToDecimals(record);
      
      updatedRecord[0] = record.date.split("/").join("-");
      updatedRecord[1] = record.deposit;
      updatedRecord[2] = record.withdrawal;
      updatedRecord[3] = record.balance.toFixed(2);
     
      // this.calculateCurrentBalance(record)
      // updatedRecord.push(this.total)
      this.bankStatementData.push(updatedRecord);
    })
  }

  // calculateCurrentBalance(record) {
  //     this.total += record.deposit; 
  //     this.total -= record.withdrawal; 
  // }

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
    this.bankStatementData.push(this.bankStatementData.shift());
    return this.bankStatementData.map(x =>
        x.join(" || ").replace("  ", " ")
      ).reverse().join("\n");
  }
}

module.exports = BankStatement;
