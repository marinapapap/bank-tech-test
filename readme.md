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

To run the program, open the node REPL using the following command:

```
node
```

Then write the following in the node REPL:

```
> const Bank = require('./bank');
> const BankStatement = require('./bankStatement');
```

You should now be able create instances of both classes, within the REPL, to add data and return a bank statement. Once done, you'll want to log the output to the console.

```
> console.log(bankStatement.statement());
```

## Class Framework

```javascript

class Bank {

  constructor() {
    // the Bank class acts as the "Bank", holding the records of all transactions
  }

  deposit(date, value) {
    // when a value is deposited, the arguments are placed in an object with correct keys
    // the current balance is calculated and also placed in the object
  }

  withdrawal(date, value) {
    /// when a value is withdrawn, the arguments are placed in an object with correct keys
    // the current balance is calculated and also placed in the object
  }

  returnRecords() {
    // this function returns the "records", or array of objects, that are stored in the Bank
  }

}

class BankStatement {

  constructor() {
    // the BankStatement class takes the Bank records and formats them into one bank statement
  }

  addRecords(records) {
    // a record is added as an instance of the Bank class
    // this is then stored in the BankStament class
    // delegating to the updateBankStaementData(record) method to update the data stored
  }

  updateBankStaementData(record) {
    // takes one iteration of the records from the Bank class and stores it in
    // the instance variable bankStatementData(record)
  }

  convertToDecimals(record) {
    // converts any depoist or withdrawal value to appear with 2 decimal places
  }

  statement() {
    // the accumalated records are formatted to print as a bank statement
  }

}

```






                                                                

