// Hole den Button, das Foto, den Konfetti-Container, den Raketen-Container und das Textelement
const enthuellenButton = document.getElementById('enthuellenButton');
const geburtstagsFoto = document.getElementById('geburtstagsFoto');
const confettiContainer = document.getElementById('confetti-container');
const rocketContainer = document.getElementById('rocket-container');
const ueraschungText = document.getElementById('ueraschungText');

// Array mit aufploppenden Worten
const popupWords = ["Glück!", "Gesundheit!", "Liebe!", "Freude!", "Erfolg!", "Alles Liebe!", "Happy Birthday!"];

// Funktion zum Erstellen eines Konfetti-Stücks
function createConfetti() {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti-piece');
    confetti.style.left = `${Math.random() * 100}vw`;
    confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 60%)`; // Zufällige Farbe
    confetti.style.animationDelay = `${Math.random() * 5}s`; // Zufällige Verzögerung
    confetti.style.animationDuration = `${Math.random() * 5 + 3}s`; // Zufällige Dauer
    confettiContainer.appendChild(confetti);

    // Entferne das Konfetti, nachdem die Animation beendet ist
    setTimeout(() => {
        confetti.remove();
    }, 8000); // Entfernt nach 8 Sekunden
}

// Funktion zum Erstellen eines aufploppenden Wortes
function createPopupWord(word) {
    const wordElement = document.createElement('div');
    wordElement.classList.add('popup-word');
    wordElement.textContent = word;
    wordElement.style.left = `${Math.random() * 100}vw`;
    wordElement.style.top = `${Math.random() * 50}vh`; // Startposition oben
    wordElement.style.animationDelay = `${Math.random() * 1}s`; // Zufällige Verzögerung
    document.body.appendChild(wordElement);

    // Entferne das Wort, nachdem die Animation beendet ist
    setTimeout(() => {
        wordElement.remove();
    }, 2500); // Entfernt nach 2.5 Sekunden
}

// Funktion zum Erstellen einer Rakete
function createRocket() {
    const rocket = document.createElement('div');
    rocket.classList.add('rocket');
    rocket.style.left = `${Math.random() * 100}vw`;
    rocket.style.animationDelay = `${Math.random() * 3}s`; // Zufällige Verzögerung
    rocket.style.animationDuration = `${Math.random() * 5 + 5}s`; // Zufällige Dauer
    rocketContainer.appendChild(rocket);

    // Entferne die Rakete, nachdem die Animation beendet ist
    setTimeout(() => {
        rocket.remove();
    }, 10000); // Entfernt nach 10 Sekunden
}

// Füge einen Event-Listener für den Button hinzu
enthuellenButton.addEventListener('click', function() {
    // Entferne die 'foto-versteckt'-Klasse
    geburtstagsFoto.classList.remove('foto-versteckt');
    // Füge die 'foto-sichtbar'-Klasse hinzu (falls du zusätzliche Stile dafür möchtest)
    // geburtstagsFoto.classList.add('foto-sichtbar');

    // Optional: Verstecke den Button nach dem Klicken
    enthuellenButton.style.display = 'none';

    // Verstecke den Überraschungstext
    if (ueraschungText) { // Überprüfe, ob das Element existiert
        ueraschungText.style.display = 'none';
    }

    // Starte die Konfetti-Erzeugung
    const confettiInterval = setInterval(createConfetti, 200); // Erzeuge alle 200ms ein Konfetti

    // Stoppe das Konfetti nach einer bestimmten Zeit (z.B. 10 Sekunden)
    setTimeout(() => {
        clearInterval(confettiInterval);
    }, 10000);

    // Starte die aufploppenden Worte
    const wordInterval = setInterval(() => {
        const randomIndex = Math.floor(Math.random() * popupWords.length);
        createPopupWord(popupWords[randomIndex]);
    }, 500); // Erzeuge alle 500ms ein Wort

    // Stoppe die Worte nach einer bestimmten Zeit (z.B. 15 Sekunden)
    setTimeout(() => {
        clearInterval(wordInterval);
    }, 15000);

    // Starte die Raketen-Erzeugung
    const rocketInterval = setInterval(createRocket, 2000); // Erzeuge alle 2 Sekunden eine Rakete

    // Stoppe die Raketen nach einer bestimmten Zeit (z.B. 10 Sekunden)
    setTimeout(() => {
        clearInterval(rocketInterval);
    }, 10000);
});