const FormatRecords = require('./formatRecords');
const Bank = require('./bank');

describe("", () => {
  it("takes an instance of Bank and return the records", () => {

    const bank = new Bank();

    bank.withdrawal("13/01/2023", 500);

    const formatRecords = new FormatRecords(bank);

    expect(formatRecords.returnBankRecords()[0]).toEqual({ date: "13/01/2023", deposit: "", withdrawal: 500, balance: -500 })
  })

  xit("takes an instance of Bank and returns formatted records", () => {

    const bank = new Bank();

    bank.withdrawal("13/01/2023", 500);

    const formatRecords = new FormatRecords(bank);

    expect(formatRecords.formatter()).toEqual({ date: "13/01/2023", deposit: "", withdrawal: 500, balance: -500 })
  })
})