import Close from "./icons/close";
import useUrlLocation from "../hooks/useUrlLocation";

const Display = ({photoDisplay, setPhotoDisplay, defaultTitle}) => {

  const [updateUrl, locationData] = useUrlLocation()

  const close = () => {
    setPhotoDisplay(null)
    updateUrl({title: defaultTitle})
  }

  return (
    <>
      {photoDisplay && <div className="flex flex-col bg-gray-600/80 absolute left-0 top-0 mt-24 ml-2 z-40 h-[calc(100%-160px)] w-[calc(100%-24px)] rounded-2xl">
        <div className="p-3">
          <Close close={close} size={44}/> 
        </div>
        <div className="flex justify-center pt-3 h-full">
          <img src={`${photoDisplay.links[0].href}`} className="max-h-4/5 min-h-1/5 max-w-3/5 object-contain" />
        </div>
      </div>}
    </>
  );
};

export default Display;