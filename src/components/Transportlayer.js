import DATA from "../data.json";

export function getAllMovies() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("d",DATA)
      resolve(DATA);
    }, 1000);
  });
};
export function getMovie(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const item = DATA.find((i) => i.id === id);
      resolve(item);
    },1000);
  });
}

