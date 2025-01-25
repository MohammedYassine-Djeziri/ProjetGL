// hooks/usePostData.js
import { useMutation } from "@tanstack/react-query";

const postData = async ({ url, data }) => {
  const token = localStorage.getItem("access_token");
  const headers = {
    "Content-Type": "application/json",
  };

  if (token) {
    headers["Authorization"] = `JWT ${token}`;
  }

  const response = await fetch(url, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    // show exaclty what went wrong, and the error message from the backend
    throw new Error(`Network response was not ok: ${response.statusText}`);
  }
  return response.json();
};

export const usePostData = (url, options = {}) => {
  return useMutation({
    mutationFn: (data) => postData({ url, data }),
    ...options,
    onMutate: () => {
      console.log("Mutation started...");
    },
    onError: (error) => {
      console.error("An error occurred:", error);
    },
    onSuccess: (data) => {
      console.log("Mutation successful:", data);
    },
    onSettled: () => {
      console.log("Mutation settled.");
    },
  });
};
