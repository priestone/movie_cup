const fetch = require("node-fetch");

const baseUrl = "https://api.themoviedb.org /3";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYTQyZGRkODVkZjBjNWM4MGZiYzU5NmUwMGVlOTZiMyIsIm5iZiI6MTczMTA0OTcwNC42MjA3NzUyLCJzdWIiOiI2NzIxYjQ2ODk3NGE2NzZjNmRmMzNiNzIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Cf9C8ZGqCGz3XZVUyJ_0avP2cOVgTzp8L6fft6MBDoI",
  },
};

const url = (urlName) => {
  return baseUrl + `${urlName}?language=ko-kr`;
};

export const movieDetail = (id) => {
  fetch(url(`movie${id}`), options).then((res) => res.json());
};
