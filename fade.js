// Kui HTML-dokument on laetud (DOMContentLoaded), käivitatakse järgmine funktsioon.
document.addEventListener("DOMContentLoaded", function() {
    // Leitakse HTML-i elemendiga id="fadeContainer". See element salvestatakse muutujasse fadeContainer.
    const fadeContainer = document.getElementById('fadeContainer');

    // Pärast 250 millisekundit (veerand sekundit) käivitatakse järgmine funktsioon.
    setTimeout(function() {
        // Lisatakse fadeContainer elemendile CSS-klass "fade-in".
        // See klass võib sisaldada stiile, mis muudavad elemendi nähtavust või muudavad selle välimust animatsiooniga.
        fadeContainer.classList.add('fade-in');
    }, 250);
});

//Koodi autor: ChatGPT 3.5