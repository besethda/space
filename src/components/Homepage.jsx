import { Link } from "react-router-dom"
import getMediaURL from "../utils/functions"

const Homepage = () => {
  return (
    <div className="grid md:grid-cols-2 md:grid-rows-6 w-full gap-3 h-[90%] lg:h-[90%] py-[13%] mt-10 md:mt-5 lg:px-[23%] px-[20%] md:px-[10%] absolute text-white">
      <div className="gridItem box row-span-2 group">
        <div className="z-10">Welcome to your very own Satellyte!</div>
        <img src={`${getMediaURL("satellite.jpg")}`} className="gridMedia" />
      </div>
      <Link to="/mars" state={{ title: "Mars" }} className="gridItem hover:scale-[101%] box row-span-6 group">
        <video className="gridMedia" src={`${getMediaURL("mars.mp4")}`} loop autoPlay playsInline disablePictureInPicture muted></video>
        <div className="z-10">Check the <span className="group-hover:font-bold duration-100">&nbsp;Martian&nbsp;</span>weather...</div>
      </Link>
      <Link to="/asteroids" state={{ title: "Asteroids" }} className="gridItem hover:scale-[101%] box row-span-4 group">
        <div className="z-10">Search for <span className=" group-hover:font-bold duration-100">&nbsp;asteroids&nbsp;</span> approaching the earth..</div>
        <img src={`${getMediaURL("asteroid.jpg")}`} className="gridMedia" />
      </Link>
    </div>
  )
}

export default Homepage