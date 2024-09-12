import FixedBid from '../../assets/Fixed Bid.png'

const EngModel = () => {
  return (
    // <div  className="w-[90%] py-5 bg-slate-300 mx-auto">
    //     <div className="w-[600px] border-b-2 border-r-2 border-l-2 border-black relative flex gap-10 rounded-b-full h-[300px] items-end justify-center mx-auto bg-green-200">
    //       <div className="h-[90px] absolute top-0 -left-10 w-[90px] bg-slate-600 rounded-full"></div>
    //       <div className="h-[90px] absolute top-[150px] left-10 w-[90px] bg-slate-600 rounded-full"></div>
    //       <div className="h-[90px] absolute top-[150px] right-10 w-[90px] bg-slate-600 rounded-full"></div>
    //       <div className="h-[90px] absolute -bottom-10  w-[100px] bg-slate-600 rounded-full"></div>
          
    //       <div className="h-[90px] absolute -right-10 top-0 w-[90px] bg-slate-600 rounded-full"></div>
    //     </div>
    // </div>

<div  className="w-[90%] py-5 bg-slate-300 mx-auto">
<div className="sm:max-w-[80%] max-w-[70%] relative h-[700px] mx-auto border-l-2 border-black  bg-green-200">
  <div className="absolute top-10 -left-12 flex-col sm:flex-row flex gap-10">
    <div className='flex gap-5 items-center w-full bg-red-400'>
    <div className=" h-[90px] border-4 shadow-custom-shadow hover:bg-[#02194A] hover:scale-125 border-white w-[90px] flex  justify-center items-center bg-[#C2DDE6] rounded-full">
    <img src={FixedBid} alt="Fixed Bid" className='w-[40px]' />
    </div>
    <div className='basis-[60%]'>
      <p className='font-semibold'>Fixed Bid</p>
      <p>Predictable costs for well-defined projects Clear scope, fixed budget, and peace of mind</p>
    </div>
    </div>
 
  <div className="h-[90px]  w-[90px] bg-LightBlue rounded-full"></div>
  <div className="h-[90px]  w-[90px] bg-slate-600 rounded-full"></div>
  <div className="h-[90px]  w-[90px] bg-slate-600 rounded-full"></div>
  <div className="h-[90px]  w-[90px] bg-slate-600 rounded-full"></div>
  </div>
</div>
</div>
  )
}

export default EngModel
