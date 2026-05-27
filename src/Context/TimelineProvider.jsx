import { useState } from "react"
import { TimelineContext } from "./Context"

const TimelineContextProvider=({children})=>{

   const [Timeline,setTimeline]=useState([])
   return(<TimelineContext.Provider value={{Timeline,setTimeline }}>
    {children}
   </TimelineContext.Provider>)
}
export default TimelineContextProvider