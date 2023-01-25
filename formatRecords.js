class FormatRecords {

  constructor(bank) {
    this.bank = bank;
  }

  returnBankRecords() {
    return this.bank.returnRecords();
  }
}

module.exports = FormatRecords;