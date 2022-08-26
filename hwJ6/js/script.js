function createNewUser () {
    return {
        firstName: prompt('Enter your name'),
        lastName: prompt('Enter your last name'),
        birthday: prompt('Enter your date of birth dd.mm.yyyy'),
        getLogin: function () {
            return (this.firstName[0] + this.lastName).toLowerCase();
        },
        getAge() {
            const now = Date.now();
            const year = this.birthday.slice(6,10);
            const month = this.birthday.slice(3,5);
            const day = this.birthday.slice(0,2);
            const changeDateBirth = new Date(`${year},${month},${day}`)
            const calcDateBirth = now - changeDateBirth;
            return new Date(calcDateBirth).getFullYear() - 1970;
        },
        getPassword() {
            return this.firstName[0].toUpperCase() + this.lastName.toLowerCase() + this.birthday.slice(6, 10)
        }
    };
}
const user = createNewUser();
console.log(user.getLogin());
console.log(user.getAge());
console.log(user.getPassword());