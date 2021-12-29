
'strict mode'

var global='global variable'; //explict global

function f1(){
    var f1local= 'f1 local'; //explicit local variable
    console.log('in f1');
    console.log('global',global);
    console.log('f1local',f1local);
    global+=' modified by f1';
    f1local+=' modified by f1';
}

function f2(){
    f2local= 'f2 local'; //explicit local variable
    console.log('in f2');
    console.log('global',global);
    console.log('f2local',f2local);
}

function f3(){
    console.log('in f3');    
    console.log('global',global);
    console.log('f2local',f2local);
    console.log('f1local',f1local);
}

f1();
f2();
f3();