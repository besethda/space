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
          <div className="aspect-7/3 pt-8 pb-50 bg-radial from-[#923b22] to-black/80 rounded-[500px] shadow-[8px_12px_40px_20px] shadow-black">
            <div className="ml-[30%] bg-black w-fit aspect-square flex overflow-hidden justify-center rounded-full">
              <video className="h-[60vh] scale-130 aspect-square object-cover shadow-[0_0_50px_40px] shadow-[#21120d]" src={`${getMediaUrl("mars.mp4")}`} loop autoPlay muted></video>
            </div>
          </div>
          {data && <div className="absolute px-42 py-18 flex flex-col justify-between h-full w-full text-white text-lg font-semibold">
            <div >
              <div className="mars">Avg Atmospheric Pressure: {data && data[data.sol_keys[0]].PRE.av}</div>
              <div className="mars text-transform: capitalize">Season: {data && data[data.sol_keys[0]].Season}</div>
            </div>
            <div className="flex justify-between">
              <div className="mars">Avg Atmospheric Temp: {data && data[data.sol_keys[0]].AT.av}</div>
              <div className="mars">Avg Horizontal Wind Speed: {data && data[data.sol_keys[0]].HWS.av}</div>
            </div>
          </div>}
        </div>

      </div>

    </div>
  );
};

export default Mars;