import axios from 'axios';
const API_BASE = "https://tuiter-node-server-app-bradley.herokuapp.com/api";
const TUITS_API = `${API_BASE}/tuits`;

export const createTuit = async (tuit) => {
  const response = await axios.post(TUITS_API, tuit)
  return response.data;
}

export const deleteTuit = async (tid) => {
  const response = await axios
  .delete(`${TUITS_API}/${tid}`)
  return response.data
}

export const updateTuit = async (tuit) => {
  await axios
  .put(`${TUITS_API}/${tuit._id}`, tuit);
  return tuit;
}


export const findTuits = async () => {
  const response = await axios.get(TUITS_API);
  const tuits = response.data;
  return tuits;
}