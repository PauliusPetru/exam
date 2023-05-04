import axios from "axios";

const client = axios.create({
  timeout: 5000,
});

client.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error)
);

class Api_instance {
  constructor() {
    const baseUrl = "http://localhost:4000/api";

    this.baseUrl = {
      clients: baseUrl + "/clients/",
    };
  }
}

export const API = new Api_instance();

export default client;
