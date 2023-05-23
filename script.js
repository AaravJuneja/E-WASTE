document.addEventListener("DOMContentLoaded", function () {

  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector(".nav-menu");

  navToggle.addEventListener("click", function () {
    navMenu.classList.toggle("active");
  });

  const navLinks = document.querySelectorAll(".nav-menu a");

  navLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop,
          behavior: "smooth",
        });
      }
    });
  });

  const form = document.querySelector("#contact-form");
  const nameInput = document.querySelector("#name");
  const emailInput = document.querySelector("#email");
  const messageInput = document.querySelector("#message");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const nameValue = nameInput.value.trim();
    const emailValue = emailInput.value.trim();
    const messageValue = messageInput.value.trim();

    if (nameValue === "") {
      showError(nameInput, "Name is required");
    } else {
      showSuccess(nameInput);
    }

    if (emailValue === "") {
      showError(emailInput, "Email is required");
    } else if (!isValidEmail(emailValue)) {
      showError(emailInput, "Please enter a valid email");
    } else {
      showSuccess(emailInput);
    }

    if (messageValue === "") {
      showError(messageInput, "Message is required");
    } else {
      showSuccess(messageInput);
    }
  });

  function showError(input, errorMessage) {
    const formControl = input.parentElement;
    const errorText = formControl.querySelector(".error-text");

    formControl.classList.add("error");
    errorText.innerText = errorMessage;
  }

  function showSuccess(input) {
    const formControl = input.parentElement;

    formControl.classList.remove("error");
    formControl.classList.add("success");
  }

  function isValidEmail(email) {
    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
});
