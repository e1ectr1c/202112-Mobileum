
function truthyMirror( value ){
    if(value) 
        console.log(value,'is true');
    else
        console.log(value,'is false');
};

truthyMirror(true);
truthyMirror(7>8);
truthyMirror(8);
truthyMirror(-1);
truthyMirror(0.001);

truthyMirror('hello world');
truthyMirror(new Date());
truthyMirror([1,2,3]);
truthyMirror([]);
truthyMirror(0);
truthyMirror('');
truthyMirror(null);
truthyMirror(undefined);
