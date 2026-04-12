import { useEffect, useState } from "react";

const UseApi = (url, needsKey=true) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const apiKey = import.meta.env.VITE_API_KEY

  useEffect(()=> {
    if(url === null) return
    const makeRequest = async () => {
      try {
        setLoading(true)
        let response = await fetch(`${url}${needsKey ? apiKey : ""}`)
        if(!response.ok) {
          const errorData = await response.json()
          throw new Error(errorData.error_message)
        } 
          const result = await response.json()
          setData(result)
      } catch (error) {
          if(error.message.includes("Date Format Exception")) {
            setData({error: "Must be less than 8 day range!"})
          } else {
            setData({error: error.message})
          }
      } finally {
          setLoading(false)
      }
    }
    makeRequest()
  }, [url])
  return [data, setData, loading]
};

export default UseApi;