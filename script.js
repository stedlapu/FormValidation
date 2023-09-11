const form = document.getElementById("registration-form");
const fullNameInput = document.getElementById("fullName");
const emailInput = document.getElementById("email");
const phoneNumberInput = document.getElementById("phoneNumber");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");

form.addEventListener("submit", function (e) {
    let valid = true;

    // Reset error messages
    clearErrors();

    if (fullNameInput.value.length < 5) {
        showError("fullNameError", "Name must be at least 5 characters");
        valid = false;
    }

    if (!emailInput.value.includes("@")) {
        showError("emailError", "Enter a valid email address");
        valid = false;
    }

    if (phoneNumberInput.value === "123456789" || !/^\d{10}$/.test(phoneNumberInput.value)) {
        showError("phoneNumberError", "Enter a valid 10-digit phone number");
        valid = false;
    }

    if (passwordInput.value.length < 8 || passwordInput.value.toLowerCase() === "password" || passwordInput.value.toLowerCase() === fullNameInput.value.toLowerCase()) {
        showError("passwordError", "Password must be at least 8 characters and not 'password'");
        valid = false;
    }

    if (passwordInput.value !== confirmPasswordInput.value) {
        showError("confirmPasswordError", "Passwords do not match");
        valid = false;
    }

    if (!valid) {
        e.preventDefault(); // Prevent form submission if validation fails
    }
});

function showError(id, message) {
    const errorElement = document.getElementById(id);
    errorElement.textContent = message;
}

function clearErrors() {
    const errorElements = document.querySelectorAll(".error");
    errorElements.forEach((element) => {
        element.textContent = "";
    });
}
