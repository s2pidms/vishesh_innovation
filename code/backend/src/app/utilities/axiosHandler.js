const axios = require("axios");

class AxiosHandler {
    constructor() {
        this.instance = axios.create();

        // Add a request interceptor
        this.instance.interceptors.request.use(
            config => {
                // Do something before request is sent
                console.log("Request Interceptor:", config);
                return config;
            },
            error => {
                // Do something with request error
                return Promise.reject(error);
            }
        );

        // Add a response interceptor
        this.instance.interceptors.response.use(
            response => {
                // Do something with response data
                console.log("Response Interceptor:", response.data);
                return response;
            },
            error => {
                // Do something with response error
                return Promise.reject(error);
            }
        );
    }
    async get(url) {
        try {
            const response = await this.instance.get(url);
            return response.data;
        } catch (error) {
            console.error("GET Request Error:", error);
            throw error;
        }
    }

    async post(url, data) {
        try {
            const response = await this.instance.post(url, data);
            return response.data;
        } catch (error) {
            console.error("POST Request Error:", error);
            throw error;
        }
    }

    async put(url, data) {
        try {
            const response = await this.instance.put(url, data);
            return response.data;
        } catch (error) {
            console.error("PUT Request Error:", error);
            throw error;
        }
    }
}

// Usage
module.exports = new AxiosHandler();
