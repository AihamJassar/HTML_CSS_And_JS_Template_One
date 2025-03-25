let landing = document.getElementById("landing");
let landingBackground = [
  "../images/01.jpg",
  "../images/02.jpg",
  "../images/03.jpg",
  "../images/04.jpg",
  "../images/05.jpg",
];
let index = 1;

function changeBackground() {
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
    document
      .querySelectorAll(".settings-box .box .colors li.main-color")
      .forEach((li) => li.classList.remove("main-color"));
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
console.log("Checkbox : " + changedBackground.getAttribute("checked"));
changedBackground.addEventListener("click", (event) => {
  if (!event.target.getAttribute("checked")) {
    clearInterval(changeBackground());
    localStorage.setItem("changedBackground", "no change");
  } else {
    localStorage.setItem("changedBackground", "change");
    changeBackground();
  }
});

let skillsSection = document.getElementById("skills");
window.onscroll = function () {
  let offsetTop = skillsSection.offsetTop;
  let offsetHeight = skillsSection.offsetHeight;
  let innerHeight = window.innerHeight;
  let windowScrollTop = window.scrollY;
  if (windowScrollTop > offsetHeight + offsetTop - innerHeight) {
    let skills = document.querySelectorAll(".skills .box .skill-progress span");
    skills.forEach((skill) => {
      skill.style.width = skill.dataset.progress;
    });
  }
};

let gallery = document.querySelectorAll(".gallery .images-box img");
gallery.forEach((img) => {
  img.addEventListener("click", (_) => {
    let overlay = document.createElement("div");
    overlay.className = "overlay";
    document.body.appendChild(overlay);
    let popup = document.createElement("div");
    popup.className = "popup";
    if (img.alt !== null) {
      let title = document.createElement("h3");
      let titleText = document.createTextNode(img.alt);
      title.appendChild(titleText);
      popup.appendChild(title);
    }
    let image = document.createElement("img");
    image.src = img.src;
    console.log(img);
    popup.appendChild(image);
    document.body.appendChild(popup);
  });
});
