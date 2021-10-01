import axios from 'axios';
import { setAuthorizationToken } from '../helpers/setAuthorizationToken';

const login = (username, password) => {
    return axios.post("http://localhost:3000/account/login", { username, password })
        .then(user => {
            //if user found 
            if (user.data.status) {
                const { token } = user.data;
                localStorage.setItem("jwtToken", token); 
                setAuthorizationToken(token);
            }
            return user.data;
        })
        .catch(err => console.error(err));
}

const logout = () => {
    localStorage.removeItem("jwtToken");
    setAuthorizationToken(false);
}

export default { login, logout };
