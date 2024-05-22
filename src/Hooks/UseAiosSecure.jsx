import axios from "axios";


export const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000/'
})

const UseAiosSecure = () => {
    return axiosSecure
};

export default UseAiosSecure;