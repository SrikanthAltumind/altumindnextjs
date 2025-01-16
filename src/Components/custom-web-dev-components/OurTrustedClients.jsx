
// logos from assets folder
import companyA from "../../assets/company-logos/MiSupplies.svg";
import companyB from "../../assets/company-logos/Secpod.svg";
import companyC from "../../assets/company-logos/UnitedFinance.svg";
// import companyD from "../../assets/company-logos/Cognismiles.svg";
import companyE from "../../assets/company-logos/Satin.svg";
import { useState } from "react";

const companies = [
  {
    id: 2,
    name: "Secpod",
    logo: companyB,
    info: "Secpod's website faced challenges with excessive clutter in the header, making it difficult for users to navigate.  Additionally, inconsistent button designs and a lack of prominent testimonials impacted the overall user experience and trust.",
    count1:'35%',
    count2:'20%',
    count1Descripion:'Boost in User engagement with Streamlined Design',
    count2Descripion:'Increase in Conversion Rates with clearer CTAs ',
  },
  {
    id: 3,
    name: "United Finance",
    logo: companyC,
    info: "United Finance's Partner Portal faced challenges with a complex, unintuitive UI that hindered the efficiency of the sales team and partners. Additionally, a slow, manual contract process created bottlenecks, impacting overall service delivery.",
    count1:'40%',
    count2:'90%',
    count1Descripion:'Improvement in task efficiency with redesigned portal',
    count2Descripion:'Faster service delivery time with Automated contract process',
  },

  {
    id: 5,
    name: "Satin",
    logo: companyE,
    info: "Satin Creditcare Network required a custom-designed website to enhance user engagement and performance while ensuring reliability and brand alignment.",
    count1:'15%',
    count2:'99%',
    count1Descripion:'Improvement in task efficiency with redesigned portal ',
    count2Descripion:'Faster service delivery time with Automated contract process',
  },
  {
    id: 1,
    name: "Mi Supplies",
    logo: companyA,
    info: "MiSupplies needed an advanced e-commerce solution to streamline complex supply chain operations, ensure regulatory compliance, and deliver personalized CX. They sought a scalable platform with state-of-the-art technology to support their expanding international operations.",
    count1:'25%',
    count2:'30%',
    count1Descripion:'Revenue growth through AI-driven personalization.',
    count2Descripion:'Boost in customer Retention',
  },


  // {
  //   id: 4,
  //   name: "Cognismiles",
  //   logo: companyD,
  //   info: "",
  //   count1:'',
  //   count2:'',
  //   count1Descripion:'',
  //   count2Descripion:'',
  // },
];

const OurTrustedClients = () => {
  const [selectedCompany, setSelectedCompany] = useState(companies[0]);

  return (
    <div className="p-6">
      <div className="space-y-3 mb-8">
        <p className='text-[15px] font-medium text-gray-600 text-center'>Our Trusted Clients</p>
        <p className="text-center md:max-w-[50%] mx-auto">We partner with brands of all sizes and industries to deliver exceptional custom web development solutions. </p>
        </div>
      <div className="relative flex justify-center items-center">
        {/* Line */}
        <div className="absolute bottom-0 h-2 lg:w-[60%] w-full mx-auto bg-[#D9D9D9] rounded-full"></div>
        {/* Logo Containers */}
        <div className="flex  gap-10 relative z-1">
          {companies.map((company) => (
            <div
              key={company.id}
              onClick={() => setSelectedCompany(company)}
              className="cursor-pointer sm:w-[80%] flex flex-col items-center"
            >
              {/* Logo */}
              <img
            src={company.logo}
            alt={company.name}
            onClick={() => setSelectedCompany(company)}
            className={`cursor-pointer w-[170px] h-[80px] object-fill grayscale`}
          />
              {/* Active Line */}
              <div
                className={`mt-5 h-2 w-full rounded-full ${
                  selectedCompany.id === company.id
                    ? "bg-[#1D2737]"
                    : "bg-transparent"
                }`}
              ></div>
            </div>
          ))}
        </div>
      </div>

      {/* Selected Company Info Card */}
      <div className="mt-6 px-8 flex sm:flex-row flex-col max-w-2xl gap-5 py-10 items-center mx-auto bg-white rounded-lg shadow-custom-shadow border">
        <div className="basis-[50%] space-y-2">
        <p className="font-semibold">{selectedCompany?.name}</p>
        <p className="text-sm">{selectedCompany?.info}</p>
        </div>
        <div className="basis-[50%] space-y-3">
            <p className="text-center font-semibold">Results</p>
            <div className="flex gap-3">
                <div className="text-center space-y-2">
                    <p className="font-bold text-xl">{selectedCompany?.count1}</p>
                    <p className="text-xs">{selectedCompany?.count1Descripion}</p>
                </div>
                <div className="text-center space-y-2">
                    <p className="font-bold text-xl">{selectedCompany?.count2}</p>
                    <p className="text-xs">{selectedCompany?.count2Descripion}</p>
                </div>
            </div>
        </div>
      </div>
    </div>

  );
}

export default OurTrustedClients;
