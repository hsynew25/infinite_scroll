import { useEffect, useState } from "react";

export function useInfiniteScroll() {
  const [page, setPage] = useState(1);
  const [yesterday, setYesterday] = useState(new Date());

  function handleScroll() {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight === scrollHeight) {
      setPage((p) => p + 1);
      yesterday.setDate(yesterday.getDate() - 1);
      setYesterday(yesterday.toDateString());
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return { page, yesterday };
}
