function toggleMenu() {
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");

  if (sidebar.style.left === "0px") {
    sidebar.style.left = "-260px";
    overlay.style.display = "none";
  } else {
    sidebar.style.left = "0px";
    overlay.style.display = "block";
  }
}

/* SHOW BUTTONS ON SCROLL */
const elements = document.querySelectorAll(".hidden-on-load");

function revealOnScroll() {
  const trigger = window.innerHeight * 0.85;

  elements.forEach(el => {
    const top = el.getBoundingClientRect().top;

    if (top < trigger) {
      el.classList.add("show");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);