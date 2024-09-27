import axios from "axios";
import { useFormik } from "formik";
import * as yup from "yup";
import emailjs from "@emailjs/browser";
import { useState } from "react";

const NewsLetterTextfield = () => {
  const [subscribed, setSubscribed] = useState(false);

  const validationSchema = yup.object({
    email: yup
      .string()
      .required("Required")
      .matches(
        /^[A-Z0-9._%+-]{3,}@[A-Z0-9.-]{2,}\.[A-Z]{2,}$/i,
        "Invalid email"
      ),
  });

  const sendMail = (formData) => {
    const serviceID = import.meta.env.VITE_APP_DATA_MAIL_SERVICE_ID; //old service_oik8vde
    const templateID = import.meta.env
      .VITE_APP_DATA_MAIL_NEWSLETTER_TEMPLATE_ID; //old template_1f6ib6b
    const publicKey = import.meta.env.VITE_APP_DATA_MAIL_PUBLIC_KEY; //old ZRpWuyBwxaFOkFcGf

    const templateParams = {
      email: formData.email.trim(),
    };
    console.log("templateParams:", templateParams);
    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        if (response.status === 200) {
          console.log("Data mail sent Successfully..!");
          console.log(response);
          //no-replay mail
          emailjs
            .send(
              import.meta.env.VITE_APP_THANK_YOU_MAIL_SERVICE_ID,
              import.meta.env.VITE_APP_THANK_YOU_MAIL_NEWSLETTER_TEMPLATE_ID,
              { email: formData.email },
              import.meta.env.VITE_APP_THANK_YOU_MAIL_PUBLIC_KEY
            )
            .then((response) => {
              if (response.status === 200) {
                console.log("Thank you mail sent Successfully..!");
                console.log(response);
              }
            })
            .catch((error) => {
              console.error(error);
            });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const onSubmit = (formData, { resetForm, setSubmitting, setFieldError }) => {
    const payload = {
      data: {
        email: formData.email.trim(),
      },
    };
    console.log("Form Data Payload", payload);
    axios
      .post(
        `${import.meta.env.VITE_APP_API_URL}api/save-newsletter-users`,
        payload
      )
      .then((res) => {
        console.log("Email data sent successfully!");
        console.log(res);
        sendMail(formData);
        setSubscribed(true);
        setTimeout(() => {
          setSubscribed(false);
        }, 10000);
        resetForm();
      })
      .catch((error) => {
        setSubmitting(false);
        console.log("ERROR", error);
        if (error?.response?.status === 400) {
          console.log("User already Exist");
          setFieldError("email", "email already exists!");
        }
      });
  };

  let formik = useFormik({
    initialValues: { email: "" },
    onSubmit,
    validationSchema,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="flex items-center dark:bg-[#50545a] px-3 rounded-full bg-white">
        <input
          className="border-none bg-transparent  w-full outline-none py-2"
          type="email"
          placeholder="Email address"
          name="email"
          id="email"
          {...formik.getFieldProps("email")}
        />
        <button
          type="submit"
          disabled={!formik.dirty || !formik.isValid || formik.isSubmitting}
        >
          {formik.isSubmitting ? (
            <svg
              aria-hidden="true"
              className="w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-secondary"
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
            <svg
              className="w-8 h-8 dark:text-white text-black cursor-pointer hover:scale-[1.1]"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 12H5m14 0-4 4m4-4-4-4"
              />
            </svg>
          )}
        </button>
      </div>
      {formik.touched.email && formik.errors.email && (
        <p className="text-red-500 pt-1 font-medium text-xs ml-3">
          *{formik.errors.email}
        </p>
      )}
      {subscribed && (
        <p className="text-green-600 pt-1 font-medium text-sm  ml-3">
          Thankyou for subscribing!
        </p>
      )}
    </form>
  );
};

export default NewsLetterTextfield;
