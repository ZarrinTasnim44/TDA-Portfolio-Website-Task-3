// DOM selection
const form = document.getElementById("contactForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");
const successMessage = document.getElementById("successMessage");

const themeToggle = document.getElementById("themeToggle");

// Reusable functions
function showError(element, message) {
  element.textContent = message;
}

function clearError(element) {
  element.textContent = "";
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Form validation
form.addEventListener("submit", function (e) {
  e.preventDefault();

  let isValid = true;

  clearError(nameError);
  clearError(emailError);
  clearError(messageError);
  successMessage.textContent = "";

  if (nameInput.value.trim() === "") {
    showError(nameError, "Name is required");
    isValid = false;
  }

  if (!isValidEmail(emailInput.value)) {
    showError(emailError, "Enter a valid email");
    isValid = false;
  }

  if (messageInput.value.trim() === "") {
    showError(messageError, "Message cannot be empty");
    isValid = false;
  }

  if (isValid) {
    successMessage.textContent = "Message sent successfully!";
    form.reset();
  }
});

// Real-time interaction
nameInput.addEventListener("input", () => clearError(nameError));
emailInput.addEventListener("input", () => clearError(emailError));
messageInput.addEventListener("input", () => clearError(messageError));

// Dark mode toggle + localStorage
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});
