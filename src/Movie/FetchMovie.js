import { useEffect, useState } from "react";
import { getMovies } from "../api";
import { useInfiniteScroll } from "../useInfiniteScroll";

export const FetchMovie = () => {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const [fetching, setFetching] = useState(false);
  const { page } = useInfiniteScroll();

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

  useEffect(() => {
    fetchFirst();
  }, []);

  useEffect(() => {
    refetchMovie();
  }, [page]);

  return { loading, movie, fetching };
};
