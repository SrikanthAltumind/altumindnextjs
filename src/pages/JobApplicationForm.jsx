import axios from "axios";
import { useFormik } from "formik";
import * as yup from "yup";
// import ThankyouNote from "../contact-components/ThankyouNote";
import { useContext, useEffect, useState } from "react";
// import emailjs from "@emailjs/browser";
import { useLocation } from "react-router-dom";
import { ThemeContext } from "../Layouts/AppLayout";
import ThankyouNote from "../Components/contact-components/ThankyouNote";
// import { navigate } from "vite-plugin-ssr/client/router";
import { useNavigate } from "react-router-dom";
import { countryCodes } from "../Utils";
import Turnstile from "react-turnstile";

// const initialPhoneInput = {number:'', countryCode:'', validLength:false}
const initialFormData = {
  //Basic Info
  firstName: "",
  lastName: "",
  email: "",
  phone: "", 
  dob:"", 
  gender:"", 
  state:"",
  country:"",
  //Educational Details
  qualification: "",
  passoutYear: "",
  //Professional Details - Experience 
  yearsOfExperience:"",
  employer:"",
  currentRole:"",
  noticePeriod:"", //optional if pursuing
  //Professional Details - Fresher 
  internship:"",  //optional
  internDuration:"", //optional
  //Attachment Details // seperated
  resume: null,
  coverLetter: null, //optional
  //Social Links
  linkedin:"",
  // otherLinks:"", //optional
  otherLinks:[], //optional
};


