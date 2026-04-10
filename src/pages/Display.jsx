import { Navigate } from "react-router-dom";


const Display = ({searchData}) => {

  if(searchData === null) {
    return <Navigate to="/" replace />
  }

  return (
    <div className="flex flex-col grow main">
      <div className="flex justify-center pt-30 h-[calc(100%-130px)]">
        <img src={`${searchData.links[0].href}`} className="max-h-4/5 min-h-1/5 max-w-3/5 object-contain" />
      </div>
    </div>
  );
};

export default Display;