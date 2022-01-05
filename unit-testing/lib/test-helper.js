

function asyncAssert(jestCallback,userFunction){

    return function(...params){

        try{
            userFunction(...params);
            jestCallback();
        } catch(ex){
            jestCallback(ex);
        }
    
    }
}




module.exports = {
    asyncAssert: asyncAssert
};