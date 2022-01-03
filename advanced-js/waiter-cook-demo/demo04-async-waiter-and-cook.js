

const cook=(clientId, orders, cookingDone)=>{
    const serve={
        clientId,
        items:[]
    };
    console.log(`cook received order from client ${clientId} for ${orders}`);
    let i=0;
    const iid= setInterval(()=>{
        if(orders.length===0){
            clearInterval(iid);
            return cookingDone(new Error('No order specified...')); //return error
        }

        let order= orders[i];
        console.log(`prepared ${order} for ${clientId}`);
        serve.items.push(order);
        i++;

        if(i===orders.length){
            //all orders are now ready
            clearInterval(iid);
            cookingDone(null, serve); //null indicates no error
        }

    },2000);   

}



const waiter=(clientId, orders, serveDone)=>{
        console.log(`waiter received order from client ${clientId} for : ${orders.join(', ')}`);
        //waiter will send the order after sometime
        setTimeout(()=>{
            //order given to the cook
            cook(clientId, orders, (error,serve)=>{
                if(error){
                    serveDone(error,{clientId});
                } else {
                    //order received from the cook
                    console.log(`waiter serving for  ${serve.clientId} : ${serve.items}...`);
                    //cook will serve order after 500ms of receiving
                    setTimeout(()=>serveDone(null,serve),500);
                }
                
            });
        },500); 

        //waiter may submit the order to cook after a while
        //this time can be used for taking other order
       
}



//Client Logic: interacts with the waiter
const consumeFood=(error,serve)=>{
    if(error)
        console.log('error in order for ',serve.clientId);
    else
        console.log(`customer  ${serve.clientId} consuming ${serve.items}`);
}

waiter('Vivek', ['chicken soup','chicken tikka', 'butter chiken', 'roti'], consumeFood);
waiter('shivanshi',[],consumeFood);
waiter('Sanjay', ['sandwitch','salad'], consumeFood);




