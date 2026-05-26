import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const FriendDetails = () => {
  const {fId}=useParams()
  const data=useLoaderData()
  const eData=data.find(d=>d.id===Number(fId))
  console.log(eData);
  return (
    <div className='container mx-auto mx-[40px] space-y-4 lg:flex items-center justify-center gap-3  my-8 '>
      <div className=' flex flex-col justify-center items-center space-y-7'>
        <div className='card bg-base-100 p-5 shadow-sm flex flex-col justify-center items-center space-y-2'>
          <figure>
            <img
      src={eData.picture}
      alt={eData.name} className='rounded-full h-[80px] w-[80px]' />
          </figure>
            
             <h2 className="card-title text-center">
      {eData.name}
      </h2>

          <p className={`text-white rounded-2xl p-1.5 w-[100px] flex justify-center items-center ${eData.status==='overdue'?'bg-red-600':eData.status==='on-track'?'bg-[#244D3F]':'bg-[#EFAD44]'}`}>{eData.status}</p>
            <div className='flex items-center gap-3'>
      <p className='bg-[#CBFADB] text-[#244D3F]  p-1.5 rounded-2xl'>{eData.tags[0]}</p>
      <p className='bg-[#CBFADB] text-[#244D3F] p-1.5 rounded-2xl'>{eData.tags[1]}</p>
             </div>
             <p>"{eData.bio}"</p>
             <p>Prefered:email</p>
        </div>
        <div><button className='card bg-base-100 p-5 shadow-sm '>Snooze 2 Weeks</button></div>
        <div><button className='card bg-base-100 p-5 shadow-sm '>Archive</button></div>
        <div><button className='card bg-base-100 p-5 shadow-sm '>Delete</button></div>
      </div>
      {/* another part */}
      <div className='space-y-7'>
        <div className='flex items-center justify-center gap-3'>
          <div className='card bg-base-100 p-5 shadow-sm'>
            <h2>
              {eData.days_since_contact}
            </h2>
            <p>Days Since Contact</p>
            </div>
          <div className='card bg-base-100 p-5 shadow-sm'>
            <h2>
              {eData.goal}
            </h2>
            <p>Goal(Days)</p>
          </div>
          <div className='card bg-base-100 p-5 shadow-sm'>
            <h2>{eData.next_due_date}</h2>
            <p>Next Due</p>
          </div>
        </div>
        {/* part 2 */}
        <div className='card bg-base-100 p-5 shadow-sm'>
          <div>
              <p>Relationship Goal</p>
              <p>Connect Every 30 Days</p>
          </div>
          <div>
            <button> edit</button>
          </div>
          
        </div>
        {/*  */}
        <div className='card bg-base-100 p-5 shadow-sm'>
          <p>Quick Check-In</p>
          <div className='flex items-center justify-center gap-2.5'>
            <button className='card bg-base-100 p-5 shadow-sm'>Call</button>
            <button className='card bg-base-100 p-5 shadow-sm'>Text</button>
            <button className='card bg-base-100 p-5 shadow-sm'>Video</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetails;