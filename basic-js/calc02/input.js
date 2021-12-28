function getNumberInput(id){
    var element=document.getElementById(id);

    return {
        get: function(){
            return + element.value;
        },
        clear:function(){
            element.value='';
        },
        set:function(value){
            element.value=value;
        },
        getRawValue:function(){
            return element.value;a
        },
        isValid:function(){
            return !isNaN(element.value);
        }

    }
}