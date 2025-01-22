const formSteps = document.querySelectorAll(".form-step");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const submitBtn = document.getElementById("submitBtn");
const reviewList = document.getElementById("reviewList");
const form = document.getElementById("multiStepForm");
let currentStep = 0;
// Initialize the form
function showStep(step) {
  formSteps.forEach((formStep, index) => {
    formStep.classList.toggle("active", index === step);
  });
  // Update button visibility
  prevBtn.style.display = step === 0 ? "none" : "inline-block";
  nextBtn.style.display = step === formSteps.length - 1 ? "none" : "inline-block";
  submitBtn.style.display = step === formSteps.length - 1 ? "inline-block" : "none";
}
// Change step
function changeStep(direction) {
  const inputs = formSteps[currentStep].querySelectorAll("input");
  let valid = true;
  inputs.forEach(input => {
    if (!input.checkValidity()) {
      valid = false;
      input.reportValidity();
    }
  });
  if (valid) {
    currentStep += direction;
    if (currentStep === formSteps.length - 1) {
      populateReview();
    }
    showStep(currentStep);
  }
}
// Populate review step
function populateReview() {
  reviewList.innerHTML = "";
  const formData = new FormData(form);
  for (let [key, value] of formData.entries()) {
    const listItem = document.createElement("li");
    listItem.textContent = `${key}: ${value}`;
    reviewList.appendChild(listItem);
  }
}
// Handle form submission
form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Form submitted successfully!");
});
showStep(currentStep);
