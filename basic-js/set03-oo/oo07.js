
function createOrganization(name){
    var organization=new Object();
    var id=0;
    organization.name=name;
    organization.employees=[];
    organization.addEmployee=function(employee){
        employee.organization=this;
        employee.id=++id;
        this.employees.push(employee);
    }
    
    return organization;   
};

function Employee(name,salary){
    //object not created here
    //we are initializing 'this'. What is this?
    this.name=name;
    this.salary=salary;
    this.show=function(){
        console.log("id",this.id);
        console.log('name',this.name);
        console.log('organization',this.organization.name);
        console.log('salary',this.salary);
        console.log();
    }
    this.work=function(){
        console.log(this.name+" works in "+this.organization.name);
    }
    //object not returned
}


let organization=createOrganization("Mobilum");
let anand=new Employee("Anand",50000); //what is this?

organization.addEmployee(anand);

anand.work();
