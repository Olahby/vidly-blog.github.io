import { useState, useEffect } from "react";
import { Blog } from "./type";

const useFetch = <T> (url: string) => {

    const [data, setData] = useState<T | null>(null)
    const [isPending, setIsPending] = useState(true);
    const [isError, setError] = useState(null);


    useEffect(() => {
        fetch(url)
        .then(res => {
            if(!res.ok) {
                throw Error("Could not fetch data for that resource.");
            }
            return res.json();
        })
        .then(data => {
            setData(data);
            setIsPending(false);
            setError(null)
        })
        .catch(err => {
            setError(err.message); 
        })
    }, [url])
   
    return {data, isPending, isError};
}
 
export default useFetch;