document.addEventListener('DOMContentLoaded', function() {
    var header = document.querySelector('header');
    var h1 = document.querySelector('h1');
    var h2 = document.querySelector('h2');
    var buttonContainer = document.querySelector('.button-container');

    window.addEventListener('scroll', function() {
        if (h1.getBoundingClientRect().bottom <= header.getBoundingClientRect().bottom) {
            h2.style.display = 'none';
        } else {
            h2.style.display = 'block';
        }
    });

    // Eventlistener für den Button
    var acceptButton = document.getElementById('acceptButton');
    acceptButton.addEventListener('click', function() {
        // Hier können Sie den Code einfügen, der die Zustimmung zur Datenschutzerklärung behandelt
        // Zum Beispiel könnten Sie einen Cookie setzen, der die Zustimmung speichert
        // Oder Sie könnten eine Benachrichtigung anzeigen, die bestätigt, dass die Datenschutzerklärung akzeptiert wurde
        // Beispiel: Setzen eines Dummy-Cookies für die Zustimmung
        document.cookie = "datenschutz_zustimmung=akzeptiert";

        // Ausblenden des Buttons
        buttonContainer.style.display = 'none';

        // Anzeige einer Benachrichtigung
        alert("Vielen Dank für Ihre Zustimmung zur Datenschutzerklärung!");
    });
});


// Diashow für jedes Untertitel
function startSlideshow(categoryId) {
    const category = document.getElementById(categoryId);
    const galleryItems = category.querySelectorAll('.gallery-item');
    let currentIndex = 0;

    function showNextItem() {
        // Verstecke alle Bilder in der Kategorie
        galleryItems.forEach(item => {
            item.style.display = 'none';
        });
        
        // Zeige das aktuelle Bild an
        galleryItems[currentIndex].style.display = 'block';
        
        // Aktualisiere den Index für das nächste Bild
        currentIndex = (currentIndex + 1) % galleryItems.length;
    }

    setInterval(showNextItem, 3000); // Ändern Sie das Zeitintervall nach Bedarf (3000ms = 3 Sekunden)
}

// Starten Sie die endlosen Diashows für jede Kategorie
startSlideshow('korallenriffe');
startSlideshow('meeresvögel');
startSlideshow('tiefsee');
startSlideshow('tropische_Korallenriffe'); // Beachten Sie, dass die Kategorie-ID hier korrigiert wurde
startSlideshow('meeressäuger');


