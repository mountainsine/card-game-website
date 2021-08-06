window.addEventListener("load", function(){

    var petdecks = [
      "Pan, Vapidhurst's Musician", 
      "Eva, the Justiciar of Godwillow", 
      "Xtraveo of the Hunter's Canyon", 
      ];
  
    // (B) CREATE HTML TABLE STRING
    var perrow = 1, // 2 CELLS PER ROW
        html = "<table> <th>DECKS</th><tr>";
  
    // LOOP THROUGH ARRAY AND ADD TABLE CELLS
    for (var i=0; i<petdecks.length; i++) {
      // "NORMAL" CELL
      html += `<td>${petdecks[i]}</td>`;
  
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

