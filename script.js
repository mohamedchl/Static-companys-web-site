const button_ser = document.getElementById("devouvrir-but");
const secondSection = document.getElementById("section2");

button_ser.addEventListener("click", () => {
  secondSection.scrollIntoView({ behavior: "smooth" });
});
function menuOnClick() {
  document.getElementById("menu-bar").classList.toggle("change");
  document.getElementById("nav").classList.toggle("change");
  document.getElementById("menu-bg").classList.toggle("change-bg");
}

const button_pr = document.getElementById("devouvrir-pro");
const section3 = document.getElementById("section3");
const section1 = document.getElementById("section1");
const section4 = document.getElementById("section4");
button_pr.addEventListener("click", () => {
  section3.scrollIntoView({ behavior: "smooth" });
});

/*checkbox*/
function checkCheckbox() {
  var element = document.getElementById("myElement");
  var checkbox = document.getElementById("mycheckbox");
  if (checkbox.checked) {
    element.style.display = "flex";
    setTimeout(function () {
      element.classList.toggle("visible");
    }, 10);
  } else {
    element.classList.toggle("visible");

    setTimeout(function () {
      element.style.display = "none";
    }, 100);
  }
}

var state = false;
function expand() {
  if (state == false) {
    document.getElementById("items").style.transform = "scaleX(1)";
    document.getElementById("items").style.width = "200px";
    document.querySelector(".pc_nav").style.marginRight = "16%";
    document.getElementById("toggle1").style.transform = "rotate(0deg)";
    document.getElementById("toggle1").style.marginTop = "0.2rem";
    state = true;
  } else {
    document.getElementById("items").style.width = "0";
    document.querySelector(".pc_nav").style.marginRight = "8%";
    document.getElementById("items").style.transform = "scaleX(0)";
    document.getElementById("toggle1").style.transform = "rotate(90deg)";
    state = false;
  }
}
/*nav phone*/
function checkboxfalse() {
  var element = document.getElementById("myElement");
  const checkbox = document.querySelector('.label input[type="checkbox"]');
  checkbox.checked = false;
  element.classList.toggle("visible");
  setTimeout(function () {
    element.style.display = "none";
  }, 100);
}

/*scroll nav*/
function Scroll(i) {
  switch (i) {
    case 1:
      section1.scrollIntoView({ behavior: "smooth" });
      break;
    case 2:
      secondSection.scrollIntoView({ behavior: "smooth" });
      break;
    case 3:
      section3.scrollIntoView({ behavior: "smooth" });
      break;
    case 4:
      section4.scrollIntoView({ behavior: "smooth" });
  }
}
/*button de services */
var homeLink21 = document.getElementById("but_courant_faible");
homeLink21.addEventListener("click", () => {
  window.location.href = "courant_faible.html";
});
var homeLink2 = document.getElementById("but_courant_fort");
homeLink2.addEventListener("click", () => {
  window.location.href = "courant_fort.html";
});

/*slider*/
const wrapper = document.querySelector(".wrapper");
const carousel = document.querySelector(".carousel");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;
const arrowBtns = document.querySelectorAll(".wrapper i");
const carouselChildrens = [...carousel.children];
let isDragging = false,
  isAutoPlay = true,
  startX,
  startScrollLeft,
  timeoutId;

let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

carouselChildrens
  .slice(-cardPerView)
  .reverse()
  .forEach((card) => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
  });

carouselChildrens.slice(0, cardPerView).forEach((card) => {
  carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});

carousel.classList.add("no-transition");
carousel.scrollLeft = carousel.offsetWidth;
carousel.classList.remove("no-transition");

arrowBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
  });
});
const dragStart = (e) => {
  isDragging = true;
  carousel.classList.add("dragging");

  startX = e.pageX;
  startScrollLeft = carousel.scrollLeft;
};
const dragging = (e) => {
  if (!isDragging) return;
  carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
};
const dragStop = () => {
  isDragging = false;
  carousel.classList.remove("dragging");
};
const infiniteScroll = () => {
  if (carousel.scrollLeft === 0) {
    carousel.classList.add("no-transition");
    carousel.scrollLeft =  carousel.scrollWidth  - 2* carousel.offsetWidth;
    carousel.classList.remove("no-transition");
  } else if (
    Math.ceil(carousel.scrollLeft) ===
    carousel.scrollWidth - carousel.offsetWidth
  ) {
    carousel.classList.add("no-transition");
    carousel.scrollLeft = carousel.offsetWidth;
    carousel.classList.remove("no-transition");
  }
};

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);


function isPhone() {
  return window.matchMedia("(max-width: 767px)").matches;
}

