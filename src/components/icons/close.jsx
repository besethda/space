import { NavLink } from "react-router-dom";

const Close = ({size, close}) => {
  return (
    <div className="w-fit h-fit relative group mx-2 rounded-3xl">
      <svg onClick={close} style={{width: `${size}px`}} className="aspect-square svg p-1" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><rect fill="" fillOpacity=".01"/><path d="M8 8 40 40" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/><path d="M8 40 40 8" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/></svg>
    </div>
  );
};

export default Close;