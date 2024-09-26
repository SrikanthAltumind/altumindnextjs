import Situation from "../Components/success-story-components/Situation";
import Implementation from "../Components/success-story-components/Implementation";
import Success from "../Components/success-story-components/Success";
import Results from "../Components/success-story-components/Results";
import Challenge from "../Components/success-story-components/Challenge";
import SuccessStoryBanner from "../Components/success-story-components/SuccessStoryBanner";
import WhyAltumind from "../Components/services-common/WhyAltumind";
import Approach from "../Components/success-story-components/Approach";
import InnovativeHeading from "../Components/success-story-components/InnovativeHeading";
import GetStarted from "../Components/services-common/GetStarted";
import Transformative from "../Components/success-story-components/Transformative";
import NumberResults from "../Components/success-story-components/NumberResults";
import Menu from "../Components/industries-common/Menu";

const SuccessStory = () => {

  let servicesMenu;
  if (window?.location.pathname === "/portfolio/enphase") {
    servicesMenu = [
      { id: "section-1", tabId: "tab1", name: "Situation" },
      { id: "section-2", tabId: "tab2", name: "Challenge" },
      { id: "section-3", tabId: "tab3", name: "Implementation" },
      { id: "section-4", tabId: "tab4", name: "Innovative Features" },
      { id: "section-5", tabId: "tab5", name: "Approach" },
      { id: "section-6", tabId: "tab6", name: "Result" },
      { id: "section-7", tabId: "tab7", name: "Success" },
      { id: "section-8", tabId: "tab8", name: "Partnership" },
    ];
  } else {
    servicesMenu = [
      { id: "section-1", tabId: "tab1", name: "Situation" },
      { id: "section-2", tabId: "tab2", name: "Challenge" },
      { id: "section-3", tabId: "tab3", name: "Implementation" },
      { id: "section-4", tabId: "tab4", name: "Innovative Features" },
      { id: "section-5", tabId: "tab5", name: "Approach" },
      { id: "section-6", tabId: "tab6", name: "Result" },
      { id: "section-7", tabId: "tab7", name: "Success" },
    ];
  }
  
  return (
    <div className="w-full flex flex-col justify-start items-center gap-16 md:gap-20">
      <section className="w-full flex justify-center">
        <SuccessStoryBanner />
      </section>
      <div className="w-full sticky top-[70px] bg-white -mt-20 dark:bg-darkTheme">
        <Menu sections={servicesMenu} />
      </div>
      <section
        id="section-1"
        className="w-full max-w-[1300px] flex justify-center"
      >
        <Situation />
      </section>
      <section
        id="section-2"
        className="w-full max-w-[1300px] flex justify-center"
      >
        <Challenge />
      </section>
      <section
        id="section-3"
        className="w-full max-w-[1300px] flex justify-center"
      >
        <Implementation />
      </section>
      <section
        id="section-4"
        className="w-full  flex justify-center flex-col items-center gap-12 p-4 py-12 bg-[#EAF1FF]"
      >
        <InnovativeHeading />
        <WhyAltumind />
      </section>
      <section
        id="section-5"
        className="w-full max-w-[1300px] flex justify-center"
      >
        <Approach />
      </section>
      <section
        id="section-6"
        className="w-full max-w-[1300px] flex justify-center"
      >
        {window?.location.pathname === "/portfolio/enphase" ||
        window?.location.pathname === "/portfolio/united-finance" ? (
          <NumberResults />
        ) : (
          <Results />
        )}
      </section>
      <section
        id="section-7"
        className="w-full max-w-[1300px] flex justify-center"
      >
        <Success />
      </section>
      {window?.location.pathname === "/portfolio/enphase" && (
        <section
          id="section-8"
          className="w-full max-w-[1300px] flex justify-center"
        >
          <Transformative />
        </section>
      )}
      <section className="w-full flex justify-center">
        <GetStarted />
      </section>
    </div>
  );
};

export default SuccessStory;
