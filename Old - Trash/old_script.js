// Gestione del filtro sui progetti 
// --------------------------------
document.addEventListener("DOMContentLoaded", () => 
{
    const filterButtons = document.querySelectorAll(".filter-btn");
    const projectItems = document.querySelectorAll(".project-item");
    const projectDescriptions = document.querySelectorAll(".project-description");

    filterButtons.forEach(button => 
    {                          /* "click"  */ 
        button.addEventListener("mouseenter", () => 
        {
            const filter = button.dataset.filter;
            
            // Filtro su : Prj ITEMS
            projectItems.forEach(item => 
                {
                    if (filter== "Dashbords")
                        {item.style.backgroundImage = "url('../images/prj_Tiles_img/Dashboards_1.jpg')";
                         item.style.backgroundRepeat = "no-repeat";
                         item.style.backgroundPosition = "center";
                         //item.style.width = "200px";
                         //item.style.height = "200px";
                         item.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
                         item.style.backgroundBlendMode = "overlay";
                         item.style.backgroundSize = "100% 100%";    // "cover";  "contain";
                        }
                    else if (filter== "Kiosks")
                        {item.style.backgroundImage = "url('../images/prj_Tiles_img/Kiosks_1.jpg')";
                         item.style.backgroundRepeat = "no-repeat";
                         item.style.backgroundPosition = "center";
                         item.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
                         item.style.backgroundBlendMode = "overlay";
                         item.style.backgroundSize = "80% 100%";
                        }
                    else if (filter== "Gateways")
                        {item.style.backgroundImage = "url('../images/prj_Tiles_img/gateways_3.jpg')";
                         item.style.backgroundRepeat = "no-repeat";
                         item.style.backgroundPosition = "center";
                         item.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
                         item.style.backgroundBlendMode = "overlay";
                         item.style.backgroundSize = "100% 100%";
                        }
                    else if (filter== "Remotes")
                        {item.style.backgroundImage = "url('../images/prj_Tiles_img/remotes_1.jpg')";
                         item.style.backgroundRepeat = "no-repeat";
                         item.style.backgroundPosition = "center";
                         item.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
                         item.style.backgroundBlendMode = "overlay";
                         item.style.backgroundSize =  "80% 100%";   
                        }


                    if (item.classList.contains(filter))
                        {item.style.display = "block";}  // show Project item
                    else 
                        {item.style.display = "none";}  // hide Project item 
                });


    

            // Filtro su : Prj GROUP DESCRIPTION
            projectDescriptions.forEach(item => 
                {
                    if (filter === "all" || item.classList.contains(filter)) 
                        {item.style.display = "block";} 
                    else 
                        {item.style.display = "none";} 
                });

        });

    });

});





// Gestione invio del form di contatto
// -----------------------------------
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Previene il comportamento predefinito (rinfrescare la pagina)
    
    // Preleva i dati dal form
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Esegui una semplice validazione
    if (name === "" || email === "" || message === "") {
        alert("Per favore, compila tutti i campi.");
    } else {
        alert(`Grazie, ${name}! Il tuo messaggio è stato inviato.`);
        // Qui potresti aggiungere codice per inviare i dati a un server o un'API
    }

    // Resetta il form
    document.getElementById('contactForm').reset();
});






// Simulo il click sul pulsante filtro= Dashboards    (NOT USED)
// -----------------------------------------------
const my_button = document.getElementById("Button_filter_Dashboard");
function simulaClick() 
{
      const event = document.createEvent("click");
  event.initEvent("click", true, true);
  my_button.dispatchEvent(event);
}
// Inserisci qui dove vuoi che il click venga simulato
//simulaClick();
// browser.call("simulaClick");
