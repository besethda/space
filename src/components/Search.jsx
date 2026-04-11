import SearchIcon from "./icons/searchIcon";
import Close from "./icons/close";
import Dropdown from "./Dropdown";
import { useState, useRef } from "react";
import useUrlLocation from "../hooks/useUrlLocation";

const Search = ({setSearchQuery, data, setData, setSearchData, photoDisplay, setPhotoDisplay}) => {

  const [searchDisplay, setSearchDisplay] = useState(false)
  const [galleryView, setGalleryView] = useState(false)
  const textBox = useRef(null)
  const [updateUrl, locationData] = useUrlLocation()

  if(galleryView) {
    setSearchData(data)
  }

  const searchButton = () => {
    if(!searchDisplay) {
      setSearchDisplay(true)
    } else {
      setSearchQuery(textBox.current.value)
      if(galleryView) {
        updateUrl({title: `Results for: ${textBox.current.value}`})
        setPhotoDisplay(null)
      }
    }
  }

  const createSearchData = (e) => {
    setSearchDisplay(false)
    setSearchData(e)
    setPhotoDisplay(e)
    updateUrl({title: e.data[0].title})
  }

  const closeButton =() => {
    setSearchQuery("")
    setSearchDisplay(false)
    textBox.current.value = ''
    setData(null)
    if(galleryView) {
      setSearchData(null)
      setGalleryView(false)
    }
  }

  return (
    <div className={`h-fit flex items-center relative rounded-3xl mr-3 ${searchDisplay ? "border-cyan-700/90 border" : ""}`}>
      <div className={`w-fit h-fit flex items-center`}>
        <Close size={searchDisplay ? 26 : 0} close={closeButton}/>
        <input ref={textBox} className="outline-0 duration-300 text-2xl p-0 m-0" style={{width: `${searchDisplay ? 165 : 0}px`}} placeholder="image search..."/>
      </div>
      <SearchIcon size={searchDisplay ? 42 : 55} click={searchButton} />
      {!galleryView && <Dropdown data={data} createSearchData={createSearchData} searchDisplay={searchDisplay} photoDisplay={photoDisplay} setPhotoDisplay={setPhotoDisplay} setGalleryView={setGalleryView} textBox={textBox}/>}
    </div>
  );
};

export default Search;