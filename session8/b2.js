function validatePerson(obj) {
    var person = obj;
    return (typeof person.name === 'string' &&
        typeof person.age === 'number' &&
        typeof person.address === 'object');
}
var Person1 = {
    name: "phanh",
    age: 23,
    address: "ha noi",
};
console.log(validatePerson(Person1));
