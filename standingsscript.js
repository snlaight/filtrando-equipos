let standings2021 = document.getElementById('standings2021')

 let positionTable = standings[0].standings[0].table;
 console.log(positionTable);

for (let i=0; i<positionTable.length; i++){
    if(positionTable[0].type = "TOTAL"){
        let tr=document.createElement("tr");
        tr.innerHTML = `<td>${positionTable[i].position}</td><td><img class="logo" src="${positionTable[i].team.crestUrl}"></td><td>${positionTable[i].team.name}</td><td>${positionTable[i].won}</td><td>${positionTable[i].lost}</td><td>${positionTable[i].draw}</td><td>${positionTable[i].goalDifference}</td><td>${positionTable[i].goalsFor}</td><td>${positionTable[i].goalsAgainst}</td><td>${positionTable[i].points}</td><td>${positionTable[i].form}</td>`
        standings2021.appendChild(tr);
}
   }