import { Link } from "react-router-dom";

const Dropdown = ({data, searchDisplay, createSearchData, setGalleryView, textBox}) => {

  const onGallery = () => {
    setGalleryView(true)
  }

  return (
    <>
    {data && <>
      {data.collection.items.length ? searchDisplay && <div className="h-fit w-[160%] p-2 rounded-3xl box absolute top-[150%] z-200 max-h-88 overflow-scroll border-cyan-700/90 border">
        {data.collection.items.map((e, i)=> 
          <div onClick={()=> createSearchData(e)} className="h-10 w-full grid grid-cols-6 border-cyan-200/20 border-b hover:bg-cyan-200/10 duration-150 cursor-pointer" key={i}>
            <img src={`${e.links[0].href}`} className=" h-9/10 w-full object-cover overflow-y-hidden col-span-1"/>
            <div className="px-3 py-2 whitespace-nowrap overflow-hidden col-span-5" >{e.data[0].title}</div>
          </div>)}
        <Link to="/gallery" state={{title: `Results for: ${textBox.current.value}`}} className="w-full py-1 rounded-b-2xl cursor-pointer text-center block hover:bg-cyan-200/10" onClick={onGallery}>See all</Link>
      </div>
      : <div className="h-fit w-[160%] p-2 rounded-3xl text-center box absolute top-[150%] z-200 max-h-88 overflow-scroll border-cyan-700/90 border">No results</div>}
    </>}
    </>
  );
};

export default Dropdown;