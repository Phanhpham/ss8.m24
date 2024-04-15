type Person={
    name:string;
    age:number;
    address:object;
}
function validatePerson (obj:any):boolean{
    const person: Person & typeof obj = obj as Person & typeof obj;
    return(typeof person.name === 'string' &&
    typeof person.age === 'number' &&
    typeof person.address === 'object')

}

let Person1:object={
    name:"phanh",
    age:23,
    address:"ha noi",
}
console.log(validatePerson(Person1));