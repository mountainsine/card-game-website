window.addEventListener("load", function(){

    var petdecks = [
      { name: "Pan, Vapidhurst's Musician", tier: 1},
      { name: "Eva, the Justiciar of Godwillow", tier: 1 },
      { name: "Xtraveo of the Hunter's Canyon",  tier: 1 },
    ]

    // (B) CREATE HTML TABLE STRING
    var perrow = 2, // 2 CELLS PER ROW
        html = "<table> <th>DECKS</th><th>OWN?</th><tr>";
  
    // LOOP THROUGH ARRAY AND ADD TABLE CELLS
    for (var i=0; i<petdecks.length; i++) {
      petdecks = petdecks.values(this.name);
      // "NORMAL" CELL
      html += `<td>${petdecks[i]}</td><tr><tr>`;
  
      // CLICK ON CELL TO DO SOMETHING 
      // html += `<td onclick="FUNCTION()">${petdecks[i]}</td>`;
    
      // TO PASS IN A RUNNING NUMBER OR PARAMETER
      // html += `<td onclick="FUNCTION(${i})">${petdecks[i]}</td>`;
   
      // BREAK INTO NEXT ROW
      var next = i+1;
      if (next%perrow==0 && next!=petdecks.length) {
        html += "</tr><tr>";
      }
    }
    html += "</tr></table>";

    // (C) ATTACH HTML TO CONTAINER
  document.getElementById("petdeckscontainer").innerHTML = html;
    
  });

