import { useEffect, useState } from "react";
import { getMovies } from "./api";

export const InfiniteScroll = (movies, pages) => {
  const [movie, setMovie] = useState(movies);
  const [page, setPage] = useState(pages);
  const [fetching, setFetching] = useState(false);

  const refetchMovie = async () => {
    setFetching(true);
    try {
      setPage(page + 1);
      const {
        data: {
          data: { movies: newMovies },
        },
      } = await getMovies(page);
      const mergeMovie = movie.concat(...newMovies);
      setMovie(mergeMovie);
    } catch (error) {
      console.log(error);
    } finally {
      setFetching(false);
    }
  };

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight && !fetching) {
      refetchMovie();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  return { fetching };
};
