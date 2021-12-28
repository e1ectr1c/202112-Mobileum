
//we created an object
var p=new Object();

//we have an object without 
//any specific property or behavior

p.name='Shivanshi';
p.age=15;

function showPerson(person){
    console.log('name',person.name);
    console.log('age',person.age);
}

showPerson(p);