
const fs=require("fs"); //note: we don't use ./ or ../ prefix here
const promisify=require("../utils/promisify");


let readFile= promisify(fs.readFile);

const printFile=async(fileName)=>{
    try{
        const buffer= await readFile(fileName);
        const data= buffer.toString(); //covert a buffer to plain text
        console.log('\n\ndata:',data.length);
    }catch(error){
        console.error(error.message)
    }
}

printFile('sample-large.txt');    
console.log('please wait while we read the file...');

