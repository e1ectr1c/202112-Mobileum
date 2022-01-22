import axios from 'axios';

//const baseUrl="http://localhost:4000/api";

const baseUrl='/api';  //react will run from same server where api is running

//const baseUrl= "https://ca-booksapi.herokuapp.com/api/";

let instance= axios.create({
    baseURL: baseUrl   
});



export default instance;