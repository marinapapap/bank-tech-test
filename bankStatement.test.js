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

    it("takes two deposits from the bank, returns formatted data with the total balance calculated on each line of the statement", () => {

      const bank = new Bank;
      bank.deposit("10/01/2023", 1000);
      const bank2 = new Bank;
      bank2.deposit("13/01/2023", 2000);

      const bankStatement = new BankStatement;
      bankStatement.addTransaction(bank); 
      bankStatement.addTransaction(bank2); 

      expect(bankStatement.statement()).toEqual("date || credit || debit || balance\n13-01-2023 || 2000.00 || || 3000.00\n10-01-2023 || 1000.00 || || 1000.00");

    });

    it("takes two deposits and a withdrawal from the bank, returns formatted data with the total balance calculated on each line of the statement", () => {

      const bank = new Bank;
      bank.deposit("10/01/2023", 1000);
      const bank2 = new Bank;
      bank2.deposit("13/01/2023", 2000);
      const bank3 = new Bank;
      bank3.withdrawal("14/01/2023", 500);

      const bankStatement = new BankStatement;
      bankStatement.addTransaction(bank); 
      bankStatement.addTransaction(bank2); 
      bankStatement.addTransaction(bank3); 

      expect(bankStatement.statement()).toEqual("date || credit || debit || balance\n14-01-2023 || || 500.00 || 2500.00\n13-01-2023 || 2000.00 || || 3000.00\n10-01-2023 || 1000.00 || || 1000.00");
      
    });
  });
});