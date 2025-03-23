let landing = document.getElementById("landing");
let landingBackground = [
  "../images/landing-1.jpg",
  "../images/landing-2.jpg",
  "../images/landing-3.jpg",
];
let index = 1;
// window.setInterval((_) => {
//   if (index === landingBackground.length) {
//     index = 0;
//   }
//   landing.style.backgroundImage = `url(${landingBackground[index]})`;
//   index++;
// }, 5000);
let bars = document.getElementById("bars");
let clicked = false;
bars.addEventListener("click", (_) => {
  let links = document.getElementById("links");
  if (!clicked) {
    links.style.left = "0";
    clicked = true;
  } else {
    links.style.left = "-1000px";
    clicked = false;
  }
});

let gear = document.querySelector(".gear");
gear.addEventListener("click", _ => {
  document.getElementsByClassName("settings-box")[0].classList.toggle("open")
})