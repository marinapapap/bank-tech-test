const BankStatement = require('./bankStatement');
const Bank = require('./bank');

describe("BankStatement class", () => {
  describe("unit tests", () => {
    it("Statement() returns only the statement headings", () => {

      const bankStatement = new BankStatement;

      expect(bankStatement.statement()).toEqual("date || credit || debit || balance");

    });

    it("Unit test included mock of Bank class. Given a deposit, a formatted statement is returned", () => {

      const bankMock = { 
        transaction() {
          return ["10-01-2023", 1000, ""];
        }
      };

      const bankStatement = new BankStatement;
      bankStatement.addTransactionWithCurrentBalance(bankMock); 
      
      expect(bankStatement.statement()).toEqual("date || credit || debit || balance\n10-01-2023 || 1000.00 || || 1000.00");

    });

    it("Unit test included mock of Bank class. Given a withdrawal, a formatted statement is returned", () => {

      const bankMock = { 
        transaction() {
          return ["14-01-2023", "", 500.00];
        }
      };

      const bankStatement = new BankStatement;
      bankStatement.addTransactionWithCurrentBalance(bankMock); 

      expect(bankStatement.statement()).toEqual("date || credit || debit || balance\n14-01-2023 || || 500.00 || -500.00");
    });
  });

  describe("integrated tests", () => {
    it("takes a deposit from the bank class and returns data formatted on a new line after the headings", () => {
      
      const bank = new Bank;
      bank.deposit("10/01/2023", 1000);

      const bankStatement = new BankStatement;
      bankStatement.addTransactionWithCurrentBalance(bank); 

      expect(bankStatement.statement()).toEqual("date || credit || debit || balance\n10-01-2023 || 1000.00 || || 1000.00");

    });

    it("takes a withdrawal from the bank and returns data formatted on a new line after the headings", () => {

      const bank = new Bank;
      bank.withdrawal("14/01/2023", 500);

      const bankStatement = new BankStatement;
      bankStatement.addTransactionWithCurrentBalance(bank); 

      expect(bankStatement.statement()).toEqual("date || credit || debit || balance\n14-01-2023 || || 500.00 || -500.00");

    });

    it("takes two deposits from the bank, returns formatted data with the total balance calculated on each line of the statement", () => {

      const bank = new Bank;
      bank.deposit("10/01/2023", 1000);
      const bank2 = new Bank;
      bank2.deposit("13/01/2023", 2000);

      const bankStatement = new BankStatement;
      bankStatement.addTransactionWithCurrentBalance(bank); 
      bankStatement.addTransactionWithCurrentBalance(bank2); 

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
      bankStatement.addTransactionWithCurrentBalance(bank); 
      bankStatement.addTransactionWithCurrentBalance(bank2); 
      bankStatement.addTransactionWithCurrentBalance(bank3); 

      expect(bankStatement.statement()).toEqual("date || credit || debit || balance\n14-01-2023 || || 500.00 || 2500.00\n13-01-2023 || 2000.00 || || 3000.00\n10-01-2023 || 1000.00 || || 1000.00");

    });
  });
});