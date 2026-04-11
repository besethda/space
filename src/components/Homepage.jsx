import { Link } from "react-router-dom"
import getMediaURL from "../utils/functions"

const Homepage = () => {
  return(
    <div className="grid grid-cols-2 grid-rows-6 w-full gap-3 h-[90%] py-[13%] mt-5 px-88 absolute text-white">
      <div className="gridItem box relative row-span-2 overflow-hidden group">
        <div className="z-10">Welcome to your very own Satellyte!</div>
        <img src={`${getMediaURL("satellite.jpg")}`} className="w-full object-cover opacity-30 grayscale-100 group-hover:opacity-85 group-hover:grayscale-0 duration-200 absolute" />
      </div>
      <Link to="/mars" state={{title: "Mars"}} className="gridItem hover:scale-[101%] box row-span-6 group relative overflow-hidden">
        <video className="h-full object-cover opacity-30 grayscale-100 group-hover:opacity-85 group-hover:grayscale-0 duration-200 absolute" src={`${getMediaURL("mars.mp4")}`} loop autoPlay muted></video>
        <div className="z-10">Check the <span className="group-hover:font-bold duration-100">&nbsp;Martian&nbsp;</span>weather...</div>
      </Link>
      <Link to="/asteroids" state={{title: "Asteroids"}} className="gridItem hover:scale-[101%] box relative row-span-4 overflow-hidden group">
        <div className="z-10">Search for <span className=" group-hover:font-bold duration-100">&nbsp;asteroids&nbsp;</span> approaching the earth..</div>
        <img src={`${getMediaURL("asteroid.jpg")}`} className="min-w-full min-h-full object-cover opacity-30 grayscale-100 group-hover:opacity-85 group-hover:grayscale-0 duration-200 absolute" />
      </Link>
    </div>
  )
}

export default Homepage