
const fs=require("fs"); //note: we don't use ./ or ../ prefix here

//console.log('fs',fs);
try{

    const buffer= fs.readFileSync('samplexxx.txt'); //get a buffer of data

    const data= buffer.toString(); //covert a buffer to plain text

    console.log('data',data);

}catch(error){
    console.log('error:',error.message);
    console.log('normal shutdown');
}