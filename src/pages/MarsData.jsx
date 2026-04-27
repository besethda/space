import UseApi from "../hooks/useApi";
import { useParams } from "react-router-dom";

const MarsData = () => {

  const [data, setData, loading] = UseApi(`https://api.nasa.gov/insight_weather/?feedtype=json&ver=1.0&api_key=`)
  const { attribute } = useParams()
  if(attribute === "temp") {
    return (
      <div className="flex max-w-[90%] md:top-0 top-[10vh] md:max-w-[68%] flex-wrap justify-center">
        <div className="mars">Largest Sample: {data && data[data.sol_keys[0]].PRE.av}</div>
        <div className="mars">Samples: {data && data[data.sol_keys[0]].PRE.ct}</div>
        <div className="mars">Smallest Sample: {data && data[data.sol_keys[0]].PRE.mn}</div>
        <div className="mars">Largest Sample: {data && data[data.sol_keys[0]].PRE.mx}</div>
      </div>
    )
  } else if(attribute === "wind") {
    return (
      <div className="flex relative md:top-0 top-[10vh] max-w-[90%] md:max-w-[68%] flex-wrap justify-center">
        <div className="mars ">Avg Horizontal Wind Speed: {data && data[data.sol_keys[0]].HWS.av}</div>
        <div className="mars">Samples: {data && data[data.sol_keys[0]].HWS.ct}</div>
        <div className="mars">Smallest Sample: {data && data[data.sol_keys[0]].HWS.mn}</div>
        <div className="mars">Largest Sample: {data && data[data.sol_keys[0]].HWS.mx}</div>
      </div>
    )
  }


};

export default MarsData;