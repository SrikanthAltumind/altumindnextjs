import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { convertToUrlFormat } from '../../ReactFunctions';

const JobCards = ({jobData}) => { 
    const navigate = useNavigate()
  return (
    <div className="w-full flex-wrap flex justify-evenly gap-8 items-center font-montserrat">
      {jobData?.length > 0 ? (
        jobData?.map((job) => (
          <div
            key={"job" + job?.id}
            className="lg:w-[35%] w-full lg:min-w-[400px] flex justify-between items-center border-b-2 py-5 border-[#CCCCCC] cursor-pointer group"
          >
            <div className="flex flex-col gap-3 items-start justify-start">
              <div>
                <p className="lg:text-base text-sm font-medium text-wrap lg:text-nowrap">
                  {job?.attributes?.job_title}
                </p>
              </div>
              <div className="flex items-center justify-start gap-3 font-montserrat">
                <p className="lg:text-sm text-xs">
                  {job?.attributes?.experience}
                </p>
                <div className="w-2 h-2 rounded-full bg-gray-400" />
                <p className="lg:text-sm text-xs">
                  {
                    job?.attributes?.open_role_job_location?.data?.attributes
                      ?.city
                  }
                  ,{" "}
                  {
                    job?.attributes?.open_role_job_location?.data?.attributes
                      ?.country
                  }
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <button
                onClick={() =>
                  navigate(
                    `/jobs/${job?.id}/${convertToUrlFormat(job?.attributes?.job_title)}`
                  )
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6 group-hover:animate-ping transition-all duration-200 ease-in-out"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        ))
      ) : (
        <div className="flex w-full h-[110px] justify-center items-center">
          <p>No jobs found matching the criteria</p>
        </div>
      )}
    </div>
  );
}

export default JobCards