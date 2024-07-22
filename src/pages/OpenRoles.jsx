import Search from "../Components/open-roles-components/Search"

import Dropdown from "../Components/common-components/Dropdown";
import { gradientStyle } from "../ReactFunctions";

const OpenRoles = () => {
  const depart_list = [
    "Marketing",
    "Project Management",
    "Design",
    "Sales & Operations",
    "Developement",
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

  const jobs = [
    {
      id: "2055",
      title: "Marketing Lead",
      exp: "2 Years Experience",
      location: "Bangalore",
    },
    {
      id: "2655",
      title: "Sales Director",
      exp: "5+ Years Experience",
      location: "USA",
    },
    {
      id: "2925",
      title: "Sr. UI UX Designer",
      exp: "4 Years Experience",
      location: "Bangalore",
    },
    {
      id: "2051",
      title: "Tech Lead",
      exp: "5 Years Experience",
      location: "Bangalore",
    },
    {
      id: "2351",
      title: "Accounts Executive",
      exp: "2 Years Experience",
      location: "USA",
    },
    {
      id: "2257",
      title: "Social Media Intern",
      exp: "Fresher",
      location: "Bangalore",
    },
  ];

  return (
    <div className="w-full flex flex-col gap-5 justify-center items-center p-6 font-raleway">
      <div className="w-full justify-center items-center p-4">
        <div className="flex gap-4 rounded-full justify-start items-center border border-gray-300 px-4 py-2">
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
            placeholder="Search for jobs.."
            className="p-1 w-full outline-none"
          />
        </div>
      </div>
      <div className="flex w-full justify-start items-center">
        <p className="font-semibold capitalize">Filter By</p>
      </div>
      <div className="w-full flex justify-evenly gap-5 flex-wrap items-start relative">
        <Dropdown data={depart_list} ddName={"Department"} />
        <Dropdown data={job_type} ddName={"Job Type"} />
        <Dropdown data={location} ddName={"Location"} />
        <Dropdown data={experience} ddName={"Experience"} />
      </div>
      <div className="w-full p-4 flex flex-col gap-5 justify-center items-center">
        <div className="w-full flex-wrap flex justify-evenly gap-8 items-center font-mont">
          {jobs?.map((job) => (
            <div
              key={job?.id}
              className="w-[35%] min-w-[400px] flex justify-between items-center border-b-2 py-5 border-[#CCCCCC] cursor-pointer group"
            >
              <div className="flex flex-col gap-3 items-start justify-start">
                <div>
                  <p className="font-medium">{job?.title}</p>
                </div>
                <div className="flex items-center justify-start gap-3">
                  <p className="text-sm">{job?.exp}</p>
                  <div className="w-2 h-2 rounded-full bg-gray-400" />
                  <p className="text-sm">{job?.location}</p>
                </div>
              </div>
              <div className="flex justify-center items-center">
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
              </div>
            </div>
          ))}
        </div>
        <div className="w-full flex items-center justify-center p-4">
          <button className="outline-none">
            <p className="underline text-center text-sm font-medium text-[#E42D38] cursor-pointer">
              View More
            </p>
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-start items-center gap-8">
        <p className="text-center text-4xl font-extrabold">
          <span>{"Be Ready for What's Next: "}</span> <br />
          <span style={gradientStyle}>Join Our Talent Pool</span>
        </p>
        <div className="flex flex-col gap-3 w-full justify-center items-center">
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
        <div className="underline text-center text-sm font-medium text-[#E42D38] cursor-pointer group flex gap-2">
          <span>Connect with Us </span>
          <span className="flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-3 group-hover:animate-ping transition-all duration-200 ease-in-out"
            >
              <path
                fillRule="evenodd"
                d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};

export default OpenRoles;