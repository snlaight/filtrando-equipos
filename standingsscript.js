let standings2021 = document.getElementById("standings2021");

let positionTable = standings[0].standings[0].table;
console.log(positionTable);

let formW = "images/download.svg";
let formD = "images/draw.svg";
let formL = "images/loss.svg";

for (let i = 0; i < positionTable.length; i++) {
  let form = positionTable[i].form;
  console.log(form);
  let formString = form.split(",");
  let formIcons = [];
  for (let i = 0; i < formString.length; i++) {
    if (formString[i] == "W") {
      formIcons.push(formW);
    } else if (formString[i] == "D") {
      formIcons.push(formD);
    } else if (formString[i] == "L") {
      formIcons.push(formL);
    }
  }
  if ((positionTable[0].type = "TOTAL")) {
    let tr = document.createElement("tr");
    tr.innerHTML = `<td>${positionTable[i].position}</td><td><img class="logo" src="${positionTable[i].team.crestUrl}"></td><td>${positionTable[i].team.name}</td><td>${positionTable[i].won}</td><td>${positionTable[i].lost}</td><td>${positionTable[i].draw}</td><td>${positionTable[i].goalDifference}</td><td>${positionTable[i].goalsFor}</td><td>${positionTable[i].goalsAgainst}</td><td>${positionTable[i].points}</td><td class="form"><img src=${formIcons[0]}></td><td class="form"><img src=${formIcons[1]}></td><td class="form"><img src=${formIcons[2]}></td><td class="form"><img src=${formIcons[3]}></td><td class="form"><img src=${formIcons[4]}></td>`;
    standings2021.appendChild(tr);
  }
}

// let formW = formString[0];
// let formD = formString[1];
// let formL = formString[3];
// console.log(formW, formD, formL)

// let ultimos5 = [];
// for(let i=0; i<form.length ; i++){
//     if(form == "W") {
//     ultimos5.push(form)
//     ultimos5.push(`<img src="download.svg"></img>`)
// }

// }

// console.log(ultimos5)
//   for(let i=0; i<positionTable[i].form.length; i++){
//       if (positionTable[0].innerHTML = "W"){
//           innerHTML.replace("W",`<img src="download.svg">`)
//       }
//   }
