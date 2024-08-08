import React from "react";
import ProgressBar from "./ProgressBar";
import SearchBar from "./SearchBar";

const TopMovies = () => {
  return (
    <div className="">
      <div className="ProgressBar">
        <ProgressBar currentStep={4} />
      </div>
      <div className="heading text-center">
        <h2 className="text-2xl mt-5 mb-3">Select your top 5 movies</h2>
        <p className="text-balance text-gray-300 ">
          Selecting your top 5 movies will enable us to suggest like-minded
          users and <br /> nearby communities for exciting watch parties and
          movie premiere gatherings.
        </p>
      </div>

      <div className="SearchBar">
        <SearchBar />
      </div>
    </div>
  );
};

export default TopMovies;
