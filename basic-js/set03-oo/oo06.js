
function createPerson(name,age){
    var p=new Object();
    p.name=name;
    p.age=age;
    p.eat=function(food){
        console.log(this.name+' eats '+food);
    }
    p.move=function(from,to){
        console.log(this.name+' goes from '+from+' to '+to);
    }

    return p;

}

var prabhat= createPerson('Prabhat',40);
var shivanshi= createPerson('Shivanshi',14);

prabhat.eat('Lunch');
shivanshi.eat('Maggi');
prabhat.move('home','office');
shivanshi.move('home','school');