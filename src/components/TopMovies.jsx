import React from "react";
import ProgressBar from "./ProgressBar";
import SearchBar from "./SearchBar";
import shawshank from "../assets/images/shawshank.png";
import inception from "../assets/images/inception.png";
import intouchables from "../assets/images/intouchables.png";
import walle from "../assets/images/walle.png";
import flipped from "../assets/images/flipped.png";
import darkknight from "../assets/images/darkknight.png";

const TopMovies = () => {
  const movies = [
    { name: "The Shawshank Redemption (1994)", image: shawshank },
    { name: "Inception (2010)", image: inception },
    { name: "Intouchables (2011)", image: intouchables },
    { name: "WALL·E (2008)", image: walle },
    { name: "Flipped (2010)", image: flipped },
    { name: "The Dark Knight (2008)", image: darkknight },
  ];
  return (
    <div className="">
      {/* Progress Bar */}
      <div className="ProgressBar">
        <ProgressBar currentStep={4} />
      </div>
      {/* Headers */}
      <div className="heading text-center">
        <h2 className="text-2xl mt-5 mb-3">Select your top 5 movies</h2>
        <p className="text-balance text-gray-300 font-extralight">
          Selecting your top 5 movies will enable us to suggest like-minded
          users and <br /> nearby communities for exciting watch parties and
          movie premiere gatherings.
        </p>
      </div>
      {/* SearchBar */}
      <div className="SearchBar">
        <SearchBar />
      </div>
      {/* Movies */}
      <div className="mb-5">
        <div className="container mx-auto">
          <div className="text-xl mb-4 text-start ml-48 font-extralight">
            Movies you might like
          </div>
          <div className="flex space-x-6 ml-48">
            {movies.map((movie) => (
              <div key={movie.name} className="text-center">
                <img
                  src={movie.image}
                  alt={movie.name}
                  className="w-28 h-23 pb-1 "
                />
                <div className="w-28 text-[15px] justify-center overflow-hidden font-thin">
                  {movie.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopMovies;
