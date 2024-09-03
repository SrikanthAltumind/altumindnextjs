import axios from "axios";
import { useFormik } from "formik";
import * as yup from "yup";
import Popup from "../common-components/Popup";
import { useEffect, useState } from "react";

const contentSection = {
  project : {
    title: 'Your Vision, Our Expertise',
    caption:'start a project',
    description:`Outline your project, and we'll help you with solutions that align perfectly with your goals. `,
    imgUrl:'https://alt-digital-cms.s3.ap-south-1.amazonaws.com/Projects_Compressify_io_76a2088943.webp'
  },

  partner : {
    title: 'Amplify transformation',
    caption:'Partnership Enquiries',
    description:`Explore partnership opportunities with Altumind to extend your 
              software solutionsto new markets and industries.`,
    imgUrl:'https://alt-digital-cms.s3.ap-south-1.amazonaws.com/Partnership_Compressify_io_c83693b19d.webp'
  },

  general : {
    title: 'Curiosity Welcomed',
    caption:'General Queries',
    description:`What's on your mind? Share your thoughts, and let's start a conversation that could transform your business.`,
    imgUrl:'https://alt-digital-cms.s3.ap-south-1.amazonaws.com/Genral_Compressify_io_a6ea7066a4.webp'
  },
  career : {
    title: 'Shape The Future With Us',
    caption:'Join altumind',
    description:`Explore career opportunities and become part of our innovative team.`,
    imgUrl:'https://alt-digital-cms.s3.ap-south-1.amazonaws.com/Careers_Compressify_io_7817557ffb.webp'
  }
}

const initialFormData = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    companyName: "",
    howDidYouHearAboutUs:"",
    message: "",
    upload:"",
  };

