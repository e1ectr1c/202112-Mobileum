
function Person(name,age){
    this.name=name;
    this.age=age;
    
   
};

Person.prototype.eat=function(food){
    console.log(this.name+' eats '+food);
}

Person.prototype.move=function(start,end){
    console.log(this.name+" goes from "+start+" to "+end );
}

function teachDriving(person){
    if(person.age<18)
        return console.log( person.name+" you need to wait for "+(18-person.age)+" years to learn driving!");

    person.drive=function (veichle){
        console.log(this.name+" is driving "+veichle);
    };

    console.log(person.name+" now your are licenced to drive");
}


var prabhat=new Person("Prabhat",40);
var shivanshi=new Person("Shivanshi",15);

teachDriving(prabhat);[]
teachDriving(shivanshi);

prabhat.drive('car');
shivanshi.drive('car');



