import { useEffect, useState } from "react"
import JobApplicationForm from "../Openings/JobApplicationForm";
import Careers from '../../assets/Careers.png'

// eslint-disable-next-line react/prop-types
const CareerForm = () => {
    const [showPopup , setShowPopup] = useState(false);

    useEffect(() => {
        showPopup ? document.body.style.position = "fixed" : document.body.style.position = "static"
      },[showPopup])
  return (
    <div className="w-[90%] my-10 max-w-[1000px] mx-auto bg-LightBlue shadow-custom-shadow rounded-xl font-raleway p-12">
       <div className="flex sm:flex-row flex-col-reverse items-center justify-center">
        <div className="font-medium basis-[50%] text-center sm:text-left">
            <div className="space-y-3 mb-8">
            <p className="custom-gradient-text sm:mx-0">Join Altumind</p>
            <p className="uppercase font-semibold">Shape The Future With Us</p>
            <p className="md:max-w-[65%]">Explore career opportunities and become part of our innovative team.</p>
            </div>
            <button onClick={() => setShowPopup(true)} className="bg-secondary px-10 py-2 rounded-full text-white ">Join Now</button>
        {/* <iframe frameBorder="0" style={{height:"550px", width:"100%", border:"none",}} src="
https://altumindglobal.zohorecruit.com/forms/abe8cbba6a90c77c4aac5394fdf9fab752ace39ffa01bb846874757ed68542db"></iframe> */}
        </div>
        <div className="basis-[50%]">
            <img className="mx-auto w-[320px]" src={Careers} alt="career" />
        </div>
        </div>
        {
            showPopup &&
            <JobApplicationForm setShowForm={setShowPopup}/>
        }
      
    </div>
  )
}

export default CareerForm