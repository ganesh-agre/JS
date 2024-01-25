const textInput = document.querySelector('input[type="text"]');
let executionCountForDebounce = 0;
let executionCountForThrottling = 0;
textInput.addEventListener("input", debounce(handleInput, 3000));
window.addEventListener("resize", throttle(handleResize, 5000));

function handleInput(e) {
  executionCountForDebounce++;
  console.log(executionCountForDebounce);
  console.log(e.target.value);
}

function debounce(fun, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      fun(...args);
    }, delay);
  };
}

function handleResize(e) {
  executionCountForThrottling++;
  console.log(executionCountForThrottling);
  console.log(e.target.value);
}

function throttle(fun, delay) {
  let shouldWait = false;
  return function (...args) {
    if (shouldWait) return;
    fun(...args);
    shouldWait = true;
    setTimeout(() => {
      shouldWait = false;
    }, delay);
  };
}
