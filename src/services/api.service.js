// import axios from "axios";
import axios from "./axios.customize";

const createUserAPI = (fullName, email, password, phone) => {
    const URL = "/api/v1/users";
    const data = {
         fullName: fullName,
         email: email,
         password: password,
         phone: phone
        };
    return axios.post(URL, data);
}

const updateUserAPI = () => {

}

const fetchAllUsersAPI = () => {
    const URL = "/api/users";
    return axios.get(URL);
}

export { createUserAPI, updateUserAPI, fetchAllUsersAPI }