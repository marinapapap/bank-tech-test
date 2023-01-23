const BankStatement = require('./bankStatement');
const Bank = require('./bank');

describe("BankStatement class", () => {
  describe("unit tests", () => {
    it("Statement() returns only the statement headings", () => {

      const bankStatement = new BankStatement;

      expect(bankStatement.statement()).toEqual("date || credit || debit || balance");

    });
  });

  describe("integrated tests", () => {
    it("takes a deposit from the bank class and returns data formatted on a new line after the headings", () => {
      
      const bank = new Bank;
      bank.deposit("10/01/2023", 1000);

      const bankStatement = new BankStatement;
      bankStatement.addTransaction(bank); 

      expect(bankStatement.statement()).toEqual("date || credit || debit || balance\n10-01-2023 || 1000.00 || || 1000.00");

    });

    it("takes a withdrawal from the bank and returns data formatted on a new line after the headings", () => {

      const bank = new Bank;
      bank.withdrawal("14/01/2023", 500);

      const bankStatement = new BankStatement;
      bankStatement.addTransaction(bank); 

      expect(bankStatement.statement()).toEqual("date || credit || debit || balance\n14-01-2023 || || 500.00 || -500.00");
    });
  });
});