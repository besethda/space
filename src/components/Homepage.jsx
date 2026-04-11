import { Link } from "react-router-dom"

const Homepage = () => {
  return(
    <div className="grid grid-cols-2 grid-rows-6 w-full gap-3 h-2/3 pt-30 px-88 absolute text-white">
      <div className="gridItem box row-span-2">Welcome to your very own Satellyte!</div>
      <Link to="/mars" state={{title: "Mars"}} className="gridItem box row-span-6 group">Check the <span className="group-hover:font-bold duration-100">&nbsp;Martian&nbsp;</span>weather...</Link>
      <Link to="/asteroids" state={{title: "Asteroids"}} className="gridItem box row-span-4 group">Search for <span className=" group-hover:font-bold duration-100">&nbsp;asteroids&nbsp;</span> approaching the earth..</Link>
    </div>
  )
}

export default Homepage