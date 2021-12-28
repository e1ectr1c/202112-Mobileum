
function Person(name,age){
    this.name=name;
    this.age=age;
    this.eat=function(food){
        console.log(this.name+' eats '+food);
    }
   
};

var prabhat=new Person("Prabhat",40);

Person.prototype.move=function(start,end){
    console.log(this.name+" goes from "+start+" to "+end );
}
var shivanshi=new Person("Shivanshi",15);


