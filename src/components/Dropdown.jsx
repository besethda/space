import { Link } from "react-router-dom";

const Dropdown = ({data, searchDisplay, createSearchData, setGalleryView}) => {

  const onGallery = () => {
    setGalleryView(true)

  }

  return (
    <>
      {data && searchDisplay && <div className="h-fit w-[160%] p-2 rounded-3xl box absolute top-[150%] max-h-88 overflow-scroll border-cyan-700/90 border">
        {data.collection.items.map((e, i)=> 
          <Link to="/display" state={{title: e.data[0].title}} onClick={()=>{createSearchData(e)}} className="h-10 w-full grid grid-cols-6 border-cyan-200/20 border-b hover:bg-cyan-200/10 duration-150 cursor-pointer" key={i}>
            <img src={`${e.links[0].href}`} className=" h-9/10 w-full object-cover overflow-y-hidden col-span-1"/>
            <div className="px-3 py-2 whitespace-nowrap overflow-hidden col-span-5" >{e.data[0].title}</div>
          </Link>)}
        <Link to="/gallery" className="w-full text-center py-1 hover:bg-cyan-200/10 rounded-b-2xl cursor-pointer" onClick={onGallery}>See all</Link>
      </div>}
    </>
  );
};

export default Dropdown;