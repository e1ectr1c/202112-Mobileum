

//step1: object is created
var p=new Object();

//step 2A: object can have properties
p.name='Shivanshi';
p.age=15;

//step 2B: object can have behaviors
//Remember: even functions are object/type
function showPerson(person){
    console.log('name',this.name);
    console.log('age',this.age);
}
p.show=showPerson;
//step 3: use object
p.show();

var name='Mr Global';

showPerson();
