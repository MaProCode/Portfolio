
// GESTIONE INVIO FORM
// -------------------
// servizio: Email JS
// https://www.emailjs.com/
//
// name: Massimiliano Provenza
// user: massimiliano.provenza@virgilio.it
// pw: MaX76882
//
// Email service: GMail --> massimiliano.provenza@gmail.com
// public Key: TqVRj-d6Pwjah0KQY
// service ID : service_umfk7co
// template ID: template_7a1sur8
// -----------------------------------------------------------
  
// Inizializza EmailJS
(function(){
  emailjs.init("TqVRj-d6Pwjah0KQY"); // ⬅️ Inserisci qui la tua chiave pubblica EmailJS
})()

document.getElementById("contact-form").addEventListener("submit", function(e) 
{
  e.preventDefault()
  emailjs.sendForm("service_umfk7co", "template_7a1sur8", this)
    .then(function(response) {
      console.log("SUCCESS!", response.status, response.text);
      document.getElementById("success-message").textContent = "✅ Message Successfully Sent!";
    }, function(error) {
      console.log("FAILED...", error);
      document.getElementById("success-message").textContent = "❌ Sending Error. Retry!.";
    })
  this.reset();
});


