import { Navigate } from "react-router-dom";
import Display from "../components/Display";
import useUrlLocation from "../hooks/useUrlLocation";
import { useEffect, useState } from "react";

const Gallery = ({searchData, setPhotoDisplay, photoDisplay}) => {

  if(searchData === null) {
    return <Navigate to="/" replace />
  }

  const [updateUrl, locationData] = useUrlLocation()
  const pageName = locationData.title ? locationData.title : "search"
  const [defaultName, setDefaultName] = useState(null)
  useEffect(()=> {
    setDefaultName(pageName)
  }, [searchData])

  const changeTitle = (e) => {
    updateUrl({title: e.data[0].title})
  }

  return (
    <div className="flex flex-col grow main pt-26 px-3">
      <div className="flex flex-wrap justify-center max-h-[82vh] overflow-scroll">
        {searchData && searchData.collection.items.length ? searchData.collection.items.map((e, i)=> 
        <div onClick={()=> {setPhotoDisplay(e), changeTitle(e)}} className="flex max-h-36 md:max-h-54 m-3 flex-col justify-between cursor-pointer aspect-square p-2 border border-cyan-300/30 rounded-2xl bg-cyan-100/10 hover:bg-cyan-400/10 duration-300 overflow-hidden" key={i}>
          <img src={`${e.links[0].href}`} className="max-h-8/11 object-contain"/>
          <div className="txt text-center py-1 max-h-9 md:max-h-13" >{e.data[0].title}</div>
        </div>) :
        <div className="txt text-center py-1 max-h-12">No results</div>}
      </div>
      {photoDisplay && <Display photoDisplay={photoDisplay} setPhotoDisplay={setPhotoDisplay} defaultTitle={defaultName}/>}
    </div>
  );
};

export default Gallery;