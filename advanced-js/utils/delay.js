
// module.exports= (time)=>{

//     return new Promise((resolve, reject)=>{
//         setTimeout( ()=> resolve(), time);
//     });
// };


module.exports =  time => new Promise(resolve => setTimeout(resolve,time));

