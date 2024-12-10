import { useState, useEffect } from "react";

const useFetch = <T>(url: string, options?: RequestInit) => {
  const [data, setData] = useState<T | null>(null);
  const [isPending, setIsPending] = useState(true);
  const [isError, setError] = useState<string | null>(null);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    const fetchData = async () => {
      setIsPending(true);
      setError(null);

      try {
        const response = await fetch(url, { ...options, signal });

        if (!response.ok) {
          throw new Error("Could not fetch data for that resource.");
        }

        const res = await response.json();
        setData(res);
      } catch (err: any) {
        if (err.name !== "AbortError") {
          setError(err.message || "An unknown error occurred.");
        }
      } finally {
        setIsPending(false);
      }
    };

    fetchData();

    return () => {
      abortController.abort(); // Cleanup fetch on component unmount.
    };
  }, [url, options]);
  
  return { data, isPending, isError };
};

export default useFetch;
