

//const component= React.createElement('h1',null,'Wow! React is working!!!');

//<a href='/' style="text-decoration:none;color:white" 
//    class='nav'>Home</a>

const component=React.createElement("a",{
    href:"/",
    style:{
        textDecoration:"none",
        textTransform:"uppercase"
    },
    className:"nav"
},"Home");


const placeholder= document.getElementById("placeholder")

ReactDOM.render(component, placeholder);