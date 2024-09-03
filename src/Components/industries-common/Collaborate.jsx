import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const bfsi = {
  first_line: "Collaborating for",
  second_line: "Digital Finance Success",
  third_line: "Next-Gen Fintech Solutions",
};
const healthcare = {
  first_line: "Collaborating for",
  second_line: "Leading HealthTech Innovation Together",
  third_line: "Advanced Digital Healthcare Solutions",
};
const edtech = {
  first_line: "Collaborating for",
  second_line: "Transforming EdTech with Strategic Partnership",
  third_line: "Future-Ready Edtech Solutions",
};
const internet = {
  first_line: "Collaborating for",
  second_line: "Accelerate SaaS Success with Powerful Partnerships",
  third_line: "Transformative SaaS Solutions",
};
const digitalEcommerce = {
  first_line: "Dominate the Digital",
  second_line: "Commerce Landscape",
  third_line: "Next Gen Digital Commerce Solutions",
};
const greenSustainability = {
  first_line: "Tech Revolutionaries",
  second_line: "for a Greener Future",
  third_line: "Advanced Green Tech Solutions",
};

const Collaborate = () => {


  const [data, setData] = useState([]);

  const location = useLocation();

  const fetchData = () => {
    if (location.pathname === "/industries/bfsi-fintech") setData(bfsi);
    else if (location.pathname === "/industries/healthcare")
      setData(healthcare);
    else if (location.pathname === "/industries/edtech") setData(edtech);
    else if (location.pathname === "/industries/internet-saas")
      setData(internet);
    else if (location.pathname === "/industries/digital-commerce")
      setData(digitalEcommerce);
    else if (location.pathname === "/industries/green-sustainability")
      setData(greenSustainability);
  };

  useEffect(() => {
    fetchData();
  }, [location.pathname]);

    return (
      <div className="bg-[#EAF1FF]  min-h-[280px] flex flex-col justify-center  relative text-black">
        <div className="ml-[10%] md:ml-[20%] space-y-7 font-raleway">
          <h1 className=" font-bold text-2xl  lg:text-3xl leading-8">
            {data?.first_line}
            <br />
            {data?.second_line}
          </h1>
          <p className="font-semibold">{data?.third_line}</p>
          <a
            href="#"
            className="group w-fit underline decoration-1 underline-offset-2 font-raleway  text-secondary font-semibold flex justify-center items-center gap-1 mt-10"
          >
            Let&apos;s Connect
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
          </a>
        </div>
      </div>
    );
}

export default Collaborate