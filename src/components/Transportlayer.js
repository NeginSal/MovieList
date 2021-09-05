import DATA from "../data.json";

export function getAllMovies() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("d",DATA)
      resolve(DATA);
    }, 1000);
  });
};
export function getServerData(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Film #" + id);
    },3000);
  });
}