// eslint-disable-next-line react/prop-types
const JobApplicationForm = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const jobData = location.state
  //  const [phone, setPhone] = useState(initialPhoneInput)
  const [selectedCountryCode, setSelectedCountryCode] = useState(countryCodes?.find(country=> country.code==='+91'))
  //  const [userCountry, setUserCountry] = useState('in')
  //  const [customError, setCustomError] = useState({})
   const [profStatus, setProfStatus] = useState('fresher')
   const [pursuing, setPursuing] = useState(false)
  //  const {theme} = useContext(ThemeContext)
    
  const [showPopup, setShowPopup] = useState(false);
  const [errorMessage, setErrorMessage] = useState()
  // const [file, setFile] = useState();
  // const [coverLetter, setCoverLetter] = useState();
  
  // const [presignedUrl, setPresignedUrl] = useState();
  const [initialValues, setInitialValues] = useState(initialFormData);

  let toMailID = "";

  const requiredField = (yes) =>
    yes ? yup.string().required("Required") : yup.string();
  const textField = (requiredStatus)=> requiredField(requiredStatus)
      .matches(/^[A-Za-z ]+$/, "Enter only alphabet")
      // .test(
      //   "leading-space",
      //   "Cannot start with space",
      //   (value) => !value?.startsWith(" ")
      //   // "Required",
      //   // (value) => value?.trim()===""
      // )
      .transform((value) => value.trim())
      .min(2, "too short")

  const validationSchema = yup.object({
    firstName:textField(true), // true is for making it as required field
    lastName: textField(true),
    email: yup
      .string()
      .required("Required")
      .matches(
        /^[A-Z0-9._%+-]{3,}@[A-Z0-9.-]{2,}\.[A-Z]{2,}$/i,
        "Invalid email"
      ),
      phone:yup.string().required('Required')
      .matches(/^[0-9]+$/, "Please enter digits only"),
      // .min(7, "must be of atleast 7 digits"),
    dob: yup  //New addedd
      .date()
      .required("Required")
      .max(new Date(), 'Invalid date of birth'),
    gender: yup  //New addedd
      .string()
      .required("Required")
      .oneOf(["Male", "Female"], "Invalid selection"),
    state:textField(true),
    country: textField(true),

    qualification: yup  //New addedd
    .string()
    .required("Required")
    // .test(
    //   "leading-space",
    //   "Cannot start with space",
    //   (value) => !value?.startsWith(" ")
    // )
    .transform((value) => value.trim())
    .min(2, 'too short'),

    passoutYear: yup.number()
      .required('Required')
      .typeError("Invalid year")
      .min(1970, "Please enter valid data")
      .max(new Date().getFullYear()+5, 'Please enter valid data'),
      
    // passoutYear: yup.string()
    //   .required("Required")
    //   .matches(/^[0-9]+$/, "Invalid year")
    //   .length(4, "Invalid year small"),

    yearsOfExperience: yup.number().nullable()
    .when([], {
      is: ()=> profStatus==='experienced',
      then:(schema)=>
        schema.required('Required')
            .typeError("Must be a number")
          .min(0.5, 'Please enter valid data')
          .max(50, 'Please enter valid data'),
      otherwise: schema=> schema.notRequired()
                                
    }),

    employer:  yup.string().nullable()
    .when([], {
      is: ()=> profStatus==='experienced',
      then:(schema)=>
        schema.required('Required')
        .transform((value) => value.trim()),
      otherwise: schema=> schema.notRequired()
    }),
    currentRole: yup.string().nullable()
    .when([], {
      is: ()=> profStatus==='experienced',
      then:(schema)=>
        schema.required('Required')
      .transform((value) => value.trim()),
      otherwise: schema=> schema.notRequired()
    }),

    noticePeriod: yup.string().nullable()
    .when([], {
      is: () => profStatus==='experienced' && !pursuing, 
      then: (schema) => 
        schema.required("Required")
              .matches(/^[A-Za-z 0-9.]+$/, "Invalid data")
              .transform((value) => value.trim()), 
      otherwise: (schema) => schema.notRequired(),
    }),

    internship: yup.string()
    .transform((value) => value.trim()),
    internDuration: yup.string()
    .transform((value) => value.trim()),

    linkedin:yup.string().required('Required')
    .matches(
      /^(https?:\/\/)?([\w\d-]+\.)+[\w]+(\/[\w\d-./?%&=]*)?$/,
      "Enter a valid URL"
    ),
    otherLinks: yup.array().of(
      yup.string()
        .matches(
          /^(https?:\/\/)?([\w\d-]+\.)+[\w]+(\/[\w\d-./?%&=]*)?$/,
          "Enter a valid URL"
        )
    ),
    resume: yup
    .mixed()
    .required("Resume is required") 
    // .test("fileSize", "File size should be less than 2MB", (file) => {
    //   return file && file.size <= FILE_SIZE;
    // })
    .test("fileFormat", "Only pdf and docx are allowed", (file) => {
      return file && ["application/pdf",  "application/vnd.openxmlformats-officedocument.wordprocessingml.document"].includes(file.type);
    }),
    coverLetter: yup
    .mixed()
    .nullable() 
    // .test("fileSize", "File size should be less than 2MB", (file) => {
    //   return file && file.size <= FILE_SIZE;
    // })
    // .test("fileFormat", "Only pdf and docx are allowed", (file) => {
    //   return file && ["application/pdf", "application/docx"].includes(file.type);
    // }),
  });

  const handleAddLink = () => {
    formik.setFieldValue('otherLinks', [...formik.values.otherLinks, ''])
  };

  const handleRemoveLink = (index) => {
    formik.setFieldValue('otherLinks', formik.values.otherLinks.filter((_,i)=> i!=index))
  };

  const sendData = async (formData) => {
      //Career Form API
      // const payload = {
      //   data: [{
      //     First_Name: formData.firstName.trim(),
      //     Last_Name: formData.lastName.trim(),
      //     Email: formData.email.trim(),
      //     Mobile: phone.number,
      //     City: formData.city,
      //     // company: formData.companyName.trim(),
      //     // aboutyou: formData.message.trim(),
      //     // hearAboutUs: formData.howDidYouHearAboutUs.trim(),
      //     // upload: fileUrl.split('?')[0],
      //   }],
      // };
      console.log("Career Form Data Payload", formData);
      // await axios.post(
      //   // `${import.meta.env.VITE_APP_API_URL}api/contact-for-careers`,
      //   payload
      // );
     const response = await axios.post(`${import.meta.env.VITE_APP_API_URL}api/zoho-recruit/apply-job`,formData)
      console.log("Job applied successfully!", response);

  };

  // const getPresignedurl = async (file) => {
  //   try {
  //     const response = await axios.get(
  //       `${import.meta.env.VITE_APP_API_URL}api/v1/getSignedurl?contenttype=${
  //         file.type
  //       }&filename=${file.name}`,
  //       { withCredentials: true }
  //     );
  //     console.log("getPresignedurl", response?.data?.data);
  //     if (response.data && response.data.data) {
  //       setPresignedUrl(response.data.data);
  //       return response.data.data;
  //     } else {
  //       console.error("Presigned URL not found in the response.");
  //       return null;
  //     }
  //   } catch (error) {
  //     console.error("Error fetching presigned URL:", error);
  //   }
  // };

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

  // const sendMail = (formData) => { // AGILITI service ID needs to be stored in .env file
  //   const serviceID = selectedForm?.id==='agiliti' ? import.meta.env.VITE_APP_AGILITI_DATA_MAIL_SERVICE_ID : import.meta.env.VITE_APP_DATA_MAIL_SERVICE_ID; //old service_oik8vde
  //   const templateID = import.meta.env.VITE_APP_DATA_MAIL_FORMS_TEMPLATE_ID; //old template_1f6ib6b
  //   const publicKey = import.meta.env.VITE_APP_DATA_MAIL_PUBLIC_KEY; //old ZRpWuyBwxaFOkFcGf

  //   const templateParams = {
  //     ...formData,
  //     to_mail: toMailID,
  //     form_name: selectedForm?.name,
  //     page_url: window.location.href,
  //   };
  //   console.log("templateParams:", templateParams);
  //   emailjs.send(serviceID, templateID, templateParams, publicKey)
  //     .then(response=> {
  //       if(response.status===200){
  //       console.log('Data mail sent Successfully..!')
  //       console.log(response)
  //       // no-replay mail
  //       emailjs.send(import.meta.env.VITE_APP_THANK_YOU_MAIL_SERVICE_ID, import.meta.env.VITE_APP_THANK_YOU_MAIL_FORMS_TEMPLATE_ID, {email:formData.email, name:formData.firstName+" "+formData.lastName}, import.meta.env.VITE_APP_THANK_YOU_MAIL_PUBLIC_KEY)
  //               .then(response=> {
  //                 if(response.status===200){
  //                 console.log('Thank you mail sent Successfully..!')
  //                 console.log(response)
  //                 }
  //               })
  //               .catch(error=> {
  //                 console.error(error)
  //               })
  //       }
  //     })
  //     .catch(error=> {
  //       console.error(error)
  //     })
  // };

