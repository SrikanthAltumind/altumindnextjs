import React, { useEffect } from 'react'
import Markdown from 'react-markdown';
import { useLocation , useNavigate} from 'react-router-dom'
import { convertToUrlFormat } from '../ReactFunctions';



const JobDetailsUpdated = () => {
    const location = useLocation()
    const jobdetails = location.state;
    console.log(jobdetails,  'res')
    const navigate = useNavigate()
  

    useEffect(() => {
      if(!jobdetails){
        navigate("/404")
      }
    },[])

  return (
    // <div className='mx-auto w-[90%] relative pb-10'>
    // <div className='flex sticky z-20 top-[70px] bg-white p-5 justify-between items-center border-b-[1px] border-gray-300'>
    // <div>
    //   <p className='font-semibold text-[26px]'> {jobdetails?.Job_Opening_Name}</p>
    //   <div className='flex gap-3 items-center text-gray-600'>
    //     <p>{jobdetails?.Work_Experience}</p>
    //      {jobdetails?.Remote_Job === true && <p>Remote</p>}
    //     <p>{jobdetails?.Job_Type}</p>
    //   </div>
    // </div>
    // <div>
    //     <button  className='rounded-md z-10 bg-[#E42D38] text-white font-medium text-sm py-3 px-5'>Apply Now</button>
    // </div>
    // </div>
    //     <div className='space-y-8 p-5'>
    //         <div>
    //         <p className='font-medium text-xl mb-3'>Required Skills</p>
    //         <p>{jobdetails?.Required_Skills}</p>
    //         </div>
    //         <div>
    //         <p className='font-medium text-xl mb-3'>Job Description</p>
    //         <Markdown className="markdown">{jobdetails?.Job_Description}</Markdown>
    //         </div>
    //         <div className='flex justify-between items-center'>
    //         <button  className='rounded-md z-10 bg-[#E42D38] text-white font-medium text-sm py-3 px-5'>Apply Now</button>
    //         <a href="/career/open-roles" className="group text-[#DD5143]">
    //           <p className="flex gap-1 items-center underline-offset-1 underline">
    //             <span className="text-lg  font-medium cursor-pointer">
    //               Explore More Jobs
    //             </span>
    //             <span>
    //               <svg
    //                 className="w-6 h-6 group-hover:translate-x-3 transition-all duration-300"
    //                 aria-hidden="true"
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 width="24"
    //                 height="24"
    //                 fill="none"
    //                 viewBox="0 0 24 24"
    //               >
    //                 <path
    //                   stroke="currentColor"
    //                   strokeLinecap="round"
    //                   strokeLinejoin="round"
    //                   strokeWidth="2"
    //                   d="M19 12H5m14 0-4 4m4-4-4-4"
    //                 />
    //               </svg>
    //             </span>
    //           </p>
    //         </a>
    //         </div>
    //     </div>
    // </div>
    <>
    <div className='bg-LightBlue font-raleway py-10 lg:h-[400px] flex items-center'>
      <div className='w-[90%] mx-auto space-y-5'>
      <p className='font-bold text-4xl'>{jobdetails?.Job_Opening_Name}</p>
      <div className='flex-wrap flex gap-x-10 gap-y-3 text-lg'>
        <p>Experience: <span className='font-semibold'>{jobdetails?.Work_Experience}</span></p>
        {jobdetails?.Remote_Job === true ? <p>Location: <span className='font-semibold'>Remote</span></p> : <p>Location: <span className='font-semibold'>{jobdetails?.city},{jobdetails?.country}</span></p>}    
      </div>
      <p className='font-montserrat max-w-[90%]'>{jobdetails?.Banner_description}</p>
      <button className='px-10 py-3 rounded-md bg-secondary text-white font-semibold hover:scale-105 transition-all' onClick={()=>{navigate(`/jobs/${convertToUrlFormat(jobdetails?.Job_Opening_Name)}/ApplyNow`, {state:jobdetails})}}>Apply Now</button>
      <p className='text-blue-900 font-medium text-lg'>Or Send your resume at <a href="mailto:careers@altumindglobal.com">careers@altumindglobal.com</a></p>
      </div>
    </div>
    <div className='w-[90%] mx-auto py-10 font-montserrat'>
      <p className='text-primary text-2xl font-bold py-3 font-raleway'>Roles & Responsiblities:</p>
      <Markdown className="markdown">{jobdetails?.Job_Description}</Markdown>
      <p className='text-primary text-2xl font-bold py-3 font-raleway'>Must have Skills:</p>
      <Markdown className="markdown">{jobdetails?.Must_Have_Skills}</Markdown>
    </div>
    <div className='bg-LightBlue mb-5'>
      <div className='w-[90%] mx-auto py-16 items-center space-y-5'>
        <p className='text-4xl font-bold'>Didn&apos;t Find a Job?</p>
        <div className='space-y-2'>
        <p className='text-lg'>No issues, send us a open request at</p>
        <p><a className='text-xl text-blue-800 font-semibold underline underline-offset-2' href="mailto:careers@altumindglobal.com">careers@altumindglobal.com</a></p></div>
      </div>
    </div>
    </>
  )
}

export default JobDetailsUpdated