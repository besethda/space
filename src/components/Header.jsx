import Asteroid from "./icons/asteroid";
import Mars from "./icons/mars";
import Logo from "./icons/logo";
import Search from "./Search";
import { useState } from "react";
import UseApi from "../hooks/useApi";
import { useLocation } from "react-router-dom";

const Header = ({setSearchData, photoDisplay, setPhotoDisplay}) => {

  const [searchQuery, setSearchQuery] = useState("")
  const [data, setData] = UseApi(searchQuery !== "" ? `https://images-api.nasa.gov/search?q=${searchQuery}&media_type=image&page_size=20` : null)
  const location = useLocation()
  let title = location.state ? location.state.title : "Home"

  return (
    <div className="h-0 w-full flex justify-center relative z-50">
      <div className="box h-14 md:h-18 sm:w-9/10 md:w-1/2 rounded-4xl shadow-md shadow-black pl-2.5 grid grid-cols-11 sm:min-w-80 md:min-w-200 absolute top-3">
        <div className="col-span-4 flex items-center w-full">
          <Logo size={55}/>
        </div>
        <div className="flex h-full w-full items-center justify-center col-span-3">
          <div className="font-semibold" >{title}</div>
        </div>
        <div className="flex h-full w-full items-center col-span-4 justify-end" >
          <Search setSearchQuery={setSearchQuery} data={data} setData={setData} setSearchData={setSearchData} photoDisplay={photoDisplay} setPhotoDisplay={setPhotoDisplay}/>
          <Asteroid size={55}/>
          <Mars size={55} />
        </div>
      </div>
    </div>
  );
};

export default Header;