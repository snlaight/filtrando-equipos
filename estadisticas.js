//VARIABLES GLOBALES
let goalAverage = document.getElementById("goalAverage2021");
let table = standings[0].standings[0].table;
let newStats = [];



//FUNCIONES
let estadisticas = (teams) => {
  for (let i = 0; i < teams.length; i++) {
    let name = teams[i].team.name;
    let logoID = teams[i].team.id;
    let golesEquipo = teams[i].goalsFor;
    let partidosEquipo = teams[i].playedGames;
    let promedioGol = golesEquipo / partidosEquipo;
    let promediGolRedondado = round(promedioGol);
    let equipoNuevo = {
      name: name,
      logoID: logoID,
      goalsFor: golesEquipo,
      PG: partidosEquipo,
      avg: promediGolRedondado,
    };
    newStats.push(equipoNuevo);
  }
  let sortedStats = newStats.sort((a, b) => {
    return b.avg - a.avg;
  });
  console.log(sortedStats);
};
console.log(newStats);
let round = (num, decimales = 2) => {
  var signo = num >= 0 ? 1 : -1;
  num = num * signo;
  if (decimales === 0) return signo * Math.round(num);
  num = num.toString().split("e");
  num = Math.round(
    +(num[0] + "e" + (num[1] ? +num[1] + decimales : decimales))
  );
  num = num.toString().split("e");
  return signo * (num[0] + "e" + (num[1] ? +num[1] - decimales : -decimales));
};

let pintarTablaPromedio = (array) => {
  for (let i = 0; i < array.length; i++) {
    let tr = document.createElement("tr");
    tr.innerHTML = `
    <td><img class="logo" src="https://crests.football-data.org/${array[i].logoID}.svg"></td>
    <td>${array[i].name}</td><td>${array[i].PG}</td>
    <td>${array[i].avg}</td>`;

    goalAverage.appendChild(tr);
  }
};


//DECLARACION FUNCIONES
estadisticas(table);
pintarTablaPromedio(newStats);
