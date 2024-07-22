import { gradientStyle } from "../../ReactFunctions";

const ValueThatMatters = () => {
  const contentArray = [
    "Comprehensive Digital Healthcare Solutions",
    "HIPAA-Compliant Health Ecosystem",
    "Advanced Fraud Prevention Systems",
    "Scalable Cloud-Based Health Infrastructure",
    "AI-Driven Integration and Interoperability",
    "Patient-Centric Digital Solutions",
  ];
  return (
    <div className="w-full flex flex-col">
      <div className="w-full flex justify-center items-center p-3">
        <p className="text-5xl font-extrabold" style={gradientStyle}>
          Value That Matters
        </p>
      </div>
      <div className="w-full flex items-center p-3 gap-2 md:h-[450px]">
        <div className="w-[30%]">
          <img
            src="https://img.freepik.com/free-vector/isometric-hospital-infographic_52683-773.jpg?t=st=1719983959~exp=1719987559~hmac=7d1d5c81251bcf76b7197507cb043ff9c5d01bd4623ad8f9ef7ca5be24a64bf3&w=740"
            alt="healthcare-img"
            height="100%"
            width="100%"
            className="w-full object-cover h-[400px]"
          />
        </div>
        <div className="w-[70%] h-full py-3 px-2 gap-8 flex flex-col">
          <div className="flex flex-col justify-start items-start">
            <p className="dark:text-white text-base">
              Experience the future of healthcare with our comprehensive digital
              transformation solutions. Utilizing Generative AI, cloud
              technologies, and Advanced app development, we provide intelligent
              automation and tailored patient experiences. Boost productivity
              with intelligent workflow optimization and integrated CRM systems,
              all designed with a user-centric focus. As Digital Health
              Innovators, we create a future-ready healthcare ecosystem that
              delivers exceptional outcomes.
            </p>
          </div>
          <div className="w-full flex flex-wrap gap-8 justify-between">
            {contentArray?.map((content, index) => {
              return (
                <div
                  className="flex gap-2 justify-start items-center w-[45%] dark:text-white"
                  key={content + index}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                    />
                  </svg>

                  <p className="truncate font-medium">{content}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValueThatMatters;
