
const fs=require("fs"); //note: we don't use ./ or ../ prefix here
const promisify=require("../utils/promisify");


let readFile= promisify(fs.readFile);



readFile('sample-large.txt')
    .then(buffer=>{
        const data= buffer.toString(); //covert a buffer to plain text
        console.log('\n\ndata:',data.length);
    })
    .catch(error=>console.error(error.message));


//you reach here before readFile finishes it's work
console.log('please wait while we read the file...');

