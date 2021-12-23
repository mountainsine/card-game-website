function displayDecks() {

  // deck JSON array data
  var data =
  {
    "decks": [
      {
        "name": "Trickster Heifetz",
        "archetype": "MID",
        "link": "<a href='https://www.keyforgegame.com/deck-details/e26a8998-96a4-47a7-8262-68bf027d475d'>LINK</a>",
        "notes": "Well rounded COTA / Champion's Challenge + Rogue Ogre",
        "id": "e26a8998-96a4-47a7-8262-68bf027d475d",
        "tier": "0"
      },
      {
        "name": "The Warmaster that Stunts on Gravity",
        "archetype": "MARS",
        "link": "<a href='https://www.keyforgegame.com/deck-details/2ac77142-76c9-4a28-a158-9d566f6f9c07'>LINK</a>",
        "notes": "MGKAKA / Poltergeist",
        "id": "2ac77142-76c9-4a28-a158-9d566f6f9c07",
        "tier": "0"

      },
      {
        "name": "Bottomgold, the Officer of the Saloon",
        "archetype": "MID",
        "link": "<a href='https://www.keyforgegame.com/deck-details/7da7af56-2eeb-4df7-8a77-ef1f4f02f805'>LINK</a>",
        "notes": "Fuzzy Gruen / glimmer / Natures Call / Nepenthe Seed / x2 doorstep / x2 TMTP / x2 Ronnie / Brent the Fanatic / Life for a Life",
        "id": "7da7af56-2eeb-4df7-8a77-ef1f4f02f805",
        "tier": "0"
      },
      {
        "name": "Paimon, Lancaiar's Traveller",
        "archetype": "MARS",
        "link": "<a href='https://www.keyforgegame.com/deck-details/849c01a8-f0f9-4fab-be04-74a9c46df108'>LINK</a>",
        "notes": "MG / x4 Mars Needs Amber",
        "id": "849c01a8-f0f9-4fab-be04-74a9c46df108",
        "tier": "0"
      },
      {
        "name": "The Empress of Halesarth",
        "archetype": "MARS",
        "link": "<a href='https://www.keyforgegame.com/deck-details/73a0f95e-3bb6-4bb4-b4a2-5596b7f92e14'>LINK</a>",
        "notes": "Mars TMPTP / x3 Mind Warper / Autocannon / Mass Abduction",
        "id": "73a0f95e-3bb6-4bb4-b4a2-5596b7f92e14",
        "tier": "0"
      },
      {
        "name": "E. Burdett, the Manor Exorcist",
        "archetype": "COMBO",
        "link": "<a href='https://www.keyforgegame.com/deck-details/2180b8e4-4468-440b-864e-97023e53b7ba'>LINK</a>",
        "notes": "Hysteria / x2 Infurnace / x2 Tautatu / x2 Edie",
        "id": "2180b8e4-4468-440b-864e-97023e53b7ba",
        "tier": "0"
      },
      {
        "name": "Fairweather of Zephyrgorge",
        "archetype": "COMBO",
        "link": "<a href='https://www.keyforgegame.com/deck-details/3852d2f7-04d0-4f15-8e9d-5070b4994be3'>LINK</a>",
        "notes": "Library Access / Phase Shift / Arise",
        "id": "3852d2f7-04d0-4f15-8e9d-5070b4994be3",
        "tier": "0"
      },
      {
        "name": "Yeming Ramirez-Calidius, Hunter",
        "archetype": "RUSH",
        "link": "<a href='https://www.keyforgegame.com/deck-details/6303b11e-d0b5-4bd2-a790-030fbed7e02c'>LINK</a>",
        "notes": "x4 Hunting Witch / x3 Phase Shift / Doorstep",
        "id": "6303b11e-d0b5-4bd2-a790-030fbed7e02c",
        "tier": "0"
      },
      {
        "name": "Alphamouth, the “Consul” of Carpentry",
        "archetype": "MID",
        "link": "<a href='https://www.keyforgegame.com/deck-details/62f5b97f-cdd5-4253-ba99-8162a28e47e4'>LINK</a>",
        "notes": "x3 Eyegore / Eddie / x2 Wild Wormhole / Encounter Suit / Tribute / Graft",
        "id": "62f5b97f-cdd5-4253-ba99-8162a28e47e4",
        "tier": "0"
      },
      {
        "name": "Murik, Lyonroad's Scrivener",
        "archetype": "CONTROL",
        "link": "<a href='https://www.keyforgegame.com/deck-details/f2a8b932-bec3-4495-8f99-9d5479b55939'>LINK</a>",
        "notes": "x2 Horsemen / x3 succubus / x2 Cowards End",
        "id": "f2a8b932-bec3-4495-8f99-9d5479b55939",
        "tier": "0"
      },
      {
        "name": "Bard Toranid",
        "archetype": "MID",
        "link": "<a href='https://www.keyforgegame.com/deck-details/5bf972c2-cd88-4ff1-9a7a-1e55d5bab339'>LINK</a>",
        "notes": "2 Helper Bot / Graft / x2 TMTP / x2 Unlocked Gateway / Redacted",
        "id": "5bf972c2-cd88-4ff1-9a7a-1e55d5bab339",
        "tier": "1"
      },
      {
        "name": "The Peculiar Chef of Mandicorner",
        "archetype": "CONTROL",
        "link": "<a href='https://www.keyforgegame.com/deck-details/4d445c61-26cd-4956-8d7b-01bdce6ba4a9'>LINK</a>",
        "notes": "Quixxle Stone / Sci. Officer Morpheus / x2 Infurnace / x2 E’e on the Fringes / Hecatomb",
        "id": "4d445c61-26cd-4956-8d7b-01bdce6ba4a9",
        "tier": "1"
      },
    ]
  }




  // Output to Table variable.
  var output = "<table class='decks'>";
  // Add Static Table Headers
  output += "<tr><th>INV</th><th>NAME</th><th>TYPE</th><th>NOTES</th><th>LINK</th><th>ID</th></tr>"

  // Loop through the deck array
  for (var i in data.decks) {
    output += "<tr>" + "<td>" + "<input type='checkbox'></input>" + "<td>" + data.decks[i].name + "</td>" + "<td>" + data.decks[i].archetype + "</td>" + "<td>" + data.decks[i].notes + "</td>" + "<td>" + data.decks[i].link + "</td>" + "<td>" + data.decks[i].id + "</td>" + "</tr>";
    // DEBUG OUTPUT IGNORE
    // console.log(output);
  }

  output += "</ul>";

  // Output the data to the "deckLIST" element
  document.getElementById("deckLIST").innerHTML = output;
}

// Load displayDecks on window load
window.onload = displayDecks;