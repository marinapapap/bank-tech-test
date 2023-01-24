const Bank = require('./bank');

describe("Bank class", () => {

  it("returns an empty array", () => {

    const bank = new Bank();

    expect(bank.returnRecords()).toEqual([]);

  });

  it("adds a deposit value with the date and returns data in a 3 element array (positons 1 and 0 respectively)", () => {

    const bank = new Bank();

    bank.deposit("13/01/2023", 1000);

    expect(bank.returnRecords()[0]).toEqual({ date: "13-01-2023", deposit: "1000.00", withdrawal: "", balance: "1000.00" });

  });


  it("adds a withdrawal value with the date and returns data in a 3 element array (positons 2 and 0 respectively)", () => {

    const bank = new Bank();

    bank.withdrawal("13/01/2023", 500);

    expect(bank.returnRecords()[0]).toEqual({ date: "13-01-2023", deposit: "", withdrawal: "500.00", balance: "-500.00" });

  });

  it("adds deposits and a withdrawal value with dates and returns data as an array of objects", () => {

    const bank = new Bank();

    bank.deposit("10/01/2023", 1000);
    bank.deposit("13/01/2023", 2000);
    bank.withdrawal("14/01/2023", 500);

    expect(bank.returnRecords()[0]).toEqual({ date: "10-01-2023", deposit: "1000.00", withdrawal: "", balance: "1000.00" });
    expect(bank.returnRecords()[2]).toEqual({ date: "14-01-2023", deposit: "", withdrawal: "500.00", balance: "2500.00" });

  });

  it("adds another withdrawal after returning the records, then returns the records again to see if the new record is at the end of the records array", () => {

    const bank = new Bank();

    bank.deposit("10/01/2023", 1000);
    bank.deposit("13/01/2023", 2000);
    bank.withdrawal("14/01/2023", 500);

    expect(bank.returnRecords()[0]).toEqual({ date: "10-01-2023", deposit: "1000.00", withdrawal: "", balance: "1000.00" });
    expect(bank.returnRecords()[2]).toEqual({ date: "14-01-2023", deposit: "", withdrawal:"500.00", balance:"2500.00" });

    bank.withdrawal("17/01/2023", 500);

    expect(bank.returnRecords()[3]).toEqual({ date: "17-01-2023", deposit: "", withdrawal: "500.00", balance: "2000.00" });
  });
});