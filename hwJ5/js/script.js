function createNewUser () {
    return {
        firstName: prompt('Enter your name'),
        lastName: prompt('Enter your last name'),
        getLogin: function () {
            return (this.firstName[0] + this.lastName).toLowerCase();
        }
    };
}
const user = createNewUser();
console.log(user.getLogin());