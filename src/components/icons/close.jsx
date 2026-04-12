import { NavLink } from "react-router-dom";

const Close = ({size, close=null}) => {
  return (
    <div className="w-fit h-fit relative group mr-1 rounded-3xl">
      <svg onClick={close} className={`${!size ? "w-0" : 'miniSvg'} p-1`} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><rect fillOpacity=".01"/><path d="M8 8 40 40" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/><path d="M8 40 40 8" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/></svg>
    </div>
  );
};

export default Close;