const fetch = require("node-fetch");

const baseUrl = "https://api.themoviedb.org/3/";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYTQyZGRkODVkZjBjNWM4MGZiYzU5NmUwMGVlOTZiMyIsIm5iZiI6MTczMTA4MDMzNC44NDA2ODc1LCJzdWIiOiI2NzIxYjQ2ODk3NGE2NzZjNmRmMzNiNzIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.WurgJ-PTSKaDHmV_7ccvMdJGtvH_D6VT0ED3oCnOG6A",
  },
};

const url = (urlName) => {
  return baseUrl + `${urlName}?language=ko-kr`;
};

export const movieDetail = (id) =>
  fetch(url(`movie/${id}`), options).then((res) => res.json());

export const movieCredits = (id) =>
  fetch(url(`movie/${id}/credits`), options).then((res) => res.json());
