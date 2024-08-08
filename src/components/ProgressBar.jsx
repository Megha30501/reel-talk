import React from "react";

const ProgressBar = ({ currentStep }) => {
  const totalSteps = 5;

  return (
    <div className="flex items-center justify-center mb-8">
      <div className="flex items-center">
        {Array.from({ length: totalSteps }, (_, index) => (
          <div key={index} className="flex items-center">
            {/* Dots to represent steps */}
            <div
              className={`w-6 h-6 rounded-full ${
                index < currentStep ? "bg-yellow-500" : "bg-gray-400"
              } flex items-center justify-center`}
            >
              {/* Represent active step */}
              {index === currentStep - 1 && (
                <div className="w-4 h-4 bg-yellow-200 rounded-full"></div>
              )}
            </div>
            {/* Lines connected to the dots */}
            {index < totalSteps - 1 && (
              <div
                className={`w-16 h-1 ${
                  index < currentStep - 1 ? "bg-yellow-500" : "bg-gray-400"
                }`}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;
