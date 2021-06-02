let nombreEquipo = document.getElementById("NombreEquipo");
let radioGanado = document.getElementById("radio-ganado");
let radioEmpatado = document.getElementById("radio-empatado");
let radioPerdido = document.getElementById("radio-perdido");
let elementosRadio = document.getElementsByClassName("filtroPartidos");
let cabezaTabla = document.getElementById("cabezaTabla");
let cuerpoTabla = document.getElementById("equipoFiltrado");
let error = document.getElementById("error");
let cabezaTablaPartidos = document.getElementById("cabezaTablaPartidos");
let cuerpoTablaPartidos = document.getElementById("partidosEquipo");
let loader = document.getElementById("loader");

fetch("./standings.json")
  .then((response) => response.json())
  .then((data) => {
    //VARIABLES GLOBALES
    let Standings = data.standings[0].table;
    let StandingsHome = data.standings[1].table;
    let StandingsAway = data.standings[2].table;

    //FUNCIONES

    // let botonPulsado = () => {
    //   let ValorEquipo = nombreEquipo.value;
    //   let equipo = obtenerEquipo(ValorEquipo);
    //   let tablaFiltrada = filtrarTablaPorCondicion(equipo);
    //   limpiarPagina();
    //   pintarTablaPromedio(tablaFiltrada);
    // };

    let pintarTablaPromedio = (array) => {
      let thead = cabezaTabla;
      thead.innerHTML = `<th>Posicion</th>
      <th colspan="2">Equipo</th>
  <th>PJ</th>
  <th>PG</th>
  <th>PP</th>
  <th>PE</th>
  <th>DG</th>
  <th>GF</th>
  <th>GC</th>
  <th>Puntos</th>`;
      for (let i = 0; i < array.length; i++) {
        let tr = document.createElement("tr");
        tr.innerHTML = `
      <th>${array[i].position}</th><td><img class="logo" src="https://crests.football-data.org/${array[i].team.id}.svg"></td>
      <td>${array[i].team.name}</td><td>${array[i].playedGames}</td>
      <td>${array[i].won}</td>
      <td>${array[i].lost}</td>
      <td>${array[i].draw}</td>
      <td>${array[i].goalDifference}</td>
      <td>${array[i].goalsFor}</td>
      <td>${array[i].goalsAgainst}</td>
      <td>${array[i].points}</td>`;
        cuerpoTabla.appendChild(tr);
      }
    };

    //DECLARACION FUNCIONES
    // pintarTablaPromedio(Standings);
  });

//DECLARACION FUNCIONES

let obtenerInformacion = (primerRender) => {
  let url =
    "http://api.football-data.org/v2/competitions/PD/matches?dateFrom=2020-09-13&dateTo=2021-05-23";
  fetch(url, {
    method: "GET",
    headers: { "X-Auth-Token": "74972694e7e94ad898f69d3d5c0f74e3" },
  })
    .then((response) => response.json())
    .then((data) => {
      let partidos = data.matches;
      if (primerRender == "render") {
        pintarTablaPartidos(partidos);
      }
      obtenerPartidos(partidos);
    });
};

let botonPulsado = () => {
  obtenerInformacion();
};
let obtenerPartidos = (partidos) => {
  console.log(nombreEquipo.value);
  let equipoElegido = nombreEquipo.value;
  let partidosEquipo = [];
  if (equipoElegido == "") {
    partidosEquipo = partidos;
    pintarTablaPartidos(partidosEquipo);
  } else {
    for (let i = 0; i < partidos.length; i++) {
      if (
        radioGanado.checked == true &&
        ((partidos[i].score.winner == "HOME_TEAM" &&
          partidos[i].homeTeam.name == equipoElegido) ||
          (partidos[i].score.winner == "AWAY_TEAM" &&
            partidos[i].awayTeam.name == equipoElegido))
      ) {
        partidosEquipo.push(partidos[i]);
      } else if (
        radioPerdido.checked == true &&
        ((partidos[i].score.winner == "AWAY_TEAM" &&
          partidos[i].homeTeam.name == equipoElegido) ||
          (partidos[i].score.winner == "HOME_TEAM" &&
            partidos[i].awayTeam.name == equipoElegido))
      ) {
        partidosEquipo.push(partidos[i]);
      } else if (
        radioEmpatado.checked == true &&
        ((partidos[i].score.winner == "DRAW" &&
          partidos[i].homeTeam.name == equipoElegido) ||
          (partidos[i].score.winner == "DRAW" &&
            partidos[i].awayTeam.name == equipoElegido))
      ) {
        partidosEquipo.push(partidos[i]);
      } 
    }
    limpiarPagina();
  }
  // esconderLoader();
  pintarTablaPartidos(partidosEquipo);
};

let limpiarPagina = () => {
  nombreEquipo.value = "";
  for (let i = 0; i < elementosRadio.length; i++) {
    elementosRadio[i].checked = false;
  }
  cuerpoTablaPartidos.innerHTML = "";
};

let pintarTablaPartidos = (partidos) => {
  limpiarPagina();
  let thead = cabezaTablaPartidos;
  thead.innerHTML = `<th colspan="2">Equipo Local</th>
  <th>Resultado</th>
<th colspan="2">Equipo Visitante</th>
`;
  for (let i = 0; i < partidos.length; i++) {
    let tr = document.createElement("tr");
    tr.innerHTML = `
  <td>${partidos[i].homeTeam.name}</td><td><img class="logo" src="https://crests.football-data.org/${partidos[i].homeTeam.id}.svg"></td>
  <td>${partidos[i].score.fullTime.homeTeam} - 
  ${partidos[i].score.fullTime.awayTeam}</td>
  <td><img class="logo" src="https://crests.football-data.org/${partidos[i].awayTeam.id}.svg"></td>
  <td>${partidos[i].awayTeam.name}</td>`;
    cuerpoTablaPartidos.appendChild(tr);
  }
};

let esconderLoader = () => {
  document.getElementById("loader").style.display = none;
};
obtenerInformacion("render");
