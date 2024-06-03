import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "./CustomHooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "./CustomHooks/usePopularMovies";
import useTopRatedMovies from "./CustomHooks/useTopRatedMovies";
import useUpcomingMovies from "./CustomHooks/useUpcomingMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  return (
    <>
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </>
  );
};

export default Browse;
