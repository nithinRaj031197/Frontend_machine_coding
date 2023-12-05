const inViewPort = (element) => {
  const ele = element.getBoundingClientRect();
  const viewHeight = window.innerHeight || document.documentElement.clientHeight;
  const viewWidth = window.innerWidth || document.documentElement.clientWidth;

  return ele.top >= 0 && ele.bottom <= viewHeight && ele.left >= 0 && ele.right <= viewWidth;
};

const detect = () => {
  const result = [];
  const blocks = document.querySelectorAll(".blocks");

  blocks.forEach((elem) => {
    if (inViewPort(elem)) result.push(elem.innerHTML);
  });
  console.log(result);
};

function myDebounce(fn, delay) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

window.addEventListener("scroll", myDebounce(detect, 1000));
