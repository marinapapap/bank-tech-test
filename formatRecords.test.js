const FormatRecords = require('./formatRecords');
const Bank = require('./bank');

describe("", () => {
  it("takes an instance of Bank and return the records", () => {

    const bank = new Bank();

    bank.withdrawal("13/01/2023", 500);

    const formatRecords = new FormatRecords(bank);

    expect(formatRecords.bankRecords[0]).toEqual({ date: "13/01/2023", deposit: "", withdrawal: 500, balance: -500 })
  })

  it("takes an instance of Bank and returns formatted records", () => {

    const bank = new Bank();

    bank.withdrawal("13/01/2023", 500);

    const formatRecords = new FormatRecords(bank);

    formatRecords.formatter();

    expect(formatRecords.returnFormattedRecords()[0]).toEqual(["13-01-2023", "", "500.00", "-500.00"]);
  })

  it("adds 2 bank deposits and runs them through the formatter - adds a withdrawal and runs the formatter again", () => {

    const bank = new Bank();

    bank.deposit("10/01/2023", 1000);
    bank.deposit("13/01/2023", 2000);

    const formatRecords = new FormatRecords(bank);
    formatRecords.formatter()

    bank.withdrawal("14/01/2023", 500);

    formatRecords.formatter()

    expect(formatRecords.returnFormattedRecords()[0]).toEqual(["10-01-2023", "1000.00", "", "1000.00"]);
    expect(formatRecords.returnFormattedRecords()[2]).toEqual(["14-01-2023", "", "500.00", "2500.00"]);

  });
})