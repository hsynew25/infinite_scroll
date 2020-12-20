import axios from "axios";

const MovieApi = axios.create({
  baseURL: "https://yts.lt/api/v2",
});

const CovidApi = axios.create({
  baseURL: "http://openapi.data.go.kr/openapi/service/rest/Covid19",
});

export const getMovies = (page = 1) =>
  MovieApi.get("/list_movies.json", {
    params: {
      page,
      limit: 50,
    },
  });

const serviceKey =
  "Ezns1tKRgU%2BwI1iXLes4vzRPJwHchaMumIZz6RY0xDwZndqKVEezuocD7ndSCwpUVoq9aqIE1bNZhvNEUvDMDw%3D%3D";

export const getCovid = (pageNo = 1, startCreateDt, endCreateDt) =>
  CovidApi.get(`/getCovid19SidoInfStateJson?serviceKey=${serviceKey}`, {
    params: {
      numOfRows: 10,
      pageNo,
      startCreateDt,
      endCreateDt,
    },
  });
