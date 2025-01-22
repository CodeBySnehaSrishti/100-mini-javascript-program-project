document.getElementById('contactForm').addEventListener('submit', function(e) {
   e.preventDefault();
   // Form validation
   const name = document.getElementById('name').value.trim();
   const email = document.getElementById('email').value.trim();
   const subject = document.getElementById('subject').value.trim();
   const message = document.getElementById('message').value.trim();
   const formMessage = document.getElementById('formMessage');
   if (!name || !email || !subject || !message) {
       formMessage.textContent = "Please fill out all fields.";
       formMessage.style.color = "red";
       formMessage.classList.remove('hidden');
       return;
   }
   if (!validateEmail(email)) {
       formMessage.textContent = "Please enter a valid email address.";
       formMessage.style.color = "red";
       formMessage.classList.remove('hidden');
       return;
   }
   // Show success message
   formMessage.textContent = "Your message has been sent successfully!";
   formMessage.style.color = "green";
   formMessage.classList.remove('hidden');
   // Optionally, reset the form
   this.reset();
});
function validateEmail(email) {
   const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   return re.test(email);
}
