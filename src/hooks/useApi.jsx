import { useEffect, useState } from "react";

const UseApi = (url) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(()=> {
    if(url === null) return
    const makeRequest = async () => {
      try {
        setLoading(true)
        let response = await fetch(url)
        if(!response.ok) {
          throw new Error('error', response)
        }
        const result = await response.json()
        console.log(result)
        setData(result)

      } catch (error) {
          console.log(error)
          setData(null)
      } finally {
          setLoading(false)
      }
    }
    makeRequest()
  }, [url])
  return [data, setData, loading]
};

export default UseApi;