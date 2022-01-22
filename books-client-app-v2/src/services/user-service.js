import delay from '../utils/delay';

const seedData = [
    { name: 'Vivek Dutta Mishra', email: "vivek@conceptarchitect.in", password: 'p@ss1' },
    { name: 'Aman Kumar', email: "aman@gmail.com", password: 'p@ss1' }

]


class UserService {

    constructor() {
        this._load();
    }

    _load = () => {
        try {
            let json = localStorage.getItem("users");
            if (json)
                this.users = JSON.parse(json);
            else
                throw new Error("No Key found");
        } catch (e) {
            this.users = seedData;
            this._save();
        }
    }

    _save = () => {
        localStorage.setItem('users', JSON.stringify(this.users));
    }

    register = async (user) => {
        await delay(2000);

        if (!user || !user.name || !user.email || !user.password)
            throw new Error('Invalid User Details');

        let existing = await this.users.find(u => u.email === user.email);
        if (existing)
            throw new Error('User already exists with this email ' + user.email);


        this.users.push(user);
        this._save();
        localStorage.setItem('user', JSON.stringify(user));
        return user;
    }


    login = async (email, password) => {
        await delay(5000);
        if (!email || !password)
            throw new Error('Missing Credentials');
        let user = this.users.find(u => u.email === email && u.password === password);
        if (user) {
            localStorage.setItem('user', JSON.stringify(user));
            return user;
        } else {
            throw new Error("Invalid Credentials");
        }

    }

    logout = async () => {
        await delay(1000);
        localStorage.removeItem('user');
    }

    getLoggedInUser = async () => {
        await delay(1000);
        let json = localStorage.getItem('user');
        if (json)
            return JSON.parse(json);
        else
            return null;
    }

}

export default new UserService();