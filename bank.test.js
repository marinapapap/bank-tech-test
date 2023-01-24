const Bank = require('./bank');

describe("Bank class", () => {

  it("returns an empty array", () => {

    const bank = new Bank();

    expect(bank.transaction()).toEqual([]);

  });

  it("adds a deposit value with the date and returns data in a 3 element array (positons 1 and 0 respectively)", () => {

    const bank = new Bank();

    bank.deposit("13/01/2023", 1000);

    expect(bank.transaction()).toEqual([{ date: "13-01-2023", deposit: 1000, withdrawal: "", balance: 1000 }]);

  });


  it("adds a withdrawal value with the date and returns data in a 3 element array (positons 2 and 0 respectively)", () => {

    const bank = new Bank();

    bank.withdrawal("13/01/2023", 500);

    expect(bank.transaction()).toEqual([{ date: "13-01-2023", deposit: "", withdrawal: 500, balance: -500 }]);

  });

  it("adds a withdrawal value with the date and returns data in a 3 element array (positons 2 and 0 respectively)", () => {

    const bank = new Bank();

    bank.deposit("10/01/2023", 1000);
    bank.deposit("13/01/2023", 2000);
    bank.withdrawal("14/01/2023", 500);

    expect(bank.transaction()[0]).toEqual({ date: "10-01-2023", deposit: 1000, withdrawal: "", balance: 1000 });
    expect(bank.transaction()[2]).toEqual({ date: "14-01-2023", deposit: "", withdrawal: 500, balance: 2500 });

  });
});