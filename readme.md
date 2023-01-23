# Project: Bank Statement

## Acceptence Criteria

**Given** a client makes a deposit of 1000 on 10-01-2023  
**And** a deposit of 2000 on 13-01-2023  
**And** a withdrawal of 500 on 14-01-2023  
**When** she prints her bank statement  
**Then** she would see

```
date || credit || debit || balance
14/01/2023 || || 500.00 || 2500.00
13/01/2023 || 2000.00 || || 3000.00
10/01/2023 || 1000.00 || || 1000.00
```

## How To Run

To install the program and dependencies, run the following commands (assuming you have Node.js already installed):

```
git clone https://github.com/marinapapap/bank-tech-test.git

cd bank-tech-test

npm install
```

To run the tests, run the following command:

```
jest
```

To run the program, write the following in the node REPL:

```
> const Bank = require('./bank');
> const BankStatement = require('./bankStatement');
```

You should now be able create instances of both classes, within the REPL, to add data and return a bank statement. Once done, you'll want to log the output to the console.

```
> console.log(bankStatement.statement());
```

_A screenshot of the program being run in the node REPL can be found in the main directory._


## Class Framework

```javascript

class Bank {

  constructor() {
    // the Bank class acts as the "Bank"
  }

  deposit(date, value) {
    // when a value is deposited, the value is placed 2nd in an array
    // the date is always the first element of the array
  }

  withdrawal(date, value) {
    // when a value is withdrawn, the value is placed 3rd in an array
  }

  transaction() {
    // this function returns the "record", or array, that is stored in the Bank
  }

}

class BankStatement {

  constructor() {
    // the BankStatement class takes the Bank records and accumalates them into one formatted bank statement
  }

  addTransactionWithCurrentBalance(record) {
    // a record is added as an instance of the Bank class
    // this is then stored in the BankStament class 
    // with the current balance after this transaction
  }

  calculateCurrentBalance(record) {
    // depending on wether the record (array) has a value at the 2nd or 3rd postion 
    // will determine whether money is added or subtracted from the current balance
  }

  convertToDecimals(record) {
    // converts any numerical value to appear with 2 decimal places
  }

  statement() {
    // the accumalated records are formatted to print as a bank statement
  }

}

```

## Bank Class Test Examples

```javascript

const bank = new Bank();
bank.transaction() => [];

const bank = new Bank();
bank.deposit("13/01/2023", 1000);
bank.transaction() => ["13-01-2023", 1000, ""];

const bank = new Bank();
bank.withdrawal("13/01/2023", 500);
bank.transaction() => ["13-01-2023", "", 500];

```

## BankStatement Class Test Examples

```javascript

// unit tests

const bankStatement = new BankStatement;
bankStatement.statement() => "date || credit || debit || balance"

const bankMock = { 
  transaction() {
    return ["10-01-2023", 1000, ""];
  };
};
const bankStatement = new BankStatement;
bankStatement.addTransactionWithCurrentBalance(bankMock); 
bankStatement.statement() => "date || credit || debit || balance\n10-01-2023 || 1000.00 || || 1000.00"

const bankMock = { 
  transaction() {
    return ["14-01-2023", "", 500.00];
  };
};
const bankStatement = new BankStatement;
bankStatement.addTransactionWithCurrentBalance(bankMock); 
bankStatement.statement() => "date || credit || debit || balance\n14-01-2023 || ||  500.00 || -500.00"

// integrated tests

const bank = new Bank;
bank.deposit("10/01/2023", 1000);
const bankStatement = new BankStatement;
bankStatement.addTransactionWithCurrentBalance(bank); 
bankStatement.statement() => "date || credit || debit || balance\n10-01-2023 || 1000.00 || || 1000.00"

const bank = new Bank;
bank.withdrawal("14/01/2023", 500);
const bankStatement = new BankStatement;
bankStatement.addTransactionWithCurrentBalance(bank); 
bankStatement.statement() => "date || credit || debit || balance\n14-01-2023 ||  || 500.00 || -500.00"

const bank = new Bank;
bank.deposit("10/01/2023", 1000);
const bank2 = new Bank;
bank2.deposit("13/01/2023", 2000);
const bankStatement = new BankStatement;
bankStatement.addTransactionWithCurrentBalance(bank); 
bankStatement.addTransactionWithCurrentBalance(bank2); 
bankStatement.statement() => "date || credit || debit || balance\n13-01-2023 || 2000.00 || || 3000.00\n10-01-2023 || 1000.00 || || 1000.00"

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
bankStatement.statement() => "date || credit || debit || balance\n14-01-2023 || || 500.00 || 2500.00\n13-01-2023 || 2000.00 || || 3000.00\n10-01-2023 || 1000.00 || || 1000.00"

```




                                                                

