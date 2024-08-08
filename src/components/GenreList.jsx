import React, { useState } from "react";
import ProgressBar from "./ProgressBar";
import { useNavigate } from "react-router-dom";

const genres = [
  { name: "All", emoji: "" },
  { name: "Action", emoji: "💥" },
  { name: "Adventure", emoji: "🪂" },
  { name: "Animation", emoji: "🖍" },
  { name: "Biography", emoji: "📚" },
  { name: "Bollywood", emoji: "🇮🇳" },
  { name: "Comedy", emoji: "😂" },
  { name: "Crime", emoji: "🕵️‍" },
  { name: "Disaster", emoji: "☄️" },
  { name: "Documentary", emoji: "🎥" },
  { name: "Drama", emoji: "🎭" },
  { name: "Family", emoji: "👪" },
  { name: "Fantasy", emoji: "🦄" },
  { name: "Film-Noir", emoji: "🎞" },
  { name: "History", emoji: "📜" },
  { name: "Horror", emoji: "🧟" },
  { name: "Game-Show", emoji: "🎲" },
  { name: "Independent", emoji: "📢" },
  { name: "International", emoji: "🌎" },
  { name: "Music", emoji: "🎧" },
  { name: "Musical", emoji: "🎶" },
  { name: "Mystery", emoji: "🔎" },
  { name: "News", emoji: "📰" },
  { name: "Reality-TV", emoji: "📺" },
  { name: "Romance", emoji: "❤️" },
  { name: "Rom-Com", emoji: "💏" },
  { name: "Sci-Fi", emoji: "👽" },
  { name: "Talk-Show", emoji: "🗣" },
  { name: "Short", emoji: "⏳" },
  { name: "Sport", emoji: "🏈" },
  { name: "Thriller", emoji: "😱" },
  { name: "War", emoji: "⚔️" },
  { name: "Western", emoji: "🤠" },
];

const GenreList = () => {
  const [selectedGenres, setSelectedGenres] = useState({});
  const navigate = useNavigate();

  // function to handle the checkbox
  const handleCheckboxChange = (genreName) => {
    setSelectedGenres((prevState) => {
      const newState = {
        ...prevState,
        [genreName]: !prevState[genreName],
      };
      console.log(
        `${genreName} is ${newState[genreName] ? "checked" : "unchecked"}`
      );
      return newState;
    });
  };

  // check if at least three genres are selected
  const selectedCount = Object.values(selectedGenres).filter(Boolean).length;
  const isNextEnabled = selectedCount >= 3;

  const handleNextClick = () => {
    console.log("Next button is clicked");
    if (isNextEnabled) {
      navigate("/TopMovies");
    }
  };

  return (
    <div className="">
      <ProgressBar currentStep={3} />
      {/* displaying title */}
      <h2 className="text-2xl text-center my-8">
        Select your top 5 genres for movies and TV
      </h2>
      <div className="grid gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 text-black">
        {genres.map((genre, index) => (
          <div
            key={index}
            className={`flex p-2 rounded-lg shadow-lg border-2 border-gray-400 justify-between ${
              selectedGenres[genre.name]
                ? "bg-yellow-500 border-none"
                : "bg-gray-100"
            }`}
          >
            {/* displaying name of genre and emoji */}
            <div className="flex">
              <span className="text-2xl mr-1">{genre.emoji}</span>
              <span className="text-lg font-semibold">{genre.name}</span>
            </div>
            {/* displaying checkbox */}
            <input
              className="checkBox"
              type="checkbox"
              checked={!!selectedGenres[genre.name]}
              onChange={() => {
                if (genre.name === "All") {
                  const allSelected = selectedGenres[genre.name];
                  setSelectedGenres(
                    genres.reduce((acc, g) => {
                      acc[g.name] = !allSelected;
                      return acc;
                    }, {})
                  );
                } else {
                  handleCheckboxChange(genre.name);
                }
              }}
            />
          </div>
        ))}
      </div>
      {/* buttons */}
      <div className="flex justify-center space-between mt-8 ">
        <button className="text-white py-2 pr-20 pl-20 rounded border-2 border-slate-100">
          Back
        </button>
        <span className="mx-2"></span>
        <button
          className={`text-white py-2 pr-20 pl-20 rounded ${
            isNextEnabled
              ? "bg-yellow-400 cursor-pointer"
              : "bg-gray-400 cursor-not-allowed"
          } `}
          disabled={!isNextEnabled}
          onClick={handleNextClick}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default GenreList;
