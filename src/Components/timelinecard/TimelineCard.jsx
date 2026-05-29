
import { IoIosText } from 'react-icons/io';
import { IoCallSharp } from 'react-icons/io5';
import { MdMissedVideoCall } from 'react-icons/md';

const TimelineCard = ({t}) => {
  
  return (
    <div className='flex items-center gap-3  bg-base-100 p-5 shadow-sm'>
      <div>{t.action==='text'?<IoIosText size='40px'/>:t.action==='call'?<IoCallSharp size='40px'/>:<MdMissedVideoCall size='40px'/>}</div>
      <div>
        <p><span className='text-2xl font-semibold text-green-900'>{t.action}</span> <span className='text-gray-400'>with {t.name}</span></p>
        <p className='text-gray-400'>{new Date(t.time).toLocaleString()}</p>
      </div>
    </div>
  );
};

export default TimelineCard;