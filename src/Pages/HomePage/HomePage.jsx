import { Suspense } from "react";
import Banner from "../../Components/Banner/Banner";
import Friend from "../../Components/Friend/Friend";

const dataPromise=fetch("/data.json").then((res)=>res.json())
const HomePage = () => {
  return (
   
  <div>
   <Banner></Banner>
   <Suspense fallback={<div className="min-h-[70vh] flex justify-center items-center"><span className="loading loading-dots loading-xl"></span></div>}>
      <Friend dataPromise={dataPromise}></Friend>
   </Suspense>
   
  </div>
   
  );
};

export default HomePage;