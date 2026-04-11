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
          const errorData = await response.json()
          throw new Error(errorData.error_message)
        } 
          const result = await response.json()
          console.log(result)
          setData(result)
      } catch (error) {
          console.log(error.message)
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