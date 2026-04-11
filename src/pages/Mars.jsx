import Display from "../components/Display";
import UseApi from "../hooks/useApi";
import getMediaUrl from "../utils/functions.js"

const Mars = ({photoDisplay, setPhotoDisplay}) => {

  const [data, setData] = UseApi(`https://api.nasa.gov/insight_weather/?api_key=B3y4olgkjypsyU3FXPGigUAMkGrx4EIarZ87ezMV&feedtype=json&ver=1.0`)

  return (
    <div className="flex grow main">
      {photoDisplay && <Display photoDisplay={photoDisplay} setPhotoDisplay={setPhotoDisplay} defaultTitle={"Mars"}/>}
      <div className="w-full flex flex-col items-center justify-center">
        <div className="flex relative">
          <video className="w-250 h-fit shadow-[0_0_50px_40px] rounded-[500px] shadow-[#040202]" src={`${getMediaUrl("mars.mp4")}`} loop autoPlay muted></video>
          {data && <div className="absolute px-42 py-6 flex flex-col justify-between h-full w-full text-white text-lg font-semibold">
            <div >
              <div>Avg Atmospheric Pressure: {data && data[data.sol_keys[0]].PRE.av}</div>
              <div className="text-transform: capitalize">Season: {data && data[data.sol_keys[0]].Season}</div>
            </div>
            <div className="flex justify-between">
              <div>Avg Atmospheric Temp: {data && data[data.sol_keys[0]].AT.av}</div>
              <div>Avg Horizontal Wind Speed: {data && data[data.sol_keys[0]].HWS.av}</div>
            </div>
          </div>}
        </div>

      </div>

    </div>
  );
};

export default Mars;