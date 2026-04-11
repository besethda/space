import { useState } from "react";
import Display from "../components/Display";
import UseApi from "../hooks/useApi";
import getMediaURL from "../utils/functions";
import Date from "../components/Date";

const Asteroids = ({ photoDisplay, setPhotoDisplay }) => {

  const [startDate, setStartDate] = useState('2026-06-12')
  const [endDate, setEndDate] = useState('2026-06-19')
  const [data, setData, loading] = UseApi(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=B3y4olgkjypsyU3FXPGigUAMkGrx4EIarZ87ezMV`)


  const fields = ["Name", "Closest approach Date", "Max Diameter", "Orbiting Body", "Miss Distance", "Travel Speed", "Potential Asteroid"]
  let keys = data && data.element_count ? Object.keys(data.near_earth_objects) : null

  return (
    <div className="flex grow main pt-25 px-3 overflow-scroll">
      {photoDisplay && <Display photoDisplay={photoDisplay} setPhotoDisplay={setPhotoDisplay} defaultTitle={"Asteroids"} />}
      {data && <div className="w-full box h-fit m-2 pb-3 px-2 relative shadow-black shadow-2xl rounded-3xl min-h-[30vh] max-h-[82vh] overflow-y-scroll overflow-x-hidden bg-blend-multiply bg-cover" style={{ backgroundImage: `url('${getMediaURL('satellite.jpg')}')` }}>
        <div className="sticky top-0 bg-black/90 ">
          <div className="flex justify-between">
            {!loading && data.error ? <div className="text-white text-lg py-3 px-5">{data.error}</div>
              : !loading ? <div className="text-white text-lg py-3 px-5">{`${data && data.element_count} Objects Detected`}</div>
                : <div className="text-white text-lg py-3 px-5">Loading satellite data...</div>}
            <Date startDate={startDate} setStartDate={setStartDate} endDate={endDate} setEndDate={setEndDate} />
          </div>
          <div className="px-2 py-2 grid grid-cols-7 text-white font-semibold text-md">
            {fields.map((e, i) => <div key={i}>{e}</div>)}
          </div>
        </div>
        {keys && keys.map((e, index) => {
          return (
            <div key={`a${index}`} className="grid grid-cols-7 auto-rows-auto">
              <div className="text-white col-span-7 border-b-cyan-400/10 border-b-2 my-1 text-xl px-2" >{e}</div>
              {data.near_earth_objects[e].map((f, i) => {
                return (
                  <a className="px-2 grid grid-cols-7 bg-transparent col-span-8 rounded-lg hover:bg-cyan-200/10 border-b border-b-cyan-500/10 duration-150" href={`${f.nasa_jpl_url}`} key={i}>
                    <div className="text-white" >{f.name}</div>
                    <div className="text-white" >{f.close_approach_data[0].close_approach_date}</div>
                    <div className="text-white" >{Math.floor(f.estimated_diameter.meters.estimated_diameter_max)}m</div>
                    <div className="text-white" >{f.close_approach_data[0].orbiting_body}</div>
                    <div className="text-white" >{Math.floor(f.close_approach_data[0].miss_distance.kilometers)}km</div>
                    <div className="text-white" >{Math.floor(f.close_approach_data[0].relative_velocity.kilometers_per_second)}km/s</div>
                    <div className="text-white" >{f.is_potentially_hazardous_asteroid ? "no" : "no"}</div>
                  </a>
                )
              })}
            </div>
          )
        })}
      </div>}
    </div>
  );
};

export default Asteroids;