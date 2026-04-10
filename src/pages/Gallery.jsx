import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Gallery = ({searchData}) => {

  if(searchData === null) {
    return <Navigate to="/" replace />
  }

  return (
    <div className="flex flex-col grow main pt-30 px-3">
      <div className="flex flex-wrap justify-center">
        {searchData.collection.items.map((e, i)=> 
        <Link to="/display" state={{title: e.data[0].title}} className="flex max-w-1/8 m-3 flex-col justify-between aspect-square p-2 rounded-2xl bg-cyan-100/10 hover:bg-cyan-400/10 duration-300" key={i}>
          <img src={`${e.links[0].href}`} className="max-h-8/10 object-contain"/>
          <div className="text-white text-center py-1" >{e.data[0].title}</div>
        </Link>)}
      </div>
    </div>
  );
};

export default Gallery;