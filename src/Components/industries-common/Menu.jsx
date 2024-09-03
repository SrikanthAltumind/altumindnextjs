import React, { useState } from 'react'

const Menu = () => {

      const sections = [
        { id: "section-1", tabId: "tab1", name: "Segments" },
        { id: "section-2", tabId: "tab2", name: "Value propostion" },
        { id: "section-3", tabId: "tab3", name: "Offerings" },
        { id: "section-4", tabId: "tab4", name: "Challenges" },
        { id: "section-5", tabId: "tab5", name: "Success" },
        { id: "section-6", tabId: "tab6", name: "Benifits" },
        { id: "section-7", tabId: "tab7", name: "Tools" },
        { id: "section-8", tabId: "tab8", name: "Insights" },
      ];

    const [selectedTab, setSelectedTab] = useState(sections[0]?.id)
  // Function to handle scrolling to a section
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="font-raleway w-full sticky top-0 z-10">
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