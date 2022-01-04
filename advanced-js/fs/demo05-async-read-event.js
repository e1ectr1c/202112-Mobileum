
const fs=require("fs"); //note: we don't use ./ or ../ prefix here

//console.log('fs',fs);

 const events=fs.createReadStream('sample-large.txt');

 let fileContent='';

function readBuffer(buffer){  //when file reads some data. called multiple times
    const data=buffer.toString();
    process.stdout.write(`[${Math.floor(data.length/1024)}K] `);
    fileContent+=data;
}

function handleError(error){
    console.error("ERROR READING FILE:",error.message);
};

function processData(){
    process.stdout.write('file read\n-----------------\n\n');
    process.stdout.write('total size is '+fileContent.length);
}
 

 events    
    .on("data", readBuffer )
    .on("end",processData)
    .on("error", handleError ); 

 //you reach here before readFile finishes it's work
console.log('please wait while we read the file...');

