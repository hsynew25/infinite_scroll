import { useState, useEffect } from "react";
import { useInfiniteScroll } from "../useInfiniteScroll";
import { getCovid } from "../api";

export const FetchCovid = (date) => {
  const [isNothing, setIsNothing] = useState(true);
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0);
  const [covid, setCovid] = useState({});
  const { page, yesterday } = useInfiniteScroll();

  function CalToday(calDate) {
    let date = {
      year: 2020,
      month: 1,
      day: 1,
    };

    const year = calDate.getFullYear();
    let month = calDate.getMonth() + 1;
    let day = calDate.getDate();

    if (month < 10) {
      month = `0${month}`;
    }
    if (day < 10) {
      day = `0${day}`;
    }

    date = {
      year,
      month,
      day,
    };
    return date;
  }

  const fetchFirst = async () => {
    setLoading(true);
    const todayDate = new Date();
    const date = CalToday(todayDate);
    const SEDate = `${date.year}${date.month}${date.day}`;
    try {
      let {
        data: {
          response: {
            body: {
              items: { item },
            },
          },
        },
      } = await getCovid(page, SEDate, SEDate);

      if (item === undefined) {
        setIsNothing(true);
      } else {
        setIsNothing(false);
      }

      const checker = {};
      item = item.reduce((dup, i) => {
        if (!checker[i.gubun]) {
          checker[i.gubun] = i;
          dup.push(i);
        }
        return dup;
      }, []);
      const covidObj = {
        [count]: {
          covidArr: item,
          today: date,
        },
      };
      setCovid(covidObj);
      setCount(count + 1);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const refetchCovid = async () => {
    const date = CalToday(new Date(yesterday));
    const SEDate = `${date.year}${date.month}${date.day}`;
    try {
      let {
        data: {
          response: {
            body: {
              items: { item: newCovid },
            },
          },
        },
      } = await getCovid(page, SEDate, SEDate);

      const checker = {};
      newCovid = newCovid.reduce((dup, item) => {
        if (!checker[item.gubun]) {
          checker[item.gubun] = item;
          dup.push(item);
        }

        return dup;
      }, []);

      const covidObj = {
        [count]: {
          covidArr: newCovid,
          today: date,
        },
      };

      const mergeCovid = Object.assign(covid, covidObj);
      setCovid(mergeCovid);
      setCount(count + 1);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchFirst();
  }, []);

  useEffect(() => {
    refetchCovid();
  }, [yesterday]);

  return { loading, covid, isNothing };
};
