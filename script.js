document.addEventListener("DOMContentLoaded", function () {
  // Add a scroll event listener to the window
  window.addEventListener("scroll", function () {
    const headerContainer = document.querySelector(".header-container");
    const aboutSection = document.querySelector("#about");
    const skillsSection = document.querySelector("#skills");
    const contactSection = document.querySelector("#contact");

    const scrollY = window.scrollY;

    const offset = 100;

    if (
      scrollY >= aboutSection.offsetTop - offset &&
      scrollY < skillsSection.offsetTop - offset
    ) {
      document.querySelector("#about-link").classList.add("active");
      document.querySelector("#skills-link").classList.remove("active");
      document.querySelector("#contact-link").classList.remove("active");
    } else if (
      scrollY >= skillsSection.offsetTop - offset &&
      scrollY < contactSection.offsetTop - offset
    ) {
      document.querySelector("#skills-link").classList.add("active");
      document.querySelector("#about-link").classList.remove("active");
      document.querySelector("#contact-link").classList.remove("active");
    } else if (scrollY >= contactSection.offsetTop - offset) {
      document.querySelector("#contact-link").classList.add("active");
      document.querySelector("#about-link").classList.remove("active");
      document.querySelector("#skills-link").classList.remove("active");
    } else {
      document.querySelector("#about-link").classList.remove("active");
      document.querySelector("#skills-link").classList.remove("active");
      document.querySelector("#contact-link").classList.remove("active");
    }
    if (scrollY > 0) {
      headerContainer.classList.add("sticky");
    } else {
      headerContainer.classList.remove("sticky");
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    const headerContainer = document.querySelector(".header-container");
    if (window.scrollY > 0) {
      headerContainer.classList.add("sticky");
    } else {
      headerContainer.classList.remove("sticky");
    }
  });

  function smoothScrollToSection(sectionId, yOffset) {
    const section = document.querySelector(sectionId);
    window.scrollTo({
      top: section.offsetTop + yOffset,
      behavior: "smooth",
    });
  }
  const aboutLink = document.querySelector("#about-link");
  aboutLink.addEventListener("click", function (e) {
    e.preventDefault();
    smoothScrollToSection("#about", -60);
  });
  const skillsLink = document.querySelector("#skills-link");
  skillsLink.addEventListener("click", function (e) {
    e.preventDefault();
    smoothScrollToSection("#skills", -60);
  });
  const contactLink = document.querySelector("#contact-link");
  contactLink.addEventListener("click", function (e) {
    e.preventDefault();
    smoothScrollToSection("#contact", -60);
  });
  const conLink = document.querySelector("#con-link");
  conLink.addEventListener("click", function (e) {
    e.preventDefault();
    smoothScrollToSection("#contact", -60);
  });
  const homeLink = document.querySelector("#home-link");
  homeLink.addEventListener("click", function (e) {
    e.preventDefault();
    smoothScrollToSection("#home", -60);
  });
});
