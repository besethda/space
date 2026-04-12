import { useState } from "react";
import Display from "../components/Display";
import UseApi from "../hooks/useApi";
import getMediaURL from "../utils/functions";
import Date from "../components/Date";

const Asteroids = ({ photoDisplay, setPhotoDisplay }) => {

  let width = window.innerWidth
  const [startDate, setStartDate] = useState('2026-06-12')
  const [endDate, setEndDate] = useState('2026-06-19')
  const [data, setData, loading] = UseApi(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=B3y4olgkjypsyU3FXPGigUAMkGrx4EIarZ87ezMV`)


  const fields = ["Name", "Asteroid", "Max Diameter", "Closest approach Date", "Orbiting Body", "Miss Distance", "Travel Speed"]
  let keys = data && data.element_count ? Object.keys(data.near_earth_objects) : null

  return (
    <div className="flex grow main pt-18 md:pt-25 px-3 overflow-scroll">
      {photoDisplay && <Display photoDisplay={photoDisplay} setPhotoDisplay={setPhotoDisplay} defaultTitle={"Asteroids"} />}
      {data && <div className="w-full box h-fit m-2 pb-3 px-2 relative shadow-black shadow-2xl rounded-3xl min-h-[30vh] max-h-[82vh] border border-cyan-300/30 overflow-y-scroll overflow-x-hidden bg-blend-multiply bg-cover" style={{ backgroundImage: `url('${getMediaURL('satellite.jpg')}')` }}>
        <div className="sticky top-0 bg-black/90 ">
          <div className="flex flex-col md:flex-row justify-between">
            {!loading && data.error ? <div className="txt font-semibold py-3 px-5">{data.error}</div>
              : !loading ? <div className="txt font-semibold py-3 px-5">{`${data && data.element_count} Objects Detected`}</div>
                : <div className="txt font-semibold py-3 px-5">Loading satellite data...</div>}
            <Date startDate={startDate} setStartDate={setStartDate} endDate={endDate} setEndDate={setEndDate} />
          </div>
          <div className="px-2 py-2 grid grid-cols-3 md:grid-cols-7 grid-rows-1 max-h-8 md:max-h-11 text-white font-semibold txt">
            {fields.map((e, i) => <div className={`${width < 800 && i > 2 ? 'fieldHidden': ''}`} key={i}>{e}</div>)}
          </div>
        </div>
        {keys && keys.map((e, index) => {
          return (
            <div key={`a${index}`} className="grid grid-cols-7 auto-rows-auto">
              <div className="col-span-7 border-b-cyan-400/10 border-b-2 my-1 text-xl px-2" >{e}</div>
              {data.near_earth_objects[e].map((f, i) => {
                return (
                  <a className="px-2 grid grid-cols-3 md:grid-cols-7 bg-transparent col-span-8 rounded-lg hover:bg-cyan-200/10 border-b border-b-cyan-500/10 duration-150" href={`${f.nasa_jpl_url}`} key={i}>
                    <div className="txt" >{f.name}</div>
                    <div className="txt" >{f.is_potentially_hazardous_asteroid ? "no" : "no"}</div>
                    <div className="txt" >{Math.floor(f.estimated_diameter.meters.estimated_diameter_max)}m</div>
                    {width > 700 && <>
                    <div className="txt " >{f.close_approach_data[0].close_approach_date}</div>
                    <div className="txt " >{f.close_approach_data[0].orbiting_body}</div>
                    <div className="txt " >{Math.floor(f.close_approach_data[0].miss_distance.kilometers)}km</div>
                    <div className="txt " >{Math.floor(f.close_approach_data[0].relative_velocity.kilometers_per_second)}km/s</div>
                    </>}
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