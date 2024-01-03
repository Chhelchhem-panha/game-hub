import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "2e6393482abb417098a7ba3b9ae2b4d1",
  },
});
