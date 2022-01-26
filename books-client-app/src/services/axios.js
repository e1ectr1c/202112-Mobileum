import axios from 'axios';

//const baseUrl="http://localhost:4000/api";

//const baseUrl='/api';  //react will run from same server where api is running

//const baseUrl= "https://ca-booksapi.herokuapp.com/api/";

//console.log('baseUrl',baseUrl);
//console.log('env', process.env.NODE_ENV);
//console.log('process.env.NODE_ENV', process.env.REACT_APP_API_SERVER);

const baseUrl = process.env.REACT_APP_API_SERVER || "/api";

let instance = axios.create({
    baseURL: baseUrl
});

export const getAuthorizationHeader = () => {
    let userJson = localStorage.getItem("user");
    if (userJson) {
        let user = JSON.parse(userJson);
        return {
            headers: {
                'Authorization': `BEARER ${user.token}`
            }
        }
    } else {
        return null;
    }

}

instance.interceptors.request.use(function (config) {
    let userJson= localStorage.getItem("user");
    if(userJson) {
        let user=JSON.parse(userJson);
        config.headers.Authorization =   `Bearer ${user.token}` ;
    }
    
    return config;
  });



export default instance;












































