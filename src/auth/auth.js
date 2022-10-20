import axios from 'axios';

export const signup = async(values) => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        },
    };

    const response = await axios.post('http://localhost:5000/api/register', values, config);
    return response
} 