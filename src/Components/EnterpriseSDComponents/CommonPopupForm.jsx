import certfiedLogo from "../../assets/certified-logo.png"
import topDevelopers from "../../assets/top-developer.png"
const CommonPopupForm = ({closePopup}) => {
    const list=[
        "Custom Roadmap for Your Enterprise Software",
        "Feasibility & Budget Estimation",
        "Time-to-Market Forecast",
        "Free Initial Consultation"
    ]

    const imglist = [
        {
            id:1,
            url:certfiedLogo,
            alt:'logo'
        },
        {
            id:2,
            url:certfiedLogo,
            alt:'logo'
        },
        {
            id:3,
            url:certfiedLogo,
            alt:'logo'
        },
        {
            id:4,
            url:certfiedLogo,
            alt:'logo'
        },
        {
            id:5,
            url:certfiedLogo,
            alt:'logo'
        },
        {
            id:6,
            url:topDevelopers,
            alt:'logo'
        },
    ]
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
        <div className="w-[900px] bg-[#1c1c1c] rounded-xl h-[500px] mt-12 flex">
            <div className="bg-[#5489FC] rounded-xl basis-[45%] py-10 space-y-5 font-raleway pl-10 text-white">
                <p className="text-2xl max-w-[80%] font-bold">Hold Up! You’re Almost There...</p>
                <p>Let’s turn that idea into an enterprise-grade solution!</p>
                <div className="bg-[#1c34a0] py-5 pl-5 rounded-l-xl">
                    <p className="text-xs pb-3">Talk to our software experts and get:</p>
                    <ul className="space-y-3">
                    {
                        list.map((list) => <li className="flex items-center text-xs gap-2" key={list.id}>
                            <svg className="w-6 h-6 text-transparent dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#99FF92" viewBox="0 0 24 24">
  <path fillRule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z" clipRule="evenodd"/>
</svg>

                            {list}</li>)    
                    }
                    </ul>
                </div>
                <div className="flex gap-3 justify-start items-center">
                    {
                        imglist?.map((img) => (
                             <div key={img?.id} className="">
                         <img src={img?.url} alt={img?.alt} className="w-[40px] object-contain" />
                    </div>
                        ))
                    }
                   
                   
                </div>
            </div>
            <div className="bg-[#1c1c1c] py-10 rounded-xl basis-[55%] text-white">
                    <p className="text-[26px] font-semibold text-center">Let’s Connect</p>
                    <form>
                                <div className="relative flex flex-col w-full">
          <input
            name="firstName"
            className="peer bg-transparent capitalize outline-none border-b border-tertiary dark:border-white"
            id="firstName"
            // {...formik.getFieldProps("firstName")}
          />
          <label
            htmlFor="firstName"
            className={`w-full  absolute cursor-text bottom-1  peer-focus:text-xs   
              
             peer-focus:-translate-y-6 transition-all duration-300 peer-focus:text-primary font-medium peer-focus:dark:text-blue-400`}
          >
            First Name<span className="text-red-500">*</span>
          </label>
          <div className="before:content-[''] before:h-[1px] before:w-full before:bg-primary before:absolute before:bottom-0 scale-0 peer-focus:scale-100 transition-all duration-200 ease-linear before:dark:bg-blue-400"></div>
          {/* {formik.touched.firstName && formik.errors.firstName && (
            <p className="absolute -bottom-[18px] text-red-500 text-xs">
              *{formik.errors.firstName}
            </p>
          )} */}
        </div>
                    </form>
                    <button onClick={closePopup} >close</button>
            </div>
    
        </div>
    </div>
  )
}

export default CommonPopupForm