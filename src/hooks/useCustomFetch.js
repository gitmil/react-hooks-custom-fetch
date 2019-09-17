import { useState, useEffect } from "react";

function useCustomFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  async function customeFetch(url) {
    try {
      let response = await fetch(url);
      let rData = await response.json();
      setData({ rData });
      setLoading(false);
    } catch (e) {
      setError(e);
      setLoading(false);
    }
  }

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      if (url) {
        customeFetch(url);
      }
    }, 3000);
  }, [url]);

  return [data, loading, error];
}

export default useCustomFetch;
