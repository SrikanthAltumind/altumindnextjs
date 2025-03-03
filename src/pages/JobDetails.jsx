import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import LoaderSpinner from '../Components/common-components/LoaderSpinner';
import { customRenderers } from '../ReactFunctions';
import Markdown from 'react-markdown';
import JobApplicationForm from '../Components/Openings/JobApplicationForm'

const JobDetails = () => {
    const [jobData, setJobData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showForm , setShowForm] = useState(false);
    const {jobId} = useParams()

    const fetchJobData = () => {
      const url = import.meta.env.VITE_APP_API_URL + `api/open-role-job-contents/${jobId}?populate=*`;
      axios
        .get(url)
        .then((res) => {
          setJobData(res?.data?.data?.attributes);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Failed to fetch data:", err);
          setError("Failed to fetch data. Please try again later.");
          setLoading(false);
        });
    };

    console.log(jobData, 'jobdata')

    useEffect(() => {
      fetchJobData();
    }, []);

    useEffect(() => {
      showForm ? document.body.style.position = "fixed" : document.body.style.position = "static"
    },[showForm])

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
      <div className="w-full flex flex-col gap-8">
        <div className="w-full flex md:flex-row flex-col-reverse p-5 gap-6 relative justify-center items-start font-raleway">
          <div className="lg:w-[50%] md:w-[50%] w-full flex flex-col gap-8 items-start justify-start">
            <p className="font-extrabold lg:text-4xl md:text-3xl text-2xl md:block hidden">
              {jobData?.job}
            </p>
            <Markdown
              components={customRenderers}
              className="markdown md:text-base text-sm"
            >
              {jobData?.content}
            </Markdown>
          </div>
          <div className="sticky md:w-[40%] lg:w-[40%] w-full flex flex-col gap-4 items-start justify-start">
            <p className="font-extrabold lg:text-4xl md:text-3xl text-2xl md:hidden text-center w-full">
              {jobData?.job}
            </p>
            <div className="w-full h-[300px]">
              <img
                src={jobData?.poster?.data?.attributes?.url}
                alt={jobData?.attributes?.name}
                // srcSet={`
                //     ${jobData?.poster?.data?.attributes?.formats?.large?.url} 1024w,
                //     ${jobData?.poster?.data?.attributes?.formats?.medium?.url} 768w,
                //     ${jobData?.poster?.data?.attributes?.formats?.small?.url} 480w
                // `}
                // sizes="
                //     (min-width: 1024px) 1024px,
                //     (min-width: 768px) 768px,
                //     100vw
                // "
                className="w-full object-contain h-full rounded-xl"
              />
            </div>
            <div className="w-full flex flex-col md:flex-row md:justify-between md:items-center items-start p-4">
              <p>
                <span className="md:font-medium text-sm">Experience:</span>{" "}
                <span className="md:font-semibold text-sm font-medium">
                  {jobData?.experience}
                </span>
              </p>
              <p>
                <span className="md:font-medium text-sm">Mode:</span>{" "}
                <span className="md:font-semibold text-sm font-medium">
                  {jobData?.mode}
                </span>
              </p>
            </div>
            <div className="w-full flex justify-center gap-5 items-center p-4 text-center">
              <button onClick={() => setShowForm(true)} className="text-sm font-medium lg:w-[200px] lg:h-[60px] w-[150px] h-[50px] rounded-md bg-[#E42D38] text-white">
                Apply Now
              </button>
            
              {/* <button className="text-sm font-medium lg:w-[200px] lg:h-[60px] w-[150px] h-[50px] rounded-md border-black border-2">
                Refer a Friend
              </button> */}
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center items-center py-8 font-raleway text-center">
          <div className="lg:w-[650px] md:[450px] w-[300px] lg:h-[400px] md:h-[350px] h-[320px] flex flex-col gap-4 justify-center items-center rounded-md shadow-lg">
            <img
              src="https://alt-digital-cms.s3.ap-south-1.amazonaws.com/5568584_2895131_1_Compressify_io_757e1ac154.webp"
              alt="job-details-explore-more"
              className="lg:w-[420px]"
            />
            <p className="font-semibold text-lg">Explore all Openings</p>
            <a href="/career/open-roles" className="group text-[#DD5143]">
              <p className="flex gap-1 items-center underline">
                <span className="text-sm font-medium cursor-pointer">
                  Explore More Jobs
                </span>
                <span>
                  <svg
                    className="w-6 h-6 group-hover:translate-x-3 transition-all duration-300"
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
                </span>
              </p>
            </a>
          </div>
        </div>
        {
                showForm && <JobApplicationForm setShowForm={setShowForm}/>
              }
      </div>

    );
}

export default JobDetails