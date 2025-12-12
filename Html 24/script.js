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


// SUBJECT MODAL
const openSubjectModal = document.getElementById("openSubjectModal");
const subjectModalOverlay = document.getElementById("subjectModalOverlay");
const modalBox = document.getElementById("modalBox");
const closeModal = document.getElementById("closeModal");
const cancelModal = document.getElementById("cancelModal");

// Open Modal
openSubjectModal.addEventListener("click", () => {
  subjectModalOverlay.classList.remove("hidden");
  subjectModalOverlay.classList.add("flex");

  setTimeout(() => {
    modalBox.classList.remove("-translate-y-10", "opacity-0");
    modalBox.classList.add("translate-y-0", "opacity-100");
  }, 10);
});

// Close Modal Function
function hideModal() {
  modalBox.classList.add("-translate-y-10", "opacity-0");
  modalBox.classList.remove("translate-y-0", "opacity-100");

  setTimeout(() => {
    subjectModalOverlay.classList.add("hidden");
    subjectModalOverlay.classList.remove("flex");
  }, 250); // fade-out animation time
}

// Buttons
closeModal.addEventListener("click", hideModal);
cancelModal.addEventListener("click", hideModal);

// Click outside to close
subjectModalOverlay.addEventListener("click", (e) => {
  if (e.target === subjectModalOverlay) hideModal();
});



