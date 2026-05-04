// ! Type guard using instanceof

// type guard or type narrowing

// ? instanceof >>> normal object >>> jokhon kono class theke normal object make kora hoy tokhon ta oi class er instanceof bole


class Person {
    name: string;

    constructor(name: string) {
        this.name = name;
    };

    getSleep(numOfHours: number) {
        console.log(`${this.name} doinik ${numOfHours} ghonta ghumai.`);
    };
};

class Student extends Person {
    constructor(name: string) {
        super(name);
    };

    doStudy(numOfHours: number) {
        console.log(`${this.name} doinik ${numOfHours} ghonta study kore.`)
    };
};

class Teacher extends Person {
    designation: string;

    constructor(name: string, designation: string) {
        super(name);
        this.designation = designation;
    };

    takeClass(numOfHours: number) {
        console.log(`${this.name} designaton ${this.designation} doinik ${numOfHours} ghonta class nei.`)
    };
};

// function guard

const isStudent = (user: Person) => {
    return user instanceof Student;
};

const isTeacher = (user: Person) => {
    return user instanceof Teacher;
};

const getUserInfo = (user: Person) => {
    if (isStudent(user)) {
        user.doStudy(10);
    } else if (isTeacher(user)) {
        user.takeClass(12);
    } else {
        user.getSleep(6);
    }
};

const student1 = new Student("Mr. Student");
const teacher1 = new Teacher("Mr. Teacher", "Senior Lecturer");
const person1 = new Person("Mr. Fakibaz");

getUserInfo(person1);
