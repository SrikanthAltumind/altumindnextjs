import React, { useState } from 'react'

const Menu = ({sections}) => {


    const [selectedTab, setSelectedTab] = useState(sections[0]?.id)
  // Function to handle scrolling to a section
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="font-raleway w-full sticky top-[75px] z-10">
      <div
        id="sectionTabsMenu"
        className="bg-[#EAF1FF] overflow-x-auto no-scrollbar"
      >
        <ul className="flex min-w-max gap-2 justify-between px-2 md:px-10 ">
          {sections?.map((section) => (
            <li key={section.tabId} id={section.tabId}>
              <button
                className={`pb-3 pt-4 sm:pt-6 sm:pb-4 px-2 sm:px-3 border-b-[3px] sm:border-b-4 ${
                  section?.id === selectedTab
                    ? "border-secondary font-bold "
                    : "border-transparent font-medium"
                } text-black text-xs sm:text-sm lg:text-base`}
                      onClick={() => {
                          setSelectedTab(section?.id)
                          scrollToSection(section.id)
                      }}
              >
                {section.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Menu;