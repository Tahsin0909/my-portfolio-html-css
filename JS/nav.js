// // Add an active class to the current link
// function setActiveLink() {
//     let sections = document.querySelectorAll("section");
//     let navLinks = document.querySelectorAll(".navLink");

//     let index = sections.length;

//     while (--index && window.scrollY + 50 < sections[index].offsetTop) { }

//     navLinks.forEach((link) => link.classList.remove("active")); // Remove active class from all links
//     navLinks[index].classList.add("active"); // Add active class to the current link
    
// }

// // Run the function on scroll and load
// window.addEventListener("scroll", setActiveLink);
// window.addEventListener("load", setActiveLink);