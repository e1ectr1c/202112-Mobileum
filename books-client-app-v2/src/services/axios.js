import axios from 'axios';

const baseUrl="http://localhost:4000/api";

const getHttp= async ()=>{

    let instance= await axios.create({
        baseURL: baseUrl   
    });

    return instance;
}

export default getHttp;