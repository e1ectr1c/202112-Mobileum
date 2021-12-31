

const iid=setInterval(()=>{
    console.log('hello world');
}, 2000);


setTimeout(()=>{
    clearInterval(iid);
},20100);


