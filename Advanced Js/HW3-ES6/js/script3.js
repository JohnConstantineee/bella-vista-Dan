const user1 = {
    name: "John",
    years: 30
};

const {name, years:age, isAdmin = false} = user1
alert(name);
alert(age);
alert(isAdmin);
