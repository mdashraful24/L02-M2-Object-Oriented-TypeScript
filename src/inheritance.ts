class Person {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
        this.name = name;
        this.age = age;
        this.address = address;
    };

    geSleep(numberOfHours: number) {
        console.log(`${this.name}, age: ${this.age}, address: ${this.address}, ${numberOfHours} ghonta pore pore ghumai.`);
    };
}

class Student extends Person { };


class Teacher extends Person {
    designation: string;

    constructor(name: string, age: number, address: string, designation: string) {

        super(name, age, address)

        this.designation = designation;
    };

    takeClass(numberOfHours: number) {
        console.log(`${this.name}, designation: ${this.designation} age: ${this.age}, address: ${this.address}, ${numberOfHours} class nei.`)
    }
};

const student = new Student("Fakibaz", 17, "Dhaka");

const teacher = new Teacher("Mr. X", 17, "Dhaka", "Lecturer");

student.geSleep(15);
teacher.takeClass(12);
