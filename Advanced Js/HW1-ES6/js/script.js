class Employee {

    constructor(name,age,salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
    get Name() { return this.name }
    get Age() { return this.age }
    get Salary() { return this.salary }

    set Name(value) { this.name = value }
    set Age(value) { this.age = value }
    set Salary(value) { this.salary = value }
  }

class Programmer extends Employee {

    constructor(name,age,salary,lang) {
        super(name,age,salary);
        this.lang = lang;
    }

    get Salary() { return this.salary * 3 }
}

const nikita = new Programmer('Nikita',25,19000,['ua','eng','ru'])
const michael = new Programmer('Michael',24,19000,['ua','eng'])

console.log(nikita,michael);







