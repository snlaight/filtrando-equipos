//VARIABLES GLOBALES
let goalAverage = document.getElementById("goalAverage2021");
let golesEnContra2021 = document.getElementById("golesEnContra2021");
let headGolesEnContra2021 = document.getElementById("headGolesEnContra");
let table = standings[0].standings[0].table;
let tableAway = standings[0].standings[2].table;
let newStats = [];
let fueraDeCasa = [];

console.log(tableAway);

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

let estadisticasAway = (teams) => {
  for (let i = 0; i < teams.length; i++) {
    let name = teams[i].team.name;
    let logoID = teams[i].team.id;
    let golesEnContra = teams[i].goalsAgainst;
    let partidosEquipo = teams[i].playedGames;
    let promedioGolenContra = golesEnContra / partidosEquipo;
    let promediGolRedondeado = round(promedioGolenContra);
    let equiposFdC = {
      name: name,
      logoID: logoID,
      goalsAgainst: golesEnContra,
      PJ: partidosEquipo,
      avg: promediGolRedondeado,
    };
    fueraDeCasa.push(equiposFdC);
  }
  let statsOrganizadas = fueraDeCasa.sort((a, b) => {
    return b.avg - a.avg;
  });
  console.log(statsOrganizadas);
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

let pintarTablaPromedioLimitada = (array) => {
  for (let i = 0; i < 5; i++) {
    let tr = document.createElement("tr");
    tr.innerHTML = `
    <td><img class="logo" src="https://crests.football-data.org/${array[i].logoID}.svg"></td>
    <td>${array[i].name}</td><td>${array[i].PG}</td>
    <td>${array[i].avg}</td>`;

    goalAverage.appendChild(tr);
  }
};

let pintarTablaPromedioenContra = (array) => {
  for (let i = 0; i < 5; i++) {
    let tr = document.createElement("tr");
    tr.innerHTML = `
    <td><img class="logo" src="https://crests.football-data.org/${array[i].logoID}.svg"></td>
    <td>${array[i].name}</td><td>${array[i].PJ}</td>
    <td>${array[i].avg}</td>`;
    golesEnContra2021.appendChild(tr);
  }
};
//DECLARACION FUNCIONES
estadisticas(table);
pintarTablaPromedioLimitada(newStats);
estadisticasAway(tableAway);
pintarTablaPromedioenContra(fueraDeCasa);
