import React, { useState } from "react";
import ProgressBar from "./ProgressBar";
import SearchBar from "./SearchBar";
import TopFiveSelection from "./TopFiveSelection";
import shawshank from "../assets/images/shawshank.png";
import inception from "../assets/images/inception.png";
import intouchables from "../assets/images/intouchables.png";
import walle from "../assets/images/walle.png";
import flipped from "../assets/images/flipped.png";
import darkknight from "../assets/images/darkknight.png";

const TopMovies = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMovies, setSelectedMovies] = useState([]);

  const movies = [
    { name: "The Shawshank Redemption (1994)", image: shawshank },
    { name: "Inception (2010)", image: inception },
    { name: "Intouchables (2011)", image: intouchables },
    { name: "WALL·E (2008)", image: walle },
    { name: "Flipped (2010)", image: flipped },
    { name: "The Dark Knight (2008)", image: darkknight },
  ];

  // Filter movies based on the search query
  const filteredMovies = movies.filter((movie) =>
    movie.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleMovieSelect = (movieName) => {
    if (selectedMovies.includes(movieName)) {
      // Remove movie from selected list if already selected
      setSelectedMovies(selectedMovies.filter((name) => name !== movieName));
    } else if (selectedMovies.length < 5) {
      // Add movie to selected list if not selected and less than 5 movies are selected
      setSelectedMovies([...selectedMovies, movieName]);
    }
  };

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
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </div>
      {/* Movies */}
      <div className="mb-5">
        <div className="container mx-auto">
          <div className="text-xl mb-4 text-start ml-[13.3rem]">
            Movies you might like
          </div>
          <div className="flex justify-center space-x-6">
            {filteredMovies.map((movie) => (
              <div
                key={movie.name}
                className="text-center cursor-pointer relative"
                onClick={() => handleMovieSelect(movie.name)}
              >
                <div
                  className={`relative w-28 h-23 border-2 ${
                    selectedMovies.includes(movie.name)
                      ? "border-yellow-400"
                      : "border-transparent"
                  }`}
                >
                  <img
                    src={movie.image}
                    alt={movie.name}
                    className="w-full h-full object-cover"
                  />
                  {selectedMovies.includes(movie.name) && (
                    <div className="selected-indicator">
                      <div className="circle"></div>
                    </div>
                  )}
                </div>
                <div className="w-28 text-[15px] justify-center overflow-hidden font-thin mt-2">
                  {movie.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="Top5Selection">
        <TopFiveSelection />
      </div>
    </div>
  );
};

export default TopMovies;
