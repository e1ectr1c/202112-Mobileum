
const http=require('http');

function requestHandler(request,response){

    //request contains all request header parameters
    //console.log('request',request);

    let message=`${request.method} ${request.url} Welcomes You!`;
    if(request.url.startsWith('/time'))
        message=JSON.stringify({time:new Date().toLocaleTimeString()});
    else if(request.url.startsWith("/date"))
        message=JSON.stringify({date:new Date().toLocaleDateString()})

    //response is a writeable stream that sends information to the server

    response.write(message);
    response.end();

}


const server = http.createServer( requestHandler );

const port=4000;

server.on('error', error=>console.error('error:',error.message));

server.listen(port, success=>{

        console.log(`server started: http://localhost:${port}`);    
});


