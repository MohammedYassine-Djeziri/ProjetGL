import { useQuery } from "@tanstack/react-query";

const fetchData = async (url) => {
  const response = await fetch(url);
  if (!response.ok) throw new Error("Network response was not ok");
  return response.json();
};

export const useFetchData = (url) => {
  return useQuery({
    queryKey: [url], // Unique key for caching
    queryFn: () => fetchData(url),
    staleTime: 5 * 60 * 1000, // 5 minutes cache
    retry: 1, // Only retry once if failed
    onSuccess: (data) => {
      console.log("Fetch successful:", data);
    },
    onError: (error) => {
      console.error("An error occurred:", error);
    },
    onSettled: () => {
      console.log("Fetch settled.");
    },
  });
};
