// import Search from "../Components/open-roles-components/Search"

import { useCallback, useEffect, useState } from "react";
import Dropdown from "../Components/common-components/Dropdown";
import JobCards from "../Components/Openings/JobCards";
import { gradientStyle } from "../ReactFunctions";
import axios from "axios";
import LoaderSpinner from "../Components/common-components/LoaderSpinner";
import {debounce} from 'lodash'
import Banner from "../Components/common-components/Banner";
import CareerForm from "../Components/contact-components/CareerForm";

const OpenRoles = () => {

  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('')
  const [loading, setLoading] = useState(false)
  const [executeDebouncer, setExecuteDebouncer] = useState(false);
  const [initialJobs, setInitialJobs] = useState([]);
  let storedJobData;
  const debouncedSearch = useCallback(
    debounce(() => {
      setExecuteDebouncer(true)
    }, 750),
    []
  );

  const depart_list = [
    "Marketing",
    "Project Management",
    "Design",
    "Sales & Operations",
    "Development",
  ];

  const job_type = [
    "Full Time",
    "Part Time",
    "Contractual",
    "Remote",
    "Hybrid",
  ];

  const location = ["USA", "India"];

  const experience = [
    "Entry-Level (1-3 years)",
    "Mid-Level (3-5 years)",
    "Senior-Level (5+ years)",
    "Managerial (10+ years)",
    "Executive (15+ years)",
  ];

  const [selections, setSelections] = useState({
    Department: "",
    "Job Type": "",
    Location: "",
    Experience: "",
  });

  const handleSelectionChange = (ddName, selectedItem) => {
    setSelections((prevSelections) => ({
      ...prevSelections,
      [ddName]: selectedItem,
    }));
  };

  const fetchJobs = () => {
    axios.get(`${import.meta.env.VITE_APP_API_URL}api/open-role-job-cards?populate=*`)
      .then((response) => {
        setJobs(response?.data?.data);
        setInitialJobs(response?.data?.data)
      })
      .catch((error) => {
        console.log("error while fetching jobs: ", error);
      });
  };

  const handleSearch = () => {
    setLoading(true)
    axios.get(`${import.meta.env.VITE_APP_API_URL}api/open-role-job-cards?populate=*&filters[$or][0][open_role_department][departmentName][$contains]=${searchTerm}&filters[$or][1][open_role_experience][experienceLevel][$contains]=${searchTerm}&filters[$or][2][open_role_job_types][typeName][$contains]=${searchTerm}&filters[$or][3][open_role_job_location][country][$contains]=${searchTerm}&filters[$or][4][job_title][$contains]=${searchTerm}`)
    .then((response) => {
      setJobs(response?.data?.data);
      setLoading(false);
    })
    .catch((error) => {
      console.log("Error while searching: ", error);
      setLoading(false);
    });
  }

  const fetchFilteredJobs = (url) => {
    axios.get(url)
      .then((response) => {
        setJobs(response?.data?.data)
      })
      .catch((error) =>{
      console.log("error while filtering the jobs: ", error)
    })

  }


  useEffect(() => {
    if (executeDebouncer) {
      setExecuteDebouncer(false);
      handleSearch();
    }
  }, [executeDebouncer]);


useEffect(() => {
  const constructURL = () => {
    const {
      Department,
      "Job Type": JobType,
      Location,
      Experience,
    } = selections;
    const baseURL = `${import.meta.env.VITE_APP_API_URL}api/open-role-job-cards?populate[open_role_department][populate]=*&populate[open_role_experience]=*&populate[open_role_job_type]=*&populate[open_role_job_location]=*`;

    const filters = [];
    if (Department)
      filters.push(
        `filters[open_role_department][departmentName][$eq]=${encodeURIComponent(
          Department
        )}`
      );
    if (Experience)
      filters.push(
        `filters[open_role_experience][experienceLevel][$eq]=${encodeURIComponent(
          Experience
        )}`
      );
    if (JobType)
      filters.push(
        `filters[open_role_job_types][typeName][$eq]=${encodeURIComponent(
          JobType
        )}`
      );
    if (Location)
      filters.push(
        `filters[open_role_job_location][country][$eq]=${encodeURIComponent(
          Location
        )}`
      );

    return `${baseURL}&${filters.join("&")}`;
  };

  const apiURL = constructURL();

  fetchFilteredJobs(apiURL)
}, [selections]);

  useEffect(() => {
    fetchJobs();
  }, []);


  return (
    <div className="w-full flex flex-col gap-8 justify-center items-center font-raleway dark:text-white dark:bg-[#0d1015]">
      <div className="w-full h-[240px] md:h-[360px] py-10 bg-[#F3F9FF] flex flex-col gap-4 items-center justify-center text-center">
        <p className="lg:text-3xl md:text-2xl text-xl font-extrabold">
          <span style={gradientStyle}>Careers That Evolve</span>{" "}
          <span>With You</span>
        </p>
        <p className="lg:text-base font-medium text-sm">
          Join a Culture That Celebrates Your Unique
          <br />
          Challenger Spirit
        </p>
        {/* <button className="w-[200px] h-[50px] rounded-3xl text-white text-sm font-medium bg-[#DD5143]">
          See All Open Roles
        </button> */}
      </div>
      <div className="w-full justify-center flex items-center p-6">
        <div className=" w-[80%] flex gap-4 rounded-full justify-start items-center border border-gray-300 px-4 py-2">
          <label htmlFor="role-search">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path
                fillRule="evenodd"
                d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                clipRule="evenodd"
              />
            </svg>
          </label>

          <input
            id="role-search"
            type="text"
            value={searchTerm}
            placeholder="Search for jobs.."
            className="p-1 w-full outline-none dark:bg-[#0d1015]"
            onChange={(e) => {
              setSearchTerm(e?.target?.value);
              debouncedSearch();
            }}
          />
          {searchTerm?.length > 0 && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-8 cursor-pointer"
              onClick={() => {
                setSearchTerm("");
                setJobs(initialJobs);
              }}
            >
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </div>
      </div>
      <div className="flex w-full justify-start items-center p-6">
        <p className="font-semibold capitalize">Filter By</p>
      </div>
      <div className="w-full flex justify-evenly gap-5 flex-wrap items-start relative">
        <Dropdown
          data={depart_list}
          ddName="Department"
          selection={selections.Department}
          onSelectionChange={handleSelectionChange}
        />
        <Dropdown
          data={job_type}
          ddName="Job Type"
          selection={selections["Job Type"]}
          onSelectionChange={handleSelectionChange}
        />
        <Dropdown
          data={location}
          ddName="Location"
          selection={selections.Location}
          onSelectionChange={handleSelectionChange}
        />
        <Dropdown
          data={experience}
          ddName="Experience"
          selection={selections.Experience}
          onSelectionChange={handleSelectionChange}
        />
      </div>
      <div className="w-full p-4 flex flex-col gap-5 justify-center items-center">
        {loading ? <LoaderSpinner /> : <JobCards jobData={jobs} />}
        {/* <div className="w-full flex items-center justify-center p-4">
          <button className="outline-none">
            <p className="underline text-center text-sm font-medium text-[#E42D38] cursor-pointer">
              View More
            </p>
          </button>
        </div> */}
      </div>
      {/* <div className="flex flex-col justify-start items-center gap-8 mt-10">
        <p className="text-center lg:text-4xl md:text-2xl text-xl font-extrabold">
          <span>{"Be Ready for What's Next: "}</span> <br />
          <span style={gradientStyle}>Join Our Talent Pool</span>
        </p>
        <div className="flex flex-col gap-3 w-full justify-center items-center p-4">
          <p className="font-raleway text-sm max-w-[1020px] text-center">
            {
              "We value attitude and skills that transcend job descriptions. If you believe your capabilities can thrive in our innovative environment, we want to hear from you."
            }
          </p>
          <p className="font-raleway text-sm max-w-[1020px] text-center">
            {
              "Our team is constantly growing, with new opportunities emerging regularly. Even if you don't see a perfect fit among our current openings, we're always eager to connect with exceptional talent."
            }
          </p>
        </div>
        <a href="/contact" className="underline text-center text-sm font-medium text-[#E42D38] cursor-pointer group flex gap-2">
          <span>Connect with Us </span>
          <span className="flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-3 group-hover:translate-x-3 transition-all duration-200 ease-in-out"
            >
              <path
                fillRule="evenodd"
                d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </a>
      </div> */}
      <CareerForm/>
    </div>
  );
};

export default OpenRoles;