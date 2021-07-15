
function createNewUser() {
    return {
        firstName: prompt('Enter your name'),
        lastName: prompt('Enter your lastname'),
        dateBirth: prompt('Enter your birthday (dd.mm.yyyy)'),
        getLogin() {
            return (this.firstName[0] + this.lastName).toLowerCase();
        },
        getAge() {
            const now = Date.now();
            const year = this.dateBirth.slice(6,10);
            const month = this.dateBirth.slice(3,5);
            const day = this.dateBirth.slice(0,2);
            const changeDateBirth = new Date(`${year},${month},${day}`)
            const calcDateBirth = now - changeDateBirth;
            return new Date(calcDateBirth).getFullYear() - 1970;
        },
        getPassword() {
            return this.firstName[0].toUpperCase() + this.lastName.toLowerCase() + this.dateBirth.slice(6, 10)
        }
    }
}
const newUser = createNewUser();
console.log(newUser.getLogin());
console.log(newUser.getAge());
console.log(newUser.getPassword());



