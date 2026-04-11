import Display from "../components/Display";

const Asteroids = ({photoDisplay, setPhotoDisplay}) => {
  return (
    <div className="flex grow main">
        {photoDisplay && <Display photoDisplay={photoDisplay} setPhotoDisplay={setPhotoDisplay} defaultTitle={"Asteroids"}/>}

    </div>
  );
};

export default Asteroids;