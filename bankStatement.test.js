const BankStatement = require('./bankStatement');

describe("BankStatement class", () => {
  it("Statement() returns only the statement headings", () => {

    const bankStatement = new BankStatement;
    
    expect(bankStatement.statement()).toEqual("date || credit || debit || balance");

  });
});