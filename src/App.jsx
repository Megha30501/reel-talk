import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GenreList from "./components/GenreList";
import TopMovies from "./components/TopMovies";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<GenreList />} />
          <Route exact path="/TopMovies" element={<TopMovies />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
