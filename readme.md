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

## Class Framework

```javascript

class Bank {

  constructor() {

  }

  deposit(date, value) {

  }

  withdrawal(date, value) {
  
  }

  transaction() {
    
  }

}

class BankStatement {

  constructor() {
   
  }

  addTransaction(transaction) {
  
  }

  statement() {
    
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
    return ["10-01-2023", 1000.00, ""];
  };
};
const bankStatement = new BankStatement;
bankStatement.addTransaction(bankMock); 
banStatement.statement() => "date || credit || debit || balance\n10-01-2023 || 1000.00 || || 1000.00"

const bankMock = { 
  transaction() {
    return ["14-01-2023", "", 500.00];
  };
};
const bankStatement = new BankStatement;
bankStatement.addTransaction(bankMock); 
banStatement.statement() => "date || credit || debit || balance\n14-01-2023 || 500.00 || || -500.00"

// integrated tests

const bank = new Bank;
bank.deposit("10/01/2023", 1000);
const bankStatement = new BankStatement;
bankStatement.addTransaction(bank); 
bankStatement.statement() => "date || credit || debit || balance\n10-01-2023 || 1000.00 || || 1000.00"

const bank = new Bank;
bank.withdrawal("14/01/2023", 500);
const bankStatement = new BankStatement;
bankStatement.addTransaction(bank); 
bankStatement.statement() => "date || credit || debit || balance\n14-01-2023 ||  || 500.00 || -500.00"

const bank = new Bank;
bank.deposit("10/01/2023", 1000);
const bank2 = new Bank;
bank2.deposit("13/01/2023", 2000);
const bankStatement = new BankStatement;
bankStatement.addTransaction(bank); 
bankStatement.addTransaction(bank2); 
bankStatement.statement() => "date || credit || debit || balance\n13-01-2023 || 2000.00 || || 3000.00\n10-01-2023 || 1000.00 || || 1000.00"

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
bankStatement.statement() => "date || credit || debit || balance\n14-01-2023 || || 500.00 || 2500.00\n13-01-2023 || 2000.00 || || 3000.00\n10-01-2023 || 1000.00 || || 1000.00"

```

                                                                

