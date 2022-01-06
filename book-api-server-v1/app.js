
const express= require('express');
const fs = require('fs').promises;
const path=require('path');


const dbPath=path.join(__dirname,'db','books.json');

let books=[];

const loadBooks=async()=>{

    const data=await fs.readFile(dbPath);
    books=JSON.parse(data);
    
}


loadBooks();

//creates an express app instance
const app = express();

//set up request handleReset

app.get('/api/books',(request,response)=>{

    response.send(books);

});

app.post('/api/books',(request,response)=>{
    response.send('adding a new book on the server');
});

app.get('/api/books/:isbn',(request,response)=>{

    const isbn=request.params.isbn; //we automatically get
    const book=books.find(b=>b.isbn==isbn);
    if(book)
        response.send(book);
    else
        response.status(404).send({message:'Book Not found',isbn});
});





//start listening to a port

const port=4000;

const server=app.listen(port, _=>{ 
    console.log(`server started: http://localhost:${port}`);
});

server.on('error',error=>console.error('error:',error.message))