const [token, setToken] = useState()
const [captchaError, setCaptchaError] = useState(false)
const validateCaptcha = async () => {
  try {
    if (token) {
      console.log('TOKEN:', token)
      const response = await axios.post(`${import.meta.env.VITE_APP_API_URL}api/cloudflare-captcha/verify`, {token})
      console.log(response,'success captcha')
      setCaptchaError(false)
      console.log('token success')
      return true;
    } else {
      console.log('TOKEN-Error', token)
      setCaptchaError(true)
      return false;
    }
  } catch (error) {
    console.log('Something went wrong:', error)
    setCaptchaError(true)
    return false;
  }
};

  const onSubmit = async (formData, { resetForm }) => {
    setCaptchaError(false)
    if (!await validateCaptcha()){
      return;
    }
    // const numberInput = phone.number.substring(phone.countryCode.length)
    // console.log('Numnber:', phone)
    // console.log('Actual Numnber:', numberInput)
    // if(!numberInput){
      
    //     alert('Please Enter Phone Number')
    //     return
    // }
    // if(!phone.validLength){
    //     alert('Please Enter Valid Number')
    //     return
    // }
  
// const trimmedValues = Object.keys(formData).reduce((acc, key) => {
//   acc[key] = typeof formData[key] === "string" ? formData[key].trim() : formData[key];
//   return acc;
// }, {});


    console.log('before set New Form Data', formData);
    const data = {
        First_Name: formData.firstName.trim(),
        Last_Name: formData.lastName.trim(),
        Email: formData.email.trim(),
        // Mobile: phone.number,
        Mobile: selectedCountryCode?.code+formData.phone,
        Date_of_Birth: formData.dob,
        Gender: formData.gender,
        State: formData.state.trim(),
        Country: formData.country.trim(),

        Highest_Qualification_Held: formData.qualification.trim(),
        Passout_Year: formData.passoutYear.trim(),

        Internship: formData.internship.trim(),
        Internship_Duration: formData.internDuration.trim(),

        Experience_in_Years: formData.yearsOfExperience.trim(),
        Current_Employer: formData.employer.trim(),
        Current_Job_Title: formData.currentRole.trim(),
        Notice_Period: pursuing ? 'Currently Pursuing' : formData.noticePeriod.trim(),

        // resume: file[0],
        // coverLetter: coverLetter?.length ? coverLetter[0] : '',

        Linkedin_URL: formData.linkedin,
        Other_Links: formData.otherLinks,
    }

    const newFormData = new FormData()

    newFormData.append("data", JSON.stringify([data]));
    // newFormData.append("resume", file[0]);
    newFormData.append("resume", formData.resume);
    // newFormData.append( "coverLetter", coverLetter?.length ? coverLetter[0] : '');
    newFormData.append( "coverLetter", formData.coverLetter);
    newFormData.append("jobids", JSON.stringify([jobData.id]));

    // console.log('After set NewForm DATA',newFormData); //cannot see form object directly

    // newFormData.forEach((value, key) => { // need to iterate through it
    //     console.log(`${key}:`, value);
    //   });
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
await sendData(newFormData);
// sendMail(formData);
      // await sendData(formData, presignedUrlResponse.url);
console.log("Resetting Form");
setShowPopup(true);
// setPhone(initialPhoneInput)
setPursuing(false)
resetForm();

    } catch (error) {
      console.error("Error submitting form:", error);
      
      if (error.response) {
        // The request was made and the server responded with a status code
        if(error?.response?.data?.error?.message  === "Error submitting application: Duplicate data found: duplicate data"){
          setErrorMessage("Email already exists.")
          } else {
            setErrorMessage("")
          }
        console.error("Response status:", error.response.status);
        console.error("Response data:", error.response.data);
      } else if (error.request) {
        // The request was made but no response was received
        console.error("No response received:", error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error("Request setup error:", error.message);
      }
    } finally {
      console.log("Finally-BLock..........");
    }
  };

  let formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

 const closePopup = () => {
  setShowPopup(false)
  navigate("/career/open-roles")
 }

  useEffect(() => {
    if(pursuing){
      formik.setFieldValue('noticePeriod', '')
      formik.validateField('noticePeriod')
    }
  }, [pursuing]);

      useEffect(() => {
        if(!jobData){
          navigate("/404")
        }
      },[])

  useEffect(() => {
    if(profStatus==='fresher'){
      formik.setErrors((prevErrors) => ({
        ...prevErrors,
        yearsOfExperience: undefined,  
        employer: undefined,    
        currentRole: undefined,
        noticePeriod: undefined
      }));
    }
  }, [profStatus]);

  // useEffect(() => { //with external API - automatically without user's permission
  //   const fetchCountryByIP = async () => {
  //     try {
  //       const response = await fetch("https://ipapi.co/json/");
  //       const data = await response.json();
  //       if (data.country_code) {
  //         setUserCountry(data.country_code.toLowerCase());
  //         console.log('---COUNTRY DETECTED-----', data);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching country:", error);
  //     }
  //   };
  //   fetchCountryByIP();
  // }, []);


  useEffect(() => { //without external API - user's permission
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          const response = await fetch(`https://geocode.maps.co/reverse?lat=${latitude}&lon=${longitude}`);
          const data = await response.json();
          if (data.address && data.address.country_code) {
            // setUserCountry(data.address.country_code.toLowerCase());
            data.address?.state && formik.setFieldValue('state',  data.address.state )
            formik.setFieldValue('country', data.address.country)
          }
        } catch (error) {
          console.error("Error fetching location:", error);
        }
      });
    }
  }, []);
  
  return (
    <div className="w-[90%] mx-auto relative flex max-md:flex-col gap-6 lg:gap-10 py-10">
        <div className="max-md:mx-auto md:max-w-[250px] h-fit md:sticky top-[110px] dark:text-white font-raleway">
          <p className="mb-2 sm:mb-7 font-extrabold text-xl sm:text-2xl">{jobData?.Job_Opening_Name}</p>
          <div className="space-y-2 text-sm sm:text-base">
            <p className="font-medium">Experience: <span className="font-bold">{jobData?.Work_Experience}</span></p>
            <p className="font-medium">Location: <span className="font-bold">{jobData?.Remote_Job ? 'Remote' : `${jobData?.City, jobData?.Country}`}</span></p>
          </div>
        </div>

    <form
      onSubmit={formik.handleSubmit}
      className="   rounded-md w-full max-w-[900px] mx-auto flex flex-col gap-y-14 font-montserrat font-medium dark:text-white"
    >

      <p className="-mb-5 font-bold">Basic Info</p>
      {/* First Name and Last Name */}
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
              formik.values?.firstName
                ? "text-xs -translate-y-6"
                : "text-sm lg:text-base"
            } peer-focus:-translate-y-6 transition-all duration-300 peer-focus:text-primary font-medium peer-focus:dark:text-blue-400 text-gray-400`}
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
              formik.values?.lastName
                ? "text-xs -translate-y-6"
                : "text-sm lg:text-base"
            }  peer-focus:-translate-y-6 transition-all duration-300 peer-focus:text-primary font-medium peer-focus:dark:text-blue-400 text-gray-400`}
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

      {/* DOB and Gender */}
      <div className="sm:flex items-center gap-8 max-sm:space-y-14">
        {/* DOB */}
        <div className="relative flex flex-col w-full">
            <input
            type='text'
            placeholder=""
            max={new Date().toISOString().split('T')[0]}
            {...formik.getFieldProps("dob")}
            onFocus={e=> e.target.type='date'}  
            // onBlur={e=> e.target.type='text'}
              name="dob"
              className="peer bg-transparent outline-none border-b border-tertiary dark:border-white"
              id="dob"
              // value={formData.dob}
              // onChange={e=> setFormData({...formData, dob:e.target.value})}
            />
             <label
            htmlFor="dob"
            className={`w-fit  absolute cursor-text bottom-5  peer-focus:text-xs   ${
              formik.values?.dob
                ? "text-xs -translate-y-3"
                : "text-sm lg:text-base"
            } peer-focus:-translate-y-3 transition-all duration-300 peer-focus:text-primary font-medium peer-focus:dark:text-blue-400 text-gray-400`}
          >
              Date of Birth<span className="text-red-500">*</span>
            </label>
            <div className="before:content-[''] before:h-[1px] before:w-full before:bg-primary before:absolute before:bottom-0 scale-0 peer-focus:scale-100 transition-all duration-200 ease-linear before:dark:bg-blue-400"></div>
            {formik.touched.dob && formik.errors.dob  && (
              <p className="absolute -bottom-[18px] text-red-500 text-xs">
                *{formik.errors.dob}
              </p>
            )}
        </div>
        {/* Gender */}
        <div className="relative flex gap-5 w-full">
            <div className="flex items-center gap-1">
              <input 
                type="radio" 
                id="male"
                name="gender"
                value={'Male'}
                className="cursor-pointer"
                checked={formik.values.gender === "Male"}
                onChange={() => formik.setFieldValue("gender", "Male")}
                />
                <label className="text-sm cursor-pointer" htmlFor="male">Male</label>
            </div>
            <div className="flex items-center gap-1">
              <input 
                type="radio" 
                id="female"
                name="gender"
                value={'Female'}
                className="cursor-pointer"
                checked={formik.values.gender === "Female"} 
                onChange={() => formik.setFieldValue("gender", "Female")}
                />
                <label className="text-sm cursor-pointer" htmlFor="female">Female</label>
            </div>
            {formik.touched.gender && formik.errors.gender  && (
              <p className="absolute -bottom-[18px] text-red-500 text-xs">
                *{formik.errors.gender}
              </p>
            )}
        </div>

      </div>
      {/* Email and Phone */}
      <div className="sm:flex items-center gap-8 max-sm:space-y-14">
        {/* Email */}
        <div className="relative flex flex-col w-full">
          <input
            name="email"
            className=" peer bg-transparent outline-none border-b border-tertiary dark:border-white"
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
            } peer-focus:-translate-y-6 transition-all  duration-300 peer-focus:text-primary font-medium peer-focus:dark:text-blue-400 text-gray-400`}
          >
            Email<span className="text-red-500">*</span>
          </label>
          <div className="before:content-[''] before:h-[1px] before:w-full before:bg-primary before:absolute before:bottom-0 scale-0 peer-focus:scale-100 transition-all duration-200 before:dark:bg-blue-400 ease-linear"></div>
          
          {formik.touched.email && formik.errors.email && (
            <p className="absolute -bottom-[18px] text-red-500 text-xs">
              *{formik.errors.email}
            </p>
          )}
        </div>
        {/* Phone Input */}
        {/* <div className="relative flex flex-col w-full">
          <PhoneInput
          countryCodeEditable={false}               
            placeholder='Phone Number'
                country={userCountry}
                name="phone"
                id="phone"
                enableSearch
                containerClass='phone-container'
                inputClass= {theme==='dark'? 'phone-input-dark' : 'phone-input'}
                buttonClass={theme==='dark'? 'phone-button-dark' : 'phone-button'}
                dropdownClass={theme==='dark'? 'phone-dropdown-dark' : 'phone-dropdown'}
                searchClass={theme==='dark'? 'phone-search-dark' : 'phone-search'}
                
                value={phone.number}
                onChange={(value, country, e, formattedValue) => {
                    // console.log('formtted value',formattedValue, '\n', country.format)
                    setPhone({number:value, countryCode:country.dialCode, validLength:formattedValue.length===country.format.length})
                    if(formattedValue.length===country.format.length){
                        setCustomError({...customError, phone:null})
                    }
                }}
                onBlur={(e, country) => {
                    if(e.target.value.length!==country.format.length){
                        setCustomError({...customError, phone: e.target.value.length===0 ? 'Required' : 'Invalid number'})
                      }else{
                        setCustomError({...customError, phone:null})
                    }
                }}

                inputProps={{
                    name: 'phone',
                    required: true,
                  }}
            className="font-montserrat"
            />
          {customError.phone && (
            <p className="absolute -bottom-[18px] text-red-500 text-xs">
              *{customError.phone}
            </p>
          )} 
        </div> */}
        <div className="flex w-full gap-2 items-center">
          <label htmlFor="countryCode" className="sr-only">Select country code</label>
          <select id="countryCode" className="disabled:text-gray-400 border-b border-black outline-none pb-1 cursor-pointer"
                  value={selectedCountryCode?.code}
                  onChange={(e) => {
                    const selectedIndex = e.target.selectedIndex;
                    const countryIndex = e.target.options[selectedIndex].getAttribute("countryindex");
                    setSelectedCountryCode(countryCodes[parseInt(countryIndex)]);
                  }}
              >
            {countryCodes?.map((country, index)=> (
              <option key={country.code+index}
                    value={country.code}
                    countryindex={index}>
                {country.code}
              </option>
            ))}
          </select>
 
        <div className="relative flex flex-col w-full">
          <input
            name="phone"
            className="peer bg-transparent outline-none border-b border-tertiary dark:border-white"
            type="text"
            id="phone"
            minLength={selectedCountryCode?.length}
            maxLength={selectedCountryCode?.length}
            {...formik.getFieldProps("phone")}
          />
          <label
            htmlFor="phone"
            className={`w-full absolute cursor-text bottom-1 peer-focus:text-xs ${
              formik.values?.phone
                ? "text-xs -translate-y-6"
                : "text-sm lg:text-base"
            }  peer-focus:-translate-y-6 transition-all  duration-300 peer-focus:text-primary font-medium peer-focus:dark:text-blue-400 text-gray-400`}
          >
            Phone
              <span className="text-red-500">*</span>
          </label>
          <div className="before:content-[''] before:h-[1px] before:w-full before:bg-primary before:absolute before:bottom-0 scale-0 peer-focus:scale-100 transition-all duration-300 before:dark:bg-blue-400 ease-linear"></div>
          {formik.touched.phone && formik.errors.phone && (
            <p className="absolute -bottom-[18px] text-red-500 text-xs">
              *{formik.errors.phone}
            </p>
          )}
        </div>
        </div>
          
      </div>
      {/* State and Country */}
      <div className="sm:flex items-center gap-8 max-sm:space-y-14">
        {/* State */}
        <div className="relative flex flex-col w-full">
          <input
            className="peer bg-transparent outline-none border-b border-tertiary dark:border-white"
            name="state"
            id="state"
            {...formik.getFieldProps("state")}
          />
          <label
            htmlFor="state"
            className={`w-full  absolute cursor-text bottom-1  peer-focus:text-xs   ${
              formik.values?.state
                ? "text-xs -translate-y-6"
                : "text-sm lg:text-base"
            } peer-focus:-translate-y-6 transition-all duration-300 peer-focus:text-primary font-medium peer-focus:dark:text-blue-400 text-gray-400`}
          >
            State<span className="text-red-500">*</span>
          </label>
          <div className="before:content-[''] before:h-[1px] before:w-full before:bg-primary before:absolute before:bottom-0 scale-0 peer-focus:scale-100 transition-all duration-200 ease-linear before:dark:bg-blue-400"></div>
          {formik.touched.state && formik.errors.state && (
            <p className="absolute -bottom-[18px] text-red-500 text-xs">
              *{formik.errors.state}
            </p>
          )}
        </div>
        {/* Country */}
        <div className="relative flex flex-col w-full">
          <input
            className="peer bg-transparent outline-none border-b border-tertiary dark:border-white"
            name="country"
            id="country"
            {...formik.getFieldProps("country")}
          />
          <label
            htmlFor="country"
            className={`w-full  absolute cursor-text bottom-1  peer-focus:text-xs   ${
              formik.values?.country
                ? "text-xs -translate-y-6"
                : "text-sm lg:text-base"
            } peer-focus:-translate-y-6 transition-all duration-300 peer-focus:text-primary font-medium peer-focus:dark:text-blue-400 text-gray-400`}
          >
            Country<span className="text-red-500">*</span>
          </label>
          <div className="before:content-[''] before:h-[1px] before:w-full before:bg-primary before:absolute before:bottom-0 scale-0 peer-focus:scale-100 transition-all duration-200 ease-linear before:dark:bg-blue-400"></div>
          {formik.touched.country && formik.errors.country && (
            <p className="absolute -bottom-[18px] text-red-500 text-xs">
              *{formik.errors.country}
            </p>
          )}
        </div>
      </div>

<p className="mt-5 -mb-5  font-bold">Educational Details</p>
        {/* Qualification and Passout Year */}
    <div className="sm:flex items-center gap-8 max-sm:space-y-14">
        {/* Highest Qualification */}
        <div className="relative flex flex-col w-full">
          <input
            name="qualification"
            className="peer bg-transparent outline-none border-b border-tertiary dark:border-white"
            id="qualification"
            {...formik.getFieldProps("qualification")}
          />
          <label
            htmlFor="qualification"
            className={`w-full  absolute cursor-text bottom-1  peer-focus:text-xs   ${
              formik.values?.qualification
                ? "text-xs -translate-y-6"
                : "text-sm lg:text-base"
            } peer-focus:-translate-y-6 transition-all duration-300 peer-focus:text-primary font-medium peer-focus:dark:text-blue-400 text-gray-400`}
          >
            Highest Qualification<span className="text-red-500">*</span>
          </label>
          <div className="before:content-[''] before:h-[1px] before:w-full before:bg-primary before:absolute before:bottom-0 scale-0 peer-focus:scale-100 transition-all duration-200 ease-linear before:dark:bg-blue-400"></div>
          {formik.touched.qualification && formik.errors.qualification && (
            <p className="absolute -bottom-[18px] text-red-500 text-xs">
              *{formik.errors.qualification}
            </p>
          )}
        </div>
        {/* Year of Passout */}
        <div className="relative flex flex-col w-full">
          <input
            name="passoutYear"
            className="peer bg-transparent outline-none border-b border-tertiary dark:border-white"
            id="passoutYear"
            {...formik.getFieldProps("passoutYear")}
          />
          <label
            htmlFor="passoutYear"
            className={`w-full absolute cursor-text bottom-1  peer-focus:text-xs   ${
              formik.values?.passoutYear
                ? "text-xs -translate-y-6"
                : "text-sm lg:text-base"
            }  peer-focus:-translate-y-6 transition-all duration-300 peer-focus:text-primary font-medium peer-focus:dark:text-blue-400 text-gray-400`}
          >
            Year of Passout<span className="text-red-500">*</span>
          </label>
          <div className="before:content-[''] before:h-[1px] before:w-full before:bg-primary before:absolute before:bottom-0 scale-0 peer-focus:scale-100 transition-all duration-200 ease-linear before:dark:bg-blue-400"></div>
          {formik.touched.passoutYear && formik.errors.passoutYear && (
            <p className="absolute -bottom-[18px] text-red-500 text-xs">
              *{formik.errors.passoutYear}
            </p>
          )}
        </div>
</div>

<div className="mt-5 -mb-5">
  <p className=" font-bold">Professional Details</p>
  {/* Radio buttons to select Exp level */}
  <div className="flex items-center gap-3 mt-4">
    <label htmlFor="fresher" className="accent-blue-800 flex items-center gap-2 cursor-pointer">
      <input id="fresher" type="radio" value={'fresher'} checked={profStatus==='fresher'} onChange={()=> setProfStatus('fresher')} name="experience" className="cursor-pointer"/>
      <span>Fresher</span>
    </label>
    <label htmlFor="experienced" className="accent-blue-800 flex items-center gap-2 cursor-pointer">
      <input id="experienced" type="radio" value={'experienced'} checked={profStatus==='experienced'} onChange={()=> setProfStatus('experienced')} name="experience" className="cursor-pointer"/>
      <span>Experienced</span>
    </label>
  </div>
</div>
{profStatus==='experienced' ? 
<>
{/* Exp Years and Employer */}
  <div className="sm:flex items-center gap-8 max-sm:space-y-14">
        {/* Years of Experience */}
        <div className="relative flex flex-col w-full">
          <input
            name="yearsOfExperience"
            className="peer bg-transparent outline-none border-b border-tertiary dark:border-white"
            id="yearsOfExperience"
            {...formik.getFieldProps("yearsOfExperience")}
          />
          <label
            htmlFor="yearsOfExperience"
            className={`w-full  absolute cursor-text bottom-1  peer-focus:text-xs   ${
              formik.values?.yearsOfExperience
                ? "text-xs -translate-y-6"
                : "text-sm lg:text-base"
            } peer-focus:-translate-y-6 transition-all duration-300 peer-focus:text-primary font-medium peer-focus:dark:text-blue-400 text-gray-400`}
          >
            Years of Experience<span className="text-red-500">*</span>
          </label>
          <div className="before:content-[''] before:h-[1px] before:w-full before:bg-primary before:absolute before:bottom-0 scale-0 peer-focus:scale-100 transition-all duration-200 ease-linear before:dark:bg-blue-400"></div>
          {formik.touched.yearsOfExperience && formik.errors.yearsOfExperience && (
            <p className="absolute -bottom-[18px] text-red-500 text-xs">
              *{formik.errors.yearsOfExperience}
            </p>
          )}
        </div>
        {/* Employer Name */}
        <div className="relative flex flex-col w-full">
          <input
            name="employer"
            className="peer bg-transparent outline-none border-b border-tertiary dark:border-white"
            id="employer"
            {...formik.getFieldProps("employer")}
          />
          <label
            htmlFor="employer"
            className={`w-full absolute cursor-text bottom-1  peer-focus:text-xs   ${
              formik.values?.employer
                ? "text-xs -translate-y-6"
                : "text-sm lg:text-base"
            }  peer-focus:-translate-y-6 transition-all duration-300 peer-focus:text-primary font-medium peer-focus:dark:text-blue-400 text-gray-400`}
          >
            Current Employer<span className="text-red-500">*</span>
          </label>
          <div className="before:content-[''] before:h-[1px] before:w-full before:bg-primary before:absolute before:bottom-0 scale-0 peer-focus:scale-100 transition-all duration-200 ease-linear before:dark:bg-blue-400"></div>
          {formik.touched.employer && formik.errors.employer && (
            <p className="absolute -bottom-[18px] text-red-500 text-xs">
              *{formik.errors.employer}
            </p>
          )}
        </div>
  </div>
  {/* Current Role and Notice Period */}
  <div className="sm:flex items-center gap-8 max-sm:space-y-14">
          {/* Current Role */}
          <div className="relative flex flex-col w-full">
            <input
              name="currentRole"
              className="peer bg-transparent outline-none border-b border-tertiary dark:border-white"
              id="currentRole"
              {...formik.getFieldProps("currentRole")}
            />
            <label
              htmlFor="currentRole"
              className={`w-full  absolute cursor-text bottom-1  peer-focus:text-xs   ${
                formik.values?.currentRole
                  ? "text-xs -translate-y-6"
                  : "text-sm lg:text-base"
              } peer-focus:-translate-y-6 transition-all duration-300 peer-focus:text-primary font-medium peer-focus:dark:text-blue-400 text-gray-400`}
            >
              Current Job title<span className="text-red-500">*</span>
            </label>
            <div className="before:content-[''] before:h-[1px] before:w-full before:bg-primary before:absolute before:bottom-0 scale-0 peer-focus:scale-100 transition-all duration-200 ease-linear before:dark:bg-blue-400"></div>
            {formik.touched.currentRole && formik.errors.currentRole && (
              <p className="absolute -bottom-[18px] text-red-500 text-xs">
                *{formik.errors.currentRole}
              </p>
            )}
          </div>
          {/* Notice Period */}
          <div className="relative flex flex-col w-full">
            <input
            disabled={pursuing}
              name="noticePeriod"
              className=" disabled:border-b-0 peer bg-transparent outline-none border-b border-tertiary dark:border-white"
              id="noticePeriod"
              {...formik.getFieldProps("noticePeriod")}
            />
            <label
              htmlFor="noticePeriod"
              className={`w-full absolute cursor-text bottom-1  peer-focus:text-xs   ${
                formik.values?.noticePeriod
                  ? "text-xs -translate-y-6"
                  : "text-sm lg:text-base"
              } peer-disabled:text-gray-400 peer-disabled:line-through peer-disabled:pointer-events-none peer-focus:-translate-y-6 transition-all duration-300 peer-focus:text-primary font-medium peer-focus:dark:text-blue-400 text-gray-400`}
            >
              Notice Period{!pursuing &&<span className="text-red-500">*</span>}
            </label>
            <div className="before:content-[''] before:h-[1px] before:w-full before:bg-primary before:absolute before:bottom-0 scale-0 peer-focus:scale-100 transition-all duration-200 ease-linear before:dark:bg-blue-400"></div>
            {formik.touched.noticePeriod && formik.errors.noticePeriod && (
              <p className="absolute -bottom-[18px] text-red-500 text-xs">
                *{formik.errors.noticePeriod}
              </p>
            )}
          </div>
  </div>
    {/* Checkbox for I am pursuing*/}
    <div className="-mt-6 sm:ml-[calc(50%+16px)]">
          <label className="accent-blue-800 flex items-center gap-1 cursor-pointer">
            <input type="checkbox" checked={pursuing}
               onChange={()=> {
                 setPursuing(!pursuing)
                 
                  }} 
              className="cursor-pointer"/>
            <span className="text-xs">Currently Pursuing</span>
          </label>
    </div>
</>
: <div className="sm:flex items-center gap-8 max-sm:space-y-14">
    {/* Any Internship */}
    <div className="relative flex flex-col w-full">
      <input
        name="internship"
        className="peer bg-transparent outline-none border-b border-tertiary dark:border-white"
        id="internship"
        {...formik.getFieldProps("internship")}
      />
      <label
        htmlFor="internship"
        className={`w-full  absolute cursor-text bottom-1  peer-focus:text-xs   ${
          formik.values?.internship
            ? "text-xs -translate-y-6"
            : "text-sm lg:text-base"
        } peer-focus:-translate-y-6 transition-all duration-300 peer-focus:text-primary font-medium peer-focus:dark:text-blue-400 text-gray-400`}
      >
         Internship 
      </label>
      <div className="before:content-[''] before:h-[1px] before:w-full before:bg-primary before:absolute before:bottom-0 scale-0 peer-focus:scale-100 transition-all duration-200 ease-linear before:dark:bg-blue-400"></div>
      {formik.touched.internship && formik.errors.internship && (
        <p className="absolute -bottom-[18px] text-red-500 text-xs">
          *{formik.errors.internship}
        </p>
      )}
    </div>
    {/* Duration */}
    <div className="relative flex flex-col w-full">
      <input
        name="internDuration"
        className="peer bg-transparent outline-none border-b border-tertiary dark:border-white"
        id="internDuration"
        {...formik.getFieldProps("internDuration")}
      />
      <label
        htmlFor="internDuration"
        className={`w-full absolute cursor-text bottom-1  peer-focus:text-xs   ${
          formik.values?.internDuration
            ? "text-xs -translate-y-6"
            : "text-sm lg:text-base"
        }  peer-focus:-translate-y-6 transition-all duration-300 peer-focus:text-primary font-medium peer-focus:dark:text-blue-400 text-gray-400`}
      >
        Internship Duration
      </label>
      <div className="before:content-[''] before:h-[1px] before:w-full before:bg-primary before:absolute before:bottom-0 scale-0 peer-focus:scale-100 transition-all duration-200 ease-linear before:dark:bg-blue-400"></div>
      {formik.touched.internDuration && formik.errors.internDuration && (
        <p className="absolute -bottom-[18px] text-red-500 text-xs">
          *{formik.errors.internDuration}
        </p>
      )}
    </div>
    </div>
}

      {/* Upload Files */}
      <p className="mt-5 -mb-5  font-bold">Attachment Details</p>
      <div className="sm:flex items-center gap-8 max-sm:space-y-14">
      {/* Resume */}
        <div className="relative w-full">
          <label className="block mb-3 font-medium">
            Resume
            <span className="text-red-500">*</span>
          </label>
          <div className=" border border-gray-300 dark:border-gray-600  rounded-lg">
            <input
              onChange={(e) => {
                // setFile(e.target.files);
                formik.setFieldValue('resume', e.currentTarget.files[0]);
                formik.setFieldTouched('resume', true, false)
                
              }}
              type="File"
              accept=".pdf, .docx"
              id="resume"
              placeholder="Upload here"
              className="hidden"
            />
            <label
              tabIndex={0}
              required
              htmlFor="resume"
              className="bg-gray-50 dark:bg-DarkBackground dark:text-white  text-gray-900 text-sm rounded-lg focus:ring-gray-400 focus:border-gray-400  w-full p-2.5 flex flex-col items-center cursor-pointer "
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
              <span className="text-xs lg:text-sm mt-2">
                {/* {file?.length ? `${file[0]?.name}` : "Click here to upload file"}{" "} */}
                {formik.values.resume ? `${formik.values.resume?.name}` : "Click here to upload file"}{" "}
              </span>
            </label>
          </div>
          {formik.touched.resume && formik.errors.resume && (
        <p className="absolute -bottom-[18px] text-red-500 text-xs">
          *{formik.errors.resume}
        </p>
      )}
        </div>
        {/* Cover letter */}
        <div className="relative w-full">
          <label className="block mb-3 font-medium">
            Cover letter
          </label>
          <div className="border border-gray-300 dark:border-gray-600  rounded-lg">
            <input
              onChange={(e) => {
                // setCoverLetter(e.target.files);
                formik.setFieldValue('coverLetter', e.currentTarget.files[0])
                !e.currentTarget.files[0] && formik.setFieldError('coverLetter', undefined)
                formik.setFieldTouched('coverLetter', true, false)
              }}
              type="File"
              accept=".pdf, .docx"
              id="coverLetter"
              placeholder="Upload here"
              className="hidden"
            />
            <label
              tabIndex={0}
              required
              htmlFor="coverLetter"
              className="bg-gray-50 dark:bg-DarkBackground dark:text-white  text-gray-900 text-sm rounded-lg focus:ring-gray-400 focus:border-gray-400  w-full p-2.5 flex flex-col items-center cursor-pointer "
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
              <span className="text-xs lg:text-sm mt-2">
                {/* {coverLetter?.length ? `${coverLetter[0]?.name}` : "Click here to upload file"}{" "} */}
                {formik.values.coverLetter ? `${formik.values.coverLetter?.name}` : "Click here to upload file"}{" "}
              </span>
            </label>
          </div>
          {formik.touched.coverLetter && formik.errors.coverLetter && (
        <p className="absolute -bottom-[18px] text-red-500 text-xs">
          *{formik.errors.coverLetter}
        </p>
      )}
        </div>
      </div>

<p className="mt-5 -mb-5 font-bold">Social Links</p>
    <div className="flex flex-col gap-y-12">
        {/* LinkedIn */}
        <div className="relative flex flex-col w-full">
          <input
            name="linkedin"
            className="peer bg-transparent outline-none border-b border-tertiary dark:border-white"
            id="linkedin"
            {...formik.getFieldProps("linkedin")}
          />
          <label
            htmlFor="linkedin"
            className={`w-full  absolute cursor-text bottom-1  peer-focus:text-xs   ${
              formik.values?.linkedin
                ? "text-xs -translate-y-6"
                : "text-sm lg:text-base"
            } peer-focus:-translate-y-6 transition-all duration-300 peer-focus:text-primary font-medium peer-focus:dark:text-blue-400 text-gray-400`}
          >
            LinkedIn<span className="text-red-500">*</span>
          </label>
          <div className="before:content-[''] before:h-[1px] before:w-full before:bg-primary before:absolute before:bottom-0 scale-0 peer-focus:scale-100 transition-all duration-200 ease-linear before:dark:bg-blue-400"></div>
          {formik.touched.linkedin && formik.errors.linkedin && (
            <p className="absolute -bottom-[18px] text-red-500 text-xs">
              *{formik.errors.linkedin}
            </p>
          )}
        </div>
        {/* Other Links */}
        <div className="space-y-12">
        {formik.values.otherLinks?.map((link, index) => (
        <div key={index} className="flex items-center space-y-2">
          <div className="w-full">
          <input
            type="text"
            name={`otherLinks.${index}`}
            id={`otherLinks.${index}`}
            value={formik.values.otherLinks[index]}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Enter URL"
            autoFocus
            className="peer text-sm pb-1 bg-transparent w-full outline-none border-b border-tertiary dark:border-white"
          />
          {formik.touched.otherLinks && formik.errors.otherLinks?.[index] && (
            <p className="text-red-500 text-xs">*{formik.errors.otherLinks[index]}</p>
          )}
          </div>
          <button
            type="button"
            onClick={() => handleRemoveLink(index)}
            className=" w-[20px] h-[20px] text-xs"
          >
            <svg className="w-6 h-6 text-primary dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" d="m15 9-6 6m0-6 6 6m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
          </svg>
          </button>
          
          
        </div>
      ))}

    <div className="flex items-center gap-3">
      <button
        type="button"
        onClick={handleAddLink}
        disabled={formik.values.otherLinks.length>=3}
        className="flex items-center gap-[1px] group disabled:bg-gray-300 disabled:dark:text-gray-400 bg-primary/80 dark:bg-gray-700 border border-primary/80 disabled:border-gray-300   text-white text-xs  px-4 py-1.5 rounded-full"
      >
        <svg className="w-3 h-3 text-white group-disabled:dark:text-gray-400 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7 7V5"/>
      </svg>

        {formik.values.otherLinks.length===0 ? 'Other links' : 'Add'}
      </button>
      {formik.values.otherLinks.length>0 &&
      <button
        type="button"
        onClick={()=> formik.setFieldValue('otherLinks',[])}
        className="text-primary border border-primary dark:text-white dark:border-white text-xs  px-4 py-1.5 rounded-full"
      >
        Remove All
      </button>
      }
      
          </div>
      </div>
</div>
      <p className="text-red-500">{errorMessage}</p>
      {
        captchaError &&
        <p className="text-red-500">Oops!! something went wrong, please try again.</p>
      }
      {/* Submit Button */}
      <div className="flex items-center justify-center md:justify-start">
        <button
          type="submit"
          disabled={!formik.dirty || !formik.isValid || formik.isSubmitting}
          className="disabled:bg-[#f5656f88] px-12 py-3 text-sm bg-secondary hover:bg-[#e71523] text-white rounded-full"
        >
          {formik.isSubmitting ? (
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-white animate-spin fill-[#f5656f88] "
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
            "Submit"
          )}
        </button>
      </div>
      {showPopup && <ThankyouNote setShowPopup={closePopup} />}
      <Turnstile
        sitekey={import.meta.env.VITE_APP_CAPTCHA_SITE_KEY}
        size="flexible"
        className="opacity-0 fixed right-0 bottom-0 pointer-events-none"
        onSuccess={(token)=>setToken(token)}
        onExpire={() => setToken(null)}
        onError={() => setToken(null)}
      />
    </form>
    </div>
  );
};

export default JobApplicationForm;

