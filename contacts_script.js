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


