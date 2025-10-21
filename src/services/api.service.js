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

const registerUserAPI = (username,email,password) => {
    const URL = "/api/auth/register ";
    const data = {
        username: username,
        email: email,
        password: password
    };
    return axios.post(URL,data);
}

const loginUserAPI = (email,password_hash, password) => {
    const URL = "/api/auth/login";
    const data = {
        email: email,
        password_hash: password_hash,
        password: password
    };
    return axios.post(URL, data);
}

const getUserInforAPI = () => {
    const URL = "/api/auth/account";
    return axios.get(URL);
}

const logoutUserAPI = () => {
    const URL = "/api/auth/logout";
    return axios.post(URL);
}

const fetchAllBooksAPI = (page, limit) => {
    const URL = `/api/books/paginate?page=${page}&limit=${limit}`;
    return axios.get(URL);
}

const deleteBookAPI = (_id) => {
    const URL = `/api/books/${_id}`;
    return axios.delete(URL);
}

const createBookAPI = (title, author, description, price, image) => {
    const URL = "/api/books";
    const data = {
        title: title,
        author: author,
        description: description,
        price: price,
        image: image
    };
    return axios.post(URL, data);
}

const updateBookAPI = (_id, title, author, price, image, description) => {
    const URL = `/api/books/${_id}`;
    const data = {
        _id: _id,
        title: title,
        author: author,
        price: price,
        image: image,
        description: description
    };
    return axios.put(URL, data);
}

export { createUserAPI, updateUserAPI, fetchAllUsersAPI, deleteUserAPI, registerUserAPI, loginUserAPI, getUserInforAPI, logoutUserAPI, fetchAllBooksAPI, createBookAPI, deleteBookAPI,updateBookAPI   }        