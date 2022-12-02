import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-4f6d9.cloudfunctions.net/api", // cloud function
});

export default instance; //https://us-central1-clone-4f6d9.cloudfunctions.net/api

//http://localhost:5001/clone-4f6d9/us-central1/api