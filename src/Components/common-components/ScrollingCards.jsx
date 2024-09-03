import Marquee from "react-fast-marquee";



const Card = ({ content }) => {
  
  return (
    <div
      key={content?.id}
      className={`w-[220px] rounded-md h-[320px] p-3 mx-3 font-raleway hover:scale-105 duration-150 transition-all flex flex-col justify-between items-center gap-6 cursor-pointer`}
      style={{
        backgroundColor: content?.attributes?.hexvalue,
      }}
    >
      <div className="w-full">
        <p
          className={`font-medium text-left`}
          style={{ color: content?.attributes?.textClr }}
        >
          {content?.attributes?.title}
        </p>
      </div>

      {content?.attributes?.description && (
        <p
          className={`text-sm`}
          style={{ color: content?.attributes?.textClr }}
        >
          {content?.attributes?.description}
        </p>
      )}

      {content?.attributes?.image?.data?.attributes?.url && (
        <img
          src={content?.attributes?.image?.data?.attributes?.url}
          alt={content?.attributes?.title}
          className="w-[170px] h-[160px] object-contain"
          height="100%"
          width="100%"
        />
      )}
    </div>
  );
};

const ScrollingCards = ({scrollData}) => {
  return (
    <div className="py-2">
      <Marquee className="py-4">
        {scrollData?.concat(scrollData)?.map((src, index) => (
          <Card content={src} key={index + "test"} />
        ))}
      </Marquee>
    </div>
  );
};

export default ScrollingCards