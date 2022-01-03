

const cook=(clientId, orders, cookingDone)=>{

    const serve={
        clientId,
        items:[]
    };
    console.log(`cook received order from client ${clientId} for ${orders}`);
    for(let order of orders){        
        for(let i=0;i<1000000000;i++)
            ; //this is the time taken to prepare the food. represents long runnning synchronous task

        console.log(`prepared ${order} for client ${clientId}...`);
        serve.items.push(order);
    }
    cookingDone(serve);

}

const consumeFood=(serve)=>{
    console.log(`customer ${serve.clientId} got ${serve.items}`);
}

cook('Vivek', ['chicken soup','chicken tikka', 'butter chiken', 'roti'], consumeFood);
cook('Sanjay', ['sandwitch'], consumeFood);



const waiter=(clientId, orders, serveDone)=>{
        console.log(`waiter received order from client ${clientId} for : ${orders.join(', ')}`);
        let serviced=false;
        cook(clientId, orders, (serve)=>{ 
            console.log(`waiter received finished order from cook for client ${serve.clientId} : ${serve.items}`);
            setTimeOut(()=>{
                    serviceDone(serveDone); 
                    serve=true;
            }, 500);
        }); 
        
        while(!serve)
            ; //wait to serve one client
}





