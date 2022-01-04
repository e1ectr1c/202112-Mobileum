const fs = require('fs');


const sourceFileName='sample-large.txt';
const targetFileName='sample-large-copy.txt';


const readable= fs.createReadStream(sourceFileName);

const writeable= fs.createWriteStream(targetFileName);



//configure events
let temp='';
let firstTime=true;
let dataEnd=false;
let dataWritten=false;

readable
    .on('error',error=>console.error(error.message))
    .on('data', buffer=>{
        
        if(firstTime ||!dataWritten){
            process.stdout.write("W");
            writeable.write(buffer.toString()); //if you read first block data write to writeable
            firstTime=false; //next time we read data it should be handled differently
            dataWritten=true;
            temp='';
        } else{
            
            //we are not sure if writeable has finished writing the data.
            //now I can't call write
            //we will put this data in a 'temp'
            if(dataWritten)
                temp=buffer.toString();
            else
                temp+=buffer.toString();

                process.stdout.write(`C[${temp.length}]`);
            dataWritten=false;
            //we hope writeable writes it.
        }

    })
    .on('end',()=>{
        
    })
    .on('close',()=>{
        console.log('readable stream closed');
        dataEnd=true;
    });

writeable
    .on('error',error=>console.error(error.message))
    .on('drain',()=>{  //we are ready for more data
        process.stdout.write(` -[${temp.length}]`)
        if(temp.length>0){    
            process.stdout.write(`D[${temp.length}]`);        
            writeable.write(temp);
            dataWritten=true;
        } else{
            dataWritten=false;
        }
        if(dataEnd)
            writeable.close();
    })
    .on('close',()=>{
        console.log('writeable stream closed');
    });








