
// import {
//   VerticalTimeline,
//   VerticalTimelineElement,
// } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Timeline = () => {
  return (
    <div className="w-full p-4 flex justify-center items-center">
      <ol className="relative border-s border-gray-500 dark:border-gray-700 md:w-[60%] md:max-w-[400px]">
        <li className="mb-10 ms-4  flex flex-col gap-4">
          <div className="absolute w-4 h-4 -left-2 bg-[#EF8188] rounded-full mt-2 -start-1.5" />
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {`From Scketch to Altumind`}
          </h3>
          <p className="mb-4 max-w-[400px] font-normal text-gray-600 dark:text-gray-400 text-sm">
            {`Founded in 2016 as 'Scketch,' our initial focus was on Customer Experience (CX) and Product Engineering. Fueled by visionary leadership, a diverse client base, and expanding skill sets, we organically evolved into a multi-faceted organization. The 2020 rebranding to Altumind marked a strategic transformation, reflecting our expanded capabilities and ambitious vision. The need for a brand that embodied our evolution into a digital powerhouse gave birth to Altumind.`}
          </p>
        </li>
        <li className="mb-10 ms-4  flex flex-col gap-4">
          <div className="absolute w-4 h-4 -left-2 bg-[#EF8188] rounded-full mt-2 -start-1.5"></div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {`'Altumind' - The Name`}
          </h3>
          <p className="mb-4 max-w-[400px] font-normal text-gray-600 dark:text-gray-400 text-sm">
            {`'Altumind,' a fusion of 'Altum' (Latin for 'high' or 'deep') and 'Mind,' perfectly embodies our aspirations. We strive to reach new heights in innovation, delve deeper into the complexities of the digital realm, and harness the power of human ingenuity to unlock limitless possibilities.`}
          </p>
        </li>
        <li className="mb-10 ms-4  flex flex-col gap-4">
          <div className="absolute w-4 h-4 -left-2 bg-[#EF8188] rounded-full mt-2 -start-1.5"></div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {`Rising to Challenges`}
          </h3>
          <p className="mb-4 max-w-[400px] font-normal text-gray-600 dark:text-gray-400 text-sm">
            {`Our journey hasn't been without its challenges. We've encountered setbacks, faced market fluctuations, and navigated the complexities of a rapidly evolving industry. But true to our philosophy, we've embraced these challenges as opportunities for growth. Each 'fall' has been met with renewed determination, each 'change' with adaptability, and each obstacle with a collective resolve to 'rise' stronger. Our strong R&D focus ensures we remain at the forefront of innovation, while our team brings a deep understanding of human behavior to every project.`}
          </p>
        </li>
        <li className="mb-10 ms-4  flex flex-col gap-4">
          <div className="absolute w-4 h-4 -left-2 bg-[#EF8188] rounded-full mt-2 -start-1.5"></div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {`The Road Ahead: Charting New Frontiers`}
          </h3>
          <p className="mb-4 max-w-[400px] font-normal text-gray-600 dark:text-gray-400 text-sm">
            {`Our bold journey propels us towards a future brimming with opportunities. At Altumind, we firmly believe that the true power of technology lies in its seamless integration with human understanding. It's this synergy that will ignite groundbreaking innovation, craft meaningful experiences, and empower us to make a lasting, positive impact on the world.`}
          </p>
        </li>
      </ol>
    </div>
  );
}

export default Timeline