// ! Encapsulation, the 4th pillar of OOP


class BankAccount {
    readonly userId: number;
    userName: string;
    private userBalance: number;
    protected userAccountNo: string;

    constructor(userId: number, userName: string, userBalance: number, userAccountNo: string) {
        this.userId = userId;
        this.userName = userName;
        this.userBalance = userBalance;
        this.userAccountNo = userAccountNo;
    };

    private addBalance(balance: number) {
        this.userBalance = this.userBalance + balance;
    };

    callHiddenMethod(amount: number) {
        this.addBalance(amount);
    }
};

class StudentBankAccount extends BankAccount {
    stuAccount() {
        this.userAccountNo;
    }
}

const jikuBhaierAccount = new BankAccount(1234253, "Mr. Jiku", 1000, "AC/12378945674");

jikuBhaierAccount.callHiddenMethod(500);

console.log(jikuBhaierAccount);
