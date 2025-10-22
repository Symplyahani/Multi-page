console.log("contact.js loaded");
const form = document.getElementById("contact-form");
const success = document.getElementById("success");

const errorName = document.getElementById("error-name");
const errorEmail = document.getElementById("error-email");
const errorSubject = document.getElementById("error-subject");
const errorMessage = document.getElementById("error-message")

form.addEventListener("submit", function(event) {
    event.preventDefault();

    errorName.textContent = "";
    errorEmail.textContent = "";
    errorSubject.textContent = "";
    errorMessage.textContent = "";
    success.hidden = true;

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    let hasError = false;

  if (!name) {
    errorName.textContent = "Full name is required.";
    hasError = true;
  }

  if (!email) {
    errorEmail.textContent = "Email is required.";
    hasError = true;
  } else {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      errorEmail.textContent = "Enter a valid email address.";
      hasError = true;
    }
  }

  if (!subject) {
    errorSubject.textContent = "Subject is required.";
    hasError = true;
  }

  if (!message) {
    errorMessage.textContent = "Message is required.";
    hasError = true;
  } else if (message.length < 10) {
    errorMessage.textContent = "Message must be at least 10 characters.";
    hasError = true;
  }

  if (hasError) return;

success.hidden = false;
form.reset();
});