
const filterBy = (arg,type) => {
    return console.log(arg.filter(item => typeof item !== type));
}
filterBy(['hello', 'world', 23, '23', null], "string");