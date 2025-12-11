// PROFILE DROPDOWN
const profileBtn = document.getElementById("profileBtn");
const profileMenu = document.getElementById("profileMenu");

profileBtn.addEventListener("click", () => {
  profileMenu.classList.toggle("hidden");
});

// DESKTOP EDIT PROFILE DROPDOWN
const editBtn = document.getElementById("editBtn");
const editMenu = document.getElementById("editMenu");

editBtn.addEventListener("click", () => {
  editMenu.classList.toggle("hidden");
});

// MOBILE HAMBURGER MENU
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// MOBILE EDIT PROFILE COLLAPSE
const mobileEditBtn = document.getElementById("mobileEditBtn");
const mobileEditMenu = document.getElementById("mobileEditMenu");

mobileEditBtn.addEventListener("click", () => {
  mobileEditMenu.classList.toggle("hidden");
});
