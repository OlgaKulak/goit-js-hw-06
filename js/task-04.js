let counterValue = 0;

const button = {
    span: document.querySelector("#value"),
    add: document.querySelector("[data-action='decrement']"),
    sub: document.querySelector("[data-action='increment']"),
  };

const decrement = () => {
    counterValue -= 1;
  button.span.textContent = counterValue;
  };

const increment = () => {
  counterValue += 1;
  button.span.textContent = counterValue;
};

button.add.addEventListener("click", decrement);
button.sub.addEventListener("click", increment);