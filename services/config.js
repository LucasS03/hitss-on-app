import axios from "axios";

const api = axios.create({
    baseURL: "https://hitss-on-api.herokuapp.com/"
});

export default api;