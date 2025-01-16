import axios from "axios";
import { useEffect, useState } from "react";
import LoaderSpinner from "../common-components/LoaderSpinner";
import Markdown from "react-markdown";

const PainPoints = () => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [whyAgilitiData, setWhyAgilitiData] = useState('');

    const fetchData = () => {
        const keyChallenges = `${import.meta.env.VITE_APP_API_URL}/api/agiliti-root-key-challenge?populate=*`;
        axios
          .get(keyChallenges)
          .then((res) => {
            setData(res?.data?.data?.attributes);
            console.log('key challenges', data)
            setLoading(false);
          })
          .catch((err) => {
            console.error("Failed to fetch data:", err);
            setError("Failed to fetch data. Please try again later.");
            setLoading(false);
          });
      };

      const fetchData2 = () => {
        const whyAgiliti = `${import.meta.env.VITE_APP_API_URL}/api/agiliti-root-why-sense?populate=*`;
        axios
          .get(whyAgiliti)
          .then((res) => {
            setWhyAgilitiData(res?.data?.data?.attributes);
            console.log('why agiliti', whyAgilitiData)
            setLoading(false);
          })
          .catch((err) => {
            console.error("Failed to fetch data:", err);
            setError("Failed to fetch data. Please try again later.");
            setLoading(false);
          });
      };


    
      useEffect(() => {
        fetchData();
        fetchData2();
      }, []);
    
      if (loading) {
        return <LoaderSpinner />;
      }
    
      if (error) {
        return (
          <div className="dark:text-white font-raleway h-[300px] flex justify-center items-center">
            {error}
          </div>
        );
      }
  return (

    // <div className="dark:bg-darkTheme font-raleway flex flex-col lg:flex-r7w max-lg:gap-10 w-300%] mx-auto">
    //     <div className="basis-[50%] flex gap-3 flex-col lg:justify-between px-3 lg:px-7 ">
    //         <div>
    //             <p className="lg:max-w-[80%] custom-gradient-text max-lg:text-center lg:ml-0">{data?.title}</p>
    //         </div>
    //         <div className="flex sm:sm:border flex-row flex-col gap-5hite text-[15px]">
    //             <div className="px-5 py-4 basis-[50%] bg-[#DD5143] rounded-lg">
    //                 <p>{data?.cardOneDescription}</p>
    //                 <p className="pt-2">- CIO</p>
    //             </div>
    //             <div className="px-5 py-4 basis-[50%] bg-[#5489fd] rounded-lg">
    //             <p>{data?.cardTwoDescription}</p>
    //             <p className="pt-2">- Up City</p>
    //             </div>
    //         </div>
    //         <div>
    //             <p className="leading-7">{data?.description}</p>
    //         </div>
    //         <div className="flex gap-3 text-center text-sm font-medium font-medium justify-center items-center">
    //             <div className="">
    //                 <img className="mx-auto mb-2" src={data?.imageOne?.data?.attributes?.url} alt="Low Flexibility"/>
    //                 <p>{data?.imageOneText}</p>
    //             </div>
    //             <div>
    //             <img className="mx-auto mb-2" src={data?.imageTwo?.data?.attributes?.url} alt="High Costs"/>
    //             <p>{data?.imageTwoText}</p>
    //             </div>
    //             <div>
    //             <img className="mx-auto mb-2" src={data?.imageThree?.data?.attributes?.url} alt="Minimal No Training"/>
    //             <p>{data?.imageThreeText}</p>
    //             </div>
    //         </div>
    //     </div>
    //     <div className="basis-[50%] flex gap-3 flex-col lg:justify-between lg:px-7 px-3 lg:border-l-[1px] lg border-[#CCCCCC] lg:space-y-8 max-sm:space-y-3 space-y-5">
    //         <div>
    //             <p className="lg:max-w-[80%] custom-gradient-text max-lg:text-center lg:ml-0">{whyAgilitiData?.title}</p>
    //         </div>
    //         <div className="leading-7 space-y-3">
    //         <p>{whyAgilitiData?.description1}</p>
    //         <p>{whyAgilitiData?.description2}</p>
    //         </div>
    //         <div className="flex gap-3 text-center text-sm font-medium font-medium justify-center items-center">
    //             <div className="">
    //                 <img className="mx-auto mb-2" src={whyAgilitiData?.imageOne?.data?.attributes?.url} alt="Low Flexibility"/>
    //                 <p>{whyAgilitiData?.imageOneText}</p>
    //             </div>
    //             <div>
    //             <img className="mx-auto mb-2" src={whyAgilitiData?.imageTwo?.data?.attributes?.url} alt="High Costs"/>
    //             <p>{whyAgilitiData?.imageTwoText}</p>
    //             </div>
    //             <div>
    //             <img className="mx-auto mb-2" src={whyAgilitiData?.imageThree?.data?.attributes?.url} alt="Minimal No Training"/>
    //             <p>{whyAgilitiData?.imageThreeText}</p>
    //             </div>
    //         </div>
    //     </div>
    // </div>

    <div className="dark:bg-darkTheme dark:text-white max-w-[950px] font-raleway w-[90%] sm:w-[95%] space-y-5 mx-auto">
    <div className="space-y-3">
    <p className="custom-sub-heading text-center">We Build and Manage Your Team. You Focus On Your Core Business! </p>
      <h2 className="lg:max-w-[90%] custom-gradient-text text-center">{whyAgilitiData?.title}</h2>
     
    </div>
    <div className="leading-7 space-y-3 sm:px-4">
         <p><Markdown>{whyAgilitiData?.description1}</Markdown></p>
         <p><Markdown>{whyAgilitiData?.description2}</Markdown></p>
    </div>
    <div>
    <p className="font-medium sm:px-4">{whyAgilitiData?.description3}</p>
    </div>
    {/* <div className="flex gap-10 flex-wrap justify-center mx-auto">
        <div className="shadow-custom-shadow px-3 py-6 w-[280px]">
        <img className="mb-2" src={whyAgilitiData?.imageOne?.data?.attributes?.url} alt="Minimal No Training"/>
        <p>{whyAgilitiData?.imageOneText}</p>
        </div>
        <div className="shadow-custom-shadow px-3 py-6 w-[280px]">
        <img className="mb-2" src={whyAgilitiData?.imageTwo?.data?.attributes?.url} alt="Minimal No Training"/>
        <p>{whyAgilitiData?.imageTwoText}</p>
        </div>
        <div className="shadow-custom-shadow px-3 py-6 w-[280px]">
        <img className="mb-2" src={whyAgilitiData?.imageThree?.data?.attributes?.url} alt="Minimal No Training"/>
        <p>{whyAgilitiData?.imageThreeText}</p>
        </div>
        <div className="shadow-custom-shadow px-3 py-6 w-[280px]">
        <img className="mb-2" src={whyAgilitiData?.imageFour?.data?.attributes?.url} alt="Minimal No Training"/>
        <p>{whyAgilitiData?.imageFourText}</p>
        </div>
        <div className="shadow-custom-shadow px-3 py-6 w-[280px]">
        <img className="mb-2" src={whyAgilitiData?.imageFive?.data?.attributes?.url} alt="Minimal No Training"/>
        <p>{whyAgilitiData?.imageFiveText}</p>
        </div>
        <div className="shadow-custom-shadow px-3 py-6 w-[280px]">
        <img className="mb-2" src={whyAgilitiData?.imageSix?.data?.attributes?.url} alt="Minimal No Training"/>
        <p>{whyAgilitiData?.imageSixText}</p>
        </div>
    </div> */}
    <div className="flex flex-col max-sm:items-center sm:flex-row flex-wrap justify-center mx-auto">
          <div className="max-sm:border-0 border-r border-b flex items-center gap-5 border-[#CCCCCC] px-7 py-7 sm:py-12 w-[300px]">
          <img className="w-10" src={whyAgilitiData?.imageOne?.data?.attributes?.url} alt="Minimal No Training"/>
          <h3 className="text-sm font-medium">{whyAgilitiData?.imageOneText}</h3>
          </div>
          <div className="max-sm:border-0 min-[948px]:border-r border-b flex items-center gap-5 border-[#CCCCCC] px-7 py-7 sm:py-12 w-[300px]">
          <img className="w-10" src={whyAgilitiData?.imageTwo?.data?.attributes?.url} alt="Minimal No Training"/>
          <h3 className="text-sm font-medium">{whyAgilitiData?.imageTwoText}</h3>
          </div>
          <div className="max-sm:border-0 border-r min-[948px]:border-r-0 border-b flex items-center gap-5 border-[#CCCCCC] px-7 py-7 sm:py-12 w-[300px]">
          <img className="w-10" src={whyAgilitiData?.imageThree?.data?.attributes?.url} alt="Minimal No Training"/>
          <h3 className="text-sm font-medium">{whyAgilitiData?.imageThreeText}</h3>
          </div>
          <div className="max-sm:border-0 min-[948px]:border-r sm:max-[948px]:border-b flex items-center gap-5 border-[#CCCCCC] px-7 py-7 sm:py-12 w-[300px]">
          <img className="w-10" src={whyAgilitiData?.imageFour?.data?.attributes?.url} alt="Minimal No Training"/>
          <h3 className="text-sm font-medium">{whyAgilitiData?.imageFourText}</h3>
          </div>
          <div className="max-sm:border-0 border-r flex items-center gap-5 border-[#CCCCCC] px-7 py-7 sm:py-12 w-[300px]">
          <img className="w-10" src={whyAgilitiData?.imageFive?.data?.attributes?.url} alt="Minimal No Training"/>
          <h3 className="text-sm font-medium">{whyAgilitiData?.imageFiveText}</h3>
          </div>
          <div className="max-sm:border-0 flex items-center gap-5 border-[#CCCCCC] px-7 py-7 sm:py-12 w-[300px]">
          <img className="w-10" src={whyAgilitiData?.imageSix?.data?.attributes?.url} alt="Minimal No Training"/>
          <h3 className="text-sm font-medium">{whyAgilitiData?.imageSixText}</h3>
          </div>
      </div>
  </div>
   
      
  )
}

export default PainPoints