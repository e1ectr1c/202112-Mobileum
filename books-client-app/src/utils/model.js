import { useState } from 'react';

export class FieldInfo {
    constructor(value, ...validators) {
        this.value = value;
        this.validators = validators;
    }
}

export const validate = (schema, model) => {
    let errorCount = 0;
    const errors = {};
    for (let key in schema) {
        try {
            for (let validator of schema[key].validators) {
                validator(model[key], model);
                //all is well
            }
        } catch (error) {
            errorCount++;
            errors[key] = error.message;
        }

    }
    if (!errorCount)
        return null;
    else
        return errors;
};


export const useModel = (schema)=>{

    let _model = {};
    const[errors, setErrors] = useState(null);

    for (let key in schema) {
        let info = schema[key];
        if (info instanceof FieldInfo) {
            _model[key] = info.value;
        } else {
            _model[key] = info;
            schema[key] = new FieldInfo(info);
        }
    };
    const [model, setModel] = useState(_model);
    

    const updateModel = (id, value) => {
        console.log('updating model',id,value);
        const m = { ...model };
        m[id] = value;
        setModel(m);
        setErrors(validate(schema,m));
    }

    console.log('returning model',model);
    return [model,updateModel,errors,schema];

}


