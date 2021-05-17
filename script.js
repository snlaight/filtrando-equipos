let filteredMatches = matches[0].matches;


console.log(filteredMatches[0]);

let tableBody= document.getElementById('table-body');
let tableScheduled = document.getElementById('table-scheduled');
let matchday1 = document.getElementById("fecha-1");
let standings2021 = document.getElementById('standings2021')

for(let i=0; i<filteredMatches.length; i++){
    if(filteredMatches[i].status == "FINISHED") {
    let tr= document.createElement("tr");
    tr.innerHTML = `<td>${filteredMatches[i].awayTeam.name}</td><td>${filteredMatches[i].score.fullTime.awayTeam} - ${filteredMatches[i].score.fullTime.homeTeam} </td> <td>${filteredMatches[i].homeTeam.name}</td>`;
    tableBody.appendChild(tr)
    }
}

// for (let i=0; i<filteredMatches.length; i++){
//     if(filteredMatches[i].status=="SCHEDULED"){
//         let tr=document.createElement("tr");
//         tr.innerHTML = `<td> ${filteredMatches[i].homeTeam.name}</td> - <td> ${filteredMatches[i].awayTeam.name}`
//         tableScheduled.appendChild(tr)
//     }
// }

 for (let i=0; i<filteredMatches.length;i++){
     if(filteredMatches[i].matchday == 1 && filteredMatches[i].status =="FINISHED"){
         let tr=document.createElement("tr");
         tr.innerHTML = `<td>${filteredMatches[i].awayTeam.name}</td><td>${filteredMatches[i].score.fullTime.awayTeam} - ${filteredMatches[i].score.fullTime.homeTeam} </td> <td>${filteredMatches[i].homeTeam.name}</td>`
            matchday1.appendChild(tr)
        }
 }


 /// STANDINGS

 let positionTable = standings[0].standings[0].table;
 console.log(positionTable);

for (let i=0; i<positionTable.length; i++){
    if(positionTable[0].type = "TOTAL"){
        let tr=document.createElement("tr");
        tr.innerHTML = `<td>${positionTable[i].position}</td> <td> ${positionTable[i].team.name}</td><td>${positionTable[i].points}</td><td>${positionTable[i].won}</td><td>${positionTable[i].lost}</td><td>${positionTable[i].draw}</td>`
        standings2021.appendChild(tr)
}
   }
