import axios from "axios";

const Api = axios.create({
  baseURL: "https://api.tvmaze.com/"
});

export default Api;
