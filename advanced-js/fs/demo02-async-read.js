
const fs=require("fs"); //note: we don't use ./ or ../ prefix here

//console.log('fs',fs);

const buffer= fs.readFile('sample.txt', (error,buffer)=>{

    if(error){
        console.error('error:',error.message);
    } else{

        const data= buffer.toString(); //covert a buffer to plain text
        console.log('\n\ndata\n\n',data);
    }
}); 

//you reach here before readFile finishes it's work
console.log('please wait while we read the file...');

