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
const subjectInput = document.getElementById("subjectInput");
const saveBtn = document.getElementById("saveSubject");
const subjectList = document.getElementById("subjectList");

const openModal = document.getElementById("openSubjectModal");
const modalOverlay = document.getElementById("subjectModalOverlay");
const modalBox = document.getElementById("modalBox");
const closeModal = document.getElementById("closeModal");
const cancelModal = document.getElementById("cancelModal");
const modalInput = document.getElementById("modalSubjectInput");
const modalSave = document.getElementById("modalSave");

let editTarget = null;

/* ---------- Add / Edit Subject ---------- */
saveBtn.addEventListener("click", () => {
  const value = subjectInput.value.trim();
  if (!value) return alert("Please enter subject");

  if (editTarget) {
    editTarget.textContent = value;
    editTarget = null;
  } else {
    createSubject(value);
  }

  subjectInput.value = "";
});

function createSubject(text) {
  const div = document.createElement("div");
  div.className =
    "w-full bg-gray-100 border rounded p-4 flex items-center justify-between mt-3";

  div.innerHTML = `
    <div class="flex items-center gap-3">
      <img src="https://img.icons8.com/?size=100&id=8190&format=png" class="edit cursor-pointer w-5 h-5" alt="Edit">
      <img src="https://img.icons8.com/?size=160&id=yHv25CzZD96e&format=png" class="delete cursor-pointer w-5 h-5" alt="Delete">

      <span class="subject text-gray-700 text-lg">${text}</span>
    </div>
  `;

  subjectList.appendChild(div);

  const editBtn = div.querySelector(".edit");
  const deleteBtn = div.querySelector(".delete");
  const subjectText = div.querySelector(".subject");

  editBtn.addEventListener("click", () => {
    subjectInput.value = subjectText.textContent;
    editTarget = subjectText;
    subjectInput.focus();
  });

  deleteBtn.addEventListener("click", () => {
    showDeletePopup(div);
  });
}

/* ---------- Delete Confirmation ---------- */
function showDeletePopup(item) {
  const overlay = document.createElement("div");
  overlay.className =
    "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50";

  overlay.innerHTML = `
    <div class="bg-white rounded-lg p-6 w-80 text-center">
      <h3 class="text-lg font-semibold mb-4">
        Do you want to delete this?
      </h3>
      <div class="flex justify-center gap-4">
        <button class="yes px-4 py-2 bg-red-600 text-white rounded">Yes</button>
        <button class="no px-4 py-2 border rounded">No</button>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);

  overlay.querySelector(".yes").onclick = () => {
    item.remove();
    overlay.remove();
  };

  overlay.querySelector(".no").onclick = () => overlay.remove();
}

/* ================= MODAL ================= */

openModal.addEventListener("click", () => {
  modalOverlay.classList.remove("hidden");
  modalOverlay.classList.add("flex");

  setTimeout(() => {
    modalBox.classList.remove("-translate-y-10", "opacity-0");
  }, 10);
});

function closeSubjectModal() {
  modalBox.classList.add("-translate-y-10", "opacity-0");

  setTimeout(() => {
    modalOverlay.classList.add("hidden");
    modalOverlay.classList.remove("flex");
  }, 300);
}

closeModal.addEventListener("click", closeSubjectModal);
cancelModal.addEventListener("click", closeSubjectModal);


// ------------------- ADDRESSES EDIT & GEOLOCATION -------------------

document.addEventListener("DOMContentLoaded", () => {
  const editAddressBtn = document.getElementById('editAddressBtn');
  const addressText = document.getElementById('addressText');
  const addressEditContainer = document.getElementById('addressEditContainer');
  const addressInput = document.getElementById('addressInput');
  const getLocationBtn = document.getElementById('getLocationBtn');

  if (editAddressBtn) {
    editAddressBtn.addEventListener('click', (e) => {
      e.preventDefault();
      addressText.classList.add('hidden');        // hide static address
      editAddressBtn.classList.add('hidden');     // hide edit icon
      addressEditContainer.classList.remove('hidden'); // show input + button
    });
  }

  if (getLocationBtn) {
    getLocationBtn.addEventListener('click', () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, error);
      } else {
        alert('Geolocation is not supported by your browser.');
      }
    });
  }

  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    // Fetch readable address using OpenStreetMap Nominatim API
    fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`)
      .then(response => response.json())
      .then(data => {
        addressInput.value = data.display_name;
      })
      .catch(() => alert('Unable to fetch address. Please try again.'));
  }

  function error() {
    alert('Unable to retrieve your location. Please allow location access.');
  }
});
