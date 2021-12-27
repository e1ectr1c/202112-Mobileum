function plus(x,y){
    return x+y;
}
let add= plus;

console.log('typeof plus',typeof plus,plus.name);
console.log('typeof add',typeof add,add.name);

var minus = function substract(x,y){
    return x-y;
};
console.log('typeof minus', typeof minus,minus.name);
console.log('typeof substract', typeof substract,substract.name);
