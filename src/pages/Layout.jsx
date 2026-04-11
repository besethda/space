import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const Layout = ({setSearchData, photoDisplay, setPhotoDisplay}) => {
  return (
    <div className="h-full flex flex-col">
      <Header setSearchData={setSearchData} photoDisplay={photoDisplay} setPhotoDisplay={setPhotoDisplay}/>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;