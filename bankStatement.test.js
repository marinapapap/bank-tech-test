const BankStatement = require('./bankStatement');
const Bank = require('./bank');

describe("BankStatement class", () => {
  describe("unit tests", () => {
    it("Statement() returns only the statement headings", () => {

      const bankStatement = new BankStatement;

      expect(bankStatement.statement()).toEqual("");

    });

    it("Unit test included mock of Bank class. Given a deposit, a formatted statement is returned", () => {

      const bankMock = { 
        returnRecords() {
          return [{ date: "10-01-2023", deposit: 1000, withdrawal: "", balance: 1000 }];
        }
      };

      const bankStatement = new BankStatement;
      bankStatement.addRecords(bankMock); 
      
      expect(bankStatement.statement()).toEqual("date || credit || debit || balance\n10-01-2023 || 1000.00 || || 1000.00");

    });

    it("Unit test included mock of Bank class. Given a withdrawal, a formatted statement is returned", () => {

      const bankMock = { 
        returnRecords() {
          return [{ date: "14-01-2023", deposit: "", withdrawal: 500, balance: -500 }];
        }
      };

      const bankStatement = new BankStatement;
      bankStatement.addRecords(bankMock); 

      expect(bankStatement.statement()).toEqual("date || credit || debit || balance\n14-01-2023 || || 500.00 || -500.00");
    });
  });

  describe("integrated tests", () => {
    it("adds a deposit from the bank class and returns data formatted on a new line after the headings", () => {
      
      const bank = new Bank;
      bank.deposit("10/01/2023", 1000);

      const bankStatement = new BankStatement;
      bankStatement.addRecords(bank); 

      expect(bankStatement.statement()).toEqual("date || credit || debit || balance\n10-01-2023 || 1000.00 || || 1000.00");

    });

    it("adds a withdrawal from the bank and returns data formatted on a new line after the headings", () => {

      const bank = new Bank;
      bank.withdrawal("14/01/2023", 500);

      const bankStatement = new BankStatement;
      bankStatement.addRecords(bank); 

      expect(bankStatement.statement()).toEqual("date || credit || debit || balance\n14-01-2023 || || 500.00 || -500.00");

    });

    it("adds two deposits from the bank, returns formatted data with each transaction on a new line", () => {

      const bank = new Bank;
      bank.deposit("10/01/2023", 1000);
      bank.deposit("13/01/2023", 2000);

      const bankStatement = new BankStatement;
      bankStatement.addRecords(bank); 

      expect(bankStatement.statement()).toEqual("date || credit || debit || balance\n13-01-2023 || 2000.00 || || 3000.00\n10-01-2023 || 1000.00 || || 1000.00");

    });

    it("adds two deposits and a withdrawal, returns formatted data with each transaction of a new line", () => {

      const bank = new Bank;
      bank.deposit("10/01/2023", 1000);
      bank.deposit("13/01/2023", 2000);
      bank.withdrawal("14/01/2023", 500);

      const bankStatement = new BankStatement;
      bankStatement.addRecords(bank); 

      expect(bankStatement.statement()).toEqual("date || credit || debit || balance\n14-01-2023 || || 500.00 || 2500.00\n13-01-2023 || 2000.00 || || 3000.00\n10-01-2023 || 1000.00 || || 1000.00");

    });

    it("adds two deposits and a withdrawal, calls statement() twice", () => {

      const bank = new Bank;
      bank.deposit("10/01/2023", 1000);
      bank.deposit("13/01/2023", 2000);
      bank.withdrawal("14/01/2023", 500);

      const bankStatement = new BankStatement;
      bankStatement.addRecords(bank); 

      bankStatement.statement()

      expect(bankStatement.statement()).toEqual("date || credit || debit || balance\n14-01-2023 || || 500.00 || 2500.00\n13-01-2023 || 2000.00 || || 3000.00\n10-01-2023 || 1000.00 || || 1000.00");

    });

    it("adds two deposits and a withdrawal, calls statement(), then adds another withdrawal and calls statement again", () => {

      const bank = new Bank;
      bank.deposit("10/01/2023", 1000);
      bank.deposit("13/01/2023", 2000);
      bank.withdrawal("14/01/2023", 500);

      const bankStatement = new BankStatement;
      bankStatement.addRecords(bank); 

      bank.withdrawal("14/01/2023", 500);
      bankStatement.addRecords(bank); 

      bankStatement.statement()

      expect(bankStatement.statement()).toEqual("date || credit || debit || balance\n14-01-2023 || || 500.00 || 2000.00\n14-01-2023 || || 500.00 || 2500.00\n13-01-2023 || 2000.00 || || 3000.00\n10-01-2023 || 1000.00 || || 1000.00");

    });
  });
});