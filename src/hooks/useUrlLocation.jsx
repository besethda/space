import { useLocation, useNavigate } from "react-router-dom"

const useUrlLocation= () => {
  const location = useLocation()
  const navigate = useNavigate()

  const locationData = location.state ? location.state : {}

  const updateUrl = (newLocationData) => {
    navigate(location.pathname,
      {
        replace: true,
        state: {
          ...locationData, ...newLocationData
        }
      }
    )
  }

  return [updateUrl, locationData]
}

export default useUrlLocation