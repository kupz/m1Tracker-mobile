import { useEffect, useState } from "react";

export default function useLogin(data) {
  const [loginData, setLoginData] = useState(null);

  const URL = "http://127.0.0.1:8000/login";

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  useEffect(() => {
    (async function () {
      try {
        const response = await fetch(URL, requestOptions).then((res) =>
          console.log(res)
        );

        if (!response.ok) {
          throw new Error("Login failed. Check your credentials.");
        }

        const responseData = await response.json();
        setLoginData(responseData);

        // You can save the authentication token or perform other actions here
      } catch (error) {
        // Handle any errors that occurred during the fetch operation
        console.error("Error:", error);
      }
    })();
  }, [data]); // Make sure to include data as a dependency if it can change

  return loginData;
}