let cards = document.querySelectorAll(".card");
let buts = document.querySelectorAll(".wrapper i") ;
cards.forEach((card) => {
  card.addEventListener("click", () => {
    cards.forEach((otherCard) => {
      if (otherCard !== card) {
        otherCard.classList.remove("flip");
      }
    });
    card.classList.toggle("flip");
  });
});

buts.forEach((bat) => {
  bat.addEventListener("click", () => {
    cards.forEach((card) => {
      card.classList.remove("flip");
    });
  });
});

/*about*/
document.addEventListener("DOMContentLoaded", function () {
  var popup = document.getElementById("popup");

  var popup1 = document.getElementById("refer");

  setTimeout(function () {
    popup.classList.add("loaded");
    popup1.classList.add("loaded");
  }, 2000);
});
function toggle() {
  let blurr = document.querySelectorAll(".body");
  blurr.forEach((element) => {
    element.classList.toggle("active");
  });

  let pop = document.getElementById("popup");
  pop.classList.toggle("active");

  let popupClicked = false;

  setTimeout(function () {
    document.addEventListener("click", clickOutsideHandler);
  }, 10);

  function clickOutsideHandler(event) {
    const outsideClick = !pop.contains(event.target);

    if (outsideClick && !popupClicked) {
      pop.classList.toggle("active");
      blurr.forEach((element) => {
        element.classList.toggle("active");
      });
    }

    document.removeEventListener("click", clickOutsideHandler);
  }

  pop.addEventListener("click", function (event) {
    popupClicked = true;
    event.stopPropagation(); // stop event propagation to prevent it from triggering the clickOutsideHandler
  });

  document.addEventListener("click", function () {
    popupClicked = false; // set flag variable back to false when user clicks outside popup
  });
}

function toggle1() {
  let blurr = document.querySelectorAll(".body");
  blurr.forEach((element) => {
    element.classList.toggle("active");
  });
  let ref = document.getElementById("refer");
  ref.classList.toggle("active");
  let popupClicked2 = false;

  setTimeout(function () {
    document.addEventListener("click", clickOutsideHandler2);
  }, 10);

  function clickOutsideHandler2(event) {
    const outsideClick = !ref.contains(event.target);

    if (outsideClick && !popupClicked2) {
      ref.classList.toggle("active");
      blurr.forEach((element) => {
        element.classList.toggle("active");
      });
    }

    document.removeEventListener("click", clickOutsideHandler2);
  }

  ref.addEventListener("click", function (event) {
    popupClicked2 = true;
    event.stopPropagation(); // stop event propagation to prevent it from triggering the clickOutsideHandler
  });

  document.addEventListener("click", function () {
    popupClicked2 = false; // set flag variable back to false when user clicks outside popup
  });
}

/*inetrsact*/
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("shox");
    } else {
      entry.target.classList.remove("shox");
    }
  });
});
const hidenelem = document.querySelectorAll(".hidden");
hidenelem.forEach((el) => observer.observe(el));

/*section active*/
var sections = document.querySelectorAll(".sectionn");
var isIntersecting = {};
var debounceTimeout;

var observerr = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      var sectionId = entry.target.getAttribute("id");
      if (entry.isIntersecting) {
        isIntersecting[sectionId] = true;
      } else {
        delete isIntersecting[sectionId];
      }
    });

    // Debounce the callback function
    clearTimeout(debounceTimeout);
    //var liElements = document.querySelectorAll(".pc_nav a");//
    var eiElements = document.querySelectorAll("#myElement a");
    debounceTimeout = setTimeout(function () {
      if (isIntersecting["section1"]) {
        for (let j = 0; j < eiElements.length; j++) {
          if (j === 0) {
            eiElements[0].style.color = "rgb(54,98,142)";
          } else {
            eiElements[j].style.color = "white";
          }
        }
      }
      if (isIntersecting["section2"]) {
        for (let j = 0; j < eiElements.length; j++) {
          if (j === 1) {
            eiElements[1].style.color = "rgb(54,98,142)";
          } else {
            eiElements[j].style.color = "white";
          }
        }
      }

      if (isIntersecting["section3"]) {
        for (let j = 0; j < eiElements.length; j++) {
          if (j === 2) {
            eiElements[2].style.color = "rgb(54,98,142)";
          } else {
            eiElements[j].style.color = "white";
          }
        }
      }
      if (isIntersecting["section4"]) {
        for (let j = 0; j < eiElements.length; j++) {
          if (j === 3) {
            eiElements[3].style.color = "rgb(54,98,142)";
          } else {
            eiElements[j].style.color = "white";
          }
        }
      }
    }, 200); // Debounce time in milliseconds
  },
  {
    rootMargin:
      "-100px 0px -" +
      (sections[2].offsetHeight - window.innerHeight + 100) +
      "px 0px",
  }
);

sections.forEach(function (section) {
  observerr.observe(section);
});
