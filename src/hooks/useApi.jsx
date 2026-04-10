import { useEffect, useState } from "react";

const UseApi = (url) => {
  const [data, setData] = useState(null)

  useEffect(()=> {
    if(url === null) return
    const makeRequest = async () => {
      try {
        let response = await fetch(url)
        if(!response.ok) {
          throw new Error('error', response)
        }
        const result = await response.json()
        console.log(result)
        setData(result)

      } catch (error) {
          console.log(error)
      } 
    }
    makeRequest()
  }, [url])
  return [data, setData]
};

export default UseApi;