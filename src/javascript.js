//Function för att visa meddelande och testa så javascriptkopplingen fungerar
function displayMessage() {
    let message = "Hello, World!";

    //skapa heading ellement
    let heading = document.createElement("h2");

    //Specificera innehållet
    heading.textContent = message;

    //Lägga till meddelandet till body i htmldokumentet
    document.body.appendChild(heading);
}

//Call the displayMessage function
displayMessage();