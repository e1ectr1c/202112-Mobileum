

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



const waiter=(clientId, orders, serveDone)=>{
        console.log(`waiter received order from client ${clientId} for : ${orders.join(', ')}`);
        //waiter will send the order after sometime
        setTimeout(()=>{
            //order given to the cook
            cook(clientId, orders, (serve)=>{

                //order received from the cook
                console.log(`waiter serving for  ${serve.clientId} : ${serve.items}...`);
                //cook will serve order after 500ms of receiving
                setTimeout(()=>serveDone(serve),500);
            });
        },500); 

        //waiter may submit the order to cook after a while
        //this time can be used for taking other order
       
}



//Client Logic: interacts with the waiter
const consumeFood=(serve)=>{
    console.log(`customer ${serve.clientId} got ${serve.items}`);
}

waiter('Vivek', ['chicken soup','chicken tikka', 'butter chiken', 'roti'], consumeFood);
waiter('Sanjay', ['sandwitch'], consumeFood);



