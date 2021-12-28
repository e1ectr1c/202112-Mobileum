function showPerson(person){
    console.log('name',person.name);
    console.log('age',person.age);
    console.log();
}



var p1=new Object();
p1.name='Shivanshi';
p1.age=15;
showPerson(p1);

var p2= {} ; //same as new Object();
p2.name="Sanjay";
p2.age=40;
showPerson(p2);

var p3 = {
    name:'Vivek', 
    age:100
};
showPerson(p3);


var p4 = { name:'Prabhat' }; //JSON Notation
p4.age=40; //object notation
p4['email']='prabhat@gmail.com'; //dictionary Notation

showPerson(p4);
console.log('email',p4.email);

