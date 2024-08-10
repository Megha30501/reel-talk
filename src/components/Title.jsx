import React from "react";

const Title = ({ title }) => {
  return (
    <div>
      <h2 className="text-2xl text-center mb-4 text-white top-48 p-3">
        {title}
      </h2>
    </div>
  );
};

export default Title;
