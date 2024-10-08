
const JobApplicationForm = ({setShowForm}) => {
  return (
    <div className="w-screen h-screen absolute left-0 top-10 bg-black/50 flex justify-center items-center">
      <div className="w-[95%] max-w-[950px] relative bg-blue-50">
        <button
          onClick={() => setShowForm(false)}
          className="font-raleway font-medium absolute -right-2 -top-3  bg-white rounded-full border border-black"
        >
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18 17.94 6M18 18 6.06 6"
            />
          </svg>
        </button>
        <iframe
          style={{height:"500px", width:"99%", border:"none"}}
          src="https://altumind.zohorecruit.com/forms/c3d3766175e9f426d11928e0e557d1573a8d18a12c1467931f0cafc4e274a036"
        />
      </div>
    </div>
  );
}

export default JobApplicationForm