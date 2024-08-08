import React from "react";

const Title = ({ title }) => {
  return (
    <div>
      <h2 className="text-2xl text-center mb-4" style={{ fontSize: "28px" }}>
        {title}
      </h2>
    </div>
  );
};

export default Title;
