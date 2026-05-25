import React from 'react';

const FriendCard = ({d}) => {
  return (
    <div className="card bg-base-100 p-5 shadow-sm">
  <figure>
    <img
      src={d.picture}
      alt={d.name} className='rounded-full h-[80px] w-[80px]' />
  </figure>
  <div className='flex flex-col justify-center items-center space-y-2'>
    <h2 className="card-title text-center">
      {d.name}
      </h2>
    <p className='text-[#64748B]'>{d.days_since_contact}d ago</p>
     <div className='flex items-center gap-3'>
      <p className='bg-[#CBFADB] text-[#244D3F]  p-1.5 rounded-2xl'>{d.tags[0]}</p>
      <p className='bg-[#CBFADB] text-[#244D3F] p-1.5 rounded-2xl'>{d.tags[1]}</p>
     </div>
     <p className={`text-white rounded-2xl p-1.5 w-[100px] flex justify-center items-center ${d.status==='overdue'?'bg-red-600':d.status==='on-track'?'bg-[#244D3F]':'bg-[#EFAD44]'}`}>{d.status}</p>
  </div>
</div>
  );
};

export default FriendCard;