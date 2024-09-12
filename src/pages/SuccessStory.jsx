import React from "react";
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

const SuccessStory = () => {
  return (
    <div className="w-full flex flex-col justify-start items-center gap-16 md:gap-20">
      <section className="w-full flex justify-center">
        <SuccessStoryBanner />
      </section>
      <section className="w-full max-w-[1300px] flex justify-center">
        <Situation />
      </section>
      <section className="w-full max-w-[1300px] flex justify-center">
        <Challenge />
      </section>
      <section className="w-full max-w-[1300px] flex justify-center">
        <Implementation />
      </section>
      <section className="w-full  flex justify-center flex-col items-center gap-12 p-4 py-12 bg-[#EAF1FF]">
        <InnovativeHeading />
        <WhyAltumind />
      </section>
      <section className="w-full max-w-[1300px] flex justify-center">
        <Approach />
      </section>
      <section className="w-full max-w-[1300px] flex justify-center">
        {window?.location.pathname === "/portfolio/enphase" ||
        window?.location.pathname === "/portfolio/united-finance" ? (
          <NumberResults />
        ) : (
          <Results />
        )}
      </section>
      <section className="w-full max-w-[1300px] flex justify-center">
        <Success />
      </section>
      {window?.location.pathname === "/portfolio/enphase" && (
        <section className="w-full max-w-[1300px] flex justify-center">
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
