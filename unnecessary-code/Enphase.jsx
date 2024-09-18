import React from "react";
import SuccessStoryBanner from "../src/Components/success-story-components/SuccessStoryBanner";
import Situation from "../src/Components/success-story-components/Situation";
import Challenge from "../src/Components/success-story-components/Challenge";
import Implementation from "../src/Components/success-story-components/Implementation";
import InnovativeHeading from "../src/Components/success-story-components/InnovativeHeading";
import WhyAltumind from "../src/Components/services-common/WhyAltumind";
import Approach from "../src/Components/success-story-components/Approach";
import Results from "../src/Components/success-story-components/Results";
import Success from "../src/Components/success-story-components/Success";
import GetStarted from "../src/Components/services-common/GetStarted";
import Transformative from "../src/Components/success-story-components/Transformative";

const Enphase = () => {
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
      <section className="w-full  flex justify-center flex-col items-center gap-12 p-4 py-8 bg-[#EAF1FF]">
        <InnovativeHeading />
        <WhyAltumind />
      </section>
      <section className="w-full max-w-[1300px] flex justify-center">
        <Approach />
      </section>
      <section className="w-full max-w-[1300px] flex justify-center">
        <Results />
      </section>
      <section className="w-full max-w-[1300px] flex justify-center">
        <Success />
      </section>
      <section className="w-full max-w-[1300px] flex justify-center">
        <Transformative />
      </section>
      <section className="w-full flex justify-center">
        <GetStarted />
      </section>
    </div>
  );
};

export default Enphase;
