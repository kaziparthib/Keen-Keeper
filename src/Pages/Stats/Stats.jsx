
import { Legend, Pie, PieChart } from 'recharts';
import { TimelineContext } from '../../Context/Context';
import { useContext } from 'react';
const Stats = () => {
  const {Timeline}=useContext(TimelineContext)
  const call=Timeline.filter(t=>t.action==='call')
  const videoCall=Timeline.filter(t=>t.action==='video-call')
  const text=Timeline.filter(t=>t.action==='text')
  console.log('also',call);
  console.log('this is',Timeline);
  const data = [
  { name: 'call', value: call.length, fill: '#244D3F' },
  { name: 'text', value: text.length, fill: '#7E35E1' },
  { name: 'video-call', value:videoCall.length, fill: '#37A163' },
  
];
  return (
    <div className='container mx-auto flex flex-col justify-center items-center my-5 border border-slate-300'>
      <h1 className='text-4xl font-bold mb-2'>Friendship Analytics</h1>
      
      <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }} responsive>
      <Pie
        data={data}
        innerRadius="80%"
        outerRadius="100%"
        // Corner radius is the rounded edge of each pie slice
        cornerRadius="50%"
        fill="#8884d8"
        // padding angle is the gap between each pie slice
        paddingAngle={5}
        dataKey="value"
        isAnimationActive={true}
      />
      <Legend></Legend>
    </PieChart>
      
     
    </div>
  );
};

export default Stats;