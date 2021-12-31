
const person={
    name:'Vivek',
    age:12,
    email:'vivek@gmail.com',
    phone:'9036084835'
};


function sendEmailES5( person ){
    console.log(  `sending email to ${person.email}` );
}

sendEmailES5(person);

function sendEmail({email}){
    console.log( `sending email to ${email}` );
}

sendEmail(person);