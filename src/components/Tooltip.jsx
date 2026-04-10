const Tooltip = ({name}) => {
  return (
    <div className="w-full h-full absolute top-0 left-0 flex items-center pointer-events-none z-40">
      <div className="relative h-full w-full">
        <div className="bg-cyan-700/90 px-2 invisible py-1 rounded-xl absolute top-1/5 left-[110%] group-hover:visible">{name}</div>
      </div>
    </div>
  );
};

export default Tooltip;