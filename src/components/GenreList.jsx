import React, { useState } from "react";
import Title from "./Title";
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

  const handleCheckboxChange = (genreName) => {
    setSelectedGenres((prevState) => {
      const newState = { ...prevState };
      // If "All" is clicked, toggle all genres
      if (genreName === "All") {
        const areAllSelected = genres.every((g) => newState[g.name]);
        genres.forEach((g) => {
          newState[g.name] = !areAllSelected;
        });
      } else {
        newState[genreName] = !newState[genreName];
      }
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
    <div className="h-screen flex flex-col justify-between pl-6 pr-6">
      {/* ProgessBar */}
      <div className="ProgressBar">
        <ProgressBar currentStep={3} />
      </div>

      <div className="Headers">
        {/* Displaying title */}
        <Title title={" Select your top 5 genres for movies and TV"} />
      </div>

      <div className="Checkbox">
        {/* Mapping the generes here */}
        <div className="grid gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 text-black">
          {genres.map((genre, index) => (
            <div
              key={index}
              className={`flex p-2 rounded-lg shadow-lg border-2 border-gray-400 justify-between ${
                selectedGenres[genre.name]
                  ? "bg-yellow-500 border-none"
                  : "bg-gray-100"
              } ${
                index === genres.length - 3
                  ? "lg:col-start-2"
                  : index === genres.length - 2
                  ? "lg:col-start-3"
                  : index === genres.length - 1
                  ? "lg:col-start-4"
                  : ""
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
                onChange={() => handleCheckboxChange(genre.name)}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="Buttons">
        {/* buttons */}
        <div className="flex justify-center space-between mt-8">
          {/* Back Button */}
          <button className="text-white py-2 px-36 rounded border-2 border-slate-100">
            Back
          </button>
          <span className="mx-2" />
          {/* Next Button */}
          <button
            className={` py-2 px-36 rounded ${
              isNextEnabled
                ? "bg-yellow-400 cursor-pointer font-bold text-black"
                : "bg-gray-400 cursor-not-allowed text-white"
            }`}
            disabled={!isNextEnabled}
            onClick={handleNextClick}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default GenreList;
