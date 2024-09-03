import axios from 'axios';
import { useEffect, useState } from 'react'
import LoaderSpinner from '../common-components/LoaderSpinner';
import ScrollingCards from '../common-components/ScrollingCards';
import { gradientStyle } from '../../ReactFunctions';
import Marquee from 'react-fast-marquee';

const CommunityCards = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = () => {
      const url = `${import.meta.env.VITE_APP_API_URL}api/community-mgmnt-commitment-contents`;
      axios
        .get(url)
        .then((res) => {
          setData(res?.data?.data);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Failed to fetch data:", err);
          setError("Failed to fetch data. Please try again later.");
          setLoading(false);
        });
    };

    useEffect(() => {
      fetchData();
    }, []);

    if (loading) {
      return <LoaderSpinner />;
    }

    if (error) {
      return (
        <div className="dark:text-white font-raleway h-[300px] flex justify-center items-center">
          {error}
        </div>
      );
    }


    return (
      <div className="w-full flex flex-col gap-3 items-center justify-center font-raleway">
        <p className="font-medium">Key Areas of Responsible Practice</p>
        <p className="text-4xl font-extrabold" style={gradientStyle}>
          Our Commitment
        </p>
        <p className="md:max-w-[800px] p-2 text-center text-sm mt-2">{`At Altumind, we're not just about creating "wow" moments – we're committed to unlocking technology's potential for good. Our mission? To shape a world where innovation serves both humanity and our planet. We don't just talk about responsibility; we live it. Through concrete actions, we're ensuring our impact ripples far and wide, touching lives and fostering positive change in everything we do. `}</p>
        <div className="overflow-hidden w-full relative min-h-fit p-3 mt-2">
          <Marquee>
            {data?.map((content) => (
              <div
                key={content?.id}
                className={`w-[210px] md:w-[230px] rounded-md h-[320px] p-3 mx-3 font-raleway hover:scale-105 duration-150 transition-all flex flex-col justify-start items-center gap-6 cursor-pointer`}
                style={{
                  backgroundColor: content?.attributes?.hexvalue,
                }}
              >
                <div className="w-full mt-4">
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
            ))}
          </Marquee>
        </div>
      </div>
    );
}

export default CommunityCards