
let i=0;
const iid=setInterval(()=>{
    i++;    
    console.log('hello world');
    if(i==10)        
        clearInterval(iid);
}, 2000);


