import { useEffect, useState } from "react";

export const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [pending, setPending] = useState(true);
    const [error, setError] = useState(null);
    const [refresh, setRefresh] = useState(true);

    useEffect(() => {
        const abortCont = new AbortController();

        fetch(url, { signal: abortCont.signal })
            .then((resp) => {
                if (!resp.ok) {
                    //errors comingback from the server
                    throw Error("we cant fetch data from resource");
                }
                return resp.json();
            })
            .then((data) => {
                setData(data);
                setPending(false);
            })
            .catch((err) => {
                if (err.name === "AbortError") {
                    console.log("fetch aborted");
                } else {
                    setPending(false);
                    setError(err);
                }
            });
        return () => abortCont.abort();
    }, [url, refresh]);

    return { data, pending, error, setRefresh };
};

export default useFetch;
