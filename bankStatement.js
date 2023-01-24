class BankStatement {

  constructor() {
    this.total = 0;
    this.transactions = [["date || credit || debit || balance"]];
  }

  addRecordsWithCurrentBalance(records) {
    const allRecords = records.transaction();

    allRecords.map ( (record) => {
      let updatedRecord = ["", "", ""]
      
      updatedRecord[0] = record.date
      updatedRecord[1] = record.deposit
      updatedRecord[2] = record.withdrawal

      this.calculateCurrentBalance(record)
      updatedRecord.push(this.total);
      this.transactions.push(updatedRecord);
    })
  }

  calculateCurrentBalance(record) {
      this.total += record.deposit; 
      this.total -= record.withdrawal; 
  }

  // convertToDecimals(record) {
  //   if(Number.isInteger(record.deposit)) {
  //     record.deposit == record.deposit.toFixed(2);
  //   } else if(Number.isInteger(record.withdrawal)) {
  //     return record.withdrawal.toFixed(2);
  //   } else {
  //     return record;
  //   }
  
  // }

  statement() {
    this.transactions.push(this.transactions.shift());
    return this.transactions.map(x =>
        x.join(" || ").replace("  ", " ")
      ).reverse().join("\n");
  }
}

module.exports = BankStatement;
