import axios from 'axios';
import Cookies from 'js-cookie';

// export const setCookie = (key, value) => {
//     Cookies.set(key, value)
// }

export const getCookie = (key) => {
    return Cookies.get(key);
}

export const deleteCookie = () => {
    return(axios.post('http://localhost:5000/api/logout').then(res=>console.log(res)).catch(err=>console.log(err)))
}

