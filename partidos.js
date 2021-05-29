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
     pintarTablaPromedio(Standings);

    //FETCH DE MATCHES
    fetch("./matches.json")
      .then((answer) => answer.json())
      .then((info) => {
        let matches = info.matches;

        //  obtenerEquipo(nombreEquipo.value , matches)

        // console.log(obtenerEquipo(Standings[0].team.name))

        let filtrarTablaPorCondicion = (equipoElegido) => {
          let condicionEquipo = [];
          for (let i = 0; i < equipoElegido.length; i++) {
            if (radioGanado.checked == true) {
              condicionEquipo.push(equipoElegido[i]);
            } else if (radioEmpatado.checked == true) {
              condicionEquipo.push(equipoElegido[i]);
            } else if (radioPerdido.checked == true) {
              condicionEquipo.push(equipoElegido[i]);
            } else if (
              radioPerdido.checked == false &&
              radioGanado.checked == false &&
              radioEmpatado.checked == false
            ) {
              condicionEquipo = equipoElegido;
            } else if (
              radioPerdido.checked == false &&
              radioGanado.checked == false &&
              radioEmpatado.checked == false &&
              nombreEquipo.value == ""
            ) {
              error.innerHTML = "No has introducido ninguna condición!";
            }
          }
          return equipoElegido;
        };

        let limpiarPagina = () => {
          nombreEquipo.value = "";
          for (let i = 0; i < elementosRadio.length; i++) {
            elementosRadio[i].checked = false;
          }
          cuerpoTabla.innerHTML = "";
        };

        let resultadosCompletos = (partidos) => {
          for (let i = 0; i < partidos.length; i++) {
            if (partidos[i].status == "FINISHED") {
              let tr = document.createElement("tr");
              tr.innerHTML = ``;
            }
          }
        };
        // console.log(matches);
      });
  });

//DECLARACION FUNCIONES

let obtenerInformacion = () => {
  let url =
    "http://api.football-data.org/v2/competitions/PD/matches?dateFrom=2020-09-13&dateTo=2021-05-23";
  fetch(url, {
    method: "GET",
    headers: { "X-Auth-Token": "74972694e7e94ad898f69d3d5c0f74e3" },
  })
    .then((response) => response.json())
    .then((data) => {
      let partidos = data.matches;
      obtenerPartidos(partidos);
      pintarTablaPartidos(partidos);
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
    console.log(partidosEquipo);
  } else {
    for (let i = 0; i < partidos.length; i++) {
      if (
        partidos[i].awayTeam.name == equipoElegido ||
        partidos[i].homeTeam.name == equipoElegido
      ) {
        partidosEquipo.push(partidos[i]);
      }
    }
     limpiarPagina();
    console.log(partidosEquipo);
  }
};

let limpiarPagina = () => {
  nombreEquipo.value = "";
  // for (let i = 0; i < elementosRadio.length; i++) {
  //   elementosRadio[i].checked = false;
  // }
  cuerpoTabla.innerHTML = "";
};

let pintarTablaPartidos = (array) => {
  let thead = cabezaTablaPartidos;
  thead.innerHTML = `<th colspan="2">Equipo Local</th>
  <th>Resultado</th>
<th colspan="2">Equipo Visitante</th>
`;
  for (let i = 0; i < array.length; i++) {
    let tr = document.createElement("tr");
    tr.innerHTML = `
  <td>${array[i].homeTeam.name}</td>
  <td>${array[i].homeTeam.name}</td><td><img class="logo" src="https://crests.football-data.org/${array[i].homeTeam.id}.svg"></td>
  <td>${array[i].score.fullTime.homeTeam}</td>
  <td>${array[i].score.fullTime.awayTeam}</td>
  <td><img class="logo" src="https://crests.football-data.org/${array[i].awayTeam.id}.svg"></td>
  <td>${array[i].awayTeam.name}</td>`;
    cuerpoTablaPartidos.appendChild(tr);
  }
};

obtenerInformacion();
