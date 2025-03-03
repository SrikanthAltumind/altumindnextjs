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
import { Helmet } from "react-helmet-async";

const OpenRoles = () => {

  const [jobs, setJobs] = useState([]);
  const [jobOpenings, setJobOpenings] = useState([]);
  const [searchTerm, setSearchTerm] = useState('')
  const [loading, setLoading] = useState(false)
  const [executeDebouncer, setExecuteDebouncer] = useState(false);
  const [initialJobs, setInitialJobs] = useState([]);
  let storedJobData;
  const debouncedSearch = useCallback(
    debounce(() => {
      setExecuteDebouncer(true)
    }, 500),
    []
  );

  // const depart_list = [
  //   "Marketing",
  //   "Project Management",
  //   "Design",
  //   "Sales & Operations",
  //   "Development",
  // ];

  // const job_type = [
  //   "Full Time",
  //   "Part Time",
  //   "Contractual",
  //   "Training"
  // ];

  // const location = ["USA", "India", "Remote"];

  // const experience = [
  //   "Fresher",
  //   "Entry-Level (1-3 years)",
  //   "Mid-Level (4-5 years)",
  //   "Senior-Level (5+ years)",
  //   "Managerial (10+ years)",
  //   "Executive (15+ years)",
  // ];

  // const depart_list = [
  //   { id: "Marketing", name: "Marketing" },
  //   { id: "Project Management", name: "Project Management" },
  //   { id: "Design", name: "Design" },
  //   { id: "Sales & Operations", name: "Sales & Operations" },
  //   { id: "Development", name: "Development" }
  // ];
  
  const job_type = [
    { id: "Full Time", name: "Full Time" },
    { id: "Part Time", name: "Part Time" },
    { id: "Contractual", name: "Contractual" },
    { id: "Training", name: "Training" }
  ];
  
  const location = [
    { id: "USA", name: "USA" },
    { id: "India", name: "India" },
    { id: "Remote", name: "Remote" }
  ];
  
  const experience = [
    { id: "Fresher", name: "Fresher" },
    { id: "1-3 years", name: "Entry-Level (1-3 years)" },
    { id: "3-5 years", name: "Mid-Level (3-5 years)" },
    { id: "5-8 years", name: "Senior-Level (5-8 years)" },
    { id: "8-10 years", name: "Managerial (8-10 years)" },
    { id: "10+ years", name: "Executive (10+ years)" }
  ];
  

  const [selections, setSelections] = useState({
    // Department: [],
    "Job Type": [],
    Location: [],
    Experience: [],
  });

  const ClearFilter = () => {
    setSelections({
      // Department: [],
      "Job Type": [],
      Location: [],
      Experience: [],
    })
  }



  const handleSelectionChange = (ddName, selectedItem) => {

    let activeddName = selections[ddName]
    // const filtereddata = activeddName.includes(selectedItem) ? activeddName.filter((item) => item !== selectedItem) : activeddName.push(selectedItem)
    if(activeddName.includes(selectedItem)) {
     activeddName = activeddName.filter((item) => item !== selectedItem)
    } else {
      activeddName.push(selectedItem)
    }
    setSelections((prevSelections) => ({
      ...prevSelections,
      // [ddName]: selectedItem,
      [ddName]: activeddName,
      
    }));
    console.log(selectedItem, activeddName, 'item')
  };

  // const fetchJobs = () => {
  //   axios.get(`${import.meta.env.VITE_APP_API_URL}api/open-role-job-cards?populate=*`)
  //     .then((response) => {
  //       setJobs(response?.data?.data);
  //       setInitialJobs(response?.data?.data)
  //     })
  //     .catch((error) => {
  //       console.log("error while fetching jobs: ", error);
  //     });
  // };

  const fetchJobOpenings = () => {
    setLoading(true)
    axios.get(`${import.meta.env.VITE_APP_API_URL}api/zoho-recruit/fetch-jobs`)
      .then((response) => {
        setLoading(false)
        setJobOpenings(response?.data?.data?.filter(job=> job?.Job_Opening_Status==="In-progress"))
        setInitialJobs(response?.data?.data?.filter(job=> job?.Job_Opening_Status==="In-progress"))
        console.log(response, 'test')
      })
      .catch((error) => {
        setLoading(false)
        console.log("error while fetching jobs: ", error);
      });
  };

  console.log(jobOpenings, 'jobbb')

  // const handleSearch = () => {
  //   setLoading(true)
  //   axios.get(`${import.meta.env.VITE_APP_API_URL}api/open-role-job-cards?populate=*&filters[$or][0][open_role_department][departmentName][$contains]=${searchTerm}&filters[$or][1][open_role_experience][experienceLevel][$contains]=${searchTerm}&filters[$or][2][open_role_job_types][typeName][$contains]=${searchTerm}&filters[$or][3][open_role_job_location][country][$contains]=${searchTerm}&filters[$or][4][job_title][$contains]=${searchTerm}`)
  //   .then((response) => {
  //     setJobs(response?.data?.data);
  //     setLoading(false);
  //   })
  //   .catch((error) => {
  //     console.log("Error while searching: ", error);
  //     setLoading(false);
  //   });
  // }

  const handleSearch = () => {
    console.log(searchTerm)
    console.log(jobOpenings)
    const filteredData = jobOpenings.filter((job) => 
      job?.Job_Opening_Name?.toLowerCase().includes(searchTerm?.toLowerCase())
      || job?.City?.toLowerCase().includes(searchTerm?.toLowerCase()) 
      || job?.Country?.toLowerCase().includes(searchTerm?.toLowerCase()) 
    )
    setInitialJobs(filteredData)
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

  const handleDropdownFilter = ()=> {
    //rendering all jobs if no chechbox is selected
    if(Object.entries(selections).every(([key,value])=> value.length===0)){
        setInitialJobs(jobOpenings)
        return;
    }
    // Filtering if any checkbox is selected
    const filteredData = jobOpenings.filter(job=> 
        selections?.["Job Type"]?.map(option=> option.toLowerCase()).includes(job?.Job_Type?.toLowerCase())
        || selections?.Location?.map(option=> option.toLowerCase()).includes(job?.Country?.toLowerCase())
        || (selections?.Location?.includes('Remote') && job?.Remote_Job)
        // || selections?.Department?.map(option=> option.toLowerCase()).includes(job?.Industry?.toLowerCase())
        || selections?.Experience?.map(option=> option.toLowerCase()).includes(job?.Work_Experience?.toLowerCase())
    )
    setInitialJobs(filteredData)
  }

  useEffect(() => {  //Search Filter
    handleSearch()
  },[searchTerm])

  useEffect(() => {  //Dropdown Filter
    handleDropdownFilter()
  },[selections])

  // useEffect(() => {
  //   if (executeDebouncer) {
  //     setExecuteDebouncer(false);
  //     handleSearch();
  //   }
  // }, [executeDebouncer]);


useEffect(() => {
  const constructURL = () => {
    const {
      // Department,
      "Job Type": JobType,
      Location,
      Experience,
    } = selections;
    const baseURL = `${import.meta.env.VITE_APP_API_URL}api/open-role-job-cards?populate[open_role_department][populate]=*&populate[open_role_experience]=*&populate[open_role_job_type]=*&populate[open_role_job_location]=*`;

    const filters = [];
    // if (Department)
    //   filters.push(
    //     `filters[open_role_department][departmentName][$eq]=${encodeURIComponent(
    //       Department
    //     )}`
    //   );
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
    // fetchJobs();
    fetchJobOpenings();
  }, []);


  return (
    <>
     <Helmet>
                {/* For SEO  */}
                <title>Open Roles | Explore Current Job Openings & Apply Now</title>
                <meta
                  name="description"
                  content="Ready for your next career adventure? Join our team and be part of a company that values creativity, growth, and collaboration. Explore our opportunities!"
                />
                <meta name="keywords" content="" />
                {/* For Social Media */}
                <meta property="og:title" content="Open Roles | Explore Current Job Openings & Apply Now" />
                <meta property="og:description" content="Ready for your next career adventure? Join our team and be part of a company that values creativity, growth, and collaboration. Explore our opportunities!" />
                <meta property="og:image" content="https://alt-digital-cms.s3.ap-south-1.amazonaws.com/OG_image_sample_1_da398efc3b.png" />
                <meta property="og:keywords" content="" />
                {/* canonical */}
                <link rel="canonical" href="https://altumindglobal.com/career/open-roles" />
              </Helmet>
    <div className='bg-LightBlue md:h-[300px]  max-md:py-10 flex md:flex-row flex-col-reverse justify-between items-center font-raleway gap-y-10 px-4 md:px-10 lg:px-28'>
      
    <div className="max-md:px-5">
   <p className=' custom-gradient-text mx-0  py-2'>
   Careers That Evolve
   With You
   </p>
   <p className='max-w-[420px] mx-0 text-sm md:text-base  text-black font-medium'>Join a Culture That Celebrates Your Unique Challenger Spirit</p>
   </div>

   <div>
     <img className="lg:h-[260px] h-[230px] mx-auto" src="https://alt-digital-cms.s3.ap-south-1.amazonaws.com/Open_Roles_e8e58a1cd1.svg" alt="Two people hold a 'Join Us!' sign next to a document labeled 'Candidate' with profile pictures, a red chair nearby, and a dark background." />
   </div>
 </div>
    <div className="w-full flex flex-col gap-8 justify-center items-center font-raleway dark:text-white dark:bg-[#0d1015]">
      {/* <div className="w-full h-[240px] md:h-[360px] py-10 bg-[#F3F9FF] flex flex-col gap-4 items-center justify-center text-center">
        <p className="custom-gradient-text py-2">
       Careers That Evolve
        With You
        </p>
        <p className="lg:text-base font-medium text-sm">
          Join a Culture That Celebrates Your Unique
          <br />
          Challenger Spirit
        </p> */}
        {/* <button className="w-[200px] h-[50px] rounded-3xl text-white text-sm font-medium bg-[#DD5143]">
          See All Open Roles
        </button> */}
      {/* </div> */}

     

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
      <div className="w-[85%]">
        <p className="font-semibold capitalize">Filter By</p>
      </div>
      <div className="w-[85%] flex justify-between max-md:justify-center gap-10 flex-wrap items-center relative">
        {/* <Dropdown
          data={depart_list}
          ddName="Department"
          selection={selections.Department}
          onSelectionChange={handleSelectionChange}
        /> */}
        <div className="flex sm:flex-row flex-col gap-10 items-center">
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
        {
         (Object.values(selections).some(arr => arr.length > 0)) && 
          <button onClick={ClearFilter} className="font-semibold border lg:ml-auto  border-gray-300 rounded-md text-secondary  text-sm py-2 px-4">Clear Filters</button>
        }
        
      </div>
      <div className="w-full p-4 flex flex-col gap-5 justify-center items-center">
        {loading ? <LoaderSpinner /> : <JobCards jobData={jobs} jobOpeningsData={initialJobs}/>}
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

    
      {/* <CareerForm/> */}
    </div>
    </>
  );
};

export default OpenRoles;