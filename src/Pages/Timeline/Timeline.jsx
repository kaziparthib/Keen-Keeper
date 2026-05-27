
import { Link } from 'react-router';
import TimelineCard from '../../Components/timelinecard/TimelineCard';
import { TimelineContext } from '../../Context/Context';
import { useContext } from 'react';
const Timeline = () => {
  const {Timeline}=useContext(TimelineContext)
 
    if(Timeline.length===0){
      return(
       <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      {/* Icon / Illustration Container */}
      {/* <div className="p-4 bg-gray-100 rounded-full dark:bg-gray-800 text-gray-400 mb-6 animate-pulse">
        
      </div> */}

      {/* Main Message */}
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
        No Details Available
      </h2>
      
      {/* Subtext */}
      <p className="text-gray-500 dark:text-gray-400 max-w-sm mb-8">
        We couldn't find any information. It might have been moved, deleted, or never existed in the first place.
      </p>

      {/* Action Button */}
      <Link to={'/'}> 
           <button
        
        className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-sm transition-all duration-200 ease-in-out transform hover:-translate-y-0.5 active:translate-y-0"
      >
        
        Back to Home
      </button>
      </Link>
     
    </div>
      )
    }

  return (
    < div className='container mx-auto my-4 space-y-4'>
      {
        Timeline.map((t,index)=>(<TimelineCard t={t} key={index}></TimelineCard>))
      }
    </div>
  );
};

export default Timeline;