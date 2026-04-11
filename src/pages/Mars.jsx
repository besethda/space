import Display from "../components/Display";

const Mars = ({photoDisplay, setPhotoDisplay}) => {
  return (
    <div className="flex grow main">
        {photoDisplay && <Display photoDisplay={photoDisplay} setPhotoDisplay={setPhotoDisplay} defaultTitle={"Mars"}/>}

    </div>
  );
};

export default Mars;