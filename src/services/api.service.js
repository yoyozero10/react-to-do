// import axios from "axios";
import axios from "./axios.customize";

const createUserAPI = (fullName, email, password, phone, avatar) => {
    const URL = "/api/v1/users";
    const data = {
         fullName: fullName,
         email: email,
         password: password,
         phone: phone,
         avatar: avatar
        };
    return axios.post(URL, data);
}

const updateUserAPI = (_id, username, email, avatar) => {
    const URL = `/api/users/${_id}`;
    const data = {
         _id: _id,
         username: username,
         email: email,
         avatar: avatar
        };
    console.log('Making PUT request to:', URL);
    console.log('Request data:', data);
    return axios.put(URL, data);
}

const deleteUserAPI = (_id) => {
    const URL = `/api/users/${_id}`;
    return axios.delete(URL);
}

const fetchAllUsersAPI = (page, limit) => {
    const URL = `/api/users/paginate?page=${page}&limit=${limit}`;
    return axios.get(URL);
}

export { createUserAPI, updateUserAPI, fetchAllUsersAPI, deleteUserAPI }