import axios from "axios";
import { useEffect, useState } from "react";
import LoaderSpinner from "../common-components/LoaderSpinner";

const LeaderBoard = () => {
  const [leaders, setLeaders] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [message, setMessage] = useState();

  const fetchLeadersData = () => {
    axios
      .get(
        `${
          import.meta.env.VITE_APP_API_URL
        }api/leadership-meet-our-leader-boards?populate=*`
      )
      .then((response) => {
        setLeaders(response?.data?.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error while fetching Data", error);
        setError(error.message);
        setLoading(false);
      });
  };

  const fetchMessageData = () => {
    axios
      .get(`${import.meta.env.VITE_APP_API_URL}api/leadership-message`)
      .then((response) => {
        setMessage(response?.data?.data?.attributes);
      })
      .catch((error) => {
        console.error("Error while fetching Data", error);
      });
  };

  useEffect(() => {
    fetchLeadersData();
    fetchMessageData();
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
    <div className="w-[90%] max-w-[950px] mx-auto dark:text-white space-y-10">
      {/* with old code */}
      <div className="font-raleway text-center dark:text-white mb-32">
        <p className="font-semibold">Meet Our Leader Board</p>
        <p className="w-fit mx-auto font-extrabold text-2xl lg:text-3xl mb-3 bg-clip-text text-transparent bg-gradient-to-r from-gradientBlue via-gradientGreen to-gradientBlue">
          Members & their breif history
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-x-28 gap-y-36 py-10 z-10 justify-center items-center text-center">
        {leaders?.map((leader) => (
          <div key={leader?.id} className="h-[410px] flex">
            <div className="relative dark:bg-DarkBackground  rounded-xl w-[320px] pt-14 py-7 px-6 shadow-custom-shadow space-y-7">
              <img
                className="rounded-2xl absolute mx-auto left-[80px] -top-24"
                src={leader?.attributes?.image?.data?.attributes?.url}
                alt={leader?.attributes?.name}
                height={160}
                width={160}
              />
              <div className="font-montserrat space-y-1">
                <p className="font-bold ">{leader?.attributes?.name}</p>
                <p className="text-sm font-medium">
                  {leader?.attributes?.designation}
                </p>
              </div>
              <p className="text-[13px] font-medium font-montserrat leading-relaxed">
                {leader?.attributes?.intro}
              </p>
            </div>
          </div>
        ))}
      </div>

      {message && (
        <div className="relative font-raleway pl-6 space-y-2">
          <span className="text-secondary text-6xl absolute left-0 ">
            &ldquo;
          </span>
          <p className="text-lg font-semibold dark:font-medium font-raleway">
            {" "}
            {message?.title}
          </p>
          <p className="font-montserrat text-sm lg:text-[15px] leading-6 font-medium dark:font-light">
            {message?.description}
          </p>
          <p className="dark:font-light">- {message?.name}</p>
        </div>
      )}
    </div>
  );
};

export default LeaderBoard;
