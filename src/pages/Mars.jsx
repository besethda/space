import Display from "../components/Display";
import UseApi from "../hooks/useApi";

const Mars = ({photoDisplay, setPhotoDisplay}) => {

  const [data, setData] = UseApi(`https://api.nasa.gov/insight_weather/?api_key=B3y4olgkjypsyU3FXPGigUAMkGrx4EIarZ87ezMV&feedtype=json&ver=1.0`)



  return (
    <div className="flex grow main">
      {photoDisplay && <Display photoDisplay={photoDisplay} setPhotoDisplay={setPhotoDisplay} defaultTitle={"Mars"}/>}
      <div className="">
        <div className="text-white">Avg Atmospheric Temp: {data && data[data.sol_keys[0]].AT.av}</div>
        <div className="text-white">Avg Horizontal Wind Speed: {data && data[data.sol_keys[0]].HWS.av}</div>
        <div className="text-white">Avg Atmospheric Pressure: {data && data[data.sol_keys[0]].PRE.av}</div>
        <div className="text-white">Avg Horizontal Wind Speed: {data && data[data.sol_keys[0]].WD.av}</div>
        <div className="text-white text-transform: capitalize">Season: {data && data[data.sol_keys[0]].Season}</div>




      </div>
    </div>
  );
};

export default Mars;