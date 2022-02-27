import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost/backend-php/imexa-api/api/post",
});
