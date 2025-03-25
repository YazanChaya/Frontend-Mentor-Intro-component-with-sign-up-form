document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();

  const inputs = document.querySelectorAll(".input-form input");

  inputs.forEach((input) => {
    const parent = input.parentElement;

    if (input.value.trim() === "") {
      parent.classList.add("active");
      const fieldName = input.placeholder;
      parent.querySelector(
        ".error-message"
      ).textContent = `${fieldName} cannot be empty`;
    } else if (input.type === "email" && !validateEmail(input.value)) {
      parent.classList.add("active");
      parent.querySelector(".error-message").textContent =
        "Looks like this is not an email";
    } else {
      parent.classList.remove("active");
    }
  });
});

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
