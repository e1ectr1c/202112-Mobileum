function showPerson(person){
    console.log('name',person.name);
    console.log('age',person.age);
}

//step1: object is created
var p=new Object();

//step 2A: object can have properties
p.name='Shivanshi';
p.age=15;

//step 2B: object can have behaviors
//Remember: even functions are object/type
p.show=showPerson;


//step 3: use object
p.show(p);

