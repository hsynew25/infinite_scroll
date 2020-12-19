import { useEffect, useState } from "react";
import { getMovies } from "../api";

export const FetchMovie = () => {
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [movie, setMovie] = useState([]);
  const [fetching, setFetching] = useState(false);

  const fetchFirst = async () => {
    setLoading(true);
    try {
      const {
        data: {
          data: { movies },
        },
      } = await getMovies(page);
      setMovie(movies);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

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
    fetchFirst();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return { loading, movie, fetching };
};
