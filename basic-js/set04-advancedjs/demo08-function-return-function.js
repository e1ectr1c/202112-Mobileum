

function multiplier  (number){

    function multiply(value) {
        return number* value;
    }
   
    return multiply;
}

const m19=multiplier(19);  // multiply function
const m23=multiplier(23);  // multiply funciton

console.log('m19(5)',m19(5)); //95
console.log('m23(5)',m23(5)); //115

console.log('m19(7)',m19(7)); //133
console.log('m23(7)',m23(7)); //161





