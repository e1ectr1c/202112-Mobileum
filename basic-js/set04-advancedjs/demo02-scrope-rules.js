

function printer(jobId, times){

    for(i=1;i<=times;i++)
        console.log(jobId, i);
}

function printManager(workerCount, workCount){
    for(i=1;i<=workerCount;i++)
        printer(i, workCount);
}

//printManager(3, 5);

printManager(5, 3);
