
const person={
    name:'Vivek',
    age:100,
    phone:'9939399393',
    email:'vivek@personal.com'
};

//now this person is joing a compnay as an employee
// we will get a new set of properties that includes : id,salary, email
//how do I create a new object employee with all prorperties from person and then add id, phone,email

//ES5

const e1={
    id:1,   //employee details

    name:person.name, 
    age:person.age,
    phone:person.phone,
    //email:person.email,

    salary:1, //employee details
    email: 'vivek@company.com'

};

//ES2015
const e2={
    id:1,
    ...person,  //everyhing from person inlcuding unwanted person.email
    salary:1,   
    email:'vivek@company.com' //overwrites the earlier email obtained through spread
}