const ContactForm = ({selectedForm}) => {
  const leftSection = contentSection[selectedForm]
  const [showPopup, setShowPopup] = useState(false);
  const [file, setFile] = useState()
  const [presignedUrl, setPresignedUrl] = useState()
  const [dropdown, setDropDown] = useState(false)
  const [interest, setInterest] = useState("")
  const [initialValues, setInitialValues] = useState(initialFormData)

  const requiredField = yes=> yes ? yup.string().required('Required') : yup.string()

  const validationSchema = yup.object({
    firstName: yup
      .string()
      .required("Required")
      .matches(/^[A-Za-z ]+$/, "Enter only alphabet")
      .test(
        "leading-space",
        "Cannot start with space",
        (value) => !value.startsWith(" ")
      )
      .min(2, "Name is too short"),
    lastName: yup
      .string()
      .required("Required")
      .matches(/^[A-Za-z ]+$/, "Enter only alphabet")
      .test(
        "leading-space",
        "Cannot start with space",
        (value) => !value.startsWith(" ")
      )
      .min(2, "Name is too short"),
    companyName: requiredField(selectedForm !== 'career')
    //   .string()
      .matches(/^[A-Za-z ]+$/, "Enter only alphabet")
      .test(
        "leading-space",
        "Cannot start with space",
        // (value) => !value.startsWith(" ")
        (value) => value ? !value.startsWith(" ") : true
      )
      .min(4, "Name is too short"),
    phone: requiredField(selectedForm === 'career')
    //   .string()
      .matches(/^[0-9]+$/, "Enter only digits")
      .length(10, "Number should have 10 digits"),
    email: yup
      .string()
      .required("Required")
      .matches(
        /^[A-Z0-9._%+-]{3,}@[A-Z0-9.-]{2,}\.[A-Z]{2,}$/i,
        "Invalid email"
      ),
      howDidYouHearAboutUs: yup
      .string()
      .required("Required"),
    message: requiredField(selectedForm !== 'career')
    //   .string()
      .test(
        "leading-space",
        "Cannot start with space",
        // (value) => !value.startsWith(" ")
        (value) => value ? !value.startsWith(" ") : true
      )
      .min(2, "Message should have atleast 2 characters"),
  });

  const sendData = async (formData, fileUrl=null) => {
      if(selectedForm==='career'){   //Career Form API
        const payload = {
          data: {
            firstname: formData.firstName.trim(),
            lastname: formData.lastName.trim(),
            email: formData.email.trim(),
            contact: formData.phone,
            company: formData.companyName.trim(),
            aboutyou: formData.message.trim(),
            hearAboutUs: formData.howDidYouHearAboutUs.trim(),
            // upload: fileUrl.split('?')[0],
          },
        };
        console.log('Career Form Data Payload', payload)
        await axios.post(`${import.meta.env.VITE_APP_API_URL}api/contact-for-careers`, payload)
        console.log('Career data sent successfully!');
      }
      else{   //Projects, Partnership, General Forms API
        const payload = {
          data: {
            firstname: formData.firstName.trim(),
            lastname: formData.lastName.trim(),
            email: formData.email.trim(),
            phone: formData.phone,
            company: formData.companyName.trim(),
            hearAbout: formData.howDidYouHearAboutUs.trim(),
            message: formData.message.trim(),
            // upload: fileUrl.split('?')[0],
            formType: selectedForm,
          },
        };
        console.log('Form Data Payload', payload)
        await axios.post(`${import.meta.env.VITE_APP_API_URL}api/contact-for-projects`, payload)
        console.log('Contact data sent successfully!');
      }
  };


  const getPresignedurl = async (file) => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_APP_API_URL}api/v1/getSignedurl?contenttype=${file.type}&filename=${file.name}`,{withCredentials:true});
      console.log('getPresignedurl',response?.data?.data);
      if (response.data && response.data.data) {
        setPresignedUrl(response.data.data);
        return response.data.data;
      } else {
        console.error('Presigned URL not found in the response.');
        return null;
      }
    
    } catch (error) {
      console.error('Error fetching presigned URL:', error);
    }
  };

//   const uploadFile = async () => {
//     try {
//       const presignedUrlResponse = await getPresignedurl(file);
//       if (!presignedUrlResponse) {
//         console.error('Presigned URL is null or undefined.');
//         // Handle this case appropriately, e.g., display an error message
//         return;
//       }
//       await axios.put(presignedUrlResponse.url, file, {withCredentials:true,  'Content-Type': file.type})
//       console.log('File uploaded successfully!');
//       console.log('filetype', file.type);
//       await sendData(presignedUrlResponse.url);
//       setUploadSuccess(true);
//       setPopUp(true)

//     }catch(error){
//       console.error('Error uploading file:', error);
//       if (error.response) {
//         // The request was made and the server responded with a status code
//         console.error('Response status:', error.response.status);
//         console.error('Response data:', error.response.data);
//       } else if (error.request) {
//         // The request was made but no response was received
//         console.error('No response received:', error.request);
//       } else {
//         // Something happened in setting up the request that triggered an Error
//         console.error('Request setup error:', error.message);
//       }
//     }finally {
//       // setUploading(false);
//       setSubmitting(false);
//     }
// };


  const onSubmit = async (formData, { resetForm }) => {
    try {
      // const presignedUrlResponse = await getPresignedurl(file);
      // if (!presignedUrlResponse) {
      //   console.error('Presigned URL is null or undefined.');
      //   // Handle this case appropriately, e.g., display an error message
      //   return;
      // }
      // await axios.put(presignedUrlResponse.url, file, {withCredentials:true,  'Content-Type': file.type})
      // console.log('File uploaded successfully!');
      // console.log('filetype', file.type);
      await sendData(formData);
      // await sendData(formData, presignedUrlResponse.url);
      console.log('Resetting Form')
      resetForm();
      setShowPopup(true);

    }catch(error){
      console.error('Error submitting form:', error);
      if (error.response) {
        // The request was made and the server responded with a status code
        console.error('Response status:', error.response.status);
        console.error('Response data:', error.response.data);
      } else if (error.request) {
        // The request was made but no response was received
        console.error('No response received:', error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error('Request setup error:', error.message);
      }
    }finally {
      console.log('Finally-BLock..........')
    }
  }

  let formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });
  
  useEffect(()=> {
    setInitialValues(initialFormData)
    console.log(selectedForm)
  }, [selectedForm])
  return (
    <div className={`w-[90%] md:w-[95%] max-w-[1200px] mx-auto dark:text-white flex flex-col md:flex-row shadow-custom-shadow`}>
      <div className="basis-[30%] shrink-0 p-5 lg:p-10 pb-2 font-raleway bg-LightBlue dark:bg-DarkBackground flex flex-col items-center md:items-start gap-4">
        <img src={leftSection?.imgUrl} className="w-36 h-36 lg:w-52 lg:h-52 object-cover bg-merald-200"/>
          <p className="custom-gradient-text md:mx-0 max-md:text-center text-2xl lg:text-3xl">{leftSection?.title}</p>
          <p className="uppercase font-semibold text-xs sm:text-sm">{leftSection?.caption}</p>
          <p className="max-md:text-center text-xs sm:text-sm lg:text-base max-w-[450px] font-montserrat font-medium leading-5">
              {leftSection?.description}
          </p>
          <svg className="w-14 h-12 text-secondary" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 12H5m14 0-4 4m4-4-4-4"/>
          </svg>
      </div>
      <form
        onSubmit={formik.handleSubmit}
        className="basis-[70%]  space-y-12 py-10 px-5 lg:px-10 font-montserrat font-medium "
      >
        <div className="sm:flex items-center gap-8 max-sm:space-y-14">
          {/* First Name */}
          <div className="relative flex flex-col w-full">
            <input
              name="firstName"
              className="peer bg-transparent outline-none border-b border-tertiary dark:border-white"
              id="firstName"
              {...formik.getFieldProps("firstName")}
            />
            <label
              htmlFor="firstName"
              className={`w-full  absolute cursor-text bottom-1  peer-focus:text-xs   ${
                formik.values?.firstName ? "text-xs -translate-y-6" : "text-sm lg:text-base"
              } peer-focus:-translate-y-6 transition-all duration-300 peer-focus:text-primary font-medium peer-focus:dark:text-blue-400`}
            >
              First Name<span className="text-red-500">*</span>
            </label>
            <div className="before:content-[''] before:h-[1px] before:w-full before:bg-primary before:absolute before:bottom-0 scale-0 peer-focus:scale-100 transition-all duration-200 ease-linear before:dark:bg-blue-400"></div>
            {formik.touched.firstName && formik.errors.firstName && (
              <p className="absolute -bottom-[18px] text-red-500 text-xs">
                *{formik.errors.firstName}
              </p>
            )}
          </div>
         {/* Last Name */}
         <div className="relative flex flex-col w-full">
            <input
              name="lastName"
              className="peer bg-transparent outline-none border-b border-tertiary dark:border-white"
              id="lastName"
              {...formik.getFieldProps("lastName")}
            />
            <label
              htmlFor="lastName"
              className={`w-full absolute cursor-text bottom-1  peer-focus:text-xs   ${
                formik.values?.lastName ? "text-xs -translate-y-6" : "text-sm lg:text-base"
              }  peer-focus:-translate-y-6 transition-all duration-300 peer-focus:text-primary font-medium peer-focus:dark:text-blue-400`}
            >
              Last Name<span className="text-red-500">*</span>
            </label>
            <div className="before:content-[''] before:h-[1px] before:w-full before:bg-primary before:absolute before:bottom-0 scale-0 peer-focus:scale-100 transition-all duration-200 ease-linear before:dark:bg-blue-400"></div>
            {formik.touched.lastName && formik.errors.lastName && (
              <p className="absolute -bottom-[18px] text-red-500 text-xs">
                *{formik.errors.lastName}
              </p>
            )}
          </div>
        </div>
        <div className="sm:flex items-center gap-8 max-sm:space-y-14">
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
                formik.values?.email ? "text-xs -translate-y-6" : "text-sm lg:text-base"
              } peer-focus:-translate-y-6 transition-all  duration-300 peer-focus:text-primary font-medium peer-focus:dark:text-blue-400`}
            >
              Email<span className="text-red-500">*</span>
            </label>
            <div className="before:content-[''] before:h-[1px] before:w-full before:bg-primary before:absolute before:bottom-0 scale-0 peer-focus:scale-100 transition-all duration-300 before:dark:bg-blue-400 ease-linear"></div>
            {formik.touched.email && formik.errors.email && (
              <p className="absolute -bottom-[18px] text-red-500 text-xs">
                *{formik.errors.email}
              </p>
            )}
          </div>
          {/* Phone */}
          <div className="relative flex flex-col w-full">
            <input
              name="phone"
              className="peer bg-transparent outline-none border-b border-tertiary dark:border-white"
              type="text"
              id="phone"
              maxLength={10}
              {...formik.getFieldProps("phone")}
            />
            <label
              htmlFor="phone"
              className={`w-full absolute cursor-text bottom-1 peer-focus:text-xs ${
                formik.values?.phone ? "text-xs -translate-y-6" : "text-sm lg:text-base"
              }  peer-focus:-translate-y-6 transition-all  duration-300 peer-focus:text-primary font-medium peer-focus:dark:text-blue-400`}
            >
              Phone{selectedForm==='career'&& <span className="text-red-500">*</span>}
            </label>
            <div className="before:content-[''] before:h-[1px] before:w-full before:bg-primary before:absolute before:bottom-0 scale-0 peer-focus:scale-100 transition-all duration-300 before:dark:bg-blue-400 ease-linear"></div>
            {formik.touched.phone && formik.errors.phone && (
              <p className="absolute -bottom-[18px] text-red-500 text-xs">
                *{formik.errors.phone}
              </p>
            )}
          </div>
        </div>
        <div className="sm:flex items-end gap-8 md:gap-6 lg:gap-8 max-sm:space-y-14">
          {/* Company Name */}
          <div className="relative flex flex-col w-full">
            <input
              name="companyName"
              className="peer bg-transparent outline-none border-b border-tertiary dark:border-white"
              id="companyName"
              {...formik.getFieldProps("companyName")}
            />
            <label
              htmlFor="companyName"
              className={`w-full absolute cursor-text bottom-1  peer-focus:text-xs   ${
                formik.values?.companyName ? "text-xs -translate-y-6" : "text-sm lg:text-base"
              }  peer-focus:-translate-y-6 transition-all duration-300 peer-focus:text-primary font-medium peer-focus:dark:text-blue-400`}
            >
             Company Name{selectedForm!=='career'&& <span className="text-red-500">*</span>}
            </label>
            <div className="before:content-[''] before:h-[1px] before:w-full before:bg-primary before:absolute before:bottom-0 scale-0 peer-focus:scale-100 transition-all duration-200 ease-linear before:dark:bg-blue-400"></div>
            {formik.touched.companyName && formik.errors.companyName && (
              <p className="absolute -bottom-[18px] text-red-500 text-xs">
                *{formik.errors.companyName}
              </p>
            )}
          </div>
          {/* How did you hear about us */}
          <div className="relative flex flex-col w-full ">
            <select
              name="howDidYouHearAboutUs"
              className="cursor-pointer text-sm  lg:text-base bg-transparent outline-none border-b border-tertiary dark:border-white dark:focus:border-blue-400 "
              id="howDidYouHearAboutUs"
              {...formik.getFieldProps("howDidYouHearAboutUs")}
            >
              <option className="dark:bg-DarkBackground" value="">How did you hear about us ?*</option>
              <option className="dark:bg-DarkBackground" value="Ad Campaign" >Ad Campaign </option>
              <option className="dark:bg-DarkBackground" value="Search Engine (Google, Bing, etc.)" >Search Engine (Google, Bing, etc.)</option>
              <option className="dark:bg-DarkBackground" value="Social media" >Social media</option>
              <option className="dark:bg-DarkBackground" value="LinkedIn" >LinkedIn</option>
              <option className="dark:bg-DarkBackground" value="Business Directory" >Business Directory</option>
              <option className="dark:bg-DarkBackground" value="Networking Event, Webinars " >Networking Event, Webinars </option>
              <option className="dark:bg-DarkBackground" value="Recommended by colleague" >Recommended by colleague</option>
              <option className="dark:bg-DarkBackground" value="Third party Review " >Third party Review </option>
              <option className="dark:bg-DarkBackground" value="Worked with Altumind Previously" >Worked with Altumind Previously</option>
              <option className="dark:bg-DarkBackground" value="Other" >Other</option>
            </select>
            {formik.touched.howDidYouHearAboutUs && formik.errors.howDidYouHearAboutUs && (
              <p className="absolute -bottom-[18px] text-red-500 text-xs">
                *{formik.errors.howDidYouHearAboutUs}
              </p>
            )}
          </div>
        </div>
        {/* How can we help */}
        <div className="relative flex flex-col w-full">
          <textarea
            name="message"
            rows={5}
            className="peer text-sm bg-transparent outline-none border-b border-tertiary dark:border-white"
            id="message"
            {...formik.getFieldProps("message")}
          />
          <label
            htmlFor="message"
            className={`w-full absolute cursor-text top-1 peer-focus:text-xs ${
              formik.values?.message ? "text-xs -translate-y-6" : "text-sm lg:text-base"
            }  peer-focus:-translate-y-6 transition-all  duration-300 peer-focus:text-primary font-medium peer-focus:dark:text-blue-400`}
          >
            {selectedForm==='career' ? 'A little about you:' : 'How can we help ?'}
            {selectedForm!=='career' && <span className="text-red-500">*</span>}
          </label>
          <div className="before:content-[''] before:h-[1px] before:w-full before:bg-primary before:absolute before:bottom-0 scale-0 peer-focus:scale-100 transition-all duration-300 before:dark:bg-blue-400 ease-linear"></div>
          {formik.touched.message && formik.errors.message && (
            <p className="absolute -bottom-[18px] text-secondary text-xs">
              *{formik.errors.message}
            </p>
          )}
        </div>
      {/* Upload your brief */}
        <div className="w-full">
            <label className="block mb-3 font-medium">
            {selectedForm==='career' ? 'Upload your CV' : 'Upload your brief'}
            {selectedForm==='career' && <span className="text-red-500">*</span>}
            </label>
            <div className='border border-gray-300 dark:border-gray-600  rounded-lg'>
              <input onChange={e=> {setFile(e.target.files)}}
                type="File" accept='.pdf' id="fileUpload" placeholder="Upload here"  
                className='hidden'
                
              />
              <label 
              required
                htmlFor='fileUpload'
                className='bg-gray-50 dark:bg-DarkBackground dark:text-white  text-gray-900 text-sm rounded-lg focus:ring-gray-400 focus:border-gray-400  w-full p-2.5 flex flex-col items-center cursor-pointer '
              >
                <svg
                    className="w-6 h-6"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 21 16"
                  >
                    <path d="M11 16a1 1 0 0 1-1-1v-1h2v1a1 1 0 0 1-1 1Z" />
                    <path d="M17.989 6.124a6.5 6.5 0 0 0-12.495-2.1A5 5 0 0 0 6 14h4V8.414l-.293.293a1 1 0 0 1-1.414-1.414l2-2a1 1 0 0 1 1.414 0l2 2a1 1 0 1 1-1.414 1.414L12 8.414V14h5a4 4 0 0 0 .989-7.876Z" />
                </svg>
                <span className='text-xs lg:text-sm mt-2'>{file ? `${file[0].name}` : 'Click here to upload file'} </span>
              </label>
          </div>
        </div>
          {/* Submit Button */}
        <div className="flex items-center justify-center md:justify-start">
        <button
          type="submit"
          disabled={!formik.dirty || !formik.isValid || formik.isSubmitting}
          className="disabled:bg-[#f5656f] px-9 py-2 text-sm bg-secondary hover:bg-[#e71523] text-white rounded-full"
        >
          {formik.isSubmitting ? (
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-white animate-spin fill-[#f5656f] "
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
            "Send"
          )}
        </button>
        </div>
      </form>
      {showPopup && <Popup setShowPopup={setShowPopup} />}
    </div>
  );
};

export default ContactForm;
