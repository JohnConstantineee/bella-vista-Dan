const employee = {
    name: 'Vitalii',
    surname: 'Klichko'
}
// employee.age = 25;
// employee.salary = 2500;
// console.log(employee);

const employeeWithAnotherObj = {...employee, age: 25, salary: 2500}
console.log(employeeWithAnotherObj);
