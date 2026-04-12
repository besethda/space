import Display from "../components/Display";
import UseApi from "../hooks/useApi";
import getMediaUrl from "../utils/functions.js"

const Mars = ({photoDisplay, setPhotoDisplay}) => {

  const [data, setData, loading] = UseApi(`https://api.nasa.gov/insight_weather/?feedtype=json&ver=1.0&api_key=`)

  return (
    <div className="flex grow main">
      {photoDisplay && <Display photoDisplay={photoDisplay} setPhotoDisplay={setPhotoDisplay} defaultTitle={"Mars"}/>}
      <div className="w-full flex flex-col items-center justify-center">
        <div className="flex relative ">
          <div className="bg-radial from-[#923b22] to-black/80 w-fit px-[20vw] py-[20vh] md:px-[20vw] md:py-[10vh]  rounded-full shadow-[8px_12px_40px_20px] shadow-black">
            <div className="w-fit aspect-square flex overflow-hidden justify-center rounded-full">
              <video className="w-[40vw] max-w-100 scale-130 aspect-square object-cover shadow-[0_0_50px_40px] shadow-[#21120d]" src={`${getMediaUrl("mars.mp4")}`} loop autoPlay playsInline disablePictureInPicture muted></video>
            </div>
          </div>
          <div className="absolute md:p-10 md:py-0 py-15 flex flex-col justify-between items-center h-full w-full txt font-semibold">
            {loading 
              ? <div className="mars">Loading...</div>
              : data && <>
              <div className="w-full md:px-[10%]">
                <div className="mars">Avg Atmospheric Pressure: {data && data[data.sol_keys[0]].PRE.av}</div>
                <div className="mars text-transform: capitalize">Season: {data && data[data.sol_keys[0]].Season}</div>
              </div>
              <div className="flex justify-between">
                <div className="mars">Avg Atmospheric Temp: {data && data[data.sol_keys[0]].AT.av}</div>
                <div className="mars">Avg Horizontal Wind Speed: {data && data[data.sol_keys[0]].HWS.av}</div>
              </div>
            </>}
          </div>
        </div>

      </div>

    </div>
  );
};

export default Mars;