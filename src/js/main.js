//Funktion för att testa så javascriptkopplingen fungerar
function displayMessage() {
    let message = "Hello World!";

    //skapa heading element
    let heading = document.createElement("h2");

    //Specificera innehållet
    heading.textContent = message;

    //Lägga till meddelandet till body i htmldokumentet
    document.body.appendChild(heading);
}

displayMessage();