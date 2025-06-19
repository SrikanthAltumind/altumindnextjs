import { useFormik } from 'formik';
import * as yup from "yup";
import caseStudyPopupBannerImg from '../../assets/Case study pop-up.webp'
import emailjs from "@emailjs/browser";
import { useState } from 'react';

const initialFormData = {
  name: "",
  email: "",
};

const ViewCaseStudyPopup = ({openedCaseStudy, setOpenedCaseStudy}) => {
    const fileData = openedCaseStudy?.attributes?.file?.data?.attributes
    const [error, setError] = useState(false)

      const validationSchema = yup.object({
        name: yup
          .string()
          .required("Required")
          .matches(/^[A-Za-z ]+$/, "Enter only alphabet")
          .test(
            "leading-space",
            "Cannot start with space",
            (value) => !value.startsWith(" ")
          )
          .min(2, "Name is too short"),
        email: yup
          .string()
          .required("Required")
          .matches(
            /^[A-Z0-9._%+-]{3,}@[A-Z0-9.-]{2,}\.[A-Z]{2,}$/i,
            "Invalid email"
          )
      });


      const downloadPDF = () => {
        window.open(fileData.url, '_blank')
        setOpenedCaseStudy(false)
        // const a = document.createElement('a');
        // a.href = fileData.url;
        // a.target = '_blank'
        // a.download = fileData.name;
        // document.body.appendChild(a);
        // a.click();
        // a.remove();
    };


    const onSubmit = (formData, actions)=>{
        const templateParams = {
          from_name: formData.name,
          email: formData.email,
        }
         emailjs.send(
            import.meta.env.VITE_APP_MAIL_SERVICE_ID,
            import.meta.env.VITE_APP_MAIL_TEMPLATE2_ID,
            templateParams,
            import.meta.env.VITE_APP_MAIL_PUBLIC_KEY
          )
          .then(response=> {
                console.log('Message sent successfully!')
                console.log(response)
                setError(false)
                actions.resetForm();
                downloadPDF()
          })
          .catch(error=> {
            console.error("FAILED...", error);
            setError(true);
            formik.setSubmitting(false)
          })

        
      }

    let formik = useFormik({
      initialValues:initialFormData,
      onSubmit,
      validationSchema,
    });

  return (
     <div className='fixed top-0 left-0 h-screen w-full bg-black bg-opacity-70 flex justify-center items-center z-50'>
        <div className="relative h-[400px] overflow-y-auto  md:flex-row-reverse mt-12 sm:flex bg-white text-black rounded-md w-[90%] max-w-[750px] font-raleway">
          <button aria-label="Close" onClick={()=> setOpenedCaseStudy(false)} className='border border-black w-6 h-6 rounded-full absolute right-1 top-1 bg-white flex justify-center items-center'>
            <svg className="w-4 h-4 text-black dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6"/>
            </svg>

            </button>
          
          <div className="basis-[60%] px-5 sm:px-8 py-4 sm:py-14">
            <div className="space-y-3">
              <p className="font-bold sm:text-2xl">Download Free Case Study</p>
              <p className="text-xs sm:text-[13px] font-medium sm:font-semibold">Fill In Your Details Below To Download The Case Study Instantly. Discover All The Details You Need In One Place!</p>
            </div>
            <form
                onSubmit={formik.handleSubmit}
                className="space-y-12 pt-10 font-medium font-raleway"
            >
              <div className="space-y-12">
              {/* Name */}
              <div className="relative flex flex-col w-full">
                <input
                  name="name"
                  className="peer bg-transparent capitalize outline-none border-b border-tertiary dark:border-white"
                  id="name"
                  {...formik.getFieldProps("name")}
                />
                <label
                  htmlFor="name"
                  className={`w-full  absolute cursor-text bottom-1  peer-focus:text-xs   ${
                    formik.values?.name
                      ? "text-xs -translate-y-6"
                      : "text-sm lg:text-base"
                  } peer-focus:-translate-y-6 transition-all duration-300 peer-focus:text-primary font-medium peer-focus:dark:text-blue-400`}
                >
                  Name<span className="text-red-500">*</span>
                </label>
                <div className="before:content-[''] before:h-[1px] before:w-full before:bg-primary before:absolute before:bottom-0 scale-0 peer-focus:scale-100 transition-all duration-200 ease-linear before:dark:bg-blue-400"></div>
                {formik.touched.name && formik.errors.name && (
                  <p className="absolute -bottom-[18px] text-red-500 text-xs">
                    *{formik.errors.name}
                  </p>
                )}
              </div>
              {/* Email */}
              <div className="relative flex flex-col w-full">
                <input
                    name="email"
                    className=" peer  bg-transparent outline-none border-b border-tertiary dark:border-white"
                    type="email"
                    id="email"
                    {...formik.getFieldProps("email")}
                />
                <label
                    htmlFor="email"
                    className={`w-full absolute cursor-text bottom-1 peer-focus:text-xs ${
                    formik.values?.email
                        ? "text-xs -translate-y-6"
                        : "text-sm lg:text-base"
                    } peer-focus:-translate-y-6 transition-all  duration-300 peer-focus:text-primary font-medium peer-focus:dark:text-blue-400`}
                >
                    Business Email<span className="text-red-500">*</span>
                </label>
                <div className="before:content-[''] before:h-[1px] before:w-full before:bg-primary before:absolute before:bottom-0 scale-0 peer-focus:scale-100 transition-all duration-300 before:dark:bg-blue-400 ease-linear"></div>
                {formik.touched.email && formik.errors.email && (
                    <p className="absolute -bottom-[18px] text-red-500 text-xs">
                    *{formik.errors.email}
                    </p>
                )}
                </div>
            </div>

          <div>
            {error && <p className='text-red-500 text-sm mb-3'>Something went wrong, please try again.</p>}
            {/* Submit/Download Button */}
            <button
                type="submit"
                disabled={formik.isSubmitting}
                aria-label="Submit"
                className="disabled:bg-[#0000009e] px-10 py-2.5 text-sm bg-[#000000] hover:bg-[#000000] text-white rounded-full"
                >
                {formik.isSubmitting ? (
                    <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-white animate-spin fill-[#0000009e] "
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                    />
                    <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                    />
                    </svg>
                ) : (
                    "Download Now"
                )}
              </button>
              </div>
            </form>
          </div>
          <div className="basis-[40%]">
            <img src={caseStudyPopupBannerImg}
                className='object-cover rounded-md h-full ' 
            alt='Case_Study_Banner_image'/>
          </div>
        </div>
      </div>
  )
}

export default ViewCaseStudyPopup