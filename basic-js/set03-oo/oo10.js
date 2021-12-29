
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

function teachDriving(person,veichle){
    if(person.age<18)
        return console.log( person.name+" you need to wait for "+(18-person.age)+" years to learn driving!");

    if(!person.drivingLicenses){
        person.drivingLicenses=[veichle];

        person.drive=function (veichle){
            if(this.drivingLicenses.indexOf(veichle)>=0)
                console.log(this.name+" is driving "+veichle);
            else
                console.log(this.name+" is not licensed to drive "+veichle);
        };
    } else
        person.drivingLicenses.push(veichle);

    console.log(person.name+" now your are licenced to drive "+veichle);
}


var prabhat=new Person("Prabhat",40);
var shivanshi=new Person("Shivanshi",15);

teachDriving(prabhat,'car');
teachDriving(prabhat,'bike');
teachDriving(shivanshi,'bike');

prabhat.drive('car');
prabhat.drive('bike');
prabhat.drive('truck');
shivanshi.drive('car'); //Error



