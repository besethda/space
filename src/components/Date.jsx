import Search from "./icons/searchIcon"
import { useRef } from "react"

const Date = ({setStartDate, startDate, setEndDate, endDate}) => {

  const end = useRef(startDate)
  const start = useRef(endDate)

  const setDates = () => {
    setStartDate(start.current.value)
    console.log(start.current.value)
    setEndDate(end.current.value)
  }

  return (
    <div className="flex items-center pr-4">
      <Search size={36} click={setDates} tool={false}/>
      <div className="flex flex-col md:flex-row">
        <label className="ml-2 txt">Start Date:</label>
        <input ref={start} className="mx-3 outline-0 txt" type="date" id="start text-lg" />
      </div>
      <div className="flex flex-col md:flex-row">
        <label className="txt">End Date:</label>
        <input ref={end} className="mx-2 outline-0 txt" type="date" id="end" />
      </div>
    </div>
  )
}

export default Date