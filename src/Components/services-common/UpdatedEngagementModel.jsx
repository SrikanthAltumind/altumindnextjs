import React from "react";

const points = [
  {
    title: "Fixed Bid",
    description:
      "Predictable costs for well-defined projects. Clear scope, fixed budget, and peace of mind.",
    icon: "💰", // Replace with an actual icon or image
  },
  {
    title: "Time and Material",
    description:
      "Flexible pricing for evolving needs. Adapt as your project grows and changes.",
    icon: "⏰",
  },
  {
    title: "Dedicated Team",
    description:
      "On-demand trained team at your fingertips. Efficient, scalable support for ongoing development.",
    icon: "👥",
  },
  {
    title: "Build, Operate & Transfer",
    description:
      "End-to-end solution management. We build it, run it, then hand it over seamlessly.",
    icon: "⚙️",
  },
  {
    title: "Hybrid",
    description:
      "Customized engagement tailored just for you. Mix and match models to fit your unique requirements.",
    icon: "🔧",
  },
];

const UpdatedEngagementModel = () => {
  const circleRadius = 600; // Adjust this to change the overall size of the arc

  return (
    <div className="relative w-full h-[500px] flex justify-center items-center">
      <div className="relative">
        {/* Path - arc visualization */}
        <svg
          className="absolute top-0 left-0"
          viewBox="0 0 1000 500"
          width="1000"
          height="500"
        >
          <path
            d="M 150 350 Q 500 100 850 350"
            stroke="#A3C4F1"
            strokeWidth="2"
            fill="transparent"
          />
        </svg>

        {/* Position each point along the curve */}
        {points.map((point, index) => {
          // Distribute items along an arc
          const angle = (index / (points.length - 1)) * Math.PI; // Calculate angle for the arc
          const x = circleRadius * Math.cos(angle); // X-position for the point
          const y = circleRadius * Math.sin(angle); // Y-position for the point

          return (
            <div
              key={index}
              className="absolute flex flex-col items-center"
              style={{
                transform: `translate(${x}px, ${y}px)`,
                top: "50%",
                left: "50%",
              }}
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-2">
                <span className="text-2xl">{point.icon}</span>
              </div>

              {/* Title */}
              <p className="text-center font-bold mb-1">{point.title}</p>

              {/* Description */}
              <p className="text-center text-sm">{point.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UpdatedEngagementModel;
