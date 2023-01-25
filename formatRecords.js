class FormatRecords {

  constructor(bank) {
    this.bankRecords = bank.returnRecords();
    this.formattedBankRecords = [];
  }

  formatter() {
    this.formattedBankRecords = [];
    this.bankRecords.map(record => {
      let updatedRecord = [];
      this.convertToDecimals(record);
      
      updatedRecord[0] = record.date.split("/").join("-");
      updatedRecord[1] = record.deposit;
      updatedRecord[2] = record.withdrawal;
      updatedRecord[3] = record.balance.toFixed(2);
      
      this.formattedBankRecords.push(updatedRecord);
    })
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

  returnFormattedRecords() {
    return this.formattedBankRecords;
  }
}

module.exports = FormatRecords;