import { useEffect, useState }  from "react";

const useFetch = (url, token) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)

      try {
        const res = await fetch(url, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })
        const json = await res.json()

        setData(json.data)
        setLoading(false)
      } catch(error) {
          setError(error)
          setLoading(false)
      }
    }

    fetchData()
  }, [url, token])

  return {loading, error, data}
}

export default useFetch