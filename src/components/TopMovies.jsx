import React, { useState } from "react";
import ProgressBar from "./ProgressBar";
import Title from "./Title";
import SearchBar from "./SearchBar";
import TopFiveSelection from "./TopFiveSelection";
import shawshank from "../assets/images/shawshank.png";
import inception from "../assets/images/inception.png";
import intouchables from "../assets/images/intouchables.png";
import walle from "../assets/images/walle.png";
import flipped from "../assets/images/flipped.png";
import darkknight from "../assets/images/darkknight.png";

const moviesData = [
  { name: "The Shawshank Redemption (1994)", image: shawshank },
  { name: "Inception (2010)", image: inception },
  { name: "Intouchables (2011)", image: intouchables },
  { name: "WALL·E (2008)", image: walle },
  { name: "Flipped (2010)", image: flipped },
  { name: "The Dark Knight (2008)", image: darkknight },
];

const TopMovies = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMovies, setSelectedMovies] = useState([]);

  // Filter movies based on the search query
  const filteredMovies = moviesData.filter((movie) =>
    movie.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle movie selection/deselection
  const handleMovieSelect = (selectedMovie) => {
    setSelectedMovies((prevSelectedMovies) => {
      const isSelected = prevSelectedMovies.some(
        (movie) => movie.name === selectedMovie.name
      );

      if (isSelected) {
        // Deselect movie if already selected
        return prevSelectedMovies.filter(
          (movie) => movie.name !== selectedMovie.name
        );
      }

      if (prevSelectedMovies.length < 5) {
        // Select movie if less than 5 movies are selected
        return [...prevSelectedMovies, selectedMovie];
      }
      return prevSelectedMovies;
    });
  };

  return (
    <div className="h-screen text-white">
      {/* Progress Bar */}
      <ProgressBar currentStep={4} />

      {/* Headers */}
      <div className="Headers">
        <Title title="Select your top 5 movies" />
        <p className="text-balance text-gray-300 font-extralight text-center mb-8">
          Selecting your top 5 movies will enable us to suggest like-minded
          users and <br />
          nearby communities for exciting watch parties and movie premiere
          gatherings.
        </p>
      </div>

      {/* Search Bar */}
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      {/* Movies List */}
      <div className="mb-5">
        <div className="container mx-auto">
          <div className="text-xl mb-4 text-start ml-[13.3rem] text-white">
            Movies you might like
          </div>
          <div className="flex justify-center space-x-6 text-white">
            {filteredMovies.map((movie) => {
              const isSelected = selectedMovies.some(
                (selectedMovie) => selectedMovie.name === movie.name
              );

              return (
                <div
                  key={movie.name}
                  className="text-center cursor-pointer relative"
                  onClick={() => handleMovieSelect(movie)}
                >
                  <div
                    className={`relative w-28 h-23 border-2 ${
                      isSelected ? "border-yellow-400" : "border-transparent"
                    }`}
                  >
                    <img
                      src={movie.image}
                      alt={movie.name}
                      className="w-full h-full object-cover "
                    />
                    {isSelected && (
                      <div className="selected-indicator">
                        <div className="circle"></div>
                      </div>
                    )}
                  </div>
                  <div className="w-28 text-[15px] justify-center overflow-hidden font-thin mt-2">
                    {movie.name}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Top 5 Selected Movies */}
      <TopFiveSelection
        selectedMovies={selectedMovies}
        handleMovieSelect={handleMovieSelect}
      />
    </div>
  );
};

export default TopMovies;
