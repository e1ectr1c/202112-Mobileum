function createDisplay(id,wrapper){
    if(!wrapper)
        wrapper ="p";
    var prefix="<"+wrapper+">"; //<p>
    var suffix="</"+wrapper+">"; //</p>
    var element=document.getElementById(id);
    return {
        add: function(value){
            element.innerHTML+=(prefix+value+suffix);
        },
        clear: function(){
            element.innerHTML='';
        }

    }
}