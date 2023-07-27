import axios from "axios";

const API = axios.create({ baseURL: "https://catclickerserver.onrender.com" });

export const postCat = (catData) => API.post("/cat/add", catData);
export const getAllCats = () => API.get("/cat/get");
export const activateCat = (_id) => API.patch(`/cat/activate/${_id}`);
export const incrementClicks = (_id, catClicks) =>
  API.patch(`/cat/increment/${_id}`, { catClicks });
export const updateCat = (_id, updateData) =>
  API.patch(`cat/update/${_id}`, updateData);
