import axios from "axios";
import { auth } from "./firebase";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "http://localhost:5000/api",
});

// Attach the Firebase ID token to every request when someone is logged in
api.interceptors.request.use(async (config) => {
  const user = auth.currentUser;
  if (user) {
    config.headers.Authorization = `Bearer ${await user.getIdToken()}`;
  }
  return config;
});

export const errorText = (err, fallback = "Something went wrong. Please try again.") =>
  err?.response?.data?.message || (err?.message === "Network Error" ? "Cannot reach the server. Is the backend running?" : fallback);

export default api;
