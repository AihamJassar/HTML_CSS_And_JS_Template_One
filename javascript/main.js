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
    links.style.cssText = `
        width: 100%;
        position: absolute;
        left: 0;
        top: 70px;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-direction: column;
        gap: 15px;
        padding: 10px 25px;
        border-top: 5px solid black;
        z-index: 10;`;
    clicked = true;
  } else {
    links.style.display = "none";
    clicked = false;
  }
});
