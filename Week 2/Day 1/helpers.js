const localeCompare = (curr, next) => {
  if (next > curr) {
    return 1;
  } else if (next < curr) return -1;
};

export const makeAllCaps = async (arr) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const res = arr.map((item) => {
        return typeof item === "string" ? item.toUpperCase() : item;
      });
      resolve(res);
    }, 5000);
  });
};

export const sortWords = async (word) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(word.sort(localeCompare));
    }, 5000);
  });
};
