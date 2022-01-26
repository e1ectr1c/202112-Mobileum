import React,{useState} from 'react';

const Selector = ({id, label,value,onChange, datalist,valueExtractor, labelExtractor})=>{
    //TODO: Initialize Here
    let [_value,changeValue]=useState(value);
    let [_label,changeLabel]=useState('');




    if(!labelExtractor)
        labelExtractor =valueExtractor;

    const handleChange=(e)=>{
        _value= e.target.value;

        let object= datalist.find(o=>{
            //console.log('o',o,_value);
            if(!o) return false;
            return valueExtractor(o)===_value;
        });
        let label= labelExtractor(object);
        changeLabel(label);
        changeValue(_value);
        if(onChange) 
            onChange(id,_value,label);

    }

    return (
        <div className='Selector'>
            <label htmlFor={id} className='form-label'>{label}</label>
            <input value={_value} onChange={handleChange} type="text" id={id} list={`${id}_data`} className="form-control" />
            <datalist id={`${id}_data`}>
                {datalist.map(data=>(
                    <option key={valueExtractor(data)} value={valueExtractor(data)}>
                        {labelExtractor(data)}
                    </option>
                ))}
            </datalist>
            
        </div>
    );
}

export default Selector;