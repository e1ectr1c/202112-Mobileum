const {createApp} = require('./src/app');
const {getEnv}=require('./src/utils/env');


const start=async()=>{

    
    const app=await createApp(__dirname );
    const port=getEnv("PORT",5000);
    const server=app.listen(port,_=>{ 
        console.log(`server started on : http://localhost:${port}`);
    });

    server.on('error',error=>console.error('error:',error.message));

}
console.log('current environment:', process.env.NODE_ENV );

start();