/*
1. create a new folder -->temp
2. copy sample.txt to temp folder
3. see all the files in the temp Folder
4. print the content of files in the temp Folder
5. delete the temp folder after 10 seconds;

*/
const tempDirName = "temp";
const sourceFileSpecs = "sample.txt";
const delay = 10; //seconds

const fs = require("fs");

fs.mkdir(tempDirName, (error) => {
    // success or failure, now we have our directory
    fs.copyFile(sourceFileSpecs, tempDirName + "/" + sourceFileSpecs, fs.constants.COPYFILE_EXCL, (error) => {
        if (error) {
            console.log('file copy error:', error.message);
        }

        fs.readdir(tempDirName, (error, files) => {
            if (error) {
                 console.error("error reading directory:", error.message);
            } else {
                for(const file of files){
                    fs.readFile(`./${tempDirName}/${file}`,(error,data)=>{
                        console.log(data.toString());
                    });
                }
            }
            setTimeout(()=>{

                fs.rmdir(tempDirName,{ recursive: true, force: true }, error=>{

                    if(error){
                        console.log('error removing folder:',error.message);
                    } else{
                        console.log('all done');
                    }

                })

            },10000)
        })
    });
});