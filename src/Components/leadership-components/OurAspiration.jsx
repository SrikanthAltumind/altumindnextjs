import axios from "axios";
import { useEffect, useState } from "react";
import LoaderSpinner from "../common-components/LoaderSpinner";
import { gradientStyle } from "../../ReactFunctions";

const OurAspiration = () => {
  const [data, setData] = useState();
//   const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

//   const fetchData = () => {
//     axios
//       .get(
//         `${
//           import.meta.env.VITE_APP_API_URL
//         }api/leadership-aspiration?populate=*`
//       )
//         .then((response) => {
//           console.log("data from leadership: ", response?.data?.data)
//         setData(response?.data?.data?.attributes);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error while fetching Data", error);
//         setError(error.message);
//         setLoading(false);
//       });
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   if (loading) {
//     return <LoaderSpinner />;
//   }

//   if (error) {
//     return (
//       <div className="dark:text-white font-raleway h-[300px] flex justify-center items-center">
//         {error}
//       </div>
//     );
//   }

  return (
    <div className="w-[90%] max-w-[1100px] mx-auto lg:flex items-center justify-between dark:text-white">
      <div className="basis-[65%] space-y-5">
        <div className="font-raleway space-y-2 max-lg:text-center">
          <p className="font-semibold dark:font-medium">Our Aspiration</p>
          <p className="lg:mx-0 max-w-[550px] text-3xl font-bold">
            Building an{" "}
            <span style={gradientStyle}>
              Innovative,
              <br /> Impactful, Inclusive Tomorrow.
            </span>
          </p>
        </div>
        {/* <div className="lg:hidden max-w-[320px] mx-auto">
          <img src={data?.image?.data?.attributes?.url} alt={data?.title} />
        </div> */}
        <p className="font-montserrat font-medium dark:font-normal max-lg:text-center text-sm xl:text-base leading-6">
          {`Altumind is leading the charge toward a future where digital
          innovation and sustainability converge. We're dedicated to leveraging
          technology's transformative potential to empower our clients, driving
          their success while safeguarding our planet. Our solutions are infused
          with both creativity and cutting-edge technology, which will enable
          businesses to flourish in the digital era. We aspire to be more than
          just a service provider; we aim to be a trusted advisor, guiding our
          clients towards a path of sustainable growth and leaving an enduring
          positive legacy.`}
        </p>
      </div>
      <div className="basis-[32%] bg-red-10 max-w-[320px] hidden lg:block">
        <img
          className=""
          src="https://alt-digital-cms.s3.ap-south-1.amazonaws.com/Our_Aspiration_Compressify_io_a51eef2b4f.webp"
          alt={`aspiration-section-img`}
        />
      </div>
    </div>
  );
};

export default OurAspiration;
