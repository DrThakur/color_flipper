const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.querySelector("#btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  //   console.log(document.body);
  const randomNumber = Math.floor(Math.random() * 4);
  const randomColor = colors[randomNumber];
  document.body.style.backgroundColor = randomColor;
  color.textContent = randomColor;
});
