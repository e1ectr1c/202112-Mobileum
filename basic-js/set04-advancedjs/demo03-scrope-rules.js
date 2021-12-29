

function printer(jobId, times){

    for(var i=1;i<=times;i++)
        console.log(jobId, i);
}

function printManager(workerCount, workCount){
    for(var i=1;i<=workerCount;i++)
        printer(i, workCount);
}

console.log('printManager(3,5)');
printManager(3, 5);
console.log('\nprintManager(5,3)');
printManager(5, 3);
