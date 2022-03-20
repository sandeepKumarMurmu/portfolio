/* -----------------------------------------
  Have focus outline only for keyboard users 
 ---------------------------------------- */
// import copy from "copy-to-clipboard";
const handleFirstTab = (e) => {
  if (e.key === "Tab") {
    document.body.classList.add("user-is-tabbing");

    window.removeEventListener("keydown", handleFirstTab);
    window.addEventListener("mousedown", handleMouseDownOnce);
  }
};

const handleMouseDownOnce = () => {
  document.body.classList.remove("user-is-tabbing");

  window.removeEventListener("mousedown", handleMouseDownOnce);
  window.addEventListener("keydown", handleFirstTab);
};

window.addEventListener("keydown", handleFirstTab);

const backToTopButton = document.querySelector(".back-to-top");
let isBackToTopRendered = false;

let alterStyles = (isBackToTopRendered) => {
  backToTopButton.style.visibility = isBackToTopRendered ? "visible" : "hidden";
  backToTopButton.style.opacity = isBackToTopRendered ? 1 : 0;
  backToTopButton.style.transform = isBackToTopRendered
    ? "scale(1)"
    : "scale(0)";
};

window.addEventListener("scroll", () => {
  if (window.scrollY > 700) {
    isBackToTopRendered = true;
    alterStyles(isBackToTopRendered);
  } else {
    isBackToTopRendered = false;
    alterStyles(isBackToTopRendered);
  }
});

/*
  from my side
  */

document.getElementById("check").addEventListener("click", () => {
  // copy("sandeep.16murmu@gmail.com");
  let inputElement = document.createElement("input");
  inputElement.setAttribute("value", "sandeep.16murmu@gmail.com");
  document.body.appendChild(inputElement);
  inputElement.select();
  document.execCommand("copy");
  inputElement.parentNode.removeChild(inputElement);
  alert("copied");
});

document.getElementById("redirect").addEventListener("click", () => {
  window.location.href = "mailto:sandeep.16murmu@gamil.com";
});
