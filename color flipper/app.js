const colors = ["red", "yellow", "blue", "green", "pink", "brown"];
const btn = document.getElementById("btn-id");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber();
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});
const getRandomNumber = () => {
  return Math.floor(Math.random() * colors.length);
};
