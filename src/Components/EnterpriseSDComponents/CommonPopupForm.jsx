import { Formik, Form, Field } from "formik"
// import certfiedLogo from "../../assets/certified-logo.png"
// import topDevelopers from "../../assets/top-developer.png"
import * as Yup from 'yup'
import emailjs from "@emailjs/browser";

const initialValues = {
    name:'',
    phone:'',
    email:'',
    message:''
}

const formSchema = Yup.object({ 
    name: Yup.string().min(3).required("Required"),
    email: Yup.string()
      .required("Required")
      .matches(
        /^[A-Z0-9._%+-]{3,}@[A-Z0-9.-]{2,}\.[A-Z]{2,}$/i,
        "Invalid email"
      ),
    phone: Yup.string()
  .matches(/^[0-9 +]+$/, "Enter a valid phone number")
  .min(10, "Number should have at least 10 digits")
  .required("Required"),
    message: Yup.string().required("Required")
})




const CommonPopupForm = ({closePopup}) => {
    const onSubmit = (values, actions) => {
         console.log(values)
        actions.resetForm();
    const templateParams = {
        from_name: values.name,
        email: values.email,
        phone: values.phone,
        message: values.message,
    };

      emailjs
        .send(
            import.meta.env.VITE_APP_MAIL_SERVICE_ID,
            import.meta.env.VITE_APP_MAIL_TEMPLATE_ID,
            templateParams,
            import.meta.env.VITE_APP_MAIL_PUBLIC_KEY
        )
        .then(
            (response) => {
                console.log("SUCCESS!", response.status, response.text);
                actions.resetForm();
                alert("Message sent successfully!");
            },
            (err) => {
                console.error("FAILED...", err);
                alert("There was an error sending your message.");
            }
        );

    }

    const list=[
        "Custom Roadmap for Your Enterprise Software",
        "Feasibility & Budget Estimation",
        "Time-to-Market Forecast",
        "Free Initial Consultation"
    ]

    const imglist = [
        {
            id:1,
            url:"https://cdn.altumindglobal.com/Digital_agency_f8e443a9f1.svg",
            alt:'logo'
        },
        {
            id:2,
            url:"https://cdn.altumindglobal.com/image_1123_2c915065f3.svg",
            alt:'logo'
        },
        {
            id:3,
            url:"https://cdn.altumindglobal.com/image_1121_5e00ae09de.svg",
            alt:'logo'
        },
        {
            id:4,
            url:"https://cdn.altumindglobal.com/image_1122_d281a04197.svg",
            alt:'logo'
        },
        {
            id:5,
            url:"https://cdn.altumindglobal.com/image_1126_fd8471a9a1.svg",
            alt:'logo'
        },
        {
            id:6,
            url:"https://cdn.altumindglobal.com/image_1124_b696b6a11c.svg",
            alt:'logo'
        },
    ]
 
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
        <div className="max-w-[900px] w-[90%] bg-[#1c1c1c] relative rounded-xl h-[calc(100vh-110px)] overflow-y-auto md:h-[500px] mt-12 md:flex-row flex-col-reverse flex">
             <button onClick={closePopup} >
                    <svg className="w-8 h-8 absolute top-1 md:right-5 right-1  text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm7.707-3.707a1 1 0 0 0-1.414 1.414L10.586 12l-2.293 2.293a1 1 0 1 0 1.414 1.414L12 13.414l2.293 2.293a1 1 0 0 0 1.414-1.414L13.414 12l2.293-2.293a1 1 0 0 0-1.414-1.414L12 10.586 9.707 8.293Z" clipRule="evenodd"/>
                    </svg>

                    </button>
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
                         <img src={img?.url} alt={img?.alt} className="w-[45px] object-contain" />
                    </div>
                        ))
                    }
                   
                </div>
            </div>
            <div className="bg-[#1c1c1c] md:overflow-y-auto py-5 px-10 rounded-xl basis-[55%] text-white">
                    <p className="text-[26px] font-semibold text-center">Let’s Connect</p>
                  <Formik className="py-3" initialValues={initialValues} validationSchema={formSchema} onSubmit={onSubmit}>
                    {({errors, touched, values}) =>(
                        <Form className="space-y-12 mt-5">

                        <div className="flex relative flex-col w-full">
                        <Field type="text" name="name" id="name" className="peer pb-1 text-sm bg-transparent capitalize outline-none border-b border-white" />
                        <label htmlFor="name" className={`absolute cursor-text peer-focus:text-xs ${values?.name ? 'text-xs -translate-y-6': 'text-sm lg:text-base'} peer-focus:-translate-y-6 transition-all duration-300`} >Name<span className="text-red-500">*</span></label>
                         {errors?.name && touched?.name && <p className="text-red-500 absolute -bottom-[18px] text-xs">*{errors?.name}</p>}
                        </div>
                      
                        <div className="relative flex flex-col w-full">
                        <Field className="peer bg-transparent pb-1  text-sm capitalize outline-none border-b border-white" type="email" name="email" id="email"/>
                         <label htmlFor="email" className={`absolute cursor-text peer-focus:text-xs ${values?.email ? 'text-xs -translate-y-6': 'text-sm lg:text-base'} peer-focus:-translate-y-6 transition-all duration-300`}>Email<span className="text-red-500">*</span></label>
                        {errors?.email && touched?.email && <p className="text-red-500 absolute -bottom-[18px] text-xs">*{errors?.email}</p>}
                        </div>

                        <div className="flex relative flex-col w-full">
                        <Field className="peer pb-1 bg-transparent text-sm capitalize outline-none border-b border-white" type="text" name="phone" id="phone" />
                        <label htmlFor="phone" className={`absolute cursor-text peer-focus:text-xs ${values?.phone ? 'text-xs -translate-y-6': 'text-sm lg:text-base'} peer-focus:-translate-y-6 transition-all duration-300`}>Phone Number<span className="text-red-500">*</span></label>
                        {errors?.phone && touched?.phone && <p className="text-red-500 absolute -bottom-[18px] text-xs">*{errors?.phone}</p>}
                        </div>

                        <div className="flex  relative flex-col w-full">
                        <Field as="textarea" rows={3} className="peer bg-transparent pb-1 text-sm capitalize outline-none border-b border-white" name="message" id="message" />
                         <label htmlFor="message" className={`absolute cursor-text peer-focus:text-xs ${values?.message ? 'text-xs -translate-y-6': 'text-sm lg:text-base'} peer-focus:-translate-y-6 transition-all duration-300`}>Tell us what you&apos;re building/The problem you&apos;re solving<span className="text-red-500">*</span></label>
                         {errors?.message && touched?.message && <p className="text-red-500 absolute -bottom-[18px] text-xs">*{errors?.message}</p>}
                        </div>

                        <button className="border rounded-full border-white py-2 px-8 text-sm" type="submit">Submit</button>
                      </Form>
                    )}
                      
                  </Formik>
         
                   
            </div>
    
        </div>
    </div>
  )
}

export default CommonPopupForm