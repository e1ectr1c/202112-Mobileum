//import delay from '../utils/delay';
import axios from './axios';


class UserService {

   
    register = async (user) => {
        

        if (!user || !user.name || !user.email || !user.password)
            throw new Error('Invalid User Details');

        let response=axios.post('users',user);
        localStorage.setItem('user', JSON.stringify(user));
        return response;
    }


    login = async (email, password) => {
        if (!email || !password)
            throw new Error('Missing Credentials');
        let response = await axios.put('users',{email,password});
        let user=response.data;
       // console.log('user',user);        
        localStorage.setItem('user', JSON.stringify(user));
        return user;
    }

    logout = async () => {
        localStorage.removeItem('user');
    }

    getLoggedInUser = async () => {
        let json = localStorage.getItem('user');
        if (json)
            return JSON.parse(json);
        else
            return null;
    }

}

export default new UserService();