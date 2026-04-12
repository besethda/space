import Close from "./icons/close";
import useUrlLocation from "../hooks/useUrlLocation";

const Display = ({photoDisplay, setPhotoDisplay, defaultTitle}) => {

  const [updateUrl, locationData] = useUrlLocation()

  const close = () => {
    setPhotoDisplay(null)
    updateUrl({title: defaultTitle})
  }

  console.log(photoDisplay)

  return (
    <>
      {photoDisplay && <div className="flex flex-col bg-gray-600/80 absolute left-0 top-0 mt-24 ml-3 z-40 h-[calc(100%-160px)] w-[calc(100%-24px)] border border-cyan-300/30 rounded-2xl">
        <div className="p-3 flex justify-between">
          <Close close={close} size={44}/>
          <div className="text-white p-2">{photoDisplay.data[0].date_created}</div>
        </div>
        <div className="flex justify-center pt-3 h-full relative overflow-hidden">
          <div className="w-fit h-fit flex flex-col justify-center items-center" >
            <img src={`${photoDisplay.links[0].href}`} className="max-h-4/5 min-h-1/5 max-w-3/5 object-contain" />
            <div className="text-center absolute bottom-0 text-white bg-gray-800/70 p-4 rounded-t-3xl max-h-2/7 overflow-y-scroll max-w-4/5">{photoDisplay.data[0].description}</div>
          </div>
        </div>
      </div>}
    </>
  );
};

export default Display;