// import axios from "axios";
// import { useFormik } from "formik";
// import * as yup from "yup";
// import {useState } from "react";
import ContactForm from "../contact-components/ContactForm";

const data = {
  partnership : {
    title: 'Partnership Enquiries',
    caption:'Amplify transformation',
    description:` Explore partnership opportunities with Altumind to extend your software solutions to new markets and industries.`,
  },
  career : {
    title: 'Join Altumind',
    caption:'SHAPE THE FUTURE WITH US',
    description:`Explore career opportunities and become part of our innovative team.`,
   
  }
}


const SubscribeForm = () => {
  const IsCareerform = location.pathname === '/career'
  const content = IsCareerform ? data?.career : data?.partnership
  // const [showPopup, setShowPopup] = useState(false);
  // const initialValues = {
  //   name: "",
  //   phone: "",
  //   email: "",
  //   message: "",
  // };

  // const validationSchema = yup.object({
  //   name: yup
  //     .string()
  //     .required("Required")
  //     .matches(/^[A-Za-z ]+$/, "Enter only alphabet")
  //     .test(
  //       "leading-space",
  //       "Cannot start with space",
  //       (value) => !value.startsWith(" ")
  //     )
  //     .min(2, "Name is too short"),
  //   phone: yup
  //     .string()
  //     .required("Required")
  //     .matches(/^[0-9]+$/, "Enter only digits")
  //     .length(10, "Number should have 10 digits"),
  //   email: yup
  //     .string()
  //     .required("Required")
  //     .matches(
  //       /^[A-Z0-9._%+-]{3,}@[A-Z0-9.-]{2,}\.[A-Z]{2,}$/i,
  //       "Invalid email"
  //     ),
  //   message: yup
  //     .string()
  //     .required("Required")
  //     .test(
  //       "leading-space",
  //       "Cannot start with space",
  //       (value) => !value.startsWith(" ")
  //     )
  //     .min(2, "Message should have atleast 2 characters"),
  // });

  // const onSubmit = (formData, { resetForm }) => {
  //   const payload = {
  //     data: {
  //       name: formData.name.trim(),
  //       phone: formData.phone,
  //       email: formData.email.trim(),
  //       message: formData.message.trim(),
  //     },
  //   };

  //   axios
  //     .post(`${import.meta.env.VITE_APP_API_URL}api/save-contacts`, payload)
  //     .then((response) => {
  //       console.log("Response Data", response?.data);
  //       resetForm();
  //       setShowPopup(true);
  //     })
  //     .catch((error) => {
  //       console.log("Error sending Form data", error);
  //       resetForm();
  //     });
  // };

  // const formik = useFormik({
  //   initialValues,
  //   onSubmit,
  //   validationSchema,
  // });



  return (
    <div className="w-[90%] text-tertiary dark:bg-darkTheme dark:text-white  mx-auto flex flex-col md:flex-row gap-12 md:gap-7 lg:gap-24">
      <div className="lg:basis-[35%] md:basis-[50%] font-raleway max-md:text-center">
       
        <h1 className="text-5xl md:text-5xl lg:text-7xl py-2 mt-5 font-bold custom-gradient-text">
       {content?.title}
        </h1>
        <p className="font-semibold md:text-lg uppercase py-5 dark:text-white">{content?.caption}</p>
        <p className="font-montserrat text-sm font-medium">
        {content?.description}
        </p>
      </div>
      {/* <form
        onSubmit={formik.handleSubmit}
        className="lg:basis-[60%] md:basis-[50%] space-y-14 font-montserrat font-medium "
      >
        <div className="sm:flex items-center gap-8 max-sm:space-y-14">
          <div className="relative flex flex-col w-full">
            <input
              name="name"
              className="peer bg-transparent outline-none border-b border-tertiary dark:border-white"
              id="name"
              {...formik.getFieldProps("name")}
            />
            <label
              htmlFor="name"
              className={`w-full absolute cursor-text bottom-1  peer-focus:text-xs   ${
                formik.values.name && "text-xs -translate-y-5"
              }  peer-focus:-translate-y-5 transition-all duration-300 peer-focus:text-primary font-medium peer-focus:dark:text-blue-400`}
            >
              Name*
            </label>
            <div className="before:content-[''] before:h-[1px] before:w-full before:bg-primary before:absolute before:bottom-0 scale-0 peer-focus:scale-100 transition-all duration-200 ease-linear before:dark:bg-blue-400"></div>
            {formik.touched.name && formik.errors.name && (
              <p className="absolute -bottom-[18px] text-red-500 text-xs">
                *{formik.errors.name}
              </p>
            )}
          </div>
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
                formik.values.phone && "text-xs -translate-y-5"
              }  peer-focus:-translate-y-5 transition-all  duration-300 peer-focus:text-primary font-medium peer-focus:dark:text-blue-400`}
            >
              Phone*
            </label>
            <div className="before:content-[''] before:h-[1px] before:w-full before:bg-primary before:absolute before:bottom-0 scale-0 peer-focus:scale-100 transition-all duration-300 before:dark:bg-blue-400 ease-linear"></div>
            {formik.touched.phone && formik.errors.phone && (
              <p className="absolute -bottom-[18px] text-red-500 text-xs">
                *{formik.errors.phone}
              </p>
            )}
          </div>
        </div>
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
              formik.values.email && "text-xs -translate-y-5"
            } peer-focus:-translate-y-5 transition-all  duration-300 peer-focus:text-primary font-medium peer-focus:dark:text-blue-400`}
          >
            Email*
          </label>
          <div className="before:content-[''] before:h-[1px] before:w-full before:bg-primary before:absolute before:bottom-0 scale-0 peer-focus:scale-100 transition-all duration-300 before:dark:bg-blue-400 ease-linear"></div>
          {formik.touched.email && formik.errors.email && (
            <p className="absolute -bottom-[18px] text-red-500 text-xs">
              *{formik.errors.email}
            </p>
          )}
        </div>
        <div className="relative flex flex-col w-full">
          <textarea
            name="message"
            rows={3}
            className="peer text-sm bg-transparent outline-none border-b border-tertiary dark:border-white"
            id="message"
            {...formik.getFieldProps("message")}
          />
          <label
            htmlFor="message"
            className={`w-full absolute cursor-text top-1 peer-focus:text-xs ${
              formik.values.message && "text-xs -translate-y-6"
            }  peer-focus:-translate-y-6 transition-all  duration-300 peer-focus:text-primary font-medium peer-focus:dark:text-blue-400`}
          >
            Message*
          </label>
          <div className="before:content-[''] before:h-[1px] before:w-full before:bg-primary before:absolute before:bottom-0 scale-0 peer-focus:scale-100 transition-all duration-300 before:dark:bg-blue-400 ease-linear"></div>
          {formik.touched.message && formik.errors.message && (
            <p className="absolute -bottom-[18px] text-secondary text-xs">
              *{formik.errors.message}
            </p>
          )}
        </div>
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
      </form> */}
      {/* {showPopup && <Popup setShowPopup={setShowPopup} />} */}
      <div className="lg:basis-[65%] md:basis-[50%] space-y-14 font-montserrat font-medium ">
        <ContactForm selectedForm={IsCareerform ? 'career': ''}/>
      </div>
    </div>
  );
};

export default SubscribeForm;
