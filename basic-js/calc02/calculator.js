function createCalculator(){
    
    return {
        numbers:[],
        addNumber: function(number){
            if(!isNaN(number))
                this.numbers.push(number);
        },
        sum:function(){
            var result=0;
            for(var number of this.numbers)
                result+=number;

            return result;
        },
        average:function(){
            return this.sum()/this.numbers.length;
        },
        min:function(){
            var result=NaN;
            for(var number of this.numbers){
                if(isNaN(result)|| number<result) result=number;
            }
            return result;

        },
        clear:function(){
            this.numbers=[];
        }


    }


}