let landing = document.getElementById("landing");
let landingBackground = [
  "../images/landing-1.jpg",
  "../images/landing-2.jpg",
  "../images/landing-3.jpg",
];
let index = 1;

function changeBackground(){
  return window.setInterval((_) => {
  if (index === landingBackground.length) {
    index = 0;
  }
  landing.style.backgroundImage = `url(${landingBackground[index]})`;
  index++;
}, 100000);
}
changeBackground();
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
gear.addEventListener("click", (_) => {
  document.getElementsByClassName("settings-box")[0].classList.toggle("open");
  document.querySelector(".gear i").classList.toggle("fa-spin");
});

let colors = document.querySelector(".settings-box .box .colors");
let list = document.querySelectorAll(".settings-box .box .colors li");
colors.addEventListener("click", (event) => {
  let mainColor = event.target.dataset.color;
  if (mainColor) {
    document.documentElement.style.setProperty(`--main-color`, mainColor);
    document.querySelectorAll(".settings-box .box .colors li.main-color").forEach((li) => li.classList.remove("main-color"));
    event.target.classList.add("main-color");
    localStorage.setItem("main-color", mainColor);
  }
});
if (localStorage.getItem("main-color")) {
  document.documentElement.style.setProperty(
    `--main-color`,
    localStorage.getItem("main-color")
  );
  list.forEach((li) => {
    if (li.dataset.color === localStorage.getItem("main-color")) {
      li.classList.add("main-color");
    } else {
      li.classList.remove("main-color");
    }
  });
}
//localStorage.clear()
let chBa = localStorage.getItem("changedBackground");
let changedBackground = document.getElementById("background");
if (chBa === "no change") {
  changedBackground.removeAttribute("checked");
  clearInterval(changeBackground);
}
console.log("Checkbox : " + changedBackground.getAttribute("checked"))
changedBackground.addEventListener("click", event => {
  if(!event.target.getAttribute("checked")){
    
    clearInterval(chandeBackground());
    localStorage.setItem("changedBackground", "no change");
  } else {
    localStorage.setItem("changedBackground", "change");
    changeBackground();
  }
});