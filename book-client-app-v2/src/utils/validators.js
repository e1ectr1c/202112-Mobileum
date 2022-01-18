
export const required=(value,model,message)=>{
    if(value===null || value===undefined || value=='')
        throw new Error(message||'Required');
};

export const isNumber=(value,model,message)=>{
    if(isNaN(value))
        throw new Error(message||'Invalid number');
};

export const range=(min,max)=>(value,model,message)=>{
    if(value<min || value>max)
        throw new Error(message||`value must be in range ${min}-${max}`);
}

export const stringLength=(min,max)=>(value,model,message)=>{
    const length=value.length;
    if(length<min || length>max)
        throw new Error(message||`Length must be in range ${min}-${max}`);
}

export const compare=( to )=>(value,model,message)=>{
    if(value!==model[to])
        throw new Error(message||`value doesn't match ${to}`);
}

export const email = (value,model,message) => {
    if(! String(value)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      ))
        throw new Error(message || 'Invalid Email Address');
};

export const regex=(exp)=>(value,model,message)=>{
    if(!value.match(exp))    
        throw new Error(message||  `value doesn't match pattern`);
}



