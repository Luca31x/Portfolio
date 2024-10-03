document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.getElementById("navbar");
    const navHeight = navbar.offsetHeight; // Ottieni l'altezza della navbar

    // Aggiungi un event listener a tutti i link della navbar
    const links = document.querySelectorAll(".navbar a");
    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault(); // Evita il comportamento predefinito

            const targetId = this.getAttribute("href"); // Ottieni l'ID della sezione di destinazione
            const targetElement = document.querySelector(targetId); // Seleziona l'elemento di destinazione

            // Scorri in modo fluido fino alla sezione, tenendo conto dell'altezza della navbar
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: "smooth" // Scorrimento fluido
            });
        });
    });
});