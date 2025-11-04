import axios from "axios";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
NProgress.configure({ showSpinner: false,
  trickleSpeed: 100,
  minimum: 0.3,
 });
const instance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    timeout: 1000,
    headers: {
        "Content-Type": "application/json",
    },
});


// Add a request interceptor
instance.interceptors.request.use(function (config) {
    NProgress.start();
if (typeof window !== "undefined" && window && window.localStorage &&
window.localStorage.getItem('token')) {
config.headers.Authorization = 'Bearer ' + window.localStorage.getItem('token');
}
// Do something before request is sent
return config;
}, function (error) {
// Do something with request error
return Promise.reject(error);
});

// Add a response interceptor
instance.interceptors.response.use(function (response) {
    NProgress.done();
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  }, function (error) {
    NProgress.done();
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });

export default instance;