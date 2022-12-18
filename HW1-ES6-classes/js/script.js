class Employee {

    constructor(name,age,salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
    getName() { return this.name }
    getAge() { return this.age }
    getSalary() { return this.salary }

    setName(value) { this.name = value }
    setAge(value) { this.age = value }
    setSalary(value) { this.salary = value }
  }

class Programmer extends Employee {

    constructor(name,age,salary,lang) {
        super(name,age,salary);
        this.lang = lang;
    }

    getSalary() { return this.salary * 7 }
}

const nikita = new Programmer('Nikita',25,19000,['ua','eng','ru'])
const michael = new Programmer('Michael',24,19000,['ua','eng'])

console.log(nikita,michael);
console.log(nikita.getSalary());
console.log(michael.getSalary());