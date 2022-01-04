const fs = require('fs');


const sourceFileName='sample-large.txt';
const targetFileName='sample-large-pipe.txt';


const readable= fs.createReadStream(sourceFileName);

const writeable= fs.createWriteStream(targetFileName);


readable.pipe(writeable);


fs  
    .createReadStream('sample.txt')
    .pipe(process.stdout);   //stdout is a writeable
