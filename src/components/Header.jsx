import Asteroid from "./icons/asteroid";
import Mars from "./icons/mars";
import Logo from "./icons/logo";
import Search from "./Search";
import { useState } from "react";
import UseApi from "../hooks/useApi";
import { useLocation } from "react-router-dom";

const Header = ({setSearchData, photoDisplay, setPhotoDisplay}) => {

  let width = window.innerWidth
  const [searchQuery, setSearchQuery] = useState("")
  const [data, setData] = UseApi(searchQuery !== "" ? `https://images-api.nasa.gov/search?q=${searchQuery}&media_type=image&page_size=20` : null)
  const location = useLocation()
  let title = location.state ? location.state.title : "Home"

  return (
    <div className="h-0 w-full flex justify-center relative z-50">
      <div className="box h-12 md:h-16 w-9/10 lg:max-w-250 rounded-4xl shadow-md shadow-black pl-2.5 grid grid-cols-11 absolute top-3">
        <div className="col-span-4 flex items-center w-full">
          <Logo />
        </div>
        <div className="flex h-full w-full items-center justify-center col-span-3">
          {width > 1000 && <div className="font-semibold" >{title}</div>}
        </div>
        <div className="flex h-full w-full items-center col-span-4 relative justify-end" >
          <Search setSearchQuery={setSearchQuery} data={data} setData={setData} setSearchData={setSearchData} photoDisplay={photoDisplay} setPhotoDisplay={setPhotoDisplay}/>
          <Asteroid/>
          <Mars/>
        </div>
      </div>
    </div>
  );
};

export default Header;