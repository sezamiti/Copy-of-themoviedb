import axios from "axios";

export default axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Accept: "application/json",
  },

  params: {
    api_key: "7f821069f8a6715215674242b7ecc9f7",
  },
});
