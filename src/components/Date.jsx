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
      <label className="ml-2 text-lg">Start Date:</label>
      <input ref={start} className="mx-3 outline-0" type="date" id="start text-lg" />
      <label className="text-lg">End Date:</label>
      <input ref={end} className="mx-2 outline-0 text-lg" type="date" id="end" />
    </div>
  )
}

export default Date