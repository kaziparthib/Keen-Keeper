import React, { use } from 'react';
import FriendCard from '../FriendCard/FriendCard';

const Friend = ({dataPromise}) => {
  const data=use(dataPromise)
  return (
    <div className='container mx-auto mb-5'>
      <div className='info-cards  text-center mx-[50px] mb-6 grid grid-cols-1 md:grid-cols-4 gap-4'>
        <div className='bg-[#FFFFFF] p-4 border border-[#8f8686] shadow-2xl'>
          <p className='text-[#244D3F] font-bold'>6</p>
          <p>Total Friends</p>
        </div>
        <div className='bg-[#FFFFFF] p-4 border border-[#8f8686] shadow-2xl '>
          <p className='text-[#244D3F] font-bold'>2</p>
          <p>On Track</p>
        </div>
        <div className='bg-[#FFFFFF] p-4 border border-[#8f8686] shadow-2xl '>
          <p className='text-[#244D3F] font-bold'>2</p>
          <p>Need Attention</p>
        </div>
        <div className='bg-[#FFFFFF] p-4 border border-[#8f8686] shadow-2xl'>
          <p className='text-[#244D3F] font-bold'>8</p>
          <p>Interactions This Month</p>
        </div>
      </div>
      <div>
       <h2 className='font-bold text-2xl mx-[50px]'>Your Friend</h2>
       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-[50px]'>
        {
          data.map((d)=>{
            return <FriendCard key={d.id} d={d}></FriendCard>
          })
        }
       </div>
      </div>
    </div>
  );
};

export default Friend;