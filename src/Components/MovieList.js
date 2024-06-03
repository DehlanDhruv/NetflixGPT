import React from "react";
import MovieCard from "./MovieCard";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const MovieList = ({ title, movies }) => {

   const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    responsive: [
        {
          breakpoint: 800, 
          settings: {
            slidesToShow: 3, 
            slidesToScroll: 1,
          }
        }
      ]
}
  return (
    <div className="px-4 bg-transparent">
      <h1 className=" py-2 text-lg md:py-4 md:text-3xl text-white ">{title}</h1>
      {/* <div className="flex overflow-x-scroll hide-scrollbar ">  */}
      <div className="flex md:w-100  w-[99%] h-full justify-center mx-auto"> 
        <div className=" h-full py-4  w-[98%] ">
          <Slider {...settings}>
          {movies &&
            movies.map((movie) => (
                <MovieCard key={movie.id} posterPath={movie.poster_path} />
            ))}
          </Slider>
        </div>
      </div>
    </div>

    
    
    
    
  );
};

export default MovieList;
