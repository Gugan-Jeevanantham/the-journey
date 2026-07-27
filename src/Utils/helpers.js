export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export const delay = (time) =>
  new Promise((resolve) => setTimeout(resolve, time));