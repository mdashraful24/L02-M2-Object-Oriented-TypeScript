// ! Getter and Setter


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

    // addBalance(balance: number) {
    //     return this.userBalance = this.userBalance + balance;
    // };

    // * using setter

    set addBalance(amount: number) {
        this.userBalance = this.userBalance + amount;
    };


    // * using getter

    // getBalance() {
    //     return this.userBalance;
    // }

    get getBalance() {
        return this.userBalance;
    }
};

const jikuBhaierAccount = new BankAccount(1234253, "Mr. Jiku", 1000, "AC/12378945674");

// jikuBhaierAccount.addBalance(500);
// jikuBhaierAccount.addBalance(100);

jikuBhaierAccount.addBalance = 50;
jikuBhaierAccount.addBalance =100000;

console.log(jikuBhaierAccount);
