import { useState } from "react";
import UseApi from "../hooks/useApi";
import Display from "../components/Display";
import Homepage from "../components/Homepage";

const Home = ({photoDisplay, setPhotoDisplay}) => {

  const [data, setData, loading] = UseApi("https://api.nasa.gov/planetary/apod?api_key=")
  const [explanation, setExplanation] = useState(false)

  const toggleReadMore = () => {
    setExplanation(!explanation)
  }

  return (
    <div className="flex h-full main">
        {!loading ? data && data.media_type && <div className="w-full h-full overflow-hidden relative">
          {data.media_type === "video" ? <video src={`${data.url}`} typeof="video/mp4" loop autoPlay playsInline disablePictureInPicture muted className="w-full h-full object-cover absolute z-0"/>
          : <img src={`${data.url}`} className="w-full h-full object-cover absolute"/>}
        </div> 
        : <div></div>}
        <div className="absolute lg:h-[30vh] flex flex-col-reverse md:flex-col bottom-0 md:bottom-auto md:top-0 txt font-semibold z-20 ">
          {loading && <div className="px-3 py-2 font-normal text-white/20 max-w-48" >Loading nasa picture of the day...</div>}
          <div className="px-3 py-2 lg:max-w-48">{data && data.date && `Picture of the day, ${data.date}`}</div>
          <div className="px-3 py-0 max-w-48 font-bold">{data && data.title && data.title}</div>
          {explanation
            ? <div className="font-semibold txt px-3 py-2 w-full">
                <div className=" w-fit mb-2 hover:scale-105 hover:translate-x-1 duration-150 hover:font-semibold cursor-pointer" onClick={toggleReadMore}>Read less</div>
                <div className="box-border bg-cyan-950/80 md:bg-cyan-950/40 border border-white/0 md:hover:bg-cyan-950/80 hover:border-cyan-300/30 md:max-w-90 max-h-[60vh] overflow-scroll cursor-default duration-200 rounded-3xl p-2 hover:shadow-lg hover:shadow-cyan-900/90">{data && data.explanation && data.explanation}</div>
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