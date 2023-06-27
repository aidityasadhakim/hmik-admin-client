import axios from "axios";
import { getSession } from "next-auth/react";

const BASE_URL = "http://127.0.0.1:8000/api";

const api = axios.create({
  baseURL: BASE_URL,
});

export const privateApi = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

const getAccessToken = async () => {
  const session = await getSession();
  const accessToken = session?.user?.accessToken;
  console.log(session?.user);
  try {
    privateApi.defaults.headers.common = {
      Authorization: `Bearer ${accessToken}`,
    };
  } catch (error) {
    console.log(error.message);
  }
};

getAccessToken();

export default api;
