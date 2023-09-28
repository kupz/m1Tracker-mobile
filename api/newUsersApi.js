import axios from "axios";

const usersApi = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

const accountUrl = "http://127.0.0.1:8000";

export const getUsers = async () => {
  const response = await usersApi.get("/users");

  return response.data;
};

export const loginAccount = async (user) => {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  const response = await fetch(`${accountUrl}/login`, requestOptions)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((responseData) => {
      return responseData;
    })
    .catch((error) => {
      console.error("Error:", error);
    });

  return response;
};

export default usersApi;
