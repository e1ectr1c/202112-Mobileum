import React,{useState} from 'react';

const LabeledInput = ({ id,value,label,help,error,renderComponent,placeholder,onChange,type="text" }) => {
    //TODO: Initialize Here

    const [_value,updateValue]= useState(value);

    if(!label) label =id;
    if(!placeholder) placeholder =label;
    if(!help) help=label;

    const handleValueChange=(e)=>{
        //  console.log(e.target.id, e.target.value);
          updateValue(e.target.value);
          onChange(id,e.target.value);
      }

    let component=null;

    const inputProps={       
        className:"form-control",                
        id,
        value:_value,
        onChange:handleValueChange,
        placeholder
    };

    if(renderComponent){
       component= renderComponent(inputProps);
    } else{
        component=<input type="text" {...inputProps} />
    }


    

    return (
        <div className="form-group">
            <label htmlFor="{id}">{label}</label>
            {component}
            <small id={`${id}_help`} className="form-text text-danger">{error}</small>
        </div>
    );
}

export default LabeledInput;


{/* <input
                type={type} 
                className="form-control"  aria-describedby="emailHelp"
                id={id}  
                value={_value}
                onChange={handleValueChange}
                placeholder={placeholder} /> */}