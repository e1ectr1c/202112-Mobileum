
class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    move(start,end){
        console.log( `${this.name} moves from ${start} to ${end}` );
    }
}

class Employee extends Person{
    constructor(id, name, age, salary){
        super(name,age);
        this.id=id;
        this.salary=salary;
    }
    work(){
        console.log(`${this.name} works as employee#${this.id}`);
    }
}

const emp=new Employee(1,'Vivek',100,100);

emp.move('home','office');
emp.work();
