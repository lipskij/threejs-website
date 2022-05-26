// ///////////////////////////////////////////////////////////
// // Nav bar mobile

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");
const lines = document.querySelectorAll(".line");

hamburger.addEventListener("click", () => {
  document.body.classList.toggle("open");

  navLinks.classList.toggle("open");
  links.forEach((link) => {
    link.classList.add("fade");
    document.body.style.height = "100%";
  });

  lines.forEach((line) => {
    line.classList.toggle("open");
  });
});

navLinks.addEventListener("click", () => {
  const sepLink = navLinks;
  sepLink.classList.remove("open");

  document.body.style.overflow = "auto";

  lines.forEach((line) => {
    line.classList.toggle("open");
  });
});

if (window.innerWidth < 430) {
  window.addEventListener("scroll", () => {
    const nav = document.querySelector(".nav");
    if (window.scrollY > 100) {
      nav.style.background = "rgba(0, 0, 0, 0.8)";
      nav.style.transition = "background 0.5s ease-in-out";
    }

    if (window.scrollY < 100) {
      nav.style.background = "#141b1e";
      nav.style.transition = "background 0.5s ease-in-out";
    }
  });
}

// ///////////////////////////////////////////////////////////

// // Home page
const firstText = document.querySelector(".text");
const secondText = document.querySelector(".text2");
const thirdText = document.querySelector(".text3");
const homeButton = document.querySelector(".home-button");
const logoWindow = document.querySelector(".loading-screen");

onload = () => {
  setTimeout(() => {
    logoWindow.style.display = "none";
  }, 900);

  setTimeout(() => {
    firstText.style.opacity = "1";
  }, 1000);

  // add styles after one second
  setTimeout(() => {
    secondText.style.opacity = "1";
  }, 1300);

  // add styles after two seconds
  setTimeout(() => {
    thirdText.style.opacity = "1";
  }, 1700);

  // add styles after three seconds
  setTimeout(() => {
    homeButton.style.opacity = "1";
  }, 2100);
};

// // Intersection observer for images

const options = {
  root: null,
  threshold: 0.5,
};

function observerFn(entries) {
  entries.forEach((entry) => {
    entry.target.style.opacity = 0;

    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
    }
  });
}
const observer = new IntersectionObserver(observerFn, options);

const image = document.querySelectorAll(".image");

image.forEach((img) => {
  observer.observe(img);
});

// // FORM VALIDATION

const email = document.querySelector(".email");
const emailCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const contactFormButton = document.querySelector(".contact-button");

function emailCheckup() {
  const errorElement = document.querySelector(".error");

  if (!emailCheck.test(email.value)) {
    contactFormButton.disabled = true;
    errorElement.innerHTML = "Please enter a valid email address";
  } else {
    contactFormButton.disabled = false;
    errorElement.innerHTML = "";
  }
}
email.addEventListener("keyup", emailCheckup);

// // Footers year

const footer = document.getElementById("footer");
footer.appendChild(document.createTextNode(new Date().getFullYear()));

// ///////////////////////////////////////////////////////////////////////////////
