function scrollToContact() {
  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
}
document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault();
  alert("Thank you for contacting ThriveCorevery!");
});