import React from 'react'
import Situation from '../Components/success-story-components/Situation'
import Implementation from '../Components/success-story-components/Implementation';
import Success from '../Components/success-story-components/Success';

const SuccessStory = () => {
  return (
    <div className="w-full flex flex-col justify-start items-center gap-16 md:gap-20">
      <section>Banner section</section>
      <section>
        <Situation />
      </section>
      <section>
        <Implementation />
      </section>
      <section>
        <Success />
      </section>
    </div>
  );
}

export default SuccessStory