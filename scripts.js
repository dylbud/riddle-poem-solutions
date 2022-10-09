const solutions = [
    { "RiddleNumber": 1, "Solution": "The Lighthouse Keeper" },
    { "RiddleNumber": 2, "Solution": "The Astronomer" },
    { "RiddleNumber": 3, "Solution": "Charon, the Ferryman" },
    { "RiddleNumber": 4, "Solution": "The Alchemist" },
    { "RiddleNumber": 5, "Solution": "The Executioner" },
    { "RiddleNumber": 6, "Solution": "The Prospector" },
    { "RiddleNumber": 7, "Solution": "Frankenstein" },
    { "RiddleNumber": 8, "Solution": "Cain and Able" },
    { "RiddleNumber": 9, "Solution": "The Voyager Spacecraft" },
    { "RiddleNumber": 10, "Solution": "The Fool" },
    { "RiddleNumber": 11, "Solution": "The Sun and Moon" },
    { "RiddleNumber": 12, "Solution": "The Planets" },
    { "RiddleNumber": 13, "Solution": "The Great Pyramid" },
    { "RiddleNumber": 14, "Solution": "Grendel" },
    { "RiddleNumber": 15, "Solution": "Dante and Vergil" },
    { "RiddleNumber": 16, "Solution": "HAL 9000" },
    { "RiddleNumber": 17, "Solution": "Walt Whitman" },
    { "RiddleNumber": 18, "Solution": "The Hangman" },
    { "RiddleNumber": 19, "Solution": "The Delphic Oracle" },
    { "RiddleNumber": 20, "Solution": "Saul of Tarsus (Paul the Apostle)" },
    { "RiddleNumber": 21, "Solution": "The Text" },
    { "RiddleNumber": 22, "Solution": "Salome, Herod and John the Baptist" },
    { "RiddleNumber": 23, "Solution": "Charlie Parker" },
    { "RiddleNumber": 24, "Solution": "The Gallilean Moons of Jupiter" },
    { "RiddleNumber": 25, "Solution": "Emily Dickinson" },
    { "RiddleNumber": 26, "Solution": "Arjuna and Krishna" },
    { "RiddleNumber": 27, "Solution": "Joseph" },
    { "RiddleNumber": 28, "Solution": "The Phoenix" },
    { "RiddleNumber": 29, "Solution": "Polyphemus and his Brothers" },
    { "RiddleNumber": 30, "Solution": "Socrates" },
    { "RiddleNumber": 31, "Solution": "Stavros Messilinos" },
    { "RiddleNumber": 32, "Solution": "Faust and Mephistophales" },
    { "RiddleNumber": 33, "Solution": "The Starship Enterprise" },
    { "RiddleNumber": 34, "Solution": "The Cowboy" },
    { "RiddleNumber": 35, "Solution": "Darth Vader and the Commander of the Death Star" },
    { "RiddleNumber": 36, "Solution": "Laocoon" },
    { "RiddleNumber": 37, "Solution": "Nostradamus" },
    { "RiddleNumber": 38, "Solution": "The Revivalist" },
    { "RiddleNumber": 39, "Solution": "The Hypnotist" },
    { "RiddleNumber": 40, "Solution": "YHVH (Jehovah)" },
    { "RiddleNumber": 41, "Solution": "Jack McCall" },
    { "RiddleNumber": 42, "Solution": "Aeneas and Creusa" },
    { "RiddleNumber": 43, "Solution": "Hamlet, Rosencrantz and Gildenstern" },
    { "RiddleNumber": 44, "Solution": "Rex Nemorensis" },
    { "RiddleNumber": 45, "Solution": "The Seven Deadly Sins" },
    { "RiddleNumber": 46, "Solution": "Pawns" },
    { "RiddleNumber": 47, "Solution": "The Green Knight" },
    { "RiddleNumber": 48, "Solution": "Calypso" },
    { "RiddleNumber": 49, "Solution": "Mars" },
    { "RiddleNumber": 50, "Solution": "Gilgamesh and Enkidu" },
    { "RiddleNumber": 51, "Solution": "Indiana Jones" },
    { "RiddleNumber": 52, "Solution": "Osiris" },
    { "RiddleNumber": 53, "Solution": "Saint Veronica" },
    { "RiddleNumber": 54, "Solution": "The Universe" },
    { "RiddleNumber": 55, "Solution": "The Scopion and the Frog" },
    { "RiddleNumber": 56, "Solution": "Argos" },
    { "RiddleNumber": 57, "Solution": "Taliesin" },
    { "RiddleNumber": 58, "Solution": "Edgar Allan Poe" },
    { "RiddleNumber": 59, "Solution": "Absalom" },
    { "RiddleNumber": 60, "Solution": "The Queen of Hearts" },
    { "RiddleNumber": 61, "Solution": "The Gunfighter" },
    { "RiddleNumber": 62, "Solution": "The Twelve-Bar Blues" },
    { "RiddleNumber": 63, "Solution": "The Last Unicorn" },
    { "RiddleNumber": 64, "Solution": "The Dance of Death" },
    { "RiddleNumber": 65, "Solution": "Venus" },
    { "RiddleNumber": 66, "Solution": "Ficus Carica" },
    { "RiddleNumber": 67, "Solution": "The Hermit" },
    { "RiddleNumber": 68, "Solution": "Arthur and Merlin" },
    { "RiddleNumber": 69, "Solution": "Eris, Discord" },
    { "RiddleNumber": 70, "Solution": "Salt" },
    { "RiddleNumber": 71, "Solution": "Sappho" },
    { "RiddleNumber": 72, "Solution": "John Henry" },
    { "RiddleNumber": 73, "Solution": "Cronus" },
    { "RiddleNumber": 74, "Solution": "Samuel Taylor Coleridge" },
    { "RiddleNumber": 75, "Solution": "Ceridwen" },
    { "RiddleNumber": 76, "Solution": "Noah" },
    { "RiddleNumber": 77, "Solution": "The Plastic Surgeon" },
    { "RiddleNumber": 78, "Solution": "The Shopping Cart Theory" },
    { "RiddleNumber": 79, "Solution": "Isaac Newton" },
    { "RiddleNumber": 80, "Solution": "Penelope" },
    { "RiddleNumber": 81, "Solution": "Joan of Arc" },
    { "RiddleNumber": 82, "Solution": "Prometheus" },
    { "RiddleNumber": 83, "Solution": "Aliens" },
    { "RiddleNumber": 84, "Solution": "Zoroaster" },
    { "RiddleNumber": 85, "Solution": "Johnny Inkslinger" },
    { "RiddleNumber": 86, "Solution": "The Sibyl" },
    { "RiddleNumber": 87, "Solution": "R2D2 and C3PO" },
    { "RiddleNumber": 88, "Solution": "Strength" },
    { "RiddleNumber": 89, "Solution": "The Vampire" },
    { "RiddleNumber": 90, "Solution": "The Apostle Peter" },
    { "RiddleNumber": 91, "Solution": "Barley and Ceres (or Ninkasi)" },
    { "RiddleNumber": 92, "Solution": "Aslan" },
    { "RiddleNumber": 93, "Solution": "Ariadne, Theseus and Dionysus" },
    { "RiddleNumber": 94, "Solution": "The Undertaker" },
    { "RiddleNumber": 95, "Solution": "Odin" },
    { "RiddleNumber": 96, "Solution": "The North Star" },
    { "RiddleNumber": 97, "Solution": "The Buddha" },
    { "RiddleNumber": 98, "Solution": "Jumbo" },
    { "RiddleNumber": 99, "Solution": "Yoko Ono" },
    { "RiddleNumber": 100, "Solution": "T.S. Eliot" },
    { "RiddleNumber": 101, "Solution": "Hephaestus" },
    { "RiddleNumber": 102, "Solution": "Pythagoras" },
    { "RiddleNumber": 103, "Solution": "Lazarus" },
    { "RiddleNumber": 104, "Solution": "Einstein" },
    { "RiddleNumber": 105, "Solution": "The Road Agent" },
    { "RiddleNumber": 106, "Solution": "The Magician" },
    { "RiddleNumber": 107, "Solution": "Paris" },
    { "RiddleNumber": 108, "Solution": "Legion" },
    { "RiddleNumber": 109, "Solution": "General Tso" },
    { "RiddleNumber": 110, "Solution": "Shiva" },
    { "RiddleNumber": 111, "Solution": "Hannah" },
    { "RiddleNumber": 112, "Solution": "Elizabeth Barrett Browning" },
    { "RiddleNumber": 113, "Solution": "Doctor Who" },
    { "RiddleNumber": 114, "Solution": "Tobacco" },
    { "RiddleNumber": 115, "Solution": "Gollum" },
    { "RiddleNumber": 116, "Solution": "William Carlos Williams" },
    { "RiddleNumber": 117, "Solution": "Abraham" },
    { "RiddleNumber": 118, "Solution": "Daphne, the Laurel Tree" },
    { "RiddleNumber": 119, "Solution": "Scheherezade" },
    { "RiddleNumber": 120, "Solution": "Bronze" },
    { "RiddleNumber": 121, "Solution": "Taliesin and Ceridwen" },
    { "RiddleNumber": 122, "Solution": "Saint Christopher" },
    { "RiddleNumber": 123, "Solution": "Cassandra" },
    { "RiddleNumber": 124, "Solution": "The Wheel" },
    { "RiddleNumber": 125, "Solution": "Pyramus and Thisbe" },
    { "RiddleNumber": 126, "Solution": "Ion" },
    { "RiddleNumber": 127, "Solution": "Homer or Demodocus" },
    { "RiddleNumber": 128, "Solution": "Ian Anderson" },
    { "RiddleNumber": 129, "Solution": "The Tachyon" },
    { "RiddleNumber": 130, "Solution": "Aristotle" },
    { "RiddleNumber": 131, "Solution": "The Scribe" },
    { "RiddleNumber": 132, "Solution": "The Sphinx" },
    { "RiddleNumber": 133, "Solution": "The Villian" },
    { "RiddleNumber": 134, "Solution": "The Ghost" },
    { "RiddleNumber": 135, "Solution": "That Hellbound Train" },
    { "RiddleNumber": 136, "Solution": "Simon Magus" },
    { "RiddleNumber": 137, "Solution": "Elemental Wizard" },
    { "RiddleNumber": 138, "Solution": "The Shadow" },
    { "RiddleNumber": 139, "Solution": "The Three Dead Kings" },
    { "RiddleNumber": 140, "Solution": "The Fortune Teller" }
];

function changeVisibility(riddleNumber, value) {
    document.getElementById(`number${riddleNumber}`).style.visibility = value;
}

solutions.forEach(s => {
    const solution = s.Solution;
    const riddleNumber = s.RiddleNumber;

    document.write(`
        <p>
            <span 
                style='cursor: pointer' 
                onmouseover='changeVisibility(${riddleNumber}, "visible")'
                onmouseout='changeVisibility(${riddleNumber}, "hidden")'
            >
                ${riddleNumber}.
            </span>
            <span id='number${riddleNumber}' style='visibility: hidden'>
                ${solution}
            </span>
        </p>
        
    
    `);
    // const element = document.createElement("p");
    // const riddleNumber = document.createTextNode(s.RiddleNumber)
    // const solution = document.createTextNode(s.Solution)
    // element.appendChild(riddleNumber);
    // const main = document.getElementById("main");
    // document.body.insertBefore(riddleNumber, main);
    // document.body.insertBefore(solution, main)


})