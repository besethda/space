import { useState } from "react";
import UseApi from "../hooks/useApi";
import Display from "../components/Display";
import Homepage from "../components/Homepage";

const Home = ({photoDisplay, setPhotoDisplay}) => {

  const [data, setData, loading] = UseApi("https://api.nasa.gov/planetary/apod?api_key=B3y4olgkjypsyU3FXPGigUAMkGrx4EIarZ87ezMV")
  const [explanation, setExplanation] = useState(false)

  const toggleReadMore = () => {
    setExplanation(!explanation)
  }

  return (
    <div className="flex h-full main">
        {!loading ? data && data.media_type && <div className="w-full h-full overflow-hidden relative">
          {data.media_type === "video" ? <video src={`${data.url}`} typeof="video/mp4" autoPlay muted loop className="w-full h-full object-cover absolute z-0"/>
          : <img src={`${data.url}`} className="w-full h-full object-cover absolute"/>}
        </div> 
        : <div></div>}
        <div className="z-3 absolute text-gray-300 font-semibold">
          {loading && <div className="px-3 py-2 font-normal text-white/20 max-w-48" >Loading nasa picture of the day...</div>}
          <div className="px-3 py-2 max-w-48">{data && data.date && `Picture of the day, ${data.date}`}</div>
          <div className="px-3 py-0 max-w-48 font-bold">{data && data.title && data.title}</div>
          {explanation
            ? <div className="text-gray-300 font-semibold text-lg px-3 py-2 max-w-86">
                <div className=" w-fit mb-2 hover:scale-105 hover:translate-x-1 duration-150 hover:font-semibold cursor-pointer" onClick={toggleReadMore}>Read less</div>
                <div className="bg-cyan-950/40 hover:bg-cyan-950/80 cursor-default duration-200 rounded-3xl p-2 hover:shadow-lg hover:shadow-cyan-900/90">{data && data.explanation && data.explanation}</div>
              </div>
            : !loading && data && data.date && <div className="px-3 py-2 w-fit hover:scale-105 hover:translate-x-1 duration-150 hover:font-semibold cursor-pointer" onClick={toggleReadMore}>Read More</div>
            }
        </div>
        <Homepage />
        {photoDisplay && <Display photoDisplay={photoDisplay} setPhotoDisplay={setPhotoDisplay} defaultTitle={"Home"}/>}
    </div>
  );
};

export default Home;