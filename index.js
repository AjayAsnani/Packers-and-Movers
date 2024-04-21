let currentIndex = 0;
const contentDivs = document.querySelectorAll(".content1");

function showContent(index) {
  const transformValue = `translateX(${-index * 100}%)`;
  contentDivs.forEach((div, i) => {
    div.style.transform = transformValue;
  });
}

function showNextContent() {
  currentIndex = (currentIndex + 1) % contentDivs.length;
  showContent(currentIndex);
}

function showPreviousContent() {
  currentIndex = (currentIndex - 1 + contentDivs.length) % contentDivs.length;
  showContent(currentIndex);
}

// Initially show the first content
showContent(currentIndex);

let currentPosition = 0;
const cardWidth = document.querySelector(".commitment-card").offsetWidth + 30; // Adjust the value based on your styling

function slideCards(direction) {
  const totalCards = document.querySelectorAll(".commitment-card").length;

  if (direction === "right" && currentPosition < totalCards - 2) {
    currentPosition++;
  } else if (direction === "left" && currentPosition > 0) {
    currentPosition--;
  }

  const transformValue = -currentPosition * cardWidth;
  document.querySelector(
    ".commitment-cards"
  ).style.transform = `translateX(${transformValue}px)`;
}
function toggleMenu() {
  var mobileMenu = document.getElementById("mobileMenu");
  mobileMenu.style.display= mobileMenu.style.display === "block" ? "none" : "block";
}
