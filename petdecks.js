function displayDecks() {

  // deck JSON array data
  var data =
  {
    "decks": [
      {
        "name": "Trickster Heifetz",
        "archetype": "MID",
        "notes": "Well rounded COTA / Champion's Challenge + Rogue Ogre",
        "id": "e26a8998-96a4-47a7-8262-68bf027d475d"
      },
      {
        "name": "The Warmaster that Stunts on Gravity",
        "archetype": "MARS",
        "notes": "MGKAKA / Poltergeist",
        "id": "2ac77142-76c9-4a28-a158-9d566f6f9c07"

      },
      {
        "name": "Bottomgold, the Officer of the Saloon",
        "archetype": "MID",
        "notes": "Fuzzy Gruen / glimmer / Natures Call / Nepenthe Seed / x2 doorstep / x2 TMTP / x2 Ronnie / Brent the Fanatic / Life for a Life",
        "id": "7da7af56-2eeb-4df7-8a77-ef1f4f02f805"
      }
    ]
  }

  // Output to Table variable.
  var output = "<table class='decks'>";
  // Add Static Table Headers
  output += "<tr><th>INV</th><th>NAME</th><th>TYPE</th><th>NOTES</th><th>LINK</th><th>ID</th></tr>"

  // Loop through the deck array
  for (var i in data.decks) {
    output += "<tr>" + "<td>" + "<input type='checkbox'></input>" + "<td>" + data.decks[i].name + "</td>" + "<td>" + data.decks[i].archetype + "</td>" + "<td>" + data.decks[i].notes + "</td>" + "<td>" + "LINK" + "</td>" + "<td>" + data.decks[i].id + "</td>" + "</tr>";
    // DEBUG OUTPUT IGNORE
    // console.log(output);
  }

  output += "</ul>";

  // Output the data to the "deckLIST" element
  document.getElementById("deckLIST").innerHTML = output;
}

// Load displayDecks on window load
window.onload = displayDecks;


