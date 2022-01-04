/*
1. create a new folder -->temp
2. copy sample.txt to temp folder
3. see all the files in the temp Folder
4. print the content of files in the temp Folder
5. delete the temp folder after 10 seconds;

*/
const tempDirName = "temp";
const sourceFileSpecs = "sample.txt";
//const delayTime = 10; //seconds

const fs = require("fs").promises;
const delay=require('../utils/delay');


const task= async ()=>{

    try{
        
        await fs.mkdir(tempDirName);
        
        await fs.copyFile(sourceFileSpecs,`${tempDirName}/${sourceFileSpecs}`);
        
        const files= await fs.readdir(tempDirName);
        
        for(const file of files){
            console.log('checking out file',file);
            const fileName=`./${tempDirName}/${file}`;
            var data=await fs.readFile(fileName);
            console.log(fileName,data.toString().length);
        }
        console.log('will remove the temp folder after 10 seconds');
        await delay(10000);
        await fs.rmdir(tempDirName,{ recursive: true, force: true });
        

    } catch(error){
        console.log('error:',error.message);
    }


}

task()
    .then(()=>console.log('all jobs done...'));

//we reach here immediately
console.log('wait while we run our jon');