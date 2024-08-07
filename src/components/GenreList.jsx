import React, { useState } from "react";
import ProgressBar from "./ProgressBar";

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
            className={`flex p-4 rounded-lg shadow-lg border-2 border-gray-400 justify-between ${
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
              onChange={() => handleCheckboxChange(genre.name)}
            ></input>
          </div>
        ))}
      </div>
      <div className="flex justify-center space-between mt-8 ">
        <button className="text-white py-2 pr-20 pl-20 rounded border-2 border-slate-100">
          Back
        </button>
        <span className="mx-2"></span>
        <button className="text-white py-2 pr-20 pl-20 rounded disabled:opacity-50 cursor-not-allowed bg-gray-400">
          Next
        </button>
      </div>
    </div>
  );
};

export default GenreList;
