import { useState, useCallback } from "react";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (requestConfig, setData) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : "GET",
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
        headers: requestConfig.headers
          ? requestConfig.headers
          : {
              "Content-Type": "application/json",
            },
      });

      if (!response.ok) {
        throw new Error("Request failed!");
      }

      const data = await response.json();

      setData(data);
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
    setIsLoading(false);
  }, []);

  return {
    error,
    isLoading,
    sendRequest,
  };
};

export default useHttp;
