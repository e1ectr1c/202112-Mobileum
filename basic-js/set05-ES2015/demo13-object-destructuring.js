
const person={
    name:'Vivek',
    age:100,
    phone:'9939399393',
    email:'vivek@personal.com'
};


//how to get name and phone of this person

//ES2015


const {name,phone} = person; //const name=person.name,phone=person.phone

console.log('name',name);
console.log('phone',phone);


//you can also change the variable name while extracing
//how to extract phone number as cellNumber


const {phone:cellNumber} = person; //const cellNumber=person.phone

console.log('cellNumber',cellNumber